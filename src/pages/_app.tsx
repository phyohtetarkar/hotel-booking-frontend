import "../../styles/bootstrap-custom.css";
import "react-calendar/dist/Calendar.css";
import "../../styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Layout } from "../components/template";
import NextNProgress from "nextjs-progressbar";
import { AuthenticationContextProvider } from "../common/AuthenticationContextProvider";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page: ReactElement) => <Layout>{page}</Layout>);

  return (
    <>
      <NextNProgress
        color="#0066ff"
        startPosition={0.3}
        height={2}
        showOnShallow={true}
        options={{
          showSpinner: false
        }}
      />
      <AuthenticationContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </AuthenticationContextProvider>
    </>
  );
}

export default MyApp;
