import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { NewsPageComponent } from "./pages/news-page/news-page.component";
import { SingleNewsComponent } from "./pages/single-news/single-news.component";
import { AuthGuard } from "./services/guards/auth-guard.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "news", component: NewsPageComponent, canActivate: [AuthGuard] },
  {
    path: "news/:id",
    component: SingleNewsComponent,
    canActivate: [AuthGuard],
  },
  { path: "", redirectTo: "/news", pathMatch: "full" },
  { path: "**", redirectTo: "/news" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
