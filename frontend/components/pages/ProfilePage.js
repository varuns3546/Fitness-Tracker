import { Text } from 'react-native';
import { View } from 'react-native-web';
import { styles } from '../../styles/DefaultStyle';

import BackButton from '../buttons/BackButton';
export default function ProfilePage({setSelectedPage}) {
  return (
    <View style={styles.container}>
      <BackButton setSelectedPage={setSelectedPage}/>
      <Text>Profile Page</Text>
    </View>
  );
}
