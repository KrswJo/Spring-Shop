const toggleBtn = document.querySelector('.headerTop__toggleBtn');
const util = document.querySelector('.headerTop__util');

toggleBtn.addEventListener('click', () => {
    util.classList.toggle('active');
})