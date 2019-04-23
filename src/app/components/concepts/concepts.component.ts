import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setDynamicTitle("Concepts");
  }

  private setDynamicTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

}
