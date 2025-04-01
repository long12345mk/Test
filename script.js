// Thêm chức năng cho nút "Get a Quote Now"
document.querySelector('.quote-right form button').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn biểu mẫu gửi đi
  
    // Lấy giá trị từ các trường nhập liệu
    const fullName = document.querySelector('.quote-right form input[type="text"]').value;
    const email = document.querySelector('.quote-right form input[type="email"]').value;
    const insuranceType = document.querySelector('.quote-right form select').value;
    const balance = document.querySelector('#balance').value;
  
    // Kiểm tra xem các trường có được điền đầy đủ không
    if (fullName && email && insuranceType && balance) {
      // Hiển thị thông báo thành công
      alert('Cảm ơn bạn đã gửi yêu cầu báo giá! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    } else {
      // Hiển thị thông báo lỗi
      alert('Vui lòng điền đầy đủ thông tin.');
    }
  });
  
  // Thêm chức năng cho các câu hỏi FAQ
  const questionHeaders = document.querySelectorAll('.question h3');
  
  questionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const question = this.parentElement;
      question.classList.toggle('active');
    });
  });