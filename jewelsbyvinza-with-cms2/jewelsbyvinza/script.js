/* ===========================================================
   JEWEL'S BY VINZA — Site logic
=========================================================== */

// ---------- CONFIG ----------
const WHATSAPP_NUMBER = "923291872757"; // 0329-1872757 in international format
const FREE_DELIVERY_THRESHOLD = 3000;

// Independence Day sale — 10% off site-wide, countdown runs until 14 August (Pakistan time)
const INDEPENDENCE_SALE = {
  active: false,
  discountPercent: 10,
  endDate: new Date("2026-08-14T00:00:00+05:00")
};
function isIndependenceSaleActive(){
  return INDEPENDENCE_SALE.active && new Date() < INDEPENDENCE_SALE.endDate;
}
function getEffectivePrice(p){
  if (isIndependenceSaleActive()){
    return Math.round(p.price * (1 - INDEPENDENCE_SALE.discountPercent / 100));
  }
  return p.price;
}

// ---------- PRODUCT DATA ----------
// To add a new product: copy an object below, give it a new unique id,
// update name/price/category/images (put new photos in the /images folder).
// Bundled fallback catalog — used only if /data/products.json (managed via /admin CMS) hasn't loaded yet or fails to fetch.
const FALLBACK_PRODUCTS = [
  {
    id: "p1",
    name: "Naidu Oval Gold Watch",
    price: 2200,
    category: "watches",
    badge: "Bestseller",
    images: ["images/p1-1.jpg", "images/p1-2.jpg"]
  },
  {
    id: "p2",
    name: "Vintage Gold Rose Oval Pendant",
    price: 999,
    category: "necklaces",
    badge: "",
    images: ["images/p2-1.jpg", "images/p2-2.jpg"]
  },
  {
    id: "p3",
    name: "XIMILI Vintage Emerald Dial Watch",
    price: 2099,
    category: "watches",
    badge: "New",
    images: ["images/p3-1.jpg", "images/p3-2.jpg", "images/p3-3.jpg"]
  },
  {
    id: "p4",
    name: "2-in-1 Magnetic Four Leaf Clover Heart Necklace",
    price: 999,
    category: "necklaces",
    badge: "",
    images: ["images/p4-1.jpg"]
  },
  {
    id: "p5",
    name: "Double Open-Heart Pendant",
    price: 850,
    category: "necklaces",
    badge: "",
    images: ["images/p5-1.jpg"]
  },
  {
    id: "p6",
    name: "Golden Crescent Moon Pendant",
    price: 999,
    category: "necklaces",
    badge: "",
    images: ["images/p6-1.jpg"]
  },
  {
    id: "p7",
    name: "Crystal Clover Necklace — Gold & Silver Duo",
    price: 1599,
    category: "necklaces",
    badge: "New",
    images: ["images/p7-1.jpg"]
  },
  {
    id: "p8",
    name: "Clear Crystal Vine Bracelet",
    price: 999,
    category: "bracelets",
    badge: "",
    images: ["images/p8-1.jpg"]
  },
  {
    id: "p9",
    name: "Blush Vine Gemstone Bracelet",
    price: 1200,
    category: "bracelets",
    badge: "",
    images: ["images/p9-1.jpg", "images/p9-2.jpg"]
  },
  {
    id: "p10",
    name: "Vintage Double Layer Tiger's Eye Necklace",
    price: 1300,
    category: "necklaces",
    badge: "",
    images: ["images/p10-1.jpg", "images/p10-2.jpg", "images/p10-3.jpg"]
  },
  {
    id: "p11",
    name: "Celestial Tiger's Eye Vintage Rings",
    price: 1299,
    category: "rings",
    badge: "",
    images: ["images/p11-1.jpg", "images/p11-2.jpg"]
  },
  {
    id: "p12",
    name: "Blossom Bloom Sculptural Bangle",
    price: 1999,
    category: "bracelets",
    badge: "",
    images: ["images/p12-1.jpg", "images/p12-2.jpg", "images/p12-3.jpg"]
  },
  {
    id: "p13",
    name: "Golden Snake Coil Bracelet Watch",
    price: 2700,
    category: "watches",
    badge: "",
    images: ["images/p13-1.jpg", "images/p13-2.jpg"]
  },
  {
    id: "p15",
    name: "Tulip Vine Necklace — Multi-Colour",
    price: 1100,
    category: "necklaces",
    badge: "New",
    images: ["images/p15-1.jpg"]
  },
  {
    id: "p16",
    name: "Naidu Oval Silver Watch",
    price: 2100,
    category: "watches",
    badge: "New",
    images: ["images/p16-1.jpg"]
  },
  {
    id: "p17",
    name: "Gold Plated Rectangle Pavé Ring",
    price: 780,
    category: "rings",
    badge: "New",
    images: ["images/p17-1.jpg"]
  },
  {
    id: "p18",
    name: "Round Halo Solitaire Ring",
    price: 799,
    category: "rings",
    badge: "New",
    images: ["images/p18-1.jpg"]
  },
  {
    id: "p19",
    name: "Twin Flower Split Band Ring",
    price: 600,
    category: "rings",
    badge: "New",
    images: ["images/p19-1.jpg"]
  },
  {
    id: "p20",
    name: "Rotating Anti-Stress Gemstone Ring",
    price: 850,
    category: "rings",
    badge: "New",
    images: ["images/p20-1.jpg"]
  },
  {
    id: "p21",
    name: "Round Bezel Solitaire Pendant",
    price: 950,
    category: "necklaces",
    badge: "New",
    images: ["images/p21-1.jpg"]
  },
  {
    id: "p22",
    name: "Brown Glossy Almond Press-On Nails (24pcs)",
    price: 600,
    category: "nails",
    badge: "New",
    images: ["images/p22-1.jpg", "images/p22-2.jpg"]
  },
  {
    id: "p23",
    name: "Dreamy Ombre Pink Cat Eye Press-On Nails (24pcs)",
    price: 800,
    category: "nails",
    badge: "New",
    images: ["images/p23-1.jpg", "images/p23-2.jpg"]
  },
  {
    id: "p24",
    name: "Nude French Manicure Coffin Nails (30pcs)",
    price: 800,
    category: "nails",
    badge: "New",
    images: ["images/p24-1.jpg"]
  },
  {
    id: "p25",
    name: "Cherry Wine Cat Eye Crystal Nails (24pcs)",
    price: 850,
    category: "nails",
    badge: "New",
    images: ["images/p25-1.jpg"]
  },
  {
    id: "p26",
    name: "Y2K Polka Dot Cat Eye Press-On Nails (10pcs)",
    price: 900,
    category: "nails",
    badge: "New",
    images: ["images/p26-1.jpg"]
  },
  {
    id: "p27",
    name: "Butterfly Gel Nail Stickers (10pcs)",
    price: 700,
    category: "nails",
    badge: "New",
    images: ["images/p27-1.jpg"]
  },
  {
    id: "p28",
    name: "Pearl Chrome Almond Press-On Nails (24pcs)",
    price: 600,
    category: "nails",
    badge: "New",
    images: ["images/p28-1.jpg"]
  }
];

