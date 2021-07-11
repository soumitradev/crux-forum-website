import withNextApollo from './initApollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_SERVER_URL!,
	cache: new InMemoryCache(),
	credentials: 'include',
});

const withApollo = withNextApollo(apolloClient);

export default withApollo;
