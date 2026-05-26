import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useFetchArtists } from '../hooks/useFetchArtists';

const DashboardScreen = ({ navigation }) => {
  // Consumindo API pública (Requisito 5)
  const { data, loading, error } = useFetchArtists('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Carregando artistas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Artistas em Destaque</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Details', { artist: item })}
          >
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.username}>@{item.username}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 20, marginLeft: 10 },
  card: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 15,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  username: { color: '#666', fontStyle: 'italic' },
  email: { color: '#007AFF', marginTop: 5 }
});

export default DashboardScreen;
