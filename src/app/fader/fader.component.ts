import {Component, OnChanges,OnInit, trigger, state, transition, style, animate, Input} from '@angular/core';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class FaderComponent implements OnInit {
  @Input() isVisible : boolean = true;
  visibility = 'shown';
  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  constructor() { }


  ngOnInit() {
  }

}
