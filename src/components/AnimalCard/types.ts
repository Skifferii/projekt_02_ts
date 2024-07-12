interface Animal {
  name: string;
  species: string;
  role: string;
  image: string;
}

export interface AnimalCardProps {
  animalData: Animal
}