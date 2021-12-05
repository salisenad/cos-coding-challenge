import {Component, OnInit} from '@angular/core';
import {AuctionsService} from "../../shared/services/auctions/auctions.service";
import {Auction} from "../../shared/models/Auction";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  normalDealsListAuction: Auction[] = []
  hotDealsListAuction: Auction[] = []
  highestBidderAuction: Auction[] = []

  constructor(private auctionsService: AuctionsService) {
  }

  ngOnInit(): void {
    this.getAuctions();
  }


  getAuctions() {
    this.auctionsService.getAuctions().subscribe(
      res => {
        this.normalDealsListAuction = [];
        this.hotDealsListAuction = [];
        this.highestBidderAuction = [];
        for (let auction of res) {
          if (!auction.hotBid && !auction.amIHighestBidder) {
            this.normalDealsListAuction.push(auction);
          } else if (auction.hotBid && !auction.amIHighestBidder) {
            this.hotDealsListAuction.push(auction);
          } else if (auction.amIHighestBidder) {
            this.highestBidderAuction.push(auction);
          }
        }
      }, error => {
        alert('Can not get Auctions');
        console.log('error', error);
      }
    )
  }


}
