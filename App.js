// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Home from './components/Home';
// import Profile from './components/Profile';
// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Settings" component={Settings} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Profile from './components/Profile';
import Banner from './components/Banner';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../rose/components/image/home.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Banner"
        component={Banner}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../rose/components/image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../rose/components/image/profile.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}