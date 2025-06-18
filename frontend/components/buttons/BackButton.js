import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import arrowIcon from '../../assets/arrow-icon.png'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function BackButton({setSelectedPage}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        setSelectedPage('home');
        console.log('pressed')
    }}>
        <Image source={arrowIcon} style={styles.image}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {    
    position: 'absolute',
    top: screenHeight * 0.03, 
    left: screenWidth * 0.03,
    padding: 5,  
  },
  image: {
    width: screenWidth*.07, 
    height: screenHeight*.07,
    transform: [{scaleX: -1}],
    resizeMode: 'contain'

  }
});
