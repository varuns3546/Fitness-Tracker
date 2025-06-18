import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import foodIcon from '../../assets/food-icon.png'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function FoodButton({setSelectedPage}) {
  return (
        <TouchableOpacity style={styles.container} onPress={() => {
            setSelectedPage('food_log');
        }}>
            <Image source={foodIcon} style={styles.image} />
        </TouchableOpacity>
   
  );
}

const buttonWidth = screenWidth * 0.07 + screenWidth * 0.01 * 2; 

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: screenWidth * 0.005, 
    left: (screenWidth / 2) - (buttonWidth / 2), 
    padding: screenWidth * 0.01,
  },
  image: {
    width: screenWidth * 0.07,
    height: screenHeight * 0.07,
    resizeMode: 'contain',
  }
});
