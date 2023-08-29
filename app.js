const ratingBtns = document.querySelectorAll('.flex-item');
const flexContainer = document.querySelector('.flex-container');
const submitBtn = document.querySelector('#submit');
const ratingSpan = document.querySelector('#rating');

const mainPage = document.querySelector('#rate-main');
const successPage = document.querySelector('#success-main');


flexContainer.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target, e.target.tagName);
    if (e.target.tagName === 'A') {
        ratingBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
})


submitBtn.addEventListener('click', (e) => {
    ratingBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            mainPage.style.display = 'none';
            successPage.style.display = 'block';
            ratingSpan.textContent = btn.textContent;
        }
    })
})

