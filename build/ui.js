(() => {
  // v4/src/ui.jsx
  var RM_C = {
    paper: "#F7F3EC",
    card: "#FFFFFF",
    line: "#E6DED1",
    ink: "#1A1815",
    sub: "#6B6459",
    wine: "#6E1F2E",
    brass: "#B08A54",
    sage: "#7C8B76",
    sand: "#EFE8DC"
  };
  var RM_F = {
    serif: '"Fraunces", "Iowan Old Style", Georgia, serif',
    sans: '"Inter", system-ui, -apple-system, sans-serif'
  };
  function RIcon({ name, size = 20, color = RM_C.ink, sw = 1.5 }) {
    const p = { fill: "none", stroke: color, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
    const paths = {
      search: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "10.5", cy: "10.5", r: "6.5", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M15.5 15.5L21 21", ...p })),
      back: /* @__PURE__ */ React.createElement("path", { d: "M15 4L7 12l8 8", ...p }),
      chevron: /* @__PURE__ */ React.createElement("path", { d: "M9 4l8 8-8 8", ...p }),
      close: /* @__PURE__ */ React.createElement("path", { d: "M5 5l14 14M19 5L5 19", ...p }),
      plus: /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14", ...p }),
      minus: /* @__PURE__ */ React.createElement("path", { d: "M5 12h14", ...p }),
      check: /* @__PURE__ */ React.createElement("path", { d: "M4 12.5l5 5L20 6.5", ...p }),
      home: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M3.5 10.5L12 3.5l8.5 7", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M5.5 9.5V20h13V9.5", ...p })),
      bag: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M4.5 8h15l-1.2 12H5.7L4.5 8z", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M9 8V6.2a3 3 0 016 0V8", ...p })),
      grid: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "3.5", width: "7", height: "7", rx: "1.5", ...p }), /* @__PURE__ */ React.createElement("rect", { x: "13.5", y: "3.5", width: "7", height: "7", rx: "1.5", ...p }), /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "13.5", width: "7", height: "7", rx: "1.5", ...p }), /* @__PURE__ */ React.createElement("rect", { x: "13.5", y: "13.5", width: "7", height: "7", rx: "1.5", ...p })),
      user: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "3.6", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M4.8 20.5c.6-4 3.4-6 7.2-6s6.6 2 7.2 6", ...p })),
      camera: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M3.5 8.5h3l1.5-2.5h8L17.5 8.5h3V19h-17V8.5z", ...p }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "13.5", r: "3.4", ...p })),
      upload: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 16V4.5M7.5 9L12 4.5 16.5 9", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M4 16v3.5h16V16", ...p })),
      plan: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "1", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 12h7.5v8.5M11 3.5V12h9.5", ...p })),
      spark: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z", ...p })),
      heart: /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0112 8.1a4.1 4.1 0 017.5 2.5C19.5 15.4 12 20 12 20z", ...p }),
      pin: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 21s6.5-6.2 6.5-11A6.5 6.5 0 005.5 10c0 4.8 6.5 11 6.5 11z", ...p }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "2.2", ...p })),
      truck: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M2.5 6.5h11v10h-11zM13.5 10h4l3 3.2v3.3h-7z", ...p }), /* @__PURE__ */ React.createElement("circle", { cx: "6.5", cy: "18", r: "1.8", ...p }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "18", r: "1.8", ...p })),
      box: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M3.5 7.5L12 3.5l8.5 4v9L12 20.5 3.5 16.5v-9z", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 7.5L12 11.5l8.5-4M12 11.5v9", ...p })),
      ruler: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "2.5", y: "8.5", width: "19", height: "7", rx: "1", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M7 8.5v3M11 8.5v4M15 8.5v3M19 8.5v4", ...p })),
      shield: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 3l7.5 3v5.5c0 4.5-3 7.5-7.5 9.5-4.5-2-7.5-5-7.5-9.5V6L12 3z", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M8.8 12l2.2 2.2 4.2-4.4", ...p })),
      chat: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M4 5.5h16v11H9.5L4 20.5v-15z", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M8 10h8M8 13h5", ...p })),
      calendar: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "5.5", width: "17", height: "15", rx: "2", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 10h17M8 3v4M16 3v4", ...p })),
      arrowR: /* @__PURE__ */ React.createElement("path", { d: "M4 12h15M13 6l6 6-6 6", ...p }),
      settings: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3.2", ...p }), /* @__PURE__ */ React.createElement("path", { d: "M12 2.8v2.4M12 18.8v2.4M4.5 4.5l1.7 1.7M17.8 17.8l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.5 19.5l1.7-1.7M17.8 6.2l1.7-1.7", ...p }))
    };
    return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", style: { display: "block", flex: "none" }, "aria-hidden": "true" }, paths[name] || null);
  }
  function RMButton({ children, onClick, variant = "primary", style, disabled }) {
    const base = {
      height: 50,
      borderRadius: 10,
      border: "1px solid transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: RM_F.sans,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.01em",
      width: "100%",
      cursor: "pointer",
      transition: "transform .12s ease, opacity .12s ease",
      WebkitTapHighlightColor: "transparent"
    };
    const variants = {
      primary: { background: RM_C.wine, color: "#FBF7F0" },
      dark: { background: RM_C.ink, color: "#FBF7F0" },
      ghost: { background: "transparent", color: RM_C.ink, borderColor: RM_C.line },
      quiet: { background: "rgba(26,24,21,0.06)", color: RM_C.ink }
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        disabled,
        onClick,
        style: { ...base, ...variants[variant], opacity: disabled ? 0.45 : 1, ...style }
      },
      children
    );
  }
  function RMTextLink({ children, onClick, style }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick,
        style: {
          background: "none",
          border: 0,
          padding: 0,
          cursor: "pointer",
          color: RM_C.wine,
          fontFamily: RM_F.sans,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "underline",
          textUnderlineOffset: 3,
          ...style
        }
      },
      children
    );
  }
  function RMH1({ children, style }) {
    return /* @__PURE__ */ React.createElement("h1", { style: {
      fontFamily: RM_F.serif,
      fontWeight: 400,
      fontSize: 30,
      lineHeight: 1.1,
      letterSpacing: "-0.015em",
      color: RM_C.ink,
      margin: 0,
      textWrap: "pretty",
      ...style
    } }, children);
  }
  function RMLabel({ children, style }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: RM_F.sans,
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: RM_C.sub,
      ...style
    } }, children);
  }
  function RMChip({ children, active, onClick, style }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick,
        style: {
          height: 34,
          padding: "0 14px",
          borderRadius: 100,
          flex: "none",
          border: "1px solid " + (active ? RM_C.ink : RM_C.line),
          background: active ? RM_C.ink : "transparent",
          color: active ? "#FBF7F0" : RM_C.ink,
          fontFamily: RM_F.sans,
          fontSize: 12.5,
          fontWeight: 500,
          cursor: "pointer",
          whiteSpace: "nowrap",
          ...style
        }
      },
      children
    );
  }
  function RMTag({ children, tone = "sage" }) {
    const tones = {
      sage: { background: "rgba(124,139,118,0.14)", color: "#4E5C48" },
      brass: { background: "rgba(176,138,84,0.16)", color: "#7A5A2C" },
      wine: { background: "rgba(110,31,46,0.09)", color: RM_C.wine },
      grey: { background: "rgba(107,100,89,0.12)", color: "#565046" }
    };
    return /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 8px",
      borderRadius: 4,
      fontFamily: RM_F.sans,
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      ...tones[tone]
    } }, children);
  }
  function RMStepper({ value, onChange, compact }) {
    const s = compact ? 24 : 28;
    const btn = {
      width: s,
      height: s,
      borderRadius: 100,
      border: "1px solid " + RM_C.line,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { type: "button", style: btn, onClick: () => onChange(Math.max(0, value - 1)), "aria-label": "Decrease" }, /* @__PURE__ */ React.createElement(RIcon, { name: "minus", size: 12, color: RM_C.ink })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 13, fontWeight: 600, minWidth: 12, textAlign: "center", fontVariantNumeric: "tabular-nums" } }, value), /* @__PURE__ */ React.createElement("button", { type: "button", style: btn, onClick: () => onChange(value + 1), "aria-label": "Increase" }, /* @__PURE__ */ React.createElement(RIcon, { name: "plus", size: 12, color: RM_C.ink })));
  }
  function RMAppBar({ title, onBack, right, sub }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "58px 16px 10px",
      background: RM_C.paper
    } }, onBack && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: onBack, style: {
      width: 34,
      height: 34,
      borderRadius: 100,
      border: "1px solid " + RM_C.line,
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flex: "none"
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "back", size: 17, color: RM_C.ink })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: RM_F.sans,
      fontSize: 14,
      fontWeight: 600,
      color: RM_C.ink,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    } }, title), sub && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, color: RM_C.sub, marginTop: 2 } }, sub)), right);
  }
  function RMTabBar({ active, onNav }) {
    const items = [
      { id: "A2", label: "Home", icon: "home" },
      { id: "C1", label: "Shop", icon: "bag" },
      { id: "D1", label: "Projects", icon: "grid" },
      { id: "D4", label: "Profile", icon: "user" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: {
      flex: "none",
      background: "rgba(247,243,236,0.96)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid " + RM_C.line,
      padding: "8px 0 34px",
      display: "flex",
      alignItems: "flex-start"
    } }, items.map((it) => {
      const on = it.id === active;
      return /* @__PURE__ */ React.createElement("button", { key: it.id, type: "button", onClick: () => onNav(it.id), style: {
        flex: 1,
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "6px 0 2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      } }, /* @__PURE__ */ React.createElement(RIcon, { name: it.icon, size: 21, color: on ? RM_C.wine : "#9A9186", sw: on ? 1.8 : 1.4 }), /* @__PURE__ */ React.createElement("span", { style: {
        fontFamily: RM_F.sans,
        fontSize: 10,
        fontWeight: on ? 600 : 500,
        color: on ? RM_C.wine : "#9A9186",
        letterSpacing: "0.01em"
      } }, it.label));
    }));
  }
  function RMScreen({ children, tab, onNav, footer, bg = RM_C.paper, scrollRef }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: bg,
      color: RM_C.ink,
      fontFamily: RM_F.sans
    } }, /* @__PURE__ */ React.createElement("div", { ref: scrollRef, className: "rm-scroll", style: { flex: 1, overflowY: "auto", overflowX: "hidden", WebkitOverflowScrolling: "touch" } }, children), footer, tab && /* @__PURE__ */ React.createElement(RMTabBar, { active: tab, onNav }));
  }
  function RMSectionHead({ title, action, onAction, style }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, ...style } }, /* @__PURE__ */ React.createElement("h2", { style: {
      margin: 0,
      fontFamily: RM_F.serif,
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: RM_C.ink
    } }, title), action && /* @__PURE__ */ React.createElement(RMTextLink, { onClick: onAction, style: { fontSize: 11.5 } }, action));
  }
  var RM_BTN_RESET = { background: "none", border: 0, padding: 0, cursor: "pointer", color: "inherit", font: "inherit" };
  Object.assign(window, {
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
    RMTabBar,
    RMScreen,
    RMSectionHead,
    RM_BTN_RESET
  });
})();
