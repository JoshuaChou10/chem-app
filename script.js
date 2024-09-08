let work=true;
function textBox(textPlace)
{

  
  let x=document.getElementById('x')
  let lesson=document.getElementById(textPlace)
  let notes=document.createElement("textarea")
  notes.id='notes'
  notes.style.width="300px"
  if(work==true)
  {
  if(innerWidth<1068)//1068
  {
    x.innerHTML="hide workspace"
  notes.style.position="sticky"
  notes.style.bottom="60px"
    
    lesson.insertAdjacentElement('afterend',notes)
  }
  else{
    
  x.style.position="absolute"
    x.style.transform="translate(270px,0)"

  
  document.getElementById("workdiv").appendChild(notes)
    x.insertAdjacentElement('afterend',notes)
  //  lesson.insertAdjacentElement('afterend',x)
  }
  }
  work=false
  // notes.style.marginBottom="200px"
  notes.style.backgroundColor="greenyellow"
  
  notes.onclick=function(){press()};
  notes.placeholder='Write your thoughts. Drag to extend.'
  
  //  document.getElementById("workdiv").style.position="sticky"
  //     document.getElementById("workdiv").style.bottom="60px"
  
 
  // notes.insertAdjacentElement("beforebegin",x)
  

 
  // notes.appendChild(x)
}

function hidebox()
{
  work=true
let note=document.querySelector('#notes')
note.style.display="none"
notes.placeholder='Write your thoughts. Drag to extend.'
}
function press()
{
notes.placeholder='Press "Hide Workspace" above to hide'
}
function key()
{
  
  if(cpg==0)
  {
content.innerHTML =" 3 parts of an atom<br><br><b style='color:darkgreen;'>Protons</b> are in the nucleus. <br><br><b style='color:lightblue;'>Neutrons</b> are also in the nucleus.<br><br> <b style='color:rgb(200,200,100);'>Electrons</b> are in the orbits."
  }
   if(cpg==1)
  {
content.innerHTML ="<b style='color:darkgreen;'>Protons</b> have a charge of +1  and 1 amu.<br><br> <b style='color:lightblue;'>Neutrons</b> have no charge and 1amu<br><br> <b style='color:rgb(200,200,100);'>Electrons</b> have -1 charge and 1/2000 amu."

  }
  if(cpg==2)
  {
content.innerHTML ="An element is a bunch of the same atoms grouped together<br><br>Each element has a symbol with a capital first letter e.g oxygen=O<br><br>Each element is either a metal or a nonmetal "
  }
  if(cpg==3)
  {
content.innerHTML ="#of protons of an element is the atomic number<br><br>#of electrons=#of protons<br><br>Atomic mass=#of protons+#of neutrons<br><br>#of neutrons is the atomic mass - #of protons<br><br> e.g an atom has 11 protons and 12 neutrons. Atomic mass will be 11+12=23. "
  }
  
  if(cpg==4)
  {
content.innerHTML ="In the Bohr diagram, the protons and neutrons in the atom are written in the middle.<br><br>The electrons are drawn in the orbits. Max electrons in each orbit: 2,8,8<br><br>Valence electrons are the electrons in the outermost orbit"
  }
  if(cpg==5)
  {
content.innerHTML ="The Lewis dot diagram only has the element symbol written in the middle, and only the valence electrons are drawn.<br><br>An element's column number is the #of valence electrons they have. For columns after 9, you start counting from 0 again.<br>e.g Lithium is in column 1 so it has 1 valence electron Li⋅<br><br>An atom takes the fastest way and either loses or gains electrons to have a full outer orbit and become stable."


 
  }
  if(cpg==6)
  {
content.innerHTML ="Ionic compounds are formed between a nonmetal and a metal<br><br>The metal atom gives electrons to the nonmetal for both the gain stability<br><br>Metal gains a positive charge and nonmetal gains a negative charge, they are called ions"
  }
  if(cpg==7)
  {
content.innerHTML ="<b>Formula for Ionic Compounds</b><ol><li>Find the ionic charges using periodic table</li><li>Use criss-cross rule; reduce the subscripts if there is a common factor</li></ol>e.g Magnesium oxide->Mg 2+ O2- criss crossMg2O2. Reduce to MgO<br><br><b>Naming Ionic Compounds</b><ol><li>Identify the metal ion (first element in name)</li><li> If contains transition metal, use criss cross rule to find charge of transition metal.</li><li> Non-metal ion will add ide to stem</li></ol> e.g TiF4→Titanium Fluoride4→ Titanium(IV)Fluoride"
  }
  if(cpg==8)
  {
content.innerHTML ="Covalent bonds are formed between 2 nonmetals.<br><br> The 2 atoms share electrons, so they can both have a full orbit.<br><br> Diatomic elements are in pairs when alone. "
  }
if(cpg==9)
  {
content.innerHTML ="<b>Naming Molecules</b><ol><li>Name the 2 nonemetals</li><li>add a prefix depending on the subscript and add -ide to the second elements stem</li></ol>I.e CO2→Carbon dioxide<br><br><b>Writing formulas</b><ol><li>Turn the prefixes into subscripts and find the symbol for each element, do not reduce.Tetrachloride Pentabromide→Cl4Br5 </li>"
  }
  if(cpg==10)
  {
content.innerHTML ="<b>Reactants→Products</b><br><br>Word equations are where the names of the reactants and products are written.<br><br> A <b>skeleton equation</b> is where the number of atoms on each side don't equal each other. e.g H2O2 → H2O+O2. Reactants: 2O Products: 3O<br><br><b>Balanced equation</b>:<b>2</b>H2O2 → <b>2</b>H2O+O2<br> after adding the coefficients both sides have an equal number of hydrogen and oxygen atoms."
  }
  if(cpg==11)
  {
content.innerHTML ="<h3><b>Writing balanced equations</b><h3><strong>Example:</strong>aluminum + oxygen is aluminum oxide.<br>Skeleton equation: Al+O2&#8594;Al2O3. <br> balance the #of atoms on each side by adding a coefficient in front of each element <p style='text-align:center'> _Al+_O2&#8594;_Al2O3.</p> <p><b>1. Write down #of atoms per element.</b> Reactants: 1 Al atom and 2 O atoms, <br>Products:  2 Al and 3 O.<br><b>Step 2.</b>  Get the O3 to an even number by putting a coefficient of 2 in front of the Al2O3 on the product side. products: 4Al and 6O  _Al+_O2&#8594;<b>2</b>Al2O3 </p><p> <b>step 3.</b>  Balance the 2 oxygens on the reactant side by adding a 3 to the O2. _Al+<b>3</b>O2→2Al2O3.<br> <b>Step 4.</b>Balance the aluminum and put a 4 on the product side. Now they both have 6 oxygen atoms and 4 aluminum. balanced equation: <b>4</b>Al+<b>3</b>O<sub>2</sub>&#8594;<b>2</b>Al<sub>2</sub>O<sub>3</sub>"
  }
} 


let inputText = document.querySelectorAll('input')
    let inputid = ['Sn', 'atomic', 'electrons'];
let gotGem=0
  let underAnswer = document.createElement("p")
  let underImg = document.createElement("img")
let boxNum;
let canTip=true
let tipBool=false
let tipPress=false
let tip=document.createElement("p")
let tipArea=document.getElementById(inputid[0])
let pg = -1;
let ants;
let question;
let squestion;
  const tipBtn=document.createElement("button")
  tipBtn.id="tipBtn"
let score = 0

let totalScore = 2 //also change gem count at line 60

function submit() {
  const select = document.querySelectorAll('select')
   const inputText = document.querySelectorAll('input')
    
    
    document.getElementById("check").style.display = "none";
    for (i = 0; i < inputText.length; i++) {
        inputText[i].disabled = true
    }

    for (i = 0; i < select.length; i++) {
        select[i].disabled = true
       select[i].style.backgroundColor="rgba(100,100,100,0.1)"
    }
    check();
}
function unDis(select)
{
  inputText = document.querySelectorAll('input[type=text]')
 select = document.querySelectorAll('select')
for (i = 0; i < select.length; i++) {
        select[i].disabled = false;
            select[i].style.backgroundColor="white"
     
            
      
    }
    for (i = 0; i < inputText.length; i++) {
     inputText[i].disabled = false;
    }
}

