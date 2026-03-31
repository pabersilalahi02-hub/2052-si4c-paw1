// alert("Belajar Javascript");

function kirim () {
// ambil value nama
let nama = document.getElementById('nama').value;
console.log("Nama :"+nama);
let saran = document.getElementById('saran').value;

// tampilkan nama ke ul id pesan
document.getElementById('List-Pesan').innerHTML += 
`<tr>
    <td>${Nama}</td>
    <td>${Pesan}</td> 
</tr>`;
}
