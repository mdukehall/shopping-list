/*
module pattern: export a named object
*/

var Storage = function() {
    this.items = [];
    this.id = 0;
};

Storage.prototype.add = function(name) {
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id += 1;
    //console.log(name);
    return item;
};

Storage.prototype.delete = function(id) {
    //var item = {id: this.id};
    this.items.splice(id,1);
    this.id -= 1;
    console.log("DELETE", this.items);
    return this;
};

Storage.prototype.put = function(id,name) {
    //console.log(this.items[id]);
    //console.log(name);
    console.log("PUT", this.items);
    this.items[id].name = name;
};

module.exports = Storage;
