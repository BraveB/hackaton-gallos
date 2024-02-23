import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() getServices = new EventEmitter();
  currentDate: Date = new Date();
  time: number = 10;
  interval: any;
  timeToCallFunc: number = this.time;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  getTime(): void {
    this.currentDate = new Date();
    this.timeToCallFunc = this.time;
    this.getServices.emit();
  }

  updateTime(): void {
    if (this.timeToCallFunc > 1) {
      this.timeToCallFunc = this.timeToCallFunc - 1;
    } else {
      this.getTime();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
