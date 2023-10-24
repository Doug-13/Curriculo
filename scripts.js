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
    let name = document.querySelectorAll(".name");
    let title_2 = document.querySelectorAll(".title_2");
    let line = document.querySelector(".line");
    let buttonText = document.getElementById("text");
    let button = document.getElementById("text");
    let listas = document.querySelector(".listAtiv");
   

    // Olá Eduarda, boar tarde!
    //   Entro em contato com você a pedido da Mika do SENAC, me apliquei a oportunidade de Suporte Técnico e tenho grande interesse em fazer parte da SKA, fico a disposição para falarmos.

    body.addEventListener("click", () => {
        if (buttonText.textContent === "Dark") {
            buttonText.textContent = "Light";
            body.style.background = "var(--texto_black)";
            
            button.style.backgroundColor = "var(--texto)";
            button.style.color = "var(--texto_black)";
            h1.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            h2.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            h3.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            table.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            p.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            name.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            title_2.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            line.style.backgroundColor="var(--texto)";

            listas.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            
        } else {
            buttonText.textContent = "Dark";
            body.style.background = "var(--background)";
            button.style.backgroundColor = "var(--texto_black)";
            line.style.backgroundColor="var(--texto_black)";

            button.style.color = "var(--texto)";
            h1.forEach((element) => {
                element.style.color = "var(--texto_black)";
            });
            h2.forEach((element) => {
                element.style.color = "var(--texto_black )";
            });
            h3.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            table.forEach((element) => {
                element.style.color = "var(--texto_black)";
            });
            p.forEach((element) => {
                element.style.color = "var(--texto_black)";
            });
            name.forEach((element) => {
                element.style.color = "var(--texto)";
            });
            title_2.forEach((element) => {
                element.style.color = "var(--texto_black)";
            });
            line.forEach((element) => {
                element.style.color = "var(--texto)";
            });
           
        }
    });
};


