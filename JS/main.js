// TRANSLATION DICTIONARY MATRIX (i18n)
const translations = {
  it: {
    "nav-club": "Il Club", "nav-menu": "La Carta", "nav-reviews": "Dicono di Noi", "nav-cta": "Prenota un Tavolo",
    "loader-subtitle": "SOCIAL CLUB", "hero-tagline": "Locale curato in perfetto stile modernariato anni 60/70 nel cuore di Castelfiorentino.",
    "hero-btn-explore": "Esplora il Menù", "hero-btn-insta": "Seguici su Instagram", "vibe-badge": "L'Ambiente",
    "vibe-title": "Un locale atipico per serate alternative.",
    "vibe-desc": "Passa la tua serata tra pavimenti in graniglia, banconi storici e tavolini in formica. Un'atmosfera calda, accogliente e volutamente fuori dagli schemi tradizionali, dove la cura del dettaglio incontra l'ironia.",
    "vibe-f1": "🍸 Cocktail d'Autore Chiarificati", "vibe-f2": "🍔 Street Food Alternativo Locale", "vibe-f3": "🎵 Selezione Musicale Curata",
    "menu-badge": "Menù Originale", "menu-title": "Scegli la tua combinazione", "allergen-notice": "Le informazioni sugli allergeni sono disponibili rivolgendosi al personale di sala.",
    "reviews-badge": "Dicono di Noi", "reviews-title": "Esperienze dal Club", "footer-about": "Vintage Lounge Bar & Alternative Food. Piazza Gramsci, Castelfiorentino (FI).",
    "footer-hours-title": "Orari Cucina", "footer-hours-days": "Martedì - Domenica: 19:00 - 23:30", "footer-hours-closed": "Lunedì: Chiuso",
    "footer-contact-title": "Contatti", "footer-handcrafted": "© 2026 Lami Social Club. Fatto a mano localmente.",
    "modal-title": "Chiama per Prenotare!",
    "modal-desc": "Siamo pronti ad accoglierti al Club. Clicca qui sotto per chiamarci direttamente:",
    "nav-map": "Trova il Club",
    "map-drawer-title": "Passa a Trovarci!",
    "map-drawer-desc": "Siamo nel pieno centro di Castelfiorentino in Piazza Gramsci, al piano terra dello storico Hotel Lami.",
    "map-drawer-go": "Apri in Google Maps"
  },
  en: {
    "nav-club": "The Club", "nav-menu": "The Menu", "nav-reviews": "Reviews", "nav-cta": "Book a Table",
    "loader-subtitle": "SOCIAL CLUB", "hero-tagline": "A beautifully curated lounge bar in perfect 1960s/70s mid-century modern style in the heart of Castelfiorentino.",
    "hero-btn-explore": "Explore the Menu", "hero-btn-insta": "Follow Instagram", "vibe-badge": "The Vibe",
    "vibe-title": "An atypical spot for alternative nights.",
    "vibe-desc": "Spend your evening surrounded by historic terrazzo flooring, vintage counters, and retro formica tables. A warm, welcoming atmosphere deliberately outside traditional boundaries, where attention to detail meets irony.",
    "vibe-f1": "🍸 Signature Clarified Cocktails", "vibe-f2": "🍔 Alternative Local Street Food", "vibe-f3": "🎵 Curated Music Selection",
    "menu-badge": "Original Menu", "menu-title": "Choose your combination", "allergen-notice": "Information regarding allergens is available by asking our floor staff.",
    "reviews-badge": "Testimonials", "reviews-title": "Club Experiences", "footer-about": "Vintage Lounge Bar & Alternative Food. Piazza Gramsci, Castelfiorentino (FI).",
    "footer-hours-title": "Kitchen Hours", "footer-hours-days": "Tuesday - Sunday: 7:00 PM - 11:30 PM", "footer-hours-closed": "Monday: Closed",
    "footer-contact-title": "Contacts", "footer-handcrafted": "© 2026 Lami Social Club. Handcrafted locally.",
    "modal-title": "Call to Book a Table!",
    "modal-desc": "We are ready to welcome you to the Club. Click below to call us directly:",
    "nav-map": "Find the Club",
    "map-drawer-title": "Come Visit Us!",
    "map-drawer-desc": "Located directly in the town center of Castelfiorentino inside Piazza Gramsci, right on the ground floor of Hotel Lami.",
    "map-drawer-go": "Open Google Maps"
  }
};

