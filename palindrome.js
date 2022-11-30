let str=naman;
let result="";
for(let i=0;i<=str.length-1;i++){
    for(let j=str.length-1;j>0;j--){
        if(str[i]==str[j]){
            result = "yes_palindrome"
        }else{
            result="not a palindrome"
        }
    }
}console.log(result);