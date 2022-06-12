# A Notion-like Jekyll theme

- This is a modified Jekyll theme based on [official theme](https://github.com/pages-themes/primer).
- There will be no plan to have a pull request to merge the original repo.
- All features are designed to compatible to [`github-pages`](https://github.com/github/pages-gem), so that your Jekyll site will be generated well by [GitHub Pages](https://pages.github.com/).

## Usage

Install `github-pages`

```sh
gem install github-pages
```

see what plugins are installed

```sh
github-pages versions
```

Edit `_config.yml`, add

```yml
plugins:
    - jekyll-remote-theme

remote_theme: xdanger/jekyll-theme-notion
```

Run your site locally

```sh
jekyll serve -l
```
