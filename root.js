
function dark(){
    localStorage.setItem('textcolor',"white");
    localStorage.setItem('bgcolor',"black");
    let textcolor = window.localStorage.getItem('textcolor');
    let bgcolor = window.localStorage.getItem('bgcolor');
    
    document.documentElement.style.setProperty('--color',textcolor);
    document.documentElement.style.setProperty('--bgcolor',bgcolor);
      
}

function light(){
    localStorage.setItem('textcolor',"black");
    localStorage.setItem('bgcolor',"white");
    
    let textcolor = window.localStorage.getItem('textcolor');
    let bgcolor = window.localStorage.getItem('bgcolor');
    document.documentElement.style.setProperty('--color',textcolor);
    document.documentElement.style.setProperty('--bgcolor',bgcolor);
      
}

function h(){
    let textcolor = window.localStorage.getItem('textcolor');
    let bgcolor = window.localStorage.getItem('bgcolor');
    document.documentElement.style.setProperty('--color',textcolor);
    document.documentElement.style.setProperty('--bgcolor',bgcolor);
}