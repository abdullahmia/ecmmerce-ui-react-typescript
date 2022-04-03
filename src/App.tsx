import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from "./redux/store";
import Main from "./views/pages/layout/Main";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

export default App;