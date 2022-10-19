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
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import CustomerCard from '../components/CustomerCard';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState('');
  const { data, error, loading } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={[tw('pb-5'), { backgroundColor: '#59C1CC' }]}>
      <ScrollView>
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

        {data?.getCustomers
          .filter((customer: CustomerList) => customer.value.name.includes(input))
          .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
            <CustomerCard key={ID} email={email} name={name} userId={ID} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomersScreen;
