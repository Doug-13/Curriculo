// let botao = document.getElementById('color_mode');

// botao.addEventListener("click", () => {
//     let selecao = document.querySelectorAll('background');
//     seleção.forEach((element) => {
//         element.classList.toogle()
//     })
// });

const color_mode = () => {
    let body = document.querySelector("body");
    let h1 = document.querySelectorAll("h1");
    let h2 = document.querySelectorAll("h2");
    let h3 = document.querySelectorAll("h3");
    let table = document.querySelectorAll("table");
    let p = document.querySelectorAll("p");
    // let text = document.getElementById("text");
    let buttonText = document.getElementById("text");
    let button = document.getElementById("text");

    body.addEventListener("click", () => {
        if (buttonText.textContent === "Dark") {
            buttonText.textContent = "Light";
            body.style.background = "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(98,101,98,1) 100%)";
            button.style.backgroundColor = "rgba(255, 255, 255, 1)";
            button.style.color = "rgba(0, 0, 0, 1)";
            h1.forEach((element) => {
                element.style.color = "rgba(255, 255, 255, 1)";
            });
            h2.forEach((element) => {
                element.style.color = "rgba(255, 255, 255, 1)";
            });
            h3.forEach((element) => {
                element.style.color = "rgba(255, 255, 255, 1)";
            });
            table.forEach((element) => {
                element.style.color = "rgba(255, 255, 255, 1)";
            });
            p.forEach((element) => {
                element.style.color = "rgba(255, 255, 255, 1)";
            });
        } else {
            buttonText.textContent = "Dark";
            body.style.background = "linear-gradient(90deg, rgba(35, 36, 0, 1) 0%, rgba(13, 245, 137, 1) 17%, rgba(0, 212, 255, 1) 100%)";
            button.style.backgroundColor = "rgba(0, 0, 0, 1)";

            button.style.color = "rgba(255, 255, 255, 1)";
            h1.forEach((element) => {
                element.style.color = "rgba(0, 0, 0, 1)";
            });
            h2.forEach((element) => {
                element.style.color = "rgba(0, 0, 0, 1 )";
            });
            h3.forEach((element) => {
                element.style.color = "rgba(0, 0, 0, 1)";
            });
            table.forEach((element) => {
                element.style.color = "rgba(0, 0, 0, 1)";
            });
            p.forEach((element) => {
                element.style.color = "rgba(0, 0, 0, 1)";
            });
        }
    });
};


