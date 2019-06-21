import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import { Platform } from "@unimodules/core";

const items = [];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDo: ""
  };

  addItem() {
    if (this.state.as != "") {
      items.push(this.state.toDo);
      this.setState({ toDo: "" });
    } else {
      this.setState({ toDo: "" });
    }
  }
  renderItem(item) {
    return (
      <View
        key={item}
        style={{
          height: 100,
          backgroundColor: "#94090D",
          margin: 5,
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}
      >
        <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
          {item}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS == "ios" ? 21 : 23 }}>
        <View
          style={{
            backgroundColor: "#5C0002",
            height: 60,
            flexDirection: "row",
            padding: 10
          }}
        >
          <View
            style={{
              backgroundColor: "#94090D",
              flex: 4,
              marginRight: 8,
              justifyContent: "center"
            }}
          >
            <TextInput
              TextInputName="as"
              value={this.state.toDo}
              onChangeText={v => this.setState({ toDo: v })}
              placeholder="Yapılacaklar"
              style={{
                height: 32,
                backgroundColor: "#FF1D23",
                borderRadius: 5,
                color: "#f4f4f4",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 10
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "#94090D",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Button
              onPress={this.addItem}
              title="Ekle"
              color="#450003"
              accessibilityLabel="Listenize eklemek için tıklayınız."
            />
          </View>
        </View>
        <ScrollView>{items.map(item => this.renderItem(item))}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
