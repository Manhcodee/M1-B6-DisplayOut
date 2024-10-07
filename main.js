let showAlert = document.querySelector('.demo');
showAlert.addEventListener('click', function (){
    alert("Xin chào");
});

let showHello = document.querySelector('.demo2');
showHello.addEventListener('click', function (){
    document.querySelector('.messageDiv').innerHTML = 'Xin Chào';
});

let showMessage = document.querySelector('.showMessage');
showMessage.addEventListener('click', function (){
    document.write("Hello");
});

const showMessageConsolog = document.querySelector('.showMessageConsolog');
showMessageConsolog.addEventListener('click', function (){
    console.log("Hello");
})