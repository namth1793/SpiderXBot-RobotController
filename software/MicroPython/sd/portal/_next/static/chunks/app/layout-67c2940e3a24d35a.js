(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        8084: function (e, t, r) {
            Promise.resolve().then(r.bind(r, 9963)), Promise.resolve().then(r.bind(r, 2566)), Promise.resolve().then(r.bind(r, 1024)), Promise.resolve().then(r.bind(r, 5548)), Promise.resolve().then(r.bind(r, 6945)), Promise.resolve().then(r.bind(r, 8386)), Promise.resolve().then(r.bind(r, 2368)), Promise.resolve().then(r.bind(r, 6016)), Promise.resolve().then(r.bind(r, 4514)), Promise.resolve().then(r.bind(r, 1600)), Promise.resolve().then(r.bind(r, 230)), Promise.resolve().then(r.t.bind(r, 4986, 23))
        },
        230: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Nav: function () {
                    return w
                }
            });
            var s = r(9219),
                n = r(7659),
                i = r.n(n);
            let o = () => (0, s.jsx)(i(), {
                    alt: "logo",
                    src: "./_next/logo.svg",
                    width: 178,
                    height: 32
                }),
                a = e => {
                    let {
                        height: t,
                        width: r,
                        className: n
                    } = e;
                    return (0, s.jsx)(i(), {
                        alt: "wifi",
                        src: "./_next/icons/wifi.png",
                        className: n,
                        height: t,
                        width: r
                    })
                };
            var l = r(1891),
                d = r(7501),
                c = r(2145);
            let u = () => {
                    let {
                        status: e
                    } = (0, d.c)();
                    return "connected" === e ? (0, s.jsx)("span", {
                        className: "text-positive",
                        children: "Connected"
                    }) : "disconnected" === e ? (0, s.jsx)("span", {
                        className: "text-destructive",
                        children: "Disconnected"
                    }) : null
                },
                f = () => {
                    let {
                        setOpen: e
                    } = (0, c.K)();
                    return (0, s.jsx)("button", {
                        onClick: () => e(!0),
                        children: (0, s.jsxs)(l.B, {
                            className: "text-primary-foreground flex justify-start items-center",
                            children: [(0, s.jsx)(a, {
                                className: "mr-2 p-0.5",
                                height: 32,
                                width: 32
                            }), (0, s.jsx)(u, {})]
                        })
                    })
                },
                m = e => {
                    let {
                        height: t,
                        width: r,
                        className: n
                    } = e;
                    return (0, s.jsx)(i(), {
                        alt: "robot",
                        src: "./_next/icons/robot.png",
                        className: n,
                        height: t,
                        width: r
                    })
                };
            var x = r(4589),
                v = r(2564);
            let p = e => {
                let {
                    numDots: t,
                    delayMs: r
                } = e, [n, i] = (0, v.useState)(1);
                return (0, v.useEffect)(() => {
                    let e = setInterval(() => i(e => e % t + 1), r);
                    return () => {
                        clearInterval(e)
                    }
                }, [r, t]), (0, s.jsx)("div", {
                    className: "flex -space-x-4 items-end -ml-2",
                    children: Array.from(Array(n)).map((e, t) => (0, s.jsx)(x.Z, {
                        className: "w-6 h-6 -mb-1"
                    }, t))
                })
            };
            var h = r(1392);
            let j = () => {
                    let {
                        status: e
                    } = (0, h.x)();
                    return "loading" === e ? (0, s.jsxs)("span", {
                        className: "text-muted relative pr-6",
                        children: ["Loading", (0, s.jsx)("span", {
                            className: "absolute bottom-0",
                            children: (0, s.jsx)(p, {
                                numDots: 3,
                                delayMs: 1e3
                            })
                        })]
                    }) : "connected" === e ? (0, s.jsx)("span", {
                        className: "text-positive",
                        children: "Connected"
                    }) : "disconnected" === e ? (0, s.jsx)("span", {
                        className: "text-destructive",
                        children: "Disconnected"
                    }) : null
                },
                g = () => (0, s.jsxs)(l.B, {
                    className: "text-primary-foreground flex justify-start items-center",
                    children: [(0, s.jsx)(m, {
                        className: "mr-2 p-0.5",
                        height: 32,
                        width: 32
                    }), (0, s.jsx)(j, {})]
                });
            var b = r(4096);
            let w = () => {
                let {
                    setOpen: e
                } = (0, c.K)(), {
                    refetchStatus: t
                } = (0, d.c)(), {
                    client: r,
                    refetchStatus: n
                } = (0, h.x)(), i = (0, v.useCallback)(() => {
                    r.reboot()
                }, [r]);
                return (0, s.jsx)("nav", {
                    className: "w-full fixed h-20 bg-primary px-8",
                    children: (0, s.jsxs)("div", {
                        className: "h-full flex items-center justify-between",
                        children: [(0, s.jsx)(o, {}), (0, s.jsxs)("div", {
                            className: "h-full flex items-center space-x-4",
                            children: [(0, s.jsxs)("div", {
                                className: "h-full flex flex-row items-center space-x-2",
                                children: [(0, s.jsx)("div", {
                                    className: "w-48 h-full flex items-center",
                                    children: (0, s.jsx)(f, {})
                                }), (0, s.jsx)(b.z, {
                                    variant: "secondary",
                                    onClick: () => e(!0),
                                    children: "Connect"
                                }), (0, s.jsx)(b.z, {
                                    variant: "secondary",
                                    onClick: t,
                                    children: "Refresh"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "h-full flex flex-row items-center space-x-2",
                                children: [(0, s.jsx)("div", {
                                    className: "w-48 h-full flex items-center",
                                    children: (0, s.jsx)(g, {})
                                }), (0, s.jsx)(b.z, {
                                    variant: "secondary",
                                    onClick: n,
                                    children: "Refresh"
                                }), (0, s.jsx)(b.z, {
                                    variant: "secondary",
                                    onClick: i,
                                    children: "Reboot"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        2566: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BlockEditorContextProvider: function () {
                    return l
                }
            });
            var s = r(9219),
                n = r(3552),
                i = r(2564),
                o = r(9591),
                a = r.n(o);
            let l = e => {
                let {
                    children: t
                } = e, r = (0, i.useRef)(null), o = (0, i.useCallback)(e => {
                    r.current = e
                }, []), l = (0, i.useCallback)(e => {
                    if (r.current) {
                        let t = r.current,
                            s = a().utils.xml.textToDom(e);
                        a().Xml.appendDomToWorkspace(s, t)
                    }
                }, []);
                return (0, s.jsx)(n.k.Provider, {
                    value: {
                        workspaceRef: r,
                        setWorkspaceRef: o,
                        loadXmlIntoWorkspace: l
                    },
                    children: t
                })
            }
        },
        1024: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CodeProvider: function () {
                    return o
                }
            });
            var s = r(9219),
                n = r(6833),
                i = r(2564);
            let o = e => {
                let {
                    children: t
                } = e, [r, o] = (0, i.useState)("");
                return (0, s.jsx)(n.q.Provider, {
                    value: {
                        code: r,
                        setCode: o
                    },
                    children: t
                })
            }
        },
        4514: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ConfigProvider: function () {
                    return a
                }
            });
            var s = r(9219),
                n = r(1984),
                i = r(810),
                o = r(2564);
            let a = e => {
                let {
                    children: t
                } = e, [r, a] = (0, o.useState)(i.u);
                return (0, s.jsx)(n.E.Provider, {
                    value: {
                        config: r,
                        setConfig: a
                    },
                    children: t
                })
            }
        },
        9963: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                FileSystemContextProvider: function () {
                    return d
                }
            });
            var s = r(9219),
                n = r(6736),
                i = r(9718),
                o = r(2564);
            let a = {
                    id: "main",
                    name: "main",
                    isFolder: !1,
                    items: []
                },
                l = {
                    items: []
                },
                d = e => {
                    let {
                        children: t
                    } = e, [r, d] = (0, o.useState)(l), [c, u] = (0, o.useState)([a]), [f, m] = (0, o.useState)(new i.K([a]));
                    return (0, s.jsx)(n.J.Provider, {
                        value: {
                            fileTree: r,
                            setFileTree: d,
                            activeFilesStack: f,
                            setActiveFilesStack: m,
                            openedFiles: c,
                            setOpenedFiles: u
                        },
                        children: t
                    })
                }
        },
        5548: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                OnboardingOpenStatusProvider: function () {
                    return o
                }
            });
            var s = r(9219),
                n = r(5767),
                i = r(2564);
            let o = e => {
                let {
                    children: t
                } = e, [r, o] = (0, i.useState)(!1);
                return (0, s.jsx)(n.D.Provider, {
                    value: {
                        open: r,
                        setOpen: o
                    },
                    children: t
                })
            }
        },
        1600: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PythonWebREPLClientProvider: function () {
                    return l
                }
            });
            var s = r(9219),
                n = r(1679),
                i = r(8992),
                o = r(2072),
                a = r(2564);
            let l = e => {
                let {
                    children: t
                } = e, {
                    config: r
                } = (0, i.Z)(), [l, d] = (0, a.useState)(new o.v({
                    endpoint: r.pythonWebREPL.endpoint,
                    password: r.pythonWebREPL.password
                }));
                return (0, a.useEffect)(() => {
                    d(e => (e.close(), new o.v({
                        endpoint: r.pythonWebREPL.endpoint,
                        password: r.pythonWebREPL.password
                    })))
                }, [r]), (0, s.jsx)(n.p.Provider, {
                    value: l,
                    children: t
                })
            }
        },
        6945: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                PythonWebREPLClientResponseProvider: function () {
                    return o
                }
            });
            var s = r(9219),
                n = r(1991),
                i = r(2564);
            let o = e => {
                let {
                    children: t
                } = e, [r, o] = (0, i.useState)([]);
                return (0, s.jsx)(n.L.Provider, {
                    value: {
                        clientResponses: r,
                        setClientResponses: o
                    },
                    children: t
                })
            }
        },
        8386: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                QueryClientProvider: function () {
                    return o
                }
            });
            var s = r(9219),
                n = r(3328);
            let i = new n.QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: !1,
                            refetchOnMount: !1,
                            refetchOnReconnect: !0
                        }
                    }
                }),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return (0, s.jsx)(n.QueryClientProvider, {
                        client: i,
                        children: t
                    })
                }
        },
        2368: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                RobotIPAddressProvider: function () {
                    return a
                }
            });
            var s = r(9219),
                n = r(9187),
                i = r(734),
                o = r(2564);
            let a = e => {
                let {
                    children: t
                } = e, [r, a] = (0, o.useState)(null);
                return (0, o.useEffect)(() => {
                    a("http:" === window.location.protocol ? window.location.host : window.localStorage.getItem(n._.localStorage.cyobot_portal_robot_ip_address))
                }, []), (0, o.useEffect)(() => {
                    null !== r && window.localStorage.setItem(n._.localStorage.cyobot_portal_robot_ip_address, r)
                }, [r]), (0, s.jsx)(i.I.Provider, {
                    value: {
                        robotIPAddress: r,
                        setRobotIPAddress: a
                    },
                    children: t
                })
            }
        },
        6016: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Toaster: function () {
                    return j
                }
            });
            var s = r(9219),
                n = r(4465),
                i = r(5762),
                o = r(3887),
                a = r(2564),
                l = r(1962);
            let d = n.zt,
                c = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...i
                    } = e;
                    return (0, s.jsx)(n.l_, {
                        ref: t,
                        className: (0, l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-20 sm:right-0 sm:bottom-auto sm:flex-col md:max-w-[420px]", r),
                        ...i
                    })
                });
            c.displayName = n.l_.displayName;
            let u = (0, i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
                    variants: {
                        variant: {
                            default: "border bg-background",
                            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                f = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: i,
                        ...o
                    } = e;
                    return (0, s.jsx)(n.fC, {
                        ref: t,
                        className: (0, l.cn)(u({
                            variant: i
                        }), r),
                        ...o
                    })
                });
            f.displayName = n.fC.displayName;
            let m = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.aU, {
                    ref: t,
                    className: (0, l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", r),
                    ...i
                })
            });
            m.displayName = n.aU.displayName;
            let x = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.x8, {
                    ref: t,
                    className: (0, l.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", r),
                    "toast-close": "",
                    ...i,
                    children: (0, s.jsx)(o.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            x.displayName = n.x8.displayName;
            let v = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.Dx, {
                    ref: t,
                    className: (0, l.cn)("text-sm font-semibold", r),
                    ...i
                })
            });
            v.displayName = n.Dx.displayName;
            let p = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.dk, {
                    ref: t,
                    className: (0, l.cn)("text-sm opacity-90", r),
                    ...i
                })
            });
            p.displayName = n.dk.displayName;
            var h = r(5814);

            function j() {
                let {
                    toasts: e
                } = (0, h.pm)();
                return (0, s.jsxs)(d, {
                    children: [e.map(function (e) {
                        let {
                            id: t,
                            title: r,
                            description: n,
                            action: i,
                            ...o
                        } = e;
                        return (0, s.jsxs)(f, {
                            ...o,
                            children: [(0, s.jsxs)("div", {
                                className: "grid gap-1",
                                children: [r && (0, s.jsx)(v, {
                                    children: r
                                }), n && (0, s.jsx)(p, {
                                    children: n
                                })]
                            }), i, (0, s.jsx)(x, {})]
                        }, t)
                    }), (0, s.jsx)(c, {})]
                })
            }
        },
        4986: function () {}
    },
    function (e) {
        e.O(0, [917, 623, 864, 711, 253, 151, 744], function () {
            return e(e.s = 8084)
        }), _N_E = e.O()
    }
]);