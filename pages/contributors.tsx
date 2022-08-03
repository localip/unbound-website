import type Addon from '@typings/structures/addon';

import { Text, Card, useTheme, Collapse, Divider } from '@geist-ui/core';
import NavBar from '@components/partials/navbar';
import React, { CSSProperties } from 'react';

interface Themes {
   data: Addon[];
   count: number;
}

export default function Themes(): React.ReactNode {
   const styles = useStyles();

   return (<>
      <NavBar />
      <div style={styles.container}>
         <Text h3>Contributors</Text>
         <Divider />
         Coming Soon.
      </div>
   </>);
};

function useStyles(): Record<string, CSSProperties> {
   const theme = useTheme();

   return {
      container: {
         maxWidth: '1200px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'flex-start',
         margin: '50px auto 0 auto',
         paddingInline: 24
      },
      collapse: {
         borderTop: 'none'
      },
      collapsibles: {

      },
      card: {

      }
   };
}