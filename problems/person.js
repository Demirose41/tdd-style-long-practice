class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return `${this.name} says whats good fuckers!?`
  }
  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}`
  }
  switchVisit(otherPerson){
    return otherPerson.visit(this);
  }
  update(obj){
    let objKeys = Object.keys(obj)
    if(typeof obj !== 'object'){
      throw new TypeError('only people please...');
    }
    if(objKeys.includes('name') && objKeys.includes('age')){
      this.name = obj['name'];
      this.age = obj['age'];
    }
    else {
      throw new TypeError('name AND age please...');
    }
  }
  tryUpdate(obj){
    try{
      this.update(obj);
      return true;
    }catch(e){
      return false;
    }
  }
}

module.exports = Person;