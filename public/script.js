var stackText = "";
var buttonCount = document.querySelectorAll('.btn').length;
var screenText = document.querySelector('.screen-text');
var num1 = "";
var num2 = "";

// Lsitening to Button Clicks

for (let i = 0; i < buttonCount; i++) {
    document.querySelectorAll('.btn')[i].addEventListener("click", function () {
        var key = document.querySelectorAll('.btn')[i].innerHTML;
        detect(key);
    });
}

// Listening to Keypress

document.addEventListener("keypress", function(event) {
    detect(event.key);
});

// Function to detect

function detect(key) {

    switch (key) {
        case "C/CE":
            stackText = "";
            screenText.textContent = "";
            break;

        case " ":
            stackText = "";
            screenText.textContent = "";
            break;
    
        case "0":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("0");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "1":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("1");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "2":
            if(screenText.textContent == "0" ) {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("2");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "3":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("3");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "4":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("4");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "5":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("5");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "6":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("6");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "7":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("7");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "8":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("8");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "9":
            if(screenText.textContent == "0") {
                screenText.textContent = "";
            }
            else if(stackText.slice(stackText.length-1, stackText.length) == "+" ||
             stackText.slice(stackText.length-1, stackText.length) == "-" ||
              stackText.slice(stackText.length-1, stackText.length) == "×" ||
               stackText.slice(stackText.length-1, stackText.length) == "*" ||
               stackText.slice(stackText.length-1, stackText.length) == "÷" ||
               stackText.slice(stackText.length-1, stackText.length) == "/") {
                screenText.textContent = "";
                num1 = stackText;
                stackText = "";
            }

            var text = document.createTextNode("9");
            screenText.appendChild(text);
            stackText = screenText.innerText.slice(screenText.length-1, screenText.length);
            break;
    
        case "+":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }
    
            var text = "+";
            stackText = stackText + text;
            break;
    
        case "-":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }
    
            var text = "-";
            stackText = stackText + text;
            break;
    
        case "×":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }
    
            var text = "*";
            stackText = stackText + text;
            break;

        case "*":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }
    
            var text = "*";
            stackText = stackText + text;
            break;
    
        case "÷":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }
    
            var text = "/";
            stackText = stackText + text;
            break;

        case "/":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }
    
            var text = "/";
            stackText = stackText + text;
            break;
    
        case "CL":
            if(screenText.textContent == "Error!") {
                screenText.textContent = "";
                break;
            }
    
            stackText = screenText.innerText;
            stackText = stackText.slice(0, stackText.length-1);
            screenText.textContent = stackText;
            break;
    
        case "=":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }

            num2 = stackText;
            stackText = num1 + num2;
            stackText = eval(stackText);
            screenText.textContent = stackText;
            break;

        case "Enter":
            if(screenText.textContent == "") {
                screenText.textContent = "";
                break;
            }
            else if(screenText.textContent == "Error!") {
                screenText.textContent = "Error!";
                break;
            }

            num2 = stackText;
            stackText = num1 + num2;
            stackText = eval(stackText);
            screenText.textContent = stackText;
            break;
    
        default:
            screenText.textContent = "Error!";
            break;
    }
}