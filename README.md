# 2022년 하반기 이마트 사전과제

## 기술 스택 및 라이브러리



| Stack             | Version |
| ----------------- | ------- |
| node              | 16.15.1 |
| typescript        | 4.8.2   |
| react             | 18.2.0  |
| recoil            | 0.7.5   |
| styled-components | 5.3.5   |
| jquery            | 3.6.0   |
| lodash            | 4.17.21 |
| storybook         | 6.5.10  |
| msw               | 0.45.0  |

## 설계

### 디렉토리 구조

<img width="241" alt="image-20220901183815984" src="https://user-images.githubusercontent.com/65025333/187889803-2030ba53-f800-4194-8673-3a265f475fb9.png">

### 디자인 패턴

Atomic Design Pattern과 Presentational & Container Design Pattern을 섞어서 사용하였습니다.

과한 Props Drilling을 방지하기 위해 Depth를 3단계로 제한하였고, 각 컴포넌트 폴더는 비즈니스 로직을 담당하는 index.tsx, 뷰 로직을 담당하는 [컴포넌트이름].tsx, styled-components가 담겨있는 styles.ts를 가지고 있습니다.

## 구현 사항

### 요구 사항

**API 통신을 사용하여 JSON 데이터를 가져와서 화면을 구성해주세요.**

- 배포 환경을 고려해 msw로 api 테스팅을 진행하였습니다.
- 메뉴 목록 api와 상품 목록 및 페이지네이션 api를 만들었습니다.

**스크롤을 이용한 리스트 페이징 처리를 해주세요. (10개씩)**

- Intersection Observer API 를 사용해 무한 스크롤을 구현하였습니다.
- lodash의 throttle 메서드를 사용해 스크롤 이벤트 시 성능을 높였습니다.

**메뉴 좌우 스크롤, 메뉴 클릭 시 데이터 필터링, 클릭된 메뉴 on/off 표시가 될 수 있도록 처리해주세요.**

- 메뉴의 styled-components 에 scroll 속성을 통해 좌우 스크롤을 구현하였습니다.
- 선택된 메뉴를 recoil atom 을 사용해 전역적으로 관리합니다.
- 선택된 메뉴가 변경되거나, 사용자가 보고 있는 화면에 상품 목록의 마지막 컴포넌트가 노출될 경우, 해당 상품 목록 및 페이지네이션 api 를 요청합니다.
- selected 속성의 유무를 통해 클릭된 메뉴 on/off 를 표시합니다.

**스크롤 다운 메뉴 숨김 / 스크롤 업 메뉴를 표시해주세요.**

- 스크롤 액션 시 스크롤 다운/업을 추적합니다.
- scrollTop 속성이 본래의 상단 메뉴바 위치보다 클 경우(내 화면이 상단부가 본래 상단 메뉴바 위치보다 아래일 경우), 스크롤 다운/업 여부에 따라 styled-components의 속성을 다르게 적용합니다.

**화면 해상도에 따라 리스트 배열을 변경해주세요. (1열 → 2열, 2열 → 3열)**

- 상품 컴포넌트에 `float: left` 속성을 주고, `media` 속성을 사용해 768px 미만일 때 1열, 768px 이상 1280px 미만일 때 2열, 1280px 이상일 경우 3열의 상품 목록을 보여줍니다.

### 추가 사항

Typescript

- 코드의 유지보수성과 가독성을 높이기 위해 JS대신 TS를 사용하였습니다.

Storybook

- Storybook을 통해 Atom과 Block의 컴포넌트 테스트를 진행하였습니다.

Recoil

- 선택된 메뉴 상태의 과한 Props Drilling을 방지하기 위해 recoil의 atom을 사용해 전역적으로 관리하였습니다.

브랜치 전략

- GitHub Flow를 적용하여 브랜치를 관리하였고, 브랜치 이름은 `[목적]/Issue-[이슈 발행 시 숫자]` 를 적용하였습니다.

커밋 컨벤션

- Udacity의 커밋 컨벤션을 참고해 적용하였습니다.
