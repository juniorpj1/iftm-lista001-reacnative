import { Text, View, Image } from 'react-native';
import React from 'react';

const Card = ({titulo, texto1, imagem}) => {
    return (
        <View style={{padding: 10, flexDirection: 'column', borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}> {titulo}</Text>
        <Text style={{fontSize: 20}}> {texto1}</Text>
        <Image source={imagem} style={{width: 100, height: 100}}/>
        </View>
    );
    }

export default Card;