import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  password: string = ""
  username: string = ""
  ngOnInit(): void {
  

  }
  loginFunction(){
    let loginObject = {username: this.username, password: this.password};

    this.httpClient.post(BACKEND_URL + '/userverification', httpOptions).subscribe((data: any) =>{
      if(data.success){
        alert("we got login data" + data);
      }
      else{
        alert("we got nada");
      }
    })
  }

}
