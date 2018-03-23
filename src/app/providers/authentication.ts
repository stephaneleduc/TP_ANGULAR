import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class Authentication implements CanActivate {

    private connected_id: number;

    constructor(private router: Router) {}

    getConnected_id(): number {
        return this.connected_id;
    }

    setConnected_id(connected_id): void {

        this.connected_id = connected_id;
    }

    canActivate() : boolean {

        if (this.connected_id > 0 ) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}