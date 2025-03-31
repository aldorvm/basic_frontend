import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  jsontest = [
    {
      "name": "test1",
      "age": 20,
      "address": "test adress 1"
    },
    {
      "name": "test2",
      "age": 30,
      "address": "test adress 2"
    },
    {
      "name": "test3",
      "age": 40,
      "address": "test adress 3"
    }
  ]
}
