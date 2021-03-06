import { RouteComponentProps, RouterProps } from '@reach/router';
import { StringParam, useQueryParam } from 'use-query-params';
import React from 'react';
import { GraphQlWrapper } from '../components/GraphQlWrapper';
import { WelcomePage } from './welcome';
import { GraphQlPage } from './graphql';

export function IndexPage(_: RouteComponentProps) {
  const [url] = useQueryParam('url', StringParam);
  const [path] = useQueryParam('path', StringParam);

  if (url) {
    return <GraphQlPage key={url} url={url} path={path || undefined} />;
  }
  return <WelcomePage />;
}
