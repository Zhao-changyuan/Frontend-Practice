
/**
  7.6 映射类型
*/

/* type OnlyBoolsAndStrs = {
  [key: string]: boolean | string;
}

const conforms: OnlyBoolsAndStrs = {
  del: true,
  rodney: '1233'
} */

/* type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
}

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags> */

/* type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
}

type LockedAccount = {
  readonly id: string;
  readonly name: string;
}

type UnlockedAccount = CreateMutable<LockedAccount> */

/* type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
}

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
}

type User = Concrete<MaybeUser>; */

/* type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property] 
}

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person> */

/* type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
}

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle> */

/* type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void
}

type SquareEevent = { kind: "square", x: number, y: number }
type CircleEvent = { kind: "circle", radius: number }

type Config = EventConfig<SquareEevent | CircleEvent> */

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
}

type DBFields = {
  id: { format: "incrementing" },
  name: { type: string; pii: true }
}

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>