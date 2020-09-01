! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Charts = e() : (t.Barchart = t.Barchart || {}, t.Barchart.RealtimeWidgets = t.Barchart.RealtimeWidgets || {}, t.Barchart.RealtimeWidgets.Charts = e())
}(window, (function() {
    return function(t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var s = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
                for (var s in t) i.d(n, s, function(e) {
                    return t[e]
                }.bind(null, s));
            return n
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 35)
    }([function(t, e, i) {
        (function(t) {
            ! function(i, n) {
                "use strict";
                var s = {};
                i.PubSub = s;
                var r = i.define;
                ! function(t) {
                    var e = {},
                        i = -1;

                    function n(t) {
                        var e;
                        for (e in t)
                            if (t.hasOwnProperty(e)) return !0;
                        return !1
                    }

                    function s(t, e, i) {
                        try {
                            t(e, i)
                        } catch (t) {
                            setTimeout(function(t) {
                                return function() {
                                    throw t
                                }
                            }(t), 0)
                        }
                    }

                    function r(t, e, i) {
                        t(e, i)
                    }

                    function o(t, i, n, o) {
                        var a, l = e[i],
                            c = o ? r : s;
                        if (e.hasOwnProperty(i))
                            for (a in l) l.hasOwnProperty(a) && c(l[a], t, n)
                    }

                    function a(t, i, s, r) {
                        var a = function(t, e, i) {
                            return function() {
                                var n = String(t),
                                    s = n.lastIndexOf(".");
                                for (o(t, t, e, i); - 1 !== s;) s = (n = n.substr(0, s)).lastIndexOf("."), o(t, n, e, i)
                            }
                        }(t = "symbol" == typeof t ? t.toString() : t, i, r);
                        return !! function(t) {
                            for (var i = String(t), s = Boolean(e.hasOwnProperty(i) && n(e[i])), r = i.lastIndexOf("."); !s && -1 !== r;) r = (i = i.substr(0, r)).lastIndexOf("."), s = Boolean(e.hasOwnProperty(i) && n(e[i]));
                            return s
                        }(t) && (!0 === s ? a() : setTimeout(a, 0), !0)
                    }
                    t.publish = function(e, i) {
                        return a(e, i, !1, t.immediateExceptions)
                    }, t.publishSync = function(e, i) {
                        return a(e, i, !0, t.immediateExceptions)
                    }, t.subscribe = function(t, n) {
                        if ("function" != typeof n) return !1;
                        t = "symbol" == typeof t ? t.toString() : t, e.hasOwnProperty(t) || (e[t] = {});
                        var s = "uid_" + String(++i);
                        return e[t][s] = n, s
                    }, t.subscribeOnce = function(e, i) {
                        var n = t.subscribe(e, (function() {
                            t.unsubscribe(n), i.apply(this, arguments)
                        }));
                        return t
                    }, t.clearAllSubscriptions = function() {
                        e = {}
                    }, t.clearSubscriptions = function(t) {
                        var i;
                        for (i in e) e.hasOwnProperty(i) && 0 === i.indexOf(t) && delete e[i]
                    }, t.countSubscriptions = function(t) {
                        var i, n = 0;
                        for (i in e) e.hasOwnProperty(i) && 0 === i.indexOf(t) && n++;
                        return n
                    }, t.getSubscriptions = function(t) {
                        var i, n = [];
                        for (i in e) e.hasOwnProperty(i) && 0 === i.indexOf(t) && n.push(i);
                        return n
                    }, t.unsubscribe = function(i) {
                        var n, s, r, o = "string" == typeof i && (e.hasOwnProperty(i) || function(t) {
                                var i;
                                for (i in e)
                                    if (e.hasOwnProperty(i) && 0 === i.indexOf(t)) return !0;
                                return !1
                            }(i)),
                            a = !o && "string" == typeof i,
                            l = "function" == typeof i,
                            c = !1;
                        if (!o) {
                            for (n in e)
                                if (e.hasOwnProperty(n)) {
                                    if (s = e[n], a && s[i]) {
                                        delete s[i], c = i;
                                        break
                                    }
                                    if (l)
                                        for (r in s) s.hasOwnProperty(r) && s[r] === i && (delete s[r], c = !0)
                                } return c
                        }
                        t.clearSubscriptions(i)
                    }
                }(s), "function" == typeof r && r.amd ? r((function() {
                    return s
                })) : (void 0 !== t && t.exports && (e = t.exports = s), e.PubSub = s, t.exports = e = s)
            }("object" == typeof window && window || this)
        }).call(this, i(25)(t))
    }, function(t, e, i) {
        "use strict";
        t.exports = i(26)
    }, , , , function(t, e, i) {
        "use strict";
        var n, s, r, o = i(27),
            a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

        function l() {
            r = !1
        }

        function c(t) {
            if (t) {
                if (t !== n) {
                    if (t.length !== a.length) throw new Error("Custom alphabet for shortid must be " + a.length + " unique characters. You submitted " + t.length + " characters: " + t);
                    var e = t.split("").filter((function(t, e, i) {
                        return e !== i.lastIndexOf(t)
                    }));
                    if (e.length) throw new Error("Custom alphabet for shortid must be " + a.length + " unique characters. These characters were not unique: " + e.join(", "));
                    n = t, l()
                }
            } else n !== a && (n = a, l())
        }

        function u() {
            return r || (r = function() {
                n || c(a);
                for (var t, e = n.split(""), i = [], s = o.nextValue(); e.length > 0;) s = o.nextValue(), t = Math.floor(s * e.length), i.push(e.splice(t, 1)[0]);
                return i.join("")
            }())
        }
        t.exports = {
            get: function() {
                return n || a
            },
            characters: function(t) {
                return c(t), n
            },
            seed: function(t) {
                o.seed(t), s !== t && (l(), s = t)
            },
            lookup: function(t) {
                return u()[t]
            },
            shuffled: u
        }
    }, function(t, e, i) {
        const n = i(7);
        t.exports = (() => {
            "use strict";
            const t = {
                    A: "F",
                    B: "G",
                    C: "H",
                    D: "J",
                    E: "K",
                    I: "M",
                    L: "N",
                    O: "Q",
                    P: "U",
                    R: "V",
                    S: "X",
                    T: "Z"
                },
                e = {
                    F: 1,
                    G: 2,
                    H: 3,
                    J: 4,
                    K: 5,
                    M: 6,
                    N: 7,
                    Q: 8,
                    U: 9,
                    V: 10,
                    X: 11,
                    Z: 12
                },
                i = {
                    bats: /^(.*)\.BZ$/i,
                    percent: /(\.RT)$/
                },
                s = {
                    forex: /^\^([A-Z]{3})([A-Z]{3})$/i,
                    futures: {}
                };
            s.futures.spread = /^_S_/i, s.futures.concrete = /^([A-Z][A-Z0-9\$\-!\.]{0,2})([A-Z]{1})([0-9]{4}|[0-9]{1,2})$/i, s.futures.alias = /^([A-Z][A-Z0-9\$\-!\.]{0,2})(\*{1})([0-9]{1,2})$/i, s.futures.options = {}, s.futures.options.short = /^([A-Z][A-Z0-9\$\-!\.]?)([A-Z])([0-9]{1,4})([A-Z])$/i, s.futures.options.long = /^([A-Z][A-Z0-9\$\-!\.]{0,2})([A-Z])([0-9]{1,4})\|(\-?[0-9]{1,5})(C|P)$/i, s.futures.options.historical = /^([A-Z][A-Z0-9\$\-!\.]{0,2})([A-Z])([0-9]{2})([0-9]{1,5})(C|P)$/i, s.indicies = {}, s.indicies.external = /^\$(.*)$/i, s.indicies.sector = /^\-(.*)$/i, s.indicies.cmdty = /^(.*)\.CM$/i;
            const r = [];
            r.push(t => {
                let e = null;
                return s.futures.spread.test(t) && (e = {}, e.symbol = t, e.type = "future_spread"), e
            }), r.push(t => {
                let e = null;
                const i = t.match(s.futures.concrete);
                return null !== i && (e = {}, e.symbol = t, e.type = "future", e.dynamic = !1, e.root = i[1], e.month = i[2], e.year = c(i[3])), e
            }), r.push(t => {
                let e = null;
                const i = t.match(s.futures.alias);
                return null !== i && (e = {}, e.symbol = t, e.type = "future", e.dynamic = !0, e.root = i[1], e.dynamicCode = i[3]), e
            }), r.push(t => {
                let e = null;
                return s.forex.test(t) && (e = {}, e.symbol = t, e.type = "forex"), e
            }), r.push(t => {
                let e = null;
                return s.indicies.external.test(t) && (e = {}, e.symbol = t, e.type = "index"), e
            }), r.push(t => {
                let e = null;
                return s.indicies.sector.test(t) && (e = {}, e.symbol = t, e.type = "sector"), e
            }), r.push(t => {
                let e = null;
                const i = t.match(s.futures.options.short);
                if (null !== i) {
                    e = {};
                    const n = i[4].charCodeAt(0),
                        s = 80,
                        r = 67;
                    let o, l;
                    n < s ? (o = "call", l = n - r) : (o = "put", l = n - s), e.symbol = t, e.type = "future_option", e.option_type = o, e.strike = parseInt(i[3]), e.root = i[1], e.month = i[2], e.year = a() + l
                }
                return e
            }), r.push(e => {
                let i = null;
                const n = e.match(s.futures.options.long) || e.match(s.futures.options.historical);
                var r;
                return null !== n && (i = {}, i.symbol = e, i.type = "future_option", i.option_type = "C" === n[5] ? "call" : "put", i.strike = parseInt(n[4]), i.root = n[1], i.month = (r = n[2], t[r] || r), i.year = c(n[3])), i
            });
            const o = [];

            function a() {
                return (new Date).getFullYear()
            }

            function l(t, e) {
                const i = t.toString();
                return i.substring(i.length - e, i.length)
            }

            function c(t) {
                const e = a();
                let i = parseInt(t);
                if (i < 10) {
                    const t = i < e % 10 ? 1 : 0;
                    i = 10 * Math.floor(e / 10) + i + 10 * t
                } else if (i < 100 && (i = 100 * Math.floor(e / 100) + i, i < e)) {
                    const t = i + 100;
                    e - i > t - e && (i = t)
                }
                return i
            }

            function u(t) {
                return "call" === t ? "C" : "put" === t ? "P" : null
            }
            o.push(t => {
                let e = null;
                return h.getIsFuture(t) && h.getIsConcrete(t) && (e = t.replace(/(.{1,3})([A-Z]{1})([0-9]{3}|[0-9]{1})?([0-9]{1})$/i, "$1$2$4") || null), e
            }), o.push(t => {
                let e = null;
                if (h.getIsFutureOption(t)) {
                    const i = h.parseInstrumentType(t),
                        n = u(i.option_type);
                    if (i.root.length < 3) {
                        const t = n.charCodeAt(0);
                        e = `${i.root}${i.month}${i.strike}${String.fromCharCode(t+i.year-a())}`
                    } else e = `${i.root}${i.month}${l(i.year,1)}|${i.strike}${n}`
                }
                return e
            }), o.push(t => t);
            class h {
                constructor() {}
                static parseInstrumentType(t) {
                    if (!n.string(t)) return null;
                    let e = null;
                    for (let i = 0; i < r.length && null === e; i++) {
                        e = (0, r[i])(t)
                    }
                    return e
                }
                static getProducerSymbol(t) {
                    if (!n.string(t)) return null;
                    let e = null;
                    for (let i = 0; i < o.length && null === e; i++) {
                        e = (0, o[i])(t)
                    }
                    return e
                }
                static getFuturesOptionPipelineFormat(t) {
                    const e = h.parseInstrumentType(t);
                    let i = null;
                    if ("future_option" === e.type) {
                        const t = u(e.option_type);
                        i = `${e.root}${e.month}${l(e.year,1)}|${e.strike}${t}`
                    }
                    return i
                }
                static getIsConcrete(t) {
                    return n.string(t) && !s.futures.alias.test(t)
                }
                static getIsReference(t) {
                    return n.string(t) && s.futures.alias.test(t)
                }
                static getIsFuture(t) {
                    return n.string(t) && (s.futures.concrete.test(t) || s.futures.alias.test(t))
                }
                static getIsFutureSpread(t) {
                    return n.string(t) && s.futures.spread.test(t)
                }
                static getIsFutureOption(t) {
                    return n.string(t) && (s.futures.options.short.test(t) || s.futures.options.long.test(t) || s.futures.options.historical.test(t))
                }
                static getIsForex(t) {
                    return n.string(t) && s.forex.test(t)
                }
                static getIsIndex(t) {
                    return n.string(t) && s.indicies.external.test(t)
                }
                static getIsSector(t) {
                    return n.string(t) && s.indicies.sector.test(t)
                }
                static getIsCmdty(t) {
                    return n.string(t) && s.indicies.cmdty.test(t)
                }
                static getIsBats(t) {
                    return n.string(t) && i.bats.test(t)
                }
                static getIsExpired(t) {
                    const i = h.parseInstrumentType(t);
                    let n = !1;
                    if (null !== i && i.year && i.month) {
                        const t = a();
                        if (i.year < t) n = !0;
                        else if (i.year === t && e.hasOwnProperty(i.month)) {
                            (new Date).getMonth() + 1 > e[i.month] && (n = !0)
                        }
                    }
                    return n
                }
                static displayUsingPercent(t) {
                    return n.string(t) && i.percent.test(t)
                }
                toString() {
                    return "[SymbolParser]"
                }
            }
            return h
        })()
    }, function(t, e) {
        t.exports = (() => {
            "use strict";
            return {
                number: t => "number" == typeof t && !isNaN(t),
                nan: t => "number" == typeof t && isNaN(t),
                integer: t => "number" == typeof t && !isNaN(t) && (0 | t) === t,
                large: t => "number" == typeof t && !isNaN(t) && isFinite(t) && Math.floor(t) === t,
                positive(t) {
                    return this.number(t) && t > 0
                },
                negative(t) {
                    return this.number(t) && t < 0
                },
                string: t => "string" == typeof t,
                date: t => t instanceof Date,
                fn: t => "function" == typeof t,
                array: t => Array.isArray(t),
                boolean: t => "boolean" == typeof t,
                object: t => "object" == typeof t && null !== t,
                null: t => null === t,
                undefined: t => void 0 === t,
                extension(t, e) {
                    return this.fn(t) && this.fn(e) && e.prototype instanceof t
                }
            }
        })()
    }, function(t, e, i) {
        const n = i(7);
        t.exports = (() => {
            "use strict";
            return function(t, e, i, s) {
                if (!n.number(t)) return "";
                const r = t < 0 && !0 === s;
                r && (t = 0 - t);
                let o = t.toFixed(e);
                if (i && (t < -999 || t > 999)) {
                    const n = t < 0;
                    let s = 0 === e,
                        a = 0;
                    const l = [];
                    for (let t = o.length - 1; !(t < 0); t--) {
                        3 !== a || n && 0 === t || (l.unshift(i), a = 0);
                        const e = o.charAt(t);
                        l.unshift(e), s ? a += 1 : "." === e && (s = !0)
                    }
                    r && (l.unshift("("), l.push(")")), o = l.join("")
                } else r && (o = "(" + o + ")");
                return o
            }
        })()
    }, function(t, e) {
        t.exports = (() => {
            "use strict";
            const t = {},
                e = {};

            function i(i, n, s) {
                t[i] = n, e[i] = s
            }
            return i("F", "January", 1), i("G", "February", 2), i("H", "March", 3), i("J", "April", 4), i("K", "May", 5), i("M", "June", 6), i("N", "July", 7), i("Q", "August", 8), i("U", "September", 9), i("V", "October", 10), i("X", "November", 11), i("Z", "December", 12), i("Y", "Cash", 0), {
                getCodeToNameMap: () => t,
                getCodeToNumberMap: () => e
            }
        })()
    }, function(t, e, i) {
        const n = i(7),
            s = i(8);
        t.exports = (() => {
            "use strict";

            function t(t, e) {
                return ["000", Math.floor(t)].join("").substr(-1 * e)
            }

            function e(t, e) {
                const i = Math.floor(t);
                return 0 === i && "" === e ? "" : i
            }
            return function(i, r, o, a, l, c) {
                if (null == i || n.nan(i) || "" === i) return "";
                if ("." === o) switch (r) {
                    case "2":
                        return s(i, 3, l, c);
                    case "3":
                        return s(i, 4, l, c);
                    case "4":
                        return s(i, 5, l, c);
                    case "5":
                        return s(i, 6, l, c);
                    case "6":
                        return s(i, 7, l, c);
                    case "7":
                        return s(i, 8, l, c);
                    case "8":
                        return s(i, 0, l, c);
                    case "9":
                        return s(i, 1, l, c);
                    case "A":
                        return s(i, 2, l, c);
                    case "B":
                        return s(i, 3, l, c);
                    case "C":
                        return s(i, 4, l, c);
                    case "D":
                        return s(i, 5, l, c);
                    case "E":
                        return s(i, 6, l, c);
                    default:
                        return i
                } else {
                    const n = i,
                        u = Math.abs(i);
                    let h, d;
                    switch (i < 0 ? !0 === c ? (h = "(", d = ")") : (h = "-", d = "") : (h = "", d = ""), r) {
                        case "2":
                            return [h, e(u, o), o, t(8 * (u - Math.floor(u)), 1), d].join("");
                        case "3":
                            return [h, e(u, o), o, t(16 * (u - Math.floor(u)), 2), d].join("");
                        case "4":
                            return [h, e(u, o), o, t(32 * (u - Math.floor(u)), 2), d].join("");
                        case "5":
                            return [h, e(u, o), o, t(Math.floor(((u - Math.floor(u)) * (a ? 320 : 64)).toFixed(1)), a ? 3 : 2), d].join("");
                        case "6":
                            return [h, e(u, o), o, t(Math.floor(((u - Math.floor(u)) * (a ? 320 : 128)).toFixed(1)), 3), d].join("");
                        case "7":
                            return [h, e(u, o), o, t((u - Math.floor(u)) * (a ? 320 : 256), 3), d].join("");
                        case "8":
                            return s(n, 0, l, c);
                        case "9":
                            return s(n, 1, l, c);
                        case "A":
                            return s(n, 2, l, c);
                        case "B":
                            return s(n, 3, l, c);
                        case "C":
                            return s(n, 4, l, c);
                        case "D":
                            return s(n, 5, l, c);
                        case "E":
                            return s(n, 6, l, c);
                        default:
                            return n
                    }
                }
            }
        })()
    }, function(t) {
        t.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"JSON schema for Barchart HTML5 Charts","definitions":{"color":{"type":"string","pattern":"^(#([0-9a-fA-F]{3}){1,2})|(rgba\\\\((\\\\s*\\\\d{1,3}\\\\s*,){3}\\\\s*[01]+(\\\\.\\\\d+)?\\\\))|(rgb\\\\((\\\\s*\\\\d{1,3}\\\\s*)(,\\\\s*\\\\d{1,3}\\\\s*){2}\\\\))$"},"orientationChoice":{"type":"string","enum":["vertical","horizontal","both","none"]},"dashStyle":{"type":"string","enum":["Solid","ShortDash","ShortDot","ShortDashDot","ShortDashDotDot","SparseDot","Dot","Dash","LongDash","DashDot","LongDashDot","LongDashDotDot"]},"aggUnit":{"type":"string","enum":["Tick","Intraday","Day","Week","Month","Quarter","Year"]},"aggSpec":{"type":"string","enum":["None","Nearest","Continue","FormT","PerCount","PerVolume","PerRange","PerSeconds"]},"period":{"type":"string","pattern":"^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$"},"density":{"type":"integer","minimum":5},"curveAttr":{"type":"string","enum":["ChangeBased","OpenVsClose"]},"fundamental":{"type":"string","enum":["AccountsPayable","AccruedExpenses","Cash","CommonShares","DeferredIncomeTax","DeferredLongRevenues","EquityOtherInvestments","IncomeTaxPayable","Intangibles","Inventories","LongTermDebt","MarketableSec","OtherCurrentAssets","OtherCurrentLiabilities","OtherEquity","OtherNonCurrentAssets","OtherNonCurrentLiabilities","PpeNet","PrepaidExpenses","Receivables","RetainedEarnings","ShorttermDebt","TotalAssets","TotalCurrentAssets","TotalCurrentLiabilities","TotalLiabilities","TotalLiabilitiesAndEquity","TotalNonCurrentAssets","TotalNonCurrentLiabilities","TotalShareholdersEquity","BasicEpsContOp","BasicEpsTotalOp","CostGoods","DilutedEpsContOp","DilutedEpsTotalOp","Ebitda","GrossProfit","IncomeTax","InterestExpense","NetIncome","OperatingExpenses","OperatingIncome","OtherIncomeExpenses","PreTaxIncome","Sales"]},"studyField":{"type":"string","enum":["MA","EMA","MAHI","MALO","MACD","MACDS","MACDH","ENVU","ENVD","ENVEXPU","ENVEXPD","ENVSMOU","ENVSMOD","SMA","TMA","WMA","VOLMA","OSC","VOSC","RSI","STORSI","HH","LL","PercK","PercD","PercR","WGCL","BOLLBU","BOLLBL","BOLLBM","BOLLBW","BOLLBP","OBVOL","ATR","PDI","MDI","ADX","ADXM","ADL","ADWM","ADWMMA","CHAOSC","TP","KCUP","KCMID","KCLOW","KBUP","KBMID","KBLOW","KCEUP","KCEMID","KCELOW","DONUP","DONMID","DONLOW","DONW","PVT","ROC","TRIX","PVPT","PVPTR","PVPTS","ARNUP","ARNLOW","ARNOSC","TCHNUP","TCHNLOW","ALJAW","ALTEETH","ALLIPS","PLTLN","AWOS","AWOSMA","MFMUL","CLV","CHAMF","CHAVOL","DPO","CCI","EMV","EMVMA","ERBLPOW","ERBRPOW","FI","MI","MOM","MOMMA","MFI","MSD","NVI","NVIEMA","PVI","PVIEMA","PPO","PPOS","PPOH","PVO","PVOS","PVOH","HV","PERF","WASI","WWVSARU","WWVSARD","PARSARS","PARSARL","MOVLR","TRSP1","TRSP2","PPTPIV","PPTR1","PPTR2","PPTR3","PPTS1","PPTS2","PPTS3","COTLCCMSP","COTLCLGSP","COTLCSMSP","COTDAGPRO","COTDAGSPD","COTDAGMNM","COTDAGOTH","COTFTRDLI","COTFTRASM","COTFTRLVF","COTFTROTH","TR","IMPVOL","CTM","GPMI","CTLTM","CTLTMF","DEMA","TEMA","TSI","TSISIG","ADJATR","COTR","GMMA3","GMMA5","GMMA8","GMMA10","GMMA12","GMMA15","GMMA30","GMMA35","GMMA40","GMMA45","GMMA50","GMMA60","MCGD","HMA","COPP","CPPH4","CPPH3","CPPH2","CPPH1","CPPL1","CPPL2","CPPL3","CPPL4","REATRHI","REATRLO","BREL","LINRUP","LINRMID","LINRLOW","CSHO","CSHB","GTPI","TCHRE","PCTCHG","ATRMA","STOMOMIX","CHDMOMOSC","VSTOPUP","VSTOPLOW","SUPTR","BARCOLIX","CONVLN","BASELN","LEADSP1","LEADSP2","LAGGSP","VWAP"]},"generalField":{"type":"string","enum":["DateTime","Open","High","Low","Close","TradeSize","Volume","OpenInterest","Last","Symbol","Change","PercentChange","PreviousOpen","PreviousClose","PreviousHigh","PreviousLow","WeekPreviousClose","WeekPreviousHigh","WeekPreviousLow","MonthPreviousClose","MonthPreviousHigh","MonthPreviousLow"]},"eventField":{"type":"string","enum":["Dividends","Splits","Earnings"]},"curveField":{"anyOf":[{"$ref":"#/definitions/generalField"},{"$ref":"#/definitions/studyField"},{"$ref":"#/definitions/fundamental"}]},"curveStyle":{"type":"string","enum":["OHLC","Line","Candlestick","Area","Column","Dots","HLC","HL","Ribbon","Step","HollowCandles","HeikinAshi","ElderImpulseSystem","Renko","LineBreak","Kagi","PointAndFigure"]},"paneHeight":{"type":"number","minimum":0.01},"plotPlacement":{"type":"string","enum":["WithSeries","TimeAxis"],"default":"WithSeries"},"comparison":{"type":"string","enum":["None","Value","Percent"],"default":"None"},"scale":{"type":"string","enum":["Linear","Logarithmic"],"default":"Linear"},"study":{"type":"string","enum":["MA","MAEXP","MAHLC","MACD","MACDEXP","VOL","MAENV","MAENVEXP","MAENVSMO","MASMO","MATRI","MAWEI","MAVOL","OSCI","OSCIVOL","RSI","RSIMOD","RSISTO","STOCHF","STOCHS","WPERCR","HHLL","WGCL","BBANDS","BWIDTH","BPERC","OBVOL","ATR","ADX","ADXMOD","ADL","ADWM","CHAOSC","TP","KELCHN","KELEXP","KELBND","DONCHN","DONWIDTH","PVT","ROC","TRIX","PPMOV","ARNUPDW","ARNOSC","TCHN","ALLG","PLTLN","AWEOSC","CLV","CHAMF","CHAVOL","DPO","CCI","EMV","ERBLPOW","ERBRPOW","FI","MI","MOM","MFI","MSD","NVI","PVI","PPO","PVO","HV","PERF","WASI","WWVOL","PARTP","MOVLR","TRSP","COTLC","COTDAG","COTFTR","PIVPTS","IMPVOL","CTM","GPMI","DEMA","TEMA","TSI","ADJATR","COTR","GMMA","MCGD","HMA","COPP","CPP","REATRHI","REATRLO","LINRCHN","CSHO","CSHB","GTPI","TCHRE","PCTCHG","OPINT","STOMOMIX","CHDMOMOSC","VSTOP","SUPTR","ICHCLD","VWAP"]},"annId":{"type":"string","enum":["Line","Ray","GannLine","VerticalLine","HorizontalLine","FiftyPercentLine","LongPosition","ShortPosition","FibonacciRetracement","FibonacciFan","FibonacciArcs","GannFan","SpeedResistanceFan","SpeedResistanceArcs","AndrewsPitchfork","Rectangle","Ellipse","TrendChannel","SymbolArrowUp","SymbolArrowDown","SymbolArrowRight","SymbolArrowLeft","SymbolArcDown","SymbolArcUp","SymbolThumbsUp","SymbolThumbsDown","SymbolOne","SymbolTwo","SymbolThree","SymbolFour","SymbolFive","SymbolQuestion","SymbolFishHook","FibonacciTimeZones","Text","ComputedText"]},"aggregation":{"type":"object","additionalProperties":false,"properties":{"size":{"type":"integer","minimum":1,"multipleOf":1,"default":1},"unit":{"$ref":"#/definitions/aggUnit","default":"Day"},"spec":{"$ref":"#/definitions/aggSpec","default":"None"},"isContractVolume":{"type":"boolean","default":false},"dividendsAdjust":{"type":"boolean","default":false},"backAdjust":{"type":"boolean","default":false},"daysToExpiration":{"type":"integer","minimum":0,"maximum":60,"default":1},"contractRoll":{"type":"string","enum":["expiration","combined"],"default":"expiration"}},"required":["unit"]},"gridLines":{"type":"object","additionalProperties":false,"properties":{"visible":{"type":"boolean","default":true},"color":{"type":"string","default":"#d8d8d8"},"lineWidth":{"type":"number","default":1},"dashStyle":{"$ref":"#/definitions/dashStyle","default":"Solid"}}},"range":{"type":"object","additionalProperties":false,"properties":{"from":{"type":"number"},"to":{"type":"number"}}},"crosshair":{"type":"object","additionalProperties":false,"properties":{"enabled":{"type":"boolean","default":true},"snap":{"type":"boolean","default":false},"showValue":{"type":"boolean","default":true},"color":{"$ref":"#/definitions/color","default":"#c0c0c0"},"dashStyle":{"$ref":"#/definitions/dashStyle","default":"Solid"},"format":{"type":"string"}}},"displayAxis":{"type":"object","properties":{"visible":{"type":"boolean","default":true},"gridLines":{"$ref":"#/definitions/gridLines"},"minorGridLines":{"$ref":"#/definitions/gridLines"},"textColor":{"$ref":"#/definitions/color","default":"#000"},"crosshair":{"$ref":"#/definitions/crosshair"}}},"displayChart":{"type":"object","additionalProperties":false,"properties":{"backgroundColor":{"$ref":"#/definitions/color","default":"#fff"},"plotBorderColor":{"$ref":"#/definitions/color"},"fontFamily":{"type":"string","default":"\\"Lucida Grande\\", \\"Lucida Sans Unicode\\", Verdana, Arial, Helvetica, sans-serif"},"previous":{"$ref":"#/definitions/previous"},"exportUrl":{"type":"string"},"showMinMaxArc":{"type":"boolean","default":true},"showGoToLatest":{"type":"boolean","default":false},"showNoDataText":{"type":"boolean"},"newPaneHeight":{"$ref":"#/definitions/paneHeight","default":1},"plotHover":{"type":"boolean","default":false},"bar":{"$ref":"#/definitions/barMetrics"},"zooming":{"$ref":"#/definitions/orientationChoice","default":"both"}}},"barMetrics":{"type":"object","additionalProperties":false,"properties":{"width":{"type":"number"},"spacing":{"type":"number"}}},"previous":{"type":"object","additionalProperties":false,"properties":{"color":{"$ref":"#/definitions/color","default":"#000"},"dashStyle":{"$ref":"#/definitions/dashStyle","default":"Solid"},"forceVisible":{"type":"boolean","default":false}}},"scrollbar":{"type":"object","additionalProperties":false,"properties":{"barColor":{"$ref":"#/definitions/color","default":"#bfc8d1"},"buttonColor":{"$ref":"#/definitions/color","default":"#ebe7e8"},"trackColor":{"$ref":"#/definitions/color","default":"#eee"},"visible":{"type":"boolean","default":true}}},"tooltip":{"type":"object","additionalProperties":false,"properties":{"visible":{"type":"boolean","default":true},"mode":{"type":"string","enum":["standard","cards","bubble","external"],"default":"standard"},"showMainPlot":{"type":"boolean","default":false},"backgroundColor":{"$ref":"#/definitions/color","default":"rgba(255, 255, 255, 0.85)"},"borderColor":{"$ref":"#/definitions/color","default":"#000"}}},"data":{"type":"object","additionalProperties":false,"properties":{"aggregation":{"$ref":"#/definitions/aggregation"},"maxDataPoints":{"type":"number"},"range":{"$ref":"#/definitions/range"},"checkRange":{"type":"boolean"}},"required":["aggregation"]},"display":{"type":"object","additionalProperties":false,"properties":{"period":{"$ref":"#/definitions/period"},"density":{"$ref":"#/definitions/density"},"chart":{"$ref":"#/definitions/displayChart"},"scrollbar":{"$ref":"#/definitions/scrollbar"},"scrollBehavior":{"type":"string","enum":["wheel","wheel+shift","none"],"default":"wheel"},"tooltip":{"$ref":"#/definitions/tooltip"},"yAxis":{"allOf":[{"$ref":"#/definitions/displayAxis"},{"properties":{"showLastValue":{"type":"string","enum":["None","All","Main"],"default":"All"},"preventLabelOverlap":{"type":"boolean","default":false},"snapAnnotationsToPrices":{"type":"boolean","default":false}}}]},"xAxis":{"allOf":[{"$ref":"#/definitions/displayAxis"},{"properties":{"format":{"type":"string","minLength":1},"minTickInterval":{"type":"number","default":0},"tickPixelInterval":{"type":"number","default":0},"visibleRange":{"$ref":"#/definitions/range"},"equidistant":{"type":"boolean","default":true},"marginBars":{"type":"number","minimum":0,"default":0},"zoom":{"type":"number","default":0},"resizeHandles":{"type":"boolean","default":false},"forceTicksVisible":{"type":"boolean"},"panning":{"type":"boolean"}}}]},"annotationTraits":{"$ref":"#/definitions/annTraits"},"curveTraits":{"type":"array","items":{"$ref":"#/definitions/curveTrait"}}}},"curveZone":{"type":"object","additionalProperties":false,"properties":{"value":{"type":"number"},"colors":{"type":"number"},"gradient":{"type":"string","enum":["linLighten","linDarken"]}}},"curveNonStrict":{"type":"object","additionalProperties":false,"properties":{"attributes":{"type":"array","items":{"$ref":"#/definitions/curveAttr"}},"colors":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/color"}},"fields":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/curveField"}},"style":{"$ref":"#/definitions/curveStyle","default":"Line"},"lineWidth":{"type":"number","default":2},"varyColorPerBar":{"type":"boolean","default":false},"visible":{"type":"boolean","default":true},"zones":{"type":"array","items":{"$ref":"#/definitions/curveZone"}},"shift":{"type":"integer"}}},"curve":{"allOf":[{"$ref":"#/definitions/curveNonStrict"}],"required":["colors","fields"]},"plotEventDividends":{"type":"object","additionalProperties":false,"properties":{"show":{"type":"boolean","default":false},"color":{"$ref":"#/definitions/color","default":"#037c27"},"title":{"type":"string","default":"D"}},"required":["show"]},"plotEventEarnings":{"type":"object","additionalProperties":false,"properties":{"show":{"type":"boolean","default":false},"color":{"$ref":"#/definitions/color","default":"#08a0c9"},"title":{"type":"string","default":"E"}},"required":["show"]},"plotEventSplits":{"type":"object","additionalProperties":false,"properties":{"show":{"type":"boolean","default":false},"color":{"$ref":"#/definitions/color","default":"#de7726"},"title":{"type":"string","default":"S"}},"required":["show"]},"plotEvents":{"type":"object","additionalProperties":false,"properties":{"dividends":{"$ref":"#/definitions/plotEventDividends"},"earnings":{"$ref":"#/definitions/plotEventEarnings"},"splits":{"$ref":"#/definitions/plotEventSplits"},"placement":{"$ref":"#/definitions/plotPlacement","default":"WithSeries"}}},"fundamentalFrequency":{"type":"string","enum":["Quarter","Year"]},"numberInput":{"additionalProperties":false,"properties":{"name":{"type":"string"},"value":{"type":"number"}}},"stringInput":{"additionalProperties":false,"properties":{"name":{"type":"string"},"value":{"type":"string"}}},"input":{"type":"object","oneOf":[{"$ref":"#/definitions/numberInput"},{"$ref":"#/definitions/stringInput"}]},"inputs":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/input"}},"curves":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/curve"}},"symbolType":{"type":"string","pattern":"Symbol"},"symbolPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves"},"symbol":{"type":"string"},"events":{"$ref":"#/definitions/plotEvents"},"showPrevious":{"type":"boolean","default":false},"type":{"$ref":"#/definitions/symbolType"},"main":{"type":"boolean","default":false}},"required":["curves","symbol","type"]},"fundamentalType":{"type":"string","enum":["BalanceSheet","IncomeStatement"]},"fundamentalPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves"},"symbol":{"type":"string"},"fundamental":{"$ref":"#/definitions/fundamentalFrequency","default":"Quarter"},"type":{"$ref":"#/definitions/fundamentalType"}},"required":["curves","symbol","type"]},"studyLevels":{"type":"array","items":{"$ref":"#/definitions/studyLevel"}},"studyLevel":{"type":"object","additionalProperties":false,"properties":{"value":{"type":"number"},"line":{"$ref":"#/definitions/lineTrait"},"name":{"type":"string"}},"required":["value","line"]},"studyBands":{"type":"array","items":{"$ref":"#/definitions/studyBand"}},"studyBand":{"type":"object","additionalProperties":false,"properties":{"range":{"$ref":"#/definitions/range"},"fill":{"$ref":"#/definitions/fillTrait"}},"required":["range","fill"]},"studyType":{"type":"string","pattern":"Study"},"studyPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves"},"basis":{"type":"string","default":"$main"},"study":{"$ref":"#/definitions/study"},"source":{"$ref":"#/definitions/curveField"},"inputs":{"$ref":"#/definitions/inputs"},"type":{"$ref":"#/definitions/studyType"},"levels":{"$ref":"#/definitions/studyLevels"},"bands":{"$ref":"#/definitions/studyBands"}},"required":["study","type"]},"exprType":{"type":"string","pattern":"Expression"},"exprPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves","default":[{"fields":["Close"],"style":"Line","lineWidth":2,"visible":true,"colors":["#888"],"varyColorPerBar":false}]},"expression":{"type":"string"},"type":{"$ref":"#/definitions/exprType"},"main":{"type":"boolean","default":false}},"required":["expression","type"]},"forwardType":{"type":"string","pattern":"Forward"},"intOffset":{"type":"integer","minimum":0,"multipleOf":1},"intOffsets":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/intOffset"}},"forwardPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves","default":[{"fields":["Close"],"style":"Line","lineWidth":2,"visible":true,"colors":["#888"],"varyColorPerBar":false}]},"forward":{"type":"string"},"offsets":{"$ref":"#/definitions/intOffsets","default":[0]},"main":{"type":"boolean","default":true},"type":{"$ref":"#/definitions/forwardType"}},"required":["forward","type"]},"annualType":{"type":"string","pattern":"Annual"},"annualPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves","default":[{"colors":["#00b04b"],"fields":["Close","Change"],"style":"Line","lineWidth":2,"visible":true,"varyColorPerBar":false},{"colors":["#8b6038"],"fields":["Close"],"style":"Line","lineWidth":2,"visible":true,"varyColorPerBar":false}]},"annual":{"type":"string"},"main":{"type":"boolean","default":true},"type":{"$ref":"#/definitions/annualType"}},"required":["annual","type"]},"seasonalType":{"type":"string","pattern":"Seasonal"},"seasonalPlot":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"#/definitions/curves","default":[{"fields":["Close"],"style":"Line","lineWidth":2,"visible":true,"colors":["#888"],"varyColorPerBar":false}]},"seasonal":{"type":"string"},"offsets":{"$ref":"#/definitions/intOffsets","default":[0]},"main":{"type":"boolean","default":true},"type":{"$ref":"#/definitions/seasonalType"}},"required":["seasonal","type"]},"annPoint":{"type":"object","additionalProperties":false,"properties":{"price":{"type":"number"},"time":{"type":"number"}},"required":["price","time"]},"lineTrait":{"type":"object","additionalProperties":false,"properties":{"width":{"type":"number","minimum":0,"default":1},"color":{"$ref":"#/definitions/color","default":"#000"},"dashStyle":{"$ref":"#/definitions/dashStyle","default":"Solid"}}},"fillTrait":{"type":"object","additionalProperties":false,"properties":{"color":{"$ref":"#/definitions/color"}}},"markerTrait":{"type":"object","additionalProperties":false,"properties":{"vertex":{"enum":["start","end","both","none"]},"kind":{"enum":["arrow"],"default":"arrow"}},"required":["vertex"]},"curveTrait":{"type":"object","additionalProperties":false,"properties":{"curveStyle":{"$ref":"#/definitions/curveStyle"},"line":{"$ref":"#/definitions/lineTrait"},"fill":{"$ref":"#/definitions/fillTrait"}},"required":["curveStyle"]},"annTraits":{"type":"object","additionalProperties":true,"properties":{"line":{"$ref":"#/definitions/lineTrait"},"fill":{"$ref":"#/definitions/fillTrait"},"marker":{"$ref":"#/definitions/markerTrait"},"zIndex":{"type":"number","minimum":1}}},"annotation":{"type":"object","additionalProperties":false,"properties":{"id":{"$ref":"#/definitions/annId"},"visible":{"type":"boolean","default":true},"points":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/annPoint"}},"traits":{"$ref":"#/definitions/annTraits"}},"required":["id","points"]},"plot":{"type":"object","oneOf":[{"$ref":"#/definitions/annualPlot"},{"$ref":"#/definitions/seasonalPlot"},{"$ref":"#/definitions/forwardPlot"},{"$ref":"#/definitions/exprPlot"},{"$ref":"#/definitions/symbolPlot"},{"$ref":"#/definitions/fundamentalPlot"},{"$ref":"#/definitions/studyPlot"}]},"annCacheEntry":{"type":"object","additionalProperties":false,"properties":{"symbol":{"type":"string"},"annotations":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/annotation"}}},"required":["symbol","annotations"]},"axis":{"type":"object","additionalProperties":false,"properties":{"comparison":{"$ref":"#/definitions/comparison","default":"None"},"plots":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/plot"}},"annotations":{"type":"array","minItems":0,"items":{"$ref":"#/definitions/annotation"}},"scale":{"$ref":"#/definitions/scale","default":"Linear"},"annCache":{"type":"array","minItems":0,"items":{"$ref":"#/definitions/annCacheEntry"}}},"required":["plots"]},"pane":{"type":"object","additionalProperties":false,"properties":{"axes":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/axis"}},"height":{"$ref":"#/definitions/paneHeight","default":1}},"required":["axes"]}},"type":"object","additionalProperties":false,"properties":{"data":{"$ref":"#/definitions/data"},"display":{"$ref":"#/definitions/display"},"panes":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/pane"}},"version":{"type":"integer","minimum":30,"multipleOf":1}},"required":["panes","version"]}')
    }, function(t) {
        t.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"JSON schema for Barchart studies for HTML5 Charts","definitions":{"studyMetadata":{"type":"object","additionalProperties":false,"properties":{"title":{"type":"string"},"caption":{"type":"string"},"overlay":{"type":"boolean","default":true},"decimals":{"type":"number"},"range":{"type":"object","additionalProperties":false,"properties":{"min":{"type":"number"},"max":{"type":"number"}}},"enumerations":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/enumeration"}}},"required":["title","caption"]},"enumeration":{"type":"object","additionalProperties":false,"properties":{"input":{"type":"string"},"values":{"type":"array","items":{"type":"string"}}}},"studyDefaults":{"type":"object","additionalProperties":false,"properties":{"curves":{"$ref":"chart.schema.json#/definitions/curves"},"source":{"$ref":"chart.schema.json#/definitions/curveField"},"inputs":{"$ref":"chart.schema.json#/definitions/inputs"},"levels":{"$ref":"chart.schema.json#/definitions/studyLevels"},"bands":{"$ref":"chart.schema.json#/definitions/studyBands"}},"required":["curves"]},"studyDefinition":{"type":"object","additionalProperties":false,"properties":{"id":{"$ref":"chart.schema.json#/definitions/study"},"meta":{"$ref":"#/definitions/studyMetadata"},"defaults":{"$ref":"#/definitions/studyDefaults"}},"required":["id","meta","defaults"]}},"type":"array","minItems":1,"items":{"$ref":"#/definitions/studyDefinition"}}')
    }, function(t) {
        t.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"JSON schema for Barchart fields for HTML5 Charts","definitions":{"valueType":{"type":"string","enum":["Number","String","Date"],"default":"Number"},"fieldCategory":{"type":"string","enum":["Common","Study","BalanceSheet","IncomeStatement","Event"],"default":"Common"},"fieldFormat":{"type":"string","enum":["FromMetaData","AsInteger","UseMetricUnit","AsPercent"],"default":"FromMetaData"},"fieldDefinition":{"type":"object","additionalProperties":false,"properties":{"id":{"anyOf":[{"$ref":"chart.schema.json#/definitions/curveField"},{"$ref":"chart.schema.json#/definitions/eventField"}]},"type":{"$ref":"#/definitions/valueType"},"category":{"$ref":"#/definitions/fieldCategory"},"name":{"type":"string","default":null},"shortName":{"type":"string","default":null},"format":{"$ref":"#/definitions/fieldFormat"}},"required":["id"]}},"type":"array","minItems":1,"items":{"$ref":"#/definitions/fieldDefinition"}}')
    }, function(t) {
        t.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema","title":"JSON schema for the Barchart API of the HTML5 Charts","definitions":{"curvesNonStrict":{"type":"array","maxItems":1,"items":{"$ref":"chart.schema.json#/definitions/curveNonStrict"}},"mainPlotSymbolContext":{"type":"object","additionalProperties":false,"properties":{"symbol":{"type":"string"}},"required":["symbol"]},"mainPlotExpressionContext":{"type":"object","additionalProperties":false,"properties":{"expression":{"type":"string"}},"required":["expression"]},"mainPlotForwardContext":{"type":"object","additionalProperties":false,"properties":{"forward":{"type":"string"}},"required":["forward"]},"mainPlotSeasonalContext":{"type":"object","additionalProperties":false,"properties":{"seasonal":{"type":"string"}},"required":["seasonal"]},"mainPlotAnnualContext":{"type":"object","additionalProperties":false,"properties":{"annual":{"type":"string"}},"required":["annual"]},"mainPlotAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"MainPlot"},"context":{"oneOf":[{"$ref":"#/definitions/mainPlotSymbolContext"},{"$ref":"#/definitions/mainPlotExpressionContext"},{"$ref":"#/definitions/mainPlotForwardContext"},{"$ref":"#/definitions/mainPlotSeasonalContext"},{"$ref":"#/definitions/mainPlotAnnualContext"}]}},"required":["id","context"]},"aggregationAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Aggregation"},"context":{"$ref":"chart.schema.json#/definitions/aggregation"}},"required":["id","context"]},"periodContext":{"type":"object","additionalProperties":false,"properties":{"period":{"$ref":"chart.schema.json#/definitions/period"}},"required":["period"]},"rangeContext":{"type":"object","additionalProperties":false,"properties":{"range":{"$ref":"chart.schema.json#/definitions/range"}},"required":["range"]},"densityContext":{"type":"object","additionalProperties":false,"properties":{"density":{"$ref":"chart.schema.json#/definitions/density"}},"required":["density"]},"periodAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Period"},"context":{"oneOf":[{"$ref":"#/definitions/periodContext"},{"$ref":"#/definitions/rangeContext"},{"$ref":"#/definitions/densityContext"}]}},"required":["id","context"]},"crosshairAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Crosshair"},"context":{"type":"object","additionalProperties":false,"properties":{"crosshair":{"$ref":"chart.schema.json#/definitions/orientationChoice"}},"required":["crosshair"]}},"required":["id","context"]},"tooltipAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Tooltip"},"context":{"type":"object","additionalProperties":false,"properties":{"visible":{"type":"boolean"},"mode":{"type":"string","enum":["standard","cards","external"]}},"required":["visible"]}},"required":["id","context"]},"eventsAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Events"},"context":{"type":"object","additionalProperties":false,"properties":{"dividends":{"type":"boolean"},"earnings":{"type":"boolean"},"splits":{"type":"boolean"}}}},"required":["id","context"]},"axisPadding":{"type":"number","minimum":0.001,"maximum":1},"scaleAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Scale"},"context":{"type":"object","additionalProperties":false,"properties":{"scale":{"type":"string","enum":["Linear","Logarithmic"]},"marginBars":{"type":"number","minimum":0},"minPadding":{"$ref":"#/definitions/axisPadding"},"maxPadding":{"$ref":"#/definitions/axisPadding"},"preventLabelOverlap":{"type":"boolean"},"snapAnnotationsToPrices":{"type":"boolean"}}}},"required":["id","context"]},"otherAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Other"},"context":{"type":"object","additionalProperties":false,"properties":{"percentChange":{"type":"boolean"},"comparisonMode":{"type":"string","enum":["None","Percent","Value"]},"showLastValue":{"type":"string","enum":["None","All","Main"]},"gridLines":{"$ref":"chart.schema.json#/definitions/orientationChoice"},"minorGridLines":{"$ref":"chart.schema.json#/definitions/orientationChoice"},"newPaneHeight":{"type":"number","minimum":0.01},"showNavigator":{"type":"boolean"},"plotHover":{"type":"boolean"}}}},"required":["id","context"]},"placement":{"type":"string","enum":["overlay","standalone","withMain","clone"]},"plotAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Plot"},"context":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","enum":["Add","Get","Delete","Update"]},"type":{"type":"string","enum":["Symbol","Study","IncomeStatement","BalanceSheet","Expression","Forward","Seasonal","Annual"]},"main":{"type":"boolean"},"index":{"$ref":"chart.schema.json#/definitions/intOffset"},"studyId":{"$ref":"chart.schema.json#/definitions/study"},"fundamentalId":{"$ref":"chart.schema.json#/definitions/fundamental"},"expression":{"type":"string"},"forward":{"type":"string"},"seasonal":{"type":"string"},"annual":{"type":"string"},"frequency":{"$ref":"chart.schema.json#/definitions/fundamentalFrequency","default":"Quarter"},"inputs":{"$ref":"chart.schema.json#/definitions/inputs"},"curves":{"$ref":"#/definitions/curvesNonStrict"},"levels":{"$ref":"chart.schema.json#/definitions/studyLevels"},"bands":{"$ref":"chart.schema.json#/definitions/studyBands"},"placement":{"$ref":"#/definitions/placement"},"cloneIndex":{"$ref":"chart.schema.json#/definitions/intOffset"},"offsets":{"$ref":"chart.schema.json#/definitions/intOffsets"}},"required":["id"]}},"required":["id","context"]},"curveOptional":{},"compareSymbol":{"type":"object","additionalProperties":false,"properties":{"symbol":{"type":"string"},"leftScale":{"type":"boolean","default":false},"curves":{"$ref":"#/definitions/curvesNonStrict"}},"required":["symbol"]},"compareAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Compare"},"context":{"type":"object","additionalProperties":false,"properties":{"symbols":{"type":"array","minItems":1,"items":{"$ref":"#/definitions/compareSymbol"}}}}},"required":["id","context"]},"annotationAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Annotation"},"context":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","enum":["Delete","Update","Duplicate","List"]},"uid":{"type":"string","default":""},"visible":{"type":"boolean"},"traits":{"$ref":"chart.schema.json#/definitions/annTraits"},"extras":{"type":"object","additionalProperties":true},"points":{"type":"array","items":{"$ref":"chart.schema.json#/definitions/annPoint"}}},"required":["id"]}},"required":["id","context"]},"movePaneAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"MovePane"},"context":{"type":"object","additionalProperties":false,"properties":{"from":{"$ref":"chart.schema.json#/definitions/intOffset"},"to":{"$ref":"chart.schema.json#/definitions/intOffset"}},"required":["from","to"]}},"required":["id","context"]},"templateAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Template"},"context":{"type":"object","additionalProperties":false,"properties":{"strip":{"type":"object","additionalProperties":false,"properties":{"main":{"type":"boolean","default":true},"annotations":{"type":"boolean","default":false},"compare":{"type":"boolean","default":false}}}},"required":["strip"]}},"required":["id","context"]},"outlineAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Outline"},"context":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Get"}},"required":["id"]}},"required":["id","context"]},"themeAccessor":{"type":"object","additionalProperties":false,"properties":{"id":{"type":"string","pattern":"Theme"},"context":{"type":"object","additionalProperties":false,"properties":{"backgroundColor":{"$ref":"chart.schema.json#/definitions/color"},"axis":{"type":"object","additionalProperties":false,"properties":{"gridLinesColor":{"$ref":"chart.schema.json#/definitions/color"},"gridLinesStyle":{"$ref":"chart.schema.json#/definitions/dashStyle"},"textColor":{"$ref":"chart.schema.json#/definitions/color"},"crosshairColor":{"$ref":"chart.schema.json#/definitions/color"}}}}}}}},"type":"object","oneOf":[{"$ref":"#/definitions/mainPlotAccessor"},{"$ref":"#/definitions/aggregationAccessor"},{"$ref":"#/definitions/periodAccessor"},{"$ref":"#/definitions/crosshairAccessor"},{"$ref":"#/definitions/tooltipAccessor"},{"$ref":"#/definitions/eventsAccessor"},{"$ref":"#/definitions/scaleAccessor"},{"$ref":"#/definitions/otherAccessor"},{"$ref":"#/definitions/plotAccessor"},{"$ref":"#/definitions/compareAccessor"},{"$ref":"#/definitions/annotationAccessor"},{"$ref":"#/definitions/movePaneAccessor"},{"$ref":"#/definitions/templateAccessor"},{"$ref":"#/definitions/outlineAccessor"},{"$ref":"#/definitions/themeAccessor"}]}')
    }, function(t) {
        t.exports = JSON.parse('[{"id":"MA","meta":{"title":"Moving Average","caption":"Moving Average","overlay":true,"enumerations":[{"input":"Source","values":["Open","High","Low","Close"]}]},"defaults":{"inputs":[{"name":"Period","value":20},{"name":"Source","value":"Close"}],"curves":[{"colors":["#808080"],"fields":["MA"]}]}},{"id":"CSHO","meta":{"title":"Cash Overlay","caption":"Cash Overlay","overlay":true},"defaults":{"source":"Symbol","curves":[{"colors":["#834c3f"],"fields":["CSHO"]}]}},{"id":"CSHB","meta":{"title":"Cash Basis","caption":"Cash Basis","overlay":false},"defaults":{"source":"Symbol","curves":[{"colors":["#b2b900"],"fields":["CSHB"]}]}},{"id":"MAVOL","meta":{"title":"Volume Moving Average","caption":"Volume Moving Average","overlay":false},"defaults":{"source":"Volume","inputs":[{"name":"Period","value":10}],"curves":[{"colors":["#9075d6"],"fields":["VOLMA"]},{"attributes":["ChangeBased"],"colors":["#ef4226","#00b04b","#1f4bb6"],"fields":["Volume"],"style":"Column","varyColorPerBar":true}]}},{"id":"OSCI","meta":{"title":"Oscillator","caption":"Oscillator","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period1","value":5},{"name":"Period2","value":10}],"curves":[{"colors":["#ae272d"],"fields":["OSC"]}]}},{"id":"OSCIVOL","meta":{"title":"Volume Oscillator","caption":"Volume Oscillator","overlay":false},"defaults":{"source":"Volume","inputs":[{"name":"Period1","value":5},{"name":"Period2","value":10}],"curves":[{"colors":["#9326ff"],"fields":["VOSC"]}]}},{"id":"MAENV","meta":{"title":"Moving Average Envelope","caption":"Moving Average Envelope","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10},{"name":"Percent","value":3}],"curves":[{"colors":["#2284dd"],"fields":["ENVU"]},{"colors":["#25329b"],"fields":["ENVD"]},{"colors":["rgba(37, 50, 155, 0.1)"],"fields":["ENVU","ENVD"],"style":"Ribbon","lineWidth":0}]}},{"id":"LINRCHN","meta":{"title":"Linear Regression Channel","caption":"Linear Regression Channel","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":100},{"name":"Width","value":2}],"curves":[{"colors":["rgba(0, 0, 255, 0.3)"],"fields":["LINRUP"]},{"colors":["rgba(255, 0, 0, 0.3)"],"fields":["LINRMID"]},{"colors":["rgba(0, 0, 255, 0.3)"],"fields":["LINRLOW"]},{"colors":["rgba(0, 0, 255, 0.1)"],"fields":["LINRUP","LINRMID"],"style":"Ribbon","lineWidth":0},{"colors":["rgba(255, 0, 0, 0.1)"],"fields":["LINRMID","LINRLOW"],"style":"Ribbon","lineWidth":0}]}},{"id":"MAENVEXP","meta":{"title":"Moving Average Envelope Exponential","caption":"Moving Average Envelope Exponential","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10},{"name":"Percent","value":3}],"curves":[{"colors":["#2284dd"],"fields":["ENVEXPU"]},{"colors":["#25329b"],"fields":["ENVEXPD"]},{"colors":["rgba(37, 50, 155, 0.1)"],"fields":["ENVEXPU","ENVEXPD"],"style":"Ribbon","lineWidth":0}]}},{"id":"MAENVSMO","meta":{"title":"Moving Average Envelope Smoothed","caption":"Moving Average Envelope Smoothed","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10},{"name":"Percent","value":3}],"curves":[{"colors":["#2284dd"],"fields":["ENVSMOU"]},{"colors":["#25329b"],"fields":["ENVSMOD"]},{"colors":["rgba(37, 50, 155, 0.1)"],"fields":["ENVSMOU","ENVSMOD"],"style":"Ribbon","lineWidth":0}]}},{"id":"MAEXP","meta":{"title":"Moving Average Exponential","caption":"Moving Average Exponential","overlay":true,"enumerations":[{"input":"Source","values":["Open","High","Low","Close"]}]},"defaults":{"inputs":[{"name":"Period","value":20},{"name":"Source","value":"Close"}],"curves":[{"colors":["#ae272d"],"fields":["EMA"]}]}},{"id":"MASMO","meta":{"title":"Moving Average Smoothed","caption":"Moving Average Smoothed","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":9}],"curves":[{"colors":["#743800"],"fields":["SMA"]}]}},{"id":"MATRI","meta":{"title":"Moving Average Triangular","caption":"Moving Average Triangular","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#888"],"fields":["TMA"]}]}},{"id":"MAWEI","meta":{"title":"Moving Average Weighted","caption":"Moving Average Weighted","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#bc41ce"],"fields":["WMA"]}]}},{"id":"MAHLC","meta":{"title":"Moving Average High/Low","caption":"Moving Average High/Low","overlay":true},"defaults":{"inputs":[{"name":"Period1","value":10},{"name":"Period2","value":8}],"curves":[{"colors":["#00b04b"],"fields":["MAHI"]},{"colors":["#ef4226"],"fields":["MALO"]}]}},{"id":"MACD","meta":{"title":"MACD Oscillator","caption":"MACD Oscillator","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period1","value":12},{"name":"Period2","value":26},{"name":"Period3","value":9}],"curves":[{"colors":["#808080"],"fields":["MACD"]},{"colors":["#9326ff"],"fields":["MACDS"]},{"colors":["#711","#0aa"],"fields":["MACDH"],"style":"Column","zones":[{"value":0,"colors":1},{"colors":1}]}]}},{"id":"MACDEXP","meta":{"title":"MACD Oscillator Exponential","caption":"MACD Oscillator Exponential","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period1","value":12},{"name":"Period2","value":26},{"name":"Period3","value":9}],"curves":[{"colors":["#808080"],"fields":["MACD"]},{"colors":["#bc41ce"],"fields":["MACDS"]},{"colors":["#711","#0aa"],"fields":["MACDH"],"style":"Column","zones":[{"value":0,"colors":1},{"colors":1}]}]}},{"id":"VOL","meta":{"title":"Volume","caption":"Volume","overlay":false},"defaults":{"curves":[{"attributes":["ChangeBased"],"colors":["#ef4226","#00b04b","#1f4bb6"],"fields":["Volume"],"style":"Column","varyColorPerBar":true},{"colors":["#bb45cc"],"fields":["OpenInterest"]}]}},{"id":"OPINT","meta":{"title":"Open Interest","caption":"Open Interest","overlay":false},"defaults":{"curves":[{"colors":["#bb45cc"],"fields":["OpenInterest"]}]}},{"id":"RSI","meta":{"title":"Relative Strength Index","caption":"Relative Strength Index","overlay":false,"decimals":2,"range":{"min":0,"max":100}},"defaults":{"source":"Close","inputs":[{"name":"Period","value":14}],"curves":[{"style":"Area","colors":["rgba(252, 13, 27, 0.3)","rgba(0,0,0,0)","#00b04b","rgba(12, 50, 255, 0.3)"],"fields":["RSI"],"zones":[{"value":30,"colors":1},{"value":70,"colors":2},{"colors":1}]}],"levels":[{"value":30,"name":"Oversold","line":{"color":"#444"}},{"value":50,"line":{"color":"#444","dashStyle":"DashDot"}},{"value":70,"name":"Overbought","line":{"color":"#444"}}]}},{"id":"RSIMOD","meta":{"title":"Relative Strength Index Modified","caption":"Relative Strength Index Modified","overlay":false,"decimals":2,"range":{"min":0,"max":100}},"defaults":{"source":"Close","inputs":[{"name":"Period","value":14}],"curves":[{"style":"Area","colors":["rgba(252, 13, 27, 0.3)","rgba(0,0,0,0)","#00b04b","rgba(12, 50, 255, 0.3)"],"fields":["RSI"],"zones":[{"value":30,"colors":1},{"value":70,"colors":2},{"colors":1}]}],"levels":[{"value":30,"name":"Oversold","line":{"color":"#444"}},{"value":50,"line":{"color":"#444","dashStyle":"DashDot"}},{"value":70,"name":"Overbought","line":{"color":"#444"}}]}},{"id":"RSISTO","meta":{"title":"Stochastic RSI","caption":"Stochastic RSI","overlay":false,"decimals":2,"range":{"min":0,"max":1}},"defaults":{"source":"Close","inputs":[{"name":"Period","value":14},{"name":"Range","value":20}],"curves":[{"style":"Area","colors":["rgba(252, 13, 27, 0.3)","rgba(0,0,0,0)","#00b04b","rgba(12, 50, 255, 0.3)"],"fields":["STORSI"],"zones":[{"value":0.2,"colors":1},{"value":0.8,"colors":2},{"colors":1}]}],"levels":[{"value":0.2,"name":"Oversold","line":{"color":"#444"}},{"value":0.5,"line":{"color":"#444","dashStyle":"DashDot"}},{"value":0.8,"name":"Overbought","line":{"color":"#444"}}]}},{"id":"HHLL","meta":{"title":"Highest High Lowest Low","caption":"Highest High Lowest Low","overlay":true},"defaults":{"inputs":[{"name":"Period1","value":10},{"name":"Period2","value":10}],"curves":[{"colors":["#00b04b"],"fields":["HH"]},{"colors":["#ef4226"],"fields":["LL"]}]}},{"id":"WGCL","meta":{"title":"Weighted Close","caption":"Weighted Close","overlay":true},"defaults":{"curves":[{"colors":["#f18900"],"fields":["WGCL"]}]}},{"id":"WPERCR","meta":{"title":"Percent R","caption":"Percent R","overlay":false,"decimals":2},"defaults":{"inputs":[{"name":"Period","value":14}],"curves":[{"colors":["#ff6e00"],"fields":["PercR"]}],"levels":[{"value":-80,"name":"Oversold","line":{"color":"#606060","dashStyle":"Dash"}},{"value":-20,"name":"Overbought","line":{"color":"#606060","dashStyle":"Dash"}}],"bands":[{"fill":{"color":"rgba(152, 21, 255, 0.1)"},"range":{"from":-80,"to":-20}}]}},{"id":"STOCHF","meta":{"title":"Stochastic, Fast","caption":"Stochastic, Fast","overlay":false,"decimals":2,"range":{"min":0,"max":100},"enumerations":[{"input":"Smoothing","values":["MA","EMA","SMA"]}]},"defaults":{"inputs":[{"name":"Period1","value":14},{"name":"Period2","value":3},{"name":"Smoothing","value":"MA"}],"curves":[{"colors":["#f18900"],"fields":["PercK"]},{"colors":["#00b04b"],"fields":["PercD"]}],"levels":[{"value":20,"name":"Oversold","line":{"color":"#3a45a2"}},{"value":50,"line":{"color":"#3a45a2","dashStyle":"DashDot"}},{"value":80,"name":"Overbought","line":{"color":"#3a45a2"}}]}},{"id":"STOCHS","meta":{"title":"Stochastic, Slow","caption":"Stochastic, Slow","overlay":false,"decimals":2,"range":{"min":0,"max":100},"enumerations":[{"input":"Smoothing","values":["MA","EMA","SMA"]}]},"defaults":{"inputs":[{"name":"Period1","value":14},{"name":"Period2","value":3},{"name":"Period3","value":3},{"name":"Smoothing","value":"MA"}],"curves":[{"colors":["#808080"],"fields":["PercK"]},{"colors":["#f18900"],"fields":["PercD"]}],"levels":[{"value":20,"name":"Oversold","line":{"color":"#3a45a2"}},{"value":50,"line":{"color":"#3a45a2","dashStyle":"DashDot"}},{"value":80,"name":"Overbought","line":{"color":"#3a45a2"}}]}},{"id":"BBANDS","meta":{"title":"Bollinger Bands","caption":"Bollinger Bands","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20},{"name":"Width","value":2}],"curves":[{"colors":["#9075d6"],"fields":["BOLLBU"]},{"colors":["#89211e"],"fields":["BOLLBM"]},{"colors":["#00aaab"],"fields":["BOLLBL"]},{"colors":["rgba(0, 170, 171, 0.1)"],"fields":["BOLLBU","BOLLBL"],"style":"Ribbon","lineWidth":0}]}},{"id":"BWIDTH","meta":{"title":"Bollinger Width","caption":"Bollinger Width","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20},{"name":"Width","value":2}],"curves":[{"colors":["#f18900"],"fields":["BOLLBW"]}]}},{"id":"BPERC","meta":{"title":"Bollinger Bands %B","caption":"Bollinger Bands %B","decimals":4,"overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20},{"name":"Width","value":2}],"curves":[{"colors":["#138484"],"fields":["BOLLBP"]}],"levels":[{"value":0,"name":"Oversold","line":{"color":"#606060","dashStyle":"Dash"}},{"value":1,"name":"Overbought","line":{"color":"#606060","dashStyle":"Dash"}}],"bands":[{"fill":{"color":"rgba(19, 132, 132, 0.1)"},"range":{"from":0,"to":1}}]}},{"id":"OBVOL","meta":{"title":"On Balance Volume","caption":"On Balance Volume","overlay":false},"defaults":{"curves":[{"colors":["#2284dd"],"fields":["OBVOL"]}]}},{"id":"ATR","meta":{"title":"Average True Range","caption":"Average True Range","overlay":false,"enumerations":[{"input":"Smoothing","values":["SMA","MA","EMA","WMA"]}]},"defaults":{"inputs":[{"name":"Period","value":14},{"name":"Smoothing","value":"SMA"},{"name":"Period2","value":20}],"curves":[{"colors":["#ffaf1c"],"fields":["ATR"]},{"colors":["#1c6cff"],"fields":["ATRMA"]}]}},{"id":"ADJATR","meta":{"title":"Average True Range Adjusted","caption":"Average True Range Adjusted","overlay":false,"enumerations":[{"input":"Smoothing","values":["SMA","MA","EMA","WMA"]}]},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20},{"name":"Smoothing","value":"MA"}],"curves":[{"colors":["#ffaf1c"],"fields":["ADJATR"]}]}},{"id":"COTR","meta":{"title":"Change over True Range","caption":"Change over True Range","overlay":false,"enumerations":[{"input":"Smoothing","values":["SMA","MA","EMA","WMA"]},{"input":"TypeOfATR","values":["ATR","ADJATR"]}]},"defaults":{"inputs":[{"name":"Period","value":14},{"name":"Smoothing","value":"SMA"},{"name":"TypeOfATR","value":"ATR"}],"curves":[{"colors":["#ffaf1c"],"fields":["COTR"]}]}},{"id":"ADX","meta":{"title":"Average Directional Index","caption":"Average Directional Index","overlay":false},"defaults":{"inputs":[{"name":"AdxSmoothing","value":14},{"name":"DiLength","value":14}],"curves":[{"colors":["#bc41ce"],"fields":["MDI"]},{"colors":["#ffaf1c"],"fields":["PDI"]},{"colors":["#00aaab"],"fields":["ADX"]}]}},{"id":"ADXMOD","meta":{"title":"Average Directional Index Modified","caption":"Average Directional Index Modified","overlay":false},"defaults":{"inputs":[{"name":"AdxSmoothing","value":14},{"name":"DiLength","value":14}],"curves":[{"colors":["#25329b"],"fields":["MDI"]},{"colors":["#ffaf1c"],"fields":["PDI"]},{"colors":["#9326ff"],"fields":["ADXM"]}]}},{"id":"ADL","meta":{"title":"Chaikin Accumulation Distribution","caption":"Chaikin Accumulation Distribution","overlay":false},"defaults":{"curves":[{"colors":["#f18900"],"fields":["ADL"]}]}},{"id":"ADWM","meta":{"title":"Accumulation/Distribution Williams","caption":"Accumulation/Distribution Williams","overlay":false},"defaults":{"inputs":[{"name":"Period","value":14}],"curves":[{"colors":["#f18900"],"fields":["ADWM"]},{"colors":["#00aaab"],"fields":["ADWMMA"]}]}},{"id":"CHAOSC","meta":{"title":"Chaikin Oscillator","caption":"Chaikin Oscillator","overlay":false},"defaults":{"curves":[{"colors":["#2284dd"],"fields":["CHAOSC"]}]}},{"id":"TP","meta":{"title":"Typical Price","caption":"Typical Price","overlay":true},"defaults":{"curves":[{"colors":["#bc41ce"],"fields":["TP"]}]}},{"id":"KELCHN","meta":{"title":"Keltner Channel","caption":"Keltner Channel","overlay":true},"defaults":{"inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#f18900"],"fields":["KCUP"]},{"colors":["#2284dd"],"fields":["KCMID"]},{"colors":["#480048"],"fields":["KCLOW"]},{"colors":["rgba(72, 0, 72, 0.1)"],"fields":["KCUP","KCLOW"],"style":"Ribbon","lineWidth":0}]}},{"id":"KELEXP","meta":{"title":"Keltner Channel Exponential","caption":"Keltner Channel Exponential","overlay":true},"defaults":{"inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#f18900"],"fields":["KCEUP"]},{"colors":["#2284dd"],"fields":["KCEMID"]},{"colors":["#480048"],"fields":["KCELOW"]},{"colors":["rgba(72, 0, 72, 0.1)"],"fields":["KCEUP","KCELOW"],"style":"Ribbon","lineWidth":0}]}},{"id":"KELBND","meta":{"title":"Keltner Bands","caption":"Keltner Bands","overlay":true},"defaults":{"inputs":[{"name":"Period","value":20},{"name":"Multiplier","value":2.5}],"curves":[{"colors":["#f18900"],"fields":["KBUP"]},{"colors":["#2284dd"],"fields":["KBMID"]},{"colors":["#480048"],"fields":["KBLOW"]},{"colors":["rgba(72, 0, 72, 0.1)"],"fields":["KBUP","KBLOW"],"style":"Ribbon","lineWidth":0}]}},{"id":"DONCHN","meta":{"title":"Donchian Channel","caption":"Donchian Channel","overlay":true},"defaults":{"inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#00b04b"],"fields":["DONUP"]},{"colors":["#ff6a00"],"fields":["DONMID"]},{"colors":["#0c32ff"],"fields":["DONLOW"]},{"colors":["rgba(12, 50, 255, 0.1)"],"fields":["DONUP","DONLOW"],"style":"Ribbon","lineWidth":0}]}},{"id":"DONWIDTH","meta":{"title":"Donchian Width","caption":"Donchian Width","overlay":false},"defaults":{"inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#480048"],"fields":["DONW"]}]}},{"id":"PVT","meta":{"title":"Price Volume Trend","caption":"Price Volume Trend","overlay":false},"defaults":{"curves":[{"colors":["#ae272d"],"fields":["PVT"]}]}},{"id":"ROC","meta":{"title":"Rate Of Change","caption":"Rate Of Change","overlay":false,"decimals":2},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10}],"curves":[{"colors":["#2284dd"],"fields":["ROC"]}]}},{"id":"TRIX","meta":{"title":"Triple Exponential","caption":"Triple Exponential","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":15}],"curves":[{"colors":["#743800"],"fields":["TRIX"]}]}},{"id":"DEMA","meta":{"title":"Moving Average Exponential 2X","caption":"Moving Average Exponential 2X","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":15}],"curves":[{"colors":["#743800"],"fields":["DEMA"]}]}},{"id":"TEMA","meta":{"title":"Moving Average Exponential 3X","caption":"Moving Average Exponential 3X","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":15}],"curves":[{"colors":["#743800"],"fields":["TEMA"]}]}},{"id":"TSI","meta":{"title":"True Strength Index","caption":"True Strength Index","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period1","value":25},{"name":"Period2","value":13},{"name":"Period3","value":7}],"curves":[{"colors":["#3bb3e4"],"fields":["TSI"]},{"colors":["#ff006e"],"fields":["TSISIG"]}],"levels":[{"value":0,"name":"Zero","line":{"color":"#606060","dashStyle":"Dash"}}]}},{"id":"PPMOV","meta":{"title":"Pivot Points Bands","caption":"Pivot Points Bands","overlay":true},"defaults":{"curves":[{"colors":["#ffaf1c"],"fields":["PVPTR"]},{"colors":["#f18900"],"fields":["PVPT"]},{"colors":["#00aaab"],"fields":["PVPTS"]}]}},{"id":"ARNUPDW","meta":{"title":"Aroon Up/Down","caption":"Aroon Up/Down","overlay":false,"decimals":2},"defaults":{"inputs":[{"name":"Period","value":25}],"curves":[{"colors":["#005716"],"fields":["ARNUP"]},{"colors":["#ae272d"],"fields":["ARNLOW"]}]}},{"id":"ARNOSC","meta":{"title":"Aroon Oscillator","caption":"Aroon Oscillator","overlay":false,"decimals":2},"defaults":{"inputs":[{"name":"Period","value":25}],"curves":[{"colors":["#808080"],"fields":["ARNOSC"]}]}},{"id":"TCHN","meta":{"title":"Turtle Channel","caption":"Turtle Channel","overlay":true,"enumerations":[{"input":"Range","values":["High/Low","Close"]}]},"defaults":{"source":"Close","inputs":[{"name":"PeriodUpper","value":14},{"name":"PeriodLower","value":14},{"name":"Range","value":"High/Low"}],"curves":[{"colors":["#005716"],"fields":["TCHNUP"]},{"colors":["#ae272d"],"fields":["TCHNLOW"]}]}},{"id":"TCHRE","meta":{"title":"Turtle Channel Retracement","caption":"Turtle Channel Retracement","overlay":true,"enumerations":[{"input":"Range","values":["High/Low","Close"]},{"input":"Retracement","values":["Long","Short"]}]},"defaults":{"source":"Close","inputs":[{"name":"Period","value":100},{"name":"Retracement","value":"Long"},{"name":"Adjustment","value":5},{"name":"Range","value":"High/Low"}],"curves":[{"colors":["#2799f6"],"fields":["TCHRE"]}]}},{"id":"ALLG","meta":{"title":"Alligator","caption":"Alligator","overlay":true},"defaults":{"inputs":[{"name":"Period1","value":13},{"name":"Period2","value":8},{"name":"Period3","value":5}],"curves":[{"colors":["#25329b"],"fields":["ALJAW"],"shift":8},{"colors":["#7f8000"],"fields":["ALTEETH"],"shift":5},{"colors":["#9326ff"],"fields":["ALLIPS"],"shift":3}]}},{"id":"PLTLN","meta":{"title":"Plot Line","caption":"Plot Line","overlay":true},"defaults":{"inputs":[{"name":"Position","value":700}],"curves":[{"colors":["#808080"],"fields":["PLTLN"]}]}},{"id":"AWEOSC","meta":{"title":"Awesome Oscillator","caption":"Awesome Oscillator","overlay":false},"defaults":{"inputs":[{"name":"Period1","value":5},{"name":"Period2","value":34},{"name":"Period3","value":10}],"curves":[{"colors":["#711","#0aa"],"fields":["AWOS"],"style":"Column","varyColorPerBar":true},{"colors":["#ef4226"],"fields":["AWOSMA"]}]}},{"id":"CLV","meta":{"title":"Close Location Value","caption":"Close Location Value","overlay":false},"defaults":{"curves":[{"colors":["#00aaab"],"fields":["CLV"]}]}},{"id":"CHAMF","meta":{"title":"Chaikin Money Flow","caption":"Chaikin Money Flow","overlay":false},"defaults":{"inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#25329b"],"fields":["CHAMF"],"style":"Column"}]}},{"id":"CHAVOL","meta":{"title":"Chaikin Volatility","caption":"Chaikin Volatility","overlay":false},"defaults":{"inputs":[{"name":"Period1","value":10},{"name":"Period2","value":10}],"curves":[{"colors":["#808080"],"fields":["CHAVOL"]}]}},{"id":"DPO","meta":{"title":"Detrended Price Oscillator","caption":"Detrended Price Oscillator","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#888"],"fields":["DPO"],"style":"Area"}]}},{"id":"MCGD","meta":{"title":"McGinley Dynamic","caption":"McGinley Dynamic","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":14}],"curves":[{"colors":["#3bb3e4"],"fields":["MCGD"],"style":"Line"}]}},{"id":"HMA","meta":{"title":"Hull Moving Average","caption":"Hull Moving Average","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#674ea7"],"fields":["HMA"],"style":"Line"}]}},{"id":"COPP","meta":{"title":"Coppock Curve","caption":"Coppock Curve","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"PeriodWma","value":10},{"name":"PeriodRocLong","value":14},{"name":"PeriodRocShort","value":11}],"curves":[{"colors":["#2284dd"],"fields":["COPP"],"style":"Line"}]}},{"id":"CCI","meta":{"title":"Commodity Channel Index","caption":"Commodity Channel Index","overlay":false},"defaults":{"inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#7f8000"],"fields":["CCI"]}],"levels":[{"value":-100,"name":"Oversold","line":{"color":"#606060","dashStyle":"Dash"}},{"value":100,"name":"Overbought","line":{"color":"#606060","dashStyle":"Dash"}}],"bands":[{"fill":{"color":"rgba(127, 128, 0, 0.1)"},"range":{"from":-100,"to":100}}]}},{"id":"EMV","meta":{"title":"Ease Of Movement","caption":"Ease Of Movement","overlay":false},"defaults":{"inputs":[{"name":"Period","value":14}],"curves":[{"colors":["#9326ff"],"fields":["EMV"]},{"colors":["#808080"],"fields":["EMVMA"]}]}},{"id":"ERBLPOW","meta":{"title":"Elder Ray Bull Power","caption":"Elder Ray Bull Power","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10}],"curves":[{"colors":["#005716"],"fields":["ERBLPOW"],"style":"Column"}]}},{"id":"ERBRPOW","meta":{"title":"Elder Ray Bear Power","caption":"Elder Ray Bear Power","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10}],"curves":[{"colors":["#ae272d"],"fields":["ERBRPOW"],"style":"Column"}]}},{"id":"FI","meta":{"title":"Force Index","caption":"Force Index","overlay":false},"defaults":{"inputs":[{"name":"Period","value":13}],"curves":[{"colors":["rgba(252, 13, 27, 0.3)","rgba(0, 176, 75, 0.3)"],"fields":["FI"],"style":"Area","zones":[{"value":0,"colors":1},{"colors":1}]}]}},{"id":"MI","meta":{"title":"Mass Index","caption":"Mass Index","overlay":false},"defaults":{"curves":[{"colors":["#00b04b"],"fields":["MI"]}]}},{"id":"MOM","meta":{"title":"Momentum","caption":"Momentum","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10},{"name":"Movement","value":20}],"curves":[{"colors":["#808080"],"fields":["MOM"]},{"colors":["#505050"],"fields":["MOMMA"]}]}},{"id":"MFI","meta":{"title":"Money Flow Index","caption":"Money Flow Index","overlay":false,"decimals":2},"defaults":{"inputs":[{"name":"Period","value":14}],"curves":[{"colors":["#480048"],"fields":["MFI"]}]}},{"id":"MSD","meta":{"title":"Moving Standard Deviation","caption":"Moving Standard Deviation","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period","value":10}],"curves":[{"colors":["#0c32ff"],"fields":["MSD"]}]}},{"id":"PCTCHG","meta":{"title":"Percent Change","caption":"Percent Change","overlay":false},"defaults":{"source":"Close","curves":[{"colors":["#037d27"],"fields":["PCTCHG"]}]}},{"id":"NVI","meta":{"title":"Negative Volume Index","caption":"Negative Volume Index","overlay":false},"defaults":{"inputs":[{"name":"Period","value":255}],"curves":[{"colors":["#480048"],"fields":["NVI"]},{"colors":["#7f8000"],"fields":["NVIEMA"]}]}},{"id":"PVI","meta":{"title":"Positive Volume Index","caption":"Positive Volume Index","overlay":false},"defaults":{"inputs":[{"name":"Period","value":255}],"curves":[{"colors":["#00b04b"],"fields":["PVI"]},{"colors":["#005716"],"fields":["PVIEMA"]}]}},{"id":"PPO","meta":{"title":"Percentage Price Oscillator","caption":"Percentage Price Oscillator","overlay":false},"defaults":{"source":"Close","inputs":[{"name":"Period1","value":12},{"name":"Period2","value":26},{"name":"Period3","value":9}],"curves":[{"colors":["#808080"],"fields":["PPO"]},{"colors":["#bc41ce"],"fields":["PPOS"]},{"colors":["#2284dd"],"fields":["PPOH"],"style":"Column"}]}},{"id":"PVO","meta":{"title":"Percentage Volume Oscillator","caption":"Percentage Volume Oscillator","overlay":false},"defaults":{"source":"Volume","inputs":[{"name":"Period1","value":12},{"name":"Period2","value":26},{"name":"Period3","value":9}],"curves":[{"colors":["#808080"],"fields":["PVO"]},{"colors":["#bc41ce"],"fields":["PVOS"]},{"colors":["#9075d6"],"fields":["PVOH"],"style":"Column"}]}},{"id":"HV","meta":{"title":"Historical Volatility","caption":"Historical Volatility","overlay":false,"decimals":2},"defaults":{"inputs":[{"name":"Period","value":14}],"curves":[{"colors":["#7f8000"],"fields":["HV"]}]}},{"id":"PERF","meta":{"title":"Price Performance","caption":"Price Performance","overlay":false,"decimals":2},"defaults":{"source":"Close","curves":[{"colors":["#00aaab"],"fields":["PERF"]}]}},{"id":"WASI","meta":{"title":"Wilder Accumulative Swing Index","caption":"Wilder Accumulative Swing Index","overlay":false},"defaults":{"inputs":[{"name":"Limit","value":3}],"curves":[{"colors":["#bc41ce"],"fields":["WASI"]}]}},{"id":"WWVOL","meta":{"title":"Welles Wilder Volatility","caption":"Welles Wilder Volatility","overlay":true},"defaults":{"inputs":[{"name":"Period","value":14},{"name":"Constant","value":3}],"curves":[{"colors":["#9326ff"],"fields":["WWVSARD"],"style":"Dots"},{"colors":["#f18900"],"fields":["WWVSARU"],"style":"Dots"}]}},{"id":"PARTP","meta":{"title":"Parabolic Time/Price (SAR)","caption":"Parabolic Time/Price (SAR)","overlay":true},"defaults":{"inputs":[{"name":"Acceleration","value":50},{"name":"Limit","value":5}],"curves":[{"colors":["#25329b"],"fields":["PARSARS"],"style":"Dots"},{"colors":["#00aaab"],"fields":["PARSARL"],"style":"Dots"}]}},{"id":"REATRHI","meta":{"title":"Retracement ATR High","caption":"Retracement ATR High","overlay":true,"enumerations":[{"input":"TurtleChnField","values":["High","Close"]}]},"defaults":{"source":"Close","inputs":[{"name":"PeriodAdjATR","value":20},{"name":"PeriodTurtleChn","value":100},{"name":"TurtleChnField","value":"High"},{"name":"FactorAdjATR","value":15},{"name":"FactorATR","value":2}],"curves":[{"colors":["#25329b"],"fields":["REATRHI"],"style":"Dots"}]}},{"id":"REATRLO","meta":{"title":"Retracement ATR Low","caption":"Retracement ATR Low","overlay":true,"enumerations":[{"input":"TurtleChnField","values":["Low","Close"]}]},"defaults":{"source":"Close","inputs":[{"name":"PeriodAdjATR","value":20},{"name":"PeriodTurtleChn","value":100},{"name":"TurtleChnField","value":"Low"},{"name":"FactorAdjATR","value":15},{"name":"FactorATR","value":2}],"curves":[{"colors":["#b25900"],"fields":["REATRLO"],"style":"Dots"}]}},{"id":"MOVLR","meta":{"title":"Moving Linear Regression","caption":"Moving Linear Regression","overlay":true},"defaults":{"source":"Close","inputs":[{"name":"Period","value":20}],"curves":[{"colors":["#480048"],"fields":["MOVLR"]}]}},{"id":"TRSP","meta":{"title":"TrendSpotter","caption":"TrendSpotter","overlay":true},"defaults":{"curves":[{"colors":["#24ad54"],"fields":["TRSP1"],"style":"Dots"},{"colors":["#ec4533"],"fields":["TRSP2"],"style":"Dots"}]}},{"id":"COTLC","meta":{"title":"Commitment of Traders","caption":"Commitment of Traders","overlay":false,"decimals":0},"defaults":{"curves":[{"colors":["#dc4041"],"fields":["COTLCCMSP"],"style":"Step"},{"colors":["#3a8d45"],"fields":["COTLCLGSP"],"style":"Step"},{"colors":["#403daf"],"fields":["COTLCSMSP"],"style":"Step"}]}},{"id":"COTDAG","meta":{"title":"Commitment of Traders Disaggregated","caption":"Commitment of Traders Disaggregated","overlay":false,"decimals":0},"defaults":{"curves":[{"colors":["#dc4041"],"fields":["COTDAGPRO"],"style":"Step"},{"colors":["#3a8d45"],"fields":["COTDAGSPD"],"style":"Step"},{"colors":["#403daf"],"fields":["COTDAGMNM"],"style":"Step"},{"colors":["#ffb34c"],"fields":["COTDAGOTH"],"style":"Step"}]}},{"id":"COTFTR","meta":{"title":"Commitment of Traders Financial","caption":"Commitment of Traders Financial","overlay":false,"decimals":0},"defaults":{"curves":[{"colors":["#dc4041"],"fields":["COTFTRDLI"],"style":"Step"},{"colors":["#3a8d45"],"fields":["COTFTRASM"],"style":"Step"},{"colors":["#403daf"],"fields":["COTFTRLVF"],"style":"Step"},{"colors":["#ffb34c"],"fields":["COTFTROTH"],"style":"Step"}]}},{"id":"PIVPTS","meta":{"title":"Pivot Points","caption":"Pivot Points","overlay":true,"enumerations":[{"input":"Previous","values":["Day","Week","Month"]}]},"defaults":{"inputs":[{"name":"Previous","value":"Day"}],"curves":[{"colors":["#79a2e3"],"fields":["PPTR3"]},{"colors":["#f08f4c"],"fields":["PPTR2"]},{"colors":["#492c6e"],"fields":["PPTR1"]},{"colors":["#28adcc"],"fields":["PPTPIV"]},{"colors":["#8f040a"],"fields":["PPTS1"]},{"colors":["#8cba32"],"fields":["PPTS2"]},{"colors":["#0e2339"],"fields":["PPTS3"]}]}},{"id":"CPP","meta":{"title":"Camarilla Pivot Points","caption":"Camarilla Pivot Points","overlay":true},"defaults":{"curves":[{"colors":["#00b04b"],"fields":["CPPH4"]},{"colors":["#00b04b"],"fields":["CPPH3"]},{"colors":["#00b04b"],"fields":["CPPH2"]},{"colors":["#00b04b"],"fields":["CPPH1"]},{"colors":["#d47928"],"fields":["CPPL1"]},{"colors":["#d47928"],"fields":["CPPL2"]},{"colors":["#d47928"],"fields":["CPPL3"]},{"colors":["#d47928"],"fields":["CPPL4"]}]}},{"id":"IMPVOL","meta":{"title":"Implied Volatility (Futures)","caption":"Implied Volatility (Futures)","overlay":false},"defaults":{"curves":[{"colors":["#ffc270"],"fields":["IMPVOL"]}]}},{"id":"CTM","meta":{"title":"Cycle Trading Momentum","caption":"Cycle Trading Momentum","overlay":false,"decimals":2},"defaults":{"source":"Close","curves":[{"style":"Step","colors":["#fc0d1b","#00b04b"],"fields":["CTM"],"zones":[{"value":0,"colors":1,"gradient":"linDarken"},{"colors":1,"gradient":"linLighten"}]},{"colors":["#9326ff"],"fields":["CTLTM"]}]}},{"id":"GPMI","meta":{"title":"GBE Principal Momentum Indicator","caption":"GBE Principal Momentum Indicator","overlay":false},"defaults":{"source":"Close","curves":[{"style":"Step","colors":["#fc0d1b","#00b04b"],"fields":["GPMI"],"zones":[{"value":0,"colors":1,"gradient":"linDarken"},{"colors":1,"gradient":"linLighten"}]}]}},{"id":"GTPI","meta":{"title":"GBE Turning Point Indicator","caption":"GBE Turning Point Indicator","overlay":false,"decimals":2,"range":{"min":0,"max":100}},"defaults":{"curves":[{"colors":["#ef4226","#2642ef"],"fields":["GTPI"],"zones":[{"value":50,"colors":1,"gradient":"linDarken"},{"colors":1,"gradient":"linLighten"}]}],"levels":[{"value":25,"name":"Oversold","line":{"color":"#3a45a2"}},{"value":50,"line":{"color":"#3a45a2","dashStyle":"DashDot"}},{"value":75,"name":"Overbought","line":{"color":"#3a45a2"}}]}},{"id":"GMMA","meta":{"title":"Guppy Multiple Moving Average","caption":"Guppy MMA","overlay":true},"defaults":{"inputs":[{"name":"Period1","value":3},{"name":"Period2","value":5},{"name":"Period3","value":8},{"name":"Period4","value":10},{"name":"Period5","value":12},{"name":"Period6","value":15},{"name":"Period7","value":30},{"name":"Period8","value":35},{"name":"Period9","value":40},{"name":"Period10","value":45},{"name":"Period11","value":50},{"name":"Period12","value":60}],"curves":[{"colors":["#008ae6"],"fields":["GMMA3"]},{"colors":["#008ae6"],"fields":["GMMA5"]},{"colors":["#008ae6"],"fields":["GMMA8"]},{"colors":["#008ae6"],"fields":["GMMA10"]},{"colors":["#008ae6"],"fields":["GMMA12"]},{"colors":["#008ae6"],"fields":["GMMA15"]},{"colors":["#b32400"],"fields":["GMMA30"]},{"colors":["#b32400"],"fields":["GMMA35"]},{"colors":["#b32400"],"fields":["GMMA40"]},{"colors":["#b32400"],"fields":["GMMA45"]},{"colors":["#b32400"],"fields":["GMMA50"]},{"colors":["#b32400"],"fields":["GMMA60"]}]}},{"id":"STOMOMIX","meta":{"title":"Stochastic Momentum Index","caption":"Stochastic Momentum Index","overlay":false},"defaults":{"inputs":[{"name":"Period1","value":10},{"name":"Period2","value":3}],"curves":[{"colors":["#3bb4e5"],"fields":["STOMOMIX"]}],"levels":[{"value":-40,"name":"Oversold","line":{"color":"#606060","dashStyle":"Dash"}},{"value":40,"name":"Overbought","line":{"color":"#606060","dashStyle":"Dash"}}]}},{"id":"CHDMOMOSC","meta":{"title":"Chande Momentum Oscillator","caption":"Chande Momentum Oscillator","overlay":false},"defaults":{"inputs":[{"name":"Period","value":9}],"curves":[{"colors":["#27c6da"],"fields":["CHDMOMOSC"]}],"levels":[{"value":0,"name":"Zero","line":{"color":"#606060","dashStyle":"Dash"}}]}},{"id":"VSTOP","meta":{"title":"Volatility Stop","caption":"Volatility Stop","overlay":true},"defaults":{"inputs":[{"name":"Period","value":20},{"name":"Multiplier","value":2}],"curves":[{"colors":["#50cc52"],"fields":["VSTOPUP"],"style":"Dots"},{"colors":["#d46757"],"fields":["VSTOPLOW"],"style":"Dots"}]}},{"id":"SUPTR","meta":{"title":"Supertrend","caption":"Supertrend","overlay":true},"defaults":{"inputs":[{"name":"Period","value":7},{"name":"Multiplier","value":3}],"curves":[{"colors":["#ff5252","#4cb050"],"fields":["SUPTR"],"style":"Line","varyColorPerBar":true}]}},{"id":"ICHCLD","meta":{"title":"Ichimoku Clouds","caption":"Ichimoku Clouds","overlay":true},"defaults":{"inputs":[{"name":"PeriodConversionLine","value":9},{"name":"PeriodBaseLine","value":26},{"name":"PeriodLaggingSpan2","value":52},{"name":"Displacement","value":26}],"curves":[{"colors":["#0080cd"],"fields":["CONVLN"],"style":"Line"},{"colors":["#cd0000"],"fields":["BASELN"],"style":"Line"},{"colors":["#009900"],"fields":["LAGGSP"],"style":"Line"},{"colors":["#00cd00"],"fields":["LEADSP1"],"style":"Line"},{"colors":["#ff0000"],"fields":["LEADSP2"],"style":"Line"},{"colors":["rgba(255, 0, 0, 0.2)","rgba(0, 255, 0, 0.2)"],"fields":["LEADSP1","LEADSP2"],"style":"Ribbon","varyColorPerBar":true}]}},{"id":"VWAP","meta":{"title":"VWAP","caption":"VWAP","overlay":true},"defaults":{"curves":[{"colors":["#ee762f"],"fields":["VWAP"],"style":"Line"}]}}]')
    }, function(t, e, i) {
        t.exports = i(23)
    }, function(t, e, i) {
        t.exports = i(24)
    }, function(t) {
        t.exports = JSON.parse('[{"id":"DateTime","type":"Date"},{"id":"Open"},{"id":"High"},{"id":"Low"},{"id":"Close"},{"id":"TradeSize","format":"AsInteger"},{"id":"Volume","format":"UseMetricUnit","shortName":"VOL"},{"id":"OpenInterest","format":"UseMetricUnit","shortName":"OI"},{"id":"Last"},{"id":"Symbol","type":"String"},{"id":"Change"},{"id":"PercentChange","format":"AsPercent"},{"id":"PreviousClose"},{"id":"PreviousOpen"},{"id":"PreviousHigh"},{"id":"PreviousLow"},{"id":"WeekPreviousClose"},{"id":"WeekPreviousHigh"},{"id":"WeekPreviousLow"},{"id":"MonthPreviousClose"},{"id":"MonthPreviousHigh"},{"id":"MonthPreviousLow"},{"id":"Dividends","type":"String","category":"Event","name":"Dividend","shortName":"D"},{"id":"Splits","type":"String","category":"Event","name":"Split","shortName":"S"},{"id":"Earnings","type":"String","category":"Event","shortName":"E"},{"id":"MA","category":"Study","name":"MA-Simple","shortName":"MA"},{"id":"SUPTR","category":"Study","name":"Supertrend","shortName":"SUPTR"},{"id":"BARCOLIX","category":"Study","name":"BarColorIndex","shortName":"BARCOLIX"},{"id":"BREL","category":"Study","name":"BarRelation","shortName":"BREL"},{"id":"EMA","category":"Study","name":"MA-Exp","shortName":"MA(EXP)"},{"id":"MAHI","category":"Study","name":"MA-High","shortName":"MA(HI)"},{"id":"MALO","category":"Study","name":"MA-Low","shortName":"MA(LO)"},{"id":"MACD","category":"Study","name":"MACD","shortName":"MACD"},{"id":"MACDS","category":"Study","name":"MACD-Signal","shortName":"MACD(S)"},{"id":"MACDH","category":"Study","name":"MACD-Histogram","shortName":"MACD(H)"},{"id":"ENVU","category":"Study","name":"Envelope-Up","shortName":"ENV(UP)"},{"id":"ENVD","category":"Study","name":"Envelope-Down","shortName":"ENV(DN)"},{"id":"ENVEXPU","category":"Study","name":"Envelope-Exponential-Up","shortName":"ENVEXP(UP)"},{"id":"ENVEXPD","category":"Study","name":"Envelope-Exponential-Down","shortName":"ENVEXP(DN)"},{"id":"ENVSMOU","category":"Study","name":"Envelope-Smoothed-Up","shortName":"ENVSMO(UP)"},{"id":"ENVSMOD","category":"Study","name":"Envelope-Smoothed-Down","shortName":"ENVSMO(DN)"},{"id":"SMA","category":"Study","name":"MA-Smoothed","shortName":"MA(S)"},{"id":"CSHO","category":"Study","name":"Cash-Overlay","shortName":"CSHO"},{"id":"CSHB","category":"Study","name":"Cash-Basis","shortName":"CSHB"},{"id":"TMA","category":"Study","name":"MA-Triangular","shortName":"MA(TRI)"},{"id":"WMA","category":"Study","name":"MA-Weighted","shortName":"MA(W)"},{"id":"VOLMA","category":"Study","format":"UseMetricUnit","name":"MA-Volume","shortName":"VOLMA"},{"id":"OSC","category":"Study","name":"OSC","shortName":"OSC"},{"id":"VOSC","category":"Study","format":"UseMetricUnit","name":"OSC-Volume","shortName":"VOLOSC"},{"id":"RSI","category":"Study","name":"RSI","shortName":"RSI"},{"id":"STORSI","category":"Study","name":"StochRSI","shortName":"STOCHRSI"},{"id":"HH","category":"Study","name":"HighestHigh","shortName":"HHIGH"},{"id":"LL","category":"Study","name":"LowestLow","shortName":"LLOW"},{"id":"PercK","category":"Study","name":"%K","shortName":"PCNTK"},{"id":"PercD","category":"Study","name":"%D","shortName":"PCNTD"},{"id":"PercR","category":"Study","name":"%R","shortName":"PCNTR"},{"id":"WGCL","category":"Study","name":"WeightedClose","shortName":"WTCL"},{"id":"BOLLBU","category":"Study","name":"Bollinger-Upper","shortName":"BOLL(U)"},{"id":"BOLLBL","category":"Study","name":"Bollinger-Lower","shortName":"BOLL(L)"},{"id":"BOLLBM","category":"Study","name":"Bollinger-Mid","shortName":"BOLL(M)"},{"id":"BOLLBW","category":"Study","name":"Bollinger-Width","shortName":"BOLLW"},{"id":"BOLLBP","category":"Study","name":"Bollinger-Percent","shortName":"%B"},{"id":"OBVOL","category":"Study","format":"UseMetricUnit","name":"OnBalanceVol","shortName":"OBVOL"},{"id":"TR","category":"Study","name":"TrueRange","shortName":"TR"},{"id":"ATR","category":"Study","name":"AvgTrueRange","shortName":"ATR"},{"id":"ATRMA","category":"Study","name":"MA-ATR","shortName":"MA(ATR)"},{"id":"ADJATR","category":"Study","name":"AdjAvgTrueRange","shortName":"ADJATR"},{"id":"COTR","category":"Study","name":"ChgOverTrueRange","shortName":"COTR"},{"id":"STOMOMIX","category":"Study","name":"StochMomIndex","shortName":"STOMOMIX"},{"id":"CHDMOMOSC","category":"Study","name":"ChandeMomOsc","shortName":"CHDMOMOSC"},{"id":"PDI","category":"Study","name":"+DI","shortName":"+DI"},{"id":"MDI","category":"Study","name":"-DI","shortName":"-DI"},{"id":"ADX","category":"Study","name":"ADX","shortName":"ADX"},{"id":"ADXM","category":"Study","name":"ADX-Modified","shortName":"ADXM"},{"id":"ADL","category":"Study","format":"UseMetricUnit","name":"AccDist","shortName":"ACCDIS"},{"id":"ADWM","category":"Study","name":"AccDistWill","shortName":"ACCDISWIL"},{"id":"ADWMMA","category":"Study","name":"AccDistWillMovAvg","shortName":"ACCDISWILMA"},{"id":"MCGD","category":"Study","name":"McGinleyDyn","shortName":"MCGD"},{"id":"HMA","category":"Study","name":"HullMovAvg","shortName":"HMA"},{"id":"COPP","category":"Study","name":"CoppCurve","shortName":"COPP"},{"id":"CHAOSC","category":"Study","format":"UseMetricUnit","name":"ChaikinOsc","shortName":"CHAIKOSC"},{"id":"TP","category":"Study","name":"TypicalPrice","shortName":"TP"},{"id":"KCUP","category":"Study","name":"KeltChan-Up","shortName":"KELT(UP)"},{"id":"KCMID","category":"Study","name":"KeltChan-Mid","shortName":"KELT(MID)"},{"id":"KCLOW","category":"Study","name":"KeltChan-Low","shortName":"KELT(LO)"},{"id":"KBUP","category":"Study","name":"KeltBands-Up","shortName":"KELB(UP)"},{"id":"KBMID","category":"Study","name":"KeltBands-Mid","shortName":"KELB(MID)"},{"id":"KBLOW","category":"Study","name":"KeltBands-Low","shortName":"KELB(LO)"},{"id":"KCEUP","category":"Study","name":"KeltChanExp-Up","shortName":"KELE(UP)"},{"id":"KCEMID","category":"Study","name":"KeltChanExp-Mid","shortName":"KELE(MID)"},{"id":"KCELOW","category":"Study","name":"KeltChanExp-Low","shortName":"KELE(LO)"},{"id":"DONUP","category":"Study","name":"Donchian-Up","shortName":"DON(U)"},{"id":"DONMID","category":"Study","name":"Donchian-Mid","shortName":"DON(M)"},{"id":"DONLOW","category":"Study","name":"Donchian-Low","shortName":"DON(L)"},{"id":"DONW","category":"Study","name":"Donchian-Width","shortName":"DON(W)"},{"id":"PVT","category":"Study","format":"UseMetricUnit","name":"PriceVolChange","shortName":"PVOL"},{"id":"TRIX","category":"Study","name":"Triple-MA-Exp","shortName":"TRIX"},{"id":"ROC","category":"Study","name":"RateOfChange","shortName":"ROC"},{"id":"PVPT","category":"Study","name":"PivotPoint","shortName":"PVMOV"},{"id":"PVPTR","category":"Study","name":"PvtPt-Resistance","shortName":"PVMOV(R)"},{"id":"PVPTS","category":"Study","name":"PvtPt-Support","shortName":"PVMOV(S)"},{"id":"ARNUP","category":"Study","name":"Aroon-Up","shortName":"ARN(UP)"},{"id":"ARNLOW","category":"Study","name":"Aroon-Down","shortName":"ARN(DN)"},{"id":"VSTOPUP","category":"Study","name":"VolaStop-Up","shortName":"VSTOP(UP)"},{"id":"VSTOPLOW","category":"Study","name":"VolaStop-Down","shortName":"VSTOP(DN)"},{"id":"ARNOSC","category":"Study","name":"Aroon-Osci","shortName":"ARNOSC"},{"id":"TCHNUP","category":"Study","name":"TurtleChn-Up","shortName":"TCH(UP)"},{"id":"TCHNLOW","category":"Study","name":"TurtleChn-Low","shortName":"TCH(LO)"},{"id":"TCHRE","category":"Study","name":"TurtleChnRetrace","shortName":"TCHRE"},{"id":"ALJAW","category":"Study","name":"Alligator-Jaw","shortName":"AL(J)"},{"id":"ALTEETH","category":"Study","name":"Alligator-Teeth","shortName":"AL(T)"},{"id":"ALLIPS","category":"Study","name":"Alligator-Lips","shortName":"AL(L)"},{"id":"PLTLN","category":"Study","name":"PlotLine","shortName":"LINE"},{"id":"AWOS","category":"Study","name":"AwesomeOsc","shortName":"AWOSC"},{"id":"AWOSMA","category":"Study","name":"AwesomeOsc-MA","shortName":"AWOSC(MA)"},{"id":"MFMUL","category":"Study","name":"MoneyFlowMul"},{"id":"CLV","category":"Study","name":"CloseLocationValue","shortName":"CLV"},{"id":"CHAMF","category":"Study","name":"ChaikinMoneyFlow","shortName":"CHAIKMF"},{"id":"CHAVOL","category":"Study","name":"ChaikinVolatility","shortName":"CHAIKVOL"},{"id":"DPO","category":"Study","name":"DetrendedPriceOsc","shortName":"DPO"},{"id":"CCI","category":"Study","name":"CommodityChannelIndex","shortName":"CCI"},{"id":"EMV","category":"Study","name":"EaseOfMovement","shortName":"EOM"},{"id":"EMVMA","category":"Study","name":"EaseOfMovementMA","shortName":"EOM(MA)"},{"id":"ERBLPOW","category":"Study","name":"ElderRayBullPow","shortName":"ER(BULL)"},{"id":"ERBRPOW","category":"Study","name":"ElderRayBearPow","shortName":"ER(BEAR)"},{"id":"FI","category":"Study","format":"UseMetricUnit","name":"ForceIndex","shortName":"FORCE"},{"id":"MI","category":"Study","name":"MassIndex","shortName":"MASS"},{"id":"MOM","category":"Study","name":"Momentum","shortName":"MOM"},{"id":"MOMMA","category":"Study","name":"MA-Momentum","shortName":"MA(MOM)"},{"id":"MFI","category":"Study","name":"MoneyFlowIndex","shortName":"MFI"},{"id":"MSD","category":"Study","name":"MovingStdDev","shortName":"MSD"},{"id":"PCTCHG","category":"Study","name":"PercentChange","shortName":"PCTCHG"},{"id":"LINRUP","category":"Study","name":"LinRegUpper","shortName":"LINRUP"},{"id":"LINRMID","category":"Study","name":"LinRegMiddle","shortName":"LINRMID"},{"id":"LINRLOW","category":"Study","name":"LinRegLower","shortName":"LINRLOW"},{"id":"NVI","category":"Study","name":"NegativeVolIndex","shortName":"NVI"},{"id":"NVIEMA","category":"Study","name":"NegativeVolIndexEMA","shortName":"NVI(EMA)"},{"id":"PVI","category":"Study","name":"PositiveVolIndex","shortName":"PVI"},{"id":"PVIEMA","category":"Study","name":"PositiveVolIndexEMA","shortName":"PVI(EMA)"},{"id":"PPO","category":"Study","name":"PercPriceOsc","shortName":"PPO"},{"id":"PPOS","category":"Study","name":"PPO-Signal","shortName":"PPO(S)"},{"id":"PPOH","category":"Study","name":"PPO-Histogram","shortName":"PPO(H)"},{"id":"PVO","category":"Study","name":"PercVolOsc","shortName":"PVO"},{"id":"PVOS","category":"Study","name":"PVO-Signal","shortName":"PVO(S)"},{"id":"PVOH","category":"Study","name":"PVO-Histogram","shortName":"PVO(H)"},{"id":"HV","category":"Study","name":"HistVolatility","shortName":"HISTVOL"},{"id":"PERF","category":"Study","name":"Performance","shortName":"PERF"},{"id":"WASI","category":"Study","name":"WilderAccSwingIndex","shortName":"WACCSW"},{"id":"WWVSARU","category":"Study","name":"WilderVolSarUp","shortName":"WVOL-UP"},{"id":"WWVSARD","category":"Study","name":"WilderVolSarDown","shortName":"WVOL-DN"},{"id":"PARSARS","category":"Study","name":"ParabolicSarShort","shortName":"SHORT"},{"id":"PARSARL","category":"Study","name":"ParabolicSarLong","shortName":"LONG"},{"id":"REATRHI","category":"Study","name":"RetraceATRHigh","shortName":"REATRHI"},{"id":"REATRLO","category":"Study","name":"RetraceATRLow","shortName":"REATRLO"},{"id":"MOVLR","category":"Study","name":"MovingLinRegression","shortName":"MOVLINREG"},{"id":"TRSP1","category":"Study","name":"TrendSpotter","shortName":"TREND"},{"id":"TRSP2","category":"Study","name":"TrendSpotter","shortName":"TREND"},{"id":"COTLCCMSP","category":"Study","name":"Comm Spec","shortName":"COT(C)"},{"id":"COTLCLGSP","category":"Study","name":"Large Spec","shortName":"COT(L)"},{"id":"COTLCSMSP","category":"Study","name":"Small Spec","shortName":"COT(S)"},{"id":"COTDAGPRO","category":"Study","name":"Producers","shortName":"COTDIS(P)"},{"id":"COTDAGSPD","category":"Study","name":"Swap Dealers","shortName":"COTDIS(S)"},{"id":"COTDAGMNM","category":"Study","name":"Managed Money","shortName":"COTDIS(M)"},{"id":"COTDAGOTH","category":"Study","name":"Other Report","shortName":"COTDIS(O)"},{"id":"COTFTRDLI","category":"Study","name":"Dealer Intermediary","shortName":"COTFIN(D)"},{"id":"COTFTRASM","category":"Study","name":"Asset Manager","shortName":"COTFIN(A)"},{"id":"COTFTRLVF","category":"Study","name":"Leveraged Funds","shortName":"COTFIN(L)"},{"id":"COTFTROTH","category":"Study","name":"Other Report","shortName":"COTFIN(O)"},{"id":"PPTPIV","category":"Study","name":"Pivot Point","shortName":"PPT(P)"},{"id":"PPTR1","category":"Study","name":"1st Resistance","shortName":"PPT(R1)"},{"id":"PPTR2","category":"Study","name":"2nd Resistance","shortName":"PPT(R2)"},{"id":"PPTR3","category":"Study","name":"3rd Resistance","shortName":"PPT(R3)"},{"id":"PPTS1","category":"Study","name":"1st Support","shortName":"PPT(S1)"},{"id":"PPTS2","category":"Study","name":"2nd Support","shortName":"PPT(S2)"},{"id":"PPTS3","category":"Study","name":"3rd Support","shortName":"PPT(S3)"},{"id":"CPPH4","category":"Study","name":"4th Camarilla Supp","shortName":"CPP(H4)"},{"id":"CPPH3","category":"Study","name":"3rd Camarilla Supp","shortName":"CPP(H3)"},{"id":"CPPH2","category":"Study","name":"2nd Camarilla Supp","shortName":"CPP(H2)"},{"id":"CPPH1","category":"Study","name":"1st Camarilla Supp","shortName":"CPP(H1)"},{"id":"CPPL1","category":"Study","name":"1st Camarilla Res","shortName":"CPP(L1)"},{"id":"CPPL2","category":"Study","name":"2nd Camarilla Res","shortName":"CPP(L2)"},{"id":"CPPL3","category":"Study","name":"3rd Camarilla Res","shortName":"CPP(L3)"},{"id":"CPPL4","category":"Study","name":"4th Camarilla Res","shortName":"CPP(L4)"},{"id":"IMPVOL","category":"Study","name":"Implied Volatility","shortName":"IV"},{"id":"CTM","category":"Study","name":"Cycle Trading Momentum","shortName":"CTM"},{"id":"GPMI","category":"Study","name":"Principal Momentum","shortName":"GPMI"},{"id":"GTPI","category":"Study","name":"Turning Point","shortName":"GTPI"},{"id":"CTLTM","category":"Study","name":"Long-Term Momentum","shortName":"LTM"},{"id":"CTLTMF","category":"Study","name":"Long-Term Momentum, Fast","shortName":"LTM(F)"},{"id":"DEMA","category":"Study","name":"Double EMA","shortName":"DEMA"},{"id":"TEMA","category":"Study","name":"Triple EMA","shortName":"TEMA"},{"id":"TSI","category":"Study","name":"True Strength Index","shortName":"Tsi"},{"id":"TSISIG","category":"Study","name":"True Strength Index Signal","shortName":"TsiSig"},{"id":"GMMA3","category":"Study","name":"GMMA-EMA3","shortName":"GMMA(3)"},{"id":"GMMA5","category":"Study","name":"GMMA-EMA5","shortName":"GMMA(5)"},{"id":"GMMA8","category":"Study","name":"GMMA-EMA8","shortName":"GMMA(8)"},{"id":"GMMA10","category":"Study","name":"GMMA-EMA10","shortName":"GMMA(10)"},{"id":"GMMA12","category":"Study","name":"GMMA-EMA12","shortName":"GMMA(12)"},{"id":"GMMA15","category":"Study","name":"GMMA-EMA15","shortName":"GMMA(15)"},{"id":"GMMA30","category":"Study","name":"GMMA-EMA30","shortName":"GMMA(30)"},{"id":"GMMA35","category":"Study","name":"GMMA-EMA35","shortName":"GMMA(35)"},{"id":"GMMA40","category":"Study","name":"GMMA-EMA40","shortName":"GMMA(40)"},{"id":"GMMA45","category":"Study","name":"GMMA-EMA45","shortName":"GMMA(45)"},{"id":"GMMA50","category":"Study","name":"GMMA-EMA50","shortName":"GMMA(50)"},{"id":"GMMA60","category":"Study","name":"GMMA-EMA60","shortName":"GMMA(60)"},{"id":"CONVLN","category":"Study","name":"ConversionLine","shortName":"ConvLn"},{"id":"BASELN","category":"Study","name":"BaseLine","shortName":"BaseLn"},{"id":"LEADSP1","category":"Study","name":"LeadingSpanA","shortName":"LeadSpA"},{"id":"LEADSP2","category":"Study","name":"LeadingSpanB","shortName":"LeadSpB"},{"id":"LAGGSP","category":"Study","name":"LagginSpan","shortName":"LaggSp"},{"id":"VWAP","category":"Study","name":"VWAP","shortName":"VWAP"},{"id":"AccountsPayable","category":"BalanceSheet","format":"UseMetricUnit","name":"Accounts Payable","shortName":"AcctsPay"},{"id":"AccruedExpenses","category":"BalanceSheet","format":"UseMetricUnit","name":"Accrued Expenses","shortName":"AccrdExp"},{"id":"Cash","category":"BalanceSheet","format":"UseMetricUnit","name":"Cash & Cash Equivalents","shortName":"Cash&CashEqv"},{"id":"CommonShares","category":"BalanceSheet","format":"UseMetricUnit","name":"Common Shares","shortName":"CommonShares"},{"id":"DeferredIncomeTax","category":"BalanceSheet","format":"UseMetricUnit","name":"Deferred Income Tax","shortName":"DefIncTax"},{"id":"DeferredLongRevenues","category":"BalanceSheet","format":"UseMetricUnit","name":"Deferred Revenues","shortName":"DefRev"},{"id":"EquityOtherInvestments","category":"BalanceSheet","format":"UseMetricUnit","name":"Other Equity Investments","shortName":"OthEquityInvest"},{"id":"IncomeTaxPayable","category":"BalanceSheet","format":"UseMetricUnit","name":"Income Tax Payable","shortName":"IncTaxPayble"},{"id":"Intangibles","category":"BalanceSheet","format":"UseMetricUnit","name":"Intangibles","shortName":"Intangibles"},{"id":"Inventories","category":"BalanceSheet","format":"UseMetricUnit","name":"Inventories","shortName":"Inventory"},{"id":"LongTermDebt","category":"BalanceSheet","format":"UseMetricUnit","name":"Long Term Debt","shortName":"LTDebt"},{"id":"MarketableSec","category":"BalanceSheet","format":"UseMetricUnit","name":"Liquid Securities","shortName":"LiqSecurities"},{"id":"OtherCurrentAssets","category":"BalanceSheet","format":"UseMetricUnit","name":"Miscellaneous Current Assets","shortName":"MiscCurrAssets"},{"id":"OtherCurrentLiabilities","category":"BalanceSheet","format":"UseMetricUnit","name":"Other Current Liabilities","shortName":"OthCurrLiab"},{"id":"OtherEquity","category":"BalanceSheet","format":"UseMetricUnit","name":"Other Equity","shortName":"OthEquity"},{"id":"OtherNonCurrentAssets","category":"BalanceSheet","format":"UseMetricUnit","name":"Other Non-Current Assets","shortName":"OthNonCurrAssets"},{"id":"OtherNonCurrentLiabilities","category":"BalanceSheet","format":"UseMetricUnit","name":"Other Non-Current Liabilities","shortName":"OthNonCurrLiab"},{"id":"PpeNet","category":"BalanceSheet","format":"UseMetricUnit","name":"PPE Net","shortName":"PPENet"},{"id":"PrepaidExpenses","category":"BalanceSheet","format":"UseMetricUnit","name":"Prepaid Expenses","shortName":"PpdExp"},{"id":"Receivables","category":"BalanceSheet","format":"UseMetricUnit","name":"Receivables","shortName":"Receivables"},{"id":"RetainedEarnings","category":"BalanceSheet","format":"UseMetricUnit","name":"Retained Earnings","shortName":"RetEarnings"},{"id":"ShorttermDebt","category":"BalanceSheet","format":"UseMetricUnit","name":"Short-Term Debt","shortName":"ShortTermDebt"},{"id":"TotalAssets","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Assets","shortName":"TotAssets"},{"id":"TotalCurrentAssets","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Current Assets","shortName":"TotCurrAssets"},{"id":"TotalCurrentLiabilities","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Current Liabilities","shortName":"TotCurrLiab"},{"id":"TotalLiabilities","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Liabilities","shortName":"TotalLiab"},{"id":"TotalLiabilitiesAndEquity","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Liabilities & Equity","shortName":"TotLiab&Equity"},{"id":"TotalNonCurrentAssets","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Non-Current Assets","shortName":"TotNonCurrAssets"},{"id":"TotalNonCurrentLiabilities","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Non-Current Liabilities","shortName":"TotNonCurrLiabs"},{"id":"TotalShareholdersEquity","category":"BalanceSheet","format":"UseMetricUnit","name":"Total Shareholders Equity","shortName":"TotShareEquity"},{"id":"BasicEpsContOp","category":"IncomeStatement","format":"UseMetricUnit","name":"Basic EPS Continued Operations","shortName":"EPSContOps"},{"id":"BasicEpsTotalOp","category":"IncomeStatement","format":"UseMetricUnit","name":"Basic EPS Total Operations","shortName":"EPSTotOps"},{"id":"CostGoods","category":"IncomeStatement","format":"UseMetricUnit","name":"Cost of Goods","shortName":"COGS"},{"id":"DilutedEpsContOp","category":"IncomeStatement","format":"UseMetricUnit","name":"Diluted EPS Continued Operations","shortName":"DilutedEPSContOps"},{"id":"DilutedEpsTotalOp","category":"IncomeStatement","format":"UseMetricUnit","name":"Diluted EPS Total Operations","shortName":"DilutedEPSTotOps"},{"id":"Ebitda","category":"IncomeStatement","format":"UseMetricUnit","name":"EBITDA","shortName":"EBITDA"},{"id":"GrossProfit","category":"IncomeStatement","format":"UseMetricUnit","name":"Gross Profit","shortName":"GrProfit"},{"id":"IncomeTax","category":"IncomeStatement","format":"UseMetricUnit","name":"Income Tax","shortName":"IncomeTax"},{"id":"InterestExpense","category":"IncomeStatement","format":"UseMetricUnit","name":"Interest Expense","shortName":"IntExp"},{"id":"NetIncome","category":"IncomeStatement","format":"UseMetricUnit","name":"Net Income Less Expenses & Tax","shortName":"NetIncome"},{"id":"OperatingExpenses","category":"IncomeStatement","format":"UseMetricUnit","name":"Operating Expenses","shortName":"OpExpense"},{"id":"OperatingIncome","category":"IncomeStatement","format":"UseMetricUnit","name":"Operating Income","shortName":"OpIncome"},{"id":"OtherIncomeExpenses","category":"IncomeStatement","format":"UseMetricUnit","name":"Other Income","shortName":"OthInc"},{"id":"PreTaxIncome","category":"IncomeStatement","format":"UseMetricUnit","name":"Pretax Income","shortName":"PretaxInc"},{"id":"Sales","category":"IncomeStatement","format":"UseMetricUnit","name":"Sales","shortName":"Sales"}]')
    }, function(t, e, i) {
        "use strict";

        function n(t, e, i, s) {
            this.message = t, this.expected = e, this.found = i, this.location = s, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, n)
        }! function(t, e) {
            function i() {
                this.constructor = t
            }
            i.prototype = e.prototype, t.prototype = new i
        }(n, Error), n.buildMessage = function(t, e) {
            var i = {
                literal: function(t) {
                    return '"' + s(t.text) + '"'
                },
                class: function(t) {
                    var e, i = "";
                    for (e = 0; e < t.parts.length; e++) i += t.parts[e] instanceof Array ? r(t.parts[e][0]) + "-" + r(t.parts[e][1]) : r(t.parts[e]);
                    return "[" + (t.inverted ? "^" : "") + i + "]"
                },
                any: function(t) {
                    return "any character"
                },
                end: function(t) {
                    return "end of input"
                },
                other: function(t) {
                    return t.description
                }
            };

            function n(t) {
                return t.charCodeAt(0).toString(16).toUpperCase()
            }

            function s(t) {
                return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (function(t) {
                    return "\\x0" + n(t)
                })).replace(/[\x10-\x1F\x7F-\x9F]/g, (function(t) {
                    return "\\x" + n(t)
                }))
            }

            function r(t) {
                return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (function(t) {
                    return "\\x0" + n(t)
                })).replace(/[\x10-\x1F\x7F-\x9F]/g, (function(t) {
                    return "\\x" + n(t)
                }))
            }
            return "Expected " + function(t) {
                var e, n, s, r = new Array(t.length);
                for (e = 0; e < t.length; e++) r[e] = (s = t[e], i[s.type](s));
                if (r.sort(), r.length > 0) {
                    for (e = 1, n = 1; e < r.length; e++) r[e - 1] !== r[e] && (r[n] = r[e], n++);
                    r.length = n
                }
                switch (r.length) {
                    case 1:
                        return r[0];
                    case 2:
                        return r[0] + " or " + r[1];
                    default:
                        return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
                }
            }(t) + " but " + function(t) {
                return t ? '"' + s(t) + '"' : "end of input"
            }(e) + " found."
        }, t.exports = {
            SyntaxError: n,
            parse: function(t, e) {
                e = void 0 !== e ? e : {};
                var i, s = {},
                    r = {
                        expr: R
                    },
                    o = R,
                    a = O("+", !1),
                    l = O("-", !1),
                    c = function(t, e) {
                        return function(t, e) {
                            return t.reduce((function(t, e) {
                                var i = e.filter(t => "ws" !== t.op);
                                return {
                                    op: i[0],
                                    left: t,
                                    right: i[1]
                                }
                            }), e)
                        }(e, t)
                    },
                    u = O("*", !1),
                    h = O("/", !1),
                    d = O("^", !1),
                    p = O("(", !1),
                    f = O(")", !1),
                    m = /^[0-9]/,
                    g = D([
                        ["0", "9"]
                    ], !1, !1),
                    y = O(".", !1),
                    v = O("{", !1),
                    T = /^[A-Z0-9\^*$-.|:]/,
                    b = D([
                        ["A", "Z"],
                        ["0", "9"], "^", "*", ["$", "."], "|", ":"
                    ], !1, !1),
                    S = O("}", !1),
                    P = /^[ \t\r\n]/,
                    A = D([" ", "\t", "\r", "\n"], !1, !1),
                    w = 0,
                    C = 0,
                    x = [{
                        line: 1,
                        column: 1
                    }],
                    M = 0,
                    E = [];
                if ("startRule" in e) {
                    if (!(e.startRule in r)) throw new Error("Can't start parsing from rule \"" + e.startRule + '".');
                    o = r[e.startRule]
                }

                function O(t, e) {
                    return {
                        type: "literal",
                        text: t,
                        ignoreCase: e
                    }
                }

                function D(t, e, i) {
                    return {
                        type: "class",
                        parts: t,
                        inverted: e,
                        ignoreCase: i
                    }
                }

                function L(e) {
                    var i, n = x[e];
                    if (n) return n;
                    for (i = e - 1; !x[i];) i--;
                    for (n = {
                        line: (n = x[i]).line,
                        column: n.column
                    }; i < e;) 10 === t.charCodeAt(i) ? (n.line++, n.column = 1) : n.column++, i++;
                    return x[e] = n, n
                }

                function _(t, e) {
                    var i = L(t),
                        n = L(e);
                    return {
                        start: {
                            offset: t,
                            line: i.line,
                            column: i.column
                        },
                        end: {
                            offset: e,
                            line: n.line,
                            column: n.column
                        }
                    }
                }

                function I(t) {
                    w < M || (w > M && (M = w, E = []), E.push(t))
                }

                function N(t, e, i) {
                    return new n(n.buildMessage(t, e), t, e, i)
                }

                function R() {
                    return H()
                }

                function H() {
                    var e, i, n, r, o, u, h;
                    if (e = w, (i = k()) !== s) {
                        if (n = [], r = w, (o = B()) !== s ? (43 === t.charCodeAt(w) ? (u = "+", w++) : (u = s, I(a)), u === s && (45 === t.charCodeAt(w) ? (u = "-", w++) : (u = s, I(l))), u !== s && (h = k()) !== s ? r = o = [o, u, h] : (w = r, r = s)) : (w = r, r = s), r !== s)
                            for (; r !== s;) n.push(r), r = w, (o = B()) !== s ? (43 === t.charCodeAt(w) ? (u = "+", w++) : (u = s, I(a)), u === s && (45 === t.charCodeAt(w) ? (u = "-", w++) : (u = s, I(l))), u !== s && (h = k()) !== s ? r = o = [o, u, h] : (w = r, r = s)) : (w = r, r = s);
                        else n = s;
                        n !== s ? (C = e, e = i = c(i, n)) : (w = e, e = s)
                    } else w = e, e = s;
                    return e === s && (e = k()), e
                }

                function k() {
                    var e, i, n, r, o, a, l;
                    if (e = w, (i = V()) !== s) {
                        if (n = [], r = w, (o = B()) !== s ? (42 === t.charCodeAt(w) ? (a = "*", w++) : (a = s, I(u)), a === s && (47 === t.charCodeAt(w) ? (a = "/", w++) : (a = s, I(h))), a !== s && (l = V()) !== s ? r = o = [o, a, l] : (w = r, r = s)) : (w = r, r = s), r !== s)
                            for (; r !== s;) n.push(r), r = w, (o = B()) !== s ? (42 === t.charCodeAt(w) ? (a = "*", w++) : (a = s, I(u)), a === s && (47 === t.charCodeAt(w) ? (a = "/", w++) : (a = s, I(h))), a !== s && (l = V()) !== s ? r = o = [o, a, l] : (w = r, r = s)) : (w = r, r = s);
                        else n = s;
                        n !== s ? (C = e, e = i = c(i, n)) : (w = e, e = s)
                    } else w = e, e = s;
                    return e === s && (e = V()), e
                }

                function F() {
                    var e, i, n, r;
                    return e = w, (i = U()) !== s && B() !== s ? (94 === t.charCodeAt(w) ? (n = "^", w++) : (n = s, I(d)), n !== s && B() !== s && (r = U()) !== s ? (C = e, e = i = {
                        op: "^",
                        left: i,
                        right: r
                    }) : (w = e, e = s)) : (w = e, e = s), e === s && (e = U()), e
                }

                function U() {
                    var e, i, n, r;
                    return (e = function() {
                        var e, i, n, r, o, a, l, c;
                        if (e = w, (i = B()) !== s) {
                            if (n = w, r = [], m.test(t.charAt(w)) ? (o = t.charAt(w), w++) : (o = s, I(g)), o !== s)
                                for (; o !== s;) r.push(o), m.test(t.charAt(w)) ? (o = t.charAt(w), w++) : (o = s, I(g));
                            else r = s;
                            if (r !== s) {
                                if (o = w, 46 === t.charCodeAt(w) ? (a = ".", w++) : (a = s, I(y)), a === s && (a = null), a !== s) {
                                    for (l = [], m.test(t.charAt(w)) ? (c = t.charAt(w), w++) : (c = s, I(g)); c !== s;) l.push(c), m.test(t.charAt(w)) ? (c = t.charAt(w), w++) : (c = s, I(g));
                                    l !== s ? o = a = [a, l] : (w = o, o = s)
                                } else w = o, o = s;
                                o === s && (o = null), o !== s ? n = r = [r, o] : (w = n, n = s)
                            } else w = n, n = s;
                            n !== s ? (C = e, i = {
                                op: "num",
                                left: parseFloat(t.substring(C, w))
                            }, e = i) : (w = e, e = s)
                        } else w = e, e = s;
                        return e
                    }()) === s && (e = function() {
                        var e, i, n, r, o;
                        if (e = w, (i = B()) !== s)
                            if (123 === t.charCodeAt(w) ? (n = "{", w++) : (n = s, I(v)), n !== s) {
                                if (r = [], T.test(t.charAt(w)) ? (o = t.charAt(w), w++) : (o = s, I(b)), o !== s)
                                    for (; o !== s;) r.push(o), T.test(t.charAt(w)) ? (o = t.charAt(w), w++) : (o = s, I(b));
                                else r = s;
                                r !== s ? (125 === t.charCodeAt(w) ? (o = "}", w++) : (o = s, I(S)), o !== s ? (C = e, i = {
                                    op: "sym",
                                    left: r.join("")
                                }, e = i) : (w = e, e = s)) : (w = e, e = s)
                            } else w = e, e = s;
                        else w = e, e = s;
                        return e
                    }()) === s && (e = w, B() !== s ? (40 === t.charCodeAt(w) ? (i = "(", w++) : (i = s, I(p)), i !== s && B() !== s && (n = H()) !== s && B() !== s ? (41 === t.charCodeAt(w) ? (r = ")", w++) : (r = s, I(f)), r !== s ? (C = e, e = {
                        op: "grp",
                        left: n
                    }) : (w = e, e = s)) : (w = e, e = s)) : (w = e, e = s)), e
                }

                function V() {
                    var e, i, n;
                    return e = w, B() !== s ? (45 === t.charCodeAt(w) ? (i = "-", w++) : (i = s, I(l)), i !== s && B() !== s && (n = F()) !== s ? (C = e, e = {
                        op: i,
                        left: n
                    }) : (w = e, e = s)) : (w = e, e = s), e === s && (e = F()), e
                }

                function B() {
                    var e, i, n;
                    for (e = w, i = [], P.test(t.charAt(w)) ? (n = t.charAt(w), w++) : (n = s, I(A)); n !== s;) i.push(n), P.test(t.charAt(w)) ? (n = t.charAt(w), w++) : (n = s, I(A));
                    return i !== s && (C = e, i = {
                        op: "ws"
                    }), e = i
                }
                if ((i = o()) !== s && w === t.length) return i;
                throw i !== s && w < t.length && I({
                    type: "end"
                }), N(E, M < t.length ? t.charAt(M) : null, M < t.length ? _(M, M + 1) : _(M, M))
            }
        }
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            var i = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var i = -1;
                        return t.some((function(t, n) {
                            return t[0] === e && (i = n, !0)
                        })), i
                    }
                    return (function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var i = t(this.__entries__, e),
                                n = this.__entries__[i];
                            return n && n[1]
                        }, e.prototype.set = function(e, i) {
                            var n = t(this.__entries__, e);
                            ~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i])
                        }, e.prototype.delete = function(e) {
                            var i = this.__entries__,
                                n = t(i, e);
                            ~n && i.splice(n, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var i = 0, n = this.__entries__; i < n.length; i++) {
                                var s = n[i];
                                t.call(e, s[1], s[0])
                            }
                        }, e
                    }())
                }(),
                n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                s = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                r = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(s) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var o = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                a = "undefined" != typeof MutationObserver,
                l = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var i = !1,
                                n = !1,
                                s = 0;

                            function o() {
                                i && (i = !1, t()), n && l()
                            }

                            function a() {
                                r(o)
                            }

                            function l() {
                                var t = Date.now();
                                if (i) {
                                    if (t - s < 2) return;
                                    n = !0
                                } else i = !0, n = !1, setTimeout(a, e);
                                s = t
                            }
                            return l
                        }(this.refresh.bind(this), 20)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            i = e.indexOf(t);
                        ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), a ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            i = void 0 === e ? "" : e;
                        o.some((function(t) {
                            return !!~i.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                c = function(t, e) {
                    for (var i = 0, n = Object.keys(e); i < n.length; i++) {
                        var s = n[i];
                        Object.defineProperty(t, s, {
                            value: e[s],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                u = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || s
                },
                h = y(0, 0, 0, 0);

            function d(t) {
                return parseFloat(t) || 0
            }

            function p(t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                return e.reduce((function(e, i) {
                    return e + d(t["border-" + i + "-width"])
                }), 0)
            }

            function f(t) {
                var e = t.clientWidth,
                    i = t.clientHeight;
                if (!e && !i) return h;
                var n = u(t).getComputedStyle(t),
                    s = function(t) {
                        for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                            var s = n[i],
                                r = t["padding-" + s];
                            e[s] = d(r)
                        }
                        return e
                    }(n),
                    r = s.left + s.right,
                    o = s.top + s.bottom,
                    a = d(n.width),
                    l = d(n.height);
                if ("border-box" === n.boxSizing && (Math.round(a + r) !== e && (a -= p(n, "left", "right") + r), Math.round(l + o) !== i && (l -= p(n, "top", "bottom") + o)), ! function(t) {
                    return t === u(t).document.documentElement
                }(t)) {
                    var c = Math.round(a + r) - e,
                        f = Math.round(l + o) - i;
                    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(f) && (l -= f)
                }
                return y(s.left, s.top, a, l)
            }
            var m = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof u(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof u(t).SVGElement && "function" == typeof t.getBBox
            };

            function g(t) {
                return n ? m(t) ? function(t) {
                    var e = t.getBBox();
                    return y(0, 0, e.width, e.height)
                }(t) : f(t) : h
            }

            function y(t, e, i, n) {
                return {
                    x: t,
                    y: e,
                    width: i,
                    height: n
                }
            }
            var v = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = y(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = g(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                T = function(t, e) {
                    var i, n, s, r, o, a, l, u = (n = (i = e).x, s = i.y, r = i.width, o = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), c(l, {
                        x: n,
                        y: s,
                        width: r,
                        height: o,
                        top: s,
                        right: n + r,
                        bottom: o + s,
                        left: n
                    }), l);
                    c(this, {
                        target: t,
                        contentRect: u
                    })
                },
                b = function() {
                    function t(t, e, n) {
                        if (this.activeObservations_ = [], this.observations_ = new i, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new v(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new T(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                S = "undefined" != typeof WeakMap ? new WeakMap : new i,
                P = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var i = l.getInstance(),
                        n = new b(e, i, this);
                    S.set(this, n)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                P.prototype[t] = function() {
                    var e;
                    return (e = S.get(this))[t].apply(e, arguments)
                }
            }));
            var A = void 0 !== s.ResizeObserver ? s.ResizeObserver : P;
            e.a = A
        }).call(this, i(34))
    }, function(t) {
        t.exports = JSON.parse('{"major":2,"minor":59,"patch":0,"prerelease":false}')
    }, , function(t, e, i) {
        "use strict";
        var n;
        ! function() {
            var s = 1,
                r = 2,
                o = 3,
                a = 4,
                l = 5,
                c = 6,
                u = 7,
                h = 8,
                d = 9,
                p = 10,
                f = 11,
                m = function() {
                    var t, e, i, n, m = 1,
                        g = 2,
                        y = 3,
                        v = 4,
                        T = 5,
                        b = 6,
                        S = 7,
                        P = 'Unexpected token "%0"',
                        A = "Unexpected end of path";

                    function w() {
                        for (var t, e = C(); N("|");) B(), (t || (t = [e])).push(C());
                        return t ? {
                            type: h,
                            args: t
                        } : e
                    }

                    function C() {
                        return N("(") ? x() : E()
                    }

                    function x() {
                        F("(");
                        var t = w();
                        F(")");
                        for (var e, i = []; e = M();) i.push(e);
                        return i.length ? t.type === s ? (t.parts = t.parts.concat(i), t) : (i.unshift(t), {
                            type: s,
                            parts: i
                        }) : t
                    }

                    function M() {
                        return N("[") ? function() {
                            F("[");
                            var t = function() {
                                if (N(":")) return B(), {
                                    type: p,
                                    toIdx: I()
                                };
                                var t = I();
                                if (N(":")) return B(), N("]") ? {
                                    type: p,
                                    fromIdx: t
                                } : {
                                    type: p,
                                    fromIdx: t,
                                    toIdx: I()
                                };
                                return {
                                    type: p,
                                    idx: t
                                }
                            }();
                            return F("]"), {
                                type: a,
                                arg: t
                            }
                        }() : N("{") ? function() {
                            F("{");
                            var t = O();
                            return F("}"), {
                                type: o,
                                arg: t
                            }
                        }() : N("(") ? x() : void 0
                    }

                    function E() {
                        R() || z(B());
                        var t, e = !1;
                        N("^") ? (B(), e = !0) : k() && (t = B().val.substr(1));
                        for (var i, n = []; i = H() ? function() {
                            var t, e = B().val,
                                i = U();
                            (N("*") || i.type === m || i.type === y) && (t = B().val);
                            return {
                                type: r,
                                selector: e,
                                prop: t
                            }
                        }() : M();) n.push(i);
                        return {
                            type: s,
                            fromRoot: e,
                            subst: t,
                            parts: n
                        }
                    }

                    function O() {
                        for (var t, e = D(); N("||");) B(), (t || (t = [e])).push(D());
                        return t ? {
                            type: l,
                            op: "||",
                            args: t
                        } : e
                    }

                    function D() {
                        for (var t, e = L(); N("&&");) B(), (t || (t = [e])).push(L());
                        return t ? {
                            type: l,
                            op: "&&",
                            args: t
                        } : e
                    }

                    function L() {
                        for (var t = function t() {
                            var e = function() {
                                var t = _();
                                for (; N("+") || N("-");) t = {
                                    type: u,
                                    op: B().val,
                                    args: [t, _()]
                                };
                                return t
                            }();
                            for (; N("<") || N(">") || N("<=") || N(">=");) e = {
                                type: c,
                                op: B().val,
                                args: [e, t()]
                            };
                            return e
                        }(); N("==") || N("!=") || N("===") || N("!==") || N("^==") || N("==^") || N("^=") || N("=^") || N("$==") || N("==$") || N("$=") || N("=$") || N("*==") || N("==*") || N("*=") || N("=*");) t = {
                            type: c,
                            op: B().val,
                            args: [t, L()]
                        };
                        return t
                    }

                    function _() {
                        for (var t = I(); N("*") || N("/") || N("%");) t = {
                            type: u,
                            op: B().val,
                            args: [t, _()]
                        };
                        return t
                    }

                    function I() {
                        return N("!") || N("-") ? {
                            type: d,
                            op: B().val,
                            arg: I()
                        } : function() {
                            var t = U().type;
                            if (t === y || t === g || t === v || t === T) return {
                                type: f,
                                val: B().val
                            };
                            if (R()) return E();
                            if (N("(")) return function() {
                                F("(");
                                var t = O();
                                return F(")"), t
                            }();
                            return z(B())
                        }()
                    }

                    function N(t) {
                        var e = U();
                        return e.type === b && e.val === t
                    }

                    function R() {
                        return H() || k() || N("^")
                    }

                    function H() {
                        var t = U();
                        if (t.type === b) {
                            var e = t.val;
                            return "." === e || ".." === e
                        }
                        return !1
                    }

                    function k() {
                        var t = U();
                        return t.type === m && "$" === t.val[0]
                    }

                    function F(t) {
                        var e = B();
                        e.type === b && e.val === t || z(e)
                    }

                    function U() {
                        if (null !== i) return i;
                        var t = e;
                        return i = V(), e = t, i
                    }

                    function V() {
                        for (; i = t[e], " \r\n\t".indexOf(i) > -1;) ++e;
                        var i;
                        if (e >= n) return {
                            type: S,
                            range: [e, e]
                        };
                        var s = function() {
                            var i = e,
                                n = t[e],
                                s = t[e + 1];
                            if ("." === n) {
                                if (W(s)) return;
                                return "." === t[++e] ? {
                                    type: b,
                                    val: "..",
                                    range: [i, ++e]
                                } : {
                                    type: b,
                                    val: ".",
                                    range: [i, e]
                                }
                            }
                            if ("=" === s) {
                                var r = t[e + 2];
                                if ("=" === r) {
                                    if ("=!^$*".indexOf(n) >= 0) return {
                                        type: b,
                                        val: n + s + r,
                                        range: [i, e += 3]
                                    }
                                } else if ("^$*".indexOf(r) >= 0) {
                                    if ("=" === n) return {
                                        type: b,
                                        val: n + s + r,
                                        range: [i, e += 3]
                                    }
                                } else if ("=!^$*><".indexOf(n) >= 0) return {
                                    type: b,
                                    val: n + s,
                                    range: [i, e += 2]
                                }
                            } else if ("=" === n && "^$*".indexOf(s) >= 0) return {
                                type: b,
                                val: n + s,
                                range: [i, e += 2]
                            };
                            if (n === s && ("|" === n || "&" === n)) return {
                                type: b,
                                val: n + s,
                                range: [i, e += 2]
                            };
                            if (":{}()[]^+-*/%!><|".indexOf(n) >= 0) return {
                                type: b,
                                val: n,
                                range: [i, ++e]
                            }
                        }();
                        if (s || (s = function() {
                            var i = t[e];
                            if (!j(i)) return;
                            var s = e,
                                r = i;
                            for (; ++e < n && G(i = t[e]);) r += i;
                            switch (r) {
                                case "true":
                                case "false":
                                    return {
                                        type: v, val: "true" === r, range: [s, e]
                                    };
                                case "null":
                                    return {
                                        type: T, val: null, range: [s, e]
                                    };
                                default:
                                    return {
                                        type: m, val: r, range: [s, e]
                                    }
                            }
                        }()) || (s = function() {
                            if ('"' !== t[e] && "'" !== t[e]) return;
                            var i, s = t[e],
                                r = ++e,
                                o = "",
                                a = !1;
                            for (; e < n;) {
                                if ("\\" === (i = t[e++])) i = t[e++];
                                else if (('"' === i || "'" === i) && i === s) {
                                    a = !0;
                                    break
                                }
                                o += i
                            }
                            if (a) return {
                                type: y,
                                val: o,
                                range: [r, e]
                            }
                        }()) || (s = function() {
                            var i = e,
                                s = t[e],
                                r = "." === s;
                            if (r || W(s)) {
                                for (var o = s; ++e < n;) {
                                    if ("." === (s = t[e])) {
                                        if (r) return;
                                        r = !0
                                    } else if (!W(s)) break;
                                    o += s
                                }
                                return {
                                    type: g,
                                    val: r ? parseFloat(o) : parseInt(o, 10),
                                    range: [i, e]
                                }
                            }
                        }())) return s;
                        s = {
                            range: [e, e]
                        }, e >= n ? s.type = S : s.val = t[e], z(s)
                    }

                    function B() {
                        var t;
                        return i ? (e = i.range[1], t = i, i = null, t) : V()
                    }

                    function W(t) {
                        return "0123456789".indexOf(t) >= 0
                    }

                    function j(t) {
                        return "$" === t || "@" === t || "_" === t || t >= "a" && t <= "z" || t >= "A" && t <= "Z"
                    }

                    function G(t) {
                        return j(t) || t >= "0" && t <= "9"
                    }

                    function z(t) {
                        t.type === S && Y(t, A), Y(t, P, t.val)
                    }

                    function Y(t, e) {
                        var i = Array.prototype.slice.call(arguments, 2),
                            n = e.replace(/%(\d)/g, (function(t, e) {
                                return i[e] || ""
                            })),
                            s = new Error(n);
                        throw s.column = t.range[0], s
                    }
                    return function(s) {
                        t = s.split(""), e = 0, i = null, n = t.length;
                        var r = w(),
                            o = B();
                        return o.type !== S && z(o), r
                    }
                }(),
                g = function() {
                    var t, e, i, n;

                    function p() {
                        if (n.length) return n.shift();
                        var t = "v" + ++i;
                        return e.push(t), t
                    }

                    function m() {
                        for (var t = arguments, e = t.length; e--;) n.push(t[e])
                    }

                    function g(e, i, n) {
                        if (e.prop) {
                            var s = A(e.prop),
                                r = p(),
                                o = p(),
                                a = p(),
                                l = p(),
                                c = p(),
                                u = p(),
                                h = p();
                            t.push(r, "= [];", o, "= 0;", a, "=", n, ".length;", h, "= [];", "while(", o, "<", a, ") {", l, "=", n, "[", o, "++];", "if(", l, "!= null) {"), "*" === e.prop ? (t.push("if(typeof ", l, '=== "object") {', "if(isArr(", l, ")) {", r, "=", r, ".concat(", l, ");", "}", "else {", "for(", c, " in ", l, ") {", "if(", l, ".hasOwnProperty(", c, ")) {", u, "=", l, "[", c, "];"), w(r, u), t.push("}", "}", "}", "}")) : (t.push(u, "=", l, "[", s, "];"), w(r, u, h, a)), t.push("}", "}", i, "=", a, "> 1 &&", h, ".length?", h, ".length > 1?", "concat.apply(", r, ",", h, ") :", r, ".concat(", h, "[0]) :", r, ";"), m(r, o, a, l, c, u, h)
                        }
                    }

                    function y(e, i, n) {
                        var s = e.prop,
                            r = p(),
                            o = p(),
                            a = p(),
                            l = p(),
                            c = p(),
                            u = p(),
                            h = p(),
                            d = p();
                        t.push(r, "=", n, ".slice(),", d, "= [];", "while(", r, ".length) {", o, "=", r, ".shift();"), s ? t.push("if(typeof ", o, '=== "object" &&', o, ") {") : t.push("if(typeof ", o, "!= null) {"), t.push(a, "= [];", "if(isArr(", o, ")) {", l, "= 0,", h, "=", o, ".length;", "while(", l, "<", h, ") {", u, "=", o, "[", l, "++];"), s && t.push("if(typeof ", u, '=== "object") {'), w(a, u), s && t.push("}"), t.push("}", "}", "else {"), s ? "*" !== s && (t.push(u, "=", o, '["' + s + '"];'), w(d, u)) : (w(d, o), t.push("if(typeof ", o, '=== "object") {')), t.push("for(", c, " in ", o, ") {", "if(", o, ".hasOwnProperty(", c, ")) {", u, "=", o, "[", c, "];"), w(a, u), "*" === s && w(d, u), t.push("}", "}"), s || t.push("}"), t.push("}", a, ".length &&", r, ".unshift.apply(", r, ",", a, ");", "}", "}", i, "=", d, ";"), m(r, o, a, l, c, u, h, d)
                    }

                    function v(e, i, n) {
                        var s = p(),
                            r = p(),
                            o = p(),
                            a = p(),
                            l = p();
                        t.push(s, "= [];", r, "= 0;", o, "=", n, ".length;", "while(", r, "<", o, ") {", l, "=", n, "[", r, "++];"), b(e.arg, a, l), t.push(x(e.arg, a), "&&", s, ".push(", l, ");", "}", i, "=", s, ";"), m(s, r, o, l, a)
                    }

                    function T(e, i, n) {
                        var s, r, o = e.arg;
                        if (o.idx) {
                            var a = p();
                            return b(o.idx, a, n), t.push(a, "< 0 && (", a, "=", n, ".length +", a, ");", i, "=", n, "[", a, "] == null? [] : [", n, "[", a, "]];"), m(a), !1
                        }
                        o.fromIdx ? o.toIdx ? (b(o.fromIdx, s = p(), n), b(o.toIdx, r = p(), n), t.push(i, "=", n, ".slice(", s, ",", r, ");"), m(s, r)) : (b(o.fromIdx, s = p(), n), t.push(i, "=", n, ".slice(", s, ");"), m(s)) : (b(o.toIdx, r = p(), n), t.push(i, "=", n, ".slice(0,", r, ");"), m(r))
                    }

                    function b(e, i, n) {
                        switch (e.type) {
                            case s:
                                ! function(e, i, n) {
                                    var s = e.parts,
                                        l = 0,
                                        c = s.length;
                                    for (t.push(i, "=", e.fromRoot ? "data" : e.subst ? "subst." + e.subst : n, ";", "isArr(" + i + ") || (" + i + " = [" + i + "]);"); l < c;) {
                                        var u = s[l++];
                                        switch (u.type) {
                                            case r:
                                                ".." === u.selector ? y(u, i, i) : g(u, i, i);
                                                break;
                                            case o:
                                                v(u, i, i);
                                                break;
                                            case a:
                                                T(u, i, i);
                                                break;
                                            case h:
                                                P(u, i, i)
                                        }
                                    }
                                }(e, i, n);
                                break;
                            case h:
                                P(e, i, n);
                                break;
                            case c:
                                ! function(e, i, n) {
                                    var r = p(),
                                        o = p(),
                                        a = p(),
                                        l = p(),
                                        c = p(),
                                        u = p(),
                                        h = p(),
                                        d = p(),
                                        g = e.args[0],
                                        y = e.args[1];
                                    t.push(i, "= false;"), b(g, r, n), b(y, o, n);
                                    var v = g.type === s,
                                        T = y.type === f;
                                    t.push(a, "="), v ? t.push("true;") : t.push("isArr(", r, ");"), t.push(l, "="), T ? t.push("false;") : t.push("isArr(", o, ");"), t.push("if("), v || t.push(a, "&&"), t.push(r, ".length === 1) {", r, "=", r, "[0];", a, "= false;", "}"), T || t.push("if(", l, "&&", o, ".length === 1) {", o, "=", o, "[0];", l, "= false;", "}"), t.push(c, "= 0;", "if(", a, ") {", h, "=", r, ".length;"), T || (t.push("if(", l, ") {", d, "=", o, ".length;", "while(", c, "<", h, "&& !", i, ") {", u, "= 0;", "while(", u, "<", d, ") {"), S(e.op, [r, "[", c, "]"].join(""), [o, "[", u, "]"].join("")), t.push(i, "= true;", "break;", "}", "++", u, ";", "}", "++", c, ";", "}", "}", "else {"));
                                    t.push("while(", c, "<", h, ") {"), S(e.op, [r, "[", c, "]"].join(""), o), t.push(i, "= true;", "break;", "}", "++", c, ";", "}"), T || t.push("}"), t.push("}"), T || (t.push("else if(", l, ") {", d, "=", o, ".length;", "while(", c, "<", d, ") {"), S(e.op, r, [o, "[", c, "]"].join("")), t.push(i, "= true;", "break;", "}", "++", c, ";", "}", "}"));
                                    t.push("else {", i, "=", N[e.op](r, o), ";", "}"), m(r, o, a, l, c, u, h, d)
                                }(e, i, n);
                                break;
                            case u:
                                ! function(e, i, n) {
                                    var s = p(),
                                        r = p(),
                                        o = e.args;
                                    b(o[0], s, n), b(o[1], r, n), t.push(i, "=", N[e.op](M(o[0], s), M(o[1], r)), ";"), m(s, r)
                                }(e, i, n);
                                break;
                            case l:
                                ! function(e, i, n) {
                                    var s, r = [],
                                        o = e.args,
                                        a = o.length,
                                        l = 0;
                                    switch (t.push(i, "= false;"), e.op) {
                                        case "&&":
                                            for (; l < a;) r.push(s = p()), b(o[l], s, n), t.push("if(", x(o[l++], s), ") {");
                                            t.push(i, "= true;");
                                            break;
                                        case "||":
                                            for (; l < a;) r.push(s = p()), b(o[l], s, n), t.push("if(", x(o[l], s), ") {", i, "= true;", "}"), 1 + l++ < a && t.push("else {");
                                            --a
                                    }
                                    for (; a--;) t.push("}");
                                    m.apply(null, r)
                                }(e, i, n);
                                break;
                            case d:
                                ! function(e, i, n) {
                                    var s = p(),
                                        r = e.arg;
                                    switch (b(r, s, n), e.op) {
                                        case "!":
                                            t.push(i, "= !", x(r, s) + ";");
                                            break;
                                        case "-":
                                            t.push(i, "= -", M(r, s) + ";")
                                    }
                                    m(s)
                                }(e, i, n);
                                break;
                            case f:
                                t.push(i, "="), w = e.val, t.push("string" == typeof w ? A(w) : null === w ? "null" : w), t.push(";")
                        }
                        var w
                    }

                    function S(e, i, n) {
                        t.push("if(", N[e](i, n), ") {")
                    }

                    function P(e, i, n) {
                        for (var s = [], r = e.args, o = r.length, a = 0; a < o;) s.push(p()), b(r[a], s[a++], n);
                        t.push(i, "= concat.call(", s.join(","), ");"), m.apply(null, s)
                    }

                    function A(t) {
                        return "'" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"
                    }

                    function w(e, i, n, s) {
                        t.push("if(typeof ", i, '!== "undefined") {', "if(isArr(", i, ")) {"), n && (t.push(s, "> 1?"), C(n, i), t.push(":")), t.push(e, "=", e, ".length?", e, ".concat(", i, ") :", i, ".slice()", ";", "}", "else {"), n && t.push("if(", n, ".length) {", e, "= concat.apply(", e, ",", n, ");", n, "= [];", "}"), C(e, i), t.push(";", "}", "}")
                    }

                    function C(e, i) {
                        t.push(e, ".length?", e, ".push(", i, ") :", e, "[0] =", i)
                    }

                    function x(t, e) {
                        switch (t.type) {
                            case l:
                                return e;
                            case f:
                                return "!!" + e;
                            case s:
                                return e + ".length > 0";
                            default:
                                return ["(typeof ", e, '=== "boolean"?', e, ":", "isArr(", e, ")?", e, ".length > 0 : !!", e, ")"].join("")
                        }
                    }

                    function M(t, e) {
                        switch (t.type) {
                            case f:
                                return e;
                            case s:
                                return e + "[0]";
                            default:
                                return ["(isArr(", e, ")?", e, "[0] : ", e, ")"].join("")
                        }
                    }

                    function E(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string" &&', t, ".indexOf(", e, ") === 0"].join("")
                    }

                    function O(t, e) {
                        return [t, "!= null &&", e, "!= null &&", t, ".toString().toLowerCase().indexOf(", e, ".toString().toLowerCase()) === 0"].join("")
                    }

                    function D(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string" &&', t, ".length >=", e, ".length &&", t, ".lastIndexOf(", e, ") ===", t, ".length -", e, ".length"].join("")
                    }

                    function L(t, e) {
                        return [t, "!= null &&", e, "!= null &&", "(", t, "=", t, ".toString()).length >=", "(", e, "=", e, ".toString()).length &&", "(", t, ".toLowerCase()).lastIndexOf(", "(", e, ".toLowerCase())) ===", t, ".length -", e, ".length"].join("")
                    }

                    function _(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string" &&', t, ".indexOf(", e, ") > -1"].join("")
                    }

                    function I(t, e) {
                        return [t, "!= null && ", e, "!= null &&", t, ".toString().toLowerCase().indexOf(", e, ".toString().toLowerCase()) > -1"].join("")
                    }
                    var N = {
                        "===": function(t, e) {
                            return t + "===" + e
                        },
                        "==": function(t, e) {
                            return ["typeof ", t, '=== "string" && typeof ', e, '=== "string"?', t, ".toLowerCase() ===", e, ".toLowerCase() :" + t, "==", e].join("")
                        },
                        ">=": function(t, e) {
                            return t + ">=" + e
                        },
                        ">": function(t, e) {
                            return t + ">" + e
                        },
                        "<=": function(t, e) {
                            return t + "<=" + e
                        },
                        "<": function(t, e) {
                            return t + "<" + e
                        },
                        "!==": function(t, e) {
                            return t + "!==" + e
                        },
                        "!=": function(t, e) {
                            return t + "!=" + e
                        },
                        "^==": E,
                        "==^": function(t, e) {
                            return E(e, t)
                        },
                        "^=": O,
                        "=^": function(t, e) {
                            return O(e, t)
                        },
                        "$==": D,
                        "==$": function(t, e) {
                            return D(e, t)
                        },
                        "$=": L,
                        "=$": function(t, e) {
                            return L(e, t)
                        },
                        "*==": _,
                        "==*": function(t, e) {
                            return _(e, t)
                        },
                        "=*": function(t, e) {
                            return I(e, t)
                        },
                        "*=": I,
                        "+": function(t, e) {
                            return t + "+" + e
                        },
                        "-": function(t, e) {
                            return t + "-" + e
                        },
                        "*": function(t, e) {
                            return t + "*" + e
                        },
                        "/": function(t, e) {
                            return t + "/" + e
                        },
                        "%": function(t, e) {
                            return t + "%" + e
                        }
                    };
                    return function(r) {
                        if (t = [], e = ["res"], i = 0, n = [], b(r, "res", "data"), t.unshift("var ", Array.isArray ? "isArr = Array.isArray" : 'toStr = Object.prototype.toString, isArr = function(o) { return toStr.call(o) === "[object Array]"; }', ", concat = Array.prototype.concat", ",", e.join(","), ";"), r.type === s) {
                            var o = r.parts[r.parts.length - 1];
                            o && o.type === a && "idx" in o.arg && t.push("res = res[0];")
                        }
                        return t.push("return res;"), t.join("")
                    }
                }();

            function y(t) {
                return Function("data,subst", g(m(t)))
            }
            var v = {},
                T = [],
                b = {
                    cacheSize: 100
                },
                S = {
                    cacheSize: function(t, e) {
                        if (e < t && T.length > e)
                            for (var i = T.splice(0, T.length - e), n = i.length; n--;) delete v[i[n]]
                    }
                },
                P = function(t, e, i) {
                    return v[t] || (v[t] = y(t), T.push(t) > b.cacheSize && delete v[T.shift()]), v[t](e, i || {})
                };
            P.version = "0.3.4", P.params = function(t) {
                if (!arguments.length) return b;
                for (var e in t) t.hasOwnProperty(e) && (S[e] && S[e](b[e], t[e]), b[e] = t[e])
            }, P.compile = y, P.apply = P, "object" == typeof t.exports ? t.exports = P : "object" == typeof modules ? modules.define("jspath", (function(t) {
                t(P)
            })) : void 0 === (n = function(t, e, i) {
                i.exports = P
            }.call(e, i, e, t)) || (t.exports = n)
        }()
    }, function(t, e, i) {
        var n;
        (function() {
            var s = function(t) {
                    if (null === t || "object" != typeof t) return t;
                    var e;
                    if (t instanceof Date) return (e = new Date).setTime(t.getTime()), e;
                    if (t instanceof RegExp) return e = new RegExp(t);
                    if (t instanceof Array) {
                        e = [];
                        for (var i = 0, n = t.length; i < n; i++) e[i] = s(t[i]);
                        return e
                    }
                    if (t instanceof Object) {
                        for (var r in e = {}, t) t.hasOwnProperty(r) && (e[r] = s(t[r]));
                        return e
                    }
                    throw new Error("Unable to clone object!")
                },
                r = function(t) {
                    for (var e = [s(t[0])], i = e[0].key, n = e[0].object, r = 1, o = t.length; r < o; r++) n = n[i], i = t[r].key, e.push({
                        object: n,
                        key: i
                    });
                    return e
                },
                o = function(t, e) {
                    var i = t.length - 1,
                        n = t[i].key;
                    e[i].object[n] = t[i].object[n]
                },
                a = {
                    type: !0,
                    not: !0,
                    anyOf: !0,
                    allOf: !0,
                    oneOf: !0,
                    $ref: !0,
                    $schema: !0,
                    id: !0,
                    exclusiveMaximum: !0,
                    exclusiveMininum: !0,
                    properties: !0,
                    patternProperties: !0,
                    additionalProperties: !0,
                    items: !0,
                    additionalItems: !0,
                    required: !0,
                    default: !0,
                    title: !0,
                    description: !0,
                    definitions: !0,
                    dependencies: !0
                },
                l = {
                    null: function(t) {
                        return null === t
                    },
                    string: function(t) {
                        return "string" == typeof t
                    },
                    boolean: function(t) {
                        return "boolean" == typeof t
                    },
                    number: function(t) {
                        return "number" == typeof t && t == t
                    },
                    integer: function(t) {
                        return "number" == typeof t && t % 1 == 0
                    },
                    object: function(t) {
                        return t && "object" == typeof t && !Array.isArray(t)
                    },
                    array: function(t) {
                        return Array.isArray(t)
                    },
                    date: function(t) {
                        return t instanceof Date
                    }
                },
                c = {
                    alpha: function(t) {
                        return /^[a-zA-Z]+$/.test(t)
                    },
                    alphanumeric: function(t) {
                        return /^[a-zA-Z0-9]+$/.test(t)
                    },
                    identifier: function(t) {
                        return /^[-_a-zA-Z0-9]+$/.test(t)
                    },
                    hexadecimal: function(t) {
                        return /^[a-fA-F0-9]+$/.test(t)
                    },
                    numeric: function(t) {
                        return /^[0-9]+$/.test(t)
                    },
                    "date-time": function(t) {
                        return !isNaN(Date.parse(t)) && -1 === t.indexOf("/")
                    },
                    uppercase: function(t) {
                        return t === t.toUpperCase()
                    },
                    lowercase: function(t) {
                        return t === t.toLowerCase()
                    },
                    hostname: function(t) {
                        return t.length < 256 && /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$/.test(t)
                    },
                    uri: function(t) {
                        return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(t)
                    },
                    email: function(t) {
                        return /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test(t)
                    },
                    ipv4: function(t) {
                        if (/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/.test(t) && t.split(".").sort()[3] <= 255) return !0;
                        return !1
                    },
                    ipv6: function(t) {
                        return /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/.test(t)
                    }
                },
                u = {
                    readOnly: function(t, e) {
                        return !1
                    },
                    minimum: function(t, e, i) {
                        return !(t < e || i.exclusiveMinimum && t <= e)
                    },
                    maximum: function(t, e, i) {
                        return !(t > e || i.exclusiveMaximum && t >= e)
                    },
                    multipleOf: function(t, e) {
                        return t / e % 1 == 0 || "number" != typeof t
                    },
                    pattern: function(t, e) {
                        return "string" != typeof t || ("string" == typeof e ? i = e : (i = e[0], n = e[1]), new RegExp(i, n).test(t));
                        var i, n
                    },
                    minLength: function(t, e) {
                        return t.length >= e || "string" != typeof t
                    },
                    maxLength: function(t, e) {
                        return t.length <= e || "string" != typeof t
                    },
                    minItems: function(t, e) {
                        return t.length >= e || !Array.isArray(t)
                    },
                    maxItems: function(t, e) {
                        return t.length <= e || !Array.isArray(t)
                    },
                    uniqueItems: function(t, e) {
                        for (var i, n = {}, s = 0, r = t.length; s < r; s++) {
                            if (i = JSON.stringify(t[s]), n.hasOwnProperty(i)) return !1;
                            n[i] = !0
                        }
                        return !0
                    },
                    minProperties: function(t, e) {
                        if ("object" != typeof t) return !0;
                        var i = 0;
                        for (var n in t) t.hasOwnProperty(n) && (i += 1);
                        return i >= e
                    },
                    maxProperties: function(t, e) {
                        if ("object" != typeof t) return !0;
                        var i = 0;
                        for (var n in t) t.hasOwnProperty(n) && (i += 1);
                        return i <= e
                    },
                    constant: function(t, e) {
                        return JSON.stringify(t) == JSON.stringify(e)
                    },
                    enum: function(t, e) {
                        var i, n, s;
                        if ("object" == typeof t) {
                            for (s = JSON.stringify(t), i = 0, n = e.length; i < n; i++)
                                if (s === JSON.stringify(e[i])) return !0
                        } else
                            for (i = 0, n = e.length; i < n; i++)
                                if (t === e[i]) return !0;
                        return !1
                    }
                },
                h = function(t) {
                    return -1 === t.indexOf("://") ? t : t.split("#")[0]
                },
                d = function(t, e, i) {
                    var n, s, r, o;
                    if (-1 === (r = i.indexOf("#"))) return t.schema.hasOwnProperty(i) ? [t.schema[i]] : null;
                    if (r > 0)
                        if (o = i.substr(0, r), i = i.substr(r + 1), t.schema.hasOwnProperty(o)) e = [t.schema[o]];
                        else {
                            if (!e || e[0].id !== o) return null;
                            e = [e[0]]
                        }
                    else {
                        if (!e) return null;
                        i = i.substr(1)
                    }
                    if ("" === i) return [e[0]];
                    if ("/" === i.charAt(0)) {
                        for (i = i.substr(1), n = e[0], s = i.split("/"); s.length > 0;) {
                            if (!n.hasOwnProperty(s[0])) return null;
                            n = n[s[0]], e.push(n), s.shift()
                        }
                        return e
                    }
                    return null
                },
                p = function(t, e) {
                    var i, n, s, r, o = t.length - 1,
                        a = /^(\d+)/.exec(e);
                    if (a) {
                        if (e = e.substr(a[0].length), (s = parseInt(a[1], 10)) < 0 || s > o) return;
                        if (r = t[o - s], "#" === e) return r.key
                    } else r = t[0];
                    if (n = r.object[r.key], "" === e) return n;
                    if ("/" === e.charAt(0)) {
                        for (i = (e = e.substr(1)).split("/"); i.length > 0;) {
                            if (i[0] = i[0].replace(/~1/g, "/").replace(/~0/g, "~"), !n.hasOwnProperty(i[0])) return;
                            n = n[i[0]], i.shift()
                        }
                        return n
                    }
                },
                f = function(t, e, i, n) {
                    var s, l, c, u, h, m, g, y, v, T, b, S, P, A = !1,
                        w = {},
                        C = e[e.length - 1],
                        x = i.length - 1,
                        M = i[x].object,
                        E = i[x].key,
                        O = M[E];
                    if (C.hasOwnProperty("$ref")) return (e = d(t, e, C.$ref)) ? f(t, e, i, n) : {
                        $ref: C.$ref
                    };
                    if (C.hasOwnProperty("type"))
                        if ("string" == typeof C.type) {
                            if (n.useCoerce && t.coerceType.hasOwnProperty(C.type) && (O = M[E] = t.coerceType[C.type](O)), !t.fieldType[C.type](O)) return {
                                type: C.type
                            }
                        } else {
                            for (A = !0, s = 0, l = C.type.length; s < l && A; s++) t.fieldType[C.type[s]](O) && (A = !1);
                            if (A) return {
                                type: C.type
                            }
                        } if (C.hasOwnProperty("allOf"))
                        for (s = 0, l = C.allOf.length; s < l; s++)
                            if (y = f(t, e.concat(C.allOf[s]), i, n)) return y;
                    if (n.useCoerce || n.useDefault || n.removeAdditional) {
                        if (C.hasOwnProperty("oneOf")) {
                            for (P = 1 / 0, s = 0, l = C.oneOf.length, c = 0; s < l; s++)
                                if (b = r(i), y = f(t, e.concat(C.oneOf[s]), b, n))(S = y.schema ? Object.keys(y.schema).length : 1) < P && (P = S, w = y);
                                else {
                                    if ((c += 1) > 1) break;
                                    o(b, i)
                                } if (c > 1) return {
                                oneOf: !0
                            };
                            if (c < 1) return w;
                            w = {}
                        }
                        if (C.hasOwnProperty("anyOf")) {
                            for (w = null, P = 1 / 0, s = 0, l = C.anyOf.length; s < l; s++) {
                                if (b = r(i), !(y = f(t, e.concat(C.anyOf[s]), b, n))) {
                                    o(b, i), w = null;
                                    break
                                }(S = y.schema ? Object.keys(y.schema).length : 1) < P && (P = S, w = y)
                            }
                            if (w) return w
                        }
                        if (C.hasOwnProperty("not") && (b = r(i), !(y = f(t, e.concat(C.not), b, n)))) return {
                            not: !0
                        }
                    } else {
                        if (C.hasOwnProperty("oneOf")) {
                            for (P = 1 / 0, s = 0, l = C.oneOf.length, c = 0; s < l; s++)
                                if (y = f(t, e.concat(C.oneOf[s]), i, n))(S = y.schema ? Object.keys(y.schema).length : 1) < P && (P = S, w = y);
                                else if ((c += 1) > 1) break;
                            if (c > 1) return {
                                oneOf: !0
                            };
                            if (c < 1) return w;
                            w = {}
                        }
                        if (C.hasOwnProperty("anyOf")) {
                            for (w = null, P = 1 / 0, s = 0, l = C.anyOf.length; s < l; s++) {
                                if (!(y = f(t, e.concat(C.anyOf[s]), i, n))) {
                                    w = null;
                                    break
                                }(S = y.schema ? Object.keys(y.schema).length : 1) < P && (P = S, w = y)
                            }
                            if (w) return w
                        }
                        if (C.hasOwnProperty("not") && !(y = f(t, e.concat(C.not), i, n))) return {
                            not: !0
                        }
                    }
                    if (C.hasOwnProperty("dependencies"))
                        for (m in C.dependencies)
                            if (C.dependencies.hasOwnProperty(m) && O.hasOwnProperty(m))
                                if (Array.isArray(C.dependencies[m])) {
                                    for (s = 0, l = C.dependencies[m].length; s < l; s++)
                                        if (!O.hasOwnProperty(C.dependencies[m][s])) return {
                                            dependencies: !0
                                        }
                                } else if (y = f(t, e.concat(C.dependencies[m]), i, n)) return y;
                    if (Array.isArray(O)) {
                        if (C.hasOwnProperty("items"))
                            if (Array.isArray(C.items)) {
                                for (s = 0, l = C.items.length; s < l; s++) null !== (y = f(t, e.concat(C.items[s]), i.concat({
                                    object: O,
                                    key: s
                                }), n)) && (w[s] = y, A = !0);
                                if (O.length > l && C.hasOwnProperty("additionalItems"))
                                    if ("boolean" == typeof C.additionalItems) {
                                        if (!C.additionalItems) return {
                                            additionalItems: !0
                                        }
                                    } else
                                        for (s = l, l = O.length; s < l; s++) null !== (y = f(t, e.concat(C.additionalItems), i.concat({
                                            object: O,
                                            key: s
                                        }), n)) && (w[s] = y, A = !0)
                            } else
                                for (s = 0, l = O.length; s < l; s++) null !== (y = f(t, e.concat(C.items), i.concat({
                                    object: O,
                                    key: s
                                }), n)) && (w[s] = y, A = !0);
                        else if (C.hasOwnProperty("additionalItems") && "boolean" != typeof C.additionalItems)
                            for (s = 0, l = O.length; s < l; s++) null !== (y = f(t, e.concat(C.additionalItems), i.concat({
                                object: O,
                                key: s
                            }), n)) && (w[s] = y, A = !0);
                        if (A) return {
                            schema: w
                        }
                    } else {
                        for (m in v = [], w = {}, O) O.hasOwnProperty(m) && v.push(m);
                        if (n.checkRequired && C.required)
                            for (s = 0, l = C.required.length; s < l; s++) O.hasOwnProperty(C.required[s]) || (w[C.required[s]] = {
                                required: !0
                            }, A = !0);
                        if (u = C.hasOwnProperty("properties"), h = C.hasOwnProperty("patternProperties"), u || h)
                            for (s = v.length; s--;) {
                                if (T = !1, u && C.properties.hasOwnProperty(v[s]) && (T = !0, null !== (y = f(t, e.concat(C.properties[v[s]]), i.concat({
                                    object: O,
                                    key: v[s]
                                }), n)) && (w[v[s]] = y, A = !0)), h)
                                    for (m in C.patternProperties) C.patternProperties.hasOwnProperty(m) && v[s].match(m) && (T = !0, null !== (y = f(t, e.concat(C.patternProperties[m]), i.concat({
                                        object: O,
                                        key: v[s]
                                    }), n)) && (w[v[s]] = y, A = !0));
                                T && v.splice(s, 1)
                            }
                        if (n.useDefault && u && !A)
                            for (m in C.properties) C.properties.hasOwnProperty(m) && !O.hasOwnProperty(m) && C.properties[m].hasOwnProperty("default") && (O[m] = C.properties[m].default);
                        if (n.removeAdditional && u && !0 !== C.additionalProperties && "object" != typeof C.additionalProperties)
                            for (s = 0, l = v.length; s < l; s++) delete O[v[s]];
                        else if (C.hasOwnProperty("additionalProperties"))
                            if ("boolean" == typeof C.additionalProperties) {
                                if (!C.additionalProperties)
                                    for (s = 0, l = v.length; s < l; s++) w[v[s]] = {
                                        additional: !0
                                    }, A = !0
                            } else
                                for (s = 0, l = v.length; s < l; s++) null !== (y = f(t, e.concat(C.additionalProperties), i.concat({
                                    object: O,
                                    key: v[s]
                                }), n)) && (w[v[s]] = y, A = !0);
                        if (A) return {
                            schema: w
                        }
                    }
                    for (g in C) C.hasOwnProperty(g) && !a.hasOwnProperty(g) && ("format" === g ? t.fieldFormat.hasOwnProperty(C[g]) && !t.fieldFormat[C[g]](O, C, i, n) && (w[g] = !0, A = !0) : t.fieldValidate.hasOwnProperty(g) && !t.fieldValidate[g](O, C[g].hasOwnProperty("$data") ? p(i, C[g].$data) : C[g], C, i, n) && (w[g] = !0, A = !0));
                    return A ? w : null
                },
                m = {
                    useDefault: !1,
                    useCoerce: !1,
                    checkRequired: !0,
                    removeAdditional: !1
                };

            function g() {
                if (!(this instanceof g)) return new g;
                this.coerceType = {}, this.fieldType = s(l), this.fieldValidate = s(u), this.fieldFormat = s(c), this.defaultOptions = s(m), this.schema = {}
            }
            g.prototype = {
                validate: function(t, e, i) {
                    var n = [t],
                        s = null,
                        r = [{
                            object: {
                                __root__: e
                            },
                            key: "__root__"
                        }];
                    if ("string" == typeof t && !(n = d(this, null, t))) throw new Error("jjv: could not find schema '" + t + "'.");
                    if (i)
                        for (var o in this.defaultOptions) this.defaultOptions.hasOwnProperty(o) && !i.hasOwnProperty(o) && (i[o] = this.defaultOptions[o]);
                    else i = this.defaultOptions;
                    return (s = f(this, n, r, i)) ? {
                        validation: s.hasOwnProperty("schema") ? s.schema : s
                    } : null
                },
                resolveRef: function(t, e) {
                    return d(this, t, e)
                },
                addType: function(t, e) {
                    this.fieldType[t] = e
                },
                addTypeCoercion: function(t, e) {
                    this.coerceType[t] = e
                },
                addCheck: function(t, e) {
                    this.fieldValidate[t] = e
                },
                addFormat: function(t, e) {
                    this.fieldFormat[t] = e
                },
                addSchema: function(t, e) {
                    if (!e && t && (e = t, t = void 0), e.hasOwnProperty("id") && "string" == typeof e.id && e.id !== t) {
                        if ("/" === e.id.charAt(0)) throw new Error("jjv: schema id's starting with / are invalid.");
                        this.schema[h(e.id)] = e
                    } else if (!t) throw new Error("jjv: schema needs either a name or id attribute.");
                    t && (this.schema[h(t)] = e)
                }
            }, void 0 !== t.exports ? t.exports = g : void 0 === (n = function() {
                return g
            }.call(e, i, e, t)) || (t.exports = n)
        }).call(this)
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(5),
            s = i(28),
            r = i(32),
            o = i(33) || 0;

        function a() {
            return s(o)
        }
        t.exports = a, t.exports.generate = a, t.exports.seed = function(e) {
            return n.seed(e), t.exports
        }, t.exports.worker = function(e) {
            return o = e, t.exports
        }, t.exports.characters = function(t) {
            return void 0 !== t && n.characters(t), n.shuffled()
        }, t.exports.isValid = r
    }, function(t, e, i) {
        "use strict";
        var n = 1;
        t.exports = {
            nextValue: function() {
                return (n = (9301 * n + 49297) % 233280) / 233280
            },
            seed: function(t) {
                n = t
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n, s, r = i(29);
        i(5);
        t.exports = function(t) {
            var e = "",
                i = Math.floor(.001 * (Date.now() - 1567752802062));
            return i === s ? n++ : (n = 0, s = i), e += r(7), e += r(t), n > 0 && (e += r(n)), e += r(i)
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(5),
            s = i(30),
            r = i(31);
        t.exports = function(t) {
            for (var e, i = 0, o = ""; !e;) o += r(s, n.get(), 1), e = t < Math.pow(16, i + 1), i++;
            return o
        }
    }, function(t, e, i) {
        "use strict";
        var n, s = "object" == typeof window && (window.crypto || window.msCrypto);
        n = s && s.getRandomValues ? function(t) {
            return s.getRandomValues(new Uint8Array(t))
        } : function(t) {
            for (var e = [], i = 0; i < t; i++) e.push(Math.floor(256 * Math.random()));
            return e
        }, t.exports = n
    }, function(t, e) {
        t.exports = function(t, e, i) {
            for (var n = (2 << Math.log(e.length - 1) / Math.LN2) - 1, s = -~(1.6 * n * i / e.length), r = "";;)
                for (var o = t(s), a = s; a--;)
                    if ((r += e[o[a] & n] || "").length === +i) return r
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(5);
        t.exports = function(t) {
            return !(!t || "string" != typeof t || t.length < 6) && !new RegExp("[^" + n.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(t)
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = 0
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        "use strict";

        function n(...t) {
            let e = {};
            return t.forEach((t, i) => {
                e[t] = i, e[i] = t
            }), e
        }
        i.r(e);
        n("1D", "5D", "1M", "3M", "6M", "1Y", "5Y", "Max"), n("WithSeries", "TimeAxis");
        const s = n("UsePrevious", "UseNext"),
            r = n("Minimum", "Everything"),
            o = n("Down", "Up", "Same"),
            a = n("ChangeBased", "OpenVsClose"),
            l = n("OHLC", "Line", "Candlestick", "Area", "Column", "Dots", "HLC", "HL", "Ribbon", "Step", "HollowCandles", "HeikinAshi", "ElderImpulseSystem", "Renko", "LineBreak", "Kagi", "PointAndFigure"),
            c = n("Tick", "Intraday", "Day", "Week", "Month", "Quarter", "Year"),
            u = n("None", "Nearest", "Continue", "FormT", "PerCount", "PerVolume", "PerRange", "PerSeconds"),
            h = (n("Png", "Jpeg", "Pdf", "Svg"), n("Number", "String", "Date")),
            d = n("FromMetaData", "AsInteger", "UseMetricUnit", "AsPercent"),
            p = n("Common", "Study", "BalanceSheet", "IncomeStatement", "Forward", "Seasonal", "Event"),
            f = n("Unknown", "Equity", "Future", "Option", "Currency", "Index", "Fund", "Asset", "Expression"),
            m = n("None", "Value", "Percent"),
            g = n("Linear", "Logarithmic"),
            y = n("Symbol", "Expression", "Study", "Forward", "BalanceSheet", "IncomeStatement", "Seasonal", "Annual"),
            v = n("Normal", "Forward", "HistoricalForward", "Study", "BalanceSheet", "IncomeStatement", "Events"),
            T = n("Left", "Center", "Right"),
            b = n("Arrow", "Crosshair", "Move", "Hand", "ResizeVertical", "Grabbing"),
            S = n("NotApplicable", "Left", "Middle", "Right"),
            P = n("Shift", "Alt", "Control", "Meta"),
            A = n("None", "Horizontal", "Vertical", "Both"),
            w = n("Unspecified", "GBE", "cmdtyView"),
            C = n("Unspecified", "Head", "Tail"),
            x = n("wheel", "wheel+shift", "none"),
            M = n("Auto", "Draggable"),
            E = n("Page", "Application");

        function O(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(this, e.concat(Array.prototype.slice.call(arguments, 0)))
            }
        }

        function D(...t) {
            const e = t ? t.length : 0;
            return function(...i) {
                let n = 0,
                    s = e ? t[n].apply(this, i) : i[0];
                for (; ++n < e;) s = t[n].call(this, s);
                return s
            }
        }

        function L(t) {
            return t
        }

        function _(t) {
            return t.reduce((t, e) => t + e, 0)
        }

        function I(t) {
            return _(t) / t.length
        }

        function N(t) {
            return t.every(t => null !== t)
        }

        function R(t, e) {
            return Array.from(Array(e)).map((e, i) => i + t)
        }

        function H(t, e) {
            let i = [],
                n = [];
            return t.forEach(t => {
                e(t) ? i.push(t) : n.push(t)
            }), {
                yes: i,
                no: n
            }
        }

        function k(t, e) {
            if (!(t.length < 1))
                for (let i = t.length - 1; i >= 0; --i)
                    if (e(t[i])) return t[i]
        }

        function F(t, e) {
            return t.filter(t => !e.includes(t))
        }

        function U(t, e, i = L) {
            let n = [];
            return t.forEach(t => {
                const s = i(t);
                !n.map(i).includes(s) && e.map(i).includes(s) && n.push(t)
            }), n
        }

        function V(t, e = 0) {
            if (!(t.length < e + 1)) return t[t.length - e - 1]
        }

        function B(t) {
            if (!(t.length < 1)) return t[0]
        }
        const W = (t, e) => t[e];

        function j(t, e, i = (t => t), n = W, s = 0, r = t.length - 1) {
            for (; s < r;) {
                const l = s + r >>> 1,
                    c = n(t, l);
                ((o = i(c)) < (a = e) ? -1 : o > a ? 1 : o >= a ? 0 : NaN) < 0 ? s = l + 1 : r = l
            }
            var o, a;
            return s
        }

        function G(t, e = 0, i = t.length - 1, n = (t => t)) {
            if (e < 0 || i >= t.length) return [null, null];
            let s = null,
                r = null;
            for (let o = e; o <= i; o++) {
                const e = n(t[o]);
                null != e && e >= e && (null == s ? s = r = e : (s > e && (s = e), r < e && (r = e)))
            }
            return [s, r]
        }
        let z = null;

        function Y() {
            return null === z && (z = "ontouchstart" in window), z
        }

        function $(t, e) {
            return "ArrowLeft" === t || 37 === e
        }

        function q(...t) {
            return t.every(t => null != t)
        }

        function X(t, e) {
            return i = "round", n = t, void 0 === (s = -e) || 0 == +s ? Math[i](n) : (n = +n, s = +s, isNaN(n) || "number" != typeof s || s % 1 != 0 ? NaN : (n = n.toString().split("e"), +((n = (n = Math[i](+(n[0] + "e" + (n[1] ? +n[1] - s : -s)))).toString().split("e"))[0] + "e" + (n[1] ? +n[1] + s : s))));
            var i, n, s
        }

        function K(t) {
            return q(t) && Number.isFinite(t)
        }

        function Z(t) {
            let e = "both" === t;
            return [e || "vertical" === t, e || "horizontal" === t]
        }

        function Q(t, e, ...i) {
            if (!q(t)) return e;
            let n = t;
            for (let t = 0; t < i.length; ++t) {
                const s = i[t];
                if (!q(n) || !n.hasOwnProperty(s)) return e;
                n = n[s]
            }
            return n
        }

        function J(t) {
            return null == t ? t : JSON.parse(JSON.stringify(t))
        }

        function tt(t, e, i = !0) {
            let n = Object.keys(e),
                s = Object.keys(t);
            for (let o of n)
                if (r = o, !i || s.includes(r)) {
                    const i = t[o];
                    void 0 === i || "object" != typeof i || Array.isArray(i) ? t[o] = e[o] : et(t[o], e[o])
                } var r
        }

        function et(t, e) {
            tt(t, e)
        }

        function it(t, e) {
            let i = Object.keys(e);
            for (let n of i) t[n] = t[n] || e[n]
        }

        function nt(t = []) {
            return t.reduce((t, e) => (t[e.name] = e.value, t), {})
        }

        function st(t) {
            return t ? new Date(t) : null
        }

        function rt(t) {
            let e = "";
            for (let i in t) {
                let n = "".concat(i, "=").concat(encodeURIComponent(t[i]));
                e += (e.length > 0 ? "&" : "") + n
            }
            return e
        }

        function ot(t, e) {
            tt(t, e, !1)
        }
        const at = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/,
            lt = [1e3, 60, 60, 24, 7, 30 / 7, 12];

        function ct(t) {
            const e = at.exec(t);
            if (!q(e)) return null;
            const i = e.slice(2, 9).map(t => q(t) ? parseFloat(t) : 0).reverse();
            return lt.forEach((t, e) => {
                for (let n = e; n < i.length; n++) i[n] = i[n] * t
            }), Math.floor(_(i))
        }

        function ut(t, e, i, n) {
            let s = t,
                r = e;
            return 0 === s || 0 === r ? (s = i, r = s / 2) : s > n ? (r *= n / s, s = n) : s < i && (r *= i / s, s = i), [s, r]
        }
        var ht = i(6),
            dt = i.n(ht),
            pt = i(9),
            ft = i.n(pt);

        function mt(t, e) {
            if (e.length < t) throw new TypeError(t + " argument" + t > 1 ? "s" : " required, but only " + e.length + " present")
        }

        function gt(t) {
            mt(1, arguments);
            var e = Object.prototype.toString.call(t);
            return t instanceof Date || "object" == typeof t && "[object Date]" === e ? new Date(t.getTime()) : "number" == typeof t || "[object Number]" === e ? new Date(t) : ("string" != typeof t && "[object String]" !== e || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
        }

        function yt(t) {
            mt(1, arguments);
            var e = gt(t);
            return e.setHours(0, 0, 0, 0), e
        }

        function vt(t, e) {
            mt(2, arguments);
            var i = yt(t),
                n = yt(e);
            return i.getTime() === n.getTime()
        }

        function Tt(t) {
            mt(1, arguments);
            var e = gt(t);
            return e.setDate(1), e.setHours(0, 0, 0, 0), e
        }

        function bt(t) {
            mt(1, arguments);
            var e = gt(t),
                i = e.getFullYear();
            return i
        }

        function St(t) {
            if (null === t || !0 === t || !1 === t) return NaN;
            var e = Number(t);
            return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function Pt(t) {
            mt(1, arguments);
            var e = gt(t),
                i = e.getFullYear(),
                n = e.getMonth(),
                s = new Date(0);
            return s.setFullYear(i, n + 1, 0), s.setHours(0, 0, 0, 0), s.getDate()
        }

        function At(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = St(e),
                s = i.getMonth() + n,
                r = new Date(0);
            r.setFullYear(i.getFullYear(), s, 1), r.setHours(0, 0, 0, 0);
            var o = Pt(r);
            return i.setMonth(s, Math.min(o, i.getDate())), i
        }

        function wt(t, e) {
            mt(2, arguments);
            var i = St(e);
            return At(t, 12 * i)
        }

        function Ct(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = gt(e);
            return i.getTime() > n.getTime()
        }

        function xt(t) {
            return dt.a.parseInstrumentType(t)
        }
        const Mt = new Map;
        async function Et(t) {
            if (!Nt(t)) return t;
            const {
                root: e,
                dynamic: i,
                dynamicCode: n
            } = xt(t);
            if (!q(e, i, n)) return null;
            if (!Mt.has(e) || ! function(t) {
                return mt(1, arguments), vt(t, Date.now())
            }(Mt.get(e).savedAt)) {
                const t = await kt(e);
                if (!Array.isArray(t)) return null;
                Mt.set(e, {
                    symbols: t,
                    savedAt: new Date
                })
            }
            const {
                symbols: s
            } = Mt.get(e), r = Math.max(parseInt(n) - 1, 0);
            return s.length <= n ? null : s[r]
        }

        function Ot(t) {
            return dt.a.getIsFuture(t)
        }
        const Dt = /^([A-Z]+)([0-9]{2})([A-Z]+\.CM)$/;

        function Lt(t) {
            return Dt.test(t)
        }

        function _t(t) {
            return String(t % 100).padStart(2, "0")
        }

        function It(t) {
            if (!Ot(t)) return t;
            const e = xt(t);
            return i = e.root, n = e.month, s = e.year, "".concat(i).concat(n).concat(_t(s));
            var i, n, s
        }

        function Nt(t) {
            const e = xt(t);
            return q(e) && !0 === e.dynamic
        }

        function Rt(t) {
            const e = Ot(t) || function(t) {
                    return dt.a.getIsFutureOption(t)
                }(t),
                i = "_S_" === t.substring(0, 2);
            return e && !i
        }

        function Ht(t) {
            return Ot(t) ? "America/Chicago" : "America/New_York"
        }
        async function kt(t) {
            const e = await Lp("futures", "?root=".concat(t));
            return JSON.parse(e)[t].contracts.filter(t => "Y" !== t.month).sort((t, e) => t.expires - e.expires).map(e => "".concat(t).concat(e.month).concat(e.year % 100))
        }

        function Ft(t) {
            if (!Ot(t)) return null;
            return xt(t).root
        }

        function Ut(t) {
            if (!Ot(t)) return null;
            const e = xt(t),
                i = ft.a.getCodeToNumberMap()[e.month];
            return Tt(new Date(e.year, i - 1))
        }

        function Vt(t, e) {
            const i = Ot(t),
                n = Lt(t);
            return i || n ? i ? function(t, e) {
                const i = xt(t);
                return "".concat(i.root).concat(i.month).concat((i.year + e) % 100)
            }(t, e) : function(t, e) {
                const i = Dt.exec(t),
                    n = Number.parseInt(i[2]),
                    s = bt(wt(new Date(n + (n > 79 ? 1900 : 2e3), 0, 1), e));
                return "".concat(i[1]).concat(_t(s)).concat(i[3])
            }(t, e) : null
        }

        function Bt(t) {
            const e = Wt(t);
            return q(e) ? e.innerHTML : null
        }

        function Wt(t) {
            return $t(t)[0]
        }

        function jt(t, e) {
            for (const i in e) t.style[i] = e[i]
        }

        function Gt(t, e) {
            for (const i in e) t.setAttribute(i, e[i])
        }

        function zt(t, e) {
            "string" == typeof t && (t = Wt(t)), "string" == typeof e ? t.className = e : Array.isArray(e) ? t.className = e.join(" ") : "object" == typeof e && (t.className = "", Object.keys(e).forEach(i => {
                e[i] && t.classList.add(i)
            }))
        }

        function Yt(t, e) {
            return t.appendChild(document.createElement(e))
        }

        function $t(t) {
            return document.querySelectorAll(t)
        }

        function qt(t, e) {
            let i = t;
            "string" == typeof t && (i = Wt(t)), i && (i.innerHTML = e)
        }
        async function Xt(t, e = "asyncReadyWork") {
            q(this[e]) || (this[e] = {});
            const i = this[e];
            return q(i.result) ? Promise.resolve(i.result) : (q(i.promise) || (i.promise = t.call(this), i.promise.then(t => {
                i.result = t
            })), i.promise)
        }
        const Kt = window.devicePixelRatio || 1,
            Zt = {
                HIT_TEST_TOLERANCE: Y() ? 20 * Kt : 5 * Kt,
                HALF_ANN_POINT_DIMENSION: Y() ? 10 : 6,
                OUT_OF_SCREEN: 8192,
                DEFAULT_SYMBOL_WIDTH_HEIGHT: 18,
                PARTIAL_FIBONACCI_SEQUENCE: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
                PANE_SPLITTER_PERCENT_HEIGHT: .75,
                BASIS_MAIN: "$main",
                INPUT_PERIOD: "Period",
                INPUT_PERIOD1: "Period1",
                INPUT_PERIOD2: "Period2",
                INPUT_PERIOD3: "Period3",
                INPUT_SMOOTHING: "Smoothing",
                INPUT_SOURCE: "Source",
                EMPTY_ARRAY: [],
                CHART_DEFINITION: "chart.def.json",
                CHART_SCHEMA: "chart.schema.json",
                STUDIES_SCHEMA: "studies.schema.json",
                STUDIES_LIST: "studies.lst.json",
                FIELDS_SCHEMA: "fields.schema.json",
                FIELDS_LIST: "fields.lst.json",
                ACCESSOR_SCHEMA: "accessor.schema.json",
                EVENTS: ["dividends", "earnings", "splits"],
                PLACEHOLDER_SYMBOL_NAME: "PLACEHOLDER",
                REALTIME_INITIAL_QUOTE: "REFRESH_QUOTE",
                REALTIME_TRADE: "TRADE",
                REALTIME_VOLUME: "VOLUME",
                TOOLTIP_X_OFFSET: 15,
                TOOLTIP_Y_OFFSET: 30,
                TOOLTIP_TOGGLE_SIDE_ANIM_MS: 300,
                TOOLTIP_TOGGLE_DISTANCE_TOLERANCE: 10,
                CARDS_X_OFFSET: 5,
                CARDS_Y_OFFSET: 5,
                PANE_CAP_MAX_PADDING_PERCENT: .15,
                PANE_CAP_MIN_PADDING_PERCENT: .075,
                STANDARD_VISIBLE_BARS: 130,
                ACTION_GET: "Get",
                ACTION_TEMPLATE: "Template",
                ACTION_AGGREGATION: "Aggregation",
                MINIMUM_BAR_WIDTH: .02,
                MAXIMUM_BAR_WIDTH: 180,
                MINIMUM_BARS_VISIBLE: 5,
                COLOR_TRANSPARENT: "rgba(0, 0, 0, 0)",
                AT_LINE: "line",
                AT_LINE_2: "line2",
                AT_FILL: "fill",
                AT_FILL2: "fill2",
                AT_FILL_TEXT: "fillText",
                AT_COMPACT: "compact",
                AT_ACCOUNT_SIZE: "accountSize",
                AT_RISK: "risk",
                AT_RISK_IS_PERCENT: "riskIsPercent",
                AT_SHOW_PRICES: "showPrices",
                AT_SHOW_BARCOUNT: "showBarCount",
                AT_EXTEND_PT_1: "extendPoint1",
                AT_EXTEND_PT_2: "extendPoint2",
                AT_TEXT_LINES: "textLines",
                AT_SHOW_TIMESTAMPS: "showTimestamps",
                AT_SHOW_TRENDLINE: "showTrendline",
                AT_SHOW_PERCENTDIFF: "showPercentDiff",
                AT_FACTORS: "factors",
                AT_MARKER: "marker",
                AT_DRAW_LINES: "drawLines",
                AT_ALLOW_PRICES_CHANGE_UI: "allowPricesChangeUI",
                AT_PRICES_ON_SCALE: "pricesOnScale",
                ANN_ACTION_ID: "Annotation",
                ANN_DUPLICATE_OFFSET: 20,
                DEFAULT_ADORN_OFFSET: {
                    x: -5,
                    y: -10
                },
                ZOOM_DEBOUNCE_DELAY: 3e3,
                MINIMUM_PANE_HEIGHT: 10,
                DEBUG_TIME_FORMAT: "yyyy-LL-dd HH:mm:ss.SSS",
                DEBUG_SYMBOL: "NOTASYMBOL",
                DEBUG_CHART_ID: "root",
                COLOR_DEFAULT_OHLC: "#808080",
                COLOR_DEFAULT_VARY: ["#d33e32", "#19ab52"],
                COLOR_DEFAULT_AREA: "#2d76b3",
                TOOLTIP_STD: "standard",
                TOOLTIP_CARDS: "cards",
                TOOLTIP_BUBBLE: "bubble",
                TOOLTIP_EXTERNAL: "external",
                NS_SVG: "http://www.w3.org/2000/svg",
                NS_XLINK: "http://www.w3.org/1999/xlink",
                NULL_OBJECT: {
                    magic: 0x64646f746c6964
                },
                CROSSHAIR_ID: "crosshair_elem_id",
                ZOOM_X_AXIS_PERCENT: .02,
                DEFAULT_MAX_RECORDS: 640,
                TICK_CUSTOM_AGG_MULTIPLIER: 5,
                SNAP_PROXIMITY_PIXELS: 18,
                LONG_PRESS_TIMEOUT_MILLIS: 750,
                MINIMUM_THROTTLE: 25,
                BACKGROUND_TAB_THROTTLE: 2e3,
                INTERNAL_GC_MILLIS: 3e5,
                US_TRADING_DAYS_PER_YEAR: 251,
                INLINE_DATA_ELEMENT_ID: "barchart-www-inline-data",
                META_DATA_GET_TIMETOUT: 3e3,
                FMT_US_DATE_ONLY: "LL/dd/yyyy",
                FMT_ISO_DATE_ONLY: "yyyy-LL-dd",
                FMT_HIST_FEED_PARAM_DATE_ONLY: "yyyyLLdd",
                FMT_HIST_FEED_PARAM_DATE_TIME: "yyyyLLddHHmmss",
                FMT_HIST_FEED_INTRADAY: "yyyy-LL-dd HH:mm",
                FMT_HIST_FEED_TICK: "yyyy-LL-dd HH:mm:ss.SSS",
                FMT_EXPORT_ALL_BUT_MILLIS: "yyyy-LL-dd HH:mm:ss",
                LINE_HEIGHT_MULTIPLIER: 1.2,
                SVG_ICONS_DOM_NODE: "bchart-svg-icons-placeholder",
                DEFAULT_BAR_WIDTH: 10,
                DEFAULT_BAR_SPACING: 5,
                LINE_DASH_PROP_NAME: "lineDash",
                MARKER_ARROW_ANGLE: 45,
                MARKER_ARROW_LENGTH: 20,
                TIMELINE_PADDING_BARS: 1500,
                NO_DATA_TEXT: "No data to display",
                DEFAULT_PRICE_AXIS_WIDTH: 70,
                SPECIAL_BUILDER_REQUIRED: [l.Renko, l.Kagi, l.PointAndFigure],
                INTRA_THRESHOLD: ct("P30D"),
                ONE_DAY_MILLIS: ct("P1D"),
                TIME_SCALE_MAX_SPACE_NO_TICKS: 80,
                FIFTY_YEARS_MILLIS: ct("P50Y"),
                BC_EVENT_LOGGED_IN: "login success",
                BC_EVENT_DISCONNECTED: "disconnect",
                BC_EVENT_FEED_PAUSED: "feed paused",
                BC_EVENT_FEED_RESUMED: "feed resumed",
                BC_EVENT_DISCONNECTING: "disconnecting",
                HEADER_SIZE_PLACEHOLDER_ID: "header_size_helper_placeholder",
                CURVE_STYLE_DOTS_RADIUS: 2,
                DEFAULT_ACCESSOR_SUBACTION: "Update",
                MIN_EVENT_RADIUS: 8,
                PHP_TO_UNICODE_TS_35_MAP: {
                    a: "EEE",
                    A: "EEEE",
                    d: "dd",
                    e: "d",
                    w: "c",
                    b: "MMM",
                    B: "MMMM",
                    m: "MM",
                    y: "yy",
                    Y: "yyyy",
                    H: "HH",
                    k: "H",
                    I: "hh",
                    l: "h",
                    M: "mm",
                    p: "aaa",
                    P: "aaaaa",
                    S: "ss",
                    L: "SSS"
                },
                AUTOFIT_PERIOD: "P50Y",
                BARCHART_HIST_SRV_TICKS_PAGE_NAME: "queryticks.ashx",
                BARCHART_HIST_SRV_INTRADAY_PAGE_NAME: "queryminutes.ashx",
                BARCHART_HIST_SRV_FORMT_INTRADAY_PAGE_NAME: "queryformtminutes.ashx",
                BARCHART_HIST_SRV_EOD_PAGE_NAME: "queryeod.ashx",
                DOUBLE_CLICK_DURATION_MILLIS: 500,
                TOOLTIP_STD_LEGACY_CLASS: "highcharts-tooltip",
                TOOLTIP_STD_CLASS: "bcharts-tooltip",
                TOOLTIP_BUBBLE_TIP_HEIGHT: 30,
                EVENTS_BUILT_IN: ["dividends", "earnings", "splits"]
            };
        var Qt = i(10),
            Jt = i.n(Qt),
            te = i(8),
            ee = i.n(te);
        const ie = [{
            min: 0,
            divider: 1,
            suffix: "",
            decimals: 0
        }, {
            min: 1e5,
            divider: 1e3,
            suffix: "K",
            decimals: 0
        }, {
            min: 1e6,
            divider: 1e6,
            suffix: "M",
            decimals: 2
        }, {
            min: 1e9,
            divider: 1e9,
            suffix: "B",
            decimals: 3
        }];

        function ne(t, e) {
            return Jt()(t, e, "-", Rp().config.isAlt64, ",")
        }
        class se {
            constructor(t) {
                this.symbolType = f.Unknown, this.exchange = "", this.name = "", this.unitCode = "", this.pointValue = 1, this.resolved = this.symbol = t, this.timeZone = Ht(this.symbol)
            }
            initialize(t) {
                et(this, t)
            }
            get isReady() {
                return this.symbolType !== f.Unknown
            }
            format(t, e, i) {
                if (null == t) return "";
                if (!this.isReady) return t.toFixed(0);
                if (e.format === d.FromMetaData) return ne(t, this.unitCode);
                switch (e.format) {
                    case d.AsInteger:
                        return t.toFixed();
                    case d.UseMetricUnit: {
                        i = i || {};
                        const e = Object.assign({}, {
                            range: [t, t],
                            allDigits: !1
                        }, i);
                        if (i.allDigits) return re(t, 0);
                        Array.isArray(e.range) && e.range.length || (e.range = [t, t]);
                        const n = Math.max(Math.abs(e.range[0]), Math.abs(e.range[1])),
                            s = k(ie, t => n > t.min) || ie[0];
                        return "".concat((t / s.divider).toFixed(s.decimals)).concat(s.suffix)
                    }
                    case d.AsPercent:
                        return "".concat((100 * t).toFixed(2), "%");
                    default:
                        return ""
                }
            }
            parse(t) {
                throw new Error("Not implemented yet")
            }
            shutdown() {}
        }

        function re(t, e) {
            return ee()(t, e, ",")
        }

        function oe(t) {
            const e = Bt("#".concat(Zt.INLINE_DATA_ELEMENT_ID));
            if (!q(e)) return Zt.NULL_OBJECT;
            const i = JSON.parse(e);
            let n = t;
            const s = t => i.hasOwnProperty(t);
            return s(n) || (n = function(t, e) {
                if (!Ot(t)) return t;
                const i = xt(t);
                return e.find(t => xt(t).root === i.root) || t
            }(t, Object.keys(i)), s(n)) ? i[n].instrument : Zt.NULL_OBJECT
        }
        class ae extends se {
            async ready() {
                return Xt.call(this, async () => (this.initialize(oe(this.symbol)), !0))
            }
        }
        class le extends se {
            async ready() {
                return Xt.call(this, async () => {
                    const t = Nt(this.symbol),
                        e = await (t ? Et(this.symbol) : this.symbol);
                    this.resolved = It(e);
                    const [i, n, s] = await async function(t) {
                        const e = Ot(t),
                            i = Lt(t),
                            n = t => [t, !1, !1];
                        if (!e && !i) return n(t);
                        if (e) {
                            const e = Ct(Tt(new Date), Ut(t));
                            return [e ? await Et("".concat(Ft(t), "*1")) : t, !0, e]
                        }
                        if (i) {
                            const e = Dt.exec(t);
                            return n("".concat(e[1]).concat(_t(bt(new Date))).concat(e[3]))
                        }
                        return n(t)
                    }(this.resolved), r = new Promise((function(t, e) {
                        setTimeout(t, Zt.META_DATA_GET_TIMETOUT, Zt.NULL_OBJECT)
                    }));
                    let o = await Promise.race([r, Rp().connection.getMarketState().getProfile(i)]);
                    if (o !== Zt.NULL_OBJECT && q(o) && q(o.unitCode) && 0 !== o.unitCode.length) delete o.symbol;
                    else if (o = oe(i), o === Zt.NULL_OBJECT) try {
                        const t = await Lp("ondemand", "/getInstrumentDefinition.json?symbols=".concat(i)),
                            e = JSON.parse(t);
                        if (200 === e.status.code && 1 === e.results.length) {
                            const t = e.results[0];
                            o = {
                                name: t.symbolName,
                                exchange: t.exchange,
                                unitCode: t.baseCode,
                                pointValue: t.pointValue
                            }
                        }
                    } catch (t) {
                        Op("Failed fetching the metadata for ".concat(i, ", error is ").concat(t.message), "warn"), o = {
                            name: i,
                            exchange: "",
                            unitCode: "A",
                            pointValue: 1
                        }
                    }
                    if (o.symbolType = n ? f.Future : f.Equity, s) {
                        const t = xt(this.resolved);
                        o.month = t.month, o.year = t.year
                    }
                    return this.initialize(o), !0
                })
            }
            getCacheableEntities(t) {
                t.add(this)
            }
        }
        class ce {
            constructor(t) {
                this._decimals = t
            }
            async ready() {
                return !0
            }
            format(t, e, i) {
                return null == t ? "" : re(t, this._decimals)
            }
            getCacheableEntities(t) {}
        }
        class ue {
            async ready() {
                return !1
            }
            format(t, e, i) {
                return null == t ? "" : q(t) ? t.toFixed(0) : ""
            }
            getCacheableEntities(t) {}
        }
        class he {
            constructor(t) {
                const e = Rp().getMetaDataSource();
                this.inner = t.map(t => e.getMetaData(t)), this.unitCode = null
            }
            async ready() {
                return Xt.call(this, async () => {
                    const t = (await Promise.all(this.inner.map(t => t.ready()))).every(L);
                    if (t) {
                        const t = t => parseInt(t, 16),
                            e = e => t(e.unitCode),
                            {
                                yes: i,
                                no: n
                            } = H(this.inner, t => e(t) >= 8),
                            s = this.inner.length,
                            r = t => Math.max(...t).toString(16).toUpperCase();
                        if (i.length === s || n.length === s) this.unitCode = r(this.inner.map(e));
                        else {
                            const s = "B".charCodeAt(0),
                                o = i.map(e).concat(n.map(e).map(t => String.fromCharCode(t - 2 + s)).map(t));
                            this.unitCode = r(o)
                        }
                    }
                    return t
                })
            }
            format(t, e, i) {
                return null == t ? "" : q(this.unitCode) ? ne(t, this.unitCode) : t.toFixed(0)
            }
            getCacheableEntities(t) {
                this.inner.forEach(e => t.add(e))
            }
        }
        class de {
            constructor() {
                this.metaDataCache = new Map
            }
            makeAndCacheMetaData(t, e) {
                if (t === Zt.PLACEHOLDER_SYMBOL_NAME) return new ue;
                if (this.metaDataCache.has(t)) return this.metaDataCache.get(t); {
                    const i = e(t);
                    return this.metaDataCache.set(t, i), i
                }
            }
            evictUnused(t) {
                for (const [e, i] of this.metaDataCache) t.has(i) || (i.shutdown(), this.metaDataCache.delete(e))
            }
        }
        class pe extends de {
            getMetaData(t) {
                return this.makeAndCacheMetaData(t, () => new ae(t))
            }
        }
        class fe extends de {
            getMetaData(t) {
                return this.makeAndCacheMetaData(t, () => new le(t))
            }
        }
        const me = /^#([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/,
            ge = /^rgb\((\s*\d{1,3}\s*),(\s*\d{1,3}\s*),(\s*\d{1,3}\s*)\)$/,
            ye = /^rgba\((\s*\d{1,3}\s*),(\s*\d{1,3}\s*),(\s*\d{1,3}\s*),\s*([01]+(?:\.\d+)?)\)$/,
            ve = {
                r: 255,
                g: 255,
                b: 255,
                a: 1
            },
            Te = {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            };

        function be(t, e) {
            return {
                x: (t.x + e.x) / 2,
                y: (t.y + e.y) / 2
            }
        }

        function Se(t, e) {
            const i = Math.abs(t.x - e.x),
                n = Math.abs(t.y - e.y);
            return Math.sqrt(i * i + n * n)
        }

        function Pe(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }

        function Ae(t, e) {
            return {
                x: t.x + e.x,
                y: t.y + e.y
            }
        }

        function we(t, e) {
            return Math.atan2(e.y - t.y, e.x - t.x)
        }

        function Ce(t, e, i) {
            const [n, s] = t, r = s.x - n.x, o = s.y - n.y, a = e.x - n.x, l = e.y - n.y;
            if (0 === r && 0 === o) return Math.abs(a) <= i && Math.abs(l) <= i;
            const c = Math.atan2(o, r),
                u = Math.sqrt(r * r + o * o),
                h = Math.atan2(l, a),
                d = Math.sqrt(a * a + l * l),
                p = d * Math.cos(h - c),
                f = d * Math.sin(h - c);
            return Math.abs(f) <= i && -i <= p && p <= u + i
        }

        function xe(t) {
            return t.toLowerCase().replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace("sparsedot", "1,8,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").replace("solid", "").split(",").map(Number).filter(L)
        }

        function Me(t) {
            return function(t) {
                let e = t => {
                    let e = t.toString(16);
                    return 2 === e.length ? e : "0" + e
                };
                return "#".concat(e(t.r)).concat(e(t.g)).concat(e(t.b))
            }(De(t))
        }

        function Ee(t, e, i, n = !1) {
            const s = t.a,
                r = n => Math.floor(t[n] + (e[n] - t[n]) * i);
            return {
                r: r("r"),
                g: r("g"),
                b: r("b"),
                a: Math.min(1, (1 + (n ? i : 0)) * s)
            }
        }

        function Oe(t, e = !1) {
            return D(De, i => Ee(i, ve, t, e), Le)
        }

        function De(t) {
            if (["r", "g", "b", "a"].map(e => t[e]).every(t => q(t))) return t;
            const e = q(t.linearGradient) ? t._refColor : t,
                i = me.exec(e);
            if (null !== i) {
                const t = q(i[2]),
                    e = i[1] + (i[2] || ""),
                    n = i => t ? parseInt(e.substr(2 * i, 2), 16) : 17 * parseInt(e.charAt(i), 16);
                return {
                    r: n(0),
                    g: n(1),
                    b: n(2),
                    a: 1
                }
            } {
                const t = ye.exec(e),
                    i = ge.exec(e),
                    n = (t, e) => q(t) && t.length === e,
                    s = n(t, 5),
                    r = n(i, 4);
                if (!s && !r) throw new Error("Color is neither a hex color nor a rgba one.");
                const o = s ? t : i;
                let a = t => parseInt(o[t]),
                    l = parseFloat(o[4]);
                return {
                    r: a(1),
                    g: a(2),
                    b: a(3),
                    a: s ? l : 1
                }
            }
        }

        function Le(t) {
            return "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(t.a, ")")
        }

        function _e(t, e) {
            t.beginPath(), t.rect(e.x, e.y, e.width, e.height), t.clip()
        }
        class Ie {
            constructor(t, e, i, n) {
                this.x = t, this.y = e, this.width = i, this.height = n
            }
            contains(t) {
                return t.x >= this.x && t.x <= this.x + this.width && t.y >= this.y && t.y <= this.y + this.height
            }
            get centerX() {
                return this.x + this.width / 2
            }
            get centerY() {
                return this.y + this.height / 2
            }
            duplicate() {
                return new Ie(this.x, this.y, this.width, this.height)
            }
        }
        class Ne {
            constructor(t, e, i, n) {
                this.cx = t, this.cy = e, this.radiusX = i, this.radiusY = n
            }
            contains(t) {
                const e = Math.abs(t.x - this.cx) / this.radiusX,
                    i = Math.abs(t.y - this.cy) / this.radiusY;
                return Math.sqrt(e * e + i * i) <= 1
            }
        }

        function Re(t, e = Zt.LINE_HEIGHT_MULTIPLIER) {
            return e * t.measureText("M").width
        }

        function He(t, e, i, n = T.Left, s = null, r = null) {
            t.save();
            const o = Array.isArray(e) ? e : [e],
                a = Re(t, 1);
            if (q(r)) {
                const e = Math.max(...o.map(e => t.measureText(e).width)),
                    s = a * o.length;
                let l = i.x;
                n === T.Right && (l -= e), n === T.Center && (l -= e / 2);
                const c = i.y - a,
                    u = function(t, e, i) {
                        return t.x -= e, t.y -= i, t.width += 2 * e, t.height += 2 * i, t
                    }(new Ie(l, c, e, s), 4, 4);
                t.fillStyle = r, ke(t, u, !1)
            }
            q(s) && (t.fillStyle = s);
            let l = i.x,
                c = i.y;
            o.forEach(e => {
                t.textAlign = T[n].toLowerCase(), t.fillText(e, l, c), c += a
            }), t.restore()
        }

        function ke(t, e, i = !0) {
            t.beginPath(), t.rect(e.x, e.y, e.width, e.height), i && t.stroke(), t.fill()
        }

        function Fe(t, e, i, n = 0, s = Math.PI, r = !1) {
            t.beginPath(), t.arc(e.x, e.y, Math.abs(i), n, s, r), t.stroke()
        }

        function Ue(t, {
            x: e,
            y: i
        }, {
                        x: n,
                        y: s
                    }) {
            t.beginPath(), t.moveTo(e, i), t.lineTo(n, s), t.stroke()
        }

        function Ve(t, e, i, n) {
            Ue(t, {
                x: e,
                y: i
            }, {
                x: e,
                y: n
            })
        }

        function Be(t, e, i, n) {
            Ue(t, {
                x: i,
                y: e
            }, {
                x: n,
                y: e
            })
        }

        function We(t, e, i) {
            switch (e) {
                case "one":
                    ! function(t, e) {
                        je(t, e, "1")
                    }(t, i);
                    break;
                case "two":
                    ! function(t, e) {
                        je(t, e, "2")
                    }(t, i);
                    break;
                case "three":
                    ! function(t, e) {
                        je(t, e, "3")
                    }(t, i);
                    break;
                case "four":
                    ! function(t, e) {
                        je(t, e, "4")
                    }(t, i);
                    break;
                case "five":
                    ! function(t, e) {
                        je(t, e, "5")
                    }(t, i);
                    break;
                case "question":
                    ! function(t, e) {
                        je(t, e, "?")
                    }(t, i);
                    break;
                case "fish_hook":
                    ! function(t, e) {
                        t.save(), t.translate(e.x, e.y);
                        const i = Math.min(e.width, e.height) / 560;
                        t.scale(i, i), t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, t.save(), t.save(), t.miterLimit = 10, t.beginPath(), t.moveTo(377.8, 354.8), t.bezierCurveTo(377.8, 354.8, 401.8, 517.8, 290.6, 507), t.bezierCurveTo(173.2, 495.5, 171.5, 50.39, 171.5, 50.39), t.bezierCurveTo(171.5, 50.39, 191.7, 252.59, 212.3, 351), t.bezierCurveTo(212.3, 351, 230.9, 472.8, 286.7, 488.7), t.bezierCurveTo(350.4, 507, 369.5, 452.7, 377.8, 354.79), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.miterLimit = 10, t.beginPath(), t.moveTo(378.3, 351.1), t.lineTo(341.1, 446.6), t.lineTo(371.2, 436.7), t.lineTo(378.3, 351.1), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore()
                    }(t, i);
                    break;
                case "arrow_up":
                    ! function(t, e) {
                        t.save();
                        const {
                            cx: i,
                            cy: n,
                            left: s,
                            right: r,
                            top: o,
                            bottom: a,
                            halfBaseSize: l
                        } = Ge(e);
                        t.beginPath(), t.moveTo(r, n), t.lineTo(i, o), t.lineTo(s, n), t.lineTo(Math.floor(i - l), n), t.lineTo(Math.floor(i - l), a), t.lineTo(Math.floor(i + l), a), t.lineTo(Math.floor(i + l), n), t.closePath(), t.fill(), t.stroke(), t.restore()
                    }(t, i);
                    break;
                case "arrow_down":
                    ! function(t, e) {
                        t.save();
                        const {
                            cx: i,
                            cy: n,
                            left: s,
                            right: r,
                            top: o,
                            bottom: a,
                            halfBaseSize: l
                        } = Ge(e);
                        t.beginPath(), t.moveTo(r, n), t.lineTo(i, a), t.lineTo(s, n), t.lineTo(Math.floor(i - l), n), t.lineTo(Math.floor(i - l), o), t.lineTo(Math.floor(i + l), o), t.lineTo(Math.floor(i + l), n), t.closePath(), t.fill(), t.stroke(), t.restore()
                    }(t, i);
                    break;
                case "arrow_right":
                    ! function(t, e) {
                        t.save();
                        const {
                            cx: i,
                            cy: n,
                            left: s,
                            right: r,
                            top: o,
                            bottom: a,
                            halfBaseSize: l
                        } = Ge(e);
                        t.beginPath(), t.moveTo(i, o), t.lineTo(r, n), t.lineTo(i, a), t.lineTo(i, Math.floor(n + l)), t.lineTo(s, Math.floor(n + l)), t.lineTo(s, Math.floor(n - l)), t.lineTo(i, Math.floor(n - l)), t.closePath(), t.fill(), t.stroke(), t.restore()
                    }(t, i);
                    break;
                case "arrow_left":
                    ! function(t, e) {
                        t.save();
                        const {
                            cx: i,
                            cy: n,
                            left: s,
                            right: r,
                            top: o,
                            bottom: a,
                            halfBaseSize: l
                        } = Ge(e);
                        t.beginPath(), t.moveTo(i, o), t.lineTo(s, n), t.lineTo(i, a), t.lineTo(i, Math.floor(n + l)), t.lineTo(r, Math.floor(n + l)), t.lineTo(r, Math.floor(n - l)), t.lineTo(i, Math.floor(n - l)), t.closePath(), t.fill(), t.stroke(), t.restore()
                    }(t, i);
                    break;
                case "arc_down":
                    ! function(t, e) {
                        const {
                            cx: i,
                            cy: n,
                            left: s,
                            right: r,
                            deflection: o,
                            arcWidth: a
                        } = ze(e);
                        t.save(), t.beginPath(), t.moveTo(r, n);
                        const l = i + o,
                            c = n + o,
                            u = i - o,
                            h = n + o;
                        t.bezierCurveTo(l, c, u, h, s, n), t.lineTo(s, n + a), t.bezierCurveTo(u, h + a, l, c + a, r, n + a), t.closePath(), t.fill(), t.stroke(), t.restore()
                    }(t, i);
                    break;
                case "arc_up":
                    ! function(t, e) {
                        const {
                            cx: i,
                            cy: n,
                            left: s,
                            right: r,
                            deflection: o,
                            arcWidth: a
                        } = ze(e);
                        t.save(), t.beginPath(), t.moveTo(r, n);
                        const l = i + o,
                            c = n - o,
                            u = i - o,
                            h = n - o;
                        t.bezierCurveTo(l, c, u, h, s, n), t.lineTo(s, n - a), t.bezierCurveTo(u, h - a, l, c - a, r, n - a), t.closePath(), t.fill(), t.stroke(), t.restore()
                    }(t, i);
                    break;
                case "thumbs_up":
                    ! function(t, e) {
                        t.save(), t.translate(e.x, e.y);
                        const i = Math.min(e.width, e.height) / 18;
                        t.scale(i, i), t.lineCap = "butt", t.save(), t.save(), t.beginPath(), t.moveTo(3.23, 8.96), t.lineTo(4.17, 8.96), t.bezierCurveTo(4.73, 8.81, 5.91, 6.45, 6.45, 5.82), t.bezierCurveTo(6.88, 5.33, 7.66, 5.09, 8.48, 3.7), t.bezierCurveTo(9.11, 2.78, 8.38, 1.49, 10.06, 1.17), t.bezierCurveTo(10.9, 1.01, 11.86, 2.61, 11.58, 4.11), t.bezierCurveTo(11.49, 4.6, 11.25, 5.14, 11.07, 5.54), t.bezierCurveTo(10.63, 6.5, 10.05, 6.58, 10.17, 7.23), t.bezierCurveTo(10.98, 7.25, 11.79, 7.32, 12.67, 7.27), t.bezierCurveTo(14.33, 7.17, 15.55, 9.08, 14.43, 10.38), t.bezierCurveTo(14.9, 11.12, 14.79, 12.33, 14.14, 12.81), t.bezierCurveTo(14.42, 13.58, 14.25, 14.45, 13.67, 14.8), t.bezierCurveTo(14.13, 16.77, 12.36, 16.87, 11.77, 16.84), t.lineTo(4.65, 16.84), t.bezierCurveTo(3.87, 16.77, 3.95, 16.28, 3.5, 16.27), t.bezierCurveTo(3.39, 16.26, 3.3, 16.26, 3.3, 16.26), t.bezierCurveTo(3.18, 16.26, 3.19, 15.7, 3.28, 15.7), t.bezierCurveTo(3.36, 15.69, 3.61, 15.68, 3.87, 15.71), t.bezierCurveTo(4.03, 15.79, 4.4, 16.26, 4.75, 16.27), t.lineTo(12.12, 16.26), t.bezierCurveTo(13.13, 16.27, 13.67, 15.11, 12.8, 14.56), t.bezierCurveTo(13.85, 14.53, 13.98, 12.98, 13.19, 12.6), t.bezierCurveTo(14.35, 12.49, 14.5, 10.65, 13.44, 10.41), t.bezierCurveTo(14.8, 9.97, 14.39, 7.59, 12.35, 7.83), t.bezierCurveTo(11.42, 7.77, 9.87, 7.94, 9.68, 7.62), t.bezierCurveTo(9.41, 6.82, 9.684, 6.45, 10.17, 5.88), t.bezierCurveTo(10.5, 5.46, 11.02, 4.6, 11.04, 3.64), t.bezierCurveTo(11.05, 2.5, 10.41, 1.23, 9.58, 1.98), t.bezierCurveTo(9.38, 2.21, 9.36, 3.47, 8.94, 4.02), t.bezierCurveTo(8.09, 5.52, 7.3, 5.66, 6.95, 6.15), t.bezierCurveTo(6.27, 6.86, 4.93, 9.52, 4.36, 9.52), t.bezierCurveTo(3.98, 9.52, 3.243, 9.52, 3.24, 9.52), t.bezierCurveTo(3.12, 9.52, 3.08, 8.98, 3.22, 8.95), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore()
                    }(t, i);
                    break;
                case "thumbs_down":
                    ! function(t, e) {
                        t.save(), t.translate(e.x, e.y);
                        const i = Math.min(e.width, e.height) / 18;
                        t.scale(i, i), t.lineCap = "butt", t.save(), t.save(), t.beginPath(), t.moveTo(14.77, 9.04), t.lineTo(13.82, 9.04), t.bezierCurveTo(13.27, 9.18, 12.09, 11.55, 11.54, 12.17), t.bezierCurveTo(11.12, 12.66, 10.34, 12.9, 9.52, 14.29), t.bezierCurveTo(8.88, 15.21, 9.62, 16.51, 7.93, 16.82), t.bezierCurveTo(7.1, 16.98, 6.13, 15.39, 6.42, 13.88), t.bezierCurveTo(6.51, 13.4, 6.75, 12.855, 6.93, 12.46), t.bezierCurveTo(7.37, 11.49, 7.95, 11.41, 7.82, 10.76), t.bezierCurveTo(7.02, 10.75, 6.21, 10.68, 5.33, 10.73), t.bezierCurveTo(3.66, 10.83, 2.44, 8.91, 3.57, 7.62), t.bezierCurveTo(3.09, 6.88, 3.2, 5.67, 3.85, 5.19), t.bezierCurveTo(3.57, 4.42, 3.74, 3.55, 4.33, 3.2), t.bezierCurveTo(3.87, 1.22, 5.64, 1.13, 6.22, 1.16), t.lineTo(13.35, 1.16), t.bezierCurveTo(14.12, 1.22, 14.04, 1.71, 14.49, 1.73), t.bezierCurveTo(14.6, 1.73, 14.7, 1.73, 14.7, 1.73), t.bezierCurveTo(14.82, 1.74, 14.8, 2.29, 14.72, 2.3), t.bezierCurveTo(14.63, 2.31, 14.39, 2.32, 14.12, 2.28), t.bezierCurveTo(13.96, 2.21, 13.6, 1.74, 13.25, 1.73), t.lineTo(5.88, 1.73), t.bezierCurveTo(4.86, 1.73, 4.33, 2.88, 5.19, 3.44), t.bezierCurveTo(4.14, 3.47, 4.01, 5.02, 4.8, 5.39), t.bezierCurveTo(3.64, 5.5, 3.49, 7.35, 4.55, 7.58), t.bezierCurveTo(3.19, 8.02, 3.6, 10.4, 5.64, 10.16), t.bezierCurveTo(6.57, 10.23, 8.12, 10.05, 8.32, 10.37), t.bezierCurveTo(8.58, 11.17, 8.32, 11.54, 7.82, 12.11), t.bezierCurveTo(7.49, 12.54, 6.97, 13.39, 6.96, 14.36), t.bezierCurveTo(6.94, 15.49, 7.59, 16.76, 8.41, 16.01), t.bezierCurveTo(8.62, 15.78, 8.63, 14.52, 9.05, 13.97), t.bezierCurveTo(9.9, 12.47, 10.69, 12.33, 11.04, 11.84), t.bezierCurveTo(11.72, 11.13, 13.06, 8.47, 13.637, 8.47), t.bezierCurveTo(14.01, 8.47, 14.75, 8.47, 14.75, 8.47), t.bezierCurveTo(14.87, 8.47, 14.91, 9.01, 14.77, 9.04), t.closePath(), t.fill(), t.stroke(), t.restore(), t.restore(), t.restore()
                    }(t, i)
            }
        }

        function je(t, e, i) {
            t.save();
            const n = e.centerX,
                s = e.centerY,
                r = Math.floor(Math.min(e.width / 2, e.height / 2));
            t.strokeStyle = t.fillStyle, t.lineWidth = Math.max(1, .1 * r), Fe(t, {
                x: n,
                y: s
            }, r, 0, 2 * Math.PI), t.textAlign = "center", t.font = "".concat(2 * r, "px Arial"), t.textBaseline = "middle", t.fillText(i, n, s + .1 * r), t.restore()
        }

        function Ge(t) {
            const e = Math.floor(t.centerX),
                i = Math.floor(t.centerY),
                {
                    width: n,
                    height: s
                } = t;
            let r = Math.floor(Math.min(n, s));
            return r *= .9, {
                cx: e,
                cy: i,
                left: Math.floor(e - r / 2),
                right: Math.floor(e + r / 2),
                top: Math.floor(i - r / 2),
                bottom: Math.floor(i + r / 2),
                halfBaseSize: .21 * r
            }
        }

        function ze(t) {
            const e = Math.floor(t.centerX),
                i = Math.floor(t.centerY),
                {
                    width: n,
                    height: s
                } = t;
            let r = Math.floor(Math.min(n, s));
            return r *= .9, {
                cx: e,
                cy: i,
                left: Math.floor(e - r / 2),
                right: Math.floor(e + r / 2),
                arcWidth: .075 * r,
                deflection: .3 * r
            }
        }

        function Ye() {
            const t = Rp().config.bypassSmoothing || !1;
            return {
                prolog: e => {
                    t && e.translate(.5, .5)
                },
                adjust: e => t ? X(e, 0) : e,
                epilog: e => {
                    t && e.translate(-.5, -.5)
                }
            }
        }

        function $e(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function qe(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        const Xe = {
                width: 1,
                color: "#000",
                dashStyle: "Solid"
            },
            Ke = {
                color: Zt.COLOR_TRANSPARENT
            };

        function Ze(t, e) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? $e(Object(i), !0).forEach((function(e) {
                        qe(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : $e(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }({
                line: Q(t, Xe, "annotationTraits", "line"),
                fill: Q(t, Ke, "annotationTraits", "fill"),
                zIndex: Q(t, 9, "annotationTraits", "zIndex")
            }, ni[e].defaults || {})
        }

        function Qe(t, e) {
            Object.keys(e).forEach(i => {
                i === Zt.LINE_DASH_PROP_NAME ? t.setLineDash(e[i]) : t[i] = e[i]
            })
        }

        function Je(t) {
            const e = D(De, Le);
            return {
                lineWidth: t.line.width,
                strokeStyle: e(t.line.color),
                fillStyle: e(t.fill.color),
                lineDash: xe(t.line.dashStyle)
            }
        }
        const ti = [Zt.AT_LINE, Zt.AT_ALLOW_PRICES_CHANGE_UI],
            ei = [Zt.AT_FILL],
            ii = [Zt.AT_LINE, Zt.AT_FILL],
            ni = {
                Line: {
                    editable: [Zt.AT_LINE, Zt.AT_SHOW_PRICES, Zt.AT_ALLOW_PRICES_CHANGE_UI, Zt.AT_SHOW_BARCOUNT, Zt.AT_SHOW_PERCENTDIFF, Zt.AT_EXTEND_PT_1, Zt.AT_EXTEND_PT_2, Zt.AT_MARKER],
                    defaults: {
                        [Zt.AT_SHOW_PRICES]: !1,
                        [Zt.AT_SHOW_BARCOUNT]: !1,
                        [Zt.AT_SHOW_PERCENTDIFF]: !1,
                        [Zt.AT_EXTEND_PT_1]: !1,
                        [Zt.AT_EXTEND_PT_2]: !1
                    }
                },
                Ray: {
                    editable: [Zt.AT_LINE, Zt.AT_SHOW_PRICES, Zt.AT_ALLOW_PRICES_CHANGE_UI, Zt.AT_SHOW_BARCOUNT, Zt.AT_SHOW_PERCENTDIFF, Zt.AT_EXTEND_PT_1, Zt.AT_EXTEND_PT_2, Zt.AT_MARKER],
                    defaults: {
                        [Zt.AT_SHOW_PRICES]: !1,
                        [Zt.AT_SHOW_BARCOUNT]: !1,
                        [Zt.AT_SHOW_PERCENTDIFF]: !1,
                        [Zt.AT_EXTEND_PT_1]: !1,
                        [Zt.AT_EXTEND_PT_2]: !0
                    }
                },
                GannLine: {
                    editable: [Zt.AT_LINE, Zt.AT_SHOW_PRICES, Zt.AT_ALLOW_PRICES_CHANGE_UI, Zt.AT_SHOW_BARCOUNT, Zt.AT_SHOW_PERCENTDIFF, Zt.AT_EXTEND_PT_1, Zt.AT_EXTEND_PT_2, Zt.AT_MARKER],
                    defaults: {
                        [Zt.AT_SHOW_PRICES]: !1,
                        [Zt.AT_SHOW_BARCOUNT]: !1,
                        [Zt.AT_SHOW_PERCENTDIFF]: !1,
                        [Zt.AT_EXTEND_PT_1]: !1,
                        [Zt.AT_EXTEND_PT_2]: !0
                    }
                },
                LongPosition: {
                    editable: [Zt.AT_LINE, Zt.AT_FILL, Zt.AT_FILL2, Zt.AT_FILL_TEXT, Zt.AT_COMPACT, Zt.AT_ACCOUNT_SIZE, Zt.AT_RISK, Zt.AT_RISK_IS_PERCENT, Zt.AT_ALLOW_PRICES_CHANGE_UI],
                    defaults: {
                        [Zt.AT_FILL]: {
                            color: "rgba(0, 160, 0, 0.2)"
                        },
                        [Zt.AT_FILL2]: {
                            color: "rgba(205, 0, 0, 0.2)"
                        },
                        [Zt.AT_FILL_TEXT]: {
                            color: "#fff"
                        },
                        [Zt.AT_COMPACT]: !1,
                        [Zt.AT_ACCOUNT_SIZE]: 1e3,
                        [Zt.AT_RISK]: 25,
                        [Zt.AT_RISK_IS_PERCENT]: !0
                    }
                },
                ShortPosition: {
                    editable: [Zt.AT_LINE, Zt.AT_FILL, Zt.AT_FILL2, Zt.AT_FILL_TEXT, Zt.AT_COMPACT, Zt.AT_ACCOUNT_SIZE, Zt.AT_RISK, Zt.AT_RISK_IS_PERCENT, Zt.AT_ALLOW_PRICES_CHANGE_UI],
                    defaults: {
                        [Zt.AT_FILL]: {
                            color: "rgba(205, 0, 0, 0.2)"
                        },
                        [Zt.AT_FILL2]: {
                            color: "rgba(0, 160, 0, 0.2)"
                        },
                        [Zt.AT_FILL_TEXT]: {
                            color: "#fff"
                        },
                        [Zt.AT_COMPACT]: !1,
                        [Zt.AT_ACCOUNT_SIZE]: 1e3,
                        [Zt.AT_RISK]: 25,
                        [Zt.AT_RISK_IS_PERCENT]: !0
                    }
                },
                VerticalLine: {
                    editable: [Zt.AT_LINE, Zt.AT_SHOW_TIMESTAMPS, Zt.AT_ALLOW_PRICES_CHANGE_UI],
                    defaults: {
                        [Zt.AT_SHOW_TIMESTAMPS]: !0
                    }
                },
                HorizontalLine: {
                    editable: [Zt.AT_LINE, Zt.AT_SHOW_PRICES, Zt.AT_ALLOW_PRICES_CHANGE_UI],
                    defaults: {
                        [Zt.AT_SHOW_PRICES]: !0
                    }
                },
                FiftyPercentLine: {
                    editable: [Zt.AT_LINE, Zt.AT_LINE_2, Zt.AT_SHOW_PRICES, Zt.AT_ALLOW_PRICES_CHANGE_UI],
                    defaults: {
                        [Zt.AT_SHOW_PRICES]: !0
                    }
                },
                FibonacciRetracement: {
                    editable: [Zt.AT_LINE, Zt.AT_SHOW_PRICES, Zt.AT_ALLOW_PRICES_CHANGE_UI, Zt.AT_SHOW_TRENDLINE, Zt.AT_FACTORS, Zt.AT_PRICES_ON_SCALE],
                    defaults: {
                        [Zt.AT_SHOW_PRICES]: !0,
                        [Zt.AT_SHOW_TRENDLINE]: !0,
                        [Zt.AT_FACTORS]: [-.618, -.236, 0, .236, .382, .5, .618, .786, 1, 1.272, 1.618, 2.618].map(t => ({
                            shown: 0 <= t && t <= 1,
                            value: t
                        })),
                        [Zt.AT_PRICES_ON_SCALE]: !1
                    }
                },
                FibonacciFan: {
                    editable: ti
                },
                FibonacciArcs: {
                    editable: ti
                },
                GannFan: {
                    editable: ti
                },
                SpeedResistanceFan: {
                    editable: ti
                },
                SpeedResistanceArcs: {
                    editable: ti
                },
                AndrewsPitchfork: {
                    editable: ti
                },
                Rectangle: {
                    editable: ii
                },
                Ellipse: {
                    editable: ii
                },
                TrendChannel: {
                    editable: ti
                },
                SymbolArrowUp: {
                    editable: ei
                },
                SymbolArrowDown: {
                    editable: ei
                },
                SymbolArrowRight: {
                    editable: ei
                },
                SymbolArrowLeft: {
                    editable: ei
                },
                SymbolArcDown: {
                    editable: ei
                },
                SymbolArcUp: {
                    editable: ei
                },
                SymbolThumbsUp: {
                    editable: ei
                },
                SymbolThumbsDown: {
                    editable: ei
                },
                SymbolOne: {
                    editable: ei
                },
                SymbolTwo: {
                    editable: ei
                },
                SymbolThree: {
                    editable: ei
                },
                SymbolFour: {
                    editable: ei
                },
                SymbolFive: {
                    editable: ei
                },
                SymbolQuestion: {
                    editable: ei
                },
                SymbolFishHook: {
                    editable: ei
                },
                FibonacciTimeZones: {
                    editable: [Zt.AT_LINE]
                },
                Text: {
                    editable: ei
                },
                ComputedText: {
                    editable: [Zt.AT_LINE, Zt.AT_FILL, Zt.AT_ALLOW_PRICES_CHANGE_UI]
                }
            };

        function si(t) {
            return t ? ni[t].editable : ni
        }
        var ri = i(11),
            oi = i(12),
            ai = i(13),
            li = i(14),
            ci = i(15);

        function ui(t) {
            switch (t) {
                case Zt.CHART_SCHEMA:
                    return ri;
                case Zt.STUDIES_SCHEMA:
                    return oi;
                case Zt.FIELDS_SCHEMA:
                    return ai;
                case Zt.ACCESSOR_SCHEMA:
                    return li;
                default:
                    throw new Error("Unknown schema name: ".concat(t))
            }
        }
        let hi = null;

        function di() {
            return hi || (hi = Ki(ci, Zt.STUDIES_SCHEMA))
        }

        function pi(t) {
            return J(di().find(e => e.id === t))
        }

        function fi(t) {
            const e = [en.Open, en.High, en.Low, en.Close].map(t => t.id),
                i = t.defaults.source && !e.includes(t.defaults.source);
            return ["CHAMF", "EMV", "FI", "MFI", "CLV", "OBVOL", "PVT", "NVI", "PVI", "VOL"].includes(t.id) || i
        }

        function mi(t, e) {
            const i = e.id;
            return !["GPMI", "GTPI", "CTM"].includes(i) || t === w.GBE
        }

        function gi() {
            const t = [p.Study, p.BalanceSheet, p.IncomeStatement];
            let e = t.reduce((t, e) => (t[e] = [], t), {});
            Object.keys(en).map(t => en[t]).filter(e => t.includes(e.category)).map(t => {
                e[t.category].push({
                    id: t.id,
                    name: t.name
                })
            });
            const i = Object.keys(l).filter(t => {
                    const e = parseInt(t);
                    if (Number.isFinite(e) && e < l.Renko) return l[e]
                }),
                n = Rp(),
                s = q(n) ? w[n.config.mode] : w.Unspecified,
                r = J(di()).filter(O(mi, s)).sort((t, e) => t.meta.overlay === e.meta.overlay ? t.meta.title < e.meta.title ? -1 : 1 : t.meta.overlay < e.meta.overlay ? 1 : -1),
                o = si(),
                a = Object.keys(o).map(t => ({
                    id: t,
                    options: o[t].editable
                }));
            return {
                studies: r,
                incomeStatements: e[p.IncomeStatement],
                balanceSheets: e[p.BalanceSheet],
                studyFields: e[p.Study],
                curveStyles: i,
                annotations: a
            }
        }
        var yi = i(16),
            vi = i.n(yi);

        function Ti(t, e, i) {
            return [].concat(vi()(e, t, i))
        }
        var bi = function(t, e, i) {
            let n = J(t),
                s = Ti(n, e),
                r = s.map(i);
            if (r.some(t => void 0 === t)) throw new Error("Forgot to return transformed value from accessor ".concat(i));
            return function t(e, i, n) {
                if (function(t) {
                    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || null === t
                }(e)) return e;
                if (Array.isArray(e)) return e.map(e => t(e, i, n)).filter(t => t !== Zt.NULL_OBJECT); {
                    let s = i.indexOf(e);
                    if (-1 !== s) return n[s];
                    let r = {};
                    for (let s in e) {
                        const o = e[s];
                        r[s] = t(o, i, n)
                    }
                    return r
                }
            }(n, s, r)
        };
        const Si = ["1D", "5D", "1M", "3M", "6M", "1Y", "5Y", "Max"];

        function Pi(t) {
            return 1 === t.length
        }

        function Ai(t) {
            return 1 === t.length
        }
        const wi = {
            ATRLTR: "REATRHI",
            ATRSTR: "REATRLO",
            PeriodMARng: "PeriodAdjATR",
            PeriodAdjATR: "FactorAdjATR"
        };
        const Ci = {
            BBANDS: {
                colors: ["#89211e"],
                fields: ["BOLLBM"],
                visible: !1
            },
            DONCHN: {
                colors: ["#ff6a00"],
                fields: ["DONMID"],
                visible: !1
            }
        };
        const xi = {
            _3to4: function(t) {
                const e = t.data.period;
                if (null !== e) {
                    const i = "Max" === e ? Zt.AUTOFIT_PERIOD : "P".concat(e),
                        n = Si.findIndex(t => t === e);
                    let s = {
                        unit: "Day"
                    };
                    n < 2 ? s = {
                        unit: "Intraday",
                        size: 15
                    } : n > 5 && (s = {
                        unit: "Month"
                    }), delete t.data.period, t.display.period = i, t.data.aggregation = s, t.version = 4
                }
                return t
            },
            _4to5: function(t) {
                const e = Ti(t, '..panes[0]..plots{.type === "Symbol"}[0].curves{.style === "Candlestick" && .attributes === "Hollow" }');
                if (1 === e.length) {
                    const t = e[0];
                    t.attributes.splice(t.attributes.indexOf("Hollow"), 1), 0 === t.attributes.length && delete t.attributes, t.style = "HollowCandles", t.colors = J(Zt.COLOR_DEFAULT_VARY)
                }
                return t.version = 5, t
            },
            _5to6: function(t) {
                const e = Ti(t, '..panes[0]..plots{.type === "Symbol"}[0]');
                if (1 === e.length) {
                    e[0].main = !0
                }
                return t.version = 6, t
            },
            _6to7: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                    studies: ["MAENV", "BBANDS", "KELCHN", "KELEXP", "DONCHN"]
                });
                return e.length > 0 && e.forEach(t => {
                    if (t.curves && t.curves.length > 1) {
                        const e = t.curves.length - 1,
                            i = De(t.curves[e].colors[0]);
                        i.a = .1, t.curves.push({
                            colors: [Le(i)],
                            fields: t.curves[0].fields.concat(t.curves[e].fields),
                            lineWidth: 0,
                            style: l[l.Ribbon]
                        })
                    }
                }), t.version = 7, t
            },
            _7to8: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && (.study === "ADX" || .study === "ADXMOD")}');
                return e.length > 0 && e.forEach(t => {
                    if (t.inputs && 1 === t.inputs.length && t.inputs[0].name === Zt.INPUT_PERIOD) {
                        const e = t.inputs[0].value;
                        t.inputs = [{
                            name: "AdxSmoothing",
                            value: e
                        }, {
                            name: "DiLength",
                            value: e
                        }]
                    }
                }), t.version = 8, t
            },
            _8to9: function(t) {
                const e = Ti(t, ".display.yAxis");
                if (Pi(e)) {
                    if (!Pi(Ti(e, ".minorGridLines"))) {
                        const t = Ti(Rp().template, ".display.yAxis.minorGridLines");
                        Pi(t) && (e[0].minorGridLines = t[0])
                    }
                }
                return t.version = 9, t
            },
            _9to10: function(t) {
                const e = ".display.navigator",
                    i = Ti(t, e);
                if (Ai(i)) {
                    if (!Ai(Ti(i, ".enabled"))) {
                        const t = Ti(Rp().template, e + ".enabled");
                        Ai(t) && (i[0].enabled = t[0])
                    }
                }
                return t.version = 10, t
            },
            _10to11: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === "TCHN"}');
                return e.length > 0 && e.forEach(t => {
                    if (t.inputs && 1 === t.inputs.length && t.inputs[0].name === Zt.INPUT_PERIOD) {
                        const e = t.inputs[0].value;
                        t.inputs = [{
                            name: "PeriodUpper",
                            value: e
                        }, {
                            name: "PeriodLower",
                            value: e
                        }, {
                            name: "Range",
                            value: "High/Low"
                        }]
                    }
                }), t.version = 11, t
            },
            _11to12: function(t) {
                const e = Ti(t, ".display.navigator");
                if (1 === e.length) {
                    const t = e[0];
                    t.visible = t.enabled && t.visible || !1, delete t.enabled
                }
                return t.version = 12, t
            },
            _12to13: function(t) {
                return Ti(t, "..annotations").forEach(t => {
                    if ("AndrewsPitchfork" === t.id) {
                        const [e, i, n] = t.points;
                        t.points = [i, e, n]
                    }
                }), t.version = 13, t
            },
            _13to14: function(t) {
                const e = Ti(t, ".display");
                if (1 === e.length) {
                    const t = e[0];
                    t.scrollbar.visible = t.navigator.visible || !1, delete t.navigator
                }
                return t.version = 14, t
            },
            _14to15: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                        studies: ["ATRLTR", "ATRSTR"]
                    }),
                    i = t => wi.hasOwnProperty(t) ? wi[t] : t;
                return e.length > 0 && e.forEach(t => {
                    t.curves && t.curves[0].fields && (t.curves[0].fields = t.curves[0].fields.map(i)), t.inputs && (t.inputs = t.inputs.map(t => (t.name = i(t.name), t))), t.study = i(t.study)
                }), t.version = 15, t
            },
            _15to16: function(t) {
                const e = Ti(t, "..annotations"),
                    i = t => ({
                        shown: !1,
                        value: t
                    }),
                    n = [-.618, -.236].map(i),
                    s = [1.272, 1.618, 2.618].map(i);
                return e.forEach(t => {
                    if ("FibonacciRetracement" === t.id) {
                        const e = t.traits;
                        if (q(e) && q(e[Zt.AT_FACTORS])) {
                            const t = Ze(null, "FibonacciRetracement")[Zt.AT_FACTORS],
                                i = e[Zt.AT_FACTORS].map((e, i) => {
                                    const n = !q(e);
                                    return {
                                        shown: !n,
                                        value: n ? t[i + 2].value : e
                                    }
                                });
                            e[Zt.AT_FACTORS] = n.concat(i).concat(s)
                        }
                    }
                }), t.version = 16, t
            },
            _16to17: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                    studies: ["STOCHF", "STOCHM", "STOCHS"]
                });
                return e.length > 0 && e.forEach(t => {
                    const e = "STOCHM" === t.study,
                        i = pi(e ? "STOCHS" : t.study);
                    q(t.inputs) ? t.inputs.push({
                        name: "Smoothing",
                        value: e ? "EMA" : "MA"
                    }) : t.inputs = i.defaults.inputs.map(t => ("Smoothing" === t.name && e && (t.value = "EMA"), t)), e && (t.study = "STOCHS")
                }), t.version = 17, t
            },
            _17to18: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                    studies: ["BBANDS", "DONCHN"]
                });
                return e.length > 0 && e.forEach(t => {
                    if (q(t.curves) && 3 === t.curves.length) {
                        const e = J(Ci[t.study]);
                        t.curves.push(e)
                    }
                }), t.version = 18, t
            },
            _18to19: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                    studies: ["REATRHI", "REATRLO"]
                });
                return e.length > 0 && e.forEach(t => {
                    t.inputs && 4 === t.inputs.length && t.inputs.push({
                        name: "FactorATR",
                        value: 2
                    })
                }), t.version = 19, t
            },
            _19to20: function(t) {
                const e = Ti(t, ".display.yAxis");
                if (1 === e.length) {
                    const t = e[0];
                    q(t.showLastValue) && (t.showLastValue = t.showLastValue ? "All" : "None")
                }
                return t.version = 20, t
            },
            _20to21: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                    studies: ["CTMF", "TPI"]
                });
                return e.length > 0 && e.forEach(t => {
                    const e = "CTMF" === t.study ? "GPMI" : "GTPI";
                    t.study = e, t.curves && t.curves.length > 0 && (t.curves.splice(1, 1), t.curves[0].fields = [e])
                }), t.version = 21, t
            },
            _21to22: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === "AWEOSC"}');
                return e.length > 0 && e.forEach(t => {
                    if (t.curves && t.curves.length > 0 && t.curves[0].zones) {
                        const e = t.curves[0];
                        delete e.zones, e.varyColorPerBar = !0
                    }
                }), t.version = 22, t
            },
            _22to23: function(t) {
                const e = t.display.yAxis;
                return delete e.minPadding, delete e.maxPadding, t.version = 23, t
            },
            _23to24: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === "GTPI"}');
                return e.length > 0 && e.forEach(t => {
                    if (t.curves && t.curves.length > 0) {
                        const e = t.curves[0];
                        e.colors = ["#ef4226", "#2642ef"], e.zones = [{
                            value: 50,
                            colors: 1,
                            gradient: "linDarken"
                        }, {
                            colors: 1,
                            gradient: "linLighten"
                        }]
                    }
                }), t.version = 24, t
            },
            _24to25: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === "MOM"}');
                if (e.length > 0) {
                    const t = pi("MOM");
                    e.forEach(e => {
                        e.curves && 1 === e.curves.length && 2 === t.defaults.curves.length && e.curves.push(t.defaults.curves[1]), e.inputs && 1 === e.inputs.length && 2 === t.defaults.inputs.length && e.inputs.push(t.defaults.inputs[1])
                    })
                }
                return t.version = 25, t
            },
            _25to26: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === $studies}', {
                    studies: ["MA", "MAEXP"]
                });
                return e.length > 0 && e.forEach(t => {
                    t.source && delete t.source, t.inputs && 1 === t.inputs.length ? t.inputs.push({
                        name: "Source",
                        value: "Close"
                    }) : t.inputs = pi(t.study).defaults.inputs
                }), t.version = 26, t
            },
            _26to27: function(t) {
                const e = Ti(t, '..plots{.type === "Study" && .study === "ATR"}');
                if (e.length > 0) {
                    const t = pi("ATR");
                    e.forEach(e => {
                        e.curves && 1 === e.curves.length && 2 === t.defaults.curves.length && e.curves.push(t.defaults.curves[1]), e.inputs && 2 === e.inputs.length && 3 === t.defaults.inputs.length && e.inputs.push(t.defaults.inputs[2])
                    })
                }
                return t.version = 27, t
            },
            _27to28: function(t) {
                const e = Ti(t, '..plots{.type === "Study"}'),
                    i = pi("ALLG");
                return e.length > 0 && e.forEach(t => {
                    delete t.shift, "ALLG" === t.study && t.curves && t.curves.forEach(t => {
                        const e = (t => {
                            const e = i.defaults.curves.find(e => e.fields[0] === t.fields[0]);
                            return q(e) ? e.shift : null
                        })(t);
                        q(e) && (t.shift = e)
                    })
                }), t.version = 28, t
            },
            _28to29: function(t) {
                const e = Zi(bi(t, '..plots{.type === "Study" && .study === "DEMARK"}', t => Zt.NULL_OBJECT));
                return e.version = 29, e
            },
            _29to30: function(t) {
                const e = Zi(bi(t, '..plots{.type === "Study" && .study === "ULTOSC"}', t => Zt.NULL_OBJECT));
                return e.version = 30, e
            }
        };

        function Mi(t, e) {
            if (e === Zt.CHART_SCHEMA) {
                const i = Ti(ui(e), ".properties.version.minimum")[0],
                    n = t.version;
                if (n < i) return function(t, e, i) {
                    let n = t;
                    for (; e < i;) {
                        n = (0, xi["_".concat(e, "to").concat(e + 1)])(n), e += 1
                    }
                    return n
                }(t, n, i)
            }
            return t
        }

        function Ei(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = gt(e);
            return i.getFullYear() === n.getFullYear()
        }

        function Oi(t, e) {
            mt(1, arguments);
            var i = e || {},
                n = i.locale,
                s = n && n.options && n.options.weekStartsOn,
                r = null == s ? 0 : St(s),
                o = null == i.weekStartsOn ? r : St(i.weekStartsOn);
            if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var a = gt(t),
                l = a.getDay(),
                c = (l < o ? 7 : 0) + l - o;
            return a.setDate(a.getDate() - c), a.setHours(0, 0, 0, 0), a
        }

        function Di(t, e, i) {
            mt(2, arguments);
            var n = Oi(t, i),
                s = Oi(e, i);
            return n.getTime() === s.getTime()
        }

        function Li(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = gt(e);
            return i.getFullYear() === n.getFullYear() && i.getMonth() === n.getMonth()
        }

        function _i(t) {
            mt(1, arguments);
            var e = gt(t),
                i = e.getMonth(),
                n = i - i % 3;
            return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e
        }

        function Ii(t, e) {
            mt(2, arguments);
            var i = _i(t),
                n = _i(e);
            return i.getTime() === n.getTime()
        }

        function Ni(t) {
            let e = function(t) {
                return {
                    unit: Q(t, "Day", "unit"),
                    size: Q(t, 1, "size"),
                    spec: Q(t, "None", "spec"),
                    isContractVolume: Q(t, !1, "isContractVolume"),
                    dividendsAdjust: Q(t, !1, "dividendsAdjust"),
                    backAdjust: Q(t, !1, "backAdjust"),
                    daysToExpiration: Q(t, 1, "daysToExpiration"),
                    contractRoll: Q(t, "expiration", "contractRoll")
                }
            }(t);
            return new Vi(c[e.unit], e.size, u[e.spec], e.isContractVolume, e.dividendsAdjust, e.backAdjust, e.daysToExpiration, e.contractRoll)
        }

        function Ri(t, e) {
            return vt(t, e) && ki(t, e)
        }

        function Hi(t, e) {
            return Di(t, e) && ki(t, e)
        }

        function ki(t, e) {
            return Li(t, e) && Ei(t, e)
        }

        function Fi(t, e) {
            return Ii(t, e) && Ei(t, e)
        }

        function Ui(t, e) {
            return +t == +e
        }
        class Vi {
            constructor(t = c.Day, e = 1, i = u.None, n = !1, s = !1, r = !1, o = 1, a = "expiration") {
                this.unit = t, this.size = e, this.spec = i, this.isContractVolume = n, this.dividendsAdjust = s, this.backAdjust = r, this.daysToExpiration = o, this.contractRoll = a
            }
            isKnownMinute(t) {
                return -1 !== Vi.KNOWN_MINUTES.indexOf(t)
            }
            getHashKey() {
                return "[".concat(this.unit, ":").concat(this.size, ":").concat(this.spec, ":").concat(this.isContractVolume, ":").concat(this.dividendsAdjust, ":").concat(this.backAdjust, ":").concat(this.daysToExpiration, ":").concat(this.contractRoll, "]")
            }
            unitToString() {
                let t = "";
                switch (this.unit) {
                    case c.Tick:
                        t = "Tick";
                        break;
                    case c.Intraday:
                        t = this.isKnownMinute(this.size) ? 60 === this.size ? "Hourly" : "".concat(this.size < 10 ? " " : "").concat(this.size, " minute").concat(this.size > 1 ? "s" : "") : "Custom Intraday";
                        break;
                    case c.Day:
                        t = "Daily";
                        break;
                    case c.Week:
                        t = "Weekly";
                        break;
                    case c.Month:
                        t = "Monthly";
                        break;
                    case c.Quarter:
                        t = "Quarterly";
                        break;
                    case c.Year:
                        t = "Yearly"
                }
                return t
            }
            describe() {
                let t = this.unitToString();
                switch (this.spec) {
                    case u.Nearest:
                        t += " Nearest";
                        break;
                    case u.Continue:
                        t += " Continue";
                        break;
                    case u.PerCount:
                        t = "Ticks Per Bar";
                        break;
                    case u.PerVolume:
                        t = "Volume Per Bar";
                        break;
                    case u.PerRange:
                        t = "Range Per Bar";
                        break;
                    case u.PerSeconds:
                        t = "Seconds Per Bar";
                        break;
                    case u.None:
                    case u.FormT:
                }
                return t
            }
            get isEndOfDay() {
                return !this.isTick && !this.isIntraday
            }
            get isTick() {
                return this.unit === c.Tick
            }
            get isIntraday() {
                return this.unit === c.Intraday
            }
            get isMultiContract() {
                return this.isEndOfDay && (this.spec === u.Nearest || this.spec === u.Continue)
            }
        }

        function Bi(t) {
            delete t.display.chart.bar
        }

        function Wi(t) {
            q(t.display.xAxis.visibleRange) && delete t.display.xAxis.visibleRange, q(t.data.range) && delete t.data.range, delete t.checkRange
        }

        function ji(t) {
            zi(t.display.period) && delete t.display.period
        }

        function Gi(t) {
            q(t.display.density) && delete t.display.density
        }
        Vi.KNOWN_MINUTES = [1, 2, 3, 5, 10, 15, 30, 60];

        function zi(t) {
            return q(t) && t !== Zt.AUTOFIT_PERIOD
        }
        var Yi = function(t) {
                const e = Ti(t, "..axes{.annotations{.points{!.price || !.time}}}");
                e.length > 0 && e.forEach(t => {
                    const e = t.annotations.map(t => {
                        const e = t.points.find(t => q(t.price)),
                            i = t.points.find(t => q(t.time));
                        return q(e) && q(i) ? (t.points.forEach(t => {
                            q(t.price) || (t.price = e.price), q(t.time) || (t.time = i.time)
                        }), t) : null
                    }).filter(t => q(t));
                    e.length > 0 ? t.annotations = e : delete t.annotations
                });
                const i = Ti(t, "..panes"),
                    n = t => q(t.height) ? t.height : 1,
                    s = i.map(t => n(t)),
                    r = Math.min(...s),
                    o = r < .01 ? 5 / r : 1;
                i.forEach(t => t.height = X(o * n(t), 4));
                const a = Rp().config.showResizeHandles || !1;
                t.display.xAxis.resizeHandles = a;
                let l = Rp().config.scrollBehavior || "wheel+shift";
                Object.values(x).filter(t => "string" == typeof t).includes(l) || (l = "wheel+shift"), t.display.scrollBehavior = l;
                const c = Ti(t, '..plots{.type === "Study" && .study === "RSI"}');
                var u;
                return c.length > 0 && c.forEach(t => {
                    if (q(t.bands) && t.bands.length > 0) {
                        const e = t.inputs && 1 === t.inputs.length && t.inputs[0].name === Zt.INPUT_PERIOD ? t.inputs[0].value : null,
                            i = pi("RSI").defaults;
                        t.curves = i.curves, t.inputs = i.inputs, q(e) && (t.inputs[0].value = e), delete t.bands, t.levels = i.levels
                    }
                }), (u = t).display.density ? (ji(u), Wi(u)) : zi(u.display.period) && Wi(u),
                    function(t) {
                        const e = Q(t.display, null, "chart", "bar");
                        if (q(e)) {
                            const [t, i] = ut(e.width || 0, e.spacing || 0, Zt.MINIMUM_BAR_WIDTH, Zt.MAXIMUM_BAR_WIDTH);
                            e.width = t, e.spacing = i
                        }
                    }(t),
                    function(t) {
                        t.display.period && "YTD" === t.display.period && delete t.display.period
                    }(t),
                    function(t) {
                        const e = Ti(t, "..annotations{.traits.fill.color === null}");
                        e.length > 0 && e.forEach(t => {
                            t.traits.fill.color = "rgba(0, 0, 0, 0)"
                        })
                    }(t),
                    function(t) {
                        const {
                            from: e,
                            to: i
                        } = t.display.xAxis.visibleRange || {}, n = null === e, s = null === i;
                        n && delete t.display.xAxis.visibleRange.from, s && delete t.display.xAxis.visibleRange.to, n && s && delete t.display.xAxis.visibleRange
                    }(t), t
            },
            $i = i(17),
            qi = i.n($i);
        let Xi = null;

        function Ki(t, e) {
            null === Xi && (Xi = qi()(), Xi.defaultOptions.useDefault = !0, [Zt.CHART_SCHEMA, Zt.STUDIES_SCHEMA, Zt.FIELDS_SCHEMA, Zt.ACCESSOR_SCHEMA].forEach(t => {
                Xi.addSchema(t, ui(t))
            }));
            let i = Mi(t, e);
            (function(t) {
                return t === Zt.CHART_SCHEMA
            })(e) && (Ti(i, '..plots{.type==="'.concat(y[y.Study], '"}')).forEach(t => {
                const e = pi(t.study);
                q(e) && it(t, e.defaults)
            }), i = Yi(i));
            let n = Xi.validate(e, i);
            if (!!n) throw new Error("Document not valid according to schema ".concat(e, "; error is ").concat(JSON.stringify(n, null, 4)));
            return function(t) {
                return t === Zt.ACCESSOR_SCHEMA
            }(e) && function(t) {
                const {
                    id: e,
                    context: i
                } = t, n = t => q(i[t]), s = (t, e) => {
                    if (!q(i[t])) throw new Error("".concat(e, " plot accessor: you must provide '").concat(t, "'"))
                }, r = t => {
                    if (n("placement") && "clone" === i.placement && !n("cloneIndex")) throw new Error("".concat(t, " plot accessor: when placement is 'clone', you must provide 'cloneIndex'."))
                };
                if ("Plot" === e) switch (i.id) {
                    case "Add":
                        switch (s("type", "Add"), i.type) {
                            case "Study":
                                s("studyId", "Add"), r("Add");
                                break;
                            case "IncomeStatement":
                            case "BalanceSheet":
                                s("fundamentalId", "Add");
                                break;
                            case "Expression":
                                s("expression", "Add")
                        }
                        break;
                    case "Get":
                        if (!n("main") && !n("type")) throw new Error("Get plot accessor: you must provide either 'main' or 'type'");
                        break;
                    case "Delete":
                        s("type", "Delete"), s("index", "Delete");
                        break;
                    case "Update":
                        switch (s("type", "Update"), s("index", "Update"), r("Update"), i.type) {
                            case "Forward":
                                if (!q(i.forward)) {
                                    if (!q(i.curves) || !q(i.offsets)) throw new Error("Update forward plot accessor: you must provide either 'forward' or 'curves' and 'offsets'");
                                    if (i.curves.length !== i.offsets.length) throw new Error("Update forward plot accessor: you must provide same number of elements for 'curves' and 'offsets'")
                                }
                                break;
                            case "Seasonal":
                                if (!q(i.seasonal)) {
                                    if (!q(i.curves) || !q(i.offsets)) throw new Error("Update seasonal plot accessor: you must provide either 'seasonal' or 'curves' and 'offsets'");
                                    if (i.curves.length !== i.offsets.length && i.curves.length !== i.offsets.length + 1) throw new Error("Update seasonal plot accessor: you must provide either same number of elements for 'curves' and 'offsets' or one curve more")
                                }
                                break;
                            case "Study": {
                                s("studyId", "Update"), r("Update");
                                const t = t => t.reduce((t, e) => t.concat(e.fields), []),
                                    e = pi(i.studyId),
                                    n = t => "Update study plot accessor: you must provide same number of elements for '".concat(t, "' of the study as defined in the taxonomy"),
                                    o = t => "Update study plot accessor: incoming list of ".concat(t, " is different from the ").concat(t, " as defined in the taxonomy");
                                if (!q(i.curves) || i.curves.length !== e.defaults.curves.length) throw new Error(n("curves"));
                                const a = t(i.curves);
                                if (0 !== F(t(e.defaults.curves), a).length) throw new Error(o("fields"));
                                break
                            }
                        }
                }
            }(i), i
        }

        function Zi(t) {
            let e = bi(t, "..axes{!.plots}", t => Zt.NULL_OBJECT);
            return bi(e, "..panes{!.axes}", t => Zt.NULL_OBJECT)
        }
        var Qi = i(18);
        class Ji {
            constructor(t, e = h.Number, i = p.Common, n = null, s = d.FromMetaData, r = null) {
                this.id = t, this.type = e, this.category = i, this.name = n, this.format = s, null === n && (this.name = this.id.replace(/([A-Z])/g, " $1").trim()), this.shortName = r || this.name
            }
        }
        let tn = null;
        const en = function() {
                if (!tn) {
                    tn = {}, Ki(Qi, Zt.FIELDS_SCHEMA).map(t => new Ji(t.id, h[t.type], p[t.category], t.name, d[t.format], t.shortName)).forEach(t => {
                        tn[t.id] = t
                    })
                }
                return tn
            }(),
            nn = {
                CH_ALL: "ch",
                CH_RECREATED: "ch.recreated",
                CH_ANNOTATIONCHANGED: "ch.annotationchanged",
                CH_ANNNEEDSCONTEXTMENU: "ch.annneedscontextmenu",
                CH_CHTNEEDSCONTEXTMENU: "ch.chtneedscontextmenu",
                CH_ANNSELECTIONCHANGED: "ch.annselectionchanged",
                CH_ANNPOINTPICKED: "ch.annpointpicked",
                CH_PANEHEIGHTSCHANGED: "ch.paneheightschanged",
                CH_PANESREORDERED: "ch.panesreordered",
                CH_NODATAFORMAINSYMBOL: "ch.nodataformainsymbol",
                CH_CARDPLOTCLICKED: "ch.cardplotclicked",
                CH_CARDPLOTREMOVED: "ch.cardplotremoved",
                CH_TOOLTIPCHANGED: "ch.tooltipchanged",
                CH_SHUTDOWN: "ch.shutdown",
                CH_ZOOMCHANGED: "ch.zoomchanged",
                CH_ALL_DATA_PROJECTED: "ch.all.data.projected",
                CH_API_ACTIONS_RECEIVED: "ch.api.actions.received",
                TS_ALL: "ts",
                TS_LOADING: "ts.loading",
                TS_MANYCHANGED: "ts.manychaged",
                TS_DATAPOINTADDED: "ts.datapointadded",
                TS_DATAPOINTCHANGED: "ts.datapointchanged",
                TS_EVENTSCHANGED: "ts.eventschanged",
                TS_LAST_POINT_UPDATED: "ts.last.point.updated",
                MD_ALL: "md",
                MD_CHANGED: "md.changed",
                RT_ALL: "rt",
                RT_QUOTE: "rt.quote",
                RT_TRADE: "rt.trade",
                RT_VOLUME: "rt.volume",
                TL_CHANGED: "tl.changed",
                ME_ALL: "me",
                ME_MOUSE_OUT_SERIES: "me.mouse.out.series",
                ME_MOUSE_OVER_SERIES: "me.mouse.over.series"
            };
        class sn {
            constructor(t) {
                this.symbol = t, this.storage = {}, this.isValid = !1
            }
            addFields(...t) {
                this.fields = function(t, e) {
                    let i = t ? t.slice() : new Array;
                    return e.forEach(t => {
                        i.includes(t) || i.push(t)
                    }), i
                }(this.fields, t), this.fields.forEach(t => {
                    this.storage.hasOwnProperty(t.id) || (this.storage[t.id] = null)
                })
            }
            update(t, e) {
                if (this.hasField(t)) {
                    const i = this.storage[t.id];
                    return this.storage[t.id] = e, i !== e
                }
            }
            hasField(t) {
                return this.fields.includes(t)
            }
            getValue(t) {
                return this.hasField(t) ? this.storage[t.id] : null
            }
            shutdown() {}
        }
        class rn extends sn {
            async ready() {
                return !1
            }
        }
        const on = {
                previousClose: en.PreviousClose,
                previousHigh: en.PreviousHigh,
                previousLow: en.PreviousLow,
                weeklyPreviousClose: en.WeekPreviousClose,
                weeklyPreviousHigh: en.WeekPreviousHigh,
                weeklyPreviousLow: en.WeekPreviousLow,
                monthlyPreviousClose: en.MonthPreviousClose,
                monthlyPreviousHigh: en.MonthPreviousHigh,
                monthlyPreviousLow: en.MonthPreviousLow
            },
            an = Object.values(on),
            ln = Object.keys(on);
        class cn extends sn {
            async ready() {
                return Xt.call(this, async () => {
                    const t = Rp().getMetaDataSource().getMetaData(this.symbol);
                    return this.isValid = await t.ready(), this.isValid
                })
            }
            shutdown() {}
            getValue(t) {
                return this.hasField(t) && an.includes(t) && null === super.getValue(t) && !q(this.triedFetchingPreviousValues) && this.supplementPreviousValues(), super.getValue(t)
            }
            supplementPreviousValues() {
                this.triedFetchingPreviousValues = !0, Lp("ondemand", "/getQuote.json?symbols=".concat(this.symbol, "&fields=").concat(ln.join(","))).then(t => {
                    try {
                        const e = JSON.parse(t);
                        if (200 === e.status.code && 1 === e.results.length) {
                            const t = e.results[0];
                            ln.forEach(e => this.update(on[e], t[e])), Rp().getRecordSource().subject.next({
                                topic: nn.RT_QUOTE,
                                data: {
                                    symbol: this.symbol
                                }
                            })
                        }
                    } catch (t) {}
                })
            }
        }
        class un extends sn {
            addOptionalField(t, e) {
                q(e) && (this.addFields(t), this.update(t, e))
            }
            async ready() {
                return Xt.call(this, async () => {
                    const t = Bt("#".concat(Zt.INLINE_DATA_ELEMENT_ID)),
                        e = JSON.parse(t);
                    if (e.hasOwnProperty(this.symbol)) {
                        const t = e[this.symbol].quote;
                        this.update(en.Open, t.open), this.update(en.High, t.high), this.update(en.Low, t.low), this.update(en.Close, t.close), this.update(en.PreviousClose, t.previousClose), this.update(en.Volume, t.volume), ln.filter(t => "previousClose" !== t).forEach(e => {
                            this.addOptionalField(on[e], t[e])
                        }), this.isValid = !0
                    } else this.isValid = !1;
                    return this.isValid
                })
            }
        }

        function hn(t, e) {
            return i => i.topic === t && i.data.symbol === e
        }
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var dn = function(t, e) {
            return (dn = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        };

        function pn(t, e) {
            function i() {
                this.constructor = t
            }
            dn(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }

        function fn(t) {
            return "function" == typeof t
        }
        var mn = !1,
            gn = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    t && (new Error).stack;
                    mn = t
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return mn
                }
            };

        function yn(t) {
            setTimeout((function() {
                throw t
            }), 0)
        }
        var vn = {
                closed: !0,
                next: function(t) {},
                error: function(t) {
                    if (gn.useDeprecatedSynchronousErrorHandling) throw t;
                    yn(t)
                },
                complete: function() {}
            },
            Tn = function() {
                return Array.isArray || function(t) {
                    return t && "number" == typeof t.length
                }
            }();

        function bn(t) {
            return null !== t && "object" == typeof t
        }
        var Sn = function() {
                function t(t) {
                    return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                        return e + 1 + ") " + t.toString()
                    })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            Pn = function() {
                function t(t) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                var e;
                return t.prototype.unsubscribe = function() {
                    var e;
                    if (!this.closed) {
                        var i = this._parentOrParents,
                            n = this._unsubscribe,
                            s = this._subscriptions;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, i instanceof t) i.remove(this);
                        else if (null !== i)
                            for (var r = 0; r < i.length; ++r) {
                                i[r].remove(this)
                            }
                        if (fn(n)) try {
                            n.call(this)
                        } catch (t) {
                            e = t instanceof Sn ? An(t.errors) : [t]
                        }
                        if (Tn(s)) {
                            r = -1;
                            for (var o = s.length; ++r < o;) {
                                var a = s[r];
                                if (bn(a)) try {
                                    a.unsubscribe()
                                } catch (t) {
                                    e = e || [], t instanceof Sn ? e = e.concat(An(t.errors)) : e.push(t)
                                }
                            }
                        }
                        if (e) throw new Sn(e)
                    }
                }, t.prototype.add = function(e) {
                    var i = e;
                    if (!e) return t.EMPTY;
                    switch (typeof e) {
                        case "function":
                            i = new t(e);
                        case "object":
                            if (i === this || i.closed || "function" != typeof i.unsubscribe) return i;
                            if (this.closed) return i.unsubscribe(), i;
                            if (!(i instanceof t)) {
                                var n = i;
                                (i = new t)._subscriptions = [n]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    var s = i._parentOrParents;
                    if (null === s) i._parentOrParents = this;
                    else if (s instanceof t) {
                        if (s === this) return i;
                        i._parentOrParents = [s, this]
                    } else {
                        if (-1 !== s.indexOf(this)) return i;
                        s.push(this)
                    }
                    var r = this._subscriptions;
                    return null === r ? this._subscriptions = [i] : r.push(i), i
                }, t.prototype.remove = function(t) {
                    var e = this._subscriptions;
                    if (e) {
                        var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                    }
                }, t.EMPTY = ((e = new t).closed = !0, e), t
            }();

        function An(t) {
            return t.reduce((function(t, e) {
                return t.concat(e instanceof Sn ? e.errors : e)
            }), [])
        }
        var wn = function() {
                return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
            }(),
            Cn = function(t) {
                function e(i, n, s) {
                    var r = t.call(this) || this;
                    switch (r.syncErrorValue = null, r.syncErrorThrown = !1, r.syncErrorThrowable = !1, r.isStopped = !1, arguments.length) {
                        case 0:
                            r.destination = vn;
                            break;
                        case 1:
                            if (!i) {
                                r.destination = vn;
                                break
                            }
                            if ("object" == typeof i) {
                                i instanceof e ? (r.syncErrorThrowable = i.syncErrorThrowable, r.destination = i, i.add(r)) : (r.syncErrorThrowable = !0, r.destination = new xn(r, i));
                                break
                            }
                        default:
                            r.syncErrorThrowable = !0, r.destination = new xn(r, i, n, s)
                    }
                    return r
                }
                return pn(e, t), e.prototype[wn] = function() {
                    return this
                }, e.create = function(t, i, n) {
                    var s = new e(t, i, n);
                    return s.syncErrorThrowable = !1, s
                }, e.prototype.next = function(t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function(t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function(t) {
                    this.destination.next(t)
                }, e.prototype._error = function(t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function() {
                    var t = this._parentOrParents;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                }, e
            }(Pn),
            xn = function(t) {
                function e(e, i, n, s) {
                    var r, o = t.call(this) || this;
                    o._parentSubscriber = e;
                    var a = o;
                    return fn(i) ? r = i : i && (r = i.next, n = i.error, s = i.complete, i !== vn && (fn((a = Object.create(i)).unsubscribe) && o.add(a.unsubscribe.bind(a)), a.unsubscribe = o.unsubscribe.bind(o))), o._context = a, o._next = r, o._error = n, o._complete = s, o
                }
                return pn(e, t), e.prototype.next = function(t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        gn.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function(t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber,
                            i = gn.useDeprecatedSynchronousErrorHandling;
                        if (this._error) i && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                        else if (e.syncErrorThrowable) i ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : yn(t), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), i) throw t;
                            yn(t)
                        }
                    }
                }, e.prototype.complete = function() {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var i = function() {
                                return t._complete.call(t._context)
                            };
                            gn.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, i), this.unsubscribe()) : (this.__tryOrUnsub(i), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function(t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (t) {
                        if (this.unsubscribe(), gn.useDeprecatedSynchronousErrorHandling) throw t;
                        yn(t)
                    }
                }, e.prototype.__tryOrSetError = function(t, e, i) {
                    if (!gn.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        e.call(this._context, i)
                    } catch (e) {
                        return gn.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (yn(e), !0)
                    }
                    return !1
                }, e.prototype._unsubscribe = function() {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(Cn);
        var Mn = function() {
            return "function" == typeof Symbol && Symbol.observable || "@@observable"
        }();

        function En() {}

        function On(t) {
            return t ? 1 === t.length ? t[0] : function(e) {
                return t.reduce((function(t, e) {
                    return e(t)
                }), e)
            } : En
        }
        var Dn = function() {
            function t(t) {
                this._isScalar = !1, t && (this._subscribe = t)
            }
            return t.prototype.lift = function(e) {
                var i = new t;
                return i.source = this, i.operator = e, i
            }, t.prototype.subscribe = function(t, e, i) {
                var n = this.operator,
                    s = function(t, e, i) {
                        if (t) {
                            if (t instanceof Cn) return t;
                            if (t[wn]) return t[wn]()
                        }
                        return t || e || i ? new Cn(t, e, i) : new Cn(vn)
                    }(t, e, i);
                if (n ? s.add(n.call(s, this.source)) : s.add(this.source || gn.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), gn.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
                return s
            }, t.prototype._trySubscribe = function(t) {
                try {
                    return this._subscribe(t)
                } catch (e) {
                    gn.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), ! function(t) {
                        for (; t;) {
                            var e = t,
                                i = e.closed,
                                n = e.destination,
                                s = e.isStopped;
                            if (i || s) return !1;
                            t = n && n instanceof Cn ? n : null
                        }
                        return !0
                    }(t) ? console.warn(e) : t.error(e)
                }
            }, t.prototype.forEach = function(t, e) {
                var i = this;
                return new(e = Ln(e))((function(e, n) {
                    var s;
                    s = i.subscribe((function(e) {
                        try {
                            t(e)
                        } catch (t) {
                            n(t), s && s.unsubscribe()
                        }
                    }), n, e)
                }))
            }, t.prototype._subscribe = function(t) {
                var e = this.source;
                return e && e.subscribe(t)
            }, t.prototype[Mn] = function() {
                return this
            }, t.prototype.pipe = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return 0 === t.length ? this : On(t)(this)
            }, t.prototype.toPromise = function(t) {
                var e = this;
                return new(t = Ln(t))((function(t, i) {
                    var n;
                    e.subscribe((function(t) {
                        return n = t
                    }), (function(t) {
                        return i(t)
                    }), (function() {
                        return t(n)
                    }))
                }))
            }, t.create = function(e) {
                return new t(e)
            }, t
        }();

        function Ln(t) {
            if (t || (t = gn.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }
        var _n = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n.scheduler = e, n.work = i, n.pending = !1, n
                }
                return pn(e, t), e.prototype.schedule = function(t, e) {
                    if (void 0 === e && (e = 0), this.closed) return this;
                    this.state = t;
                    var i = this.id,
                        n = this.scheduler;
                    return null != i && (this.id = this.recycleAsyncId(n, i, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(n, this.id, e), this
                }, e.prototype.requestAsyncId = function(t, e, i) {
                    return void 0 === i && (i = 0), setInterval(t.flush.bind(t, this), i)
                }, e.prototype.recycleAsyncId = function(t, e, i) {
                    if (void 0 === i && (i = 0), null !== i && this.delay === i && !1 === this.pending) return e;
                    clearInterval(e)
                }, e.prototype.execute = function(t, e) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    var i = this._execute(t, e);
                    if (i) return i;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }, e.prototype._execute = function(t, e) {
                    var i = !1,
                        n = void 0;
                    try {
                        this.work(t)
                    } catch (t) {
                        i = !0, n = !!t && t || new Error(t)
                    }
                    if (i) return this.unsubscribe(), n
                }, e.prototype._unsubscribe = function() {
                    var t = this.id,
                        e = this.scheduler,
                        i = e.actions,
                        n = i.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && i.splice(n, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                }, e
            }(function(t) {
                function e(e, i) {
                    return t.call(this) || this
                }
                return pn(e, t), e.prototype.schedule = function(t, e) {
                    return void 0 === e && (e = 0), this
                }, e
            }(Pn)),
            In = function() {
                function t(e, i) {
                    void 0 === i && (i = t.now), this.SchedulerAction = e, this.now = i
                }
                return t.prototype.schedule = function(t, e, i) {
                    return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(i, e)
                }, t.now = function() {
                    return Date.now()
                }, t
            }(),
            Nn = new(function(t) {
                function e(i, n) {
                    void 0 === n && (n = In.now);
                    var s = t.call(this, i, (function() {
                        return e.delegate && e.delegate !== s ? e.delegate.now() : n()
                    })) || this;
                    return s.actions = [], s.active = !1, s.scheduled = void 0, s
                }
                return pn(e, t), e.prototype.schedule = function(i, n, s) {
                    return void 0 === n && (n = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(i, n, s) : t.prototype.schedule.call(this, i, n, s)
                }, e.prototype.flush = function(t) {
                    var e = this.actions;
                    if (this.active) e.push(t);
                    else {
                        var i;
                        this.active = !0;
                        do {
                            if (i = t.execute(t.state, t.delay)) break
                        } while (t = e.shift());
                        if (this.active = !1, i) {
                            for (; t = e.shift();) t.unsubscribe();
                            throw i
                        }
                    }
                }, e
            }(In))(_n);

        function Rn(t, e) {
            var i;
            return void 0 === t && (t = 0), void 0 === e && (e = Nn), (Tn(i = t) || !(i - parseFloat(i) + 1 >= 0) || t < 0) && (t = 0), e && "function" == typeof e.schedule || (e = Nn), new Dn((function(i) {
                return i.add(e.schedule(Hn, t, {
                    subscriber: i,
                    counter: 0,
                    period: t
                })), i
            }))
        }

        function Hn(t) {
            var e = t.subscriber,
                i = t.counter,
                n = t.period;
            e.next(i), this.schedule({
                subscriber: e,
                counter: i + 1,
                period: n
            }, n)
        }
        var kn = function() {
                function t() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            Fn = function(t) {
                function e(e, i) {
                    var n = t.call(this) || this;
                    return n.subject = e, n.subscriber = i, n.closed = !1, n
                }
                return pn(e, t), e.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var t = this.subject,
                            e = t.observers;
                        if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                            var i = e.indexOf(this.subscriber); - 1 !== i && e.splice(i, 1)
                        }
                    }
                }, e
            }(Pn),
            Un = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.destination = e, i
                }
                return pn(e, t), e
            }(Cn),
            Vn = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                }
                return pn(e, t), e.prototype[wn] = function() {
                    return new Un(this)
                }, e.prototype.lift = function(t) {
                    var e = new Bn(this, this);
                    return e.operator = t, e
                }, e.prototype.next = function(t) {
                    if (this.closed) throw new kn;
                    if (!this.isStopped)
                        for (var e = this.observers, i = e.length, n = e.slice(), s = 0; s < i; s++) n[s].next(t)
                }, e.prototype.error = function(t) {
                    if (this.closed) throw new kn;
                    this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                    for (var e = this.observers, i = e.length, n = e.slice(), s = 0; s < i; s++) n[s].error(t);
                    this.observers.length = 0
                }, e.prototype.complete = function() {
                    if (this.closed) throw new kn;
                    this.isStopped = !0;
                    for (var t = this.observers, e = t.length, i = t.slice(), n = 0; n < e; n++) i[n].complete();
                    this.observers.length = 0
                }, e.prototype.unsubscribe = function() {
                    this.isStopped = !0, this.closed = !0, this.observers = null
                }, e.prototype._trySubscribe = function(e) {
                    if (this.closed) throw new kn;
                    return t.prototype._trySubscribe.call(this, e)
                }, e.prototype._subscribe = function(t) {
                    if (this.closed) throw new kn;
                    return this.hasError ? (t.error(this.thrownError), Pn.EMPTY) : this.isStopped ? (t.complete(), Pn.EMPTY) : (this.observers.push(t), new Fn(this, t))
                }, e.prototype.asObservable = function() {
                    var t = new Dn;
                    return t.source = this, t
                }, e.create = function(t, e) {
                    return new Bn(t, e)
                }, e
            }(Dn),
            Bn = function(t) {
                function e(e, i) {
                    var n = t.call(this) || this;
                    return n.destination = e, n.source = i, n
                }
                return pn(e, t), e.prototype.next = function(t) {
                    var e = this.destination;
                    e && e.next && e.next(t)
                }, e.prototype.error = function(t) {
                    var e = this.destination;
                    e && e.error && this.destination.error(t)
                }, e.prototype.complete = function() {
                    var t = this.destination;
                    t && t.complete && this.destination.complete()
                }, e.prototype._subscribe = function(t) {
                    return this.source ? this.source.subscribe(t) : Pn.EMPTY
                }, e
            }(Vn),
            Wn = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return pn(e, t), e.prototype.notifyNext = function(t, e, i, n, s) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function(t, e) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this.destination.complete()
                }, e
            }(Cn),
            jn = function(t) {
                function e(e, i, n) {
                    var s = t.call(this) || this;
                    return s.parent = e, s.outerValue = i, s.outerIndex = n, s.index = 0, s
                }
                return pn(e, t), e.prototype._next = function(t) {
                    this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                }, e.prototype._error = function(t) {
                    this.parent.notifyError(t, this), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }, e
            }(Cn);

        function Gn() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        var zn = Gn();
        var Yn = function(t) {
            if (t && "function" == typeof t[Mn]) return r = t,
                function(t) {
                    var e = r[Mn]();
                    if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return e.subscribe(t)
                };
            if ((s = t) && "number" == typeof s.length && "function" != typeof s) return n = t,
                function(t) {
                    for (var e = 0, i = n.length; e < i && !t.closed; e++) t.next(n[e]);
                    t.complete()
                };
            if (function(t) {
                return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
            }(t)) return i = t,
                function(t) {
                    return i.then((function(e) {
                        t.closed || (t.next(e), t.complete())
                    }), (function(e) {
                        return t.error(e)
                    })).then(null, yn), t
                };
            if (t && "function" == typeof t[zn]) return e = t,
                function(t) {
                    for (var i = e[zn]();;) {
                        var n = i.next();
                        if (n.done) {
                            t.complete();
                            break
                        }
                        if (t.next(n.value), t.closed) break
                    }
                    return "function" == typeof i.return && t.add((function() {
                        i.return && i.return()
                    })), t
                };
            var e, i, n, s, r, o = bn(t) ? "an invalid object" : "'" + t + "'";
            throw new TypeError("You provided " + o + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
        };
        var $n = function() {
                function t(t) {
                    this.closingSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new qn(t, this.closingSelector))
                }, t
            }(),
            qn = function(t) {
                function e(e, i) {
                    var n = t.call(this, e) || this;
                    return n.closingSelector = i, n.subscribing = !1, n.openBuffer(), n
                }
                return pn(e, t), e.prototype._next = function(t) {
                    this.buffer.push(t)
                }, e.prototype._complete = function() {
                    var e = this.buffer;
                    e && this.destination.next(e), t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    this.buffer = null, this.subscribing = !1
                }, e.prototype.notifyNext = function(t, e, i, n, s) {
                    this.openBuffer()
                }, e.prototype.notifyComplete = function() {
                    this.subscribing ? this.complete() : this.openBuffer()
                }, e.prototype.openBuffer = function() {
                    var t = this.closingSubscription;
                    t && (this.remove(t), t.unsubscribe());
                    var e, i = this.buffer;
                    this.buffer && this.destination.next(i), this.buffer = [];
                    try {
                        e = (0, this.closingSelector)()
                    } catch (t) {
                        return this.error(t)
                    }
                    t = new Pn, this.closingSubscription = t, this.add(t), this.subscribing = !0, t.add(function(t, e, i, n, s) {
                        if (void 0 === s && (s = new jn(t, i, n)), !s.closed) return e instanceof Dn ? e.subscribe(s) : Yn(e)(s)
                    }(this, e)), this.subscribing = !1
                }, e
            }(Wn);

        function Xn(t, e) {
            return function(i) {
                return i.lift(new Kn(t, e))
            }
        }
        var Kn = function() {
                function t(t, e) {
                    this.predicate = t, this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Zn(t, this.predicate, this.thisArg))
                }, t
            }(),
            Zn = function(t) {
                function e(e, i, n) {
                    var s = t.call(this, e) || this;
                    return s.predicate = i, s.thisArg = n, s.count = 0, s
                }
                return pn(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.predicate.call(this.thisArg, t, this.count++)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    e && this.destination.next(t)
                }, e
            }(Cn);

        function Qn(t) {
            mt(1, arguments);
            var e = gt(t);
            return !isNaN(e)
        }
        var Jn = {
            lessThanXSeconds: {
                one: "less than a second",
                other: "less than {{count}} seconds"
            },
            xSeconds: {
                one: "1 second",
                other: "{{count}} seconds"
            },
            halfAMinute: "half a minute",
            lessThanXMinutes: {
                one: "less than a minute",
                other: "less than {{count}} minutes"
            },
            xMinutes: {
                one: "1 minute",
                other: "{{count}} minutes"
            },
            aboutXHours: {
                one: "about 1 hour",
                other: "about {{count}} hours"
            },
            xHours: {
                one: "1 hour",
                other: "{{count}} hours"
            },
            xDays: {
                one: "1 day",
                other: "{{count}} days"
            },
            aboutXMonths: {
                one: "about 1 month",
                other: "about {{count}} months"
            },
            xMonths: {
                one: "1 month",
                other: "{{count}} months"
            },
            aboutXYears: {
                one: "about 1 year",
                other: "about {{count}} years"
            },
            xYears: {
                one: "1 year",
                other: "{{count}} years"
            },
            overXYears: {
                one: "over 1 year",
                other: "over {{count}} years"
            },
            almostXYears: {
                one: "almost 1 year",
                other: "almost {{count}} years"
            }
        };

        function ts(t) {
            return function(e) {
                var i = e || {},
                    n = i.width ? String(i.width) : t.defaultWidth;
                return t.formats[n] || t.formats[t.defaultWidth]
            }
        }
        var es = {
                date: ts({
                    formats: {
                        full: "EEEE, MMMM do, y",
                        long: "MMMM do, y",
                        medium: "MMM d, y",
                        short: "MM/dd/yyyy"
                    },
                    defaultWidth: "full"
                }),
                time: ts({
                    formats: {
                        full: "h:mm:ss a zzzz",
                        long: "h:mm:ss a z",
                        medium: "h:mm:ss a",
                        short: "h:mm a"
                    },
                    defaultWidth: "full"
                }),
                dateTime: ts({
                    formats: {
                        full: "{{date}} 'at' {{time}}",
                        long: "{{date}} 'at' {{time}}",
                        medium: "{{date}}, {{time}}",
                        short: "{{date}}, {{time}}"
                    },
                    defaultWidth: "full"
                })
            },
            is = {
                lastWeek: "'last' eeee 'at' p",
                yesterday: "'yesterday at' p",
                today: "'today at' p",
                tomorrow: "'tomorrow at' p",
                nextWeek: "eeee 'at' p",
                other: "P"
            };

        function ns(t) {
            return function(e, i) {
                var n, s = i || {};
                if ("formatting" === (s.context ? String(s.context) : "standalone") && t.formattingValues) {
                    var r = t.defaultFormattingWidth || t.defaultWidth,
                        o = s.width ? String(s.width) : r;
                    n = t.formattingValues[o] || t.formattingValues[r]
                } else {
                    var a = t.defaultWidth,
                        l = s.width ? String(s.width) : t.defaultWidth;
                    n = t.values[l] || t.values[a]
                }
                return n[t.argumentCallback ? t.argumentCallback(e) : e]
            }
        }

        function ss(t) {
            return function(e, i) {
                var n = String(e),
                    s = i || {},
                    r = s.width,
                    o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth],
                    a = n.match(o);
                if (!a) return null;
                var l, c = a[0],
                    u = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth];
                return l = "[object Array]" === Object.prototype.toString.call(u) ? function(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (e(t[i])) return i
                }(u, (function(t) {
                    return t.test(n)
                })) : function(t, e) {
                    for (var i in t)
                        if (t.hasOwnProperty(i) && e(t[i])) return i
                }(u, (function(t) {
                    return t.test(n)
                })), l = t.valueCallback ? t.valueCallback(l) : l, {
                    value: l = s.valueCallback ? s.valueCallback(l) : l,
                    rest: n.slice(c.length)
                }
            }
        }
        var rs, os = {
            code: "en-US",
            formatDistance: function(t, e, i) {
                var n;
                return i = i || {}, n = "string" == typeof Jn[t] ? Jn[t] : 1 === e ? Jn[t].one : Jn[t].other.replace("{{count}}", e), i.addSuffix ? i.comparison > 0 ? "in " + n : n + " ago" : n
            },
            formatLong: es,
            formatRelative: function(t, e, i, n) {
                return is[t]
            },
            localize: {
                ordinalNumber: function(t, e) {
                    var i = Number(t),
                        n = i % 100;
                    if (n > 20 || n < 10) switch (n % 10) {
                        case 1:
                            return i + "st";
                        case 2:
                            return i + "nd";
                        case 3:
                            return i + "rd"
                    }
                    return i + "th"
                },
                era: ns({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: ns({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(t) {
                        return Number(t) - 1
                    }
                }),
                month: ns({
                    values: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    defaultWidth: "wide"
                }),
                day: ns({
                    values: {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: ns({
                    values: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            },
            match: {
                ordinalNumber: (rs = {
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: function(t) {
                        return parseInt(t, 10)
                    }
                }, function(t, e) {
                    var i = String(t),
                        n = e || {},
                        s = i.match(rs.matchPattern);
                    if (!s) return null;
                    var r = s[0],
                        o = i.match(rs.parsePattern);
                    if (!o) return null;
                    var a = rs.valueCallback ? rs.valueCallback(o[0]) : o[0];
                    return {
                        value: a = n.valueCallback ? n.valueCallback(a) : a,
                        rest: i.slice(r.length)
                    }
                }),
                era: ss({
                    matchPatterns: {
                        narrow: /^(b|a)/i,
                        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                        wide: /^(before christ|before common era|anno domini|common era)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        any: [/^b/i, /^(a|c)/i]
                    },
                    defaultParseWidth: "any"
                }),
                quarter: ss({
                    matchPatterns: {
                        narrow: /^[1234]/i,
                        abbreviated: /^q[1234]/i,
                        wide: /^[1234](th|st|nd|rd)? quarter/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        any: [/1/i, /2/i, /3/i, /4/i]
                    },
                    defaultParseWidth: "any",
                    valueCallback: function(t) {
                        return t + 1
                    }
                }),
                month: ss({
                    matchPatterns: {
                        narrow: /^[jfmasond]/i,
                        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                    },
                    defaultParseWidth: "any"
                }),
                day: ss({
                    matchPatterns: {
                        narrow: /^[smtwf]/i,
                        short: /^(su|mo|tu|we|th|fr|sa)/i,
                        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                    },
                    defaultParseWidth: "any"
                }),
                dayPeriod: ss({
                    matchPatterns: {
                        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                    },
                    defaultMatchWidth: "any",
                    parsePatterns: {
                        any: {
                            am: /^a/i,
                            pm: /^p/i,
                            midnight: /^mi/i,
                            noon: /^no/i,
                            morning: /morning/i,
                            afternoon: /afternoon/i,
                            evening: /evening/i,
                            night: /night/i
                        }
                    },
                    defaultParseWidth: "any"
                })
            },
            options: {
                weekStartsOn: 0,
                firstWeekContainsDate: 1
            }
        };

        function as(t, e) {
            mt(2, arguments);
            var i = gt(t).getTime(),
                n = St(e);
            return new Date(i + n)
        }

        function ls(t, e) {
            mt(2, arguments);
            var i = St(e);
            return as(t, -i)
        }

        function cs(t, e) {
            for (var i = t < 0 ? "-" : "", n = Math.abs(t).toString(); n.length < e;) n = "0" + n;
            return i + n
        }
        var us = {
            y: function(t, e) {
                var i = t.getUTCFullYear(),
                    n = i > 0 ? i : 1 - i;
                return cs("yy" === e ? n % 100 : n, e.length)
            },
            M: function(t, e) {
                var i = t.getUTCMonth();
                return "M" === e ? String(i + 1) : cs(i + 1, 2)
            },
            d: function(t, e) {
                return cs(t.getUTCDate(), e.length)
            },
            a: function(t, e) {
                var i = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return i.toUpperCase();
                    case "aaaaa":
                        return i[0];
                    case "aaaa":
                    default:
                        return "am" === i ? "a.m." : "p.m."
                }
            },
            h: function(t, e) {
                return cs(t.getUTCHours() % 12 || 12, e.length)
            },
            H: function(t, e) {
                return cs(t.getUTCHours(), e.length)
            },
            m: function(t, e) {
                return cs(t.getUTCMinutes(), e.length)
            },
            s: function(t, e) {
                return cs(t.getUTCSeconds(), e.length)
            },
            S: function(t, e) {
                var i = e.length,
                    n = t.getUTCMilliseconds();
                return cs(Math.floor(n * Math.pow(10, i - 3)), e.length)
            }
        };

        function hs(t) {
            mt(1, arguments);
            var e = 1,
                i = gt(t),
                n = i.getUTCDay(),
                s = (n < e ? 7 : 0) + n - e;
            return i.setUTCDate(i.getUTCDate() - s), i.setUTCHours(0, 0, 0, 0), i
        }

        function ds(t) {
            mt(1, arguments);
            var e = gt(t),
                i = e.getUTCFullYear(),
                n = new Date(0);
            n.setUTCFullYear(i + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
            var s = hs(n),
                r = new Date(0);
            r.setUTCFullYear(i, 0, 4), r.setUTCHours(0, 0, 0, 0);
            var o = hs(r);
            return e.getTime() >= s.getTime() ? i + 1 : e.getTime() >= o.getTime() ? i : i - 1
        }

        function ps(t) {
            mt(1, arguments);
            var e = ds(t),
                i = new Date(0);
            i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
            var n = hs(i);
            return n
        }

        function fs(t) {
            mt(1, arguments);
            var e = gt(t),
                i = hs(e).getTime() - ps(e).getTime();
            return Math.round(i / 6048e5) + 1
        }

        function ms(t, e) {
            mt(1, arguments);
            var i = e || {},
                n = i.locale,
                s = n && n.options && n.options.weekStartsOn,
                r = null == s ? 0 : St(s),
                o = null == i.weekStartsOn ? r : St(i.weekStartsOn);
            if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var a = gt(t),
                l = a.getUTCDay(),
                c = (l < o ? 7 : 0) + l - o;
            return a.setUTCDate(a.getUTCDate() - c), a.setUTCHours(0, 0, 0, 0), a
        }

        function gs(t, e) {
            mt(1, arguments);
            var i = gt(t, e),
                n = i.getUTCFullYear(),
                s = e || {},
                r = s.locale,
                o = r && r.options && r.options.firstWeekContainsDate,
                a = null == o ? 1 : St(o),
                l = null == s.firstWeekContainsDate ? a : St(s.firstWeekContainsDate);
            if (!(l >= 1 && l <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var c = new Date(0);
            c.setUTCFullYear(n + 1, 0, l), c.setUTCHours(0, 0, 0, 0);
            var u = ms(c, e),
                h = new Date(0);
            h.setUTCFullYear(n, 0, l), h.setUTCHours(0, 0, 0, 0);
            var d = ms(h, e);
            return i.getTime() >= u.getTime() ? n + 1 : i.getTime() >= d.getTime() ? n : n - 1
        }

        function ys(t, e) {
            mt(1, arguments);
            var i = e || {},
                n = i.locale,
                s = n && n.options && n.options.firstWeekContainsDate,
                r = null == s ? 1 : St(s),
                o = null == i.firstWeekContainsDate ? r : St(i.firstWeekContainsDate),
                a = gs(t, e),
                l = new Date(0);
            l.setUTCFullYear(a, 0, o), l.setUTCHours(0, 0, 0, 0);
            var c = ms(l, e);
            return c
        }

        function vs(t, e) {
            mt(1, arguments);
            var i = gt(t),
                n = ms(i, e).getTime() - ys(i, e).getTime();
            return Math.round(n / 6048e5) + 1
        }
        var Ts = "midnight",
            bs = "noon",
            Ss = "morning",
            Ps = "afternoon",
            As = "evening",
            ws = "night";

        function Cs(t, e) {
            var i = t > 0 ? "-" : "+",
                n = Math.abs(t),
                s = Math.floor(n / 60),
                r = n % 60;
            if (0 === r) return i + String(s);
            var o = e || "";
            return i + String(s) + o + cs(r, 2)
        }

        function xs(t, e) {
            return t % 60 == 0 ? (t > 0 ? "-" : "+") + cs(Math.abs(t) / 60, 2) : Ms(t, e)
        }

        function Ms(t, e) {
            var i = e || "",
                n = t > 0 ? "-" : "+",
                s = Math.abs(t);
            return n + cs(Math.floor(s / 60), 2) + i + cs(s % 60, 2)
        }
        var Es = {
            G: function(t, e, i) {
                var n = t.getUTCFullYear() > 0 ? 1 : 0;
                switch (e) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return i.era(n, {
                            width: "abbreviated"
                        });
                    case "GGGGG":
                        return i.era(n, {
                            width: "narrow"
                        });
                    case "GGGG":
                    default:
                        return i.era(n, {
                            width: "wide"
                        })
                }
            },
            y: function(t, e, i) {
                if ("yo" === e) {
                    var n = t.getUTCFullYear(),
                        s = n > 0 ? n : 1 - n;
                    return i.ordinalNumber(s, {
                        unit: "year"
                    })
                }
                return us.y(t, e)
            },
            Y: function(t, e, i, n) {
                var s = gs(t, n),
                    r = s > 0 ? s : 1 - s;
                return "YY" === e ? cs(r % 100, 2) : "Yo" === e ? i.ordinalNumber(r, {
                    unit: "year"
                }) : cs(r, e.length)
            },
            R: function(t, e) {
                return cs(ds(t), e.length)
            },
            u: function(t, e) {
                return cs(t.getUTCFullYear(), e.length)
            },
            Q: function(t, e, i) {
                var n = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                    case "Q":
                        return String(n);
                    case "QQ":
                        return cs(n, 2);
                    case "Qo":
                        return i.ordinalNumber(n, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return i.quarter(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return i.quarter(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQ":
                    default:
                        return i.quarter(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            q: function(t, e, i) {
                var n = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                    case "q":
                        return String(n);
                    case "qq":
                        return cs(n, 2);
                    case "qo":
                        return i.ordinalNumber(n, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return i.quarter(n, {
                            width: "abbreviated",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return i.quarter(n, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqq":
                    default:
                        return i.quarter(n, {
                            width: "wide",
                            context: "standalone"
                        })
                }
            },
            M: function(t, e, i) {
                var n = t.getUTCMonth();
                switch (e) {
                    case "M":
                    case "MM":
                        return us.M(t, e);
                    case "Mo":
                        return i.ordinalNumber(n + 1, {
                            unit: "month"
                        });
                    case "MMM":
                        return i.month(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return i.month(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMM":
                    default:
                        return i.month(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            L: function(t, e, i) {
                var n = t.getUTCMonth();
                switch (e) {
                    case "L":
                        return String(n + 1);
                    case "LL":
                        return cs(n + 1, 2);
                    case "Lo":
                        return i.ordinalNumber(n + 1, {
                            unit: "month"
                        });
                    case "LLL":
                        return i.month(n, {
                            width: "abbreviated",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return i.month(n, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLL":
                    default:
                        return i.month(n, {
                            width: "wide",
                            context: "standalone"
                        })
                }
            },
            w: function(t, e, i, n) {
                var s = vs(t, n);
                return "wo" === e ? i.ordinalNumber(s, {
                    unit: "week"
                }) : cs(s, e.length)
            },
            I: function(t, e, i) {
                var n = fs(t);
                return "Io" === e ? i.ordinalNumber(n, {
                    unit: "week"
                }) : cs(n, e.length)
            },
            d: function(t, e, i) {
                return "do" === e ? i.ordinalNumber(t.getUTCDate(), {
                    unit: "date"
                }) : us.d(t, e)
            },
            D: function(t, e, i) {
                var n = function(t) {
                    mt(1, arguments);
                    var e = gt(t),
                        i = e.getTime();
                    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
                    var n = e.getTime(),
                        s = i - n;
                    return Math.floor(s / 864e5) + 1
                }(t);
                return "Do" === e ? i.ordinalNumber(n, {
                    unit: "dayOfYear"
                }) : cs(n, e.length)
            },
            E: function(t, e, i) {
                var n = t.getUTCDay();
                switch (e) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return i.day(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return i.day(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return i.day(n, {
                            width: "short",
                            context: "formatting"
                        });
                    case "EEEE":
                    default:
                        return i.day(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            e: function(t, e, i, n) {
                var s = t.getUTCDay(),
                    r = (s - n.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                    case "e":
                        return String(r);
                    case "ee":
                        return cs(r, 2);
                    case "eo":
                        return i.ordinalNumber(r, {
                            unit: "day"
                        });
                    case "eee":
                        return i.day(s, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "eeeee":
                        return i.day(s, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return i.day(s, {
                            width: "short",
                            context: "formatting"
                        });
                    case "eeee":
                    default:
                        return i.day(s, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            c: function(t, e, i, n) {
                var s = t.getUTCDay(),
                    r = (s - n.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                    case "c":
                        return String(r);
                    case "cc":
                        return cs(r, e.length);
                    case "co":
                        return i.ordinalNumber(r, {
                            unit: "day"
                        });
                    case "ccc":
                        return i.day(s, {
                            width: "abbreviated",
                            context: "standalone"
                        });
                    case "ccccc":
                        return i.day(s, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return i.day(s, {
                            width: "short",
                            context: "standalone"
                        });
                    case "cccc":
                    default:
                        return i.day(s, {
                            width: "wide",
                            context: "standalone"
                        })
                }
            },
            i: function(t, e, i) {
                var n = t.getUTCDay(),
                    s = 0 === n ? 7 : n;
                switch (e) {
                    case "i":
                        return String(s);
                    case "ii":
                        return cs(s, e.length);
                    case "io":
                        return i.ordinalNumber(s, {
                            unit: "day"
                        });
                    case "iii":
                        return i.day(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "iiiii":
                        return i.day(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "iiiiii":
                        return i.day(n, {
                            width: "short",
                            context: "formatting"
                        });
                    case "iiii":
                    default:
                        return i.day(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            a: function(t, e, i) {
                var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return i.dayPeriod(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return i.dayPeriod(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return i.dayPeriod(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            b: function(t, e, i) {
                var n, s = t.getUTCHours();
                switch (n = 12 === s ? bs : 0 === s ? Ts : s / 12 >= 1 ? "pm" : "am", e) {
                    case "b":
                    case "bb":
                    case "bbb":
                        return i.dayPeriod(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return i.dayPeriod(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return i.dayPeriod(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            B: function(t, e, i) {
                var n, s = t.getUTCHours();
                switch (n = s >= 17 ? As : s >= 12 ? Ps : s >= 4 ? Ss : ws, e) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return i.dayPeriod(n, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return i.dayPeriod(n, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return i.dayPeriod(n, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            h: function(t, e, i) {
                if ("ho" === e) {
                    var n = t.getUTCHours() % 12;
                    return 0 === n && (n = 12), i.ordinalNumber(n, {
                        unit: "hour"
                    })
                }
                return us.h(t, e)
            },
            H: function(t, e, i) {
                return "Ho" === e ? i.ordinalNumber(t.getUTCHours(), {
                    unit: "hour"
                }) : us.H(t, e)
            },
            K: function(t, e, i) {
                var n = t.getUTCHours() % 12;
                return "Ko" === e ? i.ordinalNumber(n, {
                    unit: "hour"
                }) : cs(n, e.length)
            },
            k: function(t, e, i) {
                var n = t.getUTCHours();
                return 0 === n && (n = 24), "ko" === e ? i.ordinalNumber(n, {
                    unit: "hour"
                }) : cs(n, e.length)
            },
            m: function(t, e, i) {
                return "mo" === e ? i.ordinalNumber(t.getUTCMinutes(), {
                    unit: "minute"
                }) : us.m(t, e)
            },
            s: function(t, e, i) {
                return "so" === e ? i.ordinalNumber(t.getUTCSeconds(), {
                    unit: "second"
                }) : us.s(t, e)
            },
            S: function(t, e) {
                return us.S(t, e)
            },
            X: function(t, e, i, n) {
                var s = (n._originalDate || t).getTimezoneOffset();
                if (0 === s) return "Z";
                switch (e) {
                    case "X":
                        return xs(s);
                    case "XXXX":
                    case "XX":
                        return Ms(s);
                    case "XXXXX":
                    case "XXX":
                    default:
                        return Ms(s, ":")
                }
            },
            x: function(t, e, i, n) {
                var s = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                    case "x":
                        return xs(s);
                    case "xxxx":
                    case "xx":
                        return Ms(s);
                    case "xxxxx":
                    case "xxx":
                    default:
                        return Ms(s, ":")
                }
            },
            O: function(t, e, i, n) {
                var s = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                    case "O":
                    case "OO":
                    case "OOO":
                        return "GMT" + Cs(s, ":");
                    case "OOOO":
                    default:
                        return "GMT" + Ms(s, ":")
                }
            },
            z: function(t, e, i, n) {
                var s = (n._originalDate || t).getTimezoneOffset();
                switch (e) {
                    case "z":
                    case "zz":
                    case "zzz":
                        return "GMT" + Cs(s, ":");
                    case "zzzz":
                    default:
                        return "GMT" + Ms(s, ":")
                }
            },
            t: function(t, e, i, n) {
                var s = n._originalDate || t;
                return cs(Math.floor(s.getTime() / 1e3), e.length)
            },
            T: function(t, e, i, n) {
                return cs((n._originalDate || t).getTime(), e.length)
            }
        };

        function Os(t, e) {
            switch (t) {
                case "P":
                    return e.date({
                        width: "short"
                    });
                case "PP":
                    return e.date({
                        width: "medium"
                    });
                case "PPP":
                    return e.date({
                        width: "long"
                    });
                case "PPPP":
                default:
                    return e.date({
                        width: "full"
                    })
            }
        }

        function Ds(t, e) {
            switch (t) {
                case "p":
                    return e.time({
                        width: "short"
                    });
                case "pp":
                    return e.time({
                        width: "medium"
                    });
                case "ppp":
                    return e.time({
                        width: "long"
                    });
                case "pppp":
                default:
                    return e.time({
                        width: "full"
                    })
            }
        }
        var Ls = {
            p: Ds,
            P: function(t, e) {
                var i, n = t.match(/(P+)(p+)?/),
                    s = n[1],
                    r = n[2];
                if (!r) return Os(t, e);
                switch (s) {
                    case "P":
                        i = e.dateTime({
                            width: "short"
                        });
                        break;
                    case "PP":
                        i = e.dateTime({
                            width: "medium"
                        });
                        break;
                    case "PPP":
                        i = e.dateTime({
                            width: "long"
                        });
                        break;
                    case "PPPP":
                    default:
                        i = e.dateTime({
                            width: "full"
                        })
                }
                return i.replace("{{date}}", Os(s, e)).replace("{{time}}", Ds(r, e))
            }
        };

        function _s(t) {
            var e = new Date(t.getTime()),
                i = Math.ceil(e.getTimezoneOffset());
            return e.setSeconds(0, 0), 6e4 * i + e.getTime() % 6e4
        }
        var Is = ["D", "DD"],
            Ns = ["YY", "YYYY"];

        function Rs(t) {
            return -1 !== Is.indexOf(t)
        }

        function Hs(t) {
            return -1 !== Ns.indexOf(t)
        }

        function ks(t) {
            if ("YYYY" === t) throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");
            if ("YY" === t) throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");
            if ("D" === t) throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");
            if ("DD" === t) throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")
        }
        var Fs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
            Us = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
            Vs = /^'([^]*?)'?$/,
            Bs = /''/g,
            Ws = /[a-zA-Z]/;

        function js(t, e, i) {
            mt(2, arguments);
            var n = String(e),
                s = i || {},
                r = s.locale || os,
                o = r.options && r.options.firstWeekContainsDate,
                a = null == o ? 1 : St(o),
                l = null == s.firstWeekContainsDate ? a : St(s.firstWeekContainsDate);
            if (!(l >= 1 && l <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var c = r.options && r.options.weekStartsOn,
                u = null == c ? 0 : St(c),
                h = null == s.weekStartsOn ? u : St(s.weekStartsOn);
            if (!(h >= 0 && h <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if (!r.localize) throw new RangeError("locale must contain localize property");
            if (!r.formatLong) throw new RangeError("locale must contain formatLong property");
            var d = gt(t);
            if (!Qn(d)) throw new RangeError("Invalid time value");
            var p = _s(d),
                f = ls(d, p),
                m = {
                    firstWeekContainsDate: l,
                    weekStartsOn: h,
                    locale: r,
                    _originalDate: d
                },
                g = n.match(Us).map((function(t) {
                    var e = t[0];
                    return "p" === e || "P" === e ? (0, Ls[e])(t, r.formatLong, m) : t
                })).join("").match(Fs).map((function(t) {
                    if ("''" === t) return "'";
                    var e = t[0];
                    if ("'" === e) return Gs(t);
                    var i = Es[e];
                    if (i) return !s.useAdditionalWeekYearTokens && Hs(t) && ks(t), !s.useAdditionalDayOfYearTokens && Rs(t) && ks(t), i(f, t, r.localize, m);
                    if (e.match(Ws)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
                    return t
                })).join("");
            return g
        }

        function Gs(t) {
            return t.match(Vs)[1].replace(Bs, "'")
        }
        class zs {
            constructor() {
                this.recordCache = new Map
            }
            get subject() {
                if (!q(this._subject)) {
                    const e = Rn(Math.max(Zt.MINIMUM_THROTTLE, Rp().config.throttleMillis || 0)),
                        i = Rn(Zt.BACKGROUND_TAB_THROTTLE),
                        n = () => document.hidden ? i : e;
                    this._subject = (new Vn).pipe((t = n, function(e) {
                        return e.lift(new $n(t))
                    }), Xn(t => t.length > 0))
                }
                var t;
                return this._subject
            }
            makeAndCacheRecord(t, e) {
                if (t === Zt.PLACEHOLDER_SYMBOL_NAME) return new rn(Zt.PLACEHOLDER_SYMBOL_NAME);
                if (this.recordCache.has(t)) return this.recordCache.get(t);
                const i = e(t);
                return i.addFields(en.Open, en.High, en.Low, en.Last, en.Close, en.PreviousClose, en.PreviousHigh, en.PreviousLow, en.PreviousOpen, en.Volume), this.recordCache.set(t, i), i.ready().then(t => {
                    this.postInit(t, i)
                }), i
            }
            evictUnused(t, e) {
                for (const [i, n] of this.recordCache) t.has(n) || (e(n), this.recordCache.delete(i))
            }
            postInit(t, e) {}
        }
        class Ys extends zs {
            getRecord(t) {
                return this.makeAndCacheRecord(t, () => new un(t))
            }
            evictUnused(t) {
                super.evictUnused(t, t => t.shutdown())
            }
        }
        class $s extends zs {
            constructor() {
                super(), this.onMarketUpdate = this.onMarketUpdate.bind(this)
            }
            evictUnused(t) {
                super.evictUnused(t, t => {
                    t.shutdown(), Rp().connection.off("marketUpdate", this.onMarketUpdate, t.symbol)
                })
            }
            getRecord(t) {
                return this.makeAndCacheRecord(t, () => new cn(t))
            }
            postInit(t, e) {
                t && Rp().connection.on("marketUpdate", this.onMarketUpdate, e.symbol)
            }
            onMarketUpdate(t) {
                if (t.type === Zt.REALTIME_INITIAL_QUOTE) this.updateFromQuote(t, !0), this.subject.next({
                    topic: nn.RT_QUOTE,
                    data: t
                });
                else if (t.type === Zt.REALTIME_TRADE) {
                    let e = Rp().connection.getMarketState().getQuote(t.symbol);
                    this.updateFromQuote(e), this.subject.next({
                        topic: nn.RT_TRADE,
                        data: t
                    }), t.symbol === Zt.DEBUG_SYMBOL && console.log("Trade\nSymbol: ".concat(t.symbol, " \t%cPrice: ").concat(t.tradePrice, " \t%cSize: ").concat(t.tradeSize, " \t%cTime: ").concat(js(t.time, Zt.DEBUG_TIME_FORMAT), " \t%cSession: ").concat(t.session), "color:#0f0", "color:#a7a", "color:#f96", "color:#bee")
                } else if (t.type === Zt.REALTIME_VOLUME) {
                    this.updateFromVolume(t) && (this.subject.next({
                        topic: nn.RT_VOLUME,
                        data: t
                    }), t.symbol === Zt.DEBUG_SYMBOL && console.log("Volume\n Symbol: ".concat(t.symbol, " \t%cValue: ").concat(t.value, " \t%cSession: ").concat(t.session), "color:#a7a", "color:#bee"))
                }
            }
            updateFromQuote(t, e = !1) {
                const i = this.recordCache.get(t.symbol);
                i.update(en.Open, t.openPrice), i.update(en.High, t.highPrice), i.update(en.Low, t.lowPrice), i.update(en.Last, t.lastPrice), i.update(en.Close, t.lastPrice);
                const n = (t, e) => {
                    e && i.update(t, e)
                };
                n(en.Volume, t.volume), i.update(en.PreviousClose, t.previousPrice), e && (n(en.PreviousOpen, t.previousOpenPrice), n(en.PreviousHigh, t.previousHighPrice), n(en.PreviousLow, t.previousLowPrice))
            }
            updateFromVolume(t) {
                return this.recordCache.get(t.symbol).update(en.Volume, t.value)
            }
        }
        class qs {
            constructor(t) {
                this.fields = t, this.storage = {}, t.forEach(t => {
                    this.storage[t.id] = []
                })
            }
            prependData(t, e) {
                this.checkField(t), this.storage[t.id] = e.concat(this.getData(t))
            }
            prepend(t) {
                const e = t.getLastDataPoint(en.DateTime).getTime() === this.getData(en.DateTime)[0].getTime(),
                    i = t.size;
                t.fields.forEach(n => {
                    e && t.getData(n).splice(i - 1, 1), this.prependData(n, t.getData(n))
                })
            }
            appendData(t, e) {
                this.checkField(t), this.storage[t.id] = this.getData(t).concat(e)
            }
            append(t) {
                const e = t.getData(en.DateTime)[0].getTime() === this.getLastDataPoint(en.DateTime).getTime(),
                    i = this.size;
                return t.fields.forEach(n => {
                    e && this.getData(n).splice(i - 1, 1), this.appendData(n, t.getData(n))
                }), t.size - (e ? 1 : 0)
            }
            getTimeData() {
                return this.getData(en.DateTime)
            }
            getData(t) {
                return this.storage[t.id]
            }
            setData(t, e) {
                this.checkField(t), this.storage[t.id] = e
            }
            hasField(t) {
                return -1 !== this.fields.findIndex(e => e.id === t.id)
            }
            get size() {
                return 0 === this.fields.length ? 0 : this.getData(this.fields[0]).length
            }
            get isEmpty() {
                return 0 === this.size
            }
            checkField(t) {
                if (!this.hasField(t)) throw new Error("This container does not store values for field ".concat(t.id))
            }
            addDataPoint(t, e) {
                this.checkField(t), this.getData(t).push(e)
            }
            getLastDataPoint(t) {
                return this.checkField(t), V(this.getData(t))
            }
            setLastDataPoint(t, e) {
                this.checkField(t);
                const i = this.getData(t);
                i[i.length - 1] = e
            }
        }
        class Xs extends qs {
            constructor() {
                super([])
            }
            get size() {
                return 0
            }
        }
        class Ks extends qs {
            constructor(t, e) {
                super(t), this.wrapper = e
            }
            isWrapped(t) {
                return this.wrapper.hasOwnProperty(t.id)
            }
            hasField(t) {
                return this.isWrapped(t) || super.hasField(t)
            }
            getData(t) {
                return this.isWrapped(t) ? this.wrapper[t.id]() : super.getData(t)
            }
        }
        const Zs = [en.DateTime, en.Last, en.TradeSize, en.Change],
            Qs = [en.DateTime, en.Open, en.High, en.Low, en.Close, en.Volume, en.Change],
            Js = [en.DateTime, en.Open, en.High, en.Low, en.Close, en.Volume, en.OpenInterest, en.Change],
            tr = [en.Symbol, en.DateTime, en.Open, en.High, en.Low, en.Close, en.Volume, en.OpenInterest, en.Change];

        function er(t, e) {
            const i = Rt(t),
                n = e.isMultiContract;
            return e.isTick ? Zs : e.isIntraday || !i && !n ? Qs : n ? tr : Js
        }

        function ir(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = gt(e);
            return i.getTime() < n.getTime()
        }

        function nr(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = gt(e);
            return i.getTime() === n.getTime()
        }

        function sr(t, e, i) {
            return (i = i || []).length >= e ? t.apply(null, i.slice(0, e).reverse()) : function() {
                var n = Array.prototype.slice.call(arguments);
                return sr(t, e, i.concat(n))
            }
        }
        var rr = sr((function(t, e) {
            mt(2, arguments);
            var i = St(e);
            return as(t, 1e3 * i)
        }), 2);
        var or = sr((function(t, e) {
            mt(2, arguments);
            var i = St(e);
            return as(t, 6e4 * i)
        }), 2);

        function ar(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = St(e);
            return i.setDate(i.getDate() + n), i
        }
        var lr = sr(ar, 2);
        var cr = sr((function(t, e) {
                mt(2, arguments);
                var i = St(e),
                    n = 7 * i;
                return ar(t, n)
            }), 2),
            ur = sr(At, 2);
        var hr = sr((function(t, e) {
                mt(2, arguments);
                var i = St(e),
                    n = 3 * i;
                return At(t, n)
            }), 2),
            dr = sr(wt, 2),
            pr = sr(js, 2);

        function fr(t) {
            return t.size - 1
        }
        class mr {
            constructor(t) {
                this.container = t
            }
            process(t) {
                const e = this.container.size > 0 ? this.container.getLastDataPoint(en.Last) : null,
                    i = this.container.getLastDataPoint(en.DateTime);
                let n = t.time;
                return void 0 !== i && n <= i && (n = as(i, 1)), this.container.addDataPoint(en.DateTime, n), this.container.addDataPoint(en.Last, t.tradePrice), this.container.addDataPoint(en.TradeSize, t.tradeSize), this.container.addDataPoint(en.Change, q(e) ? t.tradePrice - e : null), {
                    isUpdate: !1,
                    time: n.getTime(),
                    index: fr(this.container)
                }
            }
        }
        class gr {
            constructor(t, e) {
                this.processRetrieved(t, e)
            }
            processRetrieved(t, e) {
                this.container = new qs(er(e, new Vi(c.Intraday, 5)));
                const i = t => ({
                    high: t.high,
                    low: t.low
                });
                let n = {},
                    s = 0,
                    r = 0;
                for (let e = 0; e < t.size; e++) {
                    const o = {
                        date: t.getData(en.DateTime)[e],
                        high: t.getData(en.High)[e],
                        low: t.getData(en.Low)[e],
                        close: t.getData(en.Close)[e],
                        open: t.getData(en.Open)[e],
                        volume: t.getData(en.Volume)[e]
                    };
                    0 === e && (r = o.close, s = o.open), n.from || (n.high = o.high, n.low = o.low, n.from = e, n.date = o.date), n.volume = (n.volume || 0) + o.volume;
                    const a = r - i(o).high,
                        l = r - i(o).low,
                        c = s - i(o).high,
                        u = s - i(o).low,
                        h = Math.min(Math.abs(a), Math.abs(l), Math.abs(c), Math.abs(u));
                    n.high = Math.max(n.high, o.high), n.low = Math.min(n.low, o.low);
                    const d = Math.floor(h / 5);
                    if (n.open = Math.abs(a) < Math.abs(c) || Math.abs(l) < Math.abs(u) ? r : s, d >= 1) {
                        for (let t = 0; t < d; t++) n.close = n.open < i(o).high ? n.open + 5 : n.open - 5, n.to = e, this.addToContainer(n), r = n.close, s = n.open, n = {
                            high: n.high,
                            low: n.low,
                            open: n.close,
                            from: e,
                            date: o.date
                        }, n.volume = (n.volume || 0) + o.volume;
                        n = {}
                    } else e === t.size - 1 && (n.close = n.close > n.open > 0 ? i(o).high : i(o).low, n.to = e, n.date = o.date, this.addToContainer(n))
                }
            }
            process(t) {
                const {
                    tradePrice: e,
                    tradeSize: i,
                    time: n
                } = t;
                return {
                    isUpdate: !1,
                    time: n,
                    index: 0
                }
            }
            addToContainer(t) {
                this.container.addDataPoint(en.DateTime, t.date), this.container.addDataPoint(en.Open, t.open), this.container.addDataPoint(en.Close, t.close), this.container.addDataPoint(en.High, t.high), this.container.addDataPoint(en.Low, t.low), this.container.addDataPoint(en.Volume, t.volume)
            }
        }
        class yr {
            constructor(t, e, i) {
                this.agg = e, this.processRetrieved(t, i)
            }
            processRetrieved(t, e) {
                if (this.agg.unit === c.Tick && this.agg.spec !== u.None) switch (this.container = new qs(er(e, new Vi(c.Intraday, 5))), this.agg.spec) {
                    case u.PerSeconds:
                        for (let e = 0; e < t.size; e++) {
                            const i = {
                                time: t.getData(en.DateTime)[e],
                                tradeSize: t.getData(en.TradeSize)[e],
                                tradePrice: t.getData(en.Last)[e]
                            };
                            this.process(i)
                        }
                        break;
                    case u.PerCount:
                    case u.PerVolume:
                    case u.PerRange:
                    default:
                        throw new Error("Custom tick aggregation ".concat(this.agg.describe(), " has not been implemented yet"))
                } else this.container = t
            }
            isSameBar(t, e, i) {
                switch (this.agg.unit) {
                    case c.Tick:
                    case c.Intraday:
                        return ir(e, i(t));
                    case c.Day:
                        return vt(t, e);
                    case c.Week:
                        return Di(t, e);
                    case c.Month:
                        return Li(t, e);
                    case c.Quarter:
                        return Ii(t, e);
                    case c.Year:
                        return Ei(t, e);
                    default:
                        throw new Error("Unexpected aggregation unit ".concat(c[this.agg.unit]))
                }
            }
            getBarDurationAdder() {
                switch (this.agg.unit) {
                    case c.Tick:
                        return rr(this.agg.size);
                    case c.Intraday:
                        return or(this.agg.size);
                    case c.Day:
                        return lr(1);
                    case c.Week:
                        return cr(1);
                    case c.Month:
                        return ur(1);
                    case c.Quarter:
                        return hr(1);
                    case c.Year:
                        return dr(1);
                    default:
                        throw new Error("Unexpected aggregation unit ".concat(c[this.agg.unit]))
                }
            }
            getPosition(t) {
                if (0 === this.container.size) {
                    const e = t.time;
                    return {
                        lastTimeStamp: null,
                        newTimestamp: e,
                        nextTimestamp: e,
                        isUpdate: !1
                    }
                }
                const e = this.container.getLastDataPoint(en.DateTime),
                    i = t.time;
                if (ir(i, e)) throw new Error("Currently not handling data corrections (updates of the past historical data)");
                const n = this.getBarDurationAdder();
                let s = e;
                for (; !this.isSameBar(s, i, n);) s = n(s);
                return {
                    lastTimestamp: e,
                    newTimestamp: i,
                    nextTimestamp: s,
                    isUpdate: nr(s, e)
                }
            }
            addBar(t, e) {
                const {
                    nextTimestamp: i
                } = e, n = this.container.size > 0 ? this.container.getLastDataPoint(en.Close) : null;
                return this.container.addDataPoint(en.DateTime, i), this.container.addDataPoint(en.Open, t.tradePrice), this.container.addDataPoint(en.High, t.tradePrice), this.container.addDataPoint(en.Low, t.tradePrice), this.container.addDataPoint(en.Close, t.tradePrice), this.container.addDataPoint(en.Change, q(n) ? t.tradePrice - n : null), this.container.addDataPoint(en.Volume, t.tradeSize), this.container.hasField(en.OpenInterest) && this.container.addDataPoint(en.OpenInterest, null), {
                    isUpdate: !1,
                    time: i.getTime(),
                    index: fr(this.container)
                }
            }
            updateLastBar(t, e, i, n) {
                if (q(t) && t > this.container.getLastDataPoint(en.High) && this.container.setLastDataPoint(en.High, t), q(e) && e < this.container.getLastDataPoint(en.Low) && this.container.setLastDataPoint(en.Low, e), q(i)) {
                    this.container.setLastDataPoint(en.Close, i);
                    const t = this.container.getData(en.Close)[this.container.size - 2];
                    this.container.setLastDataPoint(en.Change, i - t)
                }
                if (q(n)) {
                    const t = this.container.getLastDataPoint(en.Volume) + n;
                    this.container.setLastDataPoint(en.Volume, t)
                }
            }
            changeLastBar(t, e) {
                const {
                    lastTimestamp: i
                } = e, n = t.tradePrice;
                return this.updateLastBar(n, n, n, t.tradeSize), {
                    isUpdate: !0,
                    time: i.getTime(),
                    index: this.lastBarIndex
                }
            }
            process(t) {
                const e = this.getPosition(t),
                    i = pr(Zt.DEBUG_TIME_FORMAT);
                return e.isUpdate ? (t.symbol === Zt.DEBUG_SYMBOL && console.log("Adding ".concat(this.agg.describe(), " Bar\n") + "Bars %cnot same %c".concat(i(e.lastTimestamp), " < ").concat(i(e.newTimestamp), " %cnext is %c").concat(i(e.nextTimestamp)), "color:#f00", "color:#f96", "", "color:#fff"), this.changeLastBar(t, e)) : q(t.tradePrice) ? (t.symbol === Zt.DEBUG_SYMBOL && console.log("Updating ".concat(this.agg.describe(), " Bar\n") + "Bars %csame %c".concat(i(e.lastTimestamp), " == ").concat(i(e.newTimestamp)), "color:#0f0", "color:#f96"), this.addBar(t, e)) : null
            }
            alignToQuote(t) {
                if (q(t.lastPrice, t.time)) return this.updateLastBar(t.highPrice, t.lowPrice, t.lastPrice, null), {
                    isUpdate: !0,
                    time: t.time.getTime(),
                    index: this.lastBarIndex
                }
            }
        }

        function vr(t, e) {
            if (null == t) throw new TypeError("assign requires that input parameter not be null or undefined");
            for (var i in e = e || {}) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function Tr(t, e, i) {
            mt(2, arguments);
            var n = i || {},
                s = n.locale,
                r = s && s.options && s.options.weekStartsOn,
                o = null == r ? 0 : St(r),
                a = null == n.weekStartsOn ? o : St(n.weekStartsOn);
            if (!(a >= 0 && a <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var l = gt(t),
                c = St(e),
                u = l.getUTCDay(),
                h = c % 7,
                d = (h + 7) % 7,
                p = (d < a ? 7 : 0) + c - u;
            return l.setUTCDate(l.getUTCDate() + p), l
        }
        var br = /^(1[0-2]|0?\d)/,
            Sr = /^(3[0-1]|[0-2]?\d)/,
            Pr = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
            Ar = /^(5[0-3]|[0-4]?\d)/,
            wr = /^(2[0-3]|[0-1]?\d)/,
            Cr = /^(2[0-4]|[0-1]?\d)/,
            xr = /^(1[0-1]|0?\d)/,
            Mr = /^(1[0-2]|0?\d)/,
            Er = /^[0-5]?\d/,
            Or = /^[0-5]?\d/,
            Dr = /^\d/,
            Lr = /^\d{1,2}/,
            _r = /^\d{1,3}/,
            Ir = /^\d{1,4}/,
            Nr = /^-?\d+/,
            Rr = /^-?\d/,
            Hr = /^-?\d{1,2}/,
            kr = /^-?\d{1,3}/,
            Fr = /^-?\d{1,4}/,
            Ur = /^([+-])(\d{2})(\d{2})?|Z/,
            Vr = /^([+-])(\d{2})(\d{2})|Z/,
            Br = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
            Wr = /^([+-])(\d{2}):(\d{2})|Z/,
            jr = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;

        function Gr(t, e, i) {
            var n = e.match(t);
            if (!n) return null;
            var s = parseInt(n[0], 10);
            return {
                value: i ? i(s) : s,
                rest: e.slice(n[0].length)
            }
        }

        function zr(t, e) {
            var i = e.match(t);
            return i ? "Z" === i[0] ? {
                value: 0,
                rest: e.slice(1)
            } : {
                value: ("+" === i[1] ? 1 : -1) * (36e5 * (i[2] ? parseInt(i[2], 10) : 0) + 6e4 * (i[3] ? parseInt(i[3], 10) : 0) + 1e3 * (i[5] ? parseInt(i[5], 10) : 0)),
                rest: e.slice(i[0].length)
            } : null
        }

        function Yr(t, e) {
            return Gr(Nr, t, e)
        }

        function $r(t, e, i) {
            switch (t) {
                case 1:
                    return Gr(Dr, e, i);
                case 2:
                    return Gr(Lr, e, i);
                case 3:
                    return Gr(_r, e, i);
                case 4:
                    return Gr(Ir, e, i);
                default:
                    return Gr(new RegExp("^\\d{1," + t + "}"), e, i)
            }
        }

        function qr(t, e, i) {
            switch (t) {
                case 1:
                    return Gr(Rr, e, i);
                case 2:
                    return Gr(Hr, e, i);
                case 3:
                    return Gr(kr, e, i);
                case 4:
                    return Gr(Fr, e, i);
                default:
                    return Gr(new RegExp("^-?\\d{1," + t + "}"), e, i)
            }
        }

        function Xr(t) {
            switch (t) {
                case "morning":
                    return 4;
                case "evening":
                    return 17;
                case "pm":
                case "noon":
                case "afternoon":
                    return 12;
                case "am":
                case "midnight":
                case "night":
                default:
                    return 0
            }
        }

        function Kr(t, e) {
            var i, n = e > 0,
                s = n ? e : 1 - e;
            if (s <= 50) i = t || 100;
            else {
                var r = s + 50;
                i = t + 100 * Math.floor(r / 100) - (t >= r % 100 ? 100 : 0)
            }
            return n ? i : 1 - i
        }
        var Zr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Qr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function Jr(t) {
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
        var to = {
                G: {
                    priority: 140,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "G":
                            case "GG":
                            case "GGG":
                                return i.era(t, {
                                    width: "abbreviated"
                                }) || i.era(t, {
                                    width: "narrow"
                                });
                            case "GGGGG":
                                return i.era(t, {
                                    width: "narrow"
                                });
                            case "GGGG":
                            default:
                                return i.era(t, {
                                    width: "wide"
                                }) || i.era(t, {
                                    width: "abbreviated"
                                }) || i.era(t, {
                                    width: "narrow"
                                })
                        }
                    },
                    set: function(t, e, i, n) {
                        return e.era = i, t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["R", "u", "t", "T"]
                },
                y: {
                    priority: 130,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            return {
                                year: t,
                                isTwoDigitYear: "yy" === e
                            }
                        };
                        switch (e) {
                            case "y":
                                return $r(4, t, s);
                            case "yo":
                                return i.ordinalNumber(t, {
                                    unit: "year",
                                    valueCallback: s
                                });
                            default:
                                return $r(e.length, t, s)
                        }
                    },
                    validate: function(t, e, i) {
                        return e.isTwoDigitYear || e.year > 0
                    },
                    set: function(t, e, i, n) {
                        var s = t.getUTCFullYear();
                        if (i.isTwoDigitYear) {
                            var r = Kr(i.year, s);
                            return t.setUTCFullYear(r, 0, 1), t.setUTCHours(0, 0, 0, 0), t
                        }
                        var o = "era" in e && 1 !== e.era ? 1 - i.year : i.year;
                        return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]
                },
                Y: {
                    priority: 130,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            return {
                                year: t,
                                isTwoDigitYear: "YY" === e
                            }
                        };
                        switch (e) {
                            case "Y":
                                return $r(4, t, s);
                            case "Yo":
                                return i.ordinalNumber(t, {
                                    unit: "year",
                                    valueCallback: s
                                });
                            default:
                                return $r(e.length, t, s)
                        }
                    },
                    validate: function(t, e, i) {
                        return e.isTwoDigitYear || e.year > 0
                    },
                    set: function(t, e, i, n) {
                        var s = gs(t, n);
                        if (i.isTwoDigitYear) {
                            var r = Kr(i.year, s);
                            return t.setUTCFullYear(r, 0, n.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), ms(t, n)
                        }
                        var o = "era" in e && 1 !== e.era ? 1 - i.year : i.year;
                        return t.setUTCFullYear(o, 0, n.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), ms(t, n)
                    },
                    incompatibleTokens: ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
                },
                R: {
                    priority: 130,
                    parse: function(t, e, i, n) {
                        return qr("R" === e ? 4 : e.length, t)
                    },
                    set: function(t, e, i, n) {
                        var s = new Date(0);
                        return s.setUTCFullYear(i, 0, 4), s.setUTCHours(0, 0, 0, 0), hs(s)
                    },
                    incompatibleTokens: ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
                },
                u: {
                    priority: 130,
                    parse: function(t, e, i, n) {
                        return qr("u" === e ? 4 : e.length, t)
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
                },
                Q: {
                    priority: 120,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "Q":
                            case "QQ":
                                return $r(e.length, t);
                            case "Qo":
                                return i.ordinalNumber(t, {
                                    unit: "quarter"
                                });
                            case "QQQ":
                                return i.quarter(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.quarter(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "QQQQQ":
                                return i.quarter(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "QQQQ":
                            default:
                                return i.quarter(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.quarter(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.quarter(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 4
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMonth(3 * (i - 1), 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
                },
                q: {
                    priority: 120,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "q":
                            case "qq":
                                return $r(e.length, t);
                            case "qo":
                                return i.ordinalNumber(t, {
                                    unit: "quarter"
                                });
                            case "qqq":
                                return i.quarter(t, {
                                    width: "abbreviated",
                                    context: "standalone"
                                }) || i.quarter(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "qqqqq":
                                return i.quarter(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "qqqq":
                            default:
                                return i.quarter(t, {
                                    width: "wide",
                                    context: "standalone"
                                }) || i.quarter(t, {
                                    width: "abbreviated",
                                    context: "standalone"
                                }) || i.quarter(t, {
                                    width: "narrow",
                                    context: "standalone"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 4
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMonth(3 * (i - 1), 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
                },
                M: {
                    priority: 110,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            return t - 1
                        };
                        switch (e) {
                            case "M":
                                return Gr(br, t, s);
                            case "MM":
                                return $r(2, t, s);
                            case "Mo":
                                return i.ordinalNumber(t, {
                                    unit: "month",
                                    valueCallback: s
                                });
                            case "MMM":
                                return i.month(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.month(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "MMMMM":
                                return i.month(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "MMMM":
                            default:
                                return i.month(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.month(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.month(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 11
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMonth(i, 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
                },
                L: {
                    priority: 110,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            return t - 1
                        };
                        switch (e) {
                            case "L":
                                return Gr(br, t, s);
                            case "LL":
                                return $r(2, t, s);
                            case "Lo":
                                return i.ordinalNumber(t, {
                                    unit: "month",
                                    valueCallback: s
                                });
                            case "LLL":
                                return i.month(t, {
                                    width: "abbreviated",
                                    context: "standalone"
                                }) || i.month(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "LLLLL":
                                return i.month(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "LLLL":
                            default:
                                return i.month(t, {
                                    width: "wide",
                                    context: "standalone"
                                }) || i.month(t, {
                                    width: "abbreviated",
                                    context: "standalone"
                                }) || i.month(t, {
                                    width: "narrow",
                                    context: "standalone"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 11
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMonth(i, 1), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
                },
                w: {
                    priority: 100,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "w":
                                return Gr(Ar, t);
                            case "wo":
                                return i.ordinalNumber(t, {
                                    unit: "week"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 53
                    },
                    set: function(t, e, i, n) {
                        return ms(function(t, e, i) {
                            mt(2, arguments);
                            var n = gt(t),
                                s = St(e),
                                r = vs(n, i) - s;
                            return n.setUTCDate(n.getUTCDate() - 7 * r), n
                        }(t, i, n), n)
                    },
                    incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
                },
                I: {
                    priority: 100,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "I":
                                return Gr(Ar, t);
                            case "Io":
                                return i.ordinalNumber(t, {
                                    unit: "week"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 53
                    },
                    set: function(t, e, i, n) {
                        return hs(function(t, e) {
                            mt(2, arguments);
                            var i = gt(t),
                                n = St(e),
                                s = fs(i) - n;
                            return i.setUTCDate(i.getUTCDate() - 7 * s), i
                        }(t, i, n), n)
                    },
                    incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
                },
                d: {
                    priority: 90,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "d":
                                return Gr(Sr, t);
                            case "do":
                                return i.ordinalNumber(t, {
                                    unit: "date"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        var n = Jr(t.getUTCFullYear()),
                            s = t.getUTCMonth();
                        return n ? e >= 1 && e <= Qr[s] : e >= 1 && e <= Zr[s]
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCDate(i), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
                },
                D: {
                    priority: 90,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "D":
                            case "DD":
                                return Gr(Pr, t);
                            case "Do":
                                return i.ordinalNumber(t, {
                                    unit: "date"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return Jr(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMonth(0, i), t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
                },
                E: {
                    priority: 90,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "E":
                            case "EE":
                            case "EEE":
                                return i.day(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "short",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "EEEEE":
                                return i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "EEEEEE":
                                return i.day(t, {
                                    width: "short",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "EEEE":
                            default:
                                return i.day(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "short",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 6
                    },
                    set: function(t, e, i, n) {
                        return (t = Tr(t, i, n)).setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["D", "i", "e", "c", "t", "T"]
                },
                e: {
                    priority: 90,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            var e = 7 * Math.floor((t - 1) / 7);
                            return (t + n.weekStartsOn + 6) % 7 + e
                        };
                        switch (e) {
                            case "e":
                            case "ee":
                                return $r(e.length, t, s);
                            case "eo":
                                return i.ordinalNumber(t, {
                                    unit: "day",
                                    valueCallback: s
                                });
                            case "eee":
                                return i.day(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "short",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "eeeee":
                                return i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "eeeeee":
                                return i.day(t, {
                                    width: "short",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "eeee":
                            default:
                                return i.day(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "short",
                                    context: "formatting"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 6
                    },
                    set: function(t, e, i, n) {
                        return (t = Tr(t, i, n)).setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
                },
                c: {
                    priority: 90,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            var e = 7 * Math.floor((t - 1) / 7);
                            return (t + n.weekStartsOn + 6) % 7 + e
                        };
                        switch (e) {
                            case "c":
                            case "cc":
                                return $r(e.length, t, s);
                            case "co":
                                return i.ordinalNumber(t, {
                                    unit: "day",
                                    valueCallback: s
                                });
                            case "ccc":
                                return i.day(t, {
                                    width: "abbreviated",
                                    context: "standalone"
                                }) || i.day(t, {
                                    width: "short",
                                    context: "standalone"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "ccccc":
                                return i.day(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "cccccc":
                                return i.day(t, {
                                    width: "short",
                                    context: "standalone"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "cccc":
                            default:
                                return i.day(t, {
                                    width: "wide",
                                    context: "standalone"
                                }) || i.day(t, {
                                    width: "abbreviated",
                                    context: "standalone"
                                }) || i.day(t, {
                                    width: "short",
                                    context: "standalone"
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "standalone"
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 6
                    },
                    set: function(t, e, i, n) {
                        return (t = Tr(t, i, n)).setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
                },
                i: {
                    priority: 90,
                    parse: function(t, e, i, n) {
                        var s = function(t) {
                            return 0 === t ? 7 : t
                        };
                        switch (e) {
                            case "i":
                            case "ii":
                                return $r(e.length, t);
                            case "io":
                                return i.ordinalNumber(t, {
                                    unit: "day"
                                });
                            case "iii":
                                return i.day(t, {
                                    width: "abbreviated",
                                    context: "formatting",
                                    valueCallback: s
                                }) || i.day(t, {
                                    width: "short",
                                    context: "formatting",
                                    valueCallback: s
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting",
                                    valueCallback: s
                                });
                            case "iiiii":
                                return i.day(t, {
                                    width: "narrow",
                                    context: "formatting",
                                    valueCallback: s
                                });
                            case "iiiiii":
                                return i.day(t, {
                                    width: "short",
                                    context: "formatting",
                                    valueCallback: s
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting",
                                    valueCallback: s
                                });
                            case "iiii":
                            default:
                                return i.day(t, {
                                    width: "wide",
                                    context: "formatting",
                                    valueCallback: s
                                }) || i.day(t, {
                                    width: "abbreviated",
                                    context: "formatting",
                                    valueCallback: s
                                }) || i.day(t, {
                                    width: "short",
                                    context: "formatting",
                                    valueCallback: s
                                }) || i.day(t, {
                                    width: "narrow",
                                    context: "formatting",
                                    valueCallback: s
                                })
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 7
                    },
                    set: function(t, e, i, n) {
                        return (t = function(t, e) {
                            mt(2, arguments);
                            var i = St(e);
                            i % 7 == 0 && (i -= 7);
                            var n = 1,
                                s = gt(t),
                                r = s.getUTCDay(),
                                o = i % 7,
                                a = (o + 7) % 7,
                                l = (a < n ? 7 : 0) + i - r;
                            return s.setUTCDate(s.getUTCDate() + l), s
                        }(t, i, n)).setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
                },
                a: {
                    priority: 80,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "a":
                            case "aa":
                            case "aaa":
                                return i.dayPeriod(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "aaaaa":
                                return i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "aaaa":
                            default:
                                return i.dayPeriod(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCHours(Xr(i), 0, 0, 0), t
                    },
                    incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"]
                },
                b: {
                    priority: 80,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "b":
                            case "bb":
                            case "bbb":
                                return i.dayPeriod(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "bbbbb":
                                return i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "bbbb":
                            default:
                                return i.dayPeriod(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCHours(Xr(i), 0, 0, 0), t
                    },
                    incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"]
                },
                B: {
                    priority: 80,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "B":
                            case "BB":
                            case "BBB":
                                return i.dayPeriod(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "BBBBB":
                                return i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "BBBB":
                            default:
                                return i.dayPeriod(t, {
                                    width: "wide",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }) || i.dayPeriod(t, {
                                    width: "narrow",
                                    context: "formatting"
                                })
                        }
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCHours(Xr(i), 0, 0, 0), t
                    },
                    incompatibleTokens: ["a", "b", "t", "T"]
                },
                h: {
                    priority: 70,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "h":
                                return Gr(Mr, t);
                            case "ho":
                                return i.ordinalNumber(t, {
                                    unit: "hour"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 12
                    },
                    set: function(t, e, i, n) {
                        var s = t.getUTCHours() >= 12;
                        return s && i < 12 ? t.setUTCHours(i + 12, 0, 0, 0) : s || 12 !== i ? t.setUTCHours(i, 0, 0, 0) : t.setUTCHours(0, 0, 0, 0), t
                    },
                    incompatibleTokens: ["H", "K", "k", "t", "T"]
                },
                H: {
                    priority: 70,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "H":
                                return Gr(wr, t);
                            case "Ho":
                                return i.ordinalNumber(t, {
                                    unit: "hour"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 23
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCHours(i, 0, 0, 0), t
                    },
                    incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"]
                },
                K: {
                    priority: 70,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "K":
                                return Gr(xr, t);
                            case "Ko":
                                return i.ordinalNumber(t, {
                                    unit: "hour"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 11
                    },
                    set: function(t, e, i, n) {
                        return t.getUTCHours() >= 12 && i < 12 ? t.setUTCHours(i + 12, 0, 0, 0) : t.setUTCHours(i, 0, 0, 0), t
                    },
                    incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"]
                },
                k: {
                    priority: 70,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "k":
                                return Gr(Cr, t);
                            case "ko":
                                return i.ordinalNumber(t, {
                                    unit: "hour"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 1 && e <= 24
                    },
                    set: function(t, e, i, n) {
                        var s = i <= 24 ? i % 24 : i;
                        return t.setUTCHours(s, 0, 0, 0), t
                    },
                    incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"]
                },
                m: {
                    priority: 60,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "m":
                                return Gr(Er, t);
                            case "mo":
                                return i.ordinalNumber(t, {
                                    unit: "minute"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 59
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMinutes(i, 0, 0), t
                    },
                    incompatibleTokens: ["t", "T"]
                },
                s: {
                    priority: 50,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "s":
                                return Gr(Or, t);
                            case "so":
                                return i.ordinalNumber(t, {
                                    unit: "second"
                                });
                            default:
                                return $r(e.length, t)
                        }
                    },
                    validate: function(t, e, i) {
                        return e >= 0 && e <= 59
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCSeconds(i, 0), t
                    },
                    incompatibleTokens: ["t", "T"]
                },
                S: {
                    priority: 30,
                    parse: function(t, e, i, n) {
                        return $r(e.length, t, (function(t) {
                            return Math.floor(t * Math.pow(10, 3 - e.length))
                        }))
                    },
                    set: function(t, e, i, n) {
                        return t.setUTCMilliseconds(i), t
                    },
                    incompatibleTokens: ["t", "T"]
                },
                X: {
                    priority: 10,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "X":
                                return zr(Ur, t);
                            case "XX":
                                return zr(Vr, t);
                            case "XXXX":
                                return zr(Br, t);
                            case "XXXXX":
                                return zr(jr, t);
                            case "XXX":
                            default:
                                return zr(Wr, t)
                        }
                    },
                    set: function(t, e, i, n) {
                        return e.timestampIsSet ? t : new Date(t.getTime() - i)
                    },
                    incompatibleTokens: ["t", "T", "x"]
                },
                x: {
                    priority: 10,
                    parse: function(t, e, i, n) {
                        switch (e) {
                            case "x":
                                return zr(Ur, t);
                            case "xx":
                                return zr(Vr, t);
                            case "xxxx":
                                return zr(Br, t);
                            case "xxxxx":
                                return zr(jr, t);
                            case "xxx":
                            default:
                                return zr(Wr, t)
                        }
                    },
                    set: function(t, e, i, n) {
                        return e.timestampIsSet ? t : new Date(t.getTime() - i)
                    },
                    incompatibleTokens: ["t", "T", "X"]
                },
                t: {
                    priority: 40,
                    parse: function(t, e, i, n) {
                        return Yr(t)
                    },
                    set: function(t, e, i, n) {
                        return [new Date(1e3 * i), {
                            timestampIsSet: !0
                        }]
                    },
                    incompatibleTokens: "*"
                },
                T: {
                    priority: 20,
                    parse: function(t, e, i, n) {
                        return Yr(t)
                    },
                    set: function(t, e, i, n) {
                        return [new Date(i), {
                            timestampIsSet: !0
                        }]
                    },
                    incompatibleTokens: "*"
                }
            },
            eo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
            io = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
            no = /^'([^]*?)'?$/,
            so = /''/g,
            ro = /\S/,
            oo = /[a-zA-Z]/;

        function ao(t, e, i, n) {
            mt(3, arguments);
            var s = String(t),
                r = String(e),
                o = n || {},
                a = o.locale || os;
            if (!a.match) throw new RangeError("locale must contain match property");
            var l = a.options && a.options.firstWeekContainsDate,
                c = null == l ? 1 : St(l),
                u = null == o.firstWeekContainsDate ? c : St(o.firstWeekContainsDate);
            if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var h = a.options && a.options.weekStartsOn,
                d = null == h ? 0 : St(h),
                p = null == o.weekStartsOn ? d : St(o.weekStartsOn);
            if (!(p >= 0 && p <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if ("" === r) return "" === s ? gt(i) : new Date(NaN);
            var f, m = {
                    firstWeekContainsDate: u,
                    weekStartsOn: p,
                    locale: a
                },
                g = [{
                    priority: 10,
                    set: lo,
                    index: 0
                }],
                y = r.match(io).map((function(t) {
                    var e = t[0];
                    return "p" === e || "P" === e ? (0, Ls[e])(t, a.formatLong, m) : t
                })).join("").match(eo),
                v = [];
            for (f = 0; f < y.length; f++) {
                var T = y[f];
                !o.useAdditionalWeekYearTokens && Hs(T) && ks(T), !o.useAdditionalDayOfYearTokens && Rs(T) && ks(T);
                var b = T[0],
                    S = to[b];
                if (S) {
                    var P = S.incompatibleTokens;
                    if (Array.isArray(P)) {
                        for (var A = void 0, w = 0; w < v.length; w++) {
                            var C = v[w].token;
                            if (-1 !== P.indexOf(C) || C === b) {
                                A = v[w];
                                break
                            }
                        }
                        if (A) throw new RangeError("The format string mustn't contain `".concat(A.fullToken, "` and `").concat(T, "` at the same time"))
                    } else if ("*" === S.incompatibleTokens && v.length) throw new RangeError("The format string mustn't contain `".concat(T, "` and any other token at the same time"));
                    v.push({
                        token: b,
                        fullToken: T
                    });
                    var x = S.parse(s, T, a.match, m);
                    if (!x) return new Date(NaN);
                    g.push({
                        priority: S.priority,
                        set: S.set,
                        validate: S.validate,
                        value: x.value,
                        index: g.length
                    }), s = x.rest
                } else {
                    if (b.match(oo)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + b + "`");
                    if ("''" === T ? T = "'" : "'" === b && (T = co(T)), 0 !== s.indexOf(T)) return new Date(NaN);
                    s = s.slice(T.length)
                }
            }
            if (s.length > 0 && ro.test(s)) return new Date(NaN);
            var M = g.map((function(t) {
                    return t.priority
                })).sort((function(t, e) {
                    return e - t
                })).filter((function(t, e, i) {
                    return i.indexOf(t) === e
                })).map((function(t) {
                    return g.filter((function(e) {
                        return e.priority === t
                    })).reverse()
                })).map((function(t) {
                    return t[0]
                })),
                E = gt(i);
            if (isNaN(E)) return new Date(NaN);
            var O = ls(E, _s(E)),
                D = {};
            for (f = 0; f < M.length; f++) {
                var L = M[f];
                if (L.validate && !L.validate(O, L.value, m)) return new Date(NaN);
                var _ = L.set(O, D, L.value, m);
                _[0] ? (O = _[0], vr(D, _[1])) : O = _
            }
            return O
        }

        function lo(t, e) {
            if (e.timestampIsSet) return t;
            var i = new Date(0);
            return i.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), i.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()), i
        }

        function co(t) {
            return t.match(no)[1].replace(so, "'")
        }
        var uo = sr(ao, 3),
            ho = sr(as, 2);
        class po {
            constructor(t, e, i) {
                this.symbol = t, this.aggregation = e, this.offset = i || 0, this.previousTime = new Date(0), this.dateFormat = this.getDateFormat(), this.timeZone = this.getTimeZone(), this.hasOpenInterest = Rt(t)
            }
            makeContainer() {
                return new qs(er(this.symbol, this.aggregation))
            }
            parse(t) {
                this.container = this.makeContainer();
                const e = t.split("\n"),
                    i = this.getParseFunc();
                if (null !== i) {
                    const t = i.bind(this);
                    e.forEach(e => {
                        const i = e.trim();
                        if (i) {
                            const e = i.split(",");
                            t(e)
                        }
                    })
                }
                return this.container
            }
            getParseFunc() {
                return this.aggregation.isTick ? this.parseTick : this.aggregation.isIntraday ? this.parseMinutes : this.parseEod
            }
            parseTick(t) {
                const e = t.length - 5;
                0 !== e && 1 !== e || (this.container.addDataPoint(en.DateTime, this.parseDate(t[0 + e])), this.container.addDataPoint(en.Last, parseFloat(t[3 + e])), this.container.addDataPoint(en.TradeSize, parseInt(t[4 + e])), this.container.addDataPoint(en.Change, this.calculateChange(en.Last)))
            }
            nullify(t) {
                return 0 === t ? null : t
            }
            parseMinutes(t) {
                let e = this.symbol.includes("*") ? 1 : 0;
                t.length === 7 + e && (this.container.addDataPoint(en.DateTime, this.parseDate(t[0 + e])), this.container.addDataPoint(en.Open, parseFloat(t[2 + e])), this.container.addDataPoint(en.High, parseFloat(t[3 + e])), this.container.addDataPoint(en.Low, parseFloat(t[4 + e])), this.container.addDataPoint(en.Close, parseFloat(t[5 + e])), this.container.addDataPoint(en.Volume, this.nullify(parseInt(t[6 + e]))), this.container.addDataPoint(en.Change, this.calculateChange()))
            }
            parseEod(t) {
                const e = this.aggregation.isMultiContract,
                    i = 7 + (this.hasOpenInterest ? 1 : 0);
                t.length === i && (e && this.container.addDataPoint(en.Symbol, t[0]), this.container.addDataPoint(en.DateTime, this.parseDate(t[1])), this.container.addDataPoint(en.Open, parseFloat(t[2])), this.container.addDataPoint(en.High, parseFloat(t[3])), this.container.addDataPoint(en.Low, parseFloat(t[4])), this.container.addDataPoint(en.Close, parseFloat(t[5])), this.container.addDataPoint(en.Volume, this.nullify(parseInt(t[6]))), this.hasOpenInterest && this.container.addDataPoint(en.OpenInterest, this.nullify(parseInt(t[7]))), this.container.addDataPoint(en.Change, this.calculateChange()))
            }
            calculateChange(t = en.Close) {
                const e = this.container.size;
                if (e > 1) {
                    const i = this.container.getData(t);
                    return i[e - 1] - i[e - 2]
                }
                return 0
            }
            getDateFormat() {
                switch (this.aggregation.unit) {
                    case c.Tick:
                        return Zt.FMT_HIST_FEED_TICK;
                    case c.Intraday:
                        return Zt.FMT_HIST_FEED_INTRADAY;
                    default:
                        return Zt.FMT_ISO_DATE_ONLY
                }
            }
            parseDate(t) {
                const e = uo(new Date, this.dateFormat);
                if (this.aggregation.isEndOfDay) return D(e, dr(this.offset))(t); {
                    const i = e(t);
                    return Ct(i, this.previousTime) ? this.previousTime = i : this.previousTime = ho(1)(this.previousTime), this.previousTime
                }
            }
            getTimeZone() {
                return Ht(this.symbol)
            }
        }
        class fo {
            getPageNameFor(t) {
                switch (t.unit) {
                    case c.Tick:
                        return Zt.BARCHART_HIST_SRV_TICKS_PAGE_NAME;
                    case c.Intraday:
                        return t.spec === u.FormT ? Zt.BARCHART_HIST_SRV_FORMT_INTRADAY_PAGE_NAME : Zt.BARCHART_HIST_SRV_INTRADAY_PAGE_NAME;
                    case c.Day:
                    case c.Week:
                    case c.Month:
                    case c.Quarter:
                    case c.Year:
                        return Zt.BARCHART_HIST_SRV_EOD_PAGE_NAME;
                    default:
                        return ""
                }
            }
            addExtraParams(t) {}
            makeUrl(t) {
                let e = {};
                e.symbol = t.symbol;
                let i = this.getDataParam(t.aggregation);
                i.length > 0 && (e.data = i), t.aggregation.size > 1 && t.aggregation.unit === c.Intraday && (e.interval = t.aggregation.size.toString());
                const [n, s] = t.range;
                if (null !== n) e.start = this.toHistoricalFeedDate(n, t.aggregation);
                else {
                    let i = t.barsToFetch || Zt.DEFAULT_MAX_RECORDS;
                    t.aggregation.unit === c.Tick && t.aggregation.spec !== u.None && (i *= Zt.TICK_CUSTOM_AGG_MULTIPLIER), e.maxrecords = i.toString()
                }
                null !== s && (e.end = this.toHistoricalFeedDate(s, t.aggregation)), e.volume = t.aggregation.isContractVolume ? "contract" : "total", e.order = "asc", e.dividends = t.aggregation.dividendsAdjust.toString(), e.backadjust = t.aggregation.backAdjust.toString(), e.daystoexpiration = t.aggregation.daysToExpiration.toString(), e.contractroll = t.aggregation.contractRoll, t.aggregation.isTick && (e.type = "T", e.skipOldEmulation = "true"), this.addExtraParams(e);
                let r = rt(e),
                    o = this.getPageNameFor(t.aggregation);
                return "/".concat(o, "?").concat(r)
            }
            toHistoricalFeedDate(t, e) {
                return js(t, e.isTick || e.isIntraday ? Zt.FMT_HIST_FEED_PARAM_DATE_TIME : Zt.FMT_HIST_FEED_PARAM_DATE_ONLY)
            }
            getDataParam(t) {
                let e = "";
                const i = this.getSpecPart(t);
                switch (t.unit) {
                    case c.Tick:
                    case c.Intraday:
                        break;
                    case c.Day:
                        e = "daily".concat(i);
                        break;
                    case c.Week:
                        e = "weekly".concat(i);
                        break;
                    case c.Month:
                        e = "monthly".concat(i);
                        break;
                    case c.Quarter:
                        e = "quarterly".concat(i);
                        break;
                    case c.Year:
                        e = "yearly".concat(i)
                }
                return e
            }
            getSpecPart(t) {
                return t.isMultiContract ? t.spec === u.Continue ? "continue" : "nearest" : ""
            }
            getParser(t) {
                return new po(t.symbol, t.aggregation, t.offset)
            }
            async retrieve(t) {
                const e = this.makeUrl(t),
                    i = t.aggregation.unit === c.Tick ? "timeseriesNew" : "timeseries",
                    n = await Lp(i, e);
                return this.getParser(t).parse(n)
            }
        }
        var mo = i(0),
            go = i.n(mo);

        function yo(t, e) {
            return function(i) {
                if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return i.lift(new vo(t, e))
            }
        }
        var vo = function() {
                function t(t, e) {
                    this.project = t, this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new To(t, this.project, this.thisArg))
                }, t
            }(),
            To = function(t) {
                function e(e, i, n) {
                    var s = t.call(this, e) || this;
                    return s.project = i, s.count = 0, s.thisArg = n || s, s
                }
                return pn(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.project.call(this.thisArg, t, this.count++)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(e)
                }, e
            }(Cn);
        var bo = sr((function(t, e) {
            mt(2, arguments);
            var i = St(e);
            return ar(t, -i)
        }), 2);
        class So {
            constructor(t) {
                this.query = t, this.container = null, this.canLoadMoreData = !0, this.alignToQuote = !1, this.record = Rp().getRecordSource().getRecord(t.symbol)
            }
            refresh() {
                this.query.aggregation.isEndOfDay ? this.alignToQuote = !0 : this.loadMoreData(!1)
            }
            makeBuilder(t) {
                const e = this.query.aggregation;
                if (this.query.curveStyle === l.Renko) return new gr(t, this.query.symbol);
                if (!e.isTick) return new yr(t, e, this.query.symbol);
                switch (e.spec) {
                    case u.None:
                        return new mr(t);
                    case u.PerSeconds:
                        return new yr(t, e, this.query.symbol);
                    case u.PerCount:
                    case u.PerVolume:
                    case u.PerRange:
                    default:
                        throw new Error("Custom tick aggregation ".concat(e.describe(), " has not been implemented yet"))
                }
            }
            onStreamingUpdates(t) {
                if (this.isLoading) return;
                t.map(t => {
                    if (t.isTrade) return this.builder.process(t);
                    if (t.isQuote && this.alignToQuote) {
                        const e = this.builder.alignToQuote(t);
                        return this.alignToQuote = !1, e
                    }
                    return null
                }).filter(t => q(t)).filter((t, e, i) => {
                    if (0 === e) return !0;
                    const n = i[e - 1];
                    return n.isUpdate !== t.isUpdate || n.time !== t.time
                }).forEach(t => {
                    const e = {
                        series: this,
                        index: t.index
                    };
                    go.a.publish(t.isUpdate ? nn.TS_DATAPOINTCHANGED : nn.TS_DATAPOINTADDED, e)
                })
            }
            get hasData() {
                return null !== this.container
            }
            getRetriever() {
                return new fo
            }
            getStreamingSubscription() {
                return Rp().getRecordSource().subject.pipe(yo(t => {
                    const e = this.query.aggregation.isEndOfDay,
                        i = hn(nn.RT_TRADE, this.query.symbol),
                        n = t.filter(i).filter(t => e || "T" !== t.data.session).map(t => {
                            const i = {
                                isTrade: !0,
                                tradePrice: t.data.tradePrice,
                                tradeSize: t.data.tradeSize,
                                time: t.data.time
                            };
                            return (t => e && "T" === t.data.session)(t) && delete i.tradePrice, i
                        }).reduce((t, e) => {
                            const i = V(t);
                            var n;
                            return q(i) && q(i.tradePrice) && q(e.tradePrice) && i.tradePrice === e.tradePrice && i.time.getTime() === e.time.getTime() ? i.tradeSize += e.tradeSize : t.push((n = e, Object.assign({}, n))), t
                        }, []),
                        s = hn(nn.RT_QUOTE, this.query.symbol);
                    return n.concat(t.filter(s).map(t => ({
                        isQuote: !0,
                        openPrice: t.data.openPrice,
                        highPrice: t.data.highPrice,
                        lowPrice: t.data.lowPrice,
                        lastPrice: t.data.lastPrice,
                        time: t.data.tradeTime
                    })))
                }), Xn(t => t.length > 0)).subscribe(this.onStreamingUpdates.bind(this))
            }
            async loadMoreData(t = !0) {
                if (this.isLoading) return Promise.resolve();
                this.isLoading = !0, t ? await this.loadHeadChunk() : await this.loadTailChunk(), this.isLoading = !1
            }
            async loadTailChunk() {
                this.query.range = [this.container.getLastDataPoint(en.DateTime), null];
                const t = await this.retriver.retrieve(this.query),
                    e = this.container.size,
                    i = this.container.append(t);
                go.a.publish(nn.TS_MANYCHANGED, {
                    series: this,
                    part: C.Tail,
                    count: i,
                    index: e
                })
            }
            async loadHeadChunk() {
                this.query.range = [null, this.container.getData(en.DateTime)[0]];
                const t = await this.retriver.retrieve(this.query);
                this.canLoadMoreData = t.size === this.query.barsToFetch, t.size > 0 && (this.container.prepend(t), go.a.publish(nn.TS_MANYCHANGED, {
                    series: this,
                    part: C.Head
                }))
            }
            async ready() {
                return Xt.call(this, async () => {
                    this.retriver = this.getRetriever();
                    const t = await this.retriver.retrieve(this.query);
                    return this.canLoadMoreData = t.size === this.query.barsToFetch, this.builder = this.makeBuilder(t), this.container = this.builder.container, this.query.disableStreamingUpdates || (this.streamingSubscription = this.getStreamingSubscription()), !0
                })
            }
            getCacheableEntities(t) {
                t.add(this)
            }
            shutdown() {
                q(this.streamingSubscription) && this.streamingSubscription.unsubscribe()
            }
        }
        class Po {
            constructor(t) {
                this.query = t, this.container = new Xs
            }
            get hasData() {
                return !1
            }
            async ready() {
                return !1
            }
            getCacheableEntities(t) {}
            shutdown() {}
        }
        class Ao {
            constructor(t) {
                this.query = t, this.container = null
            }
            get hasData() {
                return null !== this.container
            }
            shutdown() {}
            parseEvents(t) {
                var e = new qs([en.DateTime, en.Dividends, en.Earnings, en.Splits]);
                let i = t.split("\n");
                const n = (t, i, n, s) => {
                    const r = i === n ? s : null;
                    e.addDataPoint(t, r)
                };
                return i.forEach(t => {
                    if ("" === t.trim()) return;
                    let i = t.split(",");
                    if (4 === i.length) {
                        var s = ao(i[1], Zt.FMT_ISO_DATE_ONLY, new Date);
                        e.addDataPoint(en.DateTime, s), n(en.Dividends, "Dividend", i[2], i[3]), n(en.Earnings, "Earnings", i[2], i[3]), n(en.Splits, "Split", i[2], i[3])
                    }
                }), e
            }
            makeUrl() {
                let t = {};
                t.symbols = this.query.symbol, t.start = "19700102", t.end = "20501230", Zt.EVENTS_BUILT_IN.forEach(e => t[e] = this.query[e]);
                let e = rt(t);
                return "/queryevents.ashx?".concat(e)
            }
            async retrieve() {
                const t = this.makeUrl(),
                    e = await Lp("timeseries", t);
                return this.parseEvents(e)
            }
            async ready() {
                return Xt.call(this, async () => (this.container = await this.retrieve(), !0))
            }
            getCacheableEntities(t) {
                t.add(this)
            }
        }
        class wo {
            constructor(t) {
                this.query = t, this.container = null
            }
            get hasData() {
                return null !== this.container
            }
            parseFundamental(t) {
                let e = JSON.parse(t);
                if (200 !== e.status.code) return null;
                let i = new qs(this.query.fields.concat(en.DateTime)),
                    n = this.query.fields[0],
                    s = n.id.substring(0, 1).toLowerCase() + n.id.substring(1);
                return e.results.reverse().forEach(t => {
                    i.addDataPoint(en.DateTime, ao(t.date, Zt.FMT_ISO_DATE_ONLY, new Date)), i.addDataPoint(n, parseInt(t[s]))
                }), i
            }
            makeUrl() {
                let t = {
                    count: 0,
                    rawData: 1
                };
                t.symbols = this.query.symbol, t.frequency = this.query.aggregation.unit === c.Quarter ? "Quarter" : "Annual";
                let e = rt(t),
                    i = this.query.seriesKind === v.BalanceSheet ? "getBalanceSheets" : "getIncomeStatements";
                return "/".concat(i, ".json?").concat(e)
            }
            async retrieve() {
                const t = this.makeUrl(),
                    e = await Lp("ondemand", t);
                return this.parseFundamental(e)
            }
            async ready() {
                return Xt.call(this, async () => (this.container = await this.retrieve(), !0))
            }
            getCacheableEntities(t) {
                t.add(this)
            }
        }

        function Co(t, e) {
            const i = t.findIndex(t => t > e);
            return Math.max(i < 0 ? t.length - 1 : i, 0)
        }
        class xo {
            constructor(t) {
                this.query = t;
                const e = Rp().getRecordSource();
                this.records = t.symbols.reduce((t, i) => {
                    const n = e.getRecord(i);
                    return n.addFields(en.DateTime, en.Symbol), n.update(en.DateTime, Ut(i)), n.update(en.Symbol, i), t[i] = n, t
                }, {}), this.dataPoints = t.symbols.length, this.container = null, this.fields = [en.DateTime, en.Close, en.Symbol]
            }
            get hasData() {
                return null !== this.container && this.container.size === this.dataPoints
            }
            getStreamingSubscription() {
                return Rp().getRecordSource().subject.pipe(Xn(t => t.length > 0)).subscribe(this.onStreamingUpdates.bind(this))
            }
            onStreamingUpdates(t) {
                t.map(t => {
                    const e = t.data,
                        i = this.records[e.symbol];
                    return q(i) ? this.setDataFor(i) : null
                }).filter(t => q(t)).reduce((t, e) => (t.add(e), t), new Set);
                go.a.publish(nn.TS_MANYCHANGED, {
                    series: this,
                    part: C.Unspecified
                })
            }
            findOrAddIndex(t) {
                let e = this.container.getData(en.Symbol).indexOf(t.symbol);
                if (e < 0) {
                    const i = this.container.getData(en.DateTime),
                        n = Ut(t.symbol);
                    e = Co(i, n), this.fields.forEach(t => this.container.getData(t).splice(e, 0, null))
                }
                return e
            }
            setDataFor(t, e = !0) {
                if (!this.fields.every(e => q(t.getValue(e)))) return;
                const i = this.findOrAddIndex(t);
                return this.fields.forEach(e => this.container.getData(e)[i] = t.getValue(e)), e ? i : null
            }
            async retrieve() {
                const t = Object.values(this.records);
                return (await Promise.all(t.map(t => t.ready()))).every(L) && (this.container = new qs(this.fields), t.forEach(t => this.setDataFor(t, !1)), this.streamingSubscription = this.getStreamingSubscription()), this.hasData
            }
            async ready() {
                return Xt.call(this, async () => await this.retrieve())
            }
            getCacheableEntities(t) {
                t.add(this)
            }
            shutdown() {
                q(this.streamingSubscription) && this.streamingSubscription.unsubscribe()
            }
        }
        class Mo {
            constructor(t) {
                this.query = t, this.fields = [en.DateTime, en.Close, en.Symbol], this.container = null
            }
            get hasData() {
                return null !== this.container
            }
            insertValues(t, e, i) {
                const n = (e, i, n) => t.getData(i).splice(e, 0, n),
                    s = t.getData(en.DateTime),
                    r = Ut(e),
                    o = Co(s, r);
                n(o, en.DateTime, r), n(o, en.Close, i), n(o, en.Symbol, e)
            }
            parseHistoricalForward(t) {
                const e = new qs(this.fields);
                return t.split("\n").filter(t => t.trim().length > 0).forEach(t => {
                    const i = t.split(","),
                        n = i[0];
                    this.insertValues(e, n, parseFloat(i[5]))
                }), e
            }
            makeUrl() {
                let t = {};
                t.symbols = this.query.symbols.join(","), t.maxrecords = 1, t.data = "daily", t.end = D(bo(this.query.offset), pr(Zt.FMT_HIST_FEED_PARAM_DATE_ONLY))(new Date);
                let e = rt(t);
                return "/querylatesteod.ashx?".concat(e)
            }
            async retrieve() {
                const t = this.makeUrl(),
                    e = await Lp("timeseries", t);
                return this.parseHistoricalForward(e)
            }
            async ready() {
                return Xt.call(this, async () => (this.container = await this.retrieve(), !0))
            }
            getCacheableEntities(t) {
                t.add(this)
            }
        }
        class Eo {
            constructor(t = !1) {
                this.cacheSeries = t, this.seriesCache = new Map
            }
            getTimeSeries(t) {
                return q(t.symbol) && t.symbol === Zt.PLACEHOLDER_SYMBOL_NAME ? new Po(t) : this.getSeries(t)
            }
            evictUnused(t) {
                for (const [e, i] of this.seriesCache) t.has(i) || (i.isCached = !1, i.shutdown(), this.seriesCache.delete(e))
            }
            refresh() {
                for (const t of this.seriesCache.values()) "function" == typeof t.refresh && t.refresh()
            }
            getSeries(t) {
                const e = t.cacheMe || this.cacheSeries,
                    i = t.getHashKey();
                if (e && this.seriesCache.has(i)) return this.seriesCache.get(i);
                var n = this.makeSeries(t);
                return n.isCached = !0, e && this.seriesCache.set(i, n), n
            }
            makeSeries(t) {
                switch (t.seriesKind) {
                    case v.Normal:
                        return new So(t);
                    case v.BalanceSheet:
                    case v.IncomeStatement:
                        return new wo(t);
                    case v.Events:
                        return new Ao(t);
                    case v.Forward:
                        return new xo(t);
                    case v.HistoricalForward:
                        return new Mo(t);
                    default:
                    case v.Study:
                        throw new Error("The series kind '".concat(v[t.seriesKind], "' is not supported yet."))
                }
            }
        }
        var Oo = i(1),
            Do = i.n(Oo);
        class Lo {
            constructor() {
                this.id = Do()(), this.plot = null
            }
            get shift() {
                return this._shift
            }
            set shift(t) {
                this._shift = q(t) ? t : 0
            }
            get isOhlc() {
                return (this.isOhlcStyle || this.isCandle || this.isHlcStyle || this.isElderImpulseSystemStyle) && this.fields.includes(en.Close)
            }
            get name() {
                return this.isOhlc ? "" : this.fields[0].name
            }
            get isHeikinAshiStyle() {
                return this.style === l.HeikinAshi
            }
            get isCandle() {
                return this.style === l.Candlestick || this.style === l.HollowCandles || this.style === l.HeikinAshi
            }
            get isHollowCandles() {
                return this.style === l.HollowCandles
            }
            get isElderImpulseSystemStyle() {
                return this.style === l.ElderImpulseSystem
            }
            get isOhlcStyle() {
                return this.style === l.OHLC
            }
            get isHlcStyle() {
                return this.style === l.HLC
            }
            get isRenko() {
                return this.style === l.Renko
            }
            fromModel(t) {
                t.attributes && (this.attributes = t.attributes.map(t => a[t])), this.colors = t.colors, this.fields = t.fields.map(t => en[t]), this.style = l[t.style], this.lineWidth = t.lineWidth, this.varyColorPerBar = t.varyColorPerBar, this.visible = t.visible, t.zones && (this.zones = t.zones), this.shift = t.shift
            }
            get axis() {
                return this.plot.axis
            }
            get pane() {
                return this.plot.axis.pane
            }
            get timeSeries() {
                return this.plot.timeSeries
            }
            get presenter() {
                return this.plot.axis.pane.presenter
            }
            get view() {
                return this.plot.axis.pane.presenter.view
            }
            timeToX(t) {
                return this.view.xAxis.xScale.timeToX(t)
            }
            priceToY(t) {
                return this.axis.yScale.priceToY(t)
            }
            dataAt(t, e, i = !0) {
                const n = !i && t === en.Change,
                    s = n ? en.Close : t,
                    r = (t, e) => {
                        const i = this.timeSeries.container.getData(t)[e];
                        return this.plot.priceMapper ? this.plot.priceMapper(i) : i
                    },
                    o = r(s, e);
                return n ? e <= 1 ? 0 : o - r(s, e - 1) : o
            }
            timeSeriesAt(t) {
                const e = this.timeSeries.container.getTimeData().length;
                return t < 0 || t > e - 1 ? null : this.timeSeries.container.getTimeData()[t]
            }
            timelineAt(t) {
                return this.presenter.timeline.at(t)
            }
            get shiftedTimeDomain() {
                const t = this.view.xAxis.xScale;
                return q(t.extent()) ? 0 !== this.shift ? t.extent().map(e => t.timeline.at(e - this.shift)) : t.domain() : null
            }
            draw(t) {
                const e = this.timeSeries;
                if (!e.hasData || !this.visible) return;
                const i = this.view.xAxis.xScale.extent();
                if (!q(i)) return;
                const n = this.axis.yScale,
                    s = n.priceDomain();
                if (!q(s)) return;
                t.save(), t.setLineDash([]);
                const r = e.container.getTimeData(),
                    o = this.shiftedTimeDomain[0],
                    a = {
                        bar: this.view.xAxis.xScale.bar,
                        priceDomain: s,
                        domain: n.domain(),
                        range: n.range(),
                        slice: i,
                        start: j(r, +o, Number) || 0
                    },
                    c = q(this.zones);
                this.isOhlc ? Bo.call(this, t, a) : this.isRenko ? ko.call(this, t, a) : this.style === l.Ribbon ? this.varyColorPerBar ? zo.call(this, t, a) : Go.call(this, t, a, this.colors[0]) : this.style === l.Area ? c ? Ho.call(this, t, a, Io, !0) : Io.call(this, t, a, this.colors, !0) : this.style === l.Column ? Fo.call(this, t, a) : this.style === l.Step ? c ? Ho.call(this, t, a, Vo) : Vo.call(this, t, a, this.colors[0]) : this.style === l.Dots ? Uo.call(this, t, a) : this.style === l.Line ? c ? Ho.call(this, t, a, Wo) : this.varyColorPerBar ? jo.call(this, t, a) : Wo.call(this, t, a) : Op("Drawing of the curve style '".concat(this.style, "' is not implemented yet"), "error"), t.restore()
            }
            pickMainField() {
                return 1 === this.fields.length ? this.fields[0] : this.fields.includes(en.Last) ? en.Last : this.fields.includes(en.Close) ? en.Close : this.fields[0]
            }
            get zoneColors() {
                if (!q(this._zoneColors)) {
                    const t = this.colors.slice();
                    this._zoneColors = this.zones.map(e => t.splice(0, e.colors))
                }
                return this._zoneColors
            }
            getColorsFromZone(t) {
                let e = this.zones.findIndex(e => t < e.value);
                return -1 === e && (e = this.zones.length - 1), this.zoneColors[e]
            }
            pickAreaStroke(t) {
                return t.length < 2 ? Me(t[0]) : t[1]
            }
            getColor(t, e = !0) {
                if (this.varyColorPerBar) {
                    const i = {};
                    if (this.isOhlc) {
                        const e = this.dataAt(en.Open, t),
                            n = this.dataAt(en.High, t),
                            s = this.dataAt(en.Low, t),
                            r = this.dataAt(en.Close, t),
                            o = this.dataAt(en.Change, t);
                        i.open = e, i.high = n, i.low = s, i.close = r, i.change = o
                    } else if (this.plot.isStudy && "VOL" !== this.plot.model.study) {
                        const e = this.pickMainField(),
                            n = this.dataAt(e, t - 1),
                            s = this.dataAt(e, t),
                            r = q(n),
                            o = q(s);
                        i.change = r ? o ? s - n : -1 : o ? 1 : 0
                    } else i.change = this.dataAt(en.Change, t);
                    let n;
                    const s = function({
                                           open: t,
                                           close: e,
                                           change: i
                                       }, n) {
                        const s = n.length > 2,
                            r = q(t, e),
                            o = r && e > t,
                            a = r && e === t,
                            l = i > 0,
                            c = 0 === i;
                        return {
                            useSame: s,
                            isUp: o,
                            isSame: a,
                            isUpPrev: l,
                            isSamePrev: c,
                            isDown: !o && !a,
                            isDownPrev: !l && !c
                        }
                    }(i, this.colors);
                    switch (this.style) {
                        case l.Candlestick:
                        case l.HeikinAshi:
                        case l.OHLC:
                        case l.HLC:
                        case l.Column: {
                            let t = s.useSame ? s.isUp : s.isUp || s.isSame,
                                e = s.isSame;
                            ((this.attributes || []).includes(a.ChangeBased) || this.plot.isStudy) && (t = s.useSame ? s.isUpPrev : s.isUpPrev || s.isSamePrev, e = s.isSamePrev), n = this.colors[t ? 1 : 0], s.useSame && e && (n = this.colors[2]);
                            break
                        }
                        case l.Renko:
                            n = this.dataAt(en.Open, t) - this.dataAt(en.Close, t) > 0 ? this.colors[0] : this.colors[1];
                            break;
                        case l.ElderImpulseSystem:
                            n = this.colors[this.dataAt(en.BREL, t)];
                            break;
                        case l.HollowCandles: {
                            const t = this.colors[s.isUpPrev || s.isSamePrev ? 1 : 0];
                            n = e && (s.isUp || s.isSame) ? Zt.COLOR_TRANSPARENT : t;
                            break
                        }
                        case l.Line:
                        case l.Ribbon:
                            if (this.timeSeries.container.hasField(en.BARCOLIX)) {
                                const e = this.dataAt(en.BARCOLIX, t);
                                if (e >= 0 && e < this.colors.length) {
                                    n = this.colors[e];
                                    break
                                }
                            }
                            n = this.colors[0];
                            break;
                        default:
                            throw new Error("Unexpected style ".concat(l[this.style], " for a curve with varying colors"))
                    }
                    return q(n) || (n = this.colors[0]), n
                }
                if (this.zones) {
                    const e = this.pickMainField(),
                        i = this.dataAt(e, t),
                        n = this.getColorsFromZone(i);
                    return this.style === l.Area ? this.pickAreaStroke(n) : n.length > 0 ? n[0] : this.colors[0]
                }
                return this.colors[0]
            }
        }

        function _o([t, e], i, n) {
            let s = i;
            const r = this.timeSeries.container.size;
            for (let i = t; i <= e; i++) {
                for (; this.timeSeriesAt(s) < this.timelineAt(i - this.shift) && s < r;) ++s;
                if (s === r) break;
                const t = this.timeSeriesAt(s) > this.timelineAt(i - this.shift);
                n.call(this, s, t)
            }
        }

        function Io(t, e, i, n = !1) {
            Wo.call(this, t, e, this.pickAreaStroke(i)), Yo.call(this, t, e, i[0], n)
        }

        function No(t, e) {
            const i = q(t),
                n = q(e);
            let s = null,
                r = null;
            const o = this.pane.getBounds();
            if (i)
                if (n) {
                    const i = this.priceToY(t),
                        n = this.priceToY(e);
                    s = (i + n) / 2, r = new Ie(o.x, n, o.width, i - n)
                } else s = this.priceToY(t), r = new Ie(o.x, o.y, o.width, s - o.y);
            else s = this.priceToY(e), r = new Ie(o.x, s, o.width, o.y + o.height - s);
            return [s, r]
        }
        const Ro = (t, e) => {
            const i = ((t, e = !1) => D(De, i => Ee(i, Te, t, e), Le))(.6)(t),
                n = Oe(.6)(t),
                s = "linLighten" === e;
            return [s ? n : i, t, s ? i : n]
        };

        function Ho(t, e, i, n = !1) {
            let s = null;
            this.zones.forEach((r, o) => {
                const a = r.value,
                    [l, c] = No.call(this, s, a);
                t.save(), _e(t, c), n && (e.range = [null, l]);
                let u = this.zoneColors[o];
                if (r.gradient) {
                    const e = Ro(u, r.gradient),
                        i = t.createLinearGradient(0, c.y, 0, c.y + c.height);
                    i.addColorStop(0, e[0]), i.addColorStop(.5, e[1]), i.addColorStop(1, e[2]), u = i
                }
                i.call(this, t, e, u), t.restore(), s = a
            })
        }

        function ko(t, {
            bar: e,
            slice: i,
            start: n
        }) {
            let s = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2;
            _o.call(this, i, n, (i, n) => {
                if (!n) {
                    const [n, r] = [en.Open, en.Close].map(t => this.dataAt(t, i)).map(this.priceToY, this), o = Math.floor(e.totalWidth / 2);
                    t.fillStyle = this.getColor(i), t.beginPath(), t.rect(s - o, n, e.totalWidth, r - n), t.fill()
                }
                s += e.totalWidth
            })
        }

        function Fo(t, {
            bar: e,
            slice: i,
            start: n
        }) {
            let s = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2;
            const r = e.width,
                o = Ye();
            o.prolog(t), _o.call(this, i, n, (i, n) => {
                if (!n) {
                    const e = this.pickMainField(),
                        n = this.dataAt(e, i);
                    if (q(n)) {
                        const e = this.priceToY(0),
                            a = this.priceToY(n);
                        t.fillStyle = this.getColor(i), t.beginPath(), t.rect(o.adjust(s - r / 2), o.adjust(a), o.adjust(r), o.adjust(e - a)), t.fill()
                    }
                }
                s += e.totalWidth
            }), o.epilog(t)
        }

        function Uo(t, {
            bar: e,
            slice: i,
            start: n
        }) {
            let s = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2;
            t.fillStyle = this.getColor(0);
            const r = Zt.CURVE_STYLE_DOTS_RADIUS,
                o = 2 * Math.PI;
            t.beginPath(), _o.call(this, i, n, (i, n) => {
                if (!n) {
                    const e = this.pickMainField(),
                        n = this.dataAt(e, i);
                    if (q(n)) {
                        const e = this.priceToY(n);
                        t.moveTo(s + r, e), t.arc(s, e, r, 0, o)
                    }
                }
                s += e.totalWidth
            }), t.fill()
        }

        function Vo(t, {
            bar: e,
            slice: i,
            start: n
        }, s) {
            let r = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2;
            const o = Ye();
            o.prolog(t), t.strokeStyle = s, t.lineWidth = this.lineWidth, t.beginPath();
            let a = !1,
                l = null;
            _o.call(this, i, n, (i, n) => {
                if (!n) {
                    const e = this.pickMainField(),
                        n = this.dataAt(e, i);
                    if (q(n)) {
                        const s = this.priceToY(n);
                        if (a) t.lineTo(r, l), t.lineTo(r, s);
                        else {
                            const n = this.dataAt(e, i - 1);
                            if (q(n)) {
                                const e = this.priceToY(n);
                                t.moveTo(-1, e), t.lineTo(r, e), t.lineTo(r, s)
                            } else t.moveTo(r, s);
                            a = !0
                        }
                        l = s
                    }
                }
                r += e.totalWidth
            }), t.stroke(), o.epilog(t)
        }

        function Bo(t, {
            bar: e,
            slice: i,
            start: n
        }) {
            const s = this.presenter.display.chart.showMinMaxArc;
            let r = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2;
            const o = Ye();
            o.prolog(t);
            let a = null,
                l = null,
                c = null,
                u = null;
            const h = e => {
                this.isCandle ? (this.isHollowCandles ? e.outlineColor = this.getColor(e.ix, !1) : (this.colors.length > 3 && (e.outlineColor = this.colors[3]), this.colors.length > 4 && (e.wickColor = this.colors[4])), function(t, {
                    x: e,
                    adjust: i,
                    width: n,
                    y: [s, r, o, a],
                    color: l,
                    outlineColor: c,
                    wickColor: u,
                    isMin: h,
                    isMax: d,
                    arcPadding: p
                }, f) {
                    const m = n / 2;
                    t.lineWidth = f, t.fillStyle = l, t.strokeStyle = c || l, t.beginPath(), t.rect(i(e - m), s, n, i(a - s)), t.fill(), t.stroke(), t.strokeStyle = u || c || l, t.beginPath(), t.moveTo(e, Math.min(a, s)), t.lineTo(e, r), t.moveTo(e, Math.max(a, s)), t.lineTo(e, o), t.stroke();
                    const g = 0 === De(l).a;
                    t.strokeStyle = g ? c : l;
                    const y = h || d;
                    y && t.beginPath();
                    h && t.arc(e, o + p, Math.abs(m), 0, Math.PI);
                    d && t.arc(e, r - p, Math.abs(m), 0, Math.PI, !0);
                    y && t.stroke()
                }(t, e, this.lineWidth)) : (this.isOhlcStyle || this.isHlcStyle || this.isElderImpulseSystemStyle) && function(t, {
                    x: e,
                    adjust: i,
                    width: n,
                    y: [s, r, o, a],
                    color: l,
                    isMin: c,
                    isMax: u,
                    arcPadding: h
                }, d, p) {
                    const f = n / 2;
                    t.lineWidth = d, t.strokeStyle = l, t.beginPath(), t.moveTo(e, o), t.lineTo(e, r), p && (t.moveTo(i(e - f), s), t.lineTo(e, s));
                    t.moveTo(i(e + f), a), t.lineTo(e, a), t.stroke();
                    const m = c || u;
                    m && t.beginPath();
                    c && t.arc(e, o + h, Math.abs(f), 0, Math.PI);
                    u && t.arc(e, r - h, Math.abs(f), 0, Math.PI, !0);
                    m && t.stroke()
                }(t, e, this.lineWidth, !this.isHlcStyle)
            };
            _o.call(this, i, n, (t, i) => {
                if (!i) {
                    const i = [en.Open, en.High, en.Low, en.Close].map(e => this.dataAt(e, t)),
                        [n, s, d, p] = i,
                        f = {
                            x: o.adjust(r),
                            adjust: o.adjust,
                            width: e.width,
                            y: [n, s, d, p].map(this.priceToY, this).map(o.adjust),
                            isMin: !1,
                            isMax: !1,
                            ix: t,
                            arcPadding: 3,
                            color: this.getColor(t)
                        },
                        m = Math.min(...i),
                        g = Math.max(...i);
                    (!q(a) || m < a) && (a = m, c = f), (!q(l) || g > l) && (l = g, u = f), h(f)
                }
                r += e.totalWidth
            }), s && (q(c) && (c.isMin = !0, h(c)), q(u) && (u.isMax = !0, h(u))), o.epilog(t)
        }

        function Wo(t, {
            bar: e,
            slice: i,
            start: n
        }, s = null) {
            t.strokeStyle = s || this.getColor(0), t.lineWidth = this.lineWidth, t.beginPath();
            let r = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2,
                o = !1;
            _o.call(this, i, n, (i, n) => {
                if (!n) {
                    const e = this.pickMainField(),
                        n = this.dataAt(e, i);
                    if (q(n)) {
                        const e = this.priceToY(n);
                        o ? t.lineTo(r, e) : (t.moveTo(r, e), o = !0)
                    }
                }
                r += e.totalWidth
            }), t.stroke()
        }

        function jo(t, {
            bar: e,
            slice: i,
            start: n
        }) {
            t.lineWidth = this.lineWidth;
            let s = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2,
                r = null,
                o = null,
                a = [];
            const l = e => {
                if (a.length > 1) {
                    t.beginPath(), t.strokeStyle = e;
                    const i = a[0];
                    t.moveTo(i.x, i.y);
                    for (let e = 1; e < a.length; e++) {
                        const i = a[e];
                        t.lineTo(i.x, i.y)
                    }
                    t.stroke()
                }
            };
            _o.call(this, i, n, (t, i) => {
                if (!i) {
                    const e = this.pickMainField(),
                        i = this.dataAt(e, t);
                    if (q(i)) {
                        const e = this.priceToY(i);
                        o = this.getColor(t), r !== o ? (l(r), a.length > 0 && (a = [a.pop()]), r = o) : a.push({
                            x: s,
                            y: e
                        })
                    }
                }
                s += e.totalWidth
            }), l(o)
        }

        function Go(t, {
            bar: e,
            slice: i,
            start: n
        }, s) {
            t.fillStyle = s;
            const [r, o] = this.fields;
            let a = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2;
            const l = [];
            if (_o.call(this, i, n, (t, i) => {
                if (!i) {
                    const e = this.dataAt(r, t),
                        i = this.dataAt(o, t);
                    q(e, i) && l.push({
                        x: a,
                        upY: this.priceToY(e),
                        downY: this.priceToY(i)
                    })
                }
                a += e.totalWidth
            }), l.length > 0) {
                t.beginPath(), t.moveTo(l[0].x, l[0].upY);
                for (let e = 1; e < l.length; ++e) t.lineTo(l[e].x, l[e].upY);
                const e = l.length - 1;
                t.lineTo(l[e].x, l[e].downY);
                for (let i = e - 1; i >= 0; --i) t.lineTo(l[i].x, l[i].downY);
                t.closePath(), t.fill()
            }
        }

        function zo(t, {
            bar: e,
            slice: i,
            start: n
        }) {
            const [s, r] = this.fields;
            let o = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2,
                a = [];
            const l = e => {
                if (a.length > 1) {
                    t.beginPath(), t.fillStyle = e, t.moveTo(a[0].x, a[0].upY);
                    for (let e = 1; e < a.length; ++e) t.lineTo(a[e].x, a[e].upY);
                    const i = a.length - 1;
                    t.lineTo(a[i].x, a[i].downY);
                    for (let e = i - 1; e >= 0; --e) t.lineTo(a[e].x, a[e].downY);
                    t.closePath(), t.fill()
                }
            };
            let c = null,
                u = null;
            _o.call(this, i, n, (t, i) => {
                if (!i) {
                    const e = this.dataAt(s, t),
                        i = this.dataAt(r, t);
                    if (q(e, i)) {
                        const n = this.priceToY(e),
                            s = this.priceToY(i);
                        u = this.getColor(t), c !== u && (l(c), a.length > 0 && (a = [a.pop()]), c = u), a.push({
                            x: o,
                            upY: n,
                            downY: s
                        })
                    }
                }
                o += e.totalWidth
            }), l(u)
        }

        function Yo(t, {
            bar: e,
            slice: i,
            start: n,
            range: [s, r]
        }, o, a) {
            if (a) {
                const e = t.createLinearGradient(0, s, 0, r);
                e.addColorStop(0, o);
                const i = De(o);
                i.a = 0, e.addColorStop(1, Le(i)), t.fillStyle = e
            } else t.fillStyle = o;
            t.beginPath();
            let l = null;
            const c = this.pickMainField();
            let u = this.view.xAxis.xScale.range()[0] + e.offset + e.width / 2,
                h = !1,
                d = null,
                p = null,
                f = null;
            _o.call(this, i, n, (i, n) => {
                if (!n) {
                    const e = this.dataAt(c, i);
                    if (!q(d) && e >= 0 && (d = !0), !q(p) && e < 0 && (p = !0), q(e)) {
                        const i = this.priceToY(e);
                        h ? t.lineTo(u, i) : (t.moveTo(l = u, i), h = !0), f = u
                    }
                }
                u += e.totalWidth
            });
            const m = d && p ? this.priceToY(0) : r;
            t.lineTo(f, m), t.lineTo(l, m), t.closePath(), t.fill()
        }
        class $o {
            constructor(t, e, i = v.Normal, n = [null, null]) {
                this.symbol = t, this.aggregation = e, this.range = n, this.seriesKind = i, this.cacheMe = !1, this.barsToFetch = 0, this.offset = 0, this.chartId = null, this.curveStyle = null, this.fields = null, this.needsExtraKey = [v.BalanceSheet, v.IncomeStatement].includes(i)
            }
            getBuilderKey() {
                return q(this.curveStyle) && Zt.SPECIAL_BUILDER_REQUIRED.includes(this.curveStyle) ? l[this.curveStyle] : "Standard"
            }
            getExtraKey() {
                return this.needsExtraKey && q(this.fields) ? "".concat(this.fields.map(t => t.id).join(";")) : ""
            }
            getHashKey() {
                const t = this.aggregation.getHashKey(),
                    e = this.getBuilderKey(),
                    i = this.getExtraKey();
                return "".concat(this.symbol, "|").concat(t, "}|").concat(this.range, "|").concat(this.seriesKind, "|").concat(this.offset, "|").concat(e, "|").concat(i)
            }
        }

        function qo(t, e) {
            return t.symbol === Zt.PLACEHOLDER_SYMBOL_NAME ? new Po : e(t)
        }

        function Xo(t) {
            return new Ji(t, h.Number, p.Study, t)
        }
        class Ko {
            constructor(t, ...e) {
                this.calcCtx = this.container = this._source = this.target = this.inputs = this.outFields = null, this.setOptions(t), this.innerSeries = e, this.calculable = !0, this.useNotifications = this.initialNotification = this.computedServerSide = !1, this.id = Do()()
            }
            setOptions(t) {
                it(this, t);
                const e = t.outFields || [t.target];
                this.studyFields = this.helpers.concat(e).reduce((t, e) => (t[e.id] = e, t), {})
            }
            get helpers() {
                return Zt.EMPTY_ARRAY
            }
            get hasData() {
                return null !== this.container
            }
            get source() {
                if (q(this._source)) return this._source;
                const t = q(this.inputs) ? this.inputs[Zt.INPUT_SOURCE] : null;
                return q(t) ? en[t] : null
            }
            set source(t) {
                this._source = t
            }
            async ready() {
                return Xt.call(this, async () => {
                    this.basisChangedToken = this.useNotifications ? go.a.subscribe(nn.TS_ALL, this.onBasisChanged.bind(this)) : null;
                    const t = {
                            tag: Do()(),
                            src: null
                        },
                        e = (await Promise.all(this.innerSeries.map(t => t.ready()))).every(L);
                    return e && this.calculate(t), e
                })
            }
            shouldTriggerOurRecalc(t) {
                return t === this.innerSeries[0]
            }
            onBasisChanged(t, e) {
                if (t === nn.TS_EVENTSCHANGED || t === nn.TS_LOADING) return;
                if (!this.shouldTriggerOurRecalc(e.series) || null === this.base || this === e.series) return;
                const i = {
                    tag: Do()(),
                    src: e.series
                };
                switch (t) {
                    case nn.TS_MANYCHANGED:
                        this.calculate(i);
                        break;
                    case nn.TS_DATAPOINTCHANGED:
                    case nn.TS_DATAPOINTADDED:
                        this.recalculateAt(i, e.index, t === nn.TS_DATAPOINTADDED);
                        break;
                    default:
                        throw new Error("Unknown time series message, likely forgot to handle it")
                }
            }
            shutdown() {
                this.useNotifications && this.basisChangedToken && go.a.unsubscribe(this.basisChangedToken)
            }
            get base() {
                return this.innCont(0)
            }
            get period() {
                return this.inputs[Zt.INPUT_PERIOD]
            }
            calculateDataPoint(t, e) {
                const i = this.calculateAt(t);
                if (null !== i) {
                    Object.keys(i).forEach(t => {
                        const n = i[t],
                            s = this.studyFields[t];
                        e ? this.container.addDataPoint(s, n) : this.container.setLastDataPoint(s, n)
                    })
                }
            }
            notify(t, e) {
                go.a.publish(t, {
                    series: this,
                    index: e
                })
            }
            calculateCommon(t, e = null, i = -1, n = !0) {
                const s = -1 === i,
                    r = s ? e => {
                        !q(t.src) && q(e.calcCtx) || e.calculate(t)
                    } : e => e.recalculateAt(t, i, n);
                if (null !== this.base && !(this.calcCtx && this.calcCtx.tag === t.tag || this === t.src)) {
                    if (this.calcCtx = t, this.innerSeries.filter(t => t.calculable).forEach(r), s && (this.container = this.makeContainer()), void 0 !== this.calculateAt)
                        if (s) {
                            const t = this.base.size;
                            for (let e = 0; e < t; ++e) this.calculateDataPoint(e, !0)
                        } else this.calculateDataPoint(i, n);
                    e && (q(t.src) || this.initialNotification) && this.notify(e, i)
                }
            }
            calculate(t) {
                this.calculateCommon(t, nn.TS_MANYCHANGED, -1, !0)
            }
            recalculateAt(t, e, i) {
                this.computedServerSide || this.calculateCommon(t, i ? nn.TS_DATAPOINTADDED : nn.TS_DATAPOINTCHANGED, e, i)
            }
            baseVal(t, e) {
                return this.base.getData(t)[e]
            }
            innCont(t) {
                const e = this.innerSeries[t];
                return (e.forStudies || e).container
            }
            innVal(t, e, i) {
                const n = this.innCont(t),
                    s = n.size;
                return i < 0 || i > s - 1 ? null : n.getData(e)[i]
            }
            wrap(...t) {
                return t.reduce((t, e) => (t[e.f.id] = e.g, t), {})
            }
            wrapBaseFields(...t) {
                return t.map(this.wrapBaseField, this)
            }
            wrapInner(t, e) {
                return {
                    f: t,
                    g: () => this.innCont(e).getData(t)
                }
            }
            wrapBaseField(t) {
                return this.wrapInner(t, 0)
            }
            get defaultWrappers() {
                return this.wrapBaseFields(en.DateTime, en.Symbol)
            }
            makeContainer() {
                const t = this.defaultWrappers.concat(this.getWrappers()),
                    e = Object.keys(this.studyFields).map(t => this.studyFields[t], this);
                return new Ks(e, this.wrap(...t))
            }
            getWrappers() {
                return []
            }
            atLeast(t, e) {
                return t >= e - 1
            }
            exactly(t, e) {
                return t == e - 1
            }
            past(t, e, i, n = this.base) {
                return n.getData(i).slice(t - e + 1, t + 1)
            }
            getCacheableEntities(t) {
                this.innerSeries.forEach(e => {
                    e.getCacheableEntities(t)
                })
            }
        }
        class Zo extends Ko {
            constructor(t, ...e) {
                super(t, ...e)
            }
            get _actual() {
                return this.innerSeries[0]
            }
            get canLoadMoreData() {
                return this._actual.canLoadMoreData
            }
            async loadMoreData(t = !0) {
                this._actual.loadMoreData(t)
            }
        }
        class Qo extends Zo {
            constructor(t, e) {
                super(t, e), this.query = e.query, this.useNotifications = !0, this.forStudies = e
            }
            calculateAt(t) {
                const [e, i, n, s] = [en.Open, en.High, en.Low, en.Close].map(e => this.baseVal(e, t), this);
                let r = null,
                    o = null,
                    a = null,
                    l = null;
                const c = I([e, i, n, s]);
                if (t < 1) r = I([e, s]), o = i, a = n, l = 0;
                else {
                    const [e, s] = [en.Open, en.Close].map(e => this.container.getData(e)[t - 1], this);
                    r = I([e, s]), o = Math.max(i, r, c), a = Math.min(n, r, c), l = c - s
                }
                return {
                    [en.Open.id]: r,
                    [en.High.id]: o,
                    [en.Low.id]: a,
                    [en.Close.id]: c,
                    [en.Change.id]: l
                }
            }
            getWrappers() {
                return this.wrapBaseFields(en.Volume, en.OpenInterest)
            }
        }
        class Jo extends Ko {
            constructor(t, e) {
                super(t, e)
            }
            calculateAt(t) {
                let e = null;
                if (this.atLeast(t, this.period) && this.innCont(0).hasField(this.source)) {
                    let i = this.past(t, this.period, this.source);
                    N(i) && (e = I(i))
                }
                return {
                    [this.target.id]: e
                }
            }
            getWrappers() {
                return this.source === en.Volume ? this.wrapBaseFields(en.Volume, en.Change) : []
            }
        }
        class ta extends Ko {
            constructor(t, e, i) {
                super(t, e), this.multiplier = i(this.period)
            }
            calculateAt(t) {
                let e = null;
                if (this.atLeast(t, 2) && this.innCont(0).hasField(this.source)) {
                    let i = this.container.getData(this.target)[t - 1];
                    if (null !== i) {
                        e = (this.baseVal(this.source, t) - i) * this.multiplier + i
                    } else if (this.atLeast(t, this.period)) {
                        let i = this.past(t, this.period, this.source);
                        N(i) && (e = I(i))
                    }
                }
                return {
                    [this.target.id]: e
                }
            }
        }
        const ea = {
            ma: {
                inField: en.MA,
                outFields: [en.ENVU, en.ENVD],
                func: Pc
            },
            maexp: {
                inField: en.EMA,
                outFields: [en.ENVEXPU, en.ENVEXPD],
                func: Ac
            },
            masmo: {
                inField: en.SMA,
                outFields: [en.ENVSMOU, en.ENVSMOD],
                func: wc
            }
        };
        class ia extends Ko {
            constructor(t, e, i) {
                const n = ea[e];
                super(t, i, n.func(i, t.inputs.Period, t.source)), this.variant = n, this.perc = t.inputs.Percent / 100
            }
            calculateAt(t) {
                let e = null,
                    i = null,
                    n = this.innVal(1, this.variant.inField, t);
                if (null !== n) {
                    let t = n * this.perc;
                    e = n + t, i = n - t
                }
                return {
                    [this.variant.outFields[0].id]: e,
                    [this.variant.outFields[1].id]: i
                }
            }
        }
        class na extends Ko {
            constructor(t, e) {
                let i = Pc(e, t.inputs.Period1, t.source),
                    n = Pc(e, t.inputs.Period2, t.source);
                super(t, e, Rc(t.target, (t, e, i) => e - i, i, n))
            }
            getWrappers() {
                return [this.wrapInner(this.target, 1)]
            }
        }
        const sa = {
            macd: {
                fields: [en.MACD, en.MACDS, en.MACDH],
                func: ra
            },
            ctm: {
                fields: [en.MACD, en.CTLTM, en.CTM],
                func: ra
            },
            gpmi: {
                fields: [en.MACD, en.CTLTMF, en.GPMI],
                func: ra
            },
            ppo: {
                fields: [en.PPO, en.PPOS, en.PPOH],
                func: oa
            },
            pvo: {
                fields: [en.PVO, en.PVOS, en.PVOH],
                func: oa
            }
        };

        function ra(t, e, i) {
            return e - i
        }

        function oa(t, e, i) {
            return (e - i) / i * 100
        }
        class aa extends Ko {
            constructor(t, e, i, n) {
                const s = e ? Ac : Pc,
                    {
                        fields: r,
                        func: o
                    } = sa[i];
                let a = s(n, t.inputs.Period1, t.source),
                    l = s(n, t.inputs.Period2, t.source),
                    c = Rc(r[0], o, a, l),
                    u = s(c, t.inputs.Period3, c.target, r[1]);
                super(t, n, c, u, Rc(r[2], ra, c, u)), this.fields = r
            }
            getWrappers() {
                return [this.wrapInner(this.fields[0], 1), this.wrapInner(this.fields[1], 2), this.wrapInner(this.fields[2], 3)]
            }
        }
        const la = Xo("_AVG_GAIN"),
            ca = Xo("_AVG_LOSS");
        class ua extends Ko {
            constructor(t, e, i) {
                super(t, i), this.isModified = e
            }
            get helpers() {
                return [la, ca]
            }
            gain(t, e) {
                return e[t] > e[t - 1] ? e[t] - e[t - 1] : 0
            }
            loss(t, e) {
                return e[t] < e[t - 1] ? e[t - 1] - e[t] : 0
            }
            calculateAt(t) {
                let e = null,
                    i = null,
                    n = null;
                if (this.atLeast(t, this.period + 1)) {
                    if (null === this.container.getData(this.target)[t - 1] || this.isModified) {
                        let e = this.past(t, this.period + 1, this.source);
                        if (N(e)) {
                            const t = R(1, this.period),
                                s = t.map(t => this.gain(t, e), this),
                                r = t.map(t => this.loss(t, e), this);
                            i = I(s), n = I(r)
                        }
                    } else {
                        const e = this.container.getData(la)[t - 1],
                            s = this.container.getData(ca)[t - 1],
                            r = this.past(t, 2, this.source),
                            o = this.gain(1, r),
                            a = this.loss(1, r);
                        i = (e * (this.period - 1) + o) / this.period, n = (s * (this.period - 1) + a) / this.period
                    }
                    null !== i && null !== n && (e = 100 - 100 / (1 + i / n))
                }
                return {
                    [la.id]: i,
                    [ca.id]: n,
                    [this.target.id]: e
                }
            }
        }
        class ha extends Ko {
            constructor(t, e, i, n) {
                super(t, n), this.highest = e, this.index = i
            }
            calculateAt(t) {
                let e = null;
                if (this.atLeast(t, this.inputs.Period)) {
                    const i = this.past(t, this.inputs.Period, this.source);
                    if (N(i)) {
                        e = (this.highest ? Math.max : Math.min)(...i), this.index && (e = this.inputs.Period - i.indexOf(e) - 1)
                    }
                }
                return {
                    [this.target.id]: e
                }
            }
        }
        class da extends Ko {
            constructor(t, e, i) {
                super(t, i, xc(i, t.inputs.Period, en.High, en.HH, !0), xc(i, t.inputs.Period, en.Low, en.LL, !1)), this.toHighest = e
            }
            calculateAt(t) {
                let e = null;
                const i = this.baseVal(en.Close, t),
                    n = this.innVal(1, en.HH, t),
                    s = this.innVal(2, en.LL, t);
                if (N([i, n, s])) {
                    const t = this.toHighest ? n : s,
                        r = n - s;
                    0 !== r && (e = (i - t) / r * 100)
                }
                return {
                    [this.target.id]: e
                }
            }
        }
        const pa = Xo("_ABS_CHG"),
            fa = Xo("_CHG"),
            ma = {
                sma: wc,
                ma: Pc,
                ema: Ac,
                wma: Cc
            };

        function ga(t, e) {
            const i = (t.inputs.Smoothing || e).toLowerCase();
            return ma[i]
        }
        const ya = new Ji("RawPercK", h.Number, p.Study);
        class va extends Ko {
            constructor(t, e, i, n) {
                let s = (r = n, o = t.inputs.Period1, a = !1, new da({
                    target: e ? ya : i,
                    inputs: bc(o)
                }, a, r));
                var r, o, a;
                const l = ga(t, "MA");
                let c = l(s, t.inputs.Period2, s.target, e ? i : en.PercD),
                    u = e ? l(c, t.inputs.Period3, c.target, en.PercD) : c;
                super(t, n, e ? c : s, e ? u : c), this.kField = i
            }
            getWrappers() {
                return [this.wrapInner(this.kField, 1), this.wrapInner(en.PercD, 2)]
            }
        }
        const Ta = 0,
            ba = 1,
            Sa = 2;
        class Pa extends Ko {
            constructor(t, e, i) {
                super(t, i, Ic(i, t.inputs.Period, t.source)), this.kind = e
            }
            calculateAt(t) {
                let e = null,
                    i = null,
                    n = null,
                    s = null,
                    r = null;
                const o = this.innVal(1, en.MSD, t);
                if (null !== o) {
                    r = this.innVal(1, en.MA, t);
                    let a = this.inputs.Width * o;
                    e = r + a, i = r - a, n = 2 * a, s = (this.baseVal(this.source, t) - i) / (e - i)
                }
                switch (this.kind) {
                    case Ta:
                        return {
                            [en.BOLLBU.id]: e, [en.BOLLBL.id]: i, [en.BOLLBM.id]: r
                        };
                    case ba:
                        return {
                            [en.BOLLBW.id]: n
                        };
                    case Sa:
                        return {
                            [en.BOLLBP.id]: s
                        };
                    default:
                        return null
                }
            }
        }
        const Aa = Xo("_PDM"),
            wa = Xo("_MDM"),
            Ca = Xo("_TRS"),
            xa = Xo("_PDS"),
            Ma = Xo("_MDS"),
            Ea = Xo("_DX");
        class Oa extends Ko {
            constructor(t, e, i, n) {
                super(t, n, Mc(n, en.TR)), this.useEma = e, this.adxField = i, this.multiplier = 2 / (t.inputs.AdxSmoothing + 1)
            }
            get helpers() {
                return [Aa, wa, Ca, xa, Ma, Ea]
            }
            sum(t, e, i, n) {
                let s = null;
                if (this.atLeast(t - 1, n - 1)) {
                    let r = this.past(t - 1, n - 1, e, this.container);
                    r.push(i), N(r) && (s = r.reduce((t, e) => t + e, 0))
                }
                return s
            }
            smooth1(t, e, i, n) {
                let s = null;
                const r = this.inputs.DiLength,
                    o = this.container.getData(i)[t - 1];
                return s = null !== o ? o - o / r + n : this.sum(t, e, n, r), s
            }
            smooth2(t, e, i, n) {
                const s = this.container.getData(i)[t - 1],
                    r = this.inputs.AdxSmoothing;
                if (null !== s) return this.useEma ? (n - s) * this.multiplier + s : (s * (r - 1) + n) / r; {
                    const i = this.sum(t, e, n, r);
                    if (null !== i) return i / r
                }
                return null
            }
            calculateAt(t) {
                let e = null,
                    i = null,
                    n = null,
                    s = null,
                    r = null,
                    o = null,
                    a = null,
                    l = null,
                    c = null;
                if (t > 0) {
                    const u = this.past(t, 2, en.High),
                        h = this.past(t, 2, en.Low),
                        d = Math.max(u[1] - u[0], 0),
                        p = Math.max(h[0] - h[1], 0);
                    e = d > p ? d : 0, i = p > d ? p : 0;
                    const f = this.container.getData(en.TR)[t];
                    s = this.smooth1(t, Aa, xa, e), r = this.smooth1(t, wa, Ma, i), n = this.smooth1(t, en.TR, Ca, f), null !== s && (o = s / n * 100, a = r / n * 100, l = 100 * Math.abs(o - a) / (o + a), c = this.smooth2(t, Ea, this.adxField, l))
                }
                return {
                    [Aa.id]: e,
                    [wa.id]: i,
                    [Ca.id]: n,
                    [xa.id]: s,
                    [Ma.id]: r,
                    [en.PDI.id]: o,
                    [en.MDI.id]: a,
                    [Ea.id]: l,
                    [this.adxField.id]: c
                }
            }
            getWrappers() {
                return [this.wrapInner(en.TR, 1)]
            }
        }

        function Da(t) {
            let e = null,
                i = null;
            if (t > 0) {
                const n = this.baseVal(en.Close, t - 1),
                    s = Math.max(n, this.baseVal(en.High, t)),
                    r = Math.min(n, this.baseVal(en.Low, t)),
                    o = this.baseVal(en.Close, t);
                if (e = o > n ? o - r : o < n ? o - s : 0, t > 1) {
                    i = this.container.getData(en.ADWM)[t - 1] + e
                }
            }
            return {
                [en.ADWM.id]: i
            }
        }

        function La(t) {
            const e = [en.Close, en.High, en.Low].map(e => this.baseVal(e, t), this).reduce((t, e) => t + e) / 3;
            return {
                [this.target.id]: e
            }
        }
        class _a extends Ko {
            constructor(t, e, ...i) {
                super(t, ...i), this.calculateAtFunc = e
            }
            calculateAt(t) {
                let e = this.innerSeries.map((e, i) => this.innVal(i, e.target, t)),
                    i = null;
                return N(e) && (i = this.calculateAtFunc(t, ...e)), {
                    [this.target.id]: i
                }
            }
        }

        function Ia(t, e) {
            return {
                [t.id]: (this.baseVal(en.High, e) + this.baseVal(en.Low, e)) / 2
            }
        }

        function Na(t, e) {
            return {
                [t.id]: this.baseVal(en.High, e) - this.baseVal(en.Low, e)
            }
        }
        class Ra extends Ko {
            constructor(t, e, i) {
                super(t, i), this.calculateAtFunc = e
            }
            calculateAt(t) {
                return this.calculateAtFunc.call(this, t)
            }
        }
        const Ha = Xo("_RANGE"),
            ka = Xo("_MOV_RANGE"),
            Fa = {
                mid: {
                    series: t => Dc(t, en.TP),
                    target: en.TP
                },
                range: {
                    series: t => Nc(Ha, O(Na, Ha), t),
                    target: Ha
                }
            },
            Ua = {
                original: {
                    fields: [en.KCUP, en.KCLOW, en.KCMID],
                    mid: Fa.mid,
                    range: Fa.range,
                    func: Pc
                },
                barchart: {
                    fields: [en.KCEUP, en.KCELOW, en.KCEMID],
                    mid: Fa.mid,
                    range: Fa.range,
                    func: Ac
                },
                bands: {
                    fields: [en.KBUP, en.KBLOW, en.KBMID],
                    mid: {
                        series: t => t,
                        target: en.Close
                    },
                    range: {
                        series: t => Mc(t, en.TR),
                        target: en.TR
                    },
                    func: Ac
                }
            };
        class Va extends Ko {
            constructor(t, e, i) {
                const {
                    fields: n,
                    mid: s,
                    range: r,
                    func: o
                } = Ua[e];
                super(t, i, o(s.series(i), t.inputs.Period, s.target, n[2]), o(r.series(i), t.inputs.Period, r.target, ka)), this.fields = n
            }
            calculateAt(t) {
                const e = this.innVal(1, this.fields[2], t),
                    i = this.innVal(2, ka, t),
                    n = null !== e && null !== i,
                    s = this.inputs.Multiplier || 1;
                return {
                    [this.fields[0].id]: n ? e + i * s : null,
                    [this.fields[1].id]: n ? e - i * s : null
                }
            }
            getWrappers() {
                return [this.wrapInner(this.fields[2], 1)]
            }
        }
        class Ba extends Ko {
            constructor(t, e, i) {
                super(t, i, xc(i, t.inputs.Period, en.High, en.DONUP, !0), xc(i, t.inputs.Period, en.Low, en.DONLOW, !1)), this.isWidth = e
            }
            calculateAt(t) {
                const e = this.innVal(1, en.DONUP, t),
                    i = this.innVal(2, en.DONLOW, t),
                    n = null === e && null === i;
                return this.isWidth ? {
                    [en.DONW.id]: n ? null : e - i
                } : {
                    [en.DONMID.id]: n ? null : (e + i) / 2
                }
            }
            getWrappers() {
                return [this.wrapInner(en.DONUP, 1), this.wrapInner(en.DONLOW, 2)]
            }
        }
        const Wa = Xo("_HIND"),
            ja = Xo("_LIND");
        class Ga extends Ko {
            constructor(t, e, i) {
                super(t, i, xc(i, t.inputs.Period, en.High, Wa, !0, !0), xc(i, t.inputs.Period, en.Low, ja, !1, !0)), this.justWidth = e
            }
            calculateAt(t) {
                let e = null,
                    i = null,
                    n = null;
                const s = this.innVal(1, Wa, t),
                    r = this.innVal(2, ja, t);
                return null !== s && null !== r && (e = (this.period - s) / this.period * 100, i = (this.period - r) / this.period * 100, n = e - i), this.justWidth ? {
                    [en.ARNOSC.id]: n
                } : {
                    [en.ARNUP.id]: e,
                    [en.ARNLOW.id]: i
                }
            }
        }
        var za = i(19);
        let Ya = new Map;

        function $a(t, e = !1) {
            const i = t.trim();
            if (e && Ya.has(i)) return J(Ya.get(i));
            try {
                const n = za.parse(i),
                    s = {
                        text: t,
                        model: n,
                        clean: Ka(n),
                        symbols: Za(n)
                    };
                return e && Ya.set(i, s), s
            } catch (e) {
                const i = e.location.start;
                return {
                    text: t,
                    error: "".concat(e.message, " \nLocation: line ").concat(i.line, ", column ").concat(i.column, ".")
                }
            }
        }

        function qa(t, e) {
            return Xa(t, function(t) {
                return (e, i, n) => {
                    if (Ja(e)) switch (e.op) {
                        case "-":
                            return -i;
                        case "grp":
                            return i;
                        case "sym":
                            return t(i);
                        case "num":
                            return i;
                        default:
                            throw new Error("Unrecognized unary operator ".concat(e.op))
                    } else switch (e.op) {
                        case "+":
                            return i + n;
                        case "-":
                            return i - n;
                        case "*":
                            return i * n;
                        case "/":
                            return i / n;
                        case "^":
                            return Math.pow(i, n);
                        default:
                            throw new Error("Unrecognized binary operator ".concat(e.op))
                    }
                }
            }(e))
        }

        function Xa(t, e) {
            if (!q(t)) return null;
            const i = typeof t;
            return "number" === i || "string" === i ? t : e(t, Xa(t.left, e), Xa(t.right, e))
        }

        function Ka(t) {
            return Xa(t, tl)
        }

        function Za(t) {
            let e = new Set;
            return Xa(t, (t, i, n) => {
                "sym" === t.op && e.add(i)
            }), Array.from(e)
        }

        function Qa(t, e) {
            const i = J(t);
            return Xa(i, (t, i, n) => {
                "sym" === t.op && (t.left = e(i))
            }), i
        }

        function Ja(t) {
            return !q(t.right)
        }

        function tl(t, e, i) {
            if (Ja(t)) switch (t.op) {
                case "-":
                    return "".concat(t.op).concat(e);
                case "grp":
                    return "(".concat(e, ")");
                case "sym":
                    return "{".concat(e, "}");
                case "num":
                    return e.toString();
                default:
                    throw new Error("Unrecognized unary operator ".concat(t.op))
            } else switch (t.op) {
                case "+":
                case "-":
                case "*":
                case "/":
                case "^":
                    return "".concat(e, " ").concat(t.op, " ").concat(i);
                default:
                    throw new Error("Unrecognized binary operator ".concat(t.op))
            }
        }
        const el = [en.Open, en.High, en.Low, en.Close],
            il = {
                mapper: t => t.query.symbol,
                recompute: r.Minimum,
                missing: s.UseNext,
                stretch: t => !1,
                fieldMap: new Map(el.map(t => [t, t]))
            };
        class nl {
            constructor(t, e, i = il) {
                this.exprModel = t, this.isExprInError = !q(t), this.container = null, this.innerSeries = e, this.innerLookup = e.reduce((t, e) => (t[i.mapper(e)] = e, t), {}), this.policy = i, this.exprSymbols = Za(t), this.onlyForTimeline = F(this.symbols, this.exprSymbols)
            }
            get hasData() {
                return null !== this.container
            }
            get sourceFields() {
                return this._sourceFields || (this._sourceFields = Array.from(this.policy.fieldMap.keys())), this._sourceFields
            }
            get targetFields() {
                return this._targetFields || (this._targetFields = Array.from(this.policy.fieldMap.values())), this._targetFields
            }
            async ready() {
                return Xt.call(this, async () => {
                    this.basisChangedToken = go.a.subscribe(nn.TS_ALL, this.onBasisChanged.bind(this));
                    const t = (await Promise.all(this.innerSeries.map(t => t.ready()))).every(L);
                    return t && this.calculate(), t
                })
            }
            onBasisChanged(t, e) {
                if (t === nn.TS_EVENTSCHANGED || t === nn.TS_LOADING) return;
                if (!this.innerSeries.includes(e.series) || this.innerSeries.some(t => !q(t.container))) return;
                const i = this.policy.mapper(e.series);
                if (t === nn.TS_DATAPOINTCHANGED && this.onlyForTimeline.includes(i)) return;
                switch (this.policy.recompute === r.Everything ? nn.TS_MANYCHANGED : t) {
                    case nn.TS_MANYCHANGED:
                        this.calculate();
                        break;
                    case nn.TS_DATAPOINTCHANGED:
                    case nn.TS_DATAPOINTADDED:
                        this.recalculate(t === nn.TS_DATAPOINTADDED);
                        break;
                    default:
                        throw new Error("Unknown time series message, likely forgot to handle it")
                }
            }
            shutdown() {
                this.basisChangedToken && go.a.unsubscribe(this.basisChangedToken)
            }
            calculateAt(t) {
                return t.isNull ? null : this.sourceFields.map((e, i) => qa(this.exprModel, e => t.inn[e].values[i]))
            }
            pickMainField() {
                let t = null;
                for (const e of this.policy.fieldMap.values())
                    if (null == t) t = e;
                    else if (e === en.Close) {
                        t = e;
                        break
                    }
                return t
            }
            calculateLastChange() {
                const t = this.container.size;
                if (t <= 1) return;
                const e = this.pickMainField(),
                    i = this.container,
                    n = i.getData(e)[t - 2],
                    s = i.getData(e)[t - 1];
                q(n, s) && i.setLastDataPoint(en.Change, s - n)
            }
            calculateDataPoint(t, e) {
                const i = this.calculateAt(t);
                e ? (this.targetFields.forEach((t, e) => this.container.addDataPoint(t, i[e])), this.container.addDataPoint(en.Change, null), this.container.addDataPoint(en.DateTime, new Date(t.timeStamp))) : this.targetFields.forEach((t, e) => this.container.setLastDataPoint(t, i[e])), this.calculateLastChange()
            }
            notify(t) {
                go.a.publish(t, {
                    series: this,
                    index: this.container.size - 1
                })
            }
            fieldValueAt(t, e, i) {
                const n = this.innerLookup[t].container.getData(i);
                return e < 0 || e >= n.length ? null : n[e]
            }
            timeStampAt(t, e) {
                return this.fieldValueAt(t, e, en.DateTime)
            }
            timeline(t) {
                return t.container.getData(en.DateTime)
            }
            getRangeHelper() {
                switch (this.policy.missing) {
                    case s.UseNext:
                        return Math.min;
                    case s.UsePrevious:
                        return Math.max;
                    default:
                        throw new Error("Unknow missing bar policy, likely forgot to implement it.")
                }
            }
            getRange() {
                const t = this.getRangeHelper();
                return {
                    begin: t(...this.innerSeries.map(t => B(this.timeline(t)))),
                    end: t(...this.innerSeries.map(t => V(this.timeline(t))))
                }
            }
            getFirstPos() {
                return this.getPos(this.getRange().begin)
            }
            getLastPos() {
                return this.getPos(this.getRange().end)
            }
            findIndex(t, e) {
                const i = this.timeline(this.innerLookup[t]);
                switch (this.policy.missing) {
                    case s.UseNext:
                        return i.findIndex(t => t >= e);
                    case s.UsePrevious:
                        return function(t, e) {
                            if (t.length < 1) return -1;
                            for (let i = t.length - 1; i >= 0; --i)
                                if (e(t[i])) return i;
                            return -1
                        }(i, t => t <= e);
                    default:
                        throw new Error("Unknow missing bar policy, likely forgot to implement it.")
                }
            }
            checkPos(t) {
                t.isNull = Object.values(t.inn).some(t => !q(t.timeStamp) && !this.policy.stretch(t.symbol))
            }
            fillPosSymbolAt(t, e) {
                return t.index = e, t.timeStamp = this.timeStampAt(t.symbol, e), t.values = this.sourceFields.map(i => this.fieldValueAt(t.symbol, e, i)), t
            }
            get symbols() {
                return Object.keys(this.innerLookup)
            }
            getPos(t) {
                let e = {
                    inn: {},
                    timeStamp: t
                };
                return this.symbols.forEach(i => {
                    const n = this.findIndex(i, t);
                    let s = {
                        symbol: i
                    };
                    e.inn[i] = this.fillPosSymbolAt(s, n)
                }), this.checkPos(e), e
            }
            getInner(t) {
                return Object.values(t.inn)
            }
            moveNext(t) {
                t.isNull || (this.getInner(t).forEach(e => {
                    for (; q(e.timeStamp) && e.timeStamp <= t.timeStamp;) this.fillPosSymbolAt(e, e.index + 1)
                }), this.checkPos(t), t.isNull || (t.timeStamp = Math.min(...this.getInner(t).map(t => t.timeStamp).filter(t => q(t))), this.policy.missing === s.UsePrevious && this.getInner(t).forEach(e => {
                    (e.timeStamp > t.timeStamp || !q(e.timeStamp) && this.policy.stretch(e.symbol)) && this.fillPosSymbolAt(e, e.index - 1)
                })))
            }
            shouldAdd(t) {
                return this.container.getLastDataPoint(en.DateTime) < t.timeStamp
            }
            calculateCommon(t = null, e = null, i = !0) {
                if (e) this.calculateDataPoint(e, i);
                else if (this.container = this.makeContainer(), !this.isExprInError) {
                    let t = this.getFirstPos();
                    for (; !t.isNull;) this.calculateDataPoint(t, !0), this.moveNext(t)
                }
                t && this.notify(t)
            }
            calculate() {
                this.calculateCommon(nn.TS_MANYCHANGED)
            }
            recalculate(t) {
                if (this.isExprInError) return;
                let e = this.getLastPos();
                const i = this.shouldAdd(e);
                this.calculateCommon(i ? nn.TS_DATAPOINTADDED : nn.TS_DATAPOINTCHANGED, e, i)
            }
            makeContainer() {
                const t = [en.DateTime, en.Change].concat(this.targetFields);
                return new qs(t)
            }
            getCacheableEntities(t) {
                this.innerSeries.forEach(e => {
                    e.getCacheableEntities(t)
                })
            }
        }
        const sl = Xo("_MIDPOINT");
        const rl = Xo("_MIDPOINT");
        class ol extends Ko {
            constructor(t, e, i) {
                super(t, i), this.multiplyVol = e
            }
            calculateAt(t) {
                const [e, i, n, s] = [en.High, en.Low, en.Close, en.Volume].map(e => this.baseVal(e, t), this);
                let r = e === i ? 0 : (n - i - (e - n)) / (e - i);
                return this.multiplyVol && (r *= s), {
                    [this.target.id]: r
                }
            }
        }
        const al = Xo("_RANGE");
        const ll = Xo("_MATP");

        function cl(t) {
            let e = null;
            if (t > 0) {
                const [i, n, s] = [en.High, en.Low, en.Volume].map(e => this.baseVal(e, t)), [r, o] = [en.High, en.Low].map(e => this.baseVal(e, t - 1));
                e = ((i + n) / 2 - (r + o) / 2) / (s / 1e6 / (i - n))
            }
            return {
                [this.target.id]: e
            }
        }
        class ul extends Ko {
            constructor(t, e, i) {
                super(t, i, Ac(i, t.inputs.Period, t.source)), this.isBull = e
            }
            calculateAt(t) {
                let e = null;
                const i = this.innVal(1, en.EMA, t);
                return null !== i && (e = this.isBull ? this.baseVal(en.High, t) - i : this.baseVal(en.Low, t) - i), {
                    [this.isBull ? en.ERBLPOW.id : en.ERBRPOW.id]: e
                }
            }
        }
        const hl = Xo("_FORCE");

        function dl(t) {
            let e = null;
            if (t > 0) {
                const [i, n] = [en.Close, en.Volume].map(e => this.baseVal(e, t));
                e = (i - this.baseVal(en.Close, t - 1)) * n
            }
            return {
                [this.target.id]: e
            }
        }
        const pl = Xo("_RANGE"),
            fl = Xo("_EMA1"),
            ml = Xo("_EMA2"),
            gl = Xo("_RATIO");

        function yl(t, e) {
            let i = null;
            if (this.atLeast(e, t + 1)) {
                const n = this.baseVal(en.Close, e - t);
                if (null !== n) {
                    i = this.baseVal(en.Close, e) - n
                }
            }
            return {
                [this.target.id]: i
            }
        }

        function vl(t, e) {
            let i = 1e3;
            if (e > 0) {
                const n = [en.Close, en.Volume],
                    [s, r] = n.map(t => this.baseVal(t, e), this),
                    [o, a] = n.map(t => this.baseVal(t, e - 1), this),
                    l = this.container.getData(this.target)[e - 1];
                if (t ? r < a : r > a) {
                    i = l * ((s - o) / o + 1)
                } else i = l
            }
            return {
                [this.target.id]: i
            }
        }
        class Tl extends Ko {
            constructor(t, e, i, n) {
                const s = Nc(i[0], O(vl, e), n);
                super(t, n, s, Ac(s, t.inputs.Period, i[0], i[1])), this.fields = i
            }
            getWrappers() {
                return [this.wrapInner(this.fields[0], 1), this.wrapInner(this.fields[1], 2)]
            }
        }
        const bl = Xo("_LOGPC");

        function Sl(t, e) {
            let i = null;
            if (e > 0) {
                const n = this.baseVal(t, e),
                    s = this.baseVal(t, e - 1);
                null !== n && null !== s && (i = Math.log(n / s))
            }
            return {
                [bl.id]: i
            }
        }

        function Pl(t, e) {
            let i = null;
            const n = this.baseVal(en.MSD, e);
            return null !== n && (i = 100 * n * t), {
                [en.HV.id]: i
            }
        }
        const Al = Xo("_SWING_INDEX");
        const wl = Xo("_MIN_CLOSE"),
            Cl = Xo("_MAX_CLOSE");
        const xl = Xo("_EP"),
            Ml = Xo("_AF"),
            El = Xo("_POS");
        class Ol extends So {
            constructor(t) {
                super(t)
            }
            getRetriever() {
                return new Dl
            }
            onStreamingUpdates(t) {}
        }
        class Dl extends fo {
            addExtraParams(t) {
                t.trend = "y"
            }
            getPageNameFor(t) {
                return t.unit === c.Intraday ? Zt.BARCHART_HIST_SRV_INTRADAY_PAGE_NAME : super.getPageNameFor(t)
            }
            getParser(t) {
                return new Ll(t.symbol, t.aggregation)
            }
        }
        class Ll extends po {
            constructor(t, e) {
                super(t, e)
            }
            makeContainer() {
                return new qs([en.DateTime, en.TRSP1, en.TRSP2])
            }
            getParseFunc() {
                return this.parseTrendSpotter
            }
            parseTrend(t) {
                return "N/A" === t ? null : parseFloat(t)
            }
            parseTrendSpotter(t) {
                const e = this.aggregation.isEndOfDay ? 1 : 0;
                t.length === 3 + e && (this.container.addDataPoint(en.DateTime, this.parseDate(t[e])), this.container.addDataPoint(en.TRSP1, this.parseTrend(t[e + 1])), this.container.addDataPoint(en.TRSP2, this.parseTrend(t[e + 2])))
            }
        }
        const _l = {
            1: {
                param: "cot",
                func: "parseCotLineChart",
                fields: [en.DateTime, en.COTLCCMSP, en.COTLCLGSP, en.COTLCSMSP]
            },
            2: {
                param: "cotadv",
                func: "parseDisaggregated",
                fields: [en.DateTime, en.COTDAGPRO, en.COTDAGSPD, en.COTDAGMNM, en.COTDAGOTH]
            },
            3: {
                param: "cotfin",
                func: "parseFinancialTradersReport",
                fields: [en.DateTime, en.COTFTRDLI, en.COTFTRASM, en.COTFTRLVF, en.COTFTROTH]
            }
        };
        class Il extends Ko {
            constructor(t, e, i) {
                super(t, qo(i.query, t => new Nl(e, t))), this.initialNotification = !0, this.wrappers = _l[e].fields.slice(1).map(t => this.wrapInner(t, 0))
            }
            getWrappers() {
                return this.wrappers
            }
        }
        class Nl extends So {
            constructor(t, e) {
                super(e), this.kind = t
            }
            getRetriever() {
                return new Rl(this.kind)
            }
            onStreamingUpdates(t) {}
        }
        class Rl extends fo {
            constructor(t) {
                super(), this.kind = t
            }
            addExtraParams(t) {
                t[_l[this.kind].param] = "y"
            }
            getParser(t) {
                return new Hl(t.symbol, t.aggregation, this.kind)
            }
        }
        class Hl extends po {
            constructor(t, e, i) {
                super(t, e), this.kind = i
            }
            makeContainer() {
                return new qs(_l[this.kind].fields)
            }
            getParseFunc() {
                return this.aggregation.isEndOfDay ? this[_l[this.kind].func] : null
            }
            parseCotLineChart(t) {
                this.container.addDataPoint(en.DateTime, this.parseDate(t[1])), this.container.addDataPoint(en.COTLCCMSP, parseInt(t[2])), this.container.addDataPoint(en.COTLCLGSP, parseInt(t[3])), this.container.addDataPoint(en.COTLCSMSP, parseInt(t[4]))
            }
            parseDisaggregated(t) {
                this.container.addDataPoint(en.DateTime, this.parseDate(t[1])), this.container.addDataPoint(en.COTDAGPRO, parseInt(t[2])), this.container.addDataPoint(en.COTDAGSPD, parseInt(t[3])), this.container.addDataPoint(en.COTDAGMNM, parseInt(t[4])), this.container.addDataPoint(en.COTDAGOTH, parseInt(t[5]))
            }
            parseFinancialTradersReport(t) {
                this.container.addDataPoint(en.DateTime, this.parseDate(t[1])), this.container.addDataPoint(en.COTFTRDLI, parseInt(t[2])), this.container.addDataPoint(en.COTFTRASM, parseInt(t[3])), this.container.addDataPoint(en.COTFTRLVF, parseInt(t[4])), this.container.addDataPoint(en.COTFTROTH, parseInt(t[5]))
            }
        }
        const kl = {
            Day: [en.PreviousHigh, en.PreviousLow, en.PreviousClose],
            Week: [en.WeekPreviousHigh, en.WeekPreviousLow, en.WeekPreviousClose],
            Month: [en.MonthPreviousHigh, en.MonthPreviousLow, en.MonthPreviousClose]
        };
        class Fl extends Ko {
            constructor(t, e, i) {
                super(t, i), this.record = Rp().getRecordSource().getRecord(i.query.symbol), this.record.addFields(...e), this.streamingSubscription = this.getStreamingSubscription(), this.initialNotification = !0
            }
            getStreamingSubscription() {
                return Rp().getRecordSource().subject.pipe(yo(t => {
                    const e = hn(nn.RT_QUOTE, this.record.symbol);
                    return t.filter(e)
                }), Xn(t => t.length > 0)).subscribe(this.onStreamingUpdates.bind(this))
            }
            async ready() {
                return Xt.call(this, async () => q(this.record) ? await this.record.ready() && await super.ready() : await super.ready(), "asyncReadyWork2")
            }
            onStreamingUpdates(t) {
                if (this.record) {
                    const t = {
                        tag: Do()()
                    };
                    this.calculate(t)
                }
            }
            shutdown() {
                super.shutdown(), this.streamingSubscription.unsubscribe()
            }
            getValues(t) {
                return kl[t].map(t => this.record.getValue(t))
            }
        }
        class Ul extends So {
            constructor(t) {
                super(t)
            }
            getRetriever() {
                return new Vl
            }
            onStreamingUpdates(t) {}
        }
        class Vl extends fo {
            addExtraParams(t) {
                t.impl = "y"
            }
            getParser(t) {
                return new Bl(t.symbol, t.aggregation)
            }
        }
        class Bl extends po {
            constructor(t, e) {
                super(t, e)
            }
            makeContainer() {
                return new qs([en.DateTime, en.IMPVOL])
            }
            getParseFunc() {
                return this.parseImpVol
            }
            parseImpVol(t) {
                !this.aggregation.isEndOfDay || t.length < 9 || (this.container.addDataPoint(en.DateTime, this.parseDate(t[1])), this.container.addDataPoint(en.IMPVOL, parseFloat(t[8])))
            }
        }
        const Wl = Xo("_ABS_CHG"),
            jl = Xo("_DS1_EMA1"),
            Gl = Xo("_DS1_EMA2"),
            zl = Xo("_DS2_EMA1"),
            Yl = Xo("_DS2_EMA2");

        function $l() {
            return R(1, 12)
        }
        const ql = Xo("_DIFF");
        const Xl = Xo("_SUM");
        const Kl = Xo("_ABS_CHG"),
            Zl = Xo("_HH_LL"),
            Ql = Xo("_MULMA");
        class Jl extends Ko {
            constructor(t, e, i) {
                const n = "Close" === t.inputs.TurtleChnField,
                    s = [en.High, en.Low],
                    r = i instanceof nl && 2 !== U(i.targetFields, s).length;
                if (!n && r) {
                    const e = Nc(t.target, () => null, i);
                    super(t, i, e)
                } else {
                    const s = Pc(Nc(Kl, O((e, i) => ({
                            [e.id]: i > 0 ? t.inputs.FactorATR * Math.abs(this.baseVal(en.Change, i)) : null
                        }), Kl), i), t.inputs.PeriodAdjATR, Kl, en.MA),
                        r = xc(i, t.inputs.PeriodTurtleChn, n ? en.Close : e ? en.High : en.Low, Zl, e),
                        o = Rc(Ql, (e, i) => t.inputs.FactorAdjATR * i, s),
                        a = e ? -1 : 1,
                        l = Rc(t.target, (t, e, i) => e + a * i, r, o);
                    super(t, i, l)
                }
            }
            getWrappers() {
                return [this.wrapInner(this.target, 1)]
            }
        }
        const tc = Xo("_DIFF");
        const [ec, ic, nc, sc, rc, oc] = ["_DIST", "_EMA_DIST1", "_EMA_DIST2", "_DIFF", "_EMA_DIFF1", "_EMA_DIFF2"].map(Xo);
        const [ac, lc, cc] = ["_CHG", "_M1", "_M2"].map(Xo);
        const [uc, hc, dc] = ["_MAX", "_MIN", "_ISUPTREND"].map(Xo);
        const [pc, fc, mc] = ["_TRENDUP", "_TRENDDOWN", "_TREND"].map(Xo);
        const gc = Xo("CUM_TP"),
            yc = Xo("_CUM_VOL"),
            vc = new Date(0);
        const Tc = {
            _TR: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    const [i, n] = [en.High, en.Low].map(e => this.baseVal(e, t));
                    if (t > 0) {
                        const s = this.baseVal(en.Close, t - 1);
                        e = Math.max(i - n, Math.abs(i - s), Math.abs(n - s))
                    } else e = i - n;
                    return {
                        [this.target.id]: e
                    }
                }
            },
            MA: Jo,
            MAEXP: class extends ta {
                constructor(t, e) {
                    super(t, e, t => 2 / (t + 1))
                }
            },
            MAHLC: class extends Ko {
                constructor(t, e) {
                    super(t, e, Pc(e, t.inputs.Period1, en.High, en.MAHI), Pc(e, t.inputs.Period2, en.Low, en.MALO))
                }
                getWrappers() {
                    return [this.wrapInner(en.MAHI, 1), this.wrapInner(en.MALO, 2)]
                }
            },
            VOL: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                getWrappers() {
                    return this.wrapBaseFields(en.Volume, en.TradeSize, en.Change, en.OpenInterest)
                }
            },
            MAENV: class extends ia {
                constructor(t, e) {
                    super(t, "ma", e)
                }
            },
            MAENVEXP: class extends ia {
                constructor(t, e) {
                    super(t, "maexp", e)
                }
            },
            MAENVSMO: class extends ia {
                constructor(t, e) {
                    super(t, "masmo", e)
                }
            },
            MATRI: class extends Ko {
                constructor(t, e) {
                    let i = Pc(e, t.inputs.Period, t.source);
                    super(t, e, i, Pc(i, t.inputs.Period, en.MA, en.TMA))
                }
                getWrappers() {
                    return [this.wrapInner(en.TMA, 2)]
                }
            },
            MAWEI: class extends Ko {
                constructor(t, e) {
                    super(t, e);
                    const i = this.period;
                    this.triangle = i * (i + 1) / 2
                }
                weightedAverage(t) {
                    return t.reduce((t, e, i) => t + e * (i + 1), 0) / this.triangle
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.period)) {
                        let i = this.past(t, this.period, this.source);
                        N(i) && (e = this.weightedAverage(i))
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            MAVOL: Jo,
            MASMO: class extends ta {
                constructor(t, e) {
                    super(t, e, t => 1 / t)
                }
            },
            MACD: class extends aa {
                constructor(t, e) {
                    super(t, !1, "macd", e)
                }
            },
            MACDEXP: class extends aa {
                constructor(t, e) {
                    super(t, !0, "macd", e)
                }
            },
            GMMA: class extends Ko {
                constructor(t, e) {
                    const i = t.inputs,
                        n = $l().map(n => Ac(e, i["Period".concat(n)], en.Close, t.outFields[n - 1]));
                    super(t, e, ...n)
                }
                getWrappers() {
                    return $l().map(t => this.wrapInner(this.outFields[t - 1], t))
                }
            },
            OSCI: na,
            OSCIVOL: na,
            RSI: class extends ua {
                constructor(t, e) {
                    super(t, !1, e)
                }
            },
            RSIMOD: class extends ua {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            RSISTO: class extends Ko {
                constructor(t, e) {
                    super(t, e, function(t, e, i, n = en.RSI) {
                        return Sc("RSI", {
                            source: i,
                            target: n,
                            inputs: bc(e)
                        }, t)
                    }(e, t.inputs.Period, t.source))
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.inputs.Range)) {
                        const i = this.past(t, this.inputs.Range, en.RSI, this.innCont(1)),
                            n = Math.min(...i),
                            s = Math.max(...i);
                        e = (i[i.length - 1] - n) / (s - n)
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            WPERCR: class extends da {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            HHLL: class extends Ko {
                constructor(t, e) {
                    super(t, e, xc(e, t.inputs.Period1, en.High, en.HH, !0), xc(e, t.inputs.Period2, en.Low, en.LL, !1))
                }
                getWrappers() {
                    return [this.wrapInner(en.HH, 1), this.wrapInner(en.LL, 2)]
                }
            },
            WGCL: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    const [i, n, s] = [en.Close, en.High, en.Low].map(e => this.baseVal(e, t), this);
                    return e = (2 * i + n + s) / 4, {
                        [this.target.id]: e
                    }
                }
            },
            STOCHF: class extends va {
                constructor(t, e) {
                    super(t, !1, en.PercK, e)
                }
            },
            STOCHS: class extends va {
                constructor(t, e) {
                    super(t, !0, en.PercK, e)
                }
            },
            BBANDS: class extends Pa {
                constructor(t, e) {
                    super(t, Ta, e)
                }
            },
            BWIDTH: class extends Pa {
                constructor(t, e) {
                    super(t, ba, e)
                }
            },
            BPERC: class extends Pa {
                constructor(t, e) {
                    super(t, Sa, e)
                }
            },
            OBVOL: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    if (t > 0) {
                        const i = this.baseVal(en.Close, t),
                            n = this.baseVal(en.Volume, t),
                            s = this.baseVal(en.Close, t - 1),
                            r = this.container.getData(this.target)[t - 1] || 0;
                        e = i > s ? r + n : i < s ? r - n : r
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            ATR: class extends Ko {
                constructor(t, e) {
                    let i = Mc(e, en.TR);
                    const n = ga(t, "SMA")(i, t.inputs.Period, en.TR, t.target);
                    super(t, e, n, Pc(n, t.inputs.Period2, en.ATR, en.ATRMA))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1), this.wrapInner(en.ATRMA, 2)]
                }
            },
            ADX: class extends Oa {
                constructor(t, e) {
                    super(t, !1, en.ADX, e)
                }
            },
            ADXMOD: class extends Oa {
                constructor(t, e) {
                    super(t, !0, en.ADXM, e)
                }
            },
            ADL: class extends Ko {
                constructor(t, e) {
                    super(t, e, _c(e))
                }
                calculateAt(t) {
                    let e = null;
                    return e = (this.container.getData(this.target)[t - 1] || 0) + this.innVal(1, en.MFMUL, t), {
                        [this.target.id]: e
                    }
                }
            },
            ADWM: class extends Ko {
                constructor(t, e) {
                    const i = Nc(en.ADWM, Da, e);
                    super(t, e, i, Pc(i, t.inputs.Period, en.ADWM, en.ADWMMA))
                }
                getWrappers() {
                    return [this.wrapInner(en.ADWM, 1), this.wrapInner(en.ADWMMA, 2)]
                }
            },
            CHAOSC: class extends Ko {
                constructor(t, e) {
                    const i = en.ADL;
                    let n = function(t, e = en.ADL) {
                            return Sc("ADL", {
                                target: e
                            }, t)
                        }(e, i),
                        s = Ac(n, 3, i),
                        r = Ac(n, 10, i);
                    super(t, e, Rc(t.target, (t, e, i) => e - i, s, r))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            TP: class extends Ko {
                constructor(t, e) {
                    super(t, e, Nc(t.target, La, e))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            KELCHN: class extends Va {
                constructor(t, e) {
                    super(t, "original", e)
                }
            },
            KELEXP: class extends Va {
                constructor(t, e) {
                    super(t, "barchart", e)
                }
            },
            KELBND: class extends Va {
                constructor(t, e) {
                    super(t, "bands", e)
                }
            },
            DONCHN: class extends Ba {
                constructor(t, e) {
                    super(t, !1, e)
                }
            },
            DONWIDTH: class extends Ba {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            PVT: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    if (t > 0) {
                        const [i, n] = [en.Close, en.Volume].map(e => this.baseVal(e, t), this), s = this.baseVal(en.Close, t - 1);
                        e = (this.container.getData(this.target)[t - 1] || 0) + (i - s) / s * n
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            ROC: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.period + 1)) {
                        const i = this.baseVal(this.source, t - this.period);
                        if (null !== i && 0 !== i) {
                            e = (this.baseVal(this.source, t) - i) / i * 100
                        }
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            TRIX: class extends Ko {
                constructor(t, e) {
                    let i = Ac(e, t.inputs.Period, t.source),
                        n = Ac(i, t.inputs.Period, i.target),
                        s = Ac(n, t.inputs.Period, n.target);
                    super(t, e, Lc(s, 1, s.target, t.target))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            PPMOV: class extends Ko {
                constructor(t, e) {
                    super(t, e, Dc(e, en.PVPT))
                }
                calculateAt(t) {
                    const e = this.innVal(1, en.PVPT, t),
                        i = this.baseVal(en.High, t),
                        n = this.baseVal(en.Low, t);
                    return {
                        [en.PVPTR.id]: e + i - n,
                        [en.PVPTS.id]: e - i + n
                    }
                }
                getWrappers() {
                    return [this.wrapInner(en.PVPT, 1)]
                }
            },
            PIVPTS: class extends Fl {
                constructor(t, e) {
                    super(t, [].concat(...Object.values(kl)), e)
                }
                calculateAt(t) {
                    let e = null,
                        i = null,
                        n = null,
                        s = null,
                        r = null,
                        o = null,
                        a = null;
                    const l = this.getValues(this.inputs.Previous);
                    if (N(l)) {
                        const [t, c, u] = l;
                        e = (t + c + u) / 3;
                        const h = 2 * e;
                        i = h - c, n = h - t;
                        const d = t - c;
                        s = e + d, r = e - d, o = t + 2 * (e - c), a = c - 2 * (t - e)
                    }
                    return {
                        [en.PPTPIV.id]: e,
                        [en.PPTR1.id]: i,
                        [en.PPTR2.id]: s,
                        [en.PPTR3.id]: o,
                        [en.PPTS1.id]: n,
                        [en.PPTS2.id]: r,
                        [en.PPTS3.id]: a
                    }
                }
            },
            CPP: class extends Fl {
                constructor(t, e) {
                    super(t, kl.Day, e)
                }
                calculateAt(t) {
                    let e = null,
                        i = null,
                        n = null,
                        s = null,
                        r = null,
                        o = null,
                        a = null,
                        l = null;
                    const c = this.getValues("Day");
                    if (N(c)) {
                        const [t, u, h] = c, d = t - u, [p, f, m, g] = [2, 4, 6, 12].map(t => 1.1 / t * d);
                        a = h + p, r = h + f, n = h + m, e = h + g, i = h - g, s = h - m, o = h - f, l = h - p
                    }
                    return {
                        [en.CPPH4.id]: a,
                        [en.CPPH3.id]: r,
                        [en.CPPH2.id]: n,
                        [en.CPPH1.id]: e,
                        [en.CPPL1.id]: i,
                        [en.CPPL2.id]: s,
                        [en.CPPL3.id]: o,
                        [en.CPPL4.id]: l
                    }
                }
            },
            ARNUPDW: class extends Ga {
                constructor(t, e) {
                    super(t, !1, e)
                }
            },
            ARNOSC: class extends Ga {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            TCHN: class extends Ko {
                constructor(t, e) {
                    const i = "Close" === t.inputs.Range,
                        n = [en.High, en.Low],
                        s = e instanceof nl && 2 !== U(e.targetFields, n).length;
                    if (!i && s) {
                        super(t, e, Nc(en.TCHNUP, () => null, e), Nc(en.TCHNLOW, () => null, e))
                    } else {
                        super(t, e, xc(e, t.inputs.PeriodUpper, i ? en.Close : en.High, en.TCHNUP, !0), xc(e, t.inputs.PeriodLower, i ? en.Close : en.Low, en.TCHNLOW, !1))
                    }
                }
                getWrappers() {
                    return [this.wrapInner(en.TCHNUP, 1), this.wrapInner(en.TCHNLOW, 2)]
                }
            },
            TCHRE: class extends Ko {
                constructor(t, e) {
                    var i, n, s;
                    super(t, e, (i = e, n = t.inputs.Period, s = t.inputs.Range, Sc("TCHN", {
                        inputs: {
                            PeriodUpper: n,
                            PeriodLower: n,
                            Range: s
                        },
                        outFields: [en.TCHNUP, en.TCHNLOW]
                    }, i)))
                }
                calculateAt(t) {
                    let e = null;
                    const i = this.innVal(1, en.TCHNUP, t),
                        n = this.innVal(1, en.TCHNLOW, t),
                        s = this.inputs.Adjustment,
                        r = this.inputs.Retracement;
                    return "Long" === r ? e = q(i) ? i - s : null : "Short" === r && (e = q(n) ? n + s : null), {
                        [this.target.id]: e
                    }
                }
            },
            ALLG: class extends Ko {
                constructor(t, e) {
                    const i = Nc(sl, O(Ia, sl), e),
                        n = [en.ALJAW, en.ALTEETH, en.ALLIPS].map((e, n) => wc(i, t.inputs["Period".concat(n + 1)], sl, e));
                    super(t, e, ...n)
                }
                calculateAt(t) {
                    return {
                        [en.ALJAW.id]: this.innVal(1, en.ALJAW, t),
                        [en.ALTEETH.id]: this.innVal(2, en.ALTEETH, t),
                        [en.ALLIPS.id]: this.innVal(3, en.ALLIPS, t)
                    }
                }
            },
            PLTLN: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    return {
                        [en.PLTLN.id]: this.inputs.Position
                    }
                }
            },
            AWEOSC: class extends Ko {
                constructor(t, e) {
                    const i = Nc(rl, O(Ia, rl), e),
                        n = Pc(i, t.inputs.Period1, rl),
                        s = Pc(i, t.inputs.Period2, rl),
                        r = Rc(en.AWOS, (t, e, i) => e - i, n, s);
                    super(t, e, r, Pc(r, t.inputs.Period3, r.target, en.AWOSMA))
                }
                getWrappers() {
                    return [this.wrapInner(en.AWOS, 1), this.wrapInner(en.AWOSMA, 2)]
                }
            },
            MFV: class extends ol {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            CLV: class extends ol {
                constructor(t, e) {
                    super(t, !1, e)
                }
            },
            CHAMF: class extends Ko {
                constructor(t, e) {
                    super(t, e, _c(e))
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.period)) {
                        let i = this.past(t, this.period, en.Volume),
                            n = this.past(t, this.period, en.MFMUL, this.innCont(1));
                        N(i) && N(n) && (e = _(n) / _(i))
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            CHAVOL: class extends Ko {
                constructor(t, e) {
                    super(t, e, Lc(Ac(Nc(al, O(Na, al), e), t.inputs.Period1, al), t.inputs.Period2, en.EMA, t.target))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            DPO: class extends Ko {
                constructor(t, e) {
                    super(t, e, Pc(e, t.inputs.Period, t.source)), this.shift = Math.floor(t.inputs.Period / 2) + 1
                }
                calculateAt(t) {
                    let e = null;
                    const i = this.innVal(1, en.MA, t - this.shift);
                    return null !== i && (e = this.baseVal(this.source, t) - i), {
                        [this.target.id]: e
                    }
                }
            },
            CCI: class extends Ko {
                constructor(t, e) {
                    const i = Dc(e);
                    super(t, e, i, Pc(i, t.inputs.Period, i.target, ll))
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.period)) {
                        let i = this.past(t, this.period, en.TP, this.innCont(1));
                        if (N(i)) {
                            const n = this.innVal(2, ll, t);
                            if (null !== n) {
                                const s = i.reduce((t, e) => t + Math.abs(n - e), 0) / this.period;
                                e = (this.innVal(1, en.TP, t) - n) / (.015 * s)
                            }
                        }
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            EMV: class extends Ko {
                constructor(t, e) {
                    const i = Nc(en.EMV, cl, e);
                    super(t, e, i, Pc(i, t.inputs.Period, en.EMV, en.EMVMA))
                }
                getWrappers() {
                    return [this.wrapInner(en.EMV, 1), this.wrapInner(en.EMVMA, 2)]
                }
            },
            ERBRPOW: class extends ul {
                constructor(t, e) {
                    super(t, !1, e)
                }
            },
            ERBLPOW: class extends ul {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            FI: class extends Ko {
                constructor(t, e) {
                    super(t, e, Ac(Nc(hl, dl, e), t.inputs.Period, hl, en.FI))
                }
                getWrappers() {
                    return [this.wrapInner(en.FI, 1)]
                }
            },
            MI: class extends Ko {
                constructor(t, e) {
                    const i = Ac(Nc(pl, O(Na, pl), e), 9, pl, fl),
                        n = Ac(i, 9, fl, ml);
                    super(t, e, Rc(gl, (t, e, i) => e / i, i, n))
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, 25)) {
                        let i = this.past(t, 25, gl, this.innCont(1));
                        N(i) && (e = _(i))
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            MOM: class extends Ko {
                constructor(t, e) {
                    const i = Nc(en.MOM, O(yl, t.inputs.Period), e);
                    super(t, e, i, Pc(i, t.inputs.Movement, en.MOM, en.MOMMA))
                }
                getWrappers() {
                    return [this.wrapInner(en.MOM, 1), this.wrapInner(en.MOMMA, 2)]
                }
            },
            MFI: class extends Ko {
                constructor(t, e) {
                    super(t, e, Dc(e))
                }
                calculateAt(t) {
                    let e = null;
                    const i = this.period + 1;
                    if (this.atLeast(t, i)) {
                        const n = this.past(t, i, en.TP, this.innCont(1)),
                            s = this.past(t, i, en.Volume);
                        if (N(n) && N(s)) {
                            let t = 0,
                                i = 0;
                            for (let e = 1; e < n.length; ++e) {
                                const r = n[e] * s[e];
                                n[e] > n[e - 1] ? t += r : i += r
                            }
                            e = 100 - 100 / (1 + t / i)
                        }
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            MSD: class extends Ko {
                constructor(t, e) {
                    super(t, e, Pc(e, t.inputs.Period, t.source))
                }
                calculateAt(t) {
                    let e = null;
                    const i = this.innVal(1, en.MA, t);
                    if (null !== i) {
                        let n = this.past(t, this.inputs.Period, this.source);
                        n = n.map(t => (t - i) * (t - i)), e = Math.sqrt(I(n))
                    }
                    return {
                        [this.target.id]: e
                    }
                }
                getWrappers() {
                    return [this.wrapInner(en.MA, 1)]
                }
            },
            NVI: class extends Tl {
                constructor(t, e) {
                    super(t, !0, [en.NVI, en.NVIEMA], e)
                }
            },
            PVI: class extends Tl {
                constructor(t, e) {
                    super(t, !1, [en.PVI, en.PVIEMA], e)
                }
            },
            PPO: class extends aa {
                constructor(t, e) {
                    super(t, !0, "ppo", e)
                }
            },
            PVO: class extends aa {
                constructor(t, e) {
                    super(t, !0, "pvo", e)
                }
            },
            HV: class extends Ko {
                constructor(t, e) {
                    const i = Math.sqrt(function(t) {
                        switch (t) {
                            case c.Day:
                                return 252;
                            case c.Week:
                                return 52;
                            case c.Month:
                                return 12;
                            default:
                                return 0
                        }
                    }(t.aggregation.unit));
                    if (0 === i) {
                        super(t, e, Nc(t.target, () => null, e))
                    } else {
                        const n = Ic(Nc(bl, O(Sl, en.Close), e), t.inputs.Period, bl, en.MSD);
                        super(t, e, Nc(en.HV, O(Pl, i), n))
                    }
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            PERF: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    const i = this.baseVal(this.source, 0),
                        n = this.baseVal(this.source, t);
                    return null !== i && null !== n && (e = (n - i) / i * 100), {
                        [this.target.id]: e
                    }
                }
            },
            WASI: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                get helpers() {
                    return [Al]
                }
                ohlcVals(t) {
                    return [en.Open, en.High, en.Low, en.Close].map(e => this.baseVal(e, t))
                }
                obtainR(t, e, i, n) {
                    const s = Math.abs(t - n),
                        r = Math.abs(e - n),
                        o = Math.abs(t - e),
                        a = Math.max(s, r, o),
                        l = .25 * Math.abs(n - i);
                    return a === s ? s - .5 * r + l : a === r ? r - .5 * s + l : o + l
                }
                calculateAt(t) {
                    let e = null,
                        i = null;
                    if (t > 0) {
                        const n = this.container.getData(Al)[t - 1] || 0,
                            [s, r, o, a] = this.ohlcVals(t),
                            [l, , , c] = this.ohlcVals(t - 1);
                        if (N([s, r, o, a, l, c])) {
                            const t = Math.max(Math.abs(r - c), Math.abs(o - c)),
                                u = this.inputs.Limit;
                            e = (a - c + .5 * (a - s) + .25 * (c - l)) / this.obtainR(r, o, l, c) * 50 * (t / u), i = n + e
                        }
                    }
                    return {
                        [Al.id]: e,
                        [this.target.id]: i
                    }
                }
            },
            WWVOL: class extends Ko {
                constructor(t, e) {
                    super(t, e, Ec(e, t.inputs.Period))
                }
                get helpers() {
                    return [Cl, wl]
                }
                calculateAt(t) {
                    let e = null,
                        i = null,
                        n = null,
                        s = null,
                        r = this.innVal(1, en.ATR, t);
                    if (null !== r) {
                        const o = this.baseVal(en.Close, t),
                            a = this.baseVal(en.Close, t - 1);
                        n = Math.max(...this.past(t, this.period, en.Close)), s = Math.min(...this.past(t, this.period, en.Close));
                        const l = r * this.inputs.Constant;
                        if (null === this.innVal(1, en.ATR, t - 1)) {
                            o > a ? e = n - l : i = s + l
                        } else {
                            const [r, a, c, u] = [en.WWVSARU, en.WWVSARD, Cl, wl].map(e => this.container.getData(e)[t - 1]);
                            [n, s] = [c, u], null !== r ? o < r ? (s = o, i = o + l) : (n = Math.max(o, n), e = n - l) : o > a ? (n = o, e = o - l) : (s = Math.min(o, s), i = s + l)
                        }
                    }
                    return {
                        [Cl.id]: n,
                        [wl.id]: s,
                        [en.WWVSARU.id]: e,
                        [en.WWVSARD.id]: i
                    }
                }
            },
            PARTP: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                get helpers() {
                    return [xl, Ml, El]
                }
                hlcVals(t) {
                    return [en.High, en.Low, en.Close].map(e => this.baseVal(e, t))
                }
                me(t, e) {
                    return this.container.getData(t)[e]
                }
                reciprocal(t) {
                    return 1 / t
                }
                calculateAt(t) {
                    let e = null,
                        i = null,
                        n = null,
                        s = null,
                        r = null,
                        o = null;
                    if (t > 0) {
                        const [a, l, c] = this.hlcVals(t), [u, h, d] = this.hlcVals(t - 1), p = this.reciprocal(this.inputs.Acceleration), f = this.reciprocal(this.inputs.Limit);
                        if (1 === t) {
                            r = c > d ? 1 : -1;
                            const t = 1 === r;
                            o = t ? h : u, n = t ? Math.max(a, u) : Math.min(l, h), s = p, t ? e = o : i = o
                        } else {
                            const [c, d, m, g, y] = [El, en.PARSARS, en.PARSARL, xl, Ml].map(e => this.me(e, t - 1)), v = 1 === c, T = v ? m : d, b = y * Math.abs(g - T);
                            r = v ? T + b > l ? -1 : 1 : T - b < a ? 1 : -1;
                            const S = c === r;
                            if (o = S ? v ? Math.min(T + b, h, this.baseVal(en.Low, t - 2)) : Math.max(T - b, u, this.baseVal(en.High, t - 2)) : g, n = S ? v ? Math.max(a, g) : Math.min(l, g) : 1 === r ? a : l, s = y, S) {
                                (v ? n > g : n < g) && y < f && (s = y + p)
                            } else s = p;
                            1 === r ? e = o : i = o
                        }
                    }
                    return {
                        [xl.id]: n,
                        [Ml.id]: s,
                        [El.id]: r,
                        [en.PARSARS.id]: i,
                        [en.PARSARL.id]: e
                    }
                }
            },
            MOVLR: class extends Ko {
                constructor(t, e) {
                    super(t, e), this.xSum = this.period * (this.period + 1) / 2, this.xSum2 = this.xSum * this.xSum, this.x2Sum = this.period * (this.period + 1) * (2 * this.period + 1) / 6
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.period)) {
                        let i = this.past(t, this.period, this.source);
                        if (N(i)) {
                            const t = _(i),
                                n = _(i.map((t, e) => t * (e + 1))),
                                s = (this.period * n - this.xSum * t) / (this.period * this.x2Sum - this.xSum2);
                            e = (t - s * this.xSum) / this.period + s * this.period
                        }
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            TRSP: class extends Ko {
                constructor(t, e) {
                    super(t, qo(e.query, t => new Ol(t))), this.initialNotification = !0
                }
                getWrappers() {
                    return [this.wrapInner(en.TRSP1, 0), this.wrapInner(en.TRSP2, 0)]
                }
            },
            COTLC: class extends Il {
                constructor(t, e) {
                    super(t, 1, e)
                }
            },
            COTDAG: class extends Il {
                constructor(t, e) {
                    super(t, 2, e)
                }
            },
            COTFTR: class extends Il {
                constructor(t, e) {
                    super(t, 3, e)
                }
            },
            IMPVOL: class extends Ko {
                constructor(t, e) {
                    super(t, qo(e.query, t => new Ul(t))), this.initialNotification = !0
                }
                getWrappers() {
                    return [this.wrapInner(en.IMPVOL, 0)]
                }
            },
            CTM: class extends aa {
                constructor(t, e) {
                    t.inputs = {
                        Period1: 5,
                        Period2: 21,
                        Period3: 34
                    }, super(t, !0, "ctm", e)
                }
            },
            GPMI: class extends aa {
                constructor(t, e) {
                    t.inputs = {
                        Period1: 3,
                        Period2: 5,
                        Period3: 8
                    }, super(t, !0, "gpmi", e)
                }
            },
            DEMA: class extends Ko {
                constructor(t, e) {
                    const i = Ac(e, t.inputs.Period, t.source),
                        n = Ac(i, t.inputs.Period, i.target);
                    super(t, e, Rc(en.DEMA, (t, e, i) => 2 * e - i, i, n))
                }
                getWrappers() {
                    return [this.wrapInner(en.DEMA, 1)]
                }
            },
            TEMA: class extends Ko {
                constructor(t, e) {
                    const i = Ac(e, t.inputs.Period, t.source),
                        n = Ac(i, t.inputs.Period, i.target),
                        s = Ac(n, t.inputs.Period, n.target);
                    super(t, e, Rc(en.TEMA, (t, e, i, n) => 3 * (e - i) + n, i, n, s))
                }
                getWrappers() {
                    return [this.wrapInner(en.TEMA, 1)]
                }
            },
            TSI: class extends Ko {
                constructor(t, e) {
                    const i = (t, e, i, n, s, r) => {
                            const o = Ac(t, e, i, n);
                            return Ac(o, s, n, r)
                        },
                        n = Nc(Wl, O((t, e) => ({
                            [t.id]: Math.abs(this.baseVal(en.Change, e))
                        }), Wl), e),
                        s = i(e, t.inputs.Period1, en.Change, jl, t.inputs.Period2, Gl),
                        r = i(n, t.inputs.Period1, Wl, zl, t.inputs.Period2, Yl),
                        o = Rc(en.TSI, (t, e, i) => 100 * e / i, s, r);
                    super(t, e, o, Ac(o, t.inputs.Period3, en.TSI, en.TSISIG))
                }
                getWrappers() {
                    return [this.wrapInner(en.TSI, 1), this.wrapInner(en.TSISIG, 2)]
                }
            },
            ADJATR: class extends Ko {
                constructor(t, e) {
                    const i = t.source,
                        n = Nc(pa, O((t, e) => {
                            let n = 0;
                            return e > 0 && (n = this.baseVal(i, e) - this.baseVal(i, e - 1)), {
                                [t.id]: Math.abs(n)
                            }
                        }, pa), e),
                        s = ga(t, "MA")(n, t.inputs.Period, pa);
                    super(t, e, Rc(en.ADJATR, (t, e) => 2 * e, s))
                }
                getWrappers() {
                    return [this.wrapInner(en.ADJATR, 1)]
                }
            },
            COTR: class extends Ko {
                constructor(t, e) {
                    const i = Nc(fa, t => {
                            let e = 0;
                            return t > 0 && (e = this.baseVal(en.Close, t) - this.baseVal(en.Close, t - 1)), {
                                [fa.id]: e
                            }
                        }, e),
                        n = ("ATR" === t.inputs.TypeOfATR ? Ec : Oc)(e, t.inputs.Period, t.inputs.Smoothing);
                    super(t, e, Rc(t.target, (t, e, i) => q(e) && q(i) ? e / i : null, i, n))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            MCGD: class extends Ko {
                constructor(t, e) {
                    super(t, e, Ac(e, t.inputs.Period, en.Close))
                }
                calculateAt(t) {
                    let e = null;
                    const i = this.container.getData(this.target)[t - 1];
                    if (q(i)) {
                        const n = this.baseVal(this.source, t);
                        e = i + (n - i) / (.6 * this.period * Math.pow(n / i, 4)), Number.isFinite(e) || (e = null)
                    } else e = this.innVal(1, en.EMA, t);
                    return {
                        [this.target.id]: e
                    }
                }
            },
            HMA: class extends Ko {
                constructor(t, e) {
                    const i = t.inputs.Period,
                        n = Cc(e, Math.floor(i / 2), t.source),
                        s = Cc(e, i, t.source);
                    super(t, e, Cc(Rc(ql, (t, e, i) => 2 * e - i, n, s), Math.floor(Math.sqrt(i)), ql, t.target))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            COPP: class extends Ko {
                constructor(t, e) {
                    const i = Lc(e, t.inputs.PeriodRocLong),
                        n = Lc(e, t.inputs.PeriodRocShort);
                    super(t, e, Cc(Rc(Xl, (t, e, i) => e + i, i, n), t.inputs.PeriodWma, Xl, t.target))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            REATRHI: class extends Jl {
                constructor(t, e) {
                    super(t, !0, e)
                }
            },
            REATRLO: class extends Jl {
                constructor(t, e) {
                    super(t, !1, e)
                }
            },
            LINRCHN: class extends Ko {
                constructor(t, e) {
                    const i = t.inputs.Period,
                        n = t.source,
                        s = i * (i + 1) / 2,
                        r = s * s,
                        o = i * (i + 1) * (2 * i + 1) / 6;

                    function a() {
                        const t = this.base.getLastDataPoint(en.DateTime).getTime();
                        if (!q(this.regression) || this.regression.lastDate !== t) {
                            let e = 0,
                                a = 0;
                            for (let t = i - 1, s = 1; t >= 0; --t, ++s) {
                                const i = this.baseVal(n, this.base.size - 1 - t);
                                e += i, a += s * i
                            }
                            const l = (i * a - s * e) / (i * o - r),
                                c = e / i - l * s / i;
                            this.regression = {
                                slope: l,
                                intercept: c,
                                lastDate: t
                            }
                        }
                    }
                    const l = Nc(en.LINRMID, (function(t) {
                        let e = null;
                        if (t >= this.base.size - i) {
                            const n = t - this.base.size + i + 1;
                            a.call(this);
                            const {
                                intercept: s,
                                slope: r
                            } = this.regression;
                            e = s + r * n
                        }
                        return {
                            [en.LINRMID.id]: e
                        }
                    }), e);
                    const c = Nc(n, (function(t) {
                        return {
                            [this.target.id]: this.baseVal(this.target, t)
                        }
                    }), e);
                    super(t, e, l, Ic(Rc(tc, (t, e, i) => e - i, c, l), i, tc))
                }
                calculateAt(t) {
                    const e = this.innVal(1, en.LINRMID, t),
                        i = this.innCont(2).getLastDataPoint(en.MSD);
                    let n = null,
                        s = null;
                    return q(e, i) && (n = e + this.inputs.Width * i, s = e - this.inputs.Width * i), {
                        [en.LINRUP.id]: n,
                        [en.LINRLOW.id]: s
                    }
                }
                getWrappers() {
                    return [this.wrapInner(en.LINRMID, 1)]
                }
            },
            CSHO: class extends Ko {
                constructor(t, e) {
                    super(t, e, qo(e.query, t => {
                        const e = J(t);
                        var i;
                        return e.symbol = Ot(i = t.symbol) ? "".concat(Ft(i), "Y00") : null, q(e.symbol) ? new So(e) : new Po(e)
                    })), this.computedServerSide = !0, this.computeDone = !1
                }
                alignCashTimelineWithUnderlying() {
                    const t = this.innCont(0);
                    if (!q(t) || 0 === t.size) return;
                    const e = this.innCont(1),
                        i = t.getData(en.DateTime),
                        n = e.getData(en.DateTime),
                        s = e.getData(en.Close),
                        r = Array(i.length).fill(null);
                    let o = 0;
                    const a = t.size,
                        l = e.size;
                    for (let t = 0; t < a; ++t) {
                        for (; o < l && n[o].getTime() < i[t].getTime();) o++;
                        o < l && n[o].getTime() === i[t].getTime() && (r[t] = s[o])
                    }
                    this.container.setData(this.target, r)
                }
                calculate(t) {
                    this.computeDone || (this.container = this.makeContainer(), this.alignCashTimelineWithUnderlying(), this.computeDone = !0, this.notify(nn.TS_MANYCHANGED, -1))
                }
            },
            CSHB: class extends Ko {
                constructor(t, e) {
                    super(t, e, function(t, e = en.CSHO) {
                        return Sc("CSHO", {
                            target: e
                        }, t)
                    }(e))
                }
                shouldTriggerOurRecalc(t) {
                    const e = t => q(t) && t.size > 0;
                    return (super.shouldTriggerOurRecalc(t) || t === this.innerSeries[1]) && e(this.innCont(0)) && e(this.innCont(1))
                }
                calculateAt(t) {
                    const e = (e, i) => q(this.innCont(e)) ? this.innVal(e, i, t) : null,
                        i = e(0, en.Close),
                        n = e(1, en.CSHO);
                    return {
                        [this.target.id]: q(n) && q(i) ? n - i : null
                    }
                }
            },
            GTPI: class extends va {
                constructor(t, e) {
                    t.inputs = {
                        Period1: 5,
                        Period2: 3,
                        Period3: 3
                    }, super(t, !0, en.GTPI, e)
                }
            },
            PCTCHG: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                calculateAt(t) {
                    let e = null;
                    if (t > 0) {
                        const i = this.baseVal(this.source, t - 1);
                        if (null !== i) {
                            e = 100 * (this.baseVal(this.source, t) - i) / i
                        }
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            OPINT: class extends Ko {
                constructor(t, e) {
                    super(t, e)
                }
                getWrappers() {
                    return this.wrapBaseFields(en.TradeSize, en.Change, en.OpenInterest)
                }
            },
            STOMOMIX: class extends Ko {
                constructor(t, e) {
                    const i = xc(e, t.inputs.Period1, en.High, en.HH, !0),
                        n = xc(e, t.inputs.Period1, en.Low, en.LL, !1),
                        s = Ac(Rc(ec, (t, e, i) => this.baseVal(en.Close, t) - (e + i) / 2, i, n), t.inputs.Period2, ec, ic),
                        r = Ac(s, t.inputs.Period2, ic, nc),
                        o = Ac(Rc(sc, (t, e, i) => e - i, i, n), t.inputs.Period2, sc, rc),
                        a = Ac(o, t.inputs.Period2, rc, oc);
                    super(t, e, Rc(en.STOMOMIX, (t, e, i) => 100 * e / i, r, a))
                }
                getWrappers() {
                    return [this.wrapInner(this.target, 1)]
                }
            },
            CHDMOMOSC: class extends Ko {
                constructor(t, e) {
                    const i = Nc(ac, t => {
                        const e = en.Close,
                            i = t > 0 ? this.baseVal(e, t) - this.baseVal(e, t - 1) : 0;
                        return {
                            [ac.id]: i
                        }
                    }, e);
                    super(t, e, Rc(lc, (t, e) => e >= 0 ? e : 0, i), Rc(cc, (t, e) => e >= 0 ? 0 : -e, i))
                }
                calculateAt(t) {
                    let e = null;
                    if (this.atLeast(t, this.period + 1)) {
                        const i = this.past(t, this.period, lc, this.innCont(1)),
                            n = this.past(t, this.period, cc, this.innCont(2));
                        if (N(i) && N(n)) {
                            const t = _(i),
                                s = _(n);
                            e = ((t, e) => 100 * t / e)(t - s, t + s)
                        }
                    }
                    return {
                        [this.target.id]: e
                    }
                }
            },
            VSTOP: class extends Ko {
                constructor(t, e) {
                    super(t, e, Ec(e, t.inputs.Period))
                }
                get helpers() {
                    return [uc, hc, dc]
                }
                calculateAt(t) {
                    let e = null,
                        i = null,
                        n = null,
                        s = null,
                        r = null,
                        o = null,
                        a = !0;
                    const l = this.baseVal(en.Close, t),
                        c = t => ((t, e) => q(t) ? t : e)(t, 0),
                        u = (t, e) => this.container.getData(t)[e];
                    t > 0 && (n = Math.max(c(u(uc, t - 1)), l), r = Math.min(c(u(hc, t - 1)), l), a = u(dc, t - 1));
                    const h = this.inputs.Multiplier,
                        d = this.innVal(1, en.ATR, t);
                    if (q(d)) {
                        const c = a ? n - h * d : r + h * d,
                            p = u(a ? en.VSTOPUP : en.VSTOPLOW, t - 1),
                            f = a ? Math.max(p, c) : Math.min(p, c);
                        o = l - f >= 0;
                        const m = o != a;
                        i = m ? l : n, s = m ? l : r, e = m ? o ? i - h * d : s + h * d : f
                    }
                    return {
                        [en.VSTOPUP.id]: o ? e : null,
                        [en.VSTOPLOW.id]: o ? null : e,
                        [uc.id]: i,
                        [hc.id]: s,
                        [dc.id]: o
                    }
                }
            },
            SUPTR: class extends Ko {
                constructor(t, e) {
                    super(t, e, Ec(e, t.inputs.Period))
                }
                get helpers() {
                    return [pc, fc, mc, en.BARCOLIX]
                }
                calculateAt(t) {
                    let e = 0,
                        i = 0,
                        n = 0,
                        s = null,
                        r = 0;
                    const o = this.innVal(1, en.ATR, t);
                    if (q(o)) {
                        const a = (t, e) => q(t) ? t : e,
                            l = (t, e) => this.container.getData(t)[e],
                            [c, u, h] = [en.Close, en.High, en.Low].map(e => this.baseVal(e, t)),
                            d = (u + h) / 2,
                            p = this.baseVal(en.Close, t - 1),
                            f = this.inputs.Multiplier,
                            m = d - f * o,
                            g = d + f * o,
                            [y, v, T] = [pc, fc, mc].map(e => l(e, t - 1));
                        e = p > y ? Math.max(m, y) : m, i = p < v ? Math.min(g, v) : g, n = c > v ? 1 : c < y ? -1 : a(T, 1);
                        const b = 1 === n;
                        s = b ? e : i, r = b ? 1 : 0
                    }
                    return {
                        [pc.id]: e,
                        [fc.id]: i,
                        [mc.id]: n,
                        [en.SUPTR.id]: s,
                        [en.BARCOLIX.id]: r
                    }
                }
            },
            ICHCLD: class extends Ko {
                constructor(t, e) {
                    const i = (t, e, i) => Rc(i, (t, e, i) => (e + i) / 2, t, e),
                        n = (t, n) => i((t => xc(e, t, en.Low, en.LL, !1))(t), (t => xc(e, t, en.High, en.HH, !0))(t), n),
                        s = n(t.inputs.PeriodConversionLine, en.CONVLN),
                        r = n(t.inputs.PeriodBaseLine, en.BASELN),
                        o = i(s, r, en.LEADSP1),
                        a = n(t.inputs.PeriodLaggingSpan2, en.LEADSP2);
                    super(t, e, s, r, o, a)
                }
                get helpers() {
                    return [en.BARCOLIX]
                }
                calculateAt(t) {
                    const e = this.innVal(3, en.LEADSP1, t) > this.innVal(4, en.LEADSP2, t) ? 1 : 0;
                    return {
                        [en.LAGGSP.id]: this.baseVal(en.Close, t),
                        [en.BARCOLIX.id]: e
                    }
                }
                getWrappers() {
                    return [this.wrapInner(en.CONVLN, 1), this.wrapInner(en.BASELN, 2), this.wrapInner(en.LEADSP1, 3), this.wrapInner(en.LEADSP2, 4)]
                }
            },
            VWAP: class extends Ko {
                constructor(t, e) {
                    super(t, e, Dc(e))
                }
                get helpers() {
                    return [gc, yc]
                }
                calculateAt(t) {
                    let e = null;
                    const i = t => this.container.getData(t),
                        n = (e, n = -1) => i(e)[t + n],
                        s = t > 0,
                        r = s ? n(en.DateTime) : vc,
                        o = n(en.DateTime, 0),
                        a = s && vt(r, o),
                        l = a ? n(gc) : 0,
                        c = a ? n(yc) : 0,
                        u = this.innVal(0, en.Volume, t),
                        h = l + this.innVal(1, en.TP, t) * u,
                        d = c + u;
                    return e = h / d, {
                        [gc.id]: h,
                        [yc.id]: d,
                        [this.target.id]: e
                    }
                }
            }
        };

        function bc(t) {
            return {
                [Zt.INPUT_PERIOD]: t
            }
        }

        function Sc(t, e, i) {
            if (Tc.hasOwnProperty(t)) return new Tc[t](e, i);
            throw new Error("Study ".concat(t, " has not been implemented yet."))
        }

        function Pc(t, e, i, n = en.MA) {
            return Sc("MA", {
                source: i,
                target: n,
                inputs: bc(e)
            }, t)
        }

        function Ac(t, e, i, n = en.EMA) {
            return Sc("MAEXP", {
                source: i,
                target: n,
                inputs: bc(e)
            }, t)
        }

        function wc(t, e, i, n = en.SMA) {
            return Sc("MASMO", {
                source: i,
                target: n,
                inputs: bc(e)
            }, t)
        }

        function Cc(t, e, i, n = en.WMA) {
            return Sc("MAWEI", {
                source: i,
                target: n,
                inputs: bc(e)
            }, t)
        }

        function xc(t, e, i, n, s, r = !1) {
            return new ha({
                source: i,
                target: n,
                inputs: bc(e)
            }, s, r, t)
        }

        function Mc(t, e = en.TR) {
            return Sc("_TR", {
                target: e
            }, t)
        }

        function Ec(t, e, i = "SMA", n = en.ATR) {
            return Sc("ATR", {
                target: n,
                inputs: {
                    [Zt.INPUT_PERIOD]: e,
                    [Zt.INPUT_SMOOTHING]: i
                }
            }, t)
        }

        function Oc(t, e, i = "MA", n = en.Close, s = en.ADJATR) {
            return Sc("ADJATR", {
                source: n,
                target: s,
                inputs: {
                    [Zt.INPUT_PERIOD]: e,
                    [Zt.INPUT_SMOOTHING]: i
                }
            }, t)
        }

        function Dc(t, e = en.TP) {
            return Sc("TP", {
                target: e
            }, t)
        }

        function Lc(t, e, i = en.Close, n = en.ROC) {
            return Sc("ROC", {
                source: i,
                target: n,
                inputs: bc(e)
            }, t)
        }

        function _c(t, e = en.MFMUL) {
            return Sc("MFV", {
                target: e
            }, t)
        }

        function Ic(t, e, i, n = en.MSD) {
            return Sc("MSD", {
                source: i,
                target: n,
                inputs: bc(e)
            }, t)
        }

        function Nc(t, e, i) {
            return new Ra({
                target: t
            }, e, i)
        }

        function Rc(t, e, ...i) {
            return new _a({
                target: t
            }, e, ...i)
        }
        class Hc extends Zo {
            constructor(t, e) {
                super(t, e, Ac(e, 13, en.Close), function(t, e, i, n, s = en.Close) {
                    return Sc("MACDEXP", {
                        source: s,
                        inputs: {
                            Period1: e,
                            Period2: i,
                            Period3: n
                        },
                        outFields: [en.MACD, en.MACDS, en.MACDH]
                    }, t)
                }(e, 12, 26, 9, en.Close)), this.query = e.query, this.useNotifications = !0
            }
            calculateAt(t) {
                let e = o.Same;
                const i = this.innVal(1, en.EMA, t),
                    n = this.innVal(1, en.EMA, t - 1),
                    s = this.innVal(2, en.MACDH, t),
                    r = this.innVal(2, en.MACDH, t - 1);
                return q(i, n, s, r) && (i > n && s > r ? e = o.Up : i < n && s < r && (e = o.Down)), {
                    [en.BREL.id]: e
                }
            }
            getWrappers() {
                return this.wrapBaseFields(en.Open, en.High, en.Low, en.Close, en.Change, en.Volume, en.OpenInterest)
            }
        }
        const kc = {
                color: Zt.COLOR_TRANSPARENT
            },
            Fc = {
                color: Zt.COLOR_TRANSPARENT,
                width: 0,
                dashStyle: "Solid"
            };
        class Uc {
            constructor() {
                this.axis = null, this.id = Do()(), this.record = new rn, this.metaData = new ue, this.timeSeries = new Po
            }
            get title() {
                return ""
            }
            get showPrevious() {
                return !1
            }
            getPreviousValue() {
                return null
            }
            get mainCurve() {
                return this.curves[0]
            }
            get hasEvents() {
                return !!q(this.events) && Zt.EVENTS.some(t => Q(this.events, !1, t, "show"))
            }
            findEvents() {
                return []
            }
            get isSymbol() {
                return this.is(y.Symbol)
            }
            get isExpression() {
                return this.is(y.Expression)
            }
            get isStudy() {
                return this.is(y.Study)
            }
            get isForward() {
                return this.is(y.Forward)
            }
            get isSeasonal() {
                return this.is(y.Seasonal)
            }
            wrapIfAdvancedStyle(t) {
                let e = t;
                return this.mainCurve.isHeikinAshiStyle ? e = new Qo({
                    outFields: J(this.mainCurve.fields)
                }, t) : this.mainCurve.isElderImpulseSystemStyle && (e = new Hc({
                    outFields: J(this.mainCurve.fields).concat(en.BREL)
                }, t)), e
            }
            is(t) {
                return this.type === t
            }
            getCacheableEntities(t) {
                this.metaData.getCacheableEntities(t.metaData), this.timeSeries.getCacheableEntities(t.timeSeries)
            }
            fromModel(t) {
                this.type = y[t.type], this.main = t.main, t.levels && (this.levels = t.levels), t.bands && (this.bands = t.bands), this.curves = t.curves.map(t => {
                    const e = new Lo;
                    return e.plot = this, e.fromModel(t), e
                })
            }
            initialize() {}
            shutdown() {
                q(this.timeSeries) && q(this.timeSeries.shutdown) && !this.timeSeries.isCached && this.timeSeries.shutdown(), this.isShutDown = !0
            }
            makeQuery() {
                const t = this.axis.pane.presenter,
                    e = new $o(null, t.data.aggregation, v.Normal, [st(Q(t.data, null, "range", "from")), st(Q(t.data, null, "range", "to"))]);
                return e.barsToFetch = t.data.maxDataPoints || Zt.DEFAULT_MAX_RECORDS, e.chartId = t.renderTo, e.curveStyle = this.curves[0].style, e
            }
            priceToY(t) {
                return this.axis.yScale.priceToY(t)
            }
            drawLevels(t) {
                t.save();
                const e = Zt.OUT_OF_SCREEN;
                for (let i of this.levels) {
                    const n = this.priceToY(i.value);
                    Qe(t, Je({
                        line: i.line,
                        fill: kc
                    })), Ue(t, {
                        x: -1,
                        y: n
                    }, {
                        x: e,
                        y: n
                    })
                }
                t.restore()
            }
            drawBands(t) {
                t.save();
                const e = Zt.OUT_OF_SCREEN;
                for (let i of this.bands) {
                    const n = this.priceToY(i.range.to),
                        s = this.priceToY(i.range.from);
                    Qe(t, Je({
                        fill: i.fill,
                        line: Fc
                    })), ke(t, new Ie(-1, n, e, s - n), !1)
                }
                t.restore()
            }
            draw(t) {
                q(this.levels) && this.drawLevels(t), q(this.bands) && this.drawBands(t);
                for (let e of this.curves) e.draw(t)
            }
        }

        function Vc(t) {
            mt(1, arguments);
            var e = gt(t),
                i = new Date(0);
            return i.setFullYear(e.getFullYear(), 0, 1), i.setHours(0, 0, 0, 0), i
        }

        function Bc(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function Wc(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class jc extends Uc {
            get symbol() {
                return this._symbol
            }
            set symbol(t) {
                this._symbol !== t && (this._symbol = t, this.getTimeSeries(), this.getMetaData())
            }
            get title() {
                return this.symbol
            }
            get showPrevious() {
                return this._showPrevious
            }
            getPreviousValue() {
                return q(this.timeSeries) && q(this.timeSeries.record) ? this.timeSeries.record.getValue(en.PreviousClose) : null
            }
            getTimeSeries() {
                const t = Rp().getTimeSeriesDataSource();
                let e = this.makeQuery();
                e.symbol = this.symbol, this.mainCurve.isRenko && (e.barsToFetch = 9e3);
                let i = t.getTimeSeries(e);
                this.timeSeries = this.wrapIfAdvancedStyle(i), this.timeSeries.ready().then(t => {
                    t && (go.a.publish(nn.TS_MANYCHANGED, {
                        series: this.timeSeries,
                        part: C.Unspecified
                    }), this.getEvents())
                })
            }
            getMetaData() {
                const t = Rp().getMetaDataSource();
                this.metaData = t.getMetaData(this.symbol), this.metaData.ready().then(t => {
                    t && go.a.publish(nn.MD_CHANGED, {
                        plot: this
                    })
                })
            }
            getEvents() {
                if (!this.hasEvents) return;
                const t = Rp().getTimeSeriesDataSource(),
                    e = {
                        symbol: this.symbol,
                        seriesKind: v.Events,
                        getHashKey: function() {
                            return Object.values(this).filter(t => "function" != typeof t).join("|")
                        }
                    };
                Zt.EVENTS.forEach(t => {
                    e[t] = Q(this.events, !1, t, "show")
                }), this.eventsSeries = t.getTimeSeries(e), this.eventsSeries.ready().then(t => {
                    t && go.a.publish(nn.TS_EVENTSCHANGED, {
                        series: this.eventsSeries
                    })
                })
            }
            get hasEventsData() {
                return this.hasEvents && q(this.eventsSeries) && this.eventsSeries.hasData && this.eventsSeries.container.size > 0
            }
            findEvents(t) {
                return this.hasEventsData ? this.eventsSeries.container.getTimeData().map((e, i) => this.compare(e, t) ? this.getEventsAt(i) : []).flat() : []
            }
            fromModel(t) {
                super.fromModel(t), this._showPrevious = t.showPrevious, this.events = t.events, this.symbol = t.symbol, this.compare = function(t) {
                    switch (t.unit) {
                        case c.Tick:
                        case c.Intraday:
                            return Ui;
                        case c.Day:
                            return Ri;
                        case c.Week:
                            return Hi;
                        case c.Month:
                            return ki;
                        case c.Quarter:
                            return Fi;
                        case c.Year:
                            return Ei;
                        default:
                            return Ui
                    }
                }(this.axis.pane.presenter.data.aggregation)
            }
            draw(t) {
                super.draw(t), this.hasEventsData && this.drawEvents(t)
            }
            getEventsAt(t) {
                const e = this.eventsSeries.container,
                    i = i => e.getData(i)[t];
                return e.fields.filter(t => t !== en.DateTime).map(t => {
                    const e = i(t);
                    if (!q(e)) return null;
                    const n = this.events[t.id.toLowerCase()];
                    return q(n) && n.show ? {
                        field: t,
                        value: e,
                        date: i(en.DateTime),
                        text: n.title,
                        color: n.color
                    } : null
                }).filter(t => t)
            }
            drawEvents(t) {
                const e = this.axis.pane.presenter,
                    i = e.view.xAxis.xScale,
                    n = i.domain();
                if (!q(n) || !q(n[0], n[1])) return;
                const s = (t, e = en.DateTime) => t.container.getData(e),
                    r = s(this.eventsSeries),
                    o = this.timeSeries,
                    a = s(o),
                    l = e.data.aggregation,
                    u = s(o, this.curves[0].isOhlc ? en.High : l.isTick ? en.Last : en.Close);
                let h = -1,
                    d = 0;
                const {
                    chart: {
                        fontFamily: p
                    }
                } = this.axis.pane.presenter.display, f = r.map((t, s) => {
                    if (!(t => +t >= +n[0] && +t <= +n[1])(t)) return [];
                    return this.getEventsAt(s).map(t => {
                        const n = function(t, e) {
                                const {
                                    unit: i
                                } = t;
                                return i === c.Year ? Vc(e) : i === c.Quarter ? _i(e) : i === c.Month ? Tt(e) : i === c.Week ? Oi(e) : i === c.Day ? yt(e) : e
                            }(l, t.date),
                            s = j(a, +n, Number),
                            r = u[s];
                        s === h ? d++ : d = 0;
                        const o = i.timeToX(n),
                            p = Gc(e.view),
                            f = this.axis.yScale.priceToY(r) - d * (p + p + p);
                        return h = s,
                            function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var i = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? Bc(Object(i), !0).forEach((function(e) {
                                        Wc(t, e, i[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Bc(Object(i)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                    }))
                                }
                                return t
                            }({
                                visible: !0
                            }, t, {
                                x: o,
                                y: f,
                                r: p
                            })
                    })
                }).flat();
                t.save(), f.forEach(e => function(t, {
                    x: e,
                    y: i,
                    r: n,
                    color: s,
                    text: r
                }, o) {
                    const a = n;
                    t.fillStyle = s, t.beginPath();
                    const l = n + n,
                        c = l;
                    t.fillRect(e - n, i - a - c, l, c);
                    const u = (1.6 * n).toFixed(0);
                    t.font = "700 ".concat(u, 'px "').concat(o, '"'), t.fillStyle = "#fff", t.textAlign = "center", t.textBaseline = "middle", t.beginPath(), t.fillText(r, e, i - .9 * c)
                }(t, e, p)), t.restore()
            }
        }

        function Gc(t) {
            const e = t.xAxis.xScale.bar.width / 2;
            return Math.max(e, Zt.MIN_EVENT_RADIUS)
        }
        class zc extends jc {
            constructor(t) {
                super(), this.seriesKind = t
            }
            get showPrevious() {
                return !1
            }
            get title() {
                return "".concat(this.curves[0].fields[0].name, "(").concat(c[this.fundamental].substring(0, 1), ")")
            }
            fromModel(t) {
                this.fundamental = c[t.fundamental], super.fromModel(t)
            }
            makeQuery() {
                let t = new $o(this.symbol, new Vi(this.fundamental), this.seriesKind);
                return t.fields = this.curves[0].fields, t
            }
        }
        class Yc extends Uc {
            get params() {
                if (!q(this._params)) {
                    let t = this.model.inputs || [];
                    const e = t.length;
                    if (0 === e) return "";
                    let i = "";
                    e > 3 && (t = t.slice(0, 3), i = ", ..."), this._params = 0 === t.length ? "" : "(".concat(t.map(t => t.value).join(", ")).concat(i, ")")
                }
                return this._params
            }
            get shiftFmt() {
                if (!q(this._shiftFmt)) {
                    const t = this.curves.map(t => Number(t.shift)).filter(t => 0 !== t);
                    this._shiftFmt = 0 === t.length ? "" : "[".concat(t.join(", "), "]")
                }
                return this._shiftFmt
            }
            get title() {
                if (!q(this._title)) {
                    const t = this.params,
                        e = this.shiftFmt;
                    this._title = "".concat(this.model.study, " ").concat(t, " ").concat(e).trim()
                }
                return this._title
            }
            fromModel(t) {
                this.model = t, super.fromModel(this.model)
            }
            getOptions() {
                let t = {};
                t.source = en[this.model.source], t.inputs = nt(this.model.inputs);
                const e = void 0 !== this.model.target;
                return t.outFields = e ? [en[this.model.target]] : this.curves.reduce((t, e) => t.concat(e.fields), []), t.target = e ? en[this.model.target] : t.outFields[0], t.aggregation = this.axis.pane.presenter.data.aggregation, t
            }
            getMetaData() {
                const t = pi(this.model.study),
                    e = t.meta.decimals;
                this.metaData = void 0 !== e ? new ce(e) : this.basePlot.metaData, q(t.meta.range) && (this.range = t.meta.range)
            }
            applyShift(t) {
                if ("ICHCLD" === this.model.study) {
                    const e = t.inputs.Displacement;
                    this.curves[2].shift = -e, this.curves[3].shift = e, this.curves[4].shift = e, this.curves[5].shift = e
                }
            }
            initialize() {
                if (this.model.basis === Zt.BASIS_MAIN) {
                    this.removeNotApplicableCurves(), this.basePlot = this.axis.pane.presenter.mainPlot, this.getMetaData();
                    const t = this.getOptions();
                    this.applyShift(t), this.timeSeries = Sc(this.model.study, t, this.basePlot.timeSeries), this.timeSeries.useNotifications = !0;
                    const e = this.title,
                        i = this.basePlot.timeSeries instanceof Po;
                    this.timeSeries.ready().then(t => {
                        t || i || console.error("Unable to calculate study values for ".concat(e))
                    })
                }
            }
            removeNotApplicableCurves() {
                const t = this.axis.pane.presenter.mainPlot,
                    e = t.type === y.Symbol && Ot(t.symbol);
                this.curves = this.curves.filter(t => !t.fields.includes(en.OpenInterest) || !!e && this.axis.pane.presenter.data.aggregation.isEndOfDay)
            }
        }
        class $c {
            constructor(t, e, i) {
                this.id = Do()(), this.axis = t, this.passive = !1, void 0 !== e && void 0 !== i && (this.price = e, this.time = i, this.toPoint()), this.moveDirection = A.Both
            }
            get movable() {
                return this.moveDirection !== A.None
            }
            get presenter() {
                return this.pane.presenter
            }
            get pane() {
                return this.axis.pane
            }
            toPoint() {
                const t = this.axis.toPoint(this);
                q(t) && K(t.x) && K(t.y) && (this.point = t)
            }
            update(t, e) {
                this.price = t, this.time = e, this.toPoint()
            }
            updateFromPoint(t) {
                const e = this.axis.toAnnotationPoint(t);
                this.price = e.price, this.time = e.time, this.point = t
            }
            hitTest(t) {
                return this.distance(t) <= Zt.HIT_TEST_TOLERANCE
            }
            distance(t) {
                const e = t.x - this.point.x,
                    i = t.y - this.point.y;
                return Math.abs(Math.sqrt(e * e + i * i) - Zt.HALF_ANN_POINT_DIMENSION)
            }
            draw(t) {
                if (q(this.point)) {
                    const e = Zt.HALF_ANN_POINT_DIMENSION;
                    t.beginPath(), t.ellipse(this.point.x, this.point.y, e, e, 0, 0, 2 * Math.PI), t.stroke()
                }
            }
        }
        class qc extends Uc {
            get title() {
                return this.expression
            }
            get expression() {
                return this._expression
            }
            set expression(t) {
                this.parseExpression(t), this.getMetaData(), this.getTimeSeries()
            }
            parseExpression(t) {
                const {
                    model: e,
                    error: i,
                    clean: n,
                    text: s,
                    symbols: r
                } = $a(t);
                i ? (this.errorText = i, this.exprModel = null) : this.exprModel = e, this._expression = this.isValid ? n : s, this.symbols = this.isValid ? r : null
            }
            get isValid() {
                return !q(this.errorText)
            }
            getTimeSeries() {
                const t = this.getInnerSeries();
                let e = new nl(this.exprModel, t);
                this.timeSeries = this.wrapIfAdvancedStyle(e);
                const i = this.title;
                this.timeSeries.ready().then(t => {
                    t || console.error("Unable to calculate expression: ".concat(i))
                })
            }
            getInnerSeries() {
                const t = Za(this.exprModel),
                    e = Rp().getTimeSeriesDataSource();
                return t.map(t => {
                    let i = this.makeQuery();
                    return i.symbol = t, e.getTimeSeries(i)
                })
            }
            getMetaData() {
                this.isValid && (this.metaData = new he(this.symbols), this.metaData.ready().then(t => {
                    t && go.a.publish(nn.MD_CHANGED, {
                        plot: this
                    })
                }))
            }
            fromModel(t) {
                super.fromModel(t), this.expression = t.expression
            }
        }
        class Xc {
            constructor() {
                this.longPressTimeout = null
            }
            startLongPress(t, e, i) {
                Y() && (this.longPressTimeout = setTimeout(() => this.longPressTriggered(t, e, i), Zt.LONG_PRESS_TIMEOUT_MILLIS))
            }
            longPressTriggered(t, e, i) {
                this.cancelLongPress(), this.performLongPress(t, e, i)
            }
            cancelLongPress() {
                Y() && q(this.longPressTimeout) && (clearTimeout(this.longPressTimeout), this.longPressTimeout = null)
            }
            performLongPress(t, e, i) {}
        }
        class Kc extends Xc {
            constructor(t, e, i) {
                super(), this.annotation = t, this.previous = e, this.cursorSet = !1, this.moved = !1, this.snapToSupported = !1, this.startLongPress(null, i)
            }
            performLongPress(t, e) {
                gh(this.annotation, e)
            }
            onMouseMove(t) {
                this.cancelLongPress(), this.annotation.axis.pane.presenter.enableTooltip(!1);
                const {
                    point: e,
                    view: i,
                    offset: n
                } = t;
                i.drawCrosshair({
                    ap: e,
                    offset: n
                }), this.cursorSet || (this.previous.axis.pane.presenter.view.setCursor(b.Move), this.cursorSet = !0);
                const s = Pe(e.point, this.previous.point);
                this.annotation.offset(s), this.annotation.wasModifiedByTool(), this.annotation.requestRedraw(), this.previous = e, this.moved = !0
            }
            onMouseUp(t) {
                this.cancelLongPress(), ed(this.annotation, this.moved)
            }
        }
        class Zc {
            constructor(t, e) {
                this.annotation = t, this.pointIndex = t.points.indexOf(e), this.snapToSupported = !0
            }
            onMouseMove(t) {
                this.alignPointsMode = t.getModifier(P.Shift), this.annotation.axis.pane.presenter.enableTooltip(!1);
                const {
                    point: e,
                    view: i,
                    offset: n
                } = t;
                if (i.drawCrosshair({
                    ap: e,
                    offset: n
                }), q(e)) {
                    const t = this.annotation.points[this.pointIndex],
                        i = Pe(e.point, t.point);
                    switch (t.moveDirection) {
                        case A.Both:
                            t.update(e.price, e.time);
                            break;
                        case A.Horizontal:
                            t.update(t.price, e.time);
                            break;
                        case A.Vertical:
                            t.update(e.price, t.time)
                    }
                    t.moveDirection !== A.None && this.annotation.wasPointMovedByTool(t, i)
                }
                this.annotation.requestRedraw()
            }
            onMouseUp(t) {
                ed(this.annotation)
            }
        }
        class Qc {
            constructor(t, e, i) {
                this.anchor = t, this.isVertical = e, this.axis = i
            }
            hitTest(t) {
                return !!q(this.anchor) && (this.isVertical ? Math.abs(t.x - this.anchor.x) <= Zt.HIT_TEST_TOLERANCE : Math.abs(t.y - this.anchor.y) <= Zt.HIT_TEST_TOLERANCE)
            }
            draw(t) {
                const e = Zt.OUT_OF_SCREEN;
                this.isVertical ? Ve(t, this.anchor.x, -e, e) : Be(t, this.anchor.y, -e, e)
            }
        }

        function Jc(t) {
            return 0 === De(t.fill.color).a ? t.line.color : t.fill.color
        }
        class tu {
            constructor(t, e) {
                this.points = [], this.isSelected = !1, this.drawn = !0, this.axis = t, this.name = e, this.id = Do()(), this.alignPointsSupported = !1, this.visible = !0
            }
            requestRedraw() {
                this.axis.pane.presenter.view.redraw()
            }
            prepareDraw(t, e) {
                return this.drawPoints(t, e), this.readyToDraw()
            }
            readyToDraw() {
                return this.activePoints.every(t => void 0 !== t.point)
            }
            getPriceScaleAdornments() {
                return Zt.EMPTY_ARRAY
            }
            getTimeScaleAdornments() {
                return Zt.EMPTY_ARRAY
            }
            extractTraits(t = !0) {
                let e = J(this.traits);
                const i = si(this.name);
                return Object.keys(e).forEach(n => {
                    const s = i.includes(n);
                    (t && !s || !t && s) && delete e[n]
                }), t || ["line", "fill", "zIndex"].forEach(t => delete e[t]), e
            }
            extractPoints() {
                return this.activePoints.map(t => ({
                    price: t.price,
                    time: X(t.time, 4)
                }))
            }
            offset(t) {
                this.points.filter(t => t.movable).forEach(e => {
                    e.updateFromPoint(Ae(e.point, t))
                })
            }
            get traits() {
                return this._traits || (this._traits = J(this.defaultTraits)), this.adjustFill && (this._traits.fill.color = Jc(this._traits), this.adjustFill = !1), this._traits
            }
            set traits(t) {
                void 0 !== t && ot(this.traits, t)
            }
            get activePoints() {
                return this.points.filter(t => !t.passive)
            }
            get style() {
                return Je(this.traits)
            }
            get defaultTraits() {
                return Ze(this.axis.pane.presenter.display, this.name)
            }
            get defaultStyle() {
                return Je(this.defaultTraits)
            }
            get adornStyle() {
                const t = J(this.defaultTraits);
                return t.fill.color = this.traits.line.color, t.line.width = 0, t.line.color = Zt.COLOR_TRANSPARENT, Je(t)
            }
            get pointsStyle() {
                const t = J(this.defaultTraits);
                return t.line.dashStyle = "Solid", Je(t)
            }
            wasModifiedByTool() {}
            wasPointMovedByTool(t, e) {}
            drawPoints(t, e) {
                this.points.forEach(i => {
                    void 0 !== i.price && (e && i.toPoint(), q(t) && (this.isSelected || this.drawn) && (Qe(t, this.pointsStyle), i.draw(t)))
                })
            }
            addPoints(t) {
                for (let e = 0; e < t; e++) this.points.push(new $c(this.axis))
            }
            toModel() {
                const t = this.extractPoints();
                return {
                    id: this.name,
                    visible: this.visible,
                    points: t,
                    traits: this.traits
                }
            }
            canMove(t) {
                return !0
            }
            updatePoints(t) {}
            updateFrom(t, e, i, n) {
                "boolean" == typeof n && (this.visible = n);
                let s = q(t) ? J(t) : {};
                q(e) && ot(s, e), this.traits = s, q(i) && this.updatePoints(i)
            }
        }

        function eu(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function iu(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        class nu extends tu {
            constructor(t, e) {
                super(t, e)
            }
            draw(t, e) {
                if (this.prepareDraw(t, e) && !this.drawn) {
                    const e = this.getElements();
                    Qe(t, this.style), e.forEach((e, i) => {
                        Qe(t, this.getStyleForElement(e, i)), e.draw(t)
                    }), Qe(t, this.adornStyle), this.adornElements(e, t);
                    const i = this.getMarkers();
                    Qe(t, this.style), i.forEach(e => {
                        e.draw(t)
                    })
                }
            }
            getStyleForElement(t, e) {
                return this.style
            }
            getAdornOffset(t, e = !1) {
                const i = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? eu(Object(i), !0).forEach((function(e) {
                            iu(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : eu(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }({}, Zt.DEFAULT_ADORN_OFFSET);
                return e && (i.y = -(Re(t, 1) + i.y)), i
            }
            adornElements(t, e) {}
            hitTest(t) {
                if (!this.drawn && this.visible) {
                    const e = this.getElements(),
                        i = this.getMarkers();
                    return e.some(e => e.hitTest(t)) || i.some(e => e.hitTest(t))
                }
                return !1
            }
            updatePointsFrom(t, e = 0) {
                t.forEach((t, i) => this.points[e + i].update(t.price, t.time))
            }
            updatePoints(t) {
                this.allowPricesChangeUI && this.updatePointsFrom(t)
            }
            getMarkers() {
                return []
            }
            get marker() {
                return this.traits[Zt.AT_MARKER]
            }
            get showPrices() {
                return this.traits[Zt.AT_SHOW_PRICES]
            }
            get showTimestamps() {
                return this.traits[Zt.AT_SHOW_TIMESTAMPS]
            }
            get showBarCount() {
                return this.traits[Zt.AT_SHOW_BARCOUNT]
            }
            get allowPricesChangeUI() {
                return si(this.name).includes(Zt.AT_ALLOW_PRICES_CHANGE_UI)
            }
        }
        class su extends $c {
            constructor(t, e, i) {
                super(t), this.passive = !0, this.priceRef = e, this.timeRef = i
            }
            get price() {
                return this.priceRef.price
            }
            get time() {
                return this.timeRef.time
            }
            set price(t) {
                this.priceRef.price = t
            }
            set time(t) {
                this.timeRef.time = t
            }
        }
        class ru {
            constructor(t) {
                this.points = t
            }
            get left() {
                return Math.min(this.points[0].point.x, this.points[1].point.x)
            }
            get top() {
                return Math.min(this.points[0].point.y, this.points[1].point.y)
            }
            get width() {
                return Math.abs(this.points[1].point.x - this.points[0].point.x)
            }
            get height() {
                return Math.abs(this.points[1].point.y - this.points[0].point.y)
            }
            getRect() {
                return q(this.points[0].point, this.points[1].point) ? new Ie(this.left, this.top, this.width, this.height) : null
            }
        }

        function ou(t) {
            const e = new $c(t),
                i = new $c(t);
            return [e, i, new su(t, e, i), new su(t, i, e)]
        }
        class au extends tu {
            constructor(t, e) {
                super(t, e), this.points = ou(t), this.helper = new ru(this.points)
            }
            get left() {
                return this.helper.left
            }
            get top() {
                return this.helper.top
            }
            get width() {
                return this.helper.width
            }
            get height() {
                return this.helper.height
            }
            getRect() {
                return this.helper.getRect()
            }
            draw(t, e) {
                return !!this.prepareDraw(t, e) && (Qe(t, this.style), !0)
            }
        }
        class lu {
            constructor(t, e, i, n) {
                this.points = t, this.lines = e, this.axis = n, this.fixupBottomRight = i, this.helper = new ru(this.points)
            }
            hitTest(t) {
                const e = this.getRect();
                return !!q(e) && e.contains(t)
            }
            getRect() {
                return this.helper.getRect()
            }
            get fontSize() {
                if (0 === this.lines.length) return 0;
                const {
                    height: t
                } = this.getRect();
                return Math.floor(t / this.lines.length)
            }
            draw(t) {
                if (0 === this.lines.length) return;
                t.save();
                const {
                    x: e,
                    y: i
                } = this.helper.getRect();
                if (this.fixupBottomRight) {
                    const n = Math.max(...this.lines.map(e => t.measureText(e).width));
                    this.points[1].updateFromPoint({
                        x: e + n,
                        y: i + 13 * this.lines.length
                    }), this.fixupBottomRight = !1
                }
                const n = this.fontSize;
                t.textAlign = "left", t.textBaseline = "top";
                const {
                    chart: {
                        fontFamily: s
                    }
                } = this.axis.pane.presenter.display;
                t.font = "".concat(n, "px ").concat(s), this.lines.forEach((s, r) => {
                    const o = i + n * r;
                    t.fillText(s, e, o)
                }), t.restore()
            }
        }
        class cu extends nu {
            constructor(t, e) {
                super(t, e), this.textEditable = !0, this.points = ou(t), this.adjustFill = !0, this.fixupBottomRight = !1
            }
            get textLines() {
                return this.traits[Zt.AT_TEXT_LINES]
            }
            set textLines(t) {
                this.traits[Zt.AT_TEXT_LINES] = t, this._textAnnElement = null
            }
            get textElement() {
                return q(this._textAnnElement) || (this._textAnnElement = new lu(this.points, this.textLines, this.fixupBottomRight, this.axis)), this._textAnnElement
            }
            getElements() {
                return [this.textElement]
            }
        }
        class uu extends cu {
            constructor(t, e, i) {
                super(t, e), this.textEditable = !1, q(i) && (this.handleExtraPoints(i.points, !0), ot(this.traits, i), delete this.traits.points, this.fixupBottomRight = !0)
            }
            prepareDraw(t, e) {
                return this.points.slice(4).forEach(t => t.moveDirection = A.None), super.prepareDraw(t, e)
            }
            canMove(t) {
                return !!this.visible && this.textElement.hitTest(t)
            }
            updatePoints(t) {
                this.handleExtraPoints(t.slice(2), !1)
            }
            handleExtraPoints(t, e) {
                q(t) && (e && this.addPoints(t.length), this.updatePointsFrom(t, 4))
            }
            get drawLines() {
                return this.traits[Zt.AT_DRAW_LINES]
            }
            updateFrom(t, e, i, n) {
                if (super.updateFrom(t, e, i, n), q(e) && q(e.textLines)) {
                    const t = this.textElement.scale;
                    this.textLines = e.textLines, q(t) && (this.textElement.scale = t)
                }
            }
            getElements() {
                const t = super.getElements();
                if (!this.drawLines) return t;
                const e = this.points.slice(4).map(t => new Qc(t.point, !1, this.axis));
                return t.concat(e)
            }
        }
        class hu {
            constructor(t, e) {
                this.factory = t, this.existing = e, this.isNew = !q(e), this.isNew || (this.anchor = this.existing.points[0]), this.clicks = 0, this.snapToSupported = !1, this.isDrawingAnnotation = this.isNew
            }
            getChartParent() {
                return this.anchor.axis.pane.presenter.view.canvasContainer
            }
            styleProps() {
                if (this.isNew) {
                    return {
                        height: 100,
                        fontSize: "100%",
                        color: Jc(Ze(this.anchor.axis.pane.presenter.display, "Text"))
                    }
                } {
                    const t = this.existing.textElement;
                    return {
                        height: 1.05 * t.getRect().height,
                        fontSize: "".concat(Math.round(t.fontSize), "px"),
                        color: this.existing.traits[Zt.AT_FILL].color
                    }
                }
            }
            onMouseDown(t) {
                const {
                    point: e
                } = t;
                if (this.isNew)
                    if (0 === this.clicks) {
                        if (void 0 === e) return void nd(t);
                        e.axis.pane.presenter.clearSelection(), this.anchor = e, this.clicks++, this.startEditing()
                    } else this.onEndEditing();
                else this.onEndEditing()
            }
            startEditing() {
                this.textArea = document.createElement("textarea");
                const {
                    x: t,
                    y: e
                } = this.anchor.point, i = this.anchor.axis.pane.getBounds(), n = i.x + i.width - this.anchor.point.x, {
                    height: s,
                    fontSize: r,
                    color: o
                } = this.styleProps();
                jt(this.textArea, {
                    position: "absolute",
                    top: "".concat(e, "px"),
                    left: "".concat(t, "px"),
                    border: "none",
                    outline: "none",
                    overflow: "hidden",
                    height: "".concat(s, "px"),
                    width: "".concat(n, "px"),
                    resize: "none",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    zIndex: 5,
                    fontSize: r,
                    color: o
                }), this.getChartParent().appendChild(this.textArea), this.textArea.onblur = this.onEndEditing.bind(this), this.isNew || (this.textArea.value = this.existing.textLines.join("\n"), this.existing.textLines = "", this.existing.requestRedraw()), setTimeout(() => this.textArea.focus(), 100)
            }
            onEndEditing() {
                const t = this.anchor,
                    e = this.isNew ? this.factory(t.axis) : this.existing,
                    i = this.textArea.value.split("\n");
                if (this.isNew) {
                    const {
                        actualWidth: n,
                        actualHeight: s
                    } = this.getTextDimensions(i);
                    e.points[0].update(t.price, t.time);
                    const {
                        x: r,
                        y: o
                    } = e.points[0].point;
                    e.points[1].updateFromPoint({
                        x: r + n,
                        y: o + s
                    }), e.drawn = !1
                }
                e.textLines = i, this.textArea.onblur = null, this.getChartParent().removeChild(this.textArea), e.requestRedraw(), this.isNew || e.requestRedraw(), ed(e, !0)
            }
            getTextDimensions(t) {
                const e = window.getComputedStyle(this.textArea).getPropertyValue("font-size"),
                    i = parseFloat(e) * t.length;
                let n = 0;
                const s = this.anchor.axis.pane.presenter,
                    r = s.view.mainContext;
                r.save();
                const {
                    chart: {
                        fontFamily: o
                    }
                } = s.display;
                r.font = "".concat(e, " ").concat(o);
                for (let e = 0; e < t.length; e++) {
                    const i = r.measureText(t[e]).width;
                    i > n && (n = i)
                }
                return r.restore(), {
                    actualWidth: n,
                    actualHeight: i
                }
            }
        }

        function du(t) {
            mt(1, arguments);
            var e = gt(t);
            return e.setMinutes(0, 0, 0), e
        }

        function pu(t, e) {
            mt(2, arguments);
            var i = du(t),
                n = du(e);
            return i.getTime() === n.getTime()
        }

        function fu(t) {
            mt(1, arguments);
            var e = gt(t);
            return e.setSeconds(0, 0), e
        }

        function mu(t, e) {
            mt(2, arguments);
            var i = gt(t),
                n = gt(e);
            return i.getTime() - n.getTime()
        }

        function gu(t) {
            mt(1, arguments);
            var e = gt(t),
                i = e.getDay();
            return i
        }
        const yu = /{value:([^}]+)}/,
            vu = /%([aAdewbBmyYHkIlMpPSL])+/g,
            Tu = {
                Second: {
                    Period: "PT1S",
                    Multipliers: [.01, .02, .05, .1, .2, .5, 1, 2, 5, 10, 15, 30]
                },
                Minute: {
                    Period: "PT1M",
                    Multipliers: [1, 2, 5, 10, 15, 30]
                },
                Hour: {
                    Period: "PT1H",
                    Multipliers: [1, 2, 3, 4, 6, 8, 12]
                },
                Day: {
                    Period: "P1D",
                    Multipliers: [1, 2]
                },
                Week: {
                    Period: "P1W",
                    Multipliers: [1, 2]
                },
                Month: {
                    Period: "P1M",
                    Multipliers: [1, 2, 3, 4, 6]
                },
                Year: {
                    Period: "P1Y",
                    Multipliers: [1, 2, 5, 10, 25, 50, 100, 250]
                }
            };
        const bu = new Map;

        function Su(t) {
            if (!q(t)) return null;
            if (!bu.has(t)) {
                const i = q(e = t) ? e.replace(yu, (t, e) => e.replace(vu, (t, e) => Zt.PHP_TO_UNICODE_TS_35_MAP[e])) : e;
                bu.set(t, pr(i))
            }
            var e;
            return bu.get(t)
        }
        class Pu {
            constructor({
                            barWidth: t,
                            unitWidth: e,
                            formatString: i,
                            minTickInterval: n,
                            duration: s
                        }, r) {
                this.size = r, this.barWidth = t, this.unitWidth = e, this.minTickInterval = n, this.duration = s, this.formatter = Su(i), this.prevDate = null
            }
            get noPrevDate() {
                return !q(this.prevDate)
            }
            formatDate(t, e) {
                return (this.formatter || e)(t)
            }
            asTick(t, e, i) {
                return this.prevDate = t, {
                    date: t,
                    priority: e,
                    text: this.formatDate(t, i)
                }
            }
            checkPrev(t) {
                return !!this.noPrevDate && (this.prevDate = t, !0)
            }
        }
        const Au = pr("yyyy"),
            wu = pr("LLL ''yy"),
            Cu = pr("LLL d"),
            xu = pr("EEE"),
            Mu = pr("HH:mm");
        class Eu extends Pu {
            constructor(t) {
                super(t), this.repeatEach = Zt.TIME_SCALE_MAX_SPACE_NO_TICKS / this.barWidth, this.repeatCounter = 0
            }
            asTick(t, e, i) {
                return this.repeatCounter = 0, super.asTick(t, e, i)
            }
            getTick(t) {
                if (!vt(this.prevDate, t)) return this.asTick(t, 1, xu);
                if (!pu(this.prevDate, t)) return this.asTick(t, 2, Mu);
                this.repeatCounter++;
                const e = this.repeatCounter === this.repeatEach;
                return ! function(t, e) {
                    mt(2, arguments);
                    var i = fu(t),
                        n = fu(e);
                    return i.getTime() === n.getTime()
                }(this.prevDate, t) || e ? this.asTick(t, e ? 4 : 3, Mu) : null
            }
        }
        const Ou = t => function(t, e) {
            mt(2, arguments);
            var i = mu(t, e) / 1e3;
            return i > 0 ? Math.floor(i) : Math.ceil(i)
        }(t, yt(t));
        class Du extends Pu {
            getTick(t) {
                const e = this.checkPrev(t),
                    i = 0 === this.minTickInterval || 0 == Ou(t) % (this.minTickInterval / 1e3),
                    n = !vt(this.prevDate, t),
                    s = function(t) {
                        mt(1, arguments);
                        var e = gt(t),
                            i = e.getMinutes();
                        return i
                    }(t),
                    r = !pu(this.prevDate, t) || e && 0 === s;
                if (i) {
                    if (n) return this.asTick(t, 1, Cu);
                    if (r) return this.asTick(t, 2, Mu);
                    if (0 == s % 30 && this.size < 15) return this.asTick(t, 3, Mu);
                    if (0 == s % 15 && this.size <= 5) return this.asTick(t, 4, Mu)
                }
                return null
            }
        }
        class Lu extends Pu {
            constructor(t) {
                super(t), this.monthDay = this.duration < 22 * Tu.Day.One, this.monthYear = this.duration > 22 * Tu.Day.One && this.duration < 7 * Tu.Month.One, this.year = this.duration > 7 * Tu.Month.One
            }
            useTuesday(t) {
                return !!this.noPrevDate || 2 === gu(t) && mu(t, this.prevDate) > 1728e5
            }
            getTick(t) {
                this.checkPrev(t);
                const e = !Li(t, this.prevDate),
                    i = !Ei(t, this.prevDate);
                return this.monthDay ? 1 === gu(t) || this.useTuesday(t) ? this.asTick(t, 1, Cu) : null : this.monthYear ? e ? this.asTick(t, 1, wu) : null : this.year && i ? this.asTick(t, 1, Au) : null
            }
        }
        class _u extends Pu {
            constructor(t) {
                super(t), this.monthDay = this.duration < 4 * Tu.Week.One, this.monthYear = this.duration > 4 * Tu.Week.One && this.duration < 6 * Tu.Month.One, this.year = this.duration > 6 * Tu.Month.One
            }
            getTick(t) {
                this.checkPrev(t);
                const e = !Li(t, this.prevDate),
                    i = !Ei(t, this.prevDate);
                return this.monthDay ? this.asTick(t, 1, Cu) : this.monthYear ? e ? this.asTick(t, 1, wu) : null : this.year && i ? this.asTick(t, 1, Au) : null
            }
        }
        class Iu extends Pu {
            constructor(t) {
                super(t), this.showMonths = this.duration < 7 * Tu.Month.One
            }
            getTick(t) {
                this.checkPrev(t);
                const e = !Ei(t, this.prevDate);
                return this.showMonths ? this.asTick(t, 1, wu) : e ? this.asTick(t, 1, Au) : null
            }
        }
        class Nu extends Pu {
            constructor(t) {
                super(t)
            }
            getTick(t) {
                return this.checkPrev(t), !Ei(t, this.prevDate) ? this.asTick(t, 1, Au) : null
            }
        }

        function Ru(t) {
            return q(t) ? "".concat(t.toFixed(2), " %") : ""
        }

        function Hu(t, e) {
            if (t.comparison === m.Percent) return Ru(e);
            const i = t.plots[0],
                n = i.curves[0],
                s = q(n) && n.fields.length > 0 ? n.fields[0] : null;
            if (!q(s)) return "";
            const r = {
                range: t.fullDomain,
                allDigits: !1
            };
            return i.metaData.format(e, s, r)
        }

        function ku(t, e) {
            const i = t.display.xAxis.format;
            if (q(i)) {
                return Su(i)(e)
            }
            const n = t.data.aggregation;
            return n.isEndOfDay ? Fu(n, e) : Uu(n, e)
        }

        function Fu(t, e) {
            if (!Qn(e)) return "";
            switch (t.unit) {
                case c.Tick:
                case c.Intraday:
                case c.Day:
                case c.Week:
                default:
                    return js(e, "P");
                case c.Month:
                    return js(e, "LLL yyyy");
                case c.Quarter:
                    return "Q".concat(js(e, "q yyyy"));
                case c.Year:
                    return js(e, "yyyy")
            }
        }

        function Uu(t, e) {
            if (!Qn(e)) return "";
            return js(e, t.isTick ? "pp" : "p")
        }
        const Vu = {
            delete: '<path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>',
            circle: '<circle cx="12" cy="12" r="10"/>',
            chevronUp: '<path d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>',
            chevronDown: '<path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>'
        };

        function Bu({
                        plots: t,
                        isMultiSymbol: e,
                        isMultiContract: i,
                        date: n,
                        time: s
                    }) {
            const r = [$u("Date", n, null, "heading"), s ? $u("Time", s, null, "heading") : ""],
                o = t.map(t => {
                    if (0 === t.values.length) return null;
                    const n = (t => (e || i) && t.type === y.Symbol || e && t.type === y.Expression && t.isMain)(t) ? qu(y[t.type], t.name, t.values[0].color) : "",
                        s = t.values.map(t => $u(t.longName, t.value, t.color));
                    if (t.events && t.events.length) {
                        const e = t.events.map(t => qu("".concat(t.field.name, " (").concat(Fu(c.Day, t.date), ")"), t.value, t.color));
                        s.push(...e)
                    }
                    return s.unshift(n), s
                }).flat(),
                a = r.concat(o).filter(t => "" !== t).join("");
            return '<table class="values-table">'.concat(a, "</table>")
        }

        function Wu(t, {
            panes: e,
            date: i,
            time: n
        }, s = !1, r = !1, o = !1) {
            return e.map((a, l) => {
                const c = s ? a.plots : a.plots.filter(t => !t.isMain),
                    u = t.mainPlot.axis.pane.id === a.id,
                    h = o && u ? '<span class="field-name" style="padding-right:5px">'.concat(i, " ").concat(n || "", "</span>") : "",
                    d = "".concat(h).concat(c.map(t => function({
                                                                    id: t,
                                                                    name: e,
                                                                    type: i,
                                                                    error: n,
                                                                    description: s,
                                                                    values: r,
                                                                    events: o,
                                                                    isMain: a
                                                                }, l, c) {
                        const u = n || s,
                            h = "value-title".concat(a ? " value-main" : ""),
                            d = y[i],
                            p = ["Study", "BalanceSheet", "IncomeStatement"].includes(d) || "Expression" === d && !c ? function(t) {
                                return '<a class="delete-plot" data-plot-id="'.concat(t, '">').concat(Gu("delete"), "</a>")
                            }(t) : "",
                            f = l ? r.map(t => Xu(a ? t.abbreviation : null, t.value, t.color)).join(" ") + Yu(o) : "";
                        return '\n        <div class="plot" style="flex: 0 0 auto">\n            '.concat(p, '\n            <a class="').concat(h, '" ').concat(u ? 'title="'.concat(u, '" ') : "", 'data-plot-id="').concat(t, '">').concat(e, "</a>\n            ").concat(f, "\n        </div>\n    ").trim()
                    }(t, r, u)).join("")),
                    p = function(t, e) {
                        const i = t < e - 1;
                        return ["".concat(t > 0 ? zu(!0, t) : ""), "".concat(i ? zu(!1, t) : "")].join(" ").trim()
                    }(l, e.length);
                return {
                    id: "bc-tip-".concat(a.id.substring(0, 8)),
                    isMainPane: u,
                    content: d,
                    moveContent: p,
                    bounds: a.bounds
                }
            })
        }

        function ju(t) {
            return "bchart-icon-".concat(t)
        }

        function Gu(t, e = null) {
            const i = q(e) ? 'style="fill:'.concat(e, '"') : "",
                n = ju(t);
            return '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="10px" '.concat(i, '><use xlink:href="#').concat(n, '"></use></svg>')
        }

        function zu(t, e) {
            const i = t ? "up" : "down";
            return '\n        <span\n            data-pane="'.concat(e, '" \n            data-dir="').concat(i, '"\n            title="Move ').concat(t ? "Up" : "Down", '" \n            class="move-pane">\n            ').concat(Gu(t ? "chevronUp" : "chevronDown"), "\n        </span>\n    ")
        }

        function Yu(t) {
            if (t && t.length) {
                const e = t.map(t => Xu("".concat(t.field.name, " (").concat(Fu(c.Day, t.date), ")"), t.value, t.color)).join(" ");
                return "Event ".concat(e)
            }
            return ""
        }

        function $u(t, e, i = null, n = []) {
            "string" == typeof n && (n = n.split(" "));
            const s = ["value-row", ...n],
                r = "string" == typeof i ? ' style="color: '.concat(i, '"') : "";
            return '\n        <tr class="'.concat(s.join(" "), '">\n            <td class="field-name">').concat(t, "</td>\n            <td").concat(r, ' class="field-value">').concat(e, "</td>\n        </tr>\n    ")
        }

        function qu(t, e, i = null) {
            return $u(t, e, i, "value-title")
        }

        function Xu(t, e, i) {
            const n = "string" == typeof i ? ' style="color: '.concat(i, '"') : "",
                s = q(t) ? '<span class="field-name">'.concat(t, "</span>") : "";
            return "".concat(s, "<span").concat(n, ' class="field-value">').concat(e, "</span>")
        }
        const Ku = (t, e) => t.at(e);
        class Zu {
            constructor(t) {
                this.presenter = t, this._dates = [], this.invalidate()
            }
            checkRebuild() {
                this.pendingRebuild && this.rebuild()
            }
            get withPrologLength() {
                return this.checkRebuild(), this._dates.length + Zt.TIMELINE_PADDING_BARS
            }
            get withPrologEpilogLength() {
                return this.withPrologLength + Zt.TIMELINE_PADDING_BARS
            }
            get firstSeriesIndex() {
                return Zt.TIMELINE_PADDING_BARS
            }
            get lastSeriesIndex() {
                return this.checkRebuild(), 0 === this._dates.length ? 0 : this.withPrologLength - 1
            }
            get withoutPrologEpilogLength() {
                return this.checkRebuild(), this._dates.length
            }
            at(t) {
                if (this.checkRebuild(), t < 0 || t >= this.withPrologEpilogLength) return null;
                if (t < Zt.TIMELINE_PADDING_BARS) {
                    const e = B(this._dates),
                        i = t - Zt.TIMELINE_PADDING_BARS;
                    return this.getDateShift(i)(e)
                }
                if (t >= this.withPrologLength) {
                    const e = V(this._dates),
                        i = t - this.withPrologLength + 1;
                    return this.getDateShift(i)(e)
                }
                return this._dates[t - Zt.TIMELINE_PADDING_BARS]
            }
            get length() {
                return this.checkRebuild(), this._dates.length > 0 ? this.withPrologEpilogLength : 0
            }
            slice(t, e) {
                this.checkRebuild();
                const i = [];
                for (let n = t; n < e; ++n) i.push(this.at(n));
                return i
            }
            mergeDateIntoTimeline(t, e = !0) {
                e && this.checkRebuild();
                const i = +t,
                    n = j(this._dates, i, Number),
                    s = +this._dates[n];
                if (s !== i) {
                    const e = n + (i > s ? 1 : 0);
                    return this._dates.splice(e, 0, t), e + this.firstSeriesIndex
                }
                return -1
            }
            invalidate() {
                this._dates.length = 0, this.pendingRebuild = !0
            }
            rebuild() {
                if (this.presenter.isEmpty) return;
                const t = this.presenter.mainPlot.timeSeries;
                t.hasData && (this._dates.push(...t.container.getTimeData().slice(0)), this.presenter.allPlots.forEach(e => {
                    if (e.timeSeries === t) return;
                    if (!e.timeSeries.hasData) return;
                    e.timeSeries.container.getTimeData().forEach(t => this.mergeDateIntoTimeline(t, !1))
                }), this.pendingRebuild = !1)
            }
            getDateShift(t) {
                const {
                    unit: e,
                    size: i
                } = this.presenter.data.aggregation;
                switch (e) {
                    case c.Year:
                        return dr(t);
                    case c.Quarter:
                        return hr(t);
                    case c.Month:
                        return ur(t);
                    case c.Week:
                        return cr(t);
                    case c.Day:
                        return lr(t);
                    case c.Intraday:
                        return or(i * t);
                    case c.Tick:
                        return rr(t)
                }
            }
        }

        function Qu(t, e, i, n, s) {
            const r = function(t, e) {
                const i = t.data.aggregation;
                return {
                    date: Fu(i, e),
                    time: i.isEndOfDay ? null : Uu(i, e),
                    isMultiSymbol: th(t),
                    isMultiContract: i.isMultiContract
                }
            }(t, e);
            r.offset = i, r.lastBarRefresh = !!n || !1, r.chartId = t.renderTo;
            const o = i => i.axes.map(t => t.plots).flat().filter(e => !s || e === t.mainPlot).map(t => function(t, e, {
                isMultiContract: i
            }, n) {
                const s = n.type === y.Study;
                if (!n.timeSeries.hasData) return null;
                const r = n.timeSeries.container,
                    o = (t, i) => {
                        const s = n.axis.pane.presenter.timeline,
                            o = j(s, +e, Number, Ku),
                            a = s.at(o - t.shift),
                            l = r.getTimeData(),
                            c = j(l, +a, Number);
                        return [!l[c] || l[c].getTime() !== a.getTime() ? null : t.dataAt(i, c, !1), c]
                    },
                    a = {
                        isMain: n.main,
                        type: n.type,
                        typeName: y[n.type],
                        name: n.title,
                        description: s ? pi(n.model.study).meta.title : null,
                        error: n.errorText,
                        id: n.id
                    },
                    c = n.curves[0];
                i && n.type === y.Symbol && r.hasField(en.Symbol) && (a.name = o(c, en.Symbol)[0]);
                const u = n.type === y.Expression,
                    h = (n.axis.comparison, m.None, n.axis.comparison === m.Percent),
                    d = {},
                    p = {
                        range: n.axis.yScale.domain(),
                        allDigits: !0
                    },
                    f = (t, e) => h ? Ru(t) : n.metaData.format(t, e, p);
                return a.values = n.curves.map(t => t.fields.map(e => {
                    const [i, r] = o(t, e), c = n.axis.yScale.priceToY(i);
                    d[e.id] = !0;
                    const h = t.getColor(r, t.style !== l.HollowCandles);
                    return {
                        abbreviation: eh(e),
                        shortName: e.shortName,
                        id: e.id,
                        name: e.name,
                        longName: u && !a.isMain ? n.title : "".concat(e.shortName, " ").concat(s ? n.params : "").trim(),
                        color: Me(h),
                        val: i,
                        y: c,
                        value: "".concat(f(i, e)).trim()
                    }
                })).flat().filter(t => null !== t), a.events = n.findEvents(o(c, en.DateTime)[0]), a
            }(0, e, r, t)).filter(t => null !== t);
            return r.panes = t.panes.map(t => ({
                bounds: Ju(t),
                id: t.id,
                plots: o(t)
            })), r
        }

        function Ju(t) {
            const {
                x: e,
                y: i,
                width: n,
                height: s
            } = t.getBounds(), {
                leftOffset: r,
                rightOffset: o
            } = t.presenter.view;
            return {
                top: i,
                left: e + r,
                right: o,
                bottom: i + s,
                width: n,
                height: s
            }
        }

        function th(t) {
            const e = t.mainPlot.symbol;
            return 0 < t.allPlots.filter(t => t.type === y.Symbol && t.symbol !== e).length
        }

        function eh(t) {
            return t.id === en.Change.id ? "Δ" : t.id.substring(0, 1)
        }

        function ih(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function nh(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ih(Object(i), !0).forEach((function(e) {
                    sh(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ih(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function sh(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function rh(t) {
            return Rp().config.tooltipMovement === t
        }

        function oh() {
            return rh(M[M.Draggable])
        }

        function ah() {
            return rh(M[M.Auto])
        }
        const lh = Zt.TOOLTIP_STD_LEGACY_CLASS,
            ch = Zt.TOOLTIP_STD_CLASS;
        class uh {
            constructor(t) {
                this.view = t, this.tooltipElem = Yt(t.el, "div"), Gt(this.tooltipElem, {
                    id: "".concat(t.presenter.renderTo, "-global-tooltip"),
                    class: "".concat(ch, " ").concat(lh)
                }), this.leftSide = !0, jt(this.tooltipElem, {
                    visibility: "hidden",
                    position: "absolute",
                    cursor: oh() ? "move" : "default",
                    zIndex: 20,
                    top: "".concat(Zt.TOOLTIP_Y_OFFSET, "px"),
                    left: "".concat(Zt.TOOLTIP_X_OFFSET, "px")
                }), this.setMode(t.presenter.display.tooltip.mode), this.isDrag = !1, this.startDrag = () => {
                    this.isDrag = !0
                }, this.stopDrag = () => {
                    this.isDrag = !1
                }, this.handleMouseMove = this.handleMouseMove.bind(this), this.view.el.addEventListener("mousemove", this.handleMouseMove), this.view.el.addEventListener("mouseleave", this.stopDrag), this.tooltipElem.addEventListener("mousedown", this.startDrag), this.tooltipElem.addEventListener("mouseup", this.stopDrag)
            }
            setMode(t) {
                if (this.mode !== t)
                    if (this.mode = t, t === Zt.TOOLTIP_BUBBLE) this.canDrag = !1, this.tooltipElem.style.transition = null, this.tooltipElem.classList.remove(ch, lh), jt(this.tooltipElem, {
                        pointerEvents: "none"
                    });
                    else {
                        this.canDrag = oh(), this.clearClasses(), this.tooltipElem.classList.add(ch, lh);
                        const t = Zt.TOOLTIP_TOGGLE_SIDE_ANIM_MS;
                        jt(this.tooltipElem, {
                            pointerEvents: "all",
                            top: "".concat(Zt.TOOLTIP_Y_OFFSET, "px"),
                            left: "".concat(Zt.TOOLTIP_X_OFFSET, "px"),
                            transition: ah() ? "left ".concat(t, "ms ease-out") : null,
                            bottom: null,
                            right: null
                        })
                    }
            }
            clearClasses() {
                this.tooltipElem.classList.remove("bottom-left", "bottom-right", "top-left", "top-right")
            }
            show(t, e) {
                const i = this.tooltipElem;
                if (e) {
                    const {
                        width: t,
                        height: n,
                        leftOffset: s,
                        rightOffset: r
                    } = this.view, o = i.getBoundingClientRect();
                    let a = "";
                    const l = i.style,
                        c = Zt.TOOLTIP_BUBBLE_TIP_HEIGHT;
                    if (e.y - c >= o.height) l.top = null, l.bottom = "".concat(n - e.y + c, "px"), a += "bottom-";
                    else {
                        const t = e.yMin || e.y;
                        l.top = "".concat(t + c, "px"), l.bottom = null, a += "top-"
                    }
                    e.x + o.width <= t - r ? (l.left = "".concat(e.x + s, "px"), l.right = null, a += "left") : (l.left = null, l.right = "".concat(t - e.x, "px"), a += "right"), this.clearClasses(), i.classList.add(a)
                }
                "hidden" === i.style.visibility && (i.style.visibility = "visible"), qt(i, t)
            }
            hide() {
                this.tooltipElem.style.visibility = "hidden"
            }
            remove() {
                this.view.el.removeEventListener("mousemove", this.handleMouseMove), this.view.el.removeEventListener("mouseleave", this.stopDrag), this.tooltipElem.removeEventListener("mousedown", this.startDrag), this.tooltipElem.removeEventListener("mouseup", this.stopDrag),
                    function(t) {
                        let e = t;
                        "string" == typeof t && (e = Wt(t)), e && e.parentNode.removeChild(e)
                    }(this.tooltipElem)
            }
            reposition(t, e) {
                jt(this.tooltipElem, {
                    left: "".concat(t, "px"),
                    top: "".concat(e, "px")
                })
            }
            handleMouseMove(t) {
                if (this.isDrag && this.canDrag) {
                    const {
                        movementX: e,
                        movementY: i
                    } = t, {
                        top: n,
                        left: s
                    } = this.tooltipElem.style, r = parseInt(n) + i, o = parseInt(s) + e;
                    this.reposition(o, r)
                } else if (ah()) {
                    const e = this.tooltipElem.getBoundingClientRect(),
                        i = this.view.el.getBoundingClientRect(),
                        n = t.pageX,
                        s = Zt.TOOLTIP_TOGGLE_DISTANCE_TOLERANCE,
                        r = i.width > 2 * e.width,
                        o = n > e.x && n <= e.right + s,
                        a = n < e.x && n >= e.x - s;
                    r && (o || a) && this.toggleSide()
                }
            }
            repositionAuto() {
                if (ah()) {
                    const t = this.view.presenter.mainPane.getBoundsWithoutScales(),
                        e = this.tooltipElem.offsetY,
                        i = this.leftSide ? Zt.TOOLTIP_X_OFFSET : t.x + t.width - this.tooltipElem.offsetWidth - Zt.TOOLTIP_X_OFFSET;
                    this.reposition(i, e)
                }
            }
            toggleSide() {
                this.isToggling || (this.isToggling = !0, setTimeout(() => this.isToggling = !1, Zt.TOOLTIP_TOGGLE_SIDE_ANIM_MS), this.leftSide = !this.leftSide, this.repositionAuto())
            }
        }

        function hh(t, {
            time: e,
            lastBarRefresh: i,
            justMain: n,
            offset: s
        }) {
            q(Wt(".".concat(Zt.SVG_ICONS_DOM_NODE))) || function() {
                const t = Yt(document.body, "div");
                Gt(t, {
                    class: Zt.SVG_ICONS_DOM_NODE
                });
                const e = Object.keys(Vu).map(t => '<symbol id="'.concat(ju(t), '" viewBox="0 0 24 24">').concat(Vu[t], "</symbol>")).join("");
                t.innerHTML = '<svg style="display:none" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>'.concat(e, "</defs></svg>")
            }();
            const r = Qu(t, e, s, i, n);
            if (t.showTooltip) {
                const {
                    mode: e,
                    showMainPlot: i
                } = t.display.tooltip, {
                    includeTimestamp: o,
                    showMainPlot: a
                } = Rp().config.tooltipHeaders || {}, l = q(a) ? a : i, c = !!q(o) && o;
                switch (e) {
                    case Zt.TOOLTIP_CARDS: {
                        const e = Wt("#".concat(t.renderTo, "-tooltip")),
                            i = function({
                                             panes: t,
                                             date: e,
                                             time: i
                                         }) {
                                const n = t.map(t => t.plots).flat(),
                                    s = n.find(t => t.isMain);
                                if (n.length > 0 && q(s)) {
                                    const {
                                        name: t,
                                        values: n,
                                        events: r
                                    } = s, o = n.map(t => Xu(t.abbreviation, t.value, null)).join(" ");
                                    return '\n            <span class="value-title">'.concat(t, '</span> \n            <span class="value-timestamp">').concat(e, " ").concat(i || "", "</span>\n            ").concat(o, " \n            ").concat(Yu(r), "\n        ")
                                }
                                return null
                            }(r);
                        e && i && (e.innerHTML = i), n || dh(t, r, l, !0, c);
                        break
                    }
                    case Zt.TOOLTIP_BUBBLE: {
                        const e = r.panes.find(t => {
                                const {
                                    top: e,
                                    left: i,
                                    width: n,
                                    height: r
                                } = t.bounds;
                                return new Ie(i, e, n, r).contains(s)
                            }),
                            i = e.plots.find(t => t.isMain) || e.plots[0],
                            n = i.values.find(t => ["High", "Close", "Last"].includes(t.id)),
                            o = i.values.find(t => "Low" === t.id),
                            a = n ? n.y : i.values[0].y,
                            c = Bu(nh({}, r, {
                                plots: e.plots
                            })),
                            u = '<div class="bubble-box">'.concat(c, '</div><div class="bubble-box-tip"></div>');
                        t.view.tooltip.show(u, {
                            x: s.x,
                            y: a,
                            yMin: o && o.y
                        }), dh(t, r, l);
                        break
                    }
                    case Zt.TOOLTIP_STD: {
                        const e = Bu(nh({}, r, {
                            plots: r.panes.map(t => t.plots).flat()
                        }));
                        t.view.tooltip.show(e), dh(t, r, l);
                        break
                    }
                    case Zt.TOOLTIP_EXTERNAL:
                        go.a.publish(nn.CH_TOOLTIPCHANGED, r);
                        break;
                    default:
                        console.warn("Unknown tooltip mode requested: ".concat(e))
                }
            }
        }

        function dh(t, e, i = !1, n = !1, s = !1) {
            const r = t.view.el;
            Wu(t, e, i, n, s).forEach(({
                                           id: t,
                                           isMainPane: e,
                                           content: i,
                                           moveContent: n,
                                           bounds: {
                                               left: s,
                                               right: o,
                                               top: a,
                                               width: l
                                           }
                                       }, c) => {
                if ("" !== i) {
                    let n = Wt("#".concat(t));
                    q(n) || (n = document.createElement("div"), n.id = t, r.appendChild(n)), jt(n, {
                        position: "absolute",
                        display: "flex",
                        "flex-direction": "row",
                        "flex-wrap": "wrap",
                        left: "".concat(s + Zt.CARDS_X_OFFSET, "px"),
                        top: "".concat(a + Zt.CARDS_Y_OFFSET, "px"),
                        maxWidth: "".concat(l - o - 2 * Zt.CARDS_X_OFFSET, "px")
                    }), zt(n, {
                        "bcharts-card": !0,
                        "bcharts-card-main": e,
                        "bcharts-card-first": 0 === c
                    }), n.innerHTML = i
                }
                let u = Wt("#right-".concat(t));
                q(u) || (u = document.createElement("div"), u.id = "right-".concat(t), r.appendChild(u), zt(u, "bcharts-card bcharts-card-move")), jt(u, {
                    position: "absolute",
                    display: "block",
                    right: "".concat(o + Zt.CARDS_X_OFFSET, "px"),
                    top: "".concat(a + Zt.CARDS_Y_OFFSET, "px")
                }), u.innerHTML = n
            })
        }
        let ph = null;

        function fh() {
            return null === ph && (ph = Rp().config.hostingModel === E[E.Application]), ph
        }
        class mh extends Xc {
            constructor(t) {
                super(), this.ap = t, this.presenter = t.presenter, this.panY = t.axis.isCustomDomain, this.snapToSupported = !1, this.panningXAxisAllowed = Q(this.presenter.display, !0, "xAxis", "panning"), this.warmUp = !0, this.preventDefault = !1
            }
            activated() {}
            deactivated() {
                this.cancelLongPress()
            }
            startPan(t) {
                this.startLongPress(this.presenter, this.ap, t), this.lastOffset = t, this.lastPanningExtremes = this.ap.axis.yScale.domain();
                const e = this.ap.presenter;
                e.enableTooltip(!1), e.view.tooltip.hide(), e.view.drawCrosshair({
                    ap: void 0
                })
            }
            onMouseMove(t) {
                if (t.pinchZoom) return void this.presenter.resetActiveTool();
                const {
                    point: e,
                    view: i,
                    offset: n
                } = t;
                if (e && e.axis !== this.ap.axis) return;
                const {
                    x: s,
                    y: r
                } = n, o = s - this.lastOffset.x, a = Math.abs(o), l = this.lastOffset.y, c = r - l, u = Math.abs(c);
                a >= 1 && this.cancelLongPress();
                const h = fh();
                if (Y() && !h && this.warmUp) return (a > 7 || u > 7) && (this.warmUp = !1, this.preventDefault = a > u), !1;
                if (this.preventDefault || !Y() || h) {
                    if (this.panningXAxisAllowed && (i.xAxis.pan(o), i.setPriceAxesDomains()), this.panY && e && e.axis) {
                        u >= 1 && this.cancelLongPress();
                        const t = function(t, e, i, n) {
                            const s = (i - e) / t.viewBox.height,
                                [r, o] = n,
                                a = s * (o - r);
                            return [r + a, o + a]
                        }(e.axis, l, r, this.lastPanningExtremes);
                        this.lastPanningExtremes = t, e.axis.yScale.domain(t)
                    }
                    this.lastOffset = n, i.redraw(), e && e.presenter.view.setCursor(b.Grabbing)
                }
                return h || this.preventDefault
            }
            finished() {
                td(this.presenter)
            }
            onMouseLeave() {
                this.finished()
            }
            onMouseUp() {
                this.finished()
            }
            onMouseDblClick({
                                presenter: t,
                                offset: e
                            }) {
                Y() && yh(t, e)
            }
            performLongPress(t, e, i) {
                t.enableTooltip(!0), t.resetActiveTool(), t.activeTool.startTouchCrosshairMode(t, e, i)
            }
        }

        function gh(t, e) {
            const i = t.axis.pane.presenter;
            i.clearSelection(), go.a.publish(nn.CH_ANNNEEDSCONTEXTMENU, {
                uid: t.id,
                id: t.name,
                offset: {
                    x: e.x,
                    y: e.y
                },
                traits: t.extractTraits(!0),
                extras: t.extractTraits(!1),
                points: t.extractPoints(),
                chart: i.accessor
            })
        }

        function yh(t, e, i) {
            go.a.publish(nn.CH_CHTNEEDSCONTEXTMENU, {
                offset: {
                    x: e.x,
                    y: e.y
                },
                chart: t.accessor,
                originalEvent: i
            })
        }
        class vh {
            constructor(t, e = !1) {
                this.factory = t, this.thirdPoint = e, this.dragged = !1, this.snapToSupported = !0, this.isDrawingAnnotation = !0, this.forceAlignPoints = !1
            }
            onMouseDown(t) {
                const {
                    point: e,
                    button: i
                } = t;
                if (void 0 !== e) return i === S.Left && (void 0 !== this.annotation && !this.dragged && this.thirdPoint ? (this.annotation.points[2].update(e.price, e.time), this.annotation.requestRedraw(), this.finish()) : (this.dragged = !0, e.axis.pane.presenter.clearSelection(), this.annotation = this.factory(e.axis), this.annotation.drawn = !1, this.annotation.points[0].update(e.price, e.time), this.annotation.points[1].update(e.price, e.time), this.annotation.requestRedraw())), !0
            }
            onMouseMove(t) {
                const {
                    point: e,
                    view: i,
                    offset: n
                } = t;
                return i.drawCrosshair({
                    ap: e,
                    offset: n
                }), q(this.annotation) && (this.alignPointsMode = this.forceAlignPoints || t.getModifier(P.Shift), this.dragged ? (this.annotation.points[1].update(e.price, e.time), this.annotation.requestRedraw()) : this.thirdPoint && !this.dragged && (this.annotation.points[2].update(e.price, e.time), this.annotation.requestRedraw())), !0
            }
            finish() {
                ed(this.annotation)
            }
            onMouseUp(t) {
                void 0 !== this.annotation ? (this.dragged = !1, this.thirdPoint || this.finish()) : nd(t)
            }
        }
        class Th extends vh {
            constructor(t, e = !1) {
                super(t, e), this.forceAlignPoints = !0
            }
        }
        class bh {
            constructor(t, e) {
                this.factory = t, this.maxClicks = e, this.clicks = 0, this.snapToSupported = !0, this.isDrawingAnnotation = !0
            }
            onMouseMove(t) {
                const {
                    point: e,
                    view: i,
                    offset: n
                } = t;
                i.drawCrosshair({
                    ap: e,
                    offset: n
                })
            }
            onMouseDown(t) {
                const {
                    point: e
                } = t;
                if (0 === this.clicks) {
                    if (void 0 === e) return nd(t), !1;
                    e.axis.pane.presenter.clearSelection(), this.annotation = this.factory(e.axis)
                }
                this.applyToPoints(e), this.clicks++, this.clicks === this.maxClicks && void 0 !== this.annotation ? (this.annotation.drawn = !1, this.annotation.requestRedraw(), "function" == typeof this.annotation.updateOtherPoints && this.annotation.updateOtherPoints(), ed(this.annotation)) : this.annotation.requestRedraw()
            }
            applyToPoints(t) {
                this.annotation.points[this.clicks].update(t.price, t.time)
            }
        }
        class Sh extends bh {
            constructor(t) {
                super(t, 1)
            }
            applyToPoints(t) {
                this.annotation.points[0].update(t.price, t.time), this.annotation.points[1].update(t.price, t.time)
            }
        }
        class Ph {
            constructor(t, e) {
                setTimeout(() => this.finalize(t, e), 10), this.snapToSupported = !1
            }
            finalize(t, e) {
                const i = t(e);
                e.pane.presenter.clearSelection(), i.drawn = !1, i.requestRedraw(), ed(i)
            }
        }
        class Ah {
            constructor(t, e, i, n, s) {
                this.axis = s, q(t, e) && (this.angle = we(t, e), this.extent = this.getExtent(t, e), this.p1 = i ? this.extendPoint(e, -1) : t, this.p2 = n ? this.extendPoint(t, 1) : e), this.style = null, this.extended = i || n
            }
            extendPoint(t, e) {
                return {
                    x: t.x + e * this.extent * Math.cos(this.angle),
                    y: t.y + e * this.extent * Math.sin(this.angle)
                }
            }
            getExtent(t, e) {
                const i = Math.max(Math.abs(t.x), Math.abs(e.x)),
                    n = Math.max(Math.abs(t.y), Math.abs(e.y));
                return Math.sqrt(i * i + n * n) + Zt.OUT_OF_SCREEN
            }
            hitTest(t) {
                return !!q(this.p1, this.p2) && Ce([this.p1, this.p2], t, Zt.HIT_TEST_TOLERANCE)
            }
            draw(t) {
                q(this.p1, this.p2) && (Ue(t, this.p1, this.p2), this.extended)
            }
        }
        const wh = Zt.MARKER_ARROW_ANGLE * Math.PI / 180 / 2;
        class Ch {
            constructor(t, e) {
                this.p1 = t[0].point, this.p2 = t[1].point, this.vertex = e
            }
            hitTest(t) {
                const {
                    anchor: e,
                    p1: i,
                    p2: n
                } = this.getArrowPoints();
                return Ce([e, i], t, Zt.HIT_TEST_TOLERANCE) || Ce([e, n], t, Zt.HIT_TEST_TOLERANCE)
            }
            draw(t) {
                const {
                    anchor: e,
                    p1: i,
                    p2: n
                } = this.getArrowPoints();
                Ue(t, e, i), Ue(t, e, n)
            }
            getArrowPoints() {
                const t = we(this.p1, this.p2),
                    e = "start" === this.vertex ? 0 : Math.PI,
                    i = t - wh + e,
                    n = t + wh + e,
                    s = "start" === this.vertex ? this.p1 : this.p2;
                return {
                    anchor: s,
                    p1: {
                        x: Zt.MARKER_ARROW_LENGTH * Math.cos(i) + s.x,
                        y: Zt.MARKER_ARROW_LENGTH * Math.sin(i) + s.y
                    },
                    p2: {
                        x: Zt.MARKER_ARROW_LENGTH * Math.cos(n) + s.x,
                        y: Zt.MARKER_ARROW_LENGTH * Math.sin(n) + s.y
                    }
                }
            }
        }
        class xh {
            hitTest() {}
            draw() {}
        }
        class Mh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(2), this.alignPointsSupported = !0
            }
            get extend1() {
                return this.traits[Zt.AT_EXTEND_PT_1]
            }
            get extend2() {
                return this.traits[Zt.AT_EXTEND_PT_2]
            }
            get showPercentDiff() {
                return this.traits[Zt.AT_SHOW_PERCENTDIFF]
            }
            getElements() {
                const t = this.points[0].point,
                    e = this.points[1].point,
                    i = new Ah(t, e, this.extend1, this.extend2, this.axis),
                    n = [];
                return this.extend1 && n.push(new Ah(i.p1, t, !0, !1, this.axis)), n.push(new Ah(t, e, !1, !1, this.axis)), this.extend2 && n.push(new Ah(e, i.p2, !1, !0, this.axis)), n
            }
            getBarCount(t, e) {
                if (void 0 === this.countCache || this.countCache.time1 !== t || this.countCache.time2 !== e) {
                    const i = this.axis.pane.presenter.view,
                        n = (Math.abs(i.toIndex(t) - i.toIndex(e)) + 1).toFixed(0);
                    this.countCache = {
                        time1: t,
                        time2: e,
                        barCount: n
                    }
                }
                return this.countCache.barCount
            }
            formatPercDiff(t, e) {
                const i = (e - t) / t * 100;
                return " (".concat(i > 0 ? "+" : "").concat(X(i, 2), "%)")
            }
            adornElements(t, e) {
                if (!this.showBarCount && !this.showPrices) return;
                const [i, n] = this.points, s = Re(e, 1), r = function(t, e) {
                    return -(t.y - e.y) / (t.x - e.x)
                }(i.point, n.point);
                let o = this.getAdornOffset(e);
                if (r < 0 && (o.y = s + 5), this.showBarCount) {
                    const t = Ae(be(i.point, n.point), o);
                    He(e, this.getBarCount(i.time, n.time).toString(), t, T.Right)
                }
                if (this.showPrices) {
                    He(e, Hu(this.axis, i.price), Ae(i.point, o), T.Right);
                    const t = this.showPercentDiff ? this.formatPercDiff(i.price, n.price) : "";
                    He(e, "".concat(Hu(this.axis, n.price)).concat(t), Ae(n.point, o), T.Right)
                }
            }
            getMarkers() {
                const t = this.marker;
                if (!t || "none" === t.vertex) return [];
                const {
                    vertex: e,
                    kind: i
                } = t;
                return ("both" === e ? ["start", "end"] : [e]).map(t => "arrow" === i ? new Ch(this.points, t) : (console.warn("There is no markers of ".concat(i, " kind")), new xh))
            }
        }
        class Eh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(1)
            }
            getElements() {
                return [new Qc(this.points[0].point, !0, this.axis)]
            }
            getTimeScaleAdornments() {
                return this.showTimestamps ? [{
                    time: this.points[0].time,
                    color: this.traits.line.color
                }] : super.getTimeScaleAdornments()
            }
        }
        class Oh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(1)
            }
            getElements() {
                return [new Qc(this.points[0].point, !1, this.axis)]
            }
            getPriceScaleAdornments() {
                return this.showPrices ? [{
                    price: this.points[0].price,
                    color: this.traits.line.color
                }] : super.getPriceScaleAdornments()
            }
        }
        class Dh extends nu {
            constructor(t, e, i) {
                super(t, e), this.addPoints(2), q(i) && q(i.points) && i.points.forEach((t, e) => this.points[e].update(t.price, t.time))
            }
            allPoints() {
                const [t, e] = this.points;
                return q(t, t.point, e, e.point) ? [t, this.axis.toAnnotationPoint(be(t.point, e.point)), e] : Zt.EMPTY_ARRAY
            }
            fiftyPercTraits() {
                return this.traits[Zt.AT_LINE_2]
            }
            getElements() {
                const t = this.allPoints();
                return t === Zt.EMPTY_ARRAY ? Zt.EMPTY_ARRAY : t.map(t => new Ah({
                    x: -Zt.OUT_OF_SCREEN,
                    y: t.point.y
                }, {
                    x: Zt.OUT_OF_SCREEN,
                    y: t.point.y
                }, !1, !1, this.axis))
            }
            getStyleForElement(t, e) {
                const i = this.fiftyPercTraits();
                if (1 !== e || !q(i)) return super.getStyleForElement(t, e);
                let n = J(this.traits);
                return n.line = i, Je(n)
            }
            getPriceScaleAdornments() {
                const t = this.allPoints();
                if (!this.showPrices || t === Zt.EMPTY_ARRAY) return super.getPriceScaleAdornments();
                const e = this.traits.line,
                    i = t.map(t => ({
                        price: t.price,
                        color: e.color
                    })),
                    n = this.fiftyPercTraits();
                return q(n) && (i[1].color = n.color), i
            }
        }
        class Lh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(2)
            }
            get showTrendLine() {
                return this.traits[Zt.AT_SHOW_TRENDLINE]
            }
            get factors() {
                return this.traits[Zt.AT_FACTORS].filter(t => t.shown).map(t => t.value)
            }
            get pricesOnScale() {
                return this.traits[Zt.AT_PRICES_ON_SCALE]
            }
            getElements() {
                let t = [],
                    e = this.points[0].point,
                    i = this.points[1].point;
                if (!q(e, i)) return t;
                i.x < e.x && ([e, i] = [i, e]);
                const n = i.y,
                    s = e.y - i.y;
                let r = Number.MAX_SAFE_INTEGER,
                    o = Number.MIN_SAFE_INTEGER;
                if (this.factors.forEach(e => {
                    const a = n + s * e;
                    a < r && (r = a), a > o && (o = a), t.push(new Ah({
                        x: i.x,
                        y: a
                    }, {
                        x: i.x + 1,
                        y: a
                    }, !1, !0, this.axis))
                }), this.showTrendLine) {
                    const n = e.y < i.y;
                    t.unshift(new Ah({
                        x: e.x,
                        y: n ? r : o
                    }, {
                        x: i.x,
                        y: n ? o : r
                    }, !1, !1, this.axis))
                }
                return t
            }
            adornElements(t, e) {
                let i = this.showTrendLine ? 1 : 0;
                this.factors.forEach(n => {
                    const s = t[i++].p1;
                    let r = s.y - 2;
                    const o = "".concat((100 * n).toFixed(1), "%");
                    if (He(e, o, {
                        x: s.x + 3,
                        y: r
                    }), this.showPrices && !this.pricesOnScale) {
                        const t = e.measureText(o).width;
                        He(e, Hu(this.axis, this.axis.toPrice(s.y)), {
                            x: s.x + t + 6,
                            y: r
                        })
                    }
                })
            }
            getPriceScaleAdornments() {
                if (!this.showPrices || !this.pricesOnScale) return super.getPriceScaleAdornments();
                let t = this.showTrendLine ? 1 : 0;
                const e = this.getElements();
                if (0 === e.length) return super.getPriceScaleAdornments();
                const i = this.traits.line.color;
                return this.factors.map(n => {
                    const s = e[t++].p1;
                    return {
                        price: this.axis.toPrice(s.y),
                        color: i
                    }
                })
            }
        }
        class _h extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(2)
            }
            getElements() {
                var t = [],
                    e = this.points[0].point,
                    i = this.points[1].point;
                t.push(new Ah(e, i, !1, !1, this.axis));
                var n = i.y - e.y;
                return this.factors.forEach(s => {
                    var r = e.y + s * n;
                    t.push(new Ah({
                        x: e.x,
                        y: e.y
                    }, {
                        x: i.x,
                        y: r
                    }, !1, !0, this.axis))
                }), t
            }
        }
        class Ih extends _h {
            constructor(t, e) {
                super(t, e), this.factors = [.382, .5, .618]
            }
        }
        class Nh {
            constructor(t, e, i) {
                this.center = t, this.rim = e, this.axis = i, this.radius = Se(t, e), this.left = {
                    x: this.center.x - this.radius,
                    y: this.center.y
                }, this.right = {
                    x: this.center.x + this.radius,
                    y: this.center.y
                }
            }
            hitTest(t) {
                let e = 999;
                if (this.center.y < this.rim.y && t.y <= this.center.y || this.center.y > this.rim.y && t.y >= this.center.y) e = Math.min(Se(this.left, t), Se(this.right, t));
                else {
                    const i = Pe(t, this.center);
                    e = Math.abs(Math.sqrt(i.x * i.x + i.y * i.y) - this.radius)
                }
                return e <= Zt.HIT_TEST_TOLERANCE
            }
            draw(t) {
                Fe(t, this.center, this.radius, 0, Math.PI, this.rim.y <= this.center.y)
            }
        }
        class Rh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(2)
            }
            getElements() {
                var t = [];
                if (!q(this.points[0].point, this.points[1].point)) return t;
                var e = this.points[0].point,
                    i = this.points[1].point;
                t.push(new Ah(e, i, !1, !1, this.axis));
                var n = Se(e, i),
                    s = Pe(i, e),
                    r = s.y / n,
                    o = s.x / n;
                return this.factors.forEach(s => {
                    var a = n * s,
                        l = r * a,
                        c = o * a,
                        u = {
                            x: i.x - c,
                            y: i.y - l
                        };
                    t.push(new Nh(e, u, this.axis))
                }), t
            }
        }
        class Hh extends Rh {
            constructor(t, e) {
                super(t, e), this.factors = [.382, .5, .618]
            }
        }
        class kh extends nu {
            constructor(t, e) {
                super(t, e), this.factors = [8, 4, 3, 2], this.addPoints(2)
            }
            getElements() {
                var t = [],
                    e = this.points[0].point,
                    i = this.points[1].point,
                    {
                        x: n,
                        y: s
                    } = Pe(i, e);
                return this.factors.forEach(s => {
                    t.push(new Ah(e, {
                        x: e.x + n / s,
                        y: i.y
                    }, !1, !0, this.axis))
                }), t.push(new Ah(e, i, !1, !0, this.axis)), this.factors.slice().reverse().forEach(n => {
                    t.push(new Ah(e, {
                        x: i.x,
                        y: e.y + s / n
                    }, !1, !0, this.axis))
                }), t
            }
        }
        class Fh extends _h {
            constructor(t, e) {
                super(t, e), this.factors = [1 / 3, 2 / 3]
            }
        }
        class Uh extends Rh {
            constructor(t, e) {
                super(t, e), this.factors = [1 / 3, 2 / 3]
            }
        }
        class Vh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(3)
            }
            getElements() {
                const t = this.points[0].point,
                    e = this.points[1].point,
                    i = this.points[2].point,
                    n = (e.x + i.x) / 2 - t.x,
                    s = (e.y + i.y) / 2 - t.y,
                    r = [];
                return r.push(new Ah(e, {
                    x: e.x + n,
                    y: e.y + s
                }, !1, !0, this.axis)), r.push(new Ah(t, {
                    x: t.x + n,
                    y: t.y + s
                }, !1, !0, this.axis)), r.push(new Ah(i, {
                    x: i.x + n,
                    y: i.y + s
                }, !1, !0, this.axis)), r.push(new Ah(e, i, !1, !1, this.axis)), r
            }
        }
        class Bh extends au {
            constructor(t, e) {
                super(t, e)
            }
            hitTest(t) {
                return !!this.visible && this.getRect().contains(t)
            }
            draw(t, e) {
                if (!super.draw(t, e)) return !1;
                ke(t, this.getRect())
            }
        }
        class Wh extends au {
            constructor(t, e) {
                super(t, e)
            }
            getEllipse() {
                var t = this.getRect();
                return new Ne(t.centerX, t.centerY, t.width / 2, t.height / 2)
            }
            hitTest(t) {
                return !!this.visible && this.getEllipse().contains(t)
            }
            draw(t, e) {
                if (!super.draw(t, e)) return !1;
                var i, n;
                i = t, n = this.getEllipse(), i.beginPath(), i.ellipse(n.cx, n.cy, n.radiusX, n.radiusY, 0, 0, 2 * Math.PI), i.stroke(), i.fill()
            }
        }
        class jh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(3)
            }
            getLastPoint() {
                var t = Se(this.points[0].point, this.points[1].point),
                    e = we(this.points[0].point, this.points[1].point);
                return {
                    x: this.points[2].point.x + t * Math.cos(e),
                    y: this.points[2].point.y + t * Math.sin(e)
                }
            }
            getElements() {
                var t = [];
                if (t.push(new Ah(this.points[0].point, this.points[1].point, !1, !1, this.axis)), q(this.points[2].price)) {
                    var e = this.getLastPoint();
                    t.push(new Ah(this.points[2].point, e, !1, !1, this.axis))
                }
                return t
            }
        }
        class Gh extends au {
            constructor(t, e, i) {
                super(t, e), this.kind = i, this.adjustFill = !0
            }
            hitTest(t) {
                return !!this.visible && this.getRect().contains(t)
            }
            get dimension() {
                const t = "fish_hook" === this.kind ? 2 : 1;
                return Zt.DEFAULT_SYMBOL_WIDTH_HEIGHT * t
            }
            updateOtherPoints() {
                this.points[1].price || this.setBottomRight()
            }
            setBottomRight() {
                const t = this.dimension;
                let e = this.points[0].point;
                if (q(e)) {
                    const i = Ae(e, {
                        x: t,
                        y: t
                    });
                    this.points[1].updateFromPoint(i)
                }
            }
            draw(t, e) {
                if (!super.draw(t, e)) return !1;
                const i = this.getRect();
                return 0 === i.width && (i.width = this.dimension), We(t, this.kind, i), !0
            }
        }
        class zh extends nu {
            constructor(t, e) {
                super(t, e), this.addPoints(1), this.helper = new $c(t)
            }
            recalculatePoints() {
                const t = this.axis.pane.presenter.mainPlot.timeSeries.container.getTimeData(),
                    {
                        price: e,
                        time: i
                    } = this.points[0],
                    n = j(t, i);
                this.elements = [], -1 !== n && (this.elements = Zt.PARTIAL_FIBONACCI_SEQUENCE.filter(e => n + e < t.length).map(i => (this.helper.update(e, t[n + i]), new Qc(this.helper.point, !0, this.axis))))
            }
            getElements() {
                return this.recalculatePoints(), this.elements
            }
            adornElements(t, e) {
                const i = Zt.PARTIAL_FIBONACCI_SEQUENCE;
                for (var n = 3; n < t.length; n++) {
                    let s = t[n];
                    He(e, i[n].toString(), Ae(s.anchor, {
                        x: 3,
                        y: -2
                    }))
                }
            }
            getTimeScaleAdornments() {
                return [{
                    time: this.points[0].time,
                    color: this.traits.line.color
                }]
            }
        }
        class Yh {
            constructor(t) {
                this.snapToSupported = !0, this.isDrawingAnnotation = !0
            }
            onMouseMove(t) {
                const {
                    point: e,
                    view: i,
                    offset: n
                } = t;
                i.drawCrosshair({
                    ap: e,
                    offset: n
                })
            }
            onMouseDown(t) {
                const {
                    point: e
                } = t, i = e.axis.pane.presenter;
                go.a.publish(nn.CH_ANNPOINTPICKED, {
                    chart: i.accessor,
                    axis: e.axis,
                    point: {
                        time: e.time.getTime(),
                        price: e.price
                    }
                }), td(i, null)
            }
        }
        class $h {
            constructor(t, e, i, n) {
                this.axis = n, this.rect = new Ie(t.x, t.y, e, i), this.style = null
            }
            hitTest(t) {
                return this.rect.contains(t)
            }
            draw(t, e) {
                ke(t, this.rect)
            }
        }
        const qh = "Open",
            Xh = "Closed";
        class Kh extends nu {
            constructor(t, e, i) {
                super(t, e), this.addPoints(4), this.isLong = i;
                const n = (t, e) => this.points[t].moveDirection = e;
                n(1, A.Vertical), n(2, A.Vertical), n(3, A.Horizontal), this.twoDecMeta = new ce(2)
            }
            data(t) {
                return this.presenter.mainPlot.timeSeries.container.getData(t)
            }
            get presenter() {
                return this.axis.pane.presenter
            }
            getDataWindow(t, e, i = !0, n = !0) {
                const s = this.data(en.DateTime),
                    r = j(s, +t, Number),
                    o = j(s, +e, Number),
                    a = {
                        refIndex: -1,
                        highestIndex: -1,
                        lowestIndex: -1,
                        highest: null,
                        lowest: null,
                        data: []
                    },
                    [l, c, u] = [en.High, en.Low, en.Close].map(t => this.data(t)),
                    h = t => t - r;
                for (let t = r; t <= o; t++) i && -1 === a.refIndex && q(this.entryPrice) && this.entryPrice >= c[t] && this.entryPrice <= l[t] && (a.refIndex = h(t)), (!i || a.refIndex >= 0 && h(t) >= a.refIndex) && ((!q(a.highest) || l[t] > a.highest) && (a.highest = l[t]), (!q(a.lowest) || c[t] < a.lowest) && (a.lowest = c[t])), i && -1 !== a.refIndex && (-1 === a.highestIndex && l[t] > this.upperPrice && (a.highestIndex = h(t)), -1 === a.lowestIndex && c[t] < this.lowerPrice && (a.lowestIndex = h(t))), n && a.data.push({
                    high: l[t],
                    low: c[t],
                    close: u[t],
                    time: s[t]
                });
                if (n) {
                    a.state = q(a.highest, a.lowest) && (this.upperPrice < a.highest || this.lowerPrice > a.lowest) ? Xh : qh, a.special = -1 === a.highestIndex && -1 === a.lowestIndex || a.highestIndex === a.lowestIndex;
                    const t = V(a.data);
                    if (a.toPrice = t.close, a.toTime = t.time, a.state === Xh)
                        if (a.special) {
                            if (-1 !== a.refIndex) {
                                const t = a.data[a.refIndex];
                                a.toTime = t.time, a.toPrice = (this.isLong ? this.lowerPrice < a.lowest : this.upperPrice < a.highest) ? this.upperPrice : this.lowerPrice
                            }
                        } else {
                            const t = -1 !== a.highestIndex && -1 !== a.lowestIndex;
                            t && a.highestIndex < a.lowestIndex || -1 === a.lowestIndex ? (a.toPrice = this.upperPrice, a.toTime = a.data[a.highestIndex].time) : (t && a.lowestIndex < a.highestIndex || -1 === a.highestIndex) && (a.toPrice = this.lowerPrice, a.toTime = a.data[a.lowestIndex].time)
                        } a.pAndL = X(this.isLong ? a.toPrice - this.entryPrice : this.entryPrice - a.toPrice, 2)
                }
                return a
            }
            get dataWindow() {
                return q(this._dataWindow) || (this._dataWindow = this.getDataWindow(this.entryAnchor.time, this.exitAnchor.time)), this._dataWindow
            }
            getVisiblePriceRange() {
                const t = this.axis.yScale.domain();
                return t[1] - t[0]
            }
            getFutureTimestamp() {
                const t = this.data(en.DateTime),
                    e = j(t, +this.points[0].time, Number);
                return t[Math.min(t.length - 1, e + 50)].getTime()
            }
            get entryPrice() {
                return this.entryAnchor.price
            }
            get entryAnchor() {
                return this.points[0]
            }
            get upperPrice() {
                return this.upperAnchor.price
            }
            get upperAnchor() {
                return this.points[1]
            }
            get lowerPrice() {
                return this.lowerAnchor.price
            }
            get lowerAnchor() {
                return this.points[2]
            }
            get exitAnchor() {
                return this.points[3]
            }
            get accountSize() {
                return this.traits[Zt.AT_ACCOUNT_SIZE]
            }
            get risk() {
                const t = this.traits[Zt.AT_RISK_IS_PERCENT],
                    e = this.traits[Zt.AT_RISK];
                return X(t ? e / 100 * this.accountSize : e, 2)
            }
            get pointValue() {
                return this._metaData || (this._metaData = this.presenter.mainPlot.metaData), this._metaData.pointValue
            }
            formatDollarValue(t) {
                return "".concat(t < 0 ? "-" : "", "$").concat(this.twoDecMeta.format(Math.abs(t)))
            }
            get qty() {
                return Math.floor(this.risk / (this.isLong ? this.entryPrice - this.lowerPrice : this.upperPrice - this.entryPrice))
            }
            get upperDiff() {
                return X(this.upperPrice - this.entryPrice, 2)
            }
            get amountMultiplier() {
                return this.isLong ? 1 : -1
            }
            get upperAmount() {
                return X(this.accountSize + this.amountMultiplier * this.qty * this.upperDiff, 2)
            }
            get upperPandL() {
                return X(this.amountMultiplier * this.upperDiff * this.pointValue, 2)
            }
            get isCompact() {
                return this.traits[Zt.AT_COMPACT]
            }
            get upper() {
                const t = Hu(this.axis, this.upperPrice),
                    e = "(".concat(X(this.upperDiff / this.entryPrice * 100, 2).toFixed(2), "%)");
                return this.isCompact, "".concat(t, " ").concat(e)
            }
            get upperText() {
                const t = "".concat(this.formatDollarValue(this.upperPandL));
                return this.isCompact ? "".concat(this.upper, " ").concat(t) : "".concat(this.isLong ? "Target" : "Stop", ": ").concat(this.upper, ", P&L: ").concat(t)
            }
            get lowerDiff() {
                return X(this.entryPrice - this.lowerPrice, 2)
            }
            get lowerAmount() {
                return X(this.accountSize - this.amountMultiplier * this.qty * this.lowerDiff, 2)
            }
            get lowerPandL() {
                return X(-this.amountMultiplier * this.lowerDiff * this.pointValue, 2)
            }
            get lower() {
                const t = Hu(this.axis, this.lowerPrice),
                    e = "(".concat(X(this.lowerDiff / this.entryPrice * 100, 2).toFixed(2), "%)");
                return this.isCompact, "".concat(t, " ").concat(e)
            }
            get lowerText() {
                const t = "".concat(this.formatDollarValue(this.lowerPandL));
                return this.isCompact ? "".concat(this.lower, " ").concat(t) : "".concat(this.isLong ? "Stop" : "Target", ": ").concat(this.lower, ", P&L: ").concat(t)
            }
            get riskReward() {
                return X(this.isLong ? this.upperDiff / this.lowerDiff : this.lowerDiff / this.upperDiff, 2)
            }
            get state() {
                return this.dataWindow.state
            }
            get pAndL() {
                return this.dataWindow.pAndL
            }
            get pAndLValue() {
                return this.pAndL * this.pointValue
            }
            positionPoints() {
                const t = this.getVisiblePriceRange() / 5,
                    e = this.getFutureTimestamp();
                this.upperAnchor.update(this.entryPrice + t, this.entryAnchor.time), this.lowerAnchor.update(this.entryPrice - t, this.entryAnchor.time), this.exitAnchor.update(this.entryPrice, e)
            }
            fillOnlyStyle(t) {
                return Je({
                    line: {
                        color: Zt.COLOR_TRANSPARENT,
                        dashStyle: "Solid"
                    },
                    fill: this.traits[t]
                })
            }
            get lowerStyle() {
                return this.fillOnlyStyle(Zt.AT_FILL2)
            }
            get upperStyle() {
                return this.fillOnlyStyle(Zt.AT_FILL)
            }
            get textStyle() {
                return this.fillOnlyStyle(Zt.AT_FILL_TEXT)
            }
            get secondaryLineStyle() {
                return Je({
                    line: {
                        color: this.traits.line.color,
                        dashStyle: "ShortDash"
                    },
                    fill: {
                        color: Zt.COLOR_TRANSPARENT
                    }
                })
            }
            wasModifiedByTool() {
                q(this.points[2].price) || this.positionPoints(), this._dataWindow = null
            }
            wasPointMovedByTool(t, e) {
                const {
                    x: i,
                    y: n
                } = e;
                if (t === this.entryAnchor) {
                    const t = {
                            x: 0,
                            y: n
                        },
                        e = t => e => e.updateFromPoint(Ae(e.point, t));
                    this.points.slice(1).forEach(e(t));
                    const s = {
                        x: i,
                        y: 0
                    };
                    this.points.slice(1, 3).forEach(e(s))
                }
                this.wasModifiedByTool()
            }
            get isUpperPerPAndL() {
                const t = this.dataWindow;
                return this.isLong ? t.pAndL > 0 : t.pAndL <= 0
            }
            getStyleForElement(t, e) {
                return t.style || this.defaultStyle
            }
            getElements() {
                const t = new Ah(this.entryAnchor.point, this.exitAnchor.point, !1, !1, this.axis),
                    e = this.exitAnchor.point.x - this.entryAnchor.point.x,
                    i = new $h(this.upperAnchor.point, e, Math.abs(this.upperAnchor.point.y - this.entryAnchor.point.y), this.axis);
                i.style = this.upperStyle;
                const n = new $h(this.entryAnchor.point, e, Math.abs(this.entryAnchor.point.y - this.lowerAnchor.point.y), this.axis);
                n.style = this.lowerStyle;
                const s = [t, i, n],
                    r = this.dataWindow;
                if (-1 !== r.refIndex) {
                    const t = r.data[r.refIndex],
                        e = new $c(this.axis, this.entryPrice, t.time.getTime()),
                        i = new $c(this.axis, r.toPrice, r.toTime.getTime()),
                        n = new Ah(e.point, i.point, !1, !1, this.axis);
                    if (n.style = this.secondaryLineStyle, s.push(n), e.time !== i.time) {
                        const e = this.isUpperPerPAndL,
                            i = new $c(this.axis, e ? r.toPrice : this.entryPrice, t.time.getTime()),
                            n = new $c(this.axis, e ? this.entryPrice : r.toPrice, r.toTime.getTime()),
                            o = new $h(i.point, n.point.x - i.point.x, Math.abs(n.point.y - i.point.y), this.axis);
                        o.style = e ? this.upperStyle : this.lowerStyle, s.push(o)
                    }
                }
                return s
            }
            hitTest(t) {
                if (!this.visible) return !1;
                const e = this.isHit || !1;
                return this.isHit = super.hitTest(t), this.isHit !== e && this.requestRedraw(), this.isHit
            }
            get showTextAdornments() {
                return this.isHit || this.isSelected
            }
            getPriceScaleAdornments() {
                const t = t => Me(this.traits[t].color);
                return [{
                    price: this.upperPrice,
                    color: t(Zt.AT_FILL)
                }, {
                    price: this.entryPrice,
                    color: t(Zt.AT_LINE)
                }, {
                    price: this.lowerPrice,
                    color: t(Zt.AT_FILL2)
                }]
            }
            adornElements(t, e) {
                const [i, n, s] = t;
                if (this.showTextAdornments) {
                    const [t, r] = [!0, !1].map(t => this.getAdornOffset(e, t).y), {
                        x: o,
                        y: a,
                        width: l
                    } = n.rect, c = {
                        x: o + l / 2,
                        y: a + t
                    }, u = this.textStyle.fillStyle;
                    He(e, this.upperText, c, T.Center, u, Me(this.upperStyle.fillStyle));
                    const {
                        x: h,
                        y: d,
                        width: p,
                        height: f
                    } = s.rect, m = {
                        x: h + p / 2,
                        y: d + f + Math.abs(r)
                    };
                    He(e, this.lowerText, m, T.Center, u, Me(this.lowerStyle.fillStyle));
                    const {
                        p1: {
                            x: g
                        },
                        p2: {
                            x: y
                        },
                        p1: {
                            y: v
                        }
                    } = i, b = this.isCompact ? "".concat(this.formatDollarValue(this.pAndLValue)) : "".concat(this.state, " P&L: ").concat(this.formatDollarValue(this.pAndLValue)), S = this.isCompact ? "".concat(this.riskReward.toFixed(2)) : "Risk/Reward Ratio: ".concat(this.riskReward.toFixed(2)), P = {
                        x: g + (y - g) / 2,
                        y: v + t + 5
                    }, A = Me(this.isUpperPerPAndL ? this.upperStyle.fillStyle : this.lowerStyle.fillStyle);
                    He(e, [b, S], P, T.Center, u, A)
                }
            }
            updatePoints(t) {
                super.updatePoints(t), this.wasModifiedByTool()
            }
        }
        const Zh = new class {
                constructor() {
                    this.resizingPanes = !1, this.stopResizingScale(), this.snapToSupported = !1, this.touchCrosshairMode = !1, this.previousTouchTimestamp = null, this.notifyZoomChanged = function(t, e) {
                        let i = null;
                        return function() {
                            const n = this,
                                s = arguments;
                            clearTimeout(i), i = setTimeout((function() {
                                t.apply(n, s)
                            }), e)
                        }
                    }(t => {
                        go.a.publish(nn.CH_ZOOMCHANGED, t.accessor)
                    }, Zt.ZOOM_DEBOUNCE_DELAY)
                }
                startTouchCrosshairMode(t, e, i) {
                    this.touchCrosshairMode = !0, this.showCrosshairAndTooltips(t.view, e, i)
                }
                activated() {}
                deactivated() {}
                findHit(t) {
                    if (!t.point) return [];
                    const e = t.presenter.selectedAnnotation;
                    let i;
                    void 0 !== e && (i = e.points.find(e => e.hitTest(t.point)));
                    let n = V(t.axis.annotations.filter(e => e.hitTest(t.point)));
                    return void 0 !== i && null == n && (n = e), [n, i]
                }
                stopResizingScale() {
                    this.resizingScale = !1, this.resizingScaleId = null, this.lastScaleResizingOffset = null, this.lastScaleResizingExtremes = null
                }
                onMouseDblClick({
                                    priceAxis: t,
                                    offset: e,
                                    ap: i,
                                    presenter: n,
                                    view: s
                                }) {
                    const r = s.xAxis.viewBox.contains(e);
                    if (q(t)) this.stopResizingScale(), t.isCustomDomain = !1, t.setDomain(), s.redraw();
                    else if (r) s.xAxis.resetZoom(), s.setPriceAxesDomains(), s.redraw(), this.notifyZoomChanged(n);
                    else if (Y()) {
                        const t = n.selectedAnnotation;
                        null != t ? gh(t, e) : yh(n, e)
                    }
                }
                onMouseEnter() {
                    this.previousTouchTimestamp = null
                }
                computePreviousTouchStartDuration() {
                    if (!Y()) return null;
                    const t = (new Date).getTime(),
                        e = q(this.previousTouchTimestamp) ? t - this.previousTouchTimestamp : null;
                    return this.previousTouchTimestamp = t, e
                }
                onMouseDown(t) {
                    const {
                        point: e,
                        button: i,
                        splitter: n,
                        offset: s,
                        priceAxis: r,
                        presenter: o,
                        originalEvent: a
                    } = t, l = i === S.Right || /^Mac/.test(window.navigator.platform) && i === S.Left && t.getModifier(P.Control);
                    this.touchCrosshairMode && q(this.touchCrosshairTimeout) && (clearTimeout(this.touchCrosshairTimeout), this.touchCrosshairTimeout = null);
                    const c = this.computePreviousTouchStartDuration();
                    if (q(c) && c < Zt.DOUBLE_CLICK_DURATION_MILLIS) return this.onMouseDblClick(t), !0;
                    if (q(n)) return this.resizingPanes = !0, this.lastResizingOffset = s, this.splitter = n, o.enableTooltip(!1), !0;
                    if (q(r)) {
                        return Z(o.display.chart.zooming)[0] && this.startAxisScaling(r, s), !0
                    }
                    if (null != e) {
                        const [t, i] = this.findHit(e);
                        if (o.clearSelection(), null == t) return l ? (yh(o, s, a), !0) : !!this.touchCrosshairMode || (o.activeTool = new mh(e), o.activeTool.startPan(s), fh());
                        o.setSelection(t);
                        const n = null != i;
                        return l ? (gh(t, s), Y()) : !(n && !i.movable || !n && !t.canMove(e.point)) && (o.activeTool = n ? new Zc(t, i) : new Kc(t, e, s), Y())
                    }
                    return this.prevZoomingOffset = s, !1
                }
                onContextMenu(t) {
                    return !0
                }
                onMouseMove(t) {
                    const {
                        point: e,
                        splitter: i,
                        priceAxis: n,
                        view: s,
                        offset: r
                    } = t;
                    if (q(t.pinchZoom) && t.pinchZoom && q(t.pinchDistance)) return q(this.prevPinchDistance) && (t.delta = this.prevPinchDistance - t.pinchDistance, this.onWheel(t)), this.prevPinchDistance = t.pinchDistance, Y();
                    if (null != i || this.resizingPanes) s.setCursor(b.ResizeVertical), this.resizingPanes && this.resizePanes(s, r);
                    else if (q(e)) {
                        const [t, i] = this.findHit(e);
                        q(i) ? e.presenter.view.setCursor(b.Crosshair) : q(t) ? t.isSelected ? e.presenter.view.setCursor(b.Move) : e.presenter.view.setCursor(b.Hand) : e.presenter.view.setCursor(b.Arrow)
                    } else if (q(n)) s.setCursor(b.ResizeVertical), this.performAxisScaling(s, n, r);
                    else {
                        if (this.prevZoomingOffset) {
                            const {
                                x: t
                            } = this.prevZoomingOffset, {
                                x: e
                            } = r, i = t - e;
                            this.applyZoom(s.presenter, -i), this.prevZoomingOffset = r
                        }
                        s.setCursor(b.Arrow)
                    }
                    return !e || this.resizingPanes ? (this.hideCrosshairAndTooltips(s), Y()) : (this.showCrosshairAndTooltips(s, e, r), Y())
                }
                showCrosshairAndTooltips(t, e, i) {
                    !e.time || Y() && !this.touchCrosshairMode || (t.drawCrosshair({
                        ap: e,
                        offset: i
                    }), hh(t.presenter, {
                        time: e.time,
                        offset: i
                    }))
                }
                hideCrosshairAndTooltips(t) {
                    t.drawCrosshair({
                        ap: void 0
                    }), t.tooltip.hide(), t.presenter.hideCards()
                }
                onMouseLeave(t) {
                    const {
                        view: e,
                        offset: i
                    } = t;
                    e.presenter.accessor.getPaneBounds().every(t => {
                        return !t.contains(i) || (e = t, (n = i).x === e.x || n.x === e.x + e.width || n.y === e.y || n.y === e.y + e.height);
                        var e, n
                    }) && (this.hideCrosshairAndTooltips(e), this.stopResizeZoom(e.presenter)), e.setCursor(b.Arrow), this.touchCrosshairMode = !1
                }
                stopResizeZoom(t) {
                    this.resizingPanes && (this.resizingPanes = !1, t.enableTooltip(!0), t.onPaneHeightsUpdated()), this.resizingScale && this.stopResizingScale(), this.prevZoomingOffset && delete this.prevZoomingOffset
                }
                onMouseUp({
                              presenter: t
                          }) {
                    if (this.stopResizeZoom(t), Y()) {
                        const e = function() {
                            const t = Rp().config.touchCrosshairTimeoutMillis;
                            return q(t) && Number.isFinite(t) ? t : Zt.LONG_PRESS_TIMEOUT_MILLIS
                        }();
                        this.touchCrosshairTimeout = setTimeout(() => {
                            this.hideCrosshairAndTooltips(t.view), this.touchCrosshairMode = !1
                        }, e)
                    }
                }
                applyZoom(t, e, i = !0) {
                    if (!Z(t.display.chart.zooming)[1]) return;
                    const n = Math.sign(e) * (Y() ? 2 : 10),
                        s = t.view;
                    s.xAxis.zoom(n) && (s.setPriceAxesDomains(), s.redraw(), i && this.notifyZoomChanged(t))
                }
                onWheel({
                            view: t,
                            presenter: e,
                            getModifier: i,
                            delta: n
                        }) {
                    const {
                        scrollBehavior: s
                    } = e.display;
                    return !(!(Y() ? "none" !== s : "wheel" === s || "wheel+shift" === s && i(P.Shift)) || 0 === n) && (t.drawCrosshair({
                        ap: void 0
                    }), t.tooltip.hide(), t.presenter.hideCards(), this.applyZoom(e, n), !0)
                }
                onKeyDown(t) {
                    const {
                        key: e,
                        code: i,
                        presenter: n
                    } = t;
                    if (q(n.selectedAnnotation) && function(t, e) {
                        return "Backspace" === t || "Delete" === t || 8 === e || 46 === e
                    }(e, i)) {
                        const t = n.selectedAnnotation;
                        t.axis.deleteAnnotation(t)
                    }
                    if (q(n.selectedAnnotation) && (! function(t, e) {
                        return "Escape" === t || 27 === e
                    }(e, i) ? function(t, e) {
                        return "F2" === t || 113 === e
                    }(e, i) && n.selectedAnnotation instanceof cu && n.selectedAnnotation.textEditable && (n.activeTool = new hu(null, n.selectedAnnotation), n.activeTool.startEditing()) : n.clearSelection()), $(e, i) || function(t, e) {
                        return "ArrowRight" === t || 39 === e
                    }(e, i)) {
                        const t = $(e, i) ? -1 : 1,
                            s = n.view;
                        s.xAxis.xScale.shiftBars(t), s.redraw()
                    }
                }
                resizePanes(t, e) {
                    const i = e.y - this.lastResizingOffset.y;
                    if (0 === i) return;
                    const n = t.presenter.panes,
                        s = Zt.MINIMUM_PANE_HEIGHT,
                        r = t => Math.round(1e3 * t) / 1e3,
                        o = this.splitter.map(t => n[t]),
                        a = o.map(t => t.getBounds().height).map((t, e) => 0 === e ? t + i : t - i);
                    if (a.some(t => t < s)) return;
                    const l = o.map(t => t.height).reduce((t, e) => t + e),
                        c = a.reduce((t, e) => t / e),
                        u = r(l / (c + 1));
                    o.forEach((t, e) => {
                        t.height = 0 === e ? r(c * u) : u
                    }), this.lastResizingOffset = e, t.recalculateLayout(), t.redraw()
                }
                startAxisScaling(t, e) {
                    this.resizingScale = !0, this.resizingScaleId = t.id, this.lastScaleResizingOffset = e, this.lastScaleResizingExtremes = t.yScale.domain()
                }
                performAxisScaling(t, e, i) {
                    if (this.resizingScale && this.resizingScaleId === e.id) {
                        const n = Y() ? 4 : 5,
                            s = function(t, e, i, n, s = 1, r = 1) {
                                const o = (i.y - e.y) / t.viewBox.height,
                                    [a, l] = n,
                                    c = o * (l - a) / 10;
                                return [a + c * s, l + c * r]
                            }(e, this.lastScaleResizingOffset, i, this.lastScaleResizingExtremes, -n, n);
                        e.isCustomDomain = !0, e.yScale.domain(s), t.redraw()
                    }
                }
            },
            Qh = {
                Default: () => function() {
                    return Zh
                },
                Line: () => id(vh, Mh, !1),
                Ray: () => id(vh, Mh, !1),
                GannLine: () => id(Th, Mh, !1),
                VerticalLine: () => id(bh, Eh, 1),
                HorizontalLine: () => id(bh, Oh, 1),
                LongPosition: () => id(bh, Kh, 1, !0),
                ShortPosition: () => id(bh, Kh, 1, !1),
                FiftyPercentLine: function(t, e) {
                    return q(t) ? id(Ph, Dh, t.axis || e.mainAxis, t) : id(bh, Dh, 2)
                },
                FibonacciRetracement: () => id(vh, Lh, !1),
                FibonacciFan: () => id(vh, Ih, !1),
                FibonacciArcs: () => id(vh, Hh, !1),
                GannFan: () => id(vh, kh, !1),
                SpeedResistanceFan: () => id(vh, Fh, !1),
                SpeedResistanceArcs: () => id(vh, Uh, !1),
                AndrewsPitchfork: () => id(bh, Vh, 3),
                Rectangle: () => id(vh, Bh, !1),
                Ellipse: () => id(vh, Wh, !1),
                TrendChannel: () => id(vh, jh, !0),
                SymbolArrowUp: () => id(bh, Gh, 1, "arrow_up"),
                SymbolArrowDown: () => id(bh, Gh, 1, "arrow_down"),
                SymbolArrowRight: () => id(bh, Gh, 1, "arrow_right"),
                SymbolArrowLeft: () => id(bh, Gh, 1, "arrow_left"),
                SymbolArcDown: () => id(bh, Gh, 1, "arc_down"),
                SymbolArcUp: () => id(bh, Gh, 1, "arc_up"),
                SymbolThumbsUp: () => id(bh, Gh, 1, "thumbs_up"),
                SymbolThumbsDown: () => id(bh, Gh, 1, "thumbs_down"),
                SymbolOne: () => id(bh, Gh, 1, "one"),
                SymbolTwo: () => id(bh, Gh, 1, "two"),
                SymbolThree: () => id(bh, Gh, 1, "three"),
                SymbolFour: () => id(bh, Gh, 1, "four"),
                SymbolFive: () => id(bh, Gh, 1, "five"),
                SymbolQuestion: () => id(bh, Gh, 1, "question"),
                SymbolFishHook: () => id(bh, Gh, 1, "fish_hook"),
                FibonacciTimeZones: () => id(bh, zh, 1),
                Text: () => id(hu, cu, null),
                PickPoint: () => function() {
                    return new Yh
                },
                ComputedText: function(t) {
                    return id(Sh, uu, null, t)
                }
            };
        var Jh = function(t, e = !1, i = null, n = null, s = null) {
            let r = Qh[t];
            return r = r(n, s), r(t, e, i)
        };

        function td(t, e = null) {
            t.enableTooltip(!0), t.resetActiveTool(), q(e) && t.onAnnotationsUpdated(e)
        }

        function ed(t, e = !0) {
            t.wasModifiedByTool();
            const i = t.axis;
            td(i.pane.presenter, e ? i : null)
        }

        function id(t, e, i, n) {
            return function(s, r, o) {
                const a = function(t, e, i, n) {
                    return function(s, r = !0) {
                        const o = new e(s, t, i);
                        return r ? s.addAnnotation(o) : o.drawn = !1, q(n) && (o.traits = n), o
                    }
                }(s, e, n, o);
                return r ? a : new t(a, i)
            }
        }

        function nd(t) {
            t.button === S.Right && td(t.presenter)
        }
        class sd extends Uc {
            get title() {
                return "".concat(this.forward).concat(this.suffix)
            }
            get forward() {
                return this._forward
            }
            fromModel(t) {
                super.fromModel(t), this.offset = t.offset, this._forward = t.forward
            }
            async parseForward() {
                const {
                    model: t,
                    error: e,
                    clean: i,
                    text: n,
                    symbols: s
                } = $a(this.forward);
                if (e ? (this.errorText = e, this.fwdModel = null) : this.fwdModel = t, this._forward = this.isValid ? i : n, this.isValid) {
                    this.offset > 0 ? (this.suffix = " (".concat(D(bo(this.offset), pr(Zt.FMT_US_DATE_ONLY))(new Date), ")"), this.outField = new Ji("Close_".concat(this.offset), h.Number, p.Forward, "Close (".concat(this.offset, ")")), this.curves[0].fields[0] = this.outField) : (this.suffix = "", this.outField = en.Close);
                    const t = await Promise.all(s.map(t => kt(t)));
                    this.roots = s.reduce((e, i, n) => (e[i] = t[n], e), {})
                } else this.roots = null
            }
            get isValid() {
                return !q(this.errorText)
            }
            getMetaData() {
                if (this.isValid) {
                    const t = Object.values(this.roots).map(t => V(t));
                    this.metaData = new he(t), this.metaData.ready().then(t => {
                        t && go.a.publish(nn.MD_CHANGED, {
                            plot: this
                        })
                    })
                }
            }
            get forwardPolicy() {
                return {
                    mapper: t => t.query.root,
                    recompute: r.Everything,
                    missing: s.UseNext,
                    stretch: t => !1,
                    fieldMap: new Map([
                        [en.Close, this.outField]
                    ])
                }
            }
            getTimeSeries() {
                const t = Rp().getTimeSeriesDataSource(),
                    e = Object.keys(this.roots),
                    i = 0 === this.offset ? v.Forward : v.HistoricalForward,
                    n = e.map(e => {
                        const n = {
                            seriesKind: i,
                            root: e,
                            offset: this.offset,
                            symbols: this.roots[e],
                            getHashKey: () => "".concat(i, "|").concat(e, "|").concat(this.offset)
                        };
                        return t.getTimeSeries(n)
                    });
                this.timeSeries = new nl(this.fwdModel, n, this.forwardPolicy), this.timeSeries.ready().then(t => {
                    t && go.a.publish(nn.TS_MANYCHANGED, {
                        series: this.timeSeries,
                        part: C.Unspecified
                    })
                })
            }
            async initialize() {
                await this.parseForward(), this.isShutDown || (this.getMetaData(), this.getTimeSeries())
            }
        }

        function rd(t) {
            mt(1, arguments);
            var e = gt(t),
                i = e.getFullYear();
            return e.setFullYear(i + 1, 0, 0), e.setHours(23, 59, 59, 999), e
        }
        const od = t => t.substr(0, t.lastIndexOf("::"));
        class ad extends Uc {
            get title() {
                return this.isAverage ? "".concat(this.offsets.length, "Y Average").concat(this.isAnnual ? " (prior)" : "") : "".concat(this.seasonal).concat(this.suffix)
            }
            get seasonal() {
                return this._seasonal
            }
            fromModel(t) {
                super.fromModel(t), this.offset = t.offset, this.offsets = t.offsets, this.isAverage = !q(t.offset), this.isAnnual = !0 === t.isAnnual, this._seasonal = t.seasonal
            }
            constructSeasonal(t, e) {
                return Ka(Qa(t, t => this.applyOffset(t, e)))
            }
            constructAverage(t) {
                const e = this.offsets.map(e => "(".concat(this.constructSeasonal(t, e), ")"));
                return "(".concat(e.join("+"), ")/").concat(this.offsets.length)
            }
            prepareFields() {
                if (0 === this.offset) this.suffix = "", this.outField = en.Close;
                else {
                    const t = this.isPlain ? "".concat(this.yearFromOffset(this.offset)) : "".concat(this.offset, "Y"),
                        e = this.isAverage ? "Avg" : t;
                    this.suffix = " (".concat(e, ")"), this.outField = new Ji("Close_".concat(e), h.Number, p.Seasonal, "Close".concat(this.suffix)), this.curves[0].fields[0] = this.outField
                }
            }
            applyOffset(t, e) {
                return this.isPlain ? "".concat(t, "::").concat(e) : Vt(t, -e)
            }
            createSymbolToOffsetMapping(t) {
                this.symbolToOffset = t.reduce((t, e) => (this.isPlain || (t[e] = null), t), {}), t.forEach(t => {
                    this.offsets.forEach(e => {
                        this.symbolToOffset[this.applyOffset(t, e)] = e
                    })
                })
            }
            async parseSeasonal() {
                let {
                    model: t,
                    error: e,
                    symbols: i
                } = $a(this.seasonal, !0);
                const n = t => (this.errorText = t, this.seaModel = null, null);
                if (e) return n(e);
                this.prepareFields();
                const s = new Map;
                for (const t of i) {
                    const e = await Et(t);
                    s.set(t, e)
                }
                t = Qa(t, t => s.get(t)), i = Array.from(s.values());
                const r = i.every(t => Ot(t)),
                    o = i.every(t => Lt(t)),
                    a = i.every(t => !Ot(t) && !Lt(t));
                if (!r && !o && !a) return n("Mixed types of symbols aren't supported yet");
                this.isPlain = a, this.createSymbolToOffsetMapping(i);
                const l = this.isAverage ? this.constructAverage(t) : this.constructSeasonal(t, this.offset),
                    {
                        model: c,
                        clean: u,
                        symbols: h
                    } = $a(l, !0);
                this.seaModel = c, this._seasonal = u, this.symbols = h
            }
            get isValid() {
                return !q(this.errorText)
            }
            getActualSymbols() {
                return this.isPlain ? [...new Set(this.symbols.map(od))] : J(this.symbols)
            }
            getMetaData() {
                if (this.isValid) {
                    const t = this.getActualSymbols();
                    this.metaData = new he(t), this.metaData.ready().then(t => {
                        t && go.a.publish(nn.MD_CHANGED, {
                            plot: this
                        })
                    })
                }
            }
            get seasonalPolicy() {
                return {
                    mapper: t => t.query.surrogate || t.query.symbol,
                    recompute: r.Everything,
                    missing: s.UsePrevious,
                    stretch: t => this.shouldStretch(t),
                    fieldMap: new Map([
                        [en.Close, this.outField]
                    ])
                }
            }
            shouldStretch(t) {
                return 0 === this.symbolToOffset[t] && (this.isAverage && this.symbols.length > 1 || this.offset > 0)
            }
            shiftYears(t) {
                return wt(new Date, -t)
            }
            yearFromOffset(t) {
                return bt(this.shiftYears(t))
            }
            getCmdtyRange(t) {
                const e = this.shiftYears(t);
                return [Vc(e), rd(e)]
            }
            getTimeSeries() {
                const t = Rp().getTimeSeriesDataSource(),
                    e = Object.keys(this.symbolToOffset).map(e => {
                        const i = this.makeQuery();
                        return i.surrogate = e, i.symbol = this.isPlain ? od(e) : e, i.offset = this.symbolToOffset[e], i.cacheMe = !this.isPlain || 0 === i.offset, this.isPlain && (i.range = this.getCmdtyRange(i.offset), i.offset > 0 && (i.disableStreamingUpdates = !0)), t.getTimeSeries(i)
                    });
                this.timeSeries = new nl(this.seaModel, e, this.seasonalPolicy), this.timeSeries.ready().then(t => {
                    t && go.a.publish(nn.TS_MANYCHANGED, {
                        series: this.timeSeries,
                        part: C.Unspecified
                    })
                })
            }
            async initialize() {
                await this.parseSeasonal(), this.isShutDown || (this.getMetaData(), this.getTimeSeries())
            }
        }
        const ld = ["bottom", "right", "left"],
            cd = {
                bottom: "center",
                right: "start",
                left: "end"
            };
        class ud {
            constructor(t) {
                this.lineWidth = 1, this.arrowWidth = 7, this.arrowLength = 7, this.position = "bottom", this.fontSize = 14, this.fontFamily = "Arial", this.padding = 4, this.strokeColor = "white", this.textColor = "white", this.backgroundColor = "black", t && this.configure(t)
            }
            configure(t) {
                Object.assign(this, t)
            }
            draw(t, e, i, n, s) {
                if (s = s || this.fontSize + this.padding + this.padding, !ld.includes(this.position.toLowerCase())) return void console.error("Can not draw indicator in position [".concat(this.position, "]"));
                t.font = "bold ".concat(this.fontSize, "px ").concat(this.fontFamily), t.textAlign = cd[this.position], t.strokeStyle = this.strokeColor, t.fillStyle = Me(this.backgroundColor), t.lineWidth = this.lineWidth;
                const r = t.measureText(n).width,
                    o = Math.round(r + this.padding + this.padding),
                    a = Math.round(o / 2),
                    l = Math.round(s / 2);
                t.setLineDash([]);
                const c = "bottom" === this.position ? Math.max(a + 1, e) : e;
                t.beginPath(), t.moveTo(c, i), "right" === this.position ? (t.lineTo(c + this.arrowLength, i + l), t.lineTo(c + this.arrowLength + o, i + l), t.lineTo(c + this.arrowLength + o, i - l), t.lineTo(c + this.arrowLength, i - l)) : "left" === this.position ? (t.lineTo(c - this.arrowLength, i + l), t.lineTo(c - this.arrowLength - o, i + l), t.lineTo(c - this.arrowLength - o, i - l), t.lineTo(c - this.arrowLength, i - l)) : "bottom" === this.position && (t.lineTo(c + this.arrowWidth, i + this.arrowLength), t.lineTo(c + a, i + this.arrowLength), t.lineTo(c + a, i + s), t.lineTo(c - a, i + s), t.lineTo(c - a, i + this.arrowLength), t.lineTo(c - this.arrowWidth, i + this.arrowLength)), t.closePath(), t.stroke(), t.fill(), t.fillStyle = this.textColor, t.textBaseline = "middle", "bottom" === this.position ? t.fillText(n, c, i + this.arrowLength + Re(t, 1)) : "right" === this.position ? t.fillText(n, c + this.arrowLength + this.padding, i) : "left" === this.position && t.fillText(n, c - this.arrowLength - this.padding, i)
            }
        }

        function hd(t, e) {
            if (!q(e)) return this[t];
            this[t] = e
        }
        class dd {
            constructor() {
                this._domain = this._range = null
            }
            domain() {
                return hd.call(this, "_domain", arguments[0])
            }
            range() {
                return hd.call(this, "_range", arguments[0])
            }
            get ready() {
                return q(this._domain, this._range)
            }
        }
        class pd extends dd {
            constructor(t) {
                super(), this.scaleType = t, this._priceDomain = null
            }
            priceDomain() {
                return hd.call(this, "_priceDomain", arguments[0])
            }
            yToPrice(t) {
                return this.mapValue(t)
            }
            get ready() {
                return q(this._domain || this._priceDomain, this._range)
            }
            mapValue(t, e = !0) {
                if (!this.ready) return null;
                const i = this._domain || this._priceDomain,
                    n = t => t[1] - t[0],
                    s = n(this._range),
                    r = n(i),
                    o = t => (t - this._range[0]) / s,
                    a = () => Math.log10(i[1] / i[0]);
                switch (this.scaleType) {
                    case g.Linear:
                        return e ? i[1] - r * o(t) : this._range[1] - (t - i[0]) / r * s;
                    case g.Logarithmic:
                        return e ? Math.pow(10, Math.log10(i[1]) - a() * o(t)) : this._range[1] - Math.log10(t / i[0]) / a() * s;
                    default:
                        throw new Error("Unexpected scale type (neither linear nor log)")
                }
            }
            priceToY(t) {
                return this.mapValue(t, !1)
            }
            getTicks(t) {
                if (!this.ready) return [];
                let [e, i] = this._domain;
                return e === i && t > 0 ? [e] : function(t, e, i) {
                    let n, s, r, o, a = -1;
                    if (i = +i, (t = +t) === (e = +e) && i > 0) return [t];
                    (n = e < t) && (s = t, t = e, e = s);
                    if (0 === (o = function(t, e, i) {
                        const n = Math.sqrt(50),
                            s = Math.sqrt(10),
                            r = Math.sqrt(2);
                        var o = (e - t) / Math.max(0, i),
                            a = Math.floor(Math.log(o) / Math.LN10),
                            l = o / Math.pow(10, a);
                        return a >= 0 ? (l >= n ? 10 : l >= s ? 5 : l >= r ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (l >= n ? 10 : l >= s ? 5 : l >= r ? 2 : 1)
                    }(t, e, i)) || !isFinite(o)) return [];
                    if (o > 0)
                        for (t = Math.ceil(t / o), e = Math.floor(e / o), r = new Array(s = Math.ceil(e - t + 1)); ++a < s;) r[a] = (t + a) * o;
                    else
                        for (t = Math.floor(t * o), e = Math.ceil(e * o), r = new Array(s = Math.ceil(t - e + 1)); ++a < s;) r[a] = (t - a) / o;
                    n && r.reverse();
                    return r
                }(e, i, t)
            }
        }
        class fd {
            constructor() {
                this.annotations = [], this.id = Do()(), this.isCustomDomain = !1, this.ticks = null, this.lastUsedOptions = null, this.config = {
                    innerTickSize: 7,
                    tickPadding: 5,
                    indicatorPadding: 4,
                    fontWeight: 400,
                    fontSize: 12
                }, this.crosshairIndicator = new ud({
                    fontSize: this.config.fontSize,
                    arrowLength: this.config.innerTickSize
                })
            }
            makePlot(t) {
                let e = null;
                switch (y[t.type]) {
                    case y.Symbol:
                        e = new jc;
                        break;
                    case y.Expression:
                        e = new qc;
                        break;
                    case y.Study:
                        e = new Yc;
                        break;
                    case y.IncomeStatement:
                        e = new zc(v.IncomeStatement);
                        break;
                    case y.BalanceSheet:
                        e = new zc(v.BalanceSheet);
                        break;
                    case y.Forward:
                        e = new sd;
                        break;
                    case y.Seasonal:
                        e = new ad;
                        break;
                    default:
                        throw new Error("".concat(t.type, " isn't supported yet"))
                }
                return e.axis = this, e.fromModel(t), e
            }
            toPrice(t) {
                return this.yScale.yToPrice(t)
            }
            toTime(t) {
                return this.pane.presenter.view.toTime(t)
            }
            toAnnotationPoint(t) {
                const e = this.toPrice(t.y),
                    i = this.toTime(t.x);
                return new $c(this, e, i)
            }
            toX(t) {
                return this.pane.presenter.view.toX(t)
            }
            toY(t) {
                return this.yScale.priceToY(t)
            }
            snapTo(t) {
                const e = {
                        x: this.toX(t.time),
                        y: this.toY(t.price)
                    },
                    i = this.pane.presenter,
                    n = i.activeTool,
                    s = n.annotation;
                return n.alignPointsMode && s && s.alignPointsSupported && s.points.includes(t) ? this.alignPoints(s, t, e) : n.snapToSupported && i.display.yAxis.snapAnnotationsToPrices && this.snapToPrices(t, e), e
            }
            snapToPrices(t, e) {
                const i = this.plots.find(t => t.main);
                if (i && i.timeSeries && i.timeSeries.hasData) {
                    const n = i.timeSeries.container,
                        s = j(n.getTimeData(), +t.time, Number),
                        r = [].concat(...i.curves.map(t => t.fields)).filter(t => n.hasField(t)).map(t => {
                            const i = n.getData(t)[s],
                                r = this.toY(i);
                            return {
                                priceSnap: i,
                                ySnap: r,
                                dist: Math.abs(r - e.y)
                            }
                        }).filter(t => t.dist <= Zt.SNAP_PROXIMITY_PIXELS).reduce((t, e) => null === t || e.dist < t.dist ? e : t, null);
                    q(r) && (t.price = r.priceSnap, e.y = r.ySnap, t.time = n.getTimeData()[s], e.x = this.toX(t.time))
                }
            }
            alignPoints(t, e, i) {
                const n = t.points.find(t => t !== e);
                if (e !== n && n && n.point) {
                    const t = n.point,
                        s = (360 + 180 * -we(t, i) / Math.PI) % 360,
                        r = 22.5,
                        o = s > 90 - r && s < 90 + r || s > 270 - r && s < 270 + r;
                    if (s > 360 - r || s < r || s > 180 - r && s < 180 + r) i.y = t.y, e.price = this.toPrice(i.y);
                    else if (o) i.x = t.x, e.time = this.toTime(i.x);
                    else {
                        const n = Math.abs(i.x - t.x),
                            s = t.y > i.y ? -1 : 1;
                        i.y = t.y + n * s, e.price = this.toPrice(i.y)
                    }
                }
            }
            toPoint(t) {
                if (q(this.pane.presenter.view)) return this.snapTo(t)
            }
            makeAnnotation(t) {
                let e = Jh(t.id, !0, t.traits)(this, !1),
                    i = e.activePoints,
                    n = t.points.length - i.length;
                return n > 0 && e.addPoints(n), e.activePoints.forEach((e, i) => {
                    let n = t.points[i];
                    K(n.price) && K(n.time) && e.update(n.price, n.time)
                }), e.visible = t.visible, e
            }
            expand(t) {
                let e = [];
                switch (y[t.type]) {
                    case y.Forward: {
                        const i = t.curves,
                            n = t.offsets;
                        delete t.curves, delete t.offsets;
                        for (let s = 0; s < i.length; s++) {
                            let r = Object.assign({}, t);
                            r.curves = [i[s]], r.offset = n[s], e.push(r)
                        }
                        break
                    }
                    case y.Seasonal: {
                        const i = t.curves,
                            n = t.offsets;
                        delete t.curves, delete t.offsets;
                        const s = n.length;
                        for (let r = 0; r < i.length; r++) {
                            let o = Object.assign({}, t);
                            o.curves = [i[r]], o.offsets = n, o.offset = r === s ? null : n[r], (q(o.offset) || s > 1) && e.push(o)
                        }
                        break
                    }
                    case y.Annual: {
                        const i = t.curves;
                        delete t.curves;
                        const n = "{".concat(t.annual, "}"),
                            s = [...Array(5 + 1).keys()];
                        let r = {
                            type: "Seasonal",
                            isAnnual: !0,
                            main: !0,
                            seasonal: n,
                            offsets: s,
                            offset: 0,
                            curves: [i[0]]
                        };
                        e.push(r);
                        let o = {
                            type: "Seasonal",
                            isAnnual: !0,
                            main: !0,
                            seasonal: n,
                            curves: [i[1]],
                            offsets: s.slice(1),
                            offset: null
                        };
                        e.push(o);
                        break
                    }
                    default:
                        e.push(t)
                }
                return e
            }
            fromModel(t) {
                this.comparison = m[t.comparison], this.scale = g[t.scale], this.yScale = new pd(this.scale), this.plots = [].concat(...t.plots.map(t => this.expand(t))).map(t => this.makePlot(t));
                const e = t.annotations || [];
                this.annotations = e.map(t => this.makeAnnotation(t));
                const {
                    chart: {
                        fontFamily: i,
                        backgroundColor: n
                    },
                    yAxis: {
                        textColor: s,
                        crosshair: {
                            color: r
                        }
                    }
                } = this.pane.presenter.display;
                this.crosshairIndicator.configure({
                    position: this.primary ? "right" : "left",
                    fontFamily: i,
                    strokeColor: r,
                    textColor: s,
                    backgroundColor: Oe(.15)(n)
                })
            }
            findIndex(t) {
                return this.annotations.findIndex(e => e.id === t.id)
            }
            addAnnotation(t) {
                -1 === this.findIndex(t) && this.annotations.push(t)
            }
            fireAnnotationsChanged(t = !1) {
                this.pane.presenter.onAnnotationsUpdated(this, t)
            }
            deleteAnnotation(t) {
                t.isSelected && this.pane.presenter.clearSelection();
                const e = this.findIndex(t); - 1 !== e && this.annotations.splice(e, 1), this.fireAnnotationsChanged(!t.isSelected)
            }
            duplicateAnnotation(t) {
                const e = t.axis;
                let i = this.makeAnnotation(t.toModel());
                i.drawPoints(null, !0), i.offset({
                    x: Zt.ANN_DUPLICATE_OFFSET,
                    y: Zt.ANN_DUPLICATE_OFFSET
                }), e.addAnnotation(i), i.requestRedraw(), this.fireAnnotationsChanged()
            }
            updateAnnotation(t, e) {
                t.isSelected && this.pane.presenter.clearSelection(), t.updateFrom(e.traits, e.extras, e.points, e.visible), t.requestRedraw(), this.fireAnnotationsChanged()
            }
            setViewBox(t) {
                this.viewBox = t;
                const {
                    y: e,
                    height: i
                } = this.viewBox;
                this.yScale.range([Math.floor(e), Math.floor(e + i)])
            }
            get fullDomain() {
                return q(this._fullDomain) || (this._fullDomain = this.getDataDomain()), this._fullDomain
            }
            updateFullDomain(t) {
                const e = this.fullDomain;
                this._fullDomain = this.getDataDomain([t, t], e)
            }
            getDataDomain([t, e] = [null, null], i = [null, null]) {
                let [n, s] = i;
                const r = q;
                if (this.plots.forEach(i => {
                    const o = i.timeSeries;
                    if (!o.hasData) return;
                    const a = o.container,
                        l = a.getTimeData(),
                        c = t => j(l, +t, Number),
                        u = q(t) ? c(t) : 0,
                        h = q(e) ? c(e) : l.length - 1,
                        d = this.comparison === m.Percent,
                        p = this.comparison === m.Value;
                    if (d || p) {
                        const t = i.curves[0].fields,
                            e = t.find(t => "Close" === t.id) || t[0],
                            n = a.getData(e)[u],
                            s = t => 100 * (t - n) / n,
                            r = t => t - n;
                        i.priceMapper = d ? s : r
                    } else i.priceMapper = t => t;
                    const f = i.curves.map(t => t.fields).flat().filter(t => t.id !== en.Change.id),
                        g = q(i.targetFields);
                    g && f.push(i.targetFields);
                    const y = {};
                    U(a.fields, f, t => t.id).forEach(t => {
                        const [e, o] = (t => {
                            const e = g ? i.curves[0] : i.curves.find(e => e.fields.includes(t));
                            if (!q(e) || 0 === e.shift) return [u, h];
                            if (!q(y[e.id])) {
                                const t = e.shiftedTimeDomain;
                                if (!q(t)) return [u, h];
                                y[e.id] = [c(t[0]), c(t[1])]
                            }
                            return y[e.id]
                        })(t), [l, d] = G(a.getData(t), e, o, i.priceMapper);
                        ((t, e) => {
                            (r(n, t) && t < n || r(t) && !r(n)) && (n = t), (r(s, e) && e > s || r(e) && !r(s)) && (s = e)
                        })(l, d)
                    }), i.isStudy && "VOL" === i.model.study && (n = 0)
                }), !q(n, s)) return null;
                let o = [Number(n), Number(s)];
                return o[0] === o[1] && (o[0] -= 1, o[1] += 1), o
            }
            setDomain() {
                if (this.isCustomDomain) return;
                const t = this.pane.presenter,
                    e = t.view.xAxis.xScale.domain();
                if (!q(e)) return;
                let i = this.getDataDomain(e);
                if (this.pane === t.mainPlot.pane) {
                    const e = t.mainPlot.getPreviousValue(),
                        n = Q(t.display, !1, "chart", "previous", "forceVisible");
                    q(e, i) && n && (i[0] = Math.min(i[0], e), i[1] = Math.max(i[1], e))
                }
                if (this.yScale.priceDomain(i), q(i)) {
                    const t = this.getPadding(i);
                    i = [i[0] - t[0], i[1] + t[1]]
                }
                this.yScale.domain(i)
            }
            getInitialPadding() {
                let t = Wt("#".concat(Zt.HEADER_SIZE_PLACEHOLDER_ID));
                if (!q(t)) {
                    t = Yt(document.body, "div"), jt(t, {
                        display: "none"
                    }), Gt(t, {
                        id: Zt.HEADER_SIZE_PLACEHOLDER_ID,
                        class: "bcharts-card bcharts-card-first"
                    });
                    const {
                        lineHeight: e
                    } = getComputedStyle(t);
                    isNaN(Number.parseFloat(e)) && jt(t, {
                        lineHeight: "120%"
                    })
                }
                const {
                    paddingTop: e,
                    paddingBottom: i,
                    marginTop: n,
                    lineHeight: s
                } = getComputedStyle(t), r = this.pane.isMain ? n : "0";
                return "cards" !== this.pane.presenter.display.tooltip.mode ? Number.parseFloat(r) : [e, i, r, s].map(Number.parseFloat).reduce((t, e) => t + e, 0) + Zt.CARDS_Y_OFFSET
            }
            getPadding([t, e]) {
                const i = this.pane.presenter,
                    n = this.getInitialPadding(),
                    s = Zt.PANE_CAP_MIN_PADDING_PERCENT * this.viewBox.height,
                    r = Math.max(s, Math.min(Zt.PANE_CAP_MAX_PADDING_PERCENT * this.viewBox.height, n));
                let o = [this.toAmount(Math.ceil(s), t), this.toAmount(Math.ceil(r), e)];
                const a = i.mainPlot;
                if (a && a.hasEvents) {
                    const t = Gc(i.view);
                    o[1] += this.toAmount(3 * t, e + o[1])
                }
                return o
            }
            toAmount(t, e) {
                const i = this.toY(e);
                return this.toPrice(i) - this.toPrice(i + t)
            }
            clearTicks() {
                this.ticks = null
            }
            getTicks(t, e = 0) {
                const {
                    height: i
                } = this.viewBox, n = Re(t, 1.3), s = {
                    height: i,
                    approxLineHeight: n,
                    domain: this.yScale.domain()
                };
                if (q(this.ticks) && q(s.domain) && q(this.lastUsedOptions) && q(this.lastUsedOptions.domain) && s.height === this.lastUsedOptions.height && s.approxLineHeight === this.lastUsedOptions.approxLineHeight && s.domain[0] === this.lastUsedOptions.domain[0] && s.domain[1] === this.lastUsedOptions.domain[1]) return this.ticks;
                this.lastUsedOptions = s;
                const r = Math.floor((i + 40) / (n + 40));
                let o = this.yScale.getTicks(r);
                const a = Q(Rp().config, null, "overrides", "yAxis", "tickProvider");
                if (q(a) && "function" == typeof a && s.height > 0 && q(s.domain)) {
                    const t = J(s);
                    t.autoTicks = J(o), o = a(t)
                }
                const {
                    innerTickSize: l,
                    tickPadding: c,
                    fontSize: u
                } = this.config;
                return this.ticks = o.map(i => {
                    const n = Hu(this, i),
                        s = t.measureText(n).width,
                        r = Math.round(this.yScale.priceToY(i)),
                        o = {
                            y1: r,
                            y2: r,
                            dy: 0,
                            label: n,
                            labelY: r + .32 * u
                        };
                    return this.primary ? (o.x1 = e, o.x2 = o.x1 + l, o.labelX = o.x2 + s + c) : (o.x1 = e - l, o.x2 = o.x1 + l, o.labelX = o.x1 - c), o
                }), this.ticks
            }
            widthNeeded(t) {
                if (!q(this.fullDomain)) return Zt.DEFAULT_PRICE_AXIS_WIDTH;
                t.save();
                const {
                    fontWeight: e,
                    fontSize: i
                } = this.config, {
                    chart: {
                        fontFamily: n
                    }
                } = this.pane.presenter.display;
                t.font = "".concat(e, " ").concat(i, "px ").concat(n);
                const s = Math.max(...this.fullDomain.map(e => t.measureText(Hu(this, e)).width)),
                    {
                        innerTickSize: r,
                        tickPadding: o
                    } = this.config,
                    a = s + r + 2 * o;
                return t.restore(), a
            }
            draw(t) {
                const {
                    chart: {
                        fontFamily: e
                    },
                    yAxis: {
                        gridLines: i,
                        textColor: n,
                        visible: s
                    }
                } = this.pane.presenter.display;
                if (!s) return;
                t.save();
                const {
                    x: r,
                    y: o,
                    width: a,
                    height: l
                } = this.viewBox, {
                    fontWeight: c,
                    fontSize: u
                } = this.config;
                _e(t, this.viewBox), t.font = "".concat(c, " ").concat(u, "px ").concat(e), t.lineWidth = 2, t.strokeStyle = i.color, t.textAlign = "end";
                const h = this.primary ? r : a;
                t.setLineDash([]), Ve(t, h, o, o + l);
                const d = this.getTicks(t, h);
                this.drawTicks(t, d, n), this.drawPriceAdornments(t), t.restore()
            }
            drawTicks(t, e, i) {
                t.fillStyle = i, e.forEach(e => {
                    t.fillText(e.label, e.labelX, e.labelY + e.dy)
                })
            }
            drawCrosshairIndicator(t, e) {
                if (!this.pane.presenter.display.yAxis.crosshair.enabled) return;
                const i = this.primary ? this.viewBox.x : this.viewBox.width,
                    n = Hu(this, this.yScale.yToPrice(e));
                this.crosshairIndicator.draw(t, i, e, n)
            }
            get indicatorHeight() {
                return this.config.fontSize + this.config.indicatorPadding + this.config.indicatorPadding
            }
            drawPriceAdornments(t) {
                const e = this.pane.presenter,
                    {
                        chart: {
                            fontFamily: i,
                            previous: n
                        },
                        yAxis: {
                            showLastValue: s,
                            preventLabelOverlap: r
                        }
                    } = e.display,
                    o = e.view,
                    a = [],
                    l = (t, e, i, n) => {
                        null != e && (e = t.priceMapper ? t.priceMapper(e) : e, a.push({
                            y: this.toY(e),
                            value: e,
                            color: i,
                            halfHeight: Math.round(this.indicatorHeight / 2),
                            priority: n
                        }))
                    };
                this.plots.forEach(t => {
                    t.timeSeries && t.timeSeries.hasData && (("All" === s || "Main" === s && t.main) && t.curves.filter(t => t.visible).forEach(e => {
                        const i = e.pickMainField();
                        let n = this.getLastValue(e.plot.timeSeries.container, i);
                        const s = this.getLastColor(e);
                        l(t, n, s, 1)
                    }), t.showPrevious && l(t, t.getPreviousValue(), n.color, 3))
                }), this.annotations.forEach(t => {
                    a.push(...t.getPriceScaleAdornments().map(t => ({
                        y: this.toY(t.price),
                        value: t.price,
                        color: t.color,
                        halfHeight: Math.round(this.indicatorHeight / 2),
                        priority: 2
                    })))
                }), a.sort((t, e) => t.y - e.y), r && function(t) {
                    t.forEach((t, e, i) => {
                        if (e > 0) {
                            const n = i[e - 1],
                                s = (({
                                          y: t,
                                          halfHeight: e
                                      }) => t - e)(t),
                                r = (({
                                          y: t,
                                          halfHeight: e
                                      }) => t + e)(n);
                            s < r && (t.y = r + 1 + t.halfHeight)
                        }
                    })
                }(a);
                const c = ({
                               y: e,
                               value: n,
                               color: s
                           }) => {
                    const {
                        leftOffset: r,
                        rightOffset: a
                    } = o, l = this.primary ? this.pane.viewBox.width - a : r, c = new ud({
                        position: this.primary ? "right" : "left",
                        fontSize: this.config.fontSize,
                        padding: this.config.indicatorPadding,
                        fontFamily: i,
                        textColor: "#fff",
                        strokeColor: s,
                        backgroundColor: s
                    }), u = Hu(this, n);
                    c.draw(t, l, e, u)
                };
                r ? a.forEach(c) : [3, 2, 1].forEach(t => a.filter(e => e.priority === t).forEach(c))
            }
            getLastValue(t, e) {
                let i = t.getLastDataPoint(e);
                return null == i && (i = k(t.getData(e), t => null !== t)), i
            }
            getLastColor(t) {
                const e = t.plot.timeSeries.container;
                return t.getColor(e.size - 1)
            }
        }
        class md {
            constructor() {
                this.id = Do()()
            }
            fromModel(t) {
                this.height = t.height, this.axes = t.axes.map((t, e) => {
                    const i = new fd;
                    return i.pane = this, i.primary = 0 === e, i.fromModel(t), i
                }, this)
            }
            getBounds() {
                return this.viewBox
            }
            setViewBox(t) {
                this.viewBox = t
            }
            draw(t) {
                this.drawAxes(t), t.save(), this.clipToNoScales(t), this.drawPrevious(t), this.drawGrid(t), this.drawPlots(t), this.drawAnnotations(t), t.restore()
            }
            drawAxes(t) {
                for (let e of this.axes) e.draw(t)
            }
            drawPrevious(t) {
                const e = this.presenter.mainPlot;
                if (e.showPrevious) {
                    const i = e.getPreviousValue();
                    if (null != i) {
                        const {
                            leftOffset: n,
                            rightOffset: s
                        } = this.presenter.view, r = n, o = this.viewBox.width - s, a = e.axis.yScale.priceToY(i), {
                            color: l,
                            dashStyle: c
                        } = this.presenter.display.chart.previous, u = xe(c);
                        t.save(), t.strokeStyle = l, t.setLineDash(u), Be(t, a, r, o), t.restore()
                    }
                }
            }
            getBoundsWithoutScales() {
                const t = this.viewBox.duplicate(),
                    e = this.presenter.view;
                return t.x = e.leftOffset, t.width -= e.leftOffset + e.rightOffset, t
            }
            clipToNoScales(t) {
                _e(t, this.getBoundsWithoutScales())
            }
            drawAnnotations(t) {
                t.save(), this.axes.forEach(e => {
                    e.annotations.forEach(e => e.draw(t, !0))
                }), t.restore()
            }
            drawGrid(t) {
                const {
                    chart: {
                        fontFamily: e
                    },
                    yAxis: {
                        gridLines: i,
                        visible: n,
                        minorGridLines: s
                    }
                } = this.presenter.display;
                if (!n || !i.visible) return;
                const {
                    lineWidth: r,
                    color: o,
                    dashStyle: a
                } = i;
                t.save();
                const l = this.axes[0],
                    {
                        fontWeight: c,
                        fontSize: u
                    } = l.config;
                t.font = "".concat(c, " ").concat(u, "px ").concat(e);
                const h = l.getTicks(t),
                    {
                        leftOffset: d,
                        rightOffset: p
                    } = this.presenter.view,
                    f = d,
                    m = this.viewBox.width - p,
                    g = (e, i, n) => {
                        t.lineWidth = e, t.strokeStyle = i, t.setLineDash(xe(n)), t.beginPath()
                    };
                if (g(r, o, a), h.forEach(e => {
                    t.moveTo(f, e.y1), t.lineTo(m, e.y2)
                }), t.stroke(), s && s.visible && h.length >= 2) {
                    const {
                        lineWidth: e,
                        color: i,
                        dashStyle: n
                    } = s, r = (h[0].y1 - h[1].y1) / 5;
                    g(e, i, n), h.forEach(e => {
                        for (let i = 1; i < 5; i++) {
                            const n = Math.ceil(e.y1 + i * r);
                            t.moveTo(f, n), t.lineTo(m, n)
                        }
                    }), t.stroke()
                }
                t.restore()
            }
            drawYCrosshair(t, e) {
                const {
                    yAxis: {
                        crosshair: {
                            enabled: i,
                            showValue: n,
                            color: s,
                            dashStyle: r
                        }
                    }
                } = this.presenter.display;
                if (!i) return;
                const o = xe(r);
                t.strokeStyle = s, t.setLineDash(o);
                const a = this.presenter.view.leftOffset,
                    l = this.viewBox.width - this.presenter.view.rightOffset,
                    c = Ye();
                c.prolog(t), Be(t, c.adjust(e.y), c.adjust(a), c.adjust(l)), c.epilog(t), n && this.axes.forEach(i => {
                    i.drawCrosshairIndicator(t, e.y)
                })
            }
            drawNoData(t) {
                t.save(), t.font = "800 14px ".concat(this.presenter.display.chart.fontFamily), t.fillStyle = "#f00", He(t, Zt.NO_DATA_TEXT, {
                    x: this.viewBox.centerX,
                    y: this.viewBox.centerY
                }, T.Center), t.restore()
            }
            get isMain() {
                const t = this.presenter.mainPlot;
                return this.axes.some(e => e.plots.includes(t))
            }
            drawPlots(t) {
                t.save();
                const e = t => t && t.hasData && t.container.isEmpty,
                    i = this.presenter.mainPlot;
                for (let n of this.axes) {
                    for (let s of n.plots) {
                        const n = e(s.timeSeries),
                            r = this.presenter.display.chart.showNoDataText;
                        (!q(r) || r) && s.main && n ? this.drawNoData(t) : s === i || n || s.draw(t)
                    }
                    n.plots.includes(i) && !e(i.timeSeries) && i.draw(t)
                }
                t.restore()
            }
        }

        function gd(t, e) {
            return {
                width: t,
                spacing: e,
                get totalWidth() {
                    return this.width + this.spacing
                },
                offset: 0
            }
        }
        class yd extends dd {
            constructor(t, e) {
                super(), this.timeline = t;
                const i = t.presenter.display;
                this.marginBars = i.xAxis.marginBars || 0, this.aggregation = e, this.bar = gd(Q(i, Zt.DEFAULT_BAR_WIDTH, "chart", "bar", "width"), Q(i, Zt.DEFAULT_BAR_SPACING, "chart", "bar", "spacing")), this._extent = null, this.wasZoomed = !1, this.fitAllData = !1
            }
            extent() {
                return hd.call(this, "_extent", arguments[0])
            }
            get presenter() {
                return this.timeline.presenter
            }
            get display() {
                return this.presenter.display
            }
            scaleBarToFit() {
                if (this.wasZoomed) return;
                if (this.fitAllData) return this.scaleBarToFitDensity(this.timeline.withoutPrologEpilogLength);
                const t = this.display.xAxis.visibleRange;
                if (q(t)) return this.scaleBarToFitRange([t.from, t.to]);
                const e = this.display.density;
                if (Number.isFinite(e)) return this.scaleBarToFitDensity(e);
                const i = this.display.period;
                return Number.isFinite(i) ? this.scaleBarToFitPeriod(i) : void 0
            }
            deriveExtentsFromBarWidth(t) {
                if (!q(this._range)) return null;
                if (0 === this.timeline.length) return null;
                const e = this._range[1] - this._range[0],
                    i = e / t.totalWidth,
                    n = Math.ceil(i);
                t.offset = e - n * t.totalWidth;
                let s = this.timeline.lastSeriesIndex + this.marginBars;
                const r = this._domain && this._domain[1];
                return r && (s = j(this.timeline, +r, Number, Ku)), [s - n + 1, s]
            }
            adjustDomain() {
                if (q(this._range)) {
                    if (this.scaleBarToFit(), !q(this.display.xAxis.visibleRange)) {
                        const t = this.deriveExtentsFromBarWidth(this.bar);
                        if (!q(t)) return;
                        this.extent(t)
                    }
                    this.setDomainFromExtent()
                }
            }
            xToTime(t) {
                if (!this.ready) return null;
                const e = t - this._range[0] - this.bar.offset,
                    i = Math.floor(e / this.bar.totalWidth),
                    n = this._extent[0] + i;
                return this.timeline.at(n)
            }
            timeToIndex(t) {
                return this.ready ? (t = "number" == typeof t ? t : +t, j(this.timeline, t, Number, Ku)) : null
            }
            indexToX(t) {
                const e = t - this._extent[0];
                return this.bar.width / 2 + this.range()[0] + this.bar.offset + e * this.bar.totalWidth
            }
            timeToX(t) {
                if (!this.ready) return null;
                const e = this.timeToIndex(t);
                return this.indexToX(e)
            }
            zoom(t) {
                const e = t,
                    i = e * this.bar.width / 100,
                    n = this.bar.width - i,
                    s = this.bar.spacing - e * this.bar.spacing / 100;
                if (n > Zt.MAXIMUM_BAR_WIDTH || n < Zt.MINIMUM_BAR_WIDTH) return !1;
                const r = gd(n, s),
                    o = this.deriveExtentsFromBarWidth(r);
                return !!this.isUsableExtent(o) && (this.setBar(n, s), this.adjustDomain(), this.wasZoomed = !0, !0)
            }
            scaleBarToFitRange(t) {
                const e = (t, e, i, n) => q(t) ? j(this.timeline, t, Number, Ku, i, n) : e,
                    {
                        from: i,
                        to: n
                    } = this.presenter.data.range || {},
                    s = t[0] === i && t[1] === n,
                    {
                        firstSeriesIndex: r,
                        lastSeriesIndex: o
                    } = this.timeline,
                    a = s ? r : void 0,
                    l = s ? o : void 0,
                    c = [e(t[0], r, a, l), e(t[1], o, a, l)];
                this.timeline.at(c[1]) > t[1] && (c[1] = Math.max(0, c[1] - 1)), this.extent(c), this.scaleBarToFitDensity(c[1] - c[0] + 1)
            }
            scaleBarToFitDensity(t) {
                const e = Math.max(Zt.MINIMUM_BARS_VISIBLE, t),
                    i = this.display.xAxis.marginBars || 0,
                    n = (this._range[1] - this._range[0]) / (e + i);
                this.setBar(2 / 3 * n, 1 / 3 * n, !1)
            }
            scaleBarToFitPeriod(t) {
                const e = this.timeline.lastSeriesIndex;
                let i = this.timeline.at(e),
                    n = i,
                    s = e;
                const r = this.presenter.data.aggregation;
                if (r.isEndOfDay || r.isIntraday && t >= Zt.INTRA_THRESHOLD)
                    for (; s > 0 && mu(i, n) < t;) s--, n = this.timeline.at(s);
                else if (!r.isTick) {
                    let e = Math.floor(t / Zt.ONE_DAY_MILLIS);
                    const n = t => function(t, e) {
                            mt(2, arguments);
                            var i = mu(t, e) / 6e4;
                            return i > 0 ? Math.floor(i) : Math.ceil(i)
                        }(t, yt(t)),
                        r = n(i);
                    let o = i;
                    for (; s > 0;) {
                        let t = this.timeline.at(s);
                        const i = vt(t, o);
                        if (0 === e) {
                            if (n(t) <= r || !i) break
                        } else i || (e--, o = t);
                        s--
                    }
                }
                this.scaleBarToFitDensity(e - s + 1)
            }
            setBar(t, e, i = !0) {
                const [n, s] = ut(t, e, Zt.MINIMUM_BAR_WIDTH, Zt.MAXIMUM_BAR_WIDTH);
                this.bar.width = n, this.bar.spacing = s, this.wasZoomed || (this.resetBar = {
                    width: n,
                    spacing: s
                }), i && (this.presenter.model.display.chart.bar = {
                    width: t,
                    spacing: e
                })
            }
            resetZoom() {
                q(this.resetBar) ? (this.bar.width = this.resetBar.width, this.bar.spacing = this.resetBar.spacing) : (this.bar.width = Zt.DEFAULT_BAR_WIDTH, this.bar.spacing = Zt.DEFAULT_BAR_SPACING), delete this.presenter.model.display.chart.bar, this.adjustDomain()
            }
            isUsableExtent(t) {
                return q(t) && q(t[0], t[1]) && t[0] >= 0 && t[1] < this.timeline.withPrologEpilogLength && t[1] - t[0] >= Zt.MINIMUM_BARS_VISIBLE
            }
            shiftBars(t, e = null) {
                const i = this._extent.map(e => e + t);
                this.isUsableExtent(i) && (q(e) && (this.bar.offset = e), this.extent(i), this.setDomainFromExtent())
            }
            setDomainFromExtent() {
                this.domain(this.extent().map(t => this.timeline.at(t)))
            }
            pan(t) {
                if (!Number.isFinite(t) || 0 === t) return;
                const e = t % this.bar.totalWidth;
                let i = this.bar.offset + e;
                const n = Math.sign(t);
                let s = -(t < 0 ? Math.ceil : Math.floor)(t / this.bar.totalWidth);
                (i > this.bar.totalWidth || i < -this.bar.totalWidth) && (s += i > 0 ? -1 : 1, i -= n * this.bar.totalWidth), this.shiftBars(s, i)
            }
            getSeriesThatCouldLoadMoreData() {
                const t = this.domain();
                if (!q(t) || !q(t[0])) return [];
                const e = t[0].getTime();
                return this.timeline.presenter.allPlots.map(t => t.timeSeries).filter(t => !(!q(t) || !t.hasData || 0 === t.container.size || !0 !== t.canLoadMoreData) && e <= t.container.getTimeData()[0].getTime())
            }
        }
        class vd {
            constructor(t) {
                this.xScale = new yd(t.presenter.timeline, t.presenter.data.aggregation), this.view = t, this.ticks = null, this.lastUsedOptions = null, this.config = {
                    innerTickSize: 5,
                    tickPadding: 5,
                    indicatorPadding: 5,
                    fontWeight: 200,
                    fontSize: 12
                };
                const {
                    chart: {
                        fontFamily: e,
                        backgroundColor: i
                    },
                    xAxis: {
                        textColor: n,
                        visible: s,
                        crosshair: {
                            color: r
                        }
                    }
                } = this.view.presenter.display;
                this.isVisible = s, this.crosshairIndicator = new ud({
                    position: "bottom",
                    fontSize: this.config.fontSize,
                    fontFamily: e,
                    padding: this.config.indicatorPadding,
                    strokeColor: r,
                    textColor: n,
                    backgroundColor: Oe(.15)(i),
                    arrowLength: this.config.innerTickSize
                })
            }
            setDomain() {
                this.xScale.adjustDomain();
                const t = this.view.presenter.display.period === Zt.FIFTY_YEARS_MILLIS;
                q(this.xScale.extent()) && !t && this.checkForMoreData()
            }
            zoom(t) {
                const e = this.xScale.zoom(t);
                return this.checkForMoreData(), e
            }
            checkForMoreData() {
                this.xScale.getSeriesThatCouldLoadMoreData().forEach(t => t.loadMoreData())
            }
            shouldScrollIntoView(t) {
                const e = this.xScale.extent();
                return !!q(e) && (t - this.xScale.timeline.lastSeriesIndex >= 0 && t - e[1] <= 1)
            }
            pan(t) {
                this.xScale.pan(t), this.checkForMoreData()
            }
            resetZoom() {
                this.xScale.resetZoom()
            }
            get barsToLast() {
                const t = this.xScale.timeline.lastSeriesIndex,
                    e = this.xScale.extent();
                return t - (e ? e[1] : t)
            }
            canGoToLast() {
                return this.barsToLast > 0
            }
            goToLatest() {
                this.canGoToLast() && (this.xScale.shiftBars(this.barsToLast + this.xScale.marginBars + 1), this.view.setPriceAxesDomains(), this.view.redraw())
            }
            setViewBox(t) {
                this.viewBox = t;
                const {
                    x: e,
                    width: i
                } = this.viewBox;
                this.xScale.range([e, e + i])
            }
            heightNeeded(t) {
                if (!this.isVisible) return 0;
                const e = this.view.presenter.display.chart.fontFamily,
                    {
                        fontWeight: i,
                        fontSize: n
                    } = this.config;
                t.save(), t.font = "".concat(i, " ").concat(n, "px ").concat(e);
                const {
                    innerTickSize: s,
                    tickPadding: r,
                    indicatorPadding: o
                } = this.config, a = Re(t, 1) + s + r + o;
                return t.restore(), a
            }
            getTicks(t) {
                if (q(this.lastUsedOptions) && (e = t.agg, i = this.lastUsedOptions.agg, e.unit === i.unit && e.size === i.size && e.spec === i.spec) && t.unitWidth === this.lastUsedOptions.unitWidth && t.barWidth === this.lastUsedOptions.barWidth && t.extent[0] === this.lastUsedOptions.extent[0] && t.extent[1] === this.lastUsedOptions.extent[1] && t.formatString === this.lastUsedOptions.formatString && t.minTickInterval === this.lastUsedOptions.minTickInterval && q(this.ticks)) return this.ticks;
                var e, i;
                this.lastUsedOptions = t;
                const n = function(t) {
                        switch (t.agg.unit) {
                            case c.Tick:
                                return new Eu(t);
                            case c.Intraday:
                                return new Du(t, t.agg.size);
                            case c.Day:
                                return new Lu(t);
                            case c.Week:
                                return new _u(t);
                            case c.Month:
                            case c.Quarter:
                                return new Iu(t);
                            case c.Year:
                                return new Nu(t);
                            default:
                                throw new Error("Aggregation unit ".concat(c[t.agg.unit], " not supported."))
                        }
                    }(t),
                    s = Math.max(0, t.extent[0]),
                    r = Math.min(this.xScale.timeline.withPrologEpilogLength - 1, t.extent[1] + 1);
                return this.ticks = this.view.presenter.timeline.slice(s, r).map((t, e) => {
                    if (!q(t) || Number.isNaN(t.getTime())) return null;
                    const i = n.getTick(t);
                    return q(i) && (i.index = s + e), i
                }).filter(t => q(t)), this.ticks
            }
            normalizeDuration(t) {
                const e = function() {
                    const t = Object.keys(Tu);
                    return 1 === Tu.Day.Multipliers[0] && t.forEach(t => {
                        const e = Tu[t],
                            i = ct(e.Period);
                        e.One = 1 * i, e.Multipliers = e.Multipliers.map(t => t * i)
                    }), Tu
                }();
                let i = e.Year;
                const n = Object.keys(e);
                for (let s = 0; s < n.length - 1; ++s) {
                    const r = e[n[s]].Multipliers,
                        o = e[n[s + 1]].Multipliers,
                        a = (V(r) + B(o)) / 2;
                    if (t <= a) {
                        i = e[n[s]];
                        break
                    }
                }
                const s = i.Multipliers,
                    r = s.findIndex(e => t < e);
                let o = -1 === r ? V(s) : s[r];
                return "P1M" === i.Period ? o *= .9 : "P1W" === i.Period && (o *= .84), o
            }
            draw(t) {
                if (!this.isVisible) return;
                const {
                    xAxis: {
                        gridLines: e,
                        textColor: i,
                        minTickInterval: n,
                        tickPixelInterval: s,
                        format: r,
                        forceTicksVisible: o
                    },
                    chart: {
                        fontFamily: a
                    }
                } = this.view.presenter.display, {
                    fontWeight: l,
                    fontSize: c,
                    innerTickSize: u,
                    tickPadding: h
                } = this.config, {
                    x: d,
                    y: p,
                    width: f
                } = this.viewBox, {
                    lineWidth: m,
                    color: g,
                    dashStyle: y
                } = e, v = xe(y);
                t.textAlign = "center", t.font = "".concat(l, " ").concat(c, "px ").concat(a), t.lineWidth = 1, t.strokeStyle = g, t.fillStyle = i, t.setLineDash([]), Be(t, p, d, d + f);
                const T = this.xScale.extent(),
                    b = t => !q(t) || !q(t[0], t[1]);
                if (b(T)) return;
                const S = e => t.measureText(e).width,
                    P = s > 0 ? s : 120,
                    A = this.xScale.domain();
                if (b(A)) return;
                const w = (A[1].getTime() - A[0].getTime()) * P * .6 / f,
                    C = this.normalizeDuration(w),
                    x = this.view.presenter.data.aggregation.isEndOfDay,
                    M = (t, e) => {
                        if (!q(t.date)) return !0;
                        if (i = t.date, s = e.date, (q(i) ? mu(s, i) : Zt.FIFTY_YEARS_MILLIS) < n) return !1;
                        var i, s;
                        const r = e.x - t.x,
                            o = e.date.getTime() - t.date.getTime() >= C,
                            a = r > P;
                        return !(t.x + t.textWidth / 2 >= e.x - e.textWidth / 2) && (a || !!x && o)
                    },
                    E = d + f,
                    O = ({
                             text: i,
                             x: n,
                             textWidth: s,
                             date: r
                         }) => {
                        if (!q(r)) return;
                        Ve(t, n, p, p + u);
                        let a = n;
                        if (o) {
                            const t = s / 2;
                            a = n - t < d ? d + t : n, a = a + t > E ? E - t : a
                        }
                        t.fillText(i, a, p + u + h + .71 * c), e.visible && (t.save(), t.lineWidth = m, t.setLineDash(v), Ve(t, n, 0, p), t.restore())
                    },
                    D = {
                        agg: this.view.presenter.data.aggregation,
                        unitWidth: S("M"),
                        barWidth: this.xScale.bar.width,
                        extent: T,
                        formatString: r,
                        minTickInterval: n || 0,
                        duration: w
                    },
                    L = this.getTicks(D);
                let _ = {
                    date: null,
                    priority: 999,
                    x: -999,
                    text: null,
                    index: -1,
                    textWidth: 0
                };
                L.forEach(t => {
                    t.x = this.xScale.indexToX(t.index), t.textWidth = S(t.text), M(_, t) ? (O(_), _ = t) : t.priority < _.priority && (_ = t)
                }), O(_), this.drawTimeAdornments(t)
            }
            drawTimeAdornments(t) {
                const e = this.view.presenter,
                    {
                        chart: {
                            fontFamily: i
                        },
                        xAxis: {
                            textColor: n
                        }
                    } = e.display,
                    s = [];
                this.view.presenter.allAnnotations.forEach(t => {
                    s.push(...t.getTimeScaleAdornments().map(t => ({
                        x: this.xScale.timeToX(t.time),
                        value: ku(e, t.time),
                        color: t.color
                    })))
                }), s.sort((t, e) => t.x - e.x), s.forEach(e => {
                    new ud({
                        position: "bottom",
                        fontSize: this.config.fontSize,
                        fontFamily: i,
                        padding: this.config.indicatorPadding,
                        strokeColor: Zt.COLOR_TRANSPARENT,
                        textColor: n,
                        backgroundColor: e.color,
                        arrowLength: this.config.innerTickSize
                    }).draw(t, e.x, this.viewBox.y + 1, e.value)
                })
            }
            drawCrosshair(t, {
                x: e
            }) {
                const i = this.view.presenter,
                    {
                        enabled: n,
                        showValue: s,
                        color: r,
                        dashStyle: o
                    } = i.display.xAxis.crosshair;
                if (!n) return;
                const a = this.xScale.xToTime(e);
                e = this.xScale.timeToX(a);
                const l = xe(o);
                t.strokeStyle = r, t.setLineDash(l);
                const c = Ye();
                if (c.prolog(t), Ve(t, c.adjust(e), 0, c.adjust(this.viewBox.y)), c.epilog(t), !s || !i.display.xAxis.visible) return;
                const u = ku(i, a);
                this.crosshairIndicator.draw(t, e, this.viewBox.y + 1, u, this.viewBox.height - 2)
            }
        }
        const Td = {
                mousedown: "onMouseDown",
                mousemove: "onMouseMove",
                mouseup: "onMouseUp",
                dblclick: "onMouseDblClick",
                contextmenu: "onContextMenu",
                mouseover: "onMouseEnter",
                mouseout: "onMouseLeave",
                wheel: "onWheel",
                touchstart: "onMouseDown",
                touchmove: "onMouseMove",
                touchend: "onMouseUp",
                keydown: "onKeyDown"
            },
            bd = {
                Shift: "shiftKey",
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey"
            };
        class Sd {
            constructor(t) {
                this.subscriptions = [], this.view = t
            }
            init(t) {
                const e = Y();
                Object.keys(Td).filter(t => !(t => t.startsWith("touch"))(t) || e).forEach(e => {
                    const i = t => {
                        const i = Td[e];
                        !0 === this.notifyActiveTool(i, t) && t.preventDefault()
                    };
                    t.addEventListener(e, i), this.subscriptions.push(() => {
                        t.removeEventListener(e, i)
                    })
                })
            }
            shutdown() {
                this.subscriptions.forEach(t => t()), this.subscriptions = []
            }
            notifyActiveTool(t, e) {
                const i = this.view.presenter;
                if (void 0 === i || null === i.activeTool) return !1;
                const n = this.getPayload(e, i),
                    s = i.activeTool;
                let r = !1;
                return "function" == typeof s[t] && (r = s[t](n) || !1), r
            }
            getPayload(t, e) {
                const i = t instanceof MouseEvent,
                    n = Y() && t instanceof TouchEvent;
                if (i || n) {
                    const s = {
                        x: 0,
                        y: 0
                    };
                    if (n && 1 === t.touches.length) {
                        const e = t.touches[0],
                            {
                                left: i,
                                top: n
                            } = t.target.getBoundingClientRect();
                        s.x = e.clientX - i, s.y = e.clientY - n
                    } else s.x = t.offsetX, s.y = t.offsetY;
                    const r = {
                        button: i ? t.which : S.Left,
                        offset: s,
                        view: e.view,
                        presenter: e,
                        originalEvent: t
                    };
                    if (t instanceof WheelEvent && (r.delta = t.shiftKey ? t.deltaX : t.deltaY), n && 2 === t.touches.length) {
                        const [e, i] = t.touches;
                        r.pinchZoom = !0;
                        const n = e.clientX - i.clientX,
                            s = e.clientY - i.clientY;
                        r.pinchDistance = Math.sqrt(n * n + s * s)
                    }
                    return r.getModifier = e => t[bd[P[e]]], this.view.splitters.forEach((t, e) => {
                        t.contains(s) && (r.splitter = [e, e + 1])
                    }), e.panes.forEach(t => {
                        if (t.getBounds().contains(s)) {
                            const e = t.axes.find(t => t.viewBox.contains(s));
                            if (e) r.priceAxis = e;
                            else {
                                const e = t.axes.find(t => t.primary);
                                r.point = e.toAnnotationPoint(s)
                            }
                        }
                    }), r
                }
                if (t instanceof KeyboardEvent) {
                    let i = {
                        key: t.key || t.keyIdentifier,
                        code: t.keyCode || t.charCode,
                        repeat: t.repeat,
                        presenter: e,
                        getModifier: e => t.getModifierState(P[e])
                    };
                    return i
                }
            }
        }

        function Pd(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function Ad(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function wd(t, e) {
            if (null == t) return {};
            var i, n, s = function(t, e) {
                if (null == t) return {};
                var i, n, s = {},
                    r = Object.keys(t);
                for (n = 0; n < r.length; n++) i = r[n], e.indexOf(i) >= 0 || (s[i] = t[i]);
                return s
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                for (n = 0; n < r.length; n++) i = r[n], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
            }
            return s
        }
        class Cd {
            constructor(t) {
                this.view = t, this.text = null, this.align = "center", this.verticalAlign = "top", this.x = 0, this.y = 0, this.style = {
                    color: "#333",
                    fontSize: 18
                }
            }
            update(t) {
                let {
                    style: e
                } = t, i = wd(t, ["style"]);
                Object.assign(this, i), this.style = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Pd(Object(i), !0).forEach((function(e) {
                            Ad(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Pd(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }({}, this.style, {}, e)
            }
            read() {
                const t = {};
                return Object.assign(t, this), delete t.view, t
            }
            draw(t) {
                if (!this.text) return;
                const {
                    fontFamily: e
                } = this.view.presenter.display.chart, {
                    fontSize: i,
                    color: n
                } = this.style, {
                    x: s,
                    y: r,
                    width: o,
                    height: a
                } = this.view.presenter.mainPlot.axis.pane.getBounds(), l = s + this.view.leftOffset, c = s + o - this.view.rightOffset;
                let u = l;
                u = "center" === this.align ? o / 2 : "right" === this.align ? c : l;
                let h = r + i;
                "middle" === this.verticalAlign ? h = r + i + a / 2 : "bottom" === this.verticalAlign && (h = r + a), u += this.x, h += this.y, t.save(), t.font = "".concat(i, "px ").concat(e), t.textAlign = this.align, t.textBaseline = "bottom", t.fillStyle = n, t.fillText(this.text, u, h), t.restore()
            }
        }
        var xd = i(20);
        const Md = window.ResizeObserver || xd.a;
        class Ed {
            constructor() {
                this.listeners = [], this.leftOffset = 0, this.rightOffset = 0, this.title = new Cd(this), this.draw = this.draw.bind(this)
            }
            findSvgParentWithClass(t, e) {
                return [t, t.parentElement, t.parentElement.parentElement].find(t => q(t) && t.className === e)
            }
            onNonToolHandledMouseDown({
                                          target: t
                                      }) {
                const e = this.presenter;
                if ("string" == typeof t.className && t.className.split(" ").includes("value-title")) e.onCardClicked(t);
                else {
                    const i = this.findSvgParentWithClass(t, "move-pane");
                    if (q(i)) return void e.onMovePaneClicked(i);
                    const n = this.findSvgParentWithClass(t, "delete-plot");
                    q(n) && e.deletePlotClicked(n)
                }
            }
            initialize(t) {
                this.presenter = t, this.el = Wt("#".concat(this.presenter.renderTo));
                const e = new Md(t => {
                    for (let e of t) {
                        const {
                            width: t,
                            height: i
                        } = e.contentRect;
                        this.setSize(t, i), q(this.tooltip) && this.tooltip.repositionAuto()
                    }
                });
                e.observe(this.el.parentElement), this.listeners.push(() => e.unobserve(this.el.parentElement));
                const i = t => this.onNonToolHandledMouseDown(t);
                this.el.addEventListener("mousedown", i), this.listeners.push(() => this.el.removeEventListener("mousedown", i)), jt(this.el, {
                    flex: 1,
                    display: "flex",
                    position: "relative",
                    "flex-direction": "column",
                    "touch-action": "pan-x pan-y"
                }), this.tooltip = new uh(this);
                const {
                    clientHeight: n,
                    clientWidth: s
                } = this.el;
                this.width = s, this.height = n, this.canvasContainer = Yt(this.el, "div"), Gt(this.canvasContainer, {
                    class: "chart-canvas-container"
                }), jt(this.canvasContainer, {
                    flex: 1,
                    display: "flex",
                    "flex-direction": "column",
                    position: "relative",
                    height: "100%"
                }), this.mainCanvas = Yt(this.canvasContainer, "canvas");
                const r = {
                    height: "".concat(n, "px"),
                    width: "".concat(s, "px"),
                    "z-index": 2,
                    position: "absolute",
                    top: 0,
                    left: 0
                };
                jt(this.mainCanvas, r), this.mouseCanvas = Yt(this.canvasContainer, "canvas"), Gt(this.mouseCanvas, {
                    tabIndex: 1
                }), r["z-index"] = 3, r.outline = "none", jt(this.mouseCanvas, r), this.goToLatestButton = Yt(this.el, "button"), qt(this.goToLatestButton, '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n            <path d="M13.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM6.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>\n        </svg>'), jt(this.goToLatestButton, {
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    zIndex: 3
                }), Gt(this.goToLatestButton, {
                    class: "go-to-latest"
                }), this.goToLatestButton.onclick = () => {
                    this.xAxis.goToLatest()
                }, this.listeners.push(() => {
                    this.goToLatestButton.onclick = null
                }), this.mainContext = this.mainCanvas.getContext("2d"), this.mouseContext = this.mouseCanvas.getContext("2d"), this.splitters = [], this.xAxis = new vd(this), this.eventCapture = new Sd(this), this.eventCapture.init(this.mouseCanvas), this.setChartSize(s, n)
            }
            reinitialize() {
                $t(".bcharts-card").forEach(t => t.remove()), "standard" !== this.presenter.display.tooltip.mode && this.tooltip.hide(), this.tooltip.setMode(this.presenter.display.tooltip.mode), this.xAxis = new vd(this), this.recalculateLayout(), this.redraw()
            }
            setSize(t, e, i = !1) {
                this.setChartSize(t, e), this.redraw(i)
            }
            setChartSize(t, e) {
                const i = {
                    width: "".concat(t, "px"),
                    height: "".concat(e, "px")
                };
                jt(this.el, i), this.width = t, this.height = e;
                const n = window.devicePixelRatio || 1,
                    s = {
                        height: this.height * n,
                        width: this.width * n
                    };
                [this.mainCanvas, this.mouseCanvas].forEach(t => {
                    Gt(t, s), jt(t, i)
                }), this.mainContext.scale(n, n), this.mouseContext.scale(n, n), this.recalculateLayout()
            }
            widthNeeded(t, e) {
                return Math.max(...this.presenter.allAxes.filter(t => t.primary === e).map(e => e.widthNeeded(t)))
            }
            recalculateLayout() {
                if (!this.isHostElementVisible) return;
                this.leftOffset = 0, this.rightOffset = 0, this.presenter.allAxes.forEach(t => t.clearTicks()), this.splitters.length = 0;
                const t = this.xAxis.heightNeeded(this.mainContext),
                    e = this.widthNeeded(this.mainContext, !0),
                    i = this.height - t,
                    n = this.presenter.panes;
                let s = _(n.map(t => t.height)),
                    r = 0;
                const o = Zt.PANE_SPLITTER_PERCENT_HEIGHT / 100,
                    a = Math.floor(o * i);
                if (s *= 1 + (n.length - 1) * o, this.presenter.display.yAxis.visible) {
                    n.some(t => t.axes.length > 1) && (this.leftOffset = this.widthNeeded(this.mainContext, !1)), this.rightOffset = e
                }
                n.forEach((t, n, o) => {
                    const l = n === o.length - 1,
                        c = Math.floor(i * t.height / s),
                        u = new Ie(0, r, this.width, c);
                    t.setViewBox(u);
                    const h = new Ie(this.width - this.rightOffset, r, e, c);
                    t.axes[0].setViewBox(h);
                    const d = t.axes[1];
                    if (d) {
                        const t = new Ie(0, r, this.leftOffset, c);
                        d.setViewBox(t)
                    }
                    if (r += c, !l) {
                        const t = new Ie(this.leftOffset, r, this.width - this.rightOffset - this.leftOffset, a);
                        this.splitters.push(t), r += a
                    }
                });
                const l = new Ie(this.leftOffset, r, this.width - this.rightOffset - this.leftOffset, t);
                this.xAxis.setViewBox(l), jt(this.goToLatestButton, {
                    right: "".concat(e + 5, "px"),
                    bottom: "".concat(t + 5, "px")
                }), this.xAxis.setDomain(), this.setPriceAxesDomains()
            }
            setPriceAxesDomains() {
                this.presenter.allAxes.forEach(t => {
                    t.setDomain()
                })
            }
            refreshLastBarTooltipValues(t) {}
            draw() {
                this.mainContext.save(), this.mainContext.miterLimit = 1, this.drawBackground(this.mainContext), this.xAxis.draw(this.mainContext);
                for (let t of this.presenter.panes) t.draw(this.mainContext);
                this.drawSplitters(this.mainContext), this.title.draw(this.mainContext);
                const t = Rp().config.showGoToLatest,
                    {
                        showGoToLatest: e
                    } = this.presenter.display.chart,
                    i = q(t) ? t : e;
                this.goToLatestButton.style.display = i && this.xAxis.canGoToLast() ? "block" : "none", this.mainContext.restore()
            }
            get isHostElementVisible() {
                return q(this.el) && q(this.el.offsetParent)
            }
            redraw(t = !1) {
                this.isHostElementVisible && (t ? this.draw() : Rp().redraw(this.presenter.renderTo))
            }
            drawBackground(t) {
                const e = this.presenter.display.chart.backgroundColor;
                t.clearRect(0, 0, this.width, this.height), t.fillStyle = e, t.fillRect(0, 0, this.width, this.height)
            }
            drawCrosshair({
                              ap: t,
                              offset: e
                          }) {
                const i = this.mouseContext;
                i.clearRect(0, 0, this.width, this.height), t && (this.xAxis.drawCrosshair(i, e), this.presenter.display.yAxis.visible && t.axis.pane.drawYCrosshair(i, e))
            }
            drawSplitters(t) {
                const e = (t => {
                    const e = De(t);
                    return Le(Ee(function({
                                              r: t,
                                              g: e,
                                              b: i,
                                              a: n
                                          }) {
                        return {
                            r: 255 - t,
                            g: 255 - e,
                            b: 255 - i,
                            a: n
                        }
                    }(e), e, .7))
                })(this.presenter.display.chart.backgroundColor);
                t.stokeStyle = e, t.lineWidth = 2, this.splitters.forEach(e => {
                    const {
                        x: i,
                        y: n,
                        width: s,
                        height: r
                    } = e, o = n + r / 2;
                    t.beginPath(), t.moveTo(i, o), t.lineTo(i + s, o), t.stroke()
                })
            }
            toTime(t) {
                return this.xAxis.xScale.xToTime(t)
            }
            toIndex(t) {
                return this.xAxis.xScale.timeToIndex(t)
            }
            toX(t) {
                return this.xAxis.xScale.timeToX(t)
            }
            setCursor(t) {
                const e = function(t) {
                    switch (t) {
                        case b.Arrow:
                        default:
                            return "default";
                        case b.Crosshair:
                            return "crosshair";
                        case b.Hand:
                            return "pointer";
                        case b.Move:
                            return "move";
                        case b.ResizeVertical:
                            return "ns-resize";
                        case b.Grabbing:
                            return "grabbing"
                    }
                }(t);
                jt(this.el, {
                    cursor: e
                })
            }
            shutdown() {
                this.listeners.forEach(t => t()), this.eventCapture && this.eventCapture.shutdown(), this.tooltip && this.tooltip.remove(), $t(".bcharts-card").forEach(t => t.remove()), this.canvasContainer.remove()
            }
        }

        function Od(t) {
            switch (l[t]) {
                case l.OHLC:
                case l.HLC:
                case l.Candlestick:
                case l.HollowCandles:
                case l.HeikinAshi:
                case l.ElderImpulseSystem:
                    return !0;
                default:
                    return !1
            }
        }

        function Dd(t, e) {
            switch (t) {
                case y.Symbol:
                case y.Expression:
                    return function(t, e) {
                        const i = Rp().getDefaultMultiFieldCurve();
                        if (null !== i && i.style === t) return i;
                        const n = t => t.id,
                            s = [en.Open, en.High, en.Low, en.Close, en.Change].map(n);
                        l[t] === l.HLC && s.splice(0, 1);
                        const r = [en.Close].map(n),
                            o = J(Zt.COLOR_DEFAULT_AREA),
                            a = J(Zt.COLOR_DEFAULT_OHLC),
                            c = J(Zt.COLOR_DEFAULT_VARY);
                        let u = {
                            fields: s,
                            colors: c,
                            lineWidth: 1,
                            visible: !0
                        };
                        switch (l[t]) {
                            case l.OHLC:
                            case l.HLC:
                            case l.Renko:
                                u.colors = e ? c : [a];
                                break;
                            case l.Candlestick:
                            case l.HollowCandles:
                            case l.HeikinAshi:
                                break;
                            case l.ElderImpulseSystem:
                                u.colors = c.concat(o);
                                break;
                            case l.Line:
                                u.fields = r, u.colors = [a];
                                break;
                            case l.Area: {
                                u.fields = r;
                                let t = De(o);
                                t.a = .5, u.colors = [Le(t), o];
                                break
                            }
                            case l.Column:
                                u.fields = r;
                                break;
                            default:
                                throw new Error('Curve style "'.concat(t, '" is not supported here.'))
                        }
                        return u
                    }(e.style || l[l.Candlestick], e.varyColorPerBar);
                case y.Forward:
                case y.Seasonal:
                    return {
                        fields: ["Close", "Change"], style: "Line", lineWidth: 2, visible: !0, colors: ["#888"], varyColorPerBar: !1
                    };
                case y.Annual:
                    return {
                        colors: ["#00b04b"], fields: ["Close", "Change"], style: "Line", lineWidth: 2, visible: !0, varyColorPerBar: !1
                    };
                default:
                    throw new Error("Unexpected plot type '".concat(y[t], "', don't know its default curve."))
            }
        }

        function Ld(t, e) {
            var i;
            Object.keys(t).length > 0 && (t.varyColorPerBar = t.varyColorPerBar || function(t) {
                switch (l[t]) {
                    case l.Candlestick:
                    case l.HollowCandles:
                    case l.HeikinAshi:
                    case l.ElderImpulseSystem:
                    case l.Column:
                    case l.Renko:
                        return !0;
                    default:
                        return !1
                }
            }(t.style) || void 0 !== (i = t.attributes) && i.length > 0 && i.some(t => t === a[a.ChangeBased] || t === a[a.OpenVsClose]));
            const n = Dd(y[e], t);
            return ot(n, t), n
        }
        var _d = function(t, e) {
            const i = e.curves[0],
                n = Nd(t),
                s = Ld(i, e.type);
            n.curves = [s], e.type === y[y.Annual] && n.curves.push({
                colors: ["#8b6038"],
                fields: ["Close"],
                style: "Line",
                lineWidth: 2,
                visible: !0,
                varyColorPerBar: !1
            });
            const {
                mainAxis: r
            } = Rd(t);
            return Od(i.style) && (r.comparison = m[m.None]), t
        };
        const Id = "..plots{.main === true}";

        function Nd(t) {
            return Ti(t, Id)[0]
        }

        function Rd(t) {
            const e = Ti(t, "..panes{".concat(Id, "}"))[0];
            return {
                mainPane: e,
                mainAxis: Ti(e, "..axes{".concat(Id, "}"))[0]
            }
        }
        const Hd = "Symbol",
            kd = "Expression",
            Fd = "Forward",
            Ud = "Seasonal",
            Vd = "Annual",
            Bd = [Hd, kd, Fd, Ud, Vd];
        var Wd = function(t, e) {
            const i = Nd(t),
                n = t => i.type === t,
                s = t => q(e[t.toLowerCase()]),
                r = Bd.find(t => s(t)),
                o = r.toLowerCase();
            let a = e[o];
            const l = a === Zt.PLACEHOLDER_SYMBOL_NAME,
                c = s(kd) || s(Fd) || s(Ud),
                u = Bd.some(t => s(t) && !n(t)),
                h = Rp().config.cachedAnnotationsCount || 0,
                d = h > 0,
                {
                    mainAxis: p
                } = Rd(t);
            u && (p.comparison = m[s(Vd) ? m.Value : m.None]);
            const f = (t, e) => t.findIndex(t => t.symbol === e);
            if (d) {
                if (n(Hd)) {
                    const t = p.annotations || [],
                        e = p.annCache || [],
                        n = f(e, i.symbol);
                    if (-1 !== n && e.splice(n, 1), t.length > 0) {
                        const n = {
                            symbol: i.symbol,
                            annotations: t
                        };
                        e.length + 1 > h && e.splice(0, e.length + 1 - h), e.push(n)
                    }
                    p.annCache = e
                }
                if (delete p.annotations, s(Hd)) {
                    const t = p.annCache || [],
                        i = f(t, e.symbol); - 1 !== i && (p.annotations = t[i].annotations)
                }
            }
            if (!l) {
                const {
                    error: t,
                    clean: i
                } = $a(a), n = q(t);
                if (c) {
                    if (n) throw new Error('Cannot set "'.concat(a, "\" as a main plot because it's not a valid expression.\n").concat(t));
                    a = i
                } else if (!n) throw new Error('Cannot set "'.concat(a, "\" as a main plot because it's an expression, unsupported for ").concat(e.plotType, "."))
            }
            const g = s(kd) && n(Hd) || s(Hd) && n(kd);
            let y = bi(t, Id, t => (u && (delete t.expression, delete t.symbol, delete t.showPrevious, delete t.forward, delete t.offsets, delete t.seasonal, delete t.annual, t.type = r, g || (t.curves = [{}]), (s(Fd) || s(Ud)) && (t.offsets = [0])), t[o] = a, t));
            if (u)
                if (s(Fd)) y.data.aggregation = {
                    unit: "Month"
                }, y.display.period = "P10Y";
                else if (!s(Ud) && !s(Vd) || y.data.aggregation.isEndOfDay) {
                    if (n(Fd) || n(Ud) || n(Vd)) {
                        y.data.aggregation = Rp().getDefaultAggregation(), y.data.maxDataPoints = Zt.DEFAULT_MAX_RECORDS;
                        const t = Rp().getDefaultPeriod();
                        q(t) && (y.display.period = t)
                    }
                } else y.data.aggregation = {
                    unit: "Day"
                }, s(Vd) && (y.data.maxDataPoints = Zt.US_TRADING_DAYS_PER_YEAR), y.display.period = s(Ud) ? "P9M" : "P1Y10D";
            const v = new Map([
                ['..plots{.type === "Study"}', t => {
                    const e = fi(pi(t.study));
                    return s(Fd) || s(Ud) || s(Vd) || s(kd) && e ? Zt.NULL_OBJECT : t
                }],
                ['..plots{.type === "BalanceSheet" || .type === "IncomeStatement"}', t => s(Hd) ? (t.symbol = a, t) : Zt.NULL_OBJECT],
                ["..plots{..events}", t => (s(Hd) || delete t.events, t)]
            ]);
            for (const [t, e] of v) y = bi(y, t, e);
            return u && !g && (y = _d(y, {
                type: r,
                curves: [{}]
            })), y = Zi(y), y
        };

        function jd(t, e) {
            if (!((i = t).annotations && i.annotations.length > 0)) return;
            var i;
            let n = e.annotations || [];
            e.annotations = n.concat(t.annotations)
        }
        class Gd {
            constructor(t) {
                this.accessor = t, this.defaultTool = Jh("Default"), this._activeTool = this.defaultTool, this.tooltipEnabled = !0, this.timeline = new Zu(this), this.sentInitialLoadNotification = !1
            }
            getModel() {
                return this.model
            }
            get isEmpty() {
                return !q(this.model)
            }
            fromModel(t) {
                q(this.model) && this.allPlots.forEach(t => t.shutdown()), this.sentInitialLoadNotification = !1, this.clearSelection(), this.model = t;
                let e = J(t);
                this.data = e.data, this.data.aggregation = Ni(e.data.aggregation), this.display = e.display, q(this.display.period) && (this.display.period = ct(this.display.period)), this.panes = e.panes.map(t => {
                    const e = new md;
                    return e.presenter = this, e.fromModel(t), e
                }, this), this.allPlots.forEach(t => t.initialize()), this.timeline.invalidate(), this.reinitializeView()
            }
            closeView() {
                q(this.view) && (this.view.shutdown(), this.view = null)
            }
            reinitializeView() {
                q(this.view) ? this.view.reinitialize() : (this.view = new Ed, this.view.initialize(this)), go.a.publish(nn.CH_RECREATED, this.accessor.elementId)
            }
            getCacheableEntities(t) {
                this.isEmpty || this.allPlots.map(e => e.getCacheableEntities(t))
            }
            get activeTool() {
                return this._activeTool
            }
            set activeTool(t) {
                q(this._activeTool.deactivated) && this._activeTool.deactivated(this), this._activeTool = t, q(this._activeTool.activated) && this._activeTool.activated(this), go.a.publish(nn.TL_CHANGED, this)
            }
            get mainPlot() {
                return this.allPlots.find(t => t.main)
            }
            get mainAxis() {
                return this.mainPlot.axis
            }
            get mainPane() {
                return this.mainAxis.pane
            }
            get allAxes() {
                const t = [];
                return this.panes.forEach(e => {
                    e.axes.forEach(e => {
                        t.push(e)
                    })
                }), t
            }
            get allAnnotations() {
                const t = [];
                return this.allAxes.forEach(e => {
                    e.annotations.forEach(e => {
                        t.push(e)
                    })
                }), t
            }
            get allPlots() {
                const t = [];
                return this.allAxes.forEach(e => {
                    e.plots.forEach(e => {
                        t.push(e)
                    })
                }), t
            }
            findAxis(t) {
                return this.allAxes.find(e => e.id === t)
            }
            findPlot(t) {
                return this.allPlots.find(e => e.id === t)
            }
            get allCurves() {
                const t = [];
                return this.allPlots.forEach(e => {
                    e.curves.forEach(e => {
                        t.push(e)
                    })
                }), t
            }
            findCurve(t) {
                return this.allCurves.find(e => e.id === t)
            }
            fixupDensityForForwards(t) {
                if (t.hasData) {
                    const e = t.container.size;
                    e > 0 && (this.display.density = e)
                }
            }
            onSeriesChanged(t, e) {
                if (!this.view || !this.allPlots) return;
                const i = e.series,
                    n = t => t.timeSeries === i || t.eventsSeries === i,
                    s = this.allPlots.find(n);
                if (!q(s)) return;
                const r = q(s) && s.main;
                let o = !1,
                    a = !1;
                const l = q(e.index) ? i.container.getTimeData()[e.index] : null,
                    c = t === nn.TS_EVENTSCHANGED,
                    u = this.view.xAxis.xScale;
                if (t === nn.TS_MANYCHANGED || c) {
                    if (r && this.data.checkRange) {
                        if (q(this.display.xAxis.visibleRange)) return void this.accessor.change({
                            id: "Period",
                            context: {
                                range: this.display.xAxis.visibleRange
                            }
                        });
                        delete this.data.checkRange
                    }
                    if (s.type === y.Forward && this.fixupDensityForForwards(i), e.part === C.Tail) {
                        const t = j(this.timeline, l, Number, Ku);
                        this.view.xAxis.shouldScrollIntoView(t) && u.shiftBars(e.count)
                    }
                    this.timeline.invalidate(), o = !0
                } else if (t === nn.TS_DATAPOINTADDED) {
                    const t = this.timeline.mergeDateIntoTimeline(l); - 1 != t && this.view.xAxis.shouldScrollIntoView(t) ? (u.shiftBars(1), o = !0) : a = !0
                } else t === nn.TS_DATAPOINTCHANGED && (a = !0);
                if (!c && n(this.mainPlot) && i.hasData && 0 === i.container.size && go.a.publish(nn.CH_NODATAFORMAINSYMBOL, this.accessor), o && this.view.recalculateLayout(), a) {
                    o && Op("Performance : redundant call to recompute price domains (layout recalculation took care of this)", "warn"), this.allAxes.filter(t => t.plots.includes(s)).forEach(t => {
                        t.setDomain(), q(l) && t.updateFullDomain(l)
                    })
                }
                if (!this.sentInitialLoadNotification && t === nn.TS_MANYCHANGED) {
                    if (this.allPlots.every(t => t.timeSeries && t.timeSeries.hasData)) {
                        this.sentInitialLoadNotification = !0, go.a.publish(nn.CH_ALL_DATA_PROJECTED, this.accessor);
                        const t = this.display.period === Zt.FIFTY_YEARS_MILLIS;
                        this.mainPlot && (this.mainPlot.isAnnual || t) && (u.fitAllData = !0, u.adjustDomain())
                    }
                }
                this.view.redraw()
            }
            onMetaChanged(t, e) {
                t === nn.MD_CHANGED && this.view && this.allPlots && this.allPlots.find(t => t.id === e.plot.id) && (this.view.recalculateLayout(), this.view.redraw())
            }
            onStreamingUpdates(t) {
                this.view && this.allPlots.some(e => t.includes(e.metaData.symbol) && e.showPrevious) && this.view.redraw()
            }
            getStreamingSubscription() {
                return Rp().getRecordSource().subject.pipe(yo(t => t.filter(t => t.topic === nn.RT_QUOTE).map(t => t.data.symbol)), Xn(t => t.length > 0)).subscribe(this.onStreamingUpdates.bind(this))
            }
            initialize(t) {
                if (!Wt("#".concat(t))) throw new Error("There is no element ".concat(t, " in the DOM"));
                this.renderTo = t, this.seriesChangedToken = go.a.subscribe(nn.TS_ALL, this.onSeriesChanged.bind(this)), this.metaChangedToken = go.a.subscribe(nn.MD_ALL, this.onMetaChanged.bind(this)), this.streamingSubscription = this.getStreamingSubscription()
            }
            shutdown() {
                return go.a.unsubscribe(this.seriesChangedToken), go.a.unsubscribe(this.metaChangedToken), q(this.streamingSubscription) && this.streamingSubscription.unsubscribe(), this.allPlots.forEach(t => t.shutdown()), this.model = null, this.closeView(), go.a.publish(nn.CH_SHUTDOWN, this.accessor.elementId), !0
            }
            fireSelectionChanged() {
                go.a.publish(nn.CH_ANNSELECTIONCHANGED, this)
            }
            setSelection(t) {
                this.selectedAnnotation = t, this.selectedAnnotation.isSelected = !0, this.selectedAnnotation.requestRedraw(), this.fireSelectionChanged()
            }
            clearSelection() {
                q(this.selectedAnnotation) && (this.selectedAnnotation.isSelected = !1, this.selectedAnnotation.requestRedraw(), this.selectedAnnotation = void 0), this.fireSelectionChanged()
            }
            resetActiveTool() {
                this.activeTool = this.defaultTool
            }
            print(t = {}) {
                const e = Yt(document.body, "iframe");
                e.src = "", e.style.display = "none", e.onload = () => {
                    const {
                        title: i
                    } = t, n = this.exportImage({
                        title: i
                    }), s = new Image;
                    var r;
                    s.src = n.data, s.style.width = "100%", e.contentDocument.body.appendChild(s), (r = s, new Promise(t => {
                        const e = () => {
                            r && void 0 !== r.naturalWidth && 0 !== r.naturalWidth && r.complete ? t() : setTimeout(e, 150)
                        };
                        e()
                    })).then(() => {
                        const t = e.contentWindow;
                        e.focus(), t.print(), e.remove()
                    })
                }
            }
            setTitle(t, e = !1) {
                this.view.title.update(t), this.view.redraw(e)
            }
            enableTooltip(t) {
                this.tooltipEnabled = t;
                const e = this.display.tooltip.mode === Zt.TOOLTIP_CARDS;
                !t && e && this.hideCards()
            }
            get showTooltip() {
                return this.display.tooltip.visible && this.tooltipEnabled
            }
            hideCards() {
                const t = this.display.tooltip;
                t.visible && t.mode === Zt.TOOLTIP_CARDS && (this.view.refreshLastBarTooltipValues(this.mainPlot), $t("#".concat(this.renderTo, " .bcharts-card")).forEach(t => {
                    t.style.display = "none"
                }))
            }
            handleAnnotationChange(t) {
                if ("List" === t.id) return this.allAnnotations.map(t => ({
                    id: t.name,
                    uid: t.id,
                    visible: t.visible
                }));
                const e = this.allAnnotations.find(e => e.id === t.uid);
                if (void 0 !== e) {
                    const i = e.axis,
                        n = i["".concat(t.id.toLowerCase(), "Annotation")];
                    if ("function" == typeof n) return void n.call(i, e, t)
                }
                throw new Error("Unknown sub-action ".concat(t.id, " for action ").concat(Zt.ANN_ACTION_ID))
            }
            getPlotInfoFromDomId(t) {
                const e = t.attributes["data-plot-id"].value,
                    i = this.allPlots,
                    n = i.findIndex(t => t.id === e);
                return {
                    type: y[i[n].type],
                    index: n
                }
            }
            getSimplePlot(t, e) {
                return this.accessor.change({
                    id: "Plot",
                    context: {
                        id: Zt.ACTION_GET,
                        type: t,
                        index: e
                    }
                })[0]
            }
            onCardClicked(t) {
                const e = this.getPlotInfoFromDomId(t),
                    i = this.getSimplePlot(e.type, e.index);
                go.a.publish(nn.CH_CARDPLOTCLICKED, {
                    chart: this.accessor,
                    plot: i
                })
            }
            deletePlotClicked(t) {
                const e = this.getPlotInfoFromDomId(t),
                    i = this.getSimplePlot(e.type, e.index);
                this.accessor.change({
                    id: "Plot",
                    context: {
                        id: "Delete",
                        type: e.type,
                        index: e.index
                    }
                }), go.a.publish(nn.CH_CARDPLOTREMOVED, {
                    chart: this.accessor,
                    plot: i
                })
            }
            onMovePaneClicked(t) {
                const e = parseInt(t.attributes["data-pane"].value),
                    i = "down" === t.attributes["data-dir"].value,
                    n = e + (i ? 1 : 0),
                    s = e - (i ? 0 : 1);
                setTimeout(() => {
                    this.accessor.change({
                        id: "MovePane",
                        context: {
                            from: n,
                            to: s
                        }
                    }), go.a.publish(nn.CH_PANESREORDERED, this.accessor)
                })
            }
            onAnnotationsUpdated(t, e = !1) {
                const i = this.allAxes.indexOf(t),
                    n = t.annotations.map(t => t.toModel());
                let s = function(t, e) {
                    const i = "..axes[".concat(e.axisIndex, "]");
                    return bi(t, i, t => (t.annotations = e.annotations, t))
                }(this.model, {
                    axisIndex: i,
                    annotations: n
                });
                try {
                    this.model = Ki(s, Zt.CHART_SCHEMA)
                } catch (t) {
                    Op("Cannot update annotation (corrupts definition), error is: ".concat(t.message), "error")
                }
                e && this.view.draw(), go.a.publish(nn.CH_ANNOTATIONCHANGED, this.accessor)
            }
            onPaneHeightsUpdated() {
                const t = (t, e) => t + e,
                    e = this.panes.map(t => t.getBounds().height).reduce(t, 0),
                    i = this.panes.map(t => t.height).reduce(t, 0),
                    n = this.panes.map((t, n) => ({
                        index: n,
                        relativeHeight: X(t.getBounds().height / e * i, 4)
                    }));
                this.model = function(t, {
                    paneHeights: e
                }) {
                    let i = t;
                    return e.forEach(e => {
                        var n;
                        i = bi(t, (n = e.index, "..panes[".concat(n, "]")), t => (t.height = e.relativeHeight, t))
                    }), i
                }(this.model, {
                    paneHeights: n
                }), go.a.publish(nn.CH_PANEHEIGHTSCHANGED, this.accessor)
            }
            exportData() {
                const t = this.allPlots;
                if (!t.every(t => q(t.timeSeries) && t.timeSeries.hasData)) return "No data to export";
                const e = t => {
                        let e = [];
                        return t.main && (e.push(en.DateTime), this.data.aggregation.isMultiContract && e.push(en.Symbol)), e.concat(...t.curves.map(t => t.fields))
                    },
                    i = this.data.aggregation.isEndOfDay ? Zt.FMT_ISO_DATE_ONLY : Zt.FMT_EXPORT_ALL_BUT_MILLIS,
                    n = {},
                    s = this.timeline.firstSeriesIndex,
                    r = this.timeline.lastSeriesIndex,
                    o = (r, o) => {
                        const a = r - s,
                            l = t => {
                                if (-2 === a) {
                                    const i = new Array(e(t).length).fill("");
                                    return i[0] = (t => '"'.concat(y[t.type], ": ").concat(t.title, '"'))(t), i.join(",")
                                }
                                if (-1 === a) return e(t).map(t => '"'.concat(t.name, '"')); {
                                    const s = t.timeSeries.container,
                                        r = s.getData(en.DateTime),
                                        a = n[t.id] || 0,
                                        l = j(r, +o, Number, W, a),
                                        c = +o == +r[l];
                                    return c && (n[t.id] = l), e(t).map(t => {
                                        return c ? (e = t, n = s.getData(t)[l], e === en.DateTime ? js(n, i) : n) : "";
                                        var e, n
                                    })
                                }
                            };
                        return [].concat(...t.map(t => l(t))).join(",")
                    };
                let a = [];
                for (let t = s - 2; t <= r; t++) a.push([o(t, this.timeline.at(t))]);
                return a.join("\n")
            }
            exportImage(t = {}) {
                const {
                    width: e,
                    height: i,
                    mainCanvas: n
                } = this.view, {
                    width: s,
                    height: r,
                    title: o
                } = t, a = q(o), l = q(s, r);
                let c = a ? this.view.title.read() : null;
                a && this.setTitle(o, !l), l && this.view.setSize(s, r, !0);
                const u = n.toDataURL();
                return a && this.setTitle(c, !l), l && this.view.setSize(e, i, !0), {
                    width: s || e,
                    height: r || i,
                    data: u
                }
            }
            getDataStats() {
                const t = this.mainPlot.timeSeries.container;
                if (!q(t) || 0 === t.size) return null;
                const e = t.getTimeData();
                return {
                    dataRange: {
                        from: B(e).getTime(),
                        to: V(e).getTime()
                    },
                    barCount: t.size
                }
            }
        }
        var zd = function(t, e) {
            let i = qd(e.index);
            if (Xd(t, i).type !== e.type) return t;
            return Zi(bi(t, i, t => Zt.NULL_OBJECT))
        };
        var Yd = function(t, {
            main: e,
            type: i,
            index: n
        }, s) {
            const r = Ti(t, "..panes").map((t, e) => {
                const i = 1 === Ti(t, "..plots{.main === true}").length;
                return Ti(t, "..axes").map((t, n) => {
                    const r = 1 === Ti(t, "..plots{.main === true}").length;
                    return Ti(t, "..plots").map(t => {
                        const o = function(t, e, i, n) {
                            const s = y[t.type];
                            let r = {
                                curves: J(t.curves),
                                type: t.type
                            };
                            const o = (t, e) => {
                                    q(t[e]) ? r[e] = t[e].map(t => J(t)) : r[e] = []
                                },
                                a = (t, e) => {
                                    !0 === e.main && (t.main = !0)
                                };
                            switch (s) {
                                case y.Symbol:
                                    r.title = t.symbol, a(r, t);
                                    break;
                                case y.Study: {
                                    o(t, "inputs");
                                    const n = pi(t.study),
                                        s = r.inputs,
                                        a = 0 === s.length ? "" : " (".concat(s.map(t => t.value).join(", "), ")"),
                                        l = r.curves.map(t => Number(t.shift)).filter(t => t > 0),
                                        c = 0 === l.length ? "" : " [".concat(l.join(", "), "]");
                                    r.title = "".concat(n.id).concat(a).concat(c), r.studyId = n.id, o(t, "levels"), o(t, "bands"), r.placement = e ? i ? "overlay" : "withMain" : "standalone";
                                    break
                                }
                                case y.BalanceSheet:
                                case y.IncomeStatement: {
                                    const e = en[t.curves[0].fields[0]];
                                    r.title = "".concat(e.name, " (").concat(t.fundamental.substring(0, 1), ")"), r.fundamentalId = e.id, r.frequency = t.fundamental;
                                    break
                                }
                                case y.Expression:
                                    r.title = t.expression, a(r, t);
                                    break;
                                case y.Forward:
                                case y.Seasonal:
                                    r.title = s === y.Forward ? t.forward : t.seasonal, q(n) && (r.subtitles = n.allPlots.filter(t => t.type === s).map(t => t.title)), o(t, "offsets"), a(r, t);
                                    break;
                                default:
                                    throw new Error("Unexpected plot type")
                            }
                            return r
                        }(t, i, r, s);
                        return o.paneIndex = e, o.axisIndex = n, o
                    })
                })
            }).flat(2).map((t, e) => (t.index = e, t));
            if (e) return r.filter(t => t.main);
            if (q(i)) {
                const t = r.filter(t => t.type === i);
                return q(n) ? t.filter(t => t.index === n) : t
            }
            return r
        };

        function $d(t, e) {
            ! function(t) {
                const e = y[t.type];
                return e === y.Forward || e === y.Seasonal
            }(t) ? function(t, e) {
                if (i = e, void 0 !== i && e.length === t.length)
                    for (let i = 0; i < t.length; ++i) {
                        et(t[i], e[i]);
                        const n = e[i].shift;
                        q(n) && (t[i].shift = n)
                    }
                var i
            }(t.curves, e.curves) : q(e.curves) && (t.curves = e.curves);
            const i = y[e.type];
            i === y.Study ? (! function(t, e, i) {
                const n = nt(t),
                    s = nt(e);
                et(n, s);
                const r = (o = s, Object.keys(o).map(t => ({
                    name: t,
                    value: o[t]
                })));
                var o;
                r.length > 0 && (i.inputs = r)
            }(t.inputs, e.inputs, t), ["bands", "levels"].forEach(i => function(t, e, i) {
                e[i] && (t[i] = e[i])
            }(t, e, i))) : i !== y.BalanceSheet && i !== y.IncomeStatement || !e.frequency ? i === y.Expression ? q(e.expression) && (t.expression = e.expression) : i === y.Forward ? (q(e.offsets) && (t.offsets = e.offsets), q(e.forward) && (t.forward = e.forward)) : i === y.Seasonal && (q(e.offsets) && (t.offsets = e.offsets), q(e.seasonal) && (t.seasonal = e.seasonal)) : t.fundamental = e.frequency
        }
        const qd = t => "..plots[".concat(t, "]");

        function Xd(t, e) {
            const i = Ti(t, e);
            return 1 !== i.length ? null : i[0]
        }
        const Kd = ["withMain", "overlay", "standalone", "clone"];

        function Zd(t, e, i) {
            let n = null;
            const {
                mainPane: s,
                mainAxis: r
            } = Rd(t);
            switch (e) {
                case "withMain":
                    n = rp(s, r);
                    break;
                case "overlay":
                    n = r;
                    break;
                case "standalone": {
                    n = {
                        plots: []
                    };
                    const e = {
                        axes: [],
                        height: t.display.chart.newPaneHeight
                    };
                    e.axes.push(n), t.panes.push(e);
                    break
                }
                case "clone":
                    if ("number" == typeof i) {
                        const e = {
                                main: !1,
                                index: i,
                                type: y[y.Study]
                            },
                            s = Yd(t, e).find(t => t.index === e.index);
                        n = Ti(t, "..panes[".concat(s.paneIndex, "]..axes[").concat(s.axisIndex, "]"))[0]
                    }
            }
            return n
        }
        const Qd = [{
            fields: [en.Close.id],
            colors: ["#888"],
            style: "Line",
            lineWidth: 2,
            varyColorPerBar: !1,
            visible: !0
        }];
        let Jd = 0;
        const tp = ["#0d223a", "#8abc21", "#910000", "#2f7ed8"],
            ep = "Symbol",
            ip = "Expression";

        function np(t, e) {
            let i = {
                curves: [{
                    colors: tp.slice(Jd, Jd + 1),
                    fields: t ? [en.Last.id] : [en.Close.id],
                    style: "Line",
                    varyColorPerBar: !1,
                    lineWidth: 2
                }]
            };
            return delete e.leftScale, it(i, e), q(e.curves) && et(i.curves, e.curves), Jd += 1, i
        }
        const sp = '..plots{.type === "Symbol" && .main !== true}';

        function rp(t, e) {
            let i = t.axes.find(t => t !== e);
            return q(i) || (i = {
                plots: []
            }, t.axes.push(i)), i
        }
        const op = () => Zt.NULL_OBJECT;

        function ap(t) {
            return bi(t, "..annotations", op)
        }

        function lp(t) {
            return Zi(bi(t, '..plots{.type === "Symbol" && .main !== true}', op))
        }

        function cp(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function up(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? cp(Object(i), !0).forEach((function(e) {
                    hp(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : cp(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function hp(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        let dp = {
            Symbol: Wd,
            MainPlot: Wd,
            Aggregation: function(t, e) {
                let i = Ni(t.data.aggregation).isTick,
                    n = Ni(e).isTick,
                    s = bi(t, "".concat(Id, ".curves[0]"), t => {
                        let e = [en.Open.id, en.High.id, en.Low.id, en.Close.id, en.Change.id].slice();
                        if (!n && i) {
                            const i = Rp().getDefaultMultiFieldCurve();
                            if (null !== i) return i;
                            t.fields = e, t.style !== l[l.Candlestick] && t.style !== l[l.OHLC] && t.style !== l[l.HLC] && (t.style = l[l.Candlestick], t.colors = ["#ff6961", "#77dd77"], t.varyColorPerBar = !0), t.style === l[l.HLC] && t.fields.splice(0, 1)
                        } else n && !i && (t.fields = [en.Last.id, en.Change.id], t.style = l[l.Line], t.colors = ["#0055cc"], t.varyColorPerBar = !1);
                        return t
                    });
                return s = bi(s, '..plots{.type === "Study" && .study === "VOL"}.curves{.fields === "TradeSize" || .fields === "Volume"}', t => (t.fields = n ? [en.TradeSize.id] : [en.Volume.id], t)), ot(s.data.aggregation, e), ji(s), Wi(s),
                    function(t) {
                        const e = Rp().getDefaultDensity();
                        q(e) && (t.display.density = e)
                    }(s), Bi(s), s
            },
            Period: function(t, e, i) {
                const n = q(e.period),
                    s = q(e.range),
                    r = q(e.density),
                    o = t => t ? 1 : 0;
                if (o(n) + o(s) + o(r) > 1) throw new Error("Cannot set more than one of: period, range, density.");
                if (n && (t.display.period = e.period, Wi(t), Gi(t)), s)
                    if (q(t.display.period) && !zi(t.display.period) || (t.display.xAxis.visibleRange = e.range), ji(t), Gi(t), q(i)) {
                        const n = function(t) {
                                const e = t.getDataStats();
                                return null === e ? null : e.dataRange
                            }(i),
                            s = Ni(t.data.aggregation),
                            r = i.data.aggregation,
                            o = (l = r, (a = s).unit !== l.unit || a.size !== l.size || a.spec !== l.spec || !q(n));
                        let c = o;
                        if (!o) {
                            const {
                                from: t,
                                to: i
                            } = n, {
                                from: s,
                                to: r
                            } = e.range;
                            c = s < t || s > i || r < t || r > i
                        }
                        c && (t.data.range = e.range), delete t.data.checkRange
                    } else t.data.checkRange = !0;
                var a, l;
                return r && (t.display.density = e.density, Wi(t), ji(t), i && (i.hasUserCustomizedRange = !1)), (n || s || r) && Bi(t), t
            },
            Crosshair: function(t, e) {
                let [i, n] = Z(e.crosshair), s = bi(t, ".display.xAxis.crosshair", t => (t.enabled = i, t));
                return bi(s, ".display.yAxis.crosshair", t => (t.enabled = n, t))
            },
            Tooltip: function(t, {
                visible: e,
                mode: i
            }) {
                return bi(t, ".display.tooltip", t => (null != e && (t.visible = e), i && (t.mode = i), t))
            },
            Events: function(t, e) {
                return bi(t, Id, t => {
                    if ("Symbol" === t.type) {
                        if (!Zt.EVENTS.some(t => !0 === e[t])) return void 0 !== t.events && delete t.events, t;
                        t.events = t.events || {}, Zt.EVENTS.forEach(i => {
                            ((t, e, i) => {
                                t[e] = t[e] || {}, t[e].show = i
                            })(t.events, i, e[i] || !1)
                        })
                    }
                    return t
                })
            },
            Scale: function(t, e) {
                let i = bi(t, "..axes[0]", t => (g.hasOwnProperty(e.scale) && (t.scale = e.scale), t));
                i = bi(i, ".display.xAxis", t => (q(e.marginBars) && (t.marginBars = e.marginBars), t));
                return i = bi(i, ".display.yAxis", t => ((q(e.minPadding) || q(e.maxPadding)) && Op("The 'minPadding' and 'maxPadding' are deprecated (ignored)", "warn"), q(e.preventLabelOverlap) && (t.preventLabelOverlap = e.preventLabelOverlap), q(e.snapAnnotationsToPrices) && (t.snapAnnotationsToPrices = e.snapAnnotationsToPrices), t)), i
            },
            Other: {
                Update: function(t, e) {
                    let i = t;
                    if (q(e.comparisonMode) && "string" == typeof e.comparisonMode && m.hasOwnProperty(e.comparisonMode) && (i = bi(t, "..panes{".concat(Id, "}.axes"), t => (t.comparison = e.comparisonMode, t)), e.comparisonMode !== m[m.None] && (i = bi(i, "..panes{".concat(Id, '}..plots{.type === "Symbol"}.curves{.style !== "Line"}'), t => Ld({
                        style: "Line"
                    }, "Symbol")))), q(e.gridLines)) {
                        const [t, n] = Z(e.gridLines);
                        i = bi(i, ".display.xAxis.gridLines", e => (e.visible = t, e)), i = bi(i, ".display.yAxis.gridLines", t => (t.visible = n, t))
                    }
                    if (q(e.minorGridLines)) {
                        const [, t] = Z(e.minorGridLines);
                        i = bi(i, ".display.yAxis.minorGridLines", e => (e.visible = t, e))
                    }
                    return q(e.newPaneHeight) && "number" == typeof e.newPaneHeight && (i = bi(i, ".display.chart{.newPaneHeight > 0}", t => (t.newPaneHeight = e.newPaneHeight, t))), q(e.showNavigator) && "boolean" == typeof e.showNavigator && (i = bi(t, ".display.scrollbar", t => (t.visible = e.showNavigator, t))), q(e.plotHover) && "boolean" == typeof e.plotHover && (i = bi(t, ".display.chart", t => (t.plotHover = e.plotHover, t))), q(e.showLastValue) && "string" == typeof e.showLastValue && (i = bi(t, ".display.yAxis", t => (t.showLastValue = e.showLastValue, t))), q(e.showMinMaxArc) && "boolean" == typeof e.showMinMaxArc && (i = bi(t, ".display.chart", t => (t.showMinMaxArc = e.showMinMaxArc, t))), q(e.showGoToLatest) && "boolean" == typeof e.showGoToLatest && (i = bi(t, ".display.chart", t => (t.showGoToLatest = e.showGoToLatest, t))), i
                },
                Get: function(t, e, i) {
                    const n = Ti(t, "..panes{".concat(Id, "}.axes.comparison"))[0],
                        s = t.display,
                        r = (t, e) => Q(t, !1, e, "visible"),
                        o = t => function(t, e) {
                            const i = t => q(t) && "boolean" == typeof t && t,
                                n = i(t),
                                s = i(e);
                            return n && s ? "both" : n ? "vertical" : s ? "horizontal" : "none"
                        }(r(s.xAxis, t), r(s.yAxis, t));
                    return {
                        comparison: n,
                        gridLines: o("gridLines"),
                        minorGridLines: o("minorGridLines"),
                        newPaneHeight: s.chart.newPaneHeight,
                        showLastValue: s.yAxis.showLastValue
                    }
                }
            },
            Plot: {
                Add: function(t, e) {
                    switch (y[e.type]) {
                        case y.Study:
                            return function(t, e) {
                                const i = pi(e.studyId);
                                if (void 0 === i) throw new Error("Unknown study with id ".concat(e.studyId));
                                const n = Nd(t),
                                    s = fi(i);
                                if (n.type === y[y.Expression] && s) throw new Error('Cannot add study "'.concat(i.meta.title, '" because it cannot be based on an expression (current main plot); study needs more than "OHLC" fields to be calculated.'));
                                const r = e.placement || (i.meta.overlay ? "overlay" : "standalone");
                                let o = {
                                    type: y[y.Study],
                                    study: e.studyId
                                };
                                void 0 !== e.curves && (o.curves = i.defaults.curves), $d(o, e);
                                const a = Zd(t, r, e.cloneIndex);
                                return q(a) && a.plots.push(o), t
                            }(t, e);
                        case y.IncomeStatement:
                        case y.BalanceSheet:
                            return function(t, e) {
                                const i = Nd(t);
                                if (i.type !== y[y.Symbol]) throw new Error("Cannot add fundamental to the chart whose main plot is not a Symbol plot.");
                                let n = i.symbol,
                                    s = {
                                        curves: [{
                                            fields: [e.fundamentalId],
                                            lineWidth: 2,
                                            style: "Line",
                                            varyColorPerBar: !1,
                                            visible: !0,
                                            colors: ["#888"]
                                        }],
                                        fundamental: c[c.Quarter],
                                        symbol: n,
                                        type: p[en[e.fundamentalId].category]
                                    };
                                return $d(s, e), t.panes.push({
                                    axes: [{
                                        plots: [s]
                                    }]
                                }), t
                            }(t, e);
                        case y.Expression:
                            return function(t, e) {
                                const i = Nd(t);
                                let n = {
                                    curves: y[i.type] === y.Symbol ? J(i.curves) : Qd,
                                    expression: "",
                                    type: y[y.Expression]
                                };
                                return $d(n, e), t.panes.push({
                                    axes: [{
                                        plots: [n]
                                    }]
                                }), t
                            }(t, e);
                        default:
                            throw new Error("Only fundamentals, studies and expressions can be added at the moment")
                    }
                },
                Get: Yd,
                Delete: zd,
                Update: function(t, e, i) {
                    if (q(e.placement) && !Kd.includes(e.placement)) throw new Error("Unknown placement: ".concat(e.placement));
                    const n = e.main ? Id : qd(e.index),
                        s = Xd(t, n);
                    if (!q(s) || q(e.type) && s.type !== e.type) return t;
                    if (s.main && function(t) {
                        const e = y[t.type];
                        return e === y.Symbol || e === y.Expression
                    }(s)) return e.type || (e.type = s.type), _d(t, e); {
                        let s = bi(t, n, t => ($d(t, e), t));
                        const r = Yd(s, e, i).find(t => t.index === e.index);
                        if (!q(r)) return t;
                        if (!(e.type === y[y.Study] && q(e.placement) && e.placement !== r.placement)) return s;
                        const o = Xd(s, n);
                        s = zd(s, e);
                        const a = Zd(s, e.placement);
                        return null !== a && a.plots.push(o), s
                    }
                }
            },
            Compare: function(t, e) {
                const i = function(t) {
                        return q(t.symbols) ? (Op("Use of 'symbols' for Compare API is deprecated. Please see docs for the latest version which supports more plot types", "warn"), t.symbols.map(t => (t.type = ep, t))) : t.plots
                    }(e),
                    {
                        yes: n,
                        no: s
                    } = H(i, t => t.leftScale),
                    {
                        mainPane: r,
                        mainAxis: o
                    } = Rd(t),
                    a = rp(r, o),
                    l = t => ![ep, ip].includes(t.type);
                a.plots = a.plots.filter(l);
                const c = o.plots.filter(t => t.main || l(t)),
                    u = "Tick" === t.data.aggregation.unit;
                Jd = 0;
                const h = O(np, u);
                return o.plots = c.concat(s.map(h)), n.length > 0 && (a.plots.push(...n.map(h)), a.comparison = o.comparison), Zi(t)
            },
            Annotation: {
                Get: function(t, e, i) {
                    const n = Ti(t, "..panes").map((t, e) => Ti(t, "..axes").map((t, i) => Ti(t, "..annotations").map(t => up({}, t, {
                        paneIndex: e,
                        axisIndex: i
                    })))).flat(2).map((t, e) => up({}, t, {
                        index: e
                    }));
                    return q(e.index) && Number.isFinite(e.index) ? e.index < n.length ? [n[e.index]] : Zt.EMPTY_ARRAY : n
                }
            },
            MovePane: function(t, e) {
                let i = t.panes;
                return i.splice(e.to, 0, i.splice(e.from, 1)[0]), t
            },
            Template: function(t, e) {
                let i = J(t);
                if (e.strip.main) {
                    const t = Nd(i),
                        e = t.type.toLowerCase();
                    t[e] = Zt.PLACEHOLDER_SYMBOL_NAME
                }
                return e.strip.annotations && (i = ap(i)), e.strip.compare && (i = lp(i)), i = bi(i, ".data", t => (t.range && (delete t.range, t.checkRange = !0), t)), i
            },
            Outline: function(t, e, i) {
                const n = Yd(t, {
                        main: !0
                    }, i)[0],
                    s = n.title === Zt.PLACEHOLDER_SYMBOL_NAME,
                    r = "Symbol" === n.type,
                    o = "Expression" === n.type,
                    {
                        symbols: a
                    } = o ? $a(n.title) : {
                        symbols: s ? [] : [n.title]
                    };
                return {
                    isTemplate: s,
                    isDefinition: !s,
                    main: {
                        isSymbol: r,
                        isExpression: o,
                        symbols: a,
                        title: s ? null : n.title
                    },
                    compare: Ti(t, sp).map(t => t.symbol),
                    annotations: Ti(t, "..annotations").map(t => t.id),
                    studies: Yd(t, {
                        type: "Study"
                    }).map(t => t.title)
                }
            },
            Theme: function(t, e) {
                let i = t;
                const {
                    backgroundColor: n,
                    axis: {
                        gridLinesColor: s,
                        textColor: r,
                        crosshairColor: o,
                        gridLinesStyle: a
                    }
                } = e;
                if (n && (i = bi(t, ".display.chart", t => (t.backgroundColor = n, t))), s) {
                    const t = t => (t.color = s, t);
                    i = bi(i, ".display.xAxis.gridLines", t), i = bi(i, ".display.yAxis.gridLines", t)
                }
                if (a) {
                    const t = t => (t.dashStyle = a, t);
                    i = bi(i, ".display.xAxis.gridLines", t), i = bi(i, ".display.yAxis.gridLines", t)
                }
                if (r) {
                    const t = t => (t.textColor = r, t);
                    i = bi(i, ".display.xAxis", t), i = bi(i, ".display.yAxis", t)
                }
                if (o) {
                    const t = t => (t.color = o, t);
                    i = bi(i, ".display.xAxis.crosshair", t), i = bi(i, ".display.yAxis.crosshair", t)
                }
                return i
            }
        };

        function pp(t) {
            return "function" == typeof t
        }

        function fp(t, e) {
            return t + Math.random() * (e - t)
        }
        let mp = !1;
        const gp = new Function("d", atob("Y29uc29sZS5sb2coIlBsZWFzZSBjb250YWN0IEJhcmNoYXJ0IGluIG9yZGVyIHRvIG9idGFpbiB0aGUgbGljZW5zZSBmb3IgdGhlIGNoYXJ0IGNvbXBvbmVudC4iKTsg")),
            yp = new Function("f", atob("Zm9yIChsZXQga2V5IG9mIGYuY2hhcnRzLmtleXMoKSkgZi5yZW1vdmVDaGFydChrZXkpOyAg"));
        new Function(atob("cmV0dXJuICFbImxvY2FsaG9zdCIsICIxMjcuMC4wLjEiXS5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpOyAg"));

        function vp(t, e, i) {
            return function(t, e) {
                "Symbol" === t && Op("This API ('Symbol') has been deprecated and will be removed in the future version of the API. Please use 'MainPlot' instead (functionally equivalent)", "warn");
                let i = dp[t];
                if (!pp(i)) {
                    let t = i[e];
                    if (!pp(t) && (t = i[Zt.DEFAULT_ACCESSOR_SUBACTION], !pp(t))) throw new Error("Invalid accesor id and/or sub id");
                    return t
                }
                return i
            }(t.id, t.context.id)(e, t.context, i)
        }

        function Tp(t) {
            return {
                id: "MainPlot",
                context: t
            }
        }! function t() {
            new Date(1589649466148) < new Date && (mp || (setTimeout(gp, fp(2e3, 3e3)), mp = !0), setTimeout(() => yp(Rp()), fp(4e3, 5e3))), setTimeout(t, fp(1e4, 2e4))
        }();
        class bp {
            constructor(t = !1) {
                this.headless = t, this.presenter = t ? null : new Gd(this)
            }
            get elementId() {
                return this.headless ? null : this.presenter.renderTo
            }
            initialize(t, e) {
                if (this.headless) console.error("You cannot initialize a headless chart.");
                else if (this.presenter.initialize(t), e) {
                    const t = "string" == typeof e;
                    t && Op("Initializing the chart with symbol name is deprecated. Please use object form instead (see docs for details). This API will be removed in the future.", "warn"), e.template && this.load(e.template), delete e.template;
                    const i = t ? {
                        symbol: e
                    } : e;
                    this.change(Tp(i))
                }
            }
            shutdown() {
                if (!this.headless) {
                    const t = this.presenter.shutdown();
                    return this.presenter = null, t
                }
                return !1
            }
            annotate(t, e = null, i = null) {
                if (!this.headless)
                    if (q(t)) {
                        const n = Jh(t, !1, e, i, this.presenter);
                        n.isDrawingAnnotation && this.presenter.view.setCursor(b.Crosshair), this.presenter.activeTool = n
                    } else this.presenter.resetActiveTool()
            }
            getDefaultTemplate() {
                return J(Rp().template)
            }
            get model() {
                return (this.headless ? this._model : this.presenter.getModel()) || this.getDefaultTemplate()
            }
            asTemplate(t = {
                main: !0,
                annotations: !1,
                compare: !1
            }) {
                return this.change({
                    id: Zt.ACTION_TEMPLATE,
                    context: {
                        strip: t
                    }
                })
            }
            change(...t) {
                go.a.publish(nn.CH_API_ACTIONS_RECEIVED, {
                    chart: this,
                    actions: t
                });
                const e = Rp().config.validateInput,
                    i = t.map(t => e ? Ki(t, Zt.ACCESSOR_SCHEMA) : t);
                if (1 === i.length) {
                    const t = i[0];
                    if (t.id === Zt.ACTION_TEMPLATE || t.context.id === Zt.ACTION_GET) return vp(t, this.model, this.presenter);
                    if (!this.headless && t.id === Zt.ANN_ACTION_ID) return this.presenter.handleAnnotationChange(t.context)
                }
                let n = this.model;
                i.forEach(t => {
                    if (n = vp(t, n, this.presenter), !q(n)) throw new Error("Forgot to return model from accessor")
                }), this.fromModel(n)
            }
            fromModel(t) {
                let e = Ki(t, Zt.CHART_SCHEMA);
                this.headless ? this._model = e : this.presenter.fromModel(e)
            }
            load(t, e = {
                keepOldAnnotations: !1,
                keepNewAnnotations: !0,
                keepOldCompare: !1,
                keepNewCompare: !0,
                keepOldAggregation: !1,
                keepNewBarWidth: !1
            }) {
                let i = JSON.parse(t),
                    n = this.model;
                if (e.keepNewAnnotations || (i = ap(i)), e.keepOldAnnotations && (i = function(t, e) {
                    const {
                        mainAxis: i
                    } = Rd(t), {
                        mainAxis: n
                    } = Rd(e);
                    jd(i, n);
                    const s = t => Ti(t, '..plots{.type==="Study"}.study')[0],
                        r = Ti(t, '..axes{..plots{.type==="Study"}}').filter(t => t !== i),
                        o = Ti(e, '..axes{..plots{.type==="Study"}}').filter(t => t !== n);
                    return r.forEach(t => {
                        const e = s(t),
                            i = o.find(t => e === s(t));
                        q(i) && jd(t, i)
                    }), e
                }(n, i)), e.keepNewCompare || (i = lp(i)), e.keepOldCompare && (i = function(t, e) {
                    const i = Ti(t, sp),
                        n = Ti(e, sp),
                        s = Math.max(0, 4 - n.length);
                    if (0 === s) return e;
                    const r = i.filter(t => !n.find(e => t.symbol === e.symbol)).slice(0, s);
                    if (0 === r.length) return e;
                    const {
                        mainPane: o,
                        mainAxis: a
                    } = Rd(e), {
                        mainAxis: l
                    } = Rd(t);
                    return r.forEach(t => {
                        if (l.plots.includes(t)) a.plots.push(t);
                        else {
                            rp(o, a).plots.push(t)
                        }
                    }), e
                }(n, i)), e.keepOldAggregation) {
                    const t = {
                            id: Zt.ACTION_AGGREGATION,
                            context: n.data.aggregation
                        },
                        s = i.display.density;
                    i = vp(t, i, this.presenter), e.keepNewBarWidth && q(s) && (i.display.density = s)
                }
                this.fromModel(i)
            }
            save() {
                return JSON.stringify(this.model)
            }
            reset() {
                const t = this.getDefaultTemplate();
                if (this.headless) this._model = t;
                else if (this.presenter.getModel()) {
                    const e = this.presenter.mainPlot;
                    let i = null;
                    if (e.isSymbol ? i = {
                        symbol: e.symbol
                    } : e.isExpression ? i = {
                        expression: e.expression
                    } : e.isForward ? i = {
                        forward: e.forward
                    } : e.isSeasonal && (i = {
                        seasonal: e.seasonal
                    }), q(i)) {
                        const e = vp(Tp(i), t, this.presenter);
                        this.presenter.fromModel(e)
                    }
                }
            }
            print(t = {}) {
                this.headless || this.presenter.print(t)
            }
            getSVGForExport() {
                Op("Obsolete: please use 'exportImage' method instead.", "warn")
            }
            setTitle(t) {
                this.headless || this.presenter.setTitle(t)
            }
            getPaneBounds() {
                if (!this.headless) return this.presenter.panes.map(t => t.getBounds())
            }
            exportData() {
                return this.headless ? null : this.presenter.exportData()
            }
            exportImage(t = {}) {
                return this.headless ? null : this.presenter.exportImage(t)
            }
            getDataStats() {
                return this.presenter.getDataStats()
            }
        }

        function Sp(t) {
            return t && "function" == typeof t.schedule
        }
        var Pp = function() {
                function t(t, e, i, n) {
                    this.bufferTimeSpan = t, this.bufferCreationInterval = e, this.maxBufferSize = i, this.scheduler = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new wp(t, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
                }, t
            }(),
            Ap = function() {
                return function() {
                    this.buffer = []
                }
            }(),
            wp = function(t) {
                function e(e, i, n, s, r) {
                    var o = t.call(this, e) || this;
                    o.bufferTimeSpan = i, o.bufferCreationInterval = n, o.maxBufferSize = s, o.scheduler = r, o.contexts = [];
                    var a = o.openContext();
                    if (o.timespanOnly = null == n || n < 0, o.timespanOnly) {
                        var l = {
                            subscriber: o,
                            context: a,
                            bufferTimeSpan: i
                        };
                        o.add(a.closeAction = r.schedule(Cp, i, l))
                    } else {
                        var c = {
                                subscriber: o,
                                context: a
                            },
                            u = {
                                bufferTimeSpan: i,
                                bufferCreationInterval: n,
                                subscriber: o,
                                scheduler: r
                            };
                        o.add(a.closeAction = r.schedule(Mp, i, c)), o.add(r.schedule(xp, n, u))
                    }
                    return o
                }
                return pn(e, t), e.prototype._next = function(t) {
                    for (var e, i = this.contexts, n = i.length, s = 0; s < n; s++) {
                        var r = i[s],
                            o = r.buffer;
                        o.push(t), o.length == this.maxBufferSize && (e = r)
                    }
                    e && this.onBufferFull(e)
                }, e.prototype._error = function(e) {
                    this.contexts.length = 0, t.prototype._error.call(this, e)
                }, e.prototype._complete = function() {
                    for (var e = this.contexts, i = this.destination; e.length > 0;) {
                        var n = e.shift();
                        i.next(n.buffer)
                    }
                    t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    this.contexts = null
                }, e.prototype.onBufferFull = function(t) {
                    this.closeContext(t);
                    var e = t.closeAction;
                    if (e.unsubscribe(), this.remove(e), !this.closed && this.timespanOnly) {
                        t = this.openContext();
                        var i = this.bufferTimeSpan,
                            n = {
                                subscriber: this,
                                context: t,
                                bufferTimeSpan: i
                            };
                        this.add(t.closeAction = this.scheduler.schedule(Cp, i, n))
                    }
                }, e.prototype.openContext = function() {
                    var t = new Ap;
                    return this.contexts.push(t), t
                }, e.prototype.closeContext = function(t) {
                    this.destination.next(t.buffer);
                    var e = this.contexts;
                    (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1)
                }, e
            }(Cn);

        function Cp(t) {
            var e = t.subscriber,
                i = t.context;
            i && e.closeContext(i), e.closed || (t.context = e.openContext(), t.context.closeAction = this.schedule(t, t.bufferTimeSpan))
        }

        function xp(t) {
            var e = t.bufferCreationInterval,
                i = t.bufferTimeSpan,
                n = t.subscriber,
                s = t.scheduler,
                r = n.openContext();
            n.closed || (n.add(r.closeAction = s.schedule(Mp, i, {
                subscriber: n,
                context: r
            })), this.schedule(t, e))
        }

        function Mp(t) {
            var e = t.subscriber,
                i = t.context;
            e.closeContext(i)
        }
        var Ep = i(21);

        function Op(t, e = "info") {
            const i = window.console;
            i[void 0 !== i[e] ? e : "log"](t)
        }
        const Dp = {
            validateInput: !1,
            throttleMillis: 0,
            isAlt64: !0,
            defaultTemplate: "/".concat(Zt.CHART_DEFINITION),
            cachedAnnotationsCount: 0,
            showResizeHandles: !1,
            scrollBehavior: "wheel+shift",
            bypassSmoothing: !1,
            showGoToLatest: void 0,
            tooltipMovement: "Auto",
            tooltipHeaders: void 0,
            touchCrosshairTimeoutMillis: void 0,
            mode: w[w.Unspecified],
            hostingModel: "Page",
            overrides: void 0,
            baseUrl: {
                instruments: "/proxies/instruments",
                futures: "/proxies/futures",
                timeseries: "/proxies/timeseries",
                timeseriesNew: "/proxies/new-timeseries",
                ondemand: "/proxies/ondemand"
            },
            async fetch(t, e) {
                const i = this.baseUrl[t],
                    n = await fetch("".concat(i).concat(e));
                return await n.text()
            }
        };
        async function Lp(t, e) {
            const i = Rp().config;
            return await i.fetch.call(i, t, e)
        }
        let _p = !1,
            Ip = null;

        function Np(t, e = {}) {
            if (_p) throw new Error("You should only call initFeed once during page's lifetime");
            _p = !0;
            const i = Object.assign(Dp);
            return et(i, e), Ip = new t(i), Ip.version = function() {
                const t = Ep,
                    e = t.prerelease ? "-".concat(t.prerelease.identifier, ".").concat(t.prerelease.ordinal) : "";
                return "".concat(t.major, ".").concat(t.minor, ".").concat(t.patch).concat(e)
            }(), Op("Barchart HTML5 Streaming Chart version ".concat(Ip.version, " initialized."), "info"), Ip.cachesData && (Ip.subject.subscribe(Ip.onPerformInternalGc.bind(Ip)), go.a.subscribe(nn.CH_ALL, Ip.onChartChanged.bind(Ip))), Ip
        }

        function Rp() {
            return Ip
        }

        function Hp() {
            return new bp(!0)
        }

        function kp(t) {
            const e = Hp();
            return e.load(t), e.change({
                id: "Outline",
                context: {
                    id: "Get"
                }
            })
        }
        class Fp {
            constructor(t) {
                this.config = t, this.timeSeriesSource = this.metaDataSource = this.recordSource = null, this.charts = new Map, this.pendingRedraw = new Set, this.ongoingAnimationCallbackId = null, this.drawCharts = this.drawCharts.bind(this), this.template = null, this.cachesData = !1
            }
            get subject() {
                return q(this._subject) || (this._subject = (new Vn).pipe(function(t) {
                    var e = arguments.length,
                        i = Nn;
                    Sp(arguments[arguments.length - 1]) && (i = arguments[arguments.length - 1], e--);
                    var n = null;
                    e >= 2 && (n = arguments[1]);
                    var s = Number.POSITIVE_INFINITY;
                    return e >= 3 && (s = arguments[2]),
                        function(e) {
                            return e.lift(new Pp(t, n, s, i))
                        }
                }(Zt.INTERNAL_GC_MILLIS), Xn(t => t.length > 0))), this._subject
            }
            getTimeSeriesDataSource() {
                return this.timeSeriesSource
            }
            getMetaDataSource() {
                return this.metaDataSource
            }
            getRecordSource() {
                return this.recordSource
            }
            async ready() {
                return Xt.call(this, async () => {
                    let t = this.config.defaultTemplate;
                    if ("string" == typeof t) {
                        const e = await fetch(this.config.defaultTemplate);
                        t = await e.json()
                    }
                    return this.template = Ki(t, Zt.CHART_SCHEMA), !0
                })
            }
            getHeadlessChart() {
                return Hp()
            }
            checkChart(t, e) {
                if (e !== this.charts.has(t)) throw new Error("There is ".concat(e ? "no" : "already a", " chart inside the element ").concat(t))
            }
            addChart(t, e = null) {
                this.checkChart(t, !1);
                const i = new bp;
                return this.charts.set(t, i), i.initialize(t, e), i
            }
            removeChart(t) {
                this.checkChart(t, !0), this.charts.get(t).shutdown(), this.charts.delete(t)
            }
            getChart(t) {
                return this.charts.has(t) ? this.charts.get(t) : null
            }
            redraw(t) {
                this.checkChart(t, !0), q(this.ongoingAnimationCallbackId) || (this.ongoingAnimationCallbackId = requestAnimationFrame(this.drawCharts)), this.pendingRedraw.add(t)
            }
            drawCharts() {
                this.ongoingAnimationCallbackId = null, this.pendingRedraw.forEach(t => {
                    if (!this.charts.has(t)) return;
                    const e = this.charts.get(t).presenter.view;
                    e.isHostElementVisible && e.draw()
                }), this.pendingRedraw.clear()
            }
            get emptyEntities() {
                return {
                    metaData: new Set,
                    records: new Set,
                    timeSeries: new Set
                }
            }
            getCacheableEntities() {
                const t = this.emptyEntities;
                for (let e of this.charts.values()) e.presenter.getCacheableEntities(t);
                return t.timeSeries.forEach(e => {
                    q(e) && (q(e.record) ? t.records.add(e.record) : q(e.records) && Object.values(e.records).forEach(e => t.records.add(e)))
                }), t
            }
            clearCaches() {
                this.evictUnused(this.emptyEntities)
            }
            refreshCaches() {
                this.getTimeSeriesDataSource().refresh()
            }
            evictUnused(t) {
                this.getMetaDataSource().evictUnused(t.metaData), this.getRecordSource().evictUnused(t.records), this.getTimeSeriesDataSource().evictUnused(t.timeSeries)
            }
            onPerformInternalGc(t) {
                const e = this.getCacheableEntities();
                this.evictUnused(e)
            }
            onChartChanged(t, e) {
                t !== nn.CH_RECREATED && t !== nn.CH_SHUTDOWN || this.subject.next()
            }
            getDefaultMultiFieldCurve() {
                if (!this.knowDefaultCurve) {
                    const t = Nd(this.template);
                    1 === t.curves.length && Od(t.curves[0].style) ? this.defaultOhlcCurve = J(t.curves[0]) : this.defaultOhlcCurve = null, this.knowDefaultCurve = !0
                }
                return this.defaultOhlcCurve
            }
            getDefaultAggregation() {
                return this.knowDefaultAggregation || (this.defaultAggregation = J(this.template.data.aggregation), this.knowDefaultAggregation = !0), this.defaultAggregation
            }
            getDefaultPeriod() {
                return this.knowDefaultPeriod || (this.defaultPeriod = this.template.display.period || null, this.knowDefaultPeriod = !0), this.defaultPeriod
            }
            getDefaultDensity() {
                return this.knowDefaultDensity || (this.defaultDensity = this.template.display.density || null, this.knowDefaultDensity = !0), this.defaultDensity
            }
        }
        class Up extends Fp {
            constructor(t) {
                super(t), this.timeSeriesSource = new Eo(!1), this.metaDataSource = new pe, this.recordSource = new Ys
            }
        }
        class Vp extends Fp {
            constructor(t) {
                super(t), this.cachesData = !0, this.timeSeriesSource = new Eo(!0), this.metaDataSource = new fe, this.recordSource = new $s, this.onEvents = this.onEvents.bind(this), this.onTimestamp = this.onTimestamp.bind(this), this.resetStreamingState()
            }
            resetStreamingState() {
                this.lastStreamingTimestamp = null, this._isActivelyStreaming = null, this.needToResubscribe = !1
            }
            get connection() {
                return this._connection
            }
            set connection(t) {
                this._connection = t, this.initializeStreaming()
            }
            addChart(t, e = null) {
                return this.needToResubscribe && this.initializeStreaming(), super.addChart(t, e)
            }
            set isActivelyStreaming(t) {
                q(this._isActivelyStreaming) && !this._isActivelyStreaming && t && this.refreshCaches(), this._isActivelyStreaming = t
            }
            get isActivelyStreaming() {
                return this._isActivelyStreaming
            }
            initializeStreaming() {
                this.resetStreamingState(), this.connection.on("events", this.onEvents), this.connection.on("timestamp", this.onTimestamp)
            }
            onTimestamp(t) {
                this.isActivelyStreaming && (this.lastStreamingTimestamp = t)
            }
            onEvents({
                         event: t
                     }) {
                t === Zt.BC_EVENT_DISCONNECTED || t === Zt.BC_EVENT_FEED_PAUSED ? this.isActivelyStreaming = !1 : t === Zt.BC_EVENT_LOGGED_IN || t === Zt.BC_EVENT_FEED_RESUMED ? this.isActivelyStreaming = !0 : t === Zt.BC_EVENT_DISCONNECTING && (this.clearCaches(), this.needToResubscribe = !0)
            }
        }
        i.d(e, "initFeed", (function() {
            return Np
        })), i.d(e, "getFeed", (function() {
            return Rp
        })), i.d(e, "getChartOutline", (function() {
            return kp
        })), i.d(e, "BaseDataFeed", (function() {
            return Fp
        })), i.d(e, "BarchartSiteDataFeed", (function() {
            return Up
        })), i.d(e, "MarketDataFeed", (function() {
            return Vp
        })), i.d(e, "parseExpression", (function() {
            return $a
        })), i.d(e, "evaluateExpression", (function() {
            return qa
        })), i.d(e, "formatPriceWithDecimals", (function() {
            return re
        })), i.d(e, "BaseRecordSource", (function() {
            return zs
        })), i.d(e, "Field", (function() {
            return Ji
        })), i.d(e, "Fields", (function() {
            return en
        })), i.d(e, "TimeSeriesContainer", (function() {
            return qs
        })), i.d(e, "asyncReady", (function() {
            return Xt
        })), i.d(e, "getTaxonomies", (function() {
            return gi
        })), i.d(e, "Topics", (function() {
            return nn
        })), i.d(e, "PubSub", (function() {
            return go.a
        })), i.d(e, "ChunkPart", (function() {
            return C
        })), i.d(e, "SeriesKind", (function() {
            return v
        }))
    }])
}));