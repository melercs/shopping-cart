import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-amout-control',
  templateUrl: './amout-control.component.html',
  styleUrls: ['./amout-control.component.scss']
})
export class AmoutControlComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;

  disabledIncrement: boolean;
  disabledDecrement: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  decrementHandler(): void {
    const currentValue = this.form.controls[this.controlName].value;
    if (currentValue === 1) {
      this.disabledDecrement = true;
    } else {
      this.disabledDecrement = false;
      this.form.controls[this.controlName].setValue(currentValue - 1);
    }
  }

  incrementHandler(): void {
    const currentValue = this.form.controls[this.controlName].value;
    this.form.controls[this.controlName].setValue(currentValue + 1);
  }

}
