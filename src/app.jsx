/* Phone shell — v1's own screens, no desktop specimen apparatus. */
const { useState, useEffect, useCallback, useRef } = React;
const { RM_SCREENS } = window;

const RM_COMPONENTS = Object.assign(
  {},
  window.SCREENS_A, window.SCREENS_B, window.SCREENS_C, window.SCREENS_D,
  window.SCREENS_PRO_EF, window.SCREENS_PRO_GH
);

const RM_INITIAL_STATE = {
  credits: 3,
  tier: 1,
  style: "Warm Minimal",
  room: "Living room",
  cart: { sofa: 1, table: 1, rug: 1, lamp: 1, art: 1, sideboard: 1, curtain: 1 },
  projectsTab: "Designs",
  product: "sofa",
  saved: false
};

const RM_SCREEN_MAP = {};
RM_SCREENS.forEach((s) => { RM_SCREEN_MAP[s.id] = s; });

const RM_DEFAULT_SCREEN = "A2";

function rmRouteOf(hash) {
  const raw = (hash || "").replace(/^#\/?/, "").trim();
  const id = raw.toUpperCase();
  return RM_COMPONENTS[id] ? id : null;
}

function RMApp() {
  const [route, setRoute] = useState(() => rmRouteOf(window.location.hash) || RM_DEFAULT_SCREEN);
  const [state, setState] = useState(RM_INITIAL_STATE);
  const [framed, setFramed] = useState(() =>
    window.matchMedia ? window.matchMedia("(min-width: 560px)").matches : false
  );

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 560px)");
    const on = (e) => setFramed(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", on);
    else mq.addListener(on);
    setFramed(mq.matches);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", on);
      else mq.removeListener(on);
    };
  }, []);

  useEffect(() => {
    const onPop = () => setRoute(rmRouteOf(window.location.hash) || RM_DEFAULT_SCREEN);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const go = useCallback((id, patch) => {
    if (!RM_COMPONENTS[id]) return;
    if (patch) setState((s) => ({ ...s, ...patch }));
    setRoute(id);
    const url = "#/" + id;
    if (window.location.hash !== url) window.history.pushState({ screen: id }, "", url);
  }, []);

  const idx = RM_SCREENS.findIndex((s) => s.id === route);
  const Comp = RM_COMPONENTS[route];

  useEffect(() => {
    if (!framed) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight" && idx > -1 && idx < RM_SCREENS.length - 1) go(RM_SCREENS[idx + 1].id);
      if (e.key === "ArrowLeft" && idx > 0) go(RM_SCREENS[idx - 1].id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [framed, idx, go]);

  if (!Comp) return null;

  const screenBody = <Comp key={route} go={go} state={state} setState={setState} />;

  if (!framed) {
    return (
      <div className="rm-fullbleed" data-screen={route}>
        <div className="rm-fullbleed-stage">{screenBody}</div>
      </div>
    );
  }

  const meta = RM_SCREEN_MAP[route];
  const step = (dir) => {
    const t = RM_SCREENS[idx + dir];
    return (
      <button
        type="button"
        className="rm-step"
        disabled={!t}
        onClick={() => t && go(t.id)}
        aria-label={dir < 0 ? "Previous screen" : "Next screen"}
      >
        <window.RIcon name={dir < 0 ? "back" : "chevron"} size={13} color="#1C1916" />
      </button>
    );
  };

  return (
    <div className="rm-desk">
      <div className="rm-desk-phone">
        <window.IOSDevice width={390} height={844}>
          {screenBody}
        </window.IOSDevice>
      </div>
      <div className="rm-desk-dock">
        {step(-1)}
        <div className="rm-desk-meta">
          <span className="rm-desk-id">{meta.id}</span>
          <span className="rm-desk-name">{meta.name}</span>
        </div>
        <span className="rm-desk-count">{String(idx + 1).padStart(2, "0")} / {RM_SCREENS.length}</span>
        {step(1)}
      </div>
    </div>
  );
}

Object.assign(window, { RMApp, RM_COMPONENTS, RM_INITIAL_STATE });
