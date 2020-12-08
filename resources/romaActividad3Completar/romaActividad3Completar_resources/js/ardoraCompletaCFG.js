//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#4A4AFF"; colorText="#000000"; colorSele="#9595FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="¡Felicitaciones, lograste completar el texto!"; messageTime=""; messageError="Las respuestas seleccionadas no fueron las correctas"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>En la Roma republicana, el poder que antes estaba en el Rey ahora está en <select name="item1" id="item1" class="ardoraCombo"></select> en cambio en la Republica Argentina actual quien conduce el Estado es <select name="item2" id="item2" class="ardoraCombo"></select>. También, en la Argentina actual, el poder se divide en <select name="item3" id="item3" class="ardoraCombo"></select>; en cambio en la Roma Republicana los órganos principales de gobierno son <select name="item4" id="item4" class="ardoraCombo"></select>. También en la Roma antigua las funciones cotidianas del Estado las cumplían <select name="item5" id="item5" class="ardoraCombo"></select>, pero en la Argentina esas funciones están a cargo de <select name="item6" id="item6" class="ardoraCombo"></select>. </p><p> Podemos concluir que el concepto de Republica como dijimos al principio de este camino está vivo y se transforma a medida avanza nuestra historia. Ya que si bien ambas son republicas las características institucionales de cada una son <select name="item7" id="item7" class="ardoraCombo"></select> </p><p> </p>'];
var b=["Mg","Ng","MTU","NA","Ng","NQ","Mg","MTA","Mw","Nw","MjQ","MTQ","MTE","MQ","MjM","MTg","MjU","Nw","Mjg","Mw","MTk","MjA"];
var c=[13,22,30,17,16,17,13,17,32,9,17,32,30,16,14,10,10,9,7,9,12,22];
var answers=["el Presidente","los empleados públicos","Senado, judicial y legislativo","Senado y Asamblea","los dos Cónsules","las magistraturas","el Presidente","Senado y Asamblea","Legislativo, Ejecutivo, Judicial","el Pretor","las magistraturas","Legislativo, Ejecutivo, Judicial","Senado, judicial y legislativo","los dos Cónsules","el Presidente/","los ediles","los ediles","parecidas","iguales","el Pretor","los Cónsules","los empleados públicos"];
var a=["1","6","4","4","2","5","2","3","3","2","6","4","3","1","6","5","6","7","7","1","5","5"];
var itemCorr=["0","0","0","0","0","0","0"];
var itemHelp=["","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="cm9tYUFjdGl2aWRhZDNDb21wbGV0YXI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="'Arial Black', Gadget, sans-serif";
