import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { AuctionComponent } from './overview/auction/auction.component';
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    OverviewComponent,
    AuctionComponent
  ],
    imports: [
        CommonModule,
        OverviewRoutingModule,
        MatCardModule,
        SharedModule
    ]
})
export class OverviewModule { }
