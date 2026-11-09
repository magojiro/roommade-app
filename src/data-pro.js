/* RoomMade Pro — B2B staging rental line: screens, sets, listings, billing. */

const RM_PRO_SCREENS = [
  { id: "E1", group: "Pro entry", name: "Trade Landing", cn: "商户入口", note: "A separate front door for agents and stagers: rent whole sets, not capex. Consumer brand intact, business promise explicit.", noteCn: "给经纪与软装公司的独立入口：按月租整套，不压货。" },
  { id: "E2", group: "Pro entry", name: "Business Onboarding", cn: "商户认证", note: "Four inputs a credit team actually needs: business type, service ZIPs, tax ID, insurance.", noteCn: "授信真正需要的四项：业态、服务区、税号、保险。" },
  { id: "E3", group: "Pro entry", name: "Trade Desk", cn: "商户工作台", note: "The daily home: listings in flight, rent burn, pieces out, and what needs a decision today.", noteCn: "商户日常首页：在租盘、月租开销、在外件数与待办。" },
  { id: "F1", group: "Rent", name: "Rent Sets", cn: "租赁目录", note: "Sets, not single SKUs — filter by availability on the install date, not by wishlist.", noteCn: "按整套而非单品出租，筛选条件是安装日是否有货。" },
  { id: "F2", group: "Rent", name: "Set Detail", cn: "套系详情", note: "Monthly rate, term, what's covered, and the exact pieces a crew will carry in.", noteCn: "月租、租期、包含服务与上门清单。" },
  { id: "F3", group: "Rent", name: "Reserve Set", cn: "租赁下单", note: "Math a stager can defend to a client: first month, waiver, tax, recurring rate, term discount.", noteCn: "软装公司能向客户解释的账单：首月、保险、税、续租价。" },
  { id: "G1", group: "Rental ops", name: "Install Scheduling", cn: "安装排期", note: "Building access is the real blocker for installs — COI, elevator, windows, lockbox.", noteCn: "安装真正的卡点是楼宇准入：保险、电梯、时段、钥匙。" },
  { id: "G2", group: "Rental ops", name: "Reservation Confirmed", cn: "预订成功", note: "Confirmation doubles as the agreement: term, install, swap allowance, de-stage date.", noteCn: "确认页即合同摘要：租期、安装、换件额度、撤场日。" },
  { id: "G3", group: "Rental ops", name: "Rental Hub", cn: "在租管理", note: "One card per listing: days left, pieces out, and the three moves that matter — extend, swap, de-stage.", noteCn: "每个盘一张卡：剩余天数、在外件数与三个关键动作。" },
  { id: "H1", group: "Billing", name: "Swap & Restock", cn: "换件补货", note: "Swaps are the daily reality of staging; one per month is included, priced after that.", noteCn: "换件是软装的日常：每月一次免费，之后计价。" },
  { id: "H2", group: "Billing", name: "De-stage & Return", cn: "撤场退租", note: "Pickup booked against a closing date, condition checked item by item, final invoice previewed.", noteCn: "按过户日约撤场，逐件验损，预览终期账单。" },
  { id: "H3", group: "Billing", name: "Billing & Account", cn: "账务与账户", note: "Net 30, invoices, seats and documents — the paperwork a brokerage finance team asks for.", noteCn: "Net 30、账单、席位与资质文件，经纪财务真正要的东西。" }
];

const RM_PRO_GROUPS = [
  { key: "Pro entry", label: "Pro · entry", cn: "商户入口", ids: ["E1", "E2", "E3"] },
  { key: "Rent", label: "Pro · rent", cn: "租赁", ids: ["F1", "F2", "F3"] },
  { key: "Ops", label: "Pro · rental ops", cn: "履约", ids: ["G1", "G2", "G3"] },
  { key: "Billing", label: "Pro · billing", cn: "账务", ids: ["H1", "H2", "H3"] }
];

