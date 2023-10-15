$(document).ready(function() {
    $("td").click(function() {
        var content = $(this).text();

        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");

            var columnIndex = $(this).index(); 
            var cliffSite = $("thead th").eq(columnIndex).text(); 

            var displayText = content + " at " + cliffSite; 

            if ($(this).hasClass("tdhighlight")) {
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>"+ displayText +"</p>");
            } else {
                $('#result p:contains(' + displayText + ')').remove();
                if ($('#result').has('p').length ==false) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "2em");
                }
            }
        }
    });
});
