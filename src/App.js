import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageLayout from "./containers/PageLayout";
import Header from "./components/Header";
import Navigate from "./components/Navigate";
import Routes from "./router";
//auth
import { Provider } from "react-redux";
import store from "./store";
import AuthProvider from "./utils/authProvider.js";
import userManager, { loadUserFromStorage } from "./services/authService";

function App() {
  React.useEffect(() => {
    // fetch current user from cookies
    loadUserFromStorage(store);
  }, []);
  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <BrowserRouter>
          <PageLayout
            header={<Header />}
            nav={<Navigate />}
            content={<Routes />}
          />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
