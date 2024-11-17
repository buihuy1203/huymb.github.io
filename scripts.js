const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Xử lý sự kiện nhấn nút
if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Thêm/xóa lớp 'active'
        console.log('Menu toggled'); // In ra console để kiểm tra
    });
} else {
    console.error('Toggle button or nav links not found');
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Ngăn điều hướng mặc định
        event.preventDefault();

        // Thêm lớp fade-out
        document.body.classList.add('fade-out');

        // Đợi hiệu ứng kết thúc, sau đó chuyển hướng
        setTimeout(() => {
            window.location.href = link.href;
        }, 500); // Thời gian khớp với thời gian trong CSS
    });
});

// Tạo đối tượng chứa các bản dịch
const translations = {
    en: {
        name: "Bui Manh Huy",
        info: "Basic Information",
        progress: "My Progress",
        projects: "My Projects",
        awards: "My awards and certifications",
        contacts: "Contacts"
    },
    jp: {
        name: "ブイ・マイン・フイ",
        info: "基本情報",
        progress: "課程",
        projects: "プロジェクト",
        awards: "資格",
        contacts: "連絡"
    }
};

// Lấy các phần tử cần thay đổi
const langToggleButton = document.getElementById('lang-toggle');
const langElements = document.querySelectorAll('[data-lang]');

// Lưu trữ ngôn ngữ hiện tại (mặc định là tiếng Anh)
let currentLang = localStorage.getItem('language') || 'en';

// Hàm thay đổi ngôn ngữ
function changeLanguage(lang) {
    // Thay đổi nội dung của các phần tử có data-lang
    langElements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });

    // Cập nhật ngôn ngữ hiện tại
    currentLang = lang;

    // Thay đổi văn bản nút chuyển ngôn ngữ
    if (lang === 'en') {
        langToggleButton.textContent = '日本語';
    } else {
        langToggleButton.textContent = 'English';
    }
    localStorage.setItem('language', lang);
}

// Gắn sự kiện cho nút chuyển đổi ngôn ngữ
langToggleButton.addEventListener('click', () => {
    // Chuyển đổi giữa tiếng Anh và tiếng Việt
    const newLang = currentLang === 'en' ? 'jp' : 'en';
    changeLanguage(newLang);
});

// Khởi tạo ngôn ngữ mặc định khi tải trang
changeLanguage(currentLang);
