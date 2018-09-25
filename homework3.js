alert ("my third homework") 

const first = function(a, b , c) {
   return (a * b) + c;
    };

   const z = first(9,2,8);
   console.log(z);
  
  

  
  
const second = function(){
    return "the weather is great today"
     };
    const c = second() 
    console.log(c);




  
const third = function(num1,num3){
    num1=num1 + 3 
    return
    };

  
  
  
const fourth = function(x,y,z){   
    if ((x.length > y.length)  && (x.length > z.length)){
        return x;
         } else if ((y.length > x.length)&& (y.length > z.length)){
            return y;
               } else { 
                   return z;
           
               }
         };
       const h = fourth ("My name is Syuzi","I study at American University of Armenia","Life sucks")
       console.log(h);
  
  
  
  
  
    
const fifth = function (a,b){
     
    if (a === b){
      return 0;
      } else if (a>b){
          return 1;
             } else {
                 return -1;
      } 
 
    };
        const m = fifth(2,8);
     console.log(m);

  
  


const sixth = function ( num1,num2)  {
  return num1*num2
  };
  const mult = sixth (9,16);
  console.log(mult);
  
 
  
  
  
const seventh = function (num3,num4) {
    return num3/num4
  };
  const div = seventh (12,4)
  console.log(div);
  


const  triangleArea = function(base, height) {
     const tA1 = sixth(base,height)
     const tA2 = seventh(tA1, 2)
     return tA2

 }; 
  
     const trA = triangleArea(24,16)
     console.log(trA);
 

const numLength = function (a){
     return a.length 
     
   };
   const n = numLength("1999");
   console.log(n);
  
   

   
   
const chill = function (str1,str2,num) {

   if ((str1+str2).length > num){
    return 1;
   } else {
    return -1;
 } 
 };
   const w = chill("Syuzi","Kirakosyan",45);
  console.log(w);
   
   
   
   
const runStuff = function(num1,num2,str){
       if ( str ==='rectangle'){
    return num1*num2;
} else if (str === 'triangle'){
  return (num1*num2)/2;
} else {
    return -1;
} 
 
};
  const o = runStuff(44,12,'triangle');
  console.log(o);

    
  