let PRODUCTS = FALLBACK_PRODUCTS;

async function loadProducts(){
  try {
    const res = await fetch("data/products.json", { cache: "no-store" });
    if (!res.ok) throw new Error("products.json not found");
    const data = await res.json();
    if (Array.isArray(data.products) && data.products.length){
      PRODUCTS = data.products;
    }
  } catch (err){
    // CMS data file missing/unreachable (e.g. first deploy before any /admin save) — silently keep FALLBACK_PRODUCTS.
    PRODUCTS = FALLBACK_PRODUCTS;
  }
}

// ---------- HELPERS ----------
const fmtPrice = (n) => "Rs. " + n.toLocaleString("en-PK");
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function getCart(){
  try{ return JSON.parse(localStorage.getItem("jbv_cart") || "[]"); }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem("jbv_cart", JSON.stringify(cart));
  updateCartUI();
}
function addToCart(id, qty = 1){
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing){ existing.qty += qty; }
  else { cart.push({ id, qty }); }
  saveCart(cart);
}
function updateQty(id, delta){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){
    saveCart(cart.filter(i => i.id !== id));
  } else {
    saveCart(cart);
  }
}
function removeFromCart(id){
  saveCart(getCart().filter(i => i.id !== id));
}
function cartTotal(cart){
  return cart.reduce((sum, i) => {
    const p = PRODUCTS.find(p => p.id === i.id);
    return sum + (p ? getEffectivePrice(p) * i.qty : 0);
  }, 0);
}

