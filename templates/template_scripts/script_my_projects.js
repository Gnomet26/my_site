function about_this_project(ddata){

    window.location.href = `project_view.html?text=${encodeURIComponent(String(ddata))}`
    //window.open(`project_view.html?text=${encodeURIComponent(ddata)}`)
}

function load_this_page(){

    let img_list = ["https://www.thespruce.com/thmb/ecrgEMOycT4gr7AUKEzNX6ei3eY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-08-a1a49bfdcc4e45cabe312cc1f692ceb3.JPG","https://www.thespruce.com/thmb/ecrgEMOycT4gr7AUKEzNX6ei3eY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-08-a1a49bfdcc4e45cabe312cc1f692ceb3.JPG"];
    let  p_title = ["Vampires in the shadows","HDWM"];
    let p_about = ["this game is my first game of android platform","Qanday gozal bu olam la layy"];
    let p_data = ["vampire_21_22","term color_22_11"];

    for(let i = 0;i < img_list.length;i ++){
        const g_view = document.getElementById('g_unit');

        const data_div = document.createElement('div');
        data_div.textContent = `${p_data[i]}`; //+++++++++++++++++++++++++++++++++++++++++++++++++++

        const back_view = document.createElement('div');
        back_view.className = 'my_content_bg';

        const help_div = document.createElement('div');
        help_div.style.display = 'flex';

        const project_img = document.createElement('img');
        project_img.className = 'project_logo';
        project_img.src = `${img_list[i]}`;//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        const help_div_1 = document.createElement('div');

        const project_title = document.createElement('div');
        project_title.className = 'project_title';
        project_title.textContent = `${p_title[i]}`;// +++++++++++++++++++++++++++++++++++++++++

        const project_about = document.createElement('div');
        project_about.className = 'project_about';
        project_about.textContent = `${p_about[i]}`;//+++++++++++++++++++++++++++++++

        const help_div_2 = document.createElement('div');

        const to_project_button = document.createElement('button');
        to_project_button.className = 'open_project';

        to_project_button.onclick = () =>{
            about_this_project(p_data[i]);
            //window.open(`project_view.html?text=${encodeURIComponent(p_data[i])}`)
        }

        help_div_1.appendChild(project_title);
        help_div_1.appendChild(project_about);

        help_div.appendChild(project_img);
        help_div.appendChild(help_div_1);

        help_div_2.appendChild(to_project_button);

        back_view.appendChild(help_div);
        back_view.appendChild(help_div_2);

        g_view.appendChild(back_view);

    }

}