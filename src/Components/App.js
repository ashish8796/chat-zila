import { Container, Box } from "@material-ui/core";
import { Provider } from "react-redux";
import "./../css/App.css";

import store from "./../store/store";
import Auth from "./Auth";
import Routes from "./../Pages/Routes";

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
