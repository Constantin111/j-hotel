$(function() {
    $(document).on("change keyup input click", "input[type='text']", function() {
        if(this.value.match(/[^0-9]/g)){
            this.value = this.value.replace(/[^0-9]/g, "");
        };
    });

    $(document).on("change keyup input click", "#oldDay", function() {

        var thisValue = this.value;
        if(thisValue > 31){
            alert('некоректное значение');
            $(this).val("");
        };
    });

    $(document).on("change keyup input click", "#oldMonth", function() {

        var thisValue = this.value;
        if(thisValue > 12){
            alert('некоректное значение');
            $(this).val("");
        };
    });

    $(document).on("change keyup input click", "#oldYear", function() {

        var thisValue = this.value;
        if(thisValue > 2020){
            alert('некоректное значение');
            $(this).val("");
        };
    });

});

jQuery(function($){
    $('#oldDay').inputmask('99');
    $('#oldMonth').inputmask('99');
    $('#oldYear').inputmask('9999');
});