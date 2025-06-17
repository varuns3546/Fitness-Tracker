import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import arrowIcon from '../../assets/arrow-icon.png'

const { width: screenWidth } = Dimensions.get('window');

export default function BackButton({setSelectedPage}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        setSelectedPage('dashboard');
    }}>
        <Image source={arrowIcon} style={styles.image}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: screenWidth*.03,

  },
  image: {
    width: screenWidth*.07, 
    height: screenWidth*.07,
    transform: [{scaleX: -1}]
  }
});
