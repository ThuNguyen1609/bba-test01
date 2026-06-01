1. Đổi tên message ở commit mới nhất:
    Cú pháp: git commit --amend -m "message mới"
    
    Ví dụ: có 3 commit theo thứ tự gần nhất từ C3->C2->C1 (C1 là gốc)
    C3: git commit -m "C3"
    C2: git commit -m "C2"
    C1: git commit -m "C1"
    
    Chạy câu lệnh: git commit --amend -m "C4"
    -> đổi tên message của commit gần nhất: C3 ->C4
    Chạy lại câu lệnh git log
    -> Thứ tự các commit sẽ đổi thành: C4->C2->C1
    
    Note: thay đổi commit ko phải gần nhất -> học ở bài sau
    
2. Un-stage file giữa các vùng
    Có 3 vùng  lần lượt là: Working Directory (W)-> Staging(S) -> Repository(R)
        ○ Un-stage từ S->W:
            § Unstage 1 file cụ thể: git restore --staged <file>
            § Unstage tất cả các file: git restore --staged .
        ○ Un-commit từ R->S (chỉ commit cuối???)
            § git reset --soft HEAD~1
                □ 1: số lượng commit
        ○ Un-commit từ R->W
            § git reset HEAD~1 
                □ 1: số lượng commit
    Note: 
        ○ Un-commit: gốc ko thể bị reset. Nếu muốn xoá -> xoá thư mục .git đi rồi init lại
        ○ Un-stage: chỉ dùng được lệnh này khi đã có ít nhất 1 commit rồi, nghĩa mặc dù chỉ muốn đẩy file từ S->W nhưng chưa từng có commit được lên R thì sẽ báo lỗi
        fatal: could not resolve HEAD
        -> Khi đó hãy dùng lệnh git rm --cache <tên file> để unstage
        
    Advance:
        ○ Xem tất cả các file đã được add lên vùng R: git ls-files
        ○ Xem filt đã add lên commit cụ thể: git show <mã commit> (mã commit lấy từ lệnh git log)
3. Git - Branch
    ○ Xem danh sách các nhánh: git branch
    ○ Tạo nhánh mới nhưng vẫn đứng nguyên ở nhánh đang tạo: git branch <tên nhánh>
    Note: Luôn tạo nhánh mới khi đứng từ main để dễ quản lý code

    ○ Chuyển sang nhánh vừa tạo: git checkout <tên nhánh>
    ○ Vừa tạo vừa chuyển nhánh: git checkout -b <tên nhánh>
    ○ Xoá nhánh: git branch -D <tên nhánh>
    Note: Ko thể đứng ở nhánh cần xoá để xoá, cần checkout sang nhánh thì mới xoá được nhánh muốn xoá (kiểu đứng ở 1 cành xong tự bẻ cành đó đi là ko được, oẳng luôn)

    ○ Xoá nhánh đã đưa lên github: git push -D origin <tên nhánh>
4. Git - ignore
    ○ Mục đích: bỏ các file nặng, các thư viện, credentials trước khi đưa lên github
        ○ Cách làm: 
            § B1: tạo file .gitignore
            § B2: thêm các file muốn ignore vào file trên
        -> chạy lệnh git status các file đã thêm vào file ignore sẽ ko xuất hiện ở vùng màu đỏ nữa
    Note: chỉ áp dụng với các file chưa được đưa lên vùng Staging/Repo. Nếu đã đưa lên rồi thì phải undo khỏi 2 vùng đó và commit lại
    
