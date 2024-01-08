import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openAdminMenu() {
    const codigoIngresado = prompt("Por favor, ingrese el código de administrador:");

    if (codigoIngresado === '123') {
      this.router.navigate(['/login-moderador']);
    } else {
      alert("Este menu solo es accessible para administrador.");
    }
  }

  redirigirEncuesta(tipo: string) {
    if (tipo === 'usuarios') {
      window.location.href = 'https://forms.gle/ApEVbgL5E3Pki6Dy8'; 
    } else if (tipo === 'conductores') {
      window.location.href = 'https://forms.gle/wFCDRRARdUvr5UG9A'; 
    }
  }

}
