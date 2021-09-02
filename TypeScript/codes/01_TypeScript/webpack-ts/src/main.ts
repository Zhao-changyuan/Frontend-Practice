

void function () {
  interface B {
    id: number;
    name: number;
    age: number;
  }

  type B1 = keyof B;
  const k: B1 = 'id'

  type example = NonNullable<string | number | undefined>
}()