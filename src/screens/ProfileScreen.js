import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            // Cria perfil inicial se não existir
            const initialData = { email: user.email, createdAt: new Date().toISOString() };
            await setDoc(docRef, initialData);
            setUserData(initialData);
          }
        } catch (error) {
          console.error("Erro ao buscar perfil:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleLogout = () => {
    signOut(auth).catch(error => Alert.alert('Erro', error.message));
  };

  if (loading) return <ActivityIndicator size="large" style={{flex:1}} />;

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email}</Text>
        
        <Text style={styles.label}>ID do Usuário:</Text>
        <Text style={styles.value}>{user?.uid}</Text>

        <Text style={styles.label}>Membro desde:</Text>
        <Text style={styles.value}>{userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  profileCard: { backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 2 },
  label: { fontSize: 14, color: '#888', marginTop: 10 },
  value: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  logoutButton: { marginTop: 30, backgroundColor: '#FF3B30', padding: 15, borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#fff', fontWeight: 'bold' }
});

export default ProfileScreen;
