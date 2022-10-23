//pending

// resolved

// rejected

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

const userIds = [1, 2, 3, 4, 5];
let userData = []

for (let i = 0; i < userIds.length; i++) {
    // myPromise.then(user => {
    //     userData.push(user)
    // })
    userData.push(myPromise)

}
Promise.all((userData)).then(res=>{
    console.log(res)
})

myPromise
    .then(r => {
        console.log(r)
    })
    .catch(r => {
        console.log(r)
    })