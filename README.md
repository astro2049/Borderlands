# Up Index Q

一个显示哔哩哔哩视频の点赞数/播放数百分比的 Chrome 插件

## Up index :cocktail:

**_Up index_** 是 **点赞数** 在 **播放数** 中的 **百分比 (%)**

-   **_Up index_** % = _点赞数_ / _播放数_

### 代码中的计算方法

> let **_upIndex_** = viewCount === 0 ? 0 : ((likes / viewCount) \* 100).toFixed(1);

---

Chrome extension to show Bilibili likes / view count percentage

## Up index :cocktail:

For videos, **_Up index_** is the **percentage (%)** of **likes** in **view count**

-   **_Up index_** % = _likes_ / _view count_

### Calculation method in code

> let **_upIndex_** = viewCount === 0 ? 0 : ((likes / viewCount) \* 100).toFixed(1);
