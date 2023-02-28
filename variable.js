/* 
jenis varible

var : nilai bisa berubah
let : nilai bisa berubah
const : nilai tidak bisa dirubah

tipe data

string : untuk karakter
integer : untuk numerik
double/float : angka ber koma 5,4 5,5 5,6 5,3

variable kosong

let variableKosong // belum di masukin data hanya baru di definisikan saja

let pacar = null : null kosong juga

*/

var namaProduk = "Aqua Botol" // string
var hargaProduk = 2000 // integer
let uangPembeli = 20000 // integer
let variableKosong
let variableNull = null
const diskon = 0.5 // float

// menampilkan data dengan backtick
// agar lebih sederhana, tanpa harus menggunakan + untuk
// menyambungkan variable pada output ke layar

alert(`nama produk ${namaProduk} harga produk ${hargaProduk}`)
// undefined berarti belum ada nilai

// cara mengisi variableKosong
variableKosong = 50

// Untuk 'let','const','var' cukup pakai satu kali saja(saat pembuatan variable)
// jika sudah kita bisa langsung panggil variable tanpa harus
// menambahkan let,const,var pada awal penamaan variable

alert(`Variable Kosong valuenya adalah : ${variableKosong}`) // 50

alert(`Variable Null valuenya adalah : ${variableNull}`) // null