		

		var date = new Date();
        var d  = date.getDate();
        var day = (d < 10) ? '0' + d : d;
        var m = date.getMonth() + 1;
        var month = (m < 10) ? '0' + m : m;
        var yy = date.getYear();
        var year = (yy < 1000) ? yy + 1900 : yy;
        alert(year + "/" + month + "/" + day);



$('input[id=radio]').click(function(){
	
	var elemento = $(this);
	var dato =$(this).val();
	alert("hola click detectado"+dato);
	


	

	var url1 = "datos-cliente.php";

	$.ajax({

		type:"POST",
		url:url1,
		data:{dato},

		success:function(data){
			alert(data); 
		}
	});





	var padre = elemento.parent();
	//alert("hola click detectado"+padre);
	var res=padre.data("fin");

	if (res!="terminado") {

		padre.next().addClass('.wow animated fadeInRight');
		padre.next().attr('data-wow-delay','200ms');
		var p = padre.next().css('display','block');

		//alert("hola click detectado"+p);
		padre.removeClass('.wow animated fadeOutRight');
		padre.addClass('.wow animated fadeOutLeft');

		//setInterval(swapImages(),1000);
		padre.css({"display":"none"});

	}
	else{
		alert("terminado");
	}
		console.log(res);
});



$(document).on("ready", function(){
	enviarDatos();
	});
		
	function enviar_datos(){
	    var name = $("#Nombre").val();
	    var phone = $("#Telefono").val();
	    var date = $("#Fecha").val();
	    var email = $("#E-mail").val();
	    //alert(name+phone+date+email);
	    var url = "datos-cliente.php";

	    $.ajax({

		type:"POST",
		url:url,
		data:{name,phone,date,email},

		success:function(data){
			alert(data); 
		}
	});
	}




		/*var url = "datos-cliente.php";                                      

			$.ajax({                        
			   type: "POST",                 
			   url: url,                    
			   data: $("#formulario").serialize(),
			   success: function(data)            
			   {
				 //$('#respuesta').css({"display":"none"});   
				 $('#respuesta').html(data);   
				 //alert(data);        
			   }
			 });*/
