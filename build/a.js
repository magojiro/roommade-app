(() => {
  // src/screens/a.jsx
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
    RM_IMG,
    rmMoney
  } = window;
  var RM_IMG_A = window.RM_IMG;
  var RM_CASES = {
    waldorf: {
      photos: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => "assets/case/waldorf-" + n + ".jpg")
    }
  };
  function ScreenA1({ go, state }) {
    return /* @__PURE__ */ React.createElement(RMScreen, null, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 360, background: RM_C.ink } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG_A.after, alt: "A warm modern living room", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.05) 38%, rgba(20,16,12,0.28) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 62, left: 22, right: 22, display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 9 } }, /* @__PURE__ */ React.createElement("img", { src: "assets/rm-logo-mark-white.png", alt: "RARITAG", style: { height: 36, width: 36, objectFit: "contain", display: "block", flex: "none", opacity: 0.94 } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 22, color: "#FBF7F0", letterSpacing: "-0.02em" } }, "RoomMade")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9, letterSpacing: "0.18em", color: "rgba(251,247,240,0.72)", textTransform: "uppercase" } }, "New York")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 22, right: 40, bottom: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 1, background: RM_C.brass, marginBottom: 12 } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 25, lineHeight: 1.15, color: "#FBF7F0", letterSpacing: "-0.01em" } }, "The room you want,", /* @__PURE__ */ React.createElement("br", null), "delivered and installed."))), /* @__PURE__ */ React.createElement("div", { style: { padding: "22px 22px 28px", display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(RMTag, { tone: "brass" }, "3 free AI designs"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, color: RM_C.sub } }, "for new members")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 28 } }, "Design your room.", /* @__PURE__ */ React.createElement("br", null), "Buy the whole look."), /* @__PURE__ */ React.createElement("p", { style: { margin: "10px 0 0", fontFamily: RM_F.sans, fontSize: 13.5, lineHeight: 1.55, color: RM_C.sub, textWrap: "pretty" } }, "Snap a photo and get a real design in 30 seconds \u2014 every piece priced, in stock or made to order, and installed by our crew.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 2 } }, /* @__PURE__ */ React.createElement(RMButton, { variant: "dark", onClick: () => go("A2") }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans } }, "Continue with Apple")), /* @__PURE__ */ React.createElement(RMButton, { variant: "ghost", onClick: () => go("A2") }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { d: "M21 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.1c-.2 1.2-.9 2.3-1.9 3v2.5h3c1.8-1.6 2.8-4 2.8-7.2z", fill: "#4285F4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 21.5c2.5 0 4.6-.8 6.2-2.2l-3-2.5c-.8.6-1.9.9-3.2.9-2.4 0-4.4-1.6-5.2-3.8H3.7v2.5C5.2 19.5 8.3 21.5 12 21.5z", fill: "#34A853" }), /* @__PURE__ */ React.createElement("path", { d: "M6.8 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.6H3.7C3 9 2.5 10.4 2.5 12s.5 3 1.2 4.4l3.1-2.5z", fill: "#FBBC05" }), /* @__PURE__ */ React.createElement("path", { d: "M12 6.4c1.3 0 2.5.5 3.5 1.4l2.7-2.7C16.6 3.5 14.5 2.5 12 2.5 8.3 2.5 5.2 4.6 3.7 7.6l3.1 2.5c.8-2.2 2.8-3.7 5.2-3.7z", fill: "#EA4335" })), "Continue with Google")), /* @__PURE__ */ React.createElement(RMButton, { variant: "quiet", onClick: () => go("A2") }, "Continue with email")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(RMTextLink, { onClick: () => go("C1"), style: { fontSize: 12 } }, "Browse inspiration first"), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "#9A9186", textAlign: "center", maxWidth: 290 } }, "By continuing you agree to our Terms and Privacy Policy. California residents may exercise CCPA rights at any time."))));
  }
  function ScreenA2({ go, state }) {
    const [viewer, setViewer] = useState(null);
    const [muted, setMuted] = useState(true);
    const creditPill = /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("D6"), style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: 30,
      padding: "0 11px",
      borderRadius: 100,
      border: "1px solid " + RM_C.line,
      background: "rgba(255,255,255,0.6)",
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement(RIcon, { name: "spark", size: 13, color: RM_C.brass }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, color: RM_C.ink } }, state.credits, " credits"));
    const hintCard = (title, sub, img, onClick, tall) => /* @__PURE__ */ React.createElement("button", { type: "button", onClick, style: {
      position: "relative",
      height: tall ? 196 : 132,
      borderRadius: 14,
      overflow: "hidden",
      border: 0,
      padding: 0,
      cursor: "pointer",
      background: RM_C.sand,
      textAlign: "left",
      width: "100%"
    } }, /* @__PURE__ */ React.createElement("img", { src: img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: tall ? "linear-gradient(180deg, rgba(20,16,12,0.05) 30%, rgba(20,16,12,0.72) 100%)" : "linear-gradient(180deg, rgba(20,16,12,0.02) 30%, rgba(20,16,12,0.66) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 14, right: 14, bottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: tall ? 20 : 15, color: "#FBF7F0", letterSpacing: "-0.01em" } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10.5, lineHeight: 1.35, color: "rgba(251,247,240,0.82)", marginTop: 3 } }, sub)));
    const inspiration = [
      { img: RM_IMG_A.kitchen, room: "Kitchen", style: "Warm Minimal" },
      { img: RM_IMG_A.bedroom, room: "Bedroom", style: "Japandi" },
      { img: RM_IMG_A.dining, room: "Dining", style: "Mid-Century" },
      { img: RM_IMG_A.bath, room: "Bath", style: "Soft Coastal" }
    ];
    const caseCard = (opt) => /* @__PURE__ */ React.createElement("button", { type: "button", key: opt.key, onClick: opt.onClick, style: {
      position: "relative",
      width: "100%",
      height: 186,
      borderRadius: 14,
      overflow: "hidden",
      border: 0,
      padding: 0,
      cursor: "pointer",
      background: RM_C.sand,
      textAlign: "left",
      display: "block"
    } }, /* @__PURE__ */ React.createElement("img", { src: opt.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.30) 0%, rgba(20,16,12,0.02) 34%, rgba(20,16,12,0.80) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 12, left: 13, right: 13, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: "var(--mono)",
      fontSize: 7.5,
      letterSpacing: "0.18em",
      color: "#FBF7F0",
      background: "rgba(20,16,12,0.44)",
      border: "1px solid rgba(251,247,240,0.28)",
      borderRadius: 100,
      padding: "3px 7px"
    } }, opt.badge), opt.media && /* @__PURE__ */ React.createElement("span", { style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontFamily: RM_F.sans,
      fontSize: 9,
      color: "#FBF7F0",
      background: "rgba(20,16,12,0.44)",
      border: "1px solid rgba(251,247,240,0.28)",
      borderRadius: 100,
      padding: "2px 7px 2px 6px"
    } }, opt.media === "video" ? /* @__PURE__ */ React.createElement(RIcon, { name: "chevron", size: 9, color: "#FBF7F0" }) : /* @__PURE__ */ React.createElement(RIcon, { name: "grid", size: 9, color: "#FBF7F0" }), opt.mediaLabel)), opt.media === "video" && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-56%)",
      width: 46,
      height: 46,
      borderRadius: 100,
      background: "rgba(251,247,240,0.94)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 18px rgba(20,16,12,0.35)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 0, height: 0, borderLeft: "12px solid " + RM_C.ink, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", marginLeft: 2 } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 14, right: 14, bottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 18.5, color: "#FBF7F0", letterSpacing: "-0.01em", lineHeight: 1.2 } }, opt.title), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.4, color: "rgba(251,247,240,0.80)", marginTop: 4 } }, opt.sub)));
    return /* @__PURE__ */ React.createElement(RMScreen, { tab: "A2", onNav: go, overlay: viewer && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      background: "rgba(14,11,8,0.94)",
      display: "flex",
      flexDirection: "column"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "56px 16px 10px", flex: "none" } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 13, fontWeight: 600, color: "#FBF7F0" } }, viewer.kind === "video" ? "Carlyle Hotel \xB7 renovation" : "Waldorf Astoria \xB7 8-year renovation"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: "rgba(251,247,240,0.6)", marginTop: 2 } }, viewer.kind === "video" ? "01:51 \xB7 via \u8BBE\u8BA1\u5B66\u957F on RED" : String(viewer.i + 1) + " / " + RM_CASES.waldorf.photos.length + " \xB7 via \u5916\u6EE9\u8BBE\u8BA1\u9152\u5E97 on RED")), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setViewer(null), style: {
      width: 32,
      height: 32,
      borderRadius: 100,
      border: "1px solid rgba(251,247,240,0.3)",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flex: "none"
    }, "aria-label": "Close" }, /* @__PURE__ */ React.createElement(RIcon, { name: "close", size: 16, color: "#FBF7F0" }))), viewer.kind === "video" ? /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 12px" } }, /* @__PURE__ */ React.createElement(
      "video",
      {
        src: "assets/video/case-carlyle-web.mp4",
        poster: "assets/case/carlyle-poster.jpg",
        controls: true,
        autoPlay: true,
        playsInline: true,
        muted,
        style: { width: "100%", maxHeight: "100%", borderRadius: 12, background: "#000", display: "block" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 12, flex: "none" } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setMuted((m) => !m), style: {
      height: 34,
      padding: "0 14px",
      borderRadius: 100,
      border: "1px solid rgba(251,247,240,0.3)",
      background: muted ? "rgba(251,247,240,0.12)" : "rgba(251,247,240,0.9)",
      color: muted ? "#FBF7F0" : RM_C.ink,
      fontFamily: RM_F.sans,
      fontSize: 11.5,
      fontWeight: 600,
      cursor: "pointer"
    } }, muted ? "Sound on" : "Sound off"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.5, color: "rgba(251,247,240,0.55)", alignSelf: "center" } }, "Plays inline \xB7 tap to pause"))) : /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 12px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, borderRadius: 12, overflow: "hidden", background: "#000" } }, /* @__PURE__ */ React.createElement("img", { src: RM_CASES.waldorf.photos[viewer.i], alt: "", style: { width: "100%", height: "100%", objectFit: "contain", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 12, flex: "none", overflowX: "auto", paddingBottom: 2 } }, RM_CASES.waldorf.photos.map((p, i) => /* @__PURE__ */ React.createElement("button", { type: "button", key: p, onClick: () => setViewer({ kind: "photos", i }), style: {
      width: 44,
      height: 44,
      flex: "none",
      borderRadius: 7,
      overflow: "hidden",
      padding: 0,
      cursor: "pointer",
      border: i === viewer.i ? "2px solid #FBF7F0" : "2px solid transparent",
      background: "none",
      opacity: i === viewer.i ? 1 : 0.55
    } }, /* @__PURE__ */ React.createElement("img", { src: p, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } })))))) }, /* @__PURE__ */ React.createElement("div", { style: { padding: "56px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("img", { src: "assets/rm-logo-mark.png", alt: "RARITAG", style: { height: 42, width: 42, objectFit: "contain", display: "block", flex: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 23, letterSpacing: "-0.02em" } }, "RoomMade")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("C1"), style: {
      width: 30,
      height: 30,
      borderRadius: 100,
      border: "1px solid " + RM_C.line,
      background: "rgba(255,255,255,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }, "aria-label": "Search" }, /* @__PURE__ */ React.createElement(RIcon, { name: "search", size: 15, color: RM_C.ink })), creditPill)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RMLabel, null, "Brooklyn, NY \xB7 10:24 AM"), /* @__PURE__ */ React.createElement(RMH1, { style: { fontSize: 26, marginTop: 7 } }, "Good morning, Ava"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 18 } }, hintCard("Photo Design", "Snap a photo \u2192 shoppable design in 30s", RM_IMG_A.after, () => go("B1"), true), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, hintCard("Floor Plan", "Whole-home design by room", RM_IMG_A.plan, () => go("B7")), hintCard("Refresh a Look", "Keep the room, change the pieces", RM_IMG_A.bedroom, () => go("B6")))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("E1"), style: {
      marginTop: 18,
      width: "100%",
      borderRadius: 14,
      border: 0,
      background: RM_C.ink,
      padding: "13px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      textAlign: "left"
    } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.18em", color: "rgba(247,243,236,0.5)" } }, "ROOMMADE TRADE"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.serif, fontSize: 16, color: "#FBF7F0", marginTop: 4 } }, "Staging a listing?"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.45, color: "rgba(251,247,240,0.62)", marginTop: 3 } }, "Rent a whole-room set by the month \xB7 install & de-stage included, from $620")), /* @__PURE__ */ React.createElement("span", { style: { width: 30, height: 30, borderRadius: 100, border: "1px solid rgba(247,243,236,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, /* @__PURE__ */ React.createElement(RIcon, { name: "arrowR", size: 13, color: "#FBF7F0" }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 26 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Hotel renovations, decoded", action: "Inspiration", onAction: () => go("C1") }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 12 } }, caseCard({
      key: "waldorf",
      badge: "NEW YORK \xB7 8 YEARS",
      media: "photos",
      mediaLabel: "8 photos",
      img: "assets/case/waldorf-1.jpg",
      title: "Waldorf Astoria, rebuilt",
      sub: "$6B+ from acquisition to completion \xB7 1,400 rooms cut to 375",
      onClick: () => setViewer({ kind: "photos", i: 0 })
    }), caseCard({
      key: "carlyle",
      badge: "NEW YORK \xB7 CARLYLE",
      media: "video",
      mediaLabel: "01:51",
      img: "assets/case/carlyle-cover.jpg",
      title: "The Carlyle, by Ji Yutang",
      sub: "Room-by-room walkthrough of the Upper East Side landmark",
      onClick: () => {
        setMuted(true);
        setViewer({ kind: "video" });
      }
    }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 26 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Continue your design", action: "All projects", onAction: () => go("D1") }), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 12,
      background: RM_C.card,
      border: "1px solid " + RM_C.line,
      borderRadius: 16,
      padding: 12,
      display: "flex",
      gap: 12,
      alignItems: "center"
    } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 74, height: 74, flex: "none", borderRadius: 10, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: RM_IMG_A.after, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      background: "rgba(26,24,21,0.78)",
      fontFamily: RM_F.sans,
      fontSize: 7,
      letterSpacing: "0.08em",
      color: "#F7F3EC",
      padding: "2px 4px"
    } }, "AFTER")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 13, fontWeight: 600 } }, "Warm Modern Living Room"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11, color: RM_C.sub, marginTop: 3 } }, "8 items \xB7 ", rmMoney(8340), " with install"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 7 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 3, flex: 1, background: RM_C.line, borderRadius: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "60%", height: "100%", background: RM_C.brass, borderRadius: 2 } })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 9.5, color: RM_C.sub } }, "3 of 5"))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => go("B4"), style: {
      height: 32,
      padding: "0 13px",
      borderRadius: 8,
      border: "1px solid " + RM_C.ink,
      background: "transparent",
      fontFamily: RM_F.sans,
      fontSize: 11.5,
      fontWeight: 600,
      cursor: "pointer",
      flex: "none"
    } }, "Resume"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 26 } }, /* @__PURE__ */ React.createElement(RMSectionHead, { title: "Inspiration for a warm modern home", action: "View all", onAction: () => go("C1") }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 } }, inspiration.map((it) => /* @__PURE__ */ React.createElement("button", { type: "button", key: it.room, onClick: () => go("C1"), style: { ...RM_BTN_RESET, textAlign: "left" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 104, borderRadius: 10, overflow: "hidden", background: RM_C.sand } }, /* @__PURE__ */ React.createElement("img", { src: it.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, marginTop: 6 } }, it.room), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 10, color: RM_C.sub } }, it.style))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "14px 0 18px", borderTop: "1px solid " + RM_C.line, display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 7 } }, /* @__PURE__ */ React.createElement(RIcon, { name: "truck", size: 14, color: RM_C.sage }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: RM_F.sans, fontSize: 10.5, color: RM_C.sub } }, "Designed in New York \xB7 Delivered & installed by our crew")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: RM_F.sans, fontSize: 9.5, letterSpacing: "0.04em", color: "#9A9186" } }, "NEW YORK \xB7 PHILADELPHIA \xB7 CHICAGO \xB7 CINCINNATI \xB7 CHARLOTTE"))));
  }
  Object.assign(window, { SCREENS_A: { A1: ScreenA1, A2: ScreenA2 } });
})();
