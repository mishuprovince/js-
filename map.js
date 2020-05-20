function mapp(){
    var n=3;
    var m=new Map();
    while(n--){
        var mm={
        name :'mmp',
        age :17,
        san:'36,24,36'
    };
    console.log(n+'');
    m.set(n+'',mm);

    }

    m.forEach(function (value,key,map){
        var v=value;
        for(var s in v){
            console.log(v[s]);
        }
    });

    
}
mapp();