// ---------- INDEPENDENCE DAY COUNTDOWN ----------
function updateCountdown(){
  const banner = $("#indepBanner");
  const announce = $("#announceStrip");
  if (!isIndependenceSaleActive()){
    if (banner) banner.style.display = "none";
    if (announce) announce.style.display = "none";
    document.body.classList.add("no-announce");
    return;
  }
  document.body.classList.remove("no-announce");
  const now = new Date();
  const diff = INDEPENDENCE_SALE.endDate - now;
  if (diff <= 0){
    if (banner) banner.style.display = "none";
    if (announce) announce.style.display = "none";
    return;
  }
  if (banner) banner.style.display = "";
  if (announce) announce.style.display = "";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  const pad = (n) => String(n).padStart(2, "0");
  const dEl = $("#cdDays"), hEl = $("#cdHours"), mEl = $("#cdMins"), sEl = $("#cdSecs");
  if (dEl) dEl.textContent = pad(days);
  if (hEl) hEl.textContent = pad(hours);
  if (mEl) mEl.textContent = pad(mins);
  if (sEl) sEl.textContent = pad(secs);
}

function generateRiseParticles(){
  const field = $("#riseParticles");
  if (!field) return;
  const count = window.innerWidth < 600 ? 10 : 18;
  let html = "";
  for (let i = 0; i < count; i++){
    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 6;
    const delay = Math.random() * 8;
    html += `<span class="rise-dot" style="left:${left}%; animation-duration:${duration}s; animation-delay:${delay}s;"></span>`;
  }
  field.innerHTML = html;
}

// ---------- CATEGORY TILES (home page) ----------
const CATEGORY_INFO = [
  { key: "watches", label: "Watches", href: "watches.html", image: "images/p3-1.jpg" },
  { key: "necklaces", label: "Necklaces", href: "necklaces.html", image: "images/p7-1.jpg" },
  { key: "bracelets", label: "Bracelets", href: "bracelets.html", image: "images/p12-1.jpg" },
  { key: "rings", label: "Rings", href: "rings.html", image: "images/p18-1.jpg" },
  { key: "nails", label: "Nails", href: "nails.html", image: "images/p23-1.jpg" }
];

function renderCategoryTiles(){
  const wrap = $("#categoryTiles");
  if (!wrap) return;
  wrap.innerHTML = CATEGORY_INFO.map(c => {
    const count = PRODUCTS.filter(p => p.category === c.key).length;
    return `
    <a href="${c.href}" class="category-tile">
      <div class="tile-media"><img src="${c.image}" alt="${c.label} - Jewel's by Vinza Pakistan" loading="lazy"></div>
      <div class="tile-label">
        <span class="tile-name">${c.label}</span>
        <span class="tile-count">${count} pieces</span>
      </div>
    </a>`;
  }).join("");
}

// ---------- BESTSELLERS (home page) ----------
const BESTSELLER_IDS = ["p13", "p3", "p9", "p18", "p7", "p23", "p1", "p12"];

function renderBestsellers(){
  const grid = $("#bestsellerGrid");
  if (!grid) return;
  const items = BESTSELLER_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  grid.innerHTML = items.map(productCardHTML).join("");
  initCardSliders();
  bindCardButtons();
  requestAnimationFrame(() => {
    $$(".product-card").forEach(c => c.classList.add("reveal"));
  });
}

