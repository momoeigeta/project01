// import React from "react";
// import './styles/Scroll.css';

// const Scroll2 = () => {

//     (function () {
//         const target = document.getElementById('header'),
//             height = 56;
//         let offset = 0,
//             lastPosition = 0,
//             ticking = false;

//         function onScroll() {
//             if (lastPosition > height) {
//                 if (lastPosition > offset) {
//                     target.classList.add('head--unpinned');
//                 } else {
//                     target.classList.remove('head--unpinned');
//                 }
//                 offset = lastPosition;
//             }
//         };

//         window.addEventListener('scroll', function (e) {
//             lastPosition = window.scrollY;
//             if (!ticking) {
//                 window.requestAnimationFrame(function () {
//                     onScroll(lastPosition);
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         });
//     })();

//     return (
//         <>
//         </>
//     )

// };
// export default Scroll2;