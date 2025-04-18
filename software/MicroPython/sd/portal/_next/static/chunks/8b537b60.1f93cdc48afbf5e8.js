"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [767], {
        8099: function (t, e, i) {
            let s;
            i.d(e, {
                $1: function () {
                    return ib
                },
                $f: function () {
                    return im
                },
                AE: function () {
                    return iX
                },
                Eu: function () {
                    return sz
                },
                HQ: function () {
                    return sq
                },
                Nm: function () {
                    return tq
                },
                OO: function () {
                    return tT
                },
                S2: function () {
                    return i4
                },
                SJ: function () {
                    return sx
                },
                Sd: function () {
                    return sm
                },
                Uw: function () {
                    return iR
                },
                W$: function () {
                    return i2
                },
                ZO: function () {
                    return iZ
                },
                Zs: function () {
                    return i3
                },
                bF: function () {
                    return su
                },
                gB: function () {
                    return sf
                },
                hJ: function () {
                    return sr
                },
                l9: function () {
                    return to
                },
                lg: function () {
                    return tB
                },
                mH: function () {
                    return sy
                },
                p: function () {
                    return tr
                },
                qr: function () {
                    return iF
                },
                tk: function () {
                    return il
                },
                v5: function () {
                    return sC
                }
            });
            var o, n, r, l = i(4999),
                h = i(5794),
                a = i(7511);

            function c(t) {
                return (11 == t.nodeType ? t.getSelection ? t : t.ownerDocument : t).getSelection()
            }

            function d(t, e) {
                return !!e && (t == e || t.contains(1 != e.nodeType ? e.parentNode : e))
            }

            function u(t, e) {
                if (!e.anchorNode) return !1;
                try {
                    return d(t, e.anchorNode)
                } catch (t) {
                    return !1
                }
            }

            function f(t) {
                return 3 == t.nodeType ? S(t, 0, t.nodeValue.length).getClientRects() : 1 == t.nodeType ? t.getClientRects() : []
            }

            function p(t, e, i, s) {
                return !!i && (m(t, e, i, s, -1) || m(t, e, i, s, 1))
            }

            function g(t) {
                for (var e = 0;; e++)
                    if (!(t = t.previousSibling)) return e
            }

            function m(t, e, i, s, o) {
                for (;;) {
                    if (t == i && e == s) return !0;
                    if (e == (o < 0 ? 0 : v(t))) {
                        if ("DIV" == t.nodeName) return !1;
                        let i = t.parentNode;
                        if (!i || 1 != i.nodeType) return !1;
                        e = g(t) + (o < 0 ? 0 : 1), t = i
                    } else {
                        if (1 != t.nodeType || 1 == (t = t.childNodes[e + (o < 0 ? -1 : 0)]).nodeType && "false" == t.contentEditable) return !1;
                        e = o < 0 ? v(t) : 0
                    }
                }
            }

            function v(t) {
                return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length
            }

            function w(t, e) {
                let i = e ? t.left : t.right;
                return {
                    left: i,
                    right: i,
                    top: t.top,
                    bottom: t.bottom
                }
            }
            class b {
                constructor() {
                    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
                }
                eq(t) {
                    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset
                }
                setRange(t) {
                    let {
                        anchorNode: e,
                        focusNode: i
                    } = t;
                    this.set(e, Math.min(t.anchorOffset, e ? v(e) : 0), i, Math.min(t.focusOffset, i ? v(i) : 0))
                }
                set(t, e, i, s) {
                    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s
                }
            }
            let y = null;

            function x(t) {
                if (t.setActive) return t.setActive();
                if (y) return t.focus(y);
                let e = [];
                for (let i = t; i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument); i = i.parentNode);
                if (t.focus(null == y ? {
                        get preventScroll() {
                            return y = {
                                preventScroll: !0
                            }, !0
                        }
                    } : void 0), !y) {
                    y = !1;
                    for (let t = 0; t < e.length;) {
                        let i = e[t++],
                            s = e[t++],
                            o = e[t++];
                        i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != o && (i.scrollLeft = o)
                    }
                }
            }

            function S(t, e, i = e) {
                let o = s || (s = document.createRange());
                return o.setEnd(t, i), o.setStart(t, e), o
            }

            function M(t, e, i) {
                let s = {
                        key: e,
                        code: e,
                        keyCode: i,
                        which: i,
                        cancelable: !0
                    },
                    o = new KeyboardEvent("keydown", s);
                o.synthetic = !0, t.dispatchEvent(o);
                let n = new KeyboardEvent("keyup", s);
                return n.synthetic = !0, t.dispatchEvent(n), o.defaultPrevented || n.defaultPrevented
            }

            function k(t) {
                for (; t.attributes.length;) t.removeAttributeNode(t.attributes[0])
            }

            function C(t) {
                return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4)
            }
            class A {
                constructor(t, e, i = !0) {
                    this.node = t, this.offset = e, this.precise = i
                }
                static before(t, e) {
                    return new A(t.parentNode, g(t), e)
                }
                static after(t, e) {
                    return new A(t.parentNode, g(t) + 1, e)
                }
            }
            let D = [];
            class T {
                constructor() {
                    this.parent = null, this.dom = null, this.flags = 2
                }
                get overrideDOMText() {
                    return null
                }
                get posAtStart() {
                    return this.parent ? this.parent.posBefore(this) : 0
                }
                get posAtEnd() {
                    return this.posAtStart + this.length
                }
                posBefore(t) {
                    let e = this.posAtStart;
                    for (let i of this.children) {
                        if (i == t) return e;
                        e += i.length + i.breakAfter
                    }
                    throw RangeError("Invalid child in posBefore")
                }
                posAfter(t) {
                    return this.posBefore(t) + t.length
                }
                sync(t, e) {
                    if (2 & this.flags) {
                        let i = this.dom,
                            s = null,
                            o;
                        for (let n of this.children) {
                            if (7 & n.flags) {
                                if (!n.dom && (o = s ? s.nextSibling : i.firstChild)) {
                                    let t = T.get(o);
                                    (!t || !t.parent && t.canReuseDOM(n)) && n.reuseDOM(o)
                                }
                                n.sync(t, e), n.flags &= -8
                            }
                            if (o = s ? s.nextSibling : i.firstChild, e && !e.written && e.node == i && o != n.dom && (e.written = !0), n.dom.parentNode == i)
                                for (; o && o != n.dom;) o = O(o);
                            else i.insertBefore(n.dom, o);
                            s = n.dom
                        }
                        for ((o = s ? s.nextSibling : i.firstChild) && e && e.node == i && (e.written = !0); o;) o = O(o)
                    } else if (1 & this.flags)
                        for (let i of this.children) 7 & i.flags && (i.sync(t, e), i.flags &= -8)
                }
                reuseDOM(t) {}
                localPosFromDOM(t, e) {
                    let i;
                    if (t == this.dom) i = this.dom.childNodes[e];
                    else {
                        let s = 0 == v(t) ? 0 : 0 == e ? -1 : 1;
                        for (;;) {
                            let e = t.parentNode;
                            if (e == this.dom) break;
                            0 == s && e.firstChild != e.lastChild && (s = t == e.firstChild ? -1 : 1), t = e
                        }
                        i = s < 0 ? t : t.nextSibling
                    }
                    if (i == this.dom.firstChild) return 0;
                    for (; i && !T.get(i);) i = i.nextSibling;
                    if (!i) return this.length;
                    for (let t = 0, e = 0;; t++) {
                        let s = this.children[t];
                        if (s.dom == i) return e;
                        e += s.length + s.breakAfter
                    }
                }
                domBoundsAround(t, e, i = 0) {
                    let s = -1,
                        o = -1,
                        n = -1,
                        r = -1;
                    for (let l = 0, h = i, a = i; l < this.children.length; l++) {
                        let i = this.children[l],
                            c = h + i.length;
                        if (h < t && c > e) return i.domBoundsAround(t, e, h);
                        if (c >= t && -1 == s && (s = l, o = h), h > e && i.dom.parentNode == this.dom) {
                            n = l, r = a;
                            break
                        }
                        a = c, h = c + i.breakAfter
                    }
                    return {
                        from: o,
                        to: r < 0 ? i + this.length : r,
                        startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
                        endDOM: n < this.children.length && n >= 0 ? this.children[n].dom : null
                    }
                }
                markDirty(t = !1) {
                    this.flags |= 2, this.markParentsDirty(t)
                }
                markParentsDirty(t) {
                    for (let e = this.parent; e; e = e.parent) {
                        if (t && (e.flags |= 2), 1 & e.flags) return;
                        e.flags |= 1, t = !1
                    }
                }
                setParent(t) {
                    this.parent != t && (this.parent = t, 7 & this.flags && this.markParentsDirty(!0))
                }
                setDOM(t) {
                    this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this
                }
                get rootView() {
                    for (let t = this;;) {
                        let e = t.parent;
                        if (!e) return t;
                        t = e
                    }
                }
                replaceChildren(t, e, i = D) {
                    this.markDirty();
                    for (let i = t; i < e; i++) {
                        let t = this.children[i];
                        t.parent == this && t.destroy()
                    }
                    this.children.splice(t, e - t, ...i);
                    for (let t = 0; t < i.length; t++) i[t].setParent(this)
                }
                ignoreMutation(t) {
                    return !1
                }
                ignoreEvent(t) {
                    return !1
                }
                childCursor(t = this.length) {
                    return new R(this.children, t, this.children.length)
                }
                childPos(t, e = 1) {
                    return this.childCursor().findPos(t, e)
                }
                toString() {
                    let t = this.constructor.name.replace("View", "");
                    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "")
                }
                static get(t) {
                    return t.cmView
                }
                get isEditable() {
                    return !0
                }
                get isWidget() {
                    return !1
                }
                get isHidden() {
                    return !1
                }
                merge(t, e, i, s, o, n) {
                    return !1
                }
                become(t) {
                    return !1
                }
                canReuseDOM(t) {
                    return t.constructor == this.constructor && !((this.flags | t.flags) & 8)
                }
                getSide() {
                    return 0
                }
                destroy() {
                    this.parent = null
                }
            }

            function O(t) {
                let e = t.nextSibling;
                return t.parentNode.removeChild(t), e
            }
            T.prototype.breakAfter = 0;
            class R {
                constructor(t, e, i) {
                    this.children = t, this.pos = e, this.i = i, this.off = 0
                }
                findPos(t, e = 1) {
                    for (;;) {
                        if (t > this.pos || t == this.pos && (e > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
                        let i = this.children[--this.i];
                        this.pos -= i.length + i.breakAfter
                    }
                }
            }

            function E(t, e, i, s, o, n, r, l, h) {
                let {
                    children: a
                } = t, c = a.length ? a[e] : null, d = n.length ? n[n.length - 1] : null, u = d ? d.breakAfter : r;
                if (!(e == s && c && !r && !u && n.length < 2 && c.merge(i, o, n.length ? d : null, 0 == i, l, h))) {
                    if (s < a.length) {
                        let t = a[s];
                        t && o < t.length ? (e == s && (t = t.split(o), o = 0), !u && d && t.merge(0, o, d, !0, 0, h) ? n[n.length - 1] = t : (o && t.merge(0, o, null, !1, 0, h), n.push(t))) : (null == t ? void 0 : t.breakAfter) && (d ? d.breakAfter = 1 : r = 1), s++
                    }
                    for (c && (c.breakAfter = r, i > 0 && (!r && n.length && c.merge(i, c.length, n[0], !1, l, 0) ? c.breakAfter = n.shift().breakAfter : (i < c.length || c.children.length && 0 == c.children[c.children.length - 1].length) && c.merge(i, c.length, null, !1, l, 0), e++)); e < s && n.length;)
                        if (a[s - 1].become(n[n.length - 1])) s--, n.pop(), h = n.length ? 0 : l;
                        else if (a[e].become(n[0])) e++, n.shift(), l = n.length ? 0 : h;
                    else break;
                    !n.length && e && s < a.length && !a[e - 1].breakAfter && a[s].merge(0, 0, a[e - 1], !1, l, h) && e--, (e < s || n.length) && t.replaceChildren(e, s, n)
                }
            }

            function B(t, e, i, s, o, n) {
                let r = t.childCursor(),
                    {
                        i: l,
                        off: h
                    } = r.findPos(i, 1),
                    {
                        i: a,
                        off: c
                    } = r.findPos(e, -1),
                    d = e - i;
                for (let t of s) d += t.length;
                t.length += d, E(t, a, c, l, h, s, 0, o, n)
            }
            class L {
                constructor(t, e) {
                    this.points = t, this.text = "", this.lineSeparator = e.facet(l.yy.lineSeparator)
                }
                append(t) {
                    this.text += t
                }
                lineBreak() {
                    this.text += "￿"
                }
                readRange(t, e) {
                    if (!t) return this;
                    let i = t.parentNode;
                    for (let s = t;;) {
                        this.findPointBefore(i, s);
                        let t = this.text.length;
                        this.readNode(s);
                        let o = s.nextSibling;
                        if (o == e) break;
                        let n = T.get(s),
                            r = T.get(o);
                        (n && r ? n.breakAfter : (n ? n.breakAfter : H(s)) || H(o) && ("BR" != s.nodeName || s.cmIgnore) && this.text.length > t) && this.lineBreak(), s = o
                    }
                    return this.findPointBefore(i, e), this
                }
                readTextNode(t) {
                    let e = t.nodeValue;
                    for (let i of this.points) i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
                    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g;;) {
                        let o = -1,
                            n = 1,
                            r;
                        if (this.lineSeparator ? (o = e.indexOf(this.lineSeparator, i), n = this.lineSeparator.length) : (r = s.exec(e)) && (o = r.index, n = r[0].length), this.append(e.slice(i, o < 0 ? e.length : o)), o < 0) break;
                        if (this.lineBreak(), n > 1)
                            for (let e of this.points) e.node == t && e.pos > this.text.length && (e.pos -= n - 1);
                        i = o + n
                    }
                }
                readNode(t) {
                    if (t.cmIgnore) return;
                    let e = T.get(t),
                        i = e && e.overrideDOMText;
                    if (null != i) {
                        this.findPointInside(t, i.length);
                        for (let t = i.iter(); !t.next().done;) t.lineBreak ? this.lineBreak() : this.append(t.value)
                    } else 3 == t.nodeType ? this.readTextNode(t) : "BR" == t.nodeName ? t.nextSibling && this.lineBreak() : 1 == t.nodeType && this.readRange(t.firstChild, null)
                }
                findPointBefore(t, e) {
                    for (let i of this.points) i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length)
                }
                findPointInside(t, e) {
                    for (let i of this.points)(3 == t.nodeType ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + Math.min(e, i.offset))
                }
            }

            function H(t) {
                return 1 == t.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)
            }
            class P {
                constructor(t, e) {
                    this.node = t, this.offset = e, this.pos = -1
                }
            }
            let N = "undefined" != typeof navigator ? navigator : {
                    userAgent: "",
                    vendor: "",
                    platform: ""
                },
                V = "undefined" != typeof document ? document : {
                    documentElement: {
                        style: {}
                    }
                },
                W = /Edge\/(\d+)/.exec(N.userAgent),
                z = /MSIE \d/.test(N.userAgent),
                F = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(N.userAgent),
                I = !!(z || F || W),
                j = !I && /gecko\/(\d+)/i.test(N.userAgent),
                q = !I && /Chrome\/(\d+)/.exec(N.userAgent),
                K = "webkitFontSmoothing" in V.documentElement.style,
                $ = !I && /Apple Computer/.test(N.vendor),
                G = $ && (/Mobile\/\w+/.test(N.userAgent) || N.maxTouchPoints > 2);
            var _ = {
                mac: G || /Mac/.test(N.platform),
                windows: /Win/.test(N.platform),
                linux: /Linux|X11/.test(N.platform),
                ie: I,
                ie_version: z ? V.documentMode || 6 : F ? +F[1] : W ? +W[1] : 0,
                gecko: j,
                gecko_version: j ? +(/Firefox\/(\d+)/.exec(N.userAgent) || [0, 0])[1] : 0,
                chrome: !!q,
                chrome_version: q ? +q[1] : 0,
                ios: G,
                android: /Android\b/.test(N.userAgent),
                webkit: K,
                safari: $,
                webkit_version: K ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
                tabSize: null != V.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
            };
            class X extends T {
                constructor(t) {
                    super(), this.text = t
                }
                get length() {
                    return this.text.length
                }
                createDOM(t) {
                    this.setDOM(t || document.createTextNode(this.text))
                }
                sync(t, e) {
                    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text)
                }
                reuseDOM(t) {
                    3 == t.nodeType && this.createDOM(t)
                }
                merge(t, e, i) {
                    return !(8 & this.flags) && (!i || i instanceof X && !(this.length - (e - t) + i.length > 256) && !(8 & i.flags)) && (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0)
                }
                split(t) {
                    let e = new X(this.text.slice(t));
                    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= 8 & this.flags, e
                }
                localPosFromDOM(t, e) {
                    return t == this.dom ? e : e ? this.text.length : 0
                }
                domAtPos(t) {
                    return new A(this.dom, t)
                }
                domBoundsAround(t, e, i) {
                    return {
                        from: i,
                        to: i + this.length,
                        startDOM: this.dom,
                        endDOM: this.dom.nextSibling
                    }
                }
                coordsAt(t, e) {
                    return function (t, e, i) {
                        let s = t.nodeValue.length;
                        e > s && (e = s);
                        let o = e,
                            n = e,
                            r = 0;
                        0 == e && i < 0 || e == s && i >= 0 ? !(_.chrome || _.gecko) && (e ? (o--, r = 1) : n < s && (n++, r = -1)) : i < 0 ? o-- : n < s && n++;
                        let l = S(t, o, n).getClientRects();
                        if (!l.length) return null;
                        let h = l[(r ? r < 0 : i >= 0) ? 0 : l.length - 1];
                        return _.safari && !r && 0 == h.width && (h = Array.prototype.find.call(l, t => t.width) || h), r ? w(h, r < 0) : h || null
                    }(this.dom, t, e)
                }
            }
            class Y extends T {
                constructor(t, e = [], i = 0) {
                    for (let s of (super(), this.mark = t, this.children = e, this.length = i, e)) s.setParent(this)
                }
                setAttrs(t) {
                    if (k(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
                        for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
                    return t
                }
                canReuseDOM(t) {
                    return super.canReuseDOM(t) && !((this.flags | t.flags) & 8)
                }
                reuseDOM(t) {
                    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6)
                }
                sync(t, e) {
                    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e)
                }
                merge(t, e, i, s, o, n) {
                    return (!i || !!(i instanceof Y && i.mark.eq(this.mark)) && (!t || !(o <= 0)) && (!(e < this.length) || !(n <= 0))) && (B(this, t, e, i ? i.children : [], o - 1, n - 1), this.markDirty(), !0)
                }
                split(t) {
                    let e = [],
                        i = 0,
                        s = -1,
                        o = 0;
                    for (let n of this.children) {
                        let r = i + n.length;
                        r > t && e.push(i < t ? n.split(t - i) : n), s < 0 && i >= t && (s = o), i = r, o++
                    }
                    let n = this.length - t;
                    return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new Y(this.mark, e, n)
                }
                domAtPos(t) {
                    return Z(this, t)
                }
                coordsAt(t, e) {
                    return J(this, t, e)
                }
            }
            class U extends T {
                constructor(t, e, i) {
                    super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null
                }
                static create(t, e, i) {
                    return new U(t, e, i)
                }
                split(t) {
                    let e = U.create(this.widget, this.length - t, this.side);
                    return this.length -= t, e
                }
                sync(t) {
                    this.dom && this.widget.updateDOM(this.dom, t) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.dom.contentEditable = "false")
                }
                getSide() {
                    return this.side
                }
                merge(t, e, i, s, o, n) {
                    return (!i || i instanceof U && !!this.widget.compare(i.widget) && (!(t > 0) || !(o <= 0)) && (!(e < this.length) || !(n <= 0))) && (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
                }
                become(t) {
                    return t instanceof U && t.side == this.side && this.widget.constructor == t.widget.constructor && (this.widget.compare(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, !0)
                }
                ignoreMutation() {
                    return !0
                }
                ignoreEvent(t) {
                    return this.widget.ignoreEvent(t)
                }
                get overrideDOMText() {
                    if (0 == this.length) return l.xv.empty;
                    let t = this;
                    for (; t.parent;) t = t.parent;
                    let {
                        view: e
                    } = t, i = e && e.state.doc, s = this.posAtStart;
                    return i ? i.slice(s, s + this.length) : l.xv.empty
                }
                domAtPos(t) {
                    return (this.length ? 0 == t : this.side > 0) ? A.before(this.dom) : A.after(this.dom, t == this.length)
                }
                domBoundsAround() {
                    return null
                }
                coordsAt(t, e) {
                    let i = this.widget.coordsAt(this.dom, t, e);
                    if (i) return i;
                    let s = this.dom.getClientRects(),
                        o = null;
                    if (!s.length) return null;
                    let n = this.side ? this.side < 0 : t > 0;
                    for (let e = n ? s.length - 1 : 0; o = s[e], t > 0 ? 0 != e : e != s.length - 1 && !(o.top < o.bottom); e += n ? -1 : 1);
                    return w(o, !n)
                }
                get isEditable() {
                    return !1
                }
                get isWidget() {
                    return !0
                }
                get isHidden() {
                    return this.widget.isHidden
                }
                destroy() {
                    super.destroy(), this.dom && this.widget.destroy(this.dom)
                }
            }
            class Q extends T {
                constructor(t) {
                    super(), this.side = t
                }
                get length() {
                    return 0
                }
                merge() {
                    return !1
                }
                become(t) {
                    return t instanceof Q && t.side == this.side
                }
                split() {
                    return new Q(this.side)
                }
                sync() {
                    if (!this.dom) {
                        let t = document.createElement("img");
                        t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t)
                    }
                }
                getSide() {
                    return this.side
                }
                domAtPos(t) {
                    return this.side > 0 ? A.before(this.dom) : A.after(this.dom)
                }
                localPosFromDOM() {
                    return 0
                }
                domBoundsAround() {
                    return null
                }
                coordsAt(t) {
                    return this.dom.getBoundingClientRect()
                }
                get overrideDOMText() {
                    return l.xv.empty
                }
                get isHidden() {
                    return !0
                }
            }

            function Z(t, e) {
                let i = t.dom,
                    {
                        children: s
                    } = t,
                    o = 0;
                for (let t = 0; o < s.length; o++) {
                    let n = s[o],
                        r = t + n.length;
                    if (!(r == t && 0 >= n.getSide())) {
                        if (e > t && e < r && n.dom.parentNode == i) return n.domAtPos(e - t);
                        if (e <= t) break;
                        t = r
                    }
                }
                for (let t = o; t > 0; t--) {
                    let e = s[t - 1];
                    if (e.dom.parentNode == i) return e.domAtPos(e.length)
                }
                for (let t = o; t < s.length; t++) {
                    let e = s[t];
                    if (e.dom.parentNode == i) return e.domAtPos(0)
                }
                return new A(i, 0)
            }

            function J(t, e, i) {
                let s = null,
                    o = -1,
                    n = null,
                    r = -1;
                ! function t(e, l) {
                    for (let h = 0, a = 0; h < e.children.length && a <= l; h++) {
                        let c = e.children[h],
                            d = a + c.length;
                        d >= l && (c.children.length ? t(c, l - a) : (!n || n.isHidden && i > 0) && (d > l || a == d && c.getSide() > 0) ? (n = c, r = l - a) : (a < l || a == d && 0 > c.getSide() && !c.isHidden) && (s = c, o = l - a)), a = d
                    }
                }(t, e);
                let l = (i < 0 ? s : n) || s || n;
                return l ? l.coordsAt(Math.max(0, l == s ? o : r), i) : function (t) {
                    let e = t.dom.lastChild;
                    if (!e) return t.dom.getBoundingClientRect();
                    let i = f(e);
                    return i[i.length - 1] || null
                }(t)
            }

            function tt(t, e) {
                for (let i in t) "class" == i && e.class ? e.class += " " + t.class : "style" == i && e.style ? e.style += ";" + t.style : e[i] = t[i];
                return e
            }
            X.prototype.children = U.prototype.children = Q.prototype.children = D;
            let te = Object.create(null);

            function ti(t, e, i) {
                if (t == e) return !0;
                t || (t = te), e || (e = te);
                let s = Object.keys(t),
                    o = Object.keys(e);
                if (s.length - (i && s.indexOf(i) > -1 ? 1 : 0) != o.length - (i && o.indexOf(i) > -1 ? 1 : 0)) return !1;
                for (let n of s)
                    if (n != i && (-1 == o.indexOf(n) || t[n] !== e[n])) return !1;
                return !0
            }

            function ts(t, e, i) {
                let s = null;
                if (e)
                    for (let o in e) i && o in i || t.removeAttribute(s = o);
                if (i)
                    for (let o in i) e && e[o] == i[o] || t.setAttribute(s = o, i[o]);
                return !!s
            }
            class to {
                eq(t) {
                    return !1
                }
                updateDOM(t, e) {
                    return !1
                }
                compare(t) {
                    return this == t || this.constructor == t.constructor && this.eq(t)
                }
                get estimatedHeight() {
                    return -1
                }
                get lineBreaks() {
                    return 0
                }
                ignoreEvent(t) {
                    return !0
                }
                coordsAt(t, e, i) {
                    return null
                }
                get isHidden() {
                    return !1
                }
                destroy(t) {}
            }
            var tn = ((o = tn || (tn = {}))[o.Text = 0] = "Text", o[o.WidgetBefore = 1] = "WidgetBefore", o[o.WidgetAfter = 2] = "WidgetAfter", o[o.WidgetRange = 3] = "WidgetRange", o);
            class tr extends l.uU {
                constructor(t, e, i, s) {
                    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s
                }
                get heightRelevant() {
                    return !1
                }
                static mark(t) {
                    return new tl(t)
                }
                static widget(t) {
                    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)),
                        i = !!t.block;
                    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new ta(t, e, e, i, t.widget || null, !1)
                }
                static replace(t) {
                    let e = !!t.block,
                        i, s;
                    if (t.isBlockGap) i = -5e8, s = 4e8;
                    else {
                        let {
                            start: o,
                            end: n
                        } = tc(t, e);
                        i = (o ? e ? -3e8 : -1 : 5e8) - 1, s = (n ? e ? 2e8 : 1 : -6e8) + 1
                    }
                    return new ta(t, i, s, e, t.widget || null, !0)
                }
                static line(t) {
                    return new th(t)
                }
                static set(t, e = !1) {
                    return l.Xs.of(t, e)
                }
                hasHeight() {
                    return !!this.widget && this.widget.estimatedHeight > -1
                }
            }
            tr.none = l.Xs.empty;
            class tl extends tr {
                constructor(t) {
                    let {
                        start: e,
                        end: i
                    } = tc(t);
                    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null
                }
                eq(t) {
                    var e, i;
                    return this == t || t instanceof tl && this.tagName == t.tagName && (this.class || (null === (e = this.attrs) || void 0 === e ? void 0 : e.class)) == (t.class || (null === (i = t.attrs) || void 0 === i ? void 0 : i.class)) && ti(this.attrs, t.attrs, "class")
                }
                range(t, e = t) {
                    if (t >= e) throw RangeError("Mark decorations may not be empty");
                    return super.range(t, e)
                }
            }
            tl.prototype.point = !1;
            class th extends tr {
                constructor(t) {
                    super(-2e8, -2e8, null, t)
                }
                eq(t) {
                    return t instanceof th && this.spec.class == t.spec.class && ti(this.spec.attributes, t.spec.attributes)
                }
                range(t, e = t) {
                    if (e != t) throw RangeError("Line decoration ranges must be zero-length");
                    return super.range(t, e)
                }
            }
            th.prototype.mapMode = l.gc.TrackBefore, th.prototype.point = !0;
            class ta extends tr {
                constructor(t, e, i, s, o, n) {
                    super(e, i, o, t), this.block = s, this.isReplace = n, this.mapMode = s ? e <= 0 ? l.gc.TrackBefore : l.gc.TrackAfter : l.gc.TrackDel
                }
                get type() {
                    return this.startSide < this.endSide ? tn.WidgetRange : this.startSide <= 0 ? tn.WidgetBefore : tn.WidgetAfter
                }
                get heightRelevant() {
                    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
                }
                eq(t) {
                    var e, i;
                    return t instanceof ta && ((e = this.widget) == (i = t.widget) || !!(e && i && e.compare(i))) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide
                }
                range(t, e = t) {
                    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
                    if (!this.isReplace && e != t) throw RangeError("Widget decorations can only have zero-length ranges");
                    return super.range(t, e)
                }
            }

            function tc(t, e = !1) {
                let {
                    inclusiveStart: i,
                    inclusiveEnd: s
                } = t;
                return null == i && (i = t.inclusive), null == s && (s = t.inclusive), {
                    start: null != i ? i : e,
                    end: null != s ? s : e
                }
            }

            function td(t, e, i, s = 0) {
                let o = i.length - 1;
                o >= 0 && i[o] + s >= t ? i[o] = Math.max(i[o], e) : i.push(t, e)
            }
            ta.prototype.point = !0;
            class tu extends T {
                constructor() {
                    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0
                }
                merge(t, e, i, s, o, n) {
                    if (i) {
                        if (!(i instanceof tu)) return !1;
                        this.dom || i.transferDOM(this)
                    }
                    return s && this.setDeco(i ? i.attrs : null), B(this, t, e, i ? i.children : [], o, n), !0
                }
                split(t) {
                    let e = new tu;
                    if (e.breakAfter = this.breakAfter, 0 == this.length) return e;
                    let {
                        i,
                        off: s
                    } = this.childPos(t);
                    s && (e.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
                    for (let t = i; t < this.children.length; t++) e.append(this.children[t], 0);
                    for (; i > 0 && 0 == this.children[i - 1].length;) this.children[--i].destroy();
                    return this.children.length = i, this.markDirty(), this.length = t, e
                }
                transferDOM(t) {
                    this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null)
                }
                setDeco(t) {
                    ti(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t)
                }
                append(t, e) {
                    ! function t(e, i, s) {
                        let o, {
                            children: n
                        } = e;
                        s > 0 && i instanceof Y && n.length && (o = n[n.length - 1]) instanceof Y && o.mark.eq(i.mark) ? t(o, i.children[0], s - 1) : (n.push(i), i.setParent(e)), e.length += i.length
                    }(this, t, e)
                }
                addLineDeco(t) {
                    let e = t.spec.attributes,
                        i = t.spec.class;
                    e && (this.attrs = tt(e, this.attrs || {})), i && (this.attrs = tt({
                        class: i
                    }, this.attrs || {}))
                }
                domAtPos(t) {
                    return Z(this, t)
                }
                reuseDOM(t) {
                    "DIV" == t.nodeName && (this.setDOM(t), this.flags |= 6)
                }
                sync(t, e) {
                    var i;
                    this.dom ? 4 & this.flags && (k(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (ts(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
                    let s = this.dom.lastChild;
                    for (; s && T.get(s) instanceof Y;) s = s.lastChild;
                    if (!s || !this.length || "BR" != s.nodeName && (null === (i = T.get(s)) || void 0 === i ? void 0 : i.isEditable) == !1 && (!_.ios || !this.children.some(t => t instanceof X))) {
                        let t = document.createElement("BR");
                        t.cmIgnore = !0, this.dom.appendChild(t)
                    }
                }
                measureTextSize() {
                    if (0 == this.children.length || this.length > 20) return null;
                    let t = 0,
                        e;
                    for (let i of this.children) {
                        if (!(i instanceof X) || /[^ -~]/.test(i.text)) return null;
                        let s = f(i.dom);
                        if (1 != s.length) return null;
                        t += s[0].width, e = s[0].height
                    }
                    return t ? {
                        lineHeight: this.dom.getBoundingClientRect().height,
                        charWidth: t / this.length,
                        textHeight: e
                    } : null
                }
                coordsAt(t, e) {
                    let i = J(this, t, e);
                    if (!this.children.length && i && this.parent) {
                        let {
                            heightOracle: t
                        } = this.parent.view.viewState, e = i.bottom - i.top;
                        if (2 > Math.abs(e - t.lineHeight) && t.textHeight < e) {
                            let s = (e - t.textHeight) / 2;
                            return {
                                top: i.top + s,
                                bottom: i.bottom - s,
                                left: i.left,
                                right: i.left
                            }
                        }
                    }
                    return i
                }
                become(t) {
                    return !1
                }
                get type() {
                    return tn.Text
                }
                static find(t, e) {
                    for (let i = 0, s = 0; i < t.children.length; i++) {
                        let o = t.children[i],
                            n = s + o.length;
                        if (n >= e) {
                            if (o instanceof tu) return o;
                            if (n > e) break
                        }
                        s = n + o.breakAfter
                    }
                    return null
                }
            }
            class tf extends T {
                constructor(t, e, i) {
                    super(), this.widget = t, this.length = e, this.type = i, this.breakAfter = 0, this.prevWidget = null
                }
                merge(t, e, i, s, o, n) {
                    return (!i || i instanceof tf && !!this.widget.compare(i.widget) && (!(t > 0) || !(o <= 0)) && (!(e < this.length) || !(n <= 0))) && (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
                }
                domAtPos(t) {
                    return 0 == t ? A.before(this.dom) : A.after(this.dom, t == this.length)
                }
                split(t) {
                    let e = this.length - t;
                    this.length = t;
                    let i = new tf(this.widget, e, this.type);
                    return i.breakAfter = this.breakAfter, i
                }
                get children() {
                    return D
                }
                sync(t) {
                    this.dom && this.widget.updateDOM(this.dom, t) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.dom.contentEditable = "false")
                }
                get overrideDOMText() {
                    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : l.xv.empty
                }
                domBoundsAround() {
                    return null
                }
                become(t) {
                    return t instanceof tf && t.widget.constructor == this.widget.constructor && (t.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.type = t.type, this.breakAfter = t.breakAfter, !0)
                }
                ignoreMutation() {
                    return !0
                }
                ignoreEvent(t) {
                    return this.widget.ignoreEvent(t)
                }
                get isEditable() {
                    return !1
                }
                get isWidget() {
                    return !0
                }
                coordsAt(t, e) {
                    return this.widget.coordsAt(this.dom, t, e)
                }
                destroy() {
                    super.destroy(), this.dom && this.widget.destroy(this.dom)
                }
            }
            class tp {
                constructor(t, e, i, s) {
                    this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e
                }
                posCovered() {
                    if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
                    let t = this.content[this.content.length - 1];
                    return !t.breakAfter && !(t instanceof tf && t.type == tn.WidgetBefore)
                }
                getLine() {
                    return this.curLine || (this.content.push(this.curLine = new tu), this.atCursorPos = !0), this.curLine
                }
                flushBuffer(t = this.bufferMarks) {
                    this.pendingBuffer && (this.curLine.append(tg(new Q(-1), t), t.length), this.pendingBuffer = 0)
                }
                addBlockWidget(t) {
                    this.flushBuffer(), this.curLine = null, this.content.push(t)
                }
                finish(t) {
                    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine()
                }
                buildText(t, e, i) {
                    for (; t > 0;) {
                        if (this.textOff == this.text.length) {
                            let {
                                value: e,
                                lineBreak: i,
                                done: s
                            } = this.cursor.next(this.skip);
                            if (this.skip = 0, s) throw Error("Ran out of text content when drawing inline views");
                            if (i) {
                                this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
                                continue
                            }
                            this.text = e, this.textOff = 0
                        }
                        let s = Math.min(this.text.length - this.textOff, t, 512);
                        this.flushBuffer(e.slice(e.length - i)), this.getLine().append(tg(new X(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = !0, this.textOff += s, t -= s, i = 0
                    }
                }
                span(t, e, i, s) {
                    this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s)
                }
                point(t, e, i, s, o, n) {
                    if (this.disallowBlockEffectsFor[n] && i instanceof ta) {
                        if (i.block) throw RangeError("Block decorations may not be specified via plugins");
                        if (e > this.doc.lineAt(this.pos).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins")
                    }
                    let r = e - t;
                    if (i instanceof ta) {
                        if (i.block) {
                            let {
                                type: t
                            } = i;
                            t != tn.WidgetAfter || this.posCovered() || this.getLine(), this.addBlockWidget(new tf(i.widget || new tm("div"), r, t))
                        } else {
                            let n = U.create(i.widget || new tm("span"), r, r ? 0 : i.startSide),
                                l = this.atCursorPos && !n.isEditable && o <= s.length && (t < e || i.startSide > 0),
                                h = !n.isEditable && (t < e || o > s.length || i.startSide <= 0),
                                a = this.getLine();
                            2 != this.pendingBuffer || l || n.isEditable || (this.pendingBuffer = 0), this.flushBuffer(s), l && (a.append(tg(new Q(1), s), o), o = s.length + Math.max(0, o - s.length)), a.append(tg(n, s), o), this.atCursorPos = h, this.pendingBuffer = h ? t < e || o > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice())
                        }
                    } else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
                    r && (this.textOff + r <= this.text.length ? this.textOff += r : (this.skip += r - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = o)
                }
                static build(t, e, i, s, o) {
                    let n = new tp(t, e, i, o);
                    return n.openEnd = l.Xs.spans(s, e, i, n), n.openStart < 0 && (n.openStart = n.openEnd), n.finish(n.openEnd), n
                }
            }

            function tg(t, e) {
                for (let i of e) t = new Y(i, [t], t.length);
                return t
            }
            class tm extends to {
                constructor(t) {
                    super(), this.tag = t
                }
                eq(t) {
                    return t.tag == this.tag
                }
                toDOM() {
                    return document.createElement(this.tag)
                }
                updateDOM(t) {
                    return t.nodeName.toLowerCase() == this.tag
                }
                get isHidden() {
                    return !0
                }
            }
            let tv = l.r$.define(),
                tw = l.r$.define(),
                tb = l.r$.define(),
                ty = l.r$.define(),
                tx = l.r$.define(),
                tS = l.r$.define(),
                tM = l.r$.define(),
                tk = l.r$.define({
                    combine: t => t.some(t => t)
                }),
                tC = l.r$.define({
                    combine: t => t.some(t => t)
                });
            class tA {
                constructor(t, e = "nearest", i = "nearest", s = 5, o = 5) {
                    this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = o
                }
                map(t) {
                    return t.empty ? this : new tA(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin)
                }
            }
            let tD = l.Py.define({
                map: (t, e) => t.map(e)
            });

            function tT(t, e, i) {
                let s = t.facet(ty);
                s.length ? s[0](e) : window.onerror ? window.onerror(String(e), i, void 0, void 0, e) : i ? console.error(i + ":", e) : console.error(e)
            }
            let tO = l.r$.define({
                    combine: t => !t.length || t[0]
                }),
                tR = 0,
                tE = l.r$.define();
            class tB {
                constructor(t, e, i, s) {
                    this.id = t, this.create = e, this.domEventHandlers = i, this.extension = s(this)
                }
                static define(t, e) {
                    let {
                        eventHandlers: i,
                        provide: s,
                        decorations: o
                    } = e || {};
                    return new tB(tR++, t, i, t => {
                        let e = [tE.of(t)];
                        return o && e.push(tN.of(e => {
                            let i = e.plugin(t);
                            return i ? o(i) : tr.none
                        })), s && e.push(s(t)), e
                    })
                }
                static fromClass(t, e) {
                    return tB.define(e => new t(e), e)
                }
            }
            class tL {
                constructor(t) {
                    this.spec = t, this.mustUpdate = null, this.value = null
                }
                update(t) {
                    if (this.value) {
                        if (this.mustUpdate) {
                            let t = this.mustUpdate;
                            if (this.mustUpdate = null, this.value.update) try {
                                this.value.update(t)
                            } catch (e) {
                                if (tT(t.state, e, "CodeMirror plugin crashed"), this.value.destroy) try {
                                    this.value.destroy()
                                } catch (t) {}
                                this.deactivate()
                            }
                        }
                    } else if (this.spec) try {
                        this.value = this.spec.create(t)
                    } catch (e) {
                        tT(t.state, e, "CodeMirror plugin crashed"), this.deactivate()
                    }
                    return this
                }
                destroy(t) {
                    var e;
                    if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy) try {
                        this.value.destroy()
                    } catch (e) {
                        tT(t.state, e, "CodeMirror plugin crashed")
                    }
                }
                deactivate() {
                    this.spec = this.value = null
                }
            }
            let tH = l.r$.define(),
                tP = l.r$.define(),
                tN = l.r$.define(),
                tV = l.r$.define(),
                tW = l.r$.define();

            function tz(t) {
                let e = 0,
                    i = 0,
                    s = 0,
                    o = 0;
                for (let n of t.state.facet(tW)) {
                    let r = n(t);
                    r && (null != r.left && (e = Math.max(e, r.left)), null != r.right && (i = Math.max(i, r.right)), null != r.top && (s = Math.max(s, r.top)), null != r.bottom && (o = Math.max(o, r.bottom)))
                }
                return {
                    left: e,
                    right: i,
                    top: s,
                    bottom: o
                }
            }
            let tF = l.r$.define();
            class tI {
                constructor(t, e, i, s) {
                    this.fromA = t, this.toA = e, this.fromB = i, this.toB = s
                }
                join(t) {
                    return new tI(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB))
                }
                addToSet(t) {
                    let e = t.length,
                        i = this;
                    for (; e > 0; e--) {
                        let s = t[e - 1];
                        if (!(s.fromA > i.toA)) {
                            if (s.toA < i.fromA) break;
                            i = i.join(s), t.splice(e - 1, 1)
                        }
                    }
                    return t.splice(e, 0, i), t
                }
                static extendWithRanges(t, e) {
                    if (0 == e.length) return t;
                    let i = [];
                    for (let s = 0, o = 0, n = 0, r = 0;; s++) {
                        let l = s == t.length ? null : t[s],
                            h = n - r,
                            a = l ? l.fromB : 1e9;
                        for (; o < e.length && e[o] < a;) {
                            let t = e[o],
                                s = e[o + 1],
                                n = Math.max(r, t),
                                l = Math.min(a, s);
                            if (n <= l && new tI(n + h, l + h, n, l).addToSet(i), s > a) break;
                            o += 2
                        }
                        if (!l) return i;
                        new tI(l.fromA, l.toA, l.fromB, l.toB).addToSet(i), n = l.toA, r = l.toB
                    }
                }
            }
            class tj {
                constructor(t, e, i) {
                    for (let s of (this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = l.as.empty(this.startState.doc.length), i)) this.changes = this.changes.compose(s.changes);
                    let s = [];
                    this.changes.iterChangedRanges((t, e, i, o) => s.push(new tI(t, e, i, o))), this.changedRanges = s
                }
                static create(t, e, i) {
                    return new tj(t, e, i)
                }
                get viewportChanged() {
                    return (4 & this.flags) > 0
                }
                get heightChanged() {
                    return (2 & this.flags) > 0
                }
                get geometryChanged() {
                    return this.docChanged || (10 & this.flags) > 0
                }
                get focusChanged() {
                    return (1 & this.flags) > 0
                }
                get docChanged() {
                    return !this.changes.empty
                }
                get selectionSet() {
                    return this.transactions.some(t => t.selection)
                }
                get empty() {
                    return 0 == this.flags && 0 == this.transactions.length
                }
            }
            var tq = ((n = tq || (tq = {}))[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n);
            let tK = tq.LTR,
                t$ = tq.RTL;

            function tG(t) {
                let e = [];
                for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
                return e
            }
            let t_ = tG("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
                tX = tG("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
                tY = Object.create(null),
                tU = [];
            for (let t of ["()", "[]", "{}"]) {
                let e = t.charCodeAt(0),
                    i = t.charCodeAt(1);
                tY[e] = i, tY[i] = -e
            }
            let tQ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
            class tZ {
                constructor(t, e, i) {
                    this.from = t, this.to = e, this.level = i
                }
                get dir() {
                    return this.level % 2 ? t$ : tK
                }
                side(t, e) {
                    return this.dir == e == t ? this.to : this.from
                }
                static find(t, e, i, s) {
                    let o = -1;
                    for (let n = 0; n < t.length; n++) {
                        let r = t[n];
                        if (r.from <= e && r.to >= e) {
                            if (r.level == i) return n;
                            (o < 0 || (0 != s ? s < 0 ? r.from < e : r.to > e : t[o].level > r.level)) && (o = n)
                        }
                    }
                    if (o < 0) throw RangeError("Index out of range");
                    return o
                }
            }
            let tJ = [];

            function t0(t) {
                return [new tZ(0, t, 0)]
            }
            let t1 = "";
            class t2 extends T {
                constructor(t) {
                    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [], this.hasComposition = null, this.markedForComposition = new Set, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new tu], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new tI(0, 0, 0, t.state.doc.length)], 0, null)
                }
                get length() {
                    return this.view.state.doc.length
                }
                update(t) {
                    var e, i, s;
                    let o, n = t.changedRanges;
                    this.minWidth > 0 && n.length && (n.every(({
                        fromA: t,
                        toA: e
                    }) => e < this.minWidthFrom || t > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
                    let r = this.view.inputState.composing < 0 ? null : function (t, e) {
                        let i = t3(t);
                        if (!i) return null;
                        let {
                            from: s,
                            to: o,
                            node: n
                        } = i, r = e.mapPos(s, -1), l = e.mapPos(o, 1), h = n.nodeValue;
                        if (/[\n\r]/.test(h)) return null;
                        if (l - r != h.length) {
                            let i = e.mapPos(s, 1),
                                n = e.mapPos(o, -1);
                            if (n - i == h.length) r = i, l = n;
                            else if (t.state.doc.sliceString(l - h.length, l) == h) r = l - h.length;
                            else {
                                if (t.state.doc.sliceString(r, r + h.length) != h) return null;
                                l = r + h.length
                            }
                        }
                        let {
                            main: a
                        } = t.state.selection;
                        if (t.state.doc.sliceString(r, l) != h || r > a.head || l < a.head) return null;
                        let c = [],
                            d = new tI(s, o, r, l);
                        for (let e = n.parentNode;; e = e.parentNode) {
                            let i = T.get(e);
                            if (i instanceof Y) c.push({
                                node: e,
                                deco: i.mark
                            });
                            else {
                                if (i instanceof tu || "DIV" == e.nodeName && e.parentNode == t.contentDOM) return {
                                    range: d,
                                    text: n,
                                    marks: c,
                                    line: e
                                };
                                if (e == t.contentDOM) return null;
                                c.push({
                                    node: e,
                                    deco: new tl({
                                        inclusive: !0,
                                        attributes: function (t) {
                                            let e = Object.create(null);
                                            for (let i = 0; i < t.attributes.length; i++) {
                                                let s = t.attributes[i];
                                                e[s.name] = s.value
                                            }
                                            return e
                                        }(e),
                                        tagName: e.tagName.toLowerCase()
                                    })
                                })
                            }
                        }
                    }(this.view, t.changes);
                    if (this.hasComposition) {
                        this.markedForComposition.clear();
                        let {
                            from: e,
                            to: i
                        } = this.hasComposition;
                        n = new tI(e, i, t.changes.mapPos(e, -1), t.changes.mapPos(i, 1)).addToSet(n.slice())
                    }
                    this.hasComposition = r ? {
                        from: r.range.fromB,
                        to: r.range.toB
                    } : null, (_.ie || _.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
                    let h = (e = this.decorations, i = this.updateDeco(), s = t.changes, o = new t5, l.Xs.compare(e, i, s, o), o.changes);
                    return n = tI.extendWithRanges(n, h), (!!(7 & this.flags) || 0 != n.length) && (this.updateInner(n, t.startState.doc.length, r), t.transactions.length && (this.lastUpdate = Date.now()), !0)
                }
                updateInner(t, e, i) {
                    this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e, i);
                    let {
                        observer: s
                    } = this.view;
                    s.ignore(() => {
                        this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
                        let t = _.chrome || _.ios ? {
                            node: s.selectionRange.focusNode,
                            written: !1
                        } : void 0;
                        this.sync(this.view, t), this.flags &= -8, t && (t.written || s.selectionRange.focusNode != t.node) && (this.forceSelection = !0), this.dom.style.height = ""
                    }), this.markedForComposition.forEach(t => t.flags &= -9);
                    let o = [];
                    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
                        for (let t of this.children) t instanceof tf && t.widget instanceof t8 && o.push(t.dom);
                    s.updateGaps(o)
                }
                updateChildren(t, e, i) {
                    let s = i ? i.range.addToSet(t.slice()) : t,
                        o = this.childCursor(e);
                    for (let t = s.length - 1;; t--) {
                        let e = t >= 0 ? s[t] : null;
                        if (!e) break;
                        let {
                            fromA: n,
                            toA: r,
                            fromB: l,
                            toB: h
                        } = e, a, c, d, u;
                        if (i && i.range.fromB < h && i.range.toB > l) {
                            let t = tp.build(this.view.state.doc, l, i.range.fromB, this.decorations, this.dynamicDecorationMap),
                                e = tp.build(this.view.state.doc, i.range.toB, h, this.decorations, this.dynamicDecorationMap);
                            c = t.breakAtStart, d = t.openStart, u = e.openEnd;
                            let s = this.compositionView(i);
                            e.breakAtStart ? s.breakAfter = 1 : e.content.length && s.merge(s.length, s.length, e.content[0], !1, e.openStart, 0) && (s.breakAfter = e.content[0].breakAfter, e.content.shift()), t.content.length && s.merge(0, 0, t.content[t.content.length - 1], !0, 0, t.openEnd) && t.content.pop(), a = t.content.concat(s).concat(e.content)
                        } else({
                            content: a,
                            breakAtStart: c,
                            openStart: d,
                            openEnd: u
                        } = tp.build(this.view.state.doc, l, h, this.decorations, this.dynamicDecorationMap));
                        let {
                            i: f,
                            off: p
                        } = o.findPos(r, 1), {
                            i: g,
                            off: m
                        } = o.findPos(n, -1);
                        E(this, g, m, f, p, a, c, d, u)
                    }
                    i && this.fixCompositionDOM(i)
                }
                compositionView(t) {
                    let e = new X(t.text.nodeValue);
                    for (let {
                            deco: i
                        } of (e.flags |= 8, t.marks)) e = new Y(i, [e], e.length);
                    let i = new tu;
                    return i.append(e, 0), i
                }
                fixCompositionDOM(t) {
                    let e = (t, e) => {
                            e.flags |= 8, this.markedForComposition.add(e);
                            let i = T.get(t);
                            i != e && (i && (i.dom = null), e.setDOM(t))
                        },
                        i = this.childPos(t.range.fromB, 1),
                        s = this.children[i.i];
                    e(t.line, s);
                    for (let o = t.marks.length - 1; o >= -1; o--) i = s.childPos(i.off, 1), s = s.children[i.i], e(o >= 0 ? t.marks[o].node : t.text, s)
                }
                updateSelection(t = !1, e = !1) {
                    var i;
                    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
                    let s = this.view.root.activeElement,
                        o = s == this.dom,
                        n = !o && u(this.dom, this.view.observer.selectionRange) && !(s && this.dom.contains(s));
                    if (!(o || e || n)) return;
                    let r = this.forceSelection;
                    this.forceSelection = !1;
                    let l = this.view.state.selection.main,
                        h = this.domAtPos(l.anchor),
                        a = l.empty ? h : this.domAtPos(l.head);
                    if (_.gecko && l.empty && !this.hasComposition && 1 == (i = h).node.nodeType && i.node.firstChild && (0 == i.offset || "false" == i.node.childNodes[i.offset - 1].contentEditable) && (i.offset == i.node.childNodes.length || "false" == i.node.childNodes[i.offset].contentEditable)) {
                        let t = document.createTextNode("");
                        this.view.observer.ignore(() => h.node.insertBefore(t, h.node.childNodes[h.offset] || null)), h = a = new A(t, 0), r = !0
                    }
                    let d = this.view.observer.selectionRange;
                    !r && d.focusNode && p(h.node, h.offset, d.anchorNode, d.anchorOffset) && p(a.node, a.offset, d.focusNode, d.focusOffset) || (this.view.observer.ignore(() => {
                        _.android && _.chrome && this.dom.contains(d.focusNode) && function (t, e) {
                            for (let i = t; i && i != e; i = i.assignedSlot || i.parentNode)
                                if (1 == i.nodeType && "false" == i.contentEditable) return !0;
                            return !1
                        }(d.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                            preventScroll: !0
                        }));
                        let t = c(this.view.root);
                        if (t) {
                            if (l.empty) {
                                if (_.gecko) {
                                    var e, i;
                                    let t = (e = h.node, i = h.offset, 1 != e.nodeType ? 0 : (i && "false" == e.childNodes[i - 1].contentEditable ? 1 : 0) | (i < e.childNodes.length && "false" == e.childNodes[i].contentEditable ? 2 : 0));
                                    if (t && 3 != t) {
                                        let e = t9(h.node, h.offset, 1 == t ? 1 : -1);
                                        e && (h = new A(e, 1 == t ? 0 : e.nodeValue.length))
                                    }
                                }
                                t.collapse(h.node, h.offset), null != l.bidiLevel && null != d.cursorBidiLevel && (d.cursorBidiLevel = l.bidiLevel)
                            } else if (t.extend) {
                                t.collapse(h.node, h.offset);
                                try {
                                    t.extend(a.node, a.offset)
                                } catch (t) {}
                            } else {
                                let e = document.createRange();
                                l.anchor > l.head && ([h, a] = [a, h]), e.setEnd(a.node, a.offset), e.setStart(h.node, h.offset), t.removeAllRanges(), t.addRange(e)
                            }
                        }
                        n && this.view.root.activeElement == this.dom && (this.dom.blur(), s && s.focus())
                    }), this.view.observer.setSelectionRange(h, a)), this.impreciseAnchor = h.precise ? null : new A(d.anchorNode, d.anchorOffset), this.impreciseHead = a.precise ? null : new A(d.focusNode, d.focusOffset)
                }
                enforceCursorAssoc() {
                    if (this.hasComposition) return;
                    let {
                        view: t
                    } = this, e = t.state.selection.main, i = c(t.root), {
                        anchorNode: s,
                        anchorOffset: o
                    } = t.observer.selectionRange;
                    if (!i || !e.empty || !e.assoc || !i.modify) return;
                    let n = tu.find(this, e.head);
                    if (!n) return;
                    let r = n.posAtStart;
                    if (e.head == r || e.head == r + n.length) return;
                    let l = this.coordsAt(e.head, -1),
                        h = this.coordsAt(e.head, 1);
                    if (!l || !h || l.bottom > h.top) return;
                    let a = this.domAtPos(e.head + e.assoc);
                    i.collapse(a.node, a.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
                    let d = t.observer.selectionRange;
                    t.docView.posFromDOM(d.anchorNode, d.anchorOffset) != e.from && i.collapse(s, o)
                }
                nearest(t) {
                    for (let e = t; e;) {
                        let t = T.get(e);
                        if (t && t.rootView == this) return t;
                        e = e.parentNode
                    }
                    return null
                }
                posFromDOM(t, e) {
                    let i = this.nearest(t);
                    if (!i) throw RangeError("Trying to find position for a DOM position outside of the document");
                    return i.localPosFromDOM(t, e) + i.posAtStart
                }
                domAtPos(t) {
                    let {
                        i: e,
                        off: i
                    } = this.childCursor().findPos(t, -1);
                    for (; e < this.children.length - 1;) {
                        let t = this.children[e];
                        if (i < t.length || t instanceof tu) break;
                        e++, i = 0
                    }
                    return this.children[e].domAtPos(i)
                }
                coordsAt(t, e) {
                    for (let i = this.length, s = this.children.length - 1;; s--) {
                        let o = this.children[s],
                            n = i - o.breakAfter - o.length;
                        if (t > n || t == n && o.type != tn.WidgetBefore && o.type != tn.WidgetAfter && (!s || 2 == e || this.children[s - 1].breakAfter || this.children[s - 1].type == tn.WidgetBefore && e > -2)) return o.coordsAt(t - n, e);
                        i = n
                    }
                }
                measureVisibleLineHeights(t) {
                    let e = [],
                        {
                            from: i,
                            to: s
                        } = t,
                        o = this.view.contentDOM.clientWidth,
                        n = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
                        r = -1,
                        l = this.view.textDirection == tq.LTR;
                    for (let t = 0, h = 0; h < this.children.length; h++) {
                        let a = this.children[h],
                            c = t + a.length;
                        if (c > s) break;
                        if (t >= i) {
                            let i = a.dom.getBoundingClientRect();
                            if (e.push(i.height), n) {
                                let e = a.dom.lastChild,
                                    s = e ? f(e) : [];
                                if (s.length) {
                                    let e = s[s.length - 1],
                                        n = l ? e.right - i.left : i.right - e.left;
                                    n > r && (r = n, this.minWidth = o, this.minWidthFrom = t, this.minWidthTo = c)
                                }
                            }
                        }
                        t = c + a.breakAfter
                    }
                    return e
                }
                textDirectionAt(t) {
                    let {
                        i: e
                    } = this.childPos(t, 1);
                    return "rtl" == getComputedStyle(this.children[e].dom).direction ? tq.RTL : tq.LTR
                }
                measureTextSize() {
                    for (let t of this.children)
                        if (t instanceof tu) {
                            let e = t.measureTextSize();
                            if (e) return e
                        } let t = document.createElement("div"),
                        e, i, s;
                    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
                        this.dom.appendChild(t);
                        let o = f(t.firstChild)[0];
                        e = t.getBoundingClientRect().height, i = o ? o.width / 27 : 7, s = o ? o.height : e, t.remove()
                    }), {
                        lineHeight: e,
                        charWidth: i,
                        textHeight: s
                    }
                }
                childCursor(t = this.length) {
                    let e = this.children.length;
                    return e && (t -= this.children[--e].length), new R(this.children, t, e)
                }
                computeBlockGapDeco() {
                    let t = [],
                        e = this.view.viewState;
                    for (let i = 0, s = 0;; s++) {
                        let o = s == e.viewports.length ? null : e.viewports[s],
                            n = o ? o.from - 1 : this.length;
                        if (n > i) {
                            let s = e.lineBlockAt(n).bottom - e.lineBlockAt(i).top;
                            t.push(tr.replace({
                                widget: new t8(s),
                                block: !0,
                                inclusive: !0,
                                isBlockGap: !0
                            }).range(i, n))
                        }
                        if (!o) break;
                        i = o.to + 1
                    }
                    return tr.set(t)
                }
                updateDeco() {
                    let t = this.view.state.facet(tN).map((t, e) => (this.dynamicDecorationMap[e] = "function" == typeof t) ? t(this.view) : t);
                    for (let e = t.length; e < t.length + 3; e++) this.dynamicDecorationMap[e] = !1;
                    return this.decorations = [...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]
                }
                scrollIntoView(t) {
                    let {
                        range: e
                    } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
                    if (!i) return;
                    !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
                        left: Math.min(i.left, s.left),
                        top: Math.min(i.top, s.top),
                        right: Math.max(i.right, s.right),
                        bottom: Math.max(i.bottom, s.bottom)
                    });
                    let o = tz(this.view),
                        n = {
                            left: i.left - o.left,
                            top: i.top - o.top,
                            right: i.right + o.right,
                            bottom: i.bottom + o.bottom
                        };
                    ! function (t, e, i, s, o, n, r, l) {
                        let h = t.ownerDocument,
                            a = h.defaultView || window;
                        for (let c = t, d = !1; c && !d;)
                            if (1 == c.nodeType) {
                                let t, u = c == h.body;
                                if (u) t = {
                                    left: 0,
                                    right: a.innerWidth,
                                    top: 0,
                                    bottom: a.innerHeight
                                };
                                else {
                                    if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (d = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                                        c = c.assignedSlot || c.parentNode;
                                        continue
                                    }
                                    let e = c.getBoundingClientRect();
                                    t = {
                                        left: e.left,
                                        right: e.left + c.clientWidth,
                                        top: e.top,
                                        bottom: e.top + c.clientHeight
                                    }
                                }
                                let f = 0,
                                    p = 0;
                                if ("nearest" == o) e.top < t.top ? (p = -(t.top - e.top + r), i > 0 && e.bottom > t.bottom + p && (p = e.bottom - t.bottom + p + r)) : e.bottom > t.bottom && (p = e.bottom - t.bottom + r, i < 0 && e.top - p < t.top && (p = -(t.top + p - e.top + r)));
                                else {
                                    let s = e.bottom - e.top,
                                        n = t.bottom - t.top;
                                    p = ("center" == o && s <= n ? e.top + s / 2 - n / 2 : "start" == o || "center" == o && i < 0 ? e.top - r : e.bottom - n + r) - t.top
                                }
                                if ("nearest" == s ? e.left < t.left ? (f = -(t.left - e.left + n), i > 0 && e.right > t.right + f && (f = e.right - t.right + f + n)) : e.right > t.right && (f = e.right - t.right + n, i < 0 && e.left < t.left + f && (f = -(t.left + f - e.left + n))) : f = ("center" == s ? e.left + (e.right - e.left) / 2 - (t.right - t.left) / 2 : "start" == s == l ? e.left - n : e.right - (t.right - t.left) + n) - t.left, f || p) {
                                    if (u) a.scrollBy(f, p);
                                    else {
                                        let t = 0,
                                            i = 0;
                                        if (p) {
                                            let t = c.scrollTop;
                                            c.scrollTop += p, i = c.scrollTop - t
                                        }
                                        if (f) {
                                            let e = c.scrollLeft;
                                            c.scrollLeft += f, t = c.scrollLeft - e
                                        }
                                        e = {
                                            left: e.left - t,
                                            top: e.top - i,
                                            right: e.right - t,
                                            bottom: e.bottom - i
                                        }, t && 1 > Math.abs(t - f) && (s = "nearest"), i && 1 > Math.abs(i - p) && (o = "nearest")
                                    }
                                }
                                if (u) break;
                                c = c.assignedSlot || c.parentNode
                            } else if (11 == c.nodeType) c = c.host;
                        else break
                    }(this.view.scrollDOM, n, e.head < e.anchor ? -1 : 1, t.x, t.y, t.xMargin, t.yMargin, this.view.textDirection == tq.LTR)
                }
            }
            class t8 extends to {
                constructor(t) {
                    super(), this.height = t
                }
                toDOM() {
                    let t = document.createElement("div");
                    return this.updateDOM(t), t
                }
                eq(t) {
                    return t.height == this.height
                }
                updateDOM(t) {
                    return t.style.height = this.height + "px", !0
                }
                get estimatedHeight() {
                    return this.height
                }
            }

            function t3(t) {
                let e, i, s = t.observer.selectionRange,
                    o = s.focusNode && t9(s.focusNode, s.focusOffset, 0);
                if (!o) return null;
                let n = T.get(o);
                if (n instanceof X) i = (e = n.posAtStart) + n.length;
                else t: for (let s = 0, n = o;;) {
                    for (let o = n.previousSibling, r; o; o = o.previousSibling) {
                        if (r = T.get(o)) {
                            e = i = r.posAtEnd + s;
                            break t
                        }
                        let n = new L([], t.state);
                        if (n.readNode(o), n.text.indexOf("￿") > -1) return null;
                        s += n.text.length
                    }
                    if (!(n = n.parentNode)) return null;
                    let o = T.get(n);
                    if (o) {
                        e = i = o.posAtStart + s;
                        break
                    }
                }
                return {
                    from: e,
                    to: i,
                    node: o
                }
            }

            function t9(t, e, i) {
                if (i <= 0)
                    for (let i = t, s = e;;) {
                        if (3 == i.nodeType) return i;
                        if (1 == i.nodeType && s > 0) s = v(i = i.childNodes[s - 1]);
                        else break
                    }
                if (i >= 0)
                    for (let s = t, o = e;;) {
                        if (3 == s.nodeType) return s;
                        if (1 == s.nodeType && o < s.childNodes.length && i >= 0) s = s.childNodes[o], o = 0;
                        else break
                    }
                return null
            }
            class t5 {
                constructor() {
                    this.changes = []
                }
                compareRange(t, e) {
                    td(t, e, this.changes)
                }
                comparePoint(t, e) {
                    td(t, e, this.changes)
                }
            }

            function t4(t, e) {
                return t.top < e.bottom - 1 && t.bottom > e.top + 1
            }

            function t6(t, e) {
                return e < t.top ? {
                    top: e,
                    left: t.left,
                    right: t.right,
                    bottom: t.bottom
                } : t
            }

            function t7(t, e) {
                return e > t.bottom ? {
                    top: t.top,
                    left: t.left,
                    right: t.right,
                    bottom: e
                } : t
            }

            function et(t, e, i) {
                let s = t.nodeValue.length,
                    o = -1,
                    n = 1e9,
                    r = 0;
                for (let l = 0; l < s; l++) {
                    let s = S(t, l, l + 1).getClientRects();
                    for (let h = 0; h < s.length; h++) {
                        let a = s[h];
                        if (a.top == a.bottom) continue;
                        r || (r = e - a.left);
                        let c = (a.top > i ? a.top - i : i - a.bottom) - 1;
                        if (a.left - 1 <= e && a.right + 1 >= e && c < n) {
                            let i = e >= (a.left + a.right) / 2,
                                s = i;
                            if ((_.chrome || _.gecko) && S(t, l).getBoundingClientRect().left == a.right && (s = !i), c <= 0) return {
                                node: t,
                                offset: l + (s ? 1 : 0)
                            };
                            o = l + (s ? 1 : 0), n = c
                        }
                    }
                }
                return {
                    node: t,
                    offset: o > -1 ? o : r > 0 ? t.nodeValue.length : 0
                }
            }

            function ee(t, e, i, s = -1) {
                var o, n;
                let r = t.contentDOM.getBoundingClientRect(),
                    l = r.top + t.viewState.paddingTop,
                    h, {
                        docHeight: a
                    } = t.viewState,
                    {
                        x: c,
                        y: d
                    } = e,
                    u = d - l;
                if (u < 0) return 0;
                if (u > a) return t.state.doc.length;
                for (let e = t.viewState.heightOracle.textHeight / 2, o = !1;
                    (h = t.elementAtHeight(u)).type != tn.Text;)
                    for (; !((u = s > 0 ? h.bottom + e : h.top - e) >= 0) || !(u <= a);) {
                        if (o) return i ? null : 0;
                        o = !0, s = -s
                    }
                d = l + u;
                let p = h.from;
                if (p < t.viewport.from) return 0 == t.viewport.from ? 0 : i ? null : ei(t, r, h, c, d);
                if (p > t.viewport.to) return t.viewport.to == t.state.doc.length ? t.state.doc.length : i ? null : ei(t, r, h, c, d);
                let g = t.dom.ownerDocument,
                    m = t.root.elementFromPoint ? t.root : g,
                    v = m.elementFromPoint(c, d);
                v && !t.contentDOM.contains(v) && (v = null), !v && (c = Math.max(r.left + 1, Math.min(r.right - 1, c)), (v = m.elementFromPoint(c, d)) && !t.contentDOM.contains(v) && (v = null));
                let w, b = -1;
                if (v && (null === (o = t.docView.nearest(v)) || void 0 === o ? void 0 : o.isEditable) != !1) {
                    if (g.caretPositionFromPoint) {
                        let t = g.caretPositionFromPoint(c, d);
                        t && ({
                            offsetNode: w,
                            offset: b
                        } = t)
                    } else if (g.caretRangeFromPoint) {
                        let e = g.caretRangeFromPoint(c, d);
                        e && ({
                            startContainer: w,
                            startOffset: b
                        } = e, (!t.contentDOM.contains(w) || _.safari && function (t, e, i) {
                            let s;
                            if (3 != t.nodeType || e != (s = t.nodeValue.length)) return !1;
                            for (let e = t.nextSibling; e; e = e.nextSibling)
                                if (1 != e.nodeType || "BR" != e.nodeName) return !1;
                            return S(t, s - 1, s).getBoundingClientRect().left > i
                        }(w, b, c) || _.chrome && function (t, e, i) {
                            if (0 != e) return !1;
                            for (let e = t;;) {
                                let t = e.parentNode;
                                if (!t || 1 != t.nodeType || t.firstChild != e) return !1;
                                if (t.classList.contains("cm-line")) break;
                                e = t
                            }
                            return i - (1 == t.nodeType ? t.getBoundingClientRect() : S(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect()).left > 5
                        }(w, b, c)) && (w = void 0))
                    }
                }
                if (!w || !t.docView.dom.contains(w)) {
                    let e = tu.find(t.docView, p);
                    if (!e) return u > h.top + h.height / 2 ? h.to : h.from;
                    ({
                        node: w,
                        offset: b
                    } = function t(e, i, s) {
                        let o, n, r, l, h, a, c, d, u = !1;
                        for (let m = e.firstChild; m; m = m.nextSibling) {
                            let e = f(m);
                            for (let f = 0; f < e.length; f++) {
                                var p, g;
                                let v = e[f];
                                a && t4(a, v) && (v = t6(t7(v, a.bottom), a.top));
                                let w = (p = v).left > i ? p.left - i : Math.max(0, i - p.right),
                                    b = (g = v).top > s ? g.top - s : Math.max(0, s - g.bottom);
                                if (0 == w && 0 == b) return 3 == m.nodeType ? et(m, i, s) : t(m, i, s);
                                if (!h || d > b || d == b && c > w) {
                                    h = m, a = v, c = w, d = b;
                                    let t = b ? s < v.top ? -1 : 1 : w ? i < v.left ? -1 : 1 : 0;
                                    u = !t || (t > 0 ? f < e.length - 1 : f > 0)
                                }
                                0 == w ? s > v.bottom && (!r || r.bottom < v.bottom) ? (o = m, r = v) : s < v.top && (!l || l.top > v.top) && (n = m, l = v) : r && t4(r, v) ? r = t7(r, v.bottom) : l && t4(l, v) && (l = t6(l, v.top))
                            }
                        }
                        if (r && r.bottom >= s ? (h = o, a = r) : l && l.top <= s && (h = n, a = l), !h) return {
                            node: e,
                            offset: 0
                        };
                        let m = Math.max(a.left, Math.min(a.right, i));
                        if (3 == h.nodeType) return et(h, m, s);
                        if (u && "false" != h.contentEditable) return t(h, m, s);
                        let v = Array.prototype.indexOf.call(e.childNodes, h) + (i >= (a.left + a.right) / 2 ? 1 : 0);
                        return {
                            node: e,
                            offset: v
                        }
                    }(e.dom, c, d))
                }
                let y = t.docView.nearest(w);
                if (!y) return null;
                if (!y.isWidget || (null === (n = y.dom) || void 0 === n ? void 0 : n.nodeType) != 1) return y.localPosFromDOM(w, b) + y.posAtStart; {
                    let t = y.dom.getBoundingClientRect();
                    return e.y < t.top || e.y <= t.bottom && e.x <= (t.left + t.right) / 2 ? y.posAtStart : y.posAtEnd
                }
            }

            function ei(t, e, i, s, o) {
                let n = Math.round((s - e.left) * t.defaultCharacterWidth);
                if (t.lineWrapping && i.height > 1.5 * t.defaultLineHeight) {
                    let e = t.viewState.heightOracle.textHeight;
                    n += Math.floor((o - i.top - (t.defaultLineHeight - e) * .5) / e) * t.viewState.heightOracle.lineLength
                }
                let r = t.state.sliceDoc(i.from, i.to);
                return i.from + (0, l.Gz)(r, n, t.state.tabSize)
            }

            function es(t, e) {
                let i = t.lineBlockAt(e);
                if (Array.isArray(i.type)) {
                    for (let t of i.type)
                        if (t.to > e || t.to == e && (t.to == i.to || t.type == tn.Text)) return t
                }
                return i
            }

            function eo(t, e, i, s) {
                let o = t.state.doc.lineAt(e.head),
                    n = t.bidiSpans(o),
                    r = t.textDirectionAt(o.from);
                for (let h = e, a = null;;) {
                    let e = function (t, e, i, s, o) {
                            var n;
                            let r = s.head - t.from,
                                h = -1;
                            if (0 == r) {
                                if (!o || !t.length) return null;
                                e[0].level != i && (r = e[0].side(!1, i), h = 0)
                            } else if (r == t.length) {
                                if (o) return null;
                                let t = e[e.length - 1];
                                t.level != i && (r = t.side(!0, i), h = e.length - 1)
                            }
                            h < 0 && (h = tZ.find(e, r, null !== (n = s.bidiLevel) && void 0 !== n ? n : -1, s.assoc));
                            let a = e[h];
                            r == a.side(o, i) && (r = (a = e[h += o ? 1 : -1]).side(!o, i));
                            let c = o == (a.dir == i),
                                d = (0, l.cp)(t.text, r, c);
                            if (t1 = t.text.slice(Math.min(r, d), Math.max(r, d)), d != a.side(o, i)) return l.jT.cursor(d + t.from, c ? -1 : 1, a.level);
                            let u = h == (o ? e.length - 1 : 0) ? null : e[h + (o ? 1 : -1)];
                            return u || a.level == i ? u && u.level < a.level ? l.jT.cursor(u.side(!o, i) + t.from, o ? 1 : -1, u.level) : l.jT.cursor(d + t.from, o ? -1 : 1, a.level) : l.jT.cursor(o ? t.to : t.from, o ? -1 : 1, i)
                        }(o, n, r, h, i),
                        c = t1;
                    if (!e) {
                        if (o.number == (i ? t.state.doc.lines : 1)) return h;
                        c = "\n", o = t.state.doc.line(o.number + (i ? 1 : -1)), n = t.bidiSpans(o), e = l.jT.cursor(i ? o.from : o.to)
                    }
                    if (a) {
                        if (!a(c)) return h
                    } else {
                        if (!s) return e;
                        a = s(c)
                    }
                    h = e
                }
            }

            function en(t, e, i) {
                for (;;) {
                    let s = 0;
                    for (let o of t) o.between(e - 1, e + 1, (t, o, n) => {
                        if (e > t && e < o) {
                            let n = s || i || (e - t < o - e ? -1 : 1);
                            e = n < 0 ? t : o, s = n
                        }
                    });
                    if (!s) return e
                }
            }

            function er(t, e, i) {
                let s = en(t.state.facet(tV).map(e => e(t)), i.from, e.head > i.from ? -1 : 1);
                return s == i.from ? i : l.jT.cursor(s, s < i.from ? 1 : -1)
            }
            class el {
                constructor(t) {
                    this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null;
                    let e = (e, i) => {
                        !this.ignoreDuringComposition(i) && ("keydown" == i.type && this.keydown(t, i) || (this.mustFlushObserver(i) && t.observer.forceFlush(), this.runCustomHandlers(i.type, t, i) ? i.preventDefault() : e(t, i)))
                    };
                    for (let i in ep) {
                        let s = ep[i];
                        t.contentDOM.addEventListener(i, i => {
                            ef(t, i) && e(s, i)
                        }, eg[i]), this.registeredEvents.push(i)
                    }
                    t.scrollDOM.addEventListener("mousedown", i => {
                        if (i.target == t.scrollDOM && i.clientY > t.contentDOM.getBoundingClientRect().bottom && (e(ep.mousedown, i), !i.defaultPrevented && 2 == i.button)) {
                            let e = t.contentDOM.style.minHeight;
                            t.contentDOM.style.minHeight = "100%", setTimeout(() => t.contentDOM.style.minHeight = e, 200)
                        }
                    }), t.scrollDOM.addEventListener("drop", i => {
                        i.target == t.scrollDOM && i.clientY > t.contentDOM.getBoundingClientRect().bottom && e(ep.drop, i)
                    }), _.chrome && 102 == _.chrome_version && t.scrollDOM.addEventListener("wheel", () => {
                        this.chromeScrollHack < 0 ? t.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(() => {
                            this.chromeScrollHack = -1, t.contentDOM.style.pointerEvents = ""
                        }, 100)
                    }, {
                        passive: !0
                    }), this.notifiedFocused = t.hasFocus, _.safari && t.contentDOM.addEventListener("input", () => null)
                }
                setSelectionOrigin(t) {
                    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now()
                }
                ensureHandlers(t, e) {
                    var i;
                    let s;
                    for (let o of (this.customHandlers = [], e))
                        if (s = null === (i = o.update(t).spec) || void 0 === i ? void 0 : i.domEventHandlers)
                            for (let e in this.customHandlers.push({
                                    plugin: o.value,
                                    handlers: s
                                }), s) 0 > this.registeredEvents.indexOf(e) && "scroll" != e && (this.registeredEvents.push(e), t.contentDOM.addEventListener(e, i => {
                                ef(t, i) && this.runCustomHandlers(e, t, i) && i.preventDefault()
                            }))
                }
                runCustomHandlers(t, e, i) {
                    for (let s of this.customHandlers) {
                        let o = s.handlers[t];
                        if (o) try {
                            if (o.call(s.plugin, i, e) || i.defaultPrevented) return !0
                        } catch (t) {
                            tT(e.state, t)
                        }
                    }
                    return !1
                }
                runScrollHandlers(t, e) {
                    for (let i of (this.lastScrollTop = t.scrollDOM.scrollTop, this.lastScrollLeft = t.scrollDOM.scrollLeft, this.customHandlers)) {
                        let s = i.handlers.scroll;
                        if (s) try {
                            s.call(i.plugin, e, t)
                        } catch (e) {
                            tT(t.state, e)
                        }
                    }
                }
                keydown(t, e) {
                    let i;
                    return this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), !!(9 == e.keyCode && Date.now() < this.lastEscPress + 2e3) || ((27 != e.keyCode && 0 > ec.indexOf(e.keyCode) && (t.inputState.lastEscPress = 0), _.android && _.chrome && !e.synthetic && (13 == e.keyCode || 8 == e.keyCode)) ? (t.observer.delayAndroidKey(e.key, e.keyCode), !0) : !!(_.ios && !e.synthetic && !e.altKey && !e.metaKey && ((i = eh.find(t => t.keyCode == e.keyCode)) && !e.ctrlKey || ea.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey)) && (this.pendingIOSKey = i || e, setTimeout(() => this.flushIOSKey(t), 250), !0))
                }
                flushIOSKey(t) {
                    let e = this.pendingIOSKey;
                    return !!e && (this.pendingIOSKey = void 0, M(t.contentDOM, e.key, e.keyCode))
                }
                ignoreDuringComposition(t) {
                    return !!/^key/.test(t.type) && (this.composing > 0 || !!(_.safari && !_.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
                }
                mustFlushObserver(t) {
                    return "keydown" == t.type && 229 != t.keyCode
                }
                startMouseSelection(t) {
                    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t
                }
                update(t) {
                    this.mouseSelection && this.mouseSelection.update(t), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
                }
                destroy() {
                    this.mouseSelection && this.mouseSelection.destroy()
                }
            }
            let eh = [{
                    key: "Backspace",
                    keyCode: 8,
                    inputType: "deleteContentBackward"
                }, {
                    key: "Enter",
                    keyCode: 13,
                    inputType: "insertParagraph"
                }, {
                    key: "Enter",
                    keyCode: 13,
                    inputType: "insertLineBreak"
                }, {
                    key: "Delete",
                    keyCode: 46,
                    inputType: "deleteContentForward"
                }],
                ea = "dthko",
                ec = [16, 17, 18, 20, 91, 92, 224, 225];

            function ed(t) {
                return .7 * Math.max(0, t) + 8
            }
            class eu {
                constructor(t, e, i, s) {
                    let o;
                    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = {
                        x: 0,
                        y: 0
                    }, this.scrolling = -1, this.lastEvent = e, this.scrollParent = function (t) {
                        let e = t.ownerDocument;
                        for (let i = t.parentNode; i && i != e.body;)
                            if (1 == i.nodeType) {
                                if (i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth) return i;
                                i = i.assignedSlot || i.parentNode
                            } else if (11 == i.nodeType) i = i.host;
                        else break;
                        return null
                    }(t.contentDOM), this.atoms = t.state.facet(tV).map(e => e(t));
                    let n = t.contentDOM.ownerDocument;
                    n.addEventListener("mousemove", this.move = this.move.bind(this)), n.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(l.yy.allowMultipleSelections) && ((o = t.state.facet(tv)).length ? o[0](e) : _.mac ? e.metaKey : e.ctrlKey), this.dragging = !! function (t, e) {
                        let {
                            main: i
                        } = t.state.selection;
                        if (i.empty) return !1;
                        let s = c(t.root);
                        if (!s || 0 == s.rangeCount) return !0;
                        let o = s.getRangeAt(0).getClientRects();
                        for (let t = 0; t < o.length; t++) {
                            let i = o[t];
                            if (i.left <= e.clientX && i.right >= e.clientX && i.top <= e.clientY && i.bottom >= e.clientY) return !0
                        }
                        return !1
                    }(t, e) && 1 == eA(e) && null
                }
                start(t) {
                    !1 === this.dragging && (t.preventDefault(), this.select(t))
                }
                move(t) {
                    var e, i;
                    if (0 == t.buttons) return this.destroy();
                    if (this.dragging || null == this.dragging && 10 > Math.max(Math.abs((i = this.startEvent).clientX - t.clientX), Math.abs(i.clientY - t.clientY))) return;
                    this.select(this.lastEvent = t);
                    let s = 0,
                        o = 0,
                        n = (null === (e = this.scrollParent) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {
                            left: 0,
                            top: 0,
                            right: this.view.win.innerWidth,
                            bottom: this.view.win.innerHeight
                        },
                        r = tz(this.view);
                    t.clientX - r.left <= n.left + 6 ? s = -ed(n.left - t.clientX) : t.clientX + r.right >= n.right - 6 && (s = ed(t.clientX - n.right)), t.clientY - r.top <= n.top + 6 ? o = -ed(n.top - t.clientY) : t.clientY + r.bottom >= n.bottom - 6 && (o = ed(t.clientY - n.bottom)), this.setScrollSpeed(s, o)
                }
                up(t) {
                    null == this.dragging && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy()
                }
                destroy() {
                    this.setScrollSpeed(0, 0);
                    let t = this.view.contentDOM.ownerDocument;
                    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null
                }
                setScrollSpeed(t, e) {
                    this.scrollSpeed = {
                        x: t,
                        y: e
                    }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
                }
                scroll() {
                    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), !1 === this.dragging && this.select(this.lastEvent)
                }
                skipAtoms(t) {
                    let e = null;
                    for (let i = 0; i < t.ranges.length; i++) {
                        let s = t.ranges[i],
                            o = null;
                        if (s.empty) {
                            let t = en(this.atoms, s.from, 0);
                            t != s.from && (o = l.jT.cursor(t, -1))
                        } else {
                            let t = en(this.atoms, s.from, -1),
                                e = en(this.atoms, s.to, 1);
                            (t != s.from || e != s.to) && (o = l.jT.range(s.from == s.anchor ? t : e, s.from == s.head ? t : e))
                        }
                        o && (e || (e = t.ranges.slice()), e[i] = o)
                    }
                    return e ? l.jT.create(e, t.mainIndex) : t
                }
                select(t) {
                    let {
                        view: e
                    } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
                    (this.mustSelect || !i.eq(e.state.selection) || i.main.assoc != e.state.selection.main.assoc && !1 === this.dragging) && this.view.dispatch({
                        selection: i,
                        userEvent: "select.pointer"
                    }), this.mustSelect = !1
                }
                update(t) {
                    t.docChanged && this.dragging && (this.dragging = this.dragging.map(t.changes)), this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20)
                }
            }

            function ef(t, e) {
                if (!e.bubbles) return !0;
                if (e.defaultPrevented) return !1;
                for (let i = e.target, s; i != t.contentDOM; i = i.parentNode)
                    if (!i || 11 == i.nodeType || (s = T.get(i)) && s.ignoreEvent(e)) return !1;
                return !0
            }
            let ep = Object.create(null),
                eg = Object.create(null),
                em = _.ie && _.ie_version < 15 || _.ios && _.webkit_version < 604;

            function ev(t, e) {
                let {
                    state: i
                } = t, s, o = 1, n = i.toText(e), r = n.lines == i.selection.ranges.length;
                if (null != eT && i.selection.ranges.every(t => t.empty) && eT == n.toString()) {
                    let t = -1;
                    s = i.changeByRange(s => {
                        let h = i.doc.lineAt(s.from);
                        if (h.from == t) return {
                            range: s
                        };
                        t = h.from;
                        let a = i.toText((r ? n.line(o++).text : e) + i.lineBreak);
                        return {
                            changes: {
                                from: h.from,
                                insert: a
                            },
                            range: l.jT.cursor(s.from + a.length)
                        }
                    })
                } else s = r ? i.changeByRange(t => {
                    let e = n.line(o++);
                    return {
                        changes: {
                            from: t.from,
                            to: t.to,
                            insert: e.text
                        },
                        range: l.jT.cursor(t.from + e.length)
                    }
                }) : i.replaceSelection(n);
                t.dispatch(s, {
                    userEvent: "input.paste",
                    scrollIntoView: !0
                })
            }

            function ew(t, e, i, s) {
                if (1 == s) return l.jT.cursor(e, i);
                if (2 == s) return function (t, e, i = 1) {
                    let s = t.charCategorizer(e),
                        o = t.doc.lineAt(e),
                        n = e - o.from;
                    if (0 == o.length) return l.jT.cursor(e);
                    0 == n ? i = 1 : n == o.length && (i = -1);
                    let r = n,
                        h = n;
                    i < 0 ? r = (0, l.cp)(o.text, n, !1) : h = (0, l.cp)(o.text, n);
                    let a = s(o.text.slice(r, h));
                    for (; r > 0;) {
                        let t = (0, l.cp)(o.text, r, !1);
                        if (s(o.text.slice(t, r)) != a) break;
                        r = t
                    }
                    for (; h < o.length;) {
                        let t = (0, l.cp)(o.text, h);
                        if (s(o.text.slice(h, t)) != a) break;
                        h = t
                    }
                    return l.jT.range(r + o.from, h + o.from)
                }(t.state, e, i); {
                    let i = tu.find(t.docView, e),
                        s = t.state.doc.lineAt(i ? i.posAtEnd : e),
                        o = i ? i.posAtStart : s.from,
                        n = i ? i.posAtEnd : s.to;
                    return n < t.state.doc.length && n == s.to && n++, l.jT.range(o, n)
                }
            }
            ep.keydown = (t, e) => {
                t.inputState.setSelectionOrigin("select"), 27 == e.keyCode && (t.inputState.lastEscPress = Date.now())
            }, ep.touchstart = (t, e) => {
                t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer")
            }, ep.touchmove = t => {
                t.inputState.setSelectionOrigin("select.pointer")
            }, eg.touchstart = eg.touchmove = {
                passive: !0
            }, ep.mousedown = (t, e) => {
                let i, s, o;
                if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3) return;
                let n = null;
                for (let i of t.state.facet(tb))
                    if (n = i(t, e)) break;
                if (n || 0 != e.button || (i = ex(t, e), s = eA(e), o = t.state.selection, n = {
                        update(t) {
                            t.docChanged && (i.pos = t.changes.mapPos(i.pos), o = o.map(t.changes))
                        },
                        get(e, n, r) {
                            let h = ex(t, e),
                                a, c = ew(t, h.pos, h.bias, s);
                            if (i.pos != h.pos && !n) {
                                let e = ew(t, i.pos, i.bias, s),
                                    o = Math.min(e.from, c.from),
                                    n = Math.max(e.to, c.to);
                                c = o < c.from ? l.jT.range(o, n) : l.jT.range(n, o)
                            }
                            return n ? o.replaceRange(o.main.extend(c.from, c.to)) : r && 1 == s && o.ranges.length > 1 && (a = function (t, e) {
                                for (let i = 0; i < t.ranges.length; i++) {
                                    let {
                                        from: s,
                                        to: o
                                    } = t.ranges[i];
                                    if (s <= e && o >= e) return l.jT.create(t.ranges.slice(0, i).concat(t.ranges.slice(i + 1)), t.mainIndex == i ? 0 : t.mainIndex - (t.mainIndex > i ? 1 : 0))
                                }
                                return null
                            }(o, h.pos)) ? a : r ? o.addRange(c) : l.jT.create([c])
                        }
                    }), n) {
                    let i = !t.hasFocus;
                    t.inputState.startMouseSelection(new eu(t, e, n, i)), i && t.observer.ignore(() => x(t.contentDOM)), t.inputState.mouseSelection && t.inputState.mouseSelection.start(e)
                }
            };
            let eb = (t, e) => t >= e.top && t <= e.bottom,
                ey = (t, e, i) => eb(e, i) && t >= i.left && t <= i.right;

            function ex(t, e) {
                let i = t.posAtCoords({
                    x: e.clientX,
                    y: e.clientY
                }, !1);
                return {
                    pos: i,
                    bias: function (t, e, i, s) {
                        let o = tu.find(t.docView, e);
                        if (!o) return 1;
                        let n = e - o.posAtStart;
                        if (0 == n) return 1;
                        if (n == o.length) return -1;
                        let r = o.coordsAt(n, -1);
                        if (r && ey(i, s, r)) return -1;
                        let l = o.coordsAt(n, 1);
                        return l && ey(i, s, l) ? 1 : r && eb(s, r) ? -1 : 1
                    }(t, i, e.clientX, e.clientY)
                }
            }
            let eS = _.ie && _.ie_version <= 11,
                eM = null,
                ek = 0,
                eC = 0;

            function eA(t) {
                if (!eS) return t.detail;
                let e = eM,
                    i = eC;
                return eM = t, eC = Date.now(), ek = !e || i > Date.now() - 400 && 2 > Math.abs(e.clientX - t.clientX) && 2 > Math.abs(e.clientY - t.clientY) ? (ek + 1) % 3 : 1
            }

            function eD(t, e, i, s) {
                let o;
                if (!i) return;
                let n = t.posAtCoords({
                    x: e.clientX,
                    y: e.clientY
                }, !1);
                e.preventDefault();
                let {
                    mouseSelection: r
                } = t.inputState, l = s && r && r.dragging && ((o = t.state.facet(tw)).length ? o[0](e) : _.mac ? !e.altKey : !e.ctrlKey) ? {
                    from: r.dragging.from,
                    to: r.dragging.to
                } : null, h = {
                    from: n,
                    insert: i
                }, a = t.state.changes(l ? [l, h] : h);
                t.focus(), t.dispatch({
                    changes: a,
                    selection: {
                        anchor: a.mapPos(n, -1),
                        head: a.mapPos(n, 1)
                    },
                    userEvent: l ? "move.drop" : "input.drop"
                })
            }
            ep.dragstart = (t, e) => {
                let {
                    selection: {
                        main: i
                    }
                } = t.state, {
                    mouseSelection: s
                } = t.inputState;
                s && (s.dragging = i), e.dataTransfer && (e.dataTransfer.setData("Text", t.state.sliceDoc(i.from, i.to)), e.dataTransfer.effectAllowed = "copyMove")
            }, ep.drop = (t, e) => {
                if (!e.dataTransfer) return;
                if (t.state.readOnly) return e.preventDefault();
                let i = e.dataTransfer.files;
                if (i && i.length) {
                    e.preventDefault();
                    let s = Array(i.length),
                        o = 0,
                        n = () => {
                            ++o == i.length && eD(t, e, s.filter(t => null != t).join(t.state.lineBreak), !1)
                        };
                    for (let t = 0; t < i.length; t++) {
                        let e = new FileReader;
                        e.onerror = n, e.onload = () => {
                            /[\x00-\x08\x0e-\x1f]{2}/.test(e.result) || (s[t] = e.result), n()
                        }, e.readAsText(i[t])
                    }
                } else eD(t, e, e.dataTransfer.getData("Text"), !0)
            }, ep.paste = (t, e) => {
                if (t.state.readOnly) return e.preventDefault();
                t.observer.flush();
                let i = em ? null : e.clipboardData;
                i ? (ev(t, i.getData("text/plain") || i.getData("text/uri-text")), e.preventDefault()) : function (t) {
                    let e = t.dom.parentNode;
                    if (!e) return;
                    let i = e.appendChild(document.createElement("textarea"));
                    i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.focus(), setTimeout(() => {
                        t.focus(), i.remove(), ev(t, i.value)
                    }, 50)
                }(t)
            };
            let eT = null;
            ep.copy = ep.cut = (t, e) => {
                let {
                    text: i,
                    ranges: s,
                    linewise: o
                } = function (t) {
                    let e = [],
                        i = [],
                        s = !1;
                    for (let s of t.selection.ranges) s.empty || (e.push(t.sliceDoc(s.from, s.to)), i.push(s));
                    if (!e.length) {
                        let o = -1;
                        for (let {
                                from: s
                            } of t.selection.ranges) {
                            let n = t.doc.lineAt(s);
                            n.number > o && (e.push(n.text), i.push({
                                from: n.from,
                                to: Math.min(t.doc.length, n.to + 1)
                            })), o = n.number
                        }
                        s = !0
                    }
                    return {
                        text: e.join(t.lineBreak),
                        ranges: i,
                        linewise: s
                    }
                }(t.state);
                if (!i && !o) return;
                eT = o ? i : null;
                let n = em ? null : e.clipboardData;
                n ? (e.preventDefault(), n.clearData(), n.setData("text/plain", i)) : function (t, e) {
                    let i = t.dom.parentNode;
                    if (!i) return;
                    let s = i.appendChild(document.createElement("textarea"));
                    s.style.cssText = "position: fixed; left: -10000px; top: 10px", s.value = e, s.focus(), s.selectionEnd = e.length, s.selectionStart = 0, setTimeout(() => {
                        s.remove(), t.focus()
                    }, 50)
                }(t, i), "cut" != e.type || t.state.readOnly || t.dispatch({
                    changes: s,
                    scrollIntoView: !0,
                    userEvent: "delete.cut"
                })
            };
            let eO = l.q6.define();

            function eR(t, e) {
                let i = [];
                for (let s of t.facet(tM)) {
                    let o = s(t, e);
                    o && i.push(o)
                }
                return i ? t.update({
                    effects: i,
                    annotations: eO.of(!0)
                }) : null
            }

            function eE(t) {
                setTimeout(() => {
                    let e = t.hasFocus;
                    if (e != t.inputState.notifiedFocused) {
                        let i = eR(t.state, e);
                        i ? t.dispatch(i) : t.update([])
                    }
                }, 10)
            }
            ep.focus = t => {
                t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), eE(t)
            }, ep.blur = t => {
                t.observer.clearSelectionRange(), eE(t)
            }, ep.compositionstart = ep.compositionupdate = t => {
                null == t.inputState.compositionFirstChange && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0)
            }, ep.compositionend = t => {
                t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, _.chrome && _.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
                    t.inputState.composing < 0 && t.docView.hasComposition && t.update([])
                }, 50)
            }, ep.contextmenu = t => {
                t.inputState.lastContextMenu = Date.now()
            }, ep.beforeinput = (t, e) => {
                var i;
                let s;
                if (_.chrome && _.android && (s = eh.find(t => t.inputType == e.inputType)) && (t.observer.delayAndroidKey(s.key, s.keyCode), "Backspace" == s.key || "Delete" == s.key)) {
                    let e = (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.height) || 0;
                    setTimeout(() => {
                        var i;
                        ((null === (i = window.visualViewport) || void 0 === i ? void 0 : i.height) || 0) > e + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus())
                    }, 100)
                }
            };
            let eB = ["pre-wrap", "normal", "pre-line", "break-spaces"];
            class eL {
                constructor(t) {
                    this.lineWrapping = t, this.doc = l.xv.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1
                }
                heightForGap(t, e) {
                    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
                    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * .5) / this.lineLength))), this.lineHeight * i
                }
                heightForLine(t) {
                    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight
                }
                setDoc(t) {
                    return this.doc = t, this
                }
                mustRefreshForWrapping(t) {
                    return eB.indexOf(t) > -1 != this.lineWrapping
                }
                mustRefreshForHeights(t) {
                    let e = !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        s < 0 ? i++ : this.heightSamples[Math.floor(10 * s)] || (e = !0, this.heightSamples[Math.floor(10 * s)] = !0)
                    }
                    return e
                }
                refresh(t, e, i, s, o, n) {
                    let r = eB.indexOf(t) > -1,
                        l = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != r;
                    if (this.lineWrapping = r, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = o, l) {
                        this.heightSamples = {};
                        for (let t = 0; t < n.length; t++) {
                            let e = n[t];
                            e < 0 ? t++ : this.heightSamples[Math.floor(10 * e)] = !0
                        }
                    }
                    return l
                }
            }
            class eH {
                constructor(t, e) {
                    this.from = t, this.heights = e, this.index = 0
                }
                get more() {
                    return this.index < this.heights.length
                }
            }
            class eP {
                constructor(t, e, i, s, o) {
                    this.from = t, this.length = e, this.top = i, this.height = s, this._content = o
                }
                get type() {
                    return "number" == typeof this._content ? tn.Text : Array.isArray(this._content) ? this._content : this._content.type
                }
                get to() {
                    return this.from + this.length
                }
                get bottom() {
                    return this.top + this.height
                }
                get widget() {
                    return this._content instanceof ta ? this._content.widget : null
                }
                get widgetLineBreaks() {
                    return "number" == typeof this._content ? this._content : 0
                }
                join(t) {
                    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
                    return new eP(this.from, this.length + t.length, this.top, this.height + t.height, e)
                }
            }
            var eN = ((r = eN || (eN = {}))[r.ByPos = 0] = "ByPos", r[r.ByHeight = 1] = "ByHeight", r[r.ByPosNoHeight = 2] = "ByPosNoHeight", r);
            class eV {
                constructor(t, e, i = 2) {
                    this.length = t, this.height = e, this.flags = i
                }
                get outdated() {
                    return (2 & this.flags) > 0
                }
                set outdated(t) {
                    this.flags = (t ? 2 : 0) | -3 & this.flags
                }
                setHeight(t, e) {
                    this.height != e && (Math.abs(this.height - e) > .001 && (t.heightChanged = !0), this.height = e)
                }
                replace(t, e, i) {
                    return eV.of(i)
                }
                decomposeLeft(t, e) {
                    e.push(this)
                }
                decomposeRight(t, e) {
                    e.push(this)
                }
                applyChanges(t, e, i, s) {
                    let o = this,
                        n = i.doc;
                    for (let r = s.length - 1; r >= 0; r--) {
                        let {
                            fromA: l,
                            toA: h,
                            fromB: a,
                            toB: c
                        } = s[r], d = o.lineAt(l, eN.ByPosNoHeight, i.setDoc(e), 0, 0), u = d.to >= h ? d : o.lineAt(h, eN.ByPosNoHeight, i, 0, 0);
                        for (c += u.to - h, h = u.to; r > 0 && d.from <= s[r - 1].toA;) l = s[r - 1].fromA, a = s[r - 1].fromB, r--, l < d.from && (d = o.lineAt(l, eN.ByPosNoHeight, i, 0, 0));
                        a += d.from - l, l = d.from;
                        let f = eq.build(i.setDoc(n), t, a, c);
                        o = o.replace(l, h, f)
                    }
                    return o.updateHeight(i, 0)
                }
                static empty() {
                    return new ez(0, 0)
                }
                static of (t) {
                    if (1 == t.length) return t[0];
                    let e = 0,
                        i = t.length,
                        s = 0,
                        o = 0;
                    for (;;)
                        if (e == i) {
                            if (s > 2 * o) {
                                let o = t[e - 1];
                                o.break ? t.splice(--e, 1, o.left, null, o.right) : t.splice(--e, 1, o.left, o.right), i += 1 + o.break, s -= o.size
                            } else if (o > 2 * s) {
                                let e = t[i];
                                e.break ? t.splice(i, 1, e.left, null, e.right) : t.splice(i, 1, e.left, e.right), i += 2 + e.break, o -= e.size
                            } else break
                        } else if (s < o) {
                        let i = t[e++];
                        i && (s += i.size)
                    } else {
                        let e = t[--i];
                        e && (o += e.size)
                    }
                    let n = 0;
                    return null == t[e - 1] ? (n = 1, e--) : null == t[e] && (n = 1, i++), new eI(eV.of(t.slice(0, e)), n, eV.of(t.slice(i)))
                }
            }
            eV.prototype.size = 1;
            class eW extends eV {
                constructor(t, e, i) {
                    super(t, e), this.deco = i
                }
                blockAt(t, e, i, s) {
                    return new eP(s, this.length, i, this.height, this.deco || 0)
                }
                lineAt(t, e, i, s, o) {
                    return this.blockAt(0, i, s, o)
                }
                forEachLine(t, e, i, s, o, n) {
                    t <= o + this.length && e >= o && n(this.blockAt(0, i, s, o))
                }
                updateHeight(t, e = 0, i = !1, s) {
                    return s && s.from <= e && s.more && this.setHeight(t, s.heights[s.index++]), this.outdated = !1, this
                }
                toString() {
                    return `block(${this.length})`
                }
            }
            class ez extends eW {
                constructor(t, e) {
                    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0
                }
                blockAt(t, e, i, s) {
                    return new eP(s, this.length, i, this.height, this.breaks)
                }
                replace(t, e, i) {
                    let s = i[0];
                    return 1 == i.length && (s instanceof ez || s instanceof eF && 4 & s.flags) && 10 > Math.abs(this.length - s.length) ? (s instanceof eF ? s = new ez(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : eV.of(i)
                }
                updateHeight(t, e = 0, i = !1, s) {
                    return s && s.from <= e && s.more ? this.setHeight(t, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = !1, this
                }
                toString() {
                    return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
                }
            }
            class eF extends eV {
                constructor(t) {
                    super(t, 0)
                }
                heightMetrics(t, e) {
                    let i = t.doc.lineAt(e).number,
                        s = t.doc.lineAt(e + this.length).number,
                        o = s - i + 1,
                        n, r = 0;
                    if (t.lineWrapping) {
                        let e = Math.min(this.height, t.lineHeight * o);
                        n = e / o, this.length > o + 1 && (r = (this.height - e) / (this.length - o - 1))
                    } else n = this.height / o;
                    return {
                        firstLine: i,
                        lastLine: s,
                        perLine: n,
                        perChar: r
                    }
                }
                blockAt(t, e, i, s) {
                    let {
                        firstLine: o,
                        lastLine: n,
                        perLine: r,
                        perChar: l
                    } = this.heightMetrics(e, s);
                    if (e.lineWrapping) {
                        let o = s + Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length),
                            n = e.doc.lineAt(o),
                            h = r + n.length * l,
                            a = Math.max(i, t - h / 2);
                        return new eP(n.from, n.length, a, h, 0)
                    } {
                        let s = Math.max(0, Math.min(n - o, Math.floor((t - i) / r))),
                            {
                                from: l,
                                length: h
                            } = e.doc.line(o + s);
                        return new eP(l, h, i + r * s, r, 0)
                    }
                }
                lineAt(t, e, i, s, o) {
                    if (e == eN.ByHeight) return this.blockAt(t, i, s, o);
                    if (e == eN.ByPosNoHeight) {
                        let {
                            from: e,
                            to: s
                        } = i.doc.lineAt(t);
                        return new eP(e, s - e, 0, 0, 0)
                    }
                    let {
                        firstLine: n,
                        perLine: r,
                        perChar: l
                    } = this.heightMetrics(i, o), h = i.doc.lineAt(t), a = r + h.length * l, c = h.number - n, d = s + r * c + l * (h.from - o - c);
                    return new eP(h.from, h.length, Math.max(s, Math.min(d, s + this.height - a)), a, 0)
                }
                forEachLine(t, e, i, s, o, n) {
                    t = Math.max(t, o), e = Math.min(e, o + this.length);
                    let {
                        firstLine: r,
                        perLine: l,
                        perChar: h
                    } = this.heightMetrics(i, o);
                    for (let a = t, c = s; a <= e;) {
                        let e = i.doc.lineAt(a);
                        if (a == t) {
                            let i = e.number - r;
                            c += l * i + h * (t - o - i)
                        }
                        let s = l + h * e.length;
                        n(new eP(e.from, e.length, c, s, 0)), c += s, a = e.to + 1
                    }
                }
                replace(t, e, i) {
                    let s = this.length - e;
                    if (s > 0) {
                        let t = i[i.length - 1];
                        t instanceof eF ? i[i.length - 1] = new eF(t.length + s) : i.push(null, new eF(s - 1))
                    }
                    if (t > 0) {
                        let e = i[0];
                        e instanceof eF ? i[0] = new eF(t + e.length) : i.unshift(new eF(t - 1), null)
                    }
                    return eV.of(i)
                }
                decomposeLeft(t, e) {
                    e.push(new eF(t - 1), null)
                }
                decomposeRight(t, e) {
                    e.push(null, new eF(this.length - t - 1))
                }
                updateHeight(t, e = 0, i = !1, s) {
                    let o = e + this.length;
                    if (s && s.from <= e + this.length && s.more) {
                        let i = [],
                            n = Math.max(e, s.from),
                            r = -1;
                        for (s.from > e && i.push(new eF(s.from - e - 1).updateHeight(t, e)); n <= o && s.more;) {
                            let e = t.doc.lineAt(n).length;
                            i.length && i.push(null);
                            let o = s.heights[s.index++]; - 1 == r ? r = o : Math.abs(o - r) >= .001 && (r = -2);
                            let l = new ez(e, o);
                            l.outdated = !1, i.push(l), n += e + 1
                        }
                        n <= o && i.push(null, new eF(o - n).updateHeight(t, n));
                        let l = eV.of(i);
                        return (r < 0 || Math.abs(l.height - this.height) >= .001 || Math.abs(r - this.heightMetrics(t, e).perLine) >= .001) && (t.heightChanged = !0), l
                    }
                    return (i || this.outdated) && (this.setHeight(t, t.heightForGap(e, e + this.length)), this.outdated = !1), this
                }
                toString() {
                    return `gap(${this.length})`
                }
            }
            class eI extends eV {
                constructor(t, e, i) {
                    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size
                }
                get break() {
                    return 1 & this.flags
                }
                blockAt(t, e, i, s) {
                    let o = i + this.left.height;
                    return t < o ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, o, s + this.left.length + this.break)
                }
                lineAt(t, e, i, s, o) {
                    let n = s + this.left.height,
                        r = o + this.left.length + this.break,
                        l = e == eN.ByHeight ? t < n : t < r,
                        h = l ? this.left.lineAt(t, e, i, s, o) : this.right.lineAt(t, e, i, n, r);
                    if (this.break || (l ? h.to < r : h.from > r)) return h;
                    let a = e == eN.ByPosNoHeight ? eN.ByPosNoHeight : eN.ByPos;
                    return l ? h.join(this.right.lineAt(r, a, i, n, r)) : this.left.lineAt(r, a, i, s, o).join(h)
                }
                forEachLine(t, e, i, s, o, n) {
                    let r = s + this.left.height,
                        l = o + this.left.length + this.break;
                    if (this.break) t < l && this.left.forEachLine(t, e, i, s, o, n), e >= l && this.right.forEachLine(t, e, i, r, l, n);
                    else {
                        let h = this.lineAt(l, eN.ByPos, i, s, o);
                        t < h.from && this.left.forEachLine(t, h.from - 1, i, s, o, n), h.to >= t && h.from <= e && n(h), e > h.to && this.right.forEachLine(h.to + 1, e, i, r, l, n)
                    }
                }
                replace(t, e, i) {
                    let s = this.left.length + this.break;
                    if (e < s) return this.balanced(this.left.replace(t, e, i), this.right);
                    if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - s, e - s, i));
                    let o = [];
                    t > 0 && this.decomposeLeft(t, o);
                    let n = o.length;
                    for (let t of i) o.push(t);
                    if (t > 0 && ej(o, n - 1), e < this.length) {
                        let t = o.length;
                        this.decomposeRight(e, o), ej(o, t)
                    }
                    return eV.of(o)
                }
                decomposeLeft(t, e) {
                    let i = this.left.length;
                    if (t <= i) return this.left.decomposeLeft(t, e);
                    e.push(this.left), this.break && t >= ++i && e.push(null), t > i && this.right.decomposeLeft(t - i, e)
                }
                decomposeRight(t, e) {
                    let i = this.left.length,
                        s = i + this.break;
                    if (t >= s) return this.right.decomposeRight(t - s, e);
                    t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right)
                }
                balanced(t, e) {
                    return t.size > 2 * e.size || e.size > 2 * t.size ? eV.of(this.break ? [t, null, e] : [t, e]) : (this.left = t, this.right = e, this.height = t.height + e.height, this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break+e.length, this)
                }
                updateHeight(t, e = 0, i = !1, s) {
                    let {
                        left: o,
                        right: n
                    } = this, r = e + o.length + this.break, l = null;
                    return (s && s.from <= e + o.length && s.more ? l = o = o.updateHeight(t, e, i, s) : o.updateHeight(t, e, i), s && s.from <= r + n.length && s.more ? l = n = n.updateHeight(t, r, i, s) : n.updateHeight(t, r, i), l) ? this.balanced(o, n) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
                }
                toString() {
                    return this.left + (this.break ? " " : "-") + this.right
                }
            }

            function ej(t, e) {
                let i, s;
                null == t[e] && (i = t[e - 1]) instanceof eF && (s = t[e + 1]) instanceof eF && t.splice(e - 1, 3, new eF(i.length + 1 + s.length))
            }
            class eq {
                constructor(t, e) {
                    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t
                }
                get isCovered() {
                    return this.covering && this.nodes[this.nodes.length - 1] == this.covering
                }
                span(t, e) {
                    if (this.lineStart > -1) {
                        let t = Math.min(e, this.lineEnd),
                            i = this.nodes[this.nodes.length - 1];
                        i instanceof ez ? i.length += t - this.pos : (t > this.pos || !this.isCovered) && this.nodes.push(new ez(t - this.pos, -1)), this.writtenTo = t, e > t && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
                    }
                    this.pos = e
                }
                point(t, e, i) {
                    if (t < e || i.heightRelevant) {
                        let s = i.widget ? i.widget.estimatedHeight : 0,
                            o = i.widget ? i.widget.lineBreaks : 0;
                        s < 0 && (s = this.oracle.lineHeight);
                        let n = e - t;
                        i.block ? this.addBlock(new eW(n, s, i)) : (n || o || s >= 5) && this.addLineDeco(s, o, n)
                    } else e > t && this.span(t, e);
                    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
                }
                enterLine() {
                    if (this.lineStart > -1) return;
                    let {
                        from: t,
                        to: e
                    } = this.oracle.doc.lineAt(this.pos);
                    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new ez(this.pos - t, -1)), this.writtenTo = this.pos
                }
                blankContent(t, e) {
                    let i = new eF(e - t);
                    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i
                }
                ensureLine() {
                    this.enterLine();
                    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
                    if (t instanceof ez) return t;
                    let e = new ez(0, -1);
                    return this.nodes.push(e), e
                }
                addBlock(t) {
                    var e;
                    this.enterLine();
                    let i = null === (e = t.deco) || void 0 === e ? void 0 : e.type;
                    i != tn.WidgetAfter || this.isCovered || this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, i != tn.WidgetBefore && (this.covering = t)
                }
                addLineDeco(t, e, i) {
                    let s = this.ensureLine();
                    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + i
                }
                finish(t) {
                    let e = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
                    !(this.lineStart > -1) || e instanceof ez || this.isCovered ? (this.writtenTo < this.pos || null == e) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new ez(0, -1));
                    let i = t;
                    for (let t of this.nodes) t instanceof ez && t.updateHeight(this.oracle, i), i += t ? t.length : 1;
                    return this.nodes
                }
                static build(t, e, i, s) {
                    let o = new eq(i, t);
                    return l.Xs.spans(e, i, s, o, 0), o.finish(i)
                }
            }
            class eK {
                constructor() {
                    this.changes = []
                }
                compareRange() {}
                comparePoint(t, e, i, s) {
                    (t < e || i && i.heightRelevant || s && s.heightRelevant) && td(t, e, this.changes, 5)
                }
            }

            function e$(t, e) {
                let i = t.getBoundingClientRect(),
                    s = t.ownerDocument,
                    o = s.defaultView || window,
                    n = Math.max(0, i.left),
                    r = Math.min(o.innerWidth, i.right),
                    l = Math.max(0, i.top),
                    h = Math.min(o.innerHeight, i.bottom);
                for (let e = t.parentNode; e && e != s.body;)
                    if (1 == e.nodeType) {
                        let i = e,
                            s = window.getComputedStyle(i);
                        if ((i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth) && "visible" != s.overflow) {
                            let s = i.getBoundingClientRect();
                            n = Math.max(n, s.left), r = Math.min(r, s.right), l = Math.max(l, s.top), h = e == t.parentNode ? s.bottom : Math.min(h, s.bottom)
                        }
                        e = "absolute" == s.position || "fixed" == s.position ? i.offsetParent : i.parentNode
                    } else if (11 == e.nodeType) e = e.host;
                else break;
                return {
                    left: n - i.left,
                    right: Math.max(n, r) - i.left,
                    top: l - (i.top + e),
                    bottom: Math.max(l, h) - (i.top + e)
                }
            }

            function eG(t, e) {
                let i = t.getBoundingClientRect();
                return {
                    left: 0,
                    right: i.right - i.left,
                    top: e,
                    bottom: i.bottom - (i.top + e)
                }
            }
            class e_ {
                constructor(t, e, i) {
                    this.from = t, this.to = e, this.size = i
                }
                static same(t, e) {
                    if (t.length != e.length) return !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i],
                            o = e[i];
                        if (s.from != o.from || s.to != o.to || s.size != o.size) return !1
                    }
                    return !0
                }
                draw(t) {
                    return tr.replace({
                        widget: new eX(this.size, t)
                    }).range(this.from, this.to)
                }
            }
            class eX extends to {
                constructor(t, e) {
                    super(), this.size = t, this.vertical = e
                }
                eq(t) {
                    return t.size == this.size && t.vertical == this.vertical
                }
                toDOM() {
                    let t = document.createElement("div");
                    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t
                }
                get estimatedHeight() {
                    return this.vertical ? this.size : -1
                }
            }
            class eY {
                constructor(t) {
                    this.state = t, this.pixelViewport = {
                        left: 0,
                        right: window.innerWidth,
                        top: 0,
                        bottom: 0
                    }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = eJ, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = tq.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
                    let e = t.facet(tP).some(t => "function" != typeof t && "cm-lineWrapping" == t.class);
                    this.heightOracle = new eL(e), this.stateDeco = t.facet(tN).filter(t => "function" != typeof t), this.heightMap = eV.empty().applyChanges(this.stateDeco, l.xv.empty, this.heightOracle.setDoc(t.doc), [new tI(0, 0, 0, t.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = tr.set(this.lineGaps.map(t => t.draw(!1))), this.computeVisibleRanges()
                }
                updateForViewport() {
                    let t = [this.viewport],
                        {
                            main: e
                        } = this.state.selection;
                    for (let i = 0; i <= 1; i++) {
                        let s = i ? e.head : e.anchor;
                        if (!t.some(({
                                from: t,
                                to: e
                            }) => s >= t && s <= e)) {
                            let {
                                from: e,
                                to: i
                            } = this.lineBlockAt(s);
                            t.push(new eU(e, i))
                        }
                    }
                    this.viewports = t.sort((t, e) => t.from - e.from), this.scaler = this.heightMap.height <= 7e6 ? eJ : new e0(this.heightOracle, this.heightMap, this.viewports)
                }
                updateViewportLines() {
                    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, t => {
                        this.viewportLines.push(1 == this.scaler.scale ? t : e1(t, this.scaler))
                    })
                }
                update(t, e = null) {
                    var i, s;
                    let o;
                    this.state = t.state;
                    let n = this.stateDeco;
                    this.stateDeco = this.state.facet(tN).filter(t => "function" != typeof t);
                    let r = t.changedRanges,
                        h = tI.extendWithRanges(r, (i = this.stateDeco, s = t ? t.changes : l.as.empty(this.state.doc.length), o = new eK, l.Xs.compare(n, i, s, o, 0), o.changes)),
                        a = this.heightMap.height,
                        c = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
                    this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), h), this.heightMap.height != a && (t.flags |= 2), c ? (this.scrollAnchorPos = t.changes.mapPos(c.from, -1), this.scrollAnchorHeight = c.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
                    let d = h.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
                    (e && (e.range.head < d.from || e.range.head > d.to) || !this.viewportIsAppropriate(d)) && (d = this.getViewport(0, e));
                    let u = !t.changes.empty || 2 & t.flags || d.from != this.viewport.from || d.to != this.viewport.to;
                    this.viewport = d, this.updateForViewport(), u && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(tC) && (this.mustEnforceCursorAssoc = !0)
                }
                measure(t) {
                    let e = t.contentDOM,
                        i = window.getComputedStyle(e),
                        s = this.heightOracle,
                        o = i.whiteSpace;
                    this.defaultTextDirection = "rtl" == i.direction ? tq.RTL : tq.LTR;
                    let n = this.heightOracle.mustRefreshForWrapping(o),
                        r = e.getBoundingClientRect(),
                        h = n || this.mustMeasureContent || this.contentDOMHeight != r.height;
                    this.contentDOMHeight = r.height, this.mustMeasureContent = !1;
                    let a = 0,
                        c = 0,
                        d = parseInt(i.paddingTop) || 0,
                        u = parseInt(i.paddingBottom) || 0;
                    (this.paddingTop != d || this.paddingBottom != u) && (this.paddingTop = d, this.paddingBottom = u, a |= 10), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (h = !0), this.editorWidth = t.scrollDOM.clientWidth, a |= 8), this.scrollTop != t.scrollDOM.scrollTop && (this.scrollAnchorHeight = -1, this.scrollTop = t.scrollDOM.scrollTop), this.scrolledToBottom = C(t.scrollDOM);
                    let f = (this.printing ? eG : e$)(e, this.paddingTop),
                        p = f.top - this.pixelViewport.top,
                        g = f.bottom - this.pixelViewport.bottom;
                    this.pixelViewport = f;
                    let m = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
                    if (m != this.inView && (this.inView = m, m && (h = !0)), !this.inView && !this.scrollTarget) return 0;
                    let v = r.width;
                    if ((this.contentDOMWidth != v || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = r.width, this.editorHeight = t.scrollDOM.clientHeight, a |= 8), h) {
                        let e = t.docView.measureVisibleLineHeights(this.viewport);
                        if (s.mustRefreshForHeights(e) && (n = !0), n || s.lineWrapping && Math.abs(v - this.contentDOMWidth) > s.charWidth) {
                            let {
                                lineHeight: i,
                                charWidth: r,
                                textHeight: l
                            } = t.docView.measureTextSize();
                            (n = i > 0 && s.refresh(o, i, r, l, v / r, e)) && (t.docView.minWidth = 0, a |= 8)
                        }
                        for (let i of (p > 0 && g > 0 ? c = Math.max(p, g) : p < 0 && g < 0 && (c = Math.min(p, g)), s.heightChanged = !1, this.viewports)) {
                            let o = i.from == this.viewport.from ? e : t.docView.measureVisibleLineHeights(i);
                            this.heightMap = (n ? eV.empty().applyChanges(this.stateDeco, l.xv.empty, this.heightOracle, [new tI(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, n, new eH(i.from, o))
                        }
                        s.heightChanged && (a |= 2)
                    }
                    let w = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
                    return w && (this.viewport = this.getViewport(c, this.scrollTarget)), this.updateForViewport(), (2 & a || w) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(n ? [] : this.lineGaps, t)), a |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), a
                }
                get visibleTop() {
                    return this.scaler.fromDOM(this.pixelViewport.top)
                }
                get visibleBottom() {
                    return this.scaler.fromDOM(this.pixelViewport.bottom)
                }
                getViewport(t, e) {
                    let i = .5 - Math.max(-.5, Math.min(.5, t / 1e3 / 2)),
                        s = this.heightMap,
                        o = this.heightOracle,
                        {
                            visibleTop: n,
                            visibleBottom: r
                        } = this,
                        l = new eU(s.lineAt(n - 1e3 * i, eN.ByHeight, o, 0, 0).from, s.lineAt(r + (1 - i) * 1e3, eN.ByHeight, o, 0, 0).to);
                    if (e) {
                        let {
                            head: t
                        } = e.range;
                        if (t < l.from || t > l.to) {
                            let i = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
                                n = s.lineAt(t, eN.ByPos, o, 0, 0),
                                r;
                            r = "center" == e.y ? (n.top + n.bottom) / 2 - i / 2 : "start" == e.y || "nearest" == e.y && t < l.from ? n.top : n.bottom - i, l = new eU(s.lineAt(r - 500, eN.ByHeight, o, 0, 0).from, s.lineAt(r + i + 500, eN.ByHeight, o, 0, 0).to)
                        }
                    }
                    return l
                }
                mapViewport(t, e) {
                    let i = e.mapPos(t.from, -1),
                        s = e.mapPos(t.to, 1);
                    return new eU(this.heightMap.lineAt(i, eN.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, eN.ByPos, this.heightOracle, 0, 0).to)
                }
                viewportIsAppropriate({
                    from: t,
                    to: e
                }, i = 0) {
                    if (!this.inView) return !0;
                    let {
                        top: s
                    } = this.heightMap.lineAt(t, eN.ByPos, this.heightOracle, 0, 0), {
                        bottom: o
                    } = this.heightMap.lineAt(e, eN.ByPos, this.heightOracle, 0, 0), {
                        visibleTop: n,
                        visibleBottom: r
                    } = this;
                    return (0 == t || s <= n - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || o >= r + Math.max(10, Math.min(i, 250))) && s > n - 2e3 && o < r + 2e3
                }
                mapLineGaps(t, e) {
                    if (!t.length || e.empty) return t;
                    let i = [];
                    for (let s of t) e.touchesRange(s.from, s.to) || i.push(new e_(e.mapPos(s.from), e.mapPos(s.to), s.size));
                    return i
                }
                ensureLineGaps(t, e) {
                    let i = this.heightOracle.lineWrapping,
                        s = i ? 1e4 : 2e3,
                        o = s >> 1,
                        n = s << 1;
                    if (this.defaultTextDirection != tq.LTR && !i) return [];
                    let r = [],
                        h = (s, n, a, c) => {
                            if (n - s < o) return;
                            let d = this.state.selection.main,
                                u = [d.from];
                            for (let t of (d.empty || u.push(d.to), u))
                                if (t > s && t < n) {
                                    h(s, t - 10, a, c), h(t + 10, n, a, c);
                                    return
                                } let f = function (t, e) {
                                for (let i of t)
                                    if (e(i)) return i
                            }(t, t => t.from >= a.from && t.to <= a.to && Math.abs(t.from - s) < o && Math.abs(t.to - n) < o && !u.some(e => t.from < e && t.to > e));
                            if (!f) {
                                if (n < a.to && e && i && e.visibleRanges.some(t => t.from <= n && t.to >= n)) {
                                    let t = e.moveToLineBoundary(l.jT.cursor(n), !1, !0).head;
                                    t > s && (n = t)
                                }
                                f = new e_(s, n, this.gapSize(a, s, n, c))
                            }
                            r.push(f)
                        };
                    for (let t of this.viewportLines) {
                        let e, o;
                        if (t.length < n) continue;
                        let r = function (t, e, i) {
                            let s = [],
                                o = t,
                                n = 0;
                            return l.Xs.spans(i, t, e, {
                                span() {},
                                point(t, e) {
                                    t > o && (s.push({
                                        from: o,
                                        to: t
                                    }), n += t - o), o = e
                                }
                            }, 20), o < e && (s.push({
                                from: o,
                                to: e
                            }), n += e - o), {
                                total: n,
                                ranges: s
                            }
                        }(t.from, t.to, this.stateDeco);
                        if (r.total < n) continue;
                        let a = this.scrollTarget ? this.scrollTarget.range.head : null;
                        if (i) {
                            let i, n, l = s / this.heightOracle.lineLength * this.heightOracle.lineHeight;
                            if (null != a) {
                                let e = eZ(r, a),
                                    s = ((this.visibleBottom - this.visibleTop) / 2 + l) / t.height;
                                i = e - s, n = e + s
                            } else i = (this.visibleTop - t.top - l) / t.height, n = (this.visibleBottom - t.top + l) / t.height;
                            e = eQ(r, i), o = eQ(r, n)
                        } else {
                            let t, i, n = r.total * this.heightOracle.charWidth,
                                l = s * this.heightOracle.charWidth;
                            if (null != a) {
                                let e = eZ(r, a),
                                    s = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + l) / n;
                                t = e - s, i = e + s
                            } else t = (this.pixelViewport.left - l) / n, i = (this.pixelViewport.right + l) / n;
                            e = eQ(r, t), o = eQ(r, i)
                        }
                        e > t.from && h(t.from, e, t, r), o < t.to && h(o, t.to, t, r)
                    }
                    return r
                }
                gapSize(t, e, i, s) {
                    let o = eZ(s, i) - eZ(s, e);
                    return this.heightOracle.lineWrapping ? t.height * o : s.total * this.heightOracle.charWidth * o
                }
                updateLineGaps(t) {
                    e_.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = tr.set(t.map(t => t.draw(this.heightOracle.lineWrapping))))
                }
                computeVisibleRanges() {
                    let t = this.stateDeco;
                    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
                    let e = [];
                    l.Xs.spans(t, this.viewport.from, this.viewport.to, {
                        span(t, i) {
                            e.push({
                                from: t,
                                to: i
                            })
                        },
                        point() {}
                    }, 20);
                    let i = e.length != this.visibleRanges.length || this.visibleRanges.some((t, i) => t.from != e[i].from || t.to != e[i].to);
                    return this.visibleRanges = e, i ? 4 : 0
                }
                lineBlockAt(t) {
                    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find(e => e.from <= t && e.to >= t) || e1(this.heightMap.lineAt(t, eN.ByPos, this.heightOracle, 0, 0), this.scaler)
                }
                lineBlockAtHeight(t) {
                    return e1(this.heightMap.lineAt(this.scaler.fromDOM(t), eN.ByHeight, this.heightOracle, 0, 0), this.scaler)
                }
                scrollAnchorAt(t) {
                    let e = this.lineBlockAtHeight(t + 8);
                    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0]
                }
                elementAtHeight(t) {
                    return e1(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler)
                }
                get docHeight() {
                    return this.scaler.toDOM(this.heightMap.height)
                }
                get contentHeight() {
                    return this.docHeight + this.paddingTop + this.paddingBottom
                }
            }
            class eU {
                constructor(t, e) {
                    this.from = t, this.to = e
                }
            }

            function eQ({
                total: t,
                ranges: e
            }, i) {
                if (i <= 0) return e[0].from;
                if (i >= 1) return e[e.length - 1].to;
                let s = Math.floor(t * i);
                for (let t = 0;; t++) {
                    let {
                        from: i,
                        to: o
                    } = e[t], n = o - i;
                    if (s <= n) return i + s;
                    s -= n
                }
            }

            function eZ(t, e) {
                let i = 0;
                for (let {
                        from: s,
                        to: o
                    } of t.ranges) {
                    if (e <= o) {
                        i += e - s;
                        break
                    }
                    i += o - s
                }
                return i / t.total
            }
            let eJ = {
                toDOM: t => t,
                fromDOM: t => t,
                scale: 1
            };
            class e0 {
                constructor(t, e, i) {
                    let s = 0,
                        o = 0,
                        n = 0;
                    for (let r of (this.viewports = i.map(({
                            from: i,
                            to: o
                        }) => {
                            let n = e.lineAt(i, eN.ByPos, t, 0, 0).top,
                                r = e.lineAt(o, eN.ByPos, t, 0, 0).bottom;
                            return s += r - n, {
                                from: i,
                                to: o,
                                top: n,
                                bottom: r,
                                domTop: 0,
                                domBottom: 0
                            }
                        }), this.scale = (7e6 - s) / (e.height - s), this.viewports)) r.domTop = n + (r.top - o) * this.scale, n = r.domBottom = r.domTop + (r.bottom - r.top), o = r.bottom
                }
                toDOM(t) {
                    for (let e = 0, i = 0, s = 0;; e++) {
                        let o = e < this.viewports.length ? this.viewports[e] : null;
                        if (!o || t < o.top) return s + (t - i) * this.scale;
                        if (t <= o.bottom) return o.domTop + (t - o.top);
                        i = o.bottom, s = o.domBottom
                    }
                }
                fromDOM(t) {
                    for (let e = 0, i = 0, s = 0;; e++) {
                        let o = e < this.viewports.length ? this.viewports[e] : null;
                        if (!o || t < o.domTop) return i + (t - s) / this.scale;
                        if (t <= o.domBottom) return o.top + (t - o.domTop);
                        i = o.bottom, s = o.domBottom
                    }
                }
            }

            function e1(t, e) {
                if (1 == e.scale) return t;
                let i = e.toDOM(t.top),
                    s = e.toDOM(t.bottom);
                return new eP(t.from, t.length, i, s - i, Array.isArray(t._content) ? t._content.map(t => e1(t, e)) : t._content)
            }
            let e2 = l.r$.define({
                    combine: t => t.join(" ")
                }),
                e8 = l.r$.define({
                    combine: t => t.indexOf(!0) > -1
                }),
                e3 = h.V.newName(),
                e9 = h.V.newName(),
                e5 = h.V.newName(),
                e4 = {
                    "&light": "." + e9,
                    "&dark": "." + e5
                };

            function e6(t, e, i) {
                return new h.V(e, {
                    finish: e => /&/.test(e) ? e.replace(/&\w*/, e => {
                        if ("&" == e) return t;
                        if (!i || !i[e]) throw RangeError(`Unsupported selector: ${e}`);
                        return i[e]
                    }) : t + " " + e
                })
            }
            let e7 = e6("." + e3, {
                "&": {
                    position: "relative !important",
                    boxSizing: "border-box",
                    "&.cm-focused": {
                        outline: "1px dotted #212121"
                    },
                    display: "flex !important",
                    flexDirection: "column"
                },
                ".cm-scroller": {
                    display: "flex !important",
                    alignItems: "flex-start !important",
                    fontFamily: "monospace",
                    lineHeight: 1.4,
                    height: "100%",
                    overflowX: "auto",
                    position: "relative",
                    zIndex: 0
                },
                ".cm-content": {
                    margin: 0,
                    flexGrow: 2,
                    flexShrink: 0,
                    display: "block",
                    whiteSpace: "pre",
                    wordWrap: "normal",
                    boxSizing: "border-box",
                    padding: "4px 0",
                    outline: "none",
                    "&[contenteditable=true]": {
                        WebkitUserModify: "read-write-plaintext-only"
                    }
                },
                ".cm-lineWrapping": {
                    whiteSpace_fallback: "pre-wrap",
                    whiteSpace: "break-spaces",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    flexShrink: 1
                },
                "&light .cm-content": {
                    caretColor: "black"
                },
                "&dark .cm-content": {
                    caretColor: "white"
                },
                ".cm-line": {
                    display: "block",
                    padding: "0 2px 0 6px"
                },
                ".cm-layer": {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    contain: "size style",
                    "& > *": {
                        position: "absolute"
                    }
                },
                "&light .cm-selectionBackground": {
                    background: "#d9d9d9"
                },
                "&dark .cm-selectionBackground": {
                    background: "#222"
                },
                "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
                    background: "#d7d4f0"
                },
                "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
                    background: "#233"
                },
                ".cm-cursorLayer": {
                    pointerEvents: "none"
                },
                "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
                    animation: "steps(1) cm-blink 1.2s infinite"
                },
                "@keyframes cm-blink": {
                    "0%": {},
                    "50%": {
                        opacity: 0
                    },
                    "100%": {}
                },
                "@keyframes cm-blink2": {
                    "0%": {},
                    "50%": {
                        opacity: 0
                    },
                    "100%": {}
                },
                ".cm-cursor, .cm-dropCursor": {
                    borderLeft: "1.2px solid black",
                    marginLeft: "-0.6px",
                    pointerEvents: "none"
                },
                ".cm-cursor": {
                    display: "none"
                },
                "&dark .cm-cursor": {
                    borderLeftColor: "#444"
                },
                ".cm-dropCursor": {
                    position: "absolute"
                },
                "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
                    display: "block"
                },
                "&light .cm-activeLine": {
                    backgroundColor: "#cceeff44"
                },
                "&dark .cm-activeLine": {
                    backgroundColor: "#99eeff33"
                },
                "&light .cm-specialChar": {
                    color: "red"
                },
                "&dark .cm-specialChar": {
                    color: "#f78"
                },
                ".cm-gutters": {
                    flexShrink: 0,
                    display: "flex",
                    height: "100%",
                    boxSizing: "border-box",
                    left: 0,
                    zIndex: 200
                },
                "&light .cm-gutters": {
                    backgroundColor: "#f5f5f5",
                    color: "#6c6c6c",
                    borderRight: "1px solid #ddd"
                },
                "&dark .cm-gutters": {
                    backgroundColor: "#333338",
                    color: "#ccc"
                },
                ".cm-gutter": {
                    display: "flex !important",
                    flexDirection: "column",
                    flexShrink: 0,
                    boxSizing: "border-box",
                    minHeight: "100%",
                    overflow: "hidden"
                },
                ".cm-gutterElement": {
                    boxSizing: "border-box"
                },
                ".cm-lineNumbers .cm-gutterElement": {
                    padding: "0 3px 0 5px",
                    minWidth: "20px",
                    textAlign: "right",
                    whiteSpace: "nowrap"
                },
                "&light .cm-activeLineGutter": {
                    backgroundColor: "#e2f2ff"
                },
                "&dark .cm-activeLineGutter": {
                    backgroundColor: "#222227"
                },
                ".cm-panels": {
                    boxSizing: "border-box",
                    position: "sticky",
                    left: 0,
                    right: 0
                },
                "&light .cm-panels": {
                    backgroundColor: "#f5f5f5",
                    color: "black"
                },
                "&light .cm-panels-top": {
                    borderBottom: "1px solid #ddd"
                },
                "&light .cm-panels-bottom": {
                    borderTop: "1px solid #ddd"
                },
                "&dark .cm-panels": {
                    backgroundColor: "#333338",
                    color: "white"
                },
                ".cm-tab": {
                    display: "inline-block",
                    overflow: "hidden",
                    verticalAlign: "bottom"
                },
                ".cm-widgetBuffer": {
                    verticalAlign: "text-top",
                    height: "1em",
                    width: 0,
                    display: "inline"
                },
                ".cm-placeholder": {
                    color: "#888",
                    display: "inline-block",
                    verticalAlign: "top"
                },
                ".cm-highlightSpace:before": {
                    content: "attr(data-display)",
                    position: "absolute",
                    pointerEvents: "none",
                    color: "#888"
                },
                ".cm-highlightTab": {
                    backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',
                    backgroundSize: "auto 100%",
                    backgroundPosition: "right 90%",
                    backgroundRepeat: "no-repeat"
                },
                ".cm-trailingSpace": {
                    backgroundColor: "#ff332255"
                },
                ".cm-button": {
                    verticalAlign: "middle",
                    color: "inherit",
                    fontSize: "70%",
                    padding: ".2em 1em",
                    borderRadius: "1px"
                },
                "&light .cm-button": {
                    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
                    border: "1px solid #888",
                    "&:active": {
                        backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
                    }
                },
                "&dark .cm-button": {
                    backgroundImage: "linear-gradient(#393939, #111)",
                    border: "1px solid #888",
                    "&:active": {
                        backgroundImage: "linear-gradient(#111, #333)"
                    }
                },
                ".cm-textfield": {
                    verticalAlign: "middle",
                    color: "inherit",
                    fontSize: "70%",
                    border: "1px solid silver",
                    padding: ".2em .5em"
                },
                "&light .cm-textfield": {
                    backgroundColor: "white"
                },
                "&dark .cm-textfield": {
                    border: "1px solid #555",
                    backgroundColor: "inherit"
                }
            }, e4);
            class it {
                constructor(t, e, i, s) {
                    this.typeOver = s, this.bounds = null, this.text = "";
                    let {
                        impreciseHead: o,
                        impreciseAnchor: n
                    } = t.docView;
                    if (t.state.readOnly && e > -1) this.newSel = null;
                    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
                        let e = o || n ? [] : function (t) {
                                let e = [];
                                if (t.root.activeElement != t.contentDOM) return e;
                                let {
                                    anchorNode: i,
                                    anchorOffset: s,
                                    focusNode: o,
                                    focusOffset: n
                                } = t.observer.selectionRange;
                                return i && (e.push(new P(i, s)), (o != i || n != s) && e.push(new P(o, n))), e
                            }(t),
                            i = new L(e, t.state);
                        i.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i.text, this.newSel = function (t, e) {
                            if (0 == t.length) return null;
                            let i = t[0].pos,
                                s = 2 == t.length ? t[1].pos : i;
                            return i > -1 && s > -1 ? l.jT.single(i + e, s + e) : null
                        }(e, this.bounds.from)
                    } else {
                        let e = t.observer.selectionRange,
                            i = o && o.node == e.focusNode && o.offset == e.focusOffset || !d(t.contentDOM, e.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(e.focusNode, e.focusOffset),
                            s = n && n.node == e.anchorNode && n.offset == e.anchorOffset || !d(t.contentDOM, e.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
                        this.newSel = l.jT.single(s, i)
                    }
                }
            }

            function ie(t, e) {
                let i;
                let {
                    newSel: s
                } = e, o = t.state.selection.main, n = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
                if (e.bounds) {
                    let {
                        from: s,
                        to: r
                    } = e.bounds, h = o.from, a = null;
                    (8 === n || _.android && e.text.length < r - s) && (h = o.to, a = "end");
                    let c = function (t, e, i, s) {
                        let o = Math.min(t.length, e.length),
                            n = 0;
                        for (; n < o && t.charCodeAt(n) == e.charCodeAt(n);) n++;
                        if (n == o && t.length == e.length) return null;
                        let r = t.length,
                            l = e.length;
                        for (; r > 0 && l > 0 && t.charCodeAt(r - 1) == e.charCodeAt(l - 1);) r--, l--;
                        if ("end" == s) {
                            let t = Math.max(0, n - Math.min(r, l));
                            i -= r + t - n
                        }
                        if (r < n && t.length < e.length) {
                            let t = i <= n && i >= r ? n - i : 0;
                            n -= t, l = n + (l - r), r = n
                        } else if (l < n) {
                            let t = i <= n && i >= l ? n - i : 0;
                            n -= t, r = n + (r - l), l = n
                        }
                        return {
                            from: n,
                            toA: r,
                            toB: l
                        }
                    }(t.state.doc.sliceString(s, r, "￿"), e.text, h - s, a);
                    c && (_.chrome && 13 == n && c.toB == c.from + 2 && "￿￿" == e.text.slice(c.from, c.toB) && c.toB--, i = {
                        from: s + c.from,
                        to: s + c.toA,
                        insert: l.xv.of(e.text.slice(c.from, c.toB).split("￿"))
                    })
                } else s && (!t.hasFocus && t.state.facet(tO) || s.main.eq(o)) && (s = null);
                if (!i && !s) return !1;
                if (!i && e.typeOver && !o.empty && s && s.main.empty ? i = {
                        from: o.from,
                        to: o.to,
                        insert: t.state.doc.slice(o.from, o.to)
                    } : i && i.from >= o.from && i.to <= o.to && (i.from != o.from || i.to != o.to) && o.to - o.from - (i.to - i.from) <= 4 ? i = {
                        from: o.from,
                        to: o.to,
                        insert: t.state.doc.slice(o.from, i.from).append(i.insert).append(t.state.doc.slice(i.to, o.to))
                    } : (_.mac || _.android) && i && i.from == i.to && i.from == o.head - 1 && /^\. ?$/.test(i.insert.toString()) && "off" == t.contentDOM.getAttribute("autocorrect") ? (s && 2 == i.insert.length && (s = l.jT.single(s.main.anchor - 1, s.main.head - 1)), i = {
                        from: o.from,
                        to: o.to,
                        insert: l.xv.of([" "])
                    }) : _.chrome && i && i.from == i.to && i.from == o.head && "\n " == i.insert.toString() && t.lineWrapping && (s && (s = l.jT.single(s.main.anchor - 1, s.main.head - 1)), i = {
                        from: o.from,
                        to: o.to,
                        insert: l.xv.of([" "])
                    }), i) {
                    let e, r = t.state;
                    if (_.ios && t.inputState.flushIOSKey(t) || _.android && (i.from == o.from && i.to == o.to && 1 == i.insert.length && 2 == i.insert.lines && M(t.contentDOM, "Enter", 13) || (i.from == o.from - 1 && i.to == o.to && 0 == i.insert.length || 8 == n && i.insert.length < i.to - i.from) && M(t.contentDOM, "Backspace", 8) || i.from == o.from && i.to == o.to + 1 && 0 == i.insert.length && M(t.contentDOM, "Delete", 46))) return !0;
                    let h = i.insert.toString();
                    if (t.state.facet(tS).some(e => e(t, i.from, i.to, h))) return !0;
                    if (t.inputState.composing >= 0 && t.inputState.composing++, i.from >= o.from && i.to <= o.to && i.to - i.from >= (o.to - o.from) / 3 && (!s || s.main.empty && s.main.from == i.from + i.insert.length) && t.inputState.composing < 0) {
                        let s = o.from < i.from ? r.sliceDoc(o.from, i.from) : "",
                            n = o.to > i.to ? r.sliceDoc(i.to, o.to) : "";
                        e = r.replaceSelection(t.state.toText(s + i.insert.sliceString(0, void 0, t.state.lineBreak) + n))
                    } else {
                        let n = r.changes(i),
                            h = s && s.main.to <= n.newLength ? s.main : void 0;
                        if (r.selection.ranges.length > 1 && t.inputState.composing >= 0 && i.to <= o.to && i.to >= o.to - 10) {
                            let s = t.state.sliceDoc(i.from, i.to),
                                a = t3(t) || t.state.doc.lineAt(o.head),
                                c = o.to - i.to,
                                d = o.to - o.from;
                            e = r.changeByRange(e => {
                                if (e.from == o.from && e.to == o.to) return {
                                    changes: n,
                                    range: h || e.map(n)
                                };
                                let u = e.to - c,
                                    f = u - s.length;
                                if (e.to - e.from != d || t.state.sliceDoc(f, u) != s || a && e.to >= a.from && e.from <= a.to) return {
                                    range: e
                                };
                                let p = r.changes({
                                        from: f,
                                        to: u,
                                        insert: i.insert
                                    }),
                                    g = e.to - o.to;
                                return {
                                    changes: p,
                                    range: h ? l.jT.range(Math.max(0, h.anchor + g), Math.max(0, h.head + g)) : e.map(p)
                                }
                            })
                        } else e = {
                            changes: n,
                            selection: h && r.selection.replaceRange(h)
                        }
                    }
                    let a = "input.type";
                    return (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, a += ".compose", t.inputState.compositionFirstChange && (a += ".start", t.inputState.compositionFirstChange = !1)), t.dispatch(e, {
                        scrollIntoView: !0,
                        userEvent: a
                    }), !0
                }
                if (!s || s.main.eq(o)) return !1; {
                    let e = !1,
                        i = "select";
                    return t.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t.inputState.lastSelectionOrigin && (e = !0), i = t.inputState.lastSelectionOrigin), t.dispatch({
                        selection: s,
                        scrollIntoView: e,
                        userEvent: i
                    }), !0
                }
            }
            let ii = {
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                    attributes: !0,
                    characterDataOldValue: !0
                },
                is = _.ie && _.ie_version <= 11;
            class io {
                constructor(t) {
                    this.view = t, this.active = !1, this.selectionRange = new b, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver(e => {
                        for (let t of e) this.queue.push(t);
                        (_.ie && _.ie_version <= 11 || _.ios && t.composing) && e.some(t => "childList" == t.type && t.removedNodes.length || "characterData" == t.type && t.oldValue.length > t.target.nodeValue.length) ? this.flushSoon() : this.flush()
                    }), is && (this.onCharData = t => {
                        this.queue.push({
                            target: t.target,
                            type: "characterData",
                            oldValue: t.prevValue
                        }), this.flushSoon()
                    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver(() => {
                        var t;
                        (null === (t = this.view.docView) || void 0 === t ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize()
                    }), this.resizeScroll.observe(t.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(t.contentDOM)), this.addWindowListeners(this.win = t.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver(t => {
                        this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
                    }, {
                        threshold: [0, .001]
                    }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver(t => {
                        t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
                    }, {})), this.listenForScroll(), this.readSelectionRange()
                }
                onScrollChanged(t) {
                    this.view.inputState.runScrollHandlers(this.view, t), this.intersecting && this.view.measure()
                }
                onScroll(t) {
                    this.intersecting && this.flush(!1), this.onScrollChanged(t)
                }
                onResize() {
                    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
                        this.resizeTimeout = -1, this.view.requestMeasure()
                    }, 50))
                }
                onPrint() {
                    this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
                        this.view.viewState.printing = !1, this.view.requestMeasure()
                    }, 500)
                }
                updateGaps(t) {
                    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
                        for (let e of (this.gapIntersection.disconnect(), t)) this.gapIntersection.observe(e);
                        this.gaps = t
                    }
                }
                onSelectionChange(t) {
                    let e = this.selectionChanged;
                    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
                    let {
                        view: i
                    } = this, s = this.selectionRange;
                    if (i.state.facet(tO) ? i.root.activeElement != this.dom : !u(i.dom, s)) return;
                    let o = s.anchorNode && i.docView.nearest(s.anchorNode);
                    if (o && o.ignoreEvent(t)) {
                        e || (this.selectionChanged = !1);
                        return
                    }(_.ie && _.ie_version <= 11 || _.android && _.chrome) && !i.state.selection.main.empty && s.focusNode && p(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1)
                }
                readSelectionRange() {
                    let {
                        view: t
                    } = this, e = _.safari && 11 == t.root.nodeType && function (t) {
                        let e = t.activeElement;
                        for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
                        return e
                    }(this.dom.ownerDocument) == this.dom && function (t) {
                        let e = null;

                        function i(t) {
                            t.preventDefault(), t.stopImmediatePropagation(), e = t.getTargetRanges()[0]
                        }
                        if (t.contentDOM.addEventListener("beforeinput", i, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", i, !0), !e) return null;
                        let s = e.startContainer,
                            o = e.startOffset,
                            n = e.endContainer,
                            r = e.endOffset,
                            l = t.docView.domAtPos(t.state.selection.main.anchor);
                        return p(l.node, l.offset, n, r) && ([s, o, n, r] = [n, r, s, o]), {
                            anchorNode: s,
                            anchorOffset: o,
                            focusNode: n,
                            focusOffset: r
                        }
                    }(this.view) || c(t.root);
                    if (!e || this.selectionRange.eq(e)) return !1;
                    let i = u(this.dom, e);
                    return i && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && function (t, e) {
                        let i = e.focusNode,
                            s = e.focusOffset;
                        if (!i || e.anchorNode != i || e.anchorOffset != s) return !1;
                        for (s = Math.min(s, v(i));;)
                            if (s) {
                                if (1 != i.nodeType) return !1;
                                let t = i.childNodes[s - 1];
                                "false" == t.contentEditable ? s-- : s = v(i = t)
                            } else {
                                if (i == t) return !0;
                                s = g(i), i = i.parentNode
                            }
                    }(this.dom, e) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(e), i && (this.selectionChanged = !0), !0)
                }
                setSelectionRange(t, e) {
                    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1
                }
                clearSelectionRange() {
                    this.selectionRange.set(null, 0, null, 0)
                }
                listenForScroll() {
                    this.parentCheck = -1;
                    let t = 0,
                        e = null;
                    for (let i = this.dom; i;)
                        if (1 == i.nodeType) !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
                        else if (11 == i.nodeType) i = i.host;
                    else break;
                    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
                        for (let t of this.scrollTargets) t.removeEventListener("scroll", this.onScroll);
                        for (let t of this.scrollTargets = e) t.addEventListener("scroll", this.onScroll)
                    }
                }
                ignore(t) {
                    if (!this.active) return t();
                    try {
                        return this.stop(), t()
                    } finally {
                        this.start(), this.clear()
                    }
                }
                start() {
                    this.active || (this.observer.observe(this.dom, ii), is && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
                }
                stop() {
                    this.active && (this.active = !1, this.observer.disconnect(), is && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
                }
                clear() {
                    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
                }
                delayAndroidKey(t, e) {
                    var i;
                    this.delayedAndroidKey || (this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
                        let t = this.delayedAndroidKey;
                        t && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = t.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && t.force && M(this.dom, t.key, t.keyCode))
                    })), this.delayedAndroidKey && "Enter" != t || (this.delayedAndroidKey = {
                        key: t,
                        keyCode: e,
                        force: this.lastChange < Date.now() - 50 || !!(null === (i = this.delayedAndroidKey) || void 0 === i ? void 0 : i.force)
                    })
                }
                clearDelayedAndroidKey() {
                    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
                }
                flushSoon() {
                    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
                        this.delayedFlush = -1, this.flush()
                    }))
                }
                forceFlush() {
                    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
                }
                pendingRecords() {
                    for (let t of this.observer.takeRecords()) this.queue.push(t);
                    return this.queue
                }
                processRecords() {
                    let t = this.pendingRecords();
                    t.length && (this.queue = []);
                    let e = -1,
                        i = -1,
                        s = !1;
                    for (let o of t) {
                        let t = this.readMutation(o);
                        t && (t.typeOver && (s = !0), -1 == e ? {
                            from: e,
                            to: i
                        } = t : (e = Math.min(t.from, e), i = Math.max(t.to, i)))
                    }
                    return {
                        from: e,
                        to: i,
                        typeOver: s
                    }
                }
                readChange() {
                    let {
                        from: t,
                        to: e,
                        typeOver: i
                    } = this.processRecords(), s = this.selectionChanged && u(this.dom, this.selectionRange);
                    return t < 0 && !s ? null : (t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new it(this.view, t, e, i))
                }
                flush(t = !0) {
                    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
                    t && this.readSelectionRange();
                    let e = this.readChange();
                    if (!e) return !1;
                    let i = this.view.state,
                        s = ie(this.view, e);
                    return this.view.state == i && this.view.update([]), s
                }
                readMutation(t) {
                    let e = this.view.docView.nearest(t.target);
                    if (!e || e.ignoreMutation(t)) return null;
                    if (e.markDirty("attributes" == t.type), "attributes" == t.type && (e.flags |= 4), "childList" == t.type) {
                        let i = ir(e, t.previousSibling || t.target.previousSibling, -1),
                            s = ir(e, t.nextSibling || t.target.nextSibling, 1);
                        return {
                            from: i ? e.posAfter(i) : e.posAtStart,
                            to: s ? e.posBefore(s) : e.posAtEnd,
                            typeOver: !1
                        }
                    }
                    return "characterData" == t.type ? {
                        from: e.posAtStart,
                        to: e.posAtEnd,
                        typeOver: t.target.nodeValue == t.oldValue
                    } : null
                }
                setWindow(t) {
                    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win))
                }
                addWindowListeners(t) {
                    t.addEventListener("resize", this.onResize), t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange)
                }
                removeWindowListeners(t) {
                    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange)
                }
                destroy() {
                    var t, e, i, s;
                    for (let o of (this.stop(), null === (t = this.intersection) || void 0 === t || t.disconnect(), null === (e = this.gapIntersection) || void 0 === e || e.disconnect(), null === (i = this.resizeScroll) || void 0 === i || i.disconnect(), null === (s = this.resizeContent) || void 0 === s || s.disconnect(), this.scrollTargets)) o.removeEventListener("scroll", this.onScroll);
                    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey)
                }
            }

            function ir(t, e, i) {
                for (; e;) {
                    let s = T.get(e);
                    if (s && s.parent == t) return s;
                    let o = e.parentNode;
                    e = o != t.dom ? o : i > 0 ? e.nextSibling : e.previousSibling
                }
                return null
            }
            class il {
                constructor(t = {}) {
                    for (let e of (this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = t.dispatch || (t => this.update([t])), this.dispatch = this.dispatch.bind(this), this._root = t.root || function (t) {
                            for (; t;) {
                                if (t && (9 == t.nodeType || 11 == t.nodeType && t.host)) return t;
                                t = t.assignedSlot || t.parentNode
                            }
                            return null
                        }(t.parent) || document, this.viewState = new eY(t.state || l.yy.create(t)), this.plugins = this.state.facet(tE).map(t => new tL(t)), this.plugins)) e.update(this);
                    this.observer = new io(this), this.inputState = new el(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new t2(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), t.parent && t.parent.appendChild(this.dom)
                }
                get state() {
                    return this.viewState.state
                }
                get viewport() {
                    return this.viewState.viewport
                }
                get visibleRanges() {
                    return this.viewState.visibleRanges
                }
                get inView() {
                    return this.viewState.inView
                }
                get composing() {
                    return this.inputState.composing > 0
                }
                get compositionStarted() {
                    return this.inputState.composing >= 0
                }
                get root() {
                    return this._root
                }
                get win() {
                    return this.dom.ownerDocument.defaultView || window
                }
                dispatch(...t) {
                    let e = 1 == t.length && t[0] instanceof l.YW ? t[0] : this.state.update(...t);
                    this._dispatch(e, this)
                }
                update(t) {
                    if (0 != this.updateState) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
                    let e = !1,
                        i = !1,
                        s, o = this.state;
                    for (let e of t) {
                        if (e.startState != o) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
                        o = e.state
                    }
                    if (this.destroyed) {
                        this.viewState.state = o;
                        return
                    }
                    let n = this.hasFocus,
                        r = 0,
                        h = null;
                    t.some(t => t.annotation(eO)) ? (this.inputState.notifiedFocused = n, r = 1) : n == this.inputState.notifiedFocused || (this.inputState.notifiedFocused = n, (h = eR(o, n)) || (r = 1));
                    let a = this.observer.delayedAndroidKey,
                        c = null;
                    if (a ? (this.observer.clearDelayedAndroidKey(), ((c = this.observer.readChange()) && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (c = null)) : this.observer.clear(), o.facet(l.yy.phrases) != this.state.facet(l.yy.phrases)) return this.setState(o);
                    s = tj.create(this, o, t), s.flags |= r;
                    let d = this.viewState.scrollTarget;
                    try {
                        for (let e of (this.updateState = 2, t)) {
                            if (d && (d = d.map(e.changes)), e.scrollIntoView) {
                                let {
                                    main: t
                                } = e.state.selection;
                                d = new tA(t.empty ? t : l.jT.cursor(t.head, t.head > t.anchor ? -1 : 1))
                            }
                            for (let t of e.effects) t.is(tD) && (d = t.value)
                        }
                        this.viewState.update(s, d), this.bidiCache = ic.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(tF) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some(t => t.isUserEvent("select.pointer")))
                    } finally {
                        this.updateState = 0
                    }
                    if (s.startState.facet(e2) != s.state.facet(e2) && (this.viewState.mustMeasureContent = !0), (e || i || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !s.empty)
                        for (let t of this.state.facet(tx)) t(s);
                    (h || c) && Promise.resolve().then(() => {
                        h && this.state == h.startState && this.dispatch(h), c && !ie(this, c) && a.force && M(this.contentDOM, a.key, a.keyCode)
                    })
                }
                setState(t) {
                    if (0 != this.updateState) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
                    if (this.destroyed) {
                        this.viewState.state = t;
                        return
                    }
                    this.updateState = 2;
                    let e = this.hasFocus;
                    try {
                        for (let t of this.plugins) t.destroy(this);
                        for (let e of (this.viewState = new eY(t), this.plugins = t.facet(tE).map(t => new tL(t)), this.pluginMap.clear(), this.plugins)) e.update(this);
                        this.docView = new t2(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
                    } finally {
                        this.updateState = 0
                    }
                    e && this.focus(), this.requestMeasure()
                }
                updatePlugins(t) {
                    let e = t.startState.facet(tE),
                        i = t.state.facet(tE);
                    if (e != i) {
                        let s = [];
                        for (let o of i) {
                            let i = e.indexOf(o);
                            if (i < 0) s.push(new tL(o));
                            else {
                                let e = this.plugins[i];
                                e.mustUpdate = t, s.push(e)
                            }
                        }
                        for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
                        this.plugins = s, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins)
                    } else
                        for (let e of this.plugins) e.mustUpdate = t;
                    for (let t = 0; t < this.plugins.length; t++) this.plugins[t].update(this)
                }
                measure(t = !0) {
                    if (this.destroyed) return;
                    this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, t && this.observer.forceFlush();
                    let e = null,
                        i = this.scrollDOM,
                        {
                            scrollTop: s
                        } = i,
                        {
                            scrollAnchorPos: o,
                            scrollAnchorHeight: n
                        } = this.viewState;
                    s != this.viewState.scrollTop && (n = -1), this.viewState.scrollAnchorHeight = -1;
                    try {
                        for (let t = 0;; t++) {
                            if (n < 0) {
                                if (C(i)) o = -1, n = this.viewState.heightMap.height;
                                else {
                                    let t = this.viewState.scrollAnchorAt(s);
                                    o = t.from, n = t.top
                                }
                            }
                            this.updateState = 1;
                            let r = this.viewState.measure(this);
                            if (!r && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
                            if (t > 5) {
                                console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                                break
                            }
                            let l = [];
                            4 & r || ([this.measureRequests, l] = [l, this.measureRequests]);
                            let h = l.map(t => {
                                    try {
                                        return t.read(this)
                                    } catch (t) {
                                        return tT(this.state, t), ia
                                    }
                                }),
                                a = tj.create(this, this.state, []),
                                c = !1;
                            a.flags |= r, e ? e.flags |= r : e = a, this.updateState = 2, a.empty || (this.updatePlugins(a), this.inputState.update(a), this.updateAttrs(), c = this.docView.update(a));
                            for (let t = 0; t < l.length; t++)
                                if (h[t] != ia) try {
                                    let e = l[t];
                                    e.write && e.write(h[t], this)
                                } catch (t) {
                                    tT(this.state, t)
                                }
                            if (c && this.docView.updateSelection(!0), !a.viewportChanged && 0 == this.measureRequests.length) {
                                if (this.viewState.editorHeight) {
                                    if (this.viewState.scrollTarget) {
                                        this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
                                        continue
                                    } {
                                        let t = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - n;
                                        if (t > 1 || t < -1) {
                                            s = i.scrollTop = s + t, n = -1;
                                            continue
                                        }
                                    }
                                }
                                break
                            }
                        }
                    } finally {
                        this.updateState = 0, this.measureScheduled = -1
                    }
                    if (e && !e.empty)
                        for (let t of this.state.facet(tx)) t(e)
                }
                get themeClasses() {
                    return e3 + " " + (this.state.facet(e8) ? e5 : e9) + " " + this.state.facet(e2)
                }
                updateAttrs() {
                    let t = id(this, tH, {
                            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
                        }),
                        e = {
                            spellcheck: "false",
                            autocorrect: "off",
                            autocapitalize: "off",
                            translate: "no",
                            contenteditable: this.state.facet(tO) ? "true" : "false",
                            class: "cm-content",
                            style: `${_.tabSize}: ${this.state.tabSize}`,
                            role: "textbox",
                            "aria-multiline": "true"
                        };
                    this.state.readOnly && (e["aria-readonly"] = "true"), id(this, tP, e);
                    let i = this.observer.ignore(() => {
                        let i = ts(this.contentDOM, this.contentAttrs, e),
                            s = ts(this.dom, this.editorAttrs, t);
                        return i || s
                    });
                    return this.editorAttrs = t, this.contentAttrs = e, i
                }
                showAnnouncements(t) {
                    let e = !0;
                    for (let i of t)
                        for (let t of i.effects) t.is(il.announce) && (e && (this.announceDOM.textContent = ""), e = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = t.value)
                }
                mountStyles() {
                    this.styleModules = this.state.facet(tF), h.V.mount(this.root, this.styleModules.concat(e7).reverse())
                }
                readMeasured() {
                    if (2 == this.updateState) throw Error("Reading the editor layout isn't allowed during an update");
                    0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
                }
                requestMeasure(t) {
                    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t && !(this.measureRequests.indexOf(t) > -1)) {
                        if (null != t.key) {
                            for (let e = 0; e < this.measureRequests.length; e++)
                                if (this.measureRequests[e].key === t.key) {
                                    this.measureRequests[e] = t;
                                    return
                                }
                        }
                        this.measureRequests.push(t)
                    }
                }
                plugin(t) {
                    let e = this.pluginMap.get(t);
                    return (void 0 === e || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find(e => e.spec == t) || null), e && e.update(this).value
                }
                get documentTop() {
                    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
                }
                get documentPadding() {
                    return {
                        top: this.viewState.paddingTop,
                        bottom: this.viewState.paddingBottom
                    }
                }
                elementAtHeight(t) {
                    return this.readMeasured(), this.viewState.elementAtHeight(t)
                }
                lineBlockAtHeight(t) {
                    return this.readMeasured(), this.viewState.lineBlockAtHeight(t)
                }
                get viewportLineBlocks() {
                    return this.viewState.viewportLines
                }
                lineBlockAt(t) {
                    return this.viewState.lineBlockAt(t)
                }
                get contentHeight() {
                    return this.viewState.contentHeight
                }
                moveByChar(t, e, i) {
                    return er(this, t, eo(this, t, e, i))
                }
                moveByGroup(t, e) {
                    return er(this, t, eo(this, t, e, e => {
                        var i;
                        let s, o;
                        return i = t.head, o = (s = this.state.charCategorizer(i))(e), t => {
                            let e = s(t);
                            return o == l.D0.Space && (o = e), o == e
                        }
                    }))
                }
                moveToLineBoundary(t, e, i = !0) {
                    return function (t, e, i, s) {
                        let o = es(t, e.head),
                            n = s && o.type == tn.Text && (t.lineWrapping || o.widgetLineBreaks) ? t.coordsAtPos(e.assoc < 0 && e.head > o.from ? e.head - 1 : e.head) : null;
                        if (n) {
                            let e = t.dom.getBoundingClientRect(),
                                s = t.textDirectionAt(o.from),
                                r = t.posAtCoords({
                                    x: i == (s == tq.LTR) ? e.right - 1 : e.left + 1,
                                    y: (n.top + n.bottom) / 2
                                });
                            if (null != r) return l.jT.cursor(r, i ? -1 : 1)
                        }
                        return l.jT.cursor(i ? o.to : o.from, i ? -1 : 1)
                    }(this, t, e, i)
                }
                moveVertically(t, e, i) {
                    return er(this, t, function (t, e, i, s) {
                        let o = e.head,
                            n = i ? 1 : -1;
                        if (o == (i ? t.state.doc.length : 0)) return l.jT.cursor(o, e.assoc);
                        let r = e.goalColumn,
                            h, a = t.contentDOM.getBoundingClientRect(),
                            c = t.coordsAtPos(o),
                            d = t.documentTop;
                        if (c) null == r && (r = c.left - a.left), h = n < 0 ? c.top : c.bottom;
                        else {
                            let e = t.viewState.lineBlockAt(o);
                            null == r && (r = Math.min(a.right - a.left, t.defaultCharacterWidth * (o - e.from))), h = (n < 0 ? e.top : e.bottom) + d
                        }
                        let u = a.left + r,
                            f = null != s ? s : t.viewState.heightOracle.textHeight >> 1;
                        for (let i = 0;; i += 10) {
                            let s = h + (f + i) * n,
                                c = ee(t, {
                                    x: u,
                                    y: s
                                }, !1, n);
                            if (s < a.top || s > a.bottom || (n < 0 ? c < o : c > o)) return l.jT.cursor(c, e.assoc, void 0, r)
                        }
                    }(this, t, e, i))
                }
                domAtPos(t) {
                    return this.docView.domAtPos(t)
                }
                posAtDOM(t, e = 0) {
                    return this.docView.posFromDOM(t, e)
                }
                posAtCoords(t, e = !0) {
                    return this.readMeasured(), ee(this, t, e)
                }
                coordsAtPos(t, e = 1) {
                    this.readMeasured();
                    let i = this.docView.coordsAt(t, e);
                    if (!i || i.left == i.right) return i;
                    let s = this.state.doc.lineAt(t),
                        o = this.bidiSpans(s);
                    return w(i, o[tZ.find(o, t - s.from, -1, e)].dir == tq.LTR == e > 0)
                }
                get defaultCharacterWidth() {
                    return this.viewState.heightOracle.charWidth
                }
                get defaultLineHeight() {
                    return this.viewState.heightOracle.lineHeight
                }
                get textDirection() {
                    return this.viewState.defaultTextDirection
                }
                textDirectionAt(t) {
                    return !this.state.facet(tk) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t))
                }
                get lineWrapping() {
                    return this.viewState.heightOracle.lineWrapping
                }
                bidiSpans(t) {
                    if (t.length > ih) return t0(t.length);
                    let e = this.textDirectionAt(t.from);
                    for (let i of this.bidiCache)
                        if (i.from == t.from && i.dir == e) return i.order;
                    let i = function (t, e) {
                        let i = t.length,
                            s = e == tK ? 1 : 2,
                            o = e == tK ? 2 : 1;
                        if (!t || 1 == s && !tQ.test(t)) return t0(i);
                        for (let e = 0, o = s, r = s; e < i; e++) {
                            var n;
                            let i = (n = t.charCodeAt(e)) <= 247 ? t_[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? tX[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8203 ? 256 : 64336 <= n && n <= 65023 ? 4 : 8204 == n ? 256 : 1;
                            512 == i ? i = o : 8 == i && 4 == r && (i = 16), tJ[e] = 4 == i ? 2 : i, 7 & i && (r = i), o = i
                        }
                        for (let t = 0, e = s, o = s; t < i; t++) {
                            let s = tJ[t];
                            if (128 == s) t < i - 1 && e == tJ[t + 1] && 24 & e ? s = tJ[t] = e : tJ[t] = 256;
                            else if (64 == s) {
                                let s = t + 1;
                                for (; s < i && 64 == tJ[s];) s++;
                                let n = t && 8 == e || s < i && 8 == tJ[s] ? 1 == o ? 1 : 8 : 256;
                                for (let e = t; e < s; e++) tJ[e] = n;
                                t = s - 1
                            } else 8 == s && 1 == o && (tJ[t] = 1);
                            e = s, 7 & s && (o = s)
                        }
                        for (let e = 0, n = 0, r = 0, l, h, a; e < i; e++)
                            if (h = tY[l = t.charCodeAt(e)]) {
                                if (h < 0) {
                                    for (let t = n - 3; t >= 0; t -= 3)
                                        if (tU[t + 1] == -h) {
                                            let i = tU[t + 2],
                                                r = 2 & i ? s : 4 & i ? 1 & i ? o : s : 0;
                                            r && (tJ[e] = tJ[tU[t]] = r), n = t;
                                            break
                                        }
                                } else if (189 == tU.length) break;
                                else tU[n++] = e, tU[n++] = l, tU[n++] = r
                            } else if (2 == (a = tJ[e]) || 1 == a) {
                            let t = a == s;
                            r = t ? 0 : 1;
                            for (let e = n - 3; e >= 0; e -= 3) {
                                let i = tU[e + 2];
                                if (2 & i) break;
                                if (t) tU[e + 2] |= 2;
                                else {
                                    if (4 & i) break;
                                    tU[e + 2] |= 4
                                }
                            }
                        }
                        for (let t = 0; t < i; t++)
                            if (256 == tJ[t]) {
                                let e = t + 1;
                                for (; e < i && 256 == tJ[e];) e++;
                                let o = (t ? tJ[t - 1] : s) == 1,
                                    n = o == ((e < i ? tJ[e] : s) == 1) ? o ? 1 : 2 : s;
                                for (let i = t; i < e; i++) tJ[i] = n;
                                t = e - 1
                            } let r = [];
                        if (1 == s)
                            for (let t = 0; t < i;) {
                                let e = t,
                                    s = 1 != tJ[t++];
                                for (; t < i && s == (1 != tJ[t]);) t++;
                                if (s)
                                    for (let i = t; i > e;) {
                                        let t = i,
                                            s = 2 != tJ[--i];
                                        for (; i > e && s == (2 != tJ[i - 1]);) i--;
                                        r.push(new tZ(i, t, s ? 2 : 1))
                                    } else r.push(new tZ(e, t, 0))
                            } else
                                for (let t = 0; t < i;) {
                                    let e = t,
                                        s = 2 == tJ[t++];
                                    for (; t < i && s == (2 == tJ[t]);) t++;
                                    r.push(new tZ(e, t, s ? 1 : 2))
                                }
                        return r
                    }(t.text, e);
                    return this.bidiCache.push(new ic(t.from, t.to, e, i)), i
                }
                get hasFocus() {
                    var t;
                    return (this.dom.ownerDocument.hasFocus() || _.safari && (null === (t = this.inputState) || void 0 === t ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
                }
                focus() {
                    this.observer.ignore(() => {
                        x(this.contentDOM), this.docView.updateSelection()
                    })
                }
                setRoot(t) {
                    this._root != t && (this._root = t, this.observer.setWindow((9 == t.nodeType ? t : t.ownerDocument).defaultView || window), this.mountStyles())
                }
                destroy() {
                    for (let t of this.plugins) t.destroy(this);
                    this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
                }
                static scrollIntoView(t, e = {}) {
                    return tD.of(new tA("number" == typeof t ? l.jT.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin))
                }
                static domEventHandlers(t) {
                    return tB.define(() => ({}), {
                        eventHandlers: t
                    })
                }
                static theme(t, e) {
                    let i = h.V.newName(),
                        s = [e2.of(i), tF.of(e6(`.${i}`, t))];
                    return e && e.dark && s.push(e8.of(!0)), s
                }
                static baseTheme(t) {
                    return l.Wl.lowest(tF.of(e6("." + e3, t, e4)))
                }
                static findFromDOM(t) {
                    var e;
                    let i = t.querySelector(".cm-content"),
                        s = i && T.get(i) || T.get(t);
                    return (null === (e = null == s ? void 0 : s.rootView) || void 0 === e ? void 0 : e.view) || null
                }
            }
            il.styleModule = tF, il.inputHandler = tS, il.focusChangeEffect = tM, il.perLineTextDirection = tk, il.exceptionSink = ty, il.updateListener = tx, il.editable = tO, il.mouseSelectionStyle = tb, il.dragMovesSelection = tw, il.clickAddsSelectionRange = tv, il.decorations = tN, il.atomicRanges = tV, il.scrollMargins = tW, il.darkTheme = e8, il.contentAttributes = tP, il.editorAttributes = tH, il.lineWrapping = il.contentAttributes.of({
                class: "cm-lineWrapping"
            }), il.announce = l.Py.define();
            let ih = 4096,
                ia = {};
            class ic {
                constructor(t, e, i, s) {
                    this.from = t, this.to = e, this.dir = i, this.order = s
                }
                static update(t, e) {
                    if (e.empty) return t;
                    let i = [],
                        s = t.length ? t[t.length - 1].dir : tq.LTR;
                    for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
                        let n = t[o];
                        n.dir != s || e.touchesRange(n.from, n.to) || i.push(new ic(e.mapPos(n.from, 1), e.mapPos(n.to, -1), n.dir, n.order))
                    }
                    return i
                }
            }

            function id(t, e, i) {
                for (let s = t.state.facet(e), o = s.length - 1; o >= 0; o--) {
                    let e = s[o],
                        n = "function" == typeof e ? e(t) : e;
                    n && tt(n, i)
                }
                return i
            }
            let iu = _.mac ? "mac" : _.windows ? "win" : _.linux ? "linux" : "key";

            function ip(t, e, i) {
                return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), !1 !== i && e.shiftKey && (t = "Shift-" + t), t
            }
            let ig = l.Wl.default(il.domEventHandlers({
                    keydown: (t, e) => ix(iw(e.state), t, e, "editor")
                })),
                im = l.r$.define({
                    enables: ig
                }),
                iv = new WeakMap;

            function iw(t) {
                let e = t.facet(im),
                    i = iv.get(e);
                return i || iv.set(e, i = function (t, e = iu) {
                    let i = Object.create(null),
                        s = Object.create(null),
                        o = (t, e) => {
                            let i = s[t];
                            if (null == i) s[t] = e;
                            else if (i != e) throw Error("Key binding " + t + " is used both as a regular binding and as a multi-stroke prefix")
                        },
                        n = (t, s, n, r, l) => {
                            var h, a;
                            let c = i[t] || (i[t] = Object.create(null)),
                                d = s.split(/ (?!$)/).map(t => (function (t, e) {
                                    let i, s, o, n;
                                    let r = t.split(/-(?!$)/),
                                        l = r[r.length - 1];
                                    "Space" == l && (l = " ");
                                    for (let t = 0; t < r.length - 1; ++t) {
                                        let l = r[t];
                                        if (/^(cmd|meta|m)$/i.test(l)) n = !0;
                                        else if (/^a(lt)?$/i.test(l)) i = !0;
                                        else if (/^(c|ctrl|control)$/i.test(l)) s = !0;
                                        else if (/^s(hift)?$/i.test(l)) o = !0;
                                        else if (/^mod$/i.test(l)) "mac" == e ? n = !0 : s = !0;
                                        else throw Error("Unrecognized modifier name: " + l)
                                    }
                                    return i && (l = "Alt-" + l), s && (l = "Ctrl-" + l), n && (l = "Meta-" + l), o && (l = "Shift-" + l), l
                                })(t, e));
                            for (let e = 1; e < d.length; e++) {
                                let i = d.slice(0, e).join(" ");
                                o(i, !0), c[i] || (c[i] = {
                                    preventDefault: !0,
                                    stopPropagation: !1,
                                    run: [e => {
                                        let s = iy = {
                                            view: e,
                                            prefix: i,
                                            scope: t
                                        };
                                        return setTimeout(() => {
                                            iy == s && (iy = null)
                                        }, 4e3), !0
                                    }]
                                })
                            }
                            let u = d.join(" ");
                            o(u, !1);
                            let f = c[u] || (c[u] = {
                                preventDefault: !1,
                                stopPropagation: !1,
                                run: (null === (a = null === (h = c._any) || void 0 === h ? void 0 : h.run) || void 0 === a ? void 0 : a.slice()) || []
                            });
                            n && f.run.push(n), r && (f.preventDefault = !0), l && (f.stopPropagation = !0)
                        };
                    for (let s of t) {
                        let t = s.scope ? s.scope.split(" ") : ["editor"];
                        if (s.any)
                            for (let e of t) {
                                let t = i[e] || (i[e] = Object.create(null));
                                for (let e in t._any || (t._any = {
                                        preventDefault: !1,
                                        stopPropagation: !1,
                                        run: []
                                    }), t) t[e].run.push(s.any)
                            }
                        let o = s[e] || s.key;
                        if (o)
                            for (let e of t) n(e, o, s.run, s.preventDefault, s.stopPropagation), s.shift && n(e, "Shift-" + o, s.shift, s.preventDefault, s.stopPropagation)
                    }
                    return i
                }(e.reduce((t, e) => t.concat(e), []))), i
            }

            function ib(t, e, i) {
                return ix(iw(t.state), e, t, i)
            }
            let iy = null;

            function ix(t, e, i, s) {
                let o = (0, a.YG)(e),
                    n = (0, l.gm)(o, 0),
                    r = (0, l.nZ)(n) == o.length && " " != o,
                    h = "",
                    c = !1,
                    d = !1,
                    u = !1;
                iy && iy.view == i && iy.scope == s && (h = iy.prefix + " ", 0 > ec.indexOf(e.keyCode) && (d = !0, iy = null));
                let f = new Set,
                    p = t => {
                        if (t) {
                            for (let s of t.run)
                                if (!f.has(s) && (f.add(s), s(i, e))) return t.stopPropagation && (u = !0), !0;
                            t.preventDefault && (t.stopPropagation && (u = !0), d = !0)
                        }
                        return !1
                    },
                    g = t[s],
                    m, v;
                return g && (p(g[h + ip(o, e, !r)]) ? c = !0 : r && (e.altKey || e.metaKey || e.ctrlKey) && !(_.windows && e.ctrlKey && e.altKey) && (m = a.ue[e.keyCode]) && m != o ? p(g[h + ip(m, e, !0)]) ? c = !0 : e.shiftKey && (v = a.uY[e.keyCode]) != o && v != m && p(g[h + ip(v, e, !1)]) && (c = !0) : r && e.shiftKey && p(g[h + ip(o, e, !0)]) && (c = !0), !c && p(g._any) && (c = !0)), d && (c = !0), c && u && e.stopPropagation(), c
            }
            class iS {
                constructor(t, e, i, s, o) {
                    this.className = t, this.left = e, this.top = i, this.width = s, this.height = o
                }
                draw() {
                    let t = document.createElement("div");
                    return t.className = this.className, this.adjust(t), t
                }
                update(t, e) {
                    return e.className == this.className && (this.adjust(t), !0)
                }
                adjust(t) {
                    t.style.left = this.left + "px", t.style.top = this.top + "px", null != this.width && (t.style.width = this.width + "px"), t.style.height = this.height + "px"
                }
                eq(t) {
                    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className
                }
                static forRange(t, e, i) {
                    if (!i.empty) return function (t, e, i) {
                        if (i.to <= t.viewport.from || i.from >= t.viewport.to) return [];
                        let s = Math.max(i.from, t.viewport.from),
                            o = Math.min(i.to, t.viewport.to),
                            n = t.textDirection == tq.LTR,
                            r = t.contentDOM,
                            l = r.getBoundingClientRect(),
                            h = iM(t),
                            a = r.querySelector(".cm-line"),
                            c = a && window.getComputedStyle(a),
                            d = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0),
                            u = l.right - (c ? parseInt(c.paddingRight) : 0),
                            f = es(t, s),
                            p = es(t, o),
                            g = f.type == tn.Text ? f : null,
                            m = p.type == tn.Text ? p : null;
                        if (g && (t.lineWrapping || f.widgetLineBreaks) && (g = ik(t, s, g)), m && (t.lineWrapping || p.widgetLineBreaks) && (m = ik(t, o, m)), g && m && g.from == m.from) return w(b(i.from, i.to, g)); {
                            let e = g ? b(i.from, null, g) : y(f, !1),
                                s = m ? b(null, i.to, m) : y(p, !0),
                                o = [];
                            return (g || f).to < (m || p).from - (g && m ? 1 : 0) || f.widgetLineBreaks > 1 && e.bottom + t.defaultLineHeight / 2 < s.top ? o.push(v(d, e.bottom, u, s.top)) : e.bottom < s.top && t.elementAtHeight((e.bottom + s.top) / 2).type == tn.Text && (e.bottom = s.top = (e.bottom + s.top) / 2), w(e).concat(o).concat(w(s))
                        }

                        function v(t, i, s, o) {
                            return new iS(e, t - h.left, i - h.top - .01, s - t, o - i + .01)
                        }

                        function w({
                            top: t,
                            bottom: e,
                            horizontal: i
                        }) {
                            let s = [];
                            for (let o = 0; o < i.length; o += 2) s.push(v(i[o], t, i[o + 1], e));
                            return s
                        }

                        function b(e, i, s) {
                            let o = 1e9,
                                r = -1e9,
                                l = [];

                            function h(e, i, h, a, c) {
                                let f = t.coordsAtPos(e, e == s.to ? -2 : 2),
                                    p = t.coordsAtPos(h, h == s.from ? 2 : -2);
                                f && p && (o = Math.min(f.top, p.top, o), r = Math.max(f.bottom, p.bottom, r), c == tq.LTR ? l.push(n && i ? d : f.left, n && a ? u : p.right) : l.push(!n && a ? d : p.left, !n && i ? u : f.right))
                            }
                            let a = null != e ? e : s.from,
                                c = null != i ? i : s.to;
                            for (let s of t.visibleRanges)
                                if (s.to > a && s.from < c)
                                    for (let o = Math.max(s.from, a), n = Math.min(s.to, c);;) {
                                        let s = t.state.doc.lineAt(o);
                                        for (let r of t.bidiSpans(s)) {
                                            let t = r.from + s.from,
                                                l = r.to + s.from;
                                            if (t >= n) break;
                                            l > o && h(Math.max(t, o), null == e && t <= a, Math.min(l, n), null == i && l >= c, r.dir)
                                        }
                                        if ((o = s.to + 1) >= n) break
                                    }
                            return 0 == l.length && h(a, null == e, c, null == i, t.textDirection), {
                                top: o,
                                bottom: r,
                                horizontal: l
                            }
                        }

                        function y(t, e) {
                            let i = l.top + (e ? t.top : t.bottom);
                            return {
                                top: i,
                                bottom: i,
                                horizontal: []
                            }
                        }
                    }(t, e, i); {
                        let s = t.coordsAtPos(i.head, i.assoc || 1);
                        if (!s) return [];
                        let o = iM(t);
                        return [new iS(e, s.left - o.left, s.top - o.top, null, s.bottom - s.top)]
                    }
                }
            }

            function iM(t) {
                let e = t.scrollDOM.getBoundingClientRect();
                return {
                    left: (t.textDirection == tq.LTR ? e.left : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft,
                    top: e.top - t.scrollDOM.scrollTop
                }
            }

            function ik(t, e, i) {
                let s = l.jT.cursor(e);
                return {
                    from: Math.max(i.from, t.moveToLineBoundary(s, !1, !0).from),
                    to: Math.min(i.to, t.moveToLineBoundary(s, !0, !0).from),
                    type: tn.Text
                }
            }
            class iC {
                constructor(t, e) {
                    this.view = t, this.layer = e, this.drawn = [], this.measureReq = {
                        read: this.measure.bind(this),
                        write: this.draw.bind(this)
                    }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t)
                }
                update(t) {
                    t.startState.facet(iA) != t.state.facet(iA) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && t.view.requestMeasure(this.measureReq)
                }
                setOrder(t) {
                    let e = 0,
                        i = t.facet(iA);
                    for (; e < i.length && i[e] != this.layer;) e++;
                    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e)
                }
                measure() {
                    return this.layer.markers(this.view)
                }
                draw(t) {
                    if (t.length != this.drawn.length || t.some((t, e) => {
                            var i;
                            return i = this.drawn[e], !(t.constructor == i.constructor && t.eq(i))
                        })) {
                        let e = this.dom.firstChild,
                            i = 0;
                        for (let s of t) s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
                        for (; e;) {
                            let t = e.nextSibling;
                            e.remove(), e = t
                        }
                        this.drawn = t
                    }
                }
                destroy() {
                    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
                }
            }
            let iA = l.r$.define();

            function iD(t) {
                return [tB.define(e => new iC(e, t)), iA.of(t)]
            }
            let iT = !_.ios,
                iO = l.r$.define({
                    combine: t => (0, l.BO)(t, {
                        cursorBlinkRate: 1200,
                        drawRangeCursor: !0
                    }, {
                        cursorBlinkRate: (t, e) => Math.min(t, e),
                        drawRangeCursor: (t, e) => t || e
                    })
                });

            function iR(t = {}) {
                return [iO.of(t), iB, iH, iN, tC.of(!0)]
            }

            function iE(t) {
                return t.startState.facet(iO) != t.state.facet(iO)
            }
            let iB = iD({
                above: !0,
                markers(t) {
                    let {
                        state: e
                    } = t, i = e.facet(iO), s = [];
                    for (let o of e.selection.ranges) {
                        let n = o == e.selection.main;
                        if (o.empty ? !n || iT : i.drawRangeCursor) {
                            let e = n ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
                                i = o.empty ? o : l.jT.cursor(o.head, o.head > o.anchor ? -1 : 1);
                            for (let o of iS.forRange(t, e, i)) s.push(o)
                        }
                    }
                    return s
                },
                update(t, e) {
                    t.transactions.some(t => t.selection) && (e.style.animationName = "cm-blink" == e.style.animationName ? "cm-blink2" : "cm-blink");
                    let i = iE(t);
                    return i && iL(t.state, e), t.docChanged || t.selectionSet || i
                },
                mount(t, e) {
                    iL(e.state, t)
                },
                class: "cm-cursorLayer"
            });

            function iL(t, e) {
                e.style.animationDuration = t.facet(iO).cursorBlinkRate + "ms"
            }
            let iH = iD({
                    above: !1,
                    markers: t => t.state.selection.ranges.map(e => e.empty ? [] : iS.forRange(t, "cm-selectionBackground", e)).reduce((t, e) => t.concat(e)),
                    update: (t, e) => t.docChanged || t.selectionSet || t.viewportChanged || iE(t),
                    class: "cm-selectionLayer"
                }),
                iP = {
                    ".cm-line": {
                        "& ::selection": {
                            backgroundColor: "transparent !important"
                        },
                        "&::selection": {
                            backgroundColor: "transparent !important"
                        }
                    }
                };
            iT && (iP[".cm-line"].caretColor = "transparent !important");
            let iN = l.Wl.highest(il.theme(iP)),
                iV = l.Py.define({
                    map: (t, e) => null == t ? null : e.mapPos(t)
                }),
                iW = l.QQ.define({
                    create: () => null,
                    update: (t, e) => (null != t && (t = e.changes.mapPos(t)), e.effects.reduce((t, e) => e.is(iV) ? e.value : t, t))
                }),
                iz = tB.fromClass(class {
                    constructor(t) {
                        this.view = t, this.cursor = null, this.measureReq = {
                            read: this.readPos.bind(this),
                            write: this.drawCursor.bind(this)
                        }
                    }
                    update(t) {
                        var e;
                        let i = t.state.field(iW);
                        null == i ? null != this.cursor && (null === (e = this.cursor) || void 0 === e || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (t.startState.field(iW) != i || t.docChanged || t.geometryChanged) && this.view.requestMeasure(this.measureReq))
                    }
                    readPos() {
                        let t = this.view.state.field(iW),
                            e = null != t && this.view.coordsAtPos(t);
                        if (!e) return null;
                        let i = this.view.scrollDOM.getBoundingClientRect();
                        return {
                            left: e.left - i.left + this.view.scrollDOM.scrollLeft,
                            top: e.top - i.top + this.view.scrollDOM.scrollTop,
                            height: e.bottom - e.top
                        }
                    }
                    drawCursor(t) {
                        this.cursor && (t ? (this.cursor.style.left = t.left + "px", this.cursor.style.top = t.top + "px", this.cursor.style.height = t.height + "px") : this.cursor.style.left = "-100000px")
                    }
                    destroy() {
                        this.cursor && this.cursor.remove()
                    }
                    setDropPos(t) {
                        this.view.state.field(iW) != t && this.view.dispatch({
                            effects: iV.of(t)
                        })
                    }
                }, {
                    eventHandlers: {
                        dragover(t) {
                            this.setDropPos(this.view.posAtCoords({
                                x: t.clientX,
                                y: t.clientY
                            }))
                        },
                        dragleave(t) {
                            t.target != this.view.contentDOM && this.view.contentDOM.contains(t.relatedTarget) || this.setDropPos(null)
                        },
                        dragend() {
                            this.setDropPos(null)
                        },
                        drop() {
                            this.setDropPos(null)
                        }
                    }
                });

            function iF() {
                return [iW, iz]
            }

            function iI(t, e, i, s, o) {
                e.lastIndex = 0;
                for (let n = t.iterRange(i, s), r = i, l; !n.next().done; r += n.value.length)
                    if (!n.lineBreak)
                        for (; l = e.exec(n.value);) o(r + l.index, l)
            }
            class ij {
                constructor(t) {
                    let {
                        regexp: e,
                        decoration: i,
                        decorate: s,
                        boundary: o,
                        maxLength: n = 1e3
                    } = t;
                    if (!e.global) throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
                    if (this.regexp = e, s) this.addMatch = (t, e, i, o) => s(o, i, i + t[0].length, t, e);
                    else if ("function" == typeof i) this.addMatch = (t, e, s, o) => {
                        let n = i(t, e, s);
                        n && o(s, s + t[0].length, n)
                    };
                    else if (i) this.addMatch = (t, e, s, o) => o(s, s + t[0].length, i);
                    else throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
                    this.boundary = o, this.maxLength = n
                }
                createDeco(t) {
                    let e = new l.f_,
                        i = e.add.bind(e);
                    for (let {
                            from: e,
                            to: s
                        } of function (t, e) {
                            let i = t.visibleRanges;
                            if (1 == i.length && i[0].from == t.viewport.from && i[0].to == t.viewport.to) return i;
                            let s = [];
                            for (let {
                                    from: o,
                                    to: n
                                } of i) o = Math.max(t.state.doc.lineAt(o).from, o - e), n = Math.min(t.state.doc.lineAt(n).to, n + e), s.length && s[s.length - 1].to >= o ? s[s.length - 1].to = n : s.push({
                                from: o,
                                to: n
                            });
                            return s
                        }(t, this.maxLength)) iI(t.state.doc, this.regexp, e, s, (e, s) => this.addMatch(s, t, e, i));
                    return e.finish()
                }
                updateDeco(t, e) {
                    let i = 1e9,
                        s = -1;
                    return (t.docChanged && t.changes.iterChanges((e, o, n, r) => {
                        r > t.view.viewport.from && n < t.view.viewport.to && (i = Math.min(n, i), s = Math.max(r, s))
                    }), t.viewportChanged || s - i > 1e3) ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e
                }
                updateRange(t, e, i, s) {
                    for (let o of t.visibleRanges) {
                        let n = Math.max(o.from, i),
                            r = Math.min(o.to, s);
                        if (r > n) {
                            let i = t.state.doc.lineAt(n),
                                s = i.to < r ? t.state.doc.lineAt(r) : i,
                                l = Math.max(o.from, i.from),
                                h = Math.min(o.to, s.to);
                            if (this.boundary) {
                                for (; n > i.from; n--)
                                    if (this.boundary.test(i.text[n - 1 - i.from])) {
                                        l = n;
                                        break
                                    } for (; r < s.to; r++)
                                    if (this.boundary.test(s.text[r - s.from])) {
                                        h = r;
                                        break
                                    }
                            }
                            let a = [],
                                c, d = (t, e, i) => a.push(i.range(t, e));
                            if (i == s)
                                for (this.regexp.lastIndex = l - i.from;
                                    (c = this.regexp.exec(i.text)) && c.index < h - i.from;) this.addMatch(c, t, c.index + i.from, d);
                            else iI(t.state.doc, this.regexp, l, h, (e, i) => this.addMatch(i, t, e, d));
                            e = e.update({
                                filterFrom: l,
                                filterTo: h,
                                filter: (t, e) => t < l || e > h,
                                add: a
                            })
                        }
                    }
                    return e
                }
            }
            let iq = null != /x/.unicode ? "gu" : "g",
                iK = RegExp("[\x00-\b\n-\x1f\x7f-\x9f\xad؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]", iq),
                i$ = {
                    0: "null",
                    7: "bell",
                    8: "backspace",
                    10: "newline",
                    11: "vertical tab",
                    13: "carriage return",
                    27: "escape",
                    8203: "zero width space",
                    8204: "zero width non-joiner",
                    8205: "zero width joiner",
                    8206: "left-to-right mark",
                    8207: "right-to-left mark",
                    8232: "line separator",
                    8237: "left-to-right override",
                    8238: "right-to-left override",
                    8294: "left-to-right isolate",
                    8295: "right-to-left isolate",
                    8297: "pop directional isolate",
                    8233: "paragraph separator",
                    65279: "zero width no-break space",
                    65532: "object replacement"
                },
                iG = null,
                i_ = l.r$.define({
                    combine(t) {
                        let e = (0, l.BO)(t, {
                            render: null,
                            specialChars: iK,
                            addSpecialChars: null
                        });
                        return (e.replaceTabs = ! function () {
                            var t;
                            if (null == iG && "undefined" != typeof document && document.body) {
                                let e = document.body.style;
                                iG = (null !== (t = e.tabSize) && void 0 !== t ? t : e.MozTabSize) != null
                            }
                            return iG || !1
                        }()) && (e.specialChars = RegExp("	|" + e.specialChars.source, iq)), e.addSpecialChars && (e.specialChars = RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, iq)), e
                    }
                });

            function iX(t = {}) {
                return [i_.of(t), iY || (iY = tB.fromClass(class {
                    constructor(t) {
                        this.view = t, this.decorations = tr.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(t.state.facet(i_)), this.decorations = this.decorator.createDeco(t)
                    }
                    makeDecorator(t) {
                        return new ij({
                            regexp: t.specialChars,
                            decoration: (e, i, s) => {
                                let {
                                    doc: o
                                } = i.state, n = (0, l.gm)(e[0], 0);
                                if (9 == n) {
                                    let t = o.lineAt(s),
                                        e = i.state.tabSize,
                                        n = (0, l.IS)(t.text, e, s - t.from);
                                    return tr.replace({
                                        widget: new iQ((e - n % e) * this.view.defaultCharacterWidth)
                                    })
                                }
                                return this.decorationCache[n] || (this.decorationCache[n] = tr.replace({
                                    widget: new iU(t, n)
                                }))
                            },
                            boundary: t.replaceTabs ? void 0 : /[^]/
                        })
                    }
                    update(t) {
                        let e = t.state.facet(i_);
                        t.startState.facet(i_) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(t.view)) : this.decorations = this.decorator.updateDeco(t, this.decorations)
                    }
                }, {
                    decorations: t => t.decorations
                }))]
            }
            let iY = null;
            class iU extends to {
                constructor(t, e) {
                    super(), this.options = t, this.code = e
                }
                eq(t) {
                    return t.code == this.code
                }
                toDOM(t) {
                    var e;
                    let i = (e = this.code) >= 32 ? "•" : 10 == e ? "␤" : String.fromCharCode(9216 + e),
                        s = t.state.phrase("Control character") + " " + (i$[this.code] || "0x" + this.code.toString(16)),
                        o = this.options.render && this.options.render(this.code, s, i);
                    if (o) return o;
                    let n = document.createElement("span");
                    return n.textContent = i, n.title = s, n.setAttribute("aria-label", s), n.className = "cm-specialChar", n
                }
                ignoreEvent() {
                    return !1
                }
            }
            class iQ extends to {
                constructor(t) {
                    super(), this.width = t
                }
                eq(t) {
                    return t.width == this.width
                }
                toDOM() {
                    let t = document.createElement("span");
                    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t
                }
                ignoreEvent() {
                    return !1
                }
            }

            function iZ() {
                return i0
            }
            let iJ = tr.line({
                    class: "cm-activeLine"
                }),
                i0 = tB.fromClass(class {
                    constructor(t) {
                        this.decorations = this.getDeco(t)
                    }
                    update(t) {
                        (t.docChanged || t.selectionSet) && (this.decorations = this.getDeco(t.view))
                    }
                    getDeco(t) {
                        let e = -1,
                            i = [];
                        for (let s of t.state.selection.ranges) {
                            let o = t.lineBlockAt(s.head);
                            o.from > e && (i.push(iJ.range(o.from)), e = o.from)
                        }
                        return tr.set(i)
                    }
                }, {
                    decorations: t => t.decorations
                });
            class i1 extends to {
                constructor(t) {
                    super(), this.content = t
                }
                toDOM() {
                    let t = document.createElement("span");
                    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : this.content), "string" == typeof this.content ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t
                }
                coordsAt(t) {
                    let e = t.firstChild ? f(t.firstChild) : [];
                    if (!e.length) return null;
                    let i = window.getComputedStyle(t.parentNode),
                        s = w(e[0], "rtl" != i.direction),
                        o = parseInt(i.lineHeight);
                    return s.bottom - s.top > 1.5 * o ? {
                        left: s.left,
                        right: s.right,
                        top: s.top,
                        bottom: s.top + o
                    } : s
                }
                ignoreEvent() {
                    return !1
                }
            }

            function i2(t) {
                return tB.fromClass(class {
                    constructor(e) {
                        this.view = e, this.placeholder = t ? tr.set([tr.widget({
                            widget: new i1(t),
                            side: 1
                        }).range(0)]) : tr.none
                    }
                    get decorations() {
                        return this.view.state.doc.length ? tr.none : this.placeholder
                    }
                }, {
                    decorations: t => t.decorations
                })
            }

            function i8(t, e) {
                var i;
                let s, o = t.posAtCoords({
                        x: e.clientX,
                        y: e.clientY
                    }, !1),
                    n = t.state.doc.lineAt(o),
                    r = o - n.from,
                    h = r > 2e3 ? -1 : r == n.length ? (i = e.clientX, (s = t.coordsAtPos(t.viewport.from)) ? Math.round(Math.abs((s.left - i) / t.defaultCharacterWidth)) : -1) : (0, l.IS)(n.text, t.state.tabSize, o - n.from);
                return {
                    line: n.number,
                    col: h,
                    off: r
                }
            }

            function i3(t) {
                let e = (null == t ? void 0 : t.eventFilter) || (t => t.altKey && 0 == t.button);
                return il.mouseSelectionStyle.of((t, i) => {
                    let s, o;
                    return e(i) ? (s = i8(t, i), o = t.state.selection, s ? {
                        update(t) {
                            if (t.docChanged) {
                                let e = t.changes.mapPos(t.startState.doc.line(s.line).from),
                                    i = t.state.doc.lineAt(e);
                                s = {
                                    line: i.number,
                                    col: s.col,
                                    off: Math.min(s.off, i.length)
                                }, o = o.map(t.changes)
                            }
                        },
                        get(e, i, n) {
                            let r = i8(t, e);
                            if (!r) return o;
                            let h = function (t, e, i) {
                                let s = Math.min(e.line, i.line),
                                    o = Math.max(e.line, i.line),
                                    n = [];
                                if (e.off > 2e3 || i.off > 2e3 || e.col < 0 || i.col < 0) {
                                    let r = Math.min(e.off, i.off),
                                        h = Math.max(e.off, i.off);
                                    for (let e = s; e <= o; e++) {
                                        let i = t.doc.line(e);
                                        i.length <= h && n.push(l.jT.range(i.from + r, i.to + h))
                                    }
                                } else {
                                    let r = Math.min(e.col, i.col),
                                        h = Math.max(e.col, i.col);
                                    for (let e = s; e <= o; e++) {
                                        let i = t.doc.line(e),
                                            s = (0, l.Gz)(i.text, r, t.tabSize, !0);
                                        if (s < 0) n.push(l.jT.cursor(i.to));
                                        else {
                                            let e = (0, l.Gz)(i.text, h, t.tabSize);
                                            n.push(l.jT.range(i.from + s, i.from + e))
                                        }
                                    }
                                }
                                return n
                            }(t.state, s, r);
                            return h.length ? n ? l.jT.create(h.concat(o.ranges)) : l.jT.create(h) : o
                        }
                    } : null) : null
                })
            }
            let i9 = {
                    Alt: [18, t => !!t.altKey],
                    Control: [17, t => !!t.ctrlKey],
                    Shift: [16, t => !!t.shiftKey],
                    Meta: [91, t => !!t.metaKey]
                },
                i5 = {
                    style: "cursor: crosshair"
                };

            function i4(t = {}) {
                let [e, i] = i9[t.key || "Alt"], s = tB.fromClass(class {
                    constructor(t) {
                        this.view = t, this.isDown = !1
                    }
                    set(t) {
                        this.isDown != t && (this.isDown = t, this.view.update([]))
                    }
                }, {
                    eventHandlers: {
                        keydown(t) {
                            this.set(t.keyCode == e || i(t))
                        },
                        keyup(t) {
                            t.keyCode != e && i(t) || this.set(!1)
                        },
                        mousemove(t) {
                            this.set(i(t))
                        }
                    }
                });
                return [s, il.contentAttributes.of(t => {
                    var e;
                    return (null === (e = t.plugin(s)) || void 0 === e ? void 0 : e.isDown) ? i5 : null
                })]
            }
            let i6 = "-10000px";
            class i7 {
                constructor(t, e, i) {
                    this.facet = e, this.createTooltipView = i, this.input = t.state.facet(e), this.tooltips = this.input.filter(t => t), this.tooltipViews = this.tooltips.map(i)
                }
                update(t) {
                    var e;
                    let i = t.state.facet(this.facet),
                        s = i.filter(t => t);
                    if (i === this.input) {
                        for (let e of this.tooltipViews) e.update && e.update(t);
                        return !1
                    }
                    let o = [];
                    for (let e = 0; e < s.length; e++) {
                        let i = s[e],
                            n = -1;
                        if (i) {
                            for (let t = 0; t < this.tooltips.length; t++) {
                                let e = this.tooltips[t];
                                e && e.create == i.create && (n = t)
                            }
                            if (n < 0) o[e] = this.createTooltipView(i);
                            else {
                                let i = o[e] = this.tooltipViews[n];
                                i.update && i.update(t)
                            }
                        }
                    }
                    for (let t of this.tooltipViews) 0 > o.indexOf(t) && (t.dom.remove(), null === (e = t.destroy) || void 0 === e || e.call(t));
                    return this.input = i, this.tooltips = s, this.tooltipViews = o, !0
                }
            }

            function st(t) {
                let {
                    win: e
                } = t;
                return {
                    top: 0,
                    left: 0,
                    bottom: e.innerHeight,
                    right: e.innerWidth
                }
            }
            let se = l.r$.define({
                    combine: t => {
                        var e, i, s;
                        return {
                            position: _.ios ? "absolute" : (null === (e = t.find(t => t.position)) || void 0 === e ? void 0 : e.position) || "fixed",
                            parent: (null === (i = t.find(t => t.parent)) || void 0 === i ? void 0 : i.parent) || null,
                            tooltipSpace: (null === (s = t.find(t => t.tooltipSpace)) || void 0 === s ? void 0 : s.tooltipSpace) || st
                        }
                    }
                }),
                si = new WeakMap,
                ss = tB.fromClass(class {
                    constructor(t) {
                        this.view = t, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
                        let e = t.state.facet(se);
                        this.position = e.position, this.parent = e.parent, this.classes = t.themeClasses, this.createContainer(), this.measureReq = {
                            read: this.readMeasure.bind(this),
                            write: this.writeMeasure.bind(this),
                            key: this
                        }, this.manager = new i7(t, sr, t => this.createTooltip(t)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver(t => {
                            Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon()
                        }, {
                            threshold: [1]
                        }) : null, this.observeIntersection(), t.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
                    }
                    createContainer() {
                        this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
                    }
                    observeIntersection() {
                        if (this.intersectionObserver)
                            for (let t of (this.intersectionObserver.disconnect(), this.manager.tooltipViews)) this.intersectionObserver.observe(t.dom)
                    }
                    measureSoon() {
                        this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
                            this.measureTimeout = -1, this.maybeMeasure()
                        }, 50))
                    }
                    update(t) {
                        t.transactions.length && (this.lastTransaction = Date.now());
                        let e = this.manager.update(t);
                        e && this.observeIntersection();
                        let i = e || t.geometryChanged,
                            s = t.state.facet(se);
                        if (s.position != this.position) {
                            for (let t of (this.position = s.position, this.manager.tooltipViews)) t.dom.style.position = this.position;
                            i = !0
                        }
                        if (s.parent != this.parent) {
                            for (let t of (this.parent && this.container.remove(), this.parent = s.parent, this.createContainer(), this.manager.tooltipViews)) this.container.appendChild(t.dom);
                            i = !0
                        } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
                        i && this.maybeMeasure()
                    }
                    createTooltip(t) {
                        let e = t.create(this.view);
                        if (e.dom.classList.add("cm-tooltip"), t.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
                            let t = document.createElement("div");
                            t.className = "cm-tooltip-arrow", e.dom.appendChild(t)
                        }
                        return e.dom.style.position = this.position, e.dom.style.top = i6, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e
                    }
                    destroy() {
                        var t, e;
                        for (let e of (this.view.win.removeEventListener("resize", this.measureSoon), this.manager.tooltipViews)) e.dom.remove(), null === (t = e.destroy) || void 0 === t || t.call(e);
                        null === (e = this.intersectionObserver) || void 0 === e || e.disconnect(), clearTimeout(this.measureTimeout)
                    }
                    readMeasure() {
                        let t = this.view.dom.getBoundingClientRect();
                        return {
                            editor: t,
                            parent: this.parent ? this.container.getBoundingClientRect() : t,
                            pos: this.manager.tooltips.map((t, e) => {
                                let i = this.manager.tooltipViews[e];
                                return i.getCoords ? i.getCoords(t.pos) : this.view.coordsAtPos(t.pos)
                            }),
                            size: this.manager.tooltipViews.map(({
                                dom: t
                            }) => t.getBoundingClientRect()),
                            space: this.view.state.facet(se).tooltipSpace(this.view)
                        }
                    }
                    writeMeasure(t) {
                        var e;
                        let {
                            editor: i,
                            space: s
                        } = t, o = [];
                        for (let n = 0; n < this.manager.tooltips.length; n++) {
                            let r = this.manager.tooltips[n],
                                l = this.manager.tooltipViews[n],
                                {
                                    dom: h
                                } = l,
                                a = t.pos[n],
                                c = t.size[n];
                            if (!a || a.bottom <= Math.max(i.top, s.top) || a.top >= Math.min(i.bottom, s.bottom) || a.right < Math.max(i.left, s.left) - .1 || a.left > Math.min(i.right, s.right) + .1) {
                                h.style.top = i6;
                                continue
                            }
                            let d = r.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null,
                                u = d ? 7 : 0,
                                f = c.right - c.left,
                                p = null !== (e = si.get(l)) && void 0 !== e ? e : c.bottom - c.top,
                                g = l.offset || sn,
                                m = this.view.textDirection == tq.LTR,
                                v = c.width > s.right - s.left ? m ? s.left : s.right - c.width : m ? Math.min(a.left - (d ? 14 : 0) + g.x, s.right - f) : Math.max(s.left, a.left - f + (d ? 14 : 0) - g.x),
                                w = !!r.above;
                            !r.strictSide && (w ? a.top - (c.bottom - c.top) - g.y < s.top : a.bottom + (c.bottom - c.top) + g.y > s.bottom) && w == s.bottom - a.bottom > a.top - s.top && (w = !w);
                            let b = (w ? a.top - s.top : s.bottom - a.bottom) - u;
                            if (b < p && !1 !== l.resize) {
                                if (b < this.view.defaultLineHeight) {
                                    h.style.top = i6;
                                    continue
                                }
                                si.set(l, p), h.style.height = (p = b) + "px"
                            } else h.style.height && (h.style.height = "");
                            let y = w ? a.top - p - u - g.y : a.bottom + u + g.y,
                                x = v + f;
                            if (!0 !== l.overlap)
                                for (let t of o) t.left < x && t.right > v && t.top < y + p && t.bottom > y && (y = w ? t.top - p - 2 - u : t.bottom + u + 2);
                            "absolute" == this.position ? (h.style.top = y - t.parent.top + "px", h.style.left = v - t.parent.left + "px") : (h.style.top = y + "px", h.style.left = v + "px"), d && (d.style.left = `${a.left+(m?g.x:-g.x)-(v+14-7)}px`), !0 !== l.overlap && o.push({
                                left: v,
                                top: y,
                                right: x,
                                bottom: y + p
                            }), h.classList.toggle("cm-tooltip-above", w), h.classList.toggle("cm-tooltip-below", !w), l.positioned && l.positioned(t.space)
                        }
                    }
                    maybeMeasure() {
                        if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
                            for (let t of this.manager.tooltipViews) t.dom.style.top = i6
                    }
                }, {
                    eventHandlers: {
                        scroll() {
                            this.maybeMeasure()
                        }
                    }
                }),
                so = il.baseTheme({
                    ".cm-tooltip": {
                        zIndex: 100,
                        boxSizing: "border-box"
                    },
                    "&light .cm-tooltip": {
                        border: "1px solid #bbb",
                        backgroundColor: "#f5f5f5"
                    },
                    "&light .cm-tooltip-section:not(:first-child)": {
                        borderTop: "1px solid #bbb"
                    },
                    "&dark .cm-tooltip": {
                        backgroundColor: "#333338",
                        color: "white"
                    },
                    ".cm-tooltip-arrow": {
                        height: "7px",
                        width: "14px",
                        position: "absolute",
                        zIndex: -1,
                        overflow: "hidden",
                        "&:before, &:after": {
                            content: "''",
                            position: "absolute",
                            width: 0,
                            height: 0,
                            borderLeft: "7px solid transparent",
                            borderRight: "7px solid transparent"
                        },
                        ".cm-tooltip-above &": {
                            bottom: "-7px",
                            "&:before": {
                                borderTop: "7px solid #bbb"
                            },
                            "&:after": {
                                borderTop: "7px solid #f5f5f5",
                                bottom: "1px"
                            }
                        },
                        ".cm-tooltip-below &": {
                            top: "-7px",
                            "&:before": {
                                borderBottom: "7px solid #bbb"
                            },
                            "&:after": {
                                borderBottom: "7px solid #f5f5f5",
                                top: "1px"
                            }
                        }
                    },
                    "&dark .cm-tooltip .cm-tooltip-arrow": {
                        "&:before": {
                            borderTopColor: "#333338",
                            borderBottomColor: "#333338"
                        },
                        "&:after": {
                            borderTopColor: "transparent",
                            borderBottomColor: "transparent"
                        }
                    }
                }),
                sn = {
                    x: 0,
                    y: 0
                },
                sr = l.r$.define({
                    enables: [ss, so]
                }),
                sl = l.r$.define();
            class sh {
                constructor(t) {
                    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new i7(t, sl, t => this.createHostedView(t))
                }
                static create(t) {
                    return new sh(t)
                }
                createHostedView(t) {
                    let e = t.create(this.view);
                    return e.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(e.dom), this.mounted && e.mount && e.mount(this.view), e
                }
                mount(t) {
                    for (let e of this.manager.tooltipViews) e.mount && e.mount(t);
                    this.mounted = !0
                }
                positioned(t) {
                    for (let e of this.manager.tooltipViews) e.positioned && e.positioned(t)
                }
                update(t) {
                    this.manager.update(t)
                }
                destroy() {
                    var t;
                    for (let e of this.manager.tooltipViews) null === (t = e.destroy) || void 0 === t || t.call(e)
                }
            }
            let sa = sr.compute([sl], t => {
                let e = t.facet(sl).filter(t => t);
                return 0 === e.length ? null : {
                    pos: Math.min(...e.map(t => t.pos)),
                    end: Math.max(...e.filter(t => null != t.end).map(t => t.end)),
                    create: sh.create,
                    above: e[0].above,
                    arrow: e.some(t => t.arrow)
                }
            });
            class sc {
                constructor(t, e, i, s, o) {
                    this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
                        x: 0,
                        y: 0,
                        target: t.dom,
                        time: 0
                    }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
                }
                update() {
                    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20))
                }
                get active() {
                    return this.view.state.field(this.field)
                }
                checkHover() {
                    if (this.hoverTimeout = -1, this.active) return;
                    let t = Date.now() - this.lastMove.time;
                    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover()
                }
                startHover() {
                    clearTimeout(this.restartTimeout);
                    let {
                        lastMove: t
                    } = this, e = this.view.contentDOM.contains(t.target) ? this.view.posAtCoords(t) : null;
                    if (null == e) return;
                    let i = this.view.coordsAtPos(e);
                    if (null == i || t.y < i.top || t.y > i.bottom || t.x < i.left - this.view.defaultCharacterWidth || t.x > i.right + this.view.defaultCharacterWidth) return;
                    let s = this.view.bidiSpans(this.view.state.doc.lineAt(e)).find(t => t.from <= e && t.to >= e),
                        o = s && s.dir == tq.RTL ? -1 : 1,
                        n = this.source(this.view, e, t.x < i.left ? -o : o);
                    if (null == n ? void 0 : n.then) {
                        let t = this.pending = {
                            pos: e
                        };
                        n.then(e => {
                            this.pending == t && (this.pending = null, e && this.view.dispatch({
                                effects: this.setHover.of(e)
                            }))
                        }, t => tT(this.view.state, t, "hover tooltip"))
                    } else n && this.view.dispatch({
                        effects: this.setHover.of(n)
                    })
                }
                mousemove(t) {
                    var e;
                    this.lastMove = {
                        x: t.clientX,
                        y: t.clientY,
                        target: t.target,
                        time: Date.now()
                    }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
                    let i = this.active;
                    if (i && !sd(this.lastMove.target) || this.pending) {
                        let {
                            pos: s
                        } = i || this.pending, o = null !== (e = null == i ? void 0 : i.end) && void 0 !== e ? e : s;
                        (s == o ? this.view.posAtCoords(this.lastMove) != s : ! function (t, e, i, s, o, n) {
                            let r = document.createRange(),
                                l = t.domAtPos(e),
                                h = t.domAtPos(i);
                            r.setEnd(h.node, h.offset), r.setStart(l.node, l.offset);
                            let a = r.getClientRects();
                            r.detach();
                            for (let t = 0; t < a.length; t++) {
                                let e = a[t];
                                if (6 >= Math.max(e.top - o, o - e.bottom, e.left - s, s - e.right)) return !0
                            }
                            return !1
                        }(this.view, s, o, t.clientX, t.clientY, 0)) && (this.view.dispatch({
                            effects: this.setHover.of(null)
                        }), this.pending = null)
                    }
                }
                mouseleave(t) {
                    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !sd(t.relatedTarget) && this.view.dispatch({
                        effects: this.setHover.of(null)
                    })
                }
                destroy() {
                    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
                }
            }

            function sd(t) {
                for (let e = t; e; e = e.parentNode)
                    if (1 == e.nodeType && e.classList.contains("cm-tooltip")) return !0;
                return !1
            }

            function su(t, e = {}) {
                let i = l.Py.define(),
                    s = l.QQ.define({
                        create: () => null,
                        update(t, s) {
                            if (t && (e.hideOnChange && (s.docChanged || s.selection) || e.hideOn && e.hideOn(s, t))) return null;
                            if (t && s.docChanged) {
                                let e = s.changes.mapPos(t.pos, -1, l.gc.TrackDel);
                                if (null == e) return null;
                                let i = Object.assign(Object.create(null), t);
                                i.pos = e, null != t.end && (i.end = s.changes.mapPos(t.end)), t = i
                            }
                            for (let e of s.effects) e.is(i) && (t = e.value), e.is(sp) && (t = null);
                            return t
                        },
                        provide: t => sl.from(t)
                    });
                return [s, tB.define(o => new sc(o, t, s, i, e.hoverTime || 300)), sa]
            }

            function sf(t, e) {
                let i = t.plugin(ss);
                if (!i) return null;
                let s = i.manager.tooltips.indexOf(e);
                return s < 0 ? null : i.manager.tooltipViews[s]
            }
            let sp = l.Py.define(),
                sg = l.r$.define({
                    combine(t) {
                        let e, i;
                        for (let s of t) e = e || s.topContainer, i = i || s.bottomContainer;
                        return {
                            topContainer: e,
                            bottomContainer: i
                        }
                    }
                });

            function sm(t, e) {
                let i = t.plugin(sv),
                    s = i ? i.specs.indexOf(e) : -1;
                return s > -1 ? i.panels[s] : null
            }
            let sv = tB.fromClass(class {
                constructor(t) {
                    this.input = t.state.facet(sy), this.specs = this.input.filter(t => t), this.panels = this.specs.map(e => e(t));
                    let e = t.state.facet(sg);
                    for (let i of (this.top = new sw(t, !0, e.topContainer), this.bottom = new sw(t, !1, e.bottomContainer), this.top.sync(this.panels.filter(t => t.top)), this.bottom.sync(this.panels.filter(t => !t.top)), this.panels)) i.dom.classList.add("cm-panel"), i.mount && i.mount()
                }
                update(t) {
                    let e = t.state.facet(sg);
                    this.top.container != e.topContainer && (this.top.sync([]), this.top = new sw(t.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new sw(t.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
                    let i = t.state.facet(sy);
                    if (i != this.input) {
                        let e = i.filter(t => t),
                            s = [],
                            o = [],
                            n = [],
                            r = [];
                        for (let i of e) {
                            let e = this.specs.indexOf(i),
                                l;
                            e < 0 ? (l = i(t.view), r.push(l)) : (l = this.panels[e]).update && l.update(t), s.push(l), (l.top ? o : n).push(l)
                        }
                        for (let t of (this.specs = e, this.panels = s, this.top.sync(o), this.bottom.sync(n), r)) t.dom.classList.add("cm-panel"), t.mount && t.mount()
                    } else
                        for (let e of this.panels) e.update && e.update(t)
                }
                destroy() {
                    this.top.sync([]), this.bottom.sync([])
                }
            }, {
                provide: t => il.scrollMargins.of(e => {
                    let i = e.plugin(t);
                    return i && {
                        top: i.top.scrollMargin(),
                        bottom: i.bottom.scrollMargin()
                    }
                })
            });
            class sw {
                constructor(t, e, i) {
                    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
                }
                sync(t) {
                    for (let e of this.panels) e.destroy && 0 > t.indexOf(e) && e.destroy();
                    this.panels = t, this.syncDOM()
                }
                syncDOM() {
                    if (0 == this.panels.length) {
                        this.dom && (this.dom.remove(), this.dom = void 0);
                        return
                    }
                    if (!this.dom) {
                        this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
                        let t = this.container || this.view.dom;
                        t.insertBefore(this.dom, this.top ? t.firstChild : null)
                    }
                    let t = this.dom.firstChild;
                    for (let e of this.panels)
                        if (e.dom.parentNode == this.dom) {
                            for (; t != e.dom;) t = sb(t);
                            t = t.nextSibling
                        } else this.dom.insertBefore(e.dom, t);
                    for (; t;) t = sb(t)
                }
                scrollMargin() {
                    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
                }
                syncClasses() {
                    if (this.container && this.classes != this.view.themeClasses) {
                        for (let t of this.classes.split(" ")) t && this.container.classList.remove(t);
                        for (let t of (this.classes = this.view.themeClasses).split(" ")) t && this.container.classList.add(t)
                    }
                }
            }

            function sb(t) {
                let e = t.nextSibling;
                return t.remove(), e
            }
            let sy = l.r$.define({
                enables: sv
            });
            class sx extends l.uU {
                compare(t) {
                    return this == t || this.constructor == t.constructor && this.eq(t)
                }
                eq(t) {
                    return !1
                }
                destroy(t) {}
            }
            sx.prototype.elementClass = "", sx.prototype.toDOM = void 0, sx.prototype.mapMode = l.gc.TrackBefore, sx.prototype.startSide = sx.prototype.endSide = -1, sx.prototype.point = !0;
            let sS = l.r$.define(),
                sM = {
                    class: "",
                    renderEmptyElements: !1,
                    elementStyle: "",
                    markers: () => l.Xs.empty,
                    lineMarker: () => null,
                    widgetMarker: () => null,
                    lineMarkerChange: null,
                    initialSpacer: null,
                    updateSpacer: null,
                    domEventHandlers: {}
                },
                sk = l.r$.define();

            function sC(t) {
                return [sD(), sk.of(Object.assign(Object.assign({}, sM), t))]
            }
            let sA = l.r$.define({
                combine: t => t.some(t => t)
            });

            function sD(t) {
                let e = [sT];
                return t && !1 === t.fixed && e.push(sA.of(!0)), e
            }
            let sT = tB.fromClass(class {
                constructor(t) {
                    for (let e of (this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(sk).map(e => new sB(t, e)), this.gutters)) this.dom.appendChild(e.dom);
                    this.fixed = !t.state.facet(sA), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM)
                }
                update(t) {
                    if (this.updateGutters(t)) {
                        let e = this.prevViewport,
                            i = t.view.viewport,
                            s = Math.min(e.to, i.to) - Math.max(e.from, i.from);
                        this.syncGutters(s < (i.to - i.from) * .8)
                    }
                    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(sA) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport
                }
                syncGutters(t) {
                    let e = this.dom.nextSibling;
                    t && this.dom.remove();
                    let i = l.Xs.iter(this.view.state.facet(sS), this.view.viewport.from),
                        s = [],
                        o = this.gutters.map(t => new sE(t, this.view.viewport, -this.view.documentPadding.top));
                    for (let t of this.view.viewportLineBlocks)
                        if (s.length && (s = []), Array.isArray(t.type)) {
                            let e = !0;
                            for (let n of t.type)
                                if (n.type == tn.Text && e) {
                                    for (let t of (sR(i, s, n.from), o)) t.line(this.view, n, s);
                                    e = !1
                                } else if (n.widget)
                                for (let t of o) t.widget(this.view, n)
                        } else if (t.type == tn.Text)
                        for (let e of (sR(i, s, t.from), o)) e.line(this.view, t, s);
                    for (let t of o) t.finish();
                    t && this.view.scrollDOM.insertBefore(this.dom, e)
                }
                updateGutters(t) {
                    let e = t.startState.facet(sk),
                        i = t.state.facet(sk),
                        s = t.docChanged || t.heightChanged || t.viewportChanged || !l.Xs.eq(t.startState.facet(sS), t.state.facet(sS), t.view.viewport.from, t.view.viewport.to);
                    if (e == i)
                        for (let e of this.gutters) e.update(t) && (s = !0);
                    else {
                        s = !0;
                        let o = [];
                        for (let s of i) {
                            let i = e.indexOf(s);
                            i < 0 ? o.push(new sB(this.view, s)) : (this.gutters[i].update(t), o.push(this.gutters[i]))
                        }
                        for (let t of this.gutters) t.dom.remove(), 0 > o.indexOf(t) && t.destroy();
                        for (let t of o) this.dom.appendChild(t.dom);
                        this.gutters = o
                    }
                    return s
                }
                destroy() {
                    for (let t of this.gutters) t.destroy();
                    this.dom.remove()
                }
            }, {
                provide: t => il.scrollMargins.of(e => {
                    let i = e.plugin(t);
                    return i && 0 != i.gutters.length && i.fixed ? e.textDirection == tq.LTR ? {
                        left: i.dom.offsetWidth
                    } : {
                        right: i.dom.offsetWidth
                    } : null
                })
            });

            function sO(t) {
                return Array.isArray(t) ? t : [t]
            }

            function sR(t, e, i) {
                for (; t.value && t.from <= i;) t.from == i && e.push(t.value), t.next()
            }
            class sE {
                constructor(t, e, i) {
                    this.gutter = t, this.height = i, this.i = 0, this.cursor = l.Xs.iter(t.markers, e.from)
                }
                addElement(t, e, i) {
                    let {
                        gutter: s
                    } = this, o = e.top - this.height;
                    if (this.i == s.elements.length) {
                        let n = new sL(t, e.height, o, i);
                        s.elements.push(n), s.dom.appendChild(n.dom)
                    } else s.elements[this.i].update(t, e.height, o, i);
                    this.height = e.bottom, this.i++
                }
                line(t, e, i) {
                    let s = [];
                    sR(this.cursor, s, e.from), i.length && (s = s.concat(i));
                    let o = this.gutter.config.lineMarker(t, e, s);
                    o && s.unshift(o);
                    let n = this.gutter;
                    (0 != s.length || n.config.renderEmptyElements) && this.addElement(t, e, s)
                }
                widget(t, e) {
                    let i = this.gutter.config.widgetMarker(t, e.widget, e);
                    i && this.addElement(t, e, [i])
                }
                finish() {
                    let t = this.gutter;
                    for (; t.elements.length > this.i;) {
                        let e = t.elements.pop();
                        t.dom.removeChild(e.dom), e.destroy()
                    }
                }
            }
            class sB {
                constructor(t, e) {
                    for (let i in this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : ""), e.domEventHandlers) this.dom.addEventListener(i, s => {
                        let o = s.target,
                            n;
                        if (o != this.dom && this.dom.contains(o)) {
                            for (; o.parentNode != this.dom;) o = o.parentNode;
                            let t = o.getBoundingClientRect();
                            n = (t.top + t.bottom) / 2
                        } else n = s.clientY;
                        let r = t.lineBlockAtHeight(n - t.documentTop);
                        e.domEventHandlers[i](t, r, s) && s.preventDefault()
                    });
                    this.markers = sO(e.markers(t)), e.initialSpacer && (this.spacer = new sL(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
                }
                update(t) {
                    let e = this.markers;
                    if (this.markers = sO(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
                        let e = this.config.updateSpacer(this.spacer.markers[0], t);
                        e != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [e])
                    }
                    let i = t.view.viewport;
                    return !l.Xs.eq(this.markers, e, i.from, i.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t)
                }
                destroy() {
                    for (let t of this.elements) t.destroy()
                }
            }
            class sL {
                constructor(t, e, i, s) {
                    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s)
                }
                update(t, e, i, s) {
                    this.height != e && (this.dom.style.height = (this.height = e) + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), ! function (t, e) {
                        if (t.length != e.length) return !1;
                        for (let i = 0; i < t.length; i++)
                            if (!t[i].compare(e[i])) return !1;
                        return !0
                    }(this.markers, s) && this.setMarkers(t, s)
                }
                setMarkers(t, e) {
                    let i = "cm-gutterElement",
                        s = this.dom.firstChild;
                    for (let o = 0, n = 0;;) {
                        let r = n,
                            l = o < e.length ? e[o++] : null,
                            h = !1;
                        if (l) {
                            let t = l.elementClass;
                            t && (i += " " + t);
                            for (let t = n; t < this.markers.length; t++)
                                if (this.markers[t].compare(l)) {
                                    r = t, h = !0;
                                    break
                                }
                        } else r = this.markers.length;
                        for (; n < r;) {
                            let t = this.markers[n++];
                            if (t.toDOM) {
                                t.destroy(s);
                                let e = s.nextSibling;
                                s.remove(), s = e
                            }
                        }
                        if (!l) break;
                        l.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(l.toDOM(t), s)), h && n++
                    }
                    this.dom.className = i, this.markers = e
                }
                destroy() {
                    this.setMarkers(null, [])
                }
            }
            let sH = l.r$.define(),
                sP = l.r$.define({
                    combine: t => (0, l.BO)(t, {
                        formatNumber: String,
                        domEventHandlers: {}
                    }, {
                        domEventHandlers(t, e) {
                            let i = Object.assign({}, t);
                            for (let t in e) {
                                let s = i[t],
                                    o = e[t];
                                i[t] = s ? (t, e, i) => s(t, e, i) || o(t, e, i) : o
                            }
                            return i
                        }
                    })
                });
            class sN extends sx {
                constructor(t) {
                    super(), this.number = t
                }
                eq(t) {
                    return this.number == t.number
                }
                toDOM() {
                    return document.createTextNode(this.number)
                }
            }

            function sV(t, e) {
                return t.state.facet(sP).formatNumber(e, t.state)
            }
            let sW = sk.compute([sP], t => ({
                class: "cm-lineNumbers",
                renderEmptyElements: !1,
                markers: t => t.state.facet(sH),
                lineMarker: (t, e, i) => i.some(t => t.toDOM) ? null : new sN(sV(t, t.state.doc.lineAt(e.from).number)),
                widgetMarker: () => null,
                lineMarkerChange: t => t.startState.facet(sP) != t.state.facet(sP),
                initialSpacer: t => new sN(sV(t, sF(t.state.doc.lines))),
                updateSpacer(t, e) {
                    let i = sV(e.view, sF(e.view.state.doc.lines));
                    return i == t.number ? t : new sN(i)
                },
                domEventHandlers: t.facet(sP).domEventHandlers
            }));

            function sz(t = {}) {
                return [sP.of(t), sD(), sW]
            }

            function sF(t) {
                let e = 9;
                for (; e < t;) e = 10 * e + 9;
                return e
            }
            let sI = new class extends sx {
                    constructor() {
                        super(...arguments), this.elementClass = "cm-activeLineGutter"
                    }
                },
                sj = sS.compute(["selection"], t => {
                    let e = [],
                        i = -1;
                    for (let s of t.selection.ranges) {
                        let o = t.doc.lineAt(s.head).from;
                        o > i && (i = o, e.push(sI.range(o)))
                    }
                    return l.Xs.of(e)
                });

            function sq() {
                return sj
            }
        }
    }
]);