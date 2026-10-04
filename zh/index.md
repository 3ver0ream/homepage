---
layout: page
title: 首页
lang: zh
translation_key: home
nav_key: home
permalink: /zh/
show_title: false
---

<section class="hero">
  <p class="eyebrow">个人主页</p>
  <h1 class="hero-title">{{ site.data.profile.name_zh | escape }}</h1>
  <p class="hero-description">{{ site.data.profile.role_zh | escape }}</p>
  <p>这里记录我的研究与学习笔记。</p>
  <div class="hero-links">
    <a href="{{ '/zh/about/' | relative_url }}">关于我 <span aria-hidden="true">↗</span></a>
    <a href="{{ '/zh/blog/' | relative_url }}">阅读笔记 <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="research-heading">
  <div class="section-heading">
    <h2 id="research-heading">研究</h2>
  </div>
  <div class="placeholder-panel">
    <p>理论物理</p>
    <p class="placeholder-copy">研究内容将陆续更新。</p>
    <a href="{{ '/zh/research/' | relative_url }}">研究页面 <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="notes-heading">
  <div class="section-heading">
    <h2 id="notes-heading">最近的笔记</h2>
    <a href="{{ '/zh/blog/' | relative_url }}">全部笔记 <span aria-hidden="true">→</span></a>
  </div>
  {% include post-list.html limit=3 %}
</section>