let checkBool=false
let noAnswer = 0 //if check is pressed more than once, dont show
let numofHide = 0 //for how many ansers to hide
let right=false
let pressed=0 
const gemCount = document.getElementById("gemCount")
gemCount.innerHTML=2
function check() {
// tipBtn.style.display="none"
checkBool=true
pressed++ 
    noAnswer += 1 //only show answer once
 
    if (noAnswer <= 1) {
        numofHide += 3
    }
    
    



    document.getElementById("nextQuestion").style.left = "100px";
    antsFun();
    // if (tipPress==true) { //if there is a tip shown
    //     numofHide+=1 //if not work, do ans+tip replace with tip
    // }
    console.log(numofHide+"num")
    

    let lowAnts = [] //loop will place lower case values of ants in here
    // if(ants.toLowercase())
    
    for (let i = 0; i < ants.length; i++) {
        lowAnts[i] = ants[i].toLowerCase();
    }
    console.log(lowAnts)

   for (let i = 0; i < inputid.length; i++) {
    
  
        

      let  underAnswer = document.createElement("p")
         let underImg = document.createElement("img")
        if (document.getElementById(inputid[i]).value == ants[i]) { //if correct
right=true
    //  if(i==boxNum &&noAnswer<=1) //make tip btn after hiding
    //      {
    //               tipBtn.style.display="inline-block"
    //               tipBtn.innerHTML="tip"
                
    //               tipBtn.onclick=function(){tipFun()};
    //              document.getElementById(inputid[i]).insertAdjacentElement("afterend", tipBtn)
    //              tipBtn.style.position="relative" //computer screen
    //               //  tipBtn.style.transform="translate(5vh,-20vh)"
                  
    //                  }
   
            document.getElementById(inputid[i]).style.borderColor = 'green'
            document.getElementById(inputid[i]).style.backgroundColor = 'rgba(50,255,50,0.1)'
          if(pg>16 && pg<19) //at equations test
            {
              score+=2
               if(recapBool==true)
           {
              totalScore++
           }
            }
            else{score++}
            
            
            if(recapBool==true)
           { totalScore++
           }
            underImg.id = "under"
            underImg.src = "https://cdn.staticcrate.com/stock-hd/effects/footagecrate-green-checkmark-icon-prev-full.png"
            underImg.style.transform = "translate(-15vw,-5vh)"
            if (noAnswer <= 1 ) { //if press more than once, don't show ans
                underImg.style.display = "inline-block"
                underImg.style.maxWidth = "9em"
                underImg.style.maxHeight = "9em"
                document.getElementById(inputid[i]).insertAdjacentElement("afterend", underImg)
if(i==boxNum &&tipPress==true) //if at tipbox, then no check
{
  underImg.remove()
}
            }

        } 
        else { 
            document.getElementById(inputid[i]).style.borderColor = 'red'
            document.getElementById(inputid[i]).style.backgroundColor = 'rgba(255,20,20,0.1)'


          
            underAnswer.innerHTML = `answer: <b>${ants[i]}</b>`
         
        
            underAnswer.id = "under"
            underAnswer.style.transform = "translate(-15vw,15vh)"
 
            
            if(i==boxNum)  //define the tip with answer if wrong and hide tipbtn
         {
           
        
            tipBool=true 
               tipBtn.style.display="none"
           underAnswer.style.width="130px"
      if(8<pg<12)
      {
        underAnswer.style.width="230px"
        underAnswer.style.position="absolute"
        underImg.style.position="absolute"
      }
          underAnswer.style.transform = "translate(-15vw,15vh)"
  underAnswer.innerHTML = `answer: <b>${ants[i]}</b>`+"<br>"+"<strong>Hint:</strong> "+tip
  tipHide();
          }
            
            
  
                 if (noAnswer <= 1) { //show answer if wrong
                underAnswer.style.display = "inline-block"
                document.getElementById(inputid[i]).insertAdjacentElement("afterend", underAnswer)
               
                 underAnswer.style.position="absolute"
                
            }
//             else if(i==2 && pressed==1 && right==true) 
//             {
//  underAnswer.style.transform = "translate(80vw,-15vh)"
//             }
            
              
         
        }
                
               
                 console.log(canTip)
                 
if (innerWidth < 1068) { //phone size
                underAnswer.style.transform = "translate(0vw,-10vh)"
underAnswer.style.position="relative"
tipBtn.style.position="relative"
            }
            if(innerHeight < 709)
           {  
             underAnswer.style.transform = "translate(-15vw,20vh)"

           }
    }

    //loop will place lower case values of ants in here
    // if(ants.toLowercase())

    gemCount.innerHTML = totalScore
    document.getElementById("coins").innerHTML = score


    document.getElementById('nextQuestion').style.display = 'inline-block';
    

    //   if(loopNum === 3){          //if it gets to 3, break and reset to 0, so it starts again
    //   text += (`<b>${i+1}</b>`) + "." + ants[i] + "<br>"; 
    //   loopNum = 0;
    //   }else{ //if it is not 3,(cant go over since it restarts everytime), then it will just do this, without breaking
    //     text += (`<b>${i+1}</b>`) + "." + ants[i] + "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"
    //     // "⋅    " ;
    //   }
    //   if(i==9){
    //    loopnum=4
    //  }
    //   }


}

//  }
//       let text="";

//   ants.forEach(myfunction);
// function myfunction(item, index) {
//   text += (index + 1) + "." + item + "<br>"; 
// }
//can also be put at the bottom
// document.getElementById("demo").innerHTML = "<h2>Answers</h2>"+"<br>"+text;
//     }



//press once or twice every 6 days
let gotBool=0

function gemPlus()
{
  totalScore++
  gotGem++
 gotBool++
  if(gotBool%2==0 && !(gotBool==0)) //if at max gems(even number count by 2's), then hide until...line 356
  {
  let getGem=document.querySelector("#getGem")
  getGem.style.display='none'
  }
  setTimeout(function () {
        
         getGem.style.display='block'
         gotBool=0 
       },518400) //6 days which it shows, then sets to 0, so line 347 wont run and hide button
      
  gemCount.innerHTML = totalScore
  document.getElementById('addGem').innerHTML ='+'+gotGem+'gem'
}
function hide()

{
    noAnswer = 0
    for (i = 0; i < numofHide; i++) { //do remove() and 3 intead of numofhide
        document.querySelectorAll("#under")[i].innerHTML = ""
        document.querySelectorAll("#under")[i].src = ""
    }

}

function elements() {
    cpg = 1
    pg = 0.
    next();

    check();

}

