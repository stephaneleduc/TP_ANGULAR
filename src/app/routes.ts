import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { HomeComponent } from "./home/home.component";
import { Authentication } from "./providers/authentication";

const routes: Routes = [

    {

        path:"home",
        component: HomeComponent

    },

    {
        path: "events", //route - url
        canActivate: [Authentication],
        component: EventsComponent //Component appelé dans la route
    },

    {
        path: "events/:id_category", 
        canActivate: [Authentication],
        component: EventsComponent

    },

    {

        path: "**",
        redirectTo: "home"
    }

]

export const routing = RouterModule.forRoot(routes);