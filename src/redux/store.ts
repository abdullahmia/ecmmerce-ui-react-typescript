import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cartReducer';
import reduxThunk from 'redux-thunk';

// combine all of thoose reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    // auth: authReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;