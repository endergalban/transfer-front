import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  
  transfers: any[] = [];

  ngOnInit(): void {
    this.transfers = this.route.snapshot.data['transfers'];
  }

}
