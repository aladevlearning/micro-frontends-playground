import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  Users as UsersIcon,
  CreditCard as PaymentsInfo
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: '',
  name: ''
};

const items = [
  {
    href: '/app/accounts',
    icon: UsersIcon,
    title: 'Accounts'
  },
  {
    href: '/app/payments',
    icon: PaymentsInfo,
    title: 'Payments'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const [username, setUsername] = useState("")
  const [tenantName, setTenantName] = useState("")

  useEffect(() => {
    async function setUserInfo() {
      const userInfo = await Auth.currentUserInfo();
      const { username, attributes } = userInfo;
      setUsername(username);
      setTenantName(attributes['custom:tenantName']);
    }

    if (openMobile && onMobileClose) {
      onMobileClose();
    }

    setUserInfo();
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/accounts"
        />
        <Typography component="div">
          <Box display="inline" fontWeight="fontWeightBold">
            Username:
          </Box> {username}
        </Typography>
        <Typography component="div">
          <Box display="inline" fontWeight="fontWeightBold">
            Tenant:
          </Box> {tenantName}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
