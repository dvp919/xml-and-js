const data  = require('./quiz-data.json');

const getActiveAccount = (data) => data.filter(({ isActive}) => isActive);

console.log(getActiveAccount(data));

const getMaxBalance = (data) =>
    data    
        .map(({balance}) => balance.replace('$','').replace(',',''))
        .reduce((max,current) => (max => current ? max : current),0);

console.log(getMaxBalance(data));

const getFriends = data => 
    data
        .map(({friends}) => friends.map(({name}) => name)).flat();

console.log(getFriends(data));


const getNames = (data) => data.map(({ name }) => name).join(',');

console.log(getNames(data));