const products = [
    {
        id: "winter-wonderland",
        name: "Winter Wonderland",
        price: 129,
        status: "In stock",
        orders: "31+ sold",
        category: "short-sets",
        categoryLabel: "Short Nail Sets",
        image: "images/winter_wonderland.jpg",
        imageAlt: "Winter Wonderland cool-toned handmade press-on nail set",
        description: "Elegant cool-toned nail set with a luxe seasonal finish."
    },
    {
        id: "butter-yellow-morning",
        name: "Butter Yellow Morning",
        price: 375,
        status: "In stock",
        orders: "300+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/butter_yellow_morning.jpg",
        imageAlt: "Butter Yellow Morning pastel handmade press-on nail set",
        description: "Soft pastel set for fresh, playful everyday styling."
    },
    {
        id: "floral",
        name: "Floral",
        price: 186,
        status: "In stock",
        orders: "600+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/floral.jpg",
        imageAlt: "Floral handmade press-on nail set with minimal flower art",
        description: "Minimal floral artistry for a clean and polished look."
    },
    {
        id: "pretty-in-pink",
        name: "Pretty in Pink",
        price: 236,
        status: "In stock",
        orders: "400+ sold",
        category: "long-sets",
        categoryLabel: "Long Nail Sets",
        image: "images/pretty_in_pink.jpg",
        imageAlt: "Pretty in Pink glossy handmade press-on nail set",
        description: "Glossy pink press-ons designed for a sweet statement finish."
    },
    {
        id: "chrome-princess",
        name: "Chrome Princess",
        price: 218,
        status: "In stock",
        orders: "4.4k+ sold",
        category: "chrome-sets",
        categoryLabel: "Chrome Sets",
        image: "images/chrome_princess.jpg",
        imageAlt: "Chrome Princess reflective chrome handmade press-on nail set",
        description: "Reflective chrome beauty with soft glamour details."
    },
    {
        id: "streetwear-style-chrome",
        name: "Streetwear Style Chrome",
        price: 210,
        status: "In stock",
        orders: "280+ sold",
        category: "chrome-sets",
        categoryLabel: "Chrome Sets",
        image: "images/streetwear_style_chrome.jpg",
        imageAlt: "Streetwear Style Chrome bold handmade press-on nail set",
        description: "Bold fashion-forward chrome design with edge and shine."
    },
    {
        id: "abstract-custom",
        name: "Abstract Custom",
        price: 245,
        status: "In stock",
        orders: "190+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/abstract_custom.jpg",
        imageAlt: "Abstract Custom creative handmade press-on nail set",
        description: "Creative custom-inspired artwork for standout nail styling."
    },
    {
        id: "white-frenchies-with-initials",
        name: "White Frenchies with Initials",
        price: 260,
        status: "In stock",
        orders: "150+ sold",
        category: "french-sets",
        categoryLabel: "French Tip Sets",
        image: "images/white_frenchies_with_initials.jpg",
        imageAlt: "White Frenchies with Initials personalised French tip press-on nail set",
        description: "Classic French elegance personalised with initials."
    },
    {
        id: "celestial-blush-aura",
        name: "Celestial Blush Aura",
        price: 280,
        status: "In stock",
        orders: "4.2k+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/celestial_blush_aura.jpg",
        imageAlt: "Celestial Blush Aura pink aura nail set with gold star accents",
        description: "Dreamy pink aura art with celestial gold star accents."
    },
    {
        id: "metamorphasis-wings",
        name: "Metamorphasis Wings",
        price: 210,
        status: "In stock",
        orders: "300+ sold",
        category: "almond-sets",
        categoryLabel: "Almond Sets",
        image: "images/metamorphasis_wings.jpg",
        imageAlt: "Metamorphasis Wings butterfly nail set",
        description: "Vibrant butterfly wing tips with intricate details."
    },
    {
        id: "honey-bloom-flare",
        name: "Honey Bloom Flare",
        price: 245,
        status: "In stock",
        orders: "2.5k+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/honey_bloom_flare.jpg",
        imageAlt: "Honey Bloom Flare orange floral nail set",
        description: "Bold amber 3D floral design."
    },
    {
        id: "street-luxe-stiletto",
        name: "Street Luxe Stiletto",
        price: 300,
        status: "In stock",
        orders: "150+ sold",
        category: "stiletto-sets",
        categoryLabel: "Stiletto Sets",
        image: "images/street_luxe_stiletto.jpg",
        imageAlt: "Street Luxe Stiletto nail set with charms and urban art",
        description: "Edgy stiletto set featuring 3D charms and urban art."
    },
    {
        id: "cyber-y2k-flare",
        name: "Cyber Y2K Flare",
        price: 320,
        status: "In stock",
        orders: "810k+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/cyber_y2k_flare.jpg",
        imageAlt: "Cyber Y2K Flare electric pink leopard print nail set",
        description: "Electric pink leopard print with bold stars."
    },
    {
        id: "aquamarine-dream-junk",
        name: "Aquamarine Dream Junk",
        price: 450,
        status: "In stock",
        orders: "120+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/aquamarine_dream_junk.jpg",
        imageAlt: "Aquamarine Dream Junk colourful teal charm nail set",
        description: "Maximalist teal set featuring heavy charms."
    },
    {
        id: "safari-bloom-almond",
        name: "Safari Bloom Almond",
        price: 245,
        status: "In stock",
        orders: "4k+ sold",
        category: "almond-sets",
        categoryLabel: "Almond Sets",
        image: "images/safari_bloom_almond.jpg",
        imageAlt: "Safari Bloom Almond tortoise shell floral nail set",
        description: "Chic tortoise shell patterns paired with 3D floral accents."
    },
    {
        id: "midnight-cherry",
        name: "Midnight Cherry",
        price: 300,
        status: "In stock",
        orders: "285+ sold",
        category: "stiletto-sets",
        categoryLabel: "Stiletto Sets",
        image: "images/midnight_cherry.jpg",
        imageAlt: "Midnight Cherry zebra print nail set with cherry accents",
        description: "Edgy stiletto set with zebra prints and cherry accents."
    },
    {
        id: "electric-croc-stiletto",
        name: "Electric Croc Stiletto",
        price: 300,
        status: "In stock",
        orders: "4.2k+ sold",
        category: "stiletto-sets",
        categoryLabel: "Stiletto Sets",
        image: "images/electric_croc_stiletto.jpg",
        imageAlt: "Electric Croc Stiletto teal and black croc print nail set",
        description: "Bold teal and black croc print stilettos with gold accents."
    },
    {
        id: "monochrome-anarchy-stiletto",
        name: "Monochrome Anarchy Stiletto",
        price: 300,
        status: "In stock",
        orders: "300+ sold",
        category: "stiletto-sets",
        categoryLabel: "Stiletto Sets",
        image: "images/monochrome_anarchy_stiletto.jpg",
        imageAlt: "Monochrome Anarchy Stiletto black and white nail set",
        description: "Edgy black and white mixed prints with silver chain details."
    },
    {
        id: "minimalist-blush-french",
        name: "Minimalist Blush French",
        price: 120,
        status: "In stock",
        orders: "8k+ sold",
        category: "french-sets",
        categoryLabel: "French Tip Sets",
        image: "images/minimalist_blush_french.jpg",
        imageAlt: "Minimalist Blush French pink almond french tip nail set",
        description: "Classic soft pink base with clean baby pink almond tips."
    },
    {
        id: "daisy-dew-french",
        name: "Daisy Dew French",
        price: 150,
        status: "In stock",
        orders: "3.8k+ sold",
        category: "french-sets",
        categoryLabel: "French Tip Sets",
        image: "images/daisy_dew_french.jpg",
        imageAlt: "Daisy Dew French white floral french tip nail set",
        description: "Elegant white french almond tips with delicate floral accents."
    },
    {
        id: "polka-bow-french",
        name: "Polka Bow French",
        price: 200,
        status: "In stock",
        orders: "4.2k+ sold",
        category: "french-sets",
        categoryLabel: "French Tip Sets",
        image: "images/polka_bow_french.jpg",
        imageAlt: "Polka Bow French polka dot nail set with bow accents",
        description: "Chic polka dot design with bow accents."
    },
    {
        id: "soft-blush-sparkle",
        name: "Soft Blush Sparkle",
        price: 200,
        status: "In stock",
        orders: "400+ sold",
        category: "almond-sets",
        categoryLabel: "Almond Sets",
        image: "images/soft_blush_sparkle.jpg",
        imageAlt: "Soft Blush Sparkle pink french tip nail set with rhinestones",
        description: "Delicate nude almond base with subtle sparkle."
    },
    {
        id: "floral-almond-french",
        name: "Floral Almond French",
        price: 245,
        status: "In stock",
        orders: "2.5k+ sold",
        category: "almond-sets",
        categoryLabel: "Almond Sets",
        image: "images/floral_almond_french.jpg",
        imageAlt: "White 3D Floral Almond French nail set",
        description: "Simple white 3D floral design."
    },
    {
        id: "crimson-petal-stiletto",
        name: "Crimson Petal Stiletto",
        price: 195,
        status: "In stock",
        orders: "390+ sold",
        category: "stiletto-sets",
        categoryLabel: "Stiletto Sets",
        image: "images/crimson_petal_stiletto.jpg",
        imageAlt: "Crimson Petal Stiletto milky white floral nail set",
        description: "Clean milky white stilettos with red floral accents."
    },
    {
        id: "pink-pearl",
        name: "Pink Pearl",
        price: 100,
        status: "In stock",
        orders: "1.2k+ sold",
        category: "almond-sets",
        categoryLabel: "Almond Sets",
        image: "images/pink_pearl.jpg",
        imageAlt: "Pink Pearl plain baby pink almond nail set",
        description: "Soft pink almond with high gloss finish."
    },
    {
        id: "sizing-kit",
        name: "Sizing Kit",
        price: 210,
        status: "In stock",
        orders: "300+ sold",
        category: "custom-sets",
        categoryLabel: "Custom Sets",
        image: "images/sizingkit.jpg",
        imageAlt: "KlawedUp sizing kit",
        description: "Ensure a perfect fit with our essential nail sizing guide."
    }
];

