/* Group B — Design */
const {
  useState, useEffect, useRef
} = React;
const {
  RM_C, RM_F, RIcon, RMButton, RMTextLink, RMH1, RMLabel, RMChip, RMTag,
  RMStepper, RMAppBar, RMScreen, RMSectionHead, RM_BTN_RESET,
  RM_PRODUCTS, RM_TIERS, RM_IMG, rmTotals, rmMoney, rmPrice
} = window;

const B = RM_C;

function RMBeforeAfter({ before, after, height = 244 }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(52);
  const [drag, setDrag] = useState(false);
  const move = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(98, Math.max(2, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <div
      ref={ref}
      onPointerDown={(e) => { setDrag(true); move(e.clientX); }}
      onPointerMove={(e) => { if (drag) move(e.clientX); }}
      onPointerUp={() => setDrag(false)}
      onPointerLeave={() => setDrag(false)}
      style={{
        position: "relative", height, borderRadius: 14, overflow: "hidden",
        background: B.sand, touchAction: "pan-y", cursor: "ew-resize", userSelect: "none"
      }}
    >
      <img src={after} alt="Designed room" draggable="false" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="Before" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.72)" }} />
      </div>
      <div style={{ position: "absolute", left: 10, top: 10, background: "rgba(26,24,21,0.62)", color: "#F7F3EC", fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.14em", padding: "3px 6px", borderRadius: 3 }}>BEFORE</div>
      <div style={{ position: "absolute", right: 10, top: 10, background: "rgba(247,243,236,0.92)", color: B.ink, fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.14em", padding: "3px 6px", borderRadius: 3 }}>AFTER</div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 1.5, background: "rgba(251,247,240,0.95)", transform: "translateX(-50%)" }}></div>
      <div style={{
        position: "absolute", left: `${pos}%`, top: "50%", transform: "translate(-50%,-50%)",
        width: 34, height: 34, borderRadius: 100, background: "#FBF7F0", border: "1px solid rgba(26,24,21,0.12)",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 1,
        boxShadow: "0 2px 10px rgba(26,24,21,0.18)"
      }}>
        <RIcon name="back" size={11} color={B.ink} />
        <RIcon name="chevron" size={11} color={B.ink} />
      </div>
      <div style={{ position: "absolute", left: 10, bottom: 9, fontFamily: RM_F.sans, fontSize: 9, color: "rgba(251,247,240,0.9)", textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>Drag to compare</div>
    </div>
  );
}

function ScreenB1({ go }) {
  return (
    <RMScreen footer={
      <div style={{ padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line }}>
        <RMButton onClick={() => go("B2")}>Use this photo</RMButton>
      </div>
    }>
      <RMAppBar title="New design" sub="Photo design" onBack={() => go("A2")} />
      <div style={{ padding: "4px 20px 0" }}>
        <RMH1 style={{ fontSize: 25 }}>Start with one photo</RMH1>
        <p style={{ margin: "8px 0 0", fontFamily: RM_F.sans, fontSize: 12.5, lineHeight: 1.55, color: B.sub }}>
          Stand at the doorway and fit the whole room in frame. We read the space, the light and what stays.
        </p>

        <div style={{ position: "relative", marginTop: 16, height: 296, borderRadius: 16, overflow: "hidden", background: B.sand }}>
          <img src={RM_IMG.before} alt="Camera preview of a living room" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 14, border: "1px solid rgba(251,247,240,0.5)", borderRadius: 8 }}></div>
          {[["left", "top"], ["right", "top"], ["left", "bottom"], ["right", "bottom"]].map(([a, c]) => (
            <div key={a + c} style={{ position: "absolute", [a]: 14, [c]: 14, width: 20, height: 20, borderLeft: a === "left" ? "2px solid #FBF7F0" : "none", borderRight: a === "right" ? "2px solid #FBF7F0" : "none", borderTop: c === "top" ? "2px solid #FBF7F0" : "none", borderBottom: c === "bottom" ? "2px solid #FBF7F0" : "none" }}></div>
          ))}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 76, height: 76, border: "1px solid rgba(251,247,240,0.55)", borderRadius: 100 }}></div>
          <div style={{
            position: "absolute", left: 14, bottom: 14, display: "flex", alignItems: "center", gap: 6,
            background: "rgba(26,24,21,0.62)", borderRadius: 100, padding: "6px 10px", backdropFilter: "blur(6px)"
          }}>
            <div style={{ width: 6, height: 6, borderRadius: 100, background: "#C7B07A" }}></div>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: "#F7F3EC" }}>Center the room · daylight · keep 8 ft back</span>
          </div>
          <div style={{
            position: "absolute", right: 12, top: 12, width: 40, height: 40, borderRadius: 8, overflow: "hidden",
            border: "1.5px solid #FBF7F0"
          }}>
            <img src={RM_IMG.after} alt="Last photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 12 }}>
          {[
            { icon: "camera", t: "Shoot or upload", s: "JPG, HEIC, RAW" },
            { icon: "ruler", t: "No tape needed", s: "We estimate size" },
            { icon: "shield", t: "Private by default", s: "Photos stay yours" }
          ].map((g) => (
            <div key={g.t} style={{ border: "1px solid " + B.line, borderRadius: 10, padding: "9px 8px", background: "rgba(255,255,255,0.55)" }}>
              <RIcon name={g.icon} size={14} color={B.brass} />
              <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 600, marginTop: 6 }}>{g.t}</div>
              <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: B.sub, marginTop: 2 }}>{g.s}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <RMButton variant="ghost" onClick={() => go("B2")}>
            <RIcon name="upload" size={15} color={B.ink} />
            Upload from library
          </RMButton>
          <RMButton variant="quiet" onClick={() => go("B7")}>
            <RIcon name="plan" size={15} color={B.ink} />
            Upload a floor plan instead
          </RMButton>
        </div>
      </div>
    </RMScreen>
  );
}

