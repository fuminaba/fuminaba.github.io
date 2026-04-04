---
layout: default
title: News
permalink: /news/
nav_order: 4
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
  <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 40px;">
    {{ year.name }}
  </h2>

  <div class="publications-list">
    {% for post in year.items %}
      <div class="pub-item" style="display: flex; gap: 20px; margin-bottom: 1.5rem;">
        
        <div style="flex: 0 0 100px; color: #666; font-style: italic; margin-top: 2px;">
          {{ post.date | date: "%b %d" }}
        </div>

        <div style="flex: 1;">
          <h3 style="margin-top: 0; margin-bottom: 5px; font-size: 1.1rem;">
            <a href="{{ post.url | relative_url }}" style="text-decoration: none;">{{ post.title }}</a>
          </h3>
          
          <div class="post-excerpt" style="color: #444; font-size: 0.95rem;">
            {{ post.excerpt | strip_html | truncatewords: 25 }}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}