let navElements = document.querySelector("#navElements")
let navAtom = document.querySelector("#navAtom")
let navMole= document.querySelector("#navMole")
let navIonic=document.querySelector("#navIonic")
let li = document.querySelectorAll("li")
let navDiagrams = document.querySelector("#navDiagrams")
let navReact = document.querySelector("#navReact")
let navEquations = document.querySelector("#navEquations")
let content = document.getElementById('content')
let cpg = -1
let atomImg = document.querySelector(".example")
// let table=document.createElement("img")
// let caption=document.createElement("p")
// let tableBool=false
function next() {
 
tipBtn.style.transform="translate(-6vw,0vh)"

    score === 0
        window.speechSynthesis.cancel();
    cpg++
    //  document.querySelector("input").value=""
    //   document.querySelector("input").style.borderColor=""


    let title = document.getElementById('title')
    //  switch(cpg)


    content.style.lineHeight = "40px"
    content.style.fontSize = "20px"
    content.style.marginBottom = "70px"
    switch (cpg) {
        case 0:
            atomImg.src = "atom1c.png";
            title.innerHTML = "Parts of an atom"
           nav(navAtom);
          
            content.innerHTML = "<a href='https://www.youtube.com/watch?v=AM5tRstt7oo'> Don't put sodium on ice</a> <p> Atoms make up everything, they are the smallest and most basic building block for all matter. So small that we need a microscope to see them.</p> <p>There are 3 parts of an atom, <b style='color:darkgreen;'>Protons</b>, <b style='color:lightblue;'>Neutrons</b> and <b style='color:rgb(200,200,100);'>electrons.</b><p> Protons and Neutrons are in the nucleus, which is the middle of the atom.</p><p> Electrons are in the orbits (the rings around the nucleus). Orbits can also be called shells. Electrons are involved when atoms bond.</p>"

            break;
        case 1:
        atomImg.src = "atom1c.png";
            // learn.style.display='none';
            // time.style.display='none';



            //  atomImg.id=atomImg
            // next.style.display='block';


            // back.style.display = "block";
title.innerHTML = "Parts of an atom 2"
            content.innerHTML = "<p><b style=color:darkgreen>Protons</b> have a charge of 1 and an atomic mass unit (a m u) of 1<p><b style='color:lightblue;'>Neutrons</b> don't have a charge. They have an atomic mass of 1.</p><p><b style='color:rgb(200,200,100);'>Electrons</b> have a charge of -1 and an atomic mass of 1/2000.</p> <p>Electrons are so light that they don't count in the total mass of an atom.</p>  <p><u> There are as many electrons in an atom as there are protons</u> in an atom. <p> <p>So the <b>total charge of an atom is 0</b> since there are as many +1 charges of protons as there are -1 charges of electrons.</p>"
            content.style.lineHeight = "30px"
            content.style.fontSize = "20px"
            break;

        case 2:
            nav(navElements);
      


            atomImg.src = "c2.png"
           
            title.innerHTML = "Elements"
            content.innerHTML = " <p>There are many different types of elements.</p><p>An element is just a lot of the <b>same </b>atoms grouped together. Elements are bigger and have mass, like a block of gold which is made up of many tiny gold atoms. </p><p>Every element also has an element symbol on the periodic table.</p> e.g oxygen has a symbol of O. The symbol should always have a capital first letter.<p><i>See the image for where to find the mass, atomic number and symbol of an element on the periodic table</i></p><p>Each element is either a metal, or a nonmetal, and each column (vertical) is categorized into a group. <br> Metals: Alkali metal, alkaline earth, transition metal, basic metal, metalloid. Nonmetals: nonmetal, Halogen, Noble Gas, Lanthanide, Actinide.<br> See the legend for the periodic table for more information."


            break;
        case 3:
        atomImg.src = "c2.png"
        title.innerHTML = "Elements 2"
            content.innerHTML = " <h3>Finding the mass, atomic# and #of parts in an atom</h3><p>All atoms in an elements have a different #of protons, neutrons and electrons</p><p><b>#of protons</b> of an element is the atomic number and the identity of the atom, since every element has a diffrent atomic#.</p> <b>#of electrons in an atom</b>=#of protons in an atom</p> <p><p><b>The atomic mass (atomic weight)</b> of an atom is the #of neutrons + the #of protons since the electrons are so light they don't count towards the total mass of an atom. <p><b>The #of neutrons</b> in an atom is the atomic mass - #of protons</p> <p>Example:if an atom has 11 protons and 12 neutrons, the atomic mass will be 11+12=23.</p><p>press the periodic table button above and try reading the elements</p>"
            break;
           
        case 4: //diagrams

            title.innerHTML = "Diagrams of atoms"
            
            atomImg.src = "bhor.png"
            nav(navDiagrams);
            


            content.innerHTML = "<p>The first diagram is the <b>Bohr diagram</b></p><p>It is a basic diagram of an atom. In the nucleus (middle) you write the amount of protons and neutrons in the atom.</p><p><i>For example</i>, on the periodic table Fluorine has an atomic number of 9, so it has 9 protons. Fluorine also has 10 neutrons since protons+neutrons=atomic mass. <br> So in the nucleus you write 9p and 10N.<p>Next, there are 9 electrons in Fluorine, since #of protons=#of electrons.</p><p>Starting from the innermost shell/orbit and working your way out, draw that many electrons.<p>The first orbit is stable when there are <b> 2 electrons</b>, the 2nd orbit can have <b>8</b> and the 3rd orbit can have <b>8</b></p> <p>In Fluorine, 2 electrons go in the first shell and 7 in the second.</p>The electrons in the outermost shell are called <b>valence electrons</b>.<p>Pick an element of the periodic table  and try drawing one now.</p><br>"
            break;
        case 5:
        title.innerHTML = "Diagrams of atoms 2"
            atomImg.src = "lewis.png"
            // dont hide flurine lewis img
            content.innerHTML = "<p>The second diagram is the <b>Lewis dot diagram</b>. </p><p>It is just the Bohr diagram except only the valence electrons, electrons in the outermost shell, are drawn. The element symbol is written in the center. <p> In the periodic table the element's <b>column number is the #of valence electrons they have</b>. For columns after 9, you start counting from 0 again. e.g column 15 has 5 valence electrons.</p><p style='text-align:center'> Lithium has is in column 1 and has 1 valence electrons. <img src='colRule.png' style='width:75px;height:150px;'> The Lewis diagram for lithium is <br> <b>Li⋅</b> <p style='text-align:center'>Boron is in column 13 and has has 3 valence electrons. The diagram for Boron is <br><b>B˙:</b></p> <p><u>In order for an atom to be stable it must have a full outer shell.</u></p><p>For example Fluorine has electrons that goes up to the second shell, which needs 8 electrons to be stable, however in the Lewis diagram it shows that Fluorine only has 7 valence electrons, so it is not stable. Therefore it has to gain 1 electron to be stable</p><p>If an element has less than 4 valence electrons it will be faster to lose instead of gain electrons, so it will lose electrons. It's like rounding. <br>Example: Lithium's lewis diagram has 1 electron, Li⋅ so it will lose 1 electrons to gain stabililty.<img style='width:200px;height:100px' src=lith.png></p>"

            break;
        case 6: //ionic
            title.innerHTML = "Ionic compounds"
            atomImg.src = "https://image1.slideserve.com/1958057/ionic-bonding-nacl-n.jpg"
            nav(navIonic);
           
            content.innerHTML = "<b> Watch this video before hand</b> <a href='https://youtu.be/Qf07-8Jhhpc'>Ionic bonds introduction</a> <p> Ions are atoms with a charge, remember how all atoms have no charge.</p> Ionic compounds are formed when 2 element's combine their atoms. They are formed between a <b>metal and a nonmetal</b>. </p> <p> For both atoms to have a full orbit, the metal atom gives electrons to the nonmetal. When the metal loses the negative charge it gains a a positive charge and becomes a <b>cation</b>. When the nonmetal recieves the negative charges it becomes a negatively charged ion <b>anion</b>. The ion's charge depends on how many electrons were received or given. They are written as a superscript above the ion. E.g F<sup>1-</sup>.</p><p> <b>The subscript for each element is the #of atoms in the element</b>. e.g AlF<sub>3</sub> has 1 aluminum atom and 3 fluorine atoms. <u>A capital letter means the beginning of a new element.</u></p><p>here is an example of how sodium chloride, an ionic compound bonds.</p>  Bonding of NaCl:<ol><li> <b>Na, the metal</b> is in the first column and has 1 valence electron. To be stable and have a full orbit, it needs to lose 1 electron. So when the atom loses the electron it gains a 1+ charge because there are more protons (+1) than electrons(-1). The atom becomes a cation, Na<sup>1+</sup>.</li><li><b>Cl, the nonmetal</b> has 7 valence electrons and needs 1 more electron, so when it gains an electron it becomes Cl<sup>1-</sup>. </li><li> For the image on the right, Na, gives it’s extra electron to Cl and they combine and both become stable and gain charges. </li></ol> Every ion has a charge, look at the periodic table with charges to see the charges for each ion.<br>"
            break;
        case 7:
        title.innerHTML = "Ionic compounds 2"
            atomImg.src = "https://slideplayer.com/slide/6167783/18/images/40/Sodium+Cloride+Na%2B+Cl%E2%80%93+criss-cross+Na1Cl1+NaCl.jpg"

            content.innerHTML = "<b> Watch this video before hand</b> <a href='https://youtu.be/URc75hoKGLY'>How to write Ionic formulas </a> <h2><b>Writing formulas for ionic compounds</b></h2>Find the formula for Sodium chloride.<br>Image on the right: The element symbols for  Sodium Chloride is Na and Cl<ol><li>We found the charges of each ion, so now we use the <b>criss cross rule</b> to find the formula of the compound. The charge of each ion becomes the subscript(#of atoms) for the other ion. So it becomes Na<sub>1</sub>Cl<sub>1</sub>. See the image. <li><u>Simplify the subscript for each ion if we can</u> e.g Na2Cl2=NaCl. If there is only one of each ion, then the subscript is not written. <b>NaCl</b></li></ol> <h2><b> Naming ionic compounds</b></h2><p>1. Name the metal ion</p><p>2. A <b>multivalent</b> metal has multiple charges in its ion form. (see periodic table with charges above). Most <b style='color:yellow'>transition metals</b> are multivalent. If it is multivalent, reverse the criss cross rule to find the charge of the metal, and write it as a roman numeral.</p><p>3. Name the nonmetal and change the end to ide</p> <strong>Example:</strong> TiF4, Ti is a multivalent transition metal. Using the reverse criss cross rule, Ti has a charge of 4. So TiF4&#8594;Titanium Fluoride4&#8594; Titanium(IV)Fluoride<p><b>Polyatomic ions</b> such as NO3<sup>1+</sup>-Nitrate are made up of multiple atoms, they also have charges. If there is a subscript outside it, the subscript multiplies to all the atoms in the polyatomic ion. (NO3)3 has 3x3=9 O and 3x1=3 N. The rules are the same when naming and writing Formulas. Example of a ionic compound with a polyatomic ion: CO3-Carbonate is the polyatomic ion. Sodium carbonate&#8594;Na<sup>1+</sup>+(CO<sub>3</sub>)<sup>2-</sup>&#8594;Criss Cross the charges Na<sub>2</sub>(CO<sub>3</sub>)<sub>1</sub></p>Press the button above to see more examples. <button><a style='color:black; text-decoration:none;' href='https://www.omnicalculator.com/chemistry/chemical-name'>chemical Name and formula Calculator</a> </button>"

break;
case 8:
 nav(navMole);
title.innerHTML = "Covalent Bonds"
            atomImg.src="https://www.chem1.com/acad/sci/wat-images/H2O.png" 

            content.innerHTML ="Covalent bonds form Molecules. They are like Ionic bonds, except they are formed between <b>2 nonmetals</b> eg.carbon+Oxygen The 2 atoms share electrons, so they can both have a full orbit.<br> Image: H2O has 2 hydrogen and 1 oxygen. H has 1 electron and needs 1 more for a full orbit. O has 6 electrons and needs 2 more. Each of the 2  <p style='color:yellow'>hydrogens</p> shares the 1 electron it has with  <p style='color:red'>oxygen</p> So oxygen gets the 2 electrons it needs. Oxygen shares 1 of its electrons for each of the hydrogens. Now each hydrogen has gets 1 electron and has a full orbit.<br><br> Diatomic elements are elements that are in pairs when alone. H2 O2 N2 F2 I2 Cl2 Br2.<br> "


 
 break;
 case 9:
 title.innerHTML = "Covalent Bonds 2"
   atomImg.src = "https://miro.medium.com/max/262/0*IIAATNe2mPzQitr0.png"
 content.innerHTML ="<h3><b>Naming Molecules</b><h3><p>1. Identify the 2 nonmetals</p><p>2. Add a prefix depending on the subscript. 1=mono, 2=di etc. Look at the table for more.</p><p>3.Add ‘ide’ to the second element stem</p><p>​​CO2&#8594;carbon oxygen&#8594;Carbon dioxygen&#8594;Carbon dioxide</p><h3><b>Writing formulas for Molecules</b><h3><p>1.Turn the prefixes to subscripts.mono=1 di=2. etc</p><p>2. Find the symbol for each element</p><p>3. Do not reduce for covalent bonds </p><p>​​Tetrachloride Pentabromide&#8594;Cl4Br5</p>"
 break;
case 10:
nav(navEquations);
title.innerHTML = "Chemical equations"
   atomImg.src = "equation.png"
 content.innerHTML ="<p style='text-align:center'>The general form of an equation is<br>Reactants→Products.</p> <b>Word equations</b> are where the names of the reactants and products are written. Example: Silver+sulfur→Silver sulfide. <br> A <b>skeleton equation</b> is where the atoms on each side don't equal each other, only the formula is written. <br><strong>Equation example:</strong> Word equation: hydrogen peroxide decomposes into water and oxygen. Skeleton:H2O2 &#8594; H2O+O2. If you count the atoms on each side, you can see that the left side has 2 oxygen atoms and the right side has 3. It is not balanced. </p><p> To <b>balance</b> the equation, change the number of molecules on the sides. Skeleton: H2O2 &#8594; H2O+O2. Has 3 oxygen on the right side (products), and 2 on the left (reactants). If instead, there are 2 hydrogen peroxide molecules, and 2 water molecules, each side will have 4 O atoms and 4 H atoms making it a balanced equation. <b>2</b>H2O2 &#8594; <b>2</b>H2O+O2.</p>The orange numbers are called <u>coefficients</u>. <p> Each molecule/element will have a state symbol beside it.  (l)=liquid. (s)=solid (aq)=dissolved in water. For example, water can be a liquid. H2O(l) </p>"
break;
case 11:

title.innerHTML = "Chemical equations 2"
   atomImg.src = "equation2.png"
 content.innerHTML ="<h3><b>Writing balanced equations</b><h3><strong>Example: </strong>aluminum + oxygen is aluminum oxide.<br>Find the Skeleton equation. Al+O2&#8594;Al2O3. <br> balance the #of atoms on each side by adding a coefficient in front of each element<p style='text-align:center'> _Al+_O2&#8594;_Al2O3.</p> <p><b>1. Write down #of atoms per element.</b>Get a peice of paper and make a table, once side for reactants and another for products. The reactants have 1 Al atom and 2 O atoms, the products have 2 Al and 3 O.<br><b>Step 2.</b> Get the O3 to an even number by putting a coefficient of 2 in front of the Al2O3 on the product side. Now there are 4 Al atoms and 6 O atoms on the product side. _Al+_O2&#8594;<b>2</b>Al2O3 </p><p> <b>Step 3.</b>  Balance the 2 oxygens on the reactant side. 2x what will equal 6? <u>3</u>. Now there are 6 oxygen on each side. _Al+<b>3</b>O2→2Al2O3.<br> <b>Step 4.</b>Since there are 4 Al atoms on the product side and 1 on the reactants, balance the aluminum. 1x what=4. <u>4</u>. Now they both have 6 oxygen atoms and 4 aluminum. balanced equation: <b>4</b>Al+<b>3</b>O<sub>2</sub>&#8594;<b>2</b>Al<sub>2</sub>O<sub>3</sub>."
 
  
break;
case 12:
nav(navReact);
title.innerHTML = "Chemical Reactions"
   atomImg.src = ""
 content.innerHTML ="<h3><b>Types of Reactions</b><h3><p>watch this video after reading</p> <a href='https://youtu.be/NiA5J6gRU2Y'>Sodium with water reaction explained</a><p>There are 5 types of reactions. synthesis, decomposition, single displacement, double displacement and combustion.</p><p> Each reaction has a <b>general equation</b>, stating how the elements react. For example Synthesis is where elements combine and the general equation is A+B&#8594; AB. An example of synthesis is C+O2&#8594;CO2.</p><p>The reason the elements in our food that we eat don't react in us is because they are all ionized and stable, so they wont want to bond with other elements.</p><img src='synthesis.png' style='width:300px;height:700px;'><p>The result of a combustion reaction is always CO2+H2O</p><img src='combust.png'style='width:300px;height:400px;'><br><b> Fun Fact</b> Since the colounm# is the #of valence electrons, columns 1 (Alkali metals) and 17 (Halogens) are the most reactive elements, since they just need to gain or lose 1 electron to bond with another element. "

break;
case 13:

title.innerHTML = "Chemical Reactions 2" //displace and predict
   atomImg.src = ""
 content.innerHTML ="<p>For displacement reactions an element from one side will switch with an element from the other side. Like will take like. Metal will take metal and nonmetal will take nonmetal. Example: Single displacement: Fe+CuSO4&#8594;Cu+FeSO4. Fe takes the place of Cu </p><img src='displace.png'style='width:300px;height:700px;'><p><b>Activity series and single displacement</p></b>To predict if the single element will bump out the one in the compound, use the reactivity scale. If the single element is higher than the element in the compound on the reactivity scale then it will switch. <img src='reactivity.png'>Example. Silver + Copper(II) Nitrate will not work as silver is below copper. Example. Cu+AgNO3&#8594;Ag+Cu(NO3)2. Copper is more reactive than silver and will take it’s place"
 break;
 case 14:
nav(navFun);
title.innerHTML = "Big Bang Theory" //displace and predict
   atomImg.src = "https://cdn.mos.cms.futurecdn.net/y662ose6eAgJwjosumrYrF-320-80.jpg"
 content.innerHTML =" The first element created on earth is hydrogen because it has the simpiest structure, 1 proton and 1 electron. Gravity pulled 2 hydrogen atoms together into 1 atom: helium.  Unlike chemical reactions where the electrons are transferred or shared from 1 atom to another, the nuclei (nucleus plural) of the 2 atoms are fused (combined).  The process of fusing lighter elements (hydrogen) into heavier ones (helium) is called <b>nuclear fusion</b>. A huge amount of energy is released during nuclear fusion creating nuclear explosions and thus, primary stars. A star is born by fusing hydrogen atoms, leaving helium atoms as the product. Gravity pulls the produced helium to the middle of the star because helium is heavier then hydrogen. <br><br>eveuntually the star will run our of hydrogen to fuse and the star will collapse into its core, then, because of the increased force of gravity, the helium atoms will begin to fuse with each other and create new elements. This is how the lighter elements are created with atomic numbers of 1 to 26 on the periodic table."
        break;
      case 15:
        title.innerHTML = "How were heavier elements created?"
       atomImg.src="https://cdn.mos.cms.futurecdn.net/y662ose6eAgJwjosumrYrF-320-80.jpg"
        
        content.innerHTML="<b> But how are heavier elements created</b>, like gold or silver. Heavier elements are those with a number greater than 26 (iron). If a star is large enough before its collapse it will crush the atoms in its core. Instead of fusing the atoms, it will move the electrons from each atom to the nucleus. The electrons will combine with the protons to form neutrons. There are no more electrons are protons left, just neutrons. This creates a neutron star. This star is so dense that a teaspoon of it weighs 12 trillion pounds on earth.  <br>When a neutron star is created, the energy released creates a supernova, the brightest star in the universe. This force generated fuses the heavier elements and creates the rest of the elements in the periodic table. All the elements created from the explosion of stars are spread out around the universe and create planets, such as the one we live in. <br> so every time you look at a skyscraper of use a paper clip, know that it required the power of billions of stars to exist. "
//     if(!(cpg==11)&& tableBool==true)
//     {
//       for (i = 0; i < 4; i++) { //do remove() and 3 intead of numofhide
//        table[i].style.display="none"
//        caption[i].style.display="none"
//         // document.querySelectorAll("#under")[i].innerHTML = ""
//         // document.querySelectorAll("#")[i].src = ""
//     }
    }

    // let bar=document.querySelector(nav).setAttribute("class","active")

    // document.getElementById('content').innerHTML=content
    // console.log(cpg)

}
function nav(green)
{
   for (i = 0; i < li.length; i++) {
                li[i].classList.remove('active')
            }
           green .classList.add('active')

}
 
