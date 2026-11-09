/* Group G + H — rental operations, swaps, returns, billing */
const { useState: useProState } = React;
const {
  RM_F, RIcon, RMChip, RM_IMG, RM_PRO_LISTINGS, RM_SETS,
  rmMoney, rmMonthly, rmProTotals, RM_PRO_ADDONS,
  PRO, RMProScreen, RMProStat, RMStatusChip, RMProSection, RMProButton
} = window;

const rmPImg = (k) => RM_IMG[k] || RM_IMG.after;
const rmSetOf = (id) => RM_SETS.find((s) => s.id === id) || RM_SETS[0];

const RM_STAGED_PIECES = [
  { name: "Marlow bouclé sofa", img: "sofa", status: "Installed" },
  { name: "Kessa travertine table", img: "table", status: "Installed" },
  { name: "Wren cane chair ×2", img: "chair", status: "Installed" },
  { name: "Alder wool rug 8×10", img: "rug", status: "Installed" },
  { name: "Pleated ceramic lamp", img: "lamp", status: "Installed" },
  { name: "Quiet Field print", img: "art", status: "Swap requested" },
  { name: "Linen curtain pair", img: "curtain", status: "Installed" },
  { name: "Halden sideboard", img: "sideboard", status: "Installed" }
];

function ScreenG1({ go, state, setState }) {
  const set = rmSetOf(state.set || "set-living");
  const term = state.term || 3;
  const addons = state.addons || ["art"];
  const totals = rmProTotals(set.monthly, term, addons);
  const dates = [
    { d: "Nov 14", w: "Fri", ok: true },
    { d: "Nov 15", w: "Sat", ok: true },
    { d: "Nov 18", w: "Tue", ok: true },
    { d: "Nov 19", w: "Wed", ok: false }
  ];
  const windows = ["8–10am", "10–12pm", "12–2pm", "2–4pm"];
  const pickup = state.installDay || "Nov 14";
  const win = state.installWindow || "10–12pm";
  return (
    <RMProScreen
      title="Schedule install"
      sub="214 Hoyt St, Apt 4B · Brooklyn"
      onBack={() => go("F3")}
      footer={
        <div style={{ padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>{pickup}, {win} · {set.name}</span>
            <span style={{ fontFamily: RM_F.serif, fontSize: 18 }}>{rmMoney(totals.dueToday)}</span>
          </div>
          <RMProButton onClick={() => go("G2", { installDay: pickup, installWindow: win })}>Reserve & sign agreement</RMProButton>
        </div>
      }
    >
      <div style={{ padding: "14px 18px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 10, border: "1px solid " + PRO.line, borderRadius: 8, background: "#FFFDF9" }}>
          <div style={{ width: 40, height: 40, borderRadius: 5, overflow: "hidden", flex: "none" }}>
            <img src={rmPImg(set.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>{set.name}</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>{set.pieces} pieces · {term}-month term</div>
          </div>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10 }}>{rmMoney(totals.monthly)}/mo</span>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Install date" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginTop: 8 }}>
            {dates.map((d) => {
              const on = pickup === d.d;
              return (
                <button key={d.d} type="button" disabled={!d.ok} onClick={() => setState({ installDay: d.d })} style={{
                  padding: "9px 0", borderRadius: 7, cursor: d.ok ? "pointer" : "not-allowed", opacity: d.ok ? 1 : 0.4,
                  border: "1px solid " + (on ? PRO.ink : PRO.line), background: on ? PRO.ink : "transparent", color: on ? PRO.paper : PRO.ink
                }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>{d.d}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 8, opacity: 0.6, marginTop: 1 }}>{d.w}</div>
                </button>
              );
            })}
          </div>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 6 }}>Next available install window is 3 days out. Blackout dates Nov 22–28.</div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Arrival window" />
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {windows.map((w) => <RMChip key={w} active={win === w} onClick={() => setState({ installWindow: w })}>{w}</RMChip>)}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Building access" />
          <div style={{ marginTop: 8, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden", background: "#FFFDF9" }}>
            {[
              ["Building type", "Condo · elevator"],
              ["COI required", state.coi ? "Filed by RoomMade" : "Not filed"],
              ["Lockbox", "0417 · lobby"],
              ["Contact on site", "Ava Coleman · (917) 555-0148"]
            ].map(([k, v], i) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "10px 11px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line }}>
                <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.sub }}>{k}</span>
                <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setState({ coi: !state.coi })} style={{
            marginTop: 8, width: "100%", display: "flex", alignItems: "center", gap: 9, padding: "10px 11px", cursor: "pointer",
            border: "1px dashed #CFC5B6", borderRadius: 8, background: "transparent", textAlign: "left"
          }}>
            <RIcon name="shield" size={14} color={PRO.brass} />
            <span style={{ flex: 1 }}>
              <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>File certificate of insurance</span>
              <span style={{ display: "block", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>Building management requires it 48h before install</span>
            </span>
            <RMStatusChip tone={state.coi ? "green" : "brass"}>{state.coi ? "Filed" : "File now"}</RMStatusChip>
          </button>
        </div>

        <div style={{ marginTop: 16, borderRadius: 8, background: "rgba(124,139,118,0.13)", padding: 11, display: "flex", gap: 8 }}>
          <RIcon name="truck" size={14} color="#3F4D39" />
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.5, color: "#3F4D39" }}>
            2-person crew, ~90 minutes, furniture placed and packaging removed. Photo proof sent when the truck leaves.
          </div>
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenG2({ go, state }) {
  const set = rmSetOf(state.set || "set-living");
  return (
    <RMProScreen title="Reservation confirmed" sub="Agreement RM-STG-4102" tab="G3" onNav={go}>
      <div style={{ padding: "18px 18px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 100, background: "rgba(124,139,118,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RIcon name="check" size={17} color="#3F4D39" sw={2.4} />
          </div>
          <div>
            <div style={{ fontFamily: RM_F.serif, fontSize: 19, lineHeight: 1.1 }}>Set held for Nov 14</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub, marginTop: 2 }}>{set.name} · {state.installWindow || "10–12pm"}</div>
          </div>
        </div>

        <div style={{ marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 9, overflow: "hidden", background: "#FFFDF9" }}>
          <div style={{ display: "flex", gap: 10, padding: 11 }}>
            <div style={{ width: 54, height: 54, borderRadius: 6, overflow: "hidden", flex: "none" }}>
              <img src={rmPImg(set.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600 }}>214 Hoyt St, Apt 4B</div>
              <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 2 }}>Brooklyn, NY 11217 · Corcoran</div>
              <div style={{ marginTop: 6, display: "flex", gap: 5 }}>
                <RMStatusChip tone="green">Agreement signed</RMStatusChip>
                <RMStatusChip tone="grey">COI filed Nov 6</RMStatusChip>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid " + PRO.line }}>
            {[
              ["Monthly rent", rmMoney(rmMonthly(set.monthly, state.term || 3)) + " / mo"],
              ["Term", (state.term || 3) + " months · then month to month"],
              ["Install", (state.installDay || "Nov 14") + " · " + (state.installWindow || "10–12pm")],
              ["De-stage", "Within 5 days of close · est. Feb 12"],
              ["Due today", rmMoney(rmProTotals(set.monthly, state.term || 3, state.addons || ["art"]).dueToday)]
            ].map(([k, v], i) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "9px 11px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line }}>
                <span style={{ fontFamily: RM_F.sans, fontSize: 10, color: PRO.sub }}>{k}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 10 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="What happens next" />
          <div style={{ marginTop: 10, paddingLeft: 2 }}>
            {[
              ["Nov 12", "COI filed with building", "Management confirms the elevator window."],
              ["Nov 14", "Delivery & install", "Crew places all 8 pieces, sends photo proof."],
              ["Dec 12", "Swap window opens", "One item per month, free — for stale photos."],
              ["Feb 12", "De-stage pickup", "Booked automatically 5 days after your close date."],
              ["Feb 17", "Final invoice", "Net 30, tied to agreement RM-STG-4102."]
            ].map(([d, t, s], i, arr) => (
              <div key={d} style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 46, flex: "none", paddingTop: 1 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 8.5, color: PRO.brass }}>{d}</div>
                </div>
                <div style={{ flex: 1, paddingBottom: i === arr.length - 1 ? 0 : 12, position: "relative" }}>
                  {i < arr.length - 1 && <span style={{ position: "absolute", left: -6, top: 12, bottom: 0, width: 1, background: PRO.line }}></span>}
                  <span style={{ position: "absolute", left: -9, top: 4, width: 5, height: 5, borderRadius: 100, background: i < 2 ? PRO.ink : "#C9C0B2" }}></span>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>{t}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1, lineHeight: 1.45 }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 7 }}>
          <RMProButton onClick={() => go("G3", { listing: "L-1180" })}>Open rental hub</RMProButton>
          <RMProButton variant="ghost" onClick={() => go("E3")}>Back to desk</RMProButton>
        </div>
        <div style={{ textAlign: "center", fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 10 }}>
          Agreement and invoice sent to ava@hudsonstaging.com
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenG3({ go, state, setState }) {
  const selected = state.listing || "L-1180";
  const listing = RM_PRO_LISTINGS.find((l) => l.id === selected) || RM_PRO_LISTINGS[0];
  const set = rmSetOf(listing.set);
  const [filter, setFilter] = useProState("Active");
  return (
    <RMProScreen title="Rentals" sub="3 listings · 8 pieces out" tab="G3" onNav={go}>
      <div style={{ padding: "14px 18px 20px" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[{ k: "Active", l: "Active 1", id: "L-1180" }, { k: "Scheduled", l: "Scheduled 1", id: "L-1174" }, { k: "Draft", l: "Draft 1", id: "L-1169" }].map((f) => (
            <button key={f.k} type="button" onClick={() => { setFilter(f.k); setState({ listing: f.id }); }} style={{
              padding: "6px 10px", borderRadius: 100, cursor: "pointer",
              border: "1px solid " + (filter === f.k ? PRO.ink : PRO.line),
              background: filter === f.k ? PRO.ink : "transparent",
              color: filter === f.k ? PRO.paper : PRO.ink,
              fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 500
            }}>{f.l}</button>
          ))}
        </div>

        <div style={{ marginTop: 12, border: "1px solid " + PRO.line, borderRadius: 10, overflow: "hidden", background: "#FFFDF9" }}>
          <div style={{ position: "relative", height: 118 }}>
            <img src={rmPImg(listing.photo)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,24,21,0) 30%, rgba(26,24,21,0.78) 100%)" }} />
            <div style={{ position: "absolute", left: 11, right: 11, bottom: 9, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontFamily: RM_F.serif, fontSize: 16, color: PRO.paper, lineHeight: 1.15 }}>{listing.address}</div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: "rgba(247,243,236,0.7)", marginTop: 2 }}>{listing.city} · {listing.price}</div>
              </div>
              <span style={{ background: "rgba(247,243,236,0.92)", color: "#2E3A2C", fontFamily: RM_F.sans, fontSize: 8, fontWeight: 700, letterSpacing: "0.05em", padding: "3px 6px", borderRadius: 3, textTransform: "uppercase" }}>{listing.status}</span>
            </div>
          </div>

          <div style={{ padding: "11px 12px" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 14 }}>{rmMoney(listing.monthly)}<span style={{ fontFamily: RM_F.sans, fontSize: 8, color: PRO.sub }}>/mo</span></div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 1 }}>{set.name} · {listing.pieces} pieces</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 14 }}>{listing.daysLeft > 0 ? listing.daysLeft : "—"}<span style={{ fontFamily: RM_F.sans, fontSize: 8, color: PRO.sub }}> days</span></div>
                <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 1 }}>De-stage {listing.deStage}</div>
              </div>
            </div>

            <div style={{ marginTop: 9, height: 4, borderRadius: 100, background: "#EDE5D8", overflow: "hidden" }}>
              <div style={{ width: listing.status === "Staged" ? "24%" : "0%", height: "100%", background: PRO.ink }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              <span style={{ fontFamily: RM_F.sans, fontSize: 8, color: PRO.sub }}>Installed {listing.install}</span>
              <span style={{ fontFamily: RM_F.sans, fontSize: 8, color: PRO.sub }}>{listing.client}</span>
            </div>

            {listing.status === "Staged" ? (
              <div style={{ marginTop: 11, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
                {[
                  ["Extend term", () => go("H3"), "plus"],
                  ["Swap 1 item", () => go("H1", { listing: listing.id }), "box"],
                  ["De-stage", () => go("H2", { listing: listing.id }), "truck"]
                ].map(([t, fn, icon]) => (
                  <button key={t} type="button" onClick={fn} style={{
                    border: "1px solid " + PRO.line, background: "transparent", borderRadius: 6, padding: "7px 4px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer"
                  }}>
                    <RIcon name={icon} size={13} color={PRO.ink} />
                    <span style={{ fontFamily: RM_F.sans, fontSize: 8.5, fontWeight: 600 }}>{t}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ marginTop: 11 }}>
                <button type="button" onClick={() => go(listing.status === "Draft" ? "F3" : "G2", { set: listing.set })} style={{
                  width: "100%", height: 34, borderRadius: 6, border: "1px solid " + PRO.ink, background: "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer",
                  fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 600
                }}>
                  {listing.status === "Draft" ? "Finish reservation" : "View agreement & install"}
                  <RIcon name="arrowR" size={11} color={PRO.ink} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection
            title={listing.status === "Staged" ? "Pieces on site" : "Reserved for this listing"}
            action={listing.status === "Staged" ? "Report damage" : null}
            onAction={() => go("H2", { listing: listing.id })}
          />
          {listing.status === "Staged" ? (
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {RM_STAGED_PIECES.slice(0, 5).map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", border: "1px solid " + PRO.line, borderRadius: 7, background: "#FFFDF9" }}>
                <div style={{ width: 28, height: 28, borderRadius: 4, overflow: "hidden", flex: "none" }}>
                  <img src={rmPImg(p.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span style={{ flex: 1, fontFamily: RM_F.sans, fontSize: 9.5 }}>{p.name}</span>
                <RMStatusChip tone={p.status === "Installed" ? "green" : "brass"}>{p.status}</RMStatusChip>
              </div>
            ))}
            <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, paddingLeft: 2 }}>+ 3 more pieces · all serials scanned at install</div>
          </div>
          ) : (
            <div style={{ marginTop: 8, border: "1px dashed #CFC5B6", borderRadius: 8, padding: 11, display: "flex", gap: 8 }}>
              <RIcon name="box" size={14} color={PRO.brass} />
              <div style={{ fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub }}>
                {listing.pieces} pieces held for {listing.address}. Nothing on site yet — install {listing.install}. Serial scan and condition photos unlock once the crew checks in.
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Other listings" action="Rent a set" onAction={() => go("F1")} />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
            {RM_PRO_LISTINGS.filter((l) => l.id !== listing.id).map((l) => (
              <button key={l.id} type="button" onClick={() => setState({ listing: l.id })} style={{
                display: "flex", alignItems: "center", gap: 9, padding: 8, borderRadius: 8, cursor: "pointer",
                border: "1px solid " + PRO.line, background: "transparent", textAlign: "left"
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 4, overflow: "hidden", flex: "none" }}>
                  <img src={rmPImg(l.photo)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 10, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.address}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 1 }}>{l.status}{l.install !== "—" ? " · " + l.install : ""}</div>
                </div>
                <RIcon name="chevron" size={10} color="#A69C8D" />
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, borderTop: "1px solid " + PRO.line, paddingTop: 11, display: "flex", gap: 10 }}>
          <RIcon name="calendar" size={13} color={PRO.brass} />
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub }}>
            <b style={{ color: PRO.ink }}>Next 30 days:</b> Nov 18 install (Pineapple Walk) · Nov 30 de-stage (Hoyt St hold) · Dec 5 open house.
          </div>
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenH1({ go, state }) {
  const [reason, setReason] = useProState("Reads dark in photos");
  const [pick, setPick] = useProState("alt-1");
  const alts = [
    { id: "alt-1", name: "Ivory bouclé loveseat", img: "sofaSage", avail: "Nov 9", note: "Lighter, 2-seat" },
    { id: "alt-2", name: "Cognac leather sofa", img: "sofaLeather", avail: "Nov 12", note: "Warmer tone" },
    { id: "alt-3", name: "Slipcovered linen sofa", img: "coastal", avail: "Nov 15", note: "Photo-friendly" }
  ];
  return (
    <RMProScreen
      title="Swap an item"
      sub="214 Hoyt St · 1 swap left this month"
      onBack={() => go("G3", { listing: state.listing || "L-1180" })}
      footer={
        <div style={{ padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>Included swap · crew + pickup</span>
            <span style={{ fontFamily: RM_F.serif, fontSize: 16 }}>$0</span>
          </div>
          <RMProButton onClick={() => go("G3", { listing: state.listing || "L-1180" })}>Request swap</RMProButton>
        </div>
      }
    >
      <div style={{ padding: "14px 18px 18px" }}>
        <div style={{ border: "1px solid " + PRO.line, borderRadius: 8, padding: 10, background: "#FFFDF9", display: "flex", gap: 9, alignItems: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: 5, overflow: "hidden", flex: "none" }}>
            <img src={rmPImg("sofa")} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, letterSpacing: "0.08em", textTransform: "uppercase" }}>Swapping out</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 11, fontWeight: 600, marginTop: 2 }}>Marlow bouclé sofa · Oat</div>
            <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>Installed Oct 12 · serial M-4471</div>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Reason" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
            {["Reads dark in photos", "Client request", "Damaged", "Wrong size"].map((r) => (
              <RMChip key={r} active={reason === r} onClick={() => setReason(r)}>{r}</RMChip>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Available replacements" />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 7 }}>
            {alts.map((a) => {
              const on = pick === a.id;
              return (
                <button key={a.id} type="button" onClick={() => setPick(a.id)} style={{
                  display: "flex", gap: 9, alignItems: "center", padding: 8, borderRadius: 8, cursor: "pointer", textAlign: "left",
                  border: "1px solid " + (on ? PRO.ink : PRO.line), background: on ? "#FBF8F2" : "#FFFDF9"
                }}>
                  <div style={{ width: 46, height: 46, borderRadius: 5, overflow: "hidden", flex: "none" }}>
                    <img src={rmPImg(a.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>{a.name}</div>
                    <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, marginTop: 1 }}>{a.note} · avail {a.avail}</div>
                  </div>
                  <span style={{ width: 15, height: 15, borderRadius: 100, border: "1px solid " + (on ? PRO.ink : "#C9C0B2"), display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    {on && <span style={{ width: 7, height: 7, borderRadius: 100, background: PRO.ink }}></span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 8, padding: 11 }}>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, fontWeight: 600, marginBottom: 5 }}>Swap terms</div>
          {[
            "1 item per month included — this one is free.",
            "Additional swaps $75 each, billed on the next statement.",
            "Crew delivers replacement and removes the original in one visit.",
            "Monthly rent stays the same unless the new piece is a premium item."
          ].map((x) => (
            <div key={x} style={{ display: "flex", gap: 6, marginTop: 3 }}>
              <span style={{ color: PRO.sage, fontFamily: RM_F.sans, fontSize: 10 }}>·</span>
              <span style={{ fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub }}>{x}</span>
            </div>
          ))}
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenH2({ go, state }) {
  const listing = RM_PRO_LISTINGS.find((l) => l.id === (state.listing || "L-1180")) || RM_PRO_LISTINGS[0];
  const [day, setDay] = useProState("Nov 30");
  const [win, setWin] = useProState("10–12pm");
  const pieces = RM_STAGED_PIECES.slice(0, 4);
  return (
    <RMProScreen
      title="Schedule de-stage"
      sub={listing.address}
      onBack={() => go("G3", { listing: listing.id })}
      footer={
        <div style={{ padding: "10px 18px 34px", background: PRO.paper, borderTop: "1px solid " + PRO.line }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>{day}, {win} · pickup included</span>
            <span style={{ fontFamily: RM_F.serif, fontSize: 16 }}>$0</span>
          </div>
          <RMProButton onClick={() => go("G3", { listing: listing.id })}>Schedule pickup</RMProButton>
        </div>
      }
    >
      <div style={{ padding: "14px 18px 18px" }}>
        <div style={{ display: "flex", gap: 6, borderRadius: 8, background: "rgba(26,24,21,0.05)", padding: 9, alignItems: "flex-start" }}>
          <RIcon name="calendar" size={13} color={PRO.ink} />
          <div style={{ fontFamily: RM_F.sans, fontSize: 9.5, lineHeight: 1.5 }}>
            Pick pickup 5 days after closing. Contracted de-stage date is <b>{listing.deStage}</b> — moving it earlier is free if the crew has capacity.
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Pickup date" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginTop: 8 }}>
            {["Nov 26", "Nov 28", "Nov 30", "Dec 3"].map((d) => (
              <button key={d} type="button" onClick={() => setDay(d)} style={{
                padding: "9px 0", borderRadius: 7, cursor: "pointer",
                border: "1px solid " + (day === d ? PRO.ink : PRO.line),
                background: day === d ? PRO.ink : "transparent", color: day === d ? PRO.paper : PRO.ink,
                fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600
              }}>{d}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 7 }}>
            {["8–10am", "10–12pm", "2–4pm"].map((w) => <RMChip key={w} active={win === w} onClick={() => setWin(w)}>{w}</RMChip>)}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <RMProSection title="Condition check · 8 pieces" action="All accounted" onAction={() => {}} />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {pieces.map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 9px", border: "1px solid " + PRO.line, borderRadius: 7 }}>
                <div style={{ width: 30, height: 30, borderRadius: 4, overflow: "hidden", flex: "none" }}>
                  <img src={rmPImg(p.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span style={{ flex: 1, fontFamily: RM_F.sans, fontSize: 9.5 }}>{p.name}</span>
                <div style={{ display: "flex", gap: 4 }}>
                  <span style={{ fontFamily: RM_F.sans, fontSize: 8, color: "#3F4D39", background: "rgba(124,139,118,0.18)", padding: "3px 5px", borderRadius: 3 }}>Good</span>
                  <span style={{ fontFamily: RM_F.sans, fontSize: 8, color: PRO.sub, border: "1px solid " + PRO.line, padding: "3px 5px", borderRadius: 3 }}>Issue</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 6 }}>+ 4 more · crew verifies condition at pickup and scans every serial</div>
        </div>

        <div style={{ marginTop: 16, border: "1px solid " + PRO.line, borderRadius: 8, padding: "11px 12px", background: "#FFFDF9" }}>
          {[
            ["Pickup & packaging removal", "Included"],
            ["Damage beyond wear", "At replacement value"],
            ["Missing item", "Billed after 7-day search"],
            ["Deposit", "None — waiver covers wear"]
          ].map(([k, v], i) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: i === 3 ? 0 : 6 }}>
              <span style={{ fontFamily: RM_F.sans, fontSize: 9.5, color: PRO.sub }}>{k}</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 9.5 }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12, fontFamily: RM_F.sans, fontSize: 9, lineHeight: 1.5, color: PRO.sub }}>
          Final invoice issues 3 business days after pickup: outstanding rent, any damage, and the waiver true-up.
        </div>
      </div>
    </RMProScreen>
  );
}

function ScreenH3({ go }) {
  return (
    <RMProScreen title="Billing & account" sub="Trade · Net 30" tab="H3" onNav={go}>
      <div style={{ padding: "14px 18px 20px" }}>
        <div style={{ background: PRO.ink, borderRadius: 10, padding: 13, color: PRO.paper }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 8, letterSpacing: "0.16em", color: "rgba(247,243,236,0.5)" }}>ACCOUNT TR-8841</div>
              <div style={{ fontFamily: RM_F.serif, fontSize: 18, marginTop: 4 }}>Net 30 · approved</div>
            </div>
            <span style={{ border: "1px solid rgba(247,243,236,0.3)", borderRadius: 100, padding: "3px 8px", fontFamily: RM_F.sans, fontSize: 8.5, color: "rgba(247,243,236,0.8)" }}>Trade</span>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
            <RMProStat value={rmMoney(1180)} label="Open balance" sub="due Nov 30" />
            <RMProStat value={rmMoney(1180)} label="Avg. / listing" sub="3-mo term" />
            <RMProStat value="3 / 5" label="Seats" sub="2 invites" />
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Invoices" action="Download all" onAction={() => {}} />
          <div style={{ marginTop: 8, border: "1px solid " + PRO.line, borderRadius: 8, overflow: "hidden", background: "#FFFDF9" }}>
            {[
              ["INV-2081", "Nov 1 · 1 rental", 1180, "Open · due Nov 30", "brass"],
              ["INV-2044", "Oct 1 · 1 rental", 1180, "Paid Oct 28", "green"],
              ["INV-2007", "Sep 1 · 1 rental", 1180, "Paid Sep 24", "green"]
            ].map(([id, d, amt, st, tone], i) => (
              <div key={id} style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 11px", borderTop: i === 0 ? "none" : "1px solid " + PRO.line }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 9.5 }}>{id}</div>
                  <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 2 }}>{d}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11 }}>{rmMoney(amt)}</div>
                  <div style={{ marginTop: 2 }}><RMStatusChip tone={tone}>{st}</RMStatusChip></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Payment method" action="Update" onAction={() => {}} />
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 9, border: "1px solid " + PRO.line, borderRadius: 8, padding: 10 }}>
            <div style={{ width: 30, height: 20, borderRadius: 3, background: PRO.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 7, color: PRO.paper }}>ACH</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: RM_F.sans, fontSize: 10.5, fontWeight: 600 }}>Chase · •••• 4417</div>
              <div style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub, marginTop: 1 }}>PO required over $3,000 · PO-2211 on file</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Documents" />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              ["W-9 · Hudson Staging Co.", "On file"],
              ["Certificate of insurance", "Expires Dec 1"],
              ["Rental agreement template", "v4 · Nov 2026"],
              ["Trade terms", "Net 30 · 3-mo minimum"]
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 10px", border: "1px solid " + PRO.line, borderRadius: 7 }}>
                <span style={{ fontFamily: RM_F.sans, fontSize: 10 }}>{k}</span>
                <span style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: v.includes("Expires") ? PRO.wine : PRO.sub }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RMProSection title="Seats" action="Invite" onAction={() => {}} />
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              ["Ava Coleman", "Owner · all listings"],
              ["Marcus Reid", "Installer · calendar only"],
              ["Jules Tran", "Pending invite"]
            ].map(([n, r], i) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: "1px solid " + PRO.line, borderRadius: 7 }}>
                <span style={{ width: 22, height: 22, borderRadius: 100, background: i === 2 ? "#EFE9DE" : "rgba(26,24,21,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: RM_F.sans, fontSize: 8.5, fontWeight: 600, color: PRO.sub }}>{n.split(" ").map((x) => x[0]).join("")}</span>
                <span style={{ flex: 1, fontFamily: RM_F.sans, fontSize: 10 }}>{n}</span>
                <span style={{ fontFamily: RM_F.sans, fontSize: 8.5, color: PRO.sub }}>{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18, borderTop: "1px solid " + PRO.line, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          <button type="button" onClick={() => go("A2")} style={{
            border: 0, background: "none", padding: 0, cursor: "pointer", textAlign: "left",
            display: "flex", alignItems: "center", justifyContent: "space-between"
          }}>
            <span style={{ fontFamily: RM_F.sans, fontSize: 10.5, color: PRO.ink }}>Switch to the consumer app</span>
            <RIcon name="arrowR" size={12} color={PRO.ink} />
          </button>
          <div style={{ fontFamily: RM_F.sans, fontSize: 9, color: PRO.sub, lineHeight: 1.5 }}>
            Trade support · trade@roommade.com · Mon–Sat 8am–7pm ET
          </div>
        </div>
      </div>
    </RMProScreen>
  );
}

Object.assign(window, { SCREENS_PRO_GH: { G1: ScreenG1, G2: ScreenG2, G3: ScreenG3, H1: ScreenH1, H2: ScreenH2, H3: ScreenH3 } });
