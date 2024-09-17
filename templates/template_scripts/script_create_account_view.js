const question = document.getElementById('question');
const question_num = 0;

function random_generator(){
    let num = Math.floor(Math.random() * 8) + 1;
    question.className = '';
    const new_class = `for_q${num}`;
    question.classList.add(new_class);
    question_num = num;
}

function create_account_f(){
    const user_name_input = String(document.getElementById('user_name').value).split(' ').join('');
    const user_password_input = String(document.getElementById('user_password').value).split(' ').join('');
    const user_repeat_password = String(document.getElementById('repeat_password').value).split(' ').join('');
    const user_email = String(document.getElementById('user_email').value).split(' ').join('');
    const answer = String(document.getElementById('answer_').value).split(' ').join('');


    //alert("Funksiya yaxshi ishlayapti :) Ok"+ user_name_input+" # "+user_password_input+" # "+user_repeat_password+" # "+user_email+" # "+answer);

    if(user_name_input != '' && user_password_input != '' && user_repeat_password != '' && user_email != '' && answer != ''){
        alert("Ajoyib");
        // Go ...
    }
    else if(user_name_input == ''){
        alert("Fill in the Usernane field too!")
    }
    else if(user_password_input == ''){
        alert("Password is required")
    }
    else if(user_repeat_password == ''){
        alert("Password is required")
    }
    else if(user_email == ''){
        alert("gmail is required")
    }
    else if(answer == ''){
        alert("answer is required")
    }


}