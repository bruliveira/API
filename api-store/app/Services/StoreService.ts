import Stor from "App/Models/Stor";
import { IStore } from "Contracts/interface/IStore";
import {uuid} from "uuidv4";

//Colocar a findMany(da query)

export class StoreService {
    private storee: IStore[] = []    
    
    async findAll(){
        return await Stor.all()
    }  
    
    

    async findOne(id: string){
        return await Stor.find(id)
    }

    async create(store: IStore){
        const StoreCreated: IStore={
            ...store,
            id:uuid()
        }
        this.storee.push(StoreCreated)

        const storeCriado = await Stor.create(StoreCreated)
        return storeCriado;
    }

    /*find(): IStore[] {

        return this.store
    }
    */

    /*
    async create(store: IStore){
        const storeCriado = await Stor.create(store)
        return storeCriado;
    }
    */

    async update(id: string, storeDto: IStore) {
        const store = await Stor.find(id)
        if(!store){
            return null
        }
        return await Stor.updateOrCreate({id}, storeDto)
    }
    
    async delete (id: string){
        const store = await Stor.find(id)
        
        if(!store){
            return null
        }
        return await store.delete()
    }
     
    async mostrar (id: string){
        const store = await Stor.find(id)
        
        if(!store){
            return null
        }

    }
}
