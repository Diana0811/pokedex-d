import React from 'react';
import { Image, Text, View } from 'react-native';

interface PokemonCardsProps {
    name: string
    url: string
}

export default function PokemonCards(props: PokemonCardsProps) {
    const pokemonId = props.url.split;
    const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

  return (
    <View>
      <Image 
        source={{uri: pokemonImageURL}}
        style={{width:100, height:100}}
      />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </View>
  )
}