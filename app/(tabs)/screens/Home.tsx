import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../../../types';

type Props = {
  navigation: NavigationProps;
};

export default function HomeScreen({ navigation }:Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Início - Agendamentos</Text>
      <Button title="Agendar nova consulta" onPress={() => navigation.navigate('AgendarConsulta')} />
      <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
      <Button title="Conta" onPress={() => navigation.navigate('Conta')} />
    </View>
  );
}