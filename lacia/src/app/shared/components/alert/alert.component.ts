import { Component, Injectable, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

@Injectable()
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(title: string, text: string, icon: SweetAlertIcon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      heightAuto: false
    });
  }

  confirmacao(title: string, text: string, confirmButtonText: string, textSuccess: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excluído!',
          textSuccess,
          'success'
        )
      }
    })
  }

}
