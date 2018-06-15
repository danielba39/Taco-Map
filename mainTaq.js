let dato = window.location.search.substring(10);
var request = new XMLHttpRequest();

request.open('GET', `https://tacomap.herokuapp.com/${dato}`, true);

request.onload=()=>{
    if(request.status>=200 && request.status<400){
        let data = JSON.parse(request.responseText);
        document.getElementById("t1_nombre").innerHTML=data.Nombre;
        switch(data.Precio){
            case 1:
                document.getElementById("dinerot1_1").src="img/dinero.png";
                document.getElementById("dinerot1_2").src="img/dinero_2.png";
                document.getElementById("dinerot1_3").src="img/dinero_2.png";
            break;
            case 2:
                document.getElementById("dinerot1_1").src="img/dinero.png";
                document.getElementById("dinerot1_2").src="img/dinero.png";
                document.getElementById("dinerot1_3").src="img/dinero_2.png";
            break;
            case 3:
                document.getElementById("dinerot1_1").src="img/dinero.png";
                document.getElementById("dinerot1_2").src="img/dinero.png";
                document.getElementById("dinerot1_2").src="img/dinero.png";
            break;
            default:
                document.getElementById("dinerot1_1").src="img/dinero_2.png";
                document.getElementById("dinerot1_2").src="img/dinero_2.png";
                document.getElementById("dinerot1_3").src="img/dinero_2.png";
            break;
        };
        document.getElementById("t1t").innerHTML="x"+data.TacoCont.Triste;
        document.getElementById('t1n').innerHTML="x"+data.TacoCont.Normal;
        document.getElementById('t1f').innerHTML="x"+data.TacoCont.Feliz;
        document.getElementById("t1_des_lar").innerHTML=data.DL;
        document.getElementById("t1_dir").innerHTML=data.Direccion;
        document.getElementById("t1_esp").innerHTML=data.Especialidad;
        document.getElementById("t1_sal").innerHTML=data.Salsas;
        document.getElementById("t1_map").src=data.Ubicacion;
    }else{
        console.log("ALgo salio mal en la peticion");
    }
};

request.onerror=()=>{
    console.log("Algo salio mas", request.status);
}
