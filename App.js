import Texto from './Texto';
import Titulo from './Titulo';
import Imagem from './Imagem';
import { View } from 'react-native';
import Paragrafo from './Paragrafo';
import Card from './Card';

const App = () => {
  return (
  <View style={{padding: 10, flexDirection: 'column'}}>
    <Titulo texto1="INTRODUÇÃO"/>
    <Imagem />
    <Paragrafo texto="Parágrafo qualquer justificado na tela do dispositivo movel usando react native"></Paragrafo>
    <Card titulo="Titulo" texto1="Texto" imagem={require('./img/1.png')}/>
  </View> 
  );
}

export default App;