let labels2 = ["S", "at", 'elec']
let options = ["choose", "middle", "Nucleus", "Orbit"]
// options.style.fontFamily="Open-Sans"
let inputSelect = ['Sn', 'atomic', 'electrons'];

function skill() {
  setTimeout(function () {
        $('#buy').css('position','relative');
        
       },10000)
    if (canConcept == 2) {
        document.querySelector("#coins").innerHTML = 0
    }
    window.speechSynthesis.cancel()
    atomImg.style.display = "block"
    //     document.querySelector("input").value=""
    // document.querySelector("input").style.borderColor=""

    //FOR THE CHECK SYSTEM and showing questions
    pg++
    antsFun(); //get answers and tip number(box)
    for (let i = 0; i < inputid.length; i++) {
if(i==boxNum &&noAnswer<=1 ) //make tip btn after hiding
         {
                  tipBtn.style.display="inline-block"
                  tipBtn.innerHTML="hint"
                
                  tipBtn.onclick=function(){tipFun()};
                 document.getElementById(inputid[i]).insertAdjacentElement("afterend", tipBtn)
                 tipBtn.style.position="relative" //computer screen
                  //  tipBtn.style.transform="translate(5vh,-20vh)"
canTip=false
  }
  console.log(boxNum+"box")
  
                 
    }
    switch (pg) { //different header number is fine but do '' BUT input box will still be there
        case 0:

            // ants = ["1","1","1/2000"]
            
            question = ["What is the mass of... "]

            squestion = ["Proton", "Neutron", "Electron"]

            select(["choose", "1amu", "10kg", "1/2000amu"]);
            break;
        case 1:
            // ants= ["Nucleus","Nucleus","Orbit"] 
            question = ["What is the charge of..."]
            squestion = ["Proton", "Neutron", "Electron"]
           

            select(["choose", "+1", "-1", "+1/2000", "none"]);      
              break;
        case 2:
            // ants=[ "1","0","-1"]
       
            question = ["location"]
            squestion = ["Proton", "Neutron", "Electron"]
            select(["choose", "middle", "Nucleus", "Orbit"]);
nav(navAtom)


            break;
        case 3:



            // ants = ["Co","11","11","4","9","Be","8","8","8"] 
            question = "Na has 11 protons and a mass of 23. What is the..."

            squestion = ["#of neutrons", "atomic#", "#of electrons"]
            input();
            //  ants = ["Sn  ","He ","Ca ","39 ", "32  ","Sn ","He ","Ca",] 
            //  question=["Element Symbol that has the atomic number of... ","atomic mass of (round to nearest whole number)..."] 
            // squestion=["1. 50","2. 2","3. 20","4. K"] 


            // question=["Element Symbol that has the atomic number of... ","atomic mass of (round to nearest whole number)..."] 
            //      squestion=["50","2","20","K"] 


            break;
        case 4:
            question = "An Element has an atomic# of 4 and 5 neutrons What is the..."
            squestion = ["#of protons", "Mass", "element symbol (look at periodic table above)"]
            input();

            break;
        case 5:
            question = "Match the Element symbol with the name"
            squestion = ["Na", "K", "Kr"]

     

            select(["choose", "Neon", "Sodium", "Krypton", "Potassium"])
            nav(navElements)  ;
            break;

        case 6:
            question = ["How many electrons does each atom need to gain or lose to be stable"]
            squestion = ["Oxygen", "Aluminum", "#of electrons to make<br> a full shell for the first 3 shells"]
selectM([['Choose','-6','+2','-2'],['Choose','-3','-5','+5'],['Choose','288','888','222']]);
          




            break;
        case 7:
            options = ["Choose", "Li", "Lithium", "Lth"]
            question = "In the Lewis dot diagram of lithium what is (see periodic table above)..."

            squestion = ["Symbol in the center", "#of valence electrons(outermost shell)", "#of valence electrons to be<br> stable(max electrons in outer shell)"]
         
select(["choose","1","-1","7","2"]);
            for (let i = 0; i < inputSelect.length; i++) {
                select_aux = document.createElement("select");
                select_aux.id = "Sn"; //id becomes "i" id in the inputselect array
                document.getElementById("Sn").replaceWith(select_aux); //replaces the same inputselect with a select input that has the same id
                for (let j = 0; j < options.length; j++) {
                    const opt = document.createElement("option");
                    opt.textContent = options[j];
                    opt.value = options[j];
                    document.getElementById("Sn").appendChild(opt);



                }

            }
            
            break;
        case 8:  //only one select
            question = "In this Lewis dot diagram what is the..." //sulfur
            squestion = ["Element name", "#of valence electrons ", "#of valence electrons to be stable"]
nav(navDiagrams) 
            input();
 options=["Choose","Selenium","Sulfur","Sulfide"]

            for (let i = 0; i < inputSelect.length; i++) {
                select_aux = document.createElement("select");
                select_aux.id = "Sn"; //id becomes "i" id in the inputselect array
                document.getElementById("Sn").replaceWith(select_aux); //replaces the same inputselect with a select input that has the same id
                for (let j = 0; j < options.length; j++) {
                    const opt = document.createElement("option");
                    opt.textContent = options[j];
                    opt.value = options[j];
                    document.getElementById("Sn").appendChild(opt);



                }

            }
            break;
            case 9:  //ionic
         question = "Match the formula with the name (Hint:look at column# for valence electrons)" 
            squestion = ["Carbonate"," Tin(IV) Nitrate","Magnesium Nitride"]
            selectM([['Choose','C','CO',"CO3"],['Choose','Sn(NO3)4','Sn4(NO3)',"Tn(NO3)4"],['Choose','Mg2N3','Mg3N2',"MgN"]]); 
            
             break;
            case 10:  //ionic
         
             question = "Match the name with the formula" //sulfur
            squestion = ["LiCl","SnO<sub>2</sub>","FeI<sub>2</sub>"]
            selectM(["Choose","Lithium Chloride","Tin(II) Oxide","Tin(IV)Oxide","Iron(II)Iodine","iron Iodine"]);
         selectM([['Choose','Lithium Chloride','Lithium Chlorine',"Lithium (I) Chloride"],['Choose','Tin(II) Oxide','Tin(IV) Oxide',"Tn(NO3)4"],['Choose',"Iron(II)Iodine","iron Iodine"]]); 
            //ants=["Lithium Chloride","Calcium Iodine","Iron(II)Iodine"]
             break;
            case 11:  //ionic
         
                     question = "Write the formula for the compound name " //sulfur
            squestion = ["Manganese(II)Oxide","Magnesium Nitride","Magnesium Chloride"]
           input();
                     //ants=["Mg3N2","KBr","MgCl2"]
                     break;
                     case 12:  //ionic
         
             input();
             question = "Polyatomic ionic compounds (Press Polyatomic ions button above)" //sulfur
            squestion = ["Calcium Nitrate","MnSO₄","Aluminum hydrogen carbonate"]
            options=["Choose","Manganese Sulfate","Manganese(II) Sulfate","Manganese(IV) Sulfate","Manganese sulfur trioxide"]
          for (let i = 0; i < inputSelect.length; i++) {
                select_aux = document.createElement("select");
                select_aux.id = "atomic"; //id becomes "i" id in the inputselect array
                document.getElementById("atomic").replaceWith(select_aux); //replaces the same inputselect with a select input that has the same id
                for (let j = 0; j < options.length; j++) {
                    const opt = document.createElement("option");
                    opt.textContent = options[j];
                    opt.value = options[j];
                    document.getElementById("atomic").appendChild(opt);



                }

            }
            nav(navIonic) 
                     //ants=["Ca(NO₃)₂","Manganese(IV) Sulfate","Al(HCO3)3"]
                     break;
                      case 13:  //covalent
         
             question = "Match the name with the formula" //sulfur
            squestion = ["PCl₃","Cl<sub>4</sub>Br<sub>5</sub>","CCl<sub>4"]
//ants=["phosphorus trichloride","Tetrachloride Pentabromide","Carbon ​​Tetrachloride"]
           selectM([["Choose","phosphorus trichloride","triphosphorus Chloride"],['Choose',"Tetrachloride Pentabromide",'Chlorine bromide','Chlorine(IV) bromide'],['Choose',"Carbon ​​Tetrachloride","Tetrachloride Pentabromide",'Carbon Chloride']]);
           break;
            case 14:  //covalent
         
             question = "Write the Formula for the name " //sulfur
            squestion = ["Carbon Dioxide","Hydrogen Chloride","dihydrogen (mono)oxide"]
//ants=["CO2","HCl","H2O"]
           input();
           break;
           case 15:
question = "Mix: Name the compound" //sulfur
            squestion = ["PbF<sub>4","BaF<sub>2","P<sub>2</sub>O<sub>5</sub>"]
            select(["Choose","Lead Fluoride","Lead(IV)Fluoride","Barium Fluoride","Barium Difluoride","diphosphorus pentoxide","diphosphorus heptaoxide"]);
            nav(navMole) 
            //ants=["Lead(IV)Fluoride","Barium Fluoride","diphosphorus pentoxide"]
            break;
             case 16: //equations
question = "Write the coefficients to balance &#9744;	K + &#9744;	H2O → &#9744;	KOH + H2" //sulfur
            squestion = ["left one","2nd one","last one"]
           input();
           //ants=["2","2","2"]
           break;
           case 17:
question = "Write the coefficients from left to right to balance each equation. Write '1' for spots that don't need coefficients" //sulfur
            squestion = ["&#9744;	Zn + &#9744;O2 → 	&#9744;ZnO","&#9744;Mg + &#9744;	HCl → &#9744;MgCl2 + &#9744;H2","&#9744;Al(NO<sub>3</sub>)<sub>3</sub> + &#9744;	NaOH → &#9744;Al(OH)<sub>3</sub> + &#9744;	NaNO<sub>3</sub>"]
            //  squestion = ["&#9744;	Zn + O2 → &#9744;	ZnO","Mg + &#9744;	HCl → MgCl2 + H2","Al(NO3)3 + &#9744;	NaOH → Al(OH)3 + &#9744;	NaNO3"]
           input();
           //ants=["202","0200","0303"] all 0 is 1
           break;
            case 18:
            question = "Write the coefficients from left to right to balance each equation."
            squestion = ["&#9744;	Bi(NO<sub>3</sub>)<sub>3</sub> + &#9744;	H<sub>2</sub>S → &#9744;Bi<sub>2</sub>S<sub>3</sub> + &#9744;	HNO<sub>3</sub>"," &#9744;C<sub>2</sub>H<sub>6</sub>O + &#9744;	O<sub>2</sub> → &#9744;	CO<sub>2</sub> + &#9744;	H<sub>2</sub>O","&#9744;	FeCl<sub>2</sub> + &#9744;	Na<sub>3</sub>PO<sub>4</sub> →  &#9744;Fe<sub>3</sub>(PO<sub>4</sub>)2 + &#9744;	NaCl"]
            // squestion = ["&#9744;	Bi(NO3)3 + &#9744;	H2S → Bi2S3 + &#9744;	HNO3","C2H6O + &#9744;	O2 → &#9744;	CO2 + &#9744;	H2O","&#9744;	FeCl2 + &#9744;	Na3PO4 → Fe3(PO4)2 + &#9744;	NaCl"]
            nav(navEquations) 
            input();
            break;
            //ants=["2306","0323","3206"]
              case 19: //reactions
question = "Name the type of reaction from these unbalanced equations" //sulfur
            squestion = ["Al(s) + F(g)&#8594 AlF3","PbCl2+AgNO3&#8594Pb(NO3)2+AgCl","C2H2+O2 &#8594 CO2+H2O"]
            select(["Choose","Synthesis","decomposition","single displacement","double displacement","combustion"]);
            //ants=["Synthesis","double displacement","","combustion"]
            break;
            case 20:
question = "Name the type of reaction from these skeleton equations"
            squestion = ["C4H12+O2 &#8594 H2O+CO2","Al2S3 &#8594 Al+S","Fe(s)+CuSO4 &#8594 Cu+FeSO4"]
             select(["Choose","Synthesis","decomposition","single displacement","double displacement","combustion"]);
ants=["combustion","decomposition","single displacement"]
boxNum=0
 tip="a combustion reaction always results to CO2+H2O. Single displacement is where one element bumps out another"
            break;
            case 21:
question = "Predict each reaction. Do not write state or brackets "
            squestion = ["Fe(s)+CuSO4(aq) &#8594","Pb(NO3)2+KI &#8594","H2O2 &#8594"]
             input();
             ants=["Cu+FeSO4","KNO3+PbI2","H2O+O2"]
 boxNum=0
tip="when atoms combine, use the criss cross rule to find the product. For displacement reactions remember that like takes like."
 
    }


    

    
    document.getElementById("question").innerHTML = question;

    // for (let i = 0; i < question.length; i++){
    //   document.getElementById(question2[i]).innerHTML=question[i];
    //   document.getElementById(question2[i]).style.color='greenyellow'
    // }

    for (let i = 0; i < labels2.length; i++) {
        document.getElementById(labels2[i]).innerHTML = (`<strong>${i+1}</strong>`) +
            "." + "&nbsp;" + squestion[i];
        document.getElementById(labels2[i]).style.color = 'blue'
        //  document.getElementById(labels2[i]).style.width="100px"
    }




    console.log(pg + "pg")

}
function nextTip()
{
antsFun(); //get answers and tip number(box)
tipBool=false
tipPress=false
    for (let i = 0; i < inputid.length; i++) {
if(i==boxNum &&noAnswer<=1 ) //make tip btn after hiding
         {
                  tipBtn.style.display="inline-block"
                  tipBtn.innerHTML="Hint"
                
                  tipBtn.onclick=function(){tipFun()};
                 document.getElementById(inputid[i]).insertAdjacentElement("afterend", tipBtn)
                 tipBtn.style.position="relative" //computer screen
                  //  tipBtn.style.transform="translate(5vh,-20vh)"

  }
  console.log(boxNum+"box")
  
                 
    }
}
let noTip=true
function tipFun()
                 {
                   if(8<pg<12)
      {
        underAnswer.style.width="560px"
        
      }
                   if(totalScore<0.5) //say not enough gems for 5 seconds
                   {
                     noTip=true
                   let nope=document.createElement("p")
                   nope.innerHTML="you need more gems"
                   nope.style.fontSize="40px"
                   nope.style.color="red"
                   nope.style.display="block"
                  
                   tipBtn.insertAdjacentElement("afterend",nope)
                   setTimeout(() => {nope.style.display="none"}, 5000);
                   
                   
                   }
                   else{
                  totalScore-=0.5
                  noTip=false
                   }
                   
                   gemCount.innerHTML = totalScore
                   
                   for(i=0;i<inputid.length;i++)
                   {
             if(i==boxNum && document.getElementById(inputid[i]).value == ants[i] && checkBool==true)
                for (i = 0; i < 3; i++) { //do remove() and 3 intead of numofhide
   
        document.querySelectorAll("#under")[i].src="" //give img id and do remove() if no work
    }
                   }
                   
          tipPress=true
          if(noTip==false)
          {
           tipBtn.style.display="none" //hide btn
          }
            underAnswer.id="under"
         underAnswer.style.width="130px"
       
         underImg.replaceWith(underAnswer) //show tip
        
  underAnswer.innerHTML = "<strong>tip:</strong> "+tip
  if(noAnswer<=1 &&noTip==false)
  {
           underAnswer.style.display = "inline-block"
           document.getElementById(inputid[boxNum]).insertAdjacentElement("afterend", underAnswer)
          underAnswer.style.transform = "translate(-15vw,15vh)"
          underAnswer.style.position="absolute"
         
           if(innerWidth < 1068)
           {  underAnswer.style.position="relative"
           underAnswer.style.transform = "translate(0vw,0vh)"
           tipBtn.style.transform="translate(0px,0vh)"
           }
           if(innerHeight < 709)
           {  
           underAnswer.style.transform = "translate(-15vw,20vh)"
           
           }
                   }
                   
          }
            function tipHide()
{
  console.log(tipBool,tipPress)
           if(tipBool==true && tipPress==true) //if tip is already shown, cause question is wrong
         {
        underAnswer.style.display="none"
         }
  }      
