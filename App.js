import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableHighlight } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1"
        },
        {
          title: "Item 2"
        },
        {
          title: "Item 3"
        },
        {
          title: "Item 4"
        },
        {
          title: "Item 5"
        }
      ]
    }
    this._renderItem = this._renderItem.bind(this);
  }

  log = () => {
    console.log('click');
  };

  _renderItem({item, index}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./assets/icon.png')}/>
        <Text style={{color: '#000', marginTop: 15}}>{item.title}</Text>
        {/*<Button onPress={() => { this.carousel._snapToItem(this.state.activeIndex - 1)}} title="Prev"/>*/}
        {/*<Button onPress={() => { this.carousel._snapToItem(this.state.activeIndex + 1)}} title="Next"/>*/}
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <TouchableHighlight
          onPress={
            () => { this.carousel._snapToItem(this.state.activeIndex - 1)}
          }
        >
          <Image source={require('./assets/ic_chevron_left_36px.png')}/>
        </TouchableHighlight>

        <View>
          <Carousel
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={250}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem = { index => this.setState({activeIndex:index}) }
          />
        </View>

        <TouchableHighlight
          onPress={
            () => { this.carousel._snapToItem(this.state.activeIndex + 1)}
          }
        >
          <Image source={require('./assets/ic_chevron_right_36px.png')}/>
        </TouchableHighlight>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //add this
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
