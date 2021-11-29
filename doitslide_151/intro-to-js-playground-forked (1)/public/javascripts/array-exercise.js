/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  participants.map((person) => {
    const idNumbers = person.idNumber;
    console.log(idNumbers);
    return idNumbers;
  });
  // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  const multiply = numbers.reduce((prevNum, item) => prevNum * item, 1);
  console.log(multiply);
  // TODO: get the results of multiplication of all the numbers using for...of loop
  let finalNum = 1;
  for (num of numbers) {
    // let newNum = num * numbers[numbers.indexOf(num) + 1];
    finalNum = finalNum *= num;
  }
  console.log(finalNum);
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  const positiveNumbers = numbers.filter((num) => num > 0);
  console.log(positiveNumbers);

  // TODO: get all the odd numbers
  const oddNumbers = numbers.filter((num) => num % 2 != 0);
  console.log(oddNumbers);
  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  const largerNum = numbers.filter(
    (num) => num > numbers[numbers.indexOf(num) - 1]
  );
  console.log(largerNum);
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  participants.map((person) => {
    const participantName = person.name;
    console.log(participantName);
    return participantName;
  });

  // TODO: get the id numbers for female participants only
  const females = participants.filter((person) => person.gender == 'female');
  females.map((female) => {
    const femaleIDs = female.idNumber;
    console.log(femaleIDs);
    return femaleIDs;
  });
}
