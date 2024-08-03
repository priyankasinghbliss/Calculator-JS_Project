let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        if(value === '='){
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
            }
        }
        else if(value === 'AC'){
            string = '';
            input.value = string;
        }
        else if(value === 'DE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            const lastChar = string[string.length - 1];
            const operators = ['+', '-', '*', '/', '%', '.'];

            if (operators.includes(value)) {
                if (operators.includes(lastChar)) {
                    string = string.slice(0, -1);
                }
            }
            
            string += value;
            input.value = string;
        }
        
    })
})