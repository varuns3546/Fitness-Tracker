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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: screenWidth*.01,
  },
  image: {
    width: screenWidth*.08, 
    height: screenHeight*.08,
    resizeMode: 'contain',

  }
});
