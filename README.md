# Angular and Google Analytics
> This application was built using Google Analytics from Firebase.

# Firebase and Google Analytics
O Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web desenvolvida pela Google. Ele fornece um conjunto abrangente de ferramentas e serviços para ajudar os desenvolvedores a criar aplicativos de alta qualidade, escaláveis e seguros.
Um de seus serviços é o Analytics, que é um rescurso que pode ser usado em seu aplicativo, afim de obter
insights sobre o uso e o envolvimento do usuário.
>Com os relatórios do Analytics, você entende claramente o comportamento dos usuários e pode tomar melhores decisões sobre marketing e otimizações de desempenho do app. - [Google Analytics](https://firebase.google.com/docs/analytics?hl=pt-br)

# Configuring Firebase Google Analytics
Exemplo em código:

1. Crie um projeto no Firebase Console:
   - Crie um novo projeto no Firebase Console.
   - Adicione o Firebase ao seu projeto Angular, seguindo as instruções fornecidas pelo Firebase Console.

2. Configure o Firebase no Angular:
   - Abra o terminal do seu projeto Angular e execute o comando `npm install firebase --save`.
   - Crie um novo arquivo `environment.ts` e adicione suas credenciais do Firebase, como a seguir:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
    measurementId: 'YOUR_MEASUREMENT_ID'
  }
};
```

3. Adicione o Firebase Analytics ao seu projeto:
   - Abra o terminal do seu projeto Angular e execute o comando `ng add @angular/fire`. Isso adicionará a biblioteca `@angular/fire` ao seu projeto e configurará o Firebase Analytics automaticamente.
   - LOGIN FIREBASE

4. Inicialize o Firebase Analytics:
   - Abra o arquivo `app.module.ts` e adicione as seguintes importações:

```typescript
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
```

- Em seguida, adicione as seguintes linhas ao array `imports` do seu módulo:

```typescript
AngularFireModule.initializeApp(environment.firebase),
AngularFireAnalyticsModule,
```

- Em seu componente, adicione o seguinte código:

```typescript
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/analytics';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    firebase.analytics();
    firebase.analytics().logEvent('page_view');
  }

}
```

### Installation
```sh
$ git clone https://github.com/TacioAntonio/angular-and-google-analytics
$ cd angular-and-google-analytics
$ npm install
$ npm start
```

## Contribution
Please read [CONTRIBUTING.md](https://github.com/TacioAntonio/angular-and-google-analytics/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/TacioAntonio/angular-and-google-analytics/tags).

## Authors
| ![Tácio Antônio](https://avatars2.githubusercontent.com/u/44682965?s=150&=4)
| -
| [Tácio Antônio](https://github.com/TacioAntonio/)

See also the list of [contributors](https://github.com/TacioAntonio/angular-and-google-analytics/graphs/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/TacioAntonio/angular-and-google-analytics/blob/master/LICENSE.md) file for details.

