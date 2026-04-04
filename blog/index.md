---
layout: default
title: Wiki Posts
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
This page contains multiple articles which may be helpful as a resource for new students of NextPath Lab. 
As the articles are intended for new students, specific tools, design considerations, tech stack etc. may be specific for our lab, although things are made generally applicable where possible.

<br><br>
<b>IMPORTANT:</b> Please send all errata/suggestions to <code>fumiy@student.ubc.ca</code>
</p>
{% assign sorted_wiki = site.wiki | sort: "date" | reverse %}
{% assign wiki_by_year = sorted_wiki | group_by_exp: "item", "item.date | date: '%Y'" | sort: "name" | reverse %}

{% for year in wiki_by_year %}
  <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 40px;">
    {{ year.name }}
  </h2>

  <div class="publications-list">
    {% for item in year.items %}
      <div class="pub-item" style="display: flex; gap: 20px; margin-bottom: 1.5rem;">
        
        <div style="flex: 0 0 100px; color: #666; font-style: italic; margin-top: 2px;">
          {{ item.date | date: "%b %d" }}
        </div>

        {% if item.image %}
        <div style="flex: 0 0 150px;">
          <img src="{{ item.image | relative_url }}" alt="Thumbnail" style="width: 100%; border-radius: 4px; border: 1px solid #eee; object-fit: cover;">
        </div>
        {% endif %}

        <div style="flex: 1;">
          <h3 style="margin-top: 0; margin-bottom: 5px; font-size: 1.1rem;">
            <a href="{{ item.url | relative_url }}" style="text-decoration: none;">{{ item.title }}</a>
          </h3>
          
          <div class="post-excerpt" style="color: #444; font-size: 0.95rem;">
            {{ item.excerpt | strip_html | truncatewords: 25 }}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}