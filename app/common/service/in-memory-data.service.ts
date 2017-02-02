import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes1 = [
      {id: 11, name: 'Mr. 凌',rows:9},
      {id: 12, name: 'Narco',rows:9},
      {id: 13, name: 'Bombasto',rows:9},
      {id: 14, name: 'Celeritas',rows:9},
      {id: 15, name: 'Magneta',rows:9},
      {id: 16, name: 'RubberMan',rows:9},
      {id: 17, name: 'Dynama',rows:9},
      {id: 18, name: 'Dr IQ',rows:9},
      {id: 19, name: 'Magma',rows:9}
      // {id: 20, name: 'Tornado'}
    ];

    return {heroes1};
  }
}
