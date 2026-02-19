(function () {
  'use strict';

  var ECOSYSTEM_URL = 'ecosystem.json';

  function byId(id) { return document.getElementById(id); }

  function getParams() {
    var params = new URLSearchParams(window.location.search);
    return {
      q: params.get('q') || '',
      status: params.get('status') || ''
    };
  }

  function updateUrl(params, replace) {
    var qs = [];
    if (params.q) qs.push('q=' + encodeURIComponent(params.q));
    if (params.status) qs.push('status=' + encodeURIComponent(params.status));
    var search = qs.length ? '?' + qs.join('&') : '';
    var url = window.location.pathname + search + window.location.hash;
    window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function filterItems(items, statusId, searchText) {
    var q = (searchText || '').toLowerCase().trim();
    return items.filter(function (item) {
      if (statusId && (item.status || '') !== statusId) return false;
      if (!q) return true;
      var name = (item.name || '').toLowerCase();
      var desc = (item.description || '').toLowerCase();
      return name.indexOf(q) !== -1 || desc.indexOf(q) !== -1;
    });
  }

  function renderBoard(items) {
    var container = byId('ecosystem-container');
    var countEl = byId('ecosystem-count');
    var emptyEl = byId('ecosystem-empty');
    if (!container) return;

    container.innerHTML = '';
    if (countEl) countEl.textContent = items.length + ' project' + (items.length === 1 ? '' : 's');
    if (emptyEl) emptyEl.classList.toggle('hidden', items.length > 0);

    items.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'idea-card ecosystem-card';
      li.setAttribute('role', 'listitem');
      var status = item.status || 'building';
      var statusLabel = status === 'production' ? 'Production' : 'Building';
      var link = item.link || item.repo || '';
      var inner = '<span class="idea-title">' + escapeHtml(item.name) + '</span>' +
        '<span class="idea-summary">' + escapeHtml(item.description || '') + '</span>' +
        '<span class="idea-cat-pill ecosystem-status ecosystem-status-' + escapeHtml(status) + '">' + escapeHtml(statusLabel) + '</span>';
      if (link) {
        li.innerHTML = '<a href="' + escapeHtml(link) + '" class="idea-card-inner" rel="noopener noreferrer" target="_blank">' + inner + '</a>';
      } else {
        li.innerHTML = '<div class="idea-card-inner">' + inner + '</div>';
      }
      container.appendChild(li);
    });
  }

  function run() {
    var params = getParams();
    var searchInput = byId('ecosystem-search');
    var statusPills = byId('ecosystem-status-pills');
    var clearBtn = byId('ecosystem-clear-filters');

    fetch(ECOSYSTEM_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('Failed to load')); })
      .then(function (data) {
        var items = data.items || [];

        if (searchInput) searchInput.value = params.q;
        var initialStatus = params.status;
        if (statusPills) {
          statusPills.querySelectorAll('.idea-pill').forEach(function (p) {
            var s = p.getAttribute('data-status') || '';
            p.classList.toggle('idea-pill-active', s === initialStatus);
          });
        }

        function applyFilter() {
          var active = statusPills ? statusPills.querySelector('.idea-pill-active') : null;
          var statusVal = active ? (active.getAttribute('data-status') || '') : '';
          var q = searchInput ? searchInput.value : '';
          var filtered = filterItems(items, statusVal, q);
          renderBoard(filtered);
          if (!getParams().q && !getParams().status) updateUrl({ q: q, status: statusVal }, true);
        }

        function syncUrlFromFilters() {
          var active = statusPills ? statusPills.querySelector('.idea-pill-active') : null;
          var statusVal = active ? (active.getAttribute('data-status') || '') : '';
          var q = searchInput ? searchInput.value.trim() : '';
          updateUrl({ q: q, status: statusVal }, true);
        }

        if (statusPills) {
          statusPills.querySelectorAll('.idea-pill').forEach(function (p) {
            p.addEventListener('click', function () {
              statusPills.querySelectorAll('.idea-pill').forEach(function (x) { x.classList.remove('idea-pill-active'); });
              p.classList.add('idea-pill-active');
              applyFilter();
              syncUrlFromFilters();
            });
          });
        }

        if (clearBtn) {
          clearBtn.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            if (statusPills) {
              statusPills.querySelectorAll('.idea-pill').forEach(function (p) {
                p.classList.toggle('idea-pill-active', (p.getAttribute('data-status') || '') === '');
              });
            }
            updateUrl({}, true);
            applyFilter();
          });
        }

        if (searchInput) {
          searchInput.addEventListener('input', applyFilter);
          searchInput.addEventListener('search', applyFilter);
        }

        applyFilter();
        syncUrlFromFilters();
      })
      .catch(function () {
        var container = byId('ecosystem-container');
        if (container) container.innerHTML = '';
        var emptyEl = byId('ecosystem-empty');
        if (emptyEl) {
          emptyEl.classList.remove('hidden');
          emptyEl.querySelector('.ideas-empty-desc').textContent = 'Could not load ecosystem list.';
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
