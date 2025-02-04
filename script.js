const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    alert("yayayayayayyay, SEE U SOON I LOVE YOU MY VALENTINE! ❤️🥰");
});

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});