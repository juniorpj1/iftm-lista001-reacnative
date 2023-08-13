import { Text, View } from 'react-native';

const Texto = ({texto1, texto2}) => {
  return (
  <View>
    <Text> {texto1}</Text>
    <Text> {texto2}</Text>
  </View>
  );
}

export default Texto;