function antsFun()
    {
     
    switch (pg) { 
        case 0:

            ants = ["1amu", "1amu", "1/2000amu"]
boxNum=2
tip="Electrons are so light they don't count towards the total mass"
            question = ["What is the atomic mass unit (amu) of... "]
          
            //  squestion=["Proton","Neutron","Electron","Proton","Neutron","Electron","Proton","Neutron","Electron"] 


            break;
        case 1:

            question = ["What is the charge of..."]
            ants = ["+1", "none", "-1"]
            boxNum=0
tip="Total charge of an atom is 0 and there are as many protons as there are neutrons."
            break;
        case 2:
        boxNum=4
            ants = ["Nucleus", "Nucleus", "Orbit"]
            question = ["location"]
 boxNum=0
tip="What is the middle of an atom called?"
            break;
        case 3:
        boxNum=0
            ants = ["12", "11", "11"]
              tip="Protons+Neutrons=Mass"
            // question=["Na has 11 protons and an mass of 23. What is the...","An atom has an atomic# of 4 and 5 neutrons What is the...", "Match the element symbol with the name"] 

            // squestion=["#of neutrons","atomic#","#of electrons", "#of protons","Mass","element symbol", "Na", "K", "Kr"] 


            break;

        case 4:
         boxNum=0
            ants = ["4", "9", "Be"]
              tip="atomic#=#of protons"
            break;

        case 5:
            ants = ["Sodium", "Potassium", "Krypton"]
            boxNum=0
            tip="see periodic table"
            break;

        case 6:
            ants = ['+2', "-3","288"]
            boxNum=0
            tip="Look at the column# to find the #of valence electrons the atom has. The row# is the #of orbits an atom has. "
            // question=["In the Bohr diagram how many electrons make a full shell in the... ", "In the Lewis dot diagram of lithium what is (see periodic table)...", "In this Lewis dot diagram what is the..." ] //sulfur
            // squestion=["1st orbit (innermost)","2nd orbit","3rd orbit","in the center","#of valence electrons(outermost shell)","#of valence electrons to be stable(max electrons in outer shell)","Element name","#of valence electrons ","#of valence electrons to be stable"] 


            //   const lewisQuestion=document.createElement("img");
            //    lewisQuestion.src = 'lewis.png';
            //  document.getElementById("question3").appendChild(lewisQuestion)
            //const warning = document.createElement("p");
            //   //     warning.innerText = 'you need to get 9 coins to continue';
            //   //  check.appendChild(warning)
            break;
        case 7:
            ants = ["Li", "1", "-1"]
            boxNum=2
            tip="Fastest way to a full Orbit?<img src='https://www.clipartmax.com/png/middle/186-1865835_a-bohr-diagram-of-lithium-sport-club-internacional.png'>" //lewis diagram of lithium
            
            //       ants = ["Carbon", "Chlorine", "Bromine",'Br',"Li","Sc","Gives electrons to other atom","recieves electrons","" ] 
            //        question=["", "Chlorine", "Select the true statements", "Helium",'Br',"Li","Sc" ] 

            // ants = ["Carbon", "Chlorine", "Bromine",'Br',"Li","Sc","2","8","8" ] 

            break;
        case 8:
        
            ants = ["Sulfur", "6", "2"]
            boxNum=2
            tip="Fastest way to a full orbit?" 
break;
            case 9:  //ionic 
            //  question = "Match the name with the formula"
            // squestion = ["Magnesium Nitride","Potassium Oxide","Potassium Iodine"]
             ants=["CO3","Sn(NO3)4","Mg3N2"]
             boxNum=0
             
              tip="<b>Question 1.</b>Carbonate is a polyatomic ion made of carbon and oxygen, click on the green button above and find it. <p style= 'transform:translate(25vw,-20vh)'> <b>Q2.</b>Nitrate is a polyatomic ion with a 1- charge. Tin has a 4+ charge. criss cross the charges</p><p style= 'transform:translate(50vw,-36vh)'><b>Q3.</b> Mg is in column 2 so it loses 2 electrons to have a full orbit Mg<sup>2+</sup> N<sup>3-</sup> criss cross&#8594; </p>"
//  tipArea.insertAdjacentElement("afterend", tip)
if(innerWidth<1068)
              {
                  tip="<b>Question 2.</b> Mg is in column 2 so it loses 2 electrons to have a full orbit Mg<sup>2+</sup> N<sup>3-</sup> criss cross&#8594;<p ><b>Q3.</b>Nitrate is a polyatomic ion with a 1- charge. Tin has a 4+ charge. criss cross the charges</p>"
              }

             break;
             case 10:
             
             
                boxNum=1
             ants=["Lithium Chloride","Tin(IV) Oxide","Iron(II)Iodine"]
               tip="O has a charge of 2+, so if we cross the 2+ over, it should be Sn<sub>2</sub>. The reaon there is only 1 Sn is because the subscripts were simplified. Sn<sub>2</sub> O<sub><b>4</b></sub> simplified is Sn<sub>1</sub> O<sub>2</sub> So Sn has a charge of 4+, it was just simplified.<p style='transform:translate(20vw,-29vh)'><b>Q3.</b>Iron is also a transition metal and multivalent, so the charge is written.</p>"
              //  underAnswer.style.width="130px" 
              if(innerWidth<1068)
              {
                tip="<b>Hint:</b>O has a charge of 2+, so if we cross the 2+ over, it should be Sn<sub>2</sub>. The reaon there is only 1 Sn is because the subscripts were simplified. Sn<sub>2</sub> O<sub><b>4</b></sub> simplified is Sn<sub>1</sub> O<sub>2</sub> So Sn has a charge of 4+, it was just simplified.<p ><b>Q3.</b>Iron is also a transition metal and multivalent, so the charge is written.</p>"
              }
              
break;
case 11: //ionic
ants=["MnO","Mg3N2","MgCl2"]
   boxNum=0
  tip="<b>Question 1.</b>(II)=2+ charge, Mn<sup>2+</sup> O<sup>2-</sup> criss cross and simplify <p style='transform:translate(28vw,-7vh)'><b>Q2. Hint: </b>Mg2+ N3- </p><p style='transform:translate(56vw,-10vh)'> <b>Q3.</b>Mg<sup>2+</sup> C<sup>1-</sup> criss cross</p>"
break;
case 12:
ants=["Ca(NO3)2","Manganese(II) Sulfate","Al(HCO3)3"]
  boxNum=0
tip="Rules for naming and writing formulas are the same for Polyatomic ions. <b> Question 1.</b>Ca<sup>2+</sup> + NO3<sup>1-</sup> criss cross.<p style='transform:translate(25vw,-9vh)'> <b>Q2.Hint:</b>SO₄ has a charge of 2-. Manganese is multivalent so write the charge of sulfate as a roman numeral</p><p style='transform:translate(55vw,-21vh)'> <b>Q3.Hint:</b> Aluminum has a charge of 3+. hydrogen carbonate has a charge of 1-. criss cross the charges</p>"
if(innerWidth<1068)
              {
               tip="Rules for naming and writing formulas are the same for Polyatomic ions.<p> <b> Question 1.</b>Ca<sup>2+</sup> + NO3<sup>1-</sup> criss cross.</p><p > <b>Q2.Hint:</b>SO₄ has a charge of 2-. Manganese is multivalent so write the charge of sulfate as a roman numeral</p><p > <b>Q3.Hint:</b> Aluminum has a charge of 3+. hydrogen carbonate has a charge of 1-. criss cross the charges</p>"
              }
break;
case 13: //covalent
ants=["phosphorus trichloride","Tetrachloride Pentabromide","Carbon ​​Tetrachloride"]
   boxNum=1
 tip="4=tetra 5=penta, don't criss cross or simplify for covalent bonds"
break;
case 14:
ants=["CO2","HCl","H2O"]
boxNum=2
 tip="mono (1) doesn't have to be written. remember to change the end of the last element to ide"
break;

case 15: //mix
ants=["Lead(IV)Fluoride","Barium Fluoride","diphosphorus pentoxide"]
boxNum=0
 tip="Lead is multivalent so the charge is written"
 break;
 case 16: //equations
ants=["2","2","2"]
boxNum=0
 tip="Count the atoms on each side first and get a peice of paper and make a table, once side for reactants and another for products, then find which atoms need to be balanced. Start by getting the odd number atoms to even numbers."
 break;
 case 17: //equations
// ants=["22","2","33"]
ants=["212","1211","1313"]

boxNum=1
 tip="Balanced: each side will have 1 Mg 2 Cl and 2 H. Remember to count each seperate atom in polyatomic ions"
 break;
 case 18:
 boxNum=0
//  ants=["236","323","326"]
 ants=["2316","1323","3216"]
 tip="Balanced: each side will have 6N 6O 2Bi 6H and 3S.Remember to count each seperate atom in polyatomic ions"
 break;
case 19:
 ants=["Synthesis","double displacement","combustion"]
 boxNum=1
 tip="Metal takes non metal and nonmetal takes nonmetal"
 break;
case 20:
 ants=["combustion","decomposition","single displacement"]
 boxNum=0
 tip="a combustion reaction always results to CO2+H2O."
 break;
    }
}

