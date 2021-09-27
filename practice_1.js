// Добавить метод - /sum. Задача метода - принимает на вход два числа(a,b)
// и в ответе возвращает их сумму.


function sum(a,b){
    // alert(a + b);
    console.log(a + b);
    return a + b
}

sum(7, 3);


// Добавить метод - /reverseCase. Задача метода - принимает на вход строку(Произвольную), 
// всем символам меняет регистр и возвращает ответ. 
// Пример: MyTestString - mYtESTsTRING


var isLetter = function (character) {
    if( (character.charCodeAt() >= 65 && character.charCodeAt() <= 90) || (character.charCodeAt() >= 97 && character.charCodeAt() <= 122) ) {
      return true;
    }
    else{
      return false;
    }
  }
function reverseCase(){
    // string_ = prompt("Enter the string");
    string_ = "MyTestString"
    arr = string_.split('');
    arr.forEach((element, i) => {
        if(isLetter(element)){ 
            if(element === element.toUpperCase()){
                arr[i] = element.toLowerCase();
            }
            else{
                arr[i] = element.toUpperCase();
            }
        }
    });
    string_ = arr.join('');
    console.log(string_);
    // document.write(string_);
    // alert(string_);
}

reverseCase();


// Добавить метод - /reverseArray. 
// Задача метода - принимает массив(ЛЮБОЙ) и в ответе возвращает его же, 
// но в обратном порядке.
function reverseArray(arr){
    this.old_array = arr;
    this.new_array = arr.reverse();
    console.log(this.new_array);
    // alert(this.new_array);
}

reverseArray([1, 2, 3, 4]);
