let input = document.querySelector("form input");
let buttons = document.querySelectorAll("button");

let final = ""; // final result
let forEval = ''; // for eval
let show = [] // for show nums;
buttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        if (e.target.innerHTML === "=") {
            final = eval(forEval);
            input.value = final;
        } else if (e.target.innerHTML === "AC") {
            show = [];
            final = "";
            forEval = "";
            input.value = final;
        } else if (e.target.innerHTML === "DEL") {
            forEval = forEval.slice(0, forEval.length - 1);
            show = show.slice(0, show.length - 1);
            input.value = show.join("");
        }
        else {
            forEval += e.target.innerHTML;
        }
        
        if (parseInt(e.target.innerHTML) || e.target.innerHTML === "0" || e.target.innerHTML === ".") {
            show.push(e.target.innerHTML);
            input.value = show.join("");
        }

        let ar = ["+", "-", "*", "/", "%"];
        for (let i = 0; i < ar.length; i++) {
            if (e.target.innerHTML === ar[i]) {
                show = [];
            }
        }
    })
})
