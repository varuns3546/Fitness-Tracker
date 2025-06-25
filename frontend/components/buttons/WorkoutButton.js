import { Image, TouchableOpacity, StyleSheet, useWindowDimensions  } from 'react-native';
import workoutIcon from '../../assets/workout-icon.png'

export default function WorkoutButton({setSelectedPage}) {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const styles = StyleSheet.create(
    {
      image: {
        flex: 1,
        width: screenWidth * 0.08,
        height: screenHeight * 0.08,
        resizeMode: 'contain'
      }
  })
  return (
        <TouchableOpacity onPress={() => {
            setSelectedPage('workout_log');
        }}>
            <Image source={workoutIcon} style={styles.image} />
        </TouchableOpacity>
   
  );
}
