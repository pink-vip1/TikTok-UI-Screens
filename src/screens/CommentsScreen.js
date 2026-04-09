import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// 1. Import màn hình TopTab (chứa For You / Following) và màn hình Comments
import CommentsScreen from '../screens/CommentsScreen';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0, height: 60, paddingBottom: 10 },
          tabBarActiveTintColor: '#FE2C55',
          tabBarInactiveTintColor: '#888',
        }}
      >
        {/* TAB 1: Gắn màn hình Home (bên trong có chứa Video) */}
        <Tab.Screen 
          name="Home" 
          component={TopTabNavigator} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
          }}
        />

        {/* TAB 2: VỊ TRÍ GẮN MÀN HÌNH COMMENTS */}
        <Tab.Screen 
          name="Comments" 
          component={CommentsScreen} // Gắn CommentsScreen vào đây!
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses" size={24} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}