import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/app/environment";
import { INews } from "src/app/interfaces";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<INews[]> {
    return this.http.get<INews[]>(`${environment.baseUrl}/posts`);
  }
}
