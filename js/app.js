'use strict';

alert("Good Morning!");


let UserName = prompt("what is your name ?");
alert("Hello" + " " + UserName);
alert("This is a Yes or No questions answer with either: yes/no or y/n");
let score=0;
let MyAgeRang = prompt("Do you think I am older than 20 years old ?");
if (MyAgeRang.toLowerCase() === "yes" || MyAgeRang.toLowerCase() === "y") {
    // console.log("that is correct");
   

    MyAgeRang = alert("that is correct");
    score=score+1;
}
else if (MyAgeRang.toLowerCase() === "no" || MyAgeRang.toLowerCase() === "n") {
    // console.log("Sorry, that is incorrect");
    MyAgeRang = alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    MyAgeRang = alert("please answer with either yes/no or y/n");
}



let MyCont = prompt("Do you think I live in jordan ?");
if (MyCont.toLowerCase() === "yes" || MyCont.toLowerCase() === "y") {
    // console.log("that is correct");
    alert("that is correct");
    score=score+1;

}
else if (MyCont.toLowerCase() === "no" || MyCont.toLowerCase() === "n") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    alert("please answer with either yes/no or y/n");
}



let MyStudy = prompt("Do you think my field of study is about buisness ?  ");

if (MyStudy.toLowerCase() === "no" || MyStudy.toLowerCase() === "n") {
    // console.log("that is correct")
    alert("that is correct");
    score=score+1;

}
else if (MyStudy.toLowerCase() === "yes" || MyStudy.toLowerCase() === "y") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n")
    alert("please answer with either yes/no or y/n");
}



let MyFavMovie = prompt("Do you think my favourite movie is Batman ?");
MyFavMovie = MyFavMovie.toLowerCase();
if (MyFavMovie === "no" || MyFavMovie === "n") {
    // console.log("that is correct");
    alert("that is correct");
    score=score+1;

}
else if (MyFavMovie === "yes" || MyFavMovie === "y") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    alert("please answer with either yes/no or y/n");
}




let MyHoppy = prompt("Do you think my favourite hoppy is studying ?");
if (MyHoppy.toLowerCase() === "no" || MyHoppy.toLowerCase() === "n") {
    // console.log("that is correct");
    alert("that is correct");
    score=score+1;

}
else if (MyHoppy.toLowerCase() === "yes" || MyHoppy.toLowerCase() === "y") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    alert("please answer with either yes/no or y/n");
}
let myRealExp = 5;
let i=0;
let decNum=4;
for (i = 0; i < 4; i++) {
    let MyExperience = prompt(`how many years of experience do you think I have? note: you only have ${decNum--} attempts!`);
    Number(MyExperience);
    if (MyExperience < myRealExp) {

        alert("That is too low, please try again.");

    }
    else if (MyExperience > myRealExp) {
        alert("That is too high, please try again.");

    }

    else {
        alert(`That is correct ! `);
        score=score+1;
        break;
    }

}
if (i===4) {
    alert(`Sorry, you are out of attempts! the correct answer is ${myRealExp}`);
}




let myTopAnime = ['naruto', 'code geass', 'monster']

let guessAnime = prompt("What do you think is my favourite anime ? (note:you have only 6 attempts)");
// myTopAnime=myTopAnime.toLowerCase();
guessAnime = guessAnime.toLowerCase();
let flag = 1;
for (let a = 0; a < 6; a++) {
    for (let j = 0; j < myTopAnime.length; j++) {
        if (myTopAnime[j] !== guessAnime) {
            flag = 0;
            console.log(myTopAnime);



        }
        else if (myTopAnime[j] === guessAnime) {
            flag = 1;
            break;

        }


    }

    if (flag === 1) {
        alert("that is a correct answer! ");
        score=score+1;
        break;
    }
    else if (flag === 0) {
        guessAnime = prompt("that is an incorrect answer! please try again!");




    }

}

if (flag === 0) {
    alert("Sorry,you are out of attempts. please try again later.");
}
alert(`these are the right answers:  ${myTopAnime} `);

alert(`This is your final score ${score}.`);

alert("And thank you for cooperating with us Mr. " + UserName + " and have a good day !");





