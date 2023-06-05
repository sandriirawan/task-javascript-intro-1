const printSegitiga = 5
if(typeof printSegitiga !== "number"){
    console.log("data harus angka");
}
for(let i = printSegitiga; i >= 1; i--){
    let output = " " ;
    for (let x = 1; x <= i; x++){
        output += x + " ";
    }
    console.log(output);
}