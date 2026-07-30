# 发布到 GitHub + Cloudflare Pages

## 1. 创建 GitHub 仓库

建议仓库名：`sylvaire-blog`

创建一个空仓库，不要初始化 README / .gitignore / License。

然后在本目录执行：

```bash
git init
git add .
git commit -m "Initial blog"
git branch -M main
git remote add origin https://github.com/sylvaire/sylvaire-blog.git
git push -u origin main
```

## 2. Cloudflare Pages 连接 GitHub

Cloudflare Dashboard → Workers & Pages → Create application → Pages → Import an existing Git repository。

选择 `sylvaire/sylvaire-blog`，配置：

```text
Production branch: main
Framework preset: None
Build command: exit 0
Build output directory: .
```

点击 Deploy。部署后会得到类似：

```text
https://sylvaire-blog.pages.dev
```

以后只需要：

```bash
git add .
git commit -m "update blog"
git push
```

Cloudflare 会自动重新部署。
