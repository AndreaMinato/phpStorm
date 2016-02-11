$(function() {
    $( "#inserito" ).datepicker();
    $( "#inserito" ).on('change', function() {
        $( "#inserito" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
    });
});