const RM_STYLES = [
  { name: "Modern", img: RM_IMG.after },
  { name: "Mid-Century", img: RM_IMG.dining },
  { name: "Scandinavian", img: RM_IMG.bedroom },
  { name: "Coastal", img: RM_IMG.coastal },
  { name: "Japandi", img: RM_IMG.bath },
  { name: "Warm Minimal", img: RM_IMG.kitchen }
];

function RMSwitch({ on, onChange }) {
  return (
    <button type="button" onClick={() => onChange(!on)} style={{
      width: 40, height: 24, borderRadius: 100, border: 0, padding: 2, cursor: "pointer",
      background: on ? B.wine : "#D8D0C3", display: "flex", justifyContent: on ? "flex-end" : "flex-start",
      transition: "background .18s ease", flex: "none"
    }} aria-pressed={on}>
      <span style={{ width: 20, height: 20, borderRadius: 100, background: "#FBF7F0", display: "block" }}></span>
    </button>
  );
}

function ScreenB2({ go, state, setState }) {
  const rooms = ["Living room", "Bedroom", "Dining", "Kitchen", "Bath", "Home office", "Whole home"];
  const [keep, setKeep] = useState(true);
  const [install, setInstall] = useState(true);
  return (
    <RMScreen footer={
      <div style={{ padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line }}>
        <RMButton onClick={() => go("B3")}>Generate design · 1 credit</RMButton>
        <div style={{ textAlign: "center", fontFamily: RM_F.sans, fontSize: 10.5, color: B.sub, marginTop: 8 }}>
          {state.credits} free designs left this month · no card required
        </div>
      </div>
    }>
      <RMAppBar title="Space & style" sub="Step 1 of 3" onBack={() => go("B1")} />
      <div style={{ padding: "2px 20px 8px" }}>
        <RMH1 style={{ fontSize: 25 }}>Tell us about the room</RMH1>

        <RMLabel style={{ marginTop: 20 }}>Room type</RMLabel>
        <div style={{ display: "flex", gap: 7, overflowX: "auto", margin: "9px -20px 0", padding: "0 20px 2px" }} className="rm-scroll-x">
          {rooms.map((r, i) => (
            <RMChip key={r} active={state.room === r} onClick={() => setState({ room: r })}>{r}</RMChip>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 22 }}>
          <RMLabel>Style</RMLabel>
          <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>Illustrative sample data</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginTop: 9 }}>
          {RM_STYLES.map((s) => {
            const on = state.style === s.name;
            return (
              <button key={s.name} type="button" onClick={() => setState({ style: s.name })} style={{
                position: "relative", height: 84, borderRadius: 10, overflow: "hidden", padding: 0,
                border: on ? "2px solid " + B.wine : "1px solid " + B.line, cursor: "pointer", background: B.sand
              }}>
                <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0) 40%, rgba(20,16,12,0.74) 100%)" }}></div>
                <div style={{ position: "absolute", left: 7, right: 5, bottom: 6, textAlign: "left", fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600, color: "#FBF7F0", lineHeight: 1.15 }}>{s.name}</div>
                {on && (
                  <div style={{ position: "absolute", right: 5, top: 5, width: 16, height: 16, borderRadius: 100, background: B.wine, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <RIcon name="check" size={9} color="#FBF7F0" sw={2.4} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <RMLabel style={{ marginTop: 22 }}>Budget</RMLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 9 }}>
          {RM_TIERS.map((t, i) => {
            const on = state.tier === i;
            const total = rmTotals(i).total;
            return (
              <button key={t.key} type="button" onClick={() => setState({ tier: i })} style={{
                display: "flex", alignItems: "center", gap: 10, textAlign: "left", cursor: "pointer",
                padding: "10px 12px", borderRadius: 10, background: on ? "#FBF8F2" : "transparent",
                border: "1px solid " + (on ? B.wine : B.line)
              }}>
                <span style={{
                  width: 15, height: 15, borderRadius: 100, border: "1px solid " + (on ? B.wine : "#C9C0B2"),
                  display: "flex", alignItems: "center", justifyContent: "center", flex: "none"
                }}>
                  {on && <span style={{ width: 7, height: 7, borderRadius: 100, background: B.wine }}></span>}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontFamily: RM_F.serif, fontSize: 14, color: B.ink }}>{t.label}</span>
                  <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 10, color: B.sub, marginTop: 1 }}>{t.note}</span>
                </span>
                <span style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{rmMoney(total)}</span>
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 18, borderTop: "1px solid " + B.line }}>
          {[
            { label: "Keep my existing furniture", sub: "We design around pieces you own", on: keep, set: setKeep },
            { label: "Include installation", sub: "Two-person crew, room of choice", on: install, set: setInstall }
          ].map((row, i) => (
            <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderBottom: "1px solid " + B.line }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: RM_F.sans, fontSize: 12.5, fontWeight: 500 }}>{row.label}</div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub, marginTop: 2 }}>{row.sub}</div>
              </div>
              <RMSwitch on={row.on} onChange={row.set} />
            </div>
          ))}
        </div>
      </div>
    </RMScreen>
  );
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
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, []);
  return (
    <RMScreen>
      <div style={{ padding: "58px 22px 0", display: "flex", flexDirection: "column", height: "100%" }}>
        <RMLabel style={{ color: B.brass }}>Generating design</RMLabel>
        <RMH1 style={{ fontSize: 26, marginTop: 8 }}>Building a room<br />you can actually buy</RMH1>

        <div style={{ position: "relative", marginTop: 20, height: 226, borderRadius: 14, overflow: "hidden" }}>
          <img src={RM_IMG.before} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(2.5px) saturate(0.85) brightness(0.86)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,24,21,0.25), rgba(26,24,21,0.05))" }}></div>
          <div className="rm-scan" style={{ position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(90deg, rgba(176,138,84,0), #D8BE8E, rgba(176,138,84,0))" }}></div>
          <div style={{ position: "absolute", left: 12, bottom: 12, display: "flex", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="rm-dot" style={{ animationDelay: i * 0.22 + "s", width: 5, height: 5, borderRadius: 100, background: "#F0E3CB" }}></span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map(([t, s], i) => {
            const done = i < step;
            const active = i === step;
            return (
              <div key={t} style={{ display: "flex", gap: 11, paddingBottom: 15 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 18, flex: "none" }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 100, flex: "none",
                    border: "1px solid " + (done ? B.sage : active ? B.wine : "#CFC6B8"),
                    background: done ? B.sage : active ? "rgba(110,31,46,0.08)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {done ? <RIcon name="check" size={10} color="#FBF7F0" sw={2.6} /> :
                      active ? <span className="rm-pulse" style={{ width: 5, height: 5, borderRadius: 100, background: B.wine }}></span> : null}
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 1, flex: 1, background: B.line, marginTop: 4 }}></div>}
                </div>
                <div style={{ paddingTop: 1 }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 12.5, fontWeight: done || active ? 600 : 500, color: done || active ? B.ink : "#A39A8D" }}>{t}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: B.sub, marginTop: 2 }}>{s}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "auto", paddingBottom: 30 }}>
          <div style={{ height: 2, background: B.line, borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: `${Math.min(100, (step / 4) * 100)}%`, height: "100%", background: B.wine, transition: "width .5s ease" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>Usually takes 20–30 seconds</span>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub, fontVariantNumeric: "tabular-nums" }}>{Math.min(step, 4) * 25}%</span>
          </div>
        </div>
      </div>
    </RMScreen>
  );
}

