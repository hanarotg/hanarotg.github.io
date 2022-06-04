---
published: true
category:
  - reactnative
---

## 개요
앱 개발 중 리소스 로딩에 시간이 걸리는 페이지가 완전히 로드되기 전까지의 디자인은 사용자 입장에서 매우 불편합니다.
<br />
앱이 미완성되었다는 인식을 심어줄 수 있습니다.
<br />
따라서 React Native 에서 제공하는 기본 요소인 ActivityIndicator를 사용하여 사용자 경험을 개선해 보겠습니다.
<br />
* 참고 : [ActivityIndicator - React Native](https://reactnative.dev/docs/activityindicator)

<br />
## 컴포넌트 생성
리소스를 로딩이 모두 끝나기 전에 보여질 컴포넌트입니다.
<br />

```js
const LoadingView = () => {
	<SafeAreaView style=&#123;&#123; flex: 1, backgroundColor: '#f0f0f0', justifyContent: 'center'&#125;&#125;>
		<ActivityIndicator />
	</SafeAreaView>
}
```

<br />
```js
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
```


업데이트 예정
