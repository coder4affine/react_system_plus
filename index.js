// const a = { x: 1, y: 2};

// a = {}

// console.log(a)

// {
// const a = 1;
// }
// console.log(a)
// a = 2;

// let b = 2;

// {
//     console.log(b)
//     let a = 1;
// }

// console.log(a)

// let a = 1;
// a = 2;
// console.log(a)

// var jquery = function() {

// }

// (($) => {
//     var a = 1;
//     console.log($)
// })(jquery);

// console.log(a)

// var a = 1;

// {
//     var a = 2;
// }

// console.log(a)

// var a;

// a = 1;

// a = 2;

// function xyz() {

// }

// function xyz() {

// }

// console.log(a)

// const a = 1;
// const b = 2;

// const c = a || b;
// const d = a && b;

// console.log(c)
// console.log(d)

// const a = 5;

// console.log(typeof a)

// const b = `${a}`;

// console.log(typeof b);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

// const es5 = "<!DOCTYPE html>" +
// "\n<html lang=\"en\">" +
// "\n<head>" +
//     "\n\t<meta charset=\"UTF-8\">" +
//     "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
//     "<title>Document</title>" +
// "</head>" +
// "<body>" +
//     "" +
// "</body>" +
// "</html>";
// console.log(es5);

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(es6);

// const fname = "yagnesh";
// const lname = "modh";

// const fullname = `${fname}'s ${lname}`;

// console.log(fullname)

// const fullname = fname + '\'s ' + lname;

// console.log(fullname)

// function add(a, b){
//     return a + b;
// }

// var add = function(a, b) {
//     return a - b;
// }

// const greet = obj => ({...obj, c: 3});

// console.log(greet({a: 1, b: 2}))

const arr = [1, 2, 3, 4, 5];

// const newArr = [...arr.slice(0,2), ...arr.slice(3)];
// console.log(newArr)

// const newArr1 = arr.filter((x) => x !== 3);
// console.log(newArr1)

// const newArr =  [...arr];

// console.log(newArr)

// arr.push(6);

// console.log(arr)

// // function add(a, b, c, d) {
// //     return a + b + c + d;
// // }

// function add(a, b, c, ...rest) {
//     console.log(rest);
//     // let sum  = 0
//     // for (let i = 0; i < rest.length; i++) {
//     //     const element = rest[i];
//     //     sum += element
//     // }
//     // return sum
//     // return a + b + c + d;
// }

// console.log(add(1,2,3, 4, 5, 6, 'hello'))

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const {a,...rest} = obj;
// console.log(rest)

// const {c } = rest;

// console.log(c)

// console.log(a)
// console.log(rest)

// console.log(obj.a)
// console.log(obj.b)

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// console.log(obj);

// const newObj = {...obj}

// console.log(newObj)

class animal {
  constructor(type = "animal") {
    this.type = type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  get type() {
    return this._type;
  }

  makeSound() {
    setTimeout(() => {
      console.log(this.type);
    }, 0);
  }
}

class cat extends animal {
  constructor(type) {
    super(type);
  }

  makeSound() {
    super.makeSound();
    console.log("Meow...");
  }
}

// const a = new animal();
// console.log(a.type);
// console.log(a.makeSound())

const c = new cat("cat");
console.log(c.type);
console.log(c.makeSound());

// '

// // const arr = [1,2,3,4,5,6];

// // const [,,c] =  arr;

// // console.log(c)

const users = [
  {
    name: "yagnesh",
    gender: "male",
    age: 30
  },
  {
    name: "rohit",
    gender: "male",
    age: 32
  },
  {
    name: "shikhar",
    gender: "female",
    age: 31
  },
  {
    name: "deepika",
    gender: "female",
    age: 28
  },
  {
    name: "radhika",
    gender: "female",
    age: 29
  }
];

const newUser = {
  name: "priyanka",
  gender: "female",
  age: 35
};

const index = users.findIndex(x => x.name === "shikhar");

console.log(index);

const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];

console.log(updatedUsers);
// const newUsers =  [newUser,...users];

// console.log(newUsers)

// const arr = [1,2,3,4,5,6,7, 8];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// };

// const sum1 = arr.reduce((p, c) => p + c,0)

// console.log(sum)
// console.log(sum1)

// // map, reduce, for of, for in

// // const arr = [1,2,3,4,5,6,7,8,9,10];

// // const newArr = arr.map(x => {

// // });

// // console.log(newArr)

const users = [
  {
    name: "yagnesh",
    gender: "male",
    age: 30
  },
  {
    name: "rohit",
    gender: "male",
    age: 32
  },
  {
    name: "shikhar",
    gender: "female",
    age: 31
  },
  {
    name: "deepika",
    gender: "female",
    age: 28
  },
  {
    name: "radhika",
    gender: "female",
    age: 29
  }
];

//   const obj = { a: 1, b:2};
//   console.log(obj['c'])

const groupBy = users.reduce((p, c, index, arr) => {
  console.log(p);
  console.log(c);
  console.log(p[c.gender]);
  p[c.gender] = p[c.gender] || [];
  console.log(p[c.gender]);
  p[c.gender].push(c);
  console.log(p[c.gender]);
  console.log(p);
  return p;
}, {});

//   {
//       [0-9]:[],
//       [20-29]:[]
//       [30-39]: []
//   }

//   console.log(groupBy);

//   {
//       male: [],
//       female: []
//   }

//   const newUsers = users.map(x => {
//       if(x.name === 'shikhar') {
//         return {...x, gender: 'male'};
//       }
//       return x;
//   });

//   console.log(newUsers)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p1");
  }, 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p2");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject p3");
  }, 2000);
});

const wait = async () => {
  try {
    console.time("promose");
    const res = await Promise.race([p1, p2, p3]);
    console.timeEnd("promose");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

wait();

// p1.then(res => {
//     console.log(res)
// }).then(res => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// setTimeout(() => {
//     console.log('timeout');
// }, 10);
// console.log('hello')
// console.log('hello1')
// setTimeout(() => {
//     console.log('timeout1');
// }, 0);
// console.log('hello2')
// console.log('hello3')

// // p1.then((res) => {
// // console.log('res')
// // })
// // // console.log(p1);
// // console.log('hello')
// // console.log('hello1')

// // // const obj = { a: 1, b: 2, c: 3};

// // // const arr = [1,2,3,4,5,6,7,8,9];

// // // for (const [key, value] of Object.entries(obj)) {
// // //     console.log(key)
// // //     console.log(value)
// // // }

// // // for (const key in obj) {
// // //   console.log(key)
// // //   console.log(obj[key])
// // // }

function* xyz() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return "data";
}

const gen = xyz();

for (const iterator of gen) {
  console.log(iterator);
}

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

const a = 1;

const obj = {
  a: a,
  b: 2,
  c: function() {
    return this.a + this.b;
  }
};

const obj1 = {
  a,
  b: 2,
  c() {
    return this.a + this.b;
  }
};

console.log(obj1.a);
console.log(obj.b);
console.log(obj1.c());
