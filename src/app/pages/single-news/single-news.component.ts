import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/app/environment";
import { INews } from "src/app/interfaces";
import { Subscription } from "rxjs";

@Component({
  selector: "app-single-news",
  templateUrl: "./single-news.component.html",
  styleUrls: ["./single-news.component.scss"],
})
export class SingleNewsComponent implements OnInit, OnDestroy {
  pSub: Subscription;
  id: number;
  title: string;
  text: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.pSub = this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.http
        .get<INews>(`${environment.baseUrl}/posts/${this.id}`)
        .subscribe((post) => {
          this.title = post.title;
          this.text = post.body;
        });
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
