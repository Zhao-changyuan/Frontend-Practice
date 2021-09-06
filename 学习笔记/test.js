


function genPromise(promise1) {
  return new Promise(async (resolve) => {
    promise1.then(res => {
      resolve(res)
    }).catch(err => {
      resolve(err)
    })
  })
}

Promise.myAll = function (...values) {
  return Promise.all(values.map(item => (genPromise(item))))
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('5s')
    resolve('promise1 resolve')
  }, 5000)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3s')
    resolve('promise2 resolve')
  }, 3000)
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('1s')
    reject(new Error('reject error'))
  }, 1000)
})

Promise.myAll(promise1, promise1, promise3).then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
})