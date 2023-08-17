# ToyProject_SuHyun-YeJin
  * 주제 : 부산광역시 음식점 정보제공 서비스
  * 개발기간 : 2023.07.24 ~ 2023.08.17

**주요 기능**
  * 검색 : 원하는 태그(카테고리)를 선택하면 그에 맞는 음식점 정보 제공.
  * 페이징 기능 : Back에서 Fetch한 데이터를 front에서 반응형 조건에 맞게 갯수를 제한하여 화면에 표시.
  * 로그인 : SpringBoot Security JWT 방식.
  * 회원가입 : 다음 우편번호 서비스 API를 사용.
  * 지도 : 카카오 지도 sdk API를 사용.

**주요 로직**
  * List : Back에서 데이터 처리를 한 후 fetch한 데이터를 front에서 화면에 표시.
  * category : front에서 map을 돌려 category를 추가할때마다 업데이트
  * Search : filter를 이용하여 검색.
  * Login : JWT  방식 이용하여 Fornt와 Token을 주고받음.
  * Join : e-mail 및 비밀번호 중복 확인 한 후 DataBase에 저장.(MemberRepo)

**기술 스택**
  * Front : ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  * Back : ![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
  ![SpringBoot](https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)

**구조**
![서비스구조](https://github.com/YeDongVibe/ToyProject_SuHyun-YeJin/assets/129818886/df4f229d-fce1-4924-a335-86cf99d97864)

**23.07.24 토이프로젝트 주제 선정: 부산광역시 음식점 정보제공 서비스**
  * Front-end: 웹 디자인 구상, 프래임 구성
  * Back-end: 공공데이터 csv 다운 및 전처리 후 데이터베이스 1차저장
    * (Used Data) www.data.go.kr
    - 부산관광공사_음식테마거리 음식점기본정보
    - 부산관광공사_음식테마거리 운영정보
    - 부산관광공사_음식테마거리 음식이미지정보

**23.07.25 메인페이지 작성 및 데이터 처리**
  * Front-end: 아이콘 수정, 메인페이지 작성, 버튼 생성 및 다음페이지로의 경로설정
  * Back-end: 데이터 처리 및 검색을 위한 데이터 수정, JSON 파일 생성 Test

**23.07.26 페이지 디자인 및 데이터 REST API 처리**
  * Front-end: FoodMain, FoodList, FoodSearch 페이지 구현 및 디자인
  * Back-end: 데이터 처리 및 REST API 구현 중

**23.07.27 페이지 디자인 및 로그인 관련 처리**
  * Front-end: FoodLogin 및 페이지 구현 및 마무리
  * Back-end: 로그인 데이터 베이스 연동, 로그인 컨트롤러 및 로그인 확인하는 서비스 구현

**23.07.28 반응형 페이지 구현 및 로그인 및 데이터 전송 처리**
  * Front-end: 구현된 페이지를 프레임워크를 사용하여 구현 중
  * Back-end: fetch 할 수 있도록 데이터 Array로 전달 및 프론트 단에서 받을 수 있는지 확인

**23.07.29 반응형 페이지 구현 및 로그인 및 데이터 전송 처리**
  * Front-end: 구현된 페이지 상세 반응형으로 재구성
  * Back-end: 데이터 fetch위한 테스트 및 로그인 페이지 동작 구현준비

**23.07.31 지도 및 로그인 페이지 처리**
  * Front-end: 반응형 구성 연장. 지도 API 화면 표시 및 내 위치 찾기. fetch된 데이터 list 화면 표시
  * Back-end: 로그인 동작 구축 및 연결

**23.08.01 데이터 베이스 재구축, 로그인 처리, 전체 반응형 페이지 구축 및 지도 배치**
  * Front-end: 반응형 구성 중, 지도 API 화면 표시 및 내 위치 찾기 구축 완료
  * Back-end: 데이터베이스 오류 수정, 로그인 페이지 동작 구성(Entity, Repository, Controller 등 구축 중)

**23.08.02**
  * Front-end : 회원가입 페이지 구성 및 주소 API 연결
  * Back-end : 데이터베이스 오류 재수정, 로그인 동작 구현

**23.08.03**
  * Front-end : 전체 페이지 리뉴얼 (디자인 배치 및 코드 정리)
  * Back-end : 로그인 동작 구현

**23.08.04**
  * Front-end : List 페이지 카테고리 추가 및 기능 연동.
  * Back-end : 로그인 동작 구현, User 객체 null 값 오류 수정 중

**23.08.05**
  * Front-end : 페이지 구성 조정 및 제작
  * Back-end : 로그인 동작 구현, User 객체 null 값 오류 수정 중
  
**23.08.07**
  * Front-end : List 페이지 Found 페이지 연동
  * Back-end : 로그인 동작 구현, User 객체 null 값 오류 수정 중

**23.08.08**
  * Front-end : Found 페이지 구성 및 배치
  * Back-end : 로그인 동작 구현, User 객체 null 값 오류 수정 완료 및 jwt토큰 전달 문제 수정 중

**23.08.09**
  * Front-end : List 페이지 재구성
  * Back-end : 로그인 동작 구현, jwt토큰 전달 문제 수정 중

**23.08.10**
  * Front-end : List 페이지 반응형 구축
  * Back-end : 로그인 동작 구현 성공 - 비밀번호 암호화 저장, jwt토큰 전송 성공, front단에서 로그인 후 전송 실패 수정
               회원가입 권한 문제 수정 - 권한 설정 오류로 인해서 발생한 cors문제 해결, 권한 설정이 꼬여 있어서 cors문제가 발생!! 
               
**23.08.11**
  * Front-end : 전체 페이지 마무리
  * Back-end : 로그아웃 동작 구현 - 프론트에서 토큰을 지우는 방식으로 로그아웃 구현, 로그인 페이지 내에서만 동작하는 문제 有

**23.08.12**
  * Front-end : 전체 페이지 반응형 마무리.
  * Back-end : 로그인/로그아웃 마무리.

**23.08.12**
  * 전체 호스팅 중

**23.08.13**
  * 전체 마무리