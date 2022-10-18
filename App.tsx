import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import {API_BACK_URL} from "@env";

const client = new ApolloClient({
  // stepzen uri
  uri: API_BACK_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
