! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 253)
}([function(e, t, n) {
    (function(t) {
        e.exports = t.$ = n(20)
    }).call(this, n(19))
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    var o = n(37)("wks"),
        a = n(38),
        r = n(1).Symbol,
        i = "function" == typeof r;
    (e.exports = function(e) {
        return o[e] || (o[e] = i && r[e] || (i ? r : a)("Symbol." + e))
    }).store = o
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, o;

            function a() {
                return t.apply(null, arguments)
            }

            function r(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return void 0 === e
            }

            function c(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function d(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function u(e, t) {
                var n, o = [];
                for (n = 0; n < e.length; ++n) o.push(t(e[n], n));
                return o
            }

            function l(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function M(e, t) {
                for (var n in t) l(t, n) && (e[n] = t[n]);
                return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function p(e, t, n, o) {
                return Yt(e, t, n, o, !0).utc()
            }

            function f(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function _(e) {
                if (null == e._isValid) {
                    var t = f(e),
                        n = o.call(t.parsedDateParts, function(e) {
                            return null != e
                        }),
                        a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                    e._isValid = a
                }
                return e._isValid
            }

            function m(e) {
                var t = p(NaN);
                return null != e ? M(f(t), e) : f(t).userInvalidated = !0, t
            }
            o = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, o = 0; o < n; o++)
                    if (o in t && e.call(this, t[o], o, t)) return !0;
                return !1
            };
            var h = a.momentProperties = [];

            function b(e, t) {
                var n, o, a;
                if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = f(t)), s(t._locale) || (e._locale = t._locale), h.length > 0)
                    for (n = 0; n < h.length; n++) s(a = t[o = h[n]]) || (e[o] = a);
                return e
            }
            var L = !1;

            function y(e) {
                b(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === L && (L = !0, a.updateOffset(this), L = !1)
            }

            function A(e) {
                return e instanceof y || null != e && null != e._isAMomentObject
            }

            function z(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function v(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = z(t)), n
            }

            function g(e, t, n) {
                var o, a = Math.min(e.length, t.length),
                    r = Math.abs(e.length - t.length),
                    i = 0;
                for (o = 0; o < a; o++)(n && e[o] !== t[o] || !n && v(e[o]) !== v(t[o])) && i++;
                return i + r
            }

            function T(e) {
                !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function k(e, t) {
                var n = !0;
                return M(function() {
                    if (null != a.deprecationHandler && a.deprecationHandler(null, e), n) {
                        for (var o, r = [], i = 0; i < arguments.length; i++) {
                            if (o = "", "object" == typeof arguments[i]) {
                                for (var s in o += "\n[" + i + "] ", arguments[0]) o += s + ": " + arguments[0][s] + ", ";
                                o = o.slice(0, -2)
                            } else o = arguments[i];
                            r.push(o)
                        }
                        T(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }, t)
            }
            var O, w = {};

            function Y(e, t) {
                null != a.deprecationHandler && a.deprecationHandler(e, t), w[e] || (T(t), w[e] = !0)
            }

            function D(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function S(e, t) {
                var n, o = M({}, e);
                for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (o[n] = {}, M(o[n], e[n]), M(o[n], t[n])) : null != t[n] ? o[n] = t[n] : delete o[n]);
                for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (o[n] = M({}, o[n]));
                return o
            }

            function q(e) {
                null != e && this.set(e)
            }
            a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, O = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) l(e, t) && n.push(t);
                return n
            };
            var N = {};

            function W(e, t) {
                var n = e.toLowerCase();
                N[n] = N[n + "s"] = N[t] = e
            }

            function x(e) {
                return "string" == typeof e ? N[e] || N[e.toLowerCase()] : void 0
            }

            function X(e) {
                var t, n, o = {};
                for (n in e) l(e, n) && (t = x(n)) && (o[t] = e[n]);
                return o
            }
            var C = {};

            function B(e, t) {
                C[e] = t
            }

            function j(e, t, n) {
                var o = "" + Math.abs(e),
                    a = t - o.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + o
            }
            var E = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                P = {},
                R = {};

            function I(e, t, n, o) {
                var a = o;
                "string" == typeof o && (a = function() {
                    return this[o]()
                }), e && (R[e] = a), t && (R[t[0]] = function() {
                    return j(a.apply(this, arguments), t[1], t[2])
                }), n && (R[n] = function() {
                    return this.localeData().ordinal(a.apply(this, arguments), e)
                })
            }

            function F(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function U(e, t) {
                return e.isValid() ? (t = $(t, e.localeData()), P[t] = P[t] || function(e) {
                    var t, n, o = e.match(E);
                    for (t = 0, n = o.length; t < n; t++) R[o[t]] ? o[t] = R[o[t]] : o[t] = F(o[t]);
                    return function(t) {
                        var a, r = "";
                        for (a = 0; a < n; a++) r += D(o[a]) ? o[a].call(t, e) : o[a];
                        return r
                    }
                }(t), P[t](e)) : e.localeData().invalidDate()
            }

            function $(e, t) {
                var n = 5;

                function o(e) {
                    return t.longDateFormat(e) || e
                }
                for (H.lastIndex = 0; n >= 0 && H.test(e);) e = e.replace(H, o), H.lastIndex = 0, n -= 1;
                return e
            }
            var J = /\d/,
                G = /\d\d/,
                V = /\d{3}/,
                K = /\d{4}/,
                Q = /[+-]?\d{6}/,
                Z = /\d\d?/,
                ee = /\d\d\d\d?/,
                te = /\d\d\d\d\d\d?/,
                ne = /\d{1,3}/,
                oe = /\d{1,4}/,
                ae = /[+-]?\d{1,6}/,
                re = /\d+/,
                ie = /[+-]?\d+/,
                se = /Z|[+-]\d\d:?\d\d/gi,
                ce = /Z|[+-]\d\d(?::?\d\d)?/gi,
                de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                ue = {};

            function le(e, t, n) {
                ue[e] = D(t) ? t : function(e, o) {
                    return e && n ? n : t
                }
            }

            function Me(e, t) {
                return l(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(function(e) {
                    return pe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, o, a) {
                        return t || n || o || a
                    }))
                }(e))
            }

            function pe(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var fe = {};

            function _e(e, t) {
                var n, o = t;
                for ("string" == typeof e && (e = [e]), c(t) && (o = function(e, n) {
                        n[t] = v(e)
                    }), n = 0; n < e.length; n++) fe[e[n]] = o
            }

            function me(e, t) {
                _e(e, function(e, n, o, a) {
                    o._w = o._w || {}, t(e, o._w, o, a)
                })
            }

            function he(e, t, n) {
                null != t && l(fe, e) && fe[e](t, n._a, n, e)
            }
            var be = 0,
                Le = 1,
                ye = 2,
                Ae = 3,
                ze = 4,
                ve = 5,
                ge = 6,
                Te = 7,
                ke = 8;

            function Oe(e) {
                return we(e) ? 366 : 365
            }

            function we(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            I("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), I(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), B("year", 1), le("Y", ie), le("YY", Z, G), le("YYYY", oe, K), le("YYYYY", ae, Q), le("YYYYYY", ae, Q), _e(["YYYYY", "YYYYYY"], be), _e("YYYY", function(e, t) {
                t[be] = 2 === e.length ? a.parseTwoDigitYear(e) : v(e)
            }), _e("YY", function(e, t) {
                t[be] = a.parseTwoDigitYear(e)
            }), _e("Y", function(e, t) {
                t[be] = parseInt(e, 10)
            }), a.parseTwoDigitYear = function(e) {
                return v(e) + (v(e) > 68 ? 1900 : 2e3)
            };
            var Ye, De = Se("FullYear", !0);

            function Se(e, t) {
                return function(n) {
                    return null != n ? (Ne(this, e, n), a.updateOffset(this, t), this) : qe(this, e)
                }
            }

            function qe(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function Ne(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && we(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), We(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }

            function We(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n = function(e, t) {
                    return (e % 12 + 12) % 12
                }(t);
                return e += (t - n) / 12, 1 === n ? we(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, I("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), I("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }), I("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }), W("month", "M"), B("month", 8), le("M", Z), le("MM", Z, G), le("MMM", function(e, t) {
                return t.monthsShortRegex(e)
            }), le("MMMM", function(e, t) {
                return t.monthsRegex(e)
            }), _e(["M", "MM"], function(e, t) {
                t[Le] = v(e) - 1
            }), _e(["MMM", "MMMM"], function(e, t, n, o) {
                var a = n._locale.monthsParse(e, o, n._strict);
                null != a ? t[Le] = a : f(n).invalidMonth = e
            });
            var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Xe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ce = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Be(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = v(t);
                    else if (!c(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), We(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function je(e) {
                return null != e ? (Be(this, e), a.updateOffset(this, !0), this) : qe(this, "Month")
            }
            var Ee = de,
                He = de;

            function Pe() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, o = [],
                    a = [],
                    r = [];
                for (t = 0; t < 12; t++) n = p([2e3, t]), o.push(this.monthsShort(n, "")), a.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
                for (o.sort(e), a.sort(e), r.sort(e), t = 0; t < 12; t++) o[t] = pe(o[t]), a[t] = pe(a[t]);
                for (t = 0; t < 24; t++) r[t] = pe(r[t]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function Re(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
            }

            function Ie(e, t, n) {
                var o = 7 + t - n;
                return -((7 + Re(e, 0, o).getUTCDay() - t) % 7) + o - 1
            }

            function Fe(e, t, n, o, a) {
                var r, i, s = 1 + 7 * (t - 1) + (7 + n - o) % 7 + Ie(e, o, a);
                return s <= 0 ? i = Oe(r = e - 1) + s : s > Oe(e) ? (r = e + 1, i = s - Oe(e)) : (r = e, i = s), {
                    year: r,
                    dayOfYear: i
                }
            }

            function Ue(e, t, n) {
                var o, a, r = Ie(e.year(), t, n),
                    i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                return i < 1 ? o = i + $e(a = e.year() - 1, t, n) : i > $e(e.year(), t, n) ? (o = i - $e(e.year(), t, n), a = e.year() + 1) : (a = e.year(), o = i), {
                    week: o,
                    year: a
                }
            }

            function $e(e, t, n) {
                var o = Ie(e, t, n),
                    a = Ie(e + 1, t, n);
                return (Oe(e) - o + a) / 7
            }
            I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), B("week", 5), B("isoWeek", 5), le("w", Z), le("ww", Z, G), le("W", Z), le("WW", Z, G), me(["w", "ww", "W", "WW"], function(e, t, n, o) {
                t[o.substr(0, 1)] = v(e)
            }), I("d", 0, "do", "day"), I("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }), I("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }), I("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), B("day", 11), B("weekday", 11), B("isoWeekday", 11), le("d", Z), le("e", Z), le("E", Z), le("dd", function(e, t) {
                return t.weekdaysMinRegex(e)
            }), le("ddd", function(e, t) {
                return t.weekdaysShortRegex(e)
            }), le("dddd", function(e, t) {
                return t.weekdaysRegex(e)
            }), me(["dd", "ddd", "dddd"], function(e, t, n, o) {
                var a = n._locale.weekdaysParse(e, o, n._strict);
                null != a ? t.d = a : f(n).invalidWeekday = e
            }), me(["d", "e", "E"], function(e, t, n, o) {
                t[o] = v(e)
            });
            var Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ge = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Ke = de,
                Qe = de,
                Ze = de;

            function et() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, o, a, r, i = [],
                    s = [],
                    c = [],
                    d = [];
                for (t = 0; t < 7; t++) n = p([2e3, 1]).day(t), o = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), i.push(o), s.push(a), c.push(r), d.push(o), d.push(a), d.push(r);
                for (i.sort(e), s.sort(e), c.sort(e), d.sort(e), t = 0; t < 7; t++) s[t] = pe(s[t]), c[t] = pe(c[t]), d[t] = pe(d[t]);
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function tt() {
                return this.hours() % 12 || 12
            }

            function nt(e, t) {
                I(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function ot(e, t) {
                return t._meridiemParse
            }
            I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, tt), I("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            }), I("hmm", 0, 0, function() {
                return "" + tt.apply(this) + j(this.minutes(), 2)
            }), I("hmmss", 0, 0, function() {
                return "" + tt.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
            }), I("Hmm", 0, 0, function() {
                return "" + this.hours() + j(this.minutes(), 2)
            }), I("Hmmss", 0, 0, function() {
                return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
            }), nt("a", !0), nt("A", !1), W("hour", "h"), B("hour", 13), le("a", ot), le("A", ot), le("H", Z), le("h", Z), le("k", Z), le("HH", Z, G), le("hh", Z, G), le("kk", Z, G), le("hmm", ee), le("hmmss", te), le("Hmm", ee), le("Hmmss", te), _e(["H", "HH"], Ae), _e(["k", "kk"], function(e, t, n) {
                var o = v(e);
                t[Ae] = 24 === o ? 0 : o
            }), _e(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), _e(["h", "hh"], function(e, t, n) {
                t[Ae] = v(e), f(n).bigHour = !0
            }), _e("hmm", function(e, t, n) {
                var o = e.length - 2;
                t[Ae] = v(e.substr(0, o)), t[ze] = v(e.substr(o)), f(n).bigHour = !0
            }), _e("hmmss", function(e, t, n) {
                var o = e.length - 4,
                    a = e.length - 2;
                t[Ae] = v(e.substr(0, o)), t[ze] = v(e.substr(o, 2)), t[ve] = v(e.substr(a)), f(n).bigHour = !0
            }), _e("Hmm", function(e, t, n) {
                var o = e.length - 2;
                t[Ae] = v(e.substr(0, o)), t[ze] = v(e.substr(o))
            }), _e("Hmmss", function(e, t, n) {
                var o = e.length - 4,
                    a = e.length - 2;
                t[Ae] = v(e.substr(0, o)), t[ze] = v(e.substr(o, 2)), t[ve] = v(e.substr(a))
            });
            var at, rt = Se("Hours", !0),
                it = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Xe,
                    monthsShort: Ce,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Je,
                    weekdaysMin: Ve,
                    weekdaysShort: Ge,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                st = {},
                ct = {};

            function dt(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function ut(t) {
                var o = null;
                if (!st[t] && void 0 !== e && e && e.exports) try {
                    o = at._abbr, n(265)("./" + t), lt(o)
                } catch (e) {}
                return st[t]
            }

            function lt(e, t) {
                var n;
                return e && ((n = s(t) ? pt(e) : Mt(e, t)) ? at = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), at._abbr
            }

            function Mt(e, t) {
                if (null !== t) {
                    var n, o = it;
                    if (t.abbr = e, null != st[e]) Y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), o = st[e]._config;
                    else if (null != t.parentLocale)
                        if (null != st[t.parentLocale]) o = st[t.parentLocale]._config;
                        else {
                            if (null == (n = ut(t.parentLocale))) return ct[t.parentLocale] || (ct[t.parentLocale] = []), ct[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            o = n._config
                        }
                    return st[e] = new q(S(o, t)), ct[e] && ct[e].forEach(function(e) {
                        Mt(e.name, e.config)
                    }), lt(e), st[e]
                }
                return delete st[e], null
            }

            function pt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return at;
                if (!r(e)) {
                    if (t = ut(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, n, o, a, r = 0; r < e.length;) {
                        for (t = (a = dt(e[r]).split("-")).length, n = (n = dt(e[r + 1])) ? n.split("-") : null; t > 0;) {
                            if (o = ut(a.slice(0, t).join("-"))) return o;
                            if (n && n.length >= t && g(a, n, !0) >= t - 1) break;
                            t--
                        }
                        r++
                    }
                    return at
                }(e)
            }

            function ft(e) {
                var t, n = e._a;
                return n && -2 === f(e).overflow && (t = n[Le] < 0 || n[Le] > 11 ? Le : n[ye] < 1 || n[ye] > We(n[be], n[Le]) ? ye : n[Ae] < 0 || n[Ae] > 24 || 24 === n[Ae] && (0 !== n[ze] || 0 !== n[ve] || 0 !== n[ge]) ? Ae : n[ze] < 0 || n[ze] > 59 ? ze : n[ve] < 0 || n[ve] > 59 ? ve : n[ge] < 0 || n[ge] > 999 ? ge : -1, f(e)._overflowDayOfYear && (t < be || t > ye) && (t = ye), f(e)._overflowWeeks && -1 === t && (t = Te), f(e)._overflowWeekday && -1 === t && (t = ke), f(e).overflow = t), e
            }

            function _t(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function mt(e) {
                var t, n, o, r, i, s = [];
                if (!e._d) {
                    for (o = function(e) {
                            var t = new Date(a.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[ye] && null == e._a[Le] && function(e) {
                            var t, n, o, a, r, i, s, c;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, i = 4, n = _t(t.GG, e._a[be], Ue(Dt(), 1, 4).year), o = _t(t.W, 1), ((a = _t(t.E, 1)) < 1 || a > 7) && (c = !0);
                            else {
                                r = e._locale._week.dow, i = e._locale._week.doy;
                                var d = Ue(Dt(), r, i);
                                n = _t(t.gg, e._a[be], d.year), o = _t(t.w, d.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (c = !0) : null != t.e ? (a = t.e + r, (t.e < 0 || t.e > 6) && (c = !0)) : a = r
                            }
                            o < 1 || o > $e(n, r, i) ? f(e)._overflowWeeks = !0 : null != c ? f(e)._overflowWeekday = !0 : (s = Fe(n, o, a, r, i), e._a[be] = s.year, e._dayOfYear = s.dayOfYear)
                        }(e), null != e._dayOfYear && (i = _t(e._a[be], o[be]), (e._dayOfYear > Oe(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = Re(i, 0, e._dayOfYear), e._a[Le] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = o[t];
                    for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[Ae] && 0 === e._a[ze] && 0 === e._a[ve] && 0 === e._a[ge] && (e._nextDay = !0, e._a[Ae] = 0), e._d = (e._useUTC ? Re : function(e, t, n, o, a, r, i) {
                        var s = new Date(e, t, n, o, a, r, i);
                        return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
                    }).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ae] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
                }
            }
            var ht = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                bt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Lt = /Z|[+-]\d\d(?::?\d\d)?/,
                yt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                At = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                zt = /^\/?Date\((\-?\d+)/i;

            function vt(e) {
                var t, n, o, a, r, i, s = e._i,
                    c = ht.exec(s) || bt.exec(s);
                if (c) {
                    for (f(e).iso = !0, t = 0, n = yt.length; t < n; t++)
                        if (yt[t][1].exec(c[1])) {
                            a = yt[t][0], o = !1 !== yt[t][2];
                            break
                        }
                    if (null == a) return void(e._isValid = !1);
                    if (c[3]) {
                        for (t = 0, n = At.length; t < n; t++)
                            if (At[t][1].exec(c[3])) {
                                r = (c[2] || " ") + At[t][0];
                                break
                            }
                        if (null == r) return void(e._isValid = !1)
                    }
                    if (!o && null != r) return void(e._isValid = !1);
                    if (c[4]) {
                        if (!Lt.exec(c[4])) return void(e._isValid = !1);
                        i = "Z"
                    }
                    e._f = a + (r || "") + (i || ""), Ot(e)
                } else e._isValid = !1
            }
            var gt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
            var Tt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function kt(e) {
                var t = gt.exec(function(e) {
                    return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }(e._i));
                if (t) {
                    var n = function(e, t, n, o, a, r) {
                        var i = [function(e) {
                            var t = parseInt(e, 10);
                            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
                        }(e), Ce.indexOf(t), parseInt(n, 10), parseInt(o, 10), parseInt(a, 10)];
                        return r && i.push(parseInt(r, 10)), i
                    }(t[4], t[3], t[2], t[5], t[6], t[7]);
                    if (! function(e, t, n) {
                            if (e && Ge.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return f(n).weekdayMismatch = !0, n._isValid = !1, !1;
                            return !0
                        }(t[1], n, e)) return;
                    e._a = n, e._tzm = function(e, t, n) {
                        if (e) return Tt[e];
                        if (t) return 0;
                        var o = parseInt(n, 10),
                            a = o % 100;
                        return 60 * ((o - a) / 100) + a
                    }(t[8], t[9], t[10]), e._d = Re.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function Ot(e) {
                if (e._f !== a.ISO_8601)
                    if (e._f !== a.RFC_2822) {
                        e._a = [], f(e).empty = !0;
                        var t, n, o, r, i, s = "" + e._i,
                            c = s.length,
                            d = 0;
                        for (o = $(e._f, e._locale).match(E) || [], t = 0; t < o.length; t++) r = o[t], (n = (s.match(Me(r, e)) || [])[0]) && ((i = s.substr(0, s.indexOf(n))).length > 0 && f(e).unusedInput.push(i), s = s.slice(s.indexOf(n) + n.length), d += n.length), R[r] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(r), he(r, n, e)) : e._strict && !n && f(e).unusedTokens.push(r);
                        f(e).charsLeftOver = c - d, s.length > 0 && f(e).unusedInput.push(s), e._a[Ae] <= 12 && !0 === f(e).bigHour && e._a[Ae] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Ae] = function(e, t, n) {
                            var o;
                            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((o = e.isPM(n)) && t < 12 && (t += 12), o || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[Ae], e._meridiem), mt(e), ft(e)
                    } else kt(e);
                else vt(e)
            }

            function wt(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || pt(e._l), null === t || void 0 === n && "" === t ? m({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), A(t) ? new y(ft(t)) : (d(t) ? e._d = t : r(n) ? function(e) {
                    var t, n, o, a, r;
                    if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (a = 0; a < e._f.length; a++) r = 0, t = b({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], Ot(t), _(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == o || r < o) && (o = r, n = t));
                    M(e, n || t)
                }(e) : n ? Ot(e) : function(e) {
                    var t = e._i;
                    s(t) ? e._d = new Date(a.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = zt.exec(e._i);
                        null === t ? (vt(e), !1 === e._isValid && (delete e._isValid, kt(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : r(t) ? (e._a = u(t.slice(0), function(e) {
                        return parseInt(e, 10)
                    }), mt(e)) : i(t) ? function(e) {
                        if (!e._d) {
                            var t = X(e._i);
                            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                return e && parseInt(e, 10)
                            }), mt(e)
                        }
                    }(e) : c(t) ? e._d = new Date(t) : a.createFromInputFallback(e)
                }(e), _(e) || (e._d = null), e))
            }

            function Yt(e, t, n, o, a) {
                var s = {};
                return !0 !== n && !1 !== n || (o = n, n = void 0), (i(e) && function(e) {
                        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                        var t;
                        for (t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }(e) || r(e) && 0 === e.length) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = o,
                    function(e) {
                        var t = new y(ft(wt(s)));
                        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                    }()
            }

            function Dt(e, t, n, o) {
                return Yt(e, t, n, o, !1)
            }
            a.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
            var St = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var e = Dt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : m()
                }),
                qt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var e = Dt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : m()
                });

            function Nt(e, t) {
                var n, o;
                if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Dt();
                for (n = t[0], o = 1; o < t.length; ++o) t[o].isValid() && !t[o][e](n) || (n = t[o]);
                return n
            }
            var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function xt(e) {
                var t = X(e),
                    n = t.year || 0,
                    o = t.quarter || 0,
                    a = t.month || 0,
                    r = t.week || 0,
                    i = t.day || 0,
                    s = t.hour || 0,
                    c = t.minute || 0,
                    d = t.second || 0,
                    u = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, o = 0; o < Wt.length; ++o)
                        if (e[Wt[o]]) {
                            if (n) return !1;
                            parseFloat(e[Wt[o]]) !== v(e[Wt[o]]) && (n = !0)
                        }
                    return !0
                }(t), this._milliseconds = +u + 1e3 * d + 6e4 * c + 1e3 * s * 60 * 60, this._days = +i + 7 * r, this._months = +a + 3 * o + 12 * n, this._data = {}, this._locale = pt(), this._bubble()
            }

            function Xt(e) {
                return e instanceof xt
            }

            function Ct(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Bt(e, t) {
                I(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
                })
            }
            Bt("Z", ":"), Bt("ZZ", ""), le("Z", ce), le("ZZ", ce), _e(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0, n._tzm = Et(ce, e)
            });
            var jt = /([\+\-]|\d\d)/gi;

            function Et(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var o = ((n[n.length - 1] || []) + "").match(jt) || ["-", 0, 0],
                    a = 60 * o[1] + v(o[2]);
                return 0 === a ? 0 : "+" === o[0] ? a : -a
            }

            function Ht(e, t) {
                var n, o;
                return t._isUTC ? (n = t.clone(), o = (A(e) || d(e) ? e.valueOf() : Dt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), a.updateOffset(n, !1), n) : Dt(e).local()
            }

            function Pt(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Rt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            a.updateOffset = function() {};
            var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Ft = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Ut(e, t) {
                var n, o, a, r = e,
                    i = null;
                return Xt(e) ? r = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : c(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (i = It.exec(e)) ? (n = "-" === i[1] ? -1 : 1, r = {
                    y: 0,
                    d: v(i[ye]) * n,
                    h: v(i[Ae]) * n,
                    m: v(i[ze]) * n,
                    s: v(i[ve]) * n,
                    ms: v(Ct(1e3 * i[ge])) * n
                }) : (i = Ft.exec(e)) ? (n = "-" === i[1] ? -1 : (i[1], 1), r = {
                    y: $t(i[2], n),
                    M: $t(i[3], n),
                    w: $t(i[4], n),
                    d: $t(i[5], n),
                    h: $t(i[6], n),
                    m: $t(i[7], n),
                    s: $t(i[8], n)
                }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (a = function(e, t) {
                    var n;
                    return e.isValid() && t.isValid() ? (t = Ht(t, e), e.isBefore(t) ? n = Jt(e, t) : ((n = Jt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }(Dt(r.from), Dt(r.to)), (r = {}).ms = a.milliseconds, r.M = a.months), o = new xt(r), Xt(e) && l(e, "_locale") && (o._locale = e._locale), o
            }

            function $t(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Jt(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Gt(e, t) {
                return function(n, o) {
                    var a;
                    return null === o || isNaN(+o) || (Y(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = o, o = a), Vt(this, Ut(n = "string" == typeof n ? +n : n, o), e), this
                }
            }

            function Vt(e, t, n, o) {
                var r = t._milliseconds,
                    i = Ct(t._days),
                    s = Ct(t._months);
                e.isValid() && (o = null == o || o, s && Be(e, qe(e, "Month") + s * n), i && Ne(e, "Date", qe(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), o && a.updateOffset(e, i || s))
            }
            Ut.fn = xt.prototype, Ut.invalid = function() {
                return Ut(NaN)
            };
            var Kt = Gt(1, "add"),
                Qt = Gt(-1, "subtract");

            function Zt(e, t) {
                var n, o = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    a = e.clone().add(o, "months");
                return t - a < 0 ? n = (t - a) / (a - e.clone().add(o - 1, "months")) : n = (t - a) / (e.clone().add(o + 1, "months") - a), -(o + n) || 0
            }

            function en(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = pt(e)) && (this._locale = t), this)
            }
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var tn = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });

            function nn() {
                return this._locale
            }

            function on(e, t) {
                I(0, [e, e.length], 0, t)
            }

            function an(e, t, n, o, a) {
                var r;
                return null == e ? Ue(this, o, a).year : (t > (r = $e(e, o, a)) && (t = r), function(e, t, n, o, a) {
                    var r = Fe(e, t, n, o, a),
                        i = Re(r.year, 0, r.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
                }.call(this, e, t, n, o, a))
            }
            I(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), I(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), on("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), B("weekYear", 1), B("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", Z, G), le("gg", Z, G), le("GGGG", oe, K), le("gggg", oe, K), le("GGGGG", ae, Q), le("ggggg", ae, Q), me(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, o) {
                t[o.substr(0, 2)] = v(e)
            }), me(["gg", "GG"], function(e, t, n, o) {
                t[o] = a.parseTwoDigitYear(e)
            }), I("Q", 0, "Qo", "quarter"), W("quarter", "Q"), B("quarter", 7), le("Q", J), _e("Q", function(e, t) {
                t[Le] = 3 * (v(e) - 1)
            }), I("D", ["DD", 2], "Do", "date"), W("date", "D"), B("date", 9), le("D", Z), le("DD", Z, G), le("Do", function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }), _e(["D", "DD"], ye), _e("Do", function(e, t) {
                t[ye] = v(e.match(Z)[0])
            });
            var rn = Se("Date", !0);
            I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), B("dayOfYear", 4), le("DDD", ne), le("DDDD", V), _e(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = v(e)
            }), I("m", ["mm", 2], 0, "minute"), W("minute", "m"), B("minute", 14), le("m", Z), le("mm", Z, G), _e(["m", "mm"], ze);
            var sn = Se("Minutes", !1);
            I("s", ["ss", 2], 0, "second"), W("second", "s"), B("second", 15), le("s", Z), le("ss", Z, G), _e(["s", "ss"], ve);
            var cn, dn = Se("Seconds", !1);
            for (I("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), I(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), I(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), I(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), I(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), I(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), I(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), W("millisecond", "ms"), B("millisecond", 16), le("S", ne, J), le("SS", ne, G), le("SSS", ne, V), cn = "SSSS"; cn.length <= 9; cn += "S") le(cn, re);

            function un(e, t) {
                t[ge] = v(1e3 * ("0." + e))
            }
            for (cn = "S"; cn.length <= 9; cn += "S") _e(cn, un);
            var ln = Se("Milliseconds", !1);
            I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
            var Mn = y.prototype;

            function pn(e) {
                return e
            }
            Mn.add = Kt, Mn.calendar = function(e, t) {
                var n = e || Dt(),
                    o = Ht(n, this).startOf("day"),
                    r = a.calendarFormat(this, o) || "sameElse",
                    i = t && (D(t[r]) ? t[r].call(this, n) : t[r]);
                return this.format(i || this.localeData().calendar(r, this, Dt(n)))
            }, Mn.clone = function() {
                return new y(this)
            }, Mn.diff = function(e, t, n) {
                var o, a, r;
                if (!this.isValid()) return NaN;
                if (!(o = Ht(e, this)).isValid()) return NaN;
                switch (a = 6e4 * (o.utcOffset() - this.utcOffset()), t = x(t)) {
                    case "year":
                        r = Zt(this, o) / 12;
                        break;
                    case "month":
                        r = Zt(this, o);
                        break;
                    case "quarter":
                        r = Zt(this, o) / 3;
                        break;
                    case "second":
                        r = (this - o) / 1e3;
                        break;
                    case "minute":
                        r = (this - o) / 6e4;
                        break;
                    case "hour":
                        r = (this - o) / 36e5;
                        break;
                    case "day":
                        r = (this - o - a) / 864e5;
                        break;
                    case "week":
                        r = (this - o - a) / 6048e5;
                        break;
                    default:
                        r = this - o
                }
                return n ? r : z(r)
            }, Mn.endOf = function(e) {
                return void 0 === (e = x(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }, Mn.format = function(e) {
                e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                var t = U(this, e);
                return this.localeData().postformat(t)
            }, Mn.from = function(e, t) {
                return this.isValid() && (A(e) && e.isValid() || Dt(e).isValid()) ? Ut({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, Mn.fromNow = function(e) {
                return this.from(Dt(), e)
            }, Mn.to = function(e, t) {
                return this.isValid() && (A(e) && e.isValid() || Dt(e).isValid()) ? Ut({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, Mn.toNow = function(e) {
                return this.to(Dt(), e)
            }, Mn.get = function(e) {
                return D(this[e = x(e)]) ? this[e]() : this
            }, Mn.invalidAt = function() {
                return f(this).overflow
            }, Mn.isAfter = function(e, t) {
                var n = A(e) ? e : Dt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = x(s(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }, Mn.isBefore = function(e, t) {
                var n = A(e) ? e : Dt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = x(s(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }, Mn.isBetween = function(e, t, n, o) {
                return ("(" === (o = o || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === o[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            }, Mn.isSame = function(e, t) {
                var n, o = A(e) ? e : Dt(e);
                return !(!this.isValid() || !o.isValid()) && ("millisecond" === (t = x(t || "millisecond")) ? this.valueOf() === o.valueOf() : (n = o.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }, Mn.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, Mn.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, Mn.isValid = function() {
                return _(this)
            }, Mn.lang = tn, Mn.locale = en, Mn.localeData = nn, Mn.max = qt, Mn.min = St, Mn.parsingFlags = function() {
                return M({}, f(this))
            }, Mn.set = function(e, t) {
                if ("object" == typeof e)
                    for (var n = function(e) {
                            var t = [];
                            for (var n in e) t.push({
                                unit: n,
                                priority: C[n]
                            });
                            return t.sort(function(e, t) {
                                return e.priority - t.priority
                            }), t
                        }(e = X(e)), o = 0; o < n.length; o++) this[n[o].unit](e[n[o].unit]);
                else if (D(this[e = x(e)])) return this[e](t);
                return this
            }, Mn.startOf = function(e) {
                switch (e = x(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }, Mn.subtract = Qt, Mn.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, Mn.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, Mn.toDate = function() {
                return new Date(this.valueOf())
            }, Mn.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, Mn.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var n = "[" + e + '("]',
                    o = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = t + '[")]';
                return this.format(n + o + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, Mn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, Mn.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, Mn.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, Mn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, Mn.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, Mn.year = De, Mn.isLeapYear = function() {
                return we(this.year())
            }, Mn.weekYear = function(e) {
                return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, Mn.isoWeekYear = function(e) {
                return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, Mn.quarter = Mn.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, Mn.month = je, Mn.daysInMonth = function() {
                return We(this.year(), this.month())
            }, Mn.week = Mn.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, Mn.isoWeek = Mn.isoWeeks = function(e) {
                var t = Ue(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, Mn.weeksInYear = function() {
                var e = this.localeData()._week;
                return $e(this.year(), e.dow, e.doy)
            }, Mn.isoWeeksInYear = function() {
                return $e(this.year(), 1, 4)
            }, Mn.date = rn, Mn.day = Mn.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, Mn.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, Mn.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, Mn.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, Mn.hour = Mn.hours = rt, Mn.minute = Mn.minutes = sn, Mn.second = Mn.seconds = dn, Mn.millisecond = Mn.milliseconds = ln, Mn.utcOffset = function(e, t, n) {
                var o, r = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Et(ce, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (o = Pt(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? Vt(this, Ut(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? r : Pt(this)
            }, Mn.utc = function(e) {
                return this.utcOffset(0, e)
            }, Mn.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Pt(this), "m")), this
            }, Mn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Et(se, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, Mn.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? Dt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, Mn.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, Mn.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, Mn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, Mn.isUtc = Rt, Mn.isUTC = Rt, Mn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, Mn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, Mn.dates = k("dates accessor is deprecated. Use date instead.", rn), Mn.months = k("months accessor is deprecated. Use month instead", je), Mn.years = k("years accessor is deprecated. Use year instead", De), Mn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }), Mn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!s(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (b(e, this), (e = wt(e))._a) {
                    var t = e._isUTC ? p(e._a) : Dt(e._a);
                    this._isDSTShifted = this.isValid() && g(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var fn = q.prototype;

            function _n(e, t, n, o) {
                var a = pt(),
                    r = p().set(o, t);
                return a[n](r, e)
            }

            function mn(e, t, n) {
                if (c(e) && (t = e, e = void 0), e = e || "", null != t) return _n(e, t, n, "month");
                var o, a = [];
                for (o = 0; o < 12; o++) a[o] = _n(e, o, n, "month");
                return a
            }

            function hn(e, t, n, o) {
                "boolean" == typeof e ? (c(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, c(t) && (n = t, t = void 0), t = t || "");
                var a, r = pt(),
                    i = e ? r._week.dow : 0;
                if (null != n) return _n(t, (n + i) % 7, o, "day");
                var s = [];
                for (a = 0; a < 7; a++) s[a] = _n(t, (a + i) % 7, o, "day");
                return s
            }
            fn.calendar = function(e, t, n) {
                var o = this._calendar[e] || this._calendar.sameElse;
                return D(o) ? o.call(t, n) : o
            }, fn.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }, fn.invalidDate = function() {
                return this._invalidDate
            }, fn.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, fn.preparse = pn, fn.postformat = pn, fn.relativeTime = function(e, t, n, o) {
                var a = this._relativeTime[n];
                return D(a) ? a(e, t, n, o) : a.replace(/%d/i, e)
            }, fn.pastFuture = function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return D(n) ? n(t) : n.replace(/%s/i, t)
            }, fn.set = function(e) {
                var t, n;
                for (n in e) D(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, fn.months = function(e, t) {
                return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
            }, fn.monthsShort = function(e, t) {
                return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, fn.monthsParse = function(e, t, n) {
                var o, a, r;
                if (this._monthsParseExact) return function(e, t, n) {
                    var o, a, r, i = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], o = 0; o < 12; ++o) r = p([2e3, o]), this._shortMonthsParse[o] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[o] = this.months(r, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (a = Ye.call(this._shortMonthsParse, i)) ? a : null : -1 !== (a = Ye.call(this._longMonthsParse, i)) ? a : null : "MMM" === t ? -1 !== (a = Ye.call(this._shortMonthsParse, i)) ? a : -1 !== (a = Ye.call(this._longMonthsParse, i)) ? a : null : -1 !== (a = Ye.call(this._longMonthsParse, i)) ? a : -1 !== (a = Ye.call(this._shortMonthsParse, i)) ? a : null
                }.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
                    if (a = p([2e3, o]), n && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[o] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[o] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[o].test(e)) return o;
                    if (n && "MMM" === t && this._shortMonthsParse[o].test(e)) return o;
                    if (!n && this._monthsParse[o].test(e)) return o
                }
            }, fn.monthsRegex = function(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || Pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = He), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, fn.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || Pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, fn.week = function(e) {
                return Ue(e, this._week.dow, this._week.doy).week
            }, fn.firstDayOfYear = function() {
                return this._week.doy
            }, fn.firstDayOfWeek = function() {
                return this._week.dow
            }, fn.weekdays = function(e, t) {
                return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }, fn.weekdaysMin = function(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, fn.weekdaysShort = function(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, fn.weekdaysParse = function(e, t, n) {
                var o, a, r;
                if (this._weekdaysParseExact) return function(e, t, n) {
                    var o, a, r, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], o = 0; o < 7; ++o) r = p([2e3, 1]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[o] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(r, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (a = Ye.call(this._weekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = Ye.call(this._shortWeekdaysParse, i)) ? a : null : -1 !== (a = Ye.call(this._minWeekdaysParse, i)) ? a : null : "dddd" === t ? -1 !== (a = Ye.call(this._weekdaysParse, i)) ? a : -1 !== (a = Ye.call(this._shortWeekdaysParse, i)) ? a : -1 !== (a = Ye.call(this._minWeekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = Ye.call(this._shortWeekdaysParse, i)) ? a : -1 !== (a = Ye.call(this._weekdaysParse, i)) ? a : -1 !== (a = Ye.call(this._minWeekdaysParse, i)) ? a : null : -1 !== (a = Ye.call(this._minWeekdaysParse, i)) ? a : -1 !== (a = Ye.call(this._weekdaysParse, i)) ? a : -1 !== (a = Ye.call(this._shortWeekdaysParse, i)) ? a : null
                }.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
                    if (a = p([2e3, 1]).day(o), n && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[o] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[o] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[o].test(e)) return o;
                    if (n && "ddd" === t && this._shortWeekdaysParse[o].test(e)) return o;
                    if (n && "dd" === t && this._minWeekdaysParse[o].test(e)) return o;
                    if (!n && this._weekdaysParse[o].test(e)) return o
                }
            }, fn.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, fn.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, fn.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, fn.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, fn.meridiem = function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, lt("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), a.lang = k("moment.lang is deprecated. Use moment.locale instead.", lt), a.langData = k("moment.langData is deprecated. Use moment.localeData instead.", pt);
            var bn = Math.abs;

            function Ln(e, t, n, o) {
                var a = Ut(t, n);
                return e._milliseconds += o * a._milliseconds, e._days += o * a._days, e._months += o * a._months, e._bubble()
            }

            function yn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function An(e) {
                return 4800 * e / 146097
            }

            function zn(e) {
                return 146097 * e / 4800
            }

            function vn(e) {
                return function() {
                    return this.as(e)
                }
            }
            var gn = vn("ms"),
                Tn = vn("s"),
                kn = vn("m"),
                On = vn("h"),
                wn = vn("d"),
                Yn = vn("w"),
                Dn = vn("M"),
                Sn = vn("y");

            function qn(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Nn = qn("milliseconds"),
                Wn = qn("seconds"),
                xn = qn("minutes"),
                Xn = qn("hours"),
                Cn = qn("days"),
                Bn = qn("months"),
                jn = qn("years"),
                En = Math.round,
                Hn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Pn = Math.abs;

            function Rn(e) {
                return (e > 0) - (e < 0) || +e
            }

            function In() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n = Pn(this._milliseconds) / 1e3,
                    o = Pn(this._days),
                    a = Pn(this._months);
                e = z(n / 60), t = z(e / 60), n %= 60, e %= 60;
                var r = z(a / 12),
                    i = a %= 12,
                    s = o,
                    c = t,
                    d = e,
                    u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    l = this.asSeconds();
                if (!l) return "P0D";
                var M = l < 0 ? "-" : "",
                    p = Rn(this._months) !== Rn(l) ? "-" : "",
                    f = Rn(this._days) !== Rn(l) ? "-" : "",
                    _ = Rn(this._milliseconds) !== Rn(l) ? "-" : "";
                return M + "P" + (r ? p + r + "Y" : "") + (i ? p + i + "M" : "") + (s ? f + s + "D" : "") + (c || d || u ? "T" : "") + (c ? _ + c + "H" : "") + (d ? _ + d + "M" : "") + (u ? _ + u + "S" : "")
            }
            var Fn = xt.prototype;
            return Fn.isValid = function() {
                return this._isValid
            }, Fn.abs = function() {
                var e = this._data;
                return this._milliseconds = bn(this._milliseconds), this._days = bn(this._days), this._months = bn(this._months), e.milliseconds = bn(e.milliseconds), e.seconds = bn(e.seconds), e.minutes = bn(e.minutes), e.hours = bn(e.hours), e.months = bn(e.months), e.years = bn(e.years), this
            }, Fn.add = function(e, t) {
                return Ln(this, e, t, 1)
            }, Fn.subtract = function(e, t) {
                return Ln(this, e, t, -1)
            }, Fn.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, n, o = this._milliseconds;
                if ("month" === (e = x(e)) || "year" === e) return t = this._days + o / 864e5, n = this._months + An(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(zn(this._months)), e) {
                    case "week":
                        return t / 7 + o / 6048e5;
                    case "day":
                        return t + o / 864e5;
                    case "hour":
                        return 24 * t + o / 36e5;
                    case "minute":
                        return 1440 * t + o / 6e4;
                    case "second":
                        return 86400 * t + o / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + o;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, Fn.asMilliseconds = gn, Fn.asSeconds = Tn, Fn.asMinutes = kn, Fn.asHours = On, Fn.asDays = wn, Fn.asWeeks = Yn, Fn.asMonths = Dn, Fn.asYears = Sn, Fn.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
            }, Fn._bubble = function() {
                var e, t, n, o, a, r = this._milliseconds,
                    i = this._days,
                    s = this._months,
                    c = this._data;
                return r >= 0 && i >= 0 && s >= 0 || r <= 0 && i <= 0 && s <= 0 || (r += 864e5 * yn(zn(s) + i), i = 0, s = 0), c.milliseconds = r % 1e3, e = z(r / 1e3), c.seconds = e % 60, t = z(e / 60), c.minutes = t % 60, n = z(t / 60), c.hours = n % 24, i += z(n / 24), s += a = z(An(i)), i -= yn(zn(a)), o = z(s / 12), s %= 12, c.days = i, c.months = s, c.years = o, this
            }, Fn.clone = function() {
                return Ut(this)
            }, Fn.get = function(e) {
                return e = x(e), this.isValid() ? this[e + "s"]() : NaN
            }, Fn.milliseconds = Nn, Fn.seconds = Wn, Fn.minutes = xn, Fn.hours = Xn, Fn.days = Cn, Fn.weeks = function() {
                return z(this.days() / 7)
            }, Fn.months = Bn, Fn.years = jn, Fn.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    n = function(e, t, n) {
                        var o = Ut(e).abs(),
                            a = En(o.as("s")),
                            r = En(o.as("m")),
                            i = En(o.as("h")),
                            s = En(o.as("d")),
                            c = En(o.as("M")),
                            d = En(o.as("y")),
                            u = a <= Hn.ss && ["s", a] || a < Hn.s && ["ss", a] || r <= 1 && ["m"] || r < Hn.m && ["mm", r] || i <= 1 && ["h"] || i < Hn.h && ["hh", i] || s <= 1 && ["d"] || s < Hn.d && ["dd", s] || c <= 1 && ["M"] || c < Hn.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d];
                        return u[2] = t, u[3] = +e > 0, u[4] = n,
                            function(e, t, n, o, a) {
                                return a.relativeTime(t || 1, !!n, e, o)
                            }.apply(null, u)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, Fn.toISOString = In, Fn.toString = In, Fn.toJSON = In, Fn.locale = en, Fn.localeData = nn, Fn.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", In), Fn.lang = tn, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), _e("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), _e("x", function(e, t, n) {
                n._d = new Date(v(e))
            }), a.version = "2.22.2", t = Dt, a.fn = Mn, a.min = function() {
                return Nt("isBefore", [].slice.call(arguments, 0))
            }, a.max = function() {
                return Nt("isAfter", [].slice.call(arguments, 0))
            }, a.now = function() {
                return Date.now ? Date.now() : +new Date
            }, a.utc = p, a.unix = function(e) {
                return Dt(1e3 * e)
            }, a.months = function(e, t) {
                return mn(e, t, "months")
            }, a.isDate = d, a.locale = lt, a.invalid = m, a.duration = Ut, a.isMoment = A, a.weekdays = function(e, t, n) {
                return hn(e, t, n, "weekdays")
            }, a.parseZone = function() {
                return Dt.apply(null, arguments).parseZone()
            }, a.localeData = pt, a.isDuration = Xt, a.monthsShort = function(e, t) {
                return mn(e, t, "monthsShort")
            }, a.weekdaysMin = function(e, t, n) {
                return hn(e, t, n, "weekdaysMin")
            }, a.defineLocale = Mt, a.updateLocale = function(e, t) {
                if (null != t) {
                    var n, o, a = it;
                    null != (o = ut(e)) && (a = o._config), (n = new q(t = S(a, t))).parentLocale = st[e], st[e] = n, lt(e)
                } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);
                return st[e]
            }, a.locales = function() {
                return O(st)
            }, a.weekdaysShort = function(e, t, n) {
                return hn(e, t, n, "weekdaysShort")
            }, a.normalizeUnits = x, a.relativeTimeRounding = function(e) {
                return void 0 === e ? En : "function" == typeof e && (En = e, !0)
            }, a.relativeTimeThreshold = function(e, t) {
                return void 0 !== Hn[e] && (void 0 === t ? Hn[e] : (Hn[e] = t, "s" === e && (Hn.ss = t - 1), !0))
            }, a.calendarFormat = function(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, a.prototype = Mn, a.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, a
        }()
    }).call(this, n(264)(e))
}, function(e, t, n) {
    var o = n(11);
    e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    var o = n(10),
        a = n(31);
    e.exports = n(7) ? function(e, t, n) {
        return o.f(e, t, a(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    e.exports = !n(36)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.simpleParallax = t.isMobileDevice = t.getSizedImage = t.consumeSessionStorage = t.getSessionStorage = t.setSessionStorage = t.formatMoney = t.bindUIActions = t.interceptEndUserCartApiCalls = t.isJSON = t.getResourceJson = t.cartJsUpdateItemById = t.cartJsRemoveItemByIndex = t.cartJsAddItem = t.handlize = t.isSafari = t.htmlDecode = t.getAlternativeTemplate = t.getUrlParameterByName = t.debounce = t.checkEmail = void 0;
        var o = i(n(30)),
            a = i(n(14)),
            r = i(n(15));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = "[data-copy]",
            c = (t.checkEmail = function(e) {
                return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
            }, t.debounce = function(e, t, n) {
                var o;
                return function() {
                    var a = this,
                        r = arguments,
                        i = n && !o;
                    clearTimeout(o), o = setTimeout(function() {
                        o = null, n || e.apply(a, r)
                    }, t), i && e.apply(a, r)
                }
            }, t.getUrlParameterByName = function(e, t) {
                t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                return !!n && (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "")
            }, t.getAlternativeTemplate = function() {
                var e = (0, r.default)(a.default.mark(function e(t, n) {
                    var o, r, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o = "/" + t + "?view=" + n, r = {
                                        credentials: "include"
                                    }, !i) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 5, fetch(o, r).then(function(e) {
                                    return e.json()
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 8:
                                return e.next = 10, fetch(o, r).then(function(e) {
                                    return e.text()
                                });
                            case 10:
                                return e.abrupt("return", e.sent);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), t.htmlDecode = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, 0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
            }, t.isSafari = function() {
                return /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
            }, t.handlize = function(e) {
                e = e.toLowerCase();
                for (var t = ['"', "'", "\\", "(", ")", "[", "]", "$"], n = 0; n < t.length; ++n) e = e.replace(t[n], "");
                return "-" == (e = e.replace(/\W+/g, "-")).charAt(e.length - 1) && (e = e.replace(/-+\z/, "")), "-" == e.charAt(0) && (e = e.replace(/\A-+/, "")), e
            }, t.cartJsAddItem = function(e, t, n) {
                return new Promise(function(o, a) {
                    CartJS.addItem(e, t, n, {
                        success: function(e, t, n) {
                            o({
                                data: e,
                                textStatus: t,
                                jqXHR: n
                            })
                        },
                        error: function(e, t, n) {
                            a({
                                jqXHR: e,
                                textStatus: t,
                                errorThrown: n
                            })
                        }
                    })
                })
            }, t.cartJsRemoveItemByIndex = function(e) {
                return new Promise(function(t, n) {
                    CartJS.removeItem(e, {
                        success: function(e, n, o) {
                            return t({
                                data: e,
                                textStatus: n,
                                jqXHR: o
                            })
                        },
                        error: function(e, t, o) {
                            return n({
                                jqXHR: e,
                                textStatus: t,
                                errorThrown: o
                            })
                        }
                    })
                })
            }, t.cartJsUpdateItemById = function(e, t, n) {
                return console.log("adding " + t + " of " + e + " with props: " + n), new Promise(function(o, a) {
                    CartJS.updateItemById(e, t, n, {
                        success: function(e, t, n) {
                            o({
                                data: e,
                                textStatus: t,
                                jqXHR: n
                            })
                        },
                        error: function(e, t, n) {
                            a({
                                jqXHR: e,
                                textStatus: t,
                                errorThrown: n
                            })
                        }
                    })
                })
            }, t.getResourceJson = function() {
                var e = (0, r.default)(a.default.mark(function e(t, n) {
                    var r, i, s, c;
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = window.shop.retrievedData[t] || {}, i = r[n]) {
                                    e.next = 10;
                                    break
                                }
                                return s = "/" + t + "/" + n + ".json", c = {
                                    credentials: "include"
                                }, e.next = 7, fetch(s, c).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    var a = e.product;
                                    return window.shop.retrievedData[t] = Object.assign({}, r, (0, o.default)({}, n, a)), a
                                });
                            case 7:
                                return e.abrupt("return", e.sent);
                            case 10:
                                return e.abrupt("return", i);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), t.isJSON = function(e) {
                try {
                    JSON.parse(e)
                } catch (e) {
                    return !1
                }
                return !0
            }),
            d = (t.interceptEndUserCartApiCalls = function() {
                return e = XMLHttpRequest.prototype.open, void(XMLHttpRequest.prototype.open = function(t, n, o, a, r) {
                    var i = this;
                    n.includes("/cart/update.js") && "POST" == t && this.addEventListener("readystatechange", function() {
                        if (c(i.response)) {
                            var e = JSON.parse(i.response),
                                t = e.token,
                                n = void 0 !== t && t,
                                o = e.auth;
                            if (n && (void 0 === o || !o)) {
                                console.log("[WARN] Unauthorized ajax api call");
                                var a = Object.assign({
                                        auth: !0
                                    }, e),
                                    r = new CustomEvent("cart.updated", {
                                        detail: a
                                    });
                                document.dispatchEvent(r)
                            }
                        }
                    }, !1), e.apply(this, arguments)
                });
                var e
            }, function(t) {
                var n = navigator.clipboard;
                if (void 0 !== n && n) {
                    var o = e(t.currentTarget).text();
                    navigator.clipboard.writeText(o).then(function() {
                        return alert("Copied to clipboard!")
                    })
                }
            }),
            u = (t.bindUIActions = function() {
                e(s).on("click", function() {
                    return document.execCommand("copy")
                }), e(s).on("copy", d)
            }, function(e, t) {
                return void 0 === e ? t : e
            }),
            l = function(e, t, n, o) {
                if (t = u(t, 2), n = u(n, ","), o = u(o, "."), isNaN(e) || null == e) return 0;
                var a = (e = (e / 100).toFixed(t)).split(".");
                return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n) + (a[1] ? o + a[1] : "")
            };
        t.formatMoney = function(e, t) {
            "string" == typeof e && (e = e.replace(".", ""));
            var n = "",
                o = /\{\{\s*(\w+)\s*\}\}/,
                a = t || window.shop.moneyFormat;
            switch (a.match(o)[1]) {
                case "amount":
                    n = l(e, 2);
                    break;
                case "amount_no_decimals":
                    n = l(e, 0);
                    break;
                case "amount_with_comma_separator":
                    n = l(e, 2, ".", ",");
                    break;
                case "amount_no_decimals_with_comma_separator":
                    n = l(e, 0, ".", ",")
            }
            return a.replace(o, n)
        }, t.setSessionStorage = function(e, t) {
            sessionStorage.setItem(e, t)
        }, t.getSessionStorage = function(e) {
            return sessionStorage.getItem(e) || !1
        }, t.consumeSessionStorage = function(e) {
            var t = sessionStorage.getItem(e);
            return sessionStorage.removeItem(e), t || !1
        }, t.getSizedImage = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = e.lastIndexOf("."),
                a = e.split(""),
                r = a.splice(o).join("");
            return a.join("") + "_" + t + r + (n ? "@" + n + "x" : "")
        }, t.isMobileDevice = function() {
            return window.innerWidth <= 991
        }, t.simpleParallax = function(e, t) {
            var n = t.getBoundingClientRect().top,
                o = t.getBoundingClientRect().bottom;
            if (n < 0 && o > -0) {
                var a = n / t.getBoundingClientRect().height * -1,
                    r = window.innerWidth >= 768 ? 45 * a : 75 * a;
                e.style.transform = "translateY(" + r + "%)"
            } else e.style.transform = "translateY(0)"
        }
    }).call(this, n(0))
}, function(e, t, n) {
    var o = n(1),
        a = n(3),
        r = n(13),
        i = n(6),
        s = n(17),
        c = function(e, t, n) {
            var d, u, l, M = e & c.F,
                p = e & c.G,
                f = e & c.S,
                _ = e & c.P,
                m = e & c.B,
                h = e & c.W,
                b = p ? a : a[t] || (a[t] = {}),
                L = b.prototype,
                y = p ? o : f ? o[t] : (o[t] || {}).prototype;
            for (d in p && (n = t), n)(u = !M && y && void 0 !== y[d]) && s(b, d) || (l = u ? y[d] : n[d], b[d] = p && "function" != typeof y[d] ? n[d] : m && u ? r(l, o) : h && y[d] == l ? function(e) {
                var t = function(t, n, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, o)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(l) : _ && "function" == typeof l ? r(Function.call, l) : l, _ && ((b.virtual || (b.virtual = {}))[d] = l, e & c.R && L && !L[d] && i(L, d, l)))
        };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t, n) {
    var o = n(5),
        a = n(58),
        r = n(59),
        i = Object.defineProperty;
    t.f = n(7) ? Object.defineProperty : function(e, t, n) {
        if (o(e), t = r(t, !0), o(n), a) try {
            return i(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var o = n(16);
    e.exports = function(e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, o) {
                    return e.call(t, n, o)
                };
            case 3:
                return function(n, o, a) {
                    return e.call(t, n, o, a)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, n) {
    e.exports = n(73)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(75));
    t.default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new o.default(function(e, n) {
                return function a(r, i) {
                    try {
                        var s = t[r](i),
                            c = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!s.done) return o.default.resolve(c).then(function(e) {
                        a("next", e)
                    }, function(e) {
                        a("throw", e)
                    });
                    e(c)
                }("next")
            })
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var o;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, a) {
        "use strict";
        var r = [],
            i = n.document,
            s = Object.getPrototypeOf,
            c = r.slice,
            d = r.concat,
            u = r.push,
            l = r.indexOf,
            M = {},
            p = M.toString,
            f = M.hasOwnProperty,
            _ = f.toString,
            m = _.call(Object),
            h = {},
            b = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            L = function(e) {
                return null != e && e === e.window
            },
            y = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function A(e, t, n) {
            var o, a = (t = t || i).createElement("script");
            if (a.text = e, n)
                for (o in y) n[o] && (a[o] = n[o]);
            t.head.appendChild(a).parentNode.removeChild(a)
        }

        function z(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? M[p.call(e)] || "object" : typeof e
        }
        var v = function(e, t) {
                return new v.fn.init(e, t)
            },
            g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function T(e) {
            var t = !!e && "length" in e && e.length,
                n = z(e);
            return !b(e) && !L(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        v.fn = v.prototype = {
            jquery: "3.3.1",
            constructor: v,
            length: 0,
            toArray: function() {
                return c.call(this)
            },
            get: function(e) {
                return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = v.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return v.each(this, e)
            },
            map: function(e) {
                return this.pushStack(v.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(c.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: r.sort,
            splice: r.splice
        }, v.extend = v.fn.extend = function() {
            var e, t, n, o, a, r, i = arguments[0] || {},
                s = 1,
                c = arguments.length,
                d = !1;
            for ("boolean" == typeof i && (d = i, i = arguments[s] || {}, s++), "object" == typeof i || b(i) || (i = {}), s === c && (i = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = i[t], i !== (o = e[t]) && (d && o && (v.isPlainObject(o) || (a = Array.isArray(o))) ? (a ? (a = !1, r = n && Array.isArray(n) ? n : []) : r = n && v.isPlainObject(n) ? n : {}, i[t] = v.extend(d, r, o)) : void 0 !== o && (i[t] = o));
            return i
        }, v.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof(n = f.call(t, "constructor") && t.constructor) || _.call(n) !== m))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                A(e)
            },
            each: function(e, t) {
                var n, o = 0;
                if (T(e))
                    for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === t.call(e[o], o, e[o])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(g, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (T(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, o = 0, a = e.length; o < n; o++) e[a++] = t[o];
                return e.length = a, e
            },
            grep: function(e, t, n) {
                for (var o = [], a = 0, r = e.length, i = !n; a < r; a++) !t(e[a], a) !== i && o.push(e[a]);
                return o
            },
            map: function(e, t, n) {
                var o, a, r = 0,
                    i = [];
                if (T(e))
                    for (o = e.length; r < o; r++) null != (a = t(e[r], r, n)) && i.push(a);
                else
                    for (r in e) null != (a = t(e[r], r, n)) && i.push(a);
                return d.apply([], i)
            },
            guid: 1,
            support: h
        }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = r[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            M["[object " + t + "]"] = t.toLowerCase()
        });
        var k =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(e) {
                var t, n, o, a, r, i, s, c, d, u, l, M, p, f, _, m, h, b, L, y = "sizzle" + 1 * new Date,
                    A = e.document,
                    z = 0,
                    v = 0,
                    g = ie(),
                    T = ie(),
                    k = ie(),
                    O = function(e, t) {
                        return e === t && (l = !0), 0
                    },
                    w = {}.hasOwnProperty,
                    Y = [],
                    D = Y.pop,
                    S = Y.push,
                    q = Y.push,
                    N = Y.slice,
                    W = function(e, t) {
                        for (var n = 0, o = e.length; n < o; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    x = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    X = "[\\x20\\t\\r\\n\\f]",
                    C = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    B = "\\[" + X + "*(" + C + ")(?:" + X + "*([*^$|!~]?=)" + X + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + C + "))|)" + X + "*\\]",
                    j = ":(" + C + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                    E = new RegExp(X + "+", "g"),
                    H = new RegExp("^" + X + "+|((?:^|[^\\\\])(?:\\\\.)*)" + X + "+$", "g"),
                    P = new RegExp("^" + X + "*," + X + "*"),
                    R = new RegExp("^" + X + "*([>+~]|" + X + ")" + X + "*"),
                    I = new RegExp("=" + X + "*([^\\]'\"]*?)" + X + "*\\]", "g"),
                    F = new RegExp(j),
                    U = new RegExp("^" + C + "$"),
                    $ = {
                        ID: new RegExp("^#(" + C + ")"),
                        CLASS: new RegExp("^\\.(" + C + ")"),
                        TAG: new RegExp("^(" + C + "|[*])"),
                        ATTR: new RegExp("^" + B),
                        PSEUDO: new RegExp("^" + j),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + X + "*(even|odd|(([+-]|)(\\d*)n|)" + X + "*(?:([+-]|)" + X + "*(\\d+)|))" + X + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + x + ")$", "i"),
                        needsContext: new RegExp("^" + X + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + X + "*((?:-\\d)?\\d*)" + X + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    V = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Q = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + X + "?|(" + X + ")|.)", "ig"),
                    ee = function(e, t, n) {
                        var o = "0x" + t - 65536;
                        return o != o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    oe = function() {
                        M()
                    },
                    ae = be(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    q.apply(Y = N.call(A.childNodes), A.childNodes), Y[A.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: Y.length ? function(e, t) {
                            S.apply(e, N.call(t))
                        } : function(e, t) {
                            for (var n = e.length, o = 0; e[n++] = t[o++];);
                            e.length = n - 1
                        }
                    }
                }

                function re(e, t, o, a) {
                    var r, s, d, u, l, f, h, b = t && t.ownerDocument,
                        z = t ? t.nodeType : 9;
                    if (o = o || [], "string" != typeof e || !e || 1 !== z && 9 !== z && 11 !== z) return o;
                    if (!a && ((t ? t.ownerDocument || t : A) !== p && M(t), t = t || p, _)) {
                        if (11 !== z && (l = K.exec(e)))
                            if (r = l[1]) {
                                if (9 === z) {
                                    if (!(d = t.getElementById(r))) return o;
                                    if (d.id === r) return o.push(d), o
                                } else if (b && (d = b.getElementById(r)) && L(t, d) && d.id === r) return o.push(d), o
                            } else {
                                if (l[2]) return q.apply(o, t.getElementsByTagName(e)), o;
                                if ((r = l[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(o, t.getElementsByClassName(r)), o
                            }
                        if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
                            if (1 !== z) b = t, h = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = y), s = (f = i(e)).length; s--;) f[s] = "#" + u + " " + he(f[s]);
                                h = f.join(","), b = Q.test(e) && _e(t.parentNode) || t
                            }
                            if (h) try {
                                return q.apply(o, b.querySelectorAll(h)), o
                            } catch (e) {} finally {
                                u === y && t.removeAttribute("id")
                            }
                        }
                    }
                    return c(e.replace(H, "$1"), t, o, a)
                }

                function ie() {
                    var e = [];
                    return function t(n, a) {
                        return e.push(n + " ") > o.cacheLength && delete t[e.shift()], t[n + " "] = a
                    }
                }

                function se(e) {
                    return e[y] = !0, e
                }

                function ce(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), a = n.length; a--;) o.attrHandle[n[a]] = t
                }

                function ue(e, t) {
                    var n = t && e,
                        o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (o) return o;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function le(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function Me(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function pe(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function fe(e) {
                    return se(function(t) {
                        return t = +t, se(function(n, o) {
                            for (var a, r = e([], n.length, t), i = r.length; i--;) n[a = r[i]] && (n[a] = !(o[a] = n[a]))
                        })
                    })
                }

                function _e(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = re.support = {}, r = re.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, M = re.setDocument = function(e) {
                        var t, a, i = e ? e.ownerDocument || e : A;
                        return i !== p && 9 === i.nodeType && i.documentElement ? (f = (p = i).documentElement, _ = !r(p), A !== p && (a = p.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", oe, !1) : a.attachEvent && a.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = ce(function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = V.test(p.getElementsByClassName), n.getById = ce(function(e) {
                            return f.appendChild(e).id = y, !p.getElementsByName || !p.getElementsByName(y).length
                        }), n.getById ? (o.filter.ID = function(e) {
                            var t = e.replace(Z, ee);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, o.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && _) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (o.filter.ID = function(e) {
                            var t = e.replace(Z, ee);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, o.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && _) {
                                var n, o, a, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                    for (a = t.getElementsByName(e), o = 0; r = a[o++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                }
                                return []
                            }
                        }), o.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, o = [],
                                a = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = r[a++];) 1 === n.nodeType && o.push(n);
                                return o
                            }
                            return r
                        }, o.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e)
                        }, h = [], m = [], (n.qsa = V.test(p.querySelectorAll)) && (ce(function(e) {
                            f.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + X + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + X + "*(?:value|" + x + ")"), e.querySelectorAll("[id~=" + y + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + y + "+*").length || m.push(".#.+[+~]")
                        }), ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + X + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = V.test(b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ce(function(e) {
                            n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), h.push("!=", j)
                        }), m = m.length && new RegExp(m.join("|")), h = h.length && new RegExp(h.join("|")), t = V.test(f.compareDocumentPosition), L = t || V.test(f.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                o = t && t.parentNode;
                            return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, O = t ? function(e, t) {
                            if (e === t) return l = !0, 0;
                            var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return o || (1 & (o = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === o ? e === p || e.ownerDocument === A && L(A, e) ? -1 : t === p || t.ownerDocument === A && L(A, t) ? 1 : u ? W(u, e) - W(u, t) : 0 : 4 & o ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return l = !0, 0;
                            var n, o = 0,
                                a = e.parentNode,
                                r = t.parentNode,
                                i = [e],
                                s = [t];
                            if (!a || !r) return e === p ? -1 : t === p ? 1 : a ? -1 : r ? 1 : u ? W(u, e) - W(u, t) : 0;
                            if (a === r) return ue(e, t);
                            for (n = e; n = n.parentNode;) i.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; i[o] === s[o];) o++;
                            return o ? ue(i[o], s[o]) : i[o] === A ? -1 : s[o] === A ? 1 : 0
                        }, p) : p
                    }, re.matches = function(e, t) {
                        return re(e, null, null, t)
                    }, re.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && M(e), t = t.replace(I, "='$1']"), n.matchesSelector && _ && !k[t + " "] && (!h || !h.test(t)) && (!m || !m.test(t))) try {
                            var o = b.call(e, t);
                            if (o || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
                        } catch (e) {}
                        return re(t, p, null, [e]).length > 0
                    }, re.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && M(e), L(e, t)
                    }, re.attr = function(e, t) {
                        (e.ownerDocument || e) !== p && M(e);
                        var a = o.attrHandle[t.toLowerCase()],
                            r = a && w.call(o.attrHandle, t.toLowerCase()) ? a(e, t, !_) : void 0;
                        return void 0 !== r ? r : n.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }, re.escape = function(e) {
                        return (e + "").replace(te, ne)
                    }, re.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, re.uniqueSort = function(e) {
                        var t, o = [],
                            a = 0,
                            r = 0;
                        if (l = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(O), l) {
                            for (; t = e[r++];) t === e[r] && (a = o.push(r));
                            for (; a--;) e.splice(o[a], 1)
                        }
                        return u = null, e
                    }, a = re.getText = function(e) {
                        var t, n = "",
                            o = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else
                            for (; t = e[o++];) n += a(t);
                        return n
                    }, (o = re.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: $,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && F.test(n) && (t = i(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(Z, ee).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = g[e + " "];
                                return t || (t = new RegExp("(^|" + X + ")" + e + "(" + X + "|$)")) && g(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(o) {
                                    var a = re.attr(o, e);
                                    return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(E, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, o, a) {
                                var r = "nth" !== e.slice(0, 3),
                                    i = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === o && 0 === a ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, c) {
                                    var d, u, l, M, p, f, _ = r !== i ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        h = s && t.nodeName.toLowerCase(),
                                        b = !c && !s,
                                        L = !1;
                                    if (m) {
                                        if (r) {
                                            for (; _;) {
                                                for (M = t; M = M[_];)
                                                    if (s ? M.nodeName.toLowerCase() === h : 1 === M.nodeType) return !1;
                                                f = _ = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [i ? m.firstChild : m.lastChild], i && b) {
                                            for (L = (p = (d = (u = (l = (M = m)[y] || (M[y] = {}))[M.uniqueID] || (l[M.uniqueID] = {}))[e] || [])[0] === z && d[1]) && d[2], M = p && m.childNodes[p]; M = ++p && M && M[_] || (L = p = 0) || f.pop();)
                                                if (1 === M.nodeType && ++L && M === t) {
                                                    u[e] = [z, p, L];
                                                    break
                                                }
                                        } else if (b && (L = p = (d = (u = (l = (M = t)[y] || (M[y] = {}))[M.uniqueID] || (l[M.uniqueID] = {}))[e] || [])[0] === z && d[1]), !1 === L)
                                            for (;
                                                (M = ++p && M && M[_] || (L = p = 0) || f.pop()) && ((s ? M.nodeName.toLowerCase() !== h : 1 !== M.nodeType) || !++L || (b && ((u = (l = M[y] || (M[y] = {}))[M.uniqueID] || (l[M.uniqueID] = {}))[e] = [z, L]), M !== t)););
                                        return (L -= a) === o || L % o == 0 && L / o >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, a = o.pseudos[e] || o.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                                return a[y] ? a(t) : a.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                    for (var o, r = a(e, t), i = r.length; i--;) e[o = W(e, r[i])] = !(n[o] = r[i])
                                }) : function(e) {
                                    return a(e, 0, n)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: se(function(e) {
                                var t = [],
                                    n = [],
                                    o = s(e.replace(H, "$1"));
                                return o[y] ? se(function(e, t, n, a) {
                                    for (var r, i = o(e, null, a, []), s = e.length; s--;)(r = i[s]) && (e[s] = !(t[s] = r))
                                }) : function(e, a, r) {
                                    return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: se(function(e) {
                                return function(t) {
                                    return re(e, t).length > 0
                                }
                            }),
                            contains: se(function(e) {
                                return e = e.replace(Z, ee),
                                    function(t) {
                                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: se(function(e) {
                                return U.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: pe(!1),
                            disabled: pe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !o.pseudos.empty(e)
                            },
                            header: function(e) {
                                return G.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: fe(function() {
                                return [0]
                            }),
                            last: fe(function(e, t) {
                                return [t - 1]
                            }),
                            eq: fe(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: fe(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: fe(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: fe(function(e, t, n) {
                                for (var o = n < 0 ? n + t : n; --o >= 0;) e.push(o);
                                return e
                            }),
                            gt: fe(function(e, t, n) {
                                for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                                return e
                            })
                        }
                    }).pseudos.nth = o.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) o.pseudos[t] = le(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) o.pseudos[t] = Me(t);

                function me() {}

                function he(e) {
                    for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
                    return o
                }

                function be(e, t, n) {
                    var o = t.dir,
                        a = t.next,
                        r = a || o,
                        i = n && "parentNode" === r,
                        s = v++;
                    return t.first ? function(t, n, a) {
                        for (; t = t[o];)
                            if (1 === t.nodeType || i) return e(t, n, a);
                        return !1
                    } : function(t, n, c) {
                        var d, u, l, M = [z, s];
                        if (c) {
                            for (; t = t[o];)
                                if ((1 === t.nodeType || i) && e(t, n, c)) return !0
                        } else
                            for (; t = t[o];)
                                if (1 === t.nodeType || i)
                                    if (u = (l = t[y] || (t[y] = {}))[t.uniqueID] || (l[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[o] || t;
                                    else {
                                        if ((d = u[r]) && d[0] === z && d[1] === s) return M[2] = d[2];
                                        if (u[r] = M, M[2] = e(t, n, c)) return !0
                                    } return !1
                    }
                }

                function Le(e) {
                    return e.length > 1 ? function(t, n, o) {
                        for (var a = e.length; a--;)
                            if (!e[a](t, n, o)) return !1;
                        return !0
                    } : e[0]
                }

                function ye(e, t, n, o, a) {
                    for (var r, i = [], s = 0, c = e.length, d = null != t; s < c; s++)(r = e[s]) && (n && !n(r, o, a) || (i.push(r), d && t.push(s)));
                    return i
                }

                function Ae(e, t, n, o, a, r) {
                    return o && !o[y] && (o = Ae(o)), a && !a[y] && (a = Ae(a, r)), se(function(r, i, s, c) {
                        var d, u, l, M = [],
                            p = [],
                            f = i.length,
                            _ = r || function(e, t, n) {
                                for (var o = 0, a = t.length; o < a; o++) re(e, t[o], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !r && t ? _ : ye(_, M, e, s, c),
                            h = n ? a || (r ? e : f || o) ? [] : i : m;
                        if (n && n(m, h, s, c), o)
                            for (d = ye(h, p), o(d, [], s, c), u = d.length; u--;)(l = d[u]) && (h[p[u]] = !(m[p[u]] = l));
                        if (r) {
                            if (a || e) {
                                if (a) {
                                    for (d = [], u = h.length; u--;)(l = h[u]) && d.push(m[u] = l);
                                    a(null, h = [], d, c)
                                }
                                for (u = h.length; u--;)(l = h[u]) && (d = a ? W(r, l) : M[u]) > -1 && (r[d] = !(i[d] = l))
                            }
                        } else h = ye(h === i ? h.splice(f, h.length) : h), a ? a(null, i, h, c) : q.apply(i, h)
                    })
                }

                function ze(e) {
                    for (var t, n, a, r = e.length, i = o.relative[e[0].type], s = i || o.relative[" "], c = i ? 1 : 0, u = be(function(e) {
                            return e === t
                        }, s, !0), l = be(function(e) {
                            return W(t, e) > -1
                        }, s, !0), M = [function(e, n, o) {
                            var a = !i && (o || n !== d) || ((t = n).nodeType ? u(e, n, o) : l(e, n, o));
                            return t = null, a
                        }]; c < r; c++)
                        if (n = o.relative[e[c].type]) M = [be(Le(M), n)];
                        else {
                            if ((n = o.filter[e[c].type].apply(null, e[c].matches))[y]) {
                                for (a = ++c; a < r && !o.relative[e[a].type]; a++);
                                return Ae(c > 1 && Le(M), c > 1 && he(e.slice(0, c - 1).concat({
                                    value: " " === e[c - 2].type ? "*" : ""
                                })).replace(H, "$1"), n, c < a && ze(e.slice(c, a)), a < r && ze(e = e.slice(a)), a < r && he(e))
                            }
                            M.push(n)
                        }
                    return Le(M)
                }
                return me.prototype = o.filters = o.pseudos, o.setFilters = new me, i = re.tokenize = function(e, t) {
                    var n, a, r, i, s, c, d, u = T[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, c = [], d = o.preFilter; s;) {
                        for (i in n && !(a = P.exec(s)) || (a && (s = s.slice(a[0].length) || s), c.push(r = [])), n = !1, (a = R.exec(s)) && (n = a.shift(), r.push({
                                value: n,
                                type: a[0].replace(H, " ")
                            }), s = s.slice(n.length)), o.filter) !(a = $[i].exec(s)) || d[i] && !(a = d[i](a)) || (n = a.shift(), r.push({
                            value: n,
                            type: i,
                            matches: a
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? re.error(e) : T(e, c).slice(0)
                }, s = re.compile = function(e, t) {
                    var n, a = [],
                        r = [],
                        s = k[e + " "];
                    if (!s) {
                        for (t || (t = i(e)), n = t.length; n--;)(s = ze(t[n]))[y] ? a.push(s) : r.push(s);
                        (s = k(e, function(e, t) {
                            var n = t.length > 0,
                                a = e.length > 0,
                                r = function(r, i, s, c, u) {
                                    var l, f, m, h = 0,
                                        b = "0",
                                        L = r && [],
                                        y = [],
                                        A = d,
                                        v = r || a && o.find.TAG("*", u),
                                        g = z += null == A ? 1 : Math.random() || .1,
                                        T = v.length;
                                    for (u && (d = i === p || i || u); b !== T && null != (l = v[b]); b++) {
                                        if (a && l) {
                                            for (f = 0, i || l.ownerDocument === p || (M(l), s = !_); m = e[f++];)
                                                if (m(l, i || p, s)) {
                                                    c.push(l);
                                                    break
                                                }
                                            u && (z = g)
                                        }
                                        n && ((l = !m && l) && h--, r && L.push(l))
                                    }
                                    if (h += b, n && b !== h) {
                                        for (f = 0; m = t[f++];) m(L, y, i, s);
                                        if (r) {
                                            if (h > 0)
                                                for (; b--;) L[b] || y[b] || (y[b] = D.call(c));
                                            y = ye(y)
                                        }
                                        q.apply(c, y), u && !r && y.length > 0 && h + t.length > 1 && re.uniqueSort(c)
                                    }
                                    return u && (z = g, d = A), L
                                };
                            return n ? se(r) : r
                        }(r, a))).selector = e
                    }
                    return s
                }, c = re.select = function(e, t, n, a) {
                    var r, c, d, u, l, M = "function" == typeof e && e,
                        p = !a && i(e = M.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (d = c[0]).type && 9 === t.nodeType && _ && o.relative[c[1].type]) {
                            if (!(t = (o.find.ID(d.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            M && (t = t.parentNode), e = e.slice(c.shift().value.length)
                        }
                        for (r = $.needsContext.test(e) ? 0 : c.length; r-- && (d = c[r], !o.relative[u = d.type]);)
                            if ((l = o.find[u]) && (a = l(d.matches[0].replace(Z, ee), Q.test(c[0].type) && _e(t.parentNode) || t))) {
                                if (c.splice(r, 1), !(e = a.length && he(c))) return q.apply(n, a), n;
                                break
                            }
                    }
                    return (M || s(e, p))(a, t, !_, n, !t || Q.test(e) && _e(t.parentNode) || t), n
                }, n.sortStable = y.split("").sort(O).join("") === y, n.detectDuplicates = !!l, M(), n.sortDetached = ce(function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), ce(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ce(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ce(function(e) {
                    return null == e.getAttribute("disabled")
                }) || de(x, function(e, t, n) {
                    var o;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }), re
            }(n);
        v.find = k, v.expr = k.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = k.uniqueSort, v.text = k.getText, v.isXMLDoc = k.isXML, v.contains = k.contains, v.escapeSelector = k.escape;
        var O = function(e, t, n) {
                for (var o = [], a = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (a && v(e).is(n)) break;
                        o.push(e)
                    }
                return o
            },
            w = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Y = v.expr.match.needsContext;

        function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function q(e, t, n) {
            return b(t) ? v.grep(e, function(e, o) {
                return !!t.call(e, o, e) !== n
            }) : t.nodeType ? v.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? v.grep(e, function(e) {
                return l.call(t, e) > -1 !== n
            }) : v.filter(t, e, n)
        }
        v.filter = function(e, t, n) {
            var o = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? v.find.matchesSelector(o, e) ? [o] : [] : v.find.matches(e, v.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, v.fn.extend({
            find: function(e) {
                var t, n, o = this.length,
                    a = this;
                if ("string" != typeof e) return this.pushStack(v(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (v.contains(a[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < o; t++) v.find(e, a[t], n);
                return o > 1 ? v.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(q(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(q(this, e || [], !0))
            },
            is: function(e) {
                return !!q(this, "string" == typeof e && Y.test(e) ? v(e) : e || [], !1).length
            }
        });
        var N, W = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (v.fn.init = function(e, t, n) {
            var o, a;
            if (!e) return this;
            if (n = n || N, "string" == typeof e) {
                if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : W.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (o[1]) {
                    if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), S.test(o[1]) && v.isPlainObject(t))
                        for (o in t) b(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                    return this
                }
                return (a = i.getElementById(o[2])) && (this[0] = a, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : v.makeArray(e, this)
        }).prototype = v.fn, N = v(i);
        var x = /^(?:parents|prev(?:Until|All))/,
            X = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function C(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        v.fn.extend({
            has: function(e) {
                var t = v(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (v.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, o = 0,
                    a = this.length,
                    r = [],
                    i = "string" != typeof e && v(e);
                if (!Y.test(e))
                    for (; o < a; o++)
                        for (n = this[o]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? v.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), v.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return O(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return O(e, "parentNode", n)
            },
            next: function(e) {
                return C(e, "nextSibling")
            },
            prev: function(e) {
                return C(e, "previousSibling")
            },
            nextAll: function(e) {
                return O(e, "nextSibling")
            },
            prevAll: function(e) {
                return O(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return O(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return O(e, "previousSibling", n)
            },
            siblings: function(e) {
                return w((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return w(e.firstChild)
            },
            contents: function(e) {
                return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), v.merge([], e.childNodes))
            }
        }, function(e, t) {
            v.fn[e] = function(n, o) {
                var a = v.map(this, t, n);
                return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (a = v.filter(o, a)), this.length > 1 && (X[e] || v.uniqueSort(a), x.test(e) && a.reverse()), this.pushStack(a)
            }
        });
        var B = /[^\x20\t\r\n\f]+/g;

        function j(e) {
            return e
        }

        function E(e) {
            throw e
        }

        function H(e, t, n, o) {
            var a;
            try {
                e && b(a = e.promise) ? a.call(e).done(t).fail(n) : e && b(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(o))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        v.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return v.each(e.match(B) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : v.extend({}, e);
            var t, n, o, a, r = [],
                i = [],
                s = -1,
                c = function() {
                    for (a = a || e.once, o = t = !0; i.length; s = -1)
                        for (n = i.shift(); ++s < r.length;) !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
                    e.memory || (n = !1), t = !1, a && (r = n ? [] : "")
                },
                d = {
                    add: function() {
                        return r && (n && !t && (s = r.length - 1, i.push(n)), function t(n) {
                            v.each(n, function(n, o) {
                                b(o) ? e.unique && d.has(o) || r.push(o) : o && o.length && "string" !== z(o) && t(o)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return v.each(arguments, function(e, t) {
                            for (var n;
                                (n = v.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? v.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return a = i = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return a = i = [], n || t || (r = n = ""), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, n) {
                        return a || (n = [e, (n = n || []).slice ? n.slice() : n], i.push(n), t || c()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return d
        }, v.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                        ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    a = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return v.Deferred(function(n) {
                                v.each(t, function(t, o) {
                                    var a = b(e[o[4]]) && e[o[4]];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, o, a) {
                            var r = 0;

                            function i(e, t, o, a) {
                                return function() {
                                    var s = this,
                                        c = arguments,
                                        d = function() {
                                            var n, d;
                                            if (!(e < r)) {
                                                if ((n = o.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                d = n && ("object" == typeof n || "function" == typeof n) && n.then, b(d) ? a ? d.call(n, i(r, t, j, a), i(r, t, E, a)) : (r++, d.call(n, i(r, t, j, a), i(r, t, E, a), i(r, t, j, t.notifyWith))) : (o !== j && (s = void 0, c = [n]), (a || t.resolveWith)(s, c))
                                            }
                                        },
                                        u = a ? d : function() {
                                            try {
                                                d()
                                            } catch (n) {
                                                v.Deferred.exceptionHook && v.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (o !== E && (s = void 0, c = [n]), t.rejectWith(s, c))
                                            }
                                        };
                                    e ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return v.Deferred(function(n) {
                                t[0][3].add(i(0, n, b(a) ? a : j, n.notifyWith)), t[1][3].add(i(0, n, b(e) ? e : j)), t[2][3].add(i(0, n, b(o) ? o : E))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? v.extend(e, a) : a
                        }
                    },
                    r = {};
                return v.each(t, function(e, n) {
                    var i = n[2],
                        s = n[5];
                    a[n[1]] = i.add, s && i.add(function() {
                        o = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), i.add(n[3].fire), r[n[0]] = function() {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[n[0] + "With"] = i.fireWith
                }), a.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    o = Array(n),
                    a = c.call(arguments),
                    r = v.Deferred(),
                    i = function(e) {
                        return function(n) {
                            o[e] = this, a[e] = arguments.length > 1 ? c.call(arguments) : n, --t || r.resolveWith(o, a)
                        }
                    };
                if (t <= 1 && (H(e, r.done(i(n)).resolve, r.reject, !t), "pending" === r.state() || b(a[n] && a[n].then))) return r.then();
                for (; n--;) H(a[n], i(n), r.reject);
                return r.promise()
            }
        });
        var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        v.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && P.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, v.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var R = v.Deferred();

        function I() {
            i.removeEventListener("DOMContentLoaded", I), n.removeEventListener("load", I), v.ready()
        }
        v.fn.ready = function(e) {
            return R.then(e).catch(function(e) {
                v.readyException(e)
            }), this
        }, v.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || R.resolveWith(i, [v]))
            }
        }), v.ready.then = R.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? n.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", I), n.addEventListener("load", I));
        var F = function(e, t, n, o, a, r, i) {
                var s = 0,
                    c = e.length,
                    d = null == n;
                if ("object" === z(n))
                    for (s in a = !0, n) F(e, t, s, n[s], !0, r, i);
                else if (void 0 !== o && (a = !0, b(o) || (i = !0), d && (i ? (t.call(e, o), t = null) : (d = t, t = function(e, t, n) {
                        return d.call(v(e), n)
                    })), t))
                    for (; s < c; s++) t(e[s], n, i ? o : o.call(e[s], s, t(e[s], n)));
                return a ? e : d ? t.call(e) : c ? t(e[0], n) : r
            },
            U = /^-ms-/,
            $ = /-([a-z])/g;

        function J(e, t) {
            return t.toUpperCase()
        }

        function G(e) {
            return e.replace(U, "ms-").replace($, J)
        }
        var V = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function K() {
            this.expando = v.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var o, a = this.cache(e);
                if ("string" == typeof t) a[G(t)] = n;
                else
                    for (o in t) a[G(o)] = t[o];
                return a
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in o ? [t] : t.match(B) || []).length;
                        for (; n--;) delete o[t[n]]
                    }(void 0 === t || v.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !v.isEmptyObject(t)
            }
        };
        var Q = new K,
            Z = new K,
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function ne(e, t, n) {
            var o;
            if (void 0 === n && 1 === e.nodeType)
                if (o = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else n = void 0;
            return n
        }
        v.extend({
            hasData: function(e) {
                return Z.hasData(e) || Q.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function(e, t) {
                Q.remove(e, t)
            }
        }), v.fn.extend({
            data: function(e, t) {
                var n, o, a, r = this[0],
                    i = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (a = Z.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                        for (n = i.length; n--;) i[n] && 0 === (o = i[n].name).indexOf("data-") && (o = G(o.slice(5)), ne(r, o, a[o]));
                        Q.set(r, "hasDataAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function() {
                    Z.set(this, e)
                }) : F(this, function(t) {
                    var n;
                    if (r && void 0 === t) return void 0 !== (n = Z.get(r, e)) ? n : void 0 !== (n = ne(r, e)) ? n : void 0;
                    this.each(function() {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Z.remove(this, e)
                })
            }
        }), v.extend({
            queue: function(e, t, n) {
                var o;
                if (e) return t = (t || "fx") + "queue", o = Q.get(e, t), n && (!o || Array.isArray(n) ? o = Q.access(e, t, v.makeArray(n)) : o.push(n)), o || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = v.queue(e, t),
                    o = n.length,
                    a = n.shift(),
                    r = v._queueHooks(e, t);
                "inprogress" === a && (a = n.shift(), o--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, function() {
                    v.dequeue(e, t)
                }, r)), !o && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: v.Callbacks("once memory").add(function() {
                        Q.remove(e, [t + "queue", n])
                    })
                })
            }
        }), v.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = v.queue(this, e, t);
                    v._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    v.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, o = 1,
                    a = v.Deferred(),
                    r = this,
                    i = this.length,
                    s = function() {
                        --o || a.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;)(n = Q.get(r[i], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
                return s(), a.promise(t)
            }
        });
        var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ae = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            ie = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
            },
            se = function(e, t, n, o) {
                var a, r, i = {};
                for (r in t) i[r] = e.style[r], e.style[r] = t[r];
                for (r in a = n.apply(e, o || []), t) e.style[r] = i[r];
                return a
            };

        function ce(e, t, n, o) {
            var a, r, i = 20,
                s = o ? function() {
                    return o.cur()
                } : function() {
                    return v.css(e, t, "")
                },
                c = s(),
                d = n && n[3] || (v.cssNumber[t] ? "" : "px"),
                u = (v.cssNumber[t] || "px" !== d && +c) && ae.exec(v.css(e, t));
            if (u && u[3] !== d) {
                for (c /= 2, d = d || u[3], u = +c || 1; i--;) v.style(e, t, u + d), (1 - r) * (1 - (r = s() / c || .5)) <= 0 && (i = 0), u /= r;
                u *= 2, v.style(e, t, u + d), n = n || []
            }
            return n && (u = +u || +c || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = d, o.start = u, o.end = a)), a
        }
        var de = {};

        function ue(e) {
            var t, n = e.ownerDocument,
                o = e.nodeName,
                a = de[o];
            return a || (t = n.body.appendChild(n.createElement(o)), a = v.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), de[o] = a, a)
        }

        function le(e, t) {
            for (var n, o, a = [], r = 0, i = e.length; r < i; r++)(o = e[r]).style && (n = o.style.display, t ? ("none" === n && (a[r] = Q.get(o, "display") || null, a[r] || (o.style.display = "")), "" === o.style.display && ie(o) && (a[r] = ue(o))) : "none" !== n && (a[r] = "none", Q.set(o, "display", n)));
            for (r = 0; r < i; r++) null != a[r] && (e[r].style.display = a[r]);
            return e
        }
        v.fn.extend({
            show: function() {
                return le(this, !0)
            },
            hide: function() {
                return le(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ie(this) ? v(this).show() : v(this).hide()
                })
            }
        });
        var Me = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            fe = /^$|^module$|\/(?:java|ecma)script/i,
            _e = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? v.merge([e], n) : n
        }

        function he(e, t) {
            for (var n = 0, o = e.length; n < o; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        _e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td;
        var be = /<|&#?\w+;/;

        function Le(e, t, n, o, a) {
            for (var r, i, s, c, d, u, l = t.createDocumentFragment(), M = [], p = 0, f = e.length; p < f; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === z(r)) v.merge(M, r.nodeType ? [r] : r);
                    else if (be.test(r)) {
                for (i = i || l.appendChild(t.createElement("div")), s = (pe.exec(r) || ["", ""])[1].toLowerCase(), c = _e[s] || _e._default, i.innerHTML = c[1] + v.htmlPrefilter(r) + c[2], u = c[0]; u--;) i = i.lastChild;
                v.merge(M, i.childNodes), (i = l.firstChild).textContent = ""
            } else M.push(t.createTextNode(r));
            for (l.textContent = "", p = 0; r = M[p++];)
                if (o && v.inArray(r, o) > -1) a && a.push(r);
                else if (d = v.contains(r.ownerDocument, r), i = me(l.appendChild(r), "script"), d && he(i), n)
                for (u = 0; r = i[u++];) fe.test(r.type || "") && n.push(r);
            return l
        }! function() {
            var e = i.createDocumentFragment().appendChild(i.createElement("div")),
                t = i.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var ye = i.documentElement,
            Ae = /^key/,
            ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ve = /^([^.]*)(?:\.(.+)|)/;

        function ge() {
            return !0
        }

        function Te() {
            return !1
        }

        function ke() {
            try {
                return i.activeElement
            } catch (e) {}
        }

        function Oe(e, t, n, o, a, r) {
            var i, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (o = o || n, n = void 0), t) Oe(e, s, n, o, t[s], r);
                return e
            }
            if (null == o && null == a ? (a = n, o = n = void 0) : null == a && ("string" == typeof n ? (a = o, o = void 0) : (a = o, o = n, n = void 0)), !1 === a) a = Te;
            else if (!a) return e;
            return 1 === r && (i = a, (a = function(e) {
                return v().off(e), i.apply(this, arguments)
            }).guid = i.guid || (i.guid = v.guid++)), e.each(function() {
                v.event.add(this, t, a, o, n)
            })
        }
        v.event = {
            global: {},
            add: function(e, t, n, o, a) {
                var r, i, s, c, d, u, l, M, p, f, _, m = Q.get(e);
                if (m)
                    for (n.handler && (n = (r = n).handler, a = r.selector), a && v.find.matchesSelector(ye, a), n.guid || (n.guid = v.guid++), (c = m.events) || (c = m.events = {}), (i = m.handle) || (i = m.handle = function(t) {
                            return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                        }), d = (t = (t || "").match(B) || [""]).length; d--;) p = _ = (s = ve.exec(t[d]) || [])[1], f = (s[2] || "").split(".").sort(), p && (l = v.event.special[p] || {}, p = (a ? l.delegateType : l.bindType) || p, l = v.event.special[p] || {}, u = v.extend({
                        type: p,
                        origType: _,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && v.expr.match.needsContext.test(a),
                        namespace: f.join(".")
                    }, r), (M = c[p]) || ((M = c[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, o, f, i) || e.addEventListener && e.addEventListener(p, i)), l.add && (l.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? M.splice(M.delegateCount++, 0, u) : M.push(u), v.event.global[p] = !0)
            },
            remove: function(e, t, n, o, a) {
                var r, i, s, c, d, u, l, M, p, f, _, m = Q.hasData(e) && Q.get(e);
                if (m && (c = m.events)) {
                    for (d = (t = (t || "").match(B) || [""]).length; d--;)
                        if (p = _ = (s = ve.exec(t[d]) || [])[1], f = (s[2] || "").split(".").sort(), p) {
                            for (l = v.event.special[p] || {}, M = c[p = (o ? l.delegateType : l.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = r = M.length; r--;) u = M[r], !a && _ !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (M.splice(r, 1), u.selector && M.delegateCount--, l.remove && l.remove.call(e, u));
                            i && !M.length && (l.teardown && !1 !== l.teardown.call(e, f, m.handle) || v.removeEvent(e, p, m.handle), delete c[p])
                        } else
                            for (p in c) v.event.remove(e, p + t[d], n, o, !0);
                    v.isEmptyObject(c) && Q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, o, a, r, i, s = v.event.fix(e),
                    c = new Array(arguments.length),
                    d = (Q.get(this, "events") || {})[s.type] || [],
                    u = v.event.special[s.type] || {};
                for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                    for (i = v.event.handlers.call(this, s, d), t = 0;
                        (a = i[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = a.elem, n = 0;
                            (r = a.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (o = ((v.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, c)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, o, a, r, i, s = [],
                    c = t.delegateCount,
                    d = e.target;
                if (c && d.nodeType && !("click" === e.type && e.button >= 1))
                    for (; d !== this; d = d.parentNode || this)
                        if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                            for (r = [], i = {}, n = 0; n < c; n++) void 0 === i[a = (o = t[n]).selector + " "] && (i[a] = o.needsContext ? v(a, this).index(d) > -1 : v.find(a, this, null, [d]).length), i[a] && r.push(o);
                            r.length && s.push({
                                elem: d,
                                handlers: r
                            })
                        }
                return d = this, c < t.length && s.push({
                    elem: d,
                    handlers: t.slice(c)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(v.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: b(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[v.expando] ? e : new v.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ke() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === ke() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return D(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, v.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, v.Event = function(e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ge : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            constructor: v.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ge, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ge, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ge, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, v.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ae.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, v.event.addProp), v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, o = e.relatedTarget,
                        a = e.handleObj;
                    return o && (o === this || v.contains(this, o)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), v.fn.extend({
            on: function(e, t, n, o) {
                return Oe(this, e, t, n, o)
            },
            one: function(e, t, n, o) {
                return Oe(this, e, t, n, o, 1)
            },
            off: function(e, t, n) {
                var o, a;
                if (e && e.preventDefault && e.handleObj) return o = e.handleObj, v(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                    v.event.remove(this, e, n, t)
                })
            }
        });
        var we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ye = /<script|<style|<link/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function qe(e, t) {
            return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && v(e).children("tbody")[0] || e
        }

        function Ne(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function We(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function xe(e, t) {
            var n, o, a, r, i, s, c, d;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (r = Q.access(e), i = Q.set(t, r), d = r.events))
                    for (a in delete i.handle, i.events = {}, d)
                        for (n = 0, o = d[a].length; n < o; n++) v.event.add(t, a, d[a][n]);
                Z.hasData(e) && (s = Z.access(e), c = v.extend({}, s), Z.set(t, c))
            }
        }

        function Xe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Ce(e, t, n, o) {
            t = d.apply([], t);
            var a, r, i, s, c, u, l = 0,
                M = e.length,
                p = M - 1,
                f = t[0],
                _ = b(f);
            if (_ || M > 1 && "string" == typeof f && !h.checkClone && De.test(f)) return e.each(function(a) {
                var r = e.eq(a);
                _ && (t[0] = f.call(this, a, r.html())), Ce(r, t, n, o)
            });
            if (M && (r = (a = Le(t, e[0].ownerDocument, !1, e, o)).firstChild, 1 === a.childNodes.length && (a = r), r || o)) {
                for (s = (i = v.map(me(a, "script"), Ne)).length; l < M; l++) c = a, l !== p && (c = v.clone(c, !0, !0), s && v.merge(i, me(c, "script"))), n.call(e[l], c, l);
                if (s)
                    for (u = i[i.length - 1].ownerDocument, v.map(i, We), l = 0; l < s; l++) c = i[l], fe.test(c.type || "") && !Q.access(c, "globalEval") && v.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? v._evalUrl && v._evalUrl(c.src) : A(c.textContent.replace(Se, ""), u, c))
            }
            return e
        }

        function Be(e, t, n) {
            for (var o, a = t ? v.filter(t, e) : e, r = 0; null != (o = a[r]); r++) n || 1 !== o.nodeType || v.cleanData(me(o)), o.parentNode && (n && v.contains(o.ownerDocument, o) && he(me(o, "script")), o.parentNode.removeChild(o));
            return e
        }
        v.extend({
            htmlPrefilter: function(e) {
                return e.replace(we, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var o, a, r, i, s = e.cloneNode(!0),
                    c = v.contains(e.ownerDocument, e);
                if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                    for (i = me(s), o = 0, a = (r = me(e)).length; o < a; o++) Xe(r[o], i[o]);
                if (t)
                    if (n)
                        for (r = r || me(e), i = i || me(s), o = 0, a = r.length; o < a; o++) xe(r[o], i[o]);
                    else xe(e, s);
                return (i = me(s, "script")).length > 0 && he(i, !c && me(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, o, a = v.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (V(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (o in t.events) a[o] ? v.event.remove(n, o) : v.removeEvent(n, o, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }), v.fn.extend({
            detach: function(e) {
                return Be(this, e, !0)
            },
            remove: function(e) {
                return Be(this, e)
            },
            text: function(e) {
                return F(this, function(e) {
                    return void 0 === e ? v.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ce(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Ce(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Ce(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ce(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(me(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return v.clone(this, e, t)
                })
            },
            html: function(e) {
                return F(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        o = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ye.test(e) && !_e[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = v.htmlPrefilter(e);
                        try {
                            for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Ce(this, arguments, function(t) {
                    var n = this.parentNode;
                    v.inArray(this, e) < 0 && (v.cleanData(me(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            v.fn[e] = function(e) {
                for (var n, o = [], a = v(e), r = a.length - 1, i = 0; i <= r; i++) n = i === r ? this : this.clone(!0), v(a[i])[t](n), u.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var je = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
            Ee = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            He = new RegExp(re.join("|"), "i");

        function Pe(e, t, n) {
            var o, a, r, i, s = e.style;
            return (n = n || Ee(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || v.contains(e.ownerDocument, e) || (i = v.style(e, t)), !h.pixelBoxStyles() && je.test(i) && He.test(t) && (o = s.width, a = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = o, s.minWidth = a, s.maxWidth = r)), void 0 !== i ? i + "" : i
        }

        function Re(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(d).appendChild(u);
                    var e = n.getComputedStyle(u);
                    o = "1%" !== e.top, c = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), a = 36 === t(e.width), u.style.position = "absolute", r = 36 === u.offsetWidth || "absolute", ye.removeChild(d), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var o, a, r, s, c, d = i.createElement("div"),
                u = i.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, v.extend(h, {
                boxSizingReliable: function() {
                    return e(), a
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), o
                },
                reliableMarginLeft: function() {
                    return e(), c
                },
                scrollboxSize: function() {
                    return e(), r
                }
            }))
        }();
        var Ie = /^(none|table(?!-c[ea]).+)/,
            Fe = /^--/,
            Ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            $e = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Je = ["Webkit", "Moz", "ms"],
            Ge = i.createElement("div").style;

        function Ve(e) {
            var t = v.cssProps[e];
            return t || (t = v.cssProps[e] = function(e) {
                if (e in Ge) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                    if ((e = Je[n] + t) in Ge) return e
            }(e) || e), t
        }

        function Ke(e, t, n) {
            var o = ae.exec(t);
            return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
        }

        function Qe(e, t, n, o, a, r) {
            var i = "width" === t ? 1 : 0,
                s = 0,
                c = 0;
            if (n === (o ? "border" : "content")) return 0;
            for (; i < 4; i += 2) "margin" === n && (c += v.css(e, n + re[i], !0, a)), o ? ("content" === n && (c -= v.css(e, "padding" + re[i], !0, a)), "margin" !== n && (c -= v.css(e, "border" + re[i] + "Width", !0, a))) : (c += v.css(e, "padding" + re[i], !0, a), "padding" !== n ? c += v.css(e, "border" + re[i] + "Width", !0, a) : s += v.css(e, "border" + re[i] + "Width", !0, a));
            return !o && r >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - c - s - .5))), c
        }

        function Ze(e, t, n) {
            var o = Ee(e),
                a = Pe(e, t, o),
                r = "border-box" === v.css(e, "boxSizing", !1, o),
                i = r;
            if (je.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return i = i && (h.boxSizingReliable() || a === e.style[t]), ("auto" === a || !parseFloat(a) && "inline" === v.css(e, "display", !1, o)) && (a = e["offset" + t[0].toUpperCase() + t.slice(1)], i = !0), (a = parseFloat(a) || 0) + Qe(e, t, n || (r ? "border" : "content"), i, o, a) + "px"
        }

        function et(e, t, n, o, a) {
            return new et.prototype.init(e, t, n, o, a)
        }
        v.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Pe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, r, i, s = G(t),
                        c = Fe.test(t),
                        d = e.style;
                    if (c || (t = Ve(s)), i = v.cssHooks[t] || v.cssHooks[s], void 0 === n) return i && "get" in i && void 0 !== (a = i.get(e, !1, o)) ? a : d[t];
                    "string" == (r = typeof n) && (a = ae.exec(n)) && a[1] && (n = ce(e, t, a), r = "number"), null != n && n == n && ("number" === r && (n += a && a[3] || (v.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, o)) || (c ? d.setProperty(t, n) : d[t] = n))
                }
            },
            css: function(e, t, n, o) {
                var a, r, i, s = G(t);
                return Fe.test(t) || (t = Ve(s)), (i = v.cssHooks[t] || v.cssHooks[s]) && "get" in i && (a = i.get(e, !0, n)), void 0 === a && (a = Pe(e, t, o)), "normal" === a && t in $e && (a = $e[t]), "" === n || n ? (r = parseFloat(a), !0 === n || isFinite(r) ? r || 0 : a) : a
            }
        }), v.each(["height", "width"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n, o) {
                    if (n) return !Ie.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, o) : se(e, Ue, function() {
                        return Ze(e, t, o)
                    })
                },
                set: function(e, n, o) {
                    var a, r = Ee(e),
                        i = "border-box" === v.css(e, "boxSizing", !1, r),
                        s = o && Qe(e, t, o, i, r);
                    return i && h.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Qe(e, t, "border", !1, r) - .5)), s && (a = ae.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = v.css(e, t)), Ke(0, n, s)
                }
            }
        }), v.cssHooks.marginLeft = Re(h.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), v.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            v.cssHooks[e + t] = {
                expand: function(n) {
                    for (var o = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) a[e + re[o] + t] = r[o] || r[o - 2] || r[0];
                    return a
                }
            }, "margin" !== e && (v.cssHooks[e + t].set = Ke)
        }), v.fn.extend({
            css: function(e, t) {
                return F(this, function(e, t, n) {
                    var o, a, r = {},
                        i = 0;
                    if (Array.isArray(t)) {
                        for (o = Ee(e), a = t.length; i < a; i++) r[t[i]] = v.css(e, t[i], !1, o);
                        return r
                    }
                    return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), v.Tween = et, et.prototype = {
            constructor: et,
            init: function(e, t, n, o, a, r) {
                this.elem = e, this.prop = n, this.easing = a || v.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (v.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
            }
        }, et.prototype.init.prototype = et.prototype, et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, v.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, v.fx = et.prototype.init, v.fx.step = {};
        var tt, nt, ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;

        function rt() {
            nt && (!1 === i.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rt) : n.setTimeout(rt, v.fx.interval), v.fx.tick())
        }

        function it() {
            return n.setTimeout(function() {
                tt = void 0
            }), tt = Date.now()
        }

        function st(e, t) {
            var n, o = 0,
                a = {
                    height: e
                };
            for (t = t ? 1 : 0; o < 4; o += 2 - t) a["margin" + (n = re[o])] = a["padding" + n] = e;
            return t && (a.opacity = a.width = e), a
        }

        function ct(e, t, n) {
            for (var o, a = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), r = 0, i = a.length; r < i; r++)
                if (o = a[r].call(n, t, e)) return o
        }

        function dt(e, t, n) {
            var o, a, r = 0,
                i = dt.prefilters.length,
                s = v.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (a) return !1;
                    for (var t = tt || it(), n = Math.max(0, d.startTime + d.duration - t), o = 1 - (n / d.duration || 0), r = 0, i = d.tweens.length; r < i; r++) d.tweens[r].run(o);
                    return s.notifyWith(e, [d, o, n]), o < 1 && i ? n : (i || s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d]), !1)
                },
                d = s.promise({
                    elem: e,
                    props: v.extend({}, t),
                    opts: v.extend(!0, {
                        specialEasing: {},
                        easing: v.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: tt || it(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var o = v.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(o), o
                    },
                    stop: function(t) {
                        var n = 0,
                            o = t ? d.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; n < o; n++) d.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d, t])) : s.rejectWith(e, [d, t]), this
                    }
                }),
                u = d.props;
            for (function(e, t) {
                    var n, o, a, r, i;
                    for (n in e)
                        if (a = t[o = G(n)], r = e[n], Array.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (i = v.cssHooks[o]) && "expand" in i)
                            for (n in r = i.expand(r), delete e[o], r) n in e || (e[n] = r[n], t[n] = a);
                        else t[o] = a
                }(u, d.opts.specialEasing); r < i; r++)
                if (o = dt.prefilters[r].call(d, e, u, d.opts)) return b(o.stop) && (v._queueHooks(d.elem, d.opts.queue).stop = o.stop.bind(o)), o;
            return v.map(u, ct, d), b(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), v.fx.timer(v.extend(c, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }
        v.Animation = v.extend(dt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, ae.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    b(e) ? (t = e, e = ["*"]) : e = e.match(B);
                    for (var n, o = 0, a = e.length; o < a; o++) n = e[o], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var o, a, r, i, s, c, d, u, l = "width" in t || "height" in t,
                        M = this,
                        p = {},
                        f = e.style,
                        _ = e.nodeType && ie(e),
                        m = Q.get(e, "fxshow");
                    for (o in n.queue || (null == (i = v._queueHooks(e, "fx")).unqueued && (i.unqueued = 0, s = i.empty.fire, i.empty.fire = function() {
                            i.unqueued || s()
                        }), i.unqueued++, M.always(function() {
                            M.always(function() {
                                i.unqueued--, v.queue(e, "fx").length || i.empty.fire()
                            })
                        })), t)
                        if (a = t[o], ot.test(a)) {
                            if (delete t[o], r = r || "toggle" === a, a === (_ ? "hide" : "show")) {
                                if ("show" !== a || !m || void 0 === m[o]) continue;
                                _ = !0
                            }
                            p[o] = m && m[o] || v.style(e, o)
                        }
                    if ((c = !v.isEmptyObject(t)) || !v.isEmptyObject(p))
                        for (o in l && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = m && m.display) && (d = Q.get(e, "display")), "none" === (u = v.css(e, "display")) && (d ? u = d : (le([e], !0), d = e.style.display || d, u = v.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === v.css(e, "float") && (c || (M.done(function() {
                                f.display = d
                            }), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", M.always(function() {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            })), c = !1, p) c || (m ? "hidden" in m && (_ = m.hidden) : m = Q.access(e, "fxshow", {
                            display: d
                        }), r && (m.hidden = !_), _ && le([e], !0), M.done(function() {
                            for (o in _ || le([e]), Q.remove(e, "fxshow"), p) v.style(e, o, p[o])
                        })), c = ct(_ ? m[o] : 0, o, M), o in m || (m[o] = c.start, _ && (c.end = c.start, c.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                }
            }), v.speed = function(e, t, n) {
                var o = e && "object" == typeof e ? v.extend({}, e) : {
                    complete: n || !n && t || b(e) && e,
                    duration: e,
                    easing: n && t || t && !b(t) && t
                };
                return v.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in v.fx.speeds ? o.duration = v.fx.speeds[o.duration] : o.duration = v.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
                    b(o.old) && o.old.call(this), o.queue && v.dequeue(this, o.queue)
                }, o
            }, v.fn.extend({
                fadeTo: function(e, t, n, o) {
                    return this.filter(ie).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, o)
                },
                animate: function(e, t, n, o) {
                    var a = v.isEmptyObject(e),
                        r = v.speed(t, n, o),
                        i = function() {
                            var t = dt(this, v.extend({}, e), r);
                            (a || Q.get(this, "finish")) && t.stop(!0)
                        };
                    return i.finish = i, a || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
                },
                stop: function(e, t, n) {
                    var o = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            a = null != e && e + "queueHooks",
                            r = v.timers,
                            i = Q.get(this);
                        if (a) i[a] && i[a].stop && o(i[a]);
                        else
                            for (a in i) i[a] && i[a].stop && at.test(a) && o(i[a]);
                        for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), t = !1, r.splice(a, 1));
                        !t && n || v.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = Q.get(this),
                            o = n[e + "queue"],
                            a = n[e + "queueHooks"],
                            r = v.timers,
                            i = o ? o.length : 0;
                        for (n.finish = !0, v.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < i; t++) o[t] && o[t].finish && o[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), v.each(["toggle", "show", "hide"], function(e, t) {
                var n = v.fn[t];
                v.fn[t] = function(e, o, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, o, a)
                }
            }), v.each({
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                v.fn[e] = function(e, n, o) {
                    return this.animate(t, e, n, o)
                }
            }), v.timers = [], v.fx.tick = function() {
                var e, t = 0,
                    n = v.timers;
                for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || v.fx.stop(), tt = void 0
            }, v.fx.timer = function(e) {
                v.timers.push(e), v.fx.start()
            }, v.fx.interval = 13, v.fx.start = function() {
                nt || (nt = !0, rt())
            }, v.fx.stop = function() {
                nt = null
            }, v.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, v.fn.delay = function(e, t) {
                return e = v.fx && v.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, o) {
                    var a = n.setTimeout(t, e);
                    o.stop = function() {
                        n.clearTimeout(a)
                    }
                })
            },
            function() {
                var e = i.createElement("input"),
                    t = i.createElement("select").appendChild(i.createElement("option"));
                e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
            }();
        var ut, lt = v.expr.attrHandle;
        v.fn.extend({
            attr: function(e, t) {
                return F(this, v.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    v.removeAttr(this, e)
                })
            }
        }), v.extend({
            attr: function(e, t, n) {
                var o, a, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === r && v.isXMLDoc(e) || (a = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void v.removeAttr(e, t) : a && "set" in a && void 0 !== (o = a.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (o = a.get(e, t)) ? o : null == (o = v.find.attr(e, t)) ? void 0 : o)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!h.radioValue && "radio" === t && D(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, o = 0,
                    a = t && t.match(B);
                if (a && 1 === e.nodeType)
                    for (; n = a[o++];) e.removeAttribute(n)
            }
        }), ut = {
            set: function(e, t, n) {
                return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, v.each(v.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = lt[t] || v.find.attr;
            lt[t] = function(e, t, o) {
                var a, r, i = t.toLowerCase();
                return o || (r = lt[i], lt[i] = a, a = null != n(e, t, o) ? i : null, lt[i] = r), a
            }
        });
        var Mt = /^(?:input|select|textarea|button)$/i,
            pt = /^(?:a|area)$/i;

        function ft(e) {
            return (e.match(B) || []).join(" ")
        }

        function _t(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function mt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
        }
        v.fn.extend({
            prop: function(e, t) {
                return F(this, v.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[v.propFix[e] || e]
                })
            }
        }), v.extend({
            prop: function(e, t, n) {
                var o, a, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && v.isXMLDoc(e) || (t = v.propFix[t] || t, a = v.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (o = a.set(e, n, t)) ? o : e[t] = n : a && "get" in a && null !== (o = a.get(e, t)) ? o : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = v.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Mt.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), h.optSelected || (v.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            v.propFix[this.toLowerCase()] = this
        }), v.fn.extend({
            addClass: function(e) {
                var t, n, o, a, r, i, s, c = 0;
                if (b(e)) return this.each(function(t) {
                    v(this).addClass(e.call(this, t, _t(this)))
                });
                if ((t = mt(e)).length)
                    for (; n = this[c++];)
                        if (a = _t(n), o = 1 === n.nodeType && " " + ft(a) + " ") {
                            for (i = 0; r = t[i++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                            a !== (s = ft(o)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, o, a, r, i, s, c = 0;
                if (b(e)) return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, _t(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = mt(e)).length)
                    for (; n = this[c++];)
                        if (a = _t(n), o = 1 === n.nodeType && " " + ft(a) + " ") {
                            for (i = 0; r = t[i++];)
                                for (; o.indexOf(" " + r + " ") > -1;) o = o.replace(" " + r + " ", " ");
                            a !== (s = ft(o)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    o = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
                    v(this).toggleClass(e.call(this, n, _t(this), t), t)
                }) : this.each(function() {
                    var t, a, r, i;
                    if (o)
                        for (a = 0, r = v(this), i = mt(e); t = i[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = _t(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, o = 0;
                for (t = " " + e + " "; n = this[o++];)
                    if (1 === n.nodeType && (" " + ft(_t(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var ht = /\r/g;
        v.fn.extend({
            val: function(e) {
                var t, n, o, a = this[0];
                return arguments.length ? (o = b(e), this.each(function(n) {
                    var a;
                    1 === this.nodeType && (null == (a = o ? e.call(this, n, v(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = v.map(a, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                })) : a ? (t = v.valHooks[a.type] || v.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof(n = a.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
            }
        }), v.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = v.find.attr(e, "value");
                        return null != t ? t : ft(v.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, o, a = e.options,
                            r = e.selectedIndex,
                            i = "select-one" === e.type,
                            s = i ? null : [],
                            c = i ? r + 1 : a.length;
                        for (o = r < 0 ? c : i ? r : 0; o < c; o++)
                            if (((n = a[o]).selected || o === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (t = v(n).val(), i) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, o, a = e.options, r = v.makeArray(t), i = a.length; i--;)((o = a[i]).selected = v.inArray(v.valHooks.option.get(o), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = v.inArray(v(e).val(), t) > -1
                }
            }, h.checkOn || (v.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), h.focusin = "onfocusin" in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/,
            Lt = function(e) {
                e.stopPropagation()
            };
        v.extend(v.event, {
            trigger: function(e, t, o, a) {
                var r, s, c, d, u, l, M, p, _ = [o || i],
                    m = f.call(e, "type") ? e.type : e,
                    h = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = c = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !bt.test(m + v.event.triggered) && (m.indexOf(".") > -1 && (m = (h = m.split(".")).shift(), h.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[v.expando] ? e : new v.Event(m, "object" == typeof e && e)).isTrigger = a ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), t = null == t ? [e] : v.makeArray(t, [e]), M = v.event.special[m] || {}, a || !M.trigger || !1 !== M.trigger.apply(o, t))) {
                    if (!a && !M.noBubble && !L(o)) {
                        for (d = M.delegateType || m, bt.test(d + m) || (s = s.parentNode); s; s = s.parentNode) _.push(s), c = s;
                        c === (o.ownerDocument || i) && _.push(c.defaultView || c.parentWindow || n)
                    }
                    for (r = 0;
                        (s = _[r++]) && !e.isPropagationStopped();) p = s, e.type = r > 1 ? d : M.bindType || m, (l = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && l.apply(s, t), (l = u && s[u]) && l.apply && V(s) && (e.result = l.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = m, a || e.isDefaultPrevented() || M._default && !1 !== M._default.apply(_.pop(), t) || !V(o) || u && b(o[m]) && !L(o) && ((c = o[u]) && (o[u] = null), v.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Lt), o[m](), e.isPropagationStopped() && p.removeEventListener(m, Lt), v.event.triggered = void 0, c && (o[u] = c)), e.result
                }
            },
            simulate: function(e, t, n) {
                var o = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                v.event.trigger(o, null, t)
            }
        }), v.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return v.event.trigger(e, t, n, !0)
            }
        }), h.focusin || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                v.event.simulate(t, e.target, v.event.fix(e))
            };
            v.event.special[t] = {
                setup: function() {
                    var o = this.ownerDocument || this,
                        a = Q.access(o, t);
                    a || o.addEventListener(e, n, !0), Q.access(o, t, (a || 0) + 1)
                },
                teardown: function() {
                    var o = this.ownerDocument || this,
                        a = Q.access(o, t) - 1;
                    a ? Q.access(o, t, a) : (o.removeEventListener(e, n, !0), Q.remove(o, t))
                }
            }
        });
        var yt = n.location,
            At = Date.now(),
            zt = /\?/;
        v.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), t
        };
        var vt = /\[\]$/,
            gt = /\r?\n/g,
            Tt = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;

        function Ot(e, t, n, o) {
            var a;
            if (Array.isArray(t)) v.each(t, function(t, a) {
                n || vt.test(e) ? o(e, a) : Ot(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, o)
            });
            else if (n || "object" !== z(t)) o(e, t);
            else
                for (a in t) Ot(e + "[" + a + "]", t[a], n, o)
        }
        v.param = function(e, t) {
            var n, o = [],
                a = function(e, t) {
                    var n = b(t) ? t() : t;
                    o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
                a(this.name, this.value)
            });
            else
                for (n in e) Ot(n, e[n], t, a);
            return o.join("&")
        }, v.fn.extend({
            serialize: function() {
                return v.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = v.prop(this, "elements");
                    return e ? v.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !v(this).is(":disabled") && kt.test(this.nodeName) && !Tt.test(e) && (this.checked || !Me.test(e))
                }).map(function(e, t) {
                    var n = v(this).val();
                    return null == n ? null : Array.isArray(n) ? v.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(gt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(gt, "\r\n")
                    }
                }).get()
            }
        });
        var wt = /%20/g,
            Yt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qt = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            Wt = {},
            xt = {},
            Xt = "*/".concat("*"),
            Ct = i.createElement("a");

        function Bt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var o, a = 0,
                    r = t.toLowerCase().match(B) || [];
                if (b(n))
                    for (; o = r[a++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
            }
        }

        function jt(e, t, n, o) {
            var a = {},
                r = e === xt;

            function i(s) {
                var c;
                return a[s] = !0, v.each(e[s] || [], function(e, s) {
                    var d = s(t, n, o);
                    return "string" != typeof d || r || a[d] ? r ? !(c = d) : void 0 : (t.dataTypes.unshift(d), i(d), !1)
                }), c
            }
            return i(t.dataTypes[0]) || !a["*"] && i("*")
        }

        function Et(e, t) {
            var n, o, a = v.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((a[n] ? e : o || (o = {}))[n] = t[n]);
            return o && v.extend(!0, e, o), e
        }
        Ct.href = yt.href, v.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: yt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": v.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Et(Et(e, v.ajaxSettings), t) : Et(v.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(Wt),
            ajaxTransport: Bt(xt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var o, a, r, s, c, d, u, l, M, p, f = v.ajaxSetup({}, t),
                    _ = f.context || f,
                    m = f.context && (_.nodeType || _.jquery) ? v(_) : v.event,
                    h = v.Deferred(),
                    b = v.Callbacks("once memory"),
                    L = f.statusCode || {},
                    y = {},
                    A = {},
                    z = "canceled",
                    g = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = St.exec(r);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = A[e.toLowerCase()] = A[e.toLowerCase()] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) g.always(e[g.status]);
                                else
                                    for (t in e) L[t] = [L[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || z;
                            return o && o.abort(t), T(0, t), this
                        }
                    };
                if (h.promise(g), f.url = ((e || f.url || yt.href) + "").replace(Nt, yt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(B) || [""], null == f.crossDomain) {
                    d = i.createElement("a");
                    try {
                        d.href = f.url, d.href = d.href, f.crossDomain = Ct.protocol + "//" + Ct.host != d.protocol + "//" + d.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), jt(Wt, f, t, g), u) return g;
                for (M in (l = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !qt.test(f.type), a = f.url.replace(Yt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(wt, "+")) : (p = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (zt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Dt, "$1"), p = (zt.test(a) ? "&" : "?") + "_=" + At++ + p), f.url = a + p), f.ifModified && (v.lastModified[a] && g.setRequestHeader("If-Modified-Since", v.lastModified[a]), v.etag[a] && g.setRequestHeader("If-None-Match", v.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && g.setRequestHeader("Content-Type", f.contentType), g.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : f.accepts["*"]), f.headers) g.setRequestHeader(M, f.headers[M]);
                if (f.beforeSend && (!1 === f.beforeSend.call(_, g, f) || u)) return g.abort();
                if (z = "abort", b.add(f.complete), g.done(f.success), g.fail(f.error), o = jt(xt, f, t, g)) {
                    if (g.readyState = 1, l && m.trigger("ajaxSend", [g, f]), u) return g;
                    f.async && f.timeout > 0 && (c = n.setTimeout(function() {
                        g.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, o.send(y, T)
                    } catch (e) {
                        if (u) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");

                function T(e, t, i, s) {
                    var d, M, p, y, A, z = t;
                    u || (u = !0, c && n.clearTimeout(c), o = void 0, r = s || "", g.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, i && (y = function(e, t, n) {
                        for (var o, a, r, i, s = e.contents, c = e.dataTypes;
                            "*" === c[0];) c.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (o)
                            for (a in s)
                                if (s[a] && s[a].test(o)) {
                                    c.unshift(a);
                                    break
                                }
                        if (c[0] in n) r = c[0];
                        else {
                            for (a in n) {
                                if (!c[0] || e.converters[a + " " + c[0]]) {
                                    r = a;
                                    break
                                }
                                i || (i = a)
                            }
                            r = r || i
                        }
                        if (r) return r !== c[0] && c.unshift(r), n[r]
                    }(f, g, i)), y = function(e, t, n, o) {
                        var a, r, i, s, c, d = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (i in e.converters) d[i.toLowerCase()] = e.converters[i];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift())
                                if ("*" === r) r = c;
                                else if ("*" !== c && c !== r) {
                            if (!(i = d[c + " " + r] || d["* " + r]))
                                for (a in d)
                                    if ((s = a.split(" "))[1] === r && (i = d[c + " " + s[0]] || d["* " + s[0]])) {
                                        !0 === i ? i = d[a] : !0 !== d[a] && (r = s[0], u.unshift(s[1]));
                                        break
                                    }
                            if (!0 !== i)
                                if (i && e.throws) t = i(t);
                                else try {
                                    t = i(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: i ? e : "No conversion from " + c + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, y, g, d), d ? (f.ifModified && ((A = g.getResponseHeader("Last-Modified")) && (v.lastModified[a] = A), (A = g.getResponseHeader("etag")) && (v.etag[a] = A)), 204 === e || "HEAD" === f.type ? z = "nocontent" : 304 === e ? z = "notmodified" : (z = y.state, M = y.data, d = !(p = y.error))) : (p = z, !e && z || (z = "error", e < 0 && (e = 0))), g.status = e, g.statusText = (t || z) + "", d ? h.resolveWith(_, [M, z, g]) : h.rejectWith(_, [g, z, p]), g.statusCode(L), L = void 0, l && m.trigger(d ? "ajaxSuccess" : "ajaxError", [g, f, d ? M : p]), b.fireWith(_, [g, z]), l && (m.trigger("ajaxComplete", [g, f]), --v.active || v.event.trigger("ajaxStop")))
                }
                return g
            },
            getJSON: function(e, t, n) {
                return v.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return v.get(e, void 0, t, "script")
            }
        }), v.each(["get", "post"], function(e, t) {
            v[t] = function(e, n, o, a) {
                return b(n) && (a = a || o, o = n, n = void 0), v.ajax(v.extend({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: o
                }, v.isPlainObject(e) && e))
            }
        }), v._evalUrl = function(e) {
            return v.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, v.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (b(e) && (e = e.call(this[0])), t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return b(e) ? this.each(function(t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = b(e);
                return this.each(function(n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    v(this).replaceWith(this.childNodes)
                }), this
            }
        }), v.expr.pseudos.hidden = function(e) {
            return !v.expr.pseudos.visible(e)
        }, v.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, v.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Ht = {
                0: 200,
                1223: 204
            },
            Pt = v.ajaxSettings.xhr();
        h.cors = !!Pt && "withCredentials" in Pt, h.ajax = Pt = !!Pt, v.ajaxTransport(function(e) {
            var t, o;
            if (h.cors || Pt && !e.crossDomain) return {
                send: function(a, r) {
                    var i, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    for (i in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) s.setRequestHeader(i, a[i]);
                    t = function(e) {
                        return function() {
                            t && (t = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), o = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && o()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), v.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), v.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return v.globalEval(e), e
                }
            }
        }), v.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), v.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain) return {
                send: function(o, a) {
                    t = v("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                    }), i.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Rt = [],
            It = /(=)\?(?=&|$)|\?\?/;
        v.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Rt.pop() || v.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), v.ajaxPrefilter("json jsonp", function(e, t, o) {
            var a, r, i, s = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return a = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(It, "$1" + a) : !1 !== e.jsonp && (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
                return i || v.error(a + " was not called"), i[0]
            }, e.dataTypes[0] = "json", r = n[a], n[a] = function() {
                i = arguments
            }, o.always(function() {
                void 0 === r ? v(n).removeProp(a) : n[a] = r, e[a] && (e.jsonpCallback = t.jsonpCallback, Rt.push(a)), i && b(r) && r(i[0]), i = r = void 0
            }), "script"
        }), h.createHTMLDocument = function() {
            var e = i.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), v.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = !n && [], (a = S.exec(e)) ? [t.createElement(a[1])] : (a = Le([e], t, r), r && r.length && v(r).remove(), v.merge([], a.childNodes)));
            var o, a, r
        }, v.fn.load = function(e, t, n) {
            var o, a, r, i = this,
                s = e.indexOf(" ");
            return s > -1 && (o = ft(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), i.length > 0 && v.ajax({
                url: e,
                type: a || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, i.html(o ? v("<div>").append(v.parseHTML(e)).find(o) : e)
            }).always(n && function(e, t) {
                i.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            v.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), v.expr.pseudos.animated = function(e) {
            return v.grep(v.timers, function(t) {
                return e === t.elem
            }).length
        }, v.offset = {
            setOffset: function(e, t, n) {
                var o, a, r, i, s, c, d = v.css(e, "position"),
                    u = v(e),
                    l = {};
                "static" === d && (e.style.position = "relative"), s = u.offset(), r = v.css(e, "top"), c = v.css(e, "left"), ("absolute" === d || "fixed" === d) && (r + c).indexOf("auto") > -1 ? (i = (o = u.position()).top, a = o.left) : (i = parseFloat(r) || 0, a = parseFloat(c) || 0), b(t) && (t = t.call(e, n, v.extend({}, s))), null != t.top && (l.top = t.top - s.top + i), null != t.left && (l.left = t.left - s.left + a), "using" in t ? t.using.call(e, l) : u.css(l)
            }
        }, v.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    v.offset.setOffset(this, e, t)
                });
                var t, n, o = this[0];
                return o ? o.getClientRects().length ? (t = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, o = this[0],
                        a = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === v.css(o, "position")) t = o.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === v.css(e, "position");) e = e.parentNode;
                        e && e !== o && 1 === e.nodeType && ((a = v(e).offset()).top += v.css(e, "borderTopWidth", !0), a.left += v.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - a.top - v.css(o, "marginTop", !0),
                        left: t.left - a.left - v.css(o, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
                    return e || ye
                })
            }
        }), v.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            v.fn[e] = function(o) {
                return F(this, function(e, o, a) {
                    var r;
                    if (L(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === a) return r ? r[t] : e[o];
                    r ? r.scrollTo(n ? r.pageXOffset : a, n ? a : r.pageYOffset) : e[o] = a
                }, e, o, arguments.length)
            }
        }), v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = Re(h.pixelPosition, function(e, n) {
                if (n) return n = Pe(e, t), je.test(n) ? v(e).position()[t] + "px" : n
            })
        }), v.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            v.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, o) {
                v.fn[o] = function(a, r) {
                    var i = arguments.length && (n || "boolean" != typeof a),
                        s = n || (!0 === a || !0 === r ? "margin" : "border");
                    return F(this, function(t, n, a) {
                        var r;
                        return L(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? v.css(t, n, s) : v.style(t, n, a, s)
                    }, t, i ? a : void 0, i)
                }
            })
        }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            v.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), v.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, o) {
                return this.on(t, e, n, o)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), v.proxy = function(e, t) {
            var n, o, a;
            if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return o = c.call(arguments, 2), (a = function() {
                return e.apply(t || this, o.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || v.guid++, a
        }, v.holdReady = function(e) {
            e ? v.readyWait++ : v.ready(!0)
        }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = D, v.isFunction = b, v.isWindow = L, v.camelCase = G, v.type = z, v.now = Date.now, v.isNumeric = function(e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (o = function() {
            return v
        }.apply(t, [])) || (e.exports = o);
        var Ft = n.jQuery,
            Ut = n.$;
        return v.noConflict = function(e) {
            return n.$ === v && (n.$ = Ut), e && n.jQuery === v && (n.jQuery = Ft), v
        }, a || (n.jQuery = n.$ = v), v
    })
}, function(e, t) {
    var n = Math.ceil,
        o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    var o = n(11),
        a = n(1).document,
        r = o(a) && o(a.createElement);
    e.exports = function(e) {
        return r ? a.createElement(e) : {}
    }
}, function(e, t, n) {
    var o = n(66),
        a = n(22);
    e.exports = function(e) {
        return o(a(e))
    }
}, function(e, t, n) {
    var o = n(37)("keys"),
        a = n(38);
    e.exports = function(e) {
        return o[e] || (o[e] = a(e))
    }
}, function(e, t, n) {
    var o = n(10).f,
        a = n(17),
        r = n(2)("toStringTag");
    e.exports = function(e, t, n) {
        e && !a(e = n ? e : e.prototype, r) && o(e, r, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    "use strict";
    var o = n(16);
    e.exports.f = function(e) {
        return new function(e) {
            var t, n;
            this.promise = new e(function(e, o) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = o
            }), this.resolve = o(t), this.reject = o(n)
        }(e)
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = t.hide = t.show = void 0;
        var o = n(94),
            a = {
                body: e("body"),
                modal: e("[data-modal]"),
                modalShow: "[data-modal-show]",
                modalHide: "[data-modal-hide]",
                overlay: "[data-overlay]",
                modalForm: "[data-modal-form]",
                modalFormField: "[data-modal-form-field]"
            },
            r = t.show = function(t) {
                (0, o.show)(), e(a.body).attr("data-active-modal", t);
                var n = e('[data-modal="' + t + '"]'),
                    r = n.hasClass("is-transition-css");
                return n.length && n[0].hasAttribute("overlay-noclick") && e(a.overlay).addClass("is-no-click"), r ? n.addClass("is-active") : n.fadeIn(300)
            },
            i = t.hide = function() {
                (0, o.hide)();
                var t = e(a.body).attr("data-active-modal") || !1;
                if (t) {
                    var n = e('[data-modal="' + t + '"]'),
                        r = n.hasClass("is-transition-css");
                    return e(a.body).removeAttr("data-active-modal"), r ? n.removeClass("is-active") : n.fadeOut(300)
                }
            };
        t.init = function() {
            e(document).on("click", a.modalShow, function(t) {
                var n = t.currentTarget;
                event.preventDefault(), r(e(n).attr("data-modal-show"))
            }), e(document).on("click", a.modalHide, function(e) {
                e.preventDefault(), i()
            }), e(document).on("focus", a.modalFormField, function(t) {
                var n = t.currentTarget;
                e(n).closest(a.modal).animate({
                    scrollTop: e(n).offset().top
                }, 300)
            }), console.log("[BVA] Component Loaded: Modal")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(70));
    t.default = function(e, t, n) {
        return t in e ? (0, o.default)(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var o = n(21),
        a = Math.min;
    e.exports = function(e) {
        return e > 0 ? a(o(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setMaxProducts = t.init = t.removeEmptyPacks = t.updateCartUI = t.cartContentFadeOut = t.getCartContents = void 0;
        var o = u(n(30)),
            a = u(n(14)),
            r = u(n(15)),
            i = u(n(53)),
            s = n(55),
            c = n(52),
            d = n(8);

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = 0,
            M = {
                "Travel Kit": 3
            },
            p = "[cart-contents]",
            f = "[cart-upsells]",
            _ = "[data-inline-cart] [cart-contents]",
            m = function() {
                return e("body").hasClass("template__cart")
            },
            h = function() {
                var e = (0, r.default)(a.default.mark(function e() {
                    var t;
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = "//" + window.location.host + "/cart?view=" + (m() ? "contents" : "inline-cart-contents"), e.next = 3, fetch(t, {
                                    credentials: "same-origin",
                                    cache: "no-store"
                                }).then(function(e) {
                                    return e.text()
                                });
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            b = t.getCartContents = function() {
                var t = (0, r.default)(a.default.mark(function t() {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, h().then(function(t) {
                                    if (m()) return e(p).html(t), t;
                                    var n = e("<div />").html(t);
                                    return e(p).html(n.find("[data-inline-cart-main]").html()), e(f).html(n.find("[data-inline-cart-upsell]").html()), L(), t
                                });
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            L = function() {
                e(_).fadeTo(200, 1), e(f).fadeTo(200, 1)
            },
            y = (t.cartContentFadeOut = function() {
                e(_).fadeTo(200, 0), e(f).fadeTo(200, 0)
            }, t.updateCartUI = function() {
                var t = (0, r.default)(a.default.mark(function t(n) {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, b().then(function(t) {
                                    (0, s.update)(), e("[cart-container]").removeClass("is-loading");
                                    var o = new CustomEvent("cart.ui.updated");
                                    return document.dispatchEvent(o), n
                                });
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()),
            A = function() {
                --l <= 0 && window.location.reload()
            },
            z = (t.removeEmptyPacks = function(e) {
                var t = e.items.reduce(function(e, t) {
                    if (t.product_title.includes("Pack") || t.handle.includes("pack") || t.handle.includes("set")) {
                        var n = t.properties,
                            o = ((void 0 === n ? {} : n) || {}).pack_id;
                        void 0 !== o && o || (id = t.key)
                    }
                    return e
                }, 0);
                if (t) return (0, o.default)({}, t, 0)
            }, t.init = function() {
                var t;
                ! function() {
                    var e = (0, d.consumeSessionStorage)("removedByPackUpsell");
                    e && JSON.parse(e).forEach(function(e) {
                        var t = document.querySelector('[line-item-id="' + e + '"]');
                        t && (t.style.display = "none")
                    })
                }(),
                function() {
                    var e = i.default.get("bva-cart-coupon-code") || !1;
                    e && (window.chCouponCode = e)
                }(), (t = e.get("/cart.js")).done(function(e) {
                    var t = JSON.parse(e),
                        n = t.items.reduce(function(e, n) {
                            if (null != n.properties && n.properties.hasOwnProperty("pack_id")) {
                                var o = n.properties.pack_id,
                                    a = parseInt(n.properties.pack_count);
                                t.items.reduce(function(e, t) {
                                    return null != t.properties && t.properties.hasOwnProperty("pack_id") && t.properties.pack_id === o ? e + 1 : e
                                }, 0) < a && (0 === e.length || 0 === e.filter(function(e) {
                                    return e === o
                                }).length) && e.push(o)
                            }
                            return e
                        }, []);
                    (l = n.length) < 1 ? y() : n.forEach(function(e) {
                        (0, c.cartRemovePack)(e).then(A).catch(console.error)
                    })
                }), t.fail(function() {
                    y()
                }), z()
            }, t.setMaxProducts = function() {
                var e = (0, r.default)(a.default.mark(function e() {
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                shop.cart.items.forEach(function(e) {
                                    var t = M[e.vendor] || !1,
                                        n = null !== e.properties && e.properties.hasOwnProperty("pack_id") && 0 === e.price;
                                    if (t && n) {
                                        var o = e.quantity,
                                            a = e.properties.pack_id;
                                        if (o > t) return (0, c.cartUpdatePack)(a, t).then(y).catch(console.error)
                                    }
                                });
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), function() {
                e(document).on("click touchstart", "[load-btn], .carthook_checkout", function(t) {
                    var n = e(t.currentTarget);
                    n.addClass("is-loading"), window.addEventListener("beforeunload", function() {
                        n.removeClass("is-loading").addClass("is-success")
                    })
                }), e(document).on("change", "[gift-order-input]", function(t) {
                    var n = e(t.currentTarget),
                        o = n.is(":checked") ? n.val() : null;
                    e.post("/cart/update.js", {
                        note: o
                    }).then(function(e) {
                        return JSON.parse(e)
                    }).then(function(t) {
                        e("[data-carthook-note]").val(t.note), window.shop.cart = t
                    })
                })
            })
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.reslickOn = t.sliderIsSlicked = t.initSlider = t.getSlider = t.slickFilter = t.sliders = void 0;
        var o = i(n(14)),
            a = i(n(15));
        n(92);
        var r = n(8);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = {
                rows: 0,
                dots: !0,
                arrows: !1,
                mobileFirst: !0,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }]
            },
            c = {
                dots: !0,
                dotsClass: "slick-dots slick-dots--big-blue",
                arrows: !0,
                prevArrow: e(".js-slick-reviews-prev"),
                nextArrow: e(".js-slick-reviews-next"),
                centerMode: !1,
                mobileFirst: !0,
                variableWidth: !0,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        centerMode: !1,
                        dots: !1
                    }
                }]
            },
            d = {
                dots: !0,
                dotsClass: "slick-dots slick-dots--big-blue",
                arrows: !0,
                prevArrow: e(".js-slick-invest-prev"),
                nextArrow: e(".js-slick-invest-next"),
                mobileFirst: !0,
                responsive: [{
                    breakpoint: 992,
                    settings: "unslick"
                }]
            },
            u = {
                variableWidth: !0,
                arrows: !1,
                mobileFirst: !0,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: !0,
                        prevArrow: e(".js-instagram-slick-prev"),
                        nextArrow: e(".js-instagram-slick-next"),
                        centerMode: !0,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }]
            },
            l = {
                rows: 0,
                dots: !0,
                arrows: !0,
                dotsClass: "slick-dots--image",
                customPaging: function(t, n) {
                    var o = e(t.$slides[n]).data("thumb"),
                        a = e(t.$slides[n]).data("thumb-type");
                    return '<button type="button" tole="tab" aria-label="' + n + " of " + t.$slides.length + '" tabIndex="0" data-type="' + a + '"><picture><img src="' + o + '" /></picture></button>'
                },
                prevArrow: '<button class="slick-circle-arrow slick-circle-arrow--prev text-primary"><svg width="15px" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg></button>',
                nextArrow: '<button class="slick-circle-arrow slick-circle-arrow--next text-primary"><svg width="15px" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg></button>'
            },
            M = t.sliders = {
                "homepage-reviews": {
                    selector: "[data-reviews-slider]",
                    options: c
                },
                testimonials: {
                    selector: "[testimonials-slider]",
                    options: {
                        rows: 0,
                        dots: !1,
                        arrows: !1,
                        mobileFirst: !0,
                        responsive: [{
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3
                            }
                        }]
                    }
                },
                "cart-upsells": {
                    selector: '[slider="cart-upsells"]',
                    options: s
                },
                "homepage-best-sellers": {
                    selector: '[slider="best-sellers"]',
                    options: {
                        rows: 0,
                        dots: !0,
                        dotsClass: "slick-dots slick-dots--big-blue",
                        arrows: !1,
                        mobileFirst: !0,
                        responsive: [{
                            breakpoint: 650,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 991,
                            settings: "unslick"
                        }]
                    }
                },
                "hompage-invest": {
                    selector: '[slider="invest-slider"]',
                    options: d
                },
                "homepage-instagram": {
                    selector: "[data-instagram-slider]",
                    options: u
                },
                "inline-cart-upsells": {
                    selector: '[slider="cart-upsells"]',
                    options: Object.assign({}, s, {
                        responsive: []
                    })
                },
                "shop-by": {
                    selector: "[data-shop-by-slider]",
                    options: {
                        rows: 0,
                        slidesToShow: 1,
                        dots: !1,
                        arrows: !1,
                        mobileFirst: !0,
                        responsive: [{
                            breakpoint: 639,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3
                            }
                        }, {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 4
                            }
                        }]
                    }
                },
                "cross-sell": {
                    selector: "[data-cross-sell-slider]",
                    options: {
                        rows: 0,
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        mobileFirst: !0,
                        infinite: !1,
                        responsive: [{
                            breakpoint: 699,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 991,
                            settings: "unslick"
                        }]
                    }
                },
                "product-ingredients": {
                    selector: "[data-ingredients-slider]",
                    options: l
                },
                "prop-values": {
                    selector: "[data-product-value-list]",
                    options: {
                        rows: 0,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: !0,
                        arrows: !0,
                        mobileFirst: !0,
                        infinite: !0,
                        responsive: [{
                            breakpoint: 699,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }, {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        }, {
                            breakpoint: 1023,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }]
                    }
                }
            },
            p = (t.slickFilter = function() {
                var e = (0, a.default)(o.default.mark(function e(t, n) {
                    var a;
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, p(t);
                            case 2:
                                (a = e.sent).slick("slickUnfilter"), a.slick("slickFilter", n);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), t.getSlider = function() {
                var e = (0, a.default)(o.default.mark(function e(t) {
                    var n;
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((n = M[t]).slider) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4, f(t);
                            case 4:
                                e.t0 = e.sent, e.next = 8;
                                break;
                            case 7:
                                e.t0 = n.slider;
                            case 8:
                                return e.abrupt("return", e.t0);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()),
            f = t.initSlider = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = M[t],
                    a = o.selector,
                    r = o.options,
                    i = Object.assign({}, r, n),
                    s = e(a).slick(i);
                return o.slider = s, o.slider
            },
            _ = t.sliderIsSlicked = function(e) {
                return document.querySelector(e).classList.contains("slick-initialized")
            };
        t.reslickOn = function(e) {
            var t = (0, r.debounce)(function() {
                ! function(e) {
                    (0, r.isMobileDevice)() && !_(M[e].selector) && f(e)
                }(e)
            }, 300);
            window.addEventListener("resize", t)
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    var o = n(23),
        a = n(9),
        r = n(60),
        i = n(6),
        s = n(12),
        c = n(61),
        d = n(27),
        u = n(69),
        l = n(2)("iterator"),
        M = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    e.exports = function(e, t, n, f, _, m, h) {
        c(n, t, f);
        var b, L, y, A = function(e) {
                if (!M && e in T) return T[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            z = t + " Iterator",
            v = "values" == _,
            g = !1,
            T = e.prototype,
            k = T[l] || T["@@iterator"] || _ && T[_],
            O = k || A(_),
            w = _ ? v ? A("entries") : O : void 0,
            Y = "Array" == t && T.entries || k;
        if (Y && (y = u(Y.call(new e))) !== Object.prototype && y.next && (d(y, z, !0), o || "function" == typeof y[l] || i(y, l, p)), v && k && "values" !== k.name && (g = !0, O = function() {
                return k.call(this)
            }), o && !h || !M && !g && T[l] || i(T, l, O), s[t] = O, s[z] = p, _)
            if (b = {
                    values: v ? O : A("values"),
                    keys: m ? O : A("keys"),
                    entries: w
                }, h)
                for (L in b) L in T || r(T, L, b[L]);
            else a(a.P + a.F * (M || g), t, b);
        return b
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    var o = n(3),
        a = n(1),
        r = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: o.version,
        mode: n(23) ? "pure" : "global",
        copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    var n = 0,
        o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var o = n(1).document;
    e.exports = o && o.documentElement
}, function(e, t, n) {
    var o = n(18),
        a = n(2)("toStringTag"),
        r = "Arguments" == o(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, n, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), a)) ? n : r ? o(t) : "Object" == (i = o(t)) && "function" == typeof t.callee ? "Arguments" : i
    }
}, function(e, t, n) {
    var o = n(5),
        a = n(16),
        r = n(2)("species");
    e.exports = function(e, t) {
        var n, i = o(e).constructor;
        return void 0 === i || null == (n = o(i)[r]) ? t : a(n)
    }
}, function(e, t, n) {
    var o, a, r, i = n(13),
        s = n(85),
        c = n(40),
        d = n(24),
        u = n(1),
        l = u.process,
        M = u.setImmediate,
        p = u.clearImmediate,
        f = u.MessageChannel,
        _ = u.Dispatch,
        m = 0,
        h = {},
        b = function() {
            var e = +this;
            if (h.hasOwnProperty(e)) {
                var t = h[e];
                delete h[e], t()
            }
        },
        L = function(e) {
            b.call(e.data)
        };
    M && p || (M = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return h[++m] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }, o(m), m
    }, p = function(e) {
        delete h[e]
    }, "process" == n(18)(l) ? o = function(e) {
        l.nextTick(i(b, e, 1))
    } : _ && _.now ? o = function(e) {
        _.now(i(b, e, 1))
    } : f ? (r = (a = new f).port2, a.port1.onmessage = L, o = i(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", L, !1)) : o = "onreadystatechange" in d("script") ? function(e) {
        c.appendChild(d("script")).onreadystatechange = function() {
            c.removeChild(this), b.call(e)
        }
    } : function(e) {
        setTimeout(i(b, e, 1), 0)
    }), e.exports = {
        set: M,
        clear: p
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var o = n(5),
        a = n(11),
        r = n(28);
    e.exports = function(e, t) {
        if (o(e), a(t) && t.constructor === e) return t;
        var n = r.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t, n) {
    "use strict";
    var o = n(57)(!0);
    n(35)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = o(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var o = n(22);
    e.exports = function(e) {
        return Object(o(e))
    }
}, function(e, t, n) {
    var o = n(5);
    e.exports = function(e, t, n, a) {
        try {
            return a ? t(o(n)[0], n[1]) : t(n)
        } catch (t) {
            var r = e.return;
            throw void 0 !== r && o(r.call(e)), t
        }
    }
}, function(e, t, n) {
    var o = n(12),
        a = n(2)("iterator"),
        r = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || r[a] === e)
    }
}, function(e, t, n) {
    var o = n(41),
        a = n(2)("iterator"),
        r = n(12);
    e.exports = n(3).getIteratorMethod = function(e) {
        if (null != e) return e[a] || e["@@iterator"] || r[o(e)]
    }
}, function(e, t, n) {
    var o = n(2)("iterator"),
        a = !1;
    try {
        var r = [7][o]();
        r.return = function() {
            a = !0
        }, Array.from(r, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !a) return !1;
        var n = !1;
        try {
            var r = [7],
                i = r[o]();
            i.next = function() {
                return {
                    done: n = !0
                }
            }, r[o] = function() {
                return i
            }, e(r)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = t.updateCart = t.removeLoneMiniDeodorant = t.cartUpdatePack = t.cartRemovePack = t.cartRemove = t.cartChange = t.cartUpdate = t.cartAddViaPermalink = t.cartAddMultiple = t.cartAdd = void 0;
        var o = f(n(98)),
            a = f(n(30)),
            r = f(n(14)),
            i = f(n(15)),
            s = f(n(53)),
            c = n(54),
            d = n(93),
            u = (n(29), n(8)),
            l = n(33),
            M = n(107),
            p = n(108);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = "body",
            m = "[add-to-cart]",
            h = "[add-pack-to-cart]",
            b = '[name^="properties"]',
            L = "[cart-item-count]",
            y = function() {
                return "product" == window.shop.template
            },
            A = t.cartAdd = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Variant ID");
                            case 2:
                                return t = {
                                    id: n,
                                    quantity: o,
                                    properties: a
                                }, e.next = 5, fetch("/cart/add.js", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return void 0 === e.token ? g(i) : (i || w(e), e)
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            z = t.cartAddMultiple = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Add Items");
                            case 2:
                                return e.next = 4, fetch("/cart/add.js", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        items: t
                                    })
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return void 0 === e.token ? g(n) : (n || w(e), e)
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            v = (t.cartAddViaPermalink = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n && n.length) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Pack Variant IDs");
                            case 2:
                                return t = S(n, o, a), e.abrupt("return", fetch(t, {
                                    method: "GET",
                                    credentials: "same-origin",
                                    headers: {
                                        "content-Type": "application/json"
                                    }
                                }).then(function() {
                                    return g()
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), t.cartUpdate = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Cart Update Map");
                            case 2:
                                return e.next = 4, fetch("/cart/update.js", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        updates: t
                                    })
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return void 0 === e.token ? g(n) : (n || w(e), e)
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()),
            g = (t.cartChange = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Line Item Key/ID For Change");
                            case 2:
                                return "number" == typeof n && (n = n.toString()), t = {}, n.length > 2 ? t.id = n : t.line = n, o && (t.quantity = o), a && (t.properties = a), e.next = 9, fetch("/cart/change.js", {
                                    method: "POST",
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return void 0 === e.token ? g(i) : (i || w(e), e)
                                });
                            case 9:
                                return e.abrupt("return", e.sent);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), t.cartRemove = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, v((0, a.default)({}, t, 0), n);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/cart.js", {
                                    method: "GET",
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return t || w(e), e
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()),
            T = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t, n, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a.length) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Pack Variant IDs");
                            case 2:
                                if (void 0 !== s) {
                                    e.next = 4;
                                    break
                                }
                                throw new Error("[BVA] Missing Pack Properties");
                            case 4:
                                return t = [].concat((0, o.default)(new Set(a))), n = t.map(function(e) {
                                    var t = a.reduce(function(t, n) {
                                        return n === e && t++, t
                                    }, 0);
                                    return {
                                        id: e,
                                        quantity: t * i,
                                        properties: s
                                    }
                                }), e.abrupt("return", z(n));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            k = (t.cartRemovePack = function() {
                var e = (0, i.default)(r.default.mark(function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("[BVA] Missing Pack ID For Remove");
                            case 2:
                                return t = shop.cart.items.reduce(function(e, t, o) {
                                    return null != t.properties && t.properties.hasOwnProperty("pack_id") && t.properties.pack_id == n && (e["" + t.key] = 0), e
                                }, {}), e.next = 5, v(t);
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), function(e) {
                return shop.cart.items.filter(function(t, n) {
                    if (null != t.properties && t.properties.hasOwnProperty("pack_id") && t.properties.pack_id == e) return t
                })
            }),
            O = (t.cartUpdatePack = function() {
                var e = (0, i.default)(r.default.mark(function e(t, n) {
                    var o, a;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((o = k(t)).length) {
                                    e.next = 3;
                                    break
                                }
                                throw new Error("[BVA] No Pack Items Found with PackID: " + t);
                            case 3:
                                return a = o.reduce(function(e, t, a) {
                                    var r = t.product_type.toLowerCase(),
                                        i = t.vendor.toLowerCase(),
                                        s = 0 === t.price,
                                        c = -1 !== r.indexOf("byp") || -1 !== i.indexOf("byp"),
                                        d = -1 !== r.indexOf("bar soap single") || -1 !== r.indexOf("bar soap - set"),
                                        u = n;
                                    if (!s && c) {
                                        var l = t.properties.pack_count;
                                        2 == l ? u *= 3 : 3 == l && o.every(function(e) {
                                            return t.id === e.id || t.quantity > e.quantity
                                        }) && (u *= 2)
                                    } else d && (s || c || (u = 2 * n));
                                    return e[t.key] = u, e
                                }, {}), e.abrupt("return", v(a));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), function(t, n) {
                var o = n || {},
                    a = "autodeliver" == t.find('[name="purchase_type"]:checked').val();
                return t.find(b).length && t.find(b).each(function() {
                    var t = e(this).is(":radio"),
                        n = e(this).is(":checked"),
                        r = e(this).hasClass("is-recharge-input"),
                        i = e(this).attr("name").replace("properties[", "").replace("]", ""),
                        s = e(this).val();
                    t && !n || (!r || r && a) && (o[i] = s)
                }), o.hasOwnProperty("subscription_id") && (o.subscription_id && "false" !== o.subscription_id || (delete o.subscription_id, delete o.shipping_interval_frequency, delete o.shipping_interval_unit_type)), o
            }),
            w = function(e) {
                window.shop.cart = e;
                var t = new CustomEvent("cart.updated", {
                    detail: e
                });
                document.dispatchEvent(t)
            },
            Y = function(t, n, o) {
                if (n.length) {
                    var a = m + "," + h + ",[swap-original-product]";
                    n.find(a).removeClass("is-loading").addClass("is-success"), setTimeout(function() {
                        n.find(a).removeClass("is-success").trigger("blur")
                    }, 3e3)
                }
                if (function(e, t) {
                        var n = y() && t.find('[name="purchase_type"]:checked').length > 0 ? t.find('[name="purchase_type"]:checked').val() : "onetime",
                            o = {
                                event: "Product ATC",
                                purchaseType: n,
                                purchaseLength: "autodeliver" == n ? t.find('[name="properties[shipping_interval_frequency]"]').val() : "onetime",
                                purchaseVariant: t.find(m).attr("data-variant-id") || t.find(h).attr("data-variant-ids")
                            };
                        dataLayer.push(o)
                    }(0, n), y() && (0, d.klaviyoTrackItemAdd)(), window.addFinished = !0, o) {
                    var r = new Event("addFinished");
                    document.dispatchEvent(r)
                }
                o || (e(document).trigger("inlinecart.open"), e(_).hasClass("template__cart") && (0, l.updateCartUI)(t))
            },
            D = function(e, t) {
                if (t.length) {
                    var n = m + "," + h + ",[swap-original-product]";
                    t.find(n).removeClass("is-loading").addClass("is-error"), setTimeout(function() {
                        t.find(n).removeClass("is-error").trigger("blur")
                    }, 3e3)
                }
            },
            S = function(e, t, n) {
                var o = e.reduce(function(e, t, n) {
                        return e + (0 === n ? "" : "&") + "id[]=" + t
                    }, ""),
                    a = Object.keys(n).reduce(function(e, t) {
                        return e + "&properties[" + t + "]=" + n[t]
                    }, "");
                return encodeURI("/cart/add?" + o + a + "&quantity=" + t)
            },
            q = function() {
                return Math.floor(1e5 * Math.random()) + 0
            },
            N = function(e) {
                return e.hasOwnProperty("subscription_id") && !1 !== e.subscription_id
            },
            W = function() {
                return e(_).hasClass("template__product")
            },
            x = t.removeLoneMiniDeodorant = function(e) {
                var t = e.items,
                    n = void 0 !== t && t;
                if (!n) return !1;
                var o = !1,
                    a = !1,
                    r = n.reduce(function(e, t) {
                        var n = t.vendor.toLowerCase();
                        return "mini" === n || -1 !== n.indexOf("travel") ? (o = !0, e[t.key] = 0) : a = !0, e
                    }, {});
                return o && !a ? r : void 0
            },
            X = function(e) {
                return e.items.reduce(function(e, t) {
                    return Object.keys(window.shop.giftProducts).includes(t.product_id.toString()) || (e += t.line_price), e
                }, 0)
            },
            C = function(e) {
                var t = [];
                return e.items.reduce(function(e, n) {
                    var o = n.properties,
                        a = void 0 !== o && o,
                        r = (a || {}).pack_id;
                    return a && r ? -1 === t.indexOf(r) && 0 === n.price && (t.push(r), e += n.quantity) : e += n.quantity, e
                }, 0)
            },
            B = t.updateCart = function() {
                var t = (0, i.default)(r.default.mark(function t(n) {
                    var o, a, i, d, M, p, f, _, m;
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (void 0 === (o = n.items) || !o) {
                                    t.next = 17;
                                    break
                                }
                                return shop.cart = n, a = s.default.getJSON("bva-cart-coupon-code") || !1, i = s.default.getJSON("bva-cart-coupon-code-data") || !1, d = X(n), e(L).attr("cart-item-count", C(n)), e(L).attr("cart-item-count-true", n.item_count), e("[cart-price]").html((0, u.formatMoney)(d)), t.next = 11, (0, c.updateDiscountUI)(d, i, a);
                            case 11:
                                M = t.sent, p = x(n), f = (0, c.checkCartGifts)(n), _ = (0, l.removeEmptyPacks)(n), m = Object.assign({}, M, p, f, _), Object.keys(m).length && v(m).catch(console.error);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            j = function(t, n) {
                var o = !1,
                    a = t.attr("data-upsell-subscription") || !1,
                    r = t.attr("data-upsell-non-subscription") || !1;
                return W() && N(n) && a ? o = a : W() && !N(n) && r ? o = r : W() && !N(n) && function() {
                    var t = e("main " + b + '.is-recharge-input[name="properties[subscription_id]"]');
                    return !t.closest("[subscription-option]").hasClass("is-hidden") && t.length > 0 && !1 !== JSON.parse(t.val())
                }() && (o = window.shop.product.handle), o
            };
        t.init = function() {
            (function() {
                (0, M.bindUIActions)(), e(document).on("click", m, function(t) {
                    window.addFinished = !1, t.preventDefault();
                    var n = e(t.currentTarget),
                        o = n.closest("form"),
                        a = n.attr("data-variant-id") || !1,
                        r = n.attr("data-qty") || 1;
                    if (n.addClass("is-loading"), a) {
                        var i = O(o, i),
                            s = !n.hasClass("skip-upsell") && j(n, i);
                        A(a, r, i).then(function(e) {
                            return Y(e, o, s)
                        }).catch(function(e) {
                            return D(0, o)
                        }), s && (s === window.shop.product.handle ? (0, p.setupUpsellModalContent)(s) : (0, M.setupUpsellModalContent)(s))
                    } else alert("No variant selected."), D(0, o)
                }), e(document).on("click", h, function(t) {
                    window.addFinished = !1, t.preventDefault();
                    var n = e(t.currentTarget),
                        a = n.closest("form"),
                        r = parseInt(n.attr("data-qty")) || 1,
                        i = n.attr("data-variant-ids") || !1;
                    if (n.addClass("is-loading"), i) {
                        var s = i.split(","),
                            c = parseInt(n.attr("data-item-count"));
                        if (s.length == c) {
                            var d = [].concat((0, o.default)(new Set(s))).length,
                                u = {
                                    pack: n.attr("pack-title") || !1,
                                    pack_id: q(),
                                    pack_count: d
                                };
                            u = O(a, u);
                            var l = parseInt(n.attr("data-max-purchase")) || !1,
                                f = n.attr("data-max-purchase-type") || !1;
                            if (f && shop.cart.items.reduce(function(e, t) {
                                    return t.product_type == f && (e += t.quantity), e
                                }, 0) + r > l) {
                                n.removeClass("is-loading");
                                var _ = n.text();
                                return n.text("Max " + l), void setTimeout(function() {
                                    D(0, a), setTimeout(function() {
                                        n.text(_)
                                    }, 200)
                                }, 1e3)
                            }
                            var m = !n.hasClass("skip-upsell") && j(n, u);
                            T(s, r, u).then(function(e) {
                                return Y(e, a, m)
                            }).catch(function(e) {
                                return D(0, a)
                            }), m && (m === window.shop.product.handle ? (0, p.setupUpsellModalContent)(m) : (0, M.setupUpsellModalContent)(m))
                        }
                    } else alert("No pack selected."), D(0, a)
                });
                var t = function t(n) {
                    document.removeEventListener("addFinished", t), n.preventDefault();
                    var a = e(n.target).closest("form"),
                        r = e("[pdp-atc]").attr("data-qty") || 1,
                        i = function(e, t) {
                            var n = {},
                                o = (e.properties || !1).pack_id || !1;
                            return o ? n = shop.cart.items.reduce(function(e, n) {
                                if (null !== n.properties) {
                                    var a = n.properties.packId,
                                        r = void 0 !== a && a;
                                    r && r === o && (e[n.key] = n.quantity - parseInt(t, 10))
                                }
                                return e
                            }, {}) : n[e.key] = e.quantity - parseInt(t, 10), n
                        }(shop.cart.items[0], r),
                        s = function(e) {
                            var t = e.find("button"),
                                n = !1,
                                a = (t.attr("data-variant-id"), t.attr("data-variant-ids") || !1);
                            if (a) {
                                t.attr("data-variant-ids");
                                var r = t.attr("pack-title") || !1,
                                    i = parseInt(t.attr("data-item-count")),
                                    s = parseInt(t.attr("data-qty")) || 1;
                                if (t.addClass("is-loading"), a) {
                                    var c = a.split(",");
                                    if (c.length == i) {
                                        var d = [].concat((0, o.default)(new Set(c))).length,
                                            u = {
                                                pack: r,
                                                pack_id: q(),
                                                pack_count: d
                                            };
                                        u = O(e, u), n = function() {
                                            return T(c, s, u)
                                        }
                                    }
                                }
                            } else {
                                var l = t.attr("data-variant-id") || !1,
                                    M = parseInt(t.attr("data-qty")) || 1;
                                if (t.addClass("is-loading"), l) {
                                    var p = O(e, p);
                                    n = function() {
                                        return A(l, M, p)
                                    }
                                }
                            }
                            return n
                        }(a);
                    s && v(i).then(s).then(function(e) {
                        return Y(e, a)
                    }).catch(function(e) {
                        return D(0, a)
                    })
                };
                e(document).on("click", "[swap-original-product]", function(e) {
                    e.preventDefault(), window.addFinished ? t(e) : document.addEventListener("addFinished", t)
                }), document.addEventListener("cart.updated", function(e) {
                    var t = e.detail || !1;
                    t && B(t)
                })
            })(), g().then(B), console.log("[BVA] Component Loaded: AddToCart")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    var o, a, r;
    /*!
     * JavaScript Cookie v2.2.0
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    r = function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o]
            }
            return t
        }
        return function t(n) {
            function o(t, a, r) {
                var i;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof(r = e({
                                path: "/"
                            }, o.defaults, r)).expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), r.expires = s
                        }
                        r.expires = r.expires ? r.expires.toUTCString() : "";
                        try {
                            i = JSON.stringify(a), /^[\{\[]/.test(i) && (a = i)
                        } catch (e) {}
                        a = n.write ? n.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var d in r) r[d] && (c += "; " + d, !0 !== r[d] && (c += "=" + r[d]));
                        return document.cookie = t + "=" + a + c
                    }
                    t || (i = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, M = 0; M < u.length; M++) {
                        var p = u[M].split("="),
                            f = p.slice(1).join("=");
                        this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                        try {
                            var _ = p[0].replace(l, decodeURIComponent);
                            if (f = n.read ? n.read(f, _) : n(f, _) || f.replace(l, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (e) {}
                            if (t === _) {
                                i = f;
                                break
                            }
                            t || (i[_] = f)
                        } catch (e) {}
                    }
                    return i
                }
            }
            return o.set = o, o.get = function(e) {
                return o.call(o, e)
            }, o.getJSON = function() {
                return o.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, o.defaults = {}, o.remove = function(t, n) {
                o(t, "", e(n, {
                    expires: -1
                }))
            }, o.withConverter = t, o
        }(function() {})
    }, void 0 === (a = "function" == typeof(o = r) ? o.call(t, n, t, e) : o) || (e.exports = a), e.exports = r()
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = t.initAutoDiscountCode = t.captureTalkable = t.resetDiscount = t.resetDiscountUI = t.updateDiscountUI = t.checkCartGifts = t.updateGiftMeta = void 0;
        var o = l(n(30)),
            a = l(n(14)),
            r = l(n(15)),
            i = l(n(53)),
            s = n(52),
            c = n(8),
            d = (n(103), n(55)),
            u = n(33);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var M = {
                SPRING10: 3e3,
                SPRING15: 4500,
                SPRING20: 6e3
            },
            p = "body",
            f = "body.code-form-open",
            _ = "[cart-code-container]",
            m = "[cart-code-form]",
            h = "[cart-code-toggle]",
            b = "[cart-code-input]",
            L = "[cart-code-submit]",
            y = "[cart-code-remove]",
            A = '[cart-code-select="gift"]',
            z = "[free-gift-select]",
            v = "[cart-full-info]",
            g = "[line-item]",
            T = function(t) {
                e(L).removeClass("is-loading").addClass("is-error"), setTimeout(function() {
                    e(L).removeClass("is-error")
                }, 1300)
            },
            k = function(t) {
                e(p).removeClass("code-form-open"), e(L).removeClass("is-loading").addClass("is-success"), setTimeout(function() {
                    e(L).removeClass("is-success"), e(b).val(""), e(h).removeClass("is-hidden"), e(_).addClass("is-hidden").removeClass("is-active"), e(m).removeClass("is-active"), (0, u.updateCartUI)()
                }, 300)
            },
            O = function() {
                var t = (0, r.default)(a.default.mark(function t(n, o) {
                    var r, s, c;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = !!o && o.attr("cart-code-form"), s = i.default.getJSON("bva-cart-coupon-code-options") || {
                                        skip_errors: !1
                                    }, e(L, o).removeClass("is-loading").addClass("is-error"), s.skip_errors && e(v).html(n), c = 300, s.skip_errors) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 8, Y();
                            case 8:
                                setTimeout(function() {
                                    "gift" == r || 0 == shop.cart.item_count ? alert("You must have at least 1 item in cart to redeem a free gift.") : n ? alert(n) : alert("Code entered is not valid.")
                                }, 300), c = 1300;
                            case 10:
                                setTimeout(function() {
                                    e(L, o).removeClass("is-error")
                                }, c);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }(),
            w = t.updateGiftMeta = function(e) {
                var t = e.find("[data-item-image]"),
                    n = e.find("[data-item-title]"),
                    o = e.find("[data-dropdown-value].is-active"),
                    a = o.attr("data-image"),
                    r = o.attr("data-image2x"),
                    i = o.attr("data-image-alt"),
                    s = e.find(A).val();
                t.removeAttr("data-was-processed").attr("data-src", a).attr("data-srcset", r).attr("src", a).attr("alt", i), n.text(s), (0, d.update)()
            },
            Y = (t.checkCartGifts = function(t) {
                var n = void 0,
                    a = 0,
                    r = t.items.reduce(function(e, t, o) {
                        return Object.keys(window.shop.giftProducts).includes(t.product_id.toString()) && (e += t.quantity, t.id, n = t.key, a++), e
                    }, 0),
                    i = t.item_count - r;
                return i > 0 && r > 1 ? 1 == a ? (0, o.default)({}, n, 1) : (0, o.default)({}, n, 0) : 0 == i && r > 0 ? (Y(!0), (0, o.default)({}, n, 0)) : void(r > 0 || window.chCouponCode && "" != window.chCouponCode ? (e(m).removeClass("is-active"), e(_).addClass("is-hidden").removeClass("is-active")) : (e(m).removeClass("is-active"), e(_).removeClass("is-hidden is-active")))
            }, function() {
                var e = (0, r.default)(a.default.mark(function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i.default.remove("bva-cart-coupon-code"), i.default.remove("bva-cart-coupon-code-data"), i.default.remove("bva-cart-coupon-code-options"), window.chCouponCode = "", !(t = shop.cart.items.reduce(function(e, t) {
                                        return Object.keys(window.shop.giftProducts).includes(t.product_id.toString()) && (e = t.id), e
                                    }, 0))) {
                                    e.next = 11;
                                    break
                                }
                                if (n) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 9, (0, s.cartRemove)(t).then(u.updateCartUI).catch(console.error);
                            case 9:
                                return e.abrupt("return", e.sent);
                            case 10:
                                return e.abrupt("return", (0, o.default)({}, t, 0));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()),
            D = function(t) {
                if (e(f).length) {
                    if (e(m).has(t.target).length) return;
                    if (t.target.matches(y)) return e(p).toggleClass("code-form-open")
                }
                if (t.preventDefault(), e(m).toggleClass("is-active"), e(_).toggleClass("is-active"), e(m).hasClass("is-active")) {
                    var n = e("[data-inline-cart] [cart-main]");
                    n.animate({
                        scrollTop: n.find(m).position().top
                    }, 300)
                }
                e(f).length || e(b).trigger("focus").css("opacity", .95), setTimeout(function() {
                    e(b).css("opacity", 1), e(p).toggleClass("code-form-open")
                }, 300)
            },
            S = function() {
                var t = (0, r.default)(a.default.mark(function t(n) {
                    var o, r, i;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n.preventDefault(), o = e(n.currentTarget), r = e(b, o).val(), t.next = 5, x(r, o);
                            case 5:
                                i = t.sent, e(L, o).addClass("is-loading"), X(r, o, !i);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            q = function(e) {
                return Object.keys(M).indexOf(e)
            },
            N = (t.updateDiscountUI = function() {
                var t = (0, r.default)(a.default.mark(function t(n) {
                    var o, r, s, d, u, l, p, f, _, h, b, L, y, A, z, g, T = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        k = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = void 0, r = !1, !k) {
                                    t.next = 18;
                                    break
                                }
                                if (s = k.toString().toLowerCase(), d = window.n || {}, u = d.cs, r = (void 0 === u ? {} : u)[s] || !1, -1 === (l = q(k))) {
                                    t.next = 18;
                                    break
                                }
                                if ((p = Object.values(M).reduce(function(e, t, n) {
                                        return shop.cart.total_price >= t && (e = n), e
                                    }, 0)) === l) {
                                    t.next = 18;
                                    break
                                }
                                return f = Object.keys(M)[p], i.default.remove("bva-cart-coupon-code"), i.default.remove("bva-cart-coupon-code-data"), i.default.remove("bva-cart-coupon-code-options"), i.default.set("bva-cart-coupon-code", f), i.default.set("bva-cart-coupon-code-options", JSON.stringify({
                                    skip_errors: !0
                                }), {
                                    expires: 7
                                }), t.abrupt("return", E());
                            case 18:
                                if (!T) {
                                    t.next = 28;
                                    break
                                }
                                return t.next = 21, W(T, e(m), !r);
                            case 21:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 24;
                                    break
                                }
                                t.t0 = !1;
                            case 24:
                                t.t0 ? (T.entitled_product_ids.length ? (_ = T.entitled_product_ids.find(function(e) {
                                    return Object.keys(window.shop.giftProducts).includes(e.toString())
                                })) || ("percentage" == T.value_type ? o = shop.cart.items.reduce(function(e, t) {
                                    return T.entitled_product_ids.includes(t.product_id) && (e += t.line_price * (parseFloat(T.value) / 100)), e
                                }, 0) : "fixed_amount" == T.value_type && shop.cart.items.some(function(e) {
                                    return T.entitled_product_ids.includes(e.product_id)
                                }) && (o = 100 * parseInt(T.value, 10))) : o = "percentage" == T.value_type ? n * (parseFloat(T.value) / 100) : 100 * parseFloat(T.value), h = "" + (0, c.formatMoney)(n), _ ? o = "Free Gift" : (h = "" + (0, c.formatMoney)(n - Math.abs(o)), o = "-" + (0, c.formatMoney)(Math.abs(o))), b = i.default.get("bva-cart-coupon-code") || !1, L = b || T.title, y = '\n        <div class="cart-header__price-row price-row__coupon" cart-code-totals><span class="row-label">Coupon: ' + L + '</span><span class="row-value u-text-right">' + o + ' <span class="price-row__remove" cart-code-remove>[Remove]</span></span></div>\n        <hr cart-code-totals>\n        <div class="cart-header__price-row price-row__total" cart-code-totals><span class="row-label">Total</span><span class="row-value u-text-right">' + h + "</span></div>\n      ", e(v).html(y), e("[data-inline-cart]").addClass("has-discount")) : (A = i.default.get("bva-cart-coupon-code") || !1, z = i.default.getJSON("bva-cart-coupon-code-options") || {
                                    skip_errors: !1
                                }, A && !z.skip_errors ? (g = N(A, !1)) && shop.cart.item_count > 0 ? e(v).html(g) : e("[data-inline-cart]").removeClass("has-discount") : shop.cart.item_count < 1 && e("[data-inline-cart]").removeClass("has-discount")), t.next = 32;
                                break;
                            case 28:
                                if (e(m).removeClass("is-active"), k) {
                                    t.next = 32;
                                    break
                                }
                                return !0, t.abrupt("return", B(!0));
                            case 32:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = "";
                if (e.prerequisite_subtotal_range && shop.cart.original_total_price < 100 * parseFloat(e.prerequisite_subtotal_range.greater_than_or_equal_to)) {
                    var o = e.entitled_product_ids.length ? " for entitled items" : "";
                    n += "A minimum price of $" + parseInt(e.prerequisite_subtotal_range.greater_than_or_equal_to).toFixed(2) + o + " is required for this discount to be valid. "
                }
                return e.entitled_product_ids.length && !t && (shop.cart.items.some(function(t) {
                    return -1 !== e.entitled_product_ids.indexOf(t.product_id)
                }) || (n += "The discount requires a product that was not found in your cart. ")), null !== e.usage_limit && e.usage_count >= e.usage_limit && (n += "The discount has reached it's usage limit. "), (null !== e.starts_at && new Date(e.starts_at) > Date.now() || null !== e.ends_at && Date.now() > new Date(e.ends_at)) && (n += "The discount is unavailable at this date. "), n
            }),
            W = function() {
                var e = (0, r.default)(a.default.mark(function e(t, n) {
                    var o, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(o = N(t, r))) {
                                    e.next = 4;
                                    break
                                }
                                return O(o), e.abrupt("return", !1);
                            case 4:
                                return e.abrupt("return", !0);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(),
            x = function(t, n) {
                if (shop.cart.item_count > 0) {
                    var a = t.toLowerCase(),
                        r = (window.n || {}).cs,
                        c = (void 0 === r ? {} : r)[a] || !1;
                    if (c) return window.chCouponCode = t, i.default.set("bva-cart-coupon-code", t, {
                        expires: 7
                    }), e(L).removeClass("is-loading").addClass("is-success"), (0, s.cartUpdate)((0, o.default)({}, c, 1)).then(k).catch(T)
                }
                return !1
            },
            X = function() {
                var t = (0, r.default)(a.default.mark(function t(n, c) {
                    var d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e.get("https://bvanative-js.herokuapp.com/discount/" + n).done(function() {
                                    var e = (0, r.default)(a.default.mark(function e(t) {
                                        var r, u, l;
                                        return a.default.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!(t.id && shop.cart.item_count > 0)) {
                                                        e.next = 24;
                                                        break
                                                    }
                                                    if (!(r = t.entitled_product_ids.find(function(e) {
                                                            return Object.keys(window.shop.giftProducts).includes(e.toString())
                                                        }))) {
                                                        e.next = 17;
                                                        break
                                                    }
                                                    return !0, e.next = 6, W(t, c, !0);
                                                case 6:
                                                    if (!e.sent) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    if (i.default.set("bva-cart-coupon-code", n, {
                                                            expires: 7
                                                        }), i.default.set("bva-cart-coupon-code-data", JSON.stringify(t), {
                                                            expires: 7
                                                        }), !d) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return window.chCouponCode = n, u = window.shop.giftProducts[r][0], e.next = 15, (0, s.cartUpdate)((0, o.default)({}, u, 1)).then(k).catch(T);
                                                case 15:
                                                    e.next = 22;
                                                    break;
                                                case 17:
                                                    return l = i.default.getJSON("bva-cart-coupon-code-options") || {
                                                        skip_errors: !1
                                                    }, e.next = 20, W(t, c);
                                                case 20:
                                                    (e.sent || l.skip_errors) && (i.default.set("bva-cart-coupon-code", n, {
                                                        expires: 7
                                                    }), i.default.set("bva-cart-coupon-code-data", JSON.stringify(t), {
                                                        expires: 7
                                                    }), window.chCouponCode = n, k(shop.cart), (0, s.updateCart)(shop.cart));
                                                case 22:
                                                    e.next = 25;
                                                    break;
                                                case 24:
                                                    d && O(null);
                                                case 25:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e, void 0)
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()).fail(function(e) {
                                    O(null)
                                });
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }, t, void 0)
                }));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }(),
            C = t.resetDiscountUI = function() {
                e("[cart-code-totals]").remove(), e(m).removeClass("is-active"), e(_).removeClass("is-hidden is-active"), e("[data-inline-cart]").removeClass("has-discount")
            },
            B = t.resetDiscount = function() {
                var e = (0, r.default)(a.default.mark(function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Y(n);
                            case 2:
                                return t = e.sent, C(), e.abrupt("return", t);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            j = function(t) {
                var n = e(A).get(0);
                if (t.detail.container.contains(n)) {
                    var a, r = e(n),
                        i = r.closest(g),
                        c = r.closest("[data-dropdown]"),
                        d = r.attr("data-variant-id"),
                        u = c.find("[data-dropdown-value]").filter(".is-active").attr("data-variant-id");
                    w(i), (0, s.cartUpdate)((a = {}, (0, o.default)(a, d, 0), (0, o.default)(a, u, 1), a));
                    var l = r.val();
                    e(z).val(l), e(z).find("option").removeProp("selected").filter('[value="' + l + '"]').prop("selected", !0)
                }
            },
            E = (t.captureTalkable = function() {
                if (-1 !== window.location.search.indexOf("utm_source=talkable")) {
                    var e = (0, c.getUrlParameterByName)("cid", window.location.search);
                    e && i.default.set("bva-cart-coupon-code", e, {
                        expires: 7
                    })
                }
            }, function() {
                var t = i.default.get("bva-cart-coupon-code") || !1,
                    n = i.default.getJSON("bva-cart-coupon-code-data") || !1;
                t && (n || e(g).filter(".is-free-gift").length || (e(b).val(t), e(m).trigger("submit")))
            });
        t.initAutoDiscountCode = function() {
            var e = (0, c.getUrlParameterByName)("discount");
            if (e) {
                B(), i.default.set("bva-cart-coupon-code", e), i.default.set("bva-cart-coupon-code-options", JSON.stringify({
                    skip_errors: !0
                }), {
                    expires: 7
                }), E();
                var t = "discount=" + e,
                    n = window.location.search;
                "?" === (n = n.replace("&" + t, "").replace(t, "").replace("?&", "?")) && (n = "");
                var o = window.location.pathname + n;
                window.history.replaceState({}, null, o)
            }
        }, t.init = function() {
            e(h).on("click", D), e(document).on("click", f, D), e(m).on("submit", S), document.addEventListener("dropdown.updated", j), e(document).on("change", z, function(t) {
                var n = e(t.target).val();
                e("[cart-code-select-item]").filter('[data-dropdown-value="' + n + '"]').trigger("click")
            }), e(document).on("click", y, function() {
                return B()
            }), document.addEventListener("cart.ui.updated", E)
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.update = t.init = void 0;
    var o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(96));
    t.init = function() {
        window.lazy = new o.default, console.log("[BVA] Component Loaded: LazyLoader")
    }, t.update = function() {
        window.lazy.update()
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "html, body",
            o = (t.lock = function(e) {
                document.body.style.top = window.scrollY + "px", document.body.classList.add("no-scroll")
            }, t.unlock = function(e) {
                var t = parseInt(document.body.style.top.replace("px", ""), 10);
                document.body.classList.remove("no-scroll"), document.body.style.top = "", window.scrollTo(0, t)
            }, t.toggle = function(t) {
                e(n).toggleClass("no-scroll")
            }, t.smoothScroll = function(t) {
                var o = e("[scroll-position]").filter('[scroll-position="' + t + '"]');
                if (o.length || (o = e('[id="' + t + '"]')), o.length) {
                    var a = o.offset().top - e("header").outerHeight();
                    e(n).animate({
                        scrollTop: a
                    }, 300)
                }
            }),
            a = function(t) {
                var n = e(t.currentTarget).attr("scroll-to");
                o(n)
            };
        t.init = function() {
            e("[scroll-to]").on("click", a), console.log("[BVA] Component Loaded: Scroll")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    var o = n(21),
        a = n(22);
    e.exports = function(e) {
        return function(t, n) {
            var r, i, s = String(a(t)),
                c = o(n),
                d = s.length;
            return c < 0 || c >= d ? e ? "" : void 0 : (r = s.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === d || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e ? s.charAt(c) : r : e ? s.slice(c, c + 2) : i - 56320 + (r - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    e.exports = !n(7) && !n(36)(function() {
        return 7 != Object.defineProperty(n(24)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var o = n(11);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, a;
        if (t && "function" == typeof(n = e.toString) && !o(a = n.call(e))) return a;
        if ("function" == typeof(n = e.valueOf) && !o(a = n.call(e))) return a;
        if (!t && "function" == typeof(n = e.toString) && !o(a = n.call(e))) return a;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, n) {
    e.exports = n(6)
}, function(e, t, n) {
    "use strict";
    var o = n(62),
        a = n(31),
        r = n(27),
        i = {};
    n(6)(i, n(2)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = o(i, {
            next: a(1, n)
        }), r(e, t + " Iterator")
    }
}, function(e, t, n) {
    var o = n(5),
        a = n(63),
        r = n(39),
        i = n(26)("IE_PROTO"),
        s = function() {},
        c = function() {
            var e, t = n(24)("iframe"),
                o = r.length;
            for (t.style.display = "none", n(40).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; o--;) delete c.prototype[r[o]];
            return c()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s.prototype = o(e), n = new s, s.prototype = null, n[i] = e) : n = c(), void 0 === t ? n : a(n, t)
    }
}, function(e, t, n) {
    var o = n(10),
        a = n(5),
        r = n(64);
    e.exports = n(7) ? Object.defineProperties : function(e, t) {
        a(e);
        for (var n, i = r(t), s = i.length, c = 0; s > c;) o.f(e, n = i[c++], t[n]);
        return e
    }
}, function(e, t, n) {
    var o = n(65),
        a = n(39);
    e.exports = Object.keys || function(e) {
        return o(e, a)
    }
}, function(e, t, n) {
    var o = n(17),
        a = n(25),
        r = n(67)(!1),
        i = n(26)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = a(e),
            c = 0,
            d = [];
        for (n in s) n != i && o(s, n) && d.push(n);
        for (; t.length > c;) o(s, n = t[c++]) && (~r(d, n) || d.push(n));
        return d
    }
}, function(e, t, n) {
    var o = n(18);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var o = n(25),
        a = n(32),
        r = n(68);
    e.exports = function(e) {
        return function(t, n, i) {
            var s, c = o(t),
                d = a(c.length),
                u = r(i, d);
            if (e && n != n) {
                for (; d > u;)
                    if ((s = c[u++]) != s) return !0
            } else
                for (; d > u; u++)
                    if ((e || u in c) && c[u] === n) return e || u || 0; return !e && -1
        }
    }
}, function(e, t, n) {
    var o = n(21),
        a = Math.max,
        r = Math.min;
    e.exports = function(e, t) {
        return (e = o(e)) < 0 ? a(e + t, 0) : r(e, t)
    }
}, function(e, t, n) {
    var o = n(17),
        a = n(47),
        r = n(26)("IE_PROTO"),
        i = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = a(e), o(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null
    }
}, function(e, t, n) {
    e.exports = {
        default: n(71),
        __esModule: !0
    }
}, function(e, t, n) {
    n(72);
    var o = n(3).Object;
    e.exports = function(e, t, n) {
        return o.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var o = n(9);
    o(o.S + o.F * !n(7), "Object", {
        defineProperty: n(10).f
    })
}, function(e, t, n) {
    var o = function() {
            return this
        }() || Function("return this")(),
        a = o.regeneratorRuntime && Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime") >= 0,
        r = a && o.regeneratorRuntime;
    if (o.regeneratorRuntime = void 0, e.exports = n(74), a) o.regeneratorRuntime = r;
    else try {
        delete o.regeneratorRuntime
    } catch (e) {
        o.regeneratorRuntime = void 0
    }
}, function(e, t) {
    ! function(t) {
        "use strict";
        var n, o = Object.prototype,
            a = o.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            i = r.iterator || "@@iterator",
            s = r.asyncIterator || "@@asyncIterator",
            c = r.toStringTag || "@@toStringTag",
            d = "object" == typeof e,
            u = t.regeneratorRuntime;
        if (u) d && (e.exports = u);
        else {
            (u = t.regeneratorRuntime = d ? e.exports : {}).wrap = y;
            var l = "suspendedStart",
                M = "suspendedYield",
                p = "executing",
                f = "completed",
                _ = {},
                m = {};
            m[i] = function() {
                return this
            };
            var h = Object.getPrototypeOf,
                b = h && h(h(S([])));
            b && b !== o && a.call(b, i) && (m = b);
            var L = g.prototype = z.prototype = Object.create(m);
            v.prototype = L.constructor = g, g.constructor = v, g[c] = v.displayName = "GeneratorFunction", u.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, u.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(L), e
            }, u.awrap = function(e) {
                return {
                    __await: e
                }
            }, T(k.prototype), k.prototype[s] = function() {
                return this
            }, u.AsyncIterator = k, u.async = function(e, t, n, o) {
                var a = new k(y(e, t, n, o));
                return u.isGeneratorFunction(t) ? a : a.next().then(function(e) {
                    return e.done ? e.value : a.next()
                })
            }, T(L), L[c] = "Generator", L[i] = function() {
                return this
            }, L.toString = function() {
                return "[object Generator]"
            }, u.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var o = t.pop();
                            if (o in e) return n.value = o, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, u.values = S, D.prototype = {
                constructor: D,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(Y), !e)
                        for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function o(o, a) {
                        return s.type = "throw", s.arg = e, t.next = o, a && (t.method = "next", t.arg = n), !!a
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = a.call(i, "catchLoc"),
                                d = a.call(i, "finallyLoc");
                            if (c && d) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!d) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var r = o;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var i = r ? r.completion : {};
                    return i.type = e, i.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, _) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), Y(n), _
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var a = o.arg;
                                Y(n)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, o) {
                    return this.delegate = {
                        iterator: S(e),
                        resultName: t,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = n), _
                }
            }
        }

        function y(e, t, n, o) {
            var a = t && t.prototype instanceof z ? t : z,
                r = Object.create(a.prototype),
                i = new D(o || []);
            return r._invoke = function(e, t, n) {
                var o = l;
                return function(a, r) {
                    if (o === p) throw new Error("Generator is already running");
                    if (o === f) {
                        if ("throw" === a) throw r;
                        return q()
                    }
                    for (n.method = a, n.arg = r;;) {
                        var i = n.delegate;
                        if (i) {
                            var s = O(i, n);
                            if (s) {
                                if (s === _) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === l) throw o = f, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        o = p;
                        var c = A(e, t, n);
                        if ("normal" === c.type) {
                            if (o = n.done ? f : M, c.arg === _) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (o = f, n.method = "throw", n.arg = c.arg)
                    }
                }
            }(e, n, i), r
        }

        function A(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function z() {}

        function v() {}

        function g() {}

        function T(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function k(e) {
            var t;
            this._invoke = function(n, o) {
                function r() {
                    return new Promise(function(t, r) {
                        ! function t(n, o, r, i) {
                            var s = A(e[n], e, o);
                            if ("throw" !== s.type) {
                                var c = s.arg,
                                    d = c.value;
                                return d && "object" == typeof d && a.call(d, "__await") ? Promise.resolve(d.__await).then(function(e) {
                                    t("next", e, r, i)
                                }, function(e) {
                                    t("throw", e, r, i)
                                }) : Promise.resolve(d).then(function(e) {
                                    c.value = e, r(c)
                                }, i)
                            }
                            i(s.arg)
                        }(n, o, t, r)
                    })
                }
                return t = t ? t.then(r, r) : r()
            }
        }

        function O(e, t) {
            var o = e.iterator[t.method];
            if (o === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = n, O(e, t), "throw" === t.method)) return _;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return _
            }
            var a = A(o, e.iterator, t.arg);
            if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, _;
            var r = a.arg;
            return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, _) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
        }

        function w(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function Y(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function D(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(w, this), this.reset(!0)
        }

        function S(e) {
            if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        r = function t() {
                            for (; ++o < e.length;)
                                if (a.call(e, o)) return t.value = e[o], t.done = !1, t;
                            return t.value = n, t.done = !0, t
                        };
                    return r.next = r
                }
            }
            return {
                next: q
            }
        }

        function q() {
            return {
                value: n,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}, function(e, t, n) {
    e.exports = {
        default: n(76),
        __esModule: !0
    }
}, function(e, t, n) {
    n(77), n(46), n(78), n(82), n(90), n(91), e.exports = n(3).Promise
}, function(e, t) {}, function(e, t, n) {
    n(79);
    for (var o = n(1), a = n(6), r = n(12), i = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var d = s[c],
            u = o[d],
            l = u && u.prototype;
        l && !l[i] && a(l, i, d), r[d] = r.Array
    }
}, function(e, t, n) {
    "use strict";
    var o = n(80),
        a = n(81),
        r = n(12),
        i = n(25);
    e.exports = n(35)(Array, "Array", function(e, t) {
        this._t = i(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    var o, a, r, i, s = n(23),
        c = n(1),
        d = n(13),
        u = n(41),
        l = n(9),
        M = n(11),
        p = n(16),
        f = n(83),
        _ = n(84),
        m = n(42),
        h = n(43).set,
        b = n(86)(),
        L = n(28),
        y = n(44),
        A = n(87),
        z = n(45),
        v = c.TypeError,
        g = c.process,
        T = g && g.versions,
        k = T && T.v8 || "",
        O = c.Promise,
        w = "process" == u(g),
        Y = function() {},
        D = a = L.f,
        S = !! function() {
            try {
                var e = O.resolve(1),
                    t = (e.constructor = {})[n(2)("species")] = function(e) {
                        e(Y, Y)
                    };
                return (w || "function" == typeof PromiseRejectionEvent) && e.then(Y) instanceof t && 0 !== k.indexOf("6.6") && -1 === A.indexOf("Chrome/66")
            } catch (e) {}
        }(),
        q = function(e) {
            var t;
            return !(!M(e) || "function" != typeof(t = e.then)) && t
        },
        N = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                b(function() {
                    for (var o = e._v, a = 1 == e._s, r = 0, i = function(t) {
                            var n, r, i, s = a ? t.ok : t.fail,
                                c = t.resolve,
                                d = t.reject,
                                u = t.domain;
                            try {
                                s ? (a || (2 == e._h && X(e), e._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), i = !0)), n === t.promise ? d(v("Promise-chain cycle")) : (r = q(n)) ? r.call(n, c, d) : c(n)) : d(o)
                            } catch (e) {
                                u && !i && u.exit(), d(e)
                            }
                        }; n.length > r;) i(n[r++]);
                    e._c = [], e._n = !1, t && !e._h && W(e)
                })
            }
        },
        W = function(e) {
            h.call(c, function() {
                var t, n, o, a = e._v,
                    r = x(e);
                if (r && (t = y(function() {
                        w ? g.emit("unhandledRejection", a, e) : (n = c.onunhandledrejection) ? n({
                            promise: e,
                            reason: a
                        }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", a)
                    }), e._h = w || x(e) ? 2 : 1), e._a = void 0, r && t.e) throw t.v
            })
        },
        x = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        X = function(e) {
            h.call(c, function() {
                var t;
                w ? g.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        C = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), N(t, !0))
        },
        B = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw v("Promise can't be resolved itself");
                    (t = q(e)) ? b(function() {
                        var o = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, d(B, o, 1), d(C, o, 1))
                        } catch (e) {
                            C.call(o, e)
                        }
                    }): (n._v = e, n._s = 1, N(n, !1))
                } catch (e) {
                    C.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    S || (O = function(e) {
        f(this, O, "Promise", "_h"), p(e), o.call(this);
        try {
            e(d(B, this, 1), d(C, this, 1))
        } catch (e) {
            C.call(this, e)
        }
    }, (o = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(88)(O.prototype, {
        then: function(e, t) {
            var n = D(m(this, O));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = w ? g.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && N(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), r = function() {
        var e = new o;
        this.promise = e, this.resolve = d(B, e, 1), this.reject = d(C, e, 1)
    }, L.f = D = function(e) {
        return e === O || e === i ? new r(e) : a(e)
    }), l(l.G + l.W + l.F * !S, {
        Promise: O
    }), n(27)(O, "Promise"), n(89)("Promise"), i = n(3).Promise, l(l.S + l.F * !S, "Promise", {
        reject: function(e) {
            var t = D(this);
            return (0, t.reject)(e), t.promise
        }
    }), l(l.S + l.F * (s || !S), "Promise", {
        resolve: function(e) {
            return z(s && this === i ? O : this, e)
        }
    }), l(l.S + l.F * !(S && n(51)(function(e) {
        O.all(e).catch(Y)
    })), "Promise", {
        all: function(e) {
            var t = this,
                n = D(t),
                o = n.resolve,
                a = n.reject,
                r = y(function() {
                    var n = [],
                        r = 0,
                        i = 1;
                    _(e, !1, function(e) {
                        var s = r++,
                            c = !1;
                        n.push(void 0), i++, t.resolve(e).then(function(e) {
                            c || (c = !0, n[s] = e, --i || o(n))
                        }, a)
                    }), --i || o(n)
                });
            return r.e && a(r.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = D(t),
                o = n.reject,
                a = y(function() {
                    _(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, o)
                    })
                });
            return a.e && o(a.v), n.promise
        }
    })
}, function(e, t) {
    e.exports = function(e, t, n, o) {
        if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var o = n(13),
        a = n(48),
        r = n(49),
        i = n(5),
        s = n(32),
        c = n(50),
        d = {},
        u = {};
    (t = e.exports = function(e, t, n, l, M) {
        var p, f, _, m, h = M ? function() {
                return e
            } : c(e),
            b = o(n, l, t ? 2 : 1),
            L = 0;
        if ("function" != typeof h) throw TypeError(e + " is not iterable!");
        if (r(h)) {
            for (p = s(e.length); p > L; L++)
                if ((m = t ? b(i(f = e[L])[0], f[1]) : b(e[L])) === d || m === u) return m
        } else
            for (_ = h.call(e); !(f = _.next()).done;)
                if ((m = a(_, b, f.value, t)) === d || m === u) return m
    }).BREAK = d, t.RETURN = u
}, function(e, t) {
    e.exports = function(e, t, n) {
        var o = void 0 === n;
        switch (t.length) {
            case 0:
                return o ? e() : e.call(n);
            case 1:
                return o ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var o = n(1),
        a = n(43).set,
        r = o.MutationObserver || o.WebKitMutationObserver,
        i = o.process,
        s = o.Promise,
        c = "process" == n(18)(i);
    e.exports = function() {
        var e, t, n, d = function() {
            var o, a;
            for (c && (o = i.domain) && o.exit(); e;) {
                a = e.fn, e = e.next;
                try {
                    a()
                } catch (o) {
                    throw e ? n() : t = void 0, o
                }
            }
            t = void 0, o && o.enter()
        };
        if (c) n = function() {
            i.nextTick(d)
        };
        else if (!r || o.navigator && o.navigator.standalone)
            if (s && s.resolve) {
                var u = s.resolve(void 0);
                n = function() {
                    u.then(d)
                }
            } else n = function() {
                a.call(o, d)
            };
        else {
            var l = !0,
                M = document.createTextNode("");
            new r(d).observe(M, {
                characterData: !0
            }), n = function() {
                M.data = l = !l
            }
        }
        return function(o) {
            var a = {
                fn: o,
                next: void 0
            };
            t && (t.next = a), e || (e = a, n()), t = a
        }
    }
}, function(e, t, n) {
    var o = n(1).navigator;
    e.exports = o && o.userAgent || ""
}, function(e, t, n) {
    var o = n(6);
    e.exports = function(e, t, n) {
        for (var a in t) n && e[a] ? e[a] = t[a] : o(e, a, t[a]);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var o = n(1),
        a = n(3),
        r = n(10),
        i = n(7),
        s = n(2)("species");
    e.exports = function(e) {
        var t = "function" == typeof a[e] ? a[e] : o[e];
        i && t && !t[s] && r.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var o = n(9),
        a = n(3),
        r = n(1),
        i = n(42),
        s = n(45);
    o(o.P + o.R, "Promise", {
        finally: function(e) {
            var t = i(this, a.Promise || r.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return s(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return s(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(9),
        a = n(28),
        r = n(44);
    o(o.S, "Promise", {
        try: function(e) {
            var t = a.f(this),
                n = r(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    var o, a, r;
    ! function(i) {
        "use strict";
        a = [n(0)], void 0 === (r = "function" == typeof(o = function(e) {
            var t = window.Slick || {};
            (t = function() {
                var t = 0;
                return function(n, o) {
                    var a, r = this;
                    r.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(n),
                        appendDots: e(n),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(t, n) {
                            return e('<button type="button" />').text(n + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, r.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, a = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, o, a), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
                }
            }()).prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, o) {
                var a = this;
                if ("boolean" == typeof n) o = n, n = null;
                else if (n < 0 || n >= a.slideCount) return !1;
                a.unload(), "number" == typeof n ? 0 === n && 0 === a.$slides.length ? e(t).appendTo(a.$slideTrack) : o ? e(t).insertBefore(a.$slides.eq(n)) : e(t).insertAfter(a.$slides.eq(n)) : !0 === o ? e(t).prependTo(a.$slideTrack) : e(t).appendTo(a.$slideTrack), a.$slides = a.$slideTrack.children(this.options.slide), a.$slideTrack.children(this.options.slide).detach(), a.$slideTrack.append(a.$slides), a.$slides.each(function(t, n) {
                    e(n).attr("data-slick-index", t)
                }), a.$slidesCache = a.$slides, a.reinit()
            }, t.prototype.animateHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }, t.prototype.animateSlide = function(t, n) {
                var o = {},
                    a = this;
                a.animateHeight(), !0 === a.options.rtl && !1 === a.options.vertical && (t = -t), !1 === a.transformsEnabled ? !1 === a.options.vertical ? a.$slideTrack.animate({
                    left: t
                }, a.options.speed, a.options.easing, n) : a.$slideTrack.animate({
                    top: t
                }, a.options.speed, a.options.easing, n) : !1 === a.cssTransitions ? (!0 === a.options.rtl && (a.currentLeft = -a.currentLeft), e({
                    animStart: a.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: a.options.speed,
                    easing: a.options.easing,
                    step: function(e) {
                        e = Math.ceil(e), !1 === a.options.vertical ? (o[a.animType] = "translate(" + e + "px, 0px)", a.$slideTrack.css(o)) : (o[a.animType] = "translate(0px," + e + "px)", a.$slideTrack.css(o))
                    },
                    complete: function() {
                        n && n.call()
                    }
                })) : (a.applyTransition(), t = Math.ceil(t), !1 === a.options.vertical ? o[a.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[a.animType] = "translate3d(0px," + t + "px, 0px)", a.$slideTrack.css(o), n && setTimeout(function() {
                    a.disableTransition(), n.call()
                }, a.options.speed))
            }, t.prototype.getNavTarget = function() {
                var t = this.options.asNavFor;
                return t && null !== t && (t = e(t).not(this.$slider)), t
            }, t.prototype.asNavFor = function(t) {
                var n = this.getNavTarget();
                null !== n && "object" == typeof n && n.each(function() {
                    var n = e(this).slick("getSlick");
                    n.unslicked || n.slideHandler(t, !0)
                })
            }, t.prototype.applyTransition = function(e) {
                var t = this,
                    n = {};
                !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }, t.prototype.autoPlayClear = function() {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer)
            }, t.prototype.autoPlayIterator = function() {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
            }, t.prototype.buildArrows = function() {
                var t = this;
                !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, t.prototype.buildDots = function() {
                var t, n, o = this;
                if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
                    for (o.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1) n.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
                    o.$dots = n.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
                }
            }, t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                    e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
            }, t.prototype.buildRows = function() {
                var e, t, n, o, a, r, i, s = this;
                if (o = document.createDocumentFragment(), r = s.$slider.children(), s.options.rows > 0) {
                    for (i = s.options.slidesPerRow * s.options.rows, a = Math.ceil(r.length / i), e = 0; e < a; e++) {
                        var c = document.createElement("div");
                        for (t = 0; t < s.options.rows; t++) {
                            var d = document.createElement("div");
                            for (n = 0; n < s.options.slidesPerRow; n++) {
                                var u = e * i + (t * s.options.slidesPerRow + n);
                                r.get(u) && d.appendChild(r.get(u))
                            }
                            c.appendChild(d)
                        }
                        o.appendChild(c)
                    }
                    s.$slider.empty().append(o), s.$slider.children().children().children().css({
                        width: 100 / s.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, t.prototype.checkResponsive = function(t, n) {
                var o, a, r, i = this,
                    s = !1,
                    c = i.$slider.width(),
                    d = window.innerWidth || e(window).width();
                if ("window" === i.respondTo ? r = d : "slider" === i.respondTo ? r = c : "min" === i.respondTo && (r = Math.min(d, c)), i.options.responsive && i.options.responsive.length && null !== i.options.responsive) {
                    for (o in a = null, i.breakpoints) i.breakpoints.hasOwnProperty(o) && (!1 === i.originalSettings.mobileFirst ? r < i.breakpoints[o] && (a = i.breakpoints[o]) : r > i.breakpoints[o] && (a = i.breakpoints[o]));
                    null !== a ? null !== i.activeBreakpoint ? (a !== i.activeBreakpoint || n) && (i.activeBreakpoint = a, "unslick" === i.breakpointSettings[a] ? i.unslick(a) : (i.options = e.extend({}, i.originalSettings, i.breakpointSettings[a]), !0 === t && (i.currentSlide = i.options.initialSlide), i.refresh(t)), s = a) : (i.activeBreakpoint = a, "unslick" === i.breakpointSettings[a] ? i.unslick(a) : (i.options = e.extend({}, i.originalSettings, i.breakpointSettings[a]), !0 === t && (i.currentSlide = i.options.initialSlide), i.refresh(t)), s = a) : null !== i.activeBreakpoint && (i.activeBreakpoint = null, i.options = i.originalSettings, !0 === t && (i.currentSlide = i.options.initialSlide), i.refresh(t), s = a), t || !1 === s || i.$slider.trigger("breakpoint", [i, s])
                }
            }, t.prototype.changeSlide = function(t, n) {
                var o, a, r = this,
                    i = e(t.currentTarget);
                switch (i.is("a") && t.preventDefault(), i.is("li") || (i = i.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                    case "previous":
                        a = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - a, !1, n);
                        break;
                    case "next":
                        a = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + a, !1, n);
                        break;
                    case "index":
                        var s = 0 === t.data.index ? 0 : t.data.index || i.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(s), !1, n), i.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, t.prototype.checkNavigable = function(e) {
                var t, n;
                if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
                else
                    for (var o in t) {
                        if (e < t[o]) {
                            e = n;
                            break
                        }
                        n = t[o]
                    }
                return e
            }, t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.cleanUpSlideEvents = function() {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.cleanUpRows = function() {
                var e, t = this;
                t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
            }, t.prototype.clickHandler = function(e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
            }, t.prototype.destroy = function(t) {
                var n = this;
                n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    e(this).attr("style", e(this).data("originalStyling"))
                }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
            }, t.prototype.disableTransition = function(e) {
                var t = this,
                    n = {};
                n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.fadeSlide = function(e, t) {
                var n = this;
                !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                    zIndex: n.options.zIndex
                }), n.$slides.eq(e).animate({
                    opacity: 1
                }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: n.options.zIndex
                }), t && setTimeout(function() {
                    n.disableTransition(e), t.call()
                }, n.options.speed))
            }, t.prototype.fadeSlideOut = function(e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }))
            }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                var t = this;
                null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
            }, t.prototype.focusHandler = function() {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
                    n.stopImmediatePropagation();
                    var o = e(this);
                    setTimeout(function() {
                        t.options.pauseOnFocus && (t.focussed = o.is(":focus"), t.autoPlay())
                    }, 0)
                })
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                return this.currentSlide
            }, t.prototype.getDotCount = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    o = 0;
                if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++o;
                    else
                        for (; t < e.slideCount;) ++o, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else if (!0 === e.options.centerMode) o = e.slideCount;
                else if (e.options.asNavFor)
                    for (; t < e.slideCount;) ++o, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return o - 1
            }, t.prototype.getLeft = function(e) {
                var t, n, o, a, r = this,
                    i = 0;
                return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, a = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? a = -1.5 : 1 === r.options.slidesToShow && (a = -2)), i = n * r.options.slidesToShow * a), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, i = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, i = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, i = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, i = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + i, !0 === r.options.variableWidth && (o = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? o[0] ? -1 * (r.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === r.options.centerMode && (o = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? o[0] ? -1 * (r.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (r.$list.width() - o.outerWidth()) / 2)), t
            }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                return this.options[e]
            }, t.prototype.getNavigableIndexes = function() {
                var e, t = this,
                    n = 0,
                    o = 0,
                    a = [];
                for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) a.push(n), n = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return a
            }, t.prototype.getSlick = function() {
                return this
            }, t.prototype.getSlideCount = function() {
                var t, n, o = this;
                return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(a, r) {
                    if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * o.swipeLeft) return t = r, !1
                }), Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }, t.prototype.init = function(t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
            }, t.prototype.initADA = function() {
                var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    o = t.getNavigableIndexes().filter(function(e) {
                        return e >= 0 && e < t.slideCount
                    });
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
                    var a = o.indexOf(n);
                    if (e(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + t.instanceUid + n,
                            tabindex: -1
                        }), -1 !== a) {
                        var r = "slick-slide-control" + t.instanceUid + a;
                        e("#" + r).length && e(this).attr({
                            "aria-describedby": r
                        })
                    }
                }), t.$dots.attr("role", "tablist").find("li").each(function(a) {
                    var r = o[a];
                    e(this).attr({
                        role: "presentation"
                    }), e(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + a,
                        "aria-controls": "slick-slide" + t.instanceUid + r,
                        "aria-label": a + 1 + " of " + n,
                        "aria-selected": null,
                        tabindex: "-1"
                    })
                }).eq(t.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end());
                for (var a = t.currentSlide, r = a + t.options.slidesToShow; a < r; a++) t.options.focusOnChange ? t.$slides.eq(a).attr({
                    tabindex: "0"
                }) : t.$slides.eq(a).removeAttr("tabindex");
                t.activateADA()
            }, t.prototype.initArrowEvents = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
            }, t.prototype.initDotEvents = function() {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.initSlideEvents = function() {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
            }, t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
            }, t.prototype.initUI = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
            }, t.prototype.keyHandler = function(e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                    data: {
                        message: !0 === t.options.rtl ? "next" : "previous"
                    }
                }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                    data: {
                        message: !0 === t.options.rtl ? "previous" : "next"
                    }
                }))
            }, t.prototype.lazyLoad = function() {
                var t, n, o, a = this;

                function r(t) {
                    e("img[data-lazy]", t).each(function() {
                        var t = e(this),
                            n = e(this).attr("data-lazy"),
                            o = e(this).attr("data-srcset"),
                            r = e(this).attr("data-sizes") || a.$slider.attr("data-sizes"),
                            i = document.createElement("img");
                        i.onload = function() {
                            t.animate({
                                opacity: 0
                            }, 100, function() {
                                o && (t.attr("srcset", o), r && t.attr("sizes", r)), t.attr("src", n).animate({
                                    opacity: 1
                                }, 200, function() {
                                    t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                }), a.$slider.trigger("lazyLoaded", [a, t, n])
                            })
                        }, i.onerror = function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, t, n])
                        }, i.src = n
                    })
                }
                if (!0 === a.options.centerMode ? !0 === a.options.infinite ? o = (n = a.currentSlide + (a.options.slidesToShow / 2 + 1)) + a.options.slidesToShow + 2 : (n = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), o = a.options.slidesToShow / 2 + 1 + 2 + a.currentSlide) : (n = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, o = Math.ceil(n + a.options.slidesToShow), !0 === a.options.fade && (n > 0 && n--, o <= a.slideCount && o++)), t = a.$slider.find(".slick-slide").slice(n, o), "anticipated" === a.options.lazyLoad)
                    for (var i = n - 1, s = o, c = a.$slider.find(".slick-slide"), d = 0; d < a.options.slidesToScroll; d++) i < 0 && (i = a.slideCount - 1), t = (t = t.add(c.eq(i))).add(c.eq(s)), i--, s++;
                r(t), a.slideCount <= a.options.slidesToShow ? r(a.$slider.find(".slick-slide")) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? r(a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow)) : 0 === a.currentSlide && r(a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow))
            }, t.prototype.loadSlider = function() {
                var e = this;
                e.setPosition(), e.$slideTrack.css({
                    opacity: 1
                }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
            }, t.prototype.next = t.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, t.prototype.orientationChange = function() {
                this.checkResponsive(), this.setPosition()
            }, t.prototype.pause = t.prototype.slickPause = function() {
                this.autoPlayClear(), this.paused = !0
            }, t.prototype.play = t.prototype.slickPlay = function() {
                var e = this;
                e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
            }, t.prototype.postSlide = function(t) {
                var n = this;
                !n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange)) && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()
            }, t.prototype.prev = t.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, t.prototype.preventDefault = function(e) {
                e.preventDefault()
            }, t.prototype.progressiveLazyLoad = function(t) {
                t = t || 1;
                var n, o, a, r, i, s = this,
                    c = e("img[data-lazy]", s.$slider);
                c.length ? (n = c.first(), o = n.attr("data-lazy"), a = n.attr("data-srcset"), r = n.attr("data-sizes") || s.$slider.attr("data-sizes"), (i = document.createElement("img")).onload = function() {
                    a && (n.attr("srcset", a), r && n.attr("sizes", r)), n.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, n, o]), s.progressiveLazyLoad()
                }, i.onerror = function() {
                    t < 3 ? setTimeout(function() {
                        s.progressiveLazyLoad(t + 1)
                    }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, n, o]), s.progressiveLazyLoad())
                }, i.src = o) : s.$slider.trigger("allImagesLoaded", [s])
            }, t.prototype.refresh = function(t) {
                var n, o, a = this;
                o = a.slideCount - a.options.slidesToShow, !a.options.infinite && a.currentSlide > o && (a.currentSlide = o), a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0), n = a.currentSlide, a.destroy(!0), e.extend(a, a.initials, {
                    currentSlide: n
                }), a.init(), t || a.changeSlide({
                    data: {
                        message: "index",
                        index: n
                    }
                }, !1)
            }, t.prototype.registerBreakpoints = function() {
                var t, n, o, a = this,
                    r = a.options.responsive || null;
                if ("array" === e.type(r) && r.length) {
                    for (t in a.respondTo = a.options.respondTo || "window", r)
                        if (o = a.breakpoints.length - 1, r.hasOwnProperty(t)) {
                            for (n = r[t].breakpoint; o >= 0;) a.breakpoints[o] && a.breakpoints[o] === n && a.breakpoints.splice(o, 1), o--;
                            a.breakpoints.push(n), a.breakpointSettings[n] = r[t].settings
                        }
                    a.breakpoints.sort(function(e, t) {
                        return a.options.mobileFirst ? e - t : t - e
                    })
                }
            }, t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
            }, t.prototype.resize = function() {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                }, 50))
            }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                var o = this;
                if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
                o.unload(), !0 === n ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
            }, t.prototype.setCSS = function(e) {
                var t, n, o = this,
                    a = {};
                !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", a[o.positionProp] = e, !1 === o.transformsEnabled ? o.$slideTrack.css(a) : (a = {}, !1 === o.cssTransitions ? (a[o.animType] = "translate(" + t + ", " + n + ")", o.$slideTrack.css(a)) : (a[o.animType] = "translate3d(" + t + ", " + n + ", 0px)", o.$slideTrack.css(a)))
            }, t.prototype.setDimensions = function() {
                var e = this;
                !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, t.prototype.setFade = function() {
                var t, n = this;
                n.$slides.each(function(o, a) {
                    t = n.slideWidth * o * -1, !0 === n.options.rtl ? e(a).css({
                        position: "relative",
                        right: t,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    }) : e(a).css({
                        position: "relative",
                        left: t,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    })
                }), n.$slides.eq(n.currentSlide).css({
                    zIndex: n.options.zIndex - 1,
                    opacity: 1
                })
            }, t.prototype.setHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function() {
                var t, n, o, a, r, i = this,
                    s = !1;
                if ("object" === e.type(arguments[0]) ? (o = arguments[0], s = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], a = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) i.options[o] = a;
                else if ("multiple" === r) e.each(o, function(e, t) {
                    i.options[e] = t
                });
                else if ("responsive" === r)
                    for (n in a)
                        if ("array" !== e.type(i.options.responsive)) i.options.responsive = [a[n]];
                        else {
                            for (t = i.options.responsive.length - 1; t >= 0;) i.options.responsive[t].breakpoint === a[n].breakpoint && i.options.responsive.splice(t, 1), t--;
                            i.options.responsive.push(a[n])
                        }
                s && (i.unload(), i.reinit())
            }, t.prototype.setPosition = function() {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
            }, t.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
            }, t.prototype.setSlideClasses = function(e) {
                var t, n, o, a, r = this;
                if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                    var i = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + i, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = r.options.slidesToShow + e, n.slice(o - t + 1 + i, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
                } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (a = r.slideCount % r.options.slidesToShow, o = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(o - (r.options.slidesToShow - a), o + a).addClass("slick-active").attr("aria-hidden", "false") : n.slice(o, o + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
            }, t.prototype.setupInfinite = function() {
                var t, n, o, a = this;
                if (!0 === a.options.fade && (a.options.centerMode = !1), !0 === a.options.infinite && !1 === a.options.fade && (n = null, a.slideCount > a.options.slidesToShow)) {
                    for (o = !0 === a.options.centerMode ? a.options.slidesToShow + 1 : a.options.slidesToShow, t = a.slideCount; t > a.slideCount - o; t -= 1) n = t - 1, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < o + a.slideCount; t += 1) n = t, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned");
                    a.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                        e(this).attr("id", "")
                    })
                }
            }, t.prototype.interrupt = function(e) {
                e || this.autoPlay(), this.interrupted = e
            }, t.prototype.selectHandler = function(t) {
                var n = this,
                    o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    a = parseInt(o.attr("data-slick-index"));
                a || (a = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(a, !1, !0) : n.slideHandler(a)
            }, t.prototype.slideHandler = function(e, t, n) {
                var o, a, r, i, s, c = null,
                    d = this;
                if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                    if (!1 === t && d.asNavFor(e), o = e, c = d.getLeft(o), i = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? i : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(i, function() {
                        d.postSlide(o)
                    }) : d.postSlide(o));
                    else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(i, function() {
                    d.postSlide(o)
                }) : d.postSlide(o));
                else {
                    if (d.options.autoplay && clearInterval(d.autoPlayTimer), a = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, a]), r = d.currentSlide, d.currentSlide = a, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (s = (s = d.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== n ? (d.fadeSlideOut(r), d.fadeSlide(a, function() {
                        d.postSlide(a)
                    })) : d.postSlide(a), void d.animateHeight();
                    !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(c, function() {
                        d.postSlide(a)
                    }) : d.postSlide(a)
                }
            }, t.prototype.startLoad = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
            }, t.prototype.swipeDirection = function() {
                var e, t, n, o, a = this;
                return e = a.touchObject.startX - a.touchObject.curX, t = a.touchObject.startY - a.touchObject.curY, n = Math.atan2(t, e), (o = Math.round(180 * n / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === a.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === a.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === a.options.rtl ? "right" : "left" : !0 === a.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
            }, t.prototype.swipeEnd = function(e) {
                var t, n, o = this;
                if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
                if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
                if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                    switch (n = o.swipeDirection()) {
                        case "left":
                        case "down":
                            t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                    }
                    "vertical" != n && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, n]))
                } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
            }, t.prototype.swipeHandler = function(e) {
                var t = this;
                if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e)
                }
            }, t.prototype.swipeMove = function(e) {
                var t, n, o, a, r, i, s = this;
                return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || s.scrolling || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), i = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && i > 4 ? (s.scrolling = !0, !1) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = i), n = s.swipeDirection(), void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && (s.swiping = !0, e.preventDefault()), a = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (a = s.touchObject.curY > s.touchObject.startY ? 1 : -1), o = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (o = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + o * a : s.swipeLeft = t + o * (s.$list.height() / s.listWidth) * a, !0 === s.options.verticalSwiping && (s.swipeLeft = t + o * a), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))))
            }, t.prototype.swipeStart = function(e) {
                var t, n = this;
                if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
            }, t.prototype.unload = function() {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, t.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy()
            }, t.prototype.updateArrows = function() {
                var e = this;
                Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, t.prototype.updateDots = function() {
                var e = this;
                null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
            }, t.prototype.visibility = function() {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
            }, e.fn.slick = function() {
                var e, n, o = this,
                    a = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    i = o.length;
                for (e = 0; e < i; e++)
                    if ("object" == typeof a || void 0 === a ? o[e].slick = new t(o[e], a) : n = o[e].slick[a].apply(o[e].slick, r), void 0 !== n) return n;
                return o
            }
        }) ? o.apply(t, a) : o) || (e.exports = r)
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = t.klaviyoTrackItemAdd = t.klaviyoTrackItemView = void 0;
    var o = n(8),
        a = function() {
            var e = window.shop.activeProduct || window.shop.product.data,
                t = e.variants[0],
                n = e.image ? e.image.src : e.featured_image;
            return {
                Name: e.title,
                ProductID: e.id,
                Categories: e.collections,
                ImageURL: "https:" + n,
                URL: e.url,
                Brand: e.vendor,
                Price: (0, o.formatMoney)(t.price, "${{amount}}"),
                CompareAtPrice: (0, o.formatMoney)(t.compare_at_price, "${{amount}}")
            }
        },
        r = (t.klaviyoTrackItemView = function e() {
            var t = window._learnq;
            if (void 0 === t || !t) return setTimeout(e, 1e3);
            var n = a();
            window._learnq.push(["track", "Viewed Product", n]), window._learnq.push(["trackViewedItem", {
                Title: n.Name,
                ItemId: n.ProductID,
                Categories: n.Categories,
                ImageUrl: n.ImageURL,
                Url: n.URL,
                Metadata: {
                    Brand: n.Brand,
                    Price: n.Price,
                    CompareAtPrice: n.CompareAtPrice
                }
            }])
        }, t.klaviyoTrackItemAdd = function e() {
            var t = window._learnq;
            if (void 0 === t || !t) return setTimeout(e, 1e3);
            var n = a();
            window._learnq.push(["track", "Add To Cart", n])
        }, function() {
            KlaviyoSubscribe.attachToForms("[email-capture]", {
                hide_form_on_success: !1
            }), KlaviyoSubscribe.attachToForms("[oos-capture]", {
                hide_form_on_success: !1,
                success_message: "Thanks for joining. More is on the way!"
            })
        });
    t.init = function() {
        var e;
        
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = t.toggle = t.hide = t.show = void 0;
        var o = n(56),
            a = "[data-overlay]",
            r = (t.show = function() {
                return (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (0, o.lock)(), e(a).fadeIn(300)
            }, t.hide = function(t) {
                if (!t || !t.target.classList.contains("is-no-click")) return (0, o.unlock)(), e("[data-modal]").removeClass("is-active"), e(a).removeClass("is-no-click"), e(a).attr("class", "overlay"), e(a).fadeOut(300)
            });
        t.toggle = function() {
            return e(a).fadeToggle(300)
        }, t.init = function() {
            e(a).on("click", r), console.log("[BVA] Component Loaded: Overlay")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "body",
            o = "[data-dropdown]",
            a = "[data-dropdown-trigger]",
            r = "[data-dropdown-value]",
            i = "[data-dropdown-content]",
            s = !1,
            c = !1,
            d = !1,
            u = function() {
                e(n).removeClass("dropdown-open"), e(o).removeClass("is-active"), e(a).removeClass("is-active"), e(i).slideUp(250)
            },
            l = function(t) {
                var a = e(t.currentTarget),
                    r = a.closest("form"),
                    s = a.closest(o),
                    c = a.siblings(i);
                a.hasClass("is-active") ? (e(n).removeClass("dropdown-open"), a.removeClass("is-active"), s.removeClass("is-active"), c.slideUp(250)) : (e(n).addClass("dropdown-open"), a.addClass("is-active"), s.addClass("is-active"), c.slideDown(250)), r.length && r.find(i).not(c).slideUp(250)
            },
            M = function(t) {
                var s = e(t.currentTarget),
                    c = s.attr("data-dropdown-value"),
                    d = s.attr("data-dropdown-text") || c,
                    u = s.siblings(r),
                    l = s.closest(o),
                    M = l.find(i),
                    p = l.find(a);
                u.removeClass("is-active"), s.addClass("is-active"), l.removeClass("is-active"), p.val(c).attr("value", c).trigger("change").text(d).removeClass("is-active");
                var f = {
                        container: l.get(0),
                        value: c,
                        text: d
                    },
                    _ = new CustomEvent("dropdown.updated", {
                        detail: f
                    });
                document.dispatchEvent(_), e(n).removeClass("dropdown-open"), M.slideUp(250)
            };
        t.init = function() {
            if (window._initComponents.dropdowns) return null;
            window._initComponents.dropdowns = !0, e(document).on("touchstart click", o, function(e) {
                e.stopPropagation()
            }), e(document).on("touchend click", a, function(e) {
                e.stopPropagation(), "touchend" === e.type ? (s = !0, l(e)) : "click" !== e.type || s ? s = !1 : l(e)
            }), e(document).on("touchstart touchend touchmove click", r, function(e) {
                if (e.stopPropagation(), "touchstart" === e.type && (d = !1), "touchmove" !== e.type)
                    if ("touchend" === e.type) {
                        if (d) return;
                        c = !0, M(e)
                    } else "click" !== e.type || c ? c = !1 : M(e);
                else d = !0
            }), e(document).on("touchstart click", "body.dropdown-open", u), console.log("[BVA] Component Loaded: Dropdown")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    var o, a;

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }).apply(this, arguments)
    }

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }! function(r, s) {
        "object" === i(t) && void 0 !== e ? e.exports = s() : void 0 === (a = "function" == typeof(o = s) ? o.call(t, n, t, e) : o) || (e.exports = a)
    }(0, function() {
        "use strict";
        var e = "undefined" != typeof window,
            t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
            n = e && "IntersectionObserver" in window,
            o = e && "classList" in document.createElement("p"),
            a = {
                elements_selector: "img",
                container: t || e ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_poster: "poster",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                load_delay: 0,
                auto_unobserve: !0,
                callback_enter: null,
                callback_exit: null,
                callback_reveal: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                use_native: !1
            },
            i = function(e, t) {
                var n, o = new e(t);
                try {
                    n = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: o
                        }
                    })
                } catch (e) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                        instance: o
                    })
                }
                window.dispatchEvent(n)
            },
            s = function(e, t) {
                return e.getAttribute("data-" + t)
            },
            c = function(e, t, n) {
                var o = "data-" + t;
                null !== n ? e.setAttribute(o, n) : e.removeAttribute(o)
            },
            d = function(e) {
                return "true" === s(e, "was-processed")
            },
            u = function(e, t) {
                return c(e, "ll-timeout", t)
            },
            l = function(e) {
                return s(e, "ll-timeout")
            },
            M = function(e, t, n, o) {
                e && (void 0 === o ? void 0 === n ? e(t) : e(t, n) : e(t, n, o))
            },
            p = function(e, t) {
                e._loadingCount += t, 0 === e._elements.length && 0 === e._loadingCount && M(e._settings.callback_finish, e)
            },
            f = function(e) {
                for (var t, n = [], o = 0; t = e.children[o]; o += 1) "SOURCE" === t.tagName && n.push(t);
                return n
            },
            _ = function(e, t, n) {
                n && e.setAttribute(t, n)
            },
            m = function(e, t) {
                _(e, "sizes", s(e, t.data_sizes)), _(e, "srcset", s(e, t.data_srcset)), _(e, "src", s(e, t.data_src))
            },
            h = {
                IMG: function(e, t) {
                    var n = e.parentNode;
                    n && "PICTURE" === n.tagName && f(n).forEach(function(e) {
                        m(e, t)
                    }), m(e, t)
                },
                IFRAME: function(e, t) {
                    _(e, "src", s(e, t.data_src))
                },
                VIDEO: function(e, t) {
                    f(e).forEach(function(e) {
                        _(e, "src", s(e, t.data_src))
                    }), _(e, "poster", s(e, t.data_poster)), _(e, "src", s(e, t.data_src)), e.load()
                }
            },
            b = function(e, t) {
                o ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            },
            L = function(e, t) {
                o ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            y = function(e, t, n) {
                e.addEventListener(t, n)
            },
            A = function(e, t, n) {
                e.removeEventListener(t, n)
            },
            z = function(e, t, n) {
                A(e, "load", t), A(e, "loadeddata", t), A(e, "error", n)
            },
            v = function(e, t, n) {
                var o = n._settings,
                    a = t ? o.class_loaded : o.class_error,
                    r = t ? o.callback_loaded : o.callback_error,
                    i = e.target;
                L(i, o.class_loading), b(i, a), M(r, i, n), p(n, -1)
            },
            g = ["IMG", "IFRAME", "VIDEO"],
            T = function(e, t) {
                var n = t._observer;
                O(e, t), n && t._settings.auto_unobserve && n.unobserve(e)
            },
            k = function(e) {
                var t = l(e);
                t && (clearTimeout(t), u(e, null))
            },
            O = function(e, t, n) {
                var o = t._settings;
                !n && d(e) || (g.indexOf(e.tagName) > -1 && (function(e, t) {
                    var n = function n(a) {
                            v(a, !0, t), z(e, n, o)
                        },
                        o = function o(a) {
                            v(a, !1, t), z(e, n, o)
                        };
                    ! function(e, t, n) {
                        y(e, "load", t), y(e, "loadeddata", t), y(e, "error", n)
                    }(e, n, o)
                }(e, t), b(e, o.class_loading)), function(e, t) {
                    var n, o, a = t._settings,
                        r = e.tagName,
                        i = h[r];
                    if (i) return i(e, a), p(t, 1), void(t._elements = (n = t._elements, o = e, n.filter(function(e) {
                        return e !== o
                    })));
                    ! function(e, t) {
                        var n = s(e, t.data_src),
                            o = s(e, t.data_bg);
                        n && (e.style.backgroundImage = 'url("'.concat(n, '")')), o && (e.style.backgroundImage = o)
                    }(e, a)
                }(e, t), function(e) {
                    c(e, "was-processed", "true")
                }(e), M(o.callback_reveal, e, t), M(o.callback_set, e, t))
            },
            w = function(e) {
                return !!n && (e._observer = new IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                        return function(e) {
                            return e.isIntersecting || e.intersectionRatio > 0
                        }(t) ? function(e, t, n) {
                            var o = n._settings;
                            M(o.callback_enter, e, t, n), o.load_delay ? function(e, t) {
                                var n = t._settings.load_delay,
                                    o = l(e);
                                o || (o = setTimeout(function() {
                                    T(e, t), k(e)
                                }, n), u(e, o))
                            }(e, n) : T(e, n)
                        }(t.target, t, e) : function(e, t, n) {
                            var o = n._settings;
                            M(o.callback_exit, e, t, n), o.load_delay && k(e)
                        }(t.target, t, e)
                    })
                }, {
                    root: (t = e._settings).container === document ? null : t.container,
                    rootMargin: t.thresholds || t.threshold + "px"
                }), !0);
                var t
            },
            Y = ["IMG", "IFRAME"],
            D = function(e, t) {
                return function(e) {
                    return e.filter(function(e) {
                        return !d(e)
                    })
                }((n = e || function(e) {
                    return e.container.querySelectorAll(e.elements_selector)
                }(t), Array.prototype.slice.call(n)));
                var n
            },
            S = function(t, n) {
                var o;
                this._settings = r({}, a, t), this._loadingCount = 0, w(this), this.update(n), o = this, e && window.addEventListener("online", function(e) {
                    ! function(e) {
                        var t = e._settings;
                        (function(e) {
                            return function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                            }(e) || function(e) {
                                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance")
                            }()
                        })(t.container.querySelectorAll("." + t.class_error)).forEach(function(e) {
                            L(e, t.class_error),
                                function(e) {
                                    c(e, "was-processed", null)
                                }(e)
                        }), e.update()
                    }(o)
                })
            };
        return S.prototype = {
            update: function(e) {
                var n, o = this,
                    a = this._settings;
                this._elements = D(e, a), !t && this._observer ? (a.use_native && "loading" in HTMLImageElement.prototype && ((n = this)._elements.forEach(function(e) {
                    -1 !== Y.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), O(e, n))
                }), this._elements = D(e, a)), this._elements.forEach(function(e) {
                    o._observer.observe(e)
                })) : this.loadAll()
            },
            destroy: function() {
                var e = this;
                this._observer && (this._elements.forEach(function(t) {
                    e._observer.unobserve(t)
                }), this._observer = null), this._elements = null, this._settings = null
            },
            load: function(e, t) {
                O(e, this, t)
            },
            loadAll: function() {
                var e = this;
                this._elements.forEach(function(t) {
                    T(t, e)
                })
            }
        }, e && function(e, t) {
            if (t)
                if (t.length)
                    for (var n, o = 0; n = t[o]; o += 1) i(e, n);
                else i(e, t)
        }(S, window.lazyLoadOptions), S
    })
}, function(e, t, n) {
    "use strict";
    var o = n(120),
        a = "object" == typeof self && self && self.Object === Object && self,
        r = o.a || a || Function("return this")();
    t.a = r
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(99));
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, o.default)(e)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(100),
        __esModule: !0
    }
}, function(e, t, n) {
    n(46), n(101), e.exports = n(3).Array.from
}, function(e, t, n) {
    "use strict";
    var o = n(13),
        a = n(9),
        r = n(47),
        i = n(48),
        s = n(49),
        c = n(32),
        d = n(102),
        u = n(50);
    a(a.S + a.F * !n(51)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, a, l, M = r(e),
                p = "function" == typeof this ? this : Array,
                f = arguments.length,
                _ = f > 1 ? arguments[1] : void 0,
                m = void 0 !== _,
                h = 0,
                b = u(M);
            if (m && (_ = o(_, f > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b))
                for (n = new p(t = c(M.length)); t > h; h++) d(n, h, m ? _(M[h], h) : M[h]);
            else
                for (l = b.call(M), n = new p; !(a = l.next()).done; h++) d(n, h, m ? i(l, _, [a.value, h], !0) : a.value);
            return n.length = h, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(10),
        a = n(31);
    e.exports = function(e, t, n) {
        t in e ? o.f(e, t, a(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = t.animateRemoveItemFromCart = void 0;
        var o = n(52),
            a = n(54),
            r = n(8),
            i = n(33),
            s = window.shop.moneyFormatOverride || "${{amount_no_decimals}}",
            c = "[cart-container]",
            d = "[line-item]",
            u = "[line-item-remove]",
            l = "[line-item-qty]",
            M = "[line-item-subscription-checkbox]",
            p = "[line-item-subscription-interval]",
            f = "[line-item-subscription-interval-select]",
            _ = "[line-item-note]",
            m = function(t) {
                console.error(t), e(c).removeClass("is-loading")
            },
            h = t.animateRemoveItemFromCart = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.addClass("line-item--removed"), t || setTimeout(function() {
                    (0, i.updateCartUI)()
                }, 600)
            },
            b = function(t) {
                var n = e(t.currentTarget),
                    r = n.closest(d),
                    s = r.hasClass("is-pack"),
                    c = function() {
                        h(r), 0 == shop.cart.item_count && ((0, i.cartContentFadeOut)(), (0, a.resetDiscountUI)())
                    };
                if (n.attr("is-free-gift")) return n.trigger("blur"), c(), e("[cart-code-container]").hide(), setTimeout(function() {
                    e("[cart-code-container]").show(), (0, a.resetDiscount)()
                }, 250), !1;
                if (s) {
                    var u = parseInt(r.attr("data-pack-id"));
                    return (0, o.cartRemovePack)(u).then(c).catch(m)
                }
                var l = r.attr("data-item-key");
                return (0, o.cartRemove)(l).then(c).catch(m)
            },
            L = (0, r.debounce)(function(t) {
                var n = e(t.currentTarget),
                    a = n.closest(d),
                    r = a.hasClass("is-pack"),
                    i = n.val() >= 0 ? n.val() : 0;
                if (0 === i || "0" === i) return a.find(u).click();
                if (a.find("[line-item-qty]").val(i), r) {
                    var s = a.attr("data-pack-id") || !1;
                    (0, o.cartUpdatePack)(s, i).catch(m)
                } else {
                    var c = a.attr("data-item-key");
                    (0, o.cartChange)(c, i).catch(m)
                }
            }, 500),
            y = function(t) {
                var n = e(t.currentTarget),
                    a = n.closest(d),
                    r = n.attr("data-base-variant-id"),
                    s = n.attr("data-variant-id"),
                    u = a.attr("data-item-key"),
                    l = parseInt(n.attr("line-number")),
                    M = a.find("[line-item-qty]").val(),
                    p = l - 1,
                    f = window.shop.cart.items[p],
                    _ = Object.assign({}, f.properties),
                    h = n.is(":checked");
                if (e(c).addClass("is-loading"), h) {
                    var b = n.attr("line-item-sub-id"),
                        L = n.attr("line-item-sub-unit");
                    _.shipping_interval_frequency = window.shop.subscriptions.default_interval || 2, _.shipping_interval_unit_type = L, _.subscription_id = b, (0, o.cartRemove)(u, !0).then(function(e) {
                        return (0, o.cartAdd)(s, M, _)
                    }).then(i.updateCartUI).catch(m)
                } else delete _.subscription_id, delete _.shipping_interval_frequency, delete _.shipping_interval_unit_type, (0, o.cartRemove)(u, !0).then(function(e) {
                    return (0, o.cartAdd)(r, M, _)
                }).then(i.updateCartUI).catch(m)
            },
            A = function(t) {
                var n = e(t.currentTarget);
                n.val() < 0 && n.val(0);
                var o = n.closest(d),
                    a = n.val() >= 0 ? n.val() : 0,
                    i = o.attr("line-item-base-price"),
                    c = a * parseInt(i, 10) * 100;
                o.find("[data-price]").html((0, r.formatMoney)(c, s))
            },
            z = function(t) {
                var n = e(t.currentTarget),
                    o = n.closest(d),
                    a = n.is(":checked"),
                    i = o.find("[line-item-qty]").val(),
                    c = JSON.parse(n.attr("data-seasonal")),
                    u = a ? o.attr("data-subscription-price") : o.attr("data-base-price"),
                    l = parseInt(i, 10) * parseInt(u, 10) * 100;
                o.attr("line-item-base-price", u), o.find("[data-line-item-price] [data-price]").html((0, r.formatMoney)(l, s)), o.find("[data-item-note]").addClass("u-hidden"), c && a && o.find("[data-item-note]").removeClass("u-hidden")
            };
        t.init = function() {
            e(document).on("click", u, b), e(document).on("click", "[line-item-qty-adjust]", function(t) {
                var n = e(t.currentTarget),
                    o = n.siblings(l),
                    a = parseInt(n.attr("line-item-qty-adjust")),
                    r = parseInt(o.val()),
                    i = r + a;
                i <= (o.attr("max") ? parseInt(o.attr("max"), 10) : r + a) && o.val(i).trigger("change")
            }), e(document).on("change", l, L), e(document).on("change", l, A), e(document).on("change", M, y), e(document).on("change", M, z), e(document).on("change", f, function(t) {
                var n = e(t.currentTarget),
                    o = n.val();
                n.closest(d).find(p).filter('[data-dropdown-value="' + o + '"]').trigger("click")
            }), e(document).on("click", p, function(t) {
                var n = e(t.currentTarget),
                    a = n.find("[subscription-freq]").text(),
                    r = n.closest(d),
                    i = r.find(M),
                    s = parseInt(i.attr("line-number")),
                    c = r.find("[line-item-qty]").val(),
                    u = s - 1,
                    l = window.shop.cart.items[u],
                    p = Object.assign({}, l.properties);
                p.shipping_interval_frequency = a;
                var _ = r.attr("data-item-key");
                (0, o.cartChange)(_, c, p).catch(m), e(f).val(a), e(f).find("option").removeProp("selected").filter('[value="' + a + '"]').prop("selected", !0)
            }), e(document).on("click", "[line-item-note-toggle]", function(t) {
                t.stopPropagation();
                var n = e(t.currentTarget).closest(d).find(_),
                    o = n.hasClass("is-active");
                e(_).removeClass("is-active"), o || n.addClass("is-active")
            }), e(document).on("click", _, function(e) {
                e.stopPropagation()
            }), e(document).on("click", "body", function(t) {
                e(_ + ".is-active").length && e(_).removeClass("is-active")
            }), console.log("[BVA] Module Loaded: Line Item")
        }
    }).call(this, n(0))
}, , , function(e, t, n) {
    "use strict";
    n.r(t);
    var o = "data-section-id";

    function a(e, t) {
        this.container = function(e) {
            if (!(e instanceof Element)) throw new TypeError("Theme Sections: Attempted to load section. The section container provided is not a DOM element.");
            if (null === e.getAttribute(o)) throw new Error("Theme Sections: The section container provided does not have an id assigned to the " + o + " attribute.");
            return e
        }(e), this.id = e.getAttribute(o), this.extensions = [], Object.assign(this, function(e) {
            if (void 0 !== e && "object" != typeof e || null === e) throw new TypeError("Theme Sections: The properties object provided is not a valid");
            return e
        }(t)), this.onLoad()
    }
    a.prototype = {
        onLoad: Function.prototype,
        onUnload: Function.prototype,
        onSelect: Function.prototype,
        onDeselect: Function.prototype,
        onBlockSelect: Function.prototype,
        onBlockDeselect: Function.prototype,
        extend: function(e) {
            this.extensions.push(e);
            var t = Object.assign({}, e);
            delete t.init, Object.assign(this, t), "function" == typeof e.init && e.init.apply(this)
        }
    }, "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), o = 1; o < arguments.length; o++) {
                var a = arguments[o];
                if (null != a)
                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), n.d(t, "registered", function() {
        return i
    }), n.d(t, "instances", function() {
        return s
    }), n.d(t, "register", function() {
        return c
    }), n.d(t, "unregister", function() {
        return d
    }), n.d(t, "load", function() {
        return u
    }), n.d(t, "unload", function() {
        return l
    }), n.d(t, "extend", function() {
        return M
    }), n.d(t, "getInstances", function() {
        return p
    }), n.d(t, "getInstanceById", function() {
        return f
    }), n.d(t, "isInstance", function() {
        return _
    });
    var r = "data-section-type";
    window.Shopify = window.Shopify || {}, window.Shopify.theme = window.Shopify.theme || {}, window.Shopify.theme.sections = window.Shopify.theme.sections || {};
    var i = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {},
        s = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];

    function c(e, t) {
        if ("string" != typeof e) throw new TypeError("Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered");
        if (void 0 !== i[e]) throw new Error('Theme Sections: A section of type "' + e + '" has already been registered. You cannot register the same section type twice');

        function n(e) {
            a.call(this, e, t)
        }
        return n.constructor = a, n.prototype = Object.create(a.prototype), n.prototype.type = e, i[e] = n
    }

    function d(e) {
        (e = m(e)).forEach(function(e) {
            delete i[e]
        })
    }

    function u(e, t) {
        e = m(e), void 0 === t && (t = document.querySelectorAll("[" + r + "]")), t = h(t), e.forEach(function(e) {
            var n = i[e];
            void 0 !== n && (t = t.filter(function(t) {
                return !(_(t) || null === t.getAttribute(r) || t.getAttribute(r) === e && (s.push(new n(t)), 1))
            }))
        })
    }

    function l(e) {
        p(e).forEach(function(e) {
            var t = s.map(function(e) {
                return e.id
            }).indexOf(e.id);
            s.splice(t, 1), e.onUnload()
        })
    }

    function M(e, t) {
        p(e).forEach(function(e) {
            e.extend(t)
        })
    }

    function p(e) {
        var t = [];
        if (NodeList.prototype.isPrototypeOf(e) || Array.isArray(e)) var n = e[0];
        return e instanceof Element || n instanceof Element ? h(e).forEach(function(e) {
            t = t.concat(s.filter(function(t) {
                return t.container === e
            }))
        }) : "string" != typeof e && "string" != typeof n || m(e).forEach(function(e) {
            t = t.concat(s.filter(function(t) {
                return t.type === e
            }))
        }), t
    }

    function f(e) {
        for (var t, n = 0; n < s.length; n++)
            if (s[n].id === e) {
                t = s[n];
                break
            }
        return t
    }

    function _(e) {
        return p(e).length > 0
    }

    function m(e) {
        return "*" === e ? e = Object.keys(i) : "string" == typeof e ? e = [e] : e.constructor === a ? e = [e.prototype.type] : Array.isArray(e) && e[0].constructor === a && (e = e.map(function(e) {
            return e.prototype.type
        })), e.map(function(e) {
            return e.toLowerCase()
        })
    }

    function h(e) {
        return NodeList.prototype.isPrototypeOf(e) && e.length > 0 ? e = Array.prototype.slice.call(e) : NodeList.prototype.isPrototypeOf(e) && 0 === e.length ? e = [] : null === e ? e = [] : !Array.isArray(e) && e instanceof Element && (e = [e]), e
    }
    window.Shopify.designMode && (document.addEventListener("shopify:section:load", function(e) {
        var t = e.detail.sectionId,
            n = e.target.querySelector('[data-section-id="' + t + '"]');
        null !== n && u(n.getAttribute(r), n)
    }), document.addEventListener("shopify:section:unload", function(e) {
        var t = e.detail.sectionId,
            n = e.target.querySelector('[data-section-id="' + t + '"]');
        "object" == typeof p(n)[0] && l(n)
    }), document.addEventListener("shopify:section:select", function(e) {
        var t = f(e.detail.sectionId);
        "object" == typeof t && t.onSelect(e.detail.load)
    }), document.addEventListener("shopify:section:deselect", function(e) {
        var t = f(e.detail.sectionId);
        "object" == typeof t && t.onDeselect()
    }), document.addEventListener("shopify:block:select", function(e) {
        var t = f(e.detail.sectionId);
        "object" == typeof t && t.onBlockSelect(e.detail.blockId, e.detail.load)
    }), document.addEventListener("shopify:block:deselect", function(e) {
        var t = f(e.detail.sectionId);
        "object" == typeof t && t.onBlockDeselect(e.detail.blockId)
    }))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.bindUIActions = t.setupUpsellModalContent = void 0;
        var o = n(29),
            a = n(8),
            r = "[pdp-atc]",
            i = "[data-is-upsell-atc]",
            s = '[data-modal="upsell"]',
            c = "[data-upsell-select]",
            d = "[data-dropdown]",
            u = "[data-dropdown-value]",
            l = (t.setupUpsellModalContent = function(t) {
                var n = t;
                window.UPSELL_OVERRIDES && window.UPSELL_OVERRIDES.hasOwnProperty(window.shop.activeProduct.id) && (n = window.UPSELL_OVERRIDES[window.shop.activeProduct.id]);
                var c = "products/" + n,
                    d = (e(r).attr("data-qty"), e(r).attr("data-variant-id"), e(r).attr("data-product-title"));
                e(r).is("[pack-title]"), (0, a.getAlternativeTemplate)(c, "upsell").then(function(t) {
                    e('[modal-content="upsell"]').html(t), (0, o.show)("upsell"), e("[data-overlay]").addClass("is-no-click overlay--upsell-dark"), e(s).find(".modal__close").attr("data-toggle-inline-cart", !0), e(s).find("[upsell-link]").attr("data-toggle-inline-cart", !0), -1 !== n.indexOf("pack") && (e(s).find(i).removeClass("u-hidden"), e(s).find(".modal__close--link").addClass("u-hidden"), e(s).find(".js-upsell-title").each(function(t, n) {
                        var o = e(n),
                            a = o.text();
                        o.text(a.replace("{scent}", d))
                    }))
                })
            }, function(t) {
                var n = e("[data-upsell-select-dropdown]").get(0);
                if (t.detail.container.contains(n)) {
                    var o = e(n),
                        a = (o.closest("form"), o.closest(d).find(u).filter(".is-active")),
                        r = a.text(),
                        l = a.attr("data-product-desc"),
                        M = a.attr("data-dropdown-value"),
                        p = a.attr("data-product-image-srcset");
                    e("[subscription-upsell-title]").text(r), e("[subscription-upsell-desc]").html(l), e(c).val(M), e("[subscription-upsell-image]").attr("src", p.split(",")[0]).attr("srcset", p).attr("data-srcset", p), e(s).find(i).attr("data-variant-id", M)
                }
            }),
            M = function(t) {
                var n = e(t.currentTarget),
                    o = n.val();
                n.closest(d).find(u).filter('[data-dropdown-value="' + o + '"]').trigger("click")
            };
        t.bindUIActions = function() {
            document.addEventListener("dropdown.updated", l), e(document).on("change", c, M)
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setupUpsellModalContent = void 0;
        var o = n(29),
            a = n(8),
            r = "[pdp-atc]",
            i = '[data-modal="subscription-upsell"]';
        t.setupUpsellModalContent = function(t) {
            var n = "products/" + t,
                s = e(r).attr("data-qty") || 1;
            e(r).attr("data-variant-id"), (0, a.getAlternativeTemplate)(n, "subscription-upsell").then(function(t) {
                e('[modal-content="subscription-upsell"]').html(t), (0, o.show)("subscription-upsell"), e("[data-overlay]").addClass("is-no-click overlay--upsell-dark"), e(i).find("[data-is-upsell-atc]").attr("data-qty", s), e(i).find(".modal__close").attr("data-toggle-inline-cart", !0), e(i).find("[upsell-link]").attr("data-toggle-inline-cart", !0)
            })
        }
    }).call(this, n(0))
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(97),
            a = n(250),
            r = "object" == typeof exports && exports && !exports.nodeType && exports,
            i = r && "object" == typeof e && e && !e.nodeType && e,
            s = i && i.exports === r ? o.a.Buffer : void 0,
            c = (s ? s.isBuffer : void 0) || a.a;
        t.a = c
    }).call(this, n(126)(e))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(19))
}, , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(120),
            a = "object" == typeof exports && exports && !exports.nodeType && exports,
            r = a && "object" == typeof e && e && !e.nodeType && e,
            i = r && r.exports === a && o.a.process,
            s = function() {
                try {
                    return r && r.require && r.require("util").types || i && i.binding && i.binding("util")
                } catch (e) {}
            }();
        t.a = s
    }).call(this, n(126)(e))
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[MÃ´re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "Ù¡",
                2: "Ù¢",
                3: "Ù£",
                4: "Ù¤",
                5: "Ù¥",
                6: "Ù¦",
                7: "Ù§",
                8: "Ù¨",
                9: "Ù©",
                0: "Ù "
            },
            n = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            },
            o = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            a = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            },
            r = function(e) {
                return function(t, n, r, i) {
                    var s = o(t),
                        c = a[e][o(t)];
                    return 2 === s && (c = c[n ? 0 : 1]), c.replace(/%d/i, t)
                }
            },
            i = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) {
                    return n[e]
                }).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ar-dz", {
            months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø£Ø­_Ø¥Ø«_Ø«Ù„Ø§_Ø£Ø±_Ø®Ù…_Ø¬Ù…_Ø³Ø¨".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ar-kw", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            },
            n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            o = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            },
            a = function(e) {
                return function(t, a, r, i) {
                    var s = n(t),
                        c = o[e][n(t)];
                    return 2 === s && (c = c[a ? 0 : 1]), c.replace(/%d/i, t)
                }
            },
            r = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: a("s"),
                ss: a("s"),
                m: a("m"),
                mm: a("m"),
                h: a("h"),
                hh: a("h"),
                d: a("d"),
                dd: a("d"),
                M: a("M"),
                MM: a("M"),
                y: a("y"),
                yy: a("y")
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ar-ma", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "Ù¡",
                2: "Ù¢",
                3: "Ù£",
                4: "Ù¤",
                5: "Ù¥",
                6: "Ù¦",
                7: "Ù§",
                8: "Ù¨",
                9: "Ù©",
                0: "Ù "
            },
            n = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            };
        e.defineLocale("ar-sa", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            preparse: function(e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) {
                    return n[e]
                }).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ar-tn", {
            months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-Ã¼ncÃ¼",
            4: "-Ã¼ncÃ¼",
            100: "-Ã¼ncÃ¼",
            6: "-ncÄ±",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-Ä±ncÄ±",
            90: "-Ä±ncÄ±"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
            weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
            weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
                lastDay: "[dÃ¼nÉ™n] LT",
                lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s É™vvÉ™l",
                s: "birneÃ§É™ saniyÉ™",
                ss: "%d saniyÉ™",
                m: "bir dÉ™qiqÉ™",
                mm: "%d dÉ™qiqÉ™",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
            isPM: function(e) {
                return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-Ä±ncÄ±";
                var n = e % 10;
                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return "m" === n ? t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : e + " " + function(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }({
                ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
                hh: t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
                dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
                yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
            }[n], +e)
        }
        n(4).defineLocale("be", {
            months: {
                format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
                standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
            weekdays: {
                format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
            },
            calendar: {
                sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
                nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
                lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
                nextWeek: function() {
                    return "[Ð£] dddd [Ñž] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¿Ñ€Ð°Ð· %s",
                past: "%s Ñ‚Ð°Ð¼Ñƒ",
                s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "Ð´Ð·ÐµÐ½ÑŒ",
                dd: t,
                M: "Ð¼ÐµÑÑÑ†",
                MM: t,
                y: "Ð³Ð¾Ð´",
                yy: t
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
            isPM: function(e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ñ‹" : e < 12 ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-Ñ‹" : e + "-Ñ–";
                    case "D":
                        return e + "-Ð³Ð°";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("bg", {
            months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                nextWeek: "dddd [Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "ÑÐ»ÐµÐ´ %s",
                past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
                s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "Ð´ÐµÐ½",
                dd: "%d Ð´Ð½Ð¸",
                M: "Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
                y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
            weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lÉ›rÉ›] LT",
                nextDay: "[Sini lÉ›rÉ›] LT",
                nextWeek: "dddd [don lÉ›rÉ›] LT",
                lastDay: "[Kunu lÉ›rÉ›] LT",
                lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kÉ”nÉ”",
                past: "a bÉ› %s bÉ”",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lÉ›rÉ› kelen",
                hh: "lÉ›rÉ› %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à§§",
                2: "à§¨",
                3: "à§©",
                4: "à§ª",
                5: "à§«",
                6: "à§¬",
                7: "à§­",
                8: "à§®",
                9: "à§¯",
                0: "à§¦"
            },
            n = {
                "à§§": "1",
                "à§¨": "2",
                "à§©": "3",
                "à§ª": "4",
                "à§«": "5",
                "à§¬": "6",
                "à§­": "7",
                "à§®": "8",
                "à§¯": "9",
                "à§¦": "0"
            };
        e.defineLocale("bn", {
            months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
            monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦†à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
            weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
            weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦ƒ_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            longDateFormat: {
                LT: "A h:mm à¦¸à¦®à§Ÿ",
                LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
            },
            calendar: {
                sameDay: "[à¦†à¦œ] LT",
                nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
                lastWeek: "[à¦—à¦¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¦ªà¦°à§‡",
                past: "%s à¦†à¦—à§‡",
                s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
                hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
                d: "à¦à¦• à¦¦à¦¿à¦¨",
                dd: "%d à¦¦à¦¿à¦¨",
                M: "à¦à¦• à¦®à¦¾à¦¸",
                MM: "%d à¦®à¦¾à¦¸",
                y: "à¦à¦• à¦¬à¦›à¦°",
                yy: "%d à¦¬à¦›à¦°"
            },
            preparse: function(e) {
                return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t && e >= 4 || "à¦¦à§à¦ªà§à¦°" === t && e < 5 || "à¦¬à¦¿à¦•à¦¾à¦²" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¦°à¦¾à¦¤" : e < 10 ? "à¦¸à¦•à¦¾à¦²" : e < 17 ? "à¦¦à§à¦ªà§à¦°" : e < 20 ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à¼¡",
                2: "à¼¢",
                3: "à¼£",
                4: "à¼¤",
                5: "à¼¥",
                6: "à¼¦",
                7: "à¼§",
                8: "à¼¨",
                9: "à¼©",
                0: "à¼ "
            },
            n = {
                "à¼¡": "1",
                "à¼¢": "2",
                "à¼£": "3",
                "à¼¤": "4",
                "à¼¥": "5",
                "à¼¦": "6",
                "à¼§": "7",
                "à¼¨": "8",
                "à¼©": "9",
                "à¼ ": "0"
            };
        e.defineLocale("bo", {
            months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
            monthsShort: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
            weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysMin: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
                nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
                nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
                lastDay: "[à½à¼‹à½¦à½„] LT",
                lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à½£à¼‹",
                past: "%s à½¦à¾”à½“à¼‹à½£",
                s: "à½£à½˜à¼‹à½¦à½„",
                ss: "%d à½¦à¾à½¢à¼‹à½†à¼",
                m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
                mm: "%d à½¦à¾à½¢à¼‹à½˜",
                h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
                hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
                d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
                dd: "%d à½‰à½²à½“à¼‹",
                M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
                MM: "%d à½Ÿà¾³à¼‹à½–",
                y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
                yy: "%d à½£à½¼"
            },
            preparse: function(e) {
                return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === t && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === t && e < 5 || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à½˜à½šà½“à¼‹à½˜à½¼" : e < 10 ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : e < 17 ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : e < 20 ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e)
        }
        n(4).defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoÃ¹",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "aÃ±" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var o = e + " ";
            switch (n) {
                case "ss":
                    return o + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return o + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return o + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                case "dd":
                    return o + (1 === e ? "dan" : "dana");
                case "MM":
                    return o + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                case "yy":
                    return o + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
            }
        }
        n(4).defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ca", {
            months: {
                standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquÃ­ %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
            n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_");

        function o(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function a(e, t, n, a) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                case "ss":
                    return t || a ? r + (o(e) ? "sekundy" : "sekund") : r + "sekundami";
                case "m":
                    return t ? "minuta" : a ? "minutu" : "minutou";
                case "mm":
                    return t || a ? r + (o(e) ? "minuty" : "minut") : r + "minutami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? r + (o(e) ? "hodiny" : "hodin") : r + "hodinami";
                case "d":
                    return t || a ? "den" : "dnem";
                case "dd":
                    return t || a ? r + (o(e) ? "dny" : "dnÃ­") : r + "dny";
                case "M":
                    return t || a ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                case "MM":
                    return t || a ? r + (o(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : r + "mÄ›sÃ­ci";
                case "y":
                    return t || a ? "rok" : "rokem";
                case "yy":
                    return t || a ? r + (o(e) ? "roky" : "let") : r + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsParse: function(e, t) {
                var n, o = [];
                for (n = 0; n < 12; n++) o[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return o
            }(t, n),
            shortMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(n),
            longMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(t),
            weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
            weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zÃ­tra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve stÅ™edu v] LT";
                        case 4:
                            return "[ve Ätvrtek v] LT";
                        case 5:
                            return "[v pÃ¡tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[vÄera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[minulÃ©] dddd [v] LT";
                        case 3:
                            return "[minulou stÅ™edu v] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pÅ™ed %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("cv", {
            months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
            monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
            weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
            weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
            weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
                LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
                LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
            },
            calendar: {
                sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½")
                },
                past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
                s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                ss: "%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
                hh: "%d ÑÐµÑ…ÐµÑ‚",
                d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
                MM: "%d ÑƒÐ¹Ó‘Ñ…",
                y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
                yy: "%d Ò«ÑƒÐ»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
            ordinal: "%d-Ð¼Ó—Ñˆ",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn Ã´l",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "pÃ¥ dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "fÃ¥ sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "et Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        n(4).defineLocale("de", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        n(4).defineLocale("de-at", {
            months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        n(4).defineLocale("de-ch", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
            n = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
            isPM: function(e) {
                return "Þ‰ÞŠ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Þ‰Þ†" : "Þ‰ÞŠ"
            },
            calendar: {
                sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
                nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
                nextWeek: "dddd LT",
                lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
                lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
                past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
                s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
                ss: "d% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª",
                m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
                mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
                h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
                hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
                d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
                dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
                M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
                MM: "Þ‰Þ¦ÞÞ° %d",
                y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
                yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("el", {
            monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
            monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
            weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
            weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
            weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "Î¼Î¼" : "ÎœÎœ" : n ? "Ï€Î¼" : "Î Îœ"
            },
            isPM: function(e) {
                return "Î¼" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                        default:
                            return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n = this._calendarEl[e],
                    o = t && t.hours();
                return function(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }(n) && (n = n.apply(t)), n.replace("{}", o % 12 == 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
            },
            relativeTime: {
                future: "ÏƒÎµ %s",
                past: "%s Ï€ÏÎ¹Î½",
                s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                ss: "%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
                mm: "%d Î»ÎµÏ€Ï„Î¬",
                h: "Î¼Î¯Î± ÏŽÏÎ±",
                hh: "%d ÏŽÏÎµÏ‚",
                d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
                dd: "%d Î¼Î­ÏÎµÏ‚",
                M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
                MM: "%d Î¼Î®Î½ÎµÏ‚",
                y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
                yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Î·/,
            ordinal: "%dÎ·",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"),
            weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[HodiaÅ­ je] LT",
                nextDay: "[MorgaÅ­ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[HieraÅ­ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaÅ­ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            o = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, o) {
                return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            o = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, o) {
                return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, o) {
                return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "MMMM [de] D [de] YYYY",
                LLL: "MMMM [de] D [de] YYYY h:mm A",
                LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["Ã¼he minuti", "Ã¼ks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
                M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : o ? a[n][0] : a[n][1]
        }
        n(4).defineLocale("et", {
            months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[TÃ¤na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[JÃ¤rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤rast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d pÃ¤eva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "Û±",
                2: "Û²",
                3: "Û³",
                4: "Û´",
                5: "Ûµ",
                6: "Û¶",
                7: "Û·",
                8: "Û¸",
                9: "Û¹",
                0: "Û°"
            },
            n = {
                "Û±": "1",
                "Û²": "2",
                "Û³": "3",
                "Û´": "4",
                "Ûµ": "5",
                "Û¶": "6",
                "Û·": "7",
                "Û¸": "8",
                "Û¹": "9",
                "Û°": "0"
            };
        e.defineLocale("fa", {
            months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
            isPM: function(e) {
                return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
            },
            calendar: {
                sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
                nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
                lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¯Ø± %s",
                past: "%s Ù¾ÛŒØ´",
                s: "Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡",
                ss: "Ø«Ø§Ù†ÛŒÙ‡ d%",
                m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
                mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
                h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
                hh: "%d Ø³Ø§Ø¹Øª",
                d: "ÛŒÚ© Ø±ÙˆØ²",
                dd: "%d Ø±ÙˆØ²",
                M: "ÛŒÚ© Ù…Ø§Ù‡",
                MM: "%d Ù…Ø§Ù‡",
                y: "ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function(e) {
                return e.replace(/[Û°-Û¹]/g, function(e) {
                    return n[e]
                }).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "ØŒ")
            },
            dayOfMonthOrdinalParse: /\d{1,2}Ù…/,
            ordinal: "%dÙ…",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", t[7], t[8], t[9]];

        function o(e, o, a, r) {
            var i = "";
            switch (a) {
                case "s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return r ? "sekunnin" : "sekuntia";
                case "m":
                    return r ? "minuutin" : "minuutti";
                case "mm":
                    i = r ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return r ? "tunnin" : "tunti";
                case "hh":
                    i = r ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return r ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case "dd":
                    i = r ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case "M":
                    return r ? "kuukauden" : "kuukausi";
                case "MM":
                    i = r ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return r ? "vuoden" : "vuosi";
                case "yy":
                    i = r ? "vuoden" : "vuotta"
            }
            return function(e, o) {
                return e < 10 ? r ? n[e] : t[e] : e
            }(e) + " " + i
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤Ã¤stÃ¤",
                past: "%s sitten",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("fo", {
            months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
            weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ã dag kl.] LT",
                nextDay: "[Ã morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã gjÃ¡r kl.] LT",
                lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s sÃ­Ã°ani",
                s: "fÃ¡ sekund",
                ss: "%d sekundir",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tÃ­mi",
                hh: "%d tÃ­mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mÃ¡naÃ°i",
                MM: "%d mÃ¡naÃ°ir",
                y: "eitt Ã¡r",
                yy: "%d Ã¡r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("fr", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("fr-ca", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("fr-ch", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, o) {
                return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minÃºt",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
            monthsShort: ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
            monthsParseExact: !0,
            weekdays: ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-mÃ ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dÃ¨ aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mÃ¬os",
                MM: "%d mÃ¬osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mÃ©_xo_ve_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka horan", "ek hor"],
                hh: [e + " horanim", e + " horam"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? a[n][0] : a[n][1]
        }
        n(4).defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à«§",
                2: "à«¨",
                3: "à«©",
                4: "à«ª",
                5: "à««",
                6: "à«¬",
                7: "à«­",
                8: "à«®",
                9: "à«¯",
                0: "à«¦"
            },
            n = {
                "à«§": "1",
                "à«¨": "2",
                "à«©": "3",
                "à«ª": "4",
                "à««": "5",
                "à«¬": "6",
                "à«­": "7",
                "à«®": "8",
                "à«¯": "9",
                "à«¦": "0"
            };
        e.defineLocale("gu", {
            months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"),
            monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"),
            monthsParseExact: !0,
            weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"),
            weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"),
            weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"),
            longDateFormat: {
                LT: "A h:mm àªµàª¾àª—à«àª¯à«‡",
                LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡"
            },
            calendar: {
                sameDay: "[àª†àªœ] LT",
                nextDay: "[àª•àª¾àª²à«‡] LT",
                nextWeek: "dddd, LT",
                lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT",
                lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s àª®àª¾",
                past: "%s àªªà«‡àª¹àª²àª¾",
                s: "àª…àª®à«àª• àªªàª³à«‹",
                ss: "%d àª¸à«‡àª•àª‚àª¡",
                m: "àªàª• àª®àª¿àª¨àª¿àªŸ",
                mm: "%d àª®àª¿àª¨àª¿àªŸ",
                h: "àªàª• àª•àª²àª¾àª•",
                hh: "%d àª•àª²àª¾àª•",
                d: "àªàª• àª¦àª¿àªµàª¸",
                dd: "%d àª¦àª¿àªµàª¸",
                M: "àªàª• àª®àª¹àª¿àª¨à«‹",
                MM: "%d àª®àª¹àª¿àª¨à«‹",
                y: "àªàª• àªµàª°à«àª·",
                yy: "%d àªµàª°à«àª·"
            },
            preparse: function(e) {
                return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "àª°àª¾àª¤" === t ? e < 4 ? e : e + 12 : "àª¸àªµàª¾àª°" === t ? e : "àª¬àªªà«‹àª°" === t ? e >= 10 ? e : e + 12 : "àª¸àª¾àª‚àªœ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "àª°àª¾àª¤" : e < 10 ? "àª¸àªµàª¾àª°" : e < 17 ? "àª¬àªªà«‹àª°" : e < 20 ? "àª¸àª¾àª‚àªœ" : "àª°àª¾àª¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("he", {
            months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
            monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
            weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
            weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
            weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [×‘]MMMM YYYY",
                LLL: "D [×‘]MMMM YYYY HH:mm",
                LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[×”×™×•× ×‘Ö¾]LT",
                nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
                nextWeek: "dddd [×‘×©×¢×”] LT",
                lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
                lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "×‘×¢×•×“ %s",
                past: "×œ×¤× ×™ %s",
                s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
                ss: "%d ×©× ×™×•×ª",
                m: "×“×§×”",
                mm: "%d ×“×§×•×ª",
                h: "×©×¢×”",
                hh: function(e) {
                    return 2 === e ? "×©×¢×ª×™×™×" : e + " ×©×¢×•×ª"
                },
                d: "×™×•×",
                dd: function(e) {
                    return 2 === e ? "×™×•×ž×™×™×" : e + " ×™×ž×™×"
                },
                M: "×—×•×“×©",
                MM: function(e) {
                    return 2 === e ? "×—×•×“×©×™×™×" : e + " ×—×•×“×©×™×"
                },
                y: "×©× ×”",
                yy: function(e) {
                    return 2 === e ? "×©× ×ª×™×™×" : e % 10 == 0 && 10 !== e ? e + " ×©× ×”" : e + " ×©× ×™×"
                }
            },
            meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
            isPM: function(e) {
                return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "×œ×¤× ×•×ª ×‘×•×§×¨" : e < 10 ? "×‘×‘×•×§×¨" : e < 12 ? n ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : e < 18 ? n ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à¥§",
                2: "à¥¨",
                3: "à¥©",
                4: "à¥ª",
                5: "à¥«",
                6: "à¥¬",
                7: "à¥­",
                8: "à¥®",
                9: "à¥¯",
                0: "à¥¦"
            },
            n = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };
        e.defineLocale("hi", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤¬à¤œà¥‡",
                LTS: "A h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤•à¤²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤²] LT",
                lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¤®à¥‡à¤‚",
                past: "%s à¤ªà¤¹à¤²à¥‡",
                s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
                ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡",
                m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
                h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
                hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
                MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
                y: "à¤à¤• à¤µà¤°à¥à¤·",
                yy: "%d à¤µà¤°à¥à¤·"
            },
            preparse: function(e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === t ? e < 4 ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === t ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === t ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¤°à¤¾à¤¤" : e < 10 ? "à¤¸à¥à¤¬à¤¹" : e < 17 ? "à¤¦à¥‹à¤ªà¤¹à¤°" : e < 20 ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var o = e + " ";
            switch (n) {
                case "ss":
                    return o + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return o + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return o + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                case "dd":
                    return o + (1 === e ? "dan" : "dana");
                case "MM":
                    return o + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                case "yy":
                    return o + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
            }
        }
        n(4).defineLocale("hr", {
            months: {
                format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");

        function n(e, t, n, o) {
            var a = e;
            switch (n) {
                case "s":
                    return o || t ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case "ss":
                    return a + (o || t) ? " mÃ¡sodperc" : " mÃ¡sodperce";
                case "m":
                    return "egy" + (o || t ? " perc" : " perce");
                case "mm":
                    return a + (o || t ? " perc" : " perce");
                case "h":
                    return "egy" + (o || t ? " Ã³ra" : " Ã³rÃ¡ja");
                case "hh":
                    return a + (o || t ? " Ã³ra" : " Ã³rÃ¡ja");
                case "d":
                    return "egy" + (o || t ? " nap" : " napja");
                case "dd":
                    return a + (o || t ? " nap" : " napja");
                case "M":
                    return "egy" + (o || t ? " hÃ³nap" : " hÃ³napja");
                case "MM":
                    return a + (o || t ? " hÃ³nap" : " hÃ³napja");
                case "y":
                    return "egy" + (o || t ? " Ã©v" : " Ã©ve");
                case "yy":
                    return a + (o || t ? " Ã©v" : " Ã©ve")
            }
            return ""
        }

        function o(e) {
            return (e ? "" : "[mÃºlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
            monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
            weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return o.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return o.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s mÃºlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("hy-am", {
            months: {
                format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
                standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
            },
            monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
            weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
            weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Õ©.",
                LLL: "D MMMM YYYY Õ©., HH:mm",
                LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
            },
            calendar: {
                sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
                nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
                lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
                nextWeek: function() {
                    return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                lastWeek: function() {
                    return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Õ°Õ¥Õ¿Õ¸",
                past: "%s Õ¡Õ¼Õ¡Õ»",
                s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                ss: "%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                m: "Ö€Õ¸ÕºÕ¥",
                mm: "%d Ö€Õ¸ÕºÕ¥",
                h: "ÕªÕ¡Õ´",
                hh: "%d ÕªÕ¡Õ´",
                d: "Ö…Ö€",
                dd: "%d Ö…Ö€",
                M: "Õ¡Õ´Õ«Õ½",
                MM: "%d Õ¡Õ´Õ«Õ½",
                y: "Õ¿Õ¡Ö€Õ«",
                yy: "%d Õ¿Õ¡Ö€Õ«"
            },
            meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
            isPM: function(e) {
                return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : e < 12 ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : e < 17 ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-Õ«Õ¶" : e + "-Ö€Õ¤";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, o, a) {
            var r = e + " ";
            switch (o) {
                case "s":
                    return n || a ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case "ss":
                    return t(e) ? r + (n || a ? "sekÃºndur" : "sekÃºndum") : r + "sekÃºnda";
                case "m":
                    return n ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                case "mm":
                    return t(e) ? r + (n || a ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : n ? r + "mÃ­nÃºta" : r + "mÃ­nÃºtu";
                case "hh":
                    return t(e) ? r + (n || a ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                case "d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? r + "dagar" : r + (a ? "daga" : "dÃ¶gum") : n ? r + "dagur" : r + (a ? "dag" : "degi");
                case "M":
                    return n ? "mÃ¡nuÃ°ur" : a ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case "MM":
                    return t(e) ? n ? r + "mÃ¡nuÃ°ir" : r + (a ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : n ? r + "mÃ¡nuÃ°ur" : r + (a ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case "y":
                    return n || a ? "Ã¡r" : "Ã¡ri";
                case "yy":
                    return t(e) ? r + (n || a ? "Ã¡r" : "Ã¡rum") : r + (n || a ? "Ã¡r" : "Ã¡ri")
            }
        }
        e.defineLocale("is", {
            months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
            weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[Ã­ dag kl.] LT",
                nextDay: "[Ã¡ morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã­ gÃ¦r kl.] LT",
                lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s sÃ­Ã°an",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ja", {
            months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
            weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm"
            },
            meridiemParse: /åˆå‰|åˆå¾Œ/i,
            isPM: function(e) {
                return "åˆå¾Œ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "åˆå‰" : "åˆå¾Œ"
            },
            calendar: {
                sameDay: "[ä»Šæ—¥] LT",
                nextDay: "[æ˜Žæ—¥] LT",
                nextWeek: function(e) {
                    return e.week() < this.week() ? "[æ¥é€±]dddd LT" : "dddd LT"
                },
                lastDay: "[æ˜¨æ—¥] LT",
                lastWeek: function(e) {
                    return this.week() < e.week() ? "[å…ˆé€±]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "æ•°ç§’",
                ss: "%dç§’",
                m: "1åˆ†",
                mm: "%dåˆ†",
                h: "1æ™‚é–“",
                hh: "%dæ™‚é–“",
                d: "1æ—¥",
                dd: "%dæ—¥",
                M: "1ãƒ¶æœˆ",
                MM: "%dãƒ¶æœˆ",
                y: "1å¹´",
                yy: "%då¹´"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ka", {
            months: {
                standalone: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
                format: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")
            },
            monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
            weekdays: {
                standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
                format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
                isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
            },
            weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
            weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
                nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
                lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
                nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
                lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(e) ? e.replace(/áƒ˜$/, "áƒ¨áƒ˜") : e + "áƒ¨áƒ˜"
                },
                past: function(e) {
                    return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e) ? e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(e) ? e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0
                },
                s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
                ss: "%d áƒ¬áƒáƒ›áƒ˜",
                m: "áƒ¬áƒ£áƒ—áƒ˜",
                mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
                h: "áƒ¡áƒáƒáƒ—áƒ˜",
                hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
                d: "áƒ“áƒ¦áƒ”",
                dd: "%d áƒ“áƒ¦áƒ”",
                M: "áƒ—áƒ•áƒ”",
                MM: "%d áƒ—áƒ•áƒ”",
                y: "áƒ¬áƒ”áƒšáƒ˜",
                yy: "%d áƒ¬áƒ”áƒšáƒ˜"
            },
            dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-áƒšáƒ˜" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "áƒ›áƒ”-" + e : e + "-áƒ”"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ÑˆÑ–",
            1: "-ÑˆÑ–",
            2: "-ÑˆÑ–",
            3: "-ÑˆÑ–",
            4: "-ÑˆÑ–",
            5: "-ÑˆÑ–",
            6: "-ÑˆÑ‹",
            7: "-ÑˆÑ–",
            8: "-ÑˆÑ–",
            9: "-ÑˆÑ‹",
            10: "-ÑˆÑ‹",
            20: "-ÑˆÑ‹",
            30: "-ÑˆÑ‹",
            40: "-ÑˆÑ‹",
            50: "-ÑˆÑ–",
            60: "-ÑˆÑ‹",
            70: "-ÑˆÑ–",
            80: "-ÑˆÑ–",
            90: "-ÑˆÑ‹",
            100: "-ÑˆÑ–"
        };
        e.defineLocale("kk", {
            months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
            monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
            weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
            weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
            weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
                past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
                s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
                hh: "%d ÑÐ°Ò“Ð°Ñ‚",
                d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ñ–Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "áŸ¡",
                2: "áŸ¢",
                3: "áŸ£",
                4: "áŸ¤",
                5: "áŸ¥",
                6: "áŸ¦",
                7: "áŸ§",
                8: "áŸ¨",
                9: "áŸ©",
                0: "áŸ "
            },
            n = {
                "áŸ¡": "1",
                "áŸ¢": "2",
                "áŸ£": "3",
                "áŸ¤": "4",
                "áŸ¥": "5",
                "áŸ¦": "6",
                "áŸ§": "7",
                "áŸ¨": "8",
                "áŸ©": "9",
                "áŸ ": "0"
            };
        e.defineLocale("km", {
            months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
            weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
            weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
            isPM: function(e) {
                return "áž›áŸ’áž„áž¶áž…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…"
            },
            calendar: {
                sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
                nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
                nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
                lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
                lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sáž‘áŸ€áž",
                past: "%sáž˜áž»áž“",
                s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
                ss: "%d ážœáž·áž“áž¶áž‘áž¸",
                m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
                mm: "%d áž“áž¶áž‘áž¸",
                h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
                hh: "%d áž˜áŸ‰áŸ„áž„",
                d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
                dd: "%d ážáŸ’áž„áŸƒ",
                M: "áž˜áž½áž™ážáŸ‚",
                MM: "%d ážáŸ‚",
                y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
                yy: "%d áž†áŸ’áž“áž¶áŸ†"
            },
            dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
            ordinal: "áž‘áž¸%d",
            preparse: function(e) {
                return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à³§",
                2: "à³¨",
                3: "à³©",
                4: "à³ª",
                5: "à³«",
                6: "à³¬",
                7: "à³­",
                8: "à³®",
                9: "à³¯",
                0: "à³¦"
            },
            n = {
                "à³§": "1",
                "à³¨": "2",
                "à³©": "3",
                "à³ª": "4",
                "à³«": "5",
                "à³¬": "6",
                "à³­": "7",
                "à³®": "8",
                "à³¯": "9",
                "à³¦": "0"
            };
        e.defineLocale("kn", {
            months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
            monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
            monthsParseExact: !0,
            weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
            weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
            weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à²‡à²‚à²¦à³] LT",
                nextDay: "[à²¨à²¾à²³à³†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
                lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à²¨à²‚à²¤à²°",
                past: "%s à²¹à²¿à²‚à²¦à³†",
                s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
                ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
                m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
                mm: "%d à²¨à²¿à²®à²¿à²·",
                h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
                hh: "%d à²—à²‚à²Ÿà³†",
                d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
                dd: "%d à²¦à²¿à²¨",
                M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
                MM: "%d à²¤à²¿à²‚à²—à²³à³",
                y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
                yy: "%d à²µà²°à³à²·"
            },
            preparse: function(e) {
                return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === t ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === t ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === t ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
            ordinal: function(e) {
                return e + "à²¨à³†à³•"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ko", {
            months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
            weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYYë…„ MMMM Dì¼",
                LLL: "YYYYë…„ MMMM Dì¼ A h:mm",
                LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYYë…„ MMMM Dì¼",
                lll: "YYYYë…„ MMMM Dì¼ A h:mm",
                llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm"
            },
            calendar: {
                sameDay: "ì˜¤ëŠ˜ LT",
                nextDay: "ë‚´ì¼ LT",
                nextWeek: "dddd LT",
                lastDay: "ì–´ì œ LT",
                lastWeek: "ì§€ë‚œì£¼ dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s í›„",
                past: "%s ì „",
                s: "ëª‡ ì´ˆ",
                ss: "%dì´ˆ",
                m: "1ë¶„",
                mm: "%dë¶„",
                h: "í•œ ì‹œê°„",
                hh: "%dì‹œê°„",
                d: "í•˜ë£¨",
                dd: "%dì¼",
                M: "í•œ ë‹¬",
                MM: "%dë‹¬",
                y: "ì¼ ë…„",
                yy: "%dë…„"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "ì¼";
                    case "M":
                        return e + "ì›”";
                    case "w":
                    case "W":
                        return e + "ì£¼";
                    default:
                        return e
                }
            },
            meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
            isPM: function(e) {
                return "ì˜¤í›„" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-Ñ‡Ò¯",
            1: "-Ñ‡Ð¸",
            2: "-Ñ‡Ð¸",
            3: "-Ñ‡Ò¯",
            4: "-Ñ‡Ò¯",
            5: "-Ñ‡Ð¸",
            6: "-Ñ‡Ñ‹",
            7: "-Ñ‡Ð¸",
            8: "-Ñ‡Ð¸",
            9: "-Ñ‡Ñƒ",
            10: "-Ñ‡Ñƒ",
            20: "-Ñ‡Ñ‹",
            30: "-Ñ‡Ñƒ",
            40: "-Ñ‡Ñ‹",
            50: "-Ñ‡Ò¯",
            60: "-Ñ‡Ñ‹",
            70: "-Ñ‡Ð¸",
            80: "-Ñ‡Ð¸",
            90: "-Ñ‡Ñƒ",
            100: "-Ñ‡Ò¯"
        };
        e.defineLocale("ky", {
            months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
            weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
            weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
                nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑ‡Ðµ ÑÐ°Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
                past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
                s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
                mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
                h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
                hh: "%d ÑÐ°Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ð¸Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return n(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[GÃ«schter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d MÃ©int",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("lo", {
            months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
            isPM: function(e) {
                return "àº•àº­àº™à»àº¥àº‡" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
            },
            calendar: {
                sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
                nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
                nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
                lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
                lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "àº­àºµàº %s",
                past: "%sàºœà»ˆàº²àº™àº¡àº²",
                s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
                ss: "%d àº§àº´àº™àº²àº—àºµ",
                m: "1 àº™àº²àº—àºµ",
                mm: "%d àº™àº²àº—àºµ",
                h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                d: "1 àº¡àº·à»‰",
                dd: "%d àº¡àº·à»‰",
                M: "1 à»€àº”àº·àº­àº™",
                MM: "%d à»€àº”àº·àº­àº™",
                y: "1 àº›àºµ",
                yy: "%d àº›àºµ"
            },
            dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
            ordinal: function(e) {
                return "àº—àºµà»ˆ" + e
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundÄ—_sekundÅ¾iÅ³_sekundes",
            m: "minutÄ—_minutÄ—s_minutÄ™",
            mm: "minutÄ—s_minuÄiÅ³_minutes",
            h: "valanda_valandos_valandÄ…",
            hh: "valandos_valandÅ³_valandas",
            d: "diena_dienos_dienÄ…",
            dd: "dienos_dienÅ³_dienas",
            M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
            MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
            y: "metai_metÅ³_metus",
            yy: "metai_metÅ³_metus"
        };

        function n(e, t, n, o) {
            return t ? a(n)[0] : o ? a(n)[1] : a(n)[2]
        }

        function o(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function a(e) {
            return t[e].split("_")
        }

        function r(e, t, r, i) {
            var s = e + " ";
            return 1 === e ? s + n(0, t, r[0], i) : t ? s + (o(e) ? a(r)[1] : a(r)[0]) : i ? s + a(r)[1] : s + (o(e) ? a(r)[1] : a(r)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Å iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[PraÄ—jusÄ¯] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieÅ¡ %s",
                s: function(e, t, n, o) {
                    return t ? "kelios sekundÄ—s" : o ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
                },
                ss: r,
                m: n,
                mm: r,
                h: n,
                hh: r,
                d: n,
                dd: r,
                M: n,
                MM: r,
                y: n,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"),
            m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            h: "stundas_stundÄm_stunda_stundas".split("_"),
            hh: "stundas_stundÄm_stunda_stundas".split("_"),
            d: "dienas_dienÄm_diena_dienas".split("_"),
            dd: "dienas_dienÄm_diena_dienas".split("_"),
            M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function o(e, o, a) {
            return e + " " + n(t[a], e, o)
        }

        function a(e, o, a) {
            return n(t[a], e, o)
        }
        e.defineLocale("lv", {
            months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Å odien pulksten] LT",
                nextDay: "[RÄ«t pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pÄ“c %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
                },
                ss: o,
                m: a,
                mm: o,
                h: a,
                hh: o,
                d: a,
                dd: o,
                M: a,
                MM: o,
                y: a,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, o) {
                var a = t.words[o];
                return 1 === o.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function() {
                    return ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("mi", {
            months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"),
            weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
            weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hÄ“kona ruarua",
                ss: "%d hÄ“kona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("mk", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
            weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
                nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¿Ð¾ÑÐ»Ðµ %s",
                past: "Ð¿Ñ€ÐµÐ´ %s",
                s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "Ð´ÐµÐ½",
                dd: "%d Ð´ÐµÐ½Ð°",
                M: "Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
                y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ml", {
            months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
            monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
            weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
            weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
            longDateFormat: {
                LT: "A h:mm -à´¨àµ",
                LTS: "A h:mm:ss -à´¨àµ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
                LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
            },
            calendar: {
                sameDay: "[à´‡à´¨àµà´¨àµ] LT",
                nextDay: "[à´¨à´¾à´³àµ†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
                lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à´•à´´à´¿à´žàµà´žàµ",
                past: "%s à´®àµàµ»à´ªàµ",
                s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
                ss: "%d à´¸àµ†à´•àµà´•àµ»à´¡àµ",
                m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
                mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
                h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
                dd: "%d à´¦à´¿à´µà´¸à´‚",
                M: "à´’à´°àµ à´®à´¾à´¸à´‚",
                MM: "%d à´®à´¾à´¸à´‚",
                y: "à´’à´°àµ à´µàµ¼à´·à´‚",
                yy: "%d à´µàµ¼à´·à´‚"
            },
            meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à´°à´¾à´¤àµà´°à´¿" === t && e >= 4 || "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" === t || "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à´°à´¾à´¤àµà´°à´¿" : e < 12 ? "à´°à´¾à´µà´¿à´²àµ†" : e < 17 ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : e < 20 ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            switch (n) {
                case "s":
                    return t ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
                case "ss":
                    return e + (t ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
                case "m":
                case "mm":
                    return e + (t ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
                case "h":
                case "hh":
                    return e + (t ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
                case "d":
                case "dd":
                    return e + (t ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
                case "M":
                case "MM":
                    return e + (t ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
                case "y":
                case "yy":
                    return e + (t ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
                default:
                    return e
            }
        }
        n(4).defineLocale("mn", {
            months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
            monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
            monthsParseExact: !0,
            weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
            weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
            weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D",
                LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm",
                LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm"
            },
            meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
            isPM: function(e) {
                return "Ò®Ð¥" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Ò®Ó¨" : "Ò®Ð¥"
            },
            calendar: {
                sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT",
                nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT",
                nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT",
                lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT",
                lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ð´Ð°Ñ€Ð°Ð°",
                past: "%s Ó©Ð¼Ð½Ó©",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " Ó©Ð´Ó©Ñ€";
                    default:
                        return e
                }
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à¥§",
                2: "à¥¨",
                3: "à¥©",
                4: "à¥ª",
                5: "à¥«",
                6: "à¥¬",
                7: "à¥­",
                8: "à¥®",
                9: "à¥¯",
                0: "à¥¦"
            },
            n = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };

        function o(e, t, n, o) {
            var a = "";
            if (t) switch (n) {
                case "s":
                    a = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case "ss":
                    a = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case "m":
                    a = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
                    break;
                case "mm":
                    a = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
                    break;
                case "h":
                    a = "à¤à¤• à¤¤à¤¾à¤¸";
                    break;
                case "hh":
                    a = "%d à¤¤à¤¾à¤¸";
                    break;
                case "d":
                    a = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
                    break;
                case "dd":
                    a = "%d à¤¦à¤¿à¤µà¤¸";
                    break;
                case "M":
                    a = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
                    break;
                case "MM":
                    a = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
                    break;
                case "y":
                    a = "à¤à¤• à¤µà¤°à¥à¤·";
                    break;
                case "yy":
                    a = "%d à¤µà¤°à¥à¤·à¥‡"
            } else switch (n) {
                case "s":
                    a = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case "ss":
                    a = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case "m":
                    a = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
                    break;
                case "mm":
                    a = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
                    break;
                case "h":
                    a = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
                    break;
                case "hh":
                    a = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
                    break;
                case "d":
                    a = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
                    break;
                case "dd":
                    a = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
                    break;
                case "M":
                    a = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
                    break;
                case "MM":
                    a = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
                    break;
                case "y":
                    a = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
                    break;
                case "yy":
                    a = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
            }
            return a.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤¾à¤²] LT",
                lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤§à¥à¤¯à¥‡",
                past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            preparse: function(e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? e < 4 ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : e < 10 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹".split("_"),
            weekdays: "Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt".split("_"),
            weekdaysShort: "Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib".split("_"),
            weekdaysMin: "Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[GÄ§ada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraÄ§ fil-]LT",
                lastWeek: "dddd [li gÄ§adda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "fâ€™ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegÄ§a",
                hh: "%d siegÄ§at",
                d: "Ä¡urnata",
                dd: "%d Ä¡ranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "á",
                2: "á‚",
                3: "áƒ",
                4: "á„",
                5: "á…",
                6: "á†",
                7: "á‡",
                8: "áˆ",
                9: "á‰",
                0: "á€"
            },
            n = {
                "á": "1",
                "á‚": "2",
                "áƒ": "3",
                "á„": "4",
                "á…": "5",
                "á†": "6",
                "á‡": "7",
                "áˆ": "8",
                "á‰": "9",
                "á€": "0"
            };
        e.defineLocale("my", {
            months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
            monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
            weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
            weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
                nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
                nextWeek: "dddd LT [á€™á€¾á€¬]",
                lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
                lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
                sameElse: "L"
            },
            relativeTime: {
                future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
                past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
                s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
                ss: "%d á€…á€€á€¹á€€á€”á€·á€º",
                m: "á€á€…á€ºá€™á€­á€”á€…á€º",
                mm: "%d á€™á€­á€”á€…á€º",
                h: "á€á€…á€ºá€”á€¬á€›á€®",
                hh: "%d á€”á€¬á€›á€®",
                d: "á€á€…á€ºá€›á€€á€º",
                dd: "%d á€›á€€á€º",
                M: "á€á€…á€ºá€œ",
                MM: "%d á€œ",
                y: "á€á€…á€ºá€”á€¾á€…á€º",
                yy: "%d á€”á€¾á€…á€º"
            },
            preparse: function(e) {
                return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à¥§",
                2: "à¥¨",
                3: "à¥©",
                4: "à¥ª",
                5: "à¥«",
                6: "à¥¬",
                7: "à¥­",
                8: "à¥®",
                9: "à¥¯",
                0: "à¥¦"
            },
            n = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };
        e.defineLocale("ne", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
            weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
            weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
            },
            preparse: function(e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
                nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
                lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
                lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤¾",
                past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
                s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
                ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
                m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
                hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
                MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
                y: "à¤à¤• à¤¬à¤°à¥à¤·",
                yy: "%d à¤¬à¤°à¥à¤·"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            o = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, o) {
                return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            o = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, o) {
                return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I gÃ¥r klokka] LT",
                lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "eit Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à©§",
                2: "à©¨",
                3: "à©©",
                4: "à©ª",
                5: "à©«",
                6: "à©¬",
                7: "à©­",
                8: "à©®",
                9: "à©¯",
                0: "à©¦"
            },
            n = {
                "à©§": "1",
                "à©¨": "2",
                "à©©": "3",
                "à©ª": "4",
                "à©«": "5",
                "à©¬": "6",
                "à©­": "7",
                "à©®": "8",
                "à©¯": "9",
                "à©¦": "0"
            };
        e.defineLocale("pa-in", {
            months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
            monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
            weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
            weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
            weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
            longDateFormat: {
                LT: "A h:mm à¨µà¨œà©‡",
                LTS: "A h:mm:ss à¨µà¨œà©‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
            },
            calendar: {
                sameDay: "[à¨…à¨œ] LT",
                nextDay: "[à¨•à¨²] LT",
                nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT",
                lastDay: "[à¨•à¨²] LT",
                lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¨µà¨¿à©±à¨š",
                past: "%s à¨ªà¨¿à¨›à¨²à©‡",
                s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
                ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ",
                m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
                mm: "%d à¨®à¨¿à©°à¨Ÿ",
                h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
                hh: "%d à¨˜à©°à¨Ÿà©‡",
                d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
                dd: "%d à¨¦à¨¿à¨¨",
                M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
                MM: "%d à¨®à¨¹à©€à¨¨à©‡",
                y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
                yy: "%d à¨¸à¨¾à¨²"
            },
            preparse: function(e) {
                return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === t ? e < 4 ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === t ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === t ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¨°à¨¾à¨¤" : e < 10 ? "à¨¸à¨µà©‡à¨°" : e < 17 ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : e < 20 ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");

        function o(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function a(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a + (o(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutÄ™";
                case "mm":
                    return a + (o(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinÄ™";
                case "hh":
                    return a + (o(e) ? "godziny" : "godzin");
                case "MM":
                    return a + (o(e) ? "miesiÄ…ce" : "miesiÄ™cy");
                case "yy":
                    return a + (o(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, o) {
                return e ? "" === o ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(o) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
            weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DziÅ› o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielÄ™ o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W Å›rodÄ™ o] LT";
                        case 6:
                            return "[W sobotÄ™ o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "1 dzieÅ„",
                dd: "%d dni",
                M: "miesiÄ…c",
                MM: a,
                y: "rok",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("pt", {
            months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
            weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("pt-br", {
            months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
            weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº"
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var o = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (o = " de "), e + o + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n]
        }
        n(4).defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mÃ¢ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s Ã®n urmÄƒ",
                s: "cÃ¢teva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o orÄƒ",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lunÄƒ",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return "m" === n ? t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + function(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }({
                ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
            }[n], +e)
        }
        var n = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
        e.defineLocale("ru", {
            months: {
                format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
                standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
            },
            monthsShort: {
                format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
                standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
            },
            weekdays: {
                standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
                isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/
            },
            weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
            monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., H:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., H:mm"
            },
            calendar: {
                sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
                nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                past: "%s Ð½Ð°Ð·Ð°Ð´",
                s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                ss: t,
                m: t,
                mm: t,
                h: "Ñ‡Ð°Ñ",
                hh: t,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: t,
                M: "Ð¼ÐµÑÑÑ†",
                MM: t,
                y: "Ð³Ð¾Ð´",
                yy: t
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
            isPM: function(e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ð¸" : e < 12 ? "ÑƒÑ‚Ñ€Ð°" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-Ð¹";
                    case "D":
                        return e + "-Ð³Ð¾";
                    case "w":
                    case "W":
                        return e + "-Ñ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
            n = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ddddØŒ D MMMM YYYY HH:mm"
            },
            meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
            isPM: function(e) {
                return "Ø´Ø§Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ú„] LT",
                nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT",
                nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT",
                lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT",
                lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ù¾ÙˆØ¡",
                past: "%s Ø§Ú³",
                s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ",
                ss: "%d Ø³ÙŠÚªÙ†ÚŠ",
                m: "Ù‡Úª Ù…Ù†Ù½",
                mm: "%d Ù…Ù†Ù½",
                h: "Ù‡Úª ÚªÙ„Ø§Úª",
                hh: "%d ÚªÙ„Ø§Úª",
                d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†",
                dd: "%d ÚÙŠÙ†Ù‡Ù†",
                M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ",
                MM: "%d Ù…Ù‡ÙŠÙ†Ø§",
                y: "Ù‡Úª Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("se", {
            months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
            monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
            weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
            weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geaÅ¾es",
                past: "maÅ‹it %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mÃ¡nnu",
                MM: "%d mÃ¡nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("si", {
            months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
            monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
            weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
            weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
            weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[à¶…à¶¯] LT[à¶§]",
                nextDay: "[à·„à·™à¶§] LT[à¶§]",
                nextWeek: "dddd LT[à¶§]",
                lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
                lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¶šà·’à¶±à·Š",
                past: "%sà¶šà¶§ à¶´à·™à¶»",
                s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
                ss: "à¶­à¶­à·Šà¶´à¶» %d",
                m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
                mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
                h: "à¶´à·à¶º",
                hh: "à¶´à·à¶º %d",
                d: "à¶¯à·’à¶±à¶º",
                dd: "à¶¯à·’à¶± %d",
                M: "à¶¸à·à·ƒà¶º",
                MM: "à¶¸à·à·ƒ %d",
                y: "à·€à·ƒà¶»",
                yy: "à·€à·ƒà¶» %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
            ordinal: function(e) {
                return e + " à·€à·à¶±à·’"
            },
            meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
            isPM: function(e) {
                return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
            n = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");

        function o(e) {
            return e > 1 && e < 5
        }

        function a(e, t, n, a) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case "ss":
                    return t || a ? r + (o(e) ? "sekundy" : "sekÃºnd") : r + "sekundami";
                case "m":
                    return t ? "minÃºta" : a ? "minÃºtu" : "minÃºtou";
                case "mm":
                    return t || a ? r + (o(e) ? "minÃºty" : "minÃºt") : r + "minÃºtami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? r + (o(e) ? "hodiny" : "hodÃ­n") : r + "hodinami";
                case "d":
                    return t || a ? "deÅˆ" : "dÅˆom";
                case "dd":
                    return t || a ? r + (o(e) ? "dni" : "dnÃ­") : r + "dÅˆami";
                case "M":
                    return t || a ? "mesiac" : "mesiacom";
                case "MM":
                    return t || a ? r + (o(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                case "y":
                    return t || a ? "rok" : "rokom";
                case "yy":
                    return t || a ? r + (o(e) ? "roky" : "rokov") : r + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo Å¡tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[vÄera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulÃº nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[minulÃ½] dddd [o] LT";
                        case 3:
                            return "[minulÃº stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [o] LT";
                        case 6:
                            return "[minulÃº sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || o ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return a + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || o ? "sekundi" : "sekundah" : e < 5 ? t || o ? "sekunde" : "sekundah" : "sekund");
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return a + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || o ? "minuti" : "minutama" : e < 5 ? t || o ? "minute" : "minutami" : t || o ? "minut" : "minutami");
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return a + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || o ? "uri" : "urama" : e < 5 ? t || o ? "ure" : "urami" : t || o ? "ur" : "urami");
                case "d":
                    return t || o ? "en dan" : "enim dnem";
                case "dd":
                    return a + (1 === e ? t || o ? "dan" : "dnem" : 2 === e ? t || o ? "dni" : "dnevoma" : t || o ? "dni" : "dnevi");
                case "M":
                    return t || o ? "en mesec" : "enim mesecem";
                case "MM":
                    return a + (1 === e ? t || o ? "mesec" : "mesecem" : 2 === e ? t || o ? "meseca" : "mesecema" : e < 5 ? t || o ? "mesece" : "meseci" : t || o ? "mesecev" : "meseci");
                case "y":
                    return t || o ? "eno leto" : "enim letom";
                case "yy":
                    return a + (1 === e ? t || o ? "leto" : "letom" : 2 === e ? t || o ? "leti" : "letoma" : e < 5 ? t || o ? "leta" : "leti" : t || o ? "let" : "leti")
            }
        }
        n(4).defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[vÄeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejÅ¡njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejÅ¡njo] [sredo] [ob] LT";
                        case 6:
                            return "[prejÅ¡njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejÅ¡nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Äez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
            weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
            weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot nÃ«] LT",
                nextDay: "[NesÃ«r nÃ«] LT",
                nextWeek: "dddd [nÃ«] LT",
                lastDay: "[Dje nÃ«] LT",
                lastWeek: "dddd [e kaluar nÃ«] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nÃ« %s",
                past: "%s mÃ« parÃ«",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "njÃ« minutÃ«",
                mm: "%d minuta",
                h: "njÃ« orÃ«",
                hh: "%d orÃ«",
                d: "njÃ« ditÃ«",
                dd: "%d ditÃ«",
                M: "njÃ« muaj",
                MM: "%d muaj",
                y: "njÃ« vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, o) {
                var a = t.words[o];
                return 1 === o.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function() {
                    return ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ðµ", "ÑÐµÐºÑƒÐ½Ð´Ð¸"],
                m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
                mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
                h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
                hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
                dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
                MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
                yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, o) {
                var a = t.words[o];
                return 1 === o.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
            monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
            monthsParseExact: !0,
            weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
            weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
                nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                        case 3:
                            return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                        case 6:
                            return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ñƒ] dddd [Ñƒ] LT"
                    }
                },
                lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
                lastWeek: function() {
                    return ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "Ð¿Ñ€Ðµ %s",
                s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "Ð´Ð°Ð½",
                dd: t.translate,
                M: "Ð¼ÐµÑÐµÑ†",
                MM: t.translate,
                y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
            weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
            weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[IgÃ¥r] LT",
                nextWeek: "[PÃ¥] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "fÃ¶r %s sedan",
                s: "nÃ¥gra sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "à¯§",
                2: "à¯¨",
                3: "à¯©",
                4: "à¯ª",
                5: "à¯«",
                6: "à¯¬",
                7: "à¯­",
                8: "à¯®",
                9: "à¯¯",
                0: "à¯¦"
            },
            n = {
                "à¯§": "1",
                "à¯¨": "2",
                "à¯©": "3",
                "à¯ª": "4",
                "à¯«": "5",
                "à¯¬": "6",
                "à¯­": "7",
                "à¯®": "8",
                "à¯¯": "9",
                "à¯¦": "0"
            };
        e.defineLocale("ta", {
            months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
            weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
            weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[à®‡à®©à¯à®±à¯] LT",
                nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
                lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à®‡à®²à¯",
                past: "%s à®®à¯à®©à¯",
                s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
                mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
                h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                d: "à®’à®°à¯ à®¨à®¾à®³à¯",
                dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
                M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
                MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
                y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
                yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
            },
            dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
            ordinal: function(e) {
                return e + "à®µà®¤à¯"
            },
            preparse: function(e) {
                return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
            meridiem: function(e, t, n) {
                return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t ? e : "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("te", {
            months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
            monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
            monthsParseExact: !0,
            weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
            weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
            weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à°¨à±‡à°¡à±] LT",
                nextDay: "[à°°à±‡à°ªà±] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
                lastWeek: "[à°—à°¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à°²à±‹",
                past: "%s à°•à±à°°à°¿à°¤à°‚",
                s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
                ss: "%d à°¸à±†à°•à°¨à±à°²à±",
                m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
                mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
                h: "à°’à°• à°—à°‚à°Ÿ",
                hh: "%d à°—à°‚à°Ÿà°²à±",
                d: "à°’à°• à°°à±‹à°œà±",
                dd: "%d à°°à±‹à°œà±à°²à±",
                M: "à°’à°• à°¨à±†à°²",
                MM: "%d à°¨à±†à°²à°²à±",
                y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
                yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}à°µ/,
            ordinal: "%dà°µ",
            meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à°°à°¾à°¤à±à°°à°¿" === t ? e < 4 ? e : e + 12 : "à°‰à°¦à°¯à°‚" === t ? e : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === t ? e >= 10 ? e : e + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à°°à°¾à°¤à±à°°à°¿" : e < 10 ? "à°‰à°¦à°¯à°‚" : e < 17 ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : e < 20 ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ÑƒÐ¼",
            1: "-ÑƒÐ¼",
            2: "-ÑŽÐ¼",
            3: "-ÑŽÐ¼",
            4: "-ÑƒÐ¼",
            5: "-ÑƒÐ¼",
            6: "-ÑƒÐ¼",
            7: "-ÑƒÐ¼",
            8: "-ÑƒÐ¼",
            9: "-ÑƒÐ¼",
            10: "-ÑƒÐ¼",
            12: "-ÑƒÐ¼",
            13: "-ÑƒÐ¼",
            20: "-ÑƒÐ¼",
            30: "-ÑŽÐ¼",
            40: "-ÑƒÐ¼",
            50: "-ÑƒÐ¼",
            60: "-ÑƒÐ¼",
            70: "-ÑƒÐ¼",
            80: "-ÑƒÐ¼",
            90: "-ÑƒÐ¼",
            100: "-ÑƒÐ¼"
        };
        e.defineLocale("tg", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
            weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
            weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                nextDay: "[ÐŸÐ°Ð³Ð¾Ò³ ÑÐ¾Ð°Ñ‚Ð¸] LT",
                lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
                past: "%s Ð¿ÐµÑˆ",
                s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
                m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
                mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
                h: "ÑÐº ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "ÑÐº Ñ€Ó¯Ð·",
                dd: "%d Ñ€Ó¯Ð·",
                M: "ÑÐº Ð¼Ð¾Ò³",
                MM: "%d Ð¼Ð¾Ò³",
                y: "ÑÐº ÑÐ¾Ð»",
                yy: "%d ÑÐ¾Ð»"
            },
            meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ÑˆÐ°Ð±" === t ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === t ? e : "Ñ€Ó¯Ð·" === t ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("th", {
            months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
            monthsShort: "à¸¡.à¸„._à¸.à¸ž._à¸¡à¸µ.à¸„._à¹€à¸¡.à¸¢._à¸ž.à¸„._à¸¡à¸´.à¸¢._à¸.à¸„._à¸ª.à¸„._à¸.à¸¢._à¸•.à¸„._à¸ž.à¸¢._à¸˜.à¸„.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm",
                LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm"
            },
            meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
            isPM: function(e) {
                return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
            },
            calendar: {
                sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
                lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "à¸­à¸µà¸ %s",
                past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
                s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
                ss: "%d à¸§à¸´à¸™à¸²à¸—à¸µ",
                m: "1 à¸™à¸²à¸—à¸µ",
                mm: "%d à¸™à¸²à¸—à¸µ",
                h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                d: "1 à¸§à¸±à¸™",
                dd: "%d à¸§à¸±à¸™",
                M: "1 à¹€à¸”à¸·à¸­à¸™",
                MM: "%d à¹€à¸”à¸·à¸­à¸™",
                y: "1 à¸›à¸µ",
                yy: "%d à¸›à¸µ"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, o, a) {
            var r = function(e) {
                var n = Math.floor(e % 1e3 / 100),
                    o = Math.floor(e % 100 / 10),
                    a = e % 10,
                    r = "";
                return n > 0 && (r += t[n] + "vatlh"), o > 0 && (r += ("" !== r ? " " : "") + t[o] + "maH"), a > 0 && (r += ("" !== r ? " " : "") + t[a]), "" === r ? "pagh" : r
            }(e);
            switch (o) {
                case "ss":
                    return r + " lup";
                case "mm":
                    return r + " tup";
                case "hh":
                    return r + " rep";
                case "dd":
                    return r + " jaj";
                case "MM":
                    return r + " jar";
                case "yy":
                    return r + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
            monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[waâ€™leS] LT",
                nextWeek: "LLL",
                lastDay: "[waâ€™Huâ€™] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Huâ€™" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "waâ€™ tup",
                mm: n,
                h: "waâ€™ rep",
                hh: n,
                d: "waâ€™ jaj",
                dd: n,
                M: "waâ€™ jar",
                MM: n,
                y: "waâ€™ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'Ã¼ncÃ¼",
            4: "'Ã¼ncÃ¼",
            100: "'Ã¼ncÃ¼",
            6: "'ncÄ±",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'Ä±ncÄ±",
            90: "'Ä±ncÄ±"
        };
        e.defineLocale("tr", {
            months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
            monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[yarÄ±n saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dÃ¼n] LT",
                lastWeek: "[geÃ§en] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s Ã¶nce",
                s: "birkaÃ§ saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yÄ±l",
                yy: "%d yÄ±l"
            },
            ordinal: function(e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'Ä±ncÄ±";
                        var o = e % 10;
                        return e + (t[o] || t[e % 100 - o] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, o) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n mÃ­ut", "'iens mÃ­ut"],
                mm: [e + " mÃ­uts", e + " mÃ­uts"],
                h: ["'n Ã¾ora", "'iensa Ã¾ora"],
                hh: [e + " Ã¾oras", e + " Ã¾oras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return o ? a[n][0] : t ? a[n][0] : a[n][1]
        }
        n(4).defineLocale("tzl", {
            months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
            weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
            weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi Ã ] LT",
                nextDay: "[demÃ  Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[ieiri Ã ] LT",
                lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("tzm", {
            months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[â´°âµ™â´·âµ… â´´] LT",
                nextDay: "[â´°âµ™â´½â´° â´´] LT",
                nextWeek: "dddd [â´´] LT",
                lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
                lastWeek: "dddd [â´´] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
                past: "âµ¢â´°âµ %s",
                s: "âµ‰âµŽâµ‰â´½",
                ss: "%d âµ‰âµŽâµ‰â´½",
                m: "âµŽâµ‰âµâµ“â´º",
                mm: "%d âµŽâµ‰âµâµ“â´º",
                h: "âµ™â´°âµ„â´°",
                hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
                d: "â´°âµ™âµ™",
                dd: "%d oâµ™âµ™â´°âµ",
                M: "â´°âµ¢oâµ“âµ”",
                MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
                y: "â´°âµ™â´³â´°âµ™",
                yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("tzm-latn", {
            months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuá¸",
                mm: "%d minuá¸",
                h: "saÉ›a",
                hh: "%d tassaÉ›in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("ug-cn", {
            months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
            weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰",
                LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm",
                LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm"
            },
            meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" === t || "Ø³Û•Ú¾Û•Ø±" === t || "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" === t ? e : "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" === t || "ÙƒÛ•Ú†" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var o = 100 * e + t;
                return o < 600 ? "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" : o < 900 ? "Ø³Û•Ú¾Û•Ø±" : o < 1130 ? "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" : o < 1230 ? "Ú†ÛˆØ´" : o < 1800 ? "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" : "ÙƒÛ•Ú†"
            },
            calendar: {
                sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT",
                nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT",
                nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT",
                lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ÙƒÛÙŠÙ‰Ù†",
                past: "%s Ø¨Û‡Ø±Û‡Ù†",
                s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª",
                ss: "%d Ø³ÛÙƒÙˆÙ†Øª",
                m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª",
                mm: "%d Ù…Ù‰Ù†Û‡Øª",
                h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª",
                hh: "%d Ø³Ø§Ø¦Û•Øª",
                d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†",
                dd: "%d ÙƒÛˆÙ†",
                M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ",
                MM: "%d Ø¦Ø§ÙŠ",
                y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„",
                yy: "%d ÙŠÙ‰Ù„"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-ÙƒÛˆÙ†Ù‰";
                    case "w":
                    case "W":
                        return e + "-Ú¾Û•Ù¾ØªÛ•";
                    default:
                        return e
                }
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return "m" === n ? t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + function(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }({
                ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´",
                mm: t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
                hh: t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
                MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
                yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
            }[n], +e)
        }

        function n(e) {
            return function() {
                return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
                standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
            weekdays: function(e, t) {
                var n = {
                    nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                    accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                    genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
                };
                return e ? n[/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ñ€.",
                LLL: "D MMMM YYYY Ñ€., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
            },
            calendar: {
                sameDay: n("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                nextDay: n("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                lastDay: n("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                nextWeek: n("[Ð£] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "%s Ñ‚Ð¾Ð¼Ñƒ",
                s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
                ss: t,
                m: t,
                mm: t,
                h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                hh: t,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: t,
                M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
                MM: t,
                y: "Ñ€Ñ–Ðº",
                yy: t
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
            isPM: function(e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ñ–" : e < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-Ð¹";
                    case "D":
                        return e + "-Ð³Ð¾";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
            n = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ddddØŒ D MMMM YYYY HH:mm"
            },
            meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
            isPM: function(e) {
                return "Ø´Ø§Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
            },
            calendar: {
                sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT",
                nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT",
                nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT",
                lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT",
                lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ø¨Ø¹Ø¯",
                past: "%s Ù‚Ø¨Ù„",
                s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ",
                ss: "%d Ø³ÛŒÚ©Ù†Úˆ",
                m: "Ø§ÛŒÚ© Ù…Ù†Ù¹",
                mm: "%d Ù…Ù†Ù¹",
                h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û",
                hh: "%d Ú¯Ú¾Ù†Ù¹Û’",
                d: "Ø§ÛŒÚ© Ø¯Ù†",
                dd: "%d Ø¯Ù†",
                M: "Ø§ÛŒÚ© Ù…Ø§Û",
                MM: "%d Ù…Ø§Û",
                y: "Ø§ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(4))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("uz", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
            weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
            weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
                nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
                past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
                s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                ss: "%d Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
                mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
                h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
                MM: "%d Ð¾Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
                yy: "%d Ð¹Ð¸Ð»"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("vi", {
            months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [nÄƒm] YYYY",
                LLL: "D MMMM [nÄƒm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[HÃ´m nay lÃºc] LT",
                nextDay: "[NgÃ y mai lÃºc] LT",
                nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
                lastDay: "[HÃ´m qua lÃºc] LT",
                lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tá»›i",
                past: "%s trÆ°á»›c",
                s: "vÃ i giÃ¢y",
                ss: "%d giÃ¢y",
                m: "má»™t phÃºt",
                mm: "%d phÃºt",
                h: "má»™t giá»",
                hh: "%d giá»",
                d: "má»™t ngÃ y",
                dd: "%d ngÃ y",
                M: "má»™t thÃ¡ng",
                MM: "%d thÃ¡ng",
                y: "má»™t nÄƒm",
                yy: "%d nÄƒm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("x-pseudo", {
            months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
            monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
            weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
            weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT",
                nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT",
                nextWeek: "dddd [Ã¡t] LT",
                lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT",
                lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ã­~Ã± %s",
                past: "%s Ã¡~gÃ³",
                s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds",
                ss: "%d s~Ã©cÃ³Ã±~ds",
                m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©",
                mm: "%d m~Ã­Ã±Ãº~tÃ©s",
                h: "Ã¡~Ã± hÃ³~Ãºr",
                hh: "%d h~Ã³Ãºrs",
                d: "Ã¡ ~dÃ¡Ã½",
                dd: "%d d~Ã¡Ã½s",
                M: "Ã¡ ~mÃ³Ã±~th",
                MM: "%d m~Ã³Ã±t~hs",
                y: "Ã¡ ~Ã½Ã©Ã¡r",
                yy: "%d Ã½~Ã©Ã¡rs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("yo", {
            months: "Sáº¹Ìráº¹Ì_EÌ€reÌ€leÌ€_áº¸ráº¹Ì€naÌ€_IÌ€gbeÌ_EÌ€bibi_OÌ€kuÌ€du_Agáº¹mo_OÌ€guÌn_Owewe_á»ŒÌ€waÌ€raÌ€_BeÌluÌ_á»ŒÌ€páº¹Ì€Ì€".split("_"),
            monthsShort: "Sáº¹Ìr_EÌ€rl_áº¸rn_IÌ€gb_EÌ€bi_OÌ€kuÌ€_Agáº¹_OÌ€guÌ_Owe_á»ŒÌ€waÌ€_BeÌl_á»ŒÌ€páº¹Ì€Ì€".split("_"),
            weekdays: "AÌ€iÌ€kuÌ_AjeÌ_IÌ€sáº¹Ìgun_á»Œjá»ÌruÌ_á»Œjá»Ìbá»_áº¸tiÌ€_AÌ€baÌmáº¹Ìta".split("_"),
            weekdaysShort: "AÌ€iÌ€k_AjeÌ_IÌ€sáº¹Ì_á»Œjr_á»Œjb_áº¸tiÌ€_AÌ€baÌ".split("_"),
            weekdaysMin: "AÌ€iÌ€_Aj_IÌ€s_á»Œr_á»Œb_áº¸t_AÌ€b".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[OÌ€niÌ€ ni] LT",
                nextDay: "[á»ŒÌ€la ni] LT",
                nextWeek: "dddd [á»Œsáº¹Ì€ toÌn'bá»] [ni] LT",
                lastDay: "[AÌ€na ni] LT",
                lastWeek: "dddd [á»Œsáº¹Ì€ toÌlá»Ì] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "niÌ %s",
                past: "%s ká»jaÌ",
                s: "iÌ€sáº¹juÌ aayaÌ die",
                ss: "aayaÌ %d",
                m: "iÌ€sáº¹juÌ kan",
                mm: "iÌ€sáº¹juÌ %d",
                h: "waÌkati kan",
                hh: "waÌkati %d",
                d: "á»já»Ì kan",
                dd: "á»já»Ì %d",
                M: "osuÌ€ kan",
                MM: "osuÌ€ %d",
                y: "á»duÌn kan",
                yy: "á»duÌn %d"
            },
            dayOfMonthOrdinalParse: /á»já»Ì\s\d{1,2}/,
            ordinal: "á»já»Ì %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("zh-cn", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†",
                LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var o = 100 * e + t;
                return o < 600 ? "å‡Œæ™¨" : o < 900 ? "æ—©ä¸Š" : o < 1130 ? "ä¸Šåˆ" : o < 1230 ? "ä¸­åˆ" : o < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT",
                nextDay: "[æ˜Žå¤©]LT",
                nextWeek: "[ä¸‹]ddddLT",
                lastDay: "[æ˜¨å¤©]LT",
                lastWeek: "[ä¸Š]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "å‘¨";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så†…",
                past: "%så‰",
                s: "å‡ ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é’Ÿ",
                mm: "%d åˆ†é’Ÿ",
                h: "1 å°æ—¶",
                hh: "%d å°æ—¶",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 ä¸ªæœˆ",
                MM: "%d ä¸ªæœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("zh-hk", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var o = 100 * e + t;
                return o < 600 ? "å‡Œæ™¨" : o < 900 ? "æ—©ä¸Š" : o < 1130 ? "ä¸Šåˆ" : o < 1230 ? "ä¸­åˆ" : o < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT",
                nextDay: "[æ˜Žå¤©]LT",
                nextWeek: "[ä¸‹]ddddLT",
                lastDay: "[æ˜¨å¤©]LT",
                lastWeek: "[ä¸Š]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så…§",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }()
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        n(4).defineLocale("zh-tw", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var o = 100 * e + t;
                return o < 600 ? "å‡Œæ™¨" : o < 900 ? "æ—©ä¸Š" : o < 1130 ? "ä¸Šåˆ" : o < 1230 ? "ä¸­åˆ" : o < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©] LT",
                nextDay: "[æ˜Žå¤©] LT",
                nextWeek: "[ä¸‹]dddd LT",
                lastDay: "[æ˜¨å¤©] LT",
                lastWeek: "[ä¸Š]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så…§",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }()
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return !1
    }
}, , , function(e, t, n) {
    "use strict";
    n(254), n(628), n(255);
    var o = n(256),
        a = n(257),
        r = n(258),
        i = n(52),
        s = n(55),
        c = n(259),
        d = n(93),
        u = n(54),
        l = n(260);
    n(267), (0, o.focusHash)(), (0, o.bindInPageLinks)(), window._initComponents = {}, (0, a.cookiesEnabled)() && (document.documentElement.className = document.documentElement.className.replace("supports-no-cookies", "supports-cookies")), document.addEventListener("DOMContentLoaded", function() {
        (0, r.init)(), (0, s.init)(), (0, i.init)(), (0, c.init)(), (0, d.init)(), (0, u.captureTalkable)(), (0, l.initCountdown)(), (0, u.initAutoDiscountCode)(), console.log("[BVA] Script Loaded: theme.js")
    })
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = (t = t || {}).className || "js-focus-hidden",
            o = e.tabIndex;
        e.tabIndex = -1, e.dataset.tabIndex = o, e.focus(), e.classList.add(n), e.addEventListener("blur", function t(a) {
            a.target.removeEventListener(a.type, t), e.tabIndex = o, delete e.dataset.tabIndex, e.classList.remove(n)
        })
    }

    function a() {
        var e = window.location.hash,
            t = document.getElementById(e.slice(1));
        e && t && o(t)
    }

    function r() {
        return Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).filter(function(e) {
            if ("#" === e.hash || "" === e.hash) return !1;
            var t = document.querySelector(e.hash);
            return !!t && (e.addEventListener("click", function() {
                o(t)
            }), !0)
        })
    }

    function i(e) {
        return Array.from(e.querySelectorAll("[tabindex],[draggable],a[href],area,button:enabled,input:not([type=hidden]):enabled,object,select:enabled,textarea:enabled")).filter(function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        })
    }
    n.r(t), n.d(t, "pageLinkFocus", function() {
        return o
    }), n.d(t, "focusHash", function() {
        return a
    }), n.d(t, "bindInPageLinks", function() {
        return r
    }), n.d(t, "focusable", function() {
        return i
    }), n.d(t, "trapFocus", function() {
        return c
    }), n.d(t, "removeTrapFocus", function() {
        return d
    });
    var s = {};

    function c(e, t) {
        t = t || e;
        var n = i(e),
            a = n[0],
            r = n[n.length - 1];
        d(), s.focusin = function(t) {
            e === t.target || e.contains(t.target) || a.focus(), t.target !== e && t.target !== r && t.target !== a || document.addEventListener("keydown", s.keydown)
        }, s.focusout = function() {
            document.removeEventListener("keydown", s.keydown)
        }, s.keydown = function(t) {
            9 === t.keyCode && (t.target !== r || t.shiftKey || (t.preventDefault(), a.focus()), t.target !== e && t.target !== a || !t.shiftKey || (t.preventDefault(), r.focus()))
        }, document.addEventListener("focusout", s.focusout), document.addEventListener("focusin", s.focusin), o(t)
    }

    function d() {
        document.removeEventListener("focusin", s.focusin), document.removeEventListener("focusout", s.focusout), document.removeEventListener("keydown", s.keydown)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCart = r, t.updateNote = function(e) {
        return s({
            url: "/cart/update.js",
            dataType: "json",
            data: {
                note: e || ""
            }
        })
    }, t.addItem = function(e, t) {
        return s({
            url: "/cart/add.js",
            dataType: "json",
            data: {
                id: e,
                quantity: void 0 === t ? 1 : t
            }
        })
    }, t.addItemFromForm = function(e) {
        return s({
            url: "/cart/add.js",
            dataType: "json",
            data: e
        })
    }, t.removeItem = function(e) {
        return s({
            url: "/cart/change.js",
            dataType: "json",
            data: {
                id: e,
                quantity: 0
            }
        })
    }, t.changeItem = function(e, t) {
        return parseInt(t, 10), s({
            url: "/cart/change.js",
            dataType: "json",
            data: {
                id: e,
                quantity: t
            }
        })
    }, t.saveLocalState = i, t.getLocalState = function() {
        if (c()) return JSON.parse(localStorage.shopify_cart_state || "")
    }, t.cookiesEnabled = function() {
        var e = navigator.cookieEnabled;
        return e || (document.cookie = "testcookie", e = -1 !== document.cookie.indexOf("testcookie")), e
    };
    var o = a(n(0));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r() {
        return o.default.getJSON("/cart.js")
    }

    function i(e) {
        return c() && (localStorage.shopify_cart_state = JSON.stringify(e)), e
    }

    function s(e) {
        var t = o.default.ajax(e);
        return navigator && !navigator.onLine && (t = o.default.Deferred().reject()), t.then(function(e) {
            return void 0 === e.token ? r() : e
        }).then(i)
    }

    function c() {
        var e = "localStorageTest";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    }
    a(n(627))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var o = n(56),
            a = 0,
            r = "body",
            i = "[mobile-nav-toggle]",
            s = "[mobile-nav-tab]",
            c = "[mobile-subnav]",
            d = function(t) {
                if (t.preventDefault(), window.innerWidth <= 992) {
                    var n = e(t.currentTarget),
                        a = (n.attr("mobile-quick-nav-trigger"), n.closest("[main-nav-item]")),
                        r = a.hasClass("is-active");
                    e("[main-nav-item]").removeClass("is-active"), (0, o.unlock)(), r || (a.addClass("is-active"), (0, o.lock)(), u(a))
                }
            },
            u = function(e) {
                e[0].querySelectorAll("[data-src]").forEach(function(e) {
                    window.lazy.load(e)
                })
            },
            l = function() {
                var t = e("[topbar]").toArray().map(function(t) {
                        return e(t).outerHeight()
                    }).reduce(function(e, t) {
                        return e + t
                    }),
                    n = e("[header-spacer]").outerHeight();
                window.scrollY > t ? e(r).addClass("is-scrolled") : e(r).removeClass("is-scrolled"), window.scrollY >= n && (window.scrollY > a ? e(r).removeClass("is-scrolling-up").addClass("is-scrolling-down") : e(r).removeClass("is-scrolling-down").addClass("is-scrolling-up")), a = window.scrollY
            },
            M = function(t) {
                var n = e(t.currentTarget),
                    o = n.attr("mobile-nav-tab"),
                    a = e(c).filter('[mobile-subnav="' + o + '"]');
                e(s).removeClass("is-active"), e(c).removeClass("is-active"), n.addClass("is-active"), a.addClass("is-active")
            },
            p = function() {
                e(i).toggleClass("is-active"), e("[mobile-nav]").toggleClass("is-active"), (0, o.toggle)()
            },
            f = function() {
                document.querySelectorAll("[cart-item-count]").forEach(function(e) {
                    var t = parseInt(e.getAttribute("cart-item-count"), 10);
                    e.setAttribute("cart-item-count", t + 1)
                })
            };
        t.init = function() {
            ! function() {
                var t = window.location.search.slice(1).split("&").map(function(e) {
                        var t = e.split("=");
                        return {
                            param: t[0],
                            value: t[1]
                        }
                    }).filter(function(e) {
                        return "conditional_message" === e.param
                    }),
                    n = e("[conditional-topbar]");
                if (t.length && n.length) {
                    var o = t[0].value;
                    e("[conditional-topbar-content]").html(decodeURIComponent(o)), n.addClass("is-showing"), e(r).addClass("conditional-active")
                }
            }(), e(document).on("click", "[data-update-cart-icon]", f), e(i).on("click", p), e("[mobile-quick-nav-trigger]").on("click", d), e(s).on("click", M), e(window).on("scroll", l), console.log("[BVA] Module Loaded: Header")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(t) {
            var n = e(t.currentTarget),
                o = n.siblings("[data-expand-content]");
            n.toggleClass("is-active"), o.slideToggle(250)
        };
        t.init = function() {
            e(document).on("click", "[data-expand-trigger]", n), console.log("[BVA] Component Loaded: Expand")
        }
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.initCountdown = void 0, a(n(261));
        var o = a(n(262));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = "[countdown]",
            i = "[countdown-content]",
            s = (Intl.DateTimeFormat().resolvedOptions().timeZone, "America/Los_Angeles"),
            c = function(t, n) {
                e("[topbar-content]").addClass("u-hidden"), e(i).removeClass("u-hidden"), e("body").addClass("countdown-active"), e(r).css({
                    backgroundColor: t
                }), e(i).css({
                    color: n
                })
            },
            d = function(t) {
                e(r).countdown(t.toDate()), e(r).on("update.countdown", function(t) {
                    var n = 24 * t.offset.totalDays + t.offset.hours;
                    e("[countdown-clock]").html(t.strftime(n + " hr : %M min : %S sec"))
                })
            },
            u = function(t) {
                return e("[countdown-msg-text]").html(t)
            };
        t.initCountdown = function() {
            if (e(r).length) {
                var t = e(r).attr("countdown-start"),
                    n = e(r).attr("countdown-end"),
                    a = e(r).attr("countdown-ext-end"),
                    i = o.default.tz(t, s),
                    l = o.default.tz(n, s),
                    M = o.default.tz(a, s),
                    p = e(r).attr("bg-color"),
                    f = e(r).attr("text-color"),
                    _ = e(r).attr("countdown-msg"),
                    m = e(r).attr("countdown-ext-msg"),
                    h = new Date;
                h >= i.toDate() && h < l.toDate() ? (c(p, f), d(l), u(_)) : h >= i.toDate() && h < M.toDate() && (c(p, f), d(M), u(m))
            }
        }
    }).call(this, n(0))
}, function(e, t, n) {
    var o, a, r;
    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    ! function(i) {
        "use strict";
        a = [n(0)], void 0 === (r = "function" == typeof(o = function(e) {
            var t = [],
                n = [],
                o = {
                    precision: 100,
                    elapse: !1,
                    defer: !1
                };
            n.push(/^[0-9]*$/.source), n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n = new RegExp(n.join("|"));
            var a = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                d: "daysToWeek",
                w: "weeks",
                W: "weeksToMonth",
                H: "hours",
                M: "minutes",
                S: "seconds",
                D: "totalDays",
                I: "totalHours",
                N: "totalMinutes",
                T: "totalSeconds"
            };

            function r(e) {
                var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                return new RegExp(t)
            }

            function i(e, t) {
                var n = "s",
                    o = "";
                return e && (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = e[0] : (o = e[0], n = e[1])), Math.abs(t) > 1 ? n : o
            }
            var s = function(n, a, r) {
                this.el = n, this.$el = e(n), this.interval = null, this.offset = {}, this.options = e.extend({}, o), this.instanceNumber = t.length, t.push(this), this.$el.data("countdown-instance", this.instanceNumber), r && ("function" == typeof r ? (this.$el.on("update.countdown", r), this.$el.on("stoped.countdown", r), this.$el.on("finish.countdown", r)) : this.options = e.extend({}, o, r)), this.setFinalDate(a), !1 === this.options.defer && this.start()
            };
            e.extend(s.prototype, {
                start: function() {
                    null !== this.interval && clearInterval(this.interval);
                    var e = this;
                    this.update(), this.interval = setInterval(function() {
                        e.update.call(e)
                    }, this.options.precision)
                },
                stop: function() {
                    clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
                },
                toggle: function() {
                    this.interval ? this.stop() : this.start()
                },
                pause: function() {
                    this.stop()
                },
                resume: function() {
                    this.start()
                },
                remove: function() {
                    this.stop.call(this), t[this.instanceNumber] = null, delete this.$el.data().countdownInstance
                },
                setFinalDate: function(e) {
                    this.finalDate = function(e) {
                        if (e instanceof Date) return e;
                        if (String(e).match(n)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
                        throw new Error("Couldn't cast `" + e + "` to a date object.")
                    }(e)
                },
                update: function() {
                    if (0 !== this.$el.closest("html").length) {
                        var t, n = void 0 !== e._data(this.el, "events"),
                            o = new Date;
                        t = this.finalDate.getTime() - o.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft !== t && n && (this.totalSecsLeft = t, this.elapsed = o >= this.finalDate, this.offset = {
                            seconds: this.totalSecsLeft % 60,
                            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                            daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                            weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                            years: Math.abs(this.finalDate.getFullYear() - o.getFullYear()),
                            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                            totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                            totalMinutes: Math.floor(this.totalSecsLeft / 60),
                            totalSeconds: this.totalSecsLeft
                        }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
                    } else this.remove()
                },
                dispatchEvent: function(t) {
                    var n = e.Event(t + ".countdown");
                    n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = e.extend({}, this.offset), n.strftime = function(e) {
                        return function(t) {
                            var n = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                            if (n)
                                for (var o = 0, s = n.length; o < s; ++o) {
                                    var c = n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                                        d = r(c[0]),
                                        u = c[1] || "",
                                        l = c[3] || "",
                                        M = null;
                                    c = c[2], a.hasOwnProperty(c) && (M = a[c], M = Number(e[M])), null !== M && ("!" === u && (M = i(l, M)), "" === u && M < 10 && (M = "0" + M.toString()), t = t.replace(d, M.toString()))
                                }
                            return t.replace(/%%/, "%")
                        }
                    }(this.offset), this.$el.trigger(n)
                }
            }), e.fn.countdown = function() {
                var n = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    var o = e(this).data("countdown-instance");
                    if (void 0 !== o) {
                        var a = t[o],
                            r = n[0];
                        s.prototype.hasOwnProperty(r) ? a[r].apply(a, n.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (a.setFinalDate.call(a, r), a.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
                    } else new s(this, n[0], n[1])
                })
            }
        }) ? o.apply(t, a) : o) || (e.exports = r)
    }()
}, function(e, t, n) {
    (e.exports = n(263)).tz.load(n(266))
}, function(e, t, n) {
    var o, a, r; //! moment-timezone.js
    //! version : 0.5.27
    //! Copyright (c) JS Foundation and other contributors
    //! license : MIT
    //! github.com/moment/moment-timezone
    //! moment-timezone.js
    //! version : 0.5.27
    //! Copyright (c) JS Foundation and other contributors
    //! license : MIT
    //! github.com/moment/moment-timezone
    ! function(i, s) {
        "use strict";
        e.exports ? e.exports = s(n(4)) : (a = [n(4)], void 0 === (r = "function" == typeof(o = s) ? o.apply(t, a) : o) || (e.exports = r))
    }(0, function(e) {
        "use strict";
        var t, n = {},
            o = {},
            a = {},
            r = {};
        e && "string" == typeof e.version || k("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
        var i = e.version.split("."),
            s = +i[0],
            c = +i[1];

        function d(e) {
            return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
        }

        function u(e) {
            var t = 0,
                n = e.split("."),
                o = n[0],
                a = n[1] || "",
                r = 1,
                i = 0,
                s = 1;
            for (45 === e.charCodeAt(0) && (t = 1, s = -1); t < o.length; t++) i = 60 * i + d(o.charCodeAt(t));
            for (t = 0; t < a.length; t++) r /= 60, i += d(a.charCodeAt(t)) * r;
            return i * s
        }

        function l(e) {
            for (var t = 0; t < e.length; t++) e[t] = u(e[t])
        }

        function M(e, t) {
            var n, o = [];
            for (n = 0; n < t.length; n++) o[n] = e[t[n]];
            return o
        }

        function p(e) {
            var t = e.split("|"),
                n = t[2].split(" "),
                o = t[3].split(""),
                a = t[4].split(" ");
            return l(n), l(o), l(a),
                function(e, t) {
                    for (var n = 0; n < t; n++) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
                    e[t - 1] = 1 / 0
                }(a, o.length), {
                    name: t[0],
                    abbrs: M(t[1].split(" "), o),
                    offsets: M(n, o),
                    untils: a,
                    population: 0 | t[5]
                }
        }

        function f(e) {
            e && this._set(p(e))
        }

        function _(e) {
            var t = e.toTimeString(),
                n = t.match(/\([a-z ]+\)/i);
            "GMT" === (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join("") : void 0 : (n = t.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) && (n = void 0), this.at = +e, this.abbr = n, this.offset = e.getTimezoneOffset()
        }

        function m(e) {
            this.zone = e, this.offsetScore = 0, this.abbrScore = 0
        }

        function h(e, t) {
            for (var n, o; o = 6e4 * ((t.at - e.at) / 12e4 | 0);)(n = new _(new Date(e.at + o))).offset === e.offset ? e = n : t = n;
            return e
        }

        function b(e, t) {
            return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : e.zone.population !== t.zone.population ? t.zone.population - e.zone.population : t.zone.name.localeCompare(e.zone.name)
        }

        function L(e, t) {
            var n, o;
            for (l(t), n = 0; n < t.length; n++) o = t[n], r[o] = r[o] || {}, r[o][e] = !0
        }

        function y(e) {
            var t, n, o, i = e.length,
                s = {},
                c = [];
            for (t = 0; t < i; t++)
                for (n in o = r[e[t].offset] || {}) o.hasOwnProperty(n) && (s[n] = !0);
            for (t in s) s.hasOwnProperty(t) && c.push(a[t]);
            return c
        }

        function A(e) {
            return (e || "").toLowerCase().replace(/\//g, "_")
        }

        function z(e) {
            var t, o, r, i;
            for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) i = A(o = (r = e[t].split("|"))[0]), n[i] = e[t], a[i] = o, L(i, r[2].split(" "))
        }

        function v(e, t) {
            e = A(e);
            var r, i = n[e];
            return i instanceof f ? i : "string" == typeof i ? (i = new f(i), n[e] = i, i) : o[e] && t !== v && (r = v(o[e], v)) ? ((i = n[e] = new f)._set(r), i.name = a[e], i) : null
        }

        function g(e) {
            var t, n, r, i;
            for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) r = A((n = e[t].split("|"))[0]), i = A(n[1]), o[r] = i, a[r] = n[0], o[i] = r, a[i] = n[1]
        }

        function T(e) {
            var t = "X" === e._f || "x" === e._f;
            return !(!e._a || void 0 !== e._tzm || t)
        }

        function k(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e)
        }

        function O(t) {
            var n = Array.prototype.slice.call(arguments, 0, -1),
                o = arguments[arguments.length - 1],
                a = v(o),
                r = e.utc.apply(null, n);
            return a && !e.isMoment(t) && T(r) && r.add(a.parse(r), "minutes"), r.tz(o), r
        }(s < 2 || 2 === s && c < 6) && k("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), f.prototype = {
            _set: function(e) {
                this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
            },
            _index: function(e) {
                var t, n = +e,
                    o = this.untils;
                for (t = 0; t < o.length; t++)
                    if (n < o[t]) return t
            },
            parse: function(e) {
                var t, n, o, a, r = +e,
                    i = this.offsets,
                    s = this.untils,
                    c = s.length - 1;
                for (a = 0; a < c; a++)
                    if (t = i[a], n = i[a + 1], o = i[a ? a - 1 : a], t < n && O.moveAmbiguousForward ? t = n : t > o && O.moveInvalidForward && (t = o), r < s[a] - 6e4 * t) return i[a];
                return i[c]
            },
            abbr: function(e) {
                return this.abbrs[this._index(e)]
            },
            offset: function(e) {
                return k("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)]
            },
            utcOffset: function(e) {
                return this.offsets[this._index(e)]
            }
        }, m.prototype.scoreOffsetAt = function(e) {
            this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
        }, O.version = "0.5.27", O.dataVersion = "", O._zones = n, O._links = o, O._names = a, O.add = z, O.link = g, O.load = function(e) {
            z(e.zones), g(e.links), O.dataVersion = e.version
        }, O.zone = v, O.zoneExists = function e(t) {
            return e.didShowError || (e.didShowError = !0, k("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!v(t)
        }, O.guess = function(e) {
            return t && !e || (t = function() {
                try {
                    var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (e && e.length > 3) {
                        var t = a[A(e)];
                        if (t) return t;
                        k("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                    }
                } catch (e) {}
                var n, o, r, i = function() {
                        var e, t, n, o = (new Date).getFullYear() - 2,
                            a = new _(new Date(o, 0, 1)),
                            r = [a];
                        for (n = 1; n < 48; n++)(t = new _(new Date(o, n, 1))).offset !== a.offset && (e = h(a, t), r.push(e), r.push(new _(new Date(e.at + 6e4)))), a = t;
                        for (n = 0; n < 4; n++) r.push(new _(new Date(o + n, 0, 1))), r.push(new _(new Date(o + n, 6, 1)));
                        return r
                    }(),
                    s = i.length,
                    c = y(i),
                    d = [];
                for (o = 0; o < c.length; o++) {
                    for (n = new m(v(c[o]), s), r = 0; r < s; r++) n.scoreOffsetAt(i[r]);
                    d.push(n)
                }
                return d.sort(b), d.length > 0 ? d[0].zone.name : void 0
            }()), t
        }, O.names = function() {
            var e, t = [];
            for (e in a) a.hasOwnProperty(e) && (n[e] || n[o[e]]) && a[e] && t.push(a[e]);
            return t.sort()
        }, O.Zone = f, O.unpack = p, O.unpackBase60 = u, O.needsOffset = T, O.moveInvalidForward = !0, O.moveAmbiguousForward = !1;
        var w = e.fn;

        function Y(e) {
            return function() {
                return this._z ? this._z.abbr(this) : e.call(this)
            }
        }

        function D(e) {
            return function() {
                return this._z = null, e.apply(this, arguments)
            }
        }
        e.tz = O, e.defaultZone = null, e.updateOffset = function(t, n) {
            var o, a = e.defaultZone;
            if (void 0 === t._z && (a && T(t) && !t._isUTC && (t._d = e.utc(t._a)._d, t.utc().add(a.parse(t), "minutes")), t._z = a), t._z)
                if (o = t._z.utcOffset(t), Math.abs(o) < 16 && (o /= 60), void 0 !== t.utcOffset) {
                    var r = t._z;
                    t.utcOffset(-o, n), t._z = r
                } else t.zone(o, n)
        }, w.tz = function(t, n) {
            if (t) {
                if ("string" != typeof t) throw new Error("Time zone name must be a string, got " + t + " [" + typeof t + "]");
                return this._z = v(t), this._z ? e.updateOffset(this, n) : k("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this
            }
            if (this._z) return this._z.name
        }, w.zoneName = Y(w.zoneName), w.zoneAbbr = Y(w.zoneAbbr), w.utc = D(w.utc), w.local = D(w.local), w.utcOffset = function(e) {
            return function() {
                return arguments.length > 0 && (this._z = null), e.apply(this, arguments)
            }
        }(w.utcOffset), e.tz.setDefault = function(t) {
            return (s < 2 || 2 === s && c < 9) && k("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? v(t) : null, e
        };
        var S = e.momentProperties;
        return "[object Array]" === Object.prototype.toString.call(S) ? (S.push("_z"), S.push("_a")) : S && (S._z = null), e
    })
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var o = {
        "./af": 127,
        "./af.js": 127,
        "./ar": 128,
        "./ar-dz": 129,
        "./ar-dz.js": 129,
        "./ar-kw": 130,
        "./ar-kw.js": 130,
        "./ar-ly": 131,
        "./ar-ly.js": 131,
        "./ar-ma": 132,
        "./ar-ma.js": 132,
        "./ar-sa": 133,
        "./ar-sa.js": 133,
        "./ar-tn": 134,
        "./ar-tn.js": 134,
        "./ar.js": 128,
        "./az": 135,
        "./az.js": 135,
        "./be": 136,
        "./be.js": 136,
        "./bg": 137,
        "./bg.js": 137,
        "./bm": 138,
        "./bm.js": 138,
        "./bn": 139,
        "./bn.js": 139,
        "./bo": 140,
        "./bo.js": 140,
        "./br": 141,
        "./br.js": 141,
        "./bs": 142,
        "./bs.js": 142,
        "./ca": 143,
        "./ca.js": 143,
        "./cs": 144,
        "./cs.js": 144,
        "./cv": 145,
        "./cv.js": 145,
        "./cy": 146,
        "./cy.js": 146,
        "./da": 147,
        "./da.js": 147,
        "./de": 148,
        "./de-at": 149,
        "./de-at.js": 149,
        "./de-ch": 150,
        "./de-ch.js": 150,
        "./de.js": 148,
        "./dv": 151,
        "./dv.js": 151,
        "./el": 152,
        "./el.js": 152,
        "./en-au": 153,
        "./en-au.js": 153,
        "./en-ca": 154,
        "./en-ca.js": 154,
        "./en-gb": 155,
        "./en-gb.js": 155,
        "./en-ie": 156,
        "./en-ie.js": 156,
        "./en-il": 157,
        "./en-il.js": 157,
        "./en-nz": 158,
        "./en-nz.js": 158,
        "./eo": 159,
        "./eo.js": 159,
        "./es": 160,
        "./es-do": 161,
        "./es-do.js": 161,
        "./es-us": 162,
        "./es-us.js": 162,
        "./es.js": 160,
        "./et": 163,
        "./et.js": 163,
        "./eu": 164,
        "./eu.js": 164,
        "./fa": 165,
        "./fa.js": 165,
        "./fi": 166,
        "./fi.js": 166,
        "./fo": 167,
        "./fo.js": 167,
        "./fr": 168,
        "./fr-ca": 169,
        "./fr-ca.js": 169,
        "./fr-ch": 170,
        "./fr-ch.js": 170,
        "./fr.js": 168,
        "./fy": 171,
        "./fy.js": 171,
        "./gd": 172,
        "./gd.js": 172,
        "./gl": 173,
        "./gl.js": 173,
        "./gom-latn": 174,
        "./gom-latn.js": 174,
        "./gu": 175,
        "./gu.js": 175,
        "./he": 176,
        "./he.js": 176,
        "./hi": 177,
        "./hi.js": 177,
        "./hr": 178,
        "./hr.js": 178,
        "./hu": 179,
        "./hu.js": 179,
        "./hy-am": 180,
        "./hy-am.js": 180,
        "./id": 181,
        "./id.js": 181,
        "./is": 182,
        "./is.js": 182,
        "./it": 183,
        "./it.js": 183,
        "./ja": 184,
        "./ja.js": 184,
        "./jv": 185,
        "./jv.js": 185,
        "./ka": 186,
        "./ka.js": 186,
        "./kk": 187,
        "./kk.js": 187,
        "./km": 188,
        "./km.js": 188,
        "./kn": 189,
        "./kn.js": 189,
        "./ko": 190,
        "./ko.js": 190,
        "./ky": 191,
        "./ky.js": 191,
        "./lb": 192,
        "./lb.js": 192,
        "./lo": 193,
        "./lo.js": 193,
        "./lt": 194,
        "./lt.js": 194,
        "./lv": 195,
        "./lv.js": 195,
        "./me": 196,
        "./me.js": 196,
        "./mi": 197,
        "./mi.js": 197,
        "./mk": 198,
        "./mk.js": 198,
        "./ml": 199,
        "./ml.js": 199,
        "./mn": 200,
        "./mn.js": 200,
        "./mr": 201,
        "./mr.js": 201,
        "./ms": 202,
        "./ms-my": 203,
        "./ms-my.js": 203,
        "./ms.js": 202,
        "./mt": 204,
        "./mt.js": 204,
        "./my": 205,
        "./my.js": 205,
        "./nb": 206,
        "./nb.js": 206,
        "./ne": 207,
        "./ne.js": 207,
        "./nl": 208,
        "./nl-be": 209,
        "./nl-be.js": 209,
        "./nl.js": 208,
        "./nn": 210,
        "./nn.js": 210,
        "./pa-in": 211,
        "./pa-in.js": 211,
        "./pl": 212,
        "./pl.js": 212,
        "./pt": 213,
        "./pt-br": 214,
        "./pt-br.js": 214,
        "./pt.js": 213,
        "./ro": 215,
        "./ro.js": 215,
        "./ru": 216,
        "./ru.js": 216,
        "./sd": 217,
        "./sd.js": 217,
        "./se": 218,
        "./se.js": 218,
        "./si": 219,
        "./si.js": 219,
        "./sk": 220,
        "./sk.js": 220,
        "./sl": 221,
        "./sl.js": 221,
        "./sq": 222,
        "./sq.js": 222,
        "./sr": 223,
        "./sr-cyrl": 224,
        "./sr-cyrl.js": 224,
        "./sr.js": 223,
        "./ss": 225,
        "./ss.js": 225,
        "./sv": 226,
        "./sv.js": 226,
        "./sw": 227,
        "./sw.js": 227,
        "./ta": 228,
        "./ta.js": 228,
        "./te": 229,
        "./te.js": 229,
        "./tet": 230,
        "./tet.js": 230,
        "./tg": 231,
        "./tg.js": 231,
        "./th": 232,
        "./th.js": 232,
        "./tl-ph": 233,
        "./tl-ph.js": 233,
        "./tlh": 234,
        "./tlh.js": 234,
        "./tr": 235,
        "./tr.js": 235,
        "./tzl": 236,
        "./tzl.js": 236,
        "./tzm": 237,
        "./tzm-latn": 238,
        "./tzm-latn.js": 238,
        "./tzm.js": 237,
        "./ug-cn": 239,
        "./ug-cn.js": 239,
        "./uk": 240,
        "./uk.js": 240,
        "./ur": 241,
        "./ur.js": 241,
        "./uz": 242,
        "./uz-latn": 243,
        "./uz-latn.js": 243,
        "./uz.js": 242,
        "./vi": 244,
        "./vi.js": 244,
        "./x-pseudo": 245,
        "./x-pseudo.js": 245,
        "./yo": 246,
        "./yo.js": 246,
        "./zh-cn": 247,
        "./zh-cn.js": 247,
        "./zh-hk": 248,
        "./zh-hk.js": 248,
        "./zh-tw": 249,
        "./zh-tw.js": 249
    };

    function a(e) {
        var t = r(e);
        return n(t)
    }

    function r(e) {
        if (!n.o(o, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return o[e]
    }
    a.keys = function() {
        return Object.keys(o)
    }, a.resolve = r, e.exports = a, a.id = 265
}, function(e) {
    e.exports = {
        version: "2019c",
        links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Singapore", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Atlantic/South_Georgia|Etc/GMT+2", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT-0|Etc/GMT", "Etc/GMT-0|Etc/GMT+0", "Etc/GMT-0|Etc/GMT0", "Etc/GMT-0|Etc/Greenwich", "Etc/GMT-0|GMT", "Etc/GMT-0|GMT+0", "Etc/GMT-0|GMT-0", "Etc/GMT-0|GMT0", "Etc/GMT-0|Greenwich", "Etc/UTC|Etc/UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UCT", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Indian/Christmas|Etc/GMT-7", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Palau|Etc/GMT-9", "Pacific/Pohnpei|Pacific/Ponape", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Tarawa|Etc/GMT-12", "Pacific/Tarawa|Pacific/Funafuti", "Pacific/Tarawa|Pacific/Wake", "Pacific/Tarawa|Pacific/Wallis"]
    }
}, function(e, t, n) {
    "use strict";
    (function(e, t) {
        var o = f(n(14)),
            a = f(n(15)),
            r = n(106),
            i = n(34),
            s = n(33),
            c = n(103),
            d = n(54),
            u = n(94),
            l = n(29),
            M = (n(56), f(n(96))),
            p = n(95);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = "header,main,footer";
        (0, r.register)("inline-cart", {
            onLoad: function() {
                setTimeout(p.init, 250), this.$container = e(this.container), this.$container.addClass("is-enabled"), this.$cart = this.$container.find("[cart-main]"), this.namespace = "." + this.id, this.lazyLoader = new M.default({
                    container: this.$cart.get(0)
                }), this.state = {
                    open: !1,
                    toggleTimeout: null
                }, this.init()
            },
            onUnload: function() {
                this.$container.off(this.namespace), e(document).off(this.namespace)
            },
            init: function() {
                var n = this;
                document.addEventListener("DOMContentLoaded", function() {
                    (0, c.init)(), (0, s.init)(), (0, d.init)()
                }), document.addEventListener("cart.ui.updated", function(e) {
                    n.lazyLoader.update(), setTimeout(function() {
                        n.$cart.animate({
                            scrollTop: 0
                        })
                    }, 50)
                }), e(document).on("inlinecart.open", this.open.bind(this)), e(document).on("click" + this.namespace, "[data-toggle-inline-cart]", this.toggleInlineCart.bind(this)), e(document).on("toggle-inline-cart" + this.namespace, this.toggleInlineCart.bind(this)), this.$container.on("click" + this.namespace, "[data-close-inlinecart]", this.close.bind(this)), t.__NATIVE__ = t.__NATIVE__ || {}, t.__NATIVE__.inlineCartToggle = function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? n.open() : n.close()
                }
            },
            toggleInlineCart: function(e) {
                e.preventDefault(), this.state.open ? this.close() : this.open()
            },
            clearTimeout: function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }(function() {
                clearTimeout(this.state.toggleTimeout), this.state.toggleTimeout = null
            }),
            open: function() {
                var t = this;
                return (0, a.default)(o.default.mark(function n() {
                    var a;
                    return o.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, (0, s.updateCartUI)();
                            case 2:
                                if (!t.state.open) {
                                    n.next = 4;
                                    break
                                }
                                return n.abrupt("return", null);
                            case 4:
                                return t.state.open = !0, t.$container.show(), t.clearTimeout(), t.lazyLoader.update(), t.state.toggleTimeout = setTimeout(function() {
                                    t.$cart.addClass("is-active")
                                }, 50), t.$cart.scrollTop(0), (0, l.hide)(), (0, u.show)(), e(_).addClass("u-blur"), n.next = 15, (0, i.getSlider)("inline-cart-upsells");
                            case 15:
                                (a = n.sent) && a.length && a.slick("resize"), window.tkbl_apply_coupon();
                            case 18:
                            case "end":
                                return n.stop()
                        }
                    }, n, t)
                }))()
            },
            close: function() {
                var t = this;
                this.state.open = !1, this.clearTimeout(), this.$cart.removeClass("is-active"), this.state.toggleTimeout = setTimeout(function() {
                    t.$container.hide()
                }, 350), (0, u.hide)(), e(_).removeClass("u-blur")
            }
        }), "cart" !== window.shop.template && (0, r.load)("inline-cart")
    }).call(this, n(0), n(19))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var o = function(e, t) {
            return e === t || e != e && t != t
        },
        a = function(e, t) {
            for (var n = e.length; n--;)
                if (o(e[n][0], t)) return n;
            return -1
        },
        r = Array.prototype.splice;

    function i(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }
    i.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, i.prototype.delete = function(e) {
        var t = this.__data__,
            n = a(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, 0))
    }, i.prototype.get = function(e) {
        var t = this.__data__,
            n = a(t, e);
        return n < 0 ? void 0 : t[n][1]
    }, i.prototype.has = function(e) {
        return a(this.__data__, e) > -1
    }, i.prototype.set = function(e, t) {
        var n = this.__data__,
            o = a(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
    };
    var s = i,
        c = n(97),
        d = c.a.Symbol,
        u = Object.prototype,
        l = u.hasOwnProperty,
        M = u.toString,
        p = d ? d.toStringTag : void 0,
        f = Object.prototype.toString,
        _ = d ? d.toStringTag : void 0,
        m = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : _ && _ in Object(e) ? function(e) {
                var t = l.call(e, p),
                    n = e[p];
                try {
                    e[p] = void 0;
                    var o = !0
                } catch (e) {}
                var a = M.call(e);
                return o && (t ? e[p] = n : delete e[p]), a
            }(e) : function(e) {
                return f.call(e)
            }(e)
        },
        h = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        },
        b = function(e) {
            if (!h(e)) return !1;
            var t = m(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        },
        L = c.a["__core-js_shared__"],
        y = function() {
            var e = /[^.]+$/.exec(L && L.keys && L.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }(),
        A = Function.prototype.toString,
        z = function(e) {
            if (null != e) {
                try {
                    return A.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        v = /^\[object .+?Constructor\]$/,
        g = Function.prototype,
        T = Object.prototype,
        k = g.toString,
        O = T.hasOwnProperty,
        w = RegExp("^" + k.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Y = function(e) {
            return !(!h(e) || function(e) {
                return !!y && y in e
            }(e)) && (b(e) ? w : v).test(z(e))
        },
        D = function(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return Y(n) ? n : void 0
        },
        S = D(c.a, "Map"),
        q = D(Object, "create"),
        N = Object.prototype.hasOwnProperty,
        W = Object.prototype.hasOwnProperty;

    function x(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }
    x.prototype.clear = function() {
        this.__data__ = q ? q(null) : {}, this.size = 0
    }, x.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }, x.prototype.get = function(e) {
        var t = this.__data__;
        if (q) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return N.call(t, e) ? t[e] : void 0
    }, x.prototype.has = function(e) {
        var t = this.__data__;
        return q ? void 0 !== t[e] : W.call(t, e)
    }, x.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = q && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };
    var X = x,
        C = function(e, t) {
            var n = e.__data__;
            return function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        };

    function B(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }
    B.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new X,
            map: new(S || s),
            string: new X
        }
    }, B.prototype.delete = function(e) {
        var t = C(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }, B.prototype.get = function(e) {
        return C(this, e).get(e)
    }, B.prototype.has = function(e) {
        return C(this, e).has(e)
    }, B.prototype.set = function(e, t) {
        var n = C(this, e),
            o = n.size;
        return n.set(e, t), this.size += n.size == o ? 0 : 1, this
    };
    var j = B;

    function E(e) {
        var t = this.__data__ = new s(e);
        this.size = t.size
    }
    E.prototype.clear = function() {
        this.__data__ = new s, this.size = 0
    }, E.prototype.delete = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }, E.prototype.get = function(e) {
        return this.__data__.get(e)
    }, E.prototype.has = function(e) {
        return this.__data__.has(e)
    }, E.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof s) {
            var o = n.__data__;
            if (!S || o.length < 199) return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new j(o)
        }
        return n.set(e, t), this.size = n.size, this
    };
    var H = E;

    function P(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new j; ++t < n;) this.add(e[t])
    }
    P.prototype.add = P.prototype.push = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    }, P.prototype.has = function(e) {
        return this.__data__.has(e)
    };
    var R = P,
        I = function(e, t) {
            for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
                if (t(e[n], n, e)) return !0;
            return !1
        },
        F = function(e, t) {
            return e.has(t)
        },
        U = function(e, t, n, o, a, r) {
            var i = 1 & n,
                s = e.length,
                c = t.length;
            if (s != c && !(i && c > s)) return !1;
            var d = r.get(e);
            if (d && r.get(t)) return d == t;
            var u = -1,
                l = !0,
                M = 2 & n ? new R : void 0;
            for (r.set(e, t), r.set(t, e); ++u < s;) {
                var p = e[u],
                    f = t[u];
                if (o) var _ = i ? o(f, p, u, t, e, r) : o(p, f, u, e, t, r);
                if (void 0 !== _) {
                    if (_) continue;
                    l = !1;
                    break
                }
                if (M) {
                    if (!I(t, function(e, t) {
                            if (!F(M, t) && (p === e || a(p, e, n, o, r))) return M.push(t)
                        })) {
                        l = !1;
                        break
                    }
                } else if (p !== f && !a(p, f, n, o, r)) {
                    l = !1;
                    break
                }
            }
            return r.delete(e), r.delete(t), l
        },
        $ = c.a.Uint8Array,
        J = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, o) {
                n[++t] = [o, e]
            }), n
        },
        G = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e) {
                n[++t] = e
            }), n
        },
        V = d ? d.prototype : void 0,
        K = V ? V.valueOf : void 0,
        Q = function(e, t, n, a, r, i, s) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !i(new $(e), new $(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return o(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var c = J;
                case "[object Set]":
                    var d = 1 & a;
                    if (c || (c = G), e.size != t.size && !d) return !1;
                    var u = s.get(e);
                    if (u) return u == t;
                    a |= 2, s.set(e, t);
                    var l = U(c(e), c(t), a, r, i, s);
                    return s.delete(e), l;
                case "[object Symbol]":
                    if (K) return K.call(e) == K.call(t)
            }
            return !1
        },
        Z = Array.isArray,
        ee = Object.prototype.propertyIsEnumerable,
        te = Object.getOwnPropertySymbols,
        ne = te ? function(e) {
            return null == e ? [] : (e = Object(e), function(e, t) {
                for (var n = -1, o = null == e ? 0 : e.length, a = 0, r = []; ++n < o;) {
                    var i = e[n];
                    t(i, n, e) && (r[a++] = i)
                }
                return r
            }(te(e), function(t) {
                return ee.call(e, t)
            }))
        } : function() {
            return []
        },
        oe = function(e) {
            return null != e && "object" == typeof e
        },
        ae = function(e) {
            return oe(e) && "[object Arguments]" == m(e)
        },
        re = Object.prototype,
        ie = re.hasOwnProperty,
        se = re.propertyIsEnumerable,
        ce = ae(function() {
            return arguments
        }()) ? ae : function(e) {
            return oe(e) && ie.call(e, "callee") && !se.call(e, "callee")
        },
        de = n(119),
        ue = /^(?:0|[1-9]\d*)$/,
        le = function(e, t) {
            var n = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && ue.test(e)) && e > -1 && e % 1 == 0 && e < t
        },
        Me = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        },
        pe = {};
    pe["[object Float32Array]"] = pe["[object Float64Array]"] = pe["[object Int8Array]"] = pe["[object Int16Array]"] = pe["[object Int32Array]"] = pe["[object Uint8Array]"] = pe["[object Uint8ClampedArray]"] = pe["[object Uint16Array]"] = pe["[object Uint32Array]"] = !0, pe["[object Arguments]"] = pe["[object Array]"] = pe["[object ArrayBuffer]"] = pe["[object Boolean]"] = pe["[object DataView]"] = pe["[object Date]"] = pe["[object Error]"] = pe["[object Function]"] = pe["[object Map]"] = pe["[object Number]"] = pe["[object Object]"] = pe["[object RegExp]"] = pe["[object Set]"] = pe["[object String]"] = pe["[object WeakMap]"] = !1;
    var fe = n(125),
        _e = fe.a && fe.a.isTypedArray,
        me = _e ? function(e) {
            return function(t) {
                return e(t)
            }
        }(_e) : function(e) {
            return oe(e) && Me(e.length) && !!pe[m(e)]
        },
        he = Object.prototype.hasOwnProperty,
        be = function(e, t) {
            var n = Z(e),
                o = !n && ce(e),
                a = !n && !o && Object(de.a)(e),
                r = !n && !o && !a && me(e),
                i = n || o || a || r,
                s = i ? function(e, t) {
                    for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
                    return o
                }(e.length, String) : [],
                c = s.length;
            for (var d in e) !t && !he.call(e, d) || i && ("length" == d || a && ("offset" == d || "parent" == d) || r && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || le(d, c)) || s.push(d);
            return s
        },
        Le = Object.prototype,
        ye = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }(Object.keys, Object),
        Ae = Object.prototype.hasOwnProperty,
        ze = function(e) {
            if (! function(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || Le)
                }(e)) return ye(e);
            var t = [];
            for (var n in Object(e)) Ae.call(e, n) && "constructor" != n && t.push(n);
            return t
        },
        ve = function(e) {
            return null != e && Me(e.length) && !b(e)
        },
        ge = function(e) {
            return ve(e) ? be(e) : ze(e)
        },
        Te = function(e) {
            return function(e, t, n) {
                var o = t(e);
                return Z(e) ? o : function(e, t) {
                    for (var n = -1, o = t.length, a = e.length; ++n < o;) e[a + n] = t[n];
                    return e
                }(o, n(e))
            }(e, ge, ne)
        },
        ke = Object.prototype.hasOwnProperty,
        Oe = D(c.a, "DataView"),
        we = D(c.a, "Promise"),
        Ye = D(c.a, "Set"),
        De = D(c.a, "WeakMap"),
        Se = z(Oe),
        qe = z(S),
        Ne = z(we),
        We = z(Ye),
        xe = z(De),
        Xe = m;
    (Oe && "[object DataView]" != Xe(new Oe(new ArrayBuffer(1))) || S && "[object Map]" != Xe(new S) || we && "[object Promise]" != Xe(we.resolve()) || Ye && "[object Set]" != Xe(new Ye) || De && "[object WeakMap]" != Xe(new De)) && (Xe = function(e) {
        var t = m(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            o = n ? z(n) : "";
        if (o) switch (o) {
            case Se:
                return "[object DataView]";
            case qe:
                return "[object Map]";
            case Ne:
                return "[object Promise]";
            case We:
                return "[object Set]";
            case xe:
                return "[object WeakMap]"
        }
        return t
    });
    var Ce = Xe,
        Be = "[object Arguments]",
        je = "[object Array]",
        Ee = "[object Object]",
        He = Object.prototype.hasOwnProperty,
        Pe = function(e, t, n, o, a, r) {
            var i = Z(e),
                s = Z(t),
                c = i ? je : Ce(e),
                d = s ? je : Ce(t),
                u = (c = c == Be ? Ee : c) == Ee,
                l = (d = d == Be ? Ee : d) == Ee,
                M = c == d;
            if (M && Object(de.a)(e)) {
                if (!Object(de.a)(t)) return !1;
                i = !0, u = !1
            }
            if (M && !u) return r || (r = new H), i || me(e) ? U(e, t, n, o, a, r) : Q(e, t, c, n, o, a, r);
            if (!(1 & n)) {
                var p = u && He.call(e, "__wrapped__"),
                    f = l && He.call(t, "__wrapped__");
                if (p || f) {
                    var _ = p ? e.value() : e,
                        m = f ? t.value() : t;
                    return r || (r = new H), a(_, m, n, o, r)
                }
            }
            return !!M && (r || (r = new H), function(e, t, n, o, a, r) {
                var i = 1 & n,
                    s = Te(e),
                    c = s.length;
                if (c != Te(t).length && !i) return !1;
                for (var d = c; d--;) {
                    var u = s[d];
                    if (!(i ? u in t : ke.call(t, u))) return !1
                }
                var l = r.get(e);
                if (l && r.get(t)) return l == t;
                var M = !0;
                r.set(e, t), r.set(t, e);
                for (var p = i; ++d < c;) {
                    var f = e[u = s[d]],
                        _ = t[u];
                    if (o) var m = i ? o(_, f, u, t, e, r) : o(f, _, u, e, t, r);
                    if (!(void 0 === m ? f === _ || a(f, _, n, o, r) : m)) {
                        M = !1;
                        break
                    }
                    p || (p = "constructor" == u)
                }
                if (M && !p) {
                    var h = e.constructor,
                        b = t.constructor;
                    h != b && "constructor" in e && "constructor" in t && !("function" == typeof h && h instanceof h && "function" == typeof b && b instanceof b) && (M = !1)
                }
                return r.delete(e), r.delete(t), M
            }(e, t, n, o, a, r))
        },
        Re = function e(t, n, o, a, r) {
            return t === n || (null == t || null == n || !oe(t) && !oe(n) ? t != t && n != n : Pe(t, n, o, a, e, r))
        },
        Ie = function(e) {
            return e == e && !h(e)
        },
        Fe = function(e, t) {
            return function(n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n))
            }
        },
        Ue = function(e) {
            var t = function(e) {
                for (var t = ge(e), n = t.length; n--;) {
                    var o = t[n],
                        a = e[o];
                    t[n] = [o, a, Ie(a)]
                }
                return t
            }(e);
            return 1 == t.length && t[0][2] ? Fe(t[0][0], t[0][1]) : function(n) {
                return n === e || function(e, t, n, o) {
                    var a = n.length,
                        r = a,
                        i = !o;
                    if (null == e) return !r;
                    for (e = Object(e); a--;) {
                        var s = n[a];
                        if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                    }
                    for (; ++a < r;) {
                        var c = (s = n[a])[0],
                            d = e[c],
                            u = s[1];
                        if (i && s[2]) {
                            if (void 0 === d && !(c in e)) return !1
                        } else {
                            var l = new H;
                            if (o) var M = o(d, u, c, e, t, l);
                            if (!(void 0 === M ? Re(u, d, 3, o, l) : M)) return !1
                        }
                    }
                    return !0
                }(n, e, t)
            }
        },
        $e = function(e) {
            return "symbol" == typeof e || oe(e) && "[object Symbol]" == m(e)
        },
        Je = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ge = /^\w*$/,
        Ve = function(e, t) {
            if (Z(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !$e(e)) || Ge.test(e) || !Je.test(e) || null != t && e in Object(t)
        },
        Ke = "Expected a function";

    function Qe(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(Ke);
        var n = function() {
            var o = arguments,
                a = t ? t.apply(this, o) : o[0],
                r = n.cache;
            if (r.has(a)) return r.get(a);
            var i = e.apply(this, o);
            return n.cache = r.set(a, i) || r, i
        };
        return n.cache = new(Qe.Cache || j), n
    }
    Qe.Cache = j;
    var Ze = Qe,
        et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        tt = /\\(\\)?/g,
        nt = function(e) {
            var t = Ze(function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(et, function(e, n, o, a) {
                        t.push(o ? a.replace(tt, "$1") : n || e)
                    }), t
                }, function(e) {
                    return 500 === n.size && n.clear(), e
                }),
                n = t.cache;
            return t
        }(),
        ot = d ? d.prototype : void 0,
        at = ot ? ot.toString : void 0,
        rt = function e(t) {
            if ("string" == typeof t) return t;
            if (Z(t)) return function(e, t) {
                for (var n = -1, o = null == e ? 0 : e.length, a = Array(o); ++n < o;) a[n] = t(e[n], n, e);
                return a
            }(t, e) + "";
            if ($e(t)) return at ? at.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        },
        it = function(e, t) {
            return Z(e) ? e : Ve(e, t) ? [e] : nt(function(e) {
                return null == e ? "" : rt(e)
            }(e))
        },
        st = function(e) {
            if ("string" == typeof e || $e(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        },
        ct = function(e, t) {
            for (var n = 0, o = (t = it(t, e)).length; null != e && n < o;) e = e[st(t[n++])];
            return n && n == o ? e : void 0
        },
        dt = function(e, t) {
            return null != e && t in Object(e)
        },
        ut = function(e, t) {
            return null != e && function(e, t, n) {
                for (var o = -1, a = (t = it(t, e)).length, r = !1; ++o < a;) {
                    var i = st(t[o]);
                    if (!(r = null != e && n(e, i))) break;
                    e = e[i]
                }
                return r || ++o != a ? r : !!(a = null == e ? 0 : e.length) && Me(a) && le(i, a) && (Z(e) || ce(e))
            }(e, t, dt)
        },
        lt = function(e, t) {
            return Ve(e) && Ie(t) ? Fe(st(e), t) : function(n) {
                var o = function(e, t, n) {
                    var o = null == e ? void 0 : ct(e, t);
                    return void 0 === o ? n : o
                }(n, e);
                return void 0 === o && o === t ? ut(n, e) : Re(t, o, 3)
            }
        },
        Mt = function(e) {
            return e
        },
        pt = function(e) {
            return Ve(e) ? function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }(st(e)) : function(e) {
                return function(t) {
                    return ct(t, e)
                }
            }(e)
        },
        ft = function(e) {
            return "function" == typeof e ? e : null == e ? Mt : "object" == typeof e ? Z(e) ? lt(e[0], e[1]) : Ue(e) : pt(e)
        },
        _t = /^\s+|\s+$/g,
        mt = /^[-+]0x[0-9a-f]+$/i,
        ht = /^0b[01]+$/i,
        bt = /^0o[0-7]+$/i,
        Lt = parseInt,
        yt = function(e) {
            return e ? (e = function(e) {
                if ("number" == typeof e) return e;
                if ($e(e)) return NaN;
                if (h(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = h(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(_t, "");
                var n = ht.test(e);
                return n || bt.test(e) ? Lt(e.slice(2), n ? 2 : 8) : mt.test(e) ? NaN : +e
            }(e)) === 1 / 0 || e === -1 / 0 ? 1.7976931348623157e308 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        At = Math.max,
        zt = function(e) {
            return function(t, n, o) {
                var a = Object(t);
                if (!ve(t)) {
                    var r = ft(n);
                    t = ge(t), n = function(e) {
                        return r(a[e], e, a)
                    }
                }
                var i = e(t, n, o);
                return i > -1 ? a[r ? t[i] : i] : void 0
            }
        }(function(e, t, n) {
            var o = null == e ? 0 : e.length;
            if (!o) return -1;
            var a = null == n ? 0 : function(e) {
                var t = yt(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }(n);
            return a < 0 && (a = At(o + a, 0)),
                function(e, t, n, o) {
                    for (var a = e.length, r = n + (o ? 1 : -1); o ? r-- : ++r < a;)
                        if (t(e[r], r, e)) return r;
                    return -1
                }(e, ft(t), a)
        });
    t.default = zt
}, function(e, t) {}]);