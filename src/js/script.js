
class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.operations = {
            buttons: [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `7`, `8`, `9`, `\xD7`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `±`, `0`, `.`, `=`],
            numberButtons: [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`, `0` ,`±`],
            equalSymbol: "=",

            numberOperationButton: `±`,
            basicOperations: [`\xF7`, `\xD7`, `-`, `+`],
            complexOperations: [`%`, `1/x`, `x²`, `\u221Ax`]
        }

        this.renderElements(calculatorHTMLClass);
    }

    renderSimilarElements() {
        const objectsMassive = this.operations.buttons;
        const numberButtons = this.operations.numberButtons;
        const equalSymbol = this.operations.equalSymbol;

        const appendTarget = document.querySelector('.bottom');

        const defaultClass = "bottom-button";
        const numberClass = "number-button";
        const equalClass = "red-button";

        const documentCollection = objectsMassive.map((element,index) => {
            element = document.createElement("button");
            element.textContent = objectsMassive[index];
            element.dataset.text = objectsMassive[index];
            element.classList.add(defaultClass);

            if (numberButtons.includes(objectsMassive[index])) {
                element.classList.add(numberClass);
            }

            if (objectsMassive[index] === equalSymbol) {
                element.classList.add(equalClass);
            }

            appendTarget.append(element);
        });
    }

    renderElements(calculatorHTMLClass) {
        this.calculatorHTMLClass = calculatorHTMLClass;
        const mainElement = document.querySelector(this.calculatorHTMLClass);

        const topHtml = document.createElement("div");
        topHtml.classList.add("top");
        mainElement.append(topHtml);

        const topElement = document.querySelector('.top');

        this.bottomHtml = document.createElement("div");
        this.bottomHtml.classList.add("bottom");
        mainElement.append(this.bottomHtml);

        this.topHistory = document.createElement("output");
        this.topHistory.classList.add("top-history");
        this.topHistory.dataset.text = "0";
        topElement.append(this.topHistory);

        this.topResult = document.createElement("output");
        this.topResult.classList.add("top-result");
        this.topResult.textContent = '0';
        topElement.append(this.topResult);

        this.renderSimilarElements();
    }

}

class CalculatorOperations extends CalculatorDisplay {
    constructor(...args) {
        super(...args);

        this.secondNumber = "no secondNumber defined";
        this.action = "no actions defined";

        this.setDataOnClick();
        this.setBasicOperations();
        this.setReversOnClick();
        this.setSquareOnClick();
        this.setSquareRootOnClick();
        this.setNegateOnClick();
        this.setPercentOnClick();
        this.clearAll();
        this.clearCurrentNumber();
        this.clearLastSymbol();
    }

    fixResultFontSize(topResult) {
        const lengthForSwitchFontSizeMedium = 10;
        const lengthForSwitchFontSizeLow = 16;

        if (topResult.textContent.length < lengthForSwitchFontSizeMedium) {
            topResult.style.fontSize = "42px";
        }

        if (topResult.textContent.length > lengthForSwitchFontSizeMedium) {
            topResult.style.fontSize = "26px";
        }

        if (topResult.textContent.length > lengthForSwitchFontSizeLow) {
            topResult.style.fontSize = "22px";
        }
    }

    setDataOnClick() {
        const fixResultFontSize = this.fixResultFontSize;
        const topResult = this.topResult;
        const topHistoryData = this.topHistory.dataset;
        const numberButtons = this.operations.numberButtons;
        const maxLineLength = 16;

        numberButtons.forEach(element => {
            const selectedData = document.querySelector(`[data-text = "${element}"]`);
            selectedData.onclick = function(event) {
                let target = event.target;

                const targetTextContent = target.dataset.text;

                switch (targetTextContent) {
                    case ".":
                        if (!topResult.innerHTML.includes(".")) {
                            topResult.innerHTML = `${topResult.textContent}.`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }

                        break;
                    default:
                        fixResultFontSize(topResult);

                        if (topResult.innerHTML.length > maxLineLength) {
                            break;
                        }

                        if (topResult.innerHTML === "0" && targetTextContent !== ".") {
                            topResult.innerHTML = `${targetTextContent}`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }
                        else {
                            topResult.innerHTML = `${topResult.textContent}${targetTextContent}`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }
                }
            }
        })
    }

    setBasicOperations() {
        const defaultAction = "no actions defined";
        const basicOperations = this.operations.basicOperations;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const topResult = this.topResult;
        const thisClass = this;
        let secondNumber = this.secondNumber;

        basicOperations.forEach(element => {
            const selectedData = document.querySelector(`[data-text = "${element}"]`);
            selectedData.onclick = function () {
                if (thisClass.action !== defaultAction) { //если было нажато какое либо basic действие
                    topHistoryData.text = topHistoryData.text.slice(0,topHistoryData.text.length - 2); //стираем действие и пробел перед ним
                }

                thisClass.action = element;
                topHistoryData.text = `${topHistoryData.text} ${thisClass.action}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
                secondNumber = topResult.textContent;
            }
        });
    }

    setPercentOnClick() {
        const fixResultFontSize = this.fixResultFontSize;
        const dataContent = "%";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            if (thisClass.action) {
                topResult.innerHTML = "0";
                topHistory.innerHTML = "0";
                topHistoryData.text = "0";
                return;
            }

            if (thisClass.action === "\xD7" || thisClass.action === "\xF7") {
                topResult.innerHTML = `${topResult.textContent/100}`;
                topHistoryData.text = `${topHistoryData.text} ${topResult.textContent/100}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
            }

            if (thisClass.action === "+" || thisClass.action === "-") {
                topResult.innerHTML = `${secondNumber/100*topResult.textContent}`;
                topHistoryData.text = `${topHistoryData.text} ${secondNumber/100*topResult.textContent}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
            }

            thisClass.action = dataContent;
            fixResultFontSize(topResult);
        }
    }

    setReversOnClick() {
        const fixResultFontSize = this.fixResultFontSize;
        const dataContent = "1/x";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent;

            topResult.innerHTML = `${1/secondNumber}`;

            topHistoryData.text = `1/(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            fixResultFontSize(topResult);
        }
    }

    setSquareOnClick() {
        const fixResultFontSize = this.fixResultFontSize;
        const dataContent = "x²";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent; //непонятно почему нельзя присвоить значение this.action способом как у secondNumber выше(значение не сохраняется в переменной в конструкторе)

            topResult.innerHTML = `${secondNumber * secondNumber}`;
            topHistoryData.text = `sqr(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            fixResultFontSize(topResult);
        }
    }

    setSquareRootOnClick() {
        const fixResultFontSize = this.fixResultFontSize;
        const dataContent = "\u221Ax";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent;

            topResult.innerHTML = `${Math.sqrt(secondNumber)}`;

            topHistoryData.text = `\u221A(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            fixResultFontSize(topResult);
        }
    }

    setNegateOnClick() {
        const fixResultFontSize = this.fixResultFontSize;
        const dataContent = "±";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent;

            topResult.innerHTML = `${secondNumber * -1}`;

            topHistoryData.text = `negate(${topHistoryData.text})`;

            fixResultFontSize(topResult);
        }
    }

    clearAll() {
        const dataContent = "C";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const fixResultFontSize = this.fixResultFontSize;
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = "no secondNumber defined";
            action = "no actions defined";
            topHistoryData.text = "0";
            topHistory.innerHTML = "";

            topResult.innerHTML = "0";
            fixResultFontSize(topResult);
        }
    }

    clearCurrentNumber() {
        const dataContent = "CE";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const fixResultFontSize = this.fixResultFontSize;
        const topResult = this.topResult;

        selectedData.onclick = function() {
            topResult.innerHTML = `0`;

            fixResultFontSize(topResult);
        }
    }

    clearLastSymbol() {
        const dataContent = "<";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const fixResultFontSize = this.fixResultFontSize;
        const operations = this.operations;
        const thisClass = this;
        const topResult = this.topResult;

        selectedData.onclick = function() {
            if (!operations.complexOperations.includes(thisClass.action)) {//если до этого не была задействованна комплексная операция
                topResult.innerHTML = topResult.innerHTML.slice(0,topResult.innerHTML.length-1);//стереть последний символ
            }

            if (topResult.innerHTML === "") {//если стираем последний символ
                topResult.innerHTML = "0";//пишем начальный 0
            }

            fixResultFontSize(topResult);
        }
    }
}

const interface1 = new CalculatorOperations(".calculator");