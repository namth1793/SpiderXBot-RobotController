"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [984], {
        3380: function (e, t, n) {
            n.d(t, {
                ZP: function () {
                    return no
                }
            });
            var r = n(2841),
                i = n(2564),
                s = n(4999),
                o = n(8099),
                a = n(696),
                l = n(4998);

            function c(e, t) {
                return ({
                    state: n,
                    dispatch: r
                }) => {
                    if (n.readOnly) return !1;
                    let i = e(t, n);
                    return !!i && (r(n.update(i)), !0)
                }
            }
            let h = c(function (e, t, n = t.selection.ranges) {
                    let r = [],
                        i = -1;
                    for (let {
                            from: e,
                            to: s
                        } of n) {
                        let n = r.length,
                            o = 1e9,
                            a = p(t, e).line;
                        if (a) {
                            for (let n = e; n <= s;) {
                                let l = t.doc.lineAt(n);
                                if (l.from > i && (e == s || s > l.from)) {
                                    i = l.from;
                                    let e = /^\s*/.exec(l.text)[0].length,
                                        t = e == l.length,
                                        n = l.text.slice(e, e + a.length) == a ? e : -1;
                                    e < l.text.length && e < o && (o = e), r.push({
                                        line: l,
                                        comment: n,
                                        token: a,
                                        indent: e,
                                        empty: t,
                                        single: !1
                                    })
                                }
                                n = l.to + 1
                            }
                            if (o < 1e9)
                                for (let e = n; e < r.length; e++) r[e].indent < r[e].line.text.length && (r[e].indent = o);
                            r.length == n + 1 && (r[n].single = !0)
                        }
                    }
                    if (2 != e && r.some(e => e.comment < 0 && (!e.empty || e.single))) {
                        let e = [];
                        for (let {
                                line: t,
                                token: n,
                                indent: i,
                                empty: s,
                                single: o
                            } of r)(o || !s) && e.push({
                            from: t.from + i,
                            insert: n + " "
                        });
                        let n = t.changes(e);
                        return {
                            changes: n,
                            selection: t.selection.map(n, 1)
                        }
                    }
                    if (1 != e && r.some(e => e.comment >= 0)) {
                        let e = [];
                        for (let {
                                line: t,
                                comment: n,
                                token: i
                            } of r)
                            if (n >= 0) {
                                let r = t.from + n,
                                    s = r + i.length;
                                " " == t.text[s - t.from] && s++, e.push({
                                    from: r,
                                    to: s
                                })
                            } return {
                            changes: e
                        }
                    }
                    return null
                }, 0),
                u = c(d, 0),
                f = c((e, t) => d(e, t, function (e) {
                    let t = [];
                    for (let n of e.selection.ranges) {
                        let r = e.doc.lineAt(n.from),
                            i = n.to <= r.to ? r : e.doc.lineAt(n.to),
                            s = t.length - 1;
                        s >= 0 && t[s].to > r.from ? t[s].to = i.to : t.push({
                            from: r.from + /^\s*/.exec(r.text)[0].length,
                            to: i.to
                        })
                    }
                    return t
                }(t)), 0);

            function p(e, t) {
                let n = e.languageDataAt("commentTokens", t);
                return n.length ? n[0] : {}
            }

            function d(e, t, n = t.selection.ranges) {
                let r = n.map(e => p(t, e.from).block);
                if (!r.every(e => e)) return null;
                let i = n.map((e, n) => (function (e, {
                    open: t,
                    close: n
                }, r, i) {
                    let s, o, a = e.sliceDoc(r - 50, r),
                        l = e.sliceDoc(i, i + 50),
                        c = /\s*$/.exec(a)[0].length,
                        h = /^\s*/.exec(l)[0].length,
                        u = a.length - c;
                    if (a.slice(u - t.length, u) == t && l.slice(h, h + n.length) == n) return {
                        open: {
                            pos: r - c,
                            margin: c && 1
                        },
                        close: {
                            pos: i + h,
                            margin: h && 1
                        }
                    };
                    i - r <= 100 ? s = o = e.sliceDoc(r, i) : (s = e.sliceDoc(r, r + 50), o = e.sliceDoc(i - 50, i));
                    let f = /^\s*/.exec(s)[0].length,
                        p = /\s*$/.exec(o)[0].length,
                        d = o.length - p - n.length;
                    return s.slice(f, f + t.length) == t && o.slice(d, d + n.length) == n ? {
                        open: {
                            pos: r + f + t.length,
                            margin: /\s/.test(s.charAt(f + t.length)) ? 1 : 0
                        },
                        close: {
                            pos: i - p - n.length,
                            margin: /\s/.test(o.charAt(d - 1)) ? 1 : 0
                        }
                    } : null
                })(t, r[n], e.from, e.to));
                if (2 != e && !i.every(e => e)) return {
                    changes: t.changes(n.map((e, t) => i[t] ? [] : [{
                        from: e.from,
                        insert: r[t].open + " "
                    }, {
                        from: e.to,
                        insert: " " + r[t].close
                    }]))
                };
                if (1 != e && i.some(e => e)) {
                    let e = [];
                    for (let t = 0, n; t < i.length; t++)
                        if (n = i[t]) {
                            let i = r[t],
                                {
                                    open: s,
                                    close: o
                                } = n;
                            e.push({
                                from: s.pos - i.open.length,
                                to: s.pos + s.margin
                            }, {
                                from: o.pos - o.margin,
                                to: o.pos + i.close.length
                            })
                        } return {
                        changes: e
                    }
                }
                return null
            }
            let O = s.q6.define(),
                m = s.q6.define(),
                g = s.r$.define(),
                x = s.r$.define({
                    combine: e => (0, s.BO)(e, {
                        minDepth: 100,
                        newGroupDelay: 500,
                        joinToEvent: (e, t) => t
                    }, {
                        minDepth: Math.max,
                        newGroupDelay: Math.min,
                        joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
                    })
                }),
                S = s.QQ.define({
                    create: () => C.empty,
                    update(e, t) {
                        let n = t.state.facet(x),
                            r = t.annotation(O);
                        if (r) {
                            var i;
                            let o;
                            let a = t.docChanged ? s.jT.single((i = t.changes, o = 0, i.iterChangedRanges((e, t) => o = t), o)) : void 0,
                                l = k.fromTransaction(t, a),
                                c = r.side,
                                h = 0 == c ? e.undone : e.done;
                            return h = l ? P(h, h.length, n.minDepth, l) : $(h, t.startState.selection), new C(0 == c ? r.rest : h, 0 == c ? h : r.rest)
                        }
                        let o = t.annotation(m);
                        if (("full" == o || "before" == o) && (e = e.isolate()), !1 === t.annotation(s.YW.addToHistory)) return t.changes.empty ? e : e.addMapping(t.changes.desc);
                        let a = k.fromTransaction(t),
                            l = t.annotation(s.YW.time),
                            c = t.annotation(s.YW.userEvent);
                        return a ? e = e.addChanges(a, l, c, n, t) : t.selection && (e = e.addSelection(t.startState.selection, l, c, n.newGroupDelay)), ("full" == o || "after" == o) && (e = e.isolate()), e
                    },
                    toJSON: e => ({
                        done: e.done.map(e => e.toJSON()),
                        undone: e.undone.map(e => e.toJSON())
                    }),
                    fromJSON: e => new C(e.done.map(k.fromJSON), e.undone.map(k.fromJSON))
                });

            function y(e, t) {
                return function ({
                    state: n,
                    dispatch: r
                }) {
                    if (!t && n.readOnly) return !1;
                    let i = n.field(S, !1);
                    if (!i) return !1;
                    let s = i.pop(e, n, t);
                    return !!s && (r(s), !0)
                }
            }
            let b = y(0, !1),
                v = y(1, !1),
                w = y(0, !0),
                T = y(1, !0);
            class k {
                constructor(e, t, n, r, i) {
                    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = i
                }
                setSelAfter(e) {
                    return new k(this.changes, this.effects, this.mapped, this.startSelection, e)
                }
                toJSON() {
                    var e, t, n;
                    return {
                        changes: null === (e = this.changes) || void 0 === e ? void 0 : e.toJSON(),
                        mapped: null === (t = this.mapped) || void 0 === t ? void 0 : t.toJSON(),
                        startSelection: null === (n = this.startSelection) || void 0 === n ? void 0 : n.toJSON(),
                        selectionsAfter: this.selectionsAfter.map(e => e.toJSON())
                    }
                }
                static fromJSON(e) {
                    return new k(e.changes && s.as.fromJSON(e.changes), [], e.mapped && s.n0.fromJSON(e.mapped), e.startSelection && s.jT.fromJSON(e.startSelection), e.selectionsAfter.map(s.jT.fromJSON))
                }
                static fromTransaction(e, t) {
                    let n = q;
                    for (let t of e.startState.facet(g)) {
                        let r = t(e);
                        r.length && (n = n.concat(r))
                    }
                    return !n.length && e.changes.empty ? null : new k(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, q)
                }
                static selection(e) {
                    return new k(void 0, q, void 0, void 0, e)
                }
            }

            function P(e, t, n, r) {
                let i = t + 1 > n + 20 ? t - n - 1 : 0,
                    s = e.slice(i, t);
                return s.push(r), s
            }

            function Q(e, t) {
                return e.length ? t.length ? e.concat(t) : e : t
            }
            let q = [];

            function $(e, t) {
                if (!e.length) return [k.selection([t])]; {
                    let n = e[e.length - 1],
                        r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - 200));
                    return r.length && r[r.length - 1].eq(t) ? e : (r.push(t), P(e, e.length - 1, 1e9, n.setSelAfter(r)))
                }
            }

            function R(e, t) {
                if (!e.length) return e;
                let n = e.length,
                    r = q;
                for (; n;) {
                    let i = function (e, t, n) {
                        let r = Q(e.selectionsAfter.length ? e.selectionsAfter.map(e => e.map(t)) : q, n);
                        if (!e.changes) return k.selection(r);
                        let i = e.changes.map(t),
                            o = t.mapDesc(e.changes, !0),
                            a = e.mapped ? e.mapped.composeDesc(o) : o;
                        return new k(i, s.Py.mapEffects(e.effects, t), a, e.startSelection.map(o), r)
                    }(e[n - 1], t, r);
                    if (i.changes && !i.changes.empty || i.effects.length) {
                        let t = e.slice(0, n);
                        return t[n - 1] = i, t
                    }
                    t = i.mapped, n--, r = i.selectionsAfter
                }
                return r.length ? [k.selection(r)] : q
            }
            let W = /^(input\.type|delete)($|\.)/;
            class C {
                constructor(e, t, n = 0, r) {
                    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r
                }
                isolate() {
                    return this.prevTime ? new C(this.done, this.undone) : this
                }
                addChanges(e, t, n, r, i) {
                    var s, o;
                    let a, l, c = this.done,
                        h = c[c.length - 1];
                    return c = h && h.changes && !h.changes.empty && e.changes && (!n || W.test(n)) && (!h.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(i, (s = h.changes, o = e.changes, a = [], l = !1, s.iterChangedRanges((e, t) => a.push(e, t)), o.iterChangedRanges((e, t, n, r) => {
                        for (let e = 0; e < a.length;) {
                            let t = a[e++],
                                i = a[e++];
                            r >= t && n <= i && (l = !0)
                        }
                    }), l)) || "input.type.compose" == n) ? P(c, c.length - 1, r.minDepth, new k(e.changes.compose(h.changes), Q(e.effects, h.effects), h.mapped, h.startSelection, q)) : P(c, c.length, r.minDepth, e), new C(c, q, t, n)
                }
                addSelection(e, t, n, r) {
                    var i;
                    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : q;
                    return s.length > 0 && t - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && (i = s[s.length - 1]).ranges.length == e.ranges.length && 0 === i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length ? this : new C($(this.done, e), this.undone, t, n)
                }
                addMapping(e) {
                    return new C(R(this.done, e), R(this.undone, e), this.prevTime, this.prevUserEvent)
                }
                pop(e, t, n) {
                    let r = 0 == e ? this.done : this.undone;
                    if (0 == r.length) return null;
                    let i = r[r.length - 1];
                    if (n && i.selectionsAfter.length) {
                        let n, s;
                        return t.update({
                            selection: i.selectionsAfter[i.selectionsAfter.length - 1],
                            annotations: O.of({
                                side: e,
                                rest: (n = r[r.length - 1], (s = r.slice())[r.length - 1] = n.setSelAfter(n.selectionsAfter.slice(0, n.selectionsAfter.length - 1)), s)
                            }),
                            userEvent: 0 == e ? "select.undo" : "select.redo",
                            scrollIntoView: !0
                        })
                    }
                    if (!i.changes) return null; {
                        let n = 1 == r.length ? q : r.slice(0, r.length - 1);
                        return i.mapped && (n = R(n, i.mapped)), t.update({
                            changes: i.changes,
                            selection: i.startSelection,
                            effects: i.effects,
                            annotations: O.of({
                                side: e,
                                rest: n
                            }),
                            filter: !1,
                            userEvent: 0 == e ? "undo" : "redo",
                            scrollIntoView: !0
                        })
                    }
                }
            }
            C.empty = new C(q, q);
            let X = [{
                key: "Mod-z",
                run: b,
                preventDefault: !0
            }, {
                key: "Mod-y",
                mac: "Mod-Shift-z",
                run: v,
                preventDefault: !0
            }, {
                linux: "Ctrl-Shift-z",
                run: v,
                preventDefault: !0
            }, {
                key: "Mod-u",
                run: w,
                preventDefault: !0
            }, {
                key: "Alt-u",
                mac: "Mod-Shift-u",
                run: T,
                preventDefault: !0
            }];

            function E(e, t) {
                return s.jT.create(e.ranges.map(t), e.mainIndex)
            }

            function A(e, t) {
                return e.update({
                    selection: t,
                    scrollIntoView: !0,
                    userEvent: "select"
                })
            }

            function V({
                state: e,
                dispatch: t
            }, n) {
                let r = E(e.selection, n);
                return !r.eq(e.selection) && (t(A(e, r)), !0)
            }

            function Y(e, t) {
                return s.jT.cursor(t ? e.to : e.from)
            }

            function D(e, t) {
                return V(e, n => n.empty ? e.moveByChar(n, t) : Y(n, t))
            }

            function j(e) {
                return e.textDirectionAt(e.state.selection.main.head) == o.Nm.LTR
            }
            let M = e => D(e, !j(e)),
                _ = e => D(e, j(e));

            function I(e, t) {
                return V(e, n => n.empty ? e.moveByGroup(n, t) : Y(n, t))
            }

            function Z(e, t, n) {
                let r, i, o = (0, a.qz)(e).resolveInner(t.head),
                    c = n ? l.md.closedBy : l.md.openedBy;
                for (let r = t.head;;) {
                    let t = n ? o.childAfter(r) : o.childBefore(r);
                    if (!t) break;
                    ! function (e, t, n) {
                        if (t.type.prop(n)) return !0;
                        let r = t.to - t.from;
                        return r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild
                    }(e, t, c) ? r = n ? t.to : t.from: o = t
                }
                return i = o.type.prop(c) && (r = n ? (0, a.Um)(e, o.from, 1) : (0, a.Um)(e, o.to, -1)) && r.matched ? n ? r.end.to : r.end.from : n ? o.to : o.from, s.jT.cursor(i, n ? -1 : 1)
            }

            function G(e, t) {
                return V(e, n => {
                    if (!n.empty) return Y(n, t);
                    let r = e.moveVertically(n, t);
                    return r.head != n.head ? r : e.moveToLineBoundary(n, t)
                })
            }
            let N = e => G(e, !1),
                U = e => G(e, !0);

            function z(e) {
                let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2,
                    n = 0,
                    r = 0,
                    i;
                if (t) {
                    for (let t of e.state.facet(o.tk.scrollMargins)) {
                        let i = t(e);
                        (null == i ? void 0 : i.top) && (n = Math.max(null == i ? void 0 : i.top, n)), (null == i ? void 0 : i.bottom) && (r = Math.max(null == i ? void 0 : i.bottom, r))
                    }
                    i = e.scrollDOM.clientHeight - n - r
                } else i = (e.dom.ownerDocument.defaultView || window).innerHeight;
                return {
                    marginTop: n,
                    marginBottom: r,
                    selfScroll: t,
                    height: Math.max(e.defaultLineHeight, i - 5)
                }
            }

            function B(e, t) {
                let n, r = z(e),
                    {
                        state: i
                    } = e,
                    s = E(i.selection, n => n.empty ? e.moveVertically(n, t, r.height) : Y(n, t));
                if (s.eq(i.selection)) return !1;
                if (r.selfScroll) {
                    let t = e.coordsAtPos(i.selection.main.head),
                        a = e.scrollDOM.getBoundingClientRect(),
                        l = a.top + r.marginTop,
                        c = a.bottom - r.marginBottom;
                    t && t.top > l && t.bottom < c && (n = o.tk.scrollIntoView(s.main.head, {
                        y: "start",
                        yMargin: t.top - l
                    }))
                }
                return e.dispatch(A(i, s), {
                    effects: n
                }), !0
            }
            let L = e => B(e, !1),
                F = e => B(e, !0);

            function J(e, t, n) {
                let r = e.lineBlockAt(t.head),
                    i = e.moveToLineBoundary(t, n);
                if (i.head == t.head && i.head != (n ? r.to : r.from) && (i = e.moveToLineBoundary(t, n, !1)), !n && i.head == r.from && r.length) {
                    let n = /^\s*/.exec(e.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
                    n && t.head != r.from + n && (i = s.jT.cursor(r.from + n))
                }
                return i
            }

            function H(e, t) {
                let n = E(e.state.selection, e => {
                    let n = t(e);
                    return s.jT.range(e.anchor, n.head, n.goalColumn, n.bidiLevel || void 0)
                });
                return !n.eq(e.state.selection) && (e.dispatch(A(e.state, n)), !0)
            }

            function K(e, t) {
                return H(e, n => e.moveByChar(n, t))
            }
            let ee = e => K(e, !j(e)),
                et = e => K(e, j(e));

            function en(e, t) {
                return H(e, n => e.moveByGroup(n, t))
            }

            function er(e, t) {
                return H(e, n => e.moveVertically(n, t))
            }
            let ei = e => er(e, !1),
                es = e => er(e, !0);

            function eo(e, t) {
                return H(e, n => e.moveVertically(n, t, z(e).height))
            }
            let ea = e => eo(e, !1),
                el = e => eo(e, !0),
                ec = ({
                    state: e,
                    dispatch: t
                }) => (t(A(e, {
                    anchor: 0
                })), !0),
                eh = ({
                    state: e,
                    dispatch: t
                }) => (t(A(e, {
                    anchor: e.doc.length
                })), !0),
                eu = ({
                    state: e,
                    dispatch: t
                }) => (t(A(e, {
                    anchor: e.selection.main.anchor,
                    head: 0
                })), !0),
                ef = ({
                    state: e,
                    dispatch: t
                }) => (t(A(e, {
                    anchor: e.selection.main.anchor,
                    head: e.doc.length
                })), !0);

            function ep(e, t) {
                if (e.state.readOnly) return !1;
                let n = "delete.selection",
                    {
                        state: r
                    } = e,
                    i = r.changeByRange(r => {
                        let {
                            from: i,
                            to: o
                        } = r;
                        if (i == o) {
                            let r = t(i);
                            r < i ? (n = "delete.backward", r = ed(e, r, !1)) : r > i && (n = "delete.forward", r = ed(e, r, !0)), i = Math.min(i, r), o = Math.max(o, r)
                        } else i = ed(e, i, !1), o = ed(e, o, !0);
                        return i == o ? {
                            range: r
                        } : {
                            changes: {
                                from: i,
                                to: o
                            },
                            range: s.jT.cursor(i)
                        }
                    });
                return !i.changes.empty && (e.dispatch(r.update(i, {
                    scrollIntoView: !0,
                    userEvent: n,
                    effects: "delete.selection" == n ? o.tk.announce.of(r.phrase("Selection deleted")) : void 0
                })), !0)
            }

            function ed(e, t, n) {
                if (e instanceof o.tk)
                    for (let r of e.state.facet(o.tk.atomicRanges).map(t => t(e))) r.between(t, t, (e, r) => {
                        e < t && r > t && (t = n ? r : e)
                    });
                return t
            }
            let eO = (e, t) => ep(e, n => {
                    let {
                        state: r
                    } = e, i = r.doc.lineAt(n), o, l;
                    if (!t && n > i.from && n < i.from + 200 && !/[^ \t]/.test(o = i.text.slice(0, n - i.from))) {
                        if ("	" == o[o.length - 1]) return n - 1;
                        let e = (0, s.IS)(o, r.tabSize) % (0, a.y1)(r) || (0, a.y1)(r);
                        for (let t = 0; t < e && " " == o[o.length - 1 - t]; t++) n--;
                        l = n
                    } else(l = (0, s.cp)(i.text, n - i.from, t, t) + i.from) == n && i.number != (t ? r.doc.lines : 1) && (l += t ? 1 : -1);
                    return l
                }),
                em = e => eO(e, !1),
                eg = e => eO(e, !0),
                ex = (e, t) => ep(e, n => {
                    let r = n,
                        {
                            state: i
                        } = e,
                        o = i.doc.lineAt(r),
                        a = i.charCategorizer(r);
                    for (let e = null;;) {
                        if (r == (t ? o.to : o.from)) {
                            r == n && o.number != (t ? i.doc.lines : 1) && (r += t ? 1 : -1);
                            break
                        }
                        let l = (0, s.cp)(o.text, r - o.from, t) + o.from,
                            c = o.text.slice(Math.min(r, l) - o.from, Math.max(r, l) - o.from),
                            h = a(c);
                        if (null != e && h != e) break;
                        (" " != c || r != n) && (e = h), r = l
                    }
                    return r
                }),
                eS = e => ex(e, !1),
                ey = e => ep(e, t => {
                    let n = e.lineBlockAt(t).to;
                    return t < n ? n : Math.min(e.state.doc.length, t + 1)
                });

            function eb(e) {
                let t = [],
                    n = -1;
                for (let r of e.selection.ranges) {
                    let i = e.doc.lineAt(r.from),
                        s = e.doc.lineAt(r.to);
                    if (r.empty || r.to != s.from || (s = e.doc.lineAt(r.to - 1)), n >= i.number) {
                        let e = t[t.length - 1];
                        e.to = s.to, e.ranges.push(r)
                    } else t.push({
                        from: i.from,
                        to: s.to,
                        ranges: [r]
                    });
                    n = s.number + 1
                }
                return t
            }

            function ev(e, t, n) {
                if (e.readOnly) return !1;
                let r = [],
                    i = [];
                for (let t of eb(e)) {
                    if (n ? t.to == e.doc.length : 0 == t.from) continue;
                    let o = e.doc.lineAt(n ? t.to + 1 : t.from - 1),
                        a = o.length + 1;
                    if (n)
                        for (let n of (r.push({
                                from: t.to,
                                to: o.to
                            }, {
                                from: t.from,
                                insert: o.text + e.lineBreak
                            }), t.ranges)) i.push(s.jT.range(Math.min(e.doc.length, n.anchor + a), Math.min(e.doc.length, n.head + a)));
                    else
                        for (let n of (r.push({
                                from: o.from,
                                to: t.from
                            }, {
                                from: t.to,
                                insert: e.lineBreak + o.text
                            }), t.ranges)) i.push(s.jT.range(n.anchor - a, n.head - a))
                }
                return !!r.length && (t(e.update({
                    changes: r,
                    scrollIntoView: !0,
                    selection: s.jT.create(i, e.selection.mainIndex),
                    userEvent: "move.line"
                })), !0)
            }

            function ew(e, t, n) {
                if (e.readOnly) return !1;
                let r = [];
                for (let t of eb(e)) n ? r.push({
                    from: t.from,
                    insert: e.doc.slice(t.from, t.to) + e.lineBreak
                }) : r.push({
                    from: t.to,
                    insert: e.lineBreak + e.doc.slice(t.from, t.to)
                });
                return t(e.update({
                    changes: r,
                    scrollIntoView: !0,
                    userEvent: "input.copyline"
                })), !0
            }
            let eT = eP(!1),
                ek = eP(!0);

            function eP(e) {
                return ({
                    state: t,
                    dispatch: n
                }) => {
                    if (t.readOnly) return !1;
                    let r = t.changeByRange(n => {
                        let {
                            from: r,
                            to: i
                        } = n, o = t.doc.lineAt(r), c = !e && r == i && function (e, t) {
                            if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
                                from: t,
                                to: t
                            };
                            let n = (0, a.qz)(e).resolveInner(t),
                                r = n.childBefore(t),
                                i = n.childAfter(t),
                                s;
                            return r && i && r.to <= t && i.from >= t && (s = r.type.prop(l.md.closedBy)) && s.indexOf(i.name) > -1 && e.doc.lineAt(r.to).from == e.doc.lineAt(i.from).from ? {
                                from: r.to,
                                to: i.from
                            } : null
                        }(t, r);
                        e && (r = i = (i <= o.to ? o : t.doc.lineAt(i)).to);
                        let h = new a.Gn(t, {
                                simulateBreak: r,
                                simulateDoubleBreak: !!c
                            }),
                            u = (0, a.K0)(h, r);
                        for (null == u && (u = /^\s*/.exec(t.doc.lineAt(r).text)[0].length); i < o.to && /\s/.test(o.text[i - o.from]);) i++;
                        c ? {
                            from: r,
                            to: i
                        } = c : r > o.from && r < o.from + 100 && !/\S/.test(o.text.slice(0, r)) && (r = o.from);
                        let f = ["", (0, a.SS)(t, u)];
                        return c && f.push((0, a.SS)(t, h.lineIndent(o.from, -1))), {
                            changes: {
                                from: r,
                                to: i,
                                insert: s.xv.of(f)
                            },
                            range: s.jT.cursor(r + 1 + f[1].length)
                        }
                    });
                    return n(t.update(r, {
                        scrollIntoView: !0,
                        userEvent: "input"
                    })), !0
                }
            }

            function eQ(e, t) {
                let n = -1;
                return e.changeByRange(r => {
                    let i = [];
                    for (let s = r.from; s <= r.to;) {
                        let o = e.doc.lineAt(s);
                        o.number > n && (r.empty || r.to > o.from) && (t(o, i, r), n = o.number), s = o.to + 1
                    }
                    let o = e.changes(i);
                    return {
                        changes: i,
                        range: s.jT.range(o.mapPos(r.anchor, 1), o.mapPos(r.head, 1))
                    }
                })
            }
            let eq = ({
                    state: e,
                    dispatch: t
                }) => !e.readOnly && (t(e.update(eQ(e, (t, n) => {
                    n.push({
                        from: t.from,
                        insert: e.facet(a.c)
                    })
                }), {
                    userEvent: "input.indent"
                })), !0),
                e$ = ({
                    state: e,
                    dispatch: t
                }) => !e.readOnly && (t(e.update(eQ(e, (t, n) => {
                    let r = /^\s*/.exec(t.text)[0];
                    if (!r) return;
                    let i = (0, s.IS)(r, e.tabSize),
                        o = 0,
                        l = (0, a.SS)(e, Math.max(0, i - (0, a.y1)(e)));
                    for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o);) o++;
                    n.push({
                        from: t.from + o,
                        to: t.from + r.length,
                        insert: l.slice(o)
                    })
                }), {
                    userEvent: "delete.dedent"
                })), !0),
                eR = [{
                    key: "Ctrl-b",
                    run: M,
                    shift: ee,
                    preventDefault: !0
                }, {
                    key: "Ctrl-f",
                    run: _,
                    shift: et
                }, {
                    key: "Ctrl-p",
                    run: N,
                    shift: ei
                }, {
                    key: "Ctrl-n",
                    run: U,
                    shift: es
                }, {
                    key: "Ctrl-a",
                    run: e => V(e, t => s.jT.cursor(e.lineBlockAt(t.head).from, 1)),
                    shift: e => H(e, t => s.jT.cursor(e.lineBlockAt(t.head).from))
                }, {
                    key: "Ctrl-e",
                    run: e => V(e, t => s.jT.cursor(e.lineBlockAt(t.head).to, -1)),
                    shift: e => H(e, t => s.jT.cursor(e.lineBlockAt(t.head).to))
                }, {
                    key: "Ctrl-d",
                    run: eg
                }, {
                    key: "Ctrl-h",
                    run: em
                }, {
                    key: "Ctrl-k",
                    run: ey
                }, {
                    key: "Ctrl-Alt-h",
                    run: eS
                }, {
                    key: "Ctrl-o",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        if (e.readOnly) return !1;
                        let n = e.changeByRange(e => ({
                            changes: {
                                from: e.from,
                                to: e.to,
                                insert: s.xv.of(["", ""])
                            },
                            range: s.jT.cursor(e.from)
                        }));
                        return t(e.update(n, {
                            scrollIntoView: !0,
                            userEvent: "input"
                        })), !0
                    }
                }, {
                    key: "Ctrl-t",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        if (e.readOnly) return !1;
                        let n = e.changeByRange(t => {
                            if (!t.empty || 0 == t.from || t.from == e.doc.length) return {
                                range: t
                            };
                            let n = t.from,
                                r = e.doc.lineAt(n),
                                i = n == r.from ? n - 1 : (0, s.cp)(r.text, n - r.from, !1) + r.from,
                                o = n == r.to ? n + 1 : (0, s.cp)(r.text, n - r.from, !0) + r.from;
                            return {
                                changes: {
                                    from: i,
                                    to: o,
                                    insert: e.doc.slice(n, o).append(e.doc.slice(i, n))
                                },
                                range: s.jT.cursor(o)
                            }
                        });
                        return !n.changes.empty && (t(e.update(n, {
                            scrollIntoView: !0,
                            userEvent: "move.character"
                        })), !0)
                    }
                }, {
                    key: "Ctrl-v",
                    run: F
                }],
                eW = [{
                    key: "ArrowLeft",
                    run: M,
                    shift: ee,
                    preventDefault: !0
                }, {
                    key: "Mod-ArrowLeft",
                    mac: "Alt-ArrowLeft",
                    run: e => I(e, !j(e)),
                    shift: e => en(e, !j(e)),
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowLeft",
                    run: e => V(e, t => J(e, t, !j(e))),
                    shift: e => H(e, t => J(e, t, !j(e))),
                    preventDefault: !0
                }, {
                    key: "ArrowRight",
                    run: _,
                    shift: et,
                    preventDefault: !0
                }, {
                    key: "Mod-ArrowRight",
                    mac: "Alt-ArrowRight",
                    run: e => I(e, j(e)),
                    shift: e => en(e, j(e)),
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowRight",
                    run: e => V(e, t => J(e, t, j(e))),
                    shift: e => H(e, t => J(e, t, j(e))),
                    preventDefault: !0
                }, {
                    key: "ArrowUp",
                    run: N,
                    shift: ei,
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowUp",
                    run: ec,
                    shift: eu
                }, {
                    mac: "Ctrl-ArrowUp",
                    run: L,
                    shift: ea
                }, {
                    key: "ArrowDown",
                    run: U,
                    shift: es,
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowDown",
                    run: eh,
                    shift: ef
                }, {
                    mac: "Ctrl-ArrowDown",
                    run: F,
                    shift: el
                }, {
                    key: "PageUp",
                    run: L,
                    shift: ea
                }, {
                    key: "PageDown",
                    run: F,
                    shift: el
                }, {
                    key: "Home",
                    run: e => V(e, t => J(e, t, !1)),
                    shift: e => H(e, t => J(e, t, !1)),
                    preventDefault: !0
                }, {
                    key: "Mod-Home",
                    run: ec,
                    shift: eu
                }, {
                    key: "End",
                    run: e => V(e, t => J(e, t, !0)),
                    shift: e => H(e, t => J(e, t, !0)),
                    preventDefault: !0
                }, {
                    key: "Mod-End",
                    run: eh,
                    shift: ef
                }, {
                    key: "Enter",
                    run: eT
                }, {
                    key: "Mod-a",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => (t(e.update({
                        selection: {
                            anchor: 0,
                            head: e.doc.length
                        },
                        userEvent: "select"
                    })), !0)
                }, {
                    key: "Backspace",
                    run: em,
                    shift: em
                }, {
                    key: "Delete",
                    run: eg
                }, {
                    key: "Mod-Backspace",
                    mac: "Alt-Backspace",
                    run: eS
                }, {
                    key: "Mod-Delete",
                    mac: "Alt-Delete",
                    run: e => ex(e, !0)
                }, {
                    mac: "Mod-Backspace",
                    run: e => ep(e, t => {
                        let n = e.lineBlockAt(t).from;
                        return t > n ? n : Math.max(0, t - 1)
                    })
                }, {
                    mac: "Mod-Delete",
                    run: ey
                }].concat(eR.map(e => ({
                    mac: e.key,
                    run: e.run,
                    shift: e.shift
                }))),
                eC = [{
                    key: "Alt-ArrowLeft",
                    mac: "Ctrl-ArrowLeft",
                    run: e => V(e, t => Z(e.state, t, !j(e))),
                    shift: e => H(e, t => Z(e.state, t, !j(e)))
                }, {
                    key: "Alt-ArrowRight",
                    mac: "Ctrl-ArrowRight",
                    run: e => V(e, t => Z(e.state, t, j(e))),
                    shift: e => H(e, t => Z(e.state, t, j(e)))
                }, {
                    key: "Alt-ArrowUp",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => ev(e, t, !1)
                }, {
                    key: "Shift-Alt-ArrowUp",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => ew(e, t, !1)
                }, {
                    key: "Alt-ArrowDown",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => ev(e, t, !0)
                }, {
                    key: "Shift-Alt-ArrowDown",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => ew(e, t, !0)
                }, {
                    key: "Escape",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        let n = e.selection,
                            r = null;
                        return n.ranges.length > 1 ? r = s.jT.create([n.main]) : n.main.empty || (r = s.jT.create([s.jT.cursor(n.main.head)])), !!r && (t(A(e, r)), !0)
                    }
                }, {
                    key: "Mod-Enter",
                    run: ek
                }, {
                    key: "Alt-l",
                    mac: "Ctrl-l",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        let n = eb(e).map(({
                            from: t,
                            to: n
                        }) => s.jT.range(t, Math.min(n + 1, e.doc.length)));
                        return t(e.update({
                            selection: s.jT.create(n),
                            userEvent: "select"
                        })), !0
                    }
                }, {
                    key: "Mod-i",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        let n = E(e.selection, t => {
                            var n;
                            let r = (0, a.qz)(e).resolveInner(t.head, 1);
                            for (; !(r.from < t.from && r.to >= t.to || r.to > t.to && r.from <= t.from || !(null === (n = r.parent) || void 0 === n ? void 0 : n.parent));) r = r.parent;
                            return s.jT.range(r.to, r.from)
                        });
                        return t(A(e, n)), !0
                    },
                    preventDefault: !0
                }, {
                    key: "Mod-[",
                    run: e$
                }, {
                    key: "Mod-]",
                    run: eq
                }, {
                    key: "Mod-Alt-\\",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        if (e.readOnly) return !1;
                        let n = Object.create(null),
                            r = new a.Gn(e, {
                                overrideIndentation: e => {
                                    let t = n[e];
                                    return null == t ? -1 : t
                                }
                            }),
                            i = eQ(e, (t, i, s) => {
                                let o = (0, a.K0)(r, t.from);
                                if (null == o) return;
                                /\S/.test(t.text) || (o = 0);
                                let l = /^\s*/.exec(t.text)[0],
                                    c = (0, a.SS)(e, o);
                                (l != c || s.from < t.from + l.length) && (n[t.from] = o, i.push({
                                    from: t.from,
                                    to: t.from + l.length,
                                    insert: c
                                }))
                            });
                        return i.changes.empty || t(e.update(i, {
                            userEvent: "indent"
                        })), !0
                    }
                }, {
                    key: "Shift-Mod-k",
                    run: e => {
                        if (e.state.readOnly) return !1;
                        let {
                            state: t
                        } = e, n = t.changes(eb(t).map(({
                            from: e,
                            to: n
                        }) => (e > 0 ? e-- : n < t.doc.length && n++, {
                            from: e,
                            to: n
                        }))), r = E(t.selection, t => e.moveVertically(t, !0)).map(n);
                        return e.dispatch({
                            changes: n,
                            selection: r,
                            scrollIntoView: !0,
                            userEvent: "delete.line"
                        }), !0
                    }
                }, {
                    key: "Shift-Mod-\\",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        let n, r;
                        return n = !1, r = E(e.selection, t => {
                            let r = (0, a.Um)(e, t.head, -1) || (0, a.Um)(e, t.head, 1) || t.head > 0 && (0, a.Um)(e, t.head - 1, 1) || t.head < e.doc.length && (0, a.Um)(e, t.head + 1, -1);
                            if (!r || !r.end) return t;
                            n = !0;
                            let i = r.start.from == t.head ? r.end.to : r.end.from;
                            return s.jT.cursor(i)
                        }), !!n && (t(A(e, r)), !0)
                    }
                }, {
                    key: "Mod-/",
                    run: e => {
                        let {
                            state: t
                        } = e, n = t.doc.lineAt(t.selection.main.from), r = p(e.state, n.from);
                        return r.line ? h(e) : !!r.block && f(e)
                    }
                }, {
                    key: "Alt-A",
                    run: u
                }].concat(eW),
                eX = {
                    key: "Tab",
                    run: eq,
                    shift: e$
                };

            function eE() {
                var e = arguments[0];
                "string" == typeof e && (e = document.createElement(e));
                var t = 1,
                    n = arguments[1];
                if (n && "object" == typeof n && null == n.nodeType && !Array.isArray(n)) {
                    for (var r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            var i = n[r];
                            "string" == typeof i ? e.setAttribute(r, i) : null != i && (e[r] = i)
                        } t++
                }
                for (; t < arguments.length; t++) ! function e(t, n) {
                    if ("string" == typeof n) t.appendChild(document.createTextNode(n));
                    else if (null == n);
                    else if (null != n.nodeType) t.appendChild(n);
                    else if (Array.isArray(n))
                        for (var r = 0; r < n.length; r++) e(t, n[r]);
                    else throw RangeError("Unsupported child node: " + n)
                }(e, arguments[t]);
                return e
            }
            let eA = "function" == typeof String.prototype.normalize ? e => e.normalize("NFKD") : e => e;
            class eV {
                constructor(e, t, n = 0, r = e.length, i, s) {
                    this.test = s, this.value = {
                        from: 0,
                        to: 0
                    }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, r), this.bufferStart = n, this.normalize = i ? e => i(eA(e)) : eA, this.query = this.normalize(t)
                }
                peek() {
                    if (this.bufferPos == this.buffer.length) {
                        if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
                        this.bufferPos = 0, this.buffer = this.iter.value
                    }
                    return (0, s.gm)(this.buffer, this.bufferPos)
                }
                next() {
                    for (; this.matches.length;) this.matches.pop();
                    return this.nextOverlapping()
                }
                nextOverlapping() {
                    for (;;) {
                        let e = this.peek();
                        if (e < 0) return this.done = !0, this;
                        let t = (0, s.bg)(e),
                            n = this.bufferStart + this.bufferPos;
                        this.bufferPos += (0, s.nZ)(e);
                        let r = this.normalize(t);
                        for (let e = 0, i = n;; e++) {
                            let s = r.charCodeAt(e),
                                o = this.match(s, i);
                            if (o) return this.value = o, this;
                            if (e == r.length - 1) break;
                            i == n && e < t.length && t.charCodeAt(e) == s && i++
                        }
                    }
                }
                match(e, t) {
                    let n = null;
                    for (let r = 0; r < this.matches.length; r += 2) {
                        let i = this.matches[r],
                            s = !1;
                        this.query.charCodeAt(i) == e && (i == this.query.length - 1 ? n = {
                            from: this.matches[r + 1],
                            to: t + 1
                        } : (this.matches[r]++, s = !0)), s || (this.matches.splice(r, 2), r -= 2)
                    }
                    return this.query.charCodeAt(0) == e && (1 == this.query.length ? n = {
                        from: t,
                        to: t + 1
                    } : this.matches.push(1, t)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferPos) && (n = null), n
                }
            }
            "undefined" != typeof Symbol && (eV.prototype[Symbol.iterator] = function () {
                return this
            });
            let eY = {
                    from: -1,
                    to: -1,
                    match: /.*/.exec("")
                },
                eD = "gm" + (null == /x/.unicode ? "" : "u");
            class ej {
                constructor(e, t, n, r = 0, i = e.length) {
                    if (this.text = e, this.to = i, this.curLine = "", this.done = !1, this.value = eY, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new eI(e, t, n, r, i);
                    this.re = new RegExp(t, eD + ((null == n ? void 0 : n.ignoreCase) ? "i" : "")), this.test = null == n ? void 0 : n.test, this.iter = e.iter();
                    let s = e.lineAt(r);
                    this.curLineStart = s.from, this.matchPos = eZ(e, r), this.getLine(this.curLineStart)
                }
                getLine(e) {
                    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
                }
                nextLine() {
                    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
                }
                next() {
                    for (let e = this.matchPos - this.curLineStart;;) {
                        this.re.lastIndex = e;
                        let t = this.matchPos <= this.to && this.re.exec(this.curLine);
                        if (t) {
                            let n = this.curLineStart + t.index,
                                r = n + t[0].length;
                            if (this.matchPos = eZ(this.text, r + (n == r ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, t))) return this.value = {
                                from: n,
                                to: r,
                                match: t
                            }, this;
                            e = this.matchPos - this.curLineStart
                        } else {
                            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
                            this.nextLine(), e = 0
                        }
                    }
                }
            }
            let eM = new WeakMap;
            class e_ {
                constructor(e, t) {
                    this.from = e, this.text = t
                }
                get to() {
                    return this.from + this.text.length
                }
                static get(e, t, n) {
                    let r = eM.get(e);
                    if (!r || r.from >= n || r.to <= t) {
                        let r = new e_(t, e.sliceString(t, n));
                        return eM.set(e, r), r
                    }
                    if (r.from == t && r.to == n) return r;
                    let {
                        text: i,
                        from: s
                    } = r;
                    return s > t && (i = e.sliceString(t, s) + i, s = t), r.to < n && (i += e.sliceString(r.to, n)), eM.set(e, new e_(s, i)), new e_(t, i.slice(t - s, n - s))
                }
            }
            class eI {
                constructor(e, t, n, r, i) {
                    this.text = e, this.to = i, this.done = !1, this.value = eY, this.matchPos = eZ(e, r), this.re = new RegExp(t, eD + ((null == n ? void 0 : n.ignoreCase) ? "i" : "")), this.test = null == n ? void 0 : n.test, this.flat = e_.get(e, r, this.chunkEnd(r + 5e3))
                }
                chunkEnd(e) {
                    return e >= this.to ? this.to : this.text.lineAt(e).to
                }
                next() {
                    for (;;) {
                        let e = this.re.lastIndex = this.matchPos - this.flat.from,
                            t = this.re.exec(this.flat.text);
                        if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
                            let e = this.flat.from + t.index,
                                n = e + t[0].length;
                            if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(e, n, t))) return this.value = {
                                from: e,
                                to: n,
                                match: t
                            }, this.matchPos = eZ(this.text, n + (e == n ? 1 : 0)), this
                        }
                        if (this.flat.to == this.to) return this.done = !0, this;
                        this.flat = e_.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
                    }
                }
            }

            function eZ(e, t) {
                if (t >= e.length) return t;
                let n = e.lineAt(t),
                    r;
                for (; t < n.to && (r = n.text.charCodeAt(t - n.from)) >= 56320 && r < 57344;) t++;
                return t
            }

            function eG(e) {
                let t = eE("input", {
                    class: "cm-textfield",
                    name: "line"
                });

                function n() {
                    let n = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
                    if (!n) return;
                    let {
                        state: r
                    } = e, i = r.doc.lineAt(r.selection.main.head), [, o, a, l, c] = n, h = l ? +l.slice(1) : 0, u = a ? +a : i.number;
                    if (a && c) {
                        let e = u / 100;
                        o && (e = e * ("-" == o ? -1 : 1) + i.number / r.doc.lines), u = Math.round(r.doc.lines * e)
                    } else a && o && (u = u * ("-" == o ? -1 : 1) + i.number);
                    let f = r.doc.line(Math.max(1, Math.min(r.doc.lines, u)));
                    e.dispatch({
                        effects: eN.of(!1),
                        selection: s.jT.cursor(f.from + Math.max(0, Math.min(h, f.length))),
                        scrollIntoView: !0
                    }), e.focus()
                }
                return {
                    dom: eE("form", {
                        class: "cm-gotoLine",
                        onkeydown: t => {
                            27 == t.keyCode ? (t.preventDefault(), e.dispatch({
                                effects: eN.of(!1)
                            }), e.focus()) : 13 == t.keyCode && (t.preventDefault(), n())
                        },
                        onsubmit: e => {
                            e.preventDefault(), n()
                        }
                    }, eE("label", e.state.phrase("Go to line"), ": ", t), " ", eE("button", {
                        class: "cm-button",
                        type: "submit"
                    }, e.state.phrase("go")))
                }
            }
            "undefined" != typeof Symbol && (ej.prototype[Symbol.iterator] = eI.prototype[Symbol.iterator] = function () {
                return this
            });
            let eN = s.Py.define(),
                eU = s.QQ.define({
                    create: () => !0,
                    update(e, t) {
                        for (let n of t.effects) n.is(eN) && (e = n.value);
                        return e
                    },
                    provide: e => o.mH.from(e, e => e ? eG : null)
                }),
                ez = o.tk.baseTheme({
                    ".cm-panel.cm-gotoLine": {
                        padding: "2px 6px 4px",
                        "& label": {
                            fontSize: "80%"
                        }
                    }
                }),
                eB = {
                    highlightWordAroundCursor: !1,
                    minSelectionLength: 1,
                    maxMatches: 100,
                    wholeWords: !1
                },
                eL = s.r$.define({
                    combine: e => (0, s.BO)(e, eB, {
                        highlightWordAroundCursor: (e, t) => e || t,
                        minSelectionLength: Math.min,
                        maxMatches: Math.min
                    })
                }),
                eF = o.p.mark({
                    class: "cm-selectionMatch"
                }),
                eJ = o.p.mark({
                    class: "cm-selectionMatch cm-selectionMatch-main"
                });

            function eH(e, t, n, r) {
                return (0 == n || e(t.sliceDoc(n - 1, n)) != s.D0.Word) && (r == t.doc.length || e(t.sliceDoc(r, r + 1)) != s.D0.Word)
            }
            let eK = o.lg.fromClass(class {
                    constructor(e) {
                        this.decorations = this.getDeco(e)
                    }
                    update(e) {
                        (e.selectionSet || e.docChanged || e.viewportChanged) && (this.decorations = this.getDeco(e.view))
                    }
                    getDeco(e) {
                        let t = e.state.facet(eL),
                            {
                                state: n
                            } = e,
                            r = n.selection;
                        if (r.ranges.length > 1) return o.p.none;
                        let i = r.main,
                            a, l = null;
                        if (i.empty) {
                            if (!t.highlightWordAroundCursor) return o.p.none;
                            let e = n.wordAt(i.head);
                            if (!e) return o.p.none;
                            l = n.charCategorizer(i.head), a = n.sliceDoc(e.from, e.to)
                        } else {
                            let e = i.to - i.from;
                            if (e < t.minSelectionLength || e > 200) return o.p.none;
                            if (t.wholeWords) {
                                var c, h, u;
                                if (a = n.sliceDoc(i.from, i.to), !(eH(l = n.charCategorizer(i.head), n, i.from, i.to) && (c = l, h = i.from, u = i.to, c(n.sliceDoc(h, h + 1)) == s.D0.Word && c(n.sliceDoc(u - 1, u)) == s.D0.Word))) return o.p.none
                            } else if (!(a = n.sliceDoc(i.from, i.to).trim())) return o.p.none
                        }
                        let f = [];
                        for (let r of e.visibleRanges) {
                            let e = new eV(n.doc, a, r.from, r.to);
                            for (; !e.next().done;) {
                                let {
                                    from: r,
                                    to: s
                                } = e.value;
                                if ((!l || eH(l, n, r, s)) && (i.empty && r <= i.from && s >= i.to ? f.push(eJ.range(r, s)) : (r >= i.to || s <= i.from) && f.push(eF.range(r, s)), f.length > t.maxMatches)) return o.p.none
                            }
                        }
                        return o.p.set(f)
                    }
                }, {
                    decorations: e => e.decorations
                }),
                e0 = o.tk.baseTheme({
                    ".cm-selectionMatch": {
                        backgroundColor: "#99ff7780"
                    },
                    ".cm-searchMatch .cm-selectionMatch": {
                        backgroundColor: "transparent"
                    }
                }),
                e1 = ({
                    state: e,
                    dispatch: t
                }) => {
                    let {
                        selection: n
                    } = e, r = s.jT.create(n.ranges.map(t => e.wordAt(t.head) || s.jT.cursor(t.head)), n.mainIndex);
                    return !r.eq(n) && (t(e.update({
                        selection: r
                    })), !0)
                },
                e2 = s.r$.define({
                    combine: e => (0, s.BO)(e, {
                        top: !1,
                        caseSensitive: !1,
                        literal: !1,
                        regexp: !1,
                        wholeWord: !1,
                        createPanel: e => new tb(e),
                        scrollToMatch: e => o.tk.scrollIntoView(e)
                    })
                });
            class e5 {
                constructor(e) {
                    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || function (e) {
                        try {
                            return new RegExp(e, eD), !0
                        } catch (e) {
                            return !1
                        }
                    }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord
                }
                unquote(e) {
                    return this.literal ? e : e.replace(/\\([nrt\\])/g, (e, t) => "n" == t ? "\n" : "r" == t ? "\r" : "t" == t ? "	" : "\\")
                }
                eq(e) {
                    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord
                }
                create() {
                    return this.regexp ? new te(this) : new e3(this)
                }
                getCursor(e, t = 0, n) {
                    let r = e.doc ? e : s.yy.create({
                        doc: e
                    });
                    return null == n && (n = r.doc.length), this.regexp ? e7(this, r, t, n) : e8(this, r, t, n)
                }
            }
            class e4 {
                constructor(e) {
                    this.spec = e
                }
            }

            function e8(e, t, n, r) {
                var i, o;
                return new eV(t.doc, e.unquoted, n, r, e.caseSensitive ? void 0 : e => e.toLowerCase(), e.wholeWord ? (i = t.doc, o = t.charCategorizer(t.selection.main.head), (e, t, n, r) => ((r > e || r + n.length < t) && (r = Math.max(0, e - 2), n = i.sliceString(r, Math.min(i.length, t + 2))), (o(e9(n, e - r)) != s.D0.Word || o(e6(n, e - r)) != s.D0.Word) && (o(e6(n, t - r)) != s.D0.Word || o(e9(n, t - r)) != s.D0.Word))) : void 0)
            }
            class e3 extends e4 {
                constructor(e) {
                    super(e)
                }
                nextMatch(e, t, n) {
                    let r = e8(this.spec, e, n, e.doc.length).nextOverlapping();
                    return r.done && (r = e8(this.spec, e, 0, t).nextOverlapping()), r.done ? null : r.value
                }
                prevMatchInRange(e, t, n) {
                    for (let r = n;;) {
                        let n = Math.max(t, r - 1e4 - this.spec.unquoted.length),
                            i = e8(this.spec, e, n, r),
                            s = null;
                        for (; !i.nextOverlapping().done;) s = i.value;
                        if (s) return s;
                        if (n == t) return null;
                        r -= 1e4
                    }
                }
                prevMatch(e, t, n) {
                    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length)
                }
                getReplacement(e) {
                    return this.spec.unquote(this.spec.replace)
                }
                matchAll(e, t) {
                    let n = e8(this.spec, e, 0, e.doc.length),
                        r = [];
                    for (; !n.next().done;) {
                        if (r.length >= t) return null;
                        r.push(n.value)
                    }
                    return r
                }
                highlight(e, t, n, r) {
                    let i = e8(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
                    for (; !i.next().done;) r(i.value.from, i.value.to)
                }
            }

            function e7(e, t, n, r) {
                var i;
                return new ej(t.doc, e.search, {
                    ignoreCase: !e.caseSensitive,
                    test: e.wholeWord ? (i = t.charCategorizer(t.selection.main.head), (e, t, n) => !n[0].length || (i(e9(n.input, n.index)) != s.D0.Word || i(e6(n.input, n.index)) != s.D0.Word) && (i(e6(n.input, n.index + n[0].length)) != s.D0.Word || i(e9(n.input, n.index + n[0].length)) != s.D0.Word)) : void 0
                }, n, r)
            }

            function e9(e, t) {
                return e.slice((0, s.cp)(e, t, !1), t)
            }

            function e6(e, t) {
                return e.slice(t, (0, s.cp)(e, t))
            }
            class te extends e4 {
                nextMatch(e, t, n) {
                    let r = e7(this.spec, e, n, e.doc.length).next();
                    return r.done && (r = e7(this.spec, e, 0, t).next()), r.done ? null : r.value
                }
                prevMatchInRange(e, t, n) {
                    for (let r = 1;; r++) {
                        let i = Math.max(t, n - 1e4 * r),
                            s = e7(this.spec, e, i, n),
                            o = null;
                        for (; !s.next().done;) o = s.value;
                        if (o && (i == t || o.from > i + 10)) return o;
                        if (i == t) return null
                    }
                }
                prevMatch(e, t, n) {
                    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length)
                }
                getReplacement(e) {
                    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (t, n) => "$" == n ? "$" : "&" == n ? e.match[0] : "0" != n && +n < e.match.length ? e.match[n] : t))
                }
                matchAll(e, t) {
                    let n = e7(this.spec, e, 0, e.doc.length),
                        r = [];
                    for (; !n.next().done;) {
                        if (r.length >= t) return null;
                        r.push(n.value)
                    }
                    return r
                }
                highlight(e, t, n, r) {
                    let i = e7(this.spec, e, Math.max(0, t - 250), Math.min(n + 250, e.doc.length));
                    for (; !i.next().done;) r(i.value.from, i.value.to)
                }
            }
            let tt = s.Py.define(),
                tn = s.Py.define(),
                tr = s.QQ.define({
                    create: e => new ti(tO(e).create(), null),
                    update(e, t) {
                        for (let n of t.effects) n.is(tt) ? e = new ti(n.value.create(), e.panel) : n.is(tn) && (e = new ti(e.query, n.value ? td : null));
                        return e
                    },
                    provide: e => o.mH.from(e, e => e.panel)
                });
            class ti {
                constructor(e, t) {
                    this.query = e, this.panel = t
                }
            }
            let ts = o.p.mark({
                    class: "cm-searchMatch"
                }),
                to = o.p.mark({
                    class: "cm-searchMatch cm-searchMatch-selected"
                }),
                ta = o.lg.fromClass(class {
                    constructor(e) {
                        this.view = e, this.decorations = this.highlight(e.state.field(tr))
                    }
                    update(e) {
                        let t = e.state.field(tr);
                        (t != e.startState.field(tr) || e.docChanged || e.selectionSet || e.viewportChanged) && (this.decorations = this.highlight(t))
                    }
                    highlight({
                        query: e,
                        panel: t
                    }) {
                        if (!t || !e.spec.valid) return o.p.none;
                        let {
                            view: n
                        } = this, r = new s.f_;
                        for (let t = 0, i = n.visibleRanges, s = i.length; t < s; t++) {
                            let {
                                from: o,
                                to: a
                            } = i[t];
                            for (; t < s - 1 && a > i[t + 1].from - 500;) a = i[++t].to;
                            e.highlight(n.state, o, a, (e, t) => {
                                let i = n.state.selection.ranges.some(n => n.from == e && n.to == t);
                                r.add(e, t, i ? to : ts)
                            })
                        }
                        return r.finish()
                    }
                }, {
                    decorations: e => e.decorations
                });

            function tl(e) {
                return t => {
                    let n = t.state.field(tr, !1);
                    return n && n.query.spec.valid ? e(t, n) : tx(t)
                }
            }
            let tc = tl((e, {
                    query: t
                }) => {
                    let {
                        to: n
                    } = e.state.selection.main, r = t.nextMatch(e.state, n, n);
                    if (!r) return !1;
                    let i = s.jT.single(r.from, r.to),
                        o = e.state.facet(e2);
                    return e.dispatch({
                        selection: i,
                        effects: [tT(e, r), o.scrollToMatch(i.main, e)],
                        userEvent: "select.search"
                    }), tg(e), !0
                }),
                th = tl((e, {
                    query: t
                }) => {
                    let {
                        state: n
                    } = e, {
                        from: r
                    } = n.selection.main, i = t.prevMatch(n, r, r);
                    if (!i) return !1;
                    let o = s.jT.single(i.from, i.to),
                        a = e.state.facet(e2);
                    return e.dispatch({
                        selection: o,
                        effects: [tT(e, i), a.scrollToMatch(o.main, e)],
                        userEvent: "select.search"
                    }), tg(e), !0
                }),
                tu = tl((e, {
                    query: t
                }) => {
                    let n = t.matchAll(e.state, 1e3);
                    return !!n && !!n.length && (e.dispatch({
                        selection: s.jT.create(n.map(e => s.jT.range(e.from, e.to))),
                        userEvent: "select.search.matches"
                    }), !0)
                }),
                tf = tl((e, {
                    query: t
                }) => {
                    let {
                        state: n
                    } = e, {
                        from: r,
                        to: i
                    } = n.selection.main;
                    if (n.readOnly) return !1;
                    let a = t.nextMatch(n, r, r);
                    if (!a) return !1;
                    let l = [],
                        c, h, u = [];
                    if (a.from == r && a.to == i && (h = n.toText(t.getReplacement(a)), l.push({
                            from: a.from,
                            to: a.to,
                            insert: h
                        }), a = t.nextMatch(n, a.from, a.to), u.push(o.tk.announce.of(n.phrase("replaced match on line $", n.doc.lineAt(r).number) + "."))), a) {
                        let t = 0 == l.length || l[0].from >= a.to ? 0 : a.to - a.from - h.length;
                        c = s.jT.single(a.from - t, a.to - t), u.push(tT(e, a)), u.push(n.facet(e2).scrollToMatch(c.main, e))
                    }
                    return e.dispatch({
                        changes: l,
                        selection: c,
                        effects: u,
                        userEvent: "input.replace"
                    }), !0
                }),
                tp = tl((e, {
                    query: t
                }) => {
                    if (e.state.readOnly) return !1;
                    let n = t.matchAll(e.state, 1e9).map(e => {
                        let {
                            from: n,
                            to: r
                        } = e;
                        return {
                            from: n,
                            to: r,
                            insert: t.getReplacement(e)
                        }
                    });
                    if (!n.length) return !1;
                    let r = e.state.phrase("replaced $ matches", n.length) + ".";
                    return e.dispatch({
                        changes: n,
                        effects: o.tk.announce.of(r),
                        userEvent: "input.replace.all"
                    }), !0
                });

            function td(e) {
                return e.state.facet(e2).createPanel(e)
            }

            function tO(e, t) {
                var n, r, i, s, o;
                let a = e.selection.main,
                    l = a.empty || a.to > a.from + 100 ? "" : e.sliceDoc(a.from, a.to);
                if (t && !l) return t;
                let c = e.facet(e2);
                return new e5({
                    search: (null !== (n = null == t ? void 0 : t.literal) && void 0 !== n ? n : c.literal) ? l : l.replace(/\n/g, "\\n"),
                    caseSensitive: null !== (r = null == t ? void 0 : t.caseSensitive) && void 0 !== r ? r : c.caseSensitive,
                    literal: null !== (i = null == t ? void 0 : t.literal) && void 0 !== i ? i : c.literal,
                    regexp: null !== (s = null == t ? void 0 : t.regexp) && void 0 !== s ? s : c.regexp,
                    wholeWord: null !== (o = null == t ? void 0 : t.wholeWord) && void 0 !== o ? o : c.wholeWord
                })
            }

            function tm(e) {
                let t = (0, o.Sd)(e, td);
                return t && t.dom.querySelector("[main-field]")
            }

            function tg(e) {
                let t = tm(e);
                t && t == e.root.activeElement && t.select()
            }
            let tx = e => {
                    let t = e.state.field(tr, !1);
                    if (t && t.panel) {
                        let n = tm(e);
                        if (n && n != e.root.activeElement) {
                            let r = tO(e.state, t.query.spec);
                            r.valid && e.dispatch({
                                effects: tt.of(r)
                            }), n.focus(), n.select()
                        }
                    } else e.dispatch({
                        effects: [tn.of(!0), t ? tt.of(tO(e.state, t.query.spec)) : s.Py.appendConfig.of(tP)]
                    });
                    return !0
                },
                tS = e => {
                    let t = e.state.field(tr, !1);
                    if (!t || !t.panel) return !1;
                    let n = (0, o.Sd)(e, td);
                    return n && n.dom.contains(e.root.activeElement) && e.focus(), e.dispatch({
                        effects: tn.of(!1)
                    }), !0
                },
                ty = [{
                    key: "Mod-f",
                    run: tx,
                    scope: "editor search-panel"
                }, {
                    key: "F3",
                    run: tc,
                    shift: th,
                    scope: "editor search-panel",
                    preventDefault: !0
                }, {
                    key: "Mod-g",
                    run: tc,
                    shift: th,
                    scope: "editor search-panel",
                    preventDefault: !0
                }, {
                    key: "Escape",
                    run: tS,
                    scope: "editor search-panel"
                }, {
                    key: "Mod-Shift-l",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        let n = e.selection;
                        if (n.ranges.length > 1 || n.main.empty) return !1;
                        let {
                            from: r,
                            to: i
                        } = n.main, o = [], a = 0;
                        for (let t = new eV(e.doc, e.sliceDoc(r, i)); !t.next().done;) {
                            if (o.length > 1e3) return !1;
                            t.value.from == r && (a = o.length), o.push(s.jT.range(t.value.from, t.value.to))
                        }
                        return t(e.update({
                            selection: s.jT.create(o, a),
                            userEvent: "select.search.matches"
                        })), !0
                    }
                }, {
                    key: "Alt-g",
                    run: e => {
                        let t = (0, o.Sd)(e, eG);
                        if (!t) {
                            let n = [eN.of(!0)];
                            null == e.state.field(eU, !1) && n.push(s.Py.appendConfig.of([eU, ez])), e.dispatch({
                                effects: n
                            }), t = (0, o.Sd)(e, eG)
                        }
                        return t && t.dom.querySelector("input").focus(), !0
                    }
                }, {
                    key: "Mod-d",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        let {
                            ranges: n
                        } = e.selection;
                        if (n.some(e => e.from === e.to)) return e1({
                            state: e,
                            dispatch: t
                        });
                        let r = e.sliceDoc(n[0].from, n[0].to);
                        if (e.selection.ranges.some(t => e.sliceDoc(t.from, t.to) != r)) return !1;
                        let i = function (e, t) {
                            let {
                                main: n,
                                ranges: r
                            } = e.selection, i = e.wordAt(n.head), s = i && i.from == n.from && i.to == n.to;
                            for (let n = !1, i = new eV(e.doc, t, r[r.length - 1].to);;)
                                if (i.next(), i.done) {
                                    if (n) return null;
                                    i = new eV(e.doc, t, 0, Math.max(0, r[r.length - 1].from - 1)), n = !0
                                } else {
                                    if (n && r.some(e => e.from == i.value.from)) continue;
                                    if (s) {
                                        let t = e.wordAt(i.value.from);
                                        if (!t || t.from != i.value.from || t.to != i.value.to) continue
                                    }
                                    return i.value
                                }
                        }(e, r);
                        return !!i && (t(e.update({
                            selection: e.selection.addRange(s.jT.range(i.from, i.to), !1),
                            effects: o.tk.scrollIntoView(i.to)
                        })), !0)
                    },
                    preventDefault: !0
                }];
            class tb {
                constructor(e) {
                    this.view = e;
                    let t = this.query = e.state.field(tr).query.spec;

                    function n(e, t, n) {
                        return eE("button", {
                            class: "cm-button",
                            name: e,
                            onclick: t,
                            type: "button"
                        }, n)
                    }
                    this.commit = this.commit.bind(this), this.searchField = eE("input", {
                        value: t.search,
                        placeholder: tv(e, "Find"),
                        "aria-label": tv(e, "Find"),
                        class: "cm-textfield",
                        name: "search",
                        form: "",
                        "main-field": "true",
                        onchange: this.commit,
                        onkeyup: this.commit
                    }), this.replaceField = eE("input", {
                        value: t.replace,
                        placeholder: tv(e, "Replace"),
                        "aria-label": tv(e, "Replace"),
                        class: "cm-textfield",
                        name: "replace",
                        form: "",
                        onchange: this.commit,
                        onkeyup: this.commit
                    }), this.caseField = eE("input", {
                        type: "checkbox",
                        name: "case",
                        form: "",
                        checked: t.caseSensitive,
                        onchange: this.commit
                    }), this.reField = eE("input", {
                        type: "checkbox",
                        name: "re",
                        form: "",
                        checked: t.regexp,
                        onchange: this.commit
                    }), this.wordField = eE("input", {
                        type: "checkbox",
                        name: "word",
                        form: "",
                        checked: t.wholeWord,
                        onchange: this.commit
                    }), this.dom = eE("div", {
                        onkeydown: e => this.keydown(e),
                        class: "cm-search"
                    }, [this.searchField, n("next", () => tc(e), [tv(e, "next")]), n("prev", () => th(e), [tv(e, "previous")]), n("select", () => tu(e), [tv(e, "all")]), eE("label", null, [this.caseField, tv(e, "match case")]), eE("label", null, [this.reField, tv(e, "regexp")]), eE("label", null, [this.wordField, tv(e, "by word")]), ...e.state.readOnly ? [] : [eE("br"), this.replaceField, n("replace", () => tf(e), [tv(e, "replace")]), n("replaceAll", () => tp(e), [tv(e, "replace all")])], eE("button", {
                        name: "close",
                        onclick: () => tS(e),
                        "aria-label": tv(e, "close"),
                        type: "button"
                    }, ["\xd7"])])
                }
                commit() {
                    let e = new e5({
                        search: this.searchField.value,
                        caseSensitive: this.caseField.checked,
                        regexp: this.reField.checked,
                        wholeWord: this.wordField.checked,
                        replace: this.replaceField.value
                    });
                    e.eq(this.query) || (this.query = e, this.view.dispatch({
                        effects: tt.of(e)
                    }))
                }
                keydown(e) {
                    (0, o.$1)(this.view, e, "search-panel") ? e.preventDefault(): 13 == e.keyCode && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? th : tc)(this.view)) : 13 == e.keyCode && e.target == this.replaceField && (e.preventDefault(), tf(this.view))
                }
                update(e) {
                    for (let t of e.transactions)
                        for (let e of t.effects) e.is(tt) && !e.value.eq(this.query) && this.setQuery(e.value)
                }
                setQuery(e) {
                    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord
                }
                mount() {
                    this.searchField.select()
                }
                get pos() {
                    return 80
                }
                get top() {
                    return this.view.state.facet(e2).top
                }
            }

            function tv(e, t) {
                return e.state.phrase(t)
            }
            let tw = /[\s\.,:;?!]/;

            function tT(e, {
                from: t,
                to: n
            }) {
                let r = e.state.doc.lineAt(t),
                    i = e.state.doc.lineAt(n).to,
                    s = Math.max(r.from, t - 30),
                    a = Math.min(i, n + 30),
                    l = e.state.sliceDoc(s, a);
                if (s != r.from) {
                    for (let e = 0; e < 30; e++)
                        if (!tw.test(l[e + 1]) && tw.test(l[e])) {
                            l = l.slice(e);
                            break
                        }
                }
                if (a != i) {
                    for (let e = l.length - 1; e > l.length - 30; e--)
                        if (!tw.test(l[e - 1]) && tw.test(l[e])) {
                            l = l.slice(0, e);
                            break
                        }
                }
                return o.tk.announce.of(`${e.state.phrase("current match")}. ${l} ${e.state.phrase("on line")} ${r.number}.`)
            }
            let tk = o.tk.baseTheme({
                    ".cm-panel.cm-search": {
                        padding: "2px 6px 4px",
                        position: "relative",
                        "& [name=close]": {
                            position: "absolute",
                            top: "0",
                            right: "4px",
                            backgroundColor: "inherit",
                            border: "none",
                            font: "inherit",
                            padding: 0,
                            margin: 0
                        },
                        "& input, & button, & label": {
                            margin: ".2em .6em .2em 0"
                        },
                        "& input[type=checkbox]": {
                            marginRight: ".2em"
                        },
                        "& label": {
                            fontSize: "80%",
                            whiteSpace: "pre"
                        }
                    },
                    "&light .cm-searchMatch": {
                        backgroundColor: "#ffff0054"
                    },
                    "&dark .cm-searchMatch": {
                        backgroundColor: "#00ffff8a"
                    },
                    "&light .cm-searchMatch-selected": {
                        backgroundColor: "#ff6a0054"
                    },
                    "&dark .cm-searchMatch-selected": {
                        backgroundColor: "#ff00ff8a"
                    }
                }),
                tP = [tr, s.Wl.lowest(ta), tk];
            var tQ = n(6962);
            class tq {
                constructor(e, t, n) {
                    this.from = e, this.to = t, this.diagnostic = n
                }
            }
            class t$ {
                constructor(e, t, n) {
                    this.diagnostics = e, this.panel = t, this.selected = n
                }
                static init(e, t, n) {
                    let r = e,
                        i = n.facet(tj).markerFilter;
                    i && (r = i(r));
                    let s = o.p.set(r.map(e => e.from == e.to || e.from == e.to - 1 && n.doc.lineAt(e.from).to == e.from ? o.p.widget({
                        widget: new tI(e),
                        diagnostic: e
                    }).range(e.from) : o.p.mark({
                        attributes: {
                            class: "cm-lintRange cm-lintRange-" + e.severity + (e.markClass ? " " + e.markClass : "")
                        },
                        diagnostic: e
                    }).range(e.from, e.to)), !0);
                    return new t$(s, t, tR(s))
                }
            }

            function tR(e, t = null, n = 0) {
                let r = null;
                return e.between(n, 1e9, (e, n, {
                    spec: i
                }) => {
                    if (!t || i.diagnostic == t) return r = new tq(e, n, i.diagnostic), !1
                }), r
            }

            function tW(e, t) {
                let n = e.startState.doc.lineAt(t.pos);
                return !!(e.effects.some(e => e.is(tC)) || e.changes.touchesRange(n.from, n.to))
            }
            let tC = s.Py.define(),
                tX = s.Py.define(),
                tE = s.Py.define(),
                tA = s.QQ.define({
                    create: () => new t$(o.p.none, null, null),
                    update(e, t) {
                        if (t.docChanged) {
                            let n = e.diagnostics.map(t.changes),
                                r = null;
                            if (e.selected) {
                                let i = t.changes.mapPos(e.selected.from, 1);
                                r = tR(n, e.selected.diagnostic, i) || tR(n, null, i)
                            }
                            e = new t$(n, e.panel, r)
                        }
                        for (let n of t.effects) n.is(tC) ? e = t$.init(n.value, e.panel, t.state) : n.is(tX) ? e = new t$(e.diagnostics, n.value ? tG.open : null, e.selected) : n.is(tE) && (e = new t$(e.diagnostics, e.panel, n.value));
                        return e
                    },
                    provide: e => [o.mH.from(e, e => e.panel), o.tk.decorations.from(e, e => e.diagnostics)]
                }),
                tV = o.p.mark({
                    class: "cm-lintRange cm-lintRange-active"
                }),
                tY = e => {
                    let t = e.state.field(tA, !1);
                    return !!t && !!t.panel && (e.dispatch({
                        effects: tX.of(!1)
                    }), !0)
                },
                tD = [{
                    key: "Mod-Shift-m",
                    run: e => {
                        var t, n;
                        let r = e.state.field(tA, !1);
                        r && r.panel || e.dispatch({
                            effects: (t = e.state, n = [tX.of(!0)], t.field(tA, !1) ? n : n.concat(s.Py.appendConfig.of(tB)))
                        });
                        let i = (0, o.Sd)(e, tG.open);
                        return i && i.dom.querySelector(".cm-panel-lint ul").focus(), !0
                    },
                    preventDefault: !0
                }, {
                    key: "F8",
                    run: e => {
                        let t = e.state.field(tA, !1);
                        if (!t) return !1;
                        let n = e.state.selection.main,
                            r = t.diagnostics.iter(n.to + 1);
                        return (!!r.value || !!(r = t.diagnostics.iter(0)).value && (r.from != n.from || r.to != n.to)) && (e.dispatch({
                            selection: {
                                anchor: r.from,
                                head: r.to
                            },
                            scrollIntoView: !0
                        }), !0)
                    }
                }],
                tj = s.r$.define({
                    combine: e => Object.assign({
                        sources: e.map(e => e.source)
                    }, (0, s.BO)(e.map(e => e.config), {
                        delay: 750,
                        markerFilter: null,
                        tooltipFilter: null,
                        needsRefresh: null
                    }, {
                        needsRefresh: (e, t) => e ? t ? n => e(n) || t(n) : e : t
                    }))
                });

            function tM(e) {
                let t = [];
                if (e) e: for (let {
                        name: n
                    } of e) {
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e];
                        if (/[a-zA-Z]/.test(r) && !t.some(e => e.toLowerCase() == r.toLowerCase())) {
                            t.push(r);
                            continue e
                        }
                    }
                    t.push("")
                }
                return t
            }

            function t_(e, t, n) {
                var r;
                let i = n ? tM(t.actions) : [];
                return eE("li", {
                    class: "cm-diagnostic cm-diagnostic-" + t.severity
                }, eE("span", {
                    class: "cm-diagnosticText"
                }, t.renderMessage ? t.renderMessage() : t.message), null === (r = t.actions) || void 0 === r ? void 0 : r.map((n, r) => {
                    let s = !1,
                        o = r => {
                            if (r.preventDefault(), s) return;
                            s = !0;
                            let i = tR(e.state.field(tA).diagnostics, t);
                            i && n.apply(e, i.from, i.to)
                        },
                        {
                            name: a
                        } = n,
                        l = i[r] ? a.indexOf(i[r]) : -1,
                        c = l < 0 ? a : [a.slice(0, l), eE("u", a.slice(l, l + 1)), a.slice(l + 1)];
                    return eE("button", {
                        type: "button",
                        class: "cm-diagnosticAction",
                        onclick: o,
                        onmousedown: o,
                        "aria-label": ` Action: ${a}${l<0?"":` (access key "${i[r]})"`}.`
                    }, c)
                }), t.source && eE("div", {
                    class: "cm-diagnosticSource"
                }, t.source))
            }
            class tI extends o.l9 {
                constructor(e) {
                    super(), this.diagnostic = e
                }
                eq(e) {
                    return e.diagnostic == this.diagnostic
                }
                toDOM() {
                    return eE("span", {
                        class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
                    })
                }
            }
            class tZ {
                constructor(e, t) {
                    this.diagnostic = t, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = t_(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
                }
            }
            class tG {
                constructor(e) {
                    this.view = e, this.items = [], this.list = eE("ul", {
                        tabIndex: 0,
                        role: "listbox",
                        "aria-label": this.view.state.phrase("Diagnostics"),
                        onkeydown: t => {
                            if (27 == t.keyCode) tY(this.view), this.view.focus();
                            else if (38 == t.keyCode || 33 == t.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
                            else if (40 == t.keyCode || 34 == t.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
                            else if (36 == t.keyCode) this.moveSelection(0);
                            else if (35 == t.keyCode) this.moveSelection(this.items.length - 1);
                            else if (13 == t.keyCode) this.view.focus();
                            else {
                                if (!(t.keyCode >= 65) || !(t.keyCode <= 90) || !(this.selectedIndex >= 0)) return;
                                let {
                                    diagnostic: n
                                } = this.items[this.selectedIndex], r = tM(n.actions);
                                for (let i = 0; i < r.length; i++)
                                    if (r[i].toUpperCase().charCodeAt(0) == t.keyCode) {
                                        let t = tR(this.view.state.field(tA).diagnostics, n);
                                        t && n.actions[i].apply(e, t.from, t.to)
                                    }
                            }
                            t.preventDefault()
                        },
                        onclick: e => {
                            for (let t = 0; t < this.items.length; t++) this.items[t].dom.contains(e.target) && this.moveSelection(t)
                        }
                    }), this.dom = eE("div", {
                        class: "cm-panel-lint"
                    }, this.list, eE("button", {
                        type: "button",
                        name: "close",
                        "aria-label": this.view.state.phrase("close"),
                        onclick: () => tY(this.view)
                    }, "\xd7")), this.update()
                }
                get selectedIndex() {
                    let e = this.view.state.field(tA).selected;
                    if (!e) return -1;
                    for (let t = 0; t < this.items.length; t++)
                        if (this.items[t].diagnostic == e.diagnostic) return t;
                    return -1
                }
                update() {
                    let {
                        diagnostics: e,
                        selected: t
                    } = this.view.state.field(tA), n = 0, r = !1, i = null;
                    for (e.between(0, this.view.state.doc.length, (e, s, {
                            spec: o
                        }) => {
                            let a = -1,
                                l;
                            for (let e = n; e < this.items.length; e++)
                                if (this.items[e].diagnostic == o.diagnostic) {
                                    a = e;
                                    break
                                } a < 0 ? (l = new tZ(this.view, o.diagnostic), this.items.splice(n, 0, l), r = !0) : (l = this.items[a], a > n && (this.items.splice(n, a - n), r = !0)), t && l.diagnostic == t.diagnostic ? l.dom.hasAttribute("aria-selected") || (l.dom.setAttribute("aria-selected", "true"), i = l) : l.dom.hasAttribute("aria-selected") && l.dom.removeAttribute("aria-selected"), n++
                        }); n < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) r = !0, this.items.pop();
                    0 == this.items.length && (this.items.push(new tZ(this.view, {
                        from: -1,
                        to: -1,
                        severity: "info",
                        message: this.view.state.phrase("No diagnostics")
                    })), r = !0), i ? (this.list.setAttribute("aria-activedescendant", i.id), this.view.requestMeasure({
                        key: this,
                        read: () => ({
                            sel: i.dom.getBoundingClientRect(),
                            panel: this.list.getBoundingClientRect()
                        }),
                        write: ({
                            sel: e,
                            panel: t
                        }) => {
                            e.top < t.top ? this.list.scrollTop -= t.top - e.top : e.bottom > t.bottom && (this.list.scrollTop += e.bottom - t.bottom)
                        }
                    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync()
                }
                sync() {
                    let e = this.list.firstChild;

                    function t() {
                        let t = e;
                        e = t.nextSibling, t.remove()
                    }
                    for (let n of this.items)
                        if (n.dom.parentNode == this.list) {
                            for (; e != n.dom;) t();
                            e = n.dom.nextSibling
                        } else this.list.insertBefore(n.dom, e);
                    for (; e;) t()
                }
                moveSelection(e) {
                    if (this.selectedIndex < 0) return;
                    let t = tR(this.view.state.field(tA).diagnostics, this.items[e].diagnostic);
                    t && this.view.dispatch({
                        selection: {
                            anchor: t.from,
                            head: t.to
                        },
                        scrollIntoView: !0,
                        effects: tE.of(t)
                    })
                }
                static open(e) {
                    return new tG(e)
                }
            }

            function tN(e) {
                return function (e, t = 'viewBox="0 0 40 40"') {
                    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`
                }(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
            }
            let tU = o.tk.baseTheme({
                ".cm-diagnostic": {
                    padding: "3px 6px 3px 8px",
                    marginLeft: "-1px",
                    display: "block",
                    whiteSpace: "pre-wrap"
                },
                ".cm-diagnostic-error": {
                    borderLeft: "5px solid #d11"
                },
                ".cm-diagnostic-warning": {
                    borderLeft: "5px solid orange"
                },
                ".cm-diagnostic-info": {
                    borderLeft: "5px solid #999"
                },
                ".cm-diagnostic-hint": {
                    borderLeft: "5px solid #66d"
                },
                ".cm-diagnosticAction": {
                    font: "inherit",
                    border: "none",
                    padding: "2px 4px",
                    backgroundColor: "#444",
                    color: "white",
                    borderRadius: "3px",
                    marginLeft: "8px",
                    cursor: "pointer"
                },
                ".cm-diagnosticSource": {
                    fontSize: "70%",
                    opacity: .7
                },
                ".cm-lintRange": {
                    backgroundPosition: "left bottom",
                    backgroundRepeat: "repeat-x",
                    paddingBottom: "0.7px"
                },
                ".cm-lintRange-error": {
                    backgroundImage: tN("#d11")
                },
                ".cm-lintRange-warning": {
                    backgroundImage: tN("orange")
                },
                ".cm-lintRange-info": {
                    backgroundImage: tN("#999")
                },
                ".cm-lintRange-hint": {
                    backgroundImage: tN("#66d")
                },
                ".cm-lintRange-active": {
                    backgroundColor: "#ffdd9980"
                },
                ".cm-tooltip-lint": {
                    padding: 0,
                    margin: 0
                },
                ".cm-lintPoint": {
                    position: "relative",
                    "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "-2px",
                        borderLeft: "3px solid transparent",
                        borderRight: "3px solid transparent",
                        borderBottom: "4px solid #d11"
                    }
                },
                ".cm-lintPoint-warning": {
                    "&:after": {
                        borderBottomColor: "orange"
                    }
                },
                ".cm-lintPoint-info": {
                    "&:after": {
                        borderBottomColor: "#999"
                    }
                },
                ".cm-lintPoint-hint": {
                    "&:after": {
                        borderBottomColor: "#66d"
                    }
                },
                ".cm-panel.cm-panel-lint": {
                    position: "relative",
                    "& ul": {
                        maxHeight: "100px",
                        overflowY: "auto",
                        "& [aria-selected]": {
                            backgroundColor: "#ddd",
                            "& u": {
                                textDecoration: "underline"
                            }
                        },
                        "&:focus [aria-selected]": {
                            background_fallback: "#bdf",
                            backgroundColor: "Highlight",
                            color_fallback: "white",
                            color: "HighlightText"
                        },
                        "& u": {
                            textDecoration: "none"
                        },
                        padding: 0,
                        margin: 0
                    },
                    "& [name=close]": {
                        position: "absolute",
                        top: "0",
                        right: "2px",
                        background: "inherit",
                        border: "none",
                        font: "inherit",
                        padding: 0,
                        margin: 0
                    }
                }
            });
            o.SJ;
            let tz = s.Py.define(),
                tB = [tA, o.tk.decorations.compute([tA], e => {
                    let {
                        selected: t,
                        panel: n
                    } = e.field(tA);
                    return t && n && t.from != t.to ? o.p.set([tV.range(t.from, t.to)]) : o.p.none
                }), (0, o.bF)(function (e, t, n) {
                    let {
                        diagnostics: r
                    } = e.state.field(tA), i = [], s = 2e8, o = 0;
                    r.between(t - (n < 0 ? 1 : 0), t + (n > 0 ? 1 : 0), (e, r, {
                        spec: a
                    }) => {
                        t >= e && t <= r && (e == r || (t > e || n > 0) && (t < r || n < 0)) && (i.push(a.diagnostic), s = Math.min(e, s), o = Math.max(r, o))
                    });
                    let a = e.state.facet(tj).tooltipFilter;
                    return (a && (i = a(i)), i.length) ? {
                        pos: s,
                        end: o,
                        above: e.state.doc.lineAt(s).to < o,
                        create: () => {
                            var t;
                            return {
                                dom: (t = e, eE("ul", {
                                    class: "cm-tooltip-lint"
                                }, i.map(e => t_(t, e, !1))))
                            }
                        }
                    } : null
                }, {
                    hideOn: tW
                }), tU];
            var tL = function (e) {
                    void 0 === e && (e = {});
                    var t, n = [];
                    !1 !== e.closeBracketsKeymap && (n = n.concat(tQ.GA)), !1 !== e.defaultKeymap && (n = n.concat(eC)), !1 !== e.searchKeymap && (n = n.concat(ty)), !1 !== e.historyKeymap && (n = n.concat(X)), !1 !== e.foldKeymap && (n = n.concat(a.e7)), !1 !== e.completionKeymap && (n = n.concat(tQ.B1)), !1 !== e.lintKeymap && (n = n.concat(tD));
                    var r = [];
                    if (!1 !== e.lineNumbers && r.push((0, o.Eu)()), !1 !== e.highlightActiveLineGutter && r.push((0, o.HQ)()), !1 !== e.highlightSpecialChars && r.push((0, o.AE)()), !1 !== e.history && r.push(function (e = {}) {
                            return [S, x.of(e), o.tk.domEventHandlers({
                                beforeinput(e, t) {
                                    let n = "historyUndo" == e.inputType ? b : "historyRedo" == e.inputType ? v : null;
                                    return !!n && (e.preventDefault(), n(t))
                                }
                            })]
                        }()), !1 !== e.foldGutter && r.push((0, a.mi)()), !1 !== e.drawSelection && r.push((0, o.Uw)()), !1 !== e.dropCursor && r.push((0, o.qr)()), !1 !== e.allowMultipleSelections && r.push(s.yy.allowMultipleSelections.of(!0)), !1 !== e.indentOnInput && r.push((0, a.nY)()), !1 !== e.syntaxHighlighting && r.push((0, a.nF)(a.R_, {
                            fallback: !0
                        })), !1 !== e.bracketMatching && r.push((0, a.n$)()), !1 !== e.closeBrackets && r.push((0, tQ.vQ)()), !1 !== e.autocompletion && r.push((0, tQ.ys)()), !1 !== e.rectangularSelection && r.push((0, o.Zs)()), !1 !== e.crosshairCursor && r.push((0, o.S2)()), !1 !== e.highlightActiveLine && r.push((0, o.ZO)()), !1 !== e.highlightSelectionMatches) {
                        let e;
                        r.push((e = [e0, eK], t && e.push(eL.of(t)), e))
                    }
                    return e.tabSize && "number" == typeof e.tabSize && r.push(a.c.of(" ".repeat(e.tabSize))), r.concat([o.$f.of(n.flat())]).filter(Boolean)
                },
                tF = n(6634);
            let tJ = "#e06c75",
                tH = "#abb2bf",
                tK = "#7d8799",
                t0 = "#d19a66",
                t1 = "#2c313a",
                t2 = "#282c34",
                t5 = "#353a42",
                t4 = "#528bff",
                t8 = o.tk.theme({
                    "&": {
                        color: tH,
                        backgroundColor: t2
                    },
                    ".cm-content": {
                        caretColor: t4
                    },
                    ".cm-cursor, .cm-dropCursor": {
                        borderLeftColor: t4
                    },
                    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
                        backgroundColor: "#3E4451"
                    },
                    ".cm-panels": {
                        backgroundColor: "#21252b",
                        color: tH
                    },
                    ".cm-panels.cm-panels-top": {
                        borderBottom: "2px solid black"
                    },
                    ".cm-panels.cm-panels-bottom": {
                        borderTop: "2px solid black"
                    },
                    ".cm-searchMatch": {
                        backgroundColor: "#72a1ff59",
                        outline: "1px solid #457dff"
                    },
                    ".cm-searchMatch.cm-searchMatch-selected": {
                        backgroundColor: "#6199ff2f"
                    },
                    ".cm-activeLine": {
                        backgroundColor: "#6699ff0b"
                    },
                    ".cm-selectionMatch": {
                        backgroundColor: "#aafe661a"
                    },
                    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
                        backgroundColor: "#bad0f847"
                    },
                    ".cm-gutters": {
                        backgroundColor: t2,
                        color: tK,
                        border: "none"
                    },
                    ".cm-activeLineGutter": {
                        backgroundColor: t1
                    },
                    ".cm-foldPlaceholder": {
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#ddd"
                    },
                    ".cm-tooltip": {
                        border: "none",
                        backgroundColor: t5
                    },
                    ".cm-tooltip .cm-tooltip-arrow:before": {
                        borderTopColor: "transparent",
                        borderBottomColor: "transparent"
                    },
                    ".cm-tooltip .cm-tooltip-arrow:after": {
                        borderTopColor: t5,
                        borderBottomColor: t5
                    },
                    ".cm-tooltip-autocomplete": {
                        "& > ul > li[aria-selected]": {
                            backgroundColor: t1,
                            color: tH
                        }
                    }
                }, {
                    dark: !0
                }),
                t3 = a.Qf.define([{
                    tag: tF.pJ.keyword,
                    color: "#c678dd"
                }, {
                    tag: [tF.pJ.name, tF.pJ.deleted, tF.pJ.character, tF.pJ.propertyName, tF.pJ.macroName],
                    color: tJ
                }, {
                    tag: [tF.pJ.function(tF.pJ.variableName), tF.pJ.labelName],
                    color: "#61afef"
                }, {
                    tag: [tF.pJ.color, tF.pJ.constant(tF.pJ.name), tF.pJ.standard(tF.pJ.name)],
                    color: t0
                }, {
                    tag: [tF.pJ.definition(tF.pJ.name), tF.pJ.separator],
                    color: tH
                }, {
                    tag: [tF.pJ.typeName, tF.pJ.className, tF.pJ.number, tF.pJ.changed, tF.pJ.annotation, tF.pJ.modifier, tF.pJ.self, tF.pJ.namespace],
                    color: "#e5c07b"
                }, {
                    tag: [tF.pJ.operator, tF.pJ.operatorKeyword, tF.pJ.url, tF.pJ.escape, tF.pJ.regexp, tF.pJ.link, tF.pJ.special(tF.pJ.string)],
                    color: "#56b6c2"
                }, {
                    tag: [tF.pJ.meta, tF.pJ.comment],
                    color: tK
                }, {
                    tag: tF.pJ.strong,
                    fontWeight: "bold"
                }, {
                    tag: tF.pJ.emphasis,
                    fontStyle: "italic"
                }, {
                    tag: tF.pJ.strikethrough,
                    textDecoration: "line-through"
                }, {
                    tag: tF.pJ.link,
                    color: tK,
                    textDecoration: "underline"
                }, {
                    tag: tF.pJ.heading,
                    fontWeight: "bold",
                    color: tJ
                }, {
                    tag: [tF.pJ.atom, tF.pJ.bool, tF.pJ.special(tF.pJ.variableName)],
                    color: t0
                }, {
                    tag: [tF.pJ.processingInstruction, tF.pJ.string, tF.pJ.inserted],
                    color: "#98c379"
                }, {
                    tag: tF.pJ.invalid,
                    color: "#ffffff"
                }]),
                t7 = [t8, (0, a.nF)(t3)];
            var t9 = o.tk.theme({
                    "&": {
                        backgroundColor: "#fff"
                    }
                }, {
                    dark: !1
                }),
                t6 = function (e) {
                    void 0 === e && (e = {});
                    var {
                        indentWithTab: t = !0,
                        editable: n = !0,
                        readOnly: r = !1,
                        theme: i = "light",
                        placeholder: a = "",
                        basicSetup: l = !0
                    } = e, c = [];
                    switch (t && c.unshift(o.$f.of([eX])), l && ("boolean" == typeof l ? c.unshift(tL()) : c.unshift(tL(l))), a && c.unshift((0, o.W$)(a)), i) {
                        case "light":
                            c.push(t9);
                            break;
                        case "dark":
                            c.push(t7);
                            break;
                        case "none":
                            break;
                        default:
                            c.push(i)
                    }
                    return !1 === n && c.push(o.tk.editable.of(!1)), r && c.push(s.yy.readOnly.of(!0)), [...c]
                },
                ne = e => ({
                    line: e.state.doc.lineAt(e.state.selection.main.from),
                    lineCount: e.state.doc.lines,
                    lineBreak: e.state.lineBreak,
                    length: e.state.doc.length,
                    readOnly: e.state.readOnly,
                    tabSize: e.state.tabSize,
                    selection: e.state.selection,
                    selectionAsSingle: e.state.selection.asSingle().main,
                    ranges: e.state.selection.ranges,
                    selectionCode: e.state.sliceDoc(e.state.selection.main.from, e.state.selection.main.to),
                    selections: e.state.selection.ranges.map(t => e.state.sliceDoc(t.from, t.to)),
                    selectedText: e.state.selection.ranges.some(e => !e.empty)
                }),
                nt = s.q6.define(),
                nn = [],
                nr = n(9219),
                ni = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
                ns = (0, i.forwardRef)((e, t) => {
                    var {
                        className: n,
                        value: a = "",
                        selection: l,
                        extensions: c = [],
                        onChange: h,
                        onStatistics: u,
                        onCreateEditor: f,
                        onUpdate: p,
                        autoFocus: d,
                        theme: O = "light",
                        height: m,
                        minHeight: g,
                        maxHeight: x,
                        width: S,
                        minWidth: y,
                        maxWidth: b,
                        basicSetup: v,
                        placeholder: w,
                        indentWithTab: T,
                        editable: k,
                        readOnly: P,
                        root: Q,
                        initialState: q
                    } = e, $ = function (e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i
                    }(e, ni), R = (0, i.useRef)(null), {
                        state: W,
                        view: C,
                        container: X
                    } = function (e) {
                        var {
                            value: t,
                            selection: n,
                            onChange: r,
                            onStatistics: a,
                            onCreateEditor: l,
                            onUpdate: c,
                            extensions: h = nn,
                            autoFocus: u,
                            theme: f = "light",
                            height: p = "",
                            minHeight: d = "",
                            maxHeight: O = "",
                            placeholder: m = "",
                            width: g = "",
                            minWidth: x = "",
                            maxWidth: S = "",
                            editable: y = !0,
                            readOnly: b = !1,
                            indentWithTab: v = !0,
                            basicSetup: w = !0,
                            root: T,
                            initialState: k
                        } = e, [P, Q] = (0, i.useState)(), [q, $] = (0, i.useState)(), [R, W] = (0, i.useState)(), C = o.tk.theme({
                            "&": {
                                height: p,
                                minHeight: d,
                                maxHeight: O,
                                width: g,
                                minWidth: x,
                                maxWidth: S
                            },
                            "& .cm-scroller": {
                                height: "100% !important"
                            }
                        }), X = o.tk.updateListener.of(e => {
                            e.docChanged && "function" == typeof r && !e.transactions.some(e => e.annotation(nt)) && r(e.state.doc.toString(), e), a && a(ne(e))
                        }), E = t6({
                            theme: f,
                            editable: y,
                            readOnly: b,
                            placeholder: m,
                            indentWithTab: v,
                            basicSetup: w
                        }), A = [X, C, ...E];
                        return c && "function" == typeof c && A.push(o.tk.updateListener.of(c)), A = A.concat(h), (0, i.useEffect)(() => {
                            if (P && !R) {
                                var e = {
                                        doc: t,
                                        selection: n,
                                        extensions: A
                                    },
                                    r = k ? s.yy.fromJSON(k.json, e, k.fields) : s.yy.create(e);
                                if (W(r), !q) {
                                    var i = new o.tk({
                                        state: r,
                                        parent: P,
                                        root: T
                                    });
                                    $(i), l && l(i, r)
                                }
                            }
                            return () => {
                                q && (W(void 0), $(void 0))
                            }
                        }, [P, R]), (0, i.useEffect)(() => Q(e.container), [e.container]), (0, i.useEffect)(() => () => {
                            q && (q.destroy(), $(void 0))
                        }, [q]), (0, i.useEffect)(() => {
                            u && q && q.focus()
                        }, [u, q]), (0, i.useEffect)(() => {
                            q && q.dispatch({
                                effects: s.Py.reconfigure.of(A)
                            })
                        }, [f, h, p, d, O, g, x, S, m, y, b, v, w, r, c]), (0, i.useEffect)(() => {
                            if (void 0 !== t) {
                                var e = q ? q.state.doc.toString() : "";
                                q && t !== e && q.dispatch({
                                    changes: {
                                        from: 0,
                                        to: e.length,
                                        insert: t || ""
                                    },
                                    annotations: [nt.of(!0)]
                                })
                            }
                        }, [t, q]), {
                            state: R,
                            setState: W,
                            view: q,
                            setView: $,
                            container: P,
                            setContainer: Q
                        }
                    }({
                        container: R.current,
                        root: Q,
                        value: a,
                        autoFocus: d,
                        theme: O,
                        height: m,
                        minHeight: g,
                        maxHeight: x,
                        width: S,
                        minWidth: y,
                        maxWidth: b,
                        basicSetup: v,
                        placeholder: w,
                        indentWithTab: T,
                        editable: k,
                        readOnly: P,
                        selection: l,
                        onChange: h,
                        onStatistics: u,
                        onCreateEditor: f,
                        onUpdate: p,
                        extensions: c,
                        initialState: q
                    });
                    if ((0, i.useImperativeHandle)(t, () => ({
                            editor: R.current,
                            state: W,
                            view: C
                        }), [R, X, W, C]), "string" != typeof a) throw Error("value must be typeof string but got " + typeof a);
                    var E = "string" == typeof O ? "cm-theme-" + O : "cm-theme";
                    return (0, nr.jsx)("div", (0, r.Z)({
                        ref: R,
                        className: "" + E + (n ? " " + n : "")
                    }, $))
                });
            ns.displayName = "CodeMirror";
            var no = ns
        },
        8096: function (e, t, n) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "DraggableCore", {
                enumerable: !0,
                get: function () {
                    return u.default
                }
            }), t.default = void 0;
            var i = function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var i = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(i, o, a) : i[o] = e[o]
                        } return i.default = e, n && n.set(e, i), i
                }(n(2564)),
                s = d(n(1345)),
                o = d(n(7242)),
                a = d(n(1430)),
                l = n(668),
                c = n(1954),
                h = n(9427),
                u = d(n(259)),
                f = d(n(7380)),
                p = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (O = function (e) {
                    return e ? n : t
                })(e)
            }

            function m() {
                return (m = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach(function (t) {
                        T(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function T(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var k = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && b(e, t)
                }(d, e);
                var t, n, s, h = (t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function () {
                    var e, n = w(d);
                    if (t) {
                        var i = w(this).constructor;
                        e = Reflect.construct(n, arguments, i)
                    } else e = n.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        return v(e)
                    }(this, e)
                });

                function d(e) {
                    var t;
                    return ! function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, d), T(v(t = h.call(this, e)), "onDragStart", function (e, n) {
                        if ((0, f.default)("Draggable: onDragStart: %j", n), !1 === t.props.onStart(e, (0, c.createDraggableData)(v(t), n))) return !1;
                        t.setState({
                            dragging: !0,
                            dragged: !0
                        })
                    }), T(v(t), "onDrag", function (e, n) {
                        if (!t.state.dragging) return !1;
                        (0, f.default)("Draggable: onDrag: %j", n);
                        var r = (0, c.createDraggableData)(v(t), n),
                            i = {
                                x: r.x,
                                y: r.y
                            };
                        if (t.props.bounds) {
                            var s, o = i.x,
                                a = i.y;
                            i.x += t.state.slackX, i.y += t.state.slackY;
                            var l = function (e) {
                                    if (Array.isArray(e)) return e
                                }(s = (0, c.getBoundPosition)(v(t), i.x, i.y)) || function (e, t) {
                                    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var s = [],
                                            o = !0,
                                            a = !1;
                                        try {
                                            for (i = i.call(e); !(o = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); o = !0);
                                        } catch (e) {
                                            a = !0, r = e
                                        } finally {
                                            try {
                                                o || null == i.return || i.return()
                                            } finally {
                                                if (a) throw r
                                            }
                                        }
                                        return s
                                    }
                                }(s, 2) || function (e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return S(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                                    }
                                }(s, 2) || function () {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(),
                                h = l[0],
                                u = l[1];
                            i.x = h, i.y = u, i.slackX = t.state.slackX + (o - i.x), i.slackY = t.state.slackY + (a - i.y), r.x = i.x, r.y = i.y, r.deltaX = i.x - t.state.x, r.deltaY = i.y - t.state.y
                        }
                        if (!1 === t.props.onDrag(e, r)) return !1;
                        t.setState(i)
                    }), T(v(t), "onDragStop", function (e, n) {
                        if (!t.state.dragging || !1 === t.props.onStop(e, (0, c.createDraggableData)(v(t), n))) return !1;
                        (0, f.default)("Draggable: onDragStop: %j", n);
                        var r = {
                            dragging: !1,
                            slackX: 0,
                            slackY: 0
                        };
                        if (t.props.position) {
                            var i = t.props.position,
                                s = i.x,
                                o = i.y;
                            r.x = s, r.y = o
                        }
                        t.setState(r)
                    }), t.state = {
                        dragging: !1,
                        dragged: !1,
                        x: e.position ? e.position.x : e.defaultPosition.x,
                        y: e.position ? e.position.y : e.defaultPosition.y,
                        prevPropsPosition: x({}, e.position),
                        slackX: 0,
                        slackY: 0,
                        isElementSVG: !1
                    }, e.position && !(e.onDrag || e.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), t
                }
                return n = [{
                    key: "componentDidMount",
                    value: function () {
                        void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
                            isElementSVG: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.setState({
                            dragging: !1
                        })
                    }
                }, {
                    key: "findDOMNode",
                    value: function () {
                        var e, t, n;
                        return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : null === (n = t.nodeRef) || void 0 === n ? void 0 : n.current) && void 0 !== e ? e : o.default.findDOMNode(this)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t = this.props,
                            n = (t.axis, t.bounds, t.children),
                            r = t.defaultPosition,
                            s = t.defaultClassName,
                            o = t.defaultClassNameDragging,
                            h = t.defaultClassNameDragged,
                            f = t.position,
                            d = t.positionOffset,
                            O = (t.scale, function (e, t) {
                                if (null == e) return {};
                                var n, r, i = function (e, t) {
                                    if (null == e) return {};
                                    var n, r, i = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var s = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                }
                                return i
                            }(t, p)),
                            g = {},
                            S = null,
                            y = !f || this.state.dragging,
                            b = f || r,
                            v = {
                                x: (0, c.canDragX)(this) && y ? this.state.x : b.x,
                                y: (0, c.canDragY)(this) && y ? this.state.y : b.y
                            };
                        this.state.isElementSVG ? S = (0, l.createSVGTransform)(v, d) : g = (0, l.createCSSTransform)(v, d);
                        var w = (0, a.default)(n.props.className || "", s, (T(e = {}, o, this.state.dragging), T(e, h, this.state.dragged), e));
                        return i.createElement(u.default, m({}, O, {
                            onStart: this.onDragStart,
                            onDrag: this.onDrag,
                            onStop: this.onDragStop
                        }), i.cloneElement(i.Children.only(n), {
                            className: w,
                            style: x(x({}, n.props.style), g),
                            transform: S
                        }))
                    }
                }], s = [{
                    key: "getDerivedStateFromProps",
                    value: function (e, t) {
                        var n = e.position,
                            r = t.prevPropsPosition;
                        return n && (!r || n.x !== r.x || n.y !== r.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
                            position: n,
                            prevPropsPosition: r
                        }), {
                            x: n.x,
                            y: n.y,
                            prevPropsPosition: x({}, n)
                        }) : null
                    }
                }], n && y(d.prototype, n), s && y(d, s), Object.defineProperty(d, "prototype", {
                    writable: !1
                }), d
            }(i.Component);
            t.default = k, T(k, "displayName", "Draggable"), T(k, "propTypes", x(x({}, u.default.propTypes), {}, {
                axis: s.default.oneOf(["both", "x", "y", "none"]),
                bounds: s.default.oneOfType([s.default.shape({
                    left: s.default.number,
                    right: s.default.number,
                    top: s.default.number,
                    bottom: s.default.number
                }), s.default.string, s.default.oneOf([!1])]),
                defaultClassName: s.default.string,
                defaultClassNameDragging: s.default.string,
                defaultClassNameDragged: s.default.string,
                defaultPosition: s.default.shape({
                    x: s.default.number,
                    y: s.default.number
                }),
                positionOffset: s.default.shape({
                    x: s.default.oneOfType([s.default.number, s.default.string]),
                    y: s.default.oneOfType([s.default.number, s.default.string])
                }),
                position: s.default.shape({
                    x: s.default.number,
                    y: s.default.number
                }),
                className: h.dontSetMe,
                style: h.dontSetMe,
                transform: h.dontSetMe
            })), T(k, "defaultProps", x(x({}, u.default.defaultProps), {}, {
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: {
                    x: 0,
                    y: 0
                },
                scale: 1
            }))
        },
        259: function (e, t, n) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var i = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(i, o, a) : i[o] = e[o]
                        } return i.default = e, n && n.set(e, i), i
                }(n(2564)),
                s = u(n(1345)),
                o = u(n(7242)),
                a = n(668),
                l = n(1954),
                c = n(9427),
                h = u(n(7380));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function (e) {
                    return e ? n : t
                })(e)
            }

            function p(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var s = [],
                            o = !0,
                            a = !1;
                        try {
                            for (i = i.call(e); !(o = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); o = !0);
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(e, t) || function () {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function x(e) {
                return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = {
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        stop: "touchend"
                    },
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        stop: "mouseup"
                    }
                },
                b = y.mouse,
                v = function (e) {
                    ! function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && m(e, t)
                    }(u, e);
                    var t, n, s, c = (t = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, n = x(u);
                        if (t) {
                            var i = x(this).constructor;
                            e = Reflect.construct(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return function (e, t) {
                            if (t && ("object" === r(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                            return g(e)
                        }(this, e)
                    });

                    function u() {
                        var e;
                        ! function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, u);
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return S(g(e = c.call.apply(c, [this].concat(n))), "state", {
                            dragging: !1,
                            lastX: NaN,
                            lastY: NaN,
                            touchIdentifier: null
                        }), S(g(e), "mounted", !1), S(g(e), "handleDragStart", function (t) {
                            if (e.props.onMouseDown(t), !e.props.allowAnyClick && "number" == typeof t.button && 0 !== t.button) return !1;
                            var n = e.findDOMNode();
                            if (!n || !n.ownerDocument || !n.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
                            var r = n.ownerDocument;
                            if (!(e.props.disabled || !(t.target instanceof r.defaultView.Node) || e.props.handle && !(0, a.matchesSelectorAndParentsTo)(t.target, e.props.handle, n) || e.props.cancel && (0, a.matchesSelectorAndParentsTo)(t.target, e.props.cancel, n))) {
                                "touchstart" === t.type && t.preventDefault();
                                var i = (0, a.getTouchIdentifier)(t);
                                e.setState({
                                    touchIdentifier: i
                                });
                                var s = (0, l.getControlPosition)(t, i, g(e));
                                if (null != s) {
                                    var o = s.x,
                                        c = s.y,
                                        u = (0, l.createCoreData)(g(e), o, c);
                                    (0, h.default)("DraggableCore: handleDragStart: %j", u), (0, h.default)("calling", e.props.onStart), !1 !== e.props.onStart(t, u) && !1 !== e.mounted && (e.props.enableUserSelectHack && (0, a.addUserSelectStyles)(r), e.setState({
                                        dragging: !0,
                                        lastX: o,
                                        lastY: c
                                    }), (0, a.addEvent)(r, b.move, e.handleDrag), (0, a.addEvent)(r, b.stop, e.handleDragStop))
                                }
                            }
                        }), S(g(e), "handleDrag", function (t) {
                            var n = (0, l.getControlPosition)(t, e.state.touchIdentifier, g(e));
                            if (null != n) {
                                var r = n.x,
                                    i = n.y;
                                if (Array.isArray(e.props.grid)) {
                                    var s = r - e.state.lastX,
                                        o = i - e.state.lastY,
                                        a = p((0, l.snapToGrid)(e.props.grid, s, o), 2);
                                    if (s = a[0], o = a[1], !s && !o) return;
                                    r = e.state.lastX + s, i = e.state.lastY + o
                                }
                                var c = (0, l.createCoreData)(g(e), r, i);
                                if ((0, h.default)("DraggableCore: handleDrag: %j", c), !1 === e.props.onDrag(t, c) || !1 === e.mounted) {
                                    try {
                                        e.handleDragStop(new MouseEvent("mouseup"))
                                    } catch (t) {
                                        var u = document.createEvent("MouseEvents");
                                        u.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.handleDragStop(u)
                                    }
                                    return
                                }
                                e.setState({
                                    lastX: r,
                                    lastY: i
                                })
                            }
                        }), S(g(e), "handleDragStop", function (t) {
                            if (e.state.dragging) {
                                var n = (0, l.getControlPosition)(t, e.state.touchIdentifier, g(e));
                                if (null != n) {
                                    var r = n.x,
                                        i = n.y;
                                    if (Array.isArray(e.props.grid)) {
                                        var s = r - e.state.lastX || 0,
                                            o = i - e.state.lastY || 0,
                                            c = p((0, l.snapToGrid)(e.props.grid, s, o), 2);
                                        s = c[0], o = c[1], r = e.state.lastX + s, i = e.state.lastY + o
                                    }
                                    var u = (0, l.createCoreData)(g(e), r, i);
                                    if (!1 === e.props.onStop(t, u) || !1 === e.mounted) return !1;
                                    var f = e.findDOMNode();
                                    f && e.props.enableUserSelectHack && (0, a.removeUserSelectStyles)(f.ownerDocument), (0, h.default)("DraggableCore: handleDragStop: %j", u), e.setState({
                                        dragging: !1,
                                        lastX: NaN,
                                        lastY: NaN
                                    }), f && ((0, h.default)("DraggableCore: Removing handlers"), (0, a.removeEvent)(f.ownerDocument, b.move, e.handleDrag), (0, a.removeEvent)(f.ownerDocument, b.stop, e.handleDragStop))
                                }
                            }
                        }), S(g(e), "onMouseDown", function (t) {
                            return b = y.mouse, e.handleDragStart(t)
                        }), S(g(e), "onMouseUp", function (t) {
                            return b = y.mouse, e.handleDragStop(t)
                        }), S(g(e), "onTouchStart", function (t) {
                            return b = y.touch, e.handleDragStart(t)
                        }), S(g(e), "onTouchEnd", function (t) {
                            return b = y.touch, e.handleDragStop(t)
                        }), e
                    }
                    return n = [{
                        key: "componentDidMount",
                        value: function () {
                            this.mounted = !0;
                            var e = this.findDOMNode();
                            e && (0, a.addEvent)(e, y.touch.start, this.onTouchStart, {
                                passive: !1
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.mounted = !1;
                            var e = this.findDOMNode();
                            if (e) {
                                var t = e.ownerDocument;
                                (0, a.removeEvent)(t, y.mouse.move, this.handleDrag), (0, a.removeEvent)(t, y.touch.move, this.handleDrag), (0, a.removeEvent)(t, y.mouse.stop, this.handleDragStop), (0, a.removeEvent)(t, y.touch.stop, this.handleDragStop), (0, a.removeEvent)(e, y.touch.start, this.onTouchStart, {
                                    passive: !1
                                }), this.props.enableUserSelectHack && (0, a.removeUserSelectStyles)(t)
                            }
                        }
                    }, {
                        key: "findDOMNode",
                        value: function () {
                            var e, t, n;
                            return null !== (e = this.props) && void 0 !== e && e.nodeRef ? null === (t = this.props) || void 0 === t ? void 0 : null === (n = t.nodeRef) || void 0 === n ? void 0 : n.current : o.default.findDOMNode(this)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return i.cloneElement(i.Children.only(this.props.children), {
                                onMouseDown: this.onMouseDown,
                                onMouseUp: this.onMouseUp,
                                onTouchEnd: this.onTouchEnd
                            })
                        }
                    }], O(u.prototype, n), s && O(u, s), Object.defineProperty(u, "prototype", {
                        writable: !1
                    }), u
                }(i.Component);
            t.default = v, S(v, "displayName", "DraggableCore"), S(v, "propTypes", {
                allowAnyClick: s.default.bool,
                disabled: s.default.bool,
                enableUserSelectHack: s.default.bool,
                offsetParent: function (e, t) {
                    if (e[t] && 1 !== e[t].nodeType) throw Error("Draggable's offsetParent must be a DOM Node.")
                },
                grid: s.default.arrayOf(s.default.number),
                handle: s.default.string,
                cancel: s.default.string,
                nodeRef: s.default.object,
                onStart: s.default.func,
                onDrag: s.default.func,
                onStop: s.default.func,
                onMouseDown: s.default.func,
                scale: s.default.number,
                className: c.dontSetMe,
                style: c.dontSetMe,
                transform: c.dontSetMe
            }), S(v, "defaultProps", {
                allowAnyClick: !1,
                disabled: !1,
                enableUserSelectHack: !0,
                onStart: function () {},
                onDrag: function () {},
                onStop: function () {},
                onMouseDown: function () {},
                scale: 1
            })
        },
        1134: function (e, t, n) {
            var r = n(8096),
                i = r.default,
                s = r.DraggableCore;
            e.exports = i, e.exports.default = i, e.exports.DraggableCore = s
        },
        668: function (e, t, n) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addClassName = p, t.addEvent = function (e, t, n, r) {
                if (e) {
                    var i = l({
                        capture: !0
                    }, r);
                    e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                }
            }, t.addUserSelectStyles = function (e) {
                if (e) {
                    var t = e.getElementById("react-draggable-style-el");
                    t || ((t = e.createElement("style")).type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(t)), e.body && p(e.body, "react-draggable-transparent-selection")
                }
            }, t.createCSSTransform = function (e, t) {
                var n = f(e, t, "px");
                return c({}, (0, s.browserPrefixToKey)("transform", s.default), n)
            }, t.createSVGTransform = function (e, t) {
                return f(e, t, "")
            }, t.getTouch = function (e, t) {
                return e.targetTouches && (0, i.findInArray)(e.targetTouches, function (e) {
                    return t === e.identifier
                }) || e.changedTouches && (0, i.findInArray)(e.changedTouches, function (e) {
                    return t === e.identifier
                })
            }, t.getTouchIdentifier = function (e) {
                return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0].identifier : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].identifier : void 0
            }, t.getTranslation = f, t.innerHeight = function (e) {
                var t = e.clientHeight,
                    n = e.ownerDocument.defaultView.getComputedStyle(e);
                return t -= (0, i.int)(n.paddingTop), t -= (0, i.int)(n.paddingBottom)
            }, t.innerWidth = function (e) {
                var t = e.clientWidth,
                    n = e.ownerDocument.defaultView.getComputedStyle(e);
                return t -= (0, i.int)(n.paddingLeft), t -= (0, i.int)(n.paddingRight)
            }, t.matchesSelector = u, t.matchesSelectorAndParentsTo = function (e, t, n) {
                var r = e;
                do {
                    if (u(r, t)) return !0;
                    if (r === n) break;
                    r = r.parentNode
                } while (r);
                return !1
            }, t.offsetXYFromParent = function (e, t, n) {
                var r = t === t.ownerDocument.body ? {
                    left: 0,
                    top: 0
                } : t.getBoundingClientRect();
                return {
                    x: (e.clientX + t.scrollLeft - r.left) / n,
                    y: (e.clientY + t.scrollTop - r.top) / n
                }
            }, t.outerHeight = function (e) {
                var t = e.clientHeight,
                    n = e.ownerDocument.defaultView.getComputedStyle(e);
                return t + ((0, i.int)(n.borderTopWidth) + (0, i.int)(n.borderBottomWidth))
            }, t.outerWidth = function (e) {
                var t = e.clientWidth,
                    n = e.ownerDocument.defaultView.getComputedStyle(e);
                return t + ((0, i.int)(n.borderLeftWidth) + (0, i.int)(n.borderRightWidth))
            }, t.removeClassName = d, t.removeEvent = function (e, t, n, r) {
                if (e) {
                    var i = l({
                        capture: !0
                    }, r);
                    e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                }
            }, t.removeUserSelectStyles = function (e) {
                if (e) try {
                    if (e.body && d(e.body, "react-draggable-transparent-selection"), e.selection) e.selection.empty();
                    else {
                        var t = (e.defaultView || window).getSelection();
                        t && "Caret" !== t.type && t.removeAllRanges()
                    }
                } catch (e) {}
            };
            var i = n(9427),
                s = function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = o(t);
                    if (n && n.has(e)) return n.get(e);
                    var i = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(i, a, l) : i[a] = e[a]
                        } return i.default = e, n && n.set(e, i), i
                }(n(9419));

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (o = function (e) {
                    return e ? n : t
                })(e)
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function (t) {
                        c(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = "";

            function u(e, t) {
                return h || (h = (0, i.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (t) {
                    return (0, i.isFunction)(e[t])
                })), !!(0, i.isFunction)(e[h]) && e[h](t)
            }

            function f(e, t, n) {
                var r = e.x,
                    i = e.y,
                    s = "translate(".concat(r).concat(n, ",").concat(i).concat(n, ")");
                if (t) {
                    var o = "".concat("string" == typeof t.x ? t.x : t.x + n),
                        a = "".concat("string" == typeof t.y ? t.y : t.y + n);
                    s = "translate(".concat(o, ", ").concat(a, ")") + s
                }
                return s
            }

            function p(e, t) {
                e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t))
            }

            function d(e, t) {
                e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "")
            }
        },
        9419: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.browserPrefixToKey = i, t.browserPrefixToStyle = function (e, t) {
                return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e
            }, t.default = void 0, t.getPrefix = r;
            var n = ["Moz", "Webkit", "O", "ms"];

            function r() {
                var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" == typeof window) return "";
                var s = null === (e = window.document) || void 0 === e ? void 0 : null === (t = e.documentElement) || void 0 === t ? void 0 : t.style;
                if (!s || r in s) return "";
                for (var o = 0; o < n.length; o++)
                    if (i(r, n[o]) in s) return n[o];
                return ""
            }

            function i(e, t) {
                return t ? "".concat(t).concat(function (e) {
                    for (var t = "", n = !0, r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : "-" === e[r] ? n = !0 : t += e[r];
                    return t
                }(e)) : e
            }
            var s = r();
            t.default = s
        },
        7380: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function () {}
        },
        1954: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canDragX = function (e) {
                return "both" === e.props.axis || "x" === e.props.axis
            }, t.canDragY = function (e) {
                return "both" === e.props.axis || "y" === e.props.axis
            }, t.createCoreData = function (e, t, n) {
                var i = e.state,
                    o = !(0, r.isNum)(i.lastX),
                    a = s(e);
                return o ? {
                    node: a,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: t,
                    lastY: n,
                    x: t,
                    y: n
                } : {
                    node: a,
                    deltaX: t - i.lastX,
                    deltaY: n - i.lastY,
                    lastX: i.lastX,
                    lastY: i.lastY,
                    x: t,
                    y: n
                }
            }, t.createDraggableData = function (e, t) {
                var n = e.props.scale;
                return {
                    node: t.node,
                    x: e.state.x + t.deltaX / n,
                    y: e.state.y + t.deltaY / n,
                    deltaX: t.deltaX / n,
                    deltaY: t.deltaY / n,
                    lastX: e.state.x,
                    lastY: e.state.y
                }
            }, t.getBoundPosition = function (e, t, n) {
                if (!e.props.bounds) return [t, n];
                var o = e.props.bounds;
                o = "string" == typeof o ? o : {
                    left: (l = o).left,
                    top: l.top,
                    right: l.right,
                    bottom: l.bottom
                };
                var a = s(e);
                if ("string" == typeof o) {
                    var l, c, h = a.ownerDocument,
                        u = h.defaultView;
                    if (!((c = "parent" === o ? a.parentNode : h.querySelector(o)) instanceof u.HTMLElement)) throw Error('Bounds selector "' + o + '" could not find an element.');
                    var f = u.getComputedStyle(a),
                        p = u.getComputedStyle(c);
                    o = {
                        left: -a.offsetLeft + (0, r.int)(p.paddingLeft) + (0, r.int)(f.marginLeft),
                        top: -a.offsetTop + (0, r.int)(p.paddingTop) + (0, r.int)(f.marginTop),
                        right: (0, i.innerWidth)(c) - (0, i.outerWidth)(a) - a.offsetLeft + (0, r.int)(p.paddingRight) - (0, r.int)(f.marginRight),
                        bottom: (0, i.innerHeight)(c) - (0, i.outerHeight)(a) - a.offsetTop + (0, r.int)(p.paddingBottom) - (0, r.int)(f.marginBottom)
                    }
                }
                return (0, r.isNum)(o.right) && (t = Math.min(t, o.right)), (0, r.isNum)(o.bottom) && (n = Math.min(n, o.bottom)), (0, r.isNum)(o.left) && (t = Math.max(t, o.left)), (0, r.isNum)(o.top) && (n = Math.max(n, o.top)), [t, n]
            }, t.getControlPosition = function (e, t, n) {
                var r = "number" == typeof t ? (0, i.getTouch)(e, t) : null;
                if ("number" == typeof t && !r) return null;
                var o = s(n),
                    a = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
                return (0, i.offsetXYFromParent)(r || e, a, n.props.scale)
            }, t.snapToGrid = function (e, t, n) {
                return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]]
            };
            var r = n(9427),
                i = n(668);

            function s(e) {
                var t = e.findDOMNode();
                if (!t) throw Error("<DraggableCore>: Unmounted during event!");
                return t
            }
        },
        9427: function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dontSetMe = function (e, t, n) {
                if (e[t]) return Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."))
            }, t.findInArray = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (t.apply(t, [e[n], n, e])) return e[n]
            }, t.int = function (e) {
                return parseInt(e, 10)
            }, t.isFunction = function (e) {
                return "function" == typeof e || "[object Function]" === Object.prototype.toString.call(e)
            }, t.isNum = function (e) {
                return "number" == typeof e && !isNaN(e)
            }
        },
        1430: function (e, t, n) {
            function r() {
                for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    var n, r, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r);
                        else
                            for (n in t) t[n] && (i && (i += " "), i += n)
                    }
                    return i
                }(e)) && (r && (r += " "), r += t);
                return r
            }
            n.r(t), n.d(t, {
                clsx: function () {
                    return r
                }
            }), t.default = r
        },
        683: function (e, t, n) {
            t.__esModule = !0, t.default = void 0;
            var r = function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : r[s] = e[s]
                        } return r.default = e, n && n.set(e, r), r
                }(n(2564)),
                i = n(1134),
                s = n(8797),
                o = n(4062),
                a = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function (e) {
                    return e ? n : t
                })(e)
            }

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = t, i = n[t], (r = function (e) {
                            var t = function (e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var p = function (e) {
                function t() {
                    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(r)) || this).handleRefs = {}, t.lastHandleRect = null, t.slack = null, t
                }
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, f(t, e);
                var n = t.prototype;
                return n.componentWillUnmount = function () {
                    this.resetData()
                }, n.resetData = function () {
                    this.lastHandleRect = this.slack = null
                }, n.runConstraints = function (e, t) {
                    var n = this.props,
                        r = n.minConstraints,
                        i = n.maxConstraints,
                        s = n.lockAspectRatio;
                    if (!r && !i && !s) return [e, t];
                    if (s) {
                        var o = this.props.width / this.props.height;
                        Math.abs(e - this.props.width) > Math.abs((t - this.props.height) * o) ? t = e / o : e = t * o
                    }
                    var a = e,
                        l = t,
                        c = this.slack || [0, 0],
                        h = c[0],
                        u = c[1];
                    return e += h, t += u, r && (e = Math.max(r[0], e), t = Math.max(r[1], t)), i && (e = Math.min(i[0], e), t = Math.min(i[1], t)), this.slack = [h + (a - e), u + (l - t)], [e, t]
                }, n.resizeHandler = function (e, t) {
                    var n = this;
                    return function (r, i) {
                        var s = i.node,
                            o = i.deltaX,
                            a = i.deltaY;
                        "onResizeStart" === e && n.resetData();
                        var l = ("both" === n.props.axis || "x" === n.props.axis) && "n" !== t && "s" !== t,
                            c = ("both" === n.props.axis || "y" === n.props.axis) && "e" !== t && "w" !== t;
                        if (l || c) {
                            var h = t[0],
                                u = t[t.length - 1],
                                f = s.getBoundingClientRect();
                            null != n.lastHandleRect && ("w" === u && (o += f.left - n.lastHandleRect.left), "n" === h && (a += f.top - n.lastHandleRect.top)), n.lastHandleRect = f, "w" === u && (o = -o), "n" === h && (a = -a);
                            var p = n.props.width + (l ? o / n.props.transformScale : 0),
                                d = n.props.height + (c ? a / n.props.transformScale : 0),
                                O = n.runConstraints(p, d);
                            p = O[0], d = O[1];
                            var m = p !== n.props.width || d !== n.props.height,
                                g = "function" == typeof n.props[e] ? n.props[e] : null;
                            g && !("onResize" === e && !m) && (null == r.persist || r.persist(), g(r, {
                                node: s,
                                size: {
                                    width: p,
                                    height: d
                                },
                                handle: t
                            })), "onResizeStop" === e && n.resetData()
                        }
                    }
                }, n.renderResizeHandle = function (e, t) {
                    var n = this.props.handle;
                    if (!n) return r.createElement("span", {
                        className: "react-resizable-handle react-resizable-handle-" + e,
                        ref: t
                    });
                    if ("function" == typeof n) return n(e, t);
                    var i = u({
                        ref: t
                    }, "string" == typeof n.type ? {} : {
                        handleAxis: e
                    });
                    return r.cloneElement(n, i)
                }, n.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.children,
                        o = t.className,
                        l = t.draggableOpts,
                        h = (t.width, t.height, t.handle, t.handleSize, t.lockAspectRatio, t.axis, t.minConstraints, t.maxConstraints, t.onResize, t.onResizeStop, t.onResizeStart, t.resizeHandles),
                        f = (t.transformScale, function (e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(t, a));
                    return (0, s.cloneElement)(n, u(u({}, f), {}, {
                        className: (o ? o + " " : "") + "react-resizable",
                        children: [].concat(n.props.children, h.map(function (t) {
                            var n, s = null != (n = e.handleRefs[t]) ? n : e.handleRefs[t] = r.createRef();
                            return r.createElement(i.DraggableCore, c({}, l, {
                                nodeRef: s,
                                key: "resizableHandle-" + t,
                                onStop: e.resizeHandler("onResizeStop", t),
                                onStart: e.resizeHandler("onResizeStart", t),
                                onDrag: e.resizeHandler("onResize", t)
                            }), e.renderResizeHandle(t, s))
                        }))
                    }))
                }, t
            }(r.Component);
            t.default = p, p.propTypes = o.resizableProps, p.defaultProps = {
                axis: "both",
                handleSize: [20, 20],
                lockAspectRatio: !1,
                minConstraints: [20, 20],
                maxConstraints: [1 / 0, 1 / 0],
                resizeHandles: ["se"],
                transformScale: 1
            }
        },
        38: function (e, t, n) {
            t.default = void 0;
            var r = function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : r[s] = e[s]
                        } return r.default = e, n && n.set(e, r), r
                }(n(2564)),
                i = l(n(1345)),
                s = l(n(683)),
                o = n(4062),
                a = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (c = function (e) {
                    return e ? n : t
                })(e)
            }

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = t, i = n[t], (r = function (e) {
                            var t = function (e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var d = function (e) {
                function t() {
                    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                        width: t.props.width,
                        height: t.props.height,
                        propsWidth: t.props.width,
                        propsHeight: t.props.height
                    }, t.onResize = function (e, n) {
                        var r = n.size;
                        t.props.onResize ? (null == e.persist || e.persist(), t.setState(r, function () {
                            return t.props.onResize && t.props.onResize(e, n)
                        })) : t.setState(r)
                    }, t
                }
                return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, p(t, e), t.getDerivedStateFromProps = function (e, t) {
                    return t.propsWidth !== e.width || t.propsHeight !== e.height ? {
                        width: e.width,
                        height: e.height,
                        propsWidth: e.width,
                        propsHeight: e.height
                    } : null
                }, t.prototype.render = function () {
                    var e = this.props,
                        t = e.handle,
                        n = e.handleSize,
                        i = (e.onResize, e.onResizeStart),
                        o = e.onResizeStop,
                        l = e.draggableOpts,
                        c = e.minConstraints,
                        u = e.maxConstraints,
                        p = e.lockAspectRatio,
                        d = e.axis,
                        O = (e.width, e.height, e.resizeHandles),
                        m = e.style,
                        g = e.transformScale,
                        x = function (e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, a);
                    return r.createElement(s.default, {
                        axis: d,
                        draggableOpts: l,
                        handle: t,
                        handleSize: n,
                        height: this.state.height,
                        lockAspectRatio: p,
                        maxConstraints: u,
                        minConstraints: c,
                        onResizeStart: i,
                        onResize: this.onResize,
                        onResizeStop: o,
                        resizeHandles: O,
                        transformScale: g,
                        width: this.state.width
                    }, r.createElement("div", h({}, x, {
                        style: f(f({}, m), {}, {
                            width: this.state.width + "px",
                            height: this.state.height + "px"
                        })
                    })))
                }, t
            }(r.Component);
            t.default = d, d.propTypes = f(f({}, o.resizableProps), {}, {
                children: i.default.element
            })
        },
        4062: function (e, t, n) {
            t.__esModule = !0, t.resizableProps = void 0;
            var r, i = (r = n(1345)) && r.__esModule ? r : {
                default: r
            };
            n(1134);
            var s = {
                axis: i.default.oneOf(["both", "x", "y", "none"]),
                className: i.default.string,
                children: i.default.element.isRequired,
                draggableOpts: i.default.shape({
                    allowAnyClick: i.default.bool,
                    cancel: i.default.string,
                    children: i.default.node,
                    disabled: i.default.bool,
                    enableUserSelectHack: i.default.bool,
                    offsetParent: i.default.node,
                    grid: i.default.arrayOf(i.default.number),
                    handle: i.default.string,
                    nodeRef: i.default.object,
                    onStart: i.default.func,
                    onDrag: i.default.func,
                    onStop: i.default.func,
                    onMouseDown: i.default.func,
                    scale: i.default.number
                }),
                height: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var s = n[0];
                    return "both" === s.axis || "y" === s.axis ? (e = i.default.number).isRequired.apply(e, n) : i.default.number.apply(i.default, n)
                },
                handle: i.default.oneOfType([i.default.node, i.default.func]),
                handleSize: i.default.arrayOf(i.default.number),
                lockAspectRatio: i.default.bool,
                maxConstraints: i.default.arrayOf(i.default.number),
                minConstraints: i.default.arrayOf(i.default.number),
                onResizeStop: i.default.func,
                onResizeStart: i.default.func,
                onResize: i.default.func,
                resizeHandles: i.default.arrayOf(i.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                transformScale: i.default.number,
                width: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var s = n[0];
                    return "both" === s.axis || "x" === s.axis ? (e = i.default.number).isRequired.apply(e, n) : i.default.number.apply(i.default, n)
                }
            };
            t.resizableProps = s
        },
        8797: function (e, t, n) {
            t.__esModule = !0, t.cloneElement = function (e, t) {
                return t.style && e.props.style && (t.style = o(o({}, e.props.style), t.style)), t.className && e.props.className && (t.className = e.props.className + " " + t.className), i.default.cloneElement(e, t)
            };
            var r, i = (r = n(2564)) && r.__esModule ? r : {
                default: r
            };

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = t, i = n[t], (r = function (e) {
                            var t = function (e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
        },
        5772: function (e, t, n) {
            e.exports = function () {
                throw Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")
            }, e.exports.Resizable = n(683).default, e.exports.ResizableBox = n(38).default
        },
        6962: function (e, t, n) {
            n.d(t, {
                B1: function () {
                    return eb
                },
                GA: function () {
                    return eO
                },
                Gn: function () {
                    return er
                },
                Mb: function () {
                    return l
                },
                eC: function () {
                    return c
                },
                vQ: function () {
                    return ec
                },
                ys: function () {
                    return ey
                }
            });
            var r = n(4999),
                i = n(8099),
                s = n(696);
            class o {
                constructor(e, t, n) {
                    this.state = e, this.pos = t, this.explicit = n, this.abortListeners = []
                }
                tokenBefore(e) {
                    let t = (0, s.qz)(this.state).resolveInner(this.pos, -1);
                    for (; t && 0 > e.indexOf(t.name);) t = t.parent;
                    return t ? {
                        from: t.from,
                        to: this.pos,
                        text: this.state.sliceDoc(t.from, this.pos),
                        type: t.type
                    } : null
                }
                matchBefore(e) {
                    let t = this.state.doc.lineAt(this.pos),
                        n = Math.max(t.from, this.pos - 250),
                        r = t.text.slice(n - t.from, this.pos - t.from),
                        i = r.search(f(e, !1));
                    return i < 0 ? null : {
                        from: n + i,
                        to: this.pos,
                        text: r.slice(i)
                    }
                }
                get aborted() {
                    return null == this.abortListeners
                }
                addEventListener(e, t) {
                    "abort" == e && this.abortListeners && this.abortListeners.push(t)
                }
            }

            function a(e) {
                let t = Object.keys(e).join(""),
                    n = /\w/.test(t);
                return n && (t = t.replace(/\w/g, "")), `[${n?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`
            }

            function l(e) {
                let t = e.map(e => "string" == typeof e ? {
                        label: e
                    } : e),
                    [n, r] = t.every(e => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : function (e) {
                        let t = Object.create(null),
                            n = Object.create(null);
                        for (let {
                                label: r
                            } of e) {
                            t[r[0]] = !0;
                            for (let e = 1; e < r.length; e++) n[r[e]] = !0
                        }
                        let r = a(t) + a(n) + "*$";
                        return [RegExp("^" + r), new RegExp(r)]
                    }(t);
                return e => {
                    let i = e.matchBefore(r);
                    return i || e.explicit ? {
                        from: i ? i.from : e.pos,
                        options: t,
                        validFor: n
                    } : null
                }
            }

            function c(e, t) {
                return n => {
                    for (let t = (0, s.qz)(n.state).resolveInner(n.pos, -1); t; t = t.parent) {
                        if (e.indexOf(t.name) > -1) return null;
                        if (t.type.isTop) break
                    }
                    return t(n)
                }
            }
            class h {
                constructor(e, t, n, r) {
                    this.completion = e, this.source = t, this.match = n, this.score = r
                }
            }

            function u(e) {
                return e.selection.main.from
            }

            function f(e, t) {
                var n;
                let {
                    source: r
                } = e, i = t && "^" != r[0], s = "$" != r[r.length - 1];
                return i || s ? RegExp(`${i?"^":""}(?:${r})${s?"$":""}`, null !== (n = e.flags) && void 0 !== n ? n : e.ignoreCase ? "i" : "") : e
            }
            let p = r.q6.define(),
                d = new WeakMap;

            function O(e) {
                if (!Array.isArray(e)) return e;
                let t = d.get(e);
                return t || d.set(e, t = l(e)), t
            }
            let m = r.Py.define(),
                g = r.Py.define();
            class x {
                constructor(e) {
                    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
                    for (let t = 0; t < e.length;) {
                        let n = (0, r.gm)(e, t),
                            i = (0, r.nZ)(n);
                        this.chars.push(n);
                        let s = e.slice(t, t + i),
                            o = s.toUpperCase();
                        this.folded.push((0, r.gm)(o == s ? s.toLowerCase() : o, 0)), t += i
                    }
                    this.astral = e.length != this.chars.length
                }
                ret(e, t) {
                    return this.score = e, this.matched = t, !0
                }
                match(e) {
                    if (0 == this.pattern.length) return this.ret(-100, []);
                    if (e.length < this.pattern.length) return !1;
                    let {
                        chars: t,
                        folded: n,
                        any: i,
                        precise: s,
                        byWord: o
                    } = this;
                    if (1 == t.length) {
                        let i = (0, r.gm)(e, 0),
                            s = (0, r.nZ)(i),
                            o = s == e.length ? 0 : -100;
                        if (i == t[0]);
                        else {
                            if (i != n[0]) return !1;
                            o += -200
                        }
                        return this.ret(o, [0, s])
                    }
                    let a = e.indexOf(this.pattern);
                    if (0 == a) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
                    let l = t.length,
                        c = 0;
                    if (a < 0) {
                        for (let s = 0, o = Math.min(e.length, 200); s < o && c < l;) {
                            let o = (0, r.gm)(e, s);
                            (o == t[c] || o == n[c]) && (i[c++] = s), s += (0, r.nZ)(o)
                        }
                        if (c < l) return !1
                    }
                    let h = 0,
                        u = 0,
                        f = !1,
                        p = 0,
                        d = -1,
                        O = -1,
                        m = /[a-z]/.test(e),
                        g = !0;
                    for (let i = 0, c = Math.min(e.length, 200), x = 0; i < c && u < l;) {
                        let c = (0, r.gm)(e, i);
                        a < 0 && (h < l && c == t[h] && (s[h++] = i), p < l && (c == t[p] || c == n[p] ? (0 == p && (d = i), O = i + 1, p++) : p = 0));
                        let S, y = c < 255 ? c >= 48 && c <= 57 || c >= 97 && c <= 122 ? 2 : c >= 65 && c <= 90 ? 1 : 0 : (S = (0, r.bg)(c)) != S.toLowerCase() ? 1 : S != S.toUpperCase() ? 2 : 0;
                        (!i || 1 == y && m || 0 == x && 0 != y) && (t[u] == c || n[u] == c && (f = !0) ? o[u++] = i : o.length && (g = !1)), x = y, i += (0, r.nZ)(c)
                    }
                    return u == l && 0 == o[0] && g ? this.result(-100 + (f ? -200 : 0), o, e) : p == l && 0 == d ? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O]) : a > -1 ? this.ret(-700 - e.length, [a, a + this.pattern.length]) : p == l ? this.ret(-900 - e.length, [d, O]) : u == l ? this.result(-100 + (f ? -200 : 0) + -700 + (g ? 0 : -1100), o, e) : 2 != t.length && this.result((i[0] ? -700 : 0) + -200 + -1100, i, e)
                }
                result(e, t, n) {
                    let i = [],
                        s = 0;
                    for (let e of t) {
                        let t = e + (this.astral ? (0, r.nZ)((0, r.gm)(n, e)) : 1);
                        s && i[s - 1] == e ? i[s - 1] = t : (i[s++] = e, i[s++] = t)
                    }
                    return this.ret(e - n.length, i)
                }
            }
            let S = r.r$.define({
                combine: e => (0, r.BO)(e, {
                    activateOnTyping: !0,
                    selectOnOpen: !0,
                    override: null,
                    closeOnBlur: !0,
                    maxRenderedOptions: 100,
                    defaultKeymap: !0,
                    tooltipClass: () => "",
                    optionClass: () => "",
                    aboveCursor: !1,
                    icons: !0,
                    addToOptions: [],
                    positionInfo: b,
                    compareCompletions: (e, t) => e.label.localeCompare(t.label),
                    interactionDelay: 75
                }, {
                    defaultKeymap: (e, t) => e && t,
                    closeOnBlur: (e, t) => e && t,
                    icons: (e, t) => e && t,
                    tooltipClass: (e, t) => n => y(e(n), t(n)),
                    optionClass: (e, t) => n => y(e(n), t(n)),
                    addToOptions: (e, t) => e.concat(t)
                })
            });

            function y(e, t) {
                return e ? t ? e + " " + t : e : t
            }

            function b(e, t, n, r, s) {
                let o = e.textDirection == i.Nm.RTL,
                    a = o,
                    l = !1,
                    c = "top",
                    h, u, f = t.left - s.left,
                    p = s.right - t.right,
                    d = r.right - r.left,
                    O = r.bottom - r.top;
                if (a && f < Math.min(d, p) ? a = !1 : !a && p < Math.min(d, f) && (a = !0), d <= (a ? f : p)) h = Math.max(s.top, Math.min(n.top, s.bottom - O)) - t.top, u = Math.min(400, a ? f : p);
                else {
                    l = !0, u = Math.min(400, (o ? t.right : s.right - t.left) - 30);
                    let e = s.bottom - t.bottom;
                    e >= O || e > t.top ? h = n.bottom - t.top : (c = "bottom", h = t.bottom - n.top)
                }
                return {
                    style: `${c}: ${h}px; max-width: ${u}px`,
                    class: "cm-completionInfo-" + (l ? o ? "left-narrow" : "right-narrow" : a ? "left" : "right")
                }
            }

            function v(e, t, n) {
                if (e <= n) return {
                    from: 0,
                    to: e
                };
                if (t < 0 && (t = 0), t <= e >> 1) {
                    let e = Math.floor(t / n);
                    return {
                        from: e * n,
                        to: (e + 1) * n
                    }
                }
                let r = Math.floor((e - t) / n);
                return {
                    from: e - (r + 1) * n,
                    to: e - r * n
                }
            }
            class w {
                constructor(e, t, n) {
                    let r;
                    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
                        read: () => this.measureInfo(),
                        write: e => this.placeInfo(e),
                        key: this
                    }, this.space = null, this.currentClass = "";
                    let i = e.state.field(t),
                        {
                            options: s,
                            selected: o
                        } = i.open,
                        a = e.state.facet(S);
                    this.optionContent = (r = a.addToOptions.slice(), a.icons && r.push({
                        render(e) {
                            let t = document.createElement("div");
                            return t.classList.add("cm-completionIcon"), e.type && t.classList.add(...e.type.split(/\s+/g).map(e => "cm-completionIcon-" + e)), t.setAttribute("aria-hidden", "true"), t
                        },
                        position: 20
                    }), r.push({
                        render(e, t, n) {
                            let r = document.createElement("span");
                            r.className = "cm-completionLabel";
                            let i = e.displayLabel || e.label,
                                s = 0;
                            for (let e = 0; e < n.length;) {
                                let t = n[e++],
                                    o = n[e++];
                                t > s && r.appendChild(document.createTextNode(i.slice(s, t)));
                                let a = r.appendChild(document.createElement("span"));
                                a.appendChild(document.createTextNode(i.slice(t, o))), a.className = "cm-completionMatchedText", s = o
                            }
                            return s < i.length && r.appendChild(document.createTextNode(i.slice(s))), r
                        },
                        position: 50
                    }, {
                        render(e) {
                            if (!e.detail) return null;
                            let t = document.createElement("span");
                            return t.className = "cm-completionDetail", t.textContent = e.detail, t
                        },
                        position: 80
                    }), r.sort((e, t) => e.position - t.position).map(e => e.render)), this.optionClass = a.optionClass, this.tooltipClass = a.tooltipClass, this.range = v(s.length, o, a.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", t => {
                        for (let n = t.target, r; n && n != this.dom; n = n.parentNode)
                            if ("LI" == n.nodeName && (r = /-(\d+)$/.exec(n.id)) && +r[1] < s.length) {
                                this.applyCompletion(e, s[+r[1]]), t.preventDefault();
                                return
                            }
                    }), this.dom.addEventListener("focusout", t => {
                        let n = e.state.field(this.stateField, !1);
                        n && n.tooltip && e.state.facet(S).closeOnBlur && t.relatedTarget != e.contentDOM && e.dispatch({
                            effects: g.of(null)
                        })
                    }), this.list = this.dom.appendChild(this.createListBox(s, i.id, this.range)), this.list.addEventListener("scroll", () => {
                        this.info && this.view.requestMeasure(this.placeInfoReq)
                    })
                }
                mount() {
                    this.updateSel()
                }
                update(e) {
                    var t, n, r;
                    let i = e.state.field(this.stateField),
                        s = e.startState.field(this.stateField);
                    this.updateTooltipClass(e.state), i != s && (this.updateSel(), (null === (t = i.open) || void 0 === t ? void 0 : t.disabled) != (null === (n = s.open) || void 0 === n ? void 0 : n.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(null === (r = i.open) || void 0 === r ? void 0 : r.disabled)))
                }
                updateTooltipClass(e) {
                    let t = this.tooltipClass(e);
                    if (t != this.currentClass) {
                        for (let e of this.currentClass.split(" ")) e && this.dom.classList.remove(e);
                        for (let e of t.split(" ")) e && this.dom.classList.add(e);
                        this.currentClass = t
                    }
                }
                positioned(e) {
                    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq)
                }
                updateSel() {
                    let e = this.view.state.field(this.stateField),
                        t = e.open;
                    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = v(t.options.length, t.selected, this.view.state.facet(S).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
                            this.info && this.view.requestMeasure(this.placeInfoReq)
                        })), this.updateSelectedOption(t.selected)) {
                        this.destroyInfo();
                        let {
                            completion: n
                        } = t.options[t.selected], {
                            info: r
                        } = n;
                        if (!r) return;
                        let s = "string" == typeof r ? document.createTextNode(r) : r(n);
                        if (!s) return;
                        "then" in s ? s.then(t => {
                            t && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(t, n)
                        }).catch(e => (0, i.OO)(this.view.state, e, "completion info")) : this.addInfoPane(s, n)
                    }
                }
                addInfoPane(e, t) {
                    this.destroyInfo();
                    let n = this.info = document.createElement("div");
                    if (n.className = "cm-tooltip cm-completionInfo", null != e.nodeType) n.appendChild(e), this.infoDestroy = null;
                    else {
                        let {
                            dom: t,
                            destroy: r
                        } = e;
                        n.appendChild(t), this.infoDestroy = r || null
                    }
                    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq)
                }
                updateSelectedOption(e) {
                    var t, n;
                    let r, i, s = null;
                    for (let t = this.list.firstChild, n = this.range.from; t; t = t.nextSibling, n++) "LI" == t.nodeName && t.id ? n == e ? t.hasAttribute("aria-selected") || (t.setAttribute("aria-selected", "true"), s = t) : t.hasAttribute("aria-selected") && t.removeAttribute("aria-selected") : n--;
                    return s && (t = this.list, n = s, r = t.getBoundingClientRect(), (i = n.getBoundingClientRect()).top < r.top ? t.scrollTop -= r.top - i.top : i.bottom > r.bottom && (t.scrollTop += i.bottom - r.bottom)), s
                }
                measureInfo() {
                    let e = this.dom.querySelector("[aria-selected]");
                    if (!e || !this.info) return null;
                    let t = this.dom.getBoundingClientRect(),
                        n = this.info.getBoundingClientRect(),
                        r = e.getBoundingClientRect(),
                        i = this.space;
                    if (!i) {
                        let e = this.dom.ownerDocument.defaultView || window;
                        i = {
                            left: 0,
                            top: 0,
                            right: e.innerWidth,
                            bottom: e.innerHeight
                        }
                    }
                    return r.top > Math.min(i.bottom, t.bottom) - 10 || r.bottom < Math.max(i.top, t.top) + 10 ? null : this.view.state.facet(S).positionInfo(this.view, t, r, n, i)
                }
                placeInfo(e) {
                    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px")
                }
                createListBox(e, t, n) {
                    let r = document.createElement("ul");
                    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions"));
                    let i = null;
                    for (let s = n.from; s < n.to; s++) {
                        let {
                            completion: o,
                            match: a
                        } = e[s], {
                            section: l
                        } = o;
                        if (l) {
                            let e = "string" == typeof l ? l : l.name;
                            e != i && (s > n.from || 0 == n.from) && (i = e, "string" != typeof l && l.header ? r.appendChild(l.header(l)) : r.appendChild(document.createElement("completion-section")).textContent = e)
                        }
                        let c = r.appendChild(document.createElement("li"));
                        c.id = t + "-" + s, c.setAttribute("role", "option");
                        let h = this.optionClass(o);
                        for (let e of (h && (c.className = h), this.optionContent)) {
                            let t = e(o, this.view.state, a);
                            t && c.appendChild(t)
                        }
                    }
                    return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r
                }
                destroyInfo() {
                    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
                }
                destroy() {
                    this.destroyInfo()
                }
            }

            function T(e) {
                return 100 * (e.boost || 0) + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + (e.type ? 1 : 0)
            }
            class k {
                constructor(e, t, n, r, i, s) {
                    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = i, this.disabled = s
                }
                setSelected(e, t) {
                    return e == this.selected || e >= this.options.length ? this : new k(this.options, q(t, e), this.tooltip, this.timestamp, e, this.disabled)
                }
                static build(e, t, n, r, i) {
                    let s = function (e, t) {
                        let n = [],
                            r = null,
                            i = e => {
                                n.push(e);
                                let {
                                    section: t
                                } = e.completion;
                                if (t) {
                                    r || (r = []);
                                    let e = "string" == typeof t ? t : t.name;
                                    r.some(t => t.name == e) || r.push("string" == typeof t ? {
                                        name: e
                                    } : t)
                                }
                            };
                        for (let r of e)
                            if (r.hasResult()) {
                                let e = r.result.getMatch;
                                if (!1 === r.result.filter)
                                    for (let t of r.result.options) i(new h(t, r.source, e ? e(t) : [], 1e9 - n.length));
                                else {
                                    let n = new x(t.sliceDoc(r.from, r.to));
                                    for (let t of r.result.options)
                                        if (n.match(t.label)) {
                                            let s = t.displayLabel ? e ? e(t, n.matched) : [] : n.matched;
                                            i(new h(t, r.source, s, n.score + (t.boost || 0)))
                                        }
                                }
                            } if (r) {
                            let e = Object.create(null),
                                t = 0;
                            for (let n of r.sort((e, t) => {
                                    var n, r;
                                    return (null !== (n = e.rank) && void 0 !== n ? n : 1e9) - (null !== (r = t.rank) && void 0 !== r ? r : 1e9) || (e.name < t.name ? -1 : 1)
                                })) t -= 1e5, e[n.name] = t;
                            for (let t of n) {
                                let {
                                    section: n
                                } = t.completion;
                                n && (t.score += e["string" == typeof n ? n : n.name])
                            }
                        }
                        let s = [],
                            o = null,
                            a = t.facet(S).compareCompletions;
                        for (let e of n.sort((e, t) => t.score - e.score || a(e.completion, t.completion))) {
                            let t = e.completion;
                            o && o.label == t.label && o.detail == t.detail && (null == o.type || null == t.type || o.type == t.type) && o.apply == t.apply && o.boost == t.boost ? T(e.completion) > T(o) && (s[s.length - 1] = e) : s.push(e), o = e.completion
                        }
                        return s
                    }(e, t);
                    if (!s.length) return r && e.some(e => 1 == e.state) ? new k(r.options, r.attrs, r.tooltip, r.timestamp, r.selected, !0) : null;
                    let o = t.facet(S).selectOnOpen ? 0 : -1;
                    if (r && r.selected != o && -1 != r.selected) {
                        let e = r.options[r.selected].completion;
                        for (let t = 0; t < s.length; t++)
                            if (s[t].completion == e) {
                                o = t;
                                break
                            }
                    }
                    return new k(s, q(n, o), {
                        pos: e.reduce((e, t) => t.hasResult() ? Math.min(e, t.from) : e, 1e8),
                        create: e => new w(e, A, V),
                        above: i.aboveCursor
                    }, r ? r.timestamp : Date.now(), o, !1)
                }
                map(e) {
                    return new k(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
                        pos: e.mapPos(this.tooltip.pos)
                    }), this.timestamp, this.selected, this.disabled)
                }
            }
            class P {
                constructor(e, t, n) {
                    this.active = e, this.id = t, this.open = n
                }
                static start() {
                    return new P($, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
                }
                update(e) {
                    let {
                        state: t
                    } = e, n = t.facet(S), r = (n.override || t.languageDataAt("autocomplete", u(t)).map(O)).map(t => (this.active.find(e => e.source == t) || new W(t, this.active.some(e => 0 != e.state) ? 1 : 0)).update(e, n));
                    r.length == this.active.length && r.every((e, t) => e == this.active[t]) && (r = this.active);
                    let i = this.open;
                    for (let s of (i && e.docChanged && (i = i.map(e.changes)), e.selection || r.some(t => t.hasResult() && e.changes.touchesRange(t.from, t.to)) || ! function (e, t) {
                            if (e == t) return !0;
                            for (let n = 0, r = 0;;) {
                                for (; n < e.length && !e[n].hasResult;) n++;
                                for (; r < t.length && !t[r].hasResult;) r++;
                                let i = n == e.length,
                                    s = r == t.length;
                                if (i || s) return i == s;
                                if (e[n++].result != t[r++].result) return !1
                            }
                        }(r, this.active) ? i = k.build(r, t, this.id, i, n) : i && i.disabled && !r.some(e => 1 == e.state) && (i = null), !i && r.every(e => 1 != e.state) && r.some(e => e.hasResult()) && (r = r.map(e => e.hasResult() ? new W(e.source, 0) : e)), e.effects)) s.is(E) && (i = i && i.setSelected(s.value, this.id));
                    return r == this.active && i == this.open ? this : new P(r, this.id, i)
                }
                get tooltip() {
                    return this.open ? this.open.tooltip : null
                }
                get attrs() {
                    return this.open ? this.open.attrs : Q
                }
            }
            let Q = {
                "aria-autocomplete": "list"
            };

            function q(e, t) {
                let n = {
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": e
                };
                return t > -1 && (n["aria-activedescendant"] = e + "-" + t), n
            }
            let $ = [];

            function R(e) {
                return e.isUserEvent("input.type") ? "input" : e.isUserEvent("delete.backward") ? "delete" : null
            }
            class W {
                constructor(e, t, n = -1) {
                    this.source = e, this.state = t, this.explicitPos = n
                }
                hasResult() {
                    return !1
                }
                update(e, t) {
                    let n = R(e),
                        r = this;
                    for (let i of (n ? r = r.handleUserEvent(e, n, t) : e.docChanged ? r = r.handleChange(e) : e.selection && 0 != r.state && (r = new W(r.source, 0)), e.effects))
                        if (i.is(m)) r = new W(r.source, 1, i.value ? u(e.state) : -1);
                        else if (i.is(g)) r = new W(r.source, 0);
                    else if (i.is(X))
                        for (let e of i.value) e.source == r.source && (r = e);
                    return r
                }
                handleUserEvent(e, t, n) {
                    return "delete" != t && n.activateOnTyping ? new W(this.source, 1) : this.map(e.changes)
                }
                handleChange(e) {
                    return e.changes.touchesRange(u(e.startState)) ? new W(this.source, 0) : this.map(e.changes)
                }
                map(e) {
                    return e.empty || this.explicitPos < 0 ? this : new W(this.source, this.state, e.mapPos(this.explicitPos))
                }
            }
            class C extends W {
                constructor(e, t, n, r, i) {
                    super(e, 2, t), this.result = n, this.from = r, this.to = i
                }
                hasResult() {
                    return !0
                }
                handleUserEvent(e, t, n) {
                    var r;
                    let i = e.changes.mapPos(this.from),
                        s = e.changes.mapPos(this.to, 1),
                        a = u(e.state);
                    if ((this.explicitPos < 0 ? a <= i : a < this.from) || a > s || "delete" == t && u(e.startState) == this.from) return new W(this.source, "input" == t && n.activateOnTyping ? 1 : 0);
                    let l = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos),
                        c;
                    return ! function (e, t, n, r) {
                        if (!e) return !1;
                        let i = t.sliceDoc(n, r);
                        return "function" == typeof e ? e(i, n, r, t) : f(e, !0).test(i)
                    }(this.result.validFor, e.state, i, s) ? this.result.update && (c = this.result.update(this.result, i, s, new o(e.state, a, l >= 0))) ? new C(this.source, l, c, c.from, null !== (r = c.to) && void 0 !== r ? r : u(e.state)) : new W(this.source, 1, l) : new C(this.source, l, this.result, i, s)
                }
                handleChange(e) {
                    return e.changes.touchesRange(this.from, this.to) ? new W(this.source, 0) : this.map(e.changes)
                }
                map(e) {
                    return e.empty ? this : new C(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1))
                }
            }
            let X = r.Py.define({
                    map: (e, t) => e.map(e => e.map(t))
                }),
                E = r.Py.define(),
                A = r.QQ.define({
                    create: () => P.start(),
                    update: (e, t) => e.update(t),
                    provide: e => [i.hJ.from(e, e => e.tooltip), i.tk.contentAttributes.from(e, e => e.attrs)]
                });

            function V(e, t) {
                let n = t.completion.apply || t.completion.label,
                    i = e.state.field(A).active.find(e => e.source == t.source);
                return i instanceof C && ("string" == typeof n ? e.dispatch(Object.assign(Object.assign({}, function (e, t, n, i) {
                    let {
                        main: s
                    } = e.selection, o = n - s.from, a = i - s.from;
                    return Object.assign(Object.assign({}, e.changeByRange(l => l != s && n != i && e.sliceDoc(l.from + o, l.from + a) != e.sliceDoc(n, i) ? {
                        range: l
                    } : {
                        changes: {
                            from: l.from + o,
                            to: i == s.from ? l.to : l.from + a,
                            insert: t
                        },
                        range: r.jT.cursor(l.from + o + t.length)
                    })), {
                        userEvent: "input.complete"
                    })
                }(e.state, n, i.from, i.to)), {
                    annotations: p.of(t.completion)
                })) : n(e, t.completion, i.from, i.to), !0)
            }

            function Y(e, t = "option") {
                return n => {
                    let r = n.state.field(A, !1);
                    if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(S).interactionDelay) return !1;
                    let s = 1,
                        o;
                    "page" == t && (o = (0, i.gB)(n, r.open.tooltip)) && (s = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
                    let {
                        length: a
                    } = r.open.options, l = r.open.selected > -1 ? r.open.selected + s * (e ? 1 : -1) : e ? 0 : a - 1;
                    return l < 0 ? l = "page" == t ? 0 : a - 1 : l >= a && (l = "page" == t ? a - 1 : 0), n.dispatch({
                        effects: E.of(l)
                    }), !0
                }
            }
            class D {
                constructor(e, t) {
                    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0
                }
            }
            let j = i.lg.fromClass(class {
                    constructor(e) {
                        for (let t of (this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0, e.state.field(A).active)) 1 == t.state && this.startQuery(t)
                    }
                    update(e) {
                        let t = e.state.field(A);
                        if (!e.selectionSet && !e.docChanged && e.startState.field(A) == t) return;
                        let n = e.transactions.some(e => (e.selection || e.docChanged) && !R(e));
                        for (let t = 0; t < this.running.length; t++) {
                            let r = this.running[t];
                            if (n || r.updates.length + e.transactions.length > 50 && Date.now() - r.time > 1e3) {
                                for (let e of r.context.abortListeners) try {
                                    e()
                                } catch (e) {
                                    (0, i.OO)(this.view.state, e)
                                }
                                r.context.abortListeners = null, this.running.splice(t--, 1)
                            } else r.updates.push(...e.transactions)
                        }
                        if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = t.active.some(e => 1 == e.state && !this.running.some(t => t.active.source == e.source)) ? setTimeout(() => this.startUpdate(), 50) : -1, 0 != this.composing)
                            for (let t of e.transactions) "input" == R(t) ? this.composing = 2 : 2 == this.composing && t.selection && (this.composing = 3)
                    }
                    startUpdate() {
                        this.debounceUpdate = -1;
                        let {
                            state: e
                        } = this.view;
                        for (let t of e.field(A).active) 1 != t.state || this.running.some(e => e.active.source == t.source) || this.startQuery(t)
                    }
                    startQuery(e) {
                        let {
                            state: t
                        } = this.view, n = u(t), r = new o(t, n, e.explicitPos == n), s = new D(e, r);
                        this.running.push(s), Promise.resolve(e.source(r)).then(e => {
                            s.context.aborted || (s.done = e || null, this.scheduleAccept())
                        }, e => {
                            this.view.dispatch({
                                effects: g.of(null)
                            }), (0, i.OO)(this.view.state, e)
                        })
                    }
                    scheduleAccept() {
                        this.running.every(e => void 0 !== e.done) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), 50))
                    }
                    accept() {
                        var e;
                        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
                        let t = [],
                            n = this.view.state.facet(S);
                        for (let r = 0; r < this.running.length; r++) {
                            let i = this.running[r];
                            if (void 0 === i.done) continue;
                            if (this.running.splice(r--, 1), i.done) {
                                let r = new C(i.active.source, i.active.explicitPos, i.done, i.done.from, null !== (e = i.done.to) && void 0 !== e ? e : u(i.updates.length ? i.updates[0].startState : this.view.state));
                                for (let e of i.updates) r = r.update(e, n);
                                if (r.hasResult()) {
                                    t.push(r);
                                    continue
                                }
                            }
                            let s = this.view.state.field(A).active.find(e => e.source == i.active.source);
                            if (s && 1 == s.state) {
                                if (null == i.done) {
                                    let e = new W(i.active.source, 0);
                                    for (let t of i.updates) e = e.update(t, n);
                                    1 != e.state && t.push(e)
                                } else this.startQuery(s)
                            }
                        }
                        t.length && this.view.dispatch({
                            effects: X.of(t)
                        })
                    }
                }, {
                    eventHandlers: {
                        blur(e) {
                            let t = this.view.state.field(A, !1);
                            if (t && t.tooltip && this.view.state.facet(S).closeOnBlur) {
                                let n = t.open && (0, i.gB)(this.view, t.open.tooltip);
                                n && n.dom.contains(e.relatedTarget) || this.view.dispatch({
                                    effects: g.of(null)
                                })
                            }
                        },
                        compositionstart() {
                            this.composing = 1
                        },
                        compositionend() {
                            3 == this.composing && setTimeout(() => this.view.dispatch({
                                effects: m.of(!1)
                            }), 20), this.composing = 0
                        }
                    }
                }),
                M = i.tk.baseTheme({
                    ".cm-tooltip.cm-tooltip-autocomplete": {
                        "& > ul": {
                            fontFamily: "monospace",
                            whiteSpace: "nowrap",
                            overflow: "hidden auto",
                            maxWidth_fallback: "700px",
                            maxWidth: "min(700px, 95vw)",
                            minWidth: "250px",
                            maxHeight: "10em",
                            height: "100%",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            "& > li, & > completion-section": {
                                padding: "1px 3px",
                                lineHeight: 1.2
                            },
                            "& > li": {
                                overflowX: "hidden",
                                textOverflow: "ellipsis",
                                cursor: "pointer"
                            },
                            "& > completion-section": {
                                display: "list-item",
                                borderBottom: "1px solid silver",
                                paddingLeft: "0.5em",
                                opacity: .7
                            }
                        }
                    },
                    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
                        background: "#17c",
                        color: "white"
                    },
                    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
                        background: "#777"
                    },
                    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
                        background: "#347",
                        color: "white"
                    },
                    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
                        background: "#444"
                    },
                    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
                        content: '"\xb7\xb7\xb7"',
                        opacity: .5,
                        display: "block",
                        textAlign: "center"
                    },
                    ".cm-tooltip.cm-completionInfo": {
                        position: "absolute",
                        padding: "3px 9px",
                        width: "max-content",
                        maxWidth: "400px",
                        boxSizing: "border-box"
                    },
                    ".cm-completionInfo.cm-completionInfo-left": {
                        right: "100%"
                    },
                    ".cm-completionInfo.cm-completionInfo-right": {
                        left: "100%"
                    },
                    ".cm-completionInfo.cm-completionInfo-left-narrow": {
                        right: "30px"
                    },
                    ".cm-completionInfo.cm-completionInfo-right-narrow": {
                        left: "30px"
                    },
                    "&light .cm-snippetField": {
                        backgroundColor: "#00000022"
                    },
                    "&dark .cm-snippetField": {
                        backgroundColor: "#ffffff22"
                    },
                    ".cm-snippetFieldPosition": {
                        verticalAlign: "text-top",
                        width: 0,
                        height: "1.15em",
                        display: "inline-block",
                        margin: "0 -0.7px -.7em",
                        borderLeft: "1.4px dotted #888"
                    },
                    ".cm-completionMatchedText": {
                        textDecoration: "underline"
                    },
                    ".cm-completionDetail": {
                        marginLeft: "0.5em",
                        fontStyle: "italic"
                    },
                    ".cm-completionIcon": {
                        fontSize: "90%",
                        width: ".8em",
                        display: "inline-block",
                        textAlign: "center",
                        paddingRight: ".6em",
                        opacity: "0.6",
                        boxSizing: "content-box"
                    },
                    ".cm-completionIcon-function, .cm-completionIcon-method": {
                        "&:after": {
                            content: "'ƒ'"
                        }
                    },
                    ".cm-completionIcon-class": {
                        "&:after": {
                            content: "'○'"
                        }
                    },
                    ".cm-completionIcon-interface": {
                        "&:after": {
                            content: "'◌'"
                        }
                    },
                    ".cm-completionIcon-variable": {
                        "&:after": {
                            content: "'\uD835\uDC65'"
                        }
                    },
                    ".cm-completionIcon-constant": {
                        "&:after": {
                            content: "'\uD835\uDC36'"
                        }
                    },
                    ".cm-completionIcon-type": {
                        "&:after": {
                            content: "'\uD835\uDC61'"
                        }
                    },
                    ".cm-completionIcon-enum": {
                        "&:after": {
                            content: "'∪'"
                        }
                    },
                    ".cm-completionIcon-property": {
                        "&:after": {
                            content: "'□'"
                        }
                    },
                    ".cm-completionIcon-keyword": {
                        "&:after": {
                            content: "'\uD83D\uDD11︎'"
                        }
                    },
                    ".cm-completionIcon-namespace": {
                        "&:after": {
                            content: "'▢'"
                        }
                    },
                    ".cm-completionIcon-text": {
                        "&:after": {
                            content: "'abc'",
                            fontSize: "50%",
                            verticalAlign: "middle"
                        }
                    }
                });
            class _ {
                constructor(e, t, n, r) {
                    this.field = e, this.line = t, this.from = n, this.to = r
                }
            }
            class I {
                constructor(e, t, n) {
                    this.field = e, this.from = t, this.to = n
                }
                map(e) {
                    let t = e.mapPos(this.from, -1, r.gc.TrackDel),
                        n = e.mapPos(this.to, 1, r.gc.TrackDel);
                    return null == t || null == n ? null : new I(this.field, t, n)
                }
            }
            class Z {
                constructor(e, t) {
                    this.lines = e, this.fieldPositions = t
                }
                instantiate(e, t) {
                    let n = [],
                        r = [t],
                        i = e.doc.lineAt(t),
                        o = /^\s*/.exec(i.text)[0];
                    for (let i of this.lines) {
                        if (n.length) {
                            let n = o,
                                a = /^\t*/.exec(i)[0].length;
                            for (let t = 0; t < a; t++) n += e.facet(s.c);
                            r.push(t + n.length - a), i = n + i.slice(a)
                        }
                        n.push(i), t += i.length + 1
                    }
                    return {
                        text: n,
                        ranges: this.fieldPositions.map(e => new I(e.field, r[e.line] + e.from, r[e.line] + e.to))
                    }
                }
                static parse(e) {
                    let t = [],
                        n = [],
                        r = [],
                        i;
                    for (let s of e.split(/\r\n?|\n/)) {
                        for (; i = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(s);) {
                            let e = i[1] ? +i[1] : null,
                                o = i[2] || i[3] || "",
                                a = -1;
                            for (let n = 0; n < t.length; n++)(null != e ? t[n].seq == e : o && t[n].name == o) && (a = n);
                            if (a < 0) {
                                let n = 0;
                                for (; n < t.length && (null == e || null != t[n].seq && t[n].seq < e);) n++;
                                for (let i of (t.splice(n, 0, {
                                        seq: e,
                                        name: o
                                    }), a = n, r)) i.field >= a && i.field++
                            }
                            r.push(new _(a, n.length, i.index, i.index + o.length)), s = s.slice(0, i.index) + o + s.slice(i.index + i[0].length)
                        }
                        for (let e; e = /\\([{}])/.exec(s);)
                            for (let t of (s = s.slice(0, e.index) + e[1] + s.slice(e.index + e[0].length), r)) t.line == n.length && t.from > e.index && (t.from--, t.to--);
                        n.push(s)
                    }
                    return new Z(n, r)
                }
            }
            let G = i.p.widget({
                    widget: new class extends i.l9 {
                        toDOM() {
                            let e = document.createElement("span");
                            return e.className = "cm-snippetFieldPosition", e
                        }
                        ignoreEvent() {
                            return !1
                        }
                    }
                }),
                N = i.p.mark({
                    class: "cm-snippetField"
                });
            class U {
                constructor(e, t) {
                    this.ranges = e, this.active = t, this.deco = i.p.set(e.map(e => (e.from == e.to ? G : N).range(e.from, e.to)))
                }
                map(e) {
                    let t = [];
                    for (let n of this.ranges) {
                        let r = n.map(e);
                        if (!r) return null;
                        t.push(r)
                    }
                    return new U(t, this.active)
                }
                selectionInsideField(e) {
                    return e.ranges.every(e => this.ranges.some(t => t.field == this.active && t.from <= e.from && t.to >= e.to))
                }
            }
            let z = r.Py.define({
                    map: (e, t) => e && e.map(t)
                }),
                B = r.Py.define(),
                L = r.QQ.define({
                    create: () => null,
                    update(e, t) {
                        for (let n of t.effects) {
                            if (n.is(z)) return n.value;
                            if (n.is(B) && e) return new U(e.ranges, n.value)
                        }
                        return e && t.docChanged && (e = e.map(t.changes)), e && t.selection && !e.selectionInsideField(t.selection) && (e = null), e
                    },
                    provide: e => i.tk.decorations.from(e, e => e ? e.deco : i.p.none)
                });

            function F(e, t) {
                return r.jT.create(e.filter(e => e.field == t).map(e => r.jT.range(e.from, e.to)))
            }

            function J(e) {
                return ({
                    state: t,
                    dispatch: n
                }) => {
                    let r = t.field(L, !1);
                    if (!r || e < 0 && 0 == r.active) return !1;
                    let i = r.active + e,
                        s = e > 0 && !r.ranges.some(t => t.field == i + e);
                    return n(t.update({
                        selection: F(r.ranges, i),
                        effects: z.of(s ? null : new U(r.ranges, i))
                    })), !0
                }
            }
            let H = J(1),
                K = J(-1),
                ee = [{
                    key: "Tab",
                    run: H,
                    shift: K
                }, {
                    key: "Escape",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => !!e.field(L, !1) && (t(e.update({
                        effects: z.of(null)
                    })), !0)
                }],
                et = r.r$.define({
                    combine: e => e.length ? e[0] : ee
                }),
                en = r.Wl.highest(i.$f.compute([et], e => e.facet(et)));

            function er(e, t) {
                let n;
                return Object.assign(Object.assign({}, t), {
                    apply: (n = Z.parse(e), (e, t, i, s) => {
                        let {
                            text: o,
                            ranges: a
                        } = n.instantiate(e.state, i), l = {
                            changes: {
                                from: i,
                                to: s,
                                insert: r.xv.of(o)
                            },
                            scrollIntoView: !0,
                            annotations: t ? p.of(t) : void 0
                        };
                        if (a.length && (l.selection = F(a, 0)), a.length > 1) {
                            let t = new U(a, 0),
                                n = l.effects = [z.of(t)];
                            void 0 === e.state.field(L, !1) && n.push(r.Py.appendConfig.of([L, en, ei, M]))
                        }
                        e.dispatch(e.state.update(l))
                    })
                })
            }
            let ei = i.tk.domEventHandlers({
                    mousedown(e, t) {
                        let n = t.state.field(L, !1),
                            r;
                        if (!n || null == (r = t.posAtCoords({
                                x: e.clientX,
                                y: e.clientY
                            }))) return !1;
                        let i = n.ranges.find(e => e.from <= r && e.to >= r);
                        return !!i && i.field != n.active && (t.dispatch({
                            selection: F(n.ranges, i.field),
                            effects: z.of(n.ranges.some(e => e.field > i.field) ? new U(n.ranges, i.field) : null)
                        }), !0)
                    }
                }),
                es = {
                    brackets: ["(", "[", "{", "'", '"'],
                    before: ")]}:;>",
                    stringPrefixes: []
                },
                eo = r.Py.define({
                    map(e, t) {
                        let n = t.mapPos(e, -1, r.gc.TrackAfter);
                        return null == n ? void 0 : n
                    }
                }),
                ea = new class extends r.uU {};
            ea.startSide = 1, ea.endSide = -1;
            let el = r.QQ.define({
                create: () => r.Xs.empty,
                update(e, t) {
                    if (t.selection) {
                        let n = t.state.doc.lineAt(t.selection.main.head).from,
                            i = t.startState.doc.lineAt(t.startState.selection.main.head).from;
                        n != t.changes.mapPos(i, -1) && (e = r.Xs.empty)
                    }
                    for (let n of (e = e.map(t.changes), t.effects)) n.is(eo) && (e = e.update({
                        add: [ea.range(n.value, n.value + 1)]
                    }));
                    return e
                }
            });

            function ec() {
                return [ed, el]
            }
            let eh = "()[]{}<>";

            function eu(e) {
                for (let t = 0; t < eh.length; t += 2)
                    if (eh.charCodeAt(t) == e) return eh.charAt(t + 1);
                return (0, r.bg)(e < 128 ? e : e + 1)
            }

            function ef(e, t) {
                return e.languageDataAt("closeBrackets", t)[0] || es
            }
            let ep = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
                ed = i.tk.inputHandler.of((e, t, n, i) => {
                    if ((ep ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
                    let o = e.state.selection.main;
                    if (i.length > 2 || 2 == i.length && 1 == (0, r.nZ)((0, r.gm)(i, 0)) || t != o.from || n != o.to) return !1;
                    let a = function (e, t) {
                        let n = ef(e, e.selection.main.head),
                            i = n.brackets || es.brackets;
                        for (let o of i) {
                            let a = eu((0, r.gm)(o, 0));
                            if (t == o) return a == o ? function (e, t, n, i) {
                                let o = i.stringPrefixes || es.stringPrefixes,
                                    a = null,
                                    l = e.changeByRange(i => {
                                        if (!i.empty) return {
                                            changes: [{
                                                insert: t,
                                                from: i.from
                                            }, {
                                                insert: t,
                                                from: i.to
                                            }],
                                            effects: eo.of(i.to + t.length),
                                            range: r.jT.range(i.anchor + t.length, i.head + t.length)
                                        };
                                        let l = i.head,
                                            c = eg(e.doc, l),
                                            h;
                                        if (c == t) {
                                            if (ex(e, l)) return {
                                                changes: {
                                                    insert: t + t,
                                                    from: l
                                                },
                                                effects: eo.of(l + t.length),
                                                range: r.jT.cursor(l + t.length)
                                            };
                                            if (em(e, l)) {
                                                let i = n && e.sliceDoc(l, l + 3 * t.length) == t + t + t ? t + t + t : t;
                                                return {
                                                    changes: {
                                                        from: l,
                                                        to: l + i.length,
                                                        insert: i
                                                    },
                                                    range: r.jT.cursor(l + i.length)
                                                }
                                            }
                                        } else if (n && e.sliceDoc(l - 2 * t.length, l) == t + t && (h = eS(e, l - 2 * t.length, o)) > -1 && ex(e, h)) return {
                                            changes: {
                                                insert: t + t + t + t,
                                                from: l
                                            },
                                            effects: eo.of(l + t.length),
                                            range: r.jT.cursor(l + t.length)
                                        };
                                        else if (e.charCategorizer(l)(c) != r.D0.Word && eS(e, l, o) > -1 && ! function (e, t, n, r) {
                                                let i = (0, s.qz)(e).resolveInner(t, -1),
                                                    o = r.reduce((e, t) => Math.max(e, t.length), 0);
                                                for (let s = 0; s < 5; s++) {
                                                    let s = e.sliceDoc(i.from, Math.min(i.to, i.from + n.length + o)),
                                                        a = s.indexOf(n);
                                                    if (!a || a > -1 && r.indexOf(s.slice(0, a)) > -1) {
                                                        let t = i.firstChild;
                                                        for (; t && t.from == i.from && t.to - t.from > n.length + a;) {
                                                            if (e.sliceDoc(t.to - n.length, t.to) == n) return !1;
                                                            t = t.firstChild
                                                        }
                                                        return !0
                                                    }
                                                    let l = i.to == t && i.parent;
                                                    if (!l) break;
                                                    i = l
                                                }
                                                return !1
                                            }(e, l, t, o)) return {
                                            changes: {
                                                insert: t + t,
                                                from: l
                                            },
                                            effects: eo.of(l + t.length),
                                            range: r.jT.cursor(l + t.length)
                                        };
                                        return {
                                            range: a = i
                                        }
                                    });
                                return a ? null : e.update(l, {
                                    scrollIntoView: !0,
                                    userEvent: "input.type"
                                })
                            }(e, o, i.indexOf(o + o + o) > -1, n) : function (e, t, n, i) {
                                let s = null,
                                    o = e.changeByRange(o => {
                                        if (!o.empty) return {
                                            changes: [{
                                                insert: t,
                                                from: o.from
                                            }, {
                                                insert: n,
                                                from: o.to
                                            }],
                                            effects: eo.of(o.to + t.length),
                                            range: r.jT.range(o.anchor + t.length, o.head + t.length)
                                        };
                                        let a = eg(e.doc, o.head);
                                        return !a || /\s/.test(a) || i.indexOf(a) > -1 ? {
                                            changes: {
                                                insert: t + n,
                                                from: o.head
                                            },
                                            effects: eo.of(o.head + t.length),
                                            range: r.jT.cursor(o.head + t.length)
                                        } : {
                                            range: s = o
                                        }
                                    });
                                return s ? null : e.update(o, {
                                    scrollIntoView: !0,
                                    userEvent: "input.type"
                                })
                            }(e, o, a, n.before || es.before);
                            if (t == a && em(e, e.selection.main.from)) return function (e, t, n) {
                                let i = null,
                                    s = e.changeByRange(t => t.empty && eg(e.doc, t.head) == n ? {
                                        changes: {
                                            from: t.head,
                                            to: t.head + n.length,
                                            insert: n
                                        },
                                        range: r.jT.cursor(t.head + n.length)
                                    } : i = {
                                        range: t
                                    });
                                return i ? null : e.update(s, {
                                    scrollIntoView: !0,
                                    userEvent: "input.type"
                                })
                            }(e, 0, a)
                        }
                        return null
                    }(e.state, i);
                    return !!a && (e.dispatch(a), !0)
                }),
                eO = [{
                    key: "Backspace",
                    run: ({
                        state: e,
                        dispatch: t
                    }) => {
                        if (e.readOnly) return !1;
                        let n = ef(e, e.selection.main.head).brackets || es.brackets,
                            i = null,
                            s = e.changeByRange(t => {
                                if (t.empty) {
                                    var s, o;
                                    let i;
                                    let a = (s = e.doc, o = t.head, i = s.sliceString(o - 2, o), (0, r.nZ)((0, r.gm)(i, 0)) == i.length ? i : i.slice(1));
                                    for (let i of n)
                                        if (i == a && eg(e.doc, t.head) == eu((0, r.gm)(i, 0))) return {
                                            changes: {
                                                from: t.head - i.length,
                                                to: t.head + i.length
                                            },
                                            range: r.jT.cursor(t.head - i.length)
                                        }
                                }
                                return {
                                    range: i = t
                                }
                            });
                        return i || t(e.update(s, {
                            scrollIntoView: !0,
                            userEvent: "delete.backward"
                        })), !i
                    }
                }];

            function em(e, t) {
                let n = !1;
                return e.field(el).between(0, e.doc.length, e => {
                    e == t && (n = !0)
                }), n
            }

            function eg(e, t) {
                let n = e.sliceString(t, t + 2);
                return n.slice(0, (0, r.nZ)((0, r.gm)(n, 0)))
            }

            function ex(e, t) {
                let n = (0, s.qz)(e).resolveInner(t + 1);
                return n.parent && n.from == t
            }

            function eS(e, t, n) {
                let i = e.charCategorizer(t);
                if (i(e.sliceDoc(t - 1, t)) != r.D0.Word) return t;
                for (let s of n) {
                    let n = t - s.length;
                    if (e.sliceDoc(n, t) == s && i(e.sliceDoc(n - 1, n)) != r.D0.Word) return n
                }
                return -1
            }

            function ey(e = {}) {
                return [A, S.of(e), j, ev, M]
            }
            let eb = [{
                    key: "Ctrl-Space",
                    run: e => !!e.state.field(A, !1) && (e.dispatch({
                        effects: m.of(!0)
                    }), !0)
                }, {
                    key: "Escape",
                    run: e => {
                        let t = e.state.field(A, !1);
                        return !!(t && t.active.some(e => 0 != e.state)) && (e.dispatch({
                            effects: g.of(null)
                        }), !0)
                    }
                }, {
                    key: "ArrowDown",
                    run: Y(!0)
                }, {
                    key: "ArrowUp",
                    run: Y(!1)
                }, {
                    key: "PageDown",
                    run: Y(!0, "page")
                }, {
                    key: "PageUp",
                    run: Y(!1, "page")
                }, {
                    key: "Enter",
                    run: e => {
                        let t = e.state.field(A, !1);
                        return !(e.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < e.state.facet(S).interactionDelay) && V(e, t.open.options[t.open.selected])
                    }
                }],
                ev = r.Wl.highest(i.$f.computeN([S], e => e.facet(S).defaultKeymap ? [eb] : []))
        },
        6078: function (e, t, n) {
            n.d(t, {
                Vs: function () {
                    return ef
                }
            });
            var r, i, s, o, a, l, c = n(4998),
                h = n(2982);
            class u {
                constructor(e, t, n, r, i, s, o, a, l, c = 0, h) {
                    this.p = e, this.stack = t, this.state = n, this.reducePos = r, this.pos = i, this.score = s, this.buffer = o, this.bufferBase = a, this.curContext = l, this.lookAhead = c, this.parent = h
                }
                toString() {
                    return `[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
                }
                static start(e, t, n = 0) {
                    let r = e.parser.context;
                    return new u(e, [], t, n, n, 0, [], 0, r ? new f(r, r.start) : null, 0, null)
                }
                get context() {
                    return this.curContext ? this.curContext.context : null
                }
                pushState(e, t) {
                    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e
                }
                reduce(e) {
                    var t;
                    let n = e >> 19,
                        r = 65535 & e,
                        {
                            parser: i
                        } = this.p,
                        s = i.dynamicPrecedence(r);
                    if (s && (this.score += s), 0 == n) {
                        this.pushState(i.getGoto(this.state, r, !0), this.reducePos), r < i.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, 4, !0), this.reduceContext(r, this.reducePos);
                        return
                    }
                    let o = this.stack.length - (n - 1) * 3 - (262144 & e ? 6 : 0),
                        a = o ? this.stack[o - 2] : this.p.ranges[0].from,
                        l = this.reducePos - a;
                    l >= 2e3 && !(null === (t = this.p.parser.nodeSet.types[r]) || void 0 === t ? void 0 : t.isAnonymous) && (a == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = l) : this.p.lastBigReductionSize < l && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = a, this.p.lastBigReductionSize = l));
                    let c = o ? this.stack[o - 1] : 0,
                        h = this.bufferBase + this.buffer.length - c;
                    if (r < i.minRepeatTerm || 131072 & e) {
                        let e = i.stateFlag(this.state, 1) ? this.pos : this.reducePos;
                        this.storeNode(r, a, e, h + 4, !0)
                    }
                    if (262144 & e) this.state = this.stack[o];
                    else {
                        let e = this.stack[o - 3];
                        this.state = i.getGoto(e, r, !0)
                    }
                    for (; this.stack.length > o;) this.stack.pop();
                    this.reduceContext(r, a)
                }
                storeNode(e, t, n, r = 4, i = !1) {
                    if (0 == e && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
                        let e = this,
                            r = this.buffer.length;
                        if (0 == r && e.parent && (r = e.bufferBase - e.parent.bufferBase, e = e.parent), r > 0 && 0 == e.buffer[r - 4] && e.buffer[r - 1] > -1) {
                            if (t == n) return;
                            if (e.buffer[r - 2] >= t) {
                                e.buffer[r - 2] = n;
                                return
                            }
                        }
                    }
                    if (i && this.pos != n) {
                        let i = this.buffer.length;
                        if (i > 0 && 0 != this.buffer[i - 4])
                            for (; i > 0 && this.buffer[i - 2] > n;) this.buffer[i] = this.buffer[i - 4], this.buffer[i + 1] = this.buffer[i - 3], this.buffer[i + 2] = this.buffer[i - 2], this.buffer[i + 3] = this.buffer[i - 1], i -= 4, r > 4 && (r -= 4);
                        this.buffer[i] = e, this.buffer[i + 1] = t, this.buffer[i + 2] = n, this.buffer[i + 3] = r
                    } else this.buffer.push(e, t, n, r)
                }
                shift(e, t, n) {
                    let r = this.pos;
                    if (131072 & e) this.pushState(65535 & e, this.pos);
                    else if ((262144 & e) == 0) {
                        let {
                            parser: i
                        } = this.p;
                        (n > this.pos || t <= i.maxNode) && (this.pos = n, i.stateFlag(e, 1) || (this.reducePos = n)), this.pushState(e, r), this.shiftContext(t, r), t <= i.maxNode && this.buffer.push(t, r, n, 4)
                    } else this.pos = n, this.shiftContext(t, r), t <= this.p.parser.maxNode && this.buffer.push(t, r, n, 4)
                }
                apply(e, t, n) {
                    65536 & e ? this.reduce(e) : this.shift(e, t, n)
                }
                useNode(e, t) {
                    let n = this.p.reused.length - 1;
                    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
                    let r = this.pos;
                    this.reducePos = this.pos = r + e.length, this.pushState(t, r), this.buffer.push(n, r, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)))
                }
                split() {
                    let e = this,
                        t = e.buffer.length;
                    for (; t > 0 && e.buffer[t - 2] > e.reducePos;) t -= 4;
                    let n = e.buffer.slice(t),
                        r = e.bufferBase + t;
                    for (; e && r == e.bufferBase;) e = e.parent;
                    return new u(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, r, this.curContext, this.lookAhead, e)
                }
                recoverByDelete(e, t) {
                    let n = e <= this.p.parser.maxNode;
                    n && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, n ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190
                }
                canShift(e) {
                    for (let t = new p(this);;) {
                        let n = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e);
                        if (0 == n) return !1;
                        if ((65536 & n) == 0) return !0;
                        t.reduce(n)
                    }
                }
                recoverByInsert(e) {
                    if (this.stack.length >= 300) return [];
                    let t = this.p.parser.nextStates(this.state);
                    if (t.length > 8 || this.stack.length >= 120) {
                        let n = [];
                        for (let r = 0, i; r < t.length; r += 2)(i = t[r + 1]) != this.state && this.p.parser.hasAction(i, e) && n.push(t[r], i);
                        if (this.stack.length < 120)
                            for (let e = 0; n.length < 8 && e < t.length; e += 2) {
                                let r = t[e + 1];
                                n.some((e, t) => 1 & t && e == r) || n.push(t[e], r)
                            }
                        t = n
                    }
                    let n = [];
                    for (let e = 0; e < t.length && n.length < 4; e += 2) {
                        let r = t[e + 1];
                        if (r == this.state) continue;
                        let i = this.split();
                        i.pushState(r, this.pos), i.storeNode(0, i.pos, i.pos, 4, !0), i.shiftContext(t[e], this.pos), i.score -= 200, n.push(i)
                    }
                    return n
                }
                forceReduce() {
                    let {
                        parser: e
                    } = this.p, t = e.stateSlot(this.state, 5);
                    if ((65536 & t) == 0) return !1;
                    if (!e.validAction(this.state, t)) {
                        let n = t >> 19,
                            r = 65535 & t,
                            i = this.stack.length - 3 * n;
                        if (i < 0 || 0 > e.getGoto(this.stack[i], r, !1)) {
                            let e = this.findForcedReduction();
                            if (null == e) return !1;
                            t = e
                        }
                        this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
                    }
                    return this.reducePos = this.pos, this.reduce(t), !0
                }
                findForcedReduction() {
                    let {
                        parser: e
                    } = this.p, t = [], n = (r, i) => {
                        if (!t.includes(r)) return t.push(r), e.allActions(r, t => {
                            if (393216 & t);
                            else if (65536 & t) {
                                let n = (t >> 19) - i;
                                if (n > 1) {
                                    let r = 65535 & t,
                                        i = this.stack.length - 3 * n;
                                    if (i >= 0 && e.getGoto(this.stack[i], r, !1) >= 0) return n << 19 | 65536 | r
                                }
                            } else {
                                let e = n(t, i + 1);
                                if (null != e) return e
                            }
                        })
                    };
                    return n(this.state, 0)
                }
                forceAll() {
                    for (; !this.p.parser.stateFlag(this.state, 2);)
                        if (!this.forceReduce()) {
                            this.storeNode(0, this.pos, this.pos, 4, !0);
                            break
                        } return this
                }
                get deadEnd() {
                    if (3 != this.stack.length) return !1;
                    let {
                        parser: e
                    } = this.p;
                    return 65535 == e.data[e.stateSlot(this.state, 1)] && !e.stateSlot(this.state, 4)
                }
                restart() {
                    this.state = this.stack[0], this.stack.length = 0
                }
                sameState(e) {
                    if (this.state != e.state || this.stack.length != e.stack.length) return !1;
                    for (let t = 0; t < this.stack.length; t += 3)
                        if (this.stack[t] != e.stack[t]) return !1;
                    return !0
                }
                get parser() {
                    return this.p.parser
                }
                dialectEnabled(e) {
                    return this.p.parser.dialect.flags[e]
                }
                shiftContext(e, t) {
                    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)))
                }
                reduceContext(e, t) {
                    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)))
                }
                emitContext() {
                    let e = this.buffer.length - 1;
                    (e < 0 || -3 != this.buffer[e]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
                }
                emitLookAhead() {
                    let e = this.buffer.length - 1;
                    (e < 0 || -4 != this.buffer[e]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
                }
                updateContext(e) {
                    if (e != this.curContext.context) {
                        let t = new f(this.curContext.tracker, e);
                        t.hash != this.curContext.hash && this.emitContext(), this.curContext = t
                    }
                }
                setLookAhead(e) {
                    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e)
                }
                close() {
                    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
                }
            }
            class f {
                constructor(e, t) {
                    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0
                }
            }(r = o || (o = {}))[r.Insert = 200] = "Insert", r[r.Delete = 190] = "Delete", r[r.Reduce = 100] = "Reduce", r[r.MaxNext = 4] = "MaxNext", r[r.MaxInsertStackDepth = 300] = "MaxInsertStackDepth", r[r.DampenInsertStackDepth = 120] = "DampenInsertStackDepth", r[r.MinBigReduction = 2e3] = "MinBigReduction";
            class p {
                constructor(e) {
                    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length
                }
                reduce(e) {
                    let t = e >> 19;
                    0 == t ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (t - 1) * 3;
                    let n = this.start.p.parser.getGoto(this.stack[this.base - 3], 65535 & e, !0);
                    this.state = n
                }
            }
            class d {
                constructor(e, t, n) {
                    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, 0 == this.index && this.maybeNext()
                }
                static create(e, t = e.bufferBase + e.buffer.length) {
                    return new d(e, t, t - e.bufferBase)
                }
                maybeNext() {
                    let e = this.stack.parent;
                    null != e && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer)
                }
                get id() {
                    return this.buffer[this.index - 4]
                }
                get start() {
                    return this.buffer[this.index - 3]
                }
                get end() {
                    return this.buffer[this.index - 2]
                }
                get size() {
                    return this.buffer[this.index - 1]
                }
                next() {
                    this.index -= 4, this.pos -= 4, 0 == this.index && this.maybeNext()
                }
                fork() {
                    return new d(this.stack, this.pos, this.index)
                }
            }

            function O(e, t = Uint16Array) {
                if ("string" != typeof e) return e;
                let n = null;
                for (let r = 0, i = 0; r < e.length;) {
                    let s = 0;
                    for (;;) {
                        let t = e.charCodeAt(r++),
                            n = !1;
                        if (126 == t) {
                            s = 65535;
                            break
                        }
                        t >= 92 && t--, t >= 34 && t--;
                        let i = t - 32;
                        if (i >= 46 && (i -= 46, n = !0), s += i, n) break;
                        s *= 46
                    }
                    n ? n[i++] = s : n = new t(s)
                }
                return n
            }
            class m {
                constructor() {
                    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
                }
            }
            let g = new m;
            class x {
                constructor(e, t) {
                    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = g, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext()
                }
                resolveOffset(e, t) {
                    let n = this.range,
                        r = this.rangeIndex,
                        i = this.pos + e;
                    for (; i < n.from;) {
                        if (!r) return null;
                        let e = this.ranges[--r];
                        i -= n.from - e.to, n = e
                    }
                    for (; t < 0 ? i > n.to : i >= n.to;) {
                        if (r == this.ranges.length - 1) return null;
                        let e = this.ranges[++r];
                        i += e.from - n.to, n = e
                    }
                    return i
                }
                clipPos(e) {
                    if (e >= this.range.from && e < this.range.to) return e;
                    for (let t of this.ranges)
                        if (t.to > e) return Math.max(e, t.from);
                    return this.end
                }
                peek(e) {
                    let t = this.chunkOff + e,
                        n, r;
                    if (t >= 0 && t < this.chunk.length) n = this.pos + e, r = this.chunk.charCodeAt(t);
                    else {
                        let t = this.resolveOffset(e, 1);
                        if (null == t) return -1;
                        if ((n = t) >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length) r = this.chunk2.charCodeAt(n - this.chunk2Pos);
                        else {
                            let e = this.rangeIndex,
                                t = this.range;
                            for (; t.to <= n;) t = this.ranges[++e];
                            this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > t.to && (this.chunk2 = this.chunk2.slice(0, t.to - n)), r = this.chunk2.charCodeAt(0)
                        }
                    }
                    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), r
                }
                acceptToken(e, t = 0) {
                    let n = t ? this.resolveOffset(t, -1) : this.pos;
                    if (null == n || n < this.token.start) throw RangeError("Token end out of bounds");
                    this.token.value = e, this.token.end = n
                }
                getChunk() {
                    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
                        let {
                            chunk: e,
                            chunkPos: t
                        } = this;
                        this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos
                    } else {
                        this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
                        let e = this.input.chunk(this.pos),
                            t = this.pos + e.length;
                        this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0
                    }
                }
                readNext() {
                    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
                }
                advance(e = 1) {
                    for (this.chunkOff += e; this.pos + e >= this.range.to;) {
                        if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
                        e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from
                    }
                    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
                }
                setDone() {
                    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1
                }
                reset(e, t) {
                    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = g, this.pos != e) {
                        if (this.pos = e, e == this.end) return this.setDone(), this;
                        for (; e < this.range.from;) this.range = this.ranges[--this.rangeIndex];
                        for (; e >= this.range.to;) this.range = this.ranges[++this.rangeIndex];
                        e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
                    }
                    return this
                }
                read(e, t) {
                    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length) return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
                    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
                    if (e >= this.range.from && t <= this.range.to) return this.input.read(e, t);
                    let n = "";
                    for (let r of this.ranges) {
                        if (r.from >= t) break;
                        r.to > e && (n += this.input.read(Math.max(r.from, e), Math.min(r.to, t)))
                    }
                    return n
                }
            }
            class S {
                constructor(e, t) {
                    this.data = e, this.id = t
                }
                token(e, t) {
                    let {
                        parser: n
                    } = t.p;
                    b(this.data, e, t, this.id, n.data, n.tokenPrecTable)
                }
            }
            S.prototype.contextual = S.prototype.fallback = S.prototype.extend = !1, (class {
                constructor(e, t, n) {
                    this.precTable = t, this.elseToken = n, this.data = "string" == typeof e ? O(e) : e
                }
                token(e, t) {
                    let n = e.pos,
                        r = 0;
                    for (;;) {
                        let n = e.next < 0,
                            i = e.resolveOffset(1, 1);
                        if (b(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1) break;
                        if (null == this.elseToken) return;
                        if (!n && r++, null == i) break;
                        e.reset(i, e.token)
                    }
                    r && (e.reset(n, e.token), e.acceptToken(this.elseToken, r))
                }
            }).prototype.contextual = S.prototype.fallback = S.prototype.extend = !1;
            class y {
                constructor(e, t = {}) {
                    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend
                }
            }

            function b(e, t, n, r, i, s) {
                let o = 0,
                    a = 1 << r,
                    {
                        dialect: l
                    } = n.p.parser;
                t: for (;
                    (a & e[o]) != 0;) {
                    let n = e[o + 1];
                    for (let r = o + 3; r < n; r += 2)
                        if ((e[r + 1] & a) > 0) {
                            let n = e[r];
                            if (l.allows(n) && (-1 == t.token.value || t.token.value == n || function (e, t, n, r) {
                                    let i = v(n, r, t);
                                    return i < 0 || v(n, r, e) < i
                                }(n, t.token.value, i, s))) {
                                t.acceptToken(n);
                                break
                            }
                        } let r = t.next,
                        c = 0,
                        h = e[o + 2];
                    if (t.next < 0 && h > c && 65535 == e[n + 3 * h - 3] && 65535 == e[n + 3 * h - 3]) {
                        o = e[n + 3 * h - 1];
                        continue
                    }
                    for (; c < h;) {
                        let i = c + h >> 1,
                            s = n + i + (i << 1),
                            a = e[s],
                            l = e[s + 1] || 65536;
                        if (r < a) h = i;
                        else if (r >= l) c = i + 1;
                        else {
                            o = e[s + 2], t.advance();
                            continue t
                        }
                    }
                    break
                }
            }

            function v(e, t, n) {
                for (let r = t, i; 65535 != (i = e[r]); r++)
                    if (i == n) return r - t;
                return -1
            }
            let w = void 0 !== h && h.env && /\bparse\b/.test(h.env.LOG),
                T = null;

            function k(e, t, n) {
                let r = e.cursor(c.vj.IncludeAnonymous);
                for (r.moveTo(t);;)
                    if (!(n < 0 ? r.childBefore(t) : r.childAfter(t)))
                        for (;;) {
                            if ((n < 0 ? r.to < t : r.from > t) && !r.type.isError) return n < 0 ? Math.max(0, Math.min(r.to - 1, t - 25)) : Math.min(e.length, Math.max(r.from + 1, t + 25));
                            if (n < 0 ? r.prevSibling() : r.nextSibling()) break;
                            if (!r.parent()) return n < 0 ? 0 : e.length
                        }
            }(i = a || (a = {}))[i.Margin = 25] = "Margin";
            class P {
                constructor(e, t) {
                    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
                }
                nextFragment() {
                    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
                    if (e) {
                        for (this.safeFrom = e.openStart ? k(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? k(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
                        this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom
                    } else this.nextStart = 1e9
                }
                nodeAt(e) {
                    if (e < this.nextStart) return null;
                    for (; this.fragment && this.safeTo <= e;) this.nextFragment();
                    if (!this.fragment) return null;
                    for (;;) {
                        let t = this.trees.length - 1;
                        if (t < 0) return this.nextFragment(), null;
                        let n = this.trees[t],
                            r = this.index[t];
                        if (r == n.children.length) {
                            this.trees.pop(), this.start.pop(), this.index.pop();
                            continue
                        }
                        let i = n.children[r],
                            s = this.start[t] + n.positions[r];
                        if (s > e) return this.nextStart = s, null;
                        if (i instanceof c.mp) {
                            if (s == e) {
                                if (s < this.safeFrom) return null;
                                let e = s + i.length;
                                if (e <= this.safeTo) {
                                    let t = i.prop(c.md.lookAhead);
                                    if (!t || e + t < this.fragment.to) return i
                                }
                            }
                            this.index[t]++, s + i.length >= Math.max(this.safeFrom, e) && (this.trees.push(i), this.start.push(s), this.index.push(0))
                        } else this.index[t]++, this.nextStart = s + i.length
                    }
                }
            }
            class Q {
                constructor(e, t) {
                    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map(e => new m)
                }
                getActions(e) {
                    let t = 0,
                        n = null,
                        {
                            parser: r
                        } = e.p,
                        {
                            tokenizers: i
                        } = r,
                        s = r.stateSlot(e.state, 3),
                        o = e.curContext ? e.curContext.hash : 0,
                        a = 0;
                    for (let r = 0; r < i.length; r++) {
                        if ((1 << r & s) == 0) continue;
                        let l = i[r],
                            c = this.tokens[r];
                        if ((!n || l.fallback) && ((l.contextual || c.start != e.pos || c.mask != s || c.context != o) && (this.updateCachedToken(c, l, e), c.mask = s, c.context = o), c.lookAhead > c.end + 25 && (a = Math.max(c.lookAhead, a)), 0 != c.value)) {
                            let r = t;
                            if (c.extended > -1 && (t = this.addActions(e, c.extended, c.end, t)), t = this.addActions(e, c.value, c.end, t), !l.extend && (n = c, t > r)) break
                        }
                    }
                    for (; this.actions.length > t;) this.actions.pop();
                    return a && e.setLookAhead(a), n || e.pos != this.stream.end || ((n = new m).value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions
                }
                getMainToken(e) {
                    if (this.mainToken) return this.mainToken;
                    let t = new m,
                        {
                            pos: n,
                            p: r
                        } = e;
                    return t.start = n, t.end = Math.min(n + 1, r.stream.end), t.value = n == r.stream.end ? r.parser.eofTerm : 0, t
                }
                updateCachedToken(e, t, n) {
                    let r = this.stream.clipPos(n.pos);
                    if (t.token(this.stream.reset(r, e), n), e.value > -1) {
                        let {
                            parser: t
                        } = n.p;
                        for (let r = 0; r < t.specialized.length; r++)
                            if (t.specialized[r] == e.value) {
                                let i = t.specializers[r](this.stream.read(e.start, e.end), n);
                                if (i >= 0 && n.p.parser.dialect.allows(i >> 1)) {
                                    (1 & i) == 0 ? e.value = i >> 1 : e.extended = i >> 1;
                                    break
                                }
                            }
                    } else e.value = 0, e.end = this.stream.clipPos(r + 1)
                }
                putAction(e, t, n, r) {
                    for (let t = 0; t < r; t += 3)
                        if (this.actions[t] == e) return r;
                    return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = n, r
                }
                addActions(e, t, n, r) {
                    let {
                        state: i
                    } = e, {
                        parser: s
                    } = e.p, {
                        data: o
                    } = s;
                    for (let e = 0; e < 2; e++)
                        for (let a = s.stateSlot(i, e ? 2 : 1);; a += 3) {
                            if (65535 == o[a]) {
                                if (1 == o[a + 1]) a = X(o, a + 2);
                                else {
                                    0 == r && 2 == o[a + 1] && (r = this.putAction(X(o, a + 2), t, n, r));
                                    break
                                }
                            }
                            o[a] == t && (r = this.putAction(X(o, a + 1), t, n, r))
                        }
                    return r
                }
            }(s = l || (l = {}))[s.Distance = 5] = "Distance", s[s.MaxRemainingPerStep = 3] = "MaxRemainingPerStep", s[s.MinBufferLengthPrune = 500] = "MinBufferLengthPrune", s[s.ForceReduceLimit = 10] = "ForceReduceLimit", s[s.CutDepth = 15e3] = "CutDepth", s[s.CutTo = 9e3] = "CutTo", s[s.MaxLeftAssociativeReductionCount = 300] = "MaxLeftAssociativeReductionCount", s[s.MaxStackCount = 12] = "MaxStackCount";
            class q {
                constructor(e, t, n, r) {
                    this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new x(t, r), this.tokens = new Q(e, this.stream), this.topTerm = e.top[1];
                    let {
                        from: i
                    } = r[0];
                    this.stacks = [u.start(this, e.top[0], i)], this.fragments = n.length && this.stream.end - i > 4 * e.bufferLength ? new P(n, e.nodeSet) : null
                }
                get parsedPos() {
                    return this.minStackPos
                }
                advance() {
                    let e, t, n = this.stacks,
                        r = this.minStackPos,
                        i = this.stacks = [];
                    if (this.bigReductionCount > 300 && 1 == n.length) {
                        let [e] = n;
                        for (; e.forceReduce() && e.stack.length && e.stack[e.stack.length - 2] >= this.lastBigReductionStart;);
                        this.bigReductionCount = this.lastBigReductionSize = 0
                    }
                    for (let s = 0; s < n.length; s++) {
                        let o = n[s];
                        for (;;) {
                            if (this.tokens.mainToken = null, o.pos > r) i.push(o);
                            else {
                                if (this.advanceStack(o, i, n)) continue;
                                e || (e = [], t = []), e.push(o);
                                let r = this.tokens.getMainToken(o);
                                t.push(r.value, r.end)
                            }
                            break
                        }
                    }
                    if (!i.length) {
                        let t = e && function (e) {
                            let t = null;
                            for (let n of e) {
                                let e = n.p.stoppedAt;
                                (n.pos == n.p.stream.end || null != e && n.pos > e) && n.p.parser.stateFlag(n.state, 2) && (!t || t.score < n.score) && (t = n)
                            }
                            return t
                        }(e);
                        if (t) return this.stackToTree(t);
                        if (this.parser.strict) throw w && e && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), SyntaxError("No parse at " + r);
                        this.recovering || (this.recovering = 5)
                    }
                    if (this.recovering && e) {
                        let n = null != this.stoppedAt && e[0].pos > this.stoppedAt ? e[0] : this.runRecovery(e, t, i);
                        if (n) return this.stackToTree(n.forceAll())
                    }
                    if (this.recovering) {
                        let e = 1 == this.recovering ? 1 : 3 * this.recovering;
                        if (i.length > e)
                            for (i.sort((e, t) => t.score - e.score); i.length > e;) i.pop();
                        i.some(e => e.reducePos > r) && this.recovering--
                    } else if (i.length > 1) {
                        n: for (let e = 0; e < i.length - 1; e++) {
                            let t = i[e];
                            for (let n = e + 1; n < i.length; n++) {
                                let r = i[n];
                                if (t.sameState(r) || t.buffer.length > 500 && r.buffer.length > 500) {
                                    if ((t.score - r.score || t.buffer.length - r.buffer.length) > 0) i.splice(n--, 1);
                                    else {
                                        i.splice(e--, 1);
                                        continue n
                                    }
                                }
                            }
                        }
                        i.length > 12 && i.splice(12, i.length - 12)
                    }
                    this.minStackPos = i[0].pos;
                    for (let e = 1; e < i.length; e++) i[e].pos < this.minStackPos && (this.minStackPos = i[e].pos);
                    return null
                }
                stopAt(e) {
                    if (null != this.stoppedAt && this.stoppedAt < e) throw RangeError("Can't move stoppedAt forward");
                    this.stoppedAt = e
                }
                advanceStack(e, t, n) {
                    let r = e.pos,
                        {
                            parser: i
                        } = this,
                        s = w ? this.stackID(e) + " -> " : "";
                    if (null != this.stoppedAt && r > this.stoppedAt) return e.forceReduce() ? e : null;
                    if (this.fragments) {
                        let t = e.curContext && e.curContext.tracker.strict,
                            n = t ? e.curContext.hash : 0;
                        for (let o = this.fragments.nodeAt(r); o;) {
                            let r = this.parser.nodeSet.types[o.type.id] == o.type ? i.getGoto(e.state, o.type.id) : -1;
                            if (r > -1 && o.length && (!t || (o.prop(c.md.contextHash) || 0) == n)) return e.useNode(o, r), w && console.log(s + this.stackID(e) + ` (via reuse of ${i.getName(o.type.id)})`), !0;
                            if (!(o instanceof c.mp) || 0 == o.children.length || o.positions[0] > 0) break;
                            let a = o.children[0];
                            if (a instanceof c.mp && 0 == o.positions[0]) o = a;
                            else break
                        }
                    }
                    let o = i.stateSlot(e.state, 4);
                    if (o > 0) return e.reduce(o), w && console.log(s + this.stackID(e) + ` (via always-reduce ${i.getName(65535&o)})`), !0;
                    if (e.stack.length >= 15e3)
                        for (; e.stack.length > 9e3 && e.forceReduce(););
                    let a = this.tokens.getActions(e);
                    for (let o = 0; o < a.length;) {
                        let l = a[o++],
                            c = a[o++],
                            h = a[o++],
                            u = o == a.length || !n,
                            f = u ? e : e.split();
                        if (f.apply(l, c, h), w && console.log(s + this.stackID(f) + ` (via ${(65536&l)==0?"shift":`reduce of ${i.getName(65535&l)}`} for ${i.getName(c)} @ ${r}${f==e?"":", split"})`), u) return !0;
                        f.pos > r ? t.push(f) : n.push(f)
                    }
                    return !1
                }
                advanceFully(e, t) {
                    let n = e.pos;
                    for (;;) {
                        if (!this.advanceStack(e, null, null)) return !1;
                        if (e.pos > n) return $(e, t), !0
                    }
                }
                runRecovery(e, t, n) {
                    let r = null,
                        i = !1;
                    for (let s = 0; s < e.length; s++) {
                        let o = e[s],
                            a = t[s << 1],
                            l = t[(s << 1) + 1],
                            c = w ? this.stackID(o) + " -> " : "";
                        if (o.deadEnd && (i || (i = !0, o.restart(), w && console.log(c + this.stackID(o) + " (restarted)"), this.advanceFully(o, n)))) continue;
                        let h = o.split(),
                            u = c;
                        for (let e = 0; h.forceReduce() && e < 10 && (w && console.log(u + this.stackID(h) + " (via force-reduce)"), !this.advanceFully(h, n)); e++) w && (u = this.stackID(h) + " -> ");
                        for (let e of o.recoverByInsert(a)) w && console.log(c + this.stackID(e) + " (via recover-insert)"), this.advanceFully(e, n);
                        this.stream.end > o.pos ? (l == o.pos && (l++, a = 0), o.recoverByDelete(a, l), w && console.log(c + this.stackID(o) + ` (via recover-delete ${this.parser.getName(a)})`), $(o, n)) : (!r || r.score < o.score) && (r = o)
                    }
                    return r
                }
                stackToTree(e) {
                    return e.close(), c.mp.build({
                        buffer: d.create(e),
                        nodeSet: this.parser.nodeSet,
                        topID: this.topTerm,
                        maxBufferLength: this.parser.bufferLength,
                        reused: this.reused,
                        start: this.ranges[0].from,
                        length: e.pos - this.ranges[0].from,
                        minRepeatType: this.parser.minRepeatTerm
                    })
                }
                stackID(e) {
                    let t = (T || (T = new WeakMap)).get(e);
                    return t || T.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e
                }
            }

            function $(e, t) {
                for (let n = 0; n < t.length; n++) {
                    let r = t[n];
                    if (r.pos == e.pos && r.sameState(e)) {
                        t[n].score < e.score && (t[n] = e);
                        return
                    }
                }
                t.push(e)
            }
            class R {
                constructor(e, t, n) {
                    this.source = e, this.flags = t, this.disabled = n
                }
                allows(e) {
                    return !this.disabled || 0 == this.disabled[e]
                }
            }
            let W = e => e;
            class C extends c._b {
                constructor(e) {
                    if (super(), this.wrappers = [], 14 != e.version) throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
                    let t = e.nodeNames.split(" ");
                    this.minRepeatTerm = t.length;
                    for (let n = 0; n < e.repeatNodeCount; n++) t.push("");
                    let n = Object.keys(e.topRules).map(t => e.topRules[t][1]),
                        r = [];
                    for (let e = 0; e < t.length; e++) r.push([]);

                    function i(e, t, n) {
                        r[e].push([t, t.deserialize(String(n))])
                    }
                    if (e.nodeProps)
                        for (let t of e.nodeProps) {
                            let e = t[0];
                            "string" == typeof e && (e = c.md[e]);
                            for (let n = 1; n < t.length;) {
                                let r = t[n++];
                                if (r >= 0) i(r, e, t[n++]);
                                else {
                                    let s = t[n + -r];
                                    for (let o = -r; o > 0; o--) i(t[n++], e, s);
                                    n++
                                }
                            }
                        }
                    this.nodeSet = new c.Lj(t.map((t, i) => c.Jq.define({
                        name: i >= this.minRepeatTerm ? void 0 : t,
                        id: i,
                        props: r[i],
                        top: n.indexOf(i) > -1,
                        error: 0 == i,
                        skipped: e.skippedNodes && e.skippedNodes.indexOf(i) > -1
                    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = c.L3;
                    let s = O(e.tokenData);
                    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
                    for (let e = 0; e < this.specializerSpecs.length; e++) this.specialized[e] = this.specializerSpecs[e].term;
                    this.specializers = this.specializerSpecs.map(E), this.states = O(e.states, Uint32Array), this.data = O(e.stateData), this.goto = O(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map(e => "number" == typeof e ? new S(s, e) : e), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
                }
                createParse(e, t, n) {
                    let r = new q(this, e, t, n);
                    for (let i of this.wrappers) r = i(r, e, t, n);
                    return r
                }
                getGoto(e, t, n = !1) {
                    let r = this.goto;
                    if (t >= r[0]) return -1;
                    for (let i = r[t + 1];;) {
                        let t = r[i++],
                            s = 1 & t,
                            o = r[i++];
                        if (s && n) return o;
                        for (let n = i + (t >> 1); i < n; i++)
                            if (r[i] == e) return o;
                        if (s) return -1
                    }
                }
                hasAction(e, t) {
                    let n = this.data;
                    for (let r = 0; r < 2; r++)
                        for (let i = this.stateSlot(e, r ? 2 : 1), s;; i += 3) {
                            if (65535 == (s = n[i])) {
                                if (1 == n[i + 1]) s = n[i = X(n, i + 2)];
                                else if (2 == n[i + 1]) return X(n, i + 2);
                                else break
                            }
                            if (s == t || 0 == s) return X(n, i + 1)
                        }
                    return 0
                }
                stateSlot(e, t) {
                    return this.states[6 * e + t]
                }
                stateFlag(e, t) {
                    return (this.stateSlot(e, 0) & t) > 0
                }
                validAction(e, t) {
                    return !!this.allActions(e, e => e == t || null)
                }
                allActions(e, t) {
                    let n = this.stateSlot(e, 4),
                        r = n ? t(n) : void 0;
                    for (let n = this.stateSlot(e, 1); null == r; n += 3) {
                        if (65535 == this.data[n]) {
                            if (1 == this.data[n + 1]) n = X(this.data, n + 2);
                            else break
                        }
                        r = t(X(this.data, n + 1))
                    }
                    return r
                }
                nextStates(e) {
                    let t = [];
                    for (let n = this.stateSlot(e, 1);; n += 3) {
                        if (65535 == this.data[n]) {
                            if (1 == this.data[n + 1]) n = X(this.data, n + 2);
                            else break
                        }
                        if ((1 & this.data[n + 2]) == 0) {
                            let e = this.data[n + 1];
                            t.some((t, n) => 1 & n && t == e) || t.push(this.data[n], e)
                        }
                    }
                    return t
                }
                configure(e) {
                    let t = Object.assign(Object.create(C.prototype), this);
                    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
                        let n = this.topRules[e.top];
                        if (!n) throw RangeError(`Invalid top rule name ${e.top}`);
                        t.top = n
                    }
                    return e.tokenizers && (t.tokenizers = this.tokenizers.map(t => {
                        let n = e.tokenizers.find(e => e.from == t);
                        return n ? n.to : t
                    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((n, r) => {
                        let i = e.specializers.find(e => e.from == n.external);
                        if (!i) return n;
                        let s = Object.assign(Object.assign({}, n), {
                            external: i.to
                        });
                        return t.specializers[r] = E(s), s
                    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), null != e.strict && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), null != e.bufferLength && (t.bufferLength = e.bufferLength), t
                }
                hasWrappers() {
                    return this.wrappers.length > 0
                }
                getName(e) {
                    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e)
                }
                get eofTerm() {
                    return this.maxNode + 1
                }
                get topNode() {
                    return this.nodeSet.types[this.top[1]]
                }
                dynamicPrecedence(e) {
                    let t = this.dynamicPrecedences;
                    return null == t ? 0 : t[e] || 0
                }
                parseDialect(e) {
                    let t = Object.keys(this.dialects),
                        n = t.map(() => !1);
                    if (e)
                        for (let r of e.split(" ")) {
                            let e = t.indexOf(r);
                            e >= 0 && (n[e] = !0)
                        }
                    let r = null;
                    for (let e = 0; e < t.length; e++)
                        if (!n[e])
                            for (let n = this.dialects[t[e]], i; 65535 != (i = this.data[n++]);)(r || (r = new Uint8Array(this.maxTerm + 1)))[i] = 1;
                    return new R(e, n, r)
                }
                static deserialize(e) {
                    return new C(e)
                }
            }

            function X(e, t) {
                return e[t] | e[t + 1] << 16
            }

            function E(e) {
                if (e.external) {
                    let t = e.extend ? 1 : 0;
                    return (n, r) => e.external(n, r) << 1 | t
                }
                return e.get
            }
            var A = n(6634);
            let V = new Set([27, 51, 52, 265, 67, 129, 58, 59, 246, 64, 65, 74, 62, 63, 150, 151, 154]);

            function Y(e) {
                return 10 == e || 13 == e
            }
            let D = new y((e, t) => {
                    let n;
                    if (e.next < 0) e.acceptToken(201);
                    else if (t.context.depth < 0) Y(e.next) && e.acceptToken(200, 1);
                    else if (((n = e.peek(-1)) < 0 || Y(n)) && t.canShift(199)) {
                        let t = 0;
                        for (; 32 == e.next || 9 == e.next;) e.advance(), t++;
                        (10 == e.next || 13 == e.next || 35 == e.next) && e.acceptToken(199, -t)
                    } else Y(e.next) && e.acceptToken(198, 1)
                }, {
                    contextual: !0
                }),
                j = new y((e, t) => {
                    let n = t.context.depth;
                    if (n < 0) return;
                    let r = e.peek(-1);
                    if (10 == r || 13 == r) {
                        let t = 0,
                            r = 0;
                        for (;;) {
                            if (32 == e.next) t++;
                            else if (9 == e.next) t += 8 - t % 8;
                            else break;
                            e.advance(), r++
                        }
                        t != n && 10 != e.next && 13 != e.next && 35 != e.next && (t < n ? e.acceptToken(197, -r) : e.acceptToken(196))
                    }
                });

            function M(e, t) {
                this.parent = e, this.depth = t, this.hash = (e ? e.hash + e.hash << 8 : 0) + t + (t << 4)
            }
            let _ = new M(null, 0),
                I = new class {
                    constructor(e) {
                        this.start = e.start, this.shift = e.shift || W, this.reduce = e.reduce || W, this.reuse = e.reuse || W, this.hash = e.hash || (() => 0), this.strict = !1 !== e.strict
                    }
                }({
                    start: _,
                    reduce: (e, t) => e.depth < 0 && V.has(t) ? e.parent : e,
                    shift: (e, t, n, r) => 196 == t ? new M(e, function (e) {
                        let t = 0;
                        for (let n = 0; n < e.length; n++) t += 9 == e.charCodeAt(n) ? 8 - t % 8 : 1;
                        return t
                    }(r.read(r.pos, n.pos))) : 197 == t ? e.parent : 26 == t || 57 == t || 61 == t ? new M(e, -1) : e,
                    hash: e => e.hash
                }),
                Z = new y(e => {
                    for (let t = 0; t < 5; t++) {
                        if (e.next != "print".charCodeAt(t)) return;
                        e.advance()
                    }
                    if (!/\w/.test(String.fromCharCode(e.next)))
                        for (let t = 0;; t++) {
                            let n = e.peek(t);
                            if (32 != n && 9 != n) {
                                40 != n && 46 != n && 10 != n && 13 != n && 35 != n && e.acceptToken(1);
                                return
                            }
                        }
                });

            function G(e, t, n, r, i) {
                return new y(s => {
                    let o = s.pos;
                    for (; !(s.next < 0);)
                        if (123 == s.next) {
                            if (123 == s.peek(1)) s.advance(2);
                            else {
                                if (s.pos == o) {
                                    s.acceptToken(r, 1);
                                    return
                                }
                                break
                            }
                        } else if (92 == s.next) s.advance(), s.next >= 0 && s.advance();
                    else if (s.next == e && (1 == t || s.peek(1) == e && s.peek(2) == e)) {
                        if (s.pos == o) {
                            s.acceptToken(i, t);
                            return
                        }
                        break
                    } else s.advance();
                    s.pos > o && s.acceptToken(n)
                })
            }
            let N = G(39, 1, 202, 2, 203),
                U = G(34, 1, 204, 3, 205),
                z = G(39, 3, 206, 4, 207),
                B = G(34, 3, 208, 5, 209),
                L = (0, A.Gv)({
                    'async "*" "**" FormatConversion FormatSpec': A.pJ.modifier,
                    "for while if elif else try except finally return raise break continue with pass assert await yield match case": A.pJ.controlKeyword,
                    "in not and or is del": A.pJ.operatorKeyword,
                    "from def class global nonlocal lambda": A.pJ.definitionKeyword,
                    import: A.pJ.moduleKeyword,
                    "with as print": A.pJ.keyword,
                    Boolean: A.pJ.bool,
                    None: A.pJ.null,
                    VariableName: A.pJ.variableName,
                    "CallExpression/VariableName": A.pJ.function(A.pJ.variableName),
                    "FunctionDefinition/VariableName": A.pJ.function(A.pJ.definition(A.pJ.variableName)),
                    "ClassDefinition/VariableName": A.pJ.definition(A.pJ.className),
                    PropertyName: A.pJ.propertyName,
                    "CallExpression/MemberExpression/PropertyName": A.pJ.function(A.pJ.propertyName),
                    Comment: A.pJ.lineComment,
                    Number: A.pJ.number,
                    String: A.pJ.string,
                    FormatString: A.pJ.special(A.pJ.string),
                    UpdateOp: A.pJ.updateOperator,
                    "ArithOp!": A.pJ.arithmeticOperator,
                    BitOp: A.pJ.bitwiseOperator,
                    CompareOp: A.pJ.compareOperator,
                    AssignOp: A.pJ.definitionOperator,
                    Ellipsis: A.pJ.punctuation,
                    At: A.pJ.meta,
                    "( )": A.pJ.paren,
                    "[ ]": A.pJ.squareBracket,
                    "{ }": A.pJ.brace,
                    ".": A.pJ.derefOperator,
                    ", ;": A.pJ.separator
                }),
                F = {
                    __proto__: null,
                    await: 48,
                    or: 58,
                    and: 60,
                    in: 64,
                    not: 66,
                    is: 68,
                    if: 74,
                    else: 76,
                    lambda: 80,
                    yield: 98,
                    from: 100,
                    async: 106,
                    for: 108,
                    None: 168,
                    True: 170,
                    False: 170,
                    del: 184,
                    pass: 188,
                    break: 192,
                    continue: 196,
                    return: 200,
                    raise: 208,
                    import: 212,
                    as: 214,
                    global: 218,
                    nonlocal: 220,
                    assert: 224,
                    elif: 234,
                    while: 238,
                    try: 244,
                    except: 246,
                    finally: 248,
                    with: 252,
                    def: 256,
                    class: 266,
                    match: 277,
                    case: 283
                },
                J = C.deserialize({
                    version: 14,
                    states: "#!OO`Q#yOOP$_OSOOO%hQ&nO'#H^OOQS'#Cq'#CqOOQS'#Cr'#CrO'WQ#xO'#CpO(yQ&nO'#H]OOQS'#H^'#H^OOQS'#DW'#DWOOQS'#H]'#H]O)gQ#xO'#DaO)zQ#xO'#DhO*[Q#xO'#DlOOQS'#Dw'#DwO*oO,UO'#DwO*wO7[O'#DwO+POWO'#DxO+[O`O'#DxO+gOpO'#DxO+rO!bO'#DxO-tQ&nO'#G}OOQS'#G}'#G}O'WQ#xO'#G|O/WQ&nO'#G|OOQS'#Ee'#EeO/oQ#xO'#EfOOQS'#G{'#G{O/yQ#xO'#GzOOQV'#Gz'#GzO0UQ#xO'#FXOOQS'#G`'#G`O0ZQ#xO'#FWOOQV'#IS'#ISOOQV'#Gy'#GyOOQV'#Fp'#FpQ`Q#yOOO'WQ#xO'#CsO0iQ#xO'#DPO0pQ#xO'#DTO1OQ#xO'#HbO1`Q&nO'#EYO'WQ#xO'#EZOOQS'#E]'#E]OOQS'#E_'#E_OOQS'#Ea'#EaO1tQ#xO'#EcO2[Q#xO'#EgO0UQ#xO'#EiO2oQ&nO'#EiO0UQ#xO'#ElO/oQ#xO'#EoO/oQ#xO'#EsO/oQ#xO'#EvO2zQ#xO'#ExO3RQ#xO'#E}O3^Q#xO'#EyO/oQ#xO'#E}O0UQ#xO'#FPO0UQ#xO'#FUO3cQ#xO'#FZP3jO#xO'#GxPOOO)CBl)CBlOOQS'#Cg'#CgOOQS'#Ch'#ChOOQS'#Ci'#CiOOQS'#Cj'#CjOOQS'#Ck'#CkOOQS'#Cl'#ClOOQS'#Cn'#CnO'WQ#xO,59QO'WQ#xO,59QO'WQ#xO,59QO'WQ#xO,59QO'WQ#xO,59QO'WQ#xO,59QO3uQ#xO'#DqOOQS,5:[,5:[O4YQ#xO'#HlOOQS,5:_,5:_O4gQMlO,5:_O4lQ&nO,59[O0iQ#xO,59dO0iQ#xO,59dO0iQ#xO,59dO7[Q#xO,59dO7aQ#xO,59dO7hQ#xO,59lO7oQ#xO'#H]O8uQ#xO'#H[OOQS'#H['#H[OOQS'#D^'#D^O9^Q#xO,59cO'WQ#xO,59cO9lQ#xO,59cOOQS,59{,59{O9qQ#xO,5:TO'WQ#xO,5:TOOQS,5:S,5:SO:PQ#xO,5:SO:UQ#xO,5:ZO'WQ#xO,5:ZO'WQ#xO,5:XOOQS,5:W,5:WO:gQ#xO,5:WO:lQ#xO,5:YOOOO'#Fx'#FxO:qO,UO,5:cOOQS,5:c,5:cOOOO'#Fy'#FyO:yO7[O,5:cO;RQ#xO'#DyOOOW'#Fz'#FzO;cOWO,5:dOOQS,5:d,5:dO;RQ#xO'#D}OOO`'#F}'#F}O;nO`O,5:dO;RQ#xO'#EOOOOp'#GO'#GOO;yOpO,5:dO;RQ#xO'#EPOOO!b'#GP'#GPO<UO!bO,5:dOOQS'#GQ'#GQO<aQ&nO,5:lO?RQ&nO,5=hO?lQ!LUO,5=hO@]Q&nO,5=hOOQS,5;Q,5;QO@tQ#yO'#GYOBTQ#xO,5;]OOQV,5=f,5=fOB`Q&nO'#IOOBwQ#xO,5;sOOQS-E:^-E:^OOQV,5;r,5;rO3XQ#xO'#FPOOQV-E9n-E9nOCPQ&nO,59_OEWQ&nO,59kOEqQ#xO'#H_OE|Q#xO'#H_O0UQ#xO'#H_OFXQ#xO'#DVOFaQ#xO,59oOFfQ#xO'#HcO'WQ#xO'#HcO/oQ#xO,5=|OOQS,5=|,5=|O/oQ#xO'#EUOOQS'#EV'#EVOGTQ#xO'#GSOGeQ#xO,59OOGeQ#xO,59OO)mQ#xO,5:rOGsQ&nO'#HeOOQS,5:u,5:uOOQS,5:},5:}OHWQ#xO,5;ROHiQ#xO,5;TOOQS'#GV'#GVOHwQ&nO,5;TOIVQ#xO,5;TOI[Q#xO'#IROOQS,5;W,5;WOIjQ#xO'#H}OOQS,5;Z,5;ZO3^Q#xO,5;_O3^Q#xO,5;bOI{Q&nO'#ITO'WQ#xO'#ITOJVQ#xO,5;dO2zQ#xO,5;dO/oQ#xO,5;iO0UQ#xO,5;kOJ[Q#yO'#EtOKeQ#{O,5;eONvQ#xO'#IUO3^Q#xO,5;iO! RQ#xO,5;kO! WQ#xO,5;pO! `Q&nO,5;uO'WQ#xO,5;uPOOO,5=d,5=dP! gOSO,5=dP! lO#xO,5=dO!$aQ&nO1G.lO!$hQ&nO1G.lO!'XQ&nO1G.lO!'cQ&nO1G.lO!)|Q&nO1G.lO!*aQ&nO1G.lO!*tQ#xO'#HkO!+SQ&nO'#G}O/oQ#xO'#HkO!+^Q#xO'#HjOOQS,5:],5:]O!+fQ#xO,5:]O!+kQ#xO'#HmO!+vQ#xO'#HmO!,ZQ#xO,5>WOOQS'#Du'#DuOOQS1G/y1G/yOOQS1G/O1G/OO!-ZQ&nO1G/OO!-bQ&nO1G/OO0iQ#xO1G/OO!-}Q#xO1G/WOOQS'#D]'#D]O/oQ#xO,59vOOQS1G.}1G.}O!.UQ#xO1G/gO!.fQ#xO1G/gO!.nQ#xO1G/hO'WQ#xO'#HdO!.sQ#xO'#HdO!.xQ&nO1G.}O!/YQ#xO,59kO!0`Q#xO,5>SO!0pQ#xO,5>SO!0xQ#xO1G/oO!0}Q&nO1G/oOOQS1G/n1G/nO!1_Q#xO,5=}O!2UQ#xO,5=}O/oQ#xO1G/sO!2sQ#xO1G/uO!2xQ&nO1G/uO!3YQ&nO1G/sOOQS1G/r1G/rOOQS1G/t1G/tOOOO-E9v-E9vOOQS1G/}1G/}OOOO-E9w-E9wO!3jQ#xO'#HwO/oQ#xO'#HwO!3xQ#xO,5:eOOOW-E9x-E9xOOQS1G0O1G0OO!4TQ#xO,5:iOOO`-E9{-E9{O!4`Q#xO,5:jOOOp-E9|-E9|O!4kQ#xO,5:kOOO!b-E9}-E9}OOQS-E:O-E:OO!4vQ!LUO1G3SO!5gQ&nO1G3SO'WQ#xO,5<mOOQS,5<m,5<mOOQS-E:P-E:POOQS,5<t,5<tOOQS-E:W-E:WOOQV1G0w1G0wO0UQ#xO'#GUO!6OQ&nO,5>jOOQS1G1_1G1_O!6gQ#xO1G1_OOQS'#DX'#DXO/oQ#xO,5=yOOQS,5=y,5=yO!6lQ#xO'#FqO!6wQ#xO,59qO!7PQ#xO1G/ZO!7ZQ&nO,5=}OOQS1G3h1G3hOOQS,5:p,5:pO!7zQ#xO'#G|OOQS,5<n,5<nOOQS-E:Q-E:QO!8]Q#xO1G.jOOQS1G0^1G0^O!8kQ#xO,5>PO!8{Q#xO,5>PO/oQ#xO1G0mO/oQ#xO1G0mO0UQ#xO1G0oOOQS-E:T-E:TO!9^Q#xO1G0oO!9iQ#xO1G0oO!9nQ#xO,5>mO!9|Q#xO,5>mO!:[Q#xO,5>iO!:rQ#xO,5>iO!;TQ#{O1G0yO!>cQ#{O1G0|O!AnQ#xO,5>oO!AxQ#xO,5>oO!BQQ&nO,5>oO/oQ#xO1G1OO!B[Q#xO1G1OO3^Q#xO1G1TO! RQ#xO1G1VOOQV,5;`,5;`O!BaQ#zO,5;`O!BfQ#{O1G1PO!EwQ#xO'#G]O3^Q#xO1G1PO3^Q#xO1G1PO!FUQ#xO,5>pO!FcQ#xO,5>pO0UQ#xO,5>pOOQV1G1T1G1TO!FkQ#xO'#FRO!F|QMlO1G1VOOQV1G1[1G1[O3^Q#xO1G1[O!GUQ#xO'#F]OOQV1G1a1G1aO! `Q&nO1G1aPOOO1G3O1G3OP!GZOSO1G3OOOQS,5>V,5>VOOQS'#Dr'#DrO/oQ#xO,5>VO!G`Q#xO,5>UO!GsQ#xO,5>UOOQS1G/w1G/wO!G{Q#xO,5>XO!H]Q#xO,5>XO!HeQ#xO,5>XO!HxQ#xO,5>XO!IYQ#xO,5>XOOQS1G3r1G3rOOQS7+$j7+$jO!7PQ#xO7+$rO!J{Q#xO1G/OO!KSQ#xO1G/OOOQS1G/b1G/bOOQS,5<_,5<_O'WQ#xO,5<_OOQS7+%R7+%RO!KZQ#xO7+%ROOQS-E9q-E9qOOQS7+%S7+%SO!KkQ#xO,5>OO'WQ#xO,5>OOOQS7+$i7+$iO!KpQ#xO7+%RO!KxQ#xO7+%SO!K}Q#xO1G3nOOQS7+%Z7+%ZO!L_Q#xO1G3nO!LgQ#xO7+%ZOOQS,5<^,5<^O'WQ#xO,5<^O!LlQ#xO1G3iOOQS-E9p-E9pO!McQ#xO7+%_OOQS7+%a7+%aO!MqQ#xO1G3iO!N`Q#xO7+%aO!NeQ#xO1G3oO!NuQ#xO1G3oO!N}Q#xO7+%_O# SQ#xO,5>cO# jQ#xO,5>cO# jQ#xO,5>cO# xO$ISO'#D{O#!TO#tO'#HxOOOW1G0P1G0PO#!YQ#xO1G0POOO`1G0T1G0TO#!bQ#xO1G0TOOOp1G0U1G0UO#!jQ#xO1G0UOOO!b1G0V1G0VO#!rQ#xO1G0VO#!zQ!LUO7+(nO##kQ&nO1G2XP#$UQ#xO'#GROOQS,5<p,5<pOOQS-E:S-E:SOOQS7+&y7+&yOOQS1G3e1G3eOOQS,5<],5<]OOQS-E9o-E9oOOQS7+$u7+$uO#$cQ#xO,5=hO#$|Q#xO,5=hO#%_Q&nO,5<`O#%rQ#xO1G3kOOQS-E9r-E9rOOQS7+&X7+&XO#&SQ#xO7+&XOOQS7+&Z7+&ZO#&bQ#xO'#IQO0UQ#xO'#IPO#&vQ#xO7+&ZOOQS,5<s,5<sO#'RQ#xO1G4XOOQS-E:V-E:VOOQS,5<o,5<oO#'aQ#xO1G4TOOQS-E:R-E:RO#'wQ#{O7+&eO!EwQ#xO'#GZO3^Q#xO7+&eO3^Q#xO7+&hO#+VQ&nO,5<vO'WQ#xO,5<vO#+aQ#xO1G4ZOOQS-E:Y-E:YO#+kQ#xO1G4ZO3^Q#xO7+&jO/oQ#xO7+&jOOQV7+&o7+&oO!F|QMlO7+&qO`Q#yO1G0zOOQV-E:Z-E:ZO3^Q#xO7+&kO3^Q#xO7+&kOOQV,5<w,5<wO#+sQ#xO,5<wOOQV7+&k7+&kO#,OQ#{O7+&kO#/ZQ#xO,5<xO#/fQ#xO1G4[OOQS-E:[-E:[O#/sQ#xO1G4[O#/{Q#xO'#IWO#0ZQ#xO'#IWO0UQ#xO'#IWOOQS'#IW'#IWO#0fQ#xO'#IVOOQS,5;m,5;mO#0nQ#xO,5;mO/oQ#xO'#FTOOQV7+&q7+&qO3^Q#xO7+&qOOQV7+&v7+&vO#0sQ#zO,5;wOOQV7+&{7+&{POOO7+(j7+(jOOQS1G3q1G3qOOQS,5<b,5<bO#0xQ#xO1G3pOOQS-E9t-E9tO#1]Q#xO,5<cO#1hQ#xO,5<cO#1{Q#xO1G3sOOQS-E9u-E9uO#2]Q#xO1G3sO#2eQ#xO1G3sO#2uQ#xO1G3sO#2]Q#xO1G3sOOQS<<H^<<H^O#3QQ&nO1G1yOOQS<<Hm<<HmP#3_Q#xO'#FsO7hQ#xO1G3jO#3lQ#xO1G3jO#3qQ#xO<<HmOOQS<<Hn<<HnO#4RQ#xO7+)YOOQS<<Hu<<HuO#4cQ&nO1G1xP#5SQ#xO'#FrO#5aQ#xO7+)ZO#5qQ#xO7+)ZO#5yQ#xO<<HyO#6OQ#xO7+)TOOQS<<H{<<H{O#6uQ#xO,5<aO'WQ#xO,5<aOOQS-E9s-E9sOOQS<<Hy<<HyOOQS,5<g,5<gO/oQ#xO,5<gO#6zQ#xO1G3}OOQS-E9y-E9yO#7bQ#xO1G3}O;RQ#xO'#D|OOOO'#F|'#F|O#7pO$ISO,5:gOOO#l,5>d,5>dOOOW7+%k7+%kOOO`7+%o7+%oOOOp7+%p7+%pOOO!b7+%q7+%qO#7{Q#xO1G3SO#8fQ#xO1G3SP'WQ#xO'#FtO/oQ#xO<<IsO#8wQ#xO,5>lO#9YQ#xO,5>lO0UQ#xO,5>lO#9kQ#xO,5>kOOQS<<Iu<<IuP0UQ#xO'#GXP/oQ#xO'#GTOOQV-E:X-E:XO3^Q#xO<<JPOOQV,5<u,5<uO3^Q#xO,5<uOOQV<<JP<<JPOOQV<<JS<<JSO#9pQ&nO1G2bP#9zQ#xO'#G[O#:RQ#xO7+)uO#:]Q#{O<<JUO3^Q#xO<<JUOOQV<<J]<<J]O3^Q#xO<<J]O#=hQ#{O7+&fOOQV<<JV<<JVO#=rQ#{O<<JVOOQV1G2c1G2cO0UQ#xO1G2cO3^Q#xO<<JVO0UQ#xO1G2dP/oQ#xO'#G^O#@}Q#xO7+)vO#A[Q#xO7+)vOOQS'#FS'#FSO/oQ#xO,5>rO#AdQ#xO,5>rOOQS,5>r,5>rO#AoQ#xO,5>qO#BQQ#xO,5>qOOQS1G1X1G1XOOQS,5;o,5;oO#BYQ#xO1G1cP#B_Q#xO'#FvO#BoQ#xO1G1}O#CSQ#xO1G1}O#CdQ#xO1G1}P#CoQ#xO'#FwO#C|Q#xO7+)_O#D^Q#xO7+)_O#D^Q#xO7+)_O#DfQ#xO7+)_O#DvQ#xO7+)UO7hQ#xO7+)UOOQSAN>XAN>XO#EaQ#xO<<LuOOQSAN>eAN>eO/oQ#xO1G1{O#EqQ&nO1G1{P#E{Q#xO'#FuOOQS1G2R1G2RP#FYQ#xO'#F{O#FgQ#xO7+)iO#F}Q#xO,5:hOOOO-E9z-E9zO#GYQ#xO7+(nOOQSAN?_AN?_O#GsQ#xO,5<rO#HXQ#xO1G4WOOQS-E:U-E:UO#HjQ#xO1G4WOOQS1G4V1G4VOOQVAN?kAN?kOOQV1G2a1G2aO3^Q#xOAN?pO#H{Q#{OAN?pOOQVAN?wAN?wOOQV<<JQ<<JQO3^Q#xOAN?qO3^Q#xO7+'}OOQVAN?qAN?qOOQS7+(O7+(OO#LWQ#xO<<MbOOQS1G4^1G4^O/oQ#xO1G4^OOQS,5<y,5<yO#LeQ#xO1G4]OOQS-E:]-E:]OOQU'#Ga'#GaO#LvQ#zO7+&}O#MRQ#xO'#F^O#MyQ#xO7+'iO#NZQ#xO7+'iOOQS7+'i7+'iO#NfQ#xO<<LyO#NvQ#xO<<LyO#NvQ#xO<<LyO$ OQ#xO'#HfOOQS<<Lp<<LpO$ YQ#xO<<LpOOQS7+'g7+'gOOOO1G0S1G0SO$ sQ#xO1G0SO0UQ#xO1G2^P0UQ#xO'#GWO$ {Q#xO7+)rO$!^Q#xO7+)rOOQVG25[G25[O3^Q#xOG25[OOQVG25]G25]OOQV<<Ki<<KiOOQS7+)x7+)xP$!oQ#xO'#G_OOQU-E:_-E:_OOQV<<Ji<<JiO$#cQ&nO'#F`OOQS'#Fb'#FbO$#sQ#xO'#FaO$$eQ#xO'#FaOOQS'#Fa'#FaO$$jQ#xO'#IYO#MRQ#xO'#FhO#MRQ#xO'#FhO$%RQ#xO'#FiO#MRQ#xO'#FjO$%YQ#xO'#IZOOQS'#IZ'#IZO$%wQ#xO,5;xOOQS<<KT<<KTO$&PQ#xO<<KTO$&aQ#xOANBeO$&qQ#xOANBeO$&yQ#xO'#HgOOQS'#Hg'#HgO0pQ#xO'#DeO$'dQ#xO,5>QOOQSANB[ANB[OOOO7+%n7+%nOOQS7+'x7+'xO$'{Q#xO<<M^OOQVLD*vLD*vO4gQMlO'#GcO$(^Q&nO,5<RO#MRQ#xO'#FlOOQS,5<V,5<VOOQS'#Fc'#FcO$)OQ#xO,5;{O$)TQ#xO,5;{OOQS'#Ff'#FfO#MRQ#xO'#GbO$)uQ#xO,5<PO$*aQ#xO,5>tO$*qQ#xO,5>tO0UQ#xO,5<OO$+SQ#xO,5<SO$+XQ#xO,5<SO#MRQ#xO'#I[O$+^Q#xO'#I[O$+cQ#xO,5<TOOQS,5<U,5<UO'WQ#xO'#FoOOQU1G1d1G1dO3^Q#xO1G1dOOQSAN@oAN@oO$+hQ#xOG28PO$+xQ#xO,5:POOQS1G3l1G3lOOQS,5<},5<}OOQS-E:a-E:aO$+}Q&nO'#F`O$,UQ#xO'#I]O$,dQ#xO'#I]O$,lQ#xO,5<WOOQS1G1g1G1gO$,qQ#xO1G1gO$,vQ#xO,5<|OOQS-E:`-E:`O$-bQ#xO,5=QO$-yQ#xO1G4`OOQS-E:d-E:dOOQS1G1j1G1jOOQS1G1n1G1nO$.ZQ#xO,5>vO#MRQ#xO,5>vOOQS1G1o1G1oO$.iQ&nO,5<ZOOQU7+'O7+'OO$ OQ#xO1G/kO#MRQ#xO,5<XO$.pQ#xO,5>wO$.wQ#xO,5>wOOQS1G1r1G1rOOQS7+'R7+'RP#MRQ#xO'#GfO$/PQ#xO1G4bO$/ZQ#xO1G4bO$/cQ#xO1G4bOOQS7+%V7+%VO$/qQ#xO1G1sO$0PQ&nO'#F`O$0WQ#xO,5=POOQS,5=P,5=PO$0fQ#xO1G4cOOQS-E:c-E:cO#MRQ#xO,5=OO$0mQ#xO,5=OO$0rQ#xO7+)|OOQS-E:b-E:bO$0|Q#xO7+)|O#MRQ#xO,5<YP#MRQ#xO'#GeO$1UQ#xO1G2jO#MRQ#xO1G2jP$1dQ#xO'#GdO$1kQ#xO<<MhO$1uQ#xO1G1tO$2TQ#xO7+(UO7hQ#xO'#DPO7hQ#xO,59dO7hQ#xO,59dO7hQ#xO,59dO$2cQ&nO,5=hO7hQ#xO1G/OO/oQ#xO1G/ZO/oQ#xO7+$rP$2vQ#xO'#GRO'WQ#xO'#G|O$3TQ#xO,59dO$3YQ#xO,59dO$3aQ#xO,59oO$3fQ#xO1G/WO0pQ#xO'#DTO7hQ#xO,59l",
                    stateData: "$3w~O%kOS%`OSUOS%_PQ~OPiOXfOhtOjYOquOu!TOxvO!RwO!S!QO!V!WO!W!VO!ZZO!_[O!jeO!ueO!veO!weO#OyO#QzO#S{O#U|O#W}O#[!OO#^!PO#a!RO#b!RO#d!SO#k!UO#n!XO#r!YO#t!ZO#y![O#|mO$O!]O%wRO%xRO%|SO%}WO&c]O&d^O&g_O&j`O&naO&obO&pcO~O%_!^O~OX!eOa!eOc!fOj!mO!Z!oO!h!qO%r!`O%s!aO%t!bO%u!cO%v!cO%w!dO%x!dO%y!eO%z!eO%{!eO~Om&QXn&QXo&QXp&QXq&QXr&QXu&QX|&QX}&QX!{&QX#f&QX%^&QX%a&QX&S&QXi&QX!V&QX!W&QX&T&QX!Y&QX!^&QX!S&QX#_&QXv&QX!n&QX~P$dOhtOjYO!ZZO!_[O!jeO!ueO!veO!weO%wRO%xRO%|SO%}WO&c]O&d^O&g_O&j`O&naO&obO&pcO~O|&PX}&PX#f&PX%^&PX%a&PX&S&PX~Om!tOn!uOo!sOp!sOq!vOr!wOu!xO!{&PX~P(eOX#OOi#QOq0VOx0eO!RwO~P'WOX#SOq0VOx0eO!Y#TO~P'WOX#WOc#XOq0VOx0eO!^#YO~P'WO&e#]O&f#_O~O&h#`O&i#_O~OQ#bO%b#cO%c#eO~OR#fO%d#gO%e#eO~OS#iO%f#jO%g#eO~OT#lO%h#mO%i#eO~OX%qXa%qXc%qXj%qXm%qXn%qXo%qXp%qXq%qXr%qXu%qX|%qX!Z%qX!h%qX%r%qX%s%qX%t%qX%u%qX%v%qX%w%qX%x%qX%y%qX%z%qX%{%qXi%qX!V%qX!W%qX~O&c]O&d^O&g_O&j`O&naO&obO&pcO}%qX!{%qX#f%qX%^%qX%a%qX&S%qX&T%qX!Y%qX!^%qX!S%qX#_%qXv%qX!n%qX~P+}O|#rO}%pX!{%pX#f%pX%^%pX%a%pX&S%pX~Oq0VOx0eO~P'WO#f#uO%^#wO%a#wO~O%}WO~O!V#|O#t!ZO#y![O#|mO~OquO~P'WOX$ROc$SO%}WO}yP~OX$WOq0VOx0eO!S$XO~P'WO}$ZO!{$`O&S$[O#f!|X%^!|X%a!|X~OX$WOq0VOx0eO#f#VX%^#VX%a#VX~P'WOq0VOx0eO#f#ZX%^#ZX%a#ZX~P'WO!h$fO!u$fO%}WO~OX$pO~P'WO!W$rO#r$sO#t$tO~O}$uO~OX$|O~P'WOU%OO%^$}O%k%PO~OX%YOc%YOi%[Oq0VOx0eO~P'WOq0VOx0eO}%_O~P'WO&b%aO~Oc!fOj!mO!Z!oO!h!qOXdaadamdandaodapdaqdardauda|da}da!{da#fda%^da%ada%rda%sda%tda%uda%vda%wda%xda%yda%zda%{da&Sdaida!Vda!Wda&Tda!Yda!^da!Sda#_davda!nda~Op%fO~Oq%fO~P'WOq0VO~P'WOm0XOn0YOo0WOp0WOq0aOr0bOu0fOi&PX!V&PX!W&PX&T&PX!Y&PX!^&PX!S&PX#_&PX!n&PX~P(eO&T%hOi&OX|&OX!V&OX!W&OX!Y&OX}&OX~Oi%jO|%kO!V%oO!W%nO~Oi%jO~O|%rO!V%oO!W%nO!Y&[X~O!Y%vO~O|%wO}%yO!V%oO!W%nO!^&VX~O!^%}O~O!^&OO~O&e#]O&f&QO~O&h#`O&i&QO~OX&TOq0VOx0eO!RwO~P'WOQ#bO%b#cO%c&WO~OR#fO%d#gO%e&WO~OS#iO%f#jO%g&WO~OT#lO%h#mO%i&WO~OX!taa!tac!taj!tam!tan!tao!tap!taq!tar!tau!ta|!ta}!ta!Z!ta!h!ta!{!ta#f!ta%^!ta%a!ta%r!ta%s!ta%t!ta%u!ta%v!ta%w!ta%x!ta%y!ta%z!ta%{!ta&S!tai!ta!V!ta!W!ta&T!ta!Y!ta!^!ta!S!ta#_!tav!ta!n!ta~P#vO|&`O}%pa!{%pa#f%pa%^%pa%a%pa&S%pa~P$dOX&bOquOxvO}%pa!{%pa#f%pa%^%pa%a%pa&S%pa~P'WO|&`O}%pa!{%pa#f%pa%^%pa%a%pa&S%pa~OPiOXfOquOxvO!RwO!S!QO#OyO#QzO#S{O#U|O#W}O#[!OO#^!PO#a!RO#b!RO#d!SO#f$|X%^$|X%a$|X~P'WO#f#uO%^&gO%a&gO~O!h&hOj&rX%^&rX#_&rX#f&rX%a&rX#^&rX~Oj!mO%^&jO~Omgangaogapgaqgargauga|ga}ga!{ga#fga%^ga%aga&Sgaiga!Vga!Wga&Tga!Yga!^ga!Sga#_gavga!nga~P$dOusa|sa}sa#fsa%^sa%asa&Ssa~Om!tOn!uOo!sOp!sOq!vOr!wO!{sa~PDoO&S&lO|&RX}&RX~O%}WO|&RX}&RX~O|&oO}yX~O}&qO~O|%wO#f&VX%^&VX%a&VXi&VX}&VX!^&VX!n&VX&S&VX~OX0`Oq0VOx0eO!RwO~P'WO&S$[O#fWa%^Wa%aWa~O|&zO#f&XX%^&XX%a&XXp&XX~P$dO|&}O!S&|O#f#Za%^#Za%a#Za~O#_'OO#f#]a%^#]a%a#]a~O!h$fO!u$fO#^'QO%}WO~O#^'QO~O|'SO#f&uX%^&uX%a&uX~O|'UO#f&qX%^&qX%a&qX}&qX~O|'YOp&wX~P$dOp']O~OPiOXfOquOxvO!RwO!S!QO#OyO#QzO#S{O#U|O#W}O#[!OO#^!PO#a!RO#b!RO#d!SO%^'bO~P'WOv'fO#o'dO#p'eOP#maX#mah#maj#maq#mau#max#ma!R#ma!S#ma!V#ma!W#ma!Z#ma!_#ma!j#ma!u#ma!v#ma!w#ma#O#ma#Q#ma#S#ma#U#ma#W#ma#[#ma#^#ma#a#ma#b#ma#d#ma#k#ma#n#ma#r#ma#t#ma#y#ma#|#ma$O#ma%Z#ma%w#ma%x#ma%|#ma%}#ma&c#ma&d#ma&g#ma&j#ma&n#ma&o#ma&p#ma%]#ma%a#ma~O|'gO#_'iO}&xX~Oj'kO~Oj!mO}$uO~O}'oO~P$dO%^'rO~OU'sO%^'rO~OX!eOa!eOc!fOj!mO!Z!oO!h!qO%t!bO%u!cO%v!cO%w!dO%x!dO%y!eO%z!eO%{!eOmYinYioYipYiqYirYiuYi|Yi}Yi!{Yi#fYi%^Yi%aYi%rYi&SYiiYi!VYi!WYi&TYi!YYi!^Yi!SYi#_YivYi!nYi~O%s!aO~P! tO%sYi~P! tOX!eOa!eOc!fOj!mO!Z!oO!h!qO%w!dO%x!dO%y!eO%z!eO%{!eOmYinYioYipYiqYirYiuYi|Yi}Yi!{Yi#fYi%^Yi%aYi%rYi%sYi%tYi&SYiiYi!VYi!WYi&TYi!YYi!^Yi!SYi#_YivYi!nYi~O%u!cO%v!cO~P!$oO%uYi%vYi~P!$oOc!fOj!mO!Z!oO!h!qOmYinYioYipYiqYirYiuYi|Yi}Yi!{Yi#fYi%^Yi%aYi%rYi%sYi%tYi%uYi%vYi%wYi%xYi&SYiiYi!VYi!WYi&TYi!YYi!^Yi!SYi#_YivYi!nYi~OX!eOa!eO%y!eO%z!eO%{!eO~P!'mOXYiaYi%yYi%zYi%{Yi~P!'mO!V%oO!W%nOi&_X|&_X~O&S'uO&T'uO~P+}O|'wOi&^X~Oi'yO~O|'zO}'|O!Y&aX~Oq0VOx0eO|'zO}'}O!Y&aX~P'WO!Y(PO~Oo!sOp!sOq!vOr!wOmliuli|li}li!{li#fli%^li%ali&Sli~On!uO~P!,`Onli~P!,`Om0XOn0YOo0WOp0WOq0aOr0bO~Ov(RO~P!-iOX(WOi(XOq0VOx0eO~P'WOi(XO|(YO~Oi([O~O!W(^O~Oi(_O|(YO!V%oO!W%nO~P$dOm0XOn0YOo0WOp0WOq0aOr0bOisa!Vsa!Wsa&Tsa!Ysa!^sa!Ssa#_savsa!nsa~PDoOX(WOq0VOx0eO!Y&[a~P'WO|(bO!Y&[a~O!Y(cO~O|(bO!V%oO!W%nO!Y&[a~P$dOX(gOq0VOx0eO!^&Va#f&Va%^&Va%a&Vai&Va}&Va!n&Va&S&Va~P'WO|(hO!^&Va#f&Va%^&Va%a&Vai&Va}&Va!n&Va&S&Va~O!^(kO~O|(hO!V%oO!W%nO!^&Va~P$dO|(nO!V%oO!W%nO!^&]a~P$dO|(qO}&kX!^&kX!n&kX~O}(tO!^(vO!n(wO~O}(tO!^(xO!n(yO~O}(tO!^(zO!n({O~O}(tO!^(|O!n(}O~OX&bOquOxvO}%pi!{%pi#f%pi%^%pi%a%pi&S%pi~P'WO|)OO}%pi!{%pi#f%pi%^%pi%a%pi&S%pi~O!h&hOj&ra%^&ra#_&ra#f&ra%a&ra#^&ra~O%^)TO~OX$ROc$SO%}WO~O|&oO}ya~OquOxvO~P'WO|(hO#f&Va%^&Va%a&Vai&Va}&Va!^&Va!n&Va&S&Va~P$dO|)YO#f%pX%^%pX%a%pX&S%pX~O&S$[O#fWi%^Wi%aWi~O#f&Xa%^&Xa%a&Xap&Xa~P'WO|)]O#f&Xa%^&Xa%a&Xap&Xa~OX)aOj)cO%}WO~O#^)dO~O%}WO#f&ua%^&ua%a&ua~O|)fO#f&ua%^&ua%a&ua~Oq0VOx0eO#f&qa%^&qa%a&qa}&qa~P'WO|)iO#f&qa%^&qa%a&qa}&qa~Ov)mO#i)lOP#giX#gih#gij#giq#giu#gix#gi!R#gi!S#gi!V#gi!W#gi!Z#gi!_#gi!j#gi!u#gi!v#gi!w#gi#O#gi#Q#gi#S#gi#U#gi#W#gi#[#gi#^#gi#a#gi#b#gi#d#gi#k#gi#n#gi#r#gi#t#gi#y#gi#|#gi$O#gi%Z#gi%w#gi%x#gi%|#gi%}#gi&c#gi&d#gi&g#gi&j#gi&n#gi&o#gi&p#gi%]#gi%a#gi~Ov)nOP#jiX#jih#jij#jiq#jiu#jix#ji!R#ji!S#ji!V#ji!W#ji!Z#ji!_#ji!j#ji!u#ji!v#ji!w#ji#O#ji#Q#ji#S#ji#U#ji#W#ji#[#ji#^#ji#a#ji#b#ji#d#ji#k#ji#n#ji#r#ji#t#ji#y#ji#|#ji$O#ji%Z#ji%w#ji%x#ji%|#ji%}#ji&c#ji&d#ji&g#ji&j#ji&n#ji&o#ji&p#ji%]#ji%a#ji~OX)pOp&wa~P'WO|)qOp&wa~O|)qOp&wa~P$dOp)uO~O%[)xO~Ov){O#o'dO#p)zOP#miX#mih#mij#miq#miu#mix#mi!R#mi!S#mi!V#mi!W#mi!Z#mi!_#mi!j#mi!u#mi!v#mi!w#mi#O#mi#Q#mi#S#mi#U#mi#W#mi#[#mi#^#mi#a#mi#b#mi#d#mi#k#mi#n#mi#r#mi#t#mi#y#mi#|#mi$O#mi%Z#mi%w#mi%x#mi%|#mi%}#mi&c#mi&d#mi&g#mi&j#mi&n#mi&o#mi&p#mi%]#mi%a#mi~Oq0VOx0eO}$uO~P'WOq0VOx0eO}&xa~P'WO|*RO}&xa~OX*VOc*WOi*ZO%y*XO%}WO~O}$uO&{*]O~O%^*aO~O%^*cO~OX%YOc%YOq0VOx0eOi&^a~P'WO|*fOi&^a~Oq0VOx0eO}*iO!Y&aa~P'WO|*jO!Y&aa~Oq0VOx0eO|*jO}*mO!Y&aa~P'WOq0VOx0eO|*jO!Y&aa~P'WO|*jO}*mO!Y&aa~Oo0WOp0WOq0aOr0bOilimliuli|li!Vli!Wli&Tli!Yli}li!^li#fli%^li%ali!Sli#_livli!nli&Sli~On0YO~P!IeOnli~P!IeOX(WOi*rOq0VOx0eO~P'WOp*tO~Oi*rO|*vO~Oi*wO~OX(WOq0VOx0eO!Y&[i~P'WO|*xO!Y&[i~O!Y*yO~OX(gOq0VOx0eO!^&Vi#f&Vi%^&Vi%a&Vii&Vi}&Vi!n&Vi&S&Vi~P'WO|*|O!V%oO!W%nO!^&]i~O|+PO!^&Vi#f&Vi%^&Vi%a&Vii&Vi}&Vi!n&Vi&S&Vi~O!^+QO~Oc+SOq0VOx0eO!^&]i~P'WO|*|O!^&]i~O!^+UO~OX+WOq0VOx0eO}&ka!^&ka!n&ka~P'WO|+XO}&ka!^&ka!n&ka~O!_+[O&m+]O!^!oX~O!^+_O~O}(tO!^+`O~O}(tO!^+aO~O}(tO!^+bO~O}(tO!^+cO~OX&bOquOxvO}%pq!{%pq#f%pq%^%pq%a%pq&S%pq~P'WO|$ui}$ui!{$ui#f$ui%^$ui%a$ui&S$ui~P$dOX&bOquOxvO~P'WOX&bOq0VOx0eO#f%pa%^%pa%a%pa&S%pa~P'WO|+dO#f%pa%^%pa%a%pa&S%pa~O|$ha#f$ha%^$ha%a$hap$ha~P$dO#f&Xi%^&Xi%a&Xip&Xi~P'WO|+gO#f#Zq%^#Zq%a#Zq~O|+hO#_+jO#f&tX%^&tX%a&tXi&tX~OX+lOj)cO%}WO~O%}WO#f&ui%^&ui%a&ui~Oq0VOx0eO#f&qi%^&qi%a&qi}&qi~P'WOv+pO#i)lOP#gqX#gqh#gqj#gqq#gqu#gqx#gq!R#gq!S#gq!V#gq!W#gq!Z#gq!_#gq!j#gq!u#gq!v#gq!w#gq#O#gq#Q#gq#S#gq#U#gq#W#gq#[#gq#^#gq#a#gq#b#gq#d#gq#k#gq#n#gq#r#gq#t#gq#y#gq#|#gq$O#gq%Z#gq%w#gq%x#gq%|#gq%}#gq&c#gq&d#gq&g#gq&j#gq&n#gq&o#gq&p#gq%]#gq%a#gq~Op%Oa|%Oa~P$dOX)pOp&wi~P'WO|+wOp&wi~O|,QO}$uO#_,QO~O#p,ROP#mqX#mqh#mqj#mqq#mqu#mqx#mq!R#mq!S#mq!V#mq!W#mq!Z#mq!_#mq!j#mq!u#mq!v#mq!w#mq#O#mq#Q#mq#S#mq#U#mq#W#mq#[#mq#^#mq#a#mq#b#mq#d#mq#k#mq#n#mq#r#mq#t#mq#y#mq#|#mq$O#mq%Z#mq%w#mq%x#mq%|#mq%}#mq&c#mq&d#mq&g#mq&j#mq&n#mq&o#mq&p#mq%]#mq%a#mq~O#_,SO|%Qa}%Qa~Oq0VOx0eO}&xi~P'WO|,UO}&xi~O}$ZO&S,WOi&zX|&zX~O%}WOi&zX|&zX~O|,[Oi&yX~Oi,^O~O%[,`O~OX%YOc%YOq0VOx0eOi&^i~P'WO},bO|$ka!Y$ka~Oq0VOx0eO},cO|$ka!Y$ka~P'WOq0VOx0eO}*iO!Y&ai~P'WO|,fO!Y&ai~Oq0VOx0eO|,fO!Y&ai~P'WO|,fO},iO!Y&ai~Oi$gi|$gi!Y$gi~P$dOX(WOq0VOx0eO~P'WOp,kO~OX(WOi,lOq0VOx0eO~P'WOX(WOq0VOx0eO!Y&[q~P'WO|$fi!^$fi#f$fi%^$fi%a$fii$fi}$fi!n$fi&S$fi~P$dOX(gOq0VOx0eO~P'WOc+SOq0VOx0eO!^&]q~P'WO|,mO!^&]q~O!^,nO~OX(gOq0VOx0eO!^&Vq#f&Vq%^&Vq%a&Vqi&Vq}&Vq!n&Vq&S&Vq~P'WO},oO~OX+WOq0VOx0eO}&ki!^&ki!n&ki~P'WO|,tO}&ki!^&ki!n&ki~O!_+[O&m+]O!^!oa~OX&bOq0VOx0eO#f%pi%^%pi%a%pi&S%pi~P'WO|,wO#f%pi%^%pi%a%pi&S%pi~O%}WO#f&ta%^&ta%a&tai&ta~O|,zO#f&ta%^&ta%a&tai&ta~Oi,}O~Op%Oi|%Oi~P$dOX)pO~P'WOX)pOp&wq~P'WOv-QOP#lyX#lyh#lyj#lyq#lyu#lyx#ly!R#ly!S#ly!V#ly!W#ly!Z#ly!_#ly!j#ly!u#ly!v#ly!w#ly#O#ly#Q#ly#S#ly#U#ly#W#ly#[#ly#^#ly#a#ly#b#ly#d#ly#k#ly#n#ly#r#ly#t#ly#y#ly#|#ly$O#ly%Z#ly%w#ly%x#ly%|#ly%}#ly&c#ly&d#ly&g#ly&j#ly&n#ly&o#ly&p#ly%]#ly%a#ly~O%]-TO%a-TO~P`O#p-UOP#myX#myh#myj#myq#myu#myx#my!R#my!S#my!V#my!W#my!Z#my!_#my!j#my!u#my!v#my!w#my#O#my#Q#my#S#my#U#my#W#my#[#my#^#my#a#my#b#my#d#my#k#my#n#my#r#my#t#my#y#my#|#my$O#my%Z#my%w#my%x#my%|#my%}#my&c#my&d#my&g#my&j#my&n#my&o#my&p#my%]#my%a#my~Oq0VOx0eO}&xq~P'WO|-YO}&xq~O&S,WOi&za|&za~OX*VOc*WO%y*XO%}WOi&ya~O|-^Oi&ya~O$R-bO~OX%YOc%YOq0VOx0eO~P'WOq0VOx0eO}-cO|$ki!Y$ki~P'WOq0VOx0eO|$ki!Y$ki~P'WO}-cO|$ki!Y$ki~Oq0VOx0eO}*iO~P'WOq0VOx0eO}*iO!Y&aq~P'WO|-fO!Y&aq~Oq0VOx0eO|-fO!Y&aq~P'WOu-iO!V%oO!W%nOi&Wq!Y&Wq!^&Wq|&Wq~P!-iOc+SOq0VOx0eO!^&]y~P'WO|$ii!^$ii~P$dOc+SOq0VOx0eO~P'WOX+WOq0VOx0eO~P'WOX+WOq0VOx0eO}&kq!^&kq!n&kq~P'WO}(tO!^-mO!n-nO~OX&bOq0VOx0eO#f%pq%^%pq%a%pq&S%pq~P'WO#_-oO|$za#f$za%^$za%a$zai$za~O%}WO#f&ti%^&ti%a&tii&ti~O|-qO#f&ti%^&ti%a&tii&ti~Ov-tOP#l!RX#l!Rh#l!Rj#l!Rq#l!Ru#l!Rx#l!R!R#l!R!S#l!R!V#l!R!W#l!R!Z#l!R!_#l!R!j#l!R!u#l!R!v#l!R!w#l!R#O#l!R#Q#l!R#S#l!R#U#l!R#W#l!R#[#l!R#^#l!R#a#l!R#b#l!R#d#l!R#k#l!R#n#l!R#r#l!R#t#l!R#y#l!R#|#l!R$O#l!R%Z#l!R%w#l!R%x#l!R%|#l!R%}#l!R&c#l!R&d#l!R&g#l!R&j#l!R&n#l!R&o#l!R&p#l!R%]#l!R%a#l!R~Oq0VOx0eO}&xy~P'WOX*VOc*WO%y*XO%}WOi&yi~O$R-bO%]-zO%a-zO~OX.UOj.SO!Z.RO!_.TO!j-}O!v.PO!w.PO%x-|O%}WO&c]O&d^O&g_O~Oq0VOx0eO|$kq!Y$kq~P'WO}.ZO|$kq!Y$kq~Oq0VOx0eO}*iO!Y&ay~P'WO|.[O!Y&ay~Oq0VOx.`O~P'WOu-iO!V%oO!W%nOi&Wy!Y&Wy!^&Wy|&Wy~P!-iO}(tO!^.cO~O%}WO#f&tq%^&tq%a&tqi&tq~O|.eO#f&tq%^&tq%a&tqi&tq~OX*VOc*WO%y*XO%}WO~Oj.iO!h.gO|$SX#_$SX%r$SXi$SX~Ou$SX}$SX!Y$SX!^$SX~P$!}O%w.kO%x.kOu$TX|$TX}$TX#_$TX%r$TX!Y$TXi$TX!^$TX~O!j.mO~O|.qO#_.sO%r.nOu&|X}&|X!Y&|Xi&|X~Oc.vO~P#M_Oj.iOu&}X|&}X}&}X#_&}X%r&}X!Y&}Xi&}X!^&}X~Ou.zO}$uO~Oq0VOx0eO|$ky!Y$ky~P'WOq0VOx0eO}*iO!Y&a!R~P'WO|/OO!Y&a!R~Oi&ZXu&ZX!V&ZX!W&ZX!Y&ZX!^&ZX|&ZX~P!-iOu-iO!V%oO!W%nOi&Ya!Y&Ya!^&Ya|&Ya~O%}WO#f&ty%^&ty%a&tyi&ty~O!h.gOj$Zau$Za|$Za}$Za#_$Za%r$Za!Y$Zai$Za!^$Za~O!j/XO~O%w.kO%x.kOu$Ta|$Ta}$Ta#_$Ta%r$Ta!Y$Tai$Ta!^$Ta~O%r.nOu$Xa|$Xa}$Xa#_$Xa!Y$Xai$Xa!^$Xa~Ou&|a}&|a!Y&|ai&|a~P#MRO|/^Ou&|a}&|a!Y&|ai&|a~O!Y/aO~Oi/aO~O}/cO~O!^/dO~Oq0VOx0eO}*iO!Y&a!Z~P'WO}/gO~O&S/hO~P$!}O|/iO#_.sO%r.nOi'PX~O|/iOi'PX~Oi/kO~O!j/lO~O#_.sOu%Ua|%Ua}%Ua%r%Ua!Y%Uai%Ua!^%Ua~O#_.sO%r.nOu%Ya|%Ya}%Ya!Y%Yai%Ya~Ou&|i}&|i!Y&|ii&|i~P#MRO|/nO#_.sO%r.nO!^'Oa~O}$ca~P$dOi'Pa~P#MRO|/vOi'Pa~Oc/xO!^'Oi~P#M_O|/zO!^'Oi~O|/zO#_.sO%r.nO!^'Oi~O#_.sO%r.nOi$ai|$ai~O&S/}O~P$!}O#_.sO%r.nOi%Xa|%Xa~Oi'Pi~P#MRO}0QO~Oc/xO!^'Oq~P#M_O|0SO!^'Oq~O#_.sO%r.nO|%Wi!^%Wi~Oc/xO~P#M_Oc/xO!^'Oy~P#M_O#_.sO%r.nOi$bi|$bi~O#_.sO%r.nO|%Wq!^%Wq~O|+dO#f%pa%^%pa%a%pa&S%pa~P$dOX&bOq0VOx0eO~P'WOp0[O~Oq0[O~P'WO}0]O~Ov0^O~P!-iO&d&g&o&p&c&j&n%}&c~",
                    goto: "!<w'QPPPPPPPP'RP'Z*s+]+v,b,}-kP.YP'Z.y.y'ZPPP'Z2cPPPPPP2c5VPP5VP7g7p=pPP=s>e>hPP'Z'ZPP?QPP'Z'ZPP'Z'Z'Z'Z'Z?U?{'ZP@OP@UD]GyPG}HZH_HcHg'ZPPPHkHq'RP'R'RP'RP'RP'RP'RP'R'R'RP'RPP'RPP'RPHwPIOIUPIOPIOIOPPPIOPKTPK^KdKjKTPIOKpPIOPKwK}PLRLgMUMoLRLRMuNSLRLRLRLRNhNnNqNvNy! T! Z! g! y!!P!!Z!!a!!}!#T!#Z!#a!#k!#q!#w!#}!$T!$Z!$m!$w!$}!%T!%Z!%e!%k!%q!%w!&R!&X!&c!&i!&r!&x!'X!'a!'k!'rPPPPPPPPPPPPPPPPP!'x!'{!(R!([!(f!(qPPPPPPPPPPPP!-e!.y!2s!6TPP!6]!6o!6x!7n!7e!7w!7}!8Q!8T!8W!8`!9PPPPPPPPPP!9S!9cPPPP!:R!:_!:k!:q!:z!:}!;T!;Z!;a!;dP!;l!;u!<q!<t]jOs#u$u)x+|'}eOTYZ[fistuwy}!O!S!T!U!V!Y!]!g!h!i!j!k!l!m!o!s!t!u!w!x#O#S#W#X#b#f#i#l#r#u$W$X$Z$]$`$p$r$s$u$|%Y%_%f%i%k%n%r%w%y&T&`&b&m&q&z&|&}'U'Y']'d'g'v'w'z'|'}(R(W(Y(^(b(g(h(n(q)O)Q)Y)])i)l)p)q)u)x*R*]*f*i*j*m*s*t*v*x*{*|+P+S+W+X+[+d+f+g+n+v+w+|,T,U,X,a,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[.z/O/g0V0W0X0Y0[0]0^0_0`0b0f}!gQ#q$O$a$o${%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z!P!hQ#q$O$a$o${%Q%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z!R!iQ#q$O$a$o${%Q%R%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z!T!jQ#q$O$a$o${%Q%R%S%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z!V!kQ#q$O$a$o${%Q%R%S%T%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z!X!lQ#q$O$a$o${%Q%R%S%T%U%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z!]!lQ!r#q$O$a$o${%Q%R%S%T%U%V%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0Z'}TOTYZ[fistuwy}!O!S!T!U!V!Y!]!g!h!i!j!k!l!m!o!s!t!u!w!x#O#S#W#X#b#f#i#l#r#u$W$X$Z$]$`$p$r$s$u$|%Y%_%f%i%k%n%r%w%y&T&`&b&m&q&z&|&}'U'Y']'d'g'v'w'z'|'}(R(W(Y(^(b(g(h(n(q)O)Q)Y)])i)l)p)q)u)x*R*]*f*i*j*m*s*t*v*x*{*|+P+S+W+X+[+d+f+g+n+v+w+|,T,U,X,a,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[.z/O/g0V0W0X0Y0[0]0^0_0`0b0f&cVOYZ[isuw}!O!S!T!U!Y!m!o!s!t!u!w!x#b#f#i#l#r#u$X$Z$]$`$s$u%Y%_%f%i%k%r%w%y&T&`&m&q&|&}'U']'d'g'v'w'z'|'}(R(Y(b(h(n(q)O)Q)Y)i)l)u)x*R*]*f*i*j*m*s*t*v*x*{*|+P+W+X+[+d+g+n+|,T,U,X,a,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[/O/g0V0W0X0Y0[0]0^0_0b0f%mXOYZ[isw}!O!S!T!U!Y!m!o#b#f#i#l#r#u$X$Z$]$`$s$u%Y%_%i%k%r%w%y&T&`&m&q&|&}'U']'d'g'v'w'z'|'}(R(Y(b(h(n(q)O)Q)Y)i)l)u)x*R*]*f*i*j*m*s*v*x*{*|+P+W+X+[+d+g+n+|,T,U,X,a,b,c,e,f,i,m,o,q,s,t,w-Y-[-c-f.Z.[/O0]0^0_Q$UvQ/P.`R0c0e'teOTYZ[fistuwy}!O!S!T!U!V!Y!]!g!h!i!j!k!l!o!s!t!u!w!x#O#S#W#X#b#f#i#l#r#u$W$X$Z$]$`$p$r$s$u$|%Y%_%f%i%k%n%r%w%y&T&`&b&m&q&z&|&}'U'Y']'d'g'v'z'|'}(R(W(Y(^(b(g(h(n(q)O)Q)Y)])i)l)p)q)u)x*R*]*i*j*m*s*t*v*x*{*|+P+S+W+X+[+d+f+g+n+v+w+|,T,U,X,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[.z/O/g0V0W0X0Y0[0]0^0_0`0b0fW#xm!P!Q$gW$Qv&o.`0eQ$i!RQ$y!ZQ$z![W%X!m'w*f,aS&n$R$SQ'`$tQ)R&hQ)a'OU)b'Q)c)dU)e'S)f+mQ*T'iW*U'k,[-^-xS,Z*V*WY,y+h,z-p-q.eQ,|+jQ-V,QQ-X,Sl-{-b.R.S.U.o.q.v/^/c/h/m/x/}0QQ.d-oQ.w.TQ/T.iQ/`.sU/s/i/v0OX/y/n/z0R0SR&m$Q!_!{YZ!T!U!o%_%k%r'z'|'}(Y(b)l*i*j*m*s*v*x,b,c,e,f,i-c-f.Z.[/OR%i!zQ#PYQ&U#bQ&X#fQ&Z#iQ&]#lQ&v$]Q&y$`R,u+[T._-i/g![!nQ!r#q$O$a$o${%Q%R%S%T%U%V%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0ZQ&k#yR'n$zR'v%XQ%b!qR/R.g'|dOTYZ[fistuwy}!O!S!T!U!V!Y!]!g!h!i!j!k!l!m!o!s!t!u!w!x#O#S#W#X#b#f#i#l#r#u$W$X$Z$]$`$p$r$s$u$|%Y%_%f%i%k%n%r%w%y&T&`&b&m&q&z&|&}'U'Y']'d'g'v'w'z'|'}(R(W(Y(^(b(g(h(n(q)O)Q)Y)])i)l)p)q)u)x*R*]*f*i*j*m*s*t*v*x*{*|+P+S+W+X+[+d+f+g+n+v+w+|,T,U,X,a,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[.z/O/g0V0W0X0Y0[0]0^0_0`0b0fS#od#p!P.P-b.R.S.T.U.i.o.q.v/^/c/h/i/m/n/v/x/z/}0O0Q0R0S'|dOTYZ[fistuwy}!O!S!T!U!V!Y!]!g!h!i!j!k!l!m!o!s!t!u!w!x#O#S#W#X#b#f#i#l#r#u$W$X$Z$]$`$p$r$s$u$|%Y%_%f%i%k%n%r%w%y&T&`&b&m&q&z&|&}'U'Y']'d'g'v'w'z'|'}(R(W(Y(^(b(g(h(n(q)O)Q)Y)])i)l)p)q)u)x*R*]*f*i*j*m*s*t*v*x*{*|+P+S+W+X+[+d+f+g+n+v+w+|,T,U,X,a,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[.z/O/g0V0W0X0Y0[0]0^0_0`0b0fT#od#pT#c`#de(u&U&X&Z&](w(y({(},u-nT+](t+^T#ga#hT#jb#kT#mc#nQ$_xR,Y*UX$]x$^$_&xZlOs$u)x+|XpOs)x+|Q$v!XQ'W$mQ'X$nQ'j$xQ'm$zQ)v'_Q)|'dQ*O'eQ*P'fQ*^'lQ*`'nQ+q)lQ+s)mQ+t)nQ+x)tS+z)w*_Q+})zQ,O){Q,P)}Q-O+pQ-P+rQ-R+yQ-S+{Q-W,RQ-s-QQ-u-UQ-v-VQ.f-tQ.{.XR/f.|WpOs)x+|R#{oQ'l$yR)w'`Q,X*UR-[,YQ*_'lR+{)wZnOos)x+|Q'p${R*b'qT-`,`-au.W-b.R.S.U.i.o.q.v/^/c/h/i/m/v/x/}0O0Qt.W-b.R.S.U.i.o.q.v/^/c/h/i/m/v/x/}0O0QQ.w.TX/y/n/z0R0S!P.O-b.R.S.T.U.i.o.q.v/^/c/h/i/m/n/v/x/z/}0O0Q0R0SQ.l-}R/Y.mg.o.Q.p/U/]/b/p/r/t0P0T0Uu.V-b.R.S.U.i.o.q.v/^/c/h/i/m/v/x/}0O0QX.j-{.V/T/sR/V.iV/u/i/v0OR.|.XQsOS#}s+|R+|)xQ&p$TR)W&pS%x#V$VS(i%x(lT(l%{&rQ%l!}Q%s#RW(Z%l%s(`(dQ(`%pR(d%uQ&{$aR)^&{Q(o%|Q*}(jT+T(o*}Q'x%ZR*g'xS'{%^%_Y*k'{*l,g-g.]U*l'|'}(OU,g*m*n*oS-g,h,iR.]-hQ#^^R&P#^Q#a_R&R#aQ#d`R&V#dQ(r&SS+Y(r+ZR+Z(sQ+^(tR,v+^Q#haR&Y#hQ#kbR&[#kQ#ncR&^#nQ#pdR&_#pQ#sgQ&a#qW&d#s&a)Z+eQ)Z&uR+e0ZQ$^xS&w$^&xR&x$_Q'V$kR)j'VQ&i#xR)S&iQ$g!QR'P$gQ+i)bS,{+i-rR-r,|Q'T$iR)g'TQ#vkR&f#vQ)k'WR+o)kQ'Z$oS)r'Z)sR)s'[Q'c$vR)y'cQ'h$wS*S'h,VR,V*TQ,]*YR-_,]WoOs)x+|R#zoQ-a,`R-y-ad.p.Q/U/]/b/p/r/t0P0T0UR/[.pU.h-{/T/sR/S.hQ/o/bS/{/o/|R/|/pS/j/U/VR/w/jQ.r.QR/_.rR!_PXrOs)x+|WqOs)x+|R'a$uYkOs$u)x+|R&e#u[xOs#u$u)x+|R&v$]&bQOYZ[isuw}!O!S!T!U!Y!m!o!s!t!u!w!x#b#f#i#l#r#u$X$Z$]$`$s$u%Y%_%f%i%k%r%w%y&T&`&m&q&|&}'U']'d'g'v'w'z'|'}(R(Y(b(h(n(q)O)Q)Y)i)l)u)x*R*]*f*i*j*m*s*t*v*x*{*|+P+W+X+[+d+g+n+|,T,U,X,a,b,c,e,f,i,k,m,o,q,s,t,w-Y-[-c-f-i.Z.[/O/g0V0W0X0Y0[0]0^0_0b0fQ!rTQ#qfQ$OtU$ay%n(^S$o!V$rQ${!]Q%Q!gQ%R!hQ%S!iQ%T!jQ%U!kQ%V!lQ%p#OQ%u#SQ%{#WQ%|#XQ&r$WQ'[$pQ'q$|Q)P&bU)[&z)]+fW)o'Y)q+v+wQ*q(WQ*z(gQ+u)pQ,p+SQ/e.zR0Z0`Q!}YQ#RZQ$m!TQ$n!UQ%^!oQ(O%_^(V%k%r(Y(b*s*v*x^*h'z*j,e,f-f.[/OQ*n'|Q*o'}Q+r)lQ,d*iQ,h*mQ-d,bQ-e,cQ-h,iQ.Y-cR.}.Z[gOs#u$u)x+|!^!zYZ!T!U!o%_%k%r'z'|'}(Y(b)l*i*j*m*s*v*x,b,c,e,f,i-c-f.Z.[/OQ#V[Q#tiS$Vw}Q$d!OW$k!S$`'])uS$w!Y$sW%W!m'w*f,aY&S#b#f#i#l+[`&c#r&`)O)Q)Y+d,w0_Q&s$XQ&t$ZQ&u$]Q't%YQ(U%iW(f%w(h*{+PQ(j%yQ(s&TQ)U&mS)X&q0]Q)_&|Q)`&}U)h'U)i+nQ)}'dY*Q'g*R,T,U-YQ*d'vS*p(R0^W+R(n*|,m,qW+V(q+X,s,tQ,_*]Q,r+WQ,x+gQ-Z,XQ-l,oR-w-[hUOs#r#u$u&`&q(R)O)Q)x+|%S!yYZ[iw}!O!S!T!U!Y!m!o#b#f#i#l$X$Z$]$`$s%Y%_%i%k%r%w%y&T&m&|&}'U']'d'g'v'w'z'|'}(Y(b(h(n(q)Y)i)l)u*R*]*f*i*j*m*s*v*x*{*|+P+W+X+[+d+g+n,T,U,X,a,b,c,e,f,i,m,o,q,s,t,w-Y-[-c-f.Z.[/O0]0^0_Q$PuW%c!s!w0W0bQ%d!tQ%e!uQ%g!xQ%q0VS(Q%f0[Q(S0XQ(T0YQ,j*tQ-k,kS.^-i/gR0d0fU$Tv.`0eR)V&o[hOs#u$u)x+|a!|Y#b#f#i#l$]$`+[Q#[[Q$YwR$c}Q%m!}Q%t#RQ%z#VQ't%WQ(a%pQ(e%uQ(m%{Q(p%|Q+O(jQ-j,jQ.b-kR/Q.aQ$byQ(]%nR*u(^Q.a-iR/q/gR#UZR#Z[R%]!mQ%Z!mV*e'w*f,a!]!pQ!r#q$O$a$o${%Q%R%S%T%U%V%p%u%{%|&r'['q)P)[)o*q*z+u,p/e0ZR%`!oQ&U#bQ&X#fQ&Z#iQ&]#lR,u+[Q(v&UQ(x&XQ(z&ZQ(|&]Q+`(wQ+a(yQ+b({Q+c(}Q-m,uR.c-nQ$l!SQ&y$`Q)t']R+y)uQ#ymQ$e!PQ$h!QR'R$gQ)a'QR+l)dQ)a'QQ+k)cR+l)dR$j!RXqOs)x+|Q$q!VR'^$rQ$x!YR'_$sR*['kQ*Y'kV-],[-^-xQ.X-bQ.t.RR.u.SU.Q-b.R.SQ.y.UQ/U.iQ/Z.oU/].q/^/mQ/b.vQ/p/cQ/r/hU/t/i/v0OQ0P/xQ0T/}R0U0QR.x.TR/W.i",
                    nodeNames: "⚠ print { { { { Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ) ( ParenthesizedExpression BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from TupleExpression ComprehensionExpression async for LambdaExpression ] [ ArrayExpression ArrayComprehensionExpression } { DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatConversion FormatSpec FormatReplacement FormatReplacement FormatReplacement FormatReplacement ContinuedString Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert StatementGroup ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At MatchStatement match MatchBody MatchClause case CapturePattern LiteralPattern ArithOp ArithOp AsPattern OrPattern LogicOp AttributePattern SequencePattern MappingPattern StarPattern ClassPattern PatternArgList KeywordPattern KeywordPattern Guard",
                    maxTerm: 277,
                    context: I,
                    nodeProps: [
                        ["group", -14, 8, 88, 90, 91, 93, 95, 97, 99, 101, 102, 103, 105, 108, 111, "Statement Statement", -22, 10, 20, 23, 27, 42, 51, 52, 58, 59, 62, 63, 64, 65, 66, 69, 72, 73, 74, 82, 83, 84, 85, "Expression", -10, 113, 115, 118, 120, 121, 125, 127, 132, 134, 137, "Statement", -9, 142, 143, 146, 147, 149, 150, 151, 152, 153, "Pattern"],
                        ["openedBy", 25, "(", 56, "[", 60, "{"],
                        ["closedBy", 26, ")", 57, "]", 61, "}"]
                    ],
                    propSources: [L],
                    skippedNodes: [0, 6],
                    repeatNodeCount: 37,
                    tokenData: "%-W#sR!`OX%TXY=|Y[%T[]=|]p%Tpq=|qr@_rsDOst!+|tu%Tuv!Nnvw#!|wx#$Wxy#:Uyz#;Yz{#<^{|#>x|}#@S}!O#AW!O!P#Ci!P!Q#N_!Q!R$!y!R![$&w![!]$1e!]!^$3s!^!_$4w!_!`$7c!`!a$8m!a!b%T!b!c$;U!c!d$<b!d!e$>W!e!h$<b!h!i$H[!i!t$<b!t!u%#r!u!w$<b!w!x$Fl!x!}$<b!}#O%%z#O#P?d#P#Q%'O#Q#R%(S#R#S$<b#S#T%T#T#U$<b#U#V$>W#V#Y$<b#Y#Z$H[#Z#f$<b#f#g%#r#g#i$<b#i#j$Fl#j#o$<b#o#p%)^#p#q%*S#q#r%+^#r#s%,S#s$g%T$g;'S$<b;'S;=`$>Q<%lO$<b!n%^]&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!n&^]&m!b&eSOr%Trs'Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!n'^]&m!b&eSOr%Trs(Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!f(^Z&m!b&eSOw(Vwx)Px#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V!f)UZ&m!bOw(Vwx)wx#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V!f)|Z&m!bOw(Vwx*ox#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V!b*tT&m!bO#o*o#p#q*o#r;'S*o;'S;=`+T<%lO*o!b+WP;=`<%l*o!f+`W&m!bO#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`.d;=`<%l+x<%lO(VS+}V&eSOw+xwx,dx#O+x#O#P-c#P;'S+x;'S;=`.^<%lO+xS,gVOw+xwx,|x#O+x#O#P-c#P;'S+x;'S;=`.^<%lO+xS-PUOw+xx#O+x#O#P-c#P;'S+x;'S;=`.^<%lO+xS-fRO;'S+x;'S;=`-o;=`O+xS-tW&eSOw+xwx,dx#O+x#O#P-c#P;'S+x;'S;=`.^;=`<%l+x<%lO+xS.aP;=`<%l+x!f.iW&eSOw+xwx,dx#O+x#O#P-c#P;'S+x;'S;=`.^;=`<%l(V<%lO+x!f/UP;=`<%l(V!n/`]&m!b&hWOr%Trs&Vsw%Twx0Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!n0`]&m!b&hWOr%Trs&Vsw%Twx1Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!j1`Z&m!b&hWOr1Xrs2Rs#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X!j2WZ&m!bOr1Xrs2ys#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X!j3OZ&m!bOr1Xrs*os#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X!j3vW&m!bO#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`6z;=`<%l4`<%lO1XW4eV&hWOr4`rs4zs#O4`#O#P5y#P;'S4`;'S;=`6t<%lO4`W4}VOr4`rs5ds#O4`#O#P5y#P;'S4`;'S;=`6t<%lO4`W5gUOr4`s#O4`#O#P5y#P;'S4`;'S;=`6t<%lO4`W5|RO;'S4`;'S;=`6V;=`O4`W6[W&hWOr4`rs4zs#O4`#O#P5y#P;'S4`;'S;=`6t;=`<%l4`<%lO4`W6wP;=`<%l4`!j7PW&hWOr4`rs4zs#O4`#O#P5y#P;'S4`;'S;=`6t;=`<%l1X<%lO4`!j7lP;=`<%l1X!n7tW&m!bO#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=P;=`<%l8^<%lO%T[8eX&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^[9VX&eSOr8^rs9rsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^[9wX&eSOr8^rs+xsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^[:iX&hWOr8^rs9Qsw8^wx;Ux#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^[;ZX&hWOr8^rs9Qsw8^wx4`x#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^[;yRO;'S8^;'S;=`<S;=`O8^[<ZY&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y;=`<%l8^<%lO8^[<|P;=`<%l8^!n=WY&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y;=`<%l%T<%lO8^!n=yP;=`<%l%T#s>Xc&m!b&eS&hW%k!TOX%TXY=|Y[%T[]=|]p%Tpq=|qr%Trs&Vsw%Twx/Xx#O%T#O#P?d#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#s?i[&m!bOY%TYZ=|Z]%T]^=|^#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=P;=`<%l8^<%lO%T!q@hd&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`Av!`#O%T#O#P7o#P#T%T#T#UBz#U#f%T#f#gBz#g#hBz#h#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!qBR]oR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!qCV]!nR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#cDXa&m!b&eS&csOYE^YZ%TZ]E^]^%T^rE^rs!)|swE^wxGpx#OE^#O#P!!u#P#oE^#o#p!#d#p#qE^#q#r!#d#r;'SE^;'S;=`!)v<%lOE^#cEia&m!b&eS&hW&csOYE^YZ%TZ]E^]^%T^rE^rsFnswE^wxGpx#OE^#O#P!!u#P#oE^#o#p!#d#p#qE^#q#r!#d#r;'SE^;'S;=`!)v<%lOE^#cFw]&m!b&eS&csOr%Trs'Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#cGya&m!b&hW&csOYE^YZ%TZ]E^]^%T^rE^rsFnswE^wxIOx#OE^#O#P!!u#P#oE^#o#p!#d#p#qE^#q#r!#d#r;'SE^;'S;=`!)v<%lOE^#cIXa&m!b&hW&csOYE^YZ%TZ]E^]^%T^rE^rsFnswE^wxJ^x#OE^#O#P!!u#P#oE^#o#p!#d#p#qE^#q#r!#d#r;'SE^;'S;=`!)v<%lOE^#_Jg_&m!b&hW&csOYJ^YZ1XZ]J^]^1X^rJ^rsKfs#OJ^#O#PL`#P#oJ^#o#pL}#p#qJ^#q#rL}#r;'SJ^;'S;=`!!o<%lOJ^#_KmZ&m!b&csOr1Xrs2ys#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X#_LeW&m!bO#oJ^#o#pL}#p#qJ^#q#rL}#r;'SJ^;'S;=`! r;=`<%lL}<%lOJ^{MUZ&hW&csOYL}YZ4`Z]L}]^4`^rL}rsMws#OL}#O#PNc#P;'SL};'S;=`! l<%lOL}{M|V&csOr4`rs5ds#O4`#O#P5y#P;'S4`;'S;=`6t<%lO4`{NfRO;'SL};'S;=`No;=`OL}{Nv[&hW&csOYL}YZ4`Z]L}]^4`^rL}rsMws#OL}#O#PNc#P;'SL};'S;=`! l;=`<%lL}<%lOL}{! oP;=`<%lL}#_! y[&hW&csOYL}YZ4`Z]L}]^4`^rL}rsMws#OL}#O#PNc#P;'SL};'S;=`! l;=`<%lJ^<%lOL}#_!!rP;=`<%lJ^#c!!zW&m!bO#oE^#o#p!#d#p#qE^#q#r!#d#r;'SE^;'S;=`!(q;=`<%l!#d<%lOE^!P!#m]&eS&hW&csOY!#dYZ8^Z]!#d]^8^^r!#drs!$fsw!#dwx!%Yx#O!#d#O#P!'Y#P;'S!#d;'S;=`!(k<%lO!#d!P!$mX&eS&csOr8^rs9rsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^!P!%a]&hW&csOY!#dYZ8^Z]!#d]^8^^r!#drs!$fsw!#dwx!&Yx#O!#d#O#P!'Y#P;'S!#d;'S;=`!(k<%lO!#d!P!&a]&hW&csOY!#dYZ8^Z]!#d]^8^^r!#drs!$fsw!#dwxL}x#O!#d#O#P!'Y#P;'S!#d;'S;=`!(k<%lO!#d!P!']RO;'S!#d;'S;=`!'f;=`O!#d!P!'o^&eS&hW&csOY!#dYZ8^Z]!#d]^8^^r!#drs!$fsw!#dwx!%Yx#O!#d#O#P!'Y#P;'S!#d;'S;=`!(k;=`<%l!#d<%lO!#d!P!(nP;=`<%l!#d#c!(z^&eS&hW&csOY!#dYZ8^Z]!#d]^8^^r!#drs!$fsw!#dwx!%Yx#O!#d#O#P!'Y#P;'S!#d;'S;=`!(k;=`<%lE^<%lO!#d#c!)yP;=`<%lE^#c!*V]&m!b&eS&csOr%Trs!+Osw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c!+ZZ&iW&m!b&eS&gsOw(Vwx)Px#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V#s!,XaU!T&m!b&eS&hWOY!+|YZ%TZ]!+|]^%T^r!+|rs!-^sw!+|wx!:hx#O!+|#O#P!FW#P#o!+|#o#p!GT#p#q!+|#q#r!GT#r;'S!+|;'S;=`!Nh<%lO!+|#s!-gaU!T&m!b&eSOY!+|YZ%TZ]!+|]^%T^r!+|rs!.lsw!+|wx!:hx#O!+|#O#P!FW#P#o!+|#o#p!GT#p#q!+|#q#r!GT#r;'S!+|;'S;=`!Nh<%lO!+|#s!.uaU!T&m!b&eSOY!+|YZ%TZ]!+|]^%T^r!+|rs!/zsw!+|wx!:hx#O!+|#O#P!FW#P#o!+|#o#p!GT#p#q!+|#q#r!GT#r;'S!+|;'S;=`!Nh<%lO!+|#k!0T_U!T&m!b&eSOY!/zYZ(VZ]!/z]^(V^w!/zwx!1Sx#O!/z#O#P!4z#P#o!/z#o#p!5w#p#q!/z#q#r!5w#r;'S!/z;'S;=`!:b<%lO!/z#k!1Z_U!T&m!bOY!/zYZ(VZ]!/z]^(V^w!/zwx!2Yx#O!/z#O#P!4z#P#o!/z#o#p!5w#p#q!/z#q#r!5w#r;'S!/z;'S;=`!:b<%lO!/z#k!2a_U!T&m!bOY!/zYZ(VZ]!/z]^(V^w!/zwx!3`x#O!/z#O#P!4z#P#o!/z#o#p!5w#p#q!/z#q#r!5w#r;'S!/z;'S;=`!:b<%lO!/z#g!3gZU!T&m!bOY!3`YZ*oZ]!3`]^*o^#o!3`#o#p!4Y#p#q!3`#q#r!4Y#r;'S!3`;'S;=`!4t<%lO!3`!T!4_TU!TOY!4YZ]!4Y^;'S!4Y;'S;=`!4n<%lO!4Y!T!4qP;=`<%l!4Y#g!4wP;=`<%l!3`#k!5R[U!T&m!bOY!/zYZ(VZ]!/z]^(V^#o!/z#o#p!5w#p#q!/z#q#r!5w#r;'S!/z;'S;=`!9s;=`<%l+x<%lO!/z!X!6OZU!T&eSOY!5wYZ+xZ]!5w]^+x^w!5wwx!6qx#O!5w#O#P!8a#P;'S!5w;'S;=`!9m<%lO!5w!X!6vZU!TOY!5wYZ+xZ]!5w]^+x^w!5wwx!7ix#O!5w#O#P!8a#P;'S!5w;'S;=`!9m<%lO!5w!X!7nZU!TOY!5wYZ+xZ]!5w]^+x^w!5wwx!4Yx#O!5w#O#P!8a#P;'S!5w;'S;=`!9m<%lO!5w!X!8fWU!TOY!5wYZ+xZ]!5w]^+x^;'S!5w;'S;=`!9O;=`<%l+x<%lO!5w!X!9TW&eSOw+xwx,dx#O+x#O#P-c#P;'S+x;'S;=`.^;=`<%l!5w<%lO+x!X!9pP;=`<%l!5w#k!9xW&eSOw+xwx,dx#O+x#O#P-c#P;'S+x;'S;=`.^;=`<%l!/z<%lO+x#k!:eP;=`<%l!/z#s!:qaU!T&m!b&hWOY!+|YZ%TZ]!+|]^%T^r!+|rs!-^sw!+|wx!;vx#O!+|#O#P!FW#P#o!+|#o#p!GT#p#q!+|#q#r!GT#r;'S!+|;'S;=`!Nh<%lO!+|#s!<PaU!T&m!b&hWOY!+|YZ%TZ]!+|]^%T^r!+|rs!-^sw!+|wx!=Ux#O!+|#O#P!FW#P#o!+|#o#p!GT#p#q!+|#q#r!GT#r;'S!+|;'S;=`!Nh<%lO!+|#o!=__U!T&m!b&hWOY!=UYZ1XZ]!=U]^1X^r!=Urs!>^s#O!=U#O#P!@j#P#o!=U#o#p!Ag#p#q!=U#q#r!Ag#r;'S!=U;'S;=`!FQ<%lO!=U#o!>e_U!T&m!bOY!=UYZ1XZ]!=U]^1X^r!=Urs!?ds#O!=U#O#P!@j#P#o!=U#o#p!Ag#p#q!=U#q#r!Ag#r;'S!=U;'S;=`!FQ<%lO!=U#o!?k_U!T&m!bOY!=UYZ1XZ]!=U]^1X^r!=Urs!3`s#O!=U#O#P!@j#P#o!=U#o#p!Ag#p#q!=U#q#r!Ag#r;'S!=U;'S;=`!FQ<%lO!=U#o!@q[U!T&m!bOY!=UYZ1XZ]!=U]^1X^#o!=U#o#p!Ag#p#q!=U#q#r!Ag#r;'S!=U;'S;=`!Ec;=`<%l4`<%lO!=U!]!AnZU!T&hWOY!AgYZ4`Z]!Ag]^4`^r!Agrs!Bas#O!Ag#O#P!DP#P;'S!Ag;'S;=`!E]<%lO!Ag!]!BfZU!TOY!AgYZ4`Z]!Ag]^4`^r!Agrs!CXs#O!Ag#O#P!DP#P;'S!Ag;'S;=`!E]<%lO!Ag!]!C^ZU!TOY!AgYZ4`Z]!Ag]^4`^r!Agrs!4Ys#O!Ag#O#P!DP#P;'S!Ag;'S;=`!E]<%lO!Ag!]!DUWU!TOY!AgYZ4`Z]!Ag]^4`^;'S!Ag;'S;=`!Dn;=`<%l4`<%lO!Ag!]!DsW&hWOr4`rs4zs#O4`#O#P5y#P;'S4`;'S;=`6t;=`<%l!Ag<%lO4`!]!E`P;=`<%l!Ag#o!EhW&hWOr4`rs4zs#O4`#O#P5y#P;'S4`;'S;=`6t;=`<%l!=U<%lO4`#o!FTP;=`<%l!=U#s!F_[U!T&m!bOY!+|YZ%TZ]!+|]^%T^#o!+|#o#p!GT#p#q!+|#q#r!GT#r;'S!+|;'S;=`!Mq;=`<%l8^<%lO!+|!a!G^]U!T&eS&hWOY!GTYZ8^Z]!GT]^8^^r!GTrs!HVsw!GTwx!JVx#O!GT#O#P!LV#P;'S!GT;'S;=`!Mk<%lO!GT!a!H^]U!T&eSOY!GTYZ8^Z]!GT]^8^^r!GTrs!IVsw!GTwx!JVx#O!GT#O#P!LV#P;'S!GT;'S;=`!Mk<%lO!GT!a!I^]U!T&eSOY!GTYZ8^Z]!GT]^8^^r!GTrs!5wsw!GTwx!JVx#O!GT#O#P!LV#P;'S!GT;'S;=`!Mk<%lO!GT!a!J^]U!T&hWOY!GTYZ8^Z]!GT]^8^^r!GTrs!HVsw!GTwx!KVx#O!GT#O#P!LV#P;'S!GT;'S;=`!Mk<%lO!GT!a!K^]U!T&hWOY!GTYZ8^Z]!GT]^8^^r!GTrs!HVsw!GTwx!Agx#O!GT#O#P!LV#P;'S!GT;'S;=`!Mk<%lO!GT!a!L[WU!TOY!GTYZ8^Z]!GT]^8^^;'S!GT;'S;=`!Lt;=`<%l8^<%lO!GT!a!L{Y&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y;=`<%l!GT<%lO8^!a!MnP;=`<%l!GT#s!MxY&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y;=`<%l!+|<%lO8^#s!NkP;=`<%l!+|#b!Ny_%zQ&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#b#!T]!{r&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#b##X_%tQ&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#$aa&m!b&hW&csOY#%fYZ%TZ]#%f]^%T^r#%frs#&vsw#%fwx#8Ux#O#%f#O#P#0}#P#o#%f#o#p#1l#p#q#%f#q#r#1l#r;'S#%f;'S;=`#8O<%lO#%f#c#%qa&m!b&eS&hW&csOY#%fYZ%TZ]#%f]^%T^r#%frs#&vsw#%fwx#/{x#O#%f#O#P#0}#P#o#%f#o#p#1l#p#q#%f#q#r#1l#r;'S#%f;'S;=`#8O<%lO#%f#c#'Pa&m!b&eS&csOY#%fYZ%TZ]#%f]^%T^r#%frs#(Usw#%fwx#/{x#O#%f#O#P#0}#P#o#%f#o#p#1l#p#q#%f#q#r#1l#r;'S#%f;'S;=`#8O<%lO#%f#c#(_a&m!b&eS&csOY#%fYZ%TZ]#%f]^%T^r#%frs#)dsw#%fwx#/{x#O#%f#O#P#0}#P#o#%f#o#p#1l#p#q#%f#q#r#1l#r;'S#%f;'S;=`#8O<%lO#%f#Z#)m_&m!b&eS&csOY#)dYZ(VZ]#)d]^(V^w#)dwx#*lx#O#)d#O#P#+f#P#o#)d#o#p#,T#p#q#)d#q#r#,T#r;'S#)d;'S;=`#/u<%lO#)d#Z#*sZ&m!b&csOw(Vwx)wx#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V#Z#+kW&m!bO#o#)d#o#p#,T#p#q#)d#q#r#,T#r;'S#)d;'S;=`#.x;=`<%l#,T<%lO#)dw#,[Z&eS&csOY#,TYZ+xZ]#,T]^+x^w#,Twx#,}x#O#,T#O#P#-i#P;'S#,T;'S;=`#.r<%lO#,Tw#-SV&csOw+xwx,|x#O+x#O#P-c#P;'S+x;'S;=`.^<%lO+xw#-lRO;'S#,T;'S;=`#-u;=`O#,Tw#-|[&eS&csOY#,TYZ+xZ]#,T]^+x^w#,Twx#,}x#O#,T#O#P#-i#P;'S#,T;'S;=`#.r;=`<%l#,T<%lO#,Tw#.uP;=`<%l#,T#Z#/P[&eS&csOY#,TYZ+xZ]#,T]^+x^w#,Twx#,}x#O#,T#O#P#-i#P;'S#,T;'S;=`#.r;=`<%l#)d<%lO#,T#Z#/xP;=`<%l#)d#c#0U]&m!b&hW&csOr%Trs&Vsw%Twx0Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#1SW&m!bO#o#%f#o#p#1l#p#q#%f#q#r#1l#r;'S#%f;'S;=`#6y;=`<%l#1l<%lO#%f!P#1u]&eS&hW&csOY#1lYZ8^Z]#1l]^8^^r#1lrs#2nsw#1lwx#4nx#O#1l#O#P#5b#P;'S#1l;'S;=`#6s<%lO#1l!P#2u]&eS&csOY#1lYZ8^Z]#1l]^8^^r#1lrs#3nsw#1lwx#4nx#O#1l#O#P#5b#P;'S#1l;'S;=`#6s<%lO#1l!P#3u]&eS&csOY#1lYZ8^Z]#1l]^8^^r#1lrs#,Tsw#1lwx#4nx#O#1l#O#P#5b#P;'S#1l;'S;=`#6s<%lO#1l!P#4uX&hW&csOr8^rs9Qsw8^wx;Ux#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^!P#5eRO;'S#1l;'S;=`#5n;=`O#1l!P#5w^&eS&hW&csOY#1lYZ8^Z]#1l]^8^^r#1lrs#2nsw#1lwx#4nx#O#1l#O#P#5b#P;'S#1l;'S;=`#6s;=`<%l#1l<%lO#1l!P#6vP;=`<%l#1l#c#7S^&eS&hW&csOY#1lYZ8^Z]#1l]^8^^r#1lrs#2nsw#1lwx#4nx#O#1l#O#P#5b#P;'S#1l;'S;=`#6s;=`<%l#%f<%lO#1l#c#8RP;=`<%l#%f#c#8_]&m!b&hW&csOr%Trs&Vsw%Twx#9Wx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#9cZ&fS&m!b&hW&dsOr1Xrs2Rs#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X#c#:a]js&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!q#;e]iR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#<iaXs&m!b&eS&hWOr%Trs&Vsw%Twx/Xxz%Tz{#=n{!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#=y_cR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#?T_%ws&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!q#@_]|R&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#s#Ac`%xs&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`!a#Be!a#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#O#Bp]&{`&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#Cta!hQ&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!O%T!O!P#Dy!P!Q%T!Q![#GV![#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#ES_&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!O%T!O!P#FR!P#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#F^]!us&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a#Gbi!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q![#GV![!g%T!g!h#IP!h!l%T!l!m#MZ!m#O%T#O#P7o#P#R%T#R#S#GV#S#X%T#X#Y#IP#Y#^%T#^#_#MZ#_#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a#IYc&m!b&eS&hWOr%Trs&Vsw%Twx/Xx{%T{|#Je|}%T}!O#Je!O!Q%T!Q![#Km![#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a#Jn_&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q![#Km![#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a#Kxe!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q![#Km![!l%T!l!m#MZ!m#O%T#O#P7o#P#R%T#R#S#Km#S#^%T#^#_#MZ#_#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a#Mf]!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c#Nja%yR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!P%T!P!Q$ o!Q!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#b$ z_%{Q&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$#Uw!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!O%T!O!P$%o!P!Q%T!Q![$&w![!d%T!d!e$(w!e!g%T!g!h#IP!h!l%T!l!m#MZ!m!q%T!q!r$+m!r!z%T!z!{$.]!{#O%T#O#P7o#P#R%T#R#S$&w#S#U%T#U#V$(w#V#X%T#X#Y#IP#Y#^%T#^#_#MZ#_#c%T#c#d$+m#d#l%T#l#m$.]#m#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$%x_&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q![#GV![#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$'Sk!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!O%T!O!P$%o!P!Q%T!Q![$&w![!g%T!g!h#IP!h!l%T!l!m#MZ!m#O%T#O#P7o#P#R%T#R#S$&w#S#X%T#X#Y#IP#Y#^%T#^#_#MZ#_#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$)Qb&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q!R$*Y!R!S$*Y!S#O%T#O#P7o#P#R%T#R#S$*Y#S#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$*eb!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q!R$*Y!R!S$*Y!S#O%T#O#P7o#P#R%T#R#S$*Y#S#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$+va&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q!Y$,{!Y#O%T#O#P7o#P#R%T#R#S$,{#S#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$-Wa!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q!Y$,{!Y#O%T#O#P7o#P#R%T#R#S$,{#S#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$.fe&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q![$/w![!c%T!c!i$/w!i#O%T#O#P7o#P#R%T#R#S$/w#S#T%T#T#Z$/w#Z#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a$0Se!jq&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!Q%T!Q![$/w![!c%T!c!i$/w!i#O%T#O#P7o#P#R%T#R#S$/w#S#T%T#T#Z$/w#Z#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#s$1p_}!T&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`$2o!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!q$2z]&TR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$4O]#fs&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$5SaoR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!^%T!^!_$6X!_!`Av!`!aAv!a#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#b$6d_%uQ&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$7n_&Ss&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`Av!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$8x`oR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`Av!`!a$9z!a#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#b$:V_%vQ&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$;c_aQ#|P&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#s$<oe&m!b&eS&hW&b`%}sOr%Trs&Vsw%Twx/Xx!Q%T!Q![$<b![!c%T!c!}$<b!}#O%T#O#P7o#P#R%T#R#S$<b#S#T%T#T#o$<b#o#p8^#p#q%T#q#r8^#r$g%T$g;'S$<b;'S;=`$>Q<%lO$<b#s$>TP;=`<%l$<b#s$>ei&m!b&eS&hW&b`%}sOr%Trs$@Ssw%Twx$C`x!Q%T!Q![$<b![!c%T!c!t$<b!t!u$Fl!u!}$<b!}#O%T#O#P7o#P#R%T#R#S$<b#S#T%T#T#f$<b#f#g$Fl#g#o$<b#o#p8^#p#q%T#q#r8^#r$g%T$g;'S$<b;'S;=`$>Q<%lO$<b#c$@]a&m!b&eS&csOYE^YZ%TZ]E^]^%T^rE^rs$AbswE^wxGpx#OE^#O#P!!u#P#oE^#o#p!#d#p#qE^#q#r!#d#r;'SE^;'S;=`!)v<%lOE^#c$Ak]&m!b&eS&csOr%Trs$Bdsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#Z$BmZ&m!b&eS&gsOw(Vwx)Px#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V#c$Cia&m!b&hW&csOY#%fYZ%TZ]#%f]^%T^r#%frs#&vsw#%fwx$Dnx#O#%f#O#P#0}#P#o#%f#o#p#1l#p#q#%f#q#r#1l#r;'S#%f;'S;=`#8O<%lO#%f#c$Dw]&m!b&hW&csOr%Trs&Vsw%Twx$Epx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#_$EyZ&m!b&hW&dsOr1Xrs2Rs#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X#s$Fye&m!b&eS&hW&b`%}sOr%Trs$@Ssw%Twx$C`x!Q%T!Q![$<b![!c%T!c!}$<b!}#O%T#O#P7o#P#R%T#R#S$<b#S#T%T#T#o$<b#o#p8^#p#q%T#q#r8^#r$g%T$g;'S$<b;'S;=`$>Q<%lO$<b#s$Hii&m!b&eS&hW&b`%}sOr%Trs$JWsw%Twx$MUx!Q%T!Q![$<b![!c%T!c!t$<b!t!u%!S!u!}$<b!}#O%T#O#P7o#P#R%T#R#S$<b#S#T%T#T#f$<b#f#g%!S#g#o$<b#o#p8^#p#q%T#q#r8^#r$g%T$g;'S$<b;'S;=`$>Q<%lO$<b#c$Ja]&m!b&eS&nsOr%Trs$KYsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$Ka]&m!b&eSOr%Trs$LYsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#Z$LcZ&m!b&eS&psOw(Vwx)Px#O(V#O#P+Z#P#o(V#o#p+x#p#q(V#q#r+x#r;'S(V;'S;=`/R<%lO(V#c$M_]&m!b&hW&jsOr%Trs&Vsw%Twx$NWx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#c$N_]&m!b&hWOr%Trs&Vsw%Twx% Wx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#_% aZ&m!b&hW&osOr1Xrs2Rs#O1X#O#P3q#P#o1X#o#p4`#p#q1X#q#r4`#r;'S1X;'S;=`7i<%lO1X#s%!ae&m!b&eS&hW&b`%}sOr%Trs$JWsw%Twx$MUx!Q%T!Q![$<b![!c%T!c!}$<b!}#O%T#O#P7o#P#R%T#R#S$<b#S#T%T#T#o$<b#o#p8^#p#q%T#q#r8^#r$g%T$g;'S$<b;'S;=`$>Q<%lO$<b#s%$Pm&m!b&eS&hW&b`%}sOr%Trs$@Ssw%Twx$C`x!Q%T!Q![$<b![!c%T!c!h$<b!h!i%!S!i!t$<b!t!u$Fl!u!}$<b!}#O%T#O#P7o#P#R%T#R#S$<b#S#T%T#T#U$<b#U#V$Fl#V#Y$<b#Y#Z%!S#Z#o$<b#o#p8^#p#q%T#q#r8^#r$g%T$g;'S$<b;'S;=`$>Q<%lO$<b#c%&V]!Zs&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!q%'Z]!YR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#b%(__%sQ&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T#a%)gX!_#T&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^#c%*__%rR&m!b&eS&hWOr%Trs&Vsw%Twx/Xx!_%T!_!`# x!`#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T!q%+gX!^!e&eS&hWOr8^rs9Qsw8^wx:dx#O8^#O#P;v#P;'S8^;'S;=`<y<%lO8^#a%,_]%|q&m!b&eS&hWOr%Trs&Vsw%Twx/Xx#O%T#O#P7o#P#o%T#o#p8^#p#q%T#q#r8^#r;'S%T;'S;=`=v<%lO%T",
                    tokenizers: [Z, j, D, N, U, z, B, 0, 1, 2, 3, 4, 5, 6],
                    topRules: {
                        Script: [0, 7]
                    },
                    specialized: [{
                        term: 229,
                        get: e => F[e] || -1
                    }],
                    tokenPrec: 7205
                });
            var H = n(696),
                K = n(6962);
            let ee = new c.hr,
                et = new Set(["Script", "Body", "FunctionDefinition", "ClassDefinition", "LambdaExpression", "ForStatement", "MatchClause"]);

            function en(e) {
                return (t, n, r) => {
                    if (r) return !1;
                    let i = t.node.getChild("VariableName");
                    return i && n(i, e), !0
                }
            }
            let er = {
                    FunctionDefinition: en("function"),
                    ClassDefinition: en("class"),
                    ForStatement(e, t, n) {
                        if (n) {
                            for (let n = e.node.firstChild; n; n = n.nextSibling)
                                if ("VariableName" == n.name) t(n, "variable");
                                else if ("in" == n.name) break
                        }
                    },
                    ImportStatement(e, t) {
                        var n, r;
                        let {
                            node: i
                        } = e, s = (null === (n = i.firstChild) || void 0 === n ? void 0 : n.name) == "from";
                        for (let e = i.getChild("import"); e; e = e.nextSibling) "VariableName" == e.name && (null === (r = e.nextSibling) || void 0 === r ? void 0 : r.name) != "as" && t(e, s ? "variable" : "namespace")
                    },
                    AssignStatement(e, t) {
                        for (let n = e.node.firstChild; n; n = n.nextSibling)
                            if ("VariableName" == n.name) t(n, "variable");
                            else if (":" == n.name || "AssignOp" == n.name) break
                    },
                    ParamList(e, t) {
                        for (let n = null, r = e.node.firstChild; r; r = r.nextSibling) "VariableName" != r.name || n && /\*|AssignOp/.test(n.name) || t(r, "variable"), n = r
                    },
                    CapturePattern: en("variable"),
                    AsPattern: en("variable"),
                    __proto__: null
                },
                ei = /^[\w\xa1-\uffff][\w\d\xa1-\uffff]*$/,
                es = ["String", "FormatString", "Comment", "PropertyName"];

            function eo(e) {
                let t = (0, H.qz)(e.state).resolveInner(e.pos, -1);
                if (es.indexOf(t.name) > -1) return null;
                let n = "VariableName" == t.name || t.to - t.from < 20 && ei.test(e.state.sliceDoc(t.from, t.to));
                if (!n && !e.explicit) return null;
                let r = [];
                for (let n = t; n; n = n.parent) et.has(n.name) && (r = r.concat(function e(t, n) {
                    let r = ee.get(n);
                    if (r) return r;
                    let i = [],
                        s = !0;

                    function o(e, n) {
                        let r = t.sliceString(e.from, e.to);
                        i.push({
                            label: r,
                            type: n
                        })
                    }
                    return n.cursor(c.vj.IncludeAnonymous).iterate(n => {
                        if (n.name) {
                            let e = er[n.name];
                            if (e && e(n, o, s) || !s && et.has(n.name)) return !1;
                            s = !1
                        } else if (n.to - n.from > 8192) {
                            for (let r of e(t, n.node)) i.push(r);
                            return !1
                        }
                    }), ee.set(n, i), i
                }(e.state.doc, n)));
                return {
                    options: r,
                    from: n ? t.from : e.pos,
                    validFor: ei
                }
            }
            let ea = ["__annotations__", "__builtins__", "__debug__", "__doc__", "__import__", "__name__", "__loader__", "__package__", "__spec__", "False", "None", "True"].map(e => ({
                    label: e,
                    type: "constant"
                })).concat(["ArithmeticError", "AssertionError", "AttributeError", "BaseException", "BlockingIOError", "BrokenPipeError", "BufferError", "BytesWarning", "ChildProcessError", "ConnectionAbortedError", "ConnectionError", "ConnectionRefusedError", "ConnectionResetError", "DeprecationWarning", "EOFError", "Ellipsis", "EncodingWarning", "EnvironmentError", "Exception", "FileExistsError", "FileNotFoundError", "FloatingPointError", "FutureWarning", "GeneratorExit", "IOError", "ImportError", "ImportWarning", "IndentationError", "IndexError", "InterruptedError", "IsADirectoryError", "KeyError", "KeyboardInterrupt", "LookupError", "MemoryError", "ModuleNotFoundError", "NameError", "NotADirectoryError", "NotImplemented", "NotImplementedError", "OSError", "OverflowError", "PendingDeprecationWarning", "PermissionError", "ProcessLookupError", "RecursionError", "ReferenceError", "ResourceWarning", "RuntimeError", "RuntimeWarning", "StopAsyncIteration", "StopIteration", "SyntaxError", "SyntaxWarning", "SystemError", "SystemExit", "TabError", "TimeoutError", "TypeError", "UnboundLocalError", "UnicodeDecodeError", "UnicodeEncodeError", "UnicodeError", "UnicodeTranslateError", "UnicodeWarning", "UserWarning", "ValueError", "Warning", "ZeroDivisionError"].map(e => ({
                    label: e,
                    type: "type"
                }))).concat(["bool", "bytearray", "bytes", "classmethod", "complex", "float", "frozenset", "int", "list", "map", "memoryview", "object", "range", "set", "staticmethod", "str", "super", "tuple", "type"].map(e => ({
                    label: e,
                    type: "class"
                }))).concat(["abs", "aiter", "all", "anext", "any", "ascii", "bin", "breakpoint", "callable", "chr", "compile", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "exit", "filter", "format", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "isinstance", "issubclass", "iter", "len", "license", "locals", "max", "min", "next", "oct", "open", "ord", "pow", "print", "property", "quit", "repr", "reversed", "round", "setattr", "slice", "sorted", "sum", "vars", "zip"].map(e => ({
                    label: e,
                    type: "function"
                }))),
                el = [(0, K.Gn)("def ${name}(${params}):\n	${}", {
                    label: "def",
                    detail: "function",
                    type: "keyword"
                }), (0, K.Gn)("for ${name} in ${collection}:\n	${}", {
                    label: "for",
                    detail: "loop",
                    type: "keyword"
                }), (0, K.Gn)("while ${}:\n	${}", {
                    label: "while",
                    detail: "loop",
                    type: "keyword"
                }), (0, K.Gn)("try:\n	${}\nexcept ${error}:\n	${}", {
                    label: "try",
                    detail: "/ except block",
                    type: "keyword"
                }), (0, K.Gn)("if ${}:\n	\n", {
                    label: "if",
                    detail: "block",
                    type: "keyword"
                }), (0, K.Gn)("if ${}:\n	${}\nelse:\n	${}", {
                    label: "if",
                    detail: "/ else block",
                    type: "keyword"
                }), (0, K.Gn)("class ${name}:\n	def __init__(self, ${params}):\n			${}", {
                    label: "class",
                    detail: "definition",
                    type: "keyword"
                }), (0, K.Gn)("import ${module}", {
                    label: "import",
                    detail: "statement",
                    type: "keyword"
                }), (0, K.Gn)("from ${module} import ${names}", {
                    label: "from",
                    detail: "import",
                    type: "keyword"
                })],
                ec = (0, K.eC)(es, (0, K.Mb)(ea.concat(el)));

            function eh(e, t) {
                let n = e.baseIndentFor(t),
                    r = e.lineAt(e.pos, -1),
                    i = r.from + r.text.length;
                return /^\s*($|#)/.test(r.text) && e.node.to < i + 100 && !/\S/.test(e.state.sliceDoc(i, e.node.to)) && e.lineIndent(e.pos, -1) <= n || /^\s*(else:|elif |except |finally:)/.test(e.textAfter) && e.lineIndent(e.pos, -1) > n ? null : n + e.unit
            }
            let eu = H.qp.define({
                name: "python",
                parser: J.configure({
                    props: [H.uj.add({
                        Body: e => {
                            var t;
                            return null !== (t = eh(e, e.node)) && void 0 !== t ? t : e.continue()
                        },
                        IfStatement: e => /^\s*(else:|elif )/.test(e.textAfter) ? e.baseIndent : e.continue(),
                        TryStatement: e => /^\s*(except |finally:|else:)/.test(e.textAfter) ? e.baseIndent : e.continue(),
                        "TupleExpression ComprehensionExpression ParamList ArgList ParenthesizedExpression": (0, H.vw)({
                            closing: ")"
                        }),
                        "DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression": (0, H.vw)({
                            closing: "}"
                        }),
                        "ArrayExpression ArrayComprehensionExpression": (0, H.vw)({
                            closing: "]"
                        }),
                        "String FormatString": () => null,
                        Script: e => {
                            if (e.pos + /\s*/.exec(e.textAfter)[0].length >= e.node.to) {
                                let t = null;
                                for (let n = e.node, r = n.to;
                                    (n = n.lastChild) && n.to == r;) "Body" == n.type.name && (t = n);
                                if (t) {
                                    let n = eh(e, t);
                                    if (null != n) return n
                                }
                            }
                            return e.continue()
                        }
                    }), H.x0.add({
                        "ArrayExpression DictionaryExpression SetExpression TupleExpression": H.Dv,
                        Body: (e, t) => ({
                            from: e.from + 1,
                            to: e.to - (e.to == t.doc.length ? 0 : 1)
                        })
                    })]
                }),
                languageData: {
                    closeBrackets: {
                        brackets: ["(", "[", "{", "'", '"', "'''", '"""'],
                        stringPrefixes: ["f", "fr", "rf", "r", "u", "b", "br", "rb", "F", "FR", "RF", "R", "U", "B", "BR", "RB"]
                    },
                    commentTokens: {
                        line: "#"
                    },
                    indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/
                }
            });

            function ef() {
                return new H.ri(eu, [eu.data.of({
                    autocomplete: eo
                }), eu.data.of({
                    autocomplete: ec
                })])
            }
        },
        696: function (e, t, n) {
            n.d(t, {
                Dv: function () {
                    return M
                },
                Gn: function () {
                    return R
                },
                K0: function () {
                    return $
                },
                Qf: function () {
                    return es
                },
                R_: function () {
                    return eu
                },
                SS: function () {
                    return q
                },
                Um: function () {
                    return eT
                },
                c: function () {
                    return P
                },
                e7: function () {
                    return F
                },
                mi: function () {
                    return er
                },
                n$: function () {
                    return ey
                },
                nF: function () {
                    return ec
                },
                nY: function () {
                    return Y
                },
                qp: function () {
                    return p
                },
                qz: function () {
                    return d
                },
                ri: function () {
                    return T
                },
                uj: function () {
                    return W
                },
                vw: function () {
                    return A
                },
                x0: function () {
                    return j
                },
                y1: function () {
                    return Q
                }
            });
            var r, i = n(4998),
                s = n(4999),
                o = n(8099),
                a = n(6634),
                l = n(5794);
            let c = new i.md,
                h = new i.md;
            class u {
                constructor(e, t, n = [], r = "") {
                    this.data = e, this.name = r, s.yy.prototype.hasOwnProperty("tree") || Object.defineProperty(s.yy.prototype, "tree", {
                        get() {
                            return d(this)
                        }
                    }), this.parser = t, this.extension = [w.of(this), s.yy.languageData.of((e, t, n) => {
                        let r = f(e, t, n),
                            i = r.type.prop(c);
                        if (!i) return [];
                        let s = e.facet(i),
                            o = r.type.prop(h);
                        if (o) {
                            let i = r.resolve(t - r.from, n);
                            for (let t of o)
                                if (t.test(i, e)) {
                                    let n = e.facet(t.facet);
                                    return "replace" == t.type ? n : n.concat(s)
                                }
                        }
                        return s
                    })].concat(n)
                }
                isActiveAt(e, t, n = -1) {
                    return f(e, t, n).type.prop(c) == this.data
                }
                findRegions(e) {
                    let t = e.facet(w);
                    if ((null == t ? void 0 : t.data) == this.data) return [{
                        from: 0,
                        to: e.doc.length
                    }];
                    if (!t || !t.allowsNesting) return [];
                    let n = [],
                        r = (e, t) => {
                            if (e.prop(c) == this.data) {
                                n.push({
                                    from: t,
                                    to: t + e.length
                                });
                                return
                            }
                            let s = e.prop(i.md.mounted);
                            if (s) {
                                if (s.tree.prop(c) == this.data) {
                                    if (s.overlay)
                                        for (let e of s.overlay) n.push({
                                            from: e.from + t,
                                            to: e.to + t
                                        });
                                    else n.push({
                                        from: t,
                                        to: t + e.length
                                    });
                                    return
                                }
                                if (s.overlay) {
                                    let e = n.length;
                                    if (r(s.tree, s.overlay[0].from + t), n.length > e) return
                                }
                            }
                            for (let n = 0; n < e.children.length; n++) {
                                let s = e.children[n];
                                s instanceof i.mp && r(s, e.positions[n] + t)
                            }
                        };
                    return r(d(e), 0), n
                }
                get allowsNesting() {
                    return !0
                }
            }

            function f(e, t, n) {
                let r = e.facet(w),
                    s = d(e).topNode;
                if (!r || r.allowsNesting)
                    for (let e = s; e; e = e.enter(t, n, i.vj.ExcludeBuffers)) e.type.isTop && (s = e);
                return s
            }
            u.setState = s.Py.define();
            class p extends u {
                constructor(e, t, n) {
                    super(e, t, [], n), this.parser = t
                }
                static define(e) {
                    var t;
                    let n = (t = e.languageData, s.r$.define({
                        combine: t ? e => e.concat(t) : void 0
                    }));
                    return new p(n, e.parser.configure({
                        props: [c.add(e => e.isTop ? n : void 0)]
                    }), e.name)
                }
                configure(e, t) {
                    return new p(this.data, this.parser.configure(e), t || this.name)
                }
                get allowsNesting() {
                    return this.parser.hasWrappers()
                }
            }

            function d(e) {
                let t = e.field(u.state, !1);
                return t ? t.tree : i.mp.empty
            }
            class O {
                constructor(e) {
                    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter()
                }
                get length() {
                    return this.doc.length
                }
                syncTo(e) {
                    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length
                }
                chunk(e) {
                    return this.syncTo(e), this.string
                }
                get lineChunks() {
                    return !0
                }
                read(e, t) {
                    let n = this.cursorPos - this.string.length;
                    return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n)
                }
            }
            let m = null;
            class g {
                constructor(e, t, n = [], r, i, s, o, a) {
                    this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = i, this.viewport = s, this.skipped = o, this.scheduleOn = a, this.parse = null, this.tempSkipped = []
                }
                static create(e, t, n) {
                    return new g(e, t, [], i.mp.empty, 0, n, [], null)
                }
                startParse() {
                    return this.parser.startParse(new O(this.state.doc), this.fragments)
                }
                work(e, t) {
                    return (null != t && t >= this.state.doc.length && (t = void 0), this.tree != i.mp.empty && this.isDone(null != t ? t : this.state.doc.length)) ? (this.takeTree(), !0) : this.withContext(() => {
                        var n;
                        if ("number" == typeof e) {
                            let t = Date.now() + e;
                            e = () => Date.now() > t
                        }
                        for (this.parse || (this.parse = this.startParse()), null != t && (null == this.parse.stoppedAt || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t);;) {
                            let r = this.parse.advance();
                            if (r) {
                                if (this.fragments = this.withoutTempSkipped(i.i9.addTree(r, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (n = this.parse.stoppedAt) && void 0 !== n ? n : this.state.doc.length, this.tree = r, this.parse = null, !(this.treeLen < (null != t ? t : this.state.doc.length))) return !0;
                                this.parse = this.startParse()
                            }
                            if (e()) return !1
                        }
                    })
                }
                takeTree() {
                    let e, t;
                    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
                        for (; !(t = this.parse.advance()););
                    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(i.i9.addTree(this.tree, this.fragments, !0)), this.parse = null)
                }
                withContext(e) {
                    let t = m;
                    m = this;
                    try {
                        return e()
                    } finally {
                        m = t
                    }
                }
                withoutTempSkipped(e) {
                    for (let t; t = this.tempSkipped.pop();) e = x(e, t.from, t.to);
                    return e
                }
                changes(e, t) {
                    let {
                        fragments: n,
                        tree: r,
                        treeLen: s,
                        viewport: o,
                        skipped: a
                    } = this;
                    if (this.takeTree(), !e.empty) {
                        let t = [];
                        if (e.iterChangedRanges((e, n, r, i) => t.push({
                                fromA: e,
                                toA: n,
                                fromB: r,
                                toB: i
                            })), n = i.i9.applyChanges(n, t), r = i.mp.empty, s = 0, o = {
                                from: e.mapPos(o.from, -1),
                                to: e.mapPos(o.to, 1)
                            }, this.skipped.length)
                            for (let t of (a = [], this.skipped)) {
                                let n = e.mapPos(t.from, 1),
                                    r = e.mapPos(t.to, -1);
                                n < r && a.push({
                                    from: n,
                                    to: r
                                })
                            }
                    }
                    return new g(this.parser, t, n, r, s, o, a, this.scheduleOn)
                }
                updateViewport(e) {
                    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
                    this.viewport = e;
                    let t = this.skipped.length;
                    for (let t = 0; t < this.skipped.length; t++) {
                        let {
                            from: n,
                            to: r
                        } = this.skipped[t];
                        n < e.to && r > e.from && (this.fragments = x(this.fragments, n, r), this.skipped.splice(t--, 1))
                    }
                    return !(this.skipped.length >= t) && (this.reset(), !0)
                }
                reset() {
                    this.parse && (this.takeTree(), this.parse = null)
                }
                skipUntilInView(e, t) {
                    this.skipped.push({
                        from: e,
                        to: t
                    })
                }
                static getSkippingParser(e) {
                    return new class extends i._b {
                        createParse(t, n, r) {
                            let s = r[0].from,
                                o = r[r.length - 1].to;
                            return {
                                parsedPos: s,
                                advance() {
                                    let t = m;
                                    if (t) {
                                        for (let e of r) t.tempSkipped.push(e);
                                        e && (t.scheduleOn = t.scheduleOn ? Promise.all([t.scheduleOn, e]) : e)
                                    }
                                    return this.parsedPos = o, new i.mp(i.Jq.none, [], [], o - s)
                                },
                                stoppedAt: null,
                                stopAt() {}
                            }
                        }
                    }
                }
                isDone(e) {
                    e = Math.min(e, this.state.doc.length);
                    let t = this.fragments;
                    return this.treeLen >= e && t.length && 0 == t[0].from && t[0].to >= e
                }
                static get() {
                    return m
                }
            }

            function x(e, t, n) {
                return i.i9.applyChanges(e, [{
                    fromA: t,
                    toA: n,
                    fromB: t,
                    toB: n
                }])
            }
            class S {
                constructor(e) {
                    this.context = e, this.tree = e.tree
                }
                apply(e) {
                    if (!e.docChanged && this.tree == this.context.tree) return this;
                    let t = this.context.changes(e.changes, e.state),
                        n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
                    return t.work(20, n) || t.takeTree(), new S(t)
                }
                static init(e) {
                    let t = Math.min(3e3, e.doc.length),
                        n = g.create(e.facet(w).parser, e, {
                            from: 0,
                            to: t
                        });
                    return n.work(20, t) || n.takeTree(), new S(n)
                }
            }
            u.state = s.QQ.define({
                create: S.init,
                update(e, t) {
                    for (let e of t.effects)
                        if (e.is(u.setState)) return e.value;
                    return t.startState.facet(w) != t.state.facet(w) ? S.init(t.state) : e.apply(t)
                }
            });
            let y = e => {
                let t = setTimeout(() => e(), 500);
                return () => clearTimeout(t)
            };
            "undefined" != typeof requestIdleCallback && (y = e => {
                let t = -1,
                    n = setTimeout(() => {
                        t = requestIdleCallback(e, {
                            timeout: 400
                        })
                    }, 100);
                return () => t < 0 ? clearTimeout(n) : cancelIdleCallback(t)
            });
            let b = "undefined" != typeof navigator && (null === (r = navigator.scheduling) || void 0 === r ? void 0 : r.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
                v = o.lg.fromClass(class {
                    constructor(e) {
                        this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
                    }
                    update(e) {
                        let t = this.view.state.field(u.state).context;
                        (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t)
                    }
                    scheduleWork() {
                        if (this.working) return;
                        let {
                            state: e
                        } = this.view, t = e.field(u.state);
                        t.tree == t.context.tree && t.context.isDone(e.doc.length) || (this.working = y(this.work))
                    }
                    work(e) {
                        this.working = null;
                        let t = Date.now();
                        if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
                        let {
                            state: n,
                            viewport: {
                                to: r
                            }
                        } = this.view, i = n.field(u.state);
                        if (i.tree == i.context.tree && i.context.isDone(r + 1e5)) return;
                        let s = Date.now() + Math.min(this.chunkBudget, 100, e && !b ? Math.max(25, e.timeRemaining() - 5) : 1e9),
                            o = i.context.treeLen < r && n.doc.length > r + 1e3,
                            a = i.context.work(() => b && b() || Date.now() > s, r + (o ? 0 : 1e5));
                        this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (i.context.takeTree(), this.view.dispatch({
                            effects: u.setState.of(new S(i.context))
                        })), this.chunkBudget > 0 && !(a && !o) && this.scheduleWork(), this.checkAsyncSchedule(i.context)
                    }
                    checkAsyncSchedule(e) {
                        e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch(e => (0, o.OO)(this.view.state, e)).then(() => this.workScheduled--), e.scheduleOn = null)
                    }
                    destroy() {
                        this.working && this.working()
                    }
                    isWorking() {
                        return !!(this.working || this.workScheduled > 0)
                    }
                }, {
                    eventHandlers: {
                        focus() {
                            this.scheduleWork()
                        }
                    }
                }),
                w = s.r$.define({
                    combine: e => e.length ? e[0] : null,
                    enables: e => [u.state, v, o.tk.contentAttributes.compute([e], t => {
                        let n = t.facet(e);
                        return n && n.name ? {
                            "data-language": n.name
                        } : {}
                    })]
                });
            class T {
                constructor(e, t = []) {
                    this.language = e, this.support = t, this.extension = [e, t]
                }
            }
            let k = s.r$.define(),
                P = s.r$.define({
                    combine: e => {
                        if (!e.length) return "  ";
                        let t = e[0];
                        if (!t || /\S/.test(t) || Array.from(t).some(e => e != t[0])) throw Error("Invalid indent unit: " + JSON.stringify(e[0]));
                        return t
                    }
                });

            function Q(e) {
                let t = e.facet(P);
                return 9 == t.charCodeAt(0) ? e.tabSize * t.length : t.length
            }

            function q(e, t) {
                let n = "",
                    r = e.tabSize,
                    i = e.facet(P)[0];
                if ("	" == i) {
                    for (; t >= r;) n += "	", t -= r;
                    i = " "
                }
                for (let e = 0; e < t; e++) n += i;
                return n
            }

            function $(e, t) {
                var n;
                for (let n of (e instanceof s.yy && (e = new R(e)), e.state.facet(k))) {
                    let r = n(e, t);
                    if (void 0 !== r) return r
                }
                let r = d(e.state);
                return r ? (n = e, C(r.resolveInner(t).enterUnfinishedNodesBefore(t), t, n)) : null
            }
            class R {
                constructor(e, t = {}) {
                    this.state = e, this.options = t, this.unit = Q(e)
                }
                lineAt(e, t = 1) {
                    let n = this.state.doc.lineAt(e),
                        {
                            simulateBreak: r,
                            simulateDoubleBreak: i
                        } = this.options;
                    return null != r && r >= n.from && r <= n.to ? i && r == e ? {
                        text: "",
                        from: e
                    } : (t < 0 ? r < e : r <= e) ? {
                        text: n.text.slice(r - n.from),
                        from: r
                    } : {
                        text: n.text.slice(0, r - n.from),
                        from: n.from
                    } : n
                }
                textAfterPos(e, t = 1) {
                    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
                    let {
                        text: n,
                        from: r
                    } = this.lineAt(e, t);
                    return n.slice(e - r, Math.min(n.length, e + 100 - r))
                }
                column(e, t = 1) {
                    let {
                        text: n,
                        from: r
                    } = this.lineAt(e, t), i = this.countColumn(n, e - r), s = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
                    return s > -1 && (i += s - this.countColumn(n, n.search(/\S|$/))), i
                }
                countColumn(e, t = e.length) {
                    return (0, s.IS)(e, this.state.tabSize, t)
                }
                lineIndent(e, t = 1) {
                    let {
                        text: n,
                        from: r
                    } = this.lineAt(e, t), i = this.options.overrideIndentation;
                    if (i) {
                        let e = i(r);
                        if (e > -1) return e
                    }
                    return this.countColumn(n, n.search(/\S|$/))
                }
                get simulatedBreak() {
                    return this.options.simulateBreak || null
                }
            }
            let W = new i.md;

            function C(e, t, n) {
                for (; e; e = e.parent) {
                    let r = function (e) {
                        let t = e.type.prop(W);
                        if (t) return t;
                        let n = e.firstChild,
                            r;
                        if (n && (r = n.type.prop(i.md.closedBy))) {
                            let t = e.lastChild,
                                n = t && r.indexOf(t.name) > -1;
                            return e => V(e, !0, 1, void 0, n && !(e.pos == e.options.simulateBreak && e.options.simulateDoubleBreak) ? t.from : void 0)
                        }
                        return null == e.parent ? X : null
                    }(e);
                    if (r) return r(E.create(n, t, e))
                }
                return null
            }

            function X() {
                return 0
            }
            class E extends R {
                constructor(e, t, n) {
                    super(e.state, e.options), this.base = e, this.pos = t, this.node = n
                }
                static create(e, t, n) {
                    return new E(e, t, n)
                }
                get textAfter() {
                    return this.textAfterPos(this.pos)
                }
                get baseIndent() {
                    return this.baseIndentFor(this.node)
                }
                baseIndentFor(e) {
                    let t = this.state.doc.lineAt(e.from);
                    for (;;) {
                        let n = e.resolve(t.from);
                        for (; n.parent && n.parent.from == n.from;) n = n.parent;
                        if (function (e, t) {
                                for (let n = t; n; n = n.parent)
                                    if (e == n) return !0;
                                return !1
                            }(n, e)) break;
                        t = this.state.doc.lineAt(n.from)
                    }
                    return this.lineIndent(t.from)
                }
                continue () {
                    let e = this.node.parent;
                    return e ? C(e, this.pos, this.base) : 0
                }
            }

            function A({
                closing: e,
                align: t = !0,
                units: n = 1
            }) {
                return r => V(r, t, n, e)
            }

            function V(e, t, n, r, i) {
                let s = e.textAfter,
                    o = s.match(/^\s*/)[0].length,
                    a = r && s.slice(o, o + r.length) == r || i == e.pos + o,
                    l = t ? function (e) {
                        let t = e.node,
                            n = t.childAfter(t.from),
                            r = t.lastChild;
                        if (!n) return null;
                        let i = e.options.simulateBreak,
                            s = e.state.doc.lineAt(n.from),
                            o = null == i || i <= s.from ? s.to : Math.min(s.to, i);
                        for (let e = n.to;;) {
                            let i = t.childAfter(e);
                            if (!i || i == r) return null;
                            if (!i.type.isSkipped) return i.from < o ? n : null;
                            e = i.to
                        }
                    }(e) : null;
                return l ? a ? e.column(l.from) : e.column(l.to) : e.baseIndent + (a ? 0 : e.unit * n)
            }

            function Y() {
                return s.yy.transactionFilter.of(e => {
                    if (!e.docChanged || !e.isUserEvent("input.type") && !e.isUserEvent("input.complete")) return e;
                    let t = e.startState.languageDataAt("indentOnInput", e.startState.selection.main.head);
                    if (!t.length) return e;
                    let n = e.newDoc,
                        {
                            head: r
                        } = e.newSelection.main,
                        i = n.lineAt(r);
                    if (r > i.from + 200) return e;
                    let s = n.sliceString(i.from, r);
                    if (!t.some(e => e.test(s))) return e;
                    let {
                        state: o
                    } = e, a = -1, l = [];
                    for (let {
                            head: e
                        } of o.selection.ranges) {
                        let t = o.doc.lineAt(e);
                        if (t.from == a) continue;
                        a = t.from;
                        let n = $(o, t.from);
                        if (null == n) continue;
                        let r = /^\s*/.exec(t.text)[0],
                            i = q(o, n);
                        r != i && l.push({
                            from: t.from,
                            to: t.from + r.length,
                            insert: i
                        })
                    }
                    return l.length ? [e, {
                        changes: l,
                        sequential: !0
                    }] : e
                })
            }
            let D = s.r$.define(),
                j = new i.md;

            function M(e) {
                let t = e.firstChild,
                    n = e.lastChild;
                return t && t.to < n.from ? {
                    from: t.to,
                    to: n.type.isError ? e.to : n.from
                } : null
            }

            function _(e, t, n) {
                for (let r of e.facet(D)) {
                    let i = r(e, t, n);
                    if (i) return i
                }
                return function (e, t, n) {
                    let r = d(e);
                    if (r.length < n) return null;
                    let i = r.resolveInner(n, 1),
                        s = null;
                    for (let o = i; o; o = o.parent) {
                        if (o.to <= n || o.from > n) continue;
                        if (s && o.from < t) break;
                        let i = o.type.prop(j);
                        if (i && (o.to < r.length - 50 || r.length == e.doc.length || ! function (e) {
                                let t = e.lastChild;
                                return t && t.to == e.to && t.type.isError
                            }(o))) {
                            let r = i(o, e);
                            r && r.from <= n && r.from >= t && r.to > n && (s = r)
                        }
                    }
                    return s
                }(e, t, n)
            }

            function I(e, t) {
                let n = t.mapPos(e.from, 1),
                    r = t.mapPos(e.to, -1);
                return n >= r ? void 0 : {
                    from: n,
                    to: r
                }
            }
            let Z = s.Py.define({
                    map: I
                }),
                G = s.Py.define({
                    map: I
                });

            function N(e) {
                let t = [];
                for (let {
                        head: n
                    } of e.state.selection.ranges) t.some(e => e.from <= n && e.to >= n) || t.push(e.lineBlockAt(n));
                return t
            }
            let U = s.QQ.define({
                create: () => o.p.none,
                update(e, t) {
                    for (let n of (e = e.map(t.changes), t.effects)) n.is(Z) && ! function (e, t, n) {
                        let r = !1;
                        return e.between(t, t, (e, i) => {
                            e == t && i == n && (r = !0)
                        }), r
                    }(e, n.value.from, n.value.to) ? e = e.update({
                        add: [ee.range(n.value.from, n.value.to)]
                    }) : n.is(G) && (e = e.update({
                        filter: (e, t) => n.value.from != e || n.value.to != t,
                        filterFrom: n.value.from,
                        filterTo: n.value.to
                    }));
                    if (t.selection) {
                        let n = !1,
                            {
                                head: r
                            } = t.selection.main;
                        e.between(r, r, (e, t) => {
                            e < r && t > r && (n = !0)
                        }), n && (e = e.update({
                            filterFrom: r,
                            filterTo: r,
                            filter: (e, t) => t <= r || e >= r
                        }))
                    }
                    return e
                },
                provide: e => o.tk.decorations.from(e),
                toJSON(e, t) {
                    let n = [];
                    return e.between(0, t.doc.length, (e, t) => {
                        n.push(e, t)
                    }), n
                },
                fromJSON(e) {
                    if (!Array.isArray(e) || e.length % 2) throw RangeError("Invalid JSON for fold state");
                    let t = [];
                    for (let n = 0; n < e.length;) {
                        let r = e[n++],
                            i = e[n++];
                        if ("number" != typeof r || "number" != typeof i) throw RangeError("Invalid JSON for fold state");
                        t.push(ee.range(r, i))
                    }
                    return o.p.set(t, !0)
                }
            });

            function z(e, t, n) {
                var r;
                let i = null;
                return null === (r = e.field(U, !1)) || void 0 === r || r.between(t, n, (e, t) => {
                    (!i || i.from > e) && (i = {
                        from: e,
                        to: t
                    })
                }), i
            }

            function B(e, t) {
                return e.field(U, !1) ? t : t.concat(s.Py.appendConfig.of(K()))
            }

            function L(e, t, n = !0) {
                let r = e.state.doc.lineAt(t.from).number,
                    i = e.state.doc.lineAt(t.to).number;
                return o.tk.announce.of(`${e.state.phrase(n?"Folded lines":"Unfolded lines")} ${r} ${e.state.phrase("to")} ${i}.`)
            }
            let F = [{
                    key: "Ctrl-Shift-[",
                    mac: "Cmd-Alt-[",
                    run: e => {
                        for (let t of N(e)) {
                            let n = _(e.state, t.from, t.to);
                            if (n) return e.dispatch({
                                effects: B(e.state, [Z.of(n), L(e, n)])
                            }), !0
                        }
                        return !1
                    }
                }, {
                    key: "Ctrl-Shift-]",
                    mac: "Cmd-Alt-]",
                    run: e => {
                        if (!e.state.field(U, !1)) return !1;
                        let t = [];
                        for (let n of N(e)) {
                            let r = z(e.state, n.from, n.to);
                            r && t.push(G.of(r), L(e, r, !1))
                        }
                        return t.length && e.dispatch({
                            effects: t
                        }), t.length > 0
                    }
                }, {
                    key: "Ctrl-Alt-[",
                    run: e => {
                        let {
                            state: t
                        } = e, n = [];
                        for (let r = 0; r < t.doc.length;) {
                            let i = e.lineBlockAt(r),
                                s = _(t, i.from, i.to);
                            s && n.push(Z.of(s)), r = (s ? e.lineBlockAt(s.to) : i).to + 1
                        }
                        return n.length && e.dispatch({
                            effects: B(e.state, n)
                        }), !!n.length
                    }
                }, {
                    key: "Ctrl-Alt-]",
                    run: e => {
                        let t = e.state.field(U, !1);
                        if (!t || !t.size) return !1;
                        let n = [];
                        return t.between(0, e.state.doc.length, (e, t) => {
                            n.push(G.of({
                                from: e,
                                to: t
                            }))
                        }), e.dispatch({
                            effects: n
                        }), !0
                    }
                }],
                J = {
                    placeholderDOM: null,
                    placeholderText: "…"
                },
                H = s.r$.define({
                    combine: e => (0, s.BO)(e, J)
                });

            function K(e) {
                let t = [U, ei];
                return e && t.push(H.of(e)), t
            }
            let ee = o.p.replace({
                    widget: new class extends o.l9 {
                        toDOM(e) {
                            let {
                                state: t
                            } = e, n = t.facet(H), r = t => {
                                let n = e.lineBlockAt(e.posAtDOM(t.target)),
                                    r = z(e.state, n.from, n.to);
                                r && e.dispatch({
                                    effects: G.of(r)
                                }), t.preventDefault()
                            };
                            if (n.placeholderDOM) return n.placeholderDOM(e, r);
                            let i = document.createElement("span");
                            return i.textContent = n.placeholderText, i.setAttribute("aria-label", t.phrase("folded code")), i.title = t.phrase("unfold"), i.className = "cm-foldPlaceholder", i.onclick = r, i
                        }
                    }
                }),
                et = {
                    openText: "⌄",
                    closedText: "›",
                    markerDOM: null,
                    domEventHandlers: {},
                    foldingChanged: () => !1
                };
            class en extends o.SJ {
                constructor(e, t) {
                    super(), this.config = e, this.open = t
                }
                eq(e) {
                    return this.config == e.config && this.open == e.open
                }
                toDOM(e) {
                    if (this.config.markerDOM) return this.config.markerDOM(this.open);
                    let t = document.createElement("span");
                    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t
                }
            }

            function er(e = {}) {
                let t = Object.assign(Object.assign({}, et), e),
                    n = new en(t, !0),
                    r = new en(t, !1),
                    i = o.lg.fromClass(class {
                        constructor(e) {
                            this.from = e.viewport.from, this.markers = this.buildMarkers(e)
                        }
                        update(e) {
                            (e.docChanged || e.viewportChanged || e.startState.facet(w) != e.state.facet(w) || e.startState.field(U, !1) != e.state.field(U, !1) || d(e.startState) != d(e.state) || t.foldingChanged(e)) && (this.markers = this.buildMarkers(e.view))
                        }
                        buildMarkers(e) {
                            let t = new s.f_;
                            for (let i of e.viewportLineBlocks) {
                                let s = z(e.state, i.from, i.to) ? r : _(e.state, i.from, i.to) ? n : null;
                                s && t.add(i.from, i.from, s)
                            }
                            return t.finish()
                        }
                    }),
                    {
                        domEventHandlers: a
                    } = t;
                return [i, (0, o.v5)({
                    class: "cm-foldGutter",
                    markers(e) {
                        var t;
                        return (null === (t = e.plugin(i)) || void 0 === t ? void 0 : t.markers) || s.Xs.empty
                    },
                    initialSpacer: () => new en(t, !1),
                    domEventHandlers: Object.assign(Object.assign({}, a), {
                        click: (e, t, n) => {
                            if (a.click && a.click(e, t, n)) return !0;
                            let r = z(e.state, t.from, t.to);
                            if (r) return e.dispatch({
                                effects: G.of(r)
                            }), !0;
                            let i = _(e.state, t.from, t.to);
                            return !!i && (e.dispatch({
                                effects: Z.of(i)
                            }), !0)
                        }
                    })
                }), K()]
            }
            let ei = o.tk.baseTheme({
                ".cm-foldPlaceholder": {
                    backgroundColor: "#eee",
                    border: "1px solid #ddd",
                    color: "#888",
                    borderRadius: ".2em",
                    margin: "0 1px",
                    padding: "0 1px",
                    cursor: "pointer"
                },
                ".cm-foldGutter span": {
                    padding: "0 1px",
                    cursor: "pointer"
                }
            });
            class es {
                constructor(e, t) {
                    let n;

                    function r(e) {
                        let t = l.V.newName();
                        return (n || (n = Object.create(null)))["." + t] = e, t
                    }
                    this.specs = e;
                    let i = "string" == typeof t.all ? t.all : t.all ? r(t.all) : void 0,
                        s = t.scope;
                    this.scope = s instanceof u ? e => e.prop(c) == s.data : s ? e => e == s : void 0, this.style = (0, a.QR)(e.map(e => ({
                        tag: e.tag,
                        class: e.class || r(Object.assign({}, e, {
                            tag: null
                        }))
                    })), {
                        all: i
                    }).style, this.module = n ? new l.V(n) : null, this.themeType = t.themeType
                }
                static define(e, t) {
                    return new es(e, t || {})
                }
            }
            let eo = s.r$.define(),
                ea = s.r$.define({
                    combine: e => e.length ? [e[0]] : null
                });

            function el(e) {
                let t = e.facet(eo);
                return t.length ? t : e.facet(ea)
            }

            function ec(e, t) {
                let n = [eh],
                    r;
                return e instanceof es && (e.module && n.push(o.tk.styleModule.of(e.module)), r = e.themeType), (null == t ? void 0 : t.fallback) ? n.push(ea.of(e)) : r ? n.push(eo.computeN([o.tk.darkTheme], t => t.facet(o.tk.darkTheme) == ("dark" == r) ? [e] : [])) : n.push(eo.of(e)), n
            }
            let eh = s.Wl.high(o.lg.fromClass(class {
                    constructor(e) {
                        this.markCache = Object.create(null), this.tree = d(e.state), this.decorations = this.buildDeco(e, el(e.state))
                    }
                    update(e) {
                        let t = d(e.state),
                            n = el(e.state),
                            r = n != el(e.startState);
                        t.length < e.view.viewport.to && !r && t.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n))
                    }
                    buildDeco(e, t) {
                        if (!t || !this.tree.length) return o.p.none;
                        let n = new s.f_;
                        for (let {
                                from: r,
                                to: i
                            } of e.visibleRanges)(0, a.bW)(this.tree, t, (e, t, r) => {
                            n.add(e, t, this.markCache[r] || (this.markCache[r] = o.p.mark({
                                class: r
                            })))
                        }, r, i);
                        return n.finish()
                    }
                }, {
                    decorations: e => e.decorations
                })),
                eu = es.define([{
                    tag: a.pJ.meta,
                    color: "#404740"
                }, {
                    tag: a.pJ.link,
                    textDecoration: "underline"
                }, {
                    tag: a.pJ.heading,
                    textDecoration: "underline",
                    fontWeight: "bold"
                }, {
                    tag: a.pJ.emphasis,
                    fontStyle: "italic"
                }, {
                    tag: a.pJ.strong,
                    fontWeight: "bold"
                }, {
                    tag: a.pJ.strikethrough,
                    textDecoration: "line-through"
                }, {
                    tag: a.pJ.keyword,
                    color: "#708"
                }, {
                    tag: [a.pJ.atom, a.pJ.bool, a.pJ.url, a.pJ.contentSeparator, a.pJ.labelName],
                    color: "#219"
                }, {
                    tag: [a.pJ.literal, a.pJ.inserted],
                    color: "#164"
                }, {
                    tag: [a.pJ.string, a.pJ.deleted],
                    color: "#a11"
                }, {
                    tag: [a.pJ.regexp, a.pJ.escape, a.pJ.special(a.pJ.string)],
                    color: "#e40"
                }, {
                    tag: a.pJ.definition(a.pJ.variableName),
                    color: "#00f"
                }, {
                    tag: a.pJ.local(a.pJ.variableName),
                    color: "#30a"
                }, {
                    tag: [a.pJ.typeName, a.pJ.namespace],
                    color: "#085"
                }, {
                    tag: a.pJ.className,
                    color: "#167"
                }, {
                    tag: [a.pJ.special(a.pJ.variableName), a.pJ.macroName],
                    color: "#256"
                }, {
                    tag: a.pJ.definition(a.pJ.propertyName),
                    color: "#00c"
                }, {
                    tag: a.pJ.comment,
                    color: "#940"
                }, {
                    tag: a.pJ.invalid,
                    color: "#f00"
                }]),
                ef = o.tk.baseTheme({
                    "&.cm-focused .cm-matchingBracket": {
                        backgroundColor: "#328c8252"
                    },
                    "&.cm-focused .cm-nonmatchingBracket": {
                        backgroundColor: "#bb555544"
                    }
                }),
                ep = "()[]{}",
                ed = s.r$.define({
                    combine: e => (0, s.BO)(e, {
                        afterCursor: !0,
                        brackets: ep,
                        maxScanDistance: 1e4,
                        renderMatch: eg
                    })
                }),
                eO = o.p.mark({
                    class: "cm-matchingBracket"
                }),
                em = o.p.mark({
                    class: "cm-nonmatchingBracket"
                });

            function eg(e) {
                let t = [],
                    n = e.matched ? eO : em;
                return t.push(n.range(e.start.from, e.start.to)), e.end && t.push(n.range(e.end.from, e.end.to)), t
            }
            let ex = s.QQ.define({
                    create: () => o.p.none,
                    update(e, t) {
                        if (!t.docChanged && !t.selection) return e;
                        let n = [],
                            r = t.state.facet(ed);
                        for (let e of t.state.selection.ranges) {
                            if (!e.empty) continue;
                            let i = eT(t.state, e.head, -1, r) || e.head > 0 && eT(t.state, e.head - 1, 1, r) || r.afterCursor && (eT(t.state, e.head, 1, r) || e.head < t.state.doc.length && eT(t.state, e.head + 1, -1, r));
                            i && (n = n.concat(r.renderMatch(i, t.state)))
                        }
                        return o.p.set(n, !0)
                    },
                    provide: e => o.tk.decorations.from(e)
                }),
                eS = [ex, ef];

            function ey(e = {}) {
                return [ed.of(e), eS]
            }
            let eb = new i.md;

            function ev(e, t, n) {
                let r = e.prop(t < 0 ? i.md.openedBy : i.md.closedBy);
                if (r) return r;
                if (1 == e.name.length) {
                    let r = n.indexOf(e.name);
                    if (r > -1 && r % 2 == (t < 0 ? 1 : 0)) return [n[r + t]]
                }
                return null
            }

            function ew(e) {
                let t = e.type.prop(eb);
                return t ? t(e.node) : e
            }

            function eT(e, t, n, r = {}) {
                let i = r.maxScanDistance || 1e4,
                    s = r.brackets || ep,
                    o = d(e),
                    a = o.resolveInner(t, n);
                for (let e = a; e; e = e.parent) {
                    let r = ev(e.type, n, s);
                    if (r && e.from < e.to) {
                        let i = ew(e);
                        if (i && (n > 0 ? t >= i.from && t < i.to : t > i.from && t <= i.to)) return function (e, t, n, r, i, s, o) {
                            let a = r.parent,
                                l = {
                                    from: i.from,
                                    to: i.to
                                },
                                c = 0,
                                h = null == a ? void 0 : a.cursor();
                            if (h && (n < 0 ? h.childBefore(r.from) : h.childAfter(r.to)))
                                do
                                    if (n < 0 ? h.to <= r.from : h.from >= r.to) {
                                        if (0 == c && s.indexOf(h.type.name) > -1 && h.from < h.to) {
                                            let e = ew(h);
                                            return {
                                                start: l,
                                                end: e ? {
                                                    from: e.from,
                                                    to: e.to
                                                } : void 0,
                                                matched: !0
                                            }
                                        }
                                        if (ev(h.type, n, o)) c++;
                                        else if (ev(h.type, -n, o)) {
                                            if (0 == c) {
                                                let e = ew(h);
                                                return {
                                                    start: l,
                                                    end: e && e.from < e.to ? {
                                                        from: e.from,
                                                        to: e.to
                                                    } : void 0,
                                                    matched: !1
                                                }
                                            }
                                            c--
                                        }
                                    } while (n < 0 ? h.prevSibling() : h.nextSibling());
                            return {
                                start: l,
                                matched: !1
                            }
                        }(0, 0, n, e, i, r, s)
                    }
                }
                return function (e, t, n, r, i, s, o) {
                    let a = n < 0 ? e.sliceDoc(t - 1, t) : e.sliceDoc(t, t + 1),
                        l = o.indexOf(a);
                    if (l < 0 || l % 2 == 0 != n > 0) return null;
                    let c = {
                            from: n < 0 ? t - 1 : t,
                            to: n > 0 ? t + 1 : t
                        },
                        h = e.doc.iterRange(t, n > 0 ? e.doc.length : 0),
                        u = 0;
                    for (let e = 0; !h.next().done && e <= s;) {
                        let s = h.value;
                        n < 0 && (e += s.length);
                        let a = t + e * n;
                        for (let e = n > 0 ? 0 : s.length - 1, t = n > 0 ? s.length : -1; e != t; e += n) {
                            let t = o.indexOf(s[e]);
                            if (!(t < 0) && r.resolveInner(a + e, 1).type == i) {
                                if (t % 2 == 0 == n > 0) u++;
                                else {
                                    if (1 == u) return {
                                        start: c,
                                        end: {
                                            from: a + e,
                                            to: a + e + 1
                                        },
                                        matched: t >> 1 == l >> 1
                                    };
                                    u--
                                }
                            }
                        }
                        n > 0 && (e += s.length)
                    }
                    return h.done ? {
                        start: c,
                        matched: !1
                    } : null
                }(e, t, n, o, a.type, i, s)
            }
            let ek = Object.create(null),
                eP = [i.Jq.none],
                eQ = [],
                eq = Object.create(null);
            for (let [e, t] of [
                    ["variable", "variableName"],
                    ["variable-2", "variableName.special"],
                    ["string-2", "string.special"],
                    ["def", "variableName.definition"],
                    ["tag", "tagName"],
                    ["attribute", "attributeName"],
                    ["type", "typeName"],
                    ["builtin", "variableName.standard"],
                    ["qualifier", "modifier"],
                    ["error", "invalid"],
                    ["header", "heading"],
                    ["property", "propertyName"]
                ]) eq[e] = function (e, t) {
                let n = null;
                for (let r of t.split(".")) {
                    let t = e[r] || a.pJ[r];
                    t ? "function" == typeof t ? n ? n = t(n) : e$(r, `Modifier ${r} used at start of tag`) : n ? e$(r, `Tag ${r} used as modifier`) : n = t : e$(r, `Unknown highlighting tag ${r}`)
                }
                if (!n) return 0;
                let r = t.replace(/ /g, "_"),
                    s = i.Jq.define({
                        id: eP.length,
                        name: r,
                        props: [(0, a.Gv)({
                            [r]: n
                        })]
                    });
                return eP.push(s), s.id
            }(ek, t);

            function e$(e, t) {
                eQ.indexOf(e) > -1 || (eQ.push(e), console.warn(t))
            }
        },
        4999: function (e, t, n) {
            let r;
            n.d(t, {
                BO: function () {
                    return eS
                },
                D0: function () {
                    return em
                },
                Gz: function () {
                    return eY
                },
                IS: function () {
                    return eV
                },
                Py: function () {
                    return eh
                },
                QQ: function () {
                    return G
                },
                Wl: function () {
                    return z
                },
                Xs: function () {
                    return eT
                },
                YW: function () {
                    return eu
                },
                as: function () {
                    return Q
                },
                bg: function () {
                    return y
                },
                cp: function () {
                    return d
                },
                f_: function () {
                    return ek
                },
                gc: function () {
                    return k
                },
                gm: function () {
                    return S
                },
                jT: function () {
                    return A
                },
                n0: function () {
                    return P
                },
                nZ: function () {
                    return b
                },
                q6: function () {
                    return ea
                },
                r$: function () {
                    return D
                },
                uU: function () {
                    return ey
                },
                xv: function () {
                    return i
                },
                yy: function () {
                    return ex
                }
            });
            class i {
                lineAt(e) {
                    if (e < 0 || e > this.length) throw RangeError(`Invalid position ${e} in document of length ${this.length}`);
                    return this.lineInner(e, !1, 1, 0)
                }
                line(e) {
                    if (e < 1 || e > this.lines) throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
                    return this.lineInner(e, !0, 1, 0)
                }
                replace(e, t, n) {
                    let r = [];
                    return this.decompose(0, e, r, 2), n.length && n.decompose(0, n.length, r, 3), this.decompose(t, this.length, r, 1), o.from(r, this.length - (t - e) + n.length)
                }
                append(e) {
                    return this.replace(this.length, this.length, e)
                }
                slice(e, t = this.length) {
                    let n = [];
                    return this.decompose(e, t, n, 0), o.from(n, t - e)
                }
                eq(e) {
                    if (e == this) return !0;
                    if (e.length != this.length || e.lines != this.lines) return !1;
                    let t = this.scanIdentical(e, 1),
                        n = this.length - this.scanIdentical(e, -1),
                        r = new l(this),
                        i = new l(e);
                    for (let e = t, s = t;;) {
                        if (r.next(e), i.next(e), e = 0, r.lineBreak != i.lineBreak || r.done != i.done || r.value != i.value) return !1;
                        if (s += r.value.length, r.done || s >= n) return !0
                    }
                }
                iter(e = 1) {
                    return new l(this, e)
                }
                iterRange(e, t = this.length) {
                    return new c(this, e, t)
                }
                iterLines(e, t) {
                    let n;
                    if (null == e) n = this.iter();
                    else {
                        null == t && (t = this.lines + 1);
                        let r = this.line(e).from;
                        n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to))
                    }
                    return new h(n)
                }
                toString() {
                    return this.sliceString(0)
                }
                toJSON() {
                    let e = [];
                    return this.flatten(e), e
                }
                constructor() {}
                static of (e) {
                    if (0 == e.length) throw RangeError("A document must have at least one line");
                    return 1 != e.length || e[0] ? e.length <= 32 ? new s(e) : o.from(s.split(e, [])) : i.empty
                }
            }
            class s extends i {
                constructor(e, t = function (e) {
                    let t = -1;
                    for (let n of e) t += n.length + 1;
                    return t
                }(e)) {
                    super(), this.text = e, this.length = t
                }
                get lines() {
                    return this.text.length
                }
                get children() {
                    return null
                }
                lineInner(e, t, n, r) {
                    for (let i = 0;; i++) {
                        let s = this.text[i],
                            o = r + s.length;
                        if ((t ? n : o) >= e) return new u(r, o, n, s);
                        r = o + 1, n++
                    }
                }
                decompose(e, t, n, r) {
                    let i = e <= 0 && t >= this.length ? this : new s(a(this.text, [""], e, t), Math.min(t, this.length) - Math.max(0, e));
                    if (1 & r) {
                        let e = n.pop(),
                            t = a(i.text, e.text.slice(), 0, i.length);
                        if (t.length <= 32) n.push(new s(t, e.length + i.length));
                        else {
                            let e = t.length >> 1;
                            n.push(new s(t.slice(0, e)), new s(t.slice(e)))
                        }
                    } else n.push(i)
                }
                replace(e, t, n) {
                    if (!(n instanceof s)) return super.replace(e, t, n);
                    let r = a(this.text, a(n.text, a(this.text, [""], 0, e)), t),
                        i = this.length + n.length - (t - e);
                    return r.length <= 32 ? new s(r, i) : o.from(s.split(r, []), i)
                }
                sliceString(e, t = this.length, n = "\n") {
                    let r = "";
                    for (let i = 0, s = 0; i <= t && s < this.text.length; s++) {
                        let o = this.text[s],
                            a = i + o.length;
                        i > e && s && (r += n), e < a && t > i && (r += o.slice(Math.max(0, e - i), t - i)), i = a + 1
                    }
                    return r
                }
                flatten(e) {
                    for (let t of this.text) e.push(t)
                }
                scanIdentical() {
                    return 0
                }
                static split(e, t) {
                    let n = [],
                        r = -1;
                    for (let i of e) n.push(i), r += i.length + 1, 32 == n.length && (t.push(new s(n, r)), n = [], r = -1);
                    return r > -1 && t.push(new s(n, r)), t
                }
            }
            class o extends i {
                constructor(e, t) {
                    for (let n of (super(), this.children = e, this.length = t, this.lines = 0, e)) this.lines += n.lines
                }
                lineInner(e, t, n, r) {
                    for (let i = 0;; i++) {
                        let s = this.children[i],
                            o = r + s.length,
                            a = n + s.lines - 1;
                        if ((t ? a : o) >= e) return s.lineInner(e, t, n, r);
                        r = o + 1, n = a + 1
                    }
                }
                decompose(e, t, n, r) {
                    for (let i = 0, s = 0; s <= t && i < this.children.length; i++) {
                        let o = this.children[i],
                            a = s + o.length;
                        if (e <= a && t >= s) {
                            let i = r & ((s <= e ? 1 : 0) | (a >= t ? 2 : 0));
                            s >= e && a <= t && !i ? n.push(o) : o.decompose(e - s, t - s, n, i)
                        }
                        s = a + 1
                    }
                }
                replace(e, t, n) {
                    if (n.lines < this.lines)
                        for (let r = 0, i = 0; r < this.children.length; r++) {
                            let s = this.children[r],
                                a = i + s.length;
                            if (e >= i && t <= a) {
                                let l = s.replace(e - i, t - i, n),
                                    c = this.lines - s.lines + l.lines;
                                if (l.lines < c >> 4 && l.lines > c >> 6) {
                                    let i = this.children.slice();
                                    return i[r] = l, new o(i, this.length - (t - e) + n.length)
                                }
                                return super.replace(i, a, l)
                            }
                            i = a + 1
                        }
                    return super.replace(e, t, n)
                }
                sliceString(e, t = this.length, n = "\n") {
                    let r = "";
                    for (let i = 0, s = 0; i < this.children.length && s <= t; i++) {
                        let o = this.children[i],
                            a = s + o.length;
                        s > e && i && (r += n), e < a && t > s && (r += o.sliceString(e - s, t - s, n)), s = a + 1
                    }
                    return r
                }
                flatten(e) {
                    for (let t of this.children) t.flatten(e)
                }
                scanIdentical(e, t) {
                    if (!(e instanceof o)) return 0;
                    let n = 0,
                        [r, i, s, a] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
                    for (;; r += t, i += t) {
                        if (r == s || i == a) return n;
                        let o = this.children[r],
                            l = e.children[i];
                        if (o != l) return n + o.scanIdentical(l, t);
                        n += o.length + 1
                    }
                }
                static from(e, t = e.reduce((e, t) => e + t.length + 1, -1)) {
                    let n = 0;
                    for (let t of e) n += t.lines;
                    if (n < 32) {
                        let n = [];
                        for (let t of e) t.flatten(n);
                        return new s(n, t)
                    }
                    let r = Math.max(32, n >> 5),
                        i = r << 1,
                        a = r >> 1,
                        l = [],
                        c = 0,
                        h = -1,
                        u = [];

                    function f() {
                        0 != c && (l.push(1 == u.length ? u[0] : o.from(u, h)), h = -1, c = u.length = 0)
                    }
                    for (let t of e) ! function e(t) {
                        let n;
                        if (t.lines > i && t instanceof o)
                            for (let n of t.children) e(n);
                        else t.lines > a && (c > a || !c) ? (f(), l.push(t)) : t instanceof s && c && (n = u[u.length - 1]) instanceof s && t.lines + n.lines <= 32 ? (c += t.lines, h += t.length + 1, u[u.length - 1] = new s(n.text.concat(t.text), n.length + 1 + t.length)) : (c + t.lines > r && f(), c += t.lines, h += t.length + 1, u.push(t))
                    }(t);
                    return f(), 1 == l.length ? l[0] : new o(l, t)
                }
            }

            function a(e, t, n = 0, r = 1e9) {
                for (let i = 0, s = 0, o = !0; s < e.length && i <= r; s++) {
                    let a = e[s],
                        l = i + a.length;
                    l >= n && (l > r && (a = a.slice(0, r - i)), i < n && (a = a.slice(n - i)), o ? (t[t.length - 1] += a, o = !1) : t.push(a)), i = l + 1
                }
                return t
            }
            i.empty = new s([""], 0);
            class l {
                constructor(e, t = 1) {
                    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof s ? e.text.length : e.children.length) << 1]
                }
                nextInner(e, t) {
                    for (this.done = this.lineBreak = !1;;) {
                        let n = this.nodes.length - 1,
                            r = this.nodes[n],
                            i = this.offsets[n],
                            o = i >> 1,
                            a = r instanceof s ? r.text.length : r.children.length;
                        if (o == (t > 0 ? a : 0)) {
                            if (0 == n) return this.done = !0, this.value = "", this;
                            t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop()
                        } else if ((1 & i) == (t > 0 ? 0 : 1)) {
                            if (this.offsets[n] += t, 0 == e) return this.lineBreak = !0, this.value = "\n", this;
                            e--
                        } else if (r instanceof s) {
                            let i = r.text[o + (t < 0 ? -1 : 0)];
                            if (this.offsets[n] += t, i.length > Math.max(0, e)) return this.value = 0 == e ? i : t > 0 ? i.slice(e) : i.slice(0, i.length - e), this;
                            e -= i.length
                        } else {
                            let i = r.children[o + (t < 0 ? -1 : 0)];
                            e > i.length ? (e -= i.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(i), this.offsets.push(t > 0 ? 1 : (i instanceof s ? i.text.length : i.children.length) << 1))
                        }
                    }
                }
                next(e = 0) {
                    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir)
                }
            }
            class c {
                constructor(e, t, n) {
                    this.value = "", this.done = !1, this.cursor = new l(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n)
                }
                nextInner(e, t) {
                    if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
                    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
                    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
                    e > n && (e = n), n -= e;
                    let {
                        value: r
                    } = this.cursor.next(e);
                    return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this
                }
                next(e = 0) {
                    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir)
                }
                get lineBreak() {
                    return this.cursor.lineBreak && "" != this.value
                }
            }
            class h {
                constructor(e) {
                    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1
                }
                next(e = 0) {
                    let {
                        done: t,
                        lineBreak: n,
                        value: r
                    } = this.inner.next(e);
                    return t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this
                }
                get lineBreak() {
                    return !1
                }
            }
            "undefined" != typeof Symbol && (i.prototype[Symbol.iterator] = function () {
                return this.iter()
            }, l.prototype[Symbol.iterator] = c.prototype[Symbol.iterator] = h.prototype[Symbol.iterator] = function () {
                return this
            });
            class u {
                constructor(e, t, n, r) {
                    this.from = e, this.to = t, this.number = n, this.text = r
                }
                get length() {
                    return this.to - this.from
                }
            }
            let f = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e => e ? parseInt(e, 36) : 1);
            for (let e = 1; e < f.length; e++) f[e] += f[e - 1];

            function p(e) {
                return e >= 127462 && e <= 127487
            }

            function d(e, t, n = !0, r = !0) {
                return (n ? O : m)(e, t, r)
            }

            function O(e, t, n) {
                if (t == e.length) return t;
                t && g(e.charCodeAt(t)) && x(e.charCodeAt(t - 1)) && t--;
                let r = S(e, t);
                for (t += b(r); t < e.length;) {
                    let i = S(e, t);
                    if (8205 == r || 8205 == i || n && function (e) {
                            for (let t = 1; t < f.length; t += 2)
                                if (f[t] > e) return f[t - 1] <= e;
                            return !1
                        }(i)) t += b(i), r = i;
                    else if (p(i)) {
                        let n = 0,
                            r = t - 2;
                        for (; r >= 0 && p(S(e, r));) n++, r -= 2;
                        if (n % 2 == 0) break;
                        t += 2
                    } else break
                }
                return t
            }

            function m(e, t, n) {
                for (; t > 0;) {
                    let r = O(e, t - 2, n);
                    if (r < t) return r;
                    t--
                }
                return 0
            }

            function g(e) {
                return e >= 56320 && e < 57344
            }

            function x(e) {
                return e >= 55296 && e < 56320
            }

            function S(e, t) {
                let n = e.charCodeAt(t);
                if (!x(n) || t + 1 == e.length) return n;
                let r = e.charCodeAt(t + 1);
                return g(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n
            }

            function y(e) {
                return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (1023 & e) + 56320)
            }

            function b(e) {
                return e < 65536 ? 1 : 2
            }
            let v = /\r\n?|\n/;
            var w, T, k = ((w = k || (k = {}))[w.Simple = 0] = "Simple", w[w.TrackDel = 1] = "TrackDel", w[w.TrackBefore = 2] = "TrackBefore", w[w.TrackAfter = 3] = "TrackAfter", w);
            class P {
                constructor(e) {
                    this.sections = e
                }
                get length() {
                    let e = 0;
                    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
                    return e
                }
                get newLength() {
                    let e = 0;
                    for (let t = 0; t < this.sections.length; t += 2) {
                        let n = this.sections[t + 1];
                        e += n < 0 ? this.sections[t] : n
                    }
                    return e
                }
                get empty() {
                    return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
                }
                iterGaps(e) {
                    for (let t = 0, n = 0, r = 0; t < this.sections.length;) {
                        let i = this.sections[t++],
                            s = this.sections[t++];
                        s < 0 ? (e(n, r, i), r += i) : r += s, n += i
                    }
                }
                iterChangedRanges(e, t = !1) {
                    R(this, e, t)
                }
                get invertedDesc() {
                    let e = [];
                    for (let t = 0; t < this.sections.length;) {
                        let n = this.sections[t++],
                            r = this.sections[t++];
                        r < 0 ? e.push(n, r) : e.push(r, n)
                    }
                    return new P(e)
                }
                composeDesc(e) {
                    return this.empty ? e : e.empty ? this : C(this, e)
                }
                mapDesc(e, t = !1) {
                    return e.empty ? this : W(this, e, t)
                }
                mapPos(e, t = -1, n = k.Simple) {
                    let r = 0,
                        i = 0;
                    for (let s = 0; s < this.sections.length;) {
                        let o = this.sections[s++],
                            a = this.sections[s++],
                            l = r + o;
                        if (a < 0) {
                            if (l > e) return i + (e - r);
                            i += o
                        } else {
                            if (n != k.Simple && l >= e && (n == k.TrackDel && r < e && l > e || n == k.TrackBefore && r < e || n == k.TrackAfter && l > e)) return null;
                            if (l > e || l == e && t < 0 && !o) return e == r || t < 0 ? i : i + a;
                            i += a
                        }
                        r = l
                    }
                    if (e > r) throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);
                    return i
                }
                touchesRange(e, t = e) {
                    for (let n = 0, r = 0; n < this.sections.length && r <= t;) {
                        let i = this.sections[n++],
                            s = this.sections[n++],
                            o = r + i;
                        if (s >= 0 && r <= t && o >= e) return !(r < e) || !(o > t) || "cover";
                        r = o
                    }
                    return !1
                }
                toString() {
                    let e = "";
                    for (let t = 0; t < this.sections.length;) {
                        let n = this.sections[t++],
                            r = this.sections[t++];
                        e += (e ? " " : "") + n + (r >= 0 ? ":" + r : "")
                    }
                    return e
                }
                toJSON() {
                    return this.sections
                }
                static fromJSON(e) {
                    if (!Array.isArray(e) || e.length % 2 || e.some(e => "number" != typeof e)) throw RangeError("Invalid JSON representation of ChangeDesc");
                    return new P(e)
                }
                static create(e) {
                    return new P(e)
                }
            }
            class Q extends P {
                constructor(e, t) {
                    super(e), this.inserted = t
                }
                apply(e) {
                    if (this.length != e.length) throw RangeError("Applying change set to a document with the wrong length");
                    return R(this, (t, n, r, i, s) => e = e.replace(r, r + (n - t), s), !1), e
                }
                mapDesc(e, t = !1) {
                    return W(this, e, t, !0)
                }
                invert(e) {
                    let t = this.sections.slice(),
                        n = [];
                    for (let r = 0, s = 0; r < t.length; r += 2) {
                        let o = t[r],
                            a = t[r + 1];
                        if (a >= 0) {
                            t[r] = a, t[r + 1] = o;
                            let l = r >> 1;
                            for (; n.length < l;) n.push(i.empty);
                            n.push(o ? e.slice(s, s + o) : i.empty)
                        }
                        s += o
                    }
                    return new Q(t, n)
                }
                compose(e) {
                    return this.empty ? e : e.empty ? this : C(this, e, !0)
                }
                map(e, t = !1) {
                    return e.empty ? this : W(this, e, t, !0)
                }
                iterChanges(e, t = !1) {
                    R(this, e, t)
                }
                get desc() {
                    return P.create(this.sections)
                }
                filter(e) {
                    let t = [],
                        n = [],
                        r = [],
                        i = new X(this);
                    r: for (let s = 0, o = 0;;) {
                        let a = s == e.length ? 1e9 : e[s++];
                        for (; o < a || o == a && 0 == i.len;) {
                            if (i.done) break r;
                            let e = Math.min(i.len, a - o);
                            q(r, e, -1);
                            let s = -1 == i.ins ? -1 : 0 == i.off ? i.ins : 0;
                            q(t, e, s), s > 0 && $(n, t, i.text), i.forward(e), o += e
                        }
                        let l = e[s++];
                        for (; o < l;) {
                            if (i.done) break r;
                            let e = Math.min(i.len, l - o);
                            q(t, e, -1), q(r, e, -1 == i.ins ? -1 : 0 == i.off ? i.ins : 0), i.forward(e), o += e
                        }
                    }
                    return {
                        changes: new Q(t, n),
                        filtered: P.create(r)
                    }
                }
                toJSON() {
                    let e = [];
                    for (let t = 0; t < this.sections.length; t += 2) {
                        let n = this.sections[t],
                            r = this.sections[t + 1];
                        r < 0 ? e.push(n) : 0 == r ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()))
                    }
                    return e
                }
                static of (e, t, n) {
                    let r = [],
                        s = [],
                        o = 0,
                        a = null;

                    function l(e = !1) {
                        if (!e && !r.length) return;
                        o < t && q(r, t - o, -1);
                        let n = new Q(r, s);
                        a = a ? a.compose(n.map(a)) : n, r = [], s = [], o = 0
                    }
                    return ! function e(c) {
                        if (Array.isArray(c))
                            for (let t of c) e(t);
                        else if (c instanceof Q) {
                            if (c.length != t) throw RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
                            l(), a = a ? a.compose(c.map(a)) : c
                        } else {
                            let {
                                from: e,
                                to: a = e,
                                insert: h
                            } = c;
                            if (e > a || e < 0 || a > t) throw RangeError(`Invalid change range ${e} to ${a} (in doc of length ${t})`);
                            let u = h ? "string" == typeof h ? i.of(h.split(n || v)) : h : i.empty,
                                f = u.length;
                            if (e == a && 0 == f) return;
                            e < o && l(), e > o && q(r, e - o, -1), q(r, a - e, f), $(s, r, u), o = a
                        }
                    }(e), l(!a), a
                }
                static empty(e) {
                    return new Q(e ? [e, -1] : [], [])
                }
                static fromJSON(e) {
                    if (!Array.isArray(e)) throw RangeError("Invalid JSON representation of ChangeSet");
                    let t = [],
                        n = [];
                    for (let r = 0; r < e.length; r++) {
                        let s = e[r];
                        if ("number" == typeof s) t.push(s, -1);
                        else if (!Array.isArray(s) || "number" != typeof s[0] || s.some((e, t) => t && "string" != typeof e)) throw RangeError("Invalid JSON representation of ChangeSet");
                        else if (1 == s.length) t.push(s[0], 0);
                        else {
                            for (; n.length < r;) n.push(i.empty);
                            n[r] = i.of(s.slice(1)), t.push(s[0], n[r].length)
                        }
                    }
                    return new Q(t, n)
                }
                static createSet(e, t) {
                    return new Q(e, t)
                }
            }

            function q(e, t, n, r = !1) {
                if (0 == t && n <= 0) return;
                let i = e.length - 2;
                i >= 0 && n <= 0 && n == e[i + 1] ? e[i] += t : 0 == t && 0 == e[i] ? e[i + 1] += n : r ? (e[i] += t, e[i + 1] += n) : e.push(t, n)
            }

            function $(e, t, n) {
                if (0 == n.length) return;
                let r = t.length - 2 >> 1;
                if (r < e.length) e[e.length - 1] = e[e.length - 1].append(n);
                else {
                    for (; e.length < r;) e.push(i.empty);
                    e.push(n)
                }
            }

            function R(e, t, n) {
                let r = e.inserted;
                for (let s = 0, o = 0, a = 0; a < e.sections.length;) {
                    let l = e.sections[a++],
                        c = e.sections[a++];
                    if (c < 0) s += l, o += l;
                    else {
                        let h = s,
                            u = o,
                            f = i.empty;
                        for (; h += l, u += c, c && r && (f = f.append(r[a - 2 >> 1])), !n && a != e.sections.length && !(e.sections[a + 1] < 0);) l = e.sections[a++], c = e.sections[a++];
                        t(s, h, o, u, f), s = h, o = u
                    }
                }
            }

            function W(e, t, n, r = !1) {
                let i = [],
                    s = r ? [] : null,
                    o = new X(e),
                    a = new X(t);
                for (let e = -1;;)
                    if (-1 == o.ins && -1 == a.ins) {
                        let e = Math.min(o.len, a.len);
                        q(i, e, -1), o.forward(e), a.forward(e)
                    } else if (a.ins >= 0 && (o.ins < 0 || e == o.i || 0 == o.off && (a.len < o.len || a.len == o.len && !n))) {
                    let t = a.len;
                    for (q(i, a.ins, -1); t;) {
                        let n = Math.min(o.len, t);
                        o.ins >= 0 && e < o.i && o.len <= n && (q(i, 0, o.ins), s && $(s, i, o.text), e = o.i), o.forward(n), t -= n
                    }
                    a.next()
                } else if (o.ins >= 0) {
                    let t = 0,
                        n = o.len;
                    for (; n;)
                        if (-1 == a.ins) {
                            let e = Math.min(n, a.len);
                            t += e, n -= e, a.forward(e)
                        } else if (0 == a.ins && a.len < n) n -= a.len, a.next();
                    else break;
                    q(i, t, e < o.i ? o.ins : 0), s && e < o.i && $(s, i, o.text), e = o.i, o.forward(o.len - n)
                } else if (o.done && a.done) return s ? Q.createSet(i, s) : P.create(i);
                else throw Error("Mismatched change set lengths")
            }

            function C(e, t, n = !1) {
                let r = [],
                    i = n ? [] : null,
                    s = new X(e),
                    o = new X(t);
                for (let e = !1;;) {
                    if (s.done && o.done) return i ? Q.createSet(r, i) : P.create(r);
                    if (0 == s.ins) q(r, s.len, 0, e), s.next();
                    else if (0 != o.len || o.done) {
                        if (s.done || o.done) throw Error("Mismatched change set lengths"); {
                            let t = Math.min(s.len2, o.len),
                                n = r.length;
                            if (-1 == s.ins) {
                                let n = -1 == o.ins ? -1 : o.off ? 0 : o.ins;
                                q(r, t, n, e), i && n && $(i, r, o.text)
                            } else -1 == o.ins ? (q(r, s.off ? 0 : s.len, t, e), i && $(i, r, s.textBit(t))) : (q(r, s.off ? 0 : s.len, o.off ? 0 : o.ins, e), i && !o.off && $(i, r, o.text));
                            e = (s.ins > t || o.ins >= 0 && o.len > t) && (e || r.length > n), s.forward2(t), o.forward(t)
                        }
                    } else q(r, 0, o.ins, e), i && $(i, r, o.text), o.next()
                }
            }
            class X {
                constructor(e) {
                    this.set = e, this.i = 0, this.next()
                }
                next() {
                    let {
                        sections: e
                    } = this.set;
                    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
                }
                get done() {
                    return -2 == this.ins
                }
                get len2() {
                    return this.ins < 0 ? this.len : this.ins
                }
                get text() {
                    let {
                        inserted: e
                    } = this.set, t = this.i - 2 >> 1;
                    return t >= e.length ? i.empty : e[t]
                }
                textBit(e) {
                    let {
                        inserted: t
                    } = this.set, n = this.i - 2 >> 1;
                    return n >= t.length && !e ? i.empty : t[n].slice(this.off, null == e ? void 0 : this.off + e)
                }
                forward(e) {
                    e == this.len ? this.next() : (this.len -= e, this.off += e)
                }
                forward2(e) {
                    -1 == this.ins ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e)
                }
            }
            class E {
                constructor(e, t, n) {
                    this.from = e, this.to = t, this.flags = n
                }
                get anchor() {
                    return 16 & this.flags ? this.to : this.from
                }
                get head() {
                    return 16 & this.flags ? this.from : this.to
                }
                get empty() {
                    return this.from == this.to
                }
                get assoc() {
                    return 4 & this.flags ? -1 : 8 & this.flags ? 1 : 0
                }
                get bidiLevel() {
                    let e = 3 & this.flags;
                    return 3 == e ? null : e
                }
                get goalColumn() {
                    let e = this.flags >> 5;
                    return 33554431 == e ? void 0 : e
                }
                map(e, t = -1) {
                    let n, r;
                    return this.empty ? n = r = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), n == this.from && r == this.to ? this : new E(n, r, this.flags)
                }
                extend(e, t = e) {
                    if (e <= this.anchor && t >= this.anchor) return A.range(e, t);
                    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
                    return A.range(this.anchor, n)
                }
                eq(e) {
                    return this.anchor == e.anchor && this.head == e.head
                }
                toJSON() {
                    return {
                        anchor: this.anchor,
                        head: this.head
                    }
                }
                static fromJSON(e) {
                    if (!e || "number" != typeof e.anchor || "number" != typeof e.head) throw RangeError("Invalid JSON representation for SelectionRange");
                    return A.range(e.anchor, e.head)
                }
                static create(e, t, n) {
                    return new E(e, t, n)
                }
            }
            class A {
                constructor(e, t) {
                    this.ranges = e, this.mainIndex = t
                }
                map(e, t = -1) {
                    return e.empty ? this : A.create(this.ranges.map(n => n.map(e, t)), this.mainIndex)
                }
                eq(e) {
                    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
                    for (let t = 0; t < this.ranges.length; t++)
                        if (!this.ranges[t].eq(e.ranges[t])) return !1;
                    return !0
                }
                get main() {
                    return this.ranges[this.mainIndex]
                }
                asSingle() {
                    return 1 == this.ranges.length ? this : new A([this.main], 0)
                }
                addRange(e, t = !0) {
                    return A.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1)
                }
                replaceRange(e, t = this.mainIndex) {
                    let n = this.ranges.slice();
                    return n[t] = e, A.create(n, this.mainIndex)
                }
                toJSON() {
                    return {
                        ranges: this.ranges.map(e => e.toJSON()),
                        main: this.mainIndex
                    }
                }
                static fromJSON(e) {
                    if (!e || !Array.isArray(e.ranges) || "number" != typeof e.main || e.main >= e.ranges.length) throw RangeError("Invalid JSON representation for EditorSelection");
                    return new A(e.ranges.map(e => E.fromJSON(e)), e.main)
                }
                static single(e, t = e) {
                    return new A([A.range(e, t)], 0)
                }
                static create(e, t = 0) {
                    if (0 == e.length) throw RangeError("A selection needs at least one range");
                    for (let n = 0, r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (i.empty ? i.from <= n : i.from < n) return A.normalized(e.slice(), t);
                        n = i.to
                    }
                    return new A(e, t)
                }
                static cursor(e, t = 0, n, r) {
                    return E.create(e, e, (0 == t ? 0 : t < 0 ? 4 : 8) | (null == n ? 3 : Math.min(2, n)) | (null != r ? r : 33554431) << 5)
                }
                static range(e, t, n, r) {
                    let i = (null != n ? n : 33554431) << 5 | (null == r ? 3 : Math.min(2, r));
                    return t < e ? E.create(t, e, 24 | i) : E.create(e, t, (t > e ? 4 : 0) | i)
                }
                static normalized(e, t = 0) {
                    let n = e[t];
                    e.sort((e, t) => e.from - t.from), t = e.indexOf(n);
                    for (let n = 1; n < e.length; n++) {
                        let r = e[n],
                            i = e[n - 1];
                        if (r.empty ? r.from <= i.to : r.from < i.to) {
                            let s = i.from,
                                o = Math.max(r.to, i.to);
                            n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? A.range(o, s) : A.range(s, o))
                        }
                    }
                    return new A(e, t)
                }
            }

            function V(e, t) {
                for (let n of e.ranges)
                    if (n.to > t) throw RangeError("Selection points outside of document")
            }
            let Y = 0;
            class D {
                constructor(e, t, n, r, i) {
                    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = Y++, this.default = e([]), this.extensions = "function" == typeof i ? i(this) : i
                }
                static define(e = {}) {
                    return new D(e.combine || (e => e), e.compareInput || ((e, t) => e === t), e.compare || (e.combine ? (e, t) => e === t : j), !!e.static, e.enables)
                } of (e) {
                    return new M([], this, 0, e)
                }
                compute(e, t) {
                    if (this.isStatic) throw Error("Can't compute a static facet");
                    return new M(e, this, 1, t)
                }
                computeN(e, t) {
                    if (this.isStatic) throw Error("Can't compute a static facet");
                    return new M(e, this, 2, t)
                }
                from(e, t) {
                    return t || (t = e => e), this.compute([e], n => t(n.field(e)))
                }
            }

            function j(e, t) {
                return e == t || e.length == t.length && e.every((e, n) => e === t[n])
            }
            class M {
                constructor(e, t, n, r) {
                    this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = Y++
                }
                dynamicSlot(e) {
                    var t;
                    let n = this.value,
                        r = this.facet.compareInput,
                        i = this.id,
                        s = e[i] >> 1,
                        o = 2 == this.type,
                        a = !1,
                        l = !1,
                        c = [];
                    for (let n of this.dependencies) "doc" == n ? a = !0 : "selection" == n ? l = !0 : ((null !== (t = e[n.id]) && void 0 !== t ? t : 1) & 1) == 0 && c.push(e[n.id]);
                    return {
                        create: e => (e.values[s] = n(e), 1),
                        update(e, t) {
                            if (a && t.docChanged || l && (t.docChanged || t.selection) || I(e, c)) {
                                let t = n(e);
                                if (o ? !_(t, e.values[s], r) : !r(t, e.values[s])) return e.values[s] = t, 1
                            }
                            return 0
                        },
                        reconfigure: (e, t) => {
                            let a, l = t.config.address[i];
                            if (null != l) {
                                let i = K(t, l);
                                if (this.dependencies.every(n => n instanceof D ? t.facet(n) === e.facet(n) : !(n instanceof G) || t.field(n, !1) == e.field(n, !1)) || (o ? _(a = n(e), i, r) : r(a = n(e), i))) return e.values[s] = i, 0
                            } else a = n(e);
                            return e.values[s] = a, 1
                        }
                    }
                }
            }

            function _(e, t, n) {
                if (e.length != t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (!n(e[r], t[r])) return !1;
                return !0
            }

            function I(e, t) {
                let n = !1;
                for (let r of t) 1 & H(e, r) && (n = !0);
                return n
            }
            let Z = D.define({
                static: !0
            });
            class G {
                constructor(e, t, n, r, i) {
                    this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = i, this.provides = void 0
                }
                static define(e) {
                    let t = new G(Y++, e.create, e.update, e.compare || ((e, t) => e === t), e);
                    return e.provide && (t.provides = e.provide(t)), t
                }
                create(e) {
                    let t = e.facet(Z).find(e => e.field == this);
                    return ((null == t ? void 0 : t.create) || this.createF)(e)
                }
                slot(e) {
                    let t = e[this.id] >> 1;
                    return {
                        create: e => (e.values[t] = this.create(e), 1),
                        update: (e, n) => {
                            let r = e.values[t],
                                i = this.updateF(r, n);
                            return this.compareF(r, i) ? 0 : (e.values[t] = i, 1)
                        },
                        reconfigure: (e, n) => null != n.config.address[this.id] ? (e.values[t] = n.field(this), 0) : (e.values[t] = this.create(e), 1)
                    }
                }
                init(e) {
                    return [this, Z.of({
                        field: this,
                        create: e
                    })]
                }
                get extension() {
                    return this
                }
            }
            let N = {
                lowest: 4,
                low: 3,
                default: 2,
                high: 1,
                highest: 0
            };

            function U(e) {
                return t => new B(t, e)
            }
            let z = {
                highest: U(N.highest),
                high: U(N.high),
                default: U(N.default),
                low: U(N.low),
                lowest: U(N.lowest)
            };
            class B {
                constructor(e, t) {
                    this.inner = e, this.prec = t
                }
            }
            class L {
                of (e) {
                    return new F(this, e)
                }
                reconfigure(e) {
                    return L.reconfigure.of({
                        compartment: this,
                        extension: e
                    })
                }
                get(e) {
                    return e.config.compartments.get(this)
                }
            }
            class F {
                constructor(e, t) {
                    this.compartment = e, this.inner = t
                }
            }
            class J {
                constructor(e, t, n, r, i, s) {
                    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = i, this.facets = s, this.statusTemplate = []; this.statusTemplate.length < n.length;) this.statusTemplate.push(0)
                }
                staticFacet(e) {
                    let t = this.address[e.id];
                    return null == t ? e.default : this.staticValues[t >> 1]
                }
                static resolve(e, t, n) {
                    let r, i, s = [],
                        o = Object.create(null),
                        a = new Map;
                    for (let n of (r = [
                            [],
                            [],
                            [],
                            [],
                            []
                        ], i = new Map, ! function e(n, s) {
                            let o = i.get(n);
                            if (null != o) {
                                if (o <= s) return;
                                let e = r[o].indexOf(n);
                                e > -1 && r[o].splice(e, 1), n instanceof F && a.delete(n.compartment)
                            }
                            if (i.set(n, s), Array.isArray(n))
                                for (let t of n) e(t, s);
                            else if (n instanceof F) {
                                if (a.has(n.compartment)) throw RangeError("Duplicate use of compartment in extensions");
                                let r = t.get(n.compartment) || n.inner;
                                a.set(n.compartment, r), e(r, s)
                            } else if (n instanceof B) e(n.inner, n.prec);
                            else if (n instanceof G) r[s].push(n), n.provides && e(n.provides, s);
                            else if (n instanceof M) r[s].push(n), n.facet.extensions && e(n.facet.extensions, N.default);
                            else {
                                let t = n.extension;
                                if (!t) throw Error(`Unrecognized extension value in extension set (${n}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                                e(t, s)
                            }
                        }(e, N.default), r.reduce((e, t) => e.concat(t)))) n instanceof G ? s.push(n) : (o[n.facet.id] || (o[n.facet.id] = [])).push(n);
                    let l = Object.create(null),
                        c = [],
                        h = [];
                    for (let e of s) l[e.id] = h.length << 1, h.push(t => e.slot(t));
                    let u = null == n ? void 0 : n.config.facets;
                    for (let e in o) {
                        let t = o[e],
                            r = t[0].facet,
                            i = u && u[e] || [];
                        if (t.every(e => 0 == e.type)) {
                            if (l[r.id] = c.length << 1 | 1, j(i, t)) c.push(n.facet(r));
                            else {
                                let e = r.combine(t.map(e => e.value));
                                c.push(n && r.compare(e, n.facet(r)) ? n.facet(r) : e)
                            }
                        } else {
                            for (let e of t) 0 == e.type ? (l[e.id] = c.length << 1 | 1, c.push(e.value)) : (l[e.id] = h.length << 1, h.push(t => e.dynamicSlot(t)));
                            l[r.id] = h.length << 1, h.push(e => (function (e, t, n) {
                                let r = n.map(t => e[t.id]),
                                    i = n.map(e => e.type),
                                    s = r.filter(e => !(1 & e)),
                                    o = e[t.id] >> 1;

                                function a(e) {
                                    let n = [];
                                    for (let t = 0; t < r.length; t++) {
                                        let s = K(e, r[t]);
                                        if (2 == i[t])
                                            for (let e of s) n.push(e);
                                        else n.push(s)
                                    }
                                    return t.combine(n)
                                }
                                return {
                                    create(e) {
                                        for (let t of r) H(e, t);
                                        return e.values[o] = a(e), 1
                                    },
                                    update(e, n) {
                                        if (!I(e, s)) return 0;
                                        let r = a(e);
                                        return t.compare(r, e.values[o]) ? 0 : (e.values[o] = r, 1)
                                    },
                                    reconfigure(e, i) {
                                        let s = I(e, r),
                                            l = i.config.facets[t.id],
                                            c = i.facet(t);
                                        if (l && !s && j(n, l)) return e.values[o] = c, 0;
                                        let h = a(e);
                                        return t.compare(h, c) ? (e.values[o] = c, 0) : (e.values[o] = h, 1)
                                    }
                                }
                            })(e, r, t))
                        }
                    }
                    let f = h.map(e => e(l));
                    return new J(e, a, f, l, c, o)
                }
            }

            function H(e, t) {
                if (1 & t) return 2;
                let n = t >> 1,
                    r = e.status[n];
                if (4 == r) throw Error("Cyclic dependency between fields and/or facets");
                if (2 & r) return r;
                e.status[n] = 4;
                let i = e.computeSlot(e, e.config.dynamicSlots[n]);
                return e.status[n] = 2 | i
            }

            function K(e, t) {
                return 1 & t ? e.config.staticValues[t >> 1] : e.values[t >> 1]
            }
            let ee = D.define(),
                et = D.define({
                    combine: e => e.some(e => e),
                    static: !0
                }),
                en = D.define({
                    combine: e => e.length ? e[0] : void 0,
                    static: !0
                }),
                er = D.define(),
                ei = D.define(),
                es = D.define(),
                eo = D.define({
                    combine: e => !!e.length && e[0]
                });
            class ea {
                constructor(e, t) {
                    this.type = e, this.value = t
                }
                static define() {
                    return new el
                }
            }
            class el {
                of (e) {
                    return new ea(this, e)
                }
            }
            class ec {
                constructor(e) {
                    this.map = e
                } of (e) {
                    return new eh(this, e)
                }
            }
            class eh {
                constructor(e, t) {
                    this.type = e, this.value = t
                }
                map(e) {
                    let t = this.type.map(this.value, e);
                    return void 0 === t ? void 0 : t == this.value ? this : new eh(this.type, t)
                }
                is(e) {
                    return this.type == e
                }
                static define(e = {}) {
                    return new ec(e.map || (e => e))
                }
                static mapEffects(e, t) {
                    if (!e.length) return e;
                    let n = [];
                    for (let r of e) {
                        let e = r.map(t);
                        e && n.push(e)
                    }
                    return n
                }
            }
            eh.reconfigure = eh.define(), eh.appendConfig = eh.define();
            class eu {
                constructor(e, t, n, r, i, s) {
                    this.startState = e, this.changes = t, this.selection = n, this.effects = r, this.annotations = i, this.scrollIntoView = s, this._doc = null, this._state = null, n && V(n, t.newLength), i.some(e => e.type == eu.time) || (this.annotations = i.concat(eu.time.of(Date.now())))
                }
                static create(e, t, n, r, i, s) {
                    return new eu(e, t, n, r, i, s)
                }
                get newDoc() {
                    return this._doc || (this._doc = this.changes.apply(this.startState.doc))
                }
                get newSelection() {
                    return this.selection || this.startState.selection.map(this.changes)
                }
                get state() {
                    return this._state || this.startState.applyTransaction(this), this._state
                }
                annotation(e) {
                    for (let t of this.annotations)
                        if (t.type == e) return t.value
                }
                get docChanged() {
                    return !this.changes.empty
                }
                get reconfigured() {
                    return this.startState.config != this.state.config
                }
                isUserEvent(e) {
                    let t = this.annotation(eu.userEvent);
                    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && "." == t[e.length]))
                }
            }

            function ef(e, t, n) {
                var r;
                let i, s, o;
                return n ? (i = t.changes, s = Q.empty(t.changes.length), o = e.changes.compose(t.changes)) : (i = t.changes.map(e.changes), s = e.changes.mapDesc(t.changes, !0), o = e.changes.compose(i)), {
                    changes: o,
                    selection: t.selection ? t.selection.map(s) : null === (r = e.selection) || void 0 === r ? void 0 : r.map(i),
                    effects: eh.mapEffects(e.effects, i).concat(eh.mapEffects(t.effects, s)),
                    annotations: e.annotations.length ? e.annotations.concat(t.annotations) : t.annotations,
                    scrollIntoView: e.scrollIntoView || t.scrollIntoView
                }
            }

            function ep(e, t, n) {
                let r = t.selection,
                    i = eO(t.annotations);
                return t.userEvent && (i = i.concat(eu.userEvent.of(t.userEvent))), {
                    changes: t.changes instanceof Q ? t.changes : Q.of(t.changes || [], n, e.facet(en)),
                    selection: r && (r instanceof A ? r : A.single(r.anchor, r.head)),
                    effects: eO(t.effects),
                    annotations: i,
                    scrollIntoView: !!t.scrollIntoView
                }
            }
            eu.time = ea.define(), eu.userEvent = ea.define(), eu.addToHistory = ea.define(), eu.remote = ea.define();
            let ed = [];

            function eO(e) {
                return null == e ? ed : Array.isArray(e) ? e : [e]
            }
            var em = ((T = em || (em = {}))[T.Word = 0] = "Word", T[T.Space = 1] = "Space", T[T.Other = 2] = "Other", T);
            let eg = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
            try {
                r = RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
            } catch (e) {}
            class ex {
                constructor(e, t, n, r, i, s) {
                    this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = i, s && (s._state = this);
                    for (let e = 0; e < this.config.dynamicSlots.length; e++) H(this, e << 1);
                    this.computeSlot = null
                }
                field(e, t = !0) {
                    let n = this.config.address[e.id];
                    if (null == n) {
                        if (t) throw RangeError("Field is not present in this state");
                        return
                    }
                    return H(this, n), K(this, n)
                }
                update(...e) {
                    return function e(t, n, r) {
                        let i = ep(t, n.length ? n[0] : {}, t.doc.length);
                        n.length && !1 === n[0].filter && (r = !1);
                        for (let e = 1; e < n.length; e++) {
                            !1 === n[e].filter && (r = !1);
                            let s = !!n[e].sequential;
                            i = ef(i, ep(t, n[e], s ? i.changes.newLength : t.doc.length), s)
                        }
                        let s = eu.create(t, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
                        return function (e) {
                            let t = e.startState,
                                n = t.facet(es),
                                r = e;
                            for (let i = n.length - 1; i >= 0; i--) {
                                let s = n[i](e);
                                s && Object.keys(s).length && (r = ef(r, ep(t, s, e.changes.newLength), !0))
                            }
                            return r == e ? e : eu.create(t, e.changes, e.selection, r.effects, r.annotations, r.scrollIntoView)
                        }(r ? function (t) {
                            let n = t.startState,
                                r = !0;
                            for (let e of n.facet(er)) {
                                let n = e(t);
                                if (!1 === n) {
                                    r = !1;
                                    break
                                }
                                Array.isArray(n) && (r = !0 === r ? n : function (e, t) {
                                    let n = [];
                                    for (let r = 0, i = 0;;) {
                                        let s, o;
                                        if (r < e.length && (i == t.length || t[i] >= e[r])) s = e[r++], o = e[r++];
                                        else {
                                            if (!(i < t.length)) return n;
                                            s = t[i++], o = t[i++]
                                        }!n.length || n[n.length - 1] < s ? n.push(s, o) : n[n.length - 1] < o && (n[n.length - 1] = o)
                                    }
                                }(r, n))
                            }
                            if (!0 !== r) {
                                let e, i;
                                if (!1 === r) i = t.changes.invertedDesc, e = Q.empty(n.doc.length);
                                else {
                                    let n = t.changes.filter(r);
                                    e = n.changes, i = n.filtered.mapDesc(n.changes).invertedDesc
                                }
                                t = eu.create(n, e, t.selection && t.selection.map(i), eh.mapEffects(t.effects, i), t.annotations, t.scrollIntoView)
                            }
                            let i = n.facet(ei);
                            for (let r = i.length - 1; r >= 0; r--) {
                                let s = i[r](t);
                                t = s instanceof eu ? s : Array.isArray(s) && 1 == s.length && s[0] instanceof eu ? s[0] : e(n, eO(s), !1)
                            }
                            return t
                        }(s) : s)
                    }(this, e, !0)
                }
                applyTransaction(e) {
                    let t, n = this.config,
                        {
                            base: r,
                            compartments: i
                        } = n;
                    for (let t of e.effects) t.is(L.reconfigure) ? (n && (i = new Map, n.compartments.forEach((e, t) => i.set(t, e)), n = null), i.set(t.value.compartment, t.value.extension)) : t.is(eh.reconfigure) ? (n = null, r = t.value) : t.is(eh.appendConfig) && (n = null, r = eO(r).concat(t.value));
                    n ? t = e.startState.values.slice() : (n = J.resolve(r, i, this), t = new ex(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (e, t) => t.reconfigure(e, this), null).values), new ex(n, e.newDoc, e.newSelection, t, (t, n) => n.update(t, e), e)
                }
                replaceSelection(e) {
                    return "string" == typeof e && (e = this.toText(e)), this.changeByRange(t => ({
                        changes: {
                            from: t.from,
                            to: t.to,
                            insert: e
                        },
                        range: A.cursor(t.from + e.length)
                    }))
                }
                changeByRange(e) {
                    let t = this.selection,
                        n = e(t.ranges[0]),
                        r = this.changes(n.changes),
                        i = [n.range],
                        s = eO(n.effects);
                    for (let n = 1; n < t.ranges.length; n++) {
                        let o = e(t.ranges[n]),
                            a = this.changes(o.changes),
                            l = a.map(r);
                        for (let e = 0; e < n; e++) i[e] = i[e].map(l);
                        let c = r.mapDesc(a, !0);
                        i.push(o.range.map(c)), r = r.compose(l), s = eh.mapEffects(s, l).concat(eh.mapEffects(eO(o.effects), c))
                    }
                    return {
                        changes: r,
                        selection: A.create(i, t.mainIndex),
                        effects: s
                    }
                }
                changes(e = []) {
                    return e instanceof Q ? e : Q.of(e, this.doc.length, this.facet(ex.lineSeparator))
                }
                toText(e) {
                    return i.of(e.split(this.facet(ex.lineSeparator) || v))
                }
                sliceDoc(e = 0, t = this.doc.length) {
                    return this.doc.sliceString(e, t, this.lineBreak)
                }
                facet(e) {
                    let t = this.config.address[e.id];
                    return null == t ? e.default : (H(this, t), K(this, t))
                }
                toJSON(e) {
                    let t = {
                        doc: this.sliceDoc(),
                        selection: this.selection.toJSON()
                    };
                    if (e)
                        for (let n in e) {
                            let r = e[n];
                            r instanceof G && null != this.config.address[r.id] && (t[n] = r.spec.toJSON(this.field(e[n]), this))
                        }
                    return t
                }
                static fromJSON(e, t = {}, n) {
                    if (!e || "string" != typeof e.doc) throw RangeError("Invalid JSON representation for EditorState");
                    let r = [];
                    if (n) {
                        for (let t in n)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                let i = n[t],
                                    s = e[t];
                                r.push(i.init(e => i.spec.fromJSON(s, e)))
                            }
                    }
                    return ex.create({
                        doc: e.doc,
                        selection: A.fromJSON(e.selection),
                        extensions: t.extensions ? r.concat([t.extensions]) : r
                    })
                }
                static create(e = {}) {
                    let t = J.resolve(e.extensions || [], new Map),
                        n = e.doc instanceof i ? e.doc : i.of((e.doc || "").split(t.staticFacet(ex.lineSeparator) || v)),
                        r = e.selection ? e.selection instanceof A ? e.selection : A.single(e.selection.anchor, e.selection.head) : A.single(0);
                    return V(r, n.length), t.staticFacet(et) || (r = r.asSingle()), new ex(t, n, r, t.dynamicSlots.map(() => null), (e, t) => t.create(e), null)
                }
                get tabSize() {
                    return this.facet(ex.tabSize)
                }
                get lineBreak() {
                    return this.facet(ex.lineSeparator) || "\n"
                }
                get readOnly() {
                    return this.facet(eo)
                }
                phrase(e, ...t) {
                    for (let t of this.facet(ex.phrases))
                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                            e = t[e];
                            break
                        } return t.length && (e = e.replace(/\$(\$|\d*)/g, (e, n) => {
                        if ("$" == n) return "$";
                        let r = +(n || 1);
                        return !r || r > t.length ? e : t[r - 1]
                    })), e
                }
                languageDataAt(e, t, n = -1) {
                    let r = [];
                    for (let i of this.facet(ee))
                        for (let s of i(this, t, n)) Object.prototype.hasOwnProperty.call(s, e) && r.push(s[e]);
                    return r
                }
                charCategorizer(e) {
                    var t;
                    return t = this.languageDataAt("wordChars", e).join(""), e => {
                        if (!/\S/.test(e)) return em.Space;
                        if (function (e) {
                                if (r) return r.test(e);
                                for (let t = 0; t < e.length; t++) {
                                    let n = e[t];
                                    if (/\w/.test(n) || n > "\x80" && (n.toUpperCase() != n.toLowerCase() || eg.test(n))) return !0
                                }
                                return !1
                            }(e)) return em.Word;
                        for (let n = 0; n < t.length; n++)
                            if (e.indexOf(t[n]) > -1) return em.Word;
                        return em.Other
                    }
                }
                wordAt(e) {
                    let {
                        text: t,
                        from: n,
                        length: r
                    } = this.doc.lineAt(e), i = this.charCategorizer(e), s = e - n, o = e - n;
                    for (; s > 0;) {
                        let e = d(t, s, !1);
                        if (i(t.slice(e, s)) != em.Word) break;
                        s = e
                    }
                    for (; o < r;) {
                        let e = d(t, o);
                        if (i(t.slice(o, e)) != em.Word) break;
                        o = e
                    }
                    return s == o ? null : A.range(s + n, o + n)
                }
            }

            function eS(e, t, n = {}) {
                let r = {};
                for (let t of e)
                    for (let e of Object.keys(t)) {
                        let i = t[e],
                            s = r[e];
                        if (void 0 === s) r[e] = i;
                        else if (s === i || void 0 === i);
                        else if (Object.hasOwnProperty.call(n, e)) r[e] = n[e](s, i);
                        else throw Error("Config merge conflict for field " + e)
                    }
                for (let e in t) void 0 === r[e] && (r[e] = t[e]);
                return r
            }
            ex.allowMultipleSelections = et, ex.tabSize = D.define({
                combine: e => e.length ? e[0] : 4
            }), ex.lineSeparator = en, ex.readOnly = eo, ex.phrases = D.define({
                compare(e, t) {
                    let n = Object.keys(e),
                        r = Object.keys(t);
                    return n.length == r.length && n.every(n => e[n] == t[n])
                }
            }), ex.languageData = ee, ex.changeFilter = er, ex.transactionFilter = ei, ex.transactionExtender = es, L.reconfigure = eh.define();
            class ey {
                eq(e) {
                    return this == e
                }
                range(e, t = e) {
                    return eb.create(e, t, this)
                }
            }
            ey.prototype.startSide = ey.prototype.endSide = 0, ey.prototype.point = !1, ey.prototype.mapMode = k.TrackDel;
            class eb {
                constructor(e, t, n) {
                    this.from = e, this.to = t, this.value = n
                }
                static create(e, t, n) {
                    return new eb(e, t, n)
                }
            }

            function ev(e, t) {
                return e.from - t.from || e.value.startSide - t.value.startSide
            }
            class ew {
                constructor(e, t, n, r) {
                    this.from = e, this.to = t, this.value = n, this.maxPoint = r
                }
                get length() {
                    return this.to[this.to.length - 1]
                }
                findIndex(e, t, n, r = 0) {
                    let i = n ? this.to : this.from;
                    for (let s = r, o = i.length;;) {
                        if (s == o) return s;
                        let r = s + o >> 1,
                            a = i[r] - e || (n ? this.value[r].endSide : this.value[r].startSide) - t;
                        if (r == s) return a >= 0 ? s : o;
                        a >= 0 ? o = r : s = r + 1
                    }
                }
                between(e, t, n, r) {
                    for (let i = this.findIndex(t, -1e9, !0), s = this.findIndex(n, 1e9, !1, i); i < s; i++)
                        if (!1 === r(this.from[i] + e, this.to[i] + e, this.value[i])) return !1
                }
                map(e, t) {
                    let n = [],
                        r = [],
                        i = [],
                        s = -1,
                        o = -1;
                    for (let a = 0; a < this.value.length; a++) {
                        let l = this.value[a],
                            c = this.from[a] + e,
                            h = this.to[a] + e,
                            u, f;
                        if (c == h) {
                            let e = t.mapPos(c, l.startSide, l.mapMode);
                            if (null == e || (u = f = e, l.startSide != l.endSide && (f = t.mapPos(c, l.endSide)) < u)) continue
                        } else if ((u = t.mapPos(c, l.startSide)) > (f = t.mapPos(h, l.endSide)) || u == f && l.startSide > 0 && l.endSide <= 0) continue;
                        0 > (f - u || l.endSide - l.startSide) || (s < 0 && (s = u), l.point && (o = Math.max(o, f - u)), n.push(l), r.push(u - s), i.push(f - s))
                    }
                    return {
                        mapped: n.length ? new ew(r, i, n, o) : null,
                        pos: s
                    }
                }
            }
            class eT {
                constructor(e, t, n, r) {
                    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r
                }
                static create(e, t, n, r) {
                    return new eT(e, t, n, r)
                }
                get length() {
                    let e = this.chunk.length - 1;
                    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length)
                }
                get size() {
                    if (this.isEmpty) return 0;
                    let e = this.nextLayer.size;
                    for (let t of this.chunk) e += t.value.length;
                    return e
                }
                chunkEnd(e) {
                    return this.chunkPos[e] + this.chunk[e].length
                }
                update(e) {
                    let {
                        add: t = [],
                        sort: n = !1,
                        filterFrom: r = 0,
                        filterTo: i = this.length
                    } = e, s = e.filter;
                    if (0 == t.length && !s) return this;
                    if (n && (t = t.slice().sort(ev)), this.isEmpty) return t.length ? eT.of(t) : this;
                    let o = new eQ(this, null, -1).goto(0),
                        a = 0,
                        l = [],
                        c = new ek;
                    for (; o.value || a < t.length;)
                        if (a < t.length && (o.from - t[a].from || o.startSide - t[a].value.startSide) >= 0) {
                            let e = t[a++];
                            c.addInner(e.from, e.to, e.value) || l.push(e)
                        } else 1 == o.rangeIndex && o.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(o.chunkIndex) < t[a].from) && (!s || r > this.chunkEnd(o.chunkIndex) || i < this.chunkPos[o.chunkIndex]) && c.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex]) ? o.nextChunk() : ((!s || r > o.to || i < o.from || s(o.from, o.to, o.value)) && !c.addInner(o.from, o.to, o.value) && l.push(eb.create(o.from, o.to, o.value)), o.next());
                    return c.finishInner(this.nextLayer.isEmpty && !l.length ? eT.empty : this.nextLayer.update({
                        add: l,
                        filter: s,
                        filterFrom: r,
                        filterTo: i
                    }))
                }
                map(e) {
                    if (e.empty || this.isEmpty) return this;
                    let t = [],
                        n = [],
                        r = -1;
                    for (let i = 0; i < this.chunk.length; i++) {
                        let s = this.chunkPos[i],
                            o = this.chunk[i],
                            a = e.touchesRange(s, s + o.length);
                        if (!1 === a) r = Math.max(r, o.maxPoint), t.push(o), n.push(e.mapPos(s));
                        else if (!0 === a) {
                            let {
                                mapped: i,
                                pos: a
                            } = o.map(s, e);
                            i && (r = Math.max(r, i.maxPoint), t.push(i), n.push(a))
                        }
                    }
                    let i = this.nextLayer.map(e);
                    return 0 == t.length ? i : new eT(n, t, i || eT.empty, r)
                }
                between(e, t, n) {
                    if (!this.isEmpty) {
                        for (let r = 0; r < this.chunk.length; r++) {
                            let i = this.chunkPos[r],
                                s = this.chunk[r];
                            if (t >= i && e <= i + s.length && !1 === s.between(i, e - i, t - i, n)) return
                        }
                        this.nextLayer.between(e, t, n)
                    }
                }
                iter(e = 0) {
                    return eq.from([this]).goto(e)
                }
                get isEmpty() {
                    return this.nextLayer == this
                }
                static iter(e, t = 0) {
                    return eq.from(e).goto(t)
                }
                static compare(e, t, n, r, i = -1) {
                    let s = e.filter(e => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i),
                        o = t.filter(e => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i),
                        a = eP(s, o, n),
                        l = new eR(s, a, i),
                        c = new eR(o, a, i);
                    n.iterGaps((e, t, n) => eW(l, e, c, t, n, r)), n.empty && 0 == n.length && eW(l, 0, c, 0, 0, r)
                }
                static eq(e, t, n = 0, r) {
                    null == r && (r = 999999999);
                    let i = e.filter(e => !e.isEmpty && 0 > t.indexOf(e)),
                        s = t.filter(t => !t.isEmpty && 0 > e.indexOf(t));
                    if (i.length != s.length) return !1;
                    if (!i.length) return !0;
                    let o = eP(i, s),
                        a = new eR(i, o, 0).goto(n),
                        l = new eR(s, o, 0).goto(n);
                    for (;;) {
                        if (a.to != l.to || !eC(a.active, l.active) || a.point && (!l.point || !a.point.eq(l.point))) return !1;
                        if (a.to > r) return !0;
                        a.next(), l.next()
                    }
                }
                static spans(e, t, n, r, i = -1) {
                    let s = new eR(e, null, i).goto(t),
                        o = t,
                        a = s.openStart;
                    for (;;) {
                        let e = Math.min(s.to, n);
                        if (s.point) {
                            let n = s.activeForPoint(s.to),
                                i = s.pointFrom < t ? n.length + 1 : Math.min(n.length, a);
                            r.point(o, e, s.point, n, i, s.pointRank), a = Math.min(s.openEnd(e), n.length)
                        } else e > o && (r.span(o, e, s.active, a), a = s.openEnd(e));
                        if (s.to > n) return a + (s.point && s.to > n ? 1 : 0);
                        o = s.to, s.next()
                    }
                }
                static of (e, t = !1) {
                    let n = new ek;
                    for (let r of e instanceof eb ? [e] : t ? function (e) {
                            if (e.length > 1)
                                for (let t = e[0], n = 1; n < e.length; n++) {
                                    let r = e[n];
                                    if (ev(t, r) > 0) return e.slice().sort(ev);
                                    t = r
                                }
                            return e
                        }(e) : e) n.add(r.from, r.to, r.value);
                    return n.finish()
                }
            }
            eT.empty = new eT([], [], null, -1), eT.empty.nextLayer = eT.empty;
            class ek {
                finishChunk(e) {
                    this.chunks.push(new ew(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = [])
                }
                constructor() {
                    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null
                }
                add(e, t, n) {
                    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new ek)).add(e, t, n)
                }
                addInner(e, t, n) {
                    let r = e - this.lastTo || n.startSide - this.last.endSide;
                    if (r <= 0 && 0 > (e - this.lastFrom || n.startSide - this.last.startSide)) throw Error("Ranges must be added sorted by `from` position and `startSide`");
                    return !(r < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0)
                }
                addChunk(e, t) {
                    if (0 > (e - this.lastTo || t.value[0].startSide - this.last.endSide)) return !1;
                    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
                    let n = t.value.length - 1;
                    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0
                }
                finish() {
                    return this.finishInner(eT.empty)
                }
                finishInner(e) {
                    if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return e;
                    let t = eT.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
                    return this.from = null, t
                }
            }

            function eP(e, t, n) {
                let r = new Map;
                for (let t of e)
                    for (let e = 0; e < t.chunk.length; e++) t.chunk[e].maxPoint <= 0 && r.set(t.chunk[e], t.chunkPos[e]);
                let i = new Set;
                for (let e of t)
                    for (let t = 0; t < e.chunk.length; t++) {
                        let s = r.get(e.chunk[t]);
                        null == s || (n ? n.mapPos(s) : s) != e.chunkPos[t] || (null == n ? void 0 : n.touchesRange(s, s + e.chunk[t].length)) || i.add(e.chunk[t])
                    }
                return i
            }
            class eQ {
                constructor(e, t, n, r = 0) {
                    this.layer = e, this.skip = t, this.minPoint = n, this.rank = r
                }
                get startSide() {
                    return this.value ? this.value.startSide : 0
                }
                get endSide() {
                    return this.value ? this.value.endSide : 0
                }
                goto(e, t = -1e9) {
                    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this
                }
                gotoInner(e, t, n) {
                    for (; this.chunkIndex < this.layer.chunk.length;) {
                        let t = this.layer.chunk[this.chunkIndex];
                        if (!(this.skip && this.skip.has(t) || this.layer.chunkEnd(this.chunkIndex) < e || t.maxPoint < this.minPoint)) break;
                        this.chunkIndex++, n = !1
                    }
                    if (this.chunkIndex < this.layer.chunk.length) {
                        let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
                        (!n || this.rangeIndex < r) && this.setRangeIndex(r)
                    }
                    this.next()
                }
                forward(e, t) {
                    0 > (this.to - e || this.endSide - t) && this.gotoInner(e, t, !0)
                }
                next() {
                    for (;;) {
                        if (this.chunkIndex == this.layer.chunk.length) {
                            this.from = this.to = 1e9, this.value = null;
                            break
                        } {
                            let e = this.layer.chunkPos[this.chunkIndex],
                                t = this.layer.chunk[this.chunkIndex],
                                n = e + t.from[this.rangeIndex];
                            if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break
                        }
                    }
                }
                setRangeIndex(e) {
                    if (e == this.layer.chunk[this.chunkIndex].value.length) {
                        if (this.chunkIndex++, this.skip)
                            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
                        this.rangeIndex = 0
                    } else this.rangeIndex = e
                }
                nextChunk() {
                    this.chunkIndex++, this.rangeIndex = 0, this.next()
                }
                compare(e) {
                    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide
                }
            }
            class eq {
                constructor(e) {
                    this.heap = e
                }
                static from(e, t = null, n = -1) {
                    let r = [];
                    for (let i = 0; i < e.length; i++)
                        for (let s = e[i]; !s.isEmpty; s = s.nextLayer) s.maxPoint >= n && r.push(new eQ(s, t, n, i));
                    return 1 == r.length ? r[0] : new eq(r)
                }
                get startSide() {
                    return this.value ? this.value.startSide : 0
                }
                goto(e, t = -1e9) {
                    for (let n of this.heap) n.goto(e, t);
                    for (let e = this.heap.length >> 1; e >= 0; e--) e$(this.heap, e);
                    return this.next(), this
                }
                forward(e, t) {
                    for (let n of this.heap) n.forward(e, t);
                    for (let e = this.heap.length >> 1; e >= 0; e--) e$(this.heap, e);
                    0 > (this.to - e || this.value.endSide - t) && this.next()
                }
                next() {
                    if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
                    else {
                        let e = this.heap[0];
                        this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), e$(this.heap, 0)
                    }
                }
            }

            function e$(e, t) {
                for (let n = e[t];;) {
                    let r = (t << 1) + 1;
                    if (r >= e.length) break;
                    let i = e[r];
                    if (r + 1 < e.length && i.compare(e[r + 1]) >= 0 && (i = e[r + 1], r++), 0 > n.compare(i)) break;
                    e[r] = n, e[t] = i, t = r
                }
            }
            class eR {
                constructor(e, t, n) {
                    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = eq.from(e, t, n)
                }
                goto(e, t = -1e9) {
                    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this
                }
                forward(e, t) {
                    for (; this.minActive > -1 && 0 > (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t);) this.removeActive(this.minActive);
                    this.cursor.forward(e, t)
                }
                removeActive(e) {
                    eX(this.active, e), eX(this.activeTo, e), eX(this.activeRank, e), this.minActive = eA(this.active, this.activeTo)
                }
                addActive(e) {
                    let t = 0,
                        {
                            value: n,
                            to: r,
                            rank: i
                        } = this.cursor;
                    for (; t < this.activeRank.length && this.activeRank[t] <= i;) t++;
                    eE(this.active, t, n), eE(this.activeTo, t, r), eE(this.activeRank, t, i), e && eE(e, t, this.cursor.from), this.minActive = eA(this.active, this.activeTo)
                }
                next() {
                    let e = this.to,
                        t = this.point;
                    this.point = null;
                    let n = this.openStart < 0 ? [] : null;
                    for (;;) {
                        let r = this.minActive;
                        if (r > -1 && 0 > (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide)) {
                            if (this.activeTo[r] > e) {
                                this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
                                break
                            }
                            this.removeActive(r), n && eX(n, r)
                        } else if (this.cursor.value) {
                            if (this.cursor.from > e) {
                                this.to = this.cursor.from, this.endSide = this.cursor.startSide;
                                break
                            } {
                                let e = this.cursor.value;
                                if (e.point) {
                                    if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
                                    else {
                                        this.point = e, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = e.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                                        break
                                    }
                                } else this.addActive(n), this.cursor.next()
                            }
                        } else {
                            this.to = this.endSide = 1e9;
                            break
                        }
                    }
                    if (n) {
                        this.openStart = 0;
                        for (let t = n.length - 1; t >= 0 && n[t] < e; t--) this.openStart++
                    }
                }
                activeForPoint(e) {
                    if (!this.active.length) return this.active;
                    let t = [];
                    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)(this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
                    return t.reverse()
                }
                openEnd(e) {
                    let t = 0;
                    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--) t++;
                    return t
                }
            }

            function eW(e, t, n, r, i, s) {
                e.goto(t), n.goto(r);
                let o = r + i,
                    a = r,
                    l = r - t;
                for (;;) {
                    let t = e.to + l - n.to || e.endSide - n.endSide,
                        r = t < 0 ? e.to + l : n.to,
                        i = Math.min(r, o);
                    if (e.point || n.point ? e.point && n.point && (e.point == n.point || e.point.eq(n.point)) && eC(e.activeForPoint(e.to), n.activeForPoint(n.to)) || s.comparePoint(a, i, e.point, n.point) : i > a && !eC(e.active, n.active) && s.compareRange(a, i, e.active, n.active), r > o) break;
                    a = r, t <= 0 && e.next(), t >= 0 && n.next()
                }
            }

            function eC(e, t) {
                if (e.length != t.length) return !1;
                for (let n = 0; n < e.length; n++)
                    if (e[n] != t[n] && !e[n].eq(t[n])) return !1;
                return !0
            }

            function eX(e, t) {
                for (let n = t, r = e.length - 1; n < r; n++) e[n] = e[n + 1];
                e.pop()
            }

            function eE(e, t, n) {
                for (let n = e.length - 1; n >= t; n--) e[n + 1] = e[n];
                e[t] = n
            }

            function eA(e, t) {
                let n = -1,
                    r = 1e9;
                for (let i = 0; i < t.length; i++) 0 > (t[i] - r || e[i].endSide - e[n].endSide) && (n = i, r = t[i]);
                return n
            }

            function eV(e, t, n = e.length) {
                let r = 0;
                for (let i = 0; i < n;) 9 == e.charCodeAt(i) ? (r += t - r % t, i++) : (r++, i = d(e, i));
                return r
            }

            function eY(e, t, n, r) {
                for (let r = 0, i = 0;;) {
                    if (i >= t) return r;
                    if (r == e.length) break;
                    i += 9 == e.charCodeAt(r) ? n - i % n : 1, r = d(e, r)
                }
                return !0 === r ? -1 : e.length
            }
        },
        4998: function (e, t, n) {
            var r, i;
            n.d(t, {
                Jq: function () {
                    return h
                },
                L3: function () {
                    return s
                },
                Lj: function () {
                    return u
                },
                _b: function () {
                    return C
                },
                hr: function () {
                    return R
                },
                i9: function () {
                    return W
                },
                md: function () {
                    return l
                },
                mp: function () {
                    return d
                },
                vj: function () {
                    return r
                }
            });
            let s = 1024,
                o = 0;
            class a {
                constructor(e, t) {
                    this.from = e, this.to = t
                }
            }
            class l {
                constructor(e = {}) {
                    this.id = o++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
                        throw Error("This node type doesn't define a deserialize function")
                    })
                }
                add(e) {
                    if (this.perNode) throw RangeError("Can't add per-node props to node types");
                    return "function" != typeof e && (e = h.match(e)), t => {
                        let n = e(t);
                        return void 0 === n ? null : [this, n]
                    }
                }
            }
            l.closedBy = new l({
                deserialize: e => e.split(" ")
            }), l.openedBy = new l({
                deserialize: e => e.split(" ")
            }), l.group = new l({
                deserialize: e => e.split(" ")
            }), l.contextHash = new l({
                perNode: !0
            }), l.lookAhead = new l({
                perNode: !0
            }), l.mounted = new l({
                perNode: !0
            });
            let c = Object.create(null);
            class h {
                constructor(e, t, n, r = 0) {
                    this.name = e, this.props = t, this.id = n, this.flags = r
                }
                static define(e) {
                    let t = e.props && e.props.length ? Object.create(null) : c,
                        n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (null == e.name ? 8 : 0),
                        r = new h(e.name || "", t, e.id, n);
                    if (e.props) {
                        for (let n of e.props)
                            if (Array.isArray(n) || (n = n(r)), n) {
                                if (n[0].perNode) throw RangeError("Can't store a per-node prop on a node type");
                                t[n[0].id] = n[1]
                            }
                    }
                    return r
                }
                prop(e) {
                    return this.props[e.id]
                }
                get isTop() {
                    return (1 & this.flags) > 0
                }
                get isSkipped() {
                    return (2 & this.flags) > 0
                }
                get isError() {
                    return (4 & this.flags) > 0
                }
                get isAnonymous() {
                    return (8 & this.flags) > 0
                }
                is(e) {
                    if ("string" == typeof e) {
                        if (this.name == e) return !0;
                        let t = this.prop(l.group);
                        return !!t && t.indexOf(e) > -1
                    }
                    return this.id == e
                }
                static match(e) {
                    let t = Object.create(null);
                    for (let n in e)
                        for (let r of n.split(" ")) t[r] = e[n];
                    return e => {
                        for (let n = e.prop(l.group), r = -1; r < (n ? n.length : 0); r++) {
                            let i = t[r < 0 ? e.name : n[r]];
                            if (i) return i
                        }
                    }
                }
            }
            h.none = new h("", Object.create(null), 0, 8);
            class u {
                constructor(e) {
                    this.types = e;
                    for (let t = 0; t < e.length; t++)
                        if (e[t].id != t) throw RangeError("Node type ids should correspond to array positions when creating a node set")
                }
                extend(...e) {
                    let t = [];
                    for (let n of this.types) {
                        let r = null;
                        for (let t of e) {
                            let e = t(n);
                            e && (r || (r = Object.assign({}, n.props)), r[e[0].id] = e[1])
                        }
                        t.push(r ? new h(n.name, r, n.id, n.flags) : n)
                    }
                    return new u(t)
                }
            }
            let f = new WeakMap,
                p = new WeakMap;
            (i = r || (r = {}))[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
            class d {
                constructor(e, t, n, r, i) {
                    if (this.type = e, this.children = t, this.positions = n, this.length = r, this.props = null, i && i.length)
                        for (let [e, t] of (this.props = Object.create(null), i)) this.props["number" == typeof e ? e : e.id] = t
                }
                toString() {
                    let e = this.prop(l.mounted);
                    if (e && !e.overlay) return e.tree.toString();
                    let t = "";
                    for (let e of this.children) {
                        let n = e.toString();
                        n && (t && (t += ","), t += n)
                    }
                    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t
                }
                cursor(e = 0) {
                    return new k(this.topNode, e)
                }
                cursorAt(e, t = 0, n = 0) {
                    let r = f.get(this) || this.topNode,
                        i = new k(r);
                    return i.moveTo(e, t), f.set(this, i._tree), i
                }
                get topNode() {
                    return new y(this, 0, 0, null)
                }
                resolve(e, t = 0) {
                    let n = S(f.get(this) || this.topNode, e, t, !1);
                    return f.set(this, n), n
                }
                resolveInner(e, t = 0) {
                    let n = S(p.get(this) || this.topNode, e, t, !0);
                    return p.set(this, n), n
                }
                iterate(e) {
                    let {
                        enter: t,
                        leave: n,
                        from: i = 0,
                        to: s = this.length
                    } = e, o = e.mode || 0, a = (o & r.IncludeAnonymous) > 0;
                    for (let e = this.cursor(o | r.IncludeAnonymous);;) {
                        let r = !1;
                        if (e.from <= s && e.to >= i && (!a && e.type.isAnonymous || !1 !== t(e))) {
                            if (e.firstChild()) continue;
                            r = !0
                        }
                        for (; r && n && (a || !e.type.isAnonymous) && n(e), !e.nextSibling();) {
                            if (!e.parent()) return;
                            r = !0
                        }
                    }
                }
                prop(e) {
                    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e)
                }
                get propValues() {
                    let e = [];
                    if (this.props)
                        for (let t in this.props) e.push([+t, this.props[t]]);
                    return e
                }
                balance(e = {}) {
                    return this.children.length <= 8 ? this : $(h.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, t, n) => new d(this.type, e, t, n, this.propValues), e.makeTree || ((e, t, n) => new d(h.none, e, t, n)))
                }
                static build(e) {
                    return function (e) {
                        var t;
                        let {
                            buffer: n,
                            nodeSet: r,
                            maxBufferLength: i = s,
                            reused: o = [],
                            minRepeatType: a = r.types.length
                        } = e, c = Array.isArray(n) ? new O(n, n.length) : n, h = r.types, u = 0, f = 0;

                        function p(e, t, n, i, s, o, a, l) {
                            let c = [],
                                h = [];
                            for (; e.length > i;) c.push(e.pop()), h.push(t.pop() + n - s);
                            e.push(g(r.types[a], c, h, o - s, l - o)), t.push(s - n)
                        }

                        function g(e, t, n, r, i = 0, s) {
                            if (u) {
                                let e = [l.contextHash, u];
                                s = s ? [e].concat(s) : [e]
                            }
                            if (i > 25) {
                                let e = [l.lookAhead, i];
                                s = s ? [e].concat(s) : [e]
                            }
                            return new d(e, t, n, r, s)
                        }
                        let x = [],
                            S = [];
                        for (; c.pos > 0;) ! function e(t, n, s, O, x) {
                            let {
                                id: S,
                                start: y,
                                end: b,
                                size: v
                            } = c, w = f;
                            for (; v < 0;) {
                                if (c.next(), -1 == v) {
                                    let e = o[S];
                                    s.push(e), O.push(y - t);
                                    return
                                }
                                if (-3 == v) {
                                    u = S;
                                    return
                                }
                                if (-4 == v) {
                                    f = S;
                                    return
                                }
                                throw RangeError(`Unrecognized record size: ${v}`)
                            }
                            let T = h[S],
                                k, P, Q = y - t;
                            if (b - y <= i && (P = function (e, t) {
                                    let n = c.fork(),
                                        r = 0,
                                        s = 0,
                                        o = 0,
                                        l = n.end - i,
                                        h = {
                                            size: 0,
                                            start: 0,
                                            skip: 0
                                        };
                                    t: for (let i = n.pos - e; n.pos > i;) {
                                        let e = n.size;
                                        if (n.id == t && e >= 0) {
                                            h.size = r, h.start = s, h.skip = o, o += 4, r += 4, n.next();
                                            continue
                                        }
                                        let c = n.pos - e;
                                        if (e < 0 || c < i || n.start < l) break;
                                        let u = n.id >= a ? 4 : 0,
                                            f = n.start;
                                        for (n.next(); n.pos > c;) {
                                            if (n.size < 0) {
                                                if (-3 == n.size) u += 4;
                                                else break t
                                            } else n.id >= a && (u += 4);
                                            n.next()
                                        }
                                        s = f, r += e, o += u
                                    }
                                    return (t < 0 || r == e) && (h.size = r, h.start = s, h.skip = o), h.size > 4 ? h : void 0
                                }(c.pos - n, x))) {
                                let e = new Uint16Array(P.size - P.skip),
                                    n = c.pos - P.size,
                                    i = e.length;
                                for (; c.pos > n;) i = function e(t, n, r) {
                                    let {
                                        id: i,
                                        start: s,
                                        end: o,
                                        size: l
                                    } = c;
                                    if (c.next(), l >= 0 && i < a) {
                                        let a = r;
                                        if (l > 4) {
                                            let i = c.pos - (l - 4);
                                            for (; c.pos > i;) r = e(t, n, r)
                                        }
                                        n[--r] = a, n[--r] = o - t, n[--r] = s - t, n[--r] = i
                                    } else -3 == l ? u = i : -4 == l && (f = i);
                                    return r
                                }(P.start, e, i);
                                k = new m(e, b - P.start, r), Q = P.start - t
                            } else {
                                let t = c.pos - v;
                                c.next();
                                let n = [],
                                    r = [],
                                    s = S >= a ? S : -1,
                                    o = 0,
                                    h = b;
                                for (; c.pos > t;) s >= 0 && c.id == s && c.size >= 0 ? (c.end <= h - i && (p(n, r, y, o, c.end, h, s, w), o = n.length, h = c.end), c.next()) : e(y, t, n, r, s);
                                if (s >= 0 && o > 0 && o < n.length && p(n, r, y, o, y, h, s, w), n.reverse(), r.reverse(), s > -1 && o > 0) {
                                    let e = function (e) {
                                        return (t, n, r) => {
                                            let i = 0,
                                                s = t.length - 1,
                                                o, a;
                                            if (s >= 0 && (o = t[s]) instanceof d) {
                                                if (!s && o.type == e && o.length == r) return o;
                                                (a = o.prop(l.lookAhead)) && (i = n[s] + o.length + a)
                                            }
                                            return g(e, t, n, r, i)
                                        }
                                    }(T);
                                    k = $(T, n, r, 0, n.length, 0, b - y, e, e)
                                } else k = g(T, n, r, b - y, w - b)
                            }
                            s.push(k), O.push(Q)
                        }(e.start || 0, e.bufferStart || 0, x, S, -1);
                        let y = null !== (t = e.length) && void 0 !== t ? t : x.length ? S[0] + x[0].length : 0;
                        return new d(h[e.topID], x.reverse(), S.reverse(), y)
                    }(e)
                }
            }
            d.empty = new d(h.none, [], [], 0);
            class O {
                constructor(e, t) {
                    this.buffer = e, this.index = t
                }
                get id() {
                    return this.buffer[this.index - 4]
                }
                get start() {
                    return this.buffer[this.index - 3]
                }
                get end() {
                    return this.buffer[this.index - 2]
                }
                get size() {
                    return this.buffer[this.index - 1]
                }
                get pos() {
                    return this.index
                }
                next() {
                    this.index -= 4
                }
                fork() {
                    return new O(this.buffer, this.index)
                }
            }
            class m {
                constructor(e, t, n) {
                    this.buffer = e, this.length = t, this.set = n
                }
                get type() {
                    return h.none
                }
                toString() {
                    let e = [];
                    for (let t = 0; t < this.buffer.length;) e.push(this.childString(t)), t = this.buffer[t + 3];
                    return e.join(",")
                }
                childString(e) {
                    let t = this.buffer[e],
                        n = this.buffer[e + 3],
                        r = this.set.types[t],
                        i = r.name;
                    if (/\W/.test(i) && !r.isError && (i = JSON.stringify(i)), n == (e += 4)) return i;
                    let s = [];
                    for (; e < n;) s.push(this.childString(e)), e = this.buffer[e + 3];
                    return i + "(" + s.join(",") + ")"
                }
                findChild(e, t, n, r, i) {
                    let {
                        buffer: s
                    } = this, o = -1;
                    for (let a = e; a != t && (!g(i, r, s[a + 1], s[a + 2]) || (o = a, !(n > 0))); a = s[a + 3]);
                    return o
                }
                slice(e, t, n) {
                    let r = this.buffer,
                        i = new Uint16Array(t - e),
                        s = 0;
                    for (let o = e, a = 0; o < t;) {
                        i[a++] = r[o++], i[a++] = r[o++] - n;
                        let t = i[a++] = r[o++] - n;
                        i[a++] = r[o++] - e, s = Math.max(s, t)
                    }
                    return new m(i, s, this.set)
                }
            }

            function g(e, t, n, r) {
                switch (e) {
                    case -2:
                        return n < t;
                    case -1:
                        return r >= t && n < t;
                    case 0:
                        return n < t && r > t;
                    case 1:
                        return n <= t && r > t;
                    case 2:
                        return r > t;
                    case 4:
                        return !0
                }
            }

            function x(e, t) {
                let n = e.childBefore(t);
                for (; n;) {
                    let t = n.lastChild;
                    if (!t || t.to != n.to) break;
                    t.type.isError && t.from == t.to ? (e = n, n = t.prevSibling) : n = t
                }
                return e
            }

            function S(e, t, n, i) {
                for (var s; e.from == e.to || (n < 1 ? e.from >= t : e.from > t) || (n > -1 ? e.to <= t : e.to < t);) {
                    let t = !i && e instanceof y && e.index < 0 ? null : e.parent;
                    if (!t) return e;
                    e = t
                }
                let o = i ? 0 : r.IgnoreOverlays;
                if (i)
                    for (let r = e, i = r.parent; i; i = (r = i).parent) r instanceof y && r.index < 0 && (null === (s = i.enter(t, n, o)) || void 0 === s ? void 0 : s.from) != r.from && (e = i);
                for (;;) {
                    let r = e.enter(t, n, o);
                    if (!r) return e;
                    e = r
                }
            }
            class y {
                constructor(e, t, n, r) {
                    this._tree = e, this.from = t, this.index = n, this._parent = r
                }
                get type() {
                    return this._tree.type
                }
                get name() {
                    return this._tree.type.name
                }
                get to() {
                    return this.from + this._tree.length
                }
                nextChild(e, t, n, i, s = 0) {
                    for (let o = this;;) {
                        for (let {
                                children: a,
                                positions: c
                            } = o._tree, h = t > 0 ? a.length : -1; e != h; e += t) {
                            let h = a[e],
                                u = c[e] + o.from;
                            if (g(i, n, u, u + h.length)) {
                                if (h instanceof m) {
                                    if (s & r.ExcludeBuffers) continue;
                                    let a = h.findChild(0, h.buffer.length, t, n - u, i);
                                    if (a > -1) return new T(new w(o, h, e, u), null, a)
                                } else if (s & r.IncludeAnonymous || !h.type.isAnonymous || P(h)) {
                                    let a;
                                    if (!(s & r.IgnoreMounts) && h.props && (a = h.prop(l.mounted)) && !a.overlay) return new y(a.tree, u, e, o);
                                    let c = new y(h, u, e, o);
                                    return s & r.IncludeAnonymous || !c.type.isAnonymous ? c : c.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, i)
                                }
                            }
                        }
                        if (s & r.IncludeAnonymous || !o.type.isAnonymous || (e = o.index >= 0 ? o.index + t : t < 0 ? -1 : o._parent._tree.children.length, !(o = o._parent))) return null
                    }
                }
                get firstChild() {
                    return this.nextChild(0, 1, 0, 4)
                }
                get lastChild() {
                    return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
                }
                childAfter(e) {
                    return this.nextChild(0, 1, e, 2)
                }
                childBefore(e) {
                    return this.nextChild(this._tree.children.length - 1, -1, e, -2)
                }
                enter(e, t, n = 0) {
                    let i;
                    if (!(n & r.IgnoreOverlays) && (i = this._tree.prop(l.mounted)) && i.overlay) {
                        let n = e - this.from;
                        for (let {
                                from: e,
                                to: r
                            } of i.overlay)
                            if ((t > 0 ? e <= n : e < n) && (t < 0 ? r >= n : r > n)) return new y(i.tree, i.overlay[0].from + this.from, -1, this)
                    }
                    return this.nextChild(0, 1, e, t, n)
                }
                nextSignificantParent() {
                    let e = this;
                    for (; e.type.isAnonymous && e._parent;) e = e._parent;
                    return e
                }
                get parent() {
                    return this._parent ? this._parent.nextSignificantParent() : null
                }
                get nextSibling() {
                    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
                }
                get prevSibling() {
                    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
                }
                cursor(e = 0) {
                    return new k(this, e)
                }
                get tree() {
                    return this._tree
                }
                toTree() {
                    return this._tree
                }
                resolve(e, t = 0) {
                    return S(this, e, t, !1)
                }
                resolveInner(e, t = 0) {
                    return S(this, e, t, !0)
                }
                enterUnfinishedNodesBefore(e) {
                    return x(this, e)
                }
                getChild(e, t = null, n = null) {
                    let r = b(this, e, t, n);
                    return r.length ? r[0] : null
                }
                getChildren(e, t = null, n = null) {
                    return b(this, e, t, n)
                }
                toString() {
                    return this._tree.toString()
                }
                get node() {
                    return this
                }
                matchContext(e) {
                    return v(this, e)
                }
            }

            function b(e, t, n, r) {
                let i = e.cursor(),
                    s = [];
                if (!i.firstChild()) return s;
                if (null != n) {
                    for (; !i.type.is(n);)
                        if (!i.nextSibling()) return s
                }
                for (;;) {
                    if (null != r && i.type.is(r)) return s;
                    if (i.type.is(t) && s.push(i.node), !i.nextSibling()) return null == r ? s : []
                }
            }

            function v(e, t, n = t.length - 1) {
                for (let r = e.parent; n >= 0; r = r.parent) {
                    if (!r) return !1;
                    if (!r.type.isAnonymous) {
                        if (t[n] && t[n] != r.name) return !1;
                        n--
                    }
                }
                return !0
            }
            class w {
                constructor(e, t, n, r) {
                    this.parent = e, this.buffer = t, this.index = n, this.start = r
                }
            }
            class T {
                get name() {
                    return this.type.name
                }
                get from() {
                    return this.context.start + this.context.buffer.buffer[this.index + 1]
                }
                get to() {
                    return this.context.start + this.context.buffer.buffer[this.index + 2]
                }
                constructor(e, t, n) {
                    this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]]
                }
                child(e, t, n) {
                    let {
                        buffer: r
                    } = this.context, i = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, n);
                    return i < 0 ? null : new T(this.context, this, i)
                }
                get firstChild() {
                    return this.child(1, 0, 4)
                }
                get lastChild() {
                    return this.child(-1, 0, 4)
                }
                childAfter(e) {
                    return this.child(1, e, 2)
                }
                childBefore(e) {
                    return this.child(-1, e, -2)
                }
                enter(e, t, n = 0) {
                    if (n & r.ExcludeBuffers) return null;
                    let {
                        buffer: i
                    } = this.context, s = i.findChild(this.index + 4, i.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
                    return s < 0 ? null : new T(this.context, this, s)
                }
                get parent() {
                    return this._parent || this.context.parent.nextSignificantParent()
                }
                externalSibling(e) {
                    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4)
                }
                get nextSibling() {
                    let {
                        buffer: e
                    } = this.context, t = e.buffer[this.index + 3];
                    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new T(this.context, this._parent, t) : this.externalSibling(1)
                }
                get prevSibling() {
                    let {
                        buffer: e
                    } = this.context, t = this._parent ? this._parent.index + 4 : 0;
                    return this.index == t ? this.externalSibling(-1) : new T(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4))
                }
                cursor(e = 0) {
                    return new k(this, e)
                }
                get tree() {
                    return null
                }
                toTree() {
                    let e = [],
                        t = [],
                        {
                            buffer: n
                        } = this.context,
                        r = this.index + 4,
                        i = n.buffer[this.index + 3];
                    if (i > r) {
                        let s = n.buffer[this.index + 1];
                        e.push(n.slice(r, i, s)), t.push(0)
                    }
                    return new d(this.type, e, t, this.to - this.from)
                }
                resolve(e, t = 0) {
                    return S(this, e, t, !1)
                }
                resolveInner(e, t = 0) {
                    return S(this, e, t, !0)
                }
                enterUnfinishedNodesBefore(e) {
                    return x(this, e)
                }
                toString() {
                    return this.context.buffer.childString(this.index)
                }
                getChild(e, t = null, n = null) {
                    let r = b(this, e, t, n);
                    return r.length ? r[0] : null
                }
                getChildren(e, t = null, n = null) {
                    return b(this, e, t, n)
                }
                get node() {
                    return this
                }
                matchContext(e) {
                    return v(this, e)
                }
            }
            class k {
                get name() {
                    return this.type.name
                }
                constructor(e, t = 0) {
                    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof y) this.yieldNode(e);
                    else {
                        this._tree = e.context.parent, this.buffer = e.context;
                        for (let t = e._parent; t; t = t._parent) this.stack.unshift(t.index);
                        this.bufferNode = e, this.yieldBuf(e.index)
                    }
                }
                yieldNode(e) {
                    return !!e && (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0)
                }
                yieldBuf(e, t) {
                    this.index = e;
                    let {
                        start: n,
                        buffer: r
                    } = this.buffer;
                    return this.type = t || r.set.types[r.buffer[e]], this.from = n + r.buffer[e + 1], this.to = n + r.buffer[e + 2], !0
                }
                yield(e) {
                    return !!e && (e instanceof y ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)))
                }
                toString() {
                    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
                }
                enterChild(e, t, n) {
                    if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
                    let {
                        buffer: r
                    } = this.buffer, i = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, n);
                    return !(i < 0) && (this.stack.push(this.index), this.yieldBuf(i))
                }
                firstChild() {
                    return this.enterChild(1, 0, 4)
                }
                lastChild() {
                    return this.enterChild(-1, 0, 4)
                }
                childAfter(e) {
                    return this.enterChild(1, e, 2)
                }
                childBefore(e) {
                    return this.enterChild(-1, e, -2)
                }
                enter(e, t, n = this.mode) {
                    return this.buffer ? !(n & r.ExcludeBuffers) && this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n))
                }
                parent() {
                    if (!this.buffer) return this.yieldNode(this.mode & r.IncludeAnonymous ? this._tree._parent : this._tree.parent);
                    if (this.stack.length) return this.yieldBuf(this.stack.pop());
                    let e = this.mode & r.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
                    return this.buffer = null, this.yieldNode(e)
                }
                sibling(e) {
                    if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode));
                    let {
                        buffer: t
                    } = this.buffer, n = this.stack.length - 1;
                    if (e < 0) {
                        let e = n < 0 ? 0 : this.stack[n] + 4;
                        if (this.index != e) return this.yieldBuf(t.findChild(e, this.index, -1, 0, 4))
                    } else {
                        let e = t.buffer[this.index + 3];
                        if (e < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3])) return this.yieldBuf(e)
                    }
                    return n < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode))
                }
                nextSibling() {
                    return this.sibling(1)
                }
                prevSibling() {
                    return this.sibling(-1)
                }
                atLastNode(e) {
                    let t, n, {
                        buffer: i
                    } = this;
                    if (i) {
                        if (e > 0) {
                            if (this.index < i.buffer.buffer.length) return !1
                        } else
                            for (let e = 0; e < this.index; e++)
                                if (i.buffer.buffer[e + 3] < this.index) return !1;
                        ({
                            index: t,
                            parent: n
                        } = i)
                    } else({
                        index: t,
                        _parent: n
                    } = this._tree);
                    for (; n; {
                            index: t,
                            _parent: n
                        } = n)
                        if (t > -1)
                            for (let i = t + e, s = e < 0 ? -1 : n._tree.children.length; i != s; i += e) {
                                let e = n._tree.children[i];
                                if (this.mode & r.IncludeAnonymous || e instanceof m || !e.type.isAnonymous || P(e)) return !1
                            }
                    return !0
                }
                move(e, t) {
                    if (t && this.enterChild(e, 0, 4)) return !0;
                    for (;;) {
                        if (this.sibling(e)) return !0;
                        if (this.atLastNode(e) || !this.parent()) return !1
                    }
                }
                next(e = !0) {
                    return this.move(1, e)
                }
                prev(e = !0) {
                    return this.move(-1, e)
                }
                moveTo(e, t = 0) {
                    for (;
                        (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(););
                    for (; this.enterChild(1, e, t););
                    return this
                }
                get node() {
                    if (!this.buffer) return this._tree;
                    let e = this.bufferNode,
                        t = null,
                        n = 0;
                    if (e && e.context == this.buffer) t: for (let r = this.index, i = this.stack.length; i >= 0;) {
                        for (let s = e; s; s = s._parent)
                            if (s.index == r) {
                                if (r == this.index) return s;
                                t = s, n = i + 1;
                                break t
                            } r = this.stack[--i]
                    }
                    for (let e = n; e < this.stack.length; e++) t = new T(this.buffer, t, this.stack[e]);
                    return this.bufferNode = new T(this.buffer, t, this.index)
                }
                get tree() {
                    return this.buffer ? null : this._tree._tree
                }
                iterate(e, t) {
                    for (let n = 0;;) {
                        let r = !1;
                        if (this.type.isAnonymous || !1 !== e(this)) {
                            if (this.firstChild()) {
                                n++;
                                continue
                            }
                            this.type.isAnonymous || (r = !0)
                        }
                        for (; r && t && t(this), r = this.type.isAnonymous, !this.nextSibling();) {
                            if (!n) return;
                            this.parent(), n--, r = !0
                        }
                    }
                }
                matchContext(e) {
                    if (!this.buffer) return v(this.node, e);
                    let {
                        buffer: t
                    } = this.buffer, {
                        types: n
                    } = t.set;
                    for (let r = e.length - 1, i = this.stack.length - 1; r >= 0; i--) {
                        if (i < 0) return v(this.node, e, r);
                        let s = n[t.buffer[this.stack[i]]];
                        if (!s.isAnonymous) {
                            if (e[r] && e[r] != s.name) return !1;
                            r--
                        }
                    }
                    return !0
                }
            }

            function P(e) {
                return e.children.some(e => e instanceof m || !e.type.isAnonymous || P(e))
            }
            let Q = new WeakMap;

            function q(e, t) {
                if (!e.isAnonymous || t instanceof m || t.type != e) return 1;
                let n = Q.get(t);
                if (null == n) {
                    for (let r of (n = 1, t.children)) {
                        if (r.type != e || !(r instanceof d)) {
                            n = 1;
                            break
                        }
                        n += q(e, r)
                    }
                    Q.set(t, n)
                }
                return n
            }

            function $(e, t, n, r, i, s, o, a, l) {
                let c = 0;
                for (let n = r; n < i; n++) c += q(e, t[n]);
                let h = Math.ceil(1.5 * c / 8),
                    u = [],
                    f = [];
                return ! function t(n, r, i, o, a) {
                    for (let c = i; c < o;) {
                        let i = c,
                            p = r[c],
                            d = q(e, n[c]);
                        for (c++; c < o; c++) {
                            let t = q(e, n[c]);
                            if (d + t >= h) break;
                            d += t
                        }
                        if (c == i + 1) {
                            if (d > h) {
                                let e = n[i];
                                t(e.children, e.positions, 0, e.children.length, r[i] + a);
                                continue
                            }
                            u.push(n[i])
                        } else {
                            let t = r[c - 1] + n[c - 1].length - p;
                            u.push($(e, n, r, i, c, p, t, null, l))
                        }
                        f.push(p + a - s)
                    }
                }(t, n, r, i, 0), (a || l)(u, f, o)
            }
            class R {
                constructor() {
                    this.map = new WeakMap
                }
                setBuffer(e, t, n) {
                    let r = this.map.get(e);
                    r || this.map.set(e, r = new Map), r.set(t, n)
                }
                getBuffer(e, t) {
                    let n = this.map.get(e);
                    return n && n.get(t)
                }
                set(e, t) {
                    e instanceof T ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof y && this.map.set(e.tree, t)
                }
                get(e) {
                    return e instanceof T ? this.getBuffer(e.context.buffer, e.index) : e instanceof y ? this.map.get(e.tree) : void 0
                }
                cursorSet(e, t) {
                    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t)
                }
                cursorGet(e) {
                    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree)
                }
            }
            class W {
                constructor(e, t, n, r, i = !1, s = !1) {
                    this.from = e, this.to = t, this.tree = n, this.offset = r, this.open = (i ? 1 : 0) | (s ? 2 : 0)
                }
                get openStart() {
                    return (1 & this.open) > 0
                }
                get openEnd() {
                    return (2 & this.open) > 0
                }
                static addTree(e, t = [], n = !1) {
                    let r = [new W(0, e.length, e, 0, !1, n)];
                    for (let n of t) n.to > e.length && r.push(n);
                    return r
                }
                static applyChanges(e, t, n = 128) {
                    if (!t.length) return e;
                    let r = [],
                        i = 1,
                        s = e.length ? e[0] : null;
                    for (let o = 0, a = 0, l = 0;; o++) {
                        let c = o < t.length ? t[o] : null,
                            h = c ? c.fromA : 1e9;
                        if (h - a >= n)
                            for (; s && s.from < h;) {
                                let t = s;
                                if (a >= t.from || h <= t.to || l) {
                                    let e = Math.max(t.from, a) - l,
                                        n = Math.min(t.to, h) - l;
                                    t = e >= n ? null : new W(e, n, t.tree, t.offset + l, o > 0, !!c)
                                }
                                if (t && r.push(t), s.to > h) break;
                                s = i < e.length ? e[i++] : null
                            }
                        if (!c) break;
                        a = c.toA, l = c.toA - c.toB
                    }
                    return r
                }
            }
            class C {
                startParse(e, t, n) {
                    return "string" == typeof e && (e = new X(e)), n = n ? n.length ? n.map(e => new a(e.from, e.to)) : [new a(0, 0)] : [new a(0, e.length)], this.createParse(e, t || [], n)
                }
                parse(e, t, n) {
                    let r = this.startParse(e, t, n);
                    for (;;) {
                        let e = r.advance();
                        if (e) return e
                    }
                }
            }
            class X {
                constructor(e) {
                    this.string = e
                }
                get length() {
                    return this.string.length
                }
                chunk(e) {
                    return this.string.slice(e)
                }
                get lineChunks() {
                    return !1
                }
                read(e, t) {
                    return this.string.slice(e, t)
                }
            }
            new l({
                perNode: !0
            })
        },
        6634: function (e, t, n) {
            n.d(t, {
                Gv: function () {
                    return l
                },
                QR: function () {
                    return u
                },
                bW: function () {
                    return f
                },
                pJ: function () {
                    return $
                }
            });
            var r = n(4998);
            let i = 0;
            class s {
                constructor(e, t, n) {
                    this.set = e, this.base = t, this.modified = n, this.id = i++
                }
                static define(e) {
                    if (null == e ? void 0 : e.base) throw Error("Can not derive from a modified tag");
                    let t = new s([], null, []);
                    if (t.set.push(t), e)
                        for (let n of e.set) t.set.push(n);
                    return t
                }
                static defineModifier() {
                    let e = new a;
                    return t => t.modified.indexOf(e) > -1 ? t : a.get(t.base || t, t.modified.concat(e).sort((e, t) => e.id - t.id))
                }
            }
            let o = 0;
            class a {
                constructor() {
                    this.instances = [], this.id = o++
                }
                static get(e, t) {
                    if (!t.length) return e;
                    let n = t[0].instances.find(n => {
                        var r;
                        return n.base == e && (r = n.modified, t.length == r.length && t.every((e, t) => e == r[t]))
                    });
                    if (n) return n;
                    let r = [],
                        i = new s(r, e, t);
                    for (let e of t) e.instances.push(i);
                    let o = function (e) {
                        let t = [
                            []
                        ];
                        for (let n = 0; n < e.length; n++)
                            for (let r = 0, i = t.length; r < i; r++) t.push(t[r].concat(e[n]));
                        return t.sort((e, t) => t.length - e.length)
                    }(t);
                    for (let t of e.set)
                        if (!t.modified.length)
                            for (let e of o) r.push(a.get(t, e));
                    return i
                }
            }

            function l(e) {
                let t = Object.create(null);
                for (let n in e) {
                    let r = e[n];
                    for (let e of (Array.isArray(r) || (r = [r]), n.split(" ")))
                        if (e) {
                            let n = [],
                                i = 2,
                                s = e;
                            for (let t = 0;;) {
                                if ("..." == s && t > 0 && t + 3 == e.length) {
                                    i = 1;
                                    break
                                }
                                let r = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);
                                if (!r) throw RangeError("Invalid path: " + e);
                                if (n.push("*" == r[0] ? "" : '"' == r[0][0] ? JSON.parse(r[0]) : r[0]), (t += r[0].length) == e.length) break;
                                let o = e[t++];
                                if (t == e.length && "!" == o) {
                                    i = 0;
                                    break
                                }
                                if ("/" != o) throw RangeError("Invalid path: " + e);
                                s = e.slice(t)
                            }
                            let o = n.length - 1,
                                a = n[o];
                            if (!a) throw RangeError("Invalid path: " + e);
                            let l = new h(r, i, o > 0 ? n.slice(0, o) : null);
                            t[a] = l.sort(t[a])
                        }
                }
                return c.add(t)
            }
            let c = new r.md;
            class h {
                constructor(e, t, n, r) {
                    this.tags = e, this.mode = t, this.context = n, this.next = r
                }
                get opaque() {
                    return 0 == this.mode
                }
                get inherit() {
                    return 1 == this.mode
                }
                sort(e) {
                    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e)
                }
                get depth() {
                    return this.context ? this.context.length : 0
                }
            }

            function u(e, t) {
                let n = Object.create(null);
                for (let t of e)
                    if (Array.isArray(t.tag))
                        for (let e of t.tag) n[e.id] = t.class;
                    else n[t.tag.id] = t.class;
                let {
                    scope: r,
                    all: i = null
                } = t || {};
                return {
                    style: e => {
                        let t = i;
                        for (let r of e)
                            for (let e of r.set) {
                                let r = n[e.id];
                                if (r) {
                                    t = t ? t + " " + r : r;
                                    break
                                }
                            }
                        return t
                    },
                    scope: r
                }
            }

            function f(e, t, n, r = 0, i = e.length) {
                let s = new p(r, Array.isArray(t) ? t : [t], n);
                s.highlightRange(e.cursor(), r, i, "", s.highlighters), s.flush(i)
            }
            h.empty = new h([], 2, null);
            class p {
                constructor(e, t, n) {
                    this.at = e, this.highlighters = t, this.span = n, this.class = ""
                }
                startSpan(e, t) {
                    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t)
                }
                flush(e) {
                    e > this.at && this.class && this.span(this.at, e, this.class)
                }
                highlightRange(e, t, n, i, s) {
                    let {
                        type: o,
                        from: a,
                        to: l
                    } = e;
                    if (a >= n || l <= t) return;
                    o.isTop && (s = this.highlighters.filter(e => !e.scope || e.scope(o)));
                    let u = i,
                        f = function (e) {
                            let t = e.type.prop(c);
                            for (; t && t.context && !e.matchContext(t.context);) t = t.next;
                            return t || null
                        }(e) || h.empty,
                        p = function (e, t) {
                            let n = null;
                            for (let r of e) {
                                let e = r.style(t);
                                e && (n = n ? n + " " + e : e)
                            }
                            return n
                        }(s, f.tags);
                    if (p && (u && (u += " "), u += p, 1 == f.mode && (i += (i ? " " : "") + p)), this.startSpan(Math.max(t, a), u), f.opaque) return;
                    let d = e.tree && e.tree.prop(r.md.mounted);
                    if (d && d.overlay) {
                        let r = e.node.enter(d.overlay[0].from + a, 1),
                            o = this.highlighters.filter(e => !e.scope || e.scope(d.tree.type)),
                            c = e.firstChild();
                        for (let h = 0, f = a;; h++) {
                            let p = h < d.overlay.length ? d.overlay[h] : null,
                                O = p ? p.from + a : l,
                                m = Math.max(t, f),
                                g = Math.min(n, O);
                            if (m < g && c)
                                for (; e.from < g && (this.highlightRange(e, m, g, i, s), this.startSpan(Math.min(g, e.to), u), !(e.to >= O) && e.nextSibling()););
                            if (!p || O > n) break;
                            (f = p.to + a) > t && (this.highlightRange(r.cursor(), Math.max(t, p.from + a), Math.min(n, f), "", o), this.startSpan(Math.min(n, f), u))
                        }
                        c && e.parent()
                    } else if (e.firstChild()) {
                        d && (i = "");
                        do {
                            if (e.to <= t) continue;
                            if (e.from >= n) break;
                            this.highlightRange(e, t, n, i, s), this.startSpan(Math.min(n, e.to), u)
                        } while (e.nextSibling());
                        e.parent()
                    }
                }
            }
            let d = s.define,
                O = d(),
                m = d(),
                g = d(m),
                x = d(m),
                S = d(),
                y = d(S),
                b = d(S),
                v = d(),
                w = d(v),
                T = d(),
                k = d(),
                P = d(),
                Q = d(P),
                q = d(),
                $ = {
                    comment: O,
                    lineComment: d(O),
                    blockComment: d(O),
                    docComment: d(O),
                    name: m,
                    variableName: d(m),
                    typeName: g,
                    tagName: d(g),
                    propertyName: x,
                    attributeName: d(x),
                    className: d(m),
                    labelName: d(m),
                    namespace: d(m),
                    macroName: d(m),
                    literal: S,
                    string: y,
                    docString: d(y),
                    character: d(y),
                    attributeValue: d(y),
                    number: b,
                    integer: d(b),
                    float: d(b),
                    bool: d(S),
                    regexp: d(S),
                    escape: d(S),
                    color: d(S),
                    url: d(S),
                    keyword: T,
                    self: d(T),
                    null: d(T),
                    atom: d(T),
                    unit: d(T),
                    modifier: d(T),
                    operatorKeyword: d(T),
                    controlKeyword: d(T),
                    definitionKeyword: d(T),
                    moduleKeyword: d(T),
                    operator: k,
                    derefOperator: d(k),
                    arithmeticOperator: d(k),
                    logicOperator: d(k),
                    bitwiseOperator: d(k),
                    compareOperator: d(k),
                    updateOperator: d(k),
                    definitionOperator: d(k),
                    typeOperator: d(k),
                    controlOperator: d(k),
                    punctuation: P,
                    separator: d(P),
                    bracket: Q,
                    angleBracket: d(Q),
                    squareBracket: d(Q),
                    paren: d(Q),
                    brace: d(Q),
                    content: v,
                    heading: w,
                    heading1: d(w),
                    heading2: d(w),
                    heading3: d(w),
                    heading4: d(w),
                    heading5: d(w),
                    heading6: d(w),
                    contentSeparator: d(v),
                    list: d(v),
                    quote: d(v),
                    emphasis: d(v),
                    strong: d(v),
                    link: d(v),
                    monospace: d(v),
                    strikethrough: d(v),
                    inserted: d(),
                    deleted: d(),
                    changed: d(),
                    invalid: d(),
                    meta: q,
                    documentMeta: d(q),
                    annotation: d(q),
                    processingInstruction: d(q),
                    definition: s.defineModifier(),
                    constant: s.defineModifier(),
                    function: s.defineModifier(),
                    standard: s.defineModifier(),
                    local: s.defineModifier(),
                    special: s.defineModifier()
                };
            u([{
                tag: $.link,
                class: "tok-link"
            }, {
                tag: $.heading,
                class: "tok-heading"
            }, {
                tag: $.emphasis,
                class: "tok-emphasis"
            }, {
                tag: $.strong,
                class: "tok-strong"
            }, {
                tag: $.keyword,
                class: "tok-keyword"
            }, {
                tag: $.atom,
                class: "tok-atom"
            }, {
                tag: $.bool,
                class: "tok-bool"
            }, {
                tag: $.url,
                class: "tok-url"
            }, {
                tag: $.labelName,
                class: "tok-labelName"
            }, {
                tag: $.inserted,
                class: "tok-inserted"
            }, {
                tag: $.deleted,
                class: "tok-deleted"
            }, {
                tag: $.literal,
                class: "tok-literal"
            }, {
                tag: $.string,
                class: "tok-string"
            }, {
                tag: $.number,
                class: "tok-number"
            }, {
                tag: [$.regexp, $.escape, $.special($.string)],
                class: "tok-string2"
            }, {
                tag: $.variableName,
                class: "tok-variableName"
            }, {
                tag: $.local($.variableName),
                class: "tok-variableName tok-local"
            }, {
                tag: $.definition($.variableName),
                class: "tok-variableName tok-definition"
            }, {
                tag: $.special($.variableName),
                class: "tok-variableName2"
            }, {
                tag: $.definition($.propertyName),
                class: "tok-propertyName tok-definition"
            }, {
                tag: $.typeName,
                class: "tok-typeName"
            }, {
                tag: $.namespace,
                class: "tok-namespace"
            }, {
                tag: $.className,
                class: "tok-className"
            }, {
                tag: $.macroName,
                class: "tok-macroName"
            }, {
                tag: $.propertyName,
                class: "tok-propertyName"
            }, {
                tag: $.operator,
                class: "tok-operator"
            }, {
                tag: $.comment,
                class: "tok-comment"
            }, {
                tag: $.meta,
                class: "tok-meta"
            }, {
                tag: $.invalid,
                class: "tok-invalid"
            }, {
                tag: $.punctuation,
                class: "tok-punctuation"
            }])
        },
        9854: function (e, t, n) {
            n.d(t, {
                VY: function () {
                    return N
                },
                aV: function () {
                    return Z
                },
                fC: function () {
                    return I
                },
                xz: function () {
                    return G
                }
            });
            var r = n(2841),
                i = n(2564),
                s = n(7299),
                o = n(8933),
                a = n(6371),
                l = n(7634),
                c = n(7816),
                h = n(2007),
                u = n(9075),
                f = n(150),
                p = n(8136);
            let d = "rovingFocusGroup.onEntryFocus",
                O = {
                    bubbles: !1,
                    cancelable: !0
                },
                m = "RovingFocusGroup",
                [g, x, S] = (0, a.B)(m),
                [y, b] = (0, o.b)(m, [S]),
                [v, w] = y(m),
                T = (0, i.forwardRef)((e, t) => (0, i.createElement)(g.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, i.createElement)(g.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, i.createElement)(k, (0, r.Z)({}, e, {
                    ref: t
                }))))),
                k = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: o,
                        loop: a = !1,
                        dir: c,
                        currentTabStopId: m,
                        defaultCurrentTabStopId: g,
                        onCurrentTabStopIdChange: S,
                        onEntryFocus: y,
                        ...b
                    } = e, w = (0, i.useRef)(null), T = (0, l.e)(t, w), k = (0, p.gm)(c), [P = null, Q] = (0, f.T)({
                        prop: m,
                        defaultProp: g,
                        onChange: S
                    }), [$, R] = (0, i.useState)(!1), W = (0, u.W)(y), C = x(n), X = (0, i.useRef)(!1), [E, A] = (0, i.useState)(0);
                    return (0, i.useEffect)(() => {
                        let e = w.current;
                        if (e) return e.addEventListener(d, W), () => e.removeEventListener(d, W)
                    }, [W]), (0, i.createElement)(v, {
                        scope: n,
                        orientation: o,
                        dir: k,
                        loop: a,
                        currentTabStopId: P,
                        onItemFocus: (0, i.useCallback)(e => Q(e), [Q]),
                        onItemShiftTab: (0, i.useCallback)(() => R(!0), []),
                        onFocusableItemAdd: (0, i.useCallback)(() => A(e => e + 1), []),
                        onFocusableItemRemove: (0, i.useCallback)(() => A(e => e - 1), [])
                    }, (0, i.createElement)(h.WV.div, (0, r.Z)({
                        tabIndex: $ || 0 === E ? -1 : 0,
                        "data-orientation": o
                    }, b, {
                        ref: T,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, s.M)(e.onMouseDown, () => {
                            X.current = !0
                        }),
                        onFocus: (0, s.M)(e.onFocus, e => {
                            let t = !X.current;
                            if (e.target === e.currentTarget && t && !$) {
                                let t = new CustomEvent(d, O);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = C().filter(e => e.focusable),
                                        t = e.find(e => e.active),
                                        n = e.find(e => e.id === P),
                                        r = [t, n, ...e].filter(Boolean),
                                        i = r.map(e => e.ref.current);
                                    q(i)
                                }
                            }
                            X.current = !1
                        }),
                        onBlur: (0, s.M)(e.onBlur, () => R(!1))
                    })))
                }),
                P = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: o = !0,
                        active: a = !1,
                        tabStopId: l,
                        ...u
                    } = e, f = (0, c.M)(), p = l || f, d = w("RovingFocusGroupItem", n), O = d.currentTabStopId === p, m = x(n), {
                        onFocusableItemAdd: S,
                        onFocusableItemRemove: y
                    } = d;
                    return (0, i.useEffect)(() => {
                        if (o) return S(), () => y()
                    }, [o, S, y]), (0, i.createElement)(g.ItemSlot, {
                        scope: n,
                        id: p,
                        focusable: o,
                        active: a
                    }, (0, i.createElement)(h.WV.span, (0, r.Z)({
                        tabIndex: O ? 0 : -1,
                        "data-orientation": d.orientation
                    }, u, {
                        ref: t,
                        onMouseDown: (0, s.M)(e.onMouseDown, e => {
                            o ? d.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, s.M)(e.onFocus, () => d.onItemFocus(p)),
                        onKeyDown: (0, s.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                d.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function (e, t, n) {
                                var r;
                                let i = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(i)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(i))) return Q[i]
                            }(e, d.orientation, d.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let i = m().filter(e => e.focusable),
                                    s = i.map(e => e.ref.current);
                                if ("last" === t) s.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var n, r;
                                    "prev" === t && s.reverse();
                                    let i = s.indexOf(e.currentTarget);
                                    s = d.loop ? (n = s, r = i + 1, n.map((e, t) => n[(r + t) % n.length])) : s.slice(i + 1)
                                }
                                setTimeout(() => q(s))
                            }
                        })
                    })))
                }),
                Q = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function q(e) {
                let t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus(), document.activeElement !== t)) return
            }
            var $ = n(9100);
            let R = "Tabs",
                [W, C] = (0, o.b)(R, [b]),
                X = b(),
                [E, A] = W(R),
                V = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: s,
                        onValueChange: o,
                        defaultValue: a,
                        orientation: l = "horizontal",
                        dir: u,
                        activationMode: d = "automatic",
                        ...O
                    } = e, m = (0, p.gm)(u), [g, x] = (0, f.T)({
                        prop: s,
                        onChange: o,
                        defaultProp: a
                    });
                    return (0, i.createElement)(E, {
                        scope: n,
                        baseId: (0, c.M)(),
                        value: g,
                        onValueChange: x,
                        orientation: l,
                        dir: m,
                        activationMode: d
                    }, (0, i.createElement)(h.WV.div, (0, r.Z)({
                        dir: m,
                        "data-orientation": l
                    }, O, {
                        ref: t
                    })))
                }),
                Y = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        loop: s = !0,
                        ...o
                    } = e, a = A("TabsList", n), l = X(n);
                    return (0, i.createElement)(T, (0, r.Z)({
                        asChild: !0
                    }, l, {
                        orientation: a.orientation,
                        dir: a.dir,
                        loop: s
                    }), (0, i.createElement)(h.WV.div, (0, r.Z)({
                        role: "tablist",
                        "aria-orientation": a.orientation
                    }, o, {
                        ref: t
                    })))
                }),
                D = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: o,
                        disabled: a = !1,
                        ...l
                    } = e, c = A("TabsTrigger", n), u = X(n), f = M(c.baseId, o), p = _(c.baseId, o), d = o === c.value;
                    return (0, i.createElement)(P, (0, r.Z)({
                        asChild: !0
                    }, u, {
                        focusable: !a,
                        active: d
                    }), (0, i.createElement)(h.WV.button, (0, r.Z)({
                        type: "button",
                        role: "tab",
                        "aria-selected": d,
                        "aria-controls": p,
                        "data-state": d ? "active" : "inactive",
                        "data-disabled": a ? "" : void 0,
                        disabled: a,
                        id: f
                    }, l, {
                        ref: t,
                        onMouseDown: (0, s.M)(e.onMouseDown, e => {
                            a || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : c.onValueChange(o)
                        }),
                        onKeyDown: (0, s.M)(e.onKeyDown, e => {
                            [" ", "Enter"].includes(e.key) && c.onValueChange(o)
                        }),
                        onFocus: (0, s.M)(e.onFocus, () => {
                            let e = "manual" !== c.activationMode;
                            d || a || !e || c.onValueChange(o)
                        })
                    })))
                }),
                j = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: s,
                        forceMount: o,
                        children: a,
                        ...l
                    } = e, c = A("TabsContent", n), u = M(c.baseId, s), f = _(c.baseId, s), p = s === c.value, d = (0, i.useRef)(p);
                    return (0, i.useEffect)(() => {
                        let e = requestAnimationFrame(() => d.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, i.createElement)($.z, {
                        present: o || p
                    }, ({
                        present: n
                    }) => (0, i.createElement)(h.WV.div, (0, r.Z)({
                        "data-state": p ? "active" : "inactive",
                        "data-orientation": c.orientation,
                        role: "tabpanel",
                        "aria-labelledby": u,
                        hidden: !n,
                        id: f,
                        tabIndex: 0
                    }, l, {
                        ref: t,
                        style: {
                            ...e.style,
                            animationDuration: d.current ? "0s" : void 0
                        }
                    }), n && a))
                });

            function M(e, t) {
                return `${e}-trigger-${t}`
            }

            function _(e, t) {
                return `${e}-content-${t}`
            }
            let I = V,
                Z = Y,
                G = D,
                N = j
        },
        5794: function (e, t, n) {
            n.d(t, {
                V: function () {
                    return o
                }
            });
            let r = "undefined" == typeof Symbol ? "__ͼ" : Symbol.for("ͼ"),
                i = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
                s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
            class o {
                constructor(e, t) {
                    this.rules = [];
                    let {
                        finish: n
                    } = t || {};

                    function r(e) {
                        return /^@/.test(e) ? [e] : e.split(/,\s*/)
                    }
                    for (let t in e) ! function e(t, i, s, o) {
                        let a = [],
                            l = /^@(\w+)\b/.exec(t[0]),
                            c = l && "keyframes" == l[1];
                        if (l && null == i) return s.push(t[0] + ";");
                        for (let n in i) {
                            let o = i[n];
                            if (/&/.test(n)) e(n.split(/,\s*/).map(e => t.map(t => e.replace(/&/, t))).reduce((e, t) => e.concat(t)), o, s);
                            else if (o && "object" == typeof o) {
                                if (!l) throw RangeError("The value of a property (" + n + ") should be a primitive value.");
                                e(r(n), o, a, c)
                            } else null != o && a.push(n.replace(/_.*/, "").replace(/[A-Z]/g, e => "-" + e.toLowerCase()) + ": " + o + ";")
                        }(a.length || c) && s.push((!n || l || o ? t : t.map(n)).join(", ") + " {" + a.join(" ") + "}")
                    }(r(t), e[t], this.rules)
                }
                getRules() {
                    return this.rules.join("\n")
                }
                static newName() {
                    let e = s[r] || 1;
                    return s[r] = e + 1, "ͼ" + e.toString(36)
                }
                static mount(e, t) {
                    (e[i] || new l(e)).mount(Array.isArray(t) ? t : [t])
                }
            }
            let a = new Map;
            class l {
                constructor(e) {
                    let t = e.ownerDocument || e,
                        n = t.defaultView;
                    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
                        let r = a.get(t);
                        if (r) return e.adoptedStyleSheets = [r.sheet, ...e.adoptedStyleSheets], e[i] = r;
                        this.sheet = new n.CSSStyleSheet, e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], a.set(t, this)
                    } else {
                        this.styleTag = t.createElement("style");
                        let n = e.head || e;
                        n.insertBefore(this.styleTag, n.firstChild)
                    }
                    this.modules = [], e[i] = this
                }
                mount(e) {
                    let t = this.sheet,
                        n = 0,
                        r = 0;
                    for (let i = 0; i < e.length; i++) {
                        let s = e[i],
                            o = this.modules.indexOf(s);
                        if (o < r && o > -1 && (this.modules.splice(o, 1), r--, o = -1), -1 == o) {
                            if (this.modules.splice(r++, 0, s), t)
                                for (let e = 0; e < s.rules.length; e++) t.insertRule(s.rules[e], n++)
                        } else {
                            for (; r < o;) n += this.modules[r++].rules.length;
                            n += s.rules.length, r++
                        }
                    }
                    if (!t) {
                        let e = "";
                        for (let t = 0; t < this.modules.length; t++) e += this.modules[t].getRules() + "\n";
                        this.styleTag.textContent = e
                    }
                }
            }
        },
        7511: function (e, t, n) {
            n.d(t, {
                YG: function () {
                    return c
                },
                uY: function () {
                    return i
                },
                ue: function () {
                    return r
                }
            });
            for (var r = {
                    8: "Backspace",
                    9: "Tab",
                    10: "Enter",
                    12: "NumLock",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    44: "PrintScreen",
                    45: "Insert",
                    46: "Delete",
                    59: ";",
                    61: "=",
                    91: "Meta",
                    92: "Meta",
                    106: "*",
                    107: "+",
                    108: ",",
                    109: "-",
                    110: ".",
                    111: "/",
                    144: "NumLock",
                    145: "ScrollLock",
                    160: "Shift",
                    161: "Shift",
                    162: "Control",
                    163: "Control",
                    164: "Alt",
                    165: "Alt",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, i = {
                    48: ")",
                    49: "!",
                    50: "@",
                    51: "#",
                    52: "$",
                    53: "%",
                    54: "^",
                    55: "&",
                    56: "*",
                    57: "(",
                    59: ":",
                    61: "+",
                    173: "_",
                    186: ":",
                    187: "+",
                    188: "<",
                    189: "_",
                    190: ">",
                    191: "?",
                    192: "~",
                    219: "{",
                    220: "|",
                    221: "}",
                    222: '"'
                }, s = "undefined" != typeof navigator && /Mac/.test(navigator.platform), o = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), a = 0; a < 10; a++) r[48 + a] = r[96 + a] = String(a);
            for (var a = 1; a <= 24; a++) r[a + 111] = "F" + a;
            for (var a = 65; a <= 90; a++) r[a] = String.fromCharCode(a + 32), i[a] = String.fromCharCode(a);
            for (var l in r) i.hasOwnProperty(l) || (i[l] = r[l]);

            function c(e) {
                var t = !(s && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || o && e.shiftKey && e.key && 1 == e.key.length || "Unidentified" == e.key) && e.key || (e.shiftKey ? i : r)[e.keyCode] || e.key || "Unidentified";
                return "Esc" == t && (t = "Escape"), "Del" == t && (t = "Delete"), "Left" == t && (t = "ArrowLeft"), "Up" == t && (t = "ArrowUp"), "Right" == t && (t = "ArrowRight"), "Down" == t && (t = "ArrowDown"), t
            }
        }
    }
]);