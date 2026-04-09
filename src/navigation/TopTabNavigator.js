import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, StyleSheet, View } from 'react-native';
import FollowingScreen from '../screens/FollowingScreen';
import ForYouScreen from '../screens/ForYouScreen';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <View style={styles.container}>
      <TopTab.Navigator
        screenOptions={{
          tabBarStyle: { 
            backgroundColor: 'transparent', 
            position: 'absolute', 
            top: Platform.OS === 'ios' ? 50 : 30, 
            left: 0, 
            right: 0, 
            elevation: 0, 
            shadowOpacity: 0 
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
          tabBarIndicatorStyle: { backgroundColor: '#FFF', height: 2, width: 30, marginLeft: '17%' },
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' }
        }}
      >
        <TopTab.Screen name="Following" component={FollowingScreen} />
        <TopTab.Screen name="For You" component={ForYouScreen} />
      </TopTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' }
});