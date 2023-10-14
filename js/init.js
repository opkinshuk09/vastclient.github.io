function nombo_tm_stickyy() {
    "use strict";
    var e = jQuery(".fn_w_sminiboxes");
    e.length && e.each(function(e, t) {
        var o = jQuery(t).find(".fn_w_sminibox");
        if (o.css({
                height: "auto"
            }), jQuery(window).width() > 1200) {
            var r = o.map(function() {
                    return jQuery(this).outerHeight()
                }).get(),
                n = Math.max.apply(null, r);
            o.css({
                height: n + "px"
            })
        }
    })
}

function nombo_tm_waypoints() {
    "use strict";
    jQuery(".mamer_title_holder").each(function() {
        var e = jQuery(this);
        e.waypoint({
            handler: function() {
                e.addClass("load")
            },
            offset: "85%"
        })
    })
}

function nombo_tm_scrollable() {
    "use strict";
    var e = jQuery(window).height(),
        t = jQuery(".nombo_tm_leftpart .menu.scrollable"),
        o = jQuery(".nombo_tm_leftpart .menu"),
        r = jQuery(".nombo_tm_leftpart .leftpart_inner .logo").outerHeight(),
        n = jQuery(".nombo_tm_leftpart .copyright").outerHeight() + 100;
    o.css({
        height: e - r - n
    }), t.each(function() {
        jQuery(this).css({
            height: e - r - n
        }).niceScroll({
            touchbehavior: !1,
            cursorwidth: 0,
            autohidemode: !0,
            cursorborder: "0px solid #eee"
        })
    })
}

function nombo_tm_anchor() {
    "use strict";
    jQuery(".nombo_tm_leftpart .menu ul li a").off().on("click", function(e) {
        e.stopPropagation();
        var t = jQuery(this).attr("href");
        return "#" !== t && "#" === t.charAt(0) && $("html, body").animate({
            scrollTop: $(t).offset().top - 150
        }, 1e3), !1
    })
}

function nombo_tm_down() {
    "use strict";
    jQuery(".nombo_tm_arrow_wrap a").on("click", function() {
        return "#" !== $.attr(this, "href") && $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 150
        }, 1e3), !1
    })
}

function nombo_tm_imgtosvg() {
    "use strict";
    jQuery("img.svg").each(function() {
        var e = jQuery(this),
            t = e.attr("class"),
            o = e.attr("src");
        jQuery.get(o, function(o) {
            var r = jQuery(o).find("svg");
            void 0 !== t && (r = r.attr("class", t + " replaced-svg")), r = r.removeAttr("xmlns:a"), e.replaceWith(r)
        }, "xml")
    })
}

function nombo_tm_data_images() {
    "use strict";
    jQuery("*[data-img-url]").each(function() {
        var e = jQuery(this),
            t = e.data("img-url");
        e.css({
            backgroundImage: "url(" + t + ")"
        })
    })
}

function nombo_tm_animate_text() {
    "use strict";
    jQuery(".nombo_tm_animation_text_word").typed({
        strings: ["Freelancer", "Web Developer", "Photographer"],
        loop: !0,
        startDelay: 1e3,
        backDelay: 2e3
    }), jQuery(".nombo_tm_animation_text_word2").typed({
        strings: ["مستقل", "مطور ويب", "مصور فوتوغرافي"],
        loop: !0,
        startDelay: 1e3,
        backDelay: 2e3
    })
}

function mamer_popup() {
    "use strict";
    jQuery(".gallery_zoom").each(function() {
        jQuery(this).magnificPopup({
            delegate: "a.zoom",
            type: "image",
            gallery: {
                enabled: !0
            },
            removalDelay: 300,
            mainClass: "mfp-fade"
        })
    }), jQuery(".popup-youtube").each(function() {
        jQuery(this).magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    })
}

function tdProgress(e) {
    "use strict";
    e.find(".progress_inner").each(function(e) {
        var t = jQuery(this),
            o = parseInt(t.data("value"), 10),
            r = t.data("color"),
            n = t.find(".bar");
        t.find(".bar_in").css({
            width: o + "%",
            backgroundColor: r
        }), setTimeout(function() {
            n.addClass("open")
        }, 300 * e)
    })
}

