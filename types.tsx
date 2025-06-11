// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  RedefinirSenha: undefined;
  SenhaRedefinida: undefined;
  Home: undefined;
  AgendarConsulta: undefined;
  SelecionarMedico: undefined;
  Historico: undefined;
  Conta: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
