export function linearGradient(ctx,width,height,startColor="#fff",endColor="#000"){
  let grand =  ctx.createLinearGradient(0, 0, width, height);
  grand.addColorStop(0,startColor)
  grand.addColorStop(1,endColor)
  return grand
}
// <!--  <svg
// version="1.1"
// style="height: 44px; width: 60px"
// xmlns="http://www.w3.org/2000/svg"
// >
// <text
//   x="30"
//   y="22"
//   style="
//     dominant-baseline: middle;
//     text-anchor: middle;
//     fill: url(#linearGradient);
//   "
// >
//   svg
// </text>
// <defs>
//   <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//     <stop
//       offset="0%"
//       style="stop-color: rgb(255, 255, 0); stop-opacity: 1"
//     />
//     <stop
//       offset="100%"
//       style="stop-color: rgb(255, 0, 0); stop-opacity: 1"
//     />
//   </linearGradient>
// </defs>
// </svg>
// <canvas id="myCanvas" width="200" height="80" ref="canvas" /> -->
// <!-- text-baseline
// text-align:center -->