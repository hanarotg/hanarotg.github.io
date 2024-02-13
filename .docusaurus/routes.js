import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '93e'),
    exact: true
  },
  {
    path: '/blog/about-me',
    component: ComponentCreator('/blog/about-me', 'cec'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'af4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '73b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a8a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '22f'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true
          },
          {
            path: '/tags/2178',
            component: ComponentCreator('/tags/2178', '60b'),
            exact: true
          },
          {
            path: '/tags/백준',
            component: ComponentCreator('/tags/백준', 'b85'),
            exact: true
          },
          {
            path: '/tags/android',
            component: ComponentCreator('/tags/android', '27c'),
            exact: true
          },
          {
            path: '/tags/bfs',
            component: ComponentCreator('/tags/bfs', '16c'),
            exact: true
          },
          {
            path: '/tags/c',
            component: ComponentCreator('/tags/c', '4e7'),
            exact: true
          },
          {
            path: '/tags/docusaurus',
            component: ComponentCreator('/tags/docusaurus', '0fe'),
            exact: true
          },
          {
            path: '/tags/git',
            component: ComponentCreator('/tags/git', '66f'),
            exact: true
          },
          {
            path: '/tags/gradle',
            component: ComponentCreator('/tags/gradle', 'f81'),
            exact: true
          },
          {
            path: '/tags/kotlin',
            component: ComponentCreator('/tags/kotlin', '4e9'),
            exact: true
          },
          {
            path: '/tags/linux',
            component: ComponentCreator('/tags/linux', 'd3c'),
            exact: true
          },
          {
            path: '/tags/python',
            component: ComponentCreator('/tags/python', '5f7'),
            exact: true
          },
          {
            path: '/tags/sort',
            component: ComponentCreator('/tags/sort', 'a1a'),
            exact: true
          },
          {
            path: '/tags/strict-weak-ordering',
            component: ComponentCreator('/tags/strict-weak-ordering', 'b2e'),
            exact: true
          },
          {
            path: '/tags/tensorflow',
            component: ComponentCreator('/tags/tensorflow', 'a1b'),
            exact: true
          },
          {
            path: '/tags/utterances',
            component: ComponentCreator('/tags/utterances', 'a1e'),
            exact: true
          },
          {
            path: '/tags/windows',
            component: ComponentCreator('/tags/windows', '64e'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '2f0'),
            routes: [
              {
                path: '/android/2023-02-27-upload-cert-with-android-studio',
                component: ComponentCreator('/android/2023-02-27-upload-cert-with-android-studio', '160'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/2023-06-24-gradle-in-android',
                component: ComponentCreator('/android/2023-06-24-gradle-in-android', '5d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/2024-01-28-build-release-android-app',
                component: ComponentCreator('/android/2024-01-28-build-release-android-app', '2f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/kotlin/2023-04-26-kotlin-nullability',
                component: ComponentCreator('/android/kotlin/2023-04-26-kotlin-nullability', '53e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/kotlin/2023-05-28-kotlin-array',
                component: ComponentCreator('/android/kotlin/2023-05-28-kotlin-array', 'e1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/algorithm',
                component: ComponentCreator('/category/algorithm', '549'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/android',
                component: ComponentCreator('/category/android', '848'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/computer-science',
                component: ComponentCreator('/category/computer-science', '9a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/docusaurus',
                component: ComponentCreator('/category/docusaurus', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/flutter',
                component: ComponentCreator('/category/flutter', 'cbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/kotlin',
                component: ComponentCreator('/category/kotlin', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/linux',
                component: ComponentCreator('/category/linux', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/others',
                component: ComponentCreator('/category/others', '70a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/software',
                component: ComponentCreator('/category/software', '6e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/computer-science/algorithm/2024-02-02-boj-2178',
                component: ComponentCreator('/computer-science/algorithm/2024-02-02-boj-2178', '9db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/computer-science/algorithm/2024-02-11-fast-io',
                component: ComponentCreator('/computer-science/algorithm/2024-02-11-fast-io', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/computer-science/algorithm/2024-02-11-strick-weak-ordering',
                component: ComponentCreator('/computer-science/algorithm/2024-02-11-strick-weak-ordering', 'bd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/create-a-blog-post',
                component: ComponentCreator('/flutter/create-a-blog-post', 'c6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/others/2024-02-02-select-book',
                component: ComponentCreator('/others/2024-02-02-select-book', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/others/2024-02-08-link',
                component: ComponentCreator('/others/2024-02-08-link', '422'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/2024-02-12-tensorflow-windows-install',
                component: ComponentCreator('/software/2024-02-12-tensorflow-windows-install', '292'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/docusaurus/2024-01-28-docusaurus-deploy copy',
                component: ComponentCreator('/software/docusaurus/2024-01-28-docusaurus-deploy copy', 'b29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/docusaurus/2024-01-29-docusaurus-all-in-one-script',
                component: ComponentCreator('/software/docusaurus/2024-01-29-docusaurus-all-in-one-script', '326'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/docusaurus/2024-02-12-docusaurus-utteranes-dark-mode',
                component: ComponentCreator('/software/docusaurus/2024-02-12-docusaurus-utteranes-dark-mode', '766'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/python/2024-01-30-python-background',
                component: ComponentCreator('/software/python/2024-01-30-python-background', '51e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '96c'),
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
