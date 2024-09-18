function load_f(){
    
    let block_post_imgs = ['template_styles/template_images/play.png','template_styles/template_images/pause.png'];
    let block_post_title = ['Open new IT Park','Get the first developer certificate'];
    let block_post_date = ['27-oktabr,2024-yil,14:52','12-avgust,2020-yil,18:00'];
    let block_post_text = ["Tushundim! Siz musiqa pleylistiga o'xshash, bir nechta bloklardan iborat vertikal jadval yaratmoqchisiz. Har bir blokda musiqa nomi, avtor nomi, `Musiqani o'ynatish` va `Yuklab olish` tugmalari bo'ladi. Bir vaqtning o'zida faqat bitta blokdagi musiqa o'ynatilishi kerak, va boshqa bloklardagi `O'ynatish` tugmalari `O'ynatish` holatiga qaytishi kerak.Sizning talabingizni amalga oshirish uchun quyidagi HTML va JavaScript kodini ishlatishingiz mumkin:","Akang kuchaydi uji"];


    const g_layout = document.getElementById('g_layout');

    for(let i = 0; i < block_post_imgs.length;i ++){

        const block_bg = document.createElement('div');
        block_bg.className = 'block_post_bg';

        const helper_div = document.createElement('div');
        helper_div.className = 'column_0';

        const block_img = document.createElement('img');
        block_img.className = 'post_img';
        block_img.src = `${block_post_imgs[i]}`;

        const post_title = document.createElement('div');
        post_title.className = 'post_title';
        post_title.textContent = `${block_post_title[i]}`;

        const post_date = document.createElement('div');
        post_date.className = 'date';
        post_date.textContent = `${block_post_date[i]}`;

        const post_text = document.createElement('div');
        post_text.className = 'post_text';
        post_text.textContent = `${block_post_text[i]}`;

        helper_div.appendChild(block_img);
        helper_div.appendChild(post_title);
        helper_div.appendChild(post_date);

        block_bg.appendChild(helper_div);
        block_bg.appendChild(post_text);

        g_layout.appendChild(block_bg);

    }
}