import fetch from 'node-fetch';
import * as devalue from 'devalue';
import { decompress } from 'compress-json';

const response = await fetch('https://tldb.info/auction-house/__data.json', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
});

const text = await response.text();
const apiResp = JSON.parse(text);
const dataNode = apiResp.nodes.find((e) => e?.type === 'data');
const apiData = devalue.unflatten(dataNode.data);
const items = decompress(apiData.items);

const item = items.find(i => i.name && i.name.includes('Ashen Abyss'));
console.log('Nombre:', item.name);
console.log('Icon raw:', item.icon);
console.log('URL completa:', `https://cdn.tldb.info/${item.icon}`);
console.log('URL alternativa:', `https://tldb.info/${item.icon}`);