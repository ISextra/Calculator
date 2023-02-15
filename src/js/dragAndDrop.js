import {DEFAULT_VALUES} from "./constants.js"

export default class DragAndDrop {
    constructor(elementForDrugAndDrop, localStorage) {
        this.setDragendEventListener(elementForDrugAndDrop, localStorage);
    }

    setDragendEventListener(elementForDrugAndDrop, localStorage) {
        let state = {
            shiftX: null,
            shiftY: null,
            rightEdge: null,
            bottomEdge: null,
            finalPositionX: null,
            finalPositionY: null,
            documentHeight: Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            ),
            documentWidth: Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
            ),
        }

        //удаление встроенного dnd
        elementForDrugAndDrop.ondragstart = function() {
            return false;
        };

        elementForDrugAndDrop.addEventListener("mousedown", function onMouseDown(event) {
            state.shiftX = event.clientX - elementForDrugAndDrop.getBoundingClientRect().left;
            state.shiftY = event.clientY - elementForDrugAndDrop.getBoundingClientRect().top;

            function onMouseMove(event) {
                state.rightEdge = state.documentWidth - elementForDrugAndDrop.offsetWidth;
                state.bottomEdge = state.documentHeight - elementForDrugAndDrop.offsetHeight;
                state.finalPositionX = event.pageX - state.shiftX;
                state.finalPositionY = event.pageY - state.shiftY;
                
                if (state.finalPositionX < DEFAULT_VALUES.ZERO) {
                    state.finalPositionX = DEFAULT_VALUES.ZERO;
                }

                if (state.finalPositionX > state.rightEdge ) {
                    state.finalPositionX = state.rightEdge;
                }

                if (state.finalPositionY < DEFAULT_VALUES.ZERO) {
                    state.finalPositionY = DEFAULT_VALUES.ZERO;
                }

                if (state.finalPositionY > state.bottomEdge ) {
                    state.finalPositionY = state.bottomEdge;
                }
                
                elementForDrugAndDrop.style.left = state.finalPositionX + 'px';
                elementForDrugAndDrop.style.top = state.finalPositionY + 'px';
            }

            document.addEventListener('mousemove', onMouseMove);

            elementForDrugAndDrop.addEventListener('mouseup', function() {
                localStorage.setPosition({
                    positionX: state.finalPositionX,
                    positionY: state.finalPositionY,
                })

                document.removeEventListener('mousemove', onMouseMove);
            });
        })
    }
}