import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'actions'];
  dataSource = [
    { name: 'Latte', price: 3.5 },
    { name: 'Cappuccino', price: 3.0 },
    { name: 'Espresso', price: 2.5 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
