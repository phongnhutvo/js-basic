const abbreviatedCharater = (arr) => {
    const n=1
    const results = arr.split(' ');
    for(let i = 0 ; i < results.length ; i++)
    {
        const Sum =  results[i].charAt(0);
      console.log(Sum);
    }
}
const arr = 'Vo Nhat Phong';
const res = abbreviatedCharater(arr);
console.log(res);
