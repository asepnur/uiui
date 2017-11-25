$(document).ready(() => {
    $(".__wr").click(() => {
        $("._md").css("display", "block");
    });
    $('.__x').click(() => {
        $("._md").css("display", "none");
    });
});

// courses

$(document).ready(() => {
    $(".__att").hide();
    $(".__dow").hide();
    $(".__ast").hide();
    $(".__grd").hide();
    $(".__abt").hide();
    $("#btn_assign").click(() => {
        $(".__ass").show(0);
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_attend").click(() => {
        $(".__ass").hide();
        $(".__att").show();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_downld").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").show();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_assist").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").show();
        $(".__grd").hide();
        $(".__abt").hide();
    });
    $("#btn_grade").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").show();
        $(".__abt").hide();
    });
    $("#btn_about").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
        $(".__abt").show();
    });
});

// staff

$(document).ready(() => {
    $(".__tab2").hide();
    $(".__tab3").hide();

    $("#btnTab1").click(() => {
        $("#btnTab1").addClass("_ta5l3a");
        $("#btnTab2").removeClass("_ta5l3a");
        $("#btnTab3").removeClass("_ta5l3a");
        $(".__tab1").show();
        $(".__tab2").hide();
        $(".__tab3").hide();
    });
    $("#btnTab2").click(() => {
        $("#btnTab1").removeClass("_ta5l3a");
        $("#btnTab2").addClass("_ta5l3a");
        $("#btnTab3").removeClass("_ta5l3a");
        $(".__tab1").hide();
        $(".__tab2").show();
        $(".__tab3").hide();
    });
    $("#btnTab3").click(() => {
        $("#btnTab1").removeClass("_ta5l3a");
        $("#btnTab2").removeClass("_ta5l3a");
        $("#btnTab3").addClass("_ta5l3a");
        $(".__tab1").hide();
        $(".__tab2").hide();
        $(".__tab3").show();
    });
});

// _tb3g

$(document).ready(() => {
    $(".__menu2").hide();
    $(".__menu3").hide();
    $(".__menu4").hide();
    $(".__menu5").hide();

    $(".__btnmenu1").click(() => {
        $(".__btnmenu1").addClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").show();
        $(".__menu2").hide();
        $(".__menu3").hide();
        $(".__menu4").hide();
        $(".__menu5").hide();
    });
    $(".__btnmenu2").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").addClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").show();
        $(".__menu3").hide();
        $(".__menu4").hide();
        $(".__menu5").hide();
    });
    $(".__btnmenu3").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").addClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").hide();
        $(".__menu3").show();
        $(".__menu4").hide();
        $(".__menu5").hide();
    });
    $(".__btnmenu4").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").addClass("_ta5l3a");
        $(".__btnmenu5").removeClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").hide();
        $(".__menu3").hide();
        $(".__menu4").show();
        $(".__menu5").hide();
    });
    $(".__btnmenu5").click(() => {
        $(".__btnmenu1").removeClass("_ta5l3a");
        $(".__btnmenu2").removeClass("_ta5l3a");
        $(".__btnmenu3").removeClass("_ta5l3a");
        $(".__btnmenu4").removeClass("_ta5l3a");
        $(".__btnmenu5").addClass("_ta5l3a");
        $(".__menu1").hide();
        $(".__menu2").hide();
        $(".__menu3").hide();
        $(".__menu4").hide();
        $(".__menu5").show();
    });
});

// Loading

var buttons = document.querySelectorAll('.ladda-button');

Array.prototype.slice.call(buttons).forEach(function(button) {

    var resetTimeout;

    button.addEventListener('click', function() {

        if (typeof button.getAttribute('data-loading') === 'string') {
            button.removeAttribute('data-loading');
        } else {
            button.setAttribute('data-loading', '');
        }

        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(function() {
            button.removeAttribute('data-loading');
        }, 2000);

    }, false);

});


// home screen

var current = 0;
var rotator_obj = null;

var images_array = new Array();
images_array[0] = "rotator_1";
images_array[1] = "rotator_2";
images_array[2] = "rotator_3";

var rotate_them = setInterval(function() { rotating() }, 1000);

function rotating() {

    rotator_obj = document.getElementById(images_array[current]);

    if (current != 0) {

        var rotator_obj_pass = document.getElementById(images_array[current - 1]);
        rotator_obj_pass.style.left = "-320px";

    } else {

        rotator_obj.style.left = "-320px";

    }

    var slideit = setInterval(function() { change_position(rotator_obj) }, 30);

    current++;

    if (current == images_array.length + 1) {

        var rotator_obj_passed = document.getElementById(images_array[current - 2]);
        rotator_obj_passed.style.left = "-320px";
        current = 0;
        rotating();

    }

}

function change_position(rotator_obj, type) {

    var intleft = parseInt(rotator_obj.style.left);

    if (intleft != 0) {

        rotator_obj.style.left = intleft + 32 + "px";

    }

}