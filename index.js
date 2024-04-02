let age = 1;



    let api = 	"https://rickandmortyapi.com/api/character?page="+age;

async function getCard() {
    const response = await fetch(api);
    if (response.ok) {
        return await response.json();
    }
    return null;
}

let addButton =  document.getElementById("addButton")
addButton.addEventListener("click", function() {
    age++
	api= "https://rickandmortyapi.com/api/character?page="+age;
    vysledek.innerHTML = "";
    displayCard()

});

let previusobuton =  document.getElementById("addButtonBack")
previusobuton.addEventListener("click", function() {
    if (age > 1){
        age--
        api= "https://rickandmortyapi.com/api/character?page="+age;
        vysledek.innerHTML = "";
        displayCard()
    }else {
        alert("Cant go back");
    }



});







let vysledek = document.getElementById("vysledek");
let filter = "all"

async function displayCard() {
    const data = await getCard();
    console.log(data.results);

    for (let novakarta of data.results){

        let div = document.createElement("div");
        div.classList.add("result");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let span = document.createElement("span")
        span.classList.add("status")

        if (novakarta.status === "Dead"){
            span.classList.add("dead")
        }else if (novakarta.status === "Alive"){
            span.classList.add("alive")
        }else if (novakarta.status === "unknown"){
            span.classList.add("unknown")
        }

        span.innerText = novakarta.status;
        img.src = novakarta.image;
        h4.innerText = novakarta.name;

        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(span);
        vysledek.appendChild(div);

        let alive = document.querySelector("input[name=alive]");

        alive.addEventListener('change', function() {
            if (this.checked) {
                if (novakarta.status === "Alive") {
                    div.style.display = "block";
                } else{
                    div.style.display = "none";
                }
            } else {
                div.style.display = "block";
            }
        });

        let dead = document.querySelector("input[name=dead]");

        dead.addEventListener('change', function() {
            if (this.checked) {
                if (novakarta.status === "Dead"){
                    div.style.display = "block";
                }else if (novakarta.status === "Alive"){
                    div.style.display = "none";
                }else if (novakarta.status === "unknown"){
                    div.style.display = "none";
                }


            } else {
                div.style.display = "block";
            }
        });

        let unknown = document.querySelector("input[name=unknown]");

        unknown.addEventListener('change', function() {
            if (this.checked) {
                if (novakarta.status === "Dead"){
                    div.style.display = "none";
                }else if (novakarta.status === "Alive"){
                    div.style.display = "none";
                }else if (novakarta.status === "unknown"){
                    div.style.display = "block";
                }

            } else {
                div.style.display = "block";
            }
        });



    }
}
    displayCard()




