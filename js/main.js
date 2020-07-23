$(function () {
    $(document).on("change keyup input click", "input[type='text']", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
        ;
    });

    $(document).on("change keyup input click", "#oldDay", function () {

        var thisValue = this.value;
        if (thisValue > 31) {
            alert('некоректное значение');
            $(this).val("");
        }
        ;
    });

    $(document).on("change keyup input click", "#oldMonth", function () {

        var thisValue = this.value;
        if (thisValue > 12) {
            alert('некоректное значение');
            $(this).val("");
        }
        ;
    });

    $(document).on("change keyup input click", "#oldYear", function () {

        var thisValue = this.value;
        if (thisValue > 2020) {
            alert('некоректное значение');
            $(this).val("");
        }
        ;
    });

    $(".wellcome-block__date-acces__btn").click(function () {

        var oldDay = $("#oldDay").val();
        var oldMonth = $("#oldMonth").val();
        var oldYear = $("#oldYear").val();

        if (oldDay =="" || oldMonth == "" || oldYear == "") {
            alert('Введите дату рождения' + oldDay + oldMonth + oldYear);

        } else {
            $(".age-gate__block").removeClass('active');
            $(".post-age-gate__block").addClass("active");
            new fullpage('#fullpage', {
                navigation: true,
                responsiveWidth: 700,
                anchors: ['home', 'about-us', 'contact'],
                parallax: true,
                onLeave: function (origin, destination, direction) {
                    console.log("Leaving section" + origin.index);
                },
            });
        }
    });


});

jQuery(function ($) {
    $('#oldDay').inputmask('99');
    $('#oldMonth').inputmask('99');
    $('#oldYear').inputmask('9999');
});

