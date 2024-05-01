import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";
export function Input({ defaultValue, onChange ,unit}) {
  return (
    <>
      <View style={s.root}>
        <TextInput
          placeholder="Type your temperature"
          defaultValue={defaultValue.toString()}
          style={s.input}
          maxLength={4}
          onChangeText={(text) => {
            onChange(text);
          }}
        />
        <Text style={s.unit}>{unit}</Text>
      </View>
    </>
  );
}