function RMTierTabs({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 3, background: "#EDE5D8", borderRadius: 9, padding: 3 }}>
      {RM_TIERS.map((t, i) => {
        const on = value === i;
        return (
          <button key={t.key} type="button" onClick={() => onChange(i)} style={{
            flex: 1, height: 31, borderRadius: 7, border: 0, cursor: "pointer",
            background: on ? "#FBF8F2" : "transparent",
            color: on ? B.ink : "#847B6D", fontFamily: RM_F.sans, fontSize: 11,
            fontWeight: on ? 600 : 500, boxShadow: on ? "0 1px 2px rgba(26,24,21,0.08)" : "none"
          }}>{t.label}</button>
        );
      })}
    </div>
  );
}

function ScreenB4({ go, state, setState }) {
  const tier = state.tier || 1;
  const t = rmTotals(tier);
  const items = RM_PRODUCTS.slice(0, 6);
  return (
    <RMScreen footer={
      <div style={{ padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line, display: "flex", flexDirection: "column", gap: 8 }}>
        <RMButton onClick={() => go("B5")}>Shop this look · {rmMoney(t.total)}</RMButton>
        <div style={{ display: "flex", gap: 8 }}>
          <RMButton variant="ghost" style={{ height: 40, fontSize: 12 }} onClick={() => setState({ saved: !state.saved })}>
            <RIcon name="heart" size={14} color={state.saved ? B.wine : B.ink} />
            {state.saved ? "Saved to ideabooks" : "Save look"}
          </RMButton>
          <RMButton variant="ghost" style={{ height: 40, fontSize: 12 }} onClick={() => go("B3")}>Regenerate</RMButton>
        </div>
      </div>
    }>
      <RMAppBar
        title="Design result"
        sub="Warm Modern · Living room"
        onBack={() => go("A2")}
        right={<span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>Illustrative sample data</span>}
      />
      <div style={{ padding: "2px 20px 18px" }}>
        <RMBeforeAfter before={RM_IMG.before} after={RM_IMG.after} />

        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 16 }}>
          <div>
            <RMH1 style={{ fontSize: 24 }}>Warm Modern<br />Living Room</RMH1>
            <div style={{ fontFamily: RM_F.sans, fontSize: 11, color: B.sub, marginTop: 6 }}>Brooklyn, NY · 8 items · 420 sq ft</div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 5, marginTop: 4 }}>
            <RMTag tone="sage">Warm Modern</RMTag>
            <RMTag tone="brass">Install</RMTag>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMTierTabs value={tier} onChange={(i) => setState({ tier: i })} />
        </div>

        <div style={{ marginTop: 14, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <RMLabel>Total for the room</RMLabel>
            <div style={{ fontFamily: RM_F.serif, fontSize: 34, letterSpacing: "-0.02em", marginTop: 2, fontVariantNumeric: "tabular-nums" }}>{rmMoney(t.total)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>8 items · delivered &</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>installed in 3–5 weeks</div>
          </div>
        </div>

        <div style={{ marginTop: 12, border: "1px solid " + B.line, borderRadius: 10, padding: "10px 12px", background: "rgba(255,255,255,0.5)" }}>
          {[["Furniture", t.furniture], ["Delivery & install", t.delivery], ["Estimated tax (NY 8.875%)", t.tax]].map(([k, v], i) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: i === 2 ? "6px 0 0" : "0 0 6px", borderTop: i === 2 ? "1px solid " + B.line : "none", marginTop: i === 2 ? 4 : 0 }}>
              <span style={{ fontFamily: RM_F.sans, fontSize: 11, color: i === 2 ? B.sub : B.ink }}>{k}</span>
              <span style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{v === 0 ? "Included" : rmMoney(v)}</span>
            </div>
          ))}
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: "#9A9186", marginTop: 8 }}>Prices include US duties. Delivered to New York, NY.</div>
        </div>

        <button type="button" onClick={() => go("F2", { set: "set-living", monthly: true })} style={{
          marginTop: 14, width: "100%", border: "1px dashed rgba(176,138,84,0.55)", borderRadius: 10,
          background: "rgba(176,138,84,0.08)", padding: "11px 12px", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10, textAlign: "left"
        }}>
          <RIcon name="box" size={16} color={B.brass} />
          <span style={{ flex: 1 }}>
            <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600 }}>Staging this property? Rent the look</span>
            <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 2 }}>
              Same 8 pieces · from $1,180/mo · 3-month min, install included
            </span>
          </span>
          <RIcon name="chevron" size={12} color="#A69C8D" />
        </button>

        <div style={{ marginTop: 22 }}>
          <RMSectionHead title="What's included" action="See all 8" onAction={() => go("B5")} />
          <div style={{ marginTop: 8 }}>
            {items.map((p, i) => (
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid " + B.line }}>
                <div style={{ width: 42, height: 42, borderRadius: 7, overflow: "hidden", background: "#EFE9DE", flex: "none" }}>
                  <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 1 }}>{p.sub}</div>
                </div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{rmMoney(rmPrice(p, tier))}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center", background: "rgba(176,138,84,0.09)", borderRadius: 10, padding: "10px 12px" }}>
          <RIcon name="shield" size={16} color={B.brass} />
          <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, lineHeight: 1.4, color: "#6B5B3E" }}>
            Every piece is checked against US safety standards. Exact fabric and finish samples ship free before production.
          </div>
        </div>
      </div>
    </RMScreen>
  );
}

