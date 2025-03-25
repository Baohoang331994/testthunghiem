document.querySelector('.formtruycap').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi mặc định

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản và mật khẩu
    if (username === 'admin' && password === '12345') {
        alert('Đăng nhập thành công!');
        // Bạn có thể chuyển hướng người dùng tại đây, ví dụ:
        window.location.href = 'main.html';
    } else {
        alert('Sai tài khoản hoặc mật khẩu!');
    }
});
