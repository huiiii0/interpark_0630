$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자기계발" },
    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $("#month .monthRec .box2 .moslide li .mbox1 .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
            $("#month .monthRec .box2 .moslide li .mbox1 .boxTxt").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
            $("#month .monthRec .box2 .moslide li .mbox1 .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');
            

        }
    });