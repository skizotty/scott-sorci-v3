import { Component } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-about-wordcloud',
  template: `
    <div>
      <angular-tag-cloud
        [data]="data"
        [width]="options.width"
        [height]="options.height"
        [overflow]="options.overflow"
      >
      </angular-tag-cloud>
    </div>
  `
})
export class WordCloudComponent {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 400,
    height: 200,
    overflow: false
  };
  data: CloudData[] = [
    {
      text: 'Communication',
      weight: 5
    },
    {
      text: 'UX Design',
      weight: 5
    },
    {
      text: 'OO Programming',
      weight: 5
    },
    {
      text: 'Teaching',
      weight: 5
    },
    {
      text: 'Learning',
      weight: 5
    },
    {
      text: 'Problem Solving',
      weight: 5
    },
    {
      text: 'Customer Relations',
      weight: 5
    },
    {
      text: 'Planning',
      weight: 5
    }
    // ...
  ];
}
