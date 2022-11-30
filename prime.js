let n=13;
let factor=0;
for (let i=0;i<=n;i++){
    if(n%i==0){
factor++
    }
    if(factor==2){
        console.log("its a prime");
    }else("not a prime");
}