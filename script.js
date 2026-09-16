let noButtonClickCount = 0;
let noButtonState = 0;

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

/* =========================
   BOTÓN SÍ
========================= */
document.getElementById('siBtn').addEventListener('click', function () {

    // Ocultar gifs tristes
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';

    // Ocultar gif inicial
    document.getElementById('gifContainer').style.display = 'none';

    // Mostrar primer gif feliz
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar texto y botones
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.body.classList.add('bg-green');

    // Mostrar mensaje
    const message = document.getElementById('messageContainer');
    message.style.display = 'block';
    message.innerHTML = 'jajaja 💖';

    /* Secuencia de gifs felices */
    setTimeout(() => {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(() => {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);

    setTimeout(() => {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);

    // Mostrar botón final (cuando ya terminó todo)
    setTimeout(() => {
        document.getElementById('extraBtn').style.display = 'block';
    }, 500);
});

onload = () => {
    document.body.classList.remove("container");
};

/* =========================
   BOTÓN EXTRA → honey.html
========================= */
document.getElementById('extraBtn').addEventListener('click', function () {
    window.location.href = "honey.html";
});

/* =========================
   BOTÓN NO
========================= */
document.getElementById('noBtn').addEventListener('click', function () {

    switch (noButtonState) {

        case 0:
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura?';
            growYesButton(40, '20px 40px');
            noButtonState++;
            break;

        case 1:
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¿Realmente estás segura?!';
            growYesButton(50, '30px 50px');
            noButtonState++;
            break;

        case 2:
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¿Segura de verdad? 😢';
            growYesButton(60, '40px 60px');
            noButtonState++;
            break;

        case 3:
            document.getElementById('noBtn').innerHTML = '¿Eres positiva?';
            growYesButton(70, '50px 70px');
            noButtonState++;
            break;

        case 4:
            document.getElementById('noBtn').innerHTML = 'Di que no por favor';
            growYesButton(80, '60px 80px');
            noButtonState++;
            break;

        case 5:
            document.getElementById('noBtn').innerHTML = 'Solo piénsalo 😭';
            growYesButton(90, '70px 90px');
            noButtonState++;
            break;

        case 6:
            document.getElementById('noBtn').innerHTML = 'Me pondré muy triste';
            growYesButton(110, '80px 110px');
            noButtonState++;
            break;

        case 7:
            document.getElementById('noBtn').innerHTML = 'Muy MUY triste 💔';
            growYesButton(140, '100px 140px');
            noButtonState++;
            break;

        case 8:
            document.getElementById('noBtn').innerHTML = 'Ya casi me rompes 😭';
            growYesButton(170, '120px 170px');
            noButtonState++;
            break;

        case 9:
            document.getElementById('noBtn').innerHTML = 'Ok… último intento 😔';
            growYesButton(200, '140px 200px');
            noButtonState++;
            break;

        case 10:
            document.getElementById('noBtn').innerHTML = 'Es broma… POR FAVOR DI NO 😭❤️';
            growYesButton(240, '160px 240px');
            noButtonState++;
            break;

        case 11:
            // Reset
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'No';
            growYesButton(16, '10px 20px');
            noButtonState = 0;
            break;
    }

    document.getElementById('noBtn').style.backgroundColor = '#F1330A';
});

/* =========================
   FUNCIÓN CRECER BOTÓN SÍ
========================= */
function growYesButton(fontSize, padding) {
    const yesBtn = document.getElementById('siBtn');
    yesBtn.style.fontSize = fontSize + 'px';
    yesBtn.style.padding = padding;
}
