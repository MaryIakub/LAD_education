//1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром

    // Function Declaration
    function getNumber(a, b) {
        let result = a**b;
        return result;
    };
    console.log("1.1", getNumber(2, 3));

    // Function Expression
    let getNumber2 = function(a, b) {
        let result = a**b;
        return result;
    };
    console.log("1.2", getNumber2(2, 2));

    // Cтрелочная функция
    let getNumber3 = (a, b) => a**b;
    console.log("1.3", getNumber3(5, 2));

// 2. Сделайте функцию, которая возвращает сумму двух чисел

    // Function Declaration
    function getSumm(a, b) {
        let result = a + b;
        return result;
    };
    console.log("2.1", getSumm(7, 3));

    // Function Expression
    let getSumm2 = function(a, b) {
        let result = a + b;
        return result;
    };
    console.log("2.2", getSumm2(2, 8));

    // Cтрелочная функция
    let getSumm3 = (a, b) => a + b;
    console.log("2.3", getSumm3(5, 5));

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье

    // Function Declaration
    function getNum(a, b, c) {
        let result = (a - b) / c;
        return result;
    };
    console.log("3.1", getNum(7, 3, 1));

    // Function Expression
    let getNum2 = function(a, b, c) {
        let result = (a - b) / c;
        return result;
    };
    console.log("3.2", getNum2(7, 3, 1));

    // Cтрелочная функция
    let getNum3 = (a, b, c) => (a - b) / c;
    console.log("3.3", getNum3(7, 3, 1));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке

    // Function Declaration
    function getDay(a) {
        if (a > 1 && a <= 7) {
            let day;
            if (a === 1) day = "Понедельник";
            if (a === 2) day = "Вторник";
            if (a === 3) day = "Среда";
            if (a === 4) day = "Четверг";
            if (a === 5) day = "Пятница";
            if (a === 6) day = "Суббота";
            if (a === 7) day = "Воскресенье";
            return day;
        } else {
            return "Ошибка! Введите число от 1 до 7!";
        };
    }
    console.log("4.1", getDay(5));

    // Function Expression
    let getDay2 = function(a) {
        if (a > 1 && a <= 7) {
            let day;
            if (a === 1) day = "Понедельник";
            if (a === 2) day = "Вторник";
            if (a === 3) day = "Среда";
            if (a === 4) day = "Четверг";
            if (a === 5) day = "Пятница";
            if (a === 6) day = "Суббота";
            if (a === 7) day = "Воскресенье";
            return day;
        } else {
            return "Ошибка! Введите число от 1 до 7!";
        };
    }
    console.log("4.2", getDay2(3));

    // Cтрелочная функция
    let getDay3 = (a) => {
        if (a > 1 && a <= 7) {
            let day;
            if (a === 1) day = "Понедельник";
            if (a === 2) day = "Вторник";
            if (a === 3) day = "Среда";
            if (a === 4) day = "Четверг";
            if (a === 5) day = "Пятница";
            if (a === 6) day = "Суббота";
            if (a === 7) day = "Воскресенье";
            return day;
        } else {
            return "Ошибка! Введите число от 1 до 7!";
        };
    };
    console.log("4.3", getDay3(5));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false
    
    // Function Declaration
    function isEquality(a, b) {
        return a === b;
    }
    console.log("5.1", isEquality(5, 5));

    // Function Expression
    let isEquality2 = function(a, b) {
        return a === b;
    }
    console.log("5.2", isEquality2(4, 5));

    // Cтрелочная функция
    let  isEquality3 = (a, b) => a === b;
    console.log("5.3", isEquality3(4, 4));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false
    
    // Function Declaration
    function islarger(a, b) {
        return (a + b) > 10;
    }
    console.log("6.1", islarger(3, 6));

    // Function Expression
    let islarger2 = function(a, b) {
        return (a + b) > 10;
    }
    console.log("6.2", islarger2(10, 4));

    // Cтрелочная функция
    let  islarger3 = (a, b) => (a + b) > 10;
    console.log("6.3", islarger3(10, 1));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false
    
    // Function Declaration
    function isNegative(a) {
        return a < 0;
    }
    console.log("7.1", isNegative(-5));

    // Function Expression
    let isNegative2 = function(a) {
        return a < 0;
    }
    console.log("7.2", isNegative2(3));

    // Cтрелочная функция
    let isNegative3 = (a) => a < 0;
    console.log("7.3", isNegative3(-3));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false

    // Function Declaration
    function isNumberInRange(a) {
        return a > 0 && a < 10;
    }
    console.log("8.1", isNumberInRange(15));

    // Function Expression
    let isNumberInRange2 = function(a) {
        return a > 0 && a < 10;
    }
    console.log("8.2", isNumberInRange2(5));

    // Cтрелочная функция
    let isNumberInRange3 = (a) => a > 0 && a < 10;
    console.log("8.3", isNumberInRange2(50));

// 9. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false

    // Function Declaration
    function isEven(a) {
        return !(a % 2);
    }
    console.log("9.1", isEven(11));

    // Function Expression
    let isEven2 = function(a) {
        return !(a % 2);
    }
    console.log("9.2", isEven2(10));

    // Cтрелочная функция
    let isEven3 = (a) => !(a % 2);
    console.log("9.3", isEven3(11));





