import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'calculo-data';
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      birthDate: [null],
    });
  }

  ngOnInit(): void {}

  birthDataValue() {
    console.log(this.form.value.birthDate);
  }

  calculateDate() {
    let birthDate = this.form.value.birthDate.split('-');
    return this.valueReducer(birthDate[2] + birthDate[1] + birthDate[0]);
  }

  valueReducer(value: number) {
    value = Math.abs(value);
    const arrValue = Array.from(value.toString()).map(Number);
    let reducedValue = arrValue.reduce((acc, current) => {
      acc += current;
      if (acc > 9 && acc != 11 && acc != 22) {
        let arrAcc = Array.from(acc.toString()).map(Number);
        acc = arrAcc[0] + arrAcc[1];
      }
      return acc;
    });
    console.log(reducedValue);
    return reducedValue;
  }
}
