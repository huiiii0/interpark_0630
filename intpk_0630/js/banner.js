$.ajax({

    url: "./js/banner.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;                

                $("#banner .bbox").eq(i).append('<a href="#"><img src="'+data[i].url+'"></h1>');
            }

        }

    }

});