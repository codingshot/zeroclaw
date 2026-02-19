(function () {
  'use strict';

  var GITHUB_REPO = 'https://github.com/zeroclaw-labs/zeroclaw';
  var IDEAS_URL = 'ideas.json';

  function byId(id) {
    return document.getElementById(id);
  }

  function renderIdeas(data) {
    var container = byId('ideas-container');
    var filter = byId('idea-filter');
    if (!container || !filter) return;

    var categories = data.categories || [];
    var ideas = data.ideas || [];

    categories.forEach(function (cat) {
      var opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.label;
      filter.appendChild(opt);
    });

    function filterIdeas() {
      var value = filter.value;
      container.querySelectorAll('.idea-card').forEach(function (card) {
        var cat = card.getAttribute('data-category');
        card.classList.toggle('hidden', value !== '' && cat !== value);
      });
    }

    filter.addEventListener('change', filterIdeas);

    var fragment = document.createDocumentFragment();
    var catMap = {};
    categories.forEach(function (c) { catMap[c.id] = c.label; });

    ideas.forEach(function (idea) {
      var li = document.createElement('li');
      li.className = 'idea-card';
      li.setAttribute('data-category', idea.category);
      li.setAttribute('role', 'listitem');
      li.innerHTML =
        '<span class="idea-cat">' + escapeHtml(catMap[idea.category] || idea.category) + '</span>' +
        '<span class="idea-title">' + escapeHtml(idea.title) + '</span>' +
        '<span class="idea-summary">' + escapeHtml(idea.summary) + '</span>';
      fragment.appendChild(li);
    });
    container.appendChild(fragment);
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function loadIdeas() {
    fetch(IDEAS_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('Failed to load ideas')); })
      .then(renderIdeas)
      .catch(function () {
        var container = byId('ideas-container');
        if (container) {
          container.innerHTML = '<p class="text-muted">Ideas could not be loaded. Check the repo for the ideas board.</p>';
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIdeas);
  } else {
    loadIdeas();
  }
})();
