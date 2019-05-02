var obj = JSON.parse(body); 

obj['sub_webs'].splice(0,1)
obj['sub_webs'].splice(1,1)

JSON.stringify(obj);
