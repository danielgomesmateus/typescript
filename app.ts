(function(){

    'use strict';
    
    let hello = (name: string, age: number, height: number, grades: Array<number>) => {

        console.log(`Olá ${name} ! Seja bem vindo!`);
    };
    
    let name: string          = 'Daniel Gomes Mateus';
    let age: number           = 25;
    let height: number        = 1.75;
    let grades: Array<number> = [8.3, 7.5, 9]; 
    //let grades: number[] = [8.3, 7.5, 9]; 
    
    hello(name, age, height, grades);
})();