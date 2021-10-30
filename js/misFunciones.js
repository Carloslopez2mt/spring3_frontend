
/// CATEGORY

function traerInformacion3(){
    $.ajax({
        url:"http://150.136.84.233:8080/api/Category/all",
        type:"GET",        
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta3(respuesta);
        }

    });
}

function pintarRespuesta3(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";        
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento3("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);

}
function guardarInformacion3(){
    let myData={       
        name:$("#name3").val(),        
        description:$("#description3").val()
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Category/save",
        type:"POST",        
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            $("#id3").val("");
            $("#name3").val("");            
            $("#description3").val("");                        
            traerInformacion3();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion3(){
    let myData={
        id:$("#id3").val(),
        name:$("#name3").val(),             
        description:$("#description3").val()
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            $("#id3").val("");
            $("#name3").val("");           
            $("#description3").val("");                      
            traerInformacion3();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento3(idElemento3){
    let myData={
        id:idElemento3
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Category/"+idElemento3,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            traerInformacion3();
            alert("Se ha Eliminado.")
        }
    });
}

/// COMPUTER

function traerInformacion2(){
    $.ajax({
        url:"http://150.136.84.233:8080/api/Computer/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta2(respuesta);
        }

    });
}

function pintarRespuesta2(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].year+"</td>";
        myTable+="<td>"+items[i].description+"</td>";        
        myTable+="<td> <button onclick='borrarElemento2("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);

}
function guardarInformacion2(){
    let myData={        
        name:$("#name2").val(),
        target:$("#brand").val(),        
        capacity:$("#year").val(),
        description:$("#description").val()       
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Computer/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#id2").val("");
            $("#name2").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");    
            traerInformacion2();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion2(){
    let myData={
        id:$("#id2").val(),
        name:$("#name2").val(),
        target:$("#brand").val(),
        capacity:$("#year").val(),        
        description:$("#description").val()     

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Computer/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#id2").val("");
            $("#name2").val("");
            $("#brand").val("");
            $("#year").val("");
            $("#description").val("");   
            traerInformacion2();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento2(idElemento2){
    let myData={
        id:idElemento2
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/Computer/Lib/"+idElemento2,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            traerInformacion2();
            alert("Se ha Eliminado.")
        }
    });
}


///CLIENT

function traerInformacion(){
    $.ajax({
        url:"http://150.136.84.233:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });
}

function pintarRespuesta(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idClient+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].password+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].age+"</td>";                
        myTable+="<td> <button onclick='borrarElemento("+items[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").html(myTable);

}
function guardarInformacion(){
    let myData={
        idClient:$("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),            
        age:$("#age").val()

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Client/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");           
            $("#age").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion(){
    let myData={
        idClient:$("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),            
        age:$("#age").val()
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");           
            $("#age").val("");            
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}

////MESSAGE

function traerInformacion1(){
    $.ajax({
        url:"http://150.136.84.233:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta1(respuesta);
        }

    });
}

function pintarRespuesta1(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idMessage+"</td>";
        myTable+="<td>"+items[i].messageText+"</td>";    
        myTable+="<td> <button onclick='borrarElemento1("+items[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);

}
function guardarInformacion1(){
    let myData={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val()
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Message/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#idMessage").val("");
            $("#messageText").val("");        
            traerInformacion1();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion1(){
    let myData={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val()       

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#idMessage").val("");
            $("#messageText").val("");            
            traerInformacion1();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento1(idElemento1){
    let myData={
        id:idElemento1
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Message/"+idElemento1,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            traerInformacion1();
            alert("Se ha Eliminado.")
        }
    });
}

/// RESERVATION 

function traerInformacion4(){
    $.ajax({
        url:"http://150.136.84.233:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta4(respuesta);
        }

    });
}

function pintarRespuesta4(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idReservation+"</td>";
        myTable+="<td>"+items[i].startDate+"</td>";
        myTable+="<td>"+items[i].devolutionDate+"</td>";
        myTable+="<td>"+items[i].status+"</td>";        
        myTable+="<td> <button onclick='borrarElemento4("+items[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);

}
function guardarInformacion4(){
    let myData={
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),        
        status:$("#status").val()      
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Reservation/save",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");                
            traerInformacion4();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion4(){
    let myData={
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),        
        status:$("#status").val()    
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");             
            traerInformacion4();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento4(idElemento4){
    let myData={
        id:idElemento4
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.84.233:8080/api/Reservation/"+idElemento4,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacion4();
            alert("Se ha Eliminado.")
        }
    });
}
