function printTriangle(printSegitiga) {
  if (typeof printSegitiga !== "number") {
    console.log("Data harus angka");
    return;
  }

  for (let i = printSegitiga; i >= 1; i--) {
    let output = " ";
    for (let x = 1; x <= i; x++) {
      output += x + " ";
    }
    console.log(output);
  }
}

const printSegitiga = 5;
printTriangle(printSegitiga);
