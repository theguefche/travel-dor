import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import CounterSlice from '@features/counter/CounterSlice';
import PrefrencesSlice from '@features/prefrences/PrefrencesSlice';
import AuthSlice from '@features/auth/AuthSlice';
import CsrfSlice from '@features/csrf/CsrfSlice';
import { Api } from '@config/Api';
import { ApiErrorHandler } from '@config/ApiError';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  counter: CounterSlice,
  prefrences: PrefrencesSlice,
  auth: AuthSlice,
  csrf: CsrfSlice,
  [Api.reducerPath]: Api.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    })
    .concat(Api.middleware)
    .concat(ApiErrorHandler),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
