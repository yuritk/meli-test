import { shallow } from "enzyme";

import ThemeProvider from "../ThemeProvider";

it("renders with theme properties", () => {
  const theme = {
    spacing: {
      unit: 8,
    }
  }
  const ThemedComponent = shallow(
    <ThemeProvider theme={theme}>
      <p>Test Paragraph</p>
    </ThemeProvider>
  );

  expect(ThemedComponent.props().theme).toMatchObject(theme);
});
