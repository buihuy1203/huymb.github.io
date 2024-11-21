document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const navLinks = document.querySelector(".nav-links");
    let zoomedIn =false;
    toggleButton.addEventListener("click", () => {
        if (zoomedIn) {
            navLinks.classList.remove("show");
            navLinks.classList.add("hide");
        } else {
            navLinks.classList.remove("hide");
            navLinks.classList.add("show");
        }
        zoomedIn = !zoomedIn;
    });
});

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
        progress: "Progress",
        projects: "Projects",
        awards: "Awards and certifications",
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
// Điều chỉnh PopUp
let slideIndex=1;
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

// Điều hướng slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Chuyển tới slide cụ thể
function currentSlide(n) {
    showSlides(slideIndex = n);
}

window.addEventListener('click', function(event) {
    document.querySelectorAll('.popup').forEach(popup => {
        if (event.target === popup) {
            popup.classList.remove('show');
            popup.classList.add('hide');
        }
    });
});
document.querySelectorAll('.openPopup').forEach(div => {
    div.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.classList.remove('hide'); 
        popup.classList.add('show');
        showSlides(slideIndex); 
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.classList.remove('show');
        popup.classList.add('hide');
    });
});


// Get the button:
let scrollbutton = document.getElementById("scroll");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrollbutton.style.opacity = 1;
  } else {
    scrollbutton.style.opacity = 0;
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  scrollbutton.style.opacity = 0;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById('resume').addEventListener('click', function(event) {
    event.preventDefault();  // Ngừng chuyển hướng trang
});



// Hiển thị slide đầu tiên

