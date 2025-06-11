import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../../../types';

type Props = {
  navigation: NavigationProps;
};

export default function ContaScreen({ navigation }:Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Conta</Text>
      <Button title="Informações pessoais" onPress={() => {}} />
      <Button title="Privacidade e segurança" onPress={() => {}} />
      <Button title="Sair" onPress={() => navigation.navigate('Login')} color="red" />
    </View>
  );
}