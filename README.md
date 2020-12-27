# 餐廳清單
採用 Node.js 和 Express 打造的簡易登入系統，用來學習 express-session 與 passport 的初步認識

## 功能描述 (features)
- 可輸入帳號密碼登入 Email & Password
- 註冊新用戶
- 驗證是否重複註冊
- 登入密碼錯誤時會自行跳回登入頁面
- 驗證登入狀態 無法直接左上角前往首頁

## 專案畫面
![](https://i.imgur.com/Z7xbXpi.png)

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- mongodb with mongoose as ODM
- express-session v1.17.1
- passport v0.4.1
## 安裝與執行步驟 (installation and execution)

- 使用 Git Bash

1. 將專案clone到本地環境
   ```
   git clone https://github.com/a7465847/Restaurant_List-Project.git
   ```

2. 進入專案資料夾
   ```
   cd restaurant_list
   ```

3. 查看專案內 package.json 檔案需安裝的npm套件
   ```
   npm install 
   ```

4. 安裝 nodemon 套件 (本地未安裝  請執行此步驟)
   ```
   npm install -g nodemon    
   ```

5. 新增種子資料
   ```
   npm run seed
   ```

6. 啟動伺服器，執行 app.js 檔案
   ```
   npm run dev or npm run start
   ```

7. 終端機回應以下內容 代表代表可執行
   ```
   Express is running on http://localhost:3000
   ```

8. 在瀏覽器輸入 http://localhost:3000 開始使用



