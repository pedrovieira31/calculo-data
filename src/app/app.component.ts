import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayElement = false;
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
      1: 'Você veio liderar de forma corajosa, inovadora e pioneira, corra atrás dos seus sonhos com unhas e dentes e saiba que seu sucesso só depende da sua garra. Seja independente e saiba que um líder precisa de um time, o seu poder vem da liderança empática.',
      2: 'Você veio unir através da diplomacia e flexibilidade, saiba o que é seu e o que é do outro e entenda que a chave do seu sucesso é ser paciente. Saiba que tudo tem a sua hora e que com um bom jogo de cintura você terá sucesso.',
      3: 'Você veio crescer e amadurecer através de suas experiências, use sua criatividade e comunicação para expandir em todos os aspectos da vida. Saiba usar sua leveza de forma madura para ter todo o crescimento que você veio ter. Deixe sua criança te ajudar mas não seja ela.',
      4: 'Você veio gerar segurança e estabilidade através de sua dedicação e foco. Quanto mais você seguir uma rotina bem estabelecida, mais você se sentirá produtivo. Saiba usar toda sua energia para conquistar um ambiente estável já que isto é tão importante pra você.',
      5: 'Você veio se transformar e ajudar os outros a fazerem o mesmo. Use sua coragem e versatilidade para ter a liberdade que é tão importante para você. Saiba que toda liberdade deve ser tratada com responsabilidade para não trazer danos. Movimente seu corpo físico para que você consiga de forma livre levar transformação pra vida de outras pessoas.',
      6: 'Você veio conciliar e harmonizar através do cuidado e amor. Você precisa de paz em seu lar e em seus relacionamentos para que você tenha sucesso. Sempre cuide muito da energia da sua casa e invista em inteligência emocional para que assim você tenha relacionamentos saudáveis e consiga prosperar muito.',
      7: 'Você veio levar sabedoria e conhecimento através do autoconhecimento e espiritualidade. Quanto mais você investir na sua energia, mais você conseguirá ouvir sua intuição que é fortíssima e assim você ajudará outras pessoas a fazer o mesmo, use sua inteligência para expandir seus conhecimentos e assim conseguir ajudar muitas pessoas. Estude sempre e conecte-se com sua Espiritualidade e o sucesso será garantido.',
      8: 'Você veio trazer verdade através da conexão entre o espiritual e o material. Haja sempre com honestidade e o sucesso material será garantido. Todas as suas conquistas materiais são um reflexo do seu estado Espiritual, quanto mais alinhado com sua verdade é valores você estiver, mais você prosperará no material.',
      9: 'Você veio ajudar almas a se curarem através da fala. Você viverá várias experiências para que essas se tornem fonte de ajuda e inspiração para os outros. Quanto maior a sua conexão com a Espiritualidade mais você conseguirá ajudar e mais sucesso terá. Ajude sem esperar o retorno e o retorno virá.',
      11: 'Você veio curar pessoas através da reciclagem de energias e da espiritualidade. Busque se fortalecer Espiritualmente para conseguir ouvir sua intuição, tenha paciência e flexibilidade com você e com os outros. Você será fonte de inspiração quando estiver totalmente conectado com sua Espiritualidade e seu propósito de cura.',
      22: 'Você veio compartilhar conhecimentos antigos e construir grandes coisas através da maestria e da espiritualidade. Haja sempre de forma justa e honesta para sempre prosperar e lembre-se com grandes poderes vem grandes responsabilidades. Saiba usar seus dons para ajudar quem precisa e seu sucesso será garantido.',
    }[value];
  }
}
