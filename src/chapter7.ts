type Person = { name: string; age: number };

function func(value: number | string | Date | null | Person) {
  if (typeof value == "number") {
    console.log(value.toFixed(2));
  } else if (typeof value == "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.toISOString());
    //   } else if (value != null) {
    //     console.log(value.name);
    //   } else if (value && "age" in value) {
    //     console.log(`${value.name} is ${value.age} years old`);
  } else if (value !== null && "age" in value) {
    console.log(`${value.name} is ${value.age} years old`);
  }
}