function selectM(options)
{
for (let i = 0; i < inputSelect.length; i++) {

                select_aux = document.createElement("select");
                select_aux.id = inputSelect[i]; //id becomes "i" id in the inputselect array

                document.getElementById(inputSelect[i]).replaceWith(select_aux); //replaces the same inputselect with a select input that has the same id
                for (let j = 0; j < 4; j++) {
              
                    const opt = document.createElement("option");
                    
                    opt.textContent = options[i][j];
                    opt.value = options[i][j];
                     
                    document.getElementById(inputSelect[i]).appendChild(opt);

              
                }

            }

}
function select(options)
{
for (let i = 0; i < inputSelect.length; i++) {

                select_aux = document.createElement("select");
                select_aux.id = inputSelect[i]; //id becomes "i" id in the inputselect array

                document.getElementById(inputSelect[i]).replaceWith(select_aux); //replaces the same inputselect with a select input that has the same id
                for (let j = 0; j < options.length; j++) {
              
                    const opt = document.createElement("option");
                    
                    opt.textContent = options[j];
                    opt.value = options[j];
                     
                    document.getElementById(inputSelect[i]).appendChild(opt);

              
                }

            }

}
function input()
{
for (let i = 0; i < inputSelect.length; i++) {

                input_aux = document.createElement("input");
                input_aux.type = "text";
                input_aux.placeholder = "answer" //blame this if its not workin
                document.getElementById(inputSelect[i]).replaceWith(input_aux);
                input_aux.id = inputSelect[i];
            }
}


