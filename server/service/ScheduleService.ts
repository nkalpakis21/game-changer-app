import { IGame, ISchedule, IScheduleViewModel } from "../../types/ISchedule";
import { getFriendlyMonth } from "../../utils/date/date-utils";

export class ScheduleService {
    public static sortByDate(schedule: ISchedule): ISchedule {
        const sortedGames =  schedule.games.sort(function(a,b) {
            return b.start.valueOf() - a.start.valueOf();
        })
        return {games: sortedGames}
    }

    public static getViewModel(schedule: ISchedule): IScheduleViewModel {
        let viewModel:{[key: string]: Array<IGame>} = {}
        schedule.games.map((game) => {
            const month = getFriendlyMonth(game.start.getMonth());
            viewModel[`${month}`] = [...(viewModel[`${month}`] || []), game];
        });
        return viewModel
    }
}