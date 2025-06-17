import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { styles } from '../../styles/DefaultStyle';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  );
}
