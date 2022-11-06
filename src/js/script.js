class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.operations = {
            buttons: [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `7`, `8`, `9`, `\xD7`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `±`, `0`, `.`, `=`],
            numberButtons: [`0`,`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`, `±`],
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
        this.lengthForSwitchFontSizeMedium = 10;
        this.lengthForSwitchFontSizeLow = 16;

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

    setResultFontSize(thisClass) {
        if (thisClass.topResult.textContent.length < thisClass.lengthForSwitchFontSizeMedium) {
            thisClass.topResult.style.fontSize = "42px";
        }

        if (thisClass.topResult.textContent.length > thisClass.lengthForSwitchFontSizeMedium) {
            thisClass.topResult.style.fontSize = "26px";
        }

        if (thisClass.topResult.textContent.length > thisClass.lengthForSwitchFontSizeLow) {
            thisClass.topResult.style.fontSize = "22px";
        }
    }

    setDataOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const thisClass = this;
        const topResult = this.topResult;
        const topHistoryData = this.topHistory.dataset;
        const numberButtons = this.operations.numberButtons;
        const maxLineLength = 16;

        numberButtons.forEach(element => {
            const selectedData = document.querySelector(`[data-text = "${element}"]`);

            selectedData.onclick = function() {
                switch (element) {
                    case ".":
                        if (!topResult.innerHTML.includes(".")) {//если результат не имеет "."
                            topResult.innerHTML = `${topResult.textContent}.`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }

                        break;
                    default:
                        if (topResult.innerHTML.length > maxLineLength) {//если длинна больше допустимой
                            break;
                        }

                        if (topResult.innerHTML === "0") {//если стоит начальный 0
                            topResult.innerHTML = `${element}`;//заменяем его на число
                            topHistoryData.text = `${topResult.textContent}`;
                        }
                        else {
                            topResult.innerHTML = `${topResult.textContent}${element}`;//в остальных случаях добавляем нажатое значение
                            topHistoryData.text = `${topResult.textContent}`;
                        }

                        setResultFontSize(thisClass);
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
        const setResultFontSize = this.setResultFontSize;
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
            setResultFontSize(thisClass);
        }
    }

    setReversOnClick() {
        const setResultFontSize = this.setResultFontSize;
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

            setResultFontSize(thisClass);
        }
    }

    setSquareOnClick() {
        const setResultFontSize = this.setResultFontSize;
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

            setResultFontSize(thisClass);
        }
    }

    setSquareRootOnClick() {
        const setResultFontSize = this.setResultFontSize;
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

            setResultFontSize(thisClass);
        }
    }

    setNegateOnClick() {
        const setResultFontSize = this.setResultFontSize;
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

            setResultFontSize(thisClass);
        }
    }

    clearAll() {
        const dataContent = "C";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const setResultFontSize = this.setResultFontSize;
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = "no secondNumber defined";
            thisClass.action = "no actions defined";
            topHistoryData.text = "0";
            topHistory.innerHTML = "";

            topResult.innerHTML = "0";
            setResultFontSize(thisClass);
        }
    }

    clearCurrentNumber() {
        const dataContent = "CE";
        const thisClass = this;
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const setResultFontSize = this.setResultFontSize;
        const topResult = this.topResult;

        selectedData.onclick = function() {
            topResult.innerHTML = `0`;

            setResultFontSize(thisClass);
        }
    }

    clearLastSymbol() {
        const dataContent = "<";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const setResultFontSize = this.setResultFontSize;
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

            setResultFontSize(thisClass);
        }
    }
}

const interface1 = new CalculatorOperations(".calculator");