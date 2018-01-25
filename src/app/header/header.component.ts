import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgurl = 'http://www.cuponsmania.com.br/skin/padrao/header/header9.png';
  constructor() { }

  ngOnInit() {
  }

}
