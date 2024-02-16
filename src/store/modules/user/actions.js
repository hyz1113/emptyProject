const actions = {
  getAccount () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('调用了getAccount 方法');
      }, 1000);
    });
  }
};

export default actions;
