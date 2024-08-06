import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let presistor = persistStore(store);
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoppay",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <body className={inter.className}>{children}</body>
      </PersistGate>
    </Provider>
  );
}
