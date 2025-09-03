/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}/modal` | `/modal`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}/page` | `/page`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(pages)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(pages)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(pages)'}/modal` | `/modal`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(pages)'}/page` | `/page`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(pages)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(pages)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(pages)'}/modal${`?${string}` | `#${string}` | ''}` | `/modal${`?${string}` | `#${string}` | ''}` | `${'/(pages)'}/page${`?${string}` | `#${string}` | ''}` | `/page${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}/modal` | `/modal`; params?: Router.UnknownInputParams; } | { pathname: `${'/(pages)'}/page` | `/page`; params?: Router.UnknownInputParams; } | `/+not-found${`?${string}` | `#${string}` | ''}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
