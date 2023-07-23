import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayElement = false;
  title = 'calculo-data';
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      birthDate: [null],
      frase: [null],
      link: 'https://raquellnumerologa.com/conheca-sua-luz/?fbclid=PAAabtbw3uKx-CaWuq7FjF5PPsuJqUJ_0SJvukuMnXNaBwGlsyOCeBDsyRdRk_aem_Afmikum4txotvYZPoWCVAJWu0sUT7Q9B-cIiSV41GwNHlsP2jsDEjcImy99ExzVrqNk ',
    });
  }

  ngOnInit(): void {}

  clearForm() {
    this.form.reset();
  }

  calculateDate() {
    let birthDate = this.form.value.birthDate.split('-');
    let reducedDate = this.valueReducer(
      birthDate[2] + birthDate[1] + birthDate[0]
    );
    this.form.value.frase = this.frasePicker(reducedDate);
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
      1: 'O seu PROPÓSITO tem a energia do número 1',
      2: 'O seu PROPÓSITO tem a energia do número 2',
      3: 'O seu PROPÓSITO tem a energia do número 3',
      4: 'O seu PROPÓSITO tem a energia do número 4',
      5: 'O seu PROPÓSITO tem a energia do número 5',
      6: 'O seu PROPÓSITO tem a energia do número 6',
      7: 'O seu PROPÓSITO tem a energia do número 7',
      8: 'O seu PROPÓSITO tem a energia do número 8',
      9: 'O seu PROPÓSITO tem a energia do número 9',
      11: 'O seu PROPÓSITO tem a energia do número 11',
      22: 'O seu PROPÓSITO tem a energia do número 22',
    }[value];
  }
}
