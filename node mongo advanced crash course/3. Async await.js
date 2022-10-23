const myPromise = new Promise((resolved, rejected) => {
    const user = "null";
    if (user) {
        setTimeout(() => {
            resolved({ r: 5435345 });
        }, 1000);
    }
    else {
        rejected('something is wrong')
    }
})

const getData = async () => {
    const res = await myPromise;
    console.log(res)

}
getData()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});
  // expected output: "two"
