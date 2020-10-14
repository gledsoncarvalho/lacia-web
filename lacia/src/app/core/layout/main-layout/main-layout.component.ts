import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') side: MatSidenav;

  mode: string = "push";
  appitems = [
    {
      label: 'Projetos',
      icon: 'design_services',
      items: [
        {
          label: 'Item 1',
          link: '/item-1-1',
          faIcon: 'fab fa-accusoft'
        },
        {
          label: 'Item 2',
          faIcon: 'fab fa-accessible-icon'
        }
      ]
    },
    {
      label: 'Coordenadores',
      icon: 'engineering',
      link: '/main/coordenador'
    },
    {
      label: 'Pesquisadores',
      link: '/main/pesquisador',
      icon: 'biotech'
    },
    {
      label: 'Alunos',
      link: '/main/alunos',
      icon: 'perm_contact_calendar',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selecionarItem(event: any) {
    this.side.toggle();
  }

}