// .forEach(radio=> {
//   if(check==true)
//   {
// if (radio.value===answer)
// {
// console.log('boo');
//       }


//       }


//       });




//           const labelst = document.getElementsByTagName("label");
//    let labelsid = []
// for(let i=0; i<labelst.length; i++)
// {
//   labelsid[i]+=labelst[i].id;

//     }
//     console.log(labelsid)
// let lowAnts = [] //loop will place lower case values of ants in here
//   // if(ants.toLowercase())
//   for (let i= 0; i < ants.length; i++){
//       lowAnts[i] = ants[i].toLowerCase() ;




const labels = document.getElementsByTagName("label")
const answers = document.getElementById("under");
const bonus = document.querySelector(".bonus");
const recap = document.querySelector("#recap");
const body = document.getElementById("body");
const heading1 = document.getElementsByTagName("h1")[0];
const heading3 = document.getElementsByTagName("h3")[0];
// const nQuestion = document.getElementById('nextQuestion')
// const nText = document.querySelector('.next')

const buttons =  document.querySelector('button')
const titles = [heading3, answers, bonus, recap]
const time = document.getElementById("time");
const button = document.getElementById("dark-btn");

//  console.log(labels.length);
let dark = false;

function darkMode() {
    if (dark == false) {

        
        for (let i = 0; i < buttons.length; i++) {
         
            buttons[i].classList.add("dark-btn")
//             buttons.style.backgroundColor="white"
// buttons.style.color="darkblue"
// buttons.style.boxShadow="copy and paste"
        }
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = "lightblue"
        }

        let i = 0;
        while (i < titles.length) {
            titles[i].style.color="white"
            i++;
        }


        body.setAttribute("class", "dark");
        button.style.backgroundColor = "white";
        button.style.color = "rgb(88, 119, 255)";

        content.style.color = "greenyellow"
        dark = true;



    } else {
        

        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("dark-btn")
        }
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = "blue"
        }

        let i = 0;
        while (i < titles.length) {
            titles[i].style.color="";
            i++;
        }
        answers.style.color = "white"
        body.setAttribute("class", "");

        button.style.backgroundColor = "rgb(88, 119, 255)";
        button.style.color = "white";
       
        dark = false;
    }
    console.log(dark)
}




