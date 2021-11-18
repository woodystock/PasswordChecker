const passwordInput = document.getElementById("password-input");




const passwordInputChangeHandler = (event) => {

    updateStrength(event.target.value.length);
}

const updateStrength = (length) => {
    const strengthBar = document.getElementById("strength-bar");

    let outputDisplay = document.getElementById("output-display");

    if(! outputDisplay) {
        outputDisplay = document.createElement("p");
        outputDisplay.id = "output-display";
        outputDisplay.className = "output-display";

        document.body.append(outputDisplay);
    }

    strengthBar.value = length * 5;

    if(length == 0) {
        strengthBar.className = "strength-bar--poor";
        outputDisplay.remove();
    }
    else if(length < 8 ) {
        strengthBar.className = "strength-bar--poor";
        outputDisplay.textContent = "Should be longer";
    }
    else if(length < 12) {
        strengthBar.className = "strength-bar--medium";
        outputDisplay.textContent = "Pretty good";
    }
    else {
        strengthBar.className = "strength-bar--strong";
        outputDisplay.textContent = "Grrrreat!";
    }

}


updateStrength(0);
passwordInput.addEventListener("input", passwordInputChangeHandler);