let array = [6, 67, 92, 45, 12, 2, 53, 21, 9];

let smallest = array[0];

for (let i = 0; i < array.length; i++){
  if( smallest > array[i]){
    smallest =  array[i];
  }
}
console.log(smallest);