function nombo_tm_isotope() {
    "use strict";
    jQuery(".masonry").isotope({
        itemSelector: ".masonry_item",
        masonry: {}
    })
}

function nombo_tm_partners() {
    "use strict";
    var e = jQuery(".nombo_tm_partners .owl-carousel"),
        t = "";
    t = jQuery("body").hasClass("rtl") ? "true" : "false", e.owlCarousel({
        rtl: t,
        loop: !0,
        items: 4,
        lazyLoad: !0,
        margin: 40,
        autoplay: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 2e3,
        dots: !0,
        nav: !1,
        navSpeed: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1040: {
                items: 3
            },
            1200: {
                items: 4
            },
            1600: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
}

function nombo_tm_contact_form() {
    "use strict";
    jQuery(".contact_form #send_message").on("click", function() {
        var e = jQuery(".contact_form #name").val(),
            t = jQuery(".contact_form #email").val(),
            o = jQuery(".contact_form #message").val(),
            r = jQuery(".contact_form #subject").val(),
            n = jQuery(".contact_form .returnmessage").data("success");
        return jQuery(".contact_form .returnmessage").empty(), "" === e || "" === t || "" === o ? jQuery("div.empty_notice").slideDown(500).delay(2e3).slideUp(500) : jQuery.post("modal/contact.php", {
            ajax_name: e,
            ajax_email: t,
            ajax_message: o,
            ajax_subject: r
        }, function(e) {
            jQuery(".contact_form .returnmessage").append(e), jQuery(".contact_form .returnmessage span.contact_error").length ? jQuery(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : (jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + n + "</span>"), jQuery(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === e && jQuery("#contact_form")[0].reset()
        }), !1
    })
}

function nombo_tm_location() {
    jQuery(".href_location").on("click", function() {
        var e = jQuery(this).text();
        e = e.replace(/\ /g, "+");
        return window.open("https://maps.google.com?q=" + e), !1
    })
}

function nombo_tm_kenburn_slider() {
    "use strict";
    jQuery(function() {
        jQuery(".nombo_tm_first_hero .overlay_slider").vegas({
            timer: !1,
            animation: ["kenburnsUp", "kenburnsLeft", "kenburnsRight"],
            delay: 7e3,
            slides: [{
                src: "img/slider/1.jpg"
            }, {
                src: "img/slider/2.jpg"
            }, {
                src: "img/slider/5.jpg"
            }]
        })
    })
}

function nombo_tm_ripple() {
    "use strict";
    jQuery("#ripple").ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: .04
    })
}

function nombo_tm_videoplayer() {
    "use strict";
    $(".youtube-bg").mb_YTPlayer()
}
jQuery(document).ready(function() {
    "use strict";
    nombo_tm_stickyy(), nombo_tm_waypoints(), nombo_tm_scrollable(), nombo_tm_anchor(), nombo_tm_down(), nombo_tm_imgtosvg(), nombo_tm_data_images(), nombo_tm_animate_text(), mamer_popup(), nombo_tm_isotope(), nombo_tm_partners(), nombo_tm_contact_form(), nombo_tm_location(), nombo_tm_kenburn_slider(), nombo_tm_ripple(), nombo_tm_videoplayer(), jQuery(window).on("resize", function() {
        nombo_tm_isotope(), nombo_tm_scrollable()
    }), jQuery(window).on("scroll", function() {
        nombo_tm_waypoints()
    }), jQuery(window).load("body", function() {
        setTimeout(function() {
            jQuery(".nombo_tm_preloader").addClass("loaded")
        }, 1e3), setTimeout(function() {
            nombo_tm_stickyy()
        }, 2e3)
    })
}), (new WOW).init(), jQuery(".mamer_progress").each(function() {
    "use strict";
    var e = jQuery(this);
    e.waypoint({
        handler: function() {
            tdProgress(e)
        },
        offset: "90%"
    })
}), $(".glitch").mgGlitch({
    destroy: !1,
    glitch: !0,
    scale: !0,
    blend: !0,
    blendModeType: "hue",
    glitch1TimeMin: 200,
    glitch1TimeMax: 400,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100
});