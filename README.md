# akurganow.github.io

Personal CV of Alexander Kurganov, published at [akurganow.github.io](https://akurganow.github.io/).

A minimal [Jekyll](https://jekyllrb.com/) site — no theme, no plugins, one layout.

## Structure

- `index.md` — the page itself: Details, About, Experience loop, Links
- `_jobs/` — one Markdown file per job, newest last by filename (`YYYY-MM-company.md`);
  front matter carries `title`, `company`, `company_url`, `dates`
- `_data/projects.yml` — the projects listed in the header
- `_layouts/default.html` — the single layout: head, header, footer
- `styles.css` — screen, print and dark-mode styles in one file

## Editing

Add or edit a job: create/change a file in `_jobs/`. Add a project: add an entry to
`_data/projects.yml`. Everything else is regular Markdown in `index.md`.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

## Deployment

GitHub Pages builds the `main` branch with Jekyll automatically — either publishing
source works (Settings → Pages): "GitHub Actions" with the suggested Jekyll workflow,
or classic "Deploy from a branch" (`main` / root).
