import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  FlatList,
  Platform,
} from 'react-native';
import Text from './components/Text';
import {LineChart, Path} from 'react-native-svg-charts';
import {Line} from 'react-native-svg';
import * as shape from 'd3-shape';

import Data from './Data';

const chart = [
  1.1,
  3,
  1.5,
  2.3,
  3.2,
  7,
  8.2,
  1.2,
  2,
  1.2,
  8,
  3.8,
  5.8,
  3.9,
  5.1,
  0.1,
  6,
];

const styles = StyleSheet.create({
  redBackground: {
    backgroundColor: '#d61b1f',
    flex: Platform.OS === 'ios' ? 0.5 : 0.9,
    alignItems: 'center',
  },
  whiteBackground: {
    alignItems: 'center',
  },
  chart: {
    backgroundColor: '#fff',
    height: 200,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  requestContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  bloodContainer: {
    marginTop: 0,
    marginRight: 10,
    marginBottom: 0,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 75,
  },
  nameContainer: {
    marginTop: 0,
    marginRight: 10,
    marginBottom: 0,
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
    padding: 5,
    marginTop: Platform.OS === 'ios' ? 60 : 10,
  },
  buttonTitle: {
    marginTop: Platform.OS === 'ios' ? 70 : 60,
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
  },
});

const UserContainer = ({bloodType, name, age, gender, distance, time}) => {
  return (
    <>
      <View style={styles.requestContainer}>
        <View style={styles.bloodContainer}>
          <View style={{backgroundColor: '#d61b1f', borderTopRightRadius: 8, borderTopLeftRadius: 8}}>
            <Text style={{textAlign: 'center', color: '#fff'}}>Urgent</Text>
          </View>
          <View style={{padding: 10, backgroundColor: '#3A3232', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
            <Text style={{fontSize: 36, color: '#fff'}}>{bloodType}</Text>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
          </View>
          <View>
            <Text>
              {age}yrs • {gender} • {distance}km • {time}hrs
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const renderChart = () => {
  const LineShadow = ({line}) => (
    <Path
      d={line}
      fill="none"
      stroke="#D61B1F"
      strokeWidth={7}
      strokeOpacity={0.07}
    />
  );

  return (
    <LineChart
      yMin={0}
      yMax={10}
      data={chart}
      style={{flex: 2}}
      curve={shape.curveMonotoneX}
      svg={{
        stroke: '#D61B1F',
        strokeWidth: 1.25,
      }}
      contentInset={{left: 12, right: 12}}>
      <LineShadow belowChart={true} />
      <Line
        key="zero-axis"
        x1="0%"
        x2="100%"
        y1="50%"
        y2="50%"
        belowChart={true}
        stroke="#D9D2D2"
        strokeDasharray={[2, 10]}
        strokeWidth={1}
      />
    </LineChart>
  );
};

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.redBackground}>
          <Text style={styles.title}>Blood Requests</Text>
          <View style={styles.chart}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 36, fontWeight: 'bold'}}>291</Text>
                  <Text>Available</Text>
                </View>
                <Text style={{marginTop: 15, marginLeft: 10}}>-12%</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 15, marginRight: 10}}>+49%</Text>
                <View>
                  <Text style={{fontSize: 36, fontWeight: 'bold'}}>481</Text>
                  <Text>Requests</Text>
                </View>
              </View>
            </View>
            {renderChart()}
          </View>
        </View>
        <View style={styles.whiteBackground}>
          <View style={styles.buttonTitle}>
            <Text>Recent Updates</Text>
            <View style={{flex: 1}} />
            <Text> View All</Text>
          </View>
          {/* <FlatList
            data={Data}
            renderItem={({item}) => (
              <UserContainer
                bloodType={item.bloodType}
                name={item.name}
                age={item.age}
                gender={item.gender}
                distance={item.distance}
                time={item.time}
              />
            )}
            keyExtractor={item => item.name}
          /> */}
          {Data.map((item, index) => (
            <UserContainer
              key={index}
              bloodType={item.bloodType}
              name={item.name}
              age={item.age}
              gender={item.gender}
              distance={item.distance}
              time={item.time}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default App;
