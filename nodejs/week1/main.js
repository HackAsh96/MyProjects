class Person {
	// your code here
  constructor(name,age){
  this.name=name;
  this.age=age;
}
  addPhone(number){
     this.number=number;
  }
  call(){
    const screen=document.querySelector("#phoneScreen");
    const screenText=document.querySelector("#text");
    if(this.number){
      document.querySelector("#container").style.display="none";
      setTimeout(()=>{
        screenText.innerText=`Cannot reach ${this.name} try later`;
        document.querySelector(".drill").style.display="none";
        document.querySelector(".noDrill").style.display="block";
      },3000);
      setTimeout(()=>window.location.reload(true),5000);
      screenText.innerText=`Calling ${this.name} at ${this.number} ...`;
      screen.style.display="block";
      document.querySelector(".noDrill").style.display="none";
  }
  else {
    alert(`The number is not correct`);
    window.location.reload(true);
  }
  }
  birthday(){
    alert(`${this.name} I whish you a happy ${this.age}th birthday!`);
  }
};
function noContact(){
  alert("Add the contact first");
}

function addContact(){
  const userName = document.querySelector("#user").value;
  const userAge = Number(document.querySelector("#age").value);
  const userContact = Number(document.querySelector("#phone").value);
  let user=new Person(userName, userAge);
  document.querySelector("#call").setAttribute("onclick","");
  document.querySelector("#call").addEventListener("click",()=>{
  if(userContact==""){
    alert("No number on the spot");
    window.location.reload(true);
  }
  else{
  user.addPhone(userContact);
  user.call();
}
});
}
