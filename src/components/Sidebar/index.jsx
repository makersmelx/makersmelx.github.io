import React from 'react';
import { Col, Layout, Row } from 'antd';
import {
  Email,
  GitHub,
  LinkedIn,
  MapsHomeWork,
  Telegram,
  Twitter,
} from '@mui/icons-material';
import style from './sidebar.module.less';
import Config from '../../../config';
import {
  Avatar,
  Button,
  Chip,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';

const { Content } = Layout;
const iconMap = {
  github: <GitHub />,
  twitter: <Twitter />,
  linkedin: <LinkedIn />,
  telegram: <Telegram />,
};
const DomContent = () => {
  return (
    <aside>
      <Stack direction="column" alignItems="center" spacing={3}>
        <Avatar
          alt="Mike Wu"
          src="https://www.gravatar.com/avatar/9c8dbd0950c39e91e7906d08531846a24b5e876ab691f254c3befeb64cd2be22?s=2048"
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="h4" component="div" gutterBottom>
          Jiayao Wu
        </Typography>
        <Stack direction="column" alignItems="center" spacing={1}>
          {/*<Chip label="Software Developer" />*/}
          <Chip label="Graduate Student" />
        </Stack>
        <Stack direction="row">
          {(Object.entries(Config.social)).map(link => {
            return (
              <IconButton href={link[1]} key={link[0]}>
                {iconMap[link[0]]}
              </IconButton>
            );
          })}
        </Stack>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" spacing={1}>
            <MapsHomeWork />
            <Typography component="div">
              Ann Arbor, MI
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Email />
            <Link
              href="mailto:&#109;&#097;&#107;&#101;&#114;&#115;&#109;&#101;&#108;&#120;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
              target="_top"
              className={style.emailHider}
              sx={{
                color: 'inherit'
              }}
            >
              @
            </Link>
          </Stack>
        </Stack>
        <Button variant="contained" href="/Jiayao Wu Resume.pdf" target="_blank">
          Resume
        </Button>
      </Stack>
    </aside>
  );
};

const Sidebar = (props) => {
  const { children } = props;
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid sm={12} md={12} lg={3} xxl={2} item>
        <DomContent />
      </Grid>
      <Grid sm={12} md={12} lg={9} xxl={10} item>
        {children}
      </Grid>
    </Grid>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout
              className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}
            >
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
