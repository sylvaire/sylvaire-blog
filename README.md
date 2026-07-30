# Sylvaire Notes

一个零构建依赖、可直接部署到 Cloudflare Pages 的静态技术博客。

## 本地预览

```bash
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080`。

## Cloudflare Pages

### Git 集成

1. 把本仓库推送到 GitHub。
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git。
3. 选择本仓库。
4. Production branch: `main`
5. Framework preset: `None`
6. Build command: `exit 0`
7. Build output directory: `.`
8. Deploy。

### Wrangler 直接部署

```bash
npx wrangler login
npx wrangler pages deploy . --project-name sylvaire-blog
```

## 新增文章

在 `posts/` 下创建 HTML，并在 `index.html` 的 `article-grid` 中增加文章卡片即可。
