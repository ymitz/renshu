// sort

let random_list = [1,6,4,7,5,111,34]

let result = []
result.push(random_list.sort((a,b)=>a-b))

let sortedfunc = (list) => list.reduce(
    (prev, current, index) => {
        if (index === 0) {
            console.log('index 0')
            prev.push(current)
            return prev
        }
        if (current > prev[index -1]) {
            prev.push(current)
         }  
        else {
            prev.unshift(current)
        }
    return prev 
},[])
result.push(sortedfunc(random_list))


result.map(e=>console.log(e))
