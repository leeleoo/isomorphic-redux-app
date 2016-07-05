import React from 'react';
import { render } from 'react-dom';


import { createDevTools } from 'redux-devtools';
// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


/*
 * Puts Redux DevTools into a separate window.
 * Based on https://gist.github.com/tlrobinson/1e63d15d3e5f33410ef7#gistcomment-1560218.
 */

const DevTools = createDevTools(
   // Monitors are individually adjustable with props.
   // Consult their repositories to learn about those props.
   // Here, we put LogMonitor inside a DockMonitor.
   // Note: DockMonitor is visible by default.
   <DockMonitor toggleVisibilityKey='ctrl-h'
                changePositionKey='ctrl-q'
                defaultIsVisible={true}>
     <LogMonitor theme='tomorrow' />
   </DockMonitor>
);
export default function createDevToolsWindow(store) {
  // Give it a name so it reuses the same window
  const name = 'Redux DevTools';
  const win = window.open(
    null,
    name,
    'menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=450,height=600'
  );

  if (!win) {
    console.error( // eslint-disable-line no-console
      'Couldn\'t open Redux DevTools due to a popup blocker. ' +
      'Please disable the popup blocker for the current page.'
    );
    return;
  }

  // Reload in case it's reusing the same window with the old content.
  win.location.reload();

  // Set visible Window title.
  win.document.title = name;

  // Wait a little bit for it to reload, then render.
  setTimeout(() => render(
    <DevTools store={store}></DevTools>,
    win.document.body.appendChild(document.createElement('div'))
  ), 10);
}