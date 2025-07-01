# 🎓 Hệ thống Lưu trữ Bài giảng VSM

> Dự án được phát triển bởi tổ chức **Vietnam Student Marathon (VSM)** – phục vụ nhu cầu lưu trữ và trình chiếu tài liệu giảng dạy (PDF) cho giảng viên, sinh viên và quản trị viên tại các trường đại học.

---

## 🚀 Giới thiệu

**VSM Lecture Hub** là nền tảng lưu trữ và trình chiếu tài liệu PDF chuyên nghiệp, giao diện hiện đại, dễ sử dụng, hỗ trợ:

- 👨‍🏫 **Giảng viên**: upload, quản lý và trình chiếu tài liệu trực tiếp trên lớp
- 🧑‍🎓 **Sinh viên**: xem và đánh dấu tài liệu yêu thích
- 🛠 **Admin**: quản lý hệ thống, phân quyền người dùng

> Dự án được xây dựng với mục tiêu **miễn phí trọn đời**, tối ưu cho thiết bị di động, tablet và máy tính để bàn.

---

## 🧩 Công nghệ sử dụng

| Công nghệ | Mô tả |
|----------|-------|
| `Vite + React + TypeScript` | Giao diện frontend tốc độ cao, responsive |
| `Tailwind CSS + shadcn/ui` | Giao diện hiện đại, có Dark mode |
| `Supabase` | Backend lưu trữ dữ liệu và tệp PDF (thay Firebase) |
| `PostgreSQL + RLS` | Bảo mật phân quyền cấp bảng, cực kỳ an toàn |
| `Next.js` (optional) | Sẵn sàng nâng cấp lên SSR khi cần |

---

## 📁 Tính năng nổi bật

- 📂 **Trang danh sách tài liệu**: dạng lưới 4 tài liệu/hàng, có tìm kiếm và lọc theo tháng/năm
- 🖥 **Trình chiếu dạng Canva**: điều hướng ngang/dọc, xem tất cả trang ở footer
- 🔐 **Đăng nhập bằng email tên miền `@vsm.org.vn`**
- 🎨 **Dashboard CRM**: sidebar chuyên nghiệp, hỗ trợ dark mode
- 👤 **Hồ sơ người dùng**: cập nhật ảnh, tên, chức vụ và gửi đề xuất chỉnh sửa đến Phòng CNTT
- ❤️ **Yêu thích tài liệu**: đánh dấu và truy cập nhanh
- 📆 **Lịch cá nhân (coming soon)**: tạo sự kiện, nhắc nhở như Google Calendar

---

## 📦 Cài đặt

### 1. Clone source về máy:
```bash
git clone https://github.com/StephenSouth13/vsm-lecture-hub.git
cd vsm-lecture-hub
2. Cài đặt dependencies:
bash
Copy
Edit
npm install
# hoặc dùng yarn nếu bạn thích
3. Cấu hình .env kết nối Supabase:
Tạo file .env từ .env.example, điền thông tin SUPABASE_URL và SUPABASE_ANON_KEY

🧪 Chạy local
bash
Copy
Edit
npm run dev
Truy cập: http://localhost:5173

🧑‍💻 Đóng góp
Chào mừng mọi đóng góp từ cộng đồng VSM!
Bạn có thể tạo issue hoặc gửi PR.

👤 Tác giả
Quách Thành Long
📧 stephensouth1307@gmail.com
🎓 Thành viên tổ chức Vietnam Student Marathon
🛠 Dự án được phát triển bởi Phòng Công nghệ Thông tin – VSM

© Bản quyền
@2025 Vietnam Student Marathon
Được phát triển bởi Phòng Công nghệ Thông tin
