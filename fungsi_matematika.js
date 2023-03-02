// menghitung fungsi matematika
// x = 4, y = 10 dan z = 20
// 1. f(x) = x ** 2
function hasilHitung  (x) {
    const hasil = x ** 2
    return hasil
}
let x = 4
const hasil = hasilHitung (x)
console.log(hasil)

//========//

// 2. f(a, b) = (a * b) + (a * 2)
function hasilHitung (a, b) {
    const hasil1 = (a ** 2) + (b * 2)
    return hasil1
}
let a = 7, b= 15
const hasil1 = hasilHitung (a, b)
console.log(hasil1)

//========//
// 3. f(c, d) = (c * d) / 2
function hasilHitung (c, d) {
    const hasil2 = (c * d) / 2
    return hasil2
}
let c = 5, d= 12
const hasil2 = hasilHitung (c, d)
console.log(hasil2)

//========//
// 4. f(s, t) = s * t
function hasilHitung (s, t) {
    const hasil3 = s * t
    return hasil3
}
let s = 20, t= 10
const hasil3 = hasilHitung (s, t)
console.log(hasil3)

//========//
// 5. f(p) = π * 2 * p
function hasilHitung (p) {
    const hasil4 = 3.14 * 2 * p
    return hasil4
}
let p = 20, π = 3.14
const hasil4 = hasilHitung (p)
console.log(hasil4)