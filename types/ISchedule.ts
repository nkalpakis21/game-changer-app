export interface IGame {
    id: string,
    eventType: 'game',
    status: 'scheduled',
    homeAway: 'home' | 'away',
    opponentId: string,
    opponentName: string,
    start: Date,
    end: Date,
    timezone: string,
    notes: string,
    location: string
}
export interface ISchedule {
    games: Array < IGame >
}

export interface IScheduleViewModel {
    [key: string]: Array<IGame>
}