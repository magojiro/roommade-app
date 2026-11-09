(() => {
  // v4/src/screens/c.jsx
  var { useState } = React;
  var {
    RM_C,
    RM_F,
    RIcon,
    RMButton,
    RMTextLink,
    RMH1,
    RMLabel,
    RMChip,
    RMTag,
    RMStepper,
    RMAppBar,
    RMScreen,
    RMSectionHead,
    RM_BTN_RESET,
    RM_PRODUCTS,
    RM_TIERS,
    RM_IMG,
    RM_LOOKS,
    rmTotals,
    rmMoney,
    rmPrice
  } = window;
  var C = RM_C;
  var RM_CART_GROUPS = [
    { room: "Living room", ids: ["sofa", "table", "rug", "lamp", "chair", "art"] },
    { room: "Bedroom", ids: ["sideboard", "curtain"] }
  ];
  function cartTotals(cart, tier) {
    let furniture = 0;
    RM_PRODUCTS.forEach((p) => {
      furniture += rmPrice(p, tier) * (cart[p.id] || 0);
    });
    const delivery = furniture > 0 ? RM_TIERS[tier].delivery : 0;
    const tax = Math.round((furniture + delivery) * 0.08875);
    return { furniture, delivery, tax, total: furniture + delivery + tax, count: Object.values(cart).reduce((a, b) => a + b, 0) };
  }
  function ScreenC1({ go, state }) {
    const segs = ["Inspiration", "Furniture", "Lighting", "Rugs", "Decor", "Outdoor"];
    const [seg, setSeg] = useState("Inspiration");
    const [style, setStyle] = useState("All");
    const styles = ["All", "Modern", "Mid-Century", "Coastal", "Japandi"];
    const shown = RM_PRODUCTS.filter((p) => seg === "Inspiration" || seg === "Furniture" && p.category === "Furniture" || seg === "Lighting" && p.category === "Lighting" || seg === "Rugs" && p.category === "Rugs" || seg === "Decor" && p.category === "Decor");
    return /* @__PURE__ */ React.createElement(RMScreen, { tab: "C1", onNav: go }, /* @__PURE__ */ React.createElement("div", { style: { padding: "56px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 28 } }, "Shop"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("A2"), style: { ...RM_BTN_RESET, width: 30, height: 30, border: "1px solid " + C.line, borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)" }, "aria-label": "Search" }, /* @__PURE__ */ React.createElement(RIcon, { name: "search", size: 15, color: C.ink })), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D1"), style: { ...RM_BTN_RESET, width: 30, height: 30, border: "1px solid " + C.line, borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)" }, "aria-label": "Ideabooks" }, /* @__PURE__ */ React.createElement(RIcon, { name: "heart", size: 15, color: C.ink })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, overflowX: "auto", margin: "16px -20px 0", padding: "0 20px 2px" }, className: "rm-scroll-x" }, segs.map((s) => /* @__PURE__ */ React.createElement(RMChip, { key: s, active: seg === s, onClick: () => setSeg(s) }, s))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, overflowX: "auto", margin: "8px -20px 0", padding: "0 20px 2px" }, className: "rm-scroll-x" }, styles.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", onClick: () => setStyle(s), style: {
      ...RM_BTN_RESET,
      height: 26,
      padding: "0 10px",
      borderRadius: 100,
      flex: "none",
      border: "1px solid " + (style === s ? C.brass : C.line),
      background: style === s ? "rgba(176,138,84,0.12)" : "transparent",
      fontFamily: RM_F.sans,
      fontSize: 10.5,
      color: style === s ? "#7A5A2C" : C.sub
    } }, s))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Shop by look", action: "All looks", onAction: () => go("B4") }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, overflowX: "auto", margin: "10px -20px 0", padding: "0 20px 4px" }, className: "rm-scroll-x" }, RM_LOOKS.map((l) => /* @__PURE__ */ React.createElement("button", { key: l.title, type: "button", onClick: () => go("B4"), style: {
      ...RM_BTN_RESET,
      width: 176,
      flex: "none",
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement("div", { style: { height: 118, borderRadius: 10, overflow: "hidden", background: C.sand } }, /* @__PURE__ */ React.createElement("img", { src: l.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 14, marginTop: 7 } }, l.title), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: C.sub, marginTop: 2 } }, l.meta))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: seg === "Inspiration" ? "Pieces we'd use" : seg }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.sub } }, shown.length, " items")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 11 } }, shown.map((p) => /* @__PURE__ */ React.createElement("button", { key: p.id, type: "button", onClick: () => go("C2", { product: p.id }), style: { ...RM_BTN_RESET, textAlign: "left" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 142, borderRadius: 10, overflow: "hidden", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: p.name, style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 7, top: 7 } }, /* @__PURE__ */ React.createElement(RMTag, { tone: p.badge === "In stock" ? "sage" : "brass" }, p.badge === "In stock" ? "In stock" : "Made to order"))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, marginTop: 7, lineHeight: 1.25 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: C.sub, marginTop: 2 } }, p.sub), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600, fontVariantNumeric: "tabular-nums" } }, rmMoney(rmPrice(p, 1))), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: C.sub } }, p.badge === "In stock" ? "Ships in 5 days" : "4 weeks")))))), /* @__PURE__ */ React.createElement("div", { style: { margin: "22px 0 18px", borderTop: "1px solid " + C.line, paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "#9A9186" } }, "Free fabric samples \xB7 30-day returns on stock items \xB7 Delivered and installed in NY, PA, IL, OH and NC."))));
  }
  function ScreenC2({ go, state }) {
    const p = RM_PRODUCTS.find((x) => x.id === (state.product || "sofa")) || RM_PRODUCTS[0];
    const [color, setColor] = useState(0);
    const [qty, setQty] = useState(1);
    const colors = ["#DCD2BF", "#9CA98F", "#8B5A3C", "#2C2A26"];
    const colorNames = ["Oat", "Sage", "Cognac", "Ink"];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 34px", background: C.paper, borderTop: "1px solid " + C.line, display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement(RMStepper, { value: qty, onChange: setQty }), /* @__PURE__ */ React.createElement(RMButton, { onClick: () => {
      const next = { ...state.cart };
      next[p.id] = (next[p.id] || 0) + qty;
      go("C3", { cart: next });
    }, style: { flex: 1 } }, "Add to cart \xB7 ", rmMoney(rmPrice(p, 1) * qty))) }, /* @__PURE__ */ React.createElement(
      RMAppBar,
      {
        title: p.category === "Furniture" ? "Furniture" : p.category,
        onBack: () => go("C1"),
        right: /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D1"), style: { ...RM_BTN_RESET, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "heart", size: 17, color: C.ink }))
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 250, borderRadius: 12, overflow: "hidden", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: p.name, style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 8 } }, [["center", "100%"], ["50% 30%", "190%"], ["30% 70%", "170%"], ["70% 60%", "150%"]].map(([pos, size], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      width: 54,
      height: 54,
      borderRadius: 7,
      overflow: "hidden",
      background: "#EFE9DE",
      border: i === 0 ? "1.5px solid " + C.ink : "1px solid " + C.line
    } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: "", style: { width: size, height: size, objectFit: "cover", objectPosition: pos, transform: "translate(-50%,-50%)", position: "relative", left: "50%", top: "50%" } })))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, display: "flex", justifyContent: "space-between", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(RMLabel, null, p.badge === "In stock" ? "In stock \xB7 ships in 5 days" : p.badge), /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 23, marginTop: 5 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, color: C.sub, marginTop: 4 } }, p.sub)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 24, fontVariantNumeric: "tabular-nums" } }, rmMoney(rmPrice(p, 1)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Color \xB7 ", colorNames[color]), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, marginTop: 8 } }, colors.map((c, i) => /* @__PURE__ */ React.createElement("button", { key: c, type: "button", onClick: () => setColor(i), style: {
      width: 28,
      height: 28,
      borderRadius: 100,
      background: c,
      cursor: "pointer",
      border: "1px solid " + (i === color ? C.ink : "rgba(26,24,21,0.12)"),
      boxShadow: i === color ? "0 0 0 2px " + C.paper + " inset" : "none"
    }, "aria-label": colorNames[i] })), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D5"), style: { ...RM_BTN_RESET, marginLeft: 4, display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.wine, textDecoration: "underline", textUnderlineOffset: 2 } }, "Free swatch")))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Size"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 8 } }, /* @__PURE__ */ React.createElement(RMChip, { active: true }, '84" \xB7 $1,890'), /* @__PURE__ */ React.createElement(RMChip, null, '72" \xB7 $1,640'), /* @__PURE__ */ React.createElement(RMChip, null, '92" \xB7 $2,180')), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.sub, marginTop: 6 } }, p.dims, ' \xB7 Seat height 18"')), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, borderTop: "1px solid " + C.line } }, [
      ["Materials", p.id === "sofa" ? "Solid oak frame, kiln-dried. 68% wool / 32% recycled boucl\xE9. Cushions: high-resilience foam wrapped in feather." : "Solid oak, natural cane, travertine or linen as noted. Finished by hand in small batches."],
      ["Lead time", p.badge === "In stock" ? "In stock \u2014 leaves our Charlotte, NC warehouse in 5 business days." : "Made to order in 3\u20134 weeks, then 1\u20132 weeks in transit to your city."],
      ["Certification", "TSCA Title VI compliant \xB7 TB 117-2013 foam \xB7 FSC-certified wood"]
    ].map(([k, v], i) => /* @__PURE__ */ React.createElement("div", { key: k, style: { padding: "12px 0", borderBottom: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, k), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 12, color: "#A69C8D" })), /* @__PURE__ */ React.createElement("p", { style: { margin: "5px 0 0", fontFamily: RM_F.sans, fontSize: 10.5, lineHeight: 1.5, color: C.sub } }, v)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginTop: 12 } }, /* @__PURE__ */ React.createElement(RMTag, { tone: "grey" }, "TSCA Title VI"), /* @__PURE__ */ React.createElement(RMTag, { tone: "grey" }, "TB 117-2013"), /* @__PURE__ */ React.createElement(RMTag, { tone: "sage" }, "FSC wood")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("B4"), style: {
      marginTop: 16,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 11,
      textAlign: "left",
      padding: 10,
      borderRadius: 10,
      border: "1px solid " + C.line,
      background: "rgba(255,255,255,0.6)",
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 48, height: 48, borderRadius: 7, overflow: "hidden", flex: "none" } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.before, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, "See it in your room"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.sub, marginTop: 2 } }, "Preview on your photo of the Brooklyn living room")), /* @__PURE__ */ React.createElement(RIcon, { name: "arrowR", size: 14, color: C.ink })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", gap: 8, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "truck", size: 15, color: C.sage }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: C.sub } }, "Delivery & installation in New York, Philadelphia, Chicago, Cincinnati and Charlotte. Room-of-choice delivery included; assembly and packaging removal by our 2-person crew."))));
  }
  function ScreenC3({ go, state, setState }) {
    const tier = state.tier || 1;
    const t = cartTotals(state.cart, tier);
    const empty = t.count === 0;
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: C.paper, borderTop: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement(RMButton, { disabled: empty, onClick: () => go("C4") }, "Checkout \xB7 ", rmMoney(t.total)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontFamily: RM_F.sans, fontSize: 9.5, color: C.sub, marginTop: 7 } }, "Secure checkout \xB7 Apple Pay \xB7 Pay in 4 with Affirm")) }, /* @__PURE__ */ React.createElement(
      RMAppBar,
      {
        title: "Cart",
        sub: `${t.count} items \xB7 ${empty ? "empty" : "2 rooms"}`,
        onBack: () => go("B5"),
        right: /* @__PURE__ */ React.createElement(RMTextLink, { onClick: () => go("C1"), style: { fontSize: 10.5 } }, "Keep shopping")
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, empty ? /* @__PURE__ */ React.createElement("div", { style: { padding: "60px 20px", textAlign: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "bag", size: 30, color: C.brass }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 20, marginTop: 14 } }, "Nothing here yet"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: RM_F.sans, fontSize: 11.5, color: C.sub, lineHeight: 1.5 } }, "Start from a design or browse pieces by room."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", onClick: () => go("C1") }, "Browse the shop"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, background: "rgba(124,139,118,0.11)", borderRadius: 9, padding: "9px 11px" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "box", size: 15, color: "#4E5C48" }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: "#44513E" } }, "Installed by a 2-person crew \xB7 scheduled within 5 days of arrival")), RM_CART_GROUPS.map((g) => {
      const items = RM_PRODUCTS.filter((p) => g.ids.includes(p.id) && (state.cart[p.id] || 0) > 0);
      if (!items.length) return null;
      return /* @__PURE__ */ React.createElement("div", { key: g.room, style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement(RMLabel, null, g.room, " \xB7 ", items.reduce((a, b) => a + (state.cart[b.id] || 0), 0), " pieces"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.sub } }, "Made to order mix")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, items.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.id, style: { display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement("div", { style: { width: 56, height: 56, borderRadius: 8, overflow: "hidden", background: "#EFE9DE", flex: "none" } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: C.sub, marginTop: 2 } }, p.sub), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement(RMStepper, { compact: true, value: state.cart[p.id], onChange: (v) => setState({ cart: { ...state.cart, [p.id]: v } }) }))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, fontVariantNumeric: "tabular-nums" } }, rmMoney(rmPrice(p, tier) * state.cart[p.id])), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setState({ cart: { ...state.cart, [p.id]: 0 } }), style: { ...RM_BTN_RESET, fontFamily: RM_F.sans, fontSize: 9.5, color: "#9A9186", textDecoration: "underline", textUnderlineOffset: 2 } }, "Remove"))))));
    }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, border: "1px solid " + C.line, borderRadius: 12, padding: 14, background: "rgba(255,255,255,0.6)" } }, /* @__PURE__ */ React.createElement(RMLabel, { style: { color: C.ink } }, RM_TIERS[tier].label, " selection"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, display: "flex", justifyContent: "space-between", padding: "0 0 6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5 } }, "Subtotal"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.furniture))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", padding: "0 0 6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5 } }, "Delivery & install"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontVariantNumeric: "tabular-nums" } }, t.delivery ? rmMoney(t.delivery) : "Free")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", padding: "6px 0 0", borderTop: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, color: C.sub } }, "Estimated tax (NY 8.875%)"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.tax))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 10, paddingTop: 10, borderTop: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 16 } }, "Total"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 22, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.total))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: "#9A9186", marginTop: 8 } }, "Prices include US duties \xB7 Illustrative sample data")))));
  }
  function ScreenC4({ go, state, setState }) {
    const tier = state.tier || 1;
    const t = cartTotals(state.cart, tier);
    const [method, setMethod] = useState(1);
    const [pay, setPay] = useState(0);
    const [day, setDay] = useState(1);
    const [slot, setSlot] = useState(0);
    const methods = [
      { name: "Standard delivery", note: "Left at your building entrance", price: 0 },
      { name: "Room of choice + install", note: "Assembled, placed, packaging removed", price: RM_TIERS[tier].delivery || 540 },
      { name: "White glove", note: "Room of choice, plus wall mounting & styling", price: (RM_TIERS[tier].delivery || 540) + 260 }
    ];
    const pays = ["Card", "Apple Pay", "PayPal", "Pay in 4"];
    const days = ["Tue Nov 12", "Wed Nov 13", "Thu Nov 14", "Fri Nov 15"];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: C.paper, borderTop: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("C5") }, "Place order \xB7 ", rmMoney(t.total + methods[method].price - (t.delivery || 0))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontFamily: RM_F.sans, fontSize: 9, color: C.sub, marginTop: 7 } }, "You can change or cancel before production starts")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Checkout", sub: "Step 2 of 3 \xB7 delivery & payment", onBack: () => go("C3") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Delivery address"), /* @__PURE__ */ React.createElement(RMTextLink, { style: { fontSize: 10.5 } }, "Edit")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + C.line, borderRadius: 10, padding: 12, background: "rgba(255,255,255,0.6)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "pin", size: 14, color: C.brass }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 } }, "Ava Coleman"), /* @__PURE__ */ React.createElement(RMTag, { tone: "sage" }, "Default")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, lineHeight: 1.55, color: C.sub, marginTop: 6 } }, "214 Hoyt Street, Apt 4B", /* @__PURE__ */ React.createElement("br", null), "Brooklyn, NY 11217 \xB7 United States", /* @__PURE__ */ React.createElement("br", null), "(917) 555-0148")), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Delivery method"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginTop: 8 } }, methods.map((m, i) => {
      const on = method === i;
      return /* @__PURE__ */ React.createElement("button", { key: m.name, type: "button", onClick: () => setMethod(i), style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        textAlign: "left",
        padding: "10px 12px",
        cursor: "pointer",
        borderRadius: 10,
        background: on ? "#FBF8F2" : "transparent",
        border: "1px solid " + (on ? C.wine : C.line)
      } }, /* @__PURE__ */ React.createElement("span", { style: { width: 15, height: 15, borderRadius: 100, border: "1px solid " + (on ? C.wine : "#C9C0B2"), display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1, flex: "none" } }, on && /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 100, background: C.wine } })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, m.name), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9.5, color: C.sub, marginTop: 2 } }, m.note)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontVariantNumeric: "tabular-nums" } }, m.price ? rmMoney(m.price) : "Free"));
    })), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Installation window"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, overflowX: "auto", margin: "8px -20px 0", padding: "0 20px" }, className: "rm-scroll-x" }, days.map((d, i) => /* @__PURE__ */ React.createElement("button", { key: d, type: "button", onClick: () => setDay(i), style: {
      ...RM_BTN_RESET,
      flex: "none",
      padding: "8px 11px",
      borderRadius: 8,
      border: "1px solid " + (day === i ? C.ink : C.line),
      background: day === i ? C.ink : "transparent",
      fontFamily: RM_F.sans,
      fontSize: 10.5,
      color: day === i ? "#FBF7F0" : C.ink
    } }, d))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 6 } }, ["Morning 8\u201312", "Afternoon 12\u20135"].map((s, i) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", onClick: () => setSlot(i), style: {
      ...RM_BTN_RESET,
      flex: 1,
      padding: "8px 0",
      borderRadius: 8,
      border: "1px solid " + (slot === i ? C.ink : C.line),
      background: slot === i ? "rgba(26,24,21,0.06)" : "transparent",
      fontFamily: RM_F.sans,
      fontSize: 10.5
    } }, s))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: C.sub, marginTop: 6 } }, "Final date confirmed once production completes. You'll get a text 48 hours before."), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Payment"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginTop: 8 } }, pays.map((p, i) => /* @__PURE__ */ React.createElement("button", { key: p, type: "button", onClick: () => setPay(i), style: {
      ...RM_BTN_RESET,
      height: 44,
      borderRadius: 9,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 11px",
      border: "1px solid " + (pay === i ? C.wine : C.line),
      background: pay === i ? "#FBF8F2" : "transparent"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500 } }, p), p === "Pay in 4" ? /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: C.brass } }, rmMoney(t.total / 4), "/mo") : pay === i ? /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 12, color: C.wine, sw: 2.4 }) : null))), pay === 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + C.line, borderRadius: 9, padding: 11, display: "flex", flexDirection: "column", gap: 7, background: "rgba(255,255,255,0.5)" } }, [["Card number", "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242"], ["Expiry / CVC", "09 / 28 \xB7 \u2022\u2022\u2022"]].map(([l, v]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.sub } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, fontVariantNumeric: "tabular-nums" } }, v)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, borderTop: "1px solid " + C.line, paddingTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, color: C.sub } }, "Subtotal"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.furniture))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, color: C.sub } }, "Delivery \xB7 ", methods[method].name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontVariantNumeric: "tabular-nums" } }, methods[method].price ? rmMoney(methods[method].price) : "Free")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, color: C.sub } }, "Estimated tax"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.tax)))), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: "#9A9186", marginTop: 14 } }, "By placing this order you agree to our Terms of Sale. California residents: do not sell my personal information (CCPA). Stock items may be returned within 30 days; made-to-order items are final sale.")));
  }
  function ScreenC5({ go }) {
    return /* @__PURE__ */ React.createElement(RMScreen, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "70px 24px 30px", display: "flex", flexDirection: "column", minHeight: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 54, height: 54, borderRadius: 100, border: "1px solid rgba(176,138,84,0.4)", background: "rgba(176,138,84,0.12)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 24, color: C.brass, sw: 1.8 })), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20, color: C.brass } }, "Order confirmed"), /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 30, marginTop: 7 } }, "Your room is", /* @__PURE__ */ React.createElement("br", null), "on its way."), /* @__PURE__ */ React.createElement("p", { style: { margin: "10px 0 0", fontFamily: RM_F.sans, fontSize: 12.5, lineHeight: 1.6, color: C.sub } }, "Order #RM-284916 \xB7 7 pieces. We'll text you at each step \u2014 production, ocean freight, warehouse, and the morning our crew arrives."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, border: "1px solid " + C.line, borderRadius: 12, overflow: "hidden", background: "rgba(255,255,255,0.6)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, padding: 12, borderBottom: "1px solid " + C.line } }, /* @__PURE__ */ React.createElement(RIcon, { name: "calendar", size: 15, color: C.ink }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, "Estimated arrival Dec 2 \u2013 Dec 12"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: C.sub, marginTop: 2 } }, "Install held Tue Nov 12, morning window"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", padding: "14px 12px 12px", gap: 0 } }, [["Made to order", "Nov"], ["In transit", "Nov"], ["Installed", "Dec"]].map(([t, d], i) => /* @__PURE__ */ React.createElement("div", { key: t, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", width: "100%" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 100, background: i === 0 ? C.wine : "#D5CCBD", flex: "none" } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, height: 1, background: i === 2 ? "transparent" : "#D5CCBD", marginLeft: 4 } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 600, marginTop: 6 } }, t), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: C.sub } }, d))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, display: "flex", gap: 8, alignItems: "flex-start", background: "rgba(124,139,118,0.1)", borderRadius: 10, padding: 11 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "shield", size: 15, color: "#4E5C48" }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "#44513E" } }, "Free fabric swaps for 14 days. If a piece doesn't fit, our crew takes it back on install day.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingTop: 22, display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("D2") }, "Track order"), /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", onClick: () => go("A2") }, "Back to home"))));
  }
  Object.assign(window, { SCREENS_C: { C1: ScreenC1, C2: ScreenC2, C3: ScreenC3, C4: ScreenC4, C5: ScreenC5 }, cartTotals });
})();
