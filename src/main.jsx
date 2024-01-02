import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../store.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      theme="dark"
      autoClose={1500}
      style={{ fontSize: "16px", padding: '3rem', zIndex: '9999999' }}
      position="top-center"
    />
  </Provider>
);
