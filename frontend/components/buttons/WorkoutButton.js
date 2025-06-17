import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import workoutIcon from '../../assets/home-icon.png'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function WorkoutButton({setSelectedPage}) {
  return (
        <TouchableOpacity style={styles.container} onPress={() => {
            setSelectedPage('workout_log');
        }}>
            <Image source={workoutIcon} style={styles.image} />
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
