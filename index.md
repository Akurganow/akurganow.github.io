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

## About

I have been building for the web since 2011 — full-time since 2013, and leading
engineering teams since 2018. I prefer product work: the more expertise a developer has
in the product, the deeper the involvement and the better the result.

I consider design and engineering inseparable — code and API design are design too.
Beyond prototypes and MVPs, interface decisions should be driven by sufficient, correct
data. I rely on automated testing focused on critical paths and the places where
problems actually appear, rather than on TDD for its own sake.

I organized the St. Petersburg frontend community spb.frontend() from its founding
and hosted its podcast, and later co-hosted
[Ponaehali](https://ponaehali.fireside.fm), a podcast unrelated to programming.
Outside of work: snowboarding and go-karting.

## Experience

{% for job in site.jobs reversed %}
<article class="job">
  <h3>{{ job.title }} <span class="job-company">{% if job.company_url %}at <a href="{{ job.company_url }}">{{ job.company }}</a>{% else %}{{ job.company_prefix | default: "at" }} {{ job.company }}{% endif %}</span></h3>
  <p class="job-dates">{{ job.dates }}</p>
  {{ job.content | markdownify }}
</article>
{% endfor %}

## Links

- [GitHub](https://github.com/Akurganow)<span class="print-only"> — https://github.com/Akurganow</span>
- [CodePen](https://codepen.io/Akurganow)<span class="print-only"> — https://codepen.io/Akurganow</span>
- [Talk at RIT++ 2017](https://youtu.be/PUE6Avu1Yak)<span class="print-only"> — https://youtu.be/PUE6Avu1Yak</span>
- [Interview for Habr 2017](https://youtu.be/tmgex8T5zTA)<span class="print-only"> — https://youtu.be/tmgex8T5zTA</span>
{: .links}
