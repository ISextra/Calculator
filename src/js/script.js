

class CalculatorInterface {
    constructor(calculatorHTMLClass) {
        CalculatorInterface.initialisationInterface(calculatorHTMLClass);
    }

   static initialisationInterface(calculatorHTMLClass) {
        this.calculatorHTMLClass = calculatorHTMLClass;

        const mainElement = document.querySelector(this.calculatorHTMLClass);
        let sup_flipNumber = document.createElement("sup");
        let sup_squaringNumber = document.createElement("sup");
        let sup_negative = document.createElement("sup");


        let top_html = document.createElement("div");
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

        let bottom_present = document.createElement("button");
        bottom_present.classList.add("bottom-button");
        bottom_present.classList.add("bottom-present");
        bottom_present.textContent = '%';
        bottomElement.append(bottom_present);

        let bottom_deleteLastNumber = document.createElement("button");
        bottom_deleteLastNumber.classList.add("bottom-button");
        bottom_deleteLastNumber.classList.add("delete-buttons");
        bottom_deleteLastNumber.classList.add("bottom-deleteLastNumber");
        bottom_deleteLastNumber.textContent = 'CE';
        bottomElement.append(bottom_deleteLastNumber);

        let bottom_deleteAll = document.createElement("button");
        bottom_deleteAll.classList.add("bottom-button");
        bottom_deleteAll.classList.add("delete-buttons");
        bottom_deleteAll.classList.add("bottom-deleteAll");
        bottom_deleteAll.textContent = 'C';
        bottomElement.append(bottom_deleteAll);

        let bottom_deleteLast = document.createElement("button");
        bottom_deleteLast.classList.add("bottom-button");
        bottom_deleteLast.classList.add("delete-buttons");
        bottom_deleteLast.classList.add("bottom-deleteLast");
        bottom_deleteLast.textContent = '<';
        bottomElement.append(bottom_deleteLast);

        let bottom_flipNumber = document.createElement("button");
        bottom_flipNumber.classList.add("bottom-button");
        bottom_flipNumber.classList.add("bottom-flipNumber");
        bottom_flipNumber.textContent = '/x';
        bottomElement.append(bottom_flipNumber);

        sup_flipNumber.textContent = '1';
        document.querySelector('.bottom-flipNumber').prepend(sup_flipNumber);

        let bottom_squaringNumber = document.createElement("button");
        bottom_squaringNumber.classList.add("bottom-button");
        bottom_squaringNumber.classList.add("bottom-squaringNumber");
        bottom_squaringNumber.textContent = 'x';
        bottomElement.append(bottom_squaringNumber);

        sup_squaringNumber.textContent = '2';
        document.querySelector('.bottom-squaringNumber').append(sup_squaringNumber);

        let bottom_delete_All = document.createElement("button");
        bottom_delete_All.classList.add("bottom-button");
        bottom_delete_All.classList.add("bottom-deleteAll");
        bottom_delete_All.textContent = '\u221Ax';
        bottomElement.append(bottom_delete_All);

        let bottom_divide = document.createElement("button");
        bottom_divide.classList.add("bottom-button");
        bottom_divide.classList.add("operation-button");
        bottom_divide.classList.add("bottom-divide");
        bottom_divide.textContent = '\xF7';
        bottomElement.append(bottom_divide);

        let bottom_seven = document.createElement("button");
        bottom_seven.classList.add("bottom-button");
        bottom_seven.classList.add("number-button");
        bottom_seven.classList.add("bottom-seven");
        bottom_seven.textContent = '7';
        bottomElement.append(bottom_seven);

        let bottom_eight = document.createElement("button");
        bottom_eight.classList.add("bottom-button");
        bottom_eight.classList.add("number-button");
        bottom_eight.classList.add("bottom-eight");
        bottom_eight.textContent = '8';
        bottomElement.append(bottom_eight);

        let bottom_nine = document.createElement("button");
        bottom_nine.classList.add("bottom-button");
        bottom_nine.classList.add("number-button");
        bottom_nine.classList.add("bottom-nine");
        bottom_nine.textContent = '9';
        bottomElement.append(bottom_nine);

        let bottom_times = document.createElement("button");
        bottom_times.classList.add("bottom-button");
        bottom_times.classList.add("operation-button");
        bottom_times.classList.add("bottom-times");
        bottom_times.textContent = '\xD7';
        bottomElement.append(bottom_times);

        let bottom_four = document.createElement("button");
        bottom_four.classList.add("bottom-button");
        bottom_four.classList.add("number-button");
        bottom_four.classList.add("bottom-four");
        bottom_four.textContent = '4';
        bottomElement.append(bottom_four);

        let bottom_five = document.createElement("button");
        bottom_five.classList.add("bottom-button");
        bottom_five.classList.add("number-button");
        bottom_five.classList.add("bottom-five");
        bottom_five.textContent = '5';
        bottomElement.append(bottom_five);

        let bottom_six = document.createElement("button");
        bottom_six.classList.add("bottom-button");
        bottom_six.classList.add("number-button");
        bottom_six.classList.add("bottom-six");
        bottom_six.textContent = '6';
        bottomElement.append(bottom_six);

        let bottom_minus = document.createElement("button");
        bottom_minus.classList.add("bottom-button");
        bottom_minus.classList.add("operation-button");
        bottom_minus.classList.add("bottom-minus");
        bottom_minus.textContent = '-';
        bottomElement.append(bottom_minus);

        let bottom_one = document.createElement("button");
        bottom_one.classList.add("bottom-button");
        bottom_one.classList.add("number-button");
        bottom_one.classList.add("bottom-one");
        bottom_one.textContent = '1';
        bottomElement.append(bottom_one);

        let bottom_two = document.createElement("button");
        bottom_two.classList.add("bottom-button");
        bottom_two.classList.add("number-button");
        bottom_two.classList.add("bottom-two");
        bottom_two.textContent = '2';
        bottomElement.append(bottom_two);

        let bottom_three = document.createElement("button");
        bottom_three.classList.add("bottom-button");
        bottom_three.classList.add("number-button");
        bottom_three.classList.add("bottom-three");
        bottom_three.textContent = '3';
        bottomElement.append(bottom_three);

        let bottom_plus = document.createElement("button");
        bottom_plus.classList.add("bottom-button");
        bottom_plus.classList.add("operation-button");
        bottom_plus.classList.add("bottom-plus");
        bottom_plus.textContent = '+';
        bottomElement.append(bottom_plus);

        let bottom_negative = document.createElement("button");
        bottom_negative.classList.add("bottom-button");
        bottom_negative.classList.add("number-button");
        bottom_negative.classList.add("bottom-negative");
        bottom_negative.textContent = '/-';
        bottomElement.append(bottom_negative);

        sup_negative.textContent = '+';
        document.querySelector('.bottom-negative').prepend(sup_negative);

        let bottom_zero = document.createElement("button");
        bottom_zero.classList.add("bottom-button");
        bottom_zero.classList.add("number-button");
        bottom_zero.classList.add("bottom-zero");
        bottom_zero.textContent = '0';
        bottomElement.append(bottom_zero);

        let bottom_point = document.createElement("button");
        bottom_point.classList.add("bottom-button");
        bottom_point.classList.add("number-button");
        bottom_point.classList.add("bottom-point");
        bottom_point.textContent = '.';
        bottomElement.append(bottom_point);

        let bottom_result = document.createElement("button");
        bottom_result.classList.add("bottom-button");
        bottom_result.classList.add("red-button");
        bottom_result.classList.add("bottom-result");
        bottom_result.textContent = '=';
        bottomElement.append(bottom_result);
    }

}

