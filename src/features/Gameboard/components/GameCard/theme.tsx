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
        root2: {
            height: 300,
            transition: 'background-color 250ms linear',
            backgroundColor: '#4caf50',
            '&:hover': {
                backgroundColor: '#419945',
            }
        },
        action: {
            display: 'block',
            height: '100%',
            width: '100%'
        },
        media: {
            height: '60%',
            margin: 16,
            backgroundColor: '#fff',
            backgroundSize: 'contain'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30%'
        }
    }),
);

export default useStyles;