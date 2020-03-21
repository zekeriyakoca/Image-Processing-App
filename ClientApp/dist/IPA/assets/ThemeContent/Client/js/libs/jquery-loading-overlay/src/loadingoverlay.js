/***************************************************************************************************
LoadingOverlay - A flexible loading overlay jQuery plugin
    Author          : Gaspare Sganga
    Version         : 1.5.4
    License         : MIT
    Documentation   : https://gasparesganga.com/labs/jquery-loading-overlay/
****************************************************************************************************/
(function($, undefined){
    // Default Settings
    var _defaults = {
        "color"             : "rgba(255, 255, 255, 0.8)",
        "custom"            : "",
        "fade"              : true,
        "fontawesome"       : "",
        "image": "data:image/gif;base64,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",
        "imagePosition"     : "center center",
        "maxSize"           : "100px",
        "minSize"           : "20px",
        "resizeInterval"    : 50,
        "size"              : "50%",
        "zIndex"            : 2147483647
    };
    
    $.LoadingOverlaySetup = function(settings){
        $.extend(true, _defaults, settings);
    };
    
    $.LoadingOverlay = function(action, options){
        switch (action.toLowerCase()) {
            case "show":
                var settings = $.extend(true, {}, _defaults, options);
                _Show("body", settings);
                break;
                
            case "hide":
                _Hide("body", options);
                break;
        }
    };
    
    $.fn.LoadingOverlay = function(action, options){
        switch (action.toLowerCase()) {
            case "show":
                var settings = $.extend(true, {}, _defaults, options);
                return this.each(function(){
                    _Show(this, settings);
                });
                
            case "hide":
                return this.each(function(){
                    _Hide(this, options);
                });
        }
    };
    
    
    function _Show(container, settings){
        container = $(container);
        var wholePage   = container.is("body");
        var count       = container.data("LoadingOverlayCount");
        if (count === undefined) count = 0;
        if (count === 0) {
            var overlay = $("<div>", {
                "class" : "loadingoverlay",
                "css"   : {
                    "background-color"  : settings.color,
                    "position"          : "relative",
                    "display"           : "flex",
                    "flex-direction"    : "column",
                    "align-items"       : "center",
                    "justify-content"   : "center"
                }
            });
            if (settings.zIndex !== undefined) overlay.css("z-index", settings.zIndex);
            if (settings.image) overlay.css({
                "background-image"      : "url(" + settings.image + ")",
                "background-position"   : settings.imagePosition,
                "background-repeat"     : "no-repeat"
            });
            if (settings.fontawesome) $("<div>", {
                "class" : "loadingoverlay_fontawesome " + settings.fontawesome
            }).appendTo(overlay);
            if (settings.custom) $(settings.custom).appendTo(overlay);
            if (wholePage) {
                overlay.css({
                    "position"  : "fixed",
                    "top"       : 0,
                    "left"      : 0,
                    "width"     : "100%",
                    "height"    : "100%"
                });
            } else {
                overlay.css("position", (container.css("position") === "fixed") ? "fixed" : "absolute");
            }
            _Resize(container, overlay, settings, wholePage);
            if (settings.resizeInterval > 0) {
                var resizeIntervalId = setInterval(function(){
                    _Resize(container, overlay, settings, wholePage);
                }, settings.resizeInterval);
                container.data("LoadingOverlayResizeIntervalId", resizeIntervalId);
            }
            if (!settings.fade) {
                settings.fade = [0, 0];
            } else if (settings.fade === true) {
                settings.fade = [400, 200];
            } else if (typeof settings.fade === "string" || typeof settings.fade === "number") {
                settings.fade = [settings.fade, settings.fade];
            }
            container.data({
                "LoadingOverlay"                : overlay,
                "LoadingOverlayFadeOutDuration" : settings.fade[1]
            });
            overlay
                .hide()
                .appendTo("body")
                .fadeIn(settings.fade[0]);
        }
        count++;
        container.data("LoadingOverlayCount", count);
    }

    function _Hide(container, force){
        container = $(container);
        var count = container.data("LoadingOverlayCount");
        if (count === undefined) return;
        count--;
        if (force || count <= 0) {
            var resizeIntervalId = container.data("LoadingOverlayResizeIntervalId");
            if (resizeIntervalId) clearInterval(resizeIntervalId);
            container.data("LoadingOverlay").fadeOut(container.data("LoadingOverlayFadeOutDuration"), function(){
                $(this).remove();
            });
            container.removeData(["LoadingOverlay", "LoadingOverlayCount", "LoadingOverlayFadeOutDuration", "LoadingOverlayResizeIntervalId"]);
        } else {
            container.data("LoadingOverlayCount", count);
        }
    }
    
    function _Resize(container, overlay, settings, wholePage){
        if (!wholePage) {
            var x = (container.css("position") === "fixed") ? container.position() : container.offset();
            overlay.css({
                "top"       : x.top + parseInt(container.css("border-top-width"), 10),
                "left"      : x.left + parseInt(container.css("border-left-width"), 10),
                "width"     : container.innerWidth(),
                "height"    : container.innerHeight()
            });
        }
        var c    = wholePage ? $(window) : container;
        var size = "auto";
        if (settings.size && settings.size != "auto") {
            size = Math.min(c.innerWidth(), c.innerHeight()) * parseFloat(settings.size) / 100;
            if (settings.maxSize && size > parseInt(settings.maxSize, 10)) size = parseInt(settings.maxSize, 10) + "px";
            if (settings.minSize && size < parseInt(settings.minSize, 10)) size = parseInt(settings.minSize, 10) + "px";
        }
        overlay.css("background-size", size);
        overlay.children(".loadingoverlay_fontawesome").css("font-size", size);
    }
    
}(jQuery));