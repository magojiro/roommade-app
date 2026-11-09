(() => {
  // v4/src/screens/pro-entry.jsx
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
    RM_IMG,
    RM_SETS,
    RM_PRO_LISTINGS,
    RM_RENTAL_TERMS,
    RM_PRO_ADDONS,
    rmMonthly,
    rmProTotals,
    rmMoney,
    PRO,
    RMProScreen,
    RMProTabBar,
    RMProStat,
    RMStatusChip,
    RMProSection,
    RMProButton
  } = window;
  var rmImg = (k) => RM_IMG[k] || RM_IMG.after;
  function ScreenE1({ go }) {
    return /* @__PURE__ */ React.createElement("div", { style: { height: "100%", overflowY: "auto", background: PRO.ink, color: PRO.paper, fontFamily: RM_F.sans }, className: "rm-scroll" }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 268 } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.after, alt: "Staged living room", style: { width: "100%", height: "100%", objectFit: "cover", opacity: 0.72 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,24,21,0.72) 0%, rgba(26,24,21,0.28) 40%, rgba(26,24,21,0.98) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 62, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 20, letterSpacing: "-0.02em" } }, "RoomMade ", /* @__PURE__ */ React.createElement("span", { style: { color: PRO.brass } }, "Trade")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("A2"), style: {
      background: "none",
      border: "1px solid rgba(247,243,236,0.3)",
      borderRadius: 100,
      color: "rgba(247,243,236,0.8)",
      fontFamily: RM_F.sans,
      fontSize: 9.5,
      padding: "5px 10px",
      cursor: "pointer"
    } }, "Consumer app")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 20, right: 20, bottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 8, letterSpacing: "0.2em", color: "rgba(247,243,236,0.6)" } }, "B2B STAGING \xB7 MONTHLY RENTAL"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 30px" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 29, color: PRO.paper, lineHeight: 1.08 } }, "Furnish the listing,", /* @__PURE__ */ React.createElement("br", null), "not the mortgage."), /* @__PURE__ */ React.createElement("p", { style: { margin: "10px 0 0", fontFamily: RM_F.sans, fontSize: 12.5, lineHeight: 1.6, color: "rgba(247,243,236,0.6)" } }, "Whole-room sets rented by the month to stagers and agents. Install, mid-listing swaps and de-stage are included \u2014 the furniture leaves when the listing closes."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", flexDirection: "column" } }, [
      ["01", "Monthly terms, not capex", "3-month minimum, then month to month. Cancel with 10 days' notice."],
      ["02", "Installed in 5 days", "Two-person crew, room of choice, COI filed with your building."],
      ["03", "One invoice per listing", "Net 30 after two orders. Every set tagged to an address, not a card."]
    ].map(([n, t, d], i) => /* @__PURE__ */ React.createElement("div", { key: n, style: { display: "flex", gap: 12, padding: "12px 0", borderTop: i === 0 ? "1px solid rgba(247,243,236,0.14)" : "none", borderBottom: "1px solid rgba(247,243,236,0.14)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 9, color: PRO.brass, paddingTop: 2 } }, n), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 } }, t), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "rgba(247,243,236,0.5)", marginTop: 3 } }, d))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 8, letterSpacing: "0.16em", color: "rgba(247,243,236,0.45)" } }, "WHO RENTS"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 9 } }, ["Home stagers", "Listing agents", "Brokerages", "Short-let operators"].map((w) => /* @__PURE__ */ React.createElement("span", { key: w, style: {
      fontFamily: RM_F.sans,
      fontSize: 10,
      color: "rgba(247,243,236,0.78)",
      border: "1px solid rgba(247,243,236,0.22)",
      borderRadius: 100,
      padding: "5px 10px"
    } }, w)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("E2"), style: { background: PRO.brass, color: "#241B0F" } }, "Apply for a trade account"), /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", onClick: () => go("E3"), style: { borderColor: "rgba(247,243,236,0.28)", color: PRO.paper } }, "I already have an account")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, display: "flex", alignItems: "center", gap: 7 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "shield", size: 13, color: "rgba(247,243,236,0.45)" }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: "rgba(247,243,236,0.45)" } }, "Serving NY, NJ, PA, IL, OH, NC \xB7 Certificate of insurance issued for every install."))));
  }
  function ScreenE2({ go, state, setState }) {
    const types = ["Home stager", "Real estate agent", "Brokerage", "Short-let operator"];
    const volumes = ["1\u20133 listings / mo", "4\u201310", "11+"];
    return /* @__PURE__ */ React.createElement(
      RMProScreen,
      {
        title: "Trade account",
        sub: "Step 1 of 2 \xB7 business verification",
        onBack: () => go("E1"),
        footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "11px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line } }, /* @__PURE__ */ React.createElement(RMProButton, { onClick: () => go("E3") }, "Submit for approval"), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 7 } }, "Usually approved within 1 business day \xB7 no credit check for card accounts"))
      },
      /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 18px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, height: 3, background: PRO.ink } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, height: 3, background: PRO.line } })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Business" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden", background: "#FFFDF9" } }, [
        ["Company", "Hudson Staging Co."],
        ["Contact", "Ava Coleman"],
        ["Work email", "ava@hudsonstaging.com"],
        ["Phone", "(917) 555-0148"],
        ["Tax ID / EIN", "\u2022\u2022-\u2022\u2022\u20228412"]
      ].map(([k, v], i) => /* @__PURE__ */ React.createElement("div", { key: k, style: { display: "flex", justifyContent: "space-between", gap: 10, padding: "11px 12px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub } }, k), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500, textAlign: "right" } }, v))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Business type" }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 } }, types.map((t) => {
        const on = state.proType === t;
        return /* @__PURE__ */ React.createElement("button", { key: t, type: "button", onClick: () => setState({ proType: t }), style: {
          height: 38,
          borderRadius: 7,
          cursor: "pointer",
          textAlign: "left",
          padding: "0 10px",
          border: "1px solid " + (on ? PRO.ink : PRO.line),
          background: on ? PRO.ink : "transparent",
          color: on ? PRO.paper : PRO.ink,
          fontFamily: RM_F.sans,
          fontSize: 10.5,
          fontWeight: 500
        } }, t);
      }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Service area", action: "Add ZIP", onAction: () => {
      } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 8 } }, ["11217", "11238", "10011"].map((z) => /* @__PURE__ */ React.createElement("span", { key: z, style: {
        fontFamily: "var(--mono)",
        fontSize: 10,
        padding: "6px 10px",
        borderRadius: 6,
        background: "rgba(26,24,21,0.06)",
        color: PRO.ink
      } }, z))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub, marginTop: 6 } }, "Sets ship from our Charlotte, NC warehouse; installs run 5 days a week in these ZIPs.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Monthly staging volume" }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 8 } }, volumes.map((v) => /* @__PURE__ */ React.createElement(RMChip, { key: v, active: state.proVolume === v, onClick: () => setState({ proVolume: v }) }, v)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Payment terms" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden" } }, [
        ["Card on file", "Available immediately", state.proTerms !== "net30"],
        ["Net 30", "Unlocks after 2 paid orders", state.proTerms === "net30"]
      ].map(([t, d, on], i) => /* @__PURE__ */ React.createElement("button", { key: t, type: "button", onClick: () => setState({ proTerms: i === 0 ? "card" : "net30" }), style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "11px 12px",
        cursor: "pointer",
        border: 0,
        borderTop: i === 0 ? "none" : "1px solid " + PRO.line,
        background: on ? "#FBF8F2" : "transparent",
        textAlign: "left"
      } }, /* @__PURE__ */ React.createElement("span", { style: { width: 14, height: 14, borderRadius: 100, border: "1px solid " + (on ? PRO.ink : "#C9C0B2"), display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, on && /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 100, background: PRO.ink } })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 } }, t), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 } }, d)))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, display: "flex", alignItems: "center", gap: 9, border: "1px dashed #CFC5B6", borderRadius: 8, padding: 11 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "upload", size: 15, color: PRO.brass }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 } }, "Certificate of insurance"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 } }, "COI_hudson_2026.pdf \xB7 expires Dec 1, 2026")), /* @__PURE__ */ React.createElement(RMStatusChip, { tone: "green" }, "Uploaded")))
    );
  }
  function ScreenE3({ go, state }) {
    const active = RM_PRO_LISTINGS.filter((l) => l.status === "Staged");
    const monthly = active.reduce((s, l) => s + l.monthly, 0);
    return /* @__PURE__ */ React.createElement(
      RMProScreen,
      {
        title: "Trade desk",
        sub: "Brooklyn & Manhattan \xB7 Nov 5",
        tab: "E3",
        onNav: go,
        right: /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("A2"), style: { background: "none", border: "1px solid rgba(247,243,236,0.3)", borderRadius: 100, color: "rgba(247,243,236,0.8)", fontFamily: RM_F.sans, fontSize: 9, padding: "4px 9px", cursor: "pointer" } }, "Exit")
      },
      /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: PRO.ink, borderRadius: 10, padding: "13px 14px", display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(RMProStat, { value: "1", label: "In rent", sub: "1 install" }), /* @__PURE__ */ React.createElement(RMProStat, { value: rmMoney(monthly), label: "Monthly rent", sub: "net 30" }), /* @__PURE__ */ React.createElement(RMProStat, { value: "8", label: "Pieces out", sub: "0 due back" }), /* @__PURE__ */ React.createElement(RMProStat, { value: "68", label: "Days left", sub: "Hoyt St" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Needs a decision" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("G1"), style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "10px 11px",
        borderRadius: 8,
        cursor: "pointer",
        border: "1px solid " + PRO.line,
        background: "#FBF8F2",
        textAlign: "left",
        width: "100%"
      } }, /* @__PURE__ */ React.createElement("span", { style: { width: 22, height: 22, borderRadius: 100, background: "rgba(176,138,84,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "calendar", size: 12, color: "#7A5A2C" })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 } }, "Install booked \xB7 88 Pineapple Walk"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 } }, "Nov 18, 10\u201312 \xB7 COI still pending for the building")), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 11, color: "#A69C8D" })), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("H3"), style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "10px 11px",
        borderRadius: 8,
        cursor: "pointer",
        border: "1px solid " + PRO.line,
        background: "transparent",
        textAlign: "left",
        width: "100%"
      } }, /* @__PURE__ */ React.createElement("span", { style: { width: 22, height: 22, borderRadius: 100, background: "rgba(110,31,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "shield", size: 12, color: PRO.wine })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 } }, "Insurance expires Dec 1"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 } }, "Upload a renewal to keep installs on schedule")), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 11, color: "#A69C8D" })))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 } }, [
        ["Rent a set", "F1", "box"],
        ["New listing", "F3", "plus"],
        ["Rentals", "G3", "grid"]
      ].map(([t, to, icon]) => /* @__PURE__ */ React.createElement("button", { key: t, type: "button", onClick: () => go(to), style: {
        border: "1px solid " + PRO.line,
        borderRadius: 8,
        background: "#FFFDF9",
        padding: "10px 8px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 7
      } }, /* @__PURE__ */ React.createElement(RIcon, { name: icon, size: 15, color: PRO.ink }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600 } }, t)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Listings in flight", action: "See all", onAction: () => go("G3") }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 7 } }, RM_PRO_LISTINGS.map((l) => /* @__PURE__ */ React.createElement("button", { key: l.id, type: "button", onClick: () => go("G3", { listing: l.id }), style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        textAlign: "left",
        cursor: "pointer",
        border: "1px solid " + PRO.line,
        borderRadius: 9,
        padding: 9,
        background: l.status === "Draft" ? "transparent" : "#FFFDF9"
      } }, /* @__PURE__ */ React.createElement("div", { style: { width: 52, height: 52, borderRadius: 6, overflow: "hidden", flex: "none", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg(l.photo), alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, l.address), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 } }, l.price, " \xB7 ", l.client), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(RMStatusChip, { tone: l.status === "Staged" ? "green" : l.status === "Draft" ? "grey" : "brass" }, l.status), l.monthly > 0 && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 9, color: PRO.sub } }, rmMoney(l.monthly), "/mo"))), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 11, color: "#A69C8D" }))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid " + PRO.line, paddingTop: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600 } }, "November statement"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 } }, "1 invoice \xB7 due Nov 30")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("H3"), style: {
        background: "none",
        border: 0,
        cursor: "pointer",
        fontFamily: RM_F.sans,
        fontSize: 10,
        fontWeight: 600,
        color: PRO.wine
      } }, "Open billing \u2192")))
    );
  }
  function ScreenF1({ go }) {
    const rooms = ["All rooms", "Living", "Bedroom", "Dining", "Office", "Whole home"];
    const [room, setRoom] = useState("All rooms");
    const shown = RM_SETS.filter((s) => room === "All rooms" || s.room.startsWith(room) || room === "Whole home" && s.room === "Whole home");
    return /* @__PURE__ */ React.createElement(
      RMProScreen,
      {
        title: "Rent sets",
        sub: "Available for install Nov 14",
        tab: "F1",
        onNav: go,
        right: /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("C1"), style: { background: "none", border: "1px solid rgba(247,243,236,0.3)", borderRadius: 100, color: "rgba(247,243,236,0.8)", fontFamily: RM_F.sans, fontSize: 9, padding: "4px 9px", cursor: "pointer" } }, "Buy instead")
      },
      /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, margin: "0 -18px", padding: "0 18px 2px", overflowX: "auto" }, className: "rm-scroll-x" }, rooms.map((r) => /* @__PURE__ */ React.createElement(RMChip, { key: r, active: room === r, onClick: () => setRoom(r) }, r))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 100, background: PRO.sage } }), shown.length, " sets available Nov 14")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub } }, "Monthly \xB7 3-mo min")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginTop: 10 } }, shown.map((s) => /* @__PURE__ */ React.createElement("button", { key: s.id, type: "button", onClick: () => go("F2", { set: s.id }), style: {
        border: "1px solid " + PRO.line,
        borderRadius: 9,
        overflow: "hidden",
        padding: 0,
        background: "#FFFDF9",
        cursor: "pointer",
        textAlign: "left"
      } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 108, background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg(s.img), alt: s.name, style: { width: "100%", height: "100%", objectFit: "cover" } }), s.tag && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 6, top: 6, background: PRO.ink, color: PRO.paper, fontFamily: RM_F.sans, fontSize: 7.5, letterSpacing: "0.06em", padding: "3px 5px", borderRadius: 2 } }, s.tag.toUpperCase())), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 9px 9px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600, lineHeight: 1.25 } }, s.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 2 } }, s.pieces, " pieces \xB7 ", s.room), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 15, fontVariantNumeric: "tabular-nums" } }, rmMoney(s.monthly), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub } }, "/mo")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 8, color: PRO.sage } }, s.avail === "Now" ? "In stock" : s.avail)))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, borderTop: "1px solid " + PRO.line, paddingTop: 12, display: "flex", gap: 8, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "box", size: 14, color: PRO.brass }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.5, color: PRO.sub } }, "Every set ships complete \u2014 sofa, tables, rug, lighting, art. Crew returns for de-stage within 5 days of your closing date.")))
    );
  }
  function ScreenF2({ go, state }) {
    const set = RM_SETS.find((s) => s.id === (state.set || "set-living")) || RM_SETS[0];
    const [term, setTerm] = useState(3);
    const pieces = RM_PRODUCTS_FOR_SET.slice(0, Math.min(set.pieces, 8));
    return /* @__PURE__ */ React.createElement(
      RMProScreen,
      {
        title: set.name,
        sub: `${set.pieces} pieces \xB7 ${set.room}`,
        onBack: () => go("F1"),
        footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub } }, term, "-month term \xB7 install included"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 16 } }, rmMoney(rmMonthly(set.monthly, term)), "/mo")), /* @__PURE__ */ React.createElement(RMProButton, { onClick: () => go("F3", { set: set.id, term }) }, "Add to a listing"))
      },
      /* @__PURE__ */ React.createElement("div", { style: { padding: "0 18px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 200, borderRadius: 9, overflow: "hidden", marginTop: 12, background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg(set.img), alt: set.name, style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: PRO.sub } }, "Monthly rental"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 5, marginTop: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 28, fontVariantNumeric: "tabular-nums" } }, rmMoney(set.monthly)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: PRO.sub } }, "/mo"))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement(RMStatusChip, { tone: "green" }, set.avail === "Now" ? "In stock" : "Avail " + set.avail), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 4 } }, set.stock))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "flex", gap: 3, background: "#EDE5D8", borderRadius: 7, padding: 3 } }, RM_RENTAL_TERMS.map((t) => {
        const on = term === t.months;
        return /* @__PURE__ */ React.createElement("button", { key: t.months, type: "button", onClick: () => setTerm(t.months), style: {
          flex: 1,
          height: 32,
          border: 0,
          borderRadius: 5,
          cursor: "pointer",
          background: on ? "#FFFDF9" : "transparent",
          color: on ? PRO.ink : "#847B6D",
          fontFamily: RM_F.sans,
          fontSize: 9.5,
          fontWeight: on ? 600 : 500,
          lineHeight: 1.2
        } }, t.months, " mo", t.discount > 0 ? /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 7.5, color: on ? PRO.brass : "#A69C8D" } }, t.note) : null);
      })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: `Included \xB7 ${set.pieces} pieces`, action: "Full list", onAction: () => go("F1") }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 } }, pieces.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.id, style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 56, borderRadius: 6, overflow: "hidden", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg(p.img), alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 7.5, color: PRO.sub, marginTop: 3, lineHeight: 1.2 } }, p.short))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden" } }, [
        ["Delivery & install", "2-person crew, room of choice", "Included"],
        ["De-stage on close", "Pickup within 5 days, packaging removed", "Included"],
        ["Damage waiver", "8% of monthly rent, no deposit", "8%"],
        ["Swaps", "1 item per month, $75 after", "1 / mo"]
      ].map(([k, d, v], i) => /* @__PURE__ */ React.createElement("div", { key: k, style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 11px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 } }, k), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 1 } }, d)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 8.5, color: v === "Included" ? PRO.sage : PRO.sub } }, v)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "flex", gap: 7, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "calendar", size: 13, color: PRO.brass }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub } }, "Reserve today and we hold the set for 48 hours. Install dates run Tue\u2013Sat, 8am\u20134pm.")))
    );
  }
  var RM_PRODUCTS_FOR_SET = [
    { id: "sofa", short: "Boucl\xE9 sofa", img: "sofa" },
    { id: "chair", short: "Cane chair", img: "chair" },
    { id: "table", short: "Travertine table", img: "table" },
    { id: "rug", short: "Wool rug 8\xD710", img: "rug" },
    { id: "lamp", short: "Pleated lamp", img: "lamp" },
    { id: "art", short: "Framed print", img: "art" },
    { id: "curtain", short: "Linen curtains", img: "curtain" },
    { id: "sideboard", short: "Walnut sideboard", img: "sideboard" }
  ];
  function ScreenF3({ go, state, setState }) {
    const set = RM_SETS.find((s) => s.id === (state.set || "set-living")) || RM_SETS[0];
    const term = state.term || 3;
    const addons = state.addons || ["art"];
    const t = rmProTotals(set.monthly, term, addons);
    const toggle = (id) => {
      const next = addons.includes(id) ? addons.filter((x) => x !== id) : addons.concat(id);
      setState({ addons: next });
    };
    return /* @__PURE__ */ React.createElement(
      RMProScreen,
      {
        title: "Reserve set",
        sub: "Listing L-1180 \xB7 214 Hoyt St",
        onBack: () => go("F2"),
        footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub } }, "Due today"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 19 } }, rmMoney(t.dueToday))), /* @__PURE__ */ React.createElement(RMProButton, { onClick: () => go("G1", { term, addons }) }, "Continue to scheduling"))
      },
      /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { border: "1px solid " + PRO.line, borderRadius: 8, padding: 11, background: "#FFFDF9", display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 42, height: 42, borderRadius: 5, overflow: "hidden", flex: "none", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg("after"), alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, letterSpacing: "0.08em", textTransform: "uppercase" } }, "Staging for"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, marginTop: 2 } }, "214 Hoyt St, Apt 4B"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 } }, "$1.85M \xB7 Corcoran \xB7 D. Marsh")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("G3", { listing: "L-1180" }), style: {
        background: "none",
        border: "1px solid " + PRO.line,
        borderRadius: 100,
        padding: "4px 8px",
        fontFamily: RM_F.sans,
        fontSize: 9,
        color: PRO.ink,
        cursor: "pointer"
      } }, "Change")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Set" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, display: "flex", gap: 10, alignItems: "center", border: "1px solid " + PRO.line, borderRadius: 8, padding: 9 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 52, height: 52, borderRadius: 6, overflow: "hidden", flex: "none", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg(set.img), alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 } }, set.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 } }, set.pieces, " pieces \xB7 ", set.room)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5 } }, rmMoney(rmMonthly(set.monthly, term)), "/mo"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Term" }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 8 } }, RM_RENTAL_TERMS.map((x) => /* @__PURE__ */ React.createElement("button", { key: x.months, type: "button", onClick: () => setState({ term: x.months }), style: {
        flex: 1,
        padding: "8px 0",
        borderRadius: 6,
        cursor: "pointer",
        border: "1px solid " + (term === x.months ? PRO.ink : PRO.line),
        background: term === x.months ? "rgba(26,24,21,0.05)" : "transparent",
        fontFamily: RM_F.sans,
        fontSize: 10,
        fontWeight: term === x.months ? 600 : 500
      } }, x.months, " mo", x.discount ? /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 7.5, color: PRO.brass, fontWeight: 500 } }, x.note) : null))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 6 } }, "Billed monthly. After minimum term, month to month with 10 days' notice.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(RMProSection, { title: "Add-ons" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, display: "flex", flexDirection: "column", gap: 6 } }, RM_PRO_ADDONS.map((a) => {
        const on = addons.includes(a.id);
        return /* @__PURE__ */ React.createElement("button", { key: a.id, type: "button", onClick: () => toggle(a.id), style: {
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: 8,
          borderRadius: 7,
          cursor: "pointer",
          border: "1px solid " + (on ? PRO.ink : PRO.line),
          background: on ? "#FBF8F2" : "transparent",
          textAlign: "left"
        } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 5, overflow: "hidden", flex: "none", background: "#EFE9DE" } }, /* @__PURE__ */ React.createElement("img", { src: rmImg(a.img), alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontFamily: RM_F.sans, fontSize: 10.5 } }, a.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 9.5, color: PRO.sub } }, "+", rmMoney(a.per), "/mo"), /* @__PURE__ */ React.createElement("span", { style: { width: 14, height: 14, borderRadius: 3, border: "1px solid " + (on ? PRO.ink : "#C9C0B2"), background: on ? PRO.ink : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, on && /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 8, color: "#FBF7F0", sw: 3 })));
      }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 8, padding: "11px 12px", background: "#FFFDF9" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", paddingBottom: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub } }, "First month \xB7 ", set.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5 } }, rmMoney(t.monthly))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", paddingBottom: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub } }, "Damage waiver (8%)"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5 } }, rmMoney(t.waiver))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", paddingBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub } }, "NY sales tax (8.875%)"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 10.5 } }, rmMoney(t.tax))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", borderTop: "1px solid " + PRO.line, paddingTop: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 } }, "Due today"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 17 } }, rmMoney(t.dueToday))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub } }, "Then monthly \xB7 ", term, "-mo contract ", rmMoney(t.contract)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 9, color: PRO.sub } }, rmMoney(t.monthly), "/mo"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "flex", gap: 7, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "shield", size: 13, color: PRO.sage }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub } }, "No deposit. Damage waiver covers normal wear; missing items bill at replacement value. Rental agreement is e-signed before install.")))
    );
  }
  Object.assign(window, { SCREENS_PRO_EF: { E1: ScreenE1, E2: ScreenE2, E3: ScreenE3, F1: ScreenF1, F2: ScreenF2, F3: ScreenF3 } });
})();
