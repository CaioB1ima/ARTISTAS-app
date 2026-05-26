import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

// Telas
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack para a aba de Artistas (Dashboard -> Detalhes)
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ title: 'Artistas' }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Detalhes do Artista' }} 
      />
    </Stack.Navigator>
  );
}

// Drawer Principal (Requisito 2 e 7)
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ drawerActiveTintColor: '#007AFF' }}>
      <Drawer.Screen name="Início" component={MainStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="App" component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
