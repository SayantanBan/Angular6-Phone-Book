import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setDynamicTitle("Get in Touch");
  }

  private setDynamicTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }
}
