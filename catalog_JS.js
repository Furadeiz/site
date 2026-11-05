const openBtn = document.getElementById('openFilterPanel');
const filterPanel = document.getElementById('filterPanel');

openBtn.addEventListener('Click' , () => {

    filterPanel.classList.toggle('is-open');
});
