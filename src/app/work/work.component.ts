import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  expirence = [
    {
      title: 'Node Task App',
      img_src: '/assets/task.png',
      link: 'https://infinite-earth-79798.herokuapp.com',
      description:
        // tslint:disable-next-line: max-line-length
        'A Node / Mongoose / Handlebars app with full CRUD capabilities. Please create an account to get started! The app has a full API layer.'
    },
    {
      title: 'Dustin Saying Generator',
      img_src: '/assets/dustin.png',
      link: 'http://webdev.scottsorci.com/dustin.html',
      description:
        // tslint:disable-next-line: max-line-length
        'An AJAX and PHP API. Has read/write capabilities! To test out the writing capability, type "adddustinsaying" anywhere on the page.'
    },
    {
      title: 'React Todo App',
      img_src: '/assets/react-todo.png',
      link: 'http://crash-react-app.scottsorci.com/',
      description:
        'A super simple React task app, hooks into a custom NodeJS BE.'
    },
    {
      title: 'Ticketing App',
      img_src: '/assets/ticket.png',
      link: 'http://webdev.scottsorci.com/',
      description:
        // tslint:disable-next-line: max-line-length
        'Using Angular 1.X on the FE and PHP with MySql on the BE. The next step for this is to utilize Python to insert more events.'
    }
  ];
}
