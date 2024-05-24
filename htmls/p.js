document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const mainSidebar = document.querySelector('.main-sidebar nav');

    toggleButton.addEventListener('click', function() {
        mainSidebar.classList.toggle('active');
        this.classList.toggle('active'); // 這將改變菜單圖標的樣式，從漢堡菜單變成叉叉符號
        
        if (mainSidebar.classList.contains('active')) {
            this.innerHTML = '&times;'; // 叉叉符號字符實體
        } else {
            this.innerHTML = '&#9776;'; // 漢堡菜單字符實體
        }
    });
});