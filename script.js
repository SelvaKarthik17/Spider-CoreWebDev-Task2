document.getElementById("scorecard").style.visibility = "hidden";
document.getElementById("username").style.visibility = "hidden";
document.getElementsByClassName("slide")[0].style.visibility = "hidden";

var start = document.getElementById("start");

var qn = document.getElementById("sn");


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

start.onclick = function () {

    document.getElementsByClassName("slide")[0].style.visibility = "hidden";

    var tflag = 0;
    var ivl = 0;

    function timer() {

        var time1 = new Date();
        var ms1 = time1.getTime();
        var tt = 100; //100 seconds timer
        function timeCount() {
            var time2 = new Date();
            var ms2 = time2.getTime();
            var ms = ms2 - ms1;
            ss = ms / 1000;
            ms = ms % 1000;
            document.getElementById("time").innerHTML = Math.round(tt - ss);
            if (ss >= 100 || tflag == 1) {
                window.clearInterval(ivl);
                res.click();

            }


        }

        ivl = window.setInterval(timeCount, 1000);
    }





    class contents {

        constructor() {
            this.question = " ";


            this.img = null;
            this.a = " ";
            this.b = " ";
            this.c = " ";
            this.d = " ";

            this.ans = " ";
            this.att = 0;
        } // 0-not attended 1-wrong 2-crct


    }

    var n = 10;
    var c = new Array;
    for (let i = 0; i < n; i++) {
        c.push(new contents);
    }


    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;


        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    l = shuffle(l);

    c[l[0]].question = "The ongoing Covid-19 pandemic is caused by ";
    c[l[0]].a = "SARS-Cov";
    c[l[0]].b = "MERS-CoV";
    c[l[0]].c = "SARS-Cov2";
    c[l[0]].d = "ZEBOV";
    c[l[0]].ans = "c";

    c[l[1]].question = "Covid-19 has most likey originated from ";
    c[l[1]].a = "Beijing";
    c[l[1]].b = "Wuhan";
    c[l[1]].c = "Cairo";
    c[l[1]].d = "Nanjing";
    c[l[1]].ans = "b";

    c[l[2]].question = "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity";
    c[l[2]].a = "P-cell";
    c[l[2]].b = "D-Cell";
    c[l[2]].c = "T-Cell";
    c[l[2]].d = "Endothelial Cells";
    c[l[2]].ans = "c";

    c[l[3]].question = "Mild Symptoms of Novel coronavirus are";
    c[l[3]].a = "Fever";
    c[l[3]].b = "Cough";
    c[l[3]].c = "Shortness of breath";
    c[l[3]].d = "All the above";
    c[l[3]].ans = "d";

    c[l[4]].question = "How many vaccine candidates for COVID-19 have been proposed?";
    c[l[4]].a = "25";
    c[l[4]].b = "120+";
    c[l[4]].c = "100";
    c[l[4]].d = "50";
    c[l[4]].ans = "b";

    c[l[5]].question = "Which of the following is a mutation of the novel coronavirus";
    c[l[5]].a = "D416G";
    c[l[5]].b = "D614G";
    c[l[5]].c = "DG661";
    c[l[5]].d = "FD616";
    c[l[5]].ans = "b";

    c[l[6]].question = "The only continent with no confirmed cases of Covid-19 is";
    c[l[6]].a = "South America";
    c[l[6]].b = "Africa";
    c[l[6]].c = "Antartica";
    c[l[6]].d = "Oceania";
    c[l[6]].ans = "c";

    c[l[7]].question = "The total number of Covid-19 cases as of August end is";
    c[l[7]].a = "10 million";
    c[l[7]].b = "7 million";
    c[l[7]].c = "49 million";
    c[l[7]].d = "24 million";
    c[l[7]].ans = "d";

    c[l[8]].question = "Mortality rate of Covid-19 in India is?";
    c[l[8]].a = "1.58%";
    c[l[8]].b = "2.43%";
    c[l[8]].c = "0.97%";
    c[l[8]].d = "3.51%";
    c[l[8]].ans = "a";

    c[l[9]].question = " A disease that can be transmitted to humans from animals is";
    c[l[9]].a = "hypnotic";
    c[l[9]].b = "stenotic";
    c[l[9]].c = "zoonotic";
    c[l[9]].d = "biotic";
    c[l[9]].ans = "c";





    document.getElementById("username").style.visibility = "visible";
    var namebtn = document.getElementById('namebtn');
    var name = document.getElementById('un');

    namebtn.onclick = function () {

        if (!name.value) {
            alert("Enter a valid username");

        } else {
            qn.innerHTML = "Q" + (cpage + 1);
            q.innerHTML = c[cpage].question;

            aa.innerHTML = c[cpage].a;
            bb.innerHTML = c[cpage].b;
            cc.innerHTML = c[cpage].c;
            dd.innerHTML = c[cpage].d;

            timer();
            document.getElementById("main").style.visibility = "visible";
            document.getElementById("username").style.visibility = "hidden";
            document.getElementsByClassName("slide")[0].style.visibility = "visible";
        }

    }





    var q = document.getElementById('question');
    var page = document.getElementById('wrapper');

    var form = document.getElementById('options');

    var cpage = 0; //current page
    var score = 0;
    var done = 0; // number of questions attended



    document.getElementById("startpage").style.visibility = "hidden";

    res.style.visibility = "hidden";

    var selectedvalue = null;


    btn.onclick = function () {

        let opt = document.querySelectorAll('input[name="choice"]');
        let flag = 0;


        for (var j of opt) {

            if (j.checked) {
                selectedvalue = j.value;
                j.checked = false;
                flag = 1;
                btn.disabled = true;
            }

            j.disabled = true;


        }
        if (!flag) {
            alert("Please select an answer");
            for (var j of opt) {
                j.disabled = false;
            }
        } else {

            qnav[cpage].style.color = "brown";

            ++done;
            if (c[cpage].ans == selectedvalue) {
                c[cpage].att = 2;
                ++score;
                page.style.background = "green";
            } else {
                c[cpage].att = 1;
                page.style.background = "red";
            }

            if (cpage == 9 && done == 10) {
                tflag = 1;
            }
        }
    }




    pre.onclick = function () {



        page.style.background = "#FFE4B5";


        if (cpage == 0) {
            cpage = 0;
        } else {
            --cpage;
            q.innerHTML = c[cpage].question;

        }
        if (c[cpage].att != 0) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }

        qn.innerHTML = "Q" + (cpage + 1);


        aa.innerHTML = c[cpage].a;
        bb.innerHTML = c[cpage].b;
        cc.innerHTML = c[cpage].c;
        dd.innerHTML = c[cpage].d;



        let opt = document.querySelectorAll('input[name="choice"]');
        for (let j of opt) {

            if (j.checked) {
                j.checked = false;
                break;
            }
        }

        if (c[cpage].att == 0) {
            for (var k of opt) {
                k.disabled = false;
            }
        } else {
            for (var k of opt) {
                k.disabled = true;
            }
        }


    }

    next.onclick = function () {

        page.style.background = "#FFE4B5";

        if (cpage == 9) {
            cpage = 9;
        } else {
            ++cpage;
            q.innerHTML = c[cpage].question;

        }


        if (c[cpage].att != 0) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }




        qn.innerHTML = "Q" + (cpage + 1);

        aa.innerHTML = c[cpage].a;
        bb.innerHTML = c[cpage].b;
        cc.innerHTML = c[cpage].c;
        dd.innerHTML = c[cpage].d;

        let opt = document.querySelectorAll('input[name="choice"]');
        for (let j of opt) {

            if (j.checked) {
                j.checked = false;
                break;
            }
        }

        if (c[cpage].att == 0) {
            for (var k of opt) {
                k.disabled = false;
            }
        } else {
            for (var k of opt) {
                k.disabled = true;
            }
        }


    }



    var qnav = document.getElementsByClassName("qn");
    var qq = new Array();

    for (let i = 0; i < n; i++) {
        qq.push = qnav[i];
        qnav[i].style.color = "purple";
        qnav[i].onclick = function () {
            temp = cpage;
            if (i > cpage) {
                for (let j = 0; j < (i - temp); j++) {
                    next.click();
                }
            } else if (i < cpage) {
                for (let j = 0; j < (temp - i); j++) {
                    pre.click();
                }
            }


        }

    }

    res.onclick = function () { //res-result

        if (localStorage.getItem('highscore')) {
            let hs = parseFloat(localStorage.getItem('highscore'));

            if (score >= hs) {
                let d = new Date();
                localStorage.setItem('highscore', score);
                localStorage.setItem('hsname', name.value);
                localStorage.setItem('hsdate', JSON.stringify(d));
            }

        } else {
            let d = new Date();
            localStorage.setItem('highscore', score);
            localStorage.setItem('hsname', name.value);
            localStorage.setItem('hsdate', JSON.stringify(d));

        }

        let highscore = parseFloat(localStorage.getItem('highscore'));
        let hsname = localStorage.getItem('hsname');
        let hsdate = JSON.parse(localStorage.getItem('hsdate'));


        document.getElementById("hss").innerHTML = "High score: " + highscore;
        document.getElementById("hsn").innerHTML = "by: " + hsname;
        document.getElementById("hst").innerHTML = "on: " + hsdate;


        document.getElementById("main").style.visibility = "hidden";
        document.getElementById("scorecard").style.visibility = "visible";

        var scorecard = document.getElementById("sc");
        scorecard.innerHTML = name.value+"\'s "+"Score: " + score;


    }

    reset.onclick = function () {

        location.reload()


    }
}
