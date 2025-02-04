const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
     document.body.innerHTML = `
        
   <h1>yayayayayayyay, I can't wait to experience another priceless memory w you. SEE U SOON I LOVE YOU MY VALENTINE! ❤️🥰<h1>
   <img src="your-love-image.jpg" alt="I Love You" class="heart-image">
   
        </div>
    `;
});

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});