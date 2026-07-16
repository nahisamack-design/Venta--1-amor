// =================================
// BOTÓN "NO" SE ESCAPA
// =================================

const noButton = document.getElementById("noButton");


if(noButton){

    noButton.addEventListener("mouseenter", () => {

        moverNo();

    });


}


function moverNo(){

    let x = Math.random() * 250;
    let y = Math.random() * 80;


    noButton.style.transform =
    `translate(${x}px, ${y}px)`;

}



// =================================
// BOTÓN "SÍ"
// =================================


const yesButton = document.getElementById("yesButton");


if(yesButton){


    yesButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="02-carta.html";


        },800);



    });


}




// =================================
// CREAR CORAZONES FLOTANTES
// =================================


const heartsContainer = document.getElementById("hearts");


function crearCorazon(){


    if(!heartsContainer) return;



    const heart = document.createElement("div");


    heart.className="floating-heart";


    const corazones=[

        "❤️",
        "💕",
        "💖",
        "💗",
        "💘"

    ];


    heart.innerHTML =
    corazones[
        Math.floor(
            Math.random()*corazones.length
        )
    ];



    heart.style.left =
    Math.random()*100+"vw";



    heart.style.fontSize =
    (20 + Math.random()*30)+"px";



    heart.style.animationDuration =
    (5 + Math.random()*5)+"s";



    heartsContainer.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },9000);



}



setInterval(crearCorazon,400);





// =================================
// CREAR DESTELLOS
// =================================


const sparkles =
document.getElementById("sparkles");



function crearBrillo(){


    if(!sparkles) return;



    const sparkle =
    document.createElement("div");



    sparkle.className="sparkle";


    sparkle.innerHTML="✨";



    sparkle.style.left =
    Math.random()*100+"vw";



    sparkle.style.top =
    Math.random()*100+"vh";



    sparkle.style.fontSize =
    (15+Math.random()*25)+"px";



    sparkles.appendChild(sparkle);



    setTimeout(()=>{


        sparkle.remove();


    },3000);



}



setInterval(crearBrillo,700);

const nextButton = document.getElementById("nextButton");


if(nextButton){

    nextButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="03-carta-amor.html";


        },800);


    });


}

const reasonButton =
document.getElementById("reasonButton");


if(reasonButton){


    reasonButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="04-razones.html";


        },800);


    });


}

const promiseButton =
document.getElementById("promiseButton");


if(promiseButton){


    promiseButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="05-promesas.html";


        },800);


    });


}

const futureButton =
document.getElementById("futureButton");


if(futureButton){


    futureButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="06-futuro.html";


        },800);


    });


}

const princessButton =
document.getElementById("princessButton");


if(princessButton){


    princessButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="07-princesa.html";


        },800);


    });


}
const finalButton =
document.getElementById("finalButton");


if(finalButton){


    finalButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="08-final.html";


        },800);


    });


}
const restartButton =
document.getElementById("restartButton");


if(restartButton){


    restartButton.addEventListener("click",()=>{


        document.body.classList.add("fade-out");


        setTimeout(()=>{


            window.location.href="index.html";


        },800);


    });


}