const DELIVERY_FEE = 60;

const productFilters = {
    "winter-wonderland": {
        size: ["xs", "s", "m"],
        style: ["glossy", "minimal"],
        details: ["glitter"]
    },
    "butter-yellow-morning": {
        size: ["s", "m", "custom-size"],
        style: ["glossy", "minimal"],
        details: ["flowers"]
    },
    floral: {
        size: ["xs", "s", "m"],
        style: ["minimal", "bridal"],
        details: ["flowers"]
    },
    "pretty-in-pink": {
        size: ["s", "m", "l"],
        style: ["glossy", "bold"],
        details: ["glitter"]
    },
    "chrome-princess": {
        size: ["xs", "s", "m", "l"],
        style: ["glossy", "bold"],
        details: ["chrome", "charms"]
    },
    "streetwear-style-chrome": {
        size: ["m", "l", "custom-size"],
        style: ["bold"],
        details: ["chrome"]
    },
    "abstract-custom": {
        size: ["custom-size"],
        style: ["bold"],
        details: ["custom-initials", "charms"]
    },
    "white-frenchies-with-initials": {
        size: ["s", "m", "custom-size"],
        style: ["bridal", "minimal"],
        details: ["custom-initials"]
    },
    "celestial-blush-aura": {
        size: ["s", "m", "l", "custom-size"],
        style: ["bold"],
        details: ["charms"]
    },
    "metamorphasis-wings": {
        size: ["s", "m", "l"],
        style: ["bold"],
        details: ["glitter"]
    },
    "honey-bloom-flare": {
        size: ["m", "l", "custom-size"],
        style: ["bold"],
        details: ["flowers", "charms"]
    },
    "street-luxe-stiletto": {
        size: ["m", "l", "custom-size"],
        style: ["bold"],
        details: ["charms"]
    },
    "cyber-y2k-flare": {
        size: ["m", "l", "custom-size"],
        style: ["bold"],
        details: ["glitter"]
    },
    "aquamarine-dream-junk": {
        size: ["m", "l", "custom-size"],
        style: ["bold"],
        details: ["charms"]
    },
    "safari-bloom-almond": {
        size: ["s", "m", "l"],
        style: ["bold"],
        details: ["flowers"]
    },
    "midnight-cherry": {
        size: ["m", "l"],
        style: ["bold"],
        details: ["charms"]
    },
    "electric-croc-stiletto": {
        size: ["m", "l"],
        style: ["bold"],
        details: ["chrome"]
    },
    "monochrome-anarchy-stiletto": {
        size: ["m", "l", "custom-size"],
        style: ["bold"],
        details: ["charms"]
    },
    "minimalist-blush-french": {
        size: ["xs", "s", "m"],
        style: ["minimal", "bridal"],
        details: []
    },
    "daisy-dew-french": {
        size: ["xs", "s", "m"],
        style: ["minimal", "bridal"],
        details: ["flowers"]
    },
    "polka-bow-french": {
        size: ["s", "m", "custom-size"],
        style: ["minimal"],
        details: []
    },
    "soft-blush-sparkle": {
        size: ["xs", "s", "m"],
        style: ["glossy", "bridal", "minimal"],
        details: ["glitter"]
    },
    "floral-almond-french": {
        size: ["m", "l", "custom-size"],
        style: ["minimal", "bridal"],
        details: ["flowers"]
    },
    "crimson-petal-stiletto": {
        size: ["m", "l"],
        style: ["bold"],
        details: ["flowers"]
    },
    "pink-pearl": {
        size: ["xs", "s", "m"],
        style: ["glossy", "minimal"],
        details: []
    },
    "sizing-kit": {
        size: ["xs", "s", "m", "l", "custom-size"],
        style: ["minimal"],
        details: []
    }
};

