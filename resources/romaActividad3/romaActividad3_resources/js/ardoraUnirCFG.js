//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#5959FF"; colorText="#000000"; colorSele="#9D9DFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="¡Felicitaciones lograste completar la actividad!"; messageTime=""; messageError="¡Esa función no se corresponde con la institución seleccionada"; messageErrorG="¡Esa función no se corresponde con la institución seleccionada"; messageAttempts="¡Esa opción no fue la correcta, vuelve a intentar!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cm9tYUFjdGl2aWRhZDM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["QXNhbWJsZWE", "RW4gZXN0ZSBlc3BhY2lvIHBhcnRpY2lwYWJhbiBsb3MgY2l1ZGFkYW5vcyByb21hbm9zLCB2b3RhYmFuIGxleWVzIHkgZWxlZ+1hbiBsb3MgZnVuY2lvbmFyaW9zLg"],["U2VuYWRv", "RnVlIGxhIHJhbWEgcHJlZG9taW5hbnRlIGRlIGdvYmllcm5vIGNvbnRyb2xhYmEsICBlbCBkaW5lcm8sIGxhIGFkbWluaXN0cmFjafNuLCB5IGxvcyBkZXRhbGxlcyBkZSBsYSBwb2ztdGljYSBleHRlcmlvciwgdGVu7WEgZWwgY29udHJvbCBzb2JyZSBsYSB2aWRhIGRlbCBk7WEgYSBk7WEu"],["Q/Nuc3VsZXM", "U3VzIG1hbmRhdG9zIGVyYW4gYW51YWxlcywgeSBjYWRhIGPzbnN1bCBwb2TtYSB2ZXRhciBsYXMgYWN0dWFjaW9uZXMgbyBkZWNpc2lvbmVzIGRlIHN1IGNvbGVnYS4"],["TWFnaXN0cmF0dXJh", "U29uIGNhcmdvcyB5IHVuIGNvbmp1bnRvIGRlIGF0cmlidWNpb25lcyBjb24gbGFzIGN1YWxlcyBzZSBpbnZlc3TtYSBhIHVuIGNpdWRhZGFubyBwYXJhIHF1ZSBkZXNlbXBl8WFyYSBkZXRlcm1pbmFkYXMgZnVuY2lvbmVzIHJlbGFjaW9uYWRhcyBjb24gbGEgYWRtaW5pc3RyYWNp824geSBkaXJlY2Np824gcG9s7XRpY2EgZGUgbGEgY2l1ZGFkLg"]];
var c=[[8,94],[6,165],[8,95],[12,196]];
var con1=["Asamblea","Senado","Magistratura","Cónsules"];
var con2=["En este espacio participaban los ciudadanos romanos, votaban leyes y elegían los funcionarios.","Fue la rama predominante de gobierno controlaba,  el dinero, la administración, y los detalles de la política exterior, tenía el control sobre la vida del día a día.","Son cargos y un conjunto de atribuciones con las cuales se investía a un ciudadano para que desempeñara determinadas funciones relacionadas con la administración y dirección política de la ciudad.","Sus mandatos eran anuales, y cada cónsul podía vetar las actuaciones o decisiones de su colega."];
var sel1=""; join1=[]; join2=[];