// ---------- TOAST ----------
let toastTimer;
function showToast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- PRODUCT GRID RENDER ----------
function productCardHTML(p, index){
  const slides = p.images.map(src => `<img src="${src}" alt="${p.name} - ${p.category} online in Pakistan - Jewel's by Vinza" loading="lazy" draggable="false">`).join("");
  const dots = p.images.length > 1
    ? `<div class="card-dots">${p.images.map((_,i)=>`<span class="dot ${i===0?'active':''}" data-i="${i}"></span>`).join("")}</div>`
    : "";
  const badge = p.badge ? `<span class="card-badge">${p.badge}</span>` : "";
  const indepActive = isIndependenceSaleActive();
  const onSale = indepActive || (p.originalPrice && p.originalPrice > p.price);
  let originalForDisplay, currentForDisplay, discountPct;
  if (indepActive){
    originalForDisplay = p.price;
    currentForDisplay = getEffectivePrice(p);
    discountPct = INDEPENDENCE_SALE.discountPercent;
  } else if (p.originalPrice && p.originalPrice > p.price){
    originalForDisplay = p.originalPrice;
    currentForDisplay = p.price;
    discountPct = Math.round((1 - p.price / p.originalPrice) * 100);
  }
  const saleBadge = onSale
    ? (indepActive ? `<span class="card-badge-sale indep">🇵🇰 ${discountPct}% OFF</span>` : `<span class="card-badge-sale">${discountPct}% OFF</span>`)
    : "";
  const priceHTML = onSale
    ? `<span class="card-price-row"><span class="card-price-original">${fmtPrice(originalForDisplay)}</span><span class="card-price">${fmtPrice(currentForDisplay)}</span></span>`
    : `<span class="card-price">${fmtPrice(p.price)}</span>`;
  return `
  <div class="product-card" data-id="${p.id}" data-cat="${p.category}" style="animation-delay:${(index%6)*70}ms">
    <div class="card-media" data-slides="${p.images.length}">
      <div class="card-slider">${slides}</div>
      ${dots}
      ${badge}
      ${saleBadge}
    </div>
    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <h3 class="card-name">${p.name}</h3>
      ${p.description ? `<p class="card-desc">${p.description}</p>` : ""}
      ${priceHTML}
      <div class="card-actions">
        <button class="btn btn-outline add-cart-btn" data-id="${p.id}">Add to Cart</button>
        <button class="btn btn-gold buy-now-btn" data-id="${p.id}">Buy Now</button>
      </div>
    </div>
  </div>`;
}

function renderGrid(filter = "all"){
  const grid = $("#productGrid");
  if (!grid) return;
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(productCardHTML).join("");
  initCardSliders();
  bindCardButtons();
  requestAnimationFrame(() => {
    $$(".product-card").forEach(c => c.classList.add("reveal"));
  });
}

// ---------- SWIPEABLE CARD SLIDERS ----------
function initCardSliders(){
  $$(".card-media").forEach(media => {
    const slider = media.querySelector(".card-slider");
    const dots = media.querySelectorAll(".card-dots .dot");
    const count = parseInt(media.dataset.slides, 10);
    if (count <= 1) return;
    let current = 0;
    let startX = 0, deltaX = 0, dragging = false;

    function goTo(i){
      current = Math.max(0, Math.min(count - 1, i));
      slider.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle("active", di === current));
    }

    media.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX; dragging = true;
      slider.style.transition = "none";
    }, { passive: true });
    media.addEventListener("touchmove", (e) => {
      if (!dragging) return;
      deltaX = e.touches[0].clientX - startX;
      slider.style.transform = `translateX(calc(-${current * 100}% + ${deltaX}px))`;
    }, { passive: true });
    media.addEventListener("touchend", () => {
      dragging = false;
      slider.style.transition = "";
      if (deltaX > 40) goTo(current - 1);
      else if (deltaX < -40) goTo(current + 1);
      else goTo(current);
      deltaX = 0;
    });

    // Click dots directly
    dots.forEach((d, di) => d.addEventListener("click", (e) => {
      e.stopPropagation();
      goTo(di);
    }));

    // Desktop: click left/right half of image to navigate
    media.addEventListener("click", (e) => {
      const rect = media.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (clickX < rect.width / 2) goTo(current - 1);
      else goTo(current + 1);
    });
  });
}

// ---------- BUTTON BINDINGS ----------
function bindCardButtons(){
  $$(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id, 1);
      const p = PRODUCTS.find(p => p.id === btn.dataset.id);
      showToast(`${p.name} added to bag`);
    });
  });
  $$(".buy-now-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id, 1);
      openCart();
    });
  });
}

