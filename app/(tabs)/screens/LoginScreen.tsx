import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationProps } from '../../../types';

type Props = {
  navigation: NavigationProps;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="E-mail ou celular" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Esqueceu a senha?" onPress={() => navigation.navigate('RedefinirSenha')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
