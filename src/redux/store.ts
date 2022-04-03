import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import persistStore from 'redux-persist/es/persistStore';

// redux parsist configuration
const persistConfig = {
  key: 'root',
  storage,
}


// combine all of thoose reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
export const persistor = persistStore(store)
export default store;