import { IGame } from "../../types/ISchedule";

export const getGameHeader = (game: IGame) => {
    const homeAwayString = game.homeAway === 'home' ? 'vs.' : '@'
    return `${homeAwayString} ${game.opponentName}`
}

export const getGameDescription = (game: IGame) => {
    return `at ${game.location}`
}