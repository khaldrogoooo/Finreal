var url= 'http://conu.astuce.media/api/finance/securitydatapoints.json?Take=100&InternalSymbol=CC1_IFUS&DataProvider=TREP&Granularity=1&OrderByDesc=timestamp';
var url_2= 'http://conu.astuce.media/api/finance/securitydatapoints.json?Take=100&InternalSymbol=NGA_XNYM&DataProvider=TREP&Granularity=1&OrderByDesc=timestamp';
var url_3= 'http://conu.astuce.media/api/finance/securitydatapoints.json?Take=100&InternalSymbol=ADCB_XADS&DataProvider=TREP&Granularity=1&OrderByDesc=timestamp';
var url_4= 'http://conu.astuce.media/api/finance/securitydatapoints.json?Take=100&InternalSymbol=JOA_IFUS&DataProvider=TREP&Granularity=1&OrderByDesc=timestamp';
var url_5= 'http://conu.astuce.media/api/finance/securitydatapoints.json?Take=100&InternalSymbol=ADID&DataProvider=TREP&Granularity=1&OrderByDesc=timestamp';
$.when(
  $.getJSON(url),
  $.getJSON(url_2),
  $.getJSON(url_3),
  $.getJSON(url_4),
  $.getJSON(url_5)
).done(function(result1, result2, result3, result4, result5) {
  
  var result_1 = [];
  for (var i = 0; i != 10; ++i) result_1.push(result1[0].Results[i].High)
  var result_2 = [];
  for (var ii = 0; ii != 10; ++ii) result_2.push(result2[0].Results[ii].High)
  var result_3 = [];
  for (var iii = 0; iii != 10; ++iii) result_3.push(result2[0].Results[iii].High)
  var result_4 = [];
  for (var j = 0; j != 10; ++j) result_4.push(result4[0].Results[j].High)
  var result_5 = [];
  for (var jjj = 0; jjj != 10; ++jjj) result_5.push(result5[0].Results[jjj].High)
  // Our labels along the x-axis
var years = [1,2,3,4,5,6,7,8,9,10];
// For drawing the lines

          var ctx = document.getElementById("myChart");
          var myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: years,
              datasets: [
                { 
                  data: result_1,
                  label: "CC1_IFUS",
                  borderColor: "#3e95cd",
                  fill: false
                },
                { 
                  data: result_2,
                  label: "NGA_XNYM",
                  borderColor: "#8e5ea2",
                  fill: false
                },
                { 
                  data: result_3,
                  label: "ADCB_XADS",
                  borderColor: "#3cba9f",
                  fill: false
                },
                { 
                  data: result_4,
                  label: "JOA_IFUS",
                  borderColor: "#e8c3b9",
                  fill: false
                },
                { 
                  data:  result_5 ,
                  label: "ADID",
                  borderColor: "#c45850",
                  fill: false
                }
              ]
            }
          });


});



