import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

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
      link: '/coordenador'
    },
    {
      label: 'Pesquisadores',
      link: '/pesquisador',
      icon: 'biotech'
    },
    {
      label: 'Alunos',
      link: '/alunos',
      icon: 'perm_contact_calendar',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
