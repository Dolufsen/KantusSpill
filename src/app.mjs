const alleOppgaver = [
    "Hva lukter du med",
    "Hva ser du med?",
    "Hva hører du med?",
    "Hva spiser du med?",
    "Hvilken farge er himmelen?",
    "Hvilken farge er et blad?",
    "Hvilken farge er et hus?",
    "Hvilken farge har en bil?",
    "Tegn sirkelen!",
    "Tegn trekanten!",
    "Tegn kvadratet!",
    "Tegn rektangelet!",
    "Tegn sekskanten!",
    "Tegn en M",
    "Tegn en S",
    "Tegn en L",
    "Tegn en D",
    "Tegn en A",
    "Tegn en T",
    "Hvilket dyr lager denne lyden?",
    "Hvilket dyr lager denne lyden?",
    "Hvilket dyr lager denne lyden?",
    "Hvilket dyr lager denne lyden?",
    "Hva lager denne lyden?",
    "Hva lager denne lyden?",
    "Hva lager denne lyden?",
    "Hvor mange fingre har du?",
    "Hvor mange tær har du?",
    "Finn noe firkantet i barnehagen!",
    "Finn noe trekantet i barnehagen!",
    "Finn noe sirkelformet i barnehagen!"
];

const alleOppgaveLyder = [
    "../audio/audio_010.mp3",
    "../audio/audio_011.mp3",
    "../audio/audio_012.mp3",
    "../audio/audio_013.mp3",
    "../audio/audio_014.mp3",
    "../audio/audio_015.mp3",
    "../audio/audio_016.mp3",
    "../audio/audio_017.mp3",
    "../audio/audio_018.mp3",
    "../audio/audio_019.mp3",
    "../audio/audio_020.mp3",
    "../audio/audio_021.mp3",
    "../audio/audio_023.mp3",
    "../audio/audio_024.mp3",
    "../audio/audio_025.mp3",
    "../audio/audio_026.mp3",
    "../audio/audio_027.mp3",
    "../audio/audio_028.mp3",
    "../audio/audio_029.mp3",
    "../audio/audio_030.mp3",// index 19
    "../audio/audio_031.mp3",
    "../audio/audio_032.mp3",
    "../audio/audio_033.mp3",
    "../audio/audio_034.mp3",
    "../audio/audio_035.mp3",
    "../audio/audio_036.mp3",
    "../audio/audio_037.mp3",
    "../audio/audio_038.mp3",
    "../audio/audio_039.mp3",
    "../audio/audio_040.mp3",
    "../audio/audio_041.mp3",

];

const bokLydArr = [
    ,
    ,
    ,
    "audio_annet/audio_001.mp3",
    ,
    "audio_annet/audio_002.mp3",
    "audio_annet/audio_003.mp3",
    "audio_annet/audio_004.mp3"
];

const bildeBankArr = [
    [],[],[],[],
    //hvilken farge har...
    [
        "../quiz/blue.png",
        "../quiz/pink.png",
        "../quiz/black.png",
        "../quiz/grey.png"
    ],
    [
        "../quiz/green.png",
        "../quiz/brown.png",
        "../quiz/red.png",
        "../quiz/yellow.png"
    ],
    [
        "../quiz/white.png",
        "../quiz/blue.png",
        "../quiz/yellow.png",
        "../quiz/red.png"
    ],
    [
        "../quiz/white.png",
        "../quiz/black.png",
        "../quiz/red.png",
        "../quiz/green.png"
    ],
    [],[],[],[],[],[],[],[],[],[],[],
    //hvilket dyr lager denne lyden index 19
    [
        "../quiz/070.png",
        "../quiz/071.png",
        "../quiz/072.png",
        "../quiz/073.png",
        0
    ],
    [
        "../quiz/070.png",
        "../quiz/071.png",
        "../quiz/072.png",
        "../quiz/073.png",
        2
    ],
    [
        "../quiz/070.png",
        "../quiz/071.png",
        "../quiz/072.png",
        "../quiz/073.png",
        3
    ],
    [
        "../quiz/070.png",
        "../quiz/071.png",
        "../quiz/072.png",
        "../quiz/073.png",
        1
    ],
    //hva lager denne lyden index 23
    [
        "../quiz/073.png",
        "../quiz/074.png",
        "../quiz/075.png",
        "../quiz/076.png",
        1
    ],
    [
        "../quiz/073.png",
        "../quiz/074.png",
        "../quiz/075.png",
        "../quiz/076.png",
        2
    ],
    [
        "../quiz/073.png",
        "../quiz/074.png",
        "../quiz/075.png",
        "../quiz/076.png",
        3
    ],
    
];

