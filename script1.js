

// let array = [1,1,3,4,5,6,7,8,9];

// switch ([array])
// {case array[0].value===1: 
// console.log('the same');
// break;
// case array[0]!==array[1]:
// console.log('not the same');
// break;

let arr = [7,5,3,8,1];
function filterArrInPlace (arr, a, b)

{
for (i=0; i<=arr.length; i++)
if (a <= arr[i] <= b)
{arr.splice(i, 1);

}
console.log(arr);
}

filterArrInPlace (arr, 1, 4);