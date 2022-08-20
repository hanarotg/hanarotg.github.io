---
layout: post
category: checked
title: 지속 가능한 개발 방식에 대한 고민 End point To End Point
---

## 개요

서비스 개발이 1할이라면 서비스 유지 보수는 9할을 차지한다고 말해도 과언이 아닐 겁니다. 서비스 개발 과정에서 어떻게 API를 설계함에 따라 차후 유지 보수에 걸리는 시간은 천차만별입니다. 제가 `reactnative`로 간단한 앱을 만드는 과정에서 생각한 지속 가능한 개발 방식에 대해서 이야기 하려고 합니다.

## CREATE, UPDATE

### case) 외부 API를 통해 받는 객체 형식이 바뀌는 경우

저는 [kakao API](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book)를 통해 받을 수 있는 도서 정보를 이용하고 있습니다. 최근 알라딘 API가 훨씬 관리하기 편하고 관리에 신경쓰고 있는 것 같아 알라딘 API로 바꿀까 생각중입니다.

독서 기록 어플리케이션을 만들려고 합니다.
책을 독서 목록에 추가하는 함수를 다음과 같이 설계했습니다.

## READ, DELETE

## 모든 데이터 생성 시 시각도 같이

생성 시각을 같이 저장하면 데이터 응용, 분석에 정말 유용합니다. DB로 파이어베이스 firestore 를 사용하여 개발하신다면 이를 [BigQuery](https://cloud.google.com/bigquery/)와 연동하여 비전공자도 할 수 있는(SQL 쿼리문 정도는 만질 수 있는...) 데이터 분석이 가능합니다.

```javascript
// react native firebase를 사용하는 경우 예제
return await firestore()
  .collection("users")
  .doc(userUID)
  .collection("bookReadingCollection")
  .doc(ISBN)
  .set({
    book,
    addDate: firestore.Timestamp.now(), // 이부분
  });
```

### case) 사람들이 책을 많이 추가하는 시간대를 알고 싶다.
