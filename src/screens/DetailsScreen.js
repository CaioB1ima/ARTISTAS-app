import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { artist } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{artist.name}</Text>
        <Text style={styles.username}>@{artist.username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações de Contato</Text>
        <Text style={styles.label}>Email: <Text style={styles.value}>{artist.email}</Text></Text>
        <Text style={styles.label}>Telefone: <Text style={styles.value}>{artist.phone}</Text></Text>
        <Text style={styles.label}>Website: <Text style={styles.value}>{artist.website}</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Empresa</Text>
        <Text style={styles.label}>Nome: <Text style={styles.value}>{artist.company.name}</Text></Text>
        <Text style={styles.label}>Slogan: <Text style={styles.value}>{artist.company.catchPhrase}</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Endereço</Text>
        <Text style={styles.label}>Rua: <Text style={styles.value}>{artist.address.street}</Text></Text>
        <Text style={styles.label}>Cidade: <Text style={styles.value}>{artist.address.city}</Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 30, backgroundColor: '#007AFF', alignItems: 'center' },
  name: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  username: { fontSize: 18, color: '#e0e0e0' },
  section: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  label: { fontSize: 16, fontWeight: '600', color: '#666', marginBottom: 5 },
  value: { fontWeight: '400', color: '#000' }
});

export default DetailsScreen;
