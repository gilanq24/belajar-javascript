let namaSaya = "Putra"
let pacar = 5

if(namaSaya == "Putra Gilang Ramadan") {
    document.write("Ya! Kamu Putra Gilang Ramadan")
}else if ( namaSaya == "Putra"){
    document.write("Halo Putra")
}else{
    document.write("Saya Tidak Kenal Kamu!")
}

// switch case
switch(pacar){
    case 1:
        pacar = "Saya Punya Satu Pacar"
    break
    case 2:
        pacar = "Saya Punya Dua Pacar"
    break
    case 3:
        pacar = "Saya Punya Banyak Pacar"
    break
    default:
        pacar = "Saya Sudah Tidak Berpacaran, Stay Halal Brother"
    break
}

document.write("<br><br>")
document.write(pacar)