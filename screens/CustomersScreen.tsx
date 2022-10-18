import { ScrollView, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';

import { SafeAreaView } from 'react-native-safe-area-context';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();

  const navigation = useNavigation<CustomerScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={tw('text-red-500')}>CustomersScreen 123</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomersScreen;
