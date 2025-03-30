---
title: 新媒体中心
icon: mobile-screen
description: 校园新媒体运营与内容制作指南
---

# 新媒体中心

<div class="intro-section">
  <div class="intro-content">
    <p>欢迎来到新媒体中心！这里为您提供全面的校园新媒体运营指南和内容制作教程。无论是视频制作、图片设计，还是直播运营，您都能找到专业的解决方案。</p>
  </div>
</div>

## 教程分类

<div class="category-cards">
  <div class="category-card">
    <div class="category-icon">🎬</div>
    <div class="category-content">
      <h3>视频制作</h3>
      <ul>
        <li><a href="video.html">短视频拍摄与运营</a></li>
        <li><a href="capcut.html">剪映专业版教程</a></li>
      </ul>
    </div>
  </div>

  <div class="category-card">
    <div class="category-icon">📱</div>
    <div class="category-content">
      <h3>直播运营</h3>
      <ul>
        <li><a href="tiktok.html">抖音直播教程</a></li>
        <li><a href="135.html">135编辑器教程</a></li>
      </ul>
    </div>
  </div>

  <div class="category-card">
    <div class="category-icon">🎨</div>
    <div class="category-content">
      <h3>设计制作</h3>
      <ul>
        <li><a href="Photoshop.html">PS图片处理</a></li>
        <li><a href="canva.html">Canva设计</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="catalog-display-container">
  <Catalog base="/NewMedia/" />
</div>

<style scoped>
.intro-section {
  background: linear-gradient(135deg, #00C4CC20, #7D2AE820);
  border: 1px solid rgba(0, 196, 204, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
}

.intro-content {
  line-height: 1.6;
}

.intro-content p {
  margin: 0;
}

.category-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.category-card {
  border: 1px solid rgba(0, 196, 204, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.category-card:hover {
  border-color: #00C4CC;
  box-shadow: 0 4px 12px rgba(0, 196, 204, 0.1);
  transform: translateY(-5px);
}

.category-icon {
  font-size: 2em;
  margin-bottom: 1rem;
}

.category-content h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.category-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-content li {
  margin-bottom: 0.5rem;
}

.category-content a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.category-content a:hover {
  opacity: 1;
  color: #00C4CC;
}

.catalog-display-container {
  margin-top: 3rem;
}
</style>
