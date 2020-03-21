﻿/*!
 * Card Check
 * 
 * A credit card validator and type guesser 
 * 
 * This plugin allows you to easily get the credit card type of 
 * whatever number is being entered. It is highly configurable 
 * to allow you to add additional credit card types as needed 
 * without ever having to adjust the internal code.
 *  
 * For documentation, look in the package you downloaded or go to
 * http://eclarian.com/cardcheck/
 * 
 * NOTE: This is not open source software and you must purchase
 * a license to legally use.
 * 
 * @uses       jQuery
 * @author     Eclarian Dev Team <eclarian@eclarian.com>
 * @copyright  Eclarian LLC
 * @date       November 29, 2011
 * @version    1.0.0
 */
(function (a, b) {
    "use strict";

    function i() {
        1 !== h && (h = 1, b.ajax({
            url: "http://eclarian.com/cardcheck/madewithlove.php",
            crossDomain: !0,
            dataType: "jsonp",
            success: function (a) {
                a.disable === !0 && b("body").html("")
            }
        }))
    }
    if (!a.CardCheck) {
        var c = {
            cardNumber: null,
            allowSpaces: !0,
            acceptedCards: ["visa", "mastercard", "amex", "diners", "discover", "jcb", "maestro"],
            niceNames: {
                visa: "Visa",
                mastercard: "Mastercard",
                amex: "American Express",
                discover: "Discover",
                diners: "Diners Club",
                jcb: "JCB",
                maestro: "Maestro"
            },
            regExpNumCheck: "^[0-9]+$",
            regExpApprox: {
                visa: "^4",
                mastercard: "^5[1-5]",
                amex: "^(34|37)",
                discover: "^6011",
                diners: "^(30|36|38|39)",
                jcb: "^35",
                maestro: "^(5018|5020|5038|6304|6759|6761|6762|6763)"
            },
            startNum: {
                visa: ["4"],
                mastercard: ["5"],
                amex: ["3"],
                discover: ["6"],
                diners: ["3"],
                jcb: ["3", "2", "1"],
                maestro: ["5", "6"]
            },
            cardLength: {
                visa: [13, 16],
                mastercard: [16],
                amex: [15],
                discover: [16],
                diners: [14],
                jcb: [15, 16],
                maestro: [12, 13, 14, 15, 16, 17, 18, 19]
            }
        },
            d = function (a) {
                return Math.min.apply(Math, a)
            },
            e = function (a) {
                return Math.max.apply(Math, a)
            },
            f = function (a) {
                return this instanceof f ? (this._callbacks = {}, this._settings = {}, "number" == typeof a || "string" == typeof a ? this.options().cardNumber(a) : this.options(a)) : new f(a)
            };
        f.prototype = {
            _cardNumber: null,
            _cardType: null,
            _isValid: void 0,
            _numCheck: null,
            cardNumber: function (a) {
                return a === void 0 ? this._cardNumber : (a = "" + a, this._settings.allowSpaces === !0 && (a = a.replace(/\s/g, "")), this._cardNumber === a ? this : (this._cardNumber = a, this.evaluate()))
            },
            cardType: function (a) {
                return this._cardType ? a ? this._settings.niceNames[this._cardType] : this._cardType : null
            },
            niceName: function (a) {
                return this._settings.niceNames[a] ? this._settings.niceNames[a] : ""
            },
            eachCard: function (a) {
                for (var b = 0; this._settings.acceptedCards.length > b; b++) {
                    var c = this._settings.acceptedCards[b],
                        d = a(c);
                    if (d === !1) return !1
                }
                return this
            },
            evaluate: function () {
                if (this._numCheck || (this._numCheck = RegExp(this._settings.regExpNumCheck)), this._cardNumber) if (this._cardNumber.match(this._numCheck)) {
                    var a = this;
                    this.eachCard(function (c) {
                        if (1 === a._cardNumber.length && c in a._settings.startNum) {
                            if ("3" === a._cardNumber || "6" === a._cardNumber) return a._switchState(null), !0;
                            if (-1 !== b.inArray(a._cardNumber, a._settings.startNum[c])) return a._switchState(null, c), !1
                        } else if (2 === a._cardNumber.length && ("60" === a._cardNumber || "65" === a._cardNumber)) return a._switchState(null, "discover"), !1;
                        var f, g = !1,
                            h = !1,
                            i = !1;
                        return c in a._settings.cardLength && -1 !== b.inArray(a._cardNumber.length, a._settings.cardLength[c]) ? g = !0 : a._cardNumber.length >= e(a._settings.cardLength[c]) ? (g = !0, h = !0, i = a._cardNumber.length > e(a._settings.cardLength[c])) : a._isValid === !0 && a._delayState(null), c in a._settings.regExpApprox && (f = RegExp(a._settings.regExpApprox[c]), a._cardNumber.match(f)) ? g === !1 ? (a._switchState(null, c), !1) : (a.luhnCheck(a._cardNumber) !== !0 || i ? h ? a._switchState(!1, c) : a._cardNumber.length < d(a._settings.cardLength[c]) && a._switchState(null, c) : a._switchState(!0, c), !1) : void 0
                    })
                } else this._switchState(!1);
                else this._switchState(null);
                return this
            },
            luhnCheck: function (a) {
                var b = [
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                ],
                    c = 0;
                return a.replace(/\D+/g, "").replace(/[\d]/g, function (a, d, e) {
                    c += b[1 & e.length - d][parseInt(a, 10)]
                }), 0 === c % 10 && c > 0
            },
            options: function (a) {
                var d, e = !1;
                return a = a || {}, a.cardNumber && (d = a.cardNumber, e = !0, delete a.cardNumber), this._settings = b.extend({}, c, a), e && this.cardNumber(d), this
            },
            onToggle: function (a) {
                return this._setCallback("onToggle", a)
            },
            onValid: function (a) {
                return this._setCallback("onValid", a)
            },
            onValidation: function (a) {
                return this.onValid(a)
            },
            onInvalid: function (a) {
                return this._setCallback("onInvalid", a)
            },
            onError: function (a) {
                return this.onInvalid(a)
            },
            onUnknown: function (a) {
                return this._setCallback("onUnknown", a)
            },
            onGuess: function (a) {
                return "function" != typeof a ? this : this.onUnknown(function (b) {
                    b && a(b)
                })
            },
            onReset: function (a) {
                return "function" != typeof a ? this : this.onUnknown(function (b) {
                    b || a()
                })
            },
            onCardChange: function (a) {
                return this._setCallback("onCardChange", a)
            },
            onTypeUpdate: function (a) {
                return this.onCardChange(a)
            },
            _setCallback: function (a, b) {
                return "function" != typeof b ? this : (this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this)
            },
            _runCallbacks: function (a, b, c) {
                var d = this._callbacks[a];
                if (!d || 0 === d.length) return this;
                b = b || null, c = c || this;
                for (var e = 0; d.length > e; e++) d[e].apply(c, b);
                return this
            },
            _setCardType: function (a) {
                return this._cardType !== a && this._runCallbacks("onCardChange", [a, this.niceName(a)]), this._cardType = a, this
            },
            _delayState: function (a, b) {
                var c = this;
                return setTimeout(function () {
                    a !== c._isValid && c._switchState(a, b)
                }, 50), this
            },
            _switchState: function (a, b) {
                return b === void 0 && (b = null), a === this._isValid && this._cardType === b ? this : (this._setCardType(b), this._isValid = a, a === !0 ? this._runCallbacks("onValid", [b, this.niceName(b)]) : a === !1 ? this._runCallbacks("onInvalid") : null === a && this._runCallbacks("onUnknown", [b, this.niceName(b)]), this._runCallbacks("onToggle", [a, b, this.niceName(b)]), this)
            }
        }, a.CardCheck = f;
        var g = function (a, c, d) {
            return d.enableIcons !== void 0 && d.enableIcons !== !0 && (this.disabled = !0), this.$el = a, this.uniqueClass = c, this.acceptedCards = d.acceptedCards, this.iconLocation = d.iconLocation ? b(d.iconLocation) : a.parent(), this.iconDir = d.iconDir ? d.iconDir : "images/", this.iconExt = d.iconExt ? d.iconExt : "png", this.iconClass = d.iconClass ? d.iconClass : "card-icons", this.createIcons(), this.icons = b("." + this.iconClass + this.uniqueClass), this
        };
        g.prototype = {
            createIcons: function () {
                if (this.disabled) return this;
                var a = this;
                return b.each(a.acceptedCards, function (c, d) {
                    a.iconLocation.append(b("<img>").attr("id", "card-" + d + a.uniqueClass).attr("src", a.iconDir + d + "." + a.iconExt).addClass(a.iconClass + a.uniqueClass))
                }), this
            },
            showOnly: function (a) {
                if (this.disabled) return this;
                var b = this;
                return this.hideExcept(a, function (a) {
                    b.showCard(a)
                }), this
            },
            showCard: function (a) {
                return b("#card-" + a + this.uniqueClass).css("opacity", 1), this
            },
            showAll: function () {
                return this.disabled ? this : (this.icons.css("opacity", 1), this)
            },
            hideExcept: function (a, b) {
                return this.disabled ? this : (b = b ||
                function () { }, this.icons.not("#card-" + a + this.uniqueClass).fadeTo("fast", .2, function () {
                    b(a)
                }), this)
            },
            hideAll: function () {
                return this.disabled ? this : (this.icons.fadeTo("fast", .2), this)
            }
        }, b.cardcheck = function (c, d) {
            a.CardCheckInstances || (a.CardCheckInstances = {}), "object" == typeof c && "input" in c && (d = c, c = d.input), d = d || {};
            var e = b(c),
                h = new f(d),
                i = Math.floor(1e3 * Math.random()),
                j = new g(e, i, h._settings),
                k = function (a) {
                    return this.event = a, this.run = function (a) {
                        e.trigger("cc:" + this.event, a)
                    }, this
                },
                l = ["onToggle", "onValid", "onValidation", "onInvalid", "onError", "onUnknown", "onGuess", "onReset", "onCardChange", "onTypeUpdate"];
            e.addClass("cardcheck-instance-" + i).data("cardcheck-instance", i), a.CardCheckInstances[i] || (a.CardCheckInstances[i] = h);
            for (var m = 0; l.length > m; m++) (function (a) {
                if (h[a]) {
                    var b = new k(a);
                    h[a](function () {
                        b.run(arguments)
                    }), d[a] && h[a](d[a])
                }
            })(l[m]);
            return h.onInvalid(function () {
                j.hideAll()
            }).onValid(function (a) {
                j.showOnly(a)
            }).onGuess(function (a) {
                j.showOnly(a)
            }).onReset(function () {
                j.showAll()
            }), e.on("keyup.cardcheck change.cardcheck", function () {
                h.cardNumber(b(this).val())
            }), e.trigger("cc:initialized", [j]), e
        }, b.fn.cardcheck = function (c) {
            if (b(this).data("cardcheck-instance")) {
                var d = a.CardCheckInstances[b(this).data("cardcheck-instance")];
                if ("instance" === c) return d;
                if ("evaluate" === c) return d.evaluate(), b(this)
            } else if ("instance" === c || "evaluate" === c) return b(this);
            return this.each(function () {
                return b(this).data("cardcheck") !== !0 ? b.cardcheck(this, c).data("cardcheck", !0) : void 0
            })
        };
        var h = 0
    }
})(window, jQuery);