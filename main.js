$("button").on("click", function() {
  $("#filtered-values").empty();

  var domValues = [];
  var results = [];

  $("#original-values li").each(function(i, li) {
    domValues.push(+$(li).html());
  });

  var upperLimit = +this.dataset.val;
  var lowerLimit = upperLimit - 10;

  results = domValues.filter(function(num) {
    return num <= upperLimit && num >= lowerLimit;
  });

  for (var i = 0; i < results.length; i++) {
    $("#filtered-values").append("<li>" + results[i] + "</li>");
  }
});
