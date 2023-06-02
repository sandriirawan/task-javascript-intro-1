// const biodata = {
//     name: "sandri irawan",
//     age: 21,
//     hobbies:["Traveling", "Musik", "game"],
//     isMaried: false,
//     schoolList: [
//         {
//             name: "SD INDUSTRI",
//             yearIn: 2007,
//             tahunOut: 2012,
//             major:null,
//         },
//         { 
//             name: "SMP LPPN",
//             yearIn: 2013,
//             tahunOut: 2016,
//             major:null,
//         },
//         {
//             name: "SMA LPPN",
//             yearIn: 2016,
//             tahunOut: 20119,
//             major: "IPA",
//         },
//     ],
//     skill: [
//         {
//             skillName:"coding",
//             level:"beginer",
//         },
//         {
//             skillName:"game",
//             level:"expert",
//         }
//     ],
//     interestinCoding: true,

// }

// console.log(biodata);


// ---------------------------------------------------------------
// const mtk = 80
// const bahasaIndonesia = 90
// const bahasaInggris = 89
// const ipa = 69
// const result = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

// function rata2(){
//     if(result >= 90){
//         console.log(result + ' grade a') 
//     }else if(result >= 79 && result <= 89){
//         console.log(result +' grade b') 
//     }
//     else if(result >= 70 && result <= 79){
//         console.log(result + ' grade c') 
//     }
//     else if(result >= 60 && result <= 69){
//         console.log(result + ' grade d') 
//     }
//     else if(result <= 59){``
//         console.log(result + ' grade e') 
//     } 
// }
// rata2();

// const printSegitiga = 5

// for(let i = printSegitiga; i >= 1; i--){
//     let output = " " ;
//     for (let x = 1; x <= i; x++){
//         output += x + " ";
//     }
//     console.log(output);
// }

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    
    let newData = {
        ...data,
        name: "sandri irawan",
        email: "sandriirawan01@gmail.com",
        hobby: "game"
      };
      console.log(newData);

      const {address:{street, city}} = data;
      console.log(street);
      console.log(city);
    