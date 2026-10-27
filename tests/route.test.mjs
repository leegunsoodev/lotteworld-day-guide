import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolve} from '../data.js';
import {initialState} from '../state.js';
test('층별 묶음과 단 한 번의 야외 방문 뒤 퍼레이드',()=>{
 const route=resolve(initialState());
 const floors=route.map(s=>s.place.floor).filter((f,i,a)=>i===0||f!==a[i-1]);
 assert.deepEqual(floors,['B1','1F','3F','4F','1F','M','1F','B1']);
 assert.equal(route[9].id,'dinner');
 assert.equal(route[10].place.floor,'M');
 assert.equal(route[11].id,'parade');
});

test('같은 구역 대안을 골라도 층 묶음이 유지된다',()=>{
 for(const choices of [{1:'wing',2:'kart',6:'across',7:'flume',10:'stone'},{1:'jungle',2:'carousel',3:'carousel',7:'twosome',10:'fantasy'}]){
  const r=resolve({...initialState(),choices});
  assert.deepEqual(r.map(s=>s.place.floor).filter((f,i,a)=>!i||f!==a[i-1]),['B1','1F','3F','4F','1F','M','1F','B1']);
 }
});
test('이전 저장은 새 번호가 아닌 같은 장소로 복원한다',async()=>{
 const {migrateV2}=await import('../migration.js');
 const s=migrateV2({current:8,done:[0,6],choices:{8:'pharaoh',6:'kart'},indoor:false});
 assert.equal(s.current,6);assert.equal(resolve(s)[6].id,'pharaoh');
 assert.ok(s.done.includes(2));assert.equal(resolve(s)[2].id,'kart');
 const outdoor=migrateV2({current:1,done:[0],choices:{1:'fantasy'},indoor:false});
 assert.equal(outdoor.current,10);assert.equal(resolve(outdoor)[10].id,'fantasy');
});

 test('실내 대안에는 야외 탑승 안내가 남지 않는다',()=>{const s=resolve({...initialState(),indoor:true})[10];assert.equal(s.place.floor,'1F');assert.match(s.hint,/야외 대신/);assert.doesNotMatch(s.hint,/탑승 후/);});