const RM_SETS = [
  { id: "set-living", name: "Warm Modern Living", room: "Living room", pieces: 8, monthly: 1180, img: "after", avail: "Nov 14", stock: "3 in New York", tag: "Most rented" },
  { id: "set-bedroom", name: "Soft Coastal Bedroom", room: "Bedroom", pieces: 6, monthly: 860, img: "coastal", avail: "Nov 8", stock: "5 in New York" },
  { id: "set-dining", name: "Mid-Century Dining", room: "Dining", pieces: 7, monthly: 940, img: "dining", avail: "Nov 21", stock: "2 in New York" },
  { id: "set-office", name: "Japandi Home Office", room: "Office", pieces: 5, monthly: 620, img: "office", avail: "Now", stock: "6 in New York" },
  { id: "set-2br", name: "Full Listing Refresh · 2BR", room: "Whole home", pieces: 24, monthly: 3240, img: "bedroom", avail: "Nov 18", stock: "1 in New York" },
  { id: "set-entry", name: "Entry & Console", room: "Entry", pieces: 4, monthly: 390, img: "entry", avail: "Now", stock: "8 in New York" }
];

const RM_PRO_LISTINGS = [
  { id: "L-1180", address: "214 Hoyt St, Apt 4B", city: "Brooklyn, NY 11217", price: "$1.85M", status: "Staged", set: "set-living", monthly: 1180, pieces: 8, daysLeft: 68, install: "Oct 12", deStage: "Feb 12", term: 3, photo: "after", client: "Corcoran · D. Marsh" },
  { id: "L-1174", address: "88 Pineapple Walk", city: "Brooklyn, NY 11201", price: "$940K", status: "Install Nov 18", set: "set-bedroom", monthly: 860, pieces: 6, daysLeft: 0, install: "Nov 18", deStage: "Feb 18", term: 3, photo: "coastal", client: "Compass · A. Reyes" },
  { id: "L-1169", address: "410 W 24th St, 6C", city: "New York, NY 10011", price: "$2.4M", status: "Draft", set: "set-dining", monthly: 0, pieces: 0, daysLeft: 0, install: "—", deStage: "—", term: 3, photo: "dining", client: "Douglas Elliman · J. Park" }
];

const RM_RENTAL_TERMS = [
  { months: 3, discount: 0, note: "Minimum term" },
  { months: 6, discount: 0.05, note: "Save 5%" },
  { months: 12, discount: 0.10, note: "Save 10%" }
];

const RM_PRO_ADDONS = [
  { id: "art", name: "Art & mirror package", per: 140, img: "art" },
  { id: "rug", name: "Rug layer set", per: 90, img: "rug" },
  { id: "lamp", name: "Lighting upgrade", per: 60, img: "lamp" }
];

function rmMonthly(base, months) {
  const t = RM_RENTAL_TERMS.find((x) => x.months === months) || RM_RENTAL_TERMS[0];
  return Math.round(base * (1 - t.discount));
}
function rmProTotals(base, months, addonIds = []) {
  const rent = rmMonthly(base, months);
  const addons = RM_PRO_ADDONS.filter((a) => addonIds.includes(a.id)).reduce((s, a) => s + a.per, 0);
  const monthly = rent + addons;
  const waiver = Math.round(monthly * 0.08);
  const tax = Math.round((monthly + waiver) * 0.08875);
  const dueToday = monthly + waiver + tax;
  return { rent, addons, monthly, waiver, tax, dueToday, contract: monthly * months };
}

window.RM_SCREENS = window.RM_SCREENS.concat(RM_PRO_SCREENS);
window.RM_GROUPS = window.RM_GROUPS.concat(RM_PRO_GROUPS);

Object.assign(window, {
  RM_PRO_SCREENS, RM_PRO_GROUPS, RM_SETS, RM_PRO_LISTINGS, RM_RENTAL_TERMS, RM_PRO_ADDONS,
  rmMonthly, rmProTotals
});
