Tổng kết nội dung buổi học
- Môi trường thực thi mã JavaScript trong trình duyệt cung cấp cho mình một số API (các đối tượng BOM, DOM) để làm việc/thao tác với cửa sổ trình duyệt, với nội dung hiển thị
- Cấu trúc phân cấp đối tượng:
    Node: Tất cả mọi thứ đều là Node
    document cũng là một Node
    Element: Chỉ bao gồm các Node là thẻ HTML(<h1>, <h2>, <img>,..)
    Mỗi 1 thẻ HTML thì có 1 interface riêng, mô tả các thuộc tính và phương thức của riêng nó, ví dụ HTMLTableElement,
    HTMLImageElement,....
    NodeList và HTMLCollection (Kết quả trả về của một số thuộc tính/phương thức tìm kiếm phần tử) không phải là mảng, chỉ có thể duyệt qua bằng vòng lặp for, hoặc chuyển thành mảng thông qua Array.from
- Ghi nhớ các khái niệm cơ bản: DOM, Bom, window, Node, Element, ChildNodes,....
- Tham khảo các thuộc tính (properties) về các phần tử DOM thường dùng
- Một số thuộc tính đặc biệt lưu ý: innerHTML, textContent
- Một số thuộc tính đặc biệt trong document: document.head,document.title, document.body,document.link,...