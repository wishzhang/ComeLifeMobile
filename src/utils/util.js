const storage={
    key:{
       LOGIN:'Login'
    },
    s:window.localStorage,
    setObj:function (name,obj) {
        var str=JSON.stringify(obj);
        this.s.setItem(name,str);
    },
    getObj:function (name) {
        var str=this.s.getItem(name)
        return JSON.parse(str);
    }
}


const guid= ()=> {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default {
    storage,
    guid
}