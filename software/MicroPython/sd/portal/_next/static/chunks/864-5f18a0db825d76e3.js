(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [864], {
        4589: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            var r = n(551);
            /**
             * @license lucide-react v0.294.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let o = (0, r.Z)("Dot", [
                ["circle", {
                    cx: "12.1",
                    cy: "12.1",
                    r: "1",
                    key: "18d7e5"
                }]
            ])
        },
        2813: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return y
                }
            });
            let r = n(9944),
                o = n(4493),
                i = o._(n(2564)),
                a = r._(n(7830)),
                l = n(5738),
                s = n(3761),
                u = n(1998);
            n(5813);
            let d = r._(n(6008)),
                c = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function f(e) {
                return void 0 !== e.default
            }

            function p(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function m(e, t, n, r, o, i, a) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let l = "decode" in e ? e.decode() : Promise.resolve();
                l.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("blur" === n && i(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                o = !1;
                            r.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == o ? void 0 : o.current) && o.current(e)
                    }
                })
            }

            function v(e) {
                let [t, n] = i.version.split("."), r = parseInt(t, 10), o = parseInt(n, 10);
                return r > 18 || 18 === r && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let w = (0, i.forwardRef)((e, t) => {
                    let {
                        imgAttributes: n,
                        heightInt: r,
                        widthInt: o,
                        qualityInt: a,
                        className: l,
                        imgStyle: s,
                        blurStyle: u,
                        isLazy: d,
                        fetchPriority: c,
                        fill: f,
                        placeholder: p,
                        loading: w,
                        srcString: g,
                        config: y,
                        unoptimized: E,
                        loader: h,
                        onLoadRef: b,
                        onLoadingCompleteRef: C,
                        setBlurComplete: T,
                        setShowAltText: x,
                        onLoad: P,
                        onError: _,
                        ...S
                    } = e;
                    return w = d ? "lazy" : w, i.default.createElement("img", {
                        ...S,
                        ...v(c),
                        loading: w,
                        width: o,
                        height: r,
                        decoding: "async",
                        "data-nimg": f ? "fill" : "1",
                        className: l,
                        style: {
                            ...s,
                            ...u
                        },
                        ...n,
                        ref: (0, i.useCallback)(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (_ && (e.src = e.src), e.complete && m(e, g, p, b, C, T, E))
                        }, [g, p, b, C, T, _, E, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            m(t, g, p, b, C, T, E)
                        },
                        onError: e => {
                            x(!0), "blur" === p && T(!0), _ && _(e)
                        }
                    })
                }),
                g = (0, i.forwardRef)((e, t) => {
                    var n;
                    let r, o, {
                            src: m,
                            sizes: g,
                            unoptimized: y = !1,
                            priority: E = !1,
                            loading: h,
                            className: b,
                            quality: C,
                            width: T,
                            height: x,
                            fill: P,
                            style: _,
                            onLoad: S,
                            onLoadingComplete: R,
                            placeholder: M = "empty",
                            blurDataURL: O,
                            fetchPriority: D,
                            layout: k,
                            objectFit: L,
                            objectPosition: j,
                            lazyBoundary: F,
                            lazyRoot: I,
                            ...A
                        } = e,
                        W = (0, i.useContext)(u.ImageConfigContext),
                        N = (0, i.useMemo)(() => {
                            let e = c || W || s.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                n = e.deviceSizes.sort((e, t) => e - t);
                            return {
                                ...e,
                                allSizes: t,
                                deviceSizes: n
                            }
                        }, [W]),
                        z = A.loader || d.default;
                    delete A.loader;
                    let V = "__next_img_default" in z;
                    if (V) {
                        if ("custom" === N.loader) throw Error('Image with src "' + m + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                    } else {
                        let e = z;
                        z = t => {
                            let {
                                config: n,
                                ...r
                            } = t;
                            return e(r)
                        }
                    }
                    if (k) {
                        "fill" === k && (P = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        } [k];
                        e && (_ = {
                            ..._,
                            ...e
                        });
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        } [k];
                        t && !g && (g = t)
                    }
                    let K = "",
                        U = p(T),
                        Z = p(x);
                    if ("object" == typeof (n = m) && (f(n) || void 0 !== n.src)) {
                        let e = f(m) ? m.default : m;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                        if (r = e.blurWidth, o = e.blurHeight, O = O || e.blurDataURL, K = e.src, !P) {
                            if (U || Z) {
                                if (U && !Z) {
                                    let t = U / e.width;
                                    Z = Math.round(e.height * t)
                                } else if (!U && Z) {
                                    let t = Z / e.height;
                                    U = Math.round(e.width * t)
                                }
                            } else U = e.width, Z = e.height
                        }
                    }
                    let B = !E && ("lazy" === h || void 0 === h);
                    (!(m = "string" == typeof m ? m : K) || m.startsWith("data:") || m.startsWith("blob:")) && (y = !0, B = !1), N.unoptimized && (y = !0), V && m.endsWith(".svg") && !N.dangerouslyAllowSVG && (y = !0), E && (D = "high");
                    let [$, H] = (0, i.useState)(!1), [q, G] = (0, i.useState)(!1), Y = p(C), X = Object.assign(P ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: L,
                        objectPosition: j
                    } : {}, q ? {} : {
                        color: "transparent"
                    }, _), J = "blur" === M && O && !$ ? {
                        backgroundSize: X.objectFit || "cover",
                        backgroundPosition: X.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, l.getImageBlurSvg)({
                            widthInt: U,
                            heightInt: Z,
                            blurWidth: r,
                            blurHeight: o,
                            blurDataURL: O,
                            objectFit: X.objectFit
                        }) + '")'
                    } : {}, Q = function (e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: i,
                            sizes: a,
                            loader: l
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: s,
                            kind: u
                        } = function (e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let i = [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))];
                            return {
                                widths: i,
                                kind: "x"
                            }
                        }(t, o, a), d = s.length - 1;
                        return {
                            sizes: a || "w" !== u ? a : "100vw",
                            srcSet: s.map((e, r) => l({
                                config: t,
                                src: n,
                                quality: i,
                                width: e
                            }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: i,
                                width: s[d]
                            })
                        }
                    }({
                        config: N,
                        src: m,
                        unoptimized: y,
                        width: U,
                        quality: Y,
                        sizes: g,
                        loader: z
                    }), ee = m, et = (0, i.useRef)(S);
                    (0, i.useEffect)(() => {
                        et.current = S
                    }, [S]);
                    let en = (0, i.useRef)(R);
                    (0, i.useEffect)(() => {
                        en.current = R
                    }, [R]);
                    let er = {
                        isLazy: B,
                        imgAttributes: Q,
                        heightInt: Z,
                        widthInt: U,
                        qualityInt: Y,
                        className: b,
                        imgStyle: X,
                        blurStyle: J,
                        loading: h,
                        config: N,
                        fetchPriority: D,
                        fill: P,
                        unoptimized: y,
                        placeholder: M,
                        loader: z,
                        srcString: ee,
                        onLoadRef: et,
                        onLoadingCompleteRef: en,
                        setBlurComplete: H,
                        setShowAltText: G,
                        ...A
                    };
                    return i.default.createElement(i.default.Fragment, null, i.default.createElement(w, {
                        ...er,
                        ref: t
                    }), E ? i.default.createElement(a.default, null, i.default.createElement("link", {
                        key: "__nimg-" + Q.src + Q.srcSet + Q.sizes,
                        rel: "preload",
                        as: "image",
                        href: Q.srcSet ? void 0 : Q.src,
                        imageSrcSet: Q.srcSet,
                        imageSizes: Q.sizes,
                        crossOrigin: A.crossOrigin,
                        referrerPolicy: A.referrerPolicy,
                        ...v(D)
                    })) : null)
                }),
                y = g;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6658: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let r = n(9944),
                o = r._(n(2564)),
                i = o.default.createContext({})
        },
        1069: function (e, t) {
            "use strict";

            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function () {
                    return n
                }
            })
        },
        7830: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function () {
                        return d
                    },
                    default: function () {
                        return m
                    }
                });
            let r = n(9944),
                o = n(4493),
                i = o._(n(2564)),
                a = r._(n(566)),
                l = n(6658),
                s = n(829),
                u = n(1069);

            function d(e) {
                void 0 === e && (e = !1);
                let t = [i.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(i.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function c(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(5813);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(c, []).reverse().concat(d(n).reverse()).filter(function () {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return o => {
                        let i = !0,
                            a = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            a = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? i = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = f.length; e < t; e++) {
                                    let t = f[e];
                                    if (o.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? i = !1 : n.add(t);
                                        else {
                                            let e = o.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !a) && n.has(e) ? i = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return i
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = {
                            ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, i.default.cloneElement(e, t)
                    }
                    return i.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let m = function (e) {
                let {
                    children: t
                } = e, n = (0, i.useContext)(l.AmpStateContext), r = (0, i.useContext)(s.HeadManagerContext);
                return i.default.createElement(a.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5738: function (e, t) {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: a
                } = e, l = r || t, s = o || n, u = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return l && s ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + l + " " + s + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (r && o ? "1" : "20") + "'/%3E" + u + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + i + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + i + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return n
                }
            })
        },
        1998: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
            let r = n(9944),
                o = r._(n(2564)),
                i = n(3761),
                a = o.default.createContext(i.imageConfigDefault)
        },
        6008: function (e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        566: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function () {
                    return l
                }
            });
            let r = n(4493),
                o = r._(n(2564)),
                i = o.useLayoutEffect,
                a = o.useEffect;

            function l(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function r() {
                    if (t && t.mountedInstances) {
                        let r = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(r, e))
                    }
                }
                return i(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = r), () => {
                    t && (t._pendingUpdate = r)
                })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        5813: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
            let n = e => {}
        },
        7659: function (e, t, n) {
            e.exports = n(2813)
        },
        4465: function (e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                aU: function () {
                    return eo
                },
                x8: function () {
                    return ei
                },
                dk: function () {
                    return er
                },
                zt: function () {
                    return Q
                },
                fC: function () {
                    return et
                },
                Dx: function () {
                    return en
                },
                l_: function () {
                    return ee
                }
            });
            var o = n(2841),
                i = n(2564),
                a = n(7242),
                l = n(7299),
                s = n(7634),
                u = n(6371),
                d = n(8933),
                c = n(2007),
                f = n(9075),
                p = n(1166);
            let m = "dismissableLayer.update",
                v = (0, i.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                w = (0, i.forwardRef)((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: a = !1,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: d,
                        onFocusOutside: w,
                        onInteractOutside: g,
                        onDismiss: h,
                        ...b
                    } = e, C = (0, i.useContext)(v), [T, x] = (0, i.useState)(null), P = null !== (n = null == T ? void 0 : T.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, _] = (0, i.useState)({}), S = (0, s.e)(t, e => x(e)), R = Array.from(C.layers), [M] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1), O = R.indexOf(M), D = T ? R.indexOf(T) : -1, k = C.layersWithOutsidePointerEventsDisabled.size > 0, L = D >= O, j = function (e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, f.W)(e),
                            r = (0, i.useRef)(!1),
                            o = (0, i.useRef)(() => {});
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };

                                        function i() {
                                            E("dismissableLayer.pointerDownOutside", n, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : i()
                                    }
                                    r.current = !1
                                },
                                i = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...C.branches].some(e => e.contains(t));
                        !L || n || (null == d || d(e), null == g || g(e), e.defaultPrevented || null == h || h())
                    }, P), F = function (e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, f.W)(e),
                            r = (0, i.useRef)(!1);
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && E("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...C.branches].some(e => e.contains(t));
                        n || (null == w || w(e), null == g || g(e), e.defaultPrevented || null == h || h())
                    }, P);
                    return (0, p.e)(e => {
                        let t = D === C.layers.size - 1;
                        t && (null == u || u(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
                    }, P), (0, i.useEffect)(() => {
                        if (T) return a && (0 === C.layersWithOutsidePointerEventsDisabled.size && (r = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), C.layersWithOutsidePointerEventsDisabled.add(T)), C.layers.add(T), y(), () => {
                            a && 1 === C.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = r)
                        }
                    }, [T, P, a, C]), (0, i.useEffect)(() => () => {
                        T && (C.layers.delete(T), C.layersWithOutsidePointerEventsDisabled.delete(T), y())
                    }, [T, C]), (0, i.useEffect)(() => {
                        let e = () => _({});
                        return document.addEventListener(m, e), () => document.removeEventListener(m, e)
                    }, []), (0, i.createElement)(c.WV.div, (0, o.Z)({}, b, {
                        ref: S,
                        style: {
                            pointerEvents: k ? L ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, l.M)(e.onFocusCapture, F.onFocusCapture),
                        onBlurCapture: (0, l.M)(e.onBlurCapture, F.onBlurCapture),
                        onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, j.onPointerDownCapture)
                    }))
                }),
                g = (0, i.forwardRef)((e, t) => {
                    let n = (0, i.useContext)(v),
                        r = (0, i.useRef)(null),
                        a = (0, s.e)(t, r);
                    return (0, i.useEffect)(() => {
                        let e = r.current;
                        if (e) return n.branches.add(e), () => {
                            n.branches.delete(e)
                        }
                    }, [n.branches]), (0, i.createElement)(c.WV.div, (0, o.Z)({}, e, {
                        ref: a
                    }))
                });

            function y() {
                let e = new CustomEvent(m);
                document.dispatchEvent(e)
            }

            function E(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, c.jH)(o, i) : o.dispatchEvent(i)
            }
            let h = (0, i.forwardRef)((e, t) => {
                var n;
                let {
                    container: r = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                    ...l
                } = e;
                return r ? a.createPortal((0, i.createElement)(c.WV.div, (0, o.Z)({}, l, {
                    ref: t
                })), r) : null
            });
            var b = n(9100),
                C = n(150),
                T = n(8954),
                x = n(8499);
            let P = "ToastProvider",
                [_, S, R] = (0, u.B)("Toast"),
                [M, O] = (0, d.b)("Toast", [R]),
                [D, k] = M(P),
                L = e => {
                    let {
                        __scopeToast: t,
                        label: n = "Notification",
                        duration: r = 5e3,
                        swipeDirection: o = "right",
                        swipeThreshold: a = 50,
                        children: l
                    } = e, [s, u] = (0, i.useState)(null), [d, c] = (0, i.useState)(0), f = (0, i.useRef)(!1), p = (0, i.useRef)(!1);
                    return (0, i.createElement)(_.Provider, {
                        scope: t
                    }, (0, i.createElement)(D, {
                        scope: t,
                        label: n,
                        duration: r,
                        swipeDirection: o,
                        swipeThreshold: a,
                        toastCount: d,
                        viewport: s,
                        onViewportChange: u,
                        onToastAdd: (0, i.useCallback)(() => c(e => e + 1), []),
                        onToastRemove: (0, i.useCallback)(() => c(e => e - 1), []),
                        isFocusedToastEscapeKeyDownRef: f,
                        isClosePausedRef: p
                    }, l))
                };
            L.propTypes = {
                label(e) {
                    if (e.label && "string" == typeof e.label && !e.label.trim()) {
                        let e = `Invalid prop \`label\` supplied to \`${P}\`. Expected non-empty \`string\`.`;
                        return Error(e)
                    }
                    return null
                }
            };
            let j = ["F8"],
                F = "toast.viewportPause",
                I = "toast.viewportResume",
                A = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        hotkey: r = j,
                        label: a = "Notifications ({hotkey})",
                        ...l
                    } = e, u = k("ToastViewport", n), d = S(n), f = (0, i.useRef)(null), p = (0, i.useRef)(null), m = (0, i.useRef)(null), v = (0, i.useRef)(null), w = (0, s.e)(t, v, u.onViewportChange), y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), E = u.toastCount > 0;
                    (0, i.useEffect)(() => {
                        let e = e => {
                            var t;
                            let n = r.every(t => e[t] || e.code === t);
                            n && (null === (t = v.current) || void 0 === t || t.focus())
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, [r]), (0, i.useEffect)(() => {
                        let e = f.current,
                            t = v.current;
                        if (E && e && t) {
                            let n = () => {
                                    if (!u.isClosePausedRef.current) {
                                        let e = new CustomEvent(F);
                                        t.dispatchEvent(e), u.isClosePausedRef.current = !0
                                    }
                                },
                                r = () => {
                                    if (u.isClosePausedRef.current) {
                                        let e = new CustomEvent(I);
                                        t.dispatchEvent(e), u.isClosePausedRef.current = !1
                                    }
                                },
                                o = t => {
                                    let n = !e.contains(t.relatedTarget);
                                    n && r()
                                },
                                i = () => {
                                    let t = e.contains(document.activeElement);
                                    t || r()
                                };
                            return e.addEventListener("focusin", n), e.addEventListener("focusout", o), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", i), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
                                e.removeEventListener("focusin", n), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", n), window.removeEventListener("focus", r)
                            }
                        }
                    }, [E, u.isClosePausedRef]);
                    let h = (0, i.useCallback)(({
                        tabbingDirection: e
                    }) => {
                        let t = d(),
                            n = t.map(t => {
                                let n = t.ref.current,
                                    r = [n, ... function (e) {
                                        let t = [],
                                            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                                acceptNode: e => {
                                                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                                                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                                                }
                                            });
                                        for (; n.nextNode();) t.push(n.currentNode);
                                        return t
                                    }(n)];
                                return "forwards" === e ? r : r.reverse()
                            });
                        return ("forwards" === e ? n.reverse() : n).flat()
                    }, [d]);
                    return (0, i.useEffect)(() => {
                        let e = v.current;
                        if (e) {
                            let t = t => {
                                let n = t.altKey || t.ctrlKey || t.metaKey,
                                    r = "Tab" === t.key && !n;
                                if (r) {
                                    var o, i, a;
                                    let n = document.activeElement,
                                        r = t.shiftKey,
                                        l = t.target === e;
                                    if (l && r) {
                                        null === (o = p.current) || void 0 === o || o.focus();
                                        return
                                    }
                                    let s = h({
                                            tabbingDirection: r ? "backwards" : "forwards"
                                        }),
                                        u = s.findIndex(e => e === n);
                                    J(s.slice(u + 1)) ? t.preventDefault() : r ? null === (i = p.current) || void 0 === i || i.focus() : null === (a = m.current) || void 0 === a || a.focus()
                                }
                            };
                            return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
                        }
                    }, [d, h]), (0, i.createElement)(g, {
                        ref: f,
                        role: "region",
                        "aria-label": a.replace("{hotkey}", y),
                        tabIndex: -1,
                        style: {
                            pointerEvents: E ? void 0 : "none"
                        }
                    }, E && (0, i.createElement)(W, {
                        ref: p,
                        onFocusFromOutsideViewport: () => {
                            let e = h({
                                tabbingDirection: "forwards"
                            });
                            J(e)
                        }
                    }), (0, i.createElement)(_.Slot, {
                        scope: n
                    }, (0, i.createElement)(c.WV.ol, (0, o.Z)({
                        tabIndex: -1
                    }, l, {
                        ref: w
                    }))), E && (0, i.createElement)(W, {
                        ref: m,
                        onFocusFromOutsideViewport: () => {
                            let e = h({
                                tabbingDirection: "backwards"
                            });
                            J(e)
                        }
                    }))
                }),
                W = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        onFocusFromOutsideViewport: r,
                        ...a
                    } = e, l = k("ToastFocusProxy", n);
                    return (0, i.createElement)(x.T, (0, o.Z)({
                        "aria-hidden": !0,
                        tabIndex: 0
                    }, a, {
                        ref: t,
                        style: {
                            position: "fixed"
                        },
                        onFocus: e => {
                            var t;
                            let n = e.relatedTarget,
                                o = !(null !== (t = l.viewport) && void 0 !== t && t.contains(n));
                            o && r()
                        }
                    }))
                }),
                N = "Toast",
                z = (0, i.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        open: r,
                        defaultOpen: a,
                        onOpenChange: s,
                        ...u
                    } = e, [d = !0, c] = (0, C.T)({
                        prop: r,
                        defaultProp: a,
                        onChange: s
                    });
                    return (0, i.createElement)(b.z, {
                        present: n || d
                    }, (0, i.createElement)(U, (0, o.Z)({
                        open: d
                    }, u, {
                        ref: t,
                        onClose: () => c(!1),
                        onPause: (0, f.W)(e.onPause),
                        onResume: (0, f.W)(e.onResume),
                        onSwipeStart: (0, l.M)(e.onSwipeStart, e => {
                            e.currentTarget.setAttribute("data-swipe", "start")
                        }),
                        onSwipeMove: (0, l.M)(e.onSwipeMove, e => {
                            let {
                                x: t,
                                y: n
                            } = e.detail.delta;
                            e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
                        }),
                        onSwipeCancel: (0, l.M)(e.onSwipeCancel, e => {
                            e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                        }),
                        onSwipeEnd: (0, l.M)(e.onSwipeEnd, e => {
                            let {
                                x: t,
                                y: n
                            } = e.detail.delta;
                            e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), c(!1)
                        })
                    })))
                }),
                [V, K] = M(N, {
                    onClose() {}
                }),
                U = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        type: r = "foreground",
                        duration: u,
                        open: d,
                        onClose: p,
                        onEscapeKeyDown: m,
                        onPause: v,
                        onResume: g,
                        onSwipeStart: y,
                        onSwipeMove: E,
                        onSwipeCancel: h,
                        onSwipeEnd: b,
                        ...C
                    } = e, T = k(N, n), [x, P] = (0, i.useState)(null), S = (0, s.e)(t, e => P(e)), R = (0, i.useRef)(null), M = (0, i.useRef)(null), O = u || T.duration, D = (0, i.useRef)(0), L = (0, i.useRef)(O), j = (0, i.useRef)(0), {
                        onToastAdd: A,
                        onToastRemove: W
                    } = T, z = (0, f.W)(() => {
                        var e;
                        let t = null == x ? void 0 : x.contains(document.activeElement);
                        t && (null === (e = T.viewport) || void 0 === e || e.focus()), p()
                    }), K = (0, i.useCallback)(e => {
                        e && e !== 1 / 0 && (window.clearTimeout(j.current), D.current = new Date().getTime(), j.current = window.setTimeout(z, e))
                    }, [z]);
                    (0, i.useEffect)(() => {
                        let e = T.viewport;
                        if (e) {
                            let t = () => {
                                    K(L.current), null == g || g()
                                },
                                n = () => {
                                    let e = new Date().getTime() - D.current;
                                    L.current = L.current - e, window.clearTimeout(j.current), null == v || v()
                                };
                            return e.addEventListener(F, n), e.addEventListener(I, t), () => {
                                e.removeEventListener(F, n), e.removeEventListener(I, t)
                            }
                        }
                    }, [T.viewport, O, v, g, K]), (0, i.useEffect)(() => {
                        d && !T.isClosePausedRef.current && K(O)
                    }, [d, O, T.isClosePausedRef, K]), (0, i.useEffect)(() => (A(), () => W()), [A, W]);
                    let U = (0, i.useMemo)(() => x ? function e(t) {
                        let n = [],
                            r = Array.from(t.childNodes);
                        return r.forEach(t => {
                            if (t.nodeType === t.TEXT_NODE && t.textContent && n.push(t.textContent), t.nodeType === t.ELEMENT_NODE) {
                                let r = t.ariaHidden || t.hidden || "none" === t.style.display,
                                    o = "" === t.dataset.radixToastAnnounceExclude;
                                if (!r) {
                                    if (o) {
                                        let e = t.dataset.radixToastAnnounceAlt;
                                        e && n.push(e)
                                    } else n.push(...e(t))
                                }
                            }
                        }), n
                    }(x) : null, [x]);
                    return T.viewport ? (0, i.createElement)(i.Fragment, null, U && (0, i.createElement)(Z, {
                        __scopeToast: n,
                        role: "status",
                        "aria-live": "foreground" === r ? "assertive" : "polite",
                        "aria-atomic": !0
                    }, U), (0, i.createElement)(V, {
                        scope: n,
                        onClose: z
                    }, (0, a.createPortal)((0, i.createElement)(_.ItemSlot, {
                        scope: n
                    }, (0, i.createElement)(w, {
                        asChild: !0,
                        onEscapeKeyDown: (0, l.M)(m, () => {
                            T.isFocusedToastEscapeKeyDownRef.current || z(), T.isFocusedToastEscapeKeyDownRef.current = !1
                        })
                    }, (0, i.createElement)(c.WV.li, (0, o.Z)({
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": d ? "open" : "closed",
                        "data-swipe-direction": T.swipeDirection
                    }, C, {
                        ref: S,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            "Escape" !== e.key || (null == m || m(e.nativeEvent), e.nativeEvent.defaultPrevented || (T.isFocusedToastEscapeKeyDownRef.current = !0, z()))
                        }),
                        onPointerDown: (0, l.M)(e.onPointerDown, e => {
                            0 === e.button && (R.current = {
                                x: e.clientX,
                                y: e.clientY
                            })
                        }),
                        onPointerMove: (0, l.M)(e.onPointerMove, e => {
                            if (!R.current) return;
                            let t = e.clientX - R.current.x,
                                n = e.clientY - R.current.y,
                                r = !!M.current,
                                o = ["left", "right"].includes(T.swipeDirection),
                                i = ["left", "up"].includes(T.swipeDirection) ? Math.min : Math.max,
                                a = o ? i(0, t) : 0,
                                l = o ? 0 : i(0, n),
                                s = "touch" === e.pointerType ? 10 : 2,
                                u = {
                                    x: a,
                                    y: l
                                },
                                d = {
                                    originalEvent: e,
                                    delta: u
                                };
                            r ? (M.current = u, Y("toast.swipeMove", E, d, {
                                discrete: !1
                            })) : X(u, T.swipeDirection, s) ? (M.current = u, Y("toast.swipeStart", y, d, {
                                discrete: !1
                            }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > s || Math.abs(n) > s) && (R.current = null)
                        }),
                        onPointerUp: (0, l.M)(e.onPointerUp, e => {
                            let t = M.current,
                                n = e.target;
                            if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), M.current = null, R.current = null, t) {
                                let n = e.currentTarget,
                                    r = {
                                        originalEvent: e,
                                        delta: t
                                    };
                                X(t, T.swipeDirection, T.swipeThreshold) ? Y("toast.swipeEnd", b, r, {
                                    discrete: !0
                                }) : Y("toast.swipeCancel", h, r, {
                                    discrete: !0
                                }), n.addEventListener("click", e => e.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })))), T.viewport))) : null
                });
            U.propTypes = {
                type(e) {
                    if (e.type && !["foreground", "background"].includes(e.type)) {
                        let e = `Invalid prop \`type\` supplied to \`${N}\`. Expected \`foreground | background\`.`;
                        return Error(e)
                    }
                    return null
                }
            };
            let Z = e => {
                    let {
                        __scopeToast: t,
                        children: n,
                        ...r
                    } = e, o = k(N, t), [a, l] = (0, i.useState)(!1), [s, u] = (0, i.useState)(!1);
                    return function (e = () => {}) {
                        let t = (0, f.W)(e);
                        (0, T.b)(() => {
                            let e = 0,
                                n = 0;
                            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
                                window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
                            }
                        }, [t])
                    }(() => l(!0)), (0, i.useEffect)(() => {
                        let e = window.setTimeout(() => u(!0), 1e3);
                        return () => window.clearTimeout(e)
                    }, []), s ? null : (0, i.createElement)(h, {
                        asChild: !0
                    }, (0, i.createElement)(x.T, r, a && (0, i.createElement)(i.Fragment, null, o.label, " ", n)))
                },
                B = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        ...r
                    } = e;
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({}, r, {
                        ref: t
                    }))
                }),
                $ = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        ...r
                    } = e;
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({}, r, {
                        ref: t
                    }))
                }),
                H = (0, i.forwardRef)((e, t) => {
                    let {
                        altText: n,
                        ...r
                    } = e;
                    return n ? (0, i.createElement)(G, {
                        altText: n,
                        asChild: !0
                    }, (0, i.createElement)(q, (0, o.Z)({}, r, {
                        ref: t
                    }))) : null
                });
            H.propTypes = {
                altText: e => e.altText ? null : Error("Missing prop `altText` expected on `ToastAction`")
            };
            let q = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        ...r
                    } = e, a = K("ToastClose", n);
                    return (0, i.createElement)(G, {
                        asChild: !0
                    }, (0, i.createElement)(c.WV.button, (0, o.Z)({
                        type: "button"
                    }, r, {
                        ref: t,
                        onClick: (0, l.M)(e.onClick, a.onClose)
                    })))
                }),
                G = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeToast: n,
                        altText: r,
                        ...a
                    } = e;
                    return (0, i.createElement)(c.WV.div, (0, o.Z)({
                        "data-radix-toast-announce-exclude": "",
                        "data-radix-toast-announce-alt": r || void 0
                    }, a, {
                        ref: t
                    }))
                });

            function Y(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.currentTarget,
                    i = new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, c.jH)(o, i) : o.dispatchEvent(i)
            }
            let X = (e, t, n = 0) => {
                let r = Math.abs(e.x),
                    o = Math.abs(e.y),
                    i = r > o;
                return "left" === t || "right" === t ? i && r > n : !i && o > n
            };

            function J(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }
            let Q = L,
                ee = A,
                et = z,
                en = B,
                er = $,
                eo = H,
                ei = q
        }
    }
]);