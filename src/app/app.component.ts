import {
  Component, Input, OnChanges, trigger, state, style, animate, transition,
  ChangeDetectorRef
} from '@angular/core';

interface Page {
  id: number;
  name: string;
  html: string;
}

type Orientation = ( "prev" | "next" | "none" );

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      "friendAnimation",
      [
        transition(
          "void => prev", // ---> Entering --->
          [
            style({
              left: -100,
              opacity: 0.0,
              zIndex: 2
            }),
            animate(
              "200ms ease-in-out",
              style({
                left: 0,
                opacity: 1.0,
                zIndex: 2
              })
            )
          ]
        ),
        transition(
          "prev => void", // ---> Leaving --->
          [
            animate(
              "200ms ease-in-out",
              style({
                left: 100,
                opacity: 0.0
              })
            )
          ]
        ),
        transition(
          "void => next", // <--- Entering <---
          [
            style({
              left: 100,
              opacity: 0.0,
              zIndex: 2
            }),
            animate(
              "200ms ease-in-out",
              style({
                left: 0,
                opacity: 1.0,
                zIndex: 2
              })
            )
          ]
        ),
        transition(
          "next => void", // <--- Leaving <---
          [
            animate(
              "200ms ease-in-out",
              style({
                left: -100,
                opacity: 0.0
              })
            )
          ]
        )
      ]
    )
  ]
})

export class AppComponent {
  title = 'app works!';
  public orientation: Orientation;
  public selectedPage: Page;

  private changeDetectorRef: ChangeDetectorRef;
  private pages: Page[];

  constructor(changeDetectorRef: ChangeDetectorRef) {

    this.changeDetectorRef = changeDetectorRef;
    this.orientation = "none";

    this.pages = [
      {
        id: 1,
        name: "Iltalehti",
        html: `<iframe class="e2e-iframe-trusted-src" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Filtalehti.fi&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>`
      },
      {
        id: 2,
        name: "Ilta-sanomat",
        html: `<iframe class="e2e-iframe-trusted-src" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Filtasanomat&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>`
      },
      {
        id: 3,
        name: "Twitter",
        html: `<a data-width="900" data-height="600"
                class="twitter-timeline" class="e2e-trusted-url" [href]="https://twitter.com/steam_games | trusturl">Tweets by steam_games
                </a>`
      },
      {
        id: 4,
        name: "Youtube",
        html: `<app-video></app-video>`
      }


    ];

    this.selectedPage = this.pages[0];
  }


public showNextPage() : void {

  // Change the "state" for our animation trigger.
  this.orientation = "next";

// Force the Template to apply the new animation state before we actually
// change the rendered element view-model. If we don't force a change-detection,
// the new [@orientation] state won't be applied prior to the "leave" transition;
// which means that we won't be leaving from the "expected" state.
this.changeDetectorRef.detectChanges();

// Find the currently selected index.
var index = this.pages.indexOf( this.selectedPage );

// Move the rendered element to the next index - this will cause the current item
// to enter the ( "next" => "void" ) transition and this new item to enter the
// ( "void" => "next" ) transition.
this.selectedPage = this.pages[ index + 1 ]
  ? this.pages[ index + 1 ]
  : this.pages[ 0 ]
;

}


// I cycle to the previous friend in the collection.
public showPrevPage() : void {

  // Change the "state" for our animation trigger.
  this.orientation = "prev";

this.changeDetectorRef.detectChanges();

var index = this.pages.indexOf( this.selectedPage );


this.selectedPage = this.pages[ index - 1 ]
  ? this.pages[ index - 1 ]
  : this.pages[ this.pages.length - 1 ]
;

}

}
