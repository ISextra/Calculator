import {ELEMENTS_PROPERTY} from './global_elements.js'

import Calculator from "./calculator.js";

import History from "./history.js";

const calculator = new Calculator({
    root: document.querySelector(ELEMENTS_PROPERTY.ROOT_FOR_MAIN),
    history: new History(),
    showConsoleInfo: true,
    switchOfButtonsClickability: false,
    },
);