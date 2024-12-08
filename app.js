


























// let namesToCheck = prompt('Enter your name');
// namesToCheck = namesToCheck.toLowerCase();
// let bestNames = ['']
// let mobile = {
//   samsung: {
//     galaxy: {
//       GalaxyS21: {
//         name: "samsung Galaxy S21",
//         make: 2021,
//         price: 35000,
//         storage: 128,
//         battery: 4500,
//         displaySize: 6.7,
//       },
//       GalaxyS21Ultra: {
//         name: "samsung Galaxy S21 Ultra",
//         make: 2022,
//         price: 40000,
//         storage: 256,
//         battery: 5000,
//         displaySize: 6.8,
//       },
//     },
//     Zfolds: {
//       ZFold3: {
//         name: "Samsung ZFold3",
//         make: 2022,
//         price: 35000,
//         storage: 256,
//         battery: 5000,
//         displaySize: 7.5,
//       },
//       ZFold4: {
//         name: "Samsung ZFold4",
//         make: 2023,
//         price: 40000,
//         storage: 512,
//         battery: 5500,
//         displaySize: 7.9,
//       },
//     },
//   },
//   apple: {
//     iPhone: {
//       X: {
//         name: "Apple iPhone X",
//         make: 2018,
//         price: 10000,
//         storage: 64,
//         battery: 3000,
//         displaySize: 6.5,
//       },
//       XS: {
//         name: "Apple iPhone XS",
//         make: 2019,
//         price: 12000,
//         storage: 128,
//         battery: 3000,
//         displaySize: 6.5,
//       },
//       XR: {
//         name: "Apple iPhone XR",
//         make: 2020,
//         price: 14000,
//         storage: 128,
//         battery: 3000,
//         displaySize: 6.5,
//       },
//     },
//     iPad: {
//       Air: {
//         name: "Apple iPad Air",
//         make: 2018,
//         price: 6000,
//         storage: 64,
//         battery: 2800,
//         displaySize: 9.7,
//       },
//       Air2: {
//         name: "Apple iPad Air 2",
//         make: 2019,
//         price: 7000,
//         storage: 128,
//         battery: 3000,
//         displaySize: 10.5,
//       },
//       Pro: {
//         name: "Apple iPad Pro",
//         make: 2020,
//         price: 9000,
//         storage: 128,
//         battery: 3000,
//         displaySize: 12.9,
//       },
//       Pro2: {
//         name: "Apple iPad Pro 2",
//         make: 2021,
//         price: 10000,
//         storage: 256,
//         battery: 3000,
//         displaySize: 12.9,
//         },
//   },
// }
// };
// let company = 'samsung';
// for(var key in mobile) {
//   for(var variants in mobile[key]) {
//     for(var model in mobile[key][variants]) {
//       console.log(mobile[key][variants][model]);
      
//     }
    
//   }
// } 
// console.log();


// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     sum += num
//   }
//   return sum
// }
// console.log(sumArray([1,2,3,4]));

// function calculateMean(arr) {
//   const sum = sumArray(arr);
//   return (sum / arr.length).toFixed(1)
// }
// console.log(calculateMean([1,2,3,4,5]));

// function sortArray(arr) {
//   return arr.sort((a,b) => a - b)
// }
// console.log(sortArray([5,1,4,2,3]));

// function calculateMedian(arr) {
//   arr = sortArray(arr);
//   const n = arr.length
//   if ( n % 2 === 0 ) {
//     return ( (arr[n / 2 - 1] + arr[n / 2]) / 2 ).toFixed(1);
//   } else {
//     return arr[Math.floor(n / 2)].toFixed(1);
//   }
// }

// function calculateMedian(arr) {
//   arr.sort((a,b) => a - b);
//   const n = arr.length;
//   if (n % 2 !== 0) {
//     return arr[Math.floor(n / 2)]
//   } else {
//     const mid1 = arr[n / 2 - 1];
//     const mid2 = arr[n / 2];
//     return (mid1 + mid2) / 2;
//   }
// }
// console.log("Median "+calculateMedian([5,4,8,9,2,1,4]));

// function calculateMode(arr) {
//   const freq = {};
//   for (const num of arr) {
//     if (freq[num]) {
//       freq[num]++
//     } else {
//       freq[num] = 1
//     }
//   }

//   let maxCount = 0;
//   let mode = Infinity;

//   for (let num in freq) {
//     const count = freq[num];
//     if (count > maxCount || (count === maxCount && num < mode)) {
//       maxCount = count
//       mode = Number(num)
//     }
//   }
//   return mode;
// }

