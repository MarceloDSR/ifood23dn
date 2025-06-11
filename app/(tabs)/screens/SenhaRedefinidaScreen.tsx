import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../../../types';

type Props = {
  navigation: NavigationProps;
};

export default function SenhaRedefinidaScreen({ navigation }:Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Senha redefinida com sucesso!</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}