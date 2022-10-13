import { Component, NgIterable } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class Main {
  users = [
    {
      index: 0,
      name: 'Peter',
      role: 'Full-Stack',
    },
    {
      index: 1,
      name: 'David',
      role: 'Angular',
    },
    {
      index: 2,
      name: 'Saad',
      role: 'Frontend',
    },
    {
      index: 3,
      name: 'luke',
      role: 'Agile',
    },
    {
      index: 4,
      name: 'John',
      role: '',
    },
  ];
  index = this.users.length;

  input = true;
  iValue: any;
  aNewBtn = 'Create New';

  constructor() {}
  set console(message) {
    console.log('message');
  }
  addNew() {
    if (this.input) {
      const len = this.users.length;
      this.users.push({
        index: len,
        name: '',
        role: '',
      });
      this.index = len;
      this.input = false;
      this.aNewBtn = 'Commit';
      return;
    }
    this.commit();
  }
  commit() {
    this.input = true;
    this.aNewBtn = 'Create New';
    this.index = this.users.length;
    this.iValue = '';
  }
  set editName(s) {
    this.users[this.index].name = s;
  }
  editUser(data) {
    this.iValue = data.name;
    this.index = data.index;
    this.input = false;
    this.aNewBtn = 'Commit';
  }
}
