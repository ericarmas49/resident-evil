$(document).ready(function() {
    if (!isMobile) {    // For only desktop version, parallax carousel will work
        !function e(t, n, a) {
            function i(r, s) {
                if (!n[r]) {
                    if (!t[r]) {
                        var l = "function" == typeof require && require;
                        if (!s && l)return l(r, !0);
                        if (o)return o(r, !0);
                        throw new Error("Cannot find module '" + r + "'")
                    }
                    var d = n[r] = {exports: {}};
                    t[r][0].call(d.exports, function (e) {
                        var n = t[r][1][e];
                        return i(n ? n : e)
                    }, d, d.exports, e, t, n, a)
                }
                return n[r].exports
            }

            for (var o = "function" == typeof require && require, r = 0; r < a.length; r++)i(a[r]);
            return i
        }({
            1: [function (e, t, n) {
                (function (t, a, i) {
                    function i(e, t, n) {
                        if (!(this instanceof i))return new i(e, t, n);
                        var a = typeof e;
                        if ("base64" === t && "string" === a)for (e = D(e); e.length % 4 !== 0;)e += "=";
                        var o;
                        if ("number" === a)o = P(e); else if ("string" === a)o = i.byteLength(e, t); else {
                            if ("object" !== a)throw new Error("First argument needs to be a number, array or string.");
                            o = P(e.length)
                        }
                        var r;
                        i._useTypedArrays ? r = i._augment(new Uint8Array(o)) : (r = this, r.length = o, r._isBuffer = !0);
                        var s;
                        if (i._useTypedArrays && "number" == typeof e.byteLength)r._set(e); else if (L(e))for (s = 0; o > s; s++)r[s] = i.isBuffer(e) ? e.readUInt8(s) : e[s]; else if ("string" === a)r.write(e, 0, t); else if ("number" === a && !i._useTypedArrays && !n)for (s = 0; o > s; s++)r[s] = 0;
                        return r
                    }

                    function o(e, t, n, a) {
                        n = Number(n) || 0;
                        var o = e.length - n;
                        a ? (a = Number(a), a > o && (a = o)) : a = o;
                        var r = t.length;
                        H(r % 2 === 0, "Invalid hex string"), a > r / 2 && (a = r / 2);
                        for (var s = 0; a > s; s++) {
                            var l = parseInt(t.substr(2 * s, 2), 16);
                            H(!isNaN(l), "Invalid hex string"), e[n + s] = l
                        }
                        return i._charsWritten = 2 * s, s
                    }

                    function r(e, t, n, a) {
                        var o = i._charsWritten = U(B(t), e, n, a);
                        return o
                    }

                    function s(e, t, n, a) {
                        var o = i._charsWritten = U(j(t), e, n, a);
                        return o
                    }

                    function l(e, t, n, a) {
                        return s(e, t, n, a)
                    }

                    function d(e, t, n, a) {
                        var o = i._charsWritten = U(X(t), e, n, a);
                        return o
                    }

                    function u(e, t, n, a) {
                        var o = i._charsWritten = U(N(t), e, n, a);
                        return o
                    }

                    function c(e, t, n) {
                        return Z.fromByteArray(0 === t && n === e.length ? e : e.slice(t, n))
                    }

                    function f(e, t, n) {
                        var a = "", i = "";
                        n = Math.min(e.length, n);
                        for (var o = t; n > o; o++)e[o] <= 127 ? (a += F(i) + String.fromCharCode(e[o]), i = "") : i += "%" + e[o].toString(16);
                        return a + F(i)
                    }

                    function h(e, t, n) {
                        var a = "";
                        n = Math.min(e.length, n);
                        for (var i = t; n > i; i++)a += String.fromCharCode(e[i]);
                        return a
                    }

                    function p(e, t, n) {
                        return h(e, t, n)
                    }

                    function w(e, t, n) {
                        var a = e.length;
                        (!t || 0 > t) && (t = 0), (!n || 0 > n || n > a) && (n = a);
                        for (var i = "", o = t; n > o; o++)i += _(e[o]);
                        return i
                    }

                    function g(e, t, n) {
                        for (var a = e.slice(t, n), i = "", o = 0; o < a.length; o += 2)i += String.fromCharCode(a[o] + 256 * a[o + 1]);
                        return i
                    }

                    function m(e, t, n, a) {
                        a || (H("boolean" == typeof n, "missing or invalid endian"), H(void 0 !== t && null !== t, "missing offset"), H(t + 1 < e.length, "Trying to read beyond buffer length"));
                        var i = e.length;
                        if (!(t >= i)) {
                            var o;
                            return n ? (o = e[t], i > t + 1 && (o |= e[t + 1] << 8)) : (o = e[t] << 8, i > t + 1 && (o |= e[t + 1])), o
                        }
                    }

                    function v(e, t, n, a) {
                        a || (H("boolean" == typeof n, "missing or invalid endian"), H(void 0 !== t && null !== t, "missing offset"), H(t + 3 < e.length, "Trying to read beyond buffer length"));
                        var i = e.length;
                        if (!(t >= i)) {
                            var o;
                            return n ? (i > t + 2 && (o = e[t + 2] << 16), i > t + 1 && (o |= e[t + 1] << 8), o |= e[t], i > t + 3 && (o += e[t + 3] << 24 >>> 0)) : (i > t + 1 && (o = e[t + 1] << 16), i > t + 2 && (o |= e[t + 2] << 8), i > t + 3 && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o
                        }
                    }

                    function y(e, t, n, a) {
                        a || (H("boolean" == typeof n, "missing or invalid endian"), H(void 0 !== t && null !== t, "missing offset"), H(t + 1 < e.length, "Trying to read beyond buffer length"));
                        var i = e.length;
                        if (!(t >= i)) {
                            var o = m(e, t, n, !0), r = 32768 & o;
                            return r ? -1 * (65535 - o + 1) : o
                        }
                    }

                    function b(e, t, n, a) {
                        a || (H("boolean" == typeof n, "missing or invalid endian"), H(void 0 !== t && null !== t, "missing offset"), H(t + 3 < e.length, "Trying to read beyond buffer length"));
                        var i = e.length;
                        if (!(t >= i)) {
                            var o = v(e, t, n, !0), r = 2147483648 & o;
                            return r ? -1 * (4294967295 - o + 1) : o
                        }
                    }

                    function I(e, t, n, a) {
                        return a || (H("boolean" == typeof n, "missing or invalid endian"), H(t + 3 < e.length, "Trying to read beyond buffer length")), G.read(e, t, n, 23, 4)
                    }

                    function x(e, t, n, a) {
                        return a || (H("boolean" == typeof n, "missing or invalid endian"), H(t + 7 < e.length, "Trying to read beyond buffer length")), G.read(e, t, n, 52, 8)
                    }

                    function S(e, t, n, a, i) {
                        i || (H(void 0 !== t && null !== t, "missing value"), H("boolean" == typeof a, "missing or invalid endian"), H(void 0 !== n && null !== n, "missing offset"), H(n + 1 < e.length, "trying to write beyond buffer length"), J(t, 65535));
                        var o = e.length;
                        if (!(n >= o))for (var r = 0, s = Math.min(o - n, 2); s > r; r++)e[n + r] = (t & 255 << 8 * (a ? r : 1 - r)) >>> 8 * (a ? r : 1 - r)
                    }

                    function $(e, t, n, a, i) {
                        i || (H(void 0 !== t && null !== t, "missing value"), H("boolean" == typeof a, "missing or invalid endian"), H(void 0 !== n && null !== n, "missing offset"), H(n + 3 < e.length, "trying to write beyond buffer length"), J(t, 4294967295));
                        var o = e.length;
                        if (!(n >= o))for (var r = 0, s = Math.min(o - n, 4); s > r; r++)e[n + r] = t >>> 8 * (a ? r : 3 - r) & 255
                    }

                    function C(e, t, n, a, i) {
                        i || (H(void 0 !== t && null !== t, "missing value"), H("boolean" == typeof a, "missing or invalid endian"), H(void 0 !== n && null !== n, "missing offset"), H(n + 1 < e.length, "Trying to write beyond buffer length"), R(t, 32767, -32768));
                        var o = e.length;
                        n >= o || (t >= 0 ? S(e, t, n, a, i) : S(e, 65535 + t + 1, n, a, i))
                    }

                    function k(e, t, n, a, i) {
                        i || (H(void 0 !== t && null !== t, "missing value"), H("boolean" == typeof a, "missing or invalid endian"), H(void 0 !== n && null !== n, "missing offset"), H(n + 3 < e.length, "Trying to write beyond buffer length"), R(t, 2147483647, -2147483648));
                        var o = e.length;
                        n >= o || (t >= 0 ? $(e, t, n, a, i) : $(e, 4294967295 + t + 1, n, a, i))
                    }

                    function M(e, t, n, a, i) {
                        i || (H(void 0 !== t && null !== t, "missing value"), H("boolean" == typeof a, "missing or invalid endian"), H(void 0 !== n && null !== n, "missing offset"), H(n + 3 < e.length, "Trying to write beyond buffer length"), O(t, 3.4028234663852886e38, -3.4028234663852886e38));
                        var o = e.length;
                        n >= o || G.write(e, t, n, a, 23, 4)
                    }

                    function T(e, t, n, a, i) {
                        i || (H(void 0 !== t && null !== t, "missing value"), H("boolean" == typeof a, "missing or invalid endian"), H(void 0 !== n && null !== n, "missing offset"), H(n + 7 < e.length, "Trying to write beyond buffer length"), O(t, 1.7976931348623157e308, -1.7976931348623157e308));
                        var o = e.length;
                        n >= o || G.write(e, t, n, a, 52, 8)
                    }

                    function D(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }

                    function E(e, t, n) {
                        return "number" != typeof e ? n : (e = ~~e, e >= t ? t : e >= 0 ? e : (e += t, e >= 0 ? e : 0))
                    }

                    function P(e) {
                        return e = ~~Math.ceil(+e), 0 > e ? 0 : e
                    }

                    function A(e) {
                        return (Array.isArray || function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        })(e)
                    }

                    function L(e) {
                        return A(e) || i.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
                    }

                    function _(e) {
                        return 16 > e ? "0" + e.toString(16) : e.toString(16)
                    }

                    function B(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var a = e.charCodeAt(n);
                            if (127 >= a)t.push(e.charCodeAt(n)); else {
                                var i = n;
                                a >= 55296 && 57343 >= a && n++;
                                for (var o = encodeURIComponent(e.slice(i, n + 1)).substr(1).split("%"), r = 0; r < o.length; r++)t.push(parseInt(o[r], 16))
                            }
                        }
                        return t
                    }

                    function j(e) {
                        for (var t = [], n = 0; n < e.length; n++)t.push(255 & e.charCodeAt(n));
                        return t
                    }

                    function N(e) {
                        for (var t, n, a, i = [], o = 0; o < e.length; o++)t = e.charCodeAt(o), n = t >> 8, a = t % 256, i.push(a), i.push(n);
                        return i
                    }

                    function X(e) {
                        return Z.toByteArray(e)
                    }

                    function U(e, t, n, a) {
                        for (var i = 0; a > i && !(i + n >= t.length || i >= e.length); i++)t[i + n] = e[i];
                        return i
                    }

                    function F(e) {
                        try {
                            return decodeURIComponent(e)
                        } catch (t) {
                            return String.fromCharCode(65533)
                        }
                    }

                    function J(e, t) {
                        H("number" == typeof e, "cannot write a non-number as a number"), H(e >= 0, "specified a negative value for writing an unsigned value"), H(t >= e, "value is larger than maximum value for type"), H(Math.floor(e) === e, "value has a fractional component")
                    }

                    function R(e, t, n) {
                        H("number" == typeof e, "cannot write a non-number as a number"), H(t >= e, "value larger than maximum allowed value"), H(e >= n, "value smaller than minimum allowed value"), H(Math.floor(e) === e, "value has a fractional component")
                    }

                    function O(e, t, n) {
                        H("number" == typeof e, "cannot write a non-number as a number"), H(t >= e, "value larger than maximum allowed value"), H(e >= n, "value smaller than minimum allowed value")
                    }

                    function H(e, t) {
                        if (!e)throw new Error(t || "Failed assertion")
                    }

                    var Z = e("base64-js"), G = e("ieee754");
                    n.Buffer = i, n.SlowBuffer = i, n.INSPECT_MAX_BYTES = 50, i.poolSize = 8192, i._useTypedArrays = function () {
                        try {
                            var e = new ArrayBuffer(0), t = new Uint8Array(e);
                            return t.foo = function () {
                                return 42
                            }, 42 === t.foo() && "function" == typeof t.subarray
                        } catch (n) {
                            return !1
                        }
                    }(), i.isEncoding = function (e) {
                        switch (String(e).toLowerCase()) {
                            case"hex":
                            case"utf8":
                            case"utf-8":
                            case"ascii":
                            case"binary":
                            case"base64":
                            case"raw":
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, i.isBuffer = function (e) {
                        return !(null === e || void 0 === e || !e._isBuffer)
                    }, i.byteLength = function (e, t) {
                        var n;
                        switch (e += "", t || "utf8") {
                            case"hex":
                                n = e.length / 2;
                                break;
                            case"utf8":
                            case"utf-8":
                                n = B(e).length;
                                break;
                            case"ascii":
                            case"binary":
                            case"raw":
                                n = e.length;
                                break;
                            case"base64":
                                n = X(e).length;
                                break;
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                n = 2 * e.length;
                                break;
                            default:
                                throw new Error("Unknown encoding")
                        }
                        return n
                    }, i.concat = function (e, t) {
                        if (H(A(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length)return new i(0);
                        if (1 === e.length)return e[0];
                        var n;
                        if ("number" != typeof t)for (t = 0, n = 0; n < e.length; n++)t += e[n].length;
                        var a = new i(t), o = 0;
                        for (n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.copy(a, o), o += r.length
                        }
                        return a
                    }, i.prototype.write = function (e, t, n, a) {
                        if (isFinite(t))isFinite(n) || (a = n, n = void 0); else {
                            var i = a;
                            a = t, t = n, n = i
                        }
                        t = Number(t) || 0;
                        var c = this.length - t;
                        n ? (n = Number(n), n > c && (n = c)) : n = c, a = String(a || "utf8").toLowerCase();
                        var f;
                        switch (a) {
                            case"hex":
                                f = o(this, e, t, n);
                                break;
                            case"utf8":
                            case"utf-8":
                                f = r(this, e, t, n);
                                break;
                            case"ascii":
                                f = s(this, e, t, n);
                                break;
                            case"binary":
                                f = l(this, e, t, n);
                                break;
                            case"base64":
                                f = d(this, e, t, n);
                                break;
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                f = u(this, e, t, n);
                                break;
                            default:
                                throw new Error("Unknown encoding")
                        }
                        return f
                    }, i.prototype.toString = function (e, t, n) {
                        var a = this;
                        if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, n = void 0 !== n ? Number(n) : n = a.length, n === t)return "";
                        var i;
                        switch (e) {
                            case"hex":
                                i = w(a, t, n);
                                break;
                            case"utf8":
                            case"utf-8":
                                i = f(a, t, n);
                                break;
                            case"ascii":
                                i = h(a, t, n);
                                break;
                            case"binary":
                                i = p(a, t, n);
                                break;
                            case"base64":
                                i = c(a, t, n);
                                break;
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                i = g(a, t, n);
                                break;
                            default:
                                throw new Error("Unknown encoding")
                        }
                        return i
                    }, i.prototype.toJSON = function () {
                        return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                    }, i.prototype.copy = function (e, t, n, a) {
                        var o = this;
                        if (n || (n = 0), a || 0 === a || (a = this.length), t || (t = 0), a !== n && 0 !== e.length && 0 !== o.length) {
                            H(a >= n, "sourceEnd < sourceStart"), H(t >= 0 && t < e.length, "targetStart out of bounds"), H(n >= 0 && n < o.length, "sourceStart out of bounds"), H(a >= 0 && a <= o.length, "sourceEnd out of bounds"), a > this.length && (a = this.length), e.length - t < a - n && (a = e.length - t + n);
                            var r = a - n;
                            if (100 > r || !i._useTypedArrays)for (var s = 0; r > s; s++)e[s + t] = this[s + n]; else e._set(this.subarray(n, n + r), t)
                        }
                    }, i.prototype.slice = function (e, t) {
                        var n = this.length;
                        if (e = E(e, n, 0), t = E(t, n, n), i._useTypedArrays)return i._augment(this.subarray(e, t));
                        for (var a = t - e, o = new i(a, void 0, !0), r = 0; a > r; r++)o[r] = this[r + e];
                        return o
                    }, i.prototype.get = function (e) {
                        return this.readUInt8(e)
                    }, i.prototype.set = function (e, t) {
                        return this.writeUInt8(e, t)
                    }, i.prototype.readUInt8 = function (e, t) {
                        return t || (H(void 0 !== e && null !== e, "missing offset"), H(e < this.length, "Trying to read beyond buffer length")), e >= this.length ? void 0 : this[e]
                    }, i.prototype.readUInt16LE = function (e, t) {
                        return m(this, e, !0, t)
                    }, i.prototype.readUInt16BE = function (e, t) {
                        return m(this, e, !1, t)
                    }, i.prototype.readUInt32LE = function (e, t) {
                        return v(this, e, !0, t)
                    }, i.prototype.readUInt32BE = function (e, t) {
                        return v(this, e, !1, t)
                    }, i.prototype.readInt8 = function (e, t) {
                        if (t || (H(void 0 !== e && null !== e, "missing offset"), H(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
                            var n = 128 & this[e];
                            return n ? -1 * (255 - this[e] + 1) : this[e]
                        }
                    }, i.prototype.readInt16LE = function (e, t) {
                        return y(this, e, !0, t)
                    }, i.prototype.readInt16BE = function (e, t) {
                        return y(this, e, !1, t)
                    }, i.prototype.readInt32LE = function (e, t) {
                        return b(this, e, !0, t)
                    }, i.prototype.readInt32BE = function (e, t) {
                        return b(this, e, !1, t)
                    }, i.prototype.readFloatLE = function (e, t) {
                        return I(this, e, !0, t)
                    }, i.prototype.readFloatBE = function (e, t) {
                        return I(this, e, !1, t)
                    }, i.prototype.readDoubleLE = function (e, t) {
                        return x(this, e, !0, t)
                    }, i.prototype.readDoubleBE = function (e, t) {
                        return x(this, e, !1, t)
                    }, i.prototype.writeUInt8 = function (e, t, n) {
                        n || (H(void 0 !== e && null !== e, "missing value"), H(void 0 !== t && null !== t, "missing offset"), H(t < this.length, "trying to write beyond buffer length"), J(e, 255)), t >= this.length || (this[t] = e)
                    }, i.prototype.writeUInt16LE = function (e, t, n) {
                        S(this, e, t, !0, n)
                    }, i.prototype.writeUInt16BE = function (e, t, n) {
                        S(this, e, t, !1, n)
                    }, i.prototype.writeUInt32LE = function (e, t, n) {
                        $(this, e, t, !0, n)
                    }, i.prototype.writeUInt32BE = function (e, t, n) {
                        $(this, e, t, !1, n)
                    }, i.prototype.writeInt8 = function (e, t, n) {
                        n || (H(void 0 !== e && null !== e, "missing value"), H(void 0 !== t && null !== t, "missing offset"), H(t < this.length, "Trying to write beyond buffer length"), R(e, 127, -128)), t >= this.length || (e >= 0 ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n))
                    }, i.prototype.writeInt16LE = function (e, t, n) {
                        C(this, e, t, !0, n)
                    }, i.prototype.writeInt16BE = function (e, t, n) {
                        C(this, e, t, !1, n)
                    }, i.prototype.writeInt32LE = function (e, t, n) {
                        k(this, e, t, !0, n)
                    }, i.prototype.writeInt32BE = function (e, t, n) {
                        k(this, e, t, !1, n)
                    }, i.prototype.writeFloatLE = function (e, t, n) {
                        M(this, e, t, !0, n)
                    }, i.prototype.writeFloatBE = function (e, t, n) {
                        M(this, e, t, !1, n)
                    }, i.prototype.writeDoubleLE = function (e, t, n) {
                        T(this, e, t, !0, n)
                    }, i.prototype.writeDoubleBE = function (e, t, n) {
                        T(this, e, t, !1, n)
                    }, i.prototype.fill = function (e, t, n) {
                        if (e || (e = 0), t || (t = 0), n || (n = this.length), "string" == typeof e && (e = e.charCodeAt(0)), H("number" == typeof e && !isNaN(e), "value is not a number"), H(n >= t, "end < start"), n !== t && 0 !== this.length) {
                            H(t >= 0 && t < this.length, "start out of bounds"), H(n >= 0 && n <= this.length, "end out of bounds");
                            for (var a = t; n > a; a++)this[a] = e
                        }
                    }, i.prototype.inspect = function () {
                        for (var e = [], t = this.length, a = 0; t > a; a++)if (e[a] = _(this[a]), a === n.INSPECT_MAX_BYTES) {
                            e[a + 1] = "...";
                            break
                        }
                        return "<Buffer " + e.join(" ") + ">"
                    }, i.prototype.toArrayBuffer = function () {
                        if ("undefined" != typeof Uint8Array) {
                            if (i._useTypedArrays)return new i(this).buffer;
                            for (var e = new Uint8Array(this.length), t = 0, n = e.length; n > t; t += 1)e[t] = this[t];
                            return e.buffer
                        }
                        throw new Error("Buffer.toArrayBuffer not supported in this browser")
                    };
                    var W = i.prototype;
                    i._augment = function (e) {
                        return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = W.get, e.set = W.set, e.write = W.write, e.toString = W.toString, e.toLocaleString = W.toString, e.toJSON = W.toJSON, e.copy = W.copy, e.slice = W.slice, e.readUInt8 = W.readUInt8, e.readUInt16LE = W.readUInt16LE, e.readUInt16BE = W.readUInt16BE, e.readUInt32LE = W.readUInt32LE, e.readUInt32BE = W.readUInt32BE, e.readInt8 = W.readInt8, e.readInt16LE = W.readInt16LE, e.readInt16BE = W.readInt16BE, e.readInt32LE = W.readInt32LE, e.readInt32BE = W.readInt32BE, e.readFloatLE = W.readFloatLE, e.readFloatBE = W.readFloatBE, e.readDoubleLE = W.readDoubleLE, e.readDoubleBE = W.readDoubleBE, e.writeUInt8 = W.writeUInt8, e.writeUInt16LE = W.writeUInt16LE, e.writeUInt16BE = W.writeUInt16BE, e.writeUInt32LE = W.writeUInt32LE, e.writeUInt32BE = W.writeUInt32BE, e.writeInt8 = W.writeInt8, e.writeInt16LE = W.writeInt16LE, e.writeInt16BE = W.writeInt16BE, e.writeInt32LE = W.writeInt32LE, e.writeInt32BE = W.writeInt32BE, e.writeFloatLE = W.writeFloatLE, e.writeFloatBE = W.writeFloatBE, e.writeDoubleLE = W.writeDoubleLE, e.writeDoubleBE = W.writeDoubleBE, e.fill = W.fill, e.inspect = W.inspect, e.toArrayBuffer = W.toArrayBuffer, e
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js", "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
            }, {"+7ZJp0": 4, "base64-js": 2, buffer: 1, ieee754: 3}], 2: [function (e, t, n) {
                (function () {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    !function (t) {
                        "use strict";
                        function n(e) {
                            var t = e.charCodeAt(0);
                            return t === r || t === c ? 62 : t === s || t === f ? 63 : l > t ? -1 : l + 10 > t ? t - l + 26 + 26 : u + 26 > t ? t - u : d + 26 > t ? t - d + 26 : void 0
                        }

                        function a(e) {
                            function t(e) {
                                d[c++] = e
                            }

                            var a, i, r, s, l, d;
                            if (e.length % 4 > 0)throw new Error("Invalid string. Length must be a multiple of 4");
                            var u = e.length;
                            l = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, d = new o(3 * e.length / 4 - l), r = l > 0 ? e.length - 4 : e.length;
                            var c = 0;
                            for (a = 0, i = 0; r > a; a += 4, i += 3)s = n(e.charAt(a)) << 18 | n(e.charAt(a + 1)) << 12 | n(e.charAt(a + 2)) << 6 | n(e.charAt(a + 3)), t((16711680 & s) >> 16), t((65280 & s) >> 8), t(255 & s);
                            return 2 === l ? (s = n(e.charAt(a)) << 2 | n(e.charAt(a + 1)) >> 4, t(255 & s)) : 1 === l && (s = n(e.charAt(a)) << 10 | n(e.charAt(a + 1)) << 4 | n(e.charAt(a + 2)) >> 2, t(s >> 8 & 255), t(255 & s)), d
                        }

                        function i(t) {
                            function n(t) {
                                return e.charAt(t)
                            }

                            function a(e) {
                                return n(e >> 18 & 63) + n(e >> 12 & 63) + n(e >> 6 & 63) + n(63 & e)
                            }

                            var i, o, r, s = t.length % 3, l = "";
                            for (i = 0, r = t.length - s; r > i; i += 3)o = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2], l += a(o);
                            switch (s) {
                                case 1:
                                    o = t[t.length - 1], l += n(o >> 2), l += n(o << 4 & 63), l += "==";
                                    break;
                                case 2:
                                    o = (t[t.length - 2] << 8) + t[t.length - 1], l += n(o >> 10), l += n(o >> 4 & 63), l += n(o << 2 & 63), l += "="
                            }
                            return l
                        }

                        var o = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "+".charCodeAt(0), s = "/".charCodeAt(0), l = "0".charCodeAt(0), d = "a".charCodeAt(0), u = "A".charCodeAt(0), c = "-".charCodeAt(0), f = "_".charCodeAt(0);
                        t.toByteArray = a, t.fromByteArray = i
                    }("undefined" == typeof n ? this.base64js = {} : n)
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js", "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
            }, {"+7ZJp0": 4, buffer: 1}], 3: [function (e, t, n) {
                (function () {
                    n.read = function (e, t, n, a, i) {
                        var o, r, s = 8 * i - a - 1, l = (1 << s) - 1, d = l >> 1, u = -7, c = n ? i - 1 : 0, f = n ? -1 : 1, h = e[t + c];
                        for (c += f, o = h & (1 << -u) - 1, h >>= -u, u += s; u > 0; o = 256 * o + e[t + c], c += f, u -= 8);
                        for (r = o & (1 << -u) - 1, o >>= -u, u += a; u > 0; r = 256 * r + e[t + c], c += f, u -= 8);
                        if (0 === o)o = 1 - d; else {
                            if (o === l)return r ? 0 / 0 : 1 / 0 * (h ? -1 : 1);
                            r += Math.pow(2, a), o -= d
                        }
                        return (h ? -1 : 1) * r * Math.pow(2, o - a)
                    }, n.write = function (e, t, n, a, i, o) {
                        var r, s, l, d = 8 * o - i - 1, u = (1 << d) - 1, c = u >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = a ? 0 : o - 1, p = a ? 1 : -1, w = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
                        for (t = Math.abs(t), isNaN(t) || 1 / 0 === t ? (s = isNaN(t) ? 1 : 0, r = u) : (r = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -r)) < 1 && (r--, l *= 2), t += r + c >= 1 ? f / l : f * Math.pow(2, 1 - c), t * l >= 2 && (r++, l /= 2), r + c >= u ? (s = 0, r = u) : r + c >= 1 ? (s = (t * l - 1) * Math.pow(2, i), r += c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, i), r = 0)); i >= 8; e[n + h] = 255 & s, h += p, s /= 256, i -= 8);
                        for (r = r << i | s, d += i; d > 0; e[n + h] = 255 & r, h += p, r /= 256, d -= 8);
                        e[n + h - p] |= 128 * w
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js", "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
            }, {"+7ZJp0": 4, buffer: 1}], 4: [function (e, t) {
                (function (e) {
                    function n() {
                    }

                    var e = t.exports = {};
                    e.nextTick = function () {
                        var e = "undefined" != typeof window && window.setImmediate, t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                        if (e)return function (e) {
                            return window.setImmediate(e)
                        };
                        if (t) {
                            var n = [];
                            return window.addEventListener("message", function (e) {
                                var t = e.source;
                                if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), n.length > 0)) {
                                    var a = n.shift();
                                    a()
                                }
                            }, !0), function (e) {
                                n.push(e), window.postMessage("process-tick", "*")
                            }
                        }
                        return function (e) {
                            setTimeout(e, 0)
                        }
                    }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = n, e.addListener = n, e.once = n, e.off = n, e.removeListener = n, e.removeAllListeners = n, e.emit = n, e.binding = function () {
                        throw new Error("process.binding is not supported")
                    }, e.cwd = function () {
                        return "/"
                    }, e.chdir = function () {
                        throw new Error("process.chdir is not supported")
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js", "/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
            }, {"+7ZJp0": 4, buffer: 1}], 5: [function (e, t, n) {
                (function () {
                    !function (e) {
                        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof n ? t.exports = e : e(jQuery)
                    }(function (e) {
                        function t(t) {
                            var r = t || window.event, s = l.call(arguments, 1), d = 0, c = 0, f = 0, h = 0, p = 0, w = 0;
                            if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (f = -1 * r.detail), "wheelDelta" in r && (f = r.wheelDelta), "wheelDeltaY" in r && (f = r.wheelDeltaY), "wheelDeltaX" in r && (c = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (c = -1 * f, f = 0), d = 0 === f ? c : f, "deltaY" in r && (f = -1 * r.deltaY, d = f), "deltaX" in r && (c = r.deltaX, 0 === f && (d = -1 * c)), 0 !== f || 0 !== c) {
                                if (1 === r.deltaMode) {
                                    var g = e.data(this, "mousewheel-line-height");
                                    d *= g, f *= g, c *= g
                                } else if (2 === r.deltaMode) {
                                    var m = e.data(this, "mousewheel-page-height");
                                    d *= m, f *= m, c *= m
                                }
                                if (h = Math.max(Math.abs(f), Math.abs(c)), (!o || o > h) && (o = h, a(r, h) && (o /= 40)), a(r, h) && (d /= 40, c /= 40, f /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var v = this.getBoundingClientRect();
                                    p = t.clientX - v.left, w = t.clientY - v.top
                                }
                                return t.deltaX = c, t.deltaY = f, t.deltaFactor = o, t.offsetX = p, t.offsetY = w, t.deltaMode = 0, s.unshift(t, d, c, f), i && clearTimeout(i), i = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
                            }
                        }

                        function n() {
                            o = null
                        }

                        function a(e, t) {
                            return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
                        }

                        var i, o, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
                        if (e.event.fixHooks)for (var d = r.length; d;)e.event.fixHooks[r[--d]] = e.event.mouseHooks;
                        e.fn.extend({
                            mousewheel: function (e) {
                                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                            }, unmousewheel: function (e) {
                                return this.unbind("mousewheel", e)
                            }
                        })
                    })
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../node_modules/jquery-mousewheel/jquery.mousewheel.js", "/../../../node_modules/jquery-mousewheel")
            }, {"+7ZJp0": 4, buffer: 1}], 6: [function (e) {
                (function () {
                    e("jquery-mousewheel")($), window.config = config = e("./base/Config.js"), window.util = util = e("./base/Util.js"), window.timelineMaxAnim = timelineMaxAnim = new TimelineMax, window.currentSlide = function () {
                        return parseInt(timelineMaxAnim.currentLabel(), 10)
                    }, window.requestedSlide = 0, window.lastSlide = 0, window.isTD = "cbc" == Global.broadcaster && "2" == Global.phase ? !0 : !1, window.isMask = !0;
                    var t, n = e("./phase2/DataLoader.js"), a = e("./phase2/PixiRenderer.js"), i = e("./phase2/Slides.js"), o = e("./phase2/SlidesNav.js"), r = e("./phase2/SlidesBuild.js"), s = e("./phase2/InteractionControls.js"), l = e("./phase2/StoryControls.js"), d = e("./phase2/AudioVideoControls.js"), u = e("./phase2/SocialControls.js"), c = e("./phase2/Accessibility.js"), f = 2, h = .1, p = {}, w = function () {
                        window.util.detect(), n.load(function (e) {
                            p = e, y().done(function () {
                                c.init(p), x(), m()
                            })
                        }), "true" == Global.debug && (window.stats = stats = new Stats, stats.domElement.style.position = "fixed", stats.domElement.style.left = "0px", stats.domElement.style.top = "0px", document.body.appendChild(stats.domElement)), g()
                    }, g = function () {
                    }, m = function () {
                        $("#loader").addClass("fade-out"), $(".phase2-controls").removeClass("fade-out"), $("canvas, .phase2-controls").addClass("fade-in")
                    }, v = function (e, t, n) {
                        return t = t || f || 1, n = n || h || .1, e > 10 ? e * n : t
                    }, y = function () {
                        var e = new $.Deferred;
                        return a.init(), l.init(p, Global.broadcaster), i.init(p).done(function () {
                            e.resolve()
                        }), t = u.init(p), window.stageContainer.addChild(t.container), e
                    }, b = function (e) {
                        p.slides[e] && ("character" === p.slides[e].type && t.toggleSocial(!0, 0), "end" === p.slides[e].type && r.activateBtns())
                    }, I = function (e) {
                        "georgia" != p.slides[e].id && "home" != p.slides[e].id && d.muteAudio(), "character" !== p.slides[e].type && t.toggleSocial(!1, 0), "aminatadiallo" === p.slides[e].id && r.deactivateBtns()
                    }, x = function () {
                        s.init(p.defaults), d.init(Global.broadcaster), o.init(), $(s.events).on("nextSlide prevSlide", S), $("#TDReads").on("click", function () {
                            analyticos.trackEvent("Footer - Phase2", "Outbound Sponsor Link - TD", "TD Reads", 1)
                        }), $("#TDThenNow").on("click", function () {
                            analyticos.trackEvent("Footer - Phase2", "Outbound Sponsor Link - TD", "TD Then & Now", 1)
                        }), $("#bon-fb").on("click", function () {
                            analyticos.trackEvent("Social Media - Phase2", "Facebook Follow", "Footer - #bon-fb", 1)
                        }), $("#bon-tw").on("click", function () {
                            analyticos.trackEvent("Social Media - Phase2", "Twitter Follow", "Footer - #bon-tw", 1)
                        }), $("#nav-logo").on("click", function () {
                            var e = Math.abs(window.currentSlide() - 0), t = v(e);
                            k(0, t, "Expo.easeInOut")
                        }), $(r.events).on("startOver", function () {
                            var e = Math.abs(window.currentSlide() - 0), t = v(e);
                            k(0, t, "Expo.easeInOut"), analyticos.trackEvent("Slide Events - Phase2", "Navigated - Start Again", "Scroll to Top - End Button", 1)
                        }), $(r.events).on("showVideo", function (e, t) {
                            d.showVideo(t)
                        }), $(r.events).on("showStory", function (e, t) {
                            l.showStory(t)
                        }), $(r.events).on("jumptoSlide", C), $(o.events).on("jumptoSlide", C), T(), $(window).resize(function () {
                            T()
                        }), $(d.events).on("soundon", d.soundon), $(d.events).on("soundoff", d.soundoff), $(d.events).on("bgsoundon", d.unMuteAudio), $(d.events).on("bgsoundoff", d.muteAudio);
                        var e = v(n.entryPoint());
                        window.entryPoint = n.entryPoint(), k(n.entryPoint(), 0 == n.entryPoint() ? e : -1, "Expo.easeInOut"), p.slides[window.entryPoint] && "georgia" != p.slides[window.entryPoint].id && "home" != p.slides[window.entryPoint].id && d.muteAudio()
                    }, S = function (e) {
                        var t = parseInt(window.requestedSlide, 10) + ("nextSlide" == e.type ? 1 : -1), n = util.clamp(t, 0, p.slides.length - 1);
                        k(n)
                    }, C = function (e, t) {
                        var n = Math.abs(window.requestedSlide - t), a = v(n);
                        window.currentSlide() != t && k(t, a, "Expo.easeInOut", !0)
                    }, k = function (e, t, n) {
                        (n || !TweenMax.getTweensOf(timelineMaxAnim).length) && (e = e ? e : 0, o.setActiveNav(e), M(e, t))
                    }, M = function (e, t, n) {
                        window.lastSlide = window.requestedSlide, window.requestedSlide = e, e = "undefined" != typeof e ? e.toString() : "0", n = n ? n : "Expo.easeInOut", timelineMaxAnim.currentTime = timelineMaxAnim.time();
                        var a = t ? -1 == t ? 0 : t : p.defaults.transitionDuration;
                        TweenMax.to(timelineMaxAnim, 1.5 * a, {
                            currentTime: timelineMaxAnim.getLabelTime(e),
                            ease: n,
                            onStart: function () {
                                I(e)
                            },
                            onUpdate: function () {
                                timelineMaxAnim.seek(timelineMaxAnim.currentTime, !1)
                            },
                            onComplete: function () {
                                timelineMaxAnim.seek(timelineMaxAnim.currentTime, !1), b(e)
                            }
                        }), location.hash = e
                    }, T = function () {
                        var e = $(".top-banner-bet").outerHeight(), t = $(".top-nav").outerHeight() + $("#bottom-nav").outerHeight(), n = $(window).width(), a = "cbc" == Global.broadcaster ? $(window).height() - t : $(window).height() - (t + e), i = window.config.phase2.stageHeight, o = window.config.phase2.stageWidth;
                        window.renderer.resize(n, a);
                        var r = o / i, s = n / a;
                        s > r ? window.stageContainer.scale.x = window.stageContainer.scale.y = a / i : r > s && (window.stageContainer.scale.x = window.stageContainer.scale.y = n / o);
                        var l = n / 2 - window.stageContainer.scale.x * o / 2, d = a / 2 - window.stageContainer.scale.y * i / 2;
                        window.stageContainer.x = l, window.stageContainer.y = d, $(".content-wrapper").css("height", a), $(window).width() < 768 || $(window).height() < 400 ? ($("#overlay-expand").removeClass("fade-out"), $("#overlay-expand").addClass("fade-in")) : ($("#overlay-expand").removeClass("fade-in"), $("#overlay-expand").addClass("fade-out"))
                    };
                    $(function () {
                        w()
                    })
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Controller_phase2.js", "/")
            }, {
                "+7ZJp0": 4,
                "./base/Config.js": 7,
                "./base/Util.js": 8,
                "./phase2/Accessibility.js": 9,
                "./phase2/AudioVideoControls.js": 10,
                "./phase2/DataLoader.js": 11,
                "./phase2/InteractionControls.js": 12,
                "./phase2/PixiRenderer.js": 13,
                "./phase2/Slides.js": 14,
                "./phase2/SlidesBuild.js": 15,
                "./phase2/SlidesNav.js": 16,
                "./phase2/SocialControls.js": 17,
                "./phase2/StoryControls.js": 19,
                buffer: 1,
                "jquery-mousewheel": 5
            }], 7: [function (e, t) {
                (function () {
                    config = {
                        assetPhase1: "../asset/phase1/",
                        assetPhase2: "images/",
                        tdReads: "https://tdreads.com/",
                        tdThen: "http://www.tddiversityevents.com/",
                        phase1URL: "../phase1/index.html",
                        phase2URL: "../phase2/index.html",
                        stageWidth: 1024,
                        stageHeight: 768,
                        slideWidth: 862,
                        slideHeight: 570,
                        phase2: {stageWidth: 1024, stageHeight: 674}
                    }, t.exports = config
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/base/Config.js", "/base")
            }, {"+7ZJp0": 4, buffer: 1}], 8: [function (e, t, n) {
                (function () {
                    n.bitly = function (e, t) {
                        $.ajax({
                            url: "http://api.bitly.com/v3/shorten?callback=?",
                            crossDomain: !0,
                            dataType: "jsonp",
                            data: {apiKey: "R_a94073eca3ed47f1a43b34bffbfec401", login: "thesecretlocation", longUrl: e}
                        }).done(function (e) {
                            t(e.data.url)
                        })
                    }, n.detect = function () {
                        var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/");
                        navigator.userAgent.match(/OS 7_\d/i) && $("html").addClass("ios7"), $("html").hasClass("tablet") && (window.isMask = !1), (t > 0 || n > 0) && $("html").addClass("ie tablet")
                    }, n.truncate = function (e, t) {
                        return e.length > t ? e.substring(0, t) + "..." : e
                    }, n.debounce = function (e, t, n) {
                        var a;
                        return a = null, function () {
                            var i, o;
                            o = this, i = arguments, n && null === a && e.apply(o, i), clearTimeout(a), a = setTimeout(function () {
                                a = null, n || e.apply(o, i)
                            }, t)
                        }
                    }, n.clamp = function (e, t, n) {
                        return e = t > e ? t : e, e = e > n ? n : e
                    }, n.isNumber = function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }, n.isTouchDevice = function () {
                        return "ontouchstart" in window || "onmsgesturechange" in window
                    }, n.showAlpha = function (e) {
                        TweenMax.to(e, .5, {
                            overwrite: !0, immediateRender: !0, alpha: 1, onStart: function () {
                                this.target.visible = !0
                            }
                        })
                    }, n.hideAlpha = function (e) {
                        TweenMax.to(e, .5, {
                            overwrite: !0, immediateRender: !0, alpha: 0, onComplete: function () {
                                this.target.visible = !1
                            }
                        })
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/base/Util.js", "/base")
            }, {"+7ZJp0": 4, buffer: 1}], 9: [function (e, t, n) {
                (function () {
                    var e;
                    n.init = function (n) {
                        e = n, t()
                    };
                    var t = function () {
                        for (var t, n = "", a = 0; t = e.slides[a]; a++) {
                            if (n += '<li id="accessibility-' + t.id + '" class="accelibility-slide-type-' + t.type + '">', n += "<h1>" + (t.title || t.displayName) + "</h1>", t.story && "character" === t.type && (t.story.subtitle && (n += "<blockquote>&ldquo;" + t.story.subtitle + "&rdquo; <cite>" + t.displayName + "</cite></blockquote>"), t.story.copy))for (var i, o = 0; i = t.story.copy[o]; o++)n += "<p>" + i + "</p>";
                            n += "</li>"
                        }
                        $("#accessibility ul").html(n)
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/Accessibility.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 10: [function (e, t) {
                (function () {
                    var e, n, a = {}, i = function (t) {
                        e = t, d(), r(), o()
                    }, o = function () {
                    }, r = function () {
                        $("html").hasClass("tablet") || ($('<source src="" type="audio/ogg">').appendTo($("#audio-loop")), $('<source src="" type="audio/mpeg">').appendTo($("#audio-loop")), $("#audio-loop")[0].play())
                    }, s = function () {
                        $("html").hasClass("tablet") || $("#audio-loop").animate({volume: 0}, 800)
                    }, l = function () {
                        $("html").hasClass("tablet") || "on" === $("#sound-label").data("status") && $("#audio-loop").animate({volume: 1}, 800)
                    }, d = function () {
                    }, u = function () {
                        $("#sound-label").text("On"), $("#sound-btn").css("opacity", 1), $("#sound-label").data("status", "on"), n.volume(1), ($(".video").hasClass("vjs-waiting") || $(".video").hasClass("vjs-paused")) && l(), "cbc" == e && $f($("#videovimeo")[0]).api("setVolume", 1), analyticos.trackEvent("Audio Global - Phase2", "Sound", "On", 1)
                    }, c = function () {
                        $("#sound-label").text("Off"), $("#sound-btn").css("opacity", .2), $("#sound-label").data("status", "off"), n.volume(0), ($(".video").hasClass("vjs-waiting") || $(".video").hasClass("vjs-paused")) && s(), "cbc" == e && $f($("#videovimeo")[0]).api("setVolume", 0), analyticos.trackEvent("Audio Global - Phase2", "Sound", "Off", 1)
                    }, f = function (e) {
                        s(), n.src([{
                            type: 'video/mp4;codecs="avc1.42E01E, mp4a.40.2"',
                            src: Global.assetBucket + e + ".mp4"
                        }, {
                            type: 'video/webm;codecs="vp8, vorbis"',
                            src: Global.assetBucket + e + ".webm"
                        }]), n.on("loadeddata", function () {
                            $(".video-wrapper").addClass("fade-in").removeClass("fade-out"), g(), p()
                        }), analyticos.trackEvent("Slide Events - Phase2", "Played Video", e, 1)
                    }, h = function () {
                        n.pause(), $(".video-wrapper").removeClass("fade-in").addClass("fade-out"), n.src(null), n.poster(null), w()
                    }, p = function () {
                        $(".phase2-controls, #bottom-pretty, .corner-pretty").addClass("fade-out").removeClass("fade-in"), $(".vjs-control-bar").show()
                    }, w = function () {
                        $(".phase2-controls, #bottom-pretty, .corner-pretty").addClass("fade-in").removeClass("fade-out"), $(".vjs-control-bar").hide()
                    }, g = function () {
                        if ($("html").hasClass("ios7"))return void $("#video-testimonial video").css({
                            width: "100%",
                            height: "100%"
                        });
                        var e = $(".top-banner-bet").outerHeight(), t = $(".top-nav").outerHeight() + $("#bottom-nav").outerHeight(), n = $(window).width(), a = "cbc" == Global.broadcaster ? $(window).height() - t : $(window).height() - (t + e), i = window.config.phase2.stageHeight, o = window.config.phase2.stageWidth, r = o / i, s = n / a;
                        if (s > r)$("#video-testimonial video").css({width: "auto", height: "100%"}); else if (r > s) {
                            var l = 674 * n / 1024, d = ($(".video-js").height() - l) / 2;
                            $("#video-testimonial video").css({width: "100%", height: "auto", marginTop: d})
                        }
                    };
                    t.exports = {
                        init: i,
                        events: a,
                        hideVideo: h,
                        showVideo: f,
                        soundoff: c,
                        soundon: u,
                        muteAudio: s,
                        unMuteAudio: l
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/AudioVideoControls.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 11: [function (e, t) {
                (function () {
                    if (window.isMask)var n = e("./SpriteMaskLoader.js");
                    var a = {}, i = [], o = ($.ajax({
                        type: "GET",
                        url: "",
                        dataType: "xml",
                        timeout: 5e3
                    }), []), r = function (e) {
                        s(e)
                    }, s = function (e) {
                        var t = l(), n = $.getJSON(window.config.assetPhase2 + "data/p2-default.json");
                        $.when(t, n).done(function (t, n) {
                            a = {slides: t, defaults: n[0]};
                            for (var i, r = 0; i = a.slides[r]; r++)$.inArray(i.id, o) >= 0 && (i.locked = !0);
                            u(e)
                        })
                    }, l = function () {
                        var e = new $.Deferred, t = $.getJSON(window.config.assetPhase2 + "data/p2-slides.json");
                        return t.done(function (t) {
                            var n = t;
                            e.resolve(n)
                        }), e.promise()
                    }, d = function () {
                        var e = parseInt(window.location.hash.replace("#", ""));
                        return 14 >= e && e >= 0 ? e : 0
                    }, u = function (e) {
                        window.isTD && (i.push(window.config.assetPhase2 + "slides/home_bg2-td.png"), i.push(window.config.assetPhase2 + "slides/end-td.png")), i.push(window.config.assetPhase2 + "buttons/btn_story_active.png"), i.push(window.config.assetPhase2 + "buttons/btn_story_locked.png"), i.push(window.config.assetPhase2 + "buttons/btn_story.png"), i.push(window.config.assetPhase2 + "buttons/btn_video_active.png"), i.push(window.config.assetPhase2 + "buttons/btn_video_locked.png"), i.push(window.config.assetPhase2 + "buttons/btn_video.png");
                        for (var t = 0; t <= a.slides.length - 1; t++)if (a.slides[t].layers)for (var n = 0; n <= a.slides[t].layers.length - 1; n++)i.push(a.slides[t].layers[n].url);
                        window.isMask ? (i.push(window.config.assetPhase2 + "mask-splash-200.png"), $.when(c(i), f()).done(function () {
                            e(a)
                        })) : $.when(c(i)).done(function () {
                            e(a)
                        })
                    }, c = function (e) {
                        var t = new $.Deferred, n = new PIXI.AssetLoader(e);
                        return n.onComplete = function () {
                            t.resolve()
                        }, setTimeout(function () {
                            "pending" === t.state() && t.reject()
                        }, 1e4), n.load(), t.promise()
                    }, f = function () {
                        var e = new $.Deferred;
                        return n.makeSpriteSheet("splash", {
                            spriteWidth: 400,
                            spriteHeight: 300,
                            numSprites: 32,
                            startSprite: 0,
                            url: "images/mask-splash-200.png"
                        }, function (t) {
                            window.spriteSheets = t, e.resolve()
                        }), e.promise()
                    };
                    t.exports = {load: r, slidesData: a, entryPoint: d}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/DataLoader.js", "/phase2")
            }, {"+7ZJp0": 4, "./SpriteMaskLoader.js": 18, buffer: 1}], 12: [function (e, t) {
                (function () {
                    var e = {}, n = {}, a = function (e) {
                        n = e, o()
                    }, i = function () {
                        return !$(".story-wrapper").hasClass("open") && ($(".video").hasClass("vjs-waiting") || $(".video").hasClass("vjs-paused"))
                    }, o = function () {
                        if ($("body").on("mousewheel", util.debounce(function (t, n) {
                                i() && (0 > n ? $(e).trigger("nextSlide") : n > 0 && $(e).trigger("prevSlide"))
                            }, n.transitionDuration, !0)), $("body").keydown(function (t) {
                                i() && (40 == t.which || 39 == t.which ? $(e).trigger("nextSlide") : (37 == t.which || 38 == t.which) && $(e).trigger("prevSlide"))
                            }), Modernizr.touch) {
                            var t = new Hammer($("body")[0]);
                            t.on("panleft", function () {
                                i() && $(e).trigger("nextSlide")
                            }), t.on("panright", function () {
                                i() && $(e).trigger("prevSlide")
                            })
                        }
                    };
                    t.exports = {init: a, events: e}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/InteractionControls.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 13: [function (e, t) {
                (function () {
                    window.stageContainer = stageContainer = new PIXI.DisplayObjectContainer;
                    var e = null, n = null, a = $(window).width(), i = $(window).height(), o = function () {
                        r()
                    }, r = function () {
                        var t = document.getElementById("phase2-stage");
                        window.renderer = e = -1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0 || $("html").hasClass("tablet") ? new PIXI.CanvasRenderer(a, i, {
                            view: t,
                            transparent: !0
                        }) : new PIXI.autoDetectRecommendedRenderer(a, i, {
                            view: t,
                            transparent: !0
                        }), window.stage = n = new PIXI.Stage(16777215), n.addChild(stageContainer), requestAnimFrame(s)
                    }, s = function () {
                        "true" == Global.debug && window.stats.begin(), e.render(n), requestAnimFrame(s), "true" == Global.debug && window.stats.end()
                    };
                    t.exports = {init: o}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/PixiRenderer.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 14: [function (e, t) {
                (function () {
                    var n = new PIXI.DisplayObjectContainer, a = e("./SlidesNav.js"), i = e("./SlidesBuild.js"), o = $("#p2-mini-nav"), r = 2, s = [], l = [], d = {};
                    window.slidesContainer = n;
                    var u = function (e) {
                        d = e, i.init(e);
                        var t = c().done();
                        return t
                    }, c = function () {
                        var e = new $.Deferred;
                        return window.stageContainer.addChild(n), timelineMaxAnim.add(TweenMax.set(n, {x: n.pivot.x}), 0), h().done(function () {
                            e.resolve()
                        }), e.promise()
                    }, f = function () {
                        for (var e = s.length - 1; e >= 0; e--) {
                            var t = s[e];
                            if (n.addChild(t), s[e + 2])for (var a, i = 0; a = s.slice(e + 2, s.length)[i]; i++)timelineMaxAnim.add(TweenMax.to(s[e + i + 2], r, {
                                alpha: 0,
                                ease: Linear.easeNone
                            }), e * r);
                            0 !== e && s[e + 1] && timelineMaxAnim.add(TweenMax.to(s[e + 1], r, {
                                overwrite: !1,
                                alpha: .7,
                                ease: Linear.easeNone
                            }), e * r), timelineMaxAnim.add(TweenMax.to(s[e], r, {
                                overwrite: !1,
                                alpha: 1,
                                ease: Linear.easeNone
                            }), e * r), s[e - 1] && timelineMaxAnim.add(TweenMax.to(s[e - 1], r, {
                                overwrite: !1,
                                alpha: .3,
                                ease: Linear.easeNone
                            }), e * r), bgAnim = g(e, 0 === e ? 0 : r), mgAnim = m(e, r), fgAnim = p(e, r), 0 !== e ? (timelineMaxAnim.add(w(e), .1), timelineMaxAnim.add(bgAnim, e * r - r)) : timelineMaxAnim.add(bgAnim, .1), timelineMaxAnim.add(mgAnim, e * r), timelineMaxAnim.add(fgAnim, e * r + r), timelineMaxAnim.addLabel(e, e * r + r)
                        }
                    }, h = function () {
                        for (var e, t = new $.Deferred, n = [], r = 0; e = d.slides[r]; r++)"character" === e.type && (e = $.extend(!0, {}, d.defaults.slide, e)), window.isTD && ("home" == e.type && (e.layers[2].url = e.layers[2].url.replace("home_bg2", "home_bg2-td")), "end" == e.type && (e.layers[0].url = e.layers[0].url.replace("end", "end-td"))), o.append(a.addNavItem(e, r)), l[r] = {
                            layers: [],
                            id: d.slides[r].id
                        }, n[r] = i.addSlide(e, r, l[r].layers);
                        return $.when.apply($, n).done(function () {
                            s = Array.prototype.slice.call(arguments), f(), t.resolve()
                        }), timelineMaxAnim.currentTime = 0, timelineMaxAnim.gotoAndStop("0"), t.promise()
                    }, p = function (e, t) {
                        for (var n, a = l[e], i = [], o = a.layers.length - 1; o >= 0; o--) {
                            n = a.layers[o];
                            var r = "default" === n.layerData.transition.bgDelay ? .08 * o : n.layerData.transition.bgDelay;
                            switch (i.push(TweenMax.to(n.scale, t, {
                                ease: Linear.easeNone,
                                x: n.layerData.fgScale,
                                y: n.layerData.fgScale
                            })), i.push(TweenMax.to(n, t, {
                                ease: Linear.easeNone,
                                x: n.layerData.fgX + n.pivot.x,
                                y: n.layerData.fgY + n.pivot.y
                            })), n.layerData.transition.type) {
                                case"alpha":
                                    i.push(TweenMax.to(n, t, {ease: Linear.easeNone, alpha: 0, delay: r}));
                                    break;
                                case"mask":
                                    i.push(TweenMax.to(n, t, {ease: Linear.easeNone, alpha: 0, overwrite: !1, delay: r}));
                                    break;
                                case"none":
                                    n.layerData.preview && (i.push(TweenMax.to(n, t - r, {
                                        ease: Linear.easeNone,
                                        alpha: 1,
                                        delay: r
                                    })), i.push(TweenMax.to(n.layerData.preview, .25 * t, {
                                        ease: Linear.easeNone,
                                        alpha: 0
                                    })), i.push(TweenMax.to(n.layerData.headshot, .35 * t, {
                                        ease: Linear.easeNone,
                                        alpha: 1
                                    })))
                            }
                        }
                        return i
                    }, w = function (e) {
                        for (var t, n = l[e], a = [], i = 0; i < n.layers.length; i++)switch (t = n.layers[i], a.push(TweenMax.to(t, 0, {
                            ease: Linear.easeNone,
                            x: 400,
                            y: -200,
                            alpha: 0
                        })), a.push(TweenMax.to(t.scale, 0, {
                            ease: Linear.easeNone,
                            x: .1,
                            y: .1
                        })), t.layerData.transition.type) {
                            case"alpha":
                                a.push(TweenMax.to(t, 0, {
                                    ease: Linear.easeNone,
                                    alpha: t instanceof PIXI.MovieClip ? 1 : 0
                                }));
                                break;
                            case"none":
                                t.layerData.preview && (a.push(TweenMax.to(t, 0, {
                                    ease: Linear.easeNone,
                                    alpha: 1
                                })), a.push(TweenMax.to(t.layerData.preview, 0, {
                                    ease: Linear.easeNone,
                                    alpha: 1
                                })), a.push(TweenMax.to(t.layerData.headshot, 0, {ease: Linear.easeNone, alpha: 0})))
                        }
                        return a
                    }, g = function (e, t) {
                        for (var n, a = l[e], i = [], o = 0; o < a.layers.length; o++)switch (n = a.layers[o], i.push(TweenMax.to(n.scale, t, {
                            ease: Linear.easeNone,
                            x: n.layerData.bgScale,
                            y: n.layerData.bgScale
                        })), i.push(TweenMax.to(n, t, {
                            x: n.layerData.bgX + n.pivot.x,
                            y: n.layerData.bgY + n.pivot.y,
                            ease: Linear.easeNone,
                            onComplete: function (e) {
                                e.layerData.hover && (e.layerData.hover.interactive = !0)
                            },
                            onCompleteParams: [n]
                        })), n.layerData.transition.type) {
                            case"alpha":
                                i.push(TweenMax.to(n, t, {
                                    ease: Linear.easeNone,
                                    alpha: n instanceof PIXI.MovieClip ? 1 : 0
                                }));
                                break;
                            case"mask":
                                n.tweenval = {}, n.tweenval.currentFrame = 0, i.push(TweenMax.to(n, 0, {
                                    onStartParams: [n],
                                    ease: Linear.easeNone,
                                    delay: "default" === n.layerData.transition.delay ? .08 * o : n.layerData.transition.delay
                                }));
                                break;
                            case"none":
                                n.layerData.preview && (i.push(TweenMax.to(n, t, {
                                    ease: Linear.easeNone,
                                    alpha: 1
                                })), i.push(TweenMax.to(n.layerData.preview, .25 * t, {
                                    ease: Linear.easeNone,
                                    alpha: 1
                                })), i.push(TweenMax.to(n.layerData.headshot, .35 * t, {ease: Linear.easeNone, alpha: 0})))
                        }
                        return i
                    }, m = function (e, t) {
                        e = "undefined" != typeof e ? parseInt(e, 10) : currentSlide;
                        for (var n, a = (window.lastSlide, []), i = l[e], o = 0; o < i.layers.length; o++) {
                            n = i.layers[o];
                            var r = "default" === n.layerData.transition.delay ? .08 * o : n.layerData.transition.delay;
                            switch (a.push(TweenMax.to(n.scale, t, {
                                ease: Linear.easeNone,
                                x: n.layerData.scale || 1,
                                y: n.layerData.scale || 1
                            })), a.push(TweenMax.to(n, t, {
                                ease: Linear.easeNone,
                                x: n.layerData.x + n.pivot.x,
                                y: n.layerData.y + n.pivot.y,
                                onUpdate: function (e) {
                                    e.layerData.hover && (e.layerData.hover.interactive = !0)
                                },
                                onUpdateParams: [n],
                                onComplete: function (e) {
                                    e.layerData.hover && (e.layerData.hover.interactive = !1)
                                },
                                onCompleteParams: [n]
                            })), n.layerData.transition.type) {
                                case"alpha":
                                    a.push(TweenMax.to(n, t - r, {
                                        ease: Linear.easeNone, alpha: 1, onStart: function (e) {
                                            e instanceof PIXI.MovieClip && !$("html").hasClass("tablet") && (e.gotoAndStop(0), TweenMax.to(e, 2.5, {
                                                ease: Linear.easeNone,
                                                currentFrame: e.totalFrames - 1,
                                                onUpdate: function () {
                                                    e.gotoAndStop(e.currentFrame)
                                                }
                                            }))
                                        }, onStartParams: [n], delay: r
                                    }));
                                    break;
                                case"mask":
                                    a.push(TweenMax.to(n, t - r, {
                                        ease: Linear.easeNone, alpha: 1, onStart: function (e) {
                                            e instanceof PIXI.MovieClip && !$("html").hasClass("tablet") && (e.gotoAndStop(0), TweenMax.to(e, 2.5, {
                                                ease: Linear.easeNone,
                                                currentFrame: e.totalFrames - 1,
                                                onUpdate: function () {
                                                    e.gotoAndStop(e.currentFrame)
                                                }
                                            }))
                                        }, onStartParams: [n], delay: r
                                    }));
                                    break;
                                case"none":
                                    n.layerData.preview && (a.push(TweenMax.to(n.layerData.preview, .25 * t, {
                                        ease: Linear.easeNone,
                                        alpha: 0
                                    })), a.push(TweenMax.to(n.layerData.headshot, .25 * t, {
                                        ease: Linear.easeNone,
                                        alpha: 1
                                    })))
                            }
                        }
                        return a
                    };
                    t.exports = {init: u, openSlide: m}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/Slides.js", "/phase2")
            }, {"+7ZJp0": 4, "./SlidesBuild.js": 15, "./SlidesNav.js": 16, buffer: 1}], 15: [function (e, t) {
                (function () {
                    var e = {}, n = {}, a = "https://www.facebook.com/TheBookofNegroes", i = "https://twitter.com/bookofnegroes", o = new PIXI.Graphics, r = new PIXI.Graphics, s = new PIXI.Graphics, l = new PIXI.Graphics, d = new PIXI.Graphics, u = new PIXI.Graphics, c = new PIXI.Graphics, f = function (t) {
                        e = t
                    }, h = function (e) {
                        var t = new $.Deferred, n = 1, a = window.spriteSheets[e.transition.maskID], i = new Image, o = [];
                        return i.addEventListener("load", function () {
                            for (var r, s, l = 0, d = 0; d < a.sprites.length; l++, d += n)r = document.createElement("canvas"), s = r.getContext("2d"), r.width = i.width, r.height = i.height, s.drawImage(a.sprites[d].canvas, -250, -250, i.width + 350, i.height + 350), s.globalCompositeOperation = "source-in", s.drawImage(i, 0, 0, i.width, i.height), o[l] = new PIXI.Texture(PIXI.BaseTexture.fromCanvas(r));
                            var u = new PIXI.MovieClip(o);
                            u.layerData = e, u.animationSpeed = .15, u.loop = !1, t.resolve(u)
                        }), i.src = e.url, t.promise()
                    }, p = function (e, t, n) {
                        var a = new $.Deferred, i = e.layers, o = [];
                        if (i && i instanceof Array)for (var r, s = i.length - 1; r = i[s]; s--)o[s] = g(r, s, t);
                        return $.when.apply($, o).done(function () {
                            var t = Array.prototype.slice.call(arguments);
                            "end" === e.type && (t = y().concat(t));
                            var i = new PIXI.DisplayObjectContainer;
                            i.width = window.config.phase2.stageWidth, i.height = window.config.phase2.stageHeight;
                            for (var o, r = t.length - 1; o = t[r]; r--)n[r] = o, o.pivot.x = (o._width || o.width) / 2, o.pivot.y = (o._height || o.height) / 2, o.layerData.bgX = o.layerData.bgX || ((o.layerData.x || o.x) + o.pivot.x) * (1 - .1 * (r + 1)), o.layerData.bgY = o.layerData.bgY || ((o.layerData.y || o.y) + o.pivot.y) * (1 - .1 * (r + 1)), o.layerData.bgScale = o.layerData.bgScale || 1 * (1 - .1 * (r + 1)), o.layerData.fgX = o.layerData.fgX || ((o.layerData && o.layerData.x || o.x) + o.pivot.x) * (1 + .4 * (t.length - r)), o.layerData.fgY = o.layerData.fgY || ((o.layerData && o.layerData.y || o.y) + o.pivot.y) * (1 + .4 * (t.length - r)), o.layerData.fgScale = o.layerData.fgScale || 1 * (1 + .6 * (t.length - r)), o.x = 512, o.y = 10, o.alpha = 0, i.addChild(o);
                            i.slideData = $.extend(!0, {}, {width: i._width, height: i._height}, e), function (e) {
                                e.slideData.layers = t
                            }(i);
                            for (var s, l = t.length - 1; s = t[l]; l--)s.scale.x = s.scale.y = .2;
                            i.pivot.x = i.slideData.width / 2, i.pivot.y = i.slideData.height / 2, i.x = i.pivot.x, i.y = i.pivot.y, i.id = e.id, i.alpha = 0, a.resolve(i)
                        }), a.promise()
                    }, w = function (e) {
                        var t, n = new $.Deferred;
                        return "mask" !== e.transition.type || !e.transition.maskID || $("html").hasClass("tablet") ? (t = new PIXI.Sprite(PIXI.Texture.fromImage(e.url)), t.layerData = e, n.resolve(t)) : h(e).done(function (e) {
                            n.resolve(e)
                        }), n.promise()
                    }, g = function (t, a, i) {
                        var o = e.slides[i], r = new $.Deferred;
                        return w(t).done(function (e) {
                            var a, s, l;
                            "text" === t.type && (a = new PIXI.DisplayObjectContainer, a.layerData = t, a.addChild(e), o.locked && (lockedBtn = m({
                                assetName: "lock",
                                x: -55,
                                y: e.height + 30,
                                data: o
                            }), a.addChild(lockedBtn)), o.video && (s = m({
                                assetName: "video",
                                x: 10,
                                y: e.height + 40,
                                data: o,
                                action: function (e) {
                                    e.locked || $(n).trigger("showVideo", e.video)
                                }
                            }), a.addChild(s)), o.story && (l = m({
                                assetName: "story",
                                x: o.video ? s.width + s.x + 10 : 0,
                                y: e.height + 40,
                                data: o,
                                action: function (e) {
                                    e.locked || $(n).trigger("showStory", i)
                                }
                            }), a.addChild(l)), e = a), "headshot" === t.type && (a = new PIXI.DisplayObjectContainer, a.layerData = t, a.addChild(e), t.hover = new PIXI.Sprite(e.texture), t.hover.width = e.width, t.hover.height = e.height, t.hover.interactive = !0, t.hover.buttonMode = !0, t.hover.alpha = 0, t.hover.allow = !0, t.hover.mouseover = function () {
                                t.hover.alpha = 1
                            }, t.hover.mouseout = function () {
                                t.hover.alpha = 0
                            }, t.hover.click = t.hover.tap = function () {
                                $(n).trigger("jumptoSlide", i)
                            }, t.headshot = e, t.headshot.alpha = 0, t.preview = new PIXI.Sprite.fromImage("./images/slides/blank.png"), t.preview.width = e.width, t.preview.height = e.height, a.addChild(t.preview), a.addChild(t.hover), e = a), e.layerData.width = e._width || e.width, e.layerData.height = e._height || e.height, e.pivot.x = e.layerData.width / 2, e.pivot.y = e.layerData.height / 2, e.x = e.layerData.x - e.pivot.x, e.y = e.layerData.y - e.pivot.y, e.type = t.type, e.alpha = e instanceof PIXI.MovieClip || e.layerData.preview ? 1 : 0, r.resolve(e)
                        }), r.promise()
                    }, m = function (e) {
                        var t = {
                            assetName: "generic", data: {}, x: 0, y: 0, action: function () {
                            }
                        };
                        e = $.extend({}, t, e);
                        var n = new PIXI.DisplayObjectContainer, a = new PIXI.Sprite.fromImage(window.config.assetPhase2 + "buttons/btn_" + e.assetName + (e.data.locked ? "_locked.png" : ".png"));
                        return e.data.locked || (n.buttonMode = !0, n.interactive = !0, n.states = {
                            normal: PIXI.Texture.fromImage(window.config.assetPhase2 + "buttons/btn_" + e.assetName + ".png"),
                            active: PIXI.Texture.fromImage(window.config.assetPhase2 + "buttons/btn_" + e.assetName + "_active.png")
                        }), n.addChild(a), n.x = e.x, n.y = e.y, n.click = n.tap = function () {
                            e.action(e.data)
                        }, n.mouseover = function () {
                            e.data.locked || a.setTexture(this.states.active)
                        }, n.mouseout = function () {
                            e.data.locked || a.setTexture(this.states.normal)
                        }, n
                    }, v = function (e, t, n) {
                        e.pivot.x = e.width / 2, e.pivot.y = e.height / 2, e.x = t + e.pivot.x, e.y = n + e.pivot.y
                    }, y = function () {
                        var e = [];
                        r.drawRect(0, 0, 120, 35), r.buttonMode = !0, r.interactive = !0, r.hitArea = new PIXI.Rectangle(0, 0, 120, 35), r.mousedown = r.touchstart = function () {
                            $(n).trigger("startOver")
                        }, v(r, -12, 543), e.push(r), s.drawRect(0, 0, 30, 30), s.buttonMode = !0, s.interactive = !0, s.hitArea = new PIXI.Rectangle(0, 0, 30, 30), s.mousedown = s.touchstart = function () {
                            window.open(a, "_blank"), analyticos.trackEvent("Social Media - Phase2", "Facebook Followed", "Last Slide", 1), analyticos.trackSocial("Facebook", " Followed", "Last Slide - " + a)
                        }, v(s, 871, 554), e.push(s), l.drawRect(0, 0, 30, 30), l.buttonMode = !0, l.interactive = !0, l.hitArea = new PIXI.Rectangle(0, 0, 30, 30), l.mousedown = l.touchstart = function () {
                            window.open(i, "_blank"), analyticos.trackEvent("Social Media - Phase2", "Twitter Followed", "Last Slide", 1), analyticos.trackSocial("Twitter", " Followed", "Last Slide " + i)
                        }, v(l, 905, 554), e.push(l), o.drawRect(0, 0, 338, 85), o.buttonMode = !0, o.hitArea = new PIXI.Rectangle(0, 0, 338, 85), o.mousedown = o.touchstart = function () {
                            analyticos.trackEvent("Navigation", "Navigated to Phase1", "Explore More Passages - Last Slide", 1), setTimeout(function () {
                                window.open(window.config.phase1URL, "_self")
                            }, 60)
                        }, v(o, 164, 316), e.push(o), "cbc" == Global.broadcaster && (d.drawRect(0, 0, 146, 46), d.buttonMode = !0, d.interactive = !0, d.hitArea = new PIXI.Rectangle(0, 0, 146, 46), d.mousedown = d.touchstart = function () {
                            window.open("https://itunes.apple.com/ca/app/book-negroes-historical-guide/id953612527?mt=8", "_blank"), analyticos.trackEvent("Ecommerce", "Buy - iTunes link", "Companion App", 1)
                        }, v(d, 290, 530), e.push(d), c.drawRect(0, 0, 280, 35), c.buttonMode = !0, c.interactive = !0, c.hitArea = new PIXI.Rectangle(0, 0, 280, 35), c.mousedown = c.touchstart = function () {
                            window.open("http://cbc.ca/bookofnegroes", "_blank")
                        }, v(c, 440, 290), e.push(c), u.drawRect(0, 0, 146, 46), u.buttonMode = !0, u.interactive = !0, u.hitArea = new PIXI.Rectangle(0, 0, 146, 46), u.mousedown = u.touchstart = function () {
                            window.open("https://play.google.com/store/apps/details?id=com.cbc.bookofnegroes", "_blank"), analyticos.trackEvent("Ecommerce", "Buy - android link", "Companion App", 1)
                        }, v(u, 440, 530), e.push(u));
                        var t = new PIXI.Text(Global.shareCopy2, {
                            font: "400 30px kepler-std-caption",
                            fill: "#421f0b",
                            align: "center"
                        });
                        v(t, window.config.phase2.stageWidth / 2 - t.width, 285), e.push(t);
                        for (var f, h = 0; f = e[h]; h++)f.layerData = {
                            width: f._width || f.width,
                            height: f._height || f.width,
                            bgX: 0,
                            bgY: 0,
                            bgScale: 3,
                            x: f.x || 0,
                            y: f.y || 0,
                            scale: 1,
                            fgX: 0,
                            fgY: 0,
                            fgScale: 3,
                            transition: {type: "alpha", delay: .1}
                        };
                        return I(), e
                    }, b = function () {
                        o.interactive = !0, r.interactive = !0, s.interactive = !0, l.interactive = !0, d.interactive = !0, u.interactive = !0, c.interactive = !0
                    }, I = function () {
                        o.interactive = !1, r.interactive = !1, s.interactive = !1, l.interactive = !1, d.interactive = !1, u.interactive = !1, c.interactive = !1
                    };
                    t.exports = {
                        buildMaskedSprite: h,
                        buildLayer: w,
                        addSlide: p,
                        init: f,
                        events: n,
                        activateBtns: b,
                        deactivateBtns: I
                    }
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/SlidesBuild.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 16: [function (e, t, n) {
                (function () {
                    var e = $("#p2-mini-nav"), t = {};
                    n.init = function () {
                        a()
                    };
                    var a = function () {
                        o(), $(window).resize(function () {
                            o()
                        })
                    }, i = function (e) {
                        $(e.target).width(.4 * e.target.width).height(.4 * e.target.height)
                    };
                    n.setActiveNav = function (t) {
                        var n = !1;
                        0 === $(".slide-nav-item.active").length && (n = !0), e.children(".slide-nav-item").removeClass("active"), e.children(".slide-nav-item:nth-child(" + (t + 1) + ")").addClass("active"), n && e.children("#slide-nav-home").hasClass("active") ? e.addClass("initial") : e.removeClass("initial")
                    }, n.addNavItem = function (e, n) {
                        var a, o = $("<li>", {id: "slide-nav-" + e.id, "class": "slide-nav-item"});
                        e.locked && o.addClass("locked"), e.navImage && (o.addClass("slide-nav-item-character"), a = $('<img class="character-image" src="' + e.navImage + '" />').on("load", i));
                        var r = '<div class="hover-item"><div class="label">';
                        return r += '<span class="icon-lock"><img src="./images/slides/blank.png"></span>', r += "home" != e.id ? '<span class="name">' + e.displayName.replace(" ", "<br />") + "</span>" : '<span class="name">' + e.displayName.replace("Scroll", $("html").hasClass("tablet") ? "Swipe" : "Scroll") + "</span>", r += "</div></div>", $(r).prepend(a).appendTo(o), o.on("click", function () {
                            $(t).trigger("jumptoSlide", n)
                        }), o
                    };
                    var o = function () {
                        var e = $(".top-banner-bet").outerHeight(), t = $(".top-nav").outerHeight() + $("#bottom-nav").outerHeight(), n = $(window).width(), a = "cbc" == Global.broadcaster ? $(window).height() - t : $(window).height() - (t + e), i = window.config.phase2.stageHeight, o = window.config.phase2.stageWidth, r = $(".phase2-controls, .lock-message"), s = 1, l = o / i, d = n / a;
                        d > l ? s = a / i : l > d && (s = n / o), r.css({
                            transform: "scale(" + s + ")",
                            marginLeft: -r.width() / 2
                        })
                    };
                    n.events = t
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/SlidesNav.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 17: [function (e, t) {
                (function () {
                    var e, n = Global.host + "desktop/phase2/index.html", a = [], i = {
                        container: new PIXI.DisplayObjectContainer,
                        label: new PIXI.Sprite(PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")),
                        social: [{
                            id: "facebook",
                            container: new PIXI.Sprite(PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")),
                            norm: PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png"),
                            hover: PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")
                        }, {
                            id: "twitter",
                            container: new PIXI.Sprite(PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")),
                            norm: PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png"),
                            hover: PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")
                        }, {
                            id: "tumblr",
                            container: new PIXI.Sprite(PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")),
                            norm: PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png"),
                            hover: PIXI.Texture.fromImage(window.config.assetPhase2 + "slides/blank.png")
                        }]
                    }, o = function (t, n) {
                        a = t, n = n || {}, e = $.extend(!0, {}, i, n);
                        var o = r(e);
                        return s(e), {container: o, toggleSocial: p}
                    }, r = function (e) {
                        for (var t = 0; t <= e.social.length - 1; t++) {
                            var i = e.social[t].container;
                            i.buttonMode = !0, i.interactive = !0, i.x = 38 * (t + 1), i.arrayIndex = t, e.container.addChild(i)
                        }
                        e.label && (e.label.x = -20, e.container.addChild(e.label)), e.container.y = 610, e.container.x = 860, e.container.visible = !1;
                        for (var t = 0; t <= a.slides.length - 1; t++)!function (e) {
                            var t = (n + "#" + e).toString();
                            a.slides[e].longURL = t, a.slides[e].shortURL = "", window.util.bitly(t, function (t) {
                                a.slides[e].shortURL = t
                            })
                        }(t);
                        return e.container
                    }, s = function (e) {
                        for (var t = 0; t <= e.social.length - 1; t++) {
                            var i = e.social[t].container;
                            i.mouseover = function (t) {
                                this.setTexture(e.social[t.target.arrayIndex].hover)
                            }, i.mouseout = function (t) {
                                this.setTexture(e.social[t.target.arrayIndex].norm)
                            }, i.click = i.tap = function (t) {
                                var i, o, r = Global.host + "desktop/asset/phase2/share/" + (a.slides[window.currentSlide()].id + ".jpg").replace("../", ""), s = "“" + a.slides[window.currentSlide()].story.subtitle + "” -" + a.slides[window.currentSlide()].displayName, f = (n + "#" + window.currentSlide()).toString();
                                if (a.slides[window.currentSlide()].shortURL)var i = a.slides[window.currentSlide()].shortURL, o = "“" + a.slides[window.currentSlide()].story.subtitle + "” -" + a.slides[window.currentSlide()].displayName; else var i = f, o = "";
                                var h = Global.P2shareCopy1, p = Global.P2shareCopy2, w = p + " " + Global.shareHash;
                                switch (e.social[t.target.arrayIndex].id) {
                                    case"facebook":
                                        l(r, s, h, w, f);
                                        break;
                                    case"twitter":
                                        $("html").hasClass("ie") ? u(o, i) : d(r, o, i);
                                        break;
                                    case"tumblr":
                                        c(r, s + "\n" + w, f)
                                }
                            }
                        }
                    }, l = function (e, t, n, a, i) {
                        FB.ui({
                            method: "feed",
                            link: i,
                            app_id: Global.fbID,
                            name: n,
                            description: t,
                            caption: a,
                            picture: e
                        }, function (e) {
                            e && !e.error_code ? (analyticos.trackEvent("Social Media - Phase2", "Shared - Facebook - Success", "slide-" + window.currentSlide(), 1), analyticos.trackSocial("Facebook", "Share", i)) : analyticos.trackEvent("Social Media - Phase2", "Shared - Facebook - Failed", "slide-" + window.currentSlide(), 1)
                        })
                    }, d = function (e, t, n) {
                        var t = window.util.truncate(t, 50), a = $.sl.authenticate.login("twitter", {
                            scope: "",
                            window: {
                                name: "_blank",
                                specs: "width=500,height=293,menubar=no,resizable=no,toolbar=no,scrollbars=no,status=no",
                                replace: !1
                            }
                        });
                        a.then(function () {
                            var a = $.sl.authenticate.proxy("twitter", {
                                cmd: "/1.1/statuses/update_with_media.json",
                                type: "POST",
                                args: {url: e, status: t + " " + Global.shareHash + " " + n}
                            });
                            a.then(function (e) {
                                e.errors ? (alert("Posting Failed. Please try again later."), analyticos.trackEvent("Social Media - Phase2", "Shared - Twitter - Failed", "slide-" + window.currentSlide(), 1)) : ($("#overlay-twitter").removeClass("fade-out").addClass("fade-in"), setTimeout(function () {
                                    $("#overlay-twitter").removeClass("fade-in").addClass("fade-out")
                                }, 2e3), analyticos.trackEvent("Social Media - Phase2", "Shared - Twitter - Success", "slide-" + window.currentSlide(), 1), analyticos.trackSocial("Twitter", "Share", n))
                            }), a.fail(function () {
                                alert("Posting Failed. Please try again later."), analyticos.trackEvent("Social Media - Phase2", "Shared - Twitter - Failed Ajax", "slide-" + window.currentSlide(), 1)
                            })
                        }), a.fail(function () {
                        })
                    }, u = function (e, t) {
                        e = window.util.truncate(e, 95);
                        var n = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(e) + " " + encodeURIComponent(Global.shareHash) + "&url=" + encodeURIComponent(t), a = "width=450, height=480, menubar=no, resizable=no, toolbar=no, scrollbars=no, status=no, left=10, top=10";
                        window.open(n, "twitter", a).focus()
                    }, c = function (e, t, n) {
                        var a = "//www.tumblr.com/share/photo?source=" + encodeURIComponent(e) + "&caption=" + encodeURIComponent(t) + "&click_thru=" + encodeURIComponent(n), i = "width=450, height=480, menubar=no, resizable=no, toolbar=no, scrollbars=no, status=no, left=10, top=10";
                        window.open(a, "tumblr", i).focus(), analyticos.trackEvent("Social Media - Phase2", "Shared - Tumblr", "slide-" + window.currentSlide(), 1), analyticos.trackSocial("Tumblr", "Share", n)
                    }, f = function (e, t, n) {
                        t = t ? t : 0, TweenMax.to(e.container, t, {
                            onComplete: function () {
                                e.container.visible = !0, "undefined" != typeof n && n()
                            }
                        })
                    }, h = function (e, t, n) {
                        t = t ? t : 0, TweenMax.to(e.container, t, {
                            onComplete: function () {
                                e.container.visible = !1, "undefined" != typeof n && n()
                            }
                        })
                    }, p = function (t, n, a) {
                        t ? f(e, n, a) : h(e, n, a)
                    };
                    t.exports = {init: o}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/SocialControls.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 18: [function (e, t) {
                (function () {
                    var e = {}, n = function (e, t, n) {
                        if (!e instanceof Image)return !1;
                        for (var a = {
                            img: e,
                            sprites: [],
                            textures: []
                        }, i = Math.floor(t.spriteWidth * (t.startSprite + 1) / a.img.width) + Number(t.spriteWidth * (t.startSprite + 1) % a.img.width > 0), o = t.spriteWidth * (t.startSprite + 1) % a.img.width / t.spriteWidth, r = i, s = 0; r * t.spriteHeight <= a.img.height; r++)for (var l = o; l * t.spriteWidth <= a.img.width && s < t.numSprites; l++, s++)a.sprites[s] = {}, a.sprites[s].canvas = document.createElement("canvas"), a.sprites[s].ctx = a.sprites[s].canvas.getContext("2d"), a.sprites[s].canvas.width = t.spriteWidth, a.sprites[s].canvas.height = t.spriteHeight, a.sprites[s].ctx.globalCompositeOperation = "source-over", a.sprites[s].ctx.drawImage(a.img, (l - 1) * t.spriteWidth, (r - 1) * t.spriteHeight, t.spriteWidth, t.spriteHeight, 0, 0, t.spriteWidth, t.spriteHeight), a.textures[s] = new PIXI.Texture(PIXI.BaseTexture.fromCanvas(a.sprites[s].canvas));
                        a.clip = new PIXI.MovieClip(a.textures), n(a)
                    }, a = function (t, a, i) {
                        a = a || {
                                spriteWidth: 200,
                                spriteHeight: 200,
                                numSprites: 31,
                                startSprite: 0,
                                url: "images/mask-splash-200.png"
                            };
                        var o = new Image;
                        o.addEventListener("load", function () {
                            n(o, a, function (n) {
                                e[t] = n, i(e)
                            })
                        }), o.src = a.url
                    };
                    t.exports = {spriteSheets: e, makeSpriteSheet: a}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/SpriteMaskLoader.js", "/phase2")
            }, {"+7ZJp0": 4, buffer: 1}], 19: [function (e, t) {
                (function () {
                    var n, a, i = e("./AudioVideoControls.js"), o = i.events, r = function (e, t) {
                        n = e, a = t
                    }, s = function () {
                        $f($(".story #videovimeo")[0]).api("setVolume", 0)
                    }, l = function () {
                        $f($(".story #videovimeo")[0]).api("setVolume", 1)
                    }, d = function (e) {
                        var t = n.slides[e], i = t.story;
                        if (i.featureImage && $(".story .character-head").css("background-image", "url(" + i.featureImage + ")"), i.copy && $(".story .title").html($("<img>").attr("src", "../asset/phase2/story/" + t.id + "_title.png")), i.subtitle && $(".story .subtitle").html(i.subtitle), i.copy)for (var r, d = 0; r = i.copy[d]; d++)$(".story .copy").append($("<p>").html(r));
                        if ($(".story .subtitle").html(i.subtitle), i.videoID && "cbc" == a) {
                            $(".story #videovimeo").attr("src", "//player.vimeo.com/video/" + i.videoID + "?color=f26522&api=1&badge=0&byline=0&title=0&player_id=videovimeo");
                            var u = $f($(".story #videovimeo")[0]);
                            u.addEvent("ready", function () {
                                u.api("setVolume", "on" === $("#sound-label").data("status") ? 1 : 0)
                            }), $(o).trigger("bgsoundoff"), $(o).on("soundon", l), $(o).on("soundoff", s)
                        }
                        i.videoID_bet && "bet" == a && $(".story #videovimeo").attr("src", "http://www.bet.com/content/betcomprivate/video/the-book-of-negroes/" + i.videoID_bet + ".share.widgetid-502288.height-470.single.html")
                    }, u = function () {
                        $(".story .title").empty(), $(".story .subtitle").empty(), $(".story .copy").empty(), $(".story #videovimeo").attr("src", "")
                    }, c = function () {
                        if ("cbc" == a) {
                            var e = $f($(".story #videovimeo")[0]);
                            $(o).off("soundon", l), $(o).off("soundoff", s), $(o).trigger("bgsoundon"), e.api("pause"), e.api("unload")
                        }
                        "bet" == a && $(".story #videovimeo").attr("src", "")
                    }, f = function (e) {
                        u(), e = "undefined" != typeof e ? e : window.currentSlide(), d(e), $(".story").addClass("story-" + n.slides[e].id), $(".story-wrapper").addClass("open"), analyticos.trackEvent("Slide Events - Phase2", "Read Story", n.slides[e].id, 1)
                    }, h = function () {
                        $(".story").attr("class", "story"), $(".story-wrapper").removeClass("open"), c()
                    };
                    $(".story .btn-close").on("click", function () {
                        var e = window.currentSlide();
                        analyticos.trackEvent("Slide Events - Phase2", "Closed Story", n.slides[e].id, 1), h()
                    }), t.exports = {init: r, showStory: f, hideStory: h}
                }).call(this, e("+7ZJp0"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/phase2/StoryControls.js", "/phase2")
            }, {"+7ZJp0": 4, "./AudioVideoControls.js": 10, buffer: 1}]
        }, {}, [6]);
    }
});