function formatPrice(amount) {
    return `R${amount.toFixed(2)}`;
}

function setupMapButtons() {
    const message = document.querySelector(".map-message");

    document.querySelectorAll(".map-focus-button").forEach((button) => {
        button.addEventListener("click", () => {
            if (message) message.textContent = button.dataset.mapMessage;
        });
    });
}

function getSelectedProduct() {
    const params = new URLSearchParams(window.location.search);
    const requestedProduct = params.get("product");

    return products.find((product) => product.id === requestedProduct) || products[0];
}

function setText(selector, text) {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = text;
    }
}

function setImage(selector, product) {
    const image = document.querySelector(selector);

    if (image) {
        image.src = product.image;
        image.alt = product.imageAlt;
    }
}

function setActiveNav() {
    const page = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach((link) => {
        if (link.getAttribute("href") === page || (page === "enquiry.html" && link.getAttribute("href") === "enquiries.html")) {
            link.classList.add("active-nav");
            link.setAttribute("aria-current", "page");
        }
    });
}

function ensureGalleryNavLink(links) {
    if (links.querySelector('a[href="gallery.html"]')) return;

    const galleryLink = document.createElement("a");

    galleryLink.href = "gallery.html";
    galleryLink.textContent = "Gallery";
    links.appendChild(galleryLink);
}

