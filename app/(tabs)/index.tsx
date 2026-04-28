import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { ActorCard } from '@/components/actor-card';
import { actors } from '@/data/actors';

export default function HomeScreen() {
  const router = useRouter();

  const handleActorPress = (actorId: string) => {
    router.push({
      pathname: '/(tabs)/actor-detail',
      params: { id: actorId },
    });
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-4">
          {/* Header */}
          <View className="mb-4">
            <Text className="text-3xl font-bold text-foreground">
              Atores & Atrizes
            </Text>
            <Text className="text-sm text-muted mt-1">
              Conheça os melhores atores do cinema
            </Text>
          </View>

          {/* Lista de Atores */}
          {actors.map((actor) => (
            <ActorCard
              key={actor.id}
              name={actor.name}
              shortDescription={actor.shortDescription}
              image={actor.image}
              onPress={() => handleActorPress(actor.id)}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
