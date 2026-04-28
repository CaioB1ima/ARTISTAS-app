import {
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { ScreenContainer } from '@/components/screen-container';
import { useColors } from '@/hooks/use-colors';

interface FormData {
  artistName: string;
  email: string;
  comment: string;
  spotifyLink: string;
  genre: string;
  country: string;
  popularity: number;
  yearsActive: number;
  isActive: boolean;
  isRecommended: boolean;
}

export default function FormScreen() {
  const colors = useColors();
  const [formData, setFormData] = useState<FormData>({
    artistName: '',
    email: '',
    comment: '',
    spotifyLink: '',
    genre: 'Pop',
    country: 'Brasil',
    popularity: 5,
    yearsActive: 5,
    isActive: true,
    isRecommended: false,
  });

  const handleSubmit = () => {
    alert(
      `Artista Descoberto!\n\nNome: ${formData.artistName}\nEmail: ${formData.email}\nComentário: ${formData.comment}\nSpotify: ${formData.spotifyLink}\nGênero: ${formData.genre}\nPaís: ${formData.country}\nPopularidade: ${Math.round(formData.popularity)}/10\nAnos Ativo: ${Math.round(formData.yearsActive)}\nAtivo: ${formData.isActive}\nRecomendado: ${formData.isRecommended}`
    );
  };

  const handleReset = () => {
    setFormData({
      artistName: '',
      email: '',
      comment: '',
      spotifyLink: '',
      genre: 'Pop',
      country: 'Brasil',
      popularity: 5,
      yearsActive: 5,
      isActive: true,
      isRecommended: false,
    });
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-6">
          {/* Título */}
          <View>
            <Text className="text-3xl font-bold text-foreground">
              Descobrir Artista
            </Text>
            <Text className="text-sm text-muted mt-1">
              Compartilhe um novo artista que você descobriu
            </Text>
          </View>

          {/* TextInput 1: Nome do Artista */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Nome do Artista</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                color: colors.foreground,
                backgroundColor: colors.surface,
              }}
              placeholder="Digite o nome do artista"
              placeholderTextColor={colors.muted}
              value={formData.artistName}
              onChangeText={(text) =>
                setFormData({ ...formData, artistName: text })
              }
            />
          </View>

          {/* TextInput 2: Email */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Email</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                color: colors.foreground,
                backgroundColor: colors.surface,
              }}
              placeholder="seu@email.com"
              placeholderTextColor={colors.muted}
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) =>
                setFormData({ ...formData, email: text })
              }
            />
          </View>

          {/* TextInput 3: Comentário */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Comentário</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                color: colors.foreground,
                backgroundColor: colors.surface,
                minHeight: 80,
                textAlignVertical: 'top',
              }}
              placeholder="Conte por que você gosta deste artista"
              placeholderTextColor={colors.muted}
              multiline
              numberOfLines={4}
              value={formData.comment}
              onChangeText={(text) =>
                setFormData({ ...formData, comment: text })
              }
            />
          </View>

          {/* TextInput 4: Link do Spotify */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">
              Link do Spotify
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                color: colors.foreground,
                backgroundColor: colors.surface,
              }}
              placeholder="https://open.spotify.com/artist/..."
              placeholderTextColor={colors.muted}
              value={formData.spotifyLink}
              onChangeText={(text) =>
                setFormData({ ...formData, spotifyLink: text })
              }
            />
          </View>

          {/* Picker 1: Gênero Musical */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">
              Gênero Musical
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 8,
                backgroundColor: colors.surface,
                overflow: 'hidden',
              }}
            >
              <Picker
                selectedValue={formData.genre}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, genre: value })
                }
                style={{ color: colors.foreground }}
              >
                <Picker.Item label="Pop" value="Pop" />
                <Picker.Item label="Rock" value="Rock" />
                <Picker.Item label="Hip-Hop/Rap" value="Hip-Hop/Rap" />
                <Picker.Item label="R&B" value="R&B" />
                <Picker.Item label="Eletrônico" value="Eletrônico" />
                <Picker.Item label="Country" value="Country" />
                <Picker.Item label="Reggaeton" value="Reggaeton" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>
          </View>

          {/* Picker 2: País de Origem */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">
              País de Origem
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 8,
                backgroundColor: colors.surface,
                overflow: 'hidden',
              }}
            >
              <Picker
                selectedValue={formData.country}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, country: value })
                }
                style={{ color: colors.foreground }}
              >
                <Picker.Item label="Brasil" value="Brasil" />
                <Picker.Item label="Estados Unidos" value="Estados Unidos" />
                <Picker.Item label="Canadá" value="Canadá" />
                <Picker.Item label="Reino Unido" value="Reino Unido" />
                <Picker.Item label="Espanha" value="Espanha" />
                <Picker.Item label="França" value="França" />
                <Picker.Item label="Alemanha" value="Alemanha" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>
          </View>

          {/* Slider 1: Popularidade */}
          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-foreground">
                Popularidade (1-10)
              </Text>
              <Text className="text-sm font-bold text-primary">
                {Math.round(formData.popularity)}
              </Text>
            </View>
            <Slider
              style={{ height: 40 }}
              minimumValue={1}
              maximumValue={10}
              step={1}
              value={formData.popularity}
              onValueChange={(value: number) =>
                setFormData({ ...formData, popularity: value })
              }
              minimumTrackTintColor="#0a7ea4"
              maximumTrackTintColor={colors.border}
            />
          </View>

          {/* Slider 2: Anos Ativo */}
          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-foreground">
                Anos Ativo
              </Text>
              <Text className="text-sm font-bold text-primary">
                {Math.round(formData.yearsActive)}
              </Text>
            </View>
            <Slider
              style={{ height: 40 }}
              minimumValue={0}
              maximumValue={70}
              step={1}
              value={formData.yearsActive}
              onValueChange={(value: number) =>
                setFormData({ ...formData, yearsActive: value })
              }
              minimumTrackTintColor="#0a7ea4"
              maximumTrackTintColor={colors.border}
            />
          </View>

          {/* Switch 1: Ativo */}
          <View className="flex-row items-center justify-between bg-surface rounded-lg p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground">
              Artista Ativo
            </Text>
            <Switch
              value={formData.isActive}
              onValueChange={(value) =>
                setFormData({ ...formData, isActive: value })
              }
              trackColor={{ false: colors.border, true: '#0a7ea4' }}
            />
          </View>

          {/* Switch 2: Recomendado */}
          <View className="flex-row items-center justify-between bg-surface rounded-lg p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground">
              Recomendado
            </Text>
            <Switch
              value={formData.isRecommended}
              onValueChange={(value) =>
                setFormData({ ...formData, isRecommended: value })
              }
              trackColor={{ false: colors.border, true: '#0a7ea4' }}
            />
          </View>

          {/* Botões */}
          <View className="flex-row gap-4 mt-6">
            <Pressable
              onPress={handleSubmit}
              style={({ pressed }) => [
                {
                  flex: 1,
                  backgroundColor: '#0a7ea4',
                  paddingVertical: 12,
                  borderRadius: 8,
                  alignItems: 'center',
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Text className="text-white font-semibold">Enviar</Text>
            </Pressable>

            <Pressable
              onPress={handleReset}
              style={({ pressed }) => [
                {
                  flex: 1,
                  backgroundColor: colors.surface,
                  paddingVertical: 12,
                  borderRadius: 8,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: colors.border,
                  opacity: pressed ? 0.6 : 1,
                },
              ]}
            >
              <Text className="text-foreground font-semibold">Limpar</Text>
            </Pressable>
          </View>

          <View className="h-6" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
