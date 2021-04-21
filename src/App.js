import { BrowserRouter } from "react-router-dom";
import PageLayout from "./containers/PageLayout";
import Header from "./components/Header";
import Navigate from "./components/Navigate";
import Routes from "./router";

function App() {
  return (
    <BrowserRouter>
      <PageLayout header={<Header />} nav={<Navigate />} content={<Routes />} />
    </BrowserRouter>
  );
}

export default App;
