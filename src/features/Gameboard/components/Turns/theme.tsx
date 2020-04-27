import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: 756
        },
        header: { 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '12%'
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '70%',
            padding: '32px',
            border: '1px solid #0000001f',
            margin: '32px'
        },
        bottom: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '18%',
            padding: '32px'
        },
        button: {
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.success.main,
            '&:hover': {
                backgroundColor: theme.palette.success.dark,
            }
        }
    }),
);

export default useStyles;