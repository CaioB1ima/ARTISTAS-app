import { View, Text, Image, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

interface ArtistCardProps {
  name: string;
  genre: string;
  shortDescription: string;
  image: string;
  onPress: () => void;
}

export function ArtistCard({
  name,
  genre,
  shortDescription,
  image,
  onPress,
}: ArtistCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <View className="bg-surface rounded-lg overflow-hidden shadow-sm border border-border mb-4">
        <Image
          source={{ uri: image }}
          className="w-full h-48"
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-lg font-bold text-foreground mb-1">
            {name}
          </Text>
          <Text className="text-xs font-semibold text-primary mb-2">
            {genre}
          </Text>
          <Text className="text-sm text-muted" numberOfLines={2}>
            {shortDescription}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
