/* Group E + F — Pro entry & rent */
const { useState } = React;
const {
  RM_C, RM_F, RIcon, RMButton, RMTextLink, RMH1, RMLabel, RMChip, RMTag,
  RM_IMG, RM_SETS, RM_PRO_LISTINGS, RM_RENTAL_TERMS, RM_PRO_ADDONS,
  rmMonthly, rmProTotals, rmMoney,
  PRO, RMProScreen, RMProTabBar, RMProStat, RMStatusChip, RMProSection, RMProButton
} = window;

const rmImg = (k) => RM_IMG[k] || RM_IMG.after;

function ScreenE1({ go }) {
  return (
    <div style={{ height: "100%", overflowY: "auto", background: PRO.ink, color: PRO.paper, fontFamily: RM_F.sans }} className="rm-scroll">
      <div style={{ position: "relative", height: 268 }}>
        <img src={RM_IMG.after} alt="Staged living room" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.72 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,24,21,0.72) 0%, rgba(26,24,21,0.28) 40%, rgba(26,24,21,0.98) 100%)" }} />
        <div style={{ position: "absolute", top: 62, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: RM_F.serif, fontSize: 20, letterSpacing: "-0.02em" }}>RoomMade <span style={{ color: PRO.brass }}>Trade</span></div>
          <button type="button" onClick={() => go("A2")} style={{
            background: "none", border: "1px solid rgba(247,243,236,0.3)", borderRadius: 100, color: "rgba(247,243,236,0.8)",
            fontFamily: RM_F.sans, fontSize: 9.5, padding: "5px 10px", cursor: "pointer"
          }}>Consumer app</button>
        </div>
        <div style={{ position: "absolute", left: 20, right: 20, bottom: 16 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 8, letterSpacing: "0.2em", color: "rgba(247,243,236,0.6)" }}>B2B STAGING · MONTHLY RENTAL</div>
        </div>
      </div>

      <div style={{ padding: "20px 20px 30px" }}>
        <RMH1 style={{ fontSize: 29, color: PRO.paper, lineHeight: 1.08 }}>Furnish the listing,<br />not the mortgage.</RMH1>
        <p style={{ margin: "10px 0 0", fontFamily: RM_F.sans, fontSize: 12.5, lineHeight: 1.6, color: "rgba(247,243,236,0.6)" }}>
          Whole-room sets rented by the month to stagers and agents. Install, mid-listing swaps and de-stage are included — the furniture leaves when the listing closes.
        </p>

        <div style={{ marginTop: 22, display: "flex", flexDirection: "column" }}>
          {[
            ["01", "Monthly terms, not capex", "3-month minimum, then month to month. Cancel with 10 days' notice."],
            ["02", "Installed in 5 days", "Two-person crew, room of choice, COI filed with your building."],
            ["03", "One invoice per listing", "Net 30 after two orders. Every set tagged to an address, not a card."]
          ].map(([n, t, d], i) => (
            <div key={n} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: i === 0 ? "1px solid rgba(247,243,236,0.14)" : "none", borderBottom: "1px solid rgba(247,243,236,0.14)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: PRO.brass, paddingTop: 2 }}>{n}</span>
              <div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 12, fontWeight: 600 }}>{t}</div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 10, lineHeight: 1.5, color: "rgba(247,243,236,0.5)", marginTop: 3 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 8, letterSpacing: "0.16em", color: "rgba(247,243,236,0.45)" }}>WHO RENTS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 9 }}>
            {["Home stagers", "Listing agents", "Brokerages", "Short-let operators"].map((w) => (
              <span key={w} style={{
                fontFamily: RM_F.sans, fontSize: 10, color: "rgba(247,243,236,0.78)",
                border: "1px solid rgba(247,243,236,0.22)", borderRadius: 100, padding: "5px 10px"
              }}>{w}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 8 }}>
          <RMButton onClick={() => go("E2")} style={{ background: PRO.brass, color: "#241B0F" }}>Apply for a trade account</RMButton>
          <RMButton variant="ghost" onClick={() => go("E3")} style={{ borderColor: "rgba(247,243,236,0.28)", color: PRO.paper }}>
            I already have an account
          </RMButton>
        </div>

        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 7 }}>
          <RIcon name="shield" size={13} color="rgba(247,243,236,0.45)" />
          <span style={{ fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: "rgba(247,243,236,0.45)" }}>
            Serving NY, NJ, PA, IL, OH, NC · Certificate of insurance issued for every install.
          </span>
        </div>
      </div>
    </div>
  );
}

