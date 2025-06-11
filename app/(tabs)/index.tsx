import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import RedefinirSenhaScreen from './screens/RedefinirSenhaScreen';
import SenhaRedefinidaScreen from './screens/SenhaRedefinidaScreen';
import HomeScreen from './screens/Home';
import AgendarConsultaScreen from './screens/AgendarConsultaScreen';
import SelecionarMedicoScreen from './screens/SelecionarMedicoScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import ContaScreen from './screens/ContaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenhaScreen} />
        <Stack.Screen name="SenhaRedefinida" component={SenhaRedefinidaScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AgendarConsulta" component={AgendarConsultaScreen} />
        <Stack.Screen name="SelecionarMedico" component={SelecionarMedicoScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Conta" component={ContaScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}