# PDF 页面旋转工具

一个基于 Next.js 的在线 PDF 页面旋转工具，支持单页、多页旋转，免费保存，无需注册。

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/dana322/20240514.git
cd 20240514
```

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 4. 构建生产环境

```bash
npm run build
npm start
```

---

## 目录结构

```
src/
  app/
    rotate-pdf/
      _components/    # 业务组件
      page.tsx        # 页面入口
  components/
    layout/           # 布局相关组件
    ui/               # 通用UI组件
public/
  robots.txt          # 爬虫规则
  ...
```

---

## SEO 相关

- 使用了 `next/head` 添加页面元信息（title、description、keywords）。
- 使用 `<script type="application/ld+json">` 注入结构化数据（JSON-LD）。
- 采用 `<header>`、`<main>`、`<footer>` 等语义化标签。
- URL 结构简洁，包含关键词。
- `/public/robots.txt` 控制爬虫抓取行为。
- 推荐配合 `next-sitemap` 插件自动生成站点地图。

---

## 其他说明

- **Node.js 版本要求**：建议 Node.js 20 及以上。（我用的`v22.11.0`）
- **PDF 预览与旋转**：基于 `react-pdf` 和 `pdf-lib` 实现，所有 PDF 操作均在前端完成，安全可靠。
-  

