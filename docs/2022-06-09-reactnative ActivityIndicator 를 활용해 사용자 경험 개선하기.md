---
published: true
category:
  - reactnative
tag:
  - activityindicator
---

## 개요

앱 개발 중 리소스 로딩에 시간이 걸리는 페이지가 완전히 로드되기 전까지의 디자인은 사용자 입장에서 매우 불편합니다.
<br />
앱이 미완성되었다는 인식을 심어줄 수 있습니다. (실제로 미완성이지만..) 이러한 경험을 개선하기 위해 많은 어플리케이션에서 ActivityIndicator를 활용하여 경험을 개선합니다. 예) 트위치, 에브리타임
<br />
![onsimulator](https://user-images.githubusercontent.com/34812887/172862355-c8600b01-d313-4bce-b46f-6245f90b0c65.gif)
<br />
따라서 React Native 에서 제공하는 기본 요소인 ActivityIndicator를 사용하여 사용자 경험을 개선해 보겠습니다.
<br />

- 참고 : [ActivityIndicator - React Native](https://reactnative.dev/docs/activityindicator)

<br />

## 컴포넌트 생성

리소스를 로딩이 모두 끝나기 전에 보여질 컴포넌트입니다.
<br />

```jsx
{% raw %}
const LoadingView = () => {
	return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f0', justifyContent: 'center'}}>
          <ActivityIndicator />
      </SafeAreaView>
    )
}
{% endraw %}
```

<br />
로딩이 완료되면 LoadingView 컴포넌트를 보이지 않게 하기 위해 useState와 useEffect를 사용합니다.
<br />ㅋ

```jsx
{% raw %}
const [isPageLoading, setPageLoading] = useState(true);

useState(() => {
const getLoad = () => {
// 데이터 로드
setPageLoading(false);
}
}, [])

if(isPageLoading == true){
return <LoadingView />
}
{% endraw %}
```

<br/>

## 결과

업데이트 예정입니다.
