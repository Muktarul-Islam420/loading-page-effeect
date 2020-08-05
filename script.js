let loadingBtn = document.getElementById('loading-btn').addEventListener('click', function() {
    const loadingAnimation = document.getElementById('loading');
    loadingAnimation.style.display = "inline"
    const changeBtnText = document.getElementById('loading-btn')
    changeBtnText.innerText = "Loading.."
})

const loadBtn = document.getElementById('loading-btn').addEventListener('dblclick', function() {
    const hideAnimation = document.getElementById('loading')
    hideAnimation.style.display = "none"
    const changeBtnText = document.getElementById('loading-btn')
    changeBtnText.innerText = "Load again"
})