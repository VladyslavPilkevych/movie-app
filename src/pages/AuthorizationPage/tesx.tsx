// import React, { useState } from 'react';
// import { Tabs, Tab, Box } from '@mui/material';
// import styled from 'styled-components';

// // Общие стили для всего экрана
// const FullScreenContainer = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   background-color: white;
//   align-items: center;
//   justify-content: center;
// `;

// // Стилизация табов
// const TabContainer = styled(Box)`
//   width: 100%;
//   max-width: 600px; /* Максимальная ширина табов */
//   display: flex;
//   justify-content: center;
//   border-bottom: 1px solid #ccc;
// `;

// // Стилизация контента под табами
// const TabContent = styled(Box)`
//   display: flex;
//   position: relative;
//   width: 100%;
//   max-width: 600px; /* Максимальная ширина контента */
//   height: 300px; /* Высота контента, можно изменить */
//   margin-top: 16px;
//   background-color: #f9f9f9;
// `;

// // Статичные контейнеры
// const StaticContainer = styled(Box)`
//   flex: 1;
//   padding: 16px;
//   background-color: #f0f0f0;
//   border-right: 1px solid #ccc;
// `;
export const qwe = 'abc';
// // Двигающийся контейнер
// const MovingContainer = styled(Box)`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   background-color: #e0e0e0;
//   transition: left 0.3s ease;
//   z-index: 1;
//   width: 50%; /* Ширина двигающегося контейнера */
// `;

// const App = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   return (
//     <FullScreenContainer>
//       <TabContainer>
//         <Tabs value={tabIndex} onChange={handleChange} aria-label="tabs example">
//           <Tab label="Tab 1" />
//           <Tab label="Tab 2" />
//         </Tabs>
//       </TabContainer>
//       <TabContent>
//         <StaticContainer>Static Container Left</StaticContainer>
//         <MovingContainer style={{ left: `${tabIndex * 50}%` }}>
//           Moving Container
//         </MovingContainer>
//         <StaticContainer>Static Container Right</StaticContainer>
//       </TabContent>
//     </FullScreenContainer>
//   );
// };

// export default App;
