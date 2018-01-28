$.getJSON('http://conu.astuce.media/api/finance/securitydatapoints.json?Take=10&InternalSymbol=CC1_IFUS&DataProvider=TREP&Granularity=1&OrderByDesc=timestamp', function(data) {
        data.Results.forEach(function(element) {
            
            var text = `Date: ${element.Timestamp}<br>
            Time: ${element.Open}<br>
            Unix time: ${element.Date}`
            

            $(".mypanel").html(text);
          });


        return numbers = data.Results


});
