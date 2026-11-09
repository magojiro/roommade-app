(() => {
  // v4/src/data-pro.js
  var RM_PRO_SCREENS = [
    { id: "E1", group: "Pro entry", name: "Trade Landing", cn: "\u5546\u6237\u5165\u53E3", note: "A separate front door for agents and stagers: rent whole sets, not capex. Consumer brand intact, business promise explicit.", noteCn: "\u7ED9\u7ECF\u7EAA\u4E0E\u8F6F\u88C5\u516C\u53F8\u7684\u72EC\u7ACB\u5165\u53E3\uFF1A\u6309\u6708\u79DF\u6574\u5957\uFF0C\u4E0D\u538B\u8D27\u3002" },
    { id: "E2", group: "Pro entry", name: "Business Onboarding", cn: "\u5546\u6237\u8BA4\u8BC1", note: "Four inputs a credit team actually needs: business type, service ZIPs, tax ID, insurance.", noteCn: "\u6388\u4FE1\u771F\u6B63\u9700\u8981\u7684\u56DB\u9879\uFF1A\u4E1A\u6001\u3001\u670D\u52A1\u533A\u3001\u7A0E\u53F7\u3001\u4FDD\u9669\u3002" },
    { id: "E3", group: "Pro entry", name: "Trade Desk", cn: "\u5546\u6237\u5DE5\u4F5C\u53F0", note: "The daily home: listings in flight, rent burn, pieces out, and what needs a decision today.", noteCn: "\u5546\u6237\u65E5\u5E38\u9996\u9875\uFF1A\u5728\u79DF\u76D8\u3001\u6708\u79DF\u5F00\u9500\u3001\u5728\u5916\u4EF6\u6570\u4E0E\u5F85\u529E\u3002" },
    { id: "F1", group: "Rent", name: "Rent Sets", cn: "\u79DF\u8D41\u76EE\u5F55", note: "Sets, not single SKUs \u2014 filter by availability on the install date, not by wishlist.", noteCn: "\u6309\u6574\u5957\u800C\u975E\u5355\u54C1\u51FA\u79DF\uFF0C\u7B5B\u9009\u6761\u4EF6\u662F\u5B89\u88C5\u65E5\u662F\u5426\u6709\u8D27\u3002" },
    { id: "F2", group: "Rent", name: "Set Detail", cn: "\u5957\u7CFB\u8BE6\u60C5", note: "Monthly rate, term, what's covered, and the exact pieces a crew will carry in.", noteCn: "\u6708\u79DF\u3001\u79DF\u671F\u3001\u5305\u542B\u670D\u52A1\u4E0E\u4E0A\u95E8\u6E05\u5355\u3002" },
    { id: "F3", group: "Rent", name: "Reserve Set", cn: "\u79DF\u8D41\u4E0B\u5355", note: "Math a stager can defend to a client: first month, waiver, tax, recurring rate, term discount.", noteCn: "\u8F6F\u88C5\u516C\u53F8\u80FD\u5411\u5BA2\u6237\u89E3\u91CA\u7684\u8D26\u5355\uFF1A\u9996\u6708\u3001\u4FDD\u9669\u3001\u7A0E\u3001\u7EED\u79DF\u4EF7\u3002" },
    { id: "G1", group: "Rental ops", name: "Install Scheduling", cn: "\u5B89\u88C5\u6392\u671F", note: "Building access is the real blocker for installs \u2014 COI, elevator, windows, lockbox.", noteCn: "\u5B89\u88C5\u771F\u6B63\u7684\u5361\u70B9\u662F\u697C\u5B87\u51C6\u5165\uFF1A\u4FDD\u9669\u3001\u7535\u68AF\u3001\u65F6\u6BB5\u3001\u94A5\u5319\u3002" },
    { id: "G2", group: "Rental ops", name: "Reservation Confirmed", cn: "\u9884\u8BA2\u6210\u529F", note: "Confirmation doubles as the agreement: term, install, swap allowance, de-stage date.", noteCn: "\u786E\u8BA4\u9875\u5373\u5408\u540C\u6458\u8981\uFF1A\u79DF\u671F\u3001\u5B89\u88C5\u3001\u6362\u4EF6\u989D\u5EA6\u3001\u64A4\u573A\u65E5\u3002" },
    { id: "G3", group: "Rental ops", name: "Rental Hub", cn: "\u5728\u79DF\u7BA1\u7406", note: "One card per listing: days left, pieces out, and the three moves that matter \u2014 extend, swap, de-stage.", noteCn: "\u6BCF\u4E2A\u76D8\u4E00\u5F20\u5361\uFF1A\u5269\u4F59\u5929\u6570\u3001\u5728\u5916\u4EF6\u6570\u4E0E\u4E09\u4E2A\u5173\u952E\u52A8\u4F5C\u3002" },
    { id: "H1", group: "Billing", name: "Swap & Restock", cn: "\u6362\u4EF6\u8865\u8D27", note: "Swaps are the daily reality of staging; one per month is included, priced after that.", noteCn: "\u6362\u4EF6\u662F\u8F6F\u88C5\u7684\u65E5\u5E38\uFF1A\u6BCF\u6708\u4E00\u6B21\u514D\u8D39\uFF0C\u4E4B\u540E\u8BA1\u4EF7\u3002" },
    { id: "H2", group: "Billing", name: "De-stage & Return", cn: "\u64A4\u573A\u9000\u79DF", note: "Pickup booked against a closing date, condition checked item by item, final invoice previewed.", noteCn: "\u6309\u8FC7\u6237\u65E5\u7EA6\u64A4\u573A\uFF0C\u9010\u4EF6\u9A8C\u635F\uFF0C\u9884\u89C8\u7EC8\u671F\u8D26\u5355\u3002" },
    { id: "H3", group: "Billing", name: "Billing & Account", cn: "\u8D26\u52A1\u4E0E\u8D26\u6237", note: "Net 30, invoices, seats and documents \u2014 the paperwork a brokerage finance team asks for.", noteCn: "Net 30\u3001\u8D26\u5355\u3001\u5E2D\u4F4D\u4E0E\u8D44\u8D28\u6587\u4EF6\uFF0C\u7ECF\u7EAA\u8D22\u52A1\u771F\u6B63\u8981\u7684\u4E1C\u897F\u3002" }
  ];
  var RM_PRO_GROUPS = [
    { key: "Pro entry", label: "Pro \xB7 entry", cn: "\u5546\u6237\u5165\u53E3", ids: ["E1", "E2", "E3"] },
    { key: "Rent", label: "Pro \xB7 rent", cn: "\u79DF\u8D41", ids: ["F1", "F2", "F3"] },
    { key: "Ops", label: "Pro \xB7 rental ops", cn: "\u5C65\u7EA6", ids: ["G1", "G2", "G3"] },
    { key: "Billing", label: "Pro \xB7 billing", cn: "\u8D26\u52A1", ids: ["H1", "H2", "H3"] }
  ];
  var RM_SETS = [
    { id: "set-living", name: "Warm Modern Living", room: "Living room", pieces: 8, monthly: 1180, img: "after", avail: "Nov 14", stock: "3 in New York", tag: "Most rented" },
    { id: "set-bedroom", name: "Soft Coastal Bedroom", room: "Bedroom", pieces: 6, monthly: 860, img: "coastal", avail: "Nov 8", stock: "5 in New York" },
    { id: "set-dining", name: "Mid-Century Dining", room: "Dining", pieces: 7, monthly: 940, img: "dining", avail: "Nov 21", stock: "2 in New York" },
    { id: "set-office", name: "Japandi Home Office", room: "Office", pieces: 5, monthly: 620, img: "office", avail: "Now", stock: "6 in New York" },
    { id: "set-2br", name: "Full Listing Refresh \xB7 2BR", room: "Whole home", pieces: 24, monthly: 3240, img: "bedroom", avail: "Nov 18", stock: "1 in New York" },
    { id: "set-entry", name: "Entry & Console", room: "Entry", pieces: 4, monthly: 390, img: "entry", avail: "Now", stock: "8 in New York" }
  ];
  var RM_PRO_LISTINGS = [
    { id: "L-1180", address: "214 Hoyt St, Apt 4B", city: "Brooklyn, NY 11217", price: "$1.85M", status: "Staged", set: "set-living", monthly: 1180, pieces: 8, daysLeft: 68, install: "Oct 12", deStage: "Feb 12", term: 3, photo: "after", client: "Corcoran \xB7 D. Marsh" },
    { id: "L-1174", address: "88 Pineapple Walk", city: "Brooklyn, NY 11201", price: "$940K", status: "Install Nov 18", set: "set-bedroom", monthly: 860, pieces: 6, daysLeft: 0, install: "Nov 18", deStage: "Feb 18", term: 3, photo: "coastal", client: "Compass \xB7 A. Reyes" },
    { id: "L-1169", address: "410 W 24th St, 6C", city: "New York, NY 10011", price: "$2.4M", status: "Draft", set: "set-dining", monthly: 0, pieces: 0, daysLeft: 0, install: "\u2014", deStage: "\u2014", term: 3, photo: "dining", client: "Douglas Elliman \xB7 J. Park" }
  ];
  var RM_RENTAL_TERMS = [
    { months: 3, discount: 0, note: "Minimum term" },
    { months: 6, discount: 0.05, note: "Save 5%" },
    { months: 12, discount: 0.1, note: "Save 10%" }
  ];
  var RM_PRO_ADDONS = [
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
    RM_PRO_SCREENS,
    RM_PRO_GROUPS,
    RM_SETS,
    RM_PRO_LISTINGS,
    RM_RENTAL_TERMS,
    RM_PRO_ADDONS,
    rmMonthly,
    rmProTotals
  });
})();
