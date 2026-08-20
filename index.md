---
layout: default
---

## Details

<dl class="details">
  <dt>Location</dt>
  <dd>Valencia, Spain</dd>
  <dt>Email</dt>
  <dd><a href="mailto:me@akurganow.ru">me@akurganow.ru</a></dd>
  <dt>Born</dt>
  <dd>28 February 1986</dd>
  <dt>Languages</dt>
  <dd>Russian (native), English (professional working proficiency)</dd>
</dl>

## Summary

{% include summary.md %}

## Skills

<dl class="details">
  {%- for skill in site.data.skills %}
  <dt>{{ skill.group | escape }}</dt>
  <dd>{{ skill.items | escape }}</dd>
  {%- endfor %}
</dl>

## Experience

{% for job in site.jobs reversed %}
<article class="job">
  <h3>{{ job.title }} <span class="job-company">{% if job.company_url %}at <a href="{{ job.company_url }}">{{ job.company }}</a>{% else %}{{ job.company_prefix | default: "at" }} {{ job.company }}{% endif %}</span></h3>
  <p class="job-dates">{{ job.dates }}</p>
  {{ job.content | markdownify }}
</article>
{% endfor %}

## Links

- <a rel="me" href="https://www.linkedin.com/in/akurganow">LinkedIn</a><span class="print-only"> — https://www.linkedin.com/in/akurganow</span>
- <a rel="me" href="https://github.com/Akurganow">GitHub</a><span class="print-only"> — https://github.com/Akurganow</span>
- [CodePen](https://codepen.io/Akurganow)<span class="print-only"> — https://codepen.io/Akurganow</span>
- [Talk at RIT++ 2017](https://youtu.be/PUE6Avu1Yak)<span class="print-only"> — https://youtu.be/PUE6Avu1Yak</span>
- [Interview for Habr 2017](https://youtu.be/tmgex8T5zTA)<span class="print-only"> — https://youtu.be/tmgex8T5zTA</span>
{: .links}
