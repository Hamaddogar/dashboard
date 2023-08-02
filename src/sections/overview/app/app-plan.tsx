// @mui
import { useTheme, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Paper, PaperProps } from '@mui/material';
// theme

// ----------------------------------------------------------------------
interface Props extends PaperProps {
  elevation: number
}

export default function AppPlan({ elevation = 7 }: Props) {
  const theme = useTheme();

  return (
    <Paper elevation={elevation}>
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        sx={{
          backgroundColor: "#1BFCB6",
          p: {
            xs: theme.spacing(5, 3, 5, 3),
            md: theme.spacing(5),
          },
          color: 'primary.darker',
          // backgroundColor: 'common.white',
          borderRadius: 2,
          position: 'relative',
        }}
        spacing={5}
      >
        <Box component='img' src='/raw/dl.png' sx={{ width: '100%', maxWidth: '160px', maxHeight: '90px' }} />
        <Stack
          flexGrow={1}
          justifyContent="center"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{

            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h4" sx={{ whiteSpace: 'pre-line', }}>
            Pro Plan
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              maxWidth: 360,
              mb: { xs: 1 },
              color: 'primary.darker'
            }}
          >
            You can renew your subscription.
          </Typography>

          <Box>
            <Button variant='contained' sx={{ backgroundColor: '#0F1349', '&:hover': { backgroundColor: '#0F1349' }, color: '#FFFFFF', borderRadius: '20px', fontWeight: 300 }} >
              Upgrade Plan
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button variant='contained' sx={{ backgroundColor: '#1AE0AA', '&:hover': { backgroundColor: '#1AE0AA' }, color: '#0F1349', borderRadius: '20px', fontWeight: 300 }} >
              Renew Plan
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}
