import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

import  ModelDataNavbar  from '../../models/ModelDataNavbar';
import DataNavbar from '../../data/DataNavbar';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
 
  itemsMenu : ModelDataNavbar;
  constructor(){
    this.itemsMenu = DataNavbar;
  }  
}