function removeNavSeparators(links) {
    links.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.remove();
        }
    });
}

function setupMobileNav() {
    document.querySelectorAll("nav").forEach((nav, index) => {
        const links = nav.querySelector("p");

        if (!links || nav.querySelector(".menu-toggle")) return;

        ensureGalleryNavLink(links);
        removeNavSeparators(links);

        const menuId = `site-menu-${index + 1}`;
        const button = document.createElement("button");

        links.id = menuId;
        links.classList.add("nav-links");
        button.type = "button";
        button.className = "menu-toggle";
        button.setAttribute("aria-controls", menuId);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");
        button.textContent = "MENU";

        nav.insertBefore(button, links);

        button.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            button.setAttribute("aria-expanded", String(isOpen));
            button.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        });

        links.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", "Open navigation menu");
            });
        });
    });
}

function setupFilterDropdown() {
    const filterPanel = document.querySelector(".filter-panel");
    const filterForm = filterPanel ? filterPanel.querySelector("form") : null;

    if (!filterPanel || !filterForm || filterPanel.querySelector(".filter-toggle")) return;

    const button = document.createElement("button");
    const filtersId = "product-filters";

    filterForm.id = filterForm.id || filtersId;
    button.type = "button";
    button.className = "filter-toggle";
    button.setAttribute("aria-controls", filterForm.id);
    button.setAttribute("aria-expanded", "false");
    button.textContent = "Filters";

    filterPanel.insertBefore(button, filterPanel.firstElementChild);

    button.addEventListener("click", () => {
        const isOpen = filterPanel.classList.toggle("is-open");

        button.setAttribute("aria-expanded", String(isOpen));
    });
}

