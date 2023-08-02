// @mui
import { useTheme, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Card, Paper, PaperProps } from '@mui/material';
// theme

// ----------------------------------------------------------------------
interface Props extends PaperProps {
  elevation: number
}

export default function AppEdit({ elevation = 7 }: Props) {
  const theme = useTheme();

  return (
    <Paper elevation={elevation}>
      <Card elevation={2}>
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          sx={{
            // backgroundColor: "#FFFFFF",
            p: {
              xs: theme.spacing(5, 3, 5, 3),
              md: theme.spacing(5),
            },
            color: 'primary.darker',
            backgroundColor: 'common.white',
            borderRadius: 2,
            position: 'relative',
          }}
          spacing={5}
        >
          <Stack
            flexGrow={1}
            justifyContent="center"
            // alignItems={{ xs: 'center', md: 'flex-start' }}
            alignItems={{ xs: 'center' }}
            sx={{ textAlign: { xs: 'center', md: 'left' }, }}
          >
            <Typography variant="h4" sx={{ whiteSpace: 'pre-line', }}>
              Want Custom Edits?
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
              <Button variant='contained' startIcon={<Box component='img' src='/raw/OverZaki.svg' />} sx={{
                background: `transparent linear-gradient(270deg, #1BFCB6 0%, #0DE5FD 100%) 0% 0% no-repeat padding-box`,
                color: '#FFFFFF', borderRadius: '20px', fontWeight: 300
              }} >
                Upgrade Plan
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button endIcon={<Box component='img' src='/raw/arrow-right.svg' />} variant='contained' sx={{ backgroundColor: '#F5F5F8', opacity: 0.8, color: '#0F1349', borderRadius: '20px', fontWeight: 300, '&:hover': { backgroundColor: '#F5F5F8', } }} >
                You have 2 tasks
              </Button>
            </Box>
          </Stack>
          <Box textAlign='center' component='img' src='/raw/custom.svg' sx={{ maxWidth: '65px', maxHeight: '60px' }} />

        </Stack>
      </Card>
    </Paper>
  );
}
