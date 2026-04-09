import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import CameraScreen from '../screens/CameraScreen';
import CommentsScreen from '../screens/CommentsScreen';
import FriendsScreen from '../screens/FriendsScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FE2C55',   // Màu đỏ TikTok khi active
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600', marginBottom: 4 },
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 0.5,
          borderTopColor: '#2c2c2c',
          height: 54,
          paddingBottom: 6,
          paddingTop: 4,
        },
      }}
    >
      {/* Trang chủ - chứa Top Tab For You / Following */}
      <Tab.Screen 
        name="Home" 
        component={TopTabNavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
          tabBarLabel: 'Trang chủ',
        }}
      />
      
      {/* Bạn bè */}
      <Tab.Screen 
        name="Friends" 
        component={FriendsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />,
          tabBarLabel: 'Bạn bè',
        }}
      />
      
      {/* Nút + Quay video */}
      <Tab.Screen 
        name="Camera" 
        component={CameraScreen} 
        options={{
          tabBarIcon: () => (
            <View style={{
              backgroundColor: '#FE2C55',
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
            }}>
              <Ionicons name="add" size={28} color="#FFF" />
            </View>
          ),
          tabBarLabel: () => null, // Ẩn label
        }}
      />
      
      {/* Hộp thư */}
      <Tab.Screen 
        name="Inbox" 
        component={InboxScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses" size={24} color={color} />,
          tabBarLabel: 'Hộp thư',
        }}
      />
      
      {/* Hồ sơ */}
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
          tabBarLabel: 'Hồ sơ',
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}