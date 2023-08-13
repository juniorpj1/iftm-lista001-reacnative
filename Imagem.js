import { Image } from 'react-native';

const Imagem = () => {
  return (
     <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://img.freepik.com/vetores-gratis/uma-casa-de-dois-andares_1308-16176.jpg',
        }}
      />

  );
}

export default Imagem;