const logMiddleware = store => next => action => {
    console.info(store);
    next(action);
};
export default logMiddleware;