// MULTI-LANGUAGE DYNAMIC MENU DATABASE
// MULTI-LANGUAGE DYNAMIC MENU DATABASE WITH PRE-MAPPED IMAGE ASSETS
const menuData = {
  it: {
    cena: [
      { name: "TAGLIERE MISTO", price: "16 €", img: "https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/12/IDEA_DI_TAGLIERE_DI_SALUMI_E_FORMAGGI_PER_MILLE_OCCASIONI_SITO-9.jpg", desc: "Salumi e formaggi toscani, marmellata fatta in casa e polpette di carne con sugo al pomodoro. Servito con schiacciata alla pala e pane toscano." },
      { name: "TAGLIERE VEGETARIANO", price: "15 €", img: "assets/images/tagliere-veg.webp", desc: "Formaggi misti, e marmellata fatta in casa, hummus con carotine, polentine croccanti ai funghi e polpette vegetariane con salsa del giorno." },
      { name: "PANINO DI PULLED PORK", price: "12 €", img: "assets/images/pulled-pork.webp", desc: "Con cipolla di Certaldo caramellata e cetriolini. Servito con contorno di patatine fritte." },
      { name: "PIZZA HAMBURGER", price: "12 €", img: "assets/images/pizza-burger.webp", desc: "Con rigatino croccante e cheddar fuso. Servito con contorno di patatine fritte." },
      { name: "BURGER DI FALAFEL", price: "12 €", img: "assets/images/falafel.webp", desc: "Con insalata di cavolo viola e yogurt alla menta. Servito con contorno di patatine fritte." },
      { name: "FRITTO MISTO LAMI", price: "10 €", img: "assets/images/fritto-misto.webp", desc: "Anelli di cipolla, verdure in pastella, mozzarelline in carrozza e frittelle di pasta lievitata con alghe di mare. Servite con maionese al lime." },
      { name: "COSTINE SENAPE E MIELE", price: "12 €", img: "assets/images/costine.webp", desc: "Costine saporite glassate alla senape e miele." },
      { name: "DOLCE DEL GIORNO", price: "5 €", img: "assets/images/dolce.webp", desc: "La nostra selezione dolce artigianale del giorno." }
    ],
    bevuta: [
      { name: "MAIALA BOCCIO", price: "9 €", img: "assets/images/maiala-boccio.webp", desc: "Bickens London Dry Gin, Bitter Campari, Vermouth Rosso Cinzano e Brancamenta." },
      { name: "FAKE MARY", price: "9 €", img: "assets/images/fake-mary.webp", desc: "Base a scelta tra Vodka Sky o Sotol Flor del Desierto, sale, pepe nero, sedano, pomodoro, brodo di carne, paprika e peperoncino. Chiarificato." },
      { name: "DEEP PURPLE", price: "9 €", img: "assets/images/deep-purple.webp", desc: "Gin tonic dal colore violaceo con Bickens London Dry Gin infuso al Butterfly Pea Tea e Indian Tonic J.Gasco." },
      { name: "WILLY GOES TO SCOTLAND", price: "9 €", img: "assets/images/willy.webp", desc: "Ballantine's Blended Scotch Whisky, shrub di pere Williams e bitter al cioccolato. Nebulizzazione di Laphroaig 10 years." },
      { name: "FRENCH 26", price: "9 €", img: "assets/images/french26.webp", desc: "Bickens London Dry Gin, Acqua di Cedro Nardini, succo di limone e spumante brut." },
      { name: "PORNSTAR", price: "9 €", img: "assets/images/pornstar.webp", desc: "Vodka Sky infusa al passion fruit, Frangelico, sciroppo di zucchero e spumante brut servito a parte." },
      { name: "DRY MARTINI", price: "7 €", img: "assets/images/dry-martini.webp", desc: "Classic execution of Bickens London Dry Gin and elegant Cinzano Dry White Vermouth." },
      { name: "PALOMA", price: "7 €", img: "assets/images/paloma.webp", desc: "Tequila Blanco Espolón, succo di lime, sciroppo d'Agave Papa Borracho, soda al pompelmo rosa J.Gasco." },
      { name: "SPRITZ MEDITERRANEO", price: "7 €", img: "assets/images/spritz-med.webp", desc: "Aperitivo Venturo, spumante brut e soda. Basso contenuto alcolico." },
      { name: "SPRITZ ROSA", price: "7 €", img: "assets/images/spritz-rosa.webp", desc: "Sarti rosa all'arancia sanguinella, mango e passion fruit, spumante brut e soda." }
    ]
  },
  en: {
    cena: [
      { name: "MIXED TUSCAN PLATTER", price: "16 €", img: "assets/images/tagliere.webp", desc: "Tuscan cold cuts and cheeses, homemade jam, and meatballs in tomato sauce. Served with flattening bread and local Tuscan bread." },
      { name: "VEGETARIAN PLATTER", price: "15 €", img: "assets/images/tagliere-veg.webp", desc: "Mixed artisanal cheeses, homemade jam, hummus with carrots, crispy mushroom polenta bites, and vegetarian meatballs with sauce of the day." },
      { name: "PULLED PORK SANDWICH", price: "12 €", img: "assets/images/pulled-pork.webp", desc: "Slow-cooked pulled pork featuring caramelized Certaldo onions and pickles. Accompanied by a side of crispy french fries." },
      { name: "PIZZA BURGER", price: "12 €", img: "assets/images/pizza-burger.webp", desc: "Juicy burger topped with crispy local 'rigatino' bacon and melted cheddar cheese. Served with a side of french fries." },
      { name: "FALAFEL BURGER", price: "12 €", img: "assets/images/falafel.webp", desc: "Crispy house falafel patty topped with purple cabbage slaw and fresh mint yogurt sauce. Served with french fries." },
      { name: "LAMI CRISPY FRY BASKET", price: "10 €", img: "assets/images/fritto-misto.webp", desc: "Golden onion rings, batter-fried garden vegetables, mini mozzarella bites, and traditional leavened seaweed fritters. Served with fresh lime mayo." },
      { name: "HONEY MUSTARD RIBS", price: "12 €", img: "assets/images/costine.webp", desc: "Tender, savory pork ribs heavily glazed in a rich honey mustard reduction." },
      { name: "DESSERT OF THE DAY", price: "5 €", img: "assets/images/dolce.webp", desc: "Ask our staff for today's freshly prepared, artisanal sweet selection." }
    ],
    bevuta: [
      { name: "MAIALA BOCCIO", price: "9 €", img: "assets/images/maiala-boccio.webp", desc: "Bickens London Dry Gin, Bitter Campari, Vermouth Rosso Cinzano, and explicit minty notes of Brancamenta." },
      { name: "FAKE MARY", price: "9 €", img: "assets/images/fake-mary.webp", desc: "Your choice of Skyy Vodka or Sotol Flor del Desierto, salt, black pepper, celery, tomato, rich meat broth, paprika, and chili. Beautifully clarified." },
      { name: "DEEP PURPLE", price: "9 €", img: "assets/images/deep-purple.webp", desc: "Vibrant violet-tinted Gin Tonic mixing Bickens London Dry Gin infused with Butterfly Pea Tea and Indian Tonic by J.Gasco." },
      { name: "WILLY GOES TO SCOTLAND", price: "9 €", img: "assets/images/willy.webp", desc: "Ballantine's Blended Scotch Whisky, sweet Williams pear shrub, and dark chocolate bitters. Finished with a heavy mist of Laphroaig 10 Year." },
      { name: "FRENCH 26", price: "9 €", img: "assets/images/french26.webp", desc: "Bickens London Dry Gin, Nardini Citron Water, freshly squeezed lemon juice, and elegant sparkling brut sparkling wine." },
      { name: "PORNSTAR COCKTAIL", price: "9 €", img: "assets/images/pornstar.webp", desc: "Passion fruit-infused Skyy Vodka, nutty Frangelico liqueur, simple syrup, served with a side shot of sparkling brut." },
      { name: "DRY MARTINI", price: "7 €", img: "assets/images/dry-martini.webp", desc: "Classic execution of Bickens London Dry Gin and elegant Cinzano Dry White Vermouth." },
      { name: "PALOMA", price: "7 €", img: "assets/images/paloma.webp", desc: "Espolón Blanco Tequila, fresh lime juice, artisanal Papa Borracho Agave syrup, finished with J.Gasco pink grapefruit soda." },
      { name: "MEDITERRANEAN SPRITZ", price: "7 €", img: "assets/images/spritz-med.webp", desc: "Venturo Aperitivo, sparkling brut, and clean soda. Premium low-alcohol choice." },
      { name: "PINK SPRITZ", price: "7 €", img: "assets/images/spritz-rosa.webp", desc: "Sarti Rosa liqueur yielding vibrant blood orange, mango, and passion fruit notes, built with prosecco brut and soda." }
    ]
  }
};