function connectProductCards() {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card, index) => {
        const product = products[index];
        const link = card.querySelector('a[href^="purchase_item.html"]');

        if (product && link) {
            link.href = `purchase_item.html?product=${encodeURIComponent(product.id)}`;
        }
    });
}

function getCheckedValues(form, name) {
    return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.id);
}

function matchesSelectedFilters(product, filters) {
    const tags = productFilters[product.id] || { size: [], style: [], details: [] };
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesSize = filters.size.every((value) => tags.size.includes(value));
    const matchesStyle = filters.style.every((value) => tags.style.includes(value));
    const matchesDetails = filters.details.every((value) => tags.details.includes(value));

    return matchesCategory && matchesSize && matchesStyle && matchesDetails;
}

function setupProductFilters() {
    const filterForm = document.querySelector(".filter-panel form");
    const cards = [...document.querySelectorAll(".product-card")];
    const noResults = document.querySelector(".no-results");
    const productGrid = document.querySelector(".product-grid");
    const sortSelect = document.getElementById("sort-by");

    if (!filterForm || !cards.length) {
        return;
    }

    function getSortedCards() {
        const sortedCards = [...cards];
        const sortValue = sortSelect ? sortSelect.value : "Recommended";

        sortedCards.sort((firstCard, secondCard) => {
            const firstProduct = products[cards.indexOf(firstCard)];
            const secondProduct = products[cards.indexOf(secondCard)];

            if (!firstProduct || !secondProduct) {
                return 0;
            }

            if (sortValue === "Price: Low to High") {
                return firstProduct.price - secondProduct.price;
            }

            if (sortValue === "Price: High to Low") {
                return secondProduct.price - firstProduct.price;
            }

            if (sortValue === "Newest") {
                return products.indexOf(secondProduct) - products.indexOf(firstProduct);
            }

            return products.indexOf(firstProduct) - products.indexOf(secondProduct);
        });

        return sortedCards;
    }

    function applyProductControls() {
        const selectedCategory = filterForm.querySelector('input[name="category"]:checked');
        const filters = {
            category: selectedCategory ? selectedCategory.id : "",
            size: getCheckedValues(filterForm, "size"),
            style: getCheckedValues(filterForm, "style"),
            details: getCheckedValues(filterForm, "details")
        };
        let visibleCount = 0;

        cards.forEach((card, index) => {
            const product = products[index];
            const isVisible = product ? matchesSelectedFilters(product, filters) : false;

            card.hidden = !isVisible;

            if (isVisible) {
                visibleCount += 1;
            }
        });

        if (noResults) {
            noResults.hidden = visibleCount > 0;
        }

        if (productGrid) {
            getSortedCards().forEach((card) => {
                productGrid.appendChild(card);
            });
        }
    }

    filterForm.addEventListener("change", applyProductControls);
    filterForm.addEventListener("reset", () => {
        window.setTimeout(applyProductControls, 0);
    });

    if (sortSelect) {
        sortSelect.addEventListener("change", applyProductControls);
    }

    applyProductControls();
}

function populatePurchasePage() {
    const form = document.querySelector(".purchase-layout form");

    if (!form) {
        return;
    }

    const product = getSelectedProduct();

    setImage(".purchase-media img", product);
    setText("[data-product-name]", product.name);
    setText("[data-product-description]", product.description);
    setText("[data-product-price]", `R${product.price}`);
    setText("[data-product-status]", product.status);
    setText("[data-product-orders]", product.orders);
    setText("[data-product-category]", product.categoryLabel);

    const hiddenProduct = form.querySelector('input[name="product"]');

    if (hiddenProduct) {
        hiddenProduct.value = product.id;
    }
}

