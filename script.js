document.addEventListener('DOMContentLoaded', function() {
    // Xử lý nút "Get a Quote Now"
    const quoteButton = document.querySelector('.quote-right form button');
    if (quoteButton) {
        quoteButton.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn form gửi đi mặc định

            // Lấy giá trị từ các trường nhập liệu
            const fullName = document.querySelector('.quote-right form input[type="text"]').value;
            const email = document.querySelector('.quote-right form input[type="email"]').value;
            const insuranceType = document.querySelector('.quote-right form select').value;
            const balance = document.querySelector('#balance').value;

            // Kiểm tra xem các trường có được điền đầy đủ không
            if (fullName && email && insuranceType && balance) {
                // Hiển thị thông báo thành công
                alert('Cảm ơn bạn đã gửi yêu cầu báo giá! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
                // Ở đây bạn có thể thêm logic để gửi dữ liệu form đến server
            } else {
                // Hiển thị thông báo lỗi
                alert('Vui lòng điền đầy đủ thông tin.');
            }
        });
    }

    // Thêm chức năng cho các câu hỏi FAQ
    const questionHeaders = document.querySelectorAll('.faq-question h3');

    questionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const question = this.parentElement;
            question.classList.toggle('active');
        });
    });

    // Thêm icon check vào danh sách "YOUR FAMILY MATTER"
    const listItems = document.querySelectorAll('.family-list li');
    listItems.forEach(item => {
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-check');
        icon.style.color = 'green';
        icon.style.marginRight = '5px';
        item.prepend(icon);
    });
});
