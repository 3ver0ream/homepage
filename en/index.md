---
layout: page
title: Home
lang: en
translation_key: home
nav_key: home
permalink: /en/
show_title: false
---

<section class="hero">
  <p class="eyebrow">Personal homepage</p>
  <h1 class="hero-title">{{ site.data.profile.name_en | escape }}</h1>
  <p class="hero-description">{{ site.data.profile.role_en | escape }}</p>
  <p>A place for my research and study notes.</p>
  <div class="hero-links">
    <a href="{{ '/en/about/' | relative_url }}">About me <span aria-hidden="true">↗</span></a>
    <a href="{{ '/en/blog/' | relative_url }}">Read notes <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="research-heading">
  <div class="section-heading">
    <h2 id="research-heading">Research</h2>
  </div>
  <div class="placeholder-panel">
    <p>Theoretical physics</p>
    <p class="placeholder-copy">Research details will be added here.</p>
    <a href="{{ '/en/research/' | relative_url }}">Research page <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="notes-heading">
  <div class="section-heading">
    <h2 id="notes-heading">Recent notes</h2>
    <a href="{{ '/en/blog/' | relative_url }}">All notes <span aria-hidden="true">→</span></a>
  </div>
  {% include post-list.html limit=3 %}
</section>
