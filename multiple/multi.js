 let a=[20,29,55,70];
 length=a.length;
 function multiple(){
     for(i=0;i<length;i++){
     if(a[i] %5==0){
         console.log([i],'True');
     }
      else  {
         console.log([i],false);
     }
 }
 }
 let b=multiple();


 let a1=[20,55,70,45];
 function multiple1(elements){
     return elements % 5==0;
 }
 b1=a1.every(multiple1);
 console.log(b1);

