
export class Pilot {
  edited: Date;
  name: string;
  created: Date;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: number;
  birth_year: string;
  image: string;
  id: number;
  vehicles: Array<number>;
  starships: Array<number>;
  films: Array<number>;

  constructor(pilot?: any) {
    this.edited = pilot && pilot.edited || null;
    this.name = pilot && pilot.name || null;
    this.created = pilot && pilot.created || null;
    this.gender = pilot && pilot.gender || null;
    this.skin_color = pilot && pilot.skin_color || null;
    this.hair_color = pilot && pilot.hair_color || null;
    this.height = pilot && pilot.height || null;
    this.eye_color = pilot && pilot.eye_color || null;
    this.mass = pilot && pilot.mass || null;
    this.homeworld = pilot && pilot.homeworld || null;
    this.birth_year = pilot && pilot.birth_year || null;
    this.image = pilot && pilot.image || null;
    this.id = pilot && pilot.id || null;
    this.vehicles = pilot && pilot.vehicles || null;
    this.starships = pilot && pilot.starships || null;
    this.films = pilot && pilot.films || null;
  }
}
