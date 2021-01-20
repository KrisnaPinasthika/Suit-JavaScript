let pW = 0,
    cW = 0;

function getKomputer() {
    const com = Math.random();
    if (com < 0.4) {
        return "gunting";
    } else if (com > 0.7) {
        return "kertas";
    }
    return "batu";
}

function getPlayer(player, com) {
    if (player == com) {
        return "Seri";
    }
    if (player == "batu") {
        if (com == "gunting") {
            pW++;
            return "Menang";
        } else {
            cW++;
            return "Kalah";
        }
    } else if (player == "gunting") {
        if (com == "batu") {
            cW++;
            return "Kalah";
        } else {
            pW++;
            return "Menang";
        }
    } else {
        if (com == "gunting") {
            cW++;
            return "Kalah";
        } else {
            pW++;
            return "Menang";
        }
    }
}

const pArea = document.querySelector(".playerArea");
const data = pArea.getElementsByTagName("div");

const info = document.getElementsByClassName("info")[0];
const div_comp = document.getElementsByClassName("comp")[0];

for (let i = 0; i < data.length; i++) {
    data[i].addEventListener("mouseenter", function () {
        div_comp.style.boxShadow = "0 0 10px 5px lime";
        div_comp.style.backgroundColor = "gold";
    });

    data[i].addEventListener("mouseout", function () {
        div_comp.style.backgroundColor = "inherit";
        div_comp.style.boxShadow = "0 0 10px 5px white";
    });

    data[i].addEventListener("click", function () {
        const ply = data[i].className;
        const com = getKomputer();
        const hasil = getPlayer(ply, com);
        info.innerHTML = "-";

        roll();
        setTimeout(function () {
            const link = "image/" + com + ".png"
            div_comp.style.backgroundImage = "url(" + link + ")";
            div_comp.style.boxShadow = "0 0 10px 5px lightskyblue";
            div_comp.style.backgroundColor = "#3500D3";

            info.innerHTML = hasil;

            const skor_p = document.getElementsByClassName("skor_p")[0];
            const skor_c = document.getElementsByClassName("skor_c")[0];

            skor_p.innerHTML = pW;
            skor_c.innerHTML = cW;
        }, 1000);

    });
}

function roll() {
    const div_comp = document.querySelector(".comp");
    const arr = ["batu", "gunting", "kertas"];
    let i = 0;

    const start = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        const link = "image/" + arr[i++] + ".png";
        div_comp.style.backgroundImage = "url(" + link + ")";
        if (i == arr.length) {
            i = 0;
        }
    }, 20)


}