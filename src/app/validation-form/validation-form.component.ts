import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})

export class ValidationFormComponent implements OnInit {

  constructor() { }

  captcha : String = "";
  input : String = "";
  condition = true;
  warning = false;

  parameter1 = data.username;
  parameter2 = data.password;
  parameter3 = data.first_name;
  parameter4 = data.last_name;
  parameter5 = data.Age;


  ngOnInit() {
    if (this.condition == true)
    {
      var a , i , text="";
      a="abcdefghijklmnopqrstuvwxyz";
      for(i=0; i<5; i++)
      {
          text+=a.charAt(Math.floor((Math.random() * 26) + 1));    
      }
      this.captcha=text;
    }
  }
  
  mysubmit(){
    var x = document.forms["Login"]["name"].value;
    var y = document.forms["Login"]["pass"].value;
    var z = document.forms["Login"]["captcha"].value;
    if(x =="" || x != this.parameter1)
    {
      this.warning = true;
      this.input = "Name";
      return false;
    }
    else if(y.length<=5 || y!=this.parameter2)
    {
        this.warning = true;
        this.input = "Password";
        return false;
    }
    else if(z!=this.captcha)
    {
        this.input = "Captcha";
        this.warning = true; 
        this.ngOnInit();
        return false;
    }
    else
        document.getElementById("first").innerHTML = "submission succesful";
        this.condition=false;

    }

}
