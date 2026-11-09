/* Group A — Entry */
const { useState } = React;
const {
  RM_C, RM_F, RIcon, RMButton, RMTextLink, RMH1, RMLabel, RMChip, RMTag,
  RMAppBar, RMScreen, RMSectionHead, RM_BTN_RESET, RM_IMG, rmMoney
} = window;

const RM_IMG_A = window.RM_IMG;

const RM_CASES = {
  waldorf: {
    photos: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => "assets/case/waldorf-" + n + ".jpg")
  }
};

function ScreenA1({ go, state }) {
  return (
    <RMScreen>
      <div style={{ position: "relative", height: 360, background: RM_C.ink }}>
        <img src={RM_IMG_A.after} alt="A warm modern living room" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.05) 38%, rgba(20,16,12,0.28) 100%)" }} />
        <div style={{ position: "absolute", top: 62, left: 22, right: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <img src="assets/rm-logo-mark-white.png" alt="RARITAG" style={{ height: 36, width: 36, objectFit: "contain", display: "block", flex: "none", opacity: 0.94 }} />
            <div style={{ fontFamily: RM_F.serif, fontSize: 22, color: "#FBF7F0", letterSpacing: "-0.02em" }}>RoomMade</div>
          </div>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, letterSpacing: "0.18em", color: "rgba(251,247,240,0.72)", textTransform: "uppercase" }}>New York</div>
        </div>
        <div style={{ position: "absolute", left: 22, right: 40, bottom: 22 }}>
          <div style={{ width: 28, height: 1, background: RM_C.brass, marginBottom: 12 }}></div>
          <div style={{ fontFamily: RM_F.serif, fontSize: 25, lineHeight: 1.15, color: "#FBF7F0", letterSpacing: "-0.01em" }}>
            The room you want,<br />delivered and installed.
          </div>
        </div>
      </div>

      <div style={{ padding: "22px 22px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RMTag tone="brass">3 free AI designs</RMTag>
          <span style={{ fontFamily: RM_F.sans, fontSize: 11.5, color: RM_C.sub }}>for new members</span>
        </div>

        <div>
          <RMH1 style={{ fontSize: 28 }}>Design your room.<br />Buy the whole look.</RMH1>
          <p style={{ margin: "10px 0 0", fontFamily: RM_F.sans, fontSize: 13.5, lineHeight: 1.55, color: RM_C.sub, textWrap: "pretty" }}>
            Snap a photo and get a real design in 30 seconds — every piece priced, in stock or made to order, and installed by our crew.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 2 }}>
          <RMButton variant="dark" onClick={() => go("A2")}>
            <span style={{ fontFamily: RM_F.sans }}>Continue with Apple</span>
          </RMButton>
          <RMButton variant="ghost" onClick={() => go("A2")}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="15" height="15" viewBox="0 0 24 24"><path d="M21 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.1c-.2 1.2-.9 2.3-1.9 3v2.5h3c1.8-1.6 2.8-4 2.8-7.2z" fill="#4285F4" /><path d="M12 21.5c2.5 0 4.6-.8 6.2-2.2l-3-2.5c-.8.6-1.9.9-3.2.9-2.4 0-4.4-1.6-5.2-3.8H3.7v2.5C5.2 19.5 8.3 21.5 12 21.5z" fill="#34A853" /><path d="M6.8 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.6H3.7C3 9 2.5 10.4 2.5 12s.5 3 1.2 4.4l3.1-2.5z" fill="#FBBC05" /><path d="M12 6.4c1.3 0 2.5.5 3.5 1.4l2.7-2.7C16.6 3.5 14.5 2.5 12 2.5 8.3 2.5 5.2 4.6 3.7 7.6l3.1 2.5c.8-2.2 2.8-3.7 5.2-3.7z" fill="#EA4335" /></svg>
              Continue with Google
            </span>
          </RMButton>
          <RMButton variant="quiet" onClick={() => go("A2")}>Continue with email</RMButton>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <RMTextLink onClick={() => go("C1")} style={{ fontSize: 12 }}>Browse inspiration first</RMTextLink>
          <p style={{ margin: 0, fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "#9A9186", textAlign: "center", maxWidth: 290 }}>
            By continuing you agree to our Terms and Privacy Policy. California residents may exercise CCPA rights at any time.
          </p>
        </div>
      </div>
    </RMScreen>
  );
}