const trekantKnapp = document.getElementById("trekant");
const firkantknapp = document.getElementById("firkant");
const sirkelKnapp = document.getElementById("sirkel");
const knapper = document.getElementById("knapper");
const oppgave = document.getElementById("oppgave");
const oppgaveBeskrivelse = document.getElementById("beskrivelse");
const suksessKnapp = document.getElementById("suksess");
const ferdigKnapp = document.getElementById("ferdig");
const restartKnapp = document.getElementById("restart");
const takkBilde = document.getElementById("takk");
const gjentaKnapp = document.getElementById("gjenta");
const startKnapp = document.getElementById("start");
const bakgrunn = document.getElementById("bakgrunn");
const videreKnapp = document.getElementById("videre");
const spillKnapp = document.getElementById("spill");
const kantus = document.getElementById("kantus");

const audioPlayer = document.getElementById("audioPlayer");
const backgroundPlayer = document.getElementById("backgroundPlayer");
audioPlayer.src = "audio_annet/audio_007.mp3";
/*
    audioPlayer.muted=false;
backgroundPlayer.muted=false;
audioPlayer.play();

*/

const introBok = document.getElementById("bok");
const introSang = document.getElementById("intro");

const quizContainer = document.getElementById("quizContainer");
const quizChoice1 = document.getElementById("qc1");
const quizChoice2 = document.getElementById("qc2");
const quizChoice3 = document.getElementById("qc3");
const quizChoice4 = document.getElementById("qc4");
const quizChoiceArr = [quizChoice1,quizChoice2,quizChoice3,quizChoice4]

bortMedRestart();
bortMedFerdigKnapp();
bortMedGjenta();
visStartKnapp();
bortMedSuksessKnapp();



const TREKANT = 1;
const FIRKANT = 2;
const SIRKEL = 3;


let figurTrukket = "";
let oppgaveID = 0;

trekantKnapp.onclick = trykketTrekant;
firkantknapp.onclick = trykketFirkant;
sirkelKnapp.onclick = trykketSirkel;
suksessKnapp.onclick = trykketSuksessKnapp;
ferdigKnapp.onclick = trykketFerdigKnapp;
restartKnapp.onclick = trykketRestart;
gjentaKnapp.onclick = trykketGjenta;
startKnapp.onclick = trykketStart;
videreKnapp.onclick = trykketVidere;
spillKnapp.onclick = trykketSpill;


function trykketSpill() {
    //avslutte bildebok, begynn å spille.

    
    bok.classList.add("hidden");
    spillKnapp.classList.add("hidden");
    show([knapper,gjentaKnapp,ferdigKnapp,bakgrunn,kantus]);
    velgEnForm();
}
let sidetall = 1;

function trykketStart() {
    //starte flippeboka
    hide([startKnapp, bakgrunn, kantus]); 
    show([gjentaKnapp]);
    audioPlayer.muted=false;
    backgroundPlayer.muted=false;
    stopBakgrunnsSang();
    show([bok]);
    blaOmTilSide();
    

}

function blaOmTilSide() {

    const gammelSide = "side" + (sidetall - 1);
    const side = "side" + sidetall;

    const g = document.getElementById(gammelSide);
    const n = document.getElementById(side);
    console.log(side)
    if (g) {
        hide([g]);
    }
    if (n) {
        n.onclick = blaOmTilSide;
        show([n],sidetall);
        sidetall +=1;

    }else{ 
        
       show([g]);
    }
  
}

    



function trykketVidere() {
    //bla til neste side i boka
}

function trykketGjenta() {
    //gjenta sist avspilte lydfil(?), evt. spill aktuel lydfil på siden?
    gjentaLydfil();
}

function trykketRestart(evt) {
    //tar oss tilbake til startskjerm
    restartSpill();
}

function trykketFerdigKnapp(evt) {
    oppgave.classList.add("hidden");
    knapper.classList.add("hidden");
    kantus.classList.add("hidden");
    takkBilde.classList.remove("hidden");
    restartKnapp.classList.remove("hidden");
    bakgrunn.classList.add("hidden");
    gjentaKnapp.classList.add("hidden");

    bortMedFerdigKnapp();
    bortMedStartKnapp();
}

function trykketTrekant(evt) {
    figurTrukket = TREKANT;
    startSpill();
}

function trykketFirkant(evt) {
    figurTrukket = FIRKANT;
    startSpill();
}
function trykketSirkel(evt) {
    figurTrukket = SIRKEL;
    startSpill();
}


