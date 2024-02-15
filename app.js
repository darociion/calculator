function init() {
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.innerText;
            if (result.innerText === "Error" || result.innerText === "undefined"  || result.innerText === "NaN") {
                operation.innerText = "";
                result.innerText = "";
            }
            if (value === "AC") {
                operation.innerText = "";
                result.innerText = "";
                return;
            }
            if (value === "=") {
                result.innerText = calculate(operation.innerText);
                operation.innerText += " = ";
                return;
            }
            if (operation.innerText.length <= 15 && result.innerText.length <= 0) {
                operation.innerText += value;
            }
        });
    });
}

function calculate(operation) {
    try {
        const result = eval(operation);
        if (result === Infinity || result === -Infinity || result === undefined) {
            return "Error";
        }
        return result > 999 ? result.toPrecision(3) : result % 1 !== 0 ? result.toFixed(1) : result;
    } catch (error) {
        return "Error";
    }
}

init();