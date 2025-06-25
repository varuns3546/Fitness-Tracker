import { Image, TouchableOpacity, StyleSheet, useWindowDimensions  } from 'react-native';
import homeIcon from '../../assets/home-icon.png'


export default function HomeButton({setSelectedPage}) {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const styles = StyleSheet.create(
    {
      image: {
        flex: 1,
        width: screenWidth * 0.1,
        height: screenHeight * 0.1,
        resizeMode: 'contain'
      }
  })
  return (
        <TouchableOpacity onPress={() => {
            setSelectedPage('home');
        }}>
            <Image source={homeIcon} style={styles.image} />
        </TouchableOpacity>
   
  );
}

