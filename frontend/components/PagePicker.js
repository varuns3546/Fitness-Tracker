import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { View } from 'react-native-web';
import HomeButton from './buttons/HomeButton'
import FoodButton from './buttons/FoodButton'
import WorkoutButton from './buttons/WorkoutButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function PagePicker({setSelectedPage}) {
  return (
    <View style={styles.container}> 
      <HomeButton style={styles.button} setSelectedPage={setSelectedPage}/> 
      <FoodButton style={styles.button} setSelectedPage={setSelectedPage}/>     
      <WorkoutButton style={styles.button} setSelectedPage={setSelectedPage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5fa371',
    paddingVertical: screenHeight * 0.015,
    alignItems: 'center',

  },
  button: {
    flex: 1,
    width: screenWidth * .01,
    height: screenHeight * .01,
    marginHorizontal: 5,
    backgroundColor: '#007bff',
    paddingVertical: screenHeight * 0.02,
    borderRadius: 8,
    alignItems: 'center',
  }
});
