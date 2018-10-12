const myArray=["all_about_love","desert_solitaire","disgrace","geek_love","gilead","infinite_jest","lolita","maus","never_let_me_go","poems"];
//function that decleare for each list tag an element of the myArray

let booksDetails =[{
  id: myArray[0],
  title: "The Love",
  language: "english",
  author:"Paul"
},
{
  id: myArray[1],
  title: "Desert",
  language: "italian",
  author:"Marco"
},
{
  id: myArray[2],
  title:"Disgrace",
  language: "chinese",
  author:"Mao"
},
{
  id: myArray[3],
  title:"Geek",
  language: "spanish",
  author:"Pablo"
},
{
  id: myArray[4],
  title:"Gilead",
  language: "french",
  author:"Margout"
},
{
  id: myArray[5],
  title:"Jest",
  language: "german",
  author:"Muller"
},
{
  id: myArray[6],
  title:"Lolita",
  language:"spanish",
  author:"Rosa"
},
{
  id: myArray[7],
  title: "Maus",
  language: "polish",
  author: "Lewandoswi"
},
{
  id: myArray[8],
  title:"Never Let Me Go",
  language:"arabic",
  author:"Mohammed"
},
{
  id: myArray[9],
  title:"Poem",
  language: "danish",
  author: "Sorensen"
}
]
function books() {
  const ul = document.createElement('ul');
  for(i=0;i<myArray.length;i++){
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + booksDetails.id[5];
  }
  document.getElementById('myBook').appendChild(ul);
}
books();
