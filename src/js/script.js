let resultElement = document.querySelector('.top-result');
let resultNumberOfElement = resultElement.innerHTML;

const insertNumber = (number) => {
    resultElement = document.querySelector('.top-result');
    resultNumberOfElement = resultElement.innerHTML;

    if (resultNumberOfElement.length > 16){     //ограничение по длинне числа
        resultElement.innerHTML = `${resultNumberOfElement}`;
    } else if (resultNumberOfElement === `0`) {     //не впысываем 0 спереди
        resultElement.innerHTML = `${number}`;
    } else {
        resultElement.innerHTML = `${resultNumberOfElement}${number}`;
    }

    if (resultNumberOfElement.length > 10) {
        resultElement.style.fontSize = "26px";
    }
};

const deleteLastSymbol = () => {
    resultElement = document.querySelector('.top-result');
    resultNumberOfElement = resultElement.innerHTML;

    resultElement.innerHTML = resultNumberOfElement.slice(0, -1);
    resultNumberOfElement = resultElement.innerHTML;

    if (resultNumberOfElement === ``) {
        resultElement.innerHTML = '0';
    }
};