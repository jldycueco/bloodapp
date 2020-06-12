import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import styled from 'styled-components';

const RedBackground = styled.View`
  background-color: #d61b1f;
  flex: 0.4;
  align-items: center;
`;

const WhiteBackground = styled.View`
  align-items: center;
`;

const Chart = styled.View`
  background-color: #fff;
  height: 200px;
  width: 90%;
  margin-top: 20px;
  border-radius: 10px;
`;

const RequestContainer = styled.View`
  margin-top: 50px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  width: 90%;
  border: 1px solid;
  border-radius: 10px;
`;

const BloodContainer = styled.View`
  margin: 0 10px 0 10px;
  padding: 10px;
  border: 1px solid;
`;

const NameContainer = styled.View`
  margin: 0 10px 0 10px;
`;

const UserContainer = () => {
  return (
    <>
      <RequestContainer>
        <BloodContainer>
          <Text>Urgent</Text>
          <Text style={{fontSize: 36}}>B+</Text>
        </BloodContainer>
        <NameContainer>
          <Text>Name</Text>
          <Text>Info</Text>
        </NameContainer>
      </RequestContainer>
    </>
  );
};

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <RedBackground>
          <Text>Red Background</Text>
          <Chart>
            <Text>Chart</Text>
          </Chart>
        </RedBackground>
        <WhiteBackground>
          <Text>White Background</Text>
          <UserContainer />
        </WhiteBackground>
      </View>
    </>
  );
};

export default App;
