class CalculatorInterface {
    constructor(calculatorHTMLClass) {
        this.creatingElements(calculatorHTMLClass);
    }

    fillingElement (elementName,elementContent,appendTarget,...classList) {

        classList.forEach(element => {
            elementName.classList.add(element);
        });

        elementName.textContent = elementContent;
        appendTarget.append(elementName);
    }

    creatingElements(calculatorHTMLClass) {
        this.calculatorHTMLClass = calculatorHTMLClass;

        const mainElement = document.querySelector(this.calculatorHTMLClass);
        const supFlipNumber = document.createElement("sup");
        const supSquaringNumber = document.createElement("sup");

        const top_html = document.createElement("div");
        top_html.classList.add("top");
        mainElement.append(top_html);

        const topElement = document.querySelector('.top');

        this.bottom_html = document.createElement("div");
        this.bottom_html.classList.add("bottom");
        mainElement.append(this.bottom_html);

        const bottomElement = document.querySelector('.bottom');

        this.top_history = document.createElement("output");
        this.top_history.classList.add("top-history");
        topElement.append(this.top_history);

        this.top_result = document.createElement("output");
        this.top_result.classList.add("top-result");
        this.top_result.textContent = '0';
        topElement.append(this.top_result);

        const bottomPresent = document.createElement("button");
        this.fillingElement(bottomPresent,`%`,bottomElement,`bottom-button`,`bottom-present`);

        const bottomDeleteLastNumber = document.createElement("button");
        this.fillingElement(bottomDeleteLastNumber,`CE`,bottomElement,`bottom-button`,`delete-buttons`,`bottom-deleteLastNumber`);

        const bottomDeleteAll = document.createElement("button");
        this.fillingElement(bottomDeleteAll,`C`,bottomElement,`bottom-button`,`delete-buttons`,`bottom-deleteAll`);

        const bottomDeleteLast = document.createElement("button");
        this.fillingElement(bottomDeleteLast,`<`,bottomElement,`bottom-button`,`delete-buttons`,`bottom-deleteLast`);

        const bottom_flipNumber = document.createElement("button");
        this.fillingElement(bottom_flipNumber,`/x`,bottomElement,`bottom-button`,`bottom-flipNumber`);

        supFlipNumber.textContent = '1';
        document.querySelector('.bottom-flipNumber').prepend(supFlipNumber);

        const bottomSquaringNumber = document.createElement("button");
        this.fillingElement(bottomSquaringNumber,`x`,bottomElement,`bottom-button`,`bottom-squaringNumber`);

        supSquaringNumber.textContent = '2';
        document.querySelector('.bottom-squaringNumber').append(supSquaringNumber);

        const bottomSquareRoot = document.createElement("button");
        this.fillingElement(bottomSquareRoot,`\u221Ax`,bottomElement,`bottom-button`,`bottom-deleteAll`);

        const bottomDivide = document.createElement("button");
        this.fillingElement(bottomDivide,`\xF7`,bottomElement,`bottom-button`,`operation-button`,`bottom-divide`);

        const bottomSeven = document.createElement("button");
        this.fillingElement(bottomSeven,`7`,bottomElement,`bottom-button`,`number-button`,`bottom-seven`);

        const bottomEight = document.createElement("button");
        this.fillingElement(bottomEight,`8`,bottomElement,`bottom-button`,`number-button`,`bottom-eight`);

        const bottomNine = document.createElement("button");
        this.fillingElement(bottomNine,`9`,bottomElement,`bottom-button`,`number-button`,`bottom-nine`);

        const bottomTimes = document.createElement("button");
        this.fillingElement(bottomTimes,`\xD7`,bottomElement,`bottom-button`,`operation-button`,`bottom-times`);

        const bottomFour = document.createElement("button");
        this.fillingElement(bottomFour,`4`,bottomElement,`bottom-button`,`number-button`,`bottom-four`);

        const bottomFive = document.createElement("button");
        this.fillingElement(bottomFive,`5`,bottomElement,`bottom-button`,`number-button`,`bottom-five`);

        const bottomSix = document.createElement("button");
        this.fillingElement(bottomSix,`6`,bottomElement,`bottom-button`,`number-button`,`bottom-six`);

        const bottomMinus = document.createElement("button");
        this.fillingElement(bottomMinus,`-`,bottomElement,`bottom-button`,`operation-button`,`bottom-minus`);

        const bottomOne = document.createElement("button");
        this.fillingElement(bottomOne,`1`,bottomElement,`bottom-button`,`number-button`,`bottom-one`);

        const bottomTwo = document.createElement("button");
        this.fillingElement(bottomTwo,`2`,bottomElement,`bottom-button`,`number-button`,`bottom-two`);

        const bottomThree = document.createElement("button");
        this.fillingElement(bottomThree,`3`,bottomElement,`bottom-button`,`number-button`,`bottom-three`);

        const bottomPlus = document.createElement("button");
        this.fillingElement(bottomPlus,`+`,bottomElement,`bottom-button`,`operation-button`,`bottom-plus`);

        const bottomNegative = document.createElement("button");
        this.fillingElement(bottomNegative,`+/-`,bottomElement,`bottom-button`,`number-button`,`bottom-negative`);

        const bottomZero = document.createElement("button");
        this.fillingElement(bottomZero,`0`,bottomElement,`bottom-button`,`number-button`,`bottom-zero`);

        const bottomPoint = document.createElement("button");
        this.fillingElement(bottomPoint,`.`,bottomElement,`bottom-button`,`number-button`,`bottom-point`);

        const bottomResult = document.createElement("button");
        this.fillingElement(bottomResult,`=`,bottomElement,`bottom-button`,`red-button`,`bottom-result`);
    }

}

