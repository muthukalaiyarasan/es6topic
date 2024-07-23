function add(a,b){
    console.log(a+b)
}
add(5)


function add(a,b=1){
    return a+b;

}
let c=add(7)
console.log(c)