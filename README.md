
## 1. Thông tin sinh viên
- **Họ và tên:** Trần Gia Hồng
- **MSSV:** 23810310336
- **Lớp:** D18CNPM5
- **Môn học:** Lập trình thiết bị di động

## 2. Hướng dẫn chạy Project
Đảm bảo bạn đã cài đặt Node.js và Expo CLI trên máy tính.

**Bước 1:** Clone repository về máy
\`\`\`bash
git clone <đường-link-repo-github-của-bạn>
cd EXAM_TikTok_UI_23810310336_Tran_Gia_Hong
\`\`\`

**Bước 2:** Cài đặt các gói thư viện (Dependencies)
\`\`\`bash
npm install
\`\`\`

**Bước 3:** Khởi chạy ứng dụng
\`\`\`bash
npx expo start
\`\`\`
*Sử dụng ứng dụng Expo Go trên điện thoại để quét mã QR, hoặc nhấn phím `a` để mở trên máy ảo Android / `i` để mở trên máy ảo iOS.*

## 3. Cấu trúc Navigation
- **Bottom Tabs Navigator:** Điều hướng chính giữa `Home` và `Comments`.
- **Top Tabs Navigator:** Nằm lồng trong tab `Home`, điều hướng vuốt (swipe) mượt mà giữa màn hình `Following` và `For You`.

## 4. Ảnh chụp màn hình (Screenshots)

| Home (Following) | Home (For You) | Comments |
|:---:|:---:|:---:|
| ![Following](./screenshots/f1.png) | ![For You](./screenshots/f2.png) | ![Comments](./screenshots/cmt.png) |