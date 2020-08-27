
document.getElementById("scorecard").style.visibility = "hidden";
//document.getElementById("startpage").style.visibility = "hidden";
var start = document.getElementById("start");

var qn = document.getElementById("sn");

class contents {
    
    constructor() {
    this.question = " ";

        
    this.img = null;
    this.a = " ";
    this.b = " ";
    this.c = " ";
    this.d = " ";

    this.ans = " ";
    this.att = 0;} // 0-not attended 1-wrong 2-crct
    

}

var n = 10;
var c = new Array;
for (let i = 0; i < n; i++){
    c.push(new contents);
}

c[0].question = "The ongoing Covid-19 pandemic is caused by ";
c[0].a = "SARS-Cov";
c[0].b = "MERS-CoV";
c[0].c = "SARS-Cov2";
c[0].d = "ZEBOV";
c[0].ans = "c";

c[1].question = "Covid-19 has most likey originated from ";
c[1].a = "Beijing";
c[1].b = "Wuhan";
c[1].c = "Cairo";
c[1].d = "Nanjing";
c[1].ans = "b";

c[2].question = "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity";
c[2].a = "P-cell";
c[2].b = "D-Cell";
c[2].c = "T-Cell";
c[2].d = "Endothelial Cells";
c[2].ans = "c";

c[3].question = "Mild Symptoms of Novel coronavirus are";
c[3].a = "Fever";
c[3].b = "Cough";
c[3].c = "Shortness of breath";
c[3].d = "All the above";
c[3].ans = "d";

c[4].question = "How many vaccine candidates for COVID-19 have been proposed?";
c[4].a = "25";
c[4].b = "120+";
c[4].c = "100";
c[4].d = "50";
c[4].ans = "b";

c[5].question = "Which of the following is a mutation of the novel coronavirus";
c[5].a = "D416G";
c[5].b = "D614G";
c[5].c = "DG661";
c[5].d = "FD616";
c[5].ans = "b";

c[6].question = "The only continent with no confirmed cases of Covid-19 is";
c[6].a = "South America";
c[6].b = "Africa";
c[6].c = "Antartica";
c[6].d = "Oceania";
c[6].ans = "c";

c[7].question = "The total number of Covid-19 cases as of August end is";
c[7].a = "10 million";
c[7].b = "7 million";
c[7].c = "49 million";
c[7].d = "24 million";
c[7].ans = "d";

c[8].question = "Mortality rate of Covid-19 in India is?";
c[8].a = "1.58%";
c[8].b = "2.43%";
c[8].c = "0.97%";
c[8].d = "3.51%";
c[8].ans = "a";

c[9].question = " A disease that can be transmitted to humans from animals is";
c[9].a = "hypnotic";
c[9].b = "stenotic";
c[9].c = "zoonotic";
c[9].d = "biotic";
c[9].ans = "c";




//var c1 = new contents;

//c1.question = "helllo";
//q.innerHTML = "qaa";

var btn = document.querySelector('#btn');
var pre = document.getElementById('previous');
var next = document.getElementById('next');
var res = document.getElementById('ress');
var reset = document.getElementById('retry');

var aa = document.getElementById('a');
var bb = document.getElementById('b');
var cc = document.getElementById('c');
var dd = document.getElementById('d');




document.getElementById("main").style.visibility = "hidden";

start.onclick = function(){
 var q = document.getElementById('question');
var page = document.getElementById('wrapper');

var form = document.getElementById('options');

var cpage = 0; //current page
var score = 0;
var done = 0; // number of questions attended
    
    
    
    document.getElementById("startpage").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "visible";

res.style.visibility = "hidden";

var selectedvalue = null;


btn.onclick = function(){
    //alert("insubmit");
   // console.log("sub");
    let opt = document.querySelectorAll('input[name="choice"]');
    let flag = 0;
    //let selectedvalue;
    

    
    
    for(var j of opt){
        
        if(j.checked){
            //alert(j.value);
            selectedvalue = j.value;
            j.checked = false;
            flag = 1;
            btn.disabled = true;
            //break;
        }
        //alert("disabling");
        j.disabled = true;
        
        
    }
    if(!flag)
        {
            alert("Please select an answer");
            for(var j of opt)
                {
                    j.disabled = false;
                }
        }
    
    else {
        ++done;
    if(c[cpage].ans == selectedvalue)
        {      //alert(selectedvalue);
               //alert(c[cpage].ans);
            c[cpage].att = 2;
              ++score;
                page.style.background = "green";
         //alert("crct");
        }
    else {
        c[cpage].att = 1;
        page.style.background = "red";
    }
   // alert(cpage);
    if(cpage == 9 && done==10)
        {   //alert("reach");
            res.style.visibility = "visible";
        }
   // alert(selectedvalue);
}
}

//for(let i = 0;i<10;i++)
  //  {

  //  }



pre.onclick = function(){   
    

    
   page.style.background = "#FFE4B5";
    
    
    if(cpage == 0)
        {
            cpage = 0;
        }
    else{
        --cpage;
        q.innerHTML = c[cpage].question;    
        
    }
             if(c[cpage].att !=0)
        {
            btn.disabled = true;
        }
    else{
        btn.disabled = false;
    }
    
    qn.innerHTML = "Q"+(cpage+1);
    
    
    aa.innerHTML = c[cpage].a;
    bb.innerHTML = c[cpage].b;
    cc.innerHTML = c[cpage].c;
    dd.innerHTML = c[cpage].d;
    
    
    
    let opt = document.querySelectorAll('input[name="choice"]');
        for(let j of opt){
        
        if(j.checked){
            j.checked = false;
            break;
        }
    }
//
                if(c[cpage].att ==0)
            {
             for(var k of opt){
                 //alert("not");
                 k.disabled = false;
                }
            }
        else{
            //alert("t");
               for(var k of opt){
               k.disabled = true;
         }
        }     


}

next.onclick = function(){

    page.style.background = "#FFE4B5";
   // j.checked = false;
    //alert(c[cpage].att);

    if(cpage == 9)
        {
           cpage = 9;        }
    else {
        ++cpage;
        q.innerHTML = c[cpage].question;
        
    }
    
        
              if(c[cpage].att !=0)
        {
            btn.disabled = true;
        }
    else{
        btn.disabled = false;
    }
    
    
    
    
    qn.innerHTML = "Q"+(cpage+1);
    
    aa.innerHTML = c[cpage].a;
    bb.innerHTML = c[cpage].b;
    cc.innerHTML = c[cpage].c;
    dd.innerHTML = c[cpage].d;
    
            let opt = document.querySelectorAll('input[name="choice"]');
        for(let j of opt){
        
        if(j.checked){
            j.checked = false;
            break;
        }
    }
    
            if(c[cpage].att ==0)
            {   //alert("not");
             for(var k of opt){
                 k.disabled = false;
                }
            }
        else{ //alert("t");
               for(var k of opt){
               k.disabled = true;
         }
        }    
    

}

res.onclick = function(){ //res-result
    
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("scorecard").style.visibility = "visible";
    
    var scorecard = document.getElementById("sc");
    scorecard.innerHTML = "Score: "+score;
    
    
}

reset.onclick = function(){
    
    location.reload()
    
   /* document.getElementById("main").style.visibility = "visible";
    document.getElementById("scorecard").style.visibility = "hidden";
    document.getElementById("startpage").style.visibility = "visible";
    
    for(let i =0;i<10;i++)
        {
            c[i].att = 0;
        }
    cpage = 0;
    score = 0;
    done = 0;*/
    
    
    
}
}

















