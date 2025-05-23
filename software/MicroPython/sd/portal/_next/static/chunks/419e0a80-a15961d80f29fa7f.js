(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [917], {
        2652: function (t, e, i) {
            var s, o;
            void 0 !== (o = "function" == typeof (s = function () {
                var t, e, s, o, n, r = {};
                d = function (t, e, i, s) {
                    if (!(t instanceof c) && "string" != typeof t || "" === `${t}`.trim()) throw Error('Invalid type "' + t + '". The type must be a non-empty string or a Blockly.registry.Type.');
                    if (t = `${t}`.toLowerCase(), "string" != typeof e || "" === e.trim()) throw Error('Invalid name "' + e + '". The name must be a non-empty string.');
                    let o = e.toLowerCase();
                    if (!i) throw Error("Can not register a null value");
                    let n = l[t],
                        r = a[t];
                    if (n || (n = l[t] = Object.create(null), r = a[t] = Object.create(null)), p(t, i), !s && n[o]) throw Error('Name "' + o + '" with type "' + t + '" already registered.');
                    n[o] = i, r[o] = e
                }, p = function (t, e) {
                    if (t === String(c.FIELD) && "function" != typeof e.fromJson) throw Error('Type "' + t + '" must have a fromJson function')
                }, g = function (t, e) {
                    t = `${t}`.toLowerCase(), e = e.toLowerCase();
                    let i = l[t];
                    i && i[e] ? (delete l[t][e], delete a[t][e]) : console.warn("Unable to unregister [" + e + "][" + t + "] from the registry.")
                }, b = function (t, e, i) {
                    t = `${t}`.toLowerCase(), e = e.toLowerCase();
                    let s = l[t];
                    if (!s || !s[e]) {
                        if (e = "Unable to find [" + e + "][" + t + "] in the registry.", i) throw Error(e + " You must require or register a " + t + " plugin.");
                        return console.warn(e), null
                    }
                    return s[e]
                }, _ = function (t, e) {
                    return t = `${t}`.toLowerCase(), e = e.toLowerCase(), !!(t = l[t]) && !!t[e]
                }, m = function (t, e, i) {
                    return b(t, e, i)
                }, f = function (t, e, i) {
                    return b(t, e, i)
                }, E = function (t, e, i) {
                    var s = l[t = `${t}`.toLowerCase()];
                    if (!s) {
                        if (s = `Unable to find [${t}] in the registry.`, i) throw Error(`${s} You must require or register a ${t} plugin.`);
                        return console.warn(s), null
                    }
                    if (!e) return s;
                    for (let e of (t = a[t], i = Object.create(null), Object.keys(s))) i[t[e]] = s[e];
                    return i
                }, T = function (t, e, i) {
                    return "function" == typeof (e = e.plugins[String(t)] || h) ? e : m(t, e, i)
                }, k = function (t) {
                    return o5[t] || null
                }, w = function () {
                    let t = [];
                    for (let e in o5) t.push(o5[e]);
                    return t
                }, y = function (t) {
                    o5[t.id] = t
                }, $ = function (t) {
                    delete o5[t.id]
                }, C = function () {
                    return o1
                }, v = function (t) {
                    o1 = t
                }, I = function () {
                    return o6
                }, S = function (t) {
                    o6 = t
                }, R = function () {
                    return o2
                }, D = function (t) {
                    o2 = t
                }, A = function (t) {
                    for (; t.options.parentWorkspace;) t = t.options.parentWorkspace;
                    let e = t.getParentSvg(),
                        i = t.getCachedParentSvgSize();
                    var s = e.parentElement;
                    if (s instanceof HTMLElement) {
                        var o = s.offsetWidth;
                        s = s.offsetHeight, i.width !== o && (e.setAttribute("width", o + "px"), t.setCachedParentSvgSize(o, null)), i.height !== s && (e.setAttribute("height", s + "px"), t.setCachedParentSvgSize(null, s)), t.resize()
                    }
                }, N = function (t, e) {
                    let i = Object.create(null),
                        s = t.getDescendants(!0);
                    e && (t = t.getNextBlock()) && (t = s.indexOf(t), s.splice(t, s.length - t));
                    for (let t = 0, e; e = s[t]; t++) i[e.type] ? i[e.type]++ : i[e.type] = 1;
                    return i
                }, O = function (t) {
                    return function () {
                        this.jsonInit(t)
                    }
                }, x = function (t) {
                    o8.defineBlocksWithJsonArrayInternal(t)
                }, r.createBlockDefinitionsFromJsonArray$$module$build$src$core$common = function (t) {
                    let e = {};
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if (!s) {
                            console.warn(`Block definition #${i} in JSON array is ${s}. Skipping`);
                            continue
                        }
                        let o = s.type;
                        o ? e[o] = {
                            init: O(s)
                        } : console.warn(`Block definition #${i} in JSON array is missing a type attribute. Skipping.`)
                    }
                    return e
                }, r.defineBlocks$$module$build$src$core$common = function (t) {
                    for (let e of Object.keys(t)) {
                        let i = t[e];
                        e in o3 && console.warn(`Block definiton "${e}" overwrites previous definition.`), o3[e] = i
                    }
                }, L = function () {
                    return "blockly-" + (ne++).toString(36)
                }, M = function () {
                    return nt.genUid()
                }, B = function (t) {
                    no = t
                }, P = function () {
                    return no
                }, F = function (t) {
                    nI.fireInternal(t)
                }, H = function () {
                    var t = G(nv, !0);
                    nv.length = 0;
                    for (let i = 0, s; s = t[i]; i++)
                        if (s.workspaceId) {
                            var e = k(s.workspaceId);
                            e && e.fireChangeListener(s)
                        } for (let i of t = new Set(t.map(t => t.workspaceId))) {
                        let s;
                        if (i && (t = k(i))) {
                            for (e = (t = t.getUndoStack()).length; 0 < e; e--) {
                                let i = t[e - 1];
                                if ("" === i.group) break;
                                if (void 0 === s) s = i.group;
                                else if (i.group !== s) break
                            }
                            s && e != t.length - 1 && (e = t.splice(e, t.length - e), e = G(e, !0), t.push(...e))
                        }
                    }
                }, G = function (t, e) {
                    t = t.slice(), e || t.reverse();
                    let i = [],
                        s = Object.create(null);
                    for (let e = 0, l; l = t[e]; e++)
                        if (!l.isNull()) {
                            var o = [l.isUiEvent ? nc : l.type, l.blockId, l.workspaceId].join(" "),
                                n = s[o];
                            let t = n ? n.event : null;
                            n ? l.type === r.MOVE$$module$build$src$core$events$utils && n.index === e - 1 ? (o = l, t.newParentId = o.newParentId, t.newInputName = o.newInputName, t.newCoordinate = o.newCoordinate, o.reason && (t.reason ? (o = new Set(o.reason.concat(t.reason)), t.reason = Array.from(o)) : t.reason = o.reason), n.index = e) : l.type === r.CHANGE$$module$build$src$core$events$utils && l.element === t.element && l.name === t.name ? t.newValue = l.newValue : l.type === nE ? (n = l, t.viewTop = n.viewTop, t.viewLeft = n.viewLeft, t.scale = n.scale, t.oldScale = n.oldScale) : (l.type !== np || t.type !== nb) && (s[o] = {
                                event: l,
                                index: e
                            }, i.push(l)) : (s[o] = {
                                event: l,
                                index: e
                            }, i.push(l))
                        } t = i.filter(function (t) {
                        return !t.isNull()
                    }), e || t.reverse();
                    for (let e = 1, i; i = t[e]; e++) i.type === r.CHANGE$$module$build$src$core$events$utils && "mutation" === i.element && t.unshift(t.splice(e, 1)[0]);
                    return t
                }, U = function () {
                    for (let t = 0, e; e = nv[t]; t++) e.recordUndo = !1
                }, r.disable$$module$build$src$core$events$utils = function () {
                    nn++
                }, r.enable$$module$build$src$core$events$utils = function () {
                    nn--
                }, W = function () {
                    return 0 === nn
                }, r.getGroup$$module$build$src$core$events$utils = function () {
                    return ns
                }, r.setGroup$$module$build$src$core$events$utils = function (t) {
                    nI.setGroupInternal(t)
                }, V = function (t) {
                    let e = [];
                    t = t.getDescendants(!1);
                    for (let i = 0, s; s = t[i]; i++) e[i] = s.id;
                    return e
                }, z = function (t, e) {
                    let i = X(t.type);
                    if (!i) throw Error("Unknown event type.");
                    return i.fromJson(t, e)
                }, X = function (t) {
                    let e = m(c.EVENT, t);
                    if (!e) throw Error(`Event type ${t} not found in registry.`);
                    return e
                }, Y = function (t) {
                    if ((t.type === r.MOVE$$module$build$src$core$events$utils || t.type === r.CREATE$$module$build$src$core$events$utils) && t.workspaceId) {
                        var e = k(t.workspaceId);
                        if (!t.blockId) throw Error("Encountered a blockEvent without a proper blockId");
                        if (t = e.getBlockById(t.blockId)) {
                            let i = no;
                            try {
                                no = !1;
                                let i = t.getParent();
                                if (i && i.isEnabled()) {
                                    let e = t.getDescendants(!1);
                                    for (let t = 0, i; i = e[t]; t++) i.setEnabled(!0)
                                } else if ((t.outputConnection || t.previousConnection) && !e.isDragging())
                                    do t.setEnabled(!1), t = t.getNextBlock(); while (t)
                            } finally {
                                no = i
                            }
                        }
                    }
                }, K = function (t, e) {
                    J(), nP = setTimeout(function () {
                        e && e.handleRightClick(t)
                    }, nx)
                }, J = function () {
                    nP && (clearTimeout(nP), nP = 0)
                }, j = function () {
                    nM = null
                }, Z = function (t) {
                    return !t.type.startsWith("pointer") || t instanceof PointerEvent && Q(t)
                }, q = function (t) {
                    return `${t.pointerId}`
                }, Q = function (t) {
                    let e = q(t);
                    return nM ? nM === e : "pointerdown" === t.type && (nM = e, !0)
                }, tt = function (t, e, i, s, o) {
                    function n(t) {
                        (o || Z(t)) && (i ? s.call(i, t) : s(t))
                    }
                    let r = [];
                    if (e in nB)
                        for (let i = 0; i < nB[e].length; i++) {
                            let s = nB[e][i];
                            t.addEventListener(s, n, !1), r.push([t, s, n])
                        } else t.addEventListener(e, n, !1), r.push([t, e, n]);
                    return r
                }, te = function (t, e, i, s) {
                    function o(t) {
                        i ? s.call(i, t) : s(t)
                    }
                    let n = [];
                    if (e in nB)
                        for (let i = 0; i < nB[e].length; i++) {
                            let s = nB[e][i];
                            t.addEventListener(s, o, !1), n.push([t, s, o])
                        } else t.addEventListener(e, o, !1), n.push([t, e, o]);
                    return n
                }, ti = function (t) {
                    let e = t[t.length - 1][2];
                    for (; t.length;) {
                        let [e, i, s] = t.pop();
                        e.removeEventListener(i, s, !1)
                    }
                    return e
                }, ts = function (t) {
                    if (t.target instanceof HTMLElement) {
                        if (t.target.isContentEditable || "true" === t.target.getAttribute("data-is-text-input")) return !0;
                        if (t.target instanceof HTMLInputElement) return "text" === (t = t.target).type || "number" === t.type || "email" === t.type || "password" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type;
                        if (t.target instanceof HTMLTextAreaElement) return !0
                    }
                    return !1
                }, to = function (t) {
                    return !!t.ctrlKey && !!nX || 2 === t.button
                }, tn = function (t, e, i) {
                    let s = e.createSVGPoint();
                    return s.x = t.clientX, s.y = t.clientY, i || (i = e.getScreenCTM().inverse()), s.matrixTransform(i)
                }, tr = function (t) {
                    switch (t.deltaMode) {
                        default:
                            return {
                                x: t.deltaX, y: t.deltaY
                            };
                        case 1:
                            return {
                                x: t.deltaX * nK, y: t.deltaY * nK
                            };
                        case 2:
                            return {
                                x: t.deltaX * nJ, y: t.deltaY * nJ
                            }
                    }
                }, tl = function (t, e) {
                    return -1 !== (e = t.indexOf(e)) && (t.splice(e, 1), !0)
                }, ta = function (t) {
                    if (n0) throw Error("CSS already injected");
                    n1 += "\n" + t
                }, th = function (t, e) {
                    n0 || (n0 = !0, t && (t = e.replace(/[\\/]$/, ""), e = n1.replace(/<<<PATH>>>/g, t), n1 = "", (t = document.createElement("style")).id = "blockly-common-style", e = document.createTextNode(e), t.appendChild(e), document.head.insertBefore(t, document.head.firstChild)))
                }, tc = function (t, e, i, s) {
                    t = t + " was deprecated in " + e + " and will be deleted in " + i + ".", s && (t += "\nUse " + s + " instead."), console.warn(t)
                }, tu = function (t, e, i) {
                    for (let i in t = document.createElementNS(rr, `${t}`), e) t.setAttribute(i, `${e[i]}`);
                    return i && i.appendChild(t), t
                }, td = function (t, e) {
                    return !(e = e.split(" ")).every(e => t.classList.contains(e)) && (t.classList.add(...e), !0)
                }, tp = function (t, e) {
                    t.classList.remove(...e.split(" "))
                }, tg = function (t, e) {
                    return !(e = e.split(" ")).every(e => !t.classList.contains(e)) && (t.classList.remove(...e), !0)
                }, tb = function (t) {
                    return t && t.parentNode ? t.parentNode.removeChild(t) : null
                }, t_ = function (t, e) {
                    let i = e.nextSibling;
                    if (!(e = e.parentNode)) throw Error("Reference node has no parent.");
                    i ? e.insertBefore(t, i) : e.appendChild(t)
                }, tm = function (t, e) {
                    t.style.transform = e, t.style["-webkit-transform"] = e
                }, tf = function () {
                    rc++, rh || (rh = Object.create(null))
                }, tE = function () {
                    --rc || (rh = null)
                }, tT = function (t, e, i, s) {
                    return tk(t, e + "pt", i, s)
                }, tk = function (t, e, i, s) {
                    var o;
                    let n = t.textContent;
                    return t = n + "\n" + t.className.baseVal, rh && (o = rh[t]) || (ru || ((o = document.createElement("canvas")).className = "blocklyComputeCanvas", document.body.appendChild(o), ru = o.getContext("2d")), ru.font = i + " " + e + " " + s, o = n ? ru.measureText(n).width : 0, rh && (rh[t] = o)), o
                }, tw = function (t, e, i, s) {
                    let o = document.createElement("span");
                    o.style.font = i + " " + e + " " + s, o.textContent = t, (t = document.createElement("div")).style.width = "1px", t.style.height = "0", (e = document.createElement("div")).style.display = "flex", e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.appendChild(o), e.appendChild(t), document.body.appendChild(e), i = {
                        height: 0,
                        baseline: 0
                    };
                    try {
                        e.style.alignItems = "baseline", i.baseline = t.offsetTop - o.offsetTop, e.style.alignItems = "flex-end", i.height = t.offsetTop - o.offsetTop
                    } finally {
                        document.body.removeChild(e)
                    }
                    return i
                }, ty = function (t) {
                    return r_.getSizeInternal(t)
                }, t$ = function (t) {
                    return new rb(t.offsetWidth, t.offsetHeight)
                }, tC = function (t, e) {
                    return (t = window.getComputedStyle(t))[e] || t.getPropertyValue(e)
                }, tv = function (t) {
                    let e = new n3(0, 0);
                    t = t.getBoundingClientRect();
                    var i = document.documentElement;
                    return i = new n3(window.pageXOffset || i.scrollLeft, window.pageYOffset || i.scrollTop), e.x = t.left + i.x, e.y = t.top + i.y, e
                }, tI = function () {
                    let t = document.body,
                        e = document.documentElement;
                    return new n3(t.scrollLeft || e.scrollLeft, t.scrollTop || e.scrollTop)
                }, tS = function (t) {
                    let e = parseFloat(tC(t, "borderLeftWidth")),
                        i = parseFloat(tC(t, "borderRightWidth")),
                        s = parseFloat(tC(t, "borderTopWidth"));
                    return t = parseFloat(tC(t, "borderBottomWidth")), new rg(s, t, e, i)
                }, tR = function (t, e, i) {
                    t = tD(t, e, i), e.scrollLeft = t.x, e.scrollTop = t.y
                }, tD = function (t, e, i) {
                    var s = tv(t),
                        o = tv(e),
                        n = tS(e);
                    let r = s.x - o.x - n.left;
                    return s = s.y - o.y - n.top, o = t$(t), t = e.clientWidth - o.width, o = e.clientHeight - o.height, n = e.scrollLeft, e = e.scrollTop, i ? (n += r - t / 2, e += s - o / 2) : (n += Math.min(r, Math.max(r - t, 0)), e += Math.min(s, Math.max(s - o, 0))), new n3(n, e)
                }, tA = function (t) {
                    let e = new n3(0, 0);
                    var i = t.x && t.getAttribute("x");
                    let s = t.y && t.getAttribute("y");
                    return i && (e.x = parseInt(i)), s && (e.y = parseInt(s)), (i = (i = t.getAttribute("transform")) && i.match(rf)) && (e.x += Number(i[1]), i[3] && (e.y += Number(i[3]))), (t = t.getAttribute("style")) && -1 < t.indexOf("translate") && (t = t.match(rE)) && (e.x += Number(t[1]), t[3] && (e.y += Number(t[3]))), e
                }, tN = function (t) {
                    let e = 0,
                        i = 0;
                    for (; t;) {
                        let s = tA(t);
                        if (e += s.x, i += s.y, -1 !== (" " + (t.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
                        t = t.parentNode
                    }
                    return new n3(e, i)
                }, tO = function () {
                    let t = tI();
                    return new rg(t.y, document.documentElement.clientHeight + t.y, t.x, document.documentElement.clientWidth + t.x)
                }, tx = function () {
                    let t = document.documentElement,
                        e = window;
                    return new n3(e.pageXOffset || t.scrollLeft, e.pageYOffset || t.scrollTop)
                }, r.createElement$$module$build$src$core$utils$xml = function (t) {
                    return r$.createElementNS(rI, t)
                }, r.createTextNode$$module$build$src$core$utils$xml = function (t) {
                    return r$.createTextNode(t)
                }, r.textToDom$$module$build$src$core$utils$xml = function (t) {
                    let e = rw.parseFromString(t, "text/xml");
                    if (e && e.documentElement && !e.getElementsByTagName("parsererror").length) return e.documentElement;
                    if ((e = rw.parseFromString(t, "text/html")) && e.body.firstChild && "xml" === e.body.firstChild.nodeName.toLowerCase()) return e.body.firstChild;
                    throw Error(`DOMParser was unable to parse: ${t}`)
                }, tL = function (t) {
                    return tM(ry.serializeToString(t))
                }, tM = function (t) {
                    return t.replace(rS, t => `&#${t.charCodeAt(0)};`)
                }, tB = function (t) {
                    return t ? ((t instanceof Element || "string" == typeof t) && (t = tU(t = tz(t))), tP(t), t) : null
                }, tP = function (t) {
                    let e = t.kind;
                    if (t = t.contents, e && e !== rO && e !== rN) throw Error("Invalid toolbox kind " + e + ". Please supply either " + rO + " or " + rN);
                    if (!t) throw Error("Toolbox must have a contents attribute.")
                }, tF = function (t) {
                    return t ? t.contents ? t.contents : Array.isArray(t) && 0 < t.length && !t[0].nodeType ? t : tW(t) : []
                }, tH = function (t) {
                    return rx.hasCategoriesInternal(t)
                }, tG = function (t) {
                    return !!t && !!t.contents && !!t.contents.filter(function (t) {
                        return "CATEGORY" === t.kind.toUpperCase()
                    }).length
                }, tU = function (t) {
                    let e = {
                        contents: tW(t)
                    };
                    return t instanceof Node && tV(t, e), e
                }, tW = function (t) {
                    let e = [],
                        i = t.childNodes;
                    i || (i = t);
                    for (let s = 0, o; o = i[s]; s++) {
                        if (!o.tagName) continue;
                        t = {};
                        let i = o.tagName.toUpperCase();
                        t.kind = i, "BLOCK" === i ? t.blockxml = o : o.childNodes && 0 < o.childNodes.length && (t.contents = tW(o)), tV(o, t), e.push(t)
                    }
                    return e
                }, tV = function (t, e) {
                    for (let i = 0; i < t.attributes.length; i++) {
                        let s = t.attributes[i]; - 1 < s.nodeName.indexOf("css-") ? (e.cssconfig = e.cssconfig || {}, e.cssconfig[s.nodeName.replace("css-", "")] = s.value) : e[s.nodeName] = s.value
                    }
                }, tz = function (t) {
                    let e = null;
                    if (t) {
                        if ("string" == typeof t) {
                            if ("xml" !== (e = r.textToDom$$module$build$src$core$utils$xml(t)).nodeName.toLowerCase()) throw TypeError("Toolbox should be an <xml> document.")
                        } else t instanceof Element && (e = t)
                    }
                    return e
                }, tX = function (t, e, i, s, o, n) {
                    let r = n.scrollbar && n.scrollbar.canScrollVertically();
                    return t.horizontal === lD.LEFT ? (i = o.absoluteMetrics.left + i, r && n.RTL && (i += rk.scrollbarThickness)) : (i = o.absoluteMetrics.left + o.viewMetrics.width - e.width - i, r && !n.RTL && (i -= rk.scrollbarThickness)), t.vertical === lR.TOP ? t = o.absoluteMetrics.top + s : (t = o.absoluteMetrics.top + o.viewMetrics.height - e.height - s, n.scrollbar && n.scrollbar.canScrollHorizontally() && (t -= rk.scrollbarThickness)), new rg(t, t + e.height, i, i + e.width)
                }, tY = function (t, e) {
                    return {
                        horizontal: e.toolboxMetrics.position === rA.LEFT || t.horizontalLayout && !t.RTL ? lD.RIGHT : lD.LEFT,
                        vertical: e.toolboxMetrics.position === rA.BOTTOM ? lR.TOP : lR.BOTTOM
                    }
                }, tK = function (t, e, i, s) {
                    let o = t.left,
                        n = t.right - t.left,
                        r = t.bottom - t.top;
                    for (let l = 0; l < s.length; l++) {
                        let a = s[l];
                        t.intersects(a) && (t = i === lA.UP ? a.top - r - e : a.bottom + e, t = new rg(t, t + r, o, o + n), l = -1)
                    }
                    return t
                }, tJ = function (t, e) {
                    rH(t, e)
                }, tj = function (t, e) {
                    rW.confirmInternal(t, e)
                }, tZ = function (t, e, i) {
                    rU(t, e, i)
                }, tq = function (t) {
                    return void 0 !== t.getVariableModel
                }, tQ = function (t) {
                    return void 0 !== t.getProcedureDef
                }, t0 = function (t) {
                    return void 0 !== t.getProcedureCall && void 0 !== t.renameProcedure
                }, r.allUsedVarModels$$module$build$src$core$variables = function (t) {
                    t = t.getAllBlocks(!1);
                    let e = new Set;
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i].getVarModels();
                        if (s)
                            for (let t = 0; t < s.length; t++) {
                                let i = s[t];
                                i.getId() && e.add(i)
                            }
                    }
                    return Array.from(e.values())
                }, r.allDeveloperVariables$$module$build$src$core$variables = function (t) {
                    t = t.getAllBlocks(!1);
                    let e = new Set;
                    for (let s = 0, o; o = t[s]; s++) {
                        var i = o.getDeveloperVariables;
                        if (i) {
                            i = i();
                            for (let t = 0; t < i.length; t++) e.add(i[t])
                        }
                    }
                    return Array.from(e.values())
                }, t1 = function (t) {
                    let e = [],
                        i = document.createElement("button");
                    return i.setAttribute("text", "%{BKY_NEW_VARIABLE}"), i.setAttribute("callbackKey", "CREATE_VARIABLE"), t.registerButtonCallback("CREATE_VARIABLE", function (t) {
                        t6(t.getTargetWorkspace())
                    }), e.push(i), e.concat(t = t2(t))
                }, t2 = function (t) {
                    t = t.getVariablesOfType("");
                    let e = [];
                    if (0 < t.length) {
                        var i = t[t.length - 1];
                        if (o3.variables_set) {
                            var s = r.createElement$$module$build$src$core$utils$xml("block");
                            s.setAttribute("type", "variables_set"), s.setAttribute("gap", o3.math_change ? "8" : "24"), s.appendChild(ei(i)), e.push(s)
                        }
                        if (o3.math_change && ((s = r.createElement$$module$build$src$core$utils$xml("block")).setAttribute("type", "math_change"), s.setAttribute("gap", o3.variables_get ? "20" : "8"), s.appendChild(ei(i)), i = r.textToDom$$module$build$src$core$utils$xml('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'), s.appendChild(i), e.push(s)), o3.variables_get) {
                            t.sort(rK.compareByName);
                            for (let s = 0, o; o = t[s]; s++)(i = r.createElement$$module$build$src$core$utils$xml("block")).setAttribute("type", "variables_get"), i.setAttribute("gap", "8"), i.appendChild(ei(o)), e.push(i)
                        }
                    }
                    return e
                }, t3 = function (t) {
                    return rZ.generateUniqueNameInternal(t)
                }, t5 = function (t, e) {
                    if (!e.length) return t;
                    let i = "",
                        s = rj.indexOf(t);
                    for (;;) {
                        let o = !1;
                        for (let i = 0; i < e.length; i++)
                            if (e[i].toLowerCase() === t) {
                                o = !0;
                                break
                            } if (!o) break;
                        ++s === rj.length && (s = 0, i = `${Number(i)+1}`), t = rj.charAt(s) + i
                    }
                    return t
                }, t6 = function (t, e, i) {
                    let s = i || "";
                    ! function i(o) {
                        t9(r.Msg$$module$build$src$core$msg.NEW_VARIABLE_TITLE, o, function (o) {
                            if (o) {
                                var n = t4(o, t);
                                if (n) {
                                    if (n.type === s) var l = r.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS.replace("%1", n.name);
                                    else l = (l = r.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE).replace("%1", n.name).replace("%2", n.type);
                                    tJ(l, function () {
                                        i(o)
                                    })
                                } else t.createVariable(o, s), e && e(o)
                            } else e && e(null)
                        })
                    }("")
                }, r.renameVariable$$module$build$src$core$variables = function (t, e, i) {
                    ! function s(o) {
                        let n = r.Msg$$module$build$src$core$msg.RENAME_VARIABLE_TITLE.replace("%1", e.name);
                        t9(n, o, function (o) {
                            if (o) {
                                var n = t8(o, e.type, t),
                                    l = t7(e.name, o, t);
                                if (n || l) {
                                    var a = "";
                                    n ? a = r.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", n.name).replace("%2", n.type) : l && (a = r.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER.replace("%1", o).replace("%2", l)), tJ(a, function () {
                                        s(o)
                                    })
                                } else t.renameVariableById(e.getId(), o), i && i(o)
                            } else i && i(null)
                        })
                    }("")
                }, t9 = function (t, e, i) {
                    tZ(t, e, function (t) {
                        t && ((t = t.replace(/[\s\xa0]+/g, " ").trim()) === r.Msg$$module$build$src$core$msg.RENAME_VARIABLE || t === r.Msg$$module$build$src$core$msg.NEW_VARIABLE) && (t = null), i(t)
                    })
                }, t8 = function (t, e, i) {
                    i = i.getVariableMap().getAllVariables(), t = t.toLowerCase();
                    for (let s = 0, o; o = i[s]; s++)
                        if (o.name.toLowerCase() === t && o.type !== e) return o;
                    return null
                }, t4 = function (t, e) {
                    e = e.getVariableMap().getAllVariables(), t = t.toLowerCase();
                    for (let i = 0, s; s = e[i]; i++)
                        if (s.name.toLowerCase() === t) return s;
                    return null
                }, t7 = function (t, e, i) {
                    return i.getProcedureMap().getProcedures().length ? et(t, e, i) : ee(t, e, i)
                }, et = function (t, e, i) {
                    for (let o of (t = t.toLowerCase(), e = e.toLowerCase(), i = i.getProcedureMap().getProcedures())) {
                        var s = o.getParameters().filter(tq).map(t => t.getVariableModel().name);
                        if (s && (i = s.some(e => e.toLowerCase() === t), s = s.some(t => t.toLowerCase() === e), i && s)) return o.getName()
                    }
                    return null
                }, ee = function (t, e, i) {
                    for (let o of (t = t.toLowerCase(), e = e.toLowerCase(), i = i.getAllBlocks(!1))) {
                        if (!tQ(o)) continue;
                        var s = (i = o.getProcedureDef())[1];
                        let n = s.some(e => e.toLowerCase() === t);
                        if (s = s.some(t => t.toLowerCase() === e), n && s) return i[0]
                    }
                    return null
                }, ei = function (t) {
                    let e = r.createElement$$module$build$src$core$utils$xml("field");
                    return e.setAttribute("name", "VAR"), e.setAttribute("id", t.getId()), e.setAttribute("variabletype", t.type), t = r.createTextNode$$module$build$src$core$utils$xml(t.name), e.appendChild(t), e
                }, r.getOrCreateVariablePackage$$module$build$src$core$variables = function (t, e, i, s) {
                    let o = r.getVariable$$module$build$src$core$variables(t, e, i, s);
                    return o || (o = es(t, e, i, s)), o
                }, r.getVariable$$module$build$src$core$variables = function (t, e, i, s) {
                    let o = t.getPotentialVariableMap(),
                        n = null;
                    if (e && ((n = t.getVariableById(e)) || !o || (n = o.getVariableById(e)), n)) return n;
                    if (i) {
                        if (void 0 === s) throw Error("Tried to look up a variable by name without a type");
                        (n = t.getVariable(i, s)) || !o || (n = o.getVariable(i, s))
                    }
                    return n
                }, es = function (t, e, i, s) {
                    let o = t.getPotentialVariableMap();
                    return i || (i = t3(t.isFlyout ? t.targetWorkspace : t)), o ? o.createVariable(i, s, e) : t.createVariable(i, s, e)
                }, eo = function (t, e) {
                    t = t.getAllVariables();
                    let i = [];
                    if (e.length !== t.length)
                        for (let s = 0; s < t.length; s++) {
                            let o = t[s]; - 1 === e.indexOf(o) && i.push(o)
                        }
                    return i
                }, en = function (t, e) {
                    d(c.PASTER, t, e)
                }, er = function (t) {
                    return (ec(t), eh()) ? (eu(), Promise.resolve()) : (r9 || (r9 = new Promise(t => {
                        r8 = t, r4 = window.requestAnimationFrame(() => {
                            eu(), t()
                        })
                    })), r9)
                }, el = function () {
                    return r9 || Promise.resolve()
                }, ea = function () {
                    window.cancelAnimationFrame(r4), eu(), r8 && r8()
                }, eh = function () {
                    return nG
                }, ec = function (t) {
                    r6.add(t);
                    let e = t.getParent();
                    e ? ec(e) : r5.add(t)
                }, eu = function () {
                    var t = new Set([...r5].map(t => t.workspace));
                    let e = [...r5].filter(ed);
                    for (let t of e) ep(t);
                    for (let e of t) e.resizeContents();
                    for (let i of e) t = i.getRelativeToSurfaceXY(), i.updateComponentLocations(t);
                    r5.clear(), r6 = new Set, r9 = null
                }, ed = function (t) {
                    return !t.isDisposed() && !t.getParent()
                }, ep = function (t) {
                    if (r6.has(t)) {
                        for (let e of t.getChildren(!1)) ep(e);
                        t.renderEfficiently()
                    }
                }, eg = function (t) {
                    let e = r.createElement$$module$build$src$core$utils$xml("variables");
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i],
                            o = r.createElement$$module$build$src$core$utils$xml("variable");
                        o.appendChild(r.createTextNode$$module$build$src$core$utils$xml(s.name)), s.type && o.setAttribute("type", s.type), o.id = s.getId(), e.appendChild(o)
                    }
                    return e
                }, eb = function (t, e) {
                    if (t.isInsertionMarker() && !(t = t.getChildren(!1)[0])) return new DocumentFragment;
                    let i = 0;
                    if (t.workspace.RTL && (i = t.workspace.getWidth()), eO(e = ef(t, e))) {
                        let s = t.getRelativeToSurfaceXY();
                        e.setAttribute("x", String(Math.round(t.workspace.RTL ? i - s.x : s.x))), e.setAttribute("y", String(Math.round(s.y)))
                    }
                    return e
                }, e_ = function (t) {
                    if (t.isSerializable()) {
                        let e = r.createElement$$module$build$src$core$utils$xml("field");
                        return e.setAttribute("name", t.name || ""), t.toXml(e)
                    }
                    return null
                }, em = function (t, e) {
                    for (let i = 0; i < t.inputList.length; i++) {
                        let s = t.inputList[i];
                        for (let t = 0; t < s.fieldRow.length; t++) {
                            let i = e_(s.fieldRow[t]);
                            i && e.appendChild(i)
                        }
                    }
                }, ef = function (t, e) {
                    let i;
                    if (t.isInsertionMarker()) return (e = t.getChildren(!1)[0]) ? ef(e) : new DocumentFragment;
                    let s = r.createElement$$module$build$src$core$utils$xml(t.isShadow() ? "shadow" : "block");
                    if (s.setAttribute("type", t.type), e || (s.id = t.id), t.mutationToDom) {
                        var o = t.mutationToDom();
                        o && (o.hasChildNodes() || o.hasAttributes()) && s.appendChild(o)
                    }
                    if (em(t, s), o = t.getCommentText()) {
                        var n = t.getIcon(rF.COMMENT),
                            l = n.getBubbleSize();
                        n = n.bubbleIsVisible();
                        var a = r.createElement$$module$build$src$core$utils$xml("comment");
                        a.appendChild(r.createTextNode$$module$build$src$core$utils$xml(o)), a.setAttribute("pinned", `${n}`), a.setAttribute("h", String(l.height)), a.setAttribute("w", String(l.width)), s.appendChild(a)
                    }
                    for (t.data && ((o = r.createElement$$module$build$src$core$utils$xml("data")).appendChild(r.createTextNode$$module$build$src$core$utils$xml(t.data)), s.appendChild(o)), o = 0; o < t.inputList.length; o++) {
                        l = t.inputList[o];
                        var h = void 0;
                        if (n = !0, l.type !== r.inputTypes$$module$build$src$core$inputs$input_types.DUMMY && l.type !== r.inputTypes$$module$build$src$core$inputs$input_types.END_ROW) {
                            a = l.connection.targetBlock(), l.type === r.inputTypes$$module$build$src$core$inputs$input_types.VALUE ? h = r.createElement$$module$build$src$core$utils$xml("value") : l.type === r.inputTypes$$module$build$src$core$inputs$input_types.STATEMENT && (h = r.createElement$$module$build$src$core$utils$xml("statement"));
                            let t = l.connection.getShadowDom();
                            !t || a && a.isShadow() || h.appendChild(eE(t, e)), a && (a = ef(a, e)).nodeType === rn.ELEMENT_NODE && (h.appendChild(a), n = !1), h.setAttribute("name", l.name), n || s.appendChild(h)
                        }
                    }
                    return void 0 !== t.inputsInline && t.inputsInline !== t.inputsInlineDefault && s.setAttribute("inline", String(t.inputsInline)), t.isCollapsed() && s.setAttribute("collapsed", "true"), t.isEnabled() || s.setAttribute("disabled", "true"), t.isDeletable() || t.isShadow() || s.setAttribute("deletable", "false"), t.isMovable() || t.isShadow() || s.setAttribute("movable", "false"), t.isEditable() || s.setAttribute("editable", "false"), (h = t.getNextBlock()) && (o = ef(h, e)).nodeType === rn.ELEMENT_NODE && ((i = r.createElement$$module$build$src$core$utils$xml("next")).appendChild(o), s.appendChild(i)), !(t = t.nextConnection && t.nextConnection.getShadowDom()) || h && h.isShadow() || i.appendChild(eE(t, e)), s
                }, eE = function (t, e) {
                    let i = t = t.cloneNode(!0),
                        s;
                    for (; i;)
                        if (e && "shadow" === i.nodeName && i.removeAttribute("id"), i.firstChild) i = i.firstChild;
                        else {
                            for (; i && !i.nextSibling;) {
                                let t;
                                s = i, i = i.parentNode, s.nodeType === rn.TEXT_NODE && "" === s.data.trim() && (null == (t = i) ? void 0 : t.firstChild) !== s && tb(s)
                            }
                            i && (s = i, i = i.nextSibling, s.nodeType === rn.TEXT_NODE && "" === s.data.trim() && tb(s))
                        } return t
                }, eT = function (t) {
                    return tL(t).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>")
                }, r.domToWorkspace$$module$build$src$core$xml = function (t, e) {
                    let i = 0;
                    e.RTL && (i = e.getWidth());
                    let s = [];
                    tf();
                    let o = r.getGroup$$module$build$src$core$events$utils();
                    o || r.setGroup$$module$build$src$core$events$utils(!0), e.setResizesEnabled && e.setResizesEnabled(!1);
                    let n = !0;
                    try {
                        for (let o = 0, r; r = t.childNodes[o]; o++) {
                            let t = r.nodeName.toLowerCase(),
                                o = r;
                            if ("block" !== t && ("shadow" !== t || P())) {
                                if ("shadow" === t) throw TypeError("Shadow block cannot be a top-level block.");
                                if ("comment" === t) e.rendered ? r3.fromXmlRendered(o, e, i) : rQ.fromXml(o, e);
                                else if ("variables" === t) {
                                    if (n) ew(o, e);
                                    else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                                    n = !1
                                }
                            } else {
                                let t, r;
                                let l = ek(o, e);
                                s.push(l.id);
                                let a = parseInt(null != (t = o.getAttribute("x")) ? t : "10", 10),
                                    h = parseInt(null != (r = o.getAttribute("y")) ? r : "10", 10);
                                isNaN(a) || isNaN(h) || l.moveBy(e.RTL ? i - a : a, h, ["create"]), n = !1
                            }
                        }
                    } finally {
                        r.setGroup$$module$build$src$core$events$utils(o), e.setResizesEnabled && e.setResizesEnabled(!0), e.rendered && ea(), tE()
                    }
                    return F(new(X(n$))(e)), s
                }, r.domToBlock$$module$build$src$core$xml = function (t, e) {
                    return t = ek(t, e), e.rendered && ea(), t
                }, ek = function (t, e) {
                    let i;
                    r.disable$$module$build$src$core$events$utils();
                    var s = e.getAllVariables();
                    try {
                        if (i = eA(t, e), e.rendered) {
                            let t = i,
                                s = i.getDescendants(!1);
                            t.setConnectionTracking(!1);
                            for (let t = s.length - 1; 0 <= t; t--) s[t].initSvg();
                            for (let t = s.length - 1; 0 <= t; t--) s[t].queueRender();
                            setTimeout(function () {
                                t.disposed || t.setConnectionTracking(!0)
                            }, 1), e.resizeContents()
                        } else {
                            let t = i.getDescendants(!1);
                            for (let e = t.length - 1; 0 <= e; e--) t[e].initModel()
                        }
                    } finally {
                        r.enable$$module$build$src$core$events$utils()
                    }
                    if (W()) {
                        for (t = eo(e, s), e = 0; e < t.length; e++) s = t[e], F(new(X(nl))(s));
                        F(new(X(r.CREATE$$module$build$src$core$events$utils))(i))
                    }
                    return i
                }, ew = function (t, e) {
                    for (let s = 0; s < t.children.length; s++) {
                        var i = t.children[s];
                        let o = i.getAttribute("type"),
                            n = i.getAttribute("id");
                        if (!(i = i.textContent)) break;
                        e.createVariable(i, o, n)
                    }
                }, ey = function (t) {
                    let e = {
                        mutation: [],
                        comment: [],
                        data: [],
                        field: [],
                        input: [],
                        next: []
                    };
                    for (let i = 0; i < t.children.length; i++) {
                        let s = t.children[i];
                        if (s.nodeType !== rn.TEXT_NODE) switch (s.nodeName.toLowerCase()) {
                            case "mutation":
                                e.mutation.push(s);
                                break;
                            case "comment":
                                e.comment.push(s);
                                break;
                            case "data":
                                e.data.push(s);
                                break;
                            case "title":
                            case "field":
                                e.field.push(s);
                                break;
                            case "value":
                            case "statement":
                                e.input.push(s);
                                break;
                            case "next":
                                e.next.push(s);
                                break;
                            default:
                                console.warn("Ignoring unknown tag: " + s.nodeName)
                        }
                    }
                    return e
                }, e$ = function (t, e) {
                    let i = !1;
                    for (let s = 0; s < t.length; s++) {
                        let o = t[s];
                        e.domToMutation && (e.domToMutation(o), e.initSvg && (i = !0))
                    }
                    return i
                }, eC = function (t, e) {
                    for (let s = 0; s < t.length; s++) {
                        let o, n;
                        var i = t[s];
                        let r = i.textContent,
                            l = "true" === i.getAttribute("pinned"),
                            a = parseInt(null != (o = i.getAttribute("w")) ? o : "50", 10);
                        i = parseInt(null != (n = i.getAttribute("h")) ? n : "50", 10), e.setCommentText(r);
                        let h = e.getIcon(rF.COMMENT);
                        isNaN(a) || isNaN(i) || h.setBubbleSize(new rb(a, i)), h.setBubbleVisible(l), setTimeout(() => h.setBubbleVisible(l), 1)
                    }
                }, ev = function (t, e) {
                    for (let i = 0; i < t.length; i++) e.data = t[i].textContent
                }, eI = function (t, e) {
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i],
                            o = s.getAttribute("name");
                        o ? eN(e, o, s) : console.warn(`Ignoring unnamed field in block ${e.type}`)
                    }
                }, eS = function (t) {
                    let e = null,
                        i = null;
                    for (let s = 0; s < t.childNodes.length; s++) {
                        let o = t.childNodes[s];
                        eO(o) && ("block" === o.nodeName.toLowerCase() ? e = o : "shadow" === o.nodeName.toLowerCase() && (i = o))
                    }
                    return {
                        childBlockElement: e,
                        childShadowElement: i
                    }
                }, eR = function (t, e, i, s) {
                    for (let n = 0; n < t.length; n++) {
                        var o = t[n];
                        let r = o.getAttribute("name"),
                            l = r ? i.getInput(r) : null;
                        if (!l) {
                            console.warn("Ignoring non-existent input " + r + " in block " + s);
                            break
                        }
                        if ((o = eS(o)).childBlockElement) {
                            if (!l.connection) throw TypeError("Input connection does not exist.");
                            eA(o.childBlockElement, e, l.connection, !1)
                        }
                        if (o.childShadowElement) {
                            let t;
                            null == (t = l.connection) || t.setShadowDom(o.childShadowElement)
                        }
                    }
                }, eD = function (t, e, i) {
                    for (let s = 0; s < t.length; s++) {
                        let o = eS(t[s]);
                        if (o.childBlockElement) {
                            if (!i.nextConnection) throw TypeError("Next statement does not exist.");
                            if (i.nextConnection.isConnected()) throw TypeError("Next statement is already connected.");
                            eA(o.childBlockElement, e, i.nextConnection, !0)
                        }
                        o.childShadowElement && i.nextConnection && i.nextConnection.setShadowDom(o.childShadowElement)
                    }
                }, eA = function (t, e, i, s) {
                    let o = t.getAttribute("type");
                    if (!o) throw TypeError("Block type unspecified: " + t.outerHTML);
                    var n, r = null != (n = t.getAttribute("id")) ? n : void 0;
                    n = e.newBlock(o, r), r = ey(t);
                    let l = e$(r.mutation, n);
                    if (eC(r.comment, n), ev(r.data, n), i) {
                        if (s) {
                            if (n.previousConnection) i.connect(n.previousConnection);
                            else throw TypeError("Next block does not have previous statement.")
                        } else if (n.outputConnection) i.connect(n.outputConnection);
                        else if (n.previousConnection) i.connect(n.previousConnection);
                        else throw TypeError("Child block does not have output or previous statement.")
                    }
                    if (eI(r.field, n), eR(r.input, e, n, o), eD(r.next, e, n), l && n.initSvg(), (e = t.getAttribute("inline")) && n.setInputsInline("true" === e), (e = t.getAttribute("disabled")) && n.setEnabled("true" !== e && "disabled" !== e), (e = t.getAttribute("deletable")) && n.setDeletable("true" === e), (e = t.getAttribute("movable")) && n.setMovable("true" === e), (e = t.getAttribute("editable")) && n.setEditable("true" === e), (e = t.getAttribute("collapsed")) && n.setCollapsed("true" === e), "shadow" === t.nodeName.toLowerCase()) {
                        for (e = 0, t = n.getChildren(!1); e < t.length; e++)
                            if (!t[e].isShadow()) throw TypeError("Shadow block not allowed non-shadow child.");
                        if (n.getVarModels().length) throw TypeError("Shadow blocks cannot have variable references.");
                        n.setShadow(!0)
                    }
                    return n
                }, eN = function (t, e, i) {
                    let s = t.getField(e);
                    s ? s.fromXml(i) : console.warn("Ignoring non-existent field " + e + " in block " + t.type)
                }, eO = function (t) {
                    return t.nodeType === rn.ELEMENT_NODE
                }, ex = function (t) {
                    return void 0 !== t.saveState && void 0 !== t.loadState
                }, eL = function (t, e) {
                    d(c.SERIALIZER, t, e)
                }, eM = function (t, {
                    addCoordinates: e = !1,
                    addInputBlocks: i = !0,
                    addNextBlocks: s = !0,
                    doFullSerialization: o = !0,
                    saveIds: n = !0
                } = {}) {
                    if (t.isInsertionMarker()) return null;
                    let r = {
                        type: t.type,
                        id: n ? t.id : void 0
                    };
                    return e && eP(t, r), eB(t, r), eF(t, r, o), eH(t, r, o), eG(t, r, o), i && eU(t, r, o, n), s && eW(t, r, o, n), r
                }, eB = function (t, e) {
                    t.isCollapsed() && (e.collapsed = !0), t.isEnabled() || (e.enabled = !1), t.isOwnDeletable() || (e.deletable = !1), t.isOwnMovable() || (e.movable = !1), t.isOwnEditable() || (e.editable = !1), void 0 !== t.inputsInline && t.inputsInline !== t.inputsInlineDefault && (e.inline = t.inputsInline), t.data && (e.data = t.data)
                }, eP = function (t, e) {
                    let i = t.workspace;
                    t = t.getRelativeToSurfaceXY(), e.x = Math.round(i.RTL ? i.getWidth() - t.x : t.x), e.y = Math.round(t.y)
                }, eF = function (t, e, i) {
                    t.saveExtraState ? null !== (t = t.saveExtraState(i)) && (e.extraState = t) : t.mutationToDom && null !== (t = t.mutationToDom()) && (e.extraState = eT(t).replace(' xmlns="https://developers.google.com/blockly/xml"', ""))
                }, eH = function (t, e, i) {
                    let s = Object.create(null);
                    for (let e of t.getIcons()) ex(e) && (t = e.saveState(i)) && (s[e.getType().toString()] = t);
                    Object.keys(s).length && (e.icons = s)
                }, eG = function (t, e, i) {
                    let s = Object.create(null);
                    for (let e = 0; e < t.inputList.length; e++) {
                        let o = t.inputList[e];
                        for (let t = 0; t < o.fieldRow.length; t++) {
                            let e = o.fieldRow[t];
                            e.isSerializable() && (s[e.name] = e.saveState(i))
                        }
                    }
                    Object.keys(s).length && (e.fields = s)
                }, eU = function (t, e, i, s) {
                    let o = Object.create(null);
                    for (let e = 0; e < t.inputList.length; e++) {
                        let n = t.inputList[e];
                        if (!n.connection) continue;
                        let r = eV(n.connection, i, s);
                        r && (o[n.name] = r)
                    }
                    Object.keys(o).length && (e.inputs = o)
                }, eW = function (t, e, i, s) {
                    t.nextConnection && (t = eV(t.nextConnection, i, s)) && (e.next = t)
                }, eV = function (t, e, i) {
                    let s = t.getShadowState(!0);
                    if (t = t.targetBlock(), !s && !t) return null;
                    let o = Object.create(null);
                    return s && (o.shadow = s), t && !t.isShadow() && (o.block = eM(t, {
                        doFullSerialization: e,
                        saveIds: i
                    })), o
                }, ez = function (t, e, {
                    recordUndo: i = !1
                } = {}) {
                    return t = eX(t, e, {
                        recordUndo: i
                    }), e.rendered && ea(), t
                }, eX = function (t, e, {
                    parentConnection: i,
                    isShadow: s = !1,
                    recordUndo: o = !1
                } = {}) {
                    let n;
                    let l = P();
                    B(o), (o = r.getGroup$$module$build$src$core$events$utils()) || r.setGroup$$module$build$src$core$events$utils(!0), r.disable$$module$build$src$core$events$utils();
                    try {
                        n = eY(t, e, {
                            parentConnection: i,
                            isShadow: s
                        })
                    } finally {
                        r.enable$$module$build$src$core$events$utils()
                    }
                    if (W() && F(new(X(r.CREATE$$module$build$src$core$events$utils))(n)), r.setGroup$$module$build$src$core$events$utils(o), B(l), e.rendered) {
                        let t = n;
                        setTimeout(() => {
                            t.disposed || t.setConnectionTracking(!0)
                        }, 1)
                    }
                    return n
                }, eY = function (t, e, {
                    parentConnection: i,
                    isShadow: s = !1
                } = {}) {
                    if (!t.type) throw new li(t);
                    let o = e.newBlock(t.type, t.id);
                    return o.setShadow(s), eK(o, t), eJ(o, t), ej(o, t), eZ(i, o, t), eq(o, t), eQ(o, t), e0(o, t), e1(o, t), e3(o, e.rendered), o
                }, eK = function (t, e) {
                    let i = void 0 === e.x ? 0 : e.x;
                    e = void 0 === e.y ? 0 : e.y;
                    let s = t.workspace;
                    i = s.RTL ? s.getWidth() - i : i, t.moveBy(i, e)
                }, eJ = function (t, e) {
                    e.collapsed && t.setCollapsed(!0), !1 === e.deletable && t.setDeletable(!1), !1 === e.movable && t.setMovable(!1), !1 === e.editable && t.setEditable(!1), !1 === e.enabled && t.setEnabled(!1), void 0 !== e.inline && t.setInputsInline(e.inline), void 0 !== e.data && (t.data = e.data)
                }, ej = function (t, e) {
                    e.extraState && (t.loadExtraState ? t.loadExtraState(e.extraState) : t.domToMutation && t.domToMutation(r.textToDom$$module$build$src$core$utils$xml(e.extraState)))
                }, eZ = function (t, e, i) {
                    if (t) {
                        if (t.getSourceBlock().isShadow() && !e.isShadow()) throw new ln(i);
                        if (t.type === r.inputTypes$$module$build$src$core$inputs$input_types.VALUE) {
                            var s = e.outputConnection;
                            if (!s) throw new ls("output", e, i)
                        } else if (!(s = e.previousConnection)) throw new ls("previous", e, i);
                        if (!t.connect(s)) {
                            let o = e.workspace.connectionChecker;
                            throw new lo(o.getErrorMessage(o.canConnectWithReason(s, t, !1), s, t), t.type === r.inputTypes$$module$build$src$core$inputs$input_types.VALUE ? "output connection" : "previous connection", e, i)
                        }
                    }
                }, eq = function (t, e) {
                    if (e.icons) {
                        var i = Object.keys(e.icons);
                        for (let o of i) {
                            i = e.icons[o];
                            var s = t.getIcon(o);
                            if (!s) {
                                if (!(s = m(c.ICON, o, !1))) throw new lr(o, t, e);
                                s = new s(t), t.addIcon(s)
                            }
                            ex(s) && s.loadState(i)
                        }
                    }
                }, eQ = function (t, e) {
                    if (e.fields) {
                        var i = Object.keys(e.fields);
                        for (let s = 0; s < i.length; s++) {
                            let o = i[s],
                                n = e.fields[o],
                                r = t.getField(o);
                            r ? r.loadState(n) : console.warn(`Ignoring non-existant field ${o} in block ${t.type}`)
                        }
                    }
                }, e0 = function (t, e) {
                    if (e.inputs) {
                        var i = Object.keys(e.inputs);
                        for (let s = 0; s < i.length; s++) {
                            let o = i[s],
                                n = t.getInput(o);
                            if (!n || !n.connection) throw new ls(o, t, e);
                            e2(n.connection, e.inputs[o])
                        }
                    }
                }, e1 = function (t, e) {
                    if (e.next) {
                        if (!t.nextConnection) throw new ls("next", t, e);
                        e2(t.nextConnection, e.next)
                    }
                }, e2 = function (t, e) {
                    e.shadow && t.setShadowState(e.shadow), e.block && eY(e.block, t.getSourceBlock().workspace, {
                        parentConnection: t
                    })
                }, e3 = function (t, e) {
                    if (e)
                        for (let e of (t.setConnectionTracking(!1), t.initSvg(), t.queueRender(), t.getIcons())) e.onLocationChange(t.getRelativeToSurfaceXY());
                    else t.initModel()
                }, e5 = function (t) {
                    let e = t.workspace,
                        i = r.config$$module$build$src$core$config.snapRadius,
                        s = t.getRelativeToSurfaceXY(),
                        o = new n3(0, 0),
                        n = e.getAllBlocks(!1).filter(e => e.id != t.id).map(t => t.getRelativeToSurfaceXY());
                    for (; e6(n3.sum(s, o), n) || e9(t, o, i);) e.RTL ? o.translate(-i, 2 * i) : o.translate(i, 2 * i);
                    t.moveTo(n3.sum(s, o))
                }, e6 = function (t, e) {
                    return e.some(e => 1 >= Math.abs(e.x - t.x) && 1 >= Math.abs(e.y - t.y))
                }, e9 = function (t, e, i) {
                    return t.getConnections_(!1).some(t => !!t.closest(i, e).connection)
                }, e8 = function (t, e, i) {
                    return t && e ? e4(t, e, i) : lE && lT ? e4(lE, lT) : null
                }, e4 = function (t, e, i) {
                    let s, o, n;
                    return e = null != (s = e.getRootWorkspace()) ? s : e, null != (n = null == (o = f(c.PASTER, t.paster, !1)) ? void 0 : o.paste(t, e, i)) ? n : null
                }, e7 = function (t, e) {
                    t.setAttribute(lB, e)
                }, it = function (t, e, i) {
                    Array.isArray(i) && (i = i.join(" ")), t.setAttribute(lM + e, `${i}`)
                }, ie = function () {
                    return lU
                }, ii = function () {
                    document.querySelector("." + lY) || ((lU = document.createElement("div")).className = lY, (R() || document.body).appendChild(lU))
                }, is = function (t, e, i) {
                    io(), lz = t, lX = i, (t = lU) && (t.style.direction = e ? "rtl" : "ltr", t.style.display = "block", lK = (e = C()).getRenderer().getClassName(), lJ = e.getTheme().getClassName(), lK && td(t, lK), lJ && td(t, lJ))
                }, io = function () {
                    if (ir()) {
                        lz = null;
                        var t = lU;
                        t && (t.style.display = "none", t.style.left = "", t.style.top = "", lX && lX(), lX = null, t.textContent = "", lK && (tg(t, lK), lK = ""), lJ && (tg(t, lJ), lJ = ""), C().markFocused())
                    }
                }, ir = function () {
                    return !!lz
                }, il = function (t) {
                    lz === t && io()
                }, ia = function (t, e, i) {
                    lU.style.left = t + "px", lU.style.top = e + "px", lU.style.height = i + "px"
                }, ih = function (t, e, i, s) {
                    let o = iu(t, e, i);
                    t = ic(t, e, i, s), 0 > o ? ia(t, 0, i.height + o) : ia(t, o, i.height)
                }, ic = function (t, e, i, s) {
                    return s ? Math.min(Math.max(e.right - i.width, t.left), t.right - i.width) : Math.max(Math.min(e.left, t.right - i.width), t.left)
                }, iu = function (t, e, i) {
                    return e.bottom + i.height >= t.bottom ? e.top - i.height : e.bottom
                }, id = function () {
                    var t;
                    !(null == (t = lz) || !t.repositionForWindowResize) && lz.repositionForWindowResize() || io()
                }, ip = function (t) {
                    lZ = t
                }, ig = function (t, e, i) {
                    if (is(lq, i, ik), e.length) {
                        var s = ib(e, i);
                        lQ = s, i_(s, t, i), setTimeout(function () {
                            s.focus()
                        }, 1), lZ = null
                    } else iT()
                }, ib = function (t, e) {
                    let i = new lW;
                    i.setRole(lL.MENU);
                    for (let s = 0; s < t.length; s++) {
                        let o = t[s],
                            n = new lV(o.text);
                        n.setRightToLeft(e), n.setRole(lL.MENUITEM), i.addChild(n), n.setEnabled(o.enabled), o.enabled && n.onAction(function () {
                            iT(), requestAnimationFrame(() => {
                                setTimeout(() => {
                                    o.callback(o.scope)
                                }, 0)
                            })
                        }, {})
                    }
                    return i
                }, i_ = function (t, e, i) {
                    let s = tO();
                    e = new rg(e.clientY + s.top, e.clientY + s.top, e.clientX + s.left, e.clientX + s.left), im(t);
                    let o = t.getSize();
                    i && (e.left += o.width, e.right += o.width, s.left += o.width, s.right += o.width), ih(s, e, o, i), t.focus()
                }, im = function (t) {
                    var e = ie();
                    if (!e) throw Error("Attempting to create a context menu when widget div is null");
                    td(e = t.render(e), "blocklyContextMenu"), tt(e, "contextmenu", null, iE), t.focus()
                }, iE = function (t) {
                    t.preventDefault(), t.stopPropagation()
                }, iT = function () {
                    il(lq), lZ = null
                }, ik = function () {
                    lQ && (lQ.dispose(), lQ = null)
                }, r.callbackFactory$$module$build$src$core$contextmenu = function (t, e) {
                    return () => {
                        let i;
                        r.disable$$module$build$src$core$events$utils();
                        try {
                            i = e instanceof Element ? ek(e, t.workspace) : eX(e, t.workspace);
                            let s = t.getRelativeToSurfaceXY();
                            s.x = t.RTL ? s.x - r.config$$module$build$src$core$config.snapRadius : s.x + r.config$$module$build$src$core$config.snapRadius, s.y += 2 * r.config$$module$build$src$core$config.snapRadius, i.moveBy(s.x, s.y)
                        } finally {
                            r.enable$$module$build$src$core$events$utils()
                        }
                        return W() && !i.isShadow() && F(new(X(r.CREATE$$module$build$src$core$events$utils))(i)), i.select(), i
                    }
                }, iw = function (t) {
                    return {
                        text: r.Msg$$module$build$src$core$msg.REMOVE_COMMENT,
                        enabled: !0,
                        callback: function () {
                            r.setGroup$$module$build$src$core$events$utils(!0), t.dispose(), r.setGroup$$module$build$src$core$events$utils(!1)
                        }
                    }
                }, iy = function (t) {
                    return {
                        text: r.Msg$$module$build$src$core$msg.DUPLICATE_COMMENT,
                        enabled: !0,
                        callback: function () {
                            let e = t.toCopyData();
                            e && e8(e, t.workspace)
                        }
                    }
                }, i$ = function (t) {
                    return t * Math.PI / 180
                }, iC = function (t) {
                    return 180 * t / Math.PI
                }, iv = function (t, e, i) {
                    if (i < t) {
                        let e = i;
                        i = t, t = e
                    }
                    return Math.max(t, Math.min(e, i))
                }, iI = function () {
                    document.querySelector(".blocklyDropDownDiv") || ((l8 = document.createElement("div")).className = "blocklyDropDownDiv", (R() || document.body).appendChild(l8), (l4 = document.createElement("div")).className = "blocklyDropDownContent", l8.appendChild(l4), (l7 = document.createElement("div")).className = "blocklyDropDownArrow", l8.appendChild(l7), l8.style.opacity = "0", l8.style.transition = "transform " + ao + "s, opacity " + ao + "s", l8.addEventListener("focusin", function () {
                        td(l8, "blocklyFocused")
                    }), l8.addEventListener("focusout", function () {
                        tg(l8, "blocklyFocused")
                    }))
                }, iS = function (t) {
                    ah = t
                }, iR = function () {
                    return ac
                }, iD = function () {
                    return l4
                }, iA = function () {
                    l4.textContent = "", l4.style.width = ""
                }, iN = function (t, e) {
                    l8.style.backgroundColor = t, l8.style.borderColor = e
                }, iO = function (t, e, i) {
                    return au = !0, iM(iL(t), t, e, i)
                }, ix = function (t) {
                    var e = t.getSvgRoot();
                    let i = t.workspace.scale,
                        s = t.height * i;
                    return t = t.width * i, e = tv(e), new rg(e.y, e.y + s, e.x, e.x + t)
                }, iL = function (t) {
                    return t = t.getScaledBBox(), new rg(t.top, t.bottom, t.left, t.right)
                }, iM = function (t, e, i, s) {
                    let o = t.left + (t.right - t.left) / 2,
                        n = t.bottom;
                    t = t.top, s && (t += s);
                    let r = (s = e.getSourceBlock()).workspace;
                    for (; r.options.parentWorkspace;) r = r.options.parentWorkspace;
                    return iS(r.getParentSvg().parentNode), iB(e, s.RTL, o, n, o, t, i)
                }, iB = function (t, e, i, s, o, n, r) {
                    return ac = t, ar = r || null, l8.style.direction = e ? "rtl" : "ltr", al = (t = C()).getRenderer().getClassName(), aa = t.getTheme().getClassName(), al && td(l8, al), aa && td(l8, aa), iz(i, s, o, n)
                }, iP = function (t, e, i, s) {
                    return {
                        initialX: (t = iH(t, i.left, i.right, s.width)).divX,
                        initialY: e,
                        finalX: t.divX,
                        finalY: e + as,
                        arrowX: t.arrowX,
                        arrowY: -(at / 2 + ae),
                        arrowAtTop: !0,
                        arrowVisible: !0
                    }
                }, iF = function (t, e, i, s) {
                    return {
                        initialX: (t = iH(t, i.left, i.right, s.width)).divX,
                        initialY: e - s.height,
                        finalX: t.divX,
                        finalY: e - s.height - as,
                        arrowX: t.arrowX,
                        arrowY: s.height - 2 * ae - at / 2,
                        arrowAtTop: !1,
                        arrowVisible: !0
                    }
                }, iH = function (t, e, i, s) {
                    return e = iv(e, t - s / 2, i - s), t = t - at / 2 - e, {
                        arrowX: t = iv(i = ai, t, s - i - at),
                        divX: e
                    }
                }, iG = function () {
                    return !!ac
                }, iU = function (t, e) {
                    return ac === t && (e ? iV() : iW(), !0)
                }, iW = function () {
                    l8.style.transform = "translate(0, 0)", l8.style.opacity = "0", an = setTimeout(function () {
                        iV()
                    }, 1e3 * ao), ar && (ar(), ar = null)
                }, iV = function () {
                    iG() && (an && clearTimeout(an), l8.style.transform = "", l8.style.left = "", l8.style.top = "", l8.style.opacity = "0", l8.style.display = "none", l8.style.backgroundColor = "", l8.style.borderColor = "", ar && (ar(), ar = null), iA(), ac = null, al && (tg(l8, al), al = ""), aa && (tg(l8, aa), aa = ""), C().markFocused())
                }, iz = function (t, e, i, s) {
                    (t = ad.getPositionMetrics(t, e, i, s)).arrowVisible ? (l7.style.display = "", l7.style.transform = "translate(" + t.arrowX + "px," + t.arrowY + "px) rotate(45deg)", l7.setAttribute("class", t.arrowAtTop ? "blocklyDropDownArrow blocklyArrowTop" : "blocklyDropDownArrow blocklyArrowBottom")) : l7.style.display = "none", e = Math.floor(t.initialX), i = Math.floor(t.initialY), s = Math.floor(t.finalX);
                    let o = Math.floor(t.finalY);
                    return l8.style.left = e + "px", l8.style.top = i + "px", l8.style.display = "block", l8.style.opacity = "1", l8.style.transform = "translate(" + (s - e) + "px," + (o - i) + "px)", !!t.arrowAtTop
                }, iX = function () {
                    if (ac) {
                        var t = ac.getSourceBlock();
                        t = au ? iL(ac) : ix(t);
                        let e = t.left + (t.right - t.left) / 2;
                        iz(e, t.bottom, e, t.top)
                    } else iW()
                }, iY = function (t) {
                    if (!(100 < t.getDescendants(!1).length)) {
                        var e = t.workspace,
                            i = t.getSvgRoot();
                        e.getAudioManager().play("delete");
                        var s = e.getSvgXY(i);
                        (i = i.cloneNode(!0)).setAttribute("transform", "translate(" + s.x + "," + s.y + ")"), e.getParentSvg().appendChild(i), iK(i, {
                            x: s.x,
                            y: s.y,
                            width: t.width,
                            height: t.height
                        }, e.RTL, new Date, e.scale)
                    }
                }, iK = function (t, e, i, s, o) {
                    let n = (new Date().getTime() - s.getTime()) / 150;
                    1 < n ? tb(t) : (t.setAttribute("transform", "translate(" + (e.x + (i ? -1 : 1) * e.width * o / 2 * n) + "," + (e.y + e.height * o * n) + ") scale(" + (1 - n) * o + ")"), setTimeout(iK, 10, t, e, i, s, o))
                }, iJ = function (t) {
                    var e = t.workspace;
                    let i = e.scale;
                    if (e.getAudioManager().play("click"), !(1 > i)) {
                        var s = e.getSvgXY(t.getSvgRoot());
                        t.outputConnection ? (s.x += (t.RTL ? 3 : -3) * i, s.y += 13 * i) : t.previousConnection && (s.x += (t.RTL ? -23 : 23) * i, s.y += 3 * i);
                        var o = tu(rp.CIRCLE, {
                            cx: s.x,
                            cy: s.y,
                            r: 0,
                            fill: "none",
                            stroke: "#888",
                            "stroke-width": 10
                        }, e.getParentSvg());
                        t = tu(rp.ANIMATE, {
                            id: "animationCircle",
                            begin: "indefinite",
                            attributeName: "r",
                            dur: "150ms",
                            from: 0,
                            to: 25 * i
                        }, o), e = tu(rp.ANIMATE, {
                            id: "animationOpacity",
                            begin: "indefinite",
                            attributeName: "opacity",
                            dur: "150ms",
                            from: 1,
                            to: 0
                        }, o), t.beginElement(), e.beginElement(), setTimeout(() => void tb(o), 150)
                    }
                }, ij = function (t) {
                    if (iq(), t.workspace.getAudioManager().play("disconnect"), !(1 > t.workspace.scale)) {
                        var e = t.getHeightWidth().height;
                        e = Math.atan(10 / e) / Math.PI * 180, t.RTL || (e *= -1), ab = t, iZ(t, e, new Date)
                    }
                }, iZ = function (t, e, i) {
                    let s = (new Date().getTime() - i.getTime()) / 200,
                        o = "";
                    1 >= s && (o = `skewX(${Math.round(Math.sin(s*Math.PI*3)*(1-s)*e)})`, ag = setTimeout(iZ, 10, t, e, i)), t.getSvgRoot().setAttribute("transform", `${t.getTranslation()} ${o}`)
                }, iq = function () {
                    ab && (ag && (clearTimeout(ag), ag = null), ab.getSvgRoot().setAttribute("transform", ab.getTranslation()), ab = null)
                }, iQ = function (t) {
                    return t.length ? t.reduce(function (t, e) {
                        return t.length < e.length ? t : e
                    }).length : 0
                }, i0 = function (t, e) {
                    let i;
                    if (!t.length) return 0;
                    if (1 === t.length) return t[0].length;
                    let s = 0;
                    for (i = 0, e = e || iQ(t); i < e; i++) {
                        for (var o = t[0][i], n = 1; n < t.length; n++)
                            if (o !== t[n][i]) return s;
                        " " === o && (s = i + 1)
                    }
                    for (o = 1; o < t.length; o++)
                        if ((n = t[o][i]) && " " !== n) return s;
                    return e
                }, i1 = function (t, e) {
                    let i;
                    if (!t.length) return 0;
                    if (1 === t.length) return t[0].length;
                    let s = 0;
                    for (i = 0, e = e || iQ(t); i < e; i++) {
                        for (var o = t[0].substr(-i - 1, 1), n = 1; n < t.length; n++)
                            if (o !== t[n].substr(-i - 1, 1)) return s;
                        " " === o && (s = i + 1)
                    }
                    for (o = 1; o < t.length; o++)
                        if ((n = t[o].charAt(t[o].length - i - 1)) && " " !== n) return s;
                    return e
                }, r.wrap$$module$build$src$core$utils$string = function (t, e) {
                    t = t.split("\n");
                    for (let i = 0; i < t.length; i++) t[i] = i2(t[i], e);
                    return t.join("\n")
                }, i2 = function (t, e) {
                    if (t.length <= e) return t;
                    let i = t.trim().split(/\s+/);
                    for (var s = 0; s < i.length; s++) i[s].length > e && (e = i[s].length);
                    var o = -1 / 0;
                    let n, r = 1;
                    do {
                        s = o, n = t, t = [], o = i.length / r;
                        let l = 1;
                        for (let e = 0; e < i.length - 1; e++) l < (e + 1.5) / o ? (l++, t[e] = !0) : t[e] = !1;
                        t = i5(i, t, e), o = i3(i, t, e), t = i6(i, t), r++
                    } while (o > s);
                    return n
                }, i3 = function (t, e, i) {
                    let s = [0],
                        o = [];
                    for (var n = 0; n < t.length; n++) s[s.length - 1] += t[n].length, !0 === e[n] ? (s.push(0), o.push(t[n].charAt(t[n].length - 1))) : !1 === e[n] && s[s.length - 1]++;
                    for (n = 0, t = Math.max(...s), e = 0; n < s.length; n++) e -= 2 * Math.pow(Math.abs(i - s[n]), 1.5), e -= Math.pow(t - s[n], 1.5), -1 !== ".?!".indexOf(o[n]) ? e += i / 3 : -1 !== ",;)]}".indexOf(o[n]) && (e += i / 4);
                    return 1 < s.length && s[s.length - 1] <= s[s.length - 2] && (e += .5), e
                }, i5 = function (t, e, i) {
                    let s = i3(t, e, i),
                        o;
                    for (let n = 0; n < e.length - 1; n++) {
                        if (e[n] === e[n + 1]) continue;
                        let r = [].concat(e);
                        r[n] = !r[n], r[n + 1] = !r[n + 1];
                        let l = i3(t, r, i);
                        l > s && (s = l, o = r)
                    }
                    return o ? i5(t, o, i) : e
                }, i6 = function (t, e) {
                    let i = [];
                    for (let s = 0; s < t.length; s++) i.push(t[s]), void 0 !== e[s] && i.push(e[s] ? "\n" : " ");
                    return i.join("")
                }, r.isNumber$$module$build$src$core$utils$string = function (t) {
                    return /^\s*-?\d+(\.\d+)?\s*$/.test(t)
                }, i9 = function (t) {
                    if (t = i8(t)) {
                        for (t = t.tooltip;
                            "function" == typeof t;) t = t();
                        if ("string" != typeof t) throw Error("Tooltip function must return a string.");
                        return t
                    }
                    return ""
                }, i8 = function (t) {
                    for (; t && t.tooltip;) {
                        if ("string" == typeof t.tooltip || "function" == typeof t.tooltip) return t;
                        t = t.tooltip
                    }
                    return null
                }, i4 = function () {
                    document.querySelector(".blocklyTooltipDiv") || ((aB = document.createElement("div")).className = "blocklyTooltipDiv", (R() || document.body).appendChild(aB))
                }, i7 = function (t) {
                    t.mouseOverWrapper_ = te(t, "pointerover", null, se), t.mouseOutWrapper_ = te(t, "pointerout", null, si), t.addEventListener("pointermove", ss, !1)
                }, st = function (t) {
                    t && (ti(t.mouseOverWrapper_), ti(t.mouseOutWrapper_), t.removeEventListener("pointermove", ss))
                }, se = function (t) {
                    a$ || (aD !== (t = i8(t.currentTarget)) && (sn(), aA = null, aD = t), clearTimeout(av))
                }, si = function (t) {
                    a$ || (av = setTimeout(function () {
                        aA = aD = null, sn()
                    }, 1), clearTimeout(aI), aI = 0)
                }, ss = function (t) {
                    if (aD && aD.tooltip && !a$) {
                        if (ay) {
                            let e = aS - t.pageX;
                            Math.sqrt(e * e + (t = aR - t.pageY) * t) > ax && sn()
                        } else aA !== aD && (clearTimeout(aI), aS = t.pageX, aR = t.pageY, aI = setTimeout(su, aL))
                    }
                }, so = function () {
                    aA = aD = null, sn()
                }, sn = function () {
                    ay && (ay = !1, aB && (aB.style.display = "none")), aI && (clearTimeout(aI), aI = 0)
                }, sr = function () {
                    sn(), a$ = !0
                }, sl = function () {
                    a$ = !1
                }, sa = function () {
                    aB && aD && ("function" == typeof aw ? aw(aB, aD) : sh())
                }, sh = function () {
                    var t = i9(aD);
                    t = (t = r.wrap$$module$build$src$core$utils$string(t, aC)).split("\n");
                    for (let e = 0; e < t.length; e++) {
                        let i = document.createElement("div");
                        i.appendChild(document.createTextNode(t[e])), aB.appendChild(i)
                    }
                }, sc = function (t) {
                    let e = document.documentElement.clientWidth,
                        i = document.documentElement.clientHeight,
                        s = aS;
                    s = t ? s - (aN + aB.offsetWidth) : s + aN;
                    let o = aR + aO;
                    return o + aB.offsetHeight > i + window.scrollY && (o -= aB.offsetHeight + 2 * aO), t ? s = Math.max(aM - window.scrollX, s) : s + aB.offsetWidth > e + window.scrollX - 2 * aM && (s = e - aB.offsetWidth - 2 * aM), {
                        x: s,
                        y: o
                    }
                }, su = function () {
                    if (!a$ && (aA = aD, aB)) {
                        aB.textContent = "", sa();
                        var t = aD.RTL;
                        aB.style.direction = t ? "rtl" : "ltr", aB.style.display = "block", ay = !0;
                        var {
                            x: e,
                            y: i
                        } = sc(t);
                        aB.style.left = e + "px", aB.style.top = i + "px"
                    }
                }, sd = function (t, e) {
                    for (let i in e) t[i] = null !== e[i] && "object" == typeof e[i] ? sd(t[i] || Object.create(null), e[i]) : e[i];
                    return t
                }, sp = function (t) {
                    return void 0 !== t.bubbleIsVisible && void 0 !== t.setBubbleVisible
                }, sg = function () {
                    return aK
                }, sb = function (t) {
                    aK = t
                }, s_ = function () {
                    return aJ
                }, sm = function (t) {
                    aJ = t
                }, sf = function (t) {
                    var e = aj[t = `${t}`.toLowerCase().trim()];
                    if (e || (e = "#" === (e = "0x" === t.substring(0, 2) ? "#" + t.substring(2) : t)[0] ? e : "#" + e, /^#[0-9a-f]{6}$/.test(e))) return e;
                    if (/^#[0-9a-f]{3}$/.test(e)) return ["#", e[1], e[1], e[2], e[2], e[3], e[3]].join("");
                    var i = t.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
                    return i && (t = Number(i[1]), e = Number(i[2]), i = Number(i[3]), 0 <= t && 256 > t && 0 <= e && 256 > e && 0 <= i && 256 > i) ? sE(t, e, i) : null
                }, sE = function (t, e, i) {
                    return e = t << 16 | e << 8 | i, 16 > t ? "#" + (16777216 | e).toString(16).substr(1) : "#" + e.toString(16)
                }, sT = function (t) {
                    return (t = sf(t)) ? [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t] : [0, 0, 0]
                }, sk = function (t, e, i) {
                    let s = 0,
                        o = 0,
                        n = 0;
                    if (0 === e) n = o = s = i;
                    else {
                        let r = Math.floor(t / 60),
                            l = t / 60 - r;
                        t = i * (1 - e);
                        let a = i * (1 - e * l);
                        switch (e = i * (1 - e * (1 - l)), r) {
                            case 1:
                                s = a, o = i, n = t;
                                break;
                            case 2:
                                s = t, o = i, n = e;
                                break;
                            case 3:
                                s = t, o = a, n = i;
                                break;
                            case 4:
                                s = e, o = t, n = i;
                                break;
                            case 5:
                                s = i, o = t, n = a;
                                break;
                            case 6:
                            case 0:
                                s = i, o = e, n = t
                        }
                    }
                    return sE(Math.floor(s), Math.floor(o), Math.floor(n))
                }, sw = function (t, e, i) {
                    return (t = sf(t)) && (e = sf(e)) ? (t = sT(t), e = sT(e), sE(Math.round(e[0] + i * (t[0] - e[0])), Math.round(e[1] + i * (t[1] - e[1])), Math.round(e[2] + i * (t[2] - e[2])))) : null
                }, sy = function (t) {
                    return sk(t, aK, 255 * aJ)
                }, s$ = function (t, e, i) {
                    let s = [];
                    var o = t.split("");
                    o.push("");
                    var n = 0;
                    t = [];
                    let l = null;
                    for (let c = 0; c < o.length; c++) {
                        var a = o[c];
                        if (0 === n) {
                            if ("%" === a)(n = t.join("")) && s.push(n), t.length = 0, n = 1;
                            else if (i && "\n" === a) {
                                let e = t.join("");
                                e && s.push(e), t.length = 0, s.push(a)
                            } else t.push(a)
                        } else if (1 === n) "%" === a ? (t.push(a), n = 0) : e && "0" <= a && "9" >= a ? (n = 2, l = a, (a = t.join("")) && s.push(a), t.length = 0) : "{" === a ? n = 3 : (t.push("%", a), n = 0);
                        else if (2 === n) {
                            if ("0" <= a && "9" >= a) l += a;
                            else {
                                var h = void 0;
                                s.push(parseInt(null != (h = l) ? h : "", 10)), c--, n = 0
                            }
                        } else 3 === n && ("" === a ? (t.splice(0, 0, "%{"), c--, n = 0) : "}" !== a ? t.push(a) : (n = t.join(""), /[A-Z]\w*/i.test(n) && (a = (a = n.toUpperCase()).startsWith("BKY_") ? a.substring(4) : null) && a in r.Msg$$module$build$src$core$msg ? "string" == typeof (n = r.Msg$$module$build$src$core$msg[a]) ? Array.prototype.push.apply(s, s$(n, e, i)) : e ? s.push(`${n}`) : s.push(n) : s.push("%{" + n + "}"), n = t.length = 0))
                    }
                    for ((e = t.join("")) && s.push(e), h = [], t.length = 0, o = 0; o < s.length; o++) "string" != typeof s[o] || i && "\n" === s[o] ? ((e = t.join("")) && h.push(e), t.length = 0, h.push(s[o])) : t.push(s[o]);
                    return (e = t.join("")) && h.push(e), t.length = 0, h
                }, sC = function (t) {
                    return s$(t, !0, !0)
                }, sv = function (t) {
                    return "string" != typeof t ? t : (t = s$(t, !1, !1)).length ? String(t[0]) : ""
                }, sI = function (t) {
                    let e = "string" == typeof t ? sv(t) : t;
                    var i = Number(e);
                    if (!isNaN(i) && 0 <= i && 360 >= i) return {
                        hue: i,
                        hex: sk(i, sg(), 255 * s_())
                    };
                    if (i = sf(e)) return {
                        hue: null,
                        hex: i
                    };
                    throw i = 'Invalid colour: "' + e + '"', t !== e && (i += ' (from "' + t + '")'), Error(i)
                }, sS = function (t) {
                    return void 0 !== t.getProcedureModel && void 0 !== t.doProcedureUpdate && void 0 !== t.isProcedureDef
                }, sR = function (t) {
                    return void 0 !== t.startPublishing && void 0 !== t.stopPublishing
                }, sD = function (t, e) {
                    d(c.FIELD, t, e)
                }, r.fromJson$$module$build$src$core$field_registry = function (t) {
                    return a5.fromJsonInternal(t)
                }, sA = function (t) {
                    let e = !1,
                        i = t.map(([t, i]) => "string" == typeof t ? [sv(t), i] : (e = !0, [null !== t.alt ? Object.assign({}, t, {
                            alt: sv(t.alt)
                        }) : Object.assign({}, t), i]));
                    if (e || 2 > t.length) return {
                        options: i
                    };
                    var s = i.map(([t]) => t),
                        o = iQ(s);
                    t = i0(s, o);
                    let n = i1(s, o);
                    return (t || n) && !(o <= t + n) ? (o = t ? s[0].substring(0, t - 1) : void 0, s = n ? s[0].substr(1 - n) : void 0, {
                        options: sN(i, t, n),
                        prefix: o,
                        suffix: s
                    }) : {
                        options: i
                    }
                }, sN = function (t, e, i) {
                    return t.map(([t, s]) => [t.substring(e, t.length - i), s])
                }, sO = function (t) {
                    if (!Array.isArray(t)) throw TypeError("FieldDropdown options must be an array.");
                    if (!t.length) throw TypeError("FieldDropdown options must not be an empty array.");
                    let e = !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        Array.isArray(s) ? "string" != typeof s[1] ? (e = !0, console.error("Invalid option[" + i + "]: Each FieldDropdown option id must be a string. Found " + s[1] + " in: ", s)) : s[0] && "string" != typeof s[0] && "string" != typeof s[0].src && (e = !0, console.error("Invalid option[" + i + "]: Each FieldDropdown option must have a string label or image description. Found" + s[0] + " in: ", s)) : (e = !0, console.error("Invalid option[" + i + "]: Each FieldDropdown option must be an array. Found: ", s))
                    }
                    if (e) throw TypeError("Found invalid FieldDropdown options.")
                }, r.register$$module$build$src$core$extensions = function (t, e) {
                    if ("string" != typeof t || "" === t.trim()) throw Error('Error: Invalid extension name "' + t + '"');
                    if (hi[t]) throw Error('Error: Extension "' + t + '" is already registered.');
                    if ("function" != typeof e) throw Error('Error: Extension "' + t + '" must be a function');
                    hi[t] = e
                }, r.registerMixin$$module$build$src$core$extensions = function (t, e) {
                    if (!e || "object" != typeof e) throw Error('Error: Mixin "' + t + '" must be a object');
                    r.register$$module$build$src$core$extensions(t, function () {
                        this.mixin(e)
                    })
                }, r.registerMutator$$module$build$src$core$extensions = function (t, e, i, s) {
                    let o = 'Error when registering mutator "' + t + '": ';
                    sF(o, e);
                    let n = sB(e, o);
                    if (i && "function" != typeof i) throw Error(o + 'Extension "' + t + '" is not a function');
                    r.register$$module$build$src$core$extensions(t, function () {
                        n && this.setMutator(new r.MutatorIcon$$module$build$src$core$icons$mutator_icon(s || [], this)), this.mixin(e), i && i.apply(this)
                    })
                }, sx = function (t) {
                    return !!hi[t]
                }, sL = function (t, e, i) {
                    let s;
                    let o = hi[t];
                    if ("function" != typeof o) throw Error('Error: Extension "' + t + '" not found.');
                    if (i ? sM(t, e) : s = sH(e), o.apply(e), i) sF('Error after applying mutator "' + t + '": ', e);
                    else if (!sG(s, e)) throw Error('Error when applying extension "' + t + '": mutation properties changed when applying a non-mutator extension.')
                }, sM = function (t, e) {
                    if (sH(e).length) throw Error('Error: tried to apply mutation "' + t + '" to a block that already has mutator functions.  Block id: ' + e.id)
                }, sB = function (t, e) {
                    return sP(t.compose, t.decompose, e + " compose/decompose")
                }, sP = function (t, e, i) {
                    if (t && e) {
                        if ("function" != typeof t || "function" != typeof e) throw Error(i + " must be a function");
                        return !0
                    }
                    if (!t && !e) return !1;
                    throw Error(i + "Must have both or neither functions")
                }, sF = function (t, e) {
                    let i = sP(e.mutationToDom, e.domToMutation, t + " mutationToDom/domToMutation"),
                        s = sP(e.saveExtraState, e.loadExtraState, t + " saveExtraState/loadExtraState");
                    if (!i && !s) throw Error(t + "Mutations must contain either XML hooks, or JSON hooks, or both");
                    sB(e, t)
                }, sH = function (t) {
                    let e = [];
                    return void 0 !== t.domToMutation && e.push(t.domToMutation), void 0 !== t.mutationToDom && e.push(t.mutationToDom), void 0 !== t.saveExtraState && e.push(t.saveExtraState), void 0 !== t.loadExtraState && e.push(t.loadExtraState), void 0 !== t.compose && e.push(t.compose), void 0 !== t.decompose && e.push(t.decompose), e
                }, sG = function (t, e) {
                    if ((e = sH(e)).length !== t.length) return !1;
                    for (let i = 0; i < e.length; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }, r.buildTooltipForDropdown$$module$build$src$core$extensions = function (t, e) {
                    let i = [];
                    return function () {
                        -1 === i.indexOf(this.type) && (sU(this, t, e), i.push(this.type)), this.setTooltip((function () {
                            let i = String(this.getFieldValue(t));
                            return sv(e[i])
                        }).bind(this))
                    }
                }, sU = function (t, e, i) {
                    var s = t.getField(e);
                    if (s instanceof a9 && !s.isOptionListDynamic())
                        for (let [, o] of s = s.getOptions()) void 0 === i[o] && console.warn(`No tooltip mapping for value ${o} of field ${e} of block type ${t.type}.`)
                }, r.buildTooltipWithFieldText$$module$build$src$core$extensions = function (t, e) {
                    return function () {
                        this.setTooltip((function () {
                            let i = this.getField(e);
                            return sv(t).replace("%1", i ? i.getText() : "")
                        }).bind(this))
                    }
                }, sW = function (t, e) {
                    return " " + t + "," + e + " "
                }, sV = function (t, e) {
                    return " " + t + e.join("")
                }, sz = function (t, e) {
                    return " M " + t + "," + e + " "
                }, sX = function (t, e) {
                    return " m " + t + "," + e + " "
                }, sY = function (t, e) {
                    return " l " + t + "," + e + " "
                }, sK = function (t) {
                    return " l" + t.join("")
                }, sJ = function (t, e) {
                    return " " + t + " " + e + " "
                }, sj = function (t, e, i, s) {
                    return t + " " + i + " " + i + " " + e + s
                }, sZ = function (t, e) {
                    d(c.ICON, t.toString(), e)
                }, sq = function (t) {
                    let e = t.getProcedureMap().getProcedures().filter(t => !t.getReturnTypes()).map(t => [t.getName(), t.getParameters().map(t => t.getName()), !1]);
                    t.getBlocksByType("procedures_defnoreturn", !1).forEach(t => {
                        !sS(t) && tQ(t) && e.push(t.getProcedureDef())
                    });
                    let i = t.getProcedureMap().getProcedures().filter(t => !!t.getReturnTypes()).map(t => [t.getName(), t.getParameters().map(t => t.getName()), !0]);
                    return t.getBlocksByType("procedures_defreturn", !1).forEach(t => {
                        !sS(t) && tQ(t) && i.push(t.getProcedureDef())
                    }), e.sort(sQ), i.sort(sQ), [e, i]
                }, sQ = function (t, e) {
                    return t[0].localeCompare(e[0], void 0, {
                        sensitivity: "base"
                    })
                }, r.findLegalName$$module$build$src$core$procedures = function (t, e) {
                    if (e.isInFlyout) return t;
                    for (t = t || r.Msg$$module$build$src$core$msg.UNNAMED_KEY || "unnamed"; !s0(t, e.workspace, e);) {
                        let e = t.match(/^(.*?)(\d+)$/);
                        t = e ? e[1] + (parseInt(e[2]) + 1) : t + "2"
                    }
                    return t
                }, s0 = function (t, e, i) {
                    return !s1(t, e, i)
                }, s1 = function (t, e, i) {
                    for (let s of e.getAllBlocks(!1))
                        if (s !== i && tQ(s) && r.Names$$module$build$src$core$names.equals(s.getProcedureDef()[0], t)) return !0;
                    for (let s of (i = i && sS(i) ? null == i ? void 0 : i.getProcedureModel() : void 0, e.getProcedureMap().getProcedures()))
                        if (s !== i && r.Names$$module$build$src$core$names.equals(s.getName(), t)) return !0;
                    return !1
                }, r.rename$$module$build$src$core$procedures = function (t) {
                    var e = this.getSourceBlock();
                    if (!e) throw new a0;
                    t = t.trim();
                    let i = r.findLegalName$$module$build$src$core$procedures(t, e);
                    sS(e) && !e.isInsertionMarker() && e.getProcedureModel().setName(i);
                    let s = this.getValue();
                    if (s !== t && s !== i)
                        for (t = e.workspace.getAllBlocks(!1), e = 0; e < t.length; e++) {
                            let o = t[e];
                            o.renameProcedure && o.renameProcedure(s, i)
                        }
                    return i
                }, s2 = function (t) {
                    function e(t, e) {
                        for (let o = 0; o < t.length; o++) {
                            var s = t[o][0];
                            let n = t[o][1],
                                l = r.createElement$$module$build$src$core$utils$xml("block");
                            l.setAttribute("type", e), l.setAttribute("gap", "16");
                            let a = r.createElement$$module$build$src$core$utils$xml("mutation");
                            for (a.setAttribute("name", s), l.appendChild(a), s = 0; s < n.length; s++) {
                                let t = r.createElement$$module$build$src$core$utils$xml("arg");
                                t.setAttribute("name", n[s]), a.appendChild(t)
                            }
                            i.push(l)
                        }
                    }
                    let i = [];
                    if (o3.procedures_defnoreturn) {
                        var s = r.createElement$$module$build$src$core$utils$xml("block");
                        s.setAttribute("type", "procedures_defnoreturn"), s.setAttribute("gap", "16");
                        var o = r.createElement$$module$build$src$core$utils$xml("field");
                        o.setAttribute("name", "NAME"), o.appendChild(r.createTextNode$$module$build$src$core$utils$xml(r.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_PROCEDURE)), s.appendChild(o), i.push(s)
                    }
                    return o3.procedures_defreturn && ((s = r.createElement$$module$build$src$core$utils$xml("block")).setAttribute("type", "procedures_defreturn"), s.setAttribute("gap", "16"), (o = r.createElement$$module$build$src$core$utils$xml("field")).setAttribute("name", "NAME"), o.appendChild(r.createTextNode$$module$build$src$core$utils$xml(r.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_PROCEDURE)), s.appendChild(o), i.push(s)), o3.procedures_ifreturn && ((s = r.createElement$$module$build$src$core$utils$xml("block")).setAttribute("type", "procedures_ifreturn"), s.setAttribute("gap", "16"), i.push(s)), i.length && i[i.length - 1].setAttribute("gap", "24"), e((t = sq(t))[0], "procedures_callnoreturn"), e(t[1], "procedures_callreturn"), i
                }, s3 = function (t) {
                    var e = [],
                        i = t.getBlocksByType("procedures_mutatorarg", !1);
                    for (let t = 0, s; s = i[t]; t++) e.push(s.getFieldValue("NAME"));
                    i = r.createElement$$module$build$src$core$utils$xml("xml");
                    let s = r.createElement$$module$build$src$core$utils$xml("block");
                    s.setAttribute("type", "procedures_mutatorarg");
                    let o = r.createElement$$module$build$src$core$utils$xml("field");
                    o.setAttribute("name", "NAME"), e = t5(r.DEFAULT_ARG$$module$build$src$core$procedures, e), e = r.createTextNode$$module$build$src$core$utils$xml(e), o.appendChild(e), s.appendChild(o), i.appendChild(s), t.updateToolbox(i)
                }, s5 = function (t) {
                    if (t.type === nb && "mutator" === t.bubbleType && t.isOpen && t.blockId) {
                        var e = (t = k(t.workspaceId).getBlockById(t.blockId)).type;
                        ("procedures_defnoreturn" === e || "procedures_defreturn" === e) && (t = t.getIcon(r.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE).getWorkspace(), s3(t), t.addChangeListener(s6))
                    }
                }, s6 = function (t) {
                    (t.type === r.CREATE$$module$build$src$core$events$utils || t.type === r.DELETE$$module$build$src$core$events$utils || t.type === r.CHANGE$$module$build$src$core$events$utils || t.type === nr) && s3(t = k(t.workspaceId))
                }, s9 = function (t, e) {
                    return e.getAllBlocks(!1).filter(e => s8(e, t) || t0(e) && r.Names$$module$build$src$core$names.equals(e.getProcedureCall(), t))
                }, s8 = function (t, e) {
                    return sS(t) && !t.isProcedureDef() && t.getProcedureModel() && r.Names$$module$build$src$core$names.equals(t.getProcedureModel().getName(), e)
                }, r.mutateCallers$$module$build$src$core$procedures = function (t) {
                    let e = P();
                    var i = t.getProcedureDef()[0];
                    let s = t.mutationToDom(!0);
                    t = s9(i, t.workspace);
                    for (let n = 0, l; l = t[n]; n++) {
                        i = (i = l.mutationToDom()) && tL(i), l.domToMutation && l.domToMutation(s);
                        var o = l.mutationToDom();
                        i !== (o = o && tL(o)) && (B(!1), F(new(X(r.CHANGE$$module$build$src$core$events$utils))(l, "mutation", null, i, o)), B(e))
                    }
                }, r.getDefinition$$module$build$src$core$procedures = function (t, e) {
                    for (let i of e.getAllBlocks(!1))
                        if (sS(i) && i.isProcedureDef() && r.Names$$module$build$src$core$names.equals(i.getProcedureModel().getName(), t) || tQ(i) && r.Names$$module$build$src$core$names.equals(i.getProcedureDef()[0], t)) return i;
                    return null
                }, s4 = function (t) {
                    return t.isDynamic
                }, s7 = function (t) {
                    let e = t.outputConnection;
                    return (!e || t.previousConnection && t.previousConnection.isConnected()) && (e = t.previousConnection), e
                }, ot = function (t, e) {
                    if (!t || !e) throw Error("Cannot connect null connections.");
                    t.targetConnection = e, e.targetConnection = t
                }, oe = function (t, e) {
                    let i = null;
                    e = e.outputConnection;
                    let s = null == e ? void 0 : e.getConnectionChecker();
                    for (let o = 0, n; n = t.inputList[o]; o++) {
                        let t = n.connection;
                        if (t && (null == s ? 0 : s.canConnect(e, t, !1))) {
                            if (i) return null;
                            i = t
                        }
                    }
                    return i
                }, oi = function (t, e) {
                    let i;
                    for (; i = oe(t, e);)
                        if (!(t = i.targetBlock()) || t.isShadow()) return i;
                    return null
                }, os = function (t, e) {
                    d(c.RENDERER, t, e)
                }, oo = function (t, e, i) {
                    return (t = new(m(c.RENDERER, t))(t)).init(e, i), t
                }, on = function (t) {
                    t6(t.getTargetWorkspace(), void 0, "String")
                }, or = function (t) {
                    t6(t.getTargetWorkspace(), void 0, "Number")
                }, ol = function (t) {
                    t6(t.getTargetWorkspace(), void 0, "Colour")
                }, oa = function (t) {
                    let e = [],
                        i = document.createElement("button");
                    return i.setAttribute("text", r.Msg$$module$build$src$core$msg.NEW_STRING_VARIABLE), i.setAttribute("callbackKey", "CREATE_VARIABLE_STRING"), e.push(i), (i = document.createElement("button")).setAttribute("text", r.Msg$$module$build$src$core$msg.NEW_NUMBER_VARIABLE), i.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER"), e.push(i), (i = document.createElement("button")).setAttribute("text", r.Msg$$module$build$src$core$msg.NEW_COLOUR_VARIABLE), i.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR"), e.push(i), t.registerButtonCallback("CREATE_VARIABLE_STRING", on), t.registerButtonCallback("CREATE_VARIABLE_NUMBER", or), t.registerButtonCallback("CREATE_VARIABLE_COLOUR", ol), e.concat(t = oh(t))
                }, oh = function (t) {
                    t = t.getAllVariables();
                    let e = [];
                    if (0 < t.length) {
                        if (o3.variables_set_dynamic) {
                            var i = t[t.length - 1];
                            let s = r.createElement$$module$build$src$core$utils$xml("block");
                            s.setAttribute("type", "variables_set_dynamic"), s.setAttribute("gap", "24"), s.appendChild(ei(i)), e.push(s)
                        }
                        if (o3.variables_get_dynamic) {
                            t.sort(rK.compareByName);
                            for (let s = 0, o; o = t[s]; s++)(i = r.createElement$$module$build$src$core$utils$xml("block")).setAttribute("type", "variables_get_dynamic"), i.setAttribute("gap", "8"), i.appendChild(ei(o)), e.push(i)
                        }
                    }
                    return e
                }, oc = function (t) {
                    return void 0 !== t.toCopyData
                }, ou = function () {
                    cF.registry.register({
                        name: c7.ESCAPE,
                        preconditionFn: t => !t.options.readOnly,
                        callback: t => (t.hideChaff(), !0),
                        keyCodes: [hU.ESC]
                    })
                }, od = function () {
                    cF.registry.register({
                        name: c7.DELETE,
                        preconditionFn(t) {
                            let e = I();
                            return !t.options.readOnly && null != e && e.isDeletable()
                        },
                        callback: (t, e) => (e.preventDefault(), !aH.inProgress() && (I().checkAndDelete(), !0)),
                        keyCodes: [hU.DELETE, hU.BACKSPACE]
                    })
                }, op = function () {
                    let t = cF.registry.createSerializedKey(hU.C, [hU.CTRL]),
                        e = cF.registry.createSerializedKey(hU.C, [hU.ALT]),
                        i = cF.registry.createSerializedKey(hU.C, [hU.META]);
                    cF.registry.register({
                        name: c7.COPY,
                        preconditionFn(t) {
                            let e = I();
                            return !t.options.readOnly && !aH.inProgress() && null != e && e.isDeletable() && e.isMovable() && oc(e)
                        },
                        callback: (t, e) => (e.preventDefault(), t.hideChaff(), !!((e = I()) && oc(e)) && (cH = e.toCopyData(), cG = t, !!cH)),
                        keyCodes: [t, e, i]
                    })
                }, og = function () {
                    let t = cF.registry.createSerializedKey(hU.X, [hU.CTRL]),
                        e = cF.registry.createSerializedKey(hU.X, [hU.ALT]),
                        i = cF.registry.createSerializedKey(hU.X, [hU.META]);
                    cF.registry.register({
                        name: c7.CUT,
                        preconditionFn(t) {
                            let e = I();
                            return !t.options.readOnly && !aH.inProgress() && null != e && e instanceof ck && e.isDeletable() && e.isMovable() && !e.workspace.isFlyout
                        },
                        callback(t) {
                            let e = I();
                            return !!(e && oc(e)) && (cH = e.toCopyData(), cG = t, e.checkAndDelete(), !0)
                        },
                        keyCodes: [t, e, i]
                    })
                }, ob = function () {
                    let t = cF.registry.createSerializedKey(hU.V, [hU.CTRL]),
                        e = cF.registry.createSerializedKey(hU.V, [hU.ALT]),
                        i = cF.registry.createSerializedKey(hU.V, [hU.META]);
                    cF.registry.register({
                        name: c7.PASTE,
                        preconditionFn: t => !t.options.readOnly && !aH.inProgress(),
                        callback: () => !!cH && !!cG && !!e8(cH, cG),
                        keyCodes: [t, e, i]
                    })
                }, o_ = function () {
                    let t = cF.registry.createSerializedKey(hU.Z, [hU.CTRL]),
                        e = cF.registry.createSerializedKey(hU.Z, [hU.ALT]),
                        i = cF.registry.createSerializedKey(hU.Z, [hU.META]);
                    cF.registry.register({
                        name: c7.UNDO,
                        preconditionFn: t => !t.options.readOnly && !aH.inProgress(),
                        callback: t => (t.hideChaff(), t.undo(!1), !0),
                        keyCodes: [t, e, i]
                    })
                }, om = function () {
                    let t = cF.registry.createSerializedKey(hU.Z, [hU.SHIFT, hU.CTRL]),
                        e = cF.registry.createSerializedKey(hU.Z, [hU.SHIFT, hU.ALT]),
                        i = cF.registry.createSerializedKey(hU.Z, [hU.SHIFT, hU.META]),
                        s = cF.registry.createSerializedKey(hU.Y, [hU.CTRL]);
                    cF.registry.register({
                        name: c7.REDO,
                        preconditionFn: t => !aH.inProgress() && !t.options.readOnly,
                        callback: t => (t.hideChaff(), t.undo(!0), !0),
                        keyCodes: [t, e, i, s]
                    })
                }, of = function () {
                    ou(), od(), op(), og(), ob(), o_(), om()
                }, oE = function (t) {
                    let e = {
                        id: t.getId(),
                        name: t.getName(),
                        returnTypes: t.getReturnTypes()
                    };
                    return t.getParameters().length && (e.parameters = t.getParameters().map(t => oT(t))), e
                }, oT = function (t) {
                    let e = {
                        id: t.getId(),
                        name: t.getName()
                    };
                    return t.getTypes().length && (e.types = t.getTypes()), e
                }, ok = function (t, e, i, s) {
                    if (t = new t(s, i.name, i.id).setReturnTypes(i.returnTypes), !i.parameters) return t;
                    for (let [o, n] of i.parameters.entries()) t.insertParameter(ow(e, n, s), o);
                    return t
                }, ow = function (t, e, i) {
                    return t = new t(i, e.name, e.id), e.types && t.setTypes(e.types), t
                }, oy = function (t, e, i) {
                    let s = i.getBoundingRectangle(),
                        o = s.right - s.left,
                        n = iv(e.top, s.top, e.top + e.height - (s.bottom - s.top)) - s.top,
                        r = e.left;
                    return e = e.left + e.width - o, t.RTL ? r = Math.min(e, r) : e = Math.max(r, e), (!!(t = iv(r, s.left, e) - s.left) || !!n) && (i.moveBy(t, n, ["inbounds"]), !0)
                }, o$ = function (t) {
                    return e => {
                        var i, s = t.getMetricsManager();
                        if (s.hasFixedEdges() && !t.isDragging()) {
                            if (-1 !== nC.indexOf(null != (i = e.type) ? i : "")) {
                                i = s.getScrollMetrics(!0);
                                let o = oC(t, e);
                                o && (s = r.getGroup$$module$build$src$core$events$utils() || !1, r.setGroup$$module$build$src$core$events$utils(e.group), oy(t, i, o) && !e.group && console.warn("Moved object in bounds but there was no event group. This may break undo."), r.setGroup$$module$build$src$core$events$utils(s))
                            } else e.type === nE && e.scale && e.oldScale && e.scale > e.oldScale && ov(t)
                        }
                    }
                }, oC = function (t, e) {
                    let i = null;
                    switch (e.type) {
                        case r.CREATE$$module$build$src$core$events$utils:
                        case r.MOVE$$module$build$src$core$events$utils:
                            (i = t.getBlockById(e.blockId)) && (i = i.getRootBlock());
                            break;
                        case nT:
                        case ny:
                            i = t.getCommentById(e.commentId)
                    }
                    return i
                }, ov = function (t) {
                    var e = t.getMetricsManager();
                    if (e.hasFixedEdges() && !t.isDragging()) {
                        e = e.getScrollMetrics(!0);
                        var i = t.getTopBoundedElements();
                        for (let s = 0, o; o = i[s]; s++) oy(t, e, o)
                    }
                }, oI = function (t, e) {
                    let i = [];
                    for (let s of t.getIcons())(!sp(s) || s.bubbleIsVisible()) && (i.push({
                        location: e,
                        icon: s
                    }), s.onLocationChange(e));
                    for (let s of t.getChildren(!1)) i.push(...oI(s, n3.sum(e, s.relativeCoords)));
                    return i
                }, oS = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.UNDO,
                        preconditionFn: t => 0 < t.workspace.getUndoStack().length ? "enabled" : "disabled",
                        callback(t) {
                            t.workspace.undo(!1)
                        },
                        scopeType: l1.ScopeType.WORKSPACE,
                        id: "undoWorkspace",
                        weight: 1
                    })
                }, oR = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.REDO,
                        preconditionFn: t => 0 < t.workspace.getRedoStack().length ? "enabled" : "disabled",
                        callback(t) {
                            t.workspace.undo(!0)
                        },
                        scopeType: l1.ScopeType.WORKSPACE,
                        id: "redoWorkspace",
                        weight: 2
                    })
                }, oD = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.CLEAN_UP,
                        preconditionFn: t => t.workspace.isMovable() ? 1 < t.workspace.getTopBlocks(!1).length ? "enabled" : "disabled" : "hidden",
                        callback(t) {
                            t.workspace.cleanUp()
                        },
                        scopeType: l1.ScopeType.WORKSPACE,
                        id: "cleanWorkspace",
                        weight: 3
                    })
                }, oA = function (t, e) {
                    function i(e) {
                        o--, e.setCollapsed(t), 0 === o && r.setGroup$$module$build$src$core$events$utils(!1)
                    }
                    let s = 0,
                        o = 0;
                    r.setGroup$$module$build$src$core$events$utils(!0);
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        for (; n;) o++, setTimeout(i.bind(null, n), s), n = n.getNextBlock(), s += 10
                    }
                }, oN = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.COLLAPSE_ALL,
                        preconditionFn(t) {
                            if (t.workspace.options.collapse) {
                                t = t.workspace.getTopBlocks(!1);
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    for (; i;) {
                                        if (!i.isCollapsed()) return "enabled";
                                        i = i.getNextBlock()
                                    }
                                }
                                return "disabled"
                            }
                            return "hidden"
                        },
                        callback(t) {
                            oA(!0, t.workspace.getTopBlocks(!0))
                        },
                        scopeType: l1.ScopeType.WORKSPACE,
                        id: "collapseWorkspace",
                        weight: 4
                    })
                }, oO = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.EXPAND_ALL,
                        preconditionFn(t) {
                            if (t.workspace.options.collapse) {
                                t = t.workspace.getTopBlocks(!1);
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    for (; i;) {
                                        if (i.isCollapsed()) return "enabled";
                                        i = i.getNextBlock()
                                    }
                                }
                                return "disabled"
                            }
                            return "hidden"
                        },
                        callback(t) {
                            oA(!1, t.workspace.getTopBlocks(!0))
                        },
                        scopeType: l1.ScopeType.WORKSPACE,
                        id: "expandWorkspace",
                        weight: 5
                    })
                }, ox = function (t, e) {
                    if (t.isDeletable()) Array.prototype.push.apply(e, t.getDescendants(!1));
                    else {
                        t = t.getChildren(!1);
                        for (let i = 0; i < t.length; i++) ox(t[i], e)
                    }
                }, oL = function (t) {
                    let e = [];
                    t = t.getTopBlocks(!0);
                    for (let i = 0; i < t.length; i++) ox(t[i], e);
                    return e
                }, oM = function (t, e) {
                    e ? r.setGroup$$module$build$src$core$events$utils(e) : (r.setGroup$$module$build$src$core$events$utils(!0), e = r.getGroup$$module$build$src$core$events$utils());
                    let i = t.shift();
                    i && (i.isDeadOrDying() ? oM(t, e) : (i.dispose(!1, !0), setTimeout(oM, 10, t, e))), r.setGroup$$module$build$src$core$events$utils(!1)
                }, oB = function () {
                    l1.registry.register({
                        displayText: t => t.workspace ? 1 === (t = oL(t.workspace).length) ? r.Msg$$module$build$src$core$msg.DELETE_BLOCK : r.Msg$$module$build$src$core$msg.DELETE_X_BLOCKS.replace("%1", `${t}`) : "",
                        preconditionFn: t => t.workspace && 0 < oL(t.workspace).length ? "enabled" : "disabled",
                        callback(t) {
                            if (t.workspace) {
                                t.workspace.cancelCurrentGesture();
                                var e = oL(t.workspace);
                                2 > e.length ? oM(e) : tj(r.Msg$$module$build$src$core$msg.DELETE_ALL_BLOCKS.replace("%1", String(e.length)), function (t) {
                                    t && oM(e)
                                })
                            }
                        },
                        scopeType: l1.ScopeType.WORKSPACE,
                        id: "workspaceDelete",
                        weight: 6
                    })
                }, oP = function () {
                    oS(), oR(), oD(), oN(), oO(), oB()
                }, oF = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.DUPLICATE_BLOCK,
                        preconditionFn: t => !(t = t.block).isInFlyout && t.isDeletable() && t.isMovable() ? t.isDuplicatable() ? "enabled" : "disabled" : "hidden",
                        callback(t) {
                            if (t.block) {
                                var e = t.block.toCopyData();
                                e && e8(e, t.block.workspace)
                            }
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockDuplicate",
                        weight: 1
                    })
                }, oH = function () {
                    l1.registry.register({
                        displayText: t => t.block.hasIcon(hh.TYPE) ? r.Msg$$module$build$src$core$msg.REMOVE_COMMENT : r.Msg$$module$build$src$core$msg.ADD_COMMENT,
                        preconditionFn: t => !(t = t.block).isInFlyout && t.workspace.options.comments && !t.isCollapsed() && t.isEditable() ? "enabled" : "hidden",
                        callback(t) {
                            (t = t.block).hasIcon(hh.TYPE) ? t.setCommentText(null) : t.setCommentText("")
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockComment",
                        weight: 2
                    })
                }, oG = function () {
                    l1.registry.register({
                        displayText: t => t.block.getInputsInline() ? r.Msg$$module$build$src$core$msg.EXTERNAL_INPUTS : r.Msg$$module$build$src$core$msg.INLINE_INPUTS,
                        preconditionFn(t) {
                            if (!(t = t.block).isInFlyout && t.isMovable() && !t.isCollapsed()) {
                                for (let e = 1; e < t.inputList.length; e++)
                                    if (!(t.inputList[e - 1] instanceof u_ || t.inputList[e] instanceof u_)) return "enabled"
                            }
                            return "hidden"
                        },
                        callback(t) {
                            t.block.setInputsInline(!t.block.getInputsInline())
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockInline",
                        weight: 3
                    })
                }, oU = function () {
                    l1.registry.register({
                        displayText: t => t.block.isCollapsed() ? r.Msg$$module$build$src$core$msg.EXPAND_BLOCK : r.Msg$$module$build$src$core$msg.COLLAPSE_BLOCK,
                        preconditionFn: t => !(t = t.block).isInFlyout && t.isMovable() && t.workspace.options.collapse ? "enabled" : "hidden",
                        callback(t) {
                            t.block.setCollapsed(!t.block.isCollapsed())
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockCollapseExpand",
                        weight: 4
                    })
                }, oW = function () {
                    l1.registry.register({
                        displayText: t => t.block.isEnabled() ? r.Msg$$module$build$src$core$msg.DISABLE_BLOCK : r.Msg$$module$build$src$core$msg.ENABLE_BLOCK,
                        preconditionFn: t => !(t = t.block).isInFlyout && t.workspace.options.disable && t.isEditable() ? t.getInheritedDisabled() ? "disabled" : "enabled" : "hidden",
                        callback(t) {
                            t = t.block;
                            let e = r.getGroup$$module$build$src$core$events$utils();
                            e || r.setGroup$$module$build$src$core$events$utils(!0), t.setEnabled(!t.isEnabled()), r.setGroup$$module$build$src$core$events$utils(e)
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockDisable",
                        weight: 5
                    })
                }, oV = function () {
                    l1.registry.register({
                        displayText(t) {
                            var e = t.block;
                            return t = e.getDescendants(!1).length, (e = e.getNextBlock()) && (t -= e.getDescendants(!1).length), 1 === t ? r.Msg$$module$build$src$core$msg.DELETE_BLOCK : r.Msg$$module$build$src$core$msg.DELETE_X_BLOCKS.replace("%1", `${t}`)
                        },
                        preconditionFn: t => !t.block.isInFlyout && t.block.isDeletable() ? "enabled" : "hidden",
                        callback(t) {
                            t.block && t.block.checkAndDelete()
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockDelete",
                        weight: 6
                    })
                }, oz = function () {
                    l1.registry.register({
                        displayText: () => r.Msg$$module$build$src$core$msg.HELP,
                        preconditionFn: t => ("function" == typeof (t = t.block).helpUrl ? t.helpUrl() : t.helpUrl) ? "enabled" : "hidden",
                        callback(t) {
                            t.block.showHelp()
                        },
                        scopeType: l1.ScopeType.BLOCK,
                        id: "blockHelp",
                        weight: 7
                    })
                }, oX = function () {
                    oF(), oH(), oG(), oU(), oW(), oV(), oz()
                }, oY = function () {
                    oP(), oX()
                }, oK = function (t, e) {
                    t.setAttribute("dir", "LTR"), th(e.hasCss, e.pathToMedia), t = tu(rp.SVG, {
                        xmlns: rr,
                        "xmlns:html": rl,
                        "xmlns:xlink": ra,
                        version: "1.1",
                        class: "blocklySvg",
                        tabindex: "0"
                    }, t);
                    let i = tu(rp.DEFS, {}, t),
                        s = String(Math.random()).substring(2);
                    return e.gridPattern = aG.createDom(s, e.gridOptions, i), t
                }, oJ = function (t, e, i) {
                    i.parentWorkspace = null, i = new ch(i);
                    let s = i.options;
                    i.scale = s.zoomOptions.startScale, e.appendChild(i.createDom("blocklyMainBackground", t));
                    var o = i.getRenderer().getClassName();
                    return o && td(t, o), (o = i.getTheme().getClassName()) && td(t, o), !s.hasCategories && s.languageTree && (t = i.addFlyout(rp.SVG), t_(t, e)), s.hasTrashcan && i.addTrashcan(), s.zoomOptions && s.zoomOptions.controls && i.addZoomControls(), i.getThemeManager().subscribe(e, "workspaceBackgroundColour", "background-color"), i.translate(0, 0), i.addChangeListener(o$(i)), A(i), ii(), iI(), i4(), i
                }, oj = function (t) {
                    let e = t.options;
                    var i = t.getParentSvg();
                    if (tt(i.parentNode, "contextmenu", null, function (t) {
                            ts(t) || t.preventDefault()
                        }), i = tt(window, "resize", null, function () {
                            sn(), t.hideComponents(!0), iX(), id(), A(t), ov(t)
                        }), t.setResizeHandlerWrapper(i), oq(), e.languageTree) {
                        i = t.getToolbox();
                        let s = t.getFlyout(!0);
                        i ? i.init() : s && (s.init(t), s.show(e.languageTree), "function" == typeof s.scrollToStart && s.scrollToStart())
                    }
                    e.hasTrashcan && t.trashcan.init(), e.zoomOptions && e.zoomOptions.controls && t.zoomControls_.init(), e.moveOptions && e.moveOptions.scrollbars ? (t.scrollbar = new cK(t, !0 === e.moveOptions.scrollbars || !!e.moveOptions.scrollbars.horizontal, !0 === e.moveOptions.scrollbars || !!e.moveOptions.scrollbars.vertical, "blocklyMainWorkspaceScrollbar"), t.scrollbar.resize()) : t.setMetrics({
                        x: .5,
                        y: .5
                    }), e.hasSounds && oQ(e.pathToMedia, t)
                }, oZ = function (t) {
                    let e = C();
                    e && !(ts(t) || e.rendered && !e.isVisible()) && cF.registry.onKeyDown(e, t)
                }, oq = function () {
                    uP || (tt(document, "scroll", null, function () {
                        let t = w();
                        for (let e = 0, i; i = t[e]; e++) i instanceof ch && i.updateInverseScreenCTM()
                    }), tt(document, "keydown", null, oZ), te(document, "touchend", null, J), te(document, "touchcancel", null, J), nV && tt(window, "orientationchange", document, function () {
                        A(C())
                    })), uP = !0
                }, oQ = function (t, e) {
                    function i() {
                        for (; o.length;) {
                            let t = o.pop();
                            t && ti(t)
                        }
                        s.preload()
                    }
                    let s = e.getAudioManager();
                    s.load([t + "click.mp3", t + "click.wav", t + "click.ogg"], "click"), s.load([t + "disconnect.wav", t + "disconnect.mp3", t + "disconnect.ogg"], "disconnect"), s.load([t + "delete.mp3", t + "delete.ogg", t + "delete.wav"], "delete");
                    let o = [];
                    o.push(tt(document, "pointermove", null, i, !0)), o.push(tt(document, "touchstart", null, i, !0))
                }, (o0 = o0 || {}).scope = {}, o0.ASSUME_ES5 = !1, o0.ASSUME_NO_NATIVE_MAP = !1, o0.ASSUME_NO_NATIVE_SET = !1, o0.SIMPLE_FROUND_POLYFILL = !1, o0.ISOLATE_POLYFILLS = !1, o0.FORCE_POLYFILL_PROMISE = !1, o0.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1, o0.defineProperty = o0.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, i) {
                    return t == Array.prototype || t == Object.prototype || (t[e] = i.value), t
                }, o0.getGlobal = function (t) {
                    t = ["object" == typeof globalThis && globalThis, t, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof i.g && i.g];
                    for (var e = 0; e < t.length; ++e) {
                        var s = t[e];
                        if (s && s.Math == Math) return s
                    }
                    throw Error("Cannot find global object")
                }, o0.global = o0.getGlobal(this), o0.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), o0.TRUST_ES6_POLYFILLS = !o0.ISOLATE_POLYFILLS || o0.IS_SYMBOL_NATIVE, o0.polyfills = {}, o0.propertyToPolyfillSymbol = {}, o0.POLYFILL_PREFIX = "$jscp$", o0.polyfill = function (t, e, i, s) {
                    e && (o0.ISOLATE_POLYFILLS ? o0.polyfillIsolated(t, e, i, s) : o0.polyfillUnisolated(t, e, i, s))
                }, o0.polyfillUnisolated = function (t, e, i, s) {
                    for (s = 0, i = o0.global, t = t.split("."); s < t.length - 1; s++) {
                        var o = t[s];
                        if (!(o in i)) return;
                        i = i[o]
                    }(e = e(s = i[t = t[t.length - 1]])) != s && null != e && o0.defineProperty(i, t, {
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }, o0.polyfillIsolated = function (t, e, i, s) {
                    var o = t.split(".");
                    t = 1 === o.length, s = o[0], s = !t && s in o0.polyfills ? o0.polyfills : o0.global;
                    for (var n = 0; n < o.length - 1; n++) {
                        var r = o[n];
                        if (!(r in s)) return;
                        s = s[r]
                    }
                    o = o[o.length - 1], null != (e = e(i = o0.IS_SYMBOL_NATIVE && "es6" === i ? s[o] : null)) && (t ? o0.defineProperty(o0.polyfills, o, {
                        configurable: !0,
                        writable: !0,
                        value: e
                    }) : e !== i && (void 0 === o0.propertyToPolyfillSymbol[o] && (i = 1e9 * Math.random() >>> 0, o0.propertyToPolyfillSymbol[o] = o0.IS_SYMBOL_NATIVE ? o0.global.Symbol(o) : o0.POLYFILL_PREFIX + i + "$" + o), o0.defineProperty(s, o0.propertyToPolyfillSymbol[o], {
                        configurable: !0,
                        writable: !0,
                        value: e
                    })))
                }, o0.polyfill("globalThis", function (t) {
                    return t || o0.global
                }, "es_2020", "es3"), o0.arrayIteratorImpl = function (t) {
                    var e = 0;
                    return function () {
                        return e < t.length ? {
                            done: !1,
                            value: t[e++]
                        } : {
                            done: !0
                        }
                    }
                }, o0.arrayIterator = function (t) {
                    return {
                        next: o0.arrayIteratorImpl(t)
                    }
                }, o0.initSymbol = function () {}, o0.iteratorPrototype = function (t) {
                    return (t = {
                        next: t
                    })[Symbol.iterator] = function () {
                        return this
                    }, t
                }, o0.iteratorFromArray = function (t, e) {
                    t instanceof String && (t += "");
                    var i = 0,
                        s = !1,
                        o = {
                            next: function () {
                                if (!s && i < t.length) {
                                    var o = i++;
                                    return {
                                        value: e(o, t[o]),
                                        done: !1
                                    }
                                }
                                return s = !0, {
                                    done: !0,
                                    value: void 0
                                }
                            }
                        };
                    return o[Symbol.iterator] = function () {
                        return o
                    }, o
                }, o0.polyfill("Array.prototype.values", function (t) {
                    return t || function () {
                        return o0.iteratorFromArray(this, function (t, e) {
                            return e
                        })
                    }
                }, "es8", "es3"), o0.polyfill("Array.prototype.flat", function (t) {
                    return t || function (t) {
                        t = void 0 === t ? 1 : t;
                        var e = [];
                        return Array.prototype.forEach.call(this, function (i) {
                            Array.isArray(i) && 0 < t ? (i = Array.prototype.flat.call(i, t - 1), e.push.apply(e, i)) : e.push(i)
                        }), e
                    }
                }, "es9", "es5"), o0.owns = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, o0.polyfill("Object.entries", function (t) {
                    return t || function (t) {
                        var e, i = [];
                        for (e in t) o0.owns(t, e) && i.push([e, t[e]]);
                        return i
                    }
                }, "es8", "es3"), o0.polyfill("Object.values", function (t) {
                    return t || function (t) {
                        var e, i = [];
                        for (e in t) o0.owns(t, e) && i.push(t[e]);
                        return i
                    }
                }, "es8", "es3");
                var l = Object.create(null),
                    a = Object.create(null),
                    h = "default",
                    c = class {
                        constructor(t) {
                            this.name = t
                        }
                        toString() {
                            return this.name
                        }
                    };
                c.CONNECTION_CHECKER = new c("connectionChecker"), c.CURSOR = new c("cursor"), c.EVENT = new c("event"), c.FIELD = new c("field"), c.INPUT = new c("input"), c.RENDERER = new c("renderer"), c.TOOLBOX = new c("toolbox"), c.THEME = new c("theme"), c.TOOLBOX_ITEM = new c("toolboxItem"), c.FLYOUTS_VERTICAL_TOOLBOX = new c("flyoutsVerticalToolbox"), c.FLYOUTS_HORIZONTAL_TOOLBOX = new c("flyoutsHorizontalToolbox"), c.METRICS_MANAGER = new c("metricsManager"), c.BLOCK_DRAGGER = new c("blockDragger"), c.SERIALIZER = new c("serializer"), c.ICON = new c("icon"), c.PASTER = new c("paster");
                var u = {
                    DEFAULT: h,
                    TEST_ONLY: {
                        typeMap: l
                    }
                };
                u.Type = c, u.getAllItems = E, u.getClass = m, u.getClassFromOptions = T, u.getObject = f, u.hasItem = _, u.register = d, u.unregister = g;
                var d, p, g, b, _, m, f, E, T, k, w, y, $, C, v, I, S, R, D, A, N, O, x, L, M, B, P, F, H, G, U, W, V, z, X, Y, K, J, j, Z, q, Q, tt, te, ti, ts, to, tn, tr, tl, ta, th, tc, tu, td, tp, tg, tb, t_, tm, tf, tE, tT, tk, tw, ty, t$, tC, tv, tI, tS, tR, tD, tA, tN, tO, tx, tL, tM, tB, tP, tF, tH, tG, tU, tW, tV, tz, tX, tY, tK, tJ, tj, tZ, tq, tQ, t0, t1, t2, t3, t5, t6, t9, t8, t4, t7, et, ee, ei, es, eo, en, er, el, ea, eh, ec, eu, ed, ep, eg, eb, e_, em, ef, eE, eT, ek, ew, ey, e$, eC, ev, eI, eS, eR, eD, eA, eN, eO, ex, eL, eM, eB, eP, eF, eH, eG, eU, eW, eV, ez, eX, eY, eK, eJ, ej, eZ, eq, eQ, e0, e1, e2, e3, e5, e6, e9, e8, e4, e7, it, ie, ii, is, io, ir, il, ia, ih, ic, iu, id, ip, ig, ib, i_, im, iE, iT, ik, iw, iy, i$, iC, iv, iI, iS, iR, iD, iA, iN, iO, ix, iL, iM, iB, iP, iF, iH, iG, iU, iW, iV, iz, iX, iY, iK, iJ, ij, iZ, iq, iQ, i0, i1, i2, i3, i5, i6, i9, i8, i4, i7, st, se, si, ss, so, sn, sr, sl, sa, sh, sc, su, sd, sp, sg, sb, s_, sm, sf, sE, sT, sk, sw, sy, s$, sC, sv, sI, sS, sR, sD, sA, sN, sO, sx, sL, sM, sB, sP, sF, sH, sG, sU, sW, sV, sz, sX, sY, sK, sJ, sj, sZ, sq, sQ, s0, s1, s2, s3, s5, s6, s9, s8, s4, s7, ot, oe, oi, os, oo, on, or, ol, oa, oh, oc, ou, od, op, og, ob, o_, om, of , oE, oT, ok, ow, oy, o$, oC, ov, oI, oS, oR, oD, oA, oN, oO, ox, oL, oM, oB, oP, oF, oH, oG, oU, oW, oV, oz, oX, oY, oK, oJ, oj, oZ, oq, oQ, o0, o1, o2, o3 = Object.create(null),
                    o5 = Object.create(null),
                    o6 = null,
                    o9 = [],
                    o8 = {
                        defineBlocksWithJsonArrayInternal: function (t) {
                            r.defineBlocks$$module$build$src$core$common(r.createBlockDefinitionsFromJsonArray$$module$build$src$core$common(t))
                        }
                    },
                    o4 = {
                        TEST_ONLY: o8
                    };
                o4.createBlockDefinitionsFromJsonArray = r.createBlockDefinitionsFromJsonArray$$module$build$src$core$common, o4.defineBlocks = r.defineBlocks$$module$build$src$core$common, o4.defineBlocksWithJsonArray = x, o4.draggingConnections = o9, o4.getAllWorkspaces = w, o4.getBlockTypeCounts = N, o4.getMainWorkspace = C, o4.getParentContainer = R, o4.getSelected = I, o4.getWorkspaceById = k, o4.registerWorkspace = y, o4.setMainWorkspace = v, o4.setParentContainer = D, o4.setSelected = S, o4.svgResize = A, o4.unregisterWorkpace = $;
                var o7 = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    nt = {
                        genUid: () => {
                            let t = o7.length,
                                e = [];
                            for (let i = 0; 20 > i; i++) e[i] = o7.charAt(Math.random() * t);
                            return e.join("")
                        }
                    },
                    ne = 0,
                    ni = {
                        TEST_ONLY: nt
                    };
                ni.genUid = M, ni.getNextUniqueId = L, ns = "", no = !0, nn = 0, r.CREATE$$module$build$src$core$events$utils = "create", r.CREATE$$module$build$src$core$events$utils, r.DELETE$$module$build$src$core$events$utils = "delete", r.DELETE$$module$build$src$core$events$utils, r.CHANGE$$module$build$src$core$events$utils = "change", r.CHANGE$$module$build$src$core$events$utils, nr = "block_field_intermediate_change", r.MOVE$$module$build$src$core$events$utils = "move", r.MOVE$$module$build$src$core$events$utils, nl = "var_create", na = "var_delete", nh = "var_rename", nc = "ui", nu = "drag", nd = "selected", np = "click", ng = "marker_move", nb = "bubble_open", n_ = "trashcan_open", nm = "toolbox_item_select", nf = "theme_change", nE = "viewport_change", nT = "comment_create", nk = "comment_delete", nw = "comment_change", ny = "comment_move", n$ = "finished_loading", nC = [r.CREATE$$module$build$src$core$events$utils, r.MOVE$$module$build$src$core$events$utils, nT, ny], nI = {
                    FIRE_QUEUE: nv = [],
                    fireNow: H,
                    fireInternal: function (t) {
                        if (W()) {
                            if (!nv.length) try {
                                requestAnimationFrame(() => {
                                    setTimeout(H, 0)
                                })
                            } catch (t) {
                                setTimeout(H, 0)
                            }
                            nv.push(t)
                        }
                    },
                    setGroupInternal: function (t) {
                        ns = "boolean" == typeof t ? t ? M() : "" : t
                    }
                }, (nS = {
                    BLOCK_CHANGE: r.CHANGE$$module$build$src$core$events$utils,
                    BLOCK_CREATE: r.CREATE$$module$build$src$core$events$utils,
                    BLOCK_DELETE: r.DELETE$$module$build$src$core$events$utils,
                    BLOCK_DRAG: nu,
                    BLOCK_FIELD_INTERMEDIATE_CHANGE: nr,
                    BLOCK_MOVE: r.MOVE$$module$build$src$core$events$utils,
                    BUBBLE_OPEN: nb,
                    BUMP_EVENTS: nC,
                    CHANGE: r.CHANGE$$module$build$src$core$events$utils,
                    CLICK: np,
                    COMMENT_CHANGE: nw,
                    COMMENT_CREATE: nT,
                    COMMENT_DELETE: nk,
                    COMMENT_MOVE: ny,
                    CREATE: r.CREATE$$module$build$src$core$events$utils,
                    DELETE: r.DELETE$$module$build$src$core$events$utils,
                    FINISHED_LOADING: n$,
                    MARKER_MOVE: ng,
                    MOVE: r.MOVE$$module$build$src$core$events$utils,
                    SELECTED: nd,
                    TEST_ONLY: nI,
                    THEME_CHANGE: nf,
                    TOOLBOX_ITEM_SELECT: nm,
                    TRASHCAN_OPEN: n_,
                    UI: nc,
                    VAR_CREATE: nl,
                    VAR_DELETE: na,
                    VAR_RENAME: nh,
                    VIEWPORT_CHANGE: nE
                }).clearPendingUndo = U, nS.disable = r.disable$$module$build$src$core$events$utils, nS.disableOrphans = Y, nS.enable = r.enable$$module$build$src$core$events$utils, nS.filter = G, nS.fire = F, nS.fromJson = z, nS.get = X, nS.getDescendantIds = V, nS.getGroup = r.getGroup$$module$build$src$core$events$utils, nS.getRecordUndo = P, nS.isEnabled = W, nS.setGroup = r.setGroup$$module$build$src$core$events$utils, nS.setRecordUndo = B;
                var ns, no, nn, nr, nl, na, nh, nc, nu, nd, np, ng, nb, n_, nm, nf, nE, nT, nk, nw, ny, n$, nC, nv, nI, nS, nR, nD = class {
                        constructor() {
                            this.workspaceId = void 0, this.isUiEvent = !1, this.type = "", this.group = r.getGroup$$module$build$src$core$events$utils(), this.recordUndo = P()
                        }
                        toJson() {
                            return {
                                type: this.type,
                                group: this.group
                            }
                        }
                        static fromJson(t, e, i) {
                            return i.isBlank = !1, i.group = t.group || "", i.workspaceId = e.id, i
                        }
                        isNull() {
                            return !1
                        }
                        run(t) {}
                        getEventWorkspace_() {
                            let t;
                            if (this.workspaceId && (t = k(this.workspaceId)), !t) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
                            return t
                        }
                    },
                    nA = class extends nD {
                        constructor(t) {
                            super(), this.recordUndo = !1, this.isUiEvent = !0, this.isBlank = void 0 === t, this.workspaceId = t || ""
                        }
                    },
                    nN = class extends nA {
                        constructor(t, e, i) {
                            null === (e = t ? t.workspace.id : e) && (e = void 0), super(e), this.type = np, this.blockId = t ? t.id : void 0, this.targetType = i
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.targetType) throw Error("The click target type is undefined. Either pass a block to the constructor, or call fromJson");
                            return t.targetType = this.targetType, t.blockId = this.blockId, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new nN)).targetType = t.targetType, e.blockId = t.blockId, e
                        }
                    };
                (n6 = nR || (nR = {})).BLOCK = "block", n6.WORKSPACE = "workspace", n6.ZOOM_CONTROLS = "zoom_controls", d(c.EVENT, np, nN);
                var nO = {};
                nO.Click = nN, nO.ClickTarget = nR;
                var nx = 750,
                    nL = "ontouchstart" in globalThis || !!(globalThis.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!globalThis.navigator || !globalThis.navigator.maxTouchPoints && !globalThis.navigator.msMaxTouchPoints),
                    nM = null,
                    nB = {
                        mousedown: ["pointerdown"],
                        mouseenter: ["pointerenter"],
                        mouseleave: ["pointerleave"],
                        mousemove: ["pointermove"],
                        mouseout: ["pointerout"],
                        mouseover: ["pointerover"],
                        mouseup: ["pointerup", "pointercancel"],
                        touchend: ["pointerup"],
                        touchcancel: ["pointercancel"]
                    },
                    nP = 0,
                    nF = {
                        TOUCH_ENABLED: nL,
                        TOUCH_MAP: nB
                    };
                nF.checkTouchIdentifier = Q, nF.clearTouchIdentifier = j, nF.getTouchIdentifierFromEvent = q, nF.longStart = K, nF.longStop = J, nF.shouldHandleEvent = Z,
                    function (t) {
                        function e(t) {
                            return -1 !== i.indexOf(t.toUpperCase())
                        }
                        n9 = t;
                        let i = n9.toUpperCase();
                        n8 = e("JavaFX"), n4 = e("WebKit"), n7 = e("Gecko") && !n4, rt = e("Android"), t = globalThis.navigator && globalThis.navigator.maxTouchPoints, re = e("iPad") || e("Macintosh") && 0 < t, ri = e("iPhone") && !re, rs = e("Macintosh"), ro = !(re || rt && !e("Mobile") || e("Silk")) && (ri || rt)
                    }(globalThis.navigator && globalThis.navigator.userAgent || "");
                var nH = n9,
                    nG = n8,
                    nU = n7,
                    nW = rt,
                    nV = re,
                    nz = ri,
                    nX = rs,
                    nY = ro,
                    nK = 40,
                    nJ = 125,
                    nj = {};
                nj.bind = te, nj.conditionalBind = tt, nj.getScrollDeltaPixels = tr, nj.isRightButton = to, nj.isTargetInput = ts, nj.mouseToSvg = tn, nj.unbind = ti;
                var nZ = {};
                nZ.removeElem = tl;
                var nq = class {
                    constructor(t) {
                        this.name_ = t
                    }
                    toString() {
                        return this.name_
                    }
                };
                nq.POSITIONABLE = new nq("positionable"), nq.DRAG_TARGET = new nq("drag_target"), nq.DELETE_AREA = new nq("delete_area"), nq.AUTOHIDEABLE = new nq("autohideable");
                var nQ = class {
                    constructor() {
                        this.componentData = new Map, this.capabilityToComponentIds = new Map
                    }
                    addComponent(t, e) {
                        let i = t.component.id;
                        if (!e && this.componentData.has(i)) {
                            var s;
                            throw Error('Plugin "' + i + '" with capabilities "' + (null == (s = this.componentData.get(i)) ? void 0 : s.capabilities) + '" already added.')
                        }
                        for (this.componentData.set(i, t), e = [], s = 0; s < t.capabilities.length; s++) {
                            let o = String(t.capabilities[s]).toLowerCase();
                            if (e.push(o), this.capabilityToComponentIds.has(o)) {
                                let t;
                                null == (t = this.capabilityToComponentIds.get(o)) || t.push(i)
                            } else this.capabilityToComponentIds.set(o, [i])
                        }
                        this.componentData.get(i).capabilities = e
                    }
                    removeComponent(t) {
                        let e = this.componentData.get(t);
                        if (e) {
                            for (let i = 0; i < e.capabilities.length; i++) {
                                let s = String(e.capabilities[i]).toLowerCase();
                                tl(this.capabilityToComponentIds.get(s), t)
                            }
                            this.componentData.delete(t)
                        }
                    }
                    addCapability(t, e) {
                        if (!this.getComponent(t)) throw Error('Cannot add capability, "' + e + '". Plugin "' + t + '" has not been added to the ComponentManager');
                        if (this.hasCapability(t, e)) console.warn('Plugin "' + t + 'already has capability "' + e + '"');
                        else {
                            var i, s;
                            e = `${e}`.toLowerCase(), null == (i = this.componentData.get(t)) || i.capabilities.push(e), null == (s = this.capabilityToComponentIds.get(e)) || s.push(t)
                        }
                    }
                    removeCapability(t, e) {
                        if (!this.getComponent(t)) throw Error('Cannot remove capability, "' + e + '". Plugin "' + t + '" has not been added to the ComponentManager');
                        this.hasCapability(t, e) ? (e = `${e}`.toLowerCase(), tl(this.componentData.get(t).capabilities, e), tl(this.capabilityToComponentIds.get(e), t)) : console.warn('Plugin "' + t + "doesn't have capability \"" + e + '" to remove')
                    }
                    hasCapability(t, e) {
                        return e = `${e}`.toLowerCase(), this.componentData.has(t) && -1 !== this.componentData.get(t).capabilities.indexOf(e)
                    }
                    getComponent(t) {
                        let e;
                        return null == (e = this.componentData.get(t)) ? void 0 : e.component
                    }
                    getComponents(t, e) {
                        if (t = `${t}`.toLowerCase(), !(t = this.capabilityToComponentIds.get(t))) return [];
                        let i = [];
                        if (e) {
                            let e = [];
                            t.forEach(t => {
                                e.push(this.componentData.get(t))
                            }), e.sort(function (t, e) {
                                return t.weight - e.weight
                            }), e.forEach(function (t) {
                                i.push(t.component)
                            })
                        } else t.forEach(t => {
                            i.push(this.componentData.get(t).component)
                        });
                        return i
                    }
                };
                nQ.Capability = nq;
                var n0 = !1,
                    n1 = '\n.blocklySvg {\n  background-color: #fff;\n  outline: none;\n  overflow: hidden;  /* IE overflows by default. */\n  position: absolute;\n  display: block;\n}\n\n.blocklyWidgetDiv {\n  display: none;\n  position: absolute;\n  z-index: 99999;  /* big value for bootstrap3 compatibility */\n}\n\n.injectionDiv {\n  height: 100%;\n  position: relative;\n  overflow: hidden;  /* So blocks in drag surface disappear at edges */\n  touch-action: none;\n}\n\n.blocklyNonSelectable {\n  user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n}\n\n.blocklyBlockCanvas.blocklyCanvasTransitioning,\n.blocklyBubbleCanvas.blocklyCanvasTransitioning {\n  transition: transform .5s;\n}\n\n.blocklyTooltipDiv {\n  background-color: #ffffc7;\n  border: 1px solid #ddc;\n  box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);\n  color: #000;\n  display: none;\n  font: 9pt sans-serif;\n  opacity: .9;\n  padding: 2px;\n  position: absolute;\n  z-index: 100000;  /* big value for bootstrap3 compatibility */\n}\n\n.blocklyDropDownDiv {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  display: none;\n  border: 1px solid;\n  border-color: #dadce0;\n  background-color: #fff;\n  border-radius: 2px;\n  padding: 4px;\n  box-shadow: 0 0 3px 1px rgba(0,0,0,.3);\n}\n\n.blocklyDropDownDiv.blocklyFocused {\n  box-shadow: 0 0 6px 1px rgba(0,0,0,.3);\n}\n\n.blocklyDropDownContent {\n  max-height: 300px;  /* @todo: spec for maximum height. */\n  overflow: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.blocklyDropDownArrow {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  z-index: -1;\n  background-color: inherit;\n  border-color: inherit;\n}\n\n.blocklyDropDownButton {\n  display: inline-block;\n  float: left;\n  padding: 0;\n  margin: 4px;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid;\n  transition: box-shadow .1s;\n  cursor: pointer;\n}\n\n.blocklyArrowTop {\n  border-top: 1px solid;\n  border-left: 1px solid;\n  border-top-left-radius: 4px;\n  border-color: inherit;\n}\n\n.blocklyArrowBottom {\n  border-bottom: 1px solid;\n  border-right: 1px solid;\n  border-bottom-right-radius: 4px;\n  border-color: inherit;\n}\n\n.blocklyResizeSE {\n  cursor: se-resize;\n  fill: #aaa;\n}\n\n.blocklyResizeSW {\n  cursor: sw-resize;\n  fill: #aaa;\n}\n\n.blocklyResizeLine {\n  stroke: #515A5A;\n  stroke-width: 1;\n}\n\n.blocklyHighlightedConnectionPath {\n  fill: none;\n  stroke: #fc3;\n  stroke-width: 4px;\n}\n\n.blocklyPathLight {\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: 1;\n}\n\n.blocklySelected>.blocklyPathLight {\n  display: none;\n}\n\n.blocklyDraggable {\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.blocklyDragging {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n  /* Changes cursor on mouse down. Not effective in Firefox because of\n     https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */\n.blocklyDraggable:active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.blocklyDragging.blocklyDraggingDelete {\n  cursor: url("<<<PATH>>>/handdelete.cur"), auto;\n}\n\n.blocklyDragging>.blocklyPath,\n.blocklyDragging>.blocklyPathLight {\n  fill-opacity: .8;\n  stroke-opacity: .8;\n}\n\n.blocklyDragging>.blocklyPathDark {\n  display: none;\n}\n\n.blocklyDisabled>.blocklyPath {\n  fill-opacity: .5;\n  stroke-opacity: .5;\n}\n\n.blocklyDisabled>.blocklyPathLight,\n.blocklyDisabled>.blocklyPathDark {\n  display: none;\n}\n\n.blocklyInsertionMarker>.blocklyPath,\n.blocklyInsertionMarker>.blocklyPathLight,\n.blocklyInsertionMarker>.blocklyPathDark {\n  fill-opacity: .2;\n  stroke: none;\n}\n\n.blocklyMultilineText {\n  font-family: monospace;\n}\n\n.blocklyNonEditableText>text {\n  pointer-events: none;\n}\n\n.blocklyFlyout {\n  position: absolute;\n  z-index: 20;\n}\n\n.blocklyText text {\n  cursor: default;\n}\n\n/*\n  Don\'t allow users to select text.  It gets annoying when trying to\n  drag a block and selected text moves instead.\n*/\n.blocklySvg text {\n  user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  cursor: inherit;\n}\n\n.blocklyHidden {\n  display: none;\n}\n\n.blocklyFieldDropdown:not(.blocklyHidden) {\n  display: block;\n}\n\n.blocklyIconGroup {\n  cursor: default;\n}\n\n.blocklyIconGroup:not(:hover),\n.blocklyIconGroupReadonly {\n  opacity: .6;\n}\n\n.blocklyIconShape {\n  fill: #00f;\n  stroke: #fff;\n  stroke-width: 1px;\n}\n\n.blocklyIconSymbol {\n  fill: #fff;\n}\n\n.blocklyMinimalBody {\n  margin: 0;\n  padding: 0;\n}\n\n.blocklyHtmlInput {\n  border: none;\n  border-radius: 4px;\n  height: 100%;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n  display: block;\n  box-sizing: border-box;\n}\n\n/* Remove the increase and decrease arrows on the field number editor */\ninput.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,\ninput.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.blocklyMainBackground {\n  stroke-width: 1;\n  stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */\n}\n\n.blocklyMutatorBackground {\n  fill: #fff;\n  stroke: #ddd;\n  stroke-width: 1;\n}\n\n.blocklyFlyoutBackground {\n  fill: #ddd;\n  fill-opacity: .8;\n}\n\n.blocklyMainWorkspaceScrollbar {\n  z-index: 20;\n}\n\n.blocklyFlyoutScrollbar {\n  z-index: 30;\n}\n\n.blocklyScrollbarHorizontal,\n.blocklyScrollbarVertical {\n  position: absolute;\n  outline: none;\n}\n\n.blocklyScrollbarBackground {\n  opacity: 0;\n}\n\n.blocklyScrollbarHandle {\n  fill: #ccc;\n}\n\n.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,\n.blocklyScrollbarHandle:hover {\n  fill: #bbb;\n}\n\n/* Darken flyout scrollbars due to being on a grey background. */\n/* By contrast, workspace scrollbars are on a white background. */\n.blocklyFlyout .blocklyScrollbarHandle {\n  fill: #bbb;\n}\n\n.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,\n.blocklyFlyout .blocklyScrollbarHandle:hover {\n  fill: #aaa;\n}\n\n.blocklyInvalidInput {\n  background: #faa;\n}\n\n.blocklyVerticalMarker {\n  stroke-width: 3px;\n  fill: rgba(255,255,255,.5);\n  pointer-events: none;\n}\n\n.blocklyComputeCanvas {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n\n.blocklyNoPointerEvents {\n  pointer-events: none;\n}\n\n.blocklyContextMenu {\n  border-radius: 4px;\n  max-height: 100%;\n}\n\n.blocklyDropdownMenu {\n  border-radius: 2px;\n  padding: 0 !important;\n}\n\n.blocklyDropdownMenu .blocklyMenuItem {\n  /* 28px on the left for icon or checkbox. */\n  padding-left: 28px;\n}\n\n/* BiDi override for the resting state. */\n.blocklyDropdownMenu .blocklyMenuItemRtl {\n  /* Flip left/right padding for BiDi. */\n  padding-left: 5px;\n  padding-right: 28px;\n}\n\n.blocklyWidgetDiv .blocklyMenu {\n  background: #fff;\n  border: 1px solid transparent;\n  box-shadow: 0 0 3px 1px rgba(0,0,0,.3);\n  font: normal 13px Arial, sans-serif;\n  margin: 0;\n  outline: none;\n  padding: 4px 0;\n  position: absolute;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 100%;\n  z-index: 20000;  /* Arbitrary, but some apps depend on it... */\n}\n\n.blocklyWidgetDiv .blocklyMenu.blocklyFocused {\n  box-shadow: 0 0 6px 1px rgba(0,0,0,.3);\n}\n\n.blocklyDropDownDiv .blocklyMenu {\n  background: inherit;  /* Compatibility with gapi, reset from goog-menu */\n  border: inherit;  /* Compatibility with gapi, reset from goog-menu */\n  font: normal 13px "Helvetica Neue", Helvetica, sans-serif;\n  outline: none;\n  position: relative;  /* Compatibility with gapi, reset from goog-menu */\n  z-index: 20000;  /* Arbitrary, but some apps depend on it... */\n}\n\n/* State: resting. */\n.blocklyMenuItem {\n  border: none;\n  color: #000;\n  cursor: pointer;\n  list-style: none;\n  margin: 0;\n  /* 7em on the right for shortcut. */\n  min-width: 7em;\n  padding: 6px 15px;\n  white-space: nowrap;\n}\n\n/* State: disabled. */\n.blocklyMenuItemDisabled {\n  color: #ccc;\n  cursor: inherit;\n}\n\n/* State: hover. */\n.blocklyMenuItemHighlight {\n  background-color: rgba(0,0,0,.1);\n}\n\n/* State: selected/checked. */\n.blocklyMenuItemCheckbox {\n  height: 16px;\n  position: absolute;\n  width: 16px;\n}\n\n.blocklyMenuItemSelected .blocklyMenuItemCheckbox {\n  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;\n  float: left;\n  margin-left: -24px;\n  position: static;  /* Scroll with the menu. */\n}\n\n.blocklyMenuItemRtl .blocklyMenuItemCheckbox {\n  float: right;\n  margin-right: -24px;\n}\n\n.blocklyBlockDragSurface {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: visible !important;\n  z-index: 80;\n  pointer-events: none;\n}\n',
                    n2 = {};
                n2.inject = th, n2.register = ta;
                var n3 = class {
                        constructor(t, e) {
                            this.x = t, this.y = e
                        }
                        clone() {
                            return new n3(this.x, this.y)
                        }
                        scale(t) {
                            return this.x *= t, this.y *= t, this
                        }
                        translate(t, e) {
                            return this.x += t, this.y += e, this
                        }
                        static equals(t, e) {
                            return t === e || !!t && !!e && t.x === e.x && t.y === e.y
                        }
                        static distance(t, e) {
                            let i = t.x - e.x;
                            return Math.sqrt(i * i + (t = t.y - e.y) * t)
                        }
                        static magnitude(t) {
                            return Math.sqrt(t.x * t.x + t.y * t.y)
                        }
                        static difference(t, e) {
                            return new n3(t.x - e.x, t.y - e.y)
                        }
                        static sum(t, e) {
                            return new n3(t.x + e.x, t.y + e.y)
                        }
                    },
                    n5 = {};
                n5.warn = tc;
                var n6, n9, n8, n4, n7, rt, re, ri, rs, ro, rn, rr = "http://www.w3.org/2000/svg",
                    rl = "http://www.w3.org/1999/xhtml",
                    ra = "http://www.w3.org/1999/xlink";
                (rD = rn || (rn = {}))[rD.ELEMENT_NODE = 1] = "ELEMENT_NODE", rD[rD.TEXT_NODE = 3] = "TEXT_NODE", rD[rD.COMMENT_NODE = 8] = "COMMENT_NODE";
                var rh = null,
                    rc = 0,
                    ru = null,
                    rd = {
                        HTML_NS: rl
                    };
                rd.NodeType = rn, rd.SVG_NS = rr, rd.XLINK_NS = ra, rd.addClass = td, rd.containsNode = function (t, e) {
                    return tc("Blockly.utils.dom.containsNode", "version 10", "version 11", 'Use native "contains" DOM method'), t.contains(e)
                }, rd.createSvgElement = tu, rd.getFastTextWidth = tT, rd.getFastTextWidthWithSizeString = tk, rd.getTextWidth = function (t) {
                    let e;
                    let i = t.textContent + "\n" + t.className.baseVal;
                    if (rh && (e = rh[i])) return e;
                    try {
                        e = t.getComputedTextLength()
                    } catch (e) {
                        return 8 * t.textContent.length
                    }
                    return rh && (rh[i] = e), e
                }, rd.hasClass = function (t, e) {
                    return t.classList.contains(e)
                }, rd.insertAfter = t_, rd.measureFontMetrics = tw, rd.removeClass = tg, rd.removeClasses = tp, rd.removeNode = tb, rd.setCssTransform = tm, rd.startTextWidthCache = tf, rd.stopTextWidthCache = tE;
                var rp = class {
                    constructor(t) {
                        this.tagName = t
                    }
                    toString() {
                        return this.tagName
                    }
                };
                rp.ANIMATE = new rp("animate"), rp.CIRCLE = new rp("circle"), rp.CLIPPATH = new rp("clipPath"), rp.DEFS = new rp("defs"), rp.FECOMPOSITE = new rp("feComposite"), rp.FECOMPONENTTRANSFER = new rp("feComponentTransfer"), rp.FEFLOOD = new rp("feFlood"), rp.FEFUNCA = new rp("feFuncA"), rp.FEGAUSSIANBLUR = new rp("feGaussianBlur"), rp.FEPOINTLIGHT = new rp("fePointLight"), rp.FESPECULARLIGHTING = new rp("feSpecularLighting"), rp.FILTER = new rp("filter"), rp.FOREIGNOBJECT = new rp("foreignObject"), rp.G = new rp("g"), rp.IMAGE = new rp("image"), rp.LINE = new rp("line"), rp.PATH = new rp("path"), rp.PATTERN = new rp("pattern"), rp.POLYGON = new rp("polygon"), rp.RECT = new rp("rect"), rp.SVG = new rp("svg"), rp.TEXT = new rp("text"), rp.TSPAN = new rp("tspan");
                var rg = class {
                        constructor(t, e, i, s) {
                            this.top = t, this.bottom = e, this.left = i, this.right = s
                        }
                        getHeight() {
                            return this.bottom - this.top
                        }
                        getWidth() {
                            return this.right - this.left
                        }
                        contains(t, e) {
                            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
                        }
                        intersects(t) {
                            return !(this.left > t.right || this.right < t.left || this.top > t.bottom || this.bottom < t.top)
                        }
                    },
                    rb = class {
                        constructor(t, e) {
                            this.width = t, this.height = e
                        }
                        static equals(t, e) {
                            return t === e || !!t && !!e && t.width === e.width && t.height === e.height
                        }
                    },
                    r_ = {
                        getSizeInternal: function (t) {
                            if ("none" !== tC(t, "display")) return t$(t);
                            let e = t.style,
                                i = e.display,
                                s = e.visibility,
                                o = e.position;
                            e.visibility = "hidden", e.position = "absolute", e.display = "inline";
                            let n = t.offsetWidth;
                            return t = t.offsetHeight, e.display = i, e.position = o, e.visibility = s, new rb(n, t)
                        }
                    },
                    rm = {
                        TEST_ONLY: r_
                    };
                rm.getBorderBox = tS, rm.getComputedStyle = tC, rm.getContainerOffsetToScrollInto = tD, rm.getPageOffset = tv, rm.getSize = ty, rm.getViewportPageOffset = tI, rm.scrollIntoContainerView = tR;
                var rf = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/,
                    rE = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/,
                    rT = {
                        TEST_ONLY: {
                            XY_REGEX: rf,
                            XY_STYLE_REGEX: rE
                        }
                    };
                rT.getDocumentScroll = tx, rT.getInjectionDivXY = tN, rT.getRelativeXY = tA, rT.getViewportBBox = tO, rT.screenToWsCoordinates = function (t, e) {
                    var i = e.x;
                    e = e.y;
                    let s = t.getInjectionDiv().getBoundingClientRect();
                    return i = new n3(i - s.left, e - s.top), e = t.getOriginOffsetInPixels(), n3.difference(i, e).scale(1 / t.scale)
                }, rT.wsToScreenCoordinates = function (t, e) {
                    var i = e.scale(t.scale);
                    e = i.x, i = i.y;
                    let s = t.getInjectionDiv().getBoundingClientRect();
                    return t = t.getOriginOffsetInPixels(), new n3(e + s.left + t.x, i + s.top + t.y)
                };
                var rk = class {
                    constructor(t, e, i, s, o) {
                        this.workspace = t, this.horizontal = e, this.oldHostMetrics = null, this.ratio = 1, this.origin = new n3(0, 0), this.startDragHandle = this.handlePosition = this.handleLength = this.scrollbarLength = this.startDragMouse = 0, this.containerVisible = this.isHandleVisible = !0, this.position = new n3(0, 0), this.onMouseMoveWrapper_ = this.onMouseUpWrapper_ = null, this.pair = i || !1, this.margin = void 0 !== o ? o : rk.DEFAULT_SCROLLBAR_MARGIN, t = "blocklyScrollbar" + (this.horizontal ? "Horizontal" : "Vertical"), s && (t += " " + s), this.outerSvg = tu(rp.SVG, {
                            class: t
                        }), s = tu(rp.G, {}, this.outerSvg), this.svgBackground = tu(rp.RECT, {
                            class: "blocklyScrollbarBackground"
                        }, s), t = Math.floor((rk.scrollbarThickness - 5) / 2), this.svgHandle = tu(rp.RECT, {
                            class: "blocklyScrollbarHandle",
                            rx: t,
                            ry: t
                        }, s), this.workspace.getThemeManager().subscribe(this.svgHandle, "scrollbarColour", "fill"), this.workspace.getThemeManager().subscribe(this.svgHandle, "scrollbarOpacity", "fill-opacity"), t_(this.outerSvg, this.workspace.getParentSvg()), this.setInitialThickness(), e ? (this.lengthAttribute_ = "width", this.positionAttribute_ = "x") : (this.lengthAttribute_ = "height", this.positionAttribute_ = "y"), this.onMouseDownBarWrapper_ = tt(this.svgBackground, "pointerdown", this, this.onMouseDownBar), this.onMouseDownHandleWrapper_ = tt(this.svgHandle, "pointerdown", this, this.onMouseDownHandle)
                    }
                    setInitialThickness() {
                        let t = rk.scrollbarThickness;
                        this.horizontal ? (this.svgBackground.setAttribute("height", String(t)), this.outerSvg.setAttribute("height", String(t)), this.svgHandle.setAttribute("height", String(t - 5)), this.svgHandle.setAttribute("y", "2.5")) : (this.svgBackground.setAttribute("width", String(t)), this.outerSvg.setAttribute("width", String(t)), this.svgHandle.setAttribute("width", String(t - 5)), this.svgHandle.setAttribute("x", "2.5"))
                    }
                    dispose() {
                        this.cleanUp(), ti(this.onMouseDownBarWrapper_), ti(this.onMouseDownHandleWrapper_), tb(this.outerSvg), this.workspace.getThemeManager().unsubscribe(this.svgHandle)
                    }
                    constrainHandleLength(t) {
                        return t = 0 >= t || isNaN(t) ? 0 : Math.min(t, this.scrollbarLength)
                    }
                    setHandleLength(t) {
                        this.handleLength = t, this.svgHandle.setAttribute(this.lengthAttribute_, String(this.handleLength))
                    }
                    constrainHandlePosition(t) {
                        return t = 0 >= t || isNaN(t) ? 0 : Math.min(t, this.scrollbarLength - this.handleLength)
                    }
                    setHandlePosition(t) {
                        this.handlePosition = t, this.svgHandle.setAttribute(this.positionAttribute_, String(this.handlePosition))
                    }
                    setScrollbarLength(t) {
                        this.scrollbarLength = t, this.outerSvg.setAttribute(this.lengthAttribute_, String(this.scrollbarLength)), this.svgBackground.setAttribute(this.lengthAttribute_, String(this.scrollbarLength))
                    }
                    setPosition(t, e) {
                        this.position.x = t, this.position.y = e, tm(this.outerSvg, "translate(" + (this.position.x + this.origin.x) + "px," + (this.position.y + this.origin.y) + "px)")
                    }
                    resize(t) {
                        (t || (t = this.workspace.getMetrics())) && (this.oldHostMetrics && rk.metricsAreEquivalent(t, this.oldHostMetrics) || (this.horizontal ? this.resizeHorizontal(t) : this.resizeVertical(t), this.oldHostMetrics = t, this.updateMetrics()))
                    }
                    requiresViewResize(t) {
                        return !this.oldHostMetrics || this.oldHostMetrics.viewWidth !== t.viewWidth || this.oldHostMetrics.viewHeight !== t.viewHeight || this.oldHostMetrics.absoluteLeft !== t.absoluteLeft || this.oldHostMetrics.absoluteTop !== t.absoluteTop
                    }
                    resizeHorizontal(t) {
                        this.requiresViewResize(t) ? this.resizeViewHorizontal(t) : this.resizeContentHorizontal(t)
                    }
                    resizeViewHorizontal(t) {
                        var e = t.viewWidth - 2 * this.margin;
                        this.pair && (e -= rk.scrollbarThickness), this.setScrollbarLength(Math.max(0, e)), e = t.absoluteLeft + this.margin, this.pair && this.workspace.RTL && (e += rk.scrollbarThickness), this.setPosition(e, t.absoluteTop + t.viewHeight - rk.scrollbarThickness - this.margin), this.resizeContentHorizontal(t)
                    }
                    resizeContentHorizontal(t) {
                        if (t.viewWidth >= t.scrollWidth) this.setHandleLength(this.scrollbarLength), this.setHandlePosition(0), this.pair || this.setVisible(!1);
                        else {
                            this.pair || this.setVisible(!0);
                            var e = this.scrollbarLength * t.viewWidth / t.scrollWidth;
                            e = this.constrainHandleLength(e), this.setHandleLength(e), e = t.scrollWidth - t.viewWidth;
                            var i = this.scrollbarLength - this.handleLength;
                            t = (t.viewLeft - t.scrollLeft) / e * i, t = this.constrainHandlePosition(t), this.setHandlePosition(t), this.ratio = i / e
                        }
                    }
                    resizeVertical(t) {
                        this.requiresViewResize(t) ? this.resizeViewVertical(t) : this.resizeContentVertical(t)
                    }
                    resizeViewVertical(t) {
                        let e = t.viewHeight - 2 * this.margin;
                        this.pair && (e -= rk.scrollbarThickness), this.setScrollbarLength(Math.max(0, e)), this.setPosition(this.workspace.RTL ? t.absoluteLeft + this.margin : t.absoluteLeft + t.viewWidth - rk.scrollbarThickness - this.margin, t.absoluteTop + this.margin), this.resizeContentVertical(t)
                    }
                    resizeContentVertical(t) {
                        if (t.viewHeight >= t.scrollHeight) this.setHandleLength(this.scrollbarLength), this.setHandlePosition(0), this.pair || this.setVisible(!1);
                        else {
                            this.pair || this.setVisible(!0);
                            var e = this.scrollbarLength * t.viewHeight / t.scrollHeight;
                            e = this.constrainHandleLength(e), this.setHandleLength(e), e = t.scrollHeight - t.viewHeight;
                            var i = this.scrollbarLength - this.handleLength;
                            t = (t.viewTop - t.scrollTop) / e * i, t = this.constrainHandlePosition(t), this.setHandlePosition(t), this.ratio = i / e
                        }
                    }
                    isVisible() {
                        return this.isHandleVisible
                    }
                    setContainerVisible(t) {
                        let e = t !== this.containerVisible;
                        this.containerVisible = t, e && this.updateDisplay_()
                    }
                    setVisible(t) {
                        if (this.pair) throw Error("Unable to toggle visibility of paired scrollbars.");
                        this.setVisibleInternal(t)
                    }
                    setVisibleInternal(t) {
                        let e = t !== this.isVisible();
                        this.isHandleVisible = t, e && this.updateDisplay_()
                    }
                    updateDisplay_() {
                        this.containerVisible && this.isVisible() ? this.outerSvg.setAttribute("display", "block") : this.outerSvg.setAttribute("display", "none")
                    }
                    onMouseDownBar(t) {
                        if (this.workspace.markFocused(), j(), this.cleanUp(), to(t)) t.stopPropagation();
                        else {
                            var e = tn(t, this.workspace.getParentSvg(), this.workspace.getInverseScreenCTM());
                            e = this.horizontal ? e.x : e.y;
                            var i = tN(this.svgHandle);
                            i = this.horizontal ? i.x : i.y;
                            var s = this.handlePosition,
                                o = .95 * this.handleLength;
                            e <= i ? s -= o : e >= i + this.handleLength && (s += o), this.setHandlePosition(this.constrainHandlePosition(s)), this.updateMetrics(), t.stopPropagation(), t.preventDefault()
                        }
                    }
                    onMouseDownHandle(t) {
                        this.workspace.markFocused(), this.cleanUp(), to(t) ? t.stopPropagation() : (this.startDragHandle = this.handlePosition, this.startDragMouse = this.horizontal ? t.clientX : t.clientY, this.onMouseUpWrapper_ = tt(document, "pointerup", this, this.onMouseUpHandle), this.onMouseMoveWrapper_ = tt(document, "pointermove", this, this.onMouseMoveHandle), t.stopPropagation(), t.preventDefault())
                    }
                    onMouseMoveHandle(t) {
                        this.setHandlePosition(this.constrainHandlePosition(this.startDragHandle + ((this.horizontal ? t.clientX : t.clientY) - this.startDragMouse))), this.updateMetrics()
                    }
                    onMouseUpHandle() {
                        j(), this.cleanUp()
                    }
                    cleanUp() {
                        this.workspace.hideChaff(!0), this.onMouseUpWrapper_ && (ti(this.onMouseUpWrapper_), this.onMouseUpWrapper_ = null), this.onMouseMoveWrapper_ && (ti(this.onMouseMoveWrapper_), this.onMouseMoveWrapper_ = null)
                    }
                    getRatio_() {
                        let t = this.handlePosition / (this.scrollbarLength - this.handleLength);
                        return isNaN(t) && (t = 0), t
                    }
                    updateMetrics() {
                        let t = this.getRatio_();
                        this.horizontal ? this.workspace.setMetrics({
                            x: t
                        }) : this.workspace.setMetrics({
                            y: t
                        })
                    }
                    set(t, e) {
                        this.setHandlePosition(this.constrainHandlePosition(t * this.ratio)), (e || void 0 === e) && this.updateMetrics()
                    }
                    setOrigin(t, e) {
                        this.origin = new n3(t, e)
                    }
                    static metricsAreEquivalent(t, e) {
                        return t.viewWidth === e.viewWidth && t.viewHeight === e.viewHeight && t.viewLeft === e.viewLeft && t.viewTop === e.viewTop && t.absoluteTop === e.absoluteTop && t.absoluteLeft === e.absoluteLeft && t.scrollWidth === e.scrollWidth && t.scrollHeight === e.scrollHeight && t.scrollLeft === e.scrollLeft && t.scrollTop === e.scrollTop
                    }
                };
                rk.scrollbarThickness = nL ? 25 : 15, rk.DEFAULT_SCROLLBAR_MARGIN = .5;
                var rw = {
                        parseFromString: function () {
                            throw Error("DOMParser was not found in the global scope and was not properly injected using injectDependencies")
                        }
                    },
                    ry = {
                        serializeToString: function () {
                            throw Error("XMLSerializer was not foundin the global scope and was not properly injected using injectDependencies")
                        }
                    },
                    {
                        document: r$,
                        DOMParser: rC,
                        XMLSerializer: rv
                    } = globalThis;
                rC && (rw = new rC), rv && (ry = new rv);
                var rI = "https://developers.google.com/blockly/xml",
                    rS = /[\x00-\x09\x0B\x0C\x0E-\x1F]/g,
                    rR = {
                        NAME_SPACE: rI
                    };
                rR.createElement = r.createElement$$module$build$src$core$utils$xml, rR.createTextNode = r.createTextNode$$module$build$src$core$utils$xml, rR.domToText = tL, rR.injectDependencies = function (t) {
                    ({
                        document: r$ = r$,
                        DOMParser: rC = rC,
                        XMLSerializer: rv = rv
                    } = t), rw = new rC, ry = new rv
                }, rR.textToDom = r.textToDom$$module$build$src$core$utils$xml;
                var rD, rA, rN = "categoryToolbox",
                    rO = "flyoutToolbox";
                (ly = rA || (rA = {}))[ly.TOP = 0] = "TOP", ly[ly.BOTTOM = 1] = "BOTTOM", ly[ly.LEFT = 2] = "LEFT", ly[ly.RIGHT = 3] = "RIGHT";
                var rx = {
                        hasCategoriesInternal: function (t) {
                            if (!t) return !1;
                            let e = t.kind;
                            return e ? e === rN : !!t.contents.filter(function (t) {
                                return "CATEGORY" === t.kind.toUpperCase()
                            }).length
                        }
                    },
                    rL = {};
                rL.Position = rA, rL.TEST_ONLY = rx, rL.convertFlyoutDefToJsonArray = tF, rL.convertToolboxDefToJson = tB, rL.hasCategories = tH, rL.isCategoryCollapsible = tG, rL.parseToolboxTree = tz, (l$ = lR || (lR = {}))[l$.TOP = 0] = "TOP", l$[l$.BOTTOM = 1] = "BOTTOM", (lC = lD || (lD = {}))[lC.LEFT = 0] = "LEFT", lC[lC.RIGHT = 1] = "RIGHT", (lv = lA || (lA = {}))[lv.UP = 0] = "UP", lv[lv.DOWN = 1] = "DOWN";
                var rM = {};
                rM.bumpDirection = lA, rM.bumpPositionRect = tK, rM.getCornerOppositeToolbox = tY, rM.getStartPositionRect = tX, rM.horizontalPosition = lD, rM.verticalPosition = lR;
                var rB = {
                        width: 96,
                        height: 124,
                        url: "sprites.png"
                    },
                    rP = class {
                        constructor(t) {
                            this.workspace = t, this.id = "zoomControls", this.boundEvents = [], this.zoomResetGroup = this.zoomOutGroup = this.zoomInGroup = null, this.HEIGHT = this.WIDTH = 32, this.SMALL_SPACING = 2, this.LARGE_SPACING = 11, this.MARGIN_HORIZONTAL = this.MARGIN_VERTICAL = 20, this.svgGroup = null, this.top = this.left = 0, this.initialized = !1
                        }
                        createDom() {
                            this.svgGroup = tu(rp.G, {});
                            let t = String(Math.random()).substring(2);
                            return this.createZoomOutSvg(t), this.createZoomInSvg(t), this.workspace.isMovable() && this.createZoomResetSvg(t), this.svgGroup
                        }
                        init() {
                            this.workspace.getComponentManager().addComponent({
                                component: this,
                                weight: 2,
                                capabilities: [nQ.Capability.POSITIONABLE]
                            }), this.initialized = !0
                        }
                        dispose() {
                            for (let t of (this.workspace.getComponentManager().removeComponent("zoomControls"), this.svgGroup && tb(this.svgGroup), this.boundEvents)) ti(t);
                            this.boundEvents.length = 0
                        }
                        getBoundingRectangle() {
                            let t = this.SMALL_SPACING + 2 * this.HEIGHT;
                            return this.zoomResetGroup && (t += this.LARGE_SPACING + this.HEIGHT), new rg(this.top, this.top + t, this.left, this.left + this.WIDTH)
                        }
                        position(t, e) {
                            if (this.initialized) {
                                var i, s = tY(this.workspace, t),
                                    o = this.SMALL_SPACING + 2 * this.HEIGHT;
                                if (this.zoomResetGroup && (o += this.LARGE_SPACING + this.HEIGHT), t = tX(s, new rb(this.WIDTH, o), this.MARGIN_HORIZONTAL, this.MARGIN_VERTICAL, t, this.workspace), s = s.vertical, e = tK(t, this.MARGIN_VERTICAL, s === lR.TOP ? lA.DOWN : lA.UP, e), s === lR.TOP) {
                                    var n, r = this.SMALL_SPACING + this.HEIGHT;
                                    null == (n = this.zoomInGroup) || n.setAttribute("transform", "translate(0, " + r + ")"), this.zoomResetGroup && this.zoomResetGroup.setAttribute("transform", "translate(0, " + (r + this.LARGE_SPACING + this.HEIGHT) + ")")
                                } else {
                                    let t;
                                    n = this.zoomResetGroup ? this.LARGE_SPACING + this.HEIGHT : 0, null == (t = this.zoomInGroup) || t.setAttribute("transform", "translate(0, " + n + ")"), n = n + this.SMALL_SPACING + this.HEIGHT, null == (r = this.zoomOutGroup) || r.setAttribute("transform", "translate(0, " + n + ")")
                                }
                                this.top = e.top, this.left = e.left, null == (i = this.svgGroup) || i.setAttribute("transform", "translate(" + this.left + "," + this.top + ")")
                            }
                        }
                        createZoomOutSvg(t) {
                            this.zoomOutGroup = tu(rp.G, {
                                class: "blocklyZoom blocklyZoomOut"
                            }, this.svgGroup);
                            let e = tu(rp.CLIPPATH, {
                                id: "blocklyZoomoutClipPath" + t
                            }, this.zoomOutGroup);
                            tu(rp.RECT, {
                                width: 32,
                                height: 32
                            }, e), tu(rp.IMAGE, {
                                width: rB.width,
                                height: rB.height,
                                x: -64,
                                y: -92,
                                "clip-path": "url(#blocklyZoomoutClipPath" + t + ")"
                            }, this.zoomOutGroup).setAttributeNS(ra, "xlink:href", this.workspace.options.pathToMedia + rB.url), this.boundEvents.push(tt(this.zoomOutGroup, "pointerdown", null, this.zoom.bind(this, -1)))
                        }
                        createZoomInSvg(t) {
                            this.zoomInGroup = tu(rp.G, {
                                class: "blocklyZoom blocklyZoomIn"
                            }, this.svgGroup);
                            let e = tu(rp.CLIPPATH, {
                                id: "blocklyZoominClipPath" + t
                            }, this.zoomInGroup);
                            tu(rp.RECT, {
                                width: 32,
                                height: 32
                            }, e), tu(rp.IMAGE, {
                                width: rB.width,
                                height: rB.height,
                                x: -32,
                                y: -92,
                                "clip-path": "url(#blocklyZoominClipPath" + t + ")"
                            }, this.zoomInGroup).setAttributeNS(ra, "xlink:href", this.workspace.options.pathToMedia + rB.url), this.boundEvents.push(tt(this.zoomInGroup, "pointerdown", null, this.zoom.bind(this, 1)))
                        }
                        zoom(t, e) {
                            this.workspace.markFocused(), this.workspace.zoomCenter(t), this.fireZoomEvent(), j(), e.stopPropagation(), e.preventDefault()
                        }
                        createZoomResetSvg(t) {
                            this.zoomResetGroup = tu(rp.G, {
                                class: "blocklyZoom blocklyZoomReset"
                            }, this.svgGroup);
                            let e = tu(rp.CLIPPATH, {
                                id: "blocklyZoomresetClipPath" + t
                            }, this.zoomResetGroup);
                            tu(rp.RECT, {
                                width: 32,
                                height: 32
                            }, e), tu(rp.IMAGE, {
                                width: rB.width,
                                height: rB.height,
                                y: -92,
                                "clip-path": "url(#blocklyZoomresetClipPath" + t + ")"
                            }, this.zoomResetGroup).setAttributeNS(ra, "xlink:href", this.workspace.options.pathToMedia + rB.url), this.boundEvents.push(tt(this.zoomResetGroup, "pointerdown", null, this.resetZoom.bind(this)))
                        }
                        resetZoom(t) {
                            this.workspace.markFocused();
                            let e = Math.log(this.workspace.options.zoomOptions.startScale / this.workspace.scale) / Math.log(this.workspace.options.zoomOptions.scaleSpeed);
                            this.workspace.beginCanvasTransition(), this.workspace.zoomCenter(e), this.workspace.scrollCenter(), setTimeout(this.workspace.endCanvasTransition.bind(this.workspace), 500), this.fireZoomEvent(), j(), t.stopPropagation(), t.preventDefault()
                        }
                        fireZoomEvent() {
                            let t = new(X(np))(null, this.workspace.id, "zoom_controls");
                            F(t)
                        }
                    };
                ta("\n.blocklyZoom>image, .blocklyZoom>svg>image {\n  opacity: .4;\n}\n\n.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {\n  opacity: .6;\n}\n\n.blocklyZoom>image:active, .blocklyZoom>svg>image:active {\n  opacity: .8;\n}\n");
                var rF = class {
                    constructor(t) {
                        this.name = t
                    }
                    toString() {
                        return this.name
                    }
                    equals(t) {
                        return this.name === t.toString()
                    }
                };
                rF.MUTATOR = new rF("mutator"), rF.WARNING = new rF("warning"), rF.COMMENT = new rF("comment"), (lI = r.inputTypes$$module$build$src$core$inputs$input_types || (r.inputTypes$$module$build$src$core$inputs$input_types = {}))[lI.VALUE = 1] = "VALUE", lI[lI.STATEMENT = 3] = "STATEMENT", lI[lI.DUMMY = 5] = "DUMMY", lI[lI.CUSTOM = 6] = "CUSTOM", lI[lI.END_ROW = 7] = "END_ROW", r.inputTypes$$module$build$src$core$inputs$input_types;
                var rH = function (t, e) {
                        window.alert(t), e && e()
                    },
                    rG = function (t, e) {
                        e(window.confirm(t))
                    },
                    rU = function (t, e, i) {
                        i(window.prompt(t, e))
                    },
                    rW = {
                        confirmInternal: function (t, e) {
                            rG(t, e)
                        }
                    },
                    rV = {
                        TEST_ONLY: rW
                    };
                rV.alert = tJ, rV.confirm = tj, rV.prompt = tZ, rV.setAlert = function (t) {
                    rH = t
                }, rV.setConfirm = function (t) {
                    rG = t
                }, rV.setPrompt = function (t) {
                    rU = t
                }, r.Msg$$module$build$src$core$msg = Object.create(null), lN = function (t) {
                    Object.keys(t).forEach(function (e) {
                        r.Msg$$module$build$src$core$msg[e] = t[e]
                    })
                }, lO = {
                    Msg: r.Msg$$module$build$src$core$msg,
                    setLocale: lN
                };
                var rz = {};
                rz.isLegacyProcedureCallBlock = t0, rz.isLegacyProcedureDefBlock = tQ;
                var rX = class extends nD {
                        constructor(t) {
                            super(), this.isBlank = void 0 === t, t && (this.varId = t.getId(), this.workspaceId = t.workspace.id)
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
                            return t.varId = this.varId, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new rX)).varId = t.varId, e
                        }
                    },
                    rY = class extends rX {
                        constructor(t) {
                            super(t), this.type = nl, t && (this.varType = t.type, this.varName = t.name)
                        }
                        toJson() {
                            let t = super.toJson();
                            if (void 0 === this.varType) throw Error("The var type is undefined. Either pass a variable to the constructor, or call fromJson");
                            if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
                            return t.varType = this.varType, t.varName = this.varName, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new rY)).varType = t.varType, e.varName = t.varName, e
                        }
                        run(t) {
                            let e = this.getEventWorkspace_();
                            if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
                            if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
                            t ? e.createVariable(this.varName, this.varType, this.varId) : e.deleteVariableById(this.varId)
                        }
                    };
                d(c.EVENT, nl, rY);
                var rK = class {
                        constructor(t, e, i, s) {
                            this.workspace = t, this.name = e, this.type = i || "", this.id_ = s || M()
                        }
                        getId() {
                            return this.id_
                        }
                        static compareByName(t, e) {
                            return t.name.localeCompare(e.name, void 0, {
                                sensitivity: "base"
                            })
                        }
                    },
                    rJ = "VARIABLE",
                    rj = "ijkmnopqrstuvwxyzabcdefgh",
                    rZ = {
                        generateUniqueNameInternal: function (t) {
                            return t5(rj.charAt(0), t.getAllVariableNames())
                        }
                    },
                    rq = {
                        CATEGORY_NAME: rJ,
                        TEST_ONLY: rZ,
                        VAR_LETTER_OPTIONS: rj
                    };
                rq.allDeveloperVariables = r.allDeveloperVariables$$module$build$src$core$variables, rq.allUsedVarModels = r.allUsedVarModels$$module$build$src$core$variables, rq.createVariableButtonHandler = t6, rq.flyoutCategory = t1, rq.flyoutCategoryBlocks = t2, rq.generateUniqueName = t3, rq.generateUniqueNameFromOptions = t5, rq.generateVariableFieldDom = ei, rq.getAddedVariables = eo, rq.getOrCreateVariablePackage = r.getOrCreateVariablePackage$$module$build$src$core$variables, rq.getVariable = r.getVariable$$module$build$src$core$variables, rq.nameUsedWithAnyType = t4, rq.nameUsedWithConflictingParam = t7, rq.promptName = t9, rq.renameVariable = r.renameVariable$$module$build$src$core$variables;
                var rQ = class {
                        constructor(t, e, i, s, o) {
                            this.workspace = t, this.editable = this.movable = this.deletable = !0, this.disposed_ = !1, this.isComment = !0, this.id = o && !t.getCommentById(o) ? o : M(), t.addTopComment(this), this.xy_ = new n3(0, 0), this.height_ = i, this.width_ = s, this.RTL = t.RTL, this.content_ = e, rQ.fireCreateEvent(this)
                        }
                        dispose() {
                            this.disposed_ || (W() && F(new(X(nk))(this)), this.workspace.removeTopComment(this), this.disposed_ = !0)
                        }
                        getHeight() {
                            return this.height_
                        }
                        setHeight(t) {
                            this.height_ = t
                        }
                        getWidth() {
                            return this.width_
                        }
                        setWidth(t) {
                            this.width_ = t
                        }
                        getRelativeToSurfaceXY() {
                            return new n3(this.xy_.x, this.xy_.y)
                        }
                        moveBy(t, e) {
                            let i = new(X(ny))(this);
                            this.xy_.translate(t, e), i.recordNew(), F(i)
                        }
                        isDeletable() {
                            return this.deletable && !(this.workspace && this.workspace.options.readOnly)
                        }
                        setDeletable(t) {
                            this.deletable = t
                        }
                        isMovable() {
                            return this.movable && !(this.workspace && this.workspace.options.readOnly)
                        }
                        setMovable(t) {
                            this.movable = t
                        }
                        isEditable() {
                            return this.editable && !(this.workspace && this.workspace.options.readOnly)
                        }
                        setEditable(t) {
                            this.editable = t
                        }
                        getContent() {
                            return this.content_
                        }
                        setContent(t) {
                            this.content_ !== t && (F(new(X(nw))(this, this.content_, t)), this.content_ = t)
                        }
                        toXmlWithXY(t) {
                            return (t = this.toXml(t)).setAttribute("x", String(Math.round(this.xy_.x))), t.setAttribute("y", String(Math.round(this.xy_.y))), t.setAttribute("h", String(this.height_)), t.setAttribute("w", String(this.width_)), t
                        }
                        toXml(t) {
                            let e = r.createElement$$module$build$src$core$utils$xml("comment");
                            return t || (e.id = this.id), e.textContent = this.getContent(), e
                        }
                        static fireCreateEvent(t) {
                            if (W()) {
                                let e = r.getGroup$$module$build$src$core$events$utils();
                                e || r.setGroup$$module$build$src$core$events$utils(!0);
                                try {
                                    F(new(X(nT))(t))
                                } finally {
                                    r.setGroup$$module$build$src$core$events$utils(e)
                                }
                            }
                        }
                        static fromXml(t, e) {
                            var i = rQ.parseAttributes(t);
                            return e = new rQ(e, i.content, i.h, i.w, i.id), i = t.getAttribute("x"), t = t.getAttribute("y"), i = i ? parseInt(i, 10) : NaN, t = t ? parseInt(t, 10) : NaN, isNaN(i) || isNaN(t) || e.moveBy(i, t), rQ.fireCreateEvent(e), e
                        }
                        static parseAttributes(t) {
                            let e;
                            let i = t.getAttribute("h"),
                                s = t.getAttribute("w"),
                                o = t.getAttribute("x"),
                                n = t.getAttribute("y"),
                                r = t.getAttribute("id");
                            if (!r) throw Error("No ID present in XML comment definition.");
                            return {
                                id: r,
                                h: i ? parseInt(i) : 100,
                                w: s ? parseInt(s) : 100,
                                x: o ? parseInt(o) : NaN,
                                y: n ? parseInt(n) : NaN,
                                content: null != (e = t.textContent) ? e : ""
                            }
                        }
                    },
                    r0 = class extends nA {
                        constructor(t, e, i) {
                            super(i), this.type = nd, this.oldElementId = null != t ? t : void 0, this.newElementId = null != e ? e : void 0
                        }
                        toJson() {
                            let t = super.toJson();
                            return t.oldElementId = this.oldElementId, t.newElementId = this.newElementId, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new r0)).oldElementId = t.oldElementId, e.newElementId = t.newElementId, e
                        }
                    };
                d(c.EVENT, nd, r0);
                var r1 = {};
                r1.register = en, r1.unregister = function (t) {
                    g(c.PASTER, t)
                };
                var r2 = class {
                    paste(t, e, i) {
                        let s = t.commentState;
                        if (i) s.setAttribute("x", `${i.x}`), s.setAttribute("y", `${i.y}`);
                        else {
                            var o;
                            let t;
                            i = parseInt(null != (o = s.getAttribute("x")) ? o : "0") + 50, o = parseInt(null != (t = s.getAttribute("y")) ? t : "0") + 50, s.setAttribute("x", `${i}`), s.setAttribute("y", `${o}`)
                        }
                        return r3.fromXmlRendered(t.commentState, e)
                    }
                };
                r2.TYPE = "workspace-comment", en(r2.TYPE, new r2);
                var r3 = class extends rQ {
                    constructor(t, e, i, s, o) {
                        super(t, e, i, s, o), this.onMouseMoveWrapper = this.onMouseUpWrapper = null, this.eventsInit = !1, this.deleteIconBorder = this.deleteGroup = this.resizeGroup = this.foreignObject = this.svgHandleTarget = this.svgRectTarget = this.textarea = null, this.rendered = this.autoLayout = this.focused = !1, this.svgGroup = tu(rp.G, {
                            class: "blocklyComment"
                        }), this.workspace = t, this.svgRect_ = tu(rp.RECT, {
                            class: "blocklyCommentRect",
                            x: 0,
                            y: 0,
                            rx: 3,
                            ry: 3
                        }), this.svgGroup.appendChild(this.svgRect_), this.render()
                    }
                    dispose() {
                        this.disposed_ || (I() === this && (this.unselect(), this.workspace.cancelCurrentGesture()), W() && F(new(X(nk))(this)), tb(this.svgGroup), r.disable$$module$build$src$core$events$utils(), super.dispose(), r.enable$$module$build$src$core$events$utils())
                    }
                    initSvg(t) {
                        if (!this.workspace.rendered) throw TypeError("Workspace is headless.");
                        this.workspace.options.readOnly || this.eventsInit || (tt(this.svgRectTarget, "pointerdown", this, this.pathMouseDown), tt(this.svgHandleTarget, "pointerdown", this, this.pathMouseDown)), this.eventsInit = !0, this.updateMovable(), this.getSvgRoot().parentNode || this.workspace.getBubbleCanvas().appendChild(this.getSvgRoot()), !t && this.textarea && this.textarea.select()
                    }
                    pathMouseDown(t) {
                        let e = this.workspace.getGesture(t);
                        e && e.handleBubbleStart(t, this)
                    }
                    showContextMenu(t) {
                        throw Error("The implementation of showContextMenu should be monkey-patched in by blockly.ts")
                    }
                    select() {
                        if (I() !== this) {
                            var t = null;
                            if (I()) {
                                t = I().id, r.disable$$module$build$src$core$events$utils();
                                try {
                                    I().unselect()
                                } finally {
                                    r.enable$$module$build$src$core$events$utils()
                                }
                            }
                            F(t = new(X(nd))(t, this.id, this.workspace.id)), S(this), this.addSelect()
                        }
                    }
                    unselect() {
                        I() === this && (F(new(X(nd))(this.id, null, this.workspace.id)), S(null), this.removeSelect(), this.blurFocus())
                    }
                    addSelect() {
                        td(this.svgGroup, "blocklySelected"), this.setFocus()
                    }
                    removeSelect() {
                        td(this.svgGroup, "blocklySelected"), this.blurFocus()
                    }
                    addFocus() {
                        td(this.svgGroup, "blocklyFocused")
                    }
                    removeFocus() {
                        tg(this.svgGroup, "blocklyFocused")
                    }
                    getRelativeToSurfaceXY() {
                        let t = this.workspace.getLayerManager();
                        if (!t) throw Error("Cannot calculate position because the workspace has not been appended");
                        let e = 0,
                            i = 0,
                            s = this.getSvgRoot();
                        if (s)
                            do {
                                let t = tA(s);
                                e += t.x, i += t.y, s = s.parentNode
                            } while (s && !t.hasLayer(s) && null !== s);
                        return this.xy_ = new n3(e, i)
                    }
                    moveBy(t, e) {
                        let i = new(X(ny))(this),
                            s = this.getRelativeToSurfaceXY();
                        this.translate(s.x + t, s.y + e), this.xy_ = new n3(s.x + t, s.y + e), i.recordNew(), F(i), this.workspace.resizeContents()
                    }
                    translate(t, e) {
                        this.xy_ = new n3(t, e), this.getSvgRoot().setAttribute("transform", "translate(" + t + "," + e + ")")
                    }
                    moveDuringDrag(t) {
                        t = `translate(${t.x}, ${t.y})`, this.getSvgRoot().setAttribute("transform", t)
                    }
                    moveTo(t, e) {
                        this.translate(t, e)
                    }
                    clearTransformAttributes() {
                        this.getSvgRoot().removeAttribute("transform")
                    }
                    getBoundingRectangle() {
                        let t;
                        var e = this.getRelativeToSurfaceXY();
                        let i = this.getHeightWidth(),
                            s = e.y,
                            o = e.y + i.height;
                        return this.RTL ? (t = e.x - i.width, e = e.x) : (t = e.x, e = e.x + i.width), new rg(s, o, t, e)
                    }
                    updateMovable() {
                        this.isMovable() ? td(this.svgGroup, "blocklyDraggable") : tg(this.svgGroup, "blocklyDraggable")
                    }
                    setMovable(t) {
                        super.setMovable(t), this.updateMovable()
                    }
                    setEditable(t) {
                        super.setEditable(t), this.textarea && (this.textarea.readOnly = !t)
                    }
                    setDragging(t) {
                        t ? td(this.getSvgRoot(), "blocklyDragging") : tg(this.getSvgRoot(), "blocklyDragging")
                    }
                    getSvgRoot() {
                        return this.svgGroup
                    }
                    getContent() {
                        return this.textarea ? this.textarea.value : this.content_
                    }
                    setContent(t) {
                        super.setContent(t), this.textarea && (this.textarea.value = t)
                    }
                    setDeleteStyle(t) {
                        t ? td(this.svgGroup, "blocklyDraggingDelete") : tg(this.svgGroup, "blocklyDraggingDelete")
                    }
                    setAutoLayout(t) {}
                    toXmlWithXY(t) {
                        let e = 0;
                        this.workspace.RTL && (e = this.workspace.getWidth()), t = this.toXml(t);
                        let i = this.getRelativeToSurfaceXY();
                        return t.setAttribute("x", String(Math.round(this.workspace.RTL ? e - i.x : i.x))), t.setAttribute("y", String(Math.round(i.y))), t.setAttribute("h", String(this.getHeight())), t.setAttribute("w", String(this.getWidth())), t
                    }
                    toCopyData() {
                        return {
                            paster: r2.TYPE,
                            commentState: this.toXmlWithXY()
                        }
                    }
                    getHeightWidth() {
                        return {
                            width: this.getWidth(),
                            height: this.getHeight()
                        }
                    }
                    render() {
                        if (!this.rendered) {
                            var t = this.getHeightWidth(),
                                e = this.createEditor();
                            this.svgGroup.appendChild(e), this.svgHandleTarget = tu(rp.RECT, {
                                class: "blocklyCommentHandleTarget",
                                x: 0,
                                y: 0
                            }), this.svgGroup.appendChild(this.svgHandleTarget), this.svgRectTarget = tu(rp.RECT, {
                                class: "blocklyCommentTarget",
                                x: 0,
                                y: 0,
                                rx: 3,
                                ry: 3
                            }), this.svgGroup.appendChild(this.svgRectTarget), this.addResizeDom(), this.isDeletable() && this.addDeleteDom(), this.setSize(t.width, t.height), this.textarea.value = this.content_, this.rendered = !0, this.resizeGroup && tt(this.resizeGroup, "pointerdown", this, this.resizeMouseDown), this.isDeletable() && (tt(this.deleteGroup, "pointerdown", this, this.deleteMouseDown), tt(this.deleteGroup, "pointerout", this, this.deleteMouseOut), tt(this.deleteGroup, "pointerup", this, this.deleteMouseUp))
                        }
                    }
                    createEditor() {
                        this.foreignObject = tu(rp.FOREIGNOBJECT, {
                            x: 0,
                            y: r3.TOP_OFFSET,
                            class: "blocklyCommentForeignObject"
                        });
                        let t = document.createElementNS(rl, "body");
                        t.setAttribute("xmlns", rl), t.className = "blocklyMinimalBody";
                        let e = document.createElementNS(rl, "textarea");
                        return e.className = "blocklyCommentTextarea", e.setAttribute("dir", this.RTL ? "RTL" : "LTR"), e.readOnly = !this.isEditable(), t.appendChild(e), this.textarea = e, this.foreignObject.appendChild(t), tt(e, "wheel", this, function (t) {
                            t.stopPropagation()
                        }), tt(e, "change", this, function (t) {
                            this.setContent(e.value)
                        }), this.foreignObject
                    }
                    addResizeDom() {
                        this.resizeGroup = tu(rp.G, {
                            class: this.RTL ? "blocklyResizeSW" : "blocklyResizeSE"
                        }, this.svgGroup), tu(rp.POLYGON, {
                            points: "0,8 8,8 8,0"
                        }, this.resizeGroup), tu(rp.LINE, {
                            class: "blocklyResizeLine",
                            x1: 8 / 3,
                            y1: 7,
                            x2: 7,
                            y2: 8 / 3
                        }, this.resizeGroup), tu(rp.LINE, {
                            class: "blocklyResizeLine",
                            x1: 5.333333333333333,
                            y1: 7,
                            x2: 7,
                            y2: 5.333333333333333
                        }, this.resizeGroup)
                    }
                    addDeleteDom() {
                        this.deleteGroup = tu(rp.G, {
                            class: "blocklyCommentDeleteIcon"
                        }, this.svgGroup), this.deleteIconBorder = tu(rp.CIRCLE, {
                            class: "blocklyDeleteIconShape",
                            r: "7",
                            cx: "7.5",
                            cy: "7.5"
                        }, this.deleteGroup), tu(rp.LINE, {
                            x1: "5",
                            y1: "10",
                            x2: "10",
                            y2: "5",
                            stroke: "#fff",
                            "stroke-width": "2"
                        }, this.deleteGroup), tu(rp.LINE, {
                            x1: "5",
                            y1: "5",
                            x2: "10",
                            y2: "10",
                            stroke: "#fff",
                            "stroke-width": "2"
                        }, this.deleteGroup)
                    }
                    resizeMouseDown(t) {
                        this.unbindDragEvents(), to(t) || (this.workspace.startDrag(t, new n3(this.workspace.RTL ? -this.width_ : this.width_, this.height_)), this.onMouseUpWrapper = tt(document, "pointerup", this, this.resizeMouseUp), this.onMouseMoveWrapper = tt(document, "pointermove", this, this.resizeMouseMove), this.workspace.hideChaff()), t.stopPropagation()
                    }
                    deleteMouseDown(t) {
                        this.deleteIconBorder && td(this.deleteIconBorder, "blocklyDeleteIconHighlighted"), t.stopPropagation()
                    }
                    deleteMouseOut(t) {
                        this.deleteIconBorder && tg(this.deleteIconBorder, "blocklyDeleteIconHighlighted")
                    }
                    deleteMouseUp(t) {
                        this.dispose(), t.stopPropagation()
                    }
                    unbindDragEvents() {
                        this.onMouseUpWrapper && (ti(this.onMouseUpWrapper), this.onMouseUpWrapper = null), this.onMouseMoveWrapper && (ti(this.onMouseMoveWrapper), this.onMouseMoveWrapper = null)
                    }
                    resizeMouseUp(t) {
                        j(), this.unbindDragEvents()
                    }
                    resizeMouseMove(t) {
                        this.autoLayout = !1, t = this.workspace.moveDrag(t), this.setSize(this.RTL ? -t.x : t.x, t.y)
                    }
                    resizeComment() {
                        let t, e;
                        let i = this.getHeightWidth(),
                            s = r3.TOP_OFFSET;
                        if (null == (t = this.foreignObject) || t.setAttribute("width", String(i.width)), null == (e = this.foreignObject) || e.setAttribute("height", String(i.height - s)), this.RTL) {
                            let t;
                            null == (t = this.foreignObject) || t.setAttribute("x", String(-i.width))
                        }
                        this.textarea && (this.textarea.style.width = i.width - 4 + "px", this.textarea.style.height = i.height - 4 - s + "px")
                    }
                    setSize(t, e) {
                        let i, s, o, n;
                        if (t = Math.max(t, 45), e = Math.max(e, 20 + r3.TOP_OFFSET), this.width_ = t, this.height_ = e, this.svgRect_.setAttribute("width", `${t}`), this.svgRect_.setAttribute("height", `${e}`), null == (i = this.svgRectTarget) || i.setAttribute("width", `${t}`), null == (s = this.svgRectTarget) || s.setAttribute("height", `${e}`), null == (o = this.svgHandleTarget) || o.setAttribute("width", `${t}`), null == (n = this.svgHandleTarget) || n.setAttribute("height", String(r3.TOP_OFFSET)), this.RTL) {
                            let t;
                            this.svgRect_.setAttribute("transform", "scale(-1 1)"), null == (t = this.svgRectTarget) || t.setAttribute("transform", "scale(-1 1)")
                        }
                        if (this.resizeGroup) {
                            if (this.RTL) {
                                let i;
                                this.resizeGroup.setAttribute("transform", "translate(" + (-t + 8) + "," + (e - 8) + ") scale(-1 1)"), null == (i = this.deleteGroup) || i.setAttribute("transform", "translate(" + (-t + 8) + ",-8) scale(-1 1)")
                            } else {
                                let i;
                                this.resizeGroup.setAttribute("transform", "translate(" + (t - 8) + "," + (e - 8) + ")"), null == (i = this.deleteGroup) || i.setAttribute("transform", "translate(" + (t - 8) + ",-8)")
                            }
                        }
                        this.resizeComment()
                    }
                    setFocus() {
                        this.focused = !0, setTimeout(() => {
                            this.disposed_ || (this.textarea.focus(), this.addFocus(), this.svgRectTarget && td(this.svgRectTarget, "blocklyCommentTargetFocused"), this.svgHandleTarget && td(this.svgHandleTarget, "blocklyCommentHandleTargetFocused"))
                        }, 0)
                    }
                    blurFocus() {
                        this.focused = !1, setTimeout(() => {
                            this.disposed_ || (this.textarea.blur(), this.removeFocus(), this.svgRectTarget && tg(this.svgRectTarget, "blocklyCommentTargetFocused"), this.svgHandleTarget && tg(this.svgHandleTarget, "blocklyCommentHandleTargetFocused"))
                        }, 0)
                    }
                    static fromXmlRendered(t, e, i) {
                        let s;
                        r.disable$$module$build$src$core$events$utils();
                        try {
                            let o = rQ.parseAttributes(t);
                            if (s = new r3(e, o.content, o.h, o.w, o.id), e.rendered && (s.initSvg(!0), s.render()), !isNaN(o.x) && !isNaN(o.y)) {
                                if (e.RTL) {
                                    let t = i || e.getWidth();
                                    s.moveBy(t - o.x, o.y)
                                } else s.moveBy(o.x, o.y)
                            }
                        } finally {
                            r.enable$$module$build$src$core$events$utils()
                        }
                        return rQ.fireCreateEvent(s), s
                    }
                };
                r3.DEFAULT_SIZE = 100, r3.TOP_OFFSET = 10, ta("\n.blocklyCommentForeignObject {\n  position: relative;\n  z-index: 0;\n}\n\n.blocklyCommentRect {\n  fill: #E7DE8E;\n  stroke: #bcA903;\n  stroke-width: 1px;\n}\n\n.blocklyCommentTarget {\n  fill: transparent;\n  stroke: #bcA903;\n}\n\n.blocklyCommentTargetFocused {\n  fill: none;\n}\n\n.blocklyCommentHandleTarget {\n  fill: none;\n}\n\n.blocklyCommentHandleTargetFocused {\n  fill: transparent;\n}\n\n.blocklyFocused>.blocklyCommentRect {\n  fill: #B9B272;\n  stroke: #B9B272;\n}\n\n.blocklySelected>.blocklyCommentTarget {\n  stroke: #fc3;\n  stroke-width: 3px;\n}\n\n.blocklyCommentDeleteIcon {\n  cursor: pointer;\n  fill: #000;\n  display: none;\n}\n\n.blocklySelected > .blocklyCommentDeleteIcon {\n  display: block;\n}\n\n.blocklyDeleteIconShape {\n  fill: #000;\n  stroke: #000;\n  stroke-width: 1px;\n}\n\n.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {\n  stroke: #fc3;\n}\n");
                var r5 = new Set,
                    r6 = new WeakSet,
                    r9 = null,
                    r8 = null,
                    r4 = 0,
                    r7 = {};
                r7.finishQueuedRenders = el, r7.queueRender = er, r7.triggerQueuedRenders = ea;
                var lt = {};
                lt.appendDomToWorkspace = function (t, e) {
                    if (!e.getBlocksBoundingBox) return r.domToWorkspace$$module$build$src$core$xml(t, e);
                    var i = e.getBlocksBoundingBox();
                    if (t = r.domToWorkspace$$module$build$src$core$xml(t, e), i && i.top !== i.bottom) {
                        var s = i.bottom;
                        i = e.RTL ? i.right : i.left;
                        var o = 1 / 0;
                        let n = -1 / 0,
                            r = 1 / 0;
                        for (let i = 0; i < t.length; i++) {
                            let s = e.getBlockById(t[i]).getRelativeToSurfaceXY();
                            s.y < r && (r = s.y), s.x < o && (o = s.x), s.x > n && (n = s.x)
                        }
                        for (s = s - r + 10, i = e.RTL ? i - n : i - o, o = 0; o < t.length; o++) e.getBlockById(t[o]).moveBy(i, s, ["create"])
                    }
                    return t
                }, lt.blockToDom = ef, lt.blockToDomWithXY = eb, lt.clearWorkspaceAndLoadFromXml = function (t, e) {
                    return e.setResizesEnabled(!1), e.clear(), t = r.domToWorkspace$$module$build$src$core$xml(t, e), e.setResizesEnabled(!0), t
                }, lt.deleteNext = function (t) {
                    for (let e = 0; e < t.childNodes.length; e++) {
                        let i = t.childNodes[e];
                        if ("next" === i.nodeName.toLowerCase()) {
                            t.removeChild(i);
                            break
                        }
                    }
                }, lt.domToBlock = r.domToBlock$$module$build$src$core$xml, lt.domToBlockInternal = ek, lt.domToPrettyText = function (t) {
                    t = eT(t).split("<");
                    let e = "";
                    for (let i = 1; i < t.length; i++) {
                        let s = t[i];
                        "/" === s[0] && (e = e.substring(2)), t[i] = e + "<" + s, "/" !== s[0] && "/>" !== s.slice(-2) && (e += "  ")
                    }
                    return (t = (t = t.join("\n")).replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>")).replace(/^\n/, "")
                }, lt.domToText = eT, lt.domToVariables = ew, lt.domToWorkspace = r.domToWorkspace$$module$build$src$core$xml, lt.variablesToDom = eg, lt.workspaceToDom = function (t, e) {
                    let i = r.createElement$$module$build$src$core$utils$xml("xml");
                    var s = eg(r.allUsedVarModels$$module$build$src$core$variables(t));
                    s.hasChildNodes() && i.appendChild(s), s = t.getTopComments(!0);
                    for (let t = 0; t < s.length; t++) i.appendChild(s[t].toXmlWithXY(e));
                    for (s = 0, t = t.getTopBlocks(!0); s < t.length; s++) i.appendChild(eb(t[s], e));
                    return i
                };
                var le = class extends Error {},
                    li = class extends le {
                        constructor(t) {
                            super("Expected to find a 'type' property, defining the block type"), this.state = t
                        }
                    },
                    ls = class extends le {
                        constructor(t, e, i) {
                            super(`The block ${e.toDevString()} is missing a(n) ${t}
connection`), this.block = e, this.state = i
                        }
                    },
                    lo = class extends le {
                        constructor(t, e, i, s) {
                            super(`The block ${i.toDevString()} could not connect its
${e} to its parent, because: ${t}`), this.childBlock = i, this.childState = s
                        }
                    },
                    ln = class extends le {
                        constructor(t) {
                            super("Encountered a real block which is defined as a child of a shadow\nblock. It is an invariant of Blockly that shadow blocks only have shadow\nchildren"), this.state = t
                        }
                    },
                    lr = class extends le {
                        constructor(t, e, i) {
                            super(`Cannot add an icon of type '${t}' to the block ${e.toDevString()}, because there is no icon registered with type '${t}'. Make sure that all of your icons have been registered.`), this.block = e, this.state = i
                        }
                    },
                    ll = {};
                ll.BadConnectionCheck = lo, ll.DeserializationError = le, ll.MissingBlockType = li, ll.MissingConnection = ls, ll.RealChildOfShadow = ln, ll.UnregisteredIcon = lr;
                var la = {};
                la.register = eL, la.unregister = function (t) {
                    g(c.SERIALIZER, t)
                };
                var lh = class {
                    constructor() {
                        this.priority = 50
                    }
                    save(t) {
                        let e = [];
                        for (let i of t.getTopBlocks(!1))(t = eM(i, {
                            addCoordinates: !0,
                            doFullSerialization: !1
                        })) && e.push(t);
                        return e.length ? {
                            languageVersion: 0,
                            blocks: e
                        } : null
                    }
                    load(t, e) {
                        for (let i of t = t.blocks) ez(i, e, {
                            recordUndo: P()
                        })
                    }
                    clear(t) {
                        for (let e of t.getTopBlocks(!1)) e.dispose(!1)
                    }
                };
                eL("blocks", new lh);
                var lc = {};
                lc.BlockSerializer = lh, lc.append = ez, lc.appendInternal = eX, lc.save = eM;
                var lu = class extends nD {
                        constructor(t) {
                            super(), this.isBlank = !t, t && (this.blockId = t.id, this.workspaceId = t.workspace.id)
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
                            return t.blockId = this.blockId, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new lu)).blockId = t.blockId, e
                        }
                    },
                    ld = class extends lu {
                        constructor(t) {
                            super(t), this.type = r.CREATE$$module$build$src$core$events$utils, t && (t.isShadow() && (this.recordUndo = !1), this.xml = eb(t), this.ids = V(t), this.json = eM(t, {
                                addCoordinates: !0
                            }))
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.xml) throw Error("The block XML is undefined. Either pass a block to the constructor, or call fromJson");
                            if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
                            if (!this.json) throw Error("The block JSON is undefined. Either pass a block to the constructor, or call fromJson");
                            return t.xml = eT(this.xml), t.ids = this.ids, t.json = this.json, this.recordUndo || (t.recordUndo = this.recordUndo), t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new ld)).xml = r.textToDom$$module$build$src$core$utils$xml(t.xml), e.ids = t.ids, e.json = t.json, void 0 !== t.recordUndo && (e.recordUndo = t.recordUndo), e
                        }
                        run(t) {
                            let e = this.getEventWorkspace_();
                            if (!this.json) throw Error("The block JSON is undefined. Either pass a block to the constructor, or call fromJson");
                            if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
                            if (!lp(e, this.ids)) {
                                if (t) ez(this.json, e);
                                else
                                    for (t = 0; t < this.ids.length; t++) {
                                        let i = this.ids[t],
                                            s = e.getBlockById(i);
                                        s ? s.dispose(!1) : i === this.blockId && console.warn("Can't uncreate non-existent block: " + i)
                                    }
                            }
                        }
                    },
                    lp = function (t, e) {
                        return e.map(e => t.getBlockById(e)).filter(t => t && t.isShadow()).length === e.length
                    };
                d(c.EVENT, r.CREATE$$module$build$src$core$events$utils, ld);
                var lg = class extends nA {
                    constructor(t, e) {
                        super(e), this.type = nf, this.themeName = t
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.themeName) throw Error("The theme name is undefined. Either pass a theme name to the constructor, or call fromJson");
                        return t.themeName = this.themeName, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new lg)).themeName = t.themeName, e
                    }
                };
                d(c.EVENT, nf, lg);
                var lb = class extends nA {
                    constructor(t, e, i, s, o) {
                        super(s), this.type = nE, this.viewTop = t, this.viewLeft = e, this.scale = i, this.oldScale = o
                    }
                    toJson() {
                        let t = super.toJson();
                        if (void 0 === this.viewTop) throw Error("The view top is undefined. Either pass a value to the constructor, or call fromJson");
                        if (void 0 === this.viewLeft) throw Error("The view left is undefined. Either pass a value to the constructor, or call fromJson");
                        if (void 0 === this.scale) throw Error("The scale is undefined. Either pass a value to the constructor, or call fromJson");
                        if (void 0 === this.oldScale) throw Error("The old scale is undefined. Either pass a value to the constructor, or call fromJson");
                        return t.viewTop = this.viewTop, t.viewLeft = this.viewLeft, t.scale = this.scale, t.oldScale = this.oldScale, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new lb)).viewTop = t.viewTop, e.viewLeft = t.viewLeft, e.scale = t.scale, e.oldScale = t.oldScale, e
                    }
                };
                d(c.EVENT, nE, lb), r.config$$module$build$src$core$config = {
                    dragRadius: 5,
                    flyoutDragRadius: 10,
                    snapRadius: 28,
                    connectingSnapRadius: 28,
                    currentConnectionPreference: 8,
                    bumpDelay: 250
                }, r.config$$module$build$src$core$config, (lS = lx || (lx = {}))[lS.INPUT_VALUE = 1] = "INPUT_VALUE", lS[lS.OUTPUT_VALUE = 2] = "OUTPUT_VALUE", lS[lS.NEXT_STATEMENT = 3] = "NEXT_STATEMENT", lS[lS.PREVIOUS_STATEMENT = 4] = "PREVIOUS_STATEMENT";
                var l_ = class {
                        constructor(t) {
                            this.connectionChecker = t, this.connections = []
                        }
                        addConnection(t, e) {
                            e = this.calculateIndexForYPos(e), this.connections.splice(e, 0, t)
                        }
                        findIndexOfConnection(t, e) {
                            if (!this.connections.length) return -1;
                            let i = this.calculateIndexForYPos(e);
                            if (i >= this.connections.length) return -1;
                            e = t.y;
                            let s = i;
                            for (; 0 <= s && this.connections[s].y === e;) {
                                if (this.connections[s] === t) return s;
                                s--
                            }
                            for (s = i; s < this.connections.length && this.connections[s].y === e;) {
                                if (this.connections[s] === t) return s;
                                s++
                            }
                            return -1
                        }
                        calculateIndexForYPos(t) {
                            if (!this.connections.length) return 0;
                            let e = 0,
                                i = this.connections.length;
                            for (; e < i;) {
                                let s = Math.floor((e + i) / 2);
                                if (this.connections[s].y < t) e = s + 1;
                                else if (this.connections[s].y > t) i = s;
                                else {
                                    e = s;
                                    break
                                }
                            }
                            return e
                        }
                        removeConnection(t, e) {
                            if (-1 === (t = this.findIndexOfConnection(t, e))) throw Error("Unable to find connection in connectionDB.");
                            this.connections.splice(t, 1)
                        }
                        getNeighbours(t, e) {
                            function i(t) {
                                let i = o - s[t].x,
                                    r = n - s[t].y;
                                return Math.sqrt(i * i + r * r) <= e && a.push(s[t]), r < e
                            }
                            let s = this.connections,
                                o = t.x,
                                n = t.y;
                            t = 0;
                            let r = s.length - 2,
                                l = r;
                            for (; t < l;) s[l].y < n ? t = l : r = l, l = Math.floor((t + r) / 2);
                            let a = [];
                            if (r = t = l, s.length) {
                                for (; 0 <= t && i(t);) t--;
                                do r++; while (r < s.length && i(r))
                            }
                            return a
                        }
                        isInYRange(t, e, i) {
                            return Math.abs(this.connections[t].y - e) <= i
                        }
                        searchForClosest(t, e, i) {
                            if (!this.connections.length) return {
                                connection: null,
                                radius: e
                            };
                            let s = t.y,
                                o = t.x;
                            t.x = o + i.x, t.y = s + i.y;
                            var n = this.calculateIndexForYPos(t.y);
                            i = null;
                            let r = e,
                                l, a = n - 1;
                            for (; 0 <= a && this.isInYRange(a, t.y, e);) l = this.connections[a], this.connectionChecker.canConnect(t, l, !0, r) && (i = l, r = l.distanceFrom(t)), a--;
                            for (; n < this.connections.length && this.isInYRange(n, t.y, e);) l = this.connections[n], this.connectionChecker.canConnect(t, l, !0, r) && (i = l, r = l.distanceFrom(t)), n++;
                            return t.x = o, t.y = s, {
                                connection: i,
                                radius: r
                            }
                        }
                        static init(t) {
                            let e = [];
                            return e[lx.INPUT_VALUE] = new l_(t), e[lx.OUTPUT_VALUE] = new l_(t), e[lx.NEXT_STATEMENT] = new l_(t), e[lx.PREVIOUS_STATEMENT] = new l_(t), e
                        }
                    },
                    lm = class {
                        paste(t, e, i) {
                            let s;
                            if (!e.isCapacityAvailable(t.typeCounts)) return null;
                            i && (t.blockState.x = i.x, t.blockState.y = i.y), r.disable$$module$build$src$core$events$utils();
                            try {
                                s = ez(t.blockState, e), e5(s)
                            } finally {
                                r.enable$$module$build$src$core$events$utils()
                            }
                            return s && (W() && !s.isShadow() && F(new(X(r.CREATE$$module$build$src$core$events$utils))(s)), s.select()), s
                        }
                    };
                lm.TYPE = "block", en(lm.TYPE, new lm);
                var lf = {};
                lf.BlockPaster = lm, lf.moveBlockToNotConflict = e5;
                var lE = null,
                    lT = null,
                    lk = {
                        duplicateInternal: function (t) {
                            let e = t.toCopyData();
                            return e ? e8(e, t.workspace) : null
                        },
                        copyInternal: function (t) {
                            let e;
                            let i = t.toCopyData();
                            return lE = i, lT = null != (e = t.workspace) ? e : null, i
                        }
                    },
                    lw = {};
                lw.BlockPaster = lm, lw.TEST_ONLY = lk, lw.copy = function (t) {
                    return tc("Blockly.clipboard.copy", "v11", "v12", "myCopyable.toCopyData()"), lk.copyInternal(t)
                }, lw.duplicate = function (t) {
                    return tc("Blockly.clipboard.duplicate", "v11", "v12", "Blockly.clipboard.paste(myCopyable.toCopyData(), myWorkspace)"), lk.duplicateInternal(t)
                }, lw.paste = e8, lw.registry = r1;
                var ly, l$, lC, lv, lI, lS, lR, lD, lA, lN, lO, lx, lL, lM = "aria-",
                    lB = "role";
                (lF = lL || (lL = {})).GRID = "grid", lF.GRIDCELL = "gridcell", lF.GROUP = "group", lF.LISTBOX = "listbox", lF.MENU = "menu", lF.MENUITEM = "menuitem", lF.MENUITEMCHECKBOX = "menuitemcheckbox", lF.OPTION = "option", lF.PRESENTATION = "presentation", lF.ROW = "row", lF.TREE = "tree", lF.TREEITEM = "treeitem", (lH = lG || (lG = {})).ACTIVEDESCENDANT = "activedescendant", lH.COLCOUNT = "colcount", lH.DISABLED = "disabled", lH.EXPANDED = "expanded", lH.INVALID = "invalid", lH.LABEL = "label", lH.LABELLEDBY = "labelledby", lH.LEVEL = "level", lH.ORIENTATION = "orientation", lH.POSINSET = "posinset", lH.ROWCOUNT = "rowcount", lH.SELECTED = "selected", lH.SETSIZE = "setsize", lH.VALUEMAX = "valuemax", lH.VALUEMIN = "valuemin";
                var lP = {};
                lP.Role = lL, lP.State = lG, lP.setRole = e7, lP.setState = it;
                var lF, lH, lG, lU, lW = class {
                        constructor() {
                            this.menuItems = [], this.roleName = this.element = this.onKeyDownHandler = this.mouseLeaveHandler = this.mouseEnterHandler = this.clickHandler = this.mouseOverHandler = this.highlightedItem = this.openingCoords = null
                        }
                        addChild(t) {
                            this.menuItems.push(t)
                        }
                        render(t) {
                            let e = document.createElement("div");
                            e.className = "blocklyMenu goog-menu blocklyNonSelectable", e.tabIndex = 0, this.roleName && e7(e, this.roleName), this.element = e;
                            for (let t = 0, i; i = this.menuItems[t]; t++) e.appendChild(i.createDom());
                            return this.mouseOverHandler = tt(e, "pointerover", this, this.handleMouseOver, !0), this.clickHandler = tt(e, "pointerup", this, this.handleClick, !0), this.mouseEnterHandler = tt(e, "pointerenter", this, this.handleMouseEnter, !0), this.mouseLeaveHandler = tt(e, "pointerleave", this, this.handleMouseLeave, !0), this.onKeyDownHandler = tt(e, "keydown", this, this.handleKeyEvent), t.appendChild(e), e
                        }
                        getElement() {
                            return this.element
                        }
                        focus() {
                            let t = this.getElement();
                            t && (t.focus({
                                preventScroll: !0
                            }), td(t, "blocklyFocused"))
                        }
                        blur() {
                            let t = this.getElement();
                            t && (t.blur(), tg(t, "blocklyFocused"))
                        }
                        setRole(t) {
                            this.roleName = t
                        }
                        dispose() {
                            this.mouseOverHandler && (ti(this.mouseOverHandler), this.mouseOverHandler = null), this.clickHandler && (ti(this.clickHandler), this.clickHandler = null), this.mouseEnterHandler && (ti(this.mouseEnterHandler), this.mouseEnterHandler = null), this.mouseLeaveHandler && (ti(this.mouseLeaveHandler), this.mouseLeaveHandler = null), this.onKeyDownHandler && (ti(this.onKeyDownHandler), this.onKeyDownHandler = null);
                            for (let t = 0, e; e = this.menuItems[t]; t++) e.dispose();
                            this.element = null
                        }
                        getMenuItem(t) {
                            let e = this.getElement();
                            for (; t && t !== e;) {
                                if (t.classList.contains("blocklyMenuItem")) {
                                    for (let e = 0, i; i = this.menuItems[e]; e++)
                                        if (i.getElement() === t) return i
                                }
                                t = t.parentElement
                            }
                            return null
                        }
                        setHighlighted(t) {
                            var e = this.highlightedItem;
                            e && (e.setHighlighted(!1), this.highlightedItem = null), t && (t.setHighlighted(!0), this.highlightedItem = t, e = this.getElement(), tR(t.getElement(), e), it(e, lG.ACTIVEDESCENDANT, t.getId()))
                        }
                        highlightNext() {
                            let t = this.highlightedItem ? this.menuItems.indexOf(this.highlightedItem) : -1;
                            this.highlightHelper(t, 1)
                        }
                        highlightPrevious() {
                            let t = this.highlightedItem ? this.menuItems.indexOf(this.highlightedItem) : -1;
                            this.highlightHelper(0 > t ? this.menuItems.length : t, -1)
                        }
                        highlightFirst() {
                            this.highlightHelper(-1, 1)
                        }
                        highlightLast() {
                            this.highlightHelper(this.menuItems.length, -1)
                        }
                        highlightHelper(t, e) {
                            let i;
                            for (t += e; i = this.menuItems[t];) {
                                if (i.isEnabled()) {
                                    this.setHighlighted(i);
                                    break
                                }
                                t += e
                            }
                        }
                        handleMouseOver(t) {
                            (t = this.getMenuItem(t.target)) && (t.isEnabled() ? this.highlightedItem !== t && this.setHighlighted(t) : this.setHighlighted(null))
                        }
                        handleClick(t) {
                            let e = this.openingCoords;
                            if (this.openingCoords = null, e && "number" == typeof t.clientX) {
                                let i = new n3(t.clientX, t.clientY);
                                if (1 > n3.distance(e, i)) return
                            }(t = this.getMenuItem(t.target)) && t.performAction()
                        }
                        handleMouseEnter(t) {
                            this.focus()
                        }
                        handleMouseLeave(t) {
                            this.getElement() && (this.blur(), this.setHighlighted(null))
                        }
                        handleKeyEvent(t) {
                            if (this.menuItems.length && !(t.shiftKey || t.ctrlKey || t.metaKey || t.altKey)) {
                                var e = this.highlightedItem;
                                switch (t.key) {
                                    case "Enter":
                                    case " ":
                                        e && e.performAction();
                                        break;
                                    case "ArrowUp":
                                        this.highlightPrevious();
                                        break;
                                    case "ArrowDown":
                                        this.highlightNext();
                                        break;
                                    case "PageUp":
                                    case "Home":
                                        this.highlightFirst();
                                        break;
                                    case "PageDown":
                                    case "End":
                                        this.highlightLast();
                                        break;
                                    default:
                                        return
                                }
                                t.preventDefault(), t.stopPropagation()
                            }
                        }
                        getSize() {
                            let t = this.getElement(),
                                e = ty(t);
                            return e.height = t.scrollHeight, e
                        }
                    },
                    lV = class {
                        constructor(t, e) {
                            this.content = t, this.opt_value = e, this.enabled = !0, this.element = null, this.rightToLeft = !1, this.roleName = null, this.highlight = this.checked = this.checkable = !1, this.actionHandler = null
                        }
                        createDom() {
                            let t = document.createElement("div");
                            t.id = L(), this.element = t, t.className = "blocklyMenuItem goog-menuitem " + (this.enabled ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") + (this.checked ? "blocklyMenuItemSelected goog-option-selected " : "") + (this.highlight ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") + (this.rightToLeft ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
                            let e = document.createElement("div");
                            if (e.className = "blocklyMenuItemContent goog-menuitem-content", this.checkable) {
                                var i = document.createElement("div");
                                i.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox", e.appendChild(i)
                            }
                            return i = this.content, "string" == typeof this.content && (i = document.createTextNode(this.content)), e.appendChild(i), t.appendChild(e), this.roleName && e7(t, this.roleName), it(t, lG.SELECTED, this.checkable && this.checked || !1), it(t, lG.DISABLED, !this.enabled), t
                        }
                        dispose() {
                            this.element = null
                        }
                        getElement() {
                            return this.element
                        }
                        getId() {
                            return this.element.id
                        }
                        getValue() {
                            let t;
                            return null != (t = this.opt_value) ? t : null
                        }
                        setRightToLeft(t) {
                            this.rightToLeft = t
                        }
                        setRole(t) {
                            this.roleName = t
                        }
                        setCheckable(t) {
                            this.checkable = t
                        }
                        setChecked(t) {
                            this.checked = t
                        }
                        setHighlighted(t) {
                            this.highlight = t;
                            let e = this.getElement();
                            e && this.isEnabled() && (t ? (td(e, "blocklyMenuItemHighlight"), td(e, "goog-menuitem-highlight")) : (tg(e, "blocklyMenuItemHighlight"), tg(e, "goog-menuitem-highlight")))
                        }
                        isEnabled() {
                            return this.enabled
                        }
                        setEnabled(t) {
                            this.enabled = t
                        }
                        performAction() {
                            this.isEnabled() && this.actionHandler && this.actionHandler(this)
                        }
                        onAction(t, e) {
                            this.actionHandler = t.bind(e)
                        }
                    },
                    lz = null,
                    lX = null,
                    lY = "blocklyWidgetDiv",
                    lK = "",
                    lJ = "",
                    lj = {};
                lj.createDom = ii, lj.getDiv = ie, lj.hide = io, lj.hideIfOwner = il, lj.isVisible = ir, lj.positionWithAnchor = ih, lj.repositionForWindowResize = id, lj.show = is, lj.testOnly_setDiv = function (t) {
                    if (lU = t, null === t) {
                        let t;
                        null == (t = document.querySelector("." + lY)) || t.remove()
                    }
                };
                var lZ = null,
                    lq = {},
                    lQ = null,
                    l0 = {};
                l0.callbackFactory = r.callbackFactory$$module$build$src$core$contextmenu, l0.commentDeleteOption = iw, l0.commentDuplicateOption = iy, l0.dispose = ik, l0.getCurrentBlock = function () {
                    return lZ
                }, l0.hide = iT, l0.setCurrentBlock = ip, l0.show = ig, l0.workspaceCommentOption = function (t, e) {
                    let i = {
                        enabled: !0
                    };
                    return i.text = r.Msg$$module$build$src$core$msg.ADD_COMMENT, i.callback = function () {
                        let i = new r3(t, r.Msg$$module$build$src$core$msg.WORKSPACE_COMMENT_DEFAULT_TEXT, r3.DEFAULT_SIZE, r3.DEFAULT_SIZE);
                        var s = t.getInjectionDiv().getBoundingClientRect();
                        s = new n3(e.clientX - s.left, e.clientY - s.top);
                        let o = t.getOriginOffsetInPixels();
                        (s = n3.difference(s, o)).scale(1 / t.scale), i.moveBy(s.x, s.y), t.rendered && (i.initSvg(), i.render(), i.select())
                    }, i
                };
                var l1 = class {
                    constructor() {
                        this.registry_ = new Map, this.reset()
                    }
                    reset() {
                        this.registry_.clear()
                    }
                    register(t) {
                        if (this.registry_.has(t.id)) throw Error('Menu item with ID "' + t.id + '" is already registered.');
                        this.registry_.set(t.id, t)
                    }
                    unregister(t) {
                        if (!this.registry_.has(t)) throw Error('Menu item with ID "' + t + '" not found.');
                        this.registry_.delete(t)
                    }
                    getItem(t) {
                        let e;
                        return null != (e = this.registry_.get(t)) ? e : null
                    }
                    getContextMenuOptions(t, e) {
                        let i = [];
                        for (let o of this.registry_.values())
                            if (t === o.scopeType) {
                                var s = o.preconditionFn(e);
                                "hidden" !== s && (s = {
                                    text: "function" == typeof o.displayText ? o.displayText(e) : o.displayText,
                                    enabled: "enabled" === s,
                                    callback: o.callback,
                                    scope: e,
                                    weight: o.weight
                                }, i.push(s))
                            } return i.sort(function (t, e) {
                            return t.weight - e.weight
                        }), i
                    }
                };
                (l9 = (l6 = l1 || (l1 = {})).ScopeType || (l6.ScopeType = {})).BLOCK = "block", l9.WORKSPACE = "workspace", l6.registry = new l6;
                var l2 = l1.ScopeType,
                    l3 = {};
                l3.ContextMenuRegistry = l1, l3.ScopeType = l2;
                var l5 = {};
                l5.clamp = iv, l5.toDegrees = iC, l5.toRadians = i$;
                var l6, l9, l8, l4, l7, at = 16,
                    ae = 1,
                    ai = 12,
                    as = 16,
                    ao = .25,
                    an = null,
                    ar = null,
                    al = "",
                    aa = "",
                    ah = null,
                    ac = null,
                    au = null,
                    ad = {
                        getBoundsInfo: function () {
                            let t = tv(ah),
                                e = ty(ah);
                            return {
                                left: t.x,
                                right: t.x + e.width,
                                top: t.y,
                                bottom: t.y + e.height,
                                width: e.width,
                                height: e.height
                            }
                        },
                        getPositionMetrics: function (t, e, i, s) {
                            var o;
                            let n = ad.getBoundsInfo(),
                                r = ty(l8);
                            return e + r.height < n.bottom ? iP(t, e, n, r) : s - r.height > n.top ? iF(i, s, n, r) : e + r.height < document.documentElement.clientHeight ? iP(t, e, n, r) : s - r.height > document.documentElement.clientTop ? iF(i, s, n, r) : {
                                initialX: (o = iH(o = t, n.left, n.right, r.width)).divX,
                                initialY: 0,
                                finalX: o.divX,
                                finalY: 0,
                                arrowAtTop: null,
                                arrowX: null,
                                arrowY: null,
                                arrowVisible: !1
                            }
                        }
                    },
                    ap = {
                        ANIMATION_TIME: .25,
                        ARROW_HORIZONTAL_PADDING: 12,
                        ARROW_SIZE: 16,
                        BORDER_SIZE: 1,
                        PADDING_Y: 16,
                        TEST_ONLY: ad
                    };
                ap.clearContent = iA, ap.createDom = iI, ap.getContentDiv = iD, ap.getOwner = iR, ap.getPositionX = iH, ap.hide = iW, ap.hideIfOwner = iU, ap.hideWithoutAnimation = iV, ap.isVisible = iG, ap.repositionForWindowResize = iX, ap.setBoundsElement = iS, ap.setColour = iN, ap.show = iB, ap.showPositionedByBlock = function (t, e, i, s) {
                    return iM(ix(e), t, i, s)
                }, ap.showPositionedByField = iO;
                var ag = null,
                    ab = null,
                    a_ = {};
                a_.connectionUiEffect = iJ, a_.disconnectUiEffect = ij, a_.disconnectUiStop = iq, a_.disposeUiEffect = iY;
                var am = class {
                        constructor(t, e) {
                            this.bubble = t, this.workspace = e, this.dragTarget_ = null, this.wouldDeleteBubble_ = !1, this.startXY_ = this.bubble.getRelativeToSurfaceXY()
                        }
                        startBubbleDrag() {
                            let t;
                            r.getGroup$$module$build$src$core$events$utils() || r.setGroup$$module$build$src$core$events$utils(!0), this.workspace.setResizesEnabled(!1), this.bubble.setAutoLayout && this.bubble.setAutoLayout(!1), null == (t = this.workspace.getLayerManager()) || t.moveToDragLayer(this.bubble), this.bubble.setDragging && this.bubble.setDragging(!0)
                        }
                        dragBubble(t, e) {
                            e = this.pixelsToWorkspaceUnits_(e), e = n3.sum(this.startXY_, e), this.bubble.moveDuringDrag(e), e = this.dragTarget_, this.dragTarget_ = this.workspace.getDragTarget(t), t = this.wouldDeleteBubble_, this.wouldDeleteBubble_ = this.shouldDelete_(this.dragTarget_), t !== this.wouldDeleteBubble_ && this.updateCursorDuringBubbleDrag_(), this.dragTarget_ !== e && (e && e.onDragExit(this.bubble), this.dragTarget_ && this.dragTarget_.onDragEnter(this.bubble)), this.dragTarget_ && this.dragTarget_.onDragOver(this.bubble)
                        }
                        shouldDelete_(t) {
                            return !!(t && this.workspace.getComponentManager().hasCapability(t.id, nQ.Capability.DELETE_AREA)) && t.wouldDelete(this.bubble, !1)
                        }
                        updateCursorDuringBubbleDrag_() {
                            this.bubble.setDeleteStyle(this.wouldDeleteBubble_)
                        }
                        endBubbleDrag(t, e) {
                            if (this.dragBubble(t, e), this.dragTarget_ && this.dragTarget_.shouldPreventMove(this.bubble) ? t = this.startXY_ : (t = this.pixelsToWorkspaceUnits_(e), t = n3.sum(this.startXY_, t)), this.bubble.moveTo(t.x, t.y), this.dragTarget_ && this.dragTarget_.onDrop(this.bubble), this.wouldDeleteBubble_) this.fireMoveEvent_(), this.bubble.dispose();
                            else {
                                if (this.bubble.setDragging) {
                                    let t;
                                    this.bubble.setDragging(!1), null == (t = this.workspace.getLayerManager()) || t.moveOffDragLayer(this.bubble, 100)
                                }
                                this.fireMoveEvent_()
                            }
                            this.workspace.setResizesEnabled(!0), r.setGroup$$module$build$src$core$events$utils(!1)
                        }
                        fireMoveEvent_() {
                            if (this.bubble instanceof r3) {
                                let t = new(X(ny))(this.bubble);
                                t.setOldCoordinate(this.startXY_), t.recordNew(), F(t)
                            }
                        }
                        pixelsToWorkspaceUnits_(t) {
                            return t = new n3(t.x / this.workspace.scale, t.y / this.workspace.scale), this.workspace.isMutator && t.scale(1 / this.workspace.options.parentWorkspace.scale), t
                        }
                    },
                    af = [];
                af[lx.INPUT_VALUE] = lx.OUTPUT_VALUE, af[lx.OUTPUT_VALUE] = lx.INPUT_VALUE, af[lx.NEXT_STATEMENT] = lx.PREVIOUS_STATEMENT, af[lx.PREVIOUS_STATEMENT] = lx.NEXT_STATEMENT;
                var aE = "RENAME_VARIABLE_ID",
                    aT = "DELETE_VARIABLE_ID",
                    ak = {};
                ak.commonWordPrefix = i0, ak.commonWordSuffix = i1, ak.isNumber = r.isNumber$$module$build$src$core$utils$string, ak.shortestStringLength = iQ, ak.startsWith = function (t, e) {
                    return tc("Blockly.utils.string.startsWith()", "April 2022", "April 2023", "Use built-in string.startsWith"), t.startsWith(e)
                }, ak.wrap = r.wrap$$module$build$src$core$utils$string;
                var aw = void 0,
                    ay = !1,
                    a$ = !1,
                    aC = 50,
                    av = 0,
                    aI = 0,
                    aS = 0,
                    aR = 0,
                    aD = null,
                    aA = null,
                    aN = 0,
                    aO = 10,
                    ax = 10,
                    aL = 750,
                    aM = 5,
                    aB = null,
                    aP = {
                        HOVER_MS: 750,
                        LIMIT: 50,
                        MARGINS: 5,
                        OFFSET_X: 0,
                        OFFSET_Y: 10,
                        RADIUS_OK: 10
                    };
                aP.bindMouseEvents = i7, aP.block = sr, aP.createDom = i4, aP.dispose = so, aP.getCustomTooltip = function () {
                    return aw
                }, aP.getDiv = function () {
                    return aB
                }, aP.getTooltipOfObject = i9, aP.hide = sn, aP.isVisible = function () {
                    return ay
                }, aP.setCustomTooltip = function (t) {
                    aw = t
                }, aP.unbindMouseEvents = st, aP.unblock = sl;
                var aF = class {
                        constructor(t) {
                            this.workspace = t, this.horizontalScrollEnabled_ = this.workspace.isMovableHorizontally(), this.verticalScrollEnabled_ = this.workspace.isMovableVertically(), this.startScrollXY_ = new n3(t.scrollX, t.scrollY)
                        }
                        dispose() {
                            this.workspace = null
                        }
                        startDrag() {
                            I() && I().unselect()
                        }
                        endDrag(t) {
                            this.drag(t)
                        }
                        drag(t) {
                            if (t = n3.sum(this.startScrollXY_, t), this.horizontalScrollEnabled_ && this.verticalScrollEnabled_) this.workspace.scroll(t.x, t.y);
                            else if (this.horizontalScrollEnabled_) this.workspace.scroll(t.x, this.workspace.scrollY);
                            else if (this.verticalScrollEnabled_) this.workspace.scroll(this.workspace.scrollX, t.y);
                            else throw TypeError("Invalid state.")
                        }
                    },
                    aH = class {
                        constructor(t, e) {
                            this.creatorWorkspace = e, this.mouseDownXY = new n3(0, 0), this.startWorkspace_ = this.targetBlock = this.startBlock = this.startIcon = this.startField = this.startBubble = null, this.hasExceededDragRadius = !1, this.boundEvents = [], this.flyout = this.workspaceDragger = this.blockDragger = this.bubbleDragger = null, this.isMultiTouch_ = this.isEnding_ = this.gestureHasStarted = this.calledUpdateIsDragging = !1, this.cachedPoints = new Map, this.startDistance = this.previousScale = 0, this.currentDropdownOwner = this.isPinchZoomEnabled = null, this.mostRecentEvent = t, this.currentDragDeltaXY = new n3(0, 0), this.healStack = !1
                        }
                        dispose() {
                            for (let t of (j(), sl(), this.creatorWorkspace.clearGesture(), this.boundEvents)) ti(t);
                            this.boundEvents.length = 0, this.blockDragger && this.blockDragger.dispose(), this.workspaceDragger && this.workspaceDragger.dispose()
                        }
                        updateFromEvent(t) {
                            let e = new n3(t.clientX, t.clientY);
                            this.updateDragDelta(e) && (this.updateIsDragging(), J()), this.mostRecentEvent = t
                        }
                        updateDragDelta(t) {
                            return this.currentDragDeltaXY = n3.difference(t, this.mouseDownXY), !this.hasExceededDragRadius && (this.hasExceededDragRadius = n3.magnitude(this.currentDragDeltaXY) > (this.flyout ? r.config$$module$build$src$core$config.flyoutDragRadius : r.config$$module$build$src$core$config.dragRadius))
                        }
                        updateIsDraggingFromFlyout() {
                            let t;
                            if (!this.targetBlock || null == (t = this.flyout) || !t.isBlockCreatable(this.targetBlock)) return !1;
                            if (!this.flyout.targetWorkspace) throw Error("Cannot update dragging from the flyout because the ' +\n          'flyout's target workspace is undefined");
                            return !!(!this.flyout.isScrollable() || this.flyout.isDragTowardWorkspace(this.currentDragDeltaXY)) && (this.startWorkspace_ = this.flyout.targetWorkspace, this.startWorkspace_.updateScreenCalculationsIfScrolled(), r.getGroup$$module$build$src$core$events$utils() || r.setGroup$$module$build$src$core$events$utils(!0), this.startBlock = null, this.targetBlock = this.flyout.createBlock(this.targetBlock), this.targetBlock.select(), !0)
                        }
                        updateIsDraggingBubble() {
                            return !!this.startBubble && (this.startDraggingBubble(), !0)
                        }
                        updateIsDraggingBlock() {
                            if (!this.targetBlock) return !1;
                            if (this.flyout) {
                                if (this.updateIsDraggingFromFlyout()) return this.startDraggingBlock(), !0
                            } else if (this.targetBlock.isMovable()) return this.startDraggingBlock(), !0;
                            return !1
                        }
                        updateIsDraggingWorkspace() {
                            if (!this.startWorkspace_) throw Error("Cannot update dragging the workspace because the start workspace is undefined");
                            (this.flyout ? this.flyout.isScrollable() : this.startWorkspace_ && this.startWorkspace_.isDraggable()) && (this.workspaceDragger = new aF(this.startWorkspace_), this.workspaceDragger.startDrag())
                        }
                        updateIsDragging() {
                            if (this.calledUpdateIsDragging) throw Error("updateIsDragging_ should only be called once per gesture.");
                            this.calledUpdateIsDragging = !0, this.updateIsDraggingBubble() || this.updateIsDraggingBlock() || this.updateIsDraggingWorkspace()
                        }
                        startDraggingBlock() {
                            this.blockDragger = new(T(c.BLOCK_DRAGGER, this.creatorWorkspace.options, !0))(this.targetBlock, this.startWorkspace_), this.blockDragger.startDrag(this.currentDragDeltaXY, this.healStack), this.blockDragger.drag(this.mostRecentEvent, this.currentDragDeltaXY)
                        }
                        startDraggingBubble() {
                            if (!this.startBubble) throw Error("Cannot update dragging the bubble because the start bubble is undefined");
                            if (!this.startWorkspace_) throw Error("Cannot update dragging the bubble because the start workspace is undefined");
                            this.bubbleDragger = new am(this.startBubble, this.startWorkspace_), this.bubbleDragger.startBubbleDrag(), this.bubbleDragger.dragBubble(this.mostRecentEvent, this.currentDragDeltaXY)
                        }
                        doStart(t) {
                            if (!this.startWorkspace_) throw Error("Cannot start the touch gesture becauase the start workspace is undefined");
                            this.isPinchZoomEnabled = this.startWorkspace_.options.zoomOptions && this.startWorkspace_.options.zoomOptions.pinch, ts(t) ? this.cancel() : (this.gestureHasStarted = !0, iq(), this.startWorkspace_.updateScreenCalculationsIfScrolled(), this.startWorkspace_.isMutator && this.startWorkspace_.resize(), this.currentDropdownOwner = iR(), this.startWorkspace_.hideChaff(!!this.flyout), this.startWorkspace_.markFocused(), this.mostRecentEvent = t, sr(), this.targetBlock && this.targetBlock.select(), to(t) ? this.handleRightClick(t) : ("pointerdown" === t.type.toLowerCase() && "mouse" !== t.pointerType && K(t, this), this.mouseDownXY = new n3(t.clientX, t.clientY), this.healStack = t.altKey || t.ctrlKey || t.metaKey, this.bindMouseEvents(t), this.isEnding_ || this.handleTouchStart(t)))
                        }
                        bindMouseEvents(t) {
                            this.boundEvents.push(tt(document, "pointerdown", null, this.handleStart.bind(this), !0)), this.boundEvents.push(tt(document, "pointermove", null, this.handleMove.bind(this), !0)), this.boundEvents.push(tt(document, "pointerup", null, this.handleUp.bind(this), !0)), t.preventDefault(), t.stopPropagation()
                        }
                        handleStart(t) {
                            this.isDragging() || (this.handleTouchStart(t), this.isMultiTouch() && J())
                        }
                        handleMove(t) {
                            this.isDragging() && Z(t) || !this.isMultiTouch() ? (this.updateFromEvent(t), this.workspaceDragger ? this.workspaceDragger.drag(this.currentDragDeltaXY) : this.blockDragger ? this.blockDragger.drag(this.mostRecentEvent, this.currentDragDeltaXY) : this.bubbleDragger && this.bubbleDragger.dragBubble(this.mostRecentEvent, this.currentDragDeltaXY), t.preventDefault(), t.stopPropagation()) : this.isMultiTouch() && (this.handleTouchMove(t), J())
                        }
                        handleUp(t) {
                            if (this.isDragging() || this.handleTouchEnd(t), !this.isMultiTouch() || this.isDragging()) {
                                if (!Z(t)) return;
                                if (this.updateFromEvent(t), J(), this.isEnding_) {
                                    console.log("Trying to end a gesture recursively.");
                                    return
                                }
                                this.isEnding_ = !0, this.bubbleDragger ? this.bubbleDragger.endBubbleDrag(t, this.currentDragDeltaXY) : this.blockDragger ? this.blockDragger.endDrag(t, this.currentDragDeltaXY) : this.workspaceDragger ? this.workspaceDragger.endDrag(this.currentDragDeltaXY) : this.isBubbleClick() ? this.doBubbleClick() : this.isFieldClick() ? this.doFieldClick() : this.isIconClick() ? this.doIconClick() : this.isBlockClick() ? this.doBlockClick() : this.isWorkspaceClick() && this.doWorkspaceClick(t)
                            }
                            t.preventDefault(), t.stopPropagation(), this.dispose()
                        }
                        handleTouchStart(t) {
                            var e = q(t);
                            this.cachedPoints.set(e, this.getTouchPoint(t));
                            var i = Array.from(this.cachedPoints.keys());
                            2 === i.length && (e = this.cachedPoints.get(i[0]), i = this.cachedPoints.get(i[1]), this.startDistance = n3.distance(e, i), this.isMultiTouch_ = !0, t.preventDefault())
                        }
                        handleTouchMove(t) {
                            let e = q(t);
                            this.cachedPoints.set(e, this.getTouchPoint(t)), this.isPinchZoomEnabled && 2 === this.cachedPoints.size ? this.handlePinch(t) : this.handleMove(t)
                        }
                        handlePinch(t) {
                            var e = Array.from(this.cachedPoints.keys()),
                                i = this.cachedPoints.get(e[0]);
                            if (e = this.cachedPoints.get(e[1]), i = n3.distance(i, e) / this.startDistance, 0 < this.previousScale && 1 / 0 > this.previousScale) {
                                if (e = 0 < (e = i - this.previousScale) ? 5 * e : 6 * e, !this.startWorkspace_) throw Error("Cannot handle a pinch because the start workspace is undefined");
                                let s = this.startWorkspace_,
                                    o = tn(t, s.getParentSvg(), s.getInverseScreenCTM());
                                s.zoom(o.x, o.y, e)
                            }
                            this.previousScale = i, t.preventDefault()
                        }
                        handleTouchEnd(t) {
                            t = q(t), this.cachedPoints.has(t) && this.cachedPoints.delete(t), 2 > this.cachedPoints.size && (this.cachedPoints.clear(), this.previousScale = 0)
                        }
                        getTouchPoint(t) {
                            return this.startWorkspace_ ? new n3(t.pageX, t.pageY) : null
                        }
                        isMultiTouch() {
                            return this.isMultiTouch_
                        }
                        cancel() {
                            this.isEnding_ || (J(), this.bubbleDragger ? this.bubbleDragger.endBubbleDrag(this.mostRecentEvent, this.currentDragDeltaXY) : this.blockDragger ? this.blockDragger.endDrag(this.mostRecentEvent, this.currentDragDeltaXY) : this.workspaceDragger && this.workspaceDragger.endDrag(this.currentDragDeltaXY), this.dispose())
                        }
                        handleRightClick(t) {
                            this.targetBlock ? (this.bringBlockToFront(), this.targetBlock.workspace.hideChaff(!!this.flyout), this.targetBlock.showContextMenu(t)) : this.startBubble ? this.startBubble.showContextMenu(t) : this.startWorkspace_ && !this.flyout && (this.startWorkspace_.hideChaff(), this.startWorkspace_.showContextMenu(t)), t.preventDefault(), t.stopPropagation(), this.dispose()
                        }
                        handleWsStart(t, e) {
                            if (this.gestureHasStarted) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
                            this.setStartWorkspace(e), this.mostRecentEvent = t, this.doStart(t)
                        }
                        fireWorkspaceClick(t) {
                            F(new(X(np))(null, t.id, "workspace"))
                        }
                        handleFlyoutStart(t, e) {
                            if (this.gestureHasStarted) throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
                            this.setStartFlyout(e), this.handleWsStart(t, e.getWorkspace())
                        }
                        handleBlockStart(t, e) {
                            if (this.gestureHasStarted) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
                            this.setStartBlock(e), this.mostRecentEvent = t
                        }
                        handleBubbleStart(t, e) {
                            if (this.gestureHasStarted) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
                            this.setStartBubble(e), this.mostRecentEvent = t
                        }
                        doBubbleClick() {
                            this.startBubble instanceof r3 && (this.startBubble.setFocus(), this.startBubble.select())
                        }
                        doFieldClick() {
                            if (!this.startField) throw Error("Cannot do a field click because the start field is undefined");
                            this.currentDropdownOwner !== this.startField && this.startField.showEditor(this.mostRecentEvent), this.bringBlockToFront()
                        }
                        doIconClick() {
                            if (!this.startIcon) throw Error("Cannot do an icon click because the start icon is undefined");
                            this.bringBlockToFront(), this.startIcon.onClick()
                        }
                        doBlockClick() {
                            if (this.flyout && this.flyout.autoClose) {
                                if (!this.targetBlock) throw Error("Cannot do a block click because the target block is undefined");
                                this.targetBlock.isEnabled() && (r.getGroup$$module$build$src$core$events$utils() || r.setGroup$$module$build$src$core$events$utils(!0), this.flyout.createBlock(this.targetBlock).scheduleSnapAndBump())
                            } else {
                                if (!this.startWorkspace_) throw Error("Cannot do a block click because the start workspace is undefined");
                                let t = new(X(np))(this.startBlock, this.startWorkspace_.id, "block");
                                F(t)
                            }
                            this.bringBlockToFront(), r.setGroup$$module$build$src$core$events$utils(!1)
                        }
                        doWorkspaceClick(t) {
                            t = this.creatorWorkspace, I() && I().unselect(), this.fireWorkspaceClick(this.startWorkspace_ || t)
                        }
                        bringBlockToFront() {
                            this.targetBlock && !this.flyout && this.targetBlock.bringToFront()
                        }
                        setStartField(t) {
                            if (this.gestureHasStarted) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
                            this.startField || (this.startField = t)
                        }
                        setStartIcon(t) {
                            if (this.gestureHasStarted) throw Error("Tried to call gesture.setStartIcon, but the gesture had already been started.");
                            this.startIcon || (this.startIcon = t)
                        }
                        setStartBubble(t) {
                            this.startBubble || (this.startBubble = t)
                        }
                        setStartBlock(t) {
                            this.startBlock || this.startBubble || (this.startBlock = t, t.isInFlyout && t !== t.getRootBlock() ? this.setTargetBlock(t.getRootBlock()) : this.setTargetBlock(t))
                        }
                        setTargetBlock(t) {
                            t.isShadow() ? this.setTargetBlock(t.getParent()) : this.targetBlock = t
                        }
                        setStartWorkspace(t) {
                            this.startWorkspace_ || (this.startWorkspace_ = t)
                        }
                        setStartFlyout(t) {
                            this.flyout || (this.flyout = t)
                        }
                        isBubbleClick() {
                            return !!this.startBubble && !this.hasExceededDragRadius
                        }
                        isBlockClick() {
                            return !!this.startBlock && !this.hasExceededDragRadius && !this.isFieldClick() && !this.isIconClick()
                        }
                        isFieldClick() {
                            return !!this.startField && this.startField.isClickable() && !this.hasExceededDragRadius && (!this.flyout || this.startField.isClickableInFlyout(this.flyout.autoClose))
                        }
                        isIconClick() {
                            if (!this.startIcon) return !1;
                            let t = !this.flyout || !this.startIcon.isClickableInFlyout || this.startIcon.isClickableInFlyout(this.flyout.autoClose);
                            return !this.hasExceededDragRadius && t
                        }
                        isWorkspaceClick() {
                            return !this.startBlock && !this.startBubble && !this.startField && !this.hasExceededDragRadius
                        }
                        isDragging() {
                            return !!this.workspaceDragger || !!this.blockDragger || !!this.bubbleDragger
                        }
                        hasStarted() {
                            return this.gestureHasStarted
                        }
                        getInsertionMarkers() {
                            return this.blockDragger ? this.blockDragger.getInsertionMarkers() : []
                        }
                        getCurrentDragger() {
                            let t, e;
                            return null != (e = null != (t = this.blockDragger) ? t : this.workspaceDragger) ? e : this.bubbleDragger
                        }
                        static inProgress() {
                            let t = w();
                            for (let e = 0, i; i = t[e]; e++)
                                if (i.currentGesture_) return !0;
                            return !1
                        }
                    },
                    aG = class {
                        constructor(t, e) {
                            let i, s, o;
                            this.pattern = t, this.spacing = null != (i = e.spacing) ? i : 0, this.length = null != (s = e.length) ? s : 1, this.line2 = (this.line1 = t.firstChild) && this.line1.nextSibling, this.snapToGrid = null != (o = e.snap) && o
                        }
                        shouldSnap() {
                            return this.snapToGrid
                        }
                        getSpacing() {
                            return this.spacing
                        }
                        getPatternId() {
                            return this.pattern.id
                        }
                        update(t) {
                            var e = this.spacing * t;
                            this.pattern.setAttribute("width", `${e}`), this.pattern.setAttribute("height", `${e}`);
                            let i = (e = Math.floor(this.spacing / 2) + .5) - this.length / 2,
                                s = e + this.length / 2;
                            e *= t, i *= t, s *= t, this.setLineAttributes(this.line1, t, i, s, e, e), this.setLineAttributes(this.line2, t, e, e, i, s)
                        }
                        setLineAttributes(t, e, i, s, o, n) {
                            t && (t.setAttribute("stroke-width", `${e}`), t.setAttribute("x1", `${i}`), t.setAttribute("y1", `${o}`), t.setAttribute("x2", `${s}`), t.setAttribute("y2", `${n}`))
                        }
                        moveTo(t, e) {
                            this.pattern.setAttribute("x", `${t}`), this.pattern.setAttribute("y", `${e}`)
                        }
                        static createDom(t, e, i) {
                            let s, o;
                            if (t = tu(rp.PATTERN, {
                                    id: "blocklyGridPattern" + t,
                                    patternUnits: "userSpaceOnUse"
                                }, i), 0 < (null != (s = e.length) ? s : 1) && 0 < (null != (o = e.spacing) ? o : 0)) {
                                let i;
                                tu(rp.LINE, {
                                    stroke: e.colour
                                }, t), null != (i = e.length) && i && tu(rp.LINE, {
                                    stroke: e.colour
                                }, t)
                            } else tu(rp.LINE, {}, t);
                            return t
                        }
                    },
                    aU = class {
                        constructor(t) {
                            this.workspace = t, this.cursorSvg_ = this.cursor_ = null, this.markers = new Map, this.markerSvg_ = null
                        }
                        registerMarker(t, e) {
                            this.markers.has(t) && this.unregisterMarker(t), e.setDrawer(this.workspace.getRenderer().makeMarkerDrawer(this.workspace, e)), this.setMarkerSvg(e.getDrawer().createDom()), this.markers.set(t, e)
                        }
                        unregisterMarker(t) {
                            let e = this.markers.get(t);
                            if (e) e.dispose(), this.markers.delete(t);
                            else throw Error("Marker with ID " + t + " does not exist. Can only unregister markers that exist.")
                        }
                        getCursor() {
                            return this.cursor_
                        }
                        getMarker(t) {
                            return this.markers.get(t) || null
                        }
                        setCursor(t) {
                            this.cursor_ && this.cursor_.getDrawer() && this.cursor_.getDrawer().dispose(), (this.cursor_ = t) && (t = this.workspace.getRenderer().makeMarkerDrawer(this.workspace, this.cursor_), this.cursor_.setDrawer(t), this.setCursorSvg(this.cursor_.getDrawer().createDom()))
                        }
                        setCursorSvg(t) {
                            t ? (this.workspace.getBlockCanvas().appendChild(t), this.cursorSvg_ = t) : this.cursorSvg_ = null
                        }
                        setMarkerSvg(t) {
                            t ? this.workspace.getBlockCanvas() && (this.cursorSvg_ ? this.workspace.getBlockCanvas().insertBefore(t, this.cursorSvg_) : this.workspace.getBlockCanvas().appendChild(t)) : this.markerSvg_ = null
                        }
                        updateMarkers() {
                            this.workspace.keyboardAccessibilityMode && this.cursorSvg_ && this.workspace.getCursor().draw()
                        }
                        dispose() {
                            let t = Object.keys(this.markers);
                            for (let e = 0, i; i = t[e]; e++) this.unregisterMarker(i);
                            this.markers.clear(), this.cursor_ && (this.cursor_.dispose(), this.cursor_ = null)
                        }
                    };
                aU.LOCAL_MARKER = "local_marker_1";
                var aW = {};
                aW.deepMerge = sd;
                var aV = class {
                        constructor(t, e, i, s) {
                            this.name = t, this.startHats = !1, this.blockStyles = e || Object.create(null), this.categoryStyles = i || Object.create(null), this.componentStyles = s || Object.create(null), this.fontStyle = Object.create(null), d(c.THEME, t, this, !0)
                        }
                        getClassName() {
                            return this.name + "-theme"
                        }
                        setBlockStyle(t, e) {
                            this.blockStyles[t] = e
                        }
                        setCategoryStyle(t, e) {
                            this.categoryStyles[t] = e
                        }
                        getComponentStyle(t) {
                            if (!(t = this.componentStyles[t])) return null;
                            if ("string" == typeof t) {
                                let e = this.getComponentStyle(t);
                                if (e) return e
                            }
                            return `${t}`
                        }
                        setComponentStyle(t, e) {
                            this.componentStyles[t] = e
                        }
                        setFontStyle(t) {
                            this.fontStyle = t
                        }
                        setStartHats(t) {
                            this.startHats = t
                        }
                        static defineTheme(t, e) {
                            t = t.toLowerCase();
                            let i = new aV(t),
                                s = e.base;
                            if (s) {
                                if ("string" == typeof s) {
                                    let t;
                                    s = null != (t = f(c.THEME, s)) ? t : void 0
                                }
                                s instanceof aV && (sd(i, s), i.name = t)
                            }
                            return sd(i.blockStyles, e.blockStyles), sd(i.categoryStyles, e.categoryStyles), sd(i.componentStyles, e.componentStyles), sd(i.fontStyle, e.fontStyle), null !== e.startHats && (i.startHats = e.startHats), i
                        }
                    },
                    az = new aV("classic", {
                        colour_blocks: {
                            colourPrimary: "20"
                        },
                        list_blocks: {
                            colourPrimary: "260"
                        },
                        logic_blocks: {
                            colourPrimary: "210"
                        },
                        loop_blocks: {
                            colourPrimary: "120"
                        },
                        math_blocks: {
                            colourPrimary: "230"
                        },
                        procedure_blocks: {
                            colourPrimary: "290"
                        },
                        text_blocks: {
                            colourPrimary: "160"
                        },
                        variable_blocks: {
                            colourPrimary: "330"
                        },
                        variable_dynamic_blocks: {
                            colourPrimary: "310"
                        },
                        hat_blocks: {
                            colourPrimary: "330",
                            hat: "cap"
                        }
                    }, {
                        colour_category: {
                            colour: "20"
                        },
                        list_category: {
                            colour: "260"
                        },
                        logic_category: {
                            colour: "210"
                        },
                        loop_category: {
                            colour: "120"
                        },
                        math_category: {
                            colour: "230"
                        },
                        procedure_category: {
                            colour: "290"
                        },
                        text_category: {
                            colour: "160"
                        },
                        variable_category: {
                            colour: "330"
                        },
                        variable_dynamic_category: {
                            colour: "310"
                        }
                    }),
                    aX = class {
                        constructor(t) {
                            let e, i, s;
                            this.gridPattern = null, this.getMetrics = this.setMetrics = void 0;
                            let o = null,
                                n = !1;
                            var r, l = !1,
                                a = !1,
                                h = !1,
                                c = !1,
                                u = !1;
                            let d = !!t.readOnly;
                            d || (n = tH(o = tB(null != (r = t.toolbox) ? r : null)), l = void 0 === (l = t.trashcan) ? n : l, a = void 0 === (a = t.collapse) ? n : a, h = void 0 === (h = t.comments) ? n : h, c = void 0 === (c = t.disable) ? n : c, u = void 0 === (u = t.sounds) || u), r = t.maxTrashcanContents, l ? void 0 === r && (r = 32) : r = 0;
                            let p = !!t.rtl,
                                g = t.horizontalLayout;
                            void 0 === g && (g = !1);
                            var b = "end" !== t.toolboxPosition;
                            b = g ? b ? rA.TOP : rA.BOTTOM : b === p ? rA.RIGHT : rA.LEFT;
                            let _ = t.css;
                            void 0 === _ && (_ = !0);
                            let m = "https://blockly-demo.appspot.com/static/media/";
                            t.media ? m = t.media.endsWith("/") ? t.media : t.media + "/" : "path" in t && (tc("path", "Nov 2014", "Jul 2023", "media"), m = t.path + "media/");
                            let f = t.oneBasedIndex,
                                E = t.renderer || "geras",
                                T = t.plugins || {},
                                k = t.modalInputs;
                            void 0 === k && (k = !0), this.RTL = p, this.oneBasedIndex = void 0 === f || f, this.collapse = a, this.comments = h, this.disable = c, this.readOnly = d, this.maxBlocks = t.maxBlocks || 1 / 0, this.maxInstances = null != (e = t.maxInstances) ? e : null, this.modalInputs = k, this.pathToMedia = m, this.hasCategories = n, this.moveOptions = aX.parseMoveOptions_(t, n), this.hasScrollbars = !!this.moveOptions.scrollbars, this.hasTrashcan = l, this.maxTrashcanContents = r, this.hasSounds = u, this.hasCss = _, this.horizontalLayout = g, this.languageTree = o, this.gridOptions = aX.parseGridOptions_(t), this.zoomOptions = aX.parseZoomOptions_(t), this.toolboxPosition = b, this.theme = aX.parseThemeOptions_(t), this.renderer = E, this.rendererOverrides = null != (i = t.rendererOverrides) ? i : null, this.parentWorkspace = null != (s = t.parentWorkspace) ? s : null, this.plugins = T
                        }
                        static parseMoveOptions_(t, e) {
                            let i = t.move || {},
                                s = {};
                            return void 0 === i.scrollbars && void 0 === t.scrollbars ? s.scrollbars = e : "object" == typeof i.scrollbars ? (s.scrollbars = {
                                horizontal: !!i.scrollbars.horizontal,
                                vertical: !!i.scrollbars.vertical
                            }, s.scrollbars.horizontal && s.scrollbars.vertical ? s.scrollbars = !0 : s.scrollbars.horizontal || s.scrollbars.vertical || (s.scrollbars = !1)) : s.scrollbars = !!i.scrollbars || !!t.scrollbars, s.wheel = s.scrollbars && void 0 !== i.wheel ? !!i.wheel : "object" == typeof s.scrollbars, s.drag = !!s.scrollbars && (void 0 === i.drag || !!i.drag), s
                        }
                        static parseZoomOptions_(t) {
                            t = t.zoom || {};
                            let e = {};
                            return e.controls = void 0 !== t.controls && !!t.controls, e.wheel = void 0 !== t.wheel && !!t.wheel, e.startScale = void 0 === t.startScale ? 1 : Number(t.startScale), e.maxScale = void 0 === t.maxScale ? 3 : Number(t.maxScale), e.minScale = void 0 === t.minScale ? .3 : Number(t.minScale), e.scaleSpeed = void 0 === t.scaleSpeed ? 1.2 : Number(t.scaleSpeed), e.pinch = void 0 === t.pinch ? e.wheel || e.controls : !!t.pinch, e
                        }
                        static parseGridOptions_(t) {
                            t = t.grid || {};
                            let e = {};
                            return e.spacing = Number(t.spacing) || 0, e.colour = t.colour || "#888", e.length = void 0 === t.length ? 1 : Number(t.length), e.snap = 0 < e.spacing && !!t.snap, e
                        }
                        static parseThemeOptions_(t) {
                            return "string" == typeof (t = t.theme || az) ? f(c.THEME, t) : t instanceof aV ? t : aV.defineTheme(t.name || "builtin" + L(), t)
                        }
                    },
                    aY = class extends lu {
                        constructor(t, e, i, s, o) {
                            super(t), this.type = r.CHANGE$$module$build$src$core$events$utils, t && (this.element = e, this.name = i || void 0, this.oldValue = s, this.newValue = o)
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.element) throw Error("The changed element is undefined. Either pass an element to the constructor, or call fromJson");
                            return t.element = this.element, t.name = this.name, t.oldValue = this.oldValue, t.newValue = this.newValue, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new aY)).element = t.element, e.name = t.name, e.oldValue = t.oldValue, e.newValue = t.newValue, e
                        }
                        isNull() {
                            return this.oldValue === this.newValue
                        }
                        run(t) {
                            var e = this.getEventWorkspace_();
                            if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
                            if (!(e = e.getBlockById(this.blockId))) throw Error("The associated block is undefined. Either pass a block to the constructor, or call fromJson");
                            var i = e.getIcon(rF.MUTATOR);
                            switch (i && sp(i) && i.bubbleIsVisible() && i.setBubbleVisible(!1), t = t ? this.newValue : this.oldValue, this.element) {
                                case "field":
                                    (e = e.getField(this.name)) ? e.setValue(t): console.warn("Can't set non-existent field: " + this.name);
                                    break;
                                case "comment":
                                    e.setCommentText(t || null);
                                    break;
                                case "collapsed":
                                    e.setCollapsed(!!t);
                                    break;
                                case "disabled":
                                    e.setEnabled(!t);
                                    break;
                                case "inline":
                                    e.setInputsInline(!!t);
                                    break;
                                case "mutation":
                                    i = aY.getExtraBlockState_(e), e.loadExtraState ? e.loadExtraState(JSON.parse(t || "{}")) : e.domToMutation && e.domToMutation(r.textToDom$$module$build$src$core$utils$xml(t || "<mutation/>")), F(new aY(e, "mutation", null, i, t));
                                    break;
                                default:
                                    console.warn("Unknown change type: " + this.element)
                            }
                        }
                        static getExtraBlockState_(t) {
                            return t.saveExtraState ? (t = t.saveExtraState(!0)) ? JSON.stringify(t) : "" : t.mutationToDom && (t = t.mutationToDom()) ? eT(t) : ""
                        }
                    };
                d(c.EVENT, r.CHANGE$$module$build$src$core$events$utils, aY);
                var aK = .45,
                    aJ = .65,
                    aj = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00"
                    },
                    aZ = {};
                aZ.blend = sw, aZ.getHsvSaturation = sg, aZ.getHsvValue = s_, aZ.hexToRgb = sT, aZ.hsvToHex = sk, aZ.hueToHex = sy, aZ.names = aj, aZ.parse = sf, aZ.rgbToHex = sE, aZ.setHsvSaturation = sb, aZ.setHsvValue = sm;
                var aq = {};
                aq.checkMessageReferences = function (t) {
                    let e = !0,
                        i = r.Msg$$module$build$src$core$msg,
                        s = t.match(/%{BKY_[A-Z]\w*}/gi);
                    if (s)
                        for (let o = 0; o < s.length; o++) {
                            let n = s[o].toUpperCase();
                            void 0 === i[n.slice(6, -1)] && (console.warn("No message string for " + s[o] + " in " + t), e = !1)
                        }
                    return e
                }, aq.parseBlockColour = sI, aq.replaceMessageReferences = sv, aq.tokenizeInterpolation = sC;
                var aQ = class {
                    constructor(t, e, i) {
                        this.DEFAULT_VALUE = null, this.name = void 0, this.constants_ = this.mouseDownWrapper_ = this.textContent_ = this.textElement_ = this.borderRect_ = this.fieldGroup_ = this.markerSvg_ = this.cursorSvg_ = this.tooltip_ = this.validator_ = null, this.disposed = !1, this.maxDisplayLength = 50, this.sourceBlock_ = null, this.enabled_ = this.visible_ = this.isDirty_ = !0, this.suffixField = this.prefixField = this.clickTarget_ = null, this.EDITABLE = !0, this.SERIALIZABLE = !1, this.CURSOR = "", this.value_ = "DEFAULT_VALUE" in new.target.prototype ? new.target.prototype.DEFAULT_VALUE : this.DEFAULT_VALUE, this.size_ = new rb(0, 0), t !== aQ.SKIP_SETUP && (i && this.configure_(i), this.setValue(t), e && this.setValidator(e))
                    }
                    configure_(t) {
                        t.tooltip && this.setTooltip(sv(t.tooltip))
                    }
                    setSourceBlock(t) {
                        if (this.sourceBlock_) throw Error("Field already bound to a block");
                        this.sourceBlock_ = t
                    }
                    getConstants() {
                        return !this.constants_ && this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying() && this.sourceBlock_.workspace.rendered && (this.constants_ = this.sourceBlock_.workspace.getRenderer().getConstants()), this.constants_
                    }
                    getSourceBlock() {
                        return this.sourceBlock_
                    }
                    init() {
                        this.fieldGroup_ || (this.fieldGroup_ = tu(rp.G, {}), this.isVisible() || (this.fieldGroup_.style.display = "none"), this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_), this.initView(), this.updateEditable(), this.setTooltip(this.tooltip_), this.bindEvents_(), this.initModel())
                    }
                    initView() {
                        this.createBorderRect_(), this.createTextElement_()
                    }
                    initModel() {}
                    isFullBlockField() {
                        return !this.borderRect_
                    }
                    createBorderRect_() {
                        this.borderRect_ = tu(rp.RECT, {
                            rx: this.getConstants().FIELD_BORDER_RECT_RADIUS,
                            ry: this.getConstants().FIELD_BORDER_RECT_RADIUS,
                            x: 0,
                            y: 0,
                            height: this.size_.height,
                            width: this.size_.width,
                            class: "blocklyFieldRect"
                        }, this.fieldGroup_)
                    }
                    createTextElement_() {
                        this.textElement_ = tu(rp.TEXT, {
                            class: "blocklyText"
                        }, this.fieldGroup_), this.getConstants().FIELD_TEXT_BASELINE_CENTER && this.textElement_.setAttribute("dominant-baseline", "central"), this.textContent_ = document.createTextNode(""), this.textElement_.appendChild(this.textContent_)
                    }
                    bindEvents_() {
                        let t = this.getClickTarget_();
                        if (!t) throw Error("A click target has not been set.");
                        i7(t), this.mouseDownWrapper_ = tt(t, "pointerdown", this, this.onMouseDown_)
                    }
                    fromXml(t) {
                        this.setValue(t.textContent)
                    }
                    toXml(t) {
                        return t.textContent = this.getValue(), t
                    }
                    saveState(t) {
                        return null !== (t = this.saveLegacyState(aQ)) ? t : this.getValue()
                    }
                    loadState(t) {
                        this.loadLegacyState(aQ, t) || this.setValue(t)
                    }
                    saveLegacyState(t) {
                        return t.prototype.saveState === this.saveState && t.prototype.toXml !== this.toXml ? ((t = r.createElement$$module$build$src$core$utils$xml("field")).setAttribute("name", this.name || ""), tL(this.toXml(t)).replace(' xmlns="https://developers.google.com/blockly/xml"', "")) : null
                    }
                    loadLegacyState(t, e) {
                        return t.prototype.loadState === this.loadState && t.prototype.fromXml !== this.fromXml && (this.fromXml(r.textToDom$$module$build$src$core$utils$xml(e)), !0)
                    }
                    dispose() {
                        let t;
                        iU(this), il(this), (null == (t = this.getSourceBlock()) ? 0 : t.isDeadOrDying()) || tb(this.fieldGroup_), this.disposed = !0
                    }
                    updateEditable() {
                        let t = this.fieldGroup_,
                            e = this.getSourceBlock();
                        this.EDITABLE && t && e && (this.enabled_ && e.isEditable() ? (td(t, "blocklyEditableText"), tg(t, "blocklyNonEditableText"), t.style.cursor = this.CURSOR) : (td(t, "blocklyNonEditableText"), tg(t, "blocklyEditableText"), t.style.cursor = ""))
                    }
                    setEnabled(t) {
                        this.enabled_ = t, this.updateEditable()
                    }
                    isEnabled() {
                        return this.enabled_
                    }
                    isClickable() {
                        return this.enabled_ && !!this.sourceBlock_ && this.sourceBlock_.isEditable() && this.showEditor_ !== aQ.prototype.showEditor_
                    }
                    isClickableInFlyout(t) {
                        return !t
                    }
                    isCurrentlyEditable() {
                        return this.enabled_ && this.EDITABLE && !!this.sourceBlock_ && this.sourceBlock_.isEditable()
                    }
                    isSerializable() {
                        let t = !1;
                        return this.name && (this.SERIALIZABLE ? t = !0 : this.EDITABLE && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), t = !0)), t
                    }
                    isVisible() {
                        return this.visible_
                    }
                    setVisible(t) {
                        if (this.visible_ !== t) {
                            this.visible_ = t;
                            var e = this.fieldGroup_;
                            e && (e.style.display = t ? "block" : "none")
                        }
                    }
                    setValidator(t) {
                        this.validator_ = t
                    }
                    getValidator() {
                        return this.validator_
                    }
                    getSvgRoot() {
                        return this.fieldGroup_
                    }
                    getBorderRect() {
                        if (!this.borderRect_) throw Error(`The border rectangle is ${this.borderRect_}.`);
                        return this.borderRect_
                    }
                    getTextElement() {
                        if (!this.textElement_) throw Error(`The text element is ${this.textElement_}.`);
                        return this.textElement_
                    }
                    getTextContent() {
                        if (!this.textContent_) throw Error(`The text content is ${this.textContent_}.`);
                        return this.textContent_
                    }
                    applyColour() {}
                    render_() {
                        this.textContent_ && (this.textContent_.nodeValue = this.getDisplayText_()), this.updateSize_()
                    }
                    showEditor(t) {
                        this.isClickable() && this.showEditor_(t)
                    }
                    showEditor_(t) {}
                    repositionForWindowResize() {
                        return !1
                    }
                    updateSize_(t) {
                        let e = this.getConstants(),
                            i = 2 * (t = void 0 !== t ? t : this.isFullBlockField() ? 0 : this.getConstants().FIELD_BORDER_RECT_X_PADDING),
                            s = e.FIELD_TEXT_HEIGHT,
                            o = 0;
                        this.textElement_ && (i += o = tT(this.textElement_, e.FIELD_TEXT_FONTSIZE, e.FIELD_TEXT_FONTWEIGHT, e.FIELD_TEXT_FONTFAMILY)), this.isFullBlockField() || (s = Math.max(s, e.FIELD_BORDER_RECT_HEIGHT)), this.size_.height = s, this.size_.width = i, this.positionTextElement_(t, o), this.positionBorderRect_()
                    }
                    positionTextElement_(t, e) {
                        if (this.textElement_) {
                            var i, s = this.getConstants(),
                                o = this.size_.height / 2;
                            this.textElement_.setAttribute("x", String((null == (i = this.getSourceBlock()) ? 0 : i.RTL) ? this.size_.width - e - t : t)), this.textElement_.setAttribute("y", String(s.FIELD_TEXT_BASELINE_CENTER ? o : o - s.FIELD_TEXT_HEIGHT / 2 + s.FIELD_TEXT_BASELINE))
                        }
                    }
                    positionBorderRect_() {
                        this.borderRect_ && (this.borderRect_.setAttribute("width", String(this.size_.width)), this.borderRect_.setAttribute("height", String(this.size_.height)), this.borderRect_.setAttribute("rx", String(this.getConstants().FIELD_BORDER_RECT_RADIUS)), this.borderRect_.setAttribute("ry", String(this.getConstants().FIELD_BORDER_RECT_RADIUS)))
                    }
                    getSize() {
                        return this.isVisible() ? (this.isDirty_ ? (this.render_(), this.isDirty_ = !1) : this.visible_ && 0 === this.size_.width && (this.render_(), 0 !== this.size_.width && console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead.")), this.size_) : new rb(0, 0)
                    }
                    getScaledBBox() {
                        let t;
                        var e = this.getSourceBlock();
                        if (!e) throw new a0;
                        if (this.isFullBlockField()) {
                            var i = this.sourceBlock_.getHeightWidth();
                            let s = e.workspace.scale;
                            t = this.getAbsoluteXY_(), e = (i.width + 1) * s, i = (i.height + 1) * s, nU ? (t.x += 1.5 * s, t.y += 1.5 * s) : (t.x -= .5 * s, t.y -= .5 * s)
                        } else i = this.borderRect_.getBoundingClientRect(), t = tv(this.borderRect_), e = i.width, i = i.height;
                        return new rg(t.y, t.y + i, t.x, t.x + e)
                    }
                    onLocationChange(t) {}
                    getDisplayText_() {
                        let t = this.getText();
                        return t ? (t.length > this.maxDisplayLength && (t = t.substring(0, this.maxDisplayLength - 2) + "…"), t = t.replace(/\s/g, aQ.NBSP), this.sourceBlock_ && this.sourceBlock_.RTL && (t += "‏"), t) : aQ.NBSP
                    }
                    getText() {
                        let t = this.getText_();
                        return null !== t ? String(t) : String(this.getValue())
                    }
                    getText_() {
                        return null
                    }
                    markDirty() {
                        this.isDirty_ = !0, this.constants_ = null
                    }
                    forceRerender() {
                        this.isDirty_ = !0, this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.queueRender(), this.sourceBlock_.bumpNeighbours())
                    }
                    setValue(t, e = !0) {
                        if (null !== t) {
                            var i, s = this.doClassValidation_(t);
                            !((t = this.processValidation_(t, s)) instanceof Error) && (s = null == (i = this.getValidator()) ? void 0 : i.call(this, t), (i = this.processValidation_(t, s)) instanceof Error || (t = this.sourceBlock_) && t.disposed || ((s = this.getValue()) === i ? this.doValueUpdate_(i) : (this.doValueUpdate_(i), e && t && W() && F(new(X(r.CHANGE$$module$build$src$core$events$utils))(t, "field", this.name || null, s, i)), this.isDirty_ && this.forceRerender())))
                        }
                    }
                    processValidation_(t, e) {
                        return null === e ? (this.doValueInvalid_(t), this.isDirty_ && this.forceRerender(), Error()) : void 0 === e ? t : e
                    }
                    getValue() {
                        return this.value_
                    }
                    doClassValidation_(t) {
                        return null == t ? null : t
                    }
                    doValueUpdate_(t) {
                        this.value_ = t, this.isDirty_ = !0
                    }
                    doValueInvalid_(t) {}
                    onMouseDown_(t) {
                        this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying() && (t = this.sourceBlock_.workspace.getGesture(t)) && t.setStartField(this)
                    }
                    setTooltip(t) {
                        t || "" === t || (t = this.sourceBlock_);
                        let e = this.getClickTarget_();
                        e ? e.tooltip = t : this.tooltip_ = t
                    }
                    getTooltip() {
                        let t = this.getClickTarget_();
                        return t ? i9(t) : i9({
                            tooltip: this.tooltip_
                        })
                    }
                    getClickTarget_() {
                        return this.clickTarget_ || this.getSvgRoot()
                    }
                    getAbsoluteXY_() {
                        return tv(this.getClickTarget_())
                    }
                    referencesVariables() {
                        return !1
                    }
                    refreshVariableName() {}
                    getParentInput() {
                        let t = null,
                            e = this.getSourceBlock();
                        if (!e) throw new a0;
                        let i = e.inputList;
                        for (let s = 0; s < e.inputList.length; s++) {
                            let e = i[s],
                                o = e.fieldRow;
                            for (let i = 0; i < o.length; i++)
                                if (o[i] === this) {
                                    t = e;
                                    break
                                }
                        }
                        return t
                    }
                    getFlipRtl() {
                        return !1
                    }
                    isTabNavigable() {
                        return !1
                    }
                    onShortcut(t) {
                        return !1
                    }
                    setCursorSvg(t) {
                        if (t) {
                            if (!this.fieldGroup_) throw Error(`The field group is ${this.fieldGroup_}.`);
                            this.fieldGroup_.appendChild(t), this.cursorSvg_ = t
                        } else this.cursorSvg_ = null
                    }
                    setMarkerSvg(t) {
                        if (t) {
                            if (!this.fieldGroup_) throw Error(`The field group is ${this.fieldGroup_}.`);
                            this.fieldGroup_.appendChild(t), this.markerSvg_ = t
                        } else this.markerSvg_ = null
                    }
                    updateMarkers_() {
                        var t = this.getSourceBlock();
                        if (!t) throw new a0;
                        (t = t.workspace).keyboardAccessibilityMode && this.cursorSvg_ && t.getCursor().draw(), t.keyboardAccessibilityMode && this.markerSvg_ && t.getMarker(aU.LOCAL_MARKER).draw()
                    }
                };
                aQ.NBSP = "\xa0", aQ.SKIP_SETUP = Symbol("SKIP_SETUP");
                var a0 = class extends Error {
                        constructor() {
                            super("The field has not yet been attached to its input. Call appendField to attach it.")
                        }
                    },
                    a1 = {};
                a1.Field = aQ, a1.UnattachedFieldError = a0, r.Names$$module$build$src$core$names = class {
                    constructor(t, e) {
                        this.db = new Map, this.dbReverse = new Set, this.variableMap = null, this.variablePrefix = e || "", this.reservedWords = new Set(t ? t.split(",") : [])
                    }
                    reset() {
                        this.db.clear(), this.dbReverse.clear(), this.variableMap = null
                    }
                    setVariableMap(t) {
                        this.variableMap = t
                    }
                    getNameForUserVariable(t) {
                        return this.variableMap ? (t = this.variableMap.getVariableById(t)) ? t.name : null : (console.warn("Deprecated call to Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.nameDB_.setVariableMap(workspace.getVariableMap());"), null)
                    }
                    populateVariables(t) {
                        t = r.allUsedVarModels$$module$build$src$core$variables(t);
                        for (let e = 0; e < t.length; e++) this.getName(t[e].getId(), r.NameType$$module$build$src$core$names.VARIABLE)
                    }
                    populateProcedures(t) {
                        throw Error("The implementation of populateProcedures should be monkey-patched in by blockly.ts")
                    }
                    getName(t, e) {
                        let i = t;
                        e === r.NameType$$module$build$src$core$names.VARIABLE && (t = this.getNameForUserVariable(t)) && (i = t), t = i.toLowerCase();
                        let s = e === r.NameType$$module$build$src$core$names.VARIABLE || e === r.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE ? this.variablePrefix : "";
                        this.db.has(e) || this.db.set(e, new Map);
                        let o = this.db.get(e);
                        return o.has(t) ? s + o.get(t) : (e = this.getDistinctName(i, e), o.set(t, e.substr(s.length)), e)
                    }
                    getUserNames(t) {
                        let e;
                        return (t = null == (e = this.db.get(t)) ? void 0 : e.keys()) ? Array.from(t) : []
                    }
                    getDistinctName(t, e) {
                        let i;
                        t = this.safeName(t);
                        let s = null,
                            o, n;
                        for (; this.dbReverse.has(t + (null != (o = s) ? o : "")) || this.reservedWords.has(t + (null != (n = s) ? n : ""));) s = s ? s + 1 : 2;
                        return t += null != (i = s) ? i : "", this.dbReverse.add(t), (e === r.NameType$$module$build$src$core$names.VARIABLE || e === r.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE ? this.variablePrefix : "") + t
                    }
                    safeName(t) {
                        return t ? (t = encodeURI(t.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 !== "0123456789".indexOf(t[0]) && (t = "my_" + t)) : t = r.Msg$$module$build$src$core$msg.UNNAMED_KEY || "unnamed", t
                    }
                    static equals(t, e) {
                        return t.toLowerCase() === e.toLowerCase()
                    }
                }, (a4 = (a4 = r.Names$$module$build$src$core$names || (r.Names$$module$build$src$core$names = {})).NameType || (a4.NameType = {})).DEVELOPER_VARIABLE = "DEVELOPER_VARIABLE", a4.VARIABLE = "VARIABLE", a4.PROCEDURE = "PROCEDURE", r.NameType$$module$build$src$core$names = r.Names$$module$build$src$core$names.NameType, r.Names$$module$build$src$core$names.DEVELOPER_VARIABLE_TYPE = r.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE, ({
                    NameType: r.NameType$$module$build$src$core$names
                }).Names = r.Names$$module$build$src$core$names;
                var a2 = class extends Map {
                        constructor() {
                            super()
                        }
                        set(t, e) {
                            return this.get(t) === e || (super.set(t, e), sR(e) && e.startPublishing()), this
                        }
                        delete(t) {
                            let e = this.get(t);
                            return (t = super.delete(t)) && sR(e) && e.stopPublishing(), t
                        }
                        clear() {
                            if (this.size)
                                for (let t of this.keys()) this.delete(t)
                        }
                        add(t) {
                            return this.set(t.getId(), t)
                        }
                        getProcedures() {
                            return [...this.values()]
                        }
                    },
                    a3 = class {
                        constructor(t) {
                            this.sourceBlock = t, this.offsetInBlock = new n3(0, 0), this.workspaceLocation = new n3(0, 0), this.svgRoot = null, this.tooltip = t
                        }
                        getType() {
                            throw Error("Icons must implement getType")
                        }
                        initView(t) {
                            if (!this.svgRoot) {
                                var e = this.sourceBlock;
                                this.svgRoot = tu(rp.G, {
                                    class: "blocklyIconGroup"
                                }), e.getSvgRoot().appendChild(this.svgRoot), this.updateSvgRootOffset(), tt(this.svgRoot, "pointerdown", this, t), this.svgRoot.tooltip = this, i7(this.svgRoot)
                            }
                        }
                        dispose() {
                            st(this.svgRoot), tb(this.svgRoot)
                        }
                        getWeight() {
                            return -1
                        }
                        getSize() {
                            return new rb(0, 0)
                        }
                        setTooltip(t) {
                            this.tooltip = null != t ? t : this.sourceBlock
                        }
                        getTooltip() {
                            return this.tooltip
                        }
                        applyColour() {}
                        updateEditable() {}
                        updateCollapsed() {
                            this.svgRoot && (this.sourceBlock.isCollapsed() ? this.svgRoot.style.display = "none" : this.svgRoot.style.display = "block", sp(this) && this.setBubbleVisible(!1))
                        }
                        hideForInsertionMarker() {
                            this.svgRoot && (this.svgRoot.style.display = "none")
                        }
                        isShownWhenCollapsed() {
                            return !1
                        }
                        setOffsetInBlock(t) {
                            this.offsetInBlock = t, this.updateSvgRootOffset()
                        }
                        updateSvgRootOffset() {
                            let t;
                            null == (t = this.svgRoot) || t.setAttribute("transform", `translate(${this.offsetInBlock.x}, ${this.offsetInBlock.y})`)
                        }
                        onLocationChange(t) {
                            this.workspaceLocation = n3.sum(t, this.offsetInBlock)
                        }
                        onClick() {}
                        isClickableInFlyout(t) {
                            return !0
                        }
                        setVisible(t) {
                            tc("setVisible", "v10", "v11", "setBubbleVisible"), sp(this) && this.setBubbleVisible(t)
                        }
                    },
                    a5 = {
                        fromJsonInternal: function (t) {
                            let e = f(c.FIELD, t.type);
                            if (e) {
                                if ("function" != typeof e.fromJson) throw TypeError("returned Field was not a IRegistrableField");
                                return e.fromJson(t)
                            }
                            return console.warn("Blockly could not create a field of type " + t.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null
                        }
                    },
                    a6 = {
                        TEST_ONLY: a5
                    };
                a6.fromJson = r.fromJson$$module$build$src$core$field_registry, a6.register = sD, a6.unregister = function (t) {
                    g(c.FIELD, t)
                };
                var a9 = class extends aQ {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.svgArrow = this.arrow = this.imageElement = this.menu_ = this.selectedMenuItem = null, this.SERIALIZABLE = !0, this.CURSOR = "default", this.clickTarget_ = this.suffixField = this.prefixField = this.generatedOptions = null, t !== aQ.SKIP_SETUP && (Array.isArray(t) ? (sO(t), t = sA(t), this.menuGenerator_ = t.options, this.prefixField = t.prefix || null, this.suffixField = t.suffix || null) : this.menuGenerator_ = t, this.selectedOption = this.getOptions(!1)[0], i && this.configure_(i), this.setValue(this.selectedOption[1]), e && this.setValidator(e))
                    }
                    fromXml(t) {
                        this.isOptionListDynamic() && this.getOptions(!1), this.setValue(t.textContent)
                    }
                    loadState(t) {
                        this.loadLegacyState(a9, t) || (this.isOptionListDynamic() && this.getOptions(!1), this.setValue(t))
                    }
                    initView() {
                        this.shouldAddBorderRect_() ? this.createBorderRect_() : this.clickTarget_ = this.sourceBlock_.getSvgRoot(), this.createTextElement_(), this.imageElement = tu(rp.IMAGE, {}, this.fieldGroup_), this.getConstants().FIELD_DROPDOWN_SVG_ARROW ? this.createSVGArrow_() : this.createTextArrow_(), this.borderRect_ && td(this.borderRect_, "blocklyDropdownRect")
                    }
                    shouldAddBorderRect_() {
                        let t;
                        return !this.getConstants().FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW || this.getConstants().FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW && !(null == (t = this.getSourceBlock()) ? 0 : t.isShadow())
                    }
                    createTextArrow_() {
                        let t, e;
                        this.arrow = tu(rp.TSPAN, {}, this.textElement_), this.arrow.appendChild(document.createTextNode((null == (t = this.getSourceBlock()) ? 0 : t.RTL) ? a9.ARROW_CHAR + " " : " " + a9.ARROW_CHAR)), (null == (e = this.getSourceBlock()) ? 0 : e.RTL) ? this.getTextElement().insertBefore(this.arrow, this.textContent_) : this.getTextElement().appendChild(this.arrow)
                    }
                    createSVGArrow_() {
                        this.svgArrow = tu(rp.IMAGE, {
                            height: this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE + "px",
                            width: this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE + "px"
                        }, this.fieldGroup_), this.svgArrow.setAttributeNS(ra, "xlink:href", this.getConstants().FIELD_DROPDOWN_SVG_ARROW_DATAURI)
                    }
                    showEditor_(t) {
                        var e = this.getSourceBlock();
                        if (!e) throw new a0;
                        this.dropdownCreate(), this.menu_.openingCoords = t && "number" == typeof t.clientX ? new n3(t.clientX, t.clientY) : null, iA(), td(t = this.menu_.render(iD()), "blocklyDropdownMenu"), this.getConstants().FIELD_DROPDOWN_COLOURED_DIV && iN(e = e.getColour(), this.sourceBlock_.style.colourTertiary), iO(this, this.dropdownDispose_.bind(this)), this.menu_.focus(), this.selectedMenuItem && (this.menu_.setHighlighted(this.selectedMenuItem), tR(this.selectedMenuItem.getElement(), iD(), !0)), this.applyColour()
                    }
                    dropdownCreate() {
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        let e = new lW;
                        e.setRole(lL.LISTBOX), this.menu_ = e;
                        let i = this.getOptions(!1);
                        this.selectedMenuItem = null;
                        for (let o = 0; o < i.length; o++) {
                            let [n, r] = i[o];
                            if ("object" == typeof n) {
                                var s = new Image(n.width, n.height);
                                s.src = n.src, s.alt = n.alt || ""
                            } else s = n;
                            (s = new lV(s, r)).setRole(lL.OPTION), s.setRightToLeft(t.RTL), s.setCheckable(!0), e.addChild(s), s.setChecked(r === this.value_), r === this.value_ && (this.selectedMenuItem = s), s.onAction(this.handleMenuActionEvent, this)
                        }
                    }
                    dropdownDispose_() {
                        this.menu_ && this.menu_.dispose(), this.selectedMenuItem = this.menu_ = null, this.applyColour()
                    }
                    handleMenuActionEvent(t) {
                        iU(this, !0), this.onItemSelected_(this.menu_, t)
                    }
                    onItemSelected_(t, e) {
                        this.setValue(e.getValue())
                    }
                    isOptionListDynamic() {
                        return "function" == typeof this.menuGenerator_
                    }
                    getOptions(t) {
                        if (!this.menuGenerator_) throw TypeError("A menu generator was never defined.");
                        return Array.isArray(this.menuGenerator_) ? this.menuGenerator_ : (t && this.generatedOptions || (this.generatedOptions = this.menuGenerator_(), sO(this.generatedOptions)), this.generatedOptions)
                    }
                    doClassValidation_(t) {
                        return this.getOptions(!0).some(e => e[1] === t) ? t : (this.sourceBlock_ && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.sourceBlock_.type + ", Field name: " + this.name + ", Value: " + t), null)
                    }
                    doValueUpdate_(t) {
                        super.doValueUpdate_(t), t = this.getOptions(!0);
                        for (let e = 0, i; i = t[e]; e++) i[1] === this.value_ && (this.selectedOption = i)
                    }
                    applyColour() {
                        let t = this.sourceBlock_.style;
                        this.borderRect_ && (this.borderRect_.setAttribute("stroke", t.colourTertiary), this.menu_ ? this.borderRect_.setAttribute("fill", t.colourTertiary) : this.borderRect_.setAttribute("fill", "transparent")), this.sourceBlock_ && this.arrow && (this.sourceBlock_.isShadow() ? this.arrow.style.fill = t.colourSecondary : this.arrow.style.fill = t.colourPrimary)
                    }
                    render_() {
                        this.getTextContent().nodeValue = "", this.imageElement.style.display = "none";
                        let t = this.selectedOption && this.selectedOption[0];
                        t && "object" == typeof t ? this.renderSelectedImage(t) : this.renderSelectedText(), this.positionBorderRect_()
                    }
                    renderSelectedImage(t) {
                        let e;
                        let i = this.getSourceBlock();
                        if (!i) throw new a0;
                        this.imageElement.style.display = "", this.imageElement.setAttributeNS(ra, "xlink:href", t.src), this.imageElement.setAttribute("height", String(t.height)), this.imageElement.setAttribute("width", String(t.width));
                        let s = Number(t.height);
                        t = Number(t.width);
                        var o = !!this.borderRect_;
                        let n = Math.max(o ? this.getConstants().FIELD_DROPDOWN_BORDER_RECT_HEIGHT : 0, s + a8);
                        o = o ? this.getConstants().FIELD_BORDER_RECT_X_PADDING : 0, e = this.svgArrow ? this.positionSVGArrow(t + o, n / 2 - this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE / 2) : tT(this.arrow, this.getConstants().FIELD_TEXT_FONTSIZE, this.getConstants().FIELD_TEXT_FONTWEIGHT, this.getConstants().FIELD_TEXT_FONTFAMILY), this.size_.width = t + e + 2 * o, this.size_.height = n;
                        let r = 0;
                        i.RTL ? this.imageElement.setAttribute("x", `${o+e}`) : (r = t + e, this.getTextElement().setAttribute("text-anchor", "end"), this.imageElement.setAttribute("x", `${o}`)), this.imageElement.setAttribute("y", String(n / 2 - s / 2)), this.positionTextElement_(r + o, t + e)
                    }
                    renderSelectedText() {
                        this.getTextContent().nodeValue = this.getDisplayText_();
                        var t = this.getTextElement();
                        td(t, "blocklyDropdownText"), t.setAttribute("text-anchor", "start");
                        var e = !!this.borderRect_;
                        t = Math.max(e ? this.getConstants().FIELD_DROPDOWN_BORDER_RECT_HEIGHT : 0, this.getConstants().FIELD_TEXT_HEIGHT);
                        let i = tT(this.getTextElement(), this.getConstants().FIELD_TEXT_FONTSIZE, this.getConstants().FIELD_TEXT_FONTWEIGHT, this.getConstants().FIELD_TEXT_FONTFAMILY);
                        e = e ? this.getConstants().FIELD_BORDER_RECT_X_PADDING : 0;
                        let s = 0;
                        this.svgArrow && (s = this.positionSVGArrow(i + e, t / 2 - this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE / 2)), this.size_.width = i + s + 2 * e, this.size_.height = t, this.positionTextElement_(e, i)
                    }
                    positionSVGArrow(t, e) {
                        if (!this.svgArrow) return 0;
                        let i = this.getSourceBlock();
                        if (!i) throw new a0;
                        let s = this.borderRect_ ? this.getConstants().FIELD_BORDER_RECT_X_PADDING : 0,
                            o = this.getConstants().FIELD_DROPDOWN_SVG_ARROW_PADDING,
                            n = this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE;
                        return this.svgArrow.setAttribute("transform", "translate(" + (i.RTL ? s : t + o) + "," + e + ")"), n + o
                    }
                    getText_() {
                        if (!this.selectedOption) return null;
                        let t = this.selectedOption[0];
                        return "object" == typeof t ? t.alt : t
                    }
                    static fromJson(t) {
                        if (!t.options) throw Error("options are required for the dropdown field. The options property must be assigned an array of [humanReadableValue, languageNeutralValue] tuples.");
                        return new this(t.options, void 0, t)
                    }
                };
                a9.CHECKMARK_OVERHANG = 25, a9.MAX_MENU_HEIGHT_VH = .45, a9.ARROW_CHAR = "▾";
                var a8 = 10;
                sD("field_dropdown", a9);
                var a4, a7, ht = class {
                    constructor(t, e, i) {
                        this.workspace = t, this.anchor = e, this.ownerRect = i, this.size = new rb(0, 0), this.colour = "#ffffff", this.disposed = !1, this.relativeLeft = this.relativeTop = 0, this.svgRoot = tu(rp.G, {}, t.getBubbleCanvas()), t = tu(rp.G, {
                            filter: `url(#${this.workspace.getRenderer().getConstants().embossFilterId})`
                        }, this.svgRoot), this.tail = tu(rp.PATH, {}, t), this.background = tu(rp.RECT, {
                            class: "blocklyDraggable",
                            x: 0,
                            y: 0,
                            rx: a7.BORDER_WIDTH,
                            ry: a7.BORDER_WIDTH
                        }, t), this.contentContainer = tu(rp.G, {}, this.svgRoot), tt(this.background, "pointerdown", this, this.onMouseDown)
                    }
                    dispose() {
                        tb(this.svgRoot), this.disposed = !0
                    }
                    setAnchorLocation(t, e = !1) {
                        this.anchor = t, e ? this.positionByRect(this.ownerRect) : this.positionRelativeToAnchor(), this.renderTail()
                    }
                    setPositionRelativeToAnchor(t, e) {
                        this.relativeLeft = t, this.relativeTop = e, this.positionRelativeToAnchor(), this.renderTail()
                    }
                    getSize() {
                        return this.size
                    }
                    setSize(t, e = !1) {
                        t.width = Math.max(t.width, a7.MIN_SIZE), t.height = Math.max(t.height, a7.MIN_SIZE), this.size = t, this.background.setAttribute("width", `${t.width}`), this.background.setAttribute("height", `${t.height}`), e ? this.positionByRect(this.ownerRect) : this.positionRelativeToAnchor(), this.renderTail()
                    }
                    getColour() {
                        return this.colour
                    }
                    setColour(t) {
                        this.colour = t, this.tail.setAttribute("fill", t), this.background.setAttribute("fill", t)
                    }
                    onMouseDown(t) {
                        let e;
                        null == (e = this.workspace.getGesture(t)) || e.handleBubbleStart(t, this)
                    }
                    positionRelativeToAnchor() {
                        let t = this.anchor.x;
                        t = this.workspace.RTL ? t - (this.relativeLeft + this.size.width) : t + this.relativeLeft, this.moveTo(t, this.relativeTop + this.anchor.y)
                    }
                    moveTo(t, e) {
                        this.svgRoot.setAttribute("transform", `translate(${t}, ${e})`)
                    }
                    positionByRect(t = new rg(0, 0, 0, 0)) {
                        var e = this.workspace.getMetricsManager().getViewMetrics(!0),
                            i = this.getOptimalRelativeLeft(e),
                            s = this.getOptimalRelativeTop(e);
                        let o = {
                                x: i,
                                y: -this.size.height - this.workspace.getRenderer().getConstants().MIN_BLOCK_HEIGHT
                            },
                            n = {
                                x: -this.size.width - 30,
                                y: s
                            };
                        s = {
                            x: t.getWidth(),
                            y: s
                        };
                        var r = {
                            x: i,
                            y: t.getHeight()
                        };
                        i = t.getWidth() < t.getHeight() ? s : r, t = t.getWidth() < t.getHeight() ? r : s, s = this.getOverlap(o, e), r = this.getOverlap(n, e);
                        let l = this.getOverlap(i, e);
                        e = this.getOverlap(t, e), e = Math.max(s, r, l, e), s === e ? (this.relativeLeft = o.x, this.relativeTop = o.y) : r === e ? (this.relativeLeft = n.x, this.relativeTop = n.y) : l === e ? (this.relativeLeft = i.x, this.relativeTop = i.y) : (this.relativeLeft = t.x, this.relativeTop = t.y), this.positionRelativeToAnchor()
                    }
                    getOverlap(t, e) {
                        var i = this.workspace.RTL ? this.anchor.x - t.x - this.size.width : t.x + this.anchor.x;
                        return t = t.y + this.anchor.y, Math.max(0, Math.min(1, (Math.min(i + this.size.width, e.left + e.width) - Math.max(i, e.left)) * (Math.min(t + this.size.height, e.top + e.height) - Math.max(t, e.top)) / (this.size.width * this.size.height)))
                    }
                    getOptimalRelativeLeft(t) {
                        let e = -this.size.width / 4;
                        if (this.size.width > t.width) return e;
                        if (t = this.getWorkspaceViewRect(t), this.workspace.RTL) {
                            var i = this.anchor.x - e;
                            i - this.size.width < t.left ? e = -(t.left - this.anchor.x + this.size.width) : i > t.right && (e = -(t.right - this.anchor.x))
                        } else {
                            i = e + this.anchor.x;
                            let s = i + this.size.width;
                            i < t.left ? e = t.left - this.anchor.x : s > t.right && (e = t.right - this.anchor.x - this.size.width)
                        }
                        return e
                    }
                    getOptimalRelativeTop(t) {
                        let e = -this.size.height / 4;
                        if (this.size.height > t.height) return e;
                        let i = this.anchor.y + e,
                            s = i + this.size.height;
                        return i < (t = this.getWorkspaceViewRect(t)).top ? e = t.top - this.anchor.y : s > t.bottom && (e = t.bottom - this.anchor.y - this.size.height), e
                    }
                    getWorkspaceViewRect(t) {
                        let e = t.top,
                            i = t.top + t.height,
                            s = t.left;
                        return t = t.left + t.width, i -= this.getScrollbarThickness(), this.workspace.RTL ? s -= this.getScrollbarThickness() : t -= this.getScrollbarThickness(), new rg(e, i, s, t)
                    }
                    getScrollbarThickness() {
                        return rk.scrollbarThickness / this.workspace.scale
                    }
                    renderTail() {
                        let t;
                        let e = [];
                        var i = this.size.width / 2,
                            s = this.size.height / 2,
                            o = -this.relativeLeft,
                            n = -this.relativeTop;
                        if (i === o && s === n) e.push("M " + i + "," + s);
                        else {
                            n -= s, o -= i, this.workspace.RTL && (o *= -1);
                            var r = Math.sqrt(n * n + o * o),
                                l = Math.acos(o / r);
                            0 > n && (l = 2 * Math.PI - l);
                            var a = l + Math.PI / 2;
                            a > 2 * Math.PI && (a -= 2 * Math.PI);
                            var h = Math.sin(a);
                            let t = Math.cos(a),
                                c = (this.size.width + this.size.height) / a7.TAIL_THICKNESS;
                            c = Math.min(c, this.size.width, this.size.height) / 4, o = i + (a = 1 - a7.ANCHOR_RADIUS / r) * o, n = s + a * n, a = i + c * t;
                            let u = s + c * h;
                            i -= c * t, s -= c * h, (h = l + (h = i$(this.workspace.RTL ? -a7.TAIL_ANGLE : a7.TAIL_ANGLE))) > 2 * Math.PI && (h -= 2 * Math.PI), l = Math.sin(h) * r / a7.TAIL_BEND, r = Math.cos(h) * r / a7.TAIL_BEND, e.push("M" + a + "," + u), e.push("C" + (a + r) + "," + (u + l) + " " + o + "," + n + " " + o + "," + n), e.push("C" + o + "," + n + " " + (i + r) + "," + (s + l) + " " + i + "," + s)
                        }
                        e.push("z"), null == (t = this.tail) || t.setAttribute("d", e.join(" "))
                    }
                    bringToFront() {
                        let t;
                        let e = null == (t = this.svgRoot) ? void 0 : t.parentNode;
                        return !!this.svgRoot && (null == e ? void 0 : e.lastChild) !== this.svgRoot && (null == e || e.appendChild(this.svgRoot), !0)
                    }
                    getRelativeToSurfaceXY() {
                        return new n3(this.workspace.RTL ? -this.relativeLeft + this.anchor.x - this.size.width : this.anchor.x + this.relativeLeft, this.anchor.y + this.relativeTop)
                    }
                    getSvgRoot() {
                        return this.svgRoot
                    }
                    moveDuringDrag(t) {
                        this.moveTo(t.x, t.y), this.relativeLeft = this.workspace.RTL ? this.anchor.x - t.x - this.size.width : t.x - this.anchor.x, this.relativeTop = t.y - this.anchor.y, this.renderTail()
                    }
                    setDragging(t) {}
                    setDeleteStyle(t) {}
                    isDeletable() {
                        return !1
                    }
                    showContextMenu(t) {}
                };
                a7 = ht, ht.BORDER_WIDTH = 6, ht.DOUBLE_BORDER = 2 * a7.BORDER_WIDTH, ht.MIN_SIZE = a7.DOUBLE_BORDER, ht.TAIL_THICKNESS = 1, ht.TAIL_ANGLE = 20, ht.TAIL_BEND = 4, ht.ANCHOR_RADIUS = 8;
                var he = class extends ht {
                    constructor(t, e, i, s) {
                        let o, n;
                        super(e, i, s), this.workspace = e, this.anchor = i, this.ownerRect = s, this.autoLayout = !0, e = new aX(t), this.validateWorkspaceOptions(e), this.svgDialog = tu(rp.SVG, {
                            x: ht.BORDER_WIDTH,
                            y: ht.BORDER_WIDTH
                        }, this.contentContainer), t.parentWorkspace = this.workspace, this.miniWorkspace = this.newWorkspaceSvg(new aX(t)), this.miniWorkspace.internalIsMutator = !0, t = this.miniWorkspace.createDom("blocklyMutatorBackground"), this.svgDialog.appendChild(t), e.languageTree && (t.insertBefore(this.miniWorkspace.addFlyout(rp.G), this.miniWorkspace.getCanvas()), null == (t = this.miniWorkspace.getFlyout()) || t.init(this.miniWorkspace), null == t || t.show(e.languageTree)), this.miniWorkspace.addChangeListener(this.onWorkspaceChange.bind(this)), null == (o = this.miniWorkspace.getFlyout()) || null == (n = o.getWorkspace()) || n.addChangeListener(this.onWorkspaceChange.bind(this)), this.updateBubbleSize()
                    }
                    dispose() {
                        this.miniWorkspace.dispose(), super.dispose()
                    }
                    getWorkspace() {
                        return this.miniWorkspace
                    }
                    addWorkspaceChangeListener(t) {
                        this.miniWorkspace.addChangeListener(t)
                    }
                    validateWorkspaceOptions(t) {
                        if (t.hasCategories) throw Error("The miniworkspace bubble does not support toolboxes with categories");
                        if (t.hasTrashcan) throw Error("The miniworkspace bubble does not support trashcans");
                        if (t.zoomOptions.controls || t.zoomOptions.wheel || t.zoomOptions.pinch) throw Error("The miniworkspace bubble does not support zooming");
                        if (t.moveOptions.scrollbars || t.moveOptions.wheel || t.moveOptions.drag) throw Error("The miniworkspace bubble does not scrolling/moving the workspace");
                        if (t.horizontalLayout) throw Error("The miniworkspace bubble does not support horizontal layouts")
                    }
                    onWorkspaceChange() {
                        this.bumpBlocksIntoBounds(), this.updateBubbleSize()
                    }
                    bumpBlocksIntoBounds() {
                        if (!this.miniWorkspace.isDragging())
                            for (let t of this.miniWorkspace.getTopBlocks(!1)) {
                                let e = t.getRelativeToSurfaceXY();
                                if (20 > e.y && t.moveBy(0, 20 - e.y), t.RTL) {
                                    let i = -20,
                                        s = this.miniWorkspace.getFlyout();
                                    s && (i -= s.getWidth()), e.x > i && t.moveBy(i - e.x, 0)
                                } else 20 > e.x && t.moveBy(20 - e.x, 0)
                            }
                    }
                    updateBubbleSize() {
                        if (!this.miniWorkspace.isDragging()) {
                            var t = this.getSize(),
                                e = this.calculateWorkspaceSize();
                            Math.abs(t.width - e.width) < he.MINIMUM_VIEW_CHANGE && Math.abs(t.height - e.height) < he.MINIMUM_VIEW_CHANGE || (this.svgDialog.setAttribute("width", `${e.width}px`), this.svgDialog.setAttribute("height", `${e.height}px`), this.miniWorkspace.setCachedParentSvgSize(e.width, e.height), this.miniWorkspace.RTL && this.miniWorkspace.getCanvas().setAttribute("transform", `translate(${e.width}, 0)`), this.setSize(new rb(e.width + ht.DOUBLE_BORDER, e.height + ht.DOUBLE_BORDER), this.autoLayout), this.miniWorkspace.resize(), this.miniWorkspace.recordDragTargets())
                        }
                    }
                    calculateWorkspaceSize() {
                        var t = this.miniWorkspace.getCanvas().getBBox();
                        let e = t.width + he.MARGIN;
                        t = t.height + he.MARGIN;
                        let i = this.miniWorkspace.getFlyout();
                        if (i) {
                            let s = i.getWorkspace().getMetricsManager().getScrollMetrics();
                            t = Math.max(t, s.height + 20), e += i.getWidth()
                        }
                        return new rb(e, t)
                    }
                    updateBlockStyles() {
                        let t;
                        for (var e of this.miniWorkspace.getAllBlocks(!1)) e.setStyle(e.getStyleName());
                        if (e = null == (t = this.miniWorkspace.getFlyout()) ? void 0 : t.getWorkspace())
                            for (let t of e.getAllBlocks(!1)) t.setStyle(t.getStyleName())
                    }
                    moveDuringDrag(t) {
                        super.moveDuringDrag(t), this.autoLayout = !1
                    }
                    moveTo(t, e) {
                        super.moveTo(t, e), this.miniWorkspace.recordDragTargets()
                    }
                    newWorkspaceSvg(t) {
                        throw Error("The implementation of newWorkspaceSvg should be monkey-patched in by blockly.ts")
                    }
                };
                he.MINIMUM_VIEW_CHANGE = 10, he.MARGIN = 3 * ht.DOUBLE_BORDER, r.MutatorIcon$$module$build$src$core$icons$mutator_icon = class extends a3 {
                    constructor(t, e) {
                        super(e), this.flyoutBlockTypes = t, this.sourceBlock = e, this.saveConnectionsListener = this.updateWorkspacePid = this.rootBlock = this.miniWorkspaceBubble = null
                    }
                    getType() {
                        return r.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE
                    }
                    initView(t) {
                        this.svgRoot || (super.initView(t), tu(rp.RECT, {
                            class: "blocklyIconShape",
                            rx: "4",
                            ry: "4",
                            height: "16",
                            width: "16"
                        }, this.svgRoot), tu(rp.PATH, {
                            class: "blocklyIconSymbol",
                            d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
                        }, this.svgRoot), tu(rp.CIRCLE, {
                            class: "blocklyIconShape",
                            r: "2.7",
                            cx: "8",
                            cy: "8"
                        }, this.svgRoot), td(this.svgRoot, "blockly-icon-mutator"))
                    }
                    dispose() {
                        let t;
                        super.dispose(), null == (t = this.miniWorkspaceBubble) || t.dispose()
                    }
                    getWeight() {
                        return r.MutatorIcon$$module$build$src$core$icons$mutator_icon.WEIGHT
                    }
                    getSize() {
                        return new rb(17, 17)
                    }
                    applyColour() {
                        let t, e;
                        super.applyColour(), null == (t = this.miniWorkspaceBubble) || t.setColour(this.sourceBlock.style.colourPrimary), null == (e = this.miniWorkspaceBubble) || e.updateBlockStyles()
                    }
                    updateCollapsed() {
                        super.updateCollapsed(), this.sourceBlock.isCollapsed() && this.setBubbleVisible(!1)
                    }
                    onLocationChange(t) {
                        let e;
                        super.onLocationChange(t), null == (e = this.miniWorkspaceBubble) || e.setAnchorLocation(this.getAnchorLocation())
                    }
                    onClick() {
                        super.onClick(), this.sourceBlock.isEditable() && this.setBubbleVisible(!this.bubbleIsVisible())
                    }
                    isClickableInFlyout() {
                        return !1
                    }
                    bubbleIsVisible() {
                        return !!this.miniWorkspaceBubble
                    }
                    setBubbleVisible(t) {
                        if (this.bubbleIsVisible() !== t) {
                            if (t) {
                                let t;
                                this.miniWorkspaceBubble = new he(this.getMiniWorkspaceConfig(), this.sourceBlock.workspace, this.getAnchorLocation(), this.getBubbleOwnerRect()), this.applyColour(), this.createRootBlock(), this.addSaveConnectionsListener(), null == (t = this.miniWorkspaceBubble) || t.addWorkspaceChangeListener(this.createMiniWorkspaceChangeListener())
                            } else {
                                let t;
                                null == (t = this.miniWorkspaceBubble) || t.dispose(), this.miniWorkspaceBubble = null, this.saveConnectionsListener && this.sourceBlock.workspace.removeChangeListener(this.saveConnectionsListener), this.saveConnectionsListener = null
                            }
                            F(new(X(nb))(this.sourceBlock, t, "mutator"))
                        }
                    }
                    getMiniWorkspaceConfig() {
                        let t;
                        let e = {
                            disable: !1,
                            media: this.sourceBlock.workspace.options.pathToMedia,
                            rtl: this.sourceBlock.RTL,
                            renderer: this.sourceBlock.workspace.options.renderer,
                            rendererOverrides: null != (t = this.sourceBlock.workspace.options.rendererOverrides) ? t : void 0
                        };
                        return this.flyoutBlockTypes.length && (e.toolbox = {
                            kind: "flyoutToolbox",
                            contents: this.flyoutBlockTypes.map(t => ({
                                kind: "block",
                                type: t
                            }))
                        }), e
                    }
                    getAnchorLocation() {
                        return n3.sum(this.workspaceLocation, new n3(8.5, 8.5))
                    }
                    getBubbleOwnerRect() {
                        let t = this.sourceBlock.getSvgRoot().getBBox();
                        return new rg(t.y, t.y + t.height, t.x, t.x + t.width)
                    }
                    createRootBlock() {
                        let t, e, i, s;
                        if (!this.sourceBlock.decompose) throw Error("Blocks with mutator icons must include a decompose method");
                        for (var o of (this.rootBlock = this.sourceBlock.decompose(this.miniWorkspaceBubble.getWorkspace()), this.rootBlock.getDescendants(!1))) o.queueRender();
                        this.rootBlock.setMovable(!1), this.rootBlock.setDeletable(!1), o = null != (s = null == (t = this.miniWorkspaceBubble) ? void 0 : null == (e = t.getWorkspace()) ? void 0 : null == (i = e.getFlyout()) ? void 0 : i.getWidth()) ? s : 0, this.rootBlock.moveBy(this.rootBlock.RTL ? -(o + 16) : 16, 16)
                    }
                    addSaveConnectionsListener() {
                        this.sourceBlock.saveConnections && this.rootBlock && (this.saveConnectionsListener = () => {
                            this.sourceBlock.saveConnections && this.rootBlock && this.sourceBlock.saveConnections(this.rootBlock)
                        }, this.saveConnectionsListener(), this.sourceBlock.workspace.addChangeListener(this.saveConnectionsListener))
                    }
                    createMiniWorkspaceChangeListener() {
                        return t => {
                            r.MutatorIcon$$module$build$src$core$icons$mutator_icon.isIgnorableMutatorEvent(t) || this.updateWorkspacePid || (this.updateWorkspacePid = setTimeout(() => {
                                this.updateWorkspacePid = null, this.recomposeSourceBlock()
                            }, 0))
                        }
                    }
                    static isIgnorableMutatorEvent(t) {
                        return t.isUiEvent || t.type === r.CREATE$$module$build$src$core$events$utils || t.type === r.CHANGE$$module$build$src$core$events$utils && "disabled" === t.element
                    }
                    recomposeSourceBlock() {
                        if (this.rootBlock) {
                            if (!this.sourceBlock.compose) throw Error("Blocks with mutator icons must include a compose method");
                            var t = r.getGroup$$module$build$src$core$events$utils();
                            t || r.setGroup$$module$build$src$core$events$utils(!0);
                            var e = aY.getExtraBlockState_(this.sourceBlock);
                            this.sourceBlock.compose(this.rootBlock);
                            var i = aY.getExtraBlockState_(this.sourceBlock);
                            e !== i && F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this.sourceBlock, "mutation", null, e, i)), r.setGroup$$module$build$src$core$events$utils(t)
                        }
                    }
                    getWorkspace() {
                        let t;
                        return null == (t = this.miniWorkspaceBubble) ? void 0 : t.getWorkspace()
                    }
                    static reconnect(t, e, i) {
                        return tc("MutatorIcon.reconnect", "v10", "v11", "connection.reconnect"), !!t && t.reconnect(e, i)
                    }
                    static findParentWs(t) {
                        return tc("MutatorIcon.findParentWs", "v10", "v11", "workspace.getRootWorkspace"), t.getRootWorkspace()
                    }
                }, r.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE = rF.MUTATOR, r.MutatorIcon$$module$build$src$core$icons$mutator_icon.WEIGHT = 1, r.MutatorIcon$$module$build$src$core$icons$mutator_icon;
                var hi = Object.create(null);
                r.register$$module$build$src$core$extensions("parent_tooltip_when_inline", function () {
                    let t = this.tooltip;
                    this.setTooltip((function () {
                        let e = this.getParent();
                        return e && e.getInputsInline() && e.tooltip || t
                    }).bind(this))
                });
                var hs = {
                    TEST_ONLY: {
                        allExtensions: hi
                    }
                };
                hs.apply = sL, hs.buildTooltipForDropdown = r.buildTooltipForDropdown$$module$build$src$core$extensions, hs.buildTooltipWithFieldText = r.buildTooltipWithFieldText$$module$build$src$core$extensions, hs.isRegistered = sx, hs.register = r.register$$module$build$src$core$extensions, hs.registerMixin = r.registerMixin$$module$build$src$core$extensions, hs.registerMutator = r.registerMutator$$module$build$src$core$extensions, hs.runAfterPageLoad = function (t) {
                    if ("object" != typeof document) throw Error("runAfterPageLoad() requires browser document.");
                    if ("complete" === document.readyState) t();
                    else {
                        let e = setInterval(function () {
                            "complete" === document.readyState && (clearInterval(e), t())
                        }, 10)
                    }
                }, hs.unregister = function (t) {
                    sx(t) ? delete hi[t] : console.warn('No extension mapping for name "' + t + '" found to unregister')
                }, (hH = hU || (hU = {}))[hH.WIN_KEY_FF_LINUX = 0] = "WIN_KEY_FF_LINUX", hH[hH.MAC_ENTER = 3] = "MAC_ENTER", hH[hH.BACKSPACE = 8] = "BACKSPACE", hH[hH.TAB = 9] = "TAB", hH[hH.NUM_CENTER = 12] = "NUM_CENTER", hH[hH.ENTER = 13] = "ENTER", hH[hH.SHIFT = 16] = "SHIFT", hH[hH.CTRL = 17] = "CTRL", hH[hH.ALT = 18] = "ALT", hH[hH.PAUSE = 19] = "PAUSE", hH[hH.CAPS_LOCK = 20] = "CAPS_LOCK", hH[hH.ESC = 27] = "ESC", hH[hH.SPACE = 32] = "SPACE", hH[hH.PAGE_UP = 33] = "PAGE_UP", hH[hH.PAGE_DOWN = 34] = "PAGE_DOWN", hH[hH.END = 35] = "END", hH[hH.HOME = 36] = "HOME", hH[hH.LEFT = 37] = "LEFT", hH[hH.UP = 38] = "UP", hH[hH.RIGHT = 39] = "RIGHT", hH[hH.DOWN = 40] = "DOWN", hH[hH.PLUS_SIGN = 43] = "PLUS_SIGN", hH[hH.PRINT_SCREEN = 44] = "PRINT_SCREEN", hH[hH.INSERT = 45] = "INSERT", hH[hH.DELETE = 46] = "DELETE", hH[hH.ZERO = 48] = "ZERO", hH[hH.ONE = 49] = "ONE", hH[hH.TWO = 50] = "TWO", hH[hH.THREE = 51] = "THREE", hH[hH.FOUR = 52] = "FOUR", hH[hH.FIVE = 53] = "FIVE", hH[hH.SIX = 54] = "SIX", hH[hH.SEVEN = 55] = "SEVEN", hH[hH.EIGHT = 56] = "EIGHT", hH[hH.NINE = 57] = "NINE", hH[hH.FF_SEMICOLON = 59] = "FF_SEMICOLON", hH[hH.FF_EQUALS = 61] = "FF_EQUALS", hH[hH.FF_DASH = 173] = "FF_DASH", hH[hH.FF_HASH = 163] = "FF_HASH", hH[hH.QUESTION_MARK = 63] = "QUESTION_MARK", hH[hH.AT_SIGN = 64] = "AT_SIGN", hH[hH.A = 65] = "A", hH[hH.B = 66] = "B", hH[hH.C = 67] = "C", hH[hH.D = 68] = "D", hH[hH.E = 69] = "E", hH[hH.F = 70] = "F", hH[hH.G = 71] = "G", hH[hH.H = 72] = "H", hH[hH.I = 73] = "I", hH[hH.J = 74] = "J", hH[hH.K = 75] = "K", hH[hH.L = 76] = "L", hH[hH.M = 77] = "M", hH[hH.N = 78] = "N", hH[hH.O = 79] = "O", hH[hH.P = 80] = "P", hH[hH.Q = 81] = "Q", hH[hH.R = 82] = "R", hH[hH.S = 83] = "S", hH[hH.T = 84] = "T", hH[hH.U = 85] = "U", hH[hH.V = 86] = "V", hH[hH.W = 87] = "W", hH[hH.X = 88] = "X", hH[hH.Y = 89] = "Y", hH[hH.Z = 90] = "Z", hH[hH.META = 91] = "META", hH[hH.WIN_KEY_RIGHT = 92] = "WIN_KEY_RIGHT", hH[hH.CONTEXT_MENU = 93] = "CONTEXT_MENU", hH[hH.NUM_ZERO = 96] = "NUM_ZERO", hH[hH.NUM_ONE = 97] = "NUM_ONE", hH[hH.NUM_TWO = 98] = "NUM_TWO", hH[hH.NUM_THREE = 99] = "NUM_THREE", hH[hH.NUM_FOUR = 100] = "NUM_FOUR", hH[hH.NUM_FIVE = 101] = "NUM_FIVE", hH[hH.NUM_SIX = 102] = "NUM_SIX", hH[hH.NUM_SEVEN = 103] = "NUM_SEVEN", hH[hH.NUM_EIGHT = 104] = "NUM_EIGHT", hH[hH.NUM_NINE = 105] = "NUM_NINE", hH[hH.NUM_MULTIPLY = 106] = "NUM_MULTIPLY", hH[hH.NUM_PLUS = 107] = "NUM_PLUS", hH[hH.NUM_MINUS = 109] = "NUM_MINUS", hH[hH.NUM_PERIOD = 110] = "NUM_PERIOD", hH[hH.NUM_DIVISION = 111] = "NUM_DIVISION", hH[hH.F1 = 112] = "F1", hH[hH.F2 = 113] = "F2", hH[hH.F3 = 114] = "F3", hH[hH.F4 = 115] = "F4", hH[hH.F5 = 116] = "F5", hH[hH.F6 = 117] = "F6", hH[hH.F7 = 118] = "F7", hH[hH.F8 = 119] = "F8", hH[hH.F9 = 120] = "F9", hH[hH.F10 = 121] = "F10", hH[hH.F11 = 122] = "F11", hH[hH.F12 = 123] = "F12", hH[hH.NUMLOCK = 144] = "NUMLOCK", hH[hH.SCROLL_LOCK = 145] = "SCROLL_LOCK", hH[hH.FIRST_MEDIA_KEY = 166] = "FIRST_MEDIA_KEY", hH[hH.LAST_MEDIA_KEY = 183] = "LAST_MEDIA_KEY", hH[hH.SEMICOLON = 186] = "SEMICOLON", hH[hH.DASH = 189] = "DASH", hH[hH.EQUALS = 187] = "EQUALS", hH[hH.COMMA = 188] = "COMMA", hH[hH.PERIOD = 190] = "PERIOD", hH[hH.SLASH = 191] = "SLASH", hH[hH.APOSTROPHE = 192] = "APOSTROPHE", hH[hH.TILDE = 192] = "TILDE", hH[hH.SINGLE_QUOTE = 222] = "SINGLE_QUOTE", hH[hH.OPEN_SQUARE_BRACKET = 219] = "OPEN_SQUARE_BRACKET", hH[hH.BACKSLASH = 220] = "BACKSLASH", hH[hH.CLOSE_SQUARE_BRACKET = 221] = "CLOSE_SQUARE_BRACKET", hH[hH.WIN_KEY = 224] = "WIN_KEY", hH[hH.MAC_FF_META = 224] = "MAC_FF_META", hH[hH.MAC_WK_CMD_LEFT = 91] = "MAC_WK_CMD_LEFT", hH[hH.MAC_WK_CMD_RIGHT = 93] = "MAC_WK_CMD_RIGHT", hH[hH.WIN_IME = 229] = "WIN_IME", hH[hH.VK_NONAME = 252] = "VK_NONAME", hH[hH.PHANTOM = 255] = "PHANTOM";
                var ho = {};
                ho.arc = sj, ho.curve = sV, ho.line = sK, ho.lineOnAxis = sJ, ho.lineTo = sY, ho.moveBy = sX, ho.moveTo = sz, ho.point = sW;
                var hn = {};
                hn.Coordinate = n3, hn.KeyCodes = hU, hn.Rect = rg, hn.Size = rb, hn.Svg = rp, hn.aria = lP, hn.array = nZ, hn.browserEvents = nj, hn.colour = aZ, hn.deprecation = n5, hn.dom = rd, hn.extensions = hs, hn.idGenerator = ni, hn.math = l5, hn.object = aW, hn.parsing = aq, hn.string = ak, hn.style = rm, hn.svgMath = rT, hn.svgPaths = ho, hn.toolbox = rL, hn.userAgent = {
                    ANDROID: nW,
                    GECKO: nU,
                    IPAD: nV,
                    IPHONE: nz,
                    JavaFx: nG,
                    MAC: nX,
                    MOBILE: nY,
                    raw: nH
                }, hn.xml = rR;
                var hr = {};
                hr.register = sZ, hr.unregister = function (t) {
                    g(c.ICON, t)
                };
                var hl = class extends ht {
                        constructor(t, e, i, s) {
                            super(e, i, s), this.text = t, this.workspace = e, this.anchor = i, this.ownerRect = s, this.paragraph = this.stringToSvg(t, this.contentContainer), this.updateBubbleSize()
                        }
                        getText() {
                            return this.text
                        }
                        setText(t) {
                            this.text = t, tb(this.paragraph), this.paragraph = this.stringToSvg(t, this.contentContainer), this.updateBubbleSize()
                        }
                        stringToSvg(t, e) {
                            return e = this.createParagraph(e), t = this.createSpans(e, t), this.workspace.RTL && this.rightAlignSpans(e.getBBox().width, t), e
                        }
                        createParagraph(t) {
                            return tu(rp.TEXT, {
                                class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
                                y: ht.BORDER_WIDTH
                            }, t)
                        }
                        createSpans(t, e) {
                            return e.split("\n").map(e => {
                                let i = tu(rp.TSPAN, {
                                    dy: "1em",
                                    x: ht.BORDER_WIDTH
                                }, t);
                                return e = document.createTextNode(e), i.appendChild(e), i
                            })
                        }
                        rightAlignSpans(t, e) {
                            for (let i of e) i.setAttribute("text-anchor", "end"), i.setAttribute("x", `${t+ht.BORDER_WIDTH}`)
                        }
                        updateBubbleSize() {
                            let t = this.paragraph.getBBox();
                            this.setSize(new rb(t.width + 2 * ht.BORDER_WIDTH, t.height + 2 * ht.BORDER_WIDTH), !0)
                        }
                    },
                    ha = class extends ht {
                        constructor(t, e, i) {
                            super(t, e, i), this.workspace = t, this.anchor = e, this.ownerRect = i, this.resizePointerMoveListener = this.resizePointerUpListener = null, this.textChangeListeners = [], this.sizeChangeListeners = [], this.text = "", this.DEFAULT_SIZE = new rb(160 + ht.DOUBLE_BORDER, 80 + ht.DOUBLE_BORDER), this.MIN_SIZE = new rb(45 + ht.DOUBLE_BORDER, 20 + ht.DOUBLE_BORDER), ({
                                inputRoot: this.inputRoot,
                                textArea: this.textArea
                            } = this.createEditor(this.contentContainer)), this.resizeGroup = this.createResizeHandle(this.svgRoot), this.setSize(this.DEFAULT_SIZE, !0)
                        }
                        getText() {
                            return this.text
                        }
                        setText(t) {
                            this.text = t, this.textArea.value = t, this.onTextChange()
                        }
                        addTextChangeListener(t) {
                            this.textChangeListeners.push(t)
                        }
                        addSizeChangeListener(t) {
                            this.sizeChangeListeners.push(t)
                        }
                        createEditor(t) {
                            t = tu(rp.FOREIGNOBJECT, {
                                x: ht.BORDER_WIDTH,
                                y: ht.BORDER_WIDTH
                            }, t);
                            let e = document.createElementNS(rl, "body");
                            e.setAttribute("xmlns", rl), e.className = "blocklyMinimalBody";
                            let i = document.createElementNS(rl, "textarea");
                            return i.className = "blocklyCommentTextarea", i.setAttribute("dir", this.workspace.RTL ? "RTL" : "LTR"), e.appendChild(i), t.appendChild(e), this.bindTextAreaEvents(i), setTimeout(() => {
                                i.focus()
                            }, 0), {
                                inputRoot: t,
                                textArea: i
                            }
                        }
                        bindTextAreaEvents(t) {
                            tt(t, "wheel", this, t => {
                                t.stopPropagation()
                            }), tt(t, "focus", this, this.onStartEdit, !0), tt(t, "change", this, this.onTextChange)
                        }
                        createResizeHandle(t) {
                            t = tu(rp.G, {
                                class: this.workspace.RTL ? "blocklyResizeSW" : "blocklyResizeSE"
                            }, t);
                            let e = 2 * ht.BORDER_WIDTH;
                            return tu(rp.POLYGON, {
                                points: `0,${e} ${e},${e} ${e},0`
                            }, t), tu(rp.LINE, {
                                class: "blocklyResizeLine",
                                x1: e / 3,
                                y1: e - 1,
                                x2: e - 1,
                                y2: e / 3
                            }, t), tu(rp.LINE, {
                                class: "blocklyResizeLine",
                                x1: 2 * e / 3,
                                y1: e - 1,
                                x2: e - 1,
                                y2: 2 * e / 3
                            }, t), tt(t, "pointerdown", this, this.onResizePointerDown), t
                        }
                        setSize(t, e = !1) {
                            t.width = Math.max(t.width, this.MIN_SIZE.width), t.height = Math.max(t.height, this.MIN_SIZE.height);
                            let i = t.width - ht.DOUBLE_BORDER,
                                s = t.height - ht.DOUBLE_BORDER;
                            this.inputRoot.setAttribute("width", `${i}`), this.inputRoot.setAttribute("height", `${s}`), this.textArea.style.width = `${i-4}px`, this.textArea.style.height = `${s-4}px`, this.workspace.RTL ? this.resizeGroup.setAttribute("transform", `translate(${ht.DOUBLE_BORDER}, ${s}) scale(-1 1)`) : this.resizeGroup.setAttribute("transform", `translate(${i}, ${s})`), super.setSize(t, e), this.onSizeChange()
                        }
                        getSize() {
                            return super.getSize()
                        }
                        onResizePointerDown(t) {
                            this.bringToFront(), to(t) || (this.workspace.startDrag(t, new n3(this.workspace.RTL ? -this.getSize().width : this.getSize().width, this.getSize().height)), this.resizePointerUpListener = tt(document, "pointerup", this, this.onResizePointerUp), this.resizePointerMoveListener = tt(document, "pointermove", this, this.onResizePointerMove), this.workspace.hideChaff()), t.stopPropagation()
                        }
                        onResizePointerUp(t) {
                            j(), this.resizePointerUpListener && (ti(this.resizePointerUpListener), this.resizePointerUpListener = null), this.resizePointerMoveListener && (ti(this.resizePointerMoveListener), this.resizePointerMoveListener = null)
                        }
                        onResizePointerMove(t) {
                            t = this.workspace.moveDrag(t), this.setSize(new rb(this.workspace.RTL ? -t.x : t.x, t.y), !1), this.onSizeChange()
                        }
                        onStartEdit() {
                            this.bringToFront() && this.textArea.focus()
                        }
                        onTextChange() {
                            for (let t of (this.text = this.textArea.value, this.textChangeListeners)) t()
                        }
                        onSizeChange() {
                            for (let t of this.sizeChangeListeners) t()
                        }
                    };
                ta("\n.blocklyCommentTextarea {\n  background-color: #fef49c;\n  border: 0;\n  display: block;\n  margin: 0;\n  outline: 0;\n  padding: 3px;\n  resize: none;\n  text-overflow: hidden;\n}\n");
                var hh = class extends a3 {
                    constructor(t) {
                        super(t), this.sourceBlock = t, this.textBubble = this.textInputBubble = null, this.text = "", this.bubbleSize = new rb(160, 80), this.bubbleVisiblity = !1
                    }
                    getType() {
                        return hh.TYPE
                    }
                    initView(t) {
                        this.svgRoot || (super.initView(t), tu(rp.CIRCLE, {
                            class: "blocklyIconShape",
                            r: "8",
                            cx: "8",
                            cy: "8"
                        }, this.svgRoot), tu(rp.PATH, {
                            class: "blocklyIconSymbol",
                            d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
                        }, this.svgRoot), tu(rp.RECT, {
                            class: "blocklyIconSymbol",
                            x: "6.8",
                            y: "10.78",
                            height: "2",
                            width: "2"
                        }, this.svgRoot), td(this.svgRoot, "blockly-icon-comment"))
                    }
                    dispose() {
                        let t, e;
                        super.dispose(), null == (t = this.textInputBubble) || t.dispose(), null == (e = this.textBubble) || e.dispose()
                    }
                    getWeight() {
                        return hh.WEIGHT
                    }
                    getSize() {
                        return new rb(17, 17)
                    }
                    applyColour() {
                        let t, e;
                        super.applyColour();
                        let i = this.sourceBlock.style.colourPrimary;
                        null == (t = this.textInputBubble) || t.setColour(i), null == (e = this.textBubble) || e.setColour(i)
                    }
                    updateEditable() {
                        super.updateEditable(), this.bubbleIsVisible() && (this.setBubbleVisible(!1), this.setBubbleVisible(!0))
                    }
                    onLocationChange(t) {
                        let e, i;
                        super.onLocationChange(t), t = this.getAnchorLocation(), null == (e = this.textInputBubble) || e.setAnchorLocation(t), null == (i = this.textBubble) || i.setAnchorLocation(t)
                    }
                    setText(t) {
                        let e, i;
                        let s = this.text;
                        F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this.sourceBlock, "comment", null, s, t)), this.text = t, null == (e = this.textInputBubble) || e.setText(this.text), null == (i = this.textBubble) || i.setText(this.text)
                    }
                    getText() {
                        return this.text
                    }
                    setBubbleSize(t) {
                        let e;
                        this.bubbleSize = t, null == (e = this.textInputBubble) || e.setSize(this.bubbleSize, !0)
                    }
                    getBubbleSize() {
                        return this.bubbleSize
                    }
                    saveState() {
                        return this.text ? {
                            text: this.text,
                            pinned: this.bubbleIsVisible(),
                            height: this.bubbleSize.height,
                            width: this.bubbleSize.width
                        } : null
                    }
                    loadState(t) {
                        let e, i, s, o;
                        this.text = null != (e = t.text) ? e : "", this.bubbleSize = new rb(null != (i = t.width) ? i : 160, null != (s = t.height) ? s : 80), this.bubbleVisiblity = null != (o = t.pinned) && o, setTimeout(() => this.setBubbleVisible(this.bubbleVisiblity), 1)
                    }
                    onClick() {
                        super.onClick(), this.setBubbleVisible(!this.bubbleIsVisible())
                    }
                    isClickableInFlyout() {
                        return !1
                    }
                    onTextChange() {
                        if (this.textInputBubble) {
                            var t = this.textInputBubble.getText();
                            this.text !== t && (F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this.sourceBlock, "comment", null, this.text, t)), this.text = t)
                        }
                    }
                    onSizeChange() {
                        this.textInputBubble && (this.bubbleSize = this.textInputBubble.getSize())
                    }
                    bubbleIsVisible() {
                        return this.bubbleVisiblity
                    }
                    setBubbleVisible(t) {
                        (!t || !this.textBubble && !this.textInputBubble) && (t || this.textBubble || this.textInputBubble) && (this.bubbleVisiblity = t, this.sourceBlock.rendered && !this.sourceBlock.isInFlyout && (t ? (this.sourceBlock.isEditable() ? this.showEditableBubble() : this.showNonEditableBubble(), this.applyColour()) : this.hideBubble(), F(new(X(nb))(this.sourceBlock, t, "comment"))))
                    }
                    showEditableBubble() {
                        this.textInputBubble = new ha(this.sourceBlock.workspace, this.getAnchorLocation(), this.getBubbleOwnerRect()), this.textInputBubble.setText(this.getText()), this.textInputBubble.setSize(this.bubbleSize, !0), this.textInputBubble.addTextChangeListener(() => this.onTextChange()), this.textInputBubble.addSizeChangeListener(() => this.onSizeChange())
                    }
                    showNonEditableBubble() {
                        this.textBubble = new hl(this.getText(), this.sourceBlock.workspace, this.getAnchorLocation(), this.getBubbleOwnerRect())
                    }
                    hideBubble() {
                        let t, e;
                        null == (t = this.textInputBubble) || t.dispose(), this.textInputBubble = null, null == (e = this.textBubble) || e.dispose(), this.textBubble = null
                    }
                    getAnchorLocation() {
                        return n3.sum(this.workspaceLocation, new n3(8.5, 8.5))
                    }
                    getBubbleOwnerRect() {
                        let t = this.sourceBlock.getSvgRoot().getBBox();
                        return new rg(t.y, t.y + t.height, t.x, t.x + t.width)
                    }
                };
                hh.TYPE = rF.COMMENT, hh.WEIGHT = 3, sZ(hh.TYPE, hh);
                var hc = class extends a3 {
                    constructor(t) {
                        super(t), this.sourceBlock = t, this.textMap = new Map, this.textBubble = null
                    }
                    getType() {
                        return hc.TYPE
                    }
                    initView(t) {
                        this.svgRoot || (super.initView(t), tu(rp.PATH, {
                            class: "blocklyIconShape",
                            d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
                        }, this.svgRoot), tu(rp.PATH, {
                            class: "blocklyIconSymbol",
                            d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
                        }, this.svgRoot), tu(rp.RECT, {
                            class: "blocklyIconSymbol",
                            x: "7",
                            y: "11",
                            height: "2",
                            width: "2"
                        }, this.svgRoot), td(this.svgRoot, "blockly-icon-warning"))
                    }
                    dispose() {
                        let t;
                        super.dispose(), null == (t = this.textBubble) || t.dispose()
                    }
                    getWeight() {
                        return hc.WEIGHT
                    }
                    getSize() {
                        return new rb(17, 17)
                    }
                    applyColour() {
                        let t;
                        super.applyColour(), null == (t = this.textBubble) || t.setColour(this.sourceBlock.style.colourPrimary)
                    }
                    updateCollapsed() {}
                    isShownWhenCollapsed() {
                        return !0
                    }
                    onLocationChange(t) {
                        let e;
                        super.onLocationChange(t), null == (e = this.textBubble) || e.setAnchorLocation(this.getAnchorLocation())
                    }
                    addMessage(t, e) {
                        let i;
                        return this.textMap.get(e) === t || (t ? this.textMap.set(e, t) : this.textMap.delete(e), null == (i = this.textBubble) || i.setText(this.getText())), this
                    }
                    getText() {
                        return [...this.textMap.values()].join("\n")
                    }
                    onClick() {
                        super.onClick(), this.setBubbleVisible(!this.bubbleIsVisible())
                    }
                    isClickableInFlyout() {
                        return !1
                    }
                    bubbleIsVisible() {
                        return !!this.textBubble
                    }
                    setBubbleVisible(t) {
                        if (this.bubbleIsVisible() !== t) {
                            if (t) this.textBubble = new hl(this.getText(), this.sourceBlock.workspace, this.getAnchorLocation(), this.getBubbleOwnerRect()), this.applyColour();
                            else {
                                let t;
                                null == (t = this.textBubble) || t.dispose(), this.textBubble = null
                            }
                            F(new(X(nb))(this.sourceBlock, t, "warning"))
                        }
                    }
                    getAnchorLocation() {
                        return n3.sum(this.workspaceLocation, new n3(8.5, 8.5))
                    }
                    getBubbleOwnerRect() {
                        let t = this.sourceBlock.getSvgRoot().getBBox();
                        return new rg(t.y, t.y + t.height, t.x, t.x + t.width)
                    }
                };
                hc.TYPE = rF.WARNING, hc.WEIGHT = 2;
                var hu = class extends Error {
                        constructor(t) {
                            super(`Tried to append an icon of type ${t.getType()} when an icon of that type already exists on the block. Use getIcon to access the existing icon.`), this.icon = t
                        }
                    },
                    hd = {};
                hd.DuplicateIconType = hu;
                var hp = {};
                hp.CommentIcon = hh, hp.Icon = a3, hp.IconType = rF, hp.MutatorIcon = r.MutatorIcon$$module$build$src$core$icons$mutator_icon, hp.WarningIcon = hc, hp.exceptions = hd, hp.registry = hr, hW = "PROCEDURE", r.DEFAULT_ARG$$module$build$src$core$procedures = "x", (hV = {
                    CATEGORY_NAME: hW,
                    DEFAULT_ARG: r.DEFAULT_ARG$$module$build$src$core$procedures
                }).ObservableProcedureMap = a2, hV.allProcedures = sq, hV.findLegalName = r.findLegalName$$module$build$src$core$procedures, hV.flyoutCategory = s2, hV.getCallers = s9, hV.getDefinition = r.getDefinition$$module$build$src$core$procedures, hV.isNameUsed = s1, hV.isProcedureBlock = sS, hV.mutateCallers = r.mutateCallers$$module$build$src$core$procedures, hV.mutatorOpenListener = s5, hV.rename = r.rename$$module$build$src$core$procedures;
                var hg = new class {
                        constructor() {
                            this.NONE = 0, this.FIELD = 1, this.HAT = 2, this.ICON = 4, this.SPACER = 8, this.BETWEEN_ROW_SPACER = 16, this.IN_ROW_SPACER = 32, this.EXTERNAL_VALUE_INPUT = 64, this.INPUT = 128, this.INLINE_INPUT = 256, this.STATEMENT_INPUT = 512, this.CONNECTION = 1024, this.PREVIOUS_CONNECTION = 2048, this.NEXT_CONNECTION = 4096, this.OUTPUT_CONNECTION = 8192, this.CORNER = 16384, this.LEFT_SQUARE_CORNER = 32768, this.LEFT_ROUND_CORNER = 65536, this.RIGHT_SQUARE_CORNER = 131072, this.RIGHT_ROUND_CORNER = 262144, this.JAGGED_EDGE = 524288, this.ROW = 1048576, this.TOP_ROW = 2097152, this.BOTTOM_ROW = 4194304, this.INPUT_ROW = 8388608, this.LEFT_CORNER = this.LEFT_SQUARE_CORNER | this.LEFT_ROUND_CORNER, this.RIGHT_CORNER = this.RIGHT_SQUARE_CORNER | this.RIGHT_ROUND_CORNER, this.nextTypeValue_ = 16777216
                        }
                        getType(t) {
                            return Object.prototype.hasOwnProperty.call(this, t) || (this[t] = this.nextTypeValue_, this.nextTypeValue_ <<= 1), this[t]
                        }
                        isField(t) {
                            return t.type & this.FIELD
                        }
                        isHat(t) {
                            return t.type & this.HAT
                        }
                        isIcon(t) {
                            return t.type & this.ICON
                        }
                        isSpacer(t) {
                            return t.type & this.SPACER
                        }
                        isInRowSpacer(t) {
                            return t.type & this.IN_ROW_SPACER
                        }
                        isInput(t) {
                            return t.type & this.INPUT
                        }
                        isExternalInput(t) {
                            return t.type & this.EXTERNAL_VALUE_INPUT
                        }
                        isInlineInput(t) {
                            return t.type & this.INLINE_INPUT
                        }
                        isStatementInput(t) {
                            return t.type & this.STATEMENT_INPUT
                        }
                        isPreviousConnection(t) {
                            return t.type & this.PREVIOUS_CONNECTION
                        }
                        isNextConnection(t) {
                            return t.type & this.NEXT_CONNECTION
                        }
                        isPreviousOrNextConnection(t) {
                            return t.type & (this.PREVIOUS_CONNECTION | this.NEXT_CONNECTION)
                        }
                        isLeftRoundedCorner(t) {
                            return t.type & this.LEFT_ROUND_CORNER
                        }
                        isRightRoundedCorner(t) {
                            return t.type & this.RIGHT_ROUND_CORNER
                        }
                        isLeftSquareCorner(t) {
                            return t.type & this.LEFT_SQUARE_CORNER
                        }
                        isRightSquareCorner(t) {
                            return t.type & this.RIGHT_SQUARE_CORNER
                        }
                        isCorner(t) {
                            return t.type & this.CORNER
                        }
                        isJaggedEdge(t) {
                            return t.type & this.JAGGED_EDGE
                        }
                        isRow(t) {
                            return t.type & this.ROW
                        }
                        isBetweenRowSpacer(t) {
                            return t.type & this.BETWEEN_ROW_SPACER
                        }
                        isTopRow(t) {
                            return t.type & this.TOP_ROW
                        }
                        isBottomRow(t) {
                            return t.type & this.BOTTOM_ROW
                        }
                        isTopOrBottomRow(t) {
                            return t.type & (this.TOP_ROW | this.BOTTOM_ROW)
                        }
                        isInputRow(t) {
                            return t.type & this.INPUT_ROW
                        }
                    },
                    hb = class {
                        constructor(t) {
                            this.centerline = this.xPos = this.height = this.width = 0, this.constants_ = t, this.type = hg.NONE, this.notchOffset = this.constants_.NOTCH_OFFSET_LEFT
                        }
                    },
                    h_ = class {
                        constructor(t) {
                            this.elements = [], this.xPos = this.yPos = this.widthWithConnectedBlocks = this.minWidth = this.minHeight = this.width = this.height = 0, this.hasStatement = this.hasExternalInput = !1, this.statementEdge = 0, this.hasJaggedEdge = this.hasDummyInput = this.hasInlineInput = !1, this.align = null, this.constants_ = t, this.type = hg.ROW, this.notchOffset = this.constants_.NOTCH_OFFSET_LEFT
                        }
                        getLastInput() {
                            for (let t = this.elements.length - 1; 0 <= t; t--) {
                                let e = this.elements[t];
                                if (hg.isInput(e)) return e
                            }
                            return null
                        }
                        measure() {
                            throw Error("Unexpected attempt to measure a base Row.")
                        }
                        startsWithElemSpacer() {
                            return !0
                        }
                        endsWithElemSpacer() {
                            return !0
                        }
                        getFirstSpacer() {
                            for (let t = 0; t < this.elements.length; t++) {
                                let e = this.elements[t];
                                if (hg.isSpacer(e)) return e
                            }
                            return null
                        }
                        getLastSpacer() {
                            for (let t = this.elements.length - 1; 0 <= t; t--) {
                                let e = this.elements[t];
                                if (hg.isSpacer(e)) return e
                            }
                            return null
                        }
                    },
                    hm = class extends h_ {
                        constructor(t) {
                            super(t), this.hasNextConnection = !1, this.connection = null, this.baseline = this.descenderHeight = 0, this.type |= hg.BOTTOM_ROW
                        }
                        hasLeftSquareCorner(t) {
                            return !!t.outputConnection || !!t.getNextBlock()
                        }
                        hasRightSquareCorner(t) {
                            return !0
                        }
                        measure() {
                            let t = 0,
                                e = 0,
                                i = 0;
                            for (let s = 0; s < this.elements.length; s++) {
                                let o = this.elements[s];
                                e += o.width, hg.isSpacer(o) || (hg.isNextConnection(o) ? i = Math.max(i, o.height) : t = Math.max(t, o.height))
                            }
                            this.width = Math.max(this.minWidth, e), this.height = Math.max(this.minHeight, t) + i, this.descenderHeight = i, this.widthWithConnectedBlocks = this.width
                        }
                        startsWithElemSpacer() {
                            return !1
                        }
                        endsWithElemSpacer() {
                            return !1
                        }
                    },
                    hf = class extends hb {
                        constructor(t, e) {
                            super(t), this.connectionModel = e, this.shape = this.constants_.shapeFor(e), this.isDynamicShape = "isDynamic" in this.shape && this.shape.isDynamic, this.type |= hg.CONNECTION
                        }
                    },
                    hE = class extends hf {
                        constructor(t, e) {
                            super(t, e.connection), this.input = e, this.connectionOffsetY = this.connectionOffsetX = 0, this.type |= hg.INPUT, this.align = e.align, (this.connectedBlock = e.connection && e.connection.targetBlock() ? e.connection.targetBlock() : null) ? (t = this.connectedBlock.getHeightWidth(), this.connectedBlockWidth = t.width, this.connectedBlockHeight = t.height) : this.connectedBlockHeight = this.connectedBlockWidth = 0
                        }
                    },
                    hT = class extends hE {
                        constructor(t, e) {
                            super(t, e), this.height = 0, this.type |= hg.EXTERNAL_VALUE_INPUT, this.height = this.connectedBlock ? this.connectedBlockHeight - this.constants_.TAB_OFFSET_FROM_TOP - this.constants_.MEDIUM_PADDING : this.shape.height, this.width = this.shape.width + this.constants_.EXTERNAL_VALUE_INPUT_PADDING, this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP, this.connectionHeight = this.shape.height, this.connectionWidth = this.shape.width
                        }
                    },
                    hk = class extends hb {
                        constructor(t, e, i) {
                            super(t), this.field = e, this.parentInput = i, this.isEditable = e.EDITABLE, this.flipRtl = e.getFlipRtl(), this.type |= hg.FIELD, t = this.field.getSize(), this.height = t.height, this.width = t.width
                        }
                    },
                    hw = class extends hb {
                        constructor(t) {
                            super(t), this.type |= hg.HAT, this.height = this.constants_.START_HAT.height, this.width = this.constants_.START_HAT.width, this.ascenderHeight = this.height
                        }
                    },
                    hy = class extends hb {
                        constructor(t, e) {
                            super(t), this.icon = e, this.flipRtl = !1, this.isVisible = sp(e) && e.bubbleIsVisible(), this.type |= hg.ICON, t = e.getSize(), this.height = t.height, this.width = t.width
                        }
                    },
                    h$ = class extends hb {
                        constructor(t, e) {
                            super(t), this.type = this.type | hg.SPACER | hg.IN_ROW_SPACER, this.width = e, this.height = this.constants_.SPACER_DEFAULT_HEIGHT
                        }
                    },
                    hC = class extends hE {
                        constructor(t, e) {
                            super(t, e), this.type |= hg.INLINE_INPUT, this.connectedBlock ? (this.width = this.connectedBlockWidth, this.height = this.connectedBlockHeight) : (this.height = this.constants_.EMPTY_INLINE_INPUT_HEIGHT, this.width = this.constants_.EMPTY_INLINE_INPUT_PADDING), this.connectionHeight = this.isDynamicShape ? this.shape.height(this.height) : this.shape.height, this.connectionWidth = this.isDynamicShape ? this.shape.width(this.height) : this.shape.width, this.connectedBlock || (this.width += this.connectionWidth * (this.isDynamicShape ? 2 : 1)), this.connectionOffsetY = "connectionOffsetY" in this.shape ? this.shape.connectionOffsetY(this.connectionHeight) : this.constants_.TAB_OFFSET_FROM_TOP, this.connectionOffsetX = "connectionOffsetX" in this.shape ? this.shape.connectionOffsetX(this.connectionWidth) : 0
                        }
                    },
                    hv = class extends hE {
                        constructor(t, e) {
                            super(t, e), this.type |= hg.STATEMENT_INPUT, this.height = this.connectedBlock ? this.connectedBlockHeight + this.constants_.STATEMENT_BOTTOM_SPACER : this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT, this.width = this.constants_.STATEMENT_INPUT_NOTCH_OFFSET + this.shape.width
                        }
                    },
                    hI = class extends h_ {
                        constructor(t) {
                            super(t), this.connectedBlockWidths = 0, this.type |= hg.INPUT_ROW
                        }
                        measure() {
                            this.width = this.minWidth, this.height = this.minHeight;
                            let t = 0;
                            for (let e = 0; e < this.elements.length; e++) {
                                let i = this.elements[e];
                                this.width += i.width, hg.isInput(i) && i instanceof hE && (hg.isStatementInput(i) && i instanceof hv ? t += i.connectedBlockWidth : hg.isExternalInput(i) && i instanceof hT && 0 !== i.connectedBlockWidth && (t += i.connectedBlockWidth - i.connectionWidth)), hg.isSpacer(i) || (this.height = Math.max(this.height, i.height))
                            }
                            this.connectedBlockWidths = t, this.widthWithConnectedBlocks = this.width + t
                        }
                        endsWithElemSpacer() {
                            return !this.hasExternalInput && !this.hasStatement
                        }
                    },
                    hS = class extends hb {
                        constructor(t) {
                            super(t), this.type |= hg.JAGGED_EDGE, this.height = this.constants_.JAGGED_TEETH.height, this.width = this.constants_.JAGGED_TEETH.width
                        }
                    },
                    hR = class extends hf {
                        constructor(t, e) {
                            super(t, e), this.type |= hg.NEXT_CONNECTION, this.height = this.shape.height, this.width = this.shape.width
                        }
                    },
                    hD = class extends hf {
                        constructor(t, e) {
                            super(t, e), this.connectionOffsetX = 0, this.type |= hg.OUTPUT_CONNECTION, this.height = this.isDynamicShape ? 0 : this.shape.height, this.startX = this.width = this.isDynamicShape ? 0 : this.shape.width, this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP
                        }
                    },
                    hA = class extends hf {
                        constructor(t, e) {
                            super(t, e), this.type |= hg.PREVIOUS_CONNECTION, this.height = this.shape.height, this.width = this.shape.width
                        }
                    },
                    hN = class extends hb {
                        constructor(t, e) {
                            super(t), this.type = (e && "left" !== e ? hg.RIGHT_ROUND_CORNER : hg.LEFT_ROUND_CORNER) | hg.CORNER, this.width = this.constants_.CORNER_RADIUS, this.height = this.constants_.CORNER_RADIUS / 2
                        }
                    },
                    hO = class extends h_ {
                        constructor(t, e, i) {
                            super(t), this.height = e, this.width = i, this.precedesStatement = this.followsStatement = !1, this.widthWithConnectedBlocks = 0, this.type = this.type | hg.SPACER | hg.BETWEEN_ROW_SPACER, this.elements = [new h$(this.constants_, i)]
                        }
                        measure() {}
                    },
                    hx = class extends hb {
                        constructor(t, e) {
                            super(t), this.type = (e && "left" !== e ? hg.RIGHT_SQUARE_CORNER : hg.LEFT_SQUARE_CORNER) | hg.CORNER, this.width = this.height = this.constants_.NO_PADDING
                        }
                    },
                    hL = class extends h_ {
                        constructor(t) {
                            super(t), this.ascenderHeight = this.capline = 0, this.hasPreviousConnection = !1, this.connection = null, this.type |= hg.TOP_ROW
                        }
                        hasLeftSquareCorner(t) {
                            let e = (t.hat ? "cap" === t.hat : this.constants_.ADD_START_HATS) && !t.outputConnection && !t.previousConnection,
                                i = t.getPreviousBlock();
                            return !!t.outputConnection || e || !!i && i.getNextBlock() === t
                        }
                        hasRightSquareCorner(t) {
                            return !0
                        }
                        measure() {
                            let t = 0,
                                e = 0,
                                i = 0;
                            for (let s = 0; s < this.elements.length; s++) {
                                let o = this.elements[s];
                                e += o.width, hg.isSpacer(o) || (hg.isHat(o) && o instanceof hw ? i = Math.max(i, o.ascenderHeight) : t = Math.max(t, o.height))
                            }
                            this.width = Math.max(this.minWidth, e), this.height = Math.max(this.minHeight, t) + i, this.capline = this.ascenderHeight = i, this.widthWithConnectedBlocks = this.width
                        }
                        startsWithElemSpacer() {
                            return !1
                        }
                        endsWithElemSpacer() {
                            return !1
                        }
                    },
                    hM = class {
                        constructor() {
                            this.NO_PADDING = 0, this.SMALL_PADDING = 3, this.MEDIUM_PADDING = 5, this.MEDIUM_LARGE_PADDING = 8, this.LARGE_PADDING = 10, this.TAB_HEIGHT = 15, this.TAB_OFFSET_FROM_TOP = 5, this.TAB_VERTICAL_OVERLAP = 2.5, this.TAB_WIDTH = 8, this.NOTCH_WIDTH = 15, this.NOTCH_HEIGHT = 4, this.MIN_BLOCK_WIDTH = 12, this.EMPTY_BLOCK_SPACER_HEIGHT = 16, this.CORNER_RADIUS = 8, this.NOTCH_OFFSET_LEFT = 15, this.STATEMENT_BOTTOM_SPACER = 0, this.STATEMENT_INPUT_PADDING_LEFT = 20, this.BETWEEN_STATEMENT_PADDING_Y = 4, this.ADD_START_HATS = !1, this.START_HAT_HEIGHT = 15, this.START_HAT_WIDTH = 100, this.SPACER_DEFAULT_HEIGHT = 15, this.MIN_BLOCK_HEIGHT = 24, this.EMPTY_INLINE_INPUT_PADDING = 14.5, this.EXTERNAL_VALUE_INPUT_PADDING = 2, this.JAGGED_TEETH_HEIGHT = 12, this.JAGGED_TEETH_WIDTH = 6, this.FIELD_TEXT_FONTSIZE = 11, this.FIELD_TEXT_FONTWEIGHT = "normal", this.FIELD_TEXT_FONTFAMILY = "sans-serif", this.FIELD_TEXT_BASELINE = this.FIELD_TEXT_HEIGHT = -1, this.FIELD_BORDER_RECT_RADIUS = 4, this.FIELD_BORDER_RECT_HEIGHT = 16, this.FIELD_BORDER_RECT_X_PADDING = 5, this.FIELD_BORDER_RECT_Y_PADDING = 3, this.FIELD_BORDER_RECT_COLOUR = "#fff", this.FIELD_DROPDOWN_SVG_ARROW = this.FIELD_DROPDOWN_COLOURED_DIV = this.FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW = !1, this.FIELD_DROPDOWN_SVG_ARROW_SIZE = 12, this.FIELD_COLOUR_FULL_BLOCK = this.FIELD_TEXTINPUT_BOX_SHADOW = !1, this.FIELD_COLOUR_DEFAULT_WIDTH = 26, this.defs = null, this.embossFilterId = "", this.embossFilter = null, this.disabledPatternId = "", this.disabledPattern = null, this.debugFilterId = "", this.cssNode = this.debugFilter = null, this.CURSOR_COLOUR = "#cc0a0a", this.MARKER_COLOUR = "#4286f4", this.CURSOR_WS_WIDTH = 100, this.WS_CURSOR_HEIGHT = 5, this.CURSOR_STACK_PADDING = 10, this.CURSOR_BLOCK_PADDING = 2, this.CURSOR_STROKE_WIDTH = 4, this.FULL_BLOCK_FIELDS = !1, this.INSERTION_MARKER_COLOUR = "#000000", this.INSERTION_MARKER_OPACITY = .2, this.SHAPES = {
                                PUZZLE: 1,
                                NOTCH: 2
                            }, this.TALL_INPUT_FIELD_OFFSET_Y = this.MEDIUM_PADDING, this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = this.DUMMY_INPUT_MIN_HEIGHT = this.TAB_HEIGHT, this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT, this.TOP_ROW_MIN_HEIGHT = this.MEDIUM_PADDING, this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING, this.BOTTOM_ROW_MIN_HEIGHT = this.MEDIUM_PADDING, this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING, this.EMPTY_INLINE_INPUT_HEIGHT = this.TAB_HEIGHT + 11, this.EMPTY_STATEMENT_INPUT_HEIGHT = this.MIN_BLOCK_HEIGHT, this.START_POINT = sX(0, 0), this.FIELD_TEXT_BASELINE_CENTER = !0, this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT, this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING, this.FIELD_DROPDOWN_SVG_ARROW_DATAURI = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=", this.FIELD_COLOUR_DEFAULT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT, this.FIELD_CHECKBOX_X_OFFSET = this.FIELD_BORDER_RECT_X_PADDING - 3, this.randomIdentifier = String(Math.random()).substring(2)
                        }
                        init() {
                            this.JAGGED_TEETH = this.makeJaggedTeeth(), this.NOTCH = this.makeNotch(), this.START_HAT = this.makeStartHat(), this.PUZZLE_TAB = this.makePuzzleTab(), this.INSIDE_CORNERS = this.makeInsideCorners(), this.OUTSIDE_CORNERS = this.makeOutsideCorners()
                        }
                        setTheme(t) {
                            this.blockStyles = Object.create(null);
                            let e = t.blockStyles;
                            for (let t in e) this.blockStyles[t] = this.validatedBlockStyle_(e[t]);
                            this.setDynamicProperties_(t)
                        }
                        setDynamicProperties_(t) {
                            this.setFontConstants_(t), this.setComponentConstants_(t), this.ADD_START_HATS = void 0 !== t.startHats ? t.startHats : this.ADD_START_HATS
                        }
                        setFontConstants_(t) {
                            t.fontStyle && t.fontStyle.family && (this.FIELD_TEXT_FONTFAMILY = t.fontStyle.family), t.fontStyle && t.fontStyle.weight && (this.FIELD_TEXT_FONTWEIGHT = t.fontStyle.weight), t.fontStyle && t.fontStyle.size && (this.FIELD_TEXT_FONTSIZE = t.fontStyle.size), t = tw("Hg", this.FIELD_TEXT_FONTSIZE + "pt", this.FIELD_TEXT_FONTWEIGHT, this.FIELD_TEXT_FONTFAMILY), this.FIELD_TEXT_HEIGHT = t.height, this.FIELD_TEXT_BASELINE = t.baseline
                        }
                        setComponentConstants_(t) {
                            this.CURSOR_COLOUR = t.getComponentStyle("cursorColour") || this.CURSOR_COLOUR, this.MARKER_COLOUR = t.getComponentStyle("markerColour") || this.MARKER_COLOUR, this.INSERTION_MARKER_COLOUR = t.getComponentStyle("insertionMarkerColour") || this.INSERTION_MARKER_COLOUR, this.INSERTION_MARKER_OPACITY = Number(t.getComponentStyle("insertionMarkerOpacity")) || this.INSERTION_MARKER_OPACITY
                        }
                        getBlockStyleForColour(t) {
                            let e = "auto_" + t;
                            return this.blockStyles[e] || (this.blockStyles[e] = this.createBlockStyle_(t)), {
                                style: this.blockStyles[e],
                                name: e
                            }
                        }
                        getBlockStyle(t) {
                            return this.blockStyles[t || ""] || (t && 0 === t.indexOf("auto_") ? this.getBlockStyleForColour(t.substring(5)).style : this.createBlockStyle_("#000000"))
                        }
                        createBlockStyle_(t) {
                            return this.validatedBlockStyle_({
                                colourPrimary: t
                            })
                        }
                        validatedBlockStyle_(t) {
                            let e = {};
                            return t && Object.assign(e, t), t = sI(e.colourPrimary || "#000"), e.colourPrimary = t.hex, e.colourSecondary = e.colourSecondary ? sI(e.colourSecondary).hex : this.generateSecondaryColour_(e.colourPrimary), e.colourTertiary = e.colourTertiary ? sI(e.colourTertiary).hex : this.generateTertiaryColour_(e.colourPrimary), e.hat = e.hat || "", e
                        }
                        generateSecondaryColour_(t) {
                            return sw("#fff", t, .6) || t
                        }
                        generateTertiaryColour_(t) {
                            return sw("#fff", t, .3) || t
                        }
                        dispose() {
                            this.embossFilter && tb(this.embossFilter), this.disabledPattern && tb(this.disabledPattern), this.debugFilter && tb(this.debugFilter), this.cssNode = null
                        }
                        makeJaggedTeeth() {
                            let t = this.JAGGED_TEETH_HEIGHT,
                                e = this.JAGGED_TEETH_WIDTH,
                                i = sK([sW(e, t / 4), sW(-(2 * e), t / 2), sW(e, t / 4)]);
                            return {
                                height: t,
                                width: e,
                                path: i
                            }
                        }
                        makeStartHat() {
                            let t = this.START_HAT_HEIGHT,
                                e = this.START_HAT_WIDTH,
                                i = sV("c", [sW(30, -t), sW(70, -t), sW(e, 0)]);
                            return {
                                height: t,
                                width: e,
                                path: i
                            }
                        }
                        makePuzzleTab() {
                            function t(t) {
                                t = t ? -1 : 1;
                                let s = -t;
                                var o = i / 2;
                                let n = o + 2.5,
                                    r = o + .5,
                                    l = sW(-e, t * o);
                                return o = sW(e, t * o), sV("c", [sW(0, t * n), sW(-e, s * r), l]) + sV("s", [sW(e, 2.5 * s), o])
                            }
                            let e = this.TAB_WIDTH,
                                i = this.TAB_HEIGHT,
                                s = t(!0),
                                o = t(!1);
                            return {
                                type: this.SHAPES.PUZZLE,
                                width: e,
                                height: i,
                                pathDown: o,
                                pathUp: s
                            }
                        }
                        makeNotch() {
                            function t(t) {
                                return sK([sW(t * s, i), sW(3 * t, 0), sW(t * s, -i)])
                            }
                            let e = this.NOTCH_WIDTH,
                                i = this.NOTCH_HEIGHT,
                                s = (e - 3) / 2,
                                o = t(1),
                                n = t(-1);
                            return {
                                type: this.SHAPES.NOTCH,
                                width: e,
                                height: i,
                                pathLeft: o,
                                pathRight: n
                            }
                        }
                        makeInsideCorners() {
                            let t = this.CORNER_RADIUS,
                                e = sj("a", "0 0,0", t, sW(-t, t)),
                                i = sj("a", "0 0,0", t, sW(t, t));
                            return {
                                width: t,
                                height: t,
                                pathTop: e,
                                pathBottom: i
                            }
                        }
                        makeOutsideCorners() {
                            let t = this.CORNER_RADIUS,
                                e = sX(0, t) + sj("a", "0 0,1", t, sW(t, -t)),
                                i = sj("a", "0 0,1", t, sW(t, t)),
                                s = sj("a", "0 0,1", t, sW(-t, -t)),
                                o = sj("a", "0 0,1", t, sW(-t, t));
                            return {
                                topLeft: e,
                                topRight: i,
                                bottomRight: o,
                                bottomLeft: s,
                                rightHeight: t
                            }
                        }
                        shapeFor(t) {
                            switch (t.type) {
                                case lx.INPUT_VALUE:
                                case lx.OUTPUT_VALUE:
                                    return this.PUZZLE_TAB;
                                case lx.PREVIOUS_STATEMENT:
                                case lx.NEXT_STATEMENT:
                                    return this.NOTCH;
                                default:
                                    throw Error("Unknown connection type")
                            }
                        }
                        createDom(t, e, i) {
                            this.injectCSS_(e, i), this.defs = tu(rp.DEFS, {}, t), t = tu(rp.FILTER, {
                                id: "blocklyEmbossFilter" + this.randomIdentifier
                            }, this.defs), tu(rp.FEGAUSSIANBLUR, {
                                in: "SourceAlpha",
                                stdDeviation: 1,
                                result: "blur"
                            }, t), e = tu(rp.FESPECULARLIGHTING, {
                                in: "blur",
                                surfaceScale: 1,
                                specularConstant: .5,
                                specularExponent: 10,
                                "lighting-color": "white",
                                result: "specOut"
                            }, t), tu(rp.FEPOINTLIGHT, {
                                x: -5e3,
                                y: -1e4,
                                z: 2e4
                            }, e), tu(rp.FECOMPOSITE, {
                                in: "specOut",
                                in2: "SourceAlpha",
                                operator: "in",
                                result: "specOut"
                            }, t), tu(rp.FECOMPOSITE, {
                                in: "SourceGraphic",
                                in2: "specOut",
                                operator: "arithmetic",
                                k1: 0,
                                k2: 1,
                                k3: 1,
                                k4: 0
                            }, t), this.embossFilterId = t.id, this.embossFilter = t, t = tu(rp.PATTERN, {
                                id: "blocklyDisabledPattern" + this.randomIdentifier,
                                patternUnits: "userSpaceOnUse",
                                width: 10,
                                height: 10
                            }, this.defs), tu(rp.RECT, {
                                width: 10,
                                height: 10,
                                fill: "#aaa"
                            }, t), tu(rp.PATH, {
                                d: "M 0 0 L 10 10 M 10 0 L 0 10",
                                stroke: "#cc0"
                            }, t), this.disabledPatternId = t.id, this.disabledPattern = t, this.createDebugFilter()
                        }
                        createDebugFilter() {
                            if (!this.debugFilter) {
                                let t = tu(rp.FILTER, {
                                        id: "blocklyDebugFilter" + this.randomIdentifier,
                                        height: "160%",
                                        width: "180%",
                                        y: "-30%",
                                        x: "-40%"
                                    }, this.defs),
                                    e = tu(rp.FECOMPONENTTRANSFER, {
                                        result: "outBlur"
                                    }, t);
                                tu(rp.FEFUNCA, {
                                    type: "table",
                                    tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
                                }, e), tu(rp.FEFLOOD, {
                                    "flood-color": "#ff0000",
                                    "flood-opacity": .5,
                                    result: "outColor"
                                }, t), tu(rp.FECOMPOSITE, {
                                    in: "outColor",
                                    in2: "outBlur",
                                    operator: "in",
                                    result: "outGlow"
                                }, t), this.debugFilterId = t.id, this.debugFilter = t
                            }
                        }
                        injectCSS_(t, e) {
                            e = this.getCSS_(e), t = "blockly-renderer-style-" + t, this.cssNode = document.getElementById(t);
                            let i = e.join("\n");
                            this.cssNode ? this.cssNode.firstChild.textContent = i : ((e = document.createElement("style")).id = t, t = document.createTextNode(i), e.appendChild(t), document.head.insertBefore(e, document.head.firstChild), this.cssNode = e)
                        }
                        getCSS_(t) {
                            return [`${t} .blocklyText, `, `${t} .blocklyFlyoutLabelText {`, `font: ${this.FIELD_TEXT_FONTWEIGHT} ${this.FIELD_TEXT_FONTSIZE}pt ${this.FIELD_TEXT_FONTFAMILY};`, "}", `${t} .blocklyText {`, "fill: #fff;", "}", `${t} .blocklyNonEditableText>rect,`, `${t} .blocklyEditableText>rect {`, `fill: ${this.FIELD_BORDER_RECT_COLOUR};`, "fill-opacity: .6;", "stroke: none;", "}", `${t} .blocklyNonEditableText>text,`, `${t} .blocklyEditableText>text {`, "fill: #000;", "}", `${t} .blocklyFlyoutLabelText {`, "fill: #000;", "}", `${t} .blocklyText.blocklyBubbleText {`, "fill: #000;", "}", `${t} .blocklyEditableText:not(.editing):hover>rect {`, "stroke: #fff;", "stroke-width: 2;", "}", `${t} .blocklyHtmlInput {`, `font-family: ${this.FIELD_TEXT_FONTFAMILY};`, `font-weight: ${this.FIELD_TEXT_FONTWEIGHT};`, "}", `${t} .blocklySelected>.blocklyPath {`, "stroke: #fc3;", "stroke-width: 3px;", "}", `${t} .blocklyHighlightedConnectionPath {`, "stroke: #fc3;", "}", `${t} .blocklyReplaceable .blocklyPath {`, "fill-opacity: .5;", "}", `${t} .blocklyReplaceable .blocklyPathLight,`, `${t} .blocklyReplaceable .blocklyPathDark {`, "display: none;", "}", `${t} .blocklyInsertionMarker>.blocklyPath {`, `fill-opacity: ${this.INSERTION_MARKER_OPACITY};`, "stroke: none;", "}"]
                        }
                    },
                    hB = {};
                hB.ConstantProvider = hM, hB.isDynamicShape = s4;
                var hP = class {
                    constructor(t, e) {
                        this.inlinePath_ = this.outlinePath_ = "", this.block_ = t, this.info_ = e, this.topLeft_ = t.getRelativeToSurfaceXY(), this.constants_ = e.getRenderer().getConstants()
                    }
                    draw() {
                        this.drawOutline_(), this.drawInternals_(), this.block_.pathObject.setPath(this.outlinePath_ + "\n" + this.inlinePath_), this.info_.RTL && this.block_.pathObject.flipRTL(), this.recordSizeOnBlock_()
                    }
                    hideHiddenIcons_() {
                        tc("hideHiddenIcons_", "v10", "v11")
                    }
                    recordSizeOnBlock_() {
                        this.block_.height = this.info_.height, this.block_.width = this.info_.widthWithChildren
                    }
                    drawOutline_() {
                        this.drawTop_();
                        for (let t = 1; t < this.info_.rows.length - 1; t++) {
                            let e = this.info_.rows[t];
                            e.hasJaggedEdge ? this.drawJaggedEdge_(e) : e.hasStatement ? this.drawStatementInput_(e) : e.hasExternalInput ? this.drawValueInput_(e) : this.drawRightSideRow_(e)
                        }
                        this.drawBottom_(), this.drawLeft_()
                    }
                    drawTop_() {
                        let t = this.info_.topRow,
                            e = t.elements;
                        this.positionPreviousConnection_(), this.outlinePath_ += sX(t.xPos, this.info_.startY);
                        for (let t = 0, i; i = e[t]; t++) hg.isLeftRoundedCorner(i) ? this.outlinePath_ += this.constants_.OUTSIDE_CORNERS.topLeft : hg.isRightRoundedCorner(i) ? this.outlinePath_ += this.constants_.OUTSIDE_CORNERS.topRight : hg.isPreviousConnection(i) && i instanceof hf ? this.outlinePath_ += i.shape.pathLeft : hg.isHat(i) ? this.outlinePath_ += this.constants_.START_HAT.path : hg.isSpacer(i) && (this.outlinePath_ += sJ("h", i.width));
                        this.outlinePath_ += sJ("v", t.height)
                    }
                    drawJaggedEdge_(t) {
                        this.outlinePath_ += this.constants_.JAGGED_TEETH.path + sJ("v", t.height - this.constants_.JAGGED_TEETH.height)
                    }
                    drawValueInput_(t) {
                        let e = t.getLastInput();
                        this.positionExternalValueConnection_(t);
                        let i = s4(e.shape) ? e.shape.pathDown(e.height) : e.shape.pathDown;
                        this.outlinePath_ += sJ("H", e.xPos + e.width) + i + sJ("v", t.height - e.connectionHeight)
                    }
                    drawStatementInput_(t) {
                        var e = t.getLastInput();
                        if (e) {
                            var i = e.xPos + e.notchOffset + e.shape.width;
                            e = e.shape.pathRight + sJ("h", -(e.notchOffset - this.constants_.INSIDE_CORNERS.width)) + this.constants_.INSIDE_CORNERS.pathTop;
                            var s = t.height - 2 * this.constants_.INSIDE_CORNERS.height;
                            this.outlinePath_ += sJ("H", i) + e + sJ("v", s) + this.constants_.INSIDE_CORNERS.pathBottom + sJ("H", t.xPos + t.width), this.positionStatementInputConnection_(t)
                        }
                    }
                    drawRightSideRow_(t) {
                        this.outlinePath_ += sJ("V", t.yPos + t.height)
                    }
                    drawBottom_() {
                        let t = this.info_.bottomRow,
                            e = t.elements;
                        this.positionNextConnection_();
                        let i = 0,
                            s = "";
                        for (let o = e.length - 1, n; n = e[o]; o--) hg.isNextConnection(n) && n instanceof hf ? s += n.shape.pathRight : hg.isLeftSquareCorner(n) ? s += sJ("H", t.xPos) : hg.isLeftRoundedCorner(n) ? s += this.constants_.OUTSIDE_CORNERS.bottomLeft : hg.isRightRoundedCorner(n) ? (s += this.constants_.OUTSIDE_CORNERS.bottomRight, i = this.constants_.OUTSIDE_CORNERS.rightHeight) : hg.isSpacer(n) && (s += sJ("h", -1 * n.width));
                        this.outlinePath_ += sJ("V", t.baseline - i), this.outlinePath_ += s
                    }
                    drawLeft_() {
                        var t = this.info_.outputConnection;
                        if (this.positionOutputConnection_(), t) {
                            let e = t.connectionOffsetY + t.height;
                            t = s4(t.shape) ? t.shape.pathUp(t.height) : t.shape.pathUp, this.outlinePath_ += sJ("V", e) + t
                        }
                        this.outlinePath_ += "z"
                    }
                    drawInternals_() {
                        for (let t = 0, e; e = this.info_.rows[t]; t++)
                            for (let t = 0, i; i = e.elements[t]; t++) hg.isInlineInput(i) ? this.drawInlineInput_(i) : (hg.isIcon(i) || hg.isField(i)) && this.layoutField_(i)
                    }
                    layoutField_(t) {
                        let e = t.centerline - t.height / 2,
                            i = t.xPos;
                        var s = "";
                        this.info_.RTL && (i = -(i + t.width), t.flipRtl && (i += t.width, s = "scale(-1 1)")), hg.isIcon(t) ? ((s = t.icon).setOffsetInBlock(new n3(i, e)), this.info_.isInsertionMarker && s.hideForInsertionMarker()) : ((t = t.field.getSvgRoot()).setAttribute("transform", "translate(" + i + "," + e + ")" + s), this.info_.isInsertionMarker && t.setAttribute("display", "none"))
                    }
                    drawInlineInput_(t) {
                        let e = t.width,
                            i = t.height,
                            s = t.connectionOffsetY,
                            o = t.connectionHeight + s;
                        this.inlinePath_ += sz(t.xPos + t.connectionWidth, t.centerline - i / 2) + sJ("v", s) + t.shape.pathDown + sJ("v", i - o) + sJ("h", e - t.connectionWidth) + sJ("v", -i) + "z", this.positionInlineInputConnection_(t)
                    }
                    positionInlineInputConnection_(t) {
                        let e = t.centerline - t.height / 2;
                        if (t.connectionModel) {
                            let i = t.xPos + t.connectionWidth + t.connectionOffsetX;
                            this.info_.RTL && (i *= -1), t.connectionModel.setOffsetInBlock(i, e + t.connectionOffsetY)
                        }
                    }
                    positionStatementInputConnection_(t) {
                        let e = t.getLastInput();
                        if (null == e ? 0 : e.connectionModel) {
                            let i = t.xPos + t.statementEdge + e.notchOffset;
                            this.info_.RTL && (i *= -1), e.connectionModel.setOffsetInBlock(i, t.yPos)
                        }
                    }
                    positionExternalValueConnection_(t) {
                        let e = t.getLastInput();
                        if (e && e.connectionModel) {
                            let i = t.xPos + t.width;
                            this.info_.RTL && (i *= -1), e.connectionModel.setOffsetInBlock(i, t.yPos)
                        }
                    }
                    positionPreviousConnection_() {
                        let t = this.info_.topRow;
                        if (t.connection) {
                            let e = t.xPos + t.notchOffset;
                            t.connection.connectionModel.setOffsetInBlock(this.info_.RTL ? -e : e, 0)
                        }
                    }
                    positionNextConnection_() {
                        let t = this.info_.bottomRow;
                        if (t.connection) {
                            let e = t.connection,
                                i = e.xPos;
                            e.connectionModel.setOffsetInBlock(this.info_.RTL ? -i : i, t.baseline)
                        }
                    }
                    positionOutputConnection_() {
                        if (this.info_.outputConnection) {
                            let t = this.info_.startX + this.info_.outputConnection.connectionOffsetX;
                            this.block_.outputConnection.setOffsetInBlock(this.info_.RTL ? -t : t, this.info_.outputConnection.connectionOffsetY)
                        }
                    }
                };
                (hG = r.Align$$module$build$src$core$inputs$align || (r.Align$$module$build$src$core$inputs$align = {}))[hG.LEFT = -1] = "LEFT", hG[hG.CENTRE = 0] = "CENTRE", hG[hG.RIGHT = 1] = "RIGHT", r.Align$$module$build$src$core$inputs$align;
                var hF = class extends aQ {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.class = null, this.EDITABLE = !1, this.maxDisplayLength = 1 / 0, t !== aQ.SKIP_SETUP && (i ? this.configure_(i) : this.class = e || null, this.setValue(t))
                    }
                    configure_(t) {
                        super.configure_(t), t.class && (this.class = t.class)
                    }
                    initView() {
                        this.createTextElement_(), this.class && td(this.getTextElement(), this.class)
                    }
                    doClassValidation_(t) {
                        return null == t ? null : `${t}`
                    }
                    setClass(t) {
                        this.textElement_ && (this.class && tg(this.textElement_, this.class), t && td(this.textElement_, t)), this.class = t
                    }
                    static fromJson(t) {
                        return new this(sv(t.text), void 0, t)
                    }
                };
                sD("field_label", hF), hF.prototype.DEFAULT_VALUE = "";
                var hH, hG, hU, hW, hV, hz = class {
                    constructor(t, e) {
                        this.name = t, this.sourceBlock = e, this.fieldRow = [], this.align = r.Align$$module$build$src$core$inputs$input.LEFT, this.visible = !0, this.type = r.inputTypes$$module$build$src$core$inputs$input_types.CUSTOM, this.connection = null
                    }
                    getSourceBlock() {
                        return this.sourceBlock
                    }
                    appendField(t, e) {
                        return this.insertFieldAt(this.fieldRow.length, t, e), this
                    }
                    insertFieldAt(t, e, i) {
                        if (0 > t || t > this.fieldRow.length) throw Error("index " + t + " out of bounds.");
                        return (e || "" === e && i) && ("string" == typeof e && (e = r.fromJson$$module$build$src$core$field_registry({
                            type: "field_label",
                            text: e
                        })), e.setSourceBlock(this.sourceBlock), this.sourceBlock.rendered && (e.init(), e.applyColour()), e.name = i, e.setVisible(this.isVisible()), e.prefixField && (t = this.insertFieldAt(t, e.prefixField)), this.fieldRow.splice(t, 0, e), t++, e.suffixField && (t = this.insertFieldAt(t, e.suffixField)), this.sourceBlock.rendered && (this.sourceBlock.queueRender(), this.sourceBlock.bumpNeighbours())), t
                    }
                    removeField(t, e) {
                        for (let e = 0, i; i = this.fieldRow[e]; e++)
                            if (i.name === t) return i.dispose(), this.fieldRow.splice(e, 1), this.sourceBlock.rendered && (this.sourceBlock.queueRender(), this.sourceBlock.bumpNeighbours()), !0;
                        if (e) return !1;
                        throw Error('Field "' + t + '" not found.')
                    }
                    isVisible() {
                        return this.visible
                    }
                    setVisible(t) {
                        let e = [];
                        if (this.visible === t) return e;
                        this.visible = t;
                        for (let e = 0, i; i = this.fieldRow[e]; e++) i.setVisible(t);
                        if (this.connection) {
                            var i = this.connection;
                            t ? e = i.startTrackingAll() : i.stopTrackingAll(), (i = i.targetBlock()) && (i.getSvgRoot().style.display = t ? "block" : "none")
                        }
                        return e
                    }
                    markDirty() {
                        for (let t = 0, e; e = this.fieldRow[t]; t++) e.markDirty()
                    }
                    setCheck(t) {
                        if (!this.connection) throw Error("This input does not have a connection.");
                        return this.connection.setCheck(t), this
                    }
                    setAlign(t) {
                        return this.align = t, this.sourceBlock.rendered && this.sourceBlock.queueRender(), this
                    }
                    setShadowDom(t) {
                        if (!this.connection) throw Error("This input does not have a connection.");
                        return this.connection.setShadowDom(t), this
                    }
                    getShadowDom() {
                        if (!this.connection) throw Error("This input does not have a connection.");
                        return this.connection.getShadowDom()
                    }
                    init() {
                        if (this.sourceBlock.workspace.rendered)
                            for (let t = 0; t < this.fieldRow.length; t++) this.fieldRow[t].init()
                    }
                    dispose() {
                        for (let t = 0, e; e = this.fieldRow[t]; t++) e.dispose();
                        this.connection && this.connection.dispose()
                    }
                    makeConnection(t) {
                        return this.sourceBlock.makeConnection_(t)
                    }
                };
                (c3 = (c3 = hz || (hz = {})).Align || (c3.Align = {}))[c3.LEFT = -1] = "LEFT", c3[c3.CENTRE = 0] = "CENTRE", c3[c3.RIGHT = 1] = "RIGHT", r.Align$$module$build$src$core$inputs$input = hz.Align, ({
                    Align: r.Align$$module$build$src$core$inputs$input
                }).Input = hz;
                var hX = class extends hz {
                        constructor(t, e) {
                            super(t, e), this.name = t, this.type = r.inputTypes$$module$build$src$core$inputs$input_types.DUMMY
                        }
                    },
                    hY = class extends hz {
                        constructor(t, e) {
                            super(t, e), this.name = t, this.type = r.inputTypes$$module$build$src$core$inputs$input_types.END_ROW
                        }
                    },
                    hK = class extends hz {
                        constructor(t, e) {
                            if (!t) throw Error("Statement inputs must have a non-empty name");
                            super(t, e), this.name = t, this.type = r.inputTypes$$module$build$src$core$inputs$input_types.STATEMENT, this.connection = this.makeConnection(lx.NEXT_STATEMENT)
                        }
                    };
                r.ValueInput$$module$build$src$core$inputs$value_input = class extends hz {
                    constructor(t, e) {
                        if (!t) throw Error("Value inputs must have a non-empty name");
                        super(t, e), this.name = t, this.type = r.inputTypes$$module$build$src$core$inputs$input_types.VALUE, this.connection = this.makeConnection(lx.INPUT_VALUE)
                    }
                }, r.ValueInput$$module$build$src$core$inputs$value_input;
                var hJ = class {
                        constructor(t, e) {
                            this.statementEdge = this.width = this.widthWithChildren = this.height = 0, this.rows = [], this.inputRows = [], this.startY = this.startX = 0, this.renderer_ = t, this.block_ = e, this.constants_ = this.renderer_.getConstants(), this.outputConnection = e.outputConnection ? new hD(this.constants_, e.outputConnection) : null, this.isInline = e.getInputsInline() && !e.isCollapsed(), this.isCollapsed = e.isCollapsed(), this.isInsertionMarker = e.isInsertionMarker(), this.RTL = e.RTL, this.topRow = new hL(this.constants_), this.bottomRow = new hm(this.constants_)
                        }
                        getRenderer() {
                            return this.renderer_
                        }
                        measure() {
                            this.createRows_(), this.addElemSpacing_(), this.addRowSpacing_(), this.computeBounds_(), this.alignRowElements_(), this.finalize_()
                        }
                        createRows_() {
                            this.populateTopRow_(), this.rows.push(this.topRow);
                            let t = new hI(this.constants_);
                            this.inputRows.push(t);
                            var e = this.block_.getIcons();
                            for (let i = 0, s; s = e[i]; i++) {
                                let e = new hy(this.constants_, s);
                                this.isCollapsed && !s.isShownWhenCollapsed() || t.elements.push(e)
                            }
                            e = void 0;
                            for (let i = 0, s; s = this.block_.inputList[i]; i++)
                                if (s.isVisible()) {
                                    this.shouldStartNewRow_(s, e) && (this.rows.push(t), t = new hI(this.constants_), this.inputRows.push(t));
                                    for (let e = 0, i; i = s.fieldRow[e]; e++) t.elements.push(new hk(this.constants_, i, s));
                                    this.addInput_(s, t), e = s
                                } this.isCollapsed && (t.hasJaggedEdge = !0, t.elements.push(new hS(this.constants_))), (t.elements.length || t.hasDummyInput) && this.rows.push(t), this.populateBottomRow_(), this.rows.push(this.bottomRow)
                        }
                        populateTopRow_() {
                            var t = !!this.block_.previousConnection;
                            let e = (this.block_.hat ? "cap" === this.block_.hat : this.constants_.ADD_START_HATS) && !this.outputConnection && !t,
                                i = this.topRow.hasLeftSquareCorner(this.block_) ? hx : hN;
                            this.topRow.elements.push(new i(this.constants_)), e ? (t = new hw(this.constants_), this.topRow.elements.push(t), this.topRow.capline = t.ascenderHeight) : t && (this.topRow.hasPreviousConnection = !0, this.topRow.connection = new hA(this.constants_, this.block_.previousConnection), this.topRow.elements.push(this.topRow.connection)), this.block_.inputList.length && this.block_.inputList[0] instanceof hK && !this.block_.isCollapsed() ? this.topRow.minHeight = this.constants_.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT : this.topRow.minHeight = this.constants_.TOP_ROW_MIN_HEIGHT, i = this.topRow.hasRightSquareCorner(this.block_) ? hx : hN, this.topRow.elements.push(new i(this.constants_, "right"))
                        }
                        populateBottomRow_() {
                            this.bottomRow.hasNextConnection = !!this.block_.nextConnection, this.bottomRow.minHeight = this.block_.inputList.length && this.block_.inputList[this.block_.inputList.length - 1] instanceof hK ? this.constants_.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT : this.constants_.BOTTOM_ROW_MIN_HEIGHT, this.bottomRow.hasLeftSquareCorner(this.block_) ? this.bottomRow.elements.push(new hx(this.constants_)) : this.bottomRow.elements.push(new hN(this.constants_)), this.bottomRow.hasNextConnection && (this.bottomRow.connection = new hR(this.constants_, this.block_.nextConnection), this.bottomRow.elements.push(this.bottomRow.connection)), this.bottomRow.hasRightSquareCorner(this.block_) ? this.bottomRow.elements.push(new hx(this.constants_, "right")) : this.bottomRow.elements.push(new hN(this.constants_, "right"))
                        }
                        addInput_(t, e) {
                            this.isInline && t instanceof r.ValueInput$$module$build$src$core$inputs$value_input ? (e.elements.push(new hC(this.constants_, t)), e.hasInlineInput = !0) : t instanceof hK ? (e.elements.push(new hv(this.constants_, t)), e.hasStatement = !0) : t instanceof r.ValueInput$$module$build$src$core$inputs$value_input ? (e.elements.push(new hT(this.constants_, t)), e.hasExternalInput = !0) : (t instanceof hX || t instanceof hY) && (e.minHeight = Math.max(e.minHeight, t.getSourceBlock() && t.getSourceBlock().isShadow() ? this.constants_.DUMMY_INPUT_SHADOW_MIN_HEIGHT : this.constants_.DUMMY_INPUT_MIN_HEIGHT), e.hasDummyInput = !0), null === e.align && (e.align = t.align)
                        }
                        shouldStartNewRow_(t, e) {
                            return !!e && (e instanceof hY || t instanceof hK || e instanceof hK || (t instanceof r.ValueInput$$module$build$src$core$inputs$value_input || t instanceof hX || e instanceof r.ValueInput$$module$build$src$core$inputs$value_input) && !this.isInline)
                        }
                        addElemSpacing_() {
                            for (let t = 0, e; e = this.rows[t]; t++) {
                                let t = e.elements;
                                if (e.elements = [], e.startsWithElemSpacer() && e.elements.push(new h$(this.constants_, this.getInRowSpacing_(null, t[0]))), t.length) {
                                    for (let i = 0; i < t.length - 1; i++) {
                                        e.elements.push(t[i]);
                                        let s = this.getInRowSpacing_(t[i], t[i + 1]);
                                        e.elements.push(new h$(this.constants_, s))
                                    }
                                    e.elements.push(t[t.length - 1]), e.endsWithElemSpacer() && e.elements.push(new h$(this.constants_, this.getInRowSpacing_(t[t.length - 1], null)))
                                }
                            }
                        }
                        getInRowSpacing_(t, e) {
                            if (!t && e && hg.isStatementInput(e)) return this.constants_.STATEMENT_INPUT_PADDING_LEFT;
                            if (t && hg.isInput(t) && !e) {
                                if (hg.isExternalInput(t)) return this.constants_.NO_PADDING;
                                if (hg.isInlineInput(t)) return this.constants_.LARGE_PADDING;
                                if (hg.isStatementInput(t)) return this.constants_.NO_PADDING
                            }
                            return t && hg.isLeftSquareCorner(t) && e && (hg.isPreviousConnection(e) || hg.isNextConnection(e)) ? e.notchOffset : t && hg.isLeftRoundedCorner(t) && e && (hg.isPreviousConnection(e) || hg.isNextConnection(e)) ? e.notchOffset - this.constants_.CORNER_RADIUS : this.constants_.MEDIUM_PADDING
                        }
                        computeBounds_() {
                            let t = 0,
                                e = 0,
                                i = 0;
                            for (let o = 0, n; n = this.rows[o]; o++) {
                                if (n.measure(), e = Math.max(e, n.width), n.hasStatement) {
                                    let e, i;
                                    var s = n.getLastInput();
                                    t = Math.max(t, s = n.width - (null != (i = null == (e = s) ? void 0 : e.width) ? i : 0))
                                }
                                i = Math.max(i, n.widthWithConnectedBlocks)
                            }
                            this.statementEdge = t, this.width = e;
                            for (let t = 0, e; e = this.rows[t]; t++) e.hasStatement && (e.statementEdge = this.statementEdge);
                            this.widthWithChildren = Math.max(e, i), this.outputConnection && (this.startX = this.outputConnection.width, this.width += this.outputConnection.width, this.widthWithChildren += this.outputConnection.width)
                        }
                        alignRowElements_() {
                            for (let e = 0, i; i = this.rows[e]; e++)
                                if (i.hasStatement) this.alignStatementRow_(i);
                                else {
                                    var t = i.width;
                                    0 < (t = this.getDesiredRowWidth_(i) - t) && this.addAlignmentPadding_(i, t), hg.isTopOrBottomRow(i) && (i.widthWithConnectedBlocks = i.width)
                                }
                        }
                        getDesiredRowWidth_(t) {
                            return this.width - this.startX
                        }
                        addAlignmentPadding_(t, e) {
                            let i = t.getFirstSpacer(),
                                s = t.getLastSpacer();
                            if ((t.hasExternalInput || t.hasStatement) && (t.widthWithConnectedBlocks += e), t.align === r.Align$$module$build$src$core$inputs$align.LEFT && s) s.width += e;
                            else if (t.align === r.Align$$module$build$src$core$inputs$align.CENTRE && i && s) i.width += e / 2, s.width += e / 2;
                            else if (t.align === r.Align$$module$build$src$core$inputs$align.RIGHT && i) i.width += e;
                            else {
                                if (!s) return;
                                s.width += e
                            }
                            t.width += e
                        }
                        alignStatementRow_(t) {
                            let e = t.getLastInput();
                            if (e) {
                                var i = t.width - e.width,
                                    s = this.statementEdge;
                                0 < (i = s - i) && this.addAlignmentPadding_(t, i), i = t.width, s = this.getDesiredRowWidth_(t), e.width += s - i, e.height = Math.max(e.height, t.height), t.width += s - i, t.widthWithConnectedBlocks = Math.max(t.width, this.statementEdge + t.connectedBlockWidths)
                            }
                        }
                        addRowSpacing_() {
                            let t = this.rows;
                            this.rows = [];
                            for (let e = 0; e < t.length; e++) this.rows.push(t[e]), e !== t.length - 1 && this.rows.push(this.makeSpacerRow_(t[e], t[e + 1]))
                        }
                        makeSpacerRow_(t, e) {
                            var i = this.getSpacerRowHeight_(t, e);
                            let s = this.getSpacerRowWidth_(t, e);
                            return i = new hO(this.constants_, i, s), t.hasStatement && (i.followsStatement = !0), e.hasStatement && (i.precedesStatement = !0), i
                        }
                        getSpacerRowWidth_(t, e) {
                            return this.width - this.startX
                        }
                        getSpacerRowHeight_(t, e) {
                            return this.constants_.MEDIUM_PADDING
                        }
                        getElemCenterline_(t, e) {
                            return hg.isSpacer(e) ? t.yPos + e.height / 2 : hg.isBottomRow(t) ? (t = t.yPos + t.height - t.descenderHeight, hg.isNextConnection(e) ? t + e.height / 2 : t - e.height / 2) : hg.isTopRow(t) ? hg.isHat(e) ? t.capline - e.height / 2 : t.capline + e.height / 2 : t.yPos + t.height / 2
                        }
                        recordElemPositions_(t) {
                            let e = t.xPos;
                            for (let i = 0, s; s = t.elements[i]; i++) hg.isSpacer(s) && (s.height = t.height), s.xPos = e, s.centerline = this.getElemCenterline_(t, s), e += s.width
                        }
                        finalize_() {
                            let t = 0,
                                e = 0;
                            for (let i = 0, s; s = this.rows[i]; i++) s.yPos = e, s.xPos = this.startX, e += s.height, t = Math.max(t, s.widthWithConnectedBlocks), this.recordElemPositions_(s);
                            if (this.outputConnection && this.block_.nextConnection) {
                                let e = this.block_.nextConnection.targetBlock();
                                e && (t = Math.max(t, e.getHeightWidth().width))
                            }
                            this.widthWithChildren = t + this.startX, this.height = e, this.startY = this.topRow.capline, this.bottomRow.baseline = e - this.bottomRow.descenderHeight
                        }
                    },
                    hj = class {
                        constructor(t, e, i) {
                            if (this.wsCoordinate = null, !e) throw Error("Cannot create a node without a location.");
                            this.type = t, this.isConnectionLocation = hj.isConnectionType(t), this.location = e, this.processParams(i || null)
                        }
                        processParams(t) {
                            t && t.wsCoordinate && (this.wsCoordinate = t.wsCoordinate)
                        }
                        getLocation() {
                            return this.location
                        }
                        getType() {
                            return this.type
                        }
                        getWsCoordinate() {
                            return this.wsCoordinate
                        }
                        isConnection() {
                            return this.isConnectionLocation
                        }
                        findNextForInput() {
                            var t = this.location.getParentInput();
                            let e = t.getSourceBlock();
                            for (t = e.inputList.indexOf(t) + 1; t < e.inputList.length; t++) {
                                let i = e.inputList[t],
                                    s = i.fieldRow;
                                for (let t = 0; t < s.length; t++) {
                                    let e = s[t];
                                    if (e.isClickable() || hj.NAVIGATE_ALL_FIELDS) return hj.createFieldNode(e)
                                }
                                if (i.connection) return hj.createInputNode(i)
                            }
                            return null
                        }
                        findNextForField() {
                            var t = this.location,
                                e = t.getParentInput();
                            let i = t.getSourceBlock();
                            if (!i) throw Error("The current AST location is not associated with a block");
                            var s = i.inputList.indexOf(e);
                            for (t = e.fieldRow.indexOf(t) + 1; s < i.inputList.length; s++) {
                                e = i.inputList[s];
                                let o = e.fieldRow;
                                for (; t < o.length;) {
                                    if (o[t].isClickable() || hj.NAVIGATE_ALL_FIELDS) return hj.createFieldNode(o[t]);
                                    t++
                                }
                                if (t = 0, e.connection) return hj.createInputNode(e)
                            }
                            return null
                        }
                        findPrevForInput() {
                            let t = this.location.getParentInput(),
                                e = t.getSourceBlock();
                            for (var i = e.inputList.indexOf(t); 0 <= i; i--) {
                                var s = e.inputList[i];
                                if (s.connection && s !== t) return hj.createInputNode(s);
                                s = s.fieldRow;
                                for (let t = s.length - 1; 0 <= t; t--) {
                                    let e = s[t];
                                    if (e.isClickable() || hj.NAVIGATE_ALL_FIELDS) return hj.createFieldNode(e)
                                }
                            }
                            return null
                        }
                        findPrevForField() {
                            var t = this.location;
                            let e = t.getParentInput(),
                                i = t.getSourceBlock();
                            if (!i) throw Error("The current AST location is not associated with a block");
                            var s = i.inputList.indexOf(e);
                            for (t = e.fieldRow.indexOf(t) - 1; 0 <= s; s--) {
                                var o = i.inputList[s];
                                if (o.connection && o !== e) return hj.createInputNode(o);
                                for (o = o.fieldRow; - 1 < t;) {
                                    if (o[t].isClickable() || hj.NAVIGATE_ALL_FIELDS) return hj.createFieldNode(o[t]);
                                    t--
                                }
                                0 <= s - 1 && (t = i.inputList[s - 1].fieldRow.length - 1)
                            }
                            return null
                        }
                        navigateBetweenStacks(t) {
                            var e = this.getLocation();
                            if (e.getSourceBlock) {
                                var i = e.getSourceBlock();
                                i && (e = i)
                            }
                            if (!e || e.isDeadOrDying()) return null;
                            e = (i = e.getRootBlock()).workspace.getTopBlocks(!0);
                            for (let s = 0; s < e.length; s++)
                                if (i.id === e[s].id) return -1 === (t = s + (t ? 1 : -1)) || t === e.length ? null : hj.createStackNode(e[t]);
                            throw Error("Couldn't find " + (t ? "next" : "previous") + " stack?!")
                        }
                        findTopASTNodeForBlock(t) {
                            let e = s7(t);
                            return e ? hj.createConnectionNode(e) : hj.createBlockNode(t)
                        }
                        getOutAstNodeForBlock(t) {
                            if (!t) return null;
                            t = t.getTopStackBlock();
                            let e = s7(t);
                            return e && e.targetConnection && e.targetConnection.getParentInput() ? hj.createInputNode(e.targetConnection.getParentInput()) : hj.createStackNode(t)
                        }
                        findFirstFieldOrInput(t) {
                            t = t.inputList;
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e],
                                    s = i.fieldRow;
                                for (let t = 0; t < s.length; t++) {
                                    let e = s[t];
                                    if (e.isClickable() || hj.NAVIGATE_ALL_FIELDS) return hj.createFieldNode(e)
                                }
                                if (i.connection) return hj.createInputNode(i)
                            }
                            return null
                        }
                        getSourceBlock() {
                            return this.getType() === hj.types.BLOCK ? this.getLocation() : this.getType() === hj.types.STACK ? this.getLocation() : this.getType() === hj.types.WORKSPACE ? null : this.getLocation().getSourceBlock()
                        }
                        next() {
                            switch (this.type) {
                                case hj.types.STACK:
                                    return this.navigateBetweenStacks(!0);
                                case hj.types.OUTPUT:
                                    return hj.createBlockNode(this.location.getSourceBlock());
                                case hj.types.FIELD:
                                    return this.findNextForField();
                                case hj.types.INPUT:
                                    return this.findNextForInput();
                                case hj.types.BLOCK:
                                    let t = this.location.nextConnection;
                                    if (!t) break;
                                    return hj.createConnectionNode(t);
                                case hj.types.PREVIOUS:
                                    return hj.createBlockNode(this.location.getSourceBlock());
                                case hj.types.NEXT:
                                    return hj.createConnectionNode(this.location.targetConnection)
                            }
                            return null
                        } in () {
                            switch (this.type) {
                                case hj.types.WORKSPACE:
                                    let t = this.location.getTopBlocks(!0);
                                    if (0 < t.length) return hj.createStackNode(t[0]);
                                    break;
                                case hj.types.STACK:
                                    return this.findTopASTNodeForBlock(this.location);
                                case hj.types.BLOCK:
                                    return this.findFirstFieldOrInput(this.location);
                                case hj.types.INPUT:
                                    return hj.createConnectionNode(this.location.targetConnection)
                            }
                            return null
                        }
                        prev() {
                            switch (this.type) {
                                case hj.types.STACK:
                                    return this.navigateBetweenStacks(!1);
                                case hj.types.FIELD:
                                    return this.findPrevForField();
                                case hj.types.INPUT:
                                    return this.findPrevForInput();
                                case hj.types.BLOCK:
                                    var t = s7(this.location);
                                    if (!t) break;
                                    return hj.createConnectionNode(t);
                                case hj.types.PREVIOUS:
                                    if ((t = this.location.targetConnection) && !t.getParentInput()) return hj.createConnectionNode(t);
                                    break;
                                case hj.types.NEXT:
                                    return hj.createBlockNode(this.location.getSourceBlock())
                            }
                            return null
                        }
                        out() {
                            switch (this.type) {
                                case hj.types.STACK:
                                    var t = this.location,
                                        e = t.getRelativeToSurfaceXY();
                                    return e = new n3(e.x, e.y + hj.DEFAULT_OFFSET_Y), hj.createWorkspaceNode(t.workspace, e);
                                case hj.types.OUTPUT:
                                    return (e = (t = this.location).targetConnection) ? hj.createConnectionNode(e) : hj.createStackNode(t.getSourceBlock());
                                case hj.types.FIELD:
                                    if (!(t = this.location.getSourceBlock())) throw Error("The current AST location is not associated with a block");
                                    return hj.createBlockNode(t);
                                case hj.types.INPUT:
                                    return hj.createBlockNode(this.location.getSourceBlock());
                                case hj.types.BLOCK:
                                    return this.getOutAstNodeForBlock(this.location);
                                case hj.types.PREVIOUS:
                                case hj.types.NEXT:
                                    return this.getOutAstNodeForBlock(this.location.getSourceBlock())
                            }
                            return null
                        }
                        static isConnectionType(t) {
                            switch (t) {
                                case hj.types.PREVIOUS:
                                case hj.types.NEXT:
                                case hj.types.INPUT:
                                case hj.types.OUTPUT:
                                    return !0
                            }
                            return !1
                        }
                        static createFieldNode(t) {
                            return t ? new hj(hj.types.FIELD, t) : null
                        }
                        static createConnectionNode(t) {
                            if (!t) return null;
                            let e = t.type;
                            return e === lx.INPUT_VALUE || e === lx.NEXT_STATEMENT && t.getParentInput() ? hj.createInputNode(t.getParentInput()) : e === lx.NEXT_STATEMENT ? new hj(hj.types.NEXT, t) : e === lx.OUTPUT_VALUE ? new hj(hj.types.OUTPUT, t) : e === lx.PREVIOUS_STATEMENT ? new hj(hj.types.PREVIOUS, t) : null
                        }
                        static createInputNode(t) {
                            return t && t.connection ? new hj(hj.types.INPUT, t.connection) : null
                        }
                        static createBlockNode(t) {
                            return t ? new hj(hj.types.BLOCK, t) : null
                        }
                        static createStackNode(t) {
                            return t ? new hj(hj.types.STACK, t) : null
                        }
                        static createWorkspaceNode(t, e) {
                            return e && t ? new hj(hj.types.WORKSPACE, t, {
                                wsCoordinate: e
                            }) : null
                        }
                        static createTopNode(t) {
                            let e = s7(t);
                            return e ? hj.createConnectionNode(e) : hj.createBlockNode(t)
                        }
                    };
                hj.NAVIGATE_ALL_FIELDS = !1, hj.DEFAULT_OFFSET_Y = -20, (c5 = (c5 = hj || (hj = {})).types || (c5.types = {})).FIELD = "field", c5.BLOCK = "block", c5.INPUT = "input", c5.OUTPUT = "output", c5.NEXT = "next", c5.PREVIOUS = "previous", c5.STACK = "stack", c5.WORKSPACE = "workspace";
                var hZ = class extends nA {
                    constructor(t, e, i, s) {
                        let o = t ? t.workspace.id : void 0;
                        s && s.getType() === hj.types.WORKSPACE && (o = s.getLocation().id), super(o), this.type = ng, this.blockId = null == t ? void 0 : t.id, this.oldNode = i || void 0, this.newNode = s, this.isCursor = e
                    }
                    toJson() {
                        let t = super.toJson();
                        if (void 0 === this.isCursor) throw Error("Whether this is a cursor event or not is undefined. Either pass a value to the constructor, or call fromJson");
                        if (!this.newNode) throw Error("The new node is undefined. Either pass a node to the constructor, or call fromJson");
                        return t.isCursor = this.isCursor, t.blockId = this.blockId, t.oldNode = this.oldNode, t.newNode = this.newNode, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new hZ)).isCursor = t.isCursor, e.blockId = t.blockId, e.oldNode = t.oldNode, e.newNode = t.newNode, e
                    }
                };
                d(c.EVENT, ng, hZ);
                var hq = class {
                        constructor(t, e, i) {
                            this.workspace = t, this.marker = i, this.markerSvgRect_ = this.markerSvgLine_ = this.markerInput_ = this.markerBlock_ = this.svgGroup_ = this.markerSvg_ = this.currentMarkerSvg = this.parent = null, this.constants_ = e, t = this.isCursor() ? this.constants_.CURSOR_COLOUR : this.constants_.MARKER_COLOUR, this.colour_ = i.colour || t
                        }
                        getSvgRoot() {
                            return this.svgGroup_
                        }
                        getMarker() {
                            return this.marker
                        }
                        isCursor() {
                            return "cursor" === this.marker.type
                        }
                        createDom() {
                            let t = this.isCursor() ? "blocklyCursor" : "blocklyMarker";
                            return this.svgGroup_ = tu(rp.G, {
                                class: t
                            }), this.createDomInternal_(), this.svgGroup_
                        }
                        setParent_(t) {
                            this.isCursor() ? (this.parent && this.parent.setCursorSvg(null), t.setCursorSvg(this.getSvgRoot())) : (this.parent && this.parent.setMarkerSvg(null), t.setMarkerSvg(this.getSvgRoot())), this.parent = t
                        }
                        draw(t, e) {
                            if (e) {
                                this.constants_ = this.workspace.getRenderer().getConstants();
                                var i = this.isCursor() ? this.constants_.CURSOR_COLOUR : this.constants_.MARKER_COLOUR;
                                this.colour_ = this.marker.colour || i, this.applyColour_(e), this.showAtLocation_(e), this.fireMarkerEvent(t, e), void 0 !== (t = this.currentMarkerSvg.childNodes[0]) && t.beginElement && t.beginElement()
                            } else this.hide()
                        }
                        showAtLocation_(t) {
                            let e = t.getLocation().type;
                            t.getType() === hj.types.BLOCK ? this.showWithBlock_(t) : t.getType() === hj.types.OUTPUT ? this.showWithOutput_(t) : e === lx.INPUT_VALUE ? this.showWithInput_(t) : e === lx.NEXT_STATEMENT ? this.showWithNext_(t) : t.getType() === hj.types.PREVIOUS ? this.showWithPrevious_(t) : t.getType() === hj.types.FIELD ? this.showWithField_(t) : t.getType() === hj.types.WORKSPACE ? this.showWithCoordinates_(t) : t.getType() === hj.types.STACK && this.showWithStack_(t)
                        }
                        showWithBlockPrevOutput(t) {
                            t = t.getSourceBlock();
                            let e = t.width;
                            var i = t.height,
                                s = .75 * i;
                            let o = this.constants_.CURSOR_BLOCK_PADDING;
                            t.previousConnection ? (i = this.constants_.shapeFor(t.previousConnection), this.positionPrevious_(e, o, s, i)) : t.outputConnection ? (s = this.constants_.shapeFor(t.outputConnection), this.positionOutput_(e, i, s)) : this.positionBlock_(e, o, s), this.setParent_(t), this.showCurrent_()
                        }
                        showWithBlock_(t) {
                            this.showWithBlockPrevOutput(t)
                        }
                        showWithPrevious_(t) {
                            this.showWithBlockPrevOutput(t)
                        }
                        showWithOutput_(t) {
                            this.showWithBlockPrevOutput(t)
                        }
                        showWithCoordinates_(t) {
                            var e = t.getWsCoordinate();
                            t = e.x, e = e.y, this.workspace.RTL && (t -= this.constants_.CURSOR_WS_WIDTH), this.positionLine_(t, e, this.constants_.CURSOR_WS_WIDTH), this.setParent_(this.workspace), this.showCurrent_()
                        }
                        showWithField_(t) {
                            t = t.getLocation();
                            let e = t.getSize().width,
                                i = t.getSize().height;
                            this.positionRect_(0, 0, e, i), this.setParent_(t), this.showCurrent_()
                        }
                        showWithInput_(t) {
                            t = t.getLocation();
                            let e = t.getSourceBlock();
                            this.positionInput_(t), this.setParent_(e), this.showCurrent_()
                        }
                        showWithNext_(t) {
                            var e = t.getLocation();
                            t = e.getSourceBlock();
                            let i = 0;
                            e = e.getOffsetInBlock().y;
                            let s = t.getHeightWidth().width;
                            this.workspace.RTL && (i = -s), this.positionLine_(i, e, s), this.setParent_(t), this.showCurrent_()
                        }
                        showWithStack_(t) {
                            var e = (t = t.getLocation()).getHeightWidth();
                            let i = e.width + this.constants_.CURSOR_STACK_PADDING;
                            e = e.height + this.constants_.CURSOR_STACK_PADDING;
                            let s = -this.constants_.CURSOR_STACK_PADDING / 2,
                                o = -this.constants_.CURSOR_STACK_PADDING / 2,
                                n = s;
                            this.workspace.RTL && (n = -(i + s)), this.positionRect_(n, o, i, e), this.setParent_(t), this.showCurrent_()
                        }
                        showCurrent_() {
                            this.hide(), this.currentMarkerSvg && (this.currentMarkerSvg.style.display = "")
                        }
                        positionBlock_(t, e, i) {
                            if (t = sX(-e, i) + sJ("V", -e) + sJ("H", t + 2 * e) + sJ("V", i), !this.markerBlock_) throw Error("createDom should be called before positioning the marker");
                            this.markerBlock_.setAttribute("d", t), this.workspace.RTL && this.flipRtl(this.markerBlock_), this.currentMarkerSvg = this.markerBlock_
                        }
                        positionInput_(t) {
                            let e = t.getOffsetInBlock().x,
                                i = t.getOffsetInBlock().y;
                            t = sz(0, 0) + this.constants_.shapeFor(t).pathDown, this.markerInput_.setAttribute("d", t), this.markerInput_.setAttribute("transform", "translate(" + e + "," + i + ")" + (this.workspace.RTL ? " scale(-1 1)" : "")), this.currentMarkerSvg = this.markerInput_
                        }
                        positionLine_(t, e, i) {
                            if (!this.markerSvgLine_) throw Error("createDom should be called before positioning the line");
                            this.markerSvgLine_.setAttribute("x", `${t}`), this.markerSvgLine_.setAttribute("y", `${e}`), this.markerSvgLine_.setAttribute("width", `${i}`), this.currentMarkerSvg = this.markerSvgLine_
                        }
                        positionOutput_(t, e, i) {
                            if (!this.markerBlock_) throw Error("createDom should be called before positioning the output");
                            t = sX(t, 0) + sJ("h", -(t - i.width)) + sJ("v", this.constants_.TAB_OFFSET_FROM_TOP) + i.pathDown + sJ("V", e) + sJ("H", t), this.markerBlock_.setAttribute("d", t), this.workspace.RTL && this.flipRtl(this.markerBlock_), this.currentMarkerSvg = this.markerBlock_
                        }
                        positionPrevious_(t, e, i, s) {
                            if (!this.markerBlock_) throw Error("createDom should be called before positioning the previous connection marker");
                            t = sX(-e, i) + sJ("V", -e) + sJ("H", this.constants_.NOTCH_OFFSET_LEFT) + s.pathLeft + sJ("H", t + 2 * e) + sJ("V", i), this.markerBlock_.setAttribute("d", t), this.workspace.RTL && this.flipRtl(this.markerBlock_), this.currentMarkerSvg = this.markerBlock_
                        }
                        positionRect_(t, e, i, s) {
                            if (!this.markerSvgRect_) throw Error("createDom should be called before positioning the rect");
                            this.markerSvgRect_.setAttribute("x", `${t}`), this.markerSvgRect_.setAttribute("y", `${e}`), this.markerSvgRect_.setAttribute("width", `${i}`), this.markerSvgRect_.setAttribute("height", `${s}`), this.currentMarkerSvg = this.markerSvgRect_
                        }
                        flipRtl(t) {
                            t.setAttribute("transform", "scale(-1 1)")
                        }
                        hide() {
                            if (!(this.markerSvgLine_ && this.markerSvgRect_ && this.markerInput_ && this.markerBlock_)) throw Error("createDom should be called before hiding the marker");
                            this.markerSvgLine_.style.display = "none", this.markerSvgRect_.style.display = "none", this.markerInput_.style.display = "none", this.markerBlock_.style.display = "none"
                        }
                        fireMarkerEvent(t, e) {
                            let i = e.getSourceBlock();
                            F(t = new(X(ng))(i, this.isCursor(), t, e))
                        }
                        getBlinkProperties_() {
                            return {
                                attributeType: "XML",
                                attributeName: "fill",
                                dur: "1s",
                                values: this.colour_ + ";transparent;transparent;",
                                repeatCount: "indefinite"
                            }
                        }
                        createDomInternal_() {
                            if (this.markerSvg_ = tu(rp.G, {
                                    width: this.constants_.CURSOR_WS_WIDTH,
                                    height: this.constants_.WS_CURSOR_HEIGHT
                                }, this.svgGroup_), this.markerSvgLine_ = tu(rp.RECT, {
                                    width: this.constants_.CURSOR_WS_WIDTH,
                                    height: this.constants_.WS_CURSOR_HEIGHT
                                }, this.markerSvg_), this.markerSvgRect_ = tu(rp.RECT, {
                                    class: "blocklyVerticalMarker",
                                    rx: 10,
                                    ry: 10
                                }, this.markerSvg_), this.markerInput_ = tu(rp.PATH, {
                                    transform: ""
                                }, this.markerSvg_), this.markerBlock_ = tu(rp.PATH, {
                                    transform: "",
                                    fill: "none",
                                    "stroke-width": this.constants_.CURSOR_STROKE_WIDTH
                                }, this.markerSvg_), this.hide(), this.isCursor()) {
                                let t = this.getBlinkProperties_();
                                tu(rp.ANIMATE, t, this.markerSvgLine_), tu(rp.ANIMATE, t, this.markerInput_), tu(rp.ANIMATE, Object.assign({}, t, {
                                    attributeName: "stroke"
                                }), this.markerBlock_)
                            }
                            return this.markerSvg_
                        }
                        applyColour_(t) {
                            if (!(this.markerSvgLine_ && this.markerSvgRect_ && this.markerInput_ && this.markerBlock_)) throw Error("createDom should be called before applying color to the markerj");
                            this.markerSvgLine_.setAttribute("fill", this.colour_), this.markerSvgRect_.setAttribute("stroke", this.colour_), this.markerInput_.setAttribute("fill", this.colour_), this.markerBlock_.setAttribute("stroke", this.colour_), this.isCursor() && (t = this.colour_ + ";transparent;transparent;", this.markerSvgLine_.firstElementChild.setAttribute("values", t), this.markerInput_.firstElementChild.setAttribute("values", t), this.markerBlock_.firstElementChild.setAttribute("values", t))
                        }
                        dispose() {
                            this.svgGroup_ && tb(this.svgGroup_)
                        }
                    },
                    hQ = class {
                        constructor(t, e, i) {
                            this.markerSvg = this.cursorSvg = null, this.constants = i, this.style = e, this.svgRoot = t, this.svgPath = tu(rp.PATH, {
                                class: "blocklyPath"
                            }, this.svgRoot)
                        }
                        setPath(t) {
                            this.svgPath.setAttribute("d", t)
                        }
                        flipRTL() {
                            this.svgPath.setAttribute("transform", "scale(-1 1)")
                        }
                        setCursorSvg(t) {
                            t ? (this.svgRoot.appendChild(t), this.cursorSvg = t) : this.cursorSvg = null
                        }
                        setMarkerSvg(t) {
                            t ? (this.cursorSvg ? this.svgRoot.insertBefore(t, this.cursorSvg) : this.svgRoot.appendChild(t), this.markerSvg = t) : this.markerSvg = null
                        }
                        applyColour(t) {
                            this.svgPath.setAttribute("stroke", this.style.colourTertiary), this.svgPath.setAttribute("fill", this.style.colourPrimary), this.updateShadow_(t.isShadow()), this.updateDisabled_(!t.isEnabled() || t.getInheritedDisabled())
                        }
                        setStyle(t) {
                            this.style = t
                        }
                        setClass_(t, e) {
                            t && (e ? td(this.svgRoot, t) : tg(this.svgRoot, t))
                        }
                        updateHighlighted(t) {
                            t ? this.svgPath.setAttribute("filter", "url(#" + this.constants.embossFilterId + ")") : this.svgPath.setAttribute("filter", "none")
                        }
                        updateShadow_(t) {
                            t && (this.svgPath.setAttribute("stroke", "none"), this.svgPath.setAttribute("fill", this.style.colourSecondary))
                        }
                        updateDisabled_(t) {
                            this.setClass_("blocklyDisabled", t), t && this.svgPath.setAttribute("fill", "url(#" + this.constants.disabledPatternId + ")")
                        }
                        updateSelected(t) {
                            this.setClass_("blocklySelected", t)
                        }
                        updateDraggingDelete(t) {
                            this.setClass_("blocklyDraggingDelete", t)
                        }
                        updateInsertionMarker(t) {
                            this.setClass_("blocklyInsertionMarker", t)
                        }
                        updateMovable(t) {
                            this.setClass_("blocklyDraggable", t)
                        }
                        updateReplacementFade(t) {
                            this.setClass_("blocklyReplaceable", t)
                        }
                        updateShapeForInputHighlight(t, e) {}
                    },
                    h0 = class {
                        constructor(t, e) {
                            this.type = e, this.targetConnection = null, this.disposed = !1, this.shadowDom = this.check = null, this.y = this.x = 0, this.shadowState = null, this.sourceBlock_ = t
                        }
                        connect_(t) {
                            let e, i;
                            let s = lx.INPUT_VALUE,
                                o = this.getSourceBlock();
                            var n = t.getSourceBlock();
                            if (t.isConnected() && t.disconnectInternal(!1), this.isConnected()) {
                                let t = this.stashShadowState(),
                                    i = this.targetBlock();
                                i.isShadow() ? i.dispose(!1) : (this.disconnectInternal(), e = i), this.applyShadowState(t)
                            }
                            W() && (i = new(X(r.MOVE$$module$build$src$core$events$utils))(n)).setReason(["connect"]), ot(this, t), n.setParent(o), i && (i.recordNew(), F(i)), e && (t = this.type === s ? e.outputConnection : e.previousConnection) && ((n = h0.getConnectionForOrphanedConnection(n, t)) ? t.connect(n) : t.onFailedConnect(this))
                        }
                        dispose() {
                            if (this.isConnected()) {
                                this.setShadowStateInternal();
                                let t = this.targetBlock();
                                t && !t.isDeadOrDying() && t.unplug()
                            }
                            this.disposed = !0
                        }
                        getSourceBlock() {
                            return this.sourceBlock_
                        }
                        isSuperior() {
                            return this.type === lx.INPUT_VALUE || this.type === lx.NEXT_STATEMENT
                        }
                        isConnected() {
                            return !!this.targetConnection
                        }
                        getConnectionChecker() {
                            return this.sourceBlock_.workspace.connectionChecker
                        }
                        onFailedConnect(t) {}
                        connect(t) {
                            if (this.targetConnection === t) return !0;
                            if (this.getConnectionChecker().canConnect(this, t, !1)) {
                                let e = r.getGroup$$module$build$src$core$events$utils();
                                e || r.setGroup$$module$build$src$core$events$utils(!0), this.isSuperior() ? this.connect_(t) : t.connect_(this), r.setGroup$$module$build$src$core$events$utils(e)
                            }
                            return this.isConnected()
                        }
                        disconnect() {
                            this.disconnectInternal()
                        }
                        disconnectInternal(t = !0) {
                            let e;
                            let {
                                parentConnection: i,
                                childConnection: s
                            } = this.getParentAndChildConnections();
                            if (!i || !s) throw Error("Source connection not connected.");
                            let o = r.getGroup$$module$build$src$core$events$utils();
                            o || r.setGroup$$module$build$src$core$events$utils(!0), W() && (e = new(X(r.MOVE$$module$build$src$core$events$utils))(s.getSourceBlock())).setReason(["disconnect"]);
                            let n = this.targetConnection;
                            n && (n.targetConnection = null), this.targetConnection = null, t && s.getSourceBlock().setParent(null), e && (e.recordNew(), F(e)), s.getSourceBlock().isShadow() || i.respawnShadow_(), r.setGroup$$module$build$src$core$events$utils(o)
                        }
                        getParentAndChildConnections() {
                            return this.targetConnection ? this.isSuperior() ? {
                                parentConnection: this,
                                childConnection: this.targetConnection
                            } : {
                                parentConnection: this.targetConnection,
                                childConnection: this
                            } : {}
                        }
                        respawnShadow_() {
                            this.createShadowBlock(!0)
                        }
                        reconnect(t, e) {
                            var i;
                            return !this.getSourceBlock().isDeadOrDying() && (e = null == (i = t.getInput(e)) ? void 0 : i.connection, (!(i = this.targetBlock()) || i === t) && !!e && e.targetConnection !== this && (e.isConnected() && e.disconnect(), e.connect(this), !0))
                        }
                        targetBlock() {
                            if (this.isConnected()) {
                                let t, e;
                                return null != (e = null == (t = this.targetConnection) ? void 0 : t.getSourceBlock()) ? e : null
                            }
                            return null
                        }
                        onCheckChanged_() {
                            !this.isConnected() || this.targetConnection && this.getConnectionChecker().canConnect(this, this.targetConnection, !1) || (this.isSuperior() ? this.targetBlock() : this.sourceBlock_).unplug()
                        }
                        setCheck(t) {
                            return t ? (Array.isArray(t) || (t = [t]), this.check = t, this.onCheckChanged_()) : this.check = null, this
                        }
                        getCheck() {
                            return this.check
                        }
                        setShadowDom(t) {
                            this.setShadowStateInternal({
                                shadowDom: t
                            })
                        }
                        getShadowDom(t) {
                            return t && this.targetBlock().isShadow() ? ef(this.targetBlock()) : this.shadowDom
                        }
                        setShadowState(t) {
                            this.setShadowStateInternal({
                                shadowState: t
                            })
                        }
                        getShadowState(t) {
                            return t && this.targetBlock() && this.targetBlock().isShadow() ? eM(this.targetBlock()) : this.shadowState
                        }
                        neighbours(t) {
                            return []
                        }
                        getParentInput() {
                            let t = null,
                                e = this.sourceBlock_.inputList;
                            for (let i = 0; i < e.length; i++)
                                if (e[i].connection === this) {
                                    t = e[i];
                                    break
                                } return t
                        }
                        toString() {
                            let t = this.sourceBlock_;
                            if (!t) return "Orphan Connection";
                            if (t.outputConnection === this) var e = "Output Connection of ";
                            else if (t.previousConnection === this) e = "Previous Connection of ";
                            else if (t.nextConnection === this) e = "Next Connection of ";
                            else {
                                e = null;
                                for (let i = 0, s; s = t.inputList[i]; i++)
                                    if (s.connection === this) {
                                        e = s;
                                        break
                                    } if (!e) return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
                                e = 'Input "' + e.name + '" connection on '
                            }
                            return e + t.toDevString()
                        }
                        stashShadowState() {
                            let t = this.getShadowDom(!0),
                                e = this.getShadowState(!0);
                            return this.shadowState = this.shadowDom = null, {
                                shadowDom: t,
                                shadowState: e
                            }
                        }
                        applyShadowState({
                            shadowDom: t,
                            shadowState: e
                        }) {
                            this.shadowDom = t, this.shadowState = e
                        }
                        setShadowStateInternal({
                            shadowDom: t = null,
                            shadowState: e = null
                        } = {}) {
                            this.shadowDom = t, this.shadowState = e, (t = this.targetBlock()) ? t.isShadow() ? (t.dispose(!1), this.getSourceBlock().isDeadOrDying() || (this.respawnShadow_(), this.targetBlock() && this.targetBlock().isShadow() && this.serializeShadow(this.targetBlock()))) : (t = this.createShadowBlock(!1), this.serializeShadow(t), t && t.dispose(!1)) : (this.respawnShadow_(), this.targetBlock() && this.targetBlock().isShadow() && this.serializeShadow(this.targetBlock()))
                        }
                        createShadowBlock(t) {
                            var e = this.getSourceBlock();
                            let i = this.getShadowState(),
                                s = this.getShadowDom();
                            if (e.isDeadOrDying() || !i && !s) return null;
                            if (i) return eX(i, e.workspace, {
                                parentConnection: t ? this : void 0,
                                isShadow: !0,
                                recordUndo: !1
                            });
                            if (s) {
                                if (e = ek(s, e.workspace), t) {
                                    if (this.type === lx.INPUT_VALUE) {
                                        if (!e.outputConnection) throw Error("Shadow block is missing an output connection");
                                        if (!this.connect(e.outputConnection)) throw Error("Could not connect shadow block to connection")
                                    } else if (this.type === lx.NEXT_STATEMENT) {
                                        if (!e.previousConnection) throw Error("Shadow block is missing previous connection");
                                        if (!this.connect(e.previousConnection)) throw Error("Could not connect shadow block to connection")
                                    } else throw Error("Cannot connect a shadow block to a previous/output connection")
                                }
                                return e
                            }
                            return null
                        }
                        serializeShadow(t) {
                            t && (this.shadowDom = ef(t), this.shadowState = eM(t))
                        }
                        static getConnectionForOrphanedConnection(t, e) {
                            if (e.type === lx.OUTPUT_VALUE) return oi(t, e.getSourceBlock());
                            t = t.lastConnectionInStack(!0);
                            let i = e.getConnectionChecker();
                            return t && i.canConnect(e, t, !1) ? t : null
                        }
                    };
                h0.CAN_CONNECT = 0, h0.REASON_SELF_CONNECTION = 1, h0.REASON_WRONG_TYPE = 2, h0.REASON_TARGET_NULL = 3, h0.REASON_CHECKS_FAILED = 4, h0.REASON_DIFFERENT_WORKSPACES = 5, h0.REASON_SHADOW_PARENT = 6, h0.REASON_DRAG_CHECKS_FAILED = 7, h0.REASON_PREVIOUS_AND_OUTPUT = 8;
                var h1 = "_TEMP_COLLAPSED_INPUT",
                    h2 = "_TEMP_COLLAPSED_FIELD",
                    h3 = "The insertion marker manager tried to create a marker but the result is missing %1. If you are using a mutator, make sure your domToMutation method is properly defined.",
                    h5 = class {
                        constructor(t) {
                            this.activeCandidate = this.lastMarker = this.lastOnStack = null, this.wouldDeleteBlock = !1, this.fadedBlock = this.highlightedBlock = this.markerConnection = null, S(t), this.topBlock = t, this.workspace = t.workspace, this.firstMarker = this.createMarkerBlock(this.topBlock), this.availableConnections = this.initAvailableConnections(), this.lastOnStack && (this.lastMarker = this.createMarkerBlock(this.lastOnStack.getSourceBlock()))
                        }
                        dispose() {
                            this.availableConnections.length = 0, this.disposeInsertionMarker(this.firstMarker), this.disposeInsertionMarker(this.lastMarker)
                        }
                        updateAvailableConnections() {
                            this.availableConnections = this.initAvailableConnections()
                        }
                        wouldConnectBlock() {
                            return !!this.activeCandidate
                        }
                        applyConnections() {
                            if (this.activeCandidate) {
                                r.disable$$module$build$src$core$events$utils(), this.hidePreview(), r.enable$$module$build$src$core$events$utils();
                                var {
                                    local: t,
                                    closest: e
                                } = this.activeCandidate;
                                if (t.connect(e), this.topBlock.rendered) {
                                    let i = t.isSuperior() ? e : t,
                                        s = this.topBlock.getRootBlock();
                                    el().then(() => {
                                        iJ(i.getSourceBlock()), setTimeout(() => {
                                            s.bringToFront()
                                        }, 0)
                                    })
                                }
                            }
                        }
                        update(t, e) {
                            let i = this.getCandidate(t);
                            ((this.wouldDeleteBlock = this.shouldDelete(!!i, e)) || this.shouldUpdatePreviews(i, t)) && (r.disable$$module$build$src$core$events$utils(), this.maybeHidePreview(i), this.maybeShowPreview(i), r.enable$$module$build$src$core$events$utils())
                        }
                        createMarkerBlock(t) {
                            let e;
                            var i = t.type;
                            r.disable$$module$build$src$core$events$utils();
                            try {
                                if ((e = this.workspace.newBlock(i)).setInsertionMarker(!0), t.saveExtraState) {
                                    var s = t.saveExtraState(!0);
                                    s && e.loadExtraState && e.loadExtraState(s)
                                } else if (t.mutationToDom) {
                                    let i = t.mutationToDom();
                                    i && e.domToMutation && e.domToMutation(i)
                                }
                                for (i = 0; i < t.inputList.length; i++) {
                                    let o = t.inputList[i];
                                    if (o.name === h1) continue;
                                    let n = e.inputList[i];
                                    if (!n) throw Error(h3.replace("%1", "an input"));
                                    for (s = 0; s < o.fieldRow.length; s++) {
                                        let t = o.fieldRow[s],
                                            e = n.fieldRow[s];
                                        if (!e) throw Error(h3.replace("%1", "a field"));
                                        e.setValue(t.getValue())
                                    }
                                }
                                for (let t of e.getDescendants(!1)) t.setInsertionMarker(!0);
                                e.setCollapsed(t.isCollapsed()), e.setInputsInline(t.getInputsInline()), e.initSvg(), e.getSvgRoot().setAttribute("visibility", "hidden")
                            } finally {
                                r.enable$$module$build$src$core$events$utils()
                            }
                            return e
                        }
                        initAvailableConnections() {
                            let t = this.topBlock.getConnections_(!1),
                                e = this.topBlock.lastConnectionInStack(!0);
                            return e && e !== this.topBlock.nextConnection && (t.push(e), this.lastOnStack = e), t
                        }
                        shouldUpdatePreviews(t, e) {
                            if (!t) return !!this.activeCandidate;
                            if (!this.activeCandidate) return !0;
                            let {
                                local: i,
                                closest: s
                            } = this.activeCandidate;
                            if (s === t.closest && i === t.local) return !1;
                            let o = i.x + e.x - s.x;
                            return e = i.y + e.y - s.y, t.radius < Math.sqrt(o * o + e * e) - r.config$$module$build$src$core$config.currentConnectionPreference
                        }
                        getCandidate(t) {
                            this.markerConnection && this.markerConnection.isConnected() || this.updateAvailableConnections();
                            let e = this.getStartRadius(),
                                i = null;
                            for (let s = 0; s < this.availableConnections.length; s++) {
                                let o = this.availableConnections[s],
                                    n = o.closest(e, t);
                                n.connection && (i = {
                                    closest: n.connection,
                                    local: o,
                                    radius: n.radius
                                }, e = n.radius)
                            }
                            return i
                        }
                        getStartRadius() {
                            return this.activeCandidate ? r.config$$module$build$src$core$config.connectingSnapRadius : r.config$$module$build$src$core$config.snapRadius
                        }
                        shouldDelete(t, e) {
                            return !!(e && this.workspace.getComponentManager().hasCapability(e.id, nQ.Capability.DELETE_AREA)) && e.wouldDelete(this.topBlock, t)
                        }
                        maybeShowPreview(t) {
                            if (!this.wouldDeleteBlock && t) {
                                var e, i = t.closest;
                                i === (null == (e = this.activeCandidate) ? void 0 : e.closest) || i.getSourceBlock().isInsertionMarker() ? console.log("Trying to connect to an insertion marker") : (this.activeCandidate = t, this.showPreview(this.activeCandidate))
                            }
                        }
                        showPreview(t) {
                            let e = this.workspace.getRenderer();
                            switch (e.getConnectionPreviewMethod(t.closest, t.local, this.topBlock)) {
                                case h5.PREVIEW_TYPE.INPUT_OUTLINE:
                                    this.showInsertionInputOutline(t);
                                    break;
                                case h5.PREVIEW_TYPE.INSERTION_MARKER:
                                    this.showInsertionMarker(t);
                                    break;
                                case h5.PREVIEW_TYPE.REPLACEMENT_FADE:
                                    this.showReplacementFade(t)
                            }
                            e.shouldHighlightConnection(t.closest) && t.closest.highlight()
                        }
                        maybeHidePreview(t) {
                            if (t) {
                                if (this.activeCandidate) {
                                    let e = this.activeCandidate.local !== t.local;
                                    (this.activeCandidate.closest !== t.closest || e || this.wouldDeleteBlock) && this.hidePreview()
                                }
                            } else this.hidePreview();
                            this.activeCandidate = this.markerConnection = null
                        }
                        hidePreview() {
                            let t;
                            let e = null == (t = this.activeCandidate) ? void 0 : t.closest;
                            e && e.targetBlock() && this.workspace.getRenderer().shouldHighlightConnection(e) && e.unhighlight(), this.hideReplacementFade(), this.hideInsertionInputOutline(), this.hideInsertionMarker()
                        }
                        showInsertionMarker(t) {
                            let e;
                            let {
                                local: i,
                                closest: s
                            } = t, o = (t = this.lastOnStack && i === this.lastOnStack) ? this.lastMarker : this.firstMarker;
                            if (!o) throw Error("Cannot show the insertion marker because there is no insertion marker block");
                            try {
                                e = o.getMatchingConnection(i.getSourceBlock(), i)
                            } catch (s) {
                                if (t && this.lastOnStack ? (this.disposeInsertionMarker(this.lastMarker), o = this.lastMarker = this.createMarkerBlock(this.lastOnStack.getSourceBlock())) : (this.disposeInsertionMarker(this.firstMarker), o = this.firstMarker = this.createMarkerBlock(this.topBlock)), !o) throw Error("Cannot show the insertion marker because there is no insertion marker block");
                                e = o.getMatchingConnection(i.getSourceBlock(), i)
                            }
                            if (!e) throw Error("Cannot show the insertion marker because there is no associated connection");
                            if (e === this.markerConnection) throw Error("Made it to showInsertionMarker_ even though the marker isn't changing");
                            o.queueRender(), ea(), e.connect(s);
                            let n = {
                                    x: s.x - e.x,
                                    y: s.y - e.y
                                },
                                r = e.getOffsetInBlock().clone(),
                                l = e;
                            el().then(() => {
                                let t, e;
                                null == (t = o) || t.positionNearConnection(l, n, r), null == (e = o) || e.getSvgRoot().setAttribute("visibility", "visible")
                            }), this.markerConnection = e
                        }
                        hideInsertionMarker() {
                            if (this.markerConnection) {
                                var t, e = this.markerConnection,
                                    i = e.getSourceBlock(),
                                    s = i.outputConnection;
                                if ((null == (t = i.previousConnection) ? 0 : t.targetConnection) || (null == s ? 0 : s.targetConnection)) i.unplug(!0);
                                else {
                                    let t;
                                    null == (t = e.targetBlock()) || t.unplug(!1)
                                }
                                if (e.targetConnection) throw Error("markerConnection still connected at the end of disconnectInsertionMarker");
                                this.markerConnection = null, (e = i.getSvgRoot()) && e.setAttribute("visibility", "hidden")
                            }
                        }
                        showInsertionInputOutline(t) {
                            t = t.closest, this.highlightedBlock = t.getSourceBlock(), this.highlightedBlock.highlightShapeForInput(t, !0)
                        }
                        hideInsertionInputOutline() {
                            if (this.highlightedBlock) {
                                if (!this.activeCandidate) throw Error("Cannot hide the insertion marker outline because there is no active candidate");
                                this.highlightedBlock.highlightShapeForInput(this.activeCandidate.closest, !1), this.highlightedBlock = null
                            }
                        }
                        showReplacementFade(t) {
                            if (this.fadedBlock = t.closest.targetBlock(), !this.fadedBlock) throw Error("Cannot show the replacement fade because the closest connection does not have a target block");
                            this.fadedBlock.fadeForReplacement(!0)
                        }
                        hideReplacementFade() {
                            this.fadedBlock && (this.fadedBlock.fadeForReplacement(!1), this.fadedBlock = null)
                        }
                        getInsertionMarkers() {
                            let t = [];
                            return this.firstMarker && t.push(this.firstMarker), this.lastMarker && t.push(this.lastMarker), t
                        }
                        disposeInsertionMarker(t) {
                            if (t) {
                                r.disable$$module$build$src$core$events$utils();
                                try {
                                    t.dispose()
                                } finally {
                                    r.enable$$module$build$src$core$events$utils()
                                }
                            }
                        }
                    };
                (c6 = (c6 = h5 || (h5 = {})).PREVIEW_TYPE || (c6.PREVIEW_TYPE = {}))[c6.INSERTION_MARKER = 0] = "INSERTION_MARKER", c6[c6.INPUT_OUTLINE = 1] = "INPUT_OUTLINE", c6[c6.REPLACEMENT_FADE = 2] = "REPLACEMENT_FADE";
                var h6 = h5.PREVIEW_TYPE,
                    h9 = {};
                h9.InsertionMarkerManager = h5, h9.PreviewType = h6;
                var h8 = class {
                        constructor(t) {
                            this.overrides = null, this.name = t
                        }
                        getClassName() {
                            return this.name + "-renderer"
                        }
                        init(t, e) {
                            this.constants_ = this.makeConstants_(), e && (this.overrides = e, Object.assign(this.constants_, e)), this.constants_.setTheme(t), this.constants_.init()
                        }
                        createDom(t, e) {
                            this.constants_.createDom(t, this.name + "-" + e.name, "." + this.getClassName() + "." + e.getClassName())
                        }
                        refreshDom(t, e) {
                            let i = this.getConstants();
                            i.dispose(), this.constants_ = this.makeConstants_(), this.overrides && Object.assign(this.constants_, this.overrides), this.constants_.randomIdentifier = i.randomIdentifier, this.constants_.setTheme(e), this.constants_.init(), this.createDom(t, e)
                        }
                        dispose() {
                            this.constants_ && this.constants_.dispose()
                        }
                        makeConstants_() {
                            return new hM
                        }
                        makeRenderInfo_(t) {
                            return new hJ(this, t)
                        }
                        makeDrawer_(t, e) {
                            return new hP(t, e)
                        }
                        makeMarkerDrawer(t, e) {
                            return new hq(t, this.getConstants(), e)
                        }
                        makePathObject(t, e) {
                            return new hQ(t, e, this.constants_)
                        }
                        getConstants() {
                            return this.constants_
                        }
                        shouldHighlightConnection(t) {
                            return !0
                        }
                        orphanCanConnectAtEnd(t, e, i) {
                            return !!h0.getConnectionForOrphanedConnection(t, i === lx.OUTPUT_VALUE ? e.outputConnection : e.previousConnection)
                        }
                        getConnectionPreviewMethod(t, e, i) {
                            return e.type === lx.OUTPUT_VALUE || e.type === lx.PREVIOUS_STATEMENT ? !t.isConnected() || this.orphanCanConnectAtEnd(i, t.targetBlock(), e.type) ? h5.PREVIEW_TYPE.INSERTION_MARKER : h5.PREVIEW_TYPE.REPLACEMENT_FADE : h5.PREVIEW_TYPE.INSERTION_MARKER
                        }
                        render(t) {
                            let e = this.makeRenderInfo_(t);
                            e.measure(), this.makeDrawer_(t, e).draw()
                        }
                    },
                    h4 = {};
                h4.BottomRow = hm, h4.Connection = hf, h4.ConstantProvider = hM, h4.Drawer = hP, h4.ExternalValueInput = hT, h4.Field = hk, h4.Hat = hw, h4.Icon = hy, h4.InRowSpacer = h$, h4.InlineInput = hC, h4.InputConnection = hE, h4.InputRow = hI, h4.JaggedEdge = hS, h4.MarkerSvg = hq, h4.Measurable = hb, h4.NextConnection = hR, h4.OutputConnection = hD, h4.PathObject = hQ, h4.PreviousConnection = hA, h4.RenderInfo = hJ, h4.Renderer = h8, h4.RoundCorner = hN, h4.Row = h_, h4.SpacerRow = hO, h4.SquareCorner = hx, h4.StatementInput = hv, h4.TopRow = hL, h4.Types = hg, h4.init = oo, h4.register = os, h4.unregister = function (t) {
                    g(c.RENDERER, t)
                };
                var h7 = class {
                        constructor(t, e) {
                            this.workspace = t, this.theme = e, this.subscribedWorkspaces_ = [], this.componentDB = new Map
                        }
                        getTheme() {
                            return this.theme
                        }
                        setTheme(t) {
                            var e = this.theme;
                            this.theme = t, (t = this.workspace.getInjectionDiv()) && (e && (e = e.getClassName()) && tg(t, e), (e = this.theme.getClassName()) && td(t, e));
                            for (let t = 0, e; e = this.subscribedWorkspaces_[t]; t++) e.refreshTheme();
                            for (let [i, s] of this.componentDB)
                                for (let o of s) {
                                    t = o.element, e = o.propertyName;
                                    let s = this.theme && this.theme.getComponentStyle(i);
                                    t.style.setProperty(e, s || "")
                                }
                            for (let t of this.subscribedWorkspaces_) t.hideChaff()
                        }
                        subscribeWorkspace(t) {
                            this.subscribedWorkspaces_.push(t)
                        }
                        unsubscribeWorkspace(t) {
                            if (!tl(this.subscribedWorkspaces_, t)) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.")
                        }
                        subscribe(t, e, i) {
                            this.componentDB.has(e) || this.componentDB.set(e, []), this.componentDB.get(e).push({
                                element: t,
                                propertyName: i
                            }), e = this.theme && this.theme.getComponentStyle(e), t.style.setProperty(i, e || "")
                        }
                        unsubscribe(t) {
                            if (t)
                                for (let [e, i] of this.componentDB) {
                                    for (let e = i.length - 1; 0 <= e; e--) i[e].element === t && i.splice(e, 1);
                                    i.length || this.componentDB.delete(e)
                                }
                        }
                        dispose() {
                            this.subscribedWorkspaces_.length = 0, this.componentDB.clear()
                        }
                    },
                    ct = "VARIABLE_DYNAMIC",
                    ce = {
                        CATEGORY_NAME: ct
                    };
                ce.flyoutCategory = oa, ce.flyoutCategoryBlocks = oh, ce.onCreateVariableButtonClick_Colour = ol, ce.onCreateVariableButtonClick_Number = or, ce.onCreateVariableButtonClick_String = on;
                var ci = class {
                    canConnect(t, e, i, s) {
                        return this.canConnectWithReason(t, e, i, s) === h0.CAN_CONNECT
                    }
                    canConnectWithReason(t, e, i, s) {
                        let o = this.doSafetyChecks(t, e);
                        return o !== h0.CAN_CONNECT ? o : this.doTypeChecks(t, e) ? i && !this.doDragChecks(t, e, s || 0) ? h0.REASON_DRAG_CHECKS_FAILED : h0.CAN_CONNECT : h0.REASON_CHECKS_FAILED
                    }
                    getErrorMessage(t, e, i) {
                        switch (t) {
                            case h0.REASON_SELF_CONNECTION:
                                return "Attempted to connect a block to itself.";
                            case h0.REASON_DIFFERENT_WORKSPACES:
                                return "Blocks not on same workspace.";
                            case h0.REASON_WRONG_TYPE:
                                return "Attempt to connect incompatible types.";
                            case h0.REASON_TARGET_NULL:
                                return "Target connection is null.";
                            case h0.REASON_CHECKS_FAILED:
                                return "Connection checks failed. " + (e + " expected ") + e.getCheck() + ", found " + i.getCheck();
                            case h0.REASON_SHADOW_PARENT:
                                return "Connecting non-shadow to shadow block.";
                            case h0.REASON_DRAG_CHECKS_FAILED:
                                return "Drag checks failed.";
                            case h0.REASON_PREVIOUS_AND_OUTPUT:
                                return "Block would have an output and a previous connection.";
                            default:
                                return "Unknown connection failure: this should never happen!"
                        }
                    }
                    doSafetyChecks(t, e) {
                        let i, s, o;
                        return t && e ? (t.isSuperior() ? (i = t.getSourceBlock(), s = e.getSourceBlock(), o = e) : (s = t.getSourceBlock(), i = e.getSourceBlock(), o = t, t = e), i === s ? h0.REASON_SELF_CONNECTION : o.type !== af[t.type] ? h0.REASON_WRONG_TYPE : i.workspace !== s.workspace ? h0.REASON_DIFFERENT_WORKSPACES : i.isShadow() && !s.isShadow() ? h0.REASON_SHADOW_PARENT : o.type === lx.OUTPUT_VALUE && s.previousConnection && s.previousConnection.isConnected() || o.type === lx.PREVIOUS_STATEMENT && s.outputConnection && s.outputConnection.isConnected() ? h0.REASON_PREVIOUS_AND_OUTPUT : h0.CAN_CONNECT) : h0.REASON_TARGET_NULL
                    }
                    doTypeChecks(t, e) {
                        if (t = t.getCheck(), e = e.getCheck(), !t || !e) return !0;
                        for (let i = 0; i < t.length; i++)
                            if (-1 !== e.indexOf(t[i])) return !0;
                        return !1
                    }
                    doDragChecks(t, e, i) {
                        if (t.distanceFrom(e) > i || e.getSourceBlock().isInsertionMarker()) return !1;
                        switch (e.type) {
                            case lx.PREVIOUS_STATEMENT:
                                return this.canConnectToPrevious_(t, e);
                            case lx.OUTPUT_VALUE:
                                if (e.isConnected() && !e.targetBlock().isInsertionMarker() || t.isConnected()) return !1;
                                break;
                            case lx.INPUT_VALUE:
                                if (e.isConnected() && !e.targetBlock().isMovable() && !e.targetBlock().isShadow()) return !1;
                                break;
                            case lx.NEXT_STATEMENT:
                                if (e.isConnected() && !t.getSourceBlock().nextConnection && !e.targetBlock().isShadow() && e.targetBlock().nextConnection || e.targetBlock() && !e.targetBlock().isMovable() && !e.targetBlock().isShadow()) return !1;
                                break;
                            default:
                                return !1
                        }
                        return -1 === o9.indexOf(e)
                    }
                    canConnectToPrevious_(t, e) {
                        return !t.targetConnection && -1 === o9.indexOf(e) && (!e.targetConnection || !!(t = e.targetBlock()).isInsertionMarker() && !t.getPreviousBlock())
                    }
                };
                d(c.CONNECTION_CHECKER, h, ci);
                var cs = class extends rX {
                    constructor(t) {
                        super(t), this.type = na, t && (this.varType = t.type, this.varName = t.name)
                    }
                    toJson() {
                        let t = super.toJson();
                        if (void 0 === this.varType) throw Error("The var type is undefined. Either pass a variable to the constructor, or call fromJson");
                        if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
                        return t.varType = this.varType, t.varName = this.varName, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new cs)).varType = t.varType, e.varName = t.varName, e
                    }
                    run(t) {
                        let e = this.getEventWorkspace_();
                        if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
                        if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
                        t ? e.deleteVariableById(this.varId) : e.createVariable(this.varName, this.varType, this.varId)
                    }
                };
                d(c.EVENT, na, cs);
                var co = class extends rX {
                    constructor(t, e) {
                        super(t), this.type = nh, t && (this.oldName = t.name, this.newName = void 0 === e ? "" : e)
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.oldName) throw Error("The old var name is undefined. Either pass a variable to the constructor, or call fromJson");
                        if (!this.newName) throw Error("The new var name is undefined. Either pass a value to the constructor, or call fromJson");
                        return t.oldName = this.oldName, t.newName = this.newName, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new co)).oldName = t.oldName, e.newName = t.newName, e
                    }
                    run(t) {
                        let e = this.getEventWorkspace_();
                        if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
                        if (!this.oldName) throw Error("The old var name is undefined. Either pass a variable to the constructor, or call fromJson");
                        if (!this.newName) throw Error("The new var name is undefined. Either pass a value to the constructor, or call fromJson");
                        t ? e.renameVariableById(this.varId, this.newName) : e.renameVariableById(this.varId, this.oldName)
                    }
                };
                d(c.EVENT, nh, co);
                var cn = class {
                        constructor(t) {
                            this.workspace = t, this.variableMap = new Map
                        }
                        clear() {
                            for (let t of this.variableMap.values())
                                for (; 0 < t.length;) this.deleteVariable(t[0]);
                            if (0 !== this.variableMap.size) throw Error("Non-empty variable map")
                        }
                        renameVariable(t, e) {
                            if (t.name !== e) {
                                var i = this.getVariable(e, t.type),
                                    s = this.workspace.getAllBlocks(!1),
                                    o = r.getGroup$$module$build$src$core$events$utils();
                                o || r.setGroup$$module$build$src$core$events$utils(!0);
                                try {
                                    i && i.getId() !== t.getId() ? this.renameVariableWithConflict_(t, e, i, s) : this.renameVariableAndUses_(t, e, s)
                                } finally {
                                    r.setGroup$$module$build$src$core$events$utils(o)
                                }
                            }
                        }
                        renameVariableById(t, e) {
                            let i = this.getVariableById(t);
                            if (!i) throw Error("Tried to rename a variable that didn't exist. ID: " + t);
                            this.renameVariable(i, e)
                        }
                        renameVariableAndUses_(t, e, i) {
                            for (F(new(X(nh))(t, e)), t.name = e, e = 0; e < i.length; e++) i[e].updateVarName(t)
                        }
                        renameVariableWithConflict_(t, e, i, s) {
                            let o = t.type;
                            for (e !== i.name && this.renameVariableAndUses_(i, e, s), e = 0; e < s.length; e++) s[e].renameVarById(t.getId(), i.getId());
                            F(new(X(na))(t)), tl(this.variableMap.get(o), t)
                        }
                        createVariable(t, e, i) {
                            var s = this.getVariable(t, e);
                            if (s) {
                                if (i && s.getId() !== i) throw Error('Variable "' + t + '" is already in use and its id is "' + s.getId() + '" which conflicts with the passed in id, "' + i + '".');
                                return s
                            }
                            if (i && this.getVariableById(i)) throw Error('Variable id, "' + i + '", is already in use.');
                            return s = i || M(), e = e || "", s = new rK(this.workspace, t, e, s), (t = this.variableMap.get(e) || []).push(s), this.variableMap.delete(e), this.variableMap.set(e, t), F(new(X(nl))(s)), s
                        }
                        deleteVariable(t) {
                            let e = t.getId(),
                                i = this.variableMap.get(t.type);
                            if (i) {
                                for (let s = 0; s < i.length; s++)
                                    if (i[s].getId() === e) {
                                        i.splice(s, 1), F(new(X(na))(t)), 0 === i.length && this.variableMap.delete(t.type);
                                        break
                                    }
                            }
                        }
                        deleteVariableById(t) {
                            let e = this.getVariableById(t);
                            if (e) {
                                var i = e.name;
                                let s = this.getVariableUsesById(t);
                                for (let e = 0, o; o = s[e]; e++)
                                    if ("procedures_defnoreturn" === o.type || "procedures_defreturn" === o.type) {
                                        t = String(o.getFieldValue("NAME")), i = r.Msg$$module$build$src$core$msg.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", i).replace("%2", t), tJ(i);
                                        return
                                    } 1 < s.length ? (i = r.Msg$$module$build$src$core$msg.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(s.length)).replace("%2", i), tj(i, t => {
                                    t && e && this.deleteVariableInternal(e, s)
                                })) : this.deleteVariableInternal(e, s)
                            } else console.warn("Can't delete non-existent variable: " + t)
                        }
                        deleteVariableInternal(t, e) {
                            let i = r.getGroup$$module$build$src$core$events$utils();
                            i || r.setGroup$$module$build$src$core$events$utils(!0);
                            try {
                                for (let t = 0; t < e.length; t++) e[t].dispose(!0);
                                this.deleteVariable(t)
                            } finally {
                                r.setGroup$$module$build$src$core$events$utils(i)
                            }
                        }
                        getVariable(t, e) {
                            if (e = this.variableMap.get(e || "")) {
                                for (let i = 0, s; s = e[i]; i++)
                                    if (r.Names$$module$build$src$core$names.equals(s.name, t)) return s
                            }
                            return null
                        }
                        getVariableById(t) {
                            for (let e of this.variableMap.values())
                                for (let i of e)
                                    if (i.getId() === t) return i;
                            return null
                        }
                        getVariablesOfType(t) {
                            return (t = this.variableMap.get(t || "")) ? t.slice() : []
                        }
                        getVariableTypes(t) {
                            let e = new Set(this.variableMap.keys());
                            if (t && t.getPotentialVariableMap())
                                for (let i of t.getPotentialVariableMap().variableMap.keys()) e.add(i);
                            return e.has("") || e.add(""), Array.from(e.values())
                        }
                        getAllVariables() {
                            let t = [];
                            for (let e of this.variableMap.values()) t = t.concat(e);
                            return t
                        }
                        getAllVariableNames() {
                            return Array.from(this.variableMap.values()).flat().map(t => t.name)
                        }
                        getVariableUsesById(t) {
                            let e = [],
                                i = this.workspace.getAllBlocks(!1);
                            for (let s = 0; s < i.length; s++) {
                                let o = i[s].getVarModels();
                                if (o)
                                    for (let n = 0; n < o.length; n++) o[n].getId() === t && e.push(i[s])
                            }
                            return e
                        }
                    },
                    cr = class {
                        get isFlyout() {
                            return this.internalIsFlyout
                        }
                        get isMutator() {
                            return this.internalIsMutator
                        }
                        constructor(t) {
                            this.isClearing = this.internalIsMutator = this.internalIsFlyout = this.rendered = !1, this.MAX_UNDO = 1024, this.connectionDBList = [], this.topBlocks = [], this.topComments = [], this.commentDB = new Map, this.listeners = [], this.undoStack_ = [], this.redoStack_ = [], this.blockDB = new Map, this.typedBlocksDB = new Map, this.procedureMap = new a2, this.potentialVariableMap = null, this.id = M(), y(this), this.options = t || new aX({}), this.RTL = !!this.options.RTL, this.horizontalLayout = !!this.options.horizontalLayout, this.toolboxPosition = this.options.toolboxPosition, this.connectionChecker = new(T(c.CONNECTION_CHECKER, this.options, !0))(this), this.variableMap = new cn(this)
                        }
                        dispose() {
                            this.listeners.length = 0, this.clear(), $(this)
                        }
                        sortObjects_(t, e) {
                            let i = Math.sin(i$(cr.SCAN_ANGLE)) * (this.RTL ? -1 : 1);
                            return t = t.getRelativeToSurfaceXY(), e = e.getRelativeToSurfaceXY(), t.y + i * t.x - (e.y + i * e.x)
                        }
                        addTopBlock(t) {
                            this.topBlocks.push(t)
                        }
                        removeTopBlock(t) {
                            if (!tl(this.topBlocks, t)) throw Error("Block not present in workspace's list of top-most blocks.")
                        }
                        getTopBlocks(t = !1) {
                            let e = [].concat(this.topBlocks);
                            return t && 1 < e.length && e.sort(this.sortObjects_.bind(this)), e
                        }
                        addTypedBlock(t) {
                            this.typedBlocksDB.has(t.type) || this.typedBlocksDB.set(t.type, []), this.typedBlocksDB.get(t.type).push(t)
                        }
                        removeTypedBlock(t) {
                            tl(this.typedBlocksDB.get(t.type), t), this.typedBlocksDB.get(t.type).length || this.typedBlocksDB.delete(t.type)
                        }
                        getBlocksByType(t, e = !1) {
                            return this.typedBlocksDB.has(t) ? (t = this.typedBlocksDB.get(t).slice(0), e && t && 1 < t.length && t.sort(this.sortObjects_.bind(this)), t.filter(function (t) {
                                return !t.isInsertionMarker()
                            })) : []
                        }
                        addTopComment(t) {
                            this.topComments.push(t), this.commentDB.has(t.id) && console.warn('Overriding an existing comment on this workspace, with id "' + t.id + '"'), this.commentDB.set(t.id, t)
                        }
                        removeTopComment(t) {
                            if (!tl(this.topComments, t)) throw Error("Comment not present in workspace's list of top-most comments.");
                            this.commentDB.delete(t.id)
                        }
                        getTopComments(t = !1) {
                            let e = [].concat(this.topComments);
                            return t && 1 < e.length && e.sort(this.sortObjects_.bind(this)), e
                        }
                        getAllBlocks(t = !1) {
                            if (t) {
                                var e = this.getTopBlocks(!0);
                                t = [];
                                for (let i = 0; i < e.length; i++) t.push(...e[i].getDescendants(!0))
                            } else
                                for (t = this.getTopBlocks(!1), e = 0; e < t.length; e++) t.push(...t[e].getChildren(!1));
                            return t.filter(function (t) {
                                return !t.isInsertionMarker()
                            })
                        }
                        clear() {
                            this.isClearing = !0;
                            try {
                                let t = r.getGroup$$module$build$src$core$events$utils();
                                for (t || r.setGroup$$module$build$src$core$events$utils(!0); this.topBlocks.length;) this.topBlocks[0].dispose(!1);
                                for (; this.topComments.length;) this.topComments[this.topComments.length - 1].dispose();
                                r.setGroup$$module$build$src$core$events$utils(t), this.variableMap.clear(), this.potentialVariableMap && this.potentialVariableMap.clear()
                            } finally {
                                this.isClearing = !1
                            }
                        }
                        renameVariableById(t, e) {
                            this.variableMap.renameVariableById(t, e)
                        }
                        createVariable(t, e, i) {
                            return this.variableMap.createVariable(t, e, i)
                        }
                        getVariableUsesById(t) {
                            return this.variableMap.getVariableUsesById(t)
                        }
                        deleteVariableById(t) {
                            this.variableMap.deleteVariableById(t)
                        }
                        getVariable(t, e) {
                            return this.variableMap.getVariable(t, e)
                        }
                        getVariableById(t) {
                            return this.variableMap.getVariableById(t)
                        }
                        getVariablesOfType(t) {
                            return this.variableMap.getVariablesOfType(t)
                        }
                        getVariableTypes() {
                            return this.variableMap.getVariableTypes(this)
                        }
                        getAllVariables() {
                            return this.variableMap.getAllVariables()
                        }
                        getAllVariableNames() {
                            return this.variableMap.getAllVariableNames()
                        }
                        getWidth() {
                            return 0
                        }
                        newBlock(t, e) {
                            throw Error("The implementation of newBlock should be monkey-patched in by blockly.ts")
                        }
                        remainingCapacity() {
                            return isNaN(this.options.maxBlocks) ? 1 / 0 : this.options.maxBlocks - this.getAllBlocks(!1).length
                        }
                        remainingCapacityOfType(t) {
                            return this.options.maxInstances ? (void 0 !== this.options.maxInstances[t] ? this.options.maxInstances[t] : 1 / 0) - this.getBlocksByType(t, !1).length : 1 / 0
                        }
                        isCapacityAvailable(t) {
                            if (!this.hasBlockLimits()) return !0;
                            let e = 0;
                            for (let i in t) {
                                if (t[i] > this.remainingCapacityOfType(i)) return !1;
                                e += t[i]
                            }
                            return !(e > this.remainingCapacity())
                        }
                        hasBlockLimits() {
                            return 1 / 0 !== this.options.maxBlocks || !!this.options.maxInstances
                        }
                        getUndoStack() {
                            return this.undoStack_
                        }
                        getRedoStack() {
                            return this.redoStack_
                        }
                        undo(t) {
                            var e = t ? this.redoStack_ : this.undoStack_,
                                i = t ? this.undoStack_ : this.redoStack_;
                            let s = e.pop();
                            if (s) {
                                for (var o = [s]; e.length && s.group && s.group === e[e.length - 1].group;) {
                                    let t = e.pop();
                                    t && o.push(t)
                                }
                                for (e = 0; e < o.length; e++) i.push(o[e]);
                                o = G(o, t), B(!1);
                                try {
                                    for (i = 0; i < o.length; i++) o[i].run(t)
                                } finally {
                                    B(!0)
                                }
                            }
                        }
                        clearUndo() {
                            this.undoStack_.length = 0, this.redoStack_.length = 0, U()
                        }
                        addChangeListener(t) {
                            return this.listeners.push(t), t
                        }
                        removeChangeListener(t) {
                            tl(this.listeners, t)
                        }
                        fireChangeListener(t) {
                            if (t.recordUndo)
                                for (this.undoStack_.push(t), this.redoStack_.length = 0; this.undoStack_.length > this.MAX_UNDO && 0 <= this.MAX_UNDO;) this.undoStack_.shift();
                            for (let e = 0; e < this.listeners.length; e++)(0, this.listeners[e])(t)
                        }
                        getBlockById(t) {
                            return this.blockDB.get(t) || null
                        }
                        setBlockById(t, e) {
                            this.blockDB.set(t, e)
                        }
                        removeBlockById(t) {
                            this.blockDB.delete(t)
                        }
                        getCommentById(t) {
                            let e;
                            return null != (e = this.commentDB.get(t)) ? e : null
                        }
                        allInputsFilled(t) {
                            let e = this.getTopBlocks(!1);
                            for (let i = 0; i < e.length; i++)
                                if (!e[i].allInputsFilled(t)) return !1;
                            return !0
                        }
                        getPotentialVariableMap() {
                            return this.potentialVariableMap
                        }
                        createPotentialVariableMap() {
                            this.potentialVariableMap = new cn(this)
                        }
                        getVariableMap() {
                            return this.variableMap
                        }
                        setVariableMap(t) {
                            this.variableMap = t
                        }
                        getProcedureMap() {
                            return this.procedureMap
                        }
                        getRootWorkspace() {
                            let t = null,
                                e = this.options.parentWorkspace;
                            return this.isFlyout ? e && e.options && (t = e.options.parentWorkspace) : e && (t = e), t
                        }
                        static getById(t) {
                            return k(t)
                        }
                        static getAll() {
                            return w()
                        }
                    };
                cr.SCAN_ANGLE = 3;
                var cl = class {
                        constructor(t) {
                            this.parentWorkspace = t, this.sounds = new Map, this.lastSound_ = null
                        }
                        dispose() {
                            this.sounds.clear()
                        }
                        load(t, e) {
                            if (t.length) {
                                try {
                                    var i = new globalThis.Audio
                                } catch (t) {
                                    return
                                }
                                for (let e = 0; e < t.length; e++) {
                                    let o = t[e],
                                        n = o.match(/\.(\w+)$/);
                                    if (n && i.canPlayType("audio/" + n[1])) {
                                        var s = new globalThis.Audio(o);
                                        break
                                    }
                                }
                                s && this.sounds.set(e, s)
                            }
                        }
                        preload() {
                            for (let t of this.sounds.values()) {
                                t.volume = .01;
                                let e = t.play();
                                if (void 0 !== e ? e.then(t.pause).catch(function () {}) : t.pause(), nV || nz) break
                            }
                        }
                        play(t, e) {
                            var i = this.sounds.get(t);
                            i ? (t = new Date, null !== this.lastSound_ && t.getTime() - this.lastSound_.getTime() < 100 || (this.lastSound_ = t, (i = nV || nW ? i : i.cloneNode()).volume = void 0 === e ? 1 : e, i.play())) : this.parentWorkspace && this.parentWorkspace.getAudioManager().play(t, e)
                        }
                    },
                    ca = class {
                        constructor(t) {
                            this.workspace = t, this.layers = new Map, (t = t.getInjectionDiv()) && (this.dragLayer = this.createDragLayer(t)), td(t = this.createLayer(50), "blocklyBlockCanvas"), td(t = this.createLayer(100), "blocklyBubbleCanvas")
                        }
                        createDragLayer(t) {
                            let e = tu(rp.SVG, {
                                class: "blocklyBlockDragSurface",
                                xmlns: rr,
                                "xmlns:html": rl,
                                "xmlns:xlink": ra,
                                version: "1.1"
                            });
                            return t.append(e), tu(rp.G, {}, e)
                        }
                        translateLayers(t, e) {
                            let i;
                            for (let [, s] of (t = `translate(${t.x}, ${t.y}) scale(${e})`, null == (i = this.dragLayer) || i.setAttribute("transform", t), this.layers)) s.setAttribute("transform", t)
                        }
                        moveToDragLayer(t) {
                            let e;
                            null == (e = this.dragLayer) || e.appendChild(t.getSvgRoot())
                        }
                        moveOffDragLayer(t, e) {
                            this.append(t, e)
                        }
                        append(t, e) {
                            let i;
                            this.layers.has(e) || this.createLayer(e), null == (i = this.layers.get(e)) || i.appendChild(t.getSvgRoot())
                        }
                        createLayer(t) {
                            let e = this.workspace.getSvgGroup(),
                                i = tu(rp.G, {}),
                                s = !1,
                                o = [...this.layers].sort((t, e) => t[0] - e[0]);
                            for (let [n, r] of o)
                                if (t < n) {
                                    e.insertBefore(i, r), s = !0;
                                    break
                                } return s || e.appendChild(i), this.layers.set(t, i), i
                        }
                        hasLayer(t) {
                            return t === this.dragLayer || new Set(this.layers.values()).has(t)
                        }
                        getBlockLayer() {
                            return this.layers.get(50)
                        }
                        getBubbleLayer() {
                            return this.layers.get(100)
                        }
                    },
                    ch = class extends cr {
                        constructor(t) {
                            let e;
                            super(t), this.resizeHandlerWrapper = null, this.resizesEnabled = this.isVisible_ = this.rendered = !0, this.startScrollY = this.startScrollX = this.scrollY = this.scrollX = 0, this.dragDeltaXY = null, this.oldScale = this.scale = 1, this.oldLeft = this.oldTop = 0, this.inverseScreenCTM = this.targetWorkspace = this.dummyWheelListener = this.configureContextMenu = this.lastRecordedPageScroll = this.injectionDiv = this.currentGesture_ = this.toolbox_ = this.flyout = this.scrollbar = this.trashcan = null, this.inverseScreenCTMDirty = !0, this.highlightedBlocks = [], this.toolboxCategoryCallbacks = new Map, this.flyoutButtonCallbacks = new Map, this.cachedParentSvg = null, this.keyboardAccessibilityMode = !1, this.topBoundedElements = [], this.dragTargetAreas = [], this.zoomControls_ = this.layerManager = null, this.metricsManager = new(T(c.METRICS_MANAGER, t, !0))(this), this.getMetrics = t.getMetrics || this.metricsManager.getMetrics.bind(this.metricsManager), this.setMetrics = t.setMetrics || ch.setTopLevelWorkspaceMetrics_, this.componentManager = new nQ, this.connectionDBList = l_.init(this.connectionChecker), this.audioManager = new cl(t.parentWorkspace), this.grid = this.options.gridPattern ? new aG(this.options.gridPattern, t.gridOptions) : null, this.markerManager = new aU(this), rq && t1 && this.registerToolboxCategoryCallback(rJ, t1), ce && oa && this.registerToolboxCategoryCallback(ct, oa), hV && s2 && (this.registerToolboxCategoryCallback(hW, s2), this.addChangeListener(s5)), this.themeManager_ = this.options.parentWorkspace ? this.options.parentWorkspace.getThemeManager() : new h7(this, this.options.theme || az), this.themeManager_.subscribeWorkspace(this), this.renderer = oo(this.options.renderer || "geras", this.getTheme(), null != (e = this.options.rendererOverrides) ? e : void 0), this.cachedParentSvgSize = new rb(0, 0)
                        }
                        getMarkerManager() {
                            return this.markerManager
                        }
                        getMetricsManager() {
                            return this.metricsManager
                        }
                        setMetricsManager(t) {
                            this.metricsManager = t, this.getMetrics = this.metricsManager.getMetrics.bind(this.metricsManager)
                        }
                        getComponentManager() {
                            return this.componentManager
                        }
                        setCursorSvg(t) {
                            this.markerManager.setCursorSvg(t)
                        }
                        setMarkerSvg(t) {
                            this.markerManager.setMarkerSvg(t)
                        }
                        getMarker(t) {
                            return this.markerManager ? this.markerManager.getMarker(t) : null
                        }
                        getCursor() {
                            return this.markerManager ? this.markerManager.getCursor() : null
                        }
                        getRenderer() {
                            return this.renderer
                        }
                        getThemeManager() {
                            return this.themeManager_
                        }
                        getTheme() {
                            return this.themeManager_.getTheme()
                        }
                        setTheme(t) {
                            t || (t = az), this.themeManager_.setTheme(t)
                        }
                        refreshTheme() {
                            this.svgGroup_ && this.renderer.refreshDom(this.svgGroup_, this.getTheme()), this.updateBlockStyles_(this.getAllBlocks(!1).filter(function (t) {
                                return !!t.getStyleName()
                            })), this.refreshToolboxSelection(), this.toolbox_ && this.toolbox_.refreshTheme(), this.isVisible() && this.setVisible(!0);
                            let t = new(X(nf))(this.getTheme().name, this.id);
                            F(t)
                        }
                        updateBlockStyles_(t) {
                            for (let e = 0, i; i = t[e]; e++) {
                                let t = i.getStyleName();
                                t && i.setStyle(t)
                            }
                        }
                        getInverseScreenCTM() {
                            if (this.inverseScreenCTMDirty) {
                                let t = this.getParentSvg().getScreenCTM();
                                t && (this.inverseScreenCTM = t.inverse(), this.inverseScreenCTMDirty = !1)
                            }
                            return this.inverseScreenCTM
                        }
                        updateInverseScreenCTM() {
                            this.inverseScreenCTMDirty = !0
                        }
                        isVisible() {
                            return this.isVisible_
                        }
                        getSvgXY(t) {
                            let e = 0,
                                i = 0,
                                s = 1;
                            (this.getCanvas().contains(t) || this.getBubbleCanvas().contains(t)) && (s = this.scale);
                            do {
                                let o = tA(t);
                                (t === this.getCanvas() || t === this.getBubbleCanvas()) && (s = 1), e += o.x * s, i += o.y * s, t = t.parentNode
                            } while (t && t !== this.getParentSvg() && t !== this.getInjectionDiv());
                            return new n3(e, i)
                        }
                        getCachedParentSvgSize() {
                            let t = this.cachedParentSvgSize;
                            return new rb(t.width, t.height)
                        }
                        getOriginOffsetInPixels() {
                            return tN(this.getCanvas())
                        }
                        getInjectionDiv() {
                            if (!this.injectionDiv) {
                                let t = this.svgGroup_;
                                for (; t;) {
                                    if (-1 !== (" " + (t.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                                        this.injectionDiv = t;
                                        break
                                    }
                                    t = t.parentNode
                                }
                            }
                            return this.injectionDiv
                        }
                        getSvgGroup() {
                            return this.svgGroup_
                        }
                        getBlockCanvas() {
                            return this.getCanvas()
                        }
                        setResizeHandlerWrapper(t) {
                            this.resizeHandlerWrapper = t
                        }
                        createDom(t, e) {
                            return this.injectionDiv || (this.injectionDiv = null != e ? e : null), this.svgGroup_ = tu(rp.G, {
                                class: "blocklyWorkspace"
                            }), t && (this.svgBackground_ = tu(rp.RECT, {
                                height: "100%",
                                width: "100%",
                                class: t
                            }, this.svgGroup_), "blocklyMainBackground" === t && this.grid ? this.svgBackground_.style.fill = "url(#" + this.grid.getPatternId() + ")" : this.themeManager_.subscribe(this.svgBackground_, "workspaceBackgroundColour", "fill")), this.layerManager = new ca(this), this.svgBlockCanvas_ = this.layerManager.getBlockLayer(), this.svgBubbleCanvas_ = this.layerManager.getBubbleLayer(), this.isFlyout || (tt(this.svgGroup_, "pointerdown", this, this.onMouseDown_, !1), this.dummyWheelListener = () => {}, document.body.addEventListener("wheel", this.dummyWheelListener), tt(this.svgGroup_, "wheel", this, this.onMouseWheel_)), this.options.hasCategories && (this.toolbox_ = new(T(c.TOOLBOX, this.options, !0))(this)), this.grid && this.grid.update(this.scale), this.recordDragTargets(), (t = T(c.CURSOR, this.options)) && this.markerManager.setCursor(new t), this.renderer.createDom(this.svgGroup_, this.getTheme()), this.svgGroup_
                        }
                        dispose() {
                            if (this.rendered = !1, this.currentGesture_ && this.currentGesture_.cancel(), this.svgGroup_ && tb(this.svgGroup_), this.toolbox_ && (this.toolbox_.dispose(), this.toolbox_ = null), this.flyout && (this.flyout.dispose(), this.flyout = null), this.trashcan && (this.trashcan.dispose(), this.trashcan = null), this.scrollbar && (this.scrollbar.dispose(), this.scrollbar = null), this.zoomControls_ && this.zoomControls_.dispose(), this.audioManager && this.audioManager.dispose(), this.grid && (this.grid = null), this.renderer.dispose(), this.markerManager && this.markerManager.dispose(), super.dispose(), this.themeManager_ && (this.themeManager_.unsubscribeWorkspace(this), this.themeManager_.unsubscribe(this.svgBackground_), this.options.parentWorkspace || this.themeManager_.dispose()), this.connectionDBList.length = 0, this.toolboxCategoryCallbacks.clear(), this.flyoutButtonCallbacks.clear(), !this.options.parentWorkspace) {
                                let t = this.getParentSvg();
                                t && t.parentNode && tb(t.parentNode)
                            }
                            this.resizeHandlerWrapper && (ti(this.resizeHandlerWrapper), this.resizeHandlerWrapper = null), this.dummyWheelListener && (document.body.removeEventListener("wheel", this.dummyWheelListener), this.dummyWheelListener = null)
                        }
                        addTrashcan() {
                            this.trashcan = ch.newTrashcan(this);
                            let t = this.trashcan.createDom();
                            this.svgGroup_.insertBefore(t, this.getCanvas())
                        }
                        static newTrashcan(t) {
                            throw Error("The implementation of newTrashcan should be monkey-patched in by blockly.ts")
                        }
                        addZoomControls() {
                            this.zoomControls_ = new rP(this);
                            let t = this.zoomControls_.createDom();
                            this.svgGroup_.appendChild(t)
                        }
                        addFlyout(t) {
                            let e = new aX({
                                parentWorkspace: this,
                                rtl: this.RTL,
                                oneBasedIndex: this.options.oneBasedIndex,
                                horizontalLayout: this.horizontalLayout,
                                renderer: this.options.renderer,
                                rendererOverrides: this.options.rendererOverrides,
                                move: {
                                    scrollbars: !0
                                }
                            });
                            return e.toolboxPosition = this.options.toolboxPosition, this.flyout = this.horizontalLayout ? new(T(c.FLYOUTS_HORIZONTAL_TOOLBOX, this.options, !0))(e) : new(T(c.FLYOUTS_VERTICAL_TOOLBOX, this.options, !0))(e), this.flyout.autoClose = !1, this.flyout.getWorkspace().setVisible(!0), this.flyout.createDom(t)
                        }
                        getFlyout(t) {
                            return this.flyout || t ? this.flyout : this.toolbox_ ? this.toolbox_.getFlyout() : null
                        }
                        getToolbox() {
                            return this.toolbox_
                        }
                        updateScreenCalculations_() {
                            this.updateInverseScreenCTM(), this.recordDragTargets()
                        }
                        resizeContents() {
                            this.resizesEnabled && this.rendered && (this.scrollbar && this.scrollbar.resize(), this.updateInverseScreenCTM())
                        }
                        resize() {
                            this.toolbox_ && this.toolbox_.position(), this.flyout && this.flyout.position();
                            let t = this.componentManager.getComponents(nQ.Capability.POSITIONABLE, !0),
                                e = this.getMetricsManager().getUiMetrics(),
                                i = [];
                            for (let s = 0, o; o = t[s]; s++) {
                                o.position(e, i);
                                let t = o.getBoundingRectangle();
                                t && i.push(t)
                            }
                            this.scrollbar && this.scrollbar.resize(), this.updateScreenCalculations_()
                        }
                        updateScreenCalculationsIfScrolled() {
                            let t = tx();
                            n3.equals(this.lastRecordedPageScroll, t) || (this.lastRecordedPageScroll = t, this.updateScreenCalculations_())
                        }
                        getLayerManager() {
                            return this.layerManager
                        }
                        getCanvas() {
                            return this.layerManager.getBlockLayer()
                        }
                        setCachedParentSvgSize(t, e) {
                            let i = this.getParentSvg();
                            null != t && (this.cachedParentSvgSize.width = t, i.setAttribute("data-cached-width", `${t}`)), null != e && (this.cachedParentSvgSize.height = e, i.setAttribute("data-cached-height", `${e}`))
                        }
                        getBubbleCanvas() {
                            return this.layerManager.getBubbleLayer()
                        }
                        getParentSvg() {
                            if (!this.cachedParentSvg) {
                                let t = this.svgGroup_;
                                for (; t;) {
                                    if ("svg" === t.tagName) {
                                        this.cachedParentSvg = t;
                                        break
                                    }
                                    t = t.parentNode
                                }
                            }
                            return this.cachedParentSvg
                        }
                        maybeFireViewportChangeEvent() {
                            if (W()) {
                                var t = this.scale,
                                    e = -this.scrollY,
                                    i = -this.scrollX;
                                if (!(t === this.oldScale && 1 > Math.abs(e - this.oldTop) && 1 > Math.abs(i - this.oldLeft))) {
                                    var s = new(X(nE))(e, i, t, this.id, this.oldScale);
                                    this.oldScale = t, this.oldTop = e, this.oldLeft = i, F(s)
                                }
                            }
                        }
                        translate(t, e) {
                            let i, s;
                            null == (i = this.layerManager) || i.translateLayers(new n3(t, e), this.scale), null == (s = this.grid) || s.moveTo(t, e), this.maybeFireViewportChangeEvent()
                        }
                        getWidth() {
                            let t = this.getMetrics();
                            return t ? t.viewWidth / this.scale : 0
                        }
                        setVisible(t) {
                            this.isVisible_ = t, this.svgGroup_ && (this.scrollbar && this.scrollbar.setContainerVisible(t), this.getFlyout() && this.getFlyout().setContainerVisible(t), this.getParentSvg().style.display = t ? "block" : "none", this.toolbox_ && this.toolbox_.setVisible(t), t || this.hideChaff(!0))
                        }
                        render() {
                            for (var t = this.getAllBlocks(!1), e = t.length - 1; 0 <= e; e--) t[e].queueRender();
                            if (this.currentGesture_)
                                for (t = this.currentGesture_.getInsertionMarkers(), e = 0; e < t.length; e++) t[e].queueRender();
                            el().then(() => void this.markerManager.updateMarkers())
                        }
                        highlightBlock(t, e) {
                            if (void 0 === e) {
                                for (let t = 0, e; e = this.highlightedBlocks[t]; t++) e.setHighlighted(!1);
                                this.highlightedBlocks.length = 0
                            }(t = t ? this.getBlockById(t) : null) && ((e = void 0 === e || e) ? -1 === this.highlightedBlocks.indexOf(t) && this.highlightedBlocks.push(t) : tl(this.highlightedBlocks, t), t.setHighlighted(e))
                        }
                        paste(t) {
                            let e;
                            if (tc("Blockly.WorkspaceSvg.prototype.paste", "v10", "v11", "Blockly.clipboard.paste"), !this.rendered || !t.type && !t.tagName) return null;
                            this.currentGesture_ && this.currentGesture_.cancel();
                            let i = r.getGroup$$module$build$src$core$events$utils();
                            i || r.setGroup$$module$build$src$core$events$utils(!0);
                            try {
                                e = t.type ? this.pasteBlock_(null, t) : "comment" === t.tagName.toLowerCase() ? this.pasteWorkspaceComment_(t) : this.pasteBlock_(t, null)
                            } finally {
                                r.setGroup$$module$build$src$core$events$utils(i)
                            }
                            return e
                        }
                        pasteBlock_(t, e) {
                            let i;
                            r.disable$$module$build$src$core$events$utils();
                            try {
                                let s = 0,
                                    o = 0;
                                if (t) {
                                    let e, n;
                                    i = ek(t, this), s = parseInt(null != (e = t.getAttribute("x")) ? e : "0"), this.RTL && (s = -s), o = parseInt(null != (n = t.getAttribute("y")) ? n : "0")
                                } else e && (i = ez(e, this), s = e.x || 10, this.RTL && (s = this.getWidth() - s), o = e.y || 10);
                                if (!isNaN(s) && !isNaN(o)) {
                                    let t;
                                    do {
                                        t = !1;
                                        let e = this.getAllBlocks(!1);
                                        for (let i = 0, n; n = e[i]; i++) {
                                            let e = n.getRelativeToSurfaceXY();
                                            if (1 >= Math.abs(s - e.x) && 1 >= Math.abs(o - e.y)) {
                                                t = !0;
                                                break
                                            }
                                        }
                                        if (!t) {
                                            let e = i.getConnections_(!1);
                                            for (let i = 0, n; n = e[i]; i++)
                                                if (n.closest(r.config$$module$build$src$core$config.snapRadius, new n3(s, o)).connection) {
                                                    t = !0;
                                                    break
                                                }
                                        }
                                        t && (s = this.RTL ? s - r.config$$module$build$src$core$config.snapRadius : s + r.config$$module$build$src$core$config.snapRadius, o += 2 * r.config$$module$build$src$core$config.snapRadius)
                                    } while (t);
                                    i.moveTo(new n3(s, o))
                                }
                            } finally {
                                r.enable$$module$build$src$core$events$utils()
                            }
                            return W() && !i.isShadow() && F(new(X(r.CREATE$$module$build$src$core$events$utils))(i)), i.select(), i
                        }
                        pasteWorkspaceComment_(t) {
                            let e;
                            r.disable$$module$build$src$core$events$utils();
                            try {
                                e = r3.fromXmlRendered(t, this);
                                let i, s = parseInt(null != (i = t.getAttribute("x")) ? i : "0"),
                                    o, n = parseInt(null != (o = t.getAttribute("y")) ? o : "0");
                                isNaN(s) || isNaN(n) || (this.RTL && (s = -s), e.moveBy(s + 50, n + 50))
                            } finally {
                                r.enable$$module$build$src$core$events$utils()
                            }
                            return W() && rQ.fireCreateEvent(e), e.select(), e
                        }
                        refreshToolboxSelection() {
                            let t = this.isFlyout ? this.targetWorkspace : this;
                            t && !t.currentGesture_ && t.toolbox_ && t.toolbox_.getFlyout() && t.toolbox_.refreshSelection()
                        }
                        renameVariableById(t, e) {
                            super.renameVariableById(t, e), this.refreshToolboxSelection()
                        }
                        deleteVariableById(t) {
                            super.deleteVariableById(t), this.refreshToolboxSelection()
                        }
                        createVariable(t, e, i) {
                            return t = super.createVariable(t, e, i), this.refreshToolboxSelection(), t
                        }
                        recordDragTargets() {
                            let t = this.componentManager.getComponents(nQ.Capability.DRAG_TARGET, !0);
                            this.dragTargetAreas = [];
                            for (let e = 0, i; i = t[e]; e++) {
                                let t = i.getClientRect();
                                t && this.dragTargetAreas.push({
                                    component: i,
                                    clientRect: t
                                })
                            }
                        }
                        newBlock(t, e) {
                            throw Error("The implementation of newBlock should be monkey-patched in by blockly.ts")
                        }
                        getDragTarget(t) {
                            for (let e = 0, i; i = this.dragTargetAreas[e]; e++)
                                if (i.clientRect.contains(t.clientX, t.clientY)) return i.component;
                            return null
                        }
                        onMouseDown_(t) {
                            let e = this.getGesture(t);
                            e && e.handleWsStart(t, this)
                        }
                        startDrag(t, e) {
                            t = tn(t, this.getParentSvg(), this.getInverseScreenCTM()), t.x /= this.scale, t.y /= this.scale, this.dragDeltaXY = n3.difference(e, t)
                        }
                        moveDrag(t) {
                            return t = tn(t, this.getParentSvg(), this.getInverseScreenCTM()), t.x /= this.scale, t.y /= this.scale, n3.sum(this.dragDeltaXY, t)
                        }
                        isDragging() {
                            return null !== this.currentGesture_ && this.currentGesture_.isDragging()
                        }
                        isDraggable() {
                            return this.options.moveOptions && this.options.moveOptions.drag
                        }
                        isMovable() {
                            return this.options.moveOptions && !!this.options.moveOptions.scrollbars || this.options.moveOptions && this.options.moveOptions.wheel || this.options.moveOptions && this.options.moveOptions.drag || this.options.zoomOptions && this.options.zoomOptions.wheel || this.options.zoomOptions && this.options.zoomOptions.pinch
                        }
                        isMovableHorizontally() {
                            let t = !!this.scrollbar;
                            return this.isMovable() && (!t || t && this.scrollbar.canScrollHorizontally())
                        }
                        isMovableVertically() {
                            let t = !!this.scrollbar;
                            return this.isMovable() && (!t || t && this.scrollbar.canScrollVertically())
                        }
                        onMouseWheel_(t) {
                            if (aH.inProgress()) t.preventDefault(), t.stopPropagation();
                            else {
                                var e = this.options.zoomOptions && this.options.zoomOptions.wheel,
                                    i = this.options.moveOptions && this.options.moveOptions.wheel;
                                if (e || i) {
                                    var s = tr(t);
                                    if (nX) var o = t.metaKey;
                                    e && (t.ctrlKey || o || !i) ? (s = -s.y / 50, e = tn(t, this.getParentSvg(), this.getInverseScreenCTM()), this.zoom(e.x, e.y, s)) : (e = this.scrollX - s.x, i = this.scrollY - s.y, t.shiftKey && !s.x && (e = this.scrollX - s.y, i = this.scrollY), this.scroll(e, i)), t.preventDefault()
                                }
                            }
                        }
                        getBlocksBoundingBox() {
                            let t = this.getTopBoundedElements();
                            if (!t.length) return new rg(0, 0, 0, 0);
                            let e = t[0].getBoundingRectangle();
                            for (let s = 1; s < t.length; s++) {
                                var i = t[s];
                                i.isInsertionMarker && i.isInsertionMarker() || ((i = i.getBoundingRectangle()).top < e.top && (e.top = i.top), i.bottom > e.bottom && (e.bottom = i.bottom), i.left < e.left && (e.left = i.left), i.right > e.right && (e.right = i.right))
                            }
                            return e
                        }
                        cleanUp() {
                            this.setResizesEnabled(!1), r.setGroup$$module$build$src$core$events$utils(!0);
                            let t = this.getTopBlocks(!0),
                                e = 0;
                            for (let i = 0, s; s = t[i]; i++) {
                                if (!s.isMovable()) continue;
                                let t = s.getRelativeToSurfaceXY();
                                s.moveBy(-t.x, e - t.y, ["cleanup"]), s.snapToGrid(), e = s.getRelativeToSurfaceXY().y + s.getHeightWidth().height + this.renderer.getConstants().MIN_BLOCK_HEIGHT
                            }
                            r.setGroup$$module$build$src$core$events$utils(!1), this.setResizesEnabled(!0)
                        }
                        showContextMenu(t) {
                            if (!this.options.readOnly && !this.isFlyout) {
                                var e = l1.registry.getContextMenuOptions(l1.ScopeType.WORKSPACE, {
                                    workspace: this
                                });
                                this.configureContextMenu && this.configureContextMenu(e, t), ig(t, e, this.RTL)
                            }
                        }
                        updateToolbox(t) {
                            if (t = tB(t)) {
                                if (!this.options.languageTree) throw Error("Existing toolbox is null.  Can't create new toolbox.");
                                if (tH(t)) {
                                    if (!this.toolbox_) throw Error("Existing toolbox has no categories.  Can't change mode.");
                                    this.options.languageTree = t, this.toolbox_.render(t)
                                } else {
                                    if (!this.flyout) throw Error("Existing toolbox has categories.  Can't change mode.");
                                    this.options.languageTree = t, this.flyout.show(t)
                                }
                            } else if (this.options.languageTree) throw Error("Can't nullify an existing toolbox.")
                        }
                        markFocused() {
                            this.options.parentWorkspace ? this.options.parentWorkspace.markFocused() : (v(this), this.getParentSvg().focus({
                                preventScroll: !0
                            }))
                        }
                        zoom(t, e, i) {
                            i = Math.pow(this.options.zoomOptions.scaleSpeed, i);
                            let s = this.scale * i;
                            if (this.scale !== s) {
                                s > this.options.zoomOptions.maxScale ? i = this.options.zoomOptions.maxScale / this.scale : s < this.options.zoomOptions.minScale && (i = this.options.zoomOptions.minScale / this.scale);
                                var o = this.getCanvas().getCTM(),
                                    n = this.getParentSvg().createSVGPoint();
                                n.x = t, n.y = e, t = (n = n.matrixTransform(o.inverse())).x, e = n.y, o = o.translate(t * (1 - i), e * (1 - i)).scale(i), this.scrollX = o.e, this.scrollY = o.f, this.setScale(s)
                            }
                        }
                        zoomCenter(t) {
                            let e;
                            var i = this.getMetrics();
                            this.flyout ? (e = i.svgWidth ? i.svgWidth / 2 : 0, i = i.svgHeight ? i.svgHeight / 2 : 0) : (e = i.viewWidth / 2 + i.absoluteLeft, i = i.viewHeight / 2 + i.absoluteTop), this.zoom(e, i, t)
                        }
                        zoomToFit() {
                            if (this.isMovable()) {
                                var t = this.getMetrics(),
                                    e = t.viewWidth;
                                t = t.viewHeight;
                                var i = this.getBlocksBoundingBox(),
                                    s = i.right - i.left + 40;
                                if (i = i.bottom - i.top + 40, s) {
                                    this.flyout && (this.horizontalLayout ? (t += this.flyout.getHeight(), i += this.flyout.getHeight() / this.scale) : (e += this.flyout.getWidth(), s += this.flyout.getWidth() / this.scale)), e /= s, t /= i, r.disable$$module$build$src$core$events$utils();
                                    try {
                                        this.setScale(Math.min(e, t)), this.scrollCenter()
                                    } finally {
                                        r.enable$$module$build$src$core$events$utils()
                                    }
                                    this.maybeFireViewportChangeEvent()
                                }
                            } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.")
                        }
                        beginCanvasTransition() {
                            td(this.getCanvas(), "blocklyCanvasTransitioning"), td(this.getBubbleCanvas(), "blocklyCanvasTransitioning")
                        }
                        endCanvasTransition() {
                            tg(this.getCanvas(), "blocklyCanvasTransitioning"), tg(this.getBubbleCanvas(), "blocklyCanvasTransitioning")
                        }
                        scrollCenter() {
                            if (this.isMovable()) {
                                var t = this.getMetrics(),
                                    e = (t.scrollWidth - t.viewWidth) / 2,
                                    i = (t.scrollHeight - t.viewHeight) / 2;
                                e = -e - t.scrollLeft, i = -i - t.scrollTop, this.scroll(e, i)
                            } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.")
                        }
                        centerOnBlock(t, e) {
                            if (this.isMovable()) {
                                var i = t ? this.getBlockById(t) : null;
                                if (i) {
                                    t = i.getRelativeToSurfaceXY(), i = e ? {
                                        height: i.height,
                                        width: i.width
                                    } : i.getHeightWidth();
                                    var s = this.scale;
                                    e = (t.x + (this.RTL ? -1 : 1) * i.width / 2) * s, t = (t.y + i.height / 2) * s, i = this.getMetrics(), this.scroll(-(e - i.viewWidth / 2), -(t - i.viewHeight / 2))
                                }
                            } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.")
                        }
                        setScale(t) {
                            this.options.zoomOptions.maxScale && t > this.options.zoomOptions.maxScale ? t = this.options.zoomOptions.maxScale : this.options.zoomOptions.minScale && t < this.options.zoomOptions.minScale && (t = this.options.zoomOptions.minScale), this.scale = t, this.hideChaff(!1), (t = this.getFlyout(!1)) && t.isVisible() && (t.reflow(), this.recordDragTargets()), this.grid && this.grid.update(this.scale), t = this.getMetrics(), this.scrollX -= t.absoluteLeft, this.scrollY -= t.absoluteTop, t.viewLeft += t.absoluteLeft, t.viewTop += t.absoluteTop, this.scroll(this.scrollX, this.scrollY), this.scrollbar && (this.flyout ? this.scrollbar.resizeView(t) : this.scrollbar.resizeContent(t))
                        }
                        getScale() {
                            return this.options.parentWorkspace ? this.options.parentWorkspace.getScale() : this.scale
                        }
                        scroll(t, e) {
                            this.hideChaff(!0);
                            let i = this.getMetrics();
                            t = Math.min(t, -i.scrollLeft), e = Math.min(e, -i.scrollTop);
                            let s = i.scrollTop + Math.max(0, i.scrollHeight - i.viewHeight);
                            t = Math.max(t, -(i.scrollLeft + Math.max(0, i.scrollWidth - i.viewWidth))), e = Math.max(e, -s), this.scrollX = t, this.scrollY = e, this.scrollbar && this.scrollbar.set(-(t + i.scrollLeft), -(e + i.scrollTop), !1), t += i.absoluteLeft, e += i.absoluteTop, this.translate(t, e)
                        }
                        getBlockById(t) {
                            return super.getBlockById(t)
                        }
                        getAllBlocks(t = !1) {
                            return super.getAllBlocks(t)
                        }
                        getTopBlocks(t = !1) {
                            return super.getTopBlocks(t)
                        }
                        addTopBlock(t) {
                            this.addTopBoundedElement(t), super.addTopBlock(t)
                        }
                        removeTopBlock(t) {
                            this.removeTopBoundedElement(t), super.removeTopBlock(t)
                        }
                        addTopComment(t) {
                            this.addTopBoundedElement(t), super.addTopComment(t)
                        }
                        removeTopComment(t) {
                            this.removeTopBoundedElement(t), super.removeTopComment(t)
                        }
                        getRootWorkspace() {
                            return super.getRootWorkspace()
                        }
                        addTopBoundedElement(t) {
                            this.topBoundedElements.push(t)
                        }
                        removeTopBoundedElement(t) {
                            tl(this.topBoundedElements, t)
                        }
                        getTopBoundedElements() {
                            return [].concat(this.topBoundedElements)
                        }
                        setResizesEnabled(t) {
                            let e = !this.resizesEnabled && t;
                            this.resizesEnabled = t, e && this.resizeContents()
                        }
                        clear() {
                            this.setResizesEnabled(!1), super.clear(), this.topBoundedElements = [], this.setResizesEnabled(!0)
                        }
                        registerButtonCallback(t, e) {
                            if ("function" != typeof e) throw TypeError("Button callbacks must be functions.");
                            this.flyoutButtonCallbacks.set(t, e)
                        }
                        getButtonCallback(t) {
                            let e;
                            return null != (e = this.flyoutButtonCallbacks.get(t)) ? e : null
                        }
                        removeButtonCallback(t) {
                            this.flyoutButtonCallbacks.delete(t)
                        }
                        registerToolboxCategoryCallback(t, e) {
                            if ("function" != typeof e) throw TypeError("Toolbox category callbacks must be functions.");
                            this.toolboxCategoryCallbacks.set(t, e)
                        }
                        getToolboxCategoryCallback(t) {
                            return this.toolboxCategoryCallbacks.get(t) || null
                        }
                        removeToolboxCategoryCallback(t) {
                            this.toolboxCategoryCallbacks.delete(t)
                        }
                        getGesture(t) {
                            let e = "pointerdown" === t.type,
                                i = this.currentGesture_;
                            return i ? e && i.hasStarted() ? (console.warn("Tried to start the same gesture twice."), i.cancel(), null) : i : e ? this.currentGesture_ = new aH(t, this) : null
                        }
                        clearGesture() {
                            this.currentGesture_ = null
                        }
                        cancelCurrentGesture() {
                            this.currentGesture_ && this.currentGesture_.cancel()
                        }
                        getAudioManager() {
                            return this.audioManager
                        }
                        getGrid() {
                            return this.grid
                        }
                        hideChaff(t = !1) {
                            sn(), io(), iV(), this.hideComponents(t)
                        }
                        hideComponents(t = !1) {
                            this.getComponentManager().getComponents(nQ.Capability.AUTOHIDEABLE, !0).forEach(e => e.autoHide(t))
                        }
                        static setTopLevelWorkspaceMetrics_(t) {
                            let e = this.getMetrics();
                            "number" == typeof t.x && (this.scrollX = -(e.scrollLeft + (e.scrollWidth - e.viewWidth) * t.x)), "number" == typeof t.y && (this.scrollY = -(e.scrollTop + (e.scrollHeight - e.viewHeight) * t.y)), this.translate(this.scrollX + e.absoluteLeft, this.scrollY + e.absoluteTop)
                        }
                    },
                    cc = {};
                cc.WorkspaceSvg = ch, cc.resizeSvgContents = function (t) {
                    t.resizeContents()
                };
                var cu = class extends nA {
                    constructor(t, e) {
                        super(e), this.type = n_, this.isOpen = t
                    }
                    toJson() {
                        let t = super.toJson();
                        if (void 0 === this.isOpen) throw Error("Whether this is already open or not is undefined. Either pass a value to the constructor, or call fromJson");
                        return t.isOpen = this.isOpen, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new cu)).isOpen = t.isOpen, e
                    }
                };
                d(c.EVENT, n_, cu);
                var cd = class extends lu {
                    constructor(t) {
                        if (super(t), this.type = r.DELETE$$module$build$src$core$events$utils, t) {
                            if (t.getParent()) throw Error("Connected blocks cannot be deleted.");
                            t.isShadow() && (this.recordUndo = !1), this.oldXml = eb(t), this.ids = V(t), this.wasShadow = t.isShadow(), this.oldJson = eM(t, {
                                addCoordinates: !0
                            })
                        }
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.oldXml) throw Error("The old block XML is undefined. Either pass a block to the constructor, or call fromJson");
                        if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
                        if (void 0 === this.wasShadow) throw Error("Whether the block was a shadow is undefined. Either pass a block to the constructor, or call fromJson");
                        if (!this.oldJson) throw Error("The old block JSON is undefined. Either pass a block to the constructor, or call fromJson");
                        return t.oldXml = eT(this.oldXml), t.ids = this.ids, t.wasShadow = this.wasShadow, t.oldJson = this.oldJson, this.recordUndo || (t.recordUndo = this.recordUndo), t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new cd)).oldXml = r.textToDom$$module$build$src$core$utils$xml(t.oldXml), e.ids = t.ids, e.wasShadow = t.wasShadow || "shadow" === e.oldXml.tagName.toLowerCase(), e.oldJson = t.oldJson, void 0 !== t.recordUndo && (e.recordUndo = t.recordUndo), e
                    }
                    run(t) {
                        let e = this.getEventWorkspace_();
                        if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
                        if (!this.oldJson) throw Error("The old block JSON is undefined. Either pass a block to the constructor, or call fromJson");
                        if (t)
                            for (t = 0; t < this.ids.length; t++) {
                                let i = this.ids[t],
                                    s = e.getBlockById(i);
                                s ? s.dispose(!1) : i === this.blockId && console.warn("Can't delete non-existent block: " + i)
                            } else ez(this.oldJson, e)
                    }
                };
                d(c.EVENT, r.DELETE$$module$build$src$core$events$utils, cd);
                var cp = class {
                    constructor(t, e, i) {
                        if (this.data = null, this.disposed = !1, this.hue_ = null, this.colour_ = "#000000", this.styleName_ = "", this.suppressPrefixSuffix = !1, this.previousConnection = this.nextConnection = this.outputConnection = null, this.inputList = [], this.icons = [], this.disabled = !1, this.tooltip = "", this.contextMenu = !0, this.parentBlock_ = null, this.childBlocks_ = [], this.editable_ = this.movable_ = this.deletable_ = !0, this.collapsed_ = this.isShadow_ = !1, this.outputShape_ = null, this.isInsertionMarker_ = this.disposing = !1, this.onchangeWrapper_ = this.helpUrl = this.rendered = null, this.statementInputCount = 0, this.workspace = t, this.id = i && !t.getBlockById(i) ? i : M(), t.setBlockById(this.id, this), this.xy_ = new n3(0, 0), this.isInFlyout = t.isFlyout, this.isInMutator = t.isMutator, this.RTL = t.RTL, e) {
                            if (this.type = e, !(i = o3[e]) || "object" != typeof i) throw TypeError("Invalid block definition for type: " + e);
                            Object.assign(this, i)
                        }
                        t.addTopBlock(this), t.addTypedBlock(this), new.target === cp && this.doInit_()
                    }
                    doInit_() {
                        let t = r.getGroup$$module$build$src$core$events$utils();
                        t || r.setGroup$$module$build$src$core$events$utils(!0);
                        let e = P();
                        try {
                            "function" == typeof this.init && (B(!1), this.init(), B(e)), W() && F(new(X(r.CREATE$$module$build$src$core$events$utils))(this))
                        } finally {
                            r.setGroup$$module$build$src$core$events$utils(t), B(e)
                        }
                        this.inputsInlineDefault = this.inputsInline, "function" == typeof this.onchange && this.setOnChange(this.onchange)
                    }
                    dispose(t) {
                        this.isDeadOrDying() || (this.onchangeWrapper_ && this.workspace.removeChangeListener(this.onchangeWrapper_), this.unplug(t), W() && F(new(X(r.DELETE$$module$build$src$core$events$utils))(this)), this.workspace.removeTopBlock(this), this.disposeInternal())
                    }
                    disposeInternal() {
                        this.isDeadOrDying() || (this.onchangeWrapper_ && this.workspace.removeChangeListener(this.onchangeWrapper_), this.workspace.removeTypedBlock(this), this.workspace.removeBlockById(this.id), this.disposing = !0, "function" == typeof this.destroy && this.destroy(), this.childBlocks_.forEach(t => t.disposeInternal()), this.inputList.forEach(t => t.dispose()), this.inputList.length = 0, this.getConnections_(!0).forEach(t => t.dispose()), this.disposed = !0)
                    }
                    isDeadOrDying() {
                        return this.disposing || this.disposed
                    }
                    initModel() {
                        for (let t of this.inputList)
                            for (let e of t.fieldRow) e.initModel && e.initModel()
                    }
                    unplug(t) {
                        this.outputConnection && this.unplugFromRow_(t), this.previousConnection && this.unplugFromStack_(t)
                    }
                    unplugFromRow_(t) {
                        let e = null,
                            i;
                        (null == (i = this.outputConnection) ? 0 : i.isConnected()) && (e = this.outputConnection.targetConnection, this.outputConnection.disconnect()), e && t && (t = this.getOnlyValueConnection_()) && t.isConnected() && !t.targetBlock().isShadow() && (null == (t = t.targetConnection) || t.disconnect(), this.workspace.connectionChecker.canConnect(t, e, !1) ? e.connect(t) : null == t || t.onFailedConnect(e))
                    }
                    getOnlyValueConnection_() {
                        let t = null;
                        for (let e = 0; e < this.inputList.length; e++) {
                            let i = this.inputList[e].connection;
                            if (i && i.type === lx.INPUT_VALUE && i.targetConnection) {
                                if (t) return null;
                                t = i
                            }
                        }
                        return t
                    }
                    unplugFromStack_(t) {
                        var e;
                        let i = null;
                        if ((null == (e = this.previousConnection) ? 0 : e.isConnected()) && (i = this.previousConnection.targetConnection, this.previousConnection.disconnect()), e = this.getNextBlock(), t && e && !e.isShadow()) {
                            let e, s;
                            null == (t = null != (s = null == (e = this.nextConnection) ? void 0 : e.targetConnection) ? s : null) || t.disconnect(), i && this.workspace.connectionChecker.canConnect(i, t, !1) && i.connect(t)
                        }
                    }
                    getConnections_(t) {
                        t = [], this.outputConnection && t.push(this.outputConnection), this.previousConnection && t.push(this.previousConnection), this.nextConnection && t.push(this.nextConnection);
                        for (let e = 0, i; i = this.inputList[e]; e++) i.connection && t.push(i.connection);
                        return t
                    }
                    lastConnectionInStack(t) {
                        let e = this.nextConnection;
                        for (; e;) {
                            let i = e.targetBlock();
                            if (!i || t && i.isShadow()) return e;
                            e = i.nextConnection
                        }
                        return null
                    }
                    bumpNeighbours() {}
                    getParent() {
                        return this.parentBlock_
                    }
                    getInputWithBlock(t) {
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            if (i.connection && i.connection.targetBlock() === t) return i;
                        return null
                    }
                    getSurroundParent() {
                        let t = this,
                            e;
                        do
                            if (e = t, !(t = t.getParent())) return null; while (t.getNextBlock() === e);
                        return t
                    }
                    getNextBlock() {
                        return this.nextConnection && this.nextConnection.targetBlock()
                    }
                    getPreviousBlock() {
                        return this.previousConnection && this.previousConnection.targetBlock()
                    }
                    getRootBlock() {
                        let t, e = this;
                        do e = (t = e).parentBlock_; while (e);
                        return t
                    }
                    getTopStackBlock() {
                        let t = this,
                            e;
                        do e = t.getPreviousBlock(); while (e && e.getNextBlock() === t && (t = e));
                        return t
                    }
                    getChildren(t) {
                        if (!t) return this.childBlocks_;
                        t = [];
                        for (let i = 0, s; s = this.inputList[i]; i++)
                            if (s.connection) {
                                var e = s.connection.targetBlock();
                                e && t.push(e)
                            } return (e = this.getNextBlock()) && t.push(e), t
                    }
                    setParent(t) {
                        if (t !== this.parentBlock_) {
                            var e = this.previousConnection && this.previousConnection.targetBlock() || this.outputConnection && this.outputConnection.targetBlock(),
                                i = !!e;
                            if (i && t && e !== t) throw Error("Block connected to superior one that is not new parent.");
                            if (!i && t) throw Error("Block not connected to new parent.");
                            if (i && !t) throw Error("Cannot set parent to null while block is still connected to superior block.");
                            this.parentBlock_ ? tl(this.parentBlock_.childBlocks_, this) : this.workspace.removeTopBlock(this), (this.parentBlock_ = t) ? t.childBlocks_.push(this) : this.workspace.addTopBlock(this)
                        }
                    }
                    getDescendants(t) {
                        let e = [this],
                            i = this.getChildren(t);
                        for (let s, o = 0; s = i[o]; o++) e.push(...s.getDescendants(t));
                        return e
                    }
                    isDeletable() {
                        return this.deletable_ && !this.isShadow_ && !this.isDeadOrDying() && !this.workspace.options.readOnly
                    }
                    isOwnDeletable() {
                        return this.deletable_
                    }
                    setDeletable(t) {
                        this.deletable_ = t
                    }
                    isMovable() {
                        return this.movable_ && !this.isShadow_ && !this.isDeadOrDying() && !this.workspace.options.readOnly
                    }
                    isOwnMovable() {
                        return this.movable_
                    }
                    setMovable(t) {
                        this.movable_ = t
                    }
                    isDuplicatable() {
                        return !this.workspace.hasBlockLimits() || this.workspace.isCapacityAvailable(N(this, !0))
                    }
                    isShadow() {
                        return this.isShadow_
                    }
                    setShadow(t) {
                        this.isShadow_ = t
                    }
                    isInsertionMarker() {
                        return this.isInsertionMarker_
                    }
                    setInsertionMarker(t) {
                        this.isInsertionMarker_ = t
                    }
                    isEditable() {
                        return this.editable_ && !this.isDeadOrDying() && !this.workspace.options.readOnly
                    }
                    isOwnEditable() {
                        return this.editable_
                    }
                    setEditable(t) {
                        this.editable_ = t;
                        for (let t = 0, e; e = this.inputList[t]; t++)
                            for (let t = 0, i; i = e.fieldRow[t]; t++) i.updateEditable()
                    }
                    isDisposed() {
                        return this.disposed
                    }
                    isSimpleReporter() {
                        if (!this.outputConnection) return !1;
                        for (let t of this.inputList)
                            if (t.connection || 1 < t.fieldRow.length) return !1;
                        return !0
                    }
                    getMatchingConnection(t, e) {
                        let i = this.getConnections_(!0);
                        if (t = t.getConnections_(!0), i.length !== t.length) throw Error("Connection lists did not match in length.");
                        for (let s = 0; s < t.length; s++)
                            if (t[s] === e) return i[s];
                        return null
                    }
                    setHelpUrl(t) {
                        this.helpUrl = t
                    }
                    setTooltip(t) {
                        this.tooltip = t
                    }
                    getTooltip() {
                        return i9(this)
                    }
                    getColour() {
                        return this.colour_
                    }
                    getStyleName() {
                        return this.styleName_
                    }
                    getHue() {
                        return this.hue_
                    }
                    setColour(t) {
                        t = sI(t), this.hue_ = t.hue, this.colour_ = t.hex
                    }
                    setStyle(t) {
                        this.styleName_ = t
                    }
                    setOnChange(t) {
                        if (t && "function" != typeof t) throw Error("onchange must be a function.");
                        this.onchangeWrapper_ && this.workspace.removeChangeListener(this.onchangeWrapper_), this.onchange = t, this.onchangeWrapper_ = t.bind(this), this.workspace.addChangeListener(this.onchangeWrapper_)
                    }
                    getField(t) {
                        if ("string" != typeof t) throw TypeError("Block.prototype.getField expects a string with the field name but received " + (void 0 === t ? "nothing" : t + " of type " + typeof t) + " instead");
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            for (let e = 0, s; s = i.fieldRow[e]; e++)
                                if (s.name === t) return s;
                        return null
                    }
                    getVars() {
                        let t = [];
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            for (let e = 0, s; s = i.fieldRow[e]; e++) s.referencesVariables() && t.push(s.getValue());
                        return t
                    }
                    getVarModels() {
                        let t = [];
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            for (let e = 0, s; s = i.fieldRow[e]; e++)
                                if (s.referencesVariables()) {
                                    let e = this.workspace.getVariableById(s.getValue());
                                    e && t.push(e)
                                } return t
                    }
                    updateVarName(t) {
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            for (let e = 0, s; s = i.fieldRow[e]; e++) s.referencesVariables() && t.getId() === s.getValue() && s.refreshVariableName()
                    }
                    renameVarById(t, e) {
                        for (let i = 0, s; s = this.inputList[i]; i++)
                            for (let i = 0, o; o = s.fieldRow[i]; i++) o.referencesVariables() && t === o.getValue() && o.setValue(e)
                    }
                    getFieldValue(t) {
                        return (t = this.getField(t)) ? t.getValue() : null
                    }
                    setFieldValue(t, e) {
                        let i = this.getField(e);
                        if (!i) throw Error('Field "' + e + '" not found.');
                        i.setValue(t)
                    }
                    setPreviousStatement(t, e) {
                        if (t) void 0 === e && (e = null), this.previousConnection || (this.previousConnection = this.makeConnection_(lx.PREVIOUS_STATEMENT)), this.previousConnection.setCheck(e);
                        else if (this.previousConnection) {
                            if (this.previousConnection.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
                            this.previousConnection.dispose(), this.previousConnection = null
                        }
                    }
                    setNextStatement(t, e) {
                        if (t) void 0 === e && (e = null), this.nextConnection || (this.nextConnection = this.makeConnection_(lx.NEXT_STATEMENT)), this.nextConnection.setCheck(e);
                        else if (this.nextConnection) {
                            if (this.nextConnection.isConnected()) throw Error("Must disconnect next statement before removing connection.");
                            this.nextConnection.dispose(), this.nextConnection = null
                        }
                    }
                    setOutput(t, e) {
                        if (t) void 0 === e && (e = null), this.outputConnection || (this.outputConnection = this.makeConnection_(lx.OUTPUT_VALUE)), this.outputConnection.setCheck(e);
                        else if (this.outputConnection) {
                            if (this.outputConnection.isConnected()) throw Error("Must disconnect output value before removing connection.");
                            this.outputConnection.dispose(), this.outputConnection = null
                        }
                    }
                    setInputsInline(t) {
                        this.inputsInline !== t && (F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this, "inline", null, this.inputsInline, t)), this.inputsInline = t)
                    }
                    getInputsInline() {
                        if (void 0 !== this.inputsInline) return this.inputsInline;
                        for (var t = 1; t < this.inputList.length; t++)
                            if (this.inputList[t - 1] instanceof hX && this.inputList[t] instanceof hX) return !1;
                        for (t = 1; t < this.inputList.length; t++)
                            if (this.inputList[t - 1] instanceof r.ValueInput$$module$build$src$core$inputs$value_input && this.inputList[t] instanceof hX) return !0;
                        for (t = 0; t < this.inputList.length; t++)
                            if (this.inputList[t] instanceof hY) return !0;
                        return !1
                    }
                    setOutputShape(t) {
                        this.outputShape_ = t
                    }
                    getOutputShape() {
                        return this.outputShape_
                    }
                    isEnabled() {
                        return !this.disabled
                    }
                    setEnabled(t) {
                        if (this.isEnabled() !== t) {
                            let e = this.disabled;
                            this.disabled = !t, F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this, "disabled", null, e, !t))
                        }
                    }
                    getInheritedDisabled() {
                        let t = this.getSurroundParent();
                        for (; t;) {
                            if (t.disabled) return !0;
                            t = t.getSurroundParent()
                        }
                        return !1
                    }
                    isCollapsed() {
                        return this.collapsed_
                    }
                    setCollapsed(t) {
                        this.collapsed_ !== t && (F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this, "collapsed", null, this.collapsed_, t)), this.collapsed_ = t)
                    }
                    toString(t, e) {
                        e = this.toTokens(e);
                        for (let t = 2; t < e.length; t++) "(" === e[t - 2] && ")" === e[t] && (e[t - 2] = e[t - 1], e.splice(t - 1, 2));
                        let i = "";
                        return e = (e = e.reduce((t, e) => (t = t + ("(" === i || ")" === e ? "" : " ") + e, i = e[e.length - 1], t), "")).trim() || "???", t && e.length > t && (e = e.substring(0, t - 3) + "..."), e
                    }
                    toTokens(t = "?") {
                        let e = [];
                        for (let s of this.inputList)
                            if (s.name != h1) {
                                for (let t of s.fieldRow) e.push(t.getText());
                                if (s.connection) {
                                    let o = s.connection.targetBlock();
                                    if (o) {
                                        var i = s.connection;
                                        let n = i.getCheck();
                                        !n && i.targetConnection && (n = i.targetConnection.getCheck()), (i = !!n && (-1 !== n.indexOf("Boolean") || -1 !== n.indexOf("Number"))) && e.push("("), e.push(...o.toTokens(t)), i && e.push(")")
                                    } else e.push(t)
                                }
                            } return e
                    }
                    appendValueInput(t) {
                        return this.appendInput(new r.ValueInput$$module$build$src$core$inputs$value_input(t, this))
                    }
                    appendStatementInput(t) {
                        return this.statementInputCount++, this.appendInput(new hK(t, this))
                    }
                    appendDummyInput(t = "") {
                        return this.appendInput(new hX(t, this))
                    }
                    appendEndRowInput(t = "") {
                        return this.appendInput(new hY(t, this))
                    }
                    appendInput(t) {
                        return this.inputList.push(t), t
                    }
                    appendInputFromRegistry(t, e) {
                        return (t = m(c.INPUT, t, !1)) ? this.appendInput(new t(e, this)) : null
                    }
                    jsonInit(t) {
                        var e = t.type ? 'Block "' + t.type + '": ' : "";
                        if (t.output && t.previousStatement) throw Error(e + "Must not have both an output and a previousStatement.");
                        for (var i = 0; t["args" + i];) {
                            if (void 0 === t["message" + i]) throw Error(e + `args${i} must have a corresponding message (message${i}).`);
                            i++
                        }
                        if (t.style && t.style.hat && (this.hat = t.style.hat, t.style = null), t.style && t.colour) throw Error(e + "Must not have both a colour and a style.");
                        for (t.style ? this.jsonInitStyle_(t, e) : this.jsonInitColour_(t, e), i = 0; void 0 !== t["message" + i];) this.interpolate_(t["message" + i], t["args" + i] || [], t["implicitAlign" + i] || t["lastDummyAlign" + i], e), i++;
                        if (void 0 !== t.inputsInline && (r.disable$$module$build$src$core$events$utils(), this.setInputsInline(t.inputsInline), r.enable$$module$build$src$core$events$utils()), void 0 !== t.output && this.setOutput(!0, t.output), void 0 !== t.outputShape && this.setOutputShape(t.outputShape), void 0 !== t.previousStatement && this.setPreviousStatement(!0, t.previousStatement), void 0 !== t.nextStatement && this.setNextStatement(!0, t.nextStatement), void 0 !== t.tooltip && (i = sv(t.tooltip), this.setTooltip(i)), void 0 !== t.enableContextMenu && (this.contextMenu = !!t.enableContextMenu), void 0 !== t.suppressPrefixSuffix && (this.suppressPrefixSuffix = !!t.suppressPrefixSuffix), void 0 !== t.helpUrl && (i = sv(t.helpUrl), this.setHelpUrl(i)), "string" == typeof t.extensions && (console.warn(e + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + t.type + "' block."), t.extensions = [t.extensions]), void 0 !== t.mutator && sL(t.mutator, this, !0), Array.isArray(t = t.extensions))
                            for (e = 0; e < t.length; e++) sL(t[e], this, !1)
                    }
                    jsonInitColour_(t, e) {
                        if ("colour" in t) {
                            if (void 0 === t.colour) console.warn(e + "Undefined colour value.");
                            else {
                                t = t.colour;
                                try {
                                    this.setColour(t)
                                } catch (i) {
                                    console.warn(e + "Illegal colour value: ", t)
                                }
                            }
                        }
                    }
                    jsonInitStyle_(t, e) {
                        t = t.style;
                        try {
                            this.setStyle(t)
                        } catch (i) {
                            console.warn(e + "Style does not exist: ", t)
                        }
                    }
                    mixin(t, e) {
                        if (void 0 !== e && "boolean" != typeof e) throw Error("opt_disableCheck must be a boolean if provided");
                        if (!e) {
                            for (let i in e = [], t) void 0 !== this[i] && e.push(i);
                            if (e.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(e))
                        }
                        Object.assign(this, t)
                    }
                    interpolate_(t, e, i, s) {
                        t = sC(t), this.validateTokens_(t, e.length), e = this.interpolateArguments_(t, e, i), i = [];
                        for (let o = 0, n; n = e[o]; o++)
                            if (this.isInputKeyword_(n.type)) {
                                if (t = this.inputFromJson_(n, s)) {
                                    for (let e = 0, s; s = i[e]; e++) t.appendField(s[0], s[1]);
                                    i.length = 0
                                }
                            } else(t = this.fieldFromJson_(n)) && i.push([t, n.name])
                    }
                    validateTokens_(t, e) {
                        let i = [],
                            s = 0;
                        for (let o = 0; o < t.length; o++) {
                            let n = t[o];
                            if ("number" == typeof n) {
                                if (1 > n || n > e) throw Error('Block "' + this.type + '": Message index %' + n + " out of range.");
                                if (i[n]) throw Error('Block "' + this.type + '": Message index %' + n + " duplicated.");
                                i[n] = !0, s++
                            }
                        }
                        if (s !== e) throw Error('Block "' + this.type + '": Message does not reference all ' + e + " arg(s).")
                    }
                    interpolateArguments_(t, e, i) {
                        let s = [];
                        for (let n = 0; n < t.length; n++) {
                            var o = t[n];
                            if ("number" == typeof o && (o = e[o - 1]), "string" == typeof o) {
                                if ("\n" === o) o = {
                                    type: "input_end_row"
                                }, i && (o.align = i);
                                else if (!(o = this.stringToFieldJson_(o))) continue
                            }
                            s.push(o)
                        }
                        return (t = s.length) && !this.isInputKeyword_(s[t - 1].type) && (t = {
                            type: "input_dummy"
                        }, i && (t.align = i), s.push(t)), s
                    }
                    fieldFromJson_(t) {
                        let e = r.fromJson$$module$build$src$core$field_registry(t);
                        return !e && t.alt ? "string" == typeof t.alt ? (t = this.stringToFieldJson_(t.alt)) ? this.fieldFromJson_(t) : null : this.fieldFromJson_(t.alt) : e
                    }
                    inputFromJson_(t, e) {
                        let i;
                        var s = {
                            LEFT: r.Align$$module$build$src$core$inputs$align.LEFT,
                            RIGHT: r.Align$$module$build$src$core$inputs$align.RIGHT,
                            CENTRE: r.Align$$module$build$src$core$inputs$align.CENTRE,
                            CENTER: r.Align$$module$build$src$core$inputs$align.CENTRE
                        };
                        switch (t.type) {
                            case "input_value":
                                i = this.appendValueInput(t.name);
                                break;
                            case "input_statement":
                                i = this.appendStatementInput(t.name);
                                break;
                            case "input_dummy":
                                i = this.appendDummyInput(t.name);
                                break;
                            case "input_end_row":
                                i = this.appendEndRowInput(t.name);
                                break;
                            default:
                                i = this.appendInputFromRegistry(t.type, t.name)
                        }
                        return i ? (t.check && i.setCheck(t.check), t.align && (void 0 === (s = s[t.align.toUpperCase()]) ? console.warn(e + "Illegal align value: ", t.align) : i.setAlign(s)), i) : null
                    }
                    isInputKeyword_(t) {
                        return "input_value" === t || "input_statement" === t || "input_dummy" === t || "input_end_row" === t || _(c.INPUT, t)
                    }
                    stringToFieldJson_(t) {
                        return (t = t.trim()) ? {
                            type: "field_label",
                            text: t
                        } : null
                    }
                    moveInputBefore(t, e) {
                        if (t !== e) {
                            var i = -1,
                                s = e ? -1 : this.inputList.length;
                            for (let o = 0, n; n = this.inputList[o]; o++)
                                if (n.name === t) {
                                    if (i = o, -1 !== s) break
                                } else if (e && n.name === e && (s = o, -1 !== i)) break;
                            if (-1 === i) throw Error('Named input "' + t + '" not found.');
                            if (-1 === s) throw Error('Reference input "' + e + '" not found.');
                            this.moveNumberedInputBefore(i, s)
                        }
                    }
                    moveNumberedInputBefore(t, e) {
                        if (t === e) throw Error("Can't move input to itself.");
                        if (t >= this.inputList.length) throw RangeError("Input index " + t + " out of bounds.");
                        if (e > this.inputList.length) throw RangeError("Reference input " + e + " out of bounds.");
                        let i = this.inputList[t];
                        this.inputList.splice(t, 1), t < e && e--, this.inputList.splice(e, 0, i)
                    }
                    removeInput(t, e) {
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            if (i.name === t) return i instanceof hK && this.statementInputCount--, i.dispose(), this.inputList.splice(e, 1), !0;
                        if (e) return !1;
                        throw Error("Input not found: " + t)
                    }
                    getInput(t) {
                        for (let e = 0, i; i = this.inputList[e]; e++)
                            if (i.name === t) return i;
                        return null
                    }
                    getInputTargetBlock(t) {
                        return (t = this.getInput(t)) && t.connection && t.connection.targetBlock()
                    }
                    getCommentText() {
                        let t, e;
                        return null != (e = null == (t = this.getIcon(hh.TYPE)) ? void 0 : t.getText()) ? e : null
                    }
                    setCommentText(t) {
                        var e;
                        let i;
                        let s = null != (i = null == (e = this.getIcon(hh.TYPE)) ? void 0 : e.getText()) ? i : null;
                        s !== t && (null !== t ? ((e = this.getIcon(hh.TYPE)) || (e = this.addIcon(new hh(this))), r.disable$$module$build$src$core$events$utils(), e.setText(t), r.enable$$module$build$src$core$events$utils()) : this.removeIcon(hh.TYPE), F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this, "comment", null, s, t)))
                    }
                    setWarningText(t, e) {}
                    setMutator(t) {}
                    addIcon(t) {
                        if (this.hasIcon(t.getType())) throw new hu(t);
                        return this.icons.push(t), this.icons.sort((t, e) => t.getWeight() - e.getWeight()), t
                    }
                    removeIcon(t) {
                        let e;
                        return !!this.hasIcon(t) && (null == (e = this.getIcon(t)) || e.dispose(), this.icons = this.icons.filter(e => !e.getType().equals(t)), !0)
                    }
                    hasIcon(t) {
                        return this.icons.some(e => e.getType().equals(t))
                    }
                    getIcon(t) {
                        return t instanceof rF ? this.icons.find(e => e.getType().equals(t)) : this.icons.find(e => e.getType().toString() === t)
                    }
                    getIcons() {
                        return [...this.icons]
                    }
                    getRelativeToSurfaceXY() {
                        return this.xy_
                    }
                    moveBy(t, e, i) {
                        if (this.parentBlock_) throw Error("Block has parent");
                        let s = new(X(r.MOVE$$module$build$src$core$events$utils))(this);
                        i && s.setReason(i), this.xy_.translate(t, e), s.recordNew(), F(s)
                    }
                    makeConnection_(t) {
                        return new h0(this, t)
                    }
                    allInputsFilled(t) {
                        if (void 0 === t && (t = !0), !t && this.isShadow()) return !1;
                        for (let i = 0, s; s = this.inputList[i]; i++)
                            if (s.connection) {
                                var e = s.connection.targetBlock();
                                if (!e || !e.allInputsFilled(t)) return !1
                            } return !(e = this.getNextBlock()) || e.allInputsFilled(t)
                    }
                    toDevString() {
                        let t = this.type ? '"' + this.type + '" block' : "Block";
                        return this.id && (t += ' (id="' + this.id + '")'), t
                    }
                };
                cp.COLLAPSED_INPUT_NAME = h1, cp.COLLAPSED_FIELD_NAME = h2;
                var cg = class {
                        constructor() {
                            this.drawer = this.curNode = this.colour = null, this.type = "marker"
                        }
                        setDrawer(t) {
                            this.drawer = t
                        }
                        getDrawer() {
                            return this.drawer
                        }
                        getCurNode() {
                            return this.curNode
                        }
                        setCurNode(t) {
                            let e = this.curNode;
                            this.curNode = t, this.drawer && this.drawer.draw(e, this.curNode)
                        }
                        draw() {
                            this.drawer && this.drawer.draw(this.curNode, this.curNode)
                        }
                        hide() {
                            this.drawer && this.drawer.hide()
                        }
                        dispose() {
                            this.getDrawer() && this.getDrawer().dispose()
                        }
                    },
                    cb = class extends cg {
                        constructor() {
                            super(), this.type = "cursor"
                        }
                        next() {
                            var t = this.getCurNode();
                            if (!t) return null;
                            for (t = t.next(); t && t.next() && (t.getType() === hj.types.NEXT || t.getType() === hj.types.BLOCK);) t = t.next();
                            return t && this.setCurNode(t), t
                        } in () {
                            let t, e;
                            var i = this.getCurNode();
                            return i ? ((i.getType() === hj.types.PREVIOUS || i.getType() === hj.types.OUTPUT) && (i = i.next()), (i = null != (e = null == (t = i) ? void 0 : t.in()) ? e : null) && this.setCurNode(i), i) : null
                        }
                        prev() {
                            var t = this.getCurNode();
                            if (!t) return null;
                            for (t = t.prev(); t && t.prev() && (t.getType() === hj.types.NEXT || t.getType() === hj.types.BLOCK);) t = t.prev();
                            return t && this.setCurNode(t), t
                        }
                        out() {
                            var t = this.getCurNode();
                            return t ? ((t = t.out()) && t.getType() === hj.types.BLOCK && (t = t.prev() || t), t && this.setCurNode(t), t) : null
                        }
                    };
                d(c.CURSOR, h, cb);
                var c_ = class extends cb {
                    constructor() {
                        super()
                    }
                    next() {
                        var t = this.getCurNode();
                        return t ? ((t = this.getNextNode_(t, this.validNode_)) && this.setCurNode(t), t) : null
                    } in () {
                        return this.next()
                    }
                    prev() {
                        var t = this.getCurNode();
                        return t ? ((t = this.getPreviousNode_(t, this.validNode_)) && this.setCurNode(t), t) : null
                    }
                    out() {
                        return this.prev()
                    }
                    getNextNode_(t, e) {
                        if (!t) return null;
                        let i = t.in() || t.next();
                        return e(i) ? i : i ? this.getNextNode_(i, e) : e(t = this.findSiblingOrParent(t.out())) ? t : t ? this.getNextNode_(t, e) : null
                    }
                    getPreviousNode_(t, e) {
                        if (!t) return null;
                        let i = t.prev();
                        return e(i = i ? this.getRightMostChild(i) : t.out()) ? i : i ? this.getPreviousNode_(i, e) : null
                    }
                    validNode_(t) {
                        let e = !1;
                        return ((t = t && t.getType()) === hj.types.OUTPUT || t === hj.types.INPUT || t === hj.types.FIELD || t === hj.types.NEXT || t === hj.types.PREVIOUS || t === hj.types.WORKSPACE) && (e = !0), e
                    }
                    findSiblingOrParent(t) {
                        if (!t) return null;
                        let e = t.next();
                        return e || this.findSiblingOrParent(t.out())
                    }
                    getRightMostChild(t) {
                        if (!t.in()) return t;
                        for (t = t.in(); t && t.next();) t = t.next();
                        return this.getRightMostChild(t)
                    }
                };
                c_.registrationName = "basicCursor", d(c.CURSOR, c_.registrationName, c_);
                var cm = class extends c_ {
                        validNode_(t) {
                            let e = !1,
                                i = t && t.getType();
                            return t && (t = t.getLocation(), i === hj.types.FIELD && t && t.isTabNavigable() && t.isClickable() && (e = !0)), e
                        }
                    },
                    cf = class extends h0 {
                        constructor(t, e) {
                            super(t, e), this.targetConnection = this.highlightPath = null, this.db = t.workspace.connectionDBList[e], this.dbOpposite = t.workspace.connectionDBList[af[e]], this.offsetInBlock = new n3(0, 0), this.trackedState = cf.TrackedState.WILL_TRACK
                        }
                        dispose() {
                            super.dispose(), this.trackedState === cf.TrackedState.TRACKED && this.db.removeConnection(this, this.y), this.highlightPath && (tb(this.highlightPath), this.highlightPath = null)
                        }
                        getSourceBlock() {
                            return super.getSourceBlock()
                        }
                        targetBlock() {
                            return super.targetBlock()
                        }
                        distanceFrom(t) {
                            let e = this.x - t.x;
                            return Math.sqrt(e * e + (t = this.y - t.y) * t)
                        }
                        bumpAwayFrom(t) {
                            if (!this.sourceBlock_.workspace.isDragging()) {
                                var e = this.sourceBlock_.getRootBlock();
                                if (!e.isInFlyout) {
                                    var i = !1;
                                    if (!e.isMovable()) {
                                        if (!(e = t.getSourceBlock().getRootBlock()).isMovable()) return;
                                        t = this, i = !0
                                    }
                                    var s = I() == e;
                                    s || e.addSelect();
                                    var o = t.x + r.config$$module$build$src$core$config.snapRadius + Math.floor(10 * Math.random()) - this.x,
                                        n = t.y + r.config$$module$build$src$core$config.snapRadius + Math.floor(10 * Math.random()) - this.y;
                                    i && (n = -n), e.RTL && (o = t.x - r.config$$module$build$src$core$config.snapRadius - Math.floor(10 * Math.random()) - this.x), e.moveBy(o, n, ["bump"]), s || e.removeSelect()
                                }
                            }
                        }
                        moveTo(t, e) {
                            let i = !1;
                            return this.trackedState === cf.TrackedState.WILL_TRACK ? (this.db.addConnection(this, e), this.trackedState = cf.TrackedState.TRACKED, i = !0) : this.trackedState === cf.TrackedState.TRACKED && (this.db.removeConnection(this, this.y), this.db.addConnection(this, e), i = !0), this.x = t, this.y = e, i
                        }
                        moveBy(t, e) {
                            return this.moveTo(this.x + t, this.y + e)
                        }
                        moveToOffset(t) {
                            return this.moveTo(t.x + this.offsetInBlock.x, t.y + this.offsetInBlock.y)
                        }
                        setOffsetInBlock(t, e) {
                            this.offsetInBlock.x = t, this.offsetInBlock.y = e
                        }
                        getOffsetInBlock() {
                            return this.offsetInBlock
                        }
                        tightenEfficiently() {
                            var t = this.targetConnection;
                            let e = this.targetBlock();
                            t && e && (t = n3.difference(this.offsetInBlock, t.offsetInBlock), e.translate(t.x, t.y))
                        }
                        closest(t, e) {
                            return this.dbOpposite.searchForClosest(this, t, e)
                        }
                        highlight() {
                            if (!this.highlightPath) {
                                var t = this.sourceBlock_.workspace.getRenderer().getConstants(),
                                    e = t.shapeFor(this);
                                e = this.type === lx.INPUT_VALUE || this.type === lx.OUTPUT_VALUE ? sX(0, -(t = t.TAB_OFFSET_FROM_TOP)) + sJ("v", t) + e.pathDown + sJ("v", t) : sX(-(t = t.NOTCH_OFFSET_LEFT - t.CORNER_RADIUS), 0) + sJ("h", t) + e.pathLeft + sJ("h", t), t = this.offsetInBlock, this.highlightPath = tu(rp.PATH, {
                                    class: "blocklyHighlightedConnectionPath",
                                    d: e,
                                    transform: `translate(${t.x}, ${t.y})` + (this.sourceBlock_.RTL ? " scale(-1 1)" : "")
                                }, this.sourceBlock_.getSvgRoot())
                            }
                        }
                        unhighlight() {
                            this.highlightPath && (tb(this.highlightPath), this.highlightPath = null)
                        }
                        setTracking(t) {
                            t && this.trackedState === cf.TrackedState.TRACKED || !t && this.trackedState === cf.TrackedState.UNTRACKED || this.sourceBlock_.isInFlyout || (t ? (this.db.addConnection(this, this.y), this.trackedState = cf.TrackedState.TRACKED) : (this.trackedState === cf.TrackedState.TRACKED && this.db.removeConnection(this, this.y), this.trackedState = cf.TrackedState.UNTRACKED))
                        }
                        stopTrackingAll() {
                            if (this.setTracking(!1), this.targetConnection) {
                                let t = this.targetBlock().getDescendants(!1);
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e],
                                        s = i.getConnections_(!0);
                                    for (let t = 0; t < s.length; t++) s[t].setTracking(!1);
                                    for (let t of i.getIcons()) sp(t) && t.setBubbleVisible(!1)
                                }
                            }
                        }
                        startTrackingAll() {
                            this.setTracking(!0);
                            let t = [];
                            if (this.type !== lx.INPUT_VALUE && this.type !== lx.NEXT_STATEMENT) return t;
                            let e = this.targetBlock();
                            if (e) {
                                let i;
                                e.isCollapsed() ? (i = [], e.outputConnection && i.push(e.outputConnection), e.nextConnection && i.push(e.nextConnection), e.previousConnection && i.push(e.previousConnection)) : i = e.getConnections_(!0);
                                for (let e = 0; e < i.length; e++) t.push(...i[e].startTrackingAll());
                                t.length || (t = [e])
                            }
                            return t
                        }
                        onFailedConnect(t) {
                            let e = this.getSourceBlock();
                            if (P()) {
                                let i = r.getGroup$$module$build$src$core$events$utils();
                                setTimeout((function () {
                                    e.isDisposed() || e.getParent() || (r.setGroup$$module$build$src$core$events$utils(i), this.bumpAwayFrom(t), r.setGroup$$module$build$src$core$events$utils(!1))
                                }).bind(this), r.config$$module$build$src$core$config.bumpDelay)
                            }
                        }
                        disconnectInternal(t = !0) {
                            let {
                                parentConnection: e,
                                childConnection: i
                            } = this.getParentAndChildConnections();
                            if (e && i) {
                                var s = e.getSourceBlock(),
                                    o = i.getSourceBlock();
                                super.disconnectInternal(t), s.rendered && s.queueRender(), o.rendered && (o.updateDisabled(), o.queueRender(), o.getSvgRoot().style.display = "block")
                            }
                        }
                        respawnShadow_() {
                            super.respawnShadow_();
                            let t = this.targetBlock();
                            t && (t.initSvg(), t.queueRender())
                        }
                        neighbours(t) {
                            return this.dbOpposite.getNeighbours(this, t)
                        }
                        connect_(t) {
                            super.connect_(t);
                            var e = this.getSourceBlock();
                            t = t.getSourceBlock();
                            let i = e.rendered,
                                s = t.rendered;
                            i && e.updateDisabled(), s && t.updateDisabled(), i && s && (this.type === lx.NEXT_STATEMENT || this.type === lx.PREVIOUS_STATEMENT ? t.queueRender() : e.queueRender()), (e = e.getInputWithBlock(t)) && (e = e.isVisible(), t.getSvgRoot().style.display = e ? "block" : "none")
                        }
                        onCheckChanged_() {
                            !this.isConnected() || this.targetConnection && this.getConnectionChecker().canConnect(this, this.targetConnection, !1) || ((this.isSuperior() ? this.targetBlock() : this.sourceBlock_).unplug(), this.sourceBlock_.bumpNeighbours())
                        }
                        setCheck(t) {
                            return super.setCheck(t), this.sourceBlock_.rendered && this.sourceBlock_.queueRender(), this
                        }
                    };
                (c9 = (c9 = cf || (cf = {})).TrackedState || (c9.TrackedState = {}))[c9.WILL_TRACK = -1] = "WILL_TRACK", c9[c9.UNTRACKED = 0] = "UNTRACKED", c9[c9.TRACKED = 1] = "TRACKED";
                var cE = cf.TrackedState,
                    cT = {};
                cT.RenderedConnection = cf, cT.TrackedState = cE;
                var ck = class extends cp {
                    constructor(t, e, i) {
                        super(t, e, i), this.width = this.height = 0, this.warningTextDb = new Map, this.warning = this.mutator = null, this.eventsInit_ = this.renderIsInProgress_ = this.visuallyDisabled = this.rendered = !1, this.translation = "", this.bumpNeighboursPid = 0, this.dragging = !1, this.relativeCoords = new n3(0, 0), this.workspace = t, this.svgGroup_ = tu(rp.G, {}), this.style = t.getRenderer().getConstants().getBlockStyle(null), this.pathObject = t.getRenderer().makePathObject(this.svgGroup_, this.style), (t = this.pathObject.svgPath).tooltip = this, i7(t), this.svgGroup_.setAttribute("data-id", this.id), this.doInit_()
                    }
                    initSvg() {
                        if (!this.workspace.rendered) throw TypeError("Workspace is headless.");
                        for (let t = 0, e; e = this.inputList[t]; t++) e.init();
                        for (var t of this.getIcons()) t.initView(this.createIconPointerDownListener(t)), t.updateEditable();
                        this.applyColour(), this.pathObject.updateMovable(this.isMovable()), t = this.getSvgRoot(), this.workspace.options.readOnly || this.eventsInit_ || !t || tt(t, "pointerdown", this, this.onMouseDown_), this.eventsInit_ = !0, t.parentNode || this.workspace.getCanvas().appendChild(t)
                    }
                    getColourSecondary() {
                        return this.style.colourSecondary
                    }
                    getColourTertiary() {
                        return this.style.colourTertiary
                    }
                    select() {
                        if (this.isShadow() && this.getParent()) this.getParent().select();
                        else if (I() !== this) {
                            var t = null;
                            if (I()) {
                                t = I().id, r.disable$$module$build$src$core$events$utils();
                                try {
                                    I().unselect()
                                } finally {
                                    r.enable$$module$build$src$core$events$utils()
                                }
                            }
                            F(t = new(X(nd))(t, this.id, this.workspace.id)), S(this), this.addSelect()
                        }
                    }
                    unselect() {
                        if (I() === this) {
                            var t = new(X(nd))(this.id, null, this.workspace.id);
                            t.workspaceId = this.workspace.id, F(t), S(null), this.removeSelect()
                        }
                    }
                    setParent(t) {
                        let e = this.parentBlock_;
                        if (t !== e) {
                            tf(), super.setParent(t), tE();
                            var i = this.getSvgRoot();
                            if (!this.workspace.isClearing && i) {
                                var s = this.getRelativeToSurfaceXY();
                                t ? t.getSvgRoot().appendChild(i) : e && ((t = this.workspace.getCanvas().querySelector(".blocklyDragging")) ? this.workspace.getCanvas().insertBefore(i, t) : this.workspace.getCanvas().appendChild(i), this.translate(s.x, s.y)), this.applyColour()
                            }
                        }
                    }
                    getRelativeToSurfaceXY() {
                        let t = this.workspace.getLayerManager();
                        if (!t) throw Error("Cannot calculate position because the workspace has not been appended");
                        let e = 0,
                            i = 0,
                            s = this.getSvgRoot();
                        if (s)
                            do {
                                let t = tA(s);
                                e += t.x, i += t.y, s = s.parentNode
                            } while (s && !t.hasLayer(s));
                        return new n3(e, i)
                    }
                    moveBy(t, e, i) {
                        if (this.parentBlock_) throw Error("Block has parent");
                        let s = W(),
                            o = null;
                        s && (o = new(X(r.MOVE$$module$build$src$core$events$utils))(this), i && o.setReason(i)), t = new n3(t, e), e = this.getRelativeToSurfaceXY(), t = n3.sum(e, t), this.translate(t.x, t.y), this.updateComponentLocations(t), s && o && (o.recordNew(), F(o)), this.workspace.resizeContents()
                    }
                    translate(t, e) {
                        this.translation = `translate(${t}, ${e})`, this.relativeCoords = new n3(t, e), this.getSvgRoot().setAttribute("transform", this.getTranslation())
                    }
                    getTranslation() {
                        return this.translation
                    }
                    moveTo(t, e) {
                        let i = this.getRelativeToSurfaceXY();
                        this.moveBy(t.x - i.x, t.y - i.y, e)
                    }
                    moveDuringDrag(t) {
                        this.translate(t.x, t.y), this.getSvgRoot().setAttribute("transform", this.getTranslation()), this.updateComponentLocations(t)
                    }
                    snapToGrid() {
                        if (!(this.isDeadOrDying() || this.workspace.isDragging() || this.getParent() || this.isInFlyout)) {
                            var t = this.workspace.getGrid();
                            if (t && t.shouldSnap()) {
                                var e = t.getSpacing(),
                                    i = e / 2,
                                    s = this.getRelativeToSurfaceXY();
                                t = Math.round(Math.round((s.x - i) / e) * e + i - s.x), e = Math.round(Math.round((s.y - i) / e) * e + i - s.y), (t || e) && this.moveBy(t, e, ["snap"])
                            }
                        }
                    }
                    getBoundingRectangle() {
                        let t, e;
                        let i = this.getRelativeToSurfaceXY(),
                            s = this.getHeightWidth();
                        return this.RTL ? (t = i.x - s.width, e = i.x) : (t = i.x, e = i.x + s.width), new rg(i.y, i.y + s.height, t, e)
                    }
                    markDirty() {
                        this.pathObject.constants = this.workspace.getRenderer().getConstants();
                        for (let t = 0, e; e = this.inputList[t]; t++) e.markDirty()
                    }
                    setCollapsed(t) {
                        this.collapsed_ !== t && (super.setCollapsed(t), this.updateCollapsed_())
                    }
                    updateCollapsed_() {
                        var t = this.isCollapsed();
                        for (let e = 0, i; i = this.inputList[e]; e++) i.name !== h1 && i.setVisible(!t);
                        for (var e of this.getIcons()) e.updateCollapsed();
                        t ? (t = this.toString(30), (e = this.getField(h2)) ? e.setValue(t) : (this.getInput(h1) || this.appendDummyInput(h1)).appendField(new hF(t), h2)) : (this.updateDisabled(), this.removeInput(h1))
                    }
                    tab(t, e) {
                        let i = new cm;
                        i.setCurNode(hj.createFieldNode(t)), t = i.getCurNode(), e ? i.next() : i.prev(), (e = i.getCurNode()) && e !== t && (e.getLocation().showEditor(), this.workspace.keyboardAccessibilityMode && this.workspace.getCursor().setCurNode(e))
                    }
                    onMouseDown_(t) {
                        let e = this.workspace.getGesture(t);
                        e && e.handleBlockStart(t, this)
                    }
                    showHelp() {
                        let t = "function" == typeof this.helpUrl ? this.helpUrl() : this.helpUrl;
                        t && window.open(t)
                    }
                    generateContextMenu() {
                        if (this.workspace.options.readOnly || !this.contextMenu) return null;
                        let t = l1.registry.getContextMenuOptions(l1.ScopeType.BLOCK, {
                            block: this
                        });
                        return this.customContextMenu && this.customContextMenu(t), t
                    }
                    showContextMenu(t) {
                        let e = this.generateContextMenu();
                        e && e.length && (ig(t, e, this.RTL), ip(this))
                    }
                    updateComponentLocations(t) {
                        if (this.rendered)
                            for (let e of (this.dragging || this.updateConnectionLocations(t), this.updateIconLocations(t), this.updateFieldLocations(t), this.getChildren(!1))) e.updateComponentLocations(n3.sum(t, e.relativeCoords))
                    }
                    updateConnectionLocations(t) {
                        for (let e of this.getConnections_(!1)) e.moveToOffset(t)
                    }
                    updateIconLocations(t) {
                        for (let e of this.getIcons()) e.onLocationChange(t)
                    }
                    updateFieldLocations(t) {
                        for (let e of this.inputList)
                            for (let i of e.fieldRow) i.onLocationChange(t)
                    }
                    setDragging(t) {
                        (this.dragging = t) ? (this.translation = "", o9.push(...this.getConnections_(!0)), td(this.svgGroup_, "blocklyDragging")) : (o9.length = 0, tg(this.svgGroup_, "blocklyDragging"));
                        for (let e = 0; e < this.childBlocks_.length; e++) this.childBlocks_[e].setDragging(t)
                    }
                    setMovable(t) {
                        super.setMovable(t), this.pathObject.updateMovable(t)
                    }
                    setEditable(t) {
                        super.setEditable(t), t = this.getIcons();
                        for (let e = 0; e < t.length; e++) t[e].updateEditable()
                    }
                    setShadow(t) {
                        super.setShadow(t), this.applyColour()
                    }
                    setInsertionMarker(t) {
                        this.isInsertionMarker_ !== t && (this.isInsertionMarker_ = t) && (this.setColour(this.workspace.getRenderer().getConstants().INSERTION_MARKER_COLOUR), this.pathObject.updateInsertionMarker(!0))
                    }
                    getSvgRoot() {
                        return this.svgGroup_
                    }
                    dispose(t, e) {
                        this.isDeadOrDying() || (so(), iT(), e && this.rendered && (this.unplug(t), iY(this)), super.dispose(!!t), tb(this.svgGroup_))
                    }
                    disposeInternal() {
                        this.isDeadOrDying() || (super.disposeInternal(), this.rendered = !1, I() === this && (this.unselect(), this.workspace.cancelCurrentGesture()), [...this.warningTextDb.values()].forEach(t => clearTimeout(t)), this.warningTextDb.clear(), this.getIcons().forEach(t => t.dispose()))
                    }
                    checkAndDelete() {
                        this.workspace.isFlyout || (r.setGroup$$module$build$src$core$events$utils(!0), this.workspace.hideChaff(), this.outputConnection ? this.dispose(!1, !0) : this.dispose(!0, !0), r.setGroup$$module$build$src$core$events$utils(!1))
                    }
                    toCopyData() {
                        return this.isInsertionMarker_ ? null : {
                            paster: lm.TYPE,
                            blockState: eM(this, {
                                addCoordinates: !0,
                                addNextBlocks: !1
                            }),
                            typeCounts: N(this, !0)
                        }
                    }
                    applyColour() {
                        this.pathObject.applyColour(this);
                        let t = this.getIcons();
                        for (let e = 0; e < t.length; e++) t[e].applyColour();
                        for (let t = 0, e; e = this.inputList[t]; t++)
                            for (let t = 0, i; i = e.fieldRow[t]; t++) i.applyColour()
                    }
                    updateDisabled() {
                        let t = !this.isEnabled() || this.getInheritedDisabled();
                        if (this.visuallyDisabled === t) {
                            let t;
                            null == (t = this.getNextBlock()) || t.updateDisabled()
                        } else
                            for (let e of (this.applyColour(), this.visuallyDisabled = t, this.getChildren(!1))) e.updateDisabled()
                    }
                    getCommentIcon() {
                        let t;
                        return tc("getCommentIcon", "v10", "v11", "getIcon"), null != (t = this.getIcon(hh.TYPE)) ? t : null
                    }
                    setWarningText(t, e = "") {
                        if (e) this.warningTextDb.has(e) && (clearTimeout(this.warningTextDb.get(e)), this.warningTextDb.delete(e));
                        else {
                            for (var i of this.warningTextDb.values()) clearTimeout(i);
                            this.warningTextDb.clear()
                        }
                        if (this.workspace.isDragging()) this.warningTextDb.set(e, setTimeout(() => {
                            this.isDeadOrDying() || (this.warningTextDb.delete(e), this.setWarningText(t, e))
                        }, 100));
                        else if (this.isInFlyout && (t = null), i = this.getIcon(hc.TYPE), t) {
                            let s = this.getSurroundParent(),
                                o = null;
                            for (; s;) s.isCollapsed() && (o = s), s = s.getSurroundParent();
                            o && o.setWarningText(r.Msg$$module$build$src$core$msg.COLLAPSED_WARNINGS_WARNING, ck.COLLAPSED_WARNING_ID), i ? i.addMessage(t, e) : this.addIcon(new hc(this).addMessage(t, e))
                        } else i && (e ? (i.addMessage("", e), i.getText() || this.removeIcon(hc.TYPE)) : this.removeIcon(hc.TYPE))
                    }
                    setMutator(t) {
                        this.removeIcon(r.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE), t && this.addIcon(t)
                    }
                    addIcon(t) {
                        return super.addIcon(t), t instanceof hc && (this.warning = t), t instanceof r.MutatorIcon$$module$build$src$core$icons$mutator_icon && (this.mutator = t), this.rendered && (t.initView(this.createIconPointerDownListener(t)), t.applyColour(), t.updateEditable(), this.queueRender(), ea(), this.bumpNeighbours()), t
                    }
                    createIconPointerDownListener(t) {
                        return e => {
                            this.isDeadOrDying() || (e = this.workspace.getGesture(e)) && e.setStartIcon(t)
                        }
                    }
                    removeIcon(t) {
                        let e = super.removeIcon(t);
                        return t.equals(hc.TYPE) && (this.warning = null), t.equals(r.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE) && (this.mutator = null), this.rendered && (this.queueRender(), ea(), this.bumpNeighbours()), e
                    }
                    setEnabled(t) {
                        this.isEnabled() !== t && (super.setEnabled(t), this.rendered && !this.getInheritedDisabled() && this.updateDisabled())
                    }
                    setHighlighted(t) {
                        this.rendered && this.pathObject.updateHighlighted(t)
                    }
                    addSelect() {
                        this.pathObject.updateSelected(!0)
                    }
                    removeSelect() {
                        this.pathObject.updateSelected(!1)
                    }
                    setDeleteStyle(t) {
                        this.pathObject.updateDraggingDelete(t)
                    }
                    getColour() {
                        return this.style.colourPrimary
                    }
                    setColour(t) {
                        super.setColour(t), t = this.workspace.getRenderer().getConstants().getBlockStyleForColour(this.colour_), this.pathObject.setStyle(t.style), this.style = t.style, this.styleName_ = t.name, this.applyColour()
                    }
                    setStyle(t) {
                        let e = this.workspace.getRenderer().getConstants().getBlockStyle(t);
                        if (this.styleName_ = t, e) this.hat = e.hat, this.pathObject.setStyle(e), this.colour_ = e.colourPrimary, this.style = e, this.applyColour();
                        else throw Error("Invalid style name: " + t)
                    }
                    bringToFront(t = !1) {
                        let e = this;
                        if (!e.isDeadOrDying())
                            do {
                                let i = e.getSvgRoot(),
                                    s = i.parentNode,
                                    o = s.childNodes;
                                if (o[o.length - 1] !== i && s.appendChild(i), t) break;
                                e = e.getParent()
                            } while (e)
                    }
                    setPreviousStatement(t, e) {
                        super.setPreviousStatement(t, e), this.rendered && (this.queueRender(), this.bumpNeighbours())
                    }
                    setNextStatement(t, e) {
                        super.setNextStatement(t, e), this.rendered && (this.queueRender(), this.bumpNeighbours())
                    }
                    setOutput(t, e) {
                        super.setOutput(t, e), this.rendered && (this.queueRender(), this.bumpNeighbours())
                    }
                    setInputsInline(t) {
                        super.setInputsInline(t), this.rendered && (this.queueRender(), this.bumpNeighbours())
                    }
                    removeInput(t, e) {
                        return t = super.removeInput(t, e), this.rendered && (this.queueRender(), this.bumpNeighbours()), t
                    }
                    moveNumberedInputBefore(t, e) {
                        super.moveNumberedInputBefore(t, e), this.rendered && (this.queueRender(), this.bumpNeighbours())
                    }
                    appendInput(t) {
                        return super.appendInput(t), this.rendered && (this.queueRender(), this.bumpNeighbours()), t
                    }
                    setConnectionTracking(t) {
                        if (this.previousConnection && this.previousConnection.setTracking(t), this.outputConnection && this.outputConnection.setTracking(t), this.nextConnection) {
                            this.nextConnection.setTracking(t);
                            var e = this.nextConnection.targetBlock();
                            e && e.setConnectionTracking(t)
                        }
                        if (!this.collapsed_)
                            for (e = 0; e < this.inputList.length; e++) {
                                var i = this.inputList[e].connection;
                                i && (i.setTracking(t), (i = i.targetBlock()) && i.setConnectionTracking(t))
                            }
                    }
                    getConnections_(t) {
                        let e = [];
                        if ((t || this.rendered) && (this.outputConnection && e.push(this.outputConnection), this.previousConnection && e.push(this.previousConnection), this.nextConnection && e.push(this.nextConnection), t || !this.collapsed_))
                            for (let t = 0, i; i = this.inputList[t]; t++) i.connection && e.push(i.connection);
                        return e
                    }
                    lastConnectionInStack(t) {
                        return super.lastConnectionInStack(t)
                    }
                    getMatchingConnection(t, e) {
                        return super.getMatchingConnection(t, e)
                    }
                    makeConnection_(t) {
                        return new cf(this, t)
                    }
                    getNextBlock() {
                        return super.getNextBlock()
                    }
                    getPreviousBlock() {
                        return super.getPreviousBlock()
                    }
                    bumpNeighbours() {
                        if (!this.bumpNeighboursPid) {
                            var t = r.getGroup$$module$build$src$core$events$utils();
                            this.bumpNeighboursPid = setTimeout(() => {
                                let e = r.getGroup$$module$build$src$core$events$utils();
                                r.setGroup$$module$build$src$core$events$utils(t), this.getRootBlock().bumpNeighboursInternal(), r.setGroup$$module$build$src$core$events$utils(e), this.bumpNeighboursPid = 0
                            }, r.config$$module$build$src$core$config.bumpDelay)
                        }
                    }
                    bumpNeighboursInternal() {
                        let t = this.getRootBlock();
                        if (!(this.isDeadOrDying() || this.workspace.isDragging() || t.isInFlyout))
                            for (let e of this.getConnections_(!1)) {
                                if (e.isSuperior()) {
                                    let t;
                                    null == (t = e.targetBlock()) || t.bumpNeighboursInternal()
                                }
                                for (let i of e.neighbours(r.config$$module$build$src$core$config.snapRadius)) i.getSourceBlock().getRootBlock() !== t && (e.isConnected() && i.isConnected() || (e.isSuperior() ? i.bumpAwayFrom(e) : e.bumpAwayFrom(i)))
                            }
                    }
                    scheduleSnapAndBump() {
                        let t = r.getGroup$$module$build$src$core$events$utils();
                        setTimeout(() => {
                            r.setGroup$$module$build$src$core$events$utils(t), this.snapToGrid(), r.setGroup$$module$build$src$core$events$utils(!1)
                        }, r.config$$module$build$src$core$config.bumpDelay / 2), this.bumpNeighbours()
                    }
                    positionNearConnection(t, e, i) {
                        if (t.type === lx.NEXT_STATEMENT || t.type === lx.INPUT_VALUE) {
                            let s = e.x;
                            e = e.y, s += i.x - t.getOffsetInBlock().x, e += i.y - t.getOffsetInBlock().y, this.moveBy(s, e)
                        }
                    }
                    getChildren(t) {
                        return super.getChildren(t)
                    }
                    queueRender() {
                        return er(this)
                    }
                    render() {
                        this.queueRender(), ea()
                    }
                    renderEfficiently() {
                        this.rendered = !0, tf(), this.isCollapsed() && this.updateCollapsed_(), this.isEnabled() || this.updateDisabled(), this.workspace.getRenderer().render(this), this.tightenChildrenEfficiently(), tE(), this.updateMarkers_()
                    }
                    tightenChildrenEfficiently() {
                        for (let t of this.inputList) {
                            let e = t.connection;
                            e && e.tightenEfficiently()
                        }
                        this.nextConnection && this.nextConnection.tightenEfficiently()
                    }
                    updateMarkers_() {
                        for (let t of (this.workspace.keyboardAccessibilityMode && this.pathObject.cursorSvg && this.workspace.getCursor().draw(), this.workspace.keyboardAccessibilityMode && this.pathObject.markerSvg && this.workspace.getMarker(aU.LOCAL_MARKER).draw(), this.inputList))
                            for (let e of t.fieldRow) e.updateMarkers_()
                    }
                    setCursorSvg(t) {
                        this.pathObject.setCursorSvg(t)
                    }
                    setMarkerSvg(t) {
                        this.pathObject.setMarkerSvg(t)
                    }
                    getHeightWidth() {
                        let t = this.height,
                            e = this.width;
                        var i = this.getNextBlock();
                        if (i) {
                            i = i.getHeightWidth();
                            let s = this.workspace.getRenderer().getConstants().NOTCH_HEIGHT;
                            t += i.height - s, e = Math.max(e, i.width)
                        }
                        return {
                            height: t,
                            width: e
                        }
                    }
                    fadeForReplacement(t) {
                        this.pathObject.updateReplacementFade(t)
                    }
                    highlightShapeForInput(t, e) {
                        this.pathObject.updateShapeForInputHighlight(t, e)
                    }
                };
                ck.INLINE = -1, ck.COLLAPSED_WARNING_ID = "TEMP_COLLAPSED_WARNING_";
                var cw = class {
                        constructor() {}
                        onDragEnter(t) {}
                        onDragOver(t) {}
                        onDragExit(t) {}
                        onDrop(t) {}
                        getClientRect() {
                            return null
                        }
                        shouldPreventMove(t) {
                            return !1
                        }
                    },
                    cy = class extends cw {
                        constructor() {
                            super(), this.wouldDelete_ = !1
                        }
                        wouldDelete(t, e) {
                            return t instanceof ck ? (t = !t.getParent() && t.isDeletable(), this.updateWouldDelete_(t && !e)) : this.updateWouldDelete_(t.isDeletable()), this.wouldDelete_
                        }
                        updateWouldDelete_(t) {
                            this.wouldDelete_ = t
                        }
                    },
                    c$ = class extends cy {
                        constructor(t) {
                            super(), this.workspace = t, this.id = "trashcan", this.contents = [], this.flyout = null, this.isLidOpen = !1, this.minOpenness = 0, this.lidTask = this.svgLid = this.svgGroup = null, this.top = this.left = this.lidOpen = 0, this.initialized = !1, 0 >= this.workspace.options.maxTrashcanContents || (t = new aX({
                                scrollbars: !0,
                                parentWorkspace: this.workspace,
                                rtl: this.workspace.RTL,
                                oneBasedIndex: this.workspace.options.oneBasedIndex,
                                renderer: this.workspace.options.renderer,
                                rendererOverrides: this.workspace.options.rendererOverrides,
                                move: {
                                    scrollbars: !0
                                }
                            }), this.workspace.horizontalLayout ? (t.toolboxPosition = this.workspace.toolboxPosition === rA.TOP ? rA.BOTTOM : rA.TOP, this.flyout = new(T(c.FLYOUTS_HORIZONTAL_TOOLBOX, this.workspace.options, !0))(t)) : (t.toolboxPosition = this.workspace.toolboxPosition === rA.RIGHT ? rA.LEFT : rA.RIGHT, this.flyout = new(T(c.FLYOUTS_VERTICAL_TOOLBOX, this.workspace.options, !0))(t)), this.workspace.addChangeListener(this.onDelete.bind(this)))
                        }
                        createDom() {
                            let t;
                            this.svgGroup = tu(rp.G, {
                                class: "blocklyTrash"
                            });
                            let e = String(Math.random()).substring(2);
                            t = tu(rp.CLIPPATH, {
                                id: "blocklyTrashBodyClipPath" + e
                            }, this.svgGroup), tu(rp.RECT, {
                                width: cC,
                                height: cv,
                                y: cI
                            }, t);
                            let i = tu(rp.IMAGE, {
                                width: rB.width,
                                x: -cA,
                                height: rB.height,
                                y: -cN,
                                "clip-path": "url(#blocklyTrashBodyClipPath" + e + ")"
                            }, this.svgGroup);
                            return i.setAttributeNS(ra, "xlink:href", this.workspace.options.pathToMedia + rB.url), t = tu(rp.CLIPPATH, {
                                id: "blocklyTrashLidClipPath" + e
                            }, this.svgGroup), tu(rp.RECT, {
                                width: cC,
                                height: cI
                            }, t), this.svgLid = tu(rp.IMAGE, {
                                width: rB.width,
                                x: -cA,
                                height: rB.height,
                                y: -cN,
                                "clip-path": "url(#blocklyTrashLidClipPath" + e + ")"
                            }, this.svgGroup), this.svgLid.setAttributeNS(ra, "xlink:href", this.workspace.options.pathToMedia + rB.url), te(this.svgGroup, "pointerdown", this, this.blockMouseDownWhenOpenable), te(this.svgGroup, "pointerup", this, this.click), te(i, "pointerover", this, this.mouseOver), te(i, "pointerout", this, this.mouseOut), this.animateLid(), this.svgGroup
                        }
                        init() {
                            0 < this.workspace.options.maxTrashcanContents && (t_(this.flyout.createDom(rp.SVG), this.workspace.getParentSvg()), this.flyout.init(this.workspace)), this.workspace.getComponentManager().addComponent({
                                component: this,
                                weight: 1,
                                capabilities: [nQ.Capability.AUTOHIDEABLE, nQ.Capability.DELETE_AREA, nQ.Capability.DRAG_TARGET, nQ.Capability.POSITIONABLE]
                            }), this.initialized = !0, this.setLidOpen(!1)
                        }
                        dispose() {
                            this.workspace.getComponentManager().removeComponent("trashcan"), this.svgGroup && tb(this.svgGroup), this.lidTask && clearTimeout(this.lidTask)
                        }
                        hasContents() {
                            return !!this.contents.length
                        }
                        contentsIsOpen() {
                            return !!this.flyout && this.flyout.isVisible()
                        }
                        openFlyout() {
                            if (!this.contentsIsOpen()) {
                                var t = this.contents.map(function (t) {
                                        return JSON.parse(t)
                                    }),
                                    e = this.workspace.getParentSvg().style;
                                e.cursor = "wait", setTimeout(() => {
                                    let i, s;
                                    null == (i = this.flyout) || i.show(t), e.cursor = "", null == (s = this.workspace.scrollbar) || s.setVisible(!1)
                                }, 10), this.fireUiEvent(!0)
                            }
                        }
                        closeFlyout() {
                            if (this.contentsIsOpen()) {
                                var t, e;
                                null == (t = this.flyout) || t.hide(), null == (e = this.workspace.scrollbar) || e.setVisible(!0), this.fireUiEvent(!1), this.workspace.recordDragTargets()
                            }
                        }
                        autoHide(t) {
                            !t && this.flyout && this.closeFlyout()
                        }
                        emptyContents() {
                            this.hasContents() && (this.contents.length = 0, this.setMinOpenness(0), this.closeFlyout())
                        }
                        position(t, e) {
                            if (this.initialized) {
                                var i, s = tY(this.workspace, t);
                                e = tK(t = tX(s, new rb(cC, cv + cI), cR, cS, t, this.workspace), cS, s.vertical === lR.TOP ? lA.DOWN : lA.UP, e), this.top = e.top, this.left = e.left, null == (i = this.svgGroup) || i.setAttribute("transform", "translate(" + this.left + "," + this.top + ")")
                            }
                        }
                        getBoundingRectangle() {
                            return new rg(this.top, this.top + cv + cI, this.left, this.left + cC)
                        }
                        getClientRect() {
                            if (!this.svgGroup) return null;
                            var t = this.svgGroup.getBoundingClientRect();
                            let e = t.top + cN - cD;
                            return t = t.left + cA - cD, new rg(e, e + cI + cv + 2 * cD, t, t + cC + 2 * cD)
                        }
                        onDragOver(t) {
                            this.setLidOpen(this.wouldDelete_)
                        }
                        onDragExit(t) {
                            this.setLidOpen(!1)
                        }
                        onDrop(t) {
                            setTimeout(this.setLidOpen.bind(this, !1), 100)
                        }
                        setLidOpen(t) {
                            this.isLidOpen !== t && (this.lidTask && clearTimeout(this.lidTask), this.isLidOpen = t, this.animateLid())
                        }
                        animateLid() {
                            var t = 1 / (cL + 1);
                            this.lidOpen += this.isLidOpen ? t : -t, this.lidOpen = Math.min(Math.max(this.lidOpen, this.minOpenness), 1), this.setLidAngle(this.lidOpen * cP), t = cM + this.lidOpen * (cB - cM), this.svgGroup && (this.svgGroup.style.opacity = `${t}`), this.lidOpen > this.minOpenness && 1 > this.lidOpen && (this.lidTask = setTimeout(this.animateLid.bind(this), cx / cL))
                        }
                        setLidAngle(t) {
                            let e;
                            let i = this.workspace.toolboxPosition === rA.RIGHT || this.workspace.horizontalLayout && this.workspace.RTL;
                            null == (e = this.svgLid) || e.setAttribute("transform", "rotate(" + (i ? -t : t) + "," + (i ? 4 : cC - 4) + "," + (cI - 2) + ")")
                        }
                        setMinOpenness(t) {
                            this.minOpenness = t, this.isLidOpen || this.setLidAngle(t * cP)
                        }
                        closeLid() {
                            this.setLidOpen(!1)
                        }
                        click() {
                            this.hasContents() && !this.workspace.isDragging() && this.openFlyout()
                        }
                        fireUiEvent(t) {
                            F(t = new(X(n_))(t, this.workspace.id))
                        }
                        blockMouseDownWhenOpenable(t) {
                            !this.contentsIsOpen() && this.hasContents() && t.stopPropagation()
                        }
                        mouseOver() {
                            this.hasContents() && this.setLidOpen(!0)
                        }
                        mouseOut() {
                            this.setLidOpen(!1)
                        }
                        onDelete(t) {
                            if (!(0 >= this.workspace.options.maxTrashcanContents || t.type !== r.DELETE$$module$build$src$core$events$utils || t.type !== r.DELETE$$module$build$src$core$events$utils || t.wasShadow)) {
                                if (!t.oldJson) throw Error("Encountered a delete event without proper oldJson");
                                if (t = JSON.stringify(this.cleanBlockJson(t.oldJson)), -1 === this.contents.indexOf(t)) {
                                    for (this.contents.unshift(t); this.contents.length > this.workspace.options.maxTrashcanContents;) this.contents.pop();
                                    this.setMinOpenness(cO)
                                }
                            }
                        }
                        cleanBlockJson(t) {
                            return function t(e) {
                                if (e) {
                                    if (delete e.id, delete e.x, delete e.y, delete e.enabled, e.icons && e.icons.comment) {
                                        var i = e.icons.comment;
                                        delete i.height, delete i.width, delete i.pinned
                                    }
                                    for (var s in i = e.inputs) {
                                        var o = i[s];
                                        let e = o.block;
                                        o = o.shadow, e && t(e), o && t(o)
                                    }
                                    e.next && (e = (s = e.next).block, s = s.shadow, e && t(e), s && t(s))
                                }
                            }(t = JSON.parse(JSON.stringify(t))), Object.assign({}, {
                                kind: "BLOCK"
                            }, t)
                        }
                    },
                    cC = 47,
                    cv = 44,
                    cI = 16,
                    cS = 20,
                    cR = 20,
                    cD = 10,
                    cA = 0,
                    cN = 32,
                    cO = .1,
                    cx = 80,
                    cL = 4,
                    cM = .4,
                    cB = .8,
                    cP = 45,
                    cF = class {
                        constructor() {
                            this.shortcuts = new Map, this.keyMap = new Map, this.reset()
                        }
                        reset() {
                            this.shortcuts.clear(), this.keyMap.clear()
                        }
                        register(t, e) {
                            if (this.shortcuts.get(t.name) && !e) throw Error(`Shortcut named "${t.name}" already exists.`);
                            if (this.shortcuts.set(t.name, t), (e = t.keyCodes) && 0 < e.length)
                                for (let i = 0; i < e.length; i++) this.addKeyMapping(e[i], t.name, !!t.allowCollision)
                        }
                        unregister(t) {
                            return this.shortcuts.get(t) ? (this.removeAllKeyMappings(t), this.shortcuts.delete(t), !0) : (console.warn(`Keyboard shortcut named "${t}" not found.`), !1)
                        }
                        addKeyMapping(t, e, i) {
                            t = `${t}`;
                            let s = this.keyMap.get(t);
                            if (s && !i) throw Error(`Shortcut named "${e}" collides with shortcuts "${s}"`);
                            s && i ? s.unshift(e) : this.keyMap.set(t, [e])
                        }
                        removeKeyMapping(t, e, i) {
                            let s = this.keyMap.get(t);
                            if (!s) return i || console.warn(`No keyboard shortcut named "${e}" registered with key code "${t}"`), !1;
                            let o = s.indexOf(e);
                            return -1 < o ? (s.splice(o, 1), 0 === s.length && this.keyMap.delete(t), !0) : (i || console.warn(`No keyboard shortcut named "${e}" registered with key code "${t}"`), !1)
                        }
                        removeAllKeyMappings(t) {
                            for (let e of this.keyMap.keys()) this.removeKeyMapping(e, t, !0)
                        }
                        setKeyMap(t) {
                            for (let e in this.keyMap.clear(), t) this.keyMap.set(e, t[e])
                        }
                        getKeyMap() {
                            let t = Object.create(null);
                            for (let [e, i] of this.keyMap) t[e] = i;
                            return t
                        }
                        getRegistry() {
                            let t = Object.create(null);
                            for (let [e, i] of this.shortcuts) t[e] = i;
                            return sd(Object.create(null), t)
                        }
                        onKeyDown(t, e) {
                            var i = this.serializeKeyEvent_(e);
                            if (!(i = this.getShortcutNamesByKeyCode(i))) return !1;
                            for (let s = 0, o; o = i[s]; s++) {
                                let i = this.shortcuts.get(o);
                                if ((null == i || !i.preconditionFn || (null == i ? 0 : i.preconditionFn(t))) && (null == i ? 0 : i.callback) && (null == i ? 0 : i.callback(t, e, i))) return !0
                            }
                            return !1
                        }
                        getShortcutNamesByKeyCode(t) {
                            return this.keyMap.get(t) || []
                        }
                        getKeyCodesByShortcutName(t) {
                            let e = [];
                            for (let [i, s] of this.keyMap) - 1 < s.indexOf(t) && e.push(i);
                            return e
                        }
                        serializeKeyEvent_(t) {
                            let e = "";
                            for (let i in cF.modifierKeys) t.getModifierState(i) && ("" !== e && (e += "+"), e += i);
                            return "" !== e && t.keyCode ? e = e + "+" + t.keyCode : t.keyCode && (e = String(t.keyCode)), e
                        }
                        checkModifiers_(t) {
                            for (let e = 0, i; i = t[e]; e++)
                                if (!(i in cF.modifierKeys)) throw Error(i + " is not a valid modifier key.")
                        }
                        createSerializedKey(t, e) {
                            let i = "";
                            if (e)
                                for (let t in this.checkModifiers_(e), cF.modifierKeys) - 1 < e.indexOf(cF.modifierKeys[t]) && ("" !== i && (i += "+"), i += t);
                            return "" !== i && t ? i = i + "+" + t : t && (i = `${t}`), i
                        }
                    };
                cF.registry = new cF, (c8 = (c8 = cF || (cF = {})).modifierKeys || (c8.modifierKeys = {}))[c8.Shift = 16] = "Shift", c8[c8.Control = 17] = "Control", c8[c8.Alt = 18] = "Alt", c8[c8.Meta = 91] = "Meta", (c4 = c7 || (c7 = {})).ESCAPE = "escape", c4.DELETE = "delete", c4.COPY = "copy", c4.CUT = "cut", c4.PASTE = "paste", c4.UNDO = "undo", c4.REDO = "redo";
                var cH = null,
                    cG = null; of ();
                var cU = {};
                cU.names = c7, cU.registerCopy = op, cU.registerCut = og, cU.registerDefaultShortcuts = of , cU.registerDelete = od, cU.registerEscape = ou, cU.registerPaste = ob, cU.registerRedo = om, cU.registerUndo = o_;
                var cW = class {
                        constructor(t, e) {
                            this.procedureModelClass = t, this.parameterModelClass = e, this.priority = 75
                        }
                        save(t) {
                            return (t = t.getProcedureMap().getProcedures().map(t => oE(t))).length ? t : null
                        }
                        load(t, e) {
                            let i = e.getProcedureMap();
                            for (let s of t) i.add(ok(this.procedureModelClass, this.parameterModelClass, s, e))
                        }
                        clear(t) {
                            t.getProcedureMap().clear()
                        }
                    },
                    cV = {};
                cV.ProcedureSerializer = cW, cV.loadParameter = ow, cV.loadProcedure = ok, cV.saveParameter = oT, cV.saveProcedure = oE;
                var cz = class {
                    constructor() {
                        this.priority = 100
                    }
                    save(t) {
                        let e = [];
                        for (let i of t.getAllVariables()) t = {
                            name: i.name,
                            id: i.getId()
                        }, i.type && (t.type = i.type), e.push(t);
                        return e.length ? e : null
                    }
                    load(t, e) {
                        for (let i of t) e.createVariable(i.name, i.type, i.id)
                    }
                    clear(t) {
                        t.getVariableMap().clear()
                    }
                };
                eL("variables", new cz);
                var cX = {};
                cX.VariableSerializer = cz;
                var cY = {};
                cY.load = function (t, e, {
                    recordUndo: i = !1
                } = {}) {
                    var s = E(c.SERIALIZER, !0);
                    if (s) {
                        s = Object.entries(s).sort((t, e) => e[1].priority - t[1].priority);
                        var o = P();
                        for (let [, t] of (B(i), (i = r.getGroup$$module$build$src$core$events$utils()) || r.setGroup$$module$build$src$core$events$utils(!0), tf(), e instanceof ch && e.setResizesEnabled(!1), s.reverse())) null == t || t.clear(e);
                        for (let [i, o] of s.reverse()) t[i] && (null == o || o.load(t[i], e));
                        e instanceof ch && e.setResizesEnabled(!0), tE(), F(new(X(n$))(e)), r.setGroup$$module$build$src$core$events$utils(i), B(o)
                    }
                }, cY.save = function (t) {
                    let e = Object.create(null),
                        i = E(c.SERIALIZER, !0);
                    for (let s in i) {
                        let o;
                        let n = null == (o = i[s]) ? void 0 : o.save(t);
                        n && (e[s] = n)
                    }
                    return e
                };
                var cK = class {
                        constructor(t, e, i, s, o) {
                            this.workspace = t, this.oldHostMetrics_ = this.corner_ = this.vScroll = this.hScroll = null, e = void 0 === e || e, i = void 0 === i || i;
                            let n = e && i;
                            e && (this.hScroll = new rk(t, !0, n, s, o)), i && (this.vScroll = new rk(t, !1, n, s, o)), n && (this.corner_ = tu(rp.RECT, {
                                height: rk.scrollbarThickness,
                                width: rk.scrollbarThickness,
                                class: "blocklyScrollbarBackground"
                            }), t_(this.corner_, t.getBubbleCanvas()))
                        }
                        dispose() {
                            tb(this.corner_), this.oldHostMetrics_ = this.corner_ = null, this.hScroll && (this.hScroll.dispose(), this.hScroll = null), this.vScroll && (this.vScroll.dispose(), this.vScroll = null)
                        }
                        resize() {
                            let t = this.workspace.getMetrics();
                            if (t) {
                                var e = !1,
                                    i = !1;
                                if (this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth === t.viewWidth && this.oldHostMetrics_.viewHeight === t.viewHeight && this.oldHostMetrics_.absoluteTop === t.absoluteTop && this.oldHostMetrics_.absoluteLeft === t.absoluteLeft ? (this.oldHostMetrics_ && this.oldHostMetrics_.scrollWidth === t.scrollWidth && this.oldHostMetrics_.viewLeft === t.viewLeft && this.oldHostMetrics_.scrollLeft === t.scrollLeft || (e = !0), this.oldHostMetrics_ && this.oldHostMetrics_.scrollHeight === t.scrollHeight && this.oldHostMetrics_.viewTop === t.viewTop && this.oldHostMetrics_.scrollTop === t.scrollTop || (i = !0)) : i = e = !0, e || i) {
                                    try {
                                        r.disable$$module$build$src$core$events$utils(), this.hScroll && e && this.hScroll.resize(t), this.vScroll && i && this.vScroll.resize(t)
                                    } finally {
                                        r.enable$$module$build$src$core$events$utils()
                                    }
                                    this.workspace.maybeFireViewportChangeEvent()
                                }
                                if (this.hScroll && this.vScroll) {
                                    if (!this.oldHostMetrics_ || this.oldHostMetrics_.viewWidth !== t.viewWidth || this.oldHostMetrics_.absoluteLeft !== t.absoluteLeft) {
                                        let t;
                                        null == (t = this.corner_) || t.setAttribute("x", String(this.vScroll.position.x))
                                    }
                                    if (!this.oldHostMetrics_ || this.oldHostMetrics_.viewHeight !== t.viewHeight || this.oldHostMetrics_.absoluteTop !== t.absoluteTop) {
                                        let t;
                                        null == (t = this.corner_) || t.setAttribute("y", String(this.hScroll.position.y))
                                    }
                                }
                                this.oldHostMetrics_ = t
                            }
                        }
                        canScrollHorizontally() {
                            return !!this.hScroll
                        }
                        canScrollVertically() {
                            return !!this.vScroll
                        }
                        setOrigin(t, e) {
                            this.hScroll && this.hScroll.setOrigin(t, e), this.vScroll && this.vScroll.setOrigin(t, e)
                        }
                        set(t, e, i) {
                            this.hScroll && this.hScroll.set(t, !1), this.vScroll && this.vScroll.set(e, !1), (i || void 0 === i) && (t = {}, this.hScroll && (t.x = this.hScroll.getRatio_()), this.vScroll && (t.y = this.vScroll.getRatio_()), this.workspace.setMetrics(t))
                        }
                        setX(t) {
                            this.hScroll && this.hScroll.set(t, !0)
                        }
                        setY(t) {
                            this.vScroll && this.vScroll.set(t, !0)
                        }
                        setContainerVisible(t) {
                            this.hScroll && this.hScroll.setContainerVisible(t), this.vScroll && this.vScroll.setContainerVisible(t)
                        }
                        isVisible() {
                            let t = !1;
                            return this.hScroll && (t = this.hScroll.isVisible()), this.vScroll && (t = t || this.vScroll.isVisible()), t
                        }
                        setVisible(t) {
                            this.hScroll && this.hScroll.setVisibleInternal(t), this.vScroll && this.vScroll.setVisibleInternal(t)
                        }
                        resizeContent(t) {
                            this.hScroll && this.hScroll.resizeContentHorizontal(t), this.vScroll && this.vScroll.resizeContentVertical(t)
                        }
                        resizeView(t) {
                            this.hScroll && this.hScroll.resizeViewHorizontal(t), this.vScroll && this.vScroll.resizeViewVertical(t)
                        }
                    },
                    cJ = class {
                        constructor(t) {
                            this.workspace_ = t
                        }
                        getDimensionsPx_(t) {
                            let e = 0,
                                i = 0;
                            return t && (e = t.getWidth(), i = t.getHeight()), new rb(e, i)
                        }
                        getFlyoutMetrics(t) {
                            return {
                                width: (t = this.getDimensionsPx_(this.workspace_.getFlyout(t))).width,
                                height: t.height,
                                position: this.workspace_.toolboxPosition
                            }
                        }
                        getToolboxMetrics() {
                            let t = this.getDimensionsPx_(this.workspace_.getToolbox());
                            return {
                                width: t.width,
                                height: t.height,
                                position: this.workspace_.toolboxPosition
                            }
                        }
                        getSvgMetrics() {
                            return this.workspace_.getCachedParentSvgSize()
                        }
                        getAbsoluteMetrics() {
                            var t;
                            let e = 0,
                                i = 0,
                                s = this.getToolboxMetrics(),
                                o = this.getFlyoutMetrics(),
                                n = !!this.workspace_.getToolbox(),
                                r = !(null == (t = this.workspace_.getFlyout()) ? 0 : t.autoClose);
                            t = n ? s.position : o.position;
                            let l = t === rA.TOP;
                            return t === rA.LEFT && (n && (e += s.width), r && (e += o.width)), l && (n && (i += s.height), r && (i += o.height)), {
                                top: i,
                                left: e
                            }
                        }
                        getViewMetrics(t) {
                            var e;
                            t = t ? this.workspace_.scale : 1;
                            let i = this.getSvgMetrics(),
                                s = this.getToolboxMetrics(),
                                o = this.getFlyoutMetrics(),
                                n = !!this.workspace_.getToolbox(),
                                r = !(null == (e = this.workspace_.getFlyout()) ? 0 : e.autoClose);
                            e = n ? s.position : o.position;
                            let l = e === rA.LEFT || e === rA.RIGHT;
                            return (e === rA.TOP || e === rA.BOTTOM) && (n && (i.height -= s.height), r && (i.height -= o.height)), l && (n && (i.width -= s.width), r && (i.width -= o.width)), {
                                height: i.height / t,
                                width: i.width / t,
                                top: -this.workspace_.scrollY / t,
                                left: -this.workspace_.scrollX / t
                            }
                        }
                        getContentMetrics(t) {
                            t = t ? 1 : this.workspace_.scale;
                            let e = this.workspace_.getBlocksBoundingBox();
                            return {
                                height: (e.bottom - e.top) * t,
                                width: (e.right - e.left) * t,
                                top: e.top * t,
                                left: e.left * t
                            }
                        }
                        hasFixedEdges() {
                            return !this.workspace_.isMovableHorizontally() || !this.workspace_.isMovableVertically()
                        }
                        getComputedFixedEdges_(t) {
                            if (!this.hasFixedEdges()) return {};
                            let e = this.workspace_.isMovableHorizontally(),
                                i = this.workspace_.isMovableVertically();
                            t = t || this.getViewMetrics(!1);
                            let s = {};
                            return i || (s.top = t.top, s.bottom = t.top + t.height), e || (s.left = t.left, s.right = t.left + t.width), s
                        }
                        getPaddedContent_(t, e) {
                            let i = e.top + e.height,
                                s = e.left + e.width,
                                o = t.width;
                            t = t.height;
                            let n = o / 2,
                                r = t / 2;
                            return {
                                top: Math.min(e.top - r, i - t),
                                bottom: Math.max(i + r, e.top + t),
                                left: Math.min(e.left - n, s - o),
                                right: Math.max(s + n, e.left + o)
                            }
                        }
                        getScrollMetrics(t, e, i) {
                            t = t ? this.workspace_.scale : 1, e = e || this.getViewMetrics(!1);
                            var s = i || this.getContentMetrics();
                            i = this.getComputedFixedEdges_(e), e = this.getPaddedContent_(e, s), s = void 0 !== i.top ? i.top : e.top;
                            let o = void 0 !== i.left ? i.left : e.left;
                            return {
                                top: s / t,
                                left: o / t,
                                width: ((void 0 !== i.right ? i.right : e.right) - o) / t,
                                height: ((void 0 !== i.bottom ? i.bottom : e.bottom) - s) / t
                            }
                        }
                        getUiMetrics() {
                            return {
                                viewMetrics: this.getViewMetrics(),
                                absoluteMetrics: this.getAbsoluteMetrics(),
                                toolboxMetrics: this.getToolboxMetrics()
                            }
                        }
                        getMetrics() {
                            let t = this.getToolboxMetrics(),
                                e = this.getFlyoutMetrics(!0),
                                i = this.getSvgMetrics(),
                                s = this.getAbsoluteMetrics(),
                                o = this.getViewMetrics(),
                                n = this.getContentMetrics(),
                                r = this.getScrollMetrics(!1, o, n);
                            return {
                                contentHeight: n.height,
                                contentWidth: n.width,
                                contentTop: n.top,
                                contentLeft: n.left,
                                scrollHeight: r.height,
                                scrollWidth: r.width,
                                scrollTop: r.top,
                                scrollLeft: r.left,
                                viewHeight: o.height,
                                viewWidth: o.width,
                                viewTop: o.top,
                                viewLeft: o.left,
                                absoluteTop: s.top,
                                absoluteLeft: s.left,
                                svgHeight: i.height,
                                svgWidth: i.width,
                                toolboxWidth: t.width,
                                toolboxHeight: t.height,
                                toolboxPosition: t.position,
                                flyoutWidth: e.width,
                                flyoutHeight: e.height
                            }
                        }
                    };
                d(c.METRICS_MANAGER, h, cJ);
                var cj = class extends nD {
                    constructor(t) {
                        super(), this.isBlank = !0, this.recordUndo = !1, this.type = n$, this.isBlank = !!t, t && (this.workspaceId = t.id)
                    }
                };
                d(c.EVENT, n$, cj);
                var cZ = class extends nA {
                    constructor(t, e, i) {
                        super(t ? t.workspace.id : void 0), this.type = nu, t && (this.blockId = t.id, this.isStart = e, this.blocks = i)
                    }
                    toJson() {
                        let t = super.toJson();
                        if (void 0 === this.isStart) throw Error("Whether this event is the start of a drag is undefined. Either pass the value to the constructor, or call fromJson");
                        if (void 0 === this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
                        return t.isStart = this.isStart, t.blockId = this.blockId, t.blocks = this.blocks, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new cZ)).isStart = t.isStart, e.blockId = t.blockId, e.blocks = t.blocks, e
                    }
                };
                d(c.EVENT, nu, cZ);
                var cq = {};
                cq.bumpIntoBounds = oy, cq.bumpIntoBoundsHandler = o$, cq.bumpTopObjectsIntoBounds = ov;
                var cQ = class {
                    constructor(t, e) {
                        this.dragTarget_ = null, this.wouldDeleteBlock_ = !1, this.dragIconData_ = [], this.draggingBlock_ = t, this.draggedConnectionManager_ = new h5(this.draggingBlock_), this.workspace_ = e, this.startXY_ = this.draggingBlock_.getRelativeToSurfaceXY(), this.dragIconData_ = oI(t, this.startXY_)
                    }
                    dispose() {
                        this.dragIconData_.length = 0, this.draggedConnectionManager_ && this.draggedConnectionManager_.dispose()
                    }
                    startDrag(t, e) {
                        let i;
                        r.getGroup$$module$build$src$core$events$utils() || r.setGroup$$module$build$src$core$events$utils(!0), this.fireDragStartEvent_(), this.draggingBlock_.bringToFront(!0), tf(), this.workspace_.setResizesEnabled(!1), iq(), this.shouldDisconnect_(e) && this.disconnectBlock_(e, t), this.draggingBlock_.setDragging(!0), null == (i = this.workspace_.getLayerManager()) || i.moveToDragLayer(this.draggingBlock_)
                    }
                    shouldDisconnect_(t) {
                        return !!(this.draggingBlock_.getParent() || t && this.draggingBlock_.nextConnection && this.draggingBlock_.nextConnection.targetBlock())
                    }
                    disconnectBlock_(t, e) {
                        this.draggingBlock_.unplug(t), t = this.pixelsToWorkspaceUnits_(e), t = n3.sum(this.startXY_, t), this.draggingBlock_.translate(t.x, t.y), ij(this.draggingBlock_), this.draggedConnectionManager_.updateAvailableConnections()
                    }
                    fireDragStartEvent_() {
                        let t = new(X(nu))(this.draggingBlock_, !0, this.draggingBlock_.getDescendants(!1));
                        F(t)
                    }
                    drag(t, e) {
                        e = this.pixelsToWorkspaceUnits_(e);
                        var i = n3.sum(this.startXY_, e);
                        this.draggingBlock_.moveDuringDrag(i), i = this.dragTarget_, this.dragTarget_ = this.workspace_.getDragTarget(t), this.draggedConnectionManager_.update(e, this.dragTarget_), t = this.wouldDeleteBlock_, this.wouldDeleteBlock_ = this.draggedConnectionManager_.wouldDeleteBlock, t !== this.wouldDeleteBlock_ && this.updateCursorDuringBlockDrag_(), this.dragTarget_ !== i && (i && i.onDragExit(this.draggingBlock_), this.dragTarget_ && this.dragTarget_.onDragEnter(this.draggingBlock_)), this.dragTarget_ && this.dragTarget_.onDragOver(this.draggingBlock_)
                    }
                    endDrag(t, e) {
                        if (this.drag(t, e), this.fireDragEndEvent_(), tE(), iq(), t = null, this.dragTarget_ && this.dragTarget_.shouldPreventMove(this.draggingBlock_) || (t = this.getNewLocationAfterDrag_(e).delta), this.dragTarget_ && this.dragTarget_.onDrop(this.draggingBlock_), !this.maybeDeleteBlock_()) {
                            let e;
                            null == (e = this.workspace_.getLayerManager()) || e.moveOffDragLayer(this.draggingBlock_, 50), this.draggingBlock_.setDragging(!1), t ? this.updateBlockAfterMove_() : oy(this.draggingBlock_.workspace, this.workspace_.getMetricsManager().getScrollMetrics(!0), this.draggingBlock_)
                        }
                        this.workspace_.setResizesEnabled(!0), r.setGroup$$module$build$src$core$events$utils(!1)
                    }
                    getNewLocationAfterDrag_(t) {
                        t = this.pixelsToWorkspaceUnits_(t);
                        let e = n3.sum(this.startXY_, t);
                        return {
                            delta: t,
                            newLocation: e
                        }
                    }
                    maybeDeleteBlock_() {
                        return !!this.wouldDeleteBlock_ && (this.fireMoveEvent_(), this.draggingBlock_.dispose(!1, !0), o9.length = 0, !0)
                    }
                    updateBlockAfterMove_() {
                        this.fireMoveEvent_(), this.draggedConnectionManager_.wouldConnectBlock() ? this.draggedConnectionManager_.applyConnections() : this.draggingBlock_.queueRender(), this.draggingBlock_.scheduleSnapAndBump()
                    }
                    fireDragEndEvent_() {
                        let t = new(X(nu))(this.draggingBlock_, !1, this.draggingBlock_.getDescendants(!1));
                        F(t)
                    }
                    updateToolboxStyle_(t) {
                        let e = this.workspace_.getToolbox();
                        if (e) {
                            let i = this.draggingBlock_.isDeletable() ? "blocklyToolboxDelete" : "blocklyToolboxGrab";
                            t && "function" == typeof e.removeStyle ? e.removeStyle(i) : t || "function" != typeof e.addStyle || e.addStyle(i)
                        }
                    }
                    fireMoveEvent_() {
                        if (!this.draggingBlock_.isDeadOrDying()) {
                            var t = new(X(r.MOVE$$module$build$src$core$events$utils))(this.draggingBlock_);
                            t.setReason(["drag"]), t.oldCoordinate = this.startXY_, t.recordNew(), F(t)
                        }
                    }
                    updateCursorDuringBlockDrag_() {
                        this.draggingBlock_.setDeleteStyle(this.wouldDeleteBlock_)
                    }
                    pixelsToWorkspaceUnits_(t) {
                        return t = new n3(t.x / this.workspace_.scale, t.y / this.workspace_.scale), this.workspace_.isMutator && t.scale(1 / this.workspace_.options.parentWorkspace.scale), t
                    }
                    dragIcons_() {
                        tc("Blockly.BlockDragger.prototype.dragIcons_", "v10", "v11")
                    }
                    getInsertionMarkers() {
                        return this.draggedConnectionManager_ && this.draggedConnectionManager_.getInsertionMarkers ? this.draggedConnectionManager_.getInsertionMarkers() : []
                    }
                };
                d(c.BLOCK_DRAGGER, h, cQ);
                var c0 = {};
                c0.Bubble = ht, c0.MiniWorkspaceBubble = he, c0.TextBubble = hl, c0.TextInputBubble = ha;
                var c1 = class extends lu {
                    constructor(t, e, i, s) {
                        super(t), this.type = nr, this.recordUndo = !1, t && (this.name = e, this.oldValue = i, this.newValue = s)
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.name) throw Error("The changed field name is undefined. Either pass a name to the constructor, or call fromJson.");
                        return t.name = this.name, t.oldValue = this.oldValue, t.newValue = this.newValue, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new c1)).name = t.name, e.oldValue = t.oldValue, e.newValue = t.newValue, e
                    }
                    isNull() {
                        return this.oldValue === this.newValue
                    }
                    run(t) {
                        var e = this.getEventWorkspace_();
                        if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
                        if (!(e = e.getBlockById(this.blockId))) throw Error("The associated block is undefined. Either pass a block to the constructor, or call fromJson");
                        t = t ? this.newValue : this.oldValue, (e = e.getField(this.name)) ? e.setValue(t) : console.warn("Can't set non-existent field: " + this.name)
                    }
                };
                d(c.EVENT, nr, c1);
                var c2 = class extends lu {
                    constructor(t) {
                        super(t), this.type = r.MOVE$$module$build$src$core$events$utils, t && (t.isShadow() && (this.recordUndo = !1), t = this.currentLocation_(), this.oldParentId = t.parentId, this.oldInputName = t.inputName, this.oldCoordinate = t.coordinate)
                    }
                    toJson() {
                        let t = super.toJson();
                        return t.oldParentId = this.oldParentId, t.oldInputName = this.oldInputName, this.oldCoordinate && (t.oldCoordinate = `${Math.round(this.oldCoordinate.x)}, ${Math.round(this.oldCoordinate.y)}`), t.newParentId = this.newParentId, t.newInputName = this.newInputName, this.newCoordinate && (t.newCoordinate = `${Math.round(this.newCoordinate.x)}, ${Math.round(this.newCoordinate.y)}`), this.reason && (t.reason = this.reason), this.recordUndo || (t.recordUndo = this.recordUndo), t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new c2)).oldParentId = t.oldParentId, e.oldInputName = t.oldInputName, t.oldCoordinate && (i = t.oldCoordinate.split(","), e.oldCoordinate = new n3(Number(i[0]), Number(i[1]))), e.newParentId = t.newParentId, e.newInputName = t.newInputName, t.newCoordinate && (i = t.newCoordinate.split(","), e.newCoordinate = new n3(Number(i[0]), Number(i[1]))), void 0 !== t.reason && (e.reason = t.reason), void 0 !== t.recordUndo && (e.recordUndo = t.recordUndo), e
                    }
                    recordNew() {
                        let t = this.currentLocation_();
                        this.newParentId = t.parentId, this.newInputName = t.inputName, this.newCoordinate = t.coordinate
                    }
                    setReason(t) {
                        this.reason = t
                    }
                    currentLocation_() {
                        var t = this.getEventWorkspace_();
                        if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
                        var e = t.getBlockById(this.blockId);
                        if (!e) throw Error("The block associated with the block move event could not be found");
                        t = {};
                        let i = e.getParent();
                        return i ? (t.parentId = i.id, (e = i.getInputWithBlock(e)) && (t.inputName = e.name)) : t.coordinate = e.getRelativeToSurfaceXY(), t
                    }
                    isNull() {
                        return this.oldParentId === this.newParentId && this.oldInputName === this.newInputName && n3.equals(this.oldCoordinate, this.newCoordinate)
                    }
                    run(t) {
                        var e = this.getEventWorkspace_();
                        if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
                        var i = e.getBlockById(this.blockId);
                        if (i) {
                            var s = t ? this.newParentId : this.oldParentId,
                                o = t ? this.newInputName : this.oldInputName;
                            if (t = t ? this.newCoordinate : this.oldCoordinate, s) {
                                var n = e.getBlockById(s);
                                if (!n) {
                                    console.warn("Can't connect to non-existent block: " + s);
                                    return
                                }
                            }
                            if (i.getParent() && i.unplug(), t) o = i.getRelativeToSurfaceXY(), i.moveBy(t.x - o.x, t.y - o.y, this.reason);
                            else {
                                let t, s;
                                (!(e = i.outputConnection) || i.previousConnection && i.previousConnection.isConnected()) && (e = i.previousConnection), i = null == (s = e) ? void 0 : s.type, o ? (i = n.getInput(o)) && (t = i.connection) : i === lx.PREVIOUS_STATEMENT && (t = n.nextConnection), t && e ? e.connect(t) : console.warn("Can't connect to non-existent input: " + o)
                            }
                        } else console.warn("Can't move non-existent block: " + this.blockId)
                    }
                };
                d(c.EVENT, r.MOVE$$module$build$src$core$events$utils, c2);
                var c3, c5, c6, c9, c8, c4, c7, ut, ue = class extends nA {
                    constructor(t, e, i) {
                        super(t ? t.workspace.id : void 0), this.type = nb, t && (this.blockId = t.id, this.isOpen = e, this.bubbleType = i)
                    }
                    toJson() {
                        let t = super.toJson();
                        if (void 0 === this.isOpen) throw Error("Whether this event is for opening the bubble is undefined. Either pass the value to the constructor, or call fromJson");
                        if (!this.bubbleType) throw Error("The type of bubble is undefined. Either pass the value to the constructor, or call fromJson");
                        return t.isOpen = this.isOpen, t.bubbleType = this.bubbleType, t.blockId = this.blockId || "", t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new ue)).isOpen = t.isOpen, e.bubbleType = t.bubbleType, e.blockId = t.blockId, e
                    }
                };
                (t = ut || (ut = {})).MUTATOR = "mutator", t.COMMENT = "comment", t.WARNING = "warning", d(c.EVENT, nb, ue);
                var ui = {};
                ui.BubbleOpen = ue, ui.BubbleType = ut;
                var us = class extends nD {
                        constructor(t) {
                            super(), this.isBlank = !t, t && (this.commentId = t.id, this.workspaceId = t.workspace.id, this.group = r.getGroup$$module$build$src$core$events$utils(), this.recordUndo = P())
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
                            return t.commentId = this.commentId, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new us)).commentId = t.commentId, e
                        }
                        static CommentCreateDeleteHelper(t, e) {
                            var i = t.getEventWorkspace_();
                            if (e) {
                                if (e = r.createElement$$module$build$src$core$utils$xml("xml"), !t.xml) throw Error("Ecountered a comment event without proper xml");
                                e.appendChild(t.xml), r.domToWorkspace$$module$build$src$core$xml(e, i)
                            } else {
                                if (!t.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
                                (i = i.getCommentById(t.commentId)) ? i.dispose(): console.warn("Can't uncreate non-existent comment: " + t.commentId)
                            }
                        }
                    },
                    uo = class extends us {
                        constructor(t, e, i) {
                            super(t), this.type = nw, t && (this.oldContents_ = void 0 === e ? "" : e, this.newContents_ = void 0 === i ? "" : i)
                        }
                        toJson() {
                            let t = super.toJson();
                            if (!this.oldContents_) throw Error("The old contents is undefined. Either pass a value to the constructor, or call fromJson");
                            if (!this.newContents_) throw Error("The new contents is undefined. Either pass a value to the constructor, or call fromJson");
                            return t.oldContents = this.oldContents_, t.newContents = this.newContents_, t
                        }
                        static fromJson(t, e, i) {
                            return (e = super.fromJson(t, e, null != i ? i : new uo)).oldContents_ = t.oldContents, e.newContents_ = t.newContents, e
                        }
                        isNull() {
                            return this.oldContents_ === this.newContents_
                        }
                        run(t) {
                            var e = this.getEventWorkspace_();
                            if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
                            if (e = e.getCommentById(this.commentId)) {
                                var i = t ? this.newContents_ : this.oldContents_;
                                if (!i) {
                                    if (t) throw Error("The new contents is undefined. Either pass a value to the constructor, or call fromJson");
                                    throw Error("The old contents is undefined. Either pass a value to the constructor, or call fromJson")
                                }
                                e.setContent(i)
                            } else console.warn("Can't change non-existent comment: " + this.commentId)
                        }
                    };
                d(c.EVENT, nw, uo);
                var un = class extends us {
                    constructor(t) {
                        super(t), this.type = nT, t && (this.xml = t.toXmlWithXY())
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.xml) throw Error("The comment XML is undefined. Either pass a comment to the constructor, or call fromJson");
                        return t.xml = eT(this.xml), t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new un)).xml = r.textToDom$$module$build$src$core$utils$xml(t.xml), e
                    }
                    run(t) {
                        us.CommentCreateDeleteHelper(this, t)
                    }
                };
                d(c.EVENT, nT, un);
                var ur = class extends us {
                    constructor(t) {
                        super(t), this.type = nk, t && (this.xml = t.toXmlWithXY())
                    }
                    run(t) {
                        us.CommentCreateDeleteHelper(this, !t)
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.xml) throw Error("The comment XML is undefined. Either pass a comment to the constructor, or call fromJson");
                        return t.xml = eT(this.xml), t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new ur)).xml = r.textToDom$$module$build$src$core$utils$xml(t.xml), e
                    }
                };
                d(c.EVENT, nk, ur);
                var ul = class extends us {
                    constructor(t) {
                        super(t), this.type = ny, t && (this.comment_ = t, this.oldCoordinate_ = t.getRelativeToSurfaceXY())
                    }
                    recordNew() {
                        if (this.newCoordinate_) throw Error("Tried to record the new position of a comment on the same event twice.");
                        if (!this.comment_) throw Error("The comment is undefined. Pass a comment to the constructor if you want to use the record functionality");
                        this.newCoordinate_ = this.comment_.getRelativeToSurfaceXY()
                    }
                    setOldCoordinate(t) {
                        this.oldCoordinate_ = t
                    }
                    toJson() {
                        let t = super.toJson();
                        if (!this.oldCoordinate_) throw Error("The old comment position is undefined. Either pass a comment to the constructor, or call fromJson");
                        if (!this.newCoordinate_) throw Error("The new comment position is undefined. Either call recordNew, or call fromJson");
                        return t.oldCoordinate = `${Math.round(this.oldCoordinate_.x)}, ${Math.round(this.oldCoordinate_.y)}`, t.newCoordinate = Math.round(this.newCoordinate_.x) + "," + Math.round(this.newCoordinate_.y), t
                    }
                    static fromJson(t, e, i) {
                        return e = super.fromJson(t, e, null != i ? i : new ul), i = t.oldCoordinate.split(","), e.oldCoordinate_ = new n3(Number(i[0]), Number(i[1])), i = t.newCoordinate.split(","), e.newCoordinate_ = new n3(Number(i[0]), Number(i[1])), e
                    }
                    isNull() {
                        return n3.equals(this.oldCoordinate_, this.newCoordinate_)
                    }
                    run(t) {
                        var e = this.getEventWorkspace_();
                        if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
                        if (e = e.getCommentById(this.commentId)) {
                            if (!(t = t ? this.newCoordinate_ : this.oldCoordinate_)) throw Error("Either oldCoordinate_ or newCoordinate_ is undefined. Either pass a comment to the constructor and call recordNew, or call fromJson");
                            var i = e.getRelativeToSurfaceXY();
                            e.moveBy(t.x - i.x, t.y - i.y)
                        } else console.warn("Can't move non-existent comment: " + this.commentId)
                    }
                };
                d(c.EVENT, ny, ul);
                var ua = class extends nA {
                    constructor(t, e, i) {
                        super(i), this.type = nm, this.oldItem = null != t ? t : void 0, this.newItem = null != e ? e : void 0
                    }
                    toJson() {
                        let t = super.toJson();
                        return t.oldItem = this.oldItem, t.newItem = this.newItem, t
                    }
                    static fromJson(t, e, i) {
                        return (e = super.fromJson(t, e, null != i ? i : new ua)).oldItem = t.oldItem, e.newItem = t.newItem, e
                    }
                };
                d(c.EVENT, nm, ua), r.CHANGE$$module$build$src$core$events$utils, r.CREATE$$module$build$src$core$events$utils, r.DELETE$$module$build$src$core$events$utils, r.MOVE$$module$build$src$core$events$utils, r.CHANGE$$module$build$src$core$events$utils, r.CREATE$$module$build$src$core$events$utils, r.DELETE$$module$build$src$core$events$utils, r.MOVE$$module$build$src$core$events$utils, r.disable$$module$build$src$core$events$utils, r.enable$$module$build$src$core$events$utils, r.getGroup$$module$build$src$core$events$utils, r.setGroup$$module$build$src$core$events$utils;
                var uh = {};
                uh.Abstract = nD, uh.BLOCK_CHANGE = r.CHANGE$$module$build$src$core$events$utils, uh.BLOCK_CREATE = r.CREATE$$module$build$src$core$events$utils, uh.BLOCK_DELETE = r.DELETE$$module$build$src$core$events$utils, uh.BLOCK_DRAG = nu, uh.BLOCK_FIELD_INTERMEDIATE_CHANGE = nr, uh.BLOCK_MOVE = r.MOVE$$module$build$src$core$events$utils, uh.BUBBLE_OPEN = nb, uh.BUMP_EVENTS = nC, uh.BlockBase = lu, uh.BlockChange = aY, uh.BlockCreate = ld, uh.BlockDelete = cd, uh.BlockDrag = cZ, uh.BlockFieldIntermediateChange = c1, uh.BlockMove = c2, uh.BubbleOpen = ue, uh.BubbleType = ut, uh.CHANGE = r.CHANGE$$module$build$src$core$events$utils, uh.CLICK = np, uh.COMMENT_CHANGE = nw, uh.COMMENT_CREATE = nT, uh.COMMENT_DELETE = nk, uh.COMMENT_MOVE = ny, uh.CREATE = r.CREATE$$module$build$src$core$events$utils, uh.Click = nN, uh.ClickTarget = nR, uh.CommentBase = us, uh.CommentChange = uo, uh.CommentCreate = un, uh.CommentDelete = ur, uh.CommentMove = ul, uh.DELETE = r.DELETE$$module$build$src$core$events$utils, uh.FINISHED_LOADING = n$, uh.FinishedLoading = cj, uh.MARKER_MOVE = ng, uh.MOVE = r.MOVE$$module$build$src$core$events$utils, uh.MarkerMove = hZ, uh.SELECTED = nd, uh.Selected = r0, uh.THEME_CHANGE = nf, uh.TOOLBOX_ITEM_SELECT = nm, uh.TRASHCAN_OPEN = n_, uh.ThemeChange = lg, uh.ToolboxItemSelect = ua, uh.TrashcanOpen = cu, uh.UI = nc, uh.UiBase = nA, uh.VAR_CREATE = nl, uh.VAR_DELETE = na, uh.VAR_RENAME = nh, uh.VIEWPORT_CHANGE = nE, uh.VarBase = rX, uh.VarCreate = rY, uh.VarDelete = cs, uh.VarRename = co, uh.ViewportChange = lb, uh.clearPendingUndo = U, uh.disable = r.disable$$module$build$src$core$events$utils, uh.disableOrphans = Y, uh.enable = r.enable$$module$build$src$core$events$utils, uh.filter = G, uh.fire = F, uh.fromJson = z, uh.get = X, uh.getDescendantIds = V, uh.getGroup = r.getGroup$$module$build$src$core$events$utils, uh.getRecordUndo = P, uh.isEnabled = W, uh.setGroup = r.setGroup$$module$build$src$core$events$utils, uh.setRecordUndo = B;
                var uc = class extends hM {
                        constructor() {
                            super(), this.GRID_UNIT = 4, this.CURSOR_COLOUR = "#ffa200", this.CURSOR_RADIUS = 5, this.JAGGED_TEETH_WIDTH = this.JAGGED_TEETH_HEIGHT = 0, this.START_HAT_HEIGHT = 22, this.START_HAT_WIDTH = 96, this.SHAPES = {
                                HEXAGONAL: 1,
                                ROUND: 2,
                                SQUARE: 3,
                                PUZZLE: 4,
                                NOTCH: 5
                            }, this.SHAPE_IN_SHAPE_PADDING = {
                                1: {
                                    0: 5 * this.GRID_UNIT,
                                    1: 2 * this.GRID_UNIT,
                                    2: 5 * this.GRID_UNIT,
                                    3: 5 * this.GRID_UNIT
                                },
                                2: {
                                    0: 3 * this.GRID_UNIT,
                                    1: 3 * this.GRID_UNIT,
                                    2: 1 * this.GRID_UNIT,
                                    3: 2 * this.GRID_UNIT
                                },
                                3: {
                                    0: 2 * this.GRID_UNIT,
                                    1: 2 * this.GRID_UNIT,
                                    2: 2 * this.GRID_UNIT,
                                    3: 2 * this.GRID_UNIT
                                }
                            }, this.FULL_BLOCK_FIELDS = !0, this.FIELD_TEXT_FONTWEIGHT = "bold", this.FIELD_TEXT_FONTFAMILY = '"Helvetica Neue", "Segoe UI", Helvetica, sans-serif', this.FIELD_COLOUR_FULL_BLOCK = this.FIELD_TEXTINPUT_BOX_SHADOW = this.FIELD_DROPDOWN_SVG_ARROW = this.FIELD_DROPDOWN_COLOURED_DIV = this.FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW = !0, this.SELECTED_GLOW_COLOUR = "#fff200", this.SELECTED_GLOW_SIZE = .5, this.REPLACEMENT_GLOW_COLOUR = "#fff200", this.REPLACEMENT_GLOW_SIZE = 2, this.selectedGlowFilterId = "", this.selectedGlowFilter = null, this.replacementGlowFilterId = "", this.SQUARED = this.ROUNDED = this.HEXAGONAL = this.replacementGlowFilter = null, this.SMALL_PADDING = this.GRID_UNIT, this.MEDIUM_PADDING = 2 * this.GRID_UNIT, this.MEDIUM_LARGE_PADDING = 3 * this.GRID_UNIT, this.LARGE_PADDING = 4 * this.GRID_UNIT, this.CORNER_RADIUS = 1 * this.GRID_UNIT, this.NOTCH_WIDTH = 9 * this.GRID_UNIT, this.NOTCH_HEIGHT = 2 * this.GRID_UNIT, this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT = 3 * this.GRID_UNIT, this.MIN_BLOCK_WIDTH = 2 * this.GRID_UNIT, this.MIN_BLOCK_HEIGHT = 12 * this.GRID_UNIT, this.EMPTY_STATEMENT_INPUT_HEIGHT = 6 * this.GRID_UNIT, this.TOP_ROW_MIN_HEIGHT = this.CORNER_RADIUS, this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING, this.BOTTOM_ROW_MIN_HEIGHT = this.CORNER_RADIUS, this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = 6 * this.GRID_UNIT, this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT, this.STATEMENT_INPUT_SPACER_MIN_WIDTH = 40 * this.GRID_UNIT, this.STATEMENT_INPUT_PADDING_LEFT = 4 * this.GRID_UNIT, this.EMPTY_INLINE_INPUT_PADDING = 4 * this.GRID_UNIT, this.EMPTY_INLINE_INPUT_HEIGHT = 8 * this.GRID_UNIT, this.DUMMY_INPUT_MIN_HEIGHT = 8 * this.GRID_UNIT, this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = 6 * this.GRID_UNIT, this.CURSOR_WS_WIDTH = 20 * this.GRID_UNIT, this.FIELD_TEXT_FONTSIZE = 3 * this.GRID_UNIT, this.FIELD_BORDER_RECT_RADIUS = this.CORNER_RADIUS, this.FIELD_BORDER_RECT_X_PADDING = 2 * this.GRID_UNIT, this.FIELD_BORDER_RECT_Y_PADDING = 1.625 * this.GRID_UNIT, this.FIELD_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT, this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT, this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING, this.FIELD_COLOUR_DEFAULT_WIDTH = 6 * this.GRID_UNIT, this.FIELD_COLOUR_DEFAULT_HEIGHT = 8 * this.GRID_UNIT, this.FIELD_CHECKBOX_X_OFFSET = 1 * this.GRID_UNIT, this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH = 12 * this.GRID_UNIT
                        }
                        setFontConstants_(t) {
                            super.setFontConstants_(t), this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT = this.FIELD_TEXT_HEIGHT + 2 * this.FIELD_BORDER_RECT_Y_PADDING
                        }
                        init() {
                            super.init(), this.HEXAGONAL = this.makeHexagonal(), this.ROUNDED = this.makeRounded(), this.SQUARED = this.makeSquared(), this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT + this.INSIDE_CORNERS.rightWidth
                        }
                        setDynamicProperties_(t) {
                            super.setDynamicProperties_(t), this.SELECTED_GLOW_COLOUR = t.getComponentStyle("selectedGlowColour") || this.SELECTED_GLOW_COLOUR;
                            let e = Number(t.getComponentStyle("selectedGlowSize"));
                            this.SELECTED_GLOW_SIZE = e && !isNaN(e) ? e : this.SELECTED_GLOW_SIZE, this.REPLACEMENT_GLOW_COLOUR = t.getComponentStyle("replacementGlowColour") || this.REPLACEMENT_GLOW_COLOUR, this.REPLACEMENT_GLOW_SIZE = (t = Number(t.getComponentStyle("replacementGlowSize"))) && !isNaN(t) ? t : this.REPLACEMENT_GLOW_SIZE
                        }
                        dispose() {
                            super.dispose(), this.selectedGlowFilter && tb(this.selectedGlowFilter), this.replacementGlowFilter && tb(this.replacementGlowFilter)
                        }
                        makeStartHat() {
                            let t = this.START_HAT_HEIGHT,
                                e = this.START_HAT_WIDTH,
                                i = sV("c", [sW(25, -t), sW(71, -t), sW(e, 0)]);
                            return {
                                height: t,
                                width: e,
                                path: i
                            }
                        }
                        makeHexagonal() {
                            function t(t, i, s) {
                                var o = t / 2;
                                return sY(-(s = s ? -1 : 1) * (o = o > e ? e : o), t = (i ? -1 : 1) * t / 2) + sY(s * o, t)
                            }
                            let e = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
                            return {
                                type: this.SHAPES.HEXAGONAL,
                                isDynamic: !0,
                                width: t => (t /= 2) > e ? e : t,
                                height: t => t,
                                connectionOffsetY: t => t / 2,
                                connectionOffsetX: t => -t,
                                pathDown: e => t(e, !1, !1),
                                pathUp: e => t(e, !0, !1),
                                pathRightDown: e => t(e, !1, !0),
                                pathRightUp: e => t(e, !1, !0)
                            }
                        }
                        makeRounded() {
                            function t(t, e, s) {
                                let o = t > i ? t - i : 0;
                                return sj("a", "0 0,1", t = (t > i ? i : t) / 2, sW((e ? -1 : 1) * t, (e ? -1 : 1) * t)) + sJ("v", (s ? 1 : -1) * o) + sj("a", "0 0,1", t, sW((e ? 1 : -1) * t, (e ? -1 : 1) * t))
                            }
                            let e = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH,
                                i = 2 * e;
                            return {
                                type: this.SHAPES.ROUND,
                                isDynamic: !0,
                                width: t => (t /= 2) > e ? e : t,
                                height: t => t,
                                connectionOffsetY: t => t / 2,
                                connectionOffsetX: t => -t,
                                pathDown: e => t(e, !1, !1),
                                pathUp: e => t(e, !0, !1),
                                pathRightDown: e => t(e, !1, !0),
                                pathRightUp: e => t(e, !1, !0)
                            }
                        }
                        makeSquared() {
                            function t(t, i, s) {
                                return t -= 2 * e, sj("a", "0 0,1", e, sW((i ? -1 : 1) * e, (i ? -1 : 1) * e)) + sJ("v", (s ? 1 : -1) * t) + sj("a", "0 0,1", e, sW((i ? 1 : -1) * e, (i ? -1 : 1) * e))
                            }
                            let e = this.CORNER_RADIUS;
                            return {
                                type: this.SHAPES.SQUARE,
                                isDynamic: !0,
                                width: t => e,
                                height: t => t,
                                connectionOffsetY: t => t / 2,
                                connectionOffsetX: t => -t,
                                pathDown: e => t(e, !1, !1),
                                pathUp: e => t(e, !0, !1),
                                pathRightDown: e => t(e, !1, !0),
                                pathRightUp: e => t(e, !1, !0)
                            }
                        }
                        shapeFor(t) {
                            let e = t.getCheck();
                            switch (!e && t.targetConnection && (e = t.targetConnection.getCheck()), t.type) {
                                case lx.INPUT_VALUE:
                                case lx.OUTPUT_VALUE:
                                    if (null !== (t = t.getSourceBlock().getOutputShape())) switch (t) {
                                        case this.SHAPES.HEXAGONAL:
                                            return this.HEXAGONAL;
                                        case this.SHAPES.ROUND:
                                            return this.ROUNDED;
                                        case this.SHAPES.SQUARE:
                                            return this.SQUARED
                                    }
                                    if (e && -1 !== e.indexOf("Boolean")) return this.HEXAGONAL;
                                    if (e && -1 !== e.indexOf("Number")) return this.ROUNDED;
                                    return e && e.indexOf("String"), this.ROUNDED;
                                case lx.PREVIOUS_STATEMENT:
                                case lx.NEXT_STATEMENT:
                                    return this.NOTCH;
                                default:
                                    throw Error("Unknown type")
                            }
                        }
                        makeNotch() {
                            function t(t) {
                                return sV("c", [sW(t * o / 2, 0), sW(t * o * 3 / 4, r / 2), sW(t * o, r)]) + sK([sW(t * o, n)]) + sV("c", [sW(t * o / 4, r / 2), sW(t * o / 2, r), sW(t * o, r)]) + sJ("h", t * s) + sV("c", [sW(t * o / 2, 0), sW(t * o * 3 / 4, -(r / 2)), sW(t * o, -r)]) + sK([sW(t * o, -n)]) + sV("c", [sW(t * o / 4, -(r / 2)), sW(t * o / 2, -r), sW(t * o, -r)])
                            }
                            let e = this.NOTCH_WIDTH,
                                i = this.NOTCH_HEIGHT,
                                s = e / 3,
                                o = s / 3,
                                n = i / 2,
                                r = n / 2,
                                l = t(1),
                                a = t(-1);
                            return {
                                type: this.SHAPES.NOTCH,
                                width: e,
                                height: i,
                                pathLeft: l,
                                pathRight: a
                            }
                        }
                        makeInsideCorners() {
                            let t = this.CORNER_RADIUS,
                                e = sj("a", "0 0,0", t, sW(-t, t)),
                                i = sj("a", "0 0,1", t, sW(-t, t)),
                                s = sj("a", "0 0,0", t, sW(t, t)),
                                o = sj("a", "0 0,1", t, sW(t, t));
                            return {
                                width: t,
                                height: t,
                                pathTop: e,
                                pathBottom: s,
                                rightWidth: t,
                                rightHeight: t,
                                pathTopRight: i,
                                pathBottomRight: o
                            }
                        }
                        generateSecondaryColour_(t) {
                            return sw("#000", t, .15) || t
                        }
                        generateTertiaryColour_(t) {
                            return sw("#000", t, .25) || t
                        }
                        createDom(t, e, i) {
                            super.createDom(t, e, i), t = tu(rp.DEFS, {}, t), e = tu(rp.FILTER, {
                                id: "blocklySelectedGlowFilter" + this.randomIdentifier,
                                height: "160%",
                                width: "180%",
                                y: "-30%",
                                x: "-40%"
                            }, t), tu(rp.FEGAUSSIANBLUR, {
                                in: "SourceGraphic",
                                stdDeviation: this.SELECTED_GLOW_SIZE
                            }, e), i = tu(rp.FECOMPONENTTRANSFER, {
                                result: "outBlur"
                            }, e), tu(rp.FEFUNCA, {
                                type: "table",
                                tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
                            }, i), tu(rp.FEFLOOD, {
                                "flood-color": this.SELECTED_GLOW_COLOUR,
                                "flood-opacity": 1,
                                result: "outColor"
                            }, e), tu(rp.FECOMPOSITE, {
                                in: "outColor",
                                in2: "outBlur",
                                operator: "in",
                                result: "outGlow"
                            }, e), this.selectedGlowFilterId = e.id, this.selectedGlowFilter = e, t = tu(rp.FILTER, {
                                id: "blocklyReplacementGlowFilter" + this.randomIdentifier,
                                height: "160%",
                                width: "180%",
                                y: "-30%",
                                x: "-40%"
                            }, t), tu(rp.FEGAUSSIANBLUR, {
                                in: "SourceGraphic",
                                stdDeviation: this.REPLACEMENT_GLOW_SIZE
                            }, t), e = tu(rp.FECOMPONENTTRANSFER, {
                                result: "outBlur"
                            }, t), tu(rp.FEFUNCA, {
                                type: "table",
                                tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
                            }, e), tu(rp.FEFLOOD, {
                                "flood-color": this.REPLACEMENT_GLOW_COLOUR,
                                "flood-opacity": 1,
                                result: "outColor"
                            }, t), tu(rp.FECOMPOSITE, {
                                in: "outColor",
                                in2: "outBlur",
                                operator: "in",
                                result: "outGlow"
                            }, t), tu(rp.FECOMPOSITE, {
                                in: "SourceGraphic",
                                in2: "outGlow",
                                operator: "over"
                            }, t), this.replacementGlowFilterId = t.id, this.replacementGlowFilter = t
                        }
                        getCSS_(t) {
                            return [`${t} .blocklyText,`, `${t} .blocklyFlyoutLabelText {`, `font: ${this.FIELD_TEXT_FONTWEIGHT} ${this.FIELD_TEXT_FONTSIZE}pt ${this.FIELD_TEXT_FONTFAMILY};`, "}", `${t} .blocklyText {`, "fill: #fff;", "}", `${t} .blocklyNonEditableText>rect:not(.blocklyDropdownRect),`, `${t} .blocklyEditableText>rect:not(.blocklyDropdownRect) {`, `fill: ${this.FIELD_BORDER_RECT_COLOUR};`, "}", `${t} .blocklyNonEditableText>text,`, `${t} .blocklyEditableText>text,`, `${t} .blocklyNonEditableText>g>text,`, `${t} .blocklyEditableText>g>text {`, "fill: #575E75;", "}", `${t} .blocklyFlyoutLabelText {`, "fill: #575E75;", "}", `${t} .blocklyText.blocklyBubbleText {`, "fill: #575E75;", "}", `${t} .blocklyDraggable:not(.blocklyDisabled)`, " .blocklyEditableText:not(.editing):hover>rect,", `${t} .blocklyDraggable:not(.blocklyDisabled)`, " .blocklyEditableText:not(.editing):hover>.blocklyPath {", "stroke: #fff;", "stroke-width: 2;", "}", `${t} .blocklyHtmlInput {`, `font-family: ${this.FIELD_TEXT_FONTFAMILY};`, `font-weight: ${this.FIELD_TEXT_FONTWEIGHT};`, "color: #575E75;", "}", `${t} .blocklyDropdownText {`, "fill: #fff !important;", "}", `${t}.blocklyWidgetDiv .goog-menuitem,`, `${t}.blocklyDropDownDiv .goog-menuitem {`, `font-family: ${this.FIELD_TEXT_FONTFAMILY};`, "}", `${t}.blocklyDropDownDiv .goog-menuitem-content {`, "color: #fff;", "}", `${t} .blocklyHighlightedConnectionPath {`, `stroke: ${this.SELECTED_GLOW_COLOUR};`, "}", `${t} .blocklyDisabled > .blocklyOutlinePath {`, `fill: url(#blocklyDisabledPattern${this.randomIdentifier})`, "}", `${t} .blocklyInsertionMarker>.blocklyPath {`, `fill-opacity: ${this.INSERTION_MARKER_OPACITY};`, "stroke: none;", "}"]
                        }
                    },
                    uu = class extends hP {
                        constructor(t, e) {
                            super(t, e)
                        }
                        draw() {
                            let t = this.block_.pathObject;
                            t.beginDrawing(), this.drawOutline_(), this.drawInternals_(), t.setPath(this.outlinePath_ + "\n" + this.inlinePath_), this.info_.RTL && t.flipRTL(), this.recordSizeOnBlock_(), this.info_.outputConnection && (t.outputShapeType = this.info_.outputConnection.shape.type), t.endDrawing()
                        }
                        drawOutline_() {
                            this.info_.outputConnection && this.info_.outputConnection.isDynamicShape && !this.info_.hasStatementInput && !this.info_.bottomRow.hasNextConnection ? (this.drawFlatTop_(), this.drawRightDynamicConnection_(), this.drawFlatBottom_(), this.drawLeftDynamicConnection_()) : super.drawOutline_()
                        }
                        drawLeft_() {
                            this.info_.outputConnection && this.info_.outputConnection.isDynamicShape ? this.drawLeftDynamicConnection_() : super.drawLeft_()
                        }
                        drawRightSideRow_(t) {
                            if (!(0 >= t.height)) {
                                if (hg.isSpacer(t)) {
                                    let s = t.precedesStatement;
                                    var e = t.followsStatement;
                                    if (s || e) {
                                        let o = this.constants_.INSIDE_CORNERS;
                                        var i = o.rightHeight;
                                        i = t.height - (s ? i : 0), e = e ? o.pathBottomRight : "", t = 0 < i ? sJ("V", t.yPos + i) : "", this.outlinePath_ += e + t + (s ? o.pathTopRight : "");
                                        return
                                    }
                                }
                                this.outlinePath_ += sJ("V", t.yPos + t.height)
                            }
                        }
                        drawRightDynamicConnection_() {
                            if (!this.info_.outputConnection) throw Error("Cannot draw the output connection of a block that doesn't have one");
                            this.outlinePath_ += this.info_.outputConnection.shape.pathRightDown(this.info_.outputConnection.height)
                        }
                        drawLeftDynamicConnection_() {
                            if (!this.info_.outputConnection) throw Error("Cannot draw the output connection of a block that doesn't have one");
                            this.positionOutputConnection_(), this.outlinePath_ += this.info_.outputConnection.shape.pathUp(this.info_.outputConnection.height), this.outlinePath_ += "z"
                        }
                        drawFlatTop_() {
                            let t = this.info_.topRow;
                            this.positionPreviousConnection_(), this.outlinePath_ += sX(t.xPos, this.info_.startY), this.outlinePath_ += sJ("h", t.width)
                        }
                        drawFlatBottom_() {
                            let t = this.info_.bottomRow;
                            this.positionNextConnection_(), this.outlinePath_ += sJ("V", t.baseline), this.outlinePath_ += sJ("h", -t.width)
                        }
                        drawInlineInput_(t) {
                            this.positionInlineInputConnection_(t);
                            let e = t.input.name;
                            if (!t.connectedBlock && !this.info_.isInsertionMarker) {
                                var i = t.width - 2 * t.connectionWidth;
                                t = sz(t.xPos + t.connectionWidth, t.centerline - t.height / 2) + sJ("h", i) + t.shape.pathRightDown(t.height) + sJ("h", -i) + t.shape.pathUp(t.height) + "z", this.block_.pathObject.setOutlinePath(e, t)
                            }
                        }
                        drawStatementInput_(t) {
                            var e = t.getLastInput();
                            let i = e.xPos + e.notchOffset + e.shape.width,
                                s = this.constants_.INSIDE_CORNERS,
                                o = e.shape.pathRight + sJ("h", -(e.notchOffset - s.width)) + s.pathTop,
                                n = t.height - 2 * s.height;
                            e = s.pathBottom + sJ("h", e.notchOffset - s.width) + (e.connectedBottomNextConnection ? "" : e.shape.pathLeft), this.outlinePath_ += sJ("H", i) + o + sJ("v", n) + e + sJ("H", t.xPos + t.width), this.positionStatementInputConnection_(t)
                        }
                    },
                    ud = class extends aQ {
                        constructor(t, e, i, s, o, n, r) {
                            if (super(aQ.SKIP_SETUP), this.imageElement = this.clickHandler = null, this.flipRtl = this.isDirty_ = this.EDITABLE = !1, this.altText = "", i = Number(sv(i)), e = Number(sv(e)), isNaN(i) || isNaN(e)) throw Error("Height and width values of an image field must cast to numbers.");
                            if (0 >= i || 0 >= e) throw Error("Height and width values of an image field must be greater than 0.");
                            this.size_ = new rb(e, i + ud.Y_PADDING), this.imageHeight = i, "function" == typeof o && (this.clickHandler = o), t !== aQ.SKIP_SETUP && (r ? this.configure_(r) : (this.flipRtl = !!n, this.altText = sv(s) || ""), this.setValue(sv(t)))
                        }
                        configure_(t) {
                            super.configure_(t), t.flipRtl && (this.flipRtl = t.flipRtl), t.alt && (this.altText = sv(t.alt))
                        }
                        initView() {
                            this.imageElement = tu(rp.IMAGE, {
                                height: this.imageHeight + "px",
                                width: this.size_.width + "px",
                                alt: this.altText
                            }, this.fieldGroup_), this.imageElement.setAttributeNS(ra, "xlink:href", this.value_), this.clickHandler && (this.imageElement.style.cursor = "pointer")
                        }
                        updateSize_() {}
                        doClassValidation_(t) {
                            return "string" != typeof t ? null : t
                        }
                        doValueUpdate_(t) {
                            this.value_ = t, this.imageElement && this.imageElement.setAttributeNS(ra, "xlink:href", this.value_)
                        }
                        getFlipRtl() {
                            return this.flipRtl
                        }
                        setAlt(t) {
                            t !== this.altText && (this.altText = t || "", this.imageElement && this.imageElement.setAttribute("alt", this.altText))
                        }
                        showEditor_() {
                            this.clickHandler && this.clickHandler(this)
                        }
                        setOnClickHandler(t) {
                            this.clickHandler = t
                        }
                        getText_() {
                            return this.altText
                        }
                        static fromJson(t) {
                            if (!t.src || !t.width || !t.height) throw Error("src, width, and height values for an image field arerequired. The width and height must be non-zero.");
                            return new this(t.src, t.width, t.height, void 0, void 0, void 0, t)
                        }
                    };
                ud.Y_PADDING = 1, sD("field_image", ud), ud.prototype.DEFAULT_VALUE = "";
                var up = class extends aQ {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.spellcheck_ = !0, this.htmlInput_ = null, this.isTextValid_ = this.isBeingEdited_ = !1, this.onKeyInputWrapper_ = this.onKeyDownWrapper_ = this.valueWhenEditorWasOpened_ = null, this.fullBlockClickTarget_ = !1, this.workspace_ = null, this.SERIALIZABLE = !0, this.CURSOR = "text", t !== aQ.SKIP_SETUP && (i && this.configure_(i), this.setValue(t), e && this.setValidator(e))
                    }
                    configure_(t) {
                        super.configure_(t), void 0 !== t.spellcheck && (this.spellcheck_ = t.spellcheck)
                    }
                    initView() {
                        if (!this.getSourceBlock()) throw new a0;
                        super.initView(), this.isFullBlockField() && (this.clickTarget_ = this.sourceBlock_.getSvgRoot())
                    }
                    isFullBlockField() {
                        let t;
                        let e = this.getSourceBlock();
                        if (!e) throw new a0;
                        return this.fullBlockClickTarget_ = !(null == (t = this.getConstants()) || !t.FULL_BLOCK_FIELDS) && e.isSimpleReporter()
                    }
                    doValueInvalid_(t) {
                        this.isBeingEdited_ && (this.isDirty_ = !0, this.isTextValid_ = !1, t = this.value_, this.value_ = this.htmlInput_.getAttribute("data-untyped-default-value"), this.sourceBlock_ && W() && F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this.sourceBlock_, "field", this.name || null, t, this.value_)))
                    }
                    doValueUpdate_(t) {
                        this.isTextValid_ = this.isDirty_ = !0, this.value_ = t
                    }
                    applyColour() {
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        this.getConstants().FULL_BLOCK_FIELDS && this.fieldGroup_ && (!this.isFullBlockField() && this.borderRect_ ? (this.borderRect_.style.display = "block", this.borderRect_.setAttribute("stroke", t.style.colourTertiary)) : (this.borderRect_.style.display = "none", t.pathObject.svgPath.setAttribute("fill", this.getConstants().FIELD_BORDER_RECT_COLOUR)))
                    }
                    getSize() {
                        let t;
                        return (null == (t = this.getConstants()) ? 0 : t.FULL_BLOCK_FIELDS) && (this.render_(), this.isDirty_ = !1), super.getSize()
                    }
                    onLocationChange() {
                        this.isBeingEdited_ && this.resizeEditor_()
                    }
                    render_() {
                        if (super.render_(), this.isBeingEdited_) {
                            var t = this.htmlInput_;
                            this.isTextValid_ ? (tg(t, "blocklyInvalidInput"), it(t, lG.INVALID, !1)) : (td(t, "blocklyInvalidInput"), it(t, lG.INVALID, !0))
                        }
                        if (!(t = this.getSourceBlock())) throw new a0;
                        this.getConstants().FULL_BLOCK_FIELDS && t.applyColour()
                    }
                    setSpellcheck(t) {
                        t !== this.spellcheck_ && (this.spellcheck_ = t, this.htmlInput_ && this.htmlInput_.setAttribute("spellcheck", this.spellcheck_))
                    }
                    showEditor_(t, e = !1) {
                        this.workspace_ = this.sourceBlock_.workspace, !e && this.workspace_.options.modalInputs && (nY || nW || nV) ? this.showPromptEditor_() : this.showInlineEditor_(e)
                    }
                    showPromptEditor_() {
                        tZ(r.Msg$$module$build$src$core$msg.CHANGE_VALUE_TITLE, this.getText(), t => {
                            null !== t && this.setValue(this.getValueFromEditorText_(t)), this.onFinishEditing_(this.value_)
                        })
                    }
                    showInlineEditor_(t) {
                        let e = this.getSourceBlock();
                        if (!e) throw new a0;
                        is(this, e.RTL, this.widgetDispose_.bind(this)), this.htmlInput_ = this.widgetCreate_(), this.isBeingEdited_ = !0, this.valueWhenEditorWasOpened_ = this.value_, t || (this.htmlInput_.focus({
                            preventScroll: !0
                        }), this.htmlInput_.select())
                    }
                    widgetCreate_() {
                        var t = this.getSourceBlock();
                        if (!t) throw new a0;
                        r.setGroup$$module$build$src$core$events$utils(!0);
                        let e = ie();
                        var i = this.getClickTarget_();
                        if (!i) throw Error("A click target has not been set.");
                        td(i, "editing"), (i = document.createElement("input")).className = "blocklyHtmlInput", i.setAttribute("spellcheck", this.spellcheck_);
                        let s = this.workspace_.getScale();
                        var o = this.getConstants().FIELD_TEXT_FONTSIZE * s + "pt";
                        return e.style.fontSize = o, i.style.fontSize = o, o = up.BORDERRADIUS * s + "px", this.isFullBlockField() && (o = ((o = this.getScaledBBox()).bottom - o.top) / 2 + "px", t = t.getParent() ? t.getParent().style.colourTertiary : this.sourceBlock_.style.colourTertiary, i.style.border = 1 * s + "px solid " + t, e.style.borderRadius = o, e.style.transition = "box-shadow 0.25s ease 0s", this.getConstants().FIELD_TEXTINPUT_BOX_SHADOW && (e.style.boxShadow = "rgba(255, 255, 255, 0.3) 0 0 0 " + 4 * s + "px")), i.style.borderRadius = o, e.appendChild(i), i.value = i.defaultValue = this.getEditorText_(this.value_), i.setAttribute("data-untyped-default-value", String(this.value_)), this.resizeEditor_(), this.bindInputEvents_(i), i
                    }
                    widgetDispose_() {
                        this.isBeingEdited_ = !1, this.isTextValid_ = !0, this.forceRerender(), this.onFinishEditing_(this.value_), this.sourceBlock_ && W() && null !== this.valueWhenEditorWasOpened_ && this.valueWhenEditorWasOpened_ !== this.value_ && (F(new(X(r.CHANGE$$module$build$src$core$events$utils))(this.sourceBlock_, "field", this.name || null, this.valueWhenEditorWasOpened_, this.value_)), this.valueWhenEditorWasOpened_ = null), r.setGroup$$module$build$src$core$events$utils(!1), this.unbindInputEvents_();
                        var t = ie().style;
                        if (t.width = "auto", t.height = "auto", t.fontSize = "", t.transition = "", t.boxShadow = "", this.htmlInput_ = null, !(t = this.getClickTarget_())) throw Error("A click target has not been set.");
                        tg(t, "editing")
                    }
                    onFinishEditing_(t) {}
                    bindInputEvents_(t) {
                        this.onKeyDownWrapper_ = tt(t, "keydown", this, this.onHtmlInputKeyDown_), this.onKeyInputWrapper_ = tt(t, "input", this, this.onHtmlInputChange_)
                    }
                    unbindInputEvents_() {
                        this.onKeyDownWrapper_ && (ti(this.onKeyDownWrapper_), this.onKeyDownWrapper_ = null), this.onKeyInputWrapper_ && (ti(this.onKeyInputWrapper_), this.onKeyInputWrapper_ = null)
                    }
                    onHtmlInputKeyDown_(t) {
                        "Enter" === t.key ? (io(), iV()) : "Escape" === t.key ? (this.setValue(this.htmlInput_.getAttribute("data-untyped-default-value")), io(), iV()) : "Tab" === t.key && (io(), iV(), this.sourceBlock_.tab(this, !t.shiftKey), t.preventDefault())
                    }
                    onHtmlInputChange_(t) {
                        t = this.value_, this.setValue(this.getValueFromEditorText_(this.htmlInput_.value), !1), this.sourceBlock_ && W() && this.value_ !== t && F(new(X(nr))(this.sourceBlock_, this.name || null, t, this.value_))
                    }
                    setEditorValue_(t, e = !0) {
                        this.isDirty_ = !0, this.isBeingEdited_ && (this.htmlInput_.value = this.getEditorText_(t)), this.setValue(t, e)
                    }
                    resizeEditor_() {
                        var t = this.getSourceBlock();
                        if (!t) throw new a0;
                        let e = ie(),
                            i = this.getScaledBBox();
                        e.style.width = i.right - i.left + "px", e.style.height = i.bottom - i.top + "px", t = new n3(t.RTL ? i.right - e.offsetWidth : i.left, i.top), e.style.left = t.x + "px", e.style.top = t.y + "px"
                    }
                    repositionForWindowResize() {
                        let t = this.getSourceBlock();
                        return t instanceof ck && (oy(this.workspace_, this.workspace_.getMetricsManager().getViewMetrics(!0), t) || this.resizeEditor_(), !0)
                    }
                    isTabNavigable() {
                        return !0
                    }
                    getText_() {
                        return this.isBeingEdited_ && this.htmlInput_ ? this.htmlInput_.value : null
                    }
                    getEditorText_(t) {
                        return `${t}`
                    }
                    getValueFromEditorText_(t) {
                        return t
                    }
                };
                up.BORDERRADIUS = 4;
                var ug = class extends up {
                    constructor(t, e, i) {
                        super(t, e, i)
                    }
                    doClassValidation_(t) {
                        return void 0 === t ? null : `${t}`
                    }
                    static fromJson(t) {
                        return new this(sv(t.text), void 0, t)
                    }
                };
                sD("field_input", ug), ug.prototype.DEFAULT_VALUE = "";
                var ub = class extends hm {
                        constructor(t) {
                            super(t)
                        }
                        endsWithElemSpacer() {
                            return !1
                        }
                        hasLeftSquareCorner(t) {
                            return !!t.outputConnection
                        }
                        hasRightSquareCorner(t) {
                            return !!t.outputConnection && !t.statementInputCount && !t.nextConnection
                        }
                    },
                    u_ = class extends hv {
                        constructor(t, e) {
                            if (super(t, e), this.connectedBottomNextConnection = !1, this.connectedBlock) {
                                for (t = this.connectedBlock; e = t.getNextBlock();) t = e;
                                t.nextConnection || (this.height = this.connectedBlockHeight, this.connectedBottomNextConnection = !0)
                            }
                        }
                    },
                    um = class extends hb {
                        constructor(t) {
                            super(t), this.width = this.height = 0, this.type |= hg.getType("RIGHT_CONNECTION")
                        }
                    },
                    uf = class extends hL {
                        constructor(t) {
                            super(t)
                        }
                        endsWithElemSpacer() {
                            return !1
                        }
                        hasLeftSquareCorner(t) {
                            let e = (t.hat ? "cap" === t.hat : this.constants_.ADD_START_HATS) && !t.outputConnection && !t.previousConnection;
                            return !!t.outputConnection || e
                        }
                        hasRightSquareCorner(t) {
                            return !!t.outputConnection && !t.statementInputCount && !t.nextConnection
                        }
                    },
                    uE = class extends hJ {
                        constructor(t, e) {
                            super(t, e), this.isInline = !0, this.renderer_ = t, this.constants_ = this.renderer_.getConstants(), this.topRow = new uf(this.constants_), this.bottomRow = new ub(this.constants_), this.isMultiRow = !e.getInputsInline() || e.isCollapsed(), this.hasStatementInput = 0 < e.statementInputCount, this.rightSide = this.outputConnection ? new um(this.constants_) : null, this.rightAlignedDummyInputs = new WeakMap
                        }
                        getRenderer() {
                            return this.renderer_
                        }
                        measure() {
                            this.createRows_(), this.addElemSpacing_(), this.addRowSpacing_(), this.adjustXPosition_(), this.computeBounds_(), this.alignRowElements_(), this.finalize_()
                        }
                        shouldStartNewRow_(t, e) {
                            return !!e && (e instanceof hY || t instanceof hK || e instanceof hK || (t instanceof r.ValueInput$$module$build$src$core$inputs$value_input || t instanceof hX || t instanceof hY) && (!this.isInline || this.isMultiRow))
                        }
                        getDesiredRowWidth_(t) {
                            return t.hasStatement ? this.width - this.startX - (this.constants_.INSIDE_CORNERS.rightWidth || 0) : super.getDesiredRowWidth_(t)
                        }
                        getInRowSpacing_(t, e) {
                            return t && e || !this.outputConnection || !this.outputConnection.isDynamicShape || this.hasStatementInput || this.bottomRow.hasNextConnection ? !t && e && hg.isStatementInput(e) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : t && hg.isLeftRoundedCorner(t) && e && (hg.isPreviousConnection(e) || hg.isNextConnection(e)) ? e.notchOffset - this.constants_.CORNER_RADIUS : t && hg.isLeftSquareCorner(t) && e && hg.isHat(e) ? this.constants_.NO_PADDING : this.constants_.MEDIUM_PADDING : this.constants_.NO_PADDING
                        }
                        getSpacerRowHeight_(t, e) {
                            if (hg.isTopRow(t) && hg.isBottomRow(e)) return this.constants_.EMPTY_BLOCK_SPACER_HEIGHT;
                            let i = hg.isInputRow(t) && t.hasStatement,
                                s = hg.isInputRow(e) && e.hasStatement;
                            return s || i ? (t = Math.max(this.constants_.NOTCH_HEIGHT, this.constants_.INSIDE_CORNERS.rightHeight || 0), s && i ? Math.max(t, this.constants_.DUMMY_INPUT_MIN_HEIGHT) : t) : hg.isTopRow(t) ? t.hasPreviousConnection || this.outputConnection && !this.hasStatementInput ? this.constants_.NO_PADDING : Math.abs(this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS) : hg.isBottomRow(e) ? this.outputConnection ? !e.hasNextConnection && this.hasStatementInput ? Math.abs(this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS) : this.constants_.NO_PADDING : Math.max(this.topRow.minHeight, Math.max(this.constants_.NOTCH_HEIGHT, this.constants_.CORNER_RADIUS)) - this.constants_.CORNER_RADIUS : this.constants_.MEDIUM_PADDING
                        }
                        getSpacerRowWidth_(t, e) {
                            let i = this.width - this.startX;
                            return hg.isInputRow(t) && t.hasStatement || hg.isInputRow(e) && e.hasStatement ? Math.max(i, this.constants_.STATEMENT_INPUT_SPACER_MIN_WIDTH) : i
                        }
                        getElemCenterline_(t, e) {
                            if (t.hasStatement && !hg.isSpacer(e) && !hg.isStatementInput(e)) return t.yPos + this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT / 2;
                            if (hg.isInlineInput(e) && e instanceof hE) {
                                let i = e.connectedBlock;
                                if (i && i.outputConnection && i.nextConnection) return t.yPos + i.height / 2
                            }
                            return super.getElemCenterline_(t, e)
                        }
                        addInput_(t, e) {
                            if ((t instanceof hX || t instanceof hY) && e.hasDummyInput && e.align === r.Align$$module$build$src$core$inputs$align.LEFT && t.align === r.Align$$module$build$src$core$inputs$align.RIGHT) this.rightAlignedDummyInputs.set(e, t);
                            else if (t instanceof hK) {
                                e.elements.push(new u_(this.constants_, t)), e.hasStatement = !0, null === e.align && (e.align = t.align);
                                return
                            }
                            super.addInput_(t, e)
                        }
                        addAlignmentPadding_(t, e) {
                            if (this.rightAlignedDummyInputs.get(t)) {
                                let i;
                                for (let e = 0; e < t.elements.length; e++) {
                                    let s = t.elements[e];
                                    if (hg.isSpacer(s) && (i = s), hg.isField(s) && s instanceof hk && s.parentInput === this.rightAlignedDummyInputs.get(t)) break
                                }
                                if (i) {
                                    i.width += e, t.width += e;
                                    return
                                }
                            }
                            super.addAlignmentPadding_(t, e)
                        }
                        adjustXPosition_() {
                            let t = this.constants_.NOTCH_OFFSET_LEFT + this.constants_.NOTCH_WIDTH,
                                e = t;
                            for (let o = 2; o < this.rows.length - 1; o += 2) {
                                var i = this.rows[o - 1];
                                let n = this.rows[o];
                                var s = this.rows[o + 1];
                                if (i = 2 === o ? !!this.topRow.hasPreviousConnection : !!i.followsStatement, s = o + 2 >= this.rows.length - 1 ? !!this.bottomRow.hasNextConnection : !!s.precedesStatement, hg.isInputRow(n) && n.hasStatement) {
                                    let i, s;
                                    n.measure(), e = n.width - (null != (s = null == (i = n.getLastInput()) ? void 0 : i.width) ? s : 0) + t
                                } else if (i && (2 === o || s) && hg.isInputRow(n) && !n.hasStatement) {
                                    s = n.xPos, i = null;
                                    for (let t = 0; t < n.elements.length; t++) {
                                        let o = n.elements[t];
                                        hg.isSpacer(o) && (i = o), i && (hg.isField(o) || hg.isInput(o)) && s < e && !(hg.isField(o) && o instanceof hk && (o.field instanceof hF || o.field instanceof ud)) && (i.width += e - s), s += o.width
                                    }
                                }
                            }
                        }
                        finalizeOutputConnection_() {
                            if (this.outputConnection && this.outputConnection.isDynamicShape) {
                                var t = this.outputConnection.shape;
                                if ("isDynamic" in t && t.isDynamic) {
                                    for (var e = 0, i = 0; i < this.rows.length; i++) {
                                        let t = this.rows[i];
                                        t.yPos = e, e += t.height
                                    }
                                    this.height = e, i = this.bottomRow.hasNextConnection ? this.height - this.bottomRow.descenderHeight : this.height, e = t.height(i), i = t.width(i), this.outputConnection.height = e, this.outputConnection.width = i, this.outputConnection.startX = i, this.outputConnection.connectionOffsetY = t.connectionOffsetY(e), this.outputConnection.connectionOffsetX = t.connectionOffsetX(i), t = 0, this.hasStatementInput || this.bottomRow.hasNextConnection || (t = i, this.rightSide.height = e, this.rightSide.width = t, this.rightSide.centerline = e / 2, this.rightSide.xPos = this.width + t), this.startX = i, this.width += i + t, this.widthWithChildren += i + t
                                }
                            }
                        }
                        finalizeHorizontalAlignment_() {
                            if (this.outputConnection && !this.hasStatementInput && !this.bottomRow.hasNextConnection) {
                                for (var t = 0, e = 0; e < this.rows.length; e++) {
                                    var i = this.rows[e];
                                    if (!hg.isInputRow(i)) continue;
                                    t = i.elements[i.elements.length - 2];
                                    let s = this.getNegativeSpacing_(i.elements[1]),
                                        o = this.getNegativeSpacing_(t);
                                    t = s + o;
                                    let n = this.constants_.MIN_BLOCK_WIDTH + 2 * this.outputConnection.width;
                                    this.width - t < n && (s = (t = this.width - n) / 2, o = t / 2), i.elements.unshift(new h$(this.constants_, -s)), i.elements.push(new h$(this.constants_, -o))
                                }
                                if (t)
                                    for (this.width -= t, this.widthWithChildren -= t, this.rightSide.xPos -= t, e = 0; e < this.rows.length; e++) i = this.rows[e], hg.isTopOrBottomRow(i) && (i.elements[1].width -= t), i.width -= t, i.widthWithConnectedBlocks -= t
                            }
                        }
                        getNegativeSpacing_(t) {
                            if (!t || !this.outputConnection) return 0;
                            let e = this.outputConnection.width;
                            var i = this.outputConnection.shape.type;
                            let s = this.constants_;
                            if (1 < this.inputRows.length) return i === s.SHAPES.ROUND ? (i = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH, e - (i = this.height / 2 > i ? i : this.height / 2) * (1 - Math.sin(Math.acos((i - this.constants_.SMALL_PADDING) / i)))) : 0;
                            if (hg.isInlineInput(t) && t instanceof hE) {
                                let o = t.connectedBlock;
                                return null == (t = o ? o.pathObject.outputShapeType : t.shape.type) || o && o.outputConnection && (o.statementInputCount || o.nextConnection) || i === s.SHAPES.HEXAGONAL && i !== t ? 0 : e - this.constants_.SHAPE_IN_SHAPE_PADDING[i][t]
                            }
                            return hg.isField(t) && t instanceof hk ? i === s.SHAPES.ROUND && t.field instanceof ug ? e - 2.75 * s.GRID_UNIT : e - this.constants_.SHAPE_IN_SHAPE_PADDING[i][0] : hg.isIcon(t) ? this.constants_.SMALL_PADDING : 0
                        }
                        finalizeVerticalAlignment_() {
                            if (!this.outputConnection)
                                for (let s = 2; s < this.rows.length - 1; s += 2) {
                                    let o = this.rows[s - 1],
                                        n = this.rows[s],
                                        r = this.rows[s + 1];
                                    var t = 2 === s,
                                        e = s + 2 >= this.rows.length - 1 ? !!this.bottomRow.hasNextConnection : !!r.precedesStatement;
                                    if (t ? this.topRow.hasPreviousConnection : o.followsStatement) {
                                        var i = n.elements[1];
                                        if (i = 3 === n.elements.length && i instanceof hk && (i.field instanceof hF || i.field instanceof ud), !t && i) o.height -= this.constants_.SMALL_PADDING, r.height -= this.constants_.SMALL_PADDING, n.height -= this.constants_.MEDIUM_PADDING;
                                        else if (t || e) {
                                            if (e) {
                                                for (e = 0, t = !1; e < n.elements.length; e++)
                                                    if ((i = n.elements[e]) instanceof hE && hg.isInlineInput(i) && i.connectedBlock && !i.connectedBlock.isShadow() && 40 <= i.connectedBlock.getHeightWidth().height) {
                                                        t = !0;
                                                        break
                                                    } t && (o.height -= this.constants_.SMALL_PADDING, r.height -= this.constants_.SMALL_PADDING)
                                            }
                                        } else o.height += this.constants_.SMALL_PADDING
                                    }
                                }
                        }
                        finalize_() {
                            this.finalizeOutputConnection_(), this.finalizeHorizontalAlignment_(), this.finalizeVerticalAlignment_(), super.finalize_(), this.rightSide && (this.widthWithChildren += this.rightSide.width)
                        }
                    },
                    uT = class extends hq {
                        constructor(t, e, i) {
                            super(t, e, i), this.markerCircle = null
                        }
                        showWithInputOutput(t) {
                            let e = t.getSourceBlock();
                            t = t.getLocation().getOffsetInBlock(), this.positionCircle(t.x, t.y), this.setParent_(e), this.showCurrent_()
                        }
                        showWithOutput_(t) {
                            this.showWithInputOutput(t)
                        }
                        showWithInput_(t) {
                            this.showWithInputOutput(t)
                        }
                        showWithBlock_(t) {
                            t = t.getLocation();
                            let e = t.getHeightWidth();
                            this.positionRect_(0, 0, e.width, e.height), this.setParent_(t), this.showCurrent_()
                        }
                        positionCircle(t, e) {
                            let i, s;
                            null == (i = this.markerCircle) || i.setAttribute("cx", `${t}`), null == (s = this.markerCircle) || s.setAttribute("cy", `${e}`), this.currentMarkerSvg = this.markerCircle
                        }
                        hide() {
                            super.hide(), this.markerCircle && (this.markerCircle.style.display = "none")
                        }
                        createDomInternal_() {
                            if (super.createDomInternal_(), this.markerCircle = tu(rp.CIRCLE, {
                                    r: this.constants_.CURSOR_RADIUS,
                                    "stroke-width": this.constants_.CURSOR_STROKE_WIDTH
                                }, this.markerSvg_), this.hide(), this.isCursor()) {
                                let t = this.getBlinkProperties_();
                                tu(rp.ANIMATE, t, this.markerCircle)
                            }
                            return this.markerSvg_
                        }
                        applyColour_(t) {
                            let e, i;
                            if (super.applyColour_(t), null == (e = this.markerCircle) || e.setAttribute("fill", this.colour_), null == (i = this.markerCircle) || i.setAttribute("stroke", this.colour_), this.isCursor()) {
                                let e;
                                t = this.colour_ + ";transparent;transparent;", null == (e = this.markerCircle) || e.firstElementChild.setAttribute("values", t)
                            }
                        }
                    },
                    uk = class extends hQ {
                        constructor(t, e, i) {
                            super(t, e, i), this.svgPathSelected = null, this.outlines = new Map, this.remainingOutlines = new Set, this.outputShapeType = null, this.constants = i
                        }
                        setPath(t) {
                            super.setPath(t), this.svgPathSelected && this.svgPathSelected.setAttribute("d", t)
                        }
                        applyColour(t) {
                            super.applyColour(t);
                            let e = t.getParent();
                            for (let i of (t.isShadow() && e && this.svgPath.setAttribute("stroke", e.style.colourTertiary), this.outlines.values())) i.setAttribute("fill", this.style.colourTertiary)
                        }
                        flipRTL() {
                            for (let t of (super.flipRTL(), this.outlines.values())) t.setAttribute("transform", "scale(-1 1)")
                        }
                        updateSelected(t) {
                            this.setClass_("blocklySelected", t), t ? this.svgPathSelected || (this.svgPathSelected = this.svgPath.cloneNode(!0), this.svgPathSelected.setAttribute("fill", "none"), this.svgPathSelected.setAttribute("filter", "url(#" + this.constants.selectedGlowFilterId + ")"), this.svgRoot.appendChild(this.svgPathSelected)) : this.svgPathSelected && (this.svgRoot.removeChild(this.svgPathSelected), this.svgPathSelected = null)
                        }
                        updateReplacementFade(t) {
                            this.setClass_("blocklyReplaceable", t), t ? this.svgPath.setAttribute("filter", "url(#" + this.constants.replacementGlowFilterId + ")") : this.svgPath.removeAttribute("filter")
                        }
                        updateShapeForInputHighlight(t, e) {
                            t = t.getParentInput().name, (t = this.getOutlinePath(t)) && (e ? t.setAttribute("filter", "url(#" + this.constants.replacementGlowFilterId + ")") : t.removeAttribute("filter"))
                        }
                        beginDrawing() {
                            for (let t of (this.remainingOutlines.clear(), this.outlines.keys())) this.remainingOutlines.add(t)
                        }
                        endDrawing() {
                            if (this.remainingOutlines.size)
                                for (let t of this.remainingOutlines) this.removeOutlinePath(t);
                            this.remainingOutlines.clear()
                        }
                        setOutlinePath(t, e) {
                            (t = this.getOutlinePath(t)).setAttribute("d", e), t.setAttribute("fill", this.style.colourTertiary)
                        }
                        getOutlinePath(t) {
                            return this.outlines.has(t) || this.outlines.set(t, tu(rp.PATH, {
                                class: "blocklyOutlinePath",
                                d: ""
                            }, this.svgRoot)), this.remainingOutlines.delete(t), this.outlines.get(t)
                        }
                        removeOutlinePath(t) {
                            let e, i;
                            null == (e = this.outlines.get(t)) || null == (i = e.parentNode) || i.removeChild(this.outlines.get(t)), this.outlines.delete(t)
                        }
                    },
                    uw = class extends h8 {
                        constructor(t) {
                            super(t)
                        }
                        makeConstants_() {
                            return new uc
                        }
                        makeRenderInfo_(t) {
                            return new uE(this, t)
                        }
                        makeDrawer_(t, e) {
                            return new uu(t, e)
                        }
                        makeMarkerDrawer(t, e) {
                            return new uT(t, this.getConstants(), e)
                        }
                        makePathObject(t, e) {
                            return new uk(t, e, this.getConstants())
                        }
                        getConstants() {
                            return this.constants_
                        }
                        shouldHighlightConnection(t) {
                            return t.type !== lx.INPUT_VALUE && t.type !== lx.OUTPUT_VALUE
                        }
                        getConnectionPreviewMethod(t, e, i) {
                            return e.type === lx.OUTPUT_VALUE ? t.isConnected() ? h5.PREVIEW_TYPE.REPLACEMENT_FADE : h5.PREVIEW_TYPE.INPUT_OUTLINE : super.getConnectionPreviewMethod(t, e, i)
                        }
                    };
                os("zelos", uw);
                var uy = {};
                uy.BottomRow = ub, uy.ConstantProvider = uc, uy.Drawer = uu, uy.MarkerSvg = uT, uy.PathObject = uk, uy.RenderInfo = uE, uy.Renderer = uw, uy.RightConnectionShape = um, uy.StatementInput = u_, uy.TopRow = uf, oY();
                var u$ = {};
                u$.registerCleanup = oD, u$.registerCollapse = oN, u$.registerCollapseExpandBlock = oU, u$.registerComment = oH, u$.registerDefaultOptions = oY, u$.registerDelete = oV, u$.registerDeleteAll = oB, u$.registerDisable = oW, u$.registerDuplicate = oF, u$.registerExpand = oO, u$.registerHelp = oz, u$.registerInline = oG, u$.registerRedo = oR, u$.registerUndo = oS;
                var uC = class extends up {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.clockwise = uC.CLOCKWISE, this.offset = uC.OFFSET, this.wrap = uC.WRAP, this.round = uC.ROUND, this.boundEvents = [], this.symbol_ = this.gauge = this.line = null, t !== aQ.SKIP_SETUP && (i && this.configure_(i), this.setValue(t), e && this.setValidator(e))
                    }
                    configure_(t) {
                        switch (super.configure_(t), t.mode) {
                            case o.COMPASS:
                                this.clockwise = !0, this.offset = 90;
                                break;
                            case o.PROTRACTOR:
                                this.clockwise = !1, this.offset = 0
                        }
                        t.clockwise && (this.clockwise = t.clockwise), t.offset && (this.offset = t.offset), t.wrap && (this.wrap = t.wrap), t.round && (this.round = t.round)
                    }
                    initView() {
                        super.initView(), this.symbol_ = tu(rp.TSPAN, {}), this.symbol_.appendChild(document.createTextNode("\xb0")), this.getTextElement().appendChild(this.symbol_)
                    }
                    render_() {
                        super.render_(), this.updateGraph()
                    }
                    showEditor_(t) {
                        super.showEditor_(t, nY || nW || nV), t = this.dropdownCreate(), iD().appendChild(t), this.sourceBlock_ instanceof ck && iN(this.sourceBlock_.style.colourPrimary, this.sourceBlock_.style.colourTertiary), iO(this, this.dropdownDispose.bind(this)), this.updateGraph()
                    }
                    dropdownCreate() {
                        let t = tu(rp.SVG, {
                            xmlns: rr,
                            "xmlns:html": rl,
                            "xmlns:xlink": ra,
                            version: "1.1",
                            height: 2 * uC.HALF + "px",
                            width: 2 * uC.HALF + "px"
                        });
                        t.style.touchAction = "none";
                        let e = tu(rp.CIRCLE, {
                            cx: uC.HALF,
                            cy: uC.HALF,
                            r: uC.RADIUS,
                            class: "blocklyAngleCircle"
                        }, t);
                        this.gauge = tu(rp.PATH, {
                            class: "blocklyAngleGauge"
                        }, t), this.line = tu(rp.LINE, {
                            x1: uC.HALF,
                            y1: uC.HALF,
                            class: "blocklyAngleLine"
                        }, t);
                        for (let e = 0; 360 > e; e += 15) tu(rp.LINE, {
                            x1: uC.HALF + uC.RADIUS,
                            y1: uC.HALF,
                            x2: uC.HALF + uC.RADIUS - (0 == e % 45 ? 10 : 5),
                            y2: uC.HALF,
                            class: "blocklyAngleMarks",
                            transform: "rotate(" + e + "," + uC.HALF + "," + uC.HALF + ")"
                        }, t);
                        return this.boundEvents.push(tt(t, "click", this, this.hide)), this.boundEvents.push(tt(e, "pointerdown", this, this.onMouseMove_, !0)), this.boundEvents.push(tt(e, "pointermove", this, this.onMouseMove_, !0)), t
                    }
                    dropdownDispose() {
                        for (let t of this.boundEvents) ti(t);
                        this.boundEvents.length = 0, this.line = this.gauge = null
                    }
                    hide() {
                        iU(this), io()
                    }
                    onMouseMove_(t) {
                        var e = this.gauge.ownerSVGElement.getBoundingClientRect();
                        let i = t.clientX - e.left - uC.HALF;
                        isNaN(e = Math.atan(-(t = t.clientY - e.top - uC.HALF) / i)) || (e = iC(e), 0 > i ? e += 180 : 0 < t && (e += 360), e = this.clockwise ? this.offset + 360 - e : 360 - (this.offset - e), this.displayMouseOrKeyboardValue(e))
                    }
                    displayMouseOrKeyboardValue(t) {
                        if (this.round && (t = Math.round(t / this.round) * this.round), (t = this.wrapValue(t)) !== this.value_) {
                            let e = this.value_;
                            this.setEditorValue_(t, !1), this.sourceBlock_ && W() && this.value_ !== e && F(new(X(nr))(this.sourceBlock_, this.name || null, e, this.value_))
                        }
                    }
                    updateGraph() {
                        if (this.gauge && this.line) {
                            var t = Number(this.getText()) + this.offset,
                                e = i$(t % 360);
                            t = ["M ", uC.HALF, ",", uC.HALF];
                            var i = uC.HALF,
                                s = uC.HALF;
                            if (!isNaN(e)) {
                                let o = Number(this.clockwise),
                                    n = i$(this.offset),
                                    r = Math.cos(n) * uC.RADIUS,
                                    l = -(Math.sin(n) * uC.RADIUS);
                                o && (e = 2 * n - e), i += Math.cos(e) * uC.RADIUS, s -= Math.sin(e) * uC.RADIUS, e = Math.abs(Math.floor((e - n) / Math.PI) % 2), o && (e = 1 - e), t.push(" l ", r, ",", l, " A ", uC.RADIUS, ",", uC.RADIUS, " 0 ", e, " ", o, " ", i, ",", s, " z")
                            }
                            this.gauge.setAttribute("d", t.join("")), this.line.setAttribute("x2", `${i}`), this.line.setAttribute("y2", `${s}`)
                        }
                    }
                    onHtmlInputKeyDown_(t) {
                        super.onHtmlInputKeyDown_(t);
                        var e = this.getSourceBlock();
                        if (!e) throw new a0;
                        let i = 0;
                        switch (t.key) {
                            case "ArrowLeft":
                                i = e.RTL ? 1 : -1;
                                break;
                            case "ArrowRight":
                                i = e.RTL ? -1 : 1;
                                break;
                            case "ArrowDown":
                                i = -1;
                                break;
                            case "ArrowUp":
                                i = 1
                        }
                        i && (e = this.getValue(), this.displayMouseOrKeyboardValue(e + i * this.round), t.preventDefault(), t.stopPropagation())
                    }
                    doClassValidation_(t) {
                        return isNaN(t = Number(t)) || !isFinite(t) ? null : this.wrapValue(t)
                    }
                    wrapValue(t) {
                        return 0 > (t %= 360) && (t += 360), t > this.wrap && (t -= 360), t
                    }
                    static fromJson(t) {
                        return new this(t.angle, void 0, t)
                    }
                };
                uC.HALF = 50, uC.RADIUS = uC.HALF - 1, uC.CLOCKWISE = !1, uC.OFFSET = 0, uC.WRAP = 360, uC.ROUND = 15, sD("field_angle", uC), uC.prototype.DEFAULT_VALUE = 0, ta("\n.blocklyAngleCircle {\n  stroke: #444;\n  stroke-width: 1;\n  fill: #ddd;\n  fill-opacity: 0.8;\n}\n\n.blocklyAngleMarks {\n  stroke: #444;\n  stroke-width: 1;\n}\n\n.blocklyAngleGauge {\n  fill: #f88;\n  fill-opacity: 0.8;\n  pointer-events: none;\n}\n\n.blocklyAngleLine {\n  stroke: #f00;\n  stroke-width: 2;\n  stroke-linecap: round;\n  pointer-events: none;\n}\n"), (e = o || (o = {})).COMPASS = "compass", e.PROTRACTOR = "protractor";
                var uv = {};
                uv.FieldAngle = uC, uv.Mode = o;
                var uI = class extends aQ {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.SERIALIZABLE = !0, this.CURSOR = "default", this.value_ = this.value_, this.checkChar = uI.CHECK_CHAR, t !== aQ.SKIP_SETUP && (i && this.configure_(i), this.setValue(t), e && this.setValidator(e))
                    }
                    configure_(t) {
                        super.configure_(t), t.checkCharacter && (this.checkChar = t.checkCharacter)
                    }
                    saveState() {
                        let t = this.saveLegacyState(uI);
                        return null !== t ? t : this.getValueBoolean()
                    }
                    initView() {
                        super.initView();
                        let t = this.getTextElement();
                        td(t, "blocklyCheckbox"), t.style.display = this.value_ ? "block" : "none"
                    }
                    render_() {
                        this.textContent_ && (this.textContent_.nodeValue = this.getDisplayText_()), this.updateSize_(this.getConstants().FIELD_CHECKBOX_X_OFFSET)
                    }
                    getDisplayText_() {
                        return this.checkChar
                    }
                    setCheckCharacter(t) {
                        this.checkChar = t || uI.CHECK_CHAR, this.forceRerender()
                    }
                    showEditor_() {
                        this.setValue(!this.value_)
                    }
                    doClassValidation_(t) {
                        return !0 === t || "TRUE" === t ? "TRUE" : !1 === t || "FALSE" === t ? "FALSE" : null
                    }
                    doValueUpdate_(t) {
                        this.value_ = this.convertValueToBool_(t), this.textElement_ && (this.textElement_.style.display = this.value_ ? "block" : "none")
                    }
                    getValue() {
                        return this.value_ ? "TRUE" : "FALSE"
                    }
                    getValueBoolean() {
                        return this.value_
                    }
                    getText() {
                        return String(this.convertValueToBool_(this.value_))
                    }
                    convertValueToBool_(t) {
                        return "string" == typeof t ? "TRUE" === t : !!t
                    }
                    static fromJson(t) {
                        return new this(t.checked, void 0, t)
                    }
                };
                uI.CHECK_CHAR = "✓", sD("field_checkbox", uI), uI.prototype.DEFAULT_VALUE = !1;
                var uS = class extends aQ {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.highlightedIndex = this.picker = null, this.boundEvents = [], this.SERIALIZABLE = !0, this.CURSOR = "default", this.isDirty_ = !1, this.titles = this.colours = null, this.columns = 0, t !== aQ.SKIP_SETUP && (i && this.configure_(i), this.setValue(t), e && this.setValidator(e))
                    }
                    configure_(t) {
                        super.configure_(t), t.colourOptions && (this.colours = t.colourOptions), t.colourTitles && (this.titles = t.colourTitles), t.columns && (this.columns = t.columns)
                    }
                    initView() {
                        this.size_ = new rb(this.getConstants().FIELD_COLOUR_DEFAULT_WIDTH, this.getConstants().FIELD_COLOUR_DEFAULT_HEIGHT), this.createBorderRect_(), this.getBorderRect().style.fillOpacity = "1", this.getBorderRect().setAttribute("stroke", "#fff"), this.isFullBlockField() && (this.clickTarget_ = this.sourceBlock_.getSvgRoot())
                    }
                    isFullBlockField() {
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        let e = this.getConstants();
                        return t.isSimpleReporter() && !(null == e || !e.FIELD_COLOUR_FULL_BLOCK)
                    }
                    applyColour() {
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        if (this.fieldGroup_) {
                            var e = this.borderRect_;
                            if (!e) throw Error("The border rect has not been initialized");
                            this.isFullBlockField() ? (e.style.display = "none", t.pathObject.svgPath.setAttribute("fill", this.getValue()), t.pathObject.svgPath.setAttribute("stroke", "#fff")) : (e.style.display = "block", e.style.fill = this.getValue())
                        }
                    }
                    getSize() {
                        let t;
                        return (null == (t = this.getConstants()) ? 0 : t.FIELD_COLOUR_FULL_BLOCK) && (this.render_(), this.isDirty_ = !1), super.getSize()
                    }
                    render_() {
                        super.render_();
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        t.applyColour()
                    }
                    updateSize_(t) {
                        var e = this.getConstants();
                        this.isFullBlockField() ? (t = 2 * (null != t ? t : 0), e = e.FIELD_TEXT_HEIGHT) : (t = e.FIELD_COLOUR_DEFAULT_WIDTH, e = e.FIELD_COLOUR_DEFAULT_HEIGHT), this.size_.height = e, this.size_.width = t, this.positionBorderRect_()
                    }
                    doClassValidation_(t) {
                        return "string" != typeof t ? null : sf(t)
                    }
                    getText() {
                        let t = this.value_;
                        return /^#(.)\1(.)\2(.)\3$/.test(t) && (t = "#" + t[1] + t[3] + t[5]), t
                    }
                    setColours(t, e) {
                        return this.colours = t, e && (this.titles = e), this
                    }
                    setColumns(t) {
                        return this.columns = t, this
                    }
                    showEditor_() {
                        this.dropdownCreate(), iD().appendChild(this.picker), iO(this, this.dropdownDispose.bind(this)), this.picker.focus({
                            preventScroll: !0
                        })
                    }
                    onClick(t) {
                        null !== (t = (t = t.target) && t.getAttribute("data-colour")) && (this.setValue(t), iU(this))
                    }
                    onKeyDown(t) {
                        var e;
                        let i = !0;
                        switch (t.key) {
                            case "ArrowUp":
                                this.moveHighlightBy(0, -1);
                                break;
                            case "ArrowDown":
                                this.moveHighlightBy(0, 1);
                                break;
                            case "ArrowLeft":
                                this.moveHighlightBy(-1, 0);
                                break;
                            case "ArrowRight":
                                this.moveHighlightBy(1, 0);
                                break;
                            case "Enter":
                                (e = this.getHighlighted()) && null !== (e = e.getAttribute("data-colour")) && this.setValue(e), iV();
                                break;
                            default:
                                i = !1
                        }
                        i && t.stopPropagation()
                    }
                    moveHighlightBy(t, e) {
                        if (this.highlightedIndex) {
                            var i = this.colours || uS.COLOURS,
                                s = this.columns || uS.COLUMNS,
                                o = this.highlightedIndex % s,
                                n = Math.floor(this.highlightedIndex / s);
                            o += t, n += e, 0 > t ? 0 > o && 0 < n ? (o = s - 1, n--) : 0 > o && (o = 0) : 0 < t ? o > s - 1 && n < Math.floor(i.length / s) - 1 ? (o = 0, n++) : o > s - 1 && o-- : 0 > e ? 0 > n && (n = 0) : 0 < e && n > Math.floor(i.length / s) - 1 && (n = Math.floor(i.length / s) - 1), this.setHighlightedCell(this.picker.childNodes[n].childNodes[o], n * s + o)
                        }
                    }
                    onMouseMove(t) {
                        let e = (t = t.target) && Number(t.getAttribute("data-index"));
                        null !== e && e !== this.highlightedIndex && this.setHighlightedCell(t, e)
                    }
                    onMouseEnter() {
                        let t;
                        null == (t = this.picker) || t.focus({
                            preventScroll: !0
                        })
                    }
                    onMouseLeave() {
                        var t;
                        null == (t = this.picker) || t.blur(), (t = this.getHighlighted()) && tg(t, "blocklyColourHighlighted")
                    }
                    getHighlighted() {
                        if (!this.highlightedIndex) return null;
                        let t = this.columns || uS.COLUMNS,
                            e = this.picker.childNodes[Math.floor(this.highlightedIndex / t)];
                        return e ? e.childNodes[this.highlightedIndex % t] : null
                    }
                    setHighlightedCell(t, e) {
                        let i = this.getHighlighted();
                        i && tg(i, "blocklyColourHighlighted"), td(t, "blocklyColourHighlighted"), this.highlightedIndex = e, (t = t.getAttribute("id")) && this.picker && it(this.picker, lG.ACTIVEDESCENDANT, t)
                    }
                    dropdownCreate() {
                        let t;
                        let e = this.columns || uS.COLUMNS,
                            i = this.colours || uS.COLOURS,
                            s = this.titles || uS.TITLES,
                            o = this.getValue(),
                            n = document.createElement("table");
                        n.className = "blocklyColourTable", n.tabIndex = 0, n.dir = "ltr", e7(n, lL.GRID), it(n, lG.EXPANDED, !0), it(n, lG.ROWCOUNT, Math.floor(i.length / e)), it(n, lG.COLCOUNT, e);
                        for (let r = 0; r < i.length; r++) {
                            0 == r % e && (e7(t = document.createElement("tr"), lL.ROW), n.appendChild(t));
                            let l = document.createElement("td");
                            t.appendChild(l), l.setAttribute("data-colour", i[r]), l.title = s[r] || i[r], l.id = L(), l.setAttribute("data-index", `${r}`), e7(l, lL.GRIDCELL), it(l, lG.LABEL, i[r]), it(l, lG.SELECTED, i[r] === o), l.style.backgroundColor = i[r], i[r] === o && (l.className = "blocklyColourSelected", this.highlightedIndex = r)
                        }
                        this.boundEvents.push(tt(n, "pointerdown", this, this.onClick, !0)), this.boundEvents.push(tt(n, "pointermove", this, this.onMouseMove, !0)), this.boundEvents.push(tt(n, "pointerenter", this, this.onMouseEnter, !0)), this.boundEvents.push(tt(n, "pointerleave", this, this.onMouseLeave, !0)), this.boundEvents.push(tt(n, "keydown", this, this.onKeyDown, !1)), this.picker = n
                    }
                    dropdownDispose() {
                        for (let t of this.boundEvents) ti(t);
                        this.boundEvents.length = 0, this.highlightedIndex = this.picker = null
                    }
                    static fromJson(t) {
                        return new this(t.colour, void 0, t)
                    }
                };
                uS.COLOURS = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "), uS.TITLES = [], uS.COLUMNS = 7, uS.prototype.DEFAULT_VALUE = uS.COLOURS[0], sD("field_colour", uS), ta("\n.blocklyColourTable {\n  border-collapse: collapse;\n  display: block;\n  outline: none;\n  padding: 1px;\n}\n\n.blocklyColourTable>tr>td {\n  border: 0.5px solid #888;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 20px;\n  padding: 0;\n  width: 20px;\n}\n\n.blocklyColourTable>tr>td.blocklyColourHighlighted {\n  border-color: #eee;\n  box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n\n.blocklyColourSelected, .blocklyColourSelected:hover {\n  border-color: #eee !important;\n  outline: 1px solid #333;\n  position: relative;\n}\n");
                var uR = class extends hF {
                    constructor(t, e, i) {
                        super(String(null != t ? t : ""), e, i), this.EDITABLE = !1, this.SERIALIZABLE = !0
                    }
                    static fromJson(t) {
                        return new this(sv(t.text), void 0, t)
                    }
                };
                sD("field_label_serializable", uR);
                var uD = class extends ug {
                    constructor(t, e, i) {
                        super(aQ.SKIP_SETUP), this.textGroup = null, this.maxLines_ = 1 / 0, this.isOverflowedY_ = !1, t !== aQ.SKIP_SETUP && (i && this.configure_(i), this.setValue(t), e && this.setValidator(e))
                    }
                    configure_(t) {
                        super.configure_(t), t.maxLines && this.setMaxLines(t.maxLines)
                    }
                    toXml(t) {
                        return t.textContent = this.getValue().replace(/\n/g, "&#10;"), t
                    }
                    fromXml(t) {
                        this.setValue(t.textContent.replace(/&#10;/g, "\n"))
                    }
                    saveState() {
                        let t = this.saveLegacyState(uD);
                        return null !== t ? t : this.getValue()
                    }
                    loadState(t) {
                        this.loadLegacyState(aQ, t) || this.setValue(t)
                    }
                    initView() {
                        this.createBorderRect_(), this.textGroup = tu(rp.G, {
                            class: "blocklyEditableText"
                        }, this.fieldGroup_)
                    }
                    getDisplayText_() {
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        let e = this.getText();
                        if (!e) return aQ.NBSP;
                        let i = e.split("\n");
                        e = "";
                        let s = this.isOverflowedY_ ? this.maxLines_ : i.length;
                        for (let t = 0; t < s; t++) {
                            let o = i[t];
                            o.length > this.maxDisplayLength ? o = o.substring(0, this.maxDisplayLength - 4) + "..." : this.isOverflowedY_ && t === s - 1 && (o = o.substring(0, o.length - 3) + "..."), e += o = o.replace(/\s/g, aQ.NBSP), t !== s - 1 && (e += "\n")
                        }
                        return t.RTL && (e += "‏"), e
                    }
                    doValueUpdate_(t) {
                        super.doValueUpdate_(t), null !== this.value_ && (this.isOverflowedY_ = this.value_.split("\n").length > this.maxLines_)
                    }
                    render_() {
                        var t = this.getSourceBlock();
                        if (!t) throw new a0;
                        for (var e, i = this.textGroup; e = i.firstChild;) i.removeChild(e);
                        e = this.getDisplayText_().split("\n");
                        let s = 0;
                        for (let t = 0; t < e.length; t++) {
                            let o = this.getConstants().FIELD_TEXT_HEIGHT + this.getConstants().FIELD_BORDER_RECT_Y_PADDING;
                            tu(rp.TEXT, {
                                class: "blocklyText blocklyMultilineText",
                                x: this.getConstants().FIELD_BORDER_RECT_X_PADDING,
                                y: s + this.getConstants().FIELD_BORDER_RECT_Y_PADDING,
                                dy: this.getConstants().FIELD_TEXT_BASELINE
                            }, i).appendChild(document.createTextNode(e[t])), s += o
                        }
                        this.isBeingEdited_ && (i = this.htmlInput_, this.isOverflowedY_ ? td(i, "blocklyHtmlTextAreaInputOverflowedY") : tg(i, "blocklyHtmlTextAreaInputOverflowedY")), this.updateSize_(), this.isBeingEdited_ && (t.RTL ? setTimeout(this.resizeEditor_.bind(this), 0) : this.resizeEditor_(), t = this.htmlInput_, this.isTextValid_ ? (tg(t, "blocklyInvalidInput"), it(t, lG.INVALID, !1)) : (td(t, "blocklyInvalidInput"), it(t, lG.INVALID, !0)))
                    }
                    updateSize_() {
                        var t = this.textGroup.childNodes;
                        let e = this.getConstants().FIELD_TEXT_FONTSIZE,
                            i = this.getConstants().FIELD_TEXT_FONTWEIGHT,
                            s = this.getConstants().FIELD_TEXT_FONTFAMILY,
                            o = 0,
                            n = 0;
                        for (var r = 0; r < t.length; r++) {
                            var l = tT(t[r], e, i, s);
                            l > o && (o = l), n += this.getConstants().FIELD_TEXT_HEIGHT + (0 < r ? this.getConstants().FIELD_BORDER_RECT_Y_PADDING : 0)
                        }
                        if (this.isBeingEdited_) {
                            for (l = 0, t = String(this.value_).split("\n"), r = tu(rp.TEXT, {
                                    class: "blocklyText blocklyMultilineText"
                                }); l < t.length; l++) {
                                t[l].length > this.maxDisplayLength && (t[l] = t[l].substring(0, this.maxDisplayLength)), r.textContent = t[l];
                                let n = tT(r, e, i, s);
                                n > o && (o = n)
                            }
                            o += this.htmlInput_.offsetWidth - this.htmlInput_.clientWidth
                        }
                        this.borderRect_ && (n += 2 * this.getConstants().FIELD_BORDER_RECT_Y_PADDING, o += 2 * this.getConstants().FIELD_BORDER_RECT_X_PADDING, this.borderRect_.setAttribute("width", `${o}`), this.borderRect_.setAttribute("height", `${n}`)), this.size_.width = o, this.size_.height = n, this.positionBorderRect_()
                    }
                    showEditor_(t, e) {
                        super.showEditor_(t, e), this.forceRerender()
                    }
                    widgetCreate_() {
                        let t = ie(),
                            e = this.workspace_.getScale(),
                            i = document.createElement("textarea");
                        i.className = "blocklyHtmlInput blocklyHtmlTextAreaInput", i.setAttribute("spellcheck", String(this.spellcheck_));
                        var s = this.getConstants().FIELD_TEXT_FONTSIZE * e + "pt";
                        t.style.fontSize = s, i.style.fontSize = s, i.style.borderRadius = ug.BORDERRADIUS * e + "px", s = this.getConstants().FIELD_BORDER_RECT_X_PADDING * e;
                        let o = this.getConstants().FIELD_BORDER_RECT_Y_PADDING * e / 2;
                        return i.style.padding = o + "px " + s + "px " + o + "px " + s + "px", s = this.getConstants().FIELD_TEXT_HEIGHT + this.getConstants().FIELD_BORDER_RECT_Y_PADDING, i.style.lineHeight = s * e + "px", t.appendChild(i), i.value = i.defaultValue = this.getEditorText_(this.value_), i.setAttribute("data-untyped-default-value", String(this.value_)), i.setAttribute("data-old-value", ""), nU ? setTimeout(this.resizeEditor_.bind(this), 0) : this.resizeEditor_(), this.bindInputEvents_(i), i
                    }
                    setMaxLines(t) {
                        "number" == typeof t && 0 < t && t !== this.maxLines_ && (this.maxLines_ = t, this.forceRerender())
                    }
                    getMaxLines() {
                        return this.maxLines_
                    }
                    onHtmlInputKeyDown_(t) {
                        "Enter" !== t.key && super.onHtmlInputKeyDown_(t)
                    }
                    static fromJson(t) {
                        return new this(sv(t.text), void 0, t)
                    }
                };
                sD("field_multilinetext", uD), ta("\n.blocklyHtmlTextAreaInput {\n  font-family: monospace;\n  resize: none;\n  overflow: hidden;\n  height: 100%;\n  text-align: left;\n}\n\n.blocklyHtmlTextAreaInputOverflowedY {\n  overflow-y: scroll;\n}\n");
                var uA = class extends up {
                    constructor(t, e, i, s, o, n) {
                        super(aQ.SKIP_SETUP), this.min_ = -1 / 0, this.max_ = 1 / 0, this.precision_ = 0, this.decimalPlaces = null, this.spellcheck_ = !1, t !== aQ.SKIP_SETUP && (n ? this.configure_(n) : this.setConstraints(e, i, s), this.setValue(t), o && this.setValidator(o))
                    }
                    configure_(t) {
                        super.configure_(t), this.setMinInternal(t.min), this.setMaxInternal(t.max), this.setPrecisionInternal(t.precision)
                    }
                    setConstraints(t, e, i) {
                        this.setMinInternal(t), this.setMaxInternal(e), this.setPrecisionInternal(i), this.setValue(this.getValue())
                    }
                    setMin(t) {
                        this.setMinInternal(t), this.setValue(this.getValue())
                    }
                    setMinInternal(t) {
                        null == t ? this.min_ = -1 / 0 : isNaN(t = Number(t)) || (this.min_ = t)
                    }
                    getMin() {
                        return this.min_
                    }
                    setMax(t) {
                        this.setMaxInternal(t), this.setValue(this.getValue())
                    }
                    setMaxInternal(t) {
                        null == t ? this.max_ = 1 / 0 : isNaN(t = Number(t)) || (this.max_ = t)
                    }
                    getMax() {
                        return this.max_
                    }
                    setPrecision(t) {
                        this.setPrecisionInternal(t), this.setValue(this.getValue())
                    }
                    setPrecisionInternal(t) {
                        this.precision_ = Number(t) || 0;
                        let e = String(this.precision_); - 1 !== e.indexOf("e") && (e = this.precision_.toLocaleString("en-US", {
                            maximumFractionDigits: 20
                        }));
                        let i = e.indexOf(".");
                        this.decimalPlaces = -1 === i ? t ? 0 : null : e.length - i - 1
                    }
                    getPrecision() {
                        return this.precision_
                    }
                    doClassValidation_(t) {
                        return null === t || isNaN(t = Number((t = (t = (t = `${t}`.replace(/O/gi, "0")).replace(/,/g, "")).replace(/infinity/i, "Infinity")) || 0)) ? null : (t = Math.min(Math.max(t, this.min_), this.max_), this.precision_ && isFinite(t) && (t = Math.round(t / this.precision_) * this.precision_), null !== this.decimalPlaces && (t = Number(t.toFixed(this.decimalPlaces))), t)
                    }
                    widgetCreate_() {
                        let t = super.widgetCreate_();
                        return -1 / 0 < this.min_ && (t.min = `${this.min_}`, it(t, lG.VALUEMIN, this.min_)), 1 / 0 > this.max_ && (t.max = `${this.max_}`, it(t, lG.VALUEMAX, this.max_)), t
                    }
                    static fromJson(t) {
                        return new this(t.value, void 0, void 0, void 0, void 0, t)
                    }
                };
                sD("field_number", uA), uA.prototype.DEFAULT_VALUE = 0;
                var uN = class extends a9 {
                    constructor(t, e, i, s, o) {
                        super(aQ.SKIP_SETUP), this.defaultType = "", this.variableTypes = [], this.variable = null, this.SERIALIZABLE = !0, this.menuGenerator_ = uN.dropdownCreate, this.defaultVariableName = "string" == typeof t ? t : "", this.size_ = new rb(0, 0), t !== aQ.SKIP_SETUP && (o ? this.configure_(o) : this.setTypes(i, s), e && this.setValidator(e))
                    }
                    configure_(t) {
                        super.configure_(t), this.setTypes(t.variableTypes, t.defaultType)
                    }
                    initModel() {
                        var t = this.getSourceBlock();
                        if (!t) throw new a0;
                        this.variable || (t = r.getOrCreateVariablePackage$$module$build$src$core$variables(t.workspace, null, this.defaultVariableName, this.defaultType), this.doValueUpdate_(t.getId()))
                    }
                    shouldAddBorderRect_() {
                        let t = this.getSourceBlock();
                        if (!t) throw new a0;
                        return super.shouldAddBorderRect_() && (!this.getConstants().FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW || "variables_get" !== t.type)
                    }
                    fromXml(t) {
                        var e = this.getSourceBlock();
                        if (!e) throw new a0;
                        let i = t.getAttribute("id"),
                            s = t.textContent,
                            o = t.getAttribute("variabletype") || t.getAttribute("variableType") || "";
                        if (e = r.getOrCreateVariablePackage$$module$build$src$core$variables(e.workspace, i, s, o), null !== o && o !== e.type) throw Error("Serialized variable type with id '" + e.getId() + "' had type " + e.type + ", and does not match variable field that references it: " + eT(t) + ".");
                        this.setValue(e.getId())
                    }
                    toXml(t) {
                        return this.initModel(), t.id = this.variable.getId(), t.textContent = this.variable.name, this.variable.type && t.setAttribute("variabletype", this.variable.type), t
                    }
                    saveState(t) {
                        var e = this.saveLegacyState(uN);
                        return null !== e || (this.initModel(), e = {
                            id: this.variable.getId()
                        }, t && (e.name = this.variable.name, e.type = this.variable.type)), e
                    }
                    loadState(t) {
                        let e = this.getSourceBlock();
                        if (!e) throw new a0;
                        this.loadLegacyState(uN, t) || (t = r.getOrCreateVariablePackage$$module$build$src$core$variables(e.workspace, t.id || null, t.name, t.type || ""), this.setValue(t.getId()))
                    }
                    setSourceBlock(t) {
                        if (t.isShadow()) throw Error("Variable fields are not allowed to exist on shadow blocks.");
                        super.setSourceBlock(t)
                    }
                    getValue() {
                        return this.variable ? this.variable.getId() : null
                    }
                    getText() {
                        return this.variable ? this.variable.name : ""
                    }
                    getVariable() {
                        return this.variable
                    }
                    getValidator() {
                        return this.variable ? this.validator_ : null
                    }
                    doClassValidation_(t) {
                        if (null === t) return null;
                        var e = this.getSourceBlock();
                        if (!e) throw new a0;
                        return (e = r.getVariable$$module$build$src$core$variables(e.workspace, t)) ? (e = e.type, this.typeIsAllowed(e) ? t : (console.warn("Variable type doesn't match this field!  Type was " + e), null)) : (console.warn("Variable id doesn't point to a real variable! ID was " + t), null)
                    }
                    doValueUpdate_(t) {
                        let e = this.getSourceBlock();
                        if (!e) throw new a0;
                        this.variable = r.getVariable$$module$build$src$core$variables(e.workspace, t), super.doValueUpdate_(t)
                    }
                    typeIsAllowed(t) {
                        let e = this.getVariableTypes();
                        if (!e) return !0;
                        for (let i = 0; i < e.length; i++)
                            if (t === e[i]) return !0;
                        return !1
                    }
                    getVariableTypes() {
                        var t = this.variableTypes;
                        if (null === t && this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying()) return this.sourceBlock_.workspace.getVariableTypes();
                        if (0 === (t = t || [""]).length) throw Error("'variableTypes' of field variable " + (t = this.getText()) + " was an empty list");
                        return t
                    }
                    setTypes(t = null, e = "") {
                        if (Array.isArray(t)) {
                            let i = !1;
                            for (let s = 0; s < t.length; s++) t[s] === e && (i = !0);
                            if (!i) throw Error("Invalid default type '" + e + "' in the definition of a FieldVariable")
                        } else if (null !== t) throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
                        this.defaultType = e, this.variableTypes = t
                    }
                    refreshVariableName() {
                        this.forceRerender()
                    }
                    onItemSelected_(t, e) {
                        if (t = e.getValue(), this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying()) {
                            if (t === aE) {
                                r.renameVariable$$module$build$src$core$variables(this.sourceBlock_.workspace, this.variable);
                                return
                            }
                            if (t === aT) {
                                this.sourceBlock_.workspace.deleteVariableById(this.variable.getId());
                                return
                            }
                        }
                        this.setValue(t)
                    }
                    referencesVariables() {
                        return !0
                    }
                    static fromJson(t) {
                        return new this(sv(t.variable), void 0, void 0, void 0, t)
                    }
                    static dropdownCreate() {
                        if (!this.variable) throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
                        let t = this.getText(),
                            e = [];
                        if (this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying())
                            for (var i = this.getVariableTypes(), s = 0; s < i.length; s++) {
                                let t = this.sourceBlock_.workspace.getVariablesOfType(i[s]);
                                e = e.concat(t)
                            }
                        for (e.sort(rK.compareByName), i = [], s = 0; s < e.length; s++) i[s] = [e[s].name, e[s].getId()];
                        return i.push([r.Msg$$module$build$src$core$msg.RENAME_VARIABLE, aE]), r.Msg$$module$build$src$core$msg.DELETE_VARIABLE && i.push([r.Msg$$module$build$src$core$msg.DELETE_VARIABLE.replace("%1", t), aT]), i
                    }
                };
                sD("field_variable", uN);
                var uO = class {
                    constructor(t, e, i, s) {
                        this.workspace = t, this.targetWorkspace = e, this.isLabel_ = s, this.onMouseUpWrapper = null, this.height = this.width = 0, this.svgText = this.svgGroup = null, this.text = i.text, this.position = new n3(0, 0), this.callbackKey = i.callbackKey || i.callbackkey, this.cssClass = i["web-class"] || null, this.info = i
                    }
                    createDom() {
                        let t;
                        var e = this.isLabel_ ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
                        this.cssClass && (e += " " + this.cssClass), this.svgGroup = tu(rp.G, {
                            class: e
                        }, this.workspace.getCanvas()), this.isLabel_ || (t = tu(rp.RECT, {
                            class: "blocklyFlyoutButtonShadow",
                            rx: uO.BORDER_RADIUS,
                            ry: uO.BORDER_RADIUS,
                            x: 1,
                            y: 1
                        }, this.svgGroup)), e = tu(rp.RECT, {
                            class: this.isLabel_ ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground",
                            rx: uO.BORDER_RADIUS,
                            ry: uO.BORDER_RADIUS
                        }, this.svgGroup);
                        let i = tu(rp.TEXT, {
                            class: this.isLabel_ ? "blocklyFlyoutLabelText" : "blocklyText",
                            x: 0,
                            y: 0,
                            "text-anchor": "middle"
                        }, this.svgGroup);
                        var s = sv(this.text);
                        this.workspace.RTL && (s += "‏"), i.textContent = s, this.isLabel_ && (this.svgText = i, this.workspace.getThemeManager().subscribe(this.svgText, "flyoutForegroundColour", "fill"));
                        let o = tC(i, "fontSize"),
                            n = tC(i, "fontWeight"),
                            r = tC(i, "fontFamily");
                        if (this.width = tk(i, o, n, r), s = tw(s, o, n, r), this.height = s.height, !this.isLabel_) {
                            let e, i;
                            this.width += 2 * uO.TEXT_MARGIN_X, this.height += 2 * uO.TEXT_MARGIN_Y, null == (e = t) || e.setAttribute("width", String(this.width)), null == (i = t) || i.setAttribute("height", String(this.height))
                        }
                        return e.setAttribute("width", String(this.width)), e.setAttribute("height", String(this.height)), i.setAttribute("x", String(this.width / 2)), i.setAttribute("y", String(this.height / 2 - s.height / 2 + s.baseline)), this.updateTransform(), this.onMouseUpWrapper = tt(this.svgGroup, "pointerup", this, this.onMouseUp), this.svgGroup
                    }
                    show() {
                        this.updateTransform(), this.svgGroup.setAttribute("display", "block")
                    }
                    updateTransform() {
                        this.svgGroup.setAttribute("transform", "translate(" + this.position.x + "," + this.position.y + ")")
                    }
                    moveTo(t, e) {
                        this.position.x = t, this.position.y = e, this.updateTransform()
                    }
                    isLabel() {
                        return this.isLabel_
                    }
                    getPosition() {
                        return this.position
                    }
                    getButtonText() {
                        return this.text
                    }
                    getTargetWorkspace() {
                        return this.targetWorkspace
                    }
                    dispose() {
                        this.onMouseUpWrapper && ti(this.onMouseUpWrapper), this.svgGroup && tb(this.svgGroup), this.svgText && this.workspace.getThemeManager().unsubscribe(this.svgText)
                    }
                    onMouseUp(t) {
                        (t = this.targetWorkspace.getGesture(t)) && t.cancel(), this.isLabel_ && this.callbackKey ? console.warn("Labels should not have callbacks. Label text: " + this.text) : this.isLabel_ || this.callbackKey && this.targetWorkspace.getButtonCallback(this.callbackKey) ? this.isLabel_ || (t = this.targetWorkspace.getButtonCallback(this.callbackKey)) && t(this) : console.warn("Buttons should have callbacks. Button text: " + this.text)
                    }
                };
                uO.TEXT_MARGIN_X = 5, uO.TEXT_MARGIN_Y = 2, uO.BORDER_RADIUS = 4, ta("\n.blocklyFlyoutButton {\n  fill: #888;\n  cursor: default;\n}\n\n.blocklyFlyoutButtonShadow {\n  fill: #666;\n}\n\n.blocklyFlyoutButton:hover {\n  fill: #aaa;\n}\n\n.blocklyFlyoutLabel {\n  cursor: default;\n}\n\n.blocklyFlyoutLabelBackground {\n  opacity: 0;\n}\n");
                var ux = class extends cJ {
                    constructor(t, e) {
                        super(t), this.flyout_ = e
                    }
                    getBoundingBox_() {
                        let t;
                        try {
                            t = this.workspace_.getCanvas().getBBox()
                        } catch (e) {
                            t = {
                                height: 0,
                                y: 0,
                                width: 0,
                                x: 0
                            }
                        }
                        return t
                    }
                    getContentMetrics(t) {
                        let e = this.getBoundingBox_();
                        return t = t ? 1 : this.workspace_.scale, {
                            height: e.height * t,
                            width: e.width * t,
                            top: e.y * t,
                            left: e.x * t
                        }
                    }
                    getScrollMetrics(t, e, i) {
                        return e = i || this.getContentMetrics(), i = this.flyout_.MARGIN * this.workspace_.scale, t = t ? this.workspace_.scale : 1, {
                            height: (e.height + 2 * i) / t,
                            width: (e.width + e.left + i) / t,
                            top: 0,
                            left: 0
                        }
                    }
                };
                (s = n || (n = {})).BLOCK = "block", s.BUTTON = "button";
                var uL = class extends cy {
                    constructor(t) {
                        super(), this.horizontalLayout = !1, this.boundEvents = [], this.filterWrapper = this.reflowWrapper = null, this.mats = [], this.buttons_ = [], this.listeners = [], this.permanentlyDisabled = [], this.recycledBlocks = [], this.autoClose = !0, this.isVisible_ = !1, this.containerVisible = !0, this.CORNER_RADIUS = 8, this.SCROLLBAR_MARGIN = 2.5, this.height_ = this.width_ = 0, this.dragAngleRange_ = 70, this.svgGroup_ = this.svgBackground_ = null, t.setMetrics = this.setMetrics_.bind(this), this.workspace_ = new ch(t), this.workspace_.setMetricsManager(new ux(this.workspace_, this)), this.workspace_.internalIsFlyout = !0, this.workspace_.setVisible(this.isVisible_), this.id = M(), this.RTL = !!t.RTL, this.toolboxPosition_ = t.toolboxPosition, this.tabWidth_ = this.workspace_.getRenderer().getConstants().TAB_WIDTH, this.rectMap_ = new WeakMap, this.MARGIN = this.CORNER_RADIUS, this.GAP_X = 3 * this.MARGIN, this.GAP_Y = 3 * this.MARGIN
                    }
                    createDom(t) {
                        return this.svgGroup_ = tu(t, {
                            class: "blocklyFlyout"
                        }), this.svgGroup_.style.display = "none", this.svgBackground_ = tu(rp.PATH, {
                            class: "blocklyFlyoutBackground"
                        }, this.svgGroup_), this.svgGroup_.appendChild(this.workspace_.createDom()), this.workspace_.getThemeManager().subscribe(this.svgBackground_, "flyoutBackgroundColour", "fill"), this.workspace_.getThemeManager().subscribe(this.svgBackground_, "flyoutOpacity", "fill-opacity"), this.svgGroup_
                    }
                    init(t) {
                        this.targetWorkspace = t, this.workspace_.targetWorkspace = t, this.workspace_.scrollbar = new cK(this.workspace_, this.horizontalLayout, !this.horizontalLayout, "blocklyFlyoutScrollbar", this.SCROLLBAR_MARGIN), this.hide(), this.boundEvents.push(tt(this.svgGroup_, "wheel", this, this.wheel_)), this.filterWrapper = this.filterForCapacity.bind(this), this.targetWorkspace.addChangeListener(this.filterWrapper), this.boundEvents.push(tt(this.svgBackground_, "pointerdown", this, this.onMouseDown)), this.workspace_.getGesture = this.targetWorkspace.getGesture.bind(this.targetWorkspace), this.workspace_.setVariableMap(this.targetWorkspace.getVariableMap()), this.workspace_.createPotentialVariableMap(), t.getComponentManager().addComponent({
                            component: this,
                            weight: 1,
                            capabilities: [nQ.Capability.AUTOHIDEABLE, nQ.Capability.DELETE_AREA, nQ.Capability.DRAG_TARGET]
                        })
                    }
                    dispose() {
                        for (let t of (this.hide(), this.targetWorkspace.getComponentManager().removeComponent(this.id), this.boundEvents)) ti(t);
                        this.boundEvents.length = 0, this.filterWrapper && this.targetWorkspace.removeChangeListener(this.filterWrapper), this.workspace_ && (this.workspace_.getThemeManager().unsubscribe(this.svgBackground_), this.workspace_.dispose()), this.svgGroup_ && tb(this.svgGroup_)
                    }
                    getWidth() {
                        return this.width_
                    }
                    getHeight() {
                        return this.height_
                    }
                    getFlyoutScale() {
                        return this.targetWorkspace.scale
                    }
                    getWorkspace() {
                        return this.workspace_
                    }
                    setAutoClose(t) {
                        this.autoClose = t, this.targetWorkspace.recordDragTargets(), this.targetWorkspace.resizeContents()
                    }
                    autoHide(t) {
                        !t && this.targetWorkspace.getFlyout(!0) === this && this.autoClose && this.hide()
                    }
                    isVisible() {
                        return this.isVisible_
                    }
                    setVisible(t) {
                        let e = t !== this.isVisible();
                        this.isVisible_ = t, e && (this.autoClose || this.targetWorkspace.recordDragTargets(), this.updateDisplay())
                    }
                    setContainerVisible(t) {
                        let e = t !== this.containerVisible;
                        this.containerVisible = t, e && this.updateDisplay()
                    }
                    updateDisplay() {
                        let t, e;
                        t = !!this.containerVisible && this.isVisible(), this.svgGroup_ && (this.svgGroup_.style.display = t ? "block" : "none"), null == (e = this.workspace_.scrollbar) || e.setContainerVisible(t)
                    }
                    positionAt_(t, e, i, s) {
                        let o, n;
                        null == (o = this.svgGroup_) || o.setAttribute("width", `${t}`), null == (n = this.svgGroup_) || n.setAttribute("height", `${e}`), this.workspace_.setCachedParentSvgSize(t, e), this.svgGroup_ && tm(this.svgGroup_, "translate(" + i + "px," + s + "px)"), (t = this.workspace_.scrollbar) && (t.setOrigin(i, s), t.resize(), t.hScroll && t.hScroll.setPosition(t.hScroll.position.x, t.hScroll.position.y), t.vScroll && t.vScroll.setPosition(t.vScroll.position.x, t.vScroll.position.y))
                    }
                    hide() {
                        if (this.isVisible()) {
                            for (let t of (this.setVisible(!1), this.listeners)) ti(t);
                            this.listeners.length = 0, this.reflowWrapper && (this.workspace_.removeChangeListener(this.reflowWrapper), this.reflowWrapper = null)
                        }
                    }
                    show(t) {
                        this.workspace_.setResizesEnabled(!1), this.hide(), this.clearOldBlocks(), "string" == typeof t && (t = this.getDynamicCategoryContents(t)), this.setVisible(!0), t = tF(t), t = this.createFlyoutInfo(t), ea(), this.layout_(t.contents, t.gaps), this.horizontalLayout ? this.height_ = 0 : this.width_ = 0, this.workspace_.setResizesEnabled(!0), this.reflow(), this.filterForCapacity(), this.position(), this.reflowWrapper = this.reflow.bind(this), this.workspace_.addChangeListener(this.reflowWrapper), this.emptyRecycledBlocks()
                    }
                    createFlyoutInfo(t) {
                        let e = [],
                            i = [];
                        this.permanentlyDisabled.length = 0;
                        let s = this.horizontalLayout ? this.GAP_X : this.GAP_Y;
                        for (let o of t) {
                            if ("custom" in o) {
                                t = tF(t = this.getDynamicCategoryContents(o.custom));
                                let {
                                    contents: s,
                                    gaps: n
                                } = this.createFlyoutInfo(t);
                                e.push(...s), i.push(...n)
                            }
                            switch (o.kind.toUpperCase()) {
                                case "BLOCK":
                                    t = o;
                                    let r = this.createFlyoutBlock(t);
                                    e.push({
                                        type: n.BLOCK,
                                        block: r
                                    }), this.addBlockGap(t, i, s);
                                    break;
                                case "SEP":
                                    this.addSeparatorGap(o, i, s);
                                    break;
                                case "LABEL":
                                    t = this.createButton(o, !0), e.push({
                                        type: n.BUTTON,
                                        button: t
                                    }), i.push(s);
                                    break;
                                case "BUTTON":
                                    t = this.createButton(o, !1), e.push({
                                        type: n.BUTTON,
                                        button: t
                                    }), i.push(s)
                            }
                        }
                        return {
                            contents: e,
                            gaps: i
                        }
                    }
                    getDynamicCategoryContents(t) {
                        if ("function" != typeof (t = this.workspace_.targetWorkspace.getToolboxCategoryCallback(t))) throw TypeError("Couldn't find a callback function when opening a toolbox category.");
                        return t(this.workspace_.targetWorkspace)
                    }
                    createButton(t, e) {
                        return new uO(this.workspace_, this.targetWorkspace, t, e)
                    }
                    createFlyoutBlock(t) {
                        let e;
                        return t.blockxml ? (t = "string" == typeof t.blockxml ? r.textToDom$$module$build$src$core$utils$xml(t.blockxml) : t.blockxml, (e = this.getRecycledBlock(t.getAttribute("type"))) || (e = ek(t, this.workspace_))) : (e = this.getRecycledBlock(t.type)) || (void 0 === t.enabled && (t.enabled = "true" !== t.disabled && !0 !== t.disabled), e = eX(t, this.workspace_)), e.isEnabled() || this.permanentlyDisabled.push(e), e
                    }
                    getRecycledBlock(t) {
                        let e = -1;
                        for (let i = 0; i < this.recycledBlocks.length; i++)
                            if (this.recycledBlocks[i].type === t) {
                                e = i;
                                break
                            } return -1 === e ? void 0 : this.recycledBlocks.splice(e, 1)[0]
                    }
                    addBlockGap(t, e, i) {
                        let s;
                        t.gap ? s = parseInt(String(t.gap)) : t.blockxml && (s = parseInt((t = "string" == typeof t.blockxml ? r.textToDom$$module$build$src$core$utils$xml(t.blockxml) : t.blockxml).getAttribute("gap"))), e.push(!s || isNaN(s) ? i : s)
                    }
                    addSeparatorGap(t, e, i) {
                        !isNaN(t = parseInt(String(t.gap))) && 0 < e.length ? e[e.length - 1] = t : e.push(i)
                    }
                    clearOldBlocks() {
                        let t;
                        var e = this.workspace_.getTopBlocks(!1);
                        for (let t = 0, i; i = e[t]; t++) this.blockIsRecyclable_(i) ? this.recycleBlock(i) : i.dispose(!1, !1);
                        for (e = 0; e < this.mats.length; e++) {
                            let t = this.mats[e];
                            t && (st(t), tb(t))
                        }
                        this.mats.length = 0;
                        for (let t = 0, e; e = this.buttons_[t]; t++) e.dispose();
                        this.buttons_.length = 0, null == (t = this.workspace_.getPotentialVariableMap()) || t.clear()
                    }
                    emptyRecycledBlocks() {
                        for (let t = 0; t < this.recycledBlocks.length; t++) this.recycledBlocks[t].dispose();
                        this.recycledBlocks = []
                    }
                    blockIsRecyclable_(t) {
                        return !1
                    }
                    recycleBlock(t) {
                        let e = t.getRelativeToSurfaceXY();
                        t.moveBy(-e.x, -e.y), this.recycledBlocks.push(t)
                    }
                    addBlockListeners_(t, e, i) {
                        this.listeners.push(tt(t, "pointerdown", null, this.blockMouseDown(e))), this.listeners.push(tt(i, "pointerdown", null, this.blockMouseDown(e))), this.listeners.push(te(t, "pointerenter", e, e.addSelect)), this.listeners.push(te(t, "pointerleave", e, e.removeSelect)), this.listeners.push(te(i, "pointerenter", e, e.addSelect)), this.listeners.push(te(i, "pointerleave", e, e.removeSelect))
                    }
                    blockMouseDown(t) {
                        return e => {
                            let i = this.targetWorkspace.getGesture(e);
                            i && (i.setStartBlock(t), i.handleFlyoutStart(e, this))
                        }
                    }
                    onMouseDown(t) {
                        let e = this.targetWorkspace.getGesture(t);
                        e && e.handleFlyoutStart(t, this)
                    }
                    isBlockCreatable(t) {
                        return t.isEnabled()
                    }
                    createBlock(t) {
                        let e = null;
                        r.disable$$module$build$src$core$events$utils();
                        var i = this.targetWorkspace.getAllVariables();
                        this.targetWorkspace.setResizesEnabled(!1);
                        try {
                            e = this.placeNewBlock(t)
                        } finally {
                            r.enable$$module$build$src$core$events$utils()
                        }
                        if (this.targetWorkspace.hideChaff(), t = eo(this.targetWorkspace, i), W()) {
                            for (r.setGroup$$module$build$src$core$events$utils(!0), i = 0; i < t.length; i++) {
                                let e = t[i];
                                F(new(X(nl))(e))
                            }
                            F(new(X(r.CREATE$$module$build$src$core$events$utils))(e))
                        }
                        return this.autoClose ? this.hide() : this.filterForCapacity(), e
                    }
                    initFlyoutButton_(t, e, i) {
                        let s = t.createDom();
                        t.moveTo(e, i), t.show(), this.listeners.push(tt(s, "pointerdown", this, this.onMouseDown)), this.buttons_.push(t)
                    }
                    createRect_(t, e, i, s, o) {
                        return (e = tu(rp.RECT, {
                            "fill-opacity": 0,
                            x: e,
                            y: i,
                            height: s.height,
                            width: s.width
                        })).tooltip = t, i7(e), this.workspace_.getCanvas().insertBefore(e, t.getSvgRoot()), this.rectMap_.set(t, e), this.mats[o] = e
                    }
                    moveRectToBlock_(t, e) {
                        let i = e.getHeightWidth();
                        t.setAttribute("width", String(i.width)), t.setAttribute("height", String(i.height)), e = e.getRelativeToSurfaceXY(), t.setAttribute("y", String(e.y)), t.setAttribute("x", String(this.RTL ? e.x - i.width : e.x))
                    }
                    filterForCapacity() {
                        let t = this.workspace_.getTopBlocks(!1);
                        for (let e = 0, i; i = t[e]; e++)
                            if (-1 === this.permanentlyDisabled.indexOf(i)) {
                                let t = this.targetWorkspace.isCapacityAvailable(N(i));
                                for (; i;) i.setEnabled(t), i = i.getNextBlock()
                            }
                    }
                    reflow() {
                        this.reflowWrapper && this.workspace_.removeChangeListener(this.reflowWrapper), this.reflowInternal_(), this.reflowWrapper && this.workspace_.addChangeListener(this.reflowWrapper)
                    }
                    isScrollable() {
                        return !!this.workspace_.scrollbar && this.workspace_.scrollbar.isVisible()
                    }
                    placeNewBlock(t) {
                        var e = this.targetWorkspace;
                        if (!t.getSvgRoot()) throw Error("oldBlock is not rendered");
                        let i = eM(t, {
                            saveIds: !1
                        });
                        return e.setResizesEnabled(!1), e = ez(i, e), this.positionNewBlock(t, e), e
                    }
                    positionNewBlock(t, e) {
                        let i = this.targetWorkspace;
                        var s = i.getOriginOffsetInPixels(),
                            o = this.workspace_.getOriginOffsetInPixels();
                        (t = t.getRelativeToSurfaceXY()).scale(this.workspace_.scale), o = n3.sum(o, t), (s = n3.difference(o, s)).scale(1 / i.scale), e.moveTo(new n3(s.x, s.y))
                    }
                };
                uL.FlyoutItemType = n;
                var uM = class extends uL {
                    constructor(t) {
                        super(t), this.horizontalLayout = !0
                    }
                    setMetrics_(t) {
                        if (this.isVisible()) {
                            var e = this.workspace_.getMetricsManager(),
                                i = e.getScrollMetrics(),
                                s = e.getViewMetrics();
                            e = e.getAbsoluteMetrics(), "number" == typeof t.x && (this.workspace_.scrollX = -(i.left + (i.width - s.width) * t.x)), this.workspace_.translate(this.workspace_.scrollX + e.left, this.workspace_.scrollY + e.top)
                        }
                    }
                    getX() {
                        return 0
                    }
                    getY() {
                        if (!this.isVisible()) return 0;
                        var t = this.targetWorkspace.getMetricsManager();
                        let e = t.getAbsoluteMetrics(),
                            i = t.getViewMetrics();
                        t = t.getToolboxMetrics();
                        let s = this.toolboxPosition_ === rA.TOP;
                        return this.targetWorkspace.toolboxPosition === this.toolboxPosition_ ? this.targetWorkspace.getToolbox() ? s ? t.height : i.height - this.height_ : s ? 0 : i.height : s ? 0 : i.height + e.top - this.height_
                    }
                    position() {
                        if (this.isVisible() && this.targetWorkspace.isVisible()) {
                            var t = this.targetWorkspace.getMetricsManager().getViewMetrics();
                            this.width_ = t.width, this.setBackgroundPath(t.width - 2 * this.CORNER_RADIUS, this.height_ - this.CORNER_RADIUS), t = this.getX();
                            var e = this.getY();
                            this.positionAt_(this.width_, this.height_, t, e)
                        }
                    }
                    setBackgroundPath(t, e) {
                        let i = this.toolboxPosition_ === rA.TOP,
                            s = ["M 0," + (i ? 0 : this.CORNER_RADIUS)];
                        i ? (s.push("h", t + 2 * this.CORNER_RADIUS), s.push("v", e), s.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, -this.CORNER_RADIUS, this.CORNER_RADIUS), s.push("h", -t), s.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, -this.CORNER_RADIUS, -this.CORNER_RADIUS)) : (s.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, this.CORNER_RADIUS, -this.CORNER_RADIUS), s.push("h", t), s.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, this.CORNER_RADIUS, this.CORNER_RADIUS), s.push("v", e), s.push("h", -t - 2 * this.CORNER_RADIUS)), s.push("z"), this.svgBackground_.setAttribute("d", s.join(" "))
                    }
                    scrollToStart() {
                        let t;
                        null == (t = this.workspace_.scrollbar) || t.setX(this.RTL ? 1 / 0 : 0)
                    }
                    wheel_(t) {
                        var e = tr(t);
                        if (e = e.x || e.y) {
                            let t;
                            let i = this.workspace_.getMetricsManager(),
                                s = i.getScrollMetrics();
                            e = i.getViewMetrics().left - s.left + e, null == (t = this.workspace_.scrollbar) || t.setX(e), io(), iV()
                        }
                        t.preventDefault(), t.stopPropagation()
                    }
                    layout_(t, e) {
                        this.workspace_.scale = this.targetWorkspace.scale;
                        let i = this.MARGIN,
                            s = i + this.tabWidth_;
                        this.RTL && (t = t.reverse());
                        for (let l = 0, a; a = t[l]; l++)
                            if ("block" === a.type) {
                                var o = a.block,
                                    n = o.getDescendants(!1);
                                for (let t = 0, e; e = n[t]; t++) e.isInFlyout = !0;
                                n = o.getSvgRoot();
                                let t = o.getHeightWidth();
                                var r = o.outputConnection ? this.tabWidth_ : 0;
                                r = this.RTL ? s + t.width : s - r, o.moveBy(r, i), r = this.createRect_(o, r, i, t, l), s += t.width + e[l], this.addBlockListeners_(n, o, r)
                            } else "button" === a.type && (o = a.button, this.initFlyoutButton_(o, s, i), s += o.width + e[l])
                    }
                    isDragTowardWorkspace(t) {
                        t = Math.atan2(t.y, t.x) / Math.PI * 180;
                        let e = this.dragAngleRange_;
                        return t < 90 + e && t > 90 - e || t > -90 - e && t < -90 + e
                    }
                    getClientRect() {
                        if (!this.svgGroup_ || this.autoClose || !this.isVisible()) return null;
                        let t = this.svgGroup_.getBoundingClientRect(),
                            e = t.top;
                        return this.toolboxPosition_ === rA.TOP ? new rg(-1e9, e + t.height, -1e9, 1e9) : new rg(e, 1e9, -1e9, 1e9)
                    }
                    reflowInternal_() {
                        this.workspace_.scale = this.getFlyoutScale();
                        let t = 0,
                            e = this.workspace_.getTopBlocks(!1);
                        for (let i = 0, s; s = e[i]; i++) t = Math.max(t, s.getHeightWidth().height);
                        let i = this.buttons_;
                        for (let e = 0, s; s = i[e]; e++) t = Math.max(t, s.height);
                        if (t += 1.5 * this.MARGIN, t *= this.workspace_.scale, t += rk.scrollbarThickness, this.height_ !== t) {
                            for (let t = 0, i; i = e[t]; t++) this.rectMap_.has(i) && this.moveRectToBlock_(this.rectMap_.get(i), i);
                            this.targetWorkspace.scrollbar || this.autoClose || this.targetWorkspace.getFlyout() !== this || this.toolboxPosition_ !== rA.TOP || this.targetWorkspace.translate(this.targetWorkspace.scrollX, this.targetWorkspace.scrollY + t), this.height_ = t, this.position(), this.targetWorkspace.resizeContents(), this.targetWorkspace.recordDragTargets()
                        }
                    }
                };
                d(c.FLYOUTS_HORIZONTAL_TOOLBOX, h, uM);
                var uB = class extends uL {
                    constructor(t) {
                        super(t)
                    }
                    setMetrics_(t) {
                        if (this.isVisible()) {
                            var e = this.workspace_.getMetricsManager(),
                                i = e.getScrollMetrics(),
                                s = e.getViewMetrics();
                            e = e.getAbsoluteMetrics(), "number" == typeof t.y && (this.workspace_.scrollY = -(i.top + (i.height - s.height) * t.y)), this.workspace_.translate(this.workspace_.scrollX + e.left, this.workspace_.scrollY + e.top)
                        }
                    }
                    getX() {
                        if (!this.isVisible()) return 0;
                        var t = this.targetWorkspace.getMetricsManager();
                        let e = t.getAbsoluteMetrics(),
                            i = t.getViewMetrics();
                        return t = t.getToolboxMetrics(), this.targetWorkspace.toolboxPosition === this.toolboxPosition_ ? this.targetWorkspace.getToolbox() ? this.toolboxPosition_ === rA.LEFT ? t.width : i.width - this.width_ : this.toolboxPosition_ === rA.LEFT ? 0 : i.width : this.toolboxPosition_ === rA.LEFT ? 0 : i.width + e.left - this.width_
                    }
                    getY() {
                        return 0
                    }
                    position() {
                        if (this.isVisible() && this.targetWorkspace.isVisible()) {
                            var t = this.targetWorkspace.getMetricsManager().getViewMetrics();
                            this.height_ = t.height, this.setBackgroundPath(this.width_ - this.CORNER_RADIUS, t.height - 2 * this.CORNER_RADIUS), t = this.getX();
                            var e = this.getY();
                            this.positionAt_(this.width_, this.height_, t, e)
                        }
                    }
                    setBackgroundPath(t, e) {
                        let i = this.toolboxPosition_ === rA.RIGHT;
                        var s = t + this.CORNER_RADIUS;
                        (s = ["M " + (i ? s : 0) + ",0"]).push("h", i ? -t : t), s.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, i ? 0 : 1, i ? -this.CORNER_RADIUS : this.CORNER_RADIUS, this.CORNER_RADIUS), s.push("v", Math.max(0, e)), s.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, i ? 0 : 1, i ? this.CORNER_RADIUS : -this.CORNER_RADIUS, this.CORNER_RADIUS), s.push("h", i ? t : -t), s.push("z"), this.svgBackground_.setAttribute("d", s.join(" "))
                    }
                    scrollToStart() {
                        let t;
                        null == (t = this.workspace_.scrollbar) || t.setY(0)
                    }
                    wheel_(t) {
                        var e = tr(t);
                        if (e.y) {
                            let t;
                            let i = this.workspace_.getMetricsManager(),
                                s = i.getScrollMetrics();
                            e = i.getViewMetrics().top - s.top + e.y, null == (t = this.workspace_.scrollbar) || t.setY(e), io(), iV()
                        }
                        t.preventDefault(), t.stopPropagation()
                    }
                    layout_(t, e) {
                        this.workspace_.scale = this.targetWorkspace.scale;
                        var i = this.MARGIN;
                        let s = this.RTL ? i : i + this.tabWidth_;
                        for (let l = 0, a; a = t[l]; l++)
                            if ("block" === a.type) {
                                var o = a.block,
                                    n = o.getDescendants(!1);
                                for (let t = 0, e; e = n[t]; t++) e.isInFlyout = !0;
                                n = o.getSvgRoot();
                                let t = o.getHeightWidth();
                                var r = o.outputConnection ? s - this.tabWidth_ : s;
                                o.moveBy(r, i), r = this.createRect_(o, this.RTL ? r - t.width : r, i, t, l), this.addBlockListeners_(n, o, r), i += t.height + e[l]
                            } else "button" === a.type && (o = a.button, this.initFlyoutButton_(o, s, i), i += o.height + e[l])
                    }
                    isDragTowardWorkspace(t) {
                        t = Math.atan2(t.y, t.x) / Math.PI * 180;
                        let e = this.dragAngleRange_;
                        return t < e && t > -e || t < -180 + e || t > 180 - e
                    }
                    getClientRect() {
                        if (!this.svgGroup_ || this.autoClose || !this.isVisible()) return null;
                        let t = this.svgGroup_.getBoundingClientRect(),
                            e = t.left;
                        return this.toolboxPosition_ === rA.LEFT ? new rg(-1e9, 1e9, -1e9, e + t.width) : new rg(-1e9, 1e9, e, 1e9)
                    }
                    reflowInternal_() {
                        this.workspace_.scale = this.getFlyoutScale();
                        let t = 0;
                        var e = this.workspace_.getTopBlocks(!1);
                        for (let s = 0, o; o = e[s]; s++) {
                            var i = o.getHeightWidth().width;
                            o.outputConnection && (i -= this.tabWidth_), t = Math.max(t, i)
                        }
                        for (let e = 0, i; i = this.buttons_[e]; e++) t = Math.max(t, i.width);
                        if (t += 1.5 * this.MARGIN + this.tabWidth_, t *= this.workspace_.scale, t += rk.scrollbarThickness, this.width_ !== t) {
                            for (let s = 0, o; o = e[s]; s++) {
                                if (this.RTL) {
                                    i = o.getRelativeToSurfaceXY().x;
                                    let e = t / this.workspace_.scale - this.MARGIN;
                                    o.outputConnection || (e -= this.tabWidth_), o.moveBy(e - i, 0)
                                }
                                this.rectMap_.has(o) && this.moveRectToBlock_(this.rectMap_.get(o), o)
                            }
                            if (this.RTL)
                                for (let i = 0, s; s = this.buttons_[i]; i++) e = s.getPosition().y, s.moveTo(t / this.workspace_.scale - s.width - this.MARGIN - this.tabWidth_, e);
                            this.targetWorkspace.scrollbar || this.autoClose || this.targetWorkspace.getFlyout() !== this || this.toolboxPosition_ !== rA.LEFT || this.targetWorkspace.translate(this.targetWorkspace.scrollX + t, this.targetWorkspace.scrollY), this.width_ = t, this.position(), this.targetWorkspace.resizeContents(), this.targetWorkspace.recordDragTargets()
                        }
                    }
                };
                uB.registryName = "verticalFlyout", d(c.FLYOUTS_VERTICAL_TOOLBOX, h, uB), r.CodeGenerator$$module$build$src$core$generator = class {
                    constructor(t) {
                        this.forBlock = Object.create(null), this.FUNCTION_NAME_PLACEHOLDER_ = "{leCUI8hutHZI4480Dc}", this.STATEMENT_SUFFIX = this.STATEMENT_PREFIX = this.INFINITE_LOOP_TRAP = null, this.INDENT = "  ", this.COMMENT_WRAP = 60, this.ORDER_OVERRIDES = [], this.isInitialized = null, this.RESERVED_WORDS_ = "", this.definitions_ = Object.create(null), this.functionNames_ = Object.create(null), this.nameDB_ = void 0, this.name_ = t, this.FUNCTION_NAME_PLACEHOLDER_REGEXP_ = RegExp(this.FUNCTION_NAME_PLACEHOLDER_, "g")
                    }
                    workspaceToCode(t) {
                        t || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), t = C());
                        var e = [];
                        this.init(t), t = t.getTopBlocks(!0);
                        for (let i = 0, s; s = t[i]; i++) {
                            let t = this.blockToCode(s);
                            Array.isArray(t) && (t = t[0]), t && (s.outputConnection && (t = this.scrubNakedValue(t), this.STATEMENT_PREFIX && !s.suppressPrefixSuffix && (t = this.injectId(this.STATEMENT_PREFIX, s) + t), this.STATEMENT_SUFFIX && !s.suppressPrefixSuffix && (t += this.injectId(this.STATEMENT_SUFFIX, s))), e.push(t))
                        }
                        return e = e.join("\n"), (e = (e = (e = this.finish(e)).replace(/^\s+\n/, "")).replace(/\n\s+$/, "\n")).replace(/[ \t]+\n/g, "\n")
                    }
                    prefixLines(t, e) {
                        return e + t.replace(/(?!\n$)\n/g, "\n" + e)
                    }
                    allNestedComments(t) {
                        let e = [];
                        t = t.getDescendants(!0);
                        for (let i = 0; i < t.length; i++) {
                            let s = t[i].getCommentText();
                            s && e.push(s)
                        }
                        return e.length && e.push(""), e.join("\n")
                    }
                    blockToCode(t, e) {
                        if (!1 === this.isInitialized && console.warn("CodeGenerator init was not called before blockToCode was called."), !t) return "";
                        if (!t.isEnabled()) return e ? "" : this.blockToCode(t.getNextBlock());
                        if (t.isInsertionMarker()) return e ? "" : this.blockToCode(t.getChildren(!1)[0]);
                        var i = this.forBlock[t.type];
                        if (!i && this[t.type] && (tc("block generator functions on CodeGenerator objects", "10.0", "11.0", "the .forBlock[blockType] dictionary"), i = this[t.type]), "function" != typeof i) throw Error(`${this.name_} generator does not know how to generate code for block type "${t.type}".`);
                        if (Array.isArray(i = i.call(t, t, this))) {
                            if (!t.outputConnection) throw TypeError("Expecting string from statement block: " + t.type);
                            return [this.scrub_(t, i[0], e), i[1]]
                        }
                        if ("string" == typeof i) return this.STATEMENT_PREFIX && !t.suppressPrefixSuffix && (i = this.injectId(this.STATEMENT_PREFIX, t) + i), this.STATEMENT_SUFFIX && !t.suppressPrefixSuffix && (i += this.injectId(this.STATEMENT_SUFFIX, t)), this.scrub_(t, i, e);
                        if (null === i) return "";
                        throw SyntaxError("Invalid code generated: " + i)
                    }
                    valueToCode(t, e, i) {
                        if (isNaN(i)) throw TypeError("Expecting valid order from block: " + t.type);
                        var s = t.getInputTargetBlock(e);
                        if (!s || "" === (e = this.blockToCode(s))) return "";
                        if (!Array.isArray(e)) throw TypeError(`Expecting tuple from value block: ${s.type} See developers.google.com/blockly/guides/create-custom-blocks/generating-code for more information`);
                        if (t = e[0], isNaN(e = e[1])) throw TypeError("Expecting valid order from value block: " + s.type);
                        if (!t) return "";
                        s = !1;
                        var o = Math.floor(i);
                        let n = Math.floor(e);
                        if (o <= n && (o !== n || 0 !== o && 99 !== o)) {
                            for (s = !0, o = 0; o < this.ORDER_OVERRIDES.length; o++)
                                if (this.ORDER_OVERRIDES[o][0] === i && this.ORDER_OVERRIDES[o][1] === e) {
                                    s = !1;
                                    break
                                }
                        }
                        return s && (t = "(" + t + ")"), t
                    }
                    statementToCode(t, e) {
                        if (t = t.getInputTargetBlock(e), "string" != typeof (e = this.blockToCode(t))) throw TypeError("Expecting code from statement block: " + (t && t.type));
                        return e && (e = this.prefixLines(e, this.INDENT)), e
                    }
                    addLoopTrap(t, e) {
                        return this.INFINITE_LOOP_TRAP && (t = this.prefixLines(this.injectId(this.INFINITE_LOOP_TRAP, e), this.INDENT) + t), this.STATEMENT_SUFFIX && !e.suppressPrefixSuffix && (t = this.prefixLines(this.injectId(this.STATEMENT_SUFFIX, e), this.INDENT) + t), this.STATEMENT_PREFIX && !e.suppressPrefixSuffix && (t += this.prefixLines(this.injectId(this.STATEMENT_PREFIX, e), this.INDENT)), t
                    }
                    injectId(t, e) {
                        return e = e.id.replace(/\$/g, "$$$$"), t.replace(/%1/g, "'" + e + "'")
                    }
                    addReservedWords(t) {
                        this.RESERVED_WORDS_ += t + ","
                    }
                    provideFunction_(t, e) {
                        if (!this.definitions_[t]) {
                            let i;
                            let s = this.nameDB_.getDistinctName(t, r.NameType$$module$build$src$core$names.PROCEDURE);
                            for (this.functionNames_[t] = s, Array.isArray(e) && (e = e.join("\n")), e = e.trim().replace(this.FUNCTION_NAME_PLACEHOLDER_REGEXP_, s); i !== e;) i = e, e = e.replace(/^(( {2})*) {2}/gm, "$1\x00");
                            e = e.replace(/\0/g, this.INDENT), this.definitions_[t] = e
                        }
                        return this.functionNames_[t]
                    }
                    getVariableName(t) {
                        return this.getName(t, r.NameType$$module$build$src$core$names.VARIABLE)
                    }
                    getProcedureName(t) {
                        return this.getName(t, r.NameType$$module$build$src$core$names.PROCEDURE)
                    }
                    getName(t, e) {
                        if (!this.nameDB_) throw Error("Name database is not defined. You must initialize `nameDB_` in your generator class and call `init` first.");
                        return this.nameDB_.getName(t, e)
                    }
                    init(t) {
                        this.definitions_ = Object.create(null), this.functionNames_ = Object.create(null)
                    }
                    scrub_(t, e, i) {
                        return e
                    }
                    finish(t) {
                        return this.definitions_ = Object.create(null), this.functionNames_ = Object.create(null), t
                    }
                    scrubNakedValue(t) {
                        return t
                    }
                }, r.CodeGenerator$$module$build$src$core$generator;
                var uP = !1,
                    uF = {};
                uF.Align = r.Align$$module$build$src$core$inputs$align, uF.DummyInput = hX, uF.EndRowInput = hY, uF.Input = hz, uF.StatementInput = hK, uF.ValueInput = r.ValueInput$$module$build$src$core$inputs$value_input, uF.inputTypes = r.inputTypes$$module$build$src$core$inputs$input_types;
                var uH = class extends hM {
                        constructor() {
                            super(), this.FIELD_TEXT_BASELINE_CENTER = !1, this.DARK_PATH_OFFSET = 1, this.MAX_BOTTOM_WIDTH = 30, this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT / 2
                        }
                        getCSS_(t) {
                            return super.getCSS_(t).concat([`${t} .blocklyInsertionMarker>.blocklyPathLight,`, `${t} .blocklyInsertionMarker>.blocklyPathDark {`, `fill-opacity: ${this.INSERTION_MARKER_OPACITY};`, "stroke: none;", "}"])
                        }
                    },
                    uG = class {
                        constructor(t) {
                            this.inlineSteps_ = this.steps_ = "", this.info_ = t, this.RTL_ = this.info_.RTL, t = t.getRenderer(), this.constants_ = t.getConstants(), this.highlightConstants_ = t.getHighlightConstants(), this.highlightOffset = this.highlightConstants_.OFFSET, this.outsideCornerPaths_ = this.highlightConstants_.OUTSIDE_CORNER, this.insideCornerPaths_ = this.highlightConstants_.INSIDE_CORNER, this.puzzleTabPaths_ = this.highlightConstants_.PUZZLE_TAB, this.notchPaths_ = this.highlightConstants_.NOTCH, this.startPaths_ = this.highlightConstants_.START_HAT, this.jaggedTeethPaths_ = this.highlightConstants_.JAGGED_TEETH
                        }
                        getPath() {
                            return this.steps_ + "\n" + this.inlineSteps_
                        }
                        drawTopCorner(t) {
                            this.steps_ += sX(t.xPos, this.info_.startY);
                            for (let e = 0, i; i = t.elements[e]; e++) hg.isLeftSquareCorner(i) ? this.steps_ += this.highlightConstants_.START_POINT : hg.isLeftRoundedCorner(i) ? this.steps_ += this.outsideCornerPaths_.topLeft(this.RTL_) : hg.isPreviousConnection(i) ? this.steps_ += this.notchPaths_.pathLeft : hg.isHat(i) ? this.steps_ += this.startPaths_.path(this.RTL_) : hg.isSpacer(i) && 0 !== i.width && (this.steps_ += sJ("H", i.xPos + i.width - this.highlightOffset));
                            this.steps_ += sJ("H", t.xPos + t.width - this.highlightOffset)
                        }
                        drawJaggedEdge_(t) {
                            this.info_.RTL && (this.steps_ += this.jaggedTeethPaths_.pathLeft + sJ("v", t.height - this.jaggedTeethPaths_.height - this.highlightOffset))
                        }
                        drawValueInput(t) {
                            let e = t.getLastInput();
                            if (this.RTL_) {
                                let i = t.height - e.connectionHeight;
                                this.steps_ += sz(e.xPos + e.width - this.highlightOffset, t.yPos) + this.puzzleTabPaths_.pathDown(this.RTL_) + sJ("v", i)
                            } else this.steps_ += sz(e.xPos + e.width, t.yPos) + this.puzzleTabPaths_.pathDown(this.RTL_)
                        }
                        drawStatementInput(t) {
                            let e = t.getLastInput();
                            if (e) {
                                if (this.RTL_) {
                                    let i = t.height - 2 * this.insideCornerPaths_.height;
                                    this.steps_ += sz(e.xPos, t.yPos) + this.insideCornerPaths_.pathTop(this.RTL_) + sJ("v", i) + this.insideCornerPaths_.pathBottom(this.RTL_) + sY(t.width - e.xPos - this.insideCornerPaths_.width, 0)
                                } else this.steps_ += sz(e.xPos, t.yPos + t.height) + this.insideCornerPaths_.pathBottom(this.RTL_) + sY(t.width - e.xPos - this.insideCornerPaths_.width, 0)
                            }
                        }
                        drawRightSideRow(t) {
                            let e = t.xPos + t.width - this.highlightOffset;
                            t instanceof hO && t.followsStatement && (this.steps_ += sJ("H", e)), this.RTL_ && (this.steps_ += sJ("H", e), t.height > this.highlightOffset && (this.steps_ += sJ("V", t.yPos + t.height - this.highlightOffset)))
                        }
                        drawBottomRow(t) {
                            if (this.RTL_) this.steps_ += sJ("V", t.baseline - this.highlightOffset);
                            else {
                                let e = this.info_.bottomRow.elements[0];
                                hg.isLeftSquareCorner(e) ? this.steps_ += sz(t.xPos + this.highlightOffset, t.baseline - this.highlightOffset) : hg.isLeftRoundedCorner(e) && (this.steps_ += sz(t.xPos, t.baseline), this.steps_ += this.outsideCornerPaths_.bottomLeft())
                            }
                        }
                        drawLeft() {
                            var t = this.info_.outputConnection;
                            t && (t = t.connectionOffsetY + t.height, this.RTL_ ? this.steps_ += sz(this.info_.startX, t) : (this.steps_ += sz(this.info_.startX + this.highlightOffset, this.info_.bottomRow.baseline - this.highlightOffset), this.steps_ += sJ("V", t)), this.steps_ += this.puzzleTabPaths_.pathUp(this.RTL_)), this.RTL_ || (t = this.info_.topRow, hg.isLeftRoundedCorner(t.elements[0]) ? this.steps_ += sJ("V", this.outsideCornerPaths_.height) : this.steps_ += sJ("V", t.capline + this.highlightOffset))
                        }
                        drawInlineInput(t) {
                            let e = this.highlightOffset,
                                i = t.xPos + t.connectionWidth;
                            var s = t.centerline - t.height / 2;
                            let o = t.width - t.connectionWidth,
                                n = s + e;
                            this.RTL_ ? (s = t.connectionOffsetY - e, t = t.height - (t.connectionOffsetY + t.connectionHeight) + e, this.inlineSteps_ += sz(i - e, n) + sJ("v", s) + this.puzzleTabPaths_.pathDown(this.RTL_) + sJ("v", t) + sJ("h", o)) : this.inlineSteps_ += sz(t.xPos + t.width + e, n) + sJ("v", t.height) + sJ("h", -o) + sz(i, s + t.connectionOffsetY) + this.puzzleTabPaths_.pathDown(this.RTL_)
                        }
                    },
                    uU = class extends hP {
                        constructor(t, e) {
                            super(t, e), this.highlighter_ = new uG(e)
                        }
                        draw() {
                            this.drawOutline_(), this.drawInternals_();
                            let t = this.block_.pathObject;
                            t.setPath(this.outlinePath_ + "\n" + this.inlinePath_), t.setHighlightPath(this.highlighter_.getPath()), this.info_.RTL && t.flipRTL(), this.recordSizeOnBlock_()
                        }
                        drawTop_() {
                            this.highlighter_.drawTopCorner(this.info_.topRow), this.highlighter_.drawRightSideRow(this.info_.topRow), super.drawTop_()
                        }
                        drawJaggedEdge_(t) {
                            this.highlighter_.drawJaggedEdge_(t), super.drawJaggedEdge_(t)
                        }
                        drawValueInput_(t) {
                            this.highlighter_.drawValueInput(t), super.drawValueInput_(t)
                        }
                        drawStatementInput_(t) {
                            this.highlighter_.drawStatementInput(t), super.drawStatementInput_(t)
                        }
                        drawRightSideRow_(t) {
                            this.highlighter_.drawRightSideRow(t), this.outlinePath_ += sJ("H", t.xPos + t.width) + sJ("V", t.yPos + t.height)
                        }
                        drawBottom_() {
                            this.highlighter_.drawBottomRow(this.info_.bottomRow), super.drawBottom_()
                        }
                        drawLeft_() {
                            this.highlighter_.drawLeft(), super.drawLeft_()
                        }
                        drawInlineInput_(t) {
                            this.highlighter_.drawInlineInput(t), super.drawInlineInput_(t)
                        }
                        positionInlineInputConnection_(t) {
                            let e = t.centerline - t.height / 2;
                            if (t.connectionModel) {
                                let i = t.xPos + t.connectionWidth + this.constants_.DARK_PATH_OFFSET;
                                this.info_.RTL && (i *= -1), t.connectionModel.setOffsetInBlock(i, e + t.connectionOffsetY + this.constants_.DARK_PATH_OFFSET)
                            }
                        }
                        positionStatementInputConnection_(t) {
                            let e = t.getLastInput();
                            if (null == e ? 0 : e.connectionModel) {
                                let i = t.xPos + t.statementEdge + e.notchOffset;
                                i = this.info_.RTL ? -1 * i : i + this.constants_.DARK_PATH_OFFSET, e.connectionModel.setOffsetInBlock(i, t.yPos + this.constants_.DARK_PATH_OFFSET)
                            }
                        }
                        positionExternalValueConnection_(t) {
                            let e = t.getLastInput();
                            if (e && e.connectionModel) {
                                let i = t.xPos + t.width + this.constants_.DARK_PATH_OFFSET;
                                this.info_.RTL && (i *= -1), e.connectionModel.setOffsetInBlock(i, t.yPos)
                            }
                        }
                        positionNextConnection_() {
                            let t = this.info_.bottomRow;
                            if (t.connection) {
                                let e = t.connection,
                                    i = e.xPos;
                                e.connectionModel.setOffsetInBlock((this.info_.RTL ? -i : i) + this.constants_.DARK_PATH_OFFSET / 2, t.baseline + this.constants_.DARK_PATH_OFFSET)
                            }
                        }
                    },
                    uW = class {
                        constructor(t) {
                            this.OFFSET = .5, this.constantProvider = t, this.START_POINT = sX(this.OFFSET, this.OFFSET)
                        }
                        init() {
                            this.INSIDE_CORNER = this.makeInsideCorner(), this.OUTSIDE_CORNER = this.makeOutsideCorner(), this.PUZZLE_TAB = this.makePuzzleTab(), this.NOTCH = this.makeNotch(), this.JAGGED_TEETH = this.makeJaggedTeeth(), this.START_HAT = this.makeStartHat()
                        }
                        makeInsideCorner() {
                            let t = this.constantProvider.CORNER_RADIUS,
                                e = this.OFFSET,
                                i = (1 - Math.SQRT1_2) * (t + e) - e,
                                s = sX(i, i) + sj("a", "0 0,0", t, sW(-i - e, t - i)),
                                o = sj("a", "0 0,0", t + e, sW(t + e, t + e)),
                                n = sX(i, -i) + sj("a", "0 0,0", t + e, sW(t - i, i + e));
                            return {
                                width: t + e,
                                height: t,
                                pathTop: t => t ? s : "",
                                pathBottom: t => t ? o : n
                            }
                        }
                        makeOutsideCorner() {
                            let t = this.constantProvider.CORNER_RADIUS,
                                e = this.OFFSET,
                                i = (1 - Math.SQRT1_2) * (t - e) + e,
                                s = sX(i, i) + sj("a", "0 0,1", t - e, sW(t - i, -i + e)),
                                o = sX(e, t) + sj("a", "0 0,1", t - e, sW(t, -t + e)),
                                n = -i,
                                r = sX(i, n) + sj("a", "0 0,1", t - e, sW(-i + e, -n - t));
                            return {
                                height: t,
                                topLeft: t => t ? s : o,
                                bottomLeft: () => r
                            }
                        }
                        makePuzzleTab() {
                            let t = this.constantProvider.TAB_WIDTH,
                                e = this.constantProvider.TAB_HEIGHT,
                                i = sX(-2, -e + 3.4) + sY(-.45 * t, -2.1),
                                s = sJ("v", 2.5) + sX(-(.97 * t), 2.5) + sV("q", [sW(-(.05 * t), 10), sW(.3 * t, 9.5)]) + sX(.67 * t, -1.9) + sJ("v", 2.5),
                                o = sJ("v", -1.5) + sX(-.92 * t, -.5) + sV("q", [sW(-.19 * t, -5.5), sW(0, -11)]) + sX(.92 * t, 1),
                                n = sX(-5, e - .7) + sY(.46 * t, -2.1);
                            return {
                                width: t,
                                height: e,
                                pathUp: t => t ? i : o,
                                pathDown: t => t ? s : n
                            }
                        }
                        makeNotch() {
                            return {
                                pathLeft: sJ("h", this.OFFSET) + this.constantProvider.NOTCH.pathLeft
                            }
                        }
                        makeJaggedTeeth() {
                            return {
                                pathLeft: sY(5.1, 2.6) + sX(-10.2, 6.8) + sY(5.1, 2.6),
                                height: 12,
                                width: 10.2
                            }
                        }
                        makeStartHat() {
                            let t = this.constantProvider.START_HAT.height,
                                e = sX(25, -8.7) + sV("c", [sW(29.7, -6.2), sW(57.2, -.5), sW(75, 8.7)]),
                                i = sV("c", [sW(17.8, -9.2), sW(45.3, -14.9), sW(75, -8.7)]) + sz(100.5, t + .5);
                            return {
                                path: t => t ? e : i
                            }
                        }
                    },
                    uV = class extends hC {
                        constructor(t, e) {
                            super(t, e), this.constants_ = t, this.connectedBlock && (this.width += this.constants_.DARK_PATH_OFFSET, this.height += this.constants_.DARK_PATH_OFFSET)
                        }
                    },
                    uz = class extends hv {
                        constructor(t, e) {
                            super(t, e), this.constants_ = t, this.connectedBlock && (this.height += this.constants_.DARK_PATH_OFFSET)
                        }
                    },
                    uX = class extends hJ {
                        constructor(t, e) {
                            super(t, e), this.renderer_ = t
                        }
                        getRenderer() {
                            return this.renderer_
                        }
                        populateBottomRow_() {
                            super.populateBottomRow_(), this.block_.inputList.length && this.block_.inputList[this.block_.inputList.length - 1] instanceof hK || (this.bottomRow.minHeight = this.constants_.MEDIUM_PADDING - this.constants_.DARK_PATH_OFFSET)
                        }
                        addInput_(t, e) {
                            this.isInline && t instanceof r.ValueInput$$module$build$src$core$inputs$value_input ? (e.elements.push(new uV(this.constants_, t)), e.hasInlineInput = !0) : t instanceof hK ? (e.elements.push(new uz(this.constants_, t)), e.hasStatement = !0) : t instanceof r.ValueInput$$module$build$src$core$inputs$value_input ? (e.elements.push(new hT(this.constants_, t)), e.hasExternalInput = !0) : (t instanceof hX || t instanceof hY) && (e.minHeight = Math.max(e.minHeight, this.constants_.DUMMY_INPUT_MIN_HEIGHT), e.hasDummyInput = !0), this.isInline || null !== e.align || (e.align = t.align)
                        }
                        addElemSpacing_() {
                            let t = !1;
                            for (let e = 0, i; i = this.rows[e]; e++) i.hasExternalInput && (t = !0);
                            for (let i = 0, s; s = this.rows[i]; i++) {
                                var e = s.elements;
                                if (s.elements = [], s.startsWithElemSpacer() && s.elements.push(new h$(this.constants_, this.getInRowSpacing_(null, e[0]))), e.length) {
                                    for (let t = 0; t < e.length - 1; t++) {
                                        s.elements.push(e[t]);
                                        let i = this.getInRowSpacing_(e[t], e[t + 1]);
                                        s.elements.push(new h$(this.constants_, i))
                                    }
                                    s.elements.push(e[e.length - 1]), s.endsWithElemSpacer() && (e = this.getInRowSpacing_(e[e.length - 1], null), t && s.hasDummyInput && (e += this.constants_.TAB_WIDTH), s.elements.push(new h$(this.constants_, e)))
                                }
                            }
                        }
                        getInRowSpacing_(t, e) {
                            if (!t) return e && hg.isField(e) && e.isEditable ? this.constants_.MEDIUM_PADDING : e && hg.isInlineInput(e) ? this.constants_.MEDIUM_LARGE_PADDING : e && hg.isStatementInput(e) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : this.constants_.LARGE_PADDING;
                            if (!hg.isInput(t) && (!e || hg.isStatementInput(e))) return hg.isField(t) && t.isEditable ? this.constants_.MEDIUM_PADDING : hg.isIcon(t) ? 2 * this.constants_.LARGE_PADDING + 1 : hg.isHat(t) ? this.constants_.NO_PADDING : hg.isPreviousOrNextConnection(t) ? this.constants_.LARGE_PADDING : hg.isLeftRoundedCorner(t) ? this.constants_.MIN_BLOCK_WIDTH : hg.isJaggedEdge(t) ? this.constants_.NO_PADDING : this.constants_.LARGE_PADDING;
                            if (hg.isInput(t) && !e) {
                                if (hg.isExternalInput(t)) return this.constants_.NO_PADDING;
                                if (hg.isInlineInput(t)) return this.constants_.LARGE_PADDING;
                                if (hg.isStatementInput(t)) return this.constants_.NO_PADDING
                            }
                            if (!hg.isInput(t) && e && hg.isInput(e)) {
                                if (hg.isField(t) && t.isEditable) {
                                    if (hg.isInlineInput(e) || hg.isExternalInput(e)) return this.constants_.SMALL_PADDING
                                } else {
                                    if (hg.isInlineInput(e) || hg.isExternalInput(e)) return this.constants_.MEDIUM_LARGE_PADDING;
                                    if (hg.isStatementInput(e)) return this.constants_.LARGE_PADDING
                                }
                                return this.constants_.LARGE_PADDING - 1
                            }
                            if (hg.isIcon(t) && e && !hg.isInput(e)) return this.constants_.LARGE_PADDING;
                            if (hg.isInlineInput(t) && e && hg.isField(e)) return e.isEditable ? this.constants_.MEDIUM_PADDING : this.constants_.LARGE_PADDING;
                            if (hg.isLeftSquareCorner(t) && e) {
                                if (hg.isHat(e)) return this.constants_.NO_PADDING;
                                if (hg.isPreviousConnection(e)) return e.notchOffset;
                                if (hg.isNextConnection(e)) return e.notchOffset + (this.RTL ? 1 : -1) * this.constants_.DARK_PATH_OFFSET / 2
                            }
                            if (hg.isLeftRoundedCorner(t) && e) {
                                if (hg.isPreviousConnection(e)) return e.notchOffset - this.constants_.CORNER_RADIUS;
                                if (hg.isNextConnection(e)) return e.notchOffset - this.constants_.CORNER_RADIUS + (this.RTL ? 1 : -1) * this.constants_.DARK_PATH_OFFSET / 2
                            }
                            return hg.isField(t) && e && hg.isField(e) && t.isEditable === e.isEditable || e && hg.isJaggedEdge(e) ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING
                        }
                        getSpacerRowHeight_(t, e) {
                            return hg.isTopRow(t) && hg.isBottomRow(e) ? this.constants_.EMPTY_BLOCK_SPACER_HEIGHT : hg.isTopRow(t) || hg.isBottomRow(e) ? this.constants_.NO_PADDING : t.hasExternalInput && e.hasExternalInput ? this.constants_.LARGE_PADDING : !t.hasStatement && e.hasStatement ? this.constants_.BETWEEN_STATEMENT_PADDING_Y : t.hasStatement && e.hasStatement || !t.hasStatement && e.hasDummyInput || t.hasDummyInput ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING
                        }
                        getElemCenterline_(t, e) {
                            if (hg.isSpacer(e)) return t.yPos + e.height / 2;
                            if (hg.isBottomRow(t)) return t = t.yPos + t.height - t.descenderHeight, hg.isNextConnection(e) ? t + e.height / 2 : t - e.height / 2;
                            if (hg.isTopRow(t)) return hg.isHat(e) ? t.capline - e.height / 2 : t.capline + e.height / 2;
                            let i = t.yPos;
                            return hg.isField(e) || hg.isIcon(e) ? (i += e.height / 2, (t.hasInlineInput || t.hasStatement) && e.height + this.constants_.TALL_INPUT_FIELD_OFFSET_Y <= t.height && (i += this.constants_.TALL_INPUT_FIELD_OFFSET_Y)) : i = hg.isInlineInput(e) ? i + e.height / 2 : i + t.height / 2, i
                        }
                        alignRowElements_() {
                            if (this.isInline) {
                                var t = 0,
                                    e = new WeakMap,
                                    i = null;
                                for (let s = this.rows.length - 1, o; o = this.rows[s]; s--) e.set(o, t), hg.isInputRow(o) && (o.hasStatement && this.alignStatementRow_(o), i && i.hasStatement && o.width < i.width ? e.set(o, i.width) : t = o.hasStatement ? o.width : Math.max(t, o.width), i = o);
                                t = 0;
                                for (let s = 0, o; o = this.rows[s]; s++) o.hasStatement ? t = this.getDesiredRowWidth_(o) : hg.isSpacer(o) ? o.width = Math.max(t, e.get(o)) : (i = o.width, 0 < (t = Math.max(t, e.get(o)) - i) && this.addAlignmentPadding_(o, t), t = o.width)
                            } else super.alignRowElements_()
                        }
                        getDesiredRowWidth_(t) {
                            return this.isInline && t.hasStatement ? this.statementEdge + this.constants_.MAX_BOTTOM_WIDTH + this.startX : super.getDesiredRowWidth_(t)
                        }
                        finalize_() {
                            let t = 0,
                                e = 0;
                            for (let s = 0, o; o = this.rows[s]; s++) {
                                o.yPos = e, o.xPos = this.startX, e += o.height, t = Math.max(t, o.widthWithConnectedBlocks);
                                var i = e - this.topRow.ascenderHeight;
                                o === this.bottomRow && i < this.constants_.MIN_BLOCK_HEIGHT && (i = this.constants_.MIN_BLOCK_HEIGHT - i, this.bottomRow.height += i, e += i), this.recordElemPositions_(o)
                            }
                            this.outputConnection && this.block_.nextConnection && this.block_.nextConnection.isConnected() && (i = this.block_.nextConnection.targetBlock()) && (t = Math.max(t, i.getHeightWidth().width - this.constants_.DARK_PATH_OFFSET)), this.bottomRow.baseline = e - this.bottomRow.descenderHeight, this.widthWithChildren = t + this.startX + this.constants_.DARK_PATH_OFFSET, this.width += this.constants_.DARK_PATH_OFFSET, this.height = e + this.constants_.DARK_PATH_OFFSET, this.startY = this.topRow.capline
                        }
                    },
                    uY = class extends hQ {
                        constructor(t, e, i) {
                            super(t, e, i), this.constants = i, this.colourDark = "#000000", this.svgPathDark = tu(rp.PATH, {
                                class: "blocklyPathDark",
                                transform: "translate(1,1)"
                            }), this.svgRoot.insertBefore(this.svgPathDark, this.svgPath), this.svgPathLight = tu(rp.PATH, {
                                class: "blocklyPathLight"
                            }, this.svgRoot)
                        }
                        setPath(t) {
                            this.svgPath.setAttribute("d", t), this.svgPathDark.setAttribute("d", t)
                        }
                        setHighlightPath(t) {
                            this.svgPathLight.setAttribute("d", t)
                        }
                        flipRTL() {
                            this.svgPath.setAttribute("transform", "scale(-1 1)"), this.svgPathLight.setAttribute("transform", "scale(-1 1)"), this.svgPathDark.setAttribute("transform", "translate(1,1) scale(-1 1)")
                        }
                        applyColour(t) {
                            if (this.svgPathLight.style.display = "", this.svgPathDark.style.display = "", !this.style.colourTertiary) throw Error("The renderer did not properly initialize the tertiary colour of the block style");
                            this.svgPathLight.setAttribute("stroke", this.style.colourTertiary), this.svgPathDark.setAttribute("fill", this.colourDark), super.applyColour(t), this.svgPath.setAttribute("stroke", "none")
                        }
                        setStyle(t) {
                            this.style = t, this.colourDark = sw("#000", this.style.colourPrimary, .2) || this.colourDark
                        }
                        updateHighlighted(t) {
                            t ? (this.svgPath.setAttribute("filter", "url(#" + this.constants.embossFilterId + ")"), this.svgPathLight.style.display = "none") : (this.svgPath.setAttribute("filter", "none"), this.svgPathLight.style.display = "inline")
                        }
                        updateShadow_(t) {
                            if (t) {
                                if (this.svgPathLight.style.display = "none", !this.style.colourSecondary) throw Error("The renderer did not properly initialize the secondary colour of the block style block style");
                                this.svgPathDark.setAttribute("fill", this.style.colourSecondary), this.svgPath.setAttribute("stroke", "none"), this.svgPath.setAttribute("fill", this.style.colourSecondary)
                            }
                        }
                        updateDisabled_(t) {
                            super.updateDisabled_(t), t && this.svgPath.setAttribute("stroke", "none")
                        }
                    },
                    uK = class extends h8 {
                        constructor(t) {
                            super(t), this.highlightConstants = null
                        }
                        init(t, e) {
                            super.init(t, e), this.highlightConstants = this.makeHighlightConstants_(), this.highlightConstants.init()
                        }
                        refreshDom(t, e) {
                            super.refreshDom(t, e), this.getHighlightConstants().init()
                        }
                        makeConstants_() {
                            return new uH
                        }
                        makeRenderInfo_(t) {
                            return new uX(this, t)
                        }
                        makeDrawer_(t, e) {
                            return new uU(t, e)
                        }
                        makePathObject(t, e) {
                            return new uY(t, e, this.getConstants())
                        }
                        makeHighlightConstants_() {
                            return new uW(this.getConstants())
                        }
                        getHighlightConstants() {
                            if (!this.highlightConstants) throw Error("Cannot access the highlight constants because init has not been called");
                            return this.highlightConstants
                        }
                    };
                os("geras", uK);
                var uJ = {};
                uJ.ConstantProvider = uH, uJ.Drawer = uU, uJ.HighlightConstantProvider = uW, uJ.Highlighter = uG, uJ.InlineInput = uV, uJ.PathObject = uY, uJ.RenderInfo = uX, uJ.Renderer = uK, uJ.StatementInput = uz;
                var uj = class extends hM {
                        constructor() {
                            super(), tc("Blockly.minimalist.ConstantProvider", "v10", "v11", "Blockly.blockRendering.ConstantProvider")
                        }
                    },
                    uZ = class extends hP {
                        constructor(t, e) {
                            super(t, e), tc("Blockly.minimalist.Drawer", "v10", "v11", "Blockly.blockRendering.Drawer")
                        }
                    },
                    uq = class extends hJ {
                        constructor(t, e) {
                            super(t, e), tc("Blockly.minimalist.RenderInfo", "v10", "v11", "Blockly.blockRendering.RenderInfo")
                        }
                        getRenderer() {
                            return this.renderer_
                        }
                    },
                    uQ = class extends h8 {
                        constructor(t) {
                            super(t), tc("Blockly.minimalist.Renderer", "v10", "v11", "Blockly.blockRendering.Renderer")
                        }
                        makeConstants_() {
                            return new uj
                        }
                        makeRenderInfo_(t) {
                            return new uq(this, t)
                        }
                        makeDrawer_(t, e) {
                            return new uZ(t, e)
                        }
                    };
                os("minimalist", uQ);
                var u0 = {};
                u0.ConstantProvider = uj, u0.Drawer = uZ, u0.RenderInfo = uq, u0.Renderer = uQ;
                var u1 = class extends hJ {
                        constructor(t, e) {
                            super(t, e)
                        }
                        getRenderer() {
                            return this.renderer_
                        }
                        addElemSpacing_() {
                            let t = !1;
                            for (var e = 0; e < this.rows.length; e++)
                                if (this.rows[e].hasExternalInput) {
                                    t = !0;
                                    break
                                } for (e = 0; e < this.rows.length; e++) {
                                let s = this.rows[e];
                                var i = s.elements;
                                if (s.elements = [], s.startsWithElemSpacer() && s.elements.push(new h$(this.constants_, this.getInRowSpacing_(null, i[0]))), i.length) {
                                    for (let t = 0; t < i.length - 1; t++) {
                                        s.elements.push(i[t]);
                                        let e = this.getInRowSpacing_(i[t], i[t + 1]);
                                        s.elements.push(new h$(this.constants_, e))
                                    }
                                    s.elements.push(i[i.length - 1]), s.endsWithElemSpacer() && (i = this.getInRowSpacing_(i[i.length - 1], null), t && s.hasDummyInput && (i += this.constants_.TAB_WIDTH), s.elements.push(new h$(this.constants_, i)))
                                }
                            }
                        }
                        getInRowSpacing_(t, e) {
                            if (!t) return e && hg.isField(e) && e.isEditable ? this.constants_.MEDIUM_PADDING : e && hg.isInlineInput(e) ? this.constants_.MEDIUM_LARGE_PADDING : e && hg.isStatementInput(e) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : this.constants_.LARGE_PADDING;
                            if (!hg.isInput(t) && !e) return hg.isField(t) && t.isEditable ? this.constants_.MEDIUM_PADDING : hg.isIcon(t) ? 2 * this.constants_.LARGE_PADDING + 1 : hg.isHat(t) ? this.constants_.NO_PADDING : hg.isPreviousOrNextConnection(t) ? this.constants_.LARGE_PADDING : hg.isLeftRoundedCorner(t) ? this.constants_.MIN_BLOCK_WIDTH : hg.isJaggedEdge(t) ? this.constants_.NO_PADDING : this.constants_.LARGE_PADDING;
                            if (hg.isInput(t) && !e) {
                                if (hg.isExternalInput(t)) return this.constants_.NO_PADDING;
                                if (hg.isInlineInput(t)) return this.constants_.LARGE_PADDING;
                                if (hg.isStatementInput(t)) return this.constants_.NO_PADDING
                            }
                            if (!hg.isInput(t) && e && hg.isInput(e)) {
                                if (hg.isField(t) && t.isEditable) {
                                    if (hg.isInlineInput(e) || hg.isExternalInput(e)) return this.constants_.SMALL_PADDING
                                } else {
                                    if (hg.isInlineInput(e) || hg.isExternalInput(e)) return this.constants_.MEDIUM_LARGE_PADDING;
                                    if (hg.isStatementInput(e)) return this.constants_.LARGE_PADDING
                                }
                                return this.constants_.LARGE_PADDING - 1
                            }
                            if (hg.isIcon(t) && e && !hg.isInput(e)) return this.constants_.LARGE_PADDING;
                            if (hg.isInlineInput(t) && e && hg.isField(e)) return e.isEditable ? this.constants_.MEDIUM_PADDING : this.constants_.LARGE_PADDING;
                            if (hg.isLeftSquareCorner(t) && e) {
                                if (hg.isHat(e)) return this.constants_.NO_PADDING;
                                if (hg.isPreviousConnection(e) || hg.isNextConnection(e)) return e.notchOffset
                            }
                            return hg.isLeftRoundedCorner(t) && e ? e.notchOffset - this.constants_.CORNER_RADIUS : hg.isField(t) && e && hg.isField(e) && t.isEditable === e.isEditable || e && hg.isJaggedEdge(e) ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING
                        }
                        getSpacerRowHeight_(t, e) {
                            return hg.isTopRow(t) && hg.isBottomRow(e) ? this.constants_.EMPTY_BLOCK_SPACER_HEIGHT : hg.isTopRow(t) || hg.isBottomRow(e) ? this.constants_.NO_PADDING : t.hasExternalInput && e.hasExternalInput ? this.constants_.LARGE_PADDING : !t.hasStatement && e.hasStatement ? this.constants_.BETWEEN_STATEMENT_PADDING_Y : t.hasStatement && e.hasStatement || t.hasDummyInput || e.hasDummyInput ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING
                        }
                        getElemCenterline_(t, e) {
                            if (hg.isSpacer(e)) return t.yPos + e.height / 2;
                            if (hg.isBottomRow(t)) return t = t.yPos + t.height - t.descenderHeight, hg.isNextConnection(e) ? t + e.height / 2 : t - e.height / 2;
                            if (hg.isTopRow(t)) return hg.isHat(e) ? t.capline - e.height / 2 : t.capline + e.height / 2;
                            let i = t.yPos;
                            return hg.isField(e) && t.hasStatement ? i + (this.constants_.TALL_INPUT_FIELD_OFFSET_Y + e.height / 2) : i + t.height / 2
                        }
                        finalize_() {
                            let t = 0,
                                e = 0;
                            for (var i = 0; i < this.rows.length; i++) {
                                let o = this.rows[i];
                                o.yPos = e, o.xPos = this.startX, e += o.height, t = Math.max(t, o.widthWithConnectedBlocks);
                                var s = e - this.topRow.ascenderHeight;
                                o === this.bottomRow && s < this.constants_.MIN_BLOCK_HEIGHT && (s = this.constants_.MIN_BLOCK_HEIGHT - s, this.bottomRow.height += s, e += s), this.recordElemPositions_(o)
                            }
                            this.outputConnection && this.block_.nextConnection && this.block_.nextConnection.isConnected() && (i = this.block_.nextConnection.targetBlock()) && (t = Math.max(t, i.getHeightWidth().width)), this.bottomRow.baseline = e - this.bottomRow.descenderHeight, this.widthWithChildren = t + this.startX, this.height = e, this.startY = this.topRow.capline
                        }
                    },
                    u2 = class extends h8 {
                        constructor(t) {
                            super(t)
                        }
                        makeRenderInfo_(t) {
                            return new u1(this, t)
                        }
                    };
                os("thrasos", u2);
                var u3 = {};
                u3.RenderInfo = u1, u3.Renderer = u2;
                var u5 = new aV("zelos", {
                        colour_blocks: {
                            colourPrimary: "#CF63CF",
                            colourSecondary: "#C94FC9",
                            colourTertiary: "#BD42BD"
                        },
                        list_blocks: {
                            colourPrimary: "#9966FF",
                            colourSecondary: "#855CD6",
                            colourTertiary: "#774DCB"
                        },
                        logic_blocks: {
                            colourPrimary: "#4C97FF",
                            colourSecondary: "#4280D7",
                            colourTertiary: "#3373CC"
                        },
                        loop_blocks: {
                            colourPrimary: "#0fBD8C",
                            colourSecondary: "#0DA57A",
                            colourTertiary: "#0B8E69"
                        },
                        math_blocks: {
                            colourPrimary: "#59C059",
                            colourSecondary: "#46B946",
                            colourTertiary: "#389438"
                        },
                        procedure_blocks: {
                            colourPrimary: "#FF6680",
                            colourSecondary: "#FF4D6A",
                            colourTertiary: "#FF3355"
                        },
                        text_blocks: {
                            colourPrimary: "#FFBF00",
                            colourSecondary: "#E6AC00",
                            colourTertiary: "#CC9900"
                        },
                        variable_blocks: {
                            colourPrimary: "#FF8C1A",
                            colourSecondary: "#FF8000",
                            colourTertiary: "#DB6E00"
                        },
                        variable_dynamic_blocks: {
                            colourPrimary: "#FF8C1A",
                            colourSecondary: "#FF8000",
                            colourTertiary: "#DB6E00"
                        },
                        hat_blocks: {
                            colourPrimary: "#4C97FF",
                            colourSecondary: "#4280D7",
                            colourTertiary: "#3373CC",
                            hat: "cap"
                        }
                    }, {
                        colour_category: {
                            colour: "#CF63CF"
                        },
                        list_category: {
                            colour: "#9966FF"
                        },
                        logic_category: {
                            colour: "#4C97FF"
                        },
                        loop_category: {
                            colour: "#0fBD8C"
                        },
                        math_category: {
                            colour: "#59C059"
                        },
                        procedure_category: {
                            colour: "#FF6680"
                        },
                        text_category: {
                            colour: "#FFBF00"
                        },
                        variable_category: {
                            colour: "#FF8C1A"
                        },
                        variable_dynamic_category: {
                            colour: "#FF8C1A"
                        }
                    }),
                    u6 = class {
                        constructor(t, e, i) {
                            this.id_ = t.toolboxitemid || L(), this.level_ = (this.parent_ = i || null) ? this.parent_.getLevel() + 1 : 0, this.toolboxItemDef_ = t, this.parentToolbox_ = e, this.workspace_ = this.parentToolbox_.getWorkspace()
                        }
                        init() {}
                        getDiv() {
                            return null
                        }
                        getClickTarget() {
                            return null
                        }
                        getId() {
                            return this.id_
                        }
                        getParent() {
                            return null
                        }
                        getLevel() {
                            return this.level_
                        }
                        isSelectable() {
                            return !1
                        }
                        isCollapsible() {
                            return !1
                        }
                        dispose() {}
                        setVisible_(t) {}
                    },
                    u9 = class extends u6 {
                        constructor(t, e, i) {
                            super(t, e, i), this.colour_ = this.name_ = "", this.labelDom_ = this.iconDom_ = this.rowContents_ = this.rowDiv_ = this.htmlDiv_ = null, this.isDisabled_ = this.isHidden_ = !1, this.flyoutItems_ = [], this.cssConfig_ = this.makeDefaultCssConfig_()
                        }
                        init() {
                            this.parseCategoryDef_(this.toolboxItemDef_), this.parseContents_(this.toolboxItemDef_), this.createDom_(), "true" === this.toolboxItemDef_.hidden && this.hide()
                        }
                        makeDefaultCssConfig_() {
                            return {
                                container: "blocklyToolboxCategory",
                                row: "blocklyTreeRow",
                                rowcontentcontainer: "blocklyTreeRowContentContainer",
                                icon: "blocklyTreeIcon",
                                label: "blocklyTreeLabel",
                                contents: "blocklyToolboxContents",
                                selected: "blocklyTreeSelected",
                                openicon: "blocklyTreeIconOpen",
                                closedicon: "blocklyTreeIconClosed"
                            }
                        }
                        parseContents_(t) {
                            if ("custom" in t) this.flyoutItems_ = t.custom;
                            else if (t = t.contents)
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    Array.isArray(this.flyoutItems_) && this.flyoutItems_.push(i)
                                }
                        }
                        parseCategoryDef_(t) {
                            this.name_ = "name" in t ? sv(t.name) : "", this.colour_ = this.getColour_(t), Object.assign(this.cssConfig_, t.cssconfig || t.cssConfig)
                        }
                        createDom_() {
                            this.htmlDiv_ = this.createContainer_(), e7(this.htmlDiv_, lL.TREEITEM), it(this.htmlDiv_, lG.SELECTED, !1), it(this.htmlDiv_, lG.LEVEL, this.level_ + 1), this.rowDiv_ = this.createRowContainer_(), this.rowDiv_.style.pointerEvents = "auto", this.htmlDiv_.appendChild(this.rowDiv_), this.rowContents_ = this.createRowContentsContainer_(), this.rowContents_.style.pointerEvents = "none", this.rowDiv_.appendChild(this.rowContents_), this.iconDom_ = this.createIconDom_(), e7(this.iconDom_, lL.PRESENTATION), this.rowContents_.appendChild(this.iconDom_), this.labelDom_ = this.createLabelDom_(this.name_), this.rowContents_.appendChild(this.labelDom_);
                            let t = this.labelDom_.getAttribute("id");
                            return t && it(this.htmlDiv_, lG.LABELLEDBY, t), this.addColourBorder_(this.colour_), this.htmlDiv_
                        }
                        createContainer_() {
                            let t = document.createElement("div"),
                                e = this.cssConfig_.container;
                            return e && td(t, e), t
                        }
                        createRowContainer_() {
                            let t = document.createElement("div");
                            var e = this.cssConfig_.row;
                            return e && td(t, e), e = `${u9.nestedPadding*this.getLevel()}px`, this.workspace_.RTL ? t.style.paddingRight = e : t.style.paddingLeft = e, t
                        }
                        createRowContentsContainer_() {
                            let t = document.createElement("div"),
                                e = this.cssConfig_.rowcontentcontainer;
                            return e && td(t, e), t
                        }
                        createIconDom_() {
                            let t = document.createElement("span");
                            if (!this.parentToolbox_.isHorizontal()) {
                                let e = this.cssConfig_.icon;
                                e && td(t, e)
                            }
                            return t.style.display = "inline-block", t
                        }
                        createLabelDom_(t) {
                            let e = document.createElement("span");
                            return e.setAttribute("id", this.getId() + ".label"), e.textContent = t, (t = this.cssConfig_.label) && td(e, t), e
                        }
                        refreshTheme() {
                            this.colour_ = this.getColour_(this.toolboxItemDef_), this.addColourBorder_(this.colour_)
                        }
                        addColourBorder_(t) {
                            t && (t = u9.borderWidth + "px solid " + (t || "#ddd"), this.workspace_.RTL ? this.rowDiv_.style.borderRight = t : this.rowDiv_.style.borderLeft = t)
                        }
                        getColour_(t) {
                            let e = t.categorystyle || t.categoryStyle;
                            if ((t = t.colour) && e) console.warn('Toolbox category "' + this.name_ + '" must not have both a style and a colour');
                            else {
                                if (e) return this.getColourfromStyle_(e);
                                if (t) return this.parseColour_(t)
                            }
                            return ""
                        }
                        getColourfromStyle_(t) {
                            var e = this.workspace_.getTheme();
                            if (t && e) {
                                if ((e = e.categoryStyles[t]) && e.colour) return this.parseColour_(e.colour);
                                console.warn('Style "' + t + '" must exist and contain a colour value')
                            }
                            return ""
                        }
                        getClickTarget() {
                            return this.rowDiv_
                        }
                        parseColour_(t) {
                            if (null == (t = sv(t)) || "" === t) return "";
                            var e = Number(t);
                            return isNaN(e) ? (e = sf(t)) ? e : (console.warn('Toolbox category "' + this.name_ + '" has unrecognized colour attribute: ' + t), "") : sy(e)
                        }
                        openIcon_(t) {
                            if (t) {
                                var e = this.cssConfig_.closedicon;
                                e && tp(t, e), (e = this.cssConfig_.openicon) && td(t, e)
                            }
                        }
                        closeIcon_(t) {
                            if (t) {
                                var e = this.cssConfig_.openicon;
                                e && tp(t, e), (e = this.cssConfig_.closedicon) && td(t, e)
                            }
                        }
                        setVisible_(t) {
                            this.htmlDiv_.style.display = t ? "block" : "none", this.isHidden_ = !t, this.parentToolbox_.getSelectedItem() === this && this.parentToolbox_.clearSelection()
                        }
                        hide() {
                            this.setVisible_(!1)
                        }
                        show() {
                            this.setVisible_(!0)
                        }
                        isVisible() {
                            return !this.isHidden_ && this.allAncestorsExpanded_()
                        }
                        allAncestorsExpanded_() {
                            let t = this;
                            for (; t.getParent();)
                                if (!(t = t.getParent()).isExpanded()) return !1;
                            return !0
                        }
                        isSelectable() {
                            return this.isVisible() && !this.isDisabled_
                        }
                        onClick(t) {}
                        setSelected(t) {
                            if (this.rowDiv_) {
                                var e = this.cssConfig_.selected;
                                if (t) {
                                    let t = this.parseColour_(u9.defaultBackgroundColour);
                                    this.rowDiv_.style.backgroundColor = this.colour_ || t, e && td(this.rowDiv_, e)
                                } else this.rowDiv_.style.backgroundColor = "", e && tg(this.rowDiv_, e);
                                it(this.htmlDiv_, lG.SELECTED, t)
                            }
                        }
                        setDisabled(t) {
                            this.isDisabled_ = t, this.getDiv().setAttribute("disabled", `${t}`), t ? this.getDiv().setAttribute("disabled", "true") : this.getDiv().removeAttribute("disabled")
                        }
                        getName() {
                            return this.name_
                        }
                        getParent() {
                            return this.parent_
                        }
                        getDiv() {
                            return this.htmlDiv_
                        }
                        getContents() {
                            return this.flyoutItems_
                        }
                        updateFlyoutContents(t) {
                            this.flyoutItems_ = [], this.toolboxItemDef_ = "string" == typeof t ? {
                                kind: this.toolboxItemDef_.kind,
                                custom: t,
                                id: this.toolboxItemDef_.id,
                                categorystyle: this.toolboxItemDef_.categorystyle,
                                colour: this.toolboxItemDef_.colour,
                                cssconfig: this.toolboxItemDef_.cssconfig,
                                hidden: this.toolboxItemDef_.hidden
                            } : {
                                kind: this.toolboxItemDef_.kind,
                                name: "name" in this.toolboxItemDef_ ? this.toolboxItemDef_.name : "",
                                contents: tF(t),
                                id: this.toolboxItemDef_.id,
                                categorystyle: this.toolboxItemDef_.categorystyle,
                                colour: this.toolboxItemDef_.colour,
                                cssconfig: this.toolboxItemDef_.cssconfig,
                                hidden: this.toolboxItemDef_.hidden
                            }, this.parseContents_(this.toolboxItemDef_)
                        }
                        dispose() {
                            tb(this.htmlDiv_)
                        }
                    };
                u9.registrationName = "category", u9.nestedPadding = 19, u9.borderWidth = 8, u9.defaultBackgroundColour = "#57e", ta('\n.blocklyTreeRow:not(.blocklyTreeSelected):hover {\n  background-color: rgba(255, 255, 255, .2);\n}\n\n.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {\n  margin: 1px 5px 1px 0;\n}\n\n.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {\n  margin: 1px 0 1px 5px;\n}\n\n.blocklyTreeRow {\n  height: 22px;\n  line-height: 22px;\n  margin-bottom: 3px;\n  padding-right: 8px;\n  white-space: nowrap;\n}\n\n.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {\n  margin-left: 8px;\n  padding-right: 0;\n}\n\n.blocklyTreeIcon {\n  background-image: url(<<<PATH>>>/sprites.png);\n  height: 16px;\n  vertical-align: middle;\n  visibility: hidden;\n  width: 16px;\n}\n\n.blocklyTreeIconClosed {\n  background-position: -32px -1px;\n}\n\n.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {\n  background-position: 0 -1px;\n}\n\n.blocklyTreeSelected>.blocklyTreeIconClosed {\n  background-position: -32px -17px;\n}\n\n.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {\n  background-position: 0 -17px;\n}\n\n.blocklyTreeIconOpen {\n  background-position: -16px -1px;\n}\n\n.blocklyTreeSelected>.blocklyTreeIconOpen {\n  background-position: -16px -17px;\n}\n\n.blocklyTreeLabel {\n  cursor: default;\n  font: 16px sans-serif;\n  padding: 0 3px;\n  vertical-align: middle;\n}\n\n.blocklyToolboxDelete .blocklyTreeLabel {\n  cursor: url("<<<PATH>>>/handdelete.cur"), auto;\n}\n\n.blocklyTreeSelected .blocklyTreeLabel {\n  color: #fff;\n}\n'), d(c.TOOLBOX_ITEM, u9.registrationName, u9);
                var u8 = class extends u6 {
                    constructor(t, e) {
                        super(t, e), this.cssConfig_ = {
                            container: "blocklyTreeSeparator"
                        }, this.htmlDiv_ = null, Object.assign(this.cssConfig_, t.cssconfig || t.cssConfig)
                    }
                    init() {
                        this.createDom_()
                    }
                    createDom_() {
                        let t = document.createElement("div"),
                            e = this.cssConfig_.container;
                        return e && td(t, e), this.htmlDiv_ = t
                    }
                    getDiv() {
                        return this.htmlDiv_
                    }
                    dispose() {
                        tb(this.htmlDiv_)
                    }
                };
                u8.registrationName = "sep", ta('\n.blocklyTreeSeparator {\n  border-bottom: solid #e5e5e5 1px;\n  height: 0;\n  margin: 5px 0;\n}\n\n.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {\n  border-right: solid #e5e5e5 1px;\n  border-bottom: none;\n  height: auto;\n  margin: 0 5px 0 5px;\n  padding: 5px 0;\n  width: 0;\n}\n'), d(c.TOOLBOX_ITEM, u8.registrationName, u8);
                var u4 = class extends u9 {
                    constructor(t, e, i) {
                        super(t, e, i), this.subcategoriesDiv_ = null, this.expanded_ = !1, this.toolboxItems_ = []
                    }
                    makeDefaultCssConfig_() {
                        let t = super.makeDefaultCssConfig_();
                        return t.contents = "blocklyToolboxContents", t
                    }
                    parseContents_(t) {
                        if ("custom" in t) this.flyoutItems_ = t.custom;
                        else {
                            let e = t.contents;
                            if (e) {
                                this.flyoutItems_ = [], t = !0;
                                for (let i = 0; i < e.length; i++) {
                                    let s = e[i];
                                    !_(c.TOOLBOX_ITEM, s.kind) || s.kind.toLowerCase() === u8.registrationName && t ? (this.flyoutItems_.push(s), t = !0) : (this.createToolboxItem_(s), t = !1)
                                }
                            }
                        }
                    }
                    createToolboxItem_(t) {
                        let e = t.kind;
                        "CATEGORY" === e.toUpperCase() && tG(t) && (e = u4.registrationName), t = new(m(c.TOOLBOX_ITEM, e))(t, this.parentToolbox_, this), this.toolboxItems_.push(t)
                    }
                    init() {
                        super.init(), this.setExpanded("true" === this.toolboxItemDef_.expanded || !0 === this.toolboxItemDef_.expanded)
                    }
                    createDom_() {
                        super.createDom_();
                        let t = this.getChildToolboxItems();
                        return this.subcategoriesDiv_ = this.createSubCategoriesDom_(t), e7(this.subcategoriesDiv_, lL.GROUP), this.htmlDiv_.appendChild(this.subcategoriesDiv_), this.closeIcon_(this.iconDom_), it(this.htmlDiv_, lG.EXPANDED, !1), this.htmlDiv_
                    }
                    createIconDom_() {
                        let t = document.createElement("span");
                        if (!this.parentToolbox_.isHorizontal()) {
                            let e = this.cssConfig_.icon;
                            e && td(t, e), t.style.visibility = "visible"
                        }
                        return t.style.display = "inline-block", t
                    }
                    createSubCategoriesDom_(t) {
                        let e = document.createElement("div");
                        e.style.display = "none";
                        var i = this.cssConfig_.contents;
                        for (i && td(e, i), i = 0; i < t.length; i++) {
                            let s = t[i];
                            s.init();
                            let o = s.getDiv();
                            if (e.appendChild(o), s.getClickTarget) {
                                let t;
                                null == (t = s.getClickTarget()) || t.setAttribute("id", s.getId())
                            }
                        }
                        return e
                    }
                    setExpanded(t) {
                        if (this.expanded_ !== t) {
                            if (this.expanded_ = t) this.subcategoriesDiv_.style.display = "block", this.openIcon_(this.iconDom_);
                            else {
                                let t;
                                null == (t = this.parentToolbox_.getFlyout()) || t.setVisible(!1), this.subcategoriesDiv_.style.display = "none", this.closeIcon_(this.iconDom_)
                            }
                            it(this.htmlDiv_, lG.EXPANDED, t), this.parentToolbox_.handleToolboxItemResize()
                        }
                    }
                    setVisible_(t) {
                        this.htmlDiv_.style.display = t ? "block" : "none";
                        let e = this.getChildToolboxItems();
                        for (let i = 0; i < e.length; i++) e[i].setVisible_(t);
                        this.isHidden_ = !t, this.parentToolbox_.getSelectedItem() === this && this.parentToolbox_.clearSelection()
                    }
                    isExpanded() {
                        return this.expanded_
                    }
                    isCollapsible() {
                        return !0
                    }
                    onClick(t) {
                        this.toggleExpanded()
                    }
                    toggleExpanded() {
                        this.setExpanded(!this.expanded_)
                    }
                    getDiv() {
                        return this.htmlDiv_
                    }
                    getChildToolboxItems() {
                        return this.toolboxItems_
                    }
                };
                u4.registrationName = "collapsibleCategory", d(c.TOOLBOX_ITEM, u4.registrationName, u4);
                var u7 = class extends cy {
                    constructor(t) {
                        super(), this.id = "toolbox", this.contentsDiv_ = this.HtmlDiv = null, this.isVisible_ = !1, this.contents_ = [], this.height_ = this.width_ = 0, this.previouslySelectedItem_ = this.selectedItem_ = this.flyout_ = null, this.boundEvents_ = [], this.workspace_ = t, this.toolboxDef_ = t.options.languageTree || {
                            contents: []
                        }, this.horizontalLayout_ = t.options.horizontalLayout, this.RTL = t.options.RTL, this.contentMap_ = Object.create(null), this.toolboxPosition = t.options.toolboxPosition
                    }
                    onShortcut(t) {
                        return !1
                    }
                    init() {
                        var t = this.workspace_;
                        let e = t.getParentSvg();
                        this.flyout_ = this.createFlyout_(), this.HtmlDiv = this.createDom_(this.workspace_), t_(this.flyout_.createDom("svg"), e), this.setVisible(!0), this.flyout_.init(t), this.render(this.toolboxDef_), (t = t.getThemeManager()).subscribe(this.HtmlDiv, "toolboxBackgroundColour", "background-color"), t.subscribe(this.HtmlDiv, "toolboxForegroundColour", "color"), this.workspace_.getComponentManager().addComponent({
                            component: this,
                            weight: 1,
                            capabilities: [nQ.Capability.AUTOHIDEABLE, nQ.Capability.DELETE_AREA, nQ.Capability.DRAG_TARGET]
                        })
                    }
                    createDom_(t) {
                        t = t.getParentSvg();
                        let e = this.createContainer_();
                        return this.contentsDiv_ = this.createContentsContainer_(), this.contentsDiv_.tabIndex = 0, e7(this.contentsDiv_, lL.TREE), e.appendChild(this.contentsDiv_), t.parentNode.insertBefore(e, t), this.attachEvents_(e, this.contentsDiv_), e
                    }
                    createContainer_() {
                        let t = document.createElement("div");
                        return t.setAttribute("layout", this.isHorizontal() ? "h" : "v"), td(t, "blocklyToolboxDiv"), td(t, "blocklyNonSelectable"), t.setAttribute("dir", this.RTL ? "RTL" : "LTR"), t
                    }
                    createContentsContainer_() {
                        let t = document.createElement("div");
                        return td(t, "blocklyToolboxContents"), this.isHorizontal() && (t.style.flexDirection = "row"), t
                    }
                    attachEvents_(t, e) {
                        t = tt(t, "pointerdown", this, this.onClick_, !1), this.boundEvents_.push(t), e = tt(e, "keydown", this, this.onKeyDown_, !1), this.boundEvents_.push(e)
                    }
                    onClick_(t) {
                        if (to(t) || t.target === this.HtmlDiv) C().hideChaff(!1);
                        else {
                            var e = t.target.getAttribute("id");
                            e && (e = this.getToolboxItemById(e)).isSelectable() && (this.setSelectedItem(e), e.onClick(t)), C().hideChaff(!0)
                        }
                        j()
                    }
                    onKeyDown_(t) {
                        let e = !1;
                        switch (t.key) {
                            case "ArrowDown":
                                e = this.selectNext_();
                                break;
                            case "ArrowUp":
                                e = this.selectPrevious_();
                                break;
                            case "ArrowLeft":
                                e = this.selectParent_();
                                break;
                            case "ArrowRight":
                                e = this.selectChild_();
                                break;
                            case "Enter":
                            case " ":
                                this.selectedItem_ && this.selectedItem_.isCollapsible() && (this.selectedItem_.toggleExpanded(), e = !0);
                                break;
                            default:
                                e = !1
                        }!e && this.selectedItem_ && this.selectedItem_.onKeyDown && (e = this.selectedItem_.onKeyDown(t)), e && t.preventDefault()
                    }
                    createFlyout_() {
                        let t = this.workspace_,
                            e = new aX({
                                parentWorkspace: t,
                                rtl: t.RTL,
                                oneBasedIndex: t.options.oneBasedIndex,
                                horizontalLayout: t.horizontalLayout,
                                renderer: t.options.renderer,
                                rendererOverrides: t.options.rendererOverrides,
                                move: {
                                    scrollbars: !0
                                }
                            });
                        return e.toolboxPosition = t.options.toolboxPosition, new(t.horizontalLayout ? T(c.FLYOUTS_HORIZONTAL_TOOLBOX, t.options, !0) : T(c.FLYOUTS_VERTICAL_TOOLBOX, t.options, !0))(e)
                    }
                    render(t) {
                        this.toolboxDef_ = t;
                        for (let t = 0; t < this.contents_.length; t++) {
                            let e = this.contents_[t];
                            e && e.dispose()
                        }
                        this.contents_ = [], this.contentMap_ = Object.create(null), this.renderContents_(t.contents), this.position(), this.handleToolboxItemResize()
                    }
                    renderContents_(t) {
                        let e = document.createDocumentFragment();
                        for (let i = 0; i < t.length; i++) this.createToolboxItem_(t[i], e);
                        this.contentsDiv_.appendChild(e)
                    }
                    createToolboxItem_(t, e) {
                        var i = t.kind;
                        "CATEGORY" === i.toUpperCase() && tG(t) && (i = u4.registrationName), (i = m(c.TOOLBOX_ITEM, i.toLowerCase())) && ((t = new i(t, this)).init(), this.addToolboxItem_(t), (i = t.getDiv()) && e.appendChild(i), t.getClickTarget() && t.getClickTarget().setAttribute("id", t.getId()))
                    }
                    addToolboxItem_(t) {
                        if (this.contents_.push(t), this.contentMap_[t.getId()] = t, t.isCollapsible()) {
                            t = t.getChildToolboxItems();
                            for (let e = 0; e < t.length; e++) this.addToolboxItem_(t[e])
                        }
                    }
                    getToolboxItems() {
                        return this.contents_
                    }
                    addStyle(t) {
                        t && this.HtmlDiv && td(this.HtmlDiv, t)
                    }
                    removeStyle(t) {
                        t && this.HtmlDiv && tg(this.HtmlDiv, t)
                    }
                    getClientRect() {
                        if (!this.HtmlDiv || !this.isVisible_) return null;
                        var t = this.HtmlDiv.getBoundingClientRect();
                        let e = t.top,
                            i = e + t.height,
                            s = t.left;
                        return t = s + t.width, this.toolboxPosition === rA.TOP ? new rg(-1e7, i, -1e7, 1e7) : this.toolboxPosition === rA.BOTTOM ? new rg(e, 1e7, -1e7, 1e7) : this.toolboxPosition === rA.LEFT ? new rg(-1e7, 1e7, -1e7, t) : new rg(-1e7, 1e7, s, 1e7)
                    }
                    wouldDelete(t, e) {
                        return t instanceof ck ? this.updateWouldDelete_(!t.getParent() && t.isDeletable()) : this.updateWouldDelete_(t.isDeletable()), this.wouldDelete_
                    }
                    onDragEnter(t) {
                        this.updateCursorDeleteStyle_(!0)
                    }
                    onDragExit(t) {
                        this.updateCursorDeleteStyle_(!1)
                    }
                    onDrop(t) {
                        this.updateCursorDeleteStyle_(!1)
                    }
                    updateWouldDelete_(t) {
                        t !== this.wouldDelete_ && (this.updateCursorDeleteStyle_(!1), this.wouldDelete_ = t, this.updateCursorDeleteStyle_(!0))
                    }
                    updateCursorDeleteStyle_(t) {
                        let e = this.wouldDelete_ ? "blocklyToolboxDelete" : "blocklyToolboxGrab";
                        t ? this.addStyle(e) : this.removeStyle(e)
                    }
                    getToolboxItemById(t) {
                        return this.contentMap_[t] || null
                    }
                    getWidth() {
                        return this.width_
                    }
                    getHeight() {
                        return this.height_
                    }
                    getFlyout() {
                        return this.flyout_
                    }
                    getWorkspace() {
                        return this.workspace_
                    }
                    getSelectedItem() {
                        return this.selectedItem_
                    }
                    getPreviouslySelectedItem() {
                        return this.previouslySelectedItem_
                    }
                    isHorizontal() {
                        return this.horizontalLayout_
                    }
                    position() {
                        let t = this.workspace_.getMetrics(),
                            e = this.HtmlDiv;
                        e && (this.horizontalLayout_ ? (e.style.left = "0", e.style.height = "auto", e.style.width = "100%", this.height_ = e.offsetHeight, this.width_ = t.viewWidth, this.toolboxPosition === rA.TOP ? e.style.top = "0" : e.style.bottom = "0") : (this.toolboxPosition === rA.RIGHT ? e.style.right = "0" : e.style.left = "0", e.style.height = "100%", this.width_ = e.offsetWidth, this.height_ = t.viewHeight), this.flyout_.position())
                    }
                    handleToolboxItemResize() {
                        let t = this.workspace_,
                            e = this.HtmlDiv.getBoundingClientRect();
                        t.translate(this.toolboxPosition === rA.LEFT ? t.scrollX + e.width : t.scrollX, this.toolboxPosition === rA.TOP ? t.scrollY + e.height : t.scrollY), A(t)
                    }
                    clearSelection() {
                        this.setSelectedItem(null)
                    }
                    refreshTheme() {
                        for (let t = 0; t < this.contents_.length; t++) {
                            let e = this.contents_[t];
                            e.refreshTheme && e.refreshTheme()
                        }
                    }
                    refreshSelection() {
                        this.selectedItem_ && this.selectedItem_.isSelectable() && this.selectedItem_.getContents().length && this.flyout_.show(this.selectedItem_.getContents())
                    }
                    setVisible(t) {
                        this.isVisible_ !== t && (this.HtmlDiv.style.display = t ? "block" : "none", this.isVisible_ = t, this.workspace_.recordDragTargets())
                    }
                    autoHide(t) {
                        !t && this.flyout_ && this.flyout_.autoClose && this.clearSelection()
                    }
                    setSelectedItem(t) {
                        let e = this.selectedItem_;
                        (t || e) && (!t || t.isSelectable()) && (this.shouldDeselectItem_(e, t) && null !== e && this.deselectItem_(e), this.shouldSelectItem_(e, t) && null !== t && this.selectItem_(e, t), this.updateFlyout_(e, t), this.fireSelectEvent_(e, t))
                    }
                    shouldDeselectItem_(t, e) {
                        return null !== t && (!t.isCollapsible() || t !== e)
                    }
                    shouldSelectItem_(t, e) {
                        return null !== e && e !== t
                    }
                    deselectItem_(t) {
                        this.selectedItem_ = null, this.previouslySelectedItem_ = t, t.setSelected(!1), it(this.contentsDiv_, lG.ACTIVEDESCENDANT, "")
                    }
                    selectItem_(t, e) {
                        this.selectedItem_ = e, this.previouslySelectedItem_ = t, e.setSelected(!0), it(this.contentsDiv_, lG.ACTIVEDESCENDANT, e.getId())
                    }
                    selectItemByPosition(t) {
                        -1 < t && t < this.contents_.length && (t = this.contents_[t]).isSelectable() && this.setSelectedItem(t)
                    }
                    updateFlyout_(t, e) {
                        e && (t !== e || e.isCollapsible()) && e.getContents().length ? (this.flyout_.show(e.getContents()), this.flyout_.scrollToStart()) : this.flyout_.hide()
                    }
                    fireSelectEvent_(t, e) {
                        let i = t && t.getName(),
                            s = e && e.getName();
                        t === e && (s = null), F(t = new(X(nm))(i, s, this.workspace_.id))
                    }
                    selectParent_() {
                        return !!this.selectedItem_ && (this.selectedItem_.isCollapsible() && this.selectedItem_.isExpanded() ? (this.selectedItem_.toggleExpanded(), !0) : !!(this.selectedItem_.getParent() && this.selectedItem_.getParent().isSelectable()) && (this.setSelectedItem(this.selectedItem_.getParent()), !0))
                    }
                    selectChild_() {
                        if (!this.selectedItem_ || !this.selectedItem_.isCollapsible()) return !1;
                        let t = this.selectedItem_;
                        return t.isExpanded() ? this.selectNext_() : t.toggleExpanded(), !0
                    }
                    selectNext_() {
                        if (!this.selectedItem_) return !1;
                        let t = this.contents_.indexOf(this.selectedItem_) + 1;
                        if (-1 < t && t < this.contents_.length) {
                            let e = this.contents_[t];
                            for (; e && !e.isSelectable();) e = this.contents_[++t];
                            if (e && e.isSelectable()) return this.setSelectedItem(e), !0
                        }
                        return !1
                    }
                    selectPrevious_() {
                        if (!this.selectedItem_) return !1;
                        let t = this.contents_.indexOf(this.selectedItem_) - 1;
                        if (-1 < t && t < this.contents_.length) {
                            let e = this.contents_[t];
                            for (; e && !e.isSelectable();) e = this.contents_[--t];
                            if (e && e.isSelectable()) return this.setSelectedItem(e), !0
                        }
                        return !1
                    }
                    dispose() {
                        this.workspace_.getComponentManager().removeComponent("toolbox"), this.flyout_.dispose();
                        for (var t = 0; t < this.contents_.length; t++) this.contents_[t].dispose();
                        for (t = 0; t < this.boundEvents_.length; t++) ti(this.boundEvents_[t]);
                        this.boundEvents_ = [], this.contents_ = [], this.HtmlDiv && (this.workspace_.getThemeManager().unsubscribe(this.HtmlDiv), tb(this.HtmlDiv))
                    }
                };
                ta('\n.blocklyToolboxDelete {\n  cursor: url("<<<PATH>>>/handdelete.cur"), auto;\n}\n\n.blocklyToolboxGrab {\n  cursor: url("<<<PATH>>>/handclosed.cur"), auto;\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n/* Category tree in Toolbox. */\n.blocklyToolboxDiv {\n  background-color: #ddd;\n  overflow-x: visible;\n  overflow-y: auto;\n  padding: 4px 0 4px 0;\n  position: absolute;\n  z-index: 70;  /* so blocks go under toolbox when dragging */\n  -webkit-tap-highlight-color: transparent;  /* issue #1345 */\n}\n\n.blocklyToolboxContents {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.blocklyToolboxContents:focus {\n  outline: none;\n}\n'), d(c.TOOLBOX, h, u7);
                var dt = r.Align$$module$build$src$core$inputs$align.LEFT,
                    de = r.Align$$module$build$src$core$inputs$align.CENTRE,
                    di = r.Align$$module$build$src$core$inputs$align.RIGHT,
                    ds = lx.INPUT_VALUE,
                    dn = lx.OUTPUT_VALUE,
                    dr = lx.NEXT_STATEMENT,
                    dl = lx.PREVIOUS_STATEMENT,
                    da = r.inputTypes$$module$build$src$core$inputs$input_types.DUMMY,
                    dh = rA.TOP,
                    dc = rA.BOTTOM,
                    du = rA.LEFT,
                    dd = rA.RIGHT;
                cr.prototype.newBlock = function (t, e) {
                    return new cp(this, t, e)
                }, ch.prototype.newBlock = function (t, e) {
                    return new ck(this, t, e)
                }, ch.newTrashcan = function (t) {
                    return new c$(t)
                }, r3.prototype.showContextMenu = function (t) {
                    if (!this.workspace.options.readOnly) {
                        var e = [];
                        this.isDeletable() && this.isMovable() && (e.push(iy(this)), e.push(iw(this))), ig(t, e, this.RTL)
                    }
                }, he.prototype.newWorkspaceSvg = function (t) {
                    return new ch(t)
                }, r.Names$$module$build$src$core$names.prototype.populateProcedures = function (t) {
                    t = (t = sq(t))[0].concat(t[1]);
                    for (let e = 0; e < t.length; e++) this.getName(t[e][0], r.Names$$module$build$src$core$names.NameType.PROCEDURE)
                };
                var dp = lx,
                    dg = {
                        ALIGN_CENTRE: de,
                        ALIGN_LEFT: dt,
                        ALIGN_RIGHT: di
                    };
                return dg.ASTNode = hj, dg.BasicCursor = c_, dg.Block = cp, dg.BlockDragger = cQ, dg.BlockSvg = ck, dg.Blocks = o3, dg.Bubble = ht, dg.BubbleDragger = am, dg.COLLAPSED_FIELD_NAME = h2, dg.COLLAPSED_INPUT_NAME = h1, dg.COLLAPSE_CHARS = 30, dg.CodeGenerator = r.CodeGenerator$$module$build$src$core$generator, dg.CollapsibleToolboxCategory = u4, dg.ComponentManager = nQ, dg.Connection = h0, dg.ConnectionChecker = ci, dg.ConnectionDB = l_, dg.ConnectionType = lx, dg.ContextMenu = l0, dg.ContextMenuItems = u$, dg.ContextMenuRegistry = l1, dg.Css = n2, dg.Cursor = cb, dg.DELETE_VARIABLE_ID = aT, dg.DRAG_STACK = !0, dg.DUMMY_INPUT = da, dg.DeleteArea = cy, dg.DragTarget = cw, dg.DropDownDiv = ap, dg.Events = uh, dg.Extensions = hs, dg.Field = aQ, dg.FieldAngle = uC, dg.FieldCheckbox = uI, dg.FieldColour = uS, dg.FieldDropdown = a9, dg.FieldImage = ud, dg.FieldLabel = hF, dg.FieldLabelSerializable = uR, dg.FieldMultilineInput = uD, dg.FieldNumber = uA, dg.FieldTextInput = ug, dg.FieldVariable = uN, dg.Flyout = uL, dg.FlyoutButton = uO, dg.FlyoutMetricsManager = ux, dg.Generator = r.CodeGenerator$$module$build$src$core$generator, dg.Gesture = aH, dg.Grid = aG, dg.HorizontalFlyout = uM, dg.INPUT_VALUE = ds, dg.Input = hz, dg.InsertionMarkerManager = h5, dg.Marker = cg, dg.MarkerManager = aU, dg.Menu = lW, dg.MenuItem = lV, dg.MetricsManager = cJ, dg.Msg = r.Msg$$module$build$src$core$msg, dg.NEXT_STATEMENT = dr, dg.Names = r.Names$$module$build$src$core$names, dg.OPPOSITE_TYPE = af, dg.OUTPUT_VALUE = dn, dg.Options = aX, dg.PREVIOUS_STATEMENT = dl, dg.PROCEDURE_CATEGORY_NAME = hW, dg.Procedures = hV, dg.RENAME_VARIABLE_ID = aE, dg.RenderedConnection = cf, dg.Scrollbar = rk, dg.ScrollbarPair = cK, dg.ShortcutItems = cU, dg.ShortcutRegistry = cF, dg.TOOLBOX_AT_BOTTOM = dc, dg.TOOLBOX_AT_LEFT = du, dg.TOOLBOX_AT_RIGHT = dd, dg.TOOLBOX_AT_TOP = dh, dg.TabNavigateCursor = cm, dg.Theme = aV, dg.ThemeManager = h7, dg.Themes = {
                    Classic: az,
                    Zelos: u5
                }, dg.Toolbox = u7, dg.ToolboxCategory = u9, dg.ToolboxItem = u6, dg.ToolboxSeparator = u8, dg.Tooltip = aP, dg.Touch = nF, dg.Trashcan = c$, dg.UnattachedFieldError = a0, dg.VARIABLE_CATEGORY_NAME = rJ, dg.VARIABLE_DYNAMIC_CATEGORY_NAME = ct, dg.VERSION = "10.3.0", dg.VariableMap = cn, dg.VariableModel = rK, dg.Variables = rq, dg.VariablesDynamic = ce, dg.VerticalFlyout = uB, dg.WidgetDiv = lj, dg.Workspace = cr, dg.WorkspaceAudio = cl, dg.WorkspaceComment = rQ, dg.WorkspaceCommentSvg = r3, dg.WorkspaceDragger = aF, dg.WorkspaceSvg = ch, dg.Xml = lt, dg.ZoomControls = rP, dg.blockAnimations = a_, dg.blockRendering = h4, dg.browserEvents = nj, dg.bubbles = c0, dg.bumpObjects = cq, dg.clipboard = lw, dg.common = o4, dg.config = r.config$$module$build$src$core$config, dg.connectionTypes = dp, dg.constants = {
                    COLLAPSED_FIELD_NAME: h2,
                    COLLAPSED_INPUT_NAME: h1
                }, dg.defineBlocksWithJsonArray = x, dg.dialog = rV, dg.fieldRegistry = a6, dg.geras = uJ, dg.getMainWorkspace = C, dg.getSelected = I, dg.hasBubble = sp, dg.hideChaff = function (t) {
                    C().hideChaff(t)
                }, dg.icons = hp, dg.inject = function (t, e) {
                    let i;
                    var s = null;
                    if (s = "string" == typeof t ? document.getElementById(t) || document.querySelector(t) : t, !document.contains(s) && document !== (null == (i = s) ? void 0 : i.ownerDocument)) throw Error("Error: container is not in current document");
                    t = new aX(e || {}), (e = document.createElement("div")).className = "injectionDiv", e.tabIndex = 0, it(e, lG.LABEL, r.Msg$$module$build$src$core$msg.WORKSPACE_ARIA_LABEL), s.appendChild(e), s = oK(e, t);
                    let o = oJ(e, s, t);
                    return oj(o), v(o), A(o), e.addEventListener("focusin", function () {
                        v(o)
                    }), o
                }, dg.inputTypes = r.inputTypes$$module$build$src$core$inputs$input_types, dg.inputs = uF, dg.isCopyable = oc, dg.isIcon = function (t) {
                    return void 0 !== t.getType && void 0 !== t.initView && void 0 !== t.dispose && void 0 !== t.getWeight && void 0 !== t.getSize && void 0 !== t.applyColour && void 0 !== t.hideForInsertionMarker && void 0 !== t.updateEditable && void 0 !== t.updateCollapsed && void 0 !== t.isShownWhenCollapsed && void 0 !== t.setOffsetInBlock && void 0 !== t.onLocationChange && void 0 !== t.onClick
                }, dg.isObservable = sR, dg.isPaster = function (t) {
                    return void 0 !== t.paste
                }, dg.isSerializable = ex, dg.isVariableBackedParameterModel = tq, dg.minimalist = u0, dg.procedures = hV, dg.registry = u, dg.renderManagement = r7, dg.serialization = {
                    blocks: lc,
                    exceptions: ll,
                    priorities: {
                        BLOCKS: 50,
                        PROCEDURES: 75,
                        VARIABLES: 100
                    },
                    procedures: cV,
                    registry: la,
                    variables: cX,
                    workspaces: cY
                }, dg.setLocale = lN, dg.setParentContainer = D, dg.svgResize = A, dg.thrasos = u3, dg.uiPosition = rM, dg.utils = hn, dg.zelos = uy, Object.defineProperties(dg, {
                    HSV_SATURATION: {
                        get: function () {
                            return tc("Blockly.HSV_SATURATION", "version 10", "version 11", "Blockly.utils.colour.getHsvSaturation()"), sg()
                        },
                        set: function (t) {
                            tc("Blockly.HSV_SATURATION", "version 10", "version 11", "Blockly.utils.colour.setHsvSaturation()"), sb(t)
                        }
                    },
                    HSV_VALUE: {
                        get: function () {
                            return tc("Blockly.HSV_VALUE", "version 10", "version 11", "Blockly.utils.colour.getHsvValue()"), s_()
                        },
                        set: function (t) {
                            tc("Blockly.HSV_VALUE", "version 10", "version 11", "Blockly.utils.colour.setHsvValue()"), sm(t)
                        }
                    }
                }), "Blockly" in globalThis || (globalThis.Blockly = {
                    Msg: lO
                }), dg.__namespace__ = r, dg
            }) ? s.apply(e, []) : s) && (t.exports = o)
        }
    }
]);