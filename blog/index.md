---
layout: default
title: Blog Posts
permalink: /wiki/
# Important for jekyll-paginate-v2 autopages if you're using this method
# and want this specific file to be the source for pagination
pagination:
  enabled: true
  collection: wiki # Specifies that this page paginates the 'blogs' collection
nav_order: 5
---

<h1>Introduction</h1>
<p style='text-align:justify;'>
This page contains multiple articles which may be helpful as a resource for new students learning Python 
for research. This wiki covers things from coding environments to useful tips and tricks for actual 
analysis including (not limited to): processing of matrix/tabular data, basic file manipulation, statistics, 
writing clean code, deep learning (eventually) etc.
<br><br>
<b>IMPORTANT:</b> All errata/suggestions are to be sent to <code>fumiy@student.ubc.ca</code>
</p>

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
    <p>No blog posts found.</p>
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
