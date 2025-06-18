import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import homeIcon from '../../assets/home-icon.png'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeButton({setSelectedPage}) {
  return (
        <TouchableOpacity style={styles.container} onPress={() => {
            setSelectedPage('home');
        }}>
            <Image source={homeIcon} style={styles.image} />
        </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',      // absolute positioning
    bottom: screenWidth * 0.005, // some padding from bottom
    left: screenWidth * 0.03,   // some padding from left
    padding: screenWidth * 0.01,
  },
  image: {
    width: screenWidth * 0.07,
    height: screenHeight * 0.07,
    resizeMode: 'contain',
  }
});
