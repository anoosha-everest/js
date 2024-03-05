function show(tabId){
    const t=document.getElementsByClassName("tab-content");
    for (const tab of t){
        tab.style.display="none";
    }
    document.getElementById(tabId).style.display="flex";
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
