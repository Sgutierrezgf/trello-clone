import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule
],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  faTrello = faTrello;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
        {
          label: 'Sub Item 3.3',
        },
      ],
    },
  ];
}
