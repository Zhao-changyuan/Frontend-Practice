
type IdDisplay = {
  id: string,
  display: string,
};

const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select'
  },
  {
    id: 'bar',
    display: "Bar Select"
  }
]

const fooIndex = list.map(i => i.id).indexOf('bar');
console.log(fooIndex)

console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER })