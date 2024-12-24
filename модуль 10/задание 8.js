const myMap = new Map();


myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');


for (const key of myMap.keys()) {
    const value = myMap.get(key);
    console.log(`Ключ — ${key}, значение — ${value}`);
}