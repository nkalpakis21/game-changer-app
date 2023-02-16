import { Grid, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"

interface IProps {
    date: {dayOfWeek: string, dayOfMonth: string },
    header: string,
    description: string,
}
export default function GameComponent({date, header, description}: IProps) {
    return (
        <Grid 
            container 
            padding={4} 
            sx={{
                "&:nth-of-type(1)": {
                    borderRadius: '5px 5px 0px 0px',
                    border: 'solid', 
                    borderColor: grey[300],
                  },
                  "&:last-child": {
                    borderRadius: '0px 0px 5px 5px',
                    border: 'solid', 
                    borderTop: 'none',
                    borderColor: grey[300],
                  },
                    border: 'solid', 
                    borderColor: grey[300],
                    borderTop: 'none',
            }}>
            <Grid item pr={3}>
                <Typography align="center" color={grey[700]} variant="h6">{date.dayOfWeek}</Typography>
                <Typography align="center" variant="h5" style={{fontWeight: 'bolder'}}>{date.dayOfMonth}</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="h5">{header}</Typography>
                <Typography color={grey[700]} variant="h6">{description}</Typography>
            </Grid>
        </Grid>
    )
}