(function () {
    "use strict";

    let convertType = "miles";
    const convertHeading = document.querySelector('h1');
    const intro = document.querySelector('intro');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');
    const btnKtoM = document.getElementById('KtoM');
    const btnMtoK = document.getElementById('MtoK');

    btnKtoM.addEventListener('click', function() {
            convertType = "kilometers";
            convertHeading.innerHTML = "Kilometers to Miles Converter";
    });

    btnMtoK.addEventListener('click', function() {
        convertType ="miles";
        convertHeading.innerHTML = "Miles to Kilometers Converter";
    });

    form.addEventListener('submit', function(event) {
    //this is the form submission handler
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance){
            if (convertType == "miles"){
                const converted = (distance * 1.689344).toFixed(3);
                answerDiv.innerHTML= `${distance} miles = ${converted} kilometers`;

            } else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML=`${distance} kilometers = ${converted} miles`;

            }
        } else {
            answerDiv.innerHTML = "<h2>PLEASE ENTER A NUMBER.</h2>"
        }
    });

    /* KEY PRESS CHANGE
    document.addEventListener('keydown', function(event) {
    //this changes between converters when you press the K and M key
        let key = event.code;
        if (key === 'KeyK'){
            convertType = "kilometers";
            convertHeading.innerHTML = "Kilometers to Miles Converter";
        } else if (key === 'KeyM'){
            convertType = "miles";
            convertHeading.innerHTML = "Miles to Kilometers Converter";
        }
    });
*/


})();