//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<p>En las Antigua Roma, <select name="item1" id="item1" class="ardoraCombo"></select> el espacio dónde participaban los ciudadanos romanos, votaban leyes y elegían los funcionarios. Mientas qué, en <select name="item2" id="item2" class="ardoraCombo"></select>, que fue la forma predominante de gobierno, se controlaba el dinero, la adminitración y los detalles de la política exterior. Por otro lado, <select name="item3" id="item3" class="ardoraCombo"></select> poseían todos los poderes que antaño tenía el rey. </p><p> </p>'];
var b=["MTM","MTI","OQ","OA","Mg","Mw","NA","MQ","Mw","Nw","MTQ","Mg"];
var c=[9,13,17,13,9,16,22,18,13,16,17,21];
var answers=["El Senado","Las Asambleas","Las Magistraturas","Las Asambleas","El Senado","Los Dos Cónsules","Las Magistraturas eran","Las Asambleas eran","El Senado era","Los Dos Cónsules","Las Magistraturas","Los Dos Cónsules eran"];
var a=["3","3","2","2","2","3","1","1","1","2","3","1"];
var itemCorr=["0","0","0"];
var itemHelp=["","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="cm9tYUFjdGl2aWRhZDNDb21wbGV0YXI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="'Arial Black', Gadget, sans-serif";
