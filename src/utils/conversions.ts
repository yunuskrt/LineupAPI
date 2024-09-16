import { Match } from 'src/matches/schemas/matches.schema';
import { Team } from 'src/teams/schemas/teams.schema';
import { Player } from 'src/players/schemas/players.schema';
import { Manager } from 'src/managers/schemas/managers.schema';
import { MatchRecord } from 'src/matches/interfaces/matchRecord.interface';

function constructDictFromList(list: Team[] | Player[] | Manager[]) {
    const dict = {};
    list.forEach(item => {
        dict[item['_id'].toString()] = item;
    });
    return dict;
}

export function constructMatchRecord(match: Match, teams: Team[], players: Player[], managers: Manager[]) : MatchRecord{
    const teamDict = constructDictFromList(teams);
    const playerDict = constructDictFromList(players);
    const managerDict = constructDictFromList(managers);

    return {
        id: match['_id'].toString(),
        type: match['type'],
        league: match['league'],
        country: match['country'],
        season: match['season'],
        round: match['round'],
        date: match['date'],
        stadium: match['stadium'],
        attendance: match['attendance'],
        referee: match['referee'],
        extraTime: match['extraTime'],
        penalty: match['penalty'],
        home: {
            id: match['home']['id'].toString(),
            name: teamDict[match['home']['id'].toString()]['name'],
            imageLink: teamDict[match['home']['id'].toString()]['image_link'],
            imageId: teamDict[match['home']['id'].toString()]['image_id'],
            position: match['home']['position'],
            score: match['home']['score'],
            halfScore: match['home']['halfScore'],
            lineup: match['home']['lineup'],
            manager: {
                id: match['home']['manager'].toString(),
                name: managerDict[match['home']['manager'].toString()]['name'],
                imageLink: managerDict[match['home']['manager'].toString()]['image_link'],
                imageId: managerDict[match['home']['manager'].toString()]['image_id'],
                dateOfBirth: managerDict[match['home']['manager'].toString()]['date_of_birth'],
                citizenship: managerDict[match['home']['manager'].toString()]['citizenship']
            },
            first11: match['home']['first11'].map(player => {
                return {
                    id: player['id'].toString(),
                    name: playerDict[player['id'].toString()]['name'],
                    imageLink: playerDict[player['id'].toString()]['image_link'],
                    imageId: playerDict[player['id'].toString()]['image_id'],
                    dateOfBirth: playerDict[player['id'].toString()]['date_of_birth'],
                    citizenship: playerDict[player['id'].toString()]['citizenship'],
                    height: playerDict[player['id'].toString()]['height'],
                    position: playerDict[player['id'].toString()]['position'],
                    foot: playerDict[player['id'].toString()]['foot'],
                    number: player['number'],
                    coords: player['position'],
                    actions: player['actions']
                }
            }),
            substitutes: match['home']['substitutes'].map(player => {
                return {
                    id: player['id'].toString(),
                    name: playerDict[player['id'].toString()]['name'],
                    imageLink: playerDict[player['id'].toString()]['image_link'],
                    imageId: playerDict[player['id'].toString()]['image_id'],
                    dateOfBirth: playerDict[player['id'].toString()]['date_of_birth'],
                    citizenship: playerDict[player['id'].toString()]['citizenship'],
                    height: playerDict[player['id'].toString()]['height'],
                    position: playerDict[player['id'].toString()]['position'],
                    foot: playerDict[player['id'].toString()]['foot'],
                    number: player['number'],
                    coords: player['position'],
                    actions: player['actions']
                }
            }),
        },
        away: {
            id: match['away']['id'].toString(),
            name: teamDict[match['away']['id'].toString()]['name'],
            imageLink: teamDict[match['away']['id'].toString()]['image_link'],
            imageId: teamDict[match['away']['id'].toString()]['image_id'],
            position: match['away']['position'],
            score: match['away']['score'],
            halfScore: match['away']['halfScore'],
            lineup: match['away']['lineup'],
            manager: {
                id: match['away']['manager'].toString(),
                name: managerDict[match['away']['manager'].toString()]['name'],
                imageLink: managerDict[match['away']['manager'].toString()]['image_link'],
                imageId: managerDict[match['away']['manager'].toString()]['image_id'],
                dateOfBirth: managerDict[match['away']['manager'].toString()]['date_of_birth'],
                citizenship: managerDict[match['away']['manager'].toString()]['citizenship']
            },
            first11: match['away']['first11'].map(player => {
                return {
                    id: player['id'].toString(),
                    name: playerDict[player['id'].toString()]['name'],
                    imageLink: playerDict[player['id'].toString()]['image_link'],
                    imageId: playerDict[player['id'].toString()]['image_id'],
                    dateOfBirth: playerDict[player['id'].toString()]['date_of_birth'],
                    citizenship: playerDict[player['id'].toString()]['citizenship'],
                    height: playerDict[player['id'].toString()]['height'],
                    position: playerDict[player['id'].toString()]['position'],
                    foot: playerDict[player['id'].toString()]['foot'],
                    number: player['number'],
                    coords: player['position'],
                    actions: player['actions']
                }
            }),
            substitutes: match['away']['substitutes'].map(player => {
                return {
                    id: player['id'].toString(),
                    name: playerDict[player['id'].toString()]['name'],
                    imageLink: playerDict[player['id'].toString()]['image_link'],
                    imageId: playerDict[player['id'].toString()]['image_id'],
                    dateOfBirth: playerDict[player['id'].toString()]['date_of_birth'],
                    citizenship: playerDict[player['id'].toString()]['citizenship'],
                    height: playerDict[player['id'].toString()]['height'],
                    position: playerDict[player['id'].toString()]['position'],
                    foot: playerDict[player['id'].toString()]['foot'],
                    number: player['number'],
                    coords: player['position'],
                    actions: player['actions']
                }
            }),
        }
    }
}