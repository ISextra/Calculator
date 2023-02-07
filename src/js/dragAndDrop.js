import {ELEMENTS_PROPERTY} from "./constants.js"

export default class DragAndDrop {
    constructor(elementForDrugAndDrop) {
        //this.setDragendEventListener = this.setDragendEventListener.bind(this);
        this.setDragendEventListener(elementForDrugAndDrop);
    }

    setDragendEventListener(elementForDrugAndDrop) {
        elementForDrugAndDrop.draggable = true;
        let offsetX = null;
        let offsetY = null;

        elementForDrugAndDrop.addEventListener("dragstart", function(event) {
            offsetX = event.offsetX;
            offsetY = event.offsetY;
        });

        elementForDrugAndDrop.addEventListener("dragend", function(event) {
            elementForDrugAndDrop.style.top = (event.pageY - offsetY) + 'px';
            elementForDrugAndDrop.style.left = (event.pageX - offsetX) + 'px';
        });
    }
}