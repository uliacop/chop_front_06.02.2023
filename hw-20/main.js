"use strict";
function Person(name,  gender) {
    this.name = name;
    this.gender = gender;
 }
 
 Person.prototype.getInfo = function () {
    console.log("Name: ", this.name, "Gender: ", this.gender);
 }

function Flat() {
    this.residents = [];
  }

  Flat.prototype.addResident = function(person) {
    this.residents.push(person);
  };

function Building(maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;
  }
  
  Building.prototype.addFlat = function(flat) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(flat);
    } else {
      console.log("Cannot add flat. Maximum number of flats reached");
    }
  };

const person1 = new Person("John", "male");
const person2 = new Person("Emily", "female");
const person3 = new Person("Mike", "male");

const flat1 = new Flat();
flat1.addResident(person1);
flat1.addResident(person2);
const flat2 = new Flat();
flat2.addResident(person3);

const building = new Building(2);
building.addFlat(flat1);
building.addFlat(flat2);

const flat3 = new Flat();
building.addFlat(flat3); //