function ScreenB5({ go, state, setState }) {
  const tier = state.tier || 1;
  const t = rmTotals(tier);
  const pinPos = [
    { left: "26%", top: "55%" }, { left: "55%", top: "70%" }, { left: "16%", top: "82%" },
    { left: "83%", top: "42%" }, { left: "72%", top: "62%" }, { left: "12%", top: "24%" },
    { left: "44%", top: "20%" }, { left: "88%", top: "20%" }
  ];
  return (
    <RMScreen footer={
      <div style={{ padding: "10px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <RIcon name="truck" size={13} color={B.sage} />
          <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub }}>Delivery in 3–5 weeks · Installed by our 2-person crew</span>
        </div>
        <RMButton onClick={() => { setState({ cart: { sofa: 1, table: 1, rug: 1, lamp: 1, chair: 1, sideboard: 1, art: 1, curtain: 1 } }); go("C3"); }}>
          Add all 8 items · {rmMoney(t.total)}
        </RMButton>
      </div>
    }>
      <RMAppBar
        title="Shop the Look"
        sub="Warm Modern Living Room"
        onBack={() => go("B4")}
        right={<button type="button" onClick={() => setState({ saved: !state.saved })} style={{ ...RM_BTN_RESET, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RIcon name="heart" size={17} color={state.saved ? B.wine : B.ink} />
        </button>}
      />
      <div style={{ padding: "0 20px" }}>
        <div style={{ position: "relative", height: 230, borderRadius: 14, overflow: "hidden", background: B.sand }}>
          <img src={RM_IMG.after} alt="Designed living room" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          {pinPos.map((p, i) => (
            <div key={i} style={{
              position: "absolute", left: p.left, top: p.top, transform: "translate(-50%,-50%)",
              width: 21, height: 21, borderRadius: 100, background: i === 0 ? B.wine : "rgba(251,247,240,0.94)",
              color: i === 0 ? "#FBF7F0" : B.ink, border: "1px solid " + (i === 0 ? B.wine : "rgba(26,24,21,0.15)"),
              fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 1px 5px rgba(26,24,21,0.22)"
            }}>{i + 1}</div>
          ))}
          <div style={{ position: "absolute", left: 10, bottom: 10, background: "rgba(26,24,21,0.6)", borderRadius: 100, padding: "4px 9px", fontFamily: RM_F.sans, fontSize: 9, color: "#F7F3EC" }}>
            Tap a number to see the piece
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 0 4px" }}>
          <div>
            <RMLabel>{RM_TIERS[tier].label} selection · 8 items</RMLabel>
            <div style={{ fontFamily: RM_F.serif, fontSize: 22, marginTop: 3, fontVariantNumeric: "tabular-nums" }}>{rmMoney(t.total)}</div>
          </div>
          <RMTextLink onClick={() => go("B6")} style={{ fontSize: 11 }}>Swap an item</RMTextLink>
        </div>

        <div>
          {RM_PRODUCTS.map((p, i) => {
            const qty = state.cart[p.id] || 0;
            return (
              <div key={p.id} style={{ display: "flex", gap: 10, padding: "11px 0", borderBottom: "1px solid " + B.line }}>
                <div style={{ position: "relative", width: 62, height: 62, borderRadius: 9, overflow: "hidden", background: "#EFE9DE", flex: "none" }}>
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{
                    position: "absolute", left: 4, top: 4, width: 15, height: 15, borderRadius: 100,
                    background: "rgba(26,24,21,0.78)", color: "#F7F3EC", fontSize: 8.5, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>{i + 1}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 2 }}>{p.sub}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
                    <span style={{ fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{rmMoney(rmPrice(p, tier))}</span>
                    <span style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: p.badge === "In stock" ? "#4E5C48" : "#7A5A2C" }}>{p.badge}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", flex: "none" }}>
                  <RMStepper compact value={qty} onChange={(v) => setState({ cart: { ...state.cart, [p.id]: v } })} />
                  <button type="button" onClick={() => setState({ cart: { ...state.cart, [p.id]: Math.max(1, qty) } })} style={{
                    border: 0, background: qty ? "rgba(124,139,118,0.16)" : "transparent", color: qty ? "#4E5C48" : B.wine,
                    fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600, cursor: "pointer", padding: "2px 4px"
                  }}>{qty ? "Added" : "Add"}</button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: "#9A9186", lineHeight: 1.5, margin: "12px 0 16px" }}>
          Illustrative sample data. Prices include duties; final tax calculated at checkout.
        </div>
      </div>
    </RMScreen>
  );
}

const RM_SWAP_OPTIONS = [
  { id: "sofa", name: "Marlow Sofa", sub: "Bouclé · Oat", delta: 0, img: RM_IMG.sofa, note: "Current pick" },
  { id: "sage", name: "Alder Sofa", sub: "Linen · Sage", delta: 180, img: RM_IMG.sofaSage, note: "Ships 1 week sooner" },
  { id: "leather", name: "Rowan Sofa", sub: "Leather · Cognac", delta: -95, img: RM_IMG.sofaLeather, note: "Pets & kids" }
];

function ScreenB6({ go, state, setState }) {
  const [pick, setPick] = useState(0);
  const base = rmTotals(state.tier || 1).total;
  return (
    <RMScreen footer={
      <div style={{ padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line }}>
        <RMButton onClick={() => go("B5")}>
          Update design · {rmMoney(base + RM_SWAP_OPTIONS[pick].delta)}
        </RMButton>
      </div>
    }>
      <RMAppBar title="Swap item" sub="Living room · piece 1 of 8" onBack={() => go("B5")} />
      <div style={{ padding: "0 20px 16px" }}>
        <div style={{ position: "relative", height: 226, borderRadius: 14, overflow: "hidden", background: B.sand }}>
          <img src={RM_IMG.after} alt="Living room with selected sofa" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(26,24,21,0.18)" }}></div>
          <div style={{
            position: "absolute", left: "18%", top: "48%", width: "44%", height: "36%",
            border: "1.5px solid #F0DFC4", borderRadius: 6, boxShadow: "0 0 0 200px rgba(26,24,21,0.16)"
          }}></div>
          <div style={{
            position: "absolute", left: "18%", top: "84%", transform: "translateY(2px)",
            background: "#FBF7F0", borderRadius: 6, padding: "6px 9px", boxShadow: "0 2px 8px rgba(26,24,21,0.2)"
          }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.1em", color: B.sub, textTransform: "uppercase" }}>Selected</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>{RM_SWAP_OPTIONS[pick].name} · {RM_SWAP_OPTIONS[pick].sub}</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginTop: 12 }}>
          {["Replace similar", "Remove", "Add new"].map((a, i) => (
            <button key={a} type="button" onClick={() => go("C1")} style={{
              height: 34, borderRadius: 8, border: "1px solid " + B.line, background: i === 0 ? "#FBF8F2" : "transparent",
              fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 500, cursor: "pointer", color: B.ink
            }}>{a}</button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 22 }}>
          <RMSectionHead title="Similar sofas" />
          <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>3 of 42</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
          {RM_SWAP_OPTIONS.map((o, i) => {
            const on = pick === i;
            return (
              <button key={o.id} type="button" onClick={() => setPick(i)} style={{
                display: "flex", alignItems: "center", gap: 11, padding: 9, textAlign: "left", cursor: "pointer",
                borderRadius: 11, background: on ? "#FBF8F2" : "#FFFDF9",
                border: "1px solid " + (on ? B.wine : B.line)
              }}>
                <div style={{ width: 64, height: 56, borderRadius: 7, overflow: "hidden", background: "#EFE9DE", flex: "none" }}>
                  <img src={o.img} alt={o.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 }}>{o.name}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: B.sub, marginTop: 2 }}>{o.sub} · {o.note}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, marginTop: 3, color: o.delta === 0 ? B.sub : o.delta > 0 ? "#7A5A2C" : "#4E5C48" }}>
                    {o.delta === 0 ? "Included" : (o.delta > 0 ? "+" : "−") + rmMoney(Math.abs(o.delta)) + " vs current"}
                  </div>
                </div>
                <span style={{
                  width: 16, height: 16, borderRadius: 100, border: "1px solid " + (on ? B.wine : "#C9C0B2"),
                  display: "flex", alignItems: "center", justifyContent: "center", flex: "none"
                }}>{on && <span style={{ width: 8, height: 8, borderRadius: 100, background: B.wine }}></span>}</span>
              </button>
            );
          })}
        </div>
        <p style={{ fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: B.sub, marginTop: 14 }}>
          Swapping keeps the layout, palette and price balance intact. Lead times update with each pick.
        </p>
      </div>
    </RMScreen>
  );
}

