//---это список названий типов мест
export type PlaceType = 'Cafe' | 'Restaurant' | 'Park' | 'Museum' | 'Store' | 'Monument';
//---это интерфейс хотя скорее класс для наших мест, другие файлы будет его наследовать и использовать поэтому export
export interface Place {
  id: number;
  name: string;
  type: PlaceType;
  raiting: number;
  adress: string;
  description: string;
  image: string;
}

//--это типо мок данные для старта 
const placesInter: Place[] = [
  { id: 1,  name: 'Cafe1',       type: 'Cafe',       raiting: 3.5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5HFfaPPzfN7Y6IKF-8p2IwU7pbpLh51Ycm8PIetLzcdNgOIcpl1_mFs&s=10' },
  { id: 2,  name: 'Cafe2',       type: 'Cafe',       raiting: 4.9, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVvLCpL-kuaLHX5-X9ZKMwFdkYlCUTN9ul68Q-Ld7B9SCs74OquqVIl97G5vScTbUmx1nYADSbfp-t4yfLkw5SdExzqWspx3gFuERhZThLG9TKjpuHB6vbVhZ4k2ZkahVE6dJKYg?key=rbhCTupUjh-YGxlYv3wsdT3k' },
  { id: 3,  name: 'Cafe3',       type: 'Cafe',       raiting: 2.3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://dayting.com.ua/wp-content/uploads/2021/07/BB.jpeg' },
  { id: 4,  name: 'Cafe4',       type: 'Cafe',       raiting: 4.3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://xroom.com.ua/uploads/restdp/1.png' },
  { id: 5,  name: 'Cafe5',       type: 'Cafe',       raiting: 4.2, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRiKvDzTGJXNml_k78Upng2ZkLUOfftpL_Vp8D6968RCetYLmofNXfzK7&s=10' },


  { id: 6,  name: 'Restaurant1', type: 'Restaurant', raiting: 2.7, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://sunray.ua/wp-content/uploads/2026/04/spa-151.jpg.webp' },
  { id: 7,  name: 'Restaurant2', type: 'Restaurant', raiting: 4.5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://mesta.com.ua/wp-content/uploads/2022/05/gde-vse-fasad.jpg' },
  { id: 8,  name: 'Restaurant3', type: 'Restaurant', raiting: 4.1, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZV9ooH1ZP_h1aBLzXvEpGiFh-VRatGHC4O27N8_H2OsmS_ppa9RQywkA&s=10' },
  { id: 9,  name: 'Restaurant4', type: 'Restaurant', raiting: 4, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: "https://dayting.com.ua/wp-content/uploads/2018/07/Reportyor'.jpg" },
  { id: 10, name: 'Restaurant5', type: 'Restaurant', raiting: 5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeba-K6c-V_USe4uI0IQuLnNpN1KV0KiXpMr63Ov18jTgsCdpZbQ8wXE6oHyIuhxpBXuVEtkEKQsiB6KuWKp3bdCb8HjGMXEoxwA-3rOG8Gnj5kNPFM8LfeFFbLko0jPx5r1mMFzw?key=rbhCTupUjh-YGxlYv3wsdT3k' },


  { id: 11, name: 'Park1',       type: 'Park',       raiting: 4.3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://vgorode.ua/img/article/3899/38_main-v1577255799.jpg' },
  { id: 12, name: 'Park2',       type: 'Park',       raiting: 4.8, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgECyrA-wtb8SNfNsUJZf4T-4aGBbg5eqIV4RKaFbqgIrDpNyCGYqOqnE&s=10' },
  { id: 13, name: 'Park3',       type: 'Park',       raiting: 4.2, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://gorod.dp.ua/pic/news/newsimages/1120/181366_b.jpg' },
  { id: 14, name: 'Park4',       type: 'Park',       raiting: 3.4, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP-iPSd5-_eR05t1Vfl3QneqVhZ0mx7lf3j-nwPFt4E2ljxjQnTpfqAus&s=10' },
  { id: 15, name: 'Park5',       type: 'Park',       raiting: 2.3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCofXtwj603WmyqEv4gLJgjhI9cKOrWGhJsDoLfTRkJdVl5XAWgehxJBHB&s=10' },


  { id: 16, name: 'Museum1',     type: 'Museum',     raiting: 2.9, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Istorichnii_myzei_Dnipropetrovs%27ka.JPG?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original' },
  { id: 17, name: 'Museum2',     type: 'Museum',     raiting: 3.5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://cdn.informator.ua/@prod/media/dnipro/2022/08/07/62ef7d457f0ff.jpg' },
  { id: 18, name: 'Museum3',     type: 'Museum',     raiting: 3.6, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://ua.igotoworld.com/frontend/webcontent/websites/1/images/attractions/histmuseum/4384_800x600_mus3.jpg' },
  { id: 19, name: 'Museum4',     type: 'Museum',     raiting: 4.1, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://mis.dp.ua/wp-content/uploads/2025/01/muzej.jpg' },
  { id: 20, name: 'Museum5',     type: 'Museum',     raiting: 3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://travels.in.ua/api/Photo/PhotoStreamCPOI/37989' },


  { id: 21, name: 'Store1',      type: 'Store',      raiting: 4.3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiw9KUUJ4Dp4Zv-TYAN_38oxqJdJ0igR3kb7xifzEBYdO_GeTqDRpHDli&s=10' },
  { id: 22, name: 'Store2',      type: 'Store',      raiting: 3.2, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://knin.ua/uploads/thumb/31123-4-img_6850.webp' },
  { id: 23, name: 'Store3',      type: 'Store',      raiting: 4.2, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://knin.ua/uploads/thumb/31269-4-1.webp' },
  { id: 24, name: 'Store4',      type: 'Store',      raiting: 2.5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://dnipro.karavan.com.ua/wp-content/themes/theme-sp/img/page-ct.jpg' },
  { id: 25, name: 'Store5',      type: 'Store',      raiting: 4.1, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ00OgCxVio5ZP2mK3hpzrjieQPgRK7vI0exJmNnQ_Jw&s=10' },


  { id: 26, name: 'Monument1',   type: 'Monument',   raiting: 3.2, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://mbfs.com.ua/wp-content/uploads/2021/09/screenshot_408.png' },
  { id: 27, name: 'Monument2',   type: 'Monument',   raiting: 4.1, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJVy-SUfFSMClQLvoJ212gjObQq3vEhNdF6a6Tdj2vQX8Q4q9O_ykOQQ&s=10' },
  { id: 28, name: 'Monument3',   type: 'Monument',   raiting: 5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://dp.vgorode.ua/img/forall/u/1284/26/52_full.jpg' },
  { id: 29, name: 'Monument4',   type: 'Monument',   raiting: 3, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://vgorode.ua/img/article/11110/50_main-v1586355959.jpg' },
  { id: 30, name: 'Monument5',   type: 'Monument',   raiting: 4.5, adress: 'Somewhere in Dnipro...', description: 'Empty description for mockData....', image: 'https://vesti.dp.ua/wp-content/uploads/2018/07/dn.jpg' },
];

export default placesInter;