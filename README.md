![배너](https://user-images.githubusercontent.com/54921653/113668850-d16e1480-96ed-11eb-95a4-e3345349aaa1.jpg)

기존의 웹 애플리케이션으로 개발한 실시간 날씨 사이트 [“날씨어때?”](https://github.com/agaxe/nalssieottae) 를 React Native 를 통해 모바일 애플리케이션으로 개발을 진행하였습니다.

## 시안

[Figma](https://www.figma.com/file/AM9e3KQWYQwjAaRHlJCLww/%EB%82%A0%EC%94%A8%EC%96%B4%EB%95%8C)

## 사용 기술

- React Native
- OpenWeatherMap API
- Kakao API

## 실행

> 실행 전 [React Native 에 대한 환경 구축](https://reactnative.dev/docs/environment-setup)이 진행되어 있어야 합니다.

1. 실행을 하기 전 API key 가 필요합니다.
   - [OpenWeatherMap API 키](https://home.openweathermap.org/api_keys)
   - [kakao REST API 키](https://developers.kakao.com/)
2. 프로젝트 최상위 경로에 .env 파일을 생성한 뒤 API key 를 적용해주세요.

   ```bash
   WEATHER_API_KEY='발급받은_OpenWeatherMap_API_키'
   KAKAO_API_KEY='발급받은_kakao_REST_API_키'
   ```

3. node 패키지를 설치해주세요.

   npm

   ```bash
   npm install
   ```

   yarn

   ```bash
   yarn install
   ```

4. 각각의 운영체제에 대한 실행을 진행해주세요.

   ios

   ```bash
   cd ios && pod install && cd ..
   ```

   ```bash
   npx react-native run-ios
   ```

   android

   ```bash
   npx react-native run-android
   ```
