import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

let presistor = persistStore(store);
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={presistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
