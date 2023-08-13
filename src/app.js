//Button animation//
let btn = document.getElementById("btn");

btn.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    btn.style.setProperty('--mouse-x', x + "px");
    btn.style.setProperty('--mouse-y', y + "px");
});
