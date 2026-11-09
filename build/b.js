(() => {
  // v4/src/screens/b.jsx
  var {
    useState,
    useEffect,
    useRef
  } = React;
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
    rmTotals,
    rmMoney,
    rmPrice
  } = window;
  var B = RM_C;
  function RMBeforeAfter({ before, after, height = 244 }) {
    const ref = useRef(null);
    const [pos, setPos] = useState(52);
    const [drag, setDrag] = useState(false);
    const move = (clientX) => {
      const r = ref.current.getBoundingClientRect();
      setPos(Math.min(98, Math.max(2, (clientX - r.left) / r.width * 100)));
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        onPointerDown: (e) => {
          setDrag(true);
          move(e.clientX);
        },
        onPointerMove: (e) => {
          if (drag) move(e.clientX);
        },
        onPointerUp: () => setDrag(false),
        onPointerLeave: () => setDrag(false),
        style: {
          position: "relative",
          height,
          borderRadius: 14,
          overflow: "hidden",
          background: B.sand,
          touchAction: "pan-y",
          cursor: "ew-resize",
          userSelect: "none"
        }
      },
      /* @__PURE__ */ React.createElement("img", { src: after, alt: "Designed room", draggable: "false", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` } }, /* @__PURE__ */ React.createElement("img", { src: before, alt: "Before", draggable: "false", style: { width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.72)" } })),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 10, top: 10, background: "rgba(26,24,21,0.62)", color: "#F7F3EC", fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.14em", padding: "3px 6px", borderRadius: 3 } }, "BEFORE"),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 10, top: 10, background: "rgba(247,243,236,0.92)", color: B.ink, fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.14em", padding: "3px 6px", borderRadius: 3 } }, "AFTER"),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 1.5, background: "rgba(251,247,240,0.95)", transform: "translateX(-50%)" } }),
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        left: `${pos}%`,
        top: "50%",
        transform: "translate(-50%,-50%)",
        width: 34,
        height: 34,
        borderRadius: 100,
        background: "#FBF7F0",
        border: "1px solid rgba(26,24,21,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        boxShadow: "0 2px 10px rgba(26,24,21,0.18)"
      } }, /* @__PURE__ */ React.createElement(RIcon, { name: "back", size: 11, color: B.ink }), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 11, color: B.ink })),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 10, bottom: 9, fontFamily: RM_F.sans, fontSize: 9, color: "rgba(251,247,240,0.9)", textShadow: "0 1px 2px rgba(0,0,0,0.4)" } }, "Drag to compare")
    );
  }
  function ScreenB1({ go }) {
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("B2") }, "Use this photo")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "New design", sub: "Photo design", onBack: () => go("A2") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 0" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 25 } }, "Start with one photo"), /* @__PURE__ */ React.createElement("p", { style: { margin: "8px 0 0", fontFamily: RM_F.sans, fontSize: 12.5, lineHeight: 1.55, color: B.sub } }, "Stand at the doorway and fit the whole room in frame. We read the space, the light and what stays."), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginTop: 16, height: 296, borderRadius: 16, overflow: "hidden", background: B.sand } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.before, alt: "Camera preview of a living room", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 14, border: "1px solid rgba(251,247,240,0.5)", borderRadius: 8 } }), [["left", "top"], ["right", "top"], ["left", "bottom"], ["right", "bottom"]].map(([a, c]) => /* @__PURE__ */ React.createElement("div", { key: a + c, style: { position: "absolute", [a]: 14, [c]: 14, width: 20, height: 20, borderLeft: a === "left" ? "2px solid #FBF7F0" : "none", borderRight: a === "right" ? "2px solid #FBF7F0" : "none", borderTop: c === "top" ? "2px solid #FBF7F0" : "none", borderBottom: c === "bottom" ? "2px solid #FBF7F0" : "none" } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 76, height: 76, border: "1px solid rgba(251,247,240,0.55)", borderRadius: 100 } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 14,
      bottom: 14,
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(26,24,21,0.62)",
      borderRadius: 100,
      padding: "6px 10px",
      backdropFilter: "blur(6px)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 6, height: 6, borderRadius: 100, background: "#C7B07A" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: "#F7F3EC" } }, "Center the room \xB7 daylight \xB7 keep 8 ft back")), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      right: 12,
      top: 12,
      width: 40,
      height: 40,
      borderRadius: 8,
      overflow: "hidden",
      border: "1.5px solid #FBF7F0"
    } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.after, alt: "Last photo", style: { width: "100%", height: "100%", objectFit: "cover" } }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 12 } }, [
      { icon: "camera", t: "Shoot or upload", s: "JPG, HEIC, RAW" },
      { icon: "ruler", t: "No tape needed", s: "We estimate size" },
      { icon: "shield", t: "Private by default", s: "Photos stay yours" }
    ].map((g) => /* @__PURE__ */ React.createElement("div", { key: g.t, style: { border: "1px solid " + B.line, borderRadius: 10, padding: "9px 8px", background: "rgba(255,255,255,0.55)" } }, /* @__PURE__ */ React.createElement(RIcon, { name: g.icon, size: 14, color: B.brass }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 600, marginTop: 6 } }, g.t), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: B.sub, marginTop: 2 } }, g.s)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", onClick: () => go("B2") }, /* @__PURE__ */ React.createElement(RIcon, { name: "upload", size: 15, color: B.ink }), "Upload from library"), /* @__PURE__ */ React.createElement(RMButton, { variant: "quiet", onClick: () => go("B7") }, /* @__PURE__ */ React.createElement(RIcon, { name: "plan", size: 15, color: B.ink }), "Upload a floor plan instead"))));
  }
  var RM_STYLES = [
    { name: "Modern", img: RM_IMG.after },
    { name: "Mid-Century", img: RM_IMG.dining },
    { name: "Scandinavian", img: RM_IMG.bedroom },
    { name: "Coastal", img: RM_IMG.coastal },
    { name: "Japandi", img: RM_IMG.bath },
    { name: "Warm Minimal", img: RM_IMG.kitchen }
  ];
  function RMSwitch({ on, onChange }) {
    return /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => onChange(!on), style: {
      width: 40,
      height: 24,
      borderRadius: 100,
      border: 0,
      padding: 2,
      cursor: "pointer",
      background: on ? B.wine : "#D8D0C3",
      display: "flex",
      justifyContent: on ? "flex-end" : "flex-start",
      transition: "background .18s ease",
      flex: "none"
    }, "aria-pressed": on }, /* @__PURE__ */ React.createElement("span", { style: { width: 20, height: 20, borderRadius: 100, background: "#FBF7F0", display: "block" } }));
  }
  function ScreenB2({ go, state, setState }) {
    const rooms = ["Living room", "Bedroom", "Dining", "Kitchen", "Bath", "Home office", "Whole home"];
    const [keep, setKeep] = useState(true);
    const [install, setInstall] = useState(true);
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("B3") }, "Generate design \xB7 1 credit"), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontFamily: RM_F.sans, fontSize: 10.5, color: B.sub, marginTop: 8 } }, state.credits, " free designs left this month \xB7 no card required")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Space & style", sub: "Step 1 of 3", onBack: () => go("B1") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 20px 8px" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 25 } }, "Tell us about the room"), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Room type"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, overflowX: "auto", margin: "9px -20px 0", padding: "0 20px 2px" }, className: "rm-scroll-x" }, rooms.map((r, i) => /* @__PURE__ */ React.createElement(RMChip, { key: r, active: state.room === r, onClick: () => setState({ room: r }) }, r))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 22 } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Style"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "Illustrative sample data")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginTop: 9 } }, RM_STYLES.map((s) => {
      const on = state.style === s.name;
      return /* @__PURE__ */ React.createElement("button", { key: s.name, type: "button", onClick: () => setState({ style: s.name }), style: {
        position: "relative",
        height: 84,
        borderRadius: 10,
        overflow: "hidden",
        padding: 0,
        border: on ? "2px solid " + B.wine : "1px solid " + B.line,
        cursor: "pointer",
        background: B.sand
      } }, /* @__PURE__ */ React.createElement("img", { src: s.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0) 40%, rgba(20,16,12,0.74) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 7, right: 5, bottom: 6, textAlign: "left", fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600, color: "#FBF7F0", lineHeight: 1.15 } }, s.name), on && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 5, top: 5, width: 16, height: 16, borderRadius: 100, background: B.wine, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 9, color: "#FBF7F0", sw: 2.4 })));
    })), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 22 } }, "Budget"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginTop: 9 } }, RM_TIERS.map((t, i) => {
      const on = state.tier === i;
      const total = rmTotals(i).total;
      return /* @__PURE__ */ React.createElement("button", { key: t.key, type: "button", onClick: () => setState({ tier: i }), style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textAlign: "left",
        cursor: "pointer",
        padding: "10px 12px",
        borderRadius: 10,
        background: on ? "#FBF8F2" : "transparent",
        border: "1px solid " + (on ? B.wine : B.line)
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        width: 15,
        height: 15,
        borderRadius: 100,
        border: "1px solid " + (on ? B.wine : "#C9C0B2"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      } }, on && /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 100, background: B.wine } })), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.serif, fontSize: 14, color: B.ink } }, t.label), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 10, color: B.sub, marginTop: 1 } }, t.note)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, fontVariantNumeric: "tabular-nums" } }, rmMoney(total)));
    })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, borderTop: "1px solid " + B.line } }, [
      { label: "Keep my existing furniture", sub: "We design around pieces you own", on: keep, set: setKeep },
      { label: "Include installation", sub: "Two-person crew, room of choice", on: install, set: setInstall }
    ].map((row, i) => /* @__PURE__ */ React.createElement("div", { key: row.label, style: { display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderBottom: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 12.5, fontWeight: 500 } }, row.label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub, marginTop: 2 } }, row.sub)), /* @__PURE__ */ React.createElement(RMSwitch, { on: row.on, onChange: row.set }))))));
  }
  function ScreenB3({ go }) {
    const [step, setStep] = useState(0);
    const steps = [
      ["Reading the room", "Detecting walls, windows and existing pieces"],
      ["Matching real products", "Filtering 41,208 in-stock and made-to-order pieces"],
      ["Pricing & lead times", "Adding delivery, install and NY tax"],
      ["Composing your look", "Balancing scale, light and contrast"]
    ];
    useEffect(() => {
      const timers = [520, 1150, 1800, 2450].map((ms, i) => setTimeout(() => setStep(i + 1), ms));
      const done = setTimeout(() => go("B4"), 3200);
      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(done);
      };
    }, []);
    return /* @__PURE__ */ React.createElement(RMScreen, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "58px 22px 0", display: "flex", flexDirection: "column", height: "100%" } }, /* @__PURE__ */ React.createElement(RMLabel, { style: { color: B.brass } }, "Generating design"), /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 26, marginTop: 8 } }, "Building a room", /* @__PURE__ */ React.createElement("br", null), "you can actually buy"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginTop: 20, height: 226, borderRadius: 14, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.before, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", filter: "blur(2.5px) saturate(0.85) brightness(0.86)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,24,21,0.25), rgba(26,24,21,0.05))" } }), /* @__PURE__ */ React.createElement("div", { className: "rm-scan", style: { position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(90deg, rgba(176,138,84,0), #D8BE8E, rgba(176,138,84,0))" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 12, bottom: 12, display: "flex", gap: 5 } }, [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "rm-dot", style: { animationDelay: i * 0.22 + "s", width: 5, height: 5, borderRadius: 100, background: "#F0E3CB" } })))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", flexDirection: "column", gap: 0 } }, steps.map(([t, s], i) => {
      const done = i < step;
      const active = i === step;
      return /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: 11, paddingBottom: 15 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: 18, flex: "none" } }, /* @__PURE__ */ React.createElement("div", { style: {
        width: 18,
        height: 18,
        borderRadius: 100,
        flex: "none",
        border: "1px solid " + (done ? B.sage : active ? B.wine : "#CFC6B8"),
        background: done ? B.sage : active ? "rgba(110,31,46,0.08)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, done ? /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 10, color: "#FBF7F0", sw: 2.6 }) : active ? /* @__PURE__ */ React.createElement("span", { className: "rm-pulse", style: { width: 5, height: 5, borderRadius: 100, background: B.wine } }) : null), i < steps.length - 1 && /* @__PURE__ */ React.createElement("div", { style: { width: 1, flex: 1, background: B.line, marginTop: 4 } })), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 12.5, fontWeight: done || active ? 600 : 500, color: done || active ? B.ink : "#A39A8D" } }, t), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: B.sub, marginTop: 2 } }, s)));
    })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingBottom: 30 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 2, background: B.line, borderRadius: 2, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${Math.min(100, step / 4 * 100)}%`, height: "100%", background: B.wine, transition: "width .5s ease" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "Usually takes 20\u201330 seconds"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub, fontVariantNumeric: "tabular-nums" } }, Math.min(step, 4) * 25, "%")))));
  }
  function RMTierTabs({ value, onChange }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3, background: "#EDE5D8", borderRadius: 9, padding: 3 } }, RM_TIERS.map((t, i) => {
      const on = value === i;
      return /* @__PURE__ */ React.createElement("button", { key: t.key, type: "button", onClick: () => onChange(i), style: {
        flex: 1,
        height: 31,
        borderRadius: 7,
        border: 0,
        cursor: "pointer",
        background: on ? "#FBF8F2" : "transparent",
        color: on ? B.ink : "#847B6D",
        fontFamily: RM_F.sans,
        fontSize: 11,
        fontWeight: on ? 600 : 500,
        boxShadow: on ? "0 1px 2px rgba(26,24,21,0.08)" : "none"
      } }, t.label);
    }));
  }
  function ScreenB4({ go, state, setState }) {
    const tier = state.tier || 1;
    const t = rmTotals(tier);
    const items = RM_PRODUCTS.slice(0, 6);
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line, display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("B5") }, "Shop this look \xB7 ", rmMoney(t.total)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", style: { height: 40, fontSize: 12 }, onClick: () => setState({ saved: !state.saved }) }, /* @__PURE__ */ React.createElement(RIcon, { name: "heart", size: 14, color: state.saved ? B.wine : B.ink }), state.saved ? "Saved to ideabooks" : "Save look"), /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", style: { height: 40, fontSize: 12 }, onClick: () => go("B3") }, "Regenerate"))) }, /* @__PURE__ */ React.createElement(
      RMAppBar,
      {
        title: "Design result",
        sub: "Warm Modern \xB7 Living room",
        onBack: () => go("A2"),
        right: /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "Illustrative sample data")
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 20px 18px" } }, /* @__PURE__ */ React.createElement(RMBeforeAfter, { before: RM_IMG.before, after: RM_IMG.after }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, marginTop: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 24 } }, "Warm Modern", /* @__PURE__ */ React.createElement("br", null), "Living Room"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, color: B.sub, marginTop: 6 } }, "Brooklyn, NY \xB7 8 items \xB7 420 sq ft")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 5, marginTop: 4 } }, /* @__PURE__ */ React.createElement(RMTag, { tone: "sage" }, "Warm Modern"), /* @__PURE__ */ React.createElement(RMTag, { tone: "brass" }, "Install"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(RMTierTabs, { value: tier, onChange: (i) => setState({ tier: i }) })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RMLabel, null, "Total for the room"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 34, letterSpacing: "-0.02em", marginTop: 2, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.total))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "8 items \xB7 delivered &"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "installed in 3\u20135 weeks"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, border: "1px solid " + B.line, borderRadius: 10, padding: "10px 12px", background: "rgba(255,255,255,0.5)" } }, [["Furniture", t.furniture], ["Delivery & install", t.delivery], ["Estimated tax (NY 8.875%)", t.tax]].map(([k, v], i) => /* @__PURE__ */ React.createElement("div", { key: k, style: { display: "flex", justifyContent: "space-between", padding: i === 2 ? "6px 0 0" : "0 0 6px", borderTop: i === 2 ? "1px solid " + B.line : "none", marginTop: i === 2 ? 4 : 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, color: i === 2 ? B.sub : B.ink } }, k), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500, fontVariantNumeric: "tabular-nums" } }, v === 0 ? "Included" : rmMoney(v)))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, color: "#9A9186", marginTop: 8 } }, "Prices include US duties. Delivered to New York, NY.")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("F2", { set: "set-living", monthly: true }), style: {
      marginTop: 14,
      width: "100%",
      border: "1px dashed rgba(176,138,84,0.55)",
      borderRadius: 10,
      background: "rgba(176,138,84,0.08)",
      padding: "11px 12px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "box", size: 16, color: B.brass }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 } }, "Staging this property? Rent the look"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 2 } }, "Same 8 pieces \xB7 from $1,180/mo \xB7 3-month min, install included")), /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 12, color: "#A69C8D" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "What's included", action: "See all 8", onAction: () => go("B5") }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, items.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.id, style: { display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement("div", { style: { width: 42, height: 42, borderRadius: 7, overflow: "hidden", background: "#EFE9DE", flex: "none" } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 1 } }, p.sub)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500, fontVariantNumeric: "tabular-nums" } }, rmMoney(rmPrice(p, tier))))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, display: "flex", gap: 8, alignItems: "center", background: "rgba(176,138,84,0.09)", borderRadius: 10, padding: "10px 12px" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "shield", size: 16, color: B.brass }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, lineHeight: 1.4, color: "#6B5B3E" } }, "Every piece is checked against US safety standards. Exact fabric and finish samples ship free before production."))));
  }
  function ScreenB5({ go, state, setState }) {
    const tier = state.tier || 1;
    const t = rmTotals(tier);
    const pinPos = [
      { left: "26%", top: "55%" },
      { left: "55%", top: "70%" },
      { left: "16%", top: "82%" },
      { left: "83%", top: "42%" },
      { left: "72%", top: "62%" },
      { left: "12%", top: "24%" },
      { left: "44%", top: "20%" },
      { left: "88%", top: "20%" }
    ];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "truck", size: 13, color: B.sage }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub } }, "Delivery in 3\u20135 weeks \xB7 Installed by our 2-person crew")), /* @__PURE__ */ React.createElement(RMButton, { onClick: () => {
      setState({ cart: { sofa: 1, table: 1, rug: 1, lamp: 1, chair: 1, sideboard: 1, art: 1, curtain: 1 } });
      go("C3");
    } }, "Add all 8 items \xB7 ", rmMoney(t.total))) }, /* @__PURE__ */ React.createElement(
      RMAppBar,
      {
        title: "Shop the Look",
        sub: "Warm Modern Living Room",
        onBack: () => go("B4"),
        right: /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setState({ saved: !state.saved }), style: { ...RM_BTN_RESET, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "heart", size: 17, color: state.saved ? B.wine : B.ink }))
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 230, borderRadius: 14, overflow: "hidden", background: B.sand } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.after, alt: "Designed living room", style: { width: "100%", height: "100%", objectFit: "cover" } }), pinPos.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      position: "absolute",
      left: p.left,
      top: p.top,
      transform: "translate(-50%,-50%)",
      width: 21,
      height: 21,
      borderRadius: 100,
      background: i === 0 ? B.wine : "rgba(251,247,240,0.94)",
      color: i === 0 ? "#FBF7F0" : B.ink,
      border: "1px solid " + (i === 0 ? B.wine : "rgba(26,24,21,0.15)"),
      fontFamily: RM_F.sans,
      fontSize: 9.5,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 1px 5px rgba(26,24,21,0.22)"
    } }, i + 1)), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 10, bottom: 10, background: "rgba(26,24,21,0.6)", borderRadius: 100, padding: "4px 9px", fontFamily: RM_F.sans, fontSize: 9, color: "#F7F3EC" } }, "Tap a number to see the piece")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 0 4px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RMLabel, null, RM_TIERS[tier].label, " selection \xB7 8 items"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 22, marginTop: 3, fontVariantNumeric: "tabular-nums" } }, rmMoney(t.total))), /* @__PURE__ */ React.createElement(RMTextLink, { onClick: () => go("B6"), style: { fontSize: 11 } }, "Swap an item")), /* @__PURE__ */ React.createElement("div", null, RM_PRODUCTS.map((p, i) => {
      const qty = state.cart[p.id] || 0;
      return /* @__PURE__ */ React.createElement("div", { key: p.id, style: { display: "flex", gap: 10, padding: "11px 0", borderBottom: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 62, height: 62, borderRadius: 9, overflow: "hidden", background: "#EFE9DE", flex: "none" } }, /* @__PURE__ */ React.createElement("img", { src: p.img, alt: p.name, style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("span", { style: {
        position: "absolute",
        left: 4,
        top: 4,
        width: 15,
        height: 15,
        borderRadius: 100,
        background: "rgba(26,24,21,0.78)",
        color: "#F7F3EC",
        fontSize: 8.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, i + 1)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 2 } }, p.sub), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600, fontVariantNumeric: "tabular-nums" } }, rmMoney(rmPrice(p, tier))), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 8.5, color: p.badge === "In stock" ? "#4E5C48" : "#7A5A2C" } }, p.badge))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", flex: "none" } }, /* @__PURE__ */ React.createElement(RMStepper, { compact: true, value: qty, onChange: (v) => setState({ cart: { ...state.cart, [p.id]: v } }) }), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setState({ cart: { ...state.cart, [p.id]: Math.max(1, qty) } }), style: {
        border: 0,
        background: qty ? "rgba(124,139,118,0.16)" : "transparent",
        color: qty ? "#4E5C48" : B.wine,
        fontFamily: RM_F.sans,
        fontSize: 10,
        fontWeight: 600,
        cursor: "pointer",
        padding: "2px 4px"
      } }, qty ? "Added" : "Add")));
    })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: "#9A9186", lineHeight: 1.5, margin: "12px 0 16px" } }, "Illustrative sample data. Prices include duties; final tax calculated at checkout.")));
  }
  var RM_SWAP_OPTIONS = [
    { id: "sofa", name: "Marlow Sofa", sub: "Boucl\xE9 \xB7 Oat", delta: 0, img: RM_IMG.sofa, note: "Current pick" },
    { id: "sage", name: "Alder Sofa", sub: "Linen \xB7 Sage", delta: 180, img: RM_IMG.sofaSage, note: "Ships 1 week sooner" },
    { id: "leather", name: "Rowan Sofa", sub: "Leather \xB7 Cognac", delta: -95, img: RM_IMG.sofaLeather, note: "Pets & kids" }
  ];
  function ScreenB6({ go, state, setState }) {
    const [pick, setPick] = useState(0);
    const base = rmTotals(state.tier || 1).total;
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("B5") }, "Update design \xB7 ", rmMoney(base + RM_SWAP_OPTIONS[pick].delta))) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Swap item", sub: "Living room \xB7 piece 1 of 8", onBack: () => go("B5") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 226, borderRadius: 14, overflow: "hidden", background: B.sand } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.after, alt: "Living room with selected sofa", style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "rgba(26,24,21,0.18)" } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: "18%",
      top: "48%",
      width: "44%",
      height: "36%",
      border: "1.5px solid #F0DFC4",
      borderRadius: 6,
      boxShadow: "0 0 0 200px rgba(26,24,21,0.16)"
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: "18%",
      top: "84%",
      transform: "translateY(2px)",
      background: "#FBF7F0",
      borderRadius: 6,
      padding: "6px 9px",
      boxShadow: "0 2px 8px rgba(26,24,21,0.2)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.1em", color: B.sub, textTransform: "uppercase" } }, "Selected"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 } }, RM_SWAP_OPTIONS[pick].name, " \xB7 ", RM_SWAP_OPTIONS[pick].sub))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginTop: 12 } }, ["Replace similar", "Remove", "Add new"].map((a, i) => /* @__PURE__ */ React.createElement("button", { key: a, type: "button", onClick: () => go("C1"), style: {
      height: 34,
      borderRadius: 8,
      border: "1px solid " + B.line,
      background: i === 0 ? "#FBF8F2" : "transparent",
      fontFamily: RM_F.sans,
      fontSize: 10.5,
      fontWeight: 500,
      cursor: "pointer",
      color: B.ink
    } }, a))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 22 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Similar sofas" }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "3 of 42")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 10 } }, RM_SWAP_OPTIONS.map((o, i) => {
      const on = pick === i;
      return /* @__PURE__ */ React.createElement("button", { key: o.id, type: "button", onClick: () => setPick(i), style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: 9,
        textAlign: "left",
        cursor: "pointer",
        borderRadius: 11,
        background: on ? "#FBF8F2" : "#FFFDF9",
        border: "1px solid " + (on ? B.wine : B.line)
      } }, /* @__PURE__ */ React.createElement("div", { style: { width: 64, height: 56, borderRadius: 7, overflow: "hidden", background: "#EFE9DE", flex: "none" } }, /* @__PURE__ */ React.createElement("img", { src: o.img, alt: o.name, style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 } }, o.name), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 2 } }, o.sub, " \xB7 ", o.note), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, marginTop: 3, color: o.delta === 0 ? B.sub : o.delta > 0 ? "#7A5A2C" : "#4E5C48" } }, o.delta === 0 ? "Included" : (o.delta > 0 ? "+" : "\u2212") + rmMoney(Math.abs(o.delta)) + " vs current")), /* @__PURE__ */ React.createElement("span", { style: {
        width: 16,
        height: 16,
        borderRadius: 100,
        border: "1px solid " + (on ? B.wine : "#C9C0B2"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      } }, on && /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 100, background: B.wine } })));
    })), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: B.sub, marginTop: 14 } }, "Swapping keeps the layout, palette and price balance intact. Lead times update with each pick.")));
  }
  function ScreenB7({ go, state, setState }) {
    const rooms = [
      { name: "Living", sqft: 268, share: 100 },
      { name: "Kitchen", sqft: 142, share: 74 },
      { name: "Primary bed", sqft: 186, share: 88 },
      { name: "Bed 2", sqft: 132, share: 52 },
      { name: "Bath", sqft: 68, share: 34 }
    ];
    return /* @__PURE__ */ React.createElement(RMScreen, { footer: /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement(RMButton, { onClick: () => go("B3") }, "Generate full-home design \xB7 1 credit"), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontFamily: RM_F.sans, fontSize: 10, color: B.sub, marginTop: 7 } }, "3 rooms included \xB7 add rooms anytime \xB7 ", state.credits, " credits left")) }, /* @__PURE__ */ React.createElement(RMAppBar, { title: "Floor plan", sub: "Whole-home design", onBack: () => go("A2"), right: /* @__PURE__ */ React.createElement(RMTag, { tone: "grey" }, "2D \xB7 3D soon") }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 14px" } }, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 25 } }, "Your apartment,", /* @__PURE__ */ React.createElement("br", null), "read by the room"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginTop: 14, height: 190, borderRadius: 12, overflow: "hidden", border: "1px solid " + B.line } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG.plan, alt: "Uploaded floor plan", style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 10, top: 10, background: "rgba(251,247,240,0.92)", borderRadius: 4, padding: "3px 7px", fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.08em", color: B.ink } }, "PLAN_2BR_1180SQFT.PDF")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 20 } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Detected \xB7 5 rooms \xB7 796 sq ft"), /* @__PURE__ */ React.createElement(RMTextLink, { onClick: () => go("B1"), style: { fontSize: 10.5 } }, "Re-upload")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, border: "1px solid " + B.line, borderRadius: 10, overflow: "hidden", background: "rgba(255,255,255,0.55)" } }, rooms.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: r.name, style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderTop: i === 0 ? "none" : "1px solid " + B.line } }, /* @__PURE__ */ React.createElement("span", { style: { width: 15, height: 15, borderRadius: 3, border: "1px solid " + (i === 0 ? B.wine : "#C9C0B2"), background: i === 0 ? "rgba(110,31,46,0.12)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" } }, i === 0 && /* @__PURE__ */ React.createElement(RIcon, { name: "check", size: 9, color: B.wine, sw: 2.6 })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, flex: 1 } }, r.name), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub, fontVariantNumeric: "tabular-nums" } }, r.sqft, " sq ft"), /* @__PURE__ */ React.createElement("span", { style: { width: 54, height: 3, background: B.line, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", width: r.share + "%", height: "100%", background: B.brass, borderRadius: 2 } }))))), /* @__PURE__ */ React.createElement(RMLabel, { style: { marginTop: 20 } }, "Whole-home style"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, marginTop: 9, overflowX: "auto", margin: "9px -20px 0", padding: "0 20px" }, className: "rm-scroll-x" }, ["Warm Minimal", "Modern", "Japandi", "Coastal"].map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", onClick: () => setState({ style: s }), style: {
      position: "relative",
      width: 92,
      height: 68,
      borderRadius: 9,
      overflow: "hidden",
      padding: 0,
      flex: "none",
      border: state.style === s ? "2px solid " + B.wine : "1px solid " + B.line,
      cursor: "pointer",
      background: B.sand
    } }, /* @__PURE__ */ React.createElement("img", { src: s === "Warm Minimal" ? RM_IMG.kitchen : s === "Modern" ? RM_IMG.after : s === "Japandi" ? RM_IMG.bedroom : RM_IMG.coastal, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 5, bottom: 4, fontFamily: RM_F.sans, fontSize: 8.5, fontWeight: 600, color: "#FBF7F0", textShadow: "0 1px 3px rgba(0,0,0,0.6)" } }, s)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ React.createElement(RMLabel, null, "Whole-home budget"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 9 } }, /* @__PURE__ */ React.createElement(RMTierTabs, { value: state.tier || 1, onChange: (i) => setState({ tier: i }) })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.serif, fontSize: 24, fontVariantNumeric: "tabular-nums" } }, rmMoney(rmTotals(state.tier || 1).total * 2.4)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10, color: B.sub } }, "5 rooms \xB7 install included")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2, marginTop: 8, height: 6 } }, [38, 22, 18, 14, 8].map((w, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { width: w + "%", background: [B.wine, "#8C4A53", B.brass, B.sage, "#C6B79E"][i], borderRadius: 2 } }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9, color: B.sub } }, "Living 38%"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9, color: B.sub } }, "Bath 8%")))));
  }
  Object.assign(window, { SCREENS_B: { B1: ScreenB1, B2: ScreenB2, B3: ScreenB3, B4: ScreenB4, B5: ScreenB5, B6: ScreenB6, B7: ScreenB7 }, RMTierTabs, RMBeforeAfter });
})();
