/* RoomMade — shared sample data. All figures are illustrative. */

const RM_IMG = {
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

/* price arrays are [Essential, Balanced, Signature] */
const RM_PRODUCTS = [
  { id: "sofa", name: "Marlow 3-Seat Sofa", sub: "Bouclé · Oat", price: [1160, 1890, 3120], badge: "Made to order · 4 weeks", img: RM_IMG.sofa, dims: 'W 84" × D 36" × H 31"', category: "Furniture" },
  { id: "table", name: "Kessa Travertine Coffee Table", sub: 'Travertine · 48" round', price: [395, 640, 1050], badge: "In stock", img: RM_IMG.table, dims: 'W 48" × D 48" × H 14"', category: "Furniture" },
  { id: "rug", name: "Alder Hand-Knotted Wool Rug", sub: "Ivory / Sage · 8' × 10'", price: [330, 520, 860], badge: "In stock", img: RM_IMG.rug, dims: "8' × 10'", category: "Rugs" },
  { id: "lamp", name: "Pleated Ceramic Table Lamp", sub: "Brass · Linen shade", price: [110, 180, 295], badge: "In stock", img: RM_IMG.lamp, dims: 'H 22" × Dia 15"', category: "Lighting" },
  { id: "chair", name: "Wren Cane Accent Chair", sub: "Walnut / natural cane", price: [705, 1150, 1890], badge: "Made to order · 3 weeks", img: RM_IMG.chair, dims: 'W 28" × D 31" × H 30"', category: "Furniture" },
  { id: "sideboard", name: "Halden Walnut Sideboard", sub: "Fluted walnut · brass pulls", price: [1350, 2190, 3600], badge: "Made to order · 5 weeks", img: RM_IMG.sideboard, dims: 'W 68" × D 18" × H 28"', category: "Furniture" },
  { id: "art", name: "Quiet Field Art Print", sub: 'Oak frame · 24" × 30"', price: [250, 405, 665], badge: "In stock", img: RM_IMG.art, dims: '24" × 30"', category: "Decor" },
  { id: "curtain", name: "Linen Curtain Pair", sub: 'Natural · 50" × 96"', price: [90, 145, 240], badge: "In stock", img: RM_IMG.curtain, dims: '50" × 96" per panel', category: "Decor" }
];

const RM_TIERS = [
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

const RM_SCREENS = [
  { id: "A1", group: "Entry", name: "Onboarding & Sign in", cn: "品牌首屏与登录", note: "A quiet editorial first impression. Three ways in, plus a guest path for people who only want to browse.", noteCn: "用杂志式的第一印象建立品牌信任，三种登录方式外保留访客路径。" },
  { id: "A2", group: "Entry", name: "Home", cn: "首页", note: "Three design entries sit above the returning user's last design, then inspiration — the same hierarchy a first-time visitor needs.", noteCn: "三个设计入口 + 未完成方案 + 灵感瀑布，首次与回访用户共用一套层级。" },
  { id: "B1", group: "Design", name: "Capture", cn: "拍摄房间", note: "One photo is the whole input. Guidance is drawn on the viewfinder, not explained in copy.", noteCn: "一张照片就是全部输入，指引直接画在取景框上。" },
  { id: "B2", group: "Design", name: "Space & Style", cn: "空间与风格", note: "Room, style, budget and two switches. Budget as a taste decision, not a slider.", noteCn: "空间/风格/预算档 + 两个开关，预算档做成审美选择而非滑杆。" },
  { id: "B3", group: "Design", name: "Generating", cn: "生成中", note: "Four honest steps — the wait shows real work: matching SKUs, pricing, lead times.", noteCn: "四步真实进度，把等待变成可见的工作过程。" },
  { id: "B4", group: "Design", name: "Design Result", cn: "设计方案", note: "Before/after drag compare, budget tiers with a live total, and a cost breakdown that includes duties.", noteCn: "前后对比可拖动，预算切换联动总价与明细。" },
  { id: "B5", group: "Design", name: "Shop the Look", cn: "选品清单", note: "The selections board: numbered pins tied to a list you can actually buy, one tap to add all.", noteCn: "可执行的选品板：图上编号与清单联动，一键加入全部。" },
  { id: "B6", group: "Design", name: "Swap Item", cn: "软装替换", note: "Swap one piece and see the price delta before the design updates.", noteCn: "替换单件先看价差，再更新方案。" },
  { id: "B7", group: "Design", name: "Floor Plan Design", cn: "户型图设计", note: "The whole home: rooms detected with square footage, per-room budget allocation.", noteCn: "整屋设计：识别房间与面积，预算按房间分配。" },
  { id: "C1", group: "Shop", name: "Shop", cn: "商城", note: "Inspiration and inventory in one grid; every look can be bought as a set.", noteCn: "灵感与商品同一信息流，整套 look 可直接买齐。" },
  { id: "C2", group: "Shop", name: "Product Detail", cn: "商品详情", note: "US measurements, compliance labels, lead time and installation — the facts a $2k sofa needs.", noteCn: "美制尺寸、合规标签、交期与安装，撑起高客单决策。" },
  { id: "C3", group: "Shop", name: "Cart", cn: "购物车", note: "Grouped by room so a cart still reads like a design, not a pile of SKUs.", noteCn: "按房间分组，购物车仍像一个方案。" },
  { id: "C4", group: "Shop", name: "Checkout", cn: "结算", note: "Address, install level, payment, time window — plus CCPA and returns in plain words.", noteCn: "地址/安装等级/支付/时间窗，合规与退货用白话说清。" },
  { id: "C5", group: "Shop", name: "Order Confirmed", cn: "下单成功", note: "Confirmation that already previews the long lead time instead of hiding it.", noteCn: "确认页就预告长交期，不把等待留到后面才说。" },
  { id: "D1", group: "Track & Account", name: "Projects", cn: "我的项目", note: "Designs, orders and saved rooms in one place; each card leads back to shopping.", noteCn: "方案/订单/房间三合一，每张卡都能回到购买。" },
  { id: "D2", group: "Track & Account", name: "Order Tracking", cn: "订单全链路", note: "Six real fulfillment nodes, with the delay stated plainly and a new ETA.", noteCn: "六个真实履约节点，异常延误直接说明并给新 ETA。" },
  { id: "D3", group: "Track & Account", name: "Project Progress", cn: "交付节点", note: "Soft furnishing and full renovation tracked on separate rails; one clear next action.", noteCn: "软装与全案两条独立进度轨，明确下一步动作。" },
  { id: "D4", group: "Track & Account", name: "Profile", cn: "我的", note: "Ideabooks, orders, credits and privacy in one list — Houzz's library, consumer-sized.", noteCn: "收藏/订单/次数/隐私一屏，把 Houzz 的图库压缩到消费级。" },
  { id: "D5", group: "Track & Account", name: "Designer Consult", cn: "设计到家", note: "Human help at the moment the AI stops being enough: a quote from the estimating team.", noteCn: "AI 不够用时的人工入口：预算团队出精准报价。" },
  { id: "D6", group: "Track & Account", name: "Credits & Membership", cn: "次数与会员", note: "Credits earned by inviting, not bought; membership price left open until launch.", noteCn: "次数靠邀请获得，会员价格留到上线再定。" }
];

const RM_GROUPS = [
  { key: "Overview", label: "Overview", cn: "总览", ids: [] },
  { key: "Entry", label: "Entry", cn: "进入", ids: ["A1", "A2"] },
  { key: "Design", label: "Design", cn: "设计", ids: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"] },
  { key: "Shop", label: "Shop", cn: "商城", ids: ["C1", "C2", "C3", "C4", "C5"] },
  { key: "Track & Account", label: "Track & Account", cn: "追踪与账户", ids: ["D1", "D2", "D3", "D4", "D5", "D6"] }
];

const RM_LOOKS = [
  { title: "Warm Modern Living", meta: "8 pieces · from $4,769", img: RM_IMG.after },
  { title: "Soft Coastal Bedroom", meta: "6 pieces · from $3,180", img: RM_IMG.coastal },
  { title: "Japandi Quiet", meta: "7 pieces · from $5,240", img: RM_IMG.bedroom }
];

Object.assign(window, {
  RM_IMG, RM_PRODUCTS, RM_TIERS, RM_SCREENS, RM_GROUPS, RM_LOOKS, rmPrice, rmTotals, rmMoney
});
