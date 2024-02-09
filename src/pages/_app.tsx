import "styles/globals.scss";
import { dark } from "@clerk/themes";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#038C8C",
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster />
      </ClerkProvider>
    </QueryClientProvider>
  );
}
