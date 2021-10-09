(function () {
    "use strict";

    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();

        let distance = parseFloat(document.getElementById('distance').value);
        let answer = document.getElementById('answer');
        if (distance){
            let conversion = (distance * 1.689344).toFixed(3);
            //alert(conversion);
            answer.innerHTML= `<h2>${distance} miles = ${conversion} kilometers</h2>`;
        } else {
            answer.innerHTML = "Please provide a number.";
        }
    }
    );


})();