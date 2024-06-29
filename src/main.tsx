import { persistor, store } from '@app-store';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  RouterProvider
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import "./index.css";
import { router } from "./routes/routes.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <Provider store={store}>
      <PersistGate loading={<p>getting data ...</p>} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </NextUIProvider>
);