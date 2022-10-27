class CalculatorInterface {
    constructor(calculatorHTMLClass) {
        this.creatingElements(calculatorHTMLClass);

        const objectsMassive = [`%`, `CE`, `C`, `<`, `1/x`, `x`, `x^2`, `\u221Ax`, `\xF7`, `7`, `8`, `9`, `\xD7`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `+/-`, `0`, `.`, `=`]
    }

    extensionOfElement (object) {
        object.classList.forEach(element => {
            object.elementName.classList.add(element);
        });

        object.elementName.textContent = object.elementContent;
        object.appendTarget.append(object.elementName);
    }

    creatingElements(calculatorHTMLClass) {
        this.calculatorHTMLClass = calculatorHTMLClass;
        let object;

        const mainElement = document.querySelector(this.calculatorHTMLClass);

        const topHtml = document.createElement("div");
        topHtml.classList.add("top");
        mainElement.append(topHtml);

        const topElement = document.querySelector('.top');

        this.bottomHtml = document.createElement("div");
        this.bottomHtml.classList.add("bottom");
        mainElement.append(this.bottomHtml);

        const bottomElement = document.querySelector('.bottom');

        this.topHistory = document.createElement("output");
        this.topHistory.classList.add("top-history");
        topElement.append(this.topHistory);

        this.topResult = document.createElement("output");
        this.topResult.classList.add("top-result");
        this.topResult.textContent = "0";
        topElement.append(this.topResult);

        const bottomPresent = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomPresent,
            elementContent: "%",
            appendTarget: bottomElement,
            classList: ["bottom-button", "bottom-present"]
        });

        const bottomDeleteLastNumber = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomDeleteLastNumber,
            elementContent: "CE",
            appendTarget: bottomElement,
            classList: ["bottom-button", "delete-buttons", "bottom-deleteLastNumber"]
        });

        const bottomDeleteAll = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomDeleteAll,
            elementContent: "C",
            appendTarget: bottomElement,
            classList: ["bottom-button", "delete-buttons", "bottom-deleteAll"]
        });

        const bottomDeleteLast = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomDeleteLast,
            elementContent: "<",
            appendTarget: bottomElement,
            classList: ["bottom-button", "delete-buttons", "bottom-deleteLast"]
        });

        const bottom_flipNumber = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottom_flipNumber,
            elementContent: "1/x",
            appendTarget: bottomElement,
            classList: ["bottom-button", "bottom-flipNumber"]
        });

        const bottomSquaringNumber = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomSquaringNumber,
            elementContent: "x^2",
            appendTarget: bottomElement,
            classList: ["bottom-button", "bottom-squaringNumber"]
        });

        const bottomSquareRoot = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomSquareRoot,
            elementContent: "\u221Ax",
            appendTarget: bottomElement,
            classList: ["bottom-button", "bottom-deleteAll"]
        });

        const bottomDivide = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomDivide,
            elementContent: "\xF7",
            appendTarget: bottomElement,
            classList: ["bottom-button", "operation-button", "bottom-divide"]
        });

        const bottomSeven = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomSeven,
            elementContent: "7",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-seven"]
        });

        const bottomEight = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomEight,
            elementContent: "8",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-eight"]
        });

        const bottomNine = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomNine,
            elementContent: "9",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-nine"]
        });

        const bottomTimes = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomTimes,
            elementContent: "\xD7",
            appendTarget: bottomElement,
            classList: ["bottom-button", "operation-button", "bottom-times"]
        });

        const bottomFour = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomFour,
            elementContent: "4",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-four"]
        });

        const bottomFive = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomFive,
            elementContent: "5",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-five"]
        });

        const bottomSix = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomSix,
            elementContent: "6",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-six"]
        });

        const bottomMinus = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomMinus,
            elementContent: "-",
            appendTarget: bottomElement,
            classList: ["bottom-button", "operation-button", "bottom-minus"]
        });

        const bottomOne = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomOne,
            elementContent: "1",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-one"]
        });

        const bottomTwo = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomTwo,
            elementContent: "2",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-two"]
        });

        const bottomThree = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomThree,
            elementContent: "3",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-three"]
        });

        const bottomPlus = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomPlus,
            elementContent: "+",
            appendTarget: bottomElement,
            classList: ["bottom-button", "operation-button", "bottom-plus"]
        });

        const bottomNegative = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomNegative,
            elementContent: "+/-",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-negative"]
        });

        const bottomZero = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomZero,
            elementContent: "0",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-zero"]
        });

        const bottomPoint = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomPoint,
            elementContent: ".",
            appendTarget: bottomElement,
            classList: ["bottom-button", "number-button", "bottom-point"]
        });

        const bottomResult = document.createElement("button");
        this.extensionOfElement(object = {
            elementName: bottomResult,
            elementContent: "=",
            appendTarget: bottomElement,
            classList: ["bottom-button", "red-button", "bottom-result"]
        });
    }

}

class CalculatorNumbers extends CalculatorInterface{
    constructor(...args) {
        super(...args);

        this.additionEventForNumbers();
    }

    additionEventForNumbers() {
        const topResult = this.topResult;
        const lengthForSwitchFontSize = 10;
        const maxLineLength = 16;

        this.bottomHtml.onclick = function(event) {
            let target = event.target;

            if (!target.classList.contains("number-button")) {
                return;
            }

            this.resultNumberOfElement = topResult.innerHTML;
            const targetTextContent = target.textContent;

            switch (targetTextContent) {
                case "+/-":
                    if (this.resultNumberOfElement === "0") {
                        topResult.innerHTML = `${this.resultNumberOfElement}`;

                        break;
                    }

                    if (this.resultNumberOfElement.includes("-")) {
                        topResult.innerHTML = `${this.resultNumberOfElement.slice(1,undefined)}`;
                    }
                    else {
                        topResult.innerHTML = `-${this.resultNumberOfElement}`;
                    }

                    break;
                case ".":
                    if (!this.resultNumberOfElement.includes(".")) {
                        topResult.innerHTML = `${this.resultNumberOfElement}.`;
                    }

                    break;
                default:
                    if (this.resultNumberOfElement.length > lengthForSwitchFontSize) {
                        topResult.style.fontSize = "26px";
                    }

                    if (this.resultNumberOfElement.length > maxLineLength) {
                        topResult.innerHTML = `${this.resultNumberOfElement}`;

                        break;
                    }

                    if (this.resultNumberOfElement === "0" && targetTextContent !== ".") {
                        topResult.innerHTML = `${targetTextContent}`;
                    }
                    else {
                        topResult.innerHTML = `${this.resultNumberOfElement}${targetTextContent}`;
                    }
            }
        }
    }
}

class CalculatorAction extends CalculatorNumbers {
    constructor(...args) {
        super(...args);

        // this.isOperation = 0;
        // this.prevValue = parseFloat(CalculatorInterface.top_result.innerHTML);
        // this.nextValue = undefined;

        CalculatorAction.additionEventForOperation();
    }

    static addAction(action) {
        this.resultNumberOfElement = CalculatorInterface.topResult.innerHTML;
        // this.historyElement = CalculatorInterface.top_history.innerHTML;
        // CalculatorInterface.top_history.innerHTML = `${action}`;

        CalculatorInterface.topHistory.innerHTML = `${this.resultNumberOfElement} ${action}`;
        this.isOperation = 1;
    }

    static additionEventForOperation() {
        this.bottomHtml.onclick = function (event) {
            let target = event.target;

            if (!target.classList.contains("operation-button")) {
                return;
            }

            CalculatorAction.addAction(target.textContent);
        }
    }
}

const interface1 = new CalculatorNumbers(".calculator");