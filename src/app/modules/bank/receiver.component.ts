import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceiverService } from './services/bank.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private receiverService: ReceiverService,
  ) { }

  receivers: any = [];

  ngOnInit(): void {
    this.receivers = this.route.snapshot.data['receivers'];
  }

}
