$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"세계경제" },
    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $(".hslide li .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");           
            $(".hslide li .lboxTxt1").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
            $(".hslide li .lboxTxt2").eq(i).append('<h6>'+msg.documents[i].authors+'</h6>');

        }
  
    });