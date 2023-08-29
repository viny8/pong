// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;
// variaveis da bolinha
let xBolinha=200;
let yBolinha=200;
let diametro=30;
let velocidadeXbolinha=6;
let velocidadeYbolinha=6;
let raio= diametro/2
//Variaveis RaqueteOponente
let xRaqueteOponente = 585;
let LarguraRaqueteOponente = 10;
let AlturaRaqueteOponente = 90;
2023, 10:26:36
//Variaveis do placar
let meusPontos = 0;
let pontosOponente = 0;
let pontoMarcado = false;

//function preload() {
// trilha = loadSound("trilha.mp3");
// ponto = loadSound("ponto.mp3");
// Raquetada = loadSound("Raquetada.mp3");
//}

// velocidade da bolinha
function setup() {
  createCanvas(600, 400);
   //trilha.loop();
}

function draw() {
  background(0);
 mostrarbolinha(); 
  rect(xRaquete ,yRaquete,raqueteLargura,raqueteAltura);
  movimentobolinha();
  verificacaoColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  verificacaoColisaoRaquete();
  mostrarRaquete(xRaquete,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  // mostra o placar
  textSise(24);
  fill(255);
  text(meusPontos, 20, 30);
  text(pontoaOponente, width - 30, 30);

  }
  function mostrarbolinha(){
   circle (xBolinha, yBolinha, diametro); 
  }
   function movimentobolinha(){
      xBolinha+= velocidadeXbolinha;
      yBolinha+= velocidadeYbolinha;
     
 }
     function verificacaoColisaoBorda(){
 if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= - 1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
} 
     }
function mostraRaquete (x,y){
  rect( x ,y,raqueteLargura,raqueteAltura);
  
}