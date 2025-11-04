백엔드 레포지토리

# 🧱 프로젝트 개요

이 저장소는 콘솔 기반 Java 로또 프로그램을
Spring Boot 기반 RESTful API 서버로 리팩토링한 프로젝트입니다.
기존 콘솔 입출력을 웹 요청과 JSON 응답으로 전환하여,
프론트엔드(React, Vue 등)와의 통신이 가능한 형태로 구현하는 것을 목표로 합니다.

# 🎯 전환 목표
| 기존 구조 | 변경 후 구조 | 설명 |
|------------|--------------|------|
| InputView / OutputView | Controller + JSON Response | 콘솔 입출력 대신 HTTP 요청/응답 사용 |
| LottoController | REST Controller | `/api/lotto` 등의 endpoint 제공 |
| Application.java | `@SpringBootApplication` 클래스 | Spring Boot 실행 진입점 |
| Service | 새로 추가 | 비즈니스 로직을 담당하도록 분리 |