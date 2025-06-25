import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create(
  {
    image: {
      flex: 1,
      width: screenWidth * 0.0002,
      height: screenHeight * 0.0002,
    }
})


/*
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
*/
