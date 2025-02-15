import { BrowserRouter } from "react-router-dom";
import AppRouter from "./presentation/router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./presentation/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
