import { Image, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import profileIcon from '../../assets/profile-icon.png'

const { width: screenWidth } = Dimensions.get('window');

export default function ProfileButton({setSelectedPage}) {
  return (
        <TouchableOpacity style={styles.container} onPress={() => {
            setSelectedPage('profile');
        }}>
            <Image source={profileIcon} style={{ width: screenWidth*.07, height: screenWidth*.07 }} />
        </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row-reverse',
    padding: screenWidth*.03,
  },
});
