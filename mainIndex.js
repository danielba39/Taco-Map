var request = new XMLHttpRequest();
request.open('GET', 'https://tacomap.herokuapp.com/', true);

request.onload=()=>{
    if(request.status >= 200 && request.status < 400){
        alert("Ya entre")
        let data = JSON.parse(request.responseText);
        console.log(data);
        Object.keys(data).map((key, index)=>{
            let aux = index +1;
            document.getElementById("t"+aux+"t").innerHTML=data[key].TacoCont.Triste;
            document.getElementById('t'+aux+'n').innerHTML=data[key].TacoCont.Normal;
            document.getElementById('t'+aux+'f').innerHTML=data[key].TacoCont.Feliz;
            document.getElementById('imgt'+aux).src= data[key].Img;
            document.getElementById('t'+aux+'_nombre').innerHTML=data[key].Nombre;
            document.getElementById('t'+aux+'_des_cor').innerHTML=data[key].DC;
        });
    }else{
        console.log("ALgo se rompio en la respuesta");
    }
};

request.onerror=(error)=>{
    console.log("Hubo un error=>", error)
};



