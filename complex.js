"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(x) {
        return new Complex(this.real + x.real, this.imaginary + x.imaginary);
    }
    substract(x) {
        return new Complex(this.real - x.real, this.imaginary - x.imaginary);
    }
    modul() {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    }
    toString() {
        console.log("Real: ", this.real, "Imaginary: ", this.imaginary);
    }
}
let com = new Complex(2, 3);
let com2 = new Complex(4, 5);
let com3 = com.add(com2);
com3.toString();
let com4 = com3.substract(com);
com4.toString();
let moduleCom = com4.modul();
console.log(moduleCom);
