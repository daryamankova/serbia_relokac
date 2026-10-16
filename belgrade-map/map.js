const data={
 zemun:{name:'Земун',tagline:'Старый город у Дуная со своим ритмом',image:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Belgrad_%28Zemun%29_-_Kula_Sibinjanin_Janka.jpg',brief:'Австро-венгерская застройка, набережная и ощущение отдельного небольшого города.',audience:'Пары, семьи и те, кто ценит спокойные прогулки у воды. До центра старого Белграда путь дольше.',architecture:'Невысокие дома, черепичные крыши, узкие улицы Гардоша; ближе к Новому Белграду — современный фонд.',air:'У реки открытее и часто ветренее, но зимой качество воздуха меняется по погоде и источникам отопления — проверяйте актуальные данные.',transport:'Автобусы до центра; удобен автомобиль. Время сильно зависит от пробок.',places:'Башня Гардош, Земунская набережная, Большой военный остров.',tags:['family','green','value'],score:'тихо • атмосферно',source:'Туристическая организация Белграда и актуальные экспат-гайды.'},
 novi:{name:'Новый Белград',tagline:'Простор, бизнес и модернистские кварталы',image:'https://czarnota.org/_gallery/albums/userpics/10001/2021_08_21_07_Serbia_Nowy_Belgrad_Novi_Beograd_Socialist_Brutalism.jpg',brief:'Плоская планировка, широкие проспекты, зелёные пространства между блоками и большой выбор нового жилья.',audience:'Специалисты рядом с офисами, семьи, автомобилисты и любители функционального города.',architecture:'Югославский модернизм и брутализм соседствуют с новыми жилыми комплексами.',air:'Открытый рельеф помогает проветриванию, но магистрали дают локальную нагрузку. Зимой смотрите качество воздуха по конкретной локации.',transport:'Много автобусных и трамвайных маршрутов; удобно до Земунa и делового центра.',places:'Музей современного искусства, парк Ушче, набережные Савы и Дуная.',tags:['family','modern','value'],score:'просторно • удобно',source:'Город Белград; Stay in Serbia; источники по архитектуре Нового Белграда.'},
 dorcol:{name:'Дорчол / Стари-Град',tagline:'Исторический центр, кафе и городская жизнь',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/StreetDorcol.jpg/960px-StreetDorcol.jpg.webp',brief:'Один из старейших районов: прогулочный, насыщенный заведениями и культурой, но с туристическим шумом.',audience:'Молодые специалисты, пары, любители пешей жизни и событий. Семьям важна проверка конкретной улицы на шум.',architecture:'Смешение османского наследия, домов XIX–XX веков и современной точечной застройки.',air:'Центральные улицы загружены транспортом; нижний Дорчол ближе к реке. Зимой общегородской смог возможен везде.',transport:'Большинство центра доступно пешком; трамваи и автобусы.',places:'Калемегдан, Скадарлия, Байракли-мечеть, Дунайская набережная.',tags:['walk'],score:'центр • культура',source:'Туристическая организация Белграда: Dorćol.'},
 vracar:{name:'Врачар',tagline:'Центральный жилой район с кафе и повседневной жизнью',image:'../assets/belgrade-street.png',brief:'Компактный, холмистый и очень удобный для жизни без машины; популярность отражается на цене аренды.',audience:'Профессионалы, пары, семьи и релоканты, которым важны сервисы рядом и пешая доступность.',architecture:'Довоенные городские дома, небольшие улицы, современные вставки и доминанта храма Святого Саввы.',air:'Плотная застройка и оживлённые улицы; зимой качество воздуха зависит от погоды и отопления всего города.',transport:'Автобусы, троллейбусы; многие маршруты в центр можно пройти пешком.',places:'Храм Святого Саввы, Каленић-пијаца, музей Николы Теслы рядом.',tags:['walk','family'],score:'пешком • всё рядом',source:'Stay in Serbia; актуальные обзоры районов для аренды.'},
 waterfront:{name:'Савамала / Белград-на-воде',tagline:'Набережная, новостройки и центр рядом',image:'../assets/relocation-view.png',brief:'Контраст старой Савамалы и нового высотного waterfront-кластера вдоль Савы.',audience:'Тем, кому важны новый фонд, сервисы в комплексе и эффектная набережная; бюджет обычно выше.',architecture:'Индустриальное наследие и старые фасады рядом со стеклянными башнями и крупными комплексами.',air:'Близость реки не гарантирует чистый воздух; учитывайте стройку, магистрали и общегородские зимние эпизоды.',transport:'Центр близко, но пешие связи и маршруты различаются от дома к дому.',places:'Набережная Савы, Galerija, Бранков мост, культурные площадки Савамалы.',tags:['walk','modern'],score:'новый фонд • набережная',source:'Городские и туристические материалы; экспат-гайды 2026.'},
 dedinje:{name:'Дединье / Сеняк',tagline:'Зелёные виллы, тишина и дипломатический Белград',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Belgrade%2C_quartier_de_Dedinje.jpg/1280px-Belgrade%2C_quartier_de_Dedinje.jpg',brief:'Малоэтажные престижные кварталы с зеленью и приватностью, но повседневные дела часто требуют машины.',audience:'Семьи, дипломаты и те, кому важны тишина, пространство и международные школы.',architecture:'Виллы, особняки, дипломатические резиденции и малоэтажные современные дома.',air:'Больше зелени и меньше плотной уличной сети, но зимой весь Белград подвержен загрязнению от отопления и транспорта.',transport:'Автомобиль часто удобнее; общественный транспорт зависит от конкретной улицы.',places:'Королевский комплекс, Музей истории Югославии, Дом цветов, Топчидер.',tags:['family','green'],score:'зелень • приватность',source:'Материалы о Дединье; семейные и экспат-гайды.'},
 zvezdara:{name:'Звездара',tagline:'Жилые улицы, зелень и более мягкий бюджет',image:'https://content.estitor.com/85f72895-d88d-42bd-8da9-1efdec95e784-md.webp',brief:'Большой и неоднородный район: от близких к центру улиц до удалённых кварталов. Адрес особенно важен.',audience:'Семьи, пары и те, кто ищет баланс цены и расстояния до центра.',architecture:'Старые частные дома, югославские многоэтажки и активная новая точечная застройка.',air:'У леса и на возвышенности может ощущаться свободнее, но трафик и индивидуальное отопление различаются по микрорайонам.',transport:'Автобусы и трамваи; время до центра зависит от части Звездары.',places:'Звездарский лес, обсерватория, театр Zvezdara Teatar.',tags:['family','green','value'],score:'баланс • жилой ритм',source:'Официальный перечень муниципалитетов; обзоры жилых районов.'},
 vozdovac:{name:'Вождовац',tagline:'От городских кварталов до зелёной окраины',image:'../assets/airport.png',brief:'Очень разный район: ближе к центру — плотная городская среда, южнее — спокойнее и зеленее.',audience:'Семьи, студенты и арендаторы, готовые обменять центральность на площадь и спокойствие.',architecture:'Межвоенные дома, югославские кварталы, частный сектор и современные комплексы.',air:'Возвышенные и южные части могут лучше продуваться, но близость крупных дорог и тип отопления дома критичны.',transport:'Автобусы, троллейбусы, линия BG Voz в отдельных зонах; проверяйте маршрут в часы пик.',places:'Авала и башня южнее, стадион Райко Митича, Баница.',tags:['family','value','green'],score:'разный • практичный',source:'Город Белград; районные обзоры и транспортная география.'},
 banovo:{name:'Баново-Брдо',tagline:'Самодостаточный зелёный район у Ады',image:'../assets/belgrade-river.png',brief:'Жилой район Чукарицы с собственной инфраструктурой, зеленью и быстрым доступом к рекреации.',audience:'Семьи, активные люди и те, кому не обязательно жить в историческом центре.',architecture:'Югославские жилые дома, новые комплексы и более камерные улицы на склонах.',air:'Зелень и близость Ады — плюс, но рельеф, трафик и зимние инверсии всё равно важны.',transport:'Трамваи и автобусы; в часы пик мосты и подъезды к центру могут замедлять поездку.',places:'Ада Циганлия, Кошутняк, рынок Баново-Брдо.',tags:['family','green','value'],score:'семья • природа',source:'Городские материалы и актуальные гиды по аренде.'}
};
Object.assign(data.zemun,{image:'images/districts/zemun.jpg'});
Object.assign(data.novi,{image:'images/districts/novi.jpg'});
Object.assign(data.dorcol,{image:'images/districts/dorcol.jpg'});
Object.assign(data.vracar,{image:'images/districts/vracar.jpg'});
Object.assign(data.waterfront,{image:'images/districts/savamala.jpg'});
Object.assign(data.dedinje,{image:'images/districts/dedinje.jpg'});
Object.assign(data.zvezdara,{image:'images/districts/zvezdara.jpg'});
Object.assign(data.vozdovac,{image:'images/districts/vozdovac.jpg'});
Object.assign(data.banovo,{image:'images/districts/banovo.jpg'});
data.palilula={
 name:'Палилула',tagline:'От Ташмайдана до тихих кварталов у Дуная',image:'images/districts/palilula.jpg',
 brief:'Большой и очень неоднородный муниципалитет: центральная часть начинается почти у площади Николы Пашича, а северные территории уходят далеко за Дунай.',
 audience:'Тем, кто ищет центральную городскую жизнь около Ташмайдана, более спокойные жилые улицы у Професорской колонии или доступный метраж дальше от центра.',
 architecture:'У Ташмайдана — межвоенная застройка и сербско-византийская церковь Святого Марка; дальше встречаются модернистские кварталы, частные дома и индустриальные зоны.',
 air:'Условия сильно различаются: центральные магистрали загружены, а близость Дуная сама по себе не гарантирует чистый воздух. Зимой проверяйте отопление дома и показатели по конкретному адресу.',
 transport:'Центральная часть хорошо связана трамваями и автобусами; для удалённых кварталов время в пути и пересадки нужно проверять отдельно.',
 places:'Ташмайдан, церковь Святого Марка, Ботанический сад «Евремовац», Професорская колония, Ада-Хуя.',
 tags:['walk','family','value'],score:'разный • близко к центру',source:'Город Белград; материалы о муниципалитете Палилула и Ташмайдане; OpenStreetMap.'
};
const galleryFiles={
 zemun:['zemun.jpg','zemun-2.jpg','zemun-3.jpg'],novi:['novi.jpg','novi-2.jpg','novi-3.jpg'],
 dorcol:['dorcol.jpg','dorcol-2.jpg','dorcol-3.jpg'],vracar:['vracar.jpg','vracar-2.jpg','vracar-3.jpg'],
 waterfront:['savamala.jpg','savamala-2.jpg','savamala-3.jpg'],dedinje:['dedinje.jpg','dedinje-2.jpg','dedinje-3.jpg'],
 zvezdara:['zvezdara.jpg','zvezdara-2.jpg','zvezdara-3.jpg'],vozdovac:['vozdovac.jpg','vozdovac-2.jpg','vozdovac-3.jpg'],
 banovo:['banovo.jpg','banovo-2.jpg','banovo-3.jpg'],palilula:['palilula.jpg','palilula-2.jpg','palilula-3.jpg']
};
Object.entries(galleryFiles).forEach(([id,files])=>{data[id].gallery=files.map(file=>`images/districts/${file}`)});
const districts=[...document.querySelectorAll('.district')],hover=document.querySelector('#hoverCard'),detail=document.querySelector('#detail'),shortlist=document.querySelector('#shortlist');
function renderList(filter=''){shortlist.innerHTML=Object.entries(data).filter(([,d])=>!filter||d.tags.includes(filter)).map(([id,d])=>`<button data-open="${id}"><span><b>${d.name}</b><br><small>${d.tagline}</small></span><em>${d.score}</em></button>`).join('')||'<p>Нет совпадений — попробуйте другой критерий.</p>';districts.forEach(el=>el.classList.toggle('dim',filter&&!data[el.dataset.id].tags.includes(filter)))}
function showHover(id,e){const d=data[id];hover.querySelector('img').src=d.image;hover.querySelector('img').alt=`Архитектура района ${d.name}`;hover.querySelector('b').textContent=d.name;hover.querySelector('p').textContent=d.brief;hover.hidden=false;moveHover(e)}
function moveHover(e){const x=Math.min(innerWidth-340,e.clientX+18),y=Math.min(innerHeight-250,e.clientY+18);hover.style.left=x+'px';hover.style.top=y+'px'}
function openDistrict(id){const d=data[id];districts.forEach(el=>el.classList.toggle('active',el.dataset.id===id));detail.innerHTML=`<div class="detail-grid"><img class="detail-image" src="${d.image}" alt="Архитектура района ${d.name}"><div><p class="kicker">Район для аренды</p><h2>${d.name}</h2><p class="summary">${d.brief}</p><div class="pills"><span>${d.score.replaceAll(' • ','</span><span>')}</span></div><div class="facts"><div><b>Кому подходит</b><p>${d.audience}</p></div><div><b>Архитектура</b><p>${d.architecture}</p></div><div><b>Воздух зимой</b><p>${d.air}</p></div><div><b>Транспорт</b><p>${d.transport}</p></div><div><b>Что рядом</b><p>${d.places}</p></div><div><b>Перед арендой</b><p>Посетите улицу утром и вечером, проверьте отопление, окна, шум и реальный маршрут в час пик.</p></div></div><p class="source">Основа сводки: ${d.source} Субъективные характеристики требуют проверки по конкретному адресу.</p></div></div>`;detail.scrollIntoView({behavior:'smooth',block:'start'})}
function openDistrict(id){
 const d=data[id],mapQuery=encodeURIComponent(`${d.name}, Белград, Сербия`);
 districts.forEach(el=>el.classList.toggle('active',el.dataset.id===id));
 detail.innerHTML=`<div class="detail-grid"><div class="district-gallery">${d.gallery.map((src,index)=>`<img class="${index===0?'detail-image gallery-main':'gallery-thumb'}" src="${src}" alt="${index===0?'Характерная архитектура':'Вид'} района ${d.name}" loading="lazy">`).join('')}<small>Реальные фотографии района и его характерных объектов • Wikimedia Commons</small></div><div><p class="kicker">Район для аренды</p><h2>${d.name}</h2><p class="summary">${d.brief}</p><div class="pills"><span>${d.score.replaceAll(' • ','</span><span>')}</span></div><div class="facts"><div><b>Кому подходит</b><p>${d.audience}</p></div><div><b>Архитектура</b><p>${d.architecture}</p></div><div><b>Воздух зимой</b><p>${d.air}</p></div><div><b>Транспорт</b><p>${d.transport}</p></div><div><b>Что рядом</b><p>${d.places}</p></div><div><b>Перед арендой</b><p>Посетите улицу утром и вечером, проверьте отопление, окна, шум и реальный маршрут в час пик.</p></div></div><div class="useful-links"><a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">Открыть район в Google Maps ↗</a><a href="https://vazduh.sepa.gov.rs/?lng=ru&view=mobile" target="_blank" rel="noopener">Проверить качество воздуха — SEPA ↗</a></div><div class="map-advice"><b>Если выбираете квартиру дистанционно</b><p>Откройте адрес в Google Maps, включите спутниковый слой и, если для этой точки доступно, режим 3D. Посмотрите окружающую застройку, рельеф, крупные дороги и реальное расстояние до остановок.</p></div><p class="source">Основа сводки: ${d.source} Фотографии: Wikimedia Commons. Характеристики района требуют проверки по конкретному адресу.</p></div></div>`;
 detail.scrollIntoView({behavior:'smooth',block:'start'});
}
districts.forEach(el=>{el.addEventListener('pointerenter',e=>showHover(el.dataset.id,e));el.addEventListener('pointermove',moveHover);el.addEventListener('pointerleave',()=>hover.hidden=true);el.addEventListener('click',()=>openDistrict(el.dataset.id));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDistrict(el.dataset.id)}})});
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openDistrict(b.dataset.open)});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{const active=b.classList.toggle('active');document.querySelectorAll('[data-filter]').forEach(x=>{if(x!==b)x.classList.remove('active')});renderList(active?b.dataset.filter:'')}));
document.querySelector('#reset').addEventListener('click',()=>{districts.forEach(x=>x.classList.remove('active','dim'));document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));renderList();detail.innerHTML='<div class="detail-empty"><span>↖</span><h2>Выберите район на карте</h2><p>Здесь появится развёрнутая сводка: кому подходит, архитектура, воздух зимой, транспорт и точки притяжения.</p></div>'});
renderList();

