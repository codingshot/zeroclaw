(function () {
  'use strict';

  var IDEAS_URL = 'ideas.json';
  var IDEAS_PAGE = 'ideas.html';
  var GITHUB_API = 'https://api.github.com/repos/zeroclaw-labs/zeroclaw';

  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function getFeaturedIdeas(data) {
    var ideas = data.ideas || [];
    var featuredIds = data.featuredIds || ideas.slice(0, 6).map(function (i) { return i.id; });
    return featuredIds.map(function (id) {
      return ideas.find(function (i) { return i.id === id; });
    }).filter(Boolean);
  }

  function renderFeaturedIdeas(data) {
    var container = byId('ideas-container');
    if (!container) return;

    var categories = data.categories || [];
    var catMap = {};
    categories.forEach(function (c) { catMap[c.id] = c.label; });

    var featured = getFeaturedIdeas(data);
    var fragment = document.createDocumentFragment();

    featured.forEach(function (idea) {
      var li = document.createElement('li');
      li.className = 'idea-card idea-card-link';
      li.setAttribute('role', 'listitem');
      var catLabel = catMap[idea.category] || idea.category;
      var href = IDEAS_PAGE + '?id=' + encodeURIComponent(idea.id);
      li.innerHTML =
        '<a href="' + escapeHtml(href) + '" class="idea-card-inner">' +
        '<span class="idea-cat">' + escapeHtml(catLabel) + '</span>' +
        '<span class="idea-title">' + escapeHtml(idea.title) + '</span>' +
        '<span class="idea-summary">' + escapeHtml(idea.summary) + '</span>' +
        '<span class="idea-read-more">View idea &rarr;</span>' +
        '</a>';
      fragment.appendChild(li);
    });
    container.appendChild(fragment);
  }

  function loadIdeas() {
    fetch(IDEAS_URL)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('Failed to load ideas')); })
      .then(renderFeaturedIdeas)
      .catch(function () {
        var container = byId('ideas-container');
        if (container) {
          container.innerHTML = '<li class="ideas-error"><p class="text-muted">Ideas could not be loaded. <a href="' + IDEAS_PAGE + '">Open ideas board</a>.</p></li>';
        }
      });
  }

  function formatStars(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function updateStarCount(count) {
    var el = document.querySelectorAll('[data-star-count]');
    var text = ' ' + formatStars(count);
    el.forEach(function (e) { e.textContent = text; });
  }

  function loadGitHubStars() {
    fetch(GITHUB_API, { headers: { Accept: 'application/vnd.github.v3+json' } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('GitHub API error')); })
      .then(function (data) {
        var n = data.stargazers_count;
        if (typeof n === 'number' && n >= 0) updateStarCount(n);
      })
      .catch(function () { /* leave star count empty on rate limit or network error */ });
  }

  function init() {
    loadIdeas();
    loadGitHubStars();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
