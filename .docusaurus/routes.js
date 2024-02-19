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
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '1c3'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', 'a68'),
    exact: true
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '10f'),
    routes: [
      {
        path: '/en/',
        component: ComponentCreator('/en/', '0c4'),
        routes: [
          {
            path: '/en/tags',
            component: ComponentCreator('/en/tags', '01c'),
            exact: true
          },
          {
            path: '/en/tags/2178',
            component: ComponentCreator('/en/tags/2178', '982'),
            exact: true
          },
          {
            path: '/en/tags/백준',
            component: ComponentCreator('/en/tags/백준', '90b'),
            exact: true
          },
          {
            path: '/en/tags/android',
            component: ComponentCreator('/en/tags/android', 'b96'),
            exact: true
          },
          {
            path: '/en/tags/bfs',
            component: ComponentCreator('/en/tags/bfs', '023'),
            exact: true
          },
          {
            path: '/en/tags/c',
            component: ComponentCreator('/en/tags/c', '4e9'),
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
            path: '/en/tags/python',
            component: ComponentCreator('/en/tags/python', '883'),
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
            path: '/en/tags/windows',
            component: ComponentCreator('/en/tags/windows', '7ed'),
            exact: true
          },
          {
            path: '/en/',
            component: ComponentCreator('/en/', '60e'),
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
                path: '/en/computer-science/cpp/2024-02-15-cpp-vector-parameter-as-ref',
                component: ComponentCreator('/en/computer-science/cpp/2024-02-15-cpp-vector-parameter-as-ref', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/flutter/create-a-blog-post',
                component: ComponentCreator('/en/flutter/create-a-blog-post', '031'),
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
                path: '/en/others/personal/2024-02-02-select-book',
                component: ComponentCreator('/en/others/personal/2024-02-02-select-book', 'c55'),
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
                path: '/en/software/2024-02-12-tensorflow-windows-install',
                component: ComponentCreator('/en/software/2024-02-12-tensorflow-windows-install', '757'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/software/docusaurus/2024-01-28-docusaurus-deploy copy',
                component: ComponentCreator('/en/software/docusaurus/2024-01-28-docusaurus-deploy copy', '09d'),
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
