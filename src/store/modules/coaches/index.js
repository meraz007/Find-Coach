import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
        return{
            coaches:[
                {
                    id:'c1',
                    firstName:'Saiful',
                    lastName:'Islam',
                    areas:['front-end','backend','career'],
                    description:"I'm Saiful and I've worked as a freelance web developer for years",
                    houreRate:30
                },
                {
                    id:'c2',
                    firstName:'Amin',
                    lastName:'Khan',
                    areas:['SQA','career'],
                    description:"I'm Amin Khan and I've worked as a SQA Engineer for years",
                    houreRate:20
                }
            ]
        }

    },
    mutations,
    actions,
    getters
};