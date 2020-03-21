Number.prototype.formatMoney = function (fractionDigits, decimal, separator) {
  fractionDigits = isNaN(fractionDigits = Math.abs(fractionDigits)) ? 2 : fractionDigits;

  decimal = typeof (decimal) === "undefined" ? "." : decimal;

  separator = typeof (separator) === "undefined" ? "," : separator;

  var number = this;

  var neg = number < 0 ? "-" : "";

  var wholePart = parseInt(number = Math.abs(+number || 0).toFixed(fractionDigits)) + "";

  var separtorIndex = (separtorIndex = wholePart.length) > 3 ? separtorIndex % 3 : 0;

  return neg +

    (separtorIndex ? wholePart.substr(0, separtorIndex) + separator : "") +

    wholePart.substr(separtorIndex).replace(/(\d{3})(?=\d)/g, "$1" + separator) +

    (fractionDigits ? decimal + Math.abs(number - wholePart).toFixed(fractionDigits).slice(2) : "");

};


function formatMoney(raw) {

  return Number(raw).formatMoney(2, ',', '.');

}

GetSubFieldArray = function (fieldVal) {
  _subFieldArray = [];
  switch (fieldVal) {
    case "AreaType":
      _subFieldArray = _Areas;
      break;
    case "BrancheType":
      _subFieldArray = _Branches;
      break;
    case "AccountNo":
      _subFieldArray = _Accounts;
      break;
    case "TransactionType":
      _subFieldArray = _TransactionTypes;
      break;
    case "DebtOrReceivableTypes":
      _subFieldArray = _DebtOrReceivableTypes;
      break;
    case "Currency":
      _subFieldArray = _Currencies;
      break;
    case "BankName":
      _subFieldArray = _Banks;
      break;
    case "TransactionErpTypeDesc":
      _subFieldArray = _ErpTransferStatusTypes;
      break;
    case "ErpTransferStatusType":
      _subFieldArray = _ErpTransferStatusTypes;
          break;
    case "TransactionErpType":
        _subFieldArray = _TransactionErpTypes;
          break;
  }

  return _subFieldArray;
};
FieldTranslate = function (Field) {
    let turkishName = "";
    switch (Field) {
        case "AreaType":
            turkishName = "Firma";
            break;

        case "BrancheType":
            turkishName = "Şube";
            break;

        case "AccountNo":
            turkishName = "Hesap No";
            break;

        case "TransactionType":
            turkishName = "İşlem Tipi";
            break;

        case "DebtOrReceivableTypes":
            turkishName = "B/A";
            break;

        case "Currency":
            turkishName = "Para Birimi";
            break;

        case "BankName":
            turkishName = "Banka";
            break;

        case "TransactionErpTypeDesc":
            turkishName = "Belge Türü";
            break;

        case "IdentityOrTaxNo":
            turkishName = "T.C. Kimlik No";
            break;

        case "IbanNo":
            turkishName = "Iban No";
            break;

        case "Description":
            turkishName = "Açıklama";
            break;

        case "Extra1":
            turkishName = "Ek Alan 1";
            break;

        case "Extra2":
            turkishName = "Ek Alan 2";
            break;

        case "Extra3":
            turkishName = "Ek Alan 3";
            break;
    }

    return turkishName;
};
OperatorTranslate =function (Operator) {
    let turkishName = "";
    switch (Operator) {
        case "Contains":
            turkishName = "İçinde";
            break;

        case "NotContains":
            turkishName = "İçinde Değilse";
            break;

        case "StartWith":
            turkishName = "İle Başlayan";
            break;

        case "NotStartWith":
            turkishName = "İle Başlamayan";
            break;

        case "EndWith":
            turkishName = "İle Biten";
            break;

        case "NotEndWith":
            turkishName = "İle Bitmeyeb";
            break;

        case "Equal":
            turkishName = "Eşitse";
            break;

        case "NotEqual":
            turkishName = "Eşit Değilse";
            break;
    }

    return turkishName;
};
IndicatorTranslate = function (Indicator) {
    let turkishName = "";
    switch (Indicator) {
        case "and":
            turkishName = "ve";
            break;

        case "or":
            turkishName = "veya";
            break;
    }

    return turkishName;
};

