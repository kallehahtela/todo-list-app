import { StatusBar } from 'expo-status-bar';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';

// Context
import { TaskProvider } from './src/store/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
          <StatusBar style='dark' />
          <RootStack />
      </NavigationContainer>
    </TaskProvider>
  );
}