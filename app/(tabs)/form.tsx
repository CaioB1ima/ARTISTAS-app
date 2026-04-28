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
  name: string;
  email: string;
  bio: string;
  phone: string;
  nationality: string;
  gender: string;
  experience: number;
  popularity: number;
  isActive: boolean;
  isAvailable: boolean;
}

export default function FormScreen() {
  const colors = useColors();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    bio: '',
    phone: '',
    nationality: 'Brasileira',
    gender: 'Não especificado',
    experience: 5,
    popularity: 5,
    isActive: true,
    isAvailable: true,
  });

  const handleSubmit = () => {
    alert(
      `Formulário enviado!\n\nNome: ${formData.name}\nEmail: ${formData.email}\nBio: ${formData.bio}\nTelefone: ${formData.phone}\nNacionalidade: ${formData.nationality}\nGênero: ${formData.gender}\nExperiência: ${Math.round(formData.experience)} anos\nPopularidade: ${Math.round(formData.popularity)}/10\nAtivo: ${formData.isActive}\nDisponível: ${formData.isAvailable}`
    );
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      bio: '',
      phone: '',
      nationality: 'Brasileira',
      gender: 'Não especificado',
      experience: 5,
      popularity: 5,
      isActive: true,
      isAvailable: true,
    });
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 gap-6">
          {/* Título */}
          <View>
            <Text className="text-3xl font-bold text-foreground">
              Cadastro de Ator
            </Text>
            <Text className="text-sm text-muted mt-1">
              Preencha os dados abaixo
            </Text>
          </View>

          {/* TextInput 1: Nome */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Nome</Text>
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
              placeholder="Digite seu nome"
              placeholderTextColor={colors.muted}
              value={formData.name}
              onChangeText={(text) =>
                setFormData({ ...formData, name: text })
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

          {/* TextInput 3: Bio */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Bio</Text>
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
              placeholder="Conte sobre você"
              placeholderTextColor={colors.muted}
              multiline
              numberOfLines={4}
              value={formData.bio}
              onChangeText={(text) =>
                setFormData({ ...formData, bio: text })
              }
            />
          </View>

          {/* TextInput 4: Telefone */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">
              Telefone
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
              placeholder="(11) 99999-9999"
              placeholderTextColor={colors.muted}
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(text) =>
                setFormData({ ...formData, phone: text })
              }
            />
          </View>

          {/* Picker 1: Nacionalidade */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">
              Nacionalidade
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
                selectedValue={formData.nationality}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, nationality: value })
                }
                style={{ color: colors.foreground }}
              >
                <Picker.Item label="Brasileira" value="Brasileira" />
                <Picker.Item label="Americana" value="Americana" />
                <Picker.Item label="Europeia" value="Europeia" />
                <Picker.Item label="Asiática" value="Asiática" />
                <Picker.Item label="Africana" value="Africana" />
                <Picker.Item label="Outra" value="Outra" />
              </Picker>
            </View>
          </View>

          {/* Picker 2: Gênero */}
          <View className="gap-2">
            <Text className="text-sm font-semibold text-foreground">
              Gênero
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
                selectedValue={formData.gender}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, gender: value })
                }
                style={{ color: colors.foreground }}
              >
                <Picker.Item label="Não especificado" value="Não especificado" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>
          </View>

          {/* Slider 1: Experiência */}
          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-foreground">
                Experiência (anos)
              </Text>
              <Text className="text-sm font-bold text-primary">
                {Math.round(formData.experience)}
              </Text>
            </View>
            <Slider
              style={{ height: 40 }}
              minimumValue={0}
              maximumValue={50}
              step={1}
              value={formData.experience}
              onValueChange={(value: number) =>
                setFormData({ ...formData, experience: value })
              }
              minimumTrackTintColor="#0a7ea4"
              maximumTrackTintColor={colors.border}
            />
          </View>

          {/* Slider 2: Popularidade */}
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

          {/* Switch 1: Ativo */}
          <View className="flex-row items-center justify-between bg-surface rounded-lg p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground">
              Ativo
            </Text>
            <Switch
              value={formData.isActive}
              onValueChange={(value) =>
                setFormData({ ...formData, isActive: value })
              }
              trackColor={{ false: colors.border, true: '#0a7ea4' }}
            />
          </View>

          {/* Switch 2: Disponível para Trabalho */}
          <View className="flex-row items-center justify-between bg-surface rounded-lg p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground">
              Disponível para Trabalho
            </Text>
            <Switch
              value={formData.isAvailable}
              onValueChange={(value) =>
                setFormData({ ...formData, isAvailable: value })
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
