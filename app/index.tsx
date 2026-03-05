import PokemonCards from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView, Text } from 'react-native';

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
    setResults(data.results); 
  };

  return ( 
    <ScrollView>
      <Text>{results[1]?.name}</Text>
      {results.map ((item) =>{ 
        return <PokemonCards 
        key={item.name} 
        name={item.name} 
        url={item.url} />; 
      })}
    </ScrollView>

  );
}
