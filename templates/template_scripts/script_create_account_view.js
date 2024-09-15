const question = document.getElementById('question');

function random_generator(){
    let num = Math.floor(Math.random() * 8) + 1;
    
    question.className = '';
    const new_class = `for_q${num}`;
    question.classList.add(new_class);
}

function create_account_f(){
    const user_name_input = document.getElementById('user_name');
    const user_password_input = document.getElementById('user_password');
    const user_repeat_password = document.getElementById('repeat_password');
    const user_email = document.getElementById('user_email');
    const answer = document.getElementById('answer_');

    

}