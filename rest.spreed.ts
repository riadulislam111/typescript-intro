const device = {
    name: 'iphone',
    type: 'smartphone',
    price: 444,
    storage: '3434GB'
}

const {name: deviceName, ...deviceInfo} = device;


const numbers3: number[] = [1,2,3,4,5];
const newNumbers:number[] = [6,7,8,9];
const closeFriends: string[]= ['Alice', "bov", "charlie"];

const allString: string[] = [...closeFriends]
const allNumbers: number[] = [...newNumbers, ...numbers3]