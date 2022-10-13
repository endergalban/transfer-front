import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferService } from '../transfer/services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transferService: TransferService,
  ) { }

  ngOnInit(): void {
    const receivers = this.route.snapshot.data['reicivers'];
  }

}
