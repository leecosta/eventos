import { createStore } from "redux";
import usuarioReducer from "./usuarioReducer";
import { persistReducer, persistStore } from "redux-persist";

// Armazenando o estado do usuário no navegador
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "siteeventos", // navegador saber de quem é o estado
  storage,
};

const persistedReducer = persistReducer(persistConfig, usuarioReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

// Sem o redux-persist:
// usuarioReducer é o nosso filtro
// const store = createStore(usuarioReducer);

export { store, persistor };
