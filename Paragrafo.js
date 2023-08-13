// crie um componente chamado Paragrafo com uma propriedade chamada texto e faça com que ele seja renderizado no componente App.js contendo um texto qualquer justificado e com tamanho de fonte 20.
//
import { Text } from 'react-native';

const Paragrafo = ({texto}) => {
   return (   
     <Text style={{fontSize: 20, textAlign: 'justify'}}> {texto}</Text>
   );
 }

export default Paragrafo;