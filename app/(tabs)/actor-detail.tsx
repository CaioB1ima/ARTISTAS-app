import { ScrollView, Text, View, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { actors } from '@/data/actors';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColors } from '@/hooks/use-colors';

export default function ActorDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colors = useColors();

  const actor = actors.find((a) => a.id === id);

  if (!actor) {
    return (
      <ScreenContainer className="flex-1 items-center justify-center">
        <Text className="text-foreground text-lg">Ator não encontrado</Text>
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
              Detalhes
            </Text>
          </View>

          {/* Imagem do ator */}
          <Image
            source={{ uri: actor.image }}
            className="w-full h-64"
            resizeMode="cover"
          />

          {/* Informações */}
          <View className="p-6 gap-4">
            <View>
              <Text className="text-3xl font-bold text-foreground mb-2">
                {actor.name}
              </Text>
              <View className="flex-row gap-4">
                <View>
                  <Text className="text-sm text-muted">Nacionalidade</Text>
                  <Text className="text-base font-semibold text-foreground">
                    {actor.nationality}
                  </Text>
                </View>
                <View>
                  <Text className="text-sm text-muted">Nascimento</Text>
                  <Text className="text-base font-semibold text-foreground">
                    {actor.birthYear}
                  </Text>
                </View>
              </View>
            </View>

            <View className="bg-surface rounded-lg p-4 border border-border">
              <Text className="text-lg font-semibold text-foreground mb-2">
                Sobre
              </Text>
              <Text className="text-base text-foreground leading-relaxed">
                {actor.longDescription}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
