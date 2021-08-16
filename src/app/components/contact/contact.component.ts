import { ContactService } from './../../services/contact.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData: FormGroup;
  message: string;
  invalidFields: string[];
  constructor(private builder: FormBuilder, private contact: ContactService, private changeDetectionRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formData = this.builder.group({
      'your-subject': new FormControl('', [Validators.required]),
      'your-email': ['',[Validators.required,Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],

      'your-message': new FormControl(``, [Validators.required]),
    });
  }

  onSubmit(FormData) {
    this.contact.postMessage(FormData).subscribe(
      (response: any) => {
        this.message = response.message;
        if (response.invalid_fields) {
          this.invalidFields = response.invalid_fields.map((invalidField) => invalidField.message);
        }
        this.changeDetectionRef.detectChanges();
      }
    );
  }
}
