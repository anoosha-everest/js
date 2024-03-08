// document.getElementById('content-section').addEventListener('mouseover',()=>show('section'));
// document.getElementById('content-form').addEventListener('mouseover',()=>show('form'));
// document.getElementById('content-about').addEventListener('mouseover',()=>show('about'));
// document.getElementById('content-mylist').addEventListener('mouseover',()=>show('mylist'));


const person=function(fname,lname,email,phone){
    this.firstname=fname,
    this.lastname=lname;
    this.email=email;
    this.phone=phone;
    // this.get_info=function(){
    //     return this.firstname+" "+this.lastname+" "+this.email+" "+this.phone;
    // }
}

const persons=[
    new person("Anoosha","Sanugula","anoosha@gmail.com","1234567890"),
    new person("Soujanya","Hongandhe","soujanya@gmail.com","9823748890"),
    new person("Surya","Gayakwad","surya@gmail.com","9876667890"),
    new person("Tunnu","Hongandhe","tunnu@gmail.com","9234567890"),
    new person("Hareesh","Sanugula","anoosha@gmail.com","6789567890")
]
// console.log("persons",persons);
// persons.forEach(person=>console.log(person.get_info()));

var str = "";
str='<tr>'+'<th>FirstName</th>'+'<th>LastName</th>'+'<th>Email</th>'+'<th>Phone</th>'+'</tr>';

    for (var item in persons) {
        str += '<tr>';
        for (idata in persons[item]) {
            str += '<td>' + persons[item][idata] + '</td>';
        }
        str += '</tr>';
    }
    var containerEle = document.getElementById("table");
    var myhtml1 = '<table>';
    myhtml1+=str;
    myhtml1+= '</table>';
    containerEle.innerHTML = myhtml1;
    



const tabs=document.getElementById('tabs');
tabs.addEventListener('click',(e)=>clickHandler(e,'tabs'));
function show(tabId){
    const t=document.getElementsByClassName("tab-content");
    for (const tab of t){
        tab.style.display="none";
    }
    document.getElementById(tabId).style.display="flex";
}

function clickHandler(event,name){
        const activetabid=event.target.getAttribute("activetabid");
        console.log(activetabid);
        show(activetabid);
        console.log("elemnt name",name,event.target,event.currentTarget);
    }


const mylist=["Anoosha","hareesh","Surya","Tunnu"]
var containerElement = document.getElementById("list");
  var myhtml = '<table>';
  mylist.forEach(function(element) {
    myhtml += '<tr><td>' + element + ' '+'</td><td><button class="delBtn">Delete</button></td></tr>';
  });
  myhtml += '</table>';
  containerElement.innerHTML = myhtml;
  var deleteButtons = document.querySelectorAll('.delBtn');
  deleteButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      var listItem = button.parentNode.parentNode;
      listItem.parentNode.removeChild(listItem);
    });
  });





// document.getElementById('cnt1').addEventListener('onclick',()=>increase('cnt1'));
document.getElementById('button1').addEventListener('click',()=>on_start());
 document.getElementById('button2').addEventListener('click',()=>pause());
 document.getElementById('button3').addEventListener('click',()=>resume());
 document.getElementById('button4').addEventListener('click',()=>stop());



let timeout;
let time_on=0;
let num=0;
document.getElementById('button2').disabled=true;
document.getElementById('button3').disabled=true;
document.getElementById('button4').disabled=true;
function on_start(){
    if(!time_on){
        time_on=1;
        num=0;
        document.getElementById('button1').disabled=true;
        document.getElementById('button2').disabled=false;
        document.getElementById('button3').disabled=true;
        document.getElementById('button4').disabled=false;
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
    document.getElementById('button2').disabled=true;
        document.getElementById('button4').disabled=true;
        document.getElementById('button3').disabled=true;
        document.getElementById('button1').disabled=false;
}

function resume(){
    start();
    document.getElementById('button2').disabled=false;
        document.getElementById('button4').disabled=false;
        document.getElementById('button3').disabled=true;
        document.getElementById('button1').disabled=true;
    time_on=0;
}

function pause(){
    clearTimeout(timeout);
    time_on=0;
    document.getElementById('button2').disabled=true;
    document.getElementById('button3').disabled=false;
        document.getElementById('button4').disabled=false;
        document.getElementById('button1').disabled=true;
}

// const body=document.getElementsByTagName('body')[0];
// body.addEventListener('click',(e)=>clickHandler(e,'section'))
// function clickHandler(event,name){
//     console.log("elemnt name",name,event.target,event.currentTarget);
// }

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


function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


console.log("hello");
