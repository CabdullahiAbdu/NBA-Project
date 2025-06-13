import { Injectable } from '@angular/core';
import { Player } from './player';
import {players} from './playerservice-list'

@Injectable({
  providedIn: 'root'
})
export class Playerservice {
  players: Player[] = players;
  filter : string = '';
  constructor() {
    
    
    
  }
  getPlayers(): Player[] {
    return this.players;
  }

  getPlayerbyId(id: Number): Player | undefined {

    return this.getPlayers().find((element) => {
      return element.id == id
    }
    )
  }

  GetPlayerBy(filter: string): Player[] { 
    this.filter = filter;
    
    let playersorted: Player[] = [];
    //if (filter.length == 0) { return this.players; }

    this.players.forEach(player => {
      const hasMatch = Object.values(player).some(value => 
        value?.toString().toLowerCase().includes(filter.toLowerCase())
      ); 
      if (hasMatch && !playersorted.includes(player)) {
        playersorted.push(player);
      }
    });
    return  playersorted;
  }
  newPlayer(p: Player) {
    this.players.push(p);
  }
}
