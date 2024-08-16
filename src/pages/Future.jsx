import FutureContent from '../components/FutureContent';
import * as Sentry from '@sentry/react';

const Future = () => {
  return <FutureContent />;
};

export default Sentry.withProfiler(Future);
