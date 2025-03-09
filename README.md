# 个人简历与作品集网站

这是一个现代化的个人简历与作品集展示网站，采用了现代Web设计的最佳实践。

## 功能特点

- **响应式设计**：在各种设备（从手机到桌面电脑）上都能完美展示
- **现代UI效果**：包含玻璃拟态、渐变背景、新拟物化按钮等时尚设计元素
- **交互体验**：平滑滚动、悬浮标签表单、微交互等增强用户体验
- **作品集展示**：带有过滤功能的作品集展示区，可按类别筛选
- **个人简历展示**：包含工作经验、技能和教育背景的时间线展示
- **联系表单**：方便访客直接通过网站联系您
- **明暗模式切换**：支持浅色和深色主题切换，并记住用户的偏好设置
- **回到顶部按钮**：在页面滚动时显示，便于用户快速返回页面顶部
- **多语言支持**：支持中英文切换，便于国际化展示，所有文本内容存储在单独的文件中

## 技术栈

- HTML5
- CSS3 (使用现代CSS特性)
- JavaScript (原生JS，无框架依赖)
- 外部库:
  - Tailwind CSS (用于响应式布局)
  - Font Awesome (用于图标)

## 自定义指南

### 个人信息

您需要在以下位置更新个人信息：

1. `index.html` 文件中的个人详情部分
2. 首页的简介文字
3. 关于我部分的个人简历文字
4. 技能部分的技能列表和进度
5. 作品集部分的项目展示
6. 工作经验部分的时间线
7. 联系部分的联系方式
8. `languages.js` 文件中的文本内容（支持中英文）

### 多语言支持

网站支持中英文双语切换，您可以轻松添加更多语言：

1. 所有文本内容都存储在 `languages.js` 文件中
2. 要添加新语言，只需在该文件中遵循相同的结构添加新的语言对象
3. 语言切换按钮会自动添加到导航栏中
4. 系统会根据用户的浏览器语言和之前的选择自动设置语言
5. 用户的语言偏好会被保存在本地存储中

示例添加新语言（法语）：
```javascript
fr: {
    nav: {
        home: "Accueil",
        // 其他导航项...
    },
    // 其他所有文本内容...
}
```

### 个性化设计

如果您想要修改网站的颜色主题和设计风格，您可以编辑 `styles.css` 文件中的以下部分：

```css
:root {
    /* 亮色模式变量 */
    --primary-color: #4361ee;
    --secondary-color: #3f37c9;
    --accent-color: #4895ef;
    /* 更多变量... */
    
    /* 暗色模式变量 */
    --dark-bg-color: #808080;
    --dark-text-color: #f7f7f7;
    /* 更多暗色变量... */
}
```

### 明暗模式切换

网站已集成明暗模式切换功能：

- 顶部导航栏中提供了明暗模式切换按钮
- 按钮采用图标+文字形式，方便用户理解
- 默认会根据用户的系统偏好设置初始主题
- 用户的选择会被保存在本地存储中，下次访问时自动应用
- 暗色模式使用灰色调 (#808080) 作为背景，搭配合适的文字颜色以确保可读性

### 添加您的照片

将您的个人照片替换占位图标：

1. 在 `index.html` 文件中找到 `.profile-img-placeholder` 类
2. 将占位图标替换为您的照片：

```html
<div class="profile-img-container mx-auto">
    <img src="path/to/your/photo.jpg" alt="您的名字" class="w-full h-full object-cover rounded-full">
</div>
```

### 添加作品

在作品集部分添加您的实际项目：

1. 使用提供的模板结构
2. 添加项目截图
3. 更新项目描述和使用的技术
4. 提供项目链接

## 部署说明

这是一个静态网站，可以部署在任何Web服务器或静态网站托管服务上：

1. GitHub Pages
2. Netlify
3. Vercel
4. 传统Web主机

只需上传所有文件到您的Web服务器或连接到您的代码存储库即可。

## 浏览器兼容性

该网站兼容所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

对于Internet Explorer用户，某些现代CSS功能可能无法正常工作。

## 许可和使用

该模板供您个人使用。请在使用前替换所有占位内容。

---

© 2023 您的名字 