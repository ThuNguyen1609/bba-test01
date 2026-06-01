1. Kết nối Github: 
    Bước 1: Tạo ssh key
    Chạy terminal:  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    
    Bước 2: Lấy nội dung ssh key (public key)
    Chạy terminal: cat ~/.ssh/id_rsa.pub
    
    Bước 3: thêm ssh key lên github
    Truy cập: https://github.com/settings/ssh/new
    Click avatar > Setting > SSH and GPG keys > New ssh key > Nhập ssh key ở bước 2 > Add ssh key
    
2. Cài đặt Playwright
    Bước 1: Tạo thư mục my-demo1 tại máy local
    
    Bước 2: Khởi tạo playwright
    Mở thư mục bằng VS
    Chạy terminal: npm init playwright@latest
    
    Note: Enter cho đến khi hiển thị text Happy hacking là thành công
    -> Nhìn trên VS sẽ thấy các folder của playwrifht: node_modules,….
    
    Ý nghĩa lệnh:
    Npm -> trình quản lý thư viện JS
    init: Viết tắt của "initialize" (khởi tạo). Lệnh này nói với npm rằng: "Tôi muốn bắt đầu một dự án mới hoàn toàn".
    playwright: Đây là tên của "bộ khung" (framework) mà bạn muốn cài đặt.
    @latest: Nghĩa là "phiên bản mới nhất". Dấu @ dùng để chỉ định phiên bản, và latest đảm bảo bạn luôn có những tính năng và bản vá lỗi mới nhất từ Microsoft.
    Note nhớ: "Dùng npm (npm) khởi tạo (init) bộ công cụ Playwright (playwright) bản mới nhất (@latest)."
    
    
3. Đưa code lên Github 
    Bước 1: Lên github create new repo > Public
    
    Bước 2: khởi tạo repo local:
    Chạy terminal: git init
    
    Bước 3: link repo vừa tạo ở local với repo trên Github
    Chạy terminal: git remote add origin <ssh_link>
    Note:
    remote -> làm việc với server bên ngoài
    add origin -> đặt tên cho link đó là origin -> có thể đặt tên khác origin cũng được nhưng ko nên
    Ssh link -> có thể dùng https cũng được, nhưng khuyến khích dùng ssh link
    
    Bước 4: Thêm file vào vùng để chuẩn bị đưa lên github(thêm tất cả các file or từng file được)
    Chạy terminal: git add .
    
    Bước 5: Commit (chốt các thay đổi vừa add và gán nhãn)
    Chạy terminal: git commit -m "init project"
    
    Note:
    -m -> viết tắt của message -> đây là lúc Git thực sự lưu 1 bản sao của code
    Init project -> nhãn mình tự đặt -> có thể thay đổi text khác cũng được
    
    Bước 6: Đẩy toàn bộ code đã commit từ máy local lên GitHub
    Chạy terminal: git push origin main
    Note: 
    Origin -> tên đặt ở bước 3
    Main -> tên nhánh đẩy lên 