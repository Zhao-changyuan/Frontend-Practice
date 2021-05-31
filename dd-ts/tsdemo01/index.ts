


function logProperty(params: any) {
  return function (target: any, attr: any) {
    console.log(1)
    console.log(target)
    console.log(attr)
    target.url = '这是url啊'
  }
}

class HttpClient {
  @logProperty('123')
  public url: any | undefined;

  constructor() {
    console.log(2)
    // this.url = '123'
  }

  getData() {
    console.log(3)
    console.log(this)
    console.log(this.hasOwnProperty('url'))
    console.log(this.__proto__)
  }
}

var http = new HttpClient()
http.getData()
