import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    console.log("entre en pantalla");
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setResults(data.results);
  };

  return (
    <View>
      <Text>{results[1]?.name}</Text>
      {results.map((item) =>{
        return <Text key={item.name}>p1</Text>;
      })}
    </View>
  );
}
