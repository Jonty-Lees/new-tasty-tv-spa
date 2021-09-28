import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./Components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
