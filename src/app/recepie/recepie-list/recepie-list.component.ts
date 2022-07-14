import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../recepie.model';
import { Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit, OnDestroy {
  recepies: Recepie[];
  subscription: Subscription;


  constructor(private recepieService: RecepieService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.recepieService.recepiesChanged.subscribe(
      (recepie: Recepie[]) => {
        this.recepies = recepie;
      }
    );
    this.recepies = this.recepieService.getRecepies();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
