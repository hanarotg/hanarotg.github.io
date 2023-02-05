---
layout: single
title: lol 챔피언 및 스펠 이미지 데이터 받기
category: programming
tags: spellteam leagueoflegends node
toc: true
toc_sticky: true
---

게임 리그 오브 레전드 API를 사용해보면서 불편함 점이 여럿 있었습니다. 그중 하나가 진행중인 인게임 정보를 가져오는 [SPECTATOR-V4 api](https://developer.riotgames.com/apis#spectator-v4/GET_getCurrentGameInfoBySummoner) 입니다.

SPECTATOR-V4 는 진행중인 인게임 정보(참여중인 각각의 소환사 명, 챔피언 key, 룬, 진행시작 시간 등)를 리턴합니다.

![spectator-v4](https://user-images.githubusercontent.com/34812887/173229633-a72f968e-5c2a-4463-a1a0-5457b1a9a012.png)

# 문제 이해

RIOT에서 제공하는 챔피언 데이터는 , 스펠 데이터는

## Node로 규격에 맞는 이미지 다운로드하기

여기서 게임 데이를 fetch를 위해 `axios`와 로컬 파일 시스템 관리를 위한 `fs`, 이미지를 저장할 때 유용한 경로 지정 도구 `path`를 사용해 보겠습니다.

다양한 환경에 대응하기 위해 변수 몇개를 추가로 지정합니다.

`fs.writeFile`호출 시 파일을 쓸 디렉토리가 존재하지 않을 경우 에러를 발생하기 때문에 사전에 필요한 디렉토리 `spells`, `champions` 존재 유무를 확인하고 없는 경우 새로 생성합니다.

```javascript
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// common settings
const version = "12.11.1";
const region = "en_US";
const spells_dir = path.join(__dirname, "spells");
const champions_dir = path.join(__dirname, "champions");

// check dir
if (fs.existsSync(champions_dir) == false) {
  fs.mkdirSync(champions_dir);
}
if (fs.existsSync(spells_dir) == false) {
  fs.mkdirSync(spells_dir);
}
```

`axios`를 이용해 챔피언 리스트를 받습니다.

```javascript
const champion_list_url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/champion.json`;
const champion_image_url = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion`;

const response = await axios.get(champion_list_url);
const champion_list = response.data.data;
```

받은 챔피언 리스트를 선회하며 챔피언 이미지를 다운로드합니다.

```javascript
Object.entries(champion_list).forEach(async ([key, value]) => {
  try {
    // console.log("[key] : ", key, " [value]  ", value.key);
    // download champion image from RIOT
    const response_image = await axios.get(`${champion_image_url}/${key}.png`, {
      responseType: "arraybuffer",
    });

    const buffer = new Buffer.from(response_image.data, "binary").toString(
      "base64"
    );
    fs.writeFile(
      `${champions_dir}/${value.key}.png`,
      buffer,
      "base64",
      (error) => {
        if (error) {
          console.log(
            `[fs] ${value.key}.png (${key}) 파일 업로드 중 에러 : `,
            error
          );
        } else {
          console.log(`[fs] ${value.key}.png (${key}) 파일 업로드 성공`);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
```

전체 코드

```javascript
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// common settings
const version = "12.11.1";
const region = "en_US";
const spells_dir = path.join(__dirname, "spells");
const champions_dir = path.join(__dirname, "champions");

// check dir
if (fs.existsSync(champions_dir) == false) {
  fs.mkdirSync(champions_dir);
}
if (fs.existsSync(spells_dir) == false) {
  fs.mkdirSync(spells_dir);
}

// get Champion data
const setChampionset = async () => {
  try {
    const champion_list_url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/champion.json`;
    const champion_image_url = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion`;

    const response = await axios.get(champion_list_url);
    const champion_list = response.data.data;

    Object.entries(champion_list).forEach(async ([key, value]) => {
      try {
        // console.log("[key] : ", key, " [value]  ", value.key);
        // download champion image from RIOT
        const response_image = await axios.get(
          `${champion_image_url}/${key}.png`,
          { responseType: "arraybuffer" }
        );

        const buffer = new Buffer.from(response_image.data, "binary").toString(
          "base64"
        );
        fs.writeFile(
          `${champions_dir}/${value.key}.png`,
          buffer,
          "base64",
          (error) => {
            if (error) {
              console.log(
                `[fs] ${value.key}.png (${key}) 파일 업로드 중 에러 : `,
                error
              );
            } else {
              console.log(`[fs] ${value.key}.png (${key}) 파일 업로드 성공`);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

setChampionset();
```

## 실행 결과

![champion_list](https://user-images.githubusercontent.com/34812887/173230170-53035155-eedb-464b-87f7-f08b24a8dccf.png)

![](https://user-images.githubusercontent.com/34812887/173230194-3340eeec-9420-4ed0-a6e6-276cf97aa943.png)

이를 응용하여 스펠을 저장할 때 사용할 수 있습니다.

```javascript
// get spell set
const setSpellset = async () => {
  try {
    const spell_list_url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/summoner.json`;
    const spell_image_url = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell`;

    const response = await axios.get(spell_list_url);
    const spell_list = response.data.data;

    let spell_cooldown = {};

    Object.entries(spell_list).forEach(async ([key, value]) => {
      try {
        // console.log(key, value.key, value.cooldown[0]);
        spell_cooldown[value.key] = value.cooldown[0];

        // download spell image from RIOT
        const response_image = await axios.get(
          `${spell_image_url}/${key}.png`,
          {
            responseType: "arraybuffer",
          }
        );

        const buffer = new Buffer.from(response_image.data, "binary").toString(
          "base64"
        );
        fs.writeFile(
          `${spells_dir}/${value.key}.png`,
          buffer,
          "base64",
          (error) => {
            if (error) {
              console.log(
                `[fs] ${value.key}.png (${key}) 파일 업로드 중 에러 : `,
                error
              );
            } else {
              console.log(`[fs] ${value.key}.png (${key}) 파일 업로드 성공`);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });

    // save spell-cooldown json object
    const spell_cooldown_str = JSON.stringify(spell_cooldown);
    fs.writeFile(
      `${spells_dir}/spell_cooldown.json`,
      spell_cooldown_str,
      (error) => {
        if (error) {
          console.log("[spell_cooldown] 저장하는 과정에서 에러 발생 : ", error);
        } else {
          console.log("[spell_cooldown] 저장 완료");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

setSpellset();
```
