import {Component, OnChanges,OnInit, trigger, state, transition, style, animate, Input} from '@angular/core';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('void', style({opacity: 0,position:'fixed', width:'100%'}) ),
      state('*', style({position:'fixed', width:'100%'}) ),
      state('shown' , style({ opacity: 1, transform: 'translateX(0%)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('test', style({ opacity: 1, transform: 'translateX(50%)' })),
      transition('* => *', animate('.5s'))
    ]),
    trigger('visibilityChanged2', [
      state('void', style({opacity: 0,position:'fixed', width:'100%'}) ),
      state('*', style({position:'fixed', width:'100%'}) ),
      state('shown' , style({ opacity: 1, transform: 'translateX(0%)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('test', style({ opacity: 1, transform: 'translateX(50%)' })),
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
