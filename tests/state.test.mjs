import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialState, advance, previous, restore, choose} from '../state.js';
import {resolve,directions} from '../data.js';
import {steps} from '../data.js';
import {videos} from '../videos.js';
test('추가 기구와 유튜브 직접 영상, 윗층 대체 경로',()=>{
 for(const id of ['dragon','pharaoh','stone','monorail','across','fantasy','horror','wild','jungle','wing','kart'])assert.ok(steps.some(s=>s.options.includes(id)));
 assert.equal(Object.keys(videos).length,16);
 for(const v of Object.values(videos))assert.match(v.url,/^https:\/\/www.youtube.com\/watch\?v=[\w-]{11}$/);
 assert.equal(resolve(choose(initialState(),8,'pharaoh'))[8].place.floor,'4F');
});
test('적당한 스릴 코스와 순한 대안, 예전 강한 기구 선택 복원',()=>{
 assert.equal(resolve(initialState())[1].id,'stone');assert.equal(resolve(initialState())[7].id,'flyventure');
 assert.ok(steps.every(s=>s.options.every(id=>!['atlantis','french','pirate'].includes(id))));
 assert.equal(resolve(choose(initialState(),1,'atlantis'))[1].id,'stone');
 assert.equal(resolve(choose(initialState(),1,'castle'))[1].place.floor,'M');
});
test('완료 후 다음 단계, 이전 이동과 저장 복원',()=>{
 let s=initialState(); s=advance(s,10); assert.equal(s.current,1); assert.deepEqual(s.done,[0]);
 assert.equal(previous(s).current,0); assert.deepEqual(restore(JSON.stringify(s),10),s);
});
test('실내 전환과 퍼레이드 대체가 다음 길 안내에도 반영된다',()=>{
 const s={...initialState(),indoor:true};let list=resolve(s);assert.ok(list.every(x=>x.place.floor!=='M'));
 list=resolve(choose(s,11,'sinbad'));assert.equal(list[11].id,'sinbad');assert.match(directions(list[10].place,list[11].place),/신밧드/);
 const normal=resolve(initialState());assert.match(directions(normal[10].place,normal[11].place),/가든스테이지/);assert.match(directions(normal[13].place,normal[14].place),/B1/);
});
test('대체 선택은 완료 표시를 지우고 손상된 저장값은 복구한다',()=>{
 const s=choose({...initialState(),done:[0,1]},1,'rest'); assert.equal(s.choices[1],'rest'); assert.deepEqual(s.done,[0]);
 assert.deepEqual(restore('bad',10),initialState()); assert.equal(restore('{"current":999}',10).current,9);
 assert.equal(advance({...initialState(),current:9},10).current,9);
});
