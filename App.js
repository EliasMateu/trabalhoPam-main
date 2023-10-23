import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Entrar from "./src/pages/Entrar";
import Register from "./src/pages/Register";
import Informacao from './src/pages/Informacao/Peso';
import Altura from './src/pages/Informacao/Altura';
import Idade from './src/pages/Informacao/Idade';
import FotoPerfil from './src/pages/Informacao/FotoPerfil';
import Metas from './src/pages/Metas';
import LoadingPage from './src/pages/loadingPage.js';
import Home from './src/pages/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrar">
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name='Informacao' component={Informacao} />
        <Stack.Screen name='Altura' component={Altura} />
        <Stack.Screen name='Idade' component={Idade} />
        <Stack.Screen name='FotoPerfil' component={FotoPerfil} />
        <Stack.Screen name='Metas' component={Metas} />
        <Stack.Screen name='LoadingPage' component={LoadingPage} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

