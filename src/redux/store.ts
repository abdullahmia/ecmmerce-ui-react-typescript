import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';

// combine all of thoose reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;