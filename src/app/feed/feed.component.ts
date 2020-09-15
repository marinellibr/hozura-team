import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  nomeDeInvocador: string;
  slide = 0;

  ngOnInit(): void {
    this.nomeDeInvocador = this.route.snapshot.paramMap.get("username");
  }

  apresentacao(){
    if(this.slide == 3){
      this.slide = 0;
    } else {
      this.slide += 1;
    }
  }

}
