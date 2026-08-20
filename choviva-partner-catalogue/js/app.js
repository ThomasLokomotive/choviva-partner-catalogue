(function () {
  "use strict";

  const state = {
    query: "",
    category: "all",
    veganOnly: false,
  };

  const grid = document.getElementById("catalogue");
  const searchInput = document.getElementById("search-input");
  const chips = document.querySelectorAll(".chip[data-category]");
  const veganCheckbox = document.getElementById("vegan-only");
  const resultCount = document.getElementById("result-count");

  function categoryLabel(id) {
    const cat = CATEGORIES.find((c) => c.id === id);
    return cat ? cat.label : id;
  }

  function trackEvent(name, params) {
    if (typeof gtag === "function") {
      gtag("event", name, params || {});
    }
  }

  function matchesProducer(producer) {
    if (state.category !== "all" && producer.category !== state.category) {
      return false;
    }

    const q = state.query.trim().toLowerCase();
    const producerMatches =
      !q ||
      producer.name.toLowerCase().includes(q) ||
      producer.focus.toLowerCase().includes(q) ||
      producer.products.some((p) => p.name.toLowerCase().includes(q));

    if (!producerMatches) return false;

    if (state.veganOnly && !producer.products.some((p) => p.vegan)) {
      return false;
    }

    return true;
  }

  function filteredProducts(producer) {
    const q = state.query.trim().toLowerCase();
    return producer.products.filter((p) => {
      if (state.veganOnly && !p.vegan) return false;
      if (!q) return true;
      // If the producer name/focus already matched the query, show all its products;
      // otherwise only show products whose own name matches.
      const producerLevelMatch =
        producer.name.toLowerCase().includes(q) || producer.focus.toLowerCase().includes(q);
      return producerLevelMatch || p.name.toLowerCase().includes(q);
    });
  }

  function render() {
    const visibleProducers = PRODUCERS.filter(matchesProducer);
    grid.innerHTML = "";

    if (visibleProducers.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No producers match your filters. Try clearing the search or category.";
      grid.appendChild(empty);
      resultCount.textContent = "0 producers";
      return;
    }

    let totalProducts = 0;

    visibleProducers.forEach((producer) => {
      const products = filteredProducts(producer);
      if (products.length === 0) return;
      totalProducts += products.length;

      const section = document.createElement("section");
      section.className = "producer";

      const head = document.createElement("div");
      head.className = "producer-head";
      head.innerHTML = `<h2>${escapeHtml(producer.name)}</h2><span class="category-pill">${escapeHtml(
        categoryLabel(producer.category)
      )}</span>`;
      section.appendChild(head);

      const meta = document.createElement("div");
      meta.className = "producer-meta";
      const websiteLink = producer.website
        ? ` &middot; <a href="${producer.website}" target="_blank" rel="noopener">${producer.website.replace(
            /^https?:\/\//,
            ""
          )}</a>`
        : "";
      meta.innerHTML = `${escapeHtml(producer.focus)}${websiteLink}`;
      section.appendChild(meta);

      const productGrid = document.createElement("div");
      productGrid.className = "product-grid";

      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        const veganBadge = product.vegan ? '<span class="badge vegan">✓ Vegan</span>' : "";
        card.innerHTML = `
          <div class="badges">${veganBadge}</div>
          <h3>${escapeHtml(product.name)}</h3>
          <div class="sizes">${escapeHtml(product.sizes)}</div>
        `;
        productGrid.appendChild(card);
      });

      section.appendChild(productGrid);
      grid.appendChild(section);
    });

    resultCount.textContent = `${visibleProducers.length} producer${
      visibleProducers.length === 1 ? "" : "s"
    } · ${totalProducts} product${totalProducts === 1 ? "" : "s"}`;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Event wiring ----------
  let searchDebounce;
  searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      if (state.query.trim()) {
        trackEvent("catalogue_search", { search_term: state.query.trim() });
      }
    }, 600);
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.category = chip.dataset.category;
      render();
      trackEvent("catalogue_filter", { category: state.category });
    });
  });

  veganCheckbox.addEventListener("change", (e) => {
    state.veganOnly = e.target.checked;
    render();
    trackEvent("catalogue_filter", { vegan_only: state.veganOnly });
  });

  // Track outbound clicks to producer websites
  grid.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.href) {
      trackEvent("outbound_click", { link_url: link.href });
    }
  });

  render();
})();
