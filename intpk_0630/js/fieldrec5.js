$.ajax({

    url: "./js/fieldrec5.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var price = data[i].price;                

                $("#field .section #list_e .box .boxTxt").eq(i).append('<p>'+data[i].price+'</p>');
            }

        }

    }

});