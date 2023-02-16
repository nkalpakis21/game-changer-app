import { IGame, ISchedule, IScheduleViewModel } from "../../types/ISchedule";
import { getFriendlyMonth } from "../date/date-utils";

export const getViewModel = (schedule: ISchedule): IScheduleViewModel => {
    let gamesByMonth:{[key: string]: Array<IGame>}= {}

    schedule.games.map((game) => {
        const month = getFriendlyMonth(new Date(game.start).getMonth());
        gamesByMonth[`${month}`] = [...(gamesByMonth[`${month}`] || []), game];
    });

    const sections = Object.entries(gamesByMonth).map((section) => {
        return {
            header: section[0],
            games: section[1],
        }
    });

    return {sections}
}