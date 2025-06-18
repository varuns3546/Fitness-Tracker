import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import workoutIcon from '../../assets/workout-icon.png'

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
    position: 'absolute',      // absolute positioning
    bottom: screenWidth * -0.01, // some padding from bottom
    right: screenWidth * 0.03,   // some padding from left
    padding: screenWidth * 0.01,
  },
  image: {
    width: screenWidth * 0.09,
    height: screenHeight * 0.09,
    resizeMode: 'contain',
  }
});

