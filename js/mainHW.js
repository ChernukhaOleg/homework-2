//1. Составить предложение из вышестоящих переменных:
//"Сколько нужно программистов чтобы сделать проект ? 25, 1, команда"
let numbers = [25, 1];
let project = "проект";
let team = `команда`;
let howMuch = "Сколько";
let sentence = 'нужно программистов чтобы сделать проект ?';
let task1 = `${howMuch} ${sentence} ${numbers}, ${team}`;
let task = howMuch + ' ' + sentence + ' ' + numbers + ', ' + team;
console.log(task1);
console.log(task);

/*
2. Составьте предложение из представленного массива и выведите предложение
в консоль;
"Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
Он не был больше ни телом, к которому рано или поздно ..."
*/

let array = ['Он не был больше ни телом, к которому рано или поздно',
    'он обнаружил', 'Так, когда Будда достиг Просветления',
    '...', 'что больше не ощущает себя мишенью'];

//alert( array.length );
//Вывел предложения в нужном порядке
console.log('"'+array[2] + ', ' + array[1], array[4] +'. ' + array[0], array[3]+'"');
//Трансформация массива
array = [2, 1, 4, 0, 3].map(function(item) {
    return array[item];
});
console.log(array);

//3. Добавьте свойста 4 новых свойства в объект используя квадратные скобки и точку.
var book = {};
book.name = 'JavaScript';
book['pages'] = '982';
book.part = 'Core JavaScript ';
book['chapter'] = 'Literals';
console.log(book);

//4. Используя метод .slice, добавте в недостающие символы в строку
var sliceString = 'Ytube';
//alert(sliceString.length);
console.log(sliceString.slice(0,1) + 'ou' + sliceString.slice(1));//Youtube

/*
5. Преобразуйте строку x, в максимально удобно читаемый вид
 let frameworks = [2, 'Angular', 'Angular2', 'React/Redux'];
 let x = "google \
 released " + 'new version\
 ' + frameworks[1] + Math.floor(frameworks[0]) + "\
 But real speed is " + `${frameworks[frameworks.length - 1]}`;
 console.log(x)
 */
let frameworks = [2, 'Angular', 'Angular2', 'React/Redux'];
let newFramework = frameworks[2];//frameworks[1] + Math.floor(frameworks[0]) вместо этого frameworks[2]
let fastFramework = frameworks[3];//${frameworks[frameworks.length - 1]} -> ${frameworks[3]} буде короче

let x = "google \ released new version\ " + newFramework + "But real speed is " + fastFramework;
console.log(x);