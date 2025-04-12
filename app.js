document.addEventListener("DOMContentLoaded", ()=>{
    let display = document.querySelector(".display p");
    let buttons = document.querySelectorAll(".numbers");
    let operator = "";
    let previousValue = "";
    let currentValue = "";

    buttons.forEach(button=>{
        button.addEventListener("click", ()=>{
            const value = button.textContent;

            switch(true){
                case value ==="C":
                    operator = "";
                    previousValue = "";
                    currentValue = "";
                    display.textContent = "0";
                    break;

                case value === "<":
                    currentValue = currentValue.slice(0, -1);
                    display.textContent = currentValue || "0";
                    break;

                case ["+","-","*","/"].includes(value):
                    operator = value;
                    previousValue = currentValue;
                    currentValue = "";
                    break;

                case value === "=":
                    if(previousValue && operator && currentValue){
                        const result = eval(`${previousValue} ${operator} ${currentValue}`)
                        display.textContent =  result;
                        currentValue = result.toString();
                        previousValue = "";
                        operator = "";
                        break;
                    }

                default:
                    currentValue += value;
                    display.textContent = currentValue;
                    break;
            }
        })
    })
});
