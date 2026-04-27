function pokazat(id) {
    let vse = document.querySelectorAll('.stranica');
    for (let i = 0; i < vse.length; i++) {
        vse[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
    
    let ss = document.querySelectorAll('.ssilka');
    for (let i = 0; i < ss.length; i++) {
        ss[i].classList.remove('aktiv');
    }
    let a = document.querySelector('.ssilka[data-page="' + id + '"]');
    if (a) a.classList.add('aktiv');
}

let m = document.querySelectorAll('.ssilka');
for (let i = 0; i < m.length; i++) {
    m[i].onclick = function(e) {
        e.preventDefault();
        pokazat(this.dataset.page);
    };
}
pokazat('glavnaya');

let f = document.getElementById('forma');
if (f) {
    f.onsubmit = function(e) {
        e.preventDefault();
        let o = document.getElementById('soob');
        o.innerHTML = 'Спасибо! Мы свяжемся.';
        o.style.color = '#d8b4fe';
        this.reset();
        setTimeout(function() { o.innerHTML = ''; }, 3000);
    };
}

let g = document.querySelectorAll('#galereya .kartya');
for (let i = 0; i < g.length; i++) {
    g[i].onclick = function() {
        let t = this.dataset.group;
        let fff = [];
        if (t == 'gubi') fff = ['Г1.jpg', 'Г2.jpg', 'Г3.jpg'];
        if (t == 'pupok') fff = ['П1.jpg', 'П2.jpg', 'П3.jpg'];
        if (t == 'uho') fff = ['У1.jpg', 'У2.jpg', 'У3.jpg'];
        if (t == 'yazik') fff = ['Я1.jpg', 'Я2.jpg', 'Я3.jpg'];
        
        let ok = document.createElement('div');
        ok.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:1000;display:flex;justify-content:center;align-items:center;';
        
        let con = document.createElement('div');
        con.style.cssText = 'background:#111;padding:20px;border-radius:10px;max-width:500px;width:90%;border:1px solid #d8b4fe;max-height:80%;overflow:auto;';
        
        let txt = '';
        for (let j = 0; j < fff.length; j++) {
            txt += '<img src="' + fff[j] + '" style="width:100%;margin-bottom:10px;border-radius:8px;">';
        }
        con.innerHTML = '<span style="position:absolute;top:10px;right:20px;font-size:30px;cursor:pointer;color:#d8b4fe;">&times;</span>' + txt;
        ok.appendChild(con);
        document.body.appendChild(ok);
        
        let z = con.querySelector('span');
        z.onclick = function() { ok.remove(); };
        ok.onclick = function(e) { if (e.target == ok) ok.remove(); };
    };
}

let pop = document.getElementById('price-popup');
let lis = document.getElementById('price-list');
let cl = document.querySelector('#price-popup .close');

let pr = {
    shtangi: '<h3 style="color:#d8b4fe;">Титановые штанги</h3><p style="font-size:14px;">Цена указана за 1 шт.</p><div>Штанга прямая внутренняя резьба (гладкая) — 800 ₽</div><div>Штанга изогнутая «банан», внешняя резьба — 900 ₽</div><div>Штанга с навершием-фианит (2 мм) — 1200 ₽</div><div>Штанга с навершием-чёрный циркон или опал — 1350 ₽</div>',
    kolca: '<h3 style="color:#d8b4fe;">Кольца</h3><p style="font-size:14px;">Цена указана за 1 шт.</p><div>Кольцо CBR с шариком (гладкое) — 750 ₽</div><div>Кольцо сегментное (без зазора) — 1000 ₽</div><div>Кольцо clicker с тремя фианитами — 1400 ₽</div><div>Кольцо с подвеской (звезда, капля, крест из титана) — 1300 ₽</div>',
    labreti: '<h3 style="color:#d8b4fe;">Лабреты с камнями</h3><p style="font-size:14px;">Цена указана за 1 шт.</p><div>Лабрет с фианитом 3 мм (прозрачный) — 1100 ₽</div><div>Лабрет с синтетическим опалом (белый/розовый/голубой) — 1400 ₽</div><div>Лабрет с натуральным авантюрином или лазуритом — 1700 ₽</div><div>Лабрет с камнем в оправе-звезда (цветной циркон) — 1550 ₽</div>'
};

let u = document.querySelectorAll('#ukrasheniya .kartya-price');
for (let i = 0; i < u.length; i++) {
    u[i].onclick = function() {
        let tp = this.dataset.type;
        if (pr[tp]) {
            lis.innerHTML = pr[tp];
            pop.style.display = 'flex';
        }
    };
}

if (cl) {
    cl.onclick = function() { pop.style.display = 'none'; };
}

window.onclick = function(e) {
    if (e.target == pop) pop.style.display = 'none';
};