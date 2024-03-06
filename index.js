document.getElementById('content-section').addEventListener('mouseover',()=>show('section'));
document.getElementById('content-form').addEventListener('mouseover',()=>show('form'));
document.getElementById('content-about').addEventListener('mouseover',()=>show('about'));

function show(tabId){
    const t=document.getElementsByClassName("tab-content");
    for (const tab of t){
        tab.style.display="none";
    }
    document.getElementById(tabId).style.display="flex";
}

// document.getElementById('cnt1').addEventListener('onclick',()=>increase('cnt1'));
document.getElementById('button1').addEventListener('click',()=>on_start());
 document.getElementById('button2').addEventListener('click',()=>stop());
 document.getElementById('button3').addEventListener('click',()=>resume());


let timeout;
let time_on=0;
let num=0;

function on_start(){
    if(!time_on){
        time_on=1;
        num=0;
        start();
    }
}
function start(){
    document.getElementById('cnt1').innerHTML=num;
        num++;
        timeout=setTimeout(start,300);
}
function stop(){
    clearTimeout(timeout);
    time_on=0;
}

function resume(){
    start();
    time_on=0;
}

const body=document.getElementsByTagName('body')[0];
body.addEventListener('click',(e)=>clickHandler(e,'section'))
function clickHandler(event,name){
    console.log("elemnt name",name,event.target,event.currentTarget);
}

const form=document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const name=formData.get('name');
    const pass=formData.get('password');
    const email=formData.get('email');
    console.log("form",name,pass,email);
    // console.log("name",document.getElementById('name').value);

    var result = document.createElement('div');
    result.innerHTML = '<h2>Submitted Form Data:</h2>' +"Name="+ (name) +" password="+ (pass)+" email="+(email);
            document.body.appendChild(result);
});
console.log("hello");
