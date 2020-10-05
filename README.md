# addFunction
Simple module to add values to timesheet systems

## Requirements
Node >v11.10.1
NPM >6.14.4

## Build

```bash
npm run build
```

##Test
```bash
npm test
```

## Setup
```bash
npm install
```

## Usage
Run:
```bash
npm install --save ovaldivia/addFunction
```

In your code add:
```bash
import {addAlphaOne, addAlphaTwo} from addFunction

()=> async {
    const start = new Date('09/01/2020');
    const end = new Date('09/02/2020');

    r1 = addAlphaOne(start, end);
    r2 = await addAlphaTwo(start, end);

    console.log('addAlphaOne', r1);
    console.log('addAlphaTwo', r2);
}
```