// RUN INITIAL ENGINE ON LOAD
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "it";
  let currentCategory = "cena";

  // 1. LIFECYCLE CONTROLLER: REMOVE LOADER OVERLAY
  const loader = document.getElementById("loading-screen");
  setTimeout(() => {
    if(loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }
  }, 900);

  // 2. TIMING STATE DETECTOR
  updateBusinessStatus(currentLang);

  // 3. UI ELEMENT TARGET CORES
  const targetContainer = document.getElementById("dynamic-menu-target");
  const tabCena = document.getElementById("tab-cena");
  const tabBevuta = document.getElementById("tab-bevuta");
  const langBtn = document.getElementById("lang-switcher");

  // RENDER GRID LOOP ROUTINE
// BULLETPROOF MATRIX RENDERING WITH EVENT DELEGATION
  function renderMenu() {
    if(!targetContainer) return;
    targetContainer.innerHTML = "";
    
    // 1. Build and paint all cards into the DOM framework
    menuData[currentLang][currentCategory].forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-item-card";
      card.innerHTML = `
        <div class="item-header-row">
          <h3 class="item-title">${item.name}</h3>
          <div class="item-actions-wrap">
            <button class="btn-item-photo-trigger" data-img="${item.img}" aria-label="Visualizza foto">🖼️</button>
            <span class="item-price">${item.price}</span>
          </div>
        </div>
        <p class="item-desc">${item.desc}</p>
      `;
      targetContainer.appendChild(card);
    });
  }

  // 2. EVENT DELEGATION ENGINE (Put this right below renderMenu() inside DOMContentLoaded)
  const targetMenuBox = document.getElementById("dynamic-menu-target");
  if (targetMenuBox) {
    targetMenuBox.addEventListener('click', (e) => {
      // Find out if the clicked element (or its parent) is our photo button
      const photoBtn = e.target.closest('.btn-item-photo-trigger');
      
      if (photoBtn) {
        e.preventDefault();
        e.stopPropagation();
        
        const imagePath = photoBtn.getAttribute('data-img');
        const dishName = photoBtn.closest('.menu-item-card').querySelector('.item-title').innerText;
        
        // Trigger our smooth lightbox rendering module
        openFoodPreviewModal(imagePath, dishName);
      }
    });
  }

  // CORE GLOBAL STATIC TRANSLATOR FUNCTION
  function switchLanguage(lang) {
    currentLang = lang;
    
    // Scan all DOM elements using i18n tokens
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const translationKey = element.getAttribute("data-i18n");
      if (translations[lang][translationKey]) {
        element.innerText = translations[lang][translationKey];
      }
    });

    // Update specific text items inside inputs or attributes if necessary
    langBtn.innerText = lang === "it" ? "🇮🇹 IT" : "🇬🇧 EN";
    
    // Refresh active dynamic items
    updateBusinessStatus(currentLang);
    renderMenu();
  }

  // INITIAL BOOTSTRAP GRID
  renderMenu();

  // EVENT LISTENERS: TABS
  if(tabCena && tabBevuta) {
    tabCena.addEventListener("click", () => {
      currentCategory = "cena";
      tabBevuta.classList.remove("active-tab");
      tabCena.classList.add("active-tab");
      renderMenu();
    });

    tabBevuta.addEventListener("click", () => {
      currentCategory = "bevuta";
      tabCena.classList.remove("active-tab");
      tabBevuta.classList.add("active-tab");
      renderMenu();
    });
  }

  // EVENT LISTENER: LANGUAGE TOGGLE CLICK
  if(langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "it" ? "en" : "it";
      switchLanguage(nextLang);
    });
  }
});

