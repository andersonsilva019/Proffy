import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';

import { styles } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://github.com/andersonsilva019.png' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Anderson Silva</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        sanidsanidnas d asindoasn diasn dasdas
        dasdasd
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {`  `}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unFavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={WhatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;