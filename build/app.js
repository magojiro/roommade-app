(() => {
  // v4/src/app.jsx
  var { useState, useEffect, useCallback, useRef } = React;
  var { RM_SCREENS } = window;
  var RM_COMPONENTS = Object.assign(
    {},
    window.SCREENS_A,
    window.SCREENS_B,
    window.SCREENS_C,
    window.SCREENS_D,
    window.SCREENS_PRO_EF,
    window.SCREENS_PRO_GH
  );
  var RM_INITIAL_STATE = {
    credits: 3,
    tier: 1,
    style: "Warm Minimal",
    room: "Living room",
    cart: { sofa: 1, table: 1, rug: 1, lamp: 1, art: 1, sideboard: 1, curtain: 1 },
    projectsTab: "Designs",
    product: "sofa",
    saved: false
  };
  var RM_SCREEN_MAP = {};
  RM_SCREENS.forEach((s) => {
    RM_SCREEN_MAP[s.id] = s;
  });
  var RM_DEFAULT_SCREEN = "A2";
  function rmRouteOf(hash) {
    const raw = (hash || "").replace(/^#\/?/, "").trim();
    const id = raw.toUpperCase();
    return RM_COMPONENTS[id] ? id : null;
  }
  function RMApp() {
    const [route, setRoute] = useState(() => rmRouteOf(window.location.hash) || RM_DEFAULT_SCREEN);
    const [state, setState] = useState(RM_INITIAL_STATE);
    const [framed, setFramed] = useState(
      () => window.matchMedia ? window.matchMedia("(min-width: 560px)").matches : false
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
    const screenBody = /* @__PURE__ */ React.createElement(Comp, { key: route, go, state, setState });
    if (!framed) {
      return /* @__PURE__ */ React.createElement("div", { className: "rm-fullbleed", "data-screen": route }, /* @__PURE__ */ React.createElement("div", { className: "rm-fullbleed-stage" }, screenBody));
    }
    const meta = RM_SCREEN_MAP[route];
    const step = (dir) => {
      const t = RM_SCREENS[idx + dir];
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "rm-step",
          disabled: !t,
          onClick: () => t && go(t.id),
          "aria-label": dir < 0 ? "Previous screen" : "Next screen"
        },
        /* @__PURE__ */ React.createElement(window.RIcon, { name: dir < 0 ? "back" : "chevron", size: 13, color: "#1C1916" })
      );
    };
    return /* @__PURE__ */ React.createElement("div", { className: "rm-desk" }, /* @__PURE__ */ React.createElement("div", { className: "rm-desk-phone" }, /* @__PURE__ */ React.createElement(window.IOSDevice, { width: 390, height: 844 }, screenBody)), /* @__PURE__ */ React.createElement("div", { className: "rm-desk-dock" }, step(-1), /* @__PURE__ */ React.createElement("div", { className: "rm-desk-meta" }, /* @__PURE__ */ React.createElement("span", { className: "rm-desk-id" }, meta.id), /* @__PURE__ */ React.createElement("span", { className: "rm-desk-name" }, meta.name)), /* @__PURE__ */ React.createElement("span", { className: "rm-desk-count" }, String(idx + 1).padStart(2, "0"), " / ", RM_SCREENS.length), step(1)));
  }
  Object.assign(window, { RMApp, RM_COMPONENTS, RM_INITIAL_STATE });
})();
