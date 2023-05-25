import todolist from './todolist'


class storageclass {
    static storenumber(i) {
        localStorage.setItem('number',JSON.stringify(i))
    } 
    static returnnumber() {
        return parseInt(JSON.parse(localStorage.getItem('number')) )
    }
   static newindex() {
    if(localStorage.getItem('projectlist') == null) {
        return 0
       // localStorage.setItem('projectlist',JSON.stringify(projectlist))
    } else {
        let projectlist = JSON.parse(localStorage.getItem('projectlist')) 
        let newarr = []
        for(let i =0;i<projectlist.length;i++) {
            let item = projectlist[i]
            item.index = i
            newarr.push(item)

        }
        localStorage.setItem('projectlist',JSON.stringify(newarr))
       
        

    
   }
    
   }
   static returnprojectobj(i) {
    if(localStorage.getItem('projectlist') == null) {
        return 0
       // localStorage.setItem('projectlist',JSON.stringify(projectlist))
    } else {
        let projectlist = JSON.parse(localStorage.getItem('projectlist')) 
        let item = projectlist[i]
        return item

    
   }

   
   }
   static replaceprojectobj(obj,i) {
    if(localStorage.getItem('projectlist') == null) {
        return 0
       // localStorage.setItem('projectlist',JSON.stringify(projectlist))
    } else {
      //  console.log("ayyo")
        let projectlist = JSON.parse(localStorage.getItem('projectlist')) 
        projectlist.splice(i,1,obj)
        //console.log(projectlist)
       localStorage.setItem('projectlist',JSON.stringify(projectlist))


   }}
    
   static returnnewindex() {
        if(localStorage.getItem("projectlist") == null ) {
            return 0
        } else {
            let list  = JSON.parse(localStorage.getItem("projectlist"))
            return parseInt(list.length)
            
        }
    }
    static addtoprojectlist(item) {
        
        if(localStorage.getItem('projectlist') == null) {
            let projectlist = []
            projectlist.push(item)
            localStorage.setItem('projectlist',JSON.stringify(projectlist))
        } else {
            let projectlist = JSON.parse(localStorage.getItem('projectlist')) 
            projectlist.push(item)
            localStorage.setItem('projectlist',JSON.stringify(projectlist))

        }
        
        




    }
    static deleteproject(i) {
        let projectlist = JSON.parse(localStorage.getItem('projectlist')) 
        projectlist.splice(i,1)
        console.log(projectlist)
        localStorage.setItem('projectlist',JSON.stringify(projectlist))


    } 
    
    
    
}
export default storageclass