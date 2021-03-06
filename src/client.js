import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "scenes/App";

// Main app div in index.html
const app = document.getElementById("app");

window.MOBILE_BREAKING_POINT = 800;

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    app
);
