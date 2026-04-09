import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CommentsScreen from '../screens/CommentsScreen';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FE2C55',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0, height: 60, paddingBottom: 10 },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={TopTabNavigator} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
          }}
        />
        <Tab.Screen 
          name="Comments" 
          component={CommentsScreen} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses" size={24} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}