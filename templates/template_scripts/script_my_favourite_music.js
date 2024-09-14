function play_pause_music(this_button){

    if(this_button.className === 'play_and_download'){
        this_button.classList.remove('play_and_download');
        this_button.classList.add('pause');
    }else if(this_button.className === 'pause'){
        this_button.classList.remove('pause');
        this_button.classList.add('play_and_download');
    }
}

function messagebox(buttonID){

    alert("Assalomu aleykum "+ buttonID.id);
}