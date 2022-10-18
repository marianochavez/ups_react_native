import { ActivityIndicator, ScrollView, Text } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Input } from '@rneui/themed';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#59C1CC', height: '100%' }}>
        <Image
          source={{ uri: 'https://links.papareact.com/3jc' }}
          containerStyle={tw('w-full h-64')}
          PlaceholderContent={<ActivityIndicator />}
        />

        <Input
          placeholder="Search by Customer"
          value={input}
          onChangeText={setInput}
          containerStyle={tw('bg-white pt-5 pb-0 px-10')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomersScreen;
