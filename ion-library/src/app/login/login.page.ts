import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetterService } from '../services/data-getter.service';
import { AlertController } from '@ionic/angular';
import { FireDataGetterService } from '../services/fire-data-getter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  passWord: string;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private fireData: FireDataGetterService) { }

  ngOnInit() {
    this.fireData.getAuthors().subscribe(
      data => console.log(data)
    );
  }

  login() {
    this.fireData.checkUser({
      username: this.userName,
      passwd: this.passWord
    }).then(
      res => {
        this.fireData.setUser(this.userName);
        this.router.navigate(['/home']);
      },
      err => {
        this.userNotExistAlert(err.message);
      }
    );
  }

  async userNotExistAlert(message) {
    const alert = await this.alertController.create({
      header: 'Увага!',
      subHeader: 'Помилка аутентифікації',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
