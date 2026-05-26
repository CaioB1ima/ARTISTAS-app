import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleAuth = async () => {
    // Validações solicitadas
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('E-mail Inválido', 'Por favor, insira um endereço de e-mail válido (ex: usuario@gmail.com).');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Senha Curta', 'A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    setLoading(true);
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Sucesso', 'Conta criada com sucesso! Você já pode entrar.');
        setIsRegistering(false); // Volta para tela de login após registro
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      let errorMessage = 'Ocorreu um erro inesperado.';
      
      // Tratamento de erros comuns do Firebase
      if (error.code === 'auth/invalid-api-key') {
        errorMessage = 'Configuração do Firebase inválida. Verifique o arquivo firebaseConfig.js.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Este e-mail já está em uso.';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'E-mail ou senha incorretos.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Erro de conexão. Verifique sua internet.';
      } else {
        errorMessage = error.message;
      }
      
      Alert.alert('Erro de Autenticação', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistering ? 'Criar Nova Conta' : 'Bem-vindo de Volta'}</Text>
      <Text style={styles.subtitle}>
        {isRegistering ? 'Preencha os dados abaixo para se cadastrar.' : 'Entre com suas credenciais para continuar.'}
      </Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@gmail.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha (mínimo 8 caracteres)</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha segura"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginVertical: 20 }} />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleAuth}>
            <Text style={styles.buttonText}>{isRegistering ? 'CRIAR CONTA' : 'ENTRAR'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)} style={styles.switchButton}>
            <Text style={styles.switchText}>
              {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se agora'}
            </Text>
          </TouchableOpacity>
        </>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Segunda Parte do Projeto - 3ª Menção</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#F8F9FA' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 40 },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8 },
  input: { 
    backgroundColor: '#FFF',
    borderWidth: 1, 
    borderColor: '#E0E0E0', 
    padding: 15, 
    borderRadius: 12, 
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  button: { 
    backgroundColor: '#007AFF', 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5
  },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 },
  switchButton: { marginTop: 25, padding: 10 },
  switchText: { color: '#007AFF', textAlign: 'center', fontWeight: '500' },
  footer: { position: 'absolute', bottom: 30, left: 0, right: 0, alignItems: 'center' },
  footerText: { color: '#999', fontSize: 12 }
});

export default LoginScreen;
