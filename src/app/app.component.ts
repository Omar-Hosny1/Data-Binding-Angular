import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None, // make the css properties applied glopaly
})
export class AppComponent {
  // serverElements = [];
  // onServerAdded(serverDate: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverDate.serverName,
  //     content: serverDate.serverContent,
  //   });
  // }
  // onBlueprintAdded(blueprintData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverContent,
  //     content: blueprintData.serverContent,
  //   });
  // }
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 == 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
