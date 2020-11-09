import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') side: MatSidenav;
  mode: string = "push";
  menuIsOpen: boolean = false;
  appitems = [
    {
      label: 'Projetos',
      icon: 'design_services',
      items: [
        {
          label: 'Submeter Projeto',
          link: '/main/submeter-projeto',
          faIcon: 'fab fa-accusoft'
        },
        {
          label: 'Meus Projetos',
          link: '/main/meu-projeto',
          faIcon: 'fab fa-accessible-icon'
        },
        {
          label: 'Aprovar Projeto',
          link: '/main/aprovar-projeto',
          faIcon: 'fab fa-accessible-icon'},
        {
          label: 'Projetos Cadastrados',
          link: '/main/projeto-cadastrado',
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
      icon: 'biotech',
      items: [
        {
          label: 'Aprovar Pesquisador',
          link: 'aprovar-pesquisador'

          
        }
      ]
    },
    {
      label: 'Alunos',
      link: '/main/alunos',
      icon: 'perm_contact_calendar',
    }
  ];

  constructor(   private router: Router) {

   }

  ngOnInit(): void {
  }

  selecionarItem(event: any) {
    this.side.toggle();
  }

  entrarMeuPerfil(){
    this.router.navigateByUrl("/main/meu-perfil");
  }

  sairSistema(){
    this.router.navigateByUrl("/");
  }

  menuOpened() {
    this.menuIsOpen = true;
  }

  menuClosed() {
    this.menuIsOpen = false;
  }

  /*@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }*/

}
