for (let i = 0; i <= 10; i++) {
    // console.log(`values of i: ${i}`);

}

for (let i = 1; i <= 10; i++) {
    // console.log(`multiplication of ${i}`);

    for (let j = 1; j <= 10; j++) {
        //    console.table(`${i} * ${j} = ${i*j}`);

    }

}

const arr = ["superman", "flash", "batman"]
// console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    // console.log(element);

}

// break & continue in  loop

// Break
// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log(`detected value 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);

// }
// Continue
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`detected value 5`);
        continue
    }
    console.log(`value of i is ${i}`);

}