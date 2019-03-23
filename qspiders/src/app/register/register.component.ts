import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators } from'@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form=new FormGroup({
  username:new FormControl("",[
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('varun')
  ])
});
  get username()
  {
return this.form.get('username');


}
get password(){
  return this.form.get('password');
}
constructor(){}
ngOnInit(){}
  }
