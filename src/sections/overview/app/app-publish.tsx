// @mui
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// theme
import { Card, Paper } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
  elevation: number
}

export default function AppPublish({ title, description, action, img, elevation = 7, ...other }: Props) {

  return (
    <Paper elevation={elevation}>
      <Card sx={{ p: '30px' }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
          spacing={{ xs: '30px', md: '10px' }}
          sx={{
            height: { md: 1 },
            borderRadius: 2,
            position: 'relative',
          }}
          {...other}
        >
          <Stack
            direction='row'
            component="span"
            justifyContent="center"
            alignItems='center'
            spacing="24px"
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'background.neutral',
                borderRadius: 2
              }}
            >
              <Box component="img" src="/raw/WebsitesC.svg" sx={{ width: '64px', height: '40px' }} />
            </Avatar>
            <Stack
              flexGrow={1}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h4" sx={{ whiteSpace: 'pre-line' }}>
                {title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: 0.8,
                  maxWidth: 360,
                }}
              >
                {description}
              </Typography>

              {action && action}
            </Stack>
          </Stack>
          <Stack
            direction='row'
            spacing="20px"
            justifyContent="center"
          >

            {
              [
                "QR Code",
                "Share",
                "Settings",
                "Preview",
              ].map((item, indx) => <Stack
                key={indx}
                component="span"
                justifyContent="center">
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: 'background.neutral',
                    borderRadius: 50
                  }}
                >
                  <Box component="img" src="/raw/link.svg" sx={{ width: 20, height: 20 }} />
                </Avatar>
                <Typography variant="body2"
                  sx={{
                    opacity: 0.8,
                    textTransform: 'capitalize'
                  }}>
                  {item}
                </Typography>
              </Stack>)
            }

          </Stack>
        </Stack>
      </Card>
    </Paper>
  );
}