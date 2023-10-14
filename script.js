"use strict"

// -----------------1-----------

// -------Reversing the string for each letter in the word------


// let arr = reversing("Greek for growth ")

// function reversing(x){

// let rev = "";

//     if(x.includes(" "))
//     {
//     let rev_a = x.split(" ")
        
//         for(let i=0;i<rev_a.length;i++)
//         {
//             for(let j=rev_a[i].length;j>0;j--)
//             {
//                 rev += rev_a[i][j-1]
//             }
//             rev += " "
//         }
//     }
//     else {
//         let rev_b = x.split("")

//         for(let j=rev_b.length;j>0;j--)
//         {
//             rev += split_b[j-1]
//         }
//             rev += " "
//     }

//     return rev
// }

// console.log(arr);


// function reversing(x){
//     let newStr = "";
//     for (let i = x.length-1; i>=0; i--){
//         newStr += x[i];
//     }
//     return newStr;
// }
// console.log(arr)


// -----------------2---------------

// ---------Reversing the string --------


// let z = str("The sky is blue")
    

// function str(x) 
// {
//     let reverse_str = "";
//     let trim_z = x.trim()
//     let rev_z = trim_z.split(" ")

//     for (let i = rev_z.length - 1; i >= 0; i--) 
//     {

//         reverse_str += rev_z[i] + " "

//     }
//     console.log(reverse_str)
// }


// -----------------3---------------

// --------RemovinG "A,B,C" From the given string ----------


// let arr = removingABC("This is a bit harder")

// function removingABC(x) 
// {
//     let a = 0;
//     let rem = "";

//     let rem_arr = x.split(" ")

//     for (let i = 0; i < rem_arr.length; i++) 
//     {
//         for (let j = 0; j < rem_arr[i].length; j++) 
//         {
//             if (!(((rem_arr[i][j]) == "A") || ((rem_arr[i][j]) == "B") || ((rem_arr[i][j]) == "C") ||
//                 ((rem_arr[i][j]) == "a") || ((rem_arr[i][j]) == "b") || ((rem_arr[i][j]) == "c"))) 
//             {
//                 rem += rem_arr[i][j]
//             }
//             else 
//             {
//                 a = a + 1
//             }
//         }
//         rem += " "
//     }

//     if (a != 0) 
//     {
//         console.log(rem);
//     }
//     else 
//     {
//         console.log("null");
//     }
// }

// ------------------4----------------

// ----------Display the positive value (once for the repeating number)-----------


// let arr = [1,2,-2,3,4,-4,7,-9,8,8];

//     let posvalue = [];
//     let value = 0;
//     for (let i=0; i<arr.length; i++) 
//     {
//         if ((arr[i] > 0) && (!(posvalue.includes(arr[i])))){
//             posvalue[value]= arr[i];
//             value ++
//         }
//     }

//     console.log(posvalue);

// -------------------5---------------

// ---------Mirror---------


// let arr = mirror([1,2,3,4,5]);


// function mirror(x) 
// {
//     let lenArr = (x.length-1)+(x.length-1)
//     for (let i=0; i<x.length-2; i++) 
//     {
//         x[lenArr] = x[i];
//         lenArr--
//     }
//     return x;
// }
// console.log(arr);
