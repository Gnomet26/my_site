const question = document.getElementById('question');
const question_num = 0;

function random_generator(){
    let num = Math.floor(Math.random() * 8) + 1;
    question.className = '';
    const new_class = `for_q${num}`;
    question.classList.add(new_class);
    question_num = num;
}

function log_in_f(){
    const user_name_input = String(document.getElementById('name_n_input').value).split(' ').join('');
    const user_password_input = String(document.getElementById('parol_n_input').value).split('').join('');
    const answer = String(document.getElementById('answer').value).split(' ').join('');

    //alert("Assalomu aleykum  " + user_name_input+"   "+user_password_input +" " +answer);

    if(user_name_input != '' && user_password_input != '' && answer != ''){
        alert("Ajoyib");
        //Go ...
    }
    else if(user_name_input == ''){
        alert("Fill in the Usernane field too!")
    }
    else if(user_password_input == ''){
        alert("Password is required")
    }
    else if(answer == ''){
        alert("answer is required")
    }
}