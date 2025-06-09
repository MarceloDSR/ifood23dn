import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Hamburgueria2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Burger King!</Text>

      <Image
        source={{ uri: 'https://scontent.fcfc1-1.fna.fbcdn.net/v/t39.30808-6/481043790_1071360278356660_6756011181021454663_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ql6LP5LlkOwQ7kNvwG_QXAi&_nc_oc=AdlXfRG3uzOeMYckKHxm6mqzBiogWMyeqP35e6VLXYFmERMg0he76hsvOZX84MS_sko&_nc_zt=23&_nc_ht=scontent.fcfc1-1.fna&_nc_gid=ui1clO_CfdraZBpI7m9QkA&oh=00_AfN3gEEMnHUJA5rxwcjyixFsJGvYe2-6oCc3HUbkQuHqVQ&oe=684D2E5F' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>O melhores burgers estão aqui!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/site_Mega_Stacker_Rodeio_3.0.png?mtime=20250120150301&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Mega Stacker Rodeio 3.0</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/Mega-Stacker-Cheddar-3.0.png?mtime=20221202145157&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Mega Stacker Cheddar 3.0</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/cheddar_dp_crispy_muita_fome.png?mtime=20230808202830&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Cheddar Duplo</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/Stacker-DP.png?mtime=20221203101349&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Stacker Duplo Bacon</Text>
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

export default Hamburgueria2;
