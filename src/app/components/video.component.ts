import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
    <div>
      <h1>{{title}}</h1>
      <h1>{{desc}}</h1>
      <a [href]="url">Click here to watch</a>
      <button (click)="onClick()">Edit Video</button>
    </div>
  `,
  styles: [``]
})
export class VideoComponent {
  @Input() title;
  @Input() desc;
  @Input() url;
  @Output() editVideo = new EventEmitter<any>();

  onClick() {
    this.editVideo.emit(this.title);
  }
}
