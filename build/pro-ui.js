(() => {
  // v4/src/pro-ui.jsx
  var {
    RM_C,
    RM_F,
    RIcon,
    RMLabel
  } = window;
  var PRO = {
    ink: "#1A1815",
    ink2: "#26221E",
    paper: "#F7F3EC",
    brass: "#B08A54",
    line: "#E6DED1",
    sub: "#6B6459",
    sage: "#7C8B76",
    wine: "#6E1F2E"
  };
  function RMProScreen({ title, sub, onBack, right, tab, onNav, footer, children, company = "Hudson Staging Co." }) {
    return /* @__PURE__ */ React.createElement("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: PRO.paper, fontFamily: RM_F.sans } }, /* @__PURE__ */ React.createElement("div", { style: { background: PRO.ink, color: PRO.paper, padding: "56px 18px 12px", flex: "none" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, background: PRO.brass, display: "block" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.18em", color: "rgba(247,243,236,0.6)" } }, "ROOMMADE TRADE")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--sans)", fontSize: 8.5, color: "rgba(247,243,236,0.45)" } }, company)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 10 } }, onBack && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: onBack, style: {
      width: 30,
      height: 30,
      borderRadius: 100,
      border: "1px solid rgba(247,243,236,0.28)",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flex: "none"
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "back", size: 15, color: PRO.paper })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 21, letterSpacing: "-0.01em", lineHeight: 1.1 } }, title), sub && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: "rgba(247,243,236,0.55)", marginTop: 3 } }, sub)), right)), /* @__PURE__ */ React.createElement("div", { className: "rm-scroll", style: { flex: 1, overflowY: "auto", overflowX: "hidden" } }, children), footer, tab && /* @__PURE__ */ React.createElement(RMProTabBar, { active: tab, onNav }));
  }
  function RMProTabBar({ active, onNav }) {
    const items = [
      { id: "E3", label: "Desk", icon: "grid" },
      { id: "F1", label: "Rent", icon: "box" },
      { id: "G3", label: "Rentals", icon: "calendar" },
      { id: "H3", label: "Account", icon: "user" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: {
      flex: "none",
      background: PRO.ink,
      padding: "9px 0 34px",
      display: "flex",
      alignItems: "flex-start"
    } }, items.map((it) => {
      const on = it.id === active;
      return /* @__PURE__ */ React.createElement("button", { key: it.id, type: "button", onClick: () => onNav(it.id), style: {
        flex: 1,
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "4px 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      } }, /* @__PURE__ */ React.createElement(RIcon, { name: it.icon, size: 19, color: on ? PRO.brass : "rgba(247,243,236,0.45)", sw: on ? 1.8 : 1.4 }), /* @__PURE__ */ React.createElement("span", { style: {
        fontFamily: RM_F.sans,
        fontSize: 9.5,
        fontWeight: on ? 600 : 500,
        color: on ? PRO.paper : "rgba(247,243,236,0.45)"
      } }, it.label));
    }));
  }
  function RMProStat({ value, label, sub }) {
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 22, lineHeight: 1, letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" } }, value), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(247,243,236,0.5)", marginTop: 5 } }, label), sub && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: "rgba(247,243,236,0.38)", marginTop: 2 } }, sub));
  }
  function RMStatusChip({ children, tone = "grey" }) {
    const tones = {
      green: { background: "rgba(124,139,118,0.18)", color: "#3F4D39" },
      brass: { background: "rgba(176,138,84,0.2)", color: "#6E4F23" },
      grey: { background: "rgba(107,100,89,0.12)", color: "#565046" },
      ink: { background: "rgba(26,24,21,0.08)", color: "#1A1815" }
    };
    return /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      height: 20,
      padding: "0 7px",
      borderRadius: 3,
      fontFamily: RM_F.sans,
      fontSize: 8.5,
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      ...tones[tone]
    } }, children);
  }
  function RMProSection({ title, action, onAction }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: PRO.sub } }, title), action && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: onAction, style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      fontFamily: RM_F.sans,
      fontSize: 9.5,
      fontWeight: 600,
      color: PRO.wine,
      textDecoration: "underline",
      textUnderlineOffset: 2
    } }, action));
  }
  function RMProButton({ children, onClick, variant = "primary", style }) {
    return /* @__PURE__ */ React.createElement("button", { type: "button", onClick, style: {
      width: "100%",
      height: 48,
      borderRadius: 8,
      cursor: "pointer",
      border: variant === "ghost" ? "1px solid rgba(26,24,21,0.22)" : "1px solid transparent",
      background: variant === "primary" ? PRO.ink : variant === "wine" ? PRO.wine : "transparent",
      color: variant === "ghost" ? PRO.ink : "#FBF7F0",
      fontFamily: RM_F.sans,
      fontSize: 13,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      ...style
    } }, children);
  }
  Object.assign(window, {
    PRO,
    RMProScreen,
    RMProTabBar,
    RMProStat,
    RMStatusChip,
    RMProSection,
    RMProButton
  });
})();
