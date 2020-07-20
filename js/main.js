$(function() {
    $(document).on("change keyup input click", "input[type='text']", function() {
        if(this.value.match(/[^0-9]/g)){
            this.value = this.value.replace(/[^0-9]/g, "");
        };
    });
});

