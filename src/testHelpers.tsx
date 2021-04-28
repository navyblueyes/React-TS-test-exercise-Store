global.renderWithRouter = (renderComponent, route) => {
  const history = createMemoryHistory();
  if (route) {
    history.push(route);
  }
  return {
    ...render(<Router history={history}>{renderComponent()}</Router>),
    history,
  };
};
