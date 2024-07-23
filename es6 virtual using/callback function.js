function arm(a){
    let sum=0
    while(a!=0){
        let rem=a%10;
        a=(a-rem)/10;
        sum=sum+(rem*rem*rem)
    }
    return sum
}
function display(a){
    let d=arm(a)
    if(d==a){
         console.log("this is armstrong")
    }
    else{
        console.log("not a armstrong")
    }
       
}
display(153)
