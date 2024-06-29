import { ComponentType, FC, Suspense } from 'react';

interface LazyLoadProps {
  Component: ComponentType<any>;
}

const LazyLoad: FC<LazyLoadProps> = ({ Component, ...props }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default LazyLoad;
