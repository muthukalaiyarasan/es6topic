//map method
let aray=[1,2,4]
let ccc=aray.map((a,b)=>{
            return a*b
            })
    console.log(ccc)	

    //filter method

    let ay=[2,4,3,5,1]
    let eee=ay.filter((a,b)=>{
       return a>2
       })
       console.log(eee)

       //find method
       let off=[{name:"kalai",position:"fresher"},
                {name:"muthu",position:"fresher"},
				{name:"aswin",position:"junier"},
				{name:"aravinth",position:"senier"}]
				
			let offdetail=off.find((value,index)=>{
			      return (value.position==="junier")
				  })
				  console.log(offdetail)

       //every method 

       let arrayy=[1,2,3,4,5,6,7,8]
     let arayvalue=arrayy.every((value,index)=>{
	        return value>0
			})
			console.log(arayvalue)

          //some method
          let arr=[1,0,3,4,5,6,7,8]
     let aravalue=arr.some((value,index)=>{
	        return value>3
			})
			console.log(aravalue) 
            
            //reduce method
            let aaray=[1,2,3,4,5,6,7,8]
            let arey=aaray.reduce((a,b)=>{
                   return a+b
                   },2)
                   console.log(arey)

                   