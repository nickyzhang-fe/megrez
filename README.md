# megrez
北斗七星之天权星，又名文曲星

## 项目运行

```
git clone https://github.com/nickyzhang-fe/megrez.git

pnpm install
```
## 文档编辑

```
pnpm run dev:docs
```

## 文档发布

1. 文档构建

```
pnpm run build:docs
```

2. 将 `doc/.vitepress/dist` 的内容发布到 `gh-pages` 分支

```
git subtree push --prefix docs/.vitepress/dist origin gh-pages
```

**[链接](https://nickyzhang-fe.github.io/megrez/)**