
let num = 17;
function check_prime(num){
for(let i=1;i<=num;i++){
 if(num%i==0){
  factors++;
}
}
if(factors==0){
 return true;
}else{
 return false 
}
}
let result = check_prime(num)
if(result==true){
console.log(num,"is prime")
}else {
console.log(num,"is not prime")
}
  