import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Playerservice } from '../playerservice';
import { Player } from '../player';
import { RouterLink } from '@angular/router';
import { MatSelect,MatSelectModule } from '@angular/material/select';

import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-addplayer',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule,RouterLink,MatSelectModule, MatIcon],
  templateUrl: './addplayer.html',
  styleUrl: './addplayer.css'
})
export class AddPlayer {
  PerSer: Playerservice = inject(Playerservice);
  playerform = new FormGroup({ firstname: new FormControl(''), lastname: new FormControl(''), number: new FormControl('') , position:new FormControl('') ,team : new FormControl('') ,height : new FormControl('')});
  selectedAnrede:String="";


  safenewPlayer() {
    let i: number = this.PerSer.getPlayers().length;
    //this.PerSer.newPlayer({ firstname: String(this.Playerform.value.firstname), lastname: String(this.Playerform.value.lastname), age: Number(this.Playerform.value.age), id: i });
    console.log(this.PerSer.getPlayers());

  }

}
