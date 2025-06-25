import { Image, TouchableOpacity, StyleSheet, useWindowDimensions  } from 'react-native';
import profileIcon from '../../assets/profile-icon.png'


export default function ProfileButton({setSelectedPage}) {
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
            setSelectedPage('profile');
        }}>
            <Image source={profileIcon} style={{ width: screenWidth*.07, height: screenWidth*.07 }} />
        </TouchableOpacity>
   
  );
}
