import { Image, TouchableOpacity, StyleSheet, useWindowDimensions  } from 'react-native';
import arrowIcon from '../../assets/arrow-icon.png'


export default function BackButton({setSelectedPage}) {
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
        console.log('pressed')
    }}>
        <Image source={arrowIcon} style={styles.image}/>
    </TouchableOpacity>
  );
}
