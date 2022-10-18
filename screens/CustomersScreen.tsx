import { Text, SafeAreaView } from 'react-native';
import * as React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const CustomersScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw('text-red-500')}>CustomersScreen</Text>
    </SafeAreaView>
  );
};

export default CustomersScreen;
