
function load_f(){

    const project_working_test_images = document.getElementById('img_list');
    const project_icon = document.getElementById('project_icon');
    const project_title = document.getElementById('project_title');
    const project_about = document.getElementById('about_');

    const photos = ['template_styles/template_images/test.png'];

    for(let i = 0;i < photos.length;i ++){

        const images = document.createElement('img');
        images.className = 'project_images';
        images.src = `${photos[i]}`;

        project_working_test_images.appendChild(images);

    }
}