function trykketSuksessKnapp(evt) {
    knapper.classList.remove("hidden");
    oppgave.classList.add("hidden");
    ferdigKnapp.classList.remove("hidden");
    gjentaKnapp.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    clearQuizOptions();
    stopBakgrunnsSang();
    velgEnForm();
}

function clearQuizOptions() {
    for (let i = 0; i < quizChoiceArr.length; i++) {
        quizChoiceArr[i].removeEventListener("click",valgtRiktigSvar);
    }
}

function startSpill() {
    bortMedSuksessKnapp();
    taBortKnapper();
    stopBakgrunnsSang();
    backgroundPlayer.pause();
    trekkOppgave();
   

}

function taBortKnapper() {
    knapper.classList.add("hidden");
    oppgave.classList.remove("hidden");
}

function trekkOppgave() {
    oppgaveID = Math.floor(Math.random() * (alleOppgaver.length - 1)) + 1;
    
    if (oppgaveID >= 4 && oppgaveID <=7) {
        console.log("kategori2");
        console.log(alleOppgaver[oppgaveID]);
        for (let i = 0; i < quizChoiceArr.length; i++) {
            quizChoiceArr[i].src = bildeBankArr[oppgaveID][i];
            quizChoiceArr[i].addEventListener("click", valgtRiktigSvar);
        }
        quizContainer.classList.remove("hidden");
    }else if (oppgaveID >= 19 && oppgaveID <=25) {
        console.log("kategori3");
        console.log(alleOppgaver[oppgaveID]);
        console.log(bildeBankArr[oppgaveID]);

        quizChoiceArr[0].src = bildeBankArr[oppgaveID][0];
        quizChoiceArr[1].src = bildeBankArr[oppgaveID][1];
        quizChoiceArr[2].src = bildeBankArr[oppgaveID][2];
        quizChoiceArr[3].src = bildeBankArr[oppgaveID][3];
        let riktigSvar = bildeBankArr[oppgaveID][4];
        quizChoiceArr[riktigSvar].addEventListener("click", valgtRiktigSvar);
        
        quizContainer.classList.remove("hidden");
    }else{
        console.log("kategori4 eller 1");
        console.log(alleOppgaver[oppgaveID]);
        
        visSuksessKnapp(3500);
    }
    oppgaveBeskrivelse.innerHTML = alleOppgaver[oppgaveID];

    audioPlayer.src = alleOppgaveLyder[oppgaveID];
    audioPlayer.play();

}
function valgtRiktigSvar() {
    console.log("woop");
    visSuksessKnapp();
}
function bortMedSuksessKnapp() {
    suksessKnapp.classList.add("hidden");
}

function visSuksessKnapp(delay) {
    setTimeout(() => {
        suksessKnapp.classList.remove("hidden");
    }, delay)
}


function bortMedFerdigKnapp() {
    ferdigKnapp.classList.add("hidden");
}

function bortMedRestart() {
    restartKnapp.classList.add("hidden");
}

function visStartKnapp() {
    startKnapp.classList.remove("hidden");
}

function restartSpill() {
    oppgave.classList.add("hidden");
    knapper.classList.add("hidden");
    takkBilde.classList.add("hidden");
    restartKnapp.classList.add("hidden");
    bakgrunn.classList.remove("hidden");
    stopBakgrunnsSang();
    audioPlayer.currentTime = 0;
    backgroundPlayer.pause();
    backgroundPlayer.currentTime =0;

    bortMedRestart();
    bortMedFerdigKnapp();
    visStartKnapp();

}
function bortMedStartKnapp() {
    startKnapp.classList.add("hidden");
}
function bortMedGjenta() {
    gjentaKnapp.classList.add("hidden");
}

function stopBakgrunnsSang(){
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}




function velgEnForm(){
    backgroundPlayer.src = "audio_annet/audio_006.mp3";
    backgroundPlayer.play();
    
    backgroundPlayer.addEventListener("ended", () => {
        backgroundPlayer.src = "audio_annet/audio_007.mp3";
        backgroundPlayer.play();
    })
}

function gjentaLydfil(){
    audioPlayer.currentTime = 0;
    backgroundPlayer.pause();
    audioPlayer.play();
}

// Hjelpe funksjoner --------------------------------------------

function hide(ting) {
    ting.forEach(e => e.classList.add("hidden"))
}

function show(ting, sidetall) {
    let lydspor = bokLydArr[sidetall];
    if(!undefined){
        audioPlayer.src = lydspor;
        audioPlayer.play();
        
    }else{
            audioPlayer.pause();
        }
    //console.log(bokLydArr[sidetall])
    ting.forEach(e => e.classList.remove("hidden"))
}