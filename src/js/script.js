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
    $("#btn_assign").click(() => {
        $(".__ass").show(0);
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
    });
    $("#btn_attend").click(() => {
        $(".__ass").hide();
        $(".__att").show();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").hide();
    });
    $("#btn_downld").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").show();
        $(".__ast").hide();
        $(".__grd").hide();
    });
    $("#btn_assist").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").show();
        $(".__grd").hide();
    });
    $("#btn_grade").click(() => {
        $(".__ass").hide();
        $(".__att").hide();
        $(".__dow").hide();
        $(".__ast").hide();
        $(".__grd").show();
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