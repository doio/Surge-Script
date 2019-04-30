var obj = JSON.parse(body); 

obj1=obj['data']['relates'];

obj1.forEach(function (element, index, array) {
   
    if(element.['is_ad']=="true"){      
       obj1.splice(index,1)  
    }

   });
obj['data']['relates']=obj1

JSON.stringify(obj);
