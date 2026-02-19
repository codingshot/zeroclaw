(function () {
  'use strict';

  var IDEAS_URL = 'ideas.json';

  function byId(id) { return document.getElementById(id); }

  function getParams() {
    var params = new URLSearchParams(window.location.search);
    return {
      id: params.get('id') || '',
      q: params.get('q') || '',
      category: params.get('category') || ''
    };
  }

  function getQueryId() {
    return getParams().id;
  }

  function updateUrl(params, replace) {
    var qs = [];
    if (params.id) qs.push('id=' + encodeURIComponent(params.id));
    if (params.q) qs.push('q=' + encodeURIComponent(params.q));
    if (params.category) qs.push('category=' + encodeURIComponent(params.category));
    var search = qs.length ? '?' + qs.join('&') : '';
    var url = window.location.pathname + search + window.location.hash;
    var method = replace ? 'replaceState' : 'pushState';
    window.history[method]({}, '', url);
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function setPageState(singleId) {
    var singleEl = byId('ideas-single');
    var boardEl = byId('ideas-board');
    if (!singleEl || !boardEl) return;
    if (singleId) {
      singleEl.classList.remove('hidden');
      boardEl.classList.add('hidden');
    } else {
      singleEl.classList.add('hidden');
      boardEl.classList.remove('hidden');
    }
  }

  function renderSingle(idea, catLabel) {
    var singleEl = byId('ideas-single');
    if (!singleEl) return;
    var catHref = 'ideas.html?category=' + encodeURIComponent(idea.category);
    var catHtml = '<a href="' + escapeHtml(catHref) + '" class="idea-cat idea-cat-link">' + escapeHtml(catLabel) + '</a>';
    singleEl.innerHTML =
      '<a href="ideas.html" class="idea-back">&larr; All ideas</a>' +
      '<article class="idea-detail">' +
      catHtml +
      '<h2 class="idea-detail-title">' + escapeHtml(idea.title) + '</h2>' +
      '<p class="idea-detail-summary">' + escapeHtml(idea.summary) + '</p>' +
      (idea.link ? '<p><a href="' + escapeHtml(idea.link) + '" rel="noopener noreferrer" target="_blank">Related link</a></p>' : '') +
      '</article>';
    setPageState(idea.id);
  }

  function filterIdeas(ideas, categoryId, searchText) {
    var q = (searchText || '').toLowerCase().trim();
    return ideas.filter(function (idea) {
      if (categoryId && idea.category !== categoryId) return false;
      if (!q) return true;
      var title = (idea.title || '').toLowerCase();
      var summary = (idea.summary || '').toLowerCase();
      return title.indexOf(q) !== -1 || summary.indexOf(q) !== -1;
    });
  }

  function renderBoard(ideas, categories, catMap) {
    var container = byId('ideas-container');
    var countEl = byId('ideas-count');
    var emptyEl = byId('ideas-empty');
    if (!emptyEl) emptyEl = document.querySelector('.ideas-empty-state');
    if (!container) return;

    container.innerHTML = '';
    if (countEl) countEl.textContent = ideas.length + ' idea' + (ideas.length === 1 ? '' : 's');
    if (emptyEl) emptyEl.classList.toggle('hidden', ideas.length > 0);

    ideas.forEach(function (idea) {
      var li = document.createElement('li');
      li.className = 'idea-card idea-card-link';
      li.setAttribute('role', 'listitem');
      var catLabel = catMap[idea.category] || idea.category;
      var ideaHref = 'ideas.html?id=' + encodeURIComponent(idea.id);
      var catHref = 'ideas.html?category=' + encodeURIComponent(idea.category);
      li.innerHTML =
        '<a href="' + escapeHtml(ideaHref) + '" class="idea-card-inner">' +
        '<span class="idea-title">' + escapeHtml(idea.title) + '</span>' +
        '<span class="idea-summary">' + escapeHtml(idea.summary) + '</span>' +
        '<span class="idea-read-more">View idea &rarr;</span>' +
        '<span class="idea-cat-pill" role="link" tabindex="0" data-category-href="' + escapeHtml(catHref) + '">' + escapeHtml(catLabel) + '</span>' +
        '</a>';
      var pill = li.querySelector('.idea-cat-pill');
      if (pill) {
        pill.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = pill.getAttribute('data-category-href');
        });
      }
      container.appendChild(li);
    });
  }

  function renderCategoryPills(categories, selectedId, pillsContainer, categorySelect) {
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';
    var allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'idea-pill' + (selectedId === '' ? ' idea-pill-active' : '');
    allBtn.textContent = 'All';
    allBtn.setAttribute('data-category', '');
    allBtn.addEventListener('click', function () {
      if (categorySelect) categorySelect.value = '';
      pillsContainer.querySelectorAll('.idea-pill').forEach(function (p) { p.classList.remove('idea-pill-active'); });
      allBtn.classList.add('idea-pill-active');
      if (typeof window.applyIdeasFilter === 'function') window.applyIdeasFilter();
    });
    pillsContainer.appendChild(allBtn);
    categories.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'idea-pill' + (selectedId === cat.id ? ' idea-pill-active' : '');
      btn.textContent = cat.label;
      btn.setAttribute('data-category', cat.id);
      btn.addEventListener('click', function () {
        if (categorySelect) categorySelect.value = cat.id;
        pillsContainer.querySelectorAll('.idea-pill').forEach(function (p) { p.classList.remove('idea-pill-active'); });
        btn.classList.add('idea-pill-active');
        if (typeof window.applyIdeasFilter === 'function') window.applyIdeasFilter();
      });
      pillsContainer.appendChild(btn);
    });
  }

  function run() {
    var params = getParams();
    var singleId = params.id;
    var categorySelect = byId('ideas-category');
    var searchInput = byId('ideas-search');
    var clearBtn = byId('ideas-clear-filters');

    fetch(IDEAS_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('Failed to load')); })
      .then(function (data) {
        var categories = data.categories || [];
        var ideas = data.ideas || [];
        var catMap = {};
        categories.forEach(function (c) { catMap[c.id] = c.label; });

        categories.forEach(function (cat) {
          var opt = document.createElement('option');
          opt.value = cat.id;
          opt.textContent = cat.label;
          if (categorySelect) categorySelect.appendChild(opt);
        });

        var pillsContainer = byId('ideas-category-pills');
        var initialCategory = singleId ? '' : (params.category || '');
        var initialQ = singleId ? '' : (params.q || '');
        if (searchInput) searchInput.value = initialQ;
        if (categorySelect) categorySelect.value = initialCategory;
        renderCategoryPills(categories, initialCategory, pillsContainer, categorySelect);

        if (categorySelect) {
          categorySelect.addEventListener('change', function () {
            pillsContainer.querySelectorAll('.idea-pill').forEach(function (p) {
              p.classList.toggle('idea-pill-active', p.getAttribute('data-category') === categorySelect.value);
            });
            applyFilter();
          });
        }

        window.applyIdeasFilter = applyFilter;

        if (singleId) {
          var idea = ideas.find(function (i) { return i.id === singleId; });
          if (idea) {
            renderSingle(idea, catMap[idea.category] || idea.category);
            document.title = escapeHtml(idea.title) + ' — Ideas | ZeroClaw';
          } else {
            setPageState(null);
            applyFilter();
          }
        } else {
          setPageState(null);
          applyFilter();
          syncUrlFromFilters();
        }

        function applyFilter() {
          var catVal = categorySelect ? categorySelect.value : '';
          var q = searchInput ? searchInput.value : '';
          var filtered = filterIdeas(ideas, catVal, q);
          renderBoard(filtered, categories, catMap);
          syncUrlFromFilters();
        }

        function syncUrlFromFilters() {
          if (getParams().id) return;
          var catVal = categorySelect ? categorySelect.value : '';
          var q = searchInput ? searchInput.value.trim() : '';
          updateUrl({ q: q, category: catVal }, true);
        }

        function clearFilters() {
          if (searchInput) searchInput.value = '';
          if (categorySelect) categorySelect.value = '';
          if (pillsContainer) pillsContainer.querySelectorAll('.idea-pill').forEach(function (p) {
            p.classList.toggle('idea-pill-active', p.getAttribute('data-category') === '');
          });
          updateUrl({}, true);
          applyFilter();
        }
        if (clearBtn) clearBtn.addEventListener('click', clearFilters);
        var emptyClearBtn = byId('ideas-empty') && byId('ideas-empty').querySelector('.ideas-empty-clear');
        if (emptyClearBtn) emptyClearBtn.addEventListener('click', clearFilters);

        if (searchInput) {
          searchInput.addEventListener('input', applyFilter);
          searchInput.addEventListener('search', applyFilter);
        }
      })
      .catch(function () {
        setPageState(null);
        var container = byId('ideas-container');
        if (container) container.innerHTML = '<li class="ideas-error"><p class="text-muted">Ideas could not be loaded.</p></li>';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
