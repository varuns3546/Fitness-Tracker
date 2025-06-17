import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { styles } from '../../styles/DefaultStyle';

export default function WorkoutLogPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Workout Logger</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



