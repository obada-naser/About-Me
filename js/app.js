'use strict';

alert("Good Morning");

let UserName=prompt("what is your name ?");
alert("Hello"+" "+ UserName);
alert("This is a Yes or No questions answer with either: yes/no or y/n");

let MyAgeRang=prompt("Do you think I am older than 20 years old ?");
if (MyAgeRang.toLowerCase()==="yes" || MyAgeRang.toLowerCase()==="y"){
    // console.log("that is correct");

    MyAgeRang=alert("that is correct");
}
else if (MyAgeRang.toLowerCase()==="no" || MyAgeRang.toLowerCase()==="n") {
    // console.log("Sorry, that is incorrect");
    MyAgeRang=alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    MyAgeRang=alert("please answer with either yes/no or y/n");
}



let MyCont=prompt("Do you think I live in jordan ?");
if (MyCont.toLowerCase()==="yes" || MyCont.toLowerCase()==="y"){
    // console.log("that is correct");
   alert("that is correct");

}
else if (MyCont.toLowerCase()==="no" || MyCont.toLowerCase()==="n") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    alert("please answer with either yes/no or y/n");
}



let MyStudy=prompt("Do you think my field of study is about buisness ?  ");

if (MyStudy.toLowerCase()==="no" || MyStudy.toLowerCase()==="n"){
    // console.log("that is correct")
    alert("that is correct");

}
else if (MyStudy.toLowerCase()==="yes" || MyStudy.toLowerCase()==="y") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n")
    alert("please answer with either yes/no or y/n");
}



let MyExperience=prompt("Do you think my experience is over 5 years ?");
if (MyExperience.toLowerCase()==="no" || MyExperience.toLowerCase()==="n"){
    // console.log("that is correct");
    alert("that is correct");

}
else if (MyExperience.toLowerCase()==="yes" || MyExperience.toLowerCase()==="y") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    alert("please answer with either yes/no or y/n");
}




let MyHoppy=prompt("Do you think my favourite hoppy is studying ?");
if (MyHoppy.toLowerCase()==="no" || MyHoppy.toLowerCase()==="n"){
    // console.log("that is correct");
    alert("that is correct");

}
else if (MyHoppy.toLowerCase()==="yes" || MyHoppy.toLowerCase()==="y") {
    // console.log("Sorry, that is incorrect");
    alert("Sorry, that is incorrect");
}
else {
    // console.log("please answer with either yes/no or y/n");
    alert("please answer with either yes/no or y/n");
}

alert("Thank you for cooperating with us Mr. "+UserName+" and have a good day !");