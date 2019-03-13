// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

// ------------------- Constructors and classes ------------------
/*
1. Создать конструктор для производства автомобилей. Конструктор должен 
принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, 
который возвращает марку, ивторой метод, который возвращает год производства машины.
Марка машины всегда должна возвращаться с большой буквы
*/
class Car {
    constructor(mark, year) {
        this.mark = mark;
        this.year = year;
    }
    markReturn() {
        return this.mark[0].toUpperCase() + this.mark.slice(1);
    }
    
    yearReturn() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }

}

const toyota = new Car('Toyota', 10);
const audi = new Car('Audi', 15);

/*
2. Написать конструктор, который умеет элементарно шифровать строки. 
Конструктор при инициализации получает строку и имеет следующие методы:
	a. показать оригинальную строку
    b. показать зашифрованную строку
Строки не должны быть доступны через this, только с помощью методов.
*/
function Encrypt(str) {
	let newStr = str.split("").reverse().join("");
	this.showOrigin = function() {
		return str;
	}
	this.showEncrypt = function() {
		return newStr;
	}
}
const str1 = new Encrypt('test');

// --------------------- Prototype. ES6 Classes ----------------------
/*
1. Реализовать конструктор в ES6 синтаксисе:
function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}
*/
class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}
  
const comp = new Component('span');

/*
2. Реализовать конструктор и методы в ES6 синтаксисе:

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Component.prototype.setText = function (text) { 
  this.node.textContent = text;
};
*/
class Component1 {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}
const comp2 = new Component1('span');

/*
3. Создать класс калькулятора который будет принимать стартовое значение 
и у него будут методы сложить, вычесть, умножить , разделить. 
Также у него должны быть геттер и сеттер для получения и установки 
текущего числа с которым производятся вычисления.
*/
class Calc {
    constructor(res) {
        this.res = res 
    }
    plus(num) {
        this.res += num;
        return this.res
    }
    minus(num) {
        this.res -= num;
        return this.res
    }
    multiply(num) {
        this.res *= num;
        return this.res
    }
    split(num) {
        this.res /= num;
        this.res = parseFloat(this.res.toFixed(2)); 
        return this.res
    }
    set() {
        return this.res;
    }
    get(res) {
        return this.res = res
    }
}

const num1 = new Calc(5);
const num2 = new Calc(2);

// --------------------- Date and time ----------------------
/*
1. Написать функцию, которая принимает год, а возвращает день 1го
января этого года. День должен быть в русском формате.
*/
function firstYearDay(year) {
    let myDate = new Date(year, 0, 1);    
    console.log(myDate.toLocaleString("ru-RU", {weekday: 'long'}) );
}

/*
2. Написать функцию, которая принимает дату в виде строки
“29.03.1985”, а возвращает день в русском формате (например, для
указанной даты это будет “пятница”). Известно, что формат даты в
строке всегда “дд.мм.гггг”.
*/
function strDay(strData) {
    date = strData.split('.');
    const myDate = new Date(+date[2], (+date[1] - 1), +date[0]);
    console.log(myDate.toLocaleString("ru-RU", {weekday: 'long'}) );  
}

/*
3. Узнать, сколько прошло полных недель с начала года (1го января
2016г.) до сегодняшней даты
*/
function weeksPassed() {
	const nowDate = Date.now(),
		date = new Date(2016, 0, 1),
		milisec = nowDate - Date.parse(date);
	return Math.floor(milisec / (1000 * 60 * 60 * 24 * 7));
}