function ScreenE2({ go, state, setState }) {
  const types = ["Home stager", "Real estate agent", "Brokerage", "Short-let operator"];
  const volumes = ["1–3 listings / mo", "4–10", "11+"];
  return (
    <RMProScreen
      title="Trade account"
      sub="Step 1 of 2 · business verification"
      onBack={() => go("E1")}
      footer={
        <div style={{ padding: "11px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line }}>
          <RMProButton onClick={() => go("E3")}>Submit for approval</RMProButton>
          <div style={{ textAlign: "center", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 7 }}>
            Usually approved within 1 business day · no credit check for card accounts
          </div>
        </div>
      }
    >
      <div style={{ padding: "16px 18px 20px" }}>
        <div style={{ display: "flex", gap: 3 }}>
          <span style={{ flex: 1, height: 3, background: PRO.ink }}></span>
          <span style={{ flex: 1, height: 3, background: PRO.line }}></span>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Business" />
          <div style={{ marginTop: 8, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden", background: "#FFFDF9" }}>
            {[
              ["Company", "Hudson Staging Co."],
              ["Contact", "Ava Coleman"],
              ["Work email", "ava@hudsonstaging.com"],
              ["Phone", "(917) 555-0148"],
              ["Tax ID / EIN", "••-•••8412"]
            ].map(([k, v], i) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "11px 12px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line }}>
                <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub }}>{k}</span>
                <span style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 500, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Business type" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
            {types.map((t) => {
              const on = state.proType === t;
              return (
                <button key={t} type="button" onClick={() => setState({ proType: t })} style={{
                  height: 38, borderRadius: 7, cursor: "pointer", textAlign: "left", padding: "0 10px",
                  border: "1px solid " + (on ? PRO.ink : PRO.line), background: on ? PRO.ink : "transparent",
                  color: on ? PRO.paper : PRO.ink, fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 500
                }}>{t}</button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Service area" action="Add ZIP" onAction={() => {}} />
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {["11217", "11238", "10011"].map((z) => (
              <span key={z} style={{
                fontFamily: "var(--mono)", fontSize: 10, padding: "6px 10px", borderRadius: 6,
                background: "rgba(26,24,21,0.06)", color: PRO.ink
              }}>{z}</span>
            ))}
          </div>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub, marginTop: 6 }}>
            Sets ship from our Charlotte, NC warehouse; installs run 5 days a week in these ZIPs.
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Monthly staging volume" />
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {volumes.map((v) => (
              <RMChip key={v} active={state.proVolume === v} onClick={() => setState({ proVolume: v })}>{v}</RMChip>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Payment terms" />
          <div style={{ marginTop: 8, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden" }}>
            {[
              ["Card on file", "Available immediately", state.proTerms !== "net30"],
              ["Net 30", "Unlocks after 2 paid orders", state.proTerms === "net30"]
            ].map(([t, d, on], i) => (
              <button key={t} type="button" onClick={() => setState({ proTerms: i === 0 ? "card" : "net30" })} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 9, padding: "11px 12px", cursor: "pointer",
                border: 0, borderTop: i === 0 ? "none" : "1px solid " + PRO.line, background: on ? "#FBF8F2" : "transparent", textAlign: "left"
              }}>
                <span style={{ width: 14, height: 14, borderRadius: 100, border: "1px solid " + (on ? PRO.ink : "#C9C0B2"), display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  {on && <span style={{ width: 6, height: 6, borderRadius: 100, background: PRO.ink }}></span>}
                </span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>{t}</span>
                  <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>{d}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 9, border: "1px dashed #CFC5B6", borderRadius: 8, padding: 11 }}>
          <RIcon name="upload" size={15} color={PRO.brass} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>Certificate of insurance</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>COI_hudson_2026.pdf · expires Dec 1, 2026</div>
          </div>
          <RMStatusChip tone="green">Uploaded</RMStatusChip>
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenE3({ go, state }) {
  const active = RM_PRO_LISTINGS.filter((l) => l.status === "Staged");
  const monthly = active.reduce((s, l) => s + l.monthly, 0);
  return (
    <RMProScreen
      title="Trade desk"
      sub="Brooklyn & Manhattan · Nov 5"
      tab="E3"
      onNav={go}
      right={<button type="button" onClick={() => go("A2")} style={{ background: "none", border: "1px solid rgba(247,243,236,0.3)", borderRadius: 100, color: "rgba(247,243,236,0.8)", fontFamily: RM_F.sans, fontSize: 9, padding: "4px 9px", cursor: "pointer" }}>Exit</button>}
    >
      <div style={{ padding: "14px 18px 20px" }}>
        <div style={{ background: PRO.ink, borderRadius: 10, padding: "13px 14px", display: "flex", gap: 6 }}>
          <RMProStat value="1" label="In rent" sub="1 install" />
          <RMProStat value={rmMoney(monthly)} label="Monthly rent" sub="net 30" />
          <RMProStat value="8" label="Pieces out" sub="0 due back" />
          <RMProStat value="68" label="Days left" sub="Hoyt St" />
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Needs a decision" />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
            <button type="button" onClick={() => go("G1")} style={{
              display: "flex", alignItems: "center", gap: 9, padding: "10px 11px", borderRadius: 8, cursor: "pointer",
              border: "1px solid " + PRO.line, background: "#FBF8F2", textAlign: "left", width: "100%"
            }}>
              <span style={{ width: 22, height: 22, borderRadius: 100, background: "rgba(176,138,84,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <RIcon name="calendar" size={12} color="#7A5A2C" />
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>Install booked · 88 Pineapple Walk</span>
                <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>Nov 18, 10–12 · COI still pending for the building</span>
              </span>
              <RIcon name="chevron" size={11} color="#A69C8D" />
            </button>
            <button type="button" onClick={() => go("H3")} style={{
              display: "flex", alignItems: "center", gap: 9, padding: "10px 11px", borderRadius: 8, cursor: "pointer",
              border: "1px solid " + PRO.line, background: "transparent", textAlign: "left", width: "100%"
            }}>
              <span style={{ width: 22, height: 22, borderRadius: 100, background: "rgba(110,31,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <RIcon name="shield" size={12} color={PRO.wine} />
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>Insurance expires Dec 1</span>
                <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>Upload a renewal to keep installs on schedule</span>
              </span>
              <RIcon name="chevron" size={11} color="#A69C8D" />
            </button>
          </div>
        </div>

        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
          {[
            ["Rent a set", "F1", "box"],
            ["New listing", "F3", "plus"],
            ["Rentals", "G3", "grid"]
          ].map(([t, to, icon]) => (
            <button key={t} type="button" onClick={() => go(to)} style={{
              border: "1px solid " + PRO.line, borderRadius: 8, background: "#FFFDF9", padding: "10px 8px",
              cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 7
            }}>
              <RIcon name={icon} size={15} color={PRO.ink} />
              <span style={{ fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600 }}>{t}</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <RMProSection title="Listings in flight" action="See all" onAction={() => go("G3")} />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 7 }}>
            {RM_PRO_LISTINGS.map((l) => (
              <button key={l.id} type="button" onClick={() => go("G3", { listing: l.id })} style={{
                display: "flex", gap: 10, alignItems: "center", textAlign: "left", cursor: "pointer",
                border: "1px solid " + PRO.line, borderRadius: 9, padding: 9, background: l.status === "Draft" ? "transparent" : "#FFFDF9"
              }}>
                <div style={{ width: 52, height: 52, borderRadius: 6, overflow: "hidden", flex: "none", background: "#EFE9DE" }}>
                  <img src={rmImg(l.photo)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.address}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 }}>{l.price} · {l.client}</div>
                  <div style={{ marginTop: 5, display: "flex", alignItems: "center", gap: 6 }}>
                    <RMStatusChip tone={l.status === "Staged" ? "green" : l.status === "Draft" ? "grey" : "brass"}>{l.status}</RMStatusChip>
                    {l.monthly > 0 && <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: PRO.sub }}>{rmMoney(l.monthly)}/mo</span>}
                  </div>
                </div>
                <RIcon name="chevron" size={11} color="#A69C8D" />
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid " + PRO.line, paddingTop: 12 }}>
          <div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600 }}>November statement</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 }}>1 invoice · due Nov 30</div>
          </div>
          <button type="button" onClick={() => go("H3")} style={{
            background: "none", border: 0, cursor: "pointer", fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600, color: PRO.wine
          }}>Open billing →</button>
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenF1({ go }) {
  const rooms = ["All rooms", "Living", "Bedroom", "Dining", "Office", "Whole home"];
  const [room, setRoom] = useState("All rooms");
  const shown = RM_SETS.filter((s) => room === "All rooms" || s.room.startsWith(room) || (room === "Whole home" && s.room === "Whole home"));
  return (
    <RMProScreen
      title="Rent sets"
      sub="Available for install Nov 14"
      tab="F1"
      onNav={go}
      right={<button type="button" onClick={() => go("C1")} style={{ background: "none", border: "1px solid rgba(247,243,236,0.3)", borderRadius: 100, color: "rgba(247,243,236,0.8)", fontFamily: RM_F.sans, fontSize: 9, padding: "4px 9px", cursor: "pointer" }}>Buy instead</button>}
    >
      <div style={{ padding: "14px 18px 20px" }}>
        <div style={{ display: "flex", gap: 6, margin: "0 -18px", padding: "0 18px 2px", overflowX: "auto" }} className="rm-scroll-x">
          {rooms.map((r) => <RMChip key={r} active={room === r} onClick={() => setRoom(r)}>{r}</RMChip>)}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: 100, background: PRO.sage }}></span>
              {shown.length} sets available Nov 14
            </span>
          </div>
          <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>Monthly · 3-mo min</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginTop: 10 }}>
          {shown.map((s) => (
            <button key={s.id} type="button" onClick={() => go("F2", { set: s.id })} style={{
              border: "1px solid " + PRO.line, borderRadius: 9, overflow: "hidden", padding: 0,
              background: "#FFFDF9", cursor: "pointer", textAlign: "left"
            }}>
              <div style={{ position: "relative", height: 108, background: "#EFE9DE" }}>
                <img src={rmImg(s.img)} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                {s.tag && (
                  <span style={{ position: "absolute", left: 6, top: 6, background: PRO.ink, color: PRO.paper, fontFamily: RM_F.sans, fontSize: 7.5, letterSpacing: "0.06em", padding: "3px 5px", borderRadius: 2 }}>{s.tag.toUpperCase()}</span>
                )}
              </div>
              <div style={{ padding: "8px 9px 9px" }}>
                <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600, lineHeight: 1.25 }}>{s.name}</div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 2 }}>{s.pieces} pieces · {s.room}</div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontFamily: RM_F.serif, fontSize: 15, fontVariantNumeric: "tabular-nums" }}>{rmMoney(s.monthly)}<span style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub }}>/mo</span></span>
                  <span style={{ fontFamily: RM_F.sans, fontSize: 8, color: PRO.sage }}>{s.avail === "Now" ? "In stock" : s.avail}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 16, borderTop: "1px solid " + PRO.line, paddingTop: 12, display: "flex", gap: 8, alignItems: "flex-start" }}>
          <RIcon name="box" size={14} color={PRO.brass} />
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.5, color: PRO.sub }}>
            Every set ships complete — sofa, tables, rug, lighting, art. Crew returns for de-stage within 5 days of your closing date.
          </div>
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenF2({ go, state }) {
  const set = RM_SETS.find((s) => s.id === (state.set || "set-living")) || RM_SETS[0];
  const [term, setTerm] = useState(3);
  const pieces = RM_PRODUCTS_FOR_SET.slice(0, Math.min(set.pieces, 8));
  return (
    <RMProScreen
      title={set.name}
      sub={`${set.pieces} pieces · ${set.room}`}
      onBack={() => go("F1")}
      footer={
        <div style={{ padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 7 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>{term}-month term · install included</span>
            <span style={{ fontFamily: RM_F.serif, fontSize: 16 }}>{rmMoney(rmMonthly(set.monthly, term))}/mo</span>
          </div>
          <RMProButton onClick={() => go("F3", { set: set.id, term })}>Add to a listing</RMProButton>
        </div>
      }
    >
      <div style={{ padding: "0 18px 18px" }}>
        <div style={{ height: 200, borderRadius: 9, overflow: "hidden", marginTop: 12, background: "#EFE9DE" }}>
          <img src={rmImg(set.img)} alt={set.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: PRO.sub }}>Monthly rental</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginTop: 2 }}>
              <span style={{ fontFamily: RM_F.serif, fontSize: 28, fontVariantNumeric: "tabular-nums" }}>{rmMoney(set.monthly)}</span>
              <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: PRO.sub }}>/mo</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <RMStatusChip tone="green">{set.avail === "Now" ? "In stock" : "Avail " + set.avail}</RMStatusChip>
            <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 4 }}>{set.stock}</div>
          </div>
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 3, background: "#EDE5D8", borderRadius: 7, padding: 3 }}>
          {RM_RENTAL_TERMS.map((t) => {
            const on = term === t.months;
            return (
              <button key={t.months} type="button" onClick={() => setTerm(t.months)} style={{
                flex: 1, height: 32, border: 0, borderRadius: 5, cursor: "pointer",
                background: on ? "#FFFDF9" : "transparent", color: on ? PRO.ink : "#847B6D",
                fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: on ? 600 : 500, lineHeight: 1.2
              }}>
                {t.months} mo{t.discount > 0 ? <span style={{ display: "block", fontSize: 7.5, color: on ? PRO.brass : "#A69C8D" }}>{t.note}</span> : null}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title={`Included · ${set.pieces} pieces`} action="Full list" onAction={() => go("F1")} />
          <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {pieces.map((p) => (
              <div key={p.id} style={{ textAlign: "center" }}>
                <div style={{ height: 56, borderRadius: 6, overflow: "hidden", background: "#EFE9DE" }}>
                  <img src={rmImg(p.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 7.5, color: PRO.sub, marginTop: 3, lineHeight: 1.2 }}>{p.short}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden" }}>
          {[
            ["Delivery & install", "2-person crew, room of choice", "Included"],
            ["De-stage on close", "Pickup within 5 days, packaging removed", "Included"],
            ["Damage waiver", "8% of monthly rent, no deposit", "8%"],
            ["Swaps", "1 item per month, $75 after", "1 / mo"]
          ].map(([k, d, v], i) => (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 11px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>{k}</div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 1 }}>{d}</div>
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, color: v === "Included" ? PRO.sage : PRO.sub }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 7, alignItems: "flex-start" }}>
          <RIcon name="calendar" size={13} color={PRO.brass} />
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub }}>
            Reserve today and we hold the set for 48 hours. Install dates run Tue–Sat, 8am–4pm.
          </div>
        </div>
      </div>
    </RMProScreen>
  );
}

const RM_PRODUCTS_FOR_SET = [
  { id: "sofa", short: "Bouclé sofa", img: "sofa" },
  { id: "chair", short: "Cane chair", img: "chair" },
  { id: "table", short: "Travertine table", img: "table" },
  { id: "rug", short: "Wool rug 8×10", img: "rug" },
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
  return (
    <RMProScreen
      title="Reserve set"
      sub="Listing L-1180 · 214 Hoyt St"
      onBack={() => go("F2")}
      footer={
        <div style={{ padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>Due today</span>
            <span style={{ fontFamily: RM_F.serif, fontSize: 19 }}>{rmMoney(t.dueToday)}</span>
          </div>
          <RMProButton onClick={() => go("G1", { term, addons })}>Continue to scheduling</RMProButton>
        </div>
      }
    >
      <div style={{ padding: "14px 18px 18px" }}>
        <div style={{ border: "1px solid " + PRO.line, borderRadius: 8, padding: 11, background: "#FFFDF9", display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 42, height: 42, borderRadius: 5, overflow: "hidden", flex: "none", background: "#EFE9DE" }}>
            <img src={rmImg("after")} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, letterSpacing: "0.08em", textTransform: "uppercase" }}>Staging for</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, marginTop: 2 }}>214 Hoyt St, Apt 4B</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>$1.85M · Corcoran · D. Marsh</div>
          </div>
          <button type="button" onClick={() => go("G3", { listing: "L-1180" })} style={{
            background: "none", border: "1px solid " + PRO.line, borderRadius: 100, padding: "4px 8px",
            fontFamily: RM_F.sans, fontSize: 9, color: PRO.ink, cursor: "pointer"
          }}>Change</button>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Set" />
          <div style={{ marginTop: 8, display: "flex", gap: 10, alignItems: "center", border: "1px solid " + PRO.line, borderRadius: 8, padding: 9 }}>
            <div style={{ width: 52, height: 52, borderRadius: 6, overflow: "hidden", flex: "none", background: "#EFE9DE" }}>
              <img src={rmImg(set.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>{set.name}</div>
              <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 }}>{set.pieces} pieces · {set.room}</div>
            </div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10.5 }}>{rmMoney(rmMonthly(set.monthly, term))}/mo</span>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Term" />
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {RM_RENTAL_TERMS.map((x) => (
              <button key={x.months} type="button" onClick={() => setState({ term: x.months })} style={{
                flex: 1, padding: "8px 0", borderRadius: 6, cursor: "pointer",
                border: "1px solid " + (term === x.months ? PRO.ink : PRO.line), background: term === x.months ? "rgba(26,24,21,0.05)" : "transparent",
                fontFamily: RM_F.sans, fontSize: 10, fontWeight: term === x.months ? 600 : 500
              }}>{x.months} mo{x.discount ? <span style={{ display: "block", fontSize: 7.5, color: PRO.brass, fontWeight: 500 }}>{x.note}</span> : null}</button>
            ))}
          </div>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 6 }}>
            Billed monthly. After minimum term, month to month with 10 days' notice.
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Add-ons" />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
            {RM_PRO_ADDONS.map((a) => {
              const on = addons.includes(a.id);
              return (
                <button key={a.id} type="button" onClick={() => toggle(a.id)} style={{
                  display: "flex", alignItems: "center", gap: 9, padding: 8, borderRadius: 7, cursor: "pointer",
                  border: "1px solid " + (on ? PRO.ink : PRO.line), background: on ? "#FBF8F2" : "transparent", textAlign: "left"
                }}>
                  <div style={{ width: 34, height: 34, borderRadius: 5, overflow: "hidden", flex: "none", background: "#EFE9DE" }}>
                    <img src={rmImg(a.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span style={{ flex: 1, fontFamily: RM_F.sans, fontSize: 10.5 }}>{a.name}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 9.5, color: PRO.sub }}>+{rmMoney(a.per)}/mo</span>
                  <span style={{ width: 14, height: 14, borderRadius: 3, border: "1px solid " + (on ? PRO.ink : "#C9C0B2"), background: on ? PRO.ink : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    {on && <RIcon name="check" size={8} color="#FBF7F0" sw={3} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 8, padding: "11px 12px", background: "#FFFDF9" }}>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 5 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub }}>First month · {set.name}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10.5 }}>{rmMoney(t.monthly)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 5 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub }}>Damage waiver (8%)</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10.5 }}>{rmMoney(t.waiver)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 6 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub }}>NY sales tax (8.875%)</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10.5 }}>{rmMoney(t.tax)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid " + PRO.line, paddingTop: 7 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>Due today</span>
            <span style={{ fontFamily: RM_F.serif, fontSize: 17 }}>{rmMoney(t.dueToday)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub }}>Then monthly · {term}-mo contract {rmMoney(t.contract)}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: PRO.sub }}>{rmMoney(t.monthly)}/mo</span>
          </div>
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 7, alignItems: "flex-start" }}>
          <RIcon name="shield" size={13} color={PRO.sage} />
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub }}>
            No deposit. Damage waiver covers normal wear; missing items bill at replacement value. Rental agreement is e-signed before install.
          </div>
        </div>
      </div>
    </RMProScreen>
  );
}

Object.assign(window, { SCREENS_PRO_EF: { E1: ScreenE1, E2: ScreenE2, E3: ScreenE3, F1: ScreenF1, F2: ScreenF2, F3: ScreenF3 } });
