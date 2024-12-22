
    



    let btnn = document.querySelectorAll(".btn");
    let display = document.querySelector(".input");
    let string = "";
    
    btnn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            
            let screenText = e.target.innerText;
            
            if (screenText === "=") {
                operations(); 
            } else if (screenText === "C") {
                clearScreen(); 
            } else {
                string += screenText;
                display.value = string; 
            }
        });
    });
    
    function clearScreen() {
        string = "";
        display.value = string;
    }
    
    function operations() {
        try {
            display.value = eval(string); 
        } catch (error) {
            display.value = "Error"; 
        }
    }

    

