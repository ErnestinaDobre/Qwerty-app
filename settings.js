document.addEventListener('DOMContentLoaded', function () {

    let keyboard = document.getElementById('keyboard');

    var div0 = document.createElement('div');
    div0.classList.add('flex-symbols')
    div0.innerHTML =
        `<div>@</div>
    <div>@</div>
    <div>@</div>
    <div>@</div>
    <div>@</div>
    <div>@</div>`;

    var div1 = document.createElement('div');
    div1.classList.add('flex-container')
    div1.innerHTML =
        `<div class='letter'>Q</div>
    <div class='letter'>W</div>
    <div class='letter'>E</div>  
    <div class='letter'>R</div>
    <div class='letter'>T</div>
    <div class='letter'>Y</div>  
    <div class='letter'>U</div>
    <div class='letter'>I</div>
    <div class='letter'>O</div>
    <div class='letter'>P</div>`;

    var div2 = document.createElement('div');
    div2.classList.add('flex-container-2')
    div2.innerHTML =
        `<div class='letter'>A</div>
    <div class='letter'>S</div>
    <div class='letter'>D</div>  
    <div class='letter'>F</div>
    <div class='letter'>G</div>
    <div class='letter'>H</div>  
    <div class='letter'>J</div>
    <div class='letter'>K</div>
    <div class='letter'>L</div>`;

    var div3 = document.createElement('div');
    div3.classList.add('flex-container-3')
    div3.innerHTML =
        `<div class="shift on" id='shift-btn' style="width: 30px;">&#8679;</div>
    <div class='letter seen-state'>Z</div>
    <div class='letter'>X</div>  
    <div class='letter'>C</div>
    <div class='letter'>V</div>
    <div class='letter'>B</div>  
    <div class='letter'>N</div>
    <div class='letter'>M</div>
    <div onclick="deleteKey()" class="delete" style="width: 30px;">&#9003;</div>`;

    var div4 = document.createElement('div');
    div4.classList.add('flex-container-4')
    div4.innerHTML =
        `<div style="width: 30px;">123</div>  
    <div style="width: 30px;">&#9786;</div>
    <div style="width: 164px;" onclick="spaceKey()">space</div>
    <div style="width: 80px;">&#8629;</div>`;

    keyboard.appendChild(div0);
    keyboard.appendChild(div1);
    keyboard.appendChild(div2);
    keyboard.appendChild(div3);
    keyboard.appendChild(div4);


    let letters = document.querySelectorAll(".letter");
    let inputArea = document.getElementById('use-keyboard-input');
    let shiftBtn = document.getElementById('shift-btn');
    shiftBtn.addEventListener('click', changeCaps);

    //Shift acts like a CapsLock button
    function changeCaps() {
        if (shiftBtn.classList.contains("off")) {
            shiftBtn.classList.replace("off", "on");
            letters.forEach(function (letter) {
                letter.innerText = letter.innerText.toUpperCase();
            });

        } else if (shiftBtn.classList.contains("on")) {
            shiftBtn.classList.replace("on", "off");
            letters.forEach(function (letter) {
                letter.innerText = letter.innerText.toLowerCase();
            });
        }
    }

    letters.forEach((element) => {
        element.addEventListener('click', printLetter)

        function printLetter() {
            inputArea.value += element.innerText
            element.classList.replace("letter", "is-active");
            setInterval(function () {
                element.classList.replace("is-active", "letter");

            }, 150);
        }
    })
    console.log(letters)
}, false);


function spaceKey() {
    document.getElementById('use-keyboard-input').value += ' ';
}
function deleteKey() {
    document.getElementById('use-keyboard-input').value = '';
    //In case we need to delete last character
    //document.getElementById('use-keyboard-input').value = inputValue.slice(0, -1); 
}

