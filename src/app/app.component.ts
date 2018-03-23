import { Component, OnInit } from "@angular/core";
import { Category } from "./models/Category";
import { MyeventService } from "./services/myevent.service";
import { Authentication } from "./providers/authentication";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [MyeventService]
})
export class AppComponent implements OnInit {

    public categories: Category[] = [];

    constructor( private myEventsService: MyeventService,
                 private authentication: Authentication ){}

    ngOnInit(): void {

        this.myEventsService.getAllCategories().subscribe(
            (data) => {
                if( data.success ){
                    this.categories = data.categories as Category[];
                }
            }
        )

    }

}
