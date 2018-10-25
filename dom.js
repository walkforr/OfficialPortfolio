const show = function () {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = 'initial';
    }
  }

  const hide = function () {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = 'none';
    }
  }