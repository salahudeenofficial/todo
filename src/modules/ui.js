import storageclass from './storage'
import todolist from './todolist'


class ui {
    static currentprojectindex= null

    


    static renderprojectpage(i) {
        this.currentprojectindex = i
        storageclass.storenumber(i)



       

        const updatevalue = (h1input,discinput,thelist,index) => {
            
            thelist = thelist.children
            thelist = [...thelist]
            const name = h1input.value
            const desc = discinput.value
            let todoarray = []
            thelist.forEach((todo)=> {
                let classname = todo.className
                let todos = [...todo.children]
        
                let obj = {
                    classname: classname,
                    checked : todos[0].checked,
                    value : todos[1].value


                }
                todoarray.push(obj)
                
                


            })
            
            
            const object = new todolist(name,desc,todoarray,parseInt(index))
            
            storageclass.replaceprojectobj(object,this.currentprojectindex)
            
            ui.renderprojectlist()



            };

        

        if(localStorage.getItem('projectlist') == null) {
           return 0
        } else {
            let h1input = document.querySelector('.h1input')
            let discinput = document.querySelector(".discinput")
            let index = this.currentprojectindex
            const space = document.querySelector('.projectspace')
            space.innerHTML = ''
            console.log(this.currentprojectindex)
            let theobj =  storageclass.returnprojectobj(ui.currentprojectindex)

            const page = `
            <form>
               <input type="text" class="h1input" value="${theobj.name}" placeholder="TITLE" > 
               <textarea placeholder="discription" class="discinput" id="story" name="story"
                         rows="5" cols="33">
                 ${theobj.disc}
                </textarea>
               <div class='thelist' >
               
                  
                
                </div>
            
            
            </form>

            
            
            
            `
            let tododiv = document.createElement("div")
            tododiv.setAttribute("class","todo0")
            var x = document.createElement("INPUT");
            var y = document.createElement("INPUT");
            
            x.setAttribute("type", "checkbox");
             
            if( theobj.todoarray !=null){
            x.checked = theobj.todoarray[0].checked
            y.value = theobj.todoarray[0].value
            }

            x.setAttribute("class","todo0checkbox")
            y.setAttribute("type", "text");
            y.setAttribute("placeholder", "todo");
      



            y.setAttribute("class","todo0text")
            x.addEventListener('input',()=>{updatevalue(h1input,discinput,thelist,index)})
            y.addEventListener('input',()=>{updatevalue(h1input,discinput,thelist,index)})
            
            
            
















            tododiv.appendChild(x)
            tododiv.appendChild(y)

            
            space.innerHTML = page
             h1input = document.querySelector('.h1input')
             discinput = document.querySelector(".discinput")
            let thelist = document.querySelector(".thelist")
            thelist.appendChild(tododiv)
            

            const rendernewtodo = (h1input,discinput,thelist,index) => {
                    let list = storageclass.returnprojectobj(ui.currentprojectindex)
                    let o = list.todoarray.length
                    if(o==0){o=1}
                    let tododiv = document.createElement("div")
                    tododiv.setAttribute("class",`todo${o}`)
                    var m = document.createElement("INPUT");
                    var n = document.createElement("INPUT");
                    h1input = document.querySelector('.h1input')
                    discinput = document.querySelector(".discinput")
                    index = ui.currentprojectindex
                    thelist = document.querySelector(".thelist")
                    m.setAttribute("type", "checkbox");
                    m.setAttribute("class",`todo${o}checkbox`)
                    n.setAttribute("type", "text");
                    n.setAttribute("class",`todo${o}text`)
                    m.addEventListener('input',()=>{updatevalue(h1input,discinput,thelist,index)})
                    n.addEventListener('input',()=>{updatevalue(h1input,discinput,thelist,index)})
                    n.addEventListener('keypress', function (e) {
                        if (e.key === 'Enter') {
                         
                         rendernewtodo(h1input,discinput,thelist,index)
                         
                         updatevalue(h1input,discinput,thelist,index)
         
                    }})  
                    n.setAttribute("placeholder", "todo");
                    
         
         
                    tododiv.appendChild(m)
                    tododiv.appendChild(n)
                    thelist = document.querySelector(".thelist")
                    thelist.appendChild(tododiv)
         
         
                    
         
         
         
         
         
         
         
                }
            
            const rendersavedtodos = (obj)=> {
                    
                    let tododiv = document.createElement("div")
                    tododiv.setAttribute("class",`${obj.classname}`)
                    var m = document.createElement("INPUT");
                    var n = document.createElement("INPUT");
                    h1input = document.querySelector('.h1input')
                    discinput = document.querySelector(".discinput")
                    index = ui.currentprojectindex
                    thelist = document.querySelector(".thelist")
                    m.setAttribute("type", "checkbox");
                    m.setAttribute("class",`${obj.classname}checkbox`)
                    n.setAttribute("type", "text");
                    n.setAttribute("class",`${obj.classname}text`)
                    m.addEventListener('input',()=>{updatevalue(h1input,discinput,thelist,index)})
                    n.addEventListener('input',()=>{updatevalue(h1input,discinput,thelist,index)})
                    n.addEventListener('keypress', function (e) {
                        if (e.key === 'Enter') {
                         
                         rendernewtodo(h1input,discinput,thelist,index)
                         
                         updatevalue(h1input,discinput,thelist,index)
         
                    }})
                    
                    m.checked = obj.checked
                    n.value = obj.value
                        
                    
         
         
                    tododiv.appendChild(m)
                    tododiv.appendChild(n)
                    thelist = document.querySelector(".thelist")
                    thelist.appendChild(tododiv)


            }
            
            y.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        let h1input = document.querySelector('.h1input')
                        let discinput = document.querySelector(".discinput")
                        let index =ui.currentprojectindex
                       // console.log(`this is ${ui.currentprojectindex}`)
                        let thelist = document.querySelector(".thelist")
                        rendernewtodo(h1input,discinput,thelist,index)
                        
                        updatevalue(h1input,discinput,thelist,index)
    
                    }})
            h1input.addEventListener("input", () => {
            
            updatevalue(h1input,discinput,thelist,index)}   ) 
            discinput.addEventListener("input", () => {
            
                updatevalue(h1input,discinput,thelist,index)}   ) 
            if(theobj.todoarray!=null){
                if(parseInt(theobj.todoarray.length)>0) {
                    for(let i =1;i<theobj.todoarray.length;i++) {
                        let obj = theobj.todoarray[i]
                        rendersavedtodos(obj)
                    }
    
                }    
            }
                
            
               

        
    }}
    static renderprojectlist() {
        if(localStorage.getItem('projectlist') == null){
            return 0
        } else {
            let ul = document.querySelector('.projectlist')
            let projectlist = JSON.parse(localStorage.getItem('projectlist'))
            ul.innerHTML = ''
            projectlist.forEach(element => {
                
                ul.innerHTML += `
                <div class="pwrapper" ><li class='${element.index}'> ${element.name}</li><button id ="${element.index}" class="delbtns">del</button> </div>
                
                `
                
               
                

                
            })
            let btns = document.querySelectorAll('.delbtns')
            btns = [...btns] 
            btns.forEach(
                btn => {
                    btn.addEventListener('click',(e) => {
                        console.log("dd")
                        let k = e.target.id
        
                        storageclass.deleteproject(parseInt(k))
                        let projectspace = document.querySelector('.projectspace')
                        projectspace.innerHTML= ''
                        storageclass.newindex()
                        ui.renderprojectlist()
        
                        
        
                    })
                }
            )
           

            
            
            
            let x = ul.children
            
            x = [...x]
            
            x.forEach(div => {

                div = div.children
                div = [...div]
                let li = div[0]
                
                
                li.addEventListener('click',(e)=>{

                    let i = e.target.className
                    this.currentprojectindex = i
                    this.renderprojectpage(this.currentprojectindex)
                })
            })
        }
    }
    static plusbtn() {
        let plusbtn = document.querySelector('.plus-icon')
        plusbtn.addEventListener('click',() => {
            const name = ''
            const desc = ''
            const todoarray = null
            const index = storageclass.returnnewindex()
            const obj = new todolist(name,desc,todoarray,index)
            storageclass.addtoprojectlist(obj)
            ui.renderprojectlist()





        })


    }
}
export default ui