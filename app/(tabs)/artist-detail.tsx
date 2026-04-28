import { ScrollView, Text, View, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { artists } from '@/data/artists';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColors } from '@/hooks/use-colors';

export default function ArtistDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colors = useColors();

  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <ScreenContainer className="flex-1 items-center justify-center">
        <Text className="text-foreground text-lg">Artista não encontrado</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
          {/* Header com botão voltar */}
          <View className="flex-row items-center justify-between p-4 bg-surface border-b border-border">
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <IconSymbol name="chevron.left.forwardslash.chevron.right" size={24} color={colors.foreground} />
            </Pressable>
            <Text className="text-xl font-bold text-foreground flex-1 ml-4">
              Detalhes do Artista
            </Text>
          </View>

          {/* Imagem do artista */}
          <Image
            source={{ uri: artist.image }}
            className="w-full h-64"
            resizeMode="cover"
          />

          {/* Informações */}
          <View className="p-6 gap-4">
            <View>
              <Text className="text-3xl font-bold text-foreground mb-2">
                {artist.name}
              </Text>
              <View className="flex-row gap-2 mb-3">
                <View className="bg-primary rounded-full px-3 py-1">
                  <Text className="text-xs font-semibold text-white">
                    {artist.genre}
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-6">
                <View>
                  <Text className="text-sm text-muted">País</Text>
                  <Text className="text-base font-semibold text-foreground">
                    {artist.country}
                  </Text>
                </View>
                <View>
                  <Text className="text-sm text-muted">Ativo desde</Text>
                  <Text className="text-base font-semibold text-foreground">
                    {artist.yearsActive}
                  </Text>
                </View>
                <View>
                  <Text className="text-sm text-muted">Popularidade</Text>
                  <Text className="text-base font-semibold text-primary">
                    {artist.popularity}/100
                  </Text>
                </View>
              </View>
            </View>

            <View className="bg-surface rounded-lg p-4 border border-border">
              <Text className="text-lg font-semibold text-foreground mb-2">
                Biografia
              </Text>
              <Text className="text-base text-foreground leading-relaxed">
                {artist.longDescription}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
