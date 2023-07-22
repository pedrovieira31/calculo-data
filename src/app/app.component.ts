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
      frase: [null],
    });
  }

  ngOnInit(): void {}

  validateInput() {
    if (!this.form.value.birthDate) {
      return;
    }
    this.calculateDate();
  }

  calculateDate() {
    let birthDate = this.form.value.birthDate.split('-');
    let reducedDate = this.valueReducer(
      birthDate[2] + birthDate[1] + birthDate[0]
    );
    let frasePicker = this.frasePicker(reducedDate);
    console.log(frasePicker);
    this.form.value.frase = frasePicker;
    console.log('this.form.value.frase = ' + this.form.value.frase);
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
    return reducedValue;
  }

  frasePicker(value: number) {
    return {
      1: 'energia numero 1',
      2: 'energia numero 2',
      3: 'energia numero 3',
      4: 'energia numero 4',
      5: 'energia numero 5',
      6: 'energia numero 6',
      7: 'energia numero 7',
      8: 'energia numero 8',
      9: 'energia numero 9',
      11: 'energia numero 11',
      22: 'energia numero 22',
    }[value];
  }
}
