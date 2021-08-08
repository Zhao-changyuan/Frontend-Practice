

void function () {
  type objType = {
    name: string,
    age?: number | undefined,
    [propName: string]: any,
  }

  let obj: objType = {
    name: '悟空',
    age: 33,
    password: '1234qwer'
  }

  // obj.name = 33
  let el1 = document.getElementById('aaa')
  el1.addEventListener('click', (ev) => {
    console.log(ev)
  })
}()