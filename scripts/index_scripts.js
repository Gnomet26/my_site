const pageSelect = document.getElementById('select_option');
const pageFrame = document.getElementById('iframe_');
const title_name = document.querySelector('title');
const site_logo = document.getElementById('site_logo');
const log_in_btn = document.getElementById('log_in');

pageSelect.addEventListener('change', function() {
    const selectedPage = this.value;

    if (selectedPage === '0') {

        pageFrame.src="./templates/my_projects.html";
        title_name.textContent = "My projects 🎯";
    }else if (selectedPage === '1') {

        pageFrame.src="./templates/my_favourite_music.html";
        title_name.textContent = "My favorite musics 🎧";
    }else if (selectedPage === '2') {

        pageFrame.src="templates/my_block_posts.html";
        title_name.textContent = "My block posts 📝";
    }else if (selectedPage === '3') {

        pageFrame.src="templates/briefly_about_me.html";
        title_name.textContent = "Briefly about me 😎";
    }
});

site_logo.addEventListener('click',function() {
    pageFrame.src="./templates/my_projects.html";
    title_name.textContent = "My projects 🎯";
    pageSelect.value = "0";
});

function to_login_view(){
    window.location.href='templates/login_view.html';
}