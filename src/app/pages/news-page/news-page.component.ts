import { Component, OnDestroy, OnInit } from "@angular/core";
import { INews } from "../../interfaces";
import { NewsService } from "../../services/news/news.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-news-page",
  templateUrl: "./news-page.component.html",
  styleUrls: ["./news-page.component.scss"],
})
export class NewsPageComponent implements OnInit, OnDestroy {
  news: INews[] = [];
  sub: Subscription;
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.sub = this.newsService.getAll().subscribe(
      (news) => {
        console.log(news);
        this.news = news;
      },
      (error) => {
        console.log("Ошибка при получении постов:", error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
