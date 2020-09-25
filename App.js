import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let num = 13;

export function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Press Me!"
        color="blue"
        onPress={()=>console.log("I'm pressed!")}/>
    </View>
  );
}

export function App1() {
  let num = 10;
  return (
    <View style={{
        backgroundColor: 'fff', 
        top: 200, 
        left: 100, 
        width: 200 }}>
      <Text style>Your lucky number:</Text>
      <Text style>{num}</Text>
    </View>
  );
}

export class App2 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export class App3 extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="+"
          color="red"
          onPress={()=>{
            this.setState({counter: this.state.counter + 1}
          )}}
        />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}

export default class App4 extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="+"
          color="red"
          size="40"
          onPress={()=>{
            this.setState({counter: this.state.counter + 1}
          )}}
        />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}


export class App5 extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={{
            height: 100,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: 'lightblue',
            borderRadius:10,
            borderWidth: 3,
            borderColor: '#111'
          }}
          onPress={()=>{
            this.setState({counter: this.state.counter + 1}
          )}}
        >
          <Text style={{fontSize: 36}}>{this.state.counter}</Text>
          <Text style={{fontSize: 12}}>Press me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
