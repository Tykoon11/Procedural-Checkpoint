//Question 1

function dotProduct(v1, v2){

    for(let i=0; i<v1.length; i++){
    let ps = (v1[i] * v2[i]) + (v1[i+1] * v2[i+1])
    return ps;
``    }
}
// console.log (dotProduct([3,4],[2,3]))

//Question 2

function orthoTest(v1,v2){

if(dotProduct(v1,v2) === 0){
    return `it is orthogonal`
}else{
    return `it is not orthogonal`
}
}