// function vowelsAndConsonants(s) {
//   for (let i = 0; i < s.length; i++) {
//       if ("aeiou".includes(s[i])) console.log(s[i]);
//   }

//   for (let i = 0; i < s.length; i++) {
//       if (!"aeiou".includes(s[i])) console.log(s[i]);
//   }
// }
// vowelsAndConsonants("javascripttool")

// const getData = (url, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200 ) {
//       const data = request.responseText ;
//       callback(undefined, data);

//     } else if (request.readyState === 4 && request.status !== 200) {
//       callback('could not fetch data', undefined)
//     }

//   })
//   request.open('GET', url);
//   request.send()

// }
// getData('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
//   if (err) {
//     console.log(err);

//   }
//   if (data) {
//     console.log(data);

//   }
// })

// ------------------------------------------------------------------
// const getData = (url, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//     const data = request.responseText;
//     callback(undefined, data);

//     } else if (request.readyState === 4 && request.status !== 200) {
//       callback('could not fetch the data', undefined)
//     }
//   }) ;

//   request.open("GET",url );
//   request.send()

// }
// getData('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
//   if (err) {
//     console.log(err);

//   }
//   if (data) {
//     console.log(data);

//   }
//   getData('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
//     if (err) {
//       console.log(err);

//     }
//     if (data) {
//       console.log(data);

//     }

//   })
// })

// -----------------------------------------------------------------
// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);

//   } else if (request.readyState === 4 && request.status !== 200) {
//     console.log('could not fetch the data');

//   }
// }) ;

// request.open("GET",'https://jsonplaceholder.typicode.com/todos/' );
// request.send()

// -----------------------------------------------
// let products = [
//     {
//       id: 101,
//       title: "Sony LED 40 inch",
//       variations: [
//         { id: 1, color: "black", price: 50000, quantity: 5 },
//         { id: 2, color: "red", price: 52000, quantity: 3 },
//         { id: 3, color: "silver", price: 55000, quantity: 8 },
//         { id: 4, color: "white", price: 54000, quantity: 4 },
//         { id: 5, color: "blue", price: 51000, quantity: 2 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 4.5,
//           title: "Very Good Product",
//           comments: "Zubair: It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 5.0,
//           title: "Excellent Product",
//           comments: "Ali: I absolutely love it!",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 102,
//       title: "Mobile",
//       variations: [
//         { id: 1, color: "black", price: 50000, quantity: 5 },
//         { id: 2, color: "orange", price: 48000, quantity: 6 },
//         { id: 3, color: "green", price: 55000, quantity: 8 },
//         { id: 4, color: "purple", price: 53000, quantity: 3 },
//         { id: 5, color: "gold", price: 59000, quantity: 1 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 4.5,
//           title: "Very Good Product",
//           comments: "Zubair: It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 5.0,
//           title: "Best Mobile",
//           comments: "Ali: Perfect for my needs!",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 103,
//       title: "Bike",
//       variations: [
//         { id: 1, color: "black", price: 55000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//         { id: 3, color: "blue", price: 58000, quantity: 4 },
//         { id: 4, color: "green", price: 57000, quantity: 2 },
//         { id: 5, color: "yellow", price: 59000, quantity: 3 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 3.0,
//           title: "Decent Product",
//           comments: "Zubair: It's okay, but could be better.",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 4.5,
//           title: "Great Bike",
//           comments: "Ali: Fantastic experience riding it!",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 104,
//       title: "Laptop",
//       variations: [
//         { id: 1, color: "black", price: 70000, quantity: 5 },
//         { id: 2, color: "silver", price: 75000, quantity: 2 },
//         { id: 3, color: "white", price: 72000, quantity: 3 },
//         { id: 4, color: "blue", price: 68000, quantity: 4 },
//         { id: 5, color: "red", price: 73000, quantity: 1 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Sara",
//           rating: 4.5,
//           title: "Great Laptop",
//           comments: "Sara: Works perfectly for my needs.",
//           date: "08-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Owais",
//           rating: 4.0,
//           title: "Good Performance",
//           comments: "Owais: Solid performance and battery life.",
//           date: "07-02-2021",
//           status: true,
//         },
//         {
//           id: 3,
//           user: "Fatima",
//           rating: 5.0,
//           title: "Best Purchase",
//           comments: "Fatima: Highly recommend!",
//           date: "06-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 105,
//       title: "Smartwatch",
//       variations: [
//         { id: 1, color: "black", price: 15000, quantity: 10 },
//         { id: 2, color: "silver", price: 16000, quantity: 5 },
//         { id: 3, color: "gold", price: 18000, quantity: 2 },
//         { id: 4, color: "rose", price: 17000, quantity: 3 },
//         { id: 5, color: "blue", price: 15500, quantity: 8 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Muneeb",
//           rating: 4.0,
//           title: "Good Smartwatch",
//           comments: "Muneeb: Great features for the price.",
//           date: "09-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Nadia",
//           rating: 4.5,
//           title: "Very Useful",
//           comments: "Nadia: Love tracking my workouts!",
//           date: "08-02-2021",
//           status: true,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 4.8,
//           title: "Awesome",
//           comments: "Ali: Best smartwatch I've owned!",
//           date: "07-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 106,
//       title: "Headphones",
//       variations: [
//         { id: 1, color: "black", price: 3000, quantity: 15 },
//         { id: 2, color: "white", price: 3500, quantity: 10 },
//         { id: 3, color: "red", price: 3200, quantity: 5 },
//         { id: 4, color: "blue", price: 3400, quantity: 8 },
//         { id: 5, color: "green", price: 3100, quantity: 12 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Samira",
//           rating: 4.2,
//           title: "Great Sound",
//           comments: "Samira: The sound quality is impressive.",
//           date: "10-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Tariq",
//           rating: 4.0,
//           title: "Good for the Price",
//           comments: "Tariq: Comfortable and decent sound.",
//           date: "09-02-2021",
//           status: true,
//         },
//         {
//           id: 3,
//           user: "Zara",
//           rating: 4.7,
//           title: "Love Them!",
//           comments: "Zara: Best headphones for my workouts.",
//           date: "08-02-2021",
//           status: true,
//         },
//       ],
//     },
//   ];
//  Exercise 1
//   Get all product titles and display them in array format.
//   Example: ['Sony LED 40 inch', 'Mobile', 'Bike']
// let getTitles = products.map(p => p.title);
// console.log(getTitles);

