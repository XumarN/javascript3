



var names = [
    "Vusal",
    "Xumar",
    "Aysel",
    "Hafiz",
    "Fatime"
]




var travel = [
    ["Vusal","Hafiz","Rza"],
    ["Xumar","Aysel","Fatime",
        [
        'Tahire ve Aynur', true, "2+2", [
            "Maraqlı"
        ],
        ],
        ["IATC","ADNSU"]
    ],
    ["Azərbaycan","Italiya","Argentina","Türkiyə"]
]


// Xumar,ADNSU,IATC
// Menim adim Xumardir. Men ADNSU telebesiyem ve IATCde tehsil aliram.


// Azərbaycan = A
// Türkiyə    = y
// Vusal      = s
// Fatime     = e
// Maraqlı    = l

console.log("Menim adim " +travel[1][0] + "dir.Men " +travel[1][4][1] +"telebesiyem ve"+travel[1][4][0] +"de tehsil aliram.")
console.log(travel[2][0][0]+travel[2][3][5]+travel[0][0][2]+travel[1][2][5]+travel[1][3][3][0][5])

