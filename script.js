const words = ["hello", "bye", "afternoon", "house", "life", "peace", "nature"];

let timer;
const add_text = (id, text) => {
    const elem = document.querySelectorAll(`#${id}`)[0];
    let pos = 0;
    const addLetter = () => {
        elem.innerHTML += `<span>${text[pos]}</span>`;
        let randColor = "";
        const getRandColor = () => {
            randColor = Math.floor(Math.random() * 256);
            return randColor;
        }
        elem.children[pos].style.color = `rgb(${getRandColor()} ${getRandColor()} ${getRandColor()})`;
        pos++;
        if (pos >= text.length) {
            clearInterval(timer);
        }
    }
    timer = setInterval(addLetter, 1000);
}

const addTextButt = document.querySelectorAll("#addTextButt");
addTextButt[0].addEventListener("click", () => {
    if (document.querySelectorAll(`#text`)[0].innerHTML === "") {
        const text = words[Math.floor(Math.random() * words.length)];
        add_text('text', text);
    }
});

const removeTextButt = document.querySelectorAll("#removeTextButt");
removeTextButt[0].addEventListener("click", () => {
    document.querySelectorAll(`#text`)[0].innerHTML = "";
    clearInterval(timer);
});