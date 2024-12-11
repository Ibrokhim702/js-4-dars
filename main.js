// // let maxBall = 70;

// // if(maxBall>69){
// //     console.log("Tabriklaymiz Siz o'tdingiz");
    
// // }else{
// //     console.log("Chichvordin");
// // }

// const ball = +prompt("iltimos olgan balingizni kiriting")


// let maxBall = 70;
// if (ball >= 70) {
//     console.log("Tabriklaymiz siz otingiz!");
// }
// else{
//     console.log("uzur,siz o'taolamdiz");
// }


// const murodbot = prompt("Enter your name")
// const num = confirm("Ismingizni kotta harf bilan kiriting")

// if(num == true){
//     alert(murodbot.toUpperCase())
// }else{
//     alert(murodbot.toLocaleLowerCase())
// }
// if(ism.includes("")){
//     alert(`${ism} ismining ichida ${yosh} harfi mavjud`)
// }
// else if(ism == nul){
//     alert("siz ism kiritmadingiz")
// }
// else{
//     alert(`${ism} ismining ichida ${yosh} harfi mavjud emas`)
// // }


// console.log(ism.indexOf("o"));
// console.log(ism.length);
// console.log(ism.toUpperCase);
// console.log(ism.toLowerCase);
// console.log(ism.repeat(6));
// console.log(ism.slice(2));

const ism = prompt("Ismingizni kiriting");
const yosh = prompt("Bironta harf kiriting");

if (ism.toLocaleLowerCase().includes(yosh.toLocaleLowerCase())) {
    alert(`${ism} ismining ichida "${yosh}" harfi mavjud`);
} else {
     alert(`${ism} ismining ichida "${yosh}" harfi mavjud emas`)
}



