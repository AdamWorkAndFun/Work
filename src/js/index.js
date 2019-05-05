const removeActive=function(){
    let navi=document.querySelectorAll('.active');
    navi=[...navi];
    navi.map(it=>{
        it.classList.remove('active');
    })

}
const addActive=function(){
    removeActive();
    let whcichAdd=this.classList[0];
    let addClassTo=document.querySelectorAll(`.${whcichAdd}`);
    addClassTo=[...addClassTo];
    addClassTo.map(it=>{
        it.classList.add('active');
    })
}
const addActiveButton=function(){
    removeActive();
    let whcichAdd=this.classList[0];
    if(whcichAdd==='men-1')whcichAdd="men-2";
    else if(whcichAdd==='men-2')whcichAdd="men-3";
    else if(whcichAdd==='men-3')whcichAdd="men-4";
    else if(whcichAdd==='men-4')whcichAdd="men-1";
    let addClassTo=document.querySelectorAll(`.${whcichAdd}`);
    addClassTo=[...addClassTo];
    addClassTo.map(it=>{
        it.classList.add('active');
    })
}
const addListener=function(){
    let navClass=document.querySelectorAll('.nav-item');
    navClass=[...navClass];
    navClass.map(li=>{
        li.addEventListener('click',addActive)
    })
    let btn=document.querySelectorAll('.btn');
    btn=[...btn];
    btn.map(it=>{
        it.addEventListener('click',addActiveButton)
    })
}
const init=()=>{
    addListener();
}
init();