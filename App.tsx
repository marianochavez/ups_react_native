import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';
import CustomersScreen from './screens/CustomersScreen';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomersScreen />
      </NavigationContainer>
    </TailwindProvider>
  );
}
