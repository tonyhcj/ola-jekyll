const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function(){

    let atual = "";

    secoes.forEach(function(secao){

        const topo = secao.offsetTop;
        const altura = secao.offsetHeight;


        if(window.scrollY >= topo - altura / 3){
            atual = secao.id;
        }

    });


    links.forEach(function(link){

        link.classList.remove("current");


        if(link.getAttribute("href") === "#" + atual){
            link.classList.add("current");
        }

    });

});
