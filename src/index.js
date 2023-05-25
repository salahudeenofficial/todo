import './style.css';
import storageclass from './modules/storage'
import ui from './modules/ui'
ui.plusbtn()
window.addEventListener("load", (event) => {
    ui.renderprojectlist()
    
    ui.renderprojectpage(storageclass.returnnumber())
  });
  
