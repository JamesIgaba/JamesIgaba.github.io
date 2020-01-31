$(function () {
    "use strict"
    let timerId = null;

    $("#start_btn").click(circleDraw);

    function circleDraw() {
        
        const $width = parseInt($("#circle_width").val());
        const cirles_no = $("#no_of_circles").val();
        
        for (let i = 0; i < cirles_no; i++) {
            $("#ground_zero").append($("<div>", {
                "class": "circle",
                "css": {
                    "background-color": colors[Math.floor(Math.random() * colors.length)],
                    "top": (Math.floor(Math.random() * 199) + 50) + "px",
                    "left": (Math.floor(Math.random() * 699) + 100) + "px",
                    "visibility": "visible",
                    "width": $width + "px",
                    "height": $width + "px"
                },
                "click": function (evt) {
                    $(this).css("visibility","hidden");
                }
            }));
        }
        setInterval(growth, parseInt($("#growth_rate").val()));
        //alert(parseInt($("div.circle").css.getPropertyValue("width")) + $("#growth_amount")[0].value + "px");
    }

    function growth() {
        //$("#growth_amount")[0].value
        //$("growth_rate")[0].value
        // $("div.circle").css({
        //     "width": parseInt($("div.circle").css.getPropertyValue("width")) + $("#growth_amount")[0].value + "px",
        //     "height": parseInt($("div.circle").css.getPropertyValue("height")) + $("#growth_amount")[0].value + "px"
        // });
        // $(".circle").each(function () {
        //     let $this = $(this);
        //     let currentWidth = $this.width();
        //     let newWidth = currentWidth + $("#growth_amount").val();
        //     $this.width(newWidth);
        //     $this.height(newWidth);
        //     //$this.borderRadius(newWidth/2);
        // });
        let $width = parseInt($(".circle").width());
        let newWidth = $width + parseInt($("#growth_amount").val());
        $(".circle").css({
            "width": newWidth +"px",
            "height": newWidth + "px"
        });
    }

    const colors = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
    ];

});