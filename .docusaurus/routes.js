import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '84b'),
    exact: true
  },
  {
    path: '/en/blog/about-me',
    component: ComponentCreator('/en/blog/about-me', 'a09'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', '3ea'),
    exact: true
  },
  {
    path: '/en/document-list',
    component: ComponentCreator('/en/document-list', '7fb'),
    exact: true
  },
  {
    path: '/en/Page',
    component: ComponentCreator('/en/Page', 'f65'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', 'a68'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'edb'),
    routes: [
      {
        path: '/en/',
        component: ComponentCreator('/en/', '77f'),
        routes: [
          {
            path: '/en/tags',
            component: ComponentCreator('/en/tags', '01c'),
            exact: true
          },
          {
            path: '/en/tags/1167',
            component: ComponentCreator('/en/tags/1167', '84f'),
            exact: true
          },
          {
            path: '/en/tags/1946',
            component: ComponentCreator('/en/tags/1946', 'bca'),
            exact: true
          },
          {
            path: '/en/tags/2178',
            component: ComponentCreator('/en/tags/2178', '982'),
            exact: true
          },
          {
            path: '/en/tags/나머지',
            component: ComponentCreator('/en/tags/나머지', '37f'),
            exact: true
          },
          {
            path: '/en/tags/다익스트라',
            component: ComponentCreator('/en/tags/다익스트라', '97b'),
            exact: true
          },
          {
            path: '/en/tags/백준',
            component: ComponentCreator('/en/tags/백준', '90b'),
            exact: true
          },
          {
            path: '/en/tags/분배법칙',
            component: ComponentCreator('/en/tags/분배법칙', 'e57'),
            exact: true
          },
          {
            path: '/en/tags/비잔틴-장애-허용',
            component: ComponentCreator('/en/tags/비잔틴-장애-허용', '2f9'),
            exact: true
          },
          {
            path: '/en/tags/비트코인',
            component: ComponentCreator('/en/tags/비트코인', 'c85'),
            exact: true
          },
          {
            path: '/en/tags/android',
            component: ComponentCreator('/en/tags/android', 'b96'),
            exact: true
          },
          {
            path: '/en/tags/appstore-connect',
            component: ComponentCreator('/en/tags/appstore-connect', 'e0d'),
            exact: true
          },
          {
            path: '/en/tags/bfs',
            component: ComponentCreator('/en/tags/bfs', '023'),
            exact: true
          },
          {
            path: '/en/tags/blockchain',
            component: ComponentCreator('/en/tags/blockchain', 'ecf'),
            exact: true
          },
          {
            path: '/en/tags/c',
            component: ComponentCreator('/en/tags/c', '4e9'),
            exact: true
          },
          {
            path: '/en/tags/chainlink',
            component: ComponentCreator('/en/tags/chainlink', '96f'),
            exact: true
          },
          {
            path: '/en/tags/checked',
            component: ComponentCreator('/en/tags/checked', '1d2'),
            exact: true
          },
          {
            path: '/en/tags/cxl',
            component: ComponentCreator('/en/tags/cxl', 'd74'),
            exact: true
          },
          {
            path: '/en/tags/docusaurus',
            component: ComponentCreator('/en/tags/docusaurus', 'd22'),
            exact: true
          },
          {
            path: '/en/tags/equinix',
            component: ComponentCreator('/en/tags/equinix', '35f'),
            exact: true
          },
          {
            path: '/en/tags/flutter',
            component: ComponentCreator('/en/tags/flutter', 'cbd'),
            exact: true
          },
          {
            path: '/en/tags/future-builder',
            component: ComponentCreator('/en/tags/future-builder', 'e6d'),
            exact: true
          },
          {
            path: '/en/tags/git',
            component: ComponentCreator('/en/tags/git', '4e6'),
            exact: true
          },
          {
            path: '/en/tags/gradle',
            component: ComponentCreator('/en/tags/gradle', '417'),
            exact: true
          },
          {
            path: '/en/tags/greedy',
            component: ComponentCreator('/en/tags/greedy', '84a'),
            exact: true
          },
          {
            path: '/en/tags/hbm',
            component: ComponentCreator('/en/tags/hbm', '7c3'),
            exact: true
          },
          {
            path: '/en/tags/interconnection',
            component: ComponentCreator('/en/tags/interconnection', 'fb2'),
            exact: true
          },
          {
            path: '/en/tags/kotlin',
            component: ComponentCreator('/en/tags/kotlin', '609'),
            exact: true
          },
          {
            path: '/en/tags/linux',
            component: ComponentCreator('/en/tags/linux', '87e'),
            exact: true
          },
          {
            path: '/en/tags/nightshade',
            component: ComponentCreator('/en/tags/nightshade', '685'),
            exact: true
          },
          {
            path: '/en/tags/opensource',
            component: ComponentCreator('/en/tags/opensource', '138'),
            exact: true
          },
          {
            path: '/en/tags/play-console',
            component: ComponentCreator('/en/tags/play-console', 'f50'),
            exact: true
          },
          {
            path: '/en/tags/python',
            component: ComponentCreator('/en/tags/python', '883'),
            exact: true
          },
          {
            path: '/en/tags/react-native',
            component: ComponentCreator('/en/tags/react-native', '8b1'),
            exact: true
          },
          {
            path: '/en/tags/sort',
            component: ComponentCreator('/en/tags/sort', '26b'),
            exact: true
          },
          {
            path: '/en/tags/strict-weak-ordering',
            component: ComponentCreator('/en/tags/strict-weak-ordering', 'aaa'),
            exact: true
          },
          {
            path: '/en/tags/tensorflow',
            component: ComponentCreator('/en/tags/tensorflow', '39c'),
            exact: true
          },
          {
            path: '/en/tags/utterances',
            component: ComponentCreator('/en/tags/utterances', '2ac'),
            exact: true
          },
          {
            path: '/en/tags/waterfall',
            component: ComponentCreator('/en/tags/waterfall', 'ce2'),
            exact: true
          },
          {
            path: '/en/tags/windows',
            component: ComponentCreator('/en/tags/windows', '7ed'),
            exact: true
          },
          {
            path: '/en/',
            component: ComponentCreator('/en/', 'f8c'),
            routes: [
              {
                path: '/en/android/2023-02-27-upload-cert-with-android-studio',
                component: ComponentCreator('/en/android/2023-02-27-upload-cert-with-android-studio', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/android/2023-06-24-gradle-in-android',
                component: ComponentCreator('/en/android/2023-06-24-gradle-in-android', '8b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/android/2024-01-28-build-release-android-app',
                component: ComponentCreator('/en/android/2024-01-28-build-release-android-app', 'e3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/android/2024-02-24-android-tag-id-name',
                component: ComponentCreator('/en/android/2024-02-24-android-tag-id-name', 'a23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/android/kotlin/2023-04-26-kotlin-nullability',
                component: ComponentCreator('/en/android/kotlin/2023-04-26-kotlin-nullability', '713'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/android/kotlin/2023-05-28-kotlin-array',
                component: ComponentCreator('/en/android/kotlin/2023-05-28-kotlin-array', '178'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/algorithm',
                component: ComponentCreator('/en/category/algorithm', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/android',
                component: ComponentCreator('/en/category/android', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/computer-science',
                component: ComponentCreator('/en/category/computer-science', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/cpp',
                component: ComponentCreator('/en/category/cpp', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/docusaurus',
                component: ComponentCreator('/en/category/docusaurus', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/flutter',
                component: ComponentCreator('/en/category/flutter', '233'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/kotlin',
                component: ComponentCreator('/en/category/kotlin', '070'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/linux',
                component: ComponentCreator('/en/category/linux', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/others',
                component: ComponentCreator('/en/category/others', '3a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/portfolio',
                component: ComponentCreator('/en/category/portfolio', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/react-native',
                component: ComponentCreator('/en/category/react-native', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/category/software',
                component: ComponentCreator('/en/category/software', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-02-02-boj-2178',
                component: ComponentCreator('/en/computer-science/algorithm/2024-02-02-boj-2178', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-02-11-fast-io',
                component: ComponentCreator('/en/computer-science/algorithm/2024-02-11-fast-io', '565'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-02-11-strick-weak-ordering',
                component: ComponentCreator('/en/computer-science/algorithm/2024-02-11-strick-weak-ordering', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-02-20-boj-1946',
                component: ComponentCreator('/en/computer-science/algorithm/2024-02-20-boj-1946', '7fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-02-23-byzantine-fault-tolerance',
                component: ComponentCreator('/en/computer-science/algorithm/2024-02-23-byzantine-fault-tolerance', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-02-23-division-in-algorithm',
                component: ComponentCreator('/en/computer-science/algorithm/2024-02-23-division-in-algorithm', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/algorithm/2024-03-06-boj-1167',
                component: ComponentCreator('/en/computer-science/algorithm/2024-03-06-boj-1167', '7d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/computer-science/cpp/2024-02-15-cpp-vector-parameter-as-ref',
                component: ComponentCreator('/en/computer-science/cpp/2024-02-15-cpp-vector-parameter-as-ref', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/flutter/2024-02-28-flutter-expanded-widget-height-error',
                component: ComponentCreator('/en/flutter/2024-02-28-flutter-expanded-widget-height-error', '5b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/flutter/2024-03-21-flutter-futurebuilder-reload',
                component: ComponentCreator('/en/flutter/2024-03-21-flutter-futurebuilder-reload', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/2024-02-08-link',
                component: ComponentCreator('/en/others/2024-02-08-link', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/life/2023-12-12-real-estate-pre-sale',
                component: ComponentCreator('/en/others/life/2023-12-12-real-estate-pre-sale', '7c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/life/2023-12-13-long-term-real-estate-sale',
                component: ComponentCreator('/en/others/life/2023-12-13-long-term-real-estate-sale', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/life/2024-02-02-select-book',
                component: ComponentCreator('/en/others/life/2024-02-02-select-book', '205'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/life/2024-03-17-lp-gp-waterfall',
                component: ComponentCreator('/en/others/life/2024-03-17-lp-gp-waterfall', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/portfolio/2023-08-06-checked',
                component: ComponentCreator('/en/others/portfolio/2023-08-06-checked', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/tech/2024-02-19-cxl-memory',
                component: ComponentCreator('/en/others/tech/2024-02-19-cxl-memory', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/tech/2024-02-27-night-shade-chicago',
                component: ComponentCreator('/en/others/tech/2024-02-27-night-shade-chicago', 'cc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/tech/2024-03-01-chainlink-blockchain-solutions',
                component: ComponentCreator('/en/others/tech/2024-03-01-chainlink-blockchain-solutions', 'a00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/tech/2024-03-12-equinix-interconnection-solutions',
                component: ComponentCreator('/en/others/tech/2024-03-12-equinix-interconnection-solutions', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/others/tech/2024-03-21-hbm',
                component: ComponentCreator('/en/others/tech/2024-03-21-hbm', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/react-native/2023-02-12-react-native-android-includefontpadding',
                component: ComponentCreator('/en/react-native/2023-02-12-react-native-android-includefontpadding', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/react-native/2023-02-12-react-native-google-signin-sha-1',
                component: ComponentCreator('/en/react-native/2023-02-12-react-native-google-signin-sha-1', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/react-native/2023-02-12-react-native-gradle-unsupported-classes-62-error',
                component: ComponentCreator('/en/react-native/2023-02-12-react-native-gradle-unsupported-classes-62-error', '650'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/react-native/2023-02-12-react-native-tips',
                component: ComponentCreator('/en/react-native/2023-02-12-react-native-tips', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/react-native/2024-02-29-react-native-speicifc-version-init',
                component: ComponentCreator('/en/react-native/2024-02-29-react-native-speicifc-version-init', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/2023-02-13-appstore-connect-curl-api',
                component: ComponentCreator('/en/software/2023-02-13-appstore-connect-curl-api', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/2024-02-12-tensorflow-windows-install',
                component: ComponentCreator('/en/software/2024-02-12-tensorflow-windows-install', '757'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/2024-02-24-play-console-developer-authentication',
                component: ComponentCreator('/en/software/2024-02-24-play-console-developer-authentication', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/docusaurus/2024-01-28-docusaurus-deplo',
                component: ComponentCreator('/en/software/docusaurus/2024-01-28-docusaurus-deplo', '830'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/docusaurus/2024-01-29-docusaurus-all-in-one-script',
                component: ComponentCreator('/en/software/docusaurus/2024-01-29-docusaurus-all-in-one-script', '831'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/docusaurus/2024-02-12-docusaurus-utteranes-dark-mode',
                component: ComponentCreator('/en/software/docusaurus/2024-02-12-docusaurus-utteranes-dark-mode', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/docusaurus/2024-02-20-docusaurus-autogenerate-list',
                component: ComponentCreator('/en/software/docusaurus/2024-02-20-docusaurus-autogenerate-list', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/python/2024-01-30-python-background',
                component: ComponentCreator('/en/software/python/2024-01-30-python-background', '385'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/',
                component: ComponentCreator('/en/', '0d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
