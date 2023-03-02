let saldoAwal = 120000
let hutang = 50000
const bayarHutang = prompt('1.Cek Saldo \n2.Cek Saldo & Bayar Hutang')
let saldoAkhir = null

let hari = new Date().getDay();

      switch(hari){
        case 1:
          hari = "Senin";
          break;
        case 2:
          hari = "Selasa";
          break;
        case 3:
          hari = "Rabu";
          break;
        case 4:
          hari = "Kamis";
          break;
        case 5:
          hari = "Jum'at";
          break;
        case 6:
          hari = "Sabtu";
          break;
        case 7:
          hari = "Minggu";
          break
        default:
          hari = "Unknown";
          break;
      }

      if(bayarHutang == 1){
        saldoAkhir = saldoAwal
        document.write(`
          <h1>Kamu Mengecek Saldo Pada Hari : ${hari}</h1> <br>
          <p>Hutang kamu masih tersisa <b>Rp.${hutang}</b> lagi nih. <p> <br>
          <p>Saldo Kamu : <b>Rp.${saldoAkhir}</b></p>
          `)
        
      }else if(bayarHutang == 2){
        saldoAkhir = saldoAwal - hutang
        document.write(`
        <i><p>Kamu Sukses Membayar Hutang!</p><br></i>
          <h1>Kamu Mengecek Saldo Pada Hari : ${hari}</h1> <br>
          Hutang Kamu : ${hutang} <br>
          Saldo Awal : ${saldoAwal} <br>
          Bayar Hutang : ${saldoAwal} - ${hutang} = ${saldoAkhir} <br>
          Saldo Akhir : ${saldoAkhir} <br>

          <p>Saldo Kamu Sekarang Adalah : <b>${saldoAkhir}</b></p>
          `)
      }else {

        document.write('Mohon Menginputkan Pilihan Dengan Benar!')

      }
