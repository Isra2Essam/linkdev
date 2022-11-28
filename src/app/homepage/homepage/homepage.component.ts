import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/core/services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private homePageService: HomepageService){

  }

  ngOnInit(): void {
    this.homePageService.getNewsList().subscribe(data => {
      console.log(data);
    });

  }
}
