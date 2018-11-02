"use strict";
(function () {
    'use strict';
    var hello = function (name, age, height, grades) {
        console.log("Ol\u00E1 " + name + " ! Seja bem vindo!");
    };
    var name = 'Daniel Gomes Mateus';
    var age = 25;
    var height = 1.75;
    var grades = [8.3, 7.5, 9];
    //let grades: number[] = [8.3, 7.5, 9]; 
    hello(name, age, height, grades);
})();
