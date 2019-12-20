import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@atlaskit/button';

import { useTranslation } from 'react-i18next';
import { ClicksCountText } from './styled';

require('dotenv/config');

const HelloPage = () => {
  const [clicksCount, setClicksCount] = useState(0);
  const { t } = useTranslation();

  const handleClick = () => {
    setClicksCount((prevValue) => prevValue + 1);
  };

  return (
    <Grid container style={{ maxWidth: '50%', margin: '4rem auto 0 auto' }}>
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <ClicksCountText>{t('clicksCountLabel')} - {clicksCount}</ClicksCountText>
      </Grid>

      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick}>{t('button')}</Button>
      </Grid>
    </Grid>
  );
};

export default HelloPage;
