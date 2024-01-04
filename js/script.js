function hitungLuas() {
    let alas = parseFloat(document.getElementById("alas").value)
    let tinggi = parseFloat(document.getElementById("tinggi").value)

    //  Validasi
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Masukkan nilai alas dan tinggi yang valid.");
        return;
    }

    //  hitung Luas Segitiga
    let luas = (alas * tinggi) / 2;

    //  Menampilkan Hasil
    document.getElementById("resultArea2").innerHTML = "<br>luas Segitiga: " + luas.toFixed(2);
    document.getElementById("resultSection2").style.display = "block";
}
function calculate() {
    // Ambil nilai sisi dari form
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);

    // Validasi input
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }

    // Hitung keliling
    let perimeter = sideA + sideB + sideC;

    // Tampilkan hasil
    document.getElementById("resultArea").innerHTML = "<br>Keliling Segitiga: " + perimeter.toFixed(2);
    document.getElementById("resultSection").style.display = "block";
}

function resetFormLuas() {
    document.getElementById("luas-segitiga").reset();
    document.getElementById("resultArea2").innerHTML = "";
    document.getElementById("resultSection2").style.display = "none";
}

function resetFormKeliling() {
    document.getElementById("triangleForm").reset();
    document.getElementById("resultArea").innerHTML = "";
    document.getElementById("resultSection").style.display = "none";
}

//  untuk klik navbar - keliling segitiga
$(document).ready(function () {
    // Ketika link di navbar diklik
    $("nav a").on('click', function (event) {
        // Mencegah aksi default link
        event.preventDefault();

        // Ambil id dari tujuan link
        var target = $(this).attr('href');

        // Lakukan animasi scroll ke elemen dengan id tersebut
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});

