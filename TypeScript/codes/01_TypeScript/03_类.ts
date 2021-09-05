
(function () {
  

  interface IPerson {
    firstName: string;
    lastName: string; // 名字
  }

  class Person {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = this.firstName + '——' + this.lastName;
    }
  }

  function showFullName(person: IPerson) {
    return person.firstName + '——' + person.lastName;
  }

  const person = new Person('诸葛', '大力')

  console.log(showFullName(person))
})();




