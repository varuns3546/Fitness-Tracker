import { Image, TouchableOpacity, StyleSheet, useWindowDimensions  } from 'react-native';
import foodIcon from '../../assets/food-icon.png'

export default function FoodButton({setSelectedPage}) {
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
            setSelectedPage('food_log');
        }}>
            <Image source={foodIcon} style={styles.image} />
        </TouchableOpacity>
   
  );
}