function populateCheckoutPage() {
    const summary = document.querySelector(".checkout-summary");
    const checkoutForm = document.getElementById("checkout-form");

    if (checkoutForm) {
        const params = new URLSearchParams(window.location.search);

        document.getElementById("product").value =
            params.get("product") || "";

        document.getElementById("quantity").value =
            params.get("quantity") || "1";
    }

    if (!summary) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const product = getSelectedProduct();
    const quantity = Math.max(Number(params.get("quantity")) || 1, 1);
    const itemTotal = product.price * quantity;
    const orderTotal = itemTotal + DELIVERY_FEE;

    setImage(".summary-image img", product);
    setText("[data-checkout-product]", product.name);
    setText("[data-checkout-description]", product.description);
    setText("[data-checkout-price]", formatPrice(product.price));
    setText("[data-checkout-quantity]", String(quantity));
    setText("[data-checkout-item-total]", formatPrice(itemTotal));
    setText("[data-checkout-delivery]", formatPrice(DELIVERY_FEE));
    setText("[data-checkout-total]", formatPrice(orderTotal));
    setText("[data-checkout-status]", product.status);
    setText("[data-checkout-orders]", product.orders);
    setText("[data-checkout-category]", product.categoryLabel);
}

function setUpOrderSuccessPage() {
    const productName = document.querySelector("[data-product-name]");

    if (!productName) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const product = getSelectedProduct();

    const quantity = Math.max(Number(params.get("quantity")) || 1, 1);

    const itemTotal = product.price * quantity;
    const orderTotal = itemTotal + DELIVERY_FEE;

    setText("[data-product-name]", product.name);
    setText("[data-checkout-total]", formatPrice(orderTotal));
}

function setupCheckoutValidation() {
    const form = document.getElementById("checkout-form");
    const message = document.getElementById("checkout-error");

    if (!form || !message) {
        return;
    }

    form.addEventListener("invalid", () => {
        message.textContent = "Please complete all customer details before placing your order.";
    }, true);

    form.addEventListener("input", () => {
        if (form.checkValidity()) {
            message.textContent = "";
        }
    });

    form.addEventListener("change", () => {
        if (form.checkValidity()) {
            message.textContent = "";
        }
    });

    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            message.textContent = "Please complete all customer details before placing your order.";
            form.reportValidity();
            return;
        }

        message.textContent = "";
    });
}

function setupFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        if (!button || !answer || !icon) {
            return;
        }

        button.addEventListener("click", () => {
            const shouldOpen = button.getAttribute("aria-expanded") !== "true";

            faqItems.forEach((otherItem) => {
                const otherButton = otherItem.querySelector(".faq-question");
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherIcon = otherItem.querySelector(".faq-icon");

                if (otherButton && otherAnswer && otherIcon) {
                    otherButton.setAttribute("aria-expanded", "false");
                    otherAnswer.hidden = true;
                    otherIcon.textContent = "+";
                }
            });

            if (shouldOpen) {
                button.setAttribute("aria-expanded", "true");
                answer.hidden = false;
                icon.textContent = "-";
            }
        });
    });
}


const mapButtons = document.querySelectorAll('.map-focus-button');
const mapMessage = document.querySelector('.map-message');

mapButtons.forEach(button => {
  button.addEventListener('click', () => {
    const newMessage = button.getAttribute('data-map-message');
    
    mapMessage.textContent = newMessage;
  });
});

function setupGalleryLightbox() {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (!galleryImages.length || !lightbox || !lightboxImg || !closeBtn || !nextBtn || !prevBtn) {
        return;
    }

    let currentIndex = 0;

    function showImage() {
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    connectProductCards();
    setupProductFilters();
    setupFilterDropdown();
    populatePurchasePage();
    populateCheckoutPage();
    setupCheckoutValidation();
    setupFaqAccordion();
    setupGalleryLightbox();
    setUpOrderSuccessPage();
    setupMobileNav();
});
