const route = "https://api-tworism.herokuapp.com/api/";

const htmlGenerator = (data) => {
  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += "<tr>";
    html += "<td>" + data[i].UserName + "</td>";
    html += "<td>" + data[i].UserEmail + "</td>";
    if (data[i].UserVerified == 1) {
      html += "<td>Verificado</td>";
      html +=
        "<td><button class='btn btn-success'onclick='verify(" +
        data[i].UserId +
        ")'>Disentir</button></td>";
    } else {
      html += "<td>No verificado</td>";
      html +=
        "<td><button class='btn btn-success' onclick='verify(" +
        data[i].UserId +
        ")'>Verificar</button></td>";
    }

    html += "</tr>";
  }
  return html;
};

const verify = (id) => {
  $.ajax({
    url: route + "/users/verify/" + id,
    type: "PUT",
    success: function (data) {
      let message;
      if (data.UserVerified == 1) {
        message = "Usuario verificado";
      } else {
        message = "Usuario disentido";
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        location.reload();
      }, 1500);
    },
  });
};

$(document).ready(function () {
  $.ajax({
    url: route + "/users",
    type: "GET",
    success: function (data) {
      let html = htmlGenerator(data);
      $("tbody").html(html);
    },
  });

  $("#verified").click(function () {
    $.ajax({
      url: route + "/users/verified",
      type: "GET",
      success: function (data) {
        let html = htmlGenerator(data);
        $("tbody").html(html);
      },
    });
  });

  $("#unverified").click(function () {
    $.ajax({
      url: route + "/users/unverified",
      type: "GET",
      success: function (data) {
        let html = htmlGenerator(data);
        $("tbody").html(html);
      },
    });
  });

  $("#general").click(function () {
    $.ajax({
      url: route + "/users",
      type: "GET",
      success: function (data) {
        let html = htmlGenerator(data);
        $("tbody").html(html);
      },
    });
  });
});