Date.parseDate = function (input, format) {
  return moment(input, format).toDate();
};
Date.prototype.dateFormat = function (format) {
  return moment(this).format(format);
};

// Pad Right
String.prototype.padRight = function (l, c) {
  return this + Array(l - this.length + 1).join(c || " ");
}

// Pad Left
String.prototype.padLeft = function (l, c) {
  return Array(l - this.length + 1).join(c || " ") + this;
}

jQuery.tablesorter.addParser({
    id: "number",
    is: function (s) {
        return /^[0-9]?[0-9,\.]*$/.test(s);
    },
    format: function (s) {
        return jQuery.tablesorter.formatFloat(s.replace(new RegExp(/[.]/g), ""));
    },
    type: "numeric"
});

jChartFX = {
  Culture: {
    "shortDate": "dd.MM.yyyy",
    "days": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
    "abbDays": ["Paz", "Pzts", "Sal", "Çar", "Per", "Cum", "Cumts"],
    "months": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    "abbMonths": ["Oc", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağus", "Eyl", "Ekim", "Kas", "Ar"],
    "am": "AM",
    "pm": "PM",
    "dateSepa": ".",
    "timeSepa": ":",
    // Numeric
    "decSymb": ",",
    "groupNumb": 3,
    "groupCurr": 2,
    "groupSymb": ".",
    "currSymb": "TL",
    "currPos": 0,
    "currNeg": 0,
    "percSymb": "%",
    "percPos": 1,
    "percNeg": 1

  }
};

Guid = {
  Set: function (val) {
    var value;
    if (arguments.length == 1) {
      if (this.IsValid(arguments[0])) {
        value = arguments[0];
      } else {
        value = this.Empty();
      }
    }
    $(this).data("value", value);
    return value;
  },

  Empty: function () {
    return "00000000-0000-0000-0000-000000000000";
  },

  IsEmpty: function (gid) {
    return gid == this.Empty() || typeof (gid) == 'undefined' || gid == null || gid == '';
  },

  IsValid: function (value) {
    rGx = new RegExp("\\b(?:[A-F0-9]{8})(?:-[A-F0-9]{4}){3}-(?:[A-F0-9]{12})\\b");
    return rGx.exec(value) != null;
  },

  New: function () {
    if (arguments.length == 1 && this.IsValid(arguments[0])) {
      $(this).data("value", arguments[0]);
      value = arguments[0];
      return value;
    }

    var res = [], hv;
    var rgx = new RegExp("[2345]");
    for (var i = 0; i < 8; i++) {
      hv = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      if (rgx.exec(i.toString()) != null) {
        if (i == 3) { hv = "6" + hv.substr(1, 3); }
        res.push("-");
      }
      res.push(hv.toUpperCase());
    }
    value = res.join('');
    $(this).data("value", value);
    return value;
  },

  Value: function () {
    if ($(this).data("value")) {
      return $(this).data("value");
    }
    var val = this.New();
    $(this).data("value", val);
    return val;
  }
};

xLoad = {
  add: function (container) {

    var height = $(container).height();
    var loading = tpl.get("controls/Loading");
    var spanh = height == 0 ? 0 : -16
    var xel = $(loading).css({ "margin-top": ((height / 2) + spanh) + "px" });
    $(container).append(xel);
  },
};

tpl = {
  url: function (name) {
    if (this.path != null)
      return '/Scripts/Templates/' + this.path + '/' + name + '.html' + '?v=' + window.AppVersion;
    else
      return '/Scripts/Templates/' + name + '.html' + '?v=' + window.AppVersion;
  },
  path: null,
  // Hash of preloaded templates for the app
  templates: {},

  // Recursively pre-load all the templates for the app.
  // This implementation should be changed in a production environment. All the template files should be
  // concatenated in a single file.
  loadTemplates: function (names, callback) {

    var that = this;

    var loadTemplate = function (index) {
      var name = names[index];
      //console.log('Loading template: ' + name);
      $.get(this.url(name), function (data) {
        that.templates[name] = data;
        index++;
        if (index < names.length) {
          loadTemplate(index);
        } else {
          callback();
        }
      });
    }

    loadTemplate(0);
  },

  loadInTemplate: function (name) {

    var that = this;
    //console.log('Loading template: ' + name);
    $.ajax({
      dataType: 'html',
      async: false,
      url: this.url(name),
      success: function (response) {
        that.templates[name] = response;
      }
    });
    return that.templates[name];
  },

  // Get template by name from hash of preloaded templates
  get: function (name, path) {
    if (path != 'undefined')
      this.path = path;
    var that = this;
    if (!that.templates[name]) {
      return that.loadInTemplate(name);
    }
    return that.templates[name];
  }

};
util = {
  stateImage: function (state) {
    return "<img src='/Content/Developer/img/fineFiles/16/active" + state + ".png' />";
  },
  stateGreenPoint: function () {
    return "<img src='/Content/Developer/img/fineFiles/16/stateGreenPoint.png' />";
  },
  stateYellowPoint: function () {
    return "<img src='/Content/Developer/img/fineFiles/16/stateYellowPoint.png' />";
  },
  stateIcon: function (state) {
    return "<img width='16' src='/Content/Developer/img/fineFiles/state" + state + ".png' />";
  },
  stateColor: function (color) {
    if (color == "white")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/white.gif' />";
    if (color == "blue")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/blue.gif' />";
    if (color == "darkblue")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/darkblue.gif' />";
    if (color == "green")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/green.gif' />";
    if (color == "orange")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/orange.gif' />";
    if (color == "purple")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/purple.gif' />";
    if (color == "red")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/red.gif' />";
    if (color == "yellow")
      return "<img width='16' src='/Content/Developer/img/fineFiles/state/yellow.gif' />";

    return "<img width='16' src='/Content/Developer/img/fineFiles/state/white.gif' />";
  },
  ImageH: function (path, height, title) {
    return "<img height='" + height + "' src='" + path + "' title='" + title + "' />";
  },
  ImageW: function (path, width) {
    return "<img width='" + width + "' src='/" + path + "' />";
  },
  PayLoadImage: function (width) {
    return "<img width='" + width.toString() + "' src='/Content/Client/img/payerloading.gif' />";
  },
};
var msg = function (message) {
  $('#message-block').message(message, {
    position: 'top',
    append: true,
    classes: ['green-gradient'],
    closable: true,
    showCloseOnHover: true,
    groupSimilar: true,
    autoClose: 4000
  });
}

var fmsg = {
  message: function (msg, tip, targetelem) {

    var nmsgt = "blue";
    if (tip == 'info')
      nmsgt = "blue";
    else if (tip == 'success')
      nmsgt = "green";
    else if (tip == 'warn')
      nmsgt = "orange";
    else if (tip == 'error')
      nmsgt = "red";
    if (targetelem == undefined) {
      $('#message-block').message(msg, {
        position: 'top',
        append: true,
        classes: [nmsgt + '-gradient'],
        closable: true,
        showCloseOnHover: true,
        groupSimilar: true,
        autoClose: 8000
      });
    }
    else {
      $(targetelem).message(msg, {
        position: 'top',
        append: true,
        classes: [nmsgt + '-gradient'],
        closable: true,
        showCloseOnHover: true,
        groupSimilar: true,
        autoClose: 8000
      });
    }
  },
  info: function (msg, targetelem) {
    this.message(msg, 'info', targetelem);
  },
  success: function (msg, targetelem) {
    this.message(msg, 'success', targetelem);
  },
  warn: function (msg, targetelem) {
    this.message(msg, 'warn', targetelem);
  },
  error: function (msg, targetelem) {
    this.message(msg, 'error', targetelem);
  },
}

var notif = function (msg) {
  notify(msg, {
    system: false,
    vPos: 'bottom',
    hPos: 'right',
    autoClose: true,
    closeButton: true,
    showCloseOnHover: true,
    groupSimilar: true
  });
}
nmsg = {
  message: function (msg, tip) {
    var nmsgt = "blue";
    if (tip == 'info')
      nmsgt = "blue";
    else if (tip == 'success')
      nmsgt = "green";
    else if (tip == 'warn')
      nmsgt = "orange";
    else if (tip == 'error')
      nmsgt = "red";
    notify(msg, {
      system: false,
      title:'TEST',
      vPos: 'bottom',
      hPos: 'right',
      autoClose: true,
      closeButton: true,
      showCloseOnHover: true,
      groupSimilar: true,
      classes: [nmsgt + "-gradient"],
    });
  },
  info: function (msg) {
    this.message(msg, 'info');
  },
  success: function (msg) {
    this.message(msg, 'success');
  },
  warn: function (msg) {
    this.message(msg, 'warn');
  },
  error: function (msg) {
    this.message(msg, 'error');
  },
};

numberformat = {
  format: function (number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
}

dateutil = {
  dateparseGetDate: function (value) {
    if (value === "" || value === null || value === undefined)
      return "";

    return this.JSONDate(this.dateparsing(value));
  },
  dateparseGetDateWithTime: function (value) {
    if (value === "" || value === null || value === undefined)
      return "";

    return this.JSONDateWithTime(this.dateparsing(value));
  },
  dateparseGetDateWithTimeAndSecond: function (value) {
    if (value === "" || value === null || value === undefined)
      return "";

    return this.JSONDateWithTimeAndSecond(this.dateparsing(value));
  },
  dateparseGetDateOnlyTime: function (value) {
    return this.JSONDateOnlyTime(this.dateparsing(value));
  },
  dateparsing: function (value) {
    return new Date(parseInt(value.replace(/\/+Date\(([\d+-]+)\)\/+/, '$1')));
  },
  JSONDate: function (dateStr) {
    var m, day;
    jsonDate = dateStr;
    var d = jsonDate;
    m = d.getMonth() + 1;
    if (m < 10)
      m = '0' + m;
    if (d.getDate() < 10)
      day = '0' + d.getDate();
    else
      day = d.getDate();
    return (day + '.' + m + '.' + d.getFullYear());
  },
  JSONDateWithTime: function (dateStr) {
    jsonDate = dateStr;
    var d = jsonDate;
    var m, day;
    m = d.getMonth() + 1;
    if (m < 10)
      m = '0' + m;
    if (d.getDate() < 10)
      day = '0' + d.getDate();
    else
      day = d.getDate();
    var formattedDate = day + "." + m + "." + d.getFullYear();
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var seconds = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();
    var formattedTime = hours + ":" + minutes; // + ":" + seconds;
    formattedDate = formattedDate + " " + formattedTime;
    return formattedDate;
  },
  JSONDateWithTimeAndSecond: function (dateStr) {
    jsonDate = dateStr;
    var d = jsonDate;
    var m, day;
    m = d.getMonth() + 1;
    if (m < 10)
      m = '0' + m;
    if (d.getDate() < 10)
      day = '0' + d.getDate();
    else
      day = d.getDate();
    var formattedDate = day + "." + m + "." + d.getFullYear();
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var seconds = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    formattedDate = formattedDate + " " + formattedTime;
    return formattedDate;
  },
  JSONDateOnlyTime: function (dateStr) {
    jsonDate = dateStr;
    var d = jsonDate;
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var seconds = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    return formattedTime;
  }
};

var progressLoading = false;
var progressEnd = false;
progressBox = {
  Open: function () {
    if (progressLoading)
      return false;
    progressEnd = false;
    progressLoading = true;
    var timeout;
    $.modal({
      classes: 'blue-gradient',
      contentAlign: 'center',
      width: 240,
      title: 'İşlem durumu',
      content: '<div style="line-height: 25px; padding: 0 0 10px"><span id="modal-status">İletişim kuruluyor...</span><br><span id="modal-progress">0%</span></div>',
      buttons: {},
      scrolling: false,
      actions: {
        'Cancel': {

          color: 'red',
          click: function (win) { win.closeModal(); }
        }
      },
      onOpen: function () {
        // Progress bar
        var progress = $('#modal-progress').progress(100, {
          size: 200,
          style: 'large',
          barClasses: ['anthracite-gradient', 'glossy'],
          stripes: true,
          darkStripes: false,
          showValue: false
        }),

          // Loading state
          loaded = 0,

          // Window
          win = $(this),
          repeater = 25,
          // Status text
          status = $('#modal-status'),

          // Function to simulate loading
          simulateLoading = function () {
            if (progressEnd == true) {
              loaded = 92;
              repeater = 0.1;
              progressEnd = false;
            }
            if (loaded == 91)
              status.text('İşlem sürüyor lütfen bekleyin (3/3)...');
            else
              ++loaded;

            progress.setProgressValue(loaded + '%', true);
            if (loaded === 100) {
              progress.hideProgressStripes().changeProgressBarColor('green-gradient');
              status.text('Tamamlandı!');
              /*win.getModalContentBlock().message('Content loaded!', {
                  classes: ['green-gradient', 'align-center'],
                  arrow: 'bottom'
              });*/

              setTimeout(function () {
                win.closeModal();
                progressLoading = false;
                progressEnd = false;
              }, 50);
            }
            else {
              if (loaded === 1) {
                status.text('İşlem başlatılıyor...');
                progress.changeProgressBarColor('blue-gradient');
              }
              else if (loaded === 25) {
                status.text('İşlem yapılıyor (1/3)...');
              }
              else if (loaded === 45) {
                status.text('İşlem yapılıyor (2/3)...');
              }
              else if (loaded === 85) {
                status.text('İşlem yapılıyor (3/3)...');
              }
              else if (loaded === 92) {
                status.text('İşlem tamamlanıyor...');
              }
              timeout = setTimeout(simulateLoading, repeater);
            }
          };

        // Start
        timeout = setTimeout(simulateLoading, 10);
      },
      onClose: function () {
        // Stop simulated loading if needed
        progressLoading = false;
        progressEnd = false;
        clearTimeout(timeout);

      }
    });
  },
  MOpen: function () {
    if (progressLoading)
      return false;
    progressEnd = false;
    progressLoading = true;
    ProgressBoxMobileModal = $.modal({
      classes: 'white-gradient',
      contentAlign: 'center',
      width: 50,
      content: tpl.get("controls/MLoading"),
      buttons: {},
      scrolling: false,
      contentBg: false,
      blocker: true,
      blockerVisible: true,
      resizable: false,
      actions: {},
      onOpen: function () {
        // Progress bar

      },
      onClose: function () {
        // Stop simulated loading if needed
        progressLoading = false;
        progressEnd = false;
      }
    });
  },
  MFOpen: function () {
    if (progressLoading)
      return false;
    progressEnd = false;
    progressLoading = true;

    $("#splashScreen").remove();
    $("body").append(tpl.get("controls/MFLoading"));
    $("#splashScreen").fadeIn(300);

  },
  Close: function () {
    progressEnd = true;
  },
  MClose: function () {
    progressEnd = true;
    ProgressBoxMobileModal.closeModal();
  },
  MFClose: function () {
    progressEnd = true;
    progressLoading = false;
    $("#splashScreen").fadeOut(300);
  },
};

var modal = function (templ) {
  $.modal({
    content: templ,
    title: 'Deneme',
    width: 950,
    scrolling: false,
    onOpen: function (win) {
      $(".modal-bg", this).css("padding", "0px 0px 0px 0px");
      $(".modal-buttons", this).css("padding-right", "30px");
      var table = $('#sorting-advanced', this);
      table.dataTable({
        'aoColumnDefs': [
          { 'bSortable': false, 'aTargets': [0, 5] }
        ],
        'sPaginationType': 'full_numbers',
        'sDom': '<"dataTables_header"lfr>t<"dataTables_footer"ip>',
        'fnInitComplete': function (oSettings) {
          // Style length select
          table.closest('.dataTables_wrapper').find('.dataTables_length select').addClass('select blue-gradient glossy').styleSelect();
          tableStyled = true;
        }
      });
    },
    actions: {
      'Close': {
        color: 'red',
        click: function (win) { win.closeModal(); }
      }
    },
    //buttons: {
    //    'iptal': {
    //        classes: 'huge red-gradient glossy',
    //        click: function (win) {
    //            win.closeModal();
    //        }
    //    },
    //    'Kaydet': {
    //        classes: 'huge green-gradient glossy Update',
    //        click: function (win) {
    //            modal("test")
    //        }
    //    }
    //},
    buttonsLowPadding: false,
    buttonsAlign: 'right'
  });
}

function URLParser(u) {
  var path = "", query = "", hash = "", params;
  if (u.indexOf("#") > 0) {
    hash = u.substr(u.indexOf("#") + 1);
    u = u.substr(0, u.indexOf("#"));
  }
  if (u.indexOf("?") > 0) {
    path = u.substr(0, u.indexOf("?"));
    query = u.substr(u.indexOf("?") + 1);
    params = query.split('&');
  } else
    path = u;
  return {
    getHost: function () {
      var hostexp = /\/\/([\w.-]*)/;
      var match = hostexp.exec(path);
      if (match != null && match.length > 1)
        return match[1];
      return "";
    },
    getPath: function () {
      var pathexp = /\/\/[\w.-]*(?:\/([^?]*))/;
      var match = pathexp.exec(path);
      if (match != null && match.length > 1)
        return match[1];
      return "";
    },
    getHash: function () {
      return hash;
    },
    getParams: function () {
      return params
    },
    getQuery: function () {
      return query;
    },
    setHash: function (value) {
      if (query.length > 0)
        query = "?" + query;
      if (value.length > 0)
        query = query + "#" + value;
      return path + query;
    },
    setParam: function (name, value) {
      if (!params) {
        params = new Array();
      }
      params.push(name + '=' + value);
      for (var i = 0; i < params.length; i++) {
        if (query.length > 0)
          query += "&";
        query += params[i];
      }
      if (query.length > 0)
        query = "?" + query;
      if (hash.length > 0)
        query = query + "#" + hash;
      return path + query;
    },
    getParam: function (name) {
      if (params) {
        for (var i = 0; i < params.length; i++) {
          var pair = params[i].split('=');
          if (decodeURIComponent(pair[0]) == name)
            return decodeURIComponent(pair[1]);
        }
      }
      //console.log('Query variable %s not found', name);
    },
    hasParam: function (name) {
      if (params) {
        for (var i = 0; i < params.length; i++) {
          var pair = params[i].split('=');
          if (decodeURIComponent(pair[0]) == name)
            return true;
        }
      }
      //console.log('Query variable %s not found', name);
    },
    removeParam: function (name) {
      query = "";
      if (params) {
        var newparams = new Array();
        for (var i = 0; i < params.length; i++) {
          var pair = params[i].split('=');
          if (decodeURIComponent(pair[0]) != name)
            newparams.push(params[i]);
        }
        params = newparams;
        for (var i = 0; i < params.length; i++) {
          if (query.length > 0)
            query += "&";
          query += params[i];
        }
      }
      if (query.length > 0)
        query = "?" + query;
      if (hash.length > 0)
        query = query + "#" + hash;
      return path + query;
    },
  }
}
$(function () {
  $.ajaxSetup({
    cache: true,
    success: function (result, status, xhr) {

    },
    complete: function (xhr, status) {
      //if (xhr.responseText.contains("NotAuthorized"))
      //{
      //    alert("yetki yok");
      //}

    },
    error: function (jqXHR, exception) {
      progressBox.Close();
      if (jqXHR.status === 0) {
        notif('Bağlantı yok! Ağ bağlantısını kontrol ediniz.');
      } else if (jqXHR.status == 302) {
        notif('Sayfa bulunamıyor. [302]');
      } else if (jqXHR.status == 404) {
        notif('Sayfa bulunamıyor. [404]');
      } else if (jqXHR.status == 500) {
        notif('Server hatası alındı. Hata [500].');
      } else if (exception === 'parsererror') {
        notif('Veriler dönüştürülemiyor. Tekrar deneyiniz.');
      } else if (exception === 'timeout') {
        notif('Oturumunuz sonlanmıştır. Lütfen tekrar oturum açınız.');
      } else if (exception === 'abort') {
        notif('İstek iptal edildi.');
      } else {
        notif('Bilinmeyen hata alındı! Hata : ' + jqXHR.responseText);
      }
    }
  });
});

function PopupCenter(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = ((height / 2) - (h / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}

$.fn.ForceNumericOnly =
  function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
        // home, end, period, and numpad decimal
        //alert(key);
        return (
          key == 8 ||
          //key == 17 ||
          key == 9 ||
          key == 46 ||
          key == 110 ||
          key == 190 ||
          (key >= 35 && key <= 40) ||
          (key >= 48 && key <= 57) ||
          (key >= 96 && key <= 105));
      });
    });
  };