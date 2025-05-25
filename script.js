//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
    ['Mangu', 'Fourtwnty', 4000, 8000, 'mangu.jpg'],
    ['Slalu Ada di Nadi', 'B.C.L', 1500, 2300, 'jumbo.jpg'],
    ['Lesung Pipi', 'Raim LaOde', 2440, 5400, 'lesung_pipi.jpg'],
];

var element = ``
for (let index = 0; index < judul_lagu.length; index++){
    element += `<div class="judul_lagu">
        <h2>${lagu[index][0]}</h2>
        <small>
             <i>Oleh ${lagu[index][1]}</i>
        </small>
        <img src="${lagu[index][4]}">
        <div class="bawah">
                <div class="kanan">${lagu[index][2]}</div>
                <div class="kiri">${lagu[index][3]}</div>
            </div>
        </div>`
    
}
var konten = document.getElementById("container");

konten.innerHTML = element
