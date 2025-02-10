import { BrowserRouter } from "react-router-dom";
import AppRouter from "./presentation/router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./presentation/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
