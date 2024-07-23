class details{
    constructor(name,dateofbirth,degree,skil,district){
        this.h1=name
        this.h2=dateofbirth
        this.h3=degree
        this.h4=skil
        this.h5=district
        }
        getname(){
            return(`"iam${this.h1}mydob${this.h2}iamcompleted${this.h3}technicalskils${this.h4},${this.h5}`)
        }
    }
    let detail=new details("kalaiyarasan","22-07-2001","BE",["html","css","js","python"],"tenkasi")
    let detail1=new details("kavith","2-3-2003","BSC",["Html","css","basicphp"],"tirunelveli")
    let detail2=new details("aswin","4-9-1997","MSC,BSC",["html","css","js","angular","python"],"madurai")
    console.log(detail1.getname())
    
    console.log(detail2)
    console.log(detail1)
    console.log(detail)