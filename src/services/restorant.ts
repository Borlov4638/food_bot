import crypto from 'crypto';
import { FOOD } from '../config/consts';
import _ from 'lodash';

export const restorantService = {
    getRandomRestorant(){

    },
    getRandomFood(){
        return _.sample(FOOD) as string
    }
}
