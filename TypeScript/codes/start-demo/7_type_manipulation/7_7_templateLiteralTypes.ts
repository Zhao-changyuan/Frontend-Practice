
/**
  模板字符串类型
*/

/* type World = "world"
type Greeting = `hello ${World}`

type EmailLocaleIDs = "welcome_email" | "email_heading" 
type FooterLocaleIDs = "footer_title" | "footer_sendoff"

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`

type Lang = "en" | "ja" | "pt"

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}` */

/* type PropEventSource<Type> = {
  on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void)
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
})

person.on("firstNameChanged", () => { })

person.on("firstName", () => {}) */

/* type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 25
})

person.on("firstNameChanged", newValue => {
  console.log(newValue)
})

person.on("ageChanged", newValue => {

}) */

/* type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app"> */

/* type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP"> */

// type LowercaseGreeting = "hello, world"
// type Greeting = Capitalize<LowercaseGreeting>

type UppercaseGreeting = "HELLO WORLD"
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>