function ScreenB7({ go, state, setState }) {
  const rooms = [
    { name: "Living", sqft: 268, share: 100 },
    { name: "Kitchen", sqft: 142, share: 74 },
    { name: "Primary bed", sqft: 186, share: 88 },
    { name: "Bed 2", sqft: 132, share: 52 },
    { name: "Bath", sqft: 68, share: 34 }
  ];
  return (
    <RMScreen footer={
      <div style={{ padding: "12px 20px 34px", background: B.paper, borderTop: "1px solid " + B.line }}>
        <RMButton onClick={() => go("B3")}>Generate full-home design · 1 credit</RMButton>
        <div style={{ textAlign: "center", fontFamily: RM_F.sans, fontSize: 10, color: B.sub, marginTop: 7 }}>
          3 rooms included · add rooms anytime · {state.credits} credits left
        </div>
      </div>
    }>
      <RMAppBar title="Floor plan" sub="Whole-home design" onBack={() => go("A2")} right={<RMTag tone="grey">2D · 3D soon</RMTag>} />
      <div style={{ padding: "0 20px 14px" }}>
        <RMH1 style={{ fontSize: 25 }}>Your apartment,<br />read by the room</RMH1>
        <div style={{ position: "relative", marginTop: 14, height: 190, borderRadius: 12, overflow: "hidden", border: "1px solid " + B.line }}>
          <img src={RM_IMG.plan} alt="Uploaded floor plan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", left: 10, top: 10, background: "rgba(251,247,240,0.92)", borderRadius: 4, padding: "3px 7px", fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.08em", color: B.ink }}>PLAN_2BR_1180SQFT.PDF</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 20 }}>
          <RMLabel>Detected · 5 rooms · 796 sq ft</RMLabel>
          <RMTextLink onClick={() => go("B1")} style={{ fontSize: 10.5 }}>Re-upload</RMTextLink>
        </div>
        <div style={{ marginTop: 8, border: "1px solid " + B.line, borderRadius: 10, overflow: "hidden", background: "rgba(255,255,255,0.55)" }}>
          {rooms.map((r, i) => (
            <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderTop: i === 0 ? "none" : "1px solid " + B.line }}>
              <span style={{ width: 15, height: 15, borderRadius: 3, border: "1px solid " + (i === 0 ? B.wine : "#C9C0B2"), background: i === 0 ? "rgba(110,31,46,0.12)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {i === 0 && <RIcon name="check" size={9} color={B.wine} sw={2.6} />}
              </span>
              <span style={{ fontFamily: RM_F.sans, fontSize: 11.5, flex: 1 }}>{r.name}</span>
              <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub, fontVariantNumeric: "tabular-nums" }}>{r.sqft} sq ft</span>
              <span style={{ width: 54, height: 3, background: B.line, borderRadius: 2 }}>
                <span style={{ display: "block", width: r.share + "%", height: "100%", background: B.brass, borderRadius: 2 }}></span>
              </span>
            </div>
          ))}
        </div>

        <RMLabel style={{ marginTop: 20 }}>Whole-home style</RMLabel>
        <div style={{ display: "flex", gap: 7, marginTop: 9, overflowX: "auto", margin: "9px -20px 0", padding: "0 20px" }} className="rm-scroll-x">
          {["Warm Minimal", "Modern", "Japandi", "Coastal"].map((s) => (
            <button key={s} type="button" onClick={() => setState({ style: s })} style={{
              position: "relative", width: 92, height: 68, borderRadius: 9, overflow: "hidden", padding: 0, flex: "none",
              border: state.style === s ? "2px solid " + B.wine : "1px solid " + B.line, cursor: "pointer", background: B.sand
            }}>
              <img src={s === "Warm Minimal" ? RM_IMG.kitchen : s === "Modern" ? RM_IMG.after : s === "Japandi" ? RM_IMG.bedroom : RM_IMG.coastal} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span style={{ position: "absolute", left: 5, bottom: 4, fontFamily: RM_F.sans, fontSize: 8.5, fontWeight: 600, color: "#FBF7F0", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>{s}</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <RMLabel>Whole-home budget</RMLabel>
          <div style={{ marginTop: 9 }}><RMTierTabs value={state.tier || 1} onChange={(i) => setState({ tier: i })} /></div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 10 }}>
            <span style={{ fontFamily: RM_F.serif, fontSize: 24, fontVariantNumeric: "tabular-nums" }}>{rmMoney(rmTotals(state.tier || 1).total * 2.4)}</span>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: B.sub }}>5 rooms · install included</span>
          </div>
          <div style={{ display: "flex", gap: 2, marginTop: 8, height: 6 }}>
            {[38, 22, 18, 14, 8].map((w, i) => (
              <span key={i} style={{ width: w + "%", background: [B.wine, "#8C4A53", B.brass, B.sage, "#C6B79E"][i], borderRadius: 2 }}></span>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9, color: B.sub }}>Living 38%</span>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9, color: B.sub }}>Bath 8%</span>
          </div>
        </div>
      </div>
    </RMScreen>
  );
}

Object.assign(window, { SCREENS_B: { B1: ScreenB1, B2: ScreenB2, B3: ScreenB3, B4: ScreenB4, B5: ScreenB5, B6: ScreenB6, B7: ScreenB7 }, RMTierTabs, RMBeforeAfter });
