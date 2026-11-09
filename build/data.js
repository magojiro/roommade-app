(() => {
  // v4/src/data.js
  var RM_IMG = {
    before: "assets/living-before.jpg",
    after: "assets/living-after.jpg",
    bedroom: "assets/bedroom.jpg",
    kitchen: "assets/kitchen.jpg",
    dining: "assets/dining.jpg",
    bath: "assets/bath.jpg",
    office: "assets/office.jpg",
    plan: "assets/floorplan.jpg",
    sofa: "assets/sofa.jpg",
    table: "assets/table.jpg",
    rug: "assets/rug.jpg",
    lamp: "assets/lamp.jpg",
    chair: "assets/chair.jpg",
    sideboard: "assets/sideboard.jpg",
    art: "assets/art.jpg",
    curtain: "assets/curtain.jpg",
    designer: "assets/designer.jpg",
    coastal: "assets/coastal.jpg",
    sofaSage: "assets/sofa-sage.jpg",
    sofaLeather: "assets/sofa-leather.jpg",
    entry: "assets/entry.jpg"
  };
  var RM_PRODUCTS = [
    { id: "sofa", name: "Marlow 3-Seat Sofa", sub: "Boucl\xE9 \xB7 Oat", price: [1160, 1890, 3120], badge: "Made to order \xB7 4 weeks", img: RM_IMG.sofa, dims: 'W 84" \xD7 D 36" \xD7 H 31"', category: "Furniture" },
    { id: "table", name: "Kessa Travertine Coffee Table", sub: 'Travertine \xB7 48" round', price: [395, 640, 1050], badge: "In stock", img: RM_IMG.table, dims: 'W 48" \xD7 D 48" \xD7 H 14"', category: "Furniture" },
    { id: "rug", name: "Alder Hand-Knotted Wool Rug", sub: "Ivory / Sage \xB7 8' \xD7 10'", price: [330, 520, 860], badge: "In stock", img: RM_IMG.rug, dims: "8' \xD7 10'", category: "Rugs" },
    { id: "lamp", name: "Pleated Ceramic Table Lamp", sub: "Brass \xB7 Linen shade", price: [110, 180, 295], badge: "In stock", img: RM_IMG.lamp, dims: 'H 22" \xD7 Dia 15"', category: "Lighting" },
    { id: "chair", name: "Wren Cane Accent Chair", sub: "Walnut / natural cane", price: [705, 1150, 1890], badge: "Made to order \xB7 3 weeks", img: RM_IMG.chair, dims: 'W 28" \xD7 D 31" \xD7 H 30"', category: "Furniture" },
    { id: "sideboard", name: "Halden Walnut Sideboard", sub: "Fluted walnut \xB7 brass pulls", price: [1350, 2190, 3600], badge: "Made to order \xB7 5 weeks", img: RM_IMG.sideboard, dims: 'W 68" \xD7 D 18" \xD7 H 28"', category: "Furniture" },
    { id: "art", name: "Quiet Field Art Print", sub: 'Oak frame \xB7 24" \xD7 30"', price: [250, 405, 665], badge: "In stock", img: RM_IMG.art, dims: '24" \xD7 30"', category: "Decor" },
    { id: "curtain", name: "Linen Curtain Pair", sub: 'Natural \xB7 50" \xD7 96"', price: [90, 145, 240], badge: "In stock", img: RM_IMG.curtain, dims: '50" \xD7 96" per panel', category: "Decor" }
  ];
  var RM_TIERS = [
    { key: "Essential", label: "Essential", delivery: 0, note: "Well-made basics, ready to ship" },
    { key: "Balanced", label: "Balanced", delivery: 540, note: "Our most-chosen mix of stock and made-to-order" },
    { key: "Signature", label: "Signature", delivery: 890, note: "Designer pieces, premium finishes" }
  ];
  function rmPrice(product, tierIndex) {
    return product.price[tierIndex];
  }
  function rmTotals(tierIndex) {
    const furniture = RM_PRODUCTS.reduce((s, p) => s + p.price[tierIndex], 0);
    const tier = RM_TIERS[tierIndex];
    const tax = Math.round((furniture + tier.delivery) * 0.08875);
    return { furniture, delivery: tier.delivery, tax, total: furniture + tier.delivery + tax };
  }
  function rmMoney(n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  }
  var RM_SCREENS = [
    { id: "A1", group: "Entry", name: "Onboarding & Sign in", cn: "\u54C1\u724C\u9996\u5C4F\u4E0E\u767B\u5F55", note: "A quiet editorial first impression. Three ways in, plus a guest path for people who only want to browse.", noteCn: "\u7528\u6742\u5FD7\u5F0F\u7684\u7B2C\u4E00\u5370\u8C61\u5EFA\u7ACB\u54C1\u724C\u4FE1\u4EFB\uFF0C\u4E09\u79CD\u767B\u5F55\u65B9\u5F0F\u5916\u4FDD\u7559\u8BBF\u5BA2\u8DEF\u5F84\u3002" },
    { id: "A2", group: "Entry", name: "Home", cn: "\u9996\u9875", note: "Three design entries sit above the returning user's last design, then inspiration \u2014 the same hierarchy a first-time visitor needs.", noteCn: "\u4E09\u4E2A\u8BBE\u8BA1\u5165\u53E3 + \u672A\u5B8C\u6210\u65B9\u6848 + \u7075\u611F\u7011\u5E03\uFF0C\u9996\u6B21\u4E0E\u56DE\u8BBF\u7528\u6237\u5171\u7528\u4E00\u5957\u5C42\u7EA7\u3002" },
    { id: "B1", group: "Design", name: "Capture", cn: "\u62CD\u6444\u623F\u95F4", note: "One photo is the whole input. Guidance is drawn on the viewfinder, not explained in copy.", noteCn: "\u4E00\u5F20\u7167\u7247\u5C31\u662F\u5168\u90E8\u8F93\u5165\uFF0C\u6307\u5F15\u76F4\u63A5\u753B\u5728\u53D6\u666F\u6846\u4E0A\u3002" },
    { id: "B2", group: "Design", name: "Space & Style", cn: "\u7A7A\u95F4\u4E0E\u98CE\u683C", note: "Room, style, budget and two switches. Budget as a taste decision, not a slider.", noteCn: "\u7A7A\u95F4/\u98CE\u683C/\u9884\u7B97\u6863 + \u4E24\u4E2A\u5F00\u5173\uFF0C\u9884\u7B97\u6863\u505A\u6210\u5BA1\u7F8E\u9009\u62E9\u800C\u975E\u6ED1\u6746\u3002" },
    { id: "B3", group: "Design", name: "Generating", cn: "\u751F\u6210\u4E2D", note: "Four honest steps \u2014 the wait shows real work: matching SKUs, pricing, lead times.", noteCn: "\u56DB\u6B65\u771F\u5B9E\u8FDB\u5EA6\uFF0C\u628A\u7B49\u5F85\u53D8\u6210\u53EF\u89C1\u7684\u5DE5\u4F5C\u8FC7\u7A0B\u3002" },
    { id: "B4", group: "Design", name: "Design Result", cn: "\u8BBE\u8BA1\u65B9\u6848", note: "Before/after drag compare, budget tiers with a live total, and a cost breakdown that includes duties.", noteCn: "\u524D\u540E\u5BF9\u6BD4\u53EF\u62D6\u52A8\uFF0C\u9884\u7B97\u5207\u6362\u8054\u52A8\u603B\u4EF7\u4E0E\u660E\u7EC6\u3002" },
    { id: "B5", group: "Design", name: "Shop the Look", cn: "\u9009\u54C1\u6E05\u5355", note: "The selections board: numbered pins tied to a list you can actually buy, one tap to add all.", noteCn: "\u53EF\u6267\u884C\u7684\u9009\u54C1\u677F\uFF1A\u56FE\u4E0A\u7F16\u53F7\u4E0E\u6E05\u5355\u8054\u52A8\uFF0C\u4E00\u952E\u52A0\u5165\u5168\u90E8\u3002" },
    { id: "B6", group: "Design", name: "Swap Item", cn: "\u8F6F\u88C5\u66FF\u6362", note: "Swap one piece and see the price delta before the design updates.", noteCn: "\u66FF\u6362\u5355\u4EF6\u5148\u770B\u4EF7\u5DEE\uFF0C\u518D\u66F4\u65B0\u65B9\u6848\u3002" },
    { id: "B7", group: "Design", name: "Floor Plan Design", cn: "\u6237\u578B\u56FE\u8BBE\u8BA1", note: "The whole home: rooms detected with square footage, per-room budget allocation.", noteCn: "\u6574\u5C4B\u8BBE\u8BA1\uFF1A\u8BC6\u522B\u623F\u95F4\u4E0E\u9762\u79EF\uFF0C\u9884\u7B97\u6309\u623F\u95F4\u5206\u914D\u3002" },
    { id: "C1", group: "Shop", name: "Shop", cn: "\u5546\u57CE", note: "Inspiration and inventory in one grid; every look can be bought as a set.", noteCn: "\u7075\u611F\u4E0E\u5546\u54C1\u540C\u4E00\u4FE1\u606F\u6D41\uFF0C\u6574\u5957 look \u53EF\u76F4\u63A5\u4E70\u9F50\u3002" },
    { id: "C2", group: "Shop", name: "Product Detail", cn: "\u5546\u54C1\u8BE6\u60C5", note: "US measurements, compliance labels, lead time and installation \u2014 the facts a $2k sofa needs.", noteCn: "\u7F8E\u5236\u5C3A\u5BF8\u3001\u5408\u89C4\u6807\u7B7E\u3001\u4EA4\u671F\u4E0E\u5B89\u88C5\uFF0C\u6491\u8D77\u9AD8\u5BA2\u5355\u51B3\u7B56\u3002" },
    { id: "C3", group: "Shop", name: "Cart", cn: "\u8D2D\u7269\u8F66", note: "Grouped by room so a cart still reads like a design, not a pile of SKUs.", noteCn: "\u6309\u623F\u95F4\u5206\u7EC4\uFF0C\u8D2D\u7269\u8F66\u4ECD\u50CF\u4E00\u4E2A\u65B9\u6848\u3002" },
    { id: "C4", group: "Shop", name: "Checkout", cn: "\u7ED3\u7B97", note: "Address, install level, payment, time window \u2014 plus CCPA and returns in plain words.", noteCn: "\u5730\u5740/\u5B89\u88C5\u7B49\u7EA7/\u652F\u4ED8/\u65F6\u95F4\u7A97\uFF0C\u5408\u89C4\u4E0E\u9000\u8D27\u7528\u767D\u8BDD\u8BF4\u6E05\u3002" },
    { id: "C5", group: "Shop", name: "Order Confirmed", cn: "\u4E0B\u5355\u6210\u529F", note: "Confirmation that already previews the long lead time instead of hiding it.", noteCn: "\u786E\u8BA4\u9875\u5C31\u9884\u544A\u957F\u4EA4\u671F\uFF0C\u4E0D\u628A\u7B49\u5F85\u7559\u5230\u540E\u9762\u624D\u8BF4\u3002" },
    { id: "D1", group: "Track & Account", name: "Projects", cn: "\u6211\u7684\u9879\u76EE", note: "Designs, orders and saved rooms in one place; each card leads back to shopping.", noteCn: "\u65B9\u6848/\u8BA2\u5355/\u623F\u95F4\u4E09\u5408\u4E00\uFF0C\u6BCF\u5F20\u5361\u90FD\u80FD\u56DE\u5230\u8D2D\u4E70\u3002" },
    { id: "D2", group: "Track & Account", name: "Order Tracking", cn: "\u8BA2\u5355\u5168\u94FE\u8DEF", note: "Six real fulfillment nodes, with the delay stated plainly and a new ETA.", noteCn: "\u516D\u4E2A\u771F\u5B9E\u5C65\u7EA6\u8282\u70B9\uFF0C\u5F02\u5E38\u5EF6\u8BEF\u76F4\u63A5\u8BF4\u660E\u5E76\u7ED9\u65B0 ETA\u3002" },
    { id: "D3", group: "Track & Account", name: "Project Progress", cn: "\u4EA4\u4ED8\u8282\u70B9", note: "Soft furnishing and full renovation tracked on separate rails; one clear next action.", noteCn: "\u8F6F\u88C5\u4E0E\u5168\u6848\u4E24\u6761\u72EC\u7ACB\u8FDB\u5EA6\u8F68\uFF0C\u660E\u786E\u4E0B\u4E00\u6B65\u52A8\u4F5C\u3002" },
    { id: "D4", group: "Track & Account", name: "Profile", cn: "\u6211\u7684", note: "Ideabooks, orders, credits and privacy in one list \u2014 Houzz's library, consumer-sized.", noteCn: "\u6536\u85CF/\u8BA2\u5355/\u6B21\u6570/\u9690\u79C1\u4E00\u5C4F\uFF0C\u628A Houzz \u7684\u56FE\u5E93\u538B\u7F29\u5230\u6D88\u8D39\u7EA7\u3002" },
    { id: "D5", group: "Track & Account", name: "Designer Consult", cn: "\u8BBE\u8BA1\u5230\u5BB6", note: "Human help at the moment the AI stops being enough: a quote from the estimating team.", noteCn: "AI \u4E0D\u591F\u7528\u65F6\u7684\u4EBA\u5DE5\u5165\u53E3\uFF1A\u9884\u7B97\u56E2\u961F\u51FA\u7CBE\u51C6\u62A5\u4EF7\u3002" },
    { id: "D6", group: "Track & Account", name: "Credits & Membership", cn: "\u6B21\u6570\u4E0E\u4F1A\u5458", note: "Credits earned by inviting, not bought; membership price left open until launch.", noteCn: "\u6B21\u6570\u9760\u9080\u8BF7\u83B7\u5F97\uFF0C\u4F1A\u5458\u4EF7\u683C\u7559\u5230\u4E0A\u7EBF\u518D\u5B9A\u3002" }
  ];
  var RM_GROUPS = [
    { key: "Overview", label: "Overview", cn: "\u603B\u89C8", ids: [] },
    { key: "Entry", label: "Entry", cn: "\u8FDB\u5165", ids: ["A1", "A2"] },
    { key: "Design", label: "Design", cn: "\u8BBE\u8BA1", ids: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"] },
    { key: "Shop", label: "Shop", cn: "\u5546\u57CE", ids: ["C1", "C2", "C3", "C4", "C5"] },
    { key: "Track & Account", label: "Track & Account", cn: "\u8FFD\u8E2A\u4E0E\u8D26\u6237", ids: ["D1", "D2", "D3", "D4", "D5", "D6"] }
  ];
  var RM_LOOKS = [
    { title: "Warm Modern Living", meta: "8 pieces \xB7 from $4,769", img: RM_IMG.after },
    { title: "Soft Coastal Bedroom", meta: "6 pieces \xB7 from $3,180", img: RM_IMG.coastal },
    { title: "Japandi Quiet", meta: "7 pieces \xB7 from $5,240", img: RM_IMG.bedroom }
  ];
  Object.assign(window, {
    RM_IMG,
    RM_PRODUCTS,
    RM_TIERS,
    RM_SCREENS,
    RM_GROUPS,
    RM_LOOKS,
    rmPrice,
    rmTotals,
    rmMoney
  });
})();
