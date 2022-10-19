import { View, Text, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { TabStackParamList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { useTailwind } from 'tailwind-rn/dist';
import useOrders from '../hooks/useOrders';
import { Button, Image } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderCard from '../components/OrderCard';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarActiveTintColor: "#EB6A7C",
    });
  }, []);

  return (
    <SafeAreaView style={[tw('pb-5'),{ backgroundColor: '#EB6A7C' }]}>
      <ScrollView >
        <Image
          source={{ uri: 'https://links.papareact.com/m51' }}
          containerStyle={tw('w-full h-64')}
        />
        <View>
          <Button
            onPress={() => setAscending(!ascending)}
            color="pink"
            titleStyle={{ color: 'gray', fontWeight: '400' }}
            containerStyle={tw('py-2 px-5')}
          >
            {ascending ? 'Showing: Oldest First' : 'Showing: Most Recent First'}
          </Button>

          {orders
            ?.sort((a, b) => {
              if (ascending) {
                return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
              } else {
                return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
              }
            })
            .map((order) => (
              <OrderCard key={order.trackingId} item={order} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
