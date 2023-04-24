import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser, logout } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if (localStorage.jwtToken) {

  try {
    setAuthorizationToken(localStorage.jwtToken);
    // console.log("rehydrating state with token " + localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    // store.dispatch(setCurrentUser({}));
    store.dispatch(logout());
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider >
)

export default App;
