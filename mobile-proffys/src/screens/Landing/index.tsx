import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import { styles } from './styles';
import { api } from '../../services/api';

const Landing: React.FC = () => {

  const { navigate } = useNavigation();

  const [totalConnection, setTotalConnection] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnection(total);
    })
  }, [])

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigatorToStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja Bem-Vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer ?
        </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigatorToStudyPage}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de {totalConnection} conexões {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing; 