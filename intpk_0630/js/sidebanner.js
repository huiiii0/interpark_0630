$.ajax({

    url: "./js/sidebanner.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;                

                $("#recommendWrap #sideBanner .sideslide li").eq(i).append('<a href="#"><img src="'+data[i].url+'"></h1>');
            }

        }

    }

});