// ---------- FILTER CHIPS ----------
function bindFilters(){
  $$(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $$(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderGrid(chip.dataset.filter);
    });
  });
  $$("[data-filter-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const f = link.dataset.filterLink;
      const chip = document.querySelector(`.filter-chip[data-filter="${f}"]`);
      if (chip) chip.click();
      const shopEl = document.getElementById("shop");
      if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ---------- CART DRAWER UI ----------
function updateCartUI(){
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $("#cartCount").textContent = count;

  const itemsWrap = $("#cartItems");
  const emptyState = $("#cartEmpty");
  const footer = $("#cartFooter");

  if (cart.length === 0){
    itemsWrap.innerHTML = "";
    itemsWrap.appendChild(emptyState);
    emptyState.style.display = "block";
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  itemsWrap.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return "";
    return `
    <div class="cart-item" data-id="${p.id}">
      <img src="${p.images[0]}" alt="${p.name}">
      <div class="ci-info">
        <span class="ci-name">${p.name}</span>
        <span class="ci-price">${fmtPrice(getEffectivePrice(p))}</span>
        <div class="ci-controls">
          <button class="qty-btn qty-minus">−</button>
          <span class="ci-qty">${item.qty}</span>
          <button class="qty-btn qty-plus">+</button>
          <button class="ci-remove">Remove</button>
        </div>
      </div>
    </div>`;
  }).join("");

  const subtotal = cartTotal(cart);
  $("#cartSubtotal").textContent = fmtPrice(subtotal);

  const noteEl = $("#cartNote");
  if (noteEl){
    if (subtotal >= FREE_DELIVERY_THRESHOLD){
      noteEl.innerHTML = `🎉 You've unlocked <strong>free delivery</strong> on this order!`;
      noteEl.classList.add("unlocked");
    } else {
      const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
      noteEl.innerHTML = `Add <strong>${fmtPrice(remaining)}</strong> more to unlock free delivery.`;
      noteEl.classList.remove("unlocked");
    }
  }

  itemsWrap.querySelectorAll(".cart-item").forEach(row => {
    const id = row.dataset.id;
    row.querySelector(".qty-plus").addEventListener("click", () => updateQty(id, 1));
    row.querySelector(".qty-minus").addEventListener("click", () => updateQty(id, -1));
    row.querySelector(".ci-remove").addEventListener("click", () => {
      removeFromCart(id);
      showToast("Removed from bag");
    });
  });
}

function openCart(){
  $("#cartDrawer").classList.add("open");
  $("#cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart(){
  $("#cartDrawer").classList.remove("open");
  $("#cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- WHATSAPP CHECKOUT ----------
function buildWhatsAppMessage(customer){
  const cart = getCart();
  if (cart.length === 0) return "";
  let msg = "Hello Jewel's by Vinza! I'd like to order:\n\n";
  cart.forEach(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return;
    msg += `• ${p.name} (x${item.qty}) — ${fmtPrice(getEffectivePrice(p) * item.qty)}\n`;
  });
  msg += `\nTotal: ${fmtPrice(cartTotal(cart))}\n`;
  if (cartTotal(cart) >= FREE_DELIVERY_THRESHOLD){
    msg += `(Free delivery applies — order is above ${fmtPrice(FREE_DELIVERY_THRESHOLD)})\n`;
  }
  msg += `\n— My Details —\nName: ${customer.name}\nPhone: ${customer.phone}\nAddress: ${customer.address}`;
  if (customer.email) msg += `\nEmail: ${customer.email}`;
  msg += `\n\nPlease confirm availability and delivery details.`;
  return msg;
}

const ORDER_TRACKER_URL = "https://script.google.com/macros/s/AKfycbzjr7NyvSjlcgmss8T6dgkjXsLEBzhNgBB0v5i-FzAi8xA3Eyy59EphJAVYMJXWc2E/exec";

function logOrderToSheet(customer){
  const cart = getCart();
  const itemsText = cart.map(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    return p ? `${p.name} (x${item.qty})` : "";
  }).filter(Boolean).join(", ");

  const payload = {
    name: customer.name,
    phone: customer.phone,
    address: customer.address,
    items: itemsText,
    total: cartTotal(cart)
  };

  // Fire-and-forget — don't block or break checkout if this fails
  fetch(ORDER_TRACKER_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload)
  }).catch(() => { /* silently ignore — WhatsApp checkout still works */ });
}

function checkoutOnWhatsApp(customer){
  const msg = buildWhatsAppMessage(customer);
  if (!msg) return;
  logOrderToSheet(customer);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ---------- CHECKOUT DETAILS MODAL ----------
function openCheckoutModal(){
  $("#checkoutModalOverlay").classList.add("open");
  $("#checkoutModal").classList.add("open");
}
function closeCheckoutModal(){
  $("#checkoutModalOverlay").classList.remove("open");
  $("#checkoutModal").classList.remove("open");
}
function bindCheckoutModal(){
  $("#checkoutModalOverlay").addEventListener("click", closeCheckoutModal);
  $("#checkoutModalClose").addEventListener("click", closeCheckoutModal);
  $("#checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const customer = {
      name: $("#custName").value.trim(),
      phone: $("#custPhone").value.trim(),
      address: $("#custAddress").value.trim(),
      email: $("#custEmail").value.trim()
    };
    // remember details for next time so returning customers don't retype
    localStorage.setItem("jbv_customer", JSON.stringify(customer));
    checkoutOnWhatsApp(customer);
    closeCheckoutModal();
    closeCart();
  });
}
function prefillCheckoutForm(){
  try{
    const saved = JSON.parse(localStorage.getItem("jbv_customer") || "null");
    if (!saved) return;
    $("#custName").value = saved.name || "";
    $("#custPhone").value = saved.phone || "";
    $("#custAddress").value = saved.address || "";
    $("#custEmail").value = saved.email || "";
  } catch(e){ /* ignore */ }
}

