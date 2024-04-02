const btn = document.querySelector("#btn");
const radioButtons = document.querySelectorAll('input[name="language"]');
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    let selectedLanguage;
    for (const radioButton of radioButtons) {
    if (radioButton.checked) {
    selectedLanguage = radioButton.value;
    break;
    }
}
})
