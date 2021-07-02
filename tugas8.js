function dataMahasiswa() {
    let biodata = {
        nama: 'Saddam',
        umur: 28,
        tinggi: 170,
        pendidikan: ['SD', 'SMP', 'SMA']
    }

    // output awal:
    console.log(biodata);
    console.log();

    // ubah umur:
    biodata.umur = 18;

    //output akhir:
    console.log(biodata);
}

dataMahasiswa()