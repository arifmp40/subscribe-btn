$(document).ready(function () {
  $(".wrapper").click(function () {
    $(".wrapper i").css("transform", "translate(3rem, -50%)");
    $(".content").addClass("change");
    $("h2").text("Subscribed");
    $(".content::before").css("bottom", "100%");
    $(".wrapper i").click(function () {
      $(this).removeClass("far fa-bell");
      $(this).addClass("fas fa-bell");
    });
  });
});
