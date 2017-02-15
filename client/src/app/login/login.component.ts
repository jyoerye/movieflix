import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private username:string;
  private password:string;

  constructor(private route: ActivatedRoute,private loginService:LoginService) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log("Unmame"+this.username);

        this.loginService.authenticateUser(this.username,this.password).subscribe(error=>console.log(error));


  }

}
