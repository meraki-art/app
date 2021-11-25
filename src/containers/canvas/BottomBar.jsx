import React from 'react';
import {
  usePanZoom,
  useMaxCanvas,
  useColor,
  useErase,
  usePalette,
} from '../../state/UserProvider';
import { AppBar, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BottomBar() {
  const { panZoom } = usePanZoom();
  const { maxCanvas } = useMaxCanvas();
  const { color } = useColor();
  const { erase, setErase } = useErase();
  const { showPalette, setShowPalette } = usePalette();

  const bottomTools = [
    {
      icon: 'palette',
      onClick: () => {
        console.log('palette');
        setShowPalette(!showPalette);
      },
    },
    {
      icon: 'paint-brush',
      onClick: () => {
        console.log('brush');
        setErase(false);
      },
    },
    {
      icon: 'stamp',
      onClick: () => console.log('stamp'),
    },
    {
      icon: 'image',
      onClick: () => console.log('image'),
    },
    {
      icon: 'eraser',
      onClick: ({ target }) => {
        console.log(`within eraser! erase: ${erase}, color: ${color}`);
        setErase(true);
      },
    },
  ];

  return (
    <>
      {panZoom || maxCanvas ? (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'start',
            }}
          >
            <FontAwesomeIcon
              icon={bottomTools[0].icon}
              style={{
                borderRadius: '50px',
                padding: '.7rem',
                background: 'white',
              }}
              onClick={bottomTools[0].onClick}
            />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {bottomTools.map((tool) => {
              return (
                <FontAwesomeIcon
                  key={tool.icon}
                  icon={tool.icon}
                  style={{
                    borderRadius: '50px',
                    padding: '.7rem',
                    background: 'white',
                  }}
                  onClick={tool.onClick}
                />
              );
            })}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
