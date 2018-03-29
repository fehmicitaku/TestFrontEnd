


function feka(id) {



    $.getJSON("https://raw.githubusercontent.com/fehmicitaku/TestFrontEnd/master/users.json", function(data){

      var moreInfo = '';

      $.each(data, function(key,value){
          if(value.id == id){
            moreInfo += '<li>Emri :   ' + value.name + '</li>'
            moreInfo += '<li>Username : ' + value.username + '</li>';
            moreInfo += '<li>Email :   ' + value.email + '</li>'
            moreInfo += '<li>Qyteti : ' + value.address.street + '</li>';
            moreInfo += '<li>Suite : ' + value.address.suite + '</li>';
            moreInfo += '<li>ZIP : ' + value.address.zipcode + '</li>';
            moreInfo += '<li>Longtitude : ' + value.address.geo.lng + '</li>';
            moreInfo += '<li>Latitude : ' + value.address.geo.lat + '</li>';
            moreInfo += '<li>Phone : ' + value.phone + '</li>';
            moreInfo += '<li>Website :   ' + value.website + '</li>'
            moreInfo += '<li>Company name : ' + value.company.name + '</li>';
          }
      });
          $('#moreInfo').append(moreInfo);
          $(".modal").on("hidden.bs.modal", function(){
          $("#moreInfo").html("");
});

    });


}

  $.getJSON("https://raw.githubusercontent.com/fehmicitaku/TestFrontEnd/master/users.json", function(data){
      var users_data = '1';
      $.each(data, function(key, value){
        users_data += '<tr>';
        users_data += '<td>' + value.id + '</td>';
        users_data += '<td>' + value.name + '</td>';
        users_data += '<td>' + value.username + '</td>';
        users_data += '<td><button id="'+ value.id   + '" class="btn btn-success" data-toggle="modal" data-target="#modalId" onClick=feka(id)>Me shume</button></td>';
      });


      $('#userstable').append(users_data);

    });
