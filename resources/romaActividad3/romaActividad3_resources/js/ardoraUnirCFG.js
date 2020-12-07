//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#4040FF"; colorText="#000000"; colorSele="#9D9DFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="¡Felicitaciones lograste completar la actividad!"; messageTime=""; messageError="¡Esa función no se corresponde con la institución seleccionada"; messageErrorG="¡Esa función no se corresponde con la institución seleccionada"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cm9tYUFjdGl2aWRhZDM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["QXNhbWJsZWE", "RW4gZXN0ZSBlc3BhY2lvIHBhcnRpY2lwYWJhbiBsb3MgY2l1ZGFkYW5vcyByb21hbm9zLCB2b3RhYmFuIGxleWVzIHkgZWxlZ+1hbiBsb3MgZnVuY2lvbmFyaW9zLg"],["U2VuYWRv", "Q29tcHVlc3RvIHBvciBsb3MgUGF0cmljaW9zIHkgYWwgZmluYWwgZGUgbGEgUmVwdWJsaWNhIHRhbWJp6W4gcG9yIGxvIFBsZWJleW9zLg"],["Q/Nuc3VsZXM", "UG9zZe1hbiB0b2RvcyBsb3MgcG9kZXJlcyBxdWUgYW50YfFvIHRlbu1hIGVsIHJleSwgcGVybyBjb21wYXJ0aWRvcyBjb24gb3RybyBjb2xlZ2Eu"],["TWFnaXN0cmF0dXJh", "U29uIGNhcmdvcyB5IHVuIGNvbmp1bnRvIGRlIGF0cmlidWNpb25lcyBjb24gbGFzIGN1YWxlcyBzZSBpbnZlc3TtYSBhIHVuIGNpdWRhZGFubyBwYXJhIHF1ZSBkZXNlbXBl8WFyYSBkZXRlcm1pbmFkYXMgZnVuY2lvbmVzIHJlbGFjaW9uYWRhcyBjb24gbGEgYWRtaW5pc3RyYWNp824geSBkaXJlY2Np824gcG9s7XRpY2EgZGUgbGEgY2l1ZGFkLg"]];
var c=[[8,94],[6,79],[8,84],[12,196]];
var con1=["Asamblea","Senado","Magistratura","Cónsules"];
var con2=["En este espacio participaban los ciudadanos romanos, votaban leyes y elegían los funcionarios.","Compuesto por los Patricios y al final de la Republica también por lo Plebeyos.","Son cargos y un conjunto de atribuciones con las cuales se investía a un ciudadano para que desempeñara determinadas funciones relacionadas con la administración y dirección política de la ciudad.","Poseían todos los poderes que antaño tenía el rey, pero compartidos con otro colega."];
var sel1=""; join1=[]; join2=[];
