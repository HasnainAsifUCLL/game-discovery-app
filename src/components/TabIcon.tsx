import { createElement } from 'react';
import { Platform } from 'react-native';

// Simple line icons (24x24, drawn as inline SVG) for the tab bar.
type TabIconName = 'discover' | 'games';

interface TabIconProps {
  name: TabIconName;
  color: string;
  size: number;
}

export function TabIcon({ name, color, size }: TabIconProps) {
  if (Platform.OS !== 'web') {
    return <></>;
  }

  const shapes =
    name === 'discover'
      ? [
          createElement('circle', { cx: 12, cy: 12, r: 10 }),
          createElement('polygon', { points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' }),
        ]
      : [
          createElement('line', { x1: 6, x2: 10, y1: 11, y2: 11 }),
          createElement('line', { x1: 8, x2: 8, y1: 9, y2: 13 }),
          createElement('line', { x1: 15, x2: 15.01, y1: 12, y2: 12 }),
          createElement('line', { x1: 18, x2: 18.01, y1: 10, y2: 10 }),
          createElement('path', {
            d: 'M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z',
          }),
        ];

  return createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    ...shapes,
  );
}
