import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { STEPZEN_API_URI, STEPZEN_API_KEY } from '@env';

const httpLink = createHttpLink({
  uri: STEPZEN_API_URI,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: STEPZEN_API_KEY,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
