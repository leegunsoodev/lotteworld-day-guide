// 같은 지도 DOM을 옮겨 확대 상태·이벤트·층 선택을 중복 없이 유지한다.
export function setupMapFullscreen(onResize){
 const section=document.getElementById('map');
 const open=document.createElement('button');open.id='open-map-fullscreen';open.className='button primary';open.textContent='⛶ 지도 전체 화면 보기';open.setAttribute('aria-haspopup','dialog');
 section.querySelector('.section-top').after(open);
 const dialog=document.createElement('dialog');dialog.id='map-fullscreen';dialog.setAttribute('aria-labelledby','map-fullscreen-title');
 dialog.innerHTML='<div class="fullscreen-header"><h2 id="map-fullscreen-title">코스 지도</h2><button id="close-map-fullscreen" autofocus>✕ 닫기</button></div><div class="fullscreen-map-body"></div>';
 document.body.append(dialog);
 const host=dialog.querySelector('.fullscreen-map-body');
 const nodes=['#periods','label[for="floor"]','#floor','.legend','#map-route','#map-wrap','.map-controls'].map(q=>section.querySelector(q));
 const slots=nodes.map(n=>{const marker=document.createComment('map-home');n.before(marker);return marker;});
 let scrollY=0,bodyStyle='';
 open.onclick=()=>{scrollY=window.scrollY;bodyStyle=document.body.style.cssText;nodes.forEach(n=>host.append(n));dialog.showModal();document.body.style.position='fixed';document.body.style.top=`-${scrollY}px`;document.body.style.width='100%';requestAnimationFrame(onResize);};
 dialog.querySelector('button').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>{nodes.forEach((n,i)=>slots[i].after(n));document.body.style.cssText=bodyStyle;window.scrollTo({top:scrollY,behavior:'instant'});open.focus({preventScroll:true});requestAnimationFrame(onResize);});
 window.addEventListener('resize',()=>{if(dialog.open)requestAnimationFrame(onResize);});
}
