import {View, Text} from 'react-native';
import React from 'react';
import StreamVideoComponent from '../components/ingredient/StreamVideoComponent';
import Container from '../components/ingredient/Container';
import {Colors} from '../constants/Colors';
import SessionComponent from '../components/ingredient/SessionComponent';
import PrintfNotificationsComponent from '../components/ingredient/PrintfNotificationsComponent';

const NotificationsScreen = () => {
  console.log('===================NotificationsScreen=================');
  return (
    <Container isCenter={false} color={Colors.WHITE}>
      {/* liveStreams */}
      <StreamVideoComponent />
      {/* Notifications */}
      <SessionComponent>
        <PrintfNotificationsComponent />
      </SessionComponent>
    </Container>
  );
};

export default NotificationsScreen;
