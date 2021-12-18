# Borderlands

Chrome extension to show Bilibili likes / view count percentage

## Up index :cocktail:

For videos, the **_Up index_** is the **percentage** of a video's **likes** in itself's **view count**

So in short, **_Up index_** % = _likes_ / _view count_

### Calculation method in code

> let **_upIndex_** = viewCount === 0 ? 0 : ((likes / viewCount) \* 100).toFixed(1);
