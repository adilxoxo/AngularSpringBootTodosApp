import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: ' app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message = 'some message';
userName;
welcomeMsg;
// activated route
  constructor(private actRoute: ActivatedRoute, private beanService: WelcomeDataService) { }

  ngOnInit() {
    this.userName = this.actRoute.snapshot.params.name;
  }

  getMessage() {
    this.beanService.executeHelloWorldBeanService().subscribe(
      response => this.handleSucccessReponse(response),
      error => this.handleErrorReponse(error)
    );
  }

  getMessageWithParam() {
    this.beanService.executeHelloWorldServiceWithVar(this.userName).subscribe(
      response => this.handleSucccessReponse(response),
      error => this.handleErrorReponse(error)
    );
  }

  handleSucccessReponse(response) {
    this.welcomeMsg = response.msg;
  }

  handleErrorReponse(error) {
    this.welcomeMsg = error.error.message;
  }
}
