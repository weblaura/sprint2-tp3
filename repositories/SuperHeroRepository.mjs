
import superHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }
    async obtenerTodos() {
        return await superHero.find({});
    }
    async buscarPorAtributo(atributo, valor){
        const superheroes = await superHero.find();
        return superheroes.filter(hero =>
            String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()));
    }
    async obtenerMayorDe30(){
        const superheroes = await superHero.find();
        return superheroes.filter(hero =>
            hero.edad > 30  && hero.planetaOrigen === "Tierra" && hero.poderes.length >=2);
    }
}
export default new SuperHeroRepository();