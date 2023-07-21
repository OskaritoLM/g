import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = false;
  private role: string = '';

  constructor() { }

  login(usuario: string, contrasena: string, role: string) {
    // Realizar lógica de autenticación
    // Verificar las credenciales y establecer el estado de autenticación y el rol si son válidos
    if (role === 'admin' && usuario === 'oscar@cprueba.com' && contrasena === 'linux') {
      this.isLoggedIn = true;
      this.role = 'admin';
    } else if (role === 'proveedor' && usuario === 'noahp@cprueba.com' && contrasena === 'linux') {
      // Lógica para autenticación de proveedor
    } else if (role === 'cliente' && usuario === 'cliente@gmail.com' && contrasena === 'linux') {
      // Lógica para autenticación de cliente
    } else {
      // Credenciales inválidas
      this.isLoggedIn = false;
      this.role = '';
    }
  }
  

  logout() {
    // Realizar lógica de cierre de sesión
    this.isLoggedIn = false;
    this.role = '';
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getRole(): string {
    return this.role;
  }
}
