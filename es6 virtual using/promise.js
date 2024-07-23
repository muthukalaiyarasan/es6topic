//promise
let x=12;
let a=new Promise((resolve, reject) => {
    if(x%2==0){
        resolve("even")
    }
    else{
        reject("odd")
    }
})
a.then(console.log)
 .catch(console.log)

 //palindrom using promise chaining
 let l=121;
	let j=l;
				
				function pali(x){
					let sum=0;

				return  new Promise((res,rej)=>{   
				
				while(l!=0)
				{
				let rem =l%10;
				l=(l-rem)/10
				sum=sum*10+rem;
				}
				res(sum)
				})
				
				
				}
                function palin(sum){	
				console.log(sum)
				
				return new Promise((res,rej)=>{
				if(j==sum)
				{
				res(" Its palindrome number")
				}
				else 
				{
				rej(" Not palindrome");
				}
				})
				}
				pali().then((x)=>{
				    console.log(x)
					palin(x).then(console.log)
				
				})
				.catch((z)=>{
				     console.log(z);
					 })

                  //promise all 
                  
              function one(){
                return new Promise((resolve, reject) => {
                    resolve("22")
                })
              }    
              function two(){
                return new Promise((resolve, reject) => {
                    resolve("11")
                })
              }
              function three(){
                return new Promise((resolve, reject) => {
                    reject("20")
                })
              }
              Promise.all([one(),two(),three()])
              .then(console.log)
              .catch(console.log)

              //async await

              let aa=154;
    let b=a;
	
	let sum=0;
	function xx(){
	    return new Promise((r,s)=>{
		  while(aa!=0){
		     let rem=aa%10;
			  aa=(aa-rem)/10;
			  sum=sum+(rem*rem*rem);
			  
		  }
		  r(sum)
		})
	}

	function y(sum){
	    return new Promise((r,s)=>{
		  if(b==sum){
		     r("this is armstrong")
			 }
		  else{
		     s("not a armstrong")
			}
		})
	}
	async function check(){
	     try{
		   let sum=await xx()
		   let b=await y(sum)
		   console.log(b)
		 }
		 catch{
		   console.log("error")
		 }
	}
	check()