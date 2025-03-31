import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./shared/components/list/list.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ListComponent, HeaderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'myfirstangular';
  name = "test";
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  sumUp() {
    this.result + this.num1 + +this.num2;
  }
}