// Exercise 2
// Get all the unique colors from the product variations.
// Example: ['black', 'red', 'silver']
// let uniqueColor = products.map(p => p.variations.map(c => c.color));
// let allColors = uniqueColor.reduce((acc,curr) => acc.concat(curr));
// let all = [ ...new Set(allColors)   ]
// console.log(all);

// Exercise 3
// Get the total quantity of all products.
// Example: 23
//   Method---------------- 1
// let getTotalQuantity = products.flatMap(p => p.variations).reduce((acc, curr) => acc + curr.quantity , 0)
// console.log(getTotalQuantity);

//   Method---------------- 4
//   let getTotalQuantity = products.map(p => p.variations).reduce((acc, curr) => acc.concat(curr), []).reduce((acc, curr) => acc + curr.quantity , 0)
//   console.log(getTotalQuantity);

//   Method---------------- 2
//   let getTotalQuantity = products.map(p => p.variations.map(q => q.quantity).reduce((acc, val) => acc + val ,0)).reduce((acc, val) => acc + val ,0)
//   console.log(getTotalQuantity);

//   Method---------------- 3
//   let getTotalQuantity= products.reduce((acc, curr) => {
//     return acc + curr.variations.reduce((acc, curr) => acc + curr.quantity, 0);
//   }, 0)
// console.log(getTotalQuantity);

// Exercise 4
// Get all product reviews where the status is true.
// Example: [{ review1 }, { review3 }, ...]

// let getTrueReviews = products.flatMap(p => p.reviews.filter(r => r.status));
// console.log(getTrueReviews);

// Exercise 5
// Find the most expensive variation across all products.
// Example: { color: 'silver', price: 55000 }

// let prices = products.map(p => p.variations.map(p => p.price)).reduce((acc, curr) => acc.concat(curr), [])
//   // let expensive = prices.reduce((acc, curr) => acc > curr ? acc : curr, 0) // proper method
//   let expensive = Math.max(...prices) // Math.max method
// console.log(expensive);

// Exercise 6
// Get the average rating of all reviews.
// Example: 4.2

// const averageRating = products
// .map(p => p.reviews.map(r => r.rating))
// .reduce((acc, curr) => acc.concat(curr), []);

// const flattern = averageRating.reduce((acc, curr) => acc + curr, 0) / averageRating.length

// console.log(flattern);

// Exercise 7
// find a Product by id if not found return empty object
// Example: {...}

//   const userInput = parseInt(prompt("Enter the product ID to search"));

