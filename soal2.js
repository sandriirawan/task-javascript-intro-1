const mtk = 80
const bahasaIndonesia = 90
const bbahasaInggris = "SASA"
const ipa = 69
const result = (mtk + bahasaIndonesia + bbahasaInggris + ipa) / 4
let cekNum = result ? true : "Tipe Data harus number" ;
    console.log(cekNum)

function ratarata(){
    if (result >= 90){
        console.log(`Rata-rata ${result} Grade A`)
    }
   else if (result >=79 && result <= 89){
    console.log(`Rata-rata ${result} Grade B`)
}
    else if (result >=70 && result <= 79){
        console.log(`Rata-rata ${result} Grade C`)
        
    }
    else if (result >=60 && result <= 69){
        console.log(`Rata-rata ${result} Grade D`)
        
    }
    else if (result <= 59){
        console.log(`Rata-rata ${result} Grade E`)
        
    }
}
ratarata()
