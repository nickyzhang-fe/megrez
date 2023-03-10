#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
pnpm run build:docs

# 进入待发布的目录
# cd docs/.vitepress/dist

git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -u origin gh-pages
git subtree push --prefix docs/.vitepress/dist origin gh-pages

cd -
