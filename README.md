# 롯데월드 하루 코스

초6 친구 네 명을 위한 한국어 모바일 일정·지도 안내. 로그인/앱 설치/GPS/서버 없이 이용한다.

- 사이트: https://leegunsoodev.github.io/lotteworld-day-guide/
- 공식 지도 배경 + 별도 코스 번호 / 시간·층별 전환 / 두 손가락 확대와 드래그
- 현재 단계·완료·대안 선택은 localStorage에 기기별 저장
- 서비스 워커로 일정과 지도 오프라인 열기 (최초 온라인 로드 완료 필요)
- 야간 퍼레이드 시간은 확정하지 않으며 공식 공연 링크 제공

## 실행 및 검증

Node.js 20 이상에서 `npm start` 후 http://127.0.0.1:4173/lotteworld-day-guide/ 접속.
상태 테스트: `npm test`.
브라우저 테스트: `npm install --no-save playwright` 후 `npx playwright install chromium`, `node tests/browser.cjs`.
설치된 Edge를 쓰려면 PowerShell에서 `$env:BROWSER_CHANNEL='msedge'` 설정.
공개 사이트 검증은 `$env:QA_URL='https://leegunsoodev.github.io/lotteworld-day-guide/'` 설정 후 동일 테스트.
PNG 미리보기는 테스트 시 갱신된다. 카카오톡 실기기는 별도 검증해야 한다.

## 일정·경로 수정

- `data.js`: `places` 시설 정보, `steps` 권장 시간/선택 코스, `directions` 층별 이동 설명.
- `map.js`: 공식 지도 도판 크롭 기준의 시설 대표 좌표, 코스 라벨, 연결 표시. 입구·대기열·관람석 좌표가 아니다.
- `maps/`: 첨부 공식 PDF에서 변환한 층별 WebP. 좌표를 바꿀 때 반드시 공식 도판과 대조한다.
- `app.js`: 일정과 지도는 같은 `resolve(state)` 결과를 사용해 대체 코스와 다음 이동이 일치한다.
- `state.js`: 상태 전이/복원. 저장 키는 `lotte-day-v1`.
- 해시 직접 링크: `#map`, `#schedule`, `#ready`, `#step-11`(야간 퍼레이드).
- `index.html`의 OG 절대 URL은 저장소 주소가 바뀌면 함께 수정한다.
- 변경 배포 시 `sw.js`의 캐시 버전도 올린다. 공식 운영 정보는 캐시하지 않는다.

## 배포

전용 공개 저장소의 `main` 루트에서 GitHub Pages 배포. `.nojekyll`로 정적 파일을 그대로 제공한다.
`git add` → `git commit` → `git push` 후 Pages build 완료와 실제 HTTP 접근을 확인한다.
CSS/JS/지도/SW 경로는 상대경로이므로 저장소 하위 URL에서 동작한다. OG만 절대경로다.

## 지도 출처와 확인 범위

2026-10-27 [공식 가이드맵](https://adventure.lotteworld.com/usage-guide/service/guide-map), 현재 배포되는 2026-09-29 국문 첨부 PDF를 확인했다. 사용자가 제공한 `2026 가이드맵_국문_FS2.pdf`와 해시 일치.
지도 저작권은 롯데월드에 있으며 사용자가 공개 재게시 허가 보유를 확인해 지도 도판을 사용했다. 허가 확인은 사용자 진술에 따른 것이며 별도 허가 문서 검증은 하지 않았다. 이 저장소가 원본 지도에 새로운 재사용 라이선스를 부여하지 않는다.

시설 위치·층수·주요 연결 지점은 공식 지도와 대조했다. 세부 보행 꺾임, B1↔1F 대응 승강 지점, 후렌치의 1F 대응 승강 지점, 퍼레이드 진행 방향·관람석·통제 구간은 확정하지 않았다. 미확인 구간은 점선 ‘이동 방향 안내’다. 소요시간/대기시간을 추정하지 않는다.

관람 집결 랜드마크는 1F 가든스테이지 주변이며 확정 관람석이 아니다. 당일 직원에게 관람 구역을 확인한다. 실내 만남의 광장은 입장한 보호자용 후보이며 미입장 보호자는 정문 바깥 구체적 장소를 별도로 약속한다.

자세한 출처/대조 결과: [research.md](research.md). 검증: [verification.md](verification.md). 오류/수정 기록: [error.md](error.md).

공개 사이트에는 아동 이름·연락처·방문 날짜·API 키·인증 토큰을 포함하지 않는다.

추가 조사: 실제 롯데월드 1.1.9 XAPK를 REA 정적 분석해 신밧드·후렌치 부근 층간 연결을 교차 확인했다. 후렌치 선택 시 1F 어린이범퍼카 쪽↔2F 퀴즈노스 쪽을 랜드마크로 안내한다. 앱 데이터는 구식 명칭도 있어 최신 PDF를 우선한다. 자세한 근거와 검증 한계는 research.md에 기록했다.
