$(document).ready(function() {
  $("#leapYear").submit(function(event) {
    $("#result").hide();
    event.preventDefault();
    const year = parseInt($("input#year").val());
    const result = isLeapYear(year)
    console.log(result)

    function isLeapYear(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    }
    $('span.result').text(result);
    $("#result").show();

  });
});