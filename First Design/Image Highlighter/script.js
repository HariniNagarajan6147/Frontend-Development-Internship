let userName = "";
let userDob;
let count = 3;

document.getElementById("inputSection").addEventListener("submit", function (e) {
    e.preventDefault();

    userName = document.getElementById("name").value;
    userDob = document.getElementById("dob").value;

    if (userName === "" || userDob === "") return;

    document.getElementById("inputSection").style.display = "none";
    document.getElementById("countdownSection").classList.remove("hidden");

    startCountdown();
});

function startCountdown() {
    let cd = document.getElementById("countdown");

    let timer = setInterval(() => {
        cd.innerHTML = count;
        count--;

        if (count < 0) {
            clearInterval(timer);
            document.getElementById("countdownSection").style.display = "none";
            showApp();
        }
    }, 1000);
}

function showApp() {
    document.getElementById("mainSection").classList.remove("hidden");
    typeText("Hello " + userName + "! Welcome ✨", "welcomeText");
    startAge();
}

function typeText(text, id) {
    let i = 0;
    let el = document.getElementById(id);
    el.innerHTML = "";

    let t = setInterval(() => {
        el.innerHTML += text.charAt(i);
        i++;
        if (i === text.length) clearInterval(t);
    }, 80);
}

function startAge() {
    setInterval(() => {
        let dob = new Date(userDob);
        let now = new Date();
        let diff = now - dob;

        let s = Math.floor(diff / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);
        let y = Math.floor(d / 365);

        document.getElementById("ageCounter").innerHTML =
            y + " Years " +
            d % 365 + " Days " +
            h % 24 + " Hours " +
            m % 60 + " Minutes " +
            s % 60 + " Seconds";
    }, 1000);
}

function appendValue(v) {
    document.getElementById("calcDisplay").value += v;
}

function clearDisplay() {
    document.getElementById("calcDisplay").value = "";
}

function calculate() {
    let exp = document.getElementById("calcDisplay").value;
    try {
        document.getElementById("calcDisplay").value = eval(exp);
    } catch {
        document.getElementById("calcDisplay").value = "Error";
    }
}
