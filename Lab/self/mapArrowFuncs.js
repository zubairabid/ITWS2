function map(action, arr, val) {
  for(i = 0; i < arr.length; i++)
    arr[i] = action(arr[i], val);
  return arr;
}

map(((acted, actor)=>(actor+acted)), {1,2,3,4,5,6,7,8}, 12);
