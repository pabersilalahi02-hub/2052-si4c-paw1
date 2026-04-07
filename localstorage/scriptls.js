let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let image = document.getElementById("image");

function simpan() {
    console.log(npm.value)
    console.log(nama.value)
    console.log(image.value)
    

    // localStorage.setItem("npm", npm.value)
    //ocalStorage.setItem("nama", nama.value)

    //cek local storage sudah ada isi atau belum

    //jika local storage belum ada isi/value
    if (localStorage.getItem("mahasiswa") === null) {
        //simpan array kosong 
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local storage 
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)


    //simpan value npm da nama ke dalam object
    data.push({
        npm: npm.value,
        nama: nama.value,
        image: image.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    //konversi dari object menjadi string

    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //tampil 
    tampil()


}

   function tampil() {
        //panggil dulu local storage
        let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

        //clear
        document.getElementById("list-mhs").innerHTML = ""

        //lakukan perulangan (forEach)
        hasil.forEach(element => {
            //console.log(element)
            document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="text-primary">${element.nama}</h4> 
            <h6 class="text-danger">${element.npm}</h6>
            <img src="${element.image}" alt="${element.nama}" class="img-fluid mt-2">
            <div> ` 

        });
    }