class CalculatorNumbers extends CalculatorInterface{
    constructor(...args) {
        super(...args);

        this.additionEventForNumbers();
    }



    additionEventForNumbers() {
        this.bottom_html.onclick = function(event) {
            let target = event.target;

            if (!target.classList.contains("number-button")) return;

            CalculatorNumbers.addSymbol(target.textContent);
        }
    }

    addSymbol(symbol) {
        this.resultNumberOfElement = this.top_result.innerHTML;

        switch (symbol) {
            case "+/-":
                if (this.resultNumberOfElement.includes(`-`) && this.resultNumberOfElement === `0`) {
                    this.top_result.innerHTML = `${this.resultNumberOfElement}`;
                }
                else if (this.resultNumberOfElement.includes(`-`)) {
                    this.top_result.innerHTML = `${this.resultNumberOfElement.slice(1,undefined)}`;
                }
                else {
                    this.top_result.innerHTML = `-${this.resultNumberOfElement}`;
                }

                break;
            case ".":
                if (!this.resultNumberOfElement.includes(`.`)) {
                    this.top_result.innerHTML = `${this.resultNumberOfElement}.`;
                }

                break;
            default:

                if (this.resultNumberOfElement.length > 10) {
                    this.top_result.style.fontSize = "26px";
                }

                if (this.resultNumberOfElement.length > 16) {
                    this.top_result.innerHTML = `${this.resultNumberOfElement}`;

                }
                else if (this.resultNumberOfElement === `0` && symbol !== `.`) {
                    this.top_result.innerHTML = `${symbol}`;
                }
                else {
                    this.top_result.innerHTML = `${this.resultNumberOfElement}${symbol}`;
                    this.top_history.innerHTML = `${this.resultNumberOfElement}${symbol}`;
                }
        }
    }
}

class CalculatorAction extends CalculatorNumbers{
    constructor(...args) {
        super(...args);

        // this.isOperation = 0;
        // this.prevValue = parseFloat(CalculatorInterface.top_result.innerHTML);
        // this.nextValue = undefined;

        CalculatorAction.additionEventForOperation();
    }

    static addAction(action) {
        this.resultNumberOfElement = CalculatorInterface.top_result.innerHTML;
        // this.historyElement = CalculatorInterface.top_history.innerHTML;
        // CalculatorInterface.top_history.innerHTML = `${action}`;

        CalculatorInterface.top_history.innerHTML = `${this.resultNumberOfElement} ${action}`;
        this.isOperation = 1;
    }

    static additionEventForOperation() {
        CalculatorInterface.bottom_html.onclick = function(event) {
            let target = event.target;

            if (!target.classList.contains("operation-button")) return;

            CalculatorAction.addAction(target.textContent);
        }
    }
}


const interface1 = new CalculatorNumbers(".calculator");