import { Component, OnInit } from '@angular/core';
import { Developer } from '../shared/developer';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  formDeveloper: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Developer())
  }

  createForm(developer: Developer) {
    this.formDeveloper = this.formBuilder.group ({
      avatar: [developer.avatar],
      name:[developer.name],
      email: [developer.email],
      city: [developer.city],
      education: [developer.education],
      technologies: [developer.technologies]
    })
  }

  onSubmit(){
    console.log(this.formDeveloper.value);

    this.formDeveloper.reset(new Developer())
  }
}
