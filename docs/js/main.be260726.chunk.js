(this["webpackJsonptest-search"] = this["webpackJsonptest-search"] || []).push([[0], { 1067: function (e, t, a) { "use strict"; a.r(t); var n = a(0), c = a.n(n), r = a(10), l = a.n(r), s = (a(19), a(1)), o = a(11), u = a.n(o), i = function (e) { return c.a.createElement("input", { className: u.a.search, type: "text", value: e.value, onChange: e.onChange }) }; i.defaultProps = { value: "", onChange: function () { } }; var m = function (e) { return c.a.createElement("div", null, e.names.map((function (e) { return c.a.createElement("div", { style: { textDecoration: "underline", paddingBottom: "15px", textAlign: "center" } }, e) }))) }; m.defaultProps = { names: [] }; for (var _ = a(4), b = a.n(_), p = [], f = 0; f < 3e5; f++) { var d = b.a.name.findName(); p.push(d) } for (var h = function (e) { return p.filter((function (t) { return t.toUpperCase().includes(e.toUpperCase()) })) }, v = a(5), E = a.n(v), x = function () { var e = Object(n.useState)(""), t = Object(s.a)(e, 2), a = t[0], r = t[1], l = Object(n.useCallback)((function (e) { r(e.target.value) }), []), o = "" === a ? p : h(a); return c.a.createElement("div", { className: E.a.container }, c.a.createElement("div", { className: E.a.searchBox }, c.a.createElement(i, { value: a, onChange: l })), c.a.createElement("div", { className: E.a.list }, c.a.createElement(m, { names: o }))) }, y = [], N = 0; N < 3e5; N++) { var g = b.a.name.findName(); y.push(g) } var C = a(2), O = a.n(C), j = function () { var e = Object(n.useState)(""), t = Object(s.a)(e, 2), a = t[0], r = t[1], l = Object(n.useState)(0), o = Object(s.a)(l, 2), u = o[0], _ = o[1], b = Object(n.useCallback)((function (e) { r(e.target.value) }), []), p = Object(n.useMemo)((function () { return "" === a ? y.slice(1e3 * u, 1e3 * u + 1e3) : function (e, t) { return y.slice(1e3 * t, 1e3 * t + 1e3).filter((function (t) { return t.toUpperCase().includes(e.toUpperCase()) })) }(a, u) }), [u, a]), f = Object(n.useCallback)((function (e) { return function () { _((function (t) { return t + e })) } }), []); return c.a.createElement("div", { className: O.a.container }, c.a.createElement("div", { className: O.a.searchBox }, c.a.createElement(i, { value: a, onChange: b })), c.a.createElement("p", null, u + 1, " / ", y.length / 1e3), c.a.createElement("div", { className: O.a.list }, c.a.createElement(m, { names: p })), c.a.createElement("div", { className: O.a.buttons }, c.a.createElement("button", { type: "button", className: O.a.button, onClick: f(-1), disabled: 0 === u }, "Prev"), c.a.createElement("button", { type: "button", className: O.a.button, onClick: f(1), disabled: u === y.length / 1e3 - 1 }, "Next"))) }, k = a(13), w = a(12), B = a(6), P = a.n(B), S = function (e) { return c.a.createElement("div", { className: P.a.container }, c.a.createElement(w.a, null, (function (t) { var a = t.height, n = t.width; return c.a.createElement(k.a, { itemCount: e.names.length, itemSize: 20, height: a, width: n }, (function (t) { var a = t.index, n = t.style; return c.a.createElement("div", { className: P.a.item, style: n }, e.names[a]) })) }))) }; S.defaultProps = { names: [] }; var U = a(7), J = a.n(U), K = function () { var e = Object(n.useState)(""), t = Object(s.a)(e, 2), a = t[0], r = t[1], l = Object(n.useCallback)((function (e) { r(e.target.value) }), []), o = "" === a ? p : h(a); return c.a.createElement("div", { className: J.a.container }, c.a.createElement("div", { className: J.a.searchBox }, c.a.createElement(i, { value: a, onChange: l })), c.a.createElement(S, { names: o })) }, W = a(3), q = a.n(W), L = function () { var e = Object(n.useState)("none"), t = Object(s.a)(e, 2), a = t[0], r = t[1], l = Object(n.useCallback)((function (e) { return function () { r(e) } }), []); return c.a.createElement("div", { className: q.a.container }, c.a.createElement("div", { className: q.a.buttons }, c.a.createElement("button", { className: q.a.button, type: "button", onClick: l("normal") }, "Normal*Warning*"), c.a.createElement("button", { className: q.a.button, type: "button", onClick: l("page") }, "Pagination"), c.a.createElement("button", { className: q.a.button, type: "button", onClick: l("window") }, "React Window")), c.a.createElement("div", { className: q.a.list }, function (e) { switch (e) { case "normal": return c.a.createElement(x, null); case "page": return c.a.createElement(j, null); case "window": return c.a.createElement(K, null); default: return c.a.createElement("div", null) } }(a))) }; l.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(L, null)), document.getElementById("root")) }, 11: function (e, t, a) { e.exports = { search: "style_search__2ihux" } }, 14: function (e, t, a) { e.exports = a(1067) }, 19: function (e, t, a) { }, 2: function (e, t, a) { e.exports = { container: "style_container__k-hsh", searchBox: "style_searchBox__tT503", list: "style_list__2cyQh", button: "style_button__1ybLx", buttons: "style_buttons__2OK8P" } }, 3: function (e, t, a) { e.exports = { container: "app_container__2JKVN", button: "app_button__1epl4", buttons: "app_buttons__2PWRg", "search-box": "app_search-box__HwcOU", list: "app_list__2we4s" } }, 5: function (e, t, a) { e.exports = { container: "style_container__2xduG", searchBox: "style_searchBox__1LTX-", list: "style_list__2Kjn0" } }, 6: function (e, t, a) { e.exports = { item: "style_item__kenU9", container: "style_container__2PXqe" } }, 7: function (e, t, a) { e.exports = { container: "style_container__1O4we", searchBox: "style_searchBox__3bJBK", list: "style_list__VpbNq" } } }, [[14, 1, 2]]]);
//# sourceMappingURL=main.be260726.chunk.js.map