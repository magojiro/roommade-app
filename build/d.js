(() => {
  // v4/src/screens/d.jsx
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
    RMAppBar,
    RMScreen,
    RMSectionHead,
    RM_BTN_RESET,
    RM_PRODUCTS,
    RM_TIERS,
    RM_IMG,
    rmTotals,
    rmMoney,
    rmPrice
  } = window;
  var D = RM_C;
  var RM_ORDER_STEPS = [
    { t: "Order placed", d: "Nov 2, 2026", s: "Payment confirmed \xB7 Order #RM-284916", state: "done" },
    { t: "In production", d: "Nov 3 \u2013 Nov 21", s: "Quality checked at our Foshan workshop", state: "done" },
    { t: "Ocean freight", d: "Nov 24 \xB7 current", s: "Container delayed 3 days at port \u2014 new ETA Nov 26", state: "current" },
    { t: "Received at warehouse", d: "Est. Nov 30", s: "Enson warehouse \xB7 Charlotte, NC", state: "next" },
    { t: "Last-mile delivery", d: "Est. Dec 4", s: "2-person crew \xB7 room of choice", state: "next" },
    { t: "Installed", d: "Est. Dec 8", s: "Assembly, placement, packaging removed", state: "next" }
  ];
  function ScreenD1({ go, state }) {
    const tab = state.projectsTab || "Designs";
    const designs = [
      { img: RM_IMG.after, name: "Warm Modern Living Room", meta: "Brooklyn, NY \xB7 8 items", price: 8340, when: "Edited 2 days ago" },
      { img: RM_IMG.bedroom, name: "Japandi Primary Bedroom", meta: "Brooklyn, NY \xB7 6 items", price: 5210, when: "Saved Oct 18" }
    ];
    const orders = [
      { id: "RM-284916", status: "In ocean freight", tone: "grey", eta: "Dec 2\u201312", img: RM_IMG.after, total: 8340 },
      { id: "RM-281204", status: "Installed", tone: "sage", eta: "Delivered Oct 2", img: RM_IMG.bedroom, total: 2180 }
    ];
    const rooms = [
      { img: RM_IMG.after, name: "Living room", sqft: 268 },
      { img: RM_IMG.bedroom, name: "Primary bedroom", sqft: 186 },
      { img: RM_IMG.office, name: "Office nook", sqft: 74 }
    ];
    return /* @__PURE__ */ React.createElement(RMScreen, { tab: "D1", onNav: go }, /* @__PURE__ */ React.createElement("div", { style: { padding: "56px 20px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 28 } }, "Projects"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("B1"), style: {
      ...RM_BTN_RESET,
      height: 32,
      padding: "0 12px",
      borderRadius: 100,
      background: D.ink,
      color: "#FBF7F0",
      fontFamily: RM_F.sans,
      fontSize: 11,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 5
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "plus", size: 12, color: "#FBF7F0", sw: 2 }), " New design")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, borderBottom: "1px solid " + D.line, marginTop: 16 } }, ["Designs", "Orders", "Rooms"].map((s) => {
      const on = tab === s;
      return /* @__PURE__ */ React.createElement("button", { key: s, type: "button", onClick: () => setState({ projectsTab: s }), style: {
        ...RM_BTN_RESET,
        padding: "0 0 9px",
        position: "relative",
        fontFamily: RM_F.sans,
        fontSize: 12,
        fontWeight: on ? 600 : 500,
        color: on ? D.ink : "#93897B"
      } }, s, /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 5, fontSize: 9.5, color: on ? D.brass : "#B3A998" } }, s === "Designs" ? 2 : s === "Orders" ? 2 : 3), on && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 0, right: 0, bottom: -1, height: 1.5, background: D.wine } }));
    })), tab === "Designs" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", flexDirection: "column", gap: 12 } }, designs.map((d) => /* @__PURE__ */ React.createElement("button", { key: d.name, type: "button", onClick: () => go("B4"), style: {
      ...RM_BTN_RESET,
      textAlign: "left",
      border: "1px solid " + D.line,
      borderRadius: 12,
      overflow: "hidden",
      background: "#FFFDF9"
    } }, /* @__PURE__ */ React.createElement("div", { style: { height: 132, overflow: "hidden", background: D.sand } }, /* @__PURE__ */ React.createElement("img", { src: d.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 12px 11px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 15 } }, d.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 2 } }, d.meta)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600, fontVariantNumeric: "tabular-nums" } }, rmMoney(d.price))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9, color: "#9A9186" } }, d.when), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 4, fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600, color: D.wine } }, "Shop again ", /* @__PURE__ */ React.createElement(RIcon, { name: "arrowR", size: 11, color: D.wine })))))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: "#9A9186", textAlign: "center", marginTop: 2 } }, "Designs stay shoppable for 90 days at the quoted price.")), tab === "Orders" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", flexDirection: "column", gap: 10 } }, orders.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.id, type: "button", onClick: () => go("D2"), style: {
      ...RM_BTN_RESET,
      display: "flex",
      gap: 10,
      alignItems: "center",
      textAlign: "left",
      border: "1px solid " + D.line,
      borderRadius: 12,
      padding: 10,
      background: "#FFFDF9"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 58, height: 58, borderRadius: 8, overflow: "hidden", flex: "none", background: D.sand } }, /* @__PURE__ */ React.createElement("img", { src: o.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, "#", o.id), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ React.createElement(RMTag, { tone: o.tone }, o.status)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 4 } }, o.eta, " \xB7 ", rmMoney(o.total))), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 12, color: "#A69C8D" }))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D3"), style: {
      ...RM_BTN_RESET,
      marginTop: 4,
      padding: 12,
      borderRadius: 12,
      border: "1px solid " + D.line,
      display: "flex",
      alignItems: "center",
      gap: 10,
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "box", size: 16, color: D.brass }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, "Full renovation \xB7 Park Slope"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 2 } }, "Concept design \xB7 3 of 9 stages complete")), /* @__PURE__ */ React.createElement(RIcon, { name: "arrowR", size: 13, color: D.ink }))), tab === "Rooms" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 } }, rooms.map((r) => /* @__PURE__ */ React.createElement("button", { key: r.name, type: "button", onClick: () => go("B2"), style: { ...RM_BTN_RESET, textAlign: "left" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 108, borderRadius: 9, overflow: "hidden", background: D.sand } }, /* @__PURE__ */ React.createElement("img", { src: r.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, marginTop: 6 } }, r.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: D.sub, marginTop: 1 } }, r.sqft, " sq ft \xB7 saved"))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("B1"), style: {
      ...RM_BTN_RESET,
      height: 108,
      borderRadius: 9,
      border: "1px dashed #CFC5B6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 5
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "plus", size: 16, color: D.brass }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: D.sub } }, "Add a room")))));
  }
  function ScreenD2({ go }) {
    const hero = RM_PRODUCTS[0];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 34px", background: D.paper, borderTop: "1px solid " + D.line, display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", style: { flex: 1, fontSize: 12 }, onClick: () => go("D5") }, /* @__PURE__ */ React.createElement(RIcon, { name: "chat", size: 14, color: D.ink }), " Support"), /* @__PURE__ */ React.createElement(RMButton, { style: { flex: 1.4, fontSize: 12 }, onClick: () => go("C5") }, /* @__PURE__ */ React.createElement(RIcon, { name: "calendar", size: 14, color: "#FBF7F0" }), " Schedule install")) }, /* @__PURE__ */ React.createElement(
      RMAppBar,
      {
        title: "Order #RM-284916",
        sub: "7 pieces \xB7 placed Nov 2",
        onBack: () => go("D1"),
        right: /* @__PURE__ */ React.createElement("button", { type: "button", style: { ...RM_BTN_RESET, fontFamily: RM_F.sans, fontSize: 10.5, color: D.sub, textDecoration: "underline", textUnderlineOffset: 2 } }, "Invoice")
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 12, overflow: "hidden", border: "1px solid " + D.line, background: "rgba(255,255,255,0.6)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: 13 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RMLabel, { style: { color: D.brass } }, "Current status"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 22, marginTop: 4 } }, "In ocean freight"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: D.sub, marginTop: 4 } }, "Shanghai \u2192 Savannah \xB7 arriving Nov 26")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: D.sub } }, "ETA"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 17, marginTop: 2 } }, "Dec 2\u201312"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", height: 3 } }, /* @__PURE__ */ React.createElement("span", { style: { width: "48%", background: D.brass } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, background: "#DED5C7" } })), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 13px", display: "flex", gap: 7, alignItems: "flex-start", borderTop: "1px solid " + D.line, background: "rgba(176,138,84,0.07)" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "truck", size: 13, color: "#7A5A2C" }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.45, color: "#6B5B3E" } }, "Container delayed 3 days at port \u2014 new ETA Nov 26. Your install date holds."))), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Full journey"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, RM_ORDER_STEPS.map((s, i) => {
      const done = s.state === "done";
      const cur = s.state === "current";
      return /* @__PURE__ */ React.createElement("div", { key: s.t, style: { display: "flex", gap: 11, paddingBottom: i === RM_ORDER_STEPS.length - 1 ? 0 : 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: 16, flex: "none" } }, /* @__PURE__ */ React.createElement("div", { style: {
        width: 16,
        height: 16,
        borderRadius: 100,
        flex: "none",
        background: done ? D.sage : cur ? D.wine : "transparent",
        border: "1px solid " + (done ? D.sage : cur ? D.wine : "#CFC5B6"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, done && /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 9, color: "#FBF7F0", sw: 2.6 }), cur && /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 100, background: "#FBF7F0" } })), i < RM_ORDER_STEPS.length - 1 && /* @__PURE__ */ React.createElement("div", { style: { width: 1, flex: 1, background: done ? "#C9CFC3" : D.line, marginTop: 3 } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, paddingBottom: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: done || cur ? 600 : 500, color: done || cur ? D.ink : "#9A9186" } }, s.t), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: cur ? D.wine : "#9A9186", fontVariantNumeric: "tabular-nums" } }, s.d)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.45, color: cur ? "#7A5A2C" : D.sub, marginTop: 2 } }, s.s)));
    })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, borderTop: "1px solid " + D.line, paddingTop: 14 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Pieces in this order" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, RM_PRODUCTS.slice(0, 4).map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.id, style: { display: "flex", alignItems: "center", gap: 9, padding: "8px 0", borderBottom: "1px solid " + D.line } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 6, overflow: "hidden", background: "#EFE9DE", flex: "none" } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: D.sub } }, i < 2 ? "In production \xB7 QC passed" : p.badge)), /* @__PURE__ */ React.createElement(RMTag, { tone: i === 0 ? "brass" : "sage" }, i === 0 ? "Nov 18" : "Ready")))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: "#9A9186", marginTop: 10, lineHeight: 1.5 } }, "Illustrative sample data. Warehouse network: 11 nodes \xB7 Charlotte, NC hub."))));
  }
  function ScreenD3({ go }) {
    const soft = ["Space layout reviewed", "Selection confirmed", "Purchase", "In transit", "Installed & inspected"];
    const full = ["Requirement brief", "Site survey", "Concept design", "Renderings", "Construction docs", "Approval", "Site prep", "Build", "Final handover"];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 34px", background: D.paper, borderTop: "1px solid " + D.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("D1") }, "Review my selection")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Project progress", sub: "Brooklyn apartment \xB7 2 projects", onBack: () => go("D1") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 25 } }, "Nine stages,", /* @__PURE__ */ React.createElement("br", null), "one honest tracker"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, borderRadius: 12, border: "1px solid " + D.line, background: "rgba(255,255,255,0.6)", padding: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Soft furnishing \xB7 Living room"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: D.wine } }, "Step 3 of 5")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3, marginTop: 9 } }, soft.map((s, i) => /* @__PURE__ */ React.createElement("span", { key: s, style: { flex: 1, height: 4, borderRadius: 2, background: i < 3 ? D.wine : "#DDD4C6" } }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, soft.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s, style: { display: "flex", alignItems: "center", gap: 9, padding: "5px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 14, height: 14, borderRadius: 100, flex: "none", display: "flex", alignItems: "center", justifyContent: "center", background: i < 3 ? D.sage : "transparent", border: "1px solid " + (i < 3 ? D.sage : "#CFC5B6") } }, i < 3 && /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 8, color: "#FBF7F0", sw: 2.6 })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: i < 3 ? D.ink : i === 3 ? D.wine : "#9A9186", fontWeight: i === 3 ? 600 : 400 } }, s), i === 3 && /* @__PURE__ */ React.createElement(RMTag, { tone: "wine", style: { marginLeft: "auto" } }, "Waiting on you"))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, borderRadius: 12, border: "1px solid " + D.line, padding: 13, background: "#FBF8F2" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 9 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "shield", size: 16, color: D.brass }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, "Awaiting your selection approval"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: D.sub, marginTop: 3 } }, "2 pieces changed lead time. Approve to start production, or swap them first."))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, marginTop: 10 } }, /* @__PURE__ */ React.createElement(RMButton, { style: { height: 36, fontSize: 11 }, onClick: () => go("B5") }, "Approve selection"), /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", style: { height: 36, fontSize: 11 }, onClick: () => go("B6") }, "Swap pieces"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Full renovation \xB7 Park Slope"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: D.sub } }, "Stage 4 of 9")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, borderRadius: 12, border: "1px solid " + D.line, padding: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, full.map((s, i) => /* @__PURE__ */ React.createElement("span", { key: s, style: {
      fontFamily: RM_F.sans,
      fontSize: 9,
      padding: "4px 7px",
      borderRadius: 4,
      background: i < 3 ? "rgba(124,139,118,0.16)" : i === 3 ? "rgba(110,31,46,0.1)" : "rgba(107,100,89,0.07)",
      color: i < 3 ? "#4E5C48" : i === 3 ? D.wine : "#8C8377"
    } }, i + 1, ". ", s))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: D.sub, marginTop: 10 } }, "Renderings are with you for review. Construction documents start once you approve."), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D5"), style: {
      ...RM_BTN_RESET,
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontFamily: RM_F.sans,
      fontSize: 10.5,
      fontWeight: 600,
      color: D.wine
    } }, "Talk to your project lead ", /* @__PURE__ */ React.createElement(RIcon, { name: "arrowR", size: 12, color: D.wine }))))));
  }
  function ScreenD4({ go, state }) {
    const rows = [
      { icon: "heart", label: "My ideabooks", meta: "2 saved looks \xB7 14 pieces", to: "C1" },
      { icon: "bag", label: "Orders", meta: "1 in transit", to: "D1" },
      { icon: "box", label: "Projects", meta: "1 active renovation", to: "D3" },
      { icon: "chat", label: "Design consultations", meta: "Next: Nov 14, 10:00 AM", to: "D5" },
      { icon: "settings", label: "Payment methods", meta: "Visa \xB7\xB7\xB7\xB7 4242", to: "C4" },
      { icon: "pin", label: "Addresses", meta: "Brooklyn, NY", to: "C4" },
      { icon: "shield", label: "Privacy & data", meta: "CCPA \xB7 download or delete", to: "D6" },
      { icon: "settings", label: "Settings", meta: "Notifications, units, language", to: "D6" }
    ];
    return /* @__PURE__ */ React.createElement(RMScreen, { tab: "D4", onNav: go }, /* @__PURE__ */ React.createElement("div", { style: { padding: "56px 20px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 54,
      height: 54,
      borderRadius: 100,
      background: "rgba(110,31,46,0.09)",
      border: "1px solid rgba(110,31,46,0.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: RM_F.serif,
      fontSize: 19,
      color: D.wine
    } }, "AC"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 22 } }, "Ava Coleman"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: D.sub, marginTop: 3 } }, "Brooklyn, NY \xB7 member since 2026")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D6"), style: { ...RM_BTN_RESET, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "settings", size: 16, color: D.ink }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, borderRadius: 14, background: D.wine, padding: 15, color: "#FBF7F0", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(251,247,240,0.62)" } }, "Design credits"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 7, marginTop: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 38, lineHeight: 1 } }, state.credits), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, color: "rgba(251,247,240,0.7)" } }, "free designs left"))), /* @__PURE__ */ React.createElement(RIcon, { name: "spark", size: 22, color: "#D8BE8E" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 14 } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D6"), style: {
      ...RM_BTN_RESET,
      height: 30,
      padding: "0 12px",
      borderRadius: 100,
      background: "#FBF7F0",
      color: D.wine,
      fontFamily: RM_F.sans,
      fontSize: 10.5,
      fontWeight: 600
    } }, "Invite friends \xB7 +1 each"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: "rgba(251,247,240,0.65)" } }, "Earn 2 more by completing your profile"))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("E1"), style: {
      marginTop: 14,
      width: "100%",
      border: 0,
      borderRadius: 12,
      background: D.ink,
      padding: "12px 13px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 28, height: 28, borderRadius: 100, background: "rgba(176,138,84,0.24)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "grid", size: 13, color: "#D8BE8E" })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.16em", color: "rgba(247,243,236,0.45)" } }, "ROOMMADE TRADE"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.serif, fontSize: 15, color: "#FBF7F0", marginTop: 3 } }, "Rent sets for listings"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9, color: "rgba(251,247,240,0.55)", marginTop: 2 } }, "For agents, stagers & brokerages \xB7 Net 30")), /* @__PURE__ */ React.createElement(RIcon, { name: "arrowR", size: 13, color: "#FBF7F0" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, borderTop: "1px solid " + D.line } }, rows.map((r) => /* @__PURE__ */ React.createElement("button", { key: r.label, type: "button", onClick: () => go(r.to), style: {
      ...RM_BTN_RESET,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "12px 0",
      borderBottom: "1px solid " + D.line,
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: r.icon, size: 16, color: D.sub }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 12, fontWeight: 500 } }, r.label), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 1 } }, r.meta)), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 12, color: "#B3A998" })))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, border: "1px solid " + D.line, borderRadius: 10, padding: "11px 12px", display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 14 } }, "RoomMade Plus"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 2 } }, "Unlimited designs, priority install dates")), /* @__PURE__ */ React.createElement(RMTag, { tone: "brass" }, "Coming soon")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, fontFamily: RM_F.sans, fontSize: 9, color: "#B3A998", textAlign: "center" } }, "RoomMade US \xB7 v1.0.0 (118) \xB7 Prototype")));
  }
  function ScreenD5({ go }) {
    const services = [
      { t: "Design consultation", d: "30 minutes, video or in-studio", p: "Complimentary" },
      { t: "Full room plan + quote", d: "Layout, selections and an itemized estimate", p: "Quoted after consult" },
      { t: "Project management", d: "We coordinate trades, deliveries and install", p: "Custom scope" }
    ];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 34px", background: D.paper, borderTop: "1px solid " + D.line, display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", style: { flex: 1, fontSize: 12 }, onClick: () => go("D3") }, /* @__PURE__ */ React.createElement(RIcon, { name: "chat", size: 14, color: D.ink }), " Chat"), /* @__PURE__ */ React.createElement(RMButton, { style: { flex: 1.5, fontSize: 12 }, onClick: () => go("C5") }, "Book a consultation")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Design consult", sub: "Brooklyn & Manhattan", onBack: () => go("A2") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 230, borderRadius: 14, overflow: "hidden", background: D.sand } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.designer, alt: "Maya Ellison, senior designer", style: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0) 45%, rgba(20,16,12,0.7) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 14, right: 14, bottom: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 22, color: "#FBF7F0" } }, "Maya Ellison"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: "rgba(251,247,240,0.82)", marginTop: 3 } }, "Senior designer \xB7 12 years \xB7 English, Spanish")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 12, top: 12, background: "rgba(251,247,240,0.94)", borderRadius: 100, padding: "5px 9px", display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "spark", size: 11, color: D.brass }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600 } }, "4.9"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9, color: D.sub } }, "(126)"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 12 } }, /* @__PURE__ */ React.createElement(RMTag, { tone: "sage" }, "Brooklyn"), /* @__PURE__ */ React.createElement(RMTag, { tone: "sage" }, "Manhattan"), /* @__PURE__ */ React.createElement(RMTag, { tone: "brass" }, "Responds in 2h")), /* @__PURE__ */ React.createElement("p", { style: { margin: "14px 0 0", fontFamily: RM_F.sans, fontSize: 11.5, lineHeight: 1.6, color: D.sub } }, "Bring the AI design you started. Maya will pressure-test the layout, adjust for your building's quirks, and hand it to our estimating team for a precise quote."), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "What you can book"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + D.line, borderRadius: 12, overflow: "hidden" } }, services.map((s, i) => /* @__PURE__ */ React.createElement("button", { key: s.t, type: "button", onClick: () => go("D3"), style: {
      ...RM_BTN_RESET,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 12px",
      borderTop: i === 0 ? "none" : "1px solid " + D.line,
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, s.t), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 2 } }, s.d)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.brass, textAlign: "right", maxWidth: 74 } }, s.p), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 11, color: "#B3A998" })))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", gap: 9, background: "rgba(176,138,84,0.09)", borderRadius: 10, padding: 11 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "ruler", size: 15, color: D.brass }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "#6B5B3E" } }, "Need a line-item number for a whole apartment? Our estimating team returns a precise quote within 3 business days.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 26, height: 26, borderRadius: 100, background: "rgba(107,100,89,0.12)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "pin", size: 13, color: D.sub })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: D.sub } }, "Studio visits by appointment \xB7 68 Jay St, Brooklyn"))));
  }
  function ScreenD6({ go, state }) {
    const [invited, setInvited] = useState(false);
    const log = [
      { t: "Warm Modern Living Room", d: "Nov 2 \xB7 photo design", c: 1 },
      { t: "Japandi Primary Bedroom", d: "Oct 18 \xB7 photo design", c: 1 },
      { t: "Kitchen refresh", d: "Oct 3 \xB7 refresh a look", c: 1 }
    ];
    const earn = [
      { t: "Invite a friend", d: "You both get 1 free design", right: "+1", tone: "brass" },
      { t: "Complete your profile", d: "City, room sizes, style quiz", right: "+1", tone: "sage" },
      { t: "First purchase", d: "Applied after your first order", right: "+2", tone: "grey" }
    ];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: D.paper, borderTop: "1px solid " + D.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("B1") }, "Start a design \xB7 1 credit")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Credits & membership", onBack: () => go("D4") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 14, border: "1px solid " + D.line, background: "rgba(255,255,255,0.6)", padding: 16 } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Free designs remaining"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 10, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 52, lineHeight: 0.9, color: D.wine } }, state.credits), /* @__PURE__ */ React.createElement("div", { style: { paddingBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: D.sub } }, "used this month"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 13, fontWeight: 600, fontVariantNumeric: "tabular-nums" } }, "3"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3, marginTop: 14 } }, [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { flex: 1, height: 5, borderRadius: 3, background: i <= state.credits ? D.brass : "#E1D8CA" } }))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 8 } }, "1 credit per design \xB7 photo, refresh or whole-home")), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Earn more"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + D.line, borderRadius: 12, overflow: "hidden" } }, earn.map((e, i) => /* @__PURE__ */ React.createElement("button", { key: e.t, type: "button", onClick: () => {
      if (e.t === "Invite a friend") setInvited(true);
    }, style: {
      ...RM_BTN_RESET,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 12px",
      borderTop: i === 0 ? "none" : "1px solid " + D.line,
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, e.t), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 2 } }, e.d)), /* @__PURE__ */ React.createElement(RMTag, { tone: invited && e.t === "Invite a friend" ? "sage" : e.tone }, invited && e.t === "Invite a friend" ? "Sent" : e.right)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, border: "1px solid " + D.line, borderRadius: 12, padding: 13, display: "flex", alignItems: "center", gap: 10, background: "#FBF8F2" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 15 } }, "Design Pass"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: D.sub, marginTop: 2 } }, "Unlimited designs \xB7 priority install")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: D.brass, fontWeight: 600 } }, "TBD at launch"), /* @__PURE__ */ React.createElement("button", { type: "button", style: { ...RM_BTN_RESET, fontFamily: RM_F.sans, fontSize: 9, color: D.sub, textDecoration: "underline", marginTop: 2 } }, "Notify me"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Usage" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, log.map((l) => /* @__PURE__ */ React.createElement("div", { key: l.t, style: { display: "flex", alignItems: "center", gap: 9, padding: "9px 0", borderBottom: "1px solid " + D.line } }, /* @__PURE__ */ React.createElement(RIcon, { name: "spark", size: 13, color: D.brass }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500 } }, l.t), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9, color: D.sub, marginTop: 1 } }, l.d)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: D.sub, fontVariantNumeric: "tabular-nums" } }, "\u2212", l.c)))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: "#9A9186", marginTop: 12 } }, "Credits are non-transferable and expire 12 months after issue. Invite rewards are granted after your friend completes a first design."))));
  }
  Object.assign(window, { SCREENS_D: { D1: ScreenD1, D2: ScreenD2, D3: ScreenD3, D4: ScreenD4, D5: ScreenD5, D6: ScreenD6 } });
})();