// ---------- SEARCH ----------
const CATEGORY_PAGES = {
  watches: "watches.html",
  necklaces: "necklaces.html",
  bracelets: "bracelets.html",
  rings: "rings.html",
  nails: "nails.html"
};

function bindSearch(){
  const toggle = $("#searchToggle");
  const panel = $("#searchPanel");
  const input = $("#searchInput");
  const results = $("#searchResults");
  if (!toggle || !panel || !input || !results) return;

  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) setTimeout(() => input.focus(), 300);
  });

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q){ results.innerHTML = ""; return; }
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q));
    results.innerHTML = matches.map(p => `
      <a href="${CATEGORY_PAGES[p.category] || 'index.html'}#${p.id}" class="search-result-item" data-id="${p.id}" data-category="${p.category}">
        <img src="${p.images[0]}" alt="">
        <span class="sr-name">${p.name}</span>
        <span class="sr-price">${fmtPrice(p.price)}</span>
      </a>
    `).join("") || `<p style="color:var(--ivory-dim); font-size:.85rem; padding:10px 2px;">No pieces found.</p>`;
  });

  results.addEventListener("click", (e) => {
    const item = e.target.closest(".search-result-item");
    if (!item) return;
    const currentCategory = document.body.dataset.category;
    if (currentCategory && currentCategory === item.dataset.category){
      // Already on the right page — just scroll to it, no navigation
      e.preventDefault();
      panel.classList.remove("open");
      const card = document.querySelector(`.product-card[data-id="${item.dataset.id}"]`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // Otherwise let the link navigate normally to the category page
  });
}


// ---------- MOBILE NAV ----------
function bindNav(){
  const burger = $("#hamburgerBtn");
  const nav = $("#mainNav");
  const overlay = $("#navOverlay");

  function toggleNav(open){
    burger.classList.toggle("open", open);
    nav.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", () => toggleNav(!nav.classList.contains("open")));
  overlay.addEventListener("click", () => toggleNav(false));
  $$(".nav-link").forEach(l => l.addEventListener("click", () => toggleNav(false)));
}

// ---------- HEADER SCROLL STATE ----------
function bindHeaderScroll(){
  const header = $("#siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
}

// ---------- HERO SPARKLES ----------
function generateSparkles(){
  const field = $("#sparkleField");
  if (!field) return;
  const count = window.innerWidth < 600 ? 16 : 30;
  let html = "";
  for (let i = 0; i < count; i++){
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 3.2;
    const size = 2 + Math.random() * 2;
    html += `<span class="sparkle" style="left:${left}%; top:${top}%; animation-delay:${delay}s; width:${size}px; height:${size}px;"></span>`;
  }
  field.innerHTML = html;
}

// ---------- SCROLL REVEAL FOR PRODUCT CARDS (on re-filter) ----------
function bindCartControls(){
  $("#cartToggle").addEventListener("click", openCart);
  $("#cartCloseBtn").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#checkoutBtn").addEventListener("click", () => {
    prefillCheckoutForm();
    openCheckoutModal();
  });
  $("#cartEmptyShop").addEventListener("click", closeCart);
}

// ---------- INIT ----------
window.addEventListener("load", () => {
  const pre = $("#preloader");
  if (pre) setTimeout(() => pre.classList.add("done"), 400);
});

document.addEventListener("DOMContentLoaded", async () => {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  generateSparkles();
  generateRiseParticles();
  updateCountdown();
  setInterval(updateCountdown, 1000);

  await loadProducts(); // fetch CMS-managed catalog before any render that reads PRODUCTS

  const pageCategory = document.body.dataset.category;
  if (pageCategory){
    renderGrid(pageCategory);
  } else if ($("#productGrid")){
    renderGrid("all");
  }
  renderCategoryTiles();
  renderBestsellers();

  bindFilters();
  bindCartControls();
  bindCheckoutModal();
  bindSearch();
  bindNav();
  bindHeaderScroll();
  updateCartUI();
});
