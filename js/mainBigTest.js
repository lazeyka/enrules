window.onload=function(){numberSentence(),correctWords(),tableTest(),enter(),cursor();var e=document.querySelector(".arrow"),n=document.querySelector(".bigHome"),r=document.querySelector("#h1Name"),s=document.querySelector(".psevBtnBack"),t=document.querySelector("#btnNext"),a=document.querySelector("#btnBack"),o=document.querySelector("#hint"),l=document.querySelector("#testResult"),i=(document.querySelector("#nextTest"),document.querySelector("#restartTest")),c=document.querySelector("#testList"),u=document.querySelector(".numbQuestion"),d=document.querySelector(".tableTestMobile").children,b=document.querySelector(".numbQuestion"),y=0;t.onclick=function(){var e=document.querySelectorAll(".ansver");y!=d.length-1&&(d[y].style.display="none",d[++y].style.display="block",e[y].focus(),b.innerHTML=y+1+"/20",0<y&&(s.style.display="none",a.style.display="block"),y==d.length-1)&&(t.style.display="none",l.style.display="block")},a.onclick=function(){var e=document.querySelectorAll(".ansver");0!=y&&(d[y].style.display="none",d[--y].style.display="block",e[y].focus(),b.innerHTML=y+1+"/20",t.style.display="block",l.style.display="none",0==y)&&(s.style.display="block",a.style.display="none")},document.getElementById("testResult").onclick=function(){e.style.display="none",n.style.display="inline-block",a.style.display="none",l.style.display="none",u.style.display="none",i.style.display="block",c.style.display="block",o.style.display="none",h1.innerHTML="Results",r.innerHTML=h1[1],showResult()},i.onclick=function(){numberSentence(),correctWords(),rewriteMassWords(),tableTest(),enter(),cursor(),y=0,b.innerHTML="1/20",e.style.display="inline-block",n.style.display="none",i.style.display="none",c.style.display="none",s.style.display="block",o.style.display="block",t.style.display="block",u.style.display="block",r.innerHTML=h1[0]},document.querySelector("#hint").onclick=function(){var e=numberSentences[y];swal({title:sweet,type:"info",confirmButtonColor:"#7CD1F9",text:arrBib[e].desc})}};var question,ansver,something=Object.keys(arrBib).length,somethingVariors=Object.keys(arrBib[0].variors).length,a=0,b=something-1,c=rand(a,b),d=rand(0,2),e="Your ansver?",numberItter=20,words=[],numberSentences=[],numberAnsvers=[],arrAnsvers=[],assMassWords="",h1=[];function rand(e,n){n=n-e+1;return Math.floor(Math.random()*n)+e}function numberSentence(){var e;numberSentences=[];for(var n=0;n<numberItter;n++)e=rand(a,b),-1==numberSentences.indexOf(e)?numberSentences.push(e):n--;return numberSentences}function numberAnsver(e){numberAnsvers=[];for(var n,r=Object.keys(arrBib[e].variors).length-1,s=0;s<Object.keys(arrBib[e].variors).length;s++)n=rand(0,r),-1==numberAnsvers.indexOf(n)?numberAnsvers.push(n):s--;return numberAnsvers}function numbToWord(e){for(var n=[],r=numberAnsver(e),s=0;s<Object.keys(arrBib[e].variors).length;s++)n.push(arrBib[e].variors[r[s]]);return"`"+n.join("` or `")+"`"}function arrVariour(){for(var e={},n=0;n<Object.keys(arrBib).length;n++)e[n]=numbToWord(n);return e}function rewriteMassWords(){return assMassWords=arrVariour()}function correctWords(){words=[];for(var e=numberSentences,n=0;n<numberItter;n++){var r=e[n];words.push(arrBib[r].right.toLowerCase().toString())}return words}function tableTest(){var e=document.querySelector(".tableTestMobile");e.innerHTML="";for(var n=0;n<numberItter;n++){var r=numberSentences[n];e.innerHTML+="<div class='tableTest__slide'><div class='tableTest__row'><div><span class='tableTest__row__irr'>"+arrBib[r].sentencesFirst+"___"+arrBib[r].sentencesSecond+"</span></div></div><div class='tableTest__row'>"+assMassWords[r]+'</span></div><div class="row"><input class="ansver" type="text" placeholder=\'Your answer\' id=\'body\' autocomplete=\'off\' maxlength = 150><label for="body" class="label">Your answer</label></div></div>'}}function cursor(){document.querySelector(".ansver").focus()}function ansvers(){var e=document.querySelectorAll(".ansver");arrAnsvers=[];for(var n=0;n<e.length;n++){var r=e[n].value.toString().toLowerCase().trim();arrAnsvers.push(r)}return arrAnsvers}function resultt(){for(var e=0;e<numberItter;e++)arrAnsvers[e].toString().toLowerCase(),words[e]}function showResult(){ansvers(),resultt(),testResult()}function testResult(){var e=document.querySelector(".tableTestMobile");e.innerHTML="";for(var n=0;n<numberItter;n++){var r=numberSentences[n];arrAnsvers[n].toString().toLowerCase()==words[n]?e.innerHTML+="<div class='tableTest__result'><span>"+arrBib[r].sentencesFirst+"</span><span>&nbsp;</span><span class='tableTest__result__right'>"+arrBib[r].right+"</span><span>&nbsp;</span><span>"+arrBib[r].sentencesSecond+"</span></div>":""==arrAnsvers[n]?e.innerHTML+="<div class='tableTest__result'><span>"+arrBib[r].sentencesFirst+"</span><span>&nbsp;</span><span class='tableTest__result__quest'>???</span><span>&nbsp;</span><span>"+arrBib[r].sentencesSecond+"</span></div>":e.innerHTML+="<div class='tableTest__result'><span>"+arrBib[r].sentencesFirst+"</span><span>&nbsp;</span><span class='tableTest__result__badAnsver'>"+arrAnsvers[n]+"</span><span>&nbsp;(</span><span>"+arrBib[r].right+"</span><span>)</span><span>&nbsp;</span><span>"+arrBib[r].sentencesSecond+"</span></div>"}}function enter(){$(".ansver").keyup(function(e){13==e.keyCode&&btnNext.click()})}h1[0]=document.getElementById("h1Name").innerHTML,h1[1]="Results",assMassWords=arrVariour();