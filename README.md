# Treasure Hunter

[![OSCS Status](https://www.oscs1024.com/platform/badge/ruby0322/TreasureHunterWebsite.svg?size=small)](https://www.oscs1024.com/project/ruby0322/TreasureHunterWebsite?ref=badge_small)

Feel free to contribute!

## Expected Appearence

### Home page

![](https://media.discordapp.net/attachments/893439505988743178/995222997482868736/unknown.png?width=1758&height=1001)

### Location

![](https://media.discordapp.net/attachments/893439505988743178/995024589283409960/unknown.png?width=1758&height=1001)

### Events

![](https://media.discordapp.net/attachments/893439505988743178/995024909619167262/unknown.png?width=1758&height=1001)

### Popups

![](https://media.discordapp.net/attachments/893439505988743178/995223155377438840/unknown.png?width=1758&height=1001)

## Reported Bugs

- [ ] 標籤在行動裝置上排版過於冗長
- [ ] 行動裝置網頁右側有條白縫
- [ ] 字體在特定瀏覽器會跑掉
- [ ] 農場介紹影片點擊後 anchor href 錯亂
- [ ] 農場介紹影片點擊彈跳視窗無法點擊空白處退出

## Tech Stack

- Frontend
    - Plain HTML & CSS
    - jQuery for RWD
    - no CSS Library
    - Google Fonts
- Backend
    - Python Flask
    - Python gunicorn
- Server
    - Deployed to Heroku

## Dev Log

> 07/06
- 構思首頁版面及風格
    - 採用現代簡約風格，營造神秘感以契合主題
- 開始撰寫首頁
    - 最初樣貌
    ![](https://media.discordapp.net/attachments/893439505988743178/994270030164410408/unknown.png?width=1758&height=1001)
> 07/07
- 重新設計首頁版面
    - 採用 emoji 作為網頁主要元素
    - 採用 [1inch](https://app.1inch.io/#/1/swap/WETH/DAI) 的 color palette
    - 設計 "Tags" ，致敬社群媒體 HashTags
- 新增「點擊更換 emoji」功能
- 新增「點擊特效」
- 將部分 `script.js` 中程式碼更新為 jQuery 、ES6 (Modern JavaScript) 語法
- 撰寫 Footer

> 07/08
 
- 新增「定時更換 emoji」功能
- 更動「點擊更換 emoji」為「點擊旋轉 emoji」
- 撰寫 Location Page
    - 新增 Google Maps Embed
- 撰寫 Events Page

> 07/09

- 更新 Tags 內容
- 新增「彈跳視窗」功能
- 新增三富農場介紹影片 Youtube Embed

> 07/10
