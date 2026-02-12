function checkCode() {
    const inputs = document.querySelectorAll(".code-box input");
    let enteredCode = "";

    inputs.forEach(input => {
        enteredCode += input.value;
    });

    const correctCode = "290401"; // CHANGE THIS

    if (enteredCode === correctCode) {
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = "valentine.html";
        }, 400);
    } else {
        alert("Oops 😜 Try again!");
    }
}

function yesClicked() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "unlock.html";
    }, 400);
}

function moveButton() {
    const stage = document.querySelector(".stage");
    const button = document.getElementById("noBtn");

    // If not already moved out of card
    if (!button.classList.contains("free")) {
        button.classList.add("free");
        stage.appendChild(button);  // Move button outside card
        button.style.position = "absolute";
    }

    const stageRect = stage.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const padding = 20;

    const maxX = stageRect.width - buttonWidth - padding;
    const maxY = stageRect.height - buttonHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = x + "px";
    button.style.top = y + "px";
}




const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("touchstart", moveButton);
    noBtn.addEventListener("mouseover", moveButton);
}



function unlock() {
    const key = document.getElementById("keyInput").value;
    const correctKey = "J0425D7"; // CHANGE THIS

    if (key === correctKey) {
        document.querySelector(".lock").textContent = "💖";
        document.getElementById("finalMessage").style.display = "block";
    } else {
        alert("Hmm 😏 That's not the right key!");
    }
}

const otpInputs = document.querySelectorAll(".code-box input");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", (e) => {
        const value = e.target.value;

        // Allow only numbers
        e.target.value = value.replace(/[^0-9]/g, "");

        if (value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });

});


