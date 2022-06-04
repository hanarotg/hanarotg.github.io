---
published: true
category:
  - reactnative
---

React Native 를 사용해 프로젝트를 개발하다 보면 눈에 가싯거리입니다. ActivityIndicator를 사용하여 사용자 경험을 개선해 보겠습니다.


```JSX
const LoadingView = () => {
	<SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0', justifyContent: 'center'}}>
		<ActivityIndicator />
	</SafeAreaView>
}

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
