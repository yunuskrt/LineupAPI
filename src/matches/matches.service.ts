import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchesService {

    private readonly matches = [
        { id: 1, name: 'Match 1', date: new Date(), location: 'Location 1' },
        { id: 2, name: 'Match 2', date: new Date(), location: 'Location 2' },
        { id: 3, name: 'Match 3', date: new Date(), location: 'Location 3' },
    ];
    
    findAll() {
        return this.matches;
    }
    
    findOne(id: number) {
        return this.matches.find(match => match.id === id);
    }
}
