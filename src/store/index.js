import rootReducer from "./reducers";
import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// createStore?
export function configureStore() {
    const store = legacy_createStore(rootReducer,
        compose(applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return store;
}