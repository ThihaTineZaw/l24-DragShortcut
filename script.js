const btns = document.querySelector('.btns');
const box = document.querySelector('.header-box');
const wholeBox = document.querySelector('.box');

box.addEventListener('click', function () {
    btns.classList.add('show');
});

box.addEventListener('dblclick', function () {
    btns.classList.remove('show');
});

drag(wholeBox);

function drag(target) {
    let getX, getY, setX, setY;

    if (target) {
        target.onmousedown = mousedown;
    }

    function mousedown(e) {
        getX = e.clientX;
        getY = e.clientY;

        document.onmousemove = dragbox;
        document.onmouseup = stopbox;
        btns.classList.remove('show');
        
    }

    function dragbox(e) {
        setX = getX - e.clientX;
        setY = getY - e.clientY;

        getX = e.clientX;
        getY = e.clientY;

        let getLeft = target.offsetLeft;
        let getTop = target.offsetTop;

        target.style.left = (getLeft - setX) + 'px';
        target.style.top = (getTop - setY) + 'px';
    }

    function stopbox() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
