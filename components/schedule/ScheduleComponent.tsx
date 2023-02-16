
import { getGameDescription, getGameHeader } from "../../utils/schedule/game-utils"
import { IGame } from "../../types/ISchedule"
import { getDayOfWeek } from "../../utils/date/date-utils"
import GameComponent from "./GameComponent"
import { Box, Grid, Typography } from "@mui/material"

interface IProps {
    schedule: Array<{header: string, games: Array<IGame>}>
}

export default function ScheduleComponent({schedule}:IProps) {

    return (
        <>
        <Typography variant="h3" sx={{mb: 6}} style={{fontWeight: 'bolder'}}>Schedule</Typography>
        <Grid container spacing={10}>
                {schedule.map((section) => (
                    <Grid item xs={12} key={section.header} sx={{mb: 3}}>
                        <Typography variant="h5" style={{fontWeight: 'bolder'}} sx={{mb: 3}}>{section.header}</Typography>
                        {section.games?.map((game) => (
                            <GameComponent
                                key={game.id}
                                date={{
                                    dayOfWeek: getDayOfWeek(new Date(game.start)).toUpperCase(), 
                                    dayOfMonth: new Date(game.start).getDate().toString()
                                }} 
                                header={getGameHeader(game)} description={getGameDescription(game)}
                            />
                ))}
                    </Grid>
                ))}
            </Grid>
        </>
    )
}