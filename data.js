export const links={map:'https://adventure.lotteworld.com/usage-guide/service/guide-map',hours:'https://adventure.lotteworld.com/usage-guide/service/closed',closed:'https://adventure.lotteworld.com/usage-guide/service/closed',shows:'https://adventure.lotteworld.com/enjoy/performance/list',rides:'https://adventure.lotteworld.com/enjoy/attrctn/list'};
// 위치와 층은 2026-09 공식 가이드맵을 근거로 한다. 실제 보행 좌표는 저장하지 않는다.
export const places={
 flyventure:{name:'플라이벤처',floor:'1F',note:'화면 속 하늘을 나는 듯한 비행 체험이에요. 높이감·화면 움직임이 부담되거나 멀미가 나면 회전목마로 바꿔요. 친구끼리 탈 때는 모두 키 조건을 확인해요.',limit:'친구끼리 탑승 140~195cm · 체중 136kg 이하',url:'https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=5360'},
 gate:{name:'정문 · 입장 준비',floor:'B1',note:'출발점으로 가정한 정문이에요. 표를 준비하고 화장실을 다녀와요. 공식 지도상 정문 근처 잇츠월드 옆에 화장실이 있어요.'},
 atlantis:{name:'아트란티스',floor:'M',note:'매직캐슬 뒤쪽에 있는 선택 기구. 인기 기구 한 개만 타도 충분해요.',limit:'135~190cm'},
 comet:{name:'혜성특급',floor:'M',note:'어두운 실내에서 좌석이 회전하는 롤러코스터예요. 이번 코스 중 스릴이 센 편! 네 명 모두 괜찮을 때만 타고, 부담되면 매직캐슬 사진으로 바꿔요.',limit:'120cm 이상'},
 carousel:{name:'회전목마',floor:'1F',note:'스릴 기구가 부담스러우면 함께 고를 수 있는 실내 기구예요. 대기가 길면 사진·휴식으로 바꿔요.',limit:'혼자 탑승 100cm 이상'},
 gift:{name:'로티스엠포리움 · 기념품',floor:'1F',note:'공식 1F 지도에 표시된 기념품점이에요. 약속 시간이 가까우면 쇼핑은 생략해요. 당일 영업을 확인해요.'},
 castle:{name:'매직캐슬 앞 · 사진',floor:'M',note:'매직캐슬 앞에서 함께 사진을 찍어요. 보행 통로를 비워 주세요.'},
 school:{name:'스쿨푸드 · 점심',floor:'1F',note:'신밧드의 모험 가까이에 있는 음식점. 당일 영업·메뉴와 빈자리를 확인해요.'},
 sinbad:{name:'신밧드의 모험',floor:'1F',note:'배를 타고 어두운 모험 속으로! 어둠과 내려가는 구간이 있어요. 가볍게 긴장하며 즐기고 싶을 때 골라요.',limit:'혼자 탑승 110cm 이상'},
 pirate:{name:'스페인해적선',floor:'1F',note:'신밧드와 같은 1층 구역. 무서우면 사진·휴식으로 바꿔요.',limit:'혼자 탑승 110cm 이상'},
 flume:{name:'후룸라이드',floor:'1F',note:'배를 타고 가다가 폭포를 내려가요. 낙하가 부담스럽거나 젖기 싫으면 회전목마로 바꿔요.',limit:'혼자 탑승 110cm 이상'},
 french:{name:'후렌치레볼루션',floor:'2F',note:'선택하면 2층 왕복이 생겨요. 1F 어린이범퍼카 쪽 계단·에스컬레이터로 2F 퀴즈노스 쪽에 올라가요.',limit:'120cm 이상'},
 twosome:{name:'투썸플레이스 · 쉬기',floor:'1F',note:'카페 아리아나(투썸플레이스), 팝콘팩토리 옆이에요. 자리와 영업을 확인해요. 충전은 보조배터리로! 콘센트 이용은 확인되지 않았어요.'},
 picnic:{name:'피크닉 장소 · 쉬기',floor:'2F',note:'공식 지도에 회전바구니 옆에서 2층으로 이동하는 지점이 표시돼 있어요. 개방 여부는 현장에서 확인해요.'},
 meeting:{name:'만남의 광장 · 사진',floor:'1F',note:'공식 지도에 표시된 1층 만남의 광장. 함께 사진을 찍거나 잠깐 쉬어요. 통행로는 비워요.'},
 dinner:{name:'스쿨푸드 · 저녁',floor:'1F',note:'1층에서 저녁을 먹고 퍼레이드 시간을 확인해요. 영업하지 않으면 직원에게 같은 층 음식점을 물어봐요.'},
 parade:{name:'야간 퍼레이드',floor:'1F',note:'공식 공연 일정과 현장 안내를 확인해요. 시작 20~30분 전 도착을 권장해요. 야경·마지막 기구보다 퍼레이드를 먼저 챙겨요. 통행 제한 중에는 직원 안내를 따라요.'},
 final:{name:'만남의 광장 · 귀가 준비',floor:'1F',note:'보호자도 입장한 경우의 만남 후보예요. 장소·시간을 미리 합의해요. 보호자가 입장하지 않으면 정문 바깥의 정확한 지점을 따로 약속해요.'},
 exit:{name:'정문 방향 출구 · 귀가',floor:'B1',note:'보호자와 만난 뒤 함께 귀가해요. 현장 출구 안내와 직원 지시를 따라요. 재입장 조건은 따로 확인해야 해요.'}
};
export const steps=[
 {time:'09:20~09:30',period:'morning',required:true,options:['gate']},
 {time:'개장~11:30',period:'morning',options:['comet','castle'],indoor:'meeting'},
 {time:'11:30~12:20',period:'afternoon',required:true,options:['school']},
 {time:'12:20~13:20',period:'afternoon',options:['sinbad','meeting']},
 {time:'13:20~14:00',period:'afternoon',options:['flume','carousel','meeting']},
 {time:'14:00~14:40',period:'afternoon',required:true,options:['twosome','meeting']},
 {time:'14:40~15:20',period:'afternoon',options:['carousel','meeting']},
 {time:'15:20~17:00 · 대기에 맞춰 조정',period:'afternoon',options:['flyventure','carousel','meeting']},
 {time:'17:00~18:00 · 공연에 맞춰 조정',period:'evening',required:true,options:['dinner']},
 {time:'저녁 후 · 공연과 겹치면 생략',period:'evening',options:['castle','meeting'],indoor:'meeting'},
 {time:'시작 20~30분 전 도착 · 시간 당일 확인',period:'evening',required:true,options:['parade','meeting','sinbad']},
 {time:'공연 후 · 여유가 있을 때만',period:'evening',options:['meeting','carousel','gift']},
 {time:'보호자와 약속한 시간',period:'evening',required:true,options:['final']},
 {time:'모두 만난 뒤 함께 귀가',period:'evening',required:true,options:['exit']}
];
export function resolve(s){return steps.map((step,i)=>{const id=s.indoor&&step.indoor?step.indoor:step.options.includes(s.choices[i])?s.choices[i]:step.options[0];return {...step,id,place:places[id]};});}
export function directions(a,b){
 if(b?.name==='후렌치레볼루션')return '1F 어린이범퍼카 쪽 층 이동 지점 → 2F 퀴즈노스 쪽 → 후렌치레볼루션. 계단·에스컬레이터를 이용해요.';
 if(a.name==='후렌치레볼루션'&&b?.floor==='1F')return `2F 퀴즈노스 쪽 계단·에스컬레이터 → 1F 어린이범퍼카 쪽 → ${b.name}. 현장 안내를 따라가요.`;
 if(b?.name==='야간 퍼레이드')return `${a.floor==='M'?'매직캐슬 앞 → 연결 다리 → 어드벤처 2F → 신밧드 쪽 계단·에스컬레이터 → 1F. ':a.floor!=='1F'?a.floor+'에서 1F 이동 지점을 직원에게 확인해요. ':''}1F 가든스테이지 주변에서 직원에게 오늘 퍼레이드 관람 구역을 물어봐요. 지도 핀은 집결 랜드마크이며 관람석이 아니에요.`;
 if(a.name==='야간 퍼레이드')return `공연 후 통행이 풀리면 1F 가든스테이지 주변 → ${b?.name||'만남 장소'}. 통제선과 직원 안내를 따르고, 최종적으로 만남의 광장에서 모여 B1 정문 방향 출구로 함께 가요. 정확한 1F→B1 승강 지점은 직원에게 확인해요.`;
 if(!b)return '오늘 코스 끝! 네 명 모두 함께 귀가해요.';
 if(a.floor==='M'&&b.floor!=='M')return `매직캐슬 앞 연결 다리 → 어드벤처 2F → ${b.floor}. 1F는 신밧드 쪽 계단·에스컬레이터 연결을 확인해요. ${b.name}의 세부 입구 방향은 공식 지도·직원에게 확인해요.`;
 if(a.floor!=='M'&&b.floor==='M')return `${a.floor} → 어드벤처 2F → 연결 다리 → 매직캐슬 앞. 1F 신밧드 쪽에 매직아일랜드행 계단·에스컬레이터가 표시돼 있어요. ${a.floor==='B1'?'정문에서 1F로 가는 정확한 승강 지점은 직원에게 확인해요. ':''}${b.name} 입구는 공식 지도에서 확인해요.`;
 if(b.name.includes('피크닉'))return `${a.floor} → 1F 회전바구니 옆 → 2F 피크닉 장소. 지도에 표시된 층 이동 지점을 현장에서 확인해요.`;
 if(a.name.includes('피크닉'))return `피크닉 장소 2F → 회전바구니 쪽 1F 연결 지점 → ${b.name}. 현장 안내를 따라요.`;
 if(a.floor!==b.floor)return `${a.floor} → ${b.floor} · ${b.name}. 계단·에스컬레이터 위치가 헷갈리면 직원에게 물어봐요.`;
 if(a.name===b.name)return `같은 장소예요. ${b.name}에서 다음 활동을 해요.`;
 return `${a.floor}에서 ${b.name}로 이동해요. 점선은 이동 방향 안내예요. 실제 보행로·입구는 공식 지도와 현장 안내를 확인해요.`;
}
