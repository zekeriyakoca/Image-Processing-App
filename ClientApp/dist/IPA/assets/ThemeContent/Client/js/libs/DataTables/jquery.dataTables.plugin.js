$.fn.dataTableExt.oApi.fnFilterClear = function (oSettings) {
    /* Remove global filter */
    oSettings.oPreviousSearch.sSearch = "";

    /* Remove the text of the global filter in the input boxes */
    if (typeof oSettings.aanFeatures.f != 'undefined') {
        var n = oSettings.aanFeatures.f;
        for (var i = 0, iLen = n.length; i < iLen; i++) {
            $('input', n[i]).val('');
        }
    }

    /* Remove the search text for the column filters - NOTE - if you have input boxes for these
    * filters, these will need to be reset
    */
    for (var i = 0, iLen = oSettings.aoPreSearchCols.length; i < iLen; i++) {
        oSettings.aoPreSearchCols[i].sSearch = "";
    }

    /* Redraw */
    oSettings.oApi._fnReDraw(oSettings);
}
$.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
    return {
        "iStart": oSettings._iDisplayStart,
        "iEnd": oSettings.fnDisplayEnd(),
        "iLength": oSettings._iDisplayLength,
        "iTotal": oSettings.fnRecordsTotal(),
        "iFilteredTotal": oSettings.fnRecordsDisplay(),
        "iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
        "iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
    };
}

$.fn.dataTableExt.oApi.UpdateScrolX = function (oSettings, width) {
    //var oSettings = _fnSettingsFromNode(this[_oExt.iApiIndex]);
    if (width != "") {
        oSettings.oScroll.sXInner = width;
    }
    this.fnDraw();
}
$.fn.dataTableExt.oApi.fnVisibleToColumnIndex = function (oSettings, iMatch) {
    return oSettings.oApi._fnVisibleToColumnIndex(oSettings, iMatch);
}

jQuery.fn.dataTableExt.oApi.fnSetFilteringDelay = function (oSettings, iDelay) {
    var _that = this;
    this.each(function (i) {
        //alert(i);
        $.fn.dataTableExt.iApiIndex = i;
        var iDelay = (iDelay && (/^[0-9]+$/.test(iDelay)) ? iDelay : 1000),
    $this = this, oTimerId = null, sPreviousSearch = null,
        /*, .filter_column.filter_text input:text*/
    anControl = $('div.dataTables_filter input:text');
        anControl.unbind('keyup').bind('keyup', function () {
            var $$this = $this;
            if (sPreviousSearch === null || sPreviousSearch != anControl.val().trim()) {
                window.clearTimeout(oTimerId);
                sPreviousSearch = anControl.val().trim();
                oTimerId = window.setTimeout(function () {
                    $.fn.dataTableExt.iApiIndex = i;
                    _that.fnFilter(anControl.val());
                }, iDelay);
            }
        }).keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                if (anControl.val().trim().length > 0) {
                    sPreviousSearch = anControl.val();
                    $.fn.dataTableExt.iApiIndex = i;
                    window.clearTimeout(oTimerId);
                    _that.fnFilter(anControl.val());
                }
            }
        });
        return this;
    });
    return this;
};