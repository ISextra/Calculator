import {DEFAULT_VALUES} from "./constants.js";

export default class LocalStorage {
    constructor() {
    }

    getPosition() {
        return {
            positionX: localStorage.getItem(DEFAULT_VALUES.LOCAL_STORAGE_POSITION_X_KEY),
            positionY: localStorage.getItem(DEFAULT_VALUES.LOCAL_STORAGE_POSITION_Y_KEY)
        }
    }

    setPosition(position) {
        const {
            positionX,
            positionY
        } = position

        localStorage.setItem(DEFAULT_VALUES.LOCAL_STORAGE_POSITION_X_KEY, positionX);
        localStorage.setItem(DEFAULT_VALUES.LOCAL_STORAGE_POSITION_Y_KEY,  positionY);
    }
}