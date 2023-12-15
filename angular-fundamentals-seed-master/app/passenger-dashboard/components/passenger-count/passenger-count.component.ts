import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: "passenger-count",
    template: `
        <div>
            <h3>Airline Passengers!</h3>
            <div>
                Total checked in: {{ CheckedInCount() }}/{{ items.length }}            
            </div>
        </div>
    `
})

export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    CheckedInCount(): number {
        if (!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}
