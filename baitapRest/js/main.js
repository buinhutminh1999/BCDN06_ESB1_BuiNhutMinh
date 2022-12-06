
let tinhDTBKhoi1 = (tong = 0) => { 
    let toan = document.getElementById('inpToan').value
    let ly = document.getElementById('inpLy').value
    let hoa = document.getElementById('inpHoa').value
    let count = demSo(toan,ly,hoa)
     tong = (Number(toan) + Number(ly) + Number(hoa)) / count
     document.getElementById('tbKhoi1').innerHTML = tong
 }

 document.getElementById('btnKhoi1').onclick = tinhDTBKhoi1

 let tinhDTBKhoi2 = (tong = 0) => { 
    let van = document.getElementById('inpVan').value
    let su = document.getElementById('inpSu').value
    let dia = document.getElementById('inpDia').value
    let english = document.getElementById('inpEnglish').value
    let count = demSo(van,su,dia,english)
    tong =  (Number(van) + Number(su) + Number(dia) + Number(english)) / count
    document.getElementById('tbKhoi2').innerHTML = tong
 }

 document.getElementById('btnKhoi2').onclick = tinhDTBKhoi2

let demSo  = (...rest) => {
    let count = 0
for (let index of rest) {
    count++
}
return count
}


