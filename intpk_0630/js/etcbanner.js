$.ajax({

    url: "./js/etcbanner.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;                

                $("#etc .etcbox .box2").eq(i).append('<a href="#"><img src="'+data[i].url+'"></a>');
            }

        }

    }

});