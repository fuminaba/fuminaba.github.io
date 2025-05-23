---
layout: default
title: Most Recent News
permalink: /news/
# Important for jekyll-paginate-v2 autopages if you're using this method
# and want this specific file to be the source for pagination
pagination:
  enabled: true
  collection: posts # Assuming your news items are 'posts'
nav_order: 4
---

{% if page.title %}
<h1>{{ page.title }}</h1>
{% endif %}

<div class="post-list">
  {% for post in paginator.posts %}
    <article class="post-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      {% if post.excerpt %}
        <div class="post-excerpt">
          {{ post.excerpt }}
        </div>
      {% endif %}
    </article>
  {% else %}
    <p>No news posts found.</p>
  {% endfor %}
</div>

<!-- Pagination navigation -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}<a href="{{ paginator.previous_page_path | relative_url }}" class="previous">Previous</a>{% else %}<span class="previous">Previous</span>{% endif %}
  <span class="page_number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}<a href="{{ paginator.next_page_path | relative_url }}" class="next">Next</a>{% else %}<span class="next">Next</span>{% endif %}
</div>
{% endif %}

