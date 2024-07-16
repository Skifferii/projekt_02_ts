import {AnimalCardWrapper,
        AnimalImage,
        AnimalTitle,
        AnimalSpecies,
        AnimalRole
}from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalTitle>{animalData.name}</AnimalTitle>
      <AnimalSpecies>{animalData.species}</AnimalSpecies>
      <AnimalRole>{animalData.role}</AnimalRole>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