// REAL-TIME OPERATIONAL TIME STATUS ENGINE
function updateBusinessStatus(lang) {
  const statusBadge = document.getElementById("status-badge");
  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeDecimal = hour + minutes / 60;

  if (day === 1) {
    statusBadge.innerText = lang === "it" ? "Chiuso • Riapre Martedì alle 19:00" : "Closed • Opens Tuesday at 7:00 PM";
    statusBadge.style.backgroundColor = "#C45625"; 
    return;
  }

  if (currentTimeDecimal >= 19.0 && currentTimeDecimal <= 23.5) {
    statusBadge.innerText = lang === "it" ? "● Aperti Ora • Cucina Attiva" : "● Open Now • Kitchen Active";
    statusBadge.style.backgroundColor = "#527A80";
  } else {
    statusBadge.innerText = lang === "it" ? "Chiuso Ora • Vi aspettiamo stasera dalle 19:00" : "Closed Now • We open tonight at 7:00 PM";
    statusBadge.style.backgroundColor = "#C45625"; 
  }
}


// 4. BOOKING MODAL INTERACTION CONTROLLER
  const openModalBtn = document.getElementById("open-booking-btn");
  const closeModalBtn = document.getElementById("close-booking-btn");
  const bookingModal = document.getElementById("booking-modal");

  if (openModalBtn && closeModalBtn && bookingModal) {
    // Open Modal with CSS fade-in
    openModalBtn.addEventListener("click", () => {
      bookingModal.classList.add("modal-visible");
    });

    // Close Modal via 'X' button
    closeModalBtn.addEventListener("click", () => {
      bookingModal.classList.remove("modal-visible");
    });

    // Close Modal automatically if user clicks outside the card layout background
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove("modal-visible");
      }
    });
  }


  // REAL-TIME OPERATIONAL TIME STATUS ENGINE
