import { Component, Input, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { INews } from "../../interfaces";

@Component({
  selector: "app-news-component",
  templateUrl: "./news-component.component.html",
  styleUrls: ["./news-component.component.scss"],
})
export class NewsComponentComponent implements OnInit {
  @Input() post: INews;

  constructor() {}

  ngOnInit(): void {}
}