class CalculatorNumbers extends CalculatorInterface{
    constructor(...args) {
        super(...args);

        CalculatorNumbers.additionEventForNumbers();
    }

    static addSymbol(symbol) {
        this.resultNumberOfElement = CalculatorInterface.top_result.innerHTML;

        switch (symbol) {
            case "+/-":
                if (this.resultNumberOfElement.includes(`-`) && this.resultNumberOfElement === `0`) {
                    CalculatorInterface.top_result.innerHTML = `${this.resultNumberOfElement}`;
                }
                else if (this.resultNumberOfElement.includes(`-`)) {
                    CalculatorInterface.top_result.innerHTML = `${this.resultNumberOfElement.slice(1,undefined)}`;
                }
                else {
                    CalculatorInterface.top_result.innerHTML = `-${this.resultNumberOfElement}`;
                }

                break;
            case ".":
                if (!this.resultNumberOfElement.includes(`.`)) {
                    CalculatorInterface.top_result.innerHTML = `${this.resultNumberOfElement}.`;
                }

                break;
            default:

                if (this.resultNumberOfElement.length > 10) {
                    CalculatorInterface.top_result.style.fontSize = "26px";
                }

                if (this.resultNumberOfElement.length > 16) {
                    CalculatorInterface.top_result.innerHTML = `${this.resultNumberOfElement}`;

                }
                else if (this.resultNumberOfElement === `0` && symbol !== `.`) {
                    CalculatorInterface.top_result.innerHTML = `${symbol}`;
                }
                else {
                    CalculatorInterface.top_result.innerHTML = `${this.resultNumberOfElement}${symbol}`;
                    CalculatorInterface.top_history.innerHTML = `${this.resultNumberOfElement}${symbol}`;
                }
        }
    }

    static additionEventForNumbers() {
        CalculatorInterface.bottom_html.onclick = function(event) {
            let target = event.target;

            if (!target.classList.contains("number-button")) return;

            CalculatorNumbers.addSymbol(target.textContent);
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


const interface1 = new CalculatorAction(".calculator");

