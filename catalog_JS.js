const openBtn = document.getElementById('openFilterPanel');
const filterPanel = document.getElementById('filterPanel');

openBtn.addEventListener('Click' , () => {
    console.log('кнопка нажата')
    filterPanel.classList.toggle('is-open');
});
