import {DEFAULT_VALUES} from "./constants.js"

export default class DragAndDrop {
    constructor(elementForDrugAndDrop, localStorage) {
        this.setDragendEventListener(elementForDrugAndDrop, localStorage);
    }

    setDragendEventListener(elementForDrugAndDrop, localStorage) {
        let shiftX = null;
        let shiftY = null;
        let rightEdge = null;
        let bottomEdge = null;
        let finalPositionX = null;
        let finalPositionY = null;
        let documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        let documentWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );

        //удаление встроенного dnd
        elementForDrugAndDrop.ondragstart = function() {
            return false;
        };

        elementForDrugAndDrop.addEventListener("mousedown", function onMouseDown(event) {
            shiftX = event.clientX - elementForDrugAndDrop.getBoundingClientRect().left;
            shiftY = event.clientY - elementForDrugAndDrop.getBoundingClientRect().top;

            function onMouseMove(event) {
                rightEdge = documentWidth - elementForDrugAndDrop.offsetWidth;
                bottomEdge = documentHeight - elementForDrugAndDrop.offsetHeight;
                finalPositionX = event.pageX - shiftX;
                finalPositionY = event.pageY - shiftY;
                
                if (finalPositionX < DEFAULT_VALUES.ZERO) {
                    finalPositionX = DEFAULT_VALUES.ZERO;
                }

                if (finalPositionX > rightEdge ) {
                    finalPositionX = rightEdge;
                }

                if (finalPositionY < DEFAULT_VALUES.ZERO) {
                    finalPositionY = DEFAULT_VALUES.ZERO;
                }

                if (finalPositionY > bottomEdge ) {
                    finalPositionY = bottomEdge;
                }
                
                elementForDrugAndDrop.style.left = finalPositionX + 'px';
                elementForDrugAndDrop.style.top = finalPositionY + 'px';
            }

            document.addEventListener('mousemove', onMouseMove);

            elementForDrugAndDrop.addEventListener('mouseup', function(event) {
                localStorage.setPosition({
                    positionX: finalPositionX,
                    positionY: finalPositionY,
                })

                document.removeEventListener('mousemove', onMouseMove);
            });
        })
    }
}