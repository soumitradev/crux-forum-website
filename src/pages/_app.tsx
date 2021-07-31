import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../lib/withApollo';
import '../styles/globals.css';
import ThemeContextProvider from '../modules/theme/ThemeContextProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeContextProvider>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
          <Component {...pageProps} />
        </div>
      </ThemeContextProvider>
    </ApolloProvider>
  );
};

export default App;
