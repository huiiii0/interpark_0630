$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"국내경제" },
    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $(".mslide li .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
            $(".mslide li .lboxTxt1").eq(i).append('<h6>'+msg.documents[i].authors+'</h6>');
            $(".mslide li .lboxTxt1").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
            $(".mslide li .lboxTxt2").eq(i).append('<p>'+msg.documents[i].contents.substring(0,30)+'...</p>');

        }
              

             

             
              

        
    });