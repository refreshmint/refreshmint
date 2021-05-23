import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = [
    {id: 1, price: 8, description: 'Audrey Hepburn Quote', images: ['assets/images/audrey'], name: 'Audrey', reviews: []},
    {id: 2, price: 8, description: 'Audrey Hepburn Quote', images: ['assets/images/audrey'], name: 'Audrey', reviews: []},
    {id: 3, price: 8, description: 'Audrey Hepburn Quote', images: ['assets/images/audrey'], name: 'Audrey', reviews: []}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
