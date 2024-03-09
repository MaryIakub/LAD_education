// 1. Вывести в терминал строку “Hello World!”
    console.log("Hello World!");


// 2. Создать переменную для каждого типа данных
// 3. Вывести в консоль редактора кода созданные переменные - V
// 4. Вывести ее тип через оператор typeof и функцию typeof - V

// примитивные типы

    // 1. number
    // целочисленные значения и числа с плавающей точкой
    let itsNumber = 123;
    console.log (itsNumber);
    console.log (typeof itsNumber);

    // 2. bigInt
    // для чисел, больше +- 2^53-1
    let itsBidInt = 12345678n;
    console.log (itsBidInt);
    console.log (typeof itsBidInt);

    // 3. string
    let itsString = "Hello World!";
    console.log (itsString);
    console.log (typeof itsString);

    // 4. boolean
    // булевый (логический), true/false
    let itsBoolean = false;
    console.log (itsBoolean);
    console.log (typeof itsBoolean);

    // 5. null
    // ничего, пусто, значение неизвестно
    let itsNull = null;
    console.log (itsNull);
    console.log (typeof itsNull); // object - общепринятая ошибка JS

    // 6. undefined
    // значение не было присвоено
    let itsUndefined;
    console.log (itsUndefined);
    console.log (typeof itsUndefined);

// сложный тип
    // 7. object
    let itsObject = {
        name: "Marina",
        age: 31,
        married: true,
    };
    console.log (itsObject);
    console.log (typeof itsObject);

// typeof для функций
    // результатом typeof является function, такого типа данных не существует, так повелось от создания JS
    function itsFunction() {};
    console.log (typeof itsFunction);


// 5. Попробовать изменить переменную объявленную через const

    const myBirthday = "08.06.1992";
    // myBirthday = "01.01.1990";
    // изменение переменной, объявленной через const приведет к ошибке


// 6. Попробовать изменить переменную с типом object объявленную через const

    const myFamily = {
        mother: {
            name: "Alevtina",
            age: 62
        },
        father: {
            name: "Nikolay",
            age: 65
        },
        sister: false,
        brother: {
            name: "Andrey",
            age: 38
        }
    };
    // const myFamily = {
    //     name: "Marina",
    //     age: 32
    // };
    myFamily.sister = true;
    console.log(myFamily);
    // изменение объекта, объявленного через const приведет к ошибке, тогда как изменение значения в паре "ключ: значение", к ошибке не приведет


// 7. Попробовать изменить переменную с типом object объявленную через let

    let me = {
        name: "Marina",
        age: 32
    };
    me = null;
    console.log(me);
    // изменение объекта, объявленного через let не приведет к ошибке


// 8. Попробовать изменить переменную с типом object объявленную через var

    var myHouse = {
        street: "Rodionova",
        number: 234,
        floor: 7,
    };
    myHouse = undefined;
    console.log(myHouse);
    // изменение объекта, объявленного через var не приведет к ошибке

    