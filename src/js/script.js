import {ELEMENTS_PROPERTY} from './constants.js'
import Calculator from "./calculator.js";

const calculator = new Calculator({
    root: ELEMENTS_PROPERTY.ROOT_FOR_MAIN,
    showConsoleInfo: false,
    switchOfButtonsClickAbility: false,
    },
);