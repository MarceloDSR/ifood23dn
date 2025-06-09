import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Pizzaria232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Restaurante ChinaFoood!</Text>

      <Image
        source={{ uri: 'https://www.tskf.com.br/blog/wp-content/uploads/2018/04/181069-x-curiosidades-sobre-a-culinaria-da-china-para-voce-conhecer.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>ChinaFood damos um IAAAA na sua fome!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn.deliway.com.br/blog/base/98b/063/7f3/prato-chines-zongzi.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Zongzi</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn.deliway.com.br/blog/base/98b/063/7f3/prato-chines-yakisoba.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Yakisoba</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn.deliway.com.br/blog/base/e3c/b26/7f6/prato-chines-mapo-tofu.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Mapo doufu</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn.deliway.com.br/blog/base/e3c/b26/7f6/prato-chines-peedan.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Peedan, o “ovo de mil anos </Text>
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

export default Pizzaria232n;
