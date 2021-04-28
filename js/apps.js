let numbers = [100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9];
let even = 0;
let odd = 0;
function evenodd(){
for ( let i=0; i < numbers.length; i++){
if (numbers[i] % 2 == 0){
  console.log ('even');
  even++;
} else {
  console.log('odd');
  odd++;
}
}
}
evenodd();
console.log('the number of even numbers is '+ even);
console.log('the number of odd numbers is ' + odd);
