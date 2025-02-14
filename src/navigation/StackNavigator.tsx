import React from 'react';

// Navigation & Icons
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen Imports
import HomeScreen from '../Screens/HomeScreen';
import AddingScreen from '../Screens/AddingScreen';
import EditScreen from '../Screens/EditScreen';
import CompletedScreen from '../Screens/CompletedScreen';
import BottomTabs from './BottomTabNavigator';

// Types for TypeScript to handle navigation
export type RootStackParamList = {
    BottomTabs: undefined;
    HomeScreen: undefined;
    AddingScreen: undefined;
    EditScreen: undefined;
    CompletedScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        // Bottom Tab will be the very first screen to render
        <Stack.Navigator initialRouteName='BottomTabs'>
            <Stack.Screen 
                name='BottomTabs'
                component={BottomTabs}
            />

            <Stack.Screen 
                name='HomeScreen'
                component={HomeScreen}
            />

            <Stack.Screen 
                name='AddingScreen'
                component={AddingScreen}
            />

            <Stack.Screen 
                name='EditScreen'
                component={EditScreen}
            />

            <Stack.Screen 
                name='CompletedScreen'
                component={CompletedScreen}
            />

        </Stack.Navigator>
    );
}

export default RootStack;