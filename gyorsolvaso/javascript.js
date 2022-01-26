const startButton = document.getElementById('gomb start');
const backButton = document.getElementById('gomb back');
const frontButton = document.getElementById('gomb front');
const tablaElemek = document.getElementById("listazo")
const slider = document.getElementById("myRange");
const slider2 = document.getElementById("myRange2");
const lista = document.getElementById("konyvek");
const ujKonyv = document.getElementById("uj");
const olvaso = document.getElementById("olvaso");
const szovegSelector = document.getElementById("teljes");
const uploadGomb = document.getElementById("okeGomb");
const teljesSzoveg = document.getElementById("teljeski");

let cim ="";
let szoveg ="";
let szovegVagott="";

let konyvek = [];
let progress = [];
let hossz = [];
let szovegek = []

let valasztott = -1;
let fontSize = 20;
let speed = 1000;
let i = 0;

let playing = false;
let fileSelected = false;

LoadData();
Listing();
showList();


//olvasó
async function reading() {
  hosszusag = szovegVagott.length;

  for (i; i < hosszusag; i++) {
    if(playing == false){
      break;
    }
    document.getElementById("demo").innerHTML = szovegVagott[i]; 
    await sleep(1700-speed);
    saveProgress();

    if(i+1 == hosszusag)
    {
        startButton.src="media/play.png";
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Csuszkák
slider.oninput = function() {
  fontSize = this.value;
  document.getElementById("fontSize").innerHTML = "Betüméret: " + fontSize;
  document.getElementById("demo").style.fontSize = fontSize + "px";
  document.getElementById("gomb back").style.height = fontSize + "px";
  document.getElementById("gomb start").style.height = fontSize + "px";
  document.getElementById("gomb front").style.height = fontSize + "px";
}
slider2.oninput = function() {
    speed = this.value;
    document.getElementById("speed").innerHTML = "Sebesség: " + parseInt((60000/(1700-speed))) + " szó percenként";
}


// Gombok
startButton.onclick = function() {
  if(szovegVagott.length > 0 && playing == false){
    playing = true;
    reading();
    startButton.src="media/pause.png";
  }
  else if(szovegVagott.length > 0 && playing == true){
    playing = false;
    Listing();
    startButton.src="media/play.png";
  }
}

backButton.onclick = function(){
    if(i == 0)
    {
        document.getElementById("demo").innerHTML = "A szöveg elejére ért!"
    }
    else{
        i = i-1;
        document.getElementById("demo").innerHTML = szovegVagott[i];
    }
}

frontButton.onclick = function(){
    if(i == hosszusag)
    {
        document.getElementById("demo").innerHTML = "A szöveg végére ért!"
    }
    else{
        i = i+1;
        document.getElementById("demo").innerHTML = szovegVagott[i];
    }
}

//adatok betöltése
function LoadData(){
    const json = localStorage.getItem("adatok");
      if(json){
        Data = JSON.parse(json);
        konyvek = Data[0];
        progress = Data[1];
        hossz = Data[2];
        szovegek = Data[3];   
      }
}

uploadGomb.onclick = function(evt){  
  evt.preventDefault();
  cim = document.getElementById("name").value;
  if(cim.length > 0 && fileSelected == true){
    konyvek.push(cim);
    progress.push(0);
    hossz.push(szovegVagott.length);
    szovegek.push(szoveg);

    Data = [konyvek,progress,hossz,szovegek];
    let json = JSON.stringify(Data);
    localStorage.setItem("adatok",json);     
    location.reload();
  }    
  else{

    alert("Nincs cím megadva vagy fájl feltöltve!");
  }
  
};

//progress mentése
function saveProgress(){
    progress[valasztott] = i;

    Data = [konyvek,progress,hossz,szovegek];
    let json = JSON.stringify(Data);
    localStorage.setItem("adatok",json); 
}

//fájl "feltöltése"
function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();
  szoveg = "";

  reader.readAsText(file);
  reader.onload = function() { 
    fileSelected = true;    
    if(file.name.split('.').pop() == "pdf"){
      pdfTeszt(file);
    }
    else if(file.name.split('.').pop() == "epub"){
      OpenEPUB(file);
    }
    
    else{
      szoveg = reader.result;        
      szovegVagott = szoveg.split(/\s+/);  
    }   
  };
  reader.onerror = function() {
    console.log(reader.error);
  };
}

//könyvek listázása
function Listing(){
    let temp ="";
    for(l = 0;l<konyvek.length;l++){
        temp += '<tr>' +
        '<td>'+ konyvek[l] +'</td>' +
        '<td>'+progress[l] +"/" + (parseInt(hossz[l], 10)-1) +'</td>' + 
        '<td><button class="btn btn-outline-secondary" onclick="valaszt2('+l+')">Megtekint</button></td>' +
        '<td><button class="btn btn-outline-success" onclick="valaszt('+l+')">Választ</button></td>' +
        '<td><button class="btn btn-outline-danger " onclick="torles('+l+')">Törlés</button></td>' +
      '</tr>'
    }
    tablaElemek.innerHTML = temp;
    temp ="";    
}

//melyik könyvet választotta
function valaszt(szam){
    valasztott = szam;
    
    i = progress[valasztott];
    szoveg = szovegek[valasztott];
    szovegVagott = szoveg.split(/\s+/);  

    showPlayer();

}

function valaszt2(szam){  
  valasztott = szam;
  
  i = progress[valasztott];
  szoveg = szovegek[valasztott];
  szovegVagott = szoveg.split(/\s+/);

  Selector();
  showSzovegek();
  
  window.location.href = '#itt';
}

//könyv törlése
function torles(szam){
	if(confirm("Biztos törölni akarja?")){
		konyvek.splice(szam,1);
		progress.splice(szam,1);
		hossz.splice(szam,1);
		szovegek.splice(szam,1);

		Data = [konyvek,progress,hossz,szovegek];
		let json = JSON.stringify(Data);
		localStorage.setItem("adatok",json);

		Listing();
		
	}
  
}

//melyik részét mutassa az oldalnak
function showList(){
    lista.style.display = "block";
    ujKonyv.style.display = "none";
    olvaso.style.display = "none";
    szovegSelector.style.display = "none";
}

function showNew(){
    lista.style.display = "none";
    ujKonyv.style.display = "block";
    olvaso.style.display = "none";
    szovegSelector.style.display = "none";
}

function showPlayer(){
    lista.style.display = "none";
    ujKonyv.style.display = "none";
    olvaso.style.display = "block";
    szovegSelector.style.display = "none";
}

function showSzovegek(){
    lista.style.display = "none";
    ujKonyv.style.display = "none";
    olvaso.style.display = "none";
    szovegSelector.style.display = "block";    
}

function Selector(){
  let temp ="";
  for(k = 0;k<hossz[valasztott];k++){
    if(k == i){
      temp+= "<a style='color:#ff3430; font-weight: bold;' id='itt'>"+ szovegVagott[k] +"</a> ";
    }
    else{
      temp+="<a href=javascript:szoValaszt("+k+")>"+ szovegVagott[k] +"</a> ";
    }
    
  }
  teljesSzoveg.innerHTML = temp;
}

function szoValaszt(szam){  
  i = szam;
  showPlayer();
  saveProgress();
  Listing();
}

function pdfTeszt(file){  
	const fileReader = new FileReader(); 

	fileReader.onload = function() {
		const typedarray = new Uint8Array(this.result);
		PDFJS.getDocument(typedarray).then(function(pdf) {
				for(m = 1; m <=pdf.numPages;m++){
					pdf.getPage(m).then(function(page) {
						page.getTextContent().then(function(textContent) {
              let lastY = -1;
							for(let j = 0; j < textContent.items.length; j++) {

                if (lastY != textContent.items[j].transform[5]){
                  szoveg+="\n";
                  lastY = textContent.items[j].transform[5];
                } 
                
							  szoveg+=textContent.items[j].str;							                           
							}
              szovegVagott = szoveg.split(/\s+/);  
						});
					});
				}        
			});		        
	};	
	fileReader.readAsArrayBuffer(file);
}

function OpenEPUB(file){
  const epub = ePub(file);

  epub.loaded.spine.then((spine) => {
    spine.each((item) => {
      item.load(epub.load.bind(epub)).then((contents) => {        
        SlicingEPUB(contents.textContent);        
      });      
    });    
  });
}

function SlicingEPUB(input){
  szoveg=input;
  szovegVagott = szoveg.split(/\s+/);
}