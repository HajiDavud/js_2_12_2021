//Task1
function combine(lst1,lst2){
    let lst = [lst1,lst2];

    let all = [];

    lst.forEach(element => {
       element.forEach(current => {
           all.push(current);
       }); 
    });
    return all;
}

let lst_1 = [1,2,3,4];
let lst_2 = [5,6,7,8,9];

let all_lst = combine(lst_1,lst_2);

console.log(all_lst);

//Task2

function months(index){
    switch(index) {
        case 1:
          alert("Yanvar");
          break;
        case 2:
          alert("Fevral");
          break;
        
        case 3:
            alert("Mart");
            break;
        case 4:
            alert("Aprel");
            break;
        case 5:
            alert("May");
            break;
        case 6:
            alert("Iyun");
            break;
        case 7:
            alert("Iyul");
            break;
            
        case 8:
            alert("Avqust");
            break;
        case 9:
            alert("Sentiyabr");
            break;
        case 10:
            alert("Oktyabr");
            break;
        case 11:
            alert("Noyabr");
            break;
            
        case 12:
            alert("Dekabr");
            break;

        default:
          alert("Bele ay yoxdu")
    }
      
}

months(Number(prompt(": ")));


//Task3

function check(lst,number){
    if (number in lst) {
        console.log(true);
    } else {
        console.log(false);
    }
}

check([1,2,3,4],2);
check([1,2,3,4],5);


//Task4

function checkFactors(lst,nbr){
    let c = 0;
    lst.forEach(element => {
        if (nbr%element==0) {
            
        }else{
            c++;
            return false;
        }
        
    });
    if (c>0) {
        return false
    }
    return true;

}


let a = checkFactors([1,2,4,6],24);
console.log(a);


let b = checkFactors([1,2,4,15,6],24);
console.log(b);


//Task5

function getSequence(number1,number2){
    let lst = [];
    for (let index = number1; index <= number2; index++) {
        lst.push(index);
    }
    return lst;
}

let newLst = getSequence(1,9);
console.log(newLst);


//Task6

var arr = [32,25,85,89,45,76,7,41,2,12];
console.log(arr);
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
arr.sort(compareNumeric);
console.log(arr[arr.length-1]);
arr.shift();
console.log(arr);
arr.push(15);
console.log(arr);
let newArr2 = arr.filter(item => item > 43);
console.log(newArr2)
arr.splice(3,0,45)




for (let index = 3; index < arr.length; index++) {
    console.log(arr[index])
    
}

arr.forEach(element => {
   console.log(element) 
});




