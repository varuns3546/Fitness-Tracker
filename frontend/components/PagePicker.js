import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { View } from 'react-native-web';
import HomeButton from './buttons/HomeButton'
import FoodButton from './buttons/FoodButton'
import WorkoutButton from './buttons/WorkoutButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function PagePicker({setSelectedPage}) {
  return (
    <View style={styles.container}> 
      <HomeButton setSelectedPage={setSelectedPage}/> 
      <FoodButton setSelectedPage={setSelectedPage}/>     
      <WorkoutButton setSelectedPage={setSelectedPage}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5fa371',
    width: '100%',
    height: '10%'
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: screenHeight * .01,
    paddingHorizontal: screenWidth * .02,
    borderRadius: 5,
    marginHorizontal: screenWidth * .01,
  },
  selectedOption: {
    backgroundColor: '#8b2a2a', // Highlight the selected option
  },
  optionText: {
    color: '#000',
    fontSize: 16,
  },
});
