for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <=5; col++) {
        line += "💀";
    }

    console.log(line);
}

for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += "☕";
    }

    console.log(line);
        
}

for (let num = 0; num <= 2; num++) {

  for (let num2 = 0; num2 <= 2; num2++) {

    console.log(`(${num}, ${num2})`);
  }

}

for (let num1 = 1; num <= 10; num++) {

    for (let num2 = 1; num2 <= 10; num2++) {
        
        if (num1 * num2 === 24) {
            console.log(`${num1} * ${num2} = 24`);
        }
    }
}