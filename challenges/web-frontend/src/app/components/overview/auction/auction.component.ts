import {Component, Input, OnInit} from '@angular/core';
import {Auction} from "../../../shared/models/Auction";

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  @Input() auction: Auction | any;

  constructor() { }

  ngOnInit(): void {
  }

}
