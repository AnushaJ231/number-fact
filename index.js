let inputEl = document.getElementById("userInput");
let outputParaEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function displayFact(fact) {
    outputParaEl.textContent = fact;
}


function getFactAboutNumber() {
    if (event.key === "Enter") {
        let number = inputEl.value;
        if (number === "") {
            alert("Enter a Number");
        }
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/numbers-fact?number=" + number;

        spinnerEl.classList.remove("d-none");
        outputParaEl.classList.add("d-none");

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                outputParaEl.classList.remove("d-none");

                let {
                    fact
                } = jsonData;
                displayFact(fact);
            });
    }
}

inputEl.addEventListener("keyup", getFactAboutNumber);