import { IGame, ISchedule } from "@/types/ISchedule";
import MOCK_SCHEDULE from '../../mock-response.json';
export class ScheduleRepository {
    constructor() {}

    getById(scheduleId: string): ISchedule {
        // TODO make call to DB
        // Make function async and return a promise
        return ScheduleRepository.toSchedule(MOCK_SCHEDULE);
    }

    private static toSchedule(data: any) : ISchedule {
        const games: Array<IGame> = data.map((game: any) => (
             {
                id: game.id,
                eventType: game.event_type,
                status: game.status,
                homeAway: game.home_away,
                opponentId: game.opponent_id,
                opponentName: game.opponent_name,
                start: new Date(game.start.datetime),
                end: new Date(game.end.datetime),
                timezone: game.timezone,
                notes: game.notes,
                location: game.location,
            }
        ))

        return {games}
      }
}