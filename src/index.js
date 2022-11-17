import react, { useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import {Pokemon} from "./components/index.js";

const App = () => {
    return <>
        <Pokemon />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)