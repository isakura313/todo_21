export default function getRandom(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let pool = []; // имеет вид 0,1,2 ...n
function generatePool(){
    for (let i = 0; i < motivation_array.length; i++){
        pool[i] = i;
    }
    return pool;
}
pool = generatePool();

function getUniq(arr){
    function getUniqRandom(){
        if(pool.length == 0){
            pool = generatePool()
            console.log("Перезапуск цепочки")
        }
        let index = Math.floor(pool.length * Math.random())
        let delete_item = pool.splice(index, 1)
        console.log(pool);
        return delete_item[0]
    }
    return getUniqRandom();
}
