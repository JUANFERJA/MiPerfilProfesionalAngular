import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import PresentacionPersonalData from '../../models/ModelDataPersonal';
import dataPersonal from '../../data/DataPersonal';

@Component({
  selector: 'app-sobre-mi-page',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sobre-mi-page.html',
  styleUrl: './sobre-mi-page.scss'
})
export class SobreMiPage {

  dataPersonal : PresentacionPersonalData;

  constructor(){
    this.dataPersonal = dataPersonal;
  }

}
