---
title: npm package.json 과 package-lock.json 차이점 이해와 필요성
description: npm package.json 과 package-lock.json 차이점 이해와 필요성
keywords: ["npm", "package.json", "package-lock.json", "차이"]
tags: ["npm"]
---

# npm package.json 과 package-lock.json 차이점 이해와 필요성

## 개요

다양한 서드파티 라이브러리들을 사용하기 위해 npm이라는 패키지 매니저를 일반적으로 사용하는데요,

npm을 사용함에 있어 필요한 파일 두 가지, package.json 및 package-lock.json을 이해하고 차이점을 알아보겠습니다.

## package.json과 package-lock.json 차이

이해를 돕기 위해 express 라이브러리를 설치하여 package.json과 package-lock.json을 비교해 보겠습니다.

### package.json

```json
...
"dependencies": {
    "express": "^4.18.2"
  }
...
```

### package-lock.json

```json
...
"node_modules/express": {
      "version": "4.18.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
      "integrity": "sha512-5/PsL6iGPdfQ/lKM1UuielYgv3BUoJfz1aUwU9vHZ+J7gyvwdQXFEBIEIaxeGf0GIcreATNyBExtalisDbuMqQ==",
	  "dependencies": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "1.20.1",
        "content-disposition": "0.5.4",
        "content-type": "~1.0.4",
        "cookie": "0.5.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~1.0.2",
        ...
...
```

**package-lock.json에만 express의 정확한 버전과 의존성 라이브러리 목록을 포함하고 있습니다.**

일반적으로 A라이브러리를 개발/구현하기 위해 다른 B, C, D 라이브러리를 활용합니다. (B 라이브러리는 또 C, D, E, F 라이브러리들을 활용할 가능성이 매우 높구요.)

앞서 package-lock.json 에서 express를 개발하기 위해 accepts, array-flatten, body-parser, content-disposition... 등 정말 많은 라이브러리를 활용하였음을 알 수 있습니다.

각 라이브러리의 버전 또한 명시되어 있음을 확인할 수 있습니다.

하나의 라이브러리는 또 다른 여러 라이브러리들에 의존하고 있습니다. package-lock.json에서 이들의 관계를 상세히 명시한 것이고요.

즉, package.json과 달리 package-lock.json은 4.18.2 버전 express 라이브러리에 대한 정보를 **온전히** 갖고 있습니다.

## 결론 : package-lock.json 이 필요한 이유

핵심은 package.json 보다 package-lock.json이 라이브러리에 대한 온전한 정보를 담고 있음에 있습니다.

라이브러리가 라이브러리를 의존하고 그 라이브러리가 저 라이브러리를 또 의존하고... 매우 복잡한 종속 관계가 생기게 되며 이러한 상황에서 다양한 문제 상황이 발생할 수 있습니다. 오픈소스 생태계의 본질적인 단점이라 할 수 있습니다. 체계적인 시스템이 부족하여 항상 다양한 문제 상황을 고려해야 합니다.

- 예1 : 만약 npm 이 아닌 다른 패키지 매니저(yarn, pnpm 등)을 사용할 경우 의존성 라이브러리를 설치 하는 방식에 차이가 있을 수 있습니다. package.json에 명시된 각 라이브러리 버전명 뿐으로는 정상적인 실행을 장담할 수 없습니다.
- 예2 : 만일 express의 새로운 패치 버전이 있는 경우 npm install 시 새 패치 버전으로 업데이트 됩니다. 이 새 패치 버전에 문제가 있는 상황 발생시 이를 빠르게 대처할 수 있습니다. 라이브러리 개발자들의 실수로 이런 문제가 자주 많이 발생한다고 하네요.

등등 다양한 이유로 package-lcok.json 이 필요하게 됩니다.

상황에 따라 그 이유가 조금씩 다를 수 있지만 package.json과 달리 온전한 라이브러리 정보를 가지고 있어 다양한 문제 상황에 대처할 수 있는 대안이 될 수 있습니다.

package-lock.json이 특정한 한 가지 상황에 필요함이 아닌 다양한 상황에 대처하기 위해 존재함을 이해하시면 되겠습니다.

## 참고 자료

- [What is the role of the package-lock.json](https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json)
- [npm package-locks](https://docs.npmjs.com/cli/v6/configuring-npm/package-locks)