//   let produc = products.find(p => p.id === userInput) || "This Item not in your list"
//   console.log(produc);

// const products1 = [
//   { variations: [{ price: 50 }, { price: 30 }] },
//   { variations: [{ price: 100 }, { price: 20 }] }
// ];

// let allPrices = products1.map(p => p.variations.map(p => p.price)).reduce((acc, curr) => acc.concat(curr), [])
// console.log(allPrices);

//   let havePrice = products1.map(p => p.variations.map(p => p.price)).reduce((acc, curr) => acc.concat(curr), [])

//   console.log(Math.max(...havePrice));

// Expected output: [50, 30, 100, 20]

// ------------------------------------------------
// const products2 = [
//   { id: 1, price: 150 },
//   { id: 2, price: 80 },
//   { id: 3, price: 120 }
// ];

//   let find = products2.some(p => p.id)
//   console.log(find);

//   let morePrice = products2.filter(p => p.price > 100);
//   console.log(morePrice);

//   let findId = products2.find(p => p.id = 3);
//   console.log(findId);

// Expected output: [{ id: 1, price: 150 }, { id: 3, price: 120 }]

// ----------------------------------------------
//   const products5 = [
//     { name: "Laptop", reviews: [{ rating: 5 }, { rating: 4 }] },
//     { name: "Phone", reviews: [{ rating: 3 }] }
//   ];
//   const containRating = products5.map(p => p.reviews.map(r => r.rating)).reduce((acc, curr) => acc.concat(curr), [])
//   const averRat = containRating.reduce((acc, curr) => acc + curr, 0) / containRating.length

//   console.log(averRat);

//   const $products = [
//     { name: "Laptop", rating: 5 },
//     { name: "Phone", rating: 3 },
//     { name: "Tablet", rating: 4 }
//   ];
//   let highRating = $products.filter(p => p.rating > 4)
//   console.log(highRating);

// Expected output: [{ name: "Laptop", rating: 5 }]

// -----------------------------------------------------
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
//     { name: "Charlie", age: 30 }
// ];
// let above30 = people.filter(p => p.age >= 30)
// console.log(above30);

// const products = [
//     { name: "Shoes", price: 30 },
//     { name: "Bag", price: 80 },
//     { name: "Watch", price: 60 }
// ];
// let above50 = products.filter(p => p.price > 50);
// console.log(above50);

// const tasks = [
//     { task: "Do laundry", completed: true },
//     { task: "Do work", completed: false },
//     { task: "Wash dishes", completed: false },
//     { task: "Study JavaScript", completed: false }
// ];
// let checkTask = tasks.filter(t => !t.completed);
// console.log(checkTask);

// const students = [
//     { name: "Alice", score: 80 },
//     { name: "Bob", score: 70 },
//     { name: "Charlie", score: 90 }
// ];
// let above_70_score = students.filter(s => s.score > 70);
// console.log(above_70_score);

// const _products = [
//     { name: "Shoes", inStock: true },
//     { name: "Bag", inStock: false },
//     { name: "Watch", inStock: true }
// ];
// let stock = _products.filter(p => p.inStock)
// console.log(stock);

// ------------------------------------------
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// let names = people.map(m => m.name)
// console.log(names);

// const products = [
//     { name: "Shoes", price: 100 },
//     { name: "Bag", price: 80 },
//     { name: "Watch", price: 50 }
// ];
// let pricesIncrese = products.map(p => {
//     return {
//         name: p.name,
//         price: p.price *1.1
//     }
// })
// console.log(pricesIncrese);

// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Jack" }
// ];
// let findId = users.map(u => u.id);
// console.log(findId);

// const items = [
//     { name: "Phone", price: 200 },
//     { name: "Laptop", price: 1000 },
//     { name: "Tablet", price: 300 }
// ];
// let discountPrice = items.map(i => {
//     return {
//         name: i.name,
//         price: i.price,
//         discount_price: i.price * 0.9
//     }
// })
// console.log(discountPrice);

// const cars = [
//     { make: "Toyota", model: "Camry" },
//     { make: "Honda", model: "Accord" },
//     { make: "Ford", model: "Fusion" }
// ];
// let makeAndModel = cars.map(c => {
//     return `${c.make} ${c.model}`
// })
// console.log(makeAndModel);

// -------------------------------------------
// let numbers = [1,5,2,3,8,4];
// let even = numbers.find(n => n % 2 === 0)
// console.log(even);