/* Geographic prototype: municipal polygons are real OSM boundaries.
   Familiar neighbourhood names remain point labels because most are not
   official administrative units with one authoritative border. */
const municipalityFiles=[
 {file:'zemun',name:'Земун',open:'zemun'},
 {file:'novi-beograd',name:'Нови-Београд',open:'novi'},
 {file:'stari-grad',name:'Стари-Град',open:'dorcol'},
 {file:'savski-venac',name:'Савски-Венац',open:'waterfront'},
 {file:'vracar',name:'Врачар',open:'vracar'},
 {file:'zvezdara',name:'Звездара',open:'zvezdara'},
 {file:'vozdovac',name:'Вождовац',open:'vozdovac'},
 {file:'cukarica',name:'Чукарица',open:'banovo'},
 {file:'palilula',name:'Палилула',open:'palilula'},
 {file:'rakovica',name:'Раковица'}
];
const neighbourhoods=[
 {id:'zemun',name:'Земун',municipality:'Земун',at:[44.845,20.405]},
 {id:'novi',name:'Новый Белград',municipality:'Нови-Београд',at:[44.813,20.407]},
 {id:'dorcol',name:'Дорчол',municipality:'Стари-Град',at:[44.821,20.466]},
 {id:'waterfront',name:'Савамала',municipality:'Савски-Венац',at:[44.808,20.451]},
 {id:'vracar',name:'Врачар',municipality:'Врачар',at:[44.797,20.475]},
 {id:'dedinje',name:'Дединье / Сеняк',municipality:'Савски-Венац',at:[44.775,20.449]},
 {id:'zvezdara',name:'Звездара',municipality:'Звездара',at:[44.800,20.507]},
 {id:'vozdovac',name:'Вождовац',municipality:'Вождовац',at:[44.768,20.482]},
 {id:'banovo',name:'Баново-Брдо',municipality:'Чукарица',at:[44.772,20.414]},
 {id:'palilula',name:'Палилула',municipality:'Палилула',at:[44.816,20.489]}
];
const mapLayers=new Map();
const cityMap=L.map('cityMap',{zoomControl:true,scrollWheelZoom:false,minZoom:10,maxZoom:16}).setView([44.802,20.445],11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
 maxZoom:19,
 attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(cityMap);
L.control.scale({imperial:false,position:'bottomleft'}).addTo(cityMap);

const normalStyle={color:'#8a432e',weight:2,opacity:.9,fillColor:'#c66b49',fillOpacity:.14};
const mutedStyle={color:'#7a817b',weight:1.5,opacity:.75,fillColor:'#c9c5bb',fillOpacity:.08};
function tooltipForMunicipality(item){return `<div class="geo-tip"><b>${item.name}</b><span>официальный муниципалитет</span>${item.open?'<small>Нажмите, чтобы открыть связанную арендную зону</small>':''}</div>`}
Promise.all(municipalityFiles.map(async item=>{
 const response=await fetch(`data/${item.file}.geojson`);
 if(!response.ok)throw new Error(`Не удалось загрузить ${item.file}`);
 const collection=await response.json();
 const feature=item.file==='rakovica'?collection.features.find(f=>f.geometry.type!=='Point'&&f.properties.display_name.startsWith('Градска општина')):collection.features[0];
 const layer=L.geoJSON(feature,{style:item.open?normalStyle:mutedStyle}).addTo(cityMap);
 layer.bindTooltip(tooltipForMunicipality(item),{sticky:true,direction:'top',className:'municipality-tip'});
 if(item.open)layer.on('click',()=>openDistrict(item.open));
 layer.on('mouseover',()=>layer.setStyle({weight:4,fillOpacity:item.open ? .25 : .14}));
 layer.on('mouseout',()=>layer.setStyle(item.open?normalStyle:mutedStyle));
 mapLayers.set(item.file,layer);
 return layer;
})).then(()=>{
 cityMap.setView([44.802,20.445],12);
}).catch(error=>{
 document.querySelector('.map-note').insertAdjacentHTML('afterbegin',`<span class="map-error">${error.message}. Запустите макет через локальный сервер.</span>`);
});

neighbourhoods.forEach(place=>{
 const icon=L.divIcon({className:'place-icon',html:`<span></span><b>${place.name}</b>`,iconSize:null});
 const marker=L.marker(place.at,{icon,keyboard:true,title:place.name}).addTo(cityMap);
 marker.bindTooltip(`<div class="place-tip"><img src="${data[place.id].image}" alt="Архитектура района ${place.name}"><div><b>${place.name}</b><p>${data[place.id].brief}</p><p>${data[place.id].architecture}</p><p>${data[place.id].audience}</p><small>Муниципалитет: ${place.municipality}</small><em>Нажмите для подробностей</em></div></div>`,{direction:'top',offset:[0,-8],className:'neighbourhood-tip'});
 marker.on('click',()=>openDistrict(place.id));
});

document.querySelector('#reset').addEventListener('click',()=>cityMap.setView([44.802,20.445],12));
