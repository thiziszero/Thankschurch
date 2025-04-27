import { Provider } from "./components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename="/Thankschurch-main/">
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
