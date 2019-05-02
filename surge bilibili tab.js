
var obj = JSON.parse(body);

obj1=obj['data']['tab'];
obj2=obj['data']['bottom'];


obj1.forEach(function (element, index, array) {
  
    if(element['name']!="追番"&&element['name']!="推荐"&&element['name']!="直播"){      
       obj1.splice(index,1)  
    }

   });

obj2.forEach(function (element, index, array) {
    if(element['pos']==4){      
       obj2.splice(index,1)  
    }

   });


obj['data']['tab']=obj1
obj['data']['bottom']=obj2
delete obj['data']['top']
JSON.stringify(obj); 
