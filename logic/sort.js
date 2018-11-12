// sort

let random_list = [6,4,7,5,1010,111,34]

let result = []
//result.push(random_list.sort((a,b)=>a-b))

let sortedfunc = list => list.reduce(
    (prev, current, index) => {
        if (index === 0) {
            prev.push(current)
            return prev
        }
        if (current > prev[index -1]) {
            prev.push(current)
            return prev
         }  
        else {
            prev.splice(-1,0,current)
            return sortedfunc(prev)
        }
},[])
result.push(sortedfunc(random_list))

result.map(e=>console.log(e))