let num = 17;
function check_prime(number){
let factors = 0;
for(let i=1;i<=N;i++){
 if(number%i=0){
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
console.log(number,"is Prime")
}else {
console.log(number"is not Prime")
}