// makeReact 함수는 간략화된 useState 훅의 모의 버전입니다.
const makeReact = function () {
  // 전역 상태 저장소입니다. 실제 React에서는 각 컴포넌트가 자신의 상태를 관리합니다.
  const global = {};
  let index = 0;

  function useState(initialState) {
    // 상태 배열이 아직 초기화되지 않았다면 초기화합ㄴ디ㅏ.
    // 이 배열은 모든 상태 값을 저장합니다.
    if(global.states === undefined) {
      global.state = [];
    }
    
  }
}