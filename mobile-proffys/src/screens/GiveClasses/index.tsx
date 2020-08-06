import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground } from 'react-native';

import giveClassesBg from '../../assets/images/give-classes-background.png';

import { styles } from '../GiveClasses/styles';

const GiveClasses: React.FC = () => {

  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={giveClassesBg}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um proffy ?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>

      </ImageBackground>

      <RectButton onPress={() => goBack()} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;