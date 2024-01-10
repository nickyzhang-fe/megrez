# megrez

北斗七星之天权星，又名文曲星

访问地址：**[https://nickyzhang-fe.github.io/megrez/](https://nickyzhang-fe.github.io/megrez/)**

## 项目运行

```
git clone https://github.com/nickyzhang-fe/megrez.git

pnpm install
```

## 文档编辑

```
pnpm run dev:docs
```

## 内部依赖安装

```
pnpm install @megrez/constants -w
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

## 友情链接

1. [VitePress 运行自己封装的组件](https://blog.csdn.net/cwin8951/article/details/130803402)
2. [项目示例](https://github.com/wocwin/t-ui-plus/blob/master/package.json)
