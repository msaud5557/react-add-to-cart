import { configureStore } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";


const persistConfig ={
  key:"root",
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const storeData = configureStore({
  reducer:persistedReducer
})
const persistor = persistStore(storeData)

export {storeData,persistor}
