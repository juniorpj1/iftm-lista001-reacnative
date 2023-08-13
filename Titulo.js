import { Text, View } from 'react-native';

const Titulo = ({texto1}) => {
  return (
  <View>
    <Text style={{paddingTop: 50, fontSize: 50, fontWeight: 'bold'}}> {texto1}</Text>
  </View>
  );
}

export default Titulo;