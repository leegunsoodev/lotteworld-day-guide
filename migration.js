import {steps} from './data.js';
// v2는 같은 장소가 여러 슬롯에 있었다. 현재 단계의 선택을 마지막에 반영한다.
const defaults=['gate','stone','school','sinbad','flume','twosome','dragon','flyventure','monorail','dinner','castle','parade','meeting','final','exit'];
const fallback=[0,10,4,7,7,8,2,3,5,9,10,11,12,13,14];
export function migrateV2(old){
 const targets=defaults.map((id,i)=>{
  id=old.choices[i]||id;
  if(steps[fallback[i]].options.includes(id))return {slot:fallback[i],id};
  const slot=steps.findIndex(s=>s.options.includes(id));
  return slot<0?{slot:fallback[i],id:steps[fallback[i]].options[0]}:{slot,id};
 });
 const choices={};
 const order=defaults.map((_,i)=>i).filter(i=>i!==old.current).concat(old.current);
 for(const i of order){if(old.choices[i]||old.done.includes(i)||i===old.current){const t=targets[i];choices[t.slot]=t.id;}}
 const done=[...new Set(old.done.filter(i=>targets[i].id===(choices[targets[i].slot]||steps[targets[i].slot].options[0])).map(i=>targets[i].slot))];
 return {current:targets[old.current].slot,done,choices,indoor:old.indoor};
}
