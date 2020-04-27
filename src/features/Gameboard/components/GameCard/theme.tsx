import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 300,
            transition: 'background-color 250ms linear',
            '&:hover': {
                backgroundColor: theme.palette.grey[300],
            }
        },
        action: {
            display: 'block',
            height: '100%',
            width: '100%'
        },
        media: {
            height: '60%',
            border: '16px solid transparent',
            backgroundSize: 'contain'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40%'
        }
    }),
);

export default useStyles;