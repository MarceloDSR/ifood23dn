import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../../../types';

type Props = {
  navigation: NavigationProps;
};

export default function AgendarConsultaScreen({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Serviços:</Text>
      <Button title="Pediatria" onPress={() => navigation.navigate('SelecionarMedico')} />
      <Button title="Odontologia" onPress={() => navigation.navigate('SelecionarMedico')} />
      <Button title="Clínico geral" onPress={() => navigation.navigate('SelecionarMedico')} />
    </View>
  );
}