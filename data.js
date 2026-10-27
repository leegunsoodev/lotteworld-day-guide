export const links={map:'https://adventure.lotteworld.com/usage-guide/service/guide-map',hours:'https://adventure.lotteworld.com/usage-guide/service/closed',closed:'https://adventure.lotteworld.com/usage-guide/service/closed',shows:'https://adventure.lotteworld.com/enjoy/performance/list',rides:'https://adventure.lotteworld.com/enjoy/attrctn/list'};
// 위치와 층은 2026-09 공식 가이드맵을 근거로 한다. 실제 보행 좌표는 저장하지 않는다.
export const places={
dragon:{"name":"드래곤 와일드슈팅","floor":"1F","note":"회전목마 뒤편에서 드래곤을 맞히며 점수를 겨뤄요. 네 명이 점수 대결하기 좋은 선택!","limit":"친구끼리 탑승 110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=4731"},
pharaoh:{"name":"파라오의 분노","floor":"4F","note":"보물을 찾아 어두운 유적을 탐험해요. 차량 움직임과 갑작스러운 장면이 있어요. 무서운 연출이 싫으면 이 기구는 건너뛰어요.","limit":"110~195cm","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=2444"},
stone:{"name":"스톤익스프레스","floor":"M","note":"메이플아일랜드에서 즐기는 롤러코스터예요. 움직임이 괜찮을지 영상을 먼저 보고 네 명이 함께 골라요.","limit":"110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=6313"},
monorail:{"name":"월드모노레일","floor":"3F","note":"기차에 앉아 풍경을 보며 쉬어가요. 3F 동굴구역에서 타요. 실내·실외 운행 구간은 당일 확인해요.","limit":"공식 안내: 전체 이용 가능 · 현장 탑승 조건 확인","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=1201"},
across:{"name":"어크로스다크","floor":"4F","note":"우주로 떠나는 영상 모험이에요. 어둠·화면 움직임이 부담되면 이 기구는 건너뛰어요. 상영 내용은 영상과 다를 수 있어요.","limit":"110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=5574"},
fantasy:{"name":"환타지드림","floor":"M","note":"일반 버전의 동화 속 기차 여행이에요. 당일 일반 버전인지 확인해요. 공포 버전이면 이 코스는 건너뛰어요.","limit":"친구끼리 탑승 110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=1209"},
horror:{"name":"호러환타지드림","floor":"M","note":"공포 연출이 있는 별도 선택이에요. 네 명 모두 만 13세 이상이고 공포 체험을 원할 때만 골라요. 당일 운영·연령 조건을 확인해요.","limit":"만 13세 이상 · 110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=6386"},
wild:{"name":"와일드 밸리","floor":"B1","note":"물살을 헤치는 추격전 영상 체험이에요. 흔들림이나 멀미가 부담되면 이 기구는 건너뛰어요.","limit":"110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=5092"},
jungle:{"name":"와일드 정글","floor":"B1","note":"고대 유적을 찾아 떠나는 영상 모험이에요. 와일드 밸리·윙과 같은 B1에서 취향에 맞게 골라요.","limit":"110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=5093"},
wing:{"name":"와일드 윙","floor":"B1","note":"바람을 가르며 나는 영상 체험이에요. 높이감·화면 움직임이 부담되면 다른 기구를 골라요.","limit":"110cm 이상","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=5091"},
kart:{"name":"카트라이더레이싱월드","floor":"1F","note":"로티스엠포리움 오른쪽에서 게임 속 카트를 직접 타봐요. 키 조건을 확인하고 현장 운전 안내를 따라요.","limit":"130~180cm","url":"https://adventure.lotteworld.com/enjoy/attrctn/detail?shopSysCd=5962"},
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
// 같은 구역을 묶고, 야외는 저녁에 한 번만 방문한다. 시간은 예약이 아닌 권장 시간대다.
export const steps=[
 {time:'09:20~09:30',period:'morning',required:true,options:['gate']},
 {time:'개장~10:40 · B1에서 1개만',period:'morning',options:['wild','jungle','wing'],hint:'입장 후 B1 와일드 구역부터! 대기가 길면 건너뛰고 1F로 올라가요.'},
 {time:'10:40~11:20 · 1F 동쪽 구역',period:'morning',options:['dragon','kart','carousel'],hint:'드래곤·카트라이더·회전목마 중 하나를 골라요. 이어서 플라이벤처로 가요.'},
 {time:'11:20~12:00 · 대기가 길면 생략',period:'morning',options:['flyventure','carousel'],hint:'드래곤과 가까운 플라이벤처를 이어서 타요. 점심을 늦추지 않아요.'},
 {time:'12:00~12:50',period:'afternoon',required:true,options:['school']},
 {time:'12:50~13:30 · 윗층 코스 시작',period:'afternoon',options:['monorail'],hint:'3F 동굴구역 모노레일 → 4F 순서예요. 피곤하거나 대기가 길면 윗층 두 코스를 함께 건너뛰고 코스 8로 가요.'},
 {time:'13:30~14:30 · 4F에서 1개만',period:'afternoon',options:['pharaoh','across'],hint:'파라오 또는 어크로스다크 중 하나만! 4F를 마치면 1F로 내려가 남은 실내 일정을 이어가요.'},
 {time:'14:30~15:20 · 1F 서쪽 구역',period:'afternoon',options:['sinbad','flume','twosome'],hint:'신밧드 또는 후룸 중 하나를 골라요. 무섭거나 대기가 길면 가까운 투썸에서 쉬어요.'},
 {time:'15:20~16:30 · 간식·충분히 쉬기',period:'afternoon',required:true,options:['twosome'],hint:'점심 이후 밀린 일정은 이 시간 안에서 조정해요. 새 구역으로 왕복하지 말고 쉬어가요.'},
 {time:'16:30~17:30 · 공연 시간에 맞춰 조정',period:'evening',required:true,options:['dinner']},
 {time:'저녁 후 · 야외 택1 + 캐슬 사진',period:'evening',options:['castle','stone','fantasy','horror','comet'],indoor:'meeting',hint:'야경은 매직캐슬 앞에서! 여유가 있으면 야외 기구 하나를 골라요. 탑승 후 캐슬 앞으로 돌아와 사진을 찍고 실내로 복귀해요. 공연 20~30분 전 도착이 어려우면 기구·사진을 생략해요.'},
 {time:'시작 20~30분 전 도착 · 시간 당일 확인',period:'evening',required:true,options:['parade','meeting','sinbad']},
 {time:'공연 후 · 여유가 있을 때만',period:'evening',options:['gift','meeting'],hint:'귀가 방향에서 기념품만 가볍게 봐요. 마지막 기구 때문에 먼 구역으로 돌아가지 않아요.'},
 {time:'보호자와 약속한 시간',period:'evening',required:true,options:['final']},
 {time:'모두 만난 뒤 함께 귀가',period:'evening',required:true,options:['exit']}
];
export function resolve(s){return steps.map((step,i)=>{const id=s.indoor&&step.indoor?step.indoor:step.options.includes(s.choices[i])?s.choices[i]:step.options[0];return {...step,hint:s.indoor&&step.indoor?'야외 대신 1F에서 사진을 찍고 쉬어요. 공연 시작 20~30분 전 가든스테이지 주변으로 가요.':step.hint,id,place:places[id]};});}
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
