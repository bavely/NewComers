import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import Restrict from "@/components/restrict";
import { ThemeProvider } from "@/components/theme-provider"
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ApolloProvider client={client}>
        <Restrict>
          <Component {...pageProps} />
        </Restrict>
      </ApolloProvider>
    </SessionProvider>
    </ThemeProvider>
  );
}
