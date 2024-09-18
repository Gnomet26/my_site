function all_stop_music(this_button,play_list_){

    for(let i = 0;i < play_list_.length;i ++){
        play_list_[i].className = '';
        play_list_[i].className = 'play_and_download';
    }
    this_button.className = 'pause';

}


function play_pause_music(this_button,play_list_){

    //

    if(this_button.className === 'play_and_download'){
        all_stop_music(this_button,play_list_);

    }else if(this_button.className === 'pause'){
        this_button.classList.remove('pause');
        this_button.classList.add('play_and_download');
        
    }
}

function messagebox(buttonID){

    alert("Assalomu aleykum "+ buttonID.id);
}

function load_function(){
    
    let treck_img = ['site_l.png','site_l.png','site_l.png','site_l.png','site_l.png'];
    let treck_title = ['After dark & Mr.kitty','After dark & Mr.kitty','After dark & Mr.kitty','After dark & Mr.kitty','After dark & Mr.kitty'];
    let treck_download_and_play_link = ['after_dark.mp3','after_dark.mp3','after_dark.mp3','after_dark.mp3','after_dark.mp3'];
    let treck_play_lists = [];

    const g_layout = document.getElementById('g_layout');

    for(let i = 0;i < treck_img.length;i ++){
        const back_l = document.createElement('div');
        back_l.className = 'music_content_bg';

        const treck_img_block = document.createElement('img');
        treck_img_block.className = 'music_logo';
        treck_img_block.src = `${treck_img[i]}`;

        const treck_title_block = document.createElement('div');
        treck_title_block.className = 'music_name_and_avtor_name';
        treck_title_block.textContent = `${treck_title[i]}`;

        const for_buttons = document.createElement('div');
        for_buttons.className = 'play_and_download_buttons';

        const for_link = document.createElement('div');
        for_link.textContent = `${treck_download_and_play_link[i]}`;

        const play_button = document.createElement('button');
        play_button.className = 'play_and_download';
        play_button.onclick = () =>{
            play_pause_music(play_button,treck_play_lists);
        };

        treck_play_lists.push(play_button);

        const download_button = document.createElement('button');
        download_button.className = 'download_btn';

        for_buttons.appendChild(play_button);
        for_buttons.appendChild(download_button);

        back_l.appendChild(treck_img_block);
        back_l.appendChild(treck_title_block);
        back_l.appendChild(for_buttons);

        //alert("Hammasi yaxshi");

        g_layout.appendChild(back_l);
    }
}