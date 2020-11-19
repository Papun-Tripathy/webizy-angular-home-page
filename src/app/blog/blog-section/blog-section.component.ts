import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
