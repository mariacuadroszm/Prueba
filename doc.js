const numbers = [1,2,3];

function sum (numbers) {
    let sumNumbers= 0;
  for(let i=0 ; i< numbers.lenght; i++){
    let actualNumber= numbers[i];
    sumNumbers += actualNumber;
  }
    
    return sumNumbers;
};

function fakeBin(x){
  const splitArray = x.split('');
  let finalString = "";
  
  for(let i=0 ; i<splitArray.length ; i++){
    if(splitArray[i]<5){
      finalString +="0";
    } else if(splitArray[i]>= 5) {
      finalString +="1";
    }
  }
  
  return finalString
  
}