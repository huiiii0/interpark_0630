$.ajax({

    url: "./js/controlbox.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var txt = data[i].txt;                

                $("#controlWrap .cbox").eq(i).append('<h1>'+data[i].txt+'</h1>');
            }

        }

    }

});