// let names = ["bilal","Asad", "Ali", "Ahmed"];
// let first = names.find(n => n.includes('A'));
// console.log(first);

// const products = [
//     { name: "Shoes", price: 80 },
//     { name: "Bag", price: 120 },
//     { name: "Watch", price: 90 }
// ];
// let findMore = products.find(p => p.price > 100)
// console.log(findMore);

// const num = [1,2,6,3,7];
// let odd = num.find(n => n % 2 === 1)
// console.log(odd);

// const words = ["apple", "banana", "pear", "peach", "melon"];
// let first5 = words.find(w => w.length === 6)
// console.log(first5);

// ------------------------------------
// let = colors = ['All','Red', 'Green', 'Yellow','Brown'];
// let c = colors.sort().reverse()
// console.log(c);

// --------------------------------------
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 },
//     { name: "Saad", age: 10 }
// ];

// let p = people.sort((a,b) => a.age - b.age)
// console.log(p);

// ---------------------------------------
// const num = [5,2,8,3,1];
// let order = num.sort()
// console.log(order);

// const names = ['Ali', 'Saad', 'Hamza', 'Ahmed', 'Cow', 'Alina']
// let orderName = names.sort()
// console.log(orderName);

// const numbers = [14,18,33,69,31,52];
// let dec = numbers.sort((a,b) => b - a);
// console.log(numbers);

// --------------------------------------------------
// const words = ['apple', 'banana', 'orange','apple', 'banana', 'orange', 'apple', 'orange' ]
// let countWords = words.reduce((acc, word) => {
//      acc[word] = (acc[word] || 0) + 1
//     return acc

// } ,{})

// console.log(countWords);

// -------------------------------------------------
// let arr = [[1, 2], [3, 4], [5, 6]];
// let _arr = arr.reduce((acc, curr) => acc.concat(curr), []);

// console.log(_arr);

// ---------------------------------------------
// let colors = ['red','green', 'red','blue','red','blue', 'red'];
// let count = colors.reduce((acc, color) => {
//     return color === 'red' ? acc + 1 : acc;
// },0)

// console.log(count);

// ------------------------------------
// let numbers = [2,4,6,10];
// let product = numbers.reduce((acc, curr) => acc * curr ,1)
// console.log(product);

// -------------------------------------------------
// let num = [2,5,9,16,10];
// let sum = num.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);

// ---------------------------------------
// const students = [
//     { name: "Ali Ahmed", grade: 45 },
//     { name: "Sara Khan", grade: 85 },
//     { name: "Asad Malik", grade: 75 },
//     { name: "Saad Shoaib", grade: 100 },
//     { name: "Maryam Shaikh", grade: 40 }
// ];
// let above_50_Name = students
//     .filter(s => s.grade > 50)
//     .map(s => s.name.split(' ')[0])
// console.log(above_50_Name);

// ----------------------------------------
// let prices = [300,1000,1500,500,9000];
// let above500$ = prices.filter(m => m > 500).map(m => `$${m}`);
// console.log(above500$);

// ---------------------------------------------
// let numbers = [-1,5,-6,4,7];
// let positive = numbers.filter(n => n > 0).map(n => n.toString())
// console.log(positive);

// -------------------------------------------------------------
// let names = ['Saad', 'Ali', 'Hamza', 'Asad', 'san','shoaib' ];
// let capitlize = names.filter(b => b.length > 3).map(b => b.toUpperCase());
// console.log(capitlize);

// ------------------------------------------
// let numbers = [1,4,6,8,9,10];
// let doubleEvens =
// numbers.filter(n => n % 2 === 0).map(n => n * 2)
// console.log(doubleEvens);

// ----------------------------------------------
// let fullName = ['Muhammad Saad', 'Muhammad Hamza', 'Ashraf Ali', 'Imran Ashraf']
// let short = fullName.map(_ => {
//     const [firstName, lastName] = _.split(" ");
//     return `${firstName[0]}.${lastName[0]}.`
// })
// console.log(short);

// --------------------------------------------
// let num = [10,20,30];
// let toStr = num.map(a => a.toString())
// console.log(toStr);

// --------------------------------------------
// let names = ['Ali','sara','saad'];
// let greet = names.map(m => "Hello " + m)
// console.log(greet);

// ---------------------------------------------
// let temp = [0,10,20,30];
// let celc = temp.map(m => m * 9/5 + 32);
// console.log(celc);

// --------------------------------------
// let num = [12,13,35,89];

// console.log(num);

// let double = num.map(m => m * 2);
// console.log(double);
