import home from "./pages/home/script.js";

import experience from "./pages/experience/script.js";

import hobbies from "./pages/hobbies/script.js";

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = " ";
        switch(window.location.hash){
            case "#":
                main.appendChild(home());
                break;
            case "#experience":
                main.appendChild(experience());
                break;
            case "#hobbies":
                main.appendChild(hobbies());
                break;
            default: 
                main.appendChild(home()); 
        }
    })          
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})