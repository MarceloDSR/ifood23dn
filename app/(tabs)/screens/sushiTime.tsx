import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SushiTime = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sushi Time!</Text>

      <Image
        source={{ uri: 'https://viverbem.unimed.coop.br/wp-content/uploads/2013/07/479-sushi_e_saudavel.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>O Melhor Sushi da banda!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://djapa.com.br/wp-content/uploads/2022/05/hot-roll.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hot Roll</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://dohosushi.com.br/wp-content/uploads/2023/09/2-1.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Sashimi</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://djapa.com.br/wp-content/uploads/2021/07/uramaki-1.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Uramaki</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://msabores.com/wp-content/uploads/2024/08/temakisalmao.webp' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Temaki</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default SushiTime;
