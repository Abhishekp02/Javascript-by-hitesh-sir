const marvel_heros= ["thor", "ironman","spiderman"]
const dc_heros= ["superman","flash","batamn"]
 const all_heros= marvel_heros.push(dc_heros)
 
 const heros= marvel_heros.concat(dc_heros)
 console.log(heros);
 const all_my_heros= [...marvel_heros, ...dc_heros]
 console.log(all_my_heros);
const another_array= [1,2,3,4,[5,6,7,8,[4,5,6,[1,2,6,7]]]]
const real_array= another_array.flat(Infinity)
console.log(real_array);
console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3));