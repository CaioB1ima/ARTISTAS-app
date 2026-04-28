import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { ArtistCard } from '@/components/artist-card';
import { artists } from '@/data/artists';

export default function HomeScreen() {
  const router = useRouter();

  const handleArtistPress = (artistId: string) => {
    router.push({
      pathname: '/(tabs)/artist-detail',
      params: { id: artistId },
    });
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-4">
          {/* Header */}
          <View className="mb-4">
            <Text className="text-3xl font-bold text-foreground">
              Descoberta de Artistas
            </Text>
            <Text className="text-sm text-muted mt-1">
              Conheça os maiores artistas da música
            </Text>
          </View>

          {/* Lista de Artistas */}
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              name={artist.name}
              genre={artist.genre}
              shortDescription={artist.shortDescription}
              image={artist.image}
              onPress={() => handleArtistPress(artist.id)}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
