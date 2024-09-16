interface ManagerRecord {
    id: string;
    name: string;
    imageLink: string;
    imageId: string;
    dateOfBirth: string | null;
    citizenship: string;
}
interface PlayerRecord {
    id: string;
    name: string;
    imageLink: string;
    imageId: string;
    dateOfBirth: string | null;
    citizenship: string;
    height: number | null;
    position: string;
    foot: string | null;
    number: number | null;
    coords: string | null;
    actions: string[];
}
interface TeamRecord {
    id: string;
    name: string;
    imageLink: string;
    imageId: string;
    position: number | null;
    score: number | null;
    halfScore: number | null;
    lineup: string;
    manager: ManagerRecord;
    first11: PlayerRecord[];
    substitutes: PlayerRecord[];
}

export interface MatchRecord {
    id: string;
    type: string;
    league: string;
    country: string;
    season: string;
    round: string;
    date: string;
    stadium: string | null;
    attendance: number | null;
    referee: string | null;
    extraTime: boolean;
    penalty: boolean;
    home: TeamRecord;
    away: TeamRecord;
}