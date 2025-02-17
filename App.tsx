import { StatusBar } from 'expo-status-bar';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';

// Context
import { TaskProvider } from './src/store/TaskContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <TaskProvider>
        <NavigationContainer>
            <StatusBar style='dark' />
            <RootStack />
        </NavigationContainer>
      </TaskProvider>
    </GestureHandlerRootView>
  );
}