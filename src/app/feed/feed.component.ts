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

  ngOnInit(): void {
    this.nomeDeInvocador = this.route.snapshot.paramMap.get("username");
  }

}