function ScreenA2({ go, state }) {
  const [viewer, setViewer] = useState(null); // { kind: "photos", i } | { kind: "video" }
  const [muted, setMuted] = useState(true);

  const creditPill = (
    <button type="button" onClick={() => go("D6")} style={{
      display: "flex", alignItems: "center", gap: 6, height: 30, padding: "0 11px",
      borderRadius: 100, border: "1px solid " + RM_C.line, background: "rgba(255,255,255,0.6)", cursor: "pointer"
    }}>
      <RIcon name="spark" size={13} color={RM_C.brass} />
      <span style={{ fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, color: RM_C.ink }}>{state.credits} credits</span>
    </button>
  );

  const hintCard = (title, sub, img, onClick, tall) => (
    <button type="button" onClick={onClick} style={{
      position: "relative", height: tall ? 196 : 132, borderRadius: 14, overflow: "hidden",
      border: 0, padding: 0, cursor: "pointer", background: RM_C.sand, textAlign: "left", width: "100%"
    }}>
      <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: tall ? "linear-gradient(180deg, rgba(20,16,12,0.05) 30%, rgba(20,16,12,0.72) 100%)" : "linear-gradient(180deg, rgba(20,16,12,0.02) 30%, rgba(20,16,12,0.66) 100%)" }} />
      <div style={{ position: "absolute", left: 14, right: 14, bottom: 12 }}>
        <div style={{ fontFamily: RM_F.serif, fontSize: tall ? 20 : 15, color: "#FBF7F0", letterSpacing: "-0.01em" }}>{title}</div>
        <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, lineHeight: 1.35, color: "rgba(251,247,240,0.82)", marginTop: 3 }}>{sub}</div>
      </div>
    </button>
  );

  const inspiration = [
    { img: RM_IMG_A.kitchen, room: "Kitchen", style: "Warm Minimal" },
    { img: RM_IMG_A.bedroom, room: "Bedroom", style: "Japandi" },
    { img: RM_IMG_A.dining, room: "Dining", style: "Mid-Century" },
    { img: RM_IMG_A.bath, room: "Bath", style: "Soft Coastal" }
  ];

  const caseCard = (opt) => (
    <button type="button" key={opt.key} onClick={opt.onClick} style={{
      position: "relative", width: "100%", height: 186, borderRadius: 14, overflow: "hidden",
      border: 0, padding: 0, cursor: "pointer", background: RM_C.sand, textAlign: "left", display: "block"
    }}>
      <img src={opt.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.30) 0%, rgba(20,16,12,0.02) 34%, rgba(20,16,12,0.80) 100%)" }} />

      <div style={{ position: "absolute", top: 12, left: 13, right: 13, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.18em", color: "#FBF7F0",
          background: "rgba(20,16,12,0.44)", border: "1px solid rgba(251,247,240,0.28)",
          borderRadius: 100, padding: "3px 7px"
        }}>{opt.badge}</span>
        {opt.media && (
          <span style={{
            display: "flex", alignItems: "center", gap: 4, fontFamily: RM_F.sans, fontSize: 9,
            color: "#FBF7F0", background: "rgba(20,16,12,0.44)", border: "1px solid rgba(251,247,240,0.28)",
            borderRadius: 100, padding: "2px 7px 2px 6px"
          }}>
            {opt.media === "video" ? <RIcon name="chevron" size={9} color="#FBF7F0" /> : <RIcon name="grid" size={9} color="#FBF7F0" />}
            {opt.mediaLabel}
          </span>
        )}
      </div>

      {opt.media === "video" && (
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-56%)",
          width: 46, height: 46, borderRadius: 100, background: "rgba(251,247,240,0.94)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 6px 18px rgba(20,16,12,0.35)"
        }}>
          <div style={{ width: 0, height: 0, borderLeft: "12px solid " + RM_C.ink, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", marginLeft: 2 }} />
        </div>
      )}

      <div style={{ position: "absolute", left: 14, right: 14, bottom: 12 }}>
        <div style={{ fontFamily: RM_F.serif, fontSize: 18.5, color: "#FBF7F0", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{opt.title}</div>
        <div style={{ fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.4, color: "rgba(251,247,240,0.80)", marginTop: 4 }}>{opt.sub}</div>
      </div>
    </button>
  );

  return (
    <RMScreen tab="A2" onNav={go} overlay={viewer && (
      <div style={{
        position: "absolute", inset: 0, zIndex: 40, background: "#0E0B08",
        display: "flex", flexDirection: "column"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "56px 16px 10px", flex: "none" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 13, fontWeight: 600, color: "#FBF7F0" }}>
              {viewer.kind === "video" ? "Carlyle Hotel · renovation" : "Waldorf Astoria · 8-year renovation"}
            </div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 10, color: "rgba(251,247,240,0.6)", marginTop: 2 }}>
              {viewer.kind === "video"
                ? "01:51 · via 设计学长 on RED"
                : String(viewer.i + 1) + " / " + RM_CASES.waldorf.photos.length + " · via 外滩设计酒店 on RED"}
            </div>
          </div>
          <button type="button" onClick={() => setViewer(null)} style={{
            width: 32, height: 32, borderRadius: 100, border: "1px solid rgba(251,247,240,0.3)",
            background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none"
          }} aria-label="Close">
            <RIcon name="close" size={16} color="#FBF7F0" />
          </button>
        </div>

        {viewer.kind === "video" ? (
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 12px" }}>
            <video
              src="assets/video/case-carlyle-web.mp4"
              poster="assets/case/carlyle-poster.jpg"
              controls autoPlay playsInline muted={muted}
              style={{ width: "100%", maxHeight: "100%", borderRadius: 12, background: "#000", display: "block" }}
            />
            <div style={{ display: "flex", gap: 8, marginTop: 12, flex: "none" }}>
              <button type="button" onClick={() => setMuted((m) => !m)} style={{
                height: 34, padding: "0 14px", borderRadius: 100, border: "1px solid rgba(251,247,240,0.3)",
                background: muted ? "rgba(251,247,240,0.12)" : "rgba(251,247,240,0.9)",
                color: muted ? "#FBF7F0" : RM_C.ink, fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, cursor: "pointer"
              }}>{muted ? "Sound on" : "Sound off"}</button>
              <div style={{ flex: 1, fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.5, color: "rgba(251,247,240,0.55)", alignSelf: "center" }}>
                Plays inline · tap to pause
              </div>
            </div>
          </div>
        ) : (
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 12px 8px" }}>
            <div style={{ flex: 1, minHeight: 0, borderRadius: 12, overflow: "hidden", background: "#000" }}>
              <img src={RM_CASES.waldorf.photos[viewer.i]} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 10, flex: "none", overflowX: "auto", paddingBottom: 2 }}>
              {RM_CASES.waldorf.photos.map((p, i) => (
                <button type="button" key={p} onClick={() => setViewer({ kind: "photos", i })} style={{
                  width: 40, height: 40, flex: "none", borderRadius: 7, overflow: "hidden", padding: 0, cursor: "pointer",
                  border: i === viewer.i ? "2px solid #FBF7F0" : "2px solid transparent", background: "none", opacity: i === viewer.i ? 1 : 0.55
                }}>
                  <img src={p} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )}>
      <div style={{ padding: "56px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="assets/rm-logo-mark.png" alt="RARITAG" style={{ height: 42, width: 42, objectFit: "contain", display: "block", flex: "none" }} />
            <div style={{ fontFamily: RM_F.serif, fontSize: 23, letterSpacing: "-0.02em" }}>RoomMade</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button type="button" onClick={() => go("C1")} style={{
              width: 30, height: 30, borderRadius: 100, border: "1px solid " + RM_C.line,
              background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }} aria-label="Search">
              <RIcon name="search" size={15} color={RM_C.ink} />
            </button>
            {creditPill}
          </div>
        </div>

        <div style={{ marginTop: 22, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
          <div>
            <RMLabel>Brooklyn, NY · 10:24 AM</RMLabel>
            <RMH1 style={{ fontSize: 26, marginTop: 7 }}>Good morning, Ava</RMH1>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 18 }}>
          {hintCard("Photo Design", "Snap a photo → shoppable design in 30s", RM_IMG_A.after, () => go("B1"), true)}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {hintCard("Floor Plan", "Whole-home design by room", RM_IMG_A.plan, () => go("B7"))}
            {hintCard("Refresh a Look", "Keep the room, change the pieces", RM_IMG_A.bedroom, () => go("B6"))}
          </div>
        </div>

        <button type="button" onClick={() => go("E1")} style={{
          marginTop: 18, width: "100%", borderRadius: 14, border: 0, background: RM_C.ink,
          padding: "13px 14px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textAlign: "left"
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.18em", color: "rgba(247,243,236,0.5)" }}>ROOMMADE TRADE</div>
            <div style={{ fontFamily: RM_F.serif, fontSize: 16, color: "#FBF7F0", marginTop: 4 }}>Staging a listing?</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.45, color: "rgba(251,247,240,0.62)", marginTop: 3 }}>
              Rent a whole-room set by the month · install & de-stage included, from $620
            </div>
          </div>
          <span style={{ width: 30, height: 30, borderRadius: 100, border: "1px solid rgba(247,243,236,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
            <RIcon name="arrowR" size={13} color="#FBF7F0" />
          </span>
        </button>

        <div style={{ marginTop: 26 }}>
          <RMSectionHead title="Hotel renovations, decoded" action="Inspiration" onAction={() => go("C1")} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
            {caseCard({
              key: "waldorf",
              badge: "NEW YORK · 8 YEARS",
              media: "photos",
              mediaLabel: "8 photos",
              img: "assets/case/waldorf-1.jpg",
              title: "Waldorf Astoria, rebuilt",
              sub: "$6B+ from acquisition to completion · 1,400 rooms cut to 375",
              onClick: () => setViewer({ kind: "photos", i: 0 })
            })}
            {caseCard({
              key: "carlyle",
              badge: "NEW YORK · CARLYLE",
              media: "video",
              mediaLabel: "01:51",
              img: "assets/case/carlyle-cover.jpg",
              title: "The Carlyle, by Ji Yutang",
              sub: "Room-by-room walkthrough of the Upper East Side landmark",
              onClick: () => { setMuted(true); setViewer({ kind: "video" }); }
            })}
          </div>
        </div>

        <div style={{ marginTop: 26 }}>
          <RMSectionHead title="Continue your design" action="All projects" onAction={() => go("D1")} />
          <div style={{
            marginTop: 12, background: RM_C.card, border: "1px solid " + RM_C.line,
            borderRadius: 16, padding: 12, display: "flex", gap: 12, alignItems: "center"
          }}>
            <div style={{ position: "relative", width: 74, height: 74, flex: "none", borderRadius: 10, overflow: "hidden" }}>
              <img src={RM_IMG_A.after} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", left: 0, bottom: 0, background: "rgba(26,24,21,0.78)",
                fontFamily: RM_F.sans, fontSize: 7, letterSpacing: "0.08em", color: "#F7F3EC", padding: "2px 4px"
              }}>AFTER</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: RM_F.sans, fontSize: 13, fontWeight: 600 }}>Warm Modern Living Room</div>
              <div style={{ fontFamily: RM_F.sans, fontSize: 11, color: RM_C.sub, marginTop: 3 }}>8 items · {rmMoney(8340)} with install</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 7 }}>
                <div style={{ height: 3, flex: 1, background: RM_C.line, borderRadius: 2 }}>
                  <div style={{ width: "60%", height: "100%", background: RM_C.brass, borderRadius: 2 }}></div>
                </div>
                <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: RM_C.sub }}>3 of 5</span>
              </div>
            </div>
            <button type="button" onClick={() => go("B4")} style={{
              height: 32, padding: "0 13px", borderRadius: 8, border: "1px solid " + RM_C.ink,
              background: "transparent", fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, cursor: "pointer", flex: "none"
            }}>Resume</button>
          </div>
        </div>

        <div style={{ marginTop: 26 }}>
          <RMSectionHead title="Inspiration for a warm modern home" action="View all" onAction={() => go("C1")} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            {inspiration.map((it) => (
              <button type="button" key={it.room} onClick={() => go("C1")} style={{ ...RM_BTN_RESET, textAlign: "left" }}>
                <div style={{ height: 104, borderRadius: 10, overflow: "hidden", background: RM_C.sand }}>
                  <img src={it.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 11.5, fontWeight: 600, marginTop: 6 }}>{it.room}</div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 10, color: RM_C.sub }}>{it.style}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, padding: "14px 0 18px", borderTop: "1px solid " + RM_C.line, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <RIcon name="truck" size={14} color={RM_C.sage} />
            <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: RM_C.sub }}>Designed in New York · Delivered & installed by our crew</span>
          </div>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, letterSpacing: "0.04em", color: "#9A9186" }}>
            NEW YORK · PHILADELPHIA · CHICAGO · CINCINNATI · CHARLOTTE
          </div>
        </div>
      </div>
    </RMScreen>
  );
}

Object.assign(window, { SCREENS_A: { A1: ScreenA1, A2: ScreenA2 } });
