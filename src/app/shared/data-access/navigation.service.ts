import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    selectedClientID = -1;
    selectedProjectID = -1;

    setSelection(clientID: number, projectID: number): void {
        this.selectedClientID = clientID;
        this.selectedProjectID = projectID;
    }

    getSelection(): { clientID: number, projectID: number } {
        return {
            clientID: this.selectedClientID,
            projectID: this.selectedProjectID
        };
    }

}
