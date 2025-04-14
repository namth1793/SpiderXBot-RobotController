(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        5753: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 6922))
        },
        6922: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return e8
                }
            });
            var a = n(9219),
                l = n(5762),
                r = n(2564),
                o = n(1962);
            let s = (0, l.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function i(e) {
                let {
                    className: t,
                    variant: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, o.cn)(s({
                        variant: n
                    }), t),
                    ...l
                })
            }
            var c = n(4096);
            let d = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", n),
                    ...l
                })
            });
            d.displayName = "Card";
            let u = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, o.cn)("flex flex-col space-y-1.5 p-6", n),
                    ...l
                })
            });
            u.displayName = "CardHeader";
            let m = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("h3", {
                    ref: t,
                    className: (0, o.cn)("text-2xl font-semibold leading-none tracking-tight", n),
                    ...l
                })
            });
            m.displayName = "CardTitle";
            let p = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("p", {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", n),
                    ...l
                })
            });
            p.displayName = "CardDescription";
            let f = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, o.cn)("p-6 pt-0", n),
                    ...l
                })
            });
            f.displayName = "CardContent";
            let y = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, o.cn)("flex items-center p-6 pt-0", n),
                    ...l
                })
            });
            y.displayName = "CardFooter";
            var g = n(9466),
                x = n(7342),
                b = n(8980),
                k = n(6739);
            let _ = g.fC;
            g.ZA;
            let h = g.B4,
                v = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        children: l,
                        ...r
                    } = e;
                    return (0, a.jsxs)(g.xz, {
                        ref: t,
                        className: (0, o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", n),
                        ...r,
                        children: [l, (0, a.jsx)(g.JO, {
                            asChild: !0,
                            children: (0, a.jsx)(x.Z, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            v.displayName = g.xz.displayName;
            let N = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(g.u_, {
                    ref: t,
                    className: (0, o.cn)("flex cursor-default items-center justify-center py-1", n),
                    ...l,
                    children: (0, a.jsx)(b.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            N.displayName = g.u_.displayName;
            let C = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(g.$G, {
                    ref: t,
                    className: (0, o.cn)("flex cursor-default items-center justify-center py-1", n),
                    ...l,
                    children: (0, a.jsx)(x.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            C.displayName = g.$G.displayName;
            let j = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    position: r = "popper",
                    ...s
                } = e;
                return (0, a.jsx)(g.h_, {
                    children: (0, a.jsxs)(g.VY, {
                        ref: t,
                        className: (0, o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === r && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n),
                        position: r,
                        ...s,
                        children: [(0, a.jsx)(N, {}), (0, a.jsx)(g.l_, {
                            className: (0, o.cn)("p-1", "popper" === r && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: l
                        }), (0, a.jsx)(C, {})]
                    })
                })
            });
            j.displayName = g.VY.displayName;
            let w = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(g.__, {
                    ref: t,
                    className: (0, o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", n),
                    ...l
                })
            });
            w.displayName = g.__.displayName;
            let S = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    ...r
                } = e;
                return (0, a.jsxs)(g.ck, {
                    ref: t,
                    className: (0, o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
                    ...r,
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(g.wU, {
                            children: (0, a.jsx)(k.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, a.jsx)(g.eT, {
                        children: l
                    })]
                })
            });
            S.displayName = g.ck.displayName;
            let E = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(g.Z0, {
                    ref: t,
                    className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", n),
                    ...l
                })
            });
            E.displayName = g.Z0.displayName;
            var O = n(9179),
                R = n(3887);
            let T = O.fC;
            O.xz, O.x8;
            let M = O.h_,
                L = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...l
                    } = e;
                    return (0, a.jsx)(O.aV, {
                        className: (0, o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                        ...l,
                        ref: t
                    })
                });
            L.displayName = O.aV.displayName;
            let I = (0, l.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
                    variants: {
                        side: {
                            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                        }
                    },
                    defaultVariants: {
                        side: "right"
                    }
                }),
                U = r.forwardRef((e, t) => {
                    let {
                        side: n = "right",
                        className: l,
                        children: s,
                        onClickOutside: i,
                        onClickClose: c,
                        onPressEscape: d,
                        ...u
                    } = e;
                    return r.useEffect(() => {
                        let e = e => {
                            "Escape" === e.key && d && d()
                        };
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, [d]), (0, a.jsxs)(M, {
                        children: [(0, a.jsx)(L, {
                            onClick: i
                        }), (0, a.jsxs)(O.VY, {
                            ref: t,
                            className: (0, o.cn)(I({
                                side: n
                            }), l),
                            ...u,
                            children: [s, (0, a.jsxs)(O.x8, {
                                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                                onClick: c,
                                children: [(0, a.jsx)(R.Z, {
                                    className: "h-4 w-4"
                                }), (0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })]
                            })]
                        })]
                    })
                });
            U.displayName = O.VY.displayName;
            let P = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
                    ...n
                })
            };
            P.displayName = "SheetHeader";
            let D = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(O.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold text-foreground", n),
                    ...l
                })
            });
            D.displayName = O.Dx.displayName;
            let A = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(O.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", n),
                    ...l
                })
            });
            A.displayName = O.dk.displayName;
            let B = e => {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, a.jsx)("h2", {
                    className: (0, o.cn)("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", n),
                    children: t
                })
            };
            var G = n(8992),
                V = n(3988),
                F = n(2655),
                W = n(1891),
                z = n(3552),
                Z = n(810),
                X = n(1382),
                Y = n(5814),
                $ = n(7233);
            let H = e => {
                let {
                    code: t
                } = (0, X.h)(), {
                    config: n
                } = (0, G.Z)(), {
                    toast: l
                } = (0, Y.pm)(), [o, s] = (0, r.useState)("all"), [y, g] = (0, r.useState)("all"), [x, b] = (0, r.useState)([]), {
                    loadXmlIntoWorkspace: k
                } = (0, z.n)();
                (0, r.useEffect)(() => {
                    b(Z.u.activitiesLibrary.activities.filter(e => ("all" === o || e.tags.level.slug === o) && ("all" === y || e.tags.topic.slug === y)))
                }, [Z.u.activitiesLibrary.activities, o, y]);
                let N = (0, r.useCallback)(e => {
                        l({
                            title: "Activity loaded",
                            description: "Activity code is loaded into a new tab in workspace"
                        })
                    }, [l]),
                    C = (0, r.useCallback)(e => {
                        k(e), l({
                            title: "Activity loaded",
                            description: "Activity is loaded into workspace"
                        })
                    }, [l]),
                    {
                        addOpenedFile: w
                    } = (0, $.O)();
                return (0, a.jsx)(T, {
                    open: e.open,
                    children: (0, a.jsxs)(U, {
                        className: "sm:w-[576px] sm:max-w-xl overflow-y-auto",
                        side: "left",
                        onClickClose: () => e.setOpen(!1),
                        onClickOutside: () => e.setOpen(!1),
                        onPressEscape: () => e.setOpen(!1),
                        children: [(0, a.jsxs)(P, {
                            children: [(0, a.jsx)(D, {
                                asChild: !0,
                                children: (0, a.jsx)(B, {
                                    children: "Activities Library"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [(0, a.jsxs)(_, {
                                    onValueChange: s,
                                    value: o,
                                    children: [(0, a.jsx)(v, {
                                        children: (0, a.jsx)(h, {
                                            placeholder: n.activitiesLibrary.levelDropdown.triggerPlaceholder
                                        })
                                    }), (0, a.jsxs)(j, {
                                        children: [(0, a.jsx)(S, {
                                            value: "all",
                                            children: "All"
                                        }), n.activitiesLibrary.levelDropdown.options.map(e => (0, a.jsx)(S, {
                                            value: e.value,
                                            children: e.displayName
                                        }, e.value))]
                                    })]
                                }), (0, a.jsxs)(_, {
                                    onValueChange: g,
                                    value: y,
                                    children: [(0, a.jsx)(v, {
                                        children: (0, a.jsx)(h, {
                                            placeholder: n.activitiesLibrary.topicDropdown.triggerPlaceholder
                                        })
                                    }), (0, a.jsxs)(j, {
                                        children: [(0, a.jsx)(S, {
                                            value: "all",
                                            children: "All"
                                        }), n.activitiesLibrary.topicDropdown.options.map(e => (0, a.jsx)(S, {
                                            value: e.value,
                                            children: e.displayName
                                        }, e.value))]
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 mt-8",
                            children: x.length > 0 ? x.map((l, r) => (0, a.jsxs)(d, {
                                className: "relative",
                                children: [(0, a.jsx)(u, {
                                    children: (0, a.jsx)(m, {
                                        children: l.title
                                    })
                                }), (0, a.jsxs)(f, {
                                    children: [(0, a.jsx)(p, {
                                        children: l.description
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-row flex-wrap mt-4 mb-8",
                                        children: [(0, a.jsx)(i, {
                                            style: {
                                                backgroundColor: l.tags.level.color
                                            },
                                            className: "m-1",
                                            children: l.tags.level.displayName
                                        }, l.tags.level.slug), (0, a.jsx)(i, {
                                            style: {
                                                backgroundColor: l.tags.topic.color
                                            },
                                            className: "m-1",
                                            children: l.tags.topic.displayName
                                        }, l.tags.topic.slug)]
                                    })]
                                }), (0, a.jsxs)(c.z, {
                                    variant: "outline",
                                    className: "text-primary absolute right-2 bottom-2",
                                    onClick: () => {
                                        if ("code" == n.editor) {
                                            let n = {
                                                id: l.slug,
                                                name: l.title,
                                                content: l.code,
                                                isFolder: !1,
                                                items: []
                                            };
                                            w(n), e.setOpen(!1), N(t)
                                        } else C(l.block)
                                    },
                                    children: ["Load", (0, a.jsx)(V.Z, {
                                        className: "h-4 w-4 mr-1.5 ml-1.5"
                                    })]
                                })]
                            }, r)) : (0, a.jsxs)("div", {
                                className: "col-span-2 flex justify-center items-center flex-col space-y-8",
                                children: [(0, a.jsx)(F.Z, {
                                    className: "w-32 h-32 m-4"
                                }), (0, a.jsx)(W.B, {
                                    children: "Uh Oh, No Activity Found"
                                }), (0, a.jsx)(c.z, {
                                    onClick: () => {
                                        s("all"), g("all")
                                    },
                                    children: "Clear Filter"
                                })]
                            })
                        })]
                    })
                })
            };
            var J = n(9591),
                K = n.n(J);
            let Q = {
                base: K().Themes.Classic,
                categoryStyles: {
                    structure_category: {
                        colour: "#5d3a92"
                    },
                    condition_category: {
                        colour: "#ffc800"
                    },
                    value_category: {
                        colour: "#19d164"
                    },
                    motion_category: {
                        colour: "#1f3c96"
                    },
                    sound_category: {
                        colour: "#ea2761"
                    },
                    sensing_category: {
                        colour: "#00c5c5"
                    },
                    display_category: {
                        colour: "#f9641e"
                    },
                    timing_category: {
                        colour: "#4cb9f5"
                    },
                    math_category: {
                        colour: "#38761d"
                    },
                    dataList_category: {
                        colour: "#a0a0a0"
                    },
                    external_category: {
                        colour: "#783f04"
                    },
                    variables_category: {
                        colour: "#a64d79"
                    },
                    other_category: {
                        colour: "#f2f2f2"
                    }
                },
                componentStyles: {
                    toolboxBackgroundColour: "#f2f2f2",
                    flyoutBackgroundColour: "#f8f8f8"
                },
                blockStyles: {
                    structure_blocks: {
                        colourPrimary: "#5d3a92"
                    },
                    condition_blocks: {
                        colourPrimary: "#ffc800"
                    },
                    value_blocks: {
                        colourPrimary: "#19d164"
                    },
                    motion_blocks: {
                        colourPrimary: "#1f3c96"
                    },
                    sound_blocks: {
                        colourPrimary: "#ea2761"
                    },
                    sensing_blocks: {
                        colourPrimary: "#00c5c5"
                    },
                    display_blocks: {
                        colourPrimary: "#f9641e"
                    },
                    timing_blocks: {
                        colourPrimary: "#4cb9f5"
                    },
                    math_blocks: {
                        colourPrimary: "#38761d"
                    },
                    dataList_blocks: {
                        colourPrimary: "#a0a0a0"
                    },
                    external_blocks: {
                        colourPrimary: "#783f04"
                    },
                    variables_blocks: {
                        colourPrimary: "#a64d79"
                    },
                    logic_blocks: {
                        colourPrimary: "#ffc800"
                    },
                    text_blocks: {
                        colourPrimary: "#19d164"
                    },
                    loop_blocks: {
                        colourPrimary: "#5d3a92"
                    },
                    list_blocks: {
                        colourPrimary: "#a0a0a0"
                    }
                }
            };
            var q = n(8578);
            q.pythonGenerator.forBlock.matrix_init = function (e, t) {
                return "from lib.display import Matrix\nmatrix = Matrix()\n"
            }, q.pythonGenerator.forBlock.ring_init = function (e, t) {
                return "from lib.display import LEDRing\nring = LEDRing()\n"
            }, q.pythonGenerator.forBlock.time_init = function (e, t) {
                return "import time\n"
            }, q.pythonGenerator.forBlock.speaker_init = function (e, t) {
                return "from audio import player\nmPlayer = player(None)\n"
            }, q.pythonGenerator.forBlock.imu_init = function (e, t) {
                return "from lib.imu import IMU\nimu = IMU(SDA=17, SCL=18)\n"
            }, q.pythonGenerator.forBlock.button_init = function (e, t) {
                return "import machine\nleft = machine.Pin(4, machine.Pin.IN)\nright = machine.Pin(38, machine.Pin.IN)\n"
            }, q.pythonGenerator.forBlock.microphone_init = function (e, t) {
                return "from audio import recorder\naRecorder = recorder()\n"
            }, q.pythonGenerator.forBlock.crawler_init = function (e, t) {
                return "from lib.kinematics import Crawler\nrobot = Crawler()\n"
            }, q.pythonGenerator.forBlock.wheeler_init = function (e, t) {
                return "from lib.kinematics import Wheeler\nrobot = Wheeler()\n"
            }, q.pythonGenerator.forBlock.console_init = function (e, t) {
                return "import machine\nlefty = machine.ADC(5)\nleftx = machine.ADC(2)\nrighty = machine.ADC(3)\nrightx = machine.ADC(1)\nrightx.atten(rightx.ATTN_11DB)\nrightx.atten(rightx.ATTN_11DB)\nleftx.atten(leftx.ATTN_11DB)\nlefty.atten(lefty.ATTN_11DB)\nrtrig = machine.Pin(39, machine.Pin.IN, machine.Pin.PULL_UP)\nltrig = machine.Pin(40, machine.Pin.IN, machine.Pin.PULL_UP)\nlbut = machine.Pin(41, machine.Pin.IN, machine.Pin.PULL_UP)\nrbut = machine.Pin(42, machine.Pin.IN, machine.Pin.PULL_UP)\n"
            }, q.pythonGenerator.forBlock.value_number = function (e, t) {
                let n = Number(e.getFieldValue("NUM"));
                return n === 1 / 0 ? ['float("inf")', q.Order.FUNCTION_CALL] : n === -1 / 0 ? ['-float("inf")', q.Order.UNARY_SIGN] : [String(n), n < 0 ? q.Order.UNARY_SIGN : q.Order.ATOMIC]
            }, q.pythonGenerator.forBlock.sound_play = function (e, t) {
                return "mPlayer.play('file://sdcard/lib/data/sample-music.mp3')\n"
            }, q.pythonGenerator.forBlock.sound_play_record = function (e, t) {
                return "mPlayer.play('file://sdcard/record.wav')\n"
            }, q.pythonGenerator.forBlock.sound_record = function (e, t) {
                let n = t.valueToCode(e, "SECS", q.Order.ATOMIC);
                return "import time\nfrom lib.display import LED\nled = LED()\naRecorder.start('/sdcard/record.wav', recorder.WAV, ".concat(n, ")\ni = 0\nwhile aRecorder.is_running():\n    led.value((i+1)%2)\n    i += 1\n    time.sleep(1)\naRecorder.stop()\nled.off()\n")
            }, q.pythonGenerator.forBlock.matrix_reset = function (e, t) {
                return "matrix.reset()\n"
            }, q.pythonGenerator.forBlock.ring_reset = function (e, t) {
                return "ring.reset()\n"
            }, q.pythonGenerator.forBlock.matrix_scroll = function (e, t) {
                let n = t.valueToCode(e, "VALUE", q.Order.ATOMIC),
                    a = e.getFieldValue("SPEED"),
                    l = e.getFieldValue("COLOR");
                var r, o = (r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l)) ? {
                    r: parseInt(r[1], 16),
                    g: parseInt(r[2], 16),
                    b: parseInt(r[3], 16)
                } : null;
                let s = 'matrix.scroll("{}".format('.concat(n, ").upper(), speed=").concat(a, ", red=").concat(o.r, ", green=").concat(o.g, ", blue=").concat(o.b, ")\n");
                return s
            }, q.pythonGenerator.forBlock.matrix_manual = function (e, t) {
                let n = t.valueToCode(e, "INDEX", q.Order.ATOMIC),
                    a = e.getFieldValue("COLOR");
                var l, r = (l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
                    r: parseInt(l[1], 16),
                    g: parseInt(l[2], 16),
                    b: parseInt(l[3], 16)
                } : null;
                return "matrix.set_manual(".concat(n, ", (").concat(r.r, ", ").concat(r.g, ", ").concat(r.b, "))\n")
            }, q.pythonGenerator.forBlock.matrix_manual_2 = function (e, t) {
                let n = t.valueToCode(e, "INDEX", q.Order.ATOMIC),
                    a = t.valueToCode(e, "RED", q.Order.ATOMIC),
                    l = t.valueToCode(e, "GREEN", q.Order.ATOMIC),
                    r = t.valueToCode(e, "BLUE", q.Order.ATOMIC);
                return "matrix.set_manual(".concat(n, ", (int(").concat(a, "/255.0*100.0), int(").concat(l, "/255.0*100.0), int(").concat(r, "/255.0*100.0)))\n")
            }, q.pythonGenerator.forBlock.matrix_all = function (e, t) {
                let n = e.getFieldValue("COLOR");
                var a, l = (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n)) ? {
                    r: parseInt(a[1], 16),
                    g: parseInt(a[2], 16),
                    b: parseInt(a[3], 16)
                } : null;
                return "matrix.set_all((".concat(l.r, ", ").concat(l.g, ", ").concat(l.b, "))\n")
            }, q.pythonGenerator.forBlock.matrix_all_2 = function (e, t) {
                let n = t.valueToCode(e, "RED", q.Order.ATOMIC),
                    a = t.valueToCode(e, "GREEN", q.Order.ATOMIC),
                    l = t.valueToCode(e, "BLUE", q.Order.ATOMIC);
                return "matrix.set_all((int(".concat(n, "/255.0*100.0), int(").concat(a, "/255.0*100.0), int(").concat(l, "/255.0*100.0)))\n")
            }, q.pythonGenerator.forBlock.ring_manual = function (e, t) {
                let n = t.valueToCode(e, "INDEX", q.Order.ATOMIC),
                    a = e.getFieldValue("COLOR");
                var l, r = (l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
                    r: parseInt(l[1], 16),
                    g: parseInt(l[2], 16),
                    b: parseInt(l[3], 16)
                } : null;
                return "ring.set_manual(".concat(n, ", (").concat(r.r, ", ").concat(r.g, ", ").concat(r.b, "))\n")
            }, q.pythonGenerator.forBlock.ring_manual_2 = function (e, t) {
                let n = t.valueToCode(e, "INDEX", q.Order.ATOMIC),
                    a = t.valueToCode(e, "RED", q.Order.ATOMIC),
                    l = t.valueToCode(e, "GREEN", q.Order.ATOMIC),
                    r = t.valueToCode(e, "BLUE", q.Order.ATOMIC);
                return "ring.set_manual(".concat(n, ", (int(").concat(a, "/255.0*100.0), int(").concat(l, "/255.0*100.0), int(").concat(r, "/255.0*100.0)))\n")
            }, q.pythonGenerator.forBlock.ring_all = function (e, t) {
                let n = e.getFieldValue("COLOR");
                var a, l = (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n)) ? {
                    r: parseInt(a[1], 16),
                    g: parseInt(a[2], 16),
                    b: parseInt(a[3], 16)
                } : null;
                return "ring.set_all((".concat(l.r, ", ").concat(l.g, ", ").concat(l.b, "))\n")
            }, q.pythonGenerator.forBlock.ring_all_2 = function (e, t) {
                let n = t.valueToCode(e, "RED", q.Order.ATOMIC),
                    a = t.valueToCode(e, "GREEN", q.Order.ATOMIC),
                    l = t.valueToCode(e, "BLUE", q.Order.ATOMIC);
                return "ring.set_all((int(".concat(n, "/255.0*100.0), int(").concat(a, "/255.0*100.0), int(").concat(l, "/255.0*100.0)))\n")
            }, q.pythonGenerator.forBlock.ring_spin = function (e, t) {
                let n = e.getFieldValue("SPEED"),
                    a = e.getFieldValue("COLOR");
                var l, r = (l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
                    r: parseInt(l[1], 16),
                    g: parseInt(l[2], 16),
                    b: parseInt(l[3], 16)
                } : null;
                let o = "ring.loading(speed=".concat(n, ", red=").concat(r.r, ", green=").concat(r.g, ", blue=").concat(r.b, ")\n");
                return o
            }, q.pythonGenerator.forBlock.matrix_character = function (e, t) {
                let n = e.getFieldValue("CHAR", q.Order.ATOMIC),
                    a = e.getFieldValue("COLOR");
                var l, r = (l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
                    r: parseInt(l[1], 16),
                    g: parseInt(l[2], 16),
                    b: parseInt(l[3], 16)
                } : null;
                let o = 'matrix.set_character("'.concat(n, '", red=').concat(r.r, ", green=").concat(r.g, ", blue=").concat(r.b, ")\n");
                return o
            }, q.pythonGenerator.forBlock.motion_command = function (e, t) {
                let n = e.getFieldValue("COMMAND"),
                    a = t.valueToCode(e, "STEPS", q.Order.ATOMIC);
                return "for i in range(".concat(a, '):\n    robot.command("').concat(n, '")\n')
            }, q.pythonGenerator.forBlock.motion_command_2 = function (e, t) {
                let n = e.getFieldValue("COMMAND"),
                    a = t.valueToCode(e, "STEPS", q.Order.ATOMIC);
                return "for i in range(".concat(a, '):\n    robot.command("').concat(n, '")\n')
            }, q.pythonGenerator.forBlock.motion_command_3 = function (e, t) {
                let n = e.getFieldValue("COMMAND1"),
                    a = e.getFieldValue("COMMAND2"),
                    l = t.valueToCode(e, "SECONDS", q.Order.ATOMIC);
                return 'robot.nudge("'.concat(n + "_" + a, '", t=').concat(l, ")\n")
            }, q.pythonGenerator.forBlock.motion_throttle = function (e, t) {
                let n = t.valueToCode(e, "THROTTLE", q.Order.ATOMIC);
                return "robot.throttle(".concat(n, ")\n")
            }, q.pythonGenerator.forBlock.motion_steering = function (e, t) {
                let n = t.valueToCode(e, "FRONT_ANGLE", q.Order.ATOMIC),
                    a = t.valueToCode(e, "BACK_ANGLE", q.Order.ATOMIC);
                return "robot.steer(".concat(n, ", ").concat(a, ")\n")
            }, q.pythonGenerator.forBlock.motion_off = function (e, t) {
                return "robot.stop()\n"
            }, q.pythonGenerator.forBlock.motion_center = function (e, t) {
                return "robot.center()\n"
            }, q.pythonGenerator.forBlock.motion_set_angle = function (e, t) {
                let n = e.getFieldValue("CHANNEL"),
                    a = t.valueToCode(e, "ANGLE", q.Order.NONE);
                return "robot.pca.set_angle(".concat(n, ", ").concat(a, ")\n")
            }, q.pythonGenerator.forBlock.motion_single = function (e, t) {
                let n = e.getFieldValue("LEG"),
                    a = t.valueToCode(e, "UPPER", q.Order.NONE),
                    l = t.valueToCode(e, "LOWER", q.Order.NONE);
                return "robot.centeredDynamicSingleServoAssignment(".concat(n, ", ").concat(a, ", ").concat(l, ")\n")
            }, q.pythonGenerator.forBlock.motion_all = function (e, t) {
                let n = t.valueToCode(e, "UPPER0", q.Order.NONE),
                    a = t.valueToCode(e, "LOWER0", q.Order.NONE),
                    l = t.valueToCode(e, "UPPER1", q.Order.NONE),
                    r = t.valueToCode(e, "LOWER1", q.Order.NONE),
                    o = t.valueToCode(e, "UPPER2", q.Order.NONE),
                    s = t.valueToCode(e, "LOWER2", q.Order.NONE),
                    i = t.valueToCode(e, "UPPER3", q.Order.NONE),
                    c = t.valueToCode(e, "LOWER3", q.Order.NONE);
                return "robot.centeredDynamicServoAssignment(".concat(n, ", ").concat(a, ", ").concat(l, ", ").concat(r, ", ").concat(o, ", ").concat(s, ", ").concat(i, ", ").concat(c, ")\n")
            }, q.pythonGenerator.forBlock.sensing_accel = function (e, t) {
                let n = e.getFieldValue("AXIS");
                return ["imu.acceleration[".concat(n, "]"), q.Order.NONE]
            }, q.pythonGenerator.forBlock.sensing_gyro = function (e, t) {
                let n = e.getFieldValue("AXIS");
                return ["imu.gyro[".concat(n, "]"), q.Order.NONE]
            }, q.pythonGenerator.forBlock.sensing_temp = function (e, t) {
                return ["imu.temperature", q.Order.NONE]
            }, q.pythonGenerator.forBlock.sensing_button = function (e, t) {
                let n = e.getFieldValue("BUTTON");
                return ["".concat(n, ".value()"), q.Order.NONE]
            }, q.pythonGenerator.forBlock.sensing_console_trigger = function (e, t) {
                let n = e.getFieldValue("BUTTON");
                return ["".concat(n, ".value()"), q.Order.NONE]
            }, q.pythonGenerator.forBlock.sensing_console_joystick_button = function (e, t) {
                let n = e.getFieldValue("BUTTON");
                return ["".concat(n, ".value()"), q.Order.NONE]
            }, q.pythonGenerator.forBlock.sensing_console_joystick = function (e, t) {
                let n = e.getFieldValue("JOYSTICK"),
                    a = e.getFieldValue("AXIS");
                if ("left" === n) {
                    if ("x" === a) return ["leftx.read()", q.Order.NONE];
                    if ("y" === a) return ["lefty.read()", q.Order.NONE]
                } else if ("right" === n) {
                    if ("x" === a) return ["rightx.read()", q.Order.NONE];
                    if ("y" === a) return ["righty.read()", q.Order.NONE]
                }
            }, q.pythonGenerator.forBlock.timing_sleep = function (e, t) {
                let n = t.valueToCode(e, "SECS", q.Order.ATOMIC);
                return "time.sleep(".concat(n, ")\n")
            }, q.pythonGenerator.forBlock.timing_time = function (e, t) {
                return ["time.time()", q.Order.NONE]
            }, q.pythonGenerator.forBlock.timing_ticksms = function (e, t) {
                return ["time.ticks_ms()", q.Order.NONE]
            }, K().defineBlocksWithJsonArray([{
                type: "matrix_init",
                message0: "Start LED matrix",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "ring_init",
                message0: "Start LED ring",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "time_init",
                message0: "Start timing",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "speaker_init",
                message0: "Start speaker",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "imu_init",
                message0: "Start motion sensor",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "button_init",
                message0: "Start buttons",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "microphone_init",
                message0: "Start microphone",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "crawler_init",
                message0: "Start Crawler",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "wheeler_init",
                message0: "Start Wheeler",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "console_init",
                message0: "Start Game Console",
                previousStatement: null,
                nextStatement: null,
                style: "structure_blocks"
            }, {
                type: "value_number",
                message0: "%1",
                args0: [{
                    type: "field_number",
                    name: "NUM",
                    value: 0
                }],
                output: "Number",
                style: "value_blocks"
            }, {
                type: "sound_play",
                message0: "Play song",
                previousStatement: null,
                nextStatement: null,
                style: "sound_blocks"
            }, {
                type: "sound_play_record",
                message0: "Play record",
                previousStatement: null,
                nextStatement: null,
                style: "sound_blocks"
            }, {
                type: "sound_record",
                message0: "Record %1 seconds",
                previousStatement: null,
                nextStatement: null,
                style: "sound_blocks",
                args0: [{
                    type: "input_value",
                    name: "SECS",
                    check: "Number"
                }]
            }, {
                type: "matrix_reset",
                message0: "Reset LED matrix",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks"
            }, {
                type: "ring_reset",
                message0: "Reset LED ring",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks"
            }, {
                type: "matrix_character",
                message0: "Display %1 in %2",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "CHAR",
                    options: [
                        ["A", "A"],
                        ["B", "B"],
                        ["C", "C"],
                        ["D", "D"],
                        ["E", "E"],
                        ["F", "F"],
                        ["G", "G"],
                        ["H", "H"],
                        ["I", "I"],
                        ["J", "J"],
                        ["K", "K"],
                        ["L", "L"],
                        ["M", "M"],
                        ["N", "N"],
                        ["O", "O"],
                        ["P", "P"],
                        ["Q", "Q"],
                        ["R", "R"],
                        ["S", "S"],
                        ["T", "T"],
                        ["U", "U"],
                        ["V", "V"],
                        ["W", "W"],
                        ["X", "X"],
                        ["Y", "Y"],
                        ["Z", "Z"],
                        ["0", "0"],
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"],
                        ["6", "6"],
                        ["7", "7"],
                        ["8", "8"],
                        ["9", "9"]
                    ]
                }, {
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }]
            }, {
                type: "matrix_scroll",
                message0: "Scroll %1 in %2 %3",
                args0: [{
                    type: "input_value",
                    name: "VALUE",
                    check: "String"
                }, {
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }, {
                    type: "field_dropdown",
                    name: "SPEED",
                    options: [
                        ["slowly", "0.5"],
                        ["normally", "0.3"],
                        ["fast", "0.1"],
                        ["very fast", "0.05"]
                    ]
                }],
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks"
            }, {
                type: "matrix_manual",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set LED #%1 on matrix to %2",
                args0: [{
                    type: "input_value",
                    name: "INDEX",
                    check: "Number"
                }, {
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }]
            }, {
                type: "matrix_manual_2",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set LED #%1 on matrix to\nred: %2%, green: %3%, blue: %4%",
                args0: [{
                    type: "input_value",
                    name: "INDEX",
                    check: "Number"
                }, {
                    type: "input_value",
                    name: "RED"
                }, {
                    type: "input_value",
                    name: "GREEN"
                }, {
                    type: "input_value",
                    name: "BLUE"
                }]
            }, {
                type: "matrix_all",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set all LEDs on matrix to %1",
                args0: [{
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }]
            }, {
                type: "matrix_all_2",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set all LEDs on matrix to \nred: %1%, green: %2%, blue: %3%",
                args0: [{
                    type: "input_value",
                    name: "RED"
                }, {
                    type: "input_value",
                    name: "GREEN"
                }, {
                    type: "input_value",
                    name: "BLUE"
                }]
            }, {
                type: "ring_spin",
                message0: "Spin an LED in %1 %2",
                args0: [{
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }, {
                    type: "field_dropdown",
                    name: "SPEED",
                    options: [
                        ["slowly", "0.5"],
                        ["normally", "0.3"],
                        ["fast", "0.1"],
                        ["very fast", "0.05"]
                    ]
                }],
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks"
            }, {
                type: "ring_manual",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set LED #%1 on ring to %2",
                args0: [{
                    type: "input_value",
                    name: "INDEX",
                    check: "Number"
                }, {
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }]
            }, {
                type: "ring_manual_2",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set LED #%1 on ring to\nred: %2%, green: %3%, blue: %4%",
                args0: [{
                    type: "input_value",
                    name: "INDEX",
                    check: "Number"
                }, {
                    type: "input_value",
                    name: "RED"
                }, {
                    type: "input_value",
                    name: "GREEN"
                }, {
                    type: "input_value",
                    name: "BLUE"
                }]
            }, {
                type: "ring_all",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set all LEDs on ring to %1",
                args0: [{
                    type: "field_colour",
                    name: "COLOR",
                    colour: "#40ff40"
                }]
            }, {
                type: "ring_all_2",
                previousStatement: null,
                nextStatement: null,
                style: "display_blocks",
                message0: "Set all LEDs on ring to \nred: %1%, green: %2%, blue: %3%",
                args0: [{
                    type: "input_value",
                    name: "RED"
                }, {
                    type: "input_value",
                    name: "GREEN"
                }, {
                    type: "input_value",
                    name: "BLUE"
                }]
            }, {
                type: "motion_command",
                message0: "Walk %1 %2 steps",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "COMMAND",
                    options: [
                        ["forward", "forward"],
                        ["backward", "backward"],
                        ["left", "lateral_left"],
                        ["right", "lateral_right"]
                    ]
                }, {
                    type: "input_value",
                    name: "STEPS"
                }]
            }, {
                type: "motion_command_2",
                message0: "Rotate %1 %2 steps",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "COMMAND",
                    options: [
                        ["left", "rotate_left"],
                        ["right", "rotate_right"]
                    ]
                }, {
                    type: "input_value",
                    name: "STEPS"
                }]
            }, {
                type: "motion_command_3",
                message0: "Drive %1 %2 for %3 seconds",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "COMMAND1",
                    options: [
                        ["forward", "forward"],
                        ["backward", "backward"]
                    ]
                }, {
                    type: "field_dropdown",
                    name: "COMMAND2",
                    options: [
                        ["straight", "straight"],
                        ["left", "left"],
                        ["right", "right"],
                        ["left diagonal", "diagleft"],
                        ["right diagonal", "diagright"]
                    ]
                }, {
                    type: "input_value",
                    name: "SECONDS"
                }]
            }, {
                type: "motion_throttle",
                message0: "Set throttle to %1",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "input_value",
                    name: "THROTTLE"
                }]
            }, {
                type: "motion_steering",
                message0: "Set steering\nfront %1 back %2",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "input_value",
                    name: "FRONT_ANGLE"
                }, {
                    type: "input_value",
                    name: "BACK_ANGLE"
                }]
            }, {
                type: "motion_off",
                message0: "Turn off motors",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks"
            }, {
                type: "motion_center",
                message0: "Center motors",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks"
            }, {
                type: "motion_single",
                message0: "Set leg %1 \nhip %2 knee %3",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "LEG",
                    options: [
                        ["0", "0"],
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"]
                    ]
                }, {
                    type: "input_value",
                    name: "UPPER"
                }, {
                    type: "input_value",
                    name: "LOWER"
                }]
            }, {
                type: "motion_all",
                message0: "Set all legs\nLeg 0 hip %1 knee %2\nLeg 1 hip %3 knee %4\nLeg 2 hip %5 knee %6\nLeg 3 hip %7 knee %8\n",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "input_value",
                    name: "UPPER0"
                }, {
                    type: "input_value",
                    name: "LOWER0"
                }, {
                    type: "input_value",
                    name: "UPPER1"
                }, {
                    type: "input_value",
                    name: "LOWER1"
                }, {
                    type: "input_value",
                    name: "UPPER2"
                }, {
                    type: "input_value",
                    name: "LOWER2"
                }, {
                    type: "input_value",
                    name: "UPPER3"
                }, {
                    type: "input_value",
                    name: "LOWER3"
                }]
            }, {
                type: "motion_set_angle",
                message0: "Set channel %1 to angle %2",
                previousStatement: null,
                nextStatement: null,
                style: "motion_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "CHANNEL",
                    options: [
                        ["0", "0"],
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"],
                        ["6", "6"],
                        ["7", "7"],
                        ["8", "8"],
                        ["9", "9"],
                        ["10", "10"],
                        ["11", "11"]
                    ]
                }, {
                    type: "input_value",
                    name: "ANGLE"
                }]
            }, {
                type: "sensing_accel",
                message0: "acceleration %1",
                output: null,
                style: "sensing_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "AXIS",
                    options: [
                        ["X", "0"],
                        ["Y", "1"],
                        ["Z", "2"]
                    ]
                }]
            }, {
                type: "sensing_gyro",
                message0: "gyroscope %1",
                output: null,
                style: "sensing_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "AXIS",
                    options: [
                        ["X", "0"],
                        ["Y", "1"],
                        ["Z", "2"]
                    ]
                }]
            }, {
                type: "sensing_temp",
                message0: "temperature",
                output: null,
                style: "sensing_blocks"
            }, {
                type: "sensing_button",
                message0: "%1 button",
                output: null,
                style: "sensing_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "BUTTON",
                    options: [
                        ["left", "left"],
                        ["right", "right"]
                    ]
                }]
            }, {
                type: "sensing_console_trigger",
                message0: "%1 trigger",
                output: null,
                style: "sensing_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "BUTTON",
                    options: [
                        ["left", "ltrig"],
                        ["right", "rtrig"]
                    ]
                }]
            }, {
                type: "sensing_console_joystick_button",
                message0: "%1 joystick button",
                output: null,
                style: "sensing_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "BUTTON",
                    options: [
                        ["left", "lbut"],
                        ["right", "rbut"]
                    ]
                }]
            }, {
                type: "sensing_console_joystick",
                message0: "%1 joystick %2 axis",
                output: null,
                style: "sensing_blocks",
                args0: [{
                    type: "field_dropdown",
                    name: "JOYSTICK",
                    options: [
                        ["left", "left"],
                        ["right", "right"]
                    ]
                }, {
                    type: "field_dropdown",
                    name: "AXIS",
                    options: [
                        ["X", "x"],
                        ["Y", "y"]
                    ]
                }]
            }, {
                type: "timing_sleep",
                message0: "Delay %1 seconds",
                previousStatement: null,
                nextStatement: null,
                args0: [{
                    type: "input_value",
                    name: "SECS"
                }],
                style: "timing_blocks"
            }, {
                type: "timing_ticksms",
                message0: "milliseconds since start",
                output: null,
                style: "timing_blocks"
            }, {
                type: "timing_time",
                message0: "seconds since start",
                output: null,
                style: "timing_blocks"
            }]), K().Theme.defineTheme("CYOBot", Q);
            let ee = {
                kind: "categoryToolbox",
                contents: [{
                    kind: "category",
                    name: "Structure",
                    categorystyle: "structure_category",
                    contents: [{
                        kind: "block",
                        type: "matrix_init"
                    }, {
                        kind: "block",
                        type: "ring_init"
                    }, {
                        kind: "block",
                        type: "time_init"
                    }, {
                        kind: "block",
                        type: "speaker_init"
                    }, {
                        kind: "block",
                        type: "imu_init"
                    }, {
                        kind: "block",
                        type: "button_init"
                    }, {
                        kind: "block",
                        type: "microphone_init"
                    }, {
                        kind: "block",
                        type: "crawler_init"
                    }, {
                        kind: "block",
                        type: "wheeler_init"
                    }, {
                        kind: "block",
                        type: "console_init"
                    }, {
                        kind: "block",
                        type: "controls_repeat_ext",
                        inputs: {
                            TIMES: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 10
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "controls_whileUntil"
                    }, {
                        kind: "block",
                        type: "controls_for",
                        inputs: {
                            FROM: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            TO: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 10
                                    }
                                }
                            },
                            BY: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 1
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "controls_forEach"
                    }, {
                        kind: "block",
                        type: "controls_flow_statements"
                    }]
                }, {
                    kind: "category",
                    name: "Condition",
                    categorystyle: "condition_category",
                    contents: [{
                        kind: "block",
                        type: "controls_if"
                    }, {
                        kind: "block",
                        type: "logic_compare"
                    }, {
                        kind: "block",
                        type: "logic_operation"
                    }, {
                        kind: "block",
                        type: "logic_negate"
                    }, {
                        kind: "block",
                        type: "logic_boolean"
                    }, {
                        kind: "block",
                        type: "logic_null"
                    }, {
                        kind: "block",
                        type: "logic_ternary"
                    }]
                }, {
                    kind: "category",
                    name: "Value",
                    categorystyle: "value_category",
                    contents: [{
                        kind: "block",
                        type: "value_number"
                    }, {
                        kind: "block",
                        type: "text"
                    }]
                }, {
                    kind: "category",
                    name: "Motion",
                    categorystyle: "motion_category",
                    contents: [{
                        kind: "block",
                        type: "motion_command",
                        inputs: {
                            STEPS: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 3
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_command_2",
                        inputs: {
                            STEPS: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 3
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_command_3",
                        inputs: {
                            SECONDS: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 3
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_center"
                    }, {
                        kind: "block",
                        type: "motion_off"
                    }, {
                        kind: "block",
                        type: "motion_set_angle",
                        inputs: {
                            ANGLE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_single",
                        inputs: {
                            UPPER: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            LOWER: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_all",
                        inputs: {
                            UPPER0: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            LOWER0: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            UPPER1: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            LOWER1: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            UPPER2: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            LOWER2: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            UPPER3: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            LOWER3: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_throttle",
                        inputs: {
                            THROTTLE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "motion_steering",
                        inputs: {
                            FRONT_ANGLE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            BACK_ANGLE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }]
                }, {
                    kind: "category",
                    name: "Sound",
                    categorystyle: "sound_category",
                    contents: [{
                        kind: "block",
                        type: "sound_play"
                    }, {
                        kind: "block",
                        type: "sound_play_record"
                    }, {
                        kind: "block",
                        type: "sound_record",
                        inputs: {
                            SECS: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 1
                                    }
                                }
                            }
                        }
                    }]
                }, {
                    kind: "category",
                    name: "Sensing",
                    categorystyle: "sensing_category",
                    contents: [{
                        kind: "block",
                        type: "sensing_accel"
                    }, {
                        kind: "block",
                        type: "sensing_gyro"
                    }, {
                        kind: "block",
                        type: "sensing_temp"
                    }, {
                        kind: "block",
                        type: "sensing_button"
                    }, {
                        kind: "block",
                        type: "sensing_console_trigger"
                    }, {
                        kind: "block",
                        type: "sensing_console_joystick_button"
                    }, {
                        kind: "block",
                        type: "sensing_console_joystick"
                    }]
                }, {
                    kind: "category",
                    name: "Display",
                    categorystyle: "display_category",
                    contents: [{
                        kind: "block",
                        type: "matrix_reset"
                    }, {
                        kind: "block",
                        type: "ring_reset"
                    }, {
                        kind: "block",
                        type: "matrix_character"
                    }, {
                        kind: "block",
                        type: "matrix_scroll",
                        inputs: {
                            VALUE: {
                                block: {
                                    type: "text"
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "ring_spin"
                    }, {
                        kind: "block",
                        type: "matrix_manual",
                        inputs: {
                            INDEX: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "ring_manual",
                        inputs: {
                            INDEX: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "matrix_all"
                    }, {
                        kind: "block",
                        type: "ring_all"
                    }, {
                        kind: "block",
                        type: "matrix_manual_2",
                        inputs: {
                            INDEX: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            RED: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            GREEN: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            BLUE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "ring_manual_2",
                        inputs: {
                            INDEX: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            RED: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            GREEN: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            BLUE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "matrix_all_2",
                        inputs: {
                            RED: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            GREEN: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            BLUE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "ring_all_2",
                        inputs: {
                            RED: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            GREEN: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            },
                            BLUE: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 0
                                    }
                                }
                            }
                        }
                    }]
                }, {
                    kind: "category",
                    name: "Timing",
                    categorystyle: "timing_category",
                    contents: [{
                        kind: "block",
                        type: "timing_sleep",
                        inputs: {
                            SECS: {
                                block: {
                                    type: "value_number",
                                    fields: {
                                        NUM: 1
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "block",
                        type: "timing_time"
                    }, {
                        kind: "block",
                        type: "timing_ticksms"
                    }]
                }, {
                    kind: "category",
                    name: "Other",
                    categorystyle: "other_category",
                    expanded: !1,
                    contents: [{
                        kind: "category",
                        name: "Math",
                        categorystyle: "math_category",
                        contents: [{
                            kind: "block",
                            type: "math_arithmetic",
                            inputs: {
                                A: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 0
                                        }
                                    }
                                },
                                B: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 0
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_single",
                            inputs: {
                                NUM: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 9
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_trig",
                            inputs: {
                                NUM: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 45
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_constant"
                        }, {
                            kind: "block",
                            type: "math_number_property",
                            inputs: {
                                NUMBER_TO_CHECK: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 0
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_round",
                            inputs: {
                                NUM: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 3.1
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_on_list"
                        }, {
                            kind: "block",
                            type: "math_modulo",
                            inputs: {
                                DIVIDEND: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 64
                                        }
                                    }
                                },
                                DIVISOR: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 10
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_constrain",
                            inputs: {
                                VALUE: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 50
                                        }
                                    }
                                },
                                LOW: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 0
                                        }
                                    }
                                },
                                HIGH: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 100
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_random_int",
                            inputs: {
                                FROM: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 1
                                        }
                                    }
                                },
                                TO: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 100
                                        }
                                    }
                                }
                            }
                        }, {
                            kind: "block",
                            type: "math_random_float"
                        }, {
                            kind: "block",
                            type: "math_atan2",
                            inputs: {
                                X: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 1
                                        }
                                    }
                                },
                                Y: {
                                    block: {
                                        type: "value_number",
                                        fields: {
                                            NUM: 1
                                        }
                                    }
                                }
                            }
                        }]
                    }, {
                        kind: "category",
                        name: "Data List",
                        categorystyle: "dataList_category",
                        contents: [{
                            kind: "block",
                            type: "lists_create_empty"
                        }, {
                            kind: "block",
                            type: "lists_repeat"
                        }, {
                            kind: "block",
                            type: "lists_reverse"
                        }, {
                            kind: "block",
                            type: "lists_isEmpty"
                        }, {
                            kind: "block",
                            type: "lists_length"
                        }, {
                            kind: "block",
                            type: "lists_create_with"
                        }, {
                            kind: "block",
                            type: "lists_indexOf"
                        }, {
                            kind: "block",
                            type: "lists_getIndex"
                        }, {
                            kind: "block",
                            type: "lists_setIndex"
                        }, {
                            kind: "block",
                            type: "lists_getSublist"
                        }, {
                            kind: "block",
                            type: "lists_sort"
                        }, {
                            kind: "block",
                            type: "lists_split"
                        }]
                    }, {
                        kind: "category",
                        name: "External",
                        categorystyle: "external_category",
                        contents: []
                    }, {
                        kind: "category",
                        name: "Variables",
                        custom: "VARIABLE",
                        categorystyle: "variables_category"
                    }]
                }]
            };
            var et = n(8993),
                en = n(8266),
                ea = n(9187),
                el = n(1057),
                er = n(1392),
                eo = n(1927),
                es = n(1310),
                ei = n(8553),
                ec = n(4898),
                ed = n(8004),
                eu = n(7523),
                em = n(9439),
                ep = n(3848);
            let ef = () => {
                    let [e, t] = (0, r.useState)(""), {
                        code: n,
                        setCode: l
                    } = (0, X.h)(), {
                        client: o
                    } = (0, er.x)(), {
                        setClientResponses: s
                    } = (0, eo.v)(), i = (0, r.useRef)(null), {
                        setWorkspaceRef: d
                    } = (0, z.n)(), u = (0, r.useCallback)(e => {
                        i.current = e, d(e)
                    }, [d]), {
                        toast: m,
                        dismiss: p
                    } = (0, Y.pm)(), [f, y] = (0, el._)(ea._.localStorage.cyobot_local_storage_code_executing, !1), [g, x] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        o.addOnMessageReceiveCallback("onMessageReceive", e => {
                            if ("STARTCODERUNNING" === e) y(!0);
                            else {
                                if ("ENDCODERUNNING" !== e) return;
                                y(!1)
                            }
                        })
                    }, [o, y]);
                    let b = (0, r.useCallback)(() => {
                            o.send(n), s([])
                        }, [o, n, s]),
                        k = (0, r.useCallback)(() => {
                            o.interrupt(), y(!1)
                        }, [o, y]),
                        {
                            robotIPAddress: _
                        } = (0, es.W)(),
                        h = (0, r.useCallback)(async (e, t, n) => {
                            if (g) try {
                                let a = await ei.Z.post("".concat(null === _ ? "" : "http://".concat(_), "/api/deploy"), {
                                    code: e
                                }, {
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                });
                                if (200 !== a.status) throw a;
                                if ('"fail"' == a.data) {
                                    t(!1), n({
                                        title: "Error: Fail to deploy",
                                        description: "Please try again",
                                        variant: "destructive"
                                    });
                                    return
                                }
                                n({
                                    title: "Success",
                                    description: "Deployed code"
                                }), t(!1)
                            } catch (e) {
                                t(!1), console.error(e), n({
                                    title: "Uh oh, something went wrong...",
                                    description: "Please try again",
                                    variant: "destructive"
                                });
                                return
                            }
                        }, [g, _]),
                        [v, N] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        g && h(n, x, m)
                    }, [n, g, h, m]);
                    let C = (0, r.useCallback)(() => {
                        i.current && (i.current.clear(), t(""))
                    }, []);
                    return (0, a.jsxs)("div", {
                        className: "py-4 m-full h-full flex flex-col",
                        children: [(0, a.jsx)("div", {
                            className: "flex-1 relative",
                            children: (0, a.jsx)("div", {
                                className: "absolute w-full h-[calc(100%-40px-8px)] bg-muted",
                                children: (0, a.jsx)(ep.E7, {
                                    toolboxConfiguration: ee,
                                    initialXml: e,
                                    className: "m-full h-full",
                                    workspaceConfiguration: {
                                        grid: {
                                            spacing: 20,
                                            length: 3,
                                            colour: "#ccc",
                                            snap: !0
                                        },
                                        trashcan: !0,
                                        zoom: {
                                            controls: !0,
                                            wheel: !0,
                                            startScale: 1,
                                            maxScale: 3,
                                            minScale: .3,
                                            scaleSpeed: 1.2,
                                            pinch: !0
                                        },
                                        maxInstances: {
                                            alert_context: 1
                                        },
                                        media: "./_next/media/",
                                        sounds: !1,
                                        theme: "CYOBot"
                                    },
                                    onWorkspaceChange: function (e) {
                                        l(q.pythonGenerator.workspaceToCode(e))
                                    },
                                    onXmlChange: t,
                                    onInject: u
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "relative",
                            children: (0, a.jsxs)("div", {
                                className: "absolute bottom-0 w-full flex flex-row justify-end space-x-4 px-4",
                                children: [(0, a.jsxs)(c.z, {
                                    className: "".concat(g ? "cursor-not-allowed bg-muted/50 hover:bg-muted/50" : "cursor-pointer", " "),
                                    variant: "muted",
                                    onClick: C,
                                    children: [(0, a.jsx)(ec.Z, {
                                        className: "h-4 w-4 mr-1.5"
                                    }), "Clear"]
                                }), (0, a.jsxs)(c.z, {
                                    variant: "destructive",
                                    className: "text-background ".concat(g ? "cursor-not-allowed hover:bg-destructive/50 bg-destructive/50" : "bg-destructive"),
                                    onClick: () => {
                                        if ("connected" !== o.status) {
                                            m({
                                                title: "Robot is not connected",
                                                description: "Please connect your robot to break",
                                                variant: "destructive"
                                            });
                                            return
                                        }
                                        k()
                                    },
                                    children: [(0, a.jsx)(ed.Z, {
                                        className: "h-4 w-4 mr-1.5"
                                    }), "Break"]
                                }), (0, a.jsxs)(c.z, {
                                    variant: "positive",
                                    className: "".concat(f || g ? "bg-positive/30 hover:bg-positive/30 backdrop-blur-md cursor-not-allowed" : "text-primary cursor-pointer"),
                                    onClick: () => {
                                        g || f || ("connected" !== o.status ? m({
                                            title: "Robot is not connected",
                                            description: "Please connect your robot to run",
                                            variant: "destructive"
                                        }) : (p(), b()))
                                    },
                                    children: [f ? (0, a.jsx)(en.$, {
                                        className: "h-4 w-4 mr-1.5"
                                    }) : (0, a.jsx)(eu.Z, {
                                        className: "h-4 w-4 mr-1.5"
                                    }), "Run"]
                                }), (0, a.jsxs)(c.z, {
                                    variant: "secondary",
                                    className: "".concat(g || f ? "bg-secondary/50 hover:bg-secondary/50 backdrop-blur-md cursor-not-allowed" : "cursor-pointer"),
                                    onClick: () => {
                                        g || f || ("connected" !== o.status ? m({
                                            title: "Robot is not connected",
                                            description: "Please connect your robot to deploy",
                                            variant: "destructive"
                                        }) : (p(), N(!0)))
                                    },
                                    children: [(0, a.jsx)(em.Z, {
                                        className: "h-4 w-4 mr-1.5"
                                    }), "Deploy"]
                                })]
                            })
                        }), (0, a.jsx)(et.aR, {
                            open: v,
                            onOpenChange: N,
                            children: (0, a.jsxs)(et.zJ, {
                                children: [(0, a.jsx)(et.dh, {}), (0, a.jsxs)(et._T, {
                                    children: [(0, a.jsx)(et.f$, {
                                        children: "Confirm Code Deployment"
                                    }), (0, a.jsx)(et.yT, {
                                        children: "Deploying this code will overwrite the portal feature. Do you want to continue?"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex justify-end gap-4",
                                        children: [(0, a.jsx)(et.le, {
                                            onClick: () => {
                                                x(!1)
                                            },
                                            children: "Cancel"
                                        }), (0, a.jsx)(et.OL, {
                                            onClick: () => {
                                                x(!0)
                                            },
                                            children: "Confirm"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                ey = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        type: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("input", {
                        type: l,
                        className: (0, o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", n),
                        ref: t,
                        ...r
                    })
                });
            ey.displayName = "Input";
            var eg = n(6523),
                ex = n(5881),
                eb = n(7834),
                ek = n(4541);
            let e_ = e => {
                    let {
                        password: t,
                        setPassword: n,
                        selectedSSID: l,
                        connecting: o,
                        setConnecting: s,
                        onClickSelectWifiNetwork: i,
                        onClickConnect: d
                    } = e, [u, m] = (0, r.useState)(!1);
                    return (0, a.jsxs)("div", {
                        className: "bg-muted/50 rounded-lg px-6 py-4 my-4 flex flex-col space-y-4 max-w-5xl mx-auto",
                        children: [(0, a.jsx)(eg.k, {
                            className: "text-secondary text-center",
                            children: "Connect CYOBot to WiFi"
                        }), (0, a.jsxs)("div", {
                            children: ["Input password for WiFi ", (0, a.jsx)("b", {
                                children: l
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative",
                            children: [(0, a.jsx)(ey, {
                                placeholder: "Password",
                                value: null != t ? t : "",
                                type: u ? "text" : "password",
                                onChange: e => n("" === e.target.value ? void 0 : e.target.value)
                            }), (0, a.jsx)("div", {
                                className: "absolute right-0 top-0 h-full flex items-center",
                                children: u ? (0, a.jsx)(ex.Z, {
                                    className: "h-4.5 w-4.5 mr-3",
                                    onClick: () => m(!1)
                                }) : (0, a.jsx)(eb.Z, {
                                    className: "h-4.5 w-4.5 mr-3",
                                    onClick: () => m(!0)
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-row justify-between items-center space-x-48",
                            children: [(0, a.jsx)("button", {
                                onClick: i,
                                children: (0, a.jsx)("div", {
                                    className: "flex flex-row items-center justify-start",
                                    children: (0, a.jsxs)("span", {
                                        className: "hover:border-b border-foreground",
                                        children: [(0, a.jsx)(ek.Z, {
                                            className: "w-4 h-4 mr-1 inline"
                                        }), "Back to select WiFi network"]
                                    })
                                })
                            }), o ? (0, a.jsx)(en.$, {}) : (0, a.jsx)(c.z, {
                                variant: "default",
                                onClick: d,
                                children: "Connect"
                            })]
                        })]
                    })
                },
                eh = e => {
                    let {
                        onClickReturnToHome: t,
                        onClickSelectWifi: n
                    } = e, {
                        config: l
                    } = (0, G.Z)();
                    return (0, a.jsxs)("div", {
                        className: "bg-muted/50 rounded-lg px-6 py-4 my-4 flex flex-col space-y-4 max-w-5xl mx-auto relative",
                        children: [(0, a.jsx)("button", {
                            onClick: n,
                            className: "absolute top-8 left-8",
                            children: (0, a.jsx)("div", {
                                className: "flex flex-row items-center justify-start",
                                children: (0, a.jsxs)("span", {
                                    className: "hover:border-b border-foreground",
                                    children: [(0, a.jsx)(ek.Z, {
                                        className: "w-4 h-4 mr-1 inline"
                                    }), "Back to select WiFi network"]
                                })
                            })
                        }), (0, a.jsx)(eg.k, {
                            className: "text-secondary text-center",
                            children: "Connect CYOBot to WiFi"
                        }), (0, a.jsx)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-x-8",
                            children: l.onboarding.openPortalInstructionCards.map((e, t) => (0, a.jsxs)(d, {
                                className: "max-w-xs",
                                children: [(0, a.jsx)(u, {
                                    className: "text-secondary text-xl",
                                    children: e.header
                                }), (0, a.jsx)(f, {
                                    className: "text-lg",
                                    children: e.content
                                })]
                            }, t))
                        }), (0, a.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, a.jsx)(c.z, {
                                variant: "default",
                                onClick: t,
                                children: "Return to home"
                            })
                        })]
                    })
                };

            function ev(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, o.cn)("animate-pulse rounded-md bg-muted", t),
                    ...n
                })
            }
            var eN = n(678);
            let eC = eN.z.object({
                ssid: eN.z.string(),
                strength: eN.z.number()
            });
            var ej = n(3328);
            let ew = () => {
                let {
                    config: e
                } = (0, G.Z)(), {
                    robotIPAddress: t
                } = (0, es.W)(), [n, a] = (0, r.useState)(), {
                    data: l,
                    refetch: o
                } = (0, ej.useQuery)(e.queryIndices.useNetworks, async () => {
                    try {
                        let e = await ei.Z.get("".concat(null === t ? "" : "http://".concat(t), "/api/wifi"));
                        if (200 !== e.status) throw e;
                        return eN.z.array(eC).parse(e.data)
                    } catch (e) {
                        return console.error(e), []
                    }
                });
                return (0, r.useEffect)(() => {
                    l && a(l)
                }, [l]), {
                    networks: n,
                    refetchNetworks: async () => {
                        await o()
                    }
                }
            };
            var eS = n(1693);
            let eE = e => {
                    let {
                        onSelectSSID: t
                    } = e, {
                        networks: n,
                        refetchNetworks: l
                    } = ew();
                    return (0, a.jsxs)("div", {
                        className: "bg-muted/50 rounded-lg px-6 py-4 my-4 flex flex-col space-y-4 max-w-5xl mx-auto",
                        children: [(0, a.jsx)(eg.k, {
                            className: "text-secondary text-center",
                            children: "Connect CYOBot to WiFi"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-row justify-between",
                            children: [(0, a.jsx)("header", {
                                children: "Choose your WiFi network"
                            }), (0, a.jsx)("button", {
                                onClick: l,
                                children: (0, a.jsx)(eS.Z, {
                                    className: "h-5 w-5"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "h-40 flex flex-col space-y-4 overflow-y-auto",
                            children: n ? n.length > 0 ? n.map((e, n) => (0, a.jsx)("button", {
                                onClick: () => t(e.ssid),
                                children: (0, a.jsxs)("div", {
                                    className: "flex justify-between items-center rounded-lg px-4 py-2 bg-background hover:bg-background/70",
                                    children: [(0, a.jsx)("span", {
                                        children: e.ssid
                                    }), (0, a.jsx)("span", {
                                        children: e.strength
                                    })]
                                })
                            }, n)) : (0, a.jsx)("div", {
                                className: "flex justify-center items-center rounded-lg px-4 py-2 bg-background hover:bg-background/70 text-center",
                                children: "No networks found"
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(ev, {
                                    className: "w-full h-12 rouned-lg"
                                }), (0, a.jsx)(ev, {
                                    className: "w-full h-12 rouned-lg"
                                }), (0, a.jsx)(ev, {
                                    className: "w-full h-12 rouned-lg"
                                }), (0, a.jsx)(ev, {
                                    className: "w-full h-12 rouned-lg"
                                })]
                            })
                        })]
                    })
                },
                eO = O.fC;
            O.xz;
            let eR = O.h_;
            O.x8;
            let eT = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(O.aV, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...l
                })
            });
            eT.displayName = O.aV.displayName;
            let eM = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    onClickOutside: s,
                    onClickClose: i,
                    onPressEscape: c,
                    ...d
                } = e;
                return r.useEffect(() => {
                    let e = e => {
                        "Escape" === e.key && c && c()
                    };
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [c]), (0, a.jsxs)(eR, {
                    children: [(0, a.jsx)(eT, {
                        onClick: s
                    }), (0, a.jsxs)(O.VY, {
                        ref: t,
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", n),
                        ...d,
                        children: [l, (0, a.jsxs)(O.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            onClick: i,
                            children: [(0, a.jsx)(R.Z, {
                                className: "h-4 w-4"
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            eM.displayName = O.VY.displayName;
            let eL = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(O.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", n),
                    ...l
                })
            });
            eL.displayName = O.Dx.displayName;
            let eI = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(O.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", n),
                    ...l
                })
            });
            eI.displayName = O.dk.displayName;
            var eU = n(7501),
                eP = n(2145);
            let eD = e => {
                    let {
                        setOpen: t,
                        selectedSSID: n,
                        setSelectedSSID: l,
                        password: o,
                        setPassword: s,
                        connecting: i,
                        setConnecting: c,
                        connectToWifi: d
                    } = e, {
                        toast: u
                    } = (0, Y.pm)(), [m, p] = (0, r.useState)(0);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [0 === m && (0, a.jsx)(eh, {
                            onClickReturnToHome: () => t(!1),
                            onClickSelectWifi: () => p(1)
                        }), 1 === m && (0, a.jsx)(eE, {
                            onSelectSSID: e => {
                                l(e), p(2)
                            }
                        }), 2 === m && (0, a.jsx)(e_, {
                            selectedSSID: n,
                            password: o,
                            setPassword: s,
                            onClickSelectWifiNetwork: () => p(1),
                            onClickConnect: async () => {
                                n && o && (await d(n, o, c, u), p(0))
                            },
                            connecting: i,
                            setConnecting: c
                        })]
                    })
                },
                eA = e => {
                    let {
                        setOpen: t,
                        selectedSSID: n,
                        setSelectedSSID: l,
                        password: o,
                        setPassword: s,
                        connecting: i,
                        setConnecting: c,
                        connectToWifi: d
                    } = e, {
                        toast: u
                    } = (0, Y.pm)(), [m, p] = (0, r.useState)(0);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [0 === m && (0, a.jsx)(eE, {
                            onSelectSSID: e => {
                                l(e), p(1)
                            }
                        }), 1 === m && (0, a.jsx)(e_, {
                            selectedSSID: n,
                            password: o,
                            setPassword: s,
                            onClickSelectWifiNetwork: () => p(0),
                            onClickConnect: async () => {
                                n && o && (await d(n, o, c, u), p(2))
                            },
                            connecting: i,
                            setConnecting: c
                        }), 2 === m && (0, a.jsx)(eh, {
                            onClickReturnToHome: () => t(!1),
                            onClickSelectWifi: () => p(0)
                        })]
                    })
                },
                eB = () => {
                    let {
                        open: e,
                        setOpen: t
                    } = (0, eP.K)(), {
                        status: n
                    } = (0, eU.c)(), [l, o] = (0, r.useState)(), [s, i] = (0, r.useState)(), [c, d] = (0, r.useState)(!1), {
                        robotIPAddress: u
                    } = (0, es.W)(), m = (0, r.useCallback)(async (e, t, n, a) => {
                        n(!0), a({
                            title: "Connecting to WiFi..."
                        });
                        try {
                            let l = await ei.Z.post("".concat(null === u ? "" : "http://".concat(u), "/api/wifi"), {
                                ssid: e,
                                password: t
                            }, {
                                headers: {
                                    "Content-Type": "text/plain"
                                }
                            });
                            if (200 !== l.status) throw l;
                            if ('"fail"' == l.data) {
                                n(!1), a({
                                    title: "Wrong WiFi password",
                                    description: "Please try again",
                                    variant: "destructive"
                                });
                                return
                            }
                            a({
                                title: "Success",
                                description: "Connected to WiFi"
                            }), n(!1)
                        } catch (e) {
                            n(!1), console.error(e), a({
                                title: "Uh oh, something went wrong...",
                                description: "Please try again",
                                variant: "destructive"
                            });
                            return
                        }
                    }, [u]);
                    return (0, a.jsx)(eO, {
                        open: e,
                        children: (0, a.jsx)(eM, {
                            className: "lg:max-w-none lg:w-3/4",
                            onClickOutside: () => t(!1),
                            onClickClose: () => t(!1),
                            onPressEscape: () => t(!1),
                            children: "connected" === n ? (0, a.jsx)(eD, {
                                open: e,
                                setOpen: t,
                                selectedSSID: l,
                                setSelectedSSID: o,
                                password: s,
                                setPassword: i,
                                connecting: c,
                                setConnecting: d,
                                connectToWifi: m
                            }) : (0, a.jsx)(eA, {
                                open: e,
                                setOpen: t,
                                selectedSSID: l,
                                setSelectedSSID: o,
                                password: s,
                                setPassword: i,
                                connecting: c,
                                setConnecting: d,
                                connectToWifi: m
                            })
                        })
                    })
                };
            var eG = n(2421);
            let eV = eG.fC,
                eF = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...l
                    } = e;
                    return (0, a.jsx)(eG.ck, {
                        ref: t,
                        className: (0, o.cn)("border-b", n),
                        ...l
                    })
                });
            eF.displayName = "AccordionItem";
            let eW = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    ...r
                } = e;
                return (0, a.jsx)(eG.h4, {
                    className: "flex",
                    children: (0, a.jsxs)(eG.xz, {
                        ref: t,
                        className: (0, o.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", n),
                        ...r,
                        children: [l, (0, a.jsx)(x.Z, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            eW.displayName = eG.xz.displayName;
            let ez = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    ...r
                } = e;
                return (0, a.jsx)(eG.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...r,
                    children: (0, a.jsx)("div", {
                        className: (0, o.cn)("pb-4 pt-0", n),
                        children: l
                    })
                })
            });
            ez.displayName = eG.VY.displayName;
            var eZ = n(3526);
            let eX = (0, l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                eY = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...l
                    } = e;
                    return (0, a.jsx)(eZ.f, {
                        ref: t,
                        className: (0, o.cn)(eX(), n),
                        ...l
                    })
                });
            eY.displayName = eZ.f.displayName;
            var e$ = n(4884);
            let eH = e$.fC,
                eJ = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        children: l,
                        ...r
                    } = e;
                    return (0, a.jsx)(e$.ck, {
                        ref: t,
                        className: (0, o.cn)("p-3 transition-colors duration-200 ease-in flex items-center justify-center leading-none select-none first:ml-0 first:rounded-l-md last:rounded-r-md ml-[1px] data-[state=on]:bg-secondary data-[state=on]:text-accent focus:relative focus:outline-none focus:ring-2 focus:ring-black border border-input bg-background hover:bg-accent hover:text-accent-foreground", n),
                        ...r,
                        children: l
                    })
                });
            eJ.displayName = e$.ck.displayName;
            let eK = e => {
                let {
                    config: t,
                    refetchConfig: n,
                    setConfig: l
                } = (0, G.Z)(), [o, s] = (0, r.useState)(t.pythonWebREPL.endpoint), {
                    toast: i
                } = (0, Y.pm)(), {
                    robotIPAddress: c,
                    setRobotIPAddress: d
                } = (0, es.W)(), [u, m] = (0, r.useState)(!1), p = (0, ej.useMutation)({
                    mutationKey: "updateWsEndpoint",
                    mutationFn: async () => {
                        m(!0), await ei.Z.post("".concat(null === c ? "" : "http://".concat(c), "/api/config"), {
                            wsEndpoint: o
                        }, {
                            timeout: 1e4,
                            headers: {
                                "Content-Type": "text/plain"
                            }
                        })
                    },
                    onSettled: () => {
                        m(!1)
                    },
                    onSuccess: async () => {
                        await n()
                    },
                    onError: () => {
                        i({
                            title: "Uh oh, something went wrong...",
                            description: "Fail to update config, please try again",
                            variant: "destructive"
                        })
                    }
                }), [f, y] = (0, r.useState)(t.editor), g = (0, r.useRef)(null), [x, b] = (0, r.useState)(!1), _ = e => {
                    null !== e && "" !== e && e !== f && ("code" === e || "block" === e) && (g.current = e, b(!0))
                };
                return (0, a.jsxs)(T, {
                    open: e.open,
                    children: [(0, a.jsxs)(U, {
                        className: "flex flex-col sm:w-[576px] sm:max-w-xl overflow-y-auto",
                        side: "left",
                        onClickClose: () => e.setOpen(!1),
                        onClickOutside: () => e.setOpen(!1),
                        onPressEscape: () => e.setOpen(!1),
                        children: [(0, a.jsx)(P, {
                            children: (0, a.jsx)(D, {
                                asChild: !0,
                                children: (0, a.jsx)(B, {
                                    children: "Settings"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-8",
                            children: (0, a.jsx)(eV, {
                                type: "single",
                                collapsible: !0,
                                children: (0, a.jsxs)(eF, {
                                    value: "config",
                                    children: [(0, a.jsx)(eW, {
                                        children: "Config"
                                    }), (0, a.jsx)(ez, {
                                        children: (0, a.jsxs)("div", {
                                            className: "mx-1 flex flex-col space-y-4",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col space-y-2",
                                                children: [(0, a.jsx)(eY, {
                                                    children: "Robot IP Address"
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-row items-center justify-center",
                                                    children: [(0, a.jsx)(ey, {
                                                        value: null != c ? c : "",
                                                        onChange: e => {
                                                            d("" === e.target.value ? null : e.target.value), s("ws://".concat(e.target.value, ":8266"))
                                                        }
                                                    }), u ? (0, a.jsx)(en.$, {
                                                        className: "w-6 h-6 mx-2"
                                                    }) : (0, a.jsx)("button", {
                                                        onClick: () => {
                                                            s("ws://".concat(c, ":8266")), p.mutate()
                                                        },
                                                        children: (0, a.jsx)(k.Z, {
                                                            className: "h-6 w-6 mx-2"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex flex-col space-y-2",
                                                children: [(0, a.jsx)(eY, {
                                                    children: "Editor"
                                                }), (0, a.jsxs)(eH, {
                                                    className: "flex flex-row items-center justify-center",
                                                    type: "single",
                                                    value: f,
                                                    "aria-label": "Code editor",
                                                    onValueChange: e => _(e),
                                                    children: [(0, a.jsx)(eJ, {
                                                        value: "code",
                                                        "aria-label": "Code editor",
                                                        children: "Code"
                                                    }), (0, a.jsx)(eJ, {
                                                        value: "block",
                                                        "aria-label": "Block editor",
                                                        children: "Block"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, a.jsx)(A, {
                            className: "mt-auto self-center",
                            children: Z.u.version
                        })]
                    }), (0, a.jsx)(et.aR, {
                        open: x,
                        onOpenChange: b,
                        children: (0, a.jsxs)(et.zJ, {
                            children: [(0, a.jsx)(et.dh, {}), (0, a.jsxs)(et._T, {
                                children: [(0, a.jsx)(et.f$, {
                                    children: "Confirm Change"
                                }), (0, a.jsx)(et.yT, {
                                    children: "Your current progress will be removed. Are you sure you want to change Editor?"
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-end gap-4",
                                    children: [(0, a.jsx)(et.le, {
                                        onClick: () => {
                                            g.current = null, b(!1)
                                        },
                                        children: "Cancel"
                                    }), (0, a.jsx)(et.OL, {
                                        onClick: () => {
                                            null !== g.current && ("code" === g.current || "block" === g.current) && (y(g.current), l({
                                                ...t,
                                                editor: g.current
                                            })), b(!1), e.setOpen(!1)
                                        },
                                        children: "Confirm"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            };
            var eQ = n(8562);
            let eq = r.forwardRef((e, t) => {
                let {
                    className: n,
                    value: l,
                    ...r
                } = e;
                return (0, a.jsx)(eQ.fC, {
                    ref: t,
                    className: (0, o.cn)("relative h-4 w-full overflow-hidden rounded-full bg-muted", n),
                    ...r,
                    children: (0, a.jsx)(eQ.z$, {
                        className: "h-full w-full flex-1 bg-muted-foreground transition-all",
                        style: {
                            transform: "translateX(-".concat(100 - (l || 0), "%)")
                        }
                    })
                })
            });
            eq.displayName = eQ.fC.displayName;
            let e0 = e => {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, a.jsx)("p", {
                    className: (0, o.cn)("leading-7 [&:not(:first-child)]:mt-6", n),
                    children: t
                })
            };
            var e1 = n(9514),
                e2 = n(5747),
                e5 = n(2831),
                e4 = n(9971),
                e9 = n.n(e4),
                e8 = () => {
                    let {
                        config: e
                    } = (0, G.Z)(), [t, l] = (0, r.useState)(10), [o, s] = (0, r.useState)("Loading..."), i = (0, r.useRef)(), d = (0, r.useRef)();
                    (0, r.useEffect)(() => {
                        if (!e || "code" !== e.editor) return;
                        i.current = setInterval(() => {
                            l(t => t > 80 ? (clearInterval(i.current), t) : t + e.codeEditor.loading.progressIncrementValue)
                        }, e.codeEditor.loading.progressIntervalMs);
                        let t = 0;
                        return d.current = setInterval(() => {
                            s(e.codeEditor.loading.messages[t]), t = (t + 1) % e.codeEditor.loading.messages.length
                        }, e.codeEditor.loading.messageIntervalMs), () => {
                            clearInterval(i.current), clearInterval(d.current)
                        }
                    }, [e]);
                    let u = (0, r.useMemo)(() => e9()(() => Promise.all([n.e(767), n.e(984), n.e(82)]).then(n.bind(n, 7082)).then(t => (clearInterval(i.current), clearInterval(d.current), s((e || e5.defaultConfig).codeEditor.loading.onFinishLoadingMessage), l(100), new Promise(n => setTimeout(() => n(t), (e || e5.defaultConfig).codeEditor.loading.onFinishLoadingDelayMs)))).then(e => e.CodeEditor), {
                            loadableGenerated: {
                                webpack: () => [7082]
                            },
                            loading: () => (0, a.jsxs)("div", {
                                className: "h-full flex flex-col space-y-8 justify-center items-center w-4/5 mx-auto",
                                children: [(0, a.jsx)(e0, {
                                    children: o
                                }), (0, a.jsx)(eq, {
                                    value: t,
                                    className: "h-2.5"
                                })]
                            }),
                            ssr: !1
                        }), [e, o, t]),
                        [m, p] = (0, r.useState)(!1),
                        [f, y] = (0, r.useState)(!1),
                        [g, x] = (0, r.useState)(200),
                        [b, k] = (0, r.useState)(!1),
                        _ = (0, r.useRef)(null),
                        [h, v] = (0, r.useState)(0);
                    return (0, r.useEffect)(() => {
                        let e = () => {
                            _.current && v(_.current.clientWidth)
                        };
                        return e(), window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, a.jsxs)("main", {
                        ref: _,
                        className: "mt-20 fixed w-full h-[calc(100%-140px)]",
                        children: [(0, a.jsxs)("div", {
                            className: "mx-6 mt-4 space-x-4",
                            children: [(0, a.jsxs)(c.z, {
                                variant: "outline",
                                className: "text-primary",
                                onClick: () => p(!0),
                                children: [(0, a.jsx)(e1.Z, {
                                    className: "h-4 w-4 mr-1.5"
                                }), "Activity"]
                            }), (0, a.jsxs)(c.z, {
                                variant: "outline",
                                className: "text-primary",
                                onClick: () => y(!0),
                                children: [(0, a.jsx)(e2.Z, {
                                    className: "h-4 w-4 mr-1.5"
                                }), "Settings"]
                            })]
                        }), "code" === e.editor ? (0, a.jsx)("div", {
                            className: "flex h-[calc(100%-56px-24px)] mt-6",
                            children: (0, a.jsx)(u, {})
                        }) : (0, a.jsx)(ef, {}), (0, a.jsx)(eB, {}), (0, a.jsx)(H, {
                            open: m,
                            setOpen: p
                        }), (0, a.jsx)(eK, {
                            open: f,
                            setOpen: y
                        })]
                    })
                }
        },
        8993: function (e, t, n) {
            "use strict";
            n.d(t, {
                OL: function () {
                    return f
                },
                _T: function () {
                    return u
                },
                aR: function () {
                    return i
                },
                dh: function () {
                    return d
                },
                f$: function () {
                    return m
                },
                le: function () {
                    return y
                },
                yT: function () {
                    return p
                },
                zJ: function () {
                    return c
                }
            });
            var a = n(9219),
                l = n(710),
                r = n(2564),
                o = n(4096),
                s = n(1962);
            let i = l.fC;
            l.xz;
            let c = l.h_,
                d = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...r
                    } = e;
                    return (0, a.jsx)(l.aV, {
                        className: (0, s.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                        ...r,
                        ref: t
                    })
                });
            d.displayName = l.aV.displayName;
            let u = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsxs)(c, {
                    children: [(0, a.jsx)(d, {}), (0, a.jsx)(l.VY, {
                        ref: t,
                        className: (0, s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", n),
                        ...r
                    })]
                })
            });
            u.displayName = l.VY.displayName;
            let m = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(l.Dx, {
                    ref: t,
                    className: (0, s.cn)("text-lg font-semibold", n),
                    ...r
                })
            });
            m.displayName = l.Dx.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(l.dk, {
                    ref: t,
                    className: (0, s.cn)("text-sm text-muted-foreground", n),
                    ...r
                })
            });
            p.displayName = l.dk.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(l.aU, {
                    ref: t,
                    className: (0, s.cn)((0, o.d)(), n),
                    ...r
                })
            });
            f.displayName = l.aU.displayName;
            let y = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(l.$j, {
                    ref: t,
                    className: (0, s.cn)((0, o.d)({
                        variant: "outline"
                    }), n),
                    ...r
                })
            });
            y.displayName = l.$j.displayName
        },
        8266: function (e, t, n) {
            "use strict";
            n.d(t, {
                $: function () {
                    return r
                }
            });
            var a = n(9219),
                l = n(1962);
            let r = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("div", {
                    role: "status",
                    children: [(0, a.jsxs)("svg", {
                        "aria-hidden": "true",
                        className: (0, l.cn)("w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", t),
                        viewBox: "0 0 100 101",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "currentColor"
                        }), (0, a.jsx)("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentFill"
                        })]
                    }), (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Loading..."
                    })]
                })
            }
        },
        6523: function (e, t, n) {
            "use strict";
            n.d(t, {
                k: function () {
                    return r
                }
            });
            var a = n(9219),
                l = n(1962);
            let r = e => {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, a.jsx)("h4", {
                    className: (0, l.cn)("scroll-m-20 text-xl font-semibold tracking-tight", n),
                    children: t
                })
            }
        },
        1382: function (e, t, n) {
            "use strict";
            n.d(t, {
                h: function () {
                    return o
                }
            });
            var a = n(9187),
                l = n(6833),
                r = n(2564);
            let o = () => {
                let {
                    code: e,
                    setCode: t
                } = (0, r.useContext)(l.q);
                return (0, r.useEffect)(() => {
                    let e = localStorage.getItem(a._.localStorage.cyobot_local_storage_code);
                    e && t(e)
                }, [t]), (0, r.useEffect)(() => {
                    localStorage.setItem(a._.localStorage.cyobot_local_storage_code, e)
                }, [e]), {
                    code: e,
                    setCode: t
                }
            }
        },
        7233: function (e, t, n) {
            "use strict";
            n.d(t, {
                O: function () {
                    return o
                }
            });
            var a = n(9187),
                l = n(6736),
                r = n(2564);
            let o = () => {
                let {
                    openedFiles: e,
                    setOpenedFiles: t
                } = (0, r.useContext)(l.J), n = t => e.some(e => e.id === t);
                return (0, r.useEffect)(() => {
                    let e = localStorage.getItem(a._.localStorage.cyobot_local_storage_opened_files);
                    e && t(JSON.parse(e))
                }, [t]), {
                    openedFiles: e,
                    addOpenedFile: e => {
                        n(e.id) || t(t => {
                            let n = [...t, e];
                            return localStorage.setItem(a._.localStorage.cyobot_local_storage_opened_files, JSON.stringify(n)), n
                        })
                    },
                    removeOpenedFile: e => {
                        n(e) && t(t => {
                            let n = t.filter(t => t.id !== e);
                            return localStorage.setItem(a._.localStorage.cyobot_local_storage_opened_files, JSON.stringify(n)), n
                        })
                    },
                    isFileExists: n
                }
            }
        },
        1927: function (e, t, n) {
            "use strict";
            n.d(t, {
                v: function () {
                    return r
                }
            });
            var a = n(1991),
                l = n(2564);
            let r = () => {
                let {
                    clientResponses: e,
                    setClientResponses: t
                } = (0, l.useContext)(a.L);
                return {
                    clientResponses: e,
                    setClientResponses: t
                }
            }
        }
    },
    function (e) {
        e.O(0, [917, 847, 623, 442, 711, 253, 151, 744], function () {
            return e(e.s = 5753)
        }), _N_E = e.O()
    }
]);