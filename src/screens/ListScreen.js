import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const freinds = [
    { name: "freind1", age: 10 },
    { name: "freind2", age: 20 },
    { name: "freind3", age: 30 },
    { name: "freind4", age: 40 },
    { name: "freind5", age: 50 },
    { name: "freind6", age: 60 },
    { name: "freind7", age: 70 },
    { name: "freind8", age: 80 },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(freind) => freind.name}
        data={freinds}
        renderItem={(element) => {
          return (
            <Text style={styles.textStyle}>
              {element.item.name} -Age {element.item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    marginVertical: 30,
  },
});

export default ListScreen;