function updateBusinessStatus(lang) {
  const statusBadge = document.getElementById("status-badge");
  const tvScreen = document.getElementById("tv-screen");
  const tvStatusText = document.getElementById("tv-status-text");
  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeDecimal = hour + minutes / 60;

  // Set default state variables
  let isOpen = false;

  if (day === 1) {
    statusBadge.innerText = lang === "it" ? "Chiuso • Riapre Martedì alle 19:00" : "Closed • Opens Tuesday at 7:00 PM";
    statusBadge.style.backgroundColor = "#C45625"; 
    isOpen = false;
  } else if (currentTimeDecimal >= 19.0 && currentTimeDecimal <= 23.5) {
    statusBadge.innerText = lang === "it" ? "● Aperti Ora • Cucina Attiva" : "● Open Now • Kitchen Active";
    statusBadge.style.backgroundColor = "#527A80";
    isOpen = true;
  } else {
    statusBadge.innerText = lang === "it" ? "Chiuso Ora • Vi aspettiamo stasera dalle 19:00" : "Closed Now • We open tonight at 7:00 PM";
    statusBadge.style.backgroundColor = "#C45625"; 
    isOpen = false;
  }

  // CONTROL THE RETRO TV BROADCAST CONTAINER ACCORDINGLY
  if (tvScreen && tvStatusText) {
    if (isOpen) {
      tvScreen.classList.remove("state-closed");
      tvScreen.classList.add("state-open");
      tvStatusText.innerText = lang === "it" ? "LIVE ORA" : "ON AIR";
    } else {
      tvScreen.classList.remove("state-open");
      tvScreen.classList.add("state-closed");
      tvStatusText.innerText = lang === "it" ? "FINE TRASMISSIONI" : "OFF AIR";
    }
  }
}



