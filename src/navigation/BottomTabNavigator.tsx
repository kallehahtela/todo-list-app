import React from "react";

// Navigation & Icons
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./StackNavigator";
import { Ionicons } from '@expo/vector-icons';

// Screen Imports
import HomeScreen from "../Screens/HomeScreen";
import AddingScreen from "../Screens/AddingScreen";
import CompletedScreen from "../Screens/CompletedScreen";

const Tab = createBottomTabNavigator<RootStackParamList>();

const tabOptions = (iconName: string, title: string): BottomTabNavigationOptions => {
    return {
        tabBarIcon({ color, size }) {
            return (
            <Ionicons 
                name={iconName as any} 
                size={size} 
                color={color} 
            />);
        },
        title: title,
    };
};

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen 
                name='HomeScreen'
                component={HomeScreen}
                options={tabOptions('home-outline', 'Home')}
            />
            <Tab.Screen 
                name='AddingScreen'
                component={AddingScreen}
                options={tabOptions('add-circle-outline', 'Add')}
            />
            <Tab.Screen 
                name='CompletedScreen'
                component={CompletedScreen}
                options={tabOptions('checkmark-circle-outline', 'Completed')}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;