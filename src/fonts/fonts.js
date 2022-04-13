import { createGlobalStyle } from 'styled-components';


import JostWoff from './Jost-VariableFont_wght.woff';
import JostWoff2 from './Jost-VariableFont_wght.woff2';
import NotoSansWoff from './NotoSans-Regular.woff';
import NotoSansWoff2 from './NotoSans-Regular.woff2';
import BioRhymeExpandedWoff from './BioRhymeExpanded-Regular.woff';
import BioRhymeExpandedWoff2 from './BioRhymeExpanded-Regular.woff2';



export default createGlobalStyle`
   
    @font-face {
        font-family: 'BioRhymeExpanded';
        src: local('BioRhymeExpanded'), local('BioRhymeExpanded'),
        url(${BioRhymeExpandedWoff2}) format('woff2'),
        url(${BioRhymeExpandedWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Jost';
        src: local('Jost'), local('Jost'),
        url(${JostWoff2}) format('woff2'),
        url(${JostWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'NotoSans';
        src: local('NotoSans'), local('NotoSans'),
        url(${NotoSansWoff2}) format('woff2'),
        url(${NotoSansWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    `