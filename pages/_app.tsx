import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { AppProps } from 'next/app'
import apolloClient from '@/lib/apollo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}
