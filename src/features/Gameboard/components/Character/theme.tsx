import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: 180
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '60%',
        },
        cover: {
            width: '40%',
            transform: 'scale(1)'
        },
    }),
);

export default useStyles;