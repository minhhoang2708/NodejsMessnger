let sum = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof a != 'number') return reject('Gia tri truyen vao phai la so');
    resolve(a + b);
  }, 1000);
});

sum(1, 2)
  .then((total) => sum(total, 10))
  .then((total2) => {
    console.log(total2)
  })


let getTotal = async () => {
  try {
    let total01 = await sum(10, 10);
    let total02 = await sum(total01, 10);
    console.log(total02);
  } catch (error) {
    console.log(error);
  }
}

getTotal();