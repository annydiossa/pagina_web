let btn, frm, txt;//Variables
let sound, btn_play, btn_pause;

window.onload = ()=>{
  
  sound = new Howl({
    src: ['img/musica.mp3']
  });

  btn_play = document.getElementById("btn_play");
  btn_pause = document.getElementById("btn_pause");
  
  btn = document.getElementById("btn_enviar");
  btn.addEventListener("click",enviar);//Acción de presion de botón
   btn_play.addEventListener("click",reproducir);//Acción de presion de botón
  btn_pause.addEventListener("click",pausar);//Acción de presion de botón
}

function enviar(event){
  frm = document.getElementById("formulario");
    if(frm.checkValidity())
    {
      txt = document.getElementById("email");
      txt.value = "";
      alert("Gracias por el mensaje. Pronto nos pondremos en contacto contigo");
      event.preventDefault();  
    }
}

function reproducir(event){
  btn_play.classList.add("ocultar");
  btn_pause.classList.remove("ocultar");
  sound.play();
}

function pausar(event){
  btn_play.classList.remove("ocultar");
  btn_pause.classList.add("ocultar");
  sound.pause();
}