// ==========================================
// PURE FRONTEND INTERACTIVE RETRO PARTICLE ENGINE
// ==========================================
(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particlesArray = [];
  
  // Interactive Mouse Object Coordinates Tracker
  const mouse = {
    x: null,
    y: null,
    radius: 120 // The radius of the mouse interaction field
  };

  // Track cursor movement across the document workspace
  window.addEventListener('mousemove', function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  // Clear mouse positions when cursor leaves the screen viewport
  window.addEventListener('mouseout', function() {
    mouse.x = null;
    mouse.y = null;
  });

  // Re-scale canvas layout bounds cleanly on window viewport alterations
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });

  // Set initial canvas sizing parameters
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Lami Menu Signature Palette Array Map
  const retroColors = ['#527A80', '#F5CA65', '#C45625'];

  // Particle Element Data Blueprint Configuration
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
      this.baseX = this.x; // Stores native point coordinates for bounce-back gravity logic
      this.baseY = this.y;
      this.density = (Math.random() * 30) + 1; // Shaking resistance factor
    }

    // Render individual pixel points to context buffer canvas layouts
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    // Process positional coordinate calculation shifts and fluid interaction mechanics
    update() {
      // Keep passive float speeds moving smoothly across screen fields
      if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
      if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
      
      this.x += this.directionX * 0.5;
      this.y += this.directionY * 0.5;

      // Mouse Proximity Physics Calculations
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxForce = (mouse.radius - distance) / mouse.radius;
        let force = maxForce * 3; // Shaking force speed multiplier
        
        // Push the particle away from cursor field bounds
        this.x -= forceDirectionX * force * this.density * 0.2;
        this.y -= forceDirectionY * force * this.density * 0.2;
      } else {
        // Return smoothly to base coordinates if mouse drops out of zone boundaries
        if (this.x !== this.baseX) {
          let dxReturn = this.x - this.baseX;
          this.x -= dxReturn / 15;
        }
        if (this.y !== this.baseY) {
          let dyReturn = this.y - this.baseY;
          this.y -= dyReturn / 15;
        }
      }
    }
  }

  // Populate map workspace area allocations with particle coordinate distributions
  function initParticles() {
    particlesArray = [];
    // Scales concentration calculation dynamically based on window workspace dimensions
    let numberOfParticles = (canvas.height * canvas.width) / 14000;
    if (numberOfParticles > 120) numberOfParticles = 120; // Cap ceiling bounds to optimize hardware GPU rendering profiles

    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 4) + 2; // Particle diameter sizing
      let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
      let directionX = (Math.random() * 2) - 1;
      let directionY = (Math.random() * 2) - 1;
      let color = retroColors[Math.floor(Math.random() * retroColors.length)];

      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }

  // Infinite Frame Progression Loop Engine
  function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Wipe drawing layer clear

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
  }

  // Initialize and trigger canvas looping modules
  initParticles();
  animateParticles();
})();







// 5. INTERACTIVE MAP DRAWER ENGINE CONTROLLER
  const mapTriggerBtn = document.getElementById("nav-map-trigger");
  const mapDrawer = document.getElementById("map-drawer");

  if (mapTriggerBtn && mapDrawer) {
    mapTriggerBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevents instant closing triggers
      mapDrawer.classList.toggle("drawer-open");
      
      // Visual feedback adjustment
      mapTriggerBtn.style.color = mapDrawer.classList.contains("drawer-open") ? "var(--retro-orange)" : "";
    });

    // Close the drawer if the customer clicks anywhere else on the document frame
    document.addEventListener("click", (e) => {
      if (!mapDrawer.contains(e.target) && e.target !== mapTriggerBtn) {
        mapDrawer.classList.remove("drawer-open");
        mapTriggerBtn.style.color = "";
      }
    });
  }








  // 6. BEAR-THEMED MOBILE BURGER NAVIGATION CONTROLLER
  const bearBurgerBtn = document.getElementById("bear-burger-btn");
  const mobileNavContainer = document.getElementById("mobile-nav-container");
  
  // Select all individual navigational action targets inside the drawer frame
  const navTargets = mobileNavContainer.querySelectorAll(".nav-link, .nav-link-btn");

  if (bearBurgerBtn && mobileNavContainer) {
    // Toggle menu state open/closed on bear header element taps
    bearBurgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      bearBurgerBtn.classList.toggle("open");
      mobileNavContainer.classList.toggle("menu-active");
    });

    // AUTO-CLOSE LOOP MECHANISM
    // Listens for clicks on links, and instantly slides the menu away
    navTargets.forEach(target => {
      target.addEventListener("click", () => {
        bearBurgerBtn.classList.remove("open");
        mobileNavContainer.classList.remove("menu-active");
      });
    });
  }



  // UPGRADED MATRIX RENDERING ROUTINE WITH DISH PREVIEW TRIGGERS
  function renderMenu() {
    if(!targetContainer) return;
    targetContainer.innerHTML = "";
    
    menuData[currentLang][currentCategory].forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-item-card";
      card.innerHTML = `
        <div class="item-header-row">
          <h3 class="item-title">${item.name}</h3>
          <div class="item-actions-wrap">
            <button class="btn-item-photo-trigger" data-img="${item.img}" aria-label="Visualizza foto">🖼️</button>
            <span class="item-price">${item.price}</span>
          </div>
        </div>
        <p class="item-desc">${item.desc}</p>
      `;
      targetContainer.appendChild(card);
    });

    // ATTACH CLICK INTERCEPT EVENTS TO ALL RENDERED EYE/CAMERA ICONS
    const photoButtons = targetContainer.querySelectorAll('.btn-item-photo-trigger');
    photoButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const imagePath = btn.getAttribute('data-img');
        const dishName = btn.closest('.menu-item-card').querySelector('.item-title').innerText;
        openFoodPreviewModal(imagePath, dishName);
      });
    });
  }

  // DISH LIGHTBOX PREVIEW POPUP DYNAMICS
  function openFoodPreviewModal(src, title) {
    // Create popup elements dynamically on the fly
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <div class="lightbox-card">
        <button class="lightbox-close">&times;</button>
        <h4 class="lightbox-title">${title}</h4>
        <div class="lightbox-img-frame halftone-dots">
          <img src="${src}" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <div class="lightbox-img-fallback">🐻 <br><span>Foto in arrivo dal Club...</span></div>
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);

    // Fade overlay window onto screen smooth frames
    setTimeout(() => lightbox.classList.add('lightbox-visible'), 10);

    // Close controls mapping events hooks
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const closeLightbox = () => {
      lightbox.classList.remove('lightbox-visible');
      setTimeout(() => lightbox.remove(), 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  }