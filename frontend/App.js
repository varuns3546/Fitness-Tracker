import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-web';
import { styles } from './styles/DefaultStyle';


import ProfileButton from './components/buttons/ProfileButton';
import HomePage from './components/pages/HomePage'
import FoodLogPage from './components/pages/FoodLogPage'
import WorkoutLogPage from './components/pages/WorkoutLogPage'
import PagePicker from './components/PagePicker';
import ProfilePage from './components/pages/ProfilePage';

export default function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <SafeAreaView style={styles.container}>    
      {selectedPage !== 'profile' && <ProfileButton setSelectedPage={setSelectedPage}/>}
      {selectedPage === 'home' && <HomePage/>}
      {selectedPage === 'food_log' && <FoodLogPage/>}
      {selectedPage === 'workout_log' && <WorkoutLogPage/>}
      {selectedPage === 'profile' && <ProfilePage setSelectedPage={setSelectedPage}/>}
      {selectedPage !== 'profile' && <PagePicker selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
    </SafeAreaView>
  );
}

