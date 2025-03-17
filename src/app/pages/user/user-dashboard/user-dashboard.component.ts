import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './../../../components/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [SidebarComponent],
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
