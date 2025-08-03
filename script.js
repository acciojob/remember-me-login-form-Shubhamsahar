const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    alert(`Logged in as ${username}`);
    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", passwordInput.value);
        existingButton.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingButton.style.display = "none";
    }
});

const storedUsername = localStorage.getItem("username");
if (storedUsername) {
    existingButton.style.display = "block";
}

existingButton.addEventListener("click", () => {
    const storedUsername = localStorage.getItem("username");
    alert(`Logged in as ${storedUsername}`);
});

