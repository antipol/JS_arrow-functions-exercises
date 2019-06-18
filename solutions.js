//Arrow Functions Exercises

//1. Multiply
const multiply = (a, b) => a * b;
console.log(multiply(2, 4)); //8


//2. Double The Odds
const randomNums = [3, 5, 67, 12, 34, 4, 9, 30];

const multiplyOdd = numberArr => numberArr.filter(x => x % 2 === 1).map(y => y * 2);
console.log(multiplyOdd(randomNums)); //[6, 10, 134, 18]


//3. Loopyloop
const loopNums = [1, 4, 40, 13, 500];

const subTenArr = numberArr => loopNums.map(x => x - 10);
console.log(subTenArr(loopNums)); //[-9, -6, 30, 3, 490]


//4. Cars
const carObj = {
  model: "Transporter",
  mannufacturer: "VW",
  year: 1995,
  color: "yellow"
}

const carInfo = car => car;
console.log(carInfo(carObj)); //prints the object
//???????????????????????


//5. Filter
const filterNums = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const filterArr = arr => {
  const over70 = arr.filter(x => x > 70)
  return over70;
};
console.log(filterArr(filterNums)); //[234, 74, 76, 92]

//or should we store it outside the function?
const over70Global = filterArr(filterNums)
console.log(over70Global); //[234, 74, 76, 92]

//note:
// console.log(over70); //returns error, this variable is in local scope, inside the filterArr function


//6. Geometrizer
const calcCircumference = radius => `The circumference is ${(2 * Math.PI * radius).toFixed(2)}`;
console.log(calcCircumference(3)); //The circumference is 18.85

const calcArea = radius => `The area is ${(Math.PI * radius ** 2).toFixed(2)}`;
console.log(calcArea(3)); //The area is 28.27


//7. The Inventors
const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];

const bornIn1500s = inventorObj => inventorObj.filter(x => x.year >= 1500 && x.year < 1600);
console.log(bornIn1500s(inventors));
//array with two objects (Galileo Galialei and Johannes Kepler)


const sortInventors = inventorObj => inventorObj.sort((a, b) => a.year - b.year);
console.log(sortInventors(inventors));
//array with the objects sorted after year, oldest inventor first


const inventorNames = inventorObj => inventorObj.map(x => x.first + " " + x.last);

console.log(inventorNames(inventors));
//array with inventors first and last name in strings