// let minute = 5;
//   const resetButton=document.querySelector('#resetButton')
//   resetButton.addEventListener('click', (evt)=>
//   {   



//    const timer= setInterval(() =>{
//          document.getElementById("stopWatch").innerHTML=minute
//       if (minute<=0)
// {minute="hi"
//   }
//     minute--;

//   }, 1000)
// evt.preventDefault
//     });


//     const nextTimer=document.querySelector('#next')
//   nextTimer.addEventListener('click', ()=>
//   {   
// const timer= setInterval(() =>{
//          document.getElementById("stopWatch").innerHTML=minute
//       if (minute<=0)
// {minute="hi"
//   }
//     minute--;

//   }, 1000)
// evt.preventDefault
//     });




//METAS LOOK ATT THEM THERES 3
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>




let canSpeak = true

var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList'); //get id of voice selecter
var btnSpeak = document.querySelector('#btnSpeak');
var btnStop = document.querySelector('#btnStop');
var btnReset = document.querySelector('#btnReset');
var synth = window.speechSynthesis;
var voices = []; //voices array
// let read=content

PopulateVoices(); //get voices
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(content.innerText);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name'); //get voice selected. then gets selected options from data-lang and name
    voices.forEach((voice) => { //loop around each voice (item in array) in the populate voices function
        if (voice.name === selectedVoiceName) { //if name of voice is the selected voice name
            toSpeak.voice = voice; //voice to speak is set to the   
        }
    });
toSpeak.rate=document.querySelector("#voiceSpeed").value;
    synth.speak(toSpeak);
    window.speechSynthesis.resume();

});
btnStop.addEventListener('click', () => {

    window.speechSynthesis.pause();
});
btnReset.addEventListener('click', () => {

    window.speechSynthesis.cancel();
});
function PopulateVoices() {
    voices = synth.getVoices();
    // var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang); //these 2 are setting name and language for the select voice
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    // voiceList.selectedIndex = selectedIndex;
}