"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [82], {
        7082: function (e, t, s) {
            s.r(t), s.d(t, {
                CodeEditor: function () {
                    return T
                }
            });
            var a = s(9219),
                i = s(8993),
                l = s(4096),
                n = s(8266),
                o = s(9854),
                r = s(2564),
                c = s(1962);
            let d = o.fC,
                u = r.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...i
                    } = e;
                    return (0, a.jsx)(o.aV, {
                        ref: t,
                        className: (0, c.cn)("inline-flex h-10 items-center justify-center bg-muted p-1 text-muted-foreground", s),
                        ...i
                    })
                });
            u.displayName = o.aV.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, a.jsx)(o.xz, {
                    ref: t,
                    className: (0, c.cn)("inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", s),
                    ...i
                })
            });
            f.displayName = o.xz.displayName;
            let v = r.forwardRef((e, t) => {
                let {
                    className: s,
                    ...i
                } = e;
                return (0, a.jsx)(o.VY, {
                    ref: t,
                    className: (0, c.cn)("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", s),
                    ...i
                })
            });
            v.displayName = o.VY.displayName;
            var p = s(6523),
                m = s(9187),
                x = s(6736),
                h = s(9718);
            let b = () => {
                let {
                    activeFilesStack: e,
                    setActiveFilesStack: t
                } = (0, r.useContext)(x.J), s = e => {
                    localStorage.setItem(m._.localStorage.cyobot_local_storage_active_files_stack, JSON.stringify(e.getElements()))
                };
                return (0, r.useEffect)(() => {
                    let e = localStorage.getItem(m._.localStorage.cyobot_local_storage_active_files_stack);
                    if (e) {
                        let s = JSON.parse(e);
                        t(new h.K(s))
                    }
                }, [t]), {
                    activeFilesStack: e,
                    pushActiveFile: a => {
                        e.push(a);
                        let i = new h.K(e.getElements());
                        t(i), s(i)
                    },
                    popActiveFile: () => {
                        e.pop();
                        let a = new h.K(e.getElements());
                        t(a), s(a)
                    },
                    removeActiveFile: a => {
                        e.removeById(a);
                        let i = new h.K(e.getElements());
                        t(i), s(i)
                    }
                }
            };
            var g = s(1382);
            let w = e => {
                let [t, s] = (0, r.useState)(""), [a, i] = (0, r.useState)("");
                return (0, r.useEffect)(() => {
                    let t = e.findIndex(e => "OK" === e);
                    if (-1 === t) {
                        s(""), i("");
                        return
                    }
                    let a = e.findIndex(e => "\x04" === e);
                    if (-1 === a) {
                        s(e.slice(t + 1).join("").trim());
                        return
                    }
                    let l = e.findLastIndex(e => "\x04" === e);
                    if (a === l - 1) s(e.slice(t + 1, a).join("").trim());
                    else {
                        if (-1 === l) throw "lastEndOfTransmissionIndex should not be -1 if an error occur in user code";
                        i(e.slice(a + 1, l).join("").trim())
                    }
                }, [e]), {
                    consoleOutput: t,
                    setConsoleOutput: s,
                    consoleErrorOutput: a,
                    setConsoleErrorOutput: i
                }
            };
            var y = s(1057),
                j = s(7233),
                N = s(1392),
                k = s(1927),
                C = s(1310),
                _ = s(5814),
                E = s(6078),
                S = s(3380),
                R = s(8553),
                z = s(3887),
                I = s(4898),
                O = s(8004),
                D = s(7523),
                Z = s(9439),
                P = s(5772);
            let T = () => {
                var e, t, s;
                let [o, c] = (0, r.useState)(200), [x, h] = (0, r.useState)(!1), T = (0, r.useRef)(null), [V, F] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    let e = () => {
                        T.current && F(T.current.clientHeight)
                    };
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []);
                let K = "main",
                    {
                        activeFilesStack: A,
                        popActiveFile: J,
                        pushActiveFile: L,
                        removeActiveFile: B
                    } = b(),
                    {
                        openedFiles: M,
                        removeOpenedFile: U
                    } = (0, j.O)(),
                    [G, H] = (0, r.useState)(null !== (s = null === (e = A.peek()) || void 0 === e ? void 0 : e.id) && void 0 !== s ? s : K),
                    Y = e => {
                        var t, s, a;
                        e === (null === (t = A.peek()) || void 0 === t ? void 0 : t.id) ? J() : B(e), U(e), H(null !== (a = null === (s = A.peek()) || void 0 === s ? void 0 : s.id) && void 0 !== a ? a : K)
                    },
                    $ = e => {
                        A.findById(e.id) && B(e.id), L(e), H(e.id)
                    },
                    {
                        toast: W,
                        dismiss: q
                    } = (0, _.pm)(),
                    {
                        robotIPAddress: Q
                    } = (0, C.W)(),
                    {
                        code: X,
                        setCode: ee
                    } = (0, g.h)();
                (0, r.useEffect)(() => {
                    "" === X && ee('print("hello world")')
                }, []);
                let {
                    client: et
                } = (0, N.x)(), {
                    clientResponses: es,
                    setClientResponses: ea
                } = (0, k.v)(), [ei, el] = (0, y._)(m._.localStorage.cyobot_local_storage_code_executing, !1), [en, eo] = (0, y._)(m._.localStorage.cyobot_local_storage_code_deploying, !1);
                (0, r.useEffect)(() => {
                    et.addOnMessageReceiveCallback("onMessageReceive", e => {
                        "STARTCODERUNNING" === e ? el(!0) : "ENDCODERUNNING" === e ? el(!1) : ea(t => [...t, e])
                    })
                }, [et, ea, el]);
                let {
                    consoleOutput: er,
                    consoleErrorOutput: ec
                } = w(es), ed = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    var e;
                    null === (e = ed.current) || void 0 === e || e.scrollIntoView()
                }, [er, ec]);
                let eu = (0, r.useCallback)(() => {
                        et.send(X), ea([])
                    }, [et, X, ea]),
                    ef = (0, r.useCallback)(() => {
                        et.interrupt(), el(!1)
                    }, [et, el]),
                    ev = (0, r.useCallback)(async (e, t, s) => {
                        if (en) try {
                            let a = await R.Z.post("".concat(null === Q ? "" : "http://".concat(Q), "/api/deploy"), {
                                code: e
                            }, {
                                headers: {
                                    "Content-Type": "text/plain"
                                }
                            });
                            if (200 !== a.status) throw a;
                            if ('"fail"' == a.data) {
                                t(!1), s({
                                    title: "Error: Fail to deploy",
                                    description: "Please try again",
                                    variant: "destructive"
                                });
                                return
                            }
                            s({
                                title: "Success",
                                description: "Deployed code"
                            }), t(!1)
                        } catch (e) {
                            t(!1), console.error(e), s({
                                title: "Uh oh, something went wrong...",
                                description: "Please try again",
                                variant: "destructive"
                            });
                            return
                        }
                    }, [en, Q]),
                    [ep, em] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    en && ev(X, eo, W)
                }, [X, en, ev, eo, W]), (0, a.jsxs)("div", {
                    ref: T,
                    className: "px-6 w-full h-full flex flex-col",
                    children: [(0, a.jsxs)(d, {
                        className: "h-full overflow-hidden",
                        value: G,
                        children: [(0, a.jsx)(p.k, {
                            className: "mb-2",
                            children: "Code Editor"
                        }), M.length > 0 && (0, a.jsx)(u, {
                            className: "pb-0 rounded-t-lg w-fit",
                            "aria-label": "Manage your tabs",
                            children: M.map(e => (0, a.jsxs)(f, {
                                className: "".concat(e.id === K ? "data-[state=active]:text-white text-white data-[state=active]:pb-2 data-[state=active]:pt-1 data-[state=active]:border-b-4 border-white data-[state=active]:bg-primary bg-primary/30" : "data-[state=active]:pb-4", "  transition ease-linear data-[state=active]:h-11 data-[state=active]:shadow-none data-[state=active]:relative top-1 z-10 py-2 rounded-t-md flex justify-between items-center gap-x-2"),
                                value: e.id,
                                children: [(0, a.jsx)("span", {
                                    onClick: () => $(e),
                                    className: "w-20 truncate",
                                    children: e.id
                                }), e.id !== K && (0, a.jsx)(z.Z, {
                                    className: "w-4 h-4",
                                    onClick: () => Y(e.id)
                                }), (0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close tab"
                                })]
                            }, e.id))
                        }), (0, a.jsxs)(v, {
                            className: "h-[calc(100%-28px-40px-8px)] relative",
                            value: G,
                            children: [(0, a.jsx)("div", {
                                className: "pt-1 absolute top-0 overflow-y-auto rounded-b-lg w-full h-[calc(100%-40px-12px)] bg-muted",
                                children: (0, a.jsx)(S.ZP, {
                                    editable: G === K,
                                    className: "text-lg",
                                    value: G === K ? X : null === (t = A.peek()) || void 0 === t ? void 0 : t.content,
                                    onChange: ee,
                                    extensions: [(0, E.Vs)()]
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute bottom-0 w-full flex justify-end",
                                children: (0, a.jsxs)(l.z, {
                                    className: "".concat(en || G !== K ? "cursor-not-allowed bg-muted/50 hover:bg-muted/50" : "cursor-pointer", " "),
                                    variant: "muted",
                                    onClick: () => {
                                        G === K && ee("")
                                    },
                                    children: [(0, a.jsx)(I.Z, {
                                        className: "h-4 w-4 mr-1.5"
                                    }), "Clear"]
                                })
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "relative flex flex-col",
                        children: [(0, a.jsx)(p.k, {
                            className: "mb-2",
                            children: "Console"
                        }), (0, a.jsx)(P.Resizable, {
                            handle: (0, a.jsx)("span", {
                                className: "absolute left-0 top-0 z-50 w-full h-2 cursor-row-resize ".concat(x ? "bg-secondary" : "", "  rounded-lg")
                            }),
                            axis: "y",
                            height: o,
                            onResizeStart: () => {
                                h(!0)
                            },
                            onResize: (e, t) => {
                                c(t.size.height)
                            },
                            onResizeStop: () => {
                                h(!1)
                            },
                            resizeHandles: ["n"],
                            maxConstraints: [0, V - 28 - 8],
                            children: (0, a.jsxs)("div", {
                                className: "relative w-full bg-muted px-4 py-2 whitespace-pre-line font-mono rounded-lg overflow-y-auto",
                                style: {
                                    height: o
                                },
                                children: [(0, a.jsx)("div", {
                                    className: "text-primary",
                                    children: er
                                }), (0, a.jsx)("div", {
                                    className: "text-destructive",
                                    children: ec
                                }), (0, a.jsx)("div", {
                                    ref: ed
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "absolute -bottom-12 w-full flex flex-row justify-end space-x-4",
                            children: [(0, a.jsxs)(l.z, {
                                variant: "destructive",
                                className: "text-background ".concat(en || G !== K ? "cursor-not-allowed hover:bg-destructive/50 bg-destructive/50" : "bg-destructive"),
                                onClick: () => {
                                    if (G === K) {
                                        if ("connected" !== et.status) {
                                            W({
                                                title: "Robot is not connected",
                                                description: "Please connect your robot to break",
                                                variant: "destructive"
                                            });
                                            return
                                        }
                                        ef()
                                    }
                                },
                                children: [(0, a.jsx)(O.Z, {
                                    className: "h-4 w-4 mr-1.5"
                                }), "Break"]
                            }), (0, a.jsxs)(l.z, {
                                variant: "positive",
                                className: "".concat(ei || en || G !== K ? "bg-positive/30 hover:bg-positive/30 backdrop-blur-md cursor-not-allowed" : "text-primary cursor-pointer"),
                                onClick: () => {
                                    en || ei || G !== K || ("connected" !== et.status ? W({
                                        title: "Robot is not connected",
                                        description: "Please connect your robot to run",
                                        variant: "destructive"
                                    }) : (q(), eu()))
                                },
                                children: [ei ? (0, a.jsx)(n.$, {
                                    className: "h-4 w-4 mr-1.5"
                                }) : (0, a.jsx)(D.Z, {
                                    className: "h-4 w-4 mr-1.5"
                                }), "Run"]
                            }), (0, a.jsxs)(l.z, {
                                variant: "secondary",
                                className: "".concat(en || ei || G !== K ? "bg-secondary/50 hover:bg-secondary/50 backdrop-blur-md cursor-not-allowed" : "cursor-pointer"),
                                onClick: () => {
                                    en || ei || G !== K || ("connected" !== et.status ? W({
                                        title: "Robot is not connected",
                                        description: "Please connect your robot to deploy",
                                        variant: "destructive"
                                    }) : (q(), em(!0)))
                                },
                                children: [(0, a.jsx)(Z.Z, {
                                    className: "h-4 w-4 mr-1.5"
                                }), "Deploy"]
                            })]
                        })]
                    }), (0, a.jsx)(i.aR, {
                        open: ep,
                        onOpenChange: em,
                        children: (0, a.jsxs)(i.zJ, {
                            children: [(0, a.jsx)(i.dh, {}), (0, a.jsxs)(i._T, {
                                children: [(0, a.jsx)(i.f$, {
                                    children: "Confirm Code Deployment"
                                }), (0, a.jsx)(i.yT, {
                                    children: "Deploying this code will overwrite the portal feature. Do you want to continue?"
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-end gap-4",
                                    children: [(0, a.jsx)(i.le, {
                                        onClick: () => {
                                            eo(!1)
                                        },
                                        children: "Cancel"
                                    }), (0, a.jsx)(i.OL, {
                                        onClick: () => {
                                            eo(!0)
                                        },
                                        children: "Confirm"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    }
]);