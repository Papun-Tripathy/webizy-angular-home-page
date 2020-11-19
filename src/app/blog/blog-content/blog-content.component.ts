import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
