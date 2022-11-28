import { Component } from '@angular/core';
import { HomepageService } from 'src/core/services/homepage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  categories: any;
  selectedCatIndex: number = 1;
  filteredNews: any;
  categoryName: any;
  constructor(private homePageService: HomepageService) {}

  ngOnInit(): void {
    this.homePageService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data['newsCategory'];
    });
  }
  selectCategory(ev: any){
    this.selectedCatIndex = ev;
    this.homePageService.getNewsList().subscribe((data:any) => {
      this.filteredNews = data["News"].filter((a:any) => a.categoryID == ev);
      this.categories.filter((a:any) => a.categoryID == ev)[0];
      this.categoryName = this.categories.filter((a:any) => a.id == ev)[0].name
      console.log(this.categoryName);

    })
  }
}
