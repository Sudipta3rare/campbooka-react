devServer: {
    overlay: {
      runtimeErrors: (error) => {
        console.log(error.message);
        if (error.message === "ResizeObserver loop completed with undelivered notifications.")
          return false;
        return true;
      }
    }
}
  