'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import { FormControlLabel, Switch, Box, Paper } from '@mui/material';
import AppWidget from '../app-widget';
import AppHolder from '../app-holder';
import AppPlan from '../app-plan';
import AppEdit from '../app-edit';
import AppPublish from '../app-publish';
import AppFeatured from '../app-featured';
import AppNewInvoice from '../app-new-invoice';
import AppTopAuthors from '../app-top-authors';
import AppTopRelated from '../app-top-related';
import AppAreaInstalled from '../app-area-installed';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentDownload from '../app-current-download';
import AppTopInstalledCountries from '../app-top-installed-countries';
import AppSummary from '../app-summary';
import AppOrders from '../app-orders';
import AppProducts from '../app-products';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <AppPublish
            elevation={7}
            title="Shoppi.com"
            description="http://www.shoppi/overzaki.com"
            img={<SeoIllustration />}
            action={
              <FormControlLabel
                control={<Switch color='primary' defaultChecked />}
                label="Published now"
              />
            }
          />
        </Grid>

        <Grid xs={12} md={6}>
          <AppPlan elevation={7} />
        </Grid>

        <Grid xs={12} md={6}>
          <AppEdit elevation={7} />
        </Grid>

        <Grid xs={12}>
          <AppHolder title="Tools" subtitle='All Tools' >
            {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((item, indx) =>
              <Box
                key={indx}
                sx={{
                  width: "100%",
                  maxnWidth: "100px",
                  minWidth: "100px",
                  height: "120px",
                  backgroundColor: "rgb(255, 93, 143,.12)",
                  borderRadius: "16px",
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  flexDirection: 'column'
                }}
              >
                <Box component='img' src='/raw/orders.svg' sx={{ width: '29px' }} />
                <Typography variant="subtitle2">
                  Orders
                </Typography>
              </Box>
            )}
          </AppHolder>
        </Grid>

        <Grid xs={12}>
          <AppHolder title="Quick Summary">
            {[1, 2, 3, 1, 2, 3].map((item, indx) =>
              <AppSummary
                elevation={7}
                key={indx}
                title='Live Visitors'
                count={78}
                icon={<Box component='img' src='/raw/VisitorsN.svg' />}
              />
            )}

          </AppHolder>
        </Grid>

        <Grid xs={12}>
          <AppHolder title="Latest Orders" subtitle="All Orders">
            {[
              {
                idNo: "#425453697",
                datetime: "22/03/2022, 3:54 PM",
                name: "Zain Abdallah",
                status: "Completed",
                amount: 120,
                itemCount: 2,
                country: "default",
              },
              {
                idNo: "#425453697",
                datetime: "22/03/2022, 3:54 PM",
                name: "Zain Abdallah",
                status: "Pending",
                amount: 120,
                itemCount: 2,
                country: "default",
              },
              {
                idNo: "#425453697",
                datetime: "22/03/2022, 3:54 PM",
                name: "Zain Abdallah",
                status: "Accepted",
                amount: 120,
                itemCount: 2,
                country: "default",
              },
              {
                idNo: "#425453697",
                datetime: "22/03/2022, 3:54 PM",
                name: "Zain Abdallah",
                status: "Rejected",
                amount: 120,
                itemCount: 2,
                country: "default",
              }
            ].map((item, indx) => <AppOrders
              elevation={7}
              key={indx}
              idNo={item.idNo}
              datetime={item.datetime}
              name={item.name}
              status={item.status}
              amount={item.amount}
              itemCount={item.itemCount}
              country={item.country}
            />
            )}
          </AppHolder>
        </Grid>

        <Grid xs={12}>
          <AppHolder title="Revenue Chart" subtitle="View Reports">
            <Paper elevation={7} sx={{ width: '100%' }}>
              <AppAreaInstalled
                title="Total"
                subheader="4.100,500 KWD"
                chart={{
                  categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                  series: [
                    {
                      year: '2019',
                      data: [
                        {
                          name: 'Asia',
                          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                        },
                        {
                          name: 'America',
                          data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                        },
                      ],
                    },
                    {
                      year: '2020',
                      data: [
                        {
                          name: 'Asia',
                          data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                        },
                        {
                          name: 'America',
                          data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                        },
                      ],
                    },
                  ],
                }}
              />
            </Paper>
          </AppHolder>
        </Grid>


        <Grid xs={12}>
          <AppHolder title="Trending" subtitle="View All" description='Most trending items and products'>
            {[
              {
                idNo: "#1",
                name: "iPhone 13 Pro Max",
                description: "Mobiles - 142 KWD",
                sales: 254,
                img: '/raw/ti1.png'
              }, {
                idNo: "#2",
                name: "Smart Watch GXT",
                description: "Watches - 48 KWD",
                sales: 832,
                img: '/raw/ti2.png'
              }, {
                idNo: "#3",
                name: "Apple AirPods Pro White",
                description: "Mobiles - 142 KWD",
                sales: 254,
                img: '/raw/ti3.png'
              }, {
                idNo: "#1",
                name: "iPhone 13 Pro Max",
                description: "Mobiles - 142 KWD",
                sales: 254,
                img: '/raw/ti1.png'
              }, {
                idNo: "#2",
                name: "Smart Watch GXT",
                description: "Watches - 48 KWD",
                sales: 832,
                img: '/raw/ti2.png'
              },

            ].map((item, indx) => <AppProducts
              elevation={7}
              key={indx}
              idNo={item.idNo}
              name={item.name}
              description={item.description}
              sales={item.sales}
              img={item.img}
            />
            )}
          </AppHolder>
        </Grid>


        <Grid xs={12}>
          <AppHolder title="Most Selling" subtitle="View All" description="Most selling items and products">
            {[
              {
                idNo: "#1",
                name: "ASUS Laptop - Core i7",
                description: "Laptops - 489 KWD",
                sales: 832,
                img: '/raw/si1.png'
              }, {
                idNo: "#2",
                name: "iPhone 8 Gold",
                description: "Mobiles - 142 KWD",
                sales: 254,
                img: '/raw/si2.png'
              }, {
                idNo: "#3",
                name: "Sony Wireless Headphones",
                description: "Mobiles - 142 KWD",
                sales: 254,
                img: '/raw/si3.png'
              }, {
                idNo: "#1",
                name: "ASUS Laptop - Core i7",
                description: "Laptops - 489 KWD",
                sales: 832,
                img: '/raw/si1.png'
              }, {
                idNo: "#2",
                name: "iPhone 8 Gold",
                description: "Mobiles - 142 KWD",
                sales: 254,
                img: '/raw/si2.png'
              },

            ].map((item, indx) => <AppProducts
              elevation={7}
              key={indx}
              idNo={item.idNo}
              name={item.name}
              description={item.description}
              sales={item.sales}
              img={item.img}
            />
            )}
          </AppHolder>
        </Grid>

      </Grid>
    </Container >
  );
}
