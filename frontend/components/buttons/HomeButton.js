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
    flex: 1,
    width: '100%',
    padding: screenWidth*.01,
  },
  image: {
    width: screenWidth*.07, 
    height: screenHeight*.07,
    resizeMode: 'contain'

  }
});
