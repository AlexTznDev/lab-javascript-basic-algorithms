// Iteration 1: Names and Input
let hacker1 = "alex";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "guilermo";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let nameDriverUppercase = hacker1.toUpperCase();
console.log(nameDriverUppercase);

let hacker1SpaceLetter = "";

for (let i = 0; i < nameDriverUppercase.length; i++) {
  hacker1SpaceLetter += nameDriverUppercase[i];
  hacker1SpaceLetter += " ";
}
console.log(hacker1SpaceLetter);

let hacker2Namereverse = "";

for (let i = hacker2.length ; i > 0; i--) {

    hacker2Namereverse += hacker2[i-1]
  
}
console.log(hacker2Namereverse);

if(hacker1[0] < hacker2[0]){
console.log("The driver's name goes first.")
}else if(hacker1[0] > hacker2[0]){
console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}

// bonus 1

let longText = "Lorem ipsum and dolor sit amet, and consectetur adipiscing elit. Curabitur posuere nunc elit, accumsan tristique nisl sagittis sit amet. Vestibulum arcu sem, sollicitudin id est gravida, egestas consectetur mauris. Nunc aliquet leo ac blandit vehicula. Cras mi turpis, cursus a velit sit amet, commodo accumsan arcu. Sed id nisi id erat tincidunt mattis. Etiam quam felis, tempus eget tincidunt non, semper tempor arcu. Maecenas aliquam condimentum leo tincidunt malesuada. Nunc vehicula magna nulla, eu faucibus est viverra in. In placerat arcu sed enim consectetur aliquet quis vitae ex. Suspendisse id mauris quam. Mauris dictum quis erat vitae rutrum. Pellentesque iaculis blandit dapibus. "
const worldSeparate = longText.split(' ')
console.log(worldSeparate.length)

let numberWorldAnd = 0
for(i=0; worldSeparate.length > i; i++){
    if(worldSeparate[i] === 'and'){
        numberWorldAnd ++
    }
    
}

console.log(numberWorldAnd)

// bonus 2

let phraseToCheck = "amor roma taco cat put it up step on no pets pour"
const worldSeparateBonus2 = phraseToCheck.split(' ')
let reverseLetter = ""
let palindromeCount = 0
for(i = phraseToCheck.length; i > 0 ; i--){
    if(phraseToCheck[i-1] !== ' '){
        reverseLetter += phraseToCheck[i-1]
    }  
}

for(i=0 ; worldSeparateBonus2.length > i; i++){

    if(reverseLetter.includes(worldSeparateBonus2[i])){
        console.log(worldSeparateBonus2[i])
        palindromeCount ++ ;

    } 
    
}
let palindromeCountFinal = palindromeCount/2
console.log(palindromeCountFinal)





