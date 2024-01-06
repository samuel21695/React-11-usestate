// makeReact 함수는 간략화된 useState 훅의 모의 버전입니다.
const makeReact = function () {
  // 전역 상태 저장소입니다. 실제 React에서는 각 컴포넌트가 자신의 상태를 관리합니다.
  const global = {};
  let index = 0;

  function useState(initialState) {
    // 상태 배열이 아직 초기화되지 않았다면 초기화합니다.
    // 이 배열은 모든 상태 값을 저장합니다.
    if(global.states === undefined) {
      global.state = [];
    }

    // 현재 상태를 가져오거나 초기 상태를 설정합니다.
    // 여기서는 상태가 배열에 저장되며, 순서에 따라 관리됩니다.
    // global.states[index] 값이 없으면 initialState를 사용하는 취지의 or 연산자를 사용
    const currentState = global.state[index] || initialState;
    global.states[index] = currentState;

    // setState 함수는 클로저를 사용하여 현재 상태의 인덱스를 기억합니다.
    // 상태를 업데이트하려면 이 함수를 호출합니다.
    const setState = (function () {
      let currentIndex = index; // currentIndex도 클로저이다.
      return function (value) {
        global.states[currnetIndex] = value;
      }
    })();
  }
}