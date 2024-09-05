'use client'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
import { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
      <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>{ children}</PersistGate>
      </Provider>
    );
}