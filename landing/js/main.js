
//-----------------------------------
//-----------------------------------
// Typing text
//-----------------------------------
//-----------------------------------

function writeTextByJS(id, text, speed) {

    let el = document.getElementById(id),
        txt = text.join("").split("");

    let interval = setInterval(function () {

        if (!txt[0]) {

            return clearInterval(interval);
        }

        el.innerHTML += txt.shift();
    }, speed !== undefined ? speed : 32);

    return false;
}


writeTextByJS(
    "headerTypingText",
    [
        "Не знаешь\n",
        "как легко освоить \n",
        "быструю печать?\n"
    ]
);

//-----------------------------------
//-----------------------------------
// ANCOR
//-----------------------------------
//-----------------------------------

// $('#keyboardSection').click(function (){
//
// })

// $('#keyboardSection').on('click', function() {
//
//     let href = $(this).attr('href');
//
//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 4470,   // по умолчанию «400»
//         easing: "linear" // по умолчанию «swing»
//     });
//
//     return false;
// });

//-----------------------------------
//-----------------------------------
// Keyboard
//-----------------------------------
//-----------------------------------

const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
    return keys[getRandomNumber(0, keys.length - 1)]
}

function targetRandomKey() {
    const key = document.getElementById(getRandomKey());
    key.classList.add("selected");
}

function getTimestamp() {
    return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
    const keyPressed = event.key.toUpperCase();
    // const keyElement = document.getElementById(keyPressed);
    const highlightedKey = document.querySelector(".selected");

    if (keyPressed === highlightedKey.innerHTML) {
        timestamps.unshift(getTimestamp());
        highlightedKey.classList.remove("selected");
        targetRandomKey();
    }
})

targetRandomKey();

//-----------------------------------
//-----------------------------------
// POP UP
//-----------------------------------
//-----------------------------------
$('.keyboardImg').click(function(){
    $('#keyboardTitle').text("Закрепим результат");
    $('#KeyboardP').text('Потренируйся пару минут на английской раскладке НЕ \n СМОТРЯ на клавиатуру!');
    $('.keyboardImg').toggleClass('unactive');
    $('#keyboard').css("display", "block")
});

$('#keyboard').click(function(){
    // $('#keyboardTitle').text("Закрепим результат");
    // $('#KeyboardP').text('Потренируйся пару минут на английской раскладке НЕ \n СМОТРЯ на клавиатуру!');
    $('.keyboardImg').toggleClass('unactive')
    $('#keyboard').css("display", "none")
});

// $(document).ready(function() {
//     $(".keys").click(function() {
//         $(".keyboardImg").toggleClass("transparent");
//     });
// });

//-----------------------------------
//-----------------------------------
// CURSOR
//-----------------------------------
//-----------------------------------

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
        x: e.clientX - 15,
        y: e.clientY - 15
    })
    TweenMax.to($smallBall, .1, {
        x: e.clientX - 5,
        y: e.clientY - 7
    })
}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, .3, {
        scale: 4
    })
}
function onMouseHoverOut() {
    TweenMax.to($bigBall, .3, {
        scale: 1
    })
}




const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".butn-open");
const closeModalBtn = document.querySelector(".butn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);

