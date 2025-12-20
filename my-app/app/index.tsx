import { Text, View, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { searchCountry } from "../app/utils/data";

export default function Cat() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  return (
    <View>
      <TextInput
        placeholder="Enter country name"
        value={query}
        onChangeText={async (text) => {
          setQuery(text);
          if (text.length > 2) {
            const data = await searchCountry(text);
            setResults(data);
          }
        }}
        style={{ borderWidth: 1, padding: 8, margin: 8 }}
      />

      <FlatList
        data={results}
        keyExtractor={(item) => item.cca3}
        renderItem={({ item }) => <Text>{item.name.common}</Text>}
      />
    </View>
  );
}
