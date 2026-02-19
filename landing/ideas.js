(function () {
  'use strict';

  var IDEAS_URL = 'ideas.json';

  function byId(id) { return document.getElementById(id); }

  function getQueryId() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || '';
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
    singleEl.innerHTML =
      '<a href="ideas.html" class="idea-back">&larr; All ideas</a>' +
      '<article class="idea-detail">' +
      '<span class="idea-cat">' + escapeHtml(catLabel) + '</span>' +
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
      var href = 'ideas.html?id=' + encodeURIComponent(idea.id);
      li.innerHTML =
        '<a href="' + escapeHtml(href) + '" class="idea-card-inner">' +
        '<span class="idea-title">' + escapeHtml(idea.title) + '</span>' +
        '<span class="idea-summary">' + escapeHtml(idea.summary) + '</span>' +
        '<span class="idea-read-more">View idea &rarr;</span>' +
        '<span class="idea-cat-pill">' + escapeHtml(catLabel) + '</span>' +
        '</a>';
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
    var singleId = getQueryId();
    var categorySelect = byId('ideas-category');
    var searchInput = byId('ideas-search');

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
        renderCategoryPills(categories, '', pillsContainer, categorySelect);
        if (categorySelect) {
          categorySelect.addEventListener('change', function () {
            var val = categorySelect.value;
            pillsContainer.querySelectorAll('.idea-pill').forEach(function (p) {
              p.classList.toggle('idea-pill-active', p.getAttribute('data-category') === val);
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
            renderBoard(ideas, categories, catMap);
          }
        } else {
          setPageState(null);
          renderBoard(ideas, categories, catMap);
        }

        function applyFilter() {
          var catVal = categorySelect ? categorySelect.value : '';
          var q = searchInput ? searchInput.value : '';
          var filtered = filterIdeas(ideas, catVal, q);
          renderBoard(filtered, categories, catMap);
        }

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
