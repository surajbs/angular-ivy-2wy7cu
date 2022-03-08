import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  ngOnInit() {
    const arr = [1, 2, 5, 7, 8, 5, 2];
    let sum = arr.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
    console.log(sum);

    console.log(2.0 + '2');

    // let removeDuplicates = [...new Set(arr)];
    // console.log(removeDuplicates);

    // let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    // console.log(sum);
  }
}
