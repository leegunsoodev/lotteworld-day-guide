// 상태는 기기 내부에만 저장한다. 손상되거나 이전 버전인 값도 안전하게 복구한다.
export const initialState = () => ({current:0,done:[],choices:{},indoor:false});
export function restore(raw,count){
 try {const v=JSON.parse(raw);return {current:Number.isInteger(v.current)?Math.max(0,Math.min(count-1,v.current)):0,done:Array.isArray(v.done)?[...new Set(v.done.filter(n=>Number.isInteger(n)&&n>=0&&n<count))]:[],choices:v.choices&&typeof v.choices==='object'&&!Array.isArray(v.choices)?v.choices:{},indoor:v.indoor===true};}catch{return initialState();}
}
export const advance=(s,count)=>({...s,current:Math.min(count-1,s.current+1),done:[...new Set([...s.done,s.current])]});
export const previous=s=>({...s,current:Math.max(0,s.current-1)});
export const choose=(s,step,id)=>({...s,choices:{...s.choices,[step]:id},done:s.done